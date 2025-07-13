import { userSession } from '../store/user.js'

export function Navbar() {
  return `
    <nav class="bg-green-800 text-white px-4 py-3 flex justify-between items-center">
      <a href="#/" class="text-xl font-bold">KomposID</a>
      <button id="menu-toggle" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <div class="hidden md:flex space-x-4">
        ${menuLinks()}
      </div>
    </nav>

    <!-- Drawer Menu -->
    <div id="drawer" class="fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform translate-x-full transition-transform z-50 md:hidden">
      <div class="p-4 border-b">
        <img src="${userSession.foto}" alt="User" class="w-12 h-12 rounded-full mx-auto mb-2">
        <p class="text-center font-bold">${userSession.nama}</p>
        <p class="text-center text-sm text-gray-500">${userSession.role}</p>
      </div>
      <div id="drawer-links" class="flex flex-col p-4 text-base space-y-2">
        ${menuLinks(true)}
      </div>
    </div>

    <div id="drawer-backdrop" class="fixed inset-0 bg-black bg-opacity-40 hidden z-40 md:hidden"></div>
  `
}

function menuLinks(isDrawer = false) {
  const linkClass = isDrawer
    ? "block px-4 py-3 border-b hover:bg-gray-100 rounded transition"
    : "hover:underline"

  return `
    <a href="#/" class="${linkClass}" data-path="/">Beranda</a>
    <a href="#/produk" class="${linkClass}" data-path="/produk">Produk</a>
    <a href="#/daftar-investor" class="${linkClass}" data-path="/daftar-investor">Investor</a>
    <a href="#/daftar-mitra" class="${linkClass}" data-path="/daftar-mitra">Mitra</a>
    <a href="#/tentang" class="${linkClass}" data-path="/tentang">Tentang</a>
    <a href="#/kontak" class="${linkClass}" data-path="/kontak">Kontak</a>
    <a href="#/login" class="${linkClass} bg-green-600 text-white text-center">Login</a>
  `
}

export function initNavbarEvents() {
  const toggle = document.getElementById('menu-toggle')
  const drawer = document.getElementById('drawer')
  const backdrop = document.getElementById('drawer-backdrop')

  if (toggle && drawer && backdrop) {
    toggle.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full')
      backdrop.classList.remove('hidden')
    })

    backdrop.addEventListener('click', () => {
      drawer.classList.add('translate-x-full')
      backdrop.classList.add('hidden')
    })
  }

  // Highlight menu active (optional)
  const links = document.querySelectorAll('[data-path]')
  links.forEach(link => {
    const current = location.hash.replace('#', '') || '/'
    if (link.getAttribute('data-path') === current) {
      link.classList.add('text-green-600', 'font-semibold')
    }
  })
}
