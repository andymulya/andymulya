import Circle from "./Circle";

export default function CustomCard({ title, tag, color, shadowColor, label }){
    return (
        <div className={"card w-auto sm:w-72 h-auto bg-base-100 shadow-lg border-8 border-white overflow-clip " + shadowColor}>
            <div className="card-body">
                <Circle color={ color }/>
                <div className="flex justify-center m-10 mb-16 z-10">
                    <div className="w-[68px] h-[68px] bg-red-500 rounded-full border-2 border-black"/>
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