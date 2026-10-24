import { useState } from 'react'
import Header from './components/Header'
import RingkasanJanji from './components/RingkasanJanji'
import FormJanjiTemu from './components/FormJanjiTemu'
import DaftarJanji from './components/DaftarJanji'
import { daftarJanjiTemu } from './data/janjiTemu'
import { daftarDokter } from './data/dokter'
import './App.css'

function App() {
  const [daftarJanji, setDaftarJanji] = useState(daftarJanjiTemu)

  function tambahJanji(janjiBaru) {
    const idBaru = 'J' + String(daftarJanji.length + 1).padStart(3, '0')

    setDaftarJanji([
      ...daftarJanji,
      { id: idBaru, ...janjiBaru, status: 'Menunggu' },
    ])
  }

  return (
    <div className="app">
      <Header
        judul="Booking Klinik Sejahtera"
        subjudul="Buat dan pantau janji temu pasien"
      />
      <RingkasanJanji daftar={daftarJanji} />
      <FormJanjiTemu daftarDokter={daftarDokter} onTambah={tambahJanji} />
      <DaftarJanji daftar={daftarJanji} />
    </div>
  )
}

export default App
