import { useState } from "react";
import ReuseButton from "./ReuseButton";

function Counter2 (){
    const [count, setCount] = useState(0);

    function incrementCount () {
        setCount(c => c + 1);
        setCount(c => c + 1);
        
    }

    function decrementCount (){
        if (count > 0){
            setCount(c => c - 1);
            setCount(c => c - 1);

        }
        else{
            return;
        }
    }

    function resetCount (){
        setCount(0);
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

export default Counter2;