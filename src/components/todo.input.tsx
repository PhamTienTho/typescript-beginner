import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
    const { addNewTodo } = props
    const [todo, setTodo] = useState<string>("");

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input
                value={todo}
                onChange={handleOnChange}
                type="text"></input>
            <button
                onClick={() => {
                    addNewTodo({
                        id: randomInteger(1, 100000),
                        title: todo,
                        isComplete: false
                    });
                    setTodo("");
                }}
            >Add todo</button>
        </div>
    )
}

export default TodoInput;