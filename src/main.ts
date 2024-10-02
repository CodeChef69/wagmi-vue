import { Buffer } from 'buffer'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// `@coinbase-wallet/sdk` uses `Buffer`
globalThis.Buffer = Buffer

import App from './App.vue'
import './style.css'
import { config } from './wagmi'

const app = createApp(App)
const pinia = createPinia();

app.use(WagmiPlugin, { config }).use(VueQueryPlugin, {})
app.use(pinia)

app.mount('#app')
