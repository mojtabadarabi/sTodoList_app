import React, { useState } from 'react'
import style from './todoform.module.css'

function ToDoForm({newToDoHandler}) {

    const [todo, settodo] = useState('')

    function submitNewToDoHandler(e) {
        e.preventDefault()
        if (todo!==''&&todo!==' ') {
            const task={
                id:Math.floor(Math.random()*1000),
                todo,
                date:new Date(),
                isComplete:false,
            }
            newToDoHandler(task)
            settodo('')
        }
    }

    return (
        <form onSubmit={(e)=>submitNewToDoHandler(e)} className={style.form}>
            <input type="text" placeholder='کار' value={todo} onChange={(e)=>settodo(e.target.value)} />
            <button type='submit'>ثبت</button>
        </form>
    )
}

export default ToDoForm
