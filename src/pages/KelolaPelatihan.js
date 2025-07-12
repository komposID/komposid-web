// src/pages/KelolaPelatihan.js
import React, { useState } from 'react';
import './KelolaPelatihan.css';

function KelolaPelatihan() {
  const [pelatihan, setPelatihan] = useState([
    {
      id: 1,
      nama: 'Pelatihan Dasar Kompos',
      durasi: '30 Hari',
      deskripsi: 'Materi intensif kompos rumah tangga',
      peserta: 25,
      aktif: true,
    },
  ]);

  const [form, setForm] = useState({
    nama: '',
    durasi: '',
    deskripsi: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTambah = (e) => {
    e.preventDefault();
    const newData = {
      id: pelatihan.length + 1,
      ...form,
      peserta: 0,
      aktif: true,
    };
    setPelatihan([...pelatihan, newData]);
    setForm({ nama: '', durasi: '', deskripsi: '' });
  };

  return (
    <div className="kelola-pelatihan-container">
      <h2>📚 Kelola Pelatihan Kompos</h2>

      <form className="form-pelatihan" onSubmit={handleTambah}>
        <input
          type="text"
          name="nama"
          placeholder="Nama Pelatihan"
          value={form.nama}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="durasi"
          placeholder="Durasi (contoh: 30 Hari)"
          value={form.durasi}
          onChange={handleChange}
          required
        />
        <textarea
          name="deskripsi"
          placeholder="Deskripsi singkat"
          value={form.deskripsi}
          onChange={handleChange}
          required
        />
        <button type="submit">+ Tambah Pelatihan</button>
      </form>

      <table className="tabel-pelatihan">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Durasi</th>
            <th>Deskripsi</th>
            <th>Peserta</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pelatihan.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>{item.durasi}</td>
              <td>{item.deskripsi}</td>
              <td>{item.peserta}</td>
              <td>{item.aktif ? 'Aktif' : 'Nonaktif'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KelolaPelatihan;
