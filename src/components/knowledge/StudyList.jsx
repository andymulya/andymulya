import iconCheck from '../../assets/check.png'

export default function StudyList({ title, items }){
    return(
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl uppercase font-bold text-cyan-900">{ title }</h1>
            <h3 className="font-semibold text-cyan-700">What i learned about { title }</h3>
            {
                items.map((item, i) => {
                    return (
                        <div key={ i } className="flex flex-row gap-2">
                            <img src={ iconCheck } className="w-[24px] h-[24px]"/>
                            <p className="text-sm text-slate-600">{ item }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}