import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.scss";
// import "./globals.module.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conduit",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //   <>
    //   <Head>
    //     <title>Conduit</title>
    //     {/* Другие мета-теги и ссылки на стили */}
    //     <link rel="stylesheet" href="//demo.productionready.io/main.css" />
    //   </Head>
    //   <Header />
    //   {children}
    //   <Footer />
    // </>

    <html lang="en">
      {/* <Head>
      </Head> */}
      {/* <body className={`${s.body} ${inter.className}`}> */}
      <body className="body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
