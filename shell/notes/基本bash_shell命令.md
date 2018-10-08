
#### 基本命令
1. `man` 查看对应命令手册
   `man ls` 列出对于 `ls` 的使用说明 `q` 退出
2. `cd` 浏览文件
   ```
    # 如果指定 destination 则到对应目录。没有，则去到用户主目录(~)
    # destination 可以使绝对路径，也可以是相对路径
    cd destination
    # .. 回到父级目录
    cd ..
   ```
3. `pwd` 显示当前文件路径
4. `ls` 文件和目录列表
   ```
   # 显示当前目录下的文件及目录，按照字母排序
   ls 
   # 显示所有文件、目录及隐藏文件
   ls -a
   # 显示文件更多信息(日期、大小等)
   ls -a
   # 过滤列表文件信息
   ls -a fileName
   ```
5. `touch` 创建文件
  `touch config.js`
6. `cp` 复制文件
   ```
   #源文件 目标(文件名、指定路径)
   cp source destination

   #文件会被复制到对应目录下
   cp text_01 ./demo
   ```
7. `mv` 移动到另一个地方或者重命名文件
   ```
   # 重命名
   mv text_01 text_02
   # mv text_01 ./demo
   ```
8. `rm` 删除文件
   ```
   # 删除 text_01文件并二次确认
   rm -i text_01
   ```
9. `mkdir`处理目录
    ```
    # 创建单个目录
    mkdir newDir

    # 创建多个目录
    mkdir -p newDir/subDir

    # 删除目录,默认只能删除空目录，里面包含空文件也不行
    rmdir newDir

    # 删除文件目录及其包含文件，终极大法
    rm -rf newDir
    ```
10. 查看文件类型
    ```
    # 查看文件类型
    file text_01

    # 查看文件
    # 显示文件所有内容
    cat text_01

    #显示文件所有内容、所有的行加上行号，包括空行
    cat -n text_01

    #显示文件所有内容、所有的行加上行号，不包括空行。脚本文件特别有用
    cat -b text_01

    # 显示的内容去除制表符
    cat -T text_01

    # 显示部分文件内容
    # 默认末尾10行
    tail text_01 

    # 默认开始10行
    head text_01
    
    ```
#### 更多 bash shell 命令
1. `ps` 监测程序
   ```
   # 终止 Node
   # -9 无条件终止
   killall -9 node 
   ```
   
2. 监测磁盘空间
   `df -h` 显示磁盘使用情况
3. 处理数据文件
   ```
   # 搜索数据
   # grep [options] pattern fileName
   grep th file_01
   # 压缩数据
   # gzip fileName
   gzip file_01
   # 解压缩文件
   # tar fileName.tgz
   

   ```
  