// import axios from "axios";
// import { json, useNavigate } from 'react-router-dom';


// export default function SearchRIAService(imageFile) {
//     const navigate = useNavigate();

//     if (imageFile) {
//         const formData = new FormData();
//         formData.append('image', imageFile);
//         formData.append('userId', '1');
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data',
//             },
//         };

//         axios.post('/recommend_place', formData, config)
//             .then((response) => {
//                 const jsonData = response.data;
//                 console.log(jsonData);
//                 const mapX = jsonData.documents[0].x;
//                 const mapY = jsonData.documents[0].y;
//                 const radius = 2000;
//                 const userId = "USER00";

//                 axios.get('/api/searchPlace', {
//                     params: {
//                         mapX: mapX,
//                         mapY: mapY,
//                         radius: radius,
//                         userId: userId
//                     }
//                 })
//                     .then((response) => {
//                         const jsonData2 = response.data;
//                         navigate('/search', { state: { jsonData2 } });
//                         console.log(response.data);
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                     });
//             })
//             .catch((error) => {
//                 console.error(error);
//                 navigate('/fail');
//             });
//     }
// }
