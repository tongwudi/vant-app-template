# vant-app-template

## 在线预览

![](./dosc/images/1.gif)

## 技术栈

- [vue](https://github.com/vuejs/vue)
- [vue-router](https://github.com/vuejs/vue-router)
- [vuex](https://github.com/vuejs/vuex)
- [axios](https://github.com/axios/axios)
- [amfe-flexible](https://github.com/amfe/lib-flexible)
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [less](http://lesscss.cn/)
- [vant](https://github.com/youzan/vant)
- [iconfont](https://www.iconfont.cn/)
- [es6 中文文档](https://github.com/ruanyf/es6tutorial)

## 项目结构

```js
|-项目名
    |-public
    |-src
      |-api // 接口
      |-components // 公共组件
      |-plugins // 按需引入ui组件库
      |-assets // 公共资源
    //   |-directives // 自定义指令
    //   |-filters // 过滤器
    //   |-mixins // 混入
      |-router
      |-utils // 工具库
      |-store
      |-views // 页面
      |-static
    |-.browserslistrc
    |-.gitignore
    |-.prettierrc // 代码格式化配置
    |-babel.config.js
    |-package.json
    |-package-lock.json
    |-postcss.config.js // css 处理与移动端适配
    |-README.md
    |-vue.config.js
```

## .prettierrc 配置项

```js
{
    // tab缩进大小,默认为2
    "tabWidth": 4,
    // 使用tab缩进，默认false
    "useTabs": false,
    // 使用分号, 默认true
    "semi": false,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    "singleQuote": false,
    // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    "TrailingCooma": "all",
    // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    "bracketSpacing": true,
    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    "jsxBracketSameLine": false,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    "arrowParens": "avoid"
}
```

## 手机屏幕适配

[rem 在移动端实战](https://github.com/wqb2017/vue-vant-axios/blob/master/dosc/2.md)

1. 安装

```js
npm i -S amfe-flexible
npm install postcss-pxtorem --save-dev
```

2. 使用

```js
// postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"]
    }
  }
};
```

## License

[MIT](https://opensource.org/licenses/MIT)
