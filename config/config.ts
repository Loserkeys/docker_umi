import { defineConfig } from 'umi';
const packageFile = require('../package.json');

// @ts-ignore
import theme from '@yy/shophub-themes/lib/default/theme';

console.log(packageFile.name, process.env.UMI_ENV, '>>>>');

export default defineConfig({
  publicPath: `https://shophub.oss-cn-shenzhen.aliyuncs.com/fe-resource/${packageFile.name}/${process.env.UMI_ENV}/${packageFile.version}/`,

  nodeModulesTransform: {
    type: 'none',
  },
  title: false,
  plugins: ['react-dev-inspector/plugins/umi/react-inspector'],
  cssLoader: {
    localsConvention: 'camelCase',
  },
  history: {
    type: 'browser',
  },
  hash: true,
  fastRefresh: {},
  copy: ['./project.json'],
  theme,
});
