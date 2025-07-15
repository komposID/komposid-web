// src/pages/ProdukDetail.js
import { supabase } from '../lib/supabase.js'

export async function ProdukDetail() {
  const params = new URLSearchParams(window.location.hash.split('?')[1])
  const id = params.get('id')

  if (!id) {
    return {
      html: `<div class="text-center mt-10 text-red-500">ID produk tidak ditemukan.</div>`
    }
  }

  const { data: produk, error } = await supabase
    .from('produk')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !produk) {
    return {
      html: `<div class="text-center mt-10 text-red-500">Produk tidak ditemukan.</div>`
    }
  }

  const html = `
    <section class="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mt-10">
      <h1 class="text-2xl font-bold text-green-700 mb-2">${produk.nama}</h1>
      <img src="${produk.gambar}" alt="${produk.nama}" class="w-full h-64 object-cover rounded mb-4">
      <p class="text-gray-700 mb-2">${produk.deskripsi}</p>
      <p class="text-green-600 font-semibold text-xl">Rp ${produk.harga.toLocaleString()}</p>
    </section>
  `

  return { html }
}
