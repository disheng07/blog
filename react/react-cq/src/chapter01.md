
#### React 简介
1. 专注 UI层
2. 虚拟 DOM
3. 函数式编程
   命令式|函数式
   :--:|:--:
   执行指令|模仿人脑逻辑
   主流（C 、JAVA）| lambda
#### JSX语法
1. JSX 由来（DOM 元素与组件元素构成）
    - DOM元素
      - JSON 描述
    - 组件元素
2. JSX 基本语法
    - XML基本语法
      - 定义标签，只允许一个标签包裹
      - 标签一定要闭合
    - 元素类型
      - DOM 元素标签首字母小写
      - 组件元素首字母大写
        - 注释
          ```
          <!-- content -->
          {/*节点注释*/}
          {/*多行
          注释*/}
          <! --[if IE]>
          <![Endif] -->
          ``` 
        - DOCTYPE
      - 元素属性 
        - class 改成 className
        - for 改成 htmlFor
      - Boolean 属性
        - 省去 Boolean 属性值会导致 JSX 认为 bool 值设为了 true.要传 false 时，必须使用属性表达式。eg: disabled required checked readOnly
      - 展开属性
        - {...props}
      - 自定义 HTML 属性
        - DOM 元素中自定义属性需用 data-作为前缀
        - 组件元素中没有要求
      - JavaScript 属性表达式
      - HTML 转义
        - dangerouslySetInnerHTML

#### React 组件
1.
#### React 数据流
#### React 生命周期
#### React 与 DOM
