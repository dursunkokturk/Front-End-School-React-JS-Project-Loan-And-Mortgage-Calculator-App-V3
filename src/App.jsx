import './App.css'

export default function App() {

  return (
    <>
      <div className="container">
        <header className='header'>
          <h2>Kredi ve İpotek Hesaplama</h2>
          <a href=""><h4>Hepsini Sil</h4></a>
        </header>
        <main className='main'>
          <h4>Kredi Tutarı</h4>
          <div className="input-box">
            <span className="prefix">£</span>
            <input type="text" defaultValue={100.000}/>
          </div>
        </main>
      </div>
    </>
  )
}