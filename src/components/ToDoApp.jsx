import React, { useEffect, useState } from 'react'
import ToDoForm from './todoform/ToDoForm'
import ToDoList from './todolist/ToDoList'

function ToDoApp() {

    const [toDoList, settoDoList] = useState([])

    useEffect(() => {
        const tasks = localStorage.getItem('tasks')
        if (!!tasks) {
            settoDoList(JSON.parse(tasks))
        }
    }, [])

    function setLocalStorageHandler(list) {
        localStorage.setItem('tasks',JSON.stringify(list))
    }
    const newToDoHandler=(task)=>{
        settoDoList([...toDoList,task])
        setLocalStorageHandler([...toDoList,task])
    }
    function removeTaskHandler(task) {
        const filteredList=toDoList.filter(todo=>todo.id!==task.id)
        settoDoList(filteredList)
        setLocalStorageHandler(filteredList)
    }
    function completeTaskHandler(task) {
        const index = toDoList.findIndex(todo=>todo.id===task.id)
        const selectedItem = {...toDoList[index]}
        selectedItem.isComplete=!task.isComplete
        const updatedList=[...toDoList]
        updatedList[index]=selectedItem
        settoDoList(updatedList)
        setLocalStorageHandler(updatedList)
    }
    return (
        <div>
            <ToDoForm newToDoHandler={newToDoHandler}/>
            <ToDoList toDoList={toDoList} removeTaskHandler={removeTaskHandler} completeTaskHandler={completeTaskHandler}/>
        </div>
    )
}

export default ToDoApp
