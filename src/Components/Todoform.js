import React, { useState } from 'react';

export default function Todoform() {
    const [todo, setTodo] = useState('');
    const [tododate, setTodoDate] = useState('');

const onsubmitHandler = (e) =>
{
    e.preventDefault();
    console.log(todo + " " + tododate)
}

const todoHandler = (e) =>{
    setTodo(e.target.value);

}
const dateHandler = (e) =>{
    setTodoDate(e.target.value);
}
    return (
        <form onSubmit={onsubmitHandler}>
            <input type="text" onChange={todoHandler} placeholder='Add todo' value={todo}></input>
            <input type="date" onChange={dateHandler}></input>
            <button className="todo-button">Submit log</button>
        </form>
    )
}
