//전체적인 레이아웃 
import BasicMenu from "../menus/BasicMenu";
import Footer from "./Footer";
const BasicLayout = ({ children }) => {
    return (
        <>
            <div className="h-full">
                <BasicMenu />
                <div className="mt-20 bg-white ">
                    <main className="container mx-auto min-h-screen">
                        {children}
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default BasicLayout;