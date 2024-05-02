import style from "./button.module.css";
function Button ({func}){

    return (
        <button onClick={(e) => {
            e.stopPropagation();
            func()
        }} id="My-btn" className={style.btn}>Click me</button>
    )
}
export default Button;