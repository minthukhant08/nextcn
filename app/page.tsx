'use client'
import { Button } from "@/components/ui/button"
import Login from "@/template/login/page"
import Link from "next/link"
import { signIn, signOut } from "next-auth/react"

export default function Page() {
  return <div>
    {/* <Login/>
    <Link href={'/products'}>product page</Link> */}
    <Button onClick={() => signIn()}>Login</Button>
  </div>
}
