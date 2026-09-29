import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Jala Wedding — Plan your day beautifully",description:"A premium wedding planning workspace for couples and vendors.",manifest:"/manifest.webmanifest"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
