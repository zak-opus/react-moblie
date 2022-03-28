const CracoLessPlugin = require("craco-less");
const pxtorem = require("postcss-pxtorem");
module.exports = {
  style: {
    postcss: {
      mode: "extends",
      plugins: [
        pxtorem({
          rootValue: 37.5, // 设计稿宽度/100，即分成多少份
          unitPrecision: 5, // 小数精度
          propList: ["*"],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i,
        }),
      ],
    },
  },
  babel: {
    //做按需加载
    plugins: [
      [
        "import",
        {
          libraryName: "antd-mobile",
          libraryDirectory: "es",
          style: true, //设置为true即是less 这里用的是css
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
