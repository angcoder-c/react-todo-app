import "./styles/form.css"
const Form = ({ setTasks, setNewTask, newTask, tasks }) => {
    return (
        <form 
        className="form-container"
        action={event=>{
            if (newTask !== '') setTasks([...tasks, newTask])
            localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
            setNewTask('')
        }}>
            <label htmlFor="task"></label>
            <input 
            type='text' 
            className="form-input" 
            name="task" id="task" 
            placeholder="Enter a new task"
            onChange={(event)=>{
              setNewTask(event.target.value)
            }}/>
            <input type="submit" value="" id="submit"/>
        </form>
    );
}

export default Form;