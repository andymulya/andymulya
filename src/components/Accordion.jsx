export default function Accordion({ idAccordion, items }){
    return (
        <div className="join join-vertical w-full shadow-md">
            {
                items.map((item, i) => {
                    return (
                        <div className="collapse collapse-arrow join-item border border-base-300" key={i}>
                            <input type="radio" name={idAccordion} /> 
                            <div className="collapse-title text-xl font-medium">
                                { item.title }
                            </div>
                            <div className="collapse-content"> 
                                { item.desc }
                            </div>
                        </div>
                    )
                        
                })
            }
        </div>
    )
}