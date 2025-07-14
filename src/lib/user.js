import { supabase } from './supabase.js'

// Sinkronisasi user login ke tabel profiles
export async function syncProfile(user) {
  if (!user) return null

  // Cek apakah user sudah ada di tabel profiles
  const { data: existing, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('Gagal cek profile:', error.message)
    return null
  }

  // Jika belum ada → insert baru
  if (!existing) {
    const { email, user_metadata } = user
    const full_name = user_metadata?.full_name || user_metadata?.name || 'User Baru'
    const photo_url = user_metadata?.avatar_url || ''
    const role = 'Pembeli' // default, nanti bisa diganti

    const { error: insertErr } = await supabase
      .from('profiles')
      .insert([{ id: user.id, full_name, photo_url, role }])

    if (insertErr) {
      console.error('Gagal insert profile:', insertErr.message)
    }
  }
}
