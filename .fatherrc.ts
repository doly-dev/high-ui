export default [
  {
    esm: {
      type: 'babel',
      importLibToEs: true,
    },
    cjs: {
      type: 'babel',
      lazy: true,
    },
    extractCSS: true,
    lessInBabelMode: true,
    runtimeHelpers: true,
  },
  // {
  //   extraExternals: ["react", "react-dom"],
  //   // extractCSS: true,
  //   umd: {
  //     globals: {
  //       react: "React",
  //       "react-dom": "ReactDom"
  //     },
  //     minFile: true,
  //     file: "high",
  //     name: "high",
  //     // sourcemap: true
  //   }
  // }
];
