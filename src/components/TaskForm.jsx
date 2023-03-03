import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {createTask} = useContext(TaskContext)
    


    const handleSubmit = (e) =>{
        e.preventDefault()
         
        createTask({title, description})
        setTitle("")
        setDescription("")
    }
    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2x1 font-bold text-white mb-3'>Crea tu tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' placeholder="Escribe tu tarea" 
                onChange={(e)=> {
                    console.log(e.target.value)
                    setTitle(e.target.value)
                }}
                value={title} autoFocus
                />
                <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='Escribe la descripción de la tarea' onChange={(e)=> {
                    console.log(e.target.value)
                    setDescription(e.target.value)
                }} value={description}></textarea>
                <button className='bg-purple-500 text-white px-3 py-1 hover:bg-purple-300'>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm