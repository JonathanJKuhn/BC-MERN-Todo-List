import React from 'react'

const Display = (props) => {
    const {todoList, setTodoList} = props

    const style = (isComplete) => (
        isComplete === true ? "complete" : "incomplete"
    )
    
    const handleComplete = (task) => {
        const updatedList = todoList.map((item) => {
            if(item.id === task.id) {
                item.isComplete = !item.isComplete
                return item
            } else {
                return item
            }
    })
        setTodoList(updatedList)
    }

    const handleDelete = (id) => {
        const updatedList = todoList.filter((item) => (
            item.id !== id ? true : false
        ))
        setTodoList([...updatedList])
    }

  return (
    <div>
        {todoList.map((task) => (
            <div className={style(task.isComplete)} key={task.id}>
                <p>{task.item}</p>
                <input type="checkbox" checked={task.isComplete} onChange={() => handleComplete(task)} />
                <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Display