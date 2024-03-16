import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicLayout from "../layouts/BasicLayout";
import { useLocation } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";


const SearchPage = () => {
    const location = useLocation();
    const { jsonData2 } = location.state;
    console.log(jsonData2);
    console.log(3);
    const result2 = jsonData2;
    const [category, setCategory] = useState('');

    //const buttonCss = "p-2 bg-slate-500 hover:bg-slate-600 rounded-md";

    const [selectedResultIndex, setSelectedResultIndex] = useState(0);

    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
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
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,

    };

    return (
        <BasicLayout>
            <div className="w-2/3">
                <Slider {...settings}>
                    {result2.map((result, index) => (
                        <div key={index} className="mt-10 rounded-md shadow-md border-4">
                            <div className="relative">
                                <img className="rounded-md brightness-50 hover:brightness-100 w-30 h-40 " src={result.firstimage} alt={result.address_name} onClick={() => { handleCategoryChange(''); handleSelectedIndex(index); handleCheckboxChange(index); }} />
                                <input defaultChecked={checkedItems[index] || false}
                                    type="checkbox" className="appearance-none  checked:border-2   absolute top-0  w-8 h-8  rounded-full" />

                                <div className="absolute bottom-0 left-0">

                                    <button className="border border-gray-300 rounded-md p-1 text-white bg hover:bg-slate-500 hover:text-black hover:ease-in duration-300" onClick={() => handleCategoryChange('')}>정보</button>
                                    <button className="border border-gray-300 rounded-md p-1 text-white hover:bg-slate-600 hover:text-gray-500 hover:ease-out duration-500" onClick={() => handleCategoryChange('CE7')}>카페</button>
                                    <button className="border border-gray-300 rounded-md p-1 text-white hover:bg-amber-50 hover:text-gray-500 hover:ease-in-out duration-700" onClick={() => handleCategoryChange('FD6')}>음식점</button>
                                    <button className="border border-gray-300 rounded-md p-1 text-white" onClick={() => handleCategoryChange('AT4')}>관광지</button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center shadow-lg rounded-md px-2 ml-2">

                                <div className="content-center">
                                    <p className="font-serif text-xl">이름: {result.title}</p>
                                    <p className="font-serif text-xl">주소: {result.addr1}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>

                <KakaoMap mapx={result2[selectedResultIndex].mapx} mapy={result2[selectedResultIndex].mapy} category={category} />
            </div>


        </BasicLayout >
    );
};

export default SearchPage;