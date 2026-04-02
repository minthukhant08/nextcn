import { authOptions } from "@/app/api/auth/[...nextauth]/next-auth-options"
import { getServerSession } from "next-auth"


export default async function Accounts() {
    const session = await getServerSession(authOptions)
    return <div className="flex flex-col">
        <div>Email: { session?.user.email}</div> 
        <div>Roles: { session?.user.roles.join(",")}</div>
    </div>
}