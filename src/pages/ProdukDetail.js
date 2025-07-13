import { MainLayout } from '../layouts/MainLayout.js'

export function ProdukDetail() {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1])
  const id = parseInt(urlParams.get('id'))
  const produk = dummyProduk().find(p => p.id === id)

  const content = produk ? `
    <section class="py-10 max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row gap-6">
        <img src="${produk.foto}" alt="${produk.nama}" class="w-full md:w-1/2 h-72 object-cover rounded-lg">
        <div class="flex-1">
          <h2 class="text-3xl font-bold text-green-700 mb-2">${produk.nama}</h2>
          <p class="text-gray-700 mb-4">${produk.deskripsi}</p>
          <p class="text-xl font-bold text-green-800 mb-6">Rp ${produk.harga.toLocaleString()}</p>
          <div class="flex gap-4">
            <a href="#/produk" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">← Kembali</a>
            <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">Beli Sekarang</button>
          </div>
        </div>
      </div>
    </section>
  ` : `
    <section class="py-20 text-center text-red-600 text-lg">
      <p>Produk tidak ditemukan atau ID tidak valid.</p>
      <a href="#/produk" class="text-blue-600 underline">Kembali ke daftar produk</a>
    </section>
  `

  MainLayout(content)
}

function dummyProduk() {
  return [
    { id: 1, nama: 'Kompos Premium', deskripsi: 'Dari kohe kambing dan daun segar. Sangat cocok untuk sayur dan buah.', harga: 15000, foto: 'https://source.unsplash.com/400x300/?compost,organic' },
    { id: 2, nama: 'Kompos Kasar', deskripsi: 'Kompos dengan tekstur kasar. Cocok untuk tanaman keras & lahan besar.', harga: 10000, foto: 'https://source.unsplash.com/400x300/?fertilizer' },
    { id: 3, nama: 'Pupuk Organik Cair', deskripsi: 'Siap semprot, mempercepat pertumbuhan dan ketahanan tanaman.', harga: 20000, foto: 'https://source.unsplash.com/400x300/?organic-liquid' }
  ]
}
