export function ProdukCard(produk) {
  return `
    <div class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 border border-gray-200">
      <a href="#/produk-detail?id=${produk.id}">
        <img src="${produk.gambar}" alt="${produk.nama}" class="w-full h-40 object-cover rounded mb-3" />
        <h3 class="text-lg font-semibold text-green-700">${produk.nama}</h3>
        <p class="text-sm text-gray-600 mt-1 line-clamp-2">${produk.deskripsi}</p>
        <p class="text-green-600 font-bold mt-2">Rp ${produk.harga.toLocaleString()}</p>
      </a>
      <div class="text-right mt-3">
        <a href="#/produk-detail?id=${produk.id}" class="text-blue-600 hover:underline text-sm">
          🔍 Lihat Detail
        </a>
      </div>
    </div>
  `
}
