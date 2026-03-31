import { create } from "zustand";
import { persist } from 'zustand/middleware'


export type LoginStore = {
    email?: string | null,
    setEmail: (email: string) => void
}
export const useLoginStore = create<LoginStore>()(persist((set) => ({
    email: null,
    setEmail: (value: string) => set((state) => ({ email: value }))
}), { name: 'login-store' }))


