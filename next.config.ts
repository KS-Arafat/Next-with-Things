import type { NextConfig } from "next";
import { loadEnvFile } from "node:process";

loadEnvFile("./.env.local");

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/landing",
				destination: "/landing.html",
			},
		];
	},
};
if (
	process.env.BUILDMODE !== undefined &&
	process.env.BUILDMODE === "standalone"
) {
	nextConfig.output = "standalone";
}
export default nextConfig;
