import profile from '../assets/img/profile.jpg'

export default function NotFound(){
    return (
        <div className="hero min-h-screen mb-14">
            <div className="hero-content flex-col md:flex-row">
                <img src={profile} className="max-w-[250px] rounded-full shadow-2xl" />
                <div className="flex flex-col absolute top-[400px] items-center">
                    <h1 className="text-[130px] font-extrabold text-cyan-950 drop-shadow-[-13px_11px_0px_rgba(255,255,255,1)]">404</h1>
                    <span className="text-4xl uppercase text-slate-500 font-bold">Not Found</span>
                </div>
            </div>
        </div>
    )
}