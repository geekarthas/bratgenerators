import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bratgenerators - Brat Text Generator',
  description: 'Create stylish brat text with custom colors and effects. Generate unique brat text images for social media and more.',
  keywords: 'brat text generator, brat text, text generator, brat summer, text effects, custom text, social media text',
  openGraph: {
    title: 'bratgenerators - Brat Text Generator',
    description: 'Create stylish brat text with custom colors and effects. Generate unique brat text images for social media and more.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}