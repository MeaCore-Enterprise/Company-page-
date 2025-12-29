import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { I18nProviderClient } from '@/locales/client';

// This is a server component, so we can't use the client-side hooks to get the locale.
// We are keeping the default metadata in English as a fallback.
// For full SEO optimization, a more advanced i18n routing strategy would be needed.
export const metadata: Metadata = {
  title: 'MeaCore Digital Solutions',
  description: 'Innovative Software, Automation, and MVP Solutions',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <I18nProviderClient>
      <html lang="en" className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body className={cn("font-body antialiased")}>
          {children}
          <Toaster />
        </body>
      </html>
    </I18nProviderClient>
  );
}
