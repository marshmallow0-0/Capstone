import React, { useEffect } from 'react';

const KakaoMap = ({ mapx, mapy, category }) => {
    useEffect(() => {
        var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        var mapContainer = document.getElementById('map');
        var mapOption = {
            center: new window.kakao.maps.LatLng(mapy, mapx),
            level: 3
        };

        var map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 카테고리가 비어 있는 경우 기본 위치로 마커 생성
        if (category === '') {
            var position = new window.kakao.maps.LatLng(mapy, mapx);
            var marker = new window.kakao.maps.Marker({
                position: position,
                clickable: true
            });
            marker.setMap(map);
        } else {
            var ps = new window.kakao.maps.services.Places(map);
            ps.categorySearch(category, placesSearchCB, { useMapBounds: true });
        }

        function placesSearchCB(data, status, pagination) {
            if (status === window.kakao.maps.services.Status.OK) {
                for (var i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                }
            }
        }

        function displayMarker(place) {
            var marker = new window.kakao.maps.Marker({
                map: map,
                position: new window.kakao.maps.LatLng(place.y, place.x)
            });

            window.kakao.maps.event.addListener(marker, 'mouseover', function () {
                var content = `
                <div class="placeinfo">
                    <a class="title" href="${place.place_url}" style="color: blue; text-decoration: underline;">
                        ${place.place_name}<br>
                    </a>
                    ${place.road_address_name ?
                        `<span title="${place.road_address_name}">  ${place.road_address_name}<br> </span>` +
                        `<span class="jibun" title="${place.address_name}">(지번 : ${place.address_name}) <br> </span>` :
                        `<span title="${place.address_name}">${place.address_name}</span>`
                    }
                    <span class="tel">${place.phone}</span>
                </div>
                <div class="after"></div>`;

                infowindow.setContent(content);
                infowindow.open(map, marker);
            });
        }
    }, [mapx, mapy, category]);

    return <div id="map" style={{ width: '500px', height: '400px' }}></div>;
};

export default KakaoMap;