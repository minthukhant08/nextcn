'use server'

import { articlesAPI } from "@/api/articles"

export const createArticle = async (data: FormData) => {
    try {
        const res = await articlesAPI.create(data)
        console.log(res)
        return res.data.message
    } catch (error) {
        console.log(error)
        return "something went wrong"
    }
}