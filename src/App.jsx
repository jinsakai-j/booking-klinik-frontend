import Header from './components/Header'
import RingkasanJanji from './components/RingkasanJanji'
import { daftarJanjiTemu } from './data/janjiTemu'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header
        judul="Booking Klinik Sejahtera"
        subjudul="Buat dan pantau janji temu pasien"
      />
      <RingkasanJanji daftar={daftarJanjiTemu} />
    </div>
  )
}

export default App
