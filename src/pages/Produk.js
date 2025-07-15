import { supabase } from '../lib/supabase.js'
import { ProdukCard } from '../components/ProdukCard.js'
import { PublicLayout } from '../layouts/PublicLayout.js'

export async function Produk() {
  const { data: produkList, error } = await supabase
    .from('produk')
    .select('*')
    .order('created_at', { ascending: false })

  const content = `
    <!-- INFO PROMO -->
    <div class="bg-green-100 text-green-800 text-sm text-center py-2 rounded-md shadow mb-4 mx-2">
      🌱 Promo Kompos Cair Diskon 30% hingga 31 Juli! Pesan sekarang dan dukung pertanian berkelanjutan 🌱
    </div>

    <!-- KONTEN UTAMA PRODUK -->
    <section class="bg-white shadow-md rounded-lg py-8 px-4 mx-auto max-w-6xl border border-gray-200">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-green-800">Produk KomposID</h1>
        <p class="text-gray-600 mt-2">Dukung petani lokal dan lingkungan hijau.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        ${
          error || !produkList
            ? `<p class="text-red-500 col-span-full text-center">Produk tidak dapat dimuat.</p>`
            : produkList.map(p => ProdukCard(p)).join('')
        }
      </div>
    </section>
  `

  return { html: content }
}
