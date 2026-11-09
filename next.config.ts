import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    // CV v PDF bylo odstraněno (03/2025), Google ho ale dál zkouší a hlásí 404
    async redirects() {
        return [{source: "/assets/CV_Filip_Tomanec.pdf", destination: "/resume", permanent: true}];
    },
};

export default nextConfig;
