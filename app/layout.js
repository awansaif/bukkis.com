import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Providers from "@/components/provider";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className}>
      <head />
      <body className="bg-gray-100 flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="mt-16 py-4 px-8 max-w-6xl mx-auto flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
