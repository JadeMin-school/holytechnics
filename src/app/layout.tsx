import type { Metadata } from 'next';

import Providers from "./components/providers";



export const metadata: Metadata = {
	title: "인천폴리텍 정보 서비스",
	description: "인천폴리텍 실시간 정보 서비스",
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
					{ children }
				</Providers>
			</body>
		</html>
	);
}