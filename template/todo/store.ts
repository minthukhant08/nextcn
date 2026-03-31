import { create } from "zustand";
import { persist } from 'zustand/middleware'

export type Todo = {
    id: string,
    name: string,
    isDone: boolean
}
export type TodoStore = {
    todos : Todo[],
    add : (todo: Todo) => void,
    remove: (id: string) => void,
    update: (todo: Todo) => void
}
export const useTodoStore = create<TodoStore>()(persist((set) => ({
    todos: [],
    add: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo]})),
    remove: (id: string) => set((state) => {
        const newTodos = state.todos.filter((todo) => todo.id != id)
        return { todos: newTodos }
    }),
    update: (todo: Todo) => set((state)=> {
        const newTodos = state.todos.map((t) => {
            if (t.id == todo.id){
                return todo
            }else{
                return t
            }
        })
        return { todos: newTodos}
    })
}), { name: 'todo-store' }))


