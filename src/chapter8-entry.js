import {openBakery} from './bakery.js';
const hud=document.getElementById('hud');if(hud&&!document.getElementById('chapter8Button')){const b=document.createElement('button');b.id='chapter8Button';b.textContent='第八關 · 烘焙工作坊';b.onclick=openBakery;(hud.querySelector('.hud-actions')||hud).appendChild(b)}
