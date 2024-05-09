import { useState, useEffect } from "react";

function DigitalClock (){

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
       const timeInterval =  setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 100)
        console.log("Time started")

        return () => {
            clearInterval(timeInterval);
            console.log("Time inerval end");
        }
    }, [])

    

    return (
        <div className="card">
            <h2>{time}</h2>
        </div>
    )
}

export default DigitalClock;