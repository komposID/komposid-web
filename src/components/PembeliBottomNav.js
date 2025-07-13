export function PembeliBottomNav(currentPath = '') {
  const navs = [
    { href: '#/pembeli', label: 'Transaksi', icon: basketIcon() },
    { href: '#/pembeli/status', label: 'Status', icon: statusIcon() },
    { href: '#/produk', label: 'Beli Lagi', icon: shopIcon() },
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

function basketIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>`
}
function statusIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>`
}
function shopIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v4H3z" /><path d="M5 7v14h14V7" /></svg>`
}
