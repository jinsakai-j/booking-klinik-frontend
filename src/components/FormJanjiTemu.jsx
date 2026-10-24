import { useState } from 'react'

const formAwal = {
  namaPasien: '',
  noHp: '',
  dokter: '',
  tanggal: '',
  jam: '',
  keluhan: '',
}

function FormJanjiTemu({ daftarDokter, onTambah }) {
  const [form, setForm] = useState(formAwal)

  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onTambah(form)
    setForm(formAwal)
  }

  return (
    <form className="form-janji" onSubmit={handleSubmit}>
      <h2>Buat Janji Temu</h2>
      <div className="form-baris">
        <label htmlFor="namaPasien">Nama Pasien</label>
        <input
          id="namaPasien"
          name="namaPasien"
          type="text"
          placeholder="Nama lengkap pasien"
          value={form.namaPasien}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-baris">
        <label htmlFor="noHp">No. HP</label>
        <input
          id="noHp"
          name="noHp"
          type="text"
          placeholder="08xxxxxxxxxx"
          value={form.noHp}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-baris">
        <label htmlFor="dokter">Dokter</label>
        <select
          id="dokter"
          name="dokter"
          value={form.dokter}
          onChange={handleChange}
          required
        >
          <option value="">Pilih dokter</option>
          {daftarDokter.map((dokter) => (
            <option key={dokter.id} value={dokter.nama}>
              {dokter.nama} - {dokter.spesialis}
            </option>
          ))}
        </select>
      </div>
      <div className="form-sejajar">
        <div className="form-baris">
          <label htmlFor="tanggal">Tanggal</label>
          <input
            id="tanggal"
            name="tanggal"
            type="date"
            value={form.tanggal}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-baris">
          <label htmlFor="jam">Jam</label>
          <input
            id="jam"
            name="jam"
            type="time"
            value={form.jam}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-baris">
        <label htmlFor="keluhan">Keluhan</label>
        <textarea
          id="keluhan"
          name="keluhan"
          rows="3"
          placeholder="Keluhan pasien"
          value={form.keluhan}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="tombol-tambah">
        Tambah
      </button>
    </form>
  )
}

export default FormJanjiTemu
