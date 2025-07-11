import React from 'react';
import '../Produk.css';

const produkList = [
  {
    id: 1,
    nama: 'Kompos Organik Premium',
    deskripsi: 'Cocok untuk pertanian, tanaman hias, dan kebun rumah.',
    harga: 'Rp 25.000 / karung',
    gambar: 'https://images.unsplash.com/photo-1611095973511-2492192737ba?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    nama: 'Sekam Bakar Halus',
    deskripsi: 'Meningkatkan porositas tanah dan menjaga kelembapan.',
    harga: 'Rp 15.000 / karung',
    gambar: 'https://images.unsplash.com/photo-1627750763291-59c9ea9c9b88?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    nama: 'Sekam Mentah Padi',
    deskripsi: 'Media campuran alternatif untuk tanaman.',
    harga: 'Rp 8.000 / karung',
    gambar: 'https://images.unsplash.com/photo-1603532786819-6e4f271f8b80?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    nama: 'Briket Arang Serbaguna',
    deskripsi: 'Cocok untuk bahan bakar rumah tangga atau industri kecil.',
    harga: 'Rp 18.000 / pak',
    gambar: 'https://images.unsplash.com/photo-1609113665139-ccdb55600164?auto=format&fit=crop&w=600&q=80'
  }
];

function Produk() {
  return (
    <div className="produk-container">
      <h1 className="judul">Produk KomposID</h1>
      <p className="subjudul">Temukan solusi terbaik untuk kebutuhan pertanian & perkebunan Anda</p>

      <div className="produk-wrapper">
        <div className="produk-grid">
          {produkList.map((produk) => (
            <div key={produk.id} className="produk-card">
              <img src={produk.gambar} alt={produk.nama} className="produk-gambar" />
              <h2 className="produk-nama">{produk.nama}</h2>
              <p className="produk-deskripsi">{produk.deskripsi}</p>
              <p className="produk-harga">{produk.harga}</p>
              <button className="produk-button">Lihat Detail</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produk;
