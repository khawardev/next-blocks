// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: '**',
//             },
//         ],
//     },
// };

// export default nextConfig;

import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default withMDX(config);
