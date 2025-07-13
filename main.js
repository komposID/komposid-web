import './style.css'
import { supabase } from './lib/supabase'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex flex-col justify-center items-center bg-green-50">
    <h1 class="text-3xl font-bold mb-6">Login KomposID</h1>
    <input type="email" id="email" placeholder="Email" class="mb-2 p-2 border rounded w-64" />
    <input type="password" id="password" placeholder="Password" class="mb-4 p-2 border rounded w-64" />
    <button id="loginBtn" class="bg-green-600 text-white px-4 py-2 rounded">Login</button>
    <p id="status" class="mt-4 text-sm text-gray-600"></p>
  </div>
`

document.querySelector('#loginBtn').addEventListener('click', async () => {
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    document.querySelector('#status').innerText = 'Login gagal: ' + error.message
  } else {
    document.querySelector('#status').innerText = 'Login berhasil! Selamat datang.'
    // lanjut ke dashboard
  }
})
