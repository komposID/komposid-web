import { PublicLayout } from '../layouts/PublicLayout.js'
import { supabase } from '../lib/supabase.js'

export function Signup() {
  const html = `
    <section class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div class="bg-white rounded shadow p-6 w-full max-w-md">
        <h1 class="text-2xl font-bold text-center mb-4">Daftar Akun</h1>
        <form id="signupForm" class="space-y-4">
          <input type="text" name="nama" placeholder="Nama Lengkap" required class="w-full border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" required class="w-full border p-2 rounded" />
          <input type="password" name="password" placeholder="Password" required class="w-full border p-2 rounded" />
          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded">Daftar</button>
        </form>
      </div>
    </section>
  `

  return {
    html,
    onMount() {
      document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault()
        const { nama, email, password } = Object.fromEntries(new FormData(e.target))

        const { data, error } = await supabase.auth.signUp({
          email,
          password
        })

        if (error) {
          alert('Gagal daftar: ' + error.message)
        } else {
          alert('Pendaftaran berhasil. Silakan login.')
          location.hash = '#/login'
        }
      })
    }
  }
}
