import { Link } from "react-router-dom";
import DropDown from "./Dropdown";

export default function NavBar(){
    return(
        <>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <DropDown />
                </div>
                <div className="navbar-end">
                    <Link className="cursor-pointer" to={'/'}>
                        <h1 className="font-bold text-lg uppercase text-cyan-600 hover:text-xl drop-shadow-sm"><span className="text-cyan-900">My</span> Portfolio</h1>
                    </Link>
                </div>
            </div>
        </>
    );
}