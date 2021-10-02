import React from 'react'
import style from './header.module.css'

function Header({taskList}) {
    const notCompleted = taskList.filter(task=>task.isComplete===false)
    return (
        <header className={style.headerContainer}>
            {
                notCompleted.length===0?(
                    <div>شما هیچ کاری ندارید...</div>
                ):(
                    <div >
                        شما 
                        <span className={style.badge}>{notCompleted.length}</span> 
                        کار نکرده دارید
                    </div>
                )
            }
        </header>
    )
}

export default Header
