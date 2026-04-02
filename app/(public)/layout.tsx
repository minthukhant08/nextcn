import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type PublicLayoutProp = {
    children : ReactNode
}

export default async function PrivateLayout( { children } : PublicLayoutProp ){
    const session = await getServerSession()
        if (session?.user){
            redirect("/accounts")
        }
    return <>{children}</>
}