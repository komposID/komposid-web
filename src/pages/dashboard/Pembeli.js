import { DashboardLayout } from '../../layouts/DashboardLayout.js'

export function PembeliDashboard() {
  const content = `
    <section class="bg-white rounded-lg shadow p-4 text-gray-800">
      <h2 class="text-xl font-bold mb-2">Dashboard Pembeli</h2>
      <p>Selamat datang, Pembeli KomposID!</p>
      <div class="mt-4">
        <h3 class="font-semibold mb-1">Riwayat Pembelian</h3>
        <ul class="text-sm text-gray-600 space-y-2">
          <li>✅ Kompos Takakura - 20kg - <span class="text-green-600">Selesai</span></li>
          <li>⌛ Kompos Kohe - 50kg - <span class="text-yellow-500">Dalam Proses</span></li>
        </ul>
      </div>
    </section>
  `

  DashboardLayout(content, "Pembeli", "Pembeli Aktif")
}
