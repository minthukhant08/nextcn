import { withAuth as axios } from "@/api";
import route from "./route";

export const articlesAPI = {
    create: (data : FormData) => axios.post<BaseResponse<CreateArticleResponse>>(route.resource, data)
}