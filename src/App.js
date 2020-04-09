import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import TodoListTask from "./ToDoListTask";

class App extends React.Component {
    tasksItems = [
        {title: "CSS", isDone: true, priority: "low"},
        {title: "JS", isDone: false, priority: "high"},
        {title: "Pattern", isDone: false, priority: "medium"},
        {title: "ReactJS", isDone: true, priority: "low"},
        {title: "CSS", isDone: false, priority: "high"}
    ];

    filterValue = "All";
    render = () => {

        return (
            <div className="App">

                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks tasks={this.tasksItems}/>
                    <TodoListFooter filerValue={this.filterValue}/>

                </div>
            </div>

        );
    }
}

export default App;

