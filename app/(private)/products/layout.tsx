import { ReactNode } from "react"

type PrivateLayoutProp = {
    children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProp) {
    return <div>
            {children}
    </div>
}