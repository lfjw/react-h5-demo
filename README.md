## react项目

- 从入门到精通

### 安装
```sh
create-react-app xxx
```

### 暴露出webpack配置文件

```sh
npm run eject

? Are you sure you want to eject? This
action is permanent. (y/N)
```

### 安装less和less-loader

```sh
npm install less-loader less --save
```

### 修改webpack
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
