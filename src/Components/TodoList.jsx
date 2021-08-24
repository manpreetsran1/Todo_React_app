import React from 'react'

export const TodoList = (props) => {
    



    return (

        <div>
            <h4>{props.todos.title}</h4>
            <p>{props.todos.desc}</p>
            <button className="btn btn-danger" onClick={() => {props.onDelete(props.todos)}}>Delete</button>
        </div>
    )
}
