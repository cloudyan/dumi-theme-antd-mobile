import { defineConfig } from 'dumi';
import { resolve } from 'path';
// import { sidebar } from './config/sidebar';
import { nav } from './config/nav';

console.log('__dirname', resolve(__dirname, '../../packages/antd-mobile/src'))

export default defineConfig({
  outputPath: 'docs-dist',
  // disable mfsu for HMR
  mfsu: false,
  // pass theme config
  themeConfig: {
    // logo: '',
    name: 'taro-vant',
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      rules: [{ mode: 'vw', options: [100, 750] }],
      // 禁用高清方案
      // rules: [],
      // 根据不同的设备屏幕宽度断点切换高清方案
      // rules: [
      //   { maxWidth: 375, mode: 'vw', options: [100, 750] },
      //   { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      // ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/1.x/packages/theme-mobile/src/typings/config.d.ts#L7
    },
    // menus 升级为 themeConfig.sidebar
    // navs 升级为 themeConfig.nav
    // sidebar,
    nav,
  },
  alias: {
    // dumi 2 不再感知 monorepo, 参见 https://d.umijs.org/guide/upgrading#%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6%E5%8D%87%E7%BA%A7
    // 'antd-mobile': resolve(__dirname, '../../packages/antd-mobile/src'),
    // 'demos': resolve(__dirname, '../../packages/antd-mobile/src/demos'),
    // '@deepjs/cook-mobile/lib/style/index.less': resolve(__dirname, './packages/cook-mobile/src/style/index.less'),
    // '@deepjs/cook-mobile-plus': resolve(__dirname, './packages/cook-mobile-plus/src'),
    // '@deepjs/cook-mobile-pro': resolve(__dirname, './packages/cook-mobile-pro/src'),
    // 'demos': process.cwd() + '/packages/cook-mobile/src/demo-block/index.tsx',
    // '@docs': resolve(__dirname, './docs'),
  },
  resolve: {
    // 这里使用 packages，而不是 tailPkgList，否则导致输出路由有问题
    docDirs: [
      'docs',
      // 'packages',
    ],
    codeBlockMode: 'passive',
  },
  locales: [
    // { id: 'zh-CN', name: '中文' },
    // { id: 'en-US', name: 'English' },
    { id: 'zh', name: '中文' },
    { id: 'en', name: 'English' },
  ],
  // nav: [
  //   { title: '首页', path: '/' },
  //   { title: '基础组件', path: '/antd-mobile' },
  //   // { title: '业务组件', path: '/cook-mobile-plus' },
  //   // { title: '业务场景', path: '/cook-mobile-pro' },
  //   // null,
  //   // {
  //   //   title: 'GitLab',
  //   //   path: 'http://gitlab.prod.caijj.net/yanfaerbu/qianduan/cook-mobile',
  //   // },
  // ],
});
