import React from 'react'
import style from './todolist.module.css'
import {FaTrashAlt} from 'react-icons/fa'
import {MdDone} from 'react-icons/md'
import {VscError} from 'react-icons/vsc'

function ToDo({todo,removeTaskHandler,completeTaskHandler}) {
    return (
        <div className={style.todoContainer}>
            <li className={todo.isComplete?style.completed:style.notCompleted}>
                <span >{todo.todo}</span>
                <div>
                    <button className={style.button} onClick={()=>completeTaskHandler()}>{todo.isComplete?<VscError/>:<MdDone/>}</button>
                    <button className={style.button} onClick={()=>removeTaskHandler()}><FaTrashAlt/></button>
                </div>
            </li>
        </div>
    )
}

export default ToDo
