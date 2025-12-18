
interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean
}

const TodoData = (props: IProps) => {
    const {todos} = props
    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{padding: 10}}>{item.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;

