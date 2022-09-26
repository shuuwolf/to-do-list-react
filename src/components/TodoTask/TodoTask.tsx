
import './styles.css'

interface TaskProps{
    task: 
}

function TodoTask( { task }) {
	
	return (
		<div className="card">
			<div>
                <p>Fazer lição</p>
            </div>

            <div className="line2" >
            <span className="btn-card">X</span>
            </div>
		</div>
	);
}

export default TodoTask;
