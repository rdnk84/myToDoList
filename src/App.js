import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    {/*    <div className="todoList-header">*/}
                    {/*        <h3 className="todoList-header__title">What to Learn</h3>*/}
                    {/*        <div className="todoList-newTaskForm">*/}
                    {/*            <input type="text" placeholder="New task name"/>*/}
                    {/*            <button>Add</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    <TodoListTasks />
                    {/*<div className="todoList-tasks">*/}
                    {/*    <div className="todoList-task">*/}
                    {/*        <input type="checkbox" checked={true}/>*/}
                    {/*        <span>CSS</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="todoList-task">*/}
                    {/*        <input type="checkbox" checked={false}/>*/}
                    {/*        <span>JS</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="todoList-task">*/}
                    {/*        <input type="checkbox" checked={false}/>*/}
                    {/*        <span>ReactJS</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="todoList-task">*/}
                    {/*        <input type="checkbox" checked={true}/>*/}
                    {/*        <span>Patterns</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <TodoListFooter />
                    {/*<div className="todoList-footer">*/}
                        {/*<button>All</button>*/}
                        {/*<button>Completed</button>*/}
                        {/*<button>Active</button>*/}
                    </div>
                </div>

        );
    }
}

export default App;

