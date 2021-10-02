import React from 'react'
import style from './todolist.module.css'
import {FaTrashAlt} from 'react-icons/fa'
import {MdDone} from 'react-icons/md'
import {VscError} from 'react-icons/vsc'
import {AiTwotoneEdit} from 'react-icons/ai'

const persianDate = require('persian-date');

function ToDo({todo,removeTaskHandler,completeTaskHandler,showEditTask}) {

    const date=`${new persianDate(todo.date).format('YYYY')}/${new persianDate(todo.date).format('M')}/${new persianDate(todo.date).format('D')}`
    const time=`${new persianDate(todo.date).format('HH')}:${new persianDate(todo.date).format('mm')}:${new persianDate(todo.date).format('ss')}`
    
    return (
        <div className={style.todoContainer}>
            <li className={todo.isComplete?style.completed:style.notCompleted}>
                <span >{todo.todo}</span>
                <div>
                    <span className={style.createdTime}>{date}--{time}</span>
                    <button className={style.button} onClick={()=>completeTaskHandler()}>{todo.isComplete?<VscError/>:<MdDone/>}</button>
                    <button className={style.button} onClick={()=>showEditTask()}><AiTwotoneEdit/></button>
                    <button className={style.button} onClick={()=>removeTaskHandler()}><FaTrashAlt/></button>
                </div>
            </li>
        </div>
    )
}

export default ToDo
