import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import Todo from './Components/Todo';

import AddTodo from './Components/AddTodo';
import About from './Components/About';
import InterviewTask from './Components/interviewTask';

import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  let intiTodo;

  if (localStorage.getItem("todos")===null) {
    intiTodo = [];
  }

  else{
    intiTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) =>{
    console.log('click', todos);
    setTodos(todos.filter((e)=> {
      return e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addtodo = (title, desc) =>{
      let sno;
      if(todos.length==0){
        sno = 0;
      }
      else{
        sno = todos[todos.length-1].sno + 1;
      }
      
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);

      console.log(myTodo);

      
  }
  const [todos, setTodos] = useState(intiTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

  return (
    <>
      <Router>
        <Header Searchbar = {false} />
        <Switch>
          <Route exact path="/" render={()=>
            {
              return(
                <>
                  <AddTodo addtodo={addtodo}/>
                  <Todo todos={todos} onDelete={onDelete}/>
                </>
              );
            }
          }>
          </Route>
          <Route exact path="/about">
              <About />
          </Route>
          
          
        </Switch>
      
      
      
      <Footer />

      </Router>
    </>
  );
}

export default App;
