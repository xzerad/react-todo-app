import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { useForm } from "../hooks/useForm";

export function Popup({onClick}: any){
    const [todoList, setTodoList] = useContext(TodoContext);
    const [values, handleChange] = useForm({title: "", date: "Today"})
    const [categories, setCategories] = useState<string[]>([]);
    
    return (
        <div className="popup-container">
            <div className="dialog-box">
                <div className="popup-item flex-container justify-flex-container">
                    <span>Create Reminder</span>
                    <button className="close-btn" onClick={onClick}>X</button>
                </div>
                <input placeholder="title" className="popup-item" name="title" value={values.title} onChange={handleChange}></input>
                <select className="popup-item" value={values.date} name="date" onChange={handleChange}>
                    <option>Today</option>
                    <option>Tomorrow</option>
                </select>
                <div className="popup-item">
                { ["Work", "Hooli", "Grocery", "Personal"].map((e)=> <label><input type="checkbox" name="categories" onChange={(event)=> setCategories((event.target.checked)?[...categories, e]:categories.filter(cat => cat !== e))} /> {e}</label> ) }
                </div>
                <div className="flex-container center-justify-flex-container" >
                    <button className="add-reminder-btn popup-item" onClick={()=>{setTodoList([...todoList, {...values, categories, completed: false}])}}>Add</button>
                </div>
            </div>
        </div>
    )
}
