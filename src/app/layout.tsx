import type { Metadata } from 'next';

import Providers from "./components/providers";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./global.css";



export const metadata: Metadata = {
	title: "인천폴리텍 정보 서비스",
	description: "인천폴리텍 정보 서비스",
};

export default function RootLayout(
	{
		children,
	}: Readonly<{
		children: React.ReactNode;
	}>
) {
	return (
		<html lang="ko">
			<body>
				<Providers>
					<Navbar/>
					{ children }
					<Footer/>
				</Providers>
			</body>
		</html>
	);
}