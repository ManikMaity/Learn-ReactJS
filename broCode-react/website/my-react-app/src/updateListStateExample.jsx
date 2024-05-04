import { useState } from "react";
import ReuseButton from "./ReuseButton.jsx"



function UpdateListStateExample () {

    const [todo, setTodo] = useState([]);

    
    const handleAddTodo = (e) => {
        e.preventDefault();
        const inputBox = document.getElementById("todoInput");
        const inputBoxValue = inputBox.value;
        if (inputBoxValue != ""){
            setTodo(t => [...todo, inputBoxValue]);
            inputBox.value = "";
        }
    }
    
  const handleDeleteItem = (i) => {
    setTodo(t => (todo.filter((item, index) => index != i)));
  }
    
    let listItemHtml = todo.map((item, index) => <li className="todo-item" onDoubleClick={() => handleDeleteItem(index)} key={index}>{item}</li>)

    return (
        <div className="card">
            <form>
                <input type="text" name="" id="todoInput" />
                <ReuseButton func={handleAddTodo} style={{width:"100%"}}/>
            </form>
            <ul>
                {todo.length >= 1 && listItemHtml}
            </ul>
        </div>
    )

}

export default UpdateListStateExample;