import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "DataFarmers",
  description: "Web App That Helps Farmers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Inter.className}>
        {children}
      </body>
    </html>
  );
}
