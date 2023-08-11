import profile from '../assets/img/profile.jpg'

export default function NotFound(){
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <img src={profile} className="max-w-[250px] md:max-w-xs lg:max-w-sm rounded-full shadow-2xl" />
                <div className="absolute top-[370px] md:top-auto bottom-auto md:left-auto">
                    <h1 className="text-[130px] md:text-[200px] lg:text-[250px] font-extrabold text-cyan-950 drop-shadow-[-13px_11px_0px_rgba(255,255,255,1)]">404</h1>
                    <div className="flex justify-end">
                        <span>Not Found</span>
                    </div>
                </div>

            </div>
        </div>
    )
}