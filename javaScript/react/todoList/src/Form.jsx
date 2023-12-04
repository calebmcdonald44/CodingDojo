import { useState } from 'react'

const Form = ({changeCompletion, deleteTask, listMap, addTask}) => {

    const [newTask, setNewTask] = useState()

    const taskTracker = (e) => {
        setNewTask(e.target.value)
    }
    const sendTask = () => {
        addTask({task: newTask, completed: false})
    }

    return (
        <div>
            <div className='flex'>
                <label htmlFor="">Add a new task: </label>
                <input type="text" onChange={(e) => taskTracker(e)}/>
                <button onClick={() => sendTask()}>Add</button>
            </div>
            <>{listMap}</>
        </div>
    )
}
export default Form