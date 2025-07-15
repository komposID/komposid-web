import { DashboardLayout } from '../layouts/DashboardLayout.js'
import { userSession } from '../store/user.js'

export function Mitra() {
  const content = `
    <section class="py-8 px-4 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-green-700 mb-4">Dashboard Mitra</h1>
      <p class="text-gray-700 mb-6">Halo, <strong>${userSession.nama || 'Mitra'}</strong>! Anda login sebagai <span class="font-semibold">${userSession.role || 'Mitra'}</span>.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white shadow rounded-lg p-6 border border-gray-200">
          <h2 class="text-lg font-bold text-gray-800 mb-2">Produk Saya</h2>
          <p class="text-green-600 font-semibold text-3xl">8</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 border border-gray-200">
          <h2 class="text-lg font-bold text-gray-800 mb-2">Total Penjualan</h2>
          <p class="text-green-600 font-semibold text-3xl">Rp 4.200.000</p>
        </div>
      </div>

      <div class="mt-10">
        <h2 class="text-2xl font-bold mb-4">Aktivitas Terbaru</h2>
        <ul class="space-y-3">
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">Kompos Padat Batch 3 telah dikirim.</li>
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">Transaksi baru dari Pembeli "Bu Ina"</li>
        </ul>
      </div>
    </section>
  `

  return {
    html: content
  }
}
