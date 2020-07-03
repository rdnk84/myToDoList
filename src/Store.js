import {createStore} from "redux";

const initialState = {
    todoLists: [
        {
            id: 1, title: "JS", tasks: [
                {id: 0, title: 'elements', isDone: true, priority: 'low'},
                {id: 1, title: 'arrays', isDone: false, priority: 'medium'},
                {id: 2, title: 'OOP', isDone: true, priority: 'high'}],
            priority: 'high'
        },
        {
            id: 2, title: "GraphQL", tasks: [
                {id: 0, title: 'post', isDone: true, priority: 'low'},
                {id: 1, title: 'get', isDone: true, priority: 'medium'},
                {id: 2, title: 'delete', isDone: false, priority: 'high'}],
            priority: 'low'
        },
        {
            id: 3, title: "Redux", tasks: [
                {id: 0, title: 'subscribe', isDone: false, priority: 'low'},
                {id: 1, title: 'reduce', isDone: true, priority: 'medium'},
                {id: 2, title: 'dispatch', isDone: true, priority: 'high'}],
            priority: 'medium'
        },
        {
            id: 4, title: "TypeScript", tasks: [
                {id: 0, title: 'strings', priority: 'low'},
                {id: 1, title: 'numbers', priority: 'medium'},
                {id: 2, title: 'boolean', priority: 'high'}],
            priority: 'medium'
        }
    ],
    newToDoListId: 5
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TODOLIST':
            return {...state, todoLists: [...state.todoLists, action.newToDoList]}
        case 'ADD_TASK':
            return {
                ...state, todoLists: state.todoLists.map(todo => {
                    if (todo.id !== action.toDoListId) {
                        return todo
                    } else {
                        return {...todo, tasks: [...todo.tasks, action.newTask]}
                    }
                })
            }

        case 'CHANGE_TASK':
            debugger
            return {
                ...state, todoLists: state.todoLists.map(todo => {
                    if (todo.id !== action.toDoListId) {
                        return todo
                    } else {
                        return {
                            ...todo, tasks: todo.tasks.map(task => {

                                if (task.id !== action.taskId) {
                                    return task
                                } else {
                                    return {...task, ...action.obj}
                                }
                            })
                        }
                    }
                })
            }
        // case 'DELETE_TASK':
        //     return {
        //         ...state,
        //         todoLists: state.todoLists.map(todo => {
        //             if (todo.id !== action.toDoListId) {
        //                 return todo
        //             } else {
        //                 return {
        //                     ...todo, tasks: todo.tasks.filter(task => {
        //                         switch (task.id) {
        //                             case task.id === action.taskId:
        //                                 return false
        //                             default:
        //                                 return task
        //                         }
        //                     })
        //                 }
        //             }
        //         })
        //     }

        case 'DELETE_TASK':
            return {
                ...state,
                todoLists: state.todoLists.map(todo => {
                    if (todo.id !== action.toDoListId) {
                        return todo
                    } else {
                        return {
                            ...todo, tasks: todo.tasks.filter(task => {
                                return task.id !== action.taskId
                            })
                        }
                    }
                })
            }


        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;

window.store = store

