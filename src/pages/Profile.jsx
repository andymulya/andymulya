import profile from '../assets/img/profile.jpg'
import MediaSocial from '../components/profile/MediaSocial'

export default function Profile(){
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-24 md:gap-28  lg:gap-52">
                <img src={profile} className="max-w-[300px] lg:max-w-sm rounded-full lg:rounded-lg shadow-2xl" />
                <h1 className="text-[185px] md:text-[200px] lg:text-[250px] font-extrabold absolute top-[360px] lg:top-auto bottom-auto lg:left-auto text-cyan-950 drop-shadow-[-13px_11px_0px_rgba(255,255,255,1)]">Hi.</h1>
                <div className='mt-4'>
                    <h1 className="text-4xl text-cyan-700 lg:whitespace-nowrap">I am <span className="uppercase bg-cyan-700 text-cyan-50 font-bold rounded-full px-3">Andy Eka Mulya</span></h1>
                    <p className="py-6 text-cyan-700">I am a <span className="uppercase font-bold text-cyan-900">Junior Front-End Developer</span></p>
                    
                    <div className='flex gap-5 justify-end'>
                        <MediaSocial />
                    </div>
                </div>
            </div>
        </div>
    )
}