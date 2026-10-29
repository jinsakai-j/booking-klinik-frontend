import { useEffect, useState } from 'react'

function TipsKesehatan() {
  const [daftarTips, setDaftarTips] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function ambilTips() {
    setLoading(true)
    setError('')
    setDaftarTips([])

    try {
      const res = await fetch('https://dummyjson.com/quotes?limit=5')
      if (!res.ok) {
        throw new Error('Gagal mengambil data tips kesehatan')
      }
      const data = await res.json()
      setDaftarTips(data.quotes || [])
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat mengambil data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ambilTips()
  }, [])

  return (
    <section className="tips-kesehatan">
      <h2>Tips Kesehatan</h2>
      <p className="tips-subjudul">Kutipan motivasi dan tips kesehatan hari ini</p>

      {loading && <p className="tips-status">Memuat tips kesehatan...</p>}

      {error && (
        <div className="tips-error">
          <p>{error}</p>
          <button type="button" className="tombol-coba-lagi" onClick={ambilTips}>
            Coba Lagi
          </button>
        </div>
      )}

      {!loading && !error && daftarTips.length > 0 && (
        <div className="tips-list">
          {daftarTips.map((tips) => (
            <article key={tips.id} className="tips-card">
              <p className="tips-quote">"{tips.quote}"</p>
              <p className="tips-author">- {tips.author}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default TipsKesehatan
