
import { productAPI } from "@/api/products"
import ProductCard from "@/components/product-card"
import SearchButton from "@/template/products/search-button"


type Props = {
  searchParams: {
    q?: string,
    limit?: number
  }
}

export default async function Products({ searchParams }: Props){
    const { q, limit  } = await searchParams
    const result = await productAPI.all({ limit, q})
    return <div>
        <SearchButton/>
        <div className="grid grid-cols-3 gap-4">
       {
        result && result.data.products.map((p) => <ProductCard key={p.id} product={p} />)
       }
    </div>
    </div>
}