1. **标题**
```
# 一级
## 二级
### 三级
#### 四级
##### 五级
###### 六级
```
> # 一级
> ## 二级
> ### 三级
> #### 四级
> ##### 五级
> ###### 六级
2. **引用**
```
> 引用内容
>> 引用中的引用
```
> 引用内容
>> 引用中的引用
3. **表格**
```
title01|title02|
# :--: 居中 
# :-- 靠左
#  --: 靠右
--|--|
content|content|
```
title01 | title02 |
---- |---- |
content|content|
4. **列表**
```
1. 无序列表
    - 01
    - 02
2. 有序列表
    1. title01
    2. title02
3. 代办列表
    - [ ] item01
    - [X] item02
```
1. 无序列表
    - 01
    - 02
2. 有序列表
    1. title01
    2. title02
3. 代办列表
    - [ ] item01
    - [X] item02
5. **链接**
6. **强调**
```
*强调内容*
_强调内容斜体_
`强调内容带底色`
```
**强调内容**
_强调内容斜体_
`强调内容带底色`
7. **代码块**
    ```
    # 写入代码区域，不会被浏览器转义解析
    console.log('test code area')
    ```
8. **分割线**
   ```
   # 三个以上的中隔线
   -----
   ```
   ---
9.  **锚点**
```
[回到标题1](锚点位置)
```
[回到一级标题](#一级)

10. **引用图片**
  ```
  ![alt text](url)
  ```
  ![图片](https://pbs.twimg.com/media/DougPqnU8AAUSL1.jpg)


```graph
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->E;
    E-->F;
    D-->F;
    F-->G;
```