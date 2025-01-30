import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/app/components/Navbar";
import FooterSection from "@/app/components/FooterSection";
import 'devicon/devicon.min.css';

const inter = localFont({
  src: '../public/fonts/inter-var.woff2',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Mikhal-Tal Rereu - Software Engineer',
  description: 'Personal portfolio of Mikhal-Tal Rereu, a software engineer specializing in Flutter development, AI, and computer vision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16 pb-16 min-h-screen"> {/* Added bottom padding for footer */}
            {children}
          </main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}