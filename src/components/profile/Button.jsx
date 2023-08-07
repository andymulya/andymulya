export default function Button({ buttonName, style }){
    return (
        <button className={style}>{buttonName}</button>
    )
}