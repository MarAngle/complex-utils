
### 2.6.7
- 非兼容性更新:setEnv参数prop和data顺序调换,getEnv参数必传
- 优化参数和类型

### 2.6.6
- 修正isComplex和deepCloneData中类型判断未使用getComplexType的错误

### 2.6.5
- 优化storage逻辑

### 2.6.3
- 添加parseLayout函数,实现给定的布局参数计算内容的宽度和数量

### 2.6.1/2
- 优化ENV逻辑，删除mode数据，简化结构
- 双数稳定版

### 2.3.3/4
- 添加Wait类，实现加载等待逻辑
- 优化本地缓存前缀，简化长度

### 2.3.1/2
- 优化Life相关逻辑

### 2.2.16/18
- 优化undefined判断

### 2.2.13/14/15
- config结构简化
- 优化防抖和节流

### 2.2.12
- 删除getProp/setPropByType函数
- 因setProp可能存在的大量调用，setProp不解析'a.b'的prop,需要解析'a.b'的prop的相关函数限定为getComplexProp/setComplexProp

### 2.2.11
- env环境life优化
- storage添加clear
- 其他代码和类型优化

### 2.2.10
- 全局减少Record<PropertyKey, unknow>类型的使用

### 2.2.9
- 删除loadContexts

### 2.2.7/8
- 删除原isComplex,checkComplex=>isComplex

### 2.2.5/6
- 删除getQueryUrl

### 2.2.4
- storage相关函数优化，分离时间和数据存储，优化存储容量

### 2.2.3
- 重构Life相关逻辑

### 2.2.0/1/2
- 重构Data/Life相关逻辑
- 重构本地缓存相关逻辑

### 2.1.4
- defineReactive优化
- getLocalData优化

### 2.1.3
- 类型优化

### 2.1.2
- 非兼容性更新:getRandomNum的第二个参数由之前的size长度修正为end结束值,调用逻辑简单明了
- formatConfig添加module判断值判断是否是模块

### 2.1.1
- 非兼容性更新:camelToUnderline/underlinetoCamel=>camelToLine/linetoCamel
- observe不对File/Blob等特殊类型进行响应式构建

### 2.1.0
- 稳定版本

### 2.0.14
- 添加camelToUnderline/underlinetoCamel函数

### 2.0.11/12/13
- 非兼容性更新:删除setDataByDefault函数，需要可通过deepClone+mergeData实现
- 非兼容性更新:Data => UtilsData
- UtilsData初始化时添加格式化函数
- 扩展格式化函数的参数，添加级别和推荐值

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

