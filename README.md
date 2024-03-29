## next12 + landing.ant.design + antd4 + less
[landing.ant.design](https://landing.ant.design/docs/introduce-cn)

### 文件结构

```
── .next // build生成文件(暂时不用)
├── api // 请求文件，按页面分文件
├── component // 组件
├── config // 项目配置
├── node_modules // 包
├── out // build打包静态文件（使用部署文件）
├── page // 页面目录，里面的文件即路由
├── public // 静态资源
├── styles // css
├── util // 工具
├── .babelrc // 打包配置
├── .eslinttrc.json // 代码校验配置
└── next.config.js  // 项目配置
└── package.json   //项目说明
└── readme.md  // 此文件
└── yarn.lock  // lock

```

#### react 框架

1、 安装依赖包。

```
  yarn

```

2、运行脚手架。

```js
 1.npm run dev || yarn dev // 运行命令，
 2.npm run build || yarn build //打包静态文件,输出到out文件夹
```
