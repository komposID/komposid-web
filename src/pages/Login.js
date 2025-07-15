import { supabase } from '../lib/supabase.js'
import { syncProfile } from '../lib/user.js'

export function Login() {
  return {
    html: `
      <section class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div class="bg-white rounded shadow p-6 w-full max-w-md">
          <h1 class="text-2xl font-bold text-center mb-4">Login</h1>
          <form id="loginForm" class="space-y-4">
            <input type="email" name="email" placeholder="Email" required class="w-full border p-2 rounded" />
            <input type="password" name="password" placeholder="Password" required class="w-full border p-2 rounded" />
            <button type="submit" class="w-full bg-green-600 text-white py-2 rounded">Login</button>
          </form>
          <button id="googleLogin" class="mt-4 text-center w-full text-blue-600">Login dengan Google</button>
        </div>
      </section>
    `,
    onMount: () => {
      document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const { data, error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
          alert('Login gagal: ' + error.message)
        } else {
          await syncProfile(data.user)
          const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', data.user.id)
            .single()

          if (profile?.role === 'Admin') location.hash = '#/admin'
          else if (profile?.role === 'Mitra') location.hash = '#/mitra'
          else if (profile?.role === 'Investor') location.hash = '#/investor'
          else location.hash = '#/pembeli'
        }
      })

      document.getElementById('googleLogin').addEventListener('click', async () => {
        const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
        if (error) alert('Login Google gagal: ' + error.message)
      })
    }
  }
}
