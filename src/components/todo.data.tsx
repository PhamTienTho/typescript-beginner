
interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    deleteTodo: (id: number) => void
    owner?: string;
    age?: number;
    isDeveloper?: boolean
}

const TodoData = (props: IProps) => {
    const {todos, deleteTodo} = props
    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{padding: 10}}>{item.id} - {item.title}
                            &nbsp;&nbsp;&nbsp;<button onClick={() => deleteTodo(item.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;

