import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";

import './styles/styles.css'

interface TaskProps{
	id: number,
	name: string,
}

function App() {

	const [task, setTask] = useState("")

	const [todoList, setTodoList] = useState<TaskProps[]>([])

	function handleAddTask(){
		const idRandom = (num: number) => Math.floor(Math.random() * num)

		const newTask = { id: idRandom(9419219412942194), name: task }
		
		setTodoList([...todoList, newTask])
	}

	return (
		<div className="App">

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					name="task"
					className="input"
					value={task}
					onChange={(event) => setTask(event.target.value)}
				/>

				<button type="submit" onClick={handleAddTask} className="btn-header">Adicionar Task</button>
			</header>
			
			<div className="line"></div>
			
			{todoList.map(task => (
				<TodoTask 
					task={task} 
				/>
			))}

		</div>
	);
}

export default App;
