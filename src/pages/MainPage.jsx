import BasicLayout from "../layouts/BasicLayout";
import React from 'react';
import CarouselComponent from "../components/CarouselComponent";
import MainBody from "../layouts/MainBody";

const MainPage = () => {
    return (
        <BasicLayout>
            <CarouselComponent />
            <MainBody />
        </BasicLayout>
    );
}

export default MainPage;