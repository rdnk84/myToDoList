import React from 'react';
import './App.css';
import TodoList from "./ToDoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import reducer, {addTodoListTC, setTodolistsTC} from "./reducer";
import {AppStateType} from "./store";
import {TodoType} from "./types/entities";

type MapStatePropsType = {
    todolists: Array<TodoType>
}

type MapDispatchPropsType = {
    setTodolistsTC: () => void
    addTodoListTC: (title: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.setTodolistsTC()
    }

    addTodoList = (title:string) => {
        this.props.addTodoListTC(title)
    }

    render = () => {
        const todolists = this.props.todolists.map(tl => <TodoList
            id={tl.id} title={tl.title} tasks={tl.tasks}/>)

        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {todolists: state.reducer.todolists}
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getTodoLists: (todolists) => {
//             const thunk = setTodolistsTC(todolists)
//             dispatch(thunk)
//         },
// //а раньше было так
// //         setTodolists: (todolists) => {
// //             const action = setTodolistsAC(todolists)
// //             dispatch(action)
// //         }
//         addTodolistTC: (newTodolist) => {
//             const action = addTodolistAC(newTodolist)
//             dispatch(action)
// //или можно в одну строку dispatch(addTodolistAC(newTodolist))
//         },
//
//     }
//
// }


const ConnectedApp = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setTodolistsTC, addTodoListTC})(App);
//вместо mapDispatchToProps мы будем ставить в {} название thunkCreator, который мы импортируем из файла reducers
export default ConnectedApp;

