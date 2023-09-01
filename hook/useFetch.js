//Custom HOOK
import {useState, useEffect} from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://flight-radar1.p.rapidapi.com/flights/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '6d5962bff1msh9fce4dd7313e2b0p1a3488jsn657618e050ef',
          'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
    };

    const fetchData = async() => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            if (endpoint == 'detail') {
                setData(response.data);
            } else {
                setData(response.data.aircraft);
            }
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFetch;