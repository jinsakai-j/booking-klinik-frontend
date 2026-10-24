import KartuJanjiTemu from './KartuJanjiTemu'

function DaftarJanji({ daftar }) {
  return (
    <section className="daftar-janji">
      <h2>Daftar Janji Temu</h2>
      {daftar.map((janji) => (
        <KartuJanjiTemu key={janji.id} janji={janji} />
      ))}
    </section>
  )
}

export default DaftarJanji
