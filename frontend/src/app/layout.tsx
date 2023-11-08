import "./globals.css";
import { Inter, Lora } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Las Vegas Dental Implants",
  description:
    "Dental implants are a great way to replace missing teeth. Here are three options to consider dental implants in Las Vegas, Nevada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
