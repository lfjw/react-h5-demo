## react项目

- 从入门到精通

## 目录结构划分

```
public 
    index.html 模板文件
src 
    common 公用样式
    components 公用组件
    view 页面组件
    images 图片
    store 仓库（redux） 
        actions     创建者
        reducers   处理器
        action-types 
    index.js 入口文件
```

## 1. 安装
```sh
create-react-app xxx
```

## 2. 暴露出webpack配置文件

```sh
npm run eject

? Are you sure you want to eject? This
action is permanent. (y/N)
```

## 3. 安装less和less-loader

```sh
npm install less-loader less --save
```

### 3.1 修改webpack
- 运行完以上命令后，项目根目录下会多出一个 config 文件夹，找到里面的 webpack.config.js 这个文件
- webpack里配置了css和sass，我们想用less就需要加入less配置。

- 找到下面这段代码，并增加两行代码

```js
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// 新增
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
```
- 增加less

```js
// 此文件搜索 oneof
// 可以看到关于sass部分的配置
// 那我们再加入less的相关配置
// 先复制一份，将sass部分修改为less，再加入oneOf数组。

{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader'
  ),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
},
// Adds support for CSS Modules, but using SASS
// using the extension .module.scss or .module.sass
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
    'less-loader'
  ),
},
```

## 4. 安装阿里图标

- 地址 https://www.iconfont.cn/
- 图标加入到购物车
- 添加至项目
- 加入项目-图标-确定
- 选择 Font class
- 查看在线链接或者下载本地


## 5. 前后台交互套路

- 1.定义仓库中的数据结构
- 2.后台实现这个接口
- 3.前台编写一个请求此接口的API方法
- 4.定义action-types，修改reducer，并处理此动作
- 5.编写action方法，用来调用API方法，请求接口，并得到返回的数据，构造action派发给仓库
- 6.在组件里调用此方法，并且填充仓库
- 7.在组件中渲染数据




## 6.15任务 
- redux 结合 router
- 登录，成功之后回显