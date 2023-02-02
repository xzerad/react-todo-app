import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { Popup } from "./Popup";
import TodoTile from "./TodoTile";


function TodoList(){
    const [todoList, setTodoList] = useContext(TodoContext);
    return (
        <>
            <div className="main-container">
            <div className="flex-container justify-flex-container">
                <span style={{fontWeight: 600, fontSize: "18pt"}}>Todo</span>
                <CreateReminderButton/>
            </div>
                {
                    todoList.filter((todo: any) => !todo.completed).map((e: any) => <TodoTile title={e.title} date={e.date} categories={e.categories} completed={e.completed} key={Math.random() * 1000} />)
                }
                <span style={{fontWeight: 600, fontSize: "18pt"}}>Completed</span>
                    {
                        todoList.filter((todo: any) => todo.completed).map((e: any) => <TodoTile title={e.title} date={e.date} categories={e.categories} completed={e.completed} key={Math.random() * 1000}/>)
                    }
            </div>
        </>
            
    )
}

function CreateReminderButton(){
    const [showPopup, setShowPopup] = useState(false)
    const closePopup = ()=> setShowPopup(!showPopup)
    
    return (
        <>
                <button className="reminder-btn" onClick={closePopup}>Create Reminder</button>
                { showPopup && <Popup onClick={closePopup}/>}
        </>
    )

}



export default TodoList;