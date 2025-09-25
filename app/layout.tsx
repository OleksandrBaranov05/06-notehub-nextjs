import type { ReactNode } from 'react';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'NoteHub',
  description: 'Next.js NoteHub',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <TanStackProvider>{children}</TanStackProvider>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
