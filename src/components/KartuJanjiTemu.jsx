function KartuJanjiTemu({ janji }) {
  const kelasStatus =
    janji.status === 'Konfirmasi' ? 'status-konfirmasi' : 'status-menunggu'

  return (
    <div className="kartu-janji">
      <div className="kartu-atas">
        <h3>{janji.namaPasien}</h3>
        <span className={`status ${kelasStatus}`}>{janji.status}</span>
      </div>
      <p className="kartu-dokter">{janji.dokter}</p>
      <p className="kartu-jadwal">
        {janji.tanggal} - {janji.jam}
      </p>
      <p className="kartu-keluhan">{janji.keluhan}</p>
      <p className="kartu-hp">No. HP: {janji.noHp}</p>
    </div>
  )
}

export default KartuJanjiTemu
