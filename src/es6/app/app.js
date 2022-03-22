import { createApp } from 'vue'
import { reactive } from "vue"

createApp({
    setup() {
        const title = 'BEM CSS GRID';
        return { title }
    }
}).mount('#app')