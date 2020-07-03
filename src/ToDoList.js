import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {
    addTaskTC,
    deleteTaskTC,
    deleteTodolistTC,
    setTasksTC,
    updateTaskTC, updateTitleTodolistTC,

} from "./reducers";
import {api} from "./api";
import {instance} from "./api"

class TodoList extends React.Component {
    state = {
        filterValue: "All"
    };

    componentDidMount() {
        this.restoreState(this.props.id);
    }

    restoreState = (todolistId) => {
        this.props.setTasksTC(todolistId)
        // api.getTasks(this.props.id)
        //     .then(res => {
        //         if (!res.data.error) {
        //             this.props.setTasks(this.props.id, res.data.items)
        //         }
        //     });
    }

    addTask = (newTask) => {
        this.props.addTaskTC(newTask, this.props.id);
        // api.createTask(newTask, this.props.id)
        //     //здесь в параметры мы должны передать то, что требует данный метод api согласно документации
        //     //в request обязательный параметр body (`${todolistId}/tasks`,-в урле
        //     // и вот этот объект {title: newTask})
        //     .then(data => {
        //
        //            if (data.resultCode === 0) {
        //             let newTask = data.data.item;
        //
        //             this.props.addTask(newTask, this.props.id);
        //         }
        //     })
        // let newTask = {
        //     id: (new Date().getTime()),
        //     title: newText,
        //     isDone: false,
        //     priority: "low"
        // };
        // this.props.addTask(newTask, this.props.id);
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeTitle = (newTask, title) => {
        this.changeTask({...newTask, title: title});
//те здесь мы раскукоживаем объект newTask и вкладываем обновленный title
// (обновился в компоненте TodoListTask в локальном стейте). а ранбше это был obj,кот.менял какой-то из параметров
//в нашей таске (title или isDone или что-то еще, в общем-объект)
    };
    changeTask = (newTask) => {
        this.props.updateTaskTC(newTask, this.props.id)
//а сюда из changeTitle уже  приходит полностью объект (newTask), у которого уже обновленный title
//         api.changeTask(newTask, this.props.id)
//             .then(res => {
//                 if (res.data.resultCode === 0) {
//                     this.props.updateTask(res.data.data.item);
//                     //res.data.data.item - это ответ,который пришел к нам с сервера согласно документации api
//                     //а дальше-мы этот ответ кладем в параметр соответствующей ф-ции в mapDispatchToProps
//                 }
//             });
    };

    changeStatus = (newTask, status) => {
//status придет с ответом с сервера (так там записано св-во), вместо нашего isDone,который был в сво-вах task
        this.changeTask({...newTask, status: status === true ? 2 : 0});
    };

    deleteTodolist = () => {
        this.props.deleteTodolistTC(this.props.id)
        // api.deleteTodolist(this.props.id)
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //             this.props.deleteTodolist(this.props.id);
        //         }
        //     });
    };

    deleteTask = (taskId) => {
        this.props.deleteTaskTC(taskId, this.props.id)
    };

    changeTitleTodolist = (title) => {
        this.props.updateTitleTodolistTC(title, this.props.id)
        // api.updateTitleTodolist(title, this.props.id)
        //     //а в api мы передаем еще и id тудулиста потому что того требует документация
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //             this.props.updateTodolist({id: this.props.id, title: title})
        //         }
        //     })
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // addTask(newText, todolistId) {
//         //     const action = addTaskAC(newText, todolistId);
//         //     dispatch(action);
//         // },
//         // setTasks: (todolistId, tasks) => {
//         //     const action = setTasksAC(todolistId, tasks)
//         //     dispatch(action)
//         // },
// //         updateTask(task) {
// //             const action = updateTaskAC(task);
// // //Task мы назвали объект, который пришел с сервера ответом {res.data.data.item}-лежит в колбэке changeTask
// //             dispatch(action);
// //         },
//         // // deleteTodolist: (todolistId) => {
//         // //     const action = deleteTodolistAC(todolistId);
//         // //     dispatch(action);
//         // // },
//         // // deleteTask: (todolistId, taskId) => {
//         // //     const action = deleteTaskAC(todolistId, taskId);
//         // //     dispatch(action);
//         //     //       dispatch(deleteTaskAC(taskId, todolistId))
//         // },
//         // updateTodolist: (todolist) => {
//         //     dispatch(updateTitleTodolistAC(todolist))
//         // },
//     }
// }

const ConnectedTodolist = connect(null, {
    setTasksTC,
    addTaskTC,
    updateTitleTodolistTC,
    deleteTodolistTC,
    deleteTaskTC,
    updateTaskTC
})(TodoList);

export default ConnectedTodolist;

