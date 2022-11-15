## FSD 结构设计

参考文档:

- [FSD](https://feature-sliced.design/)
- [FSD 教程](https://feature-sliced.design/docs/get-started/tutorial)

### 设计

![](./visual_schema-ca092cc631de8c129dfb48174d0a927a.jpeg)
![](./layers_flow-88496fd4047ede3ddbdbd73d4a46ddae.png)

### 目录结构

```
├── app                包含layouts providers router global styles settings
│   ├── index.scss
│   ├── index.tsx
│   ├── providers
│   └── styles
├── entities           实体
│   └── task
├── features           业务功能集合
│   ├── tasks-filters
│   └── toggle-task
├── index.tsx          入口文件
├── pages              页面
│   ├── index.tsx
│   ├── task-details
│   └── tasks-list
└── shared             共享文件
    ├── api
    └── config
```
