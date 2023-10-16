import Head from "next/head";
import Link from "next/link";

import React from "react";
// this is your top bar
// have a look at the code
// "GPT, i'm learning nextjs, react and tailwind css, can you please tell me about... "
//                    1. Head tag
//                    2. header tag
//                    3. main tag
//                    4. footer tag
//                    5. children
// children is absolutely critical to understand
export default function TopBar({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              Wesbite
            </Link>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Website</p>
        </footer>
      </div>
    </>
  );
}
