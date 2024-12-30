import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nkane.s3.us-east-2.amazonaws.com',
				port: '',
				pathname: '/portfolio/images/*',
				search: '',
			},
		],
	},
};

export default nextConfig;
