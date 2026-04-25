import { useEffect, useState } from "react";

export default function useFetch (url: string) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const abortCont = new AbortController();
        const options: RequestInit = {
            method: 'GET',
            headers: {'accept-encoding': 'deflate, gzip, br', accept: 'application/json'},
            signal: abortCont.signal
        };

        setIsLoading(true);

        fetch(url, options)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data.');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('Aborted');
                } else {
                    setData(null);
                    setIsLoading(false);
                    setError(err.message);
                }
            });

            return () => abortCont.abort();
    }, [url]);

    return {data, isLoading, error};
}