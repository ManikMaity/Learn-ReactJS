import { useState, createContext } from "react";
import ComponentB from "./ComponentB.jsx";


export const UserContext = createContext();

function ComponentA (){
    
    const [user, setUser] = useState("Manik");
    const changeName = () => {
        setUser(e => e == "Manik" ? "M.Maity" : "Manik");
    }

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
            
            <button onClick={changeName}>Change</button>

        </div>
    )
}

export default ComponentA;