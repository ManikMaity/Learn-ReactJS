

// eslint-disable-next-line react/prop-types
function SecondaryBtn({text = ""}){

    // eslint-disable-next-line no-unused-vars
    const changeName = (e) => {
        e.target.innerText = "Its works🙀";
        e.target.style.backgroundColor = "darkgreen";
    }

    const getTime = (e, date = "") => {
        const time = new Date ();
        let text;
        if (date == "time"){
            text = time.toLocaleTimeString();
        }
        else {
            text = time.toLocaleDateString();
        }
        e.target.innerText = text + " 📅";
        e.target.style.backgroundColor = "darkgreen";
    }

    const reset = (e) => {
        e.target.textContent = "Click me😸";
        e.target.style.backgroundColor = "#42b7ff";
    }



    return (
        <button onClick={reset}  onDoubleClick={(e) => {getTime(e, text)}} className="secondaryBtn">Click me😸</button>
    )
}

export default SecondaryBtn;