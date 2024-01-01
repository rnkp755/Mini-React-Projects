import { useState, useEffect } from 'react'

const useCurrencyInfo = (currency) => {
      const [data, setData] = useState({});
      useEffect(() => {
            console.log("Currency Info is triggered");
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
                  .then((response) => response.json())
                  .then((response) => setData(response[currency]))

      }, [currency])

      return data;
}

export default useCurrencyInfo
