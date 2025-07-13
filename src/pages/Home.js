import { MainLayout } from '../layouts/MainLayout.js'

export function Home() {
  const content = `
    <section class="text-center py-10">
      <h1 class="text-4xl font-bold text-green-700 mb-4">Selamat Datang di KomposID</h1>
      <p class="text-gray-700 mb-6">Solusi Kompos Berbasis Teknologi.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a href="#/daftar-mitra" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Gabung Mitra</a>
        <a href="#/produk" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">Lihat Produk</a>
        <a href="#/login" class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded">Login</a>
      </div>
    </section>
  `
  MainLayout(content)
}
