import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './../(web)/globals.css'
import { NextAuthProvider} from '../../components/AuthProvider/AuthProvider'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import Toast from '@/components/Toast/Toast'

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
        <NextAuthProvider>
        <ThemeProvider>
          <Toast />
          <main className="font-normal">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
