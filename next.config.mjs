/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",

	basePath: "/holytechnics",
	
	// 에셋 압축용 sharp 패키지 설치하기 귀찮아...
	compress: false,
};

export default nextConfig;