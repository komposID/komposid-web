import { Home } from '../pages/Home.js'
import { Produk } from '../pages/Produk.js'
import { Tentang } from '../pages/Tentang.js'
import { Kontak } from '../pages/Kontak.js'
import { DaftarMitra } from '../pages/DaftarMitra.js'
import { DaftarInvestor } from '../pages/DaftarInvestor.js'
import { ProdukDetail } from '../pages/ProdukDetail.js'
import { Login } from '../pages/Login.js'

// Halaman Dashboard
import { userSession } from '../store/user.js'
import { Admin } from '../dashboards/Admin.js'
import { Mitra } from '../dashboards/Mitra.js'
import { Investor } from '../dashboards/Investor.js'
import { Pembeli } from '../dashboards/Pembeli.js'

// Layouts
import { PublicLayout } from '../layouts/PublicLayout.js'
import { DashboardLayout } from '../layouts/DashboardLayout.js'

export async function router(app) {
  const fullHash = window.location.hash.slice(1) || '/'
  const [path] = fullHash.split('?')
  let page = null

  switch (path) {
    // ======== Halaman Publik =========
    case '/':
      page = Home()
      break
    case '/produk':
      page = await Produk()
      break
    case '/produk-detail':
      page = await ProdukDetail()
      break
    case '/daftar-mitra':
      page = DaftarMitra()
      break
    case '/daftar-investor':
      page = DaftarInvestor()
      break
    case '/tentang':
      page = Tentang()
      break
    case '/kontak':
      page = Kontak()
      break
    case '/login':
      page = Login()
      break

    // ========= Halaman Dashboard (Semua Role) ======
    case '/admin':
      page = Admin()
      break
    case '/mitra':
      page = Mitra()
      break
    case '/investor':
      page = Investor()
      break
    case '/pembeli':
      page = Pembeli()
      break

    default:
      return NotFound(app)
  }

  // ==== Validasi halaman
  if (!page || !page.html) {
    return NotFound(app)
  }

  // ==== Layout Otomatis Berdasarkan Role
  if (path.startsWith('/admin')) {
    DashboardLayout(page.html, 'Admin', userSession.nama || 'Admin')
  } else if (path === '/mitra') {
    DashboardLayout(page.html, 'Mitra', userSession.nama || 'Mitra')
  } else if (path === '/investor') {
    DashboardLayout(page.html, 'Investor', userSession.nama || 'Investor')
  } else if (path === '/pembeli') {
    DashboardLayout(page.html, 'Pembeli', userSession.nama || 'Pembeli')
  } else {
    PublicLayout(page.html)
  }

  // === Jalankan fungsi setelah render
  if (typeof page.onMount === 'function') {
    setTimeout(() => page.onMount(), 0)
  }
}

function NotFound(app) {
  app.innerHTML = `
    <div class="text-center mt-10 text-red-600">
      <h1 class="text-4xl font-bold">404</h1>
      <p class="text-gray-500">Halaman tidak ditemukan</p>
    </div>
  `
}

window.addEventListener('DOMContentLoaded', () => router(document.querySelector('#app')))
window.addEventListener('hashchange', () => router(document.querySelector('#app')))
