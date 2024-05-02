import { useState } from "react";
import Button from "./Button/button.jsx";

const style = {
    color : "white",
    backgroundColor : "#0c0c0c",
    display : "flex",
    flexDirection: "column",
    gap : "10px",
    maxWidth: "fit-content",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #fff",
    margin: "10px",
}


function MyComponent() {

    let [name, setName] = useState('Manik');
    const names = ["Suman", "Swapan", "Tapan", "User"];

    const changeName = () => {
        let newName = Math.floor(Math.random()*4);
        name = names[newName];
        setName(name);
        console.log(name)
    }

    return (
    <div style={style}>
         <h1>Hi, {name}</h1>
         <Button func={changeName}/>
    </div>
   
);
}
export default MyComponent;
