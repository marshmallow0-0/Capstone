import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicLayout from "../layouts/BasicLayout";
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import Kakao3 from "../components/Kakao3";

const StyledSlider = styled(Slider)`
width: 50%;
height: 50% .slick-list {
    margin: 0 auto;
    overflow-x: hidden;
}
  .slick-prev {
     z-index: 1;
     left: 1rem;
     top: 18rem;
   }
   .slick-next {
     right: 1.5rem;
     top: 18rem;
   }

   .slick-prev:before,
   .slick-next:before {
     font-size: 30px;
     opacity: 0.5;
     color: white;

   }

  .slick-dots {
    li button:before {
      color: black;
    }
    li.slick-active button:before {
      color: black;
    }
  }
`;

const SearchPage = () => {
    const location = useLocation();
    const { jsonData } = location.state;
    console.log(jsonData.documents);
    const result2 = jsonData.documents;
    const [category, setCategory] = useState('');

    const buttonCss = "p-2 bg-slate-500 hover:bg-slate-600 rounded-md";

    const [selectedResultIndex, setSelectedResultIndex] = useState(0);

    const handleSelectedIndex = (index) => {
        setSelectedResultIndex(index);
        console.log(index);
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        console.log(newCategory);
    };

    // const toggleContract = (index) => {
    //     const newContractStates = [...contractStates];
    //     newContractStates[index] = !newContractStates[index];
    //     setContractStates(newContractStates);
    // };

    const settings = {
        arrows: true,
        //dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <BasicLayout>

            <div className="flex flex-wrap w-2/3 mx-auto rounded-md ">
                <StyledSlider >

                    {result2.map((result, index) => (

                        <div key={index} className="mt-20 rounded-md">
                            <div className="m-4">
                                <img className="rounded-md hover:opacity-75" src="img/배경.jpg" alt={result.address_name} onClick={() => handleSelectedIndex(index)} />

                                <div >
                                    <div>
                                        <button className="border border-gray-300 rounded-md p-2" onClick={() => handleCategoryChange('CE7')}>카페</button>
                                        <button className="border border-gray-300 rounded-md p-2" onClick={() => handleCategoryChange('FD6')}>음식점</button>
                                        <button className="border border-gray-300 rounded-md p-2" onClick={() => handleCategoryChange('AT4')}>관광지</button>
                                        <button className="border border-gray-300 rounded-md p-2" onClick={() => handleCategoryChange('AD5')}>숙소</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </StyledSlider>

                <div className="flex justify-center items-center shadow-lg rounded-md px-2 ml-2">
                    <div className="content-center">
                        <p className="font-serif text-2xl">ex1 </p>
                        <p className="font-serif text-2xl">Name: {result2[selectedResultIndex].place_name}</p>
                        <p className="font-serif text-2xl">RoadName: {result2[selectedResultIndex].address_name}</p>
                        <p className="font-serif text-2xl">Phone: {result2[selectedResultIndex].phone}</p>
                    </div>
                </div>

                {/* <Kakao2 mapx={result2[selectedResultIndex].x} mapy={result2[selectedResultIndex].y} name={result2[selectedResultIndex].place_name} /> */}
                <Kakao3 mapx={result2[selectedResultIndex].x} mapy={result2[selectedResultIndex].y} category={category} />
            </div>


        </BasicLayout >
    );
};

export default SearchPage;