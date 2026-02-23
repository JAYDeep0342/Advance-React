import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {

    const [currencyInfo, setCurrencyInfo] = useState({})

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then(res => res.json())
            .then(data => {
                setCurrencyInfo(data.rates)   // ✅ yahi sahi hai
            })
            .catch(err => console.log("Error:", err))

    }, [currency])

    return currencyInfo
}

export default useCurrencyInfo