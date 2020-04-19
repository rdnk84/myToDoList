import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import TodoListTask from "./ToDoListTask";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();

        // setTimeout( ()=> {
        //     let newTask = {
        //             title: "PHP", isDone: true, priority: "low"
        //         };
        //     let newTasks = [...this,state.tasks, newTask];
        //         this.setState({tasks: newTasks});
        // }, 2000);
    };

    state = {
        tasksItems: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "JS", isDone: false, priority: "high"},
            {title: "Pattern", isDone: false, priority: "medium"},
            {title: "ReactJS", isDone: true, priority: "low"},
            {title: "CSS", isDone: false, priority: "high"},
        ],
        filterValue: "All"
    };
    onAddTaskClick = () => {
        // let newTitle = this.newTaskTitleRef.current.value;

        // let newTask = {
        //     title: newTitle, isDone: true, priority: "low"
        // };
        let newTask = {
            title: this.newTaskTitleRef.current.value, isDone: true, priority: "low"
        };
        let newTasks = [...this.state.tasksItems, newTask];
        this.setState({tasksItems: newTasks});
        this.newTaskTitleRef.current.value = "";
    };

    render = () => {

        return (
            <div className="App">

                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    <TodoListTasks tasks={this.state.tasksItems}/>
                    <TodoListFooter filerValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

