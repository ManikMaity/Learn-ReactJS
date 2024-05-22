import { useState, useEffect } from "react";

function useCurrencyInfo (currency = "") {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency.toLowerCase()}.json`)
        .then(res => res.json())
        .then (res => setData(res[currency.toLowerCase()]))
        console.log(data)
    }, [currency])

    return data;
}

export default useCurrencyInfo;