import Calculator from './assets/img/calculator.png'
import CalculateFooter from './assets/img/calculate-footer.png'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");

  return (
    <>
      <div className="container">
        <div className="header-and-main">
          <header className='header'>
            <h2>Kredi ve İpotek Hesaplama</h2>
            <a href="" className='clear-btn'>Hepsini Sil</a>
          </header>
          <main className='main'>

            <div className="loan-amount-and-mortgage-term">

            </div>
            <div className="form-group">
              <h4>Kredi Tutarı</h4>
              <div className="input-box">
                <span className="prefix">₺</span>
                <input
                  type="text"
                  value={mortgageAmount}
                  placeholder='50.000'

                  onChange={(e) => {
                    const value = e.target.value;
                    setMortgageAmount(value);
                  }}
                />
              </div>
            </div>

            <div className="mortgage-term-and-interest-rate">
              <div className="form-group">
                <h4>İpotek Vadesi</h4>
                <div className="input-box">
                  <input type="text" placeholder='' />
                  <span className="prefix">Yıl</span>
                </div>
              </div>

              <div className="form-group">
                <h4>Yüzde Oranı</h4>
                <div className="input-box">
                  <input type="text" placeholder='' />
                  <span className="prefix">%</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <h4>Kira ve İpotek Tipi</h4>
              <div className="input-radio">
                <input type="radio" className='radio' name='payment' />
                <span className="payment-type">Geri Ödeme</span>
              </div>
              <div className="input-radio">
                <input type="radio" className='radio' name='payment' />
                <span className="payment-type">Sadece Faiz</span>
              </div>
            </div>
            <div className="form-button">
              <button><img src={Calculator} alt="" />Taksitleri Hesapla</button>
            </div>
          </main>
        </div>
        <footer className='footer'>
          <img src={CalculateFooter} alt="" />
          <h2>Sonuçlar Burada Gösterilir</h2>
          <h4>Formu doldurun ve aylık taksit tutarlarınızı görmek için “taksitleri hesapla” düğmesine tıklayın.</h4>
          {/* <h2>Sonuçlarınız</h2>
          <h4>Sağladığınız bilgilere göre sonuçlarınız aşağıda gösterilmektedir. Sonuçları değiştirmek için formu düzenleyin ve “geri ödemeleri hesapla” seçeneğine tekrar tıklayın.</h4>
          <div className="monthly-payment">
            <h4>Aylık Taksitleriniz</h4>
            <h1>--</h1>
            <div className="separator"></div>
            <h4>Vade boyunca ödeyeceğiniz toplam tutar</h4>
            <h2 className='total-amount'><span>₺</span>--</h2>
          </div> */}
        </footer>
      </div>
    </>
  )
}