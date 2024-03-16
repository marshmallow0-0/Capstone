// navbar 구성 
//로고, Main, How to use, Who we are, myProfile, Login 버튼 모양 구성 
//nav 부분은 fixed 화면에 고정 top-0 상단에 고정 left-0 right-0 화면의 좌측 우측에 고정시켜 요소들이 가운데 모여있을 수 있음 max-w-full 최대 넓이를 최대 너비로 p-3 패딩 주기 z-10 요소의 쌓임 이걸 줘야 스크롤을 해도 요소 앞에 배치됨 shadow는 선대신 사용 
//div가 아닌 button으로 구성하여 이전 버튼 사이의 공간을 없앰 

//TODO 
//Home, How to use, Who we are, myProfile은 각각 css를 달리하여 이후 통일과정 필요
//css 통일 후에 Home, How to use, Who we are, myProfile을 배열로 저장하여 map으로 반복 줄이기 
//text-xl 글씨 크기 조정 및 font 조정 필요 기존 로고의 style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)' }} 속성을 제거하여 그림자 속성 없앰 
//tailwind에서 찾기 어려운 속성은 style={} 형식으로 따로 지정가능함 

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav id='navbar' className="fixed top-0 left-0 right-0 flex max-w-full bg-white p-3 z-10 shadow">
            <div className="w-full  flex  justify-center items-center ">
                <div className="flex w-1/4  font-bold">
                    <Link className="nav-link" to="/">
                        <div className="flex  mt-2 text-xl  text-blue-500">
                            <img className="w-10 h-10" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
                            2JMU
                        </div>
                    </Link>
                </div>
                {/* space-x-3 속성을 없애서 home How Who 각각의 간격이 없어짐  */}
                <div className="flex">
                    <Link className="nav-link" to="/" >
                        <button className="font-serif hover:opacity-70 font-medium transition duration-500 ease-in-out hover:overline-underline hover:text-underline-offset  hover:bg-gray-600 hover:text-white rounded-md p-2">
                            Home
                        </button>
                    </Link>
                    <Link className="nav-link" to="/how">
                        <button style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)' }} className="outline-slate-200 hover:outline outline-1 rounded hover:shadow-inner md:hover:text-black-700 hover:rounded-lg  inline-block text-base  transition-all  font-serif font-medium ease-in-out duration-700 opacity-300 leading-tight p-2">
                            How to use
                        </button>
                    </Link>

                    <Link className="nav-link" to="/who">
                        <button style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)' }} className=" hover:text-underline-offset hover:overline-underline hover:underline-offset-8 md:hover:text-blue-700    inline-block text-base transform  transition-all duration-500 font-serif font-medium  leading-tight p-2" >
                            Who we are
                        </button>
                    </Link>
                    <Link className="nav-link" to="/myProfile">
                        <button className="border  border-white rounded-md hover:border-gray-50 text-blue-500 hover:bg-gray-200 py-2 px-4 text-base mx-2 font-serif font-medium leading-tight relative p-2">
                            myProfile
                        </button>
                    </Link>
                    <Link className="nav-link" to="/login">
                        <button type="button" className="ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg inline-flex items-center">
                            LogIn
                        </button>
                    </Link>
                </div>
            </div>
        </nav >
    );
}

export default Header;

