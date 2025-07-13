import { DashboardLayout } from '../../layouts/DashboardLayout.js'

export function InvestorDashboard() {
  const content = `
    <section class="bg-white rounded-lg shadow p-4 text-gray-800">
      <h2 class="text-xl font-bold mb-2">Dashboard Investor</h2>
      <p>Selamat datang, Investor KomposID!</p>
      <p class="mt-2 text-sm text-gray-600">Pantau ROI, portofolio, dan laporan keuangan investasimu di sini.</p>
    </section>
  `
  DashboardLayout(content, "Investor", "Investor Kompos")
}
