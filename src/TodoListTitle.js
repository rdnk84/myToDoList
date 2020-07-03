import React from 'react';
import './App.css';

class TodoListTitle extends React.Component {
    state = {
        editMode: false,
        title: this.props.title
    }


    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value})
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.changeTitleTodolist(this.state.title);
    }

    render = () => {
        return (
            <div>
                {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode}
                             onChange={this.onTitleChanged}
                             autoFocus={true}
                             value={this.state.title}/>
                    : <span className="todoList-header__title"
                        onClick={this.activateEditMode}>{this.props.title}
                </span>
                }
                <button onClick= {this.props.onDelete}>X</button>
            </div>

        );
    }
}

export default TodoListTitle;

