const withPlugins = require("next-compose-plugins");
const withLess = require('@zeit/next-less');
const AntdLessLoader = require('next-plugin-antd-less');
// next.js configuration
const nextConfig = {
  //reactStrictMode: true, //严格模式
  reactStrictMode: false,  
};
module.exports = withPlugins(
  [AntdLessLoader,{
    reactStrictMode: false,  
    transpilePackages: ['antd', '@ant-design/icons'],
    cssLoaderOptions: {
      modules: {
        localIdentName: process.env.NODE_ENV !== 'production' ? '[folder]__[local]__[hash:4]' : '[hash:8]',
      },
    },

    // for Next.js ONLY
    nextjs: {
      localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
    },
  }],
  // [AntdLessLoader],
  nextConfig,
);
