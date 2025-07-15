import { DashboardLayout } from '../layouts/DashboardLayout.js'
import { userSession } from '../store/user.js'

export function Pembeli() {
  const html = `
    <section class="py-8 px-4 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-green-700 mb-4">Dashboard Pembeli</h1>
      <p class="text-gray-700 mb-6">
        Selamat datang, <strong>${userSession.nama}</strong>! Anda login sebagai <span class="font-semibold">${userSession.role}</span>.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-xl shadow p-6 border border-gray-200">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Riwayat Pesanan</h2>
          <p class="text-gray-600">Belum ada pesanan.</p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 border border-gray-200">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Favorit</h2>
          <p class="text-gray-600">Belum ada produk favorit.</p>
        </div>
      </div>
    </section>
  `

  return {
    html,
    onMount() {
      DashboardLayout(html, "Pembeli", userSession.nama)
    }
  }
}
