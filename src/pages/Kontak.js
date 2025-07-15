export function Kontak() {
  return {
    html: `
      <section class="py-10 max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4 text-center">Hubungi Kami</h2>
        <p class="text-gray-700 mb-6 text-center text-lg">
          Kami terbuka untuk kolaborasi, pertanyaan, atau saran. Jangan ragu menghubungi tim KomposID.
        </p>

        <div class="bg-gray-100 p-6 rounded-xl space-y-4">
          <div>
            <h3 class="text-lg font-semibold text-green-700">Alamat</h3>
            <p class="text-gray-700">Jl. Kompos Berdaya No.12, Brebes, Jawa Tengah</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-700">Email</h3>
            <p class="text-gray-700">kontak@komposid.id</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-700">Telepon / WhatsApp</h3>
            <p class="text-gray-700">+62 812-3456-7890</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-700">Jam Operasional</h3>
            <p class="text-gray-700">Senin - Jumat: 08.00 - 17.00 WIB</p>
          </div>

          <div class="pt-4">
            <iframe 
              class="w-full h-64 rounded-xl border"
              src="https://maps.google.com/maps?q=Brebes&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </section>
    `,
    onMount: () => {}
  }
}
