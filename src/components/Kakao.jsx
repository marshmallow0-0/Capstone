import { useEffect } from "react";

const { kakao } = window;

const Kakao = ({ mapx, mapy, ml }) => {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(mapy, mapx),
            level: ml
        };
        const map = new kakao.maps.Map(container, options);
    }, []);
    return (
        <div id="map" style={{ width: '500px', height: '400px' }}></div>
    );
};

export default Kakao;