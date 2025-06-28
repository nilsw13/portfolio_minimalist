import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
 

import "./globals.css";
import HeaderNav from "./components/top&bottom/HeaderNav";
import Footer from "./components/top&bottom/Footer";

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



export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {


const {locale} = await params;
if (!hasLocale(routing.locales, locale)) {
  notFound();
}


  return (
    <html lang={locale}>
       <head>
       <link rel="icon" href="/hamburger.png" type="image/png" sizes="32x32" />
    <link rel="icon" href="/hamburger-color.png" type="image/png" sizes="32x32" />
  </head>
      <body
        className={`${inter.variable} overflow-x-hidden  antialiased bg-white` }
      >

        


         <NextIntlClientProvider>
         <HeaderNav/>
           {children}
           <Footer/>
          </NextIntlClientProvider>



        

        
      </body>
    </html>
  );
}
