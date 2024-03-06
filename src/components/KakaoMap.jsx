import React, { useEffect } from 'react';
import axios from 'axios';

const KakaoMap = () => {
    useEffect(() => {
        const fetchNearbyPlaces = async () => {
            const latitude = 37.514322572335935;
            const longitude = 127.06283102249932;
            const radius = 20000;
            const query = '카카오프렌즈';
            const REST_API_KEY = '0ddb7ff8c9f3c350feff659e3267eb53';

            try {
                const response = await axios.get(
                    'https://dapi.kakao.com/v2/local/search/keyword.json',
                    {
                        params: {
                            y: latitude,
                            x: longitude,
                            radius: radius,
                            query: query
                        },
                        headers: {
                            'Authorization': `KakaoAK ${REST_API_KEY}`
                        }
                    }
                );
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching nearby places:', error);
            }
        };

        fetchNearbyPlaces();
    }, []);

    return (
        <div>
            <div id="map2" style={{ width: '500px', height: '400px' }}></div>
        </div>
    );
};

export default KakaoMap;
