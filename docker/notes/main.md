
#### 常用命令

| 命令 | 解释 | 示例 | 备注 |
|----|----|---|----|
|$ docker info|显示运行的基本信息|
|$ docker image ls|列出所有 image 文件|
|$ docker image rm [imageName]|删除 image 文件||docker hub 官方仓库
|$ docker pull image [imageName]|拉取镜像文件|$ docker image pull hello-world
|$ docker container run [imageName]|运行镜像文件|$ docker container run hello-world|该命令具有 pull image作用
|$ docker container ls| 列出本机正在运行的容器||
|$ docker container ls --all| 列出本机所有的容器，包括终止的容器||会包含容器的 ID 及运行的信息
|$ docker container kill [containerId]| 强行立即终止，正在进行中的操作会全部丢失||
|$ docker container rm [containerId]| 运行终止的容器依旧会占用空间，需要删除容器||
|$ docker container start [containerId]| 启动容器||
|$ docker container stop [containerId]| 中断容器，自行进行收尾清理工作||
|$ docker container logs [containerId]| 来查看 docker 容器的输出，即容器里面 Shell 的标准输出||
|$ docker container exec -it [containerId] /bin/bash| 来查看 docker 容器的输出，即容器里面 Shell 的标准输出||
|$ docker container cp [containID]:[/path/to/file] .| 从正在运行的 Docker 容器里面，将文件拷贝到本机||

|$ docker image build| 创建 image 文件||

#### Dockerfile文件
用来配置 image，生成二进制 image 文件

#### 制作 Docker 容器（以koa-demos 为例）

1. 项目根目录下 touch .dockerignore 忽略不必要的文件，避免打包进 image里面
   ```
    .git
    node_modules
    npm-debug.log
   ```
2. 项目的根目录下 touch Dockerfile 文件，写入
   ```
    FROM node:8.4
    COPY . /app
    WORKDIR /app
    RUN npm install --registry=https://registry.npm.taobao.org
    EXPOSE 3000
   ```
   解释
   ```
    FROM node:8.4：该 image 文件继承官方的 node image，冒号表示标签，这里标签是8.4，即8.4版本的 node。
    COPY . /app：将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录。
    WORKDIR /app：指定接下来的工作路径为/app。
    RUN npm install：在/app目录下，运行npm install命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。
    EXPOSE 3000：将容器 3000 端口暴露出来， 允许外部连接这个端口。
   ```
3. 创建 image 文件
   ```
    $ docker image build -t koa-demo .
    # 或者
    $ docker image build -t koa-demo:0.0.1 .
   ```
   解释
   ```
   上面代码中，-t参数用来指定 image 文件的名字，后面还可以用冒号指定标签。
   如果不指定，默认的标签就是latest。
   最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。
   ```
4. 生成容器
  docker container run命令会从 image 文件生成容器。
    ```
    $ docker container run -p 8000:3000 -it koa-demo /bin/bash
    # 或者
    $ docker container run -p 8000:3000 -it koa-demo:0.0.1 /bin/bash
    ```
    解释
    ```
    -p参数：容器的 3000 端口映射到本机的 8000 端口。
    -it参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
    koa-demo:0.0.1：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。
    /bin/bash：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。
    ```
  5. 其他
   在容器的命令行，按下 Ctrl + c 停止 Node 进程，然后按下 Ctrl + d （或者输入 exit）退出容器。此外，也可以用docker container kill终止容器运行。