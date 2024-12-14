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
};
if (
	process.env.BUILDMODE !== undefined &&
	process.env.BUILDMODE === "standalone"
) {
	nextConfig.output = "standalone";
}
export default nextConfig;
