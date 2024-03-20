import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PublicDataMap = ({ mapx, mapy, ml, category }) => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/searchPlace', {
                    params: {
                        mapX: mapx,
                        mapY: mapy,
                        radius: 2000,
                        userId: "USER00"
                    }
                });
                const jsonData = response.data;
                console.log(jsonData);
                console.log("public");
                const mapContainer = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(mapy, mapx),
                    level: ml
                };
                const map = new window.kakao.maps.Map(mapContainer, mapOption);

                jsonData.forEach(data => {
                    const markerPosition = new window.kakao.maps.LatLng(data.mapy, data.mapx);
                    const marker = new window.kakao.maps.Marker({
                        position: markerPosition,
                        map: map
                    });

                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `
                            <div class="placeinfo"  style="text-align: center; ">
            
                                <div>${data.title}</div>
                                <img src="${data.firstimage}"  style="width: 100px; height: 100px;  display: inline-block;"/>
                                <span class="jibun" title="${data.addr1}"  style="font-size: 12px;">주소:${data.addr1}</span>
                                <span class="tel">"${data.tel}"</span>
                            </div>
                        `
                    });

                    window.kakao.maps.event.addListener(marker, 'mouseover', function () {
                        infowindow.open(map, marker);
                    });
                    window.kakao.maps.event.addListener(marker, 'mouseout', function () {
                        infowindow.close();
                    });

                    setMarkers(prevMarkers => [...prevMarkers, marker]);
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        // Clean up
        return () => {
            markers.forEach(marker => {
                window.kakao.maps.event.removeListener(marker, 'mouseover');
                window.kakao.maps.event.removeListener(marker, 'mouseout');
            });
        };
    }, [mapx, mapy, ml, category]);

    return <div id="map" style={{ width: '500px', height: '400px' }}></div>;
};

export default PublicDataMap;