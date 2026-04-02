import { withAuth as axios } from "@/api";
import route from "./route";
import { toQueryString } from "@/utils";

export const accountsAPI = {
    list: (params: { query: string, page: number, size: number }) => axios.get<BaseResponse<AccountResponse>>(route.list + toQueryString(params))
}