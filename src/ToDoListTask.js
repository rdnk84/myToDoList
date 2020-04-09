import React from 'react';


class TodoListTask  extends React.Component {
    //constructor(attributes) {
    //this.props
    //this.props.title = 'CSS'
    //this.props.isDone = true
//}
    render = () => {
        return (

            <div className="todoList-task">
                <input type="checkbox" checked={this.props.isDone}/>
                <span>{this.props.title}, priority: {this.props.priority}</span>
            </div>

        );
    }
}

export default TodoListTask;

