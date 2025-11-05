import { describe, it, expect } from 'vitest'
import camelToLine from './camelToLine'

describe('camelToLine', () => {
  it('should convert a simple camelCase string to snake_case', () => {
    expect(camelToLine('helloWorld')).toBe('hello_world')
  })

  it('should handle a string that is already snake_case', () => {
    expect(camelToLine('hello_world')).toBe('hello_world')
  })

  it('should handle a string with multiple uppercase letters', () => {
    expect(camelToLine('myVariableName')).toBe('my_variable_name')
  })

  it('should handle a string that starts with an uppercase letter', () => {
    expect(camelToLine('HelloWorld')).toBe('_hello_world')
  })

  it('should handle an empty string', () => {
    expect(camelToLine('')).toBe('')
  })

  it('should handle a string with no uppercase letters', () => {
    expect(camelToLine('helloworld')).toBe('helloworld')
  })
});
