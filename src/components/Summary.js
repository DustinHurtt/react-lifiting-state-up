
const Summary = ({ completed, countFunction }) => {
    return (
      <div>
        <h1>TASKS COMPLETED:</h1>
        <p className="tasks-completed">{completed}</p>
        <button onClick={countFunction}>Count</button>
      </div>
    );
  }
   
export default Summary;