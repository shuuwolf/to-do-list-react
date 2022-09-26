import { Tasks } from '../../Interfaces';
import './styles.css'

interface TaskProps{
    task: Tasks,
    handleDeleteTask(DeleteTaskById: number): void
}

function TodoTask( { task, handleDeleteTask } : TaskProps) {
	
	return (
		<div className="card">
			<div>
                <p>{task.name}</p>
            </div>

            <div className="line2" >
            <span className="btn-card" onClick={() => handleDeleteTask(task.id)}>X</span>
            </div>
		</div>
	);
}

export default TodoTask;
