export function DaftarMitra() {
  return {
    html: `
      <section class="py-10 max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4 text-center">Formulir Pendaftaran Mitra</h2>
        <p class="text-gray-700 mb-6 text-center">
          Bergabunglah menjadi mitra distribusi, produsen, atau edukator bersama KomposID. Bersama kita bisa hijaukan Indonesia.
        </p>

        <form id="formMitra" class="space-y-4 bg-white p-6 shadow rounded-lg">
          <input type="text" name="nama" placeholder="Nama Lengkap" required class="w-full border p-2 rounded" />
          <input type="email" name="email" placeholder="Email Aktif" required class="w-full border p-2 rounded" />
          <input type="text" name="telepon" placeholder="No. Telepon / WA" required class="w-full border p-2 rounded" />
          <select name="jenis" required class="w-full border p-2 rounded">
            <option value="">Pilih Jenis Mitra</option>
            <option value="Produsen">Produsen Kompos</option>
            <option value="Distributor">Distributor / Reseller</option>
            <option value="Edukator">Edukator Kompos</option>
          </select>
          <textarea name="alamat" placeholder="Alamat Lengkap" required class="w-full border p-2 rounded"></textarea>
          <button type="submit" class="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
            Daftar Sekarang
          </button>
        </form>

        <p id="notifMitra" class="text-center text-green-700 font-semibold mt-4 hidden">Pendaftaran berhasil! Kami akan segera menghubungi Anda.</p>
      </section>
    `,
    onMount: () => {
      document.getElementById('formMitra').addEventListener('submit', (e) => {
        e.preventDefault()
        // Simulasi submit (bisa diganti dengan Supabase atau backend API)
        e.target.reset()
        document.getElementById('notifMitra').classList.remove('hidden')
      })
    }
  }
}
