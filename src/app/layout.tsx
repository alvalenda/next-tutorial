import { ModeToggle } from "@/components/mode-toggle";
import ThemeSwitch from "@/components/theme-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/next.svg",
    apple: "/vercel.svg",
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />

      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggle />
          <ModeToggle />
          <ThemeSwitch />
          {children}
          {/* ThemeSwitch só funcionava abaixo do children, agora funciona acima */}
        </Providers>
      </body>
    </html>
  );
}
