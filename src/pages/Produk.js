import { MainLayout } from '../layouts/MainLayout.js'

export function Produk() {
  const content = `
    <section class="py-10">
      <h2 class="text-3xl font-bold text-green-700 mb-6 text-center">Produk Kompos Kami</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${dummyProduk().map(p => `
          <div class="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img src="${p.foto}" alt="${p.nama}" class="w-full h-40 object-cover rounded mb-3">
            <h3 class="text-xl font-semibold">${p.nama}</h3>
            <p class="text-sm text-gray-600 mb-2">${p.deskripsi}</p>
            <p class="text-green-700 font-bold">Rp ${p.harga.toLocaleString()}</p>
            <a href="#/produk-detail?id=${p.id}" class="inline-block mt-3 text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Lihat Detail</a>
          </div>
        `).join('')}
      </div>
    </section>
  `
  MainLayout(content)
}

function dummyProduk() {
  return [
    { id: 1, nama: 'Kompos Premium', deskripsi: 'Dari kohe kambing & daun segar', harga: 15000, foto: 'https://source.unsplash.com/400x300/?compost,organic' },
    { id: 2, nama: 'Kompos Kasar', deskripsi: 'Untuk tanaman keras & lahan luas', harga: 10000, foto: 'https://source.unsplash.com/400x300/?fertilizer' },
    { id: 3, nama: 'Pupuk Organik Cair', deskripsi: 'Siap semprot, hemat, ampuh', harga: 20000, foto: 'https://source.unsplash.com/400x300/?organic-liquid' }
  ]
}
