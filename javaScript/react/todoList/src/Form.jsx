import { useState } from 'react'

const Form = ({list, setList}) => {

    const [newTask, setNewTask] = useState()

    const submitTask = (e) => {
        taskTracker(e)
        setList([...list, {task: newTask, completed: false}])
    }

    const changeCompletion = (idx) => {
        let newList = []
        list.map((value, i) => idx != i ? newList.push(value) : newList.push({"task": value.task, completed: !value.completed}))
        setList(newList)
    }

    const deleteTask = (idx) => {
        setList(list.filter((entry, i) => i != idx))
    }

    const taskTracker = (e) => {
        setNewTask(e.target.value)
    }

    return (
        <div>
            <div className='flex'>
                <label htmlFor="">Add a new task: </label>
                <input type="text" onChange={(e) => taskTracker(e)}/>
                <button onClick={(e) => submitTask(e)}>Add</button>
            </div>
            {
                list.map(({task, completed}, idx) =>
                    <div key={idx} className={completed ? "completed" : "uncompleted"}>
                        <label htmlFor="">Task:</label>
                        <p>{task}</p>
                        <input id={idx} type="checkbox" defaultChecked={completed} onClick={(e) => changeCompletion(e.target.id)}/>
                        <button id={idx} onClick={(e) => deleteTask(e.target.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}
export default Form