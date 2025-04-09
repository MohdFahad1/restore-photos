import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ImageFix – AI-Powered Image Color Enhancer & Fixer",
  description:
    "Restore your old and blurry photos with ImageFix. Our AI-powered tool uses Cloudinary to enhance image colors, fix imperfections, and bring memories back to life.",
  keywords: [
    "image enhancer",
    "photo fixer",
    "AI image restoration",
    "Cloudinary AI",
    "old photo restoration",
    "blurry photo fixer",
    "ImageFix",
  ].join(", "),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
