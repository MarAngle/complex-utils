# Complex-Utils

`complex-utils` 是一个功能强大且全面的 TypeScript/JavaScript 工具库，旨在为现代Web开发提供一组高效、可靠的辅助函数和类。

## ✨ 功能特性

- **类型安全**: 使用 TypeScript 编写，提供强大的类型支持。
- **模块化**: 所有功能均以独立的模块导出，支持摇树优化（Tree Shaking）。
- **功能丰富**: 涵盖对象操作、异步控制、数字格式化、数据结构转换等多个方面。
- **环境兼容**: 可同时在浏览器和 Node.js 环境下工作。

## 🚀 安装

```bash
npm install complex-utils
```

## 📚 API 文档 & 用法

### Class (面向对象工具)

#### `Life` - 事件与生命周期管理器

一个强大的发布-订阅（Pub/Sub）系统，用于管理事件回调和生命周期。

```javascript
import { Life } from 'complex-utils';

const life = new Life();

// 订阅事件
const id = life.on('data-loaded', (data) => {
  console.log('Data has been loaded:', data);
});

// 触发事件
life.trigger('data-loaded', { user: 'Alice' });

// 取消订阅
life.off('data-loaded', id);
```

#### `Limit` - 白名单/黑名单限制器

轻松实现功能的白名单或黑名单控制。

```javascript
import { Limit } from 'complex-utils';

// 黑名单模式 (默认)
const blackList = new Limit({ list: ['admin'] });
console.log(blackList.getLimit('admin')); // true (被限制)
console.log(blackList.getLimit('user'));  // false (不被限制)

// 白名单模式
const whiteList = new Limit({ type: 'allow', list: ['user'] });
console.log(whiteList.getLimit('admin')); // true (被限制)
console.log(whiteList.getLimit('user'));  // false (不被限制)
```

### Function (函数工具)

#### `debounce` - 函数防抖

在事件频繁触发时，确保函数只在最后一次触发后的指定时间内执行一次。

```javascript
import { debounce } from 'complex-utils';

window.addEventListener(
  'resize',
  debounce(() => {
    console.log('Window resized!');
  }, 250)
);
```

#### `throttle` - 函数节流

确保函数在指定的时间间隔内最多只执行一次。

```javascript
import { throttle } from 'complex-utils';

window.addEventListener(
  'scroll',
  throttle(() => {
    console.log('User is scrolling!');
  }, 100)
);
```

### Object (对象和数组工具)

#### `deepClone` - 深拷贝

提供两种深拷贝模式，满足不同需求。

```javascript
import { deepClone } from 'complex-utils';

const obj = { a: 1, b: { c: new Date() } };

// 快速模式 (默认, 基于 JSON.stringify)
const clonedObj1 = deepClone(obj);

// 复杂模式 (支持 Map, Set, 循环引用等)
const clonedObj2 = deepClone(obj, true);
```

#### `formatTree` - 列表转树形结构

高效地将包含 `id` 和 `parentId` 的扁平数组转换为嵌套的树形结构。

```javascript
import { formatTree } from 'complex-utils';

const list = [
  { id: 1, name: 'Root', parentId: 0 },
  { id: 2, name: 'Child A', parentId: 1 },
  { id: 3, name: 'Child B', parentId: 1 },
];

const tree = formatTree(list).parse();
/*
[
  {
    id: 1,
    name: 'Root',
    parentId: 0,
    children: [
      { id: 2, name: 'Child A', parentId: 1 },
      { id: 3, name: 'Child B', parentId: 1 }
    ]
  }
]
*/
```

#### `getComplexProp` - 安全地获取深层属性

通过点分隔的字符串路径安全地访问对象的深层属性。

```javascript
import { getComplexProp } from 'complex-utils';

const user = {
  name: 'Alice',
  address: {
    city: 'Wonderland',
    zip: 12345
  }
};

const city = getComplexProp(user, 'address.city'); // 'Wonderland'
const street = getComplexProp(user, 'address.street'); // undefined
```

... 以及更多强大的工具函数等待您的探索！

## 🧪 单元测试

项目使用 [Vitest](https://vitest.dev/) 进行单元测试，以确保代码的质量和可靠性。

- **运行测试**:
  ```bash
  npm test
  ```

- **生成测试覆盖率报告**:
  ```bash
  npm run coverage
  ```
