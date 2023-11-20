import { useEffect, useState } from 'react';
import { fetchData } from '@/store/api';

const SuccessfulLogin = () => {
    const [apiResponse, setApiResponse] = useState<string>('');

    useEffect(() => {
        const fetchApiResponse = async () => {
            const response = await fetchData();
            setApiResponse(response);
        };

        fetchApiResponse();
    }, []);
    console.log(apiResponse);

    return <div>
    </div>
};


export default SuccessfulLogin;