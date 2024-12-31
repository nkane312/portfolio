import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './app/components/ImageLoader.tsx',
	},
};

export default nextConfig;
