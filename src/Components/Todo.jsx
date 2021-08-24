import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import { TodoList } from './TodoList';

export default function Todo(props) {


    const Task = ["A","B","C"];

    const Array = Task.map(task => <p>{task}</p>);


    const todolist = props.todos.map((todo) => {
        return <TodoList todos={todo} key={todo.sno} onDelete = {props.onDelete}/>
    });
    return (
        <div>
            
            <Container>
                <h3>todo list</h3>
                {/* {props.todos} */}
                {todolist.length ===0 ? "no todo found" :  todolist };
                    
                {/* <TodoList todo={props.todos[0]} /> */}
            </Container>
        </div>
    )
}
