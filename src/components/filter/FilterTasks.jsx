import React, { useState } from 'react'

function FilterTasks({filterTasks,setstatus,status}) {

    function changeSeleect(e) {
        setstatus(e.target.value)
        filterTasks(e.target.value)
    }
    return (
        <div>
            <select value={status} onChange={(e)=>changeSeleect(e)}>
                <option value="all" >همه کار ها</option>
                <option value="completed" > کار های تمام شده </option>
                <option value="notCompleted" > کار های باقی مانده </option>
            </select>
        </div>
    )
}

export default FilterTasks
