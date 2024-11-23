import './styles/task.css'
import { useState } from 'react';

const Task = ({ task, index, setTasks, tasks}) => {
    const [content, setContent] = useState(task);
    const [edditable, setEdditable] = useState(false);
    return (
        <div className={"task-container"}>
            <div className='task-content'>
                <textarea
                    onChange={e=>{
                        setContent(e.target.value)
                    }}
                    readOnly={!edditable}
                    value={content}
                    rows={1}
                />
            </div>
            <div className='delete-task-container'>
                <p
                    onClick={()=>{
                        if (edditable) {
                            tasks[index]=content
                            setTasks(tasks);
                        }
                        setEdditable(!edditable)
                    }}
                >
                    {edditable ? '✔' : '🖊'}
                </p>
            </div>
            <div className='delete-task-container'>
                <p
                    onClick={()=>setTasks(
                        tasks.filter(
                            (t, i)=>index!==i
                        )
                    )}
                >
                    ❌
                </p>
            </div>
        </div>
    );
}

export default Task;