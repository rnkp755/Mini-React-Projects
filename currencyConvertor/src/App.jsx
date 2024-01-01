import React, { useState, useEffect } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [btnText, setBtnText] = useState("Copy Converted Amount")

  const currencyInfo = useCurrencyInfo(from);

  const currOptions = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
    console.log("Convert is called");
  }

  useEffect(() => {
    if (amount !== 0) {
      convert();
    }
    else setConvertedAmount(0);
  }, [amount, currencyInfo, to]);

  const swap = () => {
    setFrom(to);
    setTo(from)
  }

  const copyConvertedAmount = (e) => {
    e.preventDefault();
    window.navigator.clipboard.writeText(convertedAmount)
    setBtnText("Copied");
    setTimeout(() => {
      setBtnText("Copy Converted Amount")
    }, 750);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form>
          <div className="w-full mb-2">
            <InputBox
              label="From"
              value={amount}
              onAmountChange={(newAmount) => {
                if (newAmount >= 0) {
                  setAmount(newAmount);
                }
              }}
              selectCurrency={from}
              currencyOptions={currOptions}
              onCurrencyChange={(newCurr) => setFrom(newCurr)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-1 py-0.5"
              onClick={swap}
            >
              SWAP
            </button>
          </div>
          <div className="w-full mb-2">
            <InputBox
              label="To"
              value={convertedAmount}
              selectCurrency={to}
              currencyOptions={currOptions}
              onCurrencyChange={(newCurr) => setTo(newCurr)}
            />
          </div>
          <button
            className={`w-full bg-blue-600 text-white px-4 py-3 rounded-lg ${convertedAmount === 0 ? "cursor-not-allowed" : ""
              }`}
            disabled={convertedAmount === 0}
            onClick={copyConvertedAmount}
          >
            {btnText}
          </button>


        </form>
      </div>
    </div>
  )
}

export default App
