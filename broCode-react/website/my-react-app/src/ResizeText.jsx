import { useState, useEffect } from "react"

function ResizeText () {
    const [heightSize, setHeightSize] = useState(window.innerHeight);
    const [widthSize, setWidthSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", changeSize);
        console.log("Added event")

        return () => {
            window.removeEventListener("resize", changeSize);
            console.log("event removed")
        }
    }, [])

    function changeSize () {
        setHeightSize(window.innerHeight);
        setWidthSize(window.innerWidth)
    }

    return (
        <div className="card">
            <h2>Height : {heightSize}px</h2>
            <h2>Width : {widthSize}px</h2>
        </div>
    )

}

export default ResizeText