import { MainLayout } from '../layouts/MainLayout.js'

export function DaftarMitra() {
  const content = `
    <section class="py-10 max-w-xl mx-auto">
      <h2 class="text-3xl font-bold text-green-700 mb-4 text-center">Gabung Jadi Mitra KomposID</h2>
      <p class="text-gray-700 mb-6 text-center">
        Dapatkan akses distribusi kompos, pelatihan, dan jaringan petani organik di seluruh Indonesia.
      </p>

      <ul class="list-disc list-inside text-sm text-gray-600 mb-6">
        <li>Harga khusus mitra</li>
        <li>Dibantu promosi dan distribusi</li>
        <li>Pelatihan dan pendampingan langsung</li>
        <li>Komisi penjualan otomatis</li>
      </ul>

      <form id="form-mitra" class="space-y-4 bg-white shadow p-6 rounded-xl">
        <div>
          <label class="block text-sm font-medium">Nama Lengkap</label>
          <input type="text" class="w-full border px-3 py-2 rounded" required>
        </div>
        <div>
          <label class="block text-sm font-medium">Email</label>
          <input type="email" class="w-full border px-3 py-2 rounded" required>
        </div>
        <div>
          <label class="block text-sm font-medium">No HP / WA</label>
          <input type="text" class="w-full border px-3 py-2 rounded" required>
        </div>
        <div>
          <label class="block text-sm font-medium">Alamat Lengkap</label>
          <textarea class="w-full border px-3 py-2 rounded" rows="3" required></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium">Kenapa ingin jadi mitra?</label>
          <textarea class="w-full border px-3 py-2 rounded" rows="2"></textarea>
        </div>
        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded w-full">Daftar Sekarang</button>
      </form>
    </section>
  `
  MainLayout(content)
}
