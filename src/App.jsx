import { useState } from 'react'
import Header from './components/Header'
import RingkasanJanji from './components/RingkasanJanji'
import DaftarJanji from './components/DaftarJanji'
import { daftarJanjiTemu } from './data/janjiTemu'
import './App.css'

function App() {
  const [daftarJanji] = useState(daftarJanjiTemu)

  return (
    <div className="app">
      <Header
        judul="Booking Klinik Sejahtera"
        subjudul="Buat dan pantau janji temu pasien"
      />
      <RingkasanJanji daftar={daftarJanji} />
      <DaftarJanji daftar={daftarJanji} />
    </div>
  )
}

export default App
