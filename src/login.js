import './style.css'
import { supabase } from './lib/supabase'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-green-50 flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold text-green-800 mb-4">Login KomposID</h1>
    <input id="email" type="email" placeholder="Email" class="mb-2 p-2 border w-64 rounded" />
    <input id="password" type="password" placeholder="Password" class="mb-4 p-2 border w-64 rounded" />
    <button id="loginBtn" class="bg-green-700 text-white px-4 py-2 rounded">Login</button>
    <p id="status" class="text-sm mt-4 text-red-600"></p>
  </div>
`

document.getElementById('loginBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    document.getElementById('status').innerText = `Login gagal: ${error.message}`
  } else {
    document.getElementById('status').innerText = `Login berhasil!`
    // TODO: redirect ke dashboard nanti
  }
})
