import { supabase } from '../lib/supabase.js'

export async function ProdukDetail() {
  const params = new URLSearchParams(window.location.hash.split('?')[1])
  const id = params.get('id')

  const { data: p, error } = await supabase
    .from('produk')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    return document.getElementById('app').innerHTML = `<p class="p-4 text-red-500">Produk tidak ditemukan</p>`
  }

  document.getElementById('app').innerHTML = `
    <section class="max-w-3xl mx-auto p-4">
      <img src="${p.gambar}" class="w-full h-64 object-cover rounded" />
      <h1 class="text-2xl font-bold mt-4">${p.nama}</h1>
      <p class="text-green-600 text-lg mt-2">Rp ${p.harga.toLocaleString()}</p>
      <p class="mt-4 text-gray-700">${p.deskripsi}</p>
    </section>
  `
}
