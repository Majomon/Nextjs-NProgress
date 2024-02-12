import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Provider from "@/context/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs - NProgress",
  description: "Probando la libreria NProgress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
