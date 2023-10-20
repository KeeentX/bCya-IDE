import './globals.css'
import React from "react";
import dynamic from "next/dynamic";
import FileContext, {OpenedFilesContext} from "@/app/context/FileContext";

const TitleBar = dynamic(() => import('@/app/Titlebar/Titlebar'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-primary-dark overflow-hidden {inter.className}`}>
      <FileContext>
          <TitleBar/>
          {children}
      </FileContext>
      </body>
    </html>
  )
}
