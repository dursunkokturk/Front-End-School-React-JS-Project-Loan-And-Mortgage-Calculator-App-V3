import Calculator from './assets/img/calculator.png'
import CalculateFooter from './assets/img/calculate-footer.png'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [activeField, setActiveField] = useState("");

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
                <span className={`prefix ${activeField === "amount" ? "active-prefix" : ""}`}>₺</span>
                <input
                  type="text"
                  value={mortgageAmount}
                  placeholder='50.000'
                  onFocus={() => setActiveField("amount")}
                  onBlur={() => setActiveField("")}

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
                  <input type="text"
                    value={mortgageTerm}
                    placeholder='5'
                    onFocus={() => setActiveField("term")}
                    onBlur={() => setActiveField("")}

                    onChange={(e) => {
                      const value = e.target.value;
                      setMortgageTerm(value);
                    }} />
                  <span className={`prefix ${activeField === "term" ? "active-prefix" : ""}`}>Yıl</span>
                </div>
              </div>

              <div className="form-group">
                <h4>Yüzde Oranı</h4>
                <div className="input-box">
                  <input
                    type="text"
                    value={interestRate}
                    placeholder='5.25'
                    onFocus={() => setActiveField("interest")}
                    onBlur={() => setActiveField("")}

                    onChange={(e) => {
                      const value = e.target.value;
                      setInterestRate(value);
                    }}
                  />
                  <span className={`prefix ${activeField === "interest" ? "active-prefix" : ""}`}>%</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <h4>Kira ve İpotek Tipi</h4>
              <label className={`input-radio ${mortgageType === "repayment" ? "active-radio" : ""
                }`}>
                <input
                  type="radio"
                  className='radio'
                  name='payment'
                  value="repayment"
                  checked={mortgageType === "repayment"}
                  onBlur={() => setActiveField("")}
                  onChange={(e) => setMortgageType(e.target.value)}
                />
                <span className='payment-type'>Geri Ödeme</span>
              </label>
              <label className={`input-radio ${mortgageType === "interest-only" ? "active-radio" : ""
                }`}>
                <input
                  type="radio"
                  className='radio'
                  name='payment'
                  value="interest-only"
                  checked={mortgageType === "interest-only"}
                  onBlur={() => setActiveField("")}
                  onChange={(e) => setMortgageType(e.target.value)}
                />
                <span className="payment-type">Sadece Faiz</span>
              </label>
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