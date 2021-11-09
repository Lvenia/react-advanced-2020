import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);

    const getData = async () => {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, [url]);

    return {loading, result};
};
