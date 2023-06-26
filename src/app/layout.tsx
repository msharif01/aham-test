import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "./components/authprovider/AuthProvider";
import Navbar from "./components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AHAM Capital Test",
  description: "A system with a proper crud for users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
            </div>
          </AuthProvider>
      </body>
    </html>
  );
}
