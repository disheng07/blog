### 类型注解

```
# 这里的 string 定义了参数类型为字符串，其他类型则会报错
function greeter(person:string){
  console.log('hello'+person)
}
greeter('disheng')
```

### 接口

```
# 对象传参校验
# 使用 interface 首字母大写,I 开头，分别定义传入的参数类型
# ?表示可选
interface IPerson{
  firstName: string;
  lastName: string;
  middleName?:string
}
function greeter(person:IPerson){
  console.log(`hello ${person.firstName} ${person.lastName}`)
}
```

### 类型断言(类型转换)

```
// 当你比类型检查器更清楚一个表达式的类型的时候，你可以通过这种方式通知TypeScript

document.getElementById('root') as HTMLElement

// 等同于
document.getElementById('root')！

1. <>
2. as
```

### 基础类型

1. 布尔值 boolean
2. 数字 number
3. 字符串 string
4. 数组 number[] || Array<number>
5. any 任意值
6. void 没有任何类型。常在在函数没有返回值
   ```
   function alertName(): void {
      alert('My name is Tom');
    }
   ```
7. null
8. undefined
9. 变量如果在声明的时候，未声明类型的变量，默认是任意值类型

   ```
   let something;
   something = 'seven';
   something = 7;

   something.setName('Tom');
   ```

### 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。使用`|`分隔

```
  let myFavoriteNumber: string | number;
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
```

### 对象类型

`Interface` 定义对象类型

1. 简单例子

   ```
   # 接口类型一般首字母大写，加上 I 前缀
   # 定义的接口类型不能多也不能少
   interface IPerson {
      name: string;
      age: number;
    }

   let tom: IPerson = {
      name: 'Tom',
      age: 25
    };
   ```

2. 可选属性，常用`?`标识，仍然不允许添加未定义的接口 

   ```
   interface IPerson {
      name: string;
      age?: number;
    }

   let tom: IPerson = {
      name: 'Tom',
      age: 25
    };
   ```

3. 任意属性
   ```
   # 使用 [propName: string] 定义了任意属性取 string 类型的值。
   interface IPerson {
     name:string;
     age?:number;
     [propName:string]:string
   }
   let tom: IPerson = {
      name: 'Tom',
      age: 25,
      gender:'male'
    };
   ```
4. 只读属性
   ```
   # 使用 readOnly 定义只读属性
   interface IPerson {
     readOnly id:number
     name:string;
     age?:number;
     [propName:string]:any
   }
   ```

### 数组类型

1. 「类型 + 方括号」表示法
   ```
   let fibonacci: number[] = [1, 1, 2, 3, 5];
   # 数组的项中不允许出现其他的类型,除了 number
   ```
2. 数组泛型，使用 `Array<elemType>`
   ```
   let fibonacci: Array<number> = [1, 1, 2, 3, 5];
   ```
3. 用接口表示数组
   ```
    interface INumberArray {
      [index: number]: number;
    }
    let fibonacci: INumberArray = [1, 1, 2, 3, 5];
   ```
4. any 在数组中的应用
   ```
    # any 表示数组中允许出现任意类型
    let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
   ```
5. 类数组
   ```
   function sum() {
    let args: IArguments = arguments;
   }
   ```

### 函数类型

1. 函数声明
   ```
   # 输入输出进行约束
   function sum(x: number, y: number): number {
    return x + y;
   }
   ```
2. 函数表达式
   ```
   let mySum = function (x: number, y: number): number {
    return x + y;
   };
   ```
3. 用接口定义函数的形状
   ```
   interface ISearchFunc {
      (source: string, subString: string): boolean;
   }
   let mySearch: ISearchFunc;
   mySearch = function(source: string, subString: string) {
      return source.search(subString) !== -1;
   }
   ```
4. 可选参数
   ```
   # 可选参数后面不允许再出现必须参数了
   function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
   }
   let tomcat = buildName('Tom', 'Cat');
   let tom = buildName('Tom');
   ```
5. 参数默认值
   ```
   # TypeScript 会将添加了默认值的参数识别为可选参数
   # 不受「可选参数必须接在必需参数后面」的限制了
   function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
   }
   let tomcat = buildName('Tom', 'Cat');
   let tom = buildName('Tom');
   ```
6. 剩余参数
   ```
   function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
   }
   let a = [];
   push(a, 1, 2, 3);
   ```
7. 重载
   ```
   # 重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现
   # TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
     function reverse(x: number): number;
     function reverse(x: string): string;
     function reverse(x: number | string): number | string {
       if (typeof x === 'number') {
           return Number(x.toString().split('').reverse().join(''));
       } else if (typeof x === 'string') {
           return x.split('').reverse().join('');
       }
     }
   ```

### 类型断言

1. 语法
   ```
   <类型>值
   或者
   值 as 类型
   function getLength(something: string | number): number {
    # 这里将 something 断言成 string 类型
    # 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
    # <boolean>something 将会报错
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
   }
   ```

### 声明文件

当使用第三方库时，我们需要引用它的声明文件。

1. 声明语句
   ```
   # 使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对
   declare var jQuery: (selector: string) => any;
   jQuery('#foo');
   编译为
   jQuery('#foo');
   ```
2. 声明文件

   ```
   // jQuery.d.ts
   declare var jQuery: (string) => any;
   # 我们约定声明文件以 .d.ts 为后缀

   # 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件
   /// <reference path="./jQuery.d.ts" />
   jQuery('#foo');
   ```

3. 第三方声明文件
   @types 管理声明文件
   ```
   npm install @types/jquery --save-dev
   ```

### 内置对象

1. ECMAScript 的内置对象
   ```
   let b: Boolean = new Boolean(1);
   let e: Error = new Error('Error occurred');
   let d: Date = new Date();
   let r: RegExp = /[a-z]/;
   ```
2. BOM 和 DOM 的内置对象
   ```
   # Document、HTMLElement、Event、NodeList 等。
   let body: HTMLElement = document.body;
   let allDiv: NodeList = document.querySelectorAll('div');
   document.addEventListener('click', function(e: MouseEvent) {
   // Do something
   });
   ```
3. TypeScript 核心库的定义文件
4. 用 TypeScript 写 Node.js
   ```
   # Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
   npm install @types/node --save-dev
   ```

### 类型别名

    ```
    # 类型别名用来给一个类型起个新名字
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
      if (typeof n === 'string') {
          return n;
      } else {
          return n();
      }
    }
    ```

### 字符串字面量类型

```
# 字符串字面量类型用来约束取值只能是某几个字符串中的一个。
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
```

### 类

1. public private 和 protected
   ```
   public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
   private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
   protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
   ```
2. 抽象类
   ```
   # 首先，抽象类是不允许被实例化的
   # 其次，抽象类中的抽象方法必须被子类实现：
   abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
   }
   let a = new Animal('Jack');
   // index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.Î
   ```
