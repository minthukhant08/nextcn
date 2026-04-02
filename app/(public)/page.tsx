
import Login from "@/template/login/page"
import Link from "next/link"

export default function Page() {
  return <div>
    <Login/>
    <Link href={'/products'}>product page</Link>
  </div>
}
