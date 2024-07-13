/* eslint-disable no-unused-vars */
import React from 'react';
import './tasklist.css';
import TagButton from './TagButton';

const TaskList = () => {
  return (
    <div className='tasklist_wrapper'>
        <div className="text_para">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, molestiae, consequatur exercitationem est quam, libero in nam dolorem incidunt ad quisquam numquam quidem ea labore ipsa adipisci. Repellat, animi voluptate?</p>
        </div>
        <div className="bottomline_list">
            <div className="tag_line">
                <TagButton title = "HTML"/>
                <TagButton title = "Css"/>
            </div>
            <div className="delete_wrapper">
                <button className='task_delete'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default TaskList
