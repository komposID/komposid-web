export function DaftarInvestor() {
  return {
    html: `
      <section class="py-10 max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4 text-center">Pendaftaran Investor KomposID</h2>
        <p class="text-gray-700 mb-6 text-center">
          Dukung pertanian berkelanjutan dan jadilah bagian dari ekosistem hijau yang berdampak sosial dan ekonomi.
        </p>

        <form id="formInvestor" class="space-y-4 bg-white p-6 shadow rounded-lg">
          <input type="text" name="nama" placeholder="Nama Lengkap" required class="w-full border p-2 rounded" />
          <input type="email" name="email" placeholder="Email Aktif" required class="w-full border p-2 rounded" />
          <input type="text" name="telepon" placeholder="No. Telepon / WA" required class="w-full border p-2 rounded" />
          <input type="number" name="dana" placeholder="Jumlah Dana yang Siap Diinvestasikan (Rp)" required class="w-full border p-2 rounded" />
          <textarea name="alasan" placeholder="Apa motivasi Anda berinvestasi di kompos?" required class="w-full border p-2 rounded"></textarea>
          <button type="submit" class="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
            Kirim Pendaftaran
          </button>
        </form>

        <p id="notifInvestor" class="text-center text-green-700 font-semibold mt-4 hidden">Terima kasih! Tim kami akan segera menghubungi Anda.</p>
      </section>
    `,
    onMount: () => {
      document.getElementById('formInvestor').addEventListener('submit', (e) => {
        e.preventDefault()
        // Simulasi penyimpanan
        e.target.reset()
        document.getElementById('notifInvestor').classList.remove('hidden')
      })
    }
  }
}
