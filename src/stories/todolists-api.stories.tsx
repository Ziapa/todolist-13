import React, {useEffect, useState} from 'react'
import {todoListAPI} from "../api/todolist-api";

export default {
    title: 'ApiTodoLists'
}

export const GetTodolists = () => {

    const [state, setState] = useState<any>(null)
    useEffect(() => {
       todoListAPI.getTodoLists()
        .then((res) => {
            setState(res)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      todoListAPI.createTodoList("newTestTD")
          .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.deleteTodoList("6f984a8a-f1fe-47ea-acae-f9a3413fb461")
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {


    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.updateTodoList("3bbb79bd-f708-400f-bc55-7b0c76b13033", "testName")
            .then((res)=> {
                setState(res)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

