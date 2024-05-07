import { useState, useEffect, useRef } from "react";

function UseRefExample (){

    const ref = useRef(0);
    const input = useRef(null);

    useEffect(() => {
        console.log("Render");
        console.log(input)
    })

    const handleClick = () => {
        input.current.focus();
        input.current.style.background = "lightgreen";
    }

    return (
        <div className="card">
            <input type="text" name="" id="" ref={input}/>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default UseRefExample;