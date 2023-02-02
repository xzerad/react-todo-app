import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";


const colorsMap: any = {
    "Work": "#ff5147",
    "Grocery": "#59c7f9",
    "Personal": "#5553d5"
}

function TodoTile({title, date, categories, completed}: {title: string, date: string, categories: string[], completed: boolean}){
    const [checked, setChecked] = useState(completed);
    const [todoList, setTodoList] = useContext(TodoContext);
    return (
        <label className="flex-container tile-container">
                <CheckBox checked={checked} onClick={()=>{
                        setChecked(!checked)
                        todoList.find((todo: any)=> todo.title === title).completed = !checked
                        setTodoList([...todoList])
                        } }color={categories.length > 0 ? colorsMap[categories[0]]: null}/>
                <div className="content-container">
                    <p className={(completed? "completed-task": "") +" title"}>{title}</p>
                    <p className={(completed? "completed-task": "") +" date"}>{date}</p>
                </div>
                <div>
                    {
                        categories.map((category, index) => <TodoCategory category={category} key={index}/>)
                    }
                </div>
        </label>
    )
                


}

function CheckBox({checked, onClick, color}: any){
    return (
    <span className="checkbox-container" onClick={()=>onClick()}>
        { checked && <span className="checkmark" style={{backgroundColor: color}} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="check-icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>


        </span> }
        <input type="checkbox" className="checkbox-round" style={{borderColor: color}} />
    </span>
        )
        
}
function TodoCategory({category}: {category: string}){
    return (
    <span className="category-container">
        {category}
    </span>
    )
}
export default TodoTile;