import { Link } from "react-router-dom"

export default function Navigation(){
    return (
        <>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to={'/andymulya'}>Profile</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/history'}>History</Link></li>
                <li><Link to={'/knowledge'}>Knowledge</Link></li>
                <li><Link to={'/portfolio'}>Portfolio</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </>
    )
}