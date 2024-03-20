//TODO
//다른 div에 있는 버튼을 눌러도 새로 지도를 생성하지 못함 반드시 이미지를 클릭해야 선택되게 되어있음 

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicLayout from "../layouts/BasicLayout";
import { useLocation } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";
import PublicDataMap from "../components/PublicDataMap";
import axios from "axios";

const SearchPage = () => {
    const location = useLocation();
    const { jsonData2 } = location.state;
    console.log(jsonData2);
    console.log(3);
    //기존 v1
    //const result2 = jsonData2;

    //시도 v2
    const result2 = jsonData2.documents;
    console.log(result2);
    console.log(4);
    const [category, setCategory] = useState('');

    //const buttonCss = "p-2 bg-slate-500 hover:bg-slate-600 rounded-md";

    const [selectedResultIndex, setSelectedResultIndex] = useState(0);

    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
        console.log(newCheckedItems);
    };
    const handleSelectedIndex = (index) => {
        setSelectedResultIndex(index);
        console.log(index);
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        console.log(newCategory);
    };

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // dots: true,
        arrows: true,

    };

    // const fetchData = () => {
    //     axios.get('/api/searchPlace', {
    //         params: {
    //             mapX: 126.9841,
    //             mapY: 37.5718,
    //             radius: 2000,
    //             userId: "USER00"
    //         }
    //     })
    //         .then(
    //             // 응답 데이터를 가져옴
    //             (response) => {
    //                 const jsonData2 = response.data;
    //                 // search 페이지로 이동하고, 상태를 전달
    //                 console.log(response.data);
    //             }
    //         ).catch((error) => {
    //             console.log(error);
    //         });
    // };

    return (
        <BasicLayout>
            <div className="w-full flex justify-center">
                <div className="min-w-40 max-w-3xl">
                    <Slider className="mb-10"{...settings}>
                        {result2.map((result, index) => (
                            <div key={index} className="mt-10 rounded-md shadow-md border-4">
                                <div className="relative" >
                                    <img className="rounded-md brightness-50 hover:brightness-100 w-full h-40 " src="https://cdn.pixabay.com/photo/2024/01/04/15/42/sailing-8487722_1280.png" alt={result.address_name} onClick={() => { handleCategoryChange(''); handleSelectedIndex(index); }} />
                                    <input
                                        type="checkbox" checked={index === selectedResultIndex} className="appearance-none  checked:bg-[url('./img/check.png')] bg-cover  absolute top-0  w-8 h-8 " />
                                    <input
                                        type="checkbox" className="appearance-none  checked:bg-[url('./img/bookmark.png')] bg-cover  absolute top-0 right-0  w-8 h-8  rounded-full" onChange={() => handleCheckboxChange(index)} />
                                    <div className="absolute bottom-0 left-0">

                                        <button className="border border-gray-300 rounded-md p-1 text-white hover:bg-slate-400  hover:ease-in duration-300" onClick={() => handleCategoryChange('')}>정보</button>
                                        <button className="border border-gray-300 rounded-md p-1 text-white hover:bg-slate-400  hover:ease-out duration-500" onClick={() => handleCategoryChange('CE7')}>카페</button>
                                        <button className="border border-gray-300 rounded-md p-1 text-white hover:bg-slate-400  hover:ease-in-out duration-700" onClick={() => handleCategoryChange('FD6')}>음식점</button>
                                        <button className="border border-gray-300 rounded-md p-1 text-white hover:bg-slate-400" onClick={() => handleCategoryChange('AT4')}>관광지</button>
                                    </div>
                                </div>
                                <div className="flex  items-center shadow-lg rounded-md px-2 ml-2">

                                    {/* <div className="content-center">
                                    <p className="font-serif text-xl">이름: {result.title}</p>
                                    <p className="font-serif text-xl">주소: {result.addr1}</p>
                                </div> */}
                                    <div className="content-center">
                                        <p className="font-serif text-lg">이름: {result.place_name}</p>
                                        <p className="font-serif text-lg">주소: {result.address_name}</p>
                                        <p className="font-serif text-lg">번호: {result.phone}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </Slider>

                    {category !== 'AT4' && <KakaoMap mapx={result2[selectedResultIndex].x} mapy={result2[selectedResultIndex].y} category={category} />}
                    {category === 'AT4' && <PublicDataMap mapx={result2[selectedResultIndex].x} mapy={result2[selectedResultIndex].y} category={category} />}
                    {/* <KakaoMap mapx={result2[selectedResultIndex].mapx} mapy={result2[selectedResultIndex].mapy} category={category} /> */}

                </div>

            </div>
        </BasicLayout >
    );
};

export default SearchPage;