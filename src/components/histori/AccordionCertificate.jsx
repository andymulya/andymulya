import Accordion from '../Accordion'

const items = [
    {
        title: "2021",
        desc: <p className="text-md text-slate-500"><span className="text-cyan-700 font-semibold">Google ads display certification</span> - at Google Website Skillshop</p>
    }
]

export default function AccordionCertificate(){
    return (
        <div>
            <h1 className="text-lg uppercase font-bold text-cyan-950 border-l-2 border-cyan-500 pl-2 mb-4" >Certificate</h1>
            <Accordion idAccordion={"my_accordion_certificate"} items={items}/>
        </div>
    )
}