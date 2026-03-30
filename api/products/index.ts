import axios from '@/api'

export const productAPI = {
    all: () => axios.get("/products"),
}