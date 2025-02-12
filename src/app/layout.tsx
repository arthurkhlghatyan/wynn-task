import type { Metadata } from 'next';
import { libreCaslonText } from '@/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Wynn Resorts',
  description: 'Wynn Al Marjan Island',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={libreCaslonText.className}>
      <body>{children}</body>
    </html>
  );
}
