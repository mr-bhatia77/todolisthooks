import React, { useState } from 'react';

export default function Todoform() {
    const [input, setInput] = useState('');
    return (
        <form className="todo-form">
            <input className="todo-input" type="text" placeholder='Add todo' value={input}></input>
            <input type="date"></input>
            <button className="todo-button"></button>
        </form>
    )
}
