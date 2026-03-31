'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toQueryString } from "@/utils"
import { AuthContext } from "@/providers/auth-context-provider"
import { useLoginStore } from "../login/store"
import { useTodoStore } from "../todo/store"


export default  function SearchButton() {
    const param = useSearchParams()   
    const {todos} = useTodoStore()
    const [ q , setQ ] = useState("")
    const router = useRouter();
    const { email } = useLoginStore()
    
    const handleSearch = () => {
        router.push('/products' + toQueryString({ q, limit: 5}))
    }

    useEffect(() => {
        setQ(param.get("search") || "")
    }, [])

    return <div className="flex">
        {email}
        <Input value={q} id="search-key" onChange={(e) => setQ(e.target.value)} placeholder="Search...." />   
        <Button onClick={handleSearch}>Search</Button>
        <Button onClick={() => console.log(todos)}>Check Todo List</Button>
    </div>
}