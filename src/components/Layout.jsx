import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout(){
    return (
        <div className="flex flex-col justify-between">
            <NavBar />
            <Footer />
        </div>
    )
}