
// eslint-disable-next-line react/prop-types
function ReuseButton ({func, text = "Click", style = {}}){

    return (
        <button type="submit" style={style} onClick={func} className="reuseBtn">{text}</button>
    )
}

export default ReuseButton;