### 前置

```
npm i -S react-router-dom
```

### EXAMPLE

1. Basic

```
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
```

### GUIDES

1. [react-router 中的三类组件](https://reacttraining.com/react-router/web/guides/basic-components)

```
router components
route matching components
navgation components
// 分别对应的是
import { BrowserRouter, Route, Link } from "react-router-dom"

Routers
1. BrowserRouter: if you have a server that responds to requests
2. HashRouter: if you are using a static file server

Route Matching

import { Route, Switch } from "react-router-dom";
1. <Route>类型
    // when location = { pathname: '/about' }
    <Route path='/about' component={About}/> // renders <About/>
    <Route path='/contact' component={Contact}/> // renders null
    <Route component={Always}/> // renders <Always/>

2. <Switch>类型
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* when none of the above match, <NoMatch> will be rendered */}
      <Route component={NoMatch} />
    </Switch>

Navigation
1. Link
Wherever you render a <Link>, an anchor (<a>) will be rendered in your application’s HTML.
<Link to="/">Home</Link>
2. NavLink
It is a special type of <Link> that can style itself as “active” when its to prop matches the current location.
<NavLink to="/react" activeClassName="hurray">
  React
</NavLink>
3. Redirect
Any time that you want to force navigation, you can render a <Redirect>. When a <Redirect> renders, it will navigate using its to prop.
<Redirect to="/login" />
```

2. [code splitting](https://reacttraining.com/react-router/web/guides/code-splitting)
   ```
    react-loadable
   ```
3. Redux integration

```
[Blocked Updates] (路由发生变化，组件没有更新处理)
import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps)(Something))
```

### API

- [ MemoryRouter ](https://reacttraining.com/react-router/web/api/MemoryRouter)
  1. initialEntries: array
  2. initialIndex: number
  3. getUserConfirmation: func 跳转前的弹窗提示
  4. keyLength: number 默认的 key 长度，默认是 6 位
  5. children: node

```
<MemoryRouter
  initialEntries={["/one", "/two", { pathname: "/three" }]}
  initialIndex={1}
  keyLength={12}
>
  <App />
</MemoryRouter>
```

- [BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string)
  1. basename: string  基础路由
  2. getUserConfirmation: func
  3. forceRefresh: bool
  4. keyLength: number
  5. children: node
  ```
   import { BrowserRouter } from 'react-router-dom'
   <BrowserRouter
     basename={optionalString}
     forceRefresh={optionalBool}
     getUserConfirmation={optionalFunc}
     keyLength={optionalNumber}
   >
     <App/>
   </BrowserRouter>
   <BrowserRouter basename="/calendar"/>
   <Link to="/today"/> // renders <a href="/calendar/today">
  ```
- [HashRouter](https://reacttraining.com/react-router/web/api/HashRouter/basename-string)
  1.  keep your UI in sync with the URL
  2.  hashType: string
      - 默认 "slash“ eg: #/sunshine/lollipops
      - "noslash“ eg: #sunshine/lollipops
      - "hashbang eg: #!/sunshine/lollipops
- [Link](https://reacttraining.com/react-router/web/api/Link)
  1.  to: string 可以包含 pathname hash search
      ```
      <Link to="/courses?sort=name" />
      ```
  2.  to: object
      ```
      <Link
        to={{
          pathname: "/courses",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true }
        }}
        />
      ```
  3.  replace: bool
      ```
      When true, clicking the link will replace the current entry in the history stack instead of adding a new one.
      ```
  4.  innerRef: function
  5.  others
- [NavLink](https://reacttraining.com/react-router/web/api/NavLink/activeclassname-string)
  1.  activeClassName: string
  2.  activeStyle: object
  3.  exact: bool 准确匹配才命中其它配置条件
  4.  strict: bool
  5.  isActive: func
  6.  location: object
  7.  ariaCurrent: string
- Prompt
- [Redirect](https://reacttraining.com/react-router/web/api/Redirect)
  1.  to: string
  2.  to: object
  3.  push: bool
  4.  from: string  可以校验来源的 URL 重定向到 to 的位置
  5.  exact: bool
  6.  strict: bool
- [Route](https://reacttraining.com/react-router/web/api/Route/route-render-methods)
  1.  Route render methods (compontent>render>children)
  2.  Route props (match\location\history) 公共的 props
  3.  component 匹配上 URL 优先级最高
  4.  render: func 函数类型，适用于无状态组件。同样接受 route props，优先级第二
  5.  children: func 函数类型，同样接受 route props，优先级第三
  6.  path: string 跳转路径
  7.  exact: bool 是否要精确匹配
  8.  strict: bool
  9.  location: object
  10. sensitive: bool
- [Router](https://reacttraining.com/react-router/web/api/Router)
  1. instand of <BrowserRouter> <HashRouter> <MemoryRouter> <NativeRouter> <StaticRouter>
  2. history: object
  ```
  // 更新地址栏 url
  // 入口文件 router 出加上 history 配置
  import { Router, Route, Link } from "react-router-dom";
  import createHashHistory from "history/createBrowserHistory";
  const history = createHashHistory();
  <Router history={history}><App /></Router>
  ```
  3. children: node
- [StaticRouter](https://reacttraining.com/react-router/web/api/StaticRouter) server 端
- [Switch](https://reacttraining.com/react-router/web/api/Switch)
  1. 一组 Route 针对没有匹配到的 url 统一返回到 403 404 等
  ```
  import { Switch, Route } from 'react-router'
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/:user" component={User}/>
      <Route component={NoMatch}/>
    </Switch>
     history.push({
            pathname: "/home",
            search: "?the=query"
          });
  ```
- [route props : history](https://reacttraining.com/react-router/web/api/history)
  ```
  {
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere'
  search: '?some=search-string',
  hash: '#howdy',
  state: {
      [userDefined]: true
    }
  }
  - push
  - replace
  - go
  - goBack
  - goForward
  - block
  ```
- [route props : location](https://reacttraining.com/react-router/web/api/location)


- [route props : match](https://reacttraining.com/react-router/web/api/match)
  ```
  params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
  isExact - (boolean) true if the entire URL was matched (no trailing characters)
  path - (string) The path pattern used to match. Useful for building nested <Route>s
  url - (string) The matched portion of the URL. Useful for building nested <Link>s
  ```
- [withRouter](https://reacttraining.com/react-router/web/api/withRouter)
  