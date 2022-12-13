## React DDD

使用 hooks 来完成 DDD 核心逻辑

实际上, 其并没有规范整体的目录结构, 而是只细化了核心的业务逻辑应该怎么用 hooks 来抽象处理

参考文档:

- [如何结合整洁架构和 MVP 模式提升前端开发体验（二） - 代码实现篇](https://www2.jianshu.com/p/3e54d61568aa?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)
- [React DDD](http://www.wuzhaoyi.xyz/2021/01/14/react%20ddd/74.HookDDD)

### 1. model-service-presenter

参考 List, 这里 service 使用了原生类来实现, 但实际上也可以直接使用 hook 来做.(用原生类来实现的方式, 也提供了一种脱离 hooks 的思路)

- useModel: 定义页面所需的状态
- useService: 定义业务逻辑
- usePresenter: 包含一些页面交互逻辑的控制

```
const useModel = () => {
  const [state, setState] = useState()

  return {state, setState}
}

const useService = () => {
  const model = useModel();

  // 各种业务逻辑方法
  const getRemoteData = () => {};

  return { model, getRemoteData };
};

const usePresenter = () => {
  const service = useService();
  const { model } = service;

  // 调用 service 方法处理 view 事件

  return {
    model,
    service,
  };
};
```

### 2. useService

也是类似的, 使用 useService 来封装整个逻辑, 同时去掉了 useModel 和 usePresenter.

- useModel 单独封装状态 getter 和 setter 其他没有太大的必要, 如果太复杂, 可以封装额外的 service 来处理.
- usePresenter 包含跟视图交互的逻辑, 可以直接放到视图组件中

另外给出了全局共享 service 的方案, 使用 context 来实现, 也可以进行局部共享. 而第 1 种方案介绍中, 是使用了其他状态管理库来实现共享

### 3. 参考 teleport webapps 源码

复制了一份目录 Apps, 可以查看其用法

基本上每个功能对应一个 hooks, 包含了所有的业务逻辑, 复杂的时候可以拆分成多个进行组合. 需要局部共享的时候,可以使用 context 方案提供
