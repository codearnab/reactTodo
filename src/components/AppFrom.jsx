/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./formcomponenet.css";
import TagButton from './sub-components/TagButton'

const AppFrom = () => {
    // const [task, setTask] =useState("");
    // const [status, setStatus] =useState("To Do");

    // const handelInputChange = (e) => {
    //     setTask(e.target.value);
    // }

    // const handelStatusChange = (e) => {
    //     setStatus(e.target.value);
    // }

    const [taskData, setTaskData] = useState({
        task: '',
        status: 'To Do'
    })

    const taskDataChange = (e) => {
        // console.log(e.target);

        const {name , value}  = e.target;
        // const name = e.target.name;
        // const value = e.target.value;

        setTaskData((prev) => {
            return{...prev, [name]: value}
        })
        // console.log(name , value);
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(taskData);
    }
    // console.log(taskData);
    return(
        <header className='app_header'>
            
            <form className="app_form_wrapp" onSubmit={onSubmitForm}>
                <div className="app_header_wrapper">
                    <input type="text" name="task" id="task" placeholder="Write you task here" 
                    onChange={taskDataChange}/>
                </div>
                <div className="app_header_wrapper">
                    <div className="button_tag">
                        <TagButton title="Html"/>
                        <TagButton title="CSS"/>
                        <TagButton title="JS"/>
                        <TagButton title="PhotoShop"/>
                    </div>
                    <div className="submit_btn_wrapper">
                        <select name="status" id="newtask" className="select_todo" onChange={taskDataChange}>
                            <option value="To Do">To Do</option>
                            <option value="Working">Working</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button className="anchor_class">Add Task</button>
                    </div>
                </div>
            </form>
            
        </header>
    )
}

export default AppFrom