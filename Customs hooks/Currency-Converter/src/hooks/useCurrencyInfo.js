import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/6663d117bd6e4d4cca3503ac/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency]);

    console.log(data);
    return data;
};

export default useCurrencyInfo;