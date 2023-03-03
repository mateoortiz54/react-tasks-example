import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

//Nombre del contexto
export const TaskContext= createContext()


export function TaskContextProvider(props) {
    // variable globales
    let x = 20
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        setTasks(data)
        console.log('Se cargó la pagina')
        console.log(tasks)
    },[])

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description,
        } ])
    }
    
    function deleteTask(id) {
    setTasks(tasks.filter(n => id !== n.id ))
    }


    // Los enviamos con el atributo value
    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask,
        }}>
            {props.children}
        </TaskContext.Provider>    
    )
}

