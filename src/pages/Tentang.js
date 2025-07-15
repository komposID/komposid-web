export function Tentang() {
  return {
    html: `
      <section class="py-10 max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4 text-center">Tentang KomposID</h2>
        <p class="text-gray-700 mb-6 text-center text-lg">
          KomposID adalah platform ekosistem kompos berbasis komunitas dan teknologi.
          Kami membantu petani, produsen lokal, dan masyarakat kota untuk mengubah sampah organik menjadi peluang ekonomi dan penyembuhan bumi.
        </p>

        <div class="bg-gray-100 p-6 rounded-xl mb-6">
          <h3 class="text-xl font-semibold text-green-700 mb-2">Visi</h3>
          <p class="text-gray-700">Menjadi pelopor gerakan pertanian berkelanjutan dan ekonomi hijau berbasis kompos di Indonesia.</p>
        </div>

        <div class="bg-gray-100 p-6 rounded-xl mb-6">
          <h3 class="text-xl font-semibold text-green-700 mb-2">Misi</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Menghubungkan produsen kompos, investor, dan mitra distribusi dalam satu ekosistem</li>
            <li>Mengedukasi masyarakat tentang pentingnya pengolahan sampah organik</li>
            <li>Membuka lapangan kerja hijau & ekonomi kerakyatan</li>
          </ul>
        </div>

        <div class="bg-gray-100 p-6 rounded-xl">
          <h3 class="text-xl font-semibold text-green-700 mb-2">Nilai-Nilai Kami</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Transparansi dan akuntabilitas dalam pengelolaan dana</li>
            <li>Keadilan dan kolaborasi komunitas</li>
            <li>Inovasi teknologi hijau</li>
            <li>Keselarasan spiritual dengan alam</li>
          </ul>
        </div>
      </section>
    `,
    onMount: () => {}
  }
}
