import ComponentB from "./ComponentB.jsx";

function ComponentA (){
    
    return (
        <div className="box">
            <h1>Component A</h1>
            <ComponentB/>
        </div>
    )
}

export default ComponentA;