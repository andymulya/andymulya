export default function Modal({ nameContent, content, style }){
    return (
        <>
            <button className={style} onClick={()=>window.my_modal_5.showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box bg-cyan-50">
                    <h3 className="font-bold text-lg uppercase text-cyan-600">{ nameContent }</h3>
                    <div>
                        {
                            content
                        }
                    </div>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </>
    )
}