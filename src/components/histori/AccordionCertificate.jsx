import Accordion from '../Accordion'

const LabelCertificate = ({ label1, label2 }) => <p className="text-md text-slate-500 dark:text-slate-300"><span className="text-cyan-700 dark:text-cyan-500 font-semibold">{ label1 }</span> { label2 }</p>

const items = [
    {
        title: "2021",
        desc: <LabelCertificate label1={"Google ads display certification"} label2={"- at Google Website Skillshop"} />
    }
]

export default function AccordionCertificate(){
    return (
        <div>
            <h1 className="text-lg uppercase font-bold text-cyan-950 dark:text-cyan-50 border-l-2 border-cyan-500 pl-2 mb-4" >Certificate</h1>
            <Accordion idAccordion={"my_accordion_certificate"} items={items}/>
        </div>
    )
}