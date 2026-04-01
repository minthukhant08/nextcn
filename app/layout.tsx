import { Geist, Geist_Mono, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from "@/providers/auth-context-provider";
import { SessionProvider } from "next-auth/react"
import NextAuthSessionProvider from "@/providers/next-auth-session-provider";

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", outfit.variable)}
    >
      <body>
        <NextAuthSessionProvider>
        <ThemeProvider>
          <AuthContextProvider>
          <ToastContainer />
          {children}
          </AuthContextProvider>
        </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
