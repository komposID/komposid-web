import { DashboardLayout } from '../layouts/DashboardLayout.js'

export function Admin() {
  const content = `
    <h2 class="text-2xl font-bold mb-4 text-green-800">Dashboard Admin</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white shadow p-4 rounded text-center">
        <h3 class="text-lg font-semibold text-green-700">Produk</h3>
        <p class="text-2xl font-bold">12</p>
      </div>
      <div class="bg-white shadow p-4 rounded text-center">
        <h3 class="text-lg font-semibold text-green-700">Mitra</h3>
        <p class="text-2xl font-bold">25</p>
      </div>
      <div class="bg-white shadow p-4 rounded text-center">
        <h3 class="text-lg font-semibold text-green-700">Investor</h3>
        <p class="text-2xl font-bold">18</p>
      </div>
      <div class="bg-white shadow p-4 rounded text-center">
        <h3 class="text-lg font-semibold text-green-700">Transaksi</h3>
        <p class="text-2xl font-bold">98</p>
      </div>
    </div>

    <div class="bg-white shadow p-6 rounded">
      <h3 class="text-lg font-semibold mb-2 text-green-700">Log Aktivitas Terbaru</h3>
      <ul class="list-disc list-inside text-sm text-gray-700">
        <li>Pendaftaran mitra baru: Andi - Brebes</li>
        <li>Investasi baru: Rp 5.000.000 dari Rina</li>
        <li>Produk baru ditambahkan: Kompos Super</li>
        <li>Pesanan dari: Pak Budi (Karawang)</li>
      </ul>
    </div>
  `
  DashboardLayout(content, 'Admin')
}
