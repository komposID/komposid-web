import './style.css'
import { router } from './router/router.js'

// Target elemen utama tempat render halaman
const app = document.getElementById('app')

// Routing saat halaman dimuat dan saat hash berubah
window.addEventListener('load', () => router(app))
window.addEventListener('hashchange', () => router(app))
