import { defineConfig } from 'dumi';
import pkg from './package.json';

const MajorVersionNumber = Number(pkg.version.split('.')[0]);
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;

const preMajorVersionNumber = MajorVersionNumber - 1;
const preVersionSiteRoot = `refs/heads/v${preMajorVersionNumber}`;

const version = process.env.BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const serverRootDirect =
  process.env.NODE_ENV === 'production' ? 'https://doly-dev.github.io/high-ui/' : '/';
const logo = 'https://www.caijinfeng.com/assets/images/logo-doly@3x.png';
const favicon = 'https://www.caijinfeng.com/assets/images/doly-touch-icon_48x48.png';

const publicPath = serverRootDirect + version + '/';

const prodConfig: any = {};

if (process.env.NODE_ENV === 'production') {
  prodConfig.headScripts = [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-R1F3Q898DB',
      async: true
    },
    {
      content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-R1F3Q898DB');
    `
    }
  ];
  prodConfig.chunks = ['vendors', 'umi'];
  prodConfig.chainWebpack = function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true
            }
          }
        }
      }
    });
  };
}

export default defineConfig({
  title: 'high-ui',
  publicPath,
  logo,
  favicon,
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash'
  },
  hash: true,
  navs: [
    {
      title: '指南',
      path: '/guide'
    },
    {
      title: '组件',
      path: '/components'
    },
    // {
    //   title: `v${preMajorVersionNumber}.x`,
    //   path: `https://doly-dev.github.io/high-ui/${preVersionSiteRoot}/index.html`
    // },
    {
      title: 'GitHub',
      path: 'https://github.com/doly-dev/high-ui'
    },
    {
      title: '更新日志',
      path: 'https://github.com/doly-dev/high-ui/releases'
    }
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ],
  ...prodConfig
  // more config: https://d.umijs.org/config
});
