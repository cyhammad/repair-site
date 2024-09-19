import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import FixedCallButtons from "@/components/FixedCallButtons";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Appliance Repair Center UAE",
  description:
    "Appliance Repair Center UAE is a site for repairing appliances.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} flex flex-col`}>
        {children}
        <FixedCallButtons />
      </body>
    </html>
  );
}
