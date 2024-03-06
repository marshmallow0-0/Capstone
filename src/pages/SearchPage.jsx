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
width: 100%;
height: 100% .slick-list {
    margin: 0 auto;
    overflow-x: hidden;
}
  .slick-prev {
     z-index: 1;
     left: 1rem;
     top: 6rem;
   }
   .slick-next {
     right: 1rem;
     top: 6rem;
   }

   .slick-prev:before,
   .slick-next:before {
     font-size: 30px;
     opacity: 0.5;
     color: white;

   }

  .slick-dots {
    li button:before {
      color: gray;
    }
    li.slick-active button:before {
      color: black;
    }
  }
`;

const SearchPage = () => {
    const location = useLocation();
    const { jsonData } = location.state;
    console.log(jsonData.data);
    const result2 = jsonData.data;
    jsonData.data.forEach(item => {
        console.log('Email:', item.email); // 각 항목의 이메일 출력
        console.log('id:', item.id)
    })
    const results = [
        {
            img: 'img/배경.jpg',
            name: 'test1',
            roadName: 'test-road1',
            openClose: 'open/close1',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경2.jpg',
            name: 'test2',
            roadName: 'test-road2',
            openClose: 'open/close2',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경3.jpg',
            name: 'test3',
            roadName: 'test-road3',
            openClose: 'open/close3',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경.jpg',
            name: 'test4',
            roadName: 'test-road4',
            openClose: 'open/close4',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경.jpg',
            name: 'test5',
            roadName: 'test-road5',
            openClose: 'open/close5',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경.jpg',
            name: 'test1',
            roadName: 'test-road1',
            openClose: 'open/close1',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경2.jpg',
            name: 'test2',
            roadName: 'test-road2',
            openClose: 'open/close2',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경3.jpg',
            name: 'test3',
            roadName: 'test-road3',
            openClose: 'open/close3',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경.jpg',
            name: 'test4',
            roadName: 'test-road4',
            openClose: 'open/close4',
            siteUrl: 'https://example.com'
        },
        {
            img: 'img/배경.jpg',
            name: 'test5',
            roadName: 'test-road5',
            openClose: 'open/close5',
            siteUrl: 'https://example.com'
        }
    ];

    const [contractStates, setContractStates] = useState(results.map(() => true));
    const buttonCss = "p-2 bg-slate-500 hover:bg-slate-600 rounded-md";

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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <BasicLayout>
            <Slider>
                <div className="flex scroll-m-0 max-w-lg gap-2  ">
                    {results.map((result, index) => (
                        <div key={index} className="mt-20  rounded-md">
                            {contractStates[index] ? (
                                <div className="m-4 ">
                                    <img className="rounded-md " src={result.img} alt={result.name} />
                                    <div className="">
                                        <div>
                                            <button className="bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleCaffeClick}>카페</button>
                                            <button className="bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleRestaurantClick}>맛집</button>

                                        </div>
                                        {showCaffeInfo && <Kakao mapx={126.9237957624} mapy={37.5555489875} ml={6} />}
                                        {showRestaurantInfo && <Kakao mapx={128.9237957624} mapy={37.5555489875} ml={6} />}

                                        <button className={buttonCss} onClick={() => toggleContract(index)}>더보기</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <img className="rounded-md leading-6" src={result.img} alt={result.name} />
                                    <p className="font-serif">Name: {result.name}</p>
                                    <p className="font-serif">RoadName: {result.roadName}</p>
                                    <p className="font-serif">openClose: {result.openClose}</p>
                                    <p className="font-serif">siteUrl: {result.siteUrl}</p>
                                    <div className="flex items-center justify-center my-6">
                                        <button onClick={() => toggleContract(index)} className={buttonCss}>줄이기</button>
                                    </div>
                                    <div>
                                        {/* <Kakao /> */}
                                        <Kakao mapx={126.9237957624} mapy={37.5555489875} ml={6} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Slider>
            <BookMark />
            <div>
                <ul>
                    {jsonData.data.map(item => (
                        <div>
                            <li key={item.id}>Email: {item.email}</li>
                            <li key={item.id}>id: {item.id}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </BasicLayout>
    );
};

export default SearchPage;