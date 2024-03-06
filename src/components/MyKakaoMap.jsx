import React, { useEffect } from 'react';
import KakaoMap from './KakaoMap';
import { MapMarker } from 'react-kakao-maps-sdk';
const MyKakaoMap = ({ latitude, longitude }) => {
    return (
        <KakaoMap
            style={{
                width: '500px',
                height: '400px'
            }}
            center={{ lat: latitude, lng: longitude }}
            level={3}
        >
            <MapMarker
                position={{ lat: latitude, lng: longitude }}
            />
        </KakaoMap>
    );
};

export default MyKakaoMap;
