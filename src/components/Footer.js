export function Footer() {
  const year = new Date().getFullYear()
  return `
    <footer class="bg-gray-100 text-center text-sm text-gray-500 py-4 mt-10">
      &copy; ${year} KomposID. Semua hak dilindungi.
    </footer>
  `
}
