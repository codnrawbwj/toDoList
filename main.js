const { useState } = React;

let nextId = 0;

function App() {

    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([]);

    function addItem() {
        setTodos([...todos,
            { id: nextId++, task: newItem }
        ]);
        console.log(todos)
    }

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
                        <li key={todo.id}>{todo.task}</li>
                    )
                }))}
            </ul>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
)