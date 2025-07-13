import { MainLayout } from '../layouts/MainLayout.js'

export function Kontak() {
  const content = `
    <section class="py-10 max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-green-700 mb-4 text-center">Hubungi Kami</h2>
      <p class="text-gray-700 mb-6 text-center">
        Jika Anda memiliki pertanyaan, ide kerja sama, atau ingin terlibat, silakan hubungi kami melalui kontak berikut.
      </p>

      <div class="bg-gray-100 rounded-xl p-6 space-y-4">
        <div>
          <h3 class="font-semibold text-green-800">WhatsApp</h3>
          <p><a href="https://wa.me/6281234567890" target="_blank" class="text-blue-600 hover:underline">+62 812-3456-7890</a></p>
        </div>
        <div>
          <h3 class="font-semibold text-green-800">Email</h3>
          <p><a href="mailto:halo@komposid.com" class="text-blue-600 hover:underline">halo@komposid.com</a></p>
        </div>
        <div>
          <h3 class="font-semibold text-green-800">Alamat Operasional</h3>
          <p>Jl. Hijau Organik No. 88, Brebes, Jawa Tengah</p>
        </div>
      </div>

      <div class="mt-6 text-center">
        <a href="https://wa.me/6281234567890" target="_blank"
           class="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded">
          Kirim Pesan via WhatsApp
        </a>
      </div>
    </section>
  `
  MainLayout(content)
}
