import { DashboardLayout } from '../../layouts/DashboardLayout.js'

export function MitraDashboard() {
  const content = `
    <section class="bg-white rounded-lg shadow p-4 text-gray-800">
      <h2 class="text-xl font-bold mb-2">Dashboard Mitra</h2>
      <p>Selamat datang, Mitra KomposID!</p>
      <p class="mt-2 text-sm text-gray-600">Di sini kamu bisa melihat stok, mengelola distribusi, dan memantau komisi.</p>
    </section>
  `

  DashboardLayout(content, "Mitra", "Mitra User")
}
