import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UTTRANJALI - Organic Store",
  description: "Bringing the pure and organic produce of Uttarakhand to your table.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar /> {/* ✅ Navbar added so it stays fixed */}
        <main className="pt-16">{children}</main> {/* Push content down to avoid overlap */}
      </body>
    </html>
  );
}
