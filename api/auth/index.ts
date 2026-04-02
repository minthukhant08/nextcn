import axios from "@/api";
import { withAuth } from "@/api"
import route from "./route";

export const authAPI = {
    login: (payload: { email: string, password: string}) => axios.post<BaseResponse<LoginResponse>>(route.login, payload),
    logout: () => withAuth.post(route.logout)
}