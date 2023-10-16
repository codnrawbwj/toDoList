const { useState, useEffect, useRef } = React;

let nextId = 0;

const preventFirstRun = (func, dep) => {
    const firstRun = useRef(false);

    useEffect(() => {
        if (firstRun.current) func();
        else firstRun.current = true;
    }, dep)
}

function App() {

    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    function addItem() {
        setTodos([...todos,
            { id: nextId++, task: newItem }
        ]);
        console.log(todos)
    }

    function deleteItem(id) {
        setTodos(
            todos.filter(item => item.id !== id)
        );
        setIsDeleted(isDeleted => !isDeleted);
    }

    preventFirstRun(() => {
        alert("Deletion completed!")
    }, [isDeleted])

    return(
        <div className="App">
            <div>
                <h1>Hello Timmy!</h1>
                <h2 className="sub-greeting">What's up with you today?</h2>
            </div>
            <div className="input-box">
                <input 
                    type="text" 
                    name="to-dos" 
                    id="todo_input" 
                    onChange = {e => setNewItem(e.target.value)}
                />
                <button 
                    className="btn btn-success"
                    onClick = {() => addItem()} 
                    >Add
                </button>
            </div>
            <ul>
                {todos.map((todo => {
                    return (
                        <li key={todo.id}>
                            <button onClick={() => deleteItem(todo.id)}>x</button>
                            {todo.task}
                        </li>
                    )
                }))}
            </ul>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
)