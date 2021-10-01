import React from 'react'
import './app.css'
import ToDoApp from './components/ToDoApp'

function App() {
    return (
        <div className='app'>
            <h1 className='title'>مدیریت کار ها</h1>
            <div className='container'>
                <ToDoApp/>
            </div>
        </div>
    )
}

export default App
