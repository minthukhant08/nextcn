import { productAPI } from "@/api/products"


export default async function Products(){
    const products = await productAPI.all()
    return <div>
       {
        products && products.data.map((product: any) => <div key={product.id}>{product.title}</div>)
       }
    </div>
}