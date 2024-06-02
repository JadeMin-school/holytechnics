const prefix = process.env.NODE_ENV === "production" ? "/holytechnics" : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	assetPrefix: prefix,
};

export default nextConfig;