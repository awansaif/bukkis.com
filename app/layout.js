import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className}>
      <head />
      <body className="bg-gray-100">
        <Navbar />
        <main className="mt-16 py-4 px-8 max-w-6xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
