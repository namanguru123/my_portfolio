import { Inter } from "next/font/google";
import Cursor from "../components/Cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naman Sharma | Full Stack Developer",
  description: "I build secure, scalable digital products that solve real-world problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
