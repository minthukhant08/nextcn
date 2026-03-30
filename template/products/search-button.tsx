'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"


export default  function SearchButton() {
    const param = useSearchParams()   
    const [ search , setSearch ] = useState("")
    const router = useRouter();
    const handleSearch = () => {
        router.push('/products?search=' + search)
    }

    useEffect(() => {
        console.log(param.get("search"), 'param....')
        setSearch(param.get("search") || "")
    }, [])

    return <div className="flex">
        <Input value={search} id="search-key" onChange={(e) => setSearch(e.target.value)} placeholder="Search...." />   
        <Button onClick={handleSearch}>Search</Button>
    </div>
}