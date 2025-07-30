import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
	title: "The B360 Group",
	icons: {
		icon: "/bt360.png",
	},
	description:
		"A group of companies driving growth in business, technology, urban solutions, and global exploration",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
