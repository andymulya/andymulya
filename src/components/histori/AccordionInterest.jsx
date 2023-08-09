import Accordion from '../Accordion'
import ProgressIndicator from './ProgressIndicator'

export default function AccordionInterest(){
    return (
        <div>
            <h1 className="text-lg uppercase font-bold text-cyan-950 border-l-2 border-cyan-500 pl-2 mb-4">Interest</h1>
            <Accordion idAccordion={"my_accordion_interest"} items={[
                {
                    title: <h1 className="text-md font-semibold text-cyan-800 uppercase">Html</h1>,
                    desc: <ProgressIndicator value={80} />
                },
                {
                    title: <h1 className="text-md font-semibold text-cyan-800 uppercase">Css</h1>,
                    desc: <ProgressIndicator value={70} />
                },
                {
                    title: <h1 className="text-md font-semibold text-cyan-800 uppercase">Javascript</h1>,
                    desc: <ProgressIndicator value={70} />
                },
                {
                    title: <h1 className="text-md font-semibold text-cyan-800 uppercase">Vite</h1>,
                    desc: <ProgressIndicator value={65} />
                },
                {
                    title: <h1 className="text-md font-semibold text-cyan-800 uppercase">Dart</h1>,
                    desc: <ProgressIndicator value={75} />
                },
                {
                    title: <h1 className="text-md font-semibold text-cyan-800 uppercase">Flutter</h1>,
                    desc: <ProgressIndicator value={70} />
                }
            ]}/>
        </div>
    )
}