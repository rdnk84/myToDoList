import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

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
    addTask = (newTitle) => {
        let newTask = {
            title: newTitle,
            isDone: false,
            priority: "low"
        };
        let newTasks = [...this.state.tasksItems, newTask];
        this.setState({tasksItems: newTasks});
        // this.newTaskTitleRef.current.value = "";
    };
    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue});
    };
    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasksItems.map(t => {
   //в записи t === task t-это таск из State, а task-это task, которая пришла из
   //таски, по которой кликнули, и тогда в UI отображается ее новая отрисовка(в данном случае галочка)
            if (t === task) {
                return {...t, isDone: isDone}
            }
            return t;
        });
        this.setState({tasksItems: newTasks})
    };

    //или вот это то же самое
    //             case "Active":
//     return t.isDone === false
//     break;
// case "Completed":
//     return t.isDone === true
//     break;
// default:
//     return true;
//
    render = () => {
        let filteredTasks = this.state.tasksItems.filter(t => {
            switch (this.state.filterValue) {
                case "All":
                    return true;
                case "Completed":
                    return t.isDone;
                case "Active":
                    return !t.isDone;
                default:
                    return true;
            }
        });
        return (
            <div className="App">
                <div className="todoList">
                    {/*    <div className="todoList-header">*/}
                    {/*        <h3 className="todoList-header__title">What to Learn</h3>*/}
                    {/*        <div className="todoList-newTaskForm">*/}
                    {/*            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>*/}
                    {/*            <button onClick={this.onAddTaskClick}>Add</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks tasks={filteredTasks}
                                   changeStatus={this.changeStatus}/>
                    <TodoListFooter
                        filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}
                    />
                </div>
            </div>
        )
    };
}
    

  export default App;

