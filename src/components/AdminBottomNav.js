export function AdminBottomNav(currentPath = '') {
  const navs = [
    { href: '#/admin', label: 'Beranda', icon: homeIcon() },
    { href: '#/admin/produk', label: 'Produk', icon: boxIcon() },
    { href: '#/admin/mitra', label: 'Mitra', icon: usersIcon() },
    { href: '#/admin/investor', label: 'Investor', icon: coinIcon() },
    { href: '#/admin/laporan', label: 'Laporan', icon: chartIcon() },
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

// ICONS
function homeIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-7-7v18"/></svg>`
}
function boxIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>`
}
function usersIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-4-4h-1m-6 6h6m-6-4a4 4 0 01-4-4V7a4 4 0 014-4h6a4 4 0 014 4v5a4 4 0 01-4 4h-6z"/></svg>`
}
function coinIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>`
}
function chartIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 15l-4-4-4 6-3-3" /></svg>`
}
