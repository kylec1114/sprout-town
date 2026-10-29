import {defineConfig} from 'vite';
export default defineConfig({plugins:[{name:'bakery-entry',transformIndexHtml:{order:'pre',handler(){return[{tag:'script',attrs:{type:'module',src:'/src/chapter8-entry.js'},injectTo:'body'}]}}}],build:{rollupOptions:{input:{main:'index.html',episodes:'episodes.html'}}}});
