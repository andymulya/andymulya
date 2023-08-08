import { Link } from 'react-router-dom'

import profile from '../assets/profile.jpg'
import Contact from '../components/Profile/Contact'
import Modal from '../components/Profile/Modal'

export default function Profile(){
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-28 lg:gap-52">
                <img src={profile} className="max-w-sm rounded-full lg:rounded-lg shadow-2xl" />
                <h1 className="text-[200px] font-extrabold absolute top-[470px] lg:top-auto bottom-auto lg:left-auto text-cyan-950 md:text-re drop-shadow-[-13px_11px_0px_rgba(255,255,255,1)]">Hi.</h1>
                <div>
                    <h1 className="text-4xl text-cyan-900">I am <span className="uppercase bg-cyan-700 text-cyan-50 font-bold">Andy Eka Mulya</span></h1>
                    <p className="py-6 text-cyan-700">I am a <span className="uppercase font-bold text-cyan-900">Junior Front-End Developer</span></p>
                    
                    <div className='flex gap-5 lg:ml-10'>
                        <Link className="btn border-cyan-600 bg-transparent text-cyan-600" to="/portofolio">Portofolio</Link>
                        <Modal nameContent={"Contact"} content={<Contact />} style={"btn bg-cyan-600 text-white hover:bg-cyan-700"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}