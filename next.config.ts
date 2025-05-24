import type { NextConfig } from "next";



const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config) => {
        // Add the directory to exclude
        config.watchOptions = {
            ...config.watchOptions,
            ignored: ['**/server/**']
        };

        return config;
    }
};

export default nextConfig;
