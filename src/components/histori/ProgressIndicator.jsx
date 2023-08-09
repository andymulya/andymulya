export default function ProgressIndicator({ value }){
    return (
        <div>
            <h3 className="text-md text-right font-semibold text-cyan-900">{ value }<span className="text-cyan-700">%</span></h3>
            <progress className="progress progress-info w-full" value={ value } max="100" />
        </div>
    )
}