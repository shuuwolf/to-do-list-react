import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.css'

interface TaskProps{
	id: number,
	name: string,
}

function App() {

	const [task, setTask] = useState("")

	const [todoList, setTodoList] = useState<TaskProps[]>([])

	function handleAddTask(){
		if(!task){
			toast.error("Digite alguma task")
		}
		else{
			const idRandom = (num: number) => Math.floor(Math.random() * num)

			const newTask = { id: idRandom(9419219412942194), name: task }
			
			setTodoList([...todoList, newTask])
			toast.success("Task cadastrada com sucesso!")
			setTask("")
		}
	}

	function handleDeleteTask(DeleteTaskById: number){
		setTodoList(todoList.filter((task) => task.id !== DeleteTaskById))

		toast.warning("Task deletada com sucesso!")
	}

	return (
		<div className="App">

			<ToastContainer 
				autoClose={3000}
				pauseOnHover={false}
			/>

			<header>

				<h2>TODO List</h2>

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
			
			{todoList.map((task, key) => (
				<TodoTask 
					task={task}
					key={key} 
					handleDeleteTask={handleDeleteTask}
				/>
			))}

		</div>
	);
}

export default App;
