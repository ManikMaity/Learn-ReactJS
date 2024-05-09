import { useState, useRef, useEffect } from "react";

function StopWatch() {
  const [isRunnig, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunnig) {
      console.log("Start");
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);

      return () => {
        clearInterval(intervalIdRef.current);
      };
    }
  }, [isRunnig]);


  function handleStart() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatedTime() {
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliSeconds = Math.floor((elapsedTime % 1000) / 10);

    hour = String(hour).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliSeconds = String(miliSeconds).padStart(2, "0");

    return `${hour}:${minutes}:${seconds}:${miliSeconds}`;
  }

  return (
    <div className="card stopwatch-card">
      <div className="stopwatch-display">
        <h1>{formatedTime()}</h1>
      </div>
      <div className="stopwatch-control">
        <button onClick={handleStart} className="start-btn">
          Start
        </button>
        <button onClick={handleStop} className="stop-btn">
          Stop
        </button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
