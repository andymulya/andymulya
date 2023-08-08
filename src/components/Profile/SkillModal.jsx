import Skill from './Skill'

export default function ContactModal(){
    return (
        <>
            <button className="btn border-cyan-600 bg-transparent text-cyan-600" onClick={()=>window.my_modal_skill.showModal()}>Skill</button>
            <dialog id="my_modal_skill" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box bg-cyan-50">
                    <h3 className="font-bold text-lg uppercase text-cyan-600">Skill</h3>
                    <div>
                        {
                            <Skill />
                        }
                    </div>
                    <div className="modal-action">
                        <button className="btn bg-cyan-600 text-cyan-50">Close</button>
                    </div>
                </form>
            </dialog>
        </>
    )
}