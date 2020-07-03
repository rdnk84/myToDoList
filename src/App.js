import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import reducer, {addTodoListTC, setTodolistsTC} from "./reducers";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.setTodolistsTC()
//         api.getTodolists()
// //т.е как только получаем ответ с сервера-мы диспатчим этот колбэк в Store и в Сторе появляются массив ToDolists
//             .then(res => {
//                 this.props.setTodolists(res)
// //здесь в then приходит только res потому что в api в res сидит res.data
//             });
    }

    addTodoList = (title) => {
        this.props.addTodoListTC(title)
//         api.createTodolist(title)
//             //title в этом методе createTodolist(title) - это объект (body), кот.пришел из объекта api
//             //согласно документации
//             .then(res => {
//                 let todolist = res.data.item;
// //а раньше в then было res.data.data.item// Но сейчас,когда у нас res.data в then в файле api мы здесь один data убрали
//                 this.props.addTodolist(todolist)
//             });
//         // let newTodoList = {
//         //     id: this.nextTodoListId,
//         //     title: title,
//         //     tasks: []
//         // }
//         // this.props.addTodolist(newTodoList);
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

const mapStateToProps = (state) => {
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


const ConnectedApp = connect(mapStateToProps, {setTodolistsTC, addTodoListTC})(App);
//вместо mapDispatchToProps мы будем ставить в {} название thunkCreator, который мы импортируем из файла reducers
export default ConnectedApp;

