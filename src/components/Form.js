import React, {useState} from 'react'

const Form = (props) => {
    const [task, setTask] = useState("")
    const {todoList, setTodoList} = props
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList([
            ...todoList,
            {
                id: Math.floor(Date.now() * Math.random()),
                item: task,
                isComplete: false
            }
        ])
        setTask("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Form