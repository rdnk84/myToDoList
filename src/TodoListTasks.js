import React from 'react';
import TodoListTask from "./ToDoListTask";



class TodoListTasks extends React.Component {

    render = () => {
        // let myFn = t => {
        //     return (
        //         <TodoListTask
        //             task={t}
        //             // title={t.title}
        //             // isDone={t.isDone}
        //             // priority={t.priority}
        //             changeStatus={this.props.changeStatus}/>
        //     )
        // };
        let tasksElements = this.props.tasks.map(task => {
            return <TodoListTask task={task} changeStatus={this.props.changeStatus}/>
            });
        // let tasksElements = [
        //     <TodoListTask title={tasks.tasks[0].title} isDone={tasks.tasks[0].isDone}
        //                   priority={tasks.tasks[0].priority}/>,
        //     <TodoListTask title={tasks.tasks[1].title} isDone={tasks.tasks[1].isDone}
        //                   priority={tasks.tasks[1].priority}/>,
        //     <TodoListTask title={tasks.tasks[2].title} isDone={tasks.tasks[2].isDone}
        //                   priority={tasks.tasks[2].priority}/>,
        //     <TodoListTask title={tasks.tasks[3].title} isDone={tasks.tasks[3].isDone}
        //                   priority={tasks.tasks[3].priority}/>,
        //     <TodoListTask title={tasks.tasks[4].title} isDone={tasks.tasks[4].isDone}
        //                   priority={tasks.tasks[4].priority}/>,
        //     <TodoListTask title={tasks.tasks[5].title} isDone={tasks.tasks[5].isDone}
        //                   priority={tasks.tasks[5].priority}/>
        // ];

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    };
};

export default TodoListTasks;

