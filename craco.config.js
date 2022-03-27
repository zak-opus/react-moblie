const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@brand-primary": "#108ee8" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
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
};
