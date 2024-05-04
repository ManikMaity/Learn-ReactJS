import { useState } from "react";
import ReuseButton from "./ReuseButton.jsx";

function TodoList (){



    return (
        <div className="card">
            <h2>Todo App 📅</h2>
            <div className="inputs">
                <input type="text" name="" id="" placeholder="Enter todo here..."/>
                <textarea name="" id="" placeholder="Enter todo description here..."></textarea>
                <ReuseButton style={{width: "100%"}} text="Add Todo 📲"/>
            </div>

            
        </div>
    )
}

export default TodoList;