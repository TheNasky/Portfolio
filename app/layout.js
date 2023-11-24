import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: {
      default: "Valentín Ballesteros",
      template: "%s",
   },
   description: "Valentín Ballesteros' Portfolio",
   icons: {
      icon: "/public/images/icons/NextJs.webp",
   },
   openGraph: {
      title: "Valentín Ballesteros",
      description: "Valentín Ballesteros' Portfolio",
      images: [
         {
            url: "/public/images/1.webp",
         },
      ],
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>{children}</body>
      </html>
   );
}
