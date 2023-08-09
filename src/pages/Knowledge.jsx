import CardGlass from '../components/CardGlass'
import Title from '../components/Title'

export default function Knowledge(){
    return (
        <div>
            <div className="my-10 mx-5 flex flex-col gap-10">
                <Title title={"Knowledge"}/>
                <div className="flex gap-5 flex-col my-10 md:gap-20">
                    <h1 className="text-2xl lg:text-3xl font-extrabold uppercase text-cyan-800 border-l-4 border-slate-400 pl-2 whitespace-nowrap"><span className="text-3xl md:text-5xl text-cyan-950">What</span> I Know ?</h1>
                    <div className="flex flex-col lg:flex-row flex-wrap items-center gap-5 justify-center">
                        <CardGlass title={"Javascript Programming"}/>
                        <CardGlass title={"Dart Programming"} />
                        <CardGlass title={"Vite Framework"} />
                        <CardGlass title={"Flutter"} />
                    </div>
                </div>
            </div>
        </div>
    )
}