export function InvestorBottomNav(currentPath = '') {
  const navs = [
    { href: '#/investor', label: 'Ringkasan', icon: homeIcon() },
    { href: '#/investor/portofolio', label: 'Portofolio', icon: chartIcon() },
    { href: '#/investor/roi', label: 'ROI', icon: moneyIcon() },
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

function homeIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l7-7 7 7M12 5v14" /></svg>`
}
function chartIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3z" /></svg>`
}
function moneyIcon() {
  return `<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>`
}
