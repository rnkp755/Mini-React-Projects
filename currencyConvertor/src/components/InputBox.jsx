import React from 'react'

function InputBox(props) {
      const {
            label,
            value,
            onAmountChange,
            selectCurrency,
            currencyOptions = [],
            onCurrencyChange
      } = props;
      return (
            <div className={`bg-white p-3 rounded-lg text-sm flex`}>
                  <div className="w-1/2">
                        <label className="text-black/70 mb-2 inline-block">
                              {label}
                        </label>
                        <input
                              className="outline-none w-full bg-transparent px-1 py-1.5 rounded-md bg-gray-300"
                              type="number"
                              value={value}
                              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                              disabled={label === "To"}
                        />
                  </div>
                  <div className="w-1/2 flex flex-wrap justify-end text-right">
                        <p className="text-black/70 mb-2 w-full">Currency Type</p>
                        <select
                              className="rounded-lg px-1 py-1 bg-gray-300 cursor-pointer outline-none"
                              value={selectCurrency ? selectCurrency : (label === "From" ? "usd" : "inr")}
                              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        >
                              {currencyOptions.map((curr) => (
                                    <option key={curr} value={curr}>
                                          {curr.toUpperCase()}
                                    </option>
                              ))}
                        </select>
                  </div>
            </div>
      );
}

export default InputBox
