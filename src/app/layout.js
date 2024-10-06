import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomBackground from "@/components/backgroundShap";
import LenisCom from "@/components/lenis";
import { Nav } from "@/components/nav";
import Footer from "./footer/footer";

const Acumin = localFont({
	src: "./fonts/Acumin-RPro.otf",
	variable: "--font-acumin",
	weight: "100 900",
});
export const Campton = localFont({
	src: "./fonts/CamptonBold.otf",
	variable: "--font-campton",
	weight: "900",
});
export const Hola = localFont({
	src: "./fonts/hola.ttf",
	variable: "--font-hola",
	weight: "900",
});
export const CamptonBold = localFont({
	src: "./fonts/campton-bold.woff2",
	variable: "--font-camptonBold",
	weight: "100 900",
});

export const metadata = {
	title: "mr_bold | Free Custom Typography Creator",
	description:
		"Create and use custom bold fonts for free. Design striking typography for any project with no restrictions or hidden costs. Unleash your creativity with mr_bold. with tailwindcss support",
	icons: {
		icon: ["/favicon-48x48.png"],
		apple: ["/apple-touch-icon.png"],
		shortcut: ["/favicon.svg"],
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={` ${Acumin.className} ${Campton.variable} ${Hola.variable} ${CamptonBold.variable} antialiased bg-[#090C9B]`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{/* <CustomBackground /> */}

					<Nav />

					<LenisCom>{children}</LenisCom>
					{/* {children} */}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
