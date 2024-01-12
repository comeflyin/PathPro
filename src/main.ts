import { createApp } from "vue"
import "@/assets/main.css"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import { lazyLoadDirective } from "@/utils/LazyLoadDirective"

const pinia = createPinia()
const app = createApp(App)

app.directive("lazy", lazyLoadDirective)

app.use(router).use(pinia)
app.mount("#app")
