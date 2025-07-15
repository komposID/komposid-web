import { DashboardLayout } from '../layouts/DashboardLayout.js'
import { userSession } from '../store/user.js'

export function Pembeli() {
  const html = `
    <section class="py-8 px-4 max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold text-green-700 mb-4">Dashboard Pembeli</h1>
      <p class="text-gray-600 mb-6">Halo, <strong>${userSession.nama || 'Pembeli'}</strong>! Selamat datang di KomposID.</p>

      <!-- Ringkasan -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-4 rounded shadow border border-gray-200">
          <h2 class="text-sm font-semibold text-gray-700 mb-1">Jumlah Pesanan</h2>
          <p class="text-3xl font-bold text-green-600">3</p>
        </div>
        <div class="bg-white p-4 rounded shadow border border-gray-200">
          <h2 class="text-sm font-semibold text-gray-700 mb-1">Total Belanja</h2>
          <p class="text-3xl font-bold text-green-600">Rp 270.000</p>
        </div>
        <div class="bg-white p-4 rounded shadow border border-gray-200">
          <h2 class="text-sm font-semibold text-gray-700 mb-1">Status Terakhir</h2>
          <p class="text-lg text-gray-800">Pesanan sedang dikirim</p>
        </div>
      </div>

      <!-- Aktivitas -->
      <div class="mt-8">
        <h2 class="text-xl font-bold mb-3 text-gray-800">Aktivitas Terbaru</h2>
        <ul class="space-y-3">
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">
            Anda membeli "Kompos Premium 5kg" pada 13 Juli 2025.
          </li>
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">
            Anda mengisi alamat pengiriman baru.
          </li>
        </ul>
      </div>
    </section>
  `

  return { html }
}
