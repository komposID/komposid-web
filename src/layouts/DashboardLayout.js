import { Navbar } from '../components/Navbar.js'
import { NavbarAdmin } from '../components/NavbarAdmin.js'
import { AdminBottomNav } from '../components/AdminBottomNav.js'
import { MitraBottomNav } from '../components/MitraBottomNav.js'
import { InvestorBottomNav } from '../components/InvestorBottomNav.js'
import { PembeliBottomNav } from '../components/PembeliBottomNav.js'

export function DashboardLayout(content, role = "Admin", name = "Pengguna") {
  const currentPath = window.location.hash.split('?')[0] || '#/admin'

  // Pilih bottom nav berdasarkan role
  let bottomNav = ''
  if (role === 'Admin') {
    bottomNav = AdminBottomNav(currentPath)
  } else if (role === 'Mitra') {
    bottomNav = MitraBottomNav(currentPath)
  }
    else if (role === 'Investor') {
    bottomNav = InvestorBottomNav(currentPath)
  }

    else if (role === 'Pembeli') {
    bottomNav = PembeliBottomNav(currentPath)
  }

  document.getElementById('app').innerHTML = `
    ${Navbar()}
    ${NavbarAdmin(role, name)}

    <main class="pt-[80px] pb-20 md:pb-0 px-4 bg-gray-50 min-h-screen">
      ${content}
    </main>

    ${bottomNav}
  `
}
