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
            <div className="greeting">
                <h1>Hello Timmy!</h1>
                <h2>What is up with you today?</h2>
            </div>
            <input 
                type="text" 
                name="to-dos" 
                id="todo_input" 
                placeholder="Enter your to-do!" 
                onChange = {e => setNewItem(e.target.value)}
            />
            <button 
                className="input_button"
                onClick = {() => addItem()} 
                >Add
            </button>
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