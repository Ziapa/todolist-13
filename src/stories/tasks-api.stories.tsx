import React, {useEffect, useState} from 'react'
import {tasksAPI} from "../api/task-api";

export default {
    title: 'ApiTasks'
}



export const GetTasks = () => {

    const [state, setState] = useState<any>(null)
    useEffect(() => {
tasksAPI.getTasks()
    .then((res) => {
        debugger
        setState(res)
    })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
tasksAPI.createTask("tree Task")
    .then((res) => {
        debugger
        setState(res)
    })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
tasksAPI.deleteTask("10642ceb-5222-47c7-9e24-dda06cbcf015")
    .then((res) => {
        debugger
        setState(res)
    })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {


    const [state, setState] = useState<any>(null)
    useEffect(() => {
tasksAPI.updateTask("b697f972-fc2b-46ed-9dc5-5e1abca53042", "reName")
    .then((res) => {
        debugger
        setState(res)
    })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

