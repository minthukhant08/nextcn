import { accountsAPI } from "@/api/accounts"


type Props = {
  searchParams: {
    query?: string,
    page?: number
    size?: number
  }
}

export default async function Accounts({ searchParams } : Props) {
    const { query, page, size } = await searchParams
    const res = await accountsAPI.list({ query: query || "", page: page || 0, size: size || 3 })
    return <div className="flex flex-col">
        {
            res.data.data.content.map((acc) => <div key={acc.id}><span>{acc.email}</span><br/></div>)
        }
    </div>
}