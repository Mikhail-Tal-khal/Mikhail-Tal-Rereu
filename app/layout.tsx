// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/theme-provider";
import { Space_Mono } from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'devicon/devicon.min.css';

const inter = localFont({
  src: '../public/fonts/inter-var.woff2',
  variable: '--font-inter',
});

const spaceMono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  icons: '/images/portfolio/strategy.png',
  title: 'Rereu Lemein - Software Engineer',
  description: 'Personal portfolio of Mikhal-Tal Rereu, a software engineer specializing in Flutter development, AI, and computer vision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Analytics />
          <SpeedInsights />
          <main className="pt-1 pb-4 min-h-screen"> {/* Increased bottom padding */}
            {children}
          </main>
          <FooterSection className="h-[max-content] bottom-0 w-full" />
        </ThemeProvider>
      </body>
    </html>
  );
}