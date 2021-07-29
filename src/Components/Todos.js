import React from 'react'
import TodoItem from "../Components/TodoItem"

export default function Todos(props) {
    return (
        <div className="container my-4">
            <h3 className="text-center">Todo's List</h3>
            {props.todos.length===0?"No todos to display":
            props.todos.map((todo)=>{
                return(
                 <TodoItem todo={todo} onDelete={props.onDelete}/>
                    )
            })
            }
            
        </div>
    )
}
