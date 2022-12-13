## PDD

presentation-domain-data

分模块 - 功能优先

参考文档:

- [聊聊中后台前端应用：目录结构划分模式](https://ourai.ws/posts/patterns-of-directory-structure-in-frontend-projects/)

### 设计

![](./layered-architecture-705913b8aa209bb0ef9a6b14f10ca127699e36512675616c6511fabe1f443070.png.jpeg)
![](./layered-f35bef5d7c4f751b7f247e48ce06a6f5345451d0957b70995ae8e285835db905.png)
![](./modularized-65181c23afec961b70b37c0686799a05518a94f154f1254e1da2869b4fd77fa0.png)

### 目录结构

```
project/src
   ├── [domain-specific-module]
   │   ├── views
   │   │   ├── [detail-view]
   │   │   │   ├── [DetailViewComponent].tsx
   │   │   │   ├── ...
   │   │   │   └── style.scss
   │   │   ├── [form-view]
   │   │   │   ├── [FormViewComponent].tsx
   │   │   │   ├── ...
   │   │   │   └── style.scss
   │   │   └── [list-view]
   │   │       ├── [ListViewComponent].tsx
   │   │       ├── ...
   │   │       └── style.scss
   │   ├── widgets
   │   │   └── [domain-specific-widget]
   │   │       └── ...
   │   ├── helper.ts
   │   ├── index.ts
   │   ├── model.ts
   │   ├── repository.ts
   │   └── ...
   ├── entry
   │   ├── aspects
   │   │   ├── http.ts
   │   │   ├── router.ts
   │   │   ├── ...
   │   │   └── index.ts
   │   ├── layouts
   │   │   └── ...
   │   └── router
   │       └── ...
   ├── shared
   │   └── ...
   ├── App.tsx
   └── main.ts
```
