export class AudioManager{
constructor(){this.ctx=null;this.muted=false;this.track=new Audio(new URL('audio/warm-window.wav',document.baseURI).href);this.track.loop=true;this.track.preload='auto';this.track.addEventListener('error',()=>this.onError?.('音樂載入失敗，音效仍可使用。'))}
async start(){if(!this.ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)throw Error('未提供 Web Audio');this.ctx=new C();this.master=this.ctx.createGain();this.music=this.ctx.createGain();this.fx=this.ctx.createGain();this.master.gain.value=this.muted?0:.7;this.music.gain.value=Number(document.getElementById('music').value);this.fx.gain.value=Number(document.getElementById('fx').value);this.music.connect(this.master);this.fx.connect(this.master);this.master.connect(this.ctx.destination);this.source=this.ctx.createMediaElementSource(this.track);this.source.connect(this.music)}await this.resume()}
tone(f,d=.2,v=.1){if(!this.ctx||this.ctx.state!=='running')return;const o=this.ctx.createOscillator(),g=this.ctx.createGain(),t=this.ctx.currentTime;o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(this.fx);o.start();o.stop(t+d+.03);o.onended=()=>{o.disconnect();g.disconnect()}}
echo(){[220,293.66,392].forEach((f,i)=>setTimeout(()=>this.tone(f,.35,.12),i*450))}
pause(){this.track.pause();if(this.ctx?.state==='running')this.ctx.suspend().catch(console.warn)}
async resume(){if(this.ctx){await this.ctx.resume();try{await this.track.play()}catch(e){this.onError?.('請按開聲重試播放音樂。')}}}
volume(bus,value){if(this.ctx)this[bus].gain.setTargetAtTime(value,this.ctx.currentTime,.05)}
mute(){this.muted=!this.muted;if(this.ctx)this.master.gain.setTargetAtTime(this.muted?0:.7,this.ctx.currentTime,.05)}
}
