import type { Metadata } from "next";
import NextJsTopLoader from "@/lib/NextJsTopLoader";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Shadcn-UI-Component-Library",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex min-h-screen w-full font-trebuchetMs">
        <NextJsTopLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-grow h-full w-full">
            <AppSidebar />
            <section className="w-full">
              <Navbar />
              <div className="px-4">{children}</div>
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
