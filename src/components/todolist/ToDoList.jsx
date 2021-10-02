import React, { useState } from 'react'
import MessageBox from '../assets/MessageBox'
import EditToDo from './EditToDo'
import ToDo from './ToDo'
import style from './todolist.module.css'

function ToDoList({toDoList,removeTaskHandler,completeTaskHandler,editTaskHandler}) {
    const [editTask, seteditTask] = useState(null)
    if (toDoList.length===0) {
        return(
            <div className={style.emptyDiv}>لطفا یک کار اضافه کنید</div>
        )
    }
    function showEditTask(task) {
        seteditTask(task)
    }

    return (
        <div className={style.listContainer}>
            {editTask?<EditToDo task={editTask} seteditTask={seteditTask} editTaskHandler={editTaskHandler}/>:null}
            {
                toDoList.map(todo=>(
                    <ToDo key={todo.id} todo={todo} showEditTask={()=>showEditTask(todo)} removeTaskHandler={()=>removeTaskHandler(todo)} completeTaskHandler={()=>completeTaskHandler(todo)}/>
                ))
            }
        </div>
    )
}

export default ToDoList
