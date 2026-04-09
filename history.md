### 2.10.5
- refactor: 将TypeScript类型导入语法升级为type关键字形式

### 2.10.4
- fix: 修正 `parseNum` 处理小数时可能存在的浮点数问题。

### 2.10.3
- fix: 修正 `getRandomInList` 调用 `getRandomNum` 生成随机数时未正确传递end的BUG。

### 2.10.2
- refactor(build): 移除项目的所有构建配置，回归到纯源码模式，依赖于引用项目的构建工具进行即时编译。
- feat(api): 创建了统一的 `index.ts` API 入口，明确导出了库的所有公共成员，增强了API的稳定性和可维护性。

### 2.10.1
- feat(test): 集成 `Vitest` 单元测试框架，并添加 `test` 和 `coverage` 脚本。
- test: 为 `camelToLine` 函数添加单元测试。
- fix(observe): 修复 `traverse` 函数中 `observeProp` 的拼写错误。
- fix(number): 修复 `parseNum` 函数对负数处理不当的BUG。
- refactor(object): 优化 `deepClone` 函数的API，通过 `useComplex` 参数明确区分两种拷贝模式，并更新文档。
- perf(object): 优化 `formatTree` 函数的性能，通过替换 `concat` 为 `push` 来减少内存分配。
- refactor(function): 增强 `debounce` 和 `throttle` 函数的TypeScript类型定义，提高类型安全和开发者体验。
- refactor(observe): 修正响应式模块中的拼写错误 (`oberveProp` -> `observeProp`) 并进行微小优化。
- refactor(worker): 优化 `startWorker` 函数，添加关于闭包限制的重要文档并增强返回类型安全。
- refactor(utils): 使用标准的 `URL` API 重构 `parseUrl` 函数，提高健壮性和功能，并同步更新 `isOriginUrl`。

### 2.9.1/2
- feat: 修改模块加载逻辑为ES2020

### 2.8.8
- fix: 修正 `parseLayout` 函数在 `contentWidth` < `minWidth` 时的计算错误。
- fix: 修正 `parseLayout` 函数在 `size`=1 时的 `offset` 错误计算。

### 2.8.6/7
- feat: 为 `parseLayout` 添加边界判断函数 `isLayoutBoundary`。

### 2.8.5
- fix: 修正 `parseLayout` 函数未传递 `offset` 的BUG。

### 2.8.4
- feat: 添加颜色解析函数 `parseColor`。

### 2.8.3
- refactor: 基于AI进行全局代码优化。

### 2.8.2
- refactor: 将部分函数的 `prop` 类型由 `string` 放宽至 `PropertyKey`。

### 2.8.1
- chore: 稳定版更新。

### 2.6.12/16
- refactor: 全局类型和逻辑优化。

### 2.6.11
- refactor: 优化 `Wait` 类中的提示相关逻辑。

### 2.6.10
- refactor: 简化 `isEmpty` 和 `trimData` 函数。

### 2.6.9
- refactor: 删除 `transformFile` 函数。
- feat: 添加 `Base64ToBlob`, `Base64ToFile`, `BlobToBase64`, `BlobToFile`, `FileToBlob` 等文件类型转换函数。

### 2.6.8
- fix: 修正 `storage.getData` 的时间计算错误的BUG。

### 2.6.7
- refactor!: **[非兼容性更新]** `setEnv` 函数的 `prop` 和 `data` 参数顺序调换, `getEnv` 参数变为必传。
- refactor: 优化参数和类型定义。

### 2.6.6
- fix: 修正 `isComplex` 和 `deepCloneData` 中类型判断未使用 `getComplexType` 的错误。

### 2.6.5
- refactor: 优化 `storage` 逻辑。

### 2.6.3
- feat: 添加 `parseLayout` 函数，用于根据布局参数计算内容的宽度和数量。

### 2.6.1/2
- refactor: 优化 `ENV` 逻辑，删除 `mode` 数据，简化结构。
- chore: 双数稳定版更新。

### 2.3.3/4
- feat: 添加 `Wait` 类，实现加载等待逻辑。
- refactor: 优化本地缓存前缀，简化长度。

### 2.3.1/2
- refactor: 优化 `Life` 相关逻辑。

### 2.2.16/18
- refactor: 优化 `undefined` 判断逻辑。

### 2.2.13/14/15
- refactor: 简化 `config` 结构。
- perf: 优化 `debounce` 和 `throttle` 函数。

### 2.2.12
- refactor: 删除 `getProp/setPropByType` 函数。
- refactor: 限定带路径解析的属性设置函数为 `getComplexProp` / `setComplexProp`。

### 2.2.11
- refactor: 优化 `env` 环境的 `life` 逻辑。
- feat: 为 `storage` 添加 `clear` 方法。
- refactor: 其他代码和类型优化。

### 2.2.10
- refactor: 全局减少 `Record<PropertyKey, unknow>` 类型的使用。

### 2.2.9
- refactor: 删除 `loadContexts` 函数。

### 2.2.7/8
- refactor!: **[非兼容性更新]** 删除原 `isComplex`，`checkComplex` 重命名为 `isComplex`。

### 2.2.5/6
- refactor: 删除 `getQueryUrl` 函数。

### 2.2.4
- refactor: 优化 `storage` 相关函数，分离时间和数据存储，优化存储容量。

### 2.2.3
- refactor: 重构 `Life` 相关逻辑。

### 2.2.0/1/2
- refactor: 重构 `Data` 及 `Life` 相关逻辑。
- refactor: 重构本地缓存相关逻辑。

### 2.1.4
- refactor: 优化 `defineReactive` 和 `getLocalData`。

### 2.1.3
- refactor: 全局类型优化。

### 2.1.2
- refactor!: **[非兼容性更新]** `getRandomNum` 的第二个参数由 `size` (长度) 修正为 `end` (结束值)。
- feat: `formatConfig` 添加 `module` 判断值。

### 2.1.1
- refactor!: **[非兼容性更新]** `camelToUnderline`/`underlinetoCamel` 重命名为 `camelToLine`/`linetoCamel`。
- refactor: `observe` 不再对 `File`/`Blob` 等特殊类型进行响应式构建。

### 2.1.0
- chore: 稳定版本。

### 2.0.14
- feat: 添加 `camelToUnderline`/`underlinetoCamel` 函数。

### 2.0.11/12/13
- refactor!: **[非兼容性更新]** 删除 `setDataByDefault` 函数。
- refactor!: **[非兼容性更新]** `Data` 重命名为 `UtilsData`。
- feat: `UtilsData` 初始化时添加格式化函数。
- feat: 扩展格式化函数的参数，添加级别和推荐值。

### 2.0.9/10
- fix: 修正 `triggerFunction` 的类型。
- refactor: 删除 `env` 的默认 `process` 取值。

### 2.0.8
- refactor!: **[非兼容性更新]** `getDefaultData`/`setDefaultData` 重命名为 `getDefaultValue`/`setDefaultValue`。
- feat: 添加 `mergeData`/`updateData`。

### 2.0.6/7
- feat: 实现 `DataWithLife` 接口。
- refactor: 优化 `resetEnvData` 函数。
- refactor: 类型优化，减少 `any` 的使用。

### 2.0.4
- refactor: 简化 `setProp`/`getProp` 函数。
- feat: 添加 `setComplexProp`/`getComplexProp` 函数。

### 2.0.3
- feat: 添加 `observe`/`reactive` 模块。

### 2.0.1
- feat: 项目初始化，实现基本的工具函数功能。
