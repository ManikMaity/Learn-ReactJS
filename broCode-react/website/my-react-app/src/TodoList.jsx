import { useState } from "react";
import ReuseButton from "./ReuseButton.jsx";



function TodoList (){

const updateLocalStorage  = (allTasks = []) => {
    localStorage.setItem("todoTasks", JSON.stringify(allTasks));
}

const getAllTasks = () => {
    let dataJSON = localStorage.getItem("todoTasks");
    return JSON.parse(dataJSON);
}

    const [tasks, setTasks] = useState(getAllTasks() ? getAllTasks() : []);
    const [taskName, setTaskName] = useState("");
    const [taskDes, setTaskDes] = useState("");

const handleDeleteAllTask = () => {
    const sure = window.confirm("Are you realy wanna delete all tasks?");
    if (sure){
        localStorage.removeItem("todoTasks");
        setTasks([]);
    }
}

const handleAddTask = () => {
    if (taskName != "" && taskDes != ""){
        const taskObj = {
            name : taskName,
            description : taskDes,
            time : `${new Date().toLocaleString()}`
        }
        
        // eslint-disable-next-line no-unused-vars
        setTasks(t => {

            const updatedTasks = [...tasks, taskObj];
            updateLocalStorage(updatedTasks);
            return updatedTasks;
        });
        setTaskName("");
        setTaskDes("");
    }
}    
const handleDeleteTask = (i) => {
    setTasks(prevTasks => {
        const updatedTasks = prevTasks.filter((_, index) => index !== i);
        updateLocalStorage(updatedTasks);
        return updatedTasks;
    });
}    
const handleTaskNameChange = (e) => {
    const taskNameInputValue = e.target.value;
    setTaskName(taskNameInputValue);
}
const handleTaskDesChange = (e) => {
    const taskDesInputValue = e.target.value;
    setTaskDes(taskDesInputValue);
}
const handleTaskUp = (i) => {
    if (i > 0){
        let updatedTasks = [...tasks];
        [updatedTasks[i], updatedTasks[i - 1]] = [updatedTasks[i - 1], updatedTasks[i]]
        // eslint-disable-next-line no-unused-vars
        setTasks(precTask => {
            updateLocalStorage(updatedTasks)
            return updatedTasks;
        });
    }
}
const handleTaskDown = (i) => {
    if (i < tasks.length - 1){
        let updatedTasks = [...tasks];
        [updatedTasks[i], updatedTasks[i + 1]] = [updatedTasks[i + 1], updatedTasks[i]]
        // eslint-disable-next-line no-unused-vars
        setTasks(precTask => {
            updateLocalStorage(updatedTasks)
            return updatedTasks;
        });
    }
}

const handleShowTaskDes = (i) => {
    const des = document.getElementById(`task-${i}`);
    des.querySelector(".task-des").classList.toggle("show");
}

const tasksHTML = tasks.map((task, index) => <div className="main-taskcontainer" id={`task-${index}`} key={index}>
    <div className="task-container">
        <div className="task-detail">
            <h3>{task?.name}</h3>
            <p>{task?.time}</p>
        </div>
        <div className="task-btn-container">
            <button onClick={() => handleShowTaskDes(index)}>👁️</button>
            <button onClick={() => handleTaskUp(index)}>👆</button>
            <button onClick={() => handleTaskDown(index)}>👇</button>
            <button onClick={() => handleDeleteTask(index)}>🗑️</button>
        </div>
    </div>

    <div className="task-des">
        <p>{task.description}</p>
    </div>

    
</div>)

    return (
        <div className="todo-card">
            <h2>Todo App 📅</h2>
            <div className="inputs">
                <input onChange={handleTaskNameChange} value={taskName} type="text" name="" id="" placeholder="Enter todo here..."/>
                <textarea onChange={handleTaskDesChange} value={taskDes} name="" id="" placeholder="Enter todo description here..."></textarea>
                <ReuseButton func={handleAddTask} style={{width: "100%"}} text="Add Todo 📲"/>
            </div>
            <br />
            <div className="list-heading">
                <h2>Todo List 📃</h2>
                <button onClick={handleDeleteAllTask}>❌</button>
            </div>
            <ul className="task-list">
                {tasksHTML.length > 0 ? tasksHTML : <h4 style={{textAlign: "center", color : "#3b3b3b"}}>Please add task!</h4>}
            </ul>
        </div>
    )
}

export default TodoList;