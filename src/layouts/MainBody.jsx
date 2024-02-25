import React, { useEffect, useState } from 'react';
import initializeDragAndDrop from '../functions/initializeDragAndDrop'
import { apiAxios } from '../api/apiAxios';

const MainBody = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    useEffect(() => {
        const dragDropAreaId = 'drag-drop-area';
        const fileUploadInputId = 'file-upload';
        initializeDragAndDrop(dragDropAreaId, fileUploadInputId);
    }, []);

    useEffect(() => {
        // 이미지가 업로드되면 버튼 활성화
        if (uploadedImage) {
            setIsImageUploaded(true);
        }
    }, [uploadedImage]);

    const handleDroppedFiles = (files) => {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            setUploadedImage(img);
        };

        reader.readAsDataURL(file);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        handleDroppedFiles(files);
    }

    const handleButtonClick = (e) => {
        // 버튼 클릭 이벤트 처리
        e.preventDefault();
        console.log('Button clicked!');
        const formData = new FormData();
        formData.append('image', uploadedImage);

        apiAxios.post('/upload', formData)
            .then(response => {
                console.log('success');
            })
            .catch(error => {
                console.error('upload error', error);
            })

    }
    return (

        <div className="mt-10 containerflex-col justify-center">
            <div id="drag-drop-area" className="text-center flex justify-center" onDrop={handleDrop}>
                <label htmlFor="file-upload" className="ml-10 mt-10 cursor-pointer">
                    <input id="file-upload" type="file" className="hidden" />
                    <img className="uploadImg w-40 h-40 flex rounded-md border-dashed border-2 border-gray-500 p-10" src="img/upload3.png" alt="upload" />
                </label>
                <div id="uploaded-image-container" className="dropBoxArea ml-10 min-w-64 min-h-64 flex flex-col justify-center items-center">
                    <div className="text-center mb-5 text-3xl font-serif">
                        Drop Box Area Picture
                    </div>
                    {uploadedImage && <img className="w-32 h-32 mb-5" src={uploadedImage.src} alt="uploaded" />}
                    <button
                        className={`${isImageUploaded ? "bg-lime-700" : "bg-gray-600"} mb-2 rounded-md inline-flex px-3 py-2 text-lg text-white  font-serif`}
                        onClick={handleButtonClick}
                    //disabled={!isImageUploaded}
                    >
                        Ai Search
                    </button>
                    <button className="bg-lime-700 inline-block rounded-md px-2 py-2 text-lg text-white font-serif">How to use</button>
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <div className="flex  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="size-48 rounded-md" src="img/배경.jpg" alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2024년 추천하는 장소</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">세계에서 야경이 멋있는 Top10 여행지</p>
                        <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            더 알아보기
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-around p-20">
                <div>
                    <p className="letter text-2xl font-serif p-3 underline decoration-indigo-500">Ria-2JMU <br />Email Newsletter</p>
                </div>
                <div className="">
                    <input type="text" name="email" id="email" className="block mb-3 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="Enter your email address" />
                    <label htmlFor="email" className="block mb-3 text-sm font-bold leading-6  text-gray-900">Email me about</label>

                    <div className="flex items-center mb-4">
                        <input id="country-option-1" type="radio" name="countries" value="Spain" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3" />
                        <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                            Recommand best area
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-2" type="radio" name="countries" value="Spain" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3" />
                        <label htmlFor="country-option-2" className="text-sm font-medium text-gray-900 ml-2 block">
                            Introduce new datas
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" value="Spain" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3" />
                        <label htmlFor="country-option-3" className="text-sm font-medium text-gray-900 ml-2 block">
                            Suggest a famous place
                        </label>
                    </div>

                    <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true">Send</button>
                </div>
            </div>
        </div>
    )
}

export default MainBody;