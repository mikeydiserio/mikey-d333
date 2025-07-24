import withBundleAnalyzer from '@next/bundle-analyzer';
import { composePlugins, withNx } from '@nx/next';
const isProd = process.env.NODE_ENV === 'production';
// Define the base Next.js configuration
const baseConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  output: 'standalone',
  basePath: isProd ? 'mikeydiserio.github.io' : '',
  assetPrefix: isProd ? '/abn-search' : '',
  distDir: 'dist',
  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: true,
  },
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/abn-search',
        permanent: true,
      },
    ];
  },
};

let configWithPlugins = baseConfig;

// Conditionally enable bundle analysis
if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins);
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];
const nextConfig = composePlugins(...plugins)(configWithPlugins);

export default nextConfig;
