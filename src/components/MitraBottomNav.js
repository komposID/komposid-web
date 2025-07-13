export function MitraBottomNav(currentPath = '') {
  const navs = [
    { href: '#/mitra', label: 'Beranda', icon: homeIcon() },
    { href: '#/mitra/stok', label: 'Stok', icon: boxIcon() },
    { href: '#/mitra/distribusi', label: 'Distribusi', icon: truckIcon() },
    { href: '#/mitra/komisi', label: 'Komisi', icon: coinIcon() },
  ]

  return `
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around items-center text-sm z-50 md:hidden">
      ${navs.map(nav => `
        <a href="${nav.href}" class="flex flex-col items-center py-2 w-full ${currentPath === nav.href ? 'text-green-600 font-semibold' : 'text-gray-500'}">
          ${nav.icon}
          <span>${nav.label}</span>
        </a>
      `).join('')}
    </nav>
  `
}

// Icon Functions
function homeIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l7-7 7 7M12 5v14"/></svg>`
}
function boxIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>`
}
function truckIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h13v13H3zM16 8h5l-1 4h-4z" /></svg>`
}
function coinIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>`
}
