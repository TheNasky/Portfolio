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
      description: "Valentín Ballesteros Portfolio",
      url: "https://valentinballesteros2023.vercel.app/",
      site_name: "Valentín Ballesteros",
      images: [
         {
            url: "/public/images/icons/NextJs.png",
         },
         {
            url: "images/1.png",
         },
         {
            url: "https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2F1.webp&w=640&q=75",
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
