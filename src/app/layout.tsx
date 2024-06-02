import type { Metadata } from 'next';



export const metadata: Metadata = {
	title: "한국폴리텍 정보 서비스",
	description: "한국폴리텍 실시간 정보 서비스",
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
				{ children }
			</body>
		</html>
	);
}