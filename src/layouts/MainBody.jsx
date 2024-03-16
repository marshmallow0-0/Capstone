//MainBody은 파일을 업로드하고 백엔드와 통신하여 성공하면 SearchPage로 이동하는 부분이다 
//이 파일은 메인화면의 Drop Box Area Pickture 요소와 2024년 추천 장소 요소 Email Newsletter 요소 3개를 가지고 있다. 

//TODO
//현재 function을 const 변수에 저장하는 형식과 function으로 설정하는 방식이 혼재하고 있으므로 형식을 통일할 필요가 있다
//id recommend-area 부분은 추천 장소 요소는 더 알아보기 클릭 후 처리하는 부분이 존재하지 않는다.
//이메일을 입력하고 send 버튼을 눌러도 처리되는 로직이 존재하지 않는다.
//proxy 관련 설정을 localhost:8080 으로 설정하여 기존 이미지 업로드 방법이 유효하지 않아서 온라인으로 이미지 파일을 가져오거나 src 아래 폴더를 새로 만들어야 한다
import React, { useEffect, useState } from 'react';
import initializeDragAndDrop from '../functions/initializeDragAndDrop'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainBody = () => {
    const [uploadedImage, setUploadedImage] = useState(null); //이미지가 업로드되면 그 이미지를 저장하는 상태 
    const [isImageUploaded, setIsImageUploaded] = useState(false); //이미지가 업로드되어 있는지를 확인하는 상태
    const [imageFile, setImageFile] = useState(null); //파일이 업로드되면 해당 파일을 저장하는 상태
    const navigate = useNavigate(); //사용자를 다른 경로로 이동시키는 함수

    // 컴포넌트가 처음 렌더링될 때 한 번만 실행되는 초기화 작업을 수행
    useEffect(() => {
        // 드래그 앤 드롭 영역의 ID
        const dragDropAreaId = 'drag-drop-area';
        // 파일 업로드 입력 필드의 ID
        const fileUploadInputId = 'file-upload';
        // 드래그 앤 드롭 기능 초기화 함수 호출
        initializeDragAndDrop(dragDropAreaId, fileUploadInputId);
    }, []);

    // uploadedImage 상태가 변경될 때마다 실행되는 useEffect 훅
    useEffect(() => {
        // 이미지가 업로드되면 버튼을 활성화하는 상태를 업데이트
        if (uploadedImage) {
            setIsImageUploaded(true); // 이미지가 업로드되면 버튼을 활성화함
        }
    }, [uploadedImage]);

    //드롭된 파일을 처리하는 함수
    const handleDroppedFiles = (files) => {
        // 첫 번째 파일을 선택
        const file = files[0];
        // FileReader 객체를 생성
        const reader = new FileReader();

        // 파일을 읽기가 완료되면 실행될 콜백 함수를 설정
        reader.onload = function (e) {
            // 읽은 데이터를 사용하여 이미지 요소를 생성
            const img = document.createElement('img');
            img.src = e.target.result;
            // 업로드된 이미지 상태를 설정
            setUploadedImage(img);
            // 업로드된 파일 상태를 설정
            setImageFile(file);
        };

        // 선택한 파일이 있을 경우에만 파일을 읽어옴
        if (file) {
            reader.readAsDataURL(file); // 파일을 읽어 base64 인코딩된 문자열로 변환
        }
    }

    //파일이 변경되면 해당 파일이 유효한 파일인지 검사 후 handleDroppedFiles 실행 
    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleDroppedFiles(files);
        }
    };

    // 드래그 앤 드롭 이벤트를 처리하는 함수
    const handleDrop = (e) => {
        // 기본 동작을 막음
        e.preventDefault();
        // 드롭된 파일 목록을 가져옴 
        const files = e.dataTransfer.files;
        // 드롭된 파일을 처리하는 함수를 호출
        handleDroppedFiles(files);
    }

    //how버튼을 누르면 how 페이지로 이동
    const handleHowButtonClick = () => {
        navigate('/how');
    };

    //업로드된 이미지 버튼을 클릭시 처리하는 함수 
    const handleButtonClick = () => {
        //이미지 존재여부 확인 
        if (imageFile) {
            const formdata = new FormData();// FormData 객체를 생성
            formdata.append('image', imageFile); // FormData에 이미지 파일을 추가
            formdata.append('userId', '1');// FormData에 사용자 ID를 추가
            // HTTP 요청 헤더 설정
            const config = {
                Headers: {
                    'content-type': 'multipart/form-data',// 멀티파트 형식으로 데이터를 전송
                },
            };
            //post로 이미지 데이터 전달 
            axios.post('/recommend_place', formdata, config)
                .then(
                    (response) => {
                        // 응답 데이터를 가져옴
                        const jsonData = response.data;
                        console.log("0");
                        console.log(jsonData);
                        // 응답 데이터에서 필요한 정보를 추출
                        const mapX = jsonData.documents[0].x;
                        const mapY = jsonData.documents[0].y;
                        const radius = 2000;
                        const userId = "USER00";

                        try {
                            // axios를 사용하여 GET 요청
                            axios.get('/api/searchPlace', {
                                params: {
                                    mapX: mapX,
                                    mapY: mapY,
                                    radius: radius,
                                    userId: userId
                                }
                            })
                                .then(
                                    // 응답 데이터를 가져옴
                                    (response) => {
                                        const jsonData2 = response.data;
                                        // search 페이지로 이동하고, 상태를 전달
                                        navigate('/search', { state: { jsonData2 } });
                                        console.log(response.data);
                                    }
                                ).catch((error) => {
                                    console.log(error);
                                })
                        } catch (error) {
                            console.error(error);
                        }
                    }
                )
                .catch(error => {
                    console.error(error);
                    navigate('/fail');
                });
        }
        console.log('Button clicked!');

    }
    //id drag-drop-area 부분은 onDrop 속성이 있어서 이미지 드래그 후 드롭한 것까지 처리
    //id file-upload 부분은 onChange 속성이 있어서 파일 업로드를 처리
    //uploadedImage ? 조건문은 이미지 업로드가 true 이면 첫번째 img를 넣고 false이면 두번째 img를 사용
    //id uploaded-image-container 부분은 현재 Drop Box Area Picture 텍스트와 버튼 두 개를 가지고 있음 
    //특히 첫번째 버튼은 이미지 활성시 파란색으로 변경되도록 조정 버튼 클릭시 반응  

    //id recommend-area 부분은 추천 장소 요소
    //id email-newsletter 부분은 이메일을 보내는 요소 
    return (
        <div className="mt-10">
            <div id="drag-drop-area" className="text-center flex justify-center" onDrop={handleDrop}>
                <label htmlFor="file-upload" className="mt-10 cursor-pointer">
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                    {uploadedImage ? <img className="uploadImg w-40 h-40 flex rounded-md border-dashed border-2 border-gray-500 p-2" src={uploadedImage.src} alt="upload" /> : <img className="uploadImg w-40 h-40 flex rounded-md border-dashed border-2 border-gray-500 p-2" src="" alt="noUpload" />}
                </label>
                <div id="uploaded-image-container" className="ml-10 min-w-64 min-h-64 flex flex-col justify-center items-center">
                    <div className="text-center mb-5 text-3xl font-serif">
                        Drop Box Area Picture
                    </div>
                    {/* {uploadedImage && <img className="w-32 h-32 mb-5" src={uploadedImage.src} alt="uploaded" />} */}
                    <button
                        className={`${isImageUploaded ? "bg-blue-700" : "bg-gray-600"} mb-2 rounded-md inline-flex px-3 py-2 text-lg text-white  font-serif`}
                        onClick={() => handleButtonClick()}>
                        Ai Search
                    </button>
                    <button className="bg-lime-700 inline-block rounded-md px-2 py-2 text-lg text-white font-serif" onClick={() => handleHowButtonClick()}>How to use</button>
                </div>
            </div>

            <div id="recommend-area" className="flex justify-center mt-20">
                <div className="flex  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="size-48 rounded-md" src="https://storage.googleapis.com/imagefile-bucket/fcf86e46-0e4a-4ad8-8dd5-6a4dad7c17b0" alt="야경사진" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2024년 추천하는 장소</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">세계에서 야경이 멋있는 Top10 여행지</p>
                        <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            더 알아보기
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div id="email-newsletter" className="flex justify-around p-20">
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