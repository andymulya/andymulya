import Accordion from '../Accordion'

export default function AccordionEdu(){
    return(
        <div>
            <h1 className="text-lg uppercase font-bold text-cyan-950 border-l-2 border-cyan-500 pl-2 mb-4">Education</h1>
            <Accordion idAccordion={"my_accordion_edu"} items={[
                {
                    title: <h1 className="text-md font-semibold text-cyan-800">2019-2022</h1>,
                    desc: <p className="text-md text-slate-500">Student in <span className="font-semibold text-cyan-600">Universitas KH Bahaudin Mudhary</span></p>
                },
                {
                    title: <h1 className="text-md font-semibold text-cyan-800">2016-2019</h1>,
                    desc: <p className="text-md text-slate-500">Student in <span className="font-semibold text-cyan-600">SMAN 2 Sumenep</span></p>
                },
                {
                    title: <h1 className="text-md font-semibold text-cyan-800">2013-2016</h1>,
                    desc: <p className="text-md text-slate-500">Student in <span className="font-semibold text-cyan-600">SMPN 3 Sumenep</span></p>
                }
            ]}/>
        </div>
    )
}