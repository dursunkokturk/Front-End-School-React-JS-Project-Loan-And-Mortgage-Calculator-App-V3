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
  const [errors, setErrors] = useState({});

  const principal = Number(mortgageAmount);
  const years = Number(mortgageTerm);
  const annualRate = Number(interestRate);

  const isValidNumber = (value) => {
    return /^\d*\.?\d+$/.test(value);
  };

  const setError = (field, message) => {
    setErrors(prev => ({ ...prev, [field]: message }));
  };

  const clearError = (field) => {
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!mortgageAmount.trim()) {
      newErrors.amount = "Kredi Tutarı Giriniz";
    } else if (!isValidNumber(mortgageAmount)) {
      newErrors.amount = "Sadece Sayı Giriniz";
    } else if (Number(mortgageAmount) <= 0) {
      newErrors.amount = "0'dan Büyük Değer Giriniz";
    }

    if (!mortgageTerm.trim()) {
      newErrors.term = "Vade Süresi Giriniz";
    } else if (!isValidNumber(mortgageTerm)) {
      newErrors.term = "Sadece Sayı Giriniz";
    } else if (Number(mortgageTerm) <= 0) {
      newErrors.term = "Geçerli Bir Vade Giriniz";
    }

    if (!interestRate.trim()) {
      newErrors.interest = "Faiz Oranı Giriniz";
    } else if (!isValidNumber(interestRate)) {
      newErrors.interest = "Sadece Sayı Giriniz";
    } else if (Number(interestRate) <= 0) {
      newErrors.interest = "Geçerli Faiz Oranı Giriniz";
    }

    if (!mortgageType) {
      newErrors.type = "Bir Seçim Yapınız";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form başarılı");
    }
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
  };

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
              <div className={`input-box ${errors.amount ? "error-box" : ""}`}>
                <span className="prefix">₺</span>
                <input
                  type="text"
                  value={mortgageAmount}
                  placeholder='50.000'
                  onFocus={() => setActiveField("amount")}
                  onBlur={() => setActiveField("")}

                  onChange={(e) => {
                    const value = e.target.value;
                    setMortgageAmount(value);
                    if (value && !isValidNumber(value)) {
                      setErrors(prev => ({ ...prev, amount: "Sadece Sayı Giriniz" }));
                    } else {
                      clearError("amount");
                    }
                  }}
                />
              </div>
              {errors.amount && <p className="error-text">{errors.amount}</p>}
            </div>

            <div className="mortgage-term-and-interest-rate">
              <div className="form-group">
                <h4>İpotek Vadesi</h4>
                <div className={`input-box ${errors.term ? "error-box" : ""}`}>
                  <input type="text"
                    value={mortgageTerm}
                    placeholder='5'
                    onFocus={() => setActiveField("term")}
                    onBlur={() => setActiveField("")}

                    onChange={(e) => {
                      const value = e.target.value;
                      setMortgageTerm(value);
                      if (value && !isValidNumber(value)) {
                        setErrors(prev => ({ ...prev, term: "Sadece Sayı Giriniz" }));
                      } else {
                        clearError("term");
                      }
                    }}
                  />
                  <span className={`prefix ${activeField === "term" ? "active-prefix" : ""}`}>Yıl</span>
                </div>
                {errors.term && <p className="error-text">{errors.term}</p>}
              </div>

              <div className="form-group">
                <h4>Yüzde Oranı</h4>
                <div className={`input-box ${errors.interest ? "error-box" : ""}`}>
                  <input
                    type="text"
                    value={interestRate}
                    placeholder='5.25'
                    onFocus={() => setActiveField("interest")}
                    onBlur={() => setActiveField("")}

                    onChange={(e) => {
                      const value = e.target.value;
                      setInterestRate(value);
                      if (value && !isValidNumber(value)) {
                        setError("interest", "Sadece Sayı Giriniz");
                      } else {
                        clearError("interest");
                      }
                    }}
                  />
                  <span className={`prefix ${activeField === "interest" ? "active-prefix" : ""}`}>%</span>
                </div>
                {errors.interest && <p className="error-text">{errors.interest}</p>}
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
              {errors.type && (
                <p className="error-text">{errors.type}</p>
              )}
            </div>
            <div className="form-button">
              <button onClick={handleSubmit}><img src={Calculator} alt="" />Taksitleri Hesapla</button>
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