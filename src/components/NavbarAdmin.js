export function NavbarAdmin(role = "Admin", name = "Admin Kompos") {
  return `
    <nav class="fixed top-0 left-0 right-0 bg-green-700 text-white px-4 py-2 flex justify-between items-center text-sm shadow z-50">
      
      <!-- Logo KomposID -->
      <div class="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" class="w-8 h-8 object-contain">
        <span class="font-bold text-lg tracking-wide">KomposID</span>
      </div>

      <!-- Profil + Dropdown -->
      <div class="relative group cursor-pointer" title="Klik untuk menu">
        <div class="flex items-center gap-2">
          <div class="text-right hidden sm:block">
            <p class="font-semibold">${name}</p>
            <p class="text-xs text-gray-200">${role}</p>
          </div>
          <img src="/default-avatar.png" onerror="this.src='https://i.ibb.co/Yk1GVn9/avatar.png'" class="rounded-full w-10 h-10 object-cover border-2 border-white">
          <svg class="w-4 h-4 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <!-- Dropdown -->
        <div class="absolute right-0 mt-2 bg-white text-black rounded shadow-lg hidden group-hover:block z-50 w-44">
          <a href="#/" class="block px-4 py-2 hover:bg-gray-100 border-b">🏠 Halaman Utama</a>
          <a href="#/admin/logout" class="block px-4 py-2 hover:bg-gray-100">🔓 Logout</a>
        </div>
      </div>
    </nav>
  `
}
