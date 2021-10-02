import React, { useEffect, useState } from 'react'
import FilterTasks from './filter/FilterTasks'
import Header from './header/Header'
import ToDoForm from './todoform/ToDoForm'
import ToDoList from './todolist/ToDoList'

function ToDoApp() {

    const [toDoList, settoDoList] = useState([])
    const [filteredTodos, setfilteredTodos] = useState([])
    const [status, setstatus] = useState('all')
    useEffect(() => {
        const tasks = localStorage.getItem('tasks')
        if (!!tasks) {
            settoDoList(JSON.parse(tasks))
        }
        filterTasks()
    }, [])
    useEffect(() => {
        filterTasks(status)
    }, [toDoList,status])

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
    function editTaskHandler(task) {
        const index = toDoList.findIndex(todo=>todo.id===task.id)
        const selectedItem = {...toDoList[index]}
        selectedItem.todo=task.todo
        const updatedList=[...toDoList]
        updatedList[index]=selectedItem
        settoDoList(updatedList)
        setLocalStorageHandler(updatedList)
    }
    function filterTasks(status) {
        switch (status) {
            case 'all':
                setfilteredTodos(toDoList)
                break
            case 'completed':
                setfilteredTodos(toDoList.filter(todo=>todo.isComplete))
                break
            case 'notCompleted':
                setfilteredTodos(toDoList.filter(todo=>!todo.isComplete))
                break
            default:
                setfilteredTodos(toDoList)
                break
        }
    }
    return (
        <div className='tasklist-container'>
            <Header taskList={toDoList}/>
            <ToDoForm newToDoHandler={newToDoHandler}/>
            <FilterTasks filterTasks={filterTasks} setstatus={setstatus} status={status}/>
            <ToDoList editTaskHandler={editTaskHandler} toDoList={filteredTodos} removeTaskHandler={removeTaskHandler} completeTaskHandler={completeTaskHandler}/>
        </div>
    )
}

export default ToDoApp
