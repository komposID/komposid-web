import { Navbar, initNavbarEvents } from '../components/Navbar.js'
import { Footer } from '../components/Footer.js'

export function MainLayout(content) {
  // Pasang HTML layout lengkap
  const layout = `
    ${Navbar()}
    <main class="p-6 max-w-5xl mx-auto">${content}</main>
    ${Footer()}
  `
  // Render ke #app
  const app = document.querySelector('#app')
  app.innerHTML = layout

  // Aktifkan hamburger menu
  initNavbarEvents()
}
