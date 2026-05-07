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
          <div className="form-button">
            <button><img src={Calculator} alt="" />Geri Ödemeleri Hesapla</button>
          </div>
        </main>
        <footer className='footer'>
          <h2>Sonuçlarınız</h2>
          <h4>Sağladığınız bilgilere göre sonuçlarınız aşağıda gösterilmektedir. Sonuçları değiştirmek için formu düzenleyin ve “geri ödemeleri hesapla” seçeneğine tekrar tıklayın.</h4>
          <div className="monthly-payment">
            <h4>Aylık Taksitleriniz</h4>
            <h1>--</h1>
            <div className="separator"></div>
            <h4>Vade boyunca ödeyeceğiniz toplam tutar</h4>
            <h2 className='total-amount'><span>₺</span>--</h2>
          </div>
        </footer>
      </div>
    </>
  )
}