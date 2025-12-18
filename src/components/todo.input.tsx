import { useState } from "react";

interface IProps {
    name?: string;
}

const TodoInput = (props: IProps) => {
    const [todo, setTodo] = useState<string>("");
    return(
        <div style={{display: "flex", gap: 15, marginBottom: 20}}>
            <input type="text"></input>
            <button>Add todo</button>
        </div>
    )
}

export default TodoInput;