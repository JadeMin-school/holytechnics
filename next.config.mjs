import CONFIG from "./src/config/config.mjs";



const prefix = process.env.NODE_ENV === "production" ? CONFIG.URL : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	
	basePath: prefix,
};

export default nextConfig;