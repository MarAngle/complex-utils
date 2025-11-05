import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // 在这里配置你的测试选项
    globals: true, // 使用全局 API (describe, it, expect)，无需导入
    environment: 'jsdom', // 模拟浏览器环境，如果你的代码需要 DOM API
    include: ['src/**/*.test.ts'], // 匹配测试文件的 glob 模式
  },
})
