import Calculator from './assets/img/calculator.png'
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

          <div className="form-group">
            <h4>Kira ve İpotek Tipi</h4>
            <div className="input-radio">
              <input type="radio" className='radio' name='payment'/>
              <span className="payment-type">Geri Ödeme</span>
            </div>
            <div className="input-radio">
              <input type="radio" className='radio' name='payment'/>
              <span className="payment-type">Sadece Faiz</span>
            </div>
          </div>
          <button><img src={Calculator} alt="" />Geri Ödemeleri Hesapla</button>
        </main>
      </div>
    </>
  )
}