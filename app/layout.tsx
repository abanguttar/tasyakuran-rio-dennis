import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

const baseUrl = "https://tasyakuran-rio-dennis.netlify.app";

export const metadata: Metadata = {
  title: "Tasyakuran Ulang Tahun Rio dan Dennis",
  description: "Undangan Ulang Tahun Rio dan Dennis",
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Tasyakuran Ulang Tahun Rio dan Dennis",
    description: "Undangan Ulang Tahun Rio dan Dennis",
    images: [
      {
        url: `${baseUrl}/images/invitation.webp`, // URL absolut lengkap
        width: 1200,
        height: 630,
        alt: "Undangan Ulang Tahun Rio dan Dennis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Penting untuk tampilan gambar besar
    title: "Tasyakuran Ulang Tahun Rio dan Dennis",
    description: "Undangan Ulang Tahun Rio dan Dennis",
    images: [`${baseUrl}/images/invitation.jpeg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
