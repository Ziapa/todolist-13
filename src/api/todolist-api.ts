import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    headers: {
        "API-KEY": "1bdd3861-bd56-449e-97ed-eaae9759b5f0"
    }
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


type ResponseType<T = {}> = {
    resultCode: 0 | 1 | 10
    messages: Array<string>
    data: T
}


export const todoListAPI = {
    updateTodoList(todoListID: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoListID}`,
            {title},
        )
    },
    deleteTodoList(todoListID: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoListID}`)
    },
    getTodoLists() {
        return instance.get<Array<TodolistType>>(`todo-lists`)
    },
    createTodoList(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`,
            {title: title})
    }

}