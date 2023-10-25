import $exportMsg from "../utils/$exportMsg"

declare const process: {
  env?: {
    NODE_ENV?: string
  }
}

const env = {
  env: {
    data: '',
    real: ''
  },
  mode: {
    data: '',
    real: ''
  },
  canUse: {
    Worker: false,
    Proxy: false,
    Symbol: false,
    MutationObserver: false
  },
  change: []
}

if (process && process.env && process.env.NODE_ENV) {
  env.env.data = process.env.NODE_ENV
  env.env.real = process.env.NODE_ENV
}