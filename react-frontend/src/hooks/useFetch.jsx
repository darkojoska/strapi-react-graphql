import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json.data);
                setLoading(false);
            } catch (error) {                
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { data, loading, error }
}
