import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],

});


export const metadata: Metadata = {
  title: "Nils Wenting",
  description: "Nils Wenting Dev portfolio",
  icons: [
    {
      rel: "icon",
      url: "/hamburger-color.png",
      type: "image/png",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
    <link rel="icon" href="/hamburger-color.png" type="image/png" sizes="32x32" />
  </head>
      <body
        className={`${inter.variable} overflow-x-hidden  antialiased bg-white` }
      >

        <HeaderNav/>


         {children} 


        <Footer/>

        
      </body>
    </html>
  );
}
