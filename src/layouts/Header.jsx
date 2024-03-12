// navbar 구성 
//로고, Search, How to use, Who we are, myProfile, Login 버튼 모양 구성 
//Search, How to use, Who we are, myProfile은 각각 css를 달리하여 이후 통일과정 필요 
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

const Header = () => {
    return (
        <nav id='navbar' className={`fixed top-0 left-0 right-0 flex max-w-full bg-white p-3 z-10 shadow`}>
            <div className="w-full  flex  justify-center items-center ">
                <div className="flex w-1/4  font-bold">

                    <img className="flex logoImg   w-12 h-12" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
                    <Link className="nav-link" to="/"><div className="flex logoName mt-2 text-2xl  text-blue-500" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)' }}>2JMU</div></Link>
                </div>
                <div className="flex space-x-3">
                    {/* <Link className="nav-link" to="/search" >
                        <div className="font-serif hover:opacity-70 font-medium transition duration-500 ease-in-out hover:overline-underline hover:text-underline-offset  hover:bg-gray-600 hover:text-white rounded-md p-2">
                            Search
                        </div>
                    </Link> */}
                    <Link className="nav-link" to="/how">
                        <button style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)' }} className="outline-slate-200 hover:outline outline-1 rounded hover:shadow-inner md:hover:text-black-700 hover:rounded-lg  inline-block text-base  transition-all  font-serif font-medium ease-in-out duration-700 opacity-300 leading-tight p-2">
                            How to use
                        </button>
                    </Link>

                    <Link className="nav-link" to="/who">
                        <div style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)' }} className=" btnFloat  hover:text-underline-offset hover:overline-underline hover:underline-offset-8 md:hover:text-blue-700    inline-block text-base transform  transition-all duration-500 font-serif font-medium  leading-tight p-2" >
                            Who we are
                        </div>
                    </Link>
                    <Link className="nav-link" to="/myProfile">
                        <div className="border  border-white rounded-md hover:border-gray-50 text-blue-500 hover:bg-gray-200 py-2 px-4 text-base mx-2 font-serif font-medium leading-tight relative p-2">
                            myProfile
                        </div>
                    </Link>
                    <Link className="nav-link" to="/login">
                        <div>
                            <button type="button" className="ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg inline-flex items-center">
                                LogIn
                            </button>
                        </div>
                    </Link>
                </div>

            </div>
        </nav >
    );
}

export default Header;

