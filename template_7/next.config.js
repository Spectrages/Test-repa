import createSvgPlugin from '@stefanprobst/next-svg';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: 'standalone',
};

const withSvg = createSvgPlugin({
  id: '__root__',
  svgoPlugins: [],
});

export default withSvg(nextConfig);