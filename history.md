
### 2.0.11/12
- 非兼容性更新:删除setDataByDefault函数，需要可通过deepClone+mergeData实现
- 非兼容性更新:Data => UtilsData
- UtilsData初始化时添加格式化函数

### 2.0.9/10
- 修正triggerFunction的类型
- 删除env的默认process取值

### 2.0.8
- 非兼容性更新:getDefaultData=>getDefaultValue/setDefaultData=>setDefaultValue
- 添加mergeData/updateData

### 2.0.6/7
- 实现接口-DataWithLife
- 优化resetEnvData函数
- 类型优化：减少any

### 2.0.4
- 简化setProp/getProp函数
- 添加setComplexProp/getComplexProp函数

### 2.0.3
- 添加observe/reactive模块

### 2.0.1
- 基于complex-utils简化逻辑，实现基本的工具函数功能

