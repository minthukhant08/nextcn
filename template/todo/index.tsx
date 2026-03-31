'use client'

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { Todo, useTodoStore } from "./store"
import { Button } from "@/components/ui/button"
import { v4 as uuidv4 } from 'uuid';
import { Input } from "@/components/ui/input";

export default function TodoTemplate() {
    const [ task , setTask ] = useState<string>("")
    const [ selectedTodo, setSelectedTodo] = useState<Todo>()
    const { todos, add, remove, update } = useTodoStore()

    const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter"){
            e.preventDefault()
            add({
            id: uuidv4(),
            isDone: false,
            name: task
        })
        setTask("")
        }
        
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleUpdateChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        selectedTodo && setSelectedTodo({...selectedTodo, name: e.target.value})
    }

    const handleSelect = (todo: Todo) => {
        setSelectedTodo(todo)
    }

    const handleUpdate = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key =="Enter"){
            selectedTodo && update(selectedTodo)
        }
    }
    return <div>
        <Input placeholder="enter here" value={task} onChange={handleChange} onKeyDown={handleAdd}/>
        <span>Update</span>
        <Input placeholder="enter here" value={selectedTodo?.name}  onChange={handleUpdateChange} onKeyDown={handleUpdate}/>
        {todos && todos.map((t) => <div key={t.id} className="flex">
            <div>{t.name}</div>
            <Button onClick={() => { remove(t.id)}} >Delete</Button>
            <Button onClick={() => handleSelect(t)}>Select</Button>
        </div>
        )}
    </div>
}