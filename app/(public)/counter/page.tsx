'use client'
import Link from 'next/link'
import { create } from 'zustand'

export const useCountStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export default function Counter() {
  const { count, inc } = useCountStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
       <Link href={"/test"}>test</Link>
    </div>
  )
}