import { ReactNode } from "react"

type PublicLayoutProp = {
    children : ReactNode
}

export default function PrivateLayout( { children } : PublicLayoutProp ){
    return <>{children}</>
}