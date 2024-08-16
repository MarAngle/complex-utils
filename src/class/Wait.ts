
export interface WaitInitOption {
  console?: string
  timeout?: number
}

export type waitFunction = () => void

class Wait {
  console?: {
    show: boolean
    value: string
  }
  list: waitFunction[]
  constructor(initOption: WaitInitOption) {
    if (initOption.console !== undefined) {
      this.console = {
        show: false,
        value: initOption.console
      }
    }
    this.list = []
    if (initOption.timeout) {
      setTimeout(() => {
        this.destroy()
      }, initOption.timeout)
    }
  }
  push(value: waitFunction) {
    if (this.console && !this.console.show) {
      console.warn(this.console.value)
      this.console.show = true
    }
    this.list.push(value)
  }
  trigger() {
    this.list.forEach(value => {
      value()
    })
    this.destroy()
  }
  destroy() {
    this.console = undefined
    this.list = []
  }
}

export default Wait
