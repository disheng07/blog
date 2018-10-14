### commond

1. 初始化

   ```
   # 默认生成 package.json
   npm init -y
   # 生成自定义 package.json
   npm init

   package.json 字段介绍
   1. dependencies 生产依赖  -S  npm i -S lodash
   2. devDependencies 开发依赖 -D npm i -D lodash
   ```

2. 运行 npm run
   `查看当前项目下所有可执行的命令`
3. 更新
   ```
   `npm i npm@latest -g`更新 npm
   `npm update` 更新包
   ```
4. 管理
   ```
   npm i -S lodash 安装 lodash 到生产依赖
   npm i -D lodash 安装 lodash 到开发依赖
   npm uninstall lodash 卸载依赖 删除 nodeModules 内的文件
   npm uninstall -D loadsh 卸载依赖 文件及 package.json 开发的配置
   npm uninstall -S loadsh 卸载依赖 文件及 package.json 生产的配置
   # 安装全局包
   npm i -g jshint
   # 更新全局包
   npm update -g jshint
   # 卸载全局包
   npm uninstall -g jshint

   ~ 会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
   ^ 会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
   # 查看包是否过时
   npm outdate
   # 查看 npm 配置
   npm config ls
   # 查看包的安装路径
   npm root
   ```
5. 查看
   ```
   npm list 当前项目下安装的包
   ```

### 通配符

`*.js`任意以 js 为后缀的文件
`**/*.js` 任意目录下以 js 为  后缀的文件

### 传参

向 npm 脚本传入参数，要使用`--`标明

```
"test": "react-scripts-ts test --env=jsdom",
```

###  执行顺序

如果是并行执行（即同时的平行执行），可以使用&符号。

```
$ npm run script1.js & npm run script2.js
```

如果是依赖执行（即只有前一个任务成功，才执行下一个任务），可以使用&&符号。

```
$ npm run script1.js && npm run script2.js
```

### 钩子

npm 脚本有 pre 和 post 两个钩子。举例来说，build 脚本命令的钩子就是 prebuild 和 postbuild。

```
"prebuild": "echo I run before the build script",
"build": "cross-env NODE_ENV=production webpack",
"postbuild": "echo I run after the build script"

npm run build 等同于
npm run prebuild && npm run build && npm run postbuild
因此，可以在这两个钩子里面，完成一些准备工作和清理工作
```

### 变量

```
获取 package.json 文件字段
统一在 npm_package_ 对象下面
console.log(npm_package_name)
```
