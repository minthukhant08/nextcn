'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toQueryString } from "@/utils"


export default  function SearchButton() {
    const param = useSearchParams()   
    const [ q , setQ ] = useState("")
    const router = useRouter();
    
    const handleSearch = () => {
        router.push('/products' + toQueryString({ q, limit: 5}))
    }

    useEffect(() => {
        setQ(param.get("search") || "")
    }, [])

    return <div className="flex">
        <Input value={q} id="search-key" onChange={(e) => setQ(e.target.value)} placeholder="Search...." />   
        <Button onClick={handleSearch}>Search</Button>
    </div>
}