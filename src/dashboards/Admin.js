import { DashboardLayout } from '../layouts/DashboardLayout.js'
import { userSession } from '../store/user.js'

export function Admin() {
  const content = `
    <section class="py-8 px-4 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-green-700 mb-4">Dashboard Admin</h1>
      <p class="text-gray-700 mb-6">Halo, <strong>${userSession.nama || 'Admin'}</strong>! Anda login sebagai <span class="font-semibold">${userSession.role || 'Admin'}</span></p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white shadow rounded-lg p-4 border border-gray-200">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Total Produk</h2>
          <p class="text-3xl text-green-600 font-semibold">12</p>
        </div>
        <div class="bg-white shadow rounded-lg p-4 border border-gray-200">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Total Mitra</h2>
          <p class="text-3xl text-green-600 font-semibold">5</p>
        </div>
        <div class="bg-white shadow rounded-lg p-4 border border-gray-200">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Total Investor</h2>
          <p class="text-3xl text-green-600 font-semibold">3</p>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Aktivitas Terbaru</h2>
        <ul class="space-y-3">
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">Produk baru "Kompos Cair Super" ditambahkan.</li>
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">Mitra "Pak Budi" mendaftar.</li>
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">Investor "Bu Rina" investasi Rp 1.500.000</li>
        </ul>
      </div>
    </section>
  `

  return { html: content }
}
