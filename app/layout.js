import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Nidhi Nextjs',
  description: 'My First next.js website',
  keywords: 'web dev, front end, JS, HTML, React, Next',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
