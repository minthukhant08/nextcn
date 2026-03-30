import axios from '@/api'
import { toQueryString } from '@/utils'
import { string } from 'zod'

export const productAPI = {
    all: (params : { q?:string, limit?: number}) => axios.get<ProductResponse>("/products/search" + toQueryString(params)),
} 