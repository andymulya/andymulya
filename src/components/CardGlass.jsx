export default function CardGlass({ title }){
    return (
        <div className="card w-96 glass">
            <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    )
}