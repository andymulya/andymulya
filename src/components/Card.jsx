import Modal from './Modal'

export default function Card({ title, icon, id, func, items }){
    return (
        <div className="card w-full lg:w-96 bg-base-100 shadow-lg shadow-cyan-800">
            <div className="card-body">
                <img src={ icon } className="w-[70px] h-[70px]"/>
                <h2 className="card-title text-cyan-800 text-2xl">{ title }</h2>
                <div className="card-actions justify-end">
                    <Modal id={ id } func={ func } title={ title } items={ items } />
                </div>
            </div>
        </div>
    )
}