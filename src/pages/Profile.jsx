import Button from '../components/profile/Button'
import profile from '../assets/profile.jpg'

export default function Profile(){
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={profile} className="max-w-sm rounded-full lg:rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold uppercase">Andy Eka Mulya</h1>
                    <p className="py-6 uppercase">Junior Front-End Developer</p>
                    
                    <div className='flex gap-5'>
                        <Button buttonName={"Portofolio"} style={"btn btn-outline btn-info"}/>
                        <Button buttonName={"Contact"} style={"btn btn-info"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}