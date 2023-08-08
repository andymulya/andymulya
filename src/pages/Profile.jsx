import { Link } from 'react-router-dom'

import profile from '../assets/profile.jpg'

export default function Profile(){
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-28 lg:gap-52">
                <img src={profile} className="max-w-sm rounded-full lg:rounded-lg shadow-2xl" />
                <h1 className="text-[200px] font-extrabold absolute bottom-10 lg:bottom-56 lg:left-auto xl:left-auto text-cyan-950 drop-shadow-[-13px_11px_0px_rgba(255,255,255,1)]">Hi.</h1>
                <div>
                    <h1 className="text-4xl font-bold uppercase bg-cyan-800 text-cyan-50">I am Andy Eka Mulya</h1>
                    <p className="py-6 lg:ml-10 uppercase">I am a Junior Front-End Developer</p>
                    
                    <div className='flex gap-5'>
                        <Link className="btn border-cyan-600 bg-transparent text-cyan-600" to="/portofolio">Portofolio</Link>
                        <Link className="btn bg-cyan-600 text-white" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}