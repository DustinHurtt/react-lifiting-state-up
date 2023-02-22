
const Task = (props) => {
 // const [taskCompleted, setTaskCompleted] = useState(false);   //      <== REMOVE
 // const toggleTask = () => setTaskCompleted(!taskCompleted);   //      <== REMOVE
 
    return (
        <div className="task-card">
            <div className="task-card-half">
                <h1>{props.task.name}</h1>
                {props.task.isDone                                                  
                ? <span>DONE </span>
                : <span>PENDING ⌛</span>
                }
        
                <h2> Task Description </h2>
                <p>{props.task.description}</p>
        
                <button className="add" onClick={() => {props.toggleTaskDone(props.task._id)}}>                 
                {props.task.isDone                                                  
                    ? <span>UNDO </span> 
                    : <span>✔️</span>
                }
                </button>
                <button onClick={props.countFunction}>Count</button>
                <h4>{props.count}</h4>
            </div>
        </div>
    );
  }
   
export default Task;