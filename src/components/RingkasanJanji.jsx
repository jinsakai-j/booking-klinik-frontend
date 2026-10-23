function RingkasanJanji({ daftar }) {
  const total = daftar.length
  const konfirmasi = daftar.filter((janji) => janji.status === 'Konfirmasi').length
  const menunggu = daftar.filter((janji) => janji.status === 'Menunggu').length

  return (
    <section className="ringkasan">
      <div className="ringkasan-item">
        <span className="ringkasan-label">Total Janji</span>
        <span className="ringkasan-angka">{total}</span>
      </div>
      <div className="ringkasan-item">
        <span className="ringkasan-label">Konfirmasi</span>
        <span className="ringkasan-angka">{konfirmasi}</span>
      </div>
      <div className="ringkasan-item">
        <span className="ringkasan-label">Menunggu</span>
        <span className="ringkasan-angka">{menunggu}</span>
      </div>
    </section>
  )
}

export default RingkasanJanji
