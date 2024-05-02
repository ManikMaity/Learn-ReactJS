import { useState } from "react";
import ReuseButton from "./ReuseButton";

function Counter (){
    let [count, setCount] = useState(0);

    function incrementCount () {
        setCount(++count);
    }

    function decrementCount (){
        if (count > 0){
            setCount(--count);
        }
        else{
            return;
        }
    }

    function resetCount (){
        count = 0;
        setCount(count);
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <div className="btn-container">
                <ReuseButton text="Increment" func={incrementCount}/>
                <ReuseButton text="Decrement" func={decrementCount}/>
                <ReuseButton text="Reset" func={resetCount}/>
            </div>
        </div>
    )
    
}

export default Counter;