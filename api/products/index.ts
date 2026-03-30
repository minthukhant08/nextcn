import axios from '@/api'

export const productAPI = {
    all: (search?:string) => axios.get<ProductResponse>("/products/search?q=" + search),
}