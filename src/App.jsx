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
          
          <div className="form-group">
            <h4>Kredi Tutarı</h4>
            <div className="input-box">
              <span className="prefix">₺</span>
              <input type="text" defaultValue={100.000} />
            </div>
          </div>

          <div className="form-group">
            <h4>İpotek Vadesi</h4>
            <div className="input-box">
              <input type="text" defaultValue={12} />
              <span className="prefix">Yıl</span>
            </div>
          </div>

          <div className="form-group">
            <h4>Yüzde Oranı</h4>
            <div className="input-box">
              <input type="text" defaultValue={5.25} />
              <span className="prefix">%</span>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}