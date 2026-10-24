import KartuJanjiTemu from './KartuJanjiTemu'

function DaftarJanji({ daftar }) {
  return (
    <section className="daftar-janji">
      <h2>Daftar Janji Temu</h2>
      {daftar.length === 0 ? (
        <p className="data-kosong">Belum ada data Janji Temu</p>
      ) : (
        daftar.map((janji) => (
          <KartuJanjiTemu key={janji.id} janji={janji} />
        ))
      )}
    </section>
  )
}

export default DaftarJanji
