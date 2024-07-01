import React from 'react';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Quentin Le Sauce',
  description: 'Quentin Le Sauce | Portfolio',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string; };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head />
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
