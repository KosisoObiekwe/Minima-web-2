import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
    src: [
        {
            path: "./fonts/helvetica/HelveticaNeueLTStd-Roman.otf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-helvetica",
});

const inter = localFont({
    src: [
        {
            path: "./fonts/inter/Inter_28pt-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/inter/Inter_28pt-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "KXSI studios",
    description: "Minimal Web design",
};

export default async function RootLayout({children,} : { children: React.ReactNode; })
{
    return (
        <html lang="en">
        <body className={`${helvetica.variable} ${inter.variable} antialiased`}>
        {children}
        </body>
        </html>
    )
}