
// eslint-disable-next-line react/prop-types
function ReuseButton ({func, text = "Click"}){
    return (
        <button onClick={func} className="reuseBtn">{text}</button>
    )
}

export default ReuseButton;