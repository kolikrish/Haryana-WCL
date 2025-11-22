import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
