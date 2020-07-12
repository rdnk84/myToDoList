import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {
    addTaskTC, deleteTaskTC,
    deleteTodolistTC, setTasksTC,
    updateTaskTC, updateTitleTodolistTC} from "./reducer";
import {TaskType} from "./types/entities";

type MapDispatchPropsType = {
    addTaskTC: (newTaskTitle: string, todolistId: string) => void
    deleteTaskTC: (taskId: string, todolistId: string) => void
    deleteTodolistTC: (todolistId: string) => void
    setTasksTC: (todolistId: string) => void
    updateTaskTC: (taskId: string, task: TaskType, todolistId: string) => void
    updateTitleTodolistTC: (title: string, todolistId: string) => void
}

type OwnPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
}

type StateType = {
    filterValue: string
}
type PropsType = OwnPropsType & MapDispatchPropsType;

class TodoList extends React.Component <PropsType, StateType> {

    state: StateType = {
        filterValue: "All"
    };

    componentDidMount() {
        this.restoreState(this.props.id);
    }

    restoreState = (todolistId: string) => {
        this.props.setTasksTC(todolistId)
    }

    addTask = (newTaskTitle: string) => {
        this.props.addTaskTC(newTaskTitle, this.props.id);
    };

    changeFilter = (newFilterValue: string) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeTitle = (newTask: TaskType, title: string) => {
        this.changeTask({...newTask, title: title});
    };
    changeTask = (newTask: TaskType) => {
        this.props.updateTaskTC(newTask.id, newTask, this.props.id)
    };

    changeStatus = (newTask: TaskType, status: number) => {
        this.changeTask({...newTask, status: status ? 2 : 0});
    };

    deleteTodolist = () => {
        this.props.deleteTodolistTC(this.props.id)

    };

    deleteTask = (taskId: string) => {
        this.props.deleteTaskTC(taskId, this.props.id)
    };

    changeTitleTodolist = (title: string) => {
        this.props.updateTitleTodolistTC(title, this.props.id)
    }

    render = () => {
        let {tasks = []} = this.props
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle changeTitleTodolist={this.changeTitleTodolist}
                                   title={this.props.title}
                                   onDelete={this.deleteTodolist}/>
                    <AddNewItemForm addItem={this.addTask}/>
                </div>

                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               deleteTask={this.deleteTask}
                               tasks={tasks.filter(t => {
                                   // из-за того,что мы объявили отдельную let {tasks = []} = this.props, поэтому здесь не this.props.tasks
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return t.status === 0;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.status === 2;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

const ConnectedTodolist = connect<{}, MapDispatchPropsType>(null, {
    setTasksTC,
    addTaskTC,
    updateTitleTodolistTC,
    deleteTodolistTC,
    deleteTaskTC,
    updateTaskTC
})(TodoList);

export default ConnectedTodolist;

