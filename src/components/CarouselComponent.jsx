//캐러셀 슬라이드를 react-slick 라이브러리에서 가져옴  
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useState } from "react";

const StyledSlider = styled(Slider)`
width: 100%;
height: 100% .slick-list {
    margin: 0 auto;
    overflow-x: hidden;
}
  // .slick-prev {
  //   z-index: 1;
  //   left: 1rem;
  //   top: 6rem;
  // }
  // .slick-next {
  //   right: 1rem;
  //   top: 6rem;
  // }

  // .slick-prev:before,
  // .slick-next:before {
  //   font-size: 30px;
  //   opacity: 0.5;
  //   color: white;
  
  // }
  
  .slick-dots {
    li button:before {
      color: gray;
    }
    li.slick-active button:before {
      color: black;
    }
  }
`;

export default function CarouselComponent() {
  //const [dragging, setDragging] = useState(false);

  const settings = {
    slide: 'div',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    draggable: true,
    //arrows: true,
    fade: true, // 사라졌다 나타나는 효과
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    dotsClass: "slick-dots",

  };

  return (
    <div className="mt-20 p-10 mx-auto max-w-2xl text-center">
      {/* <h2 className="text-center font-serif text-xl font-semibold">imageList</h2> */}
      <StyledSlider {...settings}>
        <div className=" items-center    max-w-2xl  h-40   drop-shadow-xl ">
          <img className="w-full h-full rounded-lg" src="img/배경.jpg" alt="Top10" />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <h1>1</h1>
        </div>
        <div className=" items-center   max-w-2xl  h-40  drop-shadow-xl">
          <img className="w-full h-full hover:shadow-lg rounded-md" src="img/배경2.jpg" alt="Top10" />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <h1>2</h1>
        </div>
        <div className="w-full h-40 drop-shadow-xl ">
          <img className="w-full h-full object-center transition duration-300 ease-in-out hover:scale-110 rounded-md" src="img/배경3.jpg" alt="Top10" />
          <h1>3</h1>
        </div>
      </StyledSlider>
    </div>
  );
}