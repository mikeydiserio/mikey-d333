// eslint-disable @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer');
const { composePlugins, withNx } = require('@nx/next');
const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const baseConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
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
  basePath: isProd ? '/mikey-d333' : '',
  assetPrefix: isProd ? '/mikey-d333/' : '',
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
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

module.exports = composePlugins(...plugins)(configWithPlugins);
