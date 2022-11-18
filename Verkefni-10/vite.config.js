import {resolve} from 'path'
import{defineConfig} from 'vite'

export default defineConfig({
    build:{
        rollupOptions:{
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'camera.html'),
                admin: resolve(__dirname, 'map.html'),
            }
        }
    }
})