import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Kodra24 Villas Management App',
  description: 'Discover the best villas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
