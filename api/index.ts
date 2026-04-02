import { authOptions } from "@/app/api/auth/[...nextauth]/next-auth-options";
import axios from "axios";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

const instance = axios.create({
  baseURL: process.env.BASE_URL + "/api/"
});



export const withAuth = axios.create({
  baseURL: process.env.BASE_URL + "/api/"
});


withAuth.interceptors.request.use(async (config) => {
  const session = await getServerSession(authOptions)
  if (session?.user){
    config.headers['Authorization'] = `Bearer ${session.user.accessToken}`;
  }
  return config
})

withAuth.interceptors.response.use((rep) => {
  if (rep.status == 401){
      redirect("/no_auth")
  }
  return  rep
})

export const clientInstance= axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "/api/"
});

export default instance;