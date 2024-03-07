import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookMark from "../components/BookMark";
import BasicLayout from "../layouts/BasicLayout";
import styled from 'styled-components';
import Kakao from "../components/Kakao";
import { useLocation } from "react-router-dom";

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
    jsonData.documents.forEach(item => {
        console.log('address_name', item.address_name);
        console.log('id:', item.id)
    })
    // const results = [
    //     {
    //         img: 'img/배경.jpg',
    //         name: 'test1',
    //         roadName: 'test-road1',
    //         openClose: 'open/close1',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경2.jpg',
    //         name: 'test2',
    //         roadName: 'test-road2',
    //         openClose: 'open/close2',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경3.jpg',
    //         name: 'test3',
    //         roadName: 'test-road3',
    //         openClose: 'open/close3',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경.jpg',
    //         name: 'test4',
    //         roadName: 'test-road4',
    //         openClose: 'open/close4',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경.jpg',
    //         name: 'test5',
    //         roadName: 'test-road5',
    //         openClose: 'open/close5',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경.jpg',
    //         name: 'test1',
    //         roadName: 'test-road1',
    //         openClose: 'open/close1',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경2.jpg',
    //         name: 'test2',
    //         roadName: 'test-road2',
    //         openClose: 'open/close2',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경3.jpg',
    //         name: 'test3',
    //         roadName: 'test-road3',
    //         openClose: 'open/close3',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경.jpg',
    //         name: 'test4',
    //         roadName: 'test-road4',
    //         openClose: 'open/close4',
    //         siteUrl: 'https://example.com'
    //     },
    //     {
    //         img: 'img/배경.jpg',
    //         name: 'test5',
    //         roadName: 'test-road5',
    //         openClose: 'open/close5',
    //         siteUrl: 'https://example.com'
    //     }
    // ];


    const buttonCss = "p-2 bg-slate-500 hover:bg-slate-600 rounded-md";

    const [contractStates, setContractStates] = useState(result2.map(() => true));
    const [showCaffeInfo, setShowCaffeInfo] = useState(false); // 카페 정보를 보여주는 상태
    const [showRestaurantInfo, setShowRestaurantInfo] = useState(false); // 맛집 정보를 보여주는 상태

    const toggleContract = (index) => {
        const newContractStates = [...contractStates];
        newContractStates[index] = !newContractStates[index];
        setContractStates(newContractStates);
    };

    const handleCaffeClick = () => {

        setShowCaffeInfo(true); // 카페 정보를 보여주는 상태를 true로 변경
        setShowRestaurantInfo(false); // 맛집 정보를 보여주는 상태를 false로 변경

    }

    const handleRestaurantClick = () => {
        setShowCaffeInfo(false); // 카페 정보를 보여주는 상태를 true로 변경
        setShowRestaurantInfo(true); // 맛집 정보를 보여주는 상태를 false로 변경
    }

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

            <div className="flex w-2/3 mx-auto rounded-md ">
                <StyledSlider>
                    {result2.map((result, index) => (
                        <div key={index} className="mt-20  rounded-md">
                            {contractStates[index] ? (
                                <div className="m-4 ">
                                    <img className="rounded-md hover:opacity-75" src="img/배경.jpg" alt={result.address_name} onClick={() => toggleContract(index)} />

                                    <div className="">
                                        <div>
                                            <button className="border border-gray-300 rounded-md p-2" onClick={() => toggleContract(index)}>카페</button>
                                            <button className="border border-gray-300 rounded-md p-2" onClick={handleRestaurantClick}>맛집</button>
                                            <button className="border border-gray-300 rounded-md p-2" onClick={handleRestaurantClick}>관광지</button>
                                        </div>
                                        {/* {showCaffeInfo && <Kakao mapx={result.x} mapy={result.y} ml={6} />}
                                    {showRestaurantInfo && <Kakao mapx={result.x} mapy={result.y} ml={6} />} */}

                                        {/* <button className={buttonCss} onClick={() => toggleContract(index)}>더보기</button> */}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <img className="rounded-md leading-6" src="img/배경.jpg" alt={result.name} />
                                    <p className="font-serif">Name: {result.place_name}</p>
                                    <p className="font-serif">RoadName: {result.address_name}</p>
                                    <p className="font-serif">phone: {result.phone}</p>
                                    <p className="font-serif">siteUrl: {result.place_url}</p>
                                    <div className="flex items-center justify-center my-6">
                                        <button onClick={() => toggleContract(index)} className={buttonCss}>줄이기</button>
                                    </div>
                                    <div>
                                        {/* <Kakao /> */}
                                        <Kakao mapx={result.x} mapy={result.y} ml={6} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </StyledSlider>
            </div>

            <BookMark />
            {/* <div>
                <ul>
                    {jsonData.data.map(item => (
                        <div>
                            <li key={item.id}>Email: {item.email}</li>
                            <li key={item.id}>id: {item.id}</li>
                        </div>
                    ))}
                </ul>
            </div> */}
        </BasicLayout >
    );
};

export default SearchPage;