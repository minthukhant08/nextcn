'use client'

import Link from "next/link"
import { useCountStore } from "../counter/page"

export default function Test () {
    const { count } = useCountStore()
    return <>test {count } <Link href={"/counter"}>counter</Link></>
}