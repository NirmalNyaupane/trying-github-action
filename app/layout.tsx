import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import { SidebarProvider } from '@/components/ui/sidebar';
import SidebarComponent from '@/components/side-bar';
import NextTopLoader from 'nextjs-toploader';
import { CommonLayout } from '@/partials/layout/common-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forum - Connect & Share',
  description: 'A modern forum platform for meaningful discussions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color='#000000' showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommonLayout>
            {children}
          </CommonLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}