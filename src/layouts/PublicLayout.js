import { Navbar, NavbarInit } from '../components/Navbar.js'
import { Footer } from '../components/Footer.js'

export function PublicLayout(content) {
  document.getElementById('app').innerHTML = `
    ${Navbar()}
    <main class="pt-20 pb-24 min-h-screen bg-gray-50">
      ${content}
    </main>
    ${Footer()}
  `
  NavbarInit()
}
