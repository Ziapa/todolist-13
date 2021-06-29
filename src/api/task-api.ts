import axios from "axios";
import {TaskType} from "../Todolist";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    headers: {
        "API-KEY": "1bdd3861-bd56-449e-97ed-eaae9759b5f0"
    }
})

type TaskResponseType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: null | number
    deadline: null | number
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type TasksType = {
    error: null | string
    items: Array<TaskResponseType>
    totalCount: number
}

type ResponseType<T = {}> = {
    data: T
    messages: [string]
    resultCode: number
}

type GetResponseType = {
    items: Array<TaskType>
    totalCount: number
}




export const tasksAPI = {
    updateTask(taskID: string, title: string) {
        return instance.put<ResponseType<{ item: TaskResponseType}>>(`todo-lists/3bbb79bd-f708-400f-bc55-7b0c76b13033/tasks/${taskID}`,
            {title}
        )
    },
    deleteTask(taskID: string) {
        return instance.delete<ResponseType>(`todo-lists/3bbb79bd-f708-400f-bc55-7b0c76b13033/tasks/${taskID}`)
    },
    getTasks() {
        return instance.get<GetResponseType>(`todo-lists/3bbb79bd-f708-400f-bc55-7b0c76b13033/tasks`)
    },
    createTask(title: string) {
        return instance.post<ResponseType<{item: TaskResponseType}>>(`todo-lists/3bbb79bd-f708-400f-bc55-7b0c76b13033/tasks`,
            {title: title})
    }

}