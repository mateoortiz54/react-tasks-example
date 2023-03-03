import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'
import {useContext} from 'react'


function TaskList() {

    const {tasks} = useContext(TaskContext)
    if (tasks.length === 0){
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas</h1>
    } 


    return (
        <div className='grid grid-cols-4 gap-2 rounded-md'>
            {console.log(tasks)}
            {tasks.map((e)=>(
                <TaskCard key={e.id} task={e}/>
            ))}
        </div>
    )
}

export default TaskList