import React, { useState } from 'react'
import MessageBox from '../assets/MessageBox'
import style from './todolist.module.css'

function EditToDo({task,editTaskHandler,seteditTask}) {
    const [todo, settodo] = useState('')

    function submitEditToDoHandler(e) {

        e.preventDefault()
        if (todo!==''&&todo!==' ') {
            const newToDo={
                id:task.id,
                isComplete:false,
                todo,
                date:new Date()
            }
            editTaskHandler(newToDo)
            seteditTask(null)
        }
    }

    return (
        <MessageBox close={()=>seteditTask(null)}>
            <form className={style.editForm} onSubmit={e=>submitEditToDoHandler(e)}>
                <input className={style.editInput} type="text" placeholder='کار' value={todo} onChange={(e)=>settodo(e.target.value)}/>
                <button type='submit'>ثبت</button>
            </form>
        </MessageBox>
    )
}

export default EditToDo
