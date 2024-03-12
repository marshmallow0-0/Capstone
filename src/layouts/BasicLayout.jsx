//전체적인 레이아웃 
import Footer from "./Footer";
import Header from "./Header";
const BasicLayout = ({ children }) => {
    return (
        <>
            <div className="h-full">
                <Header />
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