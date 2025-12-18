import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";


const TodoList = () => {

    interface ITodo {
        id: number;
        title: string;
        isComplete: boolean;
    }

    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: "Subscribe Youtube HoiDanIT",
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: "Learn English",
    //         isComplete: true
    //     },
    // ]
    const addNewTodo = (todo: ITodo) => {
        setListTodo([...listTodo, todo]);
    }
    const deleteTodo = (id: number) => {
        setListTodo(listTodo.filter(item => item.id !== id))
    }

    const [listTodo, setListTodo] = useState<ITodo[]>([]);

    return (
        <div style={{
            width: "600px", 
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px"
        }}>
            <div>My todo list:</div>
            <hr/>
            <TodoInput
                addNewTodo={addNewTodo}
            />
            <TodoData
                todos={listTodo}
                deleteTodo={deleteTodo}
                // owner={"tien tho"}
                // age={25}
                // isDeveloper={true}    
            />
        </div>

    )
}

export default TodoList;