export function ProdukCard(p) {
  return `
    <div class="bg-white rounded shadow hover:shadow-md transition cursor-pointer" onclick="location.href='#/produk-detail?id=${p.id}'">
      <img src="${p.gambar}" alt="${p.nama}" class="w-full h-40 object-cover rounded-t" />
      <div class="p-3">
        <h3 class="text-lg font-semibold">${p.nama}</h3>
        <p class="text-sm text-gray-600 line-clamp-2">${p.deskripsi}</p>
        <p class="text-green-600 font-bold mt-2">Rp ${p.harga.toLocaleString()}</p>
      </div>
    </div>
  `
}
