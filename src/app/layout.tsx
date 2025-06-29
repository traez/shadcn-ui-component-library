import type { Metadata } from "next";
import NextJsTopLoader from "@/lib/NextJsTopLoader";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen w-full font-trebuchetMs">
        <NextJsTopLoader />
        <main className="flex-grow h-full w-full">{children}</main>
      </body>
    </html>
  );
}
