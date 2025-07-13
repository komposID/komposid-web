import { Home } from '../pages/Home.js'
import { Produk } from '../pages/Produk.js'
import { DaftarMitra } from '../pages/DaftarMitra.js'
import { DaftarInvestor } from '../pages/DaftarInvestor.js'
import { Tentang } from '../pages/Tentang.js'
import { Kontak } from '../pages/Kontak.js'
import { ProdukDetail } from '../pages/ProdukDetail.js'

// Dashboard Berdasarkan Role
import { Admin } from '../dashboards/Admin.js'
import { MitraDashboard } from '../pages/dashboard/Mitra.js'
import { InvestorDashboard } from '../pages/dashboard/Investor.js'
import { PembeliDashboard } from '../pages/dashboard/Pembeli.js'

export function router(app) {
  const route = window.location.hash.slice(1) || '/'

  switch (route) {
    case '/':
      return Home()
    case '/produk':
      return Produk()
    case '/produk-detail':
      return ProdukDetail()
    case '/daftar-mitra':
      return DaftarMitra()
    case '/daftar-investor':
      return DaftarInvestor()
    case '/tentang':
      return Tentang()
    case '/kontak':
      return Kontak()

    // Dashboard Role
    case '/admin':
      return Admin()
    case '/mitra':
      return MitraDashboard()
    case '/investor':
      return InvestorDashboard()
    case '/pembeli':
      return PembeliDashboard()

    default:
      return NotFound()
  }
}

window.addEventListener('hashchange', () => router(document.querySelector('#app')))
window.addEventListener('DOMContentLoaded', () => router(document.querySelector('#app')))

function NotFound() {
  const app = document.querySelector('#app')
  app.innerHTML = `
    <div class="text-center mt-10 text-red-600">
      <h1 class="text-4xl font-bold">404</h1>
      <p class="text-gray-500">Halaman tidak ditemukan</p>
    </div>
  `
}
