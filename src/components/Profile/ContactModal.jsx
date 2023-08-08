import Contact from "./Contact";

export default function ContactModal(){
    return (
        <>
            <button className="btn bg-cyan-600 text-white hover:bg-cyan-700" onClick={()=>window.my_modal_contact.showModal()}>Contact</button>
            <dialog id="my_modal_contact" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box bg-cyan-50">
                    <h3 className="font-bold text-lg uppercase text-cyan-600">Contact</h3>
                    <div>
                        {
                            <Contact />
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