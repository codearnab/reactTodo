/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './taskcoloumn.css';
import TaskList from './TaskList';

const TaskColoumn = ({title}) => {
  return (
    <section className="task_coloumn">
            <h1>{title}</h1>
            <TaskList />
    </section>
  )
}
TaskColoumn.propTypes = {
    title: PropTypes.string.isRequired
  }
export default TaskColoumn
