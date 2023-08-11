import Circle from "./Circle";

export default function CustomCard({ title, tag, color, shadowColor, label, image }){
    return (
        <div className={"card w-auto sm:w-72 h-auto bg-base-100 shadow-md border-8 border-white overflow-clip hover:shadow-xl hover:sm:scale-105 transition-all " + shadowColor}>
            <div className="card-body">
                <Circle color={ color }/>

                {/* icon */}
                <div className="flex justify-center m-10 mb-16 z-10">
                    <div className="w-[64px] h-[64px]">
                        <img src={ image }/>
                    </div>
                </div>
                <h1 className="card-title mt-5 text-sm z-10">{ title }</h1>
                <h3 className="text-slate-600 text-xs z-10 font-semibold uppercase">{ tag }</h3>
                
                <div className="flex justify-center">
                    <label className={"text-center mt-7 w-24 py-1 rounded-full text-white uppercase text-sm font-semibold " + color}>{ label }</label>
                </div>
            </div>
        </div>
    )
}