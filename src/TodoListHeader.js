import React from 'react';


class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.newTasksTitleRef = React.createRef();
    };

    state = {
        error: false,
        title: ""
    };
    onAddTaskClick = () => {
        // let newTitle = this.newTasksTitleRef.current.value = "";
//потому что теперь мы текст берем из title, кторый в state. А туда он залетает благодаря функции
//onTitleChanged, которая в свою очредь берет ее из value
        let newTitle = this.state.title.trim();
 //и вот здесь мы ставим условие, что если у нас в newTitle придет пустая строка,то мы
 //не добавляем ничего в tasks(запрещаем добавление новой таски по клику мыши)
        if (newTitle.trim() === "") {
            this.setState({error: true})
        } else {
            // this.newTasksTitleRef.current.value = "";
            this.props.addTask(newTitle);
            this.setState({
                error: false,
                title: ""
            })
        }
       };
    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    };
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick();
        }
    };

    render = () => {
        let errorClass = this.state.error ? "error" : "";
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">{this.props.title}</h3>
                <div className="todoList-newTaskForm">
                    <input
                        className={errorClass}
                        type="text"
                        placeholder="New task name"
                        // ref={this.newTasksTitleRef}
                        onChange={this.onTitleChanged}
                        onKeyPress={this.onKeyPress}
                        value={this.state.title}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>

        );
    }
}

export default TodoListHeader;
