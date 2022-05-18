import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>MH COMMERCE</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="max-w-[1400px] m-auto w-full]">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout