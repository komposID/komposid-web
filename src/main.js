import './style.css'
import { router } from './router/router.js'

// Tes render dengan router
const app = document.getElementById('app')
router(app) // jangan pakai event listener dulu
