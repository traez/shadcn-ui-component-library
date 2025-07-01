import type { Metadata } from "next";
import { cookies } from "next/headers";
import NextJsTopLoader from "@/lib/NextJsTopLoader";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Shadcn-UI-Component-Library",
  description: "Created by Trae Zeeofor",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

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
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <section className="w-full">
                <Navbar />
                <div className="px-4">{children}</div>
              </section>
            </SidebarProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
