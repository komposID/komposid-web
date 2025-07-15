import { userSession } from '../store/user.js'

export function Investor() {
  const content = `
    <section class="py-8 px-4 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-green-700 mb-4">Dashboard Investor</h1>
      <p class="text-gray-700 mb-6">Halo, <strong>${userSession.nama}</strong>! Anda login sebagai <span class="font-semibold">${userSession.role}</span>.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white shadow rounded-lg p-4 border border-gray-200">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Total Investasi</h2>
          <p class="text-3xl text-green-600 font-semibold">Rp 12.500.000</p>
        </div>
        <div class="bg-white shadow rounded-lg p-4 border border-gray-200">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Proyek Aktif</h2>
          <p class="text-3xl text-green-600 font-semibold">3 Proyek</p>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Riwayat Investasi</h2>
        <ul class="space-y-3">
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">Investasi Rp 5.000.000 di "Kompos Brebes"</li>
          <li class="bg-white p-4 rounded shadow border-l-4 border-green-500">Investasi Rp 7.500.000 di "Kompos Banyumas"</li>
        </ul>
      </div>
    </section>
  `

  return {
    html: content
  }
}
