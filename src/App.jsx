/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import AppFrom from './components/AppFrom';
import TaskColoumn from './components/sub-components/TaskColoumn'

const App = () => {
  return (
    <div className='app'>
      <AppFrom />
      <div className="main_body">
        <TaskColoumn title="To Do"/>
        <TaskColoumn title="Working" />
        <TaskColoumn title="Completed" />
        
      </div>
    </div>
  )
}

export default App

