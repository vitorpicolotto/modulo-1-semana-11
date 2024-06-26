import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true);

    fetch(url)
    .then(res => res.json())
    .then(value => {
        setData(value)

    })
    .catch((err) => {
        window.alert("Ocorreu um erro ao buscar os dados");
        console.log(err);
    })

    .finally(() => setTimeout (() => setLoading(false), 250));
    },[url]);

    return [data, loading];
}

export default useFetch;
