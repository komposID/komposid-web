import { supabase } from '../lib/supabase.js'
import { ProdukCard } from '../components/ProdukCard.js'

export async function Produk() {
  const { data: produkList, error } = await supabase
    .from('produk')
    .select('*')
    .order('created_at', { ascending: false })

  let html = `<section class="p-4 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">`

  if (error) {
    html += `<p class="text-red-500">Gagal ambil produk</p>`
  } else {
    html += produkList.map(p => ProdukCard(p)).join('')
  }

  html += `</section>`
  document.getElementById('app').innerHTML = html
}
