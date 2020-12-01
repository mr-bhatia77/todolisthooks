import React from 'react'
import {Link} from 'react-router-dom';
export default function TodoList() {
    return (
        <div>
            <ul>
                <li><Link to = "/addlog">ADD Log..</Link></li>
                <li style={{ float: "right" }}>
                    <Link to="/login">Login/Register</Link></li>
            </ul>
        </div>
    )
}
