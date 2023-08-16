import Accordion from '../Accordion'

const items = [
    {
        title: "2019-2022",
        desc: <p className="text-md text-slate-500">Student in <span className="font-semibold text-cyan-600">Universitas KH Bahaudin Mudhary</span></p>
    },
    {
        title: "2016-2019",
        desc: <p className="text-md text-slate-500">Student in <span className="font-semibold text-cyan-600">SMAN 2 Sumenep</span></p>
    },
    {
        title: "2013-2016",
        desc: <p className="text-md text-slate-500">Student in <span className="font-semibold text-cyan-600">SMPN 3 Sumenep</span></p>
    }
]

export default function AccordionEdu(){
    return(
        <div>
            <h1 className="text-lg uppercase font-bold text-cyan-950 border-l-2 border-cyan-500 pl-2 mb-4">Education</h1>
            <Accordion idAccordion={"my_accordion_edu"} items={items}/>
        </div>
    )
}