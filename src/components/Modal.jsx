export default function Modal({ id, func }){
    return(
        <div>
            <button className="btn bg-transparent text-cyan-700 border-0 hover:underline" onClick={ func }>Learn More</button>
            <dialog id={ id } className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}