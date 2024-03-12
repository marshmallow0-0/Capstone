// import React, { useEffect, useState } from 'react';
// const { kakao } = window;

// function Kakao2({ mapx, mapy, ml, name }) {
//     const [map, setMap] = useState(null);
//     const [markers, setMarkers] = useState([]);

//     useEffect(() => {
//         const mapContainer = document.getElementById('map');
//         const mapOption = {
//             center: new kakao.maps.LatLng(mapy, mapx),
//             level: ml
//         };
//         const newMap = new kakao.maps.Map(mapContainer, mapOption);
//         setMap(newMap);
//         console.log(mapx, mapy)

//         const positions = [
//             {
//                 content: `<div>${name}</div>`,
//                 latlng: new kakao.maps.LatLng(mapy, mapx)
//             },
//             // {
//             //     content: '<div>생태연못</div>',
//             //     latlng: new kakao.maps.LatLng(33.450936, 126.569477)
//             // },
//             // {
//             //     content: '<div>텃밭</div>',
//             //     latlng: new kakao.maps.LatLng(33.450879, 126.569940)
//             // },
//             // {
//             //     content: '<div>근린공원</div>',
//             //     latlng: new kakao.maps.LatLng(33.451393, 126.570738)
//             // }
//         ];

//         const newMarkers = positions.map(position => {
//             const marker = new kakao.maps.Marker({
//                 map: newMap,
//                 position: position.latlng
//             });
//             const infowindow = new kakao.maps.InfoWindow({
//                 content: position.content
//             });
//             kakao.maps.event.addListener(marker, 'mouseover', function () {
//                 infowindow.open(newMap, marker);
//             });
//             kakao.maps.event.addListener(marker, 'mouseout', function () {
//                 infowindow.close();
//             });
//             return marker;
//         });

//         setMarkers(newMarkers);

//         // Clean up
//         return () => {
//             newMarkers.forEach(marker => {
//                 kakao.maps.event.removeListener(marker, 'mouseover');
//                 kakao.maps.event.removeListener(marker, 'mouseout');
//             });
//         };
//     }, [mapx, mapy, ml]);

//     return <div id="map" style={{ width: '500px', height: '400px' }}>

//     </div>;
// }

// export default Kakao2;