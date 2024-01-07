import { createApp } from "vue"
import "@/assets/main.css"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import "vant/lib/index.css"
import { setToastDefaultOptions } from "vant"
setToastDefaultOptions({ duration: 500 })
const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia)
app.mount("#app")
