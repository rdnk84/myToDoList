import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    state = {
        editMode: false,
        title: this.props.task.title
    }

    onIsDoneChanged = (e) => {this.props.changeStatus(this.props.task, e.currentTarget.checked)}

    onTitleChanged = (e) => {this.setState({title: e.currentTarget.value})}
//раньше было так - мы сразу отправляли изменение в компоненту TodoList через пропсы
// (и любое впечатывание в value шло запросом на сервер) this.props.changeTitle(this.props.task, e.currentTarget.value);

    activateEditMode = () => {this.setState({editMode: true})}

    deactivateEditMode= () => {
        this.setState({editMode: false});
        this.props.changeTitle(this.props.task, this.state.title);
 //раньше мы в параметре передавали this.props.task.id - а сейчас всю таску передаем
    }
    onDeleteTask = () => {this.props.deleteTask(this.props.task.id)}
    render = () => {
        let isStatus = this.props.task.status === 2
        let containerCssClass = isStatus ? "todoList-task done" : "todoList-task";
        // let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
                <div className={containerCssClass}>
                    <input type="checkbox" checked={isStatus}
                           onChange={this.onIsDoneChanged}/>
                    { this.state.editMode
                        ? <input onBlur={this.deactivateEditMode}
                                 onChange={this.onTitleChanged}
                                 autoFocus={true}
                                 value={this.state.title} />
                        : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title}</span>
                    }, priority: {this.props.task.priority} <button onClick={this.onDeleteTask}>X</button>
                </div>
        );
    }
}

export default TodoListTask;

