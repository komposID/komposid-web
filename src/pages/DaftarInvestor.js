import { MainLayout } from '../layouts/MainLayout.js'

export function DaftarInvestor() {
  const content = `
    <section class="py-10 max-w-xl mx-auto">
      <h2 class="text-3xl font-bold text-green-700 mb-4 text-center">Investasi Sosial di KomposID</h2>
      <p class="text-gray-700 mb-6 text-center">
        Jadilah bagian dari perubahan pertanian Indonesia dengan berinvestasi di KomposID. Sistem kami transparan, berdampak, dan aman.
      </p>

      <ul class="list-disc list-inside text-sm text-gray-600 mb-6">
        <li>Return investasi hingga 12-15% per tahun</li>
        <li>Distribusi kompos skala nasional</li>
        <li>Transparansi laporan keuangan real-time</li>
        <li>Dampak sosial & lingkungan nyata</li>
      </ul>

      <form id="form-investor" class="space-y-4 bg-white shadow p-6 rounded-xl">
        <div>
          <label class="block text-sm font-medium">Nama Lengkap</label>
          <input type="text" class="w-full border px-3 py-2 rounded" required>
        </div>
        <div>
          <label class="block text-sm font-medium">Email</label>
          <input type="email" class="w-full border px-3 py-2 rounded" required>
        </div>
        <div>
          <label class="block text-sm font-medium">Nominal Investasi (Rp)</label>
          <input type="number" class="w-full border px-3 py-2 rounded" required>
        </div>
        <div>
          <label class="block text-sm font-medium">Metode Investasi</label>
          <select class="w-full border px-3 py-2 rounded" required>
            <option value="">-- Pilih Metode --</option>
            <option>Transfer Bank</option>
            <option>QRIS / E-Wallet</option>
            <option>Rekening Bersama</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium">Tujuan Investasi / Motivasi</label>
          <textarea class="w-full border px-3 py-2 rounded" rows="3"></textarea>
        </div>
        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded w-full">Ajukan Investasi</button>
      </form>
    </section>
  `
  MainLayout(content)
}
