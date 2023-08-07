import { Link } from 'react-router-dom'

import profile from '../assets/profile.jpg'

export default function Profile(){
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={profile} className="max-w-sm rounded-full lg:rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold uppercase min">Andy Eka Mulya</h1>
                    <p className="py-6 uppercase">Junior Front-End Developer</p>
                    
                    <div className='flex gap-5'>
                        <Link className="btn btn-outline btn-info" to="/portofolio">Portofolio</Link>
                        <Link className="btn btn-info text-white" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}