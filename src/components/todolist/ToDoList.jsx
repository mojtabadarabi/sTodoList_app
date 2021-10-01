import React from 'react'
import ToDo from './ToDo'
import style from './todolist.module.css'

function ToDoList({toDoList,removeTaskHandler,completeTaskHandler}) {
    if (toDoList.length===0) {
        return(
            <div className={style.emptyDiv}>لطفا یک کار اضافه کنید</div>
        )
    }
    return (
        <div className={style.listContainer}>
            {
                toDoList.map(todo=>(
                    <ToDo key={todo.id} todo={todo} removeTaskHandler={()=>removeTaskHandler(todo)} completeTaskHandler={()=>completeTaskHandler(todo)}/>
                ))
            }
        </div>
    )
}

export default ToDoList
