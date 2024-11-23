import Task from "./task";
import './styles/pool.css'

const Pool = ({ tasks, setTasks }) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return (
        <div className='todo-pool'>
            {
                tasks.map((t, index) => (
                    <Task
                    key={index+t}
                    task={t}
                    index={index}
                    tasks={tasks}
                    setTasks={setTasks}
                    />
                ))
            }
        </div>
    );
}

export default Pool;