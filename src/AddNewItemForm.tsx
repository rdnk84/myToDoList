import React, {ChangeEvent, KeyboardEvent} from 'react';
import './App.css';

type OwnPropsType = {
    addItem: (newText: string) => void
}

type StateType = {
    error: boolean
    title: string
}

class AddNewItemForm extends React.Component <OwnPropsType, StateType>{
    state: StateType = {
        error: false,
        title: ""
    }

    onAddItemClick = () => {

        let newText = this.state.title;
        this.setState({title: ""});

        if (newText === "") {
            this.setState({error: true});
        } else {
            this.setState({error: false});
            // передаём новый текст наружу
            this.props.addItem(newText);
        }
    }

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        });
    }

    onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            this.onAddItemClick();
        }
    }


    render = () => {
        let classNameForInput = this.state.error ? "error" : "";

        return (
            <div className="todoList-newTaskForm">
                <input className={classNameForInput} type="text" placeholder="New item name"
                       onChange={this.onTitleChanged}
                       onKeyPress={this.onKeyPress}
                       value={this.state.title}
                />
                <button onClick={this.onAddItemClick}>Add</button>
            </div>

        );
    }
}

export default AddNewItemForm;

