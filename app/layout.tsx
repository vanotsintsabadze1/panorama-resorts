import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/misc/LenisWrapper";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panorama Resort",
  description: "Official Website of Panorama Resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={montserrat.className}>
        <LenisWrapper>
          {children}

          <Toaster
            position="top-center"
            containerStyle={{ fontSize: "1.3rem" }}
          />
        </LenisWrapper>
      </body>
    </html>
  );
}
