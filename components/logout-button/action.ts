'use server'
import { authAPI } from "@/api/auth"

export const logout = async () => {
     return authAPI.logout()
}