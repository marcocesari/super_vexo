(function(){"use strict";var ou=document.createElement("style");ou.textContent=`html,body{margin:0;padding:0;width:100%;height:100%;height:100dvh;background:#000;overflow:hidden;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#d6f0ff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}body,#app{position:fixed;inset:0}canvas{display:block;position:fixed;inset:0;width:100%;height:100%;touch-action:none}#cinematic{position:fixed;inset:0;z-index:12;pointer-events:none;color:#e6f3ff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.cinematic__skip{position:absolute;top:calc(1rem + env(safe-area-inset-top));right:calc(1.25rem + env(safe-area-inset-right));font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6aa3d1;opacity:.65}.cinematic__text{position:absolute;left:0;right:0;bottom:12%;text-align:center;padding:0 2rem;opacity:0;transition:opacity .9s ease;text-shadow:0 0 18px rgba(80,160,255,.4),0 2px 8px rgba(0,0,0,.85)}.cinematic__text--in{opacity:1}.cinematic__text p{font-size:clamp(1.05rem,2vw,1.6rem);letter-spacing:.04em;line-height:1.5;margin:.3em 0;color:#cbe2ff}.cinematic__flash{position:absolute;inset:0;background:radial-gradient(circle at center,#fff,#d3eaff,#7fb8ee 80%,#112540);opacity:0;pointer-events:none}#title-card{position:fixed;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#080e1e8c,#000000d9 70%);transition:opacity .5s ease;opacity:1}#title-card.title-card--hidden{opacity:0;pointer-events:none}.title-card__inner{text-align:center;padding:2rem 3rem}.title-card__title{font-size:clamp(1.6rem,4vw,3rem);letter-spacing:.05em;margin:0 0 1.5rem;color:#b8e0ff;text-shadow:0 0 24px rgba(80,160,255,.4)}.title-card__prompt{font-size:clamp(.9rem,1.5vw,1.1rem);color:#6aa3d1;margin:0;animation:pulse 1.4s ease-in-out infinite}@keyframes pulse{0%,to{opacity:.5}50%{opacity:1}}#tablet-hint{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;padding:4px 10px;background:#0a141eb3;color:#9ab3c9;font:11px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;border:1px solid rgba(120,160,200,.18);pointer-events:none}#tablet-hint[hidden]{display:none}#tablet{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;pointer-events:none}.tablet-frame{padding:6px;background:linear-gradient(135deg,#1a232e,#0a0f15);border-radius:14px;box-shadow:0 4px 24px #0009,inset 0 0 0 1px #ffffff0d}.tablet-bezel{padding:6px;background:#050709;border-radius:10px}.tablet-screen{width:220px;padding:10px 12px;background:linear-gradient(180deg,#061320,#03070d);border-radius:6px;font-size:12px;line-height:1.5;color:#9fd1ff;box-shadow:inset 0 0 18px #3278c81f}.tablet-titlebar{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid rgba(80,140,200,.18);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1}.tablet-app{font-weight:600}.tablet-source{padding:1px 6px;border-radius:3px;background:#50a0ff1f;color:#b8e0ff}.tablet-row{display:flex;justify-content:space-between}.tablet-row--small{font-size:10px;opacity:.7;margin-top:4px}.tablet-row--hint{margin-top:8px;padding-top:6px;border-top:1px solid rgba(80,140,200,.12);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1;opacity:.7;text-align:right}.tablet-label{color:#6aa3d1}.tablet-value{color:#d6f0ff;font-variant-numeric:tabular-nums}.tablet-app-btn{display:flex;margin-top:10px;width:100%;padding:8px 10px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:6px;color:#d6f0ff;font-family:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .4s ease}.tablet-app-btn--visible{opacity:1;pointer-events:auto}.tablet-app-btn:hover:not(:disabled){background:linear-gradient(135deg,#235080,#103050)}.tablet-app-btn:active:not(:disabled){transform:translateY(1px)}.tablet-app-btn:disabled{cursor:progress;opacity:.65}.tablet-app-btn--active{box-shadow:0 0 16px #78c8ff99}.tablet-app-btn__icon{font-size:14px;opacity:.85}.tablet-app-btn__label{flex:1;text-align:left;font-weight:600}.tablet-app-btn__key{padding:1px 6px;border-radius:3px;background:#78b4f02e;font-size:10px}.tablet-mission{margin-top:8px;padding-top:8px;border-top:1px solid rgba(80,140,200,.18)}.tablet-hack{margin-top:8px;padding:8px;background:#50a0ff14;border:1px solid rgba(120,180,240,.35);border-radius:4px}.tablet-hack__name{font-size:11px;font-weight:700;letter-spacing:.1em;color:#d6f0ff}.tablet-hack__hint{font-size:10px;color:#9adfff;opacity:.85;margin-bottom:4px}.tablet-hack__bar{height:6px;background:#ffffff14;border-radius:3px;overflow:hidden}.tablet-hack__fill{height:100%;width:0%;background:linear-gradient(90deg,#4aa3ff,#9adfff);transition:none}.screen-overlay{position:fixed;inset:0;z-index:8;display:flex;align-items:center;justify-content:center;padding:2rem;background:radial-gradient(ellipse at center,#080e1ec7,#000000eb 80%);pointer-events:auto}.screen-overlay[hidden]{display:none}.screen-card{max-width:460px;max-height:84vh;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:1.6rem 1.8rem;background:linear-gradient(160deg,#0e1e30,#050a14);border:1px solid rgba(120,180,240,.3);border-radius:10px;box-shadow:0 8px 36px #0000008c,inset 0 0 0 1px #ffffff08;color:#d6f0ff;text-align:center}.screen-card--wide{max-width:520px;text-align:left}.screen-card{scrollbar-width:thin;scrollbar-color:rgba(120,180,240,.4) transparent}.screen-card::-webkit-scrollbar{width:6px}.screen-card::-webkit-scrollbar-track{background:transparent}.screen-card::-webkit-scrollbar-thumb{background:#78b4f066;border-radius:3px}.screen-card__title{margin:0 0 .5rem;font-size:clamp(1.2rem,2.2vw,1.8rem);letter-spacing:.08em;color:#b8e0ff}.screen-card__body{color:#9fc6e7;font-size:.95rem;line-height:1.5}.screen-card__row{margin:.8rem 0}.screen-card__hint{margin:0 0 .8rem;padding-bottom:.6rem;border-bottom:1px solid rgba(80,140,200,.15);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6aa3d1;opacity:.75;text-align:center}.screen-card__credits{font-size:1.1rem;font-weight:700;color:#ffdf80}.screen-card__credits-label{font-size:.7rem;letter-spacing:.15em;color:#6aa3d1;margin-right:6px;font-weight:400}.screen-card__actions{display:flex;justify-content:center;gap:10px;margin-top:1rem}.screen-btn{padding:8px 14px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:5px;color:#d6f0ff;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.screen-btn--primary{background:linear-gradient(135deg,#2660a0,#154070);border-color:#a0dcff99}.screen-btn--small{padding:5px 10px;font-size:11px}.screen-btn:hover:not(:disabled){filter:brightness(1.15)}.screen-btn:disabled{opacity:.45;cursor:not-allowed}.upgrade-list{list-style:none;padding:0;margin:0}.upgrade-item{padding:10px 12px;margin-bottom:8px;background:#50a0ff0f;border:1px solid rgba(120,180,240,.18);border-radius:6px}.upgrade-item--bought{opacity:.65;border-color:#64dcb466}.upgrade-item__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.upgrade-item__name{font-weight:700;color:#d6f0ff;letter-spacing:.05em}.upgrade-item__cost{color:#ffdf80;font-weight:700;font-variant-numeric:tabular-nums}.upgrade-item__desc{margin:4px 0 8px;font-size:12px;color:#9fc6e7;line-height:1.4}#warp-flash{position:fixed;inset:0;background:radial-gradient(circle at center,#fff,#c4dfff,#6aa3d1 80%,#0a1a30);pointer-events:none;opacity:0;z-index:6;transition:none}@media(max-height:480px){.title-card__inner{padding:1rem 1.5rem;max-width:62vw}.title-card__title{font-size:clamp(1rem,2.6vw,1.6rem);margin-bottom:.9rem}.title-card__prompt{font-size:.85rem}.cinematic__text{bottom:8%}.cinematic__text p{font-size:1rem;line-height:1.35}.tablet-screen{width:180px;font-size:11px}.screen-overlay{padding:1rem}.screen-card{padding:1rem 1.2rem;max-height:88vh}.screen-card__title{font-size:1.1rem}.upgrade-item{padding:8px 10px;margin-bottom:6px}}@media(max-width:480px){.tablet-screen{width:min(58vw,220px)}.title-card__inner{padding:1.5rem 1rem}}#landing-banner{position:fixed;left:50%;bottom:calc(2.2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;padding:.7rem 1.5rem;text-align:center;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none;transition:opacity 1.2s ease}#landing-banner[hidden]{display:none}.landing-banner--fading{opacity:0}.landing-banner__town{font-size:10px;letter-spacing:.22em;color:#6aa3d1}.landing-banner__street{margin-top:2px;font-size:1.05rem;letter-spacing:.04em;color:#eaf4ff}.landing-banner__hint{margin-top:6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8fb8d8;opacity:.8}@media(max-height:480px){#landing-banner{bottom:calc(1rem + env(safe-area-inset-bottom));padding:.5rem 1.1rem}.landing-banner__street{font-size:.9rem}}.title-card__build{margin:1.1rem 0 0;font-size:9px;letter-spacing:.16em;color:#4d7ba1;opacity:.65}#stamina-wheel{position:fixed;left:0;top:0;z-index:6;width:56px;height:56px;margin:-28px 0 0 -28px;pointer-events:none;transition:opacity .2s linear}#stamina-wheel[hidden]{display:none}.stamina-wheel__track{fill:none;stroke:#06140e8c;stroke-width:5}.stamina-wheel__fill{fill:none;stroke:#5effa6;stroke-width:4;stroke-linecap:round;transform:rotate(-90deg);transform-origin:28px 28px;filter:drop-shadow(0 0 3px rgba(94,255,166,.7))}.stamina-wheel--winded .stamina-wheel__fill{stroke:#ff8a5c;filter:drop-shadow(0 0 4px rgba(255,138,92,.8))}#foot-prompt{position:fixed;left:50%;bottom:calc(7rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:6;padding:.45rem 1.1rem;font-size:11px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;color:#dceaf7;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none}#foot-prompt[hidden]{display:none}@media(max-height:480px){#foot-prompt{bottom:calc(4.4rem + env(safe-area-inset-bottom));font-size:10px;padding:.35rem .8rem}}#character-label{position:fixed;left:50%;bottom:calc(2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;text-align:center;pointer-events:none}.character-label__name{font-size:1.6rem;letter-spacing:.4em;text-indent:.4em;color:#eaf4ff;text-shadow:0 0 18px rgba(83,255,157,.45)}.character-label__hint{margin-top:6px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6aa3d1;opacity:.75}
/*$vite$:1*/`,document.head.appendChild(ou);const ma="169",zf=0,au=1,Hf=2,cu=1,lu=2,Yn=3,Kn=0,qe=1,De=2,ci=0,Ji=1,Un=2,uu=3,hu=4,Gf=5,Ci=100,Vf=101,Wf=102,Xf=103,qf=104,Yf=200,Kf=201,jf=202,$f=203,ga=204,_a=205,Jf=206,Zf=207,Qf=208,tp=209,ep=210,np=211,ip=212,sp=213,rp=214,xa=0,va=1,ya=2,Zi=3,Ma=4,Sa=5,wa=6,ba=7,Ea=0,op=1,ap=2,li=0,cp=1,lp=2,up=3,du=4,hp=5,dp=6,fp=7,fu="attached",pp="detached",pu=300,Qi=301,ts=302,Ta=303,Aa=304,kr=306,_n=1e3,ui=1001,Br=1002,nn=1003,mu=1004,Ws=1005,hn=1006,zr=1007,jn=1008,$n=1009,gu=1010,_u=1011,Xs=1012,Ra=1013,Pi=1014,En=1015,qs=1016,Ca=1017,Pa=1018,es=1020,xu=35902,vu=1021,yu=1022,xn=1023,Mu=1024,Su=1025,ns=1026,is=1027,Ia=1028,La=1029,wu=1030,Da=1031,Na=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,Ua=35840,Oa=35841,Fa=35842,ka=35843,Ba=36196,za=37492,Ha=37496,Ga=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Ka=37814,ja=37815,$a=37816,Ja=37817,Za=37818,Qa=37819,tc=37820,ec=37821,Xr=36492,nc=36494,ic=36495,bu=36283,sc=36284,rc=36285,oc=36286,mp=2200,gp=2201,_p=2202,Ys=2300,Ks=2301,ac=2302,ss=2400,rs=2401,qr=2402,cc=2500,xp=2501,vp=0,Eu=1,lc=2,yp=3200,Mp=3201,uc=0,Sp=1,hi="",ge="srgb",Ye="srgb-linear",hc="display-p3",Yr="display-p3-linear",Kr="linear",_e="srgb",jr="rec709",$r="p3",os=7680,Tu=519,wp=512,bp=513,Ep=514,Au=515,Tp=516,Ap=517,Rp=518,Cp=519,dc=35044,Ru="300 es",Jn=2e3,Jr=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cu=1234567;const js=Math.PI/180,as=180/Math.PI;function vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function fc(i,t){return(i%t+t)%t}function Pp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ip(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function Lp(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function Dp(i,t=1){return t-Math.abs(fc(i,t*2)-t)}function Np(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Op(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Fp(i,t){return i+Math.random()*(t-i)}function kp(i){return i*(.5-Math.random())}function Bp(i){i!==void 0&&(Cu=i);let t=Cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zp(i){return i*js}function Hp(i){return i*as}function Gp(i){return(i&i-1)===0&&i!==0}function Vp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xp(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Li={DEG2RAD:js,RAD2DEG:as,generateUUID:vn,clamp:Ne,euclideanModulo:fc,mapLinear:Pp,inverseLerp:Ip,lerp:$s,damp:Lp,pingpong:Dp,smoothstep:Np,smootherstep:Up,randInt:Op,randFloat:Fp,randFloatSpread:kp,seededRandom:Bp,degToRad:zp,radToDeg:Hp,isPowerOfTwo:Gp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Wp,setQuaternionFromProperEuler:Xp,normalize:he,denormalize:Tn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],x=s[4],M=s[7],P=s[2],b=s[5],T=s[8];return r[0]=o*_+a*v+c*P,r[3]=o*p+a*x+c*b,r[6]=o*m+a*M+c*T,r[1]=l*_+u*v+h*P,r[4]=l*p+u*x+h*b,r[7]=l*m+u*M+h*T,r[2]=d*_+f*v+g*P,r[5]=d*p+f*x+g*b,r[8]=d*m+f*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pc.makeScale(t,e)),this}rotate(t){return this.premultiply(pc.makeRotation(-t)),this}translate(t,e){return this.premultiply(pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Kt;function Pu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qp(){const i=Js("canvas");return i.style.display="block",i}const Iu={};function Zr(i){i in Iu||(Iu[i]=!0,console.warn(i))}function Yp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Kp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Lu=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Du=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[Ye]:{transfer:Kr,primaries:jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ge]:{transfer:_e,primaries:jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Yr]:{transfer:Kr,primaries:$r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Du),fromReference:i=>i.applyMatrix3(Lu)},[hc]:{transfer:_e,primaries:$r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Du),fromReference:i=>i.applyMatrix3(Lu).convertLinearToSRGB()}},$p=new Set([Ye,Yr]),se={enabled:!0,_workingColorSpace:Ye,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$p.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Zs[t].toReference,s=Zs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zs[i].primaries},getTransfer:function(i){return i===hi?Kr:Zs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Zs[t].luminanceCoefficients)}};function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ls;class Jp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Js("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cs(e[n]/255)*255):e[n]=cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zp=0;class Nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qp=0;class Ue extends Ii{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=ui,s=ui,r=hn,o=jn,a=xn,c=$n,l=Ue.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=vn(),this.name="",this.source=new Nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _n:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _n:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null,Ue.DEFAULT_MAPPING=pu,Ue.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(f+1)/2,P=(m+1)/2,b=(u+d)/4,T=(h+_)/4,I=(g+p)/4;return x>M&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=T/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tm extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends tm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uu extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class em extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let p=1-a;const m=c*d+l*f+u*g+h*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const P=Math.sqrt(x),b=Math.atan2(P,m*v);p=Math.sin(p*b)/P,a=Math.sin(a*b)/P}const M=a*v;if(c=c*p+d*M,l=l*p+f*M,u=u*p+g*M,h=h*p+_*M,p===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new C,Ou=new Ke;class On{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),to.subVectors(this.max,Qs),us.subVectors(t.a,Qs),hs.subVectors(t.b,Qs),ds.subVectors(t.c,Qs),di.subVectors(hs,us),fi.subVectors(ds,hs),Ni.subVectors(us,ds);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ni.z,Ni.y,di.z,0,-di.x,fi.z,0,-fi.x,Ni.z,0,-Ni.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ni.y,Ni.x,0];return!xc(e,us,hs,ds,to)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,us,hs,ds,to))?!1:(eo.crossVectors(di,fi),e=[eo.x,eo.y,eo.z],xc(e,us,hs,ds,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zn=[new C,new C,new C,new C,new C,new C,new C,new C],An=new C,Qr=new On,us=new C,hs=new C,ds=new C,di=new C,fi=new C,Ni=new C,Qs=new C,to=new C,eo=new C,Ui=new C;function xc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ui.fromArray(i,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=t.dot(Ui),l=e.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const nm=new On,tr=new C,vc=new C;class Fn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(vc)),this.expandByPoint(tr.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new C,yc=new C,no=new C,pi=new C,Mc=new C,io=new C,Sc=new C;class so{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yc.copy(t).add(e).multiplyScalar(.5),no.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(yc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(no),a=pi.dot(this.direction),c=-pi.dot(no),l=pi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yc).addScaledVector(no,d),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){Mc.subVectors(e,t),io.subVectors(n,t),Sc.crossVectors(Mc,io);let o=this.direction.dot(Sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const c=a*this.direction.dot(io.crossVectors(pi,io));if(c<0)return null;const l=a*this.direction.dot(Mc.cross(pi));if(l<0||c+l>o)return null;const u=-a*pi.dot(Sc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,p){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,p)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,sm)}lookAt(t,e,n){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),mi.crossVectors(n,dn),mi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),mi.crossVectors(n,dn)),mi.normalize(),ro.crossVectors(dn,mi),s[0]=mi.x,s[4]=ro.x,s[8]=dn.x,s[1]=mi.y,s[5]=ro.y,s[9]=dn.y,s[2]=mi.z,s[6]=ro.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],x=n[7],M=n[11],P=n[15],b=s[0],T=s[4],I=s[8],U=s[12],y=s[1],w=s[5],H=s[9],L=s[13],z=s[2],J=s[6],G=s[10],q=s[14],X=s[3],bt=s[7],St=s[11],k=s[15];return r[0]=o*b+a*y+c*z+l*X,r[4]=o*T+a*w+c*J+l*bt,r[8]=o*I+a*H+c*G+l*St,r[12]=o*U+a*L+c*q+l*k,r[1]=u*b+h*y+d*z+f*X,r[5]=u*T+h*w+d*J+f*bt,r[9]=u*I+h*H+d*G+f*St,r[13]=u*U+h*L+d*q+f*k,r[2]=g*b+_*y+p*z+m*X,r[6]=g*T+_*w+p*J+m*bt,r[10]=g*I+_*H+p*G+m*St,r[14]=g*U+_*L+p*q+m*k,r[3]=v*b+x*y+M*z+P*X,r[7]=v*T+x*w+M*J+P*bt,r[11]=v*I+x*H+M*G+P*St,r[15]=v*U+x*L+M*q+P*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+p*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=h*p*l-_*d*l+_*c*f-a*p*f-h*c*m+a*d*m,x=g*d*l-u*p*l-g*c*f+o*p*f+u*c*m-o*d*m,M=u*_*l-g*h*l+g*a*f-o*_*f-u*a*m+o*h*m,P=g*h*c-u*_*c-g*a*d+o*_*d+u*a*p-o*h*p,b=e*v+n*x+s*M+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=v*T,t[1]=(_*d*r-h*p*r-_*s*f+n*p*f+h*s*m-n*d*m)*T,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*T,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*T,t[4]=x*T,t[5]=(u*p*r-g*d*r+g*s*f-e*p*f-u*s*m+e*d*m)*T,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*T,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=M*T,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*m-e*h*m)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*m+e*a*m)*T,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*T,t[12]=P*T,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*p+e*h*p)*T,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*p-e*a*p)*T,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,p=o*h,m=a*h,v=c*l,x=c*u,M=c*h,P=n.x,b=n.y,T=n.z;return s[0]=(1-(_+m))*P,s[1]=(f+M)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(d+m))*b,s[6]=(p+v)*b,s[7]=0,s[8]=(g+x)*T,s[9]=(p-v)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=fs.set(s[0],s[1],s[2]).length();const o=fs.set(s[4],s[5],s[6]).length(),a=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);const l=1/r,u=1/o,h=1/a;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,e.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u;let g,_;if(a===Jn)g=(o+r)*h,_=-2*h;else if(a===Jr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new C,Rn=new qt,im=new C(0,0,0),sm=new C(1,1,1),mi=new C,ro=new C,dn=new C,Fu=new qt,ku=new Ke;class He{constructor(t=0,e=0,n=0,s=He.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ku.setFromEuler(this),this.setFromQuaternion(ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}He.DEFAULT_ORDER="XYZ";class Bu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rm=0;const zu=new C,ps=new Ke,ti=new qt,oo=new C,er=new C,om=new C,am=new Ke,Hu=new C(1,0,0),Gu=new C(0,1,0),Vu=new C(0,0,1),Wu={type:"added"},cm={type:"removed"},ms={type:"childadded",child:null},wc={type:"childremoved",child:null};class xe extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new C,e=new He,n=new Ke,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Kt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(Gu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(Gu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(er,oo,this.up):ti.lookAt(oo,er,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(ti),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cm),wc.child=t,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new C(0,1,0),xe.DEFAULT_MATRIX_AUTO_UPDATE=!0,xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new C,ei=new C,bc=new C,ni=new C,gs=new C,_s=new C,Xu=new C,Ec=new C,Tc=new C,Ac=new C,Rc=new oe,Cc=new oe,Pc=new oe;class yn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),ei.subVectors(n,e),bc.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot(ei),c=Cn.dot(bc),l=ei.dot(ei),u=ei.dot(bc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,n),Pc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Pc,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),ei.subVectors(t,e),Cn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,n),_s.subVectors(r,n),Ec.subVectors(t,n);const c=gs.dot(Ec),l=_s.dot(Ec);if(c<=0&&l<=0)return e.copy(n);Tc.subVectors(t,s);const u=gs.dot(Tc),h=_s.dot(Tc);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(gs,o);Ac.subVectors(t,r);const f=gs.dot(Ac),g=_s.dot(Ac);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(_s,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Xu.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Xu,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ic(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=fc(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ic(o,r,t+1/3),this.g=Ic(o,r,t),this.b=Ic(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}copyLinearToSRGB(t){return this.r=mc(t.r),this.g=mc(t.g),this.b=mc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return se.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ne(Qe.r*255,0,255))*65536+Math.round(Ne(Qe.g*255,0,255))*256+Math.round(Ne(Qe.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=ge){se.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(ao);const n=$s(gi.h,ao.h,e),s=$s(gi.s,ao.s,e),r=$s(gi.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new zt;zt.NAMES=qu;let lm=0;class Mn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=Ji,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ge extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new C,co=new ht;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dc&&(t.usage=this.usage),t}}class Yu extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ku extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let um=0;const Sn=new qt,Lc=new xe,xs=new C,fn=new On,nr=new On,Ve=new C;class Me extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pu(t)?Ku:Yu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(fn.min,nr.min),fn.expandByPoint(Ve),Ve.addVectors(fn.max,nr.max),fn.expandByPoint(Ve)):(fn.expandByPoint(nr.min),fn.expandByPoint(nr.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ve.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(t,l),Ve.add(xs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new C,c[I]=new C;const l=new C,u=new C,h=new C,d=new ht,f=new ht,g=new ht,_=new C,p=new C;function m(I,U,y){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(w),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(w),a[I].add(_),a[U].add(_),a[y].add(_),c[I].add(p),c[U].add(p),c[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,U=v.length;I<U;++I){const y=v[I],w=y.start,H=y.count;for(let L=w,z=w+H;L<z;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const x=new C,M=new C,P=new C,b=new C;function T(I){P.fromBufferAttribute(s,I),b.copy(P);const U=a[I];x.copy(U),x.sub(P.multiplyScalar(P.dot(U))).normalize(),M.crossVectors(b,U);const w=M.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,w)}for(let I=0,U=v.length;I<U;++I){const y=v[I],w=y.start,H=y.count;for(let L=w,z=w+H;L<z;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new Oe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ju=new qt,Oi=new so,lo=new Fn,$u=new C,uo=new C,ho=new C,fo=new C,Dc=new C,po=new C,Ju=new C,mo=new C;class et extends xe{constructor(t=new Me,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Dc.fromBufferAttribute(h,t),o?po.addScaledVector(Dc,u):po.addScaledVector(Dc.sub(e),u))}e.add(po)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(lo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(lo,$u)===null||Oi.origin.distanceToSquared($u)>(t.far-t.near)**2))&&(ju.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(ju),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,P=x;M<P;M+=3){const b=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);s=go(this,m,t,n,l,u,h,b,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);s=go(this,o,t,n,l,u,h,v,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,P=x;M<P;M+=3){const b=M,T=M+1,I=M+2;s=go(this,m,t,n,l,u,h,b,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,x=p+1,M=p+2;s=go(this,o,t,n,l,u,h,v,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function hm(i,t,e,n,s,r,o,a){let c;if(t.side===qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Kn,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(mo);return l<e.near||l>e.far?null:{distance:l,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,uo),i.getVertexPosition(c,ho),i.getVertexPosition(l,fo);const u=hm(i,t,e,n,uo,ho,fo,Ju);if(u){const h=new C;yn.getBarycoord(Ju,uo,ho,fo,h),s&&(u.uv=yn.getInterpolatedAttribute(s,a,c,l,h,new ht)),r&&(u.uv1=yn.getInterpolatedAttribute(r,a,c,l,h,new ht)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};yn.getNormal(uo,ho,fo,d.normal),u.face=d,u.barycoord=h}return u}class cn extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function g(_,p,m,v,x,M,P,b,T,I,U){const y=M/T,w=P/I,H=M/2,L=P/2,z=b/2,J=T+1,G=I+1;let q=0,X=0;const bt=new C;for(let St=0;St<G;St++){const k=St*w-L;for(let at=0;at<J;at++){const _t=at*y-H;bt[_]=_t*v,bt[p]=k*x,bt[m]=z,l.push(bt.x,bt.y,bt.z),bt[_]=0,bt[p]=0,bt[m]=b>0?1:-1,u.push(bt.x,bt.y,bt.z),h.push(at/T),h.push(1-St/I),q+=1}}for(let St=0;St<I;St++)for(let k=0;k<T;k++){const at=d+k+J*St,_t=d+k+J*(St+1),O=d+(k+1)+J*(St+1),K=d+(k+1)+J*St;c.push(at,_t,K),c.push(_t,O,K),X+=6}a.addGroup(f,X,U),f+=X,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=vs(i[e]);for(const s in n)t[s]=n[s]}return t}function dm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const fm={clone:vs,merge:sn};var pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qu extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new C,th=new ht,eh=new ht;class Fe extends Qu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,Ms=1;class gm extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(ys,Ms,t,e);s.layers=this.layers,this.add(s);const r=new Fe(ys,Ms,t,e);r.layers=this.layers,this.add(r);const o=new Fe(ys,Ms,t,e);o.layers=this.layers,this.add(o);const a=new Fe(ys,Ms,t,e);a.layers=this.layers,this.add(a);const c=new Fe(ys,Ms,t,e);c.layers=this.layers,this.add(c);const l=new Fe(ys,Ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nh extends Ue{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _m extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cn(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ci});r.uniforms.tEquirect.value=e;const o=new et(s,r),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=hn),new gm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Nc=new C,xm=new C,vm=new Kt;class Fi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Nc.subVectors(n,e).cross(xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vm.getNormalMatrix(t),s=this.coplanarPoint(Nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Fn,_o=new C;class Uc{constructor(t=new Fi,e=new Fi,n=new Fi,s=new Fi,r=new Fi,o=new Fi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],v=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,p-f,M-m).normalize(),n[1].setComponents(c+r,d+l,p+f,M+m).normalize(),n[2].setComponents(c+o,d+u,p+g,M+v).normalize(),n[3].setComponents(c-o,d-u,p-g,M-v).normalize(),n[4].setComponents(c-a,d-h,p-_,M-x).normalize(),e===Jn)n[5].setComponents(c+a,d+h,p+_,M+x).normalize();else if(e===Jr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_o.x=s.normal.x>0?t.max.x:t.min.x,_o.y=s.normal.y>0?t.max.y:t.min.y,_o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ym(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ir extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*d-o;for(let x=0;x<l;x++){const M=x*h-r;g.push(M,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const x=v+l*m,M=v+l*(m+1),P=v+1+l*(m+1),b=v+1+l*m;f.push(x,M,b),f.push(M,P,b)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,P0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,v1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jt={alphahash_fragment:Mm,alphahash_pars_fragment:Sm,alphamap_fragment:wm,alphamap_pars_fragment:bm,alphatest_fragment:Em,alphatest_pars_fragment:Tm,aomap_fragment:Am,aomap_pars_fragment:Rm,batching_pars_vertex:Cm,batching_vertex:Pm,begin_vertex:Im,beginnormal_vertex:Lm,bsdfs:Dm,iridescence_fragment:Nm,bumpmap_pars_fragment:Um,clipping_planes_fragment:Om,clipping_planes_pars_fragment:Fm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Bm,color_fragment:zm,color_pars_fragment:Hm,color_pars_vertex:Gm,color_vertex:Vm,common:Wm,cube_uv_reflection_fragment:Xm,defaultnormal_vertex:qm,displacementmap_pars_vertex:Ym,displacementmap_vertex:Km,emissivemap_fragment:jm,emissivemap_pars_fragment:$m,colorspace_fragment:Jm,colorspace_pars_fragment:Zm,envmap_fragment:Qm,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:l0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:h0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:x0,lights_physical_pars_fragment:v0,lights_fragment_begin:y0,lights_fragment_maps:M0,lights_fragment_end:S0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:L0,morphinstance_vertex:D0,morphcolor_vertex:N0,morphnormal_vertex:U0,morphtarget_pars_vertex:O0,morphtarget_vertex:F0,normal_fragment_begin:k0,normal_fragment_maps:B0,normal_pars_fragment:z0,normal_pars_vertex:H0,normal_vertex:G0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:K0,packing:j0,premultiplied_alpha_fragment:$0,project_vertex:J0,dithering_fragment:Z0,dithering_pars_fragment:Q0,roughnessmap_fragment:t1,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:s1,shadowmask_pars_fragment:r1,skinbase_vertex:o1,skinning_pars_vertex:a1,skinning_vertex:c1,skinnormal_vertex:l1,specularmap_fragment:u1,specularmap_pars_fragment:h1,tonemapping_fragment:d1,tonemapping_pars_fragment:f1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:g1,uv_pars_vertex:_1,uv_vertex:x1,worldpos_vertex:v1,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},At={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},kn={basic:{uniforms:sn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:sn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new zt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:sn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:sn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:sn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new zt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:sn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:sn([At.points,At.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:sn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:sn([At.common,At.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:sn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:sn([At.sprite,At.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:sn([At.common,At.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:sn([At.lights,At.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};kn.physical={uniforms:sn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const xo={r:0,b:0,g:0},Bi=new He,y1=new qt;function M1(i,t,e,n,s,r,o){const a=new zt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const M=g(v);M===null?m(a,c):M&&M.isColor&&(m(M,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===kr)?(u===void 0&&(u=new et(new cn(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:vs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bi.copy(x.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Bi)),u.material.toneMapped=se.getTransfer(M.colorSpace)!==_e,(h!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new et(new ir(2,2),new _i({name:"BackgroundMaterial",uniforms:vs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=se.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,x){v.getRGB(xo,Zu(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:p}}function S1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,w,H,L,z){let J=!1;const G=h(L,H,w);r!==G&&(r=G,l(r.object)),J=f(y,L,H,z),J&&g(y,L,H,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(y,w,H,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,w,H){const L=H.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let J=z[w.id];J===void 0&&(J={},z[w.id]=J);let G=J[L];return G===void 0&&(G=d(c()),J[L]=G),G}function d(y){const w=[],H=[],L=[];for(let z=0;z<e;z++)w[z]=0,H[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:H,attributeDivisors:L,object:y,attributes:{},index:null}}function f(y,w,H,L){const z=r.attributes,J=w.attributes;let G=0;const q=H.getAttributes();for(const X in q)if(q[X].location>=0){const St=z[X];let k=J[X];if(k===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(k=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(k=y.instanceColor)),St===void 0||St.attribute!==k||k&&St.data!==k.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function g(y,w,H,L){const z={},J=w.attributes;let G=0;const q=H.getAttributes();for(const X in q)if(q[X].location>=0){let St=J[X];St===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(St=y.instanceColor));const k={};k.attribute=St,St&&St.data&&(k.data=St.data),z[X]=k,G++}r.attributes=z,r.attributesNum=G,r.index=L}function _(){const y=r.newAttributes;for(let w=0,H=y.length;w<H;w++)y[w]=0}function p(y){m(y,0)}function m(y,w){const H=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;H[y]=1,L[y]===0&&(i.enableVertexAttribArray(y),L[y]=1),z[y]!==w&&(i.vertexAttribDivisor(y,w),z[y]=w)}function v(){const y=r.newAttributes,w=r.enabledAttributes;for(let H=0,L=w.length;H<L;H++)w[H]!==y[H]&&(i.disableVertexAttribArray(H),w[H]=0)}function x(y,w,H,L,z,J,G){G===!0?i.vertexAttribIPointer(y,w,H,z,J):i.vertexAttribPointer(y,w,H,L,z,J)}function M(y,w,H,L){_();const z=L.attributes,J=H.getAttributes(),G=w.defaultAttributeValues;for(const q in J){const X=J[q];if(X.location>=0){let bt=z[q];if(bt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor)),bt!==void 0){const St=bt.normalized,k=bt.itemSize,at=t.get(bt);if(at===void 0)continue;const _t=at.buffer,O=at.type,K=at.bytesPerElement,rt=O===i.INT||O===i.UNSIGNED_INT||bt.gpuType===Ra;if(bt.isInterleavedBufferAttribute){const tt=bt.data,Mt=tt.stride,gt=bt.offset;if(tt.isInstancedInterleavedBuffer){for(let Et=0;Et<X.locationSize;Et++)m(X.location+Et,tt.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Et=0;Et<X.locationSize;Et++)p(X.location+Et);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Et=0;Et<X.locationSize;Et++)x(X.location+Et,k/X.locationSize,O,St,Mt*K,(gt+k/X.locationSize*Et)*K,rt)}else{if(bt.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)m(X.location+tt,bt.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let tt=0;tt<X.locationSize;tt++)x(X.location+tt,k/X.locationSize,O,St,k*K,k/X.locationSize*tt*K,rt)}}else if(G!==void 0){const St=G[q];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(X.location,St);break;case 3:i.vertexAttrib3fv(X.location,St);break;case 4:i.vertexAttrib4fv(X.location,St);break;default:i.vertexAttrib1fv(X.location,St)}}}}v()}function P(){I();for(const y in n){const w=n[y];for(const H in w){const L=w[H];for(const z in L)u(L[z].object),delete L[z];delete w[H]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const H in w){const L=w[H];for(const z in L)u(L[z].object),delete L[z];delete w[H]}delete n[y.id]}function T(y){for(const w in n){const H=n[w];if(H[y.id]===void 0)continue;const L=H[y.id];for(const z in L)u(L[z].object),delete L[z];delete H[y.id]}}function I(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function w1(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function b1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==$n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==En&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:P,maxSamples:b}}function E1(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Fi,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const v=r?0:n,x=v*4;let M=m.clippingState||null;c.value=M,M=u(g,d,x,f);for(let P=0;P!==x;++P)M[P]=e[P];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function T1(i){let t=new WeakMap;function e(o,a){return a===Ta?o.mapping=Qi:a===Aa&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ta||a===Aa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new _m(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Oc extends Qu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,sh=[.125,.215,.35,.446,.526,.582],zi=20,Fc=new Oc,rh=new zt;let kc=null,Bc=0,zc=0,Hc=!1;const Hi=(1+Math.sqrt(5))/2,ws=1/Hi,oh=[new C(-Hi,ws,0),new C(Hi,ws,0),new C(-ws,0,Hi),new C(ws,0,Hi),new C(0,Hi,-ws),new C(0,Hi,ws),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){kc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kc,Bc,zc),this._renderer.xr.enabled=Hc,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:qs,format:xn,colorSpace:Ye,depthBuffer:!1},s=ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A1(r)),this._blurMaterial=R1(r,t,e)}return s}_compileMaterial(t){const e=new et(this._lodPlanes[0],t);this._renderer.compile(e,Fc)}_sceneToCubeUV(t,e,n,s){const a=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(rh),u.toneMapping=li,u.autoClear=!1;const f=new Ge({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new et(new cn,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(rh),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;yo(s,v*x,m>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;yo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oh[(s-r-1)%oh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new et(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):zi;p>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const m=[];let v=0;for(let T=0;T<zi;++T){const I=T/_,U=Math.exp(-I*I/2);m.push(U),T===0?v+=U:T<p&&(v+=2*U)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const M=this._sizeLods[s],P=3*M*(s>x-Ss?s-x+Ss:0),b=4*(this._cubeSize-M);yo(e,P,b,3*M,2*M),c.setRenderTarget(e),c.render(h,Fc)}}function A1(i){const t=[],e=[],n=[];let s=i;const r=i-Ss+1+sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ss?c=sh[o-i+Ss-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),x=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,I=b>2?0:-1,U=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(U,_*g*b),x.set(d,p*g*b);const y=[b,b,b,b,b,b];M.set(y,m*g*b)}const P=new Me;P.setAttribute("position",new Oe(v,_)),P.setAttribute("uv",new Oe(x,p)),P.setAttribute("faceIndex",new Oe(M,m)),t.push(P),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ah(i,t,e){const n=new Di(i,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function R1(i,t,e){const n=new Float32Array(zi),s=new C(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ch(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function lh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ta||c===Aa,u=c===Qi||c===ts;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new vo(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new vo(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function P1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function I1(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){const P=v[x+0],b=v[x+1],T=v[x+2];d.push(P,b,b,T,T,P)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const P=x+0,b=x+1,T=x+2;d.push(P,b,b,T,T,P)}}else return;const p=new(Pu(d)?Ku:Yu)(d,1);p.version=_;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function L1(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function h(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v];for(let v=0;v<_.length;v++)e.update(m,n,_[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function D1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function N1(i,t,e){const n=new WeakMap,s=new oe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let U=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,P=1;M>t.maxTextureSize&&(P=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*P*4*h),T=new Uu(b,M,P,h);T.type=En,T.needsUpdate=!0;const I=x*4;for(let y=0;y<h;y++){const w=p[y],H=m[y],L=v[y],z=M*P*4*y;for(let J=0;J<w.count;J++){const G=J*I;f===!0&&(s.fromBufferAttribute(w,J),b[z+G+0]=s.x,b[z+G+1]=s.y,b[z+G+2]=s.z,b[z+G+3]=0),g===!0&&(s.fromBufferAttribute(H,J),b[z+G+4]=s.x,b[z+G+5]=s.y,b[z+G+6]=s.z,b[z+G+7]=0),_===!0&&(s.fromBufferAttribute(L,J),b[z+G+8]=s.x,b[z+G+9]=s.y,b[z+G+10]=s.z,b[z+G+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new ht(M,P)},n.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function U1(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class uh extends Ue{constructor(t,e,n,s,r,o,a,c,l,u=ns){if(u!==ns&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ns&&(n=Pi),n===void 0&&u===is&&(n=es),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hh=new Ue,dh=new uh(1,1),fh=new Uu,ph=new em,mh=new nh,gh=[],_h=[],xh=new Float32Array(16),vh=new Float32Array(9),yh=new Float32Array(4);function bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mo(i,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function O1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function F1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function k1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function B1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function z1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),Be(e,n)}}function H1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),Be(e,n)}}function G1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;xh.set(n),i.uniformMatrix4fv(this.addr,!1,xh),Be(e,n)}}function V1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function W1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function X1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function q1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Y1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function j1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function $1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function J1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dh.compareFunction=Au,r=dh):r=hh,e.setTexture2D(t||r,s)}function Z1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ph,s)}function Q1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mh,s)}function tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fh,s)}function eg(i){switch(i){case 5126:return O1;case 35664:return F1;case 35665:return k1;case 35666:return B1;case 35674:return z1;case 35675:return H1;case 35676:return G1;case 5124:case 35670:return V1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return K1;case 36295:return j1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return tg}}function ng(i,t){i.uniform1fv(this.addr,t)}function ig(i,t){const e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function sg(i,t){const e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function rg(i,t){const e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function og(i,t){const e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ag(i,t){const e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cg(i,t){const e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lg(i,t){i.uniform1iv(this.addr,t)}function ug(i,t){i.uniform2iv(this.addr,t)}function hg(i,t){i.uniform3iv(this.addr,t)}function dg(i,t){i.uniform4iv(this.addr,t)}function fg(i,t){i.uniform1uiv(this.addr,t)}function pg(i,t){i.uniform2uiv(this.addr,t)}function mg(i,t){i.uniform3uiv(this.addr,t)}function gg(i,t){i.uniform4uiv(this.addr,t)}function _g(i,t,e){const n=this.cache,s=t.length,r=Mo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hh,r[o])}function xg(i,t,e){const n=this.cache,s=t.length,r=Mo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ph,r[o])}function vg(i,t,e){const n=this.cache,s=t.length,r=Mo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mh,r[o])}function yg(i,t,e){const n=this.cache,s=t.length,r=Mo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fh,r[o])}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return og;case 35675:return ag;case 35676:return cg;case 5124:case 35670:return lg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return yg}}class Sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eg(e.type)}}class wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}}class bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function Mh(i,t){i.seq.push(t),i.map[t.id]=t}function Eg(i,t,e){const n=i.name,s=n.length;for(Vc.lastIndex=0;;){const r=Vc.exec(n),o=Vc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mh(e,l===void 0?new Sg(a,i,t):new wg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new bg(a),Mh(e,h)),e=h}}}class So{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Eg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Sh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Tg=37297;let Ag=0;function Rg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Cg(i){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i);let n;switch(t===e?n="":t===$r&&e===jr?n="LinearDisplayP3ToLinearSRGB":t===jr&&e===$r&&(n="LinearSRGBToLinearDisplayP3"),i){case Ye:case Yr:return[n,"LinearTransferOETF"];case ge:case hc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(t),o)}else return s}function Pg(i,t){const e=Cg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ig(i,t){let e;switch(t){case cp:e="Linear";break;case lp:e="Reinhard";break;case up:e="Cineon";break;case du:e="ACESFilmic";break;case dp:e="AgX";break;case fp:e="Neutral";break;case hp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new C;function Lg(){se.getLuminanceCoefficients(wo);const i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function Ng(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function sr(i){return i!==""}function bh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(i){return i.replace(Og,kg)}const Fg=new Map;function kg(i,t){let e=jt[t];if(e===void 0){const n=Fg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wc(e)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(i){return i.replace(Bg,zg)}function zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ts&&(t="ENVMAP_MODE_REFRACTION"),t}function Wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ea:t="ENVMAP_BLENDING_MULTIPLY";break;case op:t="ENVMAP_BLENDING_MIX";break;case ap:t="ENVMAP_BLENDING_ADD";break}return t}function Xg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Hg(e),l=Gg(e),u=Vg(e),h=Wg(e),d=Xg(e),f=Dg(e),g=Ng(r),_=s.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`)):(p=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),m=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?jt.tonemapping_pars_fragment:"",e.toneMapping!==li?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=Wc(o),o=bh(o,e),o=Eh(o,e),a=Wc(a),a=bh(a,e),a=Eh(a,e),o=Th(o),a=Th(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+p+o,M=v+m+a,P=Sh(s,s.VERTEX_SHADER,x),b=Sh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,P),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(w){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(P).trim(),z=s.getShaderInfoLog(b).trim();let J=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,b);else{const q=wh(s,P,"vertex"),X=wh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+q+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||z==="")&&(G=!1);G&&(w.diagnostics={runnable:J,programLog:H,vertexShader:{log:L,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(P),s.deleteShader(b),I=new So(s,_),U=Ug(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let U;this.getAttributes=function(){return U===void 0&&T(this),U};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Tg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=b,this}let Yg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jg(t),e.set(t,n)),n}}class jg{constructor(t){this.id=Yg++,this.code=t,this.usedTimes=0}}function $g(i,t,e,n,s,r,o){const a=new Bu,c=new Kg,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,w,H,L,z){const J=L.fog,G=z.geometry,q=y.isMeshStandardMaterial?L.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),bt=X&&X.mapping===kr?X.image.height:null,St=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const k=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,at=k!==void 0?k.length:0;let _t=0;G.morphAttributes.position!==void 0&&(_t=1),G.morphAttributes.normal!==void 0&&(_t=2),G.morphAttributes.color!==void 0&&(_t=3);let O,K,rt,tt;if(St){const We=kn[St];O=We.vertexShader,K=We.fragmentShader}else O=y.vertexShader,K=y.fragmentShader,c.update(y),rt=c.getVertexShaderID(y),tt=c.getFragmentShaderID(y);const Mt=i.getRenderTarget(),gt=z.isInstancedMesh===!0,Et=z.isBatchedMesh===!0,Tt=!!y.map,$=!!y.matcap,A=!!X,nt=!!y.aoMap,ut=!!y.lightMap,ot=!!y.bumpMap,lt=!!y.normalMap,wt=!!y.displacementMap,vt=!!y.emissiveMap,R=!!y.metalnessMap,S=!!y.roughnessMap,B=y.anisotropy>0,Z=y.clearcoat>0,st=y.dispersion>0,Q=y.iridescence>0,Nt=y.sheen>0,yt=y.transmission>0,Lt=B&&!!y.anisotropyMap,Jt=Z&&!!y.clearcoatMap,dt=Z&&!!y.clearcoatNormalMap,j=Z&&!!y.clearcoatRoughnessMap,ft=Q&&!!y.iridescenceMap,Rt=Q&&!!y.iridescenceThicknessMap,pt=Nt&&!!y.sheenColorMap,Gt=Nt&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,ie=!!y.specularColorMap,D=!!y.specularIntensityMap,Ct=yt&&!!y.transmissionMap,Y=yt&&!!y.thicknessMap,it=!!y.gradientMap,Pt=!!y.alphaMap,It=y.alphaTest>0,Zt=!!y.alphaHash,Se=!!y.extensions;let ze=li;y.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ze=i.toneMapping);const ee={shaderID:St,shaderType:y.type,shaderName:y.name,vertexShader:O,fragmentShader:K,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Et,batchingColor:Et&&z._colorsTexture!==null,instancing:gt,instancingColor:gt&&z.instanceColor!==null,instancingMorph:gt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ye,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:$,envMap:A,envMapMode:A&&X.mapping,envMapCubeUVHeight:bt,aoMap:nt,lightMap:ut,bumpMap:ot,normalMap:lt,displacementMap:f&&wt,emissiveMap:vt,normalMapObjectSpace:lt&&y.normalMapType===Sp,normalMapTangentSpace:lt&&y.normalMapType===uc,metalnessMap:R,roughnessMap:S,anisotropy:B,anisotropyMap:Lt,clearcoat:Z,clearcoatMap:Jt,clearcoatNormalMap:dt,clearcoatRoughnessMap:j,dispersion:st,iridescence:Q,iridescenceMap:ft,iridescenceThicknessMap:Rt,sheen:Nt,sheenColorMap:pt,sheenRoughnessMap:Gt,specularMap:Ht,specularColorMap:ie,specularIntensityMap:D,transmission:yt,transmissionMap:Ct,thicknessMap:Y,gradientMap:it,opaque:y.transparent===!1&&y.blending===Ji&&y.alphaToCoverage===!1,alphaMap:Pt,alphaTest:It,alphaHash:Zt,combine:y.combine,mapUv:Tt&&p(y.map.channel),aoMapUv:nt&&p(y.aoMap.channel),lightMapUv:ut&&p(y.lightMap.channel),bumpMapUv:ot&&p(y.bumpMap.channel),normalMapUv:lt&&p(y.normalMap.channel),displacementMapUv:wt&&p(y.displacementMap.channel),emissiveMapUv:vt&&p(y.emissiveMap.channel),metalnessMapUv:R&&p(y.metalnessMap.channel),roughnessMapUv:S&&p(y.roughnessMap.channel),anisotropyMapUv:Lt&&p(y.anisotropyMap.channel),clearcoatMapUv:Jt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&p(y.sheenRoughnessMap.channel),specularMapUv:Ht&&p(y.specularMap.channel),specularColorMapUv:ie&&p(y.specularColorMap.channel),specularIntensityMapUv:D&&p(y.specularIntensityMap.channel),transmissionMapUv:Ct&&p(y.transmissionMap.channel),thicknessMapUv:Y&&p(y.thicknessMap.channel),alphaMapUv:Pt&&p(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(lt||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Tt||Pt),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:_t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===De,flipSided:y.side===qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function v(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)w.push(H),w.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(x(w,y),M(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const w=_[y.type];let H;if(w){const L=kn[w];H=fm.clone(L.uniforms)}else H=y.uniforms;return H}function b(y,w){let H;for(let L=0,z=u.length;L<z;L++){const J=u[L];if(J.cacheKey===w){H=J,++H.usedTimes;break}}return H===void 0&&(H=new qg(i,w,y,r),u.push(H)),H}function T(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function I(y){c.remove(y)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:P,acquireProgram:b,releaseProgram:T,releaseShaderCache:I,programs:u,dispose:U}}function Jg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ch(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),t++,m}function a(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||Zg),n.length>1&&n.sort(d||Rh),s.length>1&&s.sort(d||Rh)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Qg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ch,i.set(n,[o])):s>=r.length?(o=new Ch,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function t_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new zt};break;case"SpotLight":e={position:new C,direction:new C,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function e_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let n_=0;function i_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function s_(i){const t=new t_,e=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new qt,o=new qt;function a(l){let u=0,h=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,x=0,M=0,P=0,b=0,T=0;l.sort(i_);for(let U=0,y=l.length;U<y;U++){const w=l[U],H=w.color,L=w.intensity,z=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=H.r*L,h+=H.g*L,d+=H.b*L;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],L);T++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,X=e.get(w);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=w.shadow.matrix,v++}n.directional[f]=G,f++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(H).multiplyScalar(L),G.distance=z,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[_]=G;const q=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,q.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[_]=q.matrix,w.castShadow){const X=e.get(w);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=J,M++}_++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(H).multiplyScalar(L),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=G,p++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const q=w.shadow,X=e.get(w);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=G,g++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(L),G.groundColor.copy(w.groundColor).multiplyScalar(L),n.hemi[m]=G,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==M||I.numSpotMaps!==P||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=M,I.numSpotMaps=P,I.numLightProbes=T,n.version=n_++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const x=l[m];if(x.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Ph(i){const t=new s_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function r_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ph(i),t.set(s,[a])):r>=o.length?(a=new Ph(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class o_ extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class a_ extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u_(i,t,e){let n=new Uc;const s=new ht,r=new ht,o=new oe,a=new o_({depthPacking:Mp}),c=new a_,l={},u=e.maxTextureSize,h={[Kn]:qe,[qe]:Kn,[De]:De},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:c_,fragmentShader:l_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let m=this.type;this.render=function(b,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const U=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ci),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const L=m!==Yn&&this.type===Yn,z=m===Yn&&this.type!==Yn;for(let J=0,G=b.length;J<G;J++){const q=b[J],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const bt=X.getFrameExtents();if(s.multiply(bt),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/bt.x),s.x=r.x*bt.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/bt.y),s.y=r.y*bt.y,X.mapSize.y=r.y)),X.map===null||L===!0||z===!0){const k=this.type!==Yn?{minFilter:nn,magFilter:nn}:{};X.map!==null&&X.map.dispose(),X.map=new Di(s.x,s.y,k),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const St=X.getViewportCount();for(let k=0;k<St;k++){const at=X.getViewport(k);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),H.viewport(o),X.updateMatrices(q,k),n=X.getFrustum(),M(T,I,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Yn&&v(X,I),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,y,w)};function v(b,T){const I=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,I,f,_,null)}function x(b,T,I,U){let y=null;const w=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)y=w;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=y.uuid,L=T.uuid;let z=l[H];z===void 0&&(z={},l[H]=z);let J=z[L];J===void 0&&(J=y.clone(),z[L]=J,T.addEventListener("dispose",P)),y=J}if(y.visible=T.visible,y.wireframe=T.wireframe,U===Yn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=I}return y}function M(b,T,I,U,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Yn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const L=t.update(b),z=b.material;if(Array.isArray(z)){const J=L.groups;for(let G=0,q=J.length;G<q;G++){const X=J[G],bt=z[X.materialIndex];if(bt&&bt.visible){const St=x(b,bt,U,y);b.onBeforeShadow(i,b,T,I,L,St,X),i.renderBufferDirect(I,null,L,St,b,X),b.onAfterShadow(i,b,T,I,L,St,X)}}}else if(z.visible){const J=x(b,z,U,y);b.onBeforeShadow(i,b,T,I,L,J,null),i.renderBufferDirect(I,null,L,J,b,null),b.onAfterShadow(i,b,T,I,L,J,null)}}const H=b.children;for(let L=0,z=H.length;L<z;L++)M(H[L],T,I,U,y)}function P(b){b.target.removeEventListener("dispose",P);for(const I in l){const U=l[I],y=b.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}const h_={[xa]:va,[ya]:wa,[Ma]:ba,[Zi]:Sa,[va]:xa,[wa]:ya,[ba]:Ma,[Sa]:Zi};function d_(i){function t(){let D=!1;const Ct=new oe;let Y=null;const it=new oe(0,0,0,0);return{setMask:function(Pt){Y!==Pt&&!D&&(i.colorMask(Pt,Pt,Pt,Pt),Y=Pt)},setLocked:function(Pt){D=Pt},setClear:function(Pt,It,Zt,Se,ze){ze===!0&&(Pt*=Se,It*=Se,Zt*=Se),Ct.set(Pt,It,Zt,Se),it.equals(Ct)===!1&&(i.clearColor(Pt,It,Zt,Se),it.copy(Ct))},reset:function(){D=!1,Y=null,it.set(-1,0,0,0)}}}function e(){let D=!1,Ct=!1,Y=null,it=null,Pt=null;return{setReversed:function(It){Ct=It},setTest:function(It){It?rt(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(It){Y!==It&&!D&&(i.depthMask(It),Y=It)},setFunc:function(It){if(Ct&&(It=h_[It]),it!==It){switch(It){case xa:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=It}},setLocked:function(It){D=It},setClear:function(It){Pt!==It&&(i.clearDepth(It),Pt=It)},reset:function(){D=!1,Y=null,it=null,Pt=null}}}function n(){let D=!1,Ct=null,Y=null,it=null,Pt=null,It=null,Zt=null,Se=null,ze=null;return{setTest:function(ee){D||(ee?rt(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(ee){Ct!==ee&&!D&&(i.stencilMask(ee),Ct=ee)},setFunc:function(ee,We,ct){(Y!==ee||it!==We||Pt!==ct)&&(i.stencilFunc(ee,We,ct),Y=ee,it=We,Pt=ct)},setOp:function(ee,We,ct){(It!==ee||Zt!==We||Se!==ct)&&(i.stencilOp(ee,We,ct),It=ee,Zt=We,Se=ct)},setLocked:function(ee){D=ee},setClear:function(ee){ze!==ee&&(i.clearStencil(ee),ze=ee)},reset:function(){D=!1,Ct=null,Y=null,it=null,Pt=null,It=null,Zt=null,Se=null,ze=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,v=null,x=null,M=null,P=null,b=new zt(0,0,0),T=0,I=!1,U=null,y=null,w=null,H=null,L=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=G>=2);let X=null,bt={};const St=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),at=new oe().fromArray(St),_t=new oe().fromArray(k);function O(D,Ct,Y,it){const Pt=new Uint8Array(4),It=i.createTexture();i.bindTexture(D,It),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Y;Zt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Ct+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return It}const K={};K[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),r.setFunc(Zi),ut(!1),ot(au),rt(i.CULL_FACE),A(ci);function rt(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function tt(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Mt(D,Ct){return u[D]!==Ct?(i.bindFramebuffer(D,Ct),u[D]=Ct,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function gt(D,Ct){let Y=d,it=!1;if(D){Y=h.get(Ct),Y===void 0&&(Y=[],h.set(Ct,Y));const Pt=D.textures;if(Y.length!==Pt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let It=0,Zt=Pt.length;It<Zt;It++)Y[It]=i.COLOR_ATTACHMENT0+It;Y.length=Pt.length,it=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,it=!0);it&&i.drawBuffers(Y)}function Et(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const Tt={[Ci]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};Tt[Xf]=i.MIN,Tt[qf]=i.MAX;const $={[Yf]:i.ZERO,[Kf]:i.ONE,[jf]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[ep]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[$f]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[tp]:i.ONE_MINUS_DST_COLOR,[Zf]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[sp]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function A(D,Ct,Y,it,Pt,It,Zt,Se,ze,ee){if(D===ci){g===!0&&(tt(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),D!==Gf){if(D!==_||ee!==I){if((p!==Ci||x!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,x=Ci),ee)switch(D){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,v=null,M=null,P=null,b.set(0,0,0),T=0,_=D,I=ee}return}Pt=Pt||Ct,It=It||Y,Zt=Zt||it,(Ct!==p||Pt!==x)&&(i.blendEquationSeparate(Tt[Ct],Tt[Pt]),p=Ct,x=Pt),(Y!==m||it!==v||It!==M||Zt!==P)&&(i.blendFuncSeparate($[Y],$[it],$[It],$[Zt]),m=Y,v=it,M=It,P=Zt),(Se.equals(b)===!1||ze!==T)&&(i.blendColor(Se.r,Se.g,Se.b,ze),b.copy(Se),T=ze),_=D,I=!1}function nt(D,Ct){D.side===De?tt(i.CULL_FACE):rt(i.CULL_FACE);let Y=D.side===qe;Ct&&(Y=!Y),ut(Y),D.blending===Ji&&D.transparent===!1?A(ci):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const it=D.stencilWrite;o.setTest(it),it&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function ot(D){D!==zf?(rt(i.CULL_FACE),D!==y&&(D===au?i.cullFace(i.BACK):D===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),y=D}function lt(D){D!==w&&(J&&i.lineWidth(D),w=D)}function wt(D,Ct,Y){D?(rt(i.POLYGON_OFFSET_FILL),(H!==Ct||L!==Y)&&(i.polygonOffset(Ct,Y),H=Ct,L=Y)):tt(i.POLYGON_OFFSET_FILL)}function vt(D){D?rt(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+z-1),X!==D&&(i.activeTexture(D),X=D)}function S(D,Ct,Y){Y===void 0&&(X===null?Y=i.TEXTURE0+z-1:Y=X);let it=bt[Y];it===void 0&&(it={type:void 0,texture:void 0},bt[Y]=it),(it.type!==D||it.texture!==Ct)&&(X!==Y&&(i.activeTexture(Y),X=Y),i.bindTexture(D,Ct||K[D]),it.type=D,it.texture=Ct)}function B(){const D=bt[X];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){at.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),at.copy(D))}function pt(D){_t.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),_t.copy(D))}function Gt(D,Ct){let Y=c.get(Ct);Y===void 0&&(Y=new WeakMap,c.set(Ct,Y));let it=Y.get(D);it===void 0&&(it=i.getUniformBlockIndex(Ct,D.name),Y.set(D,it))}function Ht(D,Ct){const it=c.get(Ct).get(D);a.get(Ct)!==it&&(i.uniformBlockBinding(Ct,it,D.__bindingPointIndex),a.set(Ct,it))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},X=null,bt={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,v=null,x=null,M=null,P=null,b=new zt(0,0,0),T=0,I=!1,U=null,y=null,w=null,H=null,L=null,at.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:rt,disable:tt,bindFramebuffer:Mt,drawBuffers:gt,useProgram:Et,setBlending:A,setMaterial:nt,setFlipSided:ut,setCullFace:ot,setLineWidth:lt,setPolygonOffset:wt,setScissorTest:vt,activeTexture:R,bindTexture:S,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:st,texImage2D:j,texImage3D:ft,updateUBOMapping:Gt,uniformBlockBinding:Ht,texStorage2D:Jt,texStorage3D:dt,texSubImage2D:Q,texSubImage3D:Nt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Lt,scissor:Rt,viewport:pt,reset:ie}}function Ih(i,t,e,n){const s=f_(n);switch(e){case vu:return i*t;case Mu:return i*t;case Su:return i*t*2;case Ia:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case wu:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case yu:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xr:case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bu:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f_(i){switch(i){case $n:case gu:return{byteLength:1,components:1};case Xs:case _u:case qs:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case Pi:case Ra:case En:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function p_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):Js("canvas")}function _(R,S,B){let Z=1;const st=vt(R);if((st.width>B||st.height>B)&&(Z=B/Math.max(st.width,st.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(Z*st.width),Nt=Math.floor(Z*st.height);h===void 0&&(h=g(Q,Nt));const yt=S?g(Q,Nt):h;return yt.width=Q,yt.height=Nt,yt.getContext("2d").drawImage(R,0,0,Q,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Nt+")."),yt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==nn&&R.minFilter!==hn}function m(R){i.generateMipmap(R)}function v(R,S,B,Z,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),S===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),S===i.RGBA){const Nt=st?Kr:se.getTransfer(Z);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=Nt===_e?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(R,S){let B;return R?S===null||S===Pi||S===es?B=i.DEPTH24_STENCIL8:S===En?B=i.DEPTH32F_STENCIL8:S===Xs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===es?B=i.DEPTH_COMPONENT24:S===En?B=i.DEPTH_COMPONENT32F:S===Xs&&(B=i.DEPTH_COMPONENT16),B}function M(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function P(R){const S=R.target;S.removeEventListener("dispose",P),T(S),S.isVideoTexture&&u.delete(S)}function b(R){const S=R.target;S.removeEventListener("dispose",b),U(S)}function T(R){const S=n.get(R);if(S.__webglInit===void 0)return;const B=R.source,Z=d.get(B);if(Z){const st=Z[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&I(R),Object.keys(Z).length===0&&d.delete(B)}n.remove(R)}function I(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const B=R.source,Z=d.get(B);delete Z[S.__cacheKey],o.memory.textures--}function U(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let st=0;st<S.__webglFramebuffer[Z].length;st++)i.deleteFramebuffer(S.__webglFramebuffer[Z][st]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let Z=0,st=B.length;Z<st;Z++){const Q=n.get(B[Z]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(R)}let y=0;function w(){y=0}function H(){const R=y;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),y+=1,R}function L(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const B=n.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(B,R,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function J(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){_t(B,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function G(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){_t(B,R,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function q(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){O(B,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const X={[_n]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},bt={[nn]:i.NEAREST,[mu]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},St={[wp]:i.NEVER,[Cp]:i.ALWAYS,[bp]:i.LESS,[Au]:i.LEQUAL,[Ep]:i.EQUAL,[Rp]:i.GEQUAL,[Tp]:i.GREATER,[Ap]:i.NOTEQUAL};function k(R,S){if(S.type===En&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===zr||S.magFilter===Ws||S.magFilter===jn||S.minFilter===hn||S.minFilter===zr||S.minFilter===Ws||S.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,X[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,X[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,X[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,bt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,bt[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,St[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Ws&&S.minFilter!==jn||S.type===En&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function at(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",P));const Z=S.source;let st=d.get(Z);st===void 0&&(st={},d.set(Z,st));const Q=L(S);if(Q!==R.__cacheKey){st[Q]===void 0&&(st[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),st[Q].usedTimes++;const Nt=st[R.__cacheKey];Nt!==void 0&&(st[R.__cacheKey].usedTimes--,Nt.usedTimes===0&&I(S)),R.__cacheKey=Q,R.__webglTexture=st[Q].texture}return B}function _t(R,S,B){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const st=at(R,S),Q=S.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+B);const Nt=n.get(Q);if(Q.version!==Nt.__version||st===!0){e.activeTexture(i.TEXTURE0+B);const yt=se.getPrimaries(se.workingColorSpace),Lt=S.colorSpace===hi?null:se.getPrimaries(S.colorSpace),Jt=S.colorSpace===hi||yt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let dt=_(S.image,!1,s.maxTextureSize);dt=wt(S,dt);const j=r.convert(S.format,S.colorSpace),ft=r.convert(S.type);let Rt=v(S.internalFormat,j,ft,S.colorSpace,S.isVideoTexture);k(Z,S);let pt;const Gt=S.mipmaps,Ht=S.isVideoTexture!==!0,ie=Nt.__version===void 0||st===!0,D=Q.dataReady,Ct=M(S,dt);if(S.isDepthTexture)Rt=x(S.format===is,S.type),ie&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Rt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,dt.width,dt.height,0,j,ft,null));else if(S.isDataTexture)if(Gt.length>0){Ht&&ie&&e.texStorage2D(i.TEXTURE_2D,Ct,Rt,Gt[0].width,Gt[0].height);for(let Y=0,it=Gt.length;Y<it;Y++)pt=Gt[Y],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,pt.width,pt.height,j,ft,pt.data):e.texImage2D(i.TEXTURE_2D,Y,Rt,pt.width,pt.height,0,j,ft,pt.data);S.generateMipmaps=!1}else Ht?(ie&&e.texStorage2D(i.TEXTURE_2D,Ct,Rt,dt.width,dt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,j,ft,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,dt.width,dt.height,0,j,ft,dt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Rt,Gt[0].width,Gt[0].height,dt.depth);for(let Y=0,it=Gt.length;Y<it;Y++)if(pt=Gt[Y],S.format!==xn)if(j!==null)if(Ht){if(D)if(S.layerUpdates.size>0){const Pt=Ih(pt.width,pt.height,S.format,S.type);for(const It of S.layerUpdates){const Zt=pt.data.subarray(It*Pt/pt.data.BYTES_PER_ELEMENT,(It+1)*Pt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,It,pt.width,pt.height,1,j,Zt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,pt.width,pt.height,dt.depth,j,pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Rt,pt.width,pt.height,dt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,pt.width,pt.height,dt.depth,j,ft,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Rt,pt.width,pt.height,dt.depth,0,j,ft,pt.data)}else{Ht&&ie&&e.texStorage2D(i.TEXTURE_2D,Ct,Rt,Gt[0].width,Gt[0].height);for(let Y=0,it=Gt.length;Y<it;Y++)pt=Gt[Y],S.format!==xn?j!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,pt.width,pt.height,j,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,pt.width,pt.height,j,ft,pt.data):e.texImage2D(i.TEXTURE_2D,Y,Rt,pt.width,pt.height,0,j,ft,pt.data)}else if(S.isDataArrayTexture)if(Ht){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Rt,dt.width,dt.height,dt.depth),D)if(S.layerUpdates.size>0){const Y=Ih(dt.width,dt.height,S.format,S.type);for(const it of S.layerUpdates){const Pt=dt.data.subarray(it*Y/dt.data.BYTES_PER_ELEMENT,(it+1)*Y/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,dt.width,dt.height,1,j,ft,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,j,ft,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,dt.width,dt.height,dt.depth,0,j,ft,dt.data);else if(S.isData3DTexture)Ht?(ie&&e.texStorage3D(i.TEXTURE_3D,Ct,Rt,dt.width,dt.height,dt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,j,ft,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,dt.width,dt.height,dt.depth,0,j,ft,dt.data);else if(S.isFramebufferTexture){if(ie)if(Ht)e.texStorage2D(i.TEXTURE_2D,Ct,Rt,dt.width,dt.height);else{let Y=dt.width,it=dt.height;for(let Pt=0;Pt<Ct;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Rt,Y,it,0,j,ft,null),Y>>=1,it>>=1}}else if(Gt.length>0){if(Ht&&ie){const Y=vt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Rt,Y.width,Y.height)}for(let Y=0,it=Gt.length;Y<it;Y++)pt=Gt[Y],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,j,ft,pt):e.texImage2D(i.TEXTURE_2D,Y,Rt,j,ft,pt);S.generateMipmaps=!1}else if(Ht){if(ie){const Y=vt(dt);e.texStorage2D(i.TEXTURE_2D,Ct,Rt,Y.width,Y.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j,ft,dt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,j,ft,dt);p(S)&&m(Z),Nt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function O(R,S,B){if(S.image.length!==6)return;const Z=at(R,S),st=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const Q=n.get(st);if(st.version!==Q.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const Nt=se.getPrimaries(se.workingColorSpace),yt=S.colorSpace===hi?null:se.getPrimaries(S.colorSpace),Lt=S.colorSpace===hi||Nt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Jt=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,j=[];for(let it=0;it<6;it++)!Jt&&!dt?j[it]=_(S.image[it],!0,s.maxCubemapSize):j[it]=dt?S.image[it].image:S.image[it],j[it]=wt(S,j[it]);const ft=j[0],Rt=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),Gt=v(S.internalFormat,Rt,pt,S.colorSpace),Ht=S.isVideoTexture!==!0,ie=Q.__version===void 0||Z===!0,D=st.dataReady;let Ct=M(S,ft);k(i.TEXTURE_CUBE_MAP,S);let Y;if(Jt){Ht&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Gt,ft.width,ft.height);for(let it=0;it<6;it++){Y=j[it].mipmaps;for(let Pt=0;Pt<Y.length;Pt++){const It=Y[Pt];S.format!==xn?Rt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,It.width,It.height,Rt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Gt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,It.width,It.height,Rt,pt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Gt,It.width,It.height,0,Rt,pt,It.data)}}}else{if(Y=S.mipmaps,Ht&&ie){Y.length>0&&Ct++;const it=vt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Gt,it.width,it.height)}for(let it=0;it<6;it++)if(dt){Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,j[it].width,j[it].height,Rt,pt,j[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,j[it].width,j[it].height,0,Rt,pt,j[it].data);for(let Pt=0;Pt<Y.length;Pt++){const Zt=Y[Pt].image[it].image;Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,Zt.width,Zt.height,Rt,pt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Gt,Zt.width,Zt.height,0,Rt,pt,Zt.data)}}else{Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Rt,pt,j[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,Rt,pt,j[it]);for(let Pt=0;Pt<Y.length;Pt++){const It=Y[Pt];Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,Rt,pt,It.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Gt,Rt,pt,It.image[it])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),Q.__version=st.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function K(R,S,B,Z,st,Q){const Nt=r.convert(B.format,B.colorSpace),yt=r.convert(B.type),Lt=v(B.internalFormat,Nt,yt,B.colorSpace);if(!n.get(S).__hasExternalTextures){const dt=Math.max(1,S.width>>Q),j=Math.max(1,S.height>>Q);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,Lt,dt,j,S.depth,0,Nt,yt,null):e.texImage2D(st,Q,Lt,dt,j,0,Nt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,st,n.get(B).__webglTexture,0,ut(S)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,st,n.get(B).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,st=Z&&Z.isDepthTexture?Z.type:null,Q=x(S.stencilBuffer,st),Nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ut(S);ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,Q,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,R)}else{const Z=S.textures;for(let st=0;st<Z.length;st++){const Q=Z[st],Nt=r.convert(Q.format,Q.colorSpace),yt=r.convert(Q.type),Lt=v(Q.internalFormat,Nt,yt,Q.colorSpace),Jt=ut(S);B&&ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Lt,S.width,S.height):ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,Lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,st=ut(S);if(S.depthTexture.format===ns)ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===is)ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Mt(R){const S=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",st)};Z.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");tt(S.__webglFramebuffer,R)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),rt(S.__webglDepthbuffer[Z],R,!1);else{const st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),rt(S.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(R,S,B){const Z=n.get(R);S!==void 0&&K(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Mt(R)}function Et(R){const S=R.texture,B=n.get(R),Z=n.get(S);R.addEventListener("dispose",b);const st=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Nt=st.length>1;if(Nt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[yt]=[];for(let Lt=0;Lt<S.mipmaps.length;Lt++)B.__webglFramebuffer[yt][Lt]=i.createFramebuffer()}else B.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let yt=0;yt<S.mipmaps.length;yt++)B.__webglFramebuffer[yt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let yt=0,Lt=st.length;yt<Lt;yt++){const Jt=n.get(st[yt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ot(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let yt=0;yt<st.length;yt++){const Lt=st[yt];B.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[yt]);const Jt=r.convert(Lt.format,Lt.colorSpace),dt=r.convert(Lt.type),j=v(Lt.internalFormat,Jt,dt,Lt.colorSpace,R.isXRRenderTarget===!0),ft=ut(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,j,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,B.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),k(i.TEXTURE_CUBE_MAP,S);for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)K(B.__webglFramebuffer[yt][Lt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt);else K(B.__webglFramebuffer[yt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let yt=0,Lt=st.length;yt<Lt;yt++){const Jt=st[yt],dt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),k(i.TEXTURE_2D,Jt),K(B.__webglFramebuffer,R,Jt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),p(Jt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(yt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Z.__webglTexture),k(yt,S),S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)K(B.__webglFramebuffer[Lt],R,S,i.COLOR_ATTACHMENT0,yt,Lt);else K(B.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,yt,0);p(S)&&m(yt),e.unbindTexture()}R.depthBuffer&&Mt(R)}function Tt(R){const S=R.textures;for(let B=0,Z=S.length;B<Z;B++){const st=S[B];if(p(st)){const Q=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Nt=n.get(st).__webglTexture;e.bindTexture(Q,Nt),m(Q),e.unbindTexture()}}}const $=[],A=[];function nt(R){if(R.samples>0){if(ot(R)===!1){const S=R.textures,B=R.width,Z=R.height;let st=i.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(R),yt=S.length>1;if(yt)for(let Lt=0;Lt<S.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Lt=0;Lt<S.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Lt]);const Jt=n.get(S[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,st,i.NEAREST),c===!0&&($.length=0,A.length=0,$.push(i.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&($.push(Q),A.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Lt=0;Lt<S.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Lt]);const Jt=n.get(S[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(R){return Math.min(s.maxSamples,R.samples)}function ot(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function wt(R,S){const B=R.colorSpace,Z=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ye&&B!==hi&&(se.getTransfer(B)===_e?(Z!==xn||st!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=w,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=gt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ot}function m_(i,t){function e(n,s=hi){let r;const o=se.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return i.BYTE;if(n===_u)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===yu)return i.RGB;if(n===xn)return i.RGBA;if(n===Mu)return i.LUMINANCE;if(n===Su)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Ia)return i.RED;if(n===La)return i.RED_INTEGER;if(n===wu)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Wr)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Oa||n===Fa||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===za)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===ja||n===$a||n===Ja||n===Za||n===Qa||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===nc||n===ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bu||n===sc||n===rc||n===oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class g_ extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const __={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(__)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const x_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:x_,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M_ extends Ii{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new y_,p=e.getContextAttributes();let m=null,v=null;const x=[],M=[],P=new ht;let b=null;const T=new Fe;T.layers.enable(1),T.viewport=new oe;const I=new Fe;I.layers.enable(2),I.viewport=new oe;const U=[T,I],y=new g_;y.layers.enable(1),y.layers.enable(2);let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let K=x[O];return K===void 0&&(K=new Xc,x[O]=K),K.getTargetRaySpace()},this.getControllerGrip=function(O){let K=x[O];return K===void 0&&(K=new Xc,x[O]=K),K.getGripSpace()},this.getHand=function(O){let K=x[O];return K===void 0&&(K=new Xc,x[O]=K),K.getHandSpace()};function L(O){const K=M.indexOf(O.inputSource);if(K===-1)return;const rt=x[K];rt!==void 0&&(rt.update(O.inputSource,O.frame,l||o),rt.dispatchEvent({type:O.type,data:O.inputSource}))}function z(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let O=0;O<x.length;O++){const K=M[O];K!==null&&(M[O]=null,x[O].disconnect(K))}w=null,H=null,_.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,v=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Di(f.framebufferWidth,f.framebufferHeight,{format:xn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,rt=null,tt=null;p.depth&&(tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?is:ns,rt=p.stencil?es:Pi);const Mt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Di(d.textureWidth,d.textureHeight,{format:xn,type:$n,depthTexture:new uh(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(O){for(let K=0;K<O.removed.length;K++){const rt=O.removed[K],tt=M.indexOf(rt);tt>=0&&(M[tt]=null,x[tt].disconnect(rt))}for(let K=0;K<O.added.length;K++){const rt=O.added[K];let tt=M.indexOf(rt);if(tt===-1){for(let gt=0;gt<x.length;gt++)if(gt>=M.length){M.push(rt),tt=gt;break}else if(M[gt]===null){M[gt]=rt,tt=gt;break}if(tt===-1)break}const Mt=x[tt];Mt&&Mt.connect(rt)}}const G=new C,q=new C;function X(O,K,rt){G.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(rt.matrixWorld);const tt=G.distanceTo(q),Mt=K.projectionMatrix.elements,gt=rt.projectionMatrix.elements,Et=Mt[14]/(Mt[10]-1),Tt=Mt[14]/(Mt[10]+1),$=(Mt[9]+1)/Mt[5],A=(Mt[9]-1)/Mt[5],nt=(Mt[8]-1)/Mt[0],ut=(gt[8]+1)/gt[0],ot=Et*nt,lt=Et*ut,wt=tt/(-nt+ut),vt=wt*-nt;if(K.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(vt),O.translateZ(wt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),Mt[10]===-1)O.projectionMatrix.copy(K.projectionMatrix),O.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const R=Et+wt,S=Tt+wt,B=ot-vt,Z=lt+(tt-vt),st=$*Tt/S*R,Q=A*Tt/S*R;O.projectionMatrix.makePerspective(B,Z,st,Q,R,S),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function bt(O,K){K===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(K.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let K=O.near,rt=O.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(rt=_.depthFar)),y.near=I.near=T.near=K,y.far=I.far=T.far=rt,(w!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,H=y.far);const tt=O.parent,Mt=y.cameras;bt(y,tt);for(let gt=0;gt<Mt.length;gt++)bt(Mt[gt],tt);Mt.length===2?X(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),St(O,y,tt)};function St(O,K,rt){rt===null?O.matrix.copy(K.matrixWorld):(O.matrix.copy(rt.matrixWorld),O.matrix.invert(),O.matrix.multiply(K.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(K.projectionMatrix),O.projectionMatrixInverse.copy(K.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=as*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let k=null;function at(O,K){if(u=K.getViewerPose(l||o),g=K,u!==null){const rt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let tt=!1;rt.length!==y.cameras.length&&(y.cameras.length=0,tt=!0);for(let gt=0;gt<rt.length;gt++){const Et=rt[gt];let Tt=null;if(f!==null)Tt=f.getViewport(Et);else{const A=h.getViewSubImage(d,Et);Tt=A.viewport,gt===0&&(t.setRenderTargetTextures(v,A.colorTexture,d.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(v))}let $=U[gt];$===void 0&&($=new Fe,$.layers.enable(gt),$.viewport=new oe,U[gt]=$),$.matrix.fromArray(Et.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Et.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),gt===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),tt===!0&&y.cameras.push($)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const gt=h.getDepthInformation(rt[0]);gt&&gt.isValid&&gt.texture&&_.init(t,gt,s.renderState)}}for(let rt=0;rt<x.length;rt++){const tt=M[rt],Mt=x[rt];tt!==null&&Mt!==void 0&&Mt.update(tt,K,l||o)}k&&k(O,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const _t=new ih;_t.setAnimationLoop(at),this.setAnimationLoop=function(O){k=O},this.dispose=function(){}}}const Gi=new He,S_=new qt;function w_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Zu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),x=v.envMap,M=v.envMapRotation;x&&(p.envMap.value=x,Gi.copy(M),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),p.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(Gi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=s[v.id];M===void 0&&(g(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(v,P);const b=t.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function u(v){const x=h();v.__bindingPointIndex=x;const M=i.createBuffer(),P=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],M=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,T=M.length;b<T;b++){const I=Array.isArray(M[b])?M[b]:[M[b]];for(let U=0,y=I.length;U<y;U++){const w=I[U];if(f(w,b,U,P)===!0){const H=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let z=0;for(let J=0;J<L.length;J++){const G=L[J],q=_(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+z,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,M,P){const b=v.value,T=x+"_"+M;if(P[T]===void 0)return typeof b=="number"||typeof b=="boolean"?P[T]=b:P[T]=b.clone(),!0;{const I=P[T];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return P[T]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(v){const x=v.uniforms;let M=0;const P=16;for(let T=0,I=x.length;T<I;T++){const U=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,w=U.length;y<w;y++){const H=U[y],L=Array.isArray(H.value)?H.value:[H.value];for(let z=0,J=L.length;z<J;z++){const G=L[z],q=_(G),X=M%P,bt=X%q.boundary,St=X+bt;M+=bt,St!==0&&P-St<q.storage&&(M+=P-St),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=q.storage}}}const b=M%P;return b>0&&(M+=P-b),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class E_{constructor(t={}){const{canvas:e=qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=li,this.toneMappingExposure=1;const x=this;let M=!1,P=0,b=0,T=null,I=-1,U=null;const y=new oe,w=new oe;let H=null;const L=new zt(0);let z=0,J=e.width,G=e.height,q=1,X=null,bt=null;const St=new oe(0,0,J,G),k=new oe(0,0,J,G);let at=!1;const _t=new Uc;let O=!1,K=!1;const rt=new qt,tt=new qt,Mt=new C,gt=new oe,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function $(){return T===null?q:1}let A=n;function nt(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",It,!1),A===null){const N="webgl2";if(A=nt(N,E),A===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ut,ot,lt,wt,vt,R,S,B,Z,st,Q,Nt,yt,Lt,Jt,dt,j,ft,Rt,pt,Gt,Ht,ie,D;function Ct(){ut=new P1(A),ut.init(),Ht=new m_(A,ut),ot=new b1(A,ut,t,Ht),lt=new d_(A),ot.reverseDepthBuffer&&lt.buffers.depth.setReversed(!0),wt=new D1(A),vt=new Jg,R=new p_(A,ut,lt,vt,ot,Ht,wt),S=new T1(x),B=new C1(x),Z=new ym(A),ie=new S1(A,Z),st=new I1(A,Z,wt,ie),Q=new U1(A,st,Z,wt),Rt=new N1(A,ot,R),dt=new E1(vt),Nt=new $g(x,S,B,ut,ot,ie,dt),yt=new w_(x,vt),Lt=new Qg,Jt=new r_(ut),ft=new M1(x,S,B,lt,Q,d,c),j=new u_(x,Q,ot),D=new b_(A,wt,ot,lt),pt=new w1(A,ut,wt),Gt=new L1(A,ut,wt),wt.programs=Nt.programs,x.capabilities=ot,x.extensions=ut,x.properties=vt,x.renderLists=Lt,x.shadowMap=j,x.state=lt,x.info=wt}Ct();const Y=new M_(x,A);this.xr=Y,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(J,G,!1))},this.getSize=function(E){return E.set(J,G)},this.setSize=function(E,N,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,G=N,e.width=Math.floor(E*q),e.height=Math.floor(N*q),V===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(J*q,G*q).floor()},this.setDrawingBufferSize=function(E,N,V){J=E,G=N,q=V,e.width=Math.floor(E*V),e.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,N,V,W){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,N,V,W),lt.viewport(y.copy(St).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(k)},this.setScissor=function(E,N,V,W){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,N,V,W),lt.scissor(w.copy(k).multiplyScalar(q).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(E){lt.setScissorTest(at=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){bt=E},this.getClearColor=function(E){return E.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(E=!0,N=!0,V=!0){let W=0;if(E){let F=!1;if(T!==null){const mt=T.texture.format;F=mt===Na||mt===Da||mt===La}if(F){const mt=T.texture.type,Dt=mt===$n||mt===Pi||mt===Xs||mt===es||mt===Ca||mt===Pa,Ut=ft.getClearColor(),Ot=ft.getClearAlpha(),Wt=Ut.r,Xt=Ut.g,Ft=Ut.b;Dt?(f[0]=Wt,f[1]=Xt,f[2]=Ft,f[3]=Ot,A.clearBufferuiv(A.COLOR,0,f)):(g[0]=Wt,g[1]=Xt,g[2]=Ft,g[3]=Ot,A.clearBufferiv(A.COLOR,0,g))}else W|=A.COLOR_BUFFER_BIT}N&&(W|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Lt.dispose(),Jt.dispose(),vt.dispose(),S.dispose(),B.dispose(),Q.dispose(),ie.dispose(),D.dispose(),Nt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",xt),Y.removeEventListener("sessionend",kt),Vt.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=wt.autoReset,N=j.enabled,V=j.autoUpdate,W=j.needsUpdate,F=j.type;Ct(),wt.autoReset=E,j.enabled=N,j.autoUpdate=V,j.needsUpdate=W,j.type=F}function It(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){const N=E.target;N.removeEventListener("dispose",Zt),Se(N)}function Se(E){ze(E),vt.remove(E)}function ze(E){const N=vt.get(E).programs;N!==void 0&&(N.forEach(function(V){Nt.releaseProgram(V)}),E.isShaderMaterial&&Nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,W,F,mt){N===null&&(N=Et);const Dt=F.isMesh&&F.matrixWorld.determinant()<0,Ut=Pe(E,N,V,W,F);lt.setMaterial(W,Dt);let Ot=V.index,Wt=1;if(W.wireframe===!0){if(Ot=st.getWireframeAttribute(V),Ot===void 0)return;Wt=2}const Xt=V.drawRange,Ft=V.attributes.position;let fe=Xt.start*Wt,ye=(Xt.start+Xt.count)*Wt;mt!==null&&(fe=Math.max(fe,mt.start*Wt),ye=Math.min(ye,(mt.start+mt.count)*Wt)),Ot!==null?(fe=Math.max(fe,0),ye=Math.min(ye,Ot.count)):Ft!=null&&(fe=Math.max(fe,0),ye=Math.min(ye,Ft.count));const Te=ye-fe;if(Te<0||Te===1/0)return;ie.setup(F,W,Ut,V,Ot);let mn,le=pt;if(Ot!==null&&(mn=Z.get(Ot),le=Gt,le.setIndex(mn)),F.isMesh)W.wireframe===!0?(lt.setLineWidth(W.wireframeLinewidth*$()),le.setMode(A.LINES)):le.setMode(A.TRIANGLES);else if(F.isLine){let Bt=W.linewidth;Bt===void 0&&(Bt=1),lt.setLineWidth(Bt*$()),F.isLineSegments?le.setMode(A.LINES):F.isLineLoop?le.setMode(A.LINE_LOOP):le.setMode(A.LINE_STRIP)}else F.isPoints?le.setMode(A.POINTS):F.isSprite&&le.setMode(A.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)le.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))le.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Bt=F._multiDrawStarts,Je=F._multiDrawCounts,ue=F._multiDrawCount,Nn=Ot?Z.get(Ot).bytesPerElement:1,Vs=vt.get(W).currentProgram.getUniforms();for(let gn=0;gn<ue;gn++)Vs.setValue(A,"_gl_DrawID",gn),le.render(Bt[gn]/Nn,Je[gn])}else if(F.isInstancedMesh)le.renderInstances(fe,Te,F.count);else if(V.isInstancedBufferGeometry){const Bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Je=Math.min(V.instanceCount,Bt);le.renderInstances(fe,Te,Je)}else le.render(fe,Te)};function ee(E,N,V){E.transparent===!0&&E.side===De&&E.forceSinglePass===!1?(E.side=qe,E.needsUpdate=!0,on(E,N,V),E.side=Kn,E.needsUpdate=!0,on(E,N,V),E.side=De):on(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),p=Jt.get(V),p.init(N),v.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const mt=F.material;if(mt)if(Array.isArray(mt))for(let Dt=0;Dt<mt.length;Dt++){const Ut=mt[Dt];ee(Ut,V,F),W.add(Ut)}else ee(mt,V,F),W.add(mt)}),v.pop(),p=null,W},this.compileAsync=function(E,N,V=null){const W=this.compile(E,N,V);return new Promise(F=>{function mt(){if(W.forEach(function(Dt){vt.get(Dt).currentProgram.isReady()&&W.delete(Dt)}),W.size===0){F(E);return}setTimeout(mt,10)}ut.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let We=null;function ct(E){We&&We(E)}function xt(){Vt.stop()}function kt(){Vt.start()}const Vt=new ih;Vt.setAnimationLoop(ct),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(E){We=E,Y.setAnimationLoop(E),E===null?Vt.stop():Vt.start()},Y.addEventListener("sessionstart",xt),Y.addEventListener("sessionend",kt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,T),p=Jt.get(E,v.length),p.init(N),v.push(p),tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_t.setFromProjectionMatrix(tt),K=this.localClippingEnabled,O=dt.init(this.clippingPlanes,K),_=Lt.get(E,m.length),_.init(),m.push(_),Y.enabled===!0&&Y.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&$t(mt,N,-1/0,x.sortObjects)}$t(E,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,bt),Tt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Tt&&ft.addToRenderList(_,E),this.info.render.frame++,O===!0&&dt.beginShadows();const V=p.state.shadowsArray;j.render(V,E,N),O===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(p.setupLights(),N.isArrayCamera){const mt=N.cameras;if(F.length>0)for(let Dt=0,Ut=mt.length;Dt<Ut;Dt++){const Ot=mt[Dt];re(W,F,E,Ot)}Tt&&ft.render(E);for(let Dt=0,Ut=mt.length;Dt<Ut;Dt++){const Ot=mt[Dt];me(_,E,Ot,Ot.viewport)}}else F.length>0&&re(W,F,E,N),Tt&&ft.render(E),me(_,E,N);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,N),ie.resetDefaultState(),I=-1,U=null,v.pop(),v.length>0?(p=v[v.length-1],O===!0&&dt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function $t(E,N,V,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_t.intersectsSprite(E)){W&&gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);const Dt=Q.update(E),Ut=E.material;Ut.visible&&_.push(E,Dt,Ut,V,gt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_t.intersectsObject(E))){const Dt=Q.update(E),Ut=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),gt.copy(E.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),gt.copy(Dt.boundingSphere.center)),gt.applyMatrix4(E.matrixWorld).applyMatrix4(tt)),Array.isArray(Ut)){const Ot=Dt.groups;for(let Wt=0,Xt=Ot.length;Wt<Xt;Wt++){const Ft=Ot[Wt],fe=Ut[Ft.materialIndex];fe&&fe.visible&&_.push(E,Dt,fe,V,gt.z,Ft)}}else Ut.visible&&_.push(E,Dt,Ut,V,gt.z,null)}}const mt=E.children;for(let Dt=0,Ut=mt.length;Dt<Ut;Dt++)$t(mt[Dt],N,V,W)}function me(E,N,V,W){const F=E.opaque,mt=E.transmissive,Dt=E.transparent;p.setupLightsView(V),O===!0&&dt.setGlobalState(x.clippingPlanes,V),W&&lt.viewport(y.copy(W)),F.length>0&&Re(F,N,V),mt.length>0&&Re(mt,N,V),Dt.length>0&&Re(Dt,N,V),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function re(E,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Di(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?qs:$n,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const mt=p.state.transmissionRenderTarget[W.id],Dt=W.viewport||y;mt.setSize(Dt.z,Dt.w);const Ut=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(L),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Tt&&ft.render(V);const Ot=x.toneMapping;x.toneMapping=li;const Wt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),O===!0&&dt.setGlobalState(x.clippingPlanes,W),Re(E,V,W),R.updateMultisampleRenderTarget(mt),R.updateRenderTargetMipmap(mt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ft=0,fe=N.length;Ft<fe;Ft++){const ye=N[Ft],Te=ye.object,mn=ye.geometry,le=ye.material,Bt=ye.group;if(le.side===De&&Te.layers.test(W.layers)){const Je=le.side;le.side=qe,le.needsUpdate=!0,Ce(Te,V,W,mn,le,Bt),le.side=Je,le.needsUpdate=!0,Xt=!0}}Xt===!0&&(R.updateMultisampleRenderTarget(mt),R.updateRenderTargetMipmap(mt))}x.setRenderTarget(Ut),x.setClearColor(L,z),Wt!==void 0&&(W.viewport=Wt),x.toneMapping=Ot}function Re(E,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,mt=E.length;F<mt;F++){const Dt=E[F],Ut=Dt.object,Ot=Dt.geometry,Wt=W===null?Dt.material:W,Xt=Dt.group;Ut.layers.test(V.layers)&&Ce(Ut,N,V,Ot,Wt,Xt)}}function Ce(E,N,V,W,F,mt){E.onBeforeRender(x,N,V,W,F,mt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,N,V,W,E,mt),F.transparent===!0&&F.side===De&&F.forceSinglePass===!1?(F.side=qe,F.needsUpdate=!0,x.renderBufferDirect(V,N,W,F,E,mt),F.side=Kn,F.needsUpdate=!0,x.renderBufferDirect(V,N,W,F,E,mt),F.side=De):x.renderBufferDirect(V,N,W,F,E,mt),E.onAfterRender(x,N,V,W,F,mt)}function on(E,N,V){N.isScene!==!0&&(N=Et);const W=vt.get(E),F=p.state.lights,mt=p.state.shadowsArray,Dt=F.state.version,Ut=Nt.getParameters(E,F.state,mt,N,V),Ot=Nt.getProgramCacheKey(Ut);let Wt=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",Zt),Wt=new Map,W.programs=Wt);let Xt=Wt.get(Ot);if(Xt!==void 0){if(W.currentProgram===Xt&&W.lightsStateVersion===Dt)return $e(E,Ut),Xt}else Ut.uniforms=Nt.getUniforms(E),E.onBeforeCompile(Ut,x),Xt=Nt.acquireProgram(Ut,Ot),Wt.set(Ot,Xt),W.uniforms=Ut.uniforms;const Ft=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=dt.uniform),$e(E,Ut),W.needsLights=un(E),W.lightsStateVersion=Dt,W.needsLights&&(Ft.ambientLightColor.value=F.state.ambient,Ft.lightProbe.value=F.state.probe,Ft.directionalLights.value=F.state.directional,Ft.directionalLightShadows.value=F.state.directionalShadow,Ft.spotLights.value=F.state.spot,Ft.spotLightShadows.value=F.state.spotShadow,Ft.rectAreaLights.value=F.state.rectArea,Ft.ltc_1.value=F.state.rectAreaLTC1,Ft.ltc_2.value=F.state.rectAreaLTC2,Ft.pointLights.value=F.state.point,Ft.pointLightShadows.value=F.state.pointShadow,Ft.hemisphereLights.value=F.state.hemi,Ft.directionalShadowMap.value=F.state.directionalShadowMap,Ft.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ft.spotShadowMap.value=F.state.spotShadowMap,Ft.spotLightMatrix.value=F.state.spotLightMatrix,Ft.spotLightMap.value=F.state.spotLightMap,Ft.pointShadowMap.value=F.state.pointShadowMap,Ft.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Xt,W.uniformsList=null,Xt}function Xe(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=So.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function $e(E,N){const V=vt.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Pe(E,N,V,W,F){N.isScene!==!0&&(N=Et),R.resetTextureUnits();const mt=N.fog,Dt=W.isMeshStandardMaterial?N.environment:null,Ut=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ye,Ot=(W.isMeshStandardMaterial?B:S).get(W.envMap||Dt),Wt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ft=!!V.morphAttributes.position,fe=!!V.morphAttributes.normal,ye=!!V.morphAttributes.color;let Te=li;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Te=x.toneMapping);const mn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=mn!==void 0?mn.length:0,Bt=vt.get(W),Je=p.state.lights;if(O===!0&&(K===!0||E!==U)){const bn=E===U&&W.id===I;dt.setState(W,E,bn)}let ue=!1;W.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Je.state.version||Bt.outputColorSpace!==Ut||F.isBatchedMesh&&Bt.batching===!1||!F.isBatchedMesh&&Bt.batching===!0||F.isBatchedMesh&&Bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Bt.instancing===!1||!F.isInstancedMesh&&Bt.instancing===!0||F.isSkinnedMesh&&Bt.skinning===!1||!F.isSkinnedMesh&&Bt.skinning===!0||F.isInstancedMesh&&Bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Bt.instancingMorph===!1&&F.morphTexture!==null||Bt.envMap!==Ot||W.fog===!0&&Bt.fog!==mt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==dt.numPlanes||Bt.numIntersection!==dt.numIntersection)||Bt.vertexAlphas!==Wt||Bt.vertexTangents!==Xt||Bt.morphTargets!==Ft||Bt.morphNormals!==fe||Bt.morphColors!==ye||Bt.toneMapping!==Te||Bt.morphTargetsCount!==le)&&(ue=!0):(ue=!0,Bt.__version=W.version);let Nn=Bt.currentProgram;ue===!0&&(Nn=on(W,N,F));let Vs=!1,gn=!1,iu=!1;const Ie=Nn.getUniforms(),Ri=Bt.uniforms;if(lt.useProgram(Nn.program)&&(Vs=!0,gn=!0,iu=!0),W.id!==I&&(I=W.id,gn=!0),Vs||U!==E){ot.reverseDepthBuffer?(rt.copy(E.projectionMatrix),Kp(rt),jp(rt),Ie.setValue(A,"projectionMatrix",rt)):Ie.setValue(A,"projectionMatrix",E.projectionMatrix),Ie.setValue(A,"viewMatrix",E.matrixWorldInverse);const bn=Ie.map.cameraPosition;bn!==void 0&&bn.setValue(A,Mt.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&Ie.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ie.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,gn=!0,iu=!0)}if(F.isSkinnedMesh){Ie.setOptional(A,F,"bindMatrix"),Ie.setOptional(A,F,"bindMatrixInverse");const bn=F.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ie.setValue(A,"boneTexture",bn.boneTexture,R))}F.isBatchedMesh&&(Ie.setOptional(A,F,"batchingTexture"),Ie.setValue(A,"batchingTexture",F._matricesTexture,R),Ie.setOptional(A,F,"batchingIdTexture"),Ie.setValue(A,"batchingIdTexture",F._indirectTexture,R),Ie.setOptional(A,F,"batchingColorTexture"),F._colorsTexture!==null&&Ie.setValue(A,"batchingColorTexture",F._colorsTexture,R));const su=V.morphAttributes;if((su.position!==void 0||su.normal!==void 0||su.color!==void 0)&&Rt.update(F,V,Nn),(gn||Bt.receiveShadow!==F.receiveShadow)&&(Bt.receiveShadow=F.receiveShadow,Ie.setValue(A,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ri.envMap.value=Ot,Ri.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Ri.envMapIntensity.value=N.environmentIntensity),gn&&(Ie.setValue(A,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&an(Ri,iu),mt&&W.fog===!0&&yt.refreshFogUniforms(Ri,mt),yt.refreshMaterialUniforms(Ri,W,q,G,p.state.transmissionRenderTarget[E.id]),So.upload(A,Xe(Bt),Ri,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(So.upload(A,Xe(Bt),Ri,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ie.setValue(A,"center",F.center),Ie.setValue(A,"modelViewMatrix",F.modelViewMatrix),Ie.setValue(A,"normalMatrix",F.normalMatrix),Ie.setValue(A,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const bn=W.uniformsGroups;for(let ru=0,K3=bn.length;ru<K3;ru++){const Bf=bn[ru];D.update(Bf,Nn),D.bind(Bf,Nn)}}return Nn}function an(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function un(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,V){vt.get(E.texture).__webglTexture=N,vt.get(E.depthTexture).__webglTexture=V;const W=vt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const V=vt.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){T=E,P=N,b=V;let W=!0,F=null,mt=!1,Dt=!1;if(E){const Ot=vt.get(E);if(Ot.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(A.FRAMEBUFFER,null),W=!1;else if(Ot.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Ot.__hasExternalTextures)R.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ft=E.depthTexture;if(Ot.__boundDepthTexture!==Ft){if(Ft!==null&&vt.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Wt=E.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const Xt=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?F=Xt[N][V]:F=Xt[N],mt=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?F=Xt[V]:F=Xt,y.copy(E.viewport),w.copy(E.scissor),H=E.scissorTest}else y.copy(St).multiplyScalar(q).floor(),w.copy(k).multiplyScalar(q).floor(),H=at;if(lt.bindFramebuffer(A.FRAMEBUFFER,F)&&W&&lt.drawBuffers(E,F),lt.viewport(y),lt.scissor(w),lt.setScissorTest(H),mt){const Ot=vt.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ot.__webglTexture,V)}else if(Dt){const Ot=vt.get(E.texture),Wt=N||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ot.__webglTexture,V||0,Wt)}I=-1},this.readRenderTargetPixels=function(E,N,V,W,F,mt,Dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){lt.bindFramebuffer(A.FRAMEBUFFER,Ut);try{const Ot=E.texture,Wt=Ot.format,Xt=Ot.type;if(!ot.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&V>=0&&V<=E.height-F&&A.readPixels(N,V,W,F,Ht.convert(Wt),Ht.convert(Xt),mt)}finally{const Ot=T!==null?vt.get(T).__webglFramebuffer:null;lt.bindFramebuffer(A.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,W,F,mt,Dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){const Ot=E.texture,Wt=Ot.format,Xt=Ot.type;if(!ot.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-W&&V>=0&&V<=E.height-F){lt.bindFramebuffer(A.FRAMEBUFFER,Ut);const Ft=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ft),A.bufferData(A.PIXEL_PACK_BUFFER,mt.byteLength,A.STREAM_READ),A.readPixels(N,V,W,F,Ht.convert(Wt),Ht.convert(Xt),0);const fe=T!==null?vt.get(T).__webglFramebuffer:null;lt.bindFramebuffer(A.FRAMEBUFFER,fe);const ye=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Yp(A,ye,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ft),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,mt),A.deleteBuffer(Ft),A.deleteSync(ye),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,V=0){E.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(E.image.width*W),mt=Math.floor(E.image.height*W),Dt=N!==null?N.x:0,Ut=N!==null?N.y:0;R.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,V,0,0,Dt,Ut,F,mt),lt.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,W=null,F=0){E.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let mt,Dt,Ut,Ot,Wt,Xt;V!==null?(mt=V.max.x-V.min.x,Dt=V.max.y-V.min.y,Ut=V.min.x,Ot=V.min.y):(mt=E.image.width,Dt=E.image.height,Ut=0,Ot=0),W!==null?(Wt=W.x,Xt=W.y):(Wt=0,Xt=0);const Ft=Ht.convert(N.format),fe=Ht.convert(N.type);R.setTexture2D(N,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const ye=A.getParameter(A.UNPACK_ROW_LENGTH),Te=A.getParameter(A.UNPACK_IMAGE_HEIGHT),mn=A.getParameter(A.UNPACK_SKIP_PIXELS),le=A.getParameter(A.UNPACK_SKIP_ROWS),Bt=A.getParameter(A.UNPACK_SKIP_IMAGES),Je=E.isCompressedTexture?E.mipmaps[F]:E.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Je.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Je.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ut),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ot),E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,F,Wt,Xt,mt,Dt,Ft,fe,Je.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,F,Wt,Xt,Je.width,Je.height,Ft,Je.data):A.texSubImage2D(A.TEXTURE_2D,F,Wt,Xt,mt,Dt,Ft,fe,Je),A.pixelStorei(A.UNPACK_ROW_LENGTH,ye),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Te),A.pixelStorei(A.UNPACK_SKIP_PIXELS,mn),A.pixelStorei(A.UNPACK_SKIP_ROWS,le),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Bt),F===0&&N.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),lt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V=null,W=null,F=0){E.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0);let mt,Dt,Ut,Ot,Wt,Xt,Ft,fe,ye;const Te=E.isCompressedTexture?E.mipmaps[F]:E.image;V!==null?(mt=V.max.x-V.min.x,Dt=V.max.y-V.min.y,Ut=V.max.z-V.min.z,Ot=V.min.x,Wt=V.min.y,Xt=V.min.z):(mt=Te.width,Dt=Te.height,Ut=Te.depth,Ot=0,Wt=0,Xt=0),W!==null?(Ft=W.x,fe=W.y,ye=W.z):(Ft=0,fe=0,ye=0);const mn=Ht.convert(N.format),le=Ht.convert(N.type);let Bt;if(N.isData3DTexture)R.setTexture3D(N,0),Bt=A.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)R.setTexture2DArray(N,0),Bt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const Je=A.getParameter(A.UNPACK_ROW_LENGTH),ue=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Nn=A.getParameter(A.UNPACK_SKIP_PIXELS),Vs=A.getParameter(A.UNPACK_SKIP_ROWS),gn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Te.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Te.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ot),A.pixelStorei(A.UNPACK_SKIP_ROWS,Wt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Xt),E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Bt,F,Ft,fe,ye,mt,Dt,Ut,mn,le,Te.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Bt,F,Ft,fe,ye,mt,Dt,Ut,mn,Te.data):A.texSubImage3D(Bt,F,Ft,fe,ye,mt,Dt,Ut,mn,le,Te),A.pixelStorei(A.UNPACK_ROW_LENGTH,Je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ue),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Nn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Vs),A.pixelStorei(A.UNPACK_SKIP_IMAGES,gn),F===0&&N.generateMipmaps&&A.generateMipmap(Bt),lt.unbindTexture()},this.initRenderTarget=function(E){vt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),lt.unbindTexture()},this.resetState=function(){P=0,b=0,T=null,lt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===hc?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===Yr?"display-p3":"srgb"}}class qc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bo extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new He,this.environmentIntensity=1,this.environmentRotation=new He,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dc,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new C;class rr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yc extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Es;const or=new C,Ts=new C,As=new C,Rs=new ht,ar=new ht,Dh=new qt,Eo=new C,cr=new C,To=new C,Nh=new ht,Kc=new ht,Uh=new ht;class Oh extends xe{constructor(t=new Yc){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lh(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new rr(n,3,0,!1)),Es.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),Dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ao(Eo.set(-.5,-.5,0),As,o,Ts,s,r),Ao(cr.set(.5,-.5,0),As,o,Ts,s,r),Ao(To.set(.5,.5,0),As,o,Ts,s,r),Nh.set(0,0),Kc.set(1,0),Uh.set(1,1);let a=t.ray.intersectTriangle(Eo,cr,To,!1,or);if(a===null&&(Ao(cr.set(-.5,.5,0),As,o,Ts,s,r),Kc.set(0,1),a=t.ray.intersectTriangle(Eo,To,cr,!1,or),a===null))return;const c=t.ray.origin.distanceTo(or);c<t.near||c>t.far||e.push({distance:c,point:or.clone(),uv:yn.getInterpolation(or,Eo,cr,To,Nh,Kc,Uh,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ao(i,t,e,n,s,r){Rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ar.x=r*Rs.x-s*Rs.y,ar.y=s*Rs.x+r*Rs.y):ar.copy(Rs),i.copy(t),i.x+=ar.x,i.y+=ar.y,i.applyMatrix4(Dh)}const Fh=new C,kh=new oe,Bh=new oe,T_=new C,zh=new qt,Ro=new C,jc=new Fn,Hh=new qt,$c=new so;class A_ extends et{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fu,this.bindMatrix=new qt,this.bindMatrixInverse=new qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ro),this.boundingBox.expandByPoint(Ro)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ro),this.boundingSphere.expandByPoint(Ro)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jc.copy(this.boundingSphere),jc.applyMatrix4(s),t.ray.intersectsSphere(jc)!==!1&&(Hh.copy(s).invert(),$c.copy(t.ray).applyMatrix4(Hh),!(this.boundingBox!==null&&$c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,$c)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new oe,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;kh.fromBufferAttribute(s.attributes.skinIndex,t),Bh.fromBufferAttribute(s.attributes.skinWeight,t),Fh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Bh.getComponent(r);if(o!==0){const a=kh.getComponent(r);zh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(T_.copy(Fh).applyMatrix4(zh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Gh extends xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vh extends Ue{constructor(t=null,e=1,n=1,s,r,o,a,c,l=nn,u=nn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new qt,R_=new qt;class Jc{constructor(t=[],e=[]){this.uuid=vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:R_;Wh.multiplyMatrices(a,e[r]),Wh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Vh(e,t,t,xn,En);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gh),this.bones.push(o),this.boneInverses.push(new qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Zc extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new qt,Xh=new qt,Co=[],qh=new On,C_=new qt,lr=new et,ur=new Fn;class Yh extends et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,C_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),qh.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(qh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),ur.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Xh.multiplyMatrices(n,Cs),lr.matrixWorld=Xh,lr.raycast(t,Co);for(let o=0,a=Co.length;o<a;o++){const c=Co[o];c.instanceId=r,c.object=this,e.push(c)}Co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vh(new Float32Array(s*this.count),s,this.count,Ia,En));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Kh extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Po=new C,Io=new C,jh=new qt,hr=new so,Lo=new Fn,Qc=new C,$h=new C;class tl extends xe{constructor(t=new Me,e=new Kh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Po.fromBufferAttribute(e,s-1),Io.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Po.distanceTo(Io);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;jh.copy(s).invert(),hr.copy(t.ray).applyMatrix4(jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=u.getX(_),v=u.getX(_+1),x=Do(this,t,hr,c,m,v);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=Do(this,t,hr,c,_,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=Do(this,t,hr,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Do(this,t,hr,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Do(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Po.fromBufferAttribute(o,s),Io.fromBufferAttribute(o,r),e.distanceSqToSegment(Po,Io,Qc,$h)>n)return;Qc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qc);if(!(c<t.near||c>t.far))return{distance:c,point:$h.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Jh=new C,Zh=new C;class P_ extends tl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Jh.fromBufferAttribute(e,s),Zh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jh.distanceTo(Zh);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I_ extends tl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class No extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qh=new qt,el=new so,Uo=new Fn,Oo=new C;class nl extends xe{constructor(t=new Me,e=new No){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,t.ray.intersectsSphere(Uo)===!1)return;Qh.copy(s).invert(),el.copy(t.ray).applyMatrix4(Qh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);Oo.fromBufferAttribute(h,p),td(Oo,p,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Oo.fromBufferAttribute(h,g),td(Oo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function td(i,t,e,n,s,r,o){const a=el.distanceSqToPoint(i);if(a<e){const c=new C;el.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ii extends Ue{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,c=new qt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class il extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class L_ extends il{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Fo=new C,rl=new sl,ol=new sl,al=new sl;class D_ extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),l=Fo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),rl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,p),ol.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,p),al.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),ol.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),al.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(rl.calc(c),ol.calc(c),al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ed(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function N_(i,t){const e=1-i;return e*e*t}function U_(i,t){return 2*(1-i)*i*t}function O_(i,t){return i*i*t}function dr(i,t,e,n){return N_(i,t)+U_(i,e)+O_(i,n)}function F_(i,t){const e=1-i;return e*e*e*t}function k_(i,t){const e=1-i;return 3*e*e*i*t}function B_(i,t){return 3*(1-i)*i*i*t}function z_(i,t){return i*i*i*t}function fr(i,t,e,n,s){return F_(i,t)+k_(i,e)+B_(i,n)+z_(i,s)}class nd extends Bn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class H_ extends Bn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y),fr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class id extends Bn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class G_ extends Bn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sd extends Bn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(t,s.x,r.x,o.x),dr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class V_ extends Bn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(t,s.x,r.x,o.x),dr(t,s.y,r.y,o.y),dr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rd extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(ed(a,c.x,l.x,u.x,h.x),ed(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:L_,CatmullRomCurve3:D_,CubicBezierCurve:nd,CubicBezierCurve3:H_,EllipseCurve:il,LineCurve:id,LineCurve3:G_,QuadraticBezierCurve:sd,QuadraticBezierCurve3:V_,SplineCurve:rd});class W_ extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new cl[s.type]().fromJSON(s))}return this}}class ll extends W_{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new id(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new sd(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new nd(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new il(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ko extends Me{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new C,d=new ht,f=new C,g=new C,_=new C;let p=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=e;v++){const x=n+v*u*s,M=Math.sin(x),P=Math.cos(x);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*M,h.y=t[b].y,h.z=t[b].x*P,o.push(h.x,h.y,h.z),d.x=v/e,d.y=b/(t.length-1),a.push(d.x,d.y);const T=c[3*b+0]*M,I=c[3*b+1],U=c[3*b+0]*P;l.push(T,I,U)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const M=x+v*t.length,P=M,b=M+t.length,T=M+t.length+1,I=M+1;r.push(P,b,I),r.push(T,I,b)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.points,t.segments,t.phiStart,t.phiLength)}}class pr extends ko{constructor(t=1,e=1,n=4,s=8){const r=new ll;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new pr(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ee extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function v(){const M=new C,P=new C;let b=0;const T=(e-t)/n;for(let I=0;I<=r;I++){const U=[],y=I/r,w=y*(e-t)+t;for(let H=0;H<=s;H++){const L=H/s,z=L*c+a,J=Math.sin(z),G=Math.cos(z);P.x=w*J,P.y=-y*n+p,P.z=w*G,h.push(P.x,P.y,P.z),M.set(J,T,G).normalize(),d.push(M.x,M.y,M.z),f.push(L,1-y),U.push(g++)}_.push(U)}for(let I=0;I<s;I++)for(let U=0;U<r;U++){const y=_[U][I],w=_[U+1][I],H=_[U+1][I+1],L=_[U][I+1];t>0&&(u.push(y,w,L),b+=3),e>0&&(u.push(w,H,L),b+=3)}l.addGroup(m,b,0),m+=b}function x(M){const P=g,b=new ht,T=new C;let I=0;const U=M===!0?t:e,y=M===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;const w=g;for(let H=0;H<=s;H++){const z=H/s*c+a,J=Math.cos(z),G=Math.sin(z);T.x=U*G,T.y=p*y,T.z=U*J,h.push(T.x,T.y,T.z),d.push(0,y,0),b.x=J*.5+.5,b.y=G*.5*y+.5,f.push(b.x,b.y),g++}for(let H=0;H<s;H++){const L=P+H,z=w+H;M===!0?u.push(z,z+1,L):u.push(z+1,z,L),I+=3}l.addGroup(m,I,M===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vi extends Ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new vi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new C,M=new C,P=new C;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],M),f(e[b+2],P),c(x,M,P,v)}function c(v,x,M,P){const b=P+1,T=[];for(let I=0;I<=b;I++){T[I]=[];const U=v.clone().lerp(M,I/b),y=x.clone().lerp(M,I/b),w=b-I;for(let H=0;H<=w;H++)H===0&&I===b?T[I][H]=U:T[I][H]=U.clone().lerp(y,H/w)}for(let I=0;I<b;I++)for(let U=0;U<2*(b-I)-1;U++){const y=Math.floor(U/2);U%2===0?(d(T[I][y+1]),d(T[I+1][y]),d(T[I][y])):(d(T[I][y+1]),d(T[I+1][y+1]),d(T[I+1][y]))}}function l(v){const x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function u(){const v=new C;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=p(v)/2/Math.PI+.5,P=m(v)/Math.PI+.5;o.push(M,1-P)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],M=o[v+2],P=o[v+4],b=Math.max(x,M,P),T=Math.min(x,M,P);b>.9&&T<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){const v=new C,x=new C,M=new C,P=new C,b=new ht,T=new ht,I=new ht;for(let U=0,y=0;U<r.length;U+=9,y+=6){v.set(r[U+0],r[U+1],r[U+2]),x.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),b.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),P.copy(v).add(x).add(M).divideScalar(3);const w=p(P);_(b,y+0,v,w),_(T,y+2,x,w),_(I,y+4,M,w)}}function _(v,x,M,P){P<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=P/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.details)}}class Vi extends ll{constructor(t){super(t),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ll().fromJSON(s))}return this}}const X_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=od(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=$_(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return mr(r,o,e,a,c,f,0),o}};function od(i,t,e,n,s){let r,o;if(s===a2(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ld(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ld(r,i[r],i[r+1],o);return o&&zo(o,o.next)&&(_r(o),o=o.next),o}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zo(e,e.next)||we(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&e2(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Y_(i,n,s,r):q_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),_r(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=K_(Wi(i),t,e),mr(i,t,e,n,s,r,2)):o===2&&j_(i,t,e,n,s,r):mr(Wi(i),t,e,n,s,r,1);break}}}function q_(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Ps(s,a,r,c,o,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Y_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,p=u>h?u>d?u:d:h>d?h:d,m=ul(f,g,t,e,n),v=ul(_,p,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=m&&M&&M.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Ps(a,u,c,h,l,d,x.x,x.y)&&we(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ps(a,u,c,h,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Ps(a,u,c,h,l,d,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ps(a,u,c,h,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function K_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!zo(s,r)&&ad(s,n,n.next,r)&&gr(s,r)&&gr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),_r(n),_r(n.next),n=i=r),n=n.next}while(n!==i);return Wi(n)}function j_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s2(o,a)){let c=cd(o,a);o=Wi(o,o.next),c=Wi(c,c.next),mr(o,t,e,n,s,r,0),mr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=od(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(i2(l));for(s.sort(J_),r=0;r<s.length;r++)e=Z_(s[r],e);return e}function J_(i,t){return i.x-t.x}function Z_(i,t){const e=Q_(i,t);if(!e)return t;const n=cd(e,i);return Wi(n,n.next),Wi(e,e.next)}function Q_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ps(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),gr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&t2(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function t2(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function e2(i,t,e,n){let s=i;do s.z===0&&(s.z=ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,n2(s)}function n2(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function i2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ps(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function s2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!r2(i,t)&&(gr(i,t)&&gr(t,i)&&o2(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||zo(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zo(i,t){return i.x===t.x&&i.y===t.y}function ad(i,t,e,n){const s=Go(we(i,t,e)),r=Go(we(i,t,n)),o=Go(we(e,n,i)),a=Go(we(e,n,t));return!!(s!==r&&o!==a||s===0&&Ho(i,e,t)||r===0&&Ho(i,n,t)||o===0&&Ho(e,i,n)||a===0&&Ho(e,t,n))}function Ho(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Go(i){return i>0?1:i<0?-1:0}function r2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function o2(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cd(i,t){const e=new hl(i.i,i.x,i.y),n=new hl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ld(i,t,e,n){const s=new hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a2(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class yi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return yi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ud(t),hd(n,t);let o=t.length;e.forEach(ud);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,hd(n,e[c]);const a=X_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ud(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xi extends Me{constructor(t=new Vi([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:c2;let x,M=!1,P,b,T,I;m&&(x=m.getSpacedPoints(u),M=!0,d=!1,P=m.computeFrenetFrames(u,!1),b=new C,T=new C,I=new C),d||(p=0,f=0,g=0,_=0);const U=a.extractPoints(l);let y=U.shape;const w=U.holes;if(!yi.isClockWise(y)){y=y.reverse();for(let $=0,A=w.length;$<A;$++){const nt=w[$];yi.isClockWise(nt)&&(w[$]=nt.reverse())}}const L=yi.triangulateShape(y,w),z=y;for(let $=0,A=w.length;$<A;$++){const nt=w[$];y=y.concat(nt)}function J($,A,nt){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(A,nt)}const G=y.length,q=L.length;function X($,A,nt){let ut,ot,lt;const wt=$.x-A.x,vt=$.y-A.y,R=nt.x-$.x,S=nt.y-$.y,B=wt*wt+vt*vt,Z=wt*S-vt*R;if(Math.abs(Z)>Number.EPSILON){const st=Math.sqrt(B),Q=Math.sqrt(R*R+S*S),Nt=A.x-vt/st,yt=A.y+wt/st,Lt=nt.x-S/Q,Jt=nt.y+R/Q,dt=((Lt-Nt)*S-(Jt-yt)*R)/(wt*S-vt*R);ut=Nt+wt*dt-$.x,ot=yt+vt*dt-$.y;const j=ut*ut+ot*ot;if(j<=2)return new ht(ut,ot);lt=Math.sqrt(j/2)}else{let st=!1;wt>Number.EPSILON?R>Number.EPSILON&&(st=!0):wt<-Number.EPSILON?R<-Number.EPSILON&&(st=!0):Math.sign(vt)===Math.sign(S)&&(st=!0),st?(ut=-vt,ot=wt,lt=Math.sqrt(B)):(ut=wt,ot=vt,lt=Math.sqrt(B/2))}return new ht(ut/lt,ot/lt)}const bt=[];for(let $=0,A=z.length,nt=A-1,ut=$+1;$<A;$++,nt++,ut++)nt===A&&(nt=0),ut===A&&(ut=0),bt[$]=X(z[$],z[nt],z[ut]);const St=[];let k,at=bt.concat();for(let $=0,A=w.length;$<A;$++){const nt=w[$];k=[];for(let ut=0,ot=nt.length,lt=ot-1,wt=ut+1;ut<ot;ut++,lt++,wt++)lt===ot&&(lt=0),wt===ot&&(wt=0),k[ut]=X(nt[ut],nt[lt],nt[wt]);St.push(k),at=at.concat(k)}for(let $=0;$<p;$++){const A=$/p,nt=f*Math.cos(A*Math.PI/2),ut=g*Math.sin(A*Math.PI/2)+_;for(let ot=0,lt=z.length;ot<lt;ot++){const wt=J(z[ot],bt[ot],ut);tt(wt.x,wt.y,-nt)}for(let ot=0,lt=w.length;ot<lt;ot++){const wt=w[ot];k=St[ot];for(let vt=0,R=wt.length;vt<R;vt++){const S=J(wt[vt],k[vt],ut);tt(S.x,S.y,-nt)}}}const _t=g+_;for(let $=0;$<G;$++){const A=d?J(y[$],at[$],_t):y[$];M?(T.copy(P.normals[0]).multiplyScalar(A.x),b.copy(P.binormals[0]).multiplyScalar(A.y),I.copy(x[0]).add(T).add(b),tt(I.x,I.y,I.z)):tt(A.x,A.y,0)}for(let $=1;$<=u;$++)for(let A=0;A<G;A++){const nt=d?J(y[A],at[A],_t):y[A];M?(T.copy(P.normals[$]).multiplyScalar(nt.x),b.copy(P.binormals[$]).multiplyScalar(nt.y),I.copy(x[$]).add(T).add(b),tt(I.x,I.y,I.z)):tt(nt.x,nt.y,h/u*$)}for(let $=p-1;$>=0;$--){const A=$/p,nt=f*Math.cos(A*Math.PI/2),ut=g*Math.sin(A*Math.PI/2)+_;for(let ot=0,lt=z.length;ot<lt;ot++){const wt=J(z[ot],bt[ot],ut);tt(wt.x,wt.y,h+nt)}for(let ot=0,lt=w.length;ot<lt;ot++){const wt=w[ot];k=St[ot];for(let vt=0,R=wt.length;vt<R;vt++){const S=J(wt[vt],k[vt],ut);M?tt(S.x,S.y+x[u-1].y,x[u-1].x+nt):tt(S.x,S.y,h+nt)}}}O(),K();function O(){const $=s.length/3;if(d){let A=0,nt=G*A;for(let ut=0;ut<q;ut++){const ot=L[ut];Mt(ot[2]+nt,ot[1]+nt,ot[0]+nt)}A=u+p*2,nt=G*A;for(let ut=0;ut<q;ut++){const ot=L[ut];Mt(ot[0]+nt,ot[1]+nt,ot[2]+nt)}}else{for(let A=0;A<q;A++){const nt=L[A];Mt(nt[2],nt[1],nt[0])}for(let A=0;A<q;A++){const nt=L[A];Mt(nt[0]+G*u,nt[1]+G*u,nt[2]+G*u)}}n.addGroup($,s.length/3-$,0)}function K(){const $=s.length/3;let A=0;rt(z,A),A+=z.length;for(let nt=0,ut=w.length;nt<ut;nt++){const ot=w[nt];rt(ot,A),A+=ot.length}n.addGroup($,s.length/3-$,1)}function rt($,A){let nt=$.length;for(;--nt>=0;){const ut=nt;let ot=nt-1;ot<0&&(ot=$.length-1);for(let lt=0,wt=u+p*2;lt<wt;lt++){const vt=G*lt,R=G*(lt+1),S=A+ut+vt,B=A+ot+vt,Z=A+ot+R,st=A+ut+R;gt(S,B,Z,st)}}}function tt($,A,nt){c.push($),c.push(A),c.push(nt)}function Mt($,A,nt){Et($),Et(A),Et(nt);const ut=s.length/3,ot=v.generateTopUV(n,s,ut-3,ut-2,ut-1);Tt(ot[0]),Tt(ot[1]),Tt(ot[2])}function gt($,A,nt,ut){Et($),Et(A),Et(ut),Et(A),Et(nt),Et(ut);const ot=s.length/3,lt=v.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);Tt(lt[0]),Tt(lt[1]),Tt(lt[3]),Tt(lt[1]),Tt(lt[2]),Tt(lt[3])}function Et($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function Tt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return l2(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new cl[s.type]().fromJSON(s)),new Xi(n,t.options)}}const c2={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-h),new ht(d,1-g),new ht(_,1-m)]:[new ht(a,1-c),new ht(u,1-h),new ht(f,1-g),new ht(p,1-m)]}};function l2(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xr extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xr(t.radius,t.detail)}}class Vo extends Bo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vo(t.radius,t.detail)}}class dl extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new C,g=new ht;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const v=m+p,x=v,M=v+n+1,P=v+n+2,b=v+1;a.push(x,M,b),a.push(M,P,b)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vr extends Me{constructor(t=new Vi([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const g=d.holes;yi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const v=g[p];yi.isClockWise(v)===!0&&(g[p]=v.reverse())}const _=yi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){const v=f[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=_.length;p<m;p++){const v=_[p],x=v[0]+h,M=v[1]+h,P=v[2]+h;n.push(x,M,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return u2(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new vr(n,t.curveSegments)}}function u2(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ae extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new C,d=new C,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const b=P/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(b+M,1-x),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const x=u[m][v+1],M=u[m][v],P=u[m+1][v],b=u[m+1][v+1];(m!==0||o>0)&&f.push(x,M,b),(m!==n-1||c<Math.PI)&&f.push(M,P,b)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class si extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,p=f/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(_),h.y=(t+e*Math.cos(p))*Math.sin(_),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ne extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zn extends ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class yr extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Wo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function h2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function d2(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function dd(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function fd(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class Mr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class f2 extends Mr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ss,endingEnd:ss}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rs:r=t,a=2*e-n;break;case qr:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rs:o=t,c=2*n-e;break;case qr:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,M=f*p-f*_;for(let P=0;P!==a;++P)r[P]=m*o[u+P]+v*o[l+P]+x*o[c+P]+M*o[h+P];return r}}class pd extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class p2 extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Hn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wo(e,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wo(t.times,Array),values:Wo(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new p2(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new f2(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ys:e=this.InterpolantFactoryMethodDiscrete;break;case Ks:e=this.InterpolantFactoryMethodLinear;break;case ac:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&h2(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ac,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Hn.prototype.TimeBufferType=Float32Array,Hn.prototype.ValueBufferType=Float32Array,Hn.prototype.DefaultInterpolation=Ks;class Is extends Hn{constructor(t,e,n){super(t,e,n)}}Is.prototype.ValueTypeName="bool",Is.prototype.ValueBufferType=Array,Is.prototype.DefaultInterpolation=Ys,Is.prototype.InterpolantFactoryMethodLinear=void 0,Is.prototype.InterpolantFactoryMethodSmooth=void 0;class md extends Hn{}md.prototype.ValueTypeName="color";class Ls extends Hn{}Ls.prototype.ValueTypeName="number";class m2 extends Mr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)Ke.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ds extends Hn{InterpolantFactoryMethodLinear(t){return new m2(this.times,this.values,this.getValueSize(),t)}}Ds.prototype.ValueTypeName="quaternion",Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Hn{constructor(t,e,n){super(t,e,n)}}Ns.prototype.ValueTypeName="string",Ns.prototype.ValueBufferType=Array,Ns.prototype.DefaultInterpolation=Ys,Ns.prototype.InterpolantFactoryMethodLinear=void 0,Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Hn{}Us.prototype.ValueTypeName="vector";class fl{constructor(t="",e=-1,n=[],s=cc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(_2(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=d2(c);c=dd(c,1,u),l=dd(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ls(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const p=[],m=[];fd(f,p,m,g),p.length!==0&&_.push(new h(d,p,m))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}s.push(new Ls(".morphTargetInfluence["+_+"]",p,m))}c=f.length*o}else{const f=".bones["+e[h].name+"]";n(Us,f+".position",d,"pos",s),n(Ds,f+".quaternion",d,"rot",s),n(Us,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function g2(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return md;case"quaternion":return Ds;case"bool":case"boolean":return Is;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _2(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=g2(i.type);if(i.times===void 0){const e=[],n=[];fd(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Mi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class x2{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const v2=new x2;class Os{constructor(t){this.manager=t!==void 0?t:v2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class y2 extends Error{constructor(t,e){super(t),this.response=e}}class gd extends Os{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Mi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ri[t]!==void 0){ri[t].push({onLoad:e,onProgress:n,onError:s});return}ri[t]=[],ri[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ri[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){v();function v(){h.read().then(({done:x,value:M})=>{if(x)m.close();else{_+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,T=u.length;b<T;b++){const I=u[b];I.onProgress&&I.onProgress(P)}m.enqueue(M),v()}},x=>{m.error(x)})}}});return new Response(p)}else throw new y2(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Mi.add(t,l);const u=ri[t];delete ri[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ri[t];if(u===void 0)throw this.manager.itemError(t),l;delete ri[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class M2 extends Os{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Mi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Js("img");function c(){u(),Mi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class S2 extends Os{constructor(t){super(t)}load(t,e,n,s){const r=new Ue,o=new M2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Sr extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pl extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ml=new qt,_d=new C,xd=new C;class gl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_d.setFromMatrixPosition(t.matrixWorld),e.position.copy(_d),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class w2 extends gl{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=as*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class b2 extends Sr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new w2}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const vd=new qt,wr=new C,_l=new C;class E2 extends gl{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(wr),_l.copy(n.position),_l.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_l),n.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd)}}class xl extends Sr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new E2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class T2 extends gl{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qi extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new T2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class A2 extends Sr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class br{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class R2 extends Os{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Mi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Mi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Mi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Mi.add(t,c),r.manager.itemStart(t)}}class C2{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){Ke.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;Ke.multiplyQuaternionsFlat(t,o,t,e,t,n),Ke.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const vl="\\[\\]\\.:\\/",P2=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",I2="[^"+vl.replace("\\.","")+"]",L2=/((?:WC+[\/:])*)/.source.replace("WC",yl),D2=/(WCOD+)?/.source.replace("WCOD",I2),N2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),U2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),O2=new RegExp("^"+L2+D2+N2+U2+"$"),F2=["material","materials","bones","map"];class k2{constructor(t,e,n){const s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ce{constructor(t,e,n){this.path=e,this.parsedPath=n||ce.parseTrackName(e),this.node=ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ce.Composite(t,e,n):new ce(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P2,"")}static parseTrackName(t){const e=O2.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);F2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ce.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ce.Composite=k2,ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray],ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class B2{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:ss,endingEnd:ss};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case xp:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case cc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===_p;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===mp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=rs,s.endingEnd=rs):(t?s.endingStart=this.zeroSlopeAtStart?rs:ss:s.endingStart=qr,e?s.endingEnd=this.zeroSlopeAtEnd?rs:ss:s.endingEnd=qr)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const z2=new Float32Array(1);class H2 extends Ii{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;g=new C2(ce.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new pd(new Float32Array(2),new Float32Array(2),1,z2),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?fl.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=cc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new B2(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?fl.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma),(function(){var i="[native-gamepad-bridge]",t=typeof window.__p5NativeHost<"u"&&window.__p5NativeHost===!0||typeof window.webkit<"u"&&window.webkit&&window.webkit.messageHandlers;if(!t)return;var e={connected:!1,timestamp:0,buttons:[],axes:[]};function n(){return{pressed:!1,touched:!1,value:0}}function s(a){if(a==null)return n();if(typeof a=="boolean")return{pressed:a,touched:a,value:a?1:0};if(typeof a=="number"){var c=a>.5;return{pressed:c,touched:c,value:a}}if(typeof a=="object"){var l="p"in a?!!a.p:"pressed"in a?!!a.pressed:!1,u=typeof a.v=="number"?a.v:typeof a.value=="number"?a.value:l?1:0;return{pressed:l,touched:l,value:u}}return n()}function r(){for(var a=new Array(17),c=0;c<17;c++)a[c]=s(e.buttons&&e.buttons[c]);var l=[0,0,0,0];if(e.axes&&e.axes.length)for(var u=0;u<Math.min(4,e.axes.length);u++){var h=e.axes[u];l[u]=typeof h=="number"&&!isNaN(h)?h:0}return{id:"Native iOS Gamepad (GCController bridge)",index:0,connected:e.connected,timestamp:e.timestamp,mapping:"standard",axes:l,buttons:a,vibrationActuator:null,hapticActuators:[]}}window.__nativeGamepadLastRaw=null,window.__nativeGamepadUpdateCount=0,window.__nativeGamepadUpdate=function(a){a&&(e.buttons=Array.isArray(a.buttons)?a.buttons:[],e.axes=Array.isArray(a.axes)?a.axes:[],e.connected=!0,e.timestamp=typeof performance<"u"&&performance.now?performance.now():Date.now(),window.__nativeGamepadLastRaw=a,window.__nativeGamepadUpdateCount++)},window.__nativeGamepadConnection=function(a){var c=e.connected;if(e.connected=!!a,e.connected||(e.buttons=[],e.axes=[]),e.connected!==c){var l=e.connected?"gamepadconnected":"gamepaddisconnected",u=new Event(l);u.gamepad=r(),window.dispatchEvent(u)}};var o=typeof navigator.getGamepads=="function"?navigator.getGamepads.bind(navigator):null;navigator.getGamepads=function(){if(e.connected)return[r(),null,null,null];if(o)try{return o()}catch{return[null,null,null,null]}return[null,null,null,null]},window.__nativeGamepadBridgeReady=!0,console.log(i,"active: iOS host detected")})();const G2=60,V2=.5,W2=5e3,yd=1e6,Md=2e6;function X2(){const i=new bo;i.background=new zt(131850),i.add(new pl(6328512,2105392,.55)),i.fog=new qc(131850,yd,Md);const t=new qi(16777215,1.1);return t.position.set(40,30,20),i.add(t),i}function q2(){return new Fe(G2,window.innerWidth/window.innerHeight,V2,W2)}const Sd=Object.freeze({maxThrottleAccel:18,reverseThrottleAccel:12,maxSpeed:60,yawRate:1.4,pitchRate:1.4,rollRate:2,arcadeDampingRate:.6,hackRadius:8}),tn={...Sd};function Y2(){Object.assign(tn,Sd)}const K2=15659509,j2=8161430,$2=1259630,J2=3108832,Z2=16106818,wd=4828159;function bd(i){const t=new Vi;i==="stripe"?(t.moveTo(.15,.34),t.lineTo(.7,.13),t.lineTo(.7,.02),t.lineTo(.15,.17)):(t.moveTo(.15,.17),t.lineTo(.7,.02),t.lineTo(.7,-.32),t.lineTo(.15,-.48)),t.closePath();const e=new Xi(t,{depth:.045,bevelEnabled:!1});return e.rotateX(Math.PI/2),e.translate(0,.0225,0),e}function Q2(){const i=new Vi;i.moveTo(.26,.02),i.lineTo(-.06,.48),i.lineTo(-.38,.12),i.lineTo(-.34,-.12),i.lineTo(-.08,-.32),i.closePath();const t=new Xi(i,{depth:.05,bevelEnabled:!1});return t.rotateY(-Math.PI/2),t.translate(.025,0,0),t}function tx(i,t){const e=new Vi;e.moveTo(0,0),e.lineTo(-.06,t),e.lineTo(-.46,0),e.closePath();const n=new Xi(e,{depth:.035,bevelEnabled:!1});return n.rotateY(-Math.PI/2),n.translate(.0175,0,0),n}function ex(){const i=new pe,t=new ne({color:K2,roughness:.42,metalness:.45,emissive:790550,side:De}),e=new ne({color:j2,roughness:.6,metalness:.5,emissive:329740,side:De}),n=new ne({color:$2,roughness:.08,metalness:.6,emissive:662586,side:De}),s=new ne({color:J2,roughness:.35,metalness:.45,emissive:662602,side:De}),r=new ne({color:Z2,roughness:.3,metalness:.55,emissive:2759936,side:De}),o=new ne({color:wd,roughness:.3,metalness:.2,emissive:wd,emissiveIntensity:1.4,side:De}),a=new Ee(.22,.18,1.05,6);a.rotateX(Math.PI/2);const c=new et(a,t);c.scale.set(1.3,.7,1),c.position.z=-.05,i.add(c);const l=new vi(.22,.92,6);l.rotateX(Math.PI/2);const u=new et(l,t);u.scale.set(1.3,.7,1),u.position.z=.935,i.add(u);const h=new et(new cn(.42,.09,.92),e);h.position.set(0,-.16,-.05),i.add(h);const d=new et(new ae(.19,18,12),n);d.scale.set(.86,.6,1.7),d.position.set(0,.13,.22),i.add(d);const f=new et(tx(.46,.36),t);f.position.set(0,.12,-.2),i.add(f);const g=new et(new cn(.04,.08,.13),r);g.position.set(0,.47,-.29),i.add(g);for(const m of[1,-1]){const v=new pe;v.add(new et(bd("main"),t)),v.add(new et(bd("stripe"),s));const x=new et(Q2(),t);x.position.set(.69,0,-.08),v.add(x);const M=new et(new cn(.06,.5,.05),s);M.position.set(.69,.08,.12),M.rotation.x=-.5,v.add(M);const P=new Ee(.028,.04,.56,10);P.rotateX(Math.PI/2);const b=new et(P,e);b.position.set(.69,0,.3),v.add(b);const T=new et(new Ee(.03,.02,.15,10),r);T.rotation.x=Math.PI/2,T.position.set(.69,0,.62),v.add(T);const I=new et(new cn(.16,.13,.4),o);I.position.set(.28,-.02,-.28),v.add(I),v.position.set(m*.16,0,-.05),m===-1&&(v.scale.x=-1),v.rotation.z=m*.14,i.add(v)}const _=new Ge({color:9425151,transparent:!0,opacity:.85,blending:Un,depthWrite:!1}),p=[];for(const m of[-.12,.12]){const v=new Ee(.12,.095,.36,8);v.rotateX(Math.PI/2);const x=new et(v,e);x.position.set(m,-.03,-.66),i.add(x);const M=new Ee(.082,.082,.07,8);M.rotateX(Math.PI/2);const P=new et(M,o);P.position.set(m,-.03,-.82),i.add(P);const b=new vi(.08,.38,14);b.rotateX(-Math.PI/2);const T=new et(b,_);T.position.set(m,-.03,-1.04),T.visible=!1,p.push(T),i.add(T)}return{mesh:i,velocity:new C,arcadeDamping:!1,glows:p,glowMat:_,flame:0,braking:!0}}const Ml=new C,Ed=new Ke,Td=new C,nx=.25;function ix(i,t,e){Sl(i.mesh.quaternion,Ml.set(1,0,0),t.pitch*tn.pitchRate*e),Sl(i.mesh.quaternion,Ml.set(0,1,0),t.yaw*tn.yawRate*e),Sl(i.mesh.quaternion,Ml.set(0,0,1),t.roll*tn.rollRate*e),i.mesh.quaternion.normalize();const n=t.throttle>=nx;if(sx(i,n?t.throttle:0,e),!n){i.velocity.set(0,0,0),i.braking=!0;return}i.braking=!1,Td.set(0,0,1).applyQuaternion(i.mesh.quaternion);const s=t.throttle*tn.maxThrottleAccel;if(i.velocity.addScaledVector(Td,s*e),i.arcadeDamping){const r=Math.exp(-tn.arcadeDampingRate*e);i.velocity.multiplyScalar(r)}i.velocity.lengthSq()>tn.maxSpeed*tn.maxSpeed&&i.velocity.setLength(tn.maxSpeed),i.mesh.position.addScaledVector(i.velocity,e)}function sx(i,t,e){const n=t>0?t:0,s=n>i.flame?18:11;i.flame+=(n-i.flame)*Math.min(1,s*e),i.flame<.002&&(i.flame=0);const r=i.flame>0,o=r?.85+.15*Math.sin(performance.now()*.05):1;i.glowMat.opacity=.85*i.flame*o;for(const a of i.glows)a.visible=r,a.scale.set(i.flame,i.flame,(.4+i.flame)*o)}function Sl(i,t,e){e!==0&&(Ed.setFromAxisAngle(t,e),i.multiply(Ed))}const wl=12e3,bl=1200;function Ad(){const i=new Float32Array(wl*3),t=new Float32Array(wl*3);for(let r=0;r<wl;r++){const o=Math.random(),a=Math.random(),c=2*Math.PI*o,l=Math.acos(2*a-1),u=Math.sin(l),h=bl*u*Math.cos(c),d=bl*u*Math.sin(c),f=bl*Math.cos(l);i[r*3+0]=h,i[r*3+1]=d,i[r*3+2]=f;const g=.85+Math.random()*.15,_=Math.random()*.1;t[r*3+0]=g-_,t[r*3+1]=g-_*.5,t[r*3+2]=g}const e=new Me;e.setAttribute("position",new Oe(i,3)),e.setAttribute("color",new Oe(t,3));const n=new No({size:1.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1}),s=new nl(e,n);return s.frustumCulled=!1,s}function Rd(i,t){i.position.copy(t.position)}const El=250,Er={zNear:80,zFar:480,xHalf:70,yHalf:45},rx=1.2,ox=4.5,ax=.4;function Pn(i,t){return i+Math.random()*(t-i)}function cx(){return Math.random()<.5?-1:1}function lx(){const i=new xr(1,0),t=new ne({color:9074021,roughness:.95,metalness:.05,flatShading:!0}),e=new Yh(i,t,El);e.frustumCulled=!1;const n=[],s=new qt,r=new Ke,o=new C,a=new C;for(let l=0;l<El;l++){const u=Pn(rx,ox);a.set(Pn(-70,Er.xHalf),Pn(-45,Er.yHalf),Pn(Er.zNear,Er.zFar)),o.setScalar(u),r.setFromEuler(new He(Pn(0,Math.PI*2),Pn(0,Math.PI*2),Pn(0,Math.PI*2))),s.compose(a,r,o),e.setMatrixAt(l,s),n.push({position:a.clone(),radius:u*1.05,spinAxis:new C(Pn(-1,1),Pn(-1,1),Pn(-1,1)).normalize(),spinRate:Pn(.05,ax)*cx(),rotation:r.clone()})}e.instanceMatrix.needsUpdate=!0;function c(l){const u=new Ke;for(let h=0;h<El;h++){const d=n[h];u.setFromAxisAngle(d.spinAxis,d.spinRate*l),d.rotation.premultiply(u),o.setScalar(d.radius/1.05),s.compose(d.position,d.rotation,o),e.setMatrixAt(h,s)}e.instanceMatrix.needsUpdate=!0}return{mesh:e,instances:n,update:c,volume:{...Er}}}const Cd=new C(0,0,700),Tl=60;function ux(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#c97648"),s.addColorStop(.5,"#b15a30"),s.addColorStop(1,"#7a3a1c"),n.fillStyle=s,n.fillRect(0,0,1024,512);for(let o=0;o<320;o++){const a=Math.random()*1024,c=Math.random()*512,l=8+Math.random()*80,u=.05+Math.random()*.18,h=Math.random()<.65;n.beginPath(),n.fillStyle=h?`rgba(70, 30, 15, ${u})`:`rgba(240, 180, 130, ${u})`,n.arc(a,c,l,0,Math.PI*2),n.fill()}for(const o of[0,512]){const a=n.createRadialGradient(512,o,0,512,o,179.2);a.addColorStop(0,"rgba(230, 240, 245, 0.85)"),a.addColorStop(1,"rgba(230, 240, 245, 0)"),n.fillStyle=a,n.fillRect(0,0,1024,512)}const r=new ii(e);return r.colorSpace=ge,r}function hx(){const i=new ae(Tl,64,32),t=new ne({map:ux(),roughness:.95,metalness:0}),e=new et(i,t);e.position.copy(Cd);const n=.02;function s(r){e.rotation.y+=n*r}return{mesh:e,update:s}}const Tr=new C(-90,25,-330),Ar=112,Gn=2048,je=1024,dx=1.015,fx=1.035,Pd=.03,px=.042,mx=[[[-168,65],[-150,61],[-130,54],[-124,40],[-117,32],[-105,22],[-97,16],[-83,9],[-78,19],[-81,26],[-70,42],[-60,47],[-55,52],[-64,60],[-80,70],[-95,69],[-125,70],[-155,71]],[[-80,8],[-70,11],[-60,8],[-50,0],[-35,-5],[-38,-15],[-48,-25],[-58,-35],[-63,-42],[-73,-52],[-75,-47],[-71,-33],[-71,-18],[-79,-6],[-80,2]],[[-17,15],[-10,25],[0,32],[10,34],[25,32],[35,30],[43,12],[51,12],[42,-2],[40,-15],[35,-25],[25,-34],[18,-33],[12,-18],[9,-2],[5,5],[-8,5]],[[-9,37],[0,40],[12,45],[24,40],[30,36],[36,37],[45,40],[50,30],[57,25],[68,24],[77,8],[81,16],[89,22],[95,16],[100,13],[106,10],[110,20],[120,32],[122,40],[130,43],[136,50],[142,54],[160,60],[170,66],[178,68],[168,72],[140,75],[110,76],[90,76],[70,73],[58,70],[48,68],[38,66],[30,70],[24,66],[17,62],[11,58],[4,57],[-2,51],[0,47],[-5,43]],[[113,-22],[122,-18],[130,-12],[137,-12],[142,-11],[147,-19],[153,-25],[150,-35],[145,-38],[137,-35],[129,-32],[118,-34],[114,-28]],[[-45,60],[-30,68],[-24,75],[-35,82],[-55,82],[-60,75],[-55,65]]],gx=[[-4,54,4],[138,37,4],[47,-20,5],[174,-41,4],[110,-3,6],[102,-2,5],[122,12,4],[-19,65,3],[80,8,2.5],[-78,21,3]],_x=[[10,22,18],[30,25,14],[45,22,12],[65,28,10],[95,40,12],[132,-25,14],[18,-22,8],[-110,32,8],[-68,-25,6]];function Xo(i,t){return{x:(i+180)/360*Gn,y:(90-t)/180*je}}function Id(i){return i/180*je}function xx(i,t){const e=t.map(([o,a])=>Xo(o,a)),n=e.length,s=(o,a)=>({x:(o.x+a.x)/2,y:(o.y+a.y)/2}),r=s(e[n-1],e[0]);i.moveTo(r.x,r.y);for(let o=0;o<n;o++){const a=e[o],c=s(e[o],e[(o+1)%n]);i.quadraticCurveTo(a.x,a.y,c.x,c.y)}i.closePath()}function qo(i){for(const t of mx)xx(i,t);for(const[t,e,n]of gx){const{x:s,y:r}=Xo(t,e),o=Id(n);i.moveTo(s+o,r),i.arc(s,r,o,0,Math.PI*2)}}function Al(i,t,e,n,s,r,o=1,a=1){i.save(),i.translate(t,e),i.scale(o,a);const c=i.createRadialGradient(0,0,0,0,0,n);c.addColorStop(0,`rgba(${s}, ${r})`),c.addColorStop(.55,`rgba(${s}, ${r*.55})`),c.addColorStop(1,`rgba(${s}, 0)`),i.fillStyle=c,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.fill(),i.restore()}function Ld(){const i=document.createElement("canvas");return i.width=Gn,i.height=je,i.getContext("2d")}function vx(i){const t=new ii(i.canvas);return t.colorSpace=ge,t}function yx(){const i=Ld(),t=i.createLinearGradient(0,0,0,je);t.addColorStop(0,"#0a2c50"),t.addColorStop(.35,"#1259a0"),t.addColorStop(.5,"#1a72bd"),t.addColorStop(.65,"#1259a0"),t.addColorStop(1,"#0a2c50"),i.fillStyle=t,i.fillRect(0,0,Gn,je);for(let o=0;o<700;o++){const a=Math.random()*Gn,c=Math.random()*je,l=20+Math.random()*110,u=Math.random()<.55;Al(i,a,c,l,u?"6, 28, 58":"70, 165, 215",(u?.1:.07)*(.4+Math.random()*.6),1.6,.7)}const e=[{width:52,color:"rgba(30, 105, 165, 0.18)"},{width:38,color:"rgba(45, 130, 190, 0.20)"},{width:26,color:"rgba(65, 160, 205, 0.22)"},{width:14,color:"rgba(95, 190, 220, 0.25)"}];i.lineJoin="round",i.lineCap="round",i.beginPath(),qo(i);for(const o of e)i.strokeStyle=o.color,i.lineWidth=o.width,i.stroke();i.fillStyle="#3f7a3a",i.beginPath(),qo(i),i.fill(),i.save(),i.beginPath(),qo(i),i.clip();const n=i.createLinearGradient(0,0,0,je);n.addColorStop(0,"rgba(190, 205, 200, 0.55)"),n.addColorStop(.22,"rgba(60, 90, 60, 0.45)"),n.addColorStop(.5,"rgba(30, 85, 35, 0.5)"),n.addColorStop(.78,"rgba(70, 100, 55, 0.35)"),n.addColorStop(1,"rgba(200, 215, 215, 0.6)"),i.fillStyle=n,i.fillRect(0,0,Gn,je);for(const[o,a,c]of _x){const{x:l,y:u}=Xo(o,a),h=Id(c),d=i.createRadialGradient(l,u,0,l,u,h);d.addColorStop(0,"rgba(200, 168, 105, 0.85)"),d.addColorStop(.6,"rgba(190, 158, 100, 0.55)"),d.addColorStop(1,"rgba(180, 150, 95, 0)"),i.fillStyle=d,i.beginPath(),i.arc(l,u,h,0,Math.PI*2),i.fill()}for(let o=0;o<1400;o++){const a=Math.random()*Gn,c=Math.random()*je,l=5+Math.random()*30,u=Math.random()<.5;Al(i,a,c,l,u?"25, 52, 25":"155, 148, 108",.06+Math.random()*.14,1+Math.random(),.8)}for(let o=0;o<90;o++){const a=Math.random()*Gn,c=Math.random()*je,l=40+Math.random()*160,u=(Math.random()-.5)*Math.PI,h=Math.cos(u)*l,d=Math.sin(u)*l*.6;i.beginPath(),i.moveTo(a,c),i.quadraticCurveTo(a+h*.5,c+d*.5-18,a+h,c+d),i.strokeStyle="rgba(48, 42, 32, 0.30)",i.lineWidth=6+Math.random()*8,i.stroke(),i.beginPath(),i.moveTo(a,c-5),i.quadraticCurveTo(a+h*.5,c+d*.5-23,a+h,c+d-5),i.strokeStyle="rgba(200, 195, 175, 0.18)",i.lineWidth=3,i.stroke()}i.beginPath(),qo(i),i.strokeStyle="rgba(214, 196, 142, 0.28)",i.lineWidth=14,i.stroke(),i.strokeStyle="rgba(224, 208, 158, 0.30)",i.lineWidth=6,i.stroke(),i.restore();const s=i.createLinearGradient(0,je*.86,0,je);s.addColorStop(0,"rgba(238, 246, 252, 0)"),s.addColorStop(.45,"rgba(238, 246, 252, 0.9)"),s.addColorStop(1,"rgba(255, 255, 255, 1)"),i.fillStyle=s,i.fillRect(0,je*.86,Gn,je*.14);const r=i.createLinearGradient(0,0,0,je*.1);return r.addColorStop(0,"rgba(240, 248, 255, 0.95)"),r.addColorStop(1,"rgba(240, 248, 255, 0)"),i.fillStyle=r,i.fillRect(0,0,Gn,je*.1),vx(i)}function Mx(){const i=Ld();i.clearRect(0,0,Gn,je);function t(s){const r=Math.exp(-((s/12)**2)),o=Math.exp(-(((s-55)/16)**2)),a=Math.exp(-(((s+55)/16)**2));return .25+.75*Math.max(r,Math.max(o,a))}const e=600;for(let s=0;s<e;s++){const r=Math.random()*360-180,o=Math.random()*170-85;if(Math.random()>t(o))continue;const{x:a,y:c}=Xo(r,o),l=8+Math.floor(Math.random()*12),u=16+Math.random()*50;for(let h=0;h<l;h++){const d=a+(Math.random()-.5)*u*2.6,f=c+(Math.random()-.5)*u*.7,g=5+Math.random()*14;Al(i,d,f,g,"255, 255, 255",.18+Math.random()*.28,2.2+Math.random(),.85)}}const n=new ii(i.canvas);return n.colorSpace=ge,n}function Sx(){const i=new ae(Ar,96,48),t=yx();t.anisotropy=8;const e=new ne({map:t,roughness:.9,metalness:0,emissive:661030}),n=new et(i,e);n.position.copy(Tr),n.rotation.z=Li.degToRad(23.4);const s=new et(new ae(Ar*dx,96,48),new ne({map:Mx(),transparent:!0,opacity:.85,depthWrite:!1,roughness:1,metalness:0}));n.add(s);const r=new et(new ae(Ar*fx,64,32),new Ge({color:6269183,transparent:!0,opacity:.22,blending:Un,side:qe,depthWrite:!1}));n.add(r);function o(a){n.rotation.y+=Pd*a,s.rotation.y+=(px-Pd)*a}return{mesh:n,clouds:s,atmosphere:r,update:o}}const Rr=256,wx=new C(0,0,-2e3),bx=350;function Ex(){const i=document.createElement("canvas");i.width=Rr,i.height=Rr;const t=i.getContext("2d"),e=Rr/2,n=t.createRadialGradient(e,e,0,e,e,e);n.addColorStop(0,"rgba(255, 245, 220, 1)"),n.addColorStop(.08,"rgba(255, 230, 180, 0.95)"),n.addColorStop(.25,"rgba(255, 200, 130, 0.45)"),n.addColorStop(.55,"rgba(255, 170, 100, 0.15)"),n.addColorStop(1,"rgba(255, 150, 90, 0)"),t.fillStyle=n,t.fillRect(0,0,Rr,Rr);const s=new ii(i);return s.colorSpace=ge,s}function Tx(){const i=Ex(),t=new Yc({map:i,depthWrite:!1,transparent:!0,blending:Un}),e=new Oh(t);e.scale.setScalar(bx);function n(s){e.position.copy(s.position).add(wx)}return{sprite:e,update:n}}const Ax=["Sojourner","Spirit","Opportunity","Curiosity","Perseverance","Zhurong"],Rx=Tl+18,Cx=Tl+60,Px=60,Dd=8028296,Ix=5431551,Lx=2106408,Dx=1060936;function Yo(i,t){return i+Math.random()*(t-i)}function Nx(){const i=new pe,t=new ne({color:Dd,roughness:.7,metalness:.3,emissive:0}),e=new et(new cn(2.2,.7,1.4),t);e.position.y=.45,i.add(e);const n=new et(new cn(1.8,.1,1.1),new ne({color:Dx,roughness:.4,metalness:.8,emissive:332832}));n.position.y=.85,i.add(n);const s=new Ee(.32,.32,.2,12);s.rotateZ(Math.PI/2);const r=new ne({color:Lx,roughness:.95,metalness:.1}),o=[-.85,.85],a=[-.55,.55];for(const u of o)for(const h of a){const d=new et(s,r);d.position.set(u,.1,h),i.add(d)}const c=new et(new Ee(.04,.04,.8,6),new ne({color:11184810,roughness:.6,metalness:.5}));c.position.set(.6,1.2,0),i.add(c);const l=new et(new ae(.1,8,6),new ne({color:16733525,emissive:4456448}));return l.position.set(.6,1.65,0),i.add(l),{group:i,bodyMat:t}}function Ux(){const i=Math.random(),t=Math.random(),e=2*Math.PI*i,n=Math.acos(2*t-1),s=Yo(Rx,Cx),r=Math.sin(n);return new C(s*r*Math.cos(e),s*r*Math.sin(e),s*Math.cos(n)).add(Cd)}function Ox(){const i=[];for(const s of Ax){const{group:r,bodyMat:o}=Nx(),a=Ux();r.position.copy(a),r.rotation.set(Yo(0,Math.PI*2),Yo(0,Math.PI*2),Yo(0,Math.PI*2)),i.push({name:s,mesh:r,bodyMat:o,position:a,fixed:!1,repairProgress:0,creditValue:Px})}function t(s){for(const r of i)r.mesh.rotation.y+=.25*s,r.mesh.rotation.x+=.08*s}function e(s){s.fixed=!0,s.repairProgress=1,s.bodyMat.color.setHex(Ix),s.bodyMat.emissive.setHex(1060928)}function n(){for(const s of i)s.fixed=!1,s.repairProgress=0,s.bodyMat.color.setHex(Dd),s.bodyMat.emissive.setHex(0)}return{rovers:i,update:t,markFixed:e,reset:n}}const Ko=32,Rl=.9,Fx=6,kx=.18;function Bx(){const i=new Float32Array(Ko*3),t=new Float32Array(Ko*3),e=new Me;e.setAttribute("position",new Oe(i,3));const n=new No({color:10149887,size:kx,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Un}),s=new nl(e,n);s.visible=!1;let r=Rl;function o(c){r=0;for(let l=0;l<Ko;l++){i[l*3+0]=c.x,i[l*3+1]=c.y,i[l*3+2]=c.z;const u=Math.random(),h=Math.random(),d=2*Math.PI*u,f=Math.acos(2*h-1),g=Math.sin(f),_=(.4+Math.random()*.6)*Fx;t[l*3+0]=_*g*Math.cos(d),t[l*3+1]=_*g*Math.sin(d),t[l*3+2]=_*Math.cos(f)}e.attributes.position.needsUpdate=!0,s.visible=!0}function a(c){if(r>=Rl){s.visible=!1;return}r+=c;const l=Math.min(1,r/Rl),u=Math.pow(.05,c);for(let h=0;h<Ko;h++)i[h*3+0]+=t[h*3+0]*c,i[h*3+1]+=t[h*3+1]*c,i[h*3+2]+=t[h*3+2]*c,t[h*3+0]*=u,t[h*3+1]*=u,t[h*3+2]*=u;e.attributes.position.needsUpdate=!0,n.opacity=1-l}return{points:s,fire:o,update:a}}const Nd=.7,Cl=new C,Fs=new C;function zx(i,t){let e=0;for(const n of t){Cl.subVectors(i.position,n.position);const s=Nd+n.radius,r=Cl.lengthSq();if(r>=s*s)continue;if(r<1e-8)Fs.set(0,1,0),i.position.addScaledVector(Fs,s);else{const a=Math.sqrt(r);Fs.copy(Cl).divideScalar(a);const c=s-a;i.position.addScaledVector(Fs,c)}const o=i.velocity.dot(Fs);o<0&&i.velocity.addScaledVector(Fs,-1.55*o),e+=1}return e}const Hx=Object.freeze(Object.defineProperty({__proto__:null,SHIP_RADIUS:Nd,resolveAsteroidCollisions:zx},Symbol.toStringTag,{value:"Module"})),Si={throttleUp:["KeyW"],throttleDown:["KeyS"],yawLeft:["KeyA"],yawRight:["KeyD"],pitchUp:["ArrowUp"],pitchDown:["ArrowDown"],rollLeft:["KeyQ"],rollRight:["KeyE"]};function Gx(){const i=new Set,t=new Set;function e(o){i.has(o.code)||t.add(o.code),i.add(o.code)}function n(o){i.delete(o.code)}window.addEventListener("keydown",e),window.addEventListener("keyup",n);function s(o){for(const a of o)if(i.has(a))return!0;return!1}function r(o){for(const a of o)if(t.has(a))return!0;return!1}return{isDown:o=>i.has(o),sample(){const o=(s(Si.throttleUp)?1:0)-(s(Si.throttleDown)?1:0),a=(s(Si.yawLeft)?1:0)-(s(Si.yawRight)?1:0),c=(s(Si.pitchUp)?1:0)-(s(Si.pitchDown)?1:0),l=(s(Si.rollLeft)?1:0)-(s(Si.rollRight)?1:0);return{throttle:o,yaw:a,pitch:c,roll:l}},consumeAnyJustPressed(){const o=t.size>0;return t.clear(),o},consumeJustPressed(o){if(r(o)){for(const a of o)t.delete(a);return!0}return!1},dispose(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)}}}const Vx=.15,jo={throttle:{axisIndex:1,sign:-1},yaw:{axisIndex:0,sign:-1},lookX:{axisIndex:2,sign:1},lookY:{axisIndex:3,sign:-1}},en={A:0,B:1,X:2,Y:3,L1:4,R1:5,Select:8,Start:9,Up:12,Down:13,Left:14,Right:15};function Wx(i,t=Vx){const e=Math.abs(i);return e<t?0:Math.sign(i)*((e-t)/(1-t))}function $o(i,t){return t.sign*Wx(i.axes[t.axisIndex]??0)}function Xx(){let i=!1,t=!1;const e=new Set,n=new Set,s=new Set;function r(){const c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(const l of c)if(l&&l.connected)return l;return null}const o=new Set;function a(c){if(n.clear(),o.clear(),!!c.buttons){for(let l=0;l<c.buttons.length;l++){const u=c.buttons[l];!!(u&&u.pressed)?(o.add(l),!e.has(l)&&!s.has(l)&&n.add(l)):s.delete(l)}for(const l of e)o.has(l)||e.delete(l);for(const l of o)e.add(l)}}return{get active(){return i},sample(){const c=r();if(!c)return i=!1,n.clear(),o.clear(),e.clear(),null;!t&&c.mapping!=="standard"&&(t=!0,console.info("[input/gamepad] Connected pad reports non-standard mapping",`(id="${c.id}"). Throttle/look may not be on axes 1/2/3 as expected.`,"See BACKLOG.md for the calibration follow-up.")),a(c);const l=$o(c,jo.yaw),u=$o(c,jo.throttle),h=$o(c,jo.lookX),d=$o(c,jo.lookY),f=(o.has(en.Up)?1:0)-(o.has(en.Down)?1:0),g=(o.has(en.Left)?1:0)-(o.has(en.Right)?1:0),_=(l||f||g||u||h||d)!==0,p=o.size>0;return i=_||p,{throttle:u,yaw:l,pitch:f,roll:g,lookX:h,lookY:d}},isButtonDown(c){return o.has(c)},consumeJustPressed(c){return n.has(c)?(n.delete(c),!0):!1},consumeAnyJustPressed(){return n.size===0?!1:(n.clear(),!0)},suppressCurrentlyPressed(){for(const c of o)s.add(c)}}}const Ud=.2,Od=1,Fd=25,qx=1e3,Yx=35,Kx=35;function kd(){return(screen.orientation?.angle??window.orientation??0)*Math.PI/180}function jx(){let i=!1,t=!1,e=!1,n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},o=null,a=0,c=0,l=0,u=null,h=null;function d(p){if(p.alpha==null&&p.beta==null&&p.gamma==null)return;o={alpha:p.alpha??0,beta:p.beta??0,gamma:p.gamma??0},a=typeof performance<"u"?performance.now():Date.now();const m=g(o);if(u!==null){const v=m.pitch-u,x=m.yaw-h;Math.abs(v)<Fd&&Math.abs(x)<Fd&&(c+=v,l+=x)}if(u=m.pitch,h=m.yaw,n==null){const v=a;s===0&&(s=v),r.alpha+=o.alpha,r.beta+=o.beta,r.gamma+=o.gamma,r.n+=1,v-s>=qx&&r.n>0&&(n={alpha:r.alpha/r.n,beta:r.beta/r.n,gamma:r.gamma/r.n})}}function f(){n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},u=null,h=null}function g(p){const m=kd(),v=Math.cos(m),x=Math.sin(m);return{pitch:p.beta*v-p.gamma*x,yaw:p.beta*x+p.gamma*v}}function _(){i||(window.addEventListener("deviceorientation",d),screen.orientation?.addEventListener("change",f),window.addEventListener("orientationchange",f),i=!0)}return{get active(){return!i||o==null?!1:(typeof performance<"u"?performance.now():Date.now())-a<1e3},get calibrated(){return n!=null},async request(){if(e)return _(),t;e=!0;const p=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(p&&typeof p.requestPermission=="function"){try{t=await p.requestPermission()==="granted"}catch{t=!1}t&&_()}else t=!0,_();return t},consumeTurn(){if(!i||u===null)return{pitch:0,yaw:0};const p={pitch:c*zd*Od,yaw:l*zd*Od};return c=0,l=0,p},sample(){if(!o||!n)return null;const p=o.beta-n.beta,m=o.gamma-n.gamma,v=kd(),x=Math.cos(v),M=Math.sin(v),P=p*x-m*M,b=p*M+m*x;let T=Bd(P/Yx,-1,1),I=Bd(b/Kx,-1,1);return{pitchDelta:T*Ud,yawDelta:I*Ud}}}}function Bd(i,t,e){return i<t?t:i>e?e:i}const zd=Math.PI/180,Pl=typeof window<"u"&&"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0;function $x(){let i=!1;function t(e){e.pointerType!=="mouse"&&(i=!0)}return window.addEventListener("pointerdown",t,{passive:!0}),{consumeJustPressed(){const e=i;return i=!1,e},clear(){i=!1}}}function Hd(){return typeof window>"u"?!1:!!(window.__p5NativeHost===!0||window.webkit&&window.webkit.messageHandlers)}function ks(i){return i<-1?-1:i>1?1:i}function Jx(){const i=Gx(),t=Xx(),e=jx(),n=$x();let s=["KB"];return{keyboard:i,gamepad:t,gyro:e,touch:n,isTouchDevice:Pl,bridgeAvailable:Hd,async enableGyro(){return e.request()},sample(){const r=i.sample(),o=t.sample(),a=[];let c,l,u,h;o&&(o.throttle||o.yaw||o.pitch||o.roll)?(c=o.throttle,l=o.yaw,u=o.pitch,h=o.roll,a.push("PAD"),(r.throttle||r.yaw||r.pitch||r.roll)&&(c=ks(c+r.throttle),l=ks(l+r.yaw),u=ks(u+r.pitch),h=ks(h+r.roll),a.push("KB"))):(c=r.throttle,l=r.yaw,u=r.pitch,h=r.roll,(r.throttle||r.yaw||r.pitch||r.roll)&&a.push("KB"));const d=l,f=c,g=e.sample();g&&e.active&&(u=ks(u+g.pitchDelta),l=ks(l-g.yawDelta),a.push("GYRO"));let _=o?o.lookX:0,p=o?o.lookY:0;(_||p)&&!a.includes("PAD")&&a.push("PAD");const m=e.active?e.consumeTurn():{pitch:0,yaw:0},v=m.yaw,x=m.pitch;return(v||x)&&!a.includes("GYRO")&&a.push("GYRO"),a.length===0&&a.push("KB"),s=a,{throttle:c,yaw:l,pitch:u,roll:h,lookX:_,lookY:p,lookTurnX:v,lookTurnY:x,stickYaw:d,stickThrottle:f}},activeSources(){return s},consumeAnyJustPressed(){const r=i.consumeAnyJustPressed();t.sample();const o=t.consumeAnyJustPressed(),a=n.consumeJustPressed();return r||o||a}}}const Yt={title:"Super Vexo and the Mystery of the System",pressAnyKey:"Press any button to start",tapToStart:"Tap to start",intro:{skip:"Press any button to skip",tapToSkip:"Tap to skip",beats:["Long ago, in the kingdom of Astra…","The kingdom lived in peace.","Until Lord Draxos came.","He kidnapped Princess Astra.","And vanished into deep space.",`The Scientists handed Vexo the Super Mega Tablet.

Can you save her?`]},surface:{town:"CASTEL MAGGIORE · BOLOGNA",street:"Via Giuseppe Impastato",leaveHint:"Descend to land · climb to leave the atmosphere"},onFoot:{skip:"Press any button to skip",climbOut:"L / A — land and climb out",noRoom:"No room to climb out here — move the ship",board:"L / A — climb back in",controls:"W A S D / stick — walk · Shift / B — sprint"},hud:{appName:"Tablet",velocity:"VEL",orientation:"ORI",fps:"FPS",dampingOn:"damping: ON",dampingOff:"damping: OFF",fastTravelButton:"FAST TRAVEL",fastTravelHint:"R1 / F",fastTravelActive:"warping…",rovers:"ROVERS",credits:"CRED",hackHint:"Hold L1 / H to hack",upgradeButton:"UPGRADES",upgradeHint:"Y / U",upgradeBought:"OWNED",upgradeBuy:"BUY",upgradeClose:"Close",screenHint:"Stick / swipe = scroll · B / Esc = back to Tablet",missionCompleteTitle:"MISSION COMPLETE",missionCompleteBody:"All rovers repaired. Earth Command transfers a bonus to your account.",missionCompleteCta:"Open Upgrades",missionCompleteClose:"Continue Flying",resetHint:"Start / R = reset",tabletHint:"− / T = Tablet"}};function Zx(){const i=document.createElement("div");i.id="tablet",i.innerHTML=`
    <div class="tablet-frame">
      <div class="tablet-bezel">
        <div class="tablet-screen">
          <div class="tablet-titlebar">
            <span class="tablet-app">${Yt.hud.appName}</span>
            <span class="tablet-source" data-source>KB</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Yt.hud.velocity}</span>
            <span class="tablet-value" data-velocity>0.0</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Yt.hud.orientation}</span>
            <span class="tablet-value" data-orientation>0°,0°,0°</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Yt.hud.fps}</span>
            <span class="tablet-value" data-fps>--</span>
          </div>
          <div class="tablet-row tablet-row--small">
            <span class="tablet-value" data-damping>${Yt.hud.dampingOff}</span>
          </div>

          <!-- Mission panel: rover progress + credits -->
          <div class="tablet-mission" data-mission hidden>
            <div class="tablet-row">
              <span class="tablet-label">${Yt.hud.rovers}</span>
              <span class="tablet-value" data-rovers>0/0</span>
            </div>
            <div class="tablet-row">
              <span class="tablet-label">${Yt.hud.credits}</span>
              <span class="tablet-value" data-credits>0</span>
            </div>
            <!-- Hack prompt: only visible when a rover is in range -->
            <div class="tablet-hack" data-hack hidden>
              <div class="tablet-hack__name" data-hack-name>—</div>
              <div class="tablet-hack__hint">${Yt.hud.hackHint}</div>
              <div class="tablet-hack__bar"><div class="tablet-hack__fill" data-hack-fill></div></div>
            </div>
          </div>

          <button class="tablet-app-btn" data-fast-travel type="button">
            <span class="tablet-app-btn__icon">⤴</span>
            <span class="tablet-app-btn__label">${Yt.hud.fastTravelButton}</span>
            <span class="tablet-app-btn__key">${Yt.hud.fastTravelHint}</span>
          </button>
          <button class="tablet-app-btn" data-upgrades type="button">
            <span class="tablet-app-btn__icon">⚙</span>
            <span class="tablet-app-btn__label">${Yt.hud.upgradeButton}</span>
            <span class="tablet-app-btn__key">${Yt.hud.upgradeHint}</span>
          </button>
          <div class="tablet-row tablet-row--hint" data-reset-hint hidden>
            ${Yt.hud.resetHint}
          </div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const t=document.createElement("div");t.id="tablet-hint",t.textContent=Yt.hud.tabletHint,t.hidden=!0,document.body.appendChild(t);const e=i.querySelector("[data-velocity]"),n=i.querySelector("[data-orientation]"),s=i.querySelector("[data-fps]"),r=i.querySelector("[data-source]"),o=i.querySelector("[data-damping]"),a=i.querySelector("[data-fast-travel]"),c=i.querySelector("[data-upgrades]");i.style.display="none";const l=i.querySelector("[data-reset-hint]"),u=i.querySelector("[data-mission]"),h=i.querySelector("[data-rovers]"),d=i.querySelector("[data-credits]"),f=i.querySelector("[data-hack]"),g=i.querySelector("[data-hack-name]"),_=i.querySelector("[data-hack-fill]");let p=0,m=0,v=0;return{update({velocity:x,eulerDeg:M,dt:P,sources:b,dampingOn:T}){e.textContent=x.toFixed(1),n.textContent=`${M.x.toFixed(0)}°, ${M.y.toFixed(0)}°, ${M.z.toFixed(0)}°`,p+=1,m+=P,m>=.5&&(v=Math.round(p/m),p=0,m=0,s.textContent=String(v)),r.textContent=b.join("+"),o.textContent=T?Yt.hud.dampingOn:Yt.hud.dampingOff},show(){i.style.display="",t.hidden=!0},hide(){i.style.display="none",t.hidden=!1},toggle(){const x=i.style.display==="none";return i.style.display=x?"":"none",t.hidden=x,x},setHintVisible(x){t.hidden=!x},showFastTravel(){a.classList.add("tablet-app-btn--visible")},showUpgrades(){c.classList.add("tablet-app-btn--visible")},showResetHint(){l.hidden=!1},setMissionVisible(x){u.hidden=!x},updateMission({remaining:x,total:M,credits:P}){h.textContent=`${M-x}/${M}`,d.textContent=String(P)},updateHack({name:x,progress:M}){if(!x){f.hidden=!0;return}f.hidden=!1,g.textContent=x,_.style.width=`${Math.max(0,Math.min(1,M))*100}%`},onUpgradesClick(x){c.addEventListener("click",x)},setFastTravelActive(x){a.classList.toggle("tablet-app-btn--active",x);const M=a.querySelector(".tablet-app-btn__label");M.textContent=x?Yt.hud.fastTravelActive:Yt.hud.fastTravelButton,a.disabled=x},onFastTravel(x){a.addEventListener("click",x)}}}function Qx(){const i=document.createElement("div");i.id="title-card";const t="2026-08-22 19:16";return i.innerHTML=`
    <div class="title-card__inner">
      <h1 class="title-card__title">${Yt.title}</h1>
      <p class="title-card__prompt">${Pl?Yt.tapToStart:Yt.pressAnyKey}</p>
      <p class="title-card__build">build ${t}</p>
    </div>
  `,document.body.appendChild(i),{hide(){i.style.opacity="0"},show(){i.style.opacity=""},dismiss(){i.classList.add("title-card--hidden"),setTimeout(()=>i.remove(),500)}}}const tv=1.2,Gd=540;function ev(i){const t=document.createElement("div");t.id="warp-flash",i.appendChild(t);let e=!1,n=0,s=!1,r=null,o=!1,a=null;function c(u,h={}){return e?!1:(e=!0,n=0,s=!1,r=h.onDone??null,o=!0,a=u,u.velocity.set(0,0,0),!0)}function l(u){if(!e)return;n+=u;const d=Math.max(0,Math.min(1,n/tv));let f;if(d<.4?f=d/.4:d<.6?f=1:f=1-(d-.6)/.4,t.style.opacity=String(Math.max(0,Math.min(1,f))),!s&&d>=.5&&a&&(a.mesh.position.set(0,0,Gd),a.velocity.set(0,0,0),a.mesh.quaternion.identity(),s=!0),d>=1){e=!1,o=!1,t.style.opacity="0";const g=r;r=null,a=null,g&&g()}}return{begin:c,update:l,get active(){return e},get suppressInput(){return o},targetZ:Gd}}const nv=""+new URL("invincibility_theme-K-djvXIp.mp3",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,Vd=80,iv=18,sv=.06,rv=2.5,Wd=280,ov=520,av=.18,cv=.18,Xd=.45,lv=.3;function uv(){let i=null,t=null,e=!1,n=0,s=!1,r=null,o=null,a=null,c=0;function l(){if(s)return!0;const m=window.AudioContext||window.webkitAudioContext;return m?(i=new m,r=i.createGain(),r.gain.value=1,r.connect(i.destination),o=hv(i,r),a=dv(i,r),s=!0,!0):!1}function u(m){s&&(c=Math.min(1,Math.abs(m)))}function h(m){e=m,m&&(t||(t=new Audio(nv),t.loop=!0,t.preload="auto",t.volume=0),t.paused&&(t.currentTime=0,t.play().catch(()=>{})))}function d(m){if(!t)return;const v=e?Xd:0,x=m/lv*Xd;n=v>n?Math.min(v,n+x):Math.max(v,n-x),t.volume=n,n===0&&!t.paused&&t.pause()}function f(m){if(d(m),!s)return;const v=1-Math.pow(2,-m/cv),x=a.gainNode.gain.value,M=c*av,P=x+(M-x)*v;a.gainNode.gain.setValueAtTime(P,i.currentTime);const b=Wd+c*ov;a.filter.frequency.setValueAtTime(b,i.currentTime)}function g(){if(t&&(t.pause(),t=null,e=!1,n=0),!!s){try{o.osc1.stop(),o.osc2.stop()}catch{}try{a.source.stop()}catch{}i.close(),s=!1,i=null}}function _({fromHz:m=300,toHz:v=900,durationS:x=.35,peakGain:M=.18}={}){if(!s)return;const P=i.currentTime,b=i.createOscillator();b.type="sine",b.frequency.setValueAtTime(m,P),b.frequency.exponentialRampToValueAtTime(v,P+x);const T=i.createGain();T.gain.setValueAtTime(0,P),T.gain.linearRampToValueAtTime(M,P+.03),T.gain.exponentialRampToValueAtTime(1e-4,P+x),b.connect(T),T.connect(r),b.start(P),b.stop(P+x+.05)}function p(){_({fromHz:440,toHz:660,durationS:.45,peakGain:.2}),setTimeout(()=>_({fromHz:660,toHz:990,durationS:.6,peakGain:.22}),200)}return{start:l,setSprinting:h,update:f,setThrottle:u,chirp:_,fanfare:p,dispose:g,get running(){return s}}}function hv(i,t){const e=i.createOscillator(),n=i.createOscillator();e.type="triangle",n.type="triangle",e.frequency.value=Vd,n.detune.value=iv,n.frequency.value=Vd;const s=i.createBiquadFilter();s.type="lowpass",s.frequency.value=320,s.Q.value=.7;const r=i.createGain();return r.gain.value=sv,e.connect(s),n.connect(s),s.connect(r),r.connect(t),e.start(),n.start(),{osc1:e,osc2:n,filter:s,gain:r}}function dv(i,t){const e=i.sampleRate,n=i.createBuffer(1,e*rv,e),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=i.createBufferSource();r.buffer=n,r.loop=!0;const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=Wd,o.Q.value=1.2;const a=i.createGain();return a.gain.value=0,r.connect(o),o.connect(a),a.connect(t),r.start(),{source:r,filter:o,gainNode:a}}const fv=8,pv=2,mv=100,Jo={ACTIVE:"active",COMPLETE:"complete"};function gv(i){const{rovers:t,markFixed:e}=i;let n=0,s=Jo.ACTIVE,r=null,o=null,a=null,c=null;function l(m){a=m}function u(m){c=m}function h(){let m=0;for(const v of t)v.fixed||(m+=1);return m}function d(){return t.length}function f(m,v){if(v>fv)return null;let x=null,M=tn.hackRadius*tn.hackRadius;for(const P of t){if(P.fixed)continue;const b=P.position.x-m.x,T=P.position.y-m.y,I=P.position.z-m.z,U=b*b+T*T+I*I;U<M&&(M=U,x=P)}return x}function g({shipPos:m,shipSpeed:v,holdActive:x,dt:M}){if(r=f(m,v),s!==Jo.ACTIVE){o=null;return}if(x&&r){if(o!==r&&(o=r,o.repairProgress=0),o.repairProgress=Math.min(1,o.repairProgress+M/pv),o.repairProgress>=1&&!o.fixed){const P=o;e(P),n+=P.creditValue,c&&c(P),o=null,h()===0&&(s=Jo.COMPLETE,n+=mv,a&&a())}}else o&&(o.repairProgress=0,o=null)}function _(m){return m>n?!1:(n-=m,!0)}function p(){n=0,s=Jo.ACTIVE,r=null,o=null}return{get state(){return s},get credits(){return n},get inRange(){return r},get repairing(){return o},remaining:h,totalRovers:d,update:g,spendCredits:_,setOnComplete:l,setOnRepaired:u,reset:p}}function _v(){const i=[{id:"throttle",label:"Boost Throttle",description:"Push the engines harder. +40% forward acceleration, +25% top speed.",cost:100,bought:!1,apply(){tn.maxThrottleAccel*=1.4,tn.maxSpeed*=1.25}},{id:"agility",label:"Sharper Turning",description:"Twitch-faster yaw and pitch. +35% on both rates.",cost:90,bought:!1,apply(){tn.yawRate*=1.35,tn.pitchRate*=1.35}},{id:"hackRange",label:"Long-Range Hack",description:"The Tablet locks on from further out. Hack radius +50%.",cost:80,bought:!1,apply(){tn.hackRadius*=1.5}}];function t(n,s){const r=i.find(o=>o.id===n);return!r||r.bought||!s.spendCredits(r.cost)?!1:(r.apply(),r.bought=!0,!0)}function e(){for(const n of i)n.bought=!1}return{upgrades:i,buy:t,reset:e}}function xv({upgrades:i,mission:t,audio:e,onClose:n}){const s=document.createElement("div");s.id="mission-screens",s.innerHTML=`
    <div class="screen-overlay" id="screen-complete" data-screen="complete" hidden>
      <div class="screen-card">
        <h2 class="screen-card__title">${Yt.hud.missionCompleteTitle}</h2>
        <p class="screen-card__body">${Yt.hud.missionCompleteBody}</p>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-complete-credits>0</span></span>
        </div>
        <div class="screen-card__actions">
          <button class="screen-btn screen-btn--primary" data-action="open-upgrades">${Yt.hud.missionCompleteCta}</button>
          <button class="screen-btn" data-action="close-complete">${Yt.hud.missionCompleteClose}</button>
        </div>
      </div>
    </div>

    <div class="screen-overlay" id="screen-upgrades" data-screen="upgrades" hidden>
      <div class="screen-card screen-card--wide">
        <h2 class="screen-card__title">${Yt.hud.upgradeButton}</h2>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-upgrades-credits>0</span></span>
        </div>
        <p class="screen-card__hint">${Yt.hud.screenHint}</p>
        <ul class="upgrade-list" data-upgrade-list></ul>
        <div class="screen-card__actions">
          <button class="screen-btn" data-action="close-upgrades">${Yt.hud.upgradeClose}</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(s);const r=s.querySelector("#screen-complete"),o=s.querySelector("[data-complete-credits]"),a=s.querySelector("#screen-upgrades"),c=s.querySelector("[data-upgrades-credits]"),l=s.querySelector("[data-upgrade-list]");function u(){c.textContent=String(t.credits),l.innerHTML="";for(const m of i.upgrades){const v=document.createElement("li");v.className="upgrade-item"+(m.bought?" upgrade-item--bought":"");const x=!m.bought&&t.credits>=m.cost;v.innerHTML=`
        <div class="upgrade-item__head">
          <span class="upgrade-item__name">${m.label}</span>
          <span class="upgrade-item__cost">${m.cost} c</span>
        </div>
        <p class="upgrade-item__desc">${m.description}</p>
        <button class="screen-btn screen-btn--small" data-buy="${m.id}" ${m.bought||!x?"disabled":""}>
          ${m.bought?Yt.hud.upgradeBought:Yt.hud.upgradeBuy}
        </button>
      `,l.appendChild(v)}}function h(m){m==="complete"?(o.textContent=String(t.credits),r.hidden=!1):m==="upgrades"&&(u(),a.hidden=!1)}function d(m){m==="complete"?r.hidden=!0:m==="upgrades"&&(a.hidden=!0)}function f(){d("complete"),d("upgrades")}function g(){return!r.hidden||!a.hidden}function _(){return a.hidden?r.hidden?null:r.querySelector(".screen-card"):a.querySelector(".screen-card")}function p(m){const v=_();v&&(v.scrollTop+=m)}return s.addEventListener("click",m=>{const v=m.target;if(!(v instanceof Element))return;const x=v.getAttribute("data-action");if(x==="open-upgrades"){d("complete"),h("upgrades");return}if(x==="close-complete"){d("complete"),n?.();return}if(x==="close-upgrades"){d("upgrades"),n?.();return}const M=v.getAttribute("data-buy");M&&i.buy(M,t)&&(e&&e.chirp({fromHz:520,toHz:780,durationS:.25,peakGain:.18}),u())}),{show:h,hide:d,hideAll:f,isOpen:g,scrollBy:p}}const qd=40;function vv(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#0c3a66"),s.addColorStop(.5,"#1b6aa3"),s.addColorStop(1,"#0c3a66"),n.fillStyle=s,n.fillRect(0,0,1024,512);const r=[];for(let a=0;a<6;a++)r.push({x:Math.random()*1024,y:512*.25+Math.random()*512*.5,r:50+Math.random()*90});for(const a of r){const c=8+Math.floor(Math.random()*6);for(let l=0;l<c;l++){const u=(Math.random()-.5)*a.r*1.6,h=(Math.random()-.5)*a.r*1,d=18+Math.random()*45,f=Math.random()<.35;n.beginPath(),n.fillStyle=f?"rgba(30, 70, 30, 0.85)":"rgba(70, 130, 55, 0.9)",n.arc(a.x+u,a.y+h,d,0,Math.PI*2),n.fill()}}for(let a=0;a<60;a++){const c=Math.random()*1024,l=Math.random()*512,u=14+Math.random()*50;n.beginPath(),n.fillStyle=`rgba(245, 250, 255, ${.1+Math.random()*.12})`,n.arc(c,l,u,0,Math.PI*2),n.fill()}for(const a of[0,512]){const c=n.createRadialGradient(512,a,0,512,a,153.6);c.addColorStop(0,"rgba(240, 248, 255, 0.85)"),c.addColorStop(1,"rgba(240, 248, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,1024,512)}const o=new ii(e);return o.colorSpace=ge,o}function yv(){const i=new ae(qd,64,32),t=new ne({map:vv(),roughness:.85,metalness:0,emissive:1296}),e=new et(i,t),n=new Ge({color:6990591,transparent:!0,opacity:.18,blending:Un,side:qe}),s=new et(new ae(qd*1.05,64,32),n);e.add(s);const r=.05;function o(a){e.rotation.y+=r*a}return{mesh:e,update:o}}const Yd=14,Kd=4.5,Mv=.9;function Sv(){const i=new pe,t=new Vo(1,0);t.scale(Kd,Kd,Yd*.5);const e=new ne({color:3807780,roughness:.45,metalness:.6,emissive:3149848,flatShading:!0}),n=new et(t,e);i.add(n);const s=new Ge({color:16724016}),r=new et(new ae(Mv,12,8),s);r.position.set(0,0,Yd*.55),i.add(r);const o=document.createElement("canvas");o.width=o.height=128;{const h=o.getContext("2d"),d=64,f=h.createRadialGradient(d,d,0,d,d,d);f.addColorStop(0,"rgba(255, 60, 60, 1)"),f.addColorStop(.3,"rgba(255, 30, 30, 0.6)"),f.addColorStop(1,"rgba(255, 30, 30, 0)"),h.fillStyle=f,h.fillRect(0,0,128,128)}const a=new ii(o);a.colorSpace=ge;const c=new Oh(new Yc({map:a,transparent:!0,blending:Un,depthWrite:!1}));c.position.copy(r.position),c.scale.setScalar(5.5),i.add(c);const l=new cn(.35,1.4,6);l.translate(0,0,-1.5);const u=new ne({color:1837586,roughness:.6,metalness:.5,emissive:2099216,flatShading:!0});for(const h of[-1,1]){const d=new et(l,u);d.position.set(h*2.6,0,-2.5),d.rotation.z=h*.25,d.rotation.y=h*.2,i.add(d)}return{group:i,hull:n,core:r,halo:c}}const Zo=i=>i*i*(3-2*i),wv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Il=[3.5,3,4,4,3.5,4.5];function bv({renderer:i}){const t=new bo;t.background=new zt(66055);const e=new Fe(50,window.innerWidth/window.innerHeight,.1,5e3);e.position.set(0,8,140),e.lookAt(0,0,0),t.add(new pl(10141920,1052704,.7));const n=new qi(16773848,1.1);n.position.set(50,30,80),t.add(n);const s=Ad();t.add(s);const r=yv();t.add(r.mesh);const o=Sv();o.group.position.set(200,30,30),o.group.rotation.y=-.6,t.add(o.group);const a=new Ge({color:16732224,transparent:!0,opacity:0,blending:Un,depthWrite:!1,side:De}),c=new et(new vi(2,60,16,1,!0),a);c.rotation.x=Math.PI,t.add(c);const l=document.createElement("div");l.id="cinematic",l.innerHTML=`
    <div class="cinematic__skip" data-skip>${Pl?Yt.intro.tapToSkip:Yt.intro.skip}</div>
    <div class="cinematic__text" data-text></div>
    <div class="cinematic__flash" data-flash></div>
  `,document.body.appendChild(l);const u=l.querySelector("[data-text]"),h=l.querySelector("[data-flash]");let d=0,f=0,g=0,_=!0,p=!0;function m(U,y,w){switch(U){case 0:{r.mesh.position.set(0,0,0),r.mesh.scale.setScalar(1+.02*Math.sin(g*.5)),o.group.position.x=200,c.material.opacity=0;break}case 1:{r.mesh.position.set(0,0,0),e.position.x=-10+20*wv(y),e.lookAt(0,0,0);break}case 2:{const H=140+-45*Zo(y);e.position.set(0,8,H),e.lookAt(0,0,0);const L=140,z=38;o.group.position.x=L+(z-L)*Zo(y),o.group.position.z=30-10*Zo(y),o.group.rotation.y=-.6-.4*Zo(y);break}case 3:{e.position.set(0,8,95),o.group.position.x=38,o.group.position.z=20,o.group.rotation.y=-1,c.material.opacity=.4+.35*Math.sin(g*12);const H=o.group.position,L=r.mesh.position;c.position.set((H.x+L.x)/2,(H.y+L.y)/2,(H.z+L.z)/2),c.lookAt(L),c.rotateX(Math.PI/2),e.position.x=Math.sin(g*30)*.4,e.position.y=8+Math.cos(g*27)*.3,e.position.z=95,e.lookAt(0,0,0);break}case 4:{o.group.position.x=38,o.group.position.z=20,e.position.set(0,8,95),e.lookAt(0,0,0),y<.5?(h.style.opacity=String(y*2*.95),c.material.opacity=.35*(1-y*2)):(o.group.visible=!1,r.mesh.visible=!1,c.material.opacity=0,h.style.opacity=String(Math.max(0,1-(y-.5)*2)));break}case 5:{h.style.opacity="0";break}}}function v(U){u.innerHTML=U.split(`
`).map(y=>`<p>${y}</p>`).join(""),u.classList.remove("cinematic__text--in"),u.offsetWidth,u.classList.add("cinematic__text--in")}function x(){d+=1,f=0,p=!0,d>=Il.length&&M()}function M(){_&&(_=!1,l.remove(),t.traverse(U=>{U.geometry&&U.geometry.dispose();const y=Array.isArray(U.material)?U.material:U.material?[U.material]:[];for(const w of y)w.map&&w.map.dispose(),w.dispose()}))}function P(){M()}function b(U){if(!_)return;g+=U,f+=U,p&&(v(Yt.intro.beats[d]),p=!1);const y=Math.min(1,f/Il[d]);m(d,y),r.update(U),o.halo.material.opacity=.7+.25*Math.sin(g*4),Rd(s,e),f>=Il[d]&&x()}function T(){_&&i.render(t,e)}function I(U=window.innerWidth,y=window.innerHeight){e.aspect=U/y,e.updateProjectionMatrix()}return{update:b,render:T,skip:P,onResize:I,get active(){return _}}}function Ev(){if(!(new URLSearchParams(window.location.search).get("debugPad")==="1"))return{update(){}};const t=document.createElement("div");t.id="debug-pad",Object.assign(t.style,{position:"fixed",top:"8px",left:"8px",zIndex:"9999",background:"rgba(0,0,0,0.78)",color:"#9af0a0",font:"11px ui-monospace, Menlo, Consolas, monospace",padding:"8px 10px",maxWidth:"min(92vw, 520px)",maxHeight:"60vh",overflow:"auto",border:"1px solid #3a3",borderRadius:"4px",whiteSpace:"pre-wrap",pointerEvents:"none",lineHeight:"1.35"}),document.body.appendChild(t);function e(){const n=Hd(),s=n?window.__p5NativeHost===!0?"__p5NativeHost=true":"webkit.messageHandlers":"(none — desktop / non-wrapper)",r=window.__nativeGamepadBridgeReady===!0,o=window.__nativeGamepadUpdateCount||0,a=window.__nativeGamepadLastRaw,c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[],l=c&&c[0];let u="(no pad)";if(l){const h=[];for(let d=0;d<l.buttons.length;d++)l.buttons[d]&&l.buttons[d].pressed&&h.push(d);u=`id=${JSON.stringify(l.id)}
mapping=${l.mapping}
axes=[${l.axes.map(d=>d.toFixed(2)).join(", ")}]
pressed buttons=[${h.join(", ")||"(none)"}]`}return["=== gamepad debug ===",`bridge available: ${n}  (${s})`,`bridge module ready: ${r}`,`__nativeGamepadUpdate calls: ${o}`,`last raw payload: ${a?JSON.stringify(a).slice(0,240):"(none yet)"}`,"","--- navigator.getGamepads()[0] ---",u].join(`
`)}return{update(){t.textContent=e()}}}const Tv=[0,120,350,700],Av=2;function Rv(i){const t=i.getBoundingClientRect(),e=Math.max(1,Math.round(t.width||window.innerWidth)),n=Math.max(1,Math.round(t.height||window.innerHeight));return{width:e,height:n,pixelRatio:Math.min(window.devicePixelRatio||1,Av)}}function Cv(i,t){let e={width:0,height:0,pixelRatio:0};const n=[];function s(){const a=Rv(i);a.width===e.width&&a.height===e.height&&a.pixelRatio===e.pixelRatio||(e=a,t(a))}function r(){for(const a of n.splice(0))clearTimeout(a);for(const a of Tv)n.push(setTimeout(s,a))}const o=new ResizeObserver(s);return o.observe(i),window.addEventListener("resize",s),window.addEventListener("orientationchange",r),window.visualViewport?.addEventListener("resize",s),window.addEventListener("pageshow",r),screen.orientation?.addEventListener("change",r),s(),{measure:s,dispose(){for(const a of n.splice(0))clearTimeout(a);o.disconnect(),window.removeEventListener("resize",s),window.removeEventListener("orientationchange",r),window.visualViewport?.removeEventListener("resize",s),window.removeEventListener("pageshow",r),screen.orientation?.removeEventListener("change",r)}}}const Pv=new C(0,1.4,-5.5),Ll=Li.degToRad(180),Dl=Li.degToRad(85),Iv=.04,Lv=.09,jd=new C(1,0,0),$d=new C(0,1,0);function Jd(i){return i<-1?-1:i>1?1:i}function Qo(i,t){return i<-t?-t:i>t?t:i}function Nl(i,t){return 1-Math.pow(2,-i/t)}function Dv(i){let t=0,e=0,n=0,s=0,r=!1;const o=new C,a=new C,c=new C;return{get orbit(){return{yaw:t,pitch:e}},reset(){t=0,e=0,n=0,s=0,r=!1},update(l,u,h){const d=Jd(u?.x??0),f=Jd(u?.y??0);if(n=Qo(n+(u?.turnX??0),Ll),s=Qo(s-(u?.turnY??0),Dl),Math.abs(d)>.05||Math.abs(f)>.05){const m=Nl(h,.25);n-=n*m,s-=s*m}const g=Qo(d*Ll+n,Ll),_=Qo(-f*Dl+s,Dl),p=Nl(h,Lv);t+=(g-t)*p,e+=(_-e)*p,o.copy(Pv).multiplyScalar(l.mesh.scale.x).applyAxisAngle(jd,e).applyAxisAngle($d,t).applyQuaternion(l.mesh.quaternion),a.copy(l.mesh.position).add(o),r?i.position.lerp(a,Nl(h,Iv)):(i.position.copy(a),r=!0),c.set(0,1,0).applyAxisAngle(jd,e).applyAxisAngle($d,t).applyQuaternion(l.mesh.quaternion),i.up.copy(c),i.lookAt(l.mesh.position)}}}function Vn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Me;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Zd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=Zd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Zd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Oe(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function Qd(i,t){if(t===vp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===lc||t===Eu){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===lc)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}const In={name:"Via Giuseppe Impastato",radiusM:500,attribution:"Data © OpenStreetMap contributors, ODbL 1.0 (osm.org/copyright)",buildings:[{pts:[[166.2,-518.3],[165.5,-516.5],[147.5,-476.1],[172.5,-465.1],[191.2,-507.3],[166.2,-518.3]],h:6.5,kind:"house"},{pts:[[379.6,55.3],[360.7,94.4],[377.8,102.9],[394.4,69.9],[379.6,55.3]],h:6.5,kind:"house"},{pts:[[503.5,16.9],[427.3,43.4],[414.6,71.6],[429.3,99],[451.9,56.8],[488.8,44.4],[487.9,41.4],[494.4,39.1],[491.7,30],[506.7,26],[503.5,16.9]],h:6.5,kind:"house"},{pts:[[335.8,-7.8],[285.4,94.6],[306.3,105],[308.6,98.4],[331.8,110.3],[377.7,13.7],[335.8,-7.8]],h:6.5,kind:"house"},{pts:[[356,99],[339.5,130.2],[358.9,186.9],[376.9,180.4],[359.8,133.6],[372.6,107.7],[356,99]],h:6.5,kind:"house"},{pts:[[403.5,79.3],[373.8,142.6],[382.6,169.7],[395.9,165.1],[388.1,142.8],[413.9,88.4],[403.5,79.3]],h:6.5,kind:"house"},{pts:[[435.6,9],[441.6,26.4],[381.2,47.2],[392.9,22.6],[435.6,9]],h:6.5,kind:"house"},{pts:[[511.6,6.2],[503.6,-3.8],[486.4,-12.3],[471.2,-13.1],[456.7,-8.2],[447.1,.3],[441.5,7.9],[447.4,26.6],[511.6,6.2]],h:6.5,kind:"house"},{pts:[[403,184],[362,197.6],[375.8,236.6],[386,239],[394.9,236.8],[403.5,231.8],[411.6,222.2],[414.1,212.4],[413.8,201],[412.5,197.4],[409.7,189.7],[403,184]],h:6.5,kind:"house"},{pts:[[66.4,-148.5],[74.4,-150],[74.9,-147],[110.8,-149.3],[113,-148.1],[121.5,-146.2],[118.3,-134.7],[113.2,-136.2],[109.9,-128.2],[74.4,-129.3],[72,-139.8],[67.6,-139.3],[66.4,-148.5]],h:6.5,kind:"house"},{pts:[[130.5,-122.6],[136.6,-129.2],[132.8,-133.1],[136.9,-138.5],[147.7,-124.8],[146.4,-121.9],[161.2,-98.9],[164.9,-90.6],[167.3,-81.1],[161,-79.9],[159.6,-84.8],[151.6,-83.2],[130.5,-122.6]],h:6.5,kind:"house"},{pts:[[183.3,-27.4],[185,-29.6],[186.7,-34.9],[189.4,-42.3],[190.3,-50.1],[192.5,-60.3],[194.7,-85.6],[201.8,-87.5],[201.5,-93],[208,-94.2],[209.7,-77.9],[207.9,-77.8],[207.8,-74.4],[206.4,-57.2],[204.6,-57.6],[203.7,-49.5],[205.8,-49.1],[205.5,-44.6],[199.8,-33],[202.1,-31.5],[198.4,-24.2],[192.3,-15.3],[187.5,-17.4],[190.8,-23.6],[183.3,-27.4]],h:6.5,kind:"house"},{pts:[[17.4,239.3],[23.3,225.4],[31.2,228.8],[25.3,242.7],[17.4,239.3]],h:6.5,kind:"house"},{pts:[[128.4,102.6],[140.4,82.9],[158.6,94],[146.7,113.7],[128.4,102.6]],h:6.5,kind:"house"},{pts:[[107.5,179.9],[113.7,165.6],[121.8,169.1],[115.6,183.4],[107.5,179.9]],h:6.5,kind:"house"},{pts:[[200,20.3],[218,1.1],[227,9.6],[209,28.8],[200,20.3]],h:6.5,kind:"house"},{pts:[[-419.2,57.9],[-417,52.2],[-412.6,53.9],[-414.7,59.6],[-419.2,57.9]],h:6.5,kind:"house"},{pts:[[233.2,-14.5],[248,-28.7],[258.6,-17.6],[243.7,-3.4],[233.2,-14.5]],h:6.5,kind:"house"},{pts:[[-438.6,61.7],[-436.7,56.5],[-432.7,57.9],[-434.5,63.2],[-438.6,61.7]],h:6.5,kind:"house"},{pts:[[121,151.4],[123.5,145.8],[128,147.9],[125.5,153.4],[121,151.4]],h:6.5,kind:"house"},{pts:[[-428.1,77.6],[-425.2,70.7],[-420.2,72.9],[-423.2,79.7],[-428.1,77.6]],h:6.5,kind:"house"},{pts:[[-9.3,245.8],[-4.2,233.3],[7.2,238],[2.1,250.5],[-9.3,245.8]],h:6.5,kind:"house"},{pts:[[166.1,59.1],[172.4,48.2],[182.5,54.3],[176,65.1],[166.1,59.1]],h:6.5,kind:"house"},{pts:[[134.4,163.9],[139.1,153.9],[148.6,158.4],[144,168.3],[134.4,163.9]],h:6.5,kind:"house"},{pts:[[-208.3,188.7],[-202.1,174.3],[-189.4,179.8],[-195.6,194.2],[-208.3,188.7]],h:6.5,kind:"house"},{pts:[[147.5,47.1],[153.1,37.7],[162.5,43.3],[156.9,52.7],[147.5,47.1]],h:6.5,kind:"house"},{pts:[[-19.5,262.5],[-17.1,256.3],[-15.3,251.6],[-15.2,251.3],[3.9,258.7],[-.4,269.8],[-19.5,262.5]],h:6.5,kind:"house"},{pts:[[-50.2,256.2],[-47.9,250.4],[-43,237.8],[-40.3,238.8],[-35.3,240.8],[-42.4,259.2],[-50.2,256.2]],h:6.5,kind:"house"},{pts:[[-35,208.2],[-30.5,197.5],[-3.9,208.8],[-7.3,216.8],[-26.1,208.9],[-27.2,211.5],[-35,208.2]],h:6.5,kind:"house"},{pts:[[-109.4,465.4],[-101.8,448.1],[-94.8,451.3],[-97.6,457.6],[-92.7,459.8],[-97.5,470.7],[-109.4,465.4]],h:6.5,kind:"house"},{pts:[[-448.3,80.2],[-444.1,70.6],[-428.1,77.6],[-423.2,79.7],[-420.3,81],[-424.5,90.6],[-448.3,80.2]],h:6.5,kind:"house"},{pts:[[-244.7,187.4],[-238.6,170.7],[-236.2,171.6],[-232.1,173.1],[-229.3,174.1],[-235.4,190.8],[-244.7,187.4]],h:6.5,kind:"house"},{pts:[[-88.8,468.8],[-84.1,458.5],[-75.3,462.6],[-78.5,469.7],[-77.8,470],[-79.3,473.2],[-88.8,468.8]],h:6.5,kind:"house"},{pts:[[140.3,28.2],[151,10.9],[162.4,17.9],[159.3,22.9],[158.3,24.5],[152.8,21.1],[146.3,31.8],[140.3,28.2]],h:6.5,kind:"house"},{pts:[[-230.2,161.2],[-225.3,149.9],[-217.7,153.2],[-220.1,158.8],[-208.8,163.7],[-213.6,174.8],[-225.7,169.6],[-223.3,164.2],[-230.2,161.2]],h:6.5,kind:"house"},{pts:[[-15.5,46.6],[-9.9,32.7],[9.2,40.8],[3.4,54.6],[-1.8,52.4],[-2.9,55.1],[-11.1,51.6],[-9.9,48.8],[-15.5,46.6]],h:6.5,kind:"house"},{pts:[[-28.9,232.6],[-28.6,232.1],[-25.6,226],[-22.3,219.4],[-14.9,223.1],[-15.6,224.6],[-12.4,226.2],[-18.4,238],[-28.9,232.6]],h:6.5,kind:"house"},{pts:[[48.8,74.6],[54.2,61.3],[72.9,68.8],[67.5,82.1],[61.6,79.8],[60.2,83.4],[53,80.5],[54.4,76.9],[48.8,74.6]],h:6.5,kind:"house"},{pts:[[16.5,60.6],[22.1,47.8],[39.4,55.2],[34.2,67.2],[29.2,65],[27.5,68.9],[21.9,66.5],[22.5,63.2],[16.5,60.6]],h:6.5,kind:"house"},{pts:[[447.9,-105.3],[449.5,-109],[451.1,-108.4],[454.3,-115.9],[464.6,-111.4],[465.5,-113.5],[475.8,-109.1],[472.5,-101.5],[474.6,-100.6],[469.8,-89.5],[448.7,-98.6],[451,-103.9],[447.9,-105.3]],h:6.5,kind:"house"},{pts:[[456.3,-134.4],[459.6,-142.2],[457.7,-143],[462.5,-154.3],[473.3,-149.7],[474.2,-151.8],[484.8,-147.3],[481.7,-140],[484,-139],[478.9,-127.1],[467.5,-131.9],[466.6,-129.9],[456.3,-134.4]],h:6.5,kind:"house"},{pts:[[341.4,-256.2],[345.4,-271.8],[365.8,-266.7],[361.9,-251.1],[341.4,-256.2]],h:6.5,kind:"house"},{pts:[[308.5,-264.1],[312.4,-279.6],[332.7,-274.4],[328.8,-259],[308.5,-264.1]],h:6.5,kind:"house"},{pts:[[421.6,-152.2],[428.7,-173.3],[440.6,-169.2],[441.2,-171.2],[452,-167.5],[444.6,-145.6],[432.8,-149.6],[432.4,-148.5],[421.6,-152.2]],h:6.5,kind:"house"},{pts:[[96,-37],[82.8,-36],[81.1,-15.2],[75,5.8],[66.7,19.6],[80.5,29.4],[89,13.4],[97.5,-14.4],[96,-37]],h:6.5,kind:"house"},{pts:[[24.6,-90.6],[19.8,-78.9],[33.2,-64.8],[41.6,-51.6],[45.8,-35.8],[54.6,-38.1],[59.7,-39],[57,-55.3],[49.2,-71.4],[43.9,-84],[29,-96.2],[24.6,-90.6]],h:6.5,kind:"house"},{pts:[[326.6,128.1],[314.8,132.4],[310.4,119.5],[290.5,109],[284.3,109.4],[277.7,112.4],[273,119.2],[265.5,141.5],[282.3,190.3],[287,188.9],[299.9,184.9],[301.6,191.5],[309.6,189.1],[312.6,197.1],[332.9,190.8],[334.4,195.3],[347.9,190.5],[326.6,128.1]],h:6.5,kind:"house"},{pts:[[204.8,316.2],[182.2,362.6],[192,367.3],[214.6,320.9],[204.8,316.2]],h:6.5,kind:"roof"},{pts:[[222.8,273.8],[209.4,301.2],[220.8,306.7],[234.1,279.4],[222.8,273.8]],h:6.5,kind:"house"},{pts:[[261.7,356.2],[253.6,373.4],[247.4,370.5],[255.5,353.2],[261.7,356.2]],h:6.5,kind:"house",name:"Vecchietti Autolavaggi"},{pts:[[432.9,155.5],[431.4,158.6],[435.7,160.7],[437.2,157.6],[432.9,155.5]],h:6.5,kind:"service"},{pts:[[235.9,342.3],[244.5,346.4],[246.1,343],[237.5,338.8],[235.9,342.3]],h:6.5,kind:"service"},{pts:[[229.4,338.1],[224.2,348.8],[219.5,346.6],[224.7,335.9],[229.4,338.1]],h:6.5,kind:"house"},{pts:[[87.2,403.9],[91,405.5],[92.7,401.3],[89,399.7],[87.2,403.9]],h:6.5,kind:"service"},{pts:[[-18.4,-23.6],[-24.5,-8.7],[-5.7,0],[18.3,2.4],[33.6,.8],[32.4,-16.7],[17.4,-15.6],[-6,-18.8],[-18.4,-23.6]],h:6.5,kind:"house"}],roads:JSON.parse('[{"pts":[[350.8,-81.3],[357.8,-81],[362.8,-82.1],[367.3,-84.2],[371.4,-87.2],[375,-91.4],[377.6,-96.3],[378.9,-101.6],[379,-107.1],[377.6,-113.2],[374.7,-118.7],[370.2,-123.5],[364.6,-126.8],[358.3,-128.6],[351.8,-128.5],[346.6,-127.2],[341.9,-124.8],[337.8,-121.4],[334.1,-116.4],[331.9,-110.7],[331.2,-104.6],[332,-98.6],[334.1,-93.3],[338.4,-87.7],[344.1,-83.6],[350.8,-81.3]],"w":7,"kind":"tertiary","name":"Rotonda Trattati di Roma"},{"pts":[[-250,895.6],[-240.2,870.8],[-223.5,833.7],[-206.7,799.3],[-198.2,783.5],[-190.3,770.8],[-170.1,737.8],[-163.3,725.7],[-158.5,714.5],[-144,656.4],[-126,602.8],[-118.3,566.5],[-114.8,557.5],[-105.6,535.4],[-95.3,515.2],[-83,493.8],[-52.9,442],[-40.5,417.9],[-20.4,368.5],[-13.4,350],[-7.4,332.9],[4,299.6],[5.3,296.7],[7.1,293.8],[9.1,291.4],[11.6,289.5],[13.4,289],[15.1,288.5],[18.6,287.6],[23,288.1],[49.2,299.2],[53.9,300.3],[57.7,300.1],[62.2,299.4],[66,297.6],[69.4,294.5],[87.7,263.1],[102.7,240.2],[127.5,209.1],[133.7,200],[138.7,192.1],[151,169.4],[157.8,155.4],[166.1,135.5],[178.2,104.4],[187.7,82],[189.5,77.3],[192,73.2],[203,58.1],[215.1,43.3],[220.4,38.9],[225.7,36.4],[229.9,34.5],[233.7,31.1],[253,6.5],[267.8,-13.8],[274.5,-26.7],[278.9,-37.9],[281.4,-52.6],[282.3,-64.6],[281.4,-94.6],[279.6,-121.1],[279.7,-123.6]],"w":6,"kind":"unclassified","name":"Via Frabaccia"},{"pts":[[232,165.6],[228.2,161.7],[223.6,158.8],[219.6,157.2],[216.5,156.4],[209,156.2],[203.7,157.4],[197.9,160.2],[191.3,166.5],[187.4,174.2],[186.3,182.1],[187.2,188.5],[188.7,192.6],[191.6,197.3],[197,202.5],[205,206.4],[209.3,207.2],[215.3,207.1],[221.1,205.7],[223.5,204.6],[226.7,202.7],[228.4,201.4],[232.1,197.7],[235,193.1],[236.5,189.6],[237.4,185.5],[237.5,178.6],[236,172.4],[233.7,167.9],[232,165.6]],"w":7,"kind":"tertiary","name":"Rotonda Ingrè"},{"pts":[[178,251.5],[193.1,231.4],[200.8,221.8],[215.3,207.1]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[178,251.5],[154.3,297.6],[121,375.3],[105,418.2]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[233.7,167.9],[232.5,161],[232,154.3],[232.4,150.5],[233.6,145.4],[235.9,138.4],[247.3,109.1]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[247.3,109.1],[239,120.1],[230.1,131.2],[220,143.8],[214.3,150.6],[209,156.2]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[334.1,-93.3],[335.3,-88.3],[335.7,-81.3],[335,-76],[334.6,-75],[331.3,-66],[321.5,-39.5]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[321.5,-39.5],[285.8,32.1],[247.3,109.1]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[573.7,-552.2],[571,-547.2],[459.2,-315.4],[454.9,-306.5],[388.5,-169.7]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[529.4,26.3],[512.2,32.2],[503.6,35.3],[501,37.3],[496.5,45.7],[455.4,59.8]],"w":2.2,"kind":"cycleway"},{"pts":[[553,-44],[495.4,-69],[491.5,-69.6],[478.8,-68.9],[473.5,-70.1],[441.2,-82.8],[420.5,-91.6],[417.4,-91.6]],"w":2.5,"kind":"cycleway"},{"pts":[[240,-99.2],[237.6,-95],[233.9,-88.7],[230.5,-82.8],[229.2,-57.3],[240.2,-44.7],[243.4,-41.1]],"w":4,"kind":"service"},{"pts":[[-50.7,-309.6],[-55.6,-300.8],[-57.9,-296.7],[15.6,-253.2],[60.4,-226.7]],"w":4,"kind":"service"},{"pts":[[86.3,-215],[81.5,-207.9],[74.4,-197.4]],"w":6,"kind":"residential"},{"pts":[[167.9,-27.4],[154.3,-30.6],[142.8,-30.1],[136.2,-27.6],[125.5,-21],[117.9,-12.9],[110.5,-0.1]],"w":4,"kind":"service"},{"pts":[[74.4,-197.4],[98.5,-182.9],[142,-157.3],[185.5,-131.4],[230,-104.8],[240,-99.2],[248.2,-93.9],[251.2,-90.8],[253.6,-87.7],[255.1,-85.2],[256.5,-82.8],[257.8,-78.7],[258.6,-74.6],[258.5,-68.1],[258,-62.9],[255.7,-57],[250,-47.9],[243.4,-41.1],[203.3,0.7],[197,3],[192.4,3.4],[188.2,2.6],[178.6,-3],[157.6,-15.2],[152.2,-16.3],[147.1,-15.8],[141.7,-14.8],[135.2,-10.9],[130.9,-6.3],[127.9,-1.4],[97.3,50.4],[94.2,54.6],[89.2,58.3],[82.3,60.8],[76.5,61],[69.1,59.5],[63.5,57],[-43.2,8.6],[-47.5,5.3]],"w":6,"kind":"residential","name":"Via Giuseppe Impastato"},{"pts":[[337.8,-121.4],[331.2,-119.9],[326.2,-119.1],[321.9,-119.1],[318.5,-119.6],[314.4,-120.9],[281,-130.7],[249.7,-140.5],[163.2,-192.3],[112.4,-221.8],[107.8,-227.1]],"w":6,"kind":"residential","name":"Via Emanuela Loi"},{"pts":[[86.1,-242.3],[82.2,-239.6],[79.3,-235.8],[77.8,-231.3],[77.7,-226.6],[79.2,-221.8],[82.2,-217.8],[86.3,-215],[90.9,-213.6],[95.7,-213.8],[100.2,-215.5],[104,-218.5],[106.6,-222.5],[107.8,-227.1],[107.6,-231.7],[106,-236],[103.2,-239.7],[99.4,-242.3],[95.1,-243.7],[90.4,-243.7],[86.1,-242.3]],"w":6,"kind":"residential"},{"pts":[[107.7,-199.6],[124.9,-189.4],[151.8,-173.6],[199.3,-145.6],[240.3,-121.5],[254.8,-112.9]],"w":4,"kind":"service"},{"pts":[[167.9,-27.4],[174.9,-41.4],[176.5,-53.8],[175.7,-68.3],[165.9,-101.6],[162.6,-108],[158.9,-115.2],[147.1,-130.7],[136.9,-138.5],[132.8,-141.7],[126.3,-145.2],[121.5,-146.2],[113,-148.1],[95.2,-150],[89.2,-149.7],[76.9,-149]],"w":1.8,"kind":"footway"},{"pts":[[-89.9,-328.2],[-79.8,-326.5],[-68.4,-319.9],[-50.7,-309.6],[23.1,-265.7],[69.3,-238.1],[74,-233.5],[77.7,-226.6]],"w":6,"kind":"residential"},{"pts":[[86.1,-242.3],[79.1,-243.2],[75,-244.3],[27.3,-272.6],[-64.4,-327.1],[-77.4,-334.8],[-81.9,-341.6]],"w":6,"kind":"residential"},{"pts":[[100.2,-215.5],[108.8,-215],[159,-185.5],[206.5,-157.6],[248.1,-133.1],[279.7,-123.6],[311.7,-113.5],[317,-111.9],[321.9,-109.5],[325.9,-106.1],[332,-98.6]],"w":6,"kind":"residential","name":"Via Emanuela Loi"},{"pts":[[199.3,-145.6],[201.9,-150],[206.5,-157.6]],"w":4,"kind":"service"},{"pts":[[-84,-333.8],[-82.4,-337.5],[-81.9,-341.6],[-82.6,-346.1],[-84.6,-350.2],[-87.8,-353.5],[-91.8,-355.8],[-96.3,-356.7],[-100.9,-356.2],[-105.1,-354.4],[-108.6,-351.4],[-111.1,-347.5],[-112.2,-343],[-112,-338.3],[-110.3,-334],[-107.4,-330.3],[-103.5,-327.7],[-99,-326.4],[-94.3,-326.6],[-89.9,-328.2],[-86.5,-330.6],[-84,-333.8]],"w":6,"kind":"residential"},{"pts":[[141.7,-14.8],[140.1,-18.5],[137.6,-24.4]],"w":4,"kind":"service"},{"pts":[[332.4,216.6],[326.2,198.2]],"w":4,"kind":"service"},{"pts":[[254.3,202.3],[245.5,193],[241.6,188.2],[239.3,183.3],[237.5,178.6]],"w":4,"kind":"service"},{"pts":[[442.9,182.6],[438,192.1],[410.2,244.8],[403.9,250.6],[395.8,255.5],[387.5,258.4],[378.5,258.3],[372.6,257],[367,254.9],[352.1,246.8],[341.4,240.1]],"w":4,"kind":"service"},{"pts":[[454.4,180.2],[480,191.2],[483,192.5],[489.1,191.6],[511.8,144.3],[516.4,134.7],[514.9,131.3],[510.9,129.5],[506.1,127.4],[491.1,120.8]],"w":4,"kind":"service"},{"pts":[[536.3,36.2],[533.2,25],[526.8,5.4],[523,-6.5],[519.8,-11.3],[514.4,-15.6],[477.2,-34]],"w":4,"kind":"service","name":"Via Pio La Torre"},{"pts":[[149.1,-168.3],[148.9,-166.2],[149.4,-163.9],[151.3,-161.2],[228.9,-115.2],[233.1,-114.9],[237.4,-116.8]],"w":1.8,"kind":"footway"},{"pts":[[448.8,165.8],[446.3,165.7],[443.9,166.3],[441.7,167.6],[439.9,169.4],[438.5,172.1],[438.2,175.2],[438.8,178.1],[440.5,180.7],[442.9,182.6],[445.3,183.5],[447.8,183.7],[450.3,183.2],[452.6,182],[454.4,180.2],[455.7,177.9],[456.3,175.3],[456.1,172.7],[455.1,170.2],[453.4,168.1],[451.2,166.6],[448.8,165.8]],"w":4,"kind":"service"},{"pts":[[320.8,229.5],[291.1,219.2],[262,206],[254.3,202.3]],"w":4,"kind":"service"},{"pts":[[482.9,175.4],[500.7,138.6],[506.1,127.4],[529.8,78.2],[515.8,71.4],[491.1,120.8],[486.1,131.3],[470.8,163.6],[471.5,167.8],[473,170.6],[482.9,175.4]],"w":4,"kind":"service"},{"pts":[[529.5,46.9],[519.3,50.9],[513,53.3],[507,56.5],[501.9,61.4],[498.2,67.4],[495.8,72.4],[470.8,123.6],[454.4,157],[451.2,166.6]],"w":4,"kind":"service"},{"pts":[[434.3,-73.7],[405.2,-90],[391.8,-97.4],[386.5,-101],[381.1,-105.5],[379,-107.1]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[346.1,225.1],[344.1,221.5],[340.8,218.5],[336.8,216.8],[332.4,216.6],[328.8,217.6],[325.5,219.5],[323,222.3],[321.4,225.8],[320.8,229.5],[321.5,233.5],[323.3,237.1],[326.2,240],[329.8,241.8],[333.8,242.5],[337.8,241.9],[341.4,240.1],[344.4,237.2],[346.3,233.4],[346.9,229.3],[346.1,225.1]],"w":4,"kind":"service"},{"pts":[[458.6,72.3],[473.1,79.3],[455.5,115.8],[438.2,151.9],[424.1,145.1]],"w":4,"kind":"service"},{"pts":[[550.8,-31.1],[548.2,-32],[488.6,-52],[437.2,-72.5],[434.3,-73.7]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[495.8,72.4],[483.6,67.2],[470.7,61.2],[466.5,61.3],[463.9,62.1],[462.7,64],[458.6,72.3],[441.3,108.7],[426.3,140.5],[424.1,145.1],[420.2,153.4],[421.3,160.4],[427.1,163.8],[429.1,164.6],[439.9,169.4]],"w":4,"kind":"service"},{"pts":[[163.2,-192.3],[159,-185.5],[156.9,-182],[151.8,-173.6],[149.1,-168.3],[144,-160.7],[142,-157.3],[139.6,-153.2],[132.8,-141.7],[110.7,-104],[98.7,-83.7],[86.7,-63.5],[75.1,-43.8],[62.2,-21.8],[63.2,-18.8],[63.3,-15.8],[62.6,-12.5],[61.3,-9.4],[56.9,-5],[54.2,-3.4],[50.5,-2.8],[49.1,-6],[48.7,-9.7],[49.3,-13.1],[50.5,-16.8],[53.5,-19.7],[57.2,-21.7],[59.4,-22.2],[62.2,-21.8]],"w":1.8,"kind":"footway"},{"pts":[[388.5,-169.7],[366.6,-142.9],[359.9,-135.8],[351.8,-128.5]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[374.7,-118.7],[375,-126.4],[375.6,-132.8],[376.7,-137.8],[381.7,-152.5],[388.5,-169.7]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[344.1,221.5],[349.6,215.2],[354.9,203.7],[352.9,192.3],[352.4,189.5],[331.9,131.3],[333.5,122],[389.5,9.8],[393.9,6.7],[451.4,-12],[452.6,-12.4],[459,-14.9],[463.3,-17.6],[466,-20.3],[477.2,-34]],"w":4,"kind":"service","name":"Via Pio La Torre"},{"pts":[[511.4,30.3],[501.1,34.4],[498.5,37],[495.9,42],[493.9,44.6],[464.9,54.4],[454,58.3],[451.8,59.1],[429,102.5],[423.9,95.7],[405.7,131],[399.1,143.7],[409.7,172.6],[416.8,170.5]],"w":1.8,"kind":"footway"},{"pts":[[233.7,31.1],[235.6,38.2]],"w":1.8,"kind":"footway"},{"pts":[[171.6,149.8],[156.2,181.4],[148.3,198.6],[136.7,215.8],[99.3,265],[78.6,301.1],[74.1,305.6],[66.2,310.6],[51.5,316.3],[32.9,322.5],[22.8,325.9],[15.8,330.1],[8.1,337.6],[2.4,346.2],[-34.5,432.8],[-95.3,539.5],[-101,556.5],[-112.4,590],[-114.1,601.8],[-114,613.3],[-111.6,623.6],[-106.5,634],[-100.3,641.7],[-92.6,648.4],[-84.5,652.6],[-58.3,664.9],[-49.2,665.1],[-37.1,663.8]],"w":3,"kind":"cycleway","name":"Bassa Via dei Parchi di Castel Maggiore"},{"pts":[[43.9,338],[56.2,343.6],[64,350.5],[69.4,358.6],[72.6,368]],"w":1.8,"kind":"footway"},{"pts":[[145.4,229.5],[147.9,232.6],[149,235.5],[148.6,239.8],[147.7,243.7],[105,326.5],[99.3,331.1],[92.9,333.5]],"w":1.8,"kind":"footway"},{"pts":[[74.5,318.7],[65.2,326.7],[54.7,334.8],[43.9,338],[32.7,336.1],[24.3,337.8],[14.7,341.9],[7,348.9],[-2.7,365.3],[-32.7,435.4],[-98.3,591.7],[-98.7,605.3],[-96.2,616.3],[-85.1,631.2],[-68.5,638.8]],"w":2,"kind":"footway"},{"pts":[[477.2,-34],[458.8,-40.5]],"w":4,"kind":"service","name":"Via Pio La Torre"},{"pts":[[15.9,665.7],[109.3,444.2],[122.1,410.6],[135,407.7],[142.3,390.9],[142.8,388.1],[142.3,384.5],[139.7,381.1]],"w":2,"kind":"cycleway"},{"pts":[[279.7,-123.6],[281,-130.7]],"w":6,"kind":"residential"},{"pts":[[190.8,-52.8],[176.5,-53.8],[149.5,-55.1],[126.5,-68.1],[98.7,-83.7],[69.9,-100],[61.1,-107],[53.2,-114.1],[47.3,-124.4]],"w":1.8,"kind":"footway"},{"pts":[[69.9,-100],[75.6,-106.6],[86,-109.4],[94.1,-109.1],[104.6,-106.4],[110.7,-104],[119,-97.5],[125,-88.5],[128.8,-78.4],[126.5,-68.1],[119.9,-61.6],[110.1,-57.8],[100.5,-58.2],[93.5,-60.8],[86.7,-63.5],[78.8,-69.7],[73.7,-75.8],[71.1,-81.3],[68.2,-88.3],[68.4,-95.1],[69.9,-100]],"w":1.8,"kind":"footway"},{"pts":[[-111.1,-347.5],[-119.2,-349.7],[-125.9,-348.4],[-130.2,-346.4],[-132.9,-342.4],[-133.3,-338.2],[-125.5,-303.4]],"w":6,"kind":"residential"},{"pts":[[515.8,9],[506,-3.3],[496.7,-10.4],[483.8,-16],[472.4,-16.1],[462.5,-13.7],[452.4,-8.9],[446.7,-6.2],[435.8,-0.1],[394.1,13.9],[377.2,46.4],[352.1,94.6],[335.8,126.2],[356.4,191.4],[383.6,182.3]],"w":1.8,"kind":"footway"},{"pts":[[409.7,172.6],[383.6,182.3],[366.4,136.8],[381.3,108.6],[402.1,69],[417.5,39.8],[445.9,31],[505,12.8]],"w":4,"kind":"pedestrian"},{"pts":[[423.9,95.7],[402.1,69],[377.2,46.4]],"w":4,"kind":"pedestrian"},{"pts":[[-47.5,5.3],[-49.8,9.5],[-59.4,26.8]],"w":1.8,"kind":"footway"},{"pts":[[-47.5,5.3],[-166.2,-83.6],[-170.9,-90.4],[-172.6,-100.6],[-158.6,-198.7]],"w":6,"kind":"residential","name":"Via Giuseppe Impastato"},{"pts":[[191.6,197.3],[192.3,202.7],[191.8,208.7],[190.6,214.3],[185.6,228.1],[178,251.5]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[226.7,202.7],[234.9,200.6],[241.1,200.2],[247.4,200.7],[254.3,202.3]],"w":4,"kind":"service"},{"pts":[[321.5,-39.5],[339.6,-62.1],[343.8,-68.3],[345.1,-69.8],[349.1,-74.7],[354.7,-79],[357.8,-81]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[371.4,-87.2],[380,-86.9],[390.5,-85.3],[434.3,-73.7]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[15.1,288.5],[10.6,285.9],[3.4,281.7],[0.6,280.6],[-87.7,246.6],[-167.1,217.9],[-214.7,200.1],[-219.1,198.8],[-222.7,199],[-228.2,199.5],[-234.7,199.1],[-244.8,195.6],[-258.7,190.1],[-262.7,187.4],[-268.1,182.2],[-271.6,178.5],[-274.4,176.5],[-325.8,155],[-340.6,147.5]],"w":6,"kind":"residential","name":"Via Frabaccia"},{"pts":[[285.9,-94.5],[301.6,-95.6],[304.9,-96.7]],"w":1.8,"kind":"path"},{"pts":[[400.1,-212.3],[564.5,-550]],"w":2.2,"kind":"cycleway"},{"pts":[[285.9,-94.5],[286.8,-79.4],[287.5,-69.8],[286.4,-54.5],[283.9,-39.3],[280.1,-27.3],[275.1,-15.8],[254.9,14.1],[235.6,38.2]],"w":4,"kind":"path"},{"pts":[[235.6,38.2],[171.6,149.8]],"w":4,"kind":"path"},{"pts":[[92.9,333.5],[84.3,331.8],[79.1,328.2],[76.8,324.1],[74.5,318.7],[74.6,315.3],[76.1,310.8],[131.8,232.3],[137.4,228.2],[141,228.2],[145.4,229.5]],"w":1.8,"kind":"footway"},{"pts":[[72.6,368],[79.2,347.5],[92.9,333.5]],"w":1.8,"kind":"footway"},{"pts":[[-68.5,638.8],[-49.8,637.6],[-30.2,624.4],[-17.4,600.2],[73.7,383.2],[72.6,368]],"w":2,"kind":"footway"},{"pts":[[-13.8,-566.3],[-16.1,-561.4],[-18.2,-557],[-20.2,-552.7],[-21.9,-549],[-23.9,-544.9],[-25.6,-541.2],[-27.1,-537.8],[-29,-533.9],[-30.9,-529.8],[-31.7,-528.1],[-33.4,-524.5],[-34.2,-522.7],[-36.1,-518.6],[-37.5,-515.8],[-38.5,-513.6],[-41.1,-508],[-42.5,-505],[-44.4,-500.9],[-46.3,-496.8],[-48.2,-492.8],[-49.5,-489.9],[-50.5,-487.9],[-51.4,-485.8],[-52.5,-483.5],[-53.3,-481.8],[-54.9,-478.4],[-57.4,-472.9],[-59.4,-468.6],[-61.1,-465.1],[-61.7,-463.6],[-62.9,-461.2],[-64.6,-457.6],[-65.5,-455.6]],"w":1.8,"kind":"path"},{"pts":[[-42.5,-505],[-53,-510.5],[-55.8,-510.2],[-59.5,-509.8],[-66.8,-512.7],[-67.3,-511.6],[-69.1,-507.9],[-70.8,-504.5],[-72.3,-501.5],[-75.4,-495],[-78.5,-488.7],[-79,-487.8],[-81.8,-481.9],[-82.2,-481.2],[-84.7,-476.1],[-85.9,-473.7],[-87.1,-471],[-87.8,-469.8]],"w":1.8,"kind":"path"},{"pts":[[-85.9,-473.7],[-95.7,-479.4]],"w":1.8,"kind":"path"},{"pts":[[-82.2,-481.2],[-93.1,-486.8]],"w":1.8,"kind":"path"},{"pts":[[-84.7,-476.1],[-74.4,-469.7]],"w":1.8,"kind":"path"},{"pts":[[-77,-516.8],[-83.4,-519.4],[-99.3,-479.7],[-99,-476.7],[-98.1,-474.7],[-92.5,-470.8],[-88.6,-468.4],[-66,-454.8],[-38.6,-438.3],[-7.2,-420],[249.7,-267.7],[282.7,-252.4],[357.1,-227.6],[364.6,-209.7]],"w":1.8,"kind":"path"},{"pts":[[-90.6,-494],[-79,-487.8]],"w":1.8,"kind":"path"},{"pts":[[-35.3,-490.8],[-46.3,-496.8]],"w":1.8,"kind":"path"},{"pts":[[-44.4,-500.9],[-32.2,-494.2]],"w":1.8,"kind":"path"},{"pts":[[-64.6,-457.6],[-53.2,-451.3]],"w":1.8,"kind":"path"},{"pts":[[316.8,-127.7],[322.7,-126.2],[329.8,-127.8],[336.8,-133.2],[343.8,-136.6],[354.1,-140.6],[360.7,-145.9],[382.2,-174.2],[383.5,-176.6],[387.8,-184.9]],"w":3,"kind":"cycleway"},{"pts":[[310.7,-110.7],[311.7,-113.5],[314.4,-120.9],[316.8,-127.7]],"w":2.2,"kind":"cycleway"},{"pts":[[352.1,94.6],[381.3,108.6]],"w":1.8,"kind":"footway"},{"pts":[[445.9,31],[435.8,-0.1]],"w":1.8,"kind":"footway"},{"pts":[[445.9,31],[464.9,54.4]],"w":1.8,"kind":"footway"},{"pts":[[405.7,131],[414.6,135]],"w":1.8,"kind":"footway"},{"pts":[[429,102.5],[430.5,103.2],[437.3,106.6]],"w":1.8,"kind":"footway"},{"pts":[[437.3,106.6],[441.3,108.7],[443.4,109.7]],"w":1.8,"kind":"footway"},{"pts":[[443.4,109.7],[452.2,114.2]],"w":1.8,"kind":"footway"},{"pts":[[452.2,114.2],[455.5,115.8],[458,117.1]],"w":1.8,"kind":"footway"},{"pts":[[458,117.1],[464.3,120.3]],"w":1.8,"kind":"footway"},{"pts":[[464.3,120.3],[470.8,123.6],[476.9,126.6]],"w":1.8,"kind":"footway"},{"pts":[[476.9,126.6],[482.8,129.6]],"w":1.8,"kind":"footway"},{"pts":[[482.8,129.6],[486.1,131.3],[488.2,132.3]],"w":1.8,"kind":"footway"},{"pts":[[458.8,-40.5],[441,-47.7],[405.9,-65.2],[399.8,-66.2],[394.6,-65.8],[364.4,-55.7],[358.8,-52.7],[354.8,-48.4],[335.1,-16.5],[275.9,99.7],[261.5,140.5],[276.3,186.3],[277.5,190.7],[276.9,195.4],[275,198.2],[272.5,199.9],[262,206]],"w":4,"kind":"service","name":"Via Pio La Torre"},{"pts":[[458.8,-40.5],[450.2,-39.6],[443.2,-37.1],[441.9,-36.3]],"w":4,"kind":"service"},{"pts":[[-36,-486.5],[-48.2,-492.8]],"w":1.8,"kind":"path"},{"pts":[[-38.7,-480.9],[-50.5,-487.9]],"w":1.8,"kind":"path"},{"pts":[[-40.5,-477.2],[-52.5,-483.5]],"w":1.8,"kind":"path"},{"pts":[[-43.2,-471.6],[-54.9,-478.4]],"w":1.8,"kind":"path"},{"pts":[[-48.2,-492.8],[-58.9,-499]],"w":1.8,"kind":"path"},{"pts":[[-46.3,-496.8],[-56.9,-501.9],[-57.3,-503.3]],"w":1.8,"kind":"path"},{"pts":[[-49.5,-489.9],[-60.7,-495.1]],"w":1.8,"kind":"path"},{"pts":[[-63.4,-489.3],[-75.4,-495]],"w":1.8,"kind":"path"},{"pts":[[-66.5,-482.5],[-78.5,-488.7]],"w":1.8,"kind":"path"},{"pts":[[-51.4,-485.8],[-62.4,-491.4]],"w":1.8,"kind":"path"},{"pts":[[-54.9,-478.4],[-65.7,-484.2]],"w":1.8,"kind":"path"},{"pts":[[-57.4,-472.9],[-68.2,-478.9]],"w":1.8,"kind":"path"},{"pts":[[-69.6,-476],[-81.8,-481.9]],"w":1.8,"kind":"path"},{"pts":[[-59.4,-468.6],[-70.1,-474.9]],"w":1.8,"kind":"path"},{"pts":[[-57.4,-472.9],[-45.8,-466.5]],"w":1.8,"kind":"path"},{"pts":[[-59.4,-468.6],[-47.9,-462.2]],"w":1.8,"kind":"path"},{"pts":[[-61.1,-465.1],[-49.4,-459]],"w":1.8,"kind":"path"},{"pts":[[-61.7,-463.6],[-72,-469.3]],"w":1.8,"kind":"path"},{"pts":[[-62.9,-461.2],[-51.5,-454.8]],"w":1.8,"kind":"path"},{"pts":[[-64.6,-457.6],[-75.2,-463.7]],"w":1.8,"kind":"path"},{"pts":[[-75.2,-463.7],[-87.1,-471]],"w":1.8,"kind":"path"},{"pts":[[441.2,-82.8],[440.5,-81],[437.2,-72.5],[434.3,-64.9]],"w":1.8,"kind":"footway"},{"pts":[[434.3,-64.9],[431.6,-57.7],[439.1,-54.4],[443,-52.4],[442.1,-50.3]],"w":1.8,"kind":"footway"},{"pts":[[442.1,-50.3],[441,-47.7],[439.7,-45.3],[439,-44],[443.2,-37.1],[444.3,-34]],"w":1.8,"kind":"footway"},{"pts":[[444.3,-34],[450.2,-15.3]],"w":1.8,"kind":"footway"},{"pts":[[450.2,-15.3],[451.4,-12]],"w":1.8,"kind":"footway"},{"pts":[[451.4,-12],[452.4,-8.9]],"w":1.8,"kind":"footway"},{"pts":[[381.2,47.2],[441.6,26.4],[447.4,26.6],[511.6,6.2],[521.6,3],[522.9,6.8],[528.8,24.6],[513.5,29.7],[510.6,28.1],[506.7,26],[503.5,16.9],[427.3,43.4],[414.6,71.6],[429.3,99],[413.9,88.4],[403.5,79.3],[373.8,142.6],[382.6,169.7],[395.9,165.1],[407.7,161.9],[409.4,166.8],[414.8,165.5],[416.8,170.5],[419.1,176.5],[407.5,180.3],[409.7,189.7],[403,184],[362,197.6],[358.9,186.9],[376.9,180.4],[359.8,133.6],[372.6,107.7],[377.8,102.9],[394.4,69.9],[379.6,55.3],[381.2,47.2]],"w":4,"kind":"pedestrian"},{"pts":[[434.3,-64.9],[414.4,-72.9],[396.8,-78.1],[388.5,-80.1],[383.1,-80.8],[377.9,-80.7],[371.2,-78.8],[367,-76.7],[362.8,-75.5],[357.3,-72.7],[350.6,-66.5]],"w":1.8,"kind":"footway"},{"pts":[[350.6,-66.5],[345.1,-69.8],[334.6,-75],[331.3,-77]],"w":1.8,"kind":"footway"},{"pts":[[331.3,-77],[331.9,-81],[331.3,-85.8],[328.3,-92.6],[326.6,-97.3],[325.3,-101.9],[323.2,-105.2],[320.1,-107.7],[315.3,-109.6],[310.7,-110.7]],"w":1.8,"kind":"footway"},{"pts":[[310.7,-110.7],[287.5,-118.2],[285.8,-118],[284.9,-116.1],[285.9,-94.5]],"w":1.8,"kind":"footway"},{"pts":[[356.4,191.4],[352.9,192.3],[348.2,193.8],[331.4,198.6]],"w":1.8,"kind":"footway"},{"pts":[[416.8,170.5],[418.5,170.4],[423.8,172.4],[425.2,172.1],[427.3,168]],"w":1.8,"kind":"footway"},{"pts":[[427.3,168],[429.1,164.6],[431.1,160.9]],"w":1.8,"kind":"footway"},{"pts":[[411.9,149.9],[420.2,153.4],[424.2,155],[424.3,156.2],[424.7,157.5],[431.1,160.9],[434.1,162.1],[437,162.4],[440.7,161.5],[445.5,157.9],[448.1,153.4],[464.3,120.3],[485.5,77.7],[485.1,75.2],[481.4,72.1]],"w":1.8,"kind":"footway"},{"pts":[[481.4,72.1],[483.6,67.2],[484.9,64.4]],"w":1.8,"kind":"footway"},{"pts":[[484.9,64.4],[488.8,65.7],[492.8,64.3],[494.1,60.5],[498.1,54.6],[504.5,50.1],[514.6,45.2],[516.8,44.3]],"w":1.8,"kind":"footway"},{"pts":[[482.1,186.5],[468.6,180.2],[463.9,176.2],[459.9,162.9],[461.1,156.9],[476.9,126.6],[495.9,87.3],[505.2,68],[508,63.5],[513.1,60.5],[521.9,57.6]],"w":1.8,"kind":"footway"},{"pts":[[-158.6,-198.7],[-146.6,-283.2],[-141.1,-294.1],[-129,-302.8],[-125.5,-303.4],[-116.2,-305.1],[-103.6,-302.4],[6.5,-237.4],[74.4,-197.4]],"w":6,"kind":"residential","name":"Via Giuseppe Impastato"},{"pts":[[156.9,-182],[130.6,-197.8],[110.3,-210]],"w":1.8,"kind":"footway"},{"pts":[[124.9,-189.4],[130.6,-197.8]],"w":1.8,"kind":"footway"},{"pts":[[156.9,-182],[201,-155.6],[198.7,-151.8],[201.9,-150],[205.8,-147.6],[208.2,-151.6],[245.3,-130.2],[274.4,-120.3],[276.4,-94.6]],"w":1.8,"kind":"footway"},{"pts":[[245.3,-130.2],[240.3,-121.5],[237.4,-116.8]],"w":1.8,"kind":"footway"},{"pts":[[144,-160.7],[133.9,-167],[132.9,-170.1],[121.2,-176.6],[118.8,-175.4],[84.2,-197.1],[83.5,-198.3],[83.5,-199.9],[86.7,-205],[88.4,-207.4],[89.6,-208],[91.3,-208.2],[97.3,-208.8],[102,-210.2],[106.4,-211.4],[110.3,-210]],"w":1.8,"kind":"footway"},{"pts":[[237.4,-116.8],[237.4,-112.7],[239.2,-109.5],[266.7,-95.2],[276.4,-94.6],[281.4,-94.6],[285.9,-94.5]],"w":1.8,"kind":"footway"},{"pts":[[237.4,-116.8],[232.7,-109.2],[230,-104.8],[227.7,-101.2]],"w":1.8,"kind":"footway"},{"pts":[[232.7,-109.2],[249,-98.9],[258.4,-88.6],[263.9,-75.6],[263.2,-62.9],[258.8,-52.1],[248.2,-38.7],[210.6,-0.1],[203.5,6.3],[197.2,7.7],[187.9,7.6],[179.6,3.7],[177.1,3.9],[170.9,0.3],[170.2,-2.3],[158.4,-9.6],[148.3,-11.9],[141.9,-10],[135.6,-5.3],[129.4,5.7],[114.1,30.6],[115.2,34.3],[105.3,52.1],[101.3,53],[96.1,59.1],[90.5,62.6],[82.2,65.2],[73.4,65.7],[56.6,58.9],[35.4,49.8],[-36.9,17],[-49.8,9.5]],"w":1.8,"kind":"footway"},{"pts":[[227.7,-101.2],[212.4,-110],[209.7,-105.4],[186.2,-119.3],[188.6,-123.8],[183.4,-126.6],[176.1,-131.9],[139.6,-153.2],[96,-178.6],[90.5,-182.3],[85.9,-184.7],[77.1,-185.7],[68.2,-185],[63,-177.8],[66.4,-168.4],[73.3,-161.3],[76.9,-149]],"w":1.8,"kind":"footway"},{"pts":[[98.5,-182.9],[96,-178.6],[91.1,-171.4],[85.5,-163.1],[84.7,-154.1]],"w":4,"kind":"service"},{"pts":[[185.5,-131.4],[183.4,-126.6],[178.9,-119.1],[174.8,-112.4],[166.6,-105.6]],"w":4,"kind":"service"},{"pts":[[136.2,-27.6],[129,-34.8],[108.2,-34.8]],"w":4,"kind":"service"},{"pts":[[137.6,-24.4],[136.2,-27.6]],"w":4,"kind":"service"},{"pts":[[129,-34.8],[129.2,-39.6],[100.8,-39.5],[102.1,-17.3],[99.6,-4.6],[98.4,1.4],[96.6,8.8]],"w":1.8,"kind":"footway"},{"pts":[[100.8,-39.5],[81.6,-40.5],[75.1,-43.8]],"w":1.8,"kind":"footway"},{"pts":[[227.7,-101.2],[233.9,-97.5],[237.6,-95],[239.9,-93.2],[246.5,-88.8],[250.1,-84.3],[252.8,-78.1],[254.2,-70],[253.7,-62.7],[250.8,-56.6],[246,-49.9],[242.9,-46.5],[240.2,-44.7],[238.1,-42.3],[237.2,-41.2],[224.6,-27.7],[209.9,-12.6],[202.2,-4.4],[198.7,-1.7],[196,-1.1],[192.2,-0.8],[188.1,-1.9],[185.1,-3.8],[163.2,-17.2],[158.8,-19.1],[152.7,-20.6],[147.3,-20.7],[143.7,-19.8],[140.1,-18.5],[135.4,-16.7],[131.9,-13.5],[129.5,-11.3],[126.8,-7.6],[122,0.5],[119.4,5.2],[114.5,2.3],[103.1,21.2],[108,24.2],[103.5,31.7],[97.3,42.4],[93.6,48.5],[90.9,51.7],[87.3,53.8],[83.4,55.6],[78.4,56.6],[70.9,55.5],[66.6,53.6],[62,51.4],[43.1,42.6],[11.4,28.9],[-17.8,15.4],[-39,4.2],[-44.8,1]],"w":1.8,"kind":"footway"},{"pts":[[233.9,-88.7],[229.6,-92.2],[226.2,-93.9],[222.7,-93.7],[220.3,-92.6],[218.6,-91],[216.8,-86.6],[215.8,-81.7],[214.3,-62.1],[212.6,-52.7],[210,-43.3],[208.9,-38.6],[205.6,-25.4]],"w":1.8,"kind":"footway"},{"pts":[[208.9,-38.6],[213.4,-37.6],[218.2,-37.1],[222.2,-37.2],[226.5,-39.3],[229.5,-42.6],[232.8,-46.1],[234,-45.7],[238.1,-42.3]],"w":1.8,"kind":"footway"},{"pts":[[99.6,-4.6],[104.2,-3.6],[110.5,-0.1],[114.5,2.3]],"w":1.8,"kind":"footway"},{"pts":[[86.7,-205],[81.5,-207.9],[75,-211.4]],"w":1.8,"kind":"footway"},{"pts":[[75,-211.4],[75.7,-213.5],[75.9,-215.7],[74.6,-219.3],[72.6,-223.1],[72.1,-227],[71,-231.4],[69.9,-233.6],[57.4,-241.2],[21.1,-262.2],[-49.5,-304.2],[-51.9,-299.2],[-55.6,-300.8],[-59.6,-303.2],[-57.1,-308.7],[-70.2,-316.6],[-68.4,-319.9],[-66.5,-323.2],[-64.4,-327.1],[-62.7,-329.8]],"w":1.8,"kind":"footway"},{"pts":[[21.1,-262.2],[15.6,-253.2],[13.2,-249.1],[8.8,-241.3],[6.5,-237.4]],"w":1.8,"kind":"footway"},{"pts":[[21.1,-262.2],[23.1,-265.7],[27.3,-272.6],[28.9,-275.6]],"w":1.8,"kind":"footway"},{"pts":[[-70.2,-316.6],[-77.5,-304.1],[-81.9,-296.7]],"w":1.8,"kind":"footway"},{"pts":[[-77.5,-304.1],[-77.4,-299.2],[-75.4,-295.9],[-69.5,-291.9],[5.9,-247.5],[9.6,-247.4],[13.2,-249.1]],"w":1.8,"kind":"footway"},{"pts":[[75,-211.4],[72.8,-207.6],[70.2,-206.1],[68.6,-206.1],[60.1,-210.8],[44.9,-219.7],[34,-225.9],[33.4,-228.3],[21.9,-235.4],[19.6,-234.8],[8.8,-241.3]],"w":1.8,"kind":"footway"},{"pts":[[163.2,-192.3],[165.2,-195.3],[202,-173.6],[204.6,-174],[210.7,-170.7],[211.2,-168.2],[250.6,-145.1],[258.7,-142.4],[316.8,-127.7]],"w":1.8,"kind":"footway"},{"pts":[[364.6,-209.7],[383.7,-212.7],[392.9,-212.8],[400.1,-212.3]],"w":1.8,"kind":"footway"},{"pts":[[178.9,-119.1],[174.7,-121.6],[144.4,-139.1]],"w":4,"kind":"service"},{"pts":[[91.1,-171.4],[94.8,-169.2],[126,-150.6]],"w":4,"kind":"service"},{"pts":[[94.8,-169.2],[92.2,-165.8],[89.4,-160.3],[88.8,-153.1],[89.2,-149.7]],"w":1.8,"kind":"footway"},{"pts":[[174.7,-121.6],[171.5,-116],[169.2,-112],[162.6,-108]],"w":1.8,"kind":"footway"},{"pts":[[427.3,168],[430.2,170.2],[431.6,171.6],[432.6,173.8],[433.4,175.9],[433.8,178.3],[433.6,181],[433,183.2],[431.8,185.8],[430.8,187.7],[420.8,207.7],[412.6,224.7],[406.9,236.4],[404.3,240],[401.1,243.8],[397.4,247.1],[392.3,249.6],[387.3,251.1],[382.3,251.9],[375.8,251],[370.1,249.4],[358.7,243.3],[356.1,240.8],[353.4,236.3],[353.3,230.1],[352.7,225.2],[352.9,219.2],[354.9,214.5],[358.4,206.2],[358.4,200],[356.4,191.4]],"w":1.8,"kind":"footway"},{"pts":[[481.4,72.1],[467,66.2],[462.7,64],[455.4,59.8],[454,58.3]],"w":1.8,"kind":"footway"},{"pts":[[-53.3,-481.8],[-64.1,-487.7]],"w":1.8,"kind":"path"},{"pts":[[-87.8,-469.8],[-88.6,-468.4]],"w":1.8,"kind":"path"},{"pts":[[-65.5,-455.6],[-66,-454.8]],"w":1.8,"kind":"path"},{"pts":[[139.7,381.1],[137.3,376.6],[137.9,370.4],[140.4,363.4],[181.9,271.3],[215.9,222.4],[241.2,211.4],[246.9,211.7],[278.9,227.1],[292.3,229.9],[300.8,233.3],[307.9,236.9],[310.9,238.8],[312.5,243.4],[314.3,245.6],[324.7,251.6],[333.6,255.6],[338.2,253.7],[345,252.6],[363.3,260.6],[374.7,264.7],[383.8,265.8],[393.2,264.1],[400.7,260.9],[406.9,256.9],[413,251.9],[418.3,245.5],[442.4,196.5],[443.3,195.1],[446.5,191.7],[451.4,188.9],[452.7,188.3]],"w":2.2,"kind":"cycleway"},{"pts":[[105,418.2],[118.6,403],[125.2,393.1],[131.4,386.7],[139.7,381.1],[151.7,375.4],[161.3,370.6],[167.4,365.9],[171.3,361.7],[175.4,354.3],[178.4,345.9],[180.8,337]],"w":4,"kind":"service"},{"pts":[[329.8,241.8],[324.7,251.6],[303.5,292.1]],"w":4,"kind":"service"},{"pts":[[195.5,298.1],[210.5,265.5],[214.1,262.4],[217.9,260.9],[222.8,261.8],[248.6,275],[257.9,279.7],[277.3,289.2],[291.4,296]],"w":4,"kind":"service"},{"pts":[[195.5,298.1],[197.8,305.1],[199.5,307.4],[204.1,311],[225.3,322.3],[238.1,329.2]],"w":4,"kind":"service"},{"pts":[[252,290.9],[238.4,316.8],[254.1,324.5],[267.6,298.4],[252,290.9]],"w":4,"kind":"service"},{"pts":[[254.1,324.5],[249.4,333.7]],"w":4,"kind":"service"},{"pts":[[171.3,361.7],[174.4,361.5],[177.6,361.4],[197.2,367.3],[202.6,366.7],[216.4,363.2],[219.6,361.5],[222.2,359.3]],"w":4,"kind":"service"},{"pts":[[238.1,329.2],[249.4,333.7],[259.9,339.3],[274.6,345.4],[277.9,343.5],[281,337.6],[291.4,318],[294.6,313.9],[298.4,309.8]],"w":4,"kind":"service"},{"pts":[[186.8,320.4],[215.6,333.1]],"w":4,"kind":"service"},{"pts":[[184.1,327.9],[215.7,344.8]],"w":4,"kind":"service"},{"pts":[[175.4,354.3],[198,362.6]],"w":4,"kind":"service"},{"pts":[[178.4,345.9],[206.3,361]],"w":4,"kind":"service"},{"pts":[[180.8,337],[211.4,352.9]],"w":4,"kind":"service"},{"pts":[[211.4,352.9],[222.2,359.3]],"w":4,"kind":"service"},{"pts":[[222.2,359.3],[228.1,347.8],[234.1,336.6],[238.1,329.2]],"w":4,"kind":"service"},{"pts":[[292.2,-79.8],[290.1,-81.4],[288.7,-83.6],[288.1,-86.1],[288.4,-88.7],[289.5,-91.1],[291.3,-92.9],[293.7,-94.1],[296.3,-94.4],[298.8,-93.8],[301,-92.4],[302.5,-90.5],[303.4,-88.2],[303.5,-85.8],[302.9,-83.4],[301.5,-81.4],[299.6,-79.9],[297.3,-79],[294.7,-79],[292.2,-79.8]],"w":4,"kind":"pedestrian"},{"pts":[[301,-92.4],[301.6,-95.6],[285.9,-94.5],[286.8,-79.4],[288.7,-83.6],[288.1,-86.1],[288.4,-88.7],[289.5,-91.1],[291.3,-92.9],[293.7,-94.1],[296.3,-94.4],[298.8,-93.8],[301,-92.4]],"w":4,"kind":"pedestrian"},{"pts":[[503.7,-185.3],[502.1,-181.1],[499.5,-175.3],[495.1,-165.5],[457.6,-182.5]],"w":4,"kind":"service"},{"pts":[[427.3,169],[430.6,171.5],[431.8,174.2],[432.9,177.3],[425.4,173],[427.3,169]],"w":4,"kind":"pedestrian"},{"pts":[[387.8,-184.9],[389.3,-191.6],[400.1,-212.3]],"w":2.2,"kind":"cycleway"},{"pts":[[382.2,-135],[392.7,-129.2],[398.1,-123.5],[400.4,-119.6],[402.5,-115.2],[405.8,-106.7],[410.6,-98.2],[417.4,-91.6]],"w":3,"kind":"cycleway"},{"pts":[[417.4,-91.6],[420.3,-89.4],[440.5,-81],[472.6,-67.8],[497.7,-58.1],[538.5,-43.8],[550.9,-39.3]],"w":1.5,"kind":"footway"},{"pts":[[382.2,-135],[388.8,-151.5],[398.2,-171.7],[405.9,-188.4],[424.8,-226.1],[462.1,-304.9],[492.4,-366.5],[521.3,-426.5],[579.1,-543.9]],"w":2.5,"kind":"footway"},{"pts":[[304.9,-96.7],[310.7,-110.7]],"w":1.8,"kind":"path"},{"pts":[[171.6,149.8],[164.7,165.9],[158.9,181.2],[155.5,208.6],[151.8,219.4],[145.4,229.5]],"w":4,"kind":"path"},{"pts":[[215.6,333.1],[217.6,339.4],[215.7,344.8],[211.4,352.9]],"w":4,"kind":"service"},{"pts":[[198,362.6],[206.3,361],[211.4,352.9]],"w":4,"kind":"service"},{"pts":[[189.3,312.2],[195.5,298.1]],"w":4,"kind":"service"},{"pts":[[293.1,293.8],[291.4,296],[290.5,298.4],[290.2,301],[290.7,303.6],[291.9,305.9],[293.7,307.8],[295.9,309.1],[298.4,309.8],[301,309.7],[303.6,309],[305.8,307.5],[307.5,305.5],[308.6,303.1],[308.9,300.5],[308.5,297.9],[307.4,295.5],[305.7,293.5],[303.5,292.1],[300.8,291.3],[298,291.3],[295.4,292.2],[293.1,293.8]],"w":4,"kind":"service"},{"pts":[[105,418.2],[77.1,486.7],[44.8,565.9],[16.9,629.5]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[102.7,240.2],[59.3,222.4],[-23,191.1]],"w":4,"kind":"service"},{"pts":[[0.6,280.6],[13.9,230.4],[-2.7,220.4],[-14,216.1]],"w":4,"kind":"service"},{"pts":[[54.7,-164.6],[63,-177.8]],"w":1.8,"kind":"footway"},{"pts":[[54.7,-164.6],[47.2,-164.3],[40,-161.4],[33.2,-156],[28,-149.4],[23.1,-141],[19.7,-131.9],[18.7,-123.7],[19.9,-117.5],[22.7,-112.1]],"w":1.8,"kind":"footway"},{"pts":[[27,-50.8],[36.8,-56.6]],"w":1.8,"kind":"footway"},{"pts":[[27,-50.8],[31.9,-42.8],[35.5,-32.9],[38.1,-25.1],[50.5,-16.8]],"w":1.8,"kind":"footway"},{"pts":[[47.3,-124.4],[54.3,-135.9],[56.7,-145.5],[58.2,-153.3],[57.1,-159.5],[54.7,-164.6]],"w":1.8,"kind":"footway"},{"pts":[[47.3,-124.4],[42.8,-119.3],[37.2,-115.1],[31.2,-112.6],[22.7,-112.1]],"w":1.8,"kind":"footway"},{"pts":[[22.7,-112.1],[0.1,-73.6],[10.7,-67.3],[19.3,-60.5],[27,-50.8]],"w":1.8,"kind":"footway"},{"pts":[[-44.8,1],[-40.1,-3.9],[-37.1,-9.2],[-29.6,-21.5],[-22.3,-33],[-11.2,-27.1],[-1.7,-24.3],[3.2,-23.1],[11.5,-22.1],[20.3,-21.9],[29.6,-22.5],[38.1,-25.1]],"w":1.8,"kind":"footway"},{"pts":[[3.2,-23.1],[3.2,-18.3]],"w":1.8,"kind":"footway"},{"pts":[[-44.8,1],[-47.5,5.3]],"w":1.8,"kind":"footway"},{"pts":[[50.5,-2.8],[44.8,8.7]],"w":1.8,"kind":"footway"},{"pts":[[-345.6,145.1],[-352.3,142],[-526.6,65.7]],"w":6,"kind":"residential","name":"Via Frabaccia"},{"pts":[[-340.6,147.5],[-345.6,145.1]],"w":6,"kind":"residential","name":"Via Frabaccia"},{"pts":[[478.3,193.3],[463.3,186.4],[459.2,185.8],[452.7,188.3]],"w":1.8,"kind":"footway"},{"pts":[[452.7,188.3],[454.7,188.5],[466.9,194.8],[470.7,196.2],[474.8,195.6],[478.3,193.3]],"w":2.2,"kind":"cycleway"},{"pts":[[430.8,187.7],[438,192.1],[443.3,195.1]],"w":2.2,"kind":"cycleway"},{"pts":[[411.9,149.9],[418.5,170.4],[422.3,180.9],[425.3,184.4],[430.8,187.7]],"w":2.2,"kind":"cycleway"},{"pts":[[455.4,59.8],[452.1,60.9],[430.5,103.2],[414.6,135],[410.1,144],[411.9,149.9]],"w":2.2,"kind":"cycleway"},{"pts":[[358.7,243.3],[352.1,246.8],[346.9,249.8],[345,252.6]],"w":1.8,"kind":"footway"},{"pts":[[257.9,279.7],[252,290.9]],"w":4,"kind":"service"},{"pts":[[252,290.9],[246.2,287.4],[242.3,283.6],[239.4,278.4],[222.5,270],[219.5,270.3],[216.9,272.9],[203.6,300.9],[205.1,304.2],[209.7,307.4],[225,314.3],[229.4,315.5],[233.9,316.8],[238.4,316.8]],"w":4,"kind":"service"},{"pts":[[229.4,315.5],[225.3,322.3],[222.9,327.1],[224.6,332.2],[234.1,336.6]],"w":1.8,"kind":"footway"},{"pts":[[180.8,337],[184.1,327.9],[186.8,320.4],[189.3,312.2]],"w":4,"kind":"service"},{"pts":[[189.3,312.2],[195.8,312.2],[199.9,311.2],[204.1,311]],"w":4,"kind":"service"},{"pts":[[360.7,-145.9],[366.6,-142.9],[376.7,-137.8],[382.2,-135]],"w":3,"kind":"cycleway"}]'),areas:JSON.parse('[{"pts":[[240.8,-537.6],[201.1,-435.1],[272,-409.1],[383.8,-368.2],[441.1,-480.9],[465.3,-469.4],[488.3,-512.4],[459,-527.1],[476.5,-561.2],[480.5,-568.7],[476,-570.9],[469.9,-571.4],[394.6,-610.3],[387,-614.2],[385,-610.3],[370.4,-616.3],[327.2,-520.1],[321.1,-506.2],[240.8,-537.6]],"kind":"sports_centre","name":"Centro sportivo Lirone"},{"pts":[[217.1,-660.6],[220.5,-668.5],[236.3,-662],[233.8,-656.9],[257.7,-646.1],[307.7,-624.1],[319.4,-618.3],[294.8,-567.7],[301.4,-564.7],[288.8,-538.2],[327.2,-520.1],[321.1,-506.2],[240.8,-537.6],[201.1,-435.1],[129.1,-463.9],[150.6,-512.2],[-2.1,-556.6],[-16.1,-561.4],[-26.7,-565.6],[-28.6,-561.7],[-30.7,-557.3],[-32.5,-553.5],[-34.3,-549.8],[-72,-564.9],[2.6,-747.1],[5.6,-745.9],[10.8,-743.9],[71.4,-720.5],[129.3,-698.2],[154,-689.8],[159.5,-688],[158.6,-685.5],[128.4,-696.2],[122.9,-682.5],[152,-670.8],[147.2,-662.2],[146,-659.2],[169.6,-647.5],[168.1,-644.1],[195,-630.8],[201.2,-627.8],[217.1,-660.6]],"kind":"park","name":"Parco Lirone"},{"pts":[[181.7,172.5],[180.5,177.9],[180,183.7],[181.2,189.1],[183,194.4],[187.1,203.1],[188.1,207.3],[188.1,211.8],[187.2,216],[185.9,219.9],[184.3,223.9],[182.3,227.7],[134.4,328.2],[92.5,433.2],[49.4,541.4],[25.4,596],[18.9,610.1],[-2.2,643.7],[-20.5,665.6],[-43.7,676.6],[-63.3,670.9],[-134.6,641.5],[-120,600.6],[-107.1,554.7],[-85,506.4],[-46.7,439.7],[-3.3,333.9],[6.8,299.4],[9.2,295.2],[12.8,292.2],[15.8,291],[19.6,291.3],[26,293.1],[40.7,299.4],[55.4,304],[63.9,302.1],[69.4,299.2],[83.9,273.6],[100.1,247.6],[127.3,212.5],[135.9,200.6],[152.4,170.2],[157.7,159.8],[174.2,119.9],[181.7,100.6],[190.5,81.2],[196.3,70.9],[202.7,61.7],[218.4,42.3],[224.1,39.7],[231.4,37.8],[235.7,35],[240.3,34.8],[250.3,25.4],[265.8,4.5],[280.3,-17.5],[284.5,-29.1],[288.1,-40.5],[289.8,-53.1],[290.5,-66.7],[288.2,-78],[287,-89.7],[285.6,-115.4],[316.3,-106.2],[322.9,-101.6],[324.8,-93.1],[329.4,-84.4],[330.1,-75],[331.6,-74.5],[328.5,-68.3],[315.5,-41.2],[296.4,-3],[279.8,30.9],[262.9,65.2],[249.7,92],[234.4,114.8],[218.7,136.9],[213.2,144.3],[206.6,149.8],[193.1,156.2],[186.3,162.9],[181.7,172.5]],"kind":"park","name":"Parco Lupicchio"},{"pts":[[-546.5,467.6],[-390.8,521.1],[-371.9,463.4],[-354.8,409.2],[-344.2,375.6],[-363.8,367],[-325.2,266.2],[-369.8,253],[-366.8,239.9],[-400.9,229.7],[-432.3,310.8],[-487.3,290.7],[-506.3,347.6],[-546.5,467.6]],"kind":"vineyard"},{"pts":[[632.4,184.4],[632.1,194.1],[624.5,229.6],[611.6,275.7],[602.4,306.1],[591.4,340],[577.1,382.6],[509.7,349.7],[483.6,410.5],[546.5,448.7],[533.5,476.3],[524.9,499.9],[516.1,530.1],[505.8,566.9],[502.3,593.2],[497.8,613],[478.2,648.1],[387,604.4],[305.5,771.4],[409.2,825.8],[391.1,861.3],[358.1,929],[184.5,840.7],[-4.6,750.6],[-11.6,747.5],[8.5,730.2],[37.1,731.1],[53.1,723.1],[60.6,683],[11.7,660.3],[56,554.1],[97.1,452.1],[131.4,373.9],[266.1,440.5],[332.5,300.9],[347.2,259.9],[360.2,262.4],[375.2,267.8],[390.5,267.2],[406.5,260.2],[419.2,247.9],[446.5,197],[449.6,193.4],[454.8,191.6],[487.2,207.9],[526.2,127.7],[632.4,184.4]],"kind":"farmland"},{"pts":[[-149,-355.1],[-274.6,-421.4],[-284.6,-332.7],[-313.9,-307.1],[-426.3,-369.6],[-399.3,-538.2],[-372.2,-634.9],[293.6,-240.9],[353.1,-214.8],[400.2,-216.1],[368.2,-165.2],[346.4,-142.5],[316.3,-135.5],[264.7,-140.1],[179.8,-189],[125.5,-219.2],[115.2,-226.4],[111.9,-237.7],[108.5,-244.9],[97.5,-252.1],[95,-252.4],[72.8,-255.9],[35.5,-278.5],[-44.1,-322.1],[-51.4,-326.1],[-48.8,-350.3],[-144.6,-411.4],[-149,-355.1]],"kind":"construction"},{"pts":[[451,176],[451.3,174.8],[451.2,173.5],[450.7,172.4],[449.8,171.5],[448.7,170.9],[447.5,170.7],[446.3,170.9],[445.2,171.5],[444.4,172.4],[443.9,173.5],[443.8,174.7],[444.1,175.9],[444.8,177],[445.7,177.7],[446.9,178.1],[448.1,178.1],[449.3,177.8],[450.3,177],[451,176]],"kind":"grass"},{"pts":[[243.9,-533.3],[207.5,-440.4],[268,-416],[304.8,-510.2],[243.9,-533.3]],"kind":"pitch"},{"pts":[[-2.1,-556.6],[-16.1,-561.4],[-26.7,-565.6],[-28.6,-561.7],[-30.7,-557.3],[-32.5,-553.5],[-34.3,-549.8],[-36.2,-546],[-37.9,-542.5],[-39.7,-539.1],[-42.5,-533.2],[-45,-528],[-51.5,-513.6],[-53,-510.5],[-55.2,-507.2],[-66.8,-512.7],[-82.5,-517.6],[-98.1,-476.5],[-87.8,-469.8],[-75.9,-462.2],[-66.1,-455.9],[-54.4,-448.8],[-53.2,-451.3],[-51.5,-454.8],[-49.4,-459],[-47.9,-462.2],[-45.8,-466.5],[-43.2,-471.6],[-40.5,-477.2],[-38.7,-480.9],[-36,-486.5],[-32.2,-494.2],[-28.5,-501.6],[-26,-506.9],[-23,-512.9],[-21.3,-516.5],[-20.2,-518.6],[-17.4,-524.4],[-15.7,-527.9],[-13.8,-531.7],[-12.1,-535.3],[-10.3,-538.8],[-2.1,-556.6]],"kind":"allotments","name":"Area della Saggezza"},{"pts":[[334,235.9],[336.2,235.7],[338.1,234.9],[339.7,233.4],[340.7,231.5],[341.1,229.4],[340.7,227.3],[339.7,225.4],[338.1,224],[336.2,223.1],[334,223],[332,223.5],[330.2,224.7],[328.9,226.3],[328.2,228.3],[328.2,230.4],[328.9,232.4],[330.2,234.1],[331.9,235.3],[334,235.9]],"kind":"grass"},{"pts":[[514.2,43],[512.4,37.2],[509.8,35.8],[502.2,38.4],[497.4,46.6],[477.4,54.2],[485.6,58.2],[483.4,63.1],[487.1,65],[491.3,64.6],[493.3,62.2],[492.8,60.1],[495.6,55.8],[500.7,51],[508.4,46.6],[513.7,44.6],[514.2,43]],"kind":"grass"},{"pts":[[1164.7,-1514.2],[1174.6,-1511.3],[1249.4,-1477.2],[1237.7,-1333.4],[1216.6,-1245.9],[1207.3,-1189],[1190.9,-1137.9],[1162.6,-1050.2],[1139.4,-983],[1144.3,-981.3],[1139.6,-965],[1150.1,-961.4],[1143.2,-944],[1141,-944.6],[1139.8,-940.6],[1133.2,-942.8],[1123.7,-914.2],[1101.6,-856.4],[1089.2,-823.8],[1085.3,-813.3],[1078.8,-802.2],[1075.7,-796.9],[1066.9,-781.7],[1046.9,-750.2],[1045.2,-745.8],[1068.5,-734.9],[1086.1,-713.6],[1090.2,-707.9],[1079.3,-670.3],[1062.7,-616.5],[1074.2,-609.7],[1070.8,-599.8],[1070.5,-598.9],[1068.6,-593.1],[1066.4,-587.7],[1065.3,-584.9],[1062.3,-585.8],[1050.8,-589.8],[1048.1,-590.7],[1046.3,-591.3],[995.3,-609],[993.7,-606.1],[990.7,-602.9],[985.6,-599.6],[980.3,-597.5],[975.8,-596.1],[933.6,-486.3],[934.2,-485],[934.7,-483.5],[935,-482.2],[935.2,-479.9],[933.5,-475.6],[933,-473.8],[929.8,-470.4],[925.6,-466.8],[912.3,-432.1],[903.6,-409.6],[923.3,-400.8],[921.7,-396.9],[918.8,-389.4],[739.9,80.4],[652.7,44],[649.8,29.1],[642.4,17.4],[641,4.4],[635,-24.6],[628.9,-26.9],[627,-27.4],[625.4,-28.4],[623.5,-31.2],[621.6,-34],[618.1,-37.9],[591.1,-44.5],[587,-42.9],[581.8,-40.8],[576.9,-36.6],[573,-35.4],[566.1,-35.3],[556.9,-36.3],[415.8,-90.2],[398.4,-98.4],[387.8,-106.5],[383.2,-117.1],[380.2,-123.3],[378.8,-133.2],[357.9,-139.9],[343.8,-136.6],[336.8,-133.2],[329.8,-127.8],[322.9,-101.6],[321.5,-93.9],[326.2,-81.5],[324.8,-71.5],[318.7,-57.9],[297.8,-16.6],[277.8,24.2],[264,52.3],[252.3,76.1],[245,90.2],[205.8,142.2],[167.7,148.3],[99.8,237.2],[83.9,226.9],[111.1,128.9],[-204.3,-29.2],[-144.6,-411.4],[-48.8,-350.3],[-51.4,-326.1],[72.8,-255.9],[81.1,-250.9],[264.7,-140.1],[339.2,-143.5],[368.2,-165.2],[400.2,-216.1],[458.9,-339.5],[269.3,-410.1],[201.1,-435.1],[129.1,-463.9],[150.6,-512.2],[-2.1,-556.6],[-16.1,-561.4],[-26.7,-565.6],[-28.6,-561.7],[-30.7,-557.3],[-32.5,-553.5],[-34.3,-549.8],[-72,-564.9],[-23.7,-692.1],[-53.7,-703.8],[-31.5,-767.9],[-99.3,-796.8],[-96.7,-804],[-22.7,-1005.9],[-111.5,-1036.8],[-104.2,-1061],[-92.8,-1098.6],[-82.1,-1095.4],[-79,-1102.5],[-16.3,-1080.7],[5.1,-1086],[11.1,-1105.2],[-78.1,-1148.4],[-87.5,-1153],[-195.7,-1201.9],[-141.7,-1354.5],[-68.6,-1325.1],[15.4,-1556.8],[24.1,-1581.6],[124.8,-1767.1],[50.4,-1812],[89.8,-1893.4],[94,-1895],[170,-1773.4],[215.5,-1862.8],[263.4,-1843.1],[258.8,-1826.5],[278.9,-1822.1],[214.2,-1708.6],[248.9,-1660],[300.4,-1612.6],[300.8,-1764.5],[337.3,-1750],[324.1,-1712],[425.2,-1671.3],[419.1,-1656],[434.1,-1649],[404.6,-1573.8],[410.8,-1560],[475.9,-1518.9],[531.8,-1675.4],[564.4,-1662.3],[548.1,-1613.9],[554.5,-1608.4],[516.3,-1502.6],[629.9,-1593.1],[731.1,-1648.6],[740,-1658.9],[713.2,-1680.7],[730.9,-1729.1],[760.9,-1718.7],[793.7,-1822.1],[803.5,-1835],[819.5,-1875.4],[863.9,-1859.3],[944.2,-1824],[982.2,-1806.5],[952.6,-1716.7],[882.2,-1745.2],[851.4,-1648.5],[786,-1673.6],[734.8,-1640.1],[718.4,-1555.4],[747.1,-1545.1],[763.7,-1535.4],[745.8,-1477.3],[755.8,-1467.5],[781.2,-1535.4],[947.5,-1483.2],[919.1,-1396.2],[1082,-1357.6],[1098.4,-1380.7],[1111.2,-1386.1],[1120.8,-1390.1],[1135.6,-1414.2],[1158.5,-1491.3],[1164.7,-1514.2]],"kind":"residential"},{"pts":[[224.8,194.3],[228.3,189.3],[229.9,183.4],[229.3,177.3],[226.8,171.8],[222.5,167.4],[217,164.8],[211.4,164.2],[206,165.3],[201.2,168],[197.4,172],[195.1,177.1],[194.5,182.6],[195.5,188],[198.2,192.8],[202.3,196.6],[207.9,199],[214,199.5],[219.9,197.8],[224.8,194.3]],"kind":"grass"},{"pts":[[360.9,-89.5],[365.6,-92],[369.2,-96],[371.4,-100.9],[371.8,-106.3],[370.4,-111.5],[367.4,-115.9],[363.1,-119.2],[358.1,-120.8],[352.8,-120.8],[347.8,-119],[343.6,-115.7],[340.7,-111.3],[339.4,-106.2],[339.8,-100.9],[341.9,-96],[345.5,-92.1],[350.3,-89.5],[355.6,-88.6],[360.9,-89.5]],"kind":"grass"},{"pts":[[509.4,-275.2],[511.7,-280.5],[473.8,-297.1],[434.2,-213.4],[477.5,-204.6],[508,-272.2],[478.2,-284.4],[477.3,-281.5],[487.6,-276.8],[478.4,-256.5],[475.9,-251],[481.8,-248.3],[481.4,-247.3],[484.4,-245.9],[480.1,-236.5],[477,-237.9],[476.2,-236.1],[469.6,-239.1],[467.2,-233.9],[456.7,-238.7],[449.5,-242.1],[473.4,-291.1],[509.4,-275.2]],"kind":"grass"},{"pts":[[531.2,1],[542.2,-25.7],[436.7,-64.4],[435.9,-62.9],[434.8,-63.3],[432.7,-58.6],[441.7,-54.5],[444.4,-53.2],[443.6,-49.9],[470,-43.5],[498.8,-30],[515.8,-21.3],[520.9,-17.1],[525.2,-11.7],[527.4,-7.5],[530,0.4],[531.2,1]],"kind":"grass"},{"pts":[[331.9,200],[338.4,198.1],[340.2,202.9],[345.5,202],[345.3,200.7],[351.3,199.2],[351.3,205.3],[347.9,210.2],[342.6,212.4],[336.6,210.3],[333.5,206.3],[331.9,200]],"kind":"grass"},{"pts":[[375.8,236.6],[377.9,250.9],[388.9,249.8],[398.4,244.9],[406,236.6],[412.9,222.2],[428.6,189.7],[428.1,188],[426.6,187],[424.3,185.4],[421.8,182.5],[420.5,180.3],[419.1,176.5],[407.5,180.3],[409.7,189.7],[416.1,187.2],[419.5,195.4],[412.5,197.4],[413.8,201],[414.1,212.4],[411.6,222.2],[403.5,231.8],[394.9,236.8],[386,239],[375.8,236.6]],"kind":"grass"},{"pts":[[414.8,165.5],[409.4,166.8],[407.7,161.9],[402.1,144.1],[407,134.5],[411.5,136.6],[408,144.2],[408,145.5],[414.8,165.5]],"kind":"grass"},{"pts":[[409.4,129.4],[423.1,101.4],[427.6,104.1],[414.2,132.2],[409.4,129.4]],"kind":"grass"},{"pts":[[430.8,185.7],[432.4,182.7],[433.1,179.7],[432.9,177.3],[425.4,173],[422.7,173.3],[420,171.9],[422.1,177.2],[424,180.4],[426.5,183.1],[430.8,185.7]],"kind":"grass"},{"pts":[[92.2,-223],[94.2,-223.1],[96.2,-223.8],[97.8,-225.1],[98.9,-226.8],[99.4,-228.8],[99.3,-230.9],[98.5,-232.7],[97.1,-234.3],[95.2,-235.3],[93.1,-235.7],[91,-235.3],[89.1,-234.3],[87.7,-232.8],[86.9,-230.8],[86.7,-228.7],[87.3,-226.6],[88.5,-224.9],[90.2,-223.7],[92.2,-223]],"kind":"grass"},{"pts":[[108.8,-208],[109.5,-209.3],[103.7,-209.6],[97.2,-207.9],[91.8,-207.2],[87.9,-205.2],[84.4,-199.9],[132.9,-170.1],[143,-163.9],[147.2,-170.8],[141.5,-174.2],[140,-171.7],[101.3,-194.4],[108.8,-208]],"kind":"grass"},{"pts":[[147.7,-184.6],[148.7,-185.7],[153.8,-182.4],[151.1,-177.1],[145.2,-180.4],[147.7,-184.6]],"kind":"grass"},{"pts":[[253,-103.2],[251.1,-100.9],[237.9,-108.8],[237.2,-108],[249.4,-100.6],[258.5,-91.9],[264.7,-77.2],[265,-68.1],[263.6,-58.7],[261.3,-53.1],[263.7,-51.5],[259.2,-42.4],[270.6,-32.2],[275.3,-49.6],[276.3,-59.9],[276.7,-70.1],[274.6,-95.1],[273.7,-119.9],[245.8,-128.7],[245.2,-127.6],[261.8,-117.9],[253,-103.2]],"kind":"grass"},{"pts":[[235.5,-86.1],[239.7,-92],[246,-87.6],[250.5,-81.1],[253,-71.4],[252.2,-62],[247.3,-53.2],[241.9,-47.2],[234.5,-55],[239,-57],[237.2,-60.2],[238.3,-80.9],[239.8,-82.9],[235.5,-86.1]],"kind":"park"},{"pts":[[227.3,-84.4],[228.9,-87.9],[227.8,-89.9],[226.1,-91.4],[224.1,-91.4],[222.1,-90.8],[219.6,-88.6],[218.5,-85.4],[216.4,-45.3],[220.3,-44.5],[227.7,-51.1],[227.2,-51.9],[223.2,-50.2],[221,-58.1],[222.8,-86.2],[227.3,-84.4]],"kind":"grass"},{"pts":[[163.9,-175],[164.1,-176.6],[158.4,-180],[155,-174.8],[161.4,-170.9],[163.9,-175]],"kind":"grass"},{"pts":[[157.6,-164.7],[151.2,-168.5],[150.5,-165.8],[151.9,-163.2],[154.7,-160.9],[156.2,-162.5],[157.6,-164.7]],"kind":"grass"},{"pts":[[81.1,-154.3],[80.8,-161.9],[92.6,-180.3],[86.8,-183.5],[77.5,-183.9],[70.4,-184.2],[66.9,-178.1],[67.5,-171.5],[74.6,-164.6],[77.3,-156.5],[79,-154.4],[81.1,-154.3]],"kind":"park"},{"pts":[[88.6,-100.7],[82.9,-98],[78.7,-90.1],[80.2,-83.7],[83.8,-78.1],[88.6,-74.7],[95,-70.8],[102.2,-67.7],[108.7,-67.9],[114.8,-70.1],[118.8,-76],[118.5,-83.5],[114.9,-89.7],[108.7,-94.2],[102,-98.4],[95.3,-100.8],[88.6,-100.7]],"kind":"playground"},{"pts":[[475.9,-66.4],[493.2,-67.1],[549.2,-44.1],[548.3,-40.7],[475.9,-66.4]],"kind":"grass"},{"pts":[[-99.9,-335.6],[-97.7,-335.1],[-95.5,-335.3],[-93.5,-336.1],[-91.9,-337.6],[-90.8,-339.5],[-90.4,-341.6],[-90.7,-343.8],[-91.6,-345.8],[-93.2,-347.3],[-95.2,-348.3],[-97.4,-348.6],[-99.6,-348.1],[-101.6,-346.9],[-103,-345.2],[-103.8,-343],[-103.8,-340.7],[-103.1,-338.5],[-101.7,-336.8],[-99.9,-335.6]],"kind":"grass"},{"pts":[[12.2,-266.1],[9.2,-261.2],[15.4,-257.4],[18.5,-262.4],[12.2,-266.1]],"kind":"grass"},{"pts":[[22.8,-260.1],[20,-255.2],[25.8,-251.7],[28.7,-256.4],[22.8,-260.1]],"kind":"grass"},{"pts":[[16.1,-248.4],[26,-242.5],[24.5,-240],[58,-219.7],[60.8,-224.1],[64,-222.1],[67.7,-228.3],[64.6,-230.1],[66.1,-232.5],[67.5,-233.9],[69.2,-232.1],[71.1,-225.3],[72,-220.6],[74.3,-216.5],[73.7,-211.8],[71.6,-208.1],[69.1,-207.1],[35.5,-226.5],[34.1,-229.4],[22.3,-236.8],[19.9,-236.2],[11.6,-240.8],[16.1,-248.4]],"kind":"grass"},{"pts":[[144.8,-135.1],[164.7,-123.5],[162.6,-119.1],[168.9,-115.5],[171.5,-119.6],[172.2,-118.9],[168.6,-112.7],[163.8,-109.6],[161.1,-115.2],[157.6,-121.5],[153.6,-126],[144.8,-135.1]],"kind":"park"},{"pts":[[463.1,159.7],[463,164.5],[467.3,163.1],[463.1,159.7]],"kind":"grass"},{"pts":[[465.2,174],[468.6,177.7],[470.5,172.9],[465.2,174]],"kind":"grass"},{"pts":[[442.3,-84.6],[432.1,-88.5],[419.8,-93.8],[415.8,-90.2],[398.4,-98.4],[387.8,-106.5],[383.2,-117.1],[380.2,-123.3],[378.8,-133.2],[379.9,-138.1],[384.6,-148.1],[395.5,-169.1],[403.7,-186.1],[417.2,-213.8],[421.1,-212.5],[409.2,-185.4],[407.4,-181.4],[403,-169.7],[401.5,-158.2],[402.9,-142],[406.8,-127.7],[413,-113.8],[422.4,-100.6],[434.4,-90.4],[442.3,-84.6]],"kind":"grass"},{"pts":[[262.8,87.1],[303.4,4.1],[326.3,-34.4],[350.6,-66.5],[357.3,-72.7],[362.8,-75.5],[367,-76.7],[371.2,-78.8],[377.9,-80.7],[383.1,-80.8],[388.5,-80.1],[396.8,-78.1],[414.4,-72.9],[434.3,-64.9],[542.2,-25.7],[547.5,-23.9],[562.7,-16.8],[568.9,-8.1],[571.1,3.8],[568.4,13.4],[555.4,30.9],[546.6,32.2],[541,28.7],[526,34.4],[523.3,39.5],[520,42.7],[526.7,56.1],[531.5,56.9],[535.5,59.5],[538.6,62.7],[540.7,67.2],[541.2,71.4],[517.5,123.1],[526.2,127.7],[516.8,146.8],[487.2,207.9],[454.8,191.6],[449.6,193.4],[446.5,197],[419.2,247.9],[406.5,260.2],[390.5,267.2],[375.2,267.8],[360.2,262.4],[347.2,259.9],[331.6,246.8],[324.3,243.6],[314.5,235.1],[300.4,231.3],[279.7,221.9],[249,207.6],[255.7,194.3],[246.9,188.2],[243.5,184],[241.6,178.8],[240.5,172],[238,166.4],[236,159.5],[235.7,152.6],[237.2,145.1],[242.1,131.3],[251.3,111],[262.8,87.1]],"kind":"retail","name":"Centro Commerciale Le Piazze"},{"pts":[[-54.4,-448.8],[-2.1,-556.6],[150.6,-512.2],[129.1,-463.9],[458.9,-339.5],[400.2,-216.1],[353.1,-214.8],[293.6,-240.9],[-54.4,-448.8]],"kind":"farmland"},{"pts":[[151.1,368],[261.8,430.9],[327.5,301.6],[214.5,249.1],[202.8,260.3],[151.1,368]],"kind":"commercial"},{"pts":[[-219.5,77.1],[-267.7,203.5],[-209.1,226.1],[-202.5,208],[-173.6,219.1],[-132.8,110.8],[-219.5,77.1]],"kind":"grass"},{"pts":[[-75.9,365.8],[-118.8,476],[-83.8,488.3],[-50.6,432.3],[-30.2,383.2],[-75.9,365.8]],"kind":"scrub"}]')},ta=3.2;function Nv(i){return i>2500?9:i>700?4*ta:i>400?3*ta:2*ta+1.2}const Uv=40,Ov=5,Fv=3.5,kv=12,tf=[11097660,10243896,11756863,9389618,10641482,12417620],ef=[9191728,8206891,10047546],Bv=12564136,zv=8224901,Ln={ground:7311182,grass:8101973,park:6195777,playground:11045468,retailLot:10132119,asphalt:4211530,paving:10120018,trunk:7031346,leaf:[5208631,6064703,4483888,6723152]};function nf(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function sf(i){let t=0;for(let e=0;e<i.length-1;e++)t+=i[e][0]*i[e+1][1]-i[e+1][0]*i[e][1];return Math.abs(t)/2}function Ul(i){let t=0,e=0;for(const n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function Hv(i,t,e,n,s,r,o){const a=s-e,c=r-n,l=a*a+c*c;if(l<1e-9)return o[0]=e,o[1]=n,o;let u=((i-e)*a+(t-n)*c)/l;return u=u<0?0:u>1?1:u,o[0]=e+a*u,o[1]=n+c*u,o}function Ol(i,t,e,n,s,r){const o=s-e,a=r-n,c=o*o+a*a;if(c<1e-9)return Math.hypot(i-e,t-n);let l=((i-e)*o+(t-n)*a)/c;return l=l<0?0:l>1?1:l,Math.hypot(i-(e+l*o),t-(n+l*a))}function Gv(i){let t=0;for(let e=0;e<i.length;e++)for(let n=e+1;n<i.length;n++){const s=Math.hypot(i[e][0]-i[n][0],i[e][1]-i[n][1]);s>t&&(t=s)}return t}function Vv(i,t,e){let n=1/0;for(let s=0;s<e.length-1;s++){const r=Ol(i,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]);r<n&&(n=r)}return n}function rf(i,t){const[e,n]=Ul(i);return i.map(([s,r])=>{const o=s-e,a=r-n,c=Math.hypot(o,a)||1;return[s+o/c*t,r+a/c*t]})}function of(i){const t=i<0?0:i>1?1:i;return t*t*(3-2*t)}function Bs(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const[o,a]=e[s],[c,l]=e[r];a>t!=l>t&&i<(c-o)*(t-a)/(l-a)+o&&(n=!n)}return n}function Fl(i){const t=new Vi;t.moveTo(i[0][0],-i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],-i[e][1]);return t.closePath(),t}function ea(i,t){const e=new zt(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Qt(s,3)),i}function Wv(i,t){const e=[i[0]];for(let n=0;n<i.length-1;n++){const[s,r]=i[n],[o,a]=i[n+1],c=Math.hypot(o-s,a-r),l=Math.max(1,Math.ceil(c/t));for(let u=1;u<=l;u++){const h=u/l;e.push([s+(o-s)*h,r+(a-r)*h])}}return e}function Xv(i,t,e,n){const s=[],r=t/2,o=Wv(i,4);for(let c=0;c<o.length-1;c++){const[l,u]=o[c],[h,d]=o[c+1],f=h-l,g=d-u,_=Math.hypot(f,g);if(_<.01)continue;const p=f/_,m=g/_,v=l-p*r,x=u-m*r,M=h+p*r,P=d+m*r,b=-m*r,T=p*r,I=[[v+b,x+T],[M+b,P+T],[M-b,P-T],[v-b,x-T]];for(const U of[0,1,2,0,2,3]){const[y,w]=I[U];s.push(y,n(y,w)+e,w)}}if(s.length===0)return null;const a=new Me;return a.setAttribute("position",new Qt(s,3)),a.computeVertexNormals(),a.setAttribute("uv",new Qt(new Float32Array(s.length/3*2),2)),a}function Cr(i,t){return new yr({...i,polygonOffset:!0,polygonOffsetFactor:-t,polygonOffsetUnits:-t*2})}function qv(i,t){const e=new vr(Fl(i));return e.rotateX(-Math.PI/2),e.translate(0,t,0),e}function Yv(){const e=document.createElement("canvas");e.width=128,e.height=102;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,128,102),n.strokeStyle="rgba(0, 0, 0, 0.10)",n.lineWidth=1;for(let r=6;r<102;r+=7)n.beginPath(),n.moveTo(0,r+.5),n.lineTo(128,r+.5),n.stroke();n.fillStyle="rgba(240, 244, 248, 0.85)",n.fillRect(26,20,76,46),n.fillStyle="rgba(28, 42, 58, 0.92)",n.fillRect(30,24,68,38),n.fillStyle="rgba(255, 255, 255, 0.18)",n.fillRect(30,24,68,12),n.fillStyle="rgba(226, 228, 226, 0.95)",n.fillRect(12,70,104,9),n.fillStyle="rgba(150, 158, 162, 0.75)",n.fillRect(12,79,104,3);const s=new ii(e);return s.wrapS=_n,s.wrapT=_n,s.colorSpace=ge,s.repeat.set(1/4,1/ta),s.anisotropy=4,s}function Kv(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,512,512);const n=nf(99);for(let r=0;r<900;r++){const o=n()*512,a=n()*512,c=8+n()*46,l=n()<.5,u=e.createRadialGradient(o,a,0,o,a,c),h=.05+n()*.1;u.addColorStop(0,l?`rgba(60, 80, 40, ${h})`:`rgba(220, 215, 170, ${h})`),u.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=u,e.beginPath(),e.arc(o,a,c,0,Math.PI*2),e.fill()}const s=new ii(t);return s.wrapS=_n,s.wrapT=_n,s.colorSpace=ge,s.repeat.set(24,24),s}function jv(i,t,e,n){const s=5.5*e,r=new Ee(.16*e,.24*e,s*.55,5);r.translate(i,s*.275,t);const o=new xr(1.55*e,0);o.scale(1,.85,1),o.translate(i,s*.62,t);const a=new xr(1.15*e,0);a.scale(1,.9,1),a.translate(i+(n()-.5)*e,s*.9,t+(n()-.5)*e);const c=Vn([o,a]),l=Ln.leaf[Math.floor(n()*Ln.leaf.length)];return{trunk:ea(r,Ln.trunk),leaf:ea(c,l)}}function $v(){const i=new pe,t=nf(28),e=In.radiusM*5,n=new et(new ir(e,e),Cr({color:Ln.ground,map:Kv()},0));n.rotation.x=-Math.PI/2,n.name="ground",i.add(n);const s=[];for(const k of In.roads)for(let at=0;at<k.pts.length-1;at++)s.push({x1:k.pts[at][0],z1:k.pts[at][1],x2:k.pts[at+1][0],z2:k.pts[at+1][1],clear:k.w/2+2.8});const r=[];function o(k,at){let _t=0;for(const O of r){const rt=Bs(k,at,O.pts)?0:Vv(k,at,O.pts);if(rt>=O.margin+O.skirt)continue;const tt=rt<=O.margin?1:1-(rt-O.margin)/O.skirt,Mt=O.height*of(tt);Mt>_t&&(_t=Mt)}return _t}function a(k){const at=[],O=rf(k.pts,k.margin),K=new vr(Fl(O)).toNonIndexed();K.rotateX(-Math.PI/2),K.translate(0,k.height,0),at.push(K);let rt=O,tt=k.height;for(let Mt=1;Mt<=3;Mt++){const gt=Mt/3,Et=rf(k.pts,k.margin+k.skirt*gt),Tt=k.height*of(1-gt),$=[];for(let nt=0;nt<rt.length-1;nt++){const ut=rt[nt],ot=rt[nt+1],lt=Et[nt+1],wt=Et[nt];$.push(ut[0],tt,ut[1],wt[0],Tt,wt[1],lt[0],Tt,lt[1]),$.push(ut[0],tt,ut[1],lt[0],Tt,lt[1],ot[0],tt,ot[1])}const A=new Me;A.setAttribute("position",new Qt($,3)),A.computeVertexNormals(),A.setAttribute("uv",new Qt(new Float32Array($.length/3*2),2)),at.push(A),rt=Et,tt=Tt}return at}const c=In.areas.filter(k=>k.kind==="retail"||k.kind==="commercial"||k.kind==="industrial");for(const k of In.buildings){if(k.pts.length<4)continue;const at=sf(k.pts),[_t,O]=Ul(k.pts);at>2500||c.some(rt=>Bs(_t,O,rt.pts))||Gv(k.pts)<Uv||r.push({pts:k.pts,height:Ov,margin:Fv,skirt:kv})}const l=[];for(const k of r)l.push(...a(k));if(l.length){const k=new et(Vn(l),Cr({color:Ln.grass},1));k.name="hills",i.add(k)}const u=new Map;for(const k of In.areas){if(k.pts.length<4)continue;const at=k.kind==="park"?Ln.park:k.kind==="playground"?Ln.playground:k.kind==="retail"||k.kind==="construction"?Ln.retailLot:k.kind==="grass"?Ln.grass:null;at!=null&&(u.has(at)||u.set(at,[]),u.get(at).push(qv(k.pts,.02+u.get(at).length*.001)))}for(const[k,at]of u){const _t=new et(Vn(at),Cr({color:k},2));_t.name="areas",i.add(_t)}const h=[],d=[];for(const k of In.roads){const at=k.kind==="footway"||k.kind==="path"||k.kind==="pedestrian"||k.kind==="cycleway",_t=at?.06:.05,O=Xv(k.pts,k.w,_t,o);O&&(at?d:h).push(O)}if(h.length){const k=new et(Vn(h),Cr({color:Ln.asphalt},3));k.name="roads",i.add(k)}if(d.length){const k=new et(Vn(d),Cr({color:Ln.paving},4));k.name="paths",i.add(k)}const f=[],g=[],_=[];let p=null,m=0,v=0;for(const k of In.buildings){if(k.pts.length<4)continue;const at=sf(k.pts),[_t,O]=Ul(k.pts),K=at>2500||c.some(A=>Bs(_t,O,A.pts)),rt=k.h&&k.h!==6.5?k.h:K?8.5:Nv(at),tt=Fl(k.pts),Mt=o(_t,O),gt=new Xi(tt,{depth:rt,bevelEnabled:!1});gt.rotateX(-Math.PI/2),Mt>0&&gt.translate(0,Mt-.4,0);const Et=K?Bv:tf[Math.floor(t()*tf.length)];f.push(ea(gt,Et));const Tt=new vr(tt);Tt.rotateX(-Math.PI/2),Tt.translate(0,Mt+rt+.06,0),g.push(ea(Tt,K?zv:ef[Math.floor(t()*ef.length)])),_.push(k.pts);const $=Math.hypot(_t,O);(p==null||$<p.d)&&(p={d:$,x:_t,z:O,base:Mt},m=at,v=rt)}const x=new yr({map:Yv(),vertexColors:!0});i.add(new et(Vn(f),x)),i.add(new et(Vn(g),new yr({vertexColors:!0})));const M=[];for(const k of _)for(let at=0;at<k.length-1;at++)M.push({x1:k[at][0],z1:k[at][1],x2:k[at+1][0],z2:k[at+1][1],clear:2.2});function P(k,at,_t){for(const O of k)if(Ol(at,_t,O.x1,O.z1,O.x2,O.z2)<O.clear)return!1;return!0}const b=[],T=[],I=[];for(const k of In.roads){if(k.kind==="service"||k.kind==="pedestrian")continue;const at=k.w/2+6.5;for(let _t=0;_t<k.pts.length-1;_t++){const[O,K]=k.pts[_t],[rt,tt]=k.pts[_t+1],Mt=Math.hypot(rt-O,tt-K),gt=(rt-O)/Mt,Et=(tt-K)/Mt;for(let Tt=8;Tt<Mt-6;Tt+=17){if(t()<.4)continue;const $=t()<.5?1:-1,A=O+gt*Tt-Et*at*$,nt=K+Et*Tt+gt*at*$;if(_.some(wt=>Bs(A,nt,wt))||!P(s,A,nt)||!P(M,A,nt))continue;const{trunk:ut,leaf:ot}=jv(A,nt,.75+t()*.7,t),lt=o(A,nt);lt>0&&(ut.translate(0,lt-.3,0),ot.translate(0,lt-.3,0)),b.push(ut),T.push(ot),I.push([A,nt])}}}b.length&&(i.add(new et(Vn(b),new yr({vertexColors:!0}))),i.add(new et(Vn(T),new yr({vertexColors:!0,flatShading:!0}))));const U=new pe;U.position.set(p.x,p.base,p.z);const y=Math.sqrt(m)*.75,w=new et(new dl(y,y+1.6,48),new Ge({color:4828159,transparent:!0,opacity:.5,side:De,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.y=.3,U.add(w);const H=new et(new Ee(2.2,3.4,70,12,1,!0),new Ge({color:8377087,transparent:!0,opacity:.13,side:De,depthWrite:!1,blending:Un}));H.position.y=v+35,U.add(H);const L=new et(new Vo(2.4),new Ge({color:10477823,transparent:!0,opacity:.85}));L.position.y=v+14,U.add(L),i.add(U);const z=new C(p.x+95,45+o(p.x+95,p.z+18),p.z+18),J=.42,G=_.map(k=>{let at=1/0,_t=1/0,O=-1/0,K=-1/0;for(const[rt,tt]of k)rt<at&&(at=rt),rt>O&&(O=rt),tt<_t&&(_t=tt),tt>K&&(K=tt);return[at,_t,O,K]}),q=[0,0];function X(k,at,_t,O){let K=k,rt=at;for(let tt=0;tt<_.length;tt++){const[Mt,gt,Et,Tt]=G[tt];if(K<Mt-_t||K>Et+_t||rt<gt-_t||rt>Tt+_t)continue;const $=_[tt],A=Bs(K,rt,$);let nt=0,ut=0,ot=1/0;for(let R=0,S=$.length-1;R<$.length;S=R++){Hv(K,rt,$[S][0],$[S][1],$[R][0],$[R][1],q);const B=(K-q[0])**2+(rt-q[1])**2;B<ot&&(ot=B,nt=q[0],ut=q[1])}const lt=Math.sqrt(ot);if(!A&&lt>=_t)continue;let wt=K-nt,vt=rt-ut;lt<1e-6?(wt=1,vt=0):(wt/=lt,vt/=lt),A&&(wt=-wt,vt=-vt),K=nt+wt*_t,rt=ut+vt*_t}for(const[tt,Mt]of I){const gt=K-tt,Et=rt-Mt,Tt=_t+J,$=gt*gt+Et*Et;if($>=Tt*Tt)continue;const A=Math.sqrt($);if(A<1e-6){K=tt+Tt;continue}K=tt+gt/A*Tt,rt=Mt+Et/A*Tt}return O[0]=K,O[1]=rt,O}function bt(k,at,_t){for(let O=0;O<_.length;O++){const[K,rt,tt,Mt]=G[O];if(k<K-_t||k>tt+_t||at<rt-_t||at>Mt+_t)continue;const gt=_[O];if(Bs(k,at,gt))return!1;for(let Et=0,Tt=gt.length-1;Et<gt.length;Tt=Et++)if(Ol(k,at,gt[Tt][0],gt[Tt][1],gt[Et][0],gt[Et][1])<_t)return!1}for(const[O,K]of I)if(Math.hypot(k-O,at-K)<_t+J)return!1;return!0}function St(k){L.rotation.y+=k*1.1,L.position.y=v+14+Math.sin(performance.now()*.0016)*1.4}return{group:i,update:St,trees:I,groundHeightAt:o,resolveWalk:X,isClear:bt,home:new C(p.x,p.base+v,p.z),spawn:z,heading:-Math.PI/2,info:{name:In.name,town:"Castel Maggiore",buildings:In.buildings.length,hills:r.length,homeStoreyHeight:v,homeGround:p.base,attribution:In.attribution}}}const de=new C(0,-2e4,0),Jv=22,Zv=620,af=1,Qv=4,ty=1,cf=10340847,ey=260,ny=1250;function iy(i,t,e=()=>{}){const n=$v();n.group.position.copy(de),n.group.visible=!1,i.add(n.group);const s=1.6,r=.9,o=new qi(16774112,0);o.position.set(-260,420,180).add(de),o.target.position.copy(de),i.add(o.target),i.add(o);const a=new pl(12377343,6978386,0);a.position.copy(de),i.add(a);const c=document.createElement("div");c.id="landing-banner",c.hidden=!0,c.innerHTML=`
    <div class="landing-banner__town"></div>
    <div class="landing-banner__street"></div>
    <div class="landing-banner__hint"></div>
  `,document.body.appendChild(c),c.querySelector(".landing-banner__town").textContent=Yt.surface.town,c.querySelector(".landing-banner__street").textContent=Yt.surface.street,c.querySelector(".landing-banner__hint").textContent=Yt.surface.leaveHint;const l=new He;let u=!1,h=!1,d=0;const f=new C,g=i.background,_=i.fog.color.clone();function p(b){return b.mesh.position.distanceTo(Tr)<Ar+Jv}function m(b){return b.mesh.position.y-de.y}const v=[[0,0],[1.4,0],[-1.25,0],[0,.9],[0,-.9]];function x(b){const T=l.setFromQuaternion(b.mesh.quaternion,"YXZ"),I=Math.sin(T.y),U=Math.cos(T.y),y=b.mesh.scale.x;let w=-1/0;for(const[H,L]of v){const z=b.mesh.position.x+(I*H+U*L)*y,J=b.mesh.position.z+(U*H-I*L)*y,G=n.groundHeightAt(z-de.x,J-de.z);G>w&&(w=G)}return w}function M(b){if(!u){u=!0,f.copy(b.mesh.position).sub(Tr).setLength(Ar+60).add(Tr),n.group.visible=!0,o.intensity=s,a.intensity=r,b.mesh.scale.setScalar(Qv);for(const T of t)T.visible=!1;i.background=new zt(cf),i.fog.color.setHex(cf),i.fog.near=ey,i.fog.far=ny,b.mesh.position.copy(n.spawn).add(de),b.mesh.quaternion.setFromEuler(new He(0,n.heading,0,"YXZ")),b.velocity.set(0,0,0),e(),c.hidden=!1,c.classList.remove("landing-banner--fading"),d=6}}function P(b){if(!u)return;u=!1,h=!1,b.mesh.scale.setScalar(1),n.group.visible=!1,o.intensity=0,a.intensity=0;for(const I of t)I.visible=!0;i.background=g,i.fog.color.copy(_),i.fog.near=yd,i.fog.far=Md,b.mesh.position.copy(f);const T=f.clone().sub(Tr).normalize();b.mesh.quaternion.setFromUnitVectors(new C(0,0,1),T),b.velocity.set(0,0,0),e(),c.hidden=!0}return{get active(){return u},get parked(){return h},town:n,enter:M,exit:P,altitude:m,hullGroundY(b){return de.y+x(b)},park(){h=!0},unpark(){h=!1},prewarm(b,T){n.group.visible=!0,o.intensity=s,a.intensity=r,b.compile(i,T);const I=new Fe(60,T.aspect,.1,5e3);I.position.copy(de).add(new C(0,140,300)),I.lookAt(de),b.render(i,I),n.group.visible=!1,o.intensity=0,a.intensity=0,b.render(i,T)},update(b,T){if(!u){p(b)&&M(b);return}if(n.update(T),h){d>0&&(d-=T,d<=0&&c.classList.add("landing-banner--fading"));return}const I=m(b),U=x(b);I<U+af&&(b.mesh.position.y=de.y+U+af,b.velocity.y<0&&(b.velocity.y=0)),I>Zv&&P(b),d>0&&(d-=T,d<=0&&c.classList.add("landing-banner--fading"))},reset(b){P(b)}}}const sy=38,ry=19,oy=45,lf=1.5,uf=.25,ay=.5,na=1;function cy(i){let t=na,e=0;const n=[];return{get scale(){return t},sample(s){const r=s*1e3;if(r>250||(n.push(r),n.length<oy))return;const o=[...n].sort((l,u)=>l-u),a=o[Math.floor(o.length/2)];if(n.length=0,e>0)return;let c=t;a>sy?c=Math.max(ay,t-uf):a<ry&&(c=Math.min(na,t+uf)),c!==t&&(t=c,e=lf,i(t))},update(s){e>0&&(e-=s)},reset(){t!==na&&(t=na,n.length=0,e=lf,i(t))}}}class hf extends bo{constructor(){super();const t=new cn;t.deleteAttribute("uv");const e=new ne({side:qe}),n=new ne,s=new xl(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new et(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new et(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new et(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new et(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new et(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new et(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new et(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new et(t,zs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new et(t,zs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new et(t,zs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new et(t,zs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const p=new et(t,zs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new et(t,zs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function zs(i){const t=new Ge;return t.color.setScalar(i),t}const Yi=1.8,ly=4146511,uy=5857646,hy=2303790,Pr=5504925,df=8257456,dy=4835583,fy=14198404,py=3810328;function my(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,256,256),e.lineCap="square",e.strokeStyle="#5effa6";for(let s=0;s<14;s++){let r=Math.random()*256,o=Math.random()*256;e.lineWidth=Math.random()<.3?2:1,e.beginPath(),e.moveTo(r,o);const a=2+Math.floor(Math.random()*4);for(let c=0;c<a;c++)c%2===0?o+=(Math.random()-.35)*90:r+=(Math.random()-.5)*70,e.lineTo(r,o);e.stroke(),e.fillStyle="#9dffcb",e.fillRect(r-2,o-2,4,4),e.fillStyle="#5effa6"}const n=new ii(t);return n.wrapS=_n,n.wrapT=_n,n.colorSpace=ge,n}function gy(i,t,e){const n=new Vi,s=-i/2,r=-t/2,o=Math.max(.001,Math.min(e,i/2-.001,t/2-.001));return n.moveTo(s+o,r),n.lineTo(s+i-o,r),n.absarc(s+i-o,r+o,o,-Math.PI/2,0),n.lineTo(s+i,r+t-o),n.absarc(s+i-o,r+t-o,o,0,Math.PI/2),n.lineTo(s+o,r+t),n.absarc(s+o,r+t-o,o,Math.PI/2,Math.PI),n.lineTo(s,r+o),n.absarc(s+o,r+o,o,Math.PI,Math.PI*1.5),n}function pn(i,t,e,n,s=0,r=0,o=0,a=.02){const c=Math.min(.012,e*.35),l=new Xi(gy(i,t,a),{depth:Math.max(.001,e-c*2),bevelEnabled:!0,bevelThickness:c,bevelSize:c,bevelSegments:2,curveSegments:4});l.center();const u=new et(l,n);return u.position.set(s,r,o),u}function Ir(i,t,e,n,s=16){const r=new pe;r.add(new et(new Ee(i,t,e,s),n));const o=new et(new ae(i,s,8),n);o.position.y=e/2,o.scale.y=.7,r.add(o);const a=new et(new ae(t,s,8),n);return a.position.y=-e/2,a.scale.y=.7,r.add(a),r}function ia(i,t,e=0){const n=new et(new ae(i,16,12),t);return n.position.y=e,n}function _y(){const i=[[.001,0],[.15,0],[.168,.04],[.163,.12],[.178,.2],[.2,.3],[.212,.38],[.208,.46],[.17,.52],[.09,.55],[.001,.555]].map(([e,n])=>new ht(e,n)),t=new ko(i,28);return t.scale(1.06,1,.84),t}function ff({suitLight:i=!0,environment:t=null}={}){const e=new pe,n=new pe;e.add(n);const s=my(),r=new ne({color:ly,metalness:.62,roughness:.38,emissive:Pr,emissiveMap:s,emissiveIntensity:.34}),o=new ne({color:uy,metalness:.7,roughness:.3,emissive:Pr,emissiveMap:s,emissiveIntensity:.22}),a=new ne({color:hy,metalness:.25,roughness:.72,emissive:Pr,emissiveMap:s,emissiveIntensity:.3}),c=new ne({color:fy,metalness:0,roughness:.72}),l=new ne({color:py,metalness:0,roughness:.9}),u=new ne({color:df,emissive:df,emissiveIntensity:1.6,transparent:!0,opacity:.58,metalness:.4,roughness:.08}),h=new Ge({color:dy}),d=new ne({color:863004,emissive:Pr,emissiveIntensity:1.15,metalness:.2,roughness:.35});if(t)for(const ct of[r,o,a,c,l,u,d])ct.envMap=t,ct.envMapIntensity=.55;const f=new et(_y(),a);f.position.y=.97,n.add(f);const g=new et(new ae(.19,28,18,Math.PI*.22,Math.PI*.56,Math.PI*.16,Math.PI*.5),r);g.scale.set(1.12,1.16,.92),g.position.set(0,1.33,.006),n.add(g);const _=pn(.028,.19,.03,o,0,1.35,.155,.012);n.add(_);const p=new et(new si(.125,.026,10,24,Math.PI*1.15),r);p.rotation.set(Math.PI/2,0,Math.PI*.92),p.position.set(0,1.465,.01),p.scale.z=.8,n.add(p);const m=pn(.25,.3,.05,r,0,1.3,-.11,.07);m.rotation.x=-.06,n.add(m);const v=new et(new si(.153,.034,12,32),o);v.rotation.x=Math.PI/2,v.position.y=.99,v.scale.set(1.06,.86,1),n.add(v);const x=new et(new ae(.042,16,12),h);x.scale.set(1.5,1,.45),x.position.set(0,.99,.132),n.add(x);const M=new et(new ae(.152,20,14),r);M.scale.set(1.04,.58,.82),M.position.y=.905,n.add(M);const P=Ir(.052,.058,.08,a,12);P.position.y=1.55,n.add(P);const b=new et(new ae(.105,24,20),c);b.scale.set(.95,1.14,1),b.position.y=1.66,n.add(b);const T=new et(new ae(.07,20,16),c);T.scale.set(.94,.82,1.04),T.position.set(0,1.6,.014),n.add(T);const I=new et(new vi(.018,.042,8),c);I.rotation.x=Math.PI*.52,I.position.set(0,1.646,.095),n.add(I);for(const ct of[-1,1]){const xt=new et(new ae(.022,10,8),c);xt.scale.set(.5,1,.8),xt.position.set(ct*.096,1.655,.005),n.add(xt)}const U=[],y=new qt,w=new Ke,H=new C,L=new C,z=new C,J=new C(0,1,0),G=new C(0,0,1);function q(ct,xt,kt,Vt){ct.applyMatrix4(y.compose(xt,kt,Vt)),U.push(ct)}const X=[[0,1.732,-.012,.088],[-.06,1.722,.028,.064],[.06,1.726,.024,.066],[0,1.71,-.07,.074],[-.082,1.7,-.024,.06],[.084,1.703,-.02,.058],[.026,1.757,-.005,.048],[-.032,1.752,-.036,.046],[-.056,1.692,.056,.044],[.058,1.694,.053,.042]];for(const[ct,[xt,kt,Vt,$t]]of X.entries())q(new ae($t,10,8),H.set(xt,kt,Vt),w.setFromEuler(new He(ct%3*.18,ct*.7,(ct%5-2)*.12)),L.set(1.12,.72,1.1));const bt=[[-.05,1.736,.055,.048,1.5,.35,-.6,.72],[-.008,1.744,.062,.05,1.55,.3,-.45,.84],[.038,1.74,.056,.046,1.45,.55,-.5,.67],[.074,1.728,.03,.04,1.35,.85,-.35,.4],[-.03,1.764,.03,.048,1.5,-.25,.25,.94],[.028,1.768,.012,.05,1.6,.42,.62,.66],[-.02,1.766,-.03,.048,1.5,-.3,.6,-.74],[.042,1.756,-.036,.044,1.45,.5,.15,-.85],[-.084,1.72,.014,.044,1.5,-.5,-.1,.86],[-.086,1.712,-.038,.042,1.45,-.45,-.05,-.89],[.086,1.722,.01,.046,1.5,.5,-.05,.86],[.088,1.714,-.036,.042,1.45,.45,-.1,-.89],[-.032,1.72,-.078,.046,1.55,-.2,.05,-.98],[.03,1.724,-.08,.048,1.6,.2,.15,-.97],[0,1.7,-.082,.042,1.4,0,-.35,-.94]];for(const[ct,[xt,kt,Vt,$t,me,re,Re,Ce]]of bt.entries()){z.set(re,Re,Ce).normalize(),q(new ae($t,10,8),H.set(xt,kt,Vt),w.setFromUnitVectors(G,z),L.set(.62,.44,me));const on=$t*me*.66,Xe=ct%3===0?.052:ct%3===1?.04:.032,$e=new vi($t*.62,Xe,3);$e.translate(0,Xe*.42,0),q($e,H.set(xt,kt,Vt).addScaledVector(z,on),w.setFromUnitVectors(J,z),L.set(.85,1,.5))}const St=[[-.07,1.75,0,.042,-.5,.75,.44],[.012,1.782,-.01,.046,.15,.95,-.28],[.066,1.756,.02,.038,.7,.66,.28],[-.05,1.73,.072,.034,-.1,.3,.95],[.05,1.736,-.07,.04,.35,.45,-.82],[-.088,1.73,-.01,.036,-.85,.42,.3],[.03,1.706,-.094,.032,.2,-.1,-.97],[-.026,1.776,.03,.04,-.2,.85,.49]];for(const[ct,xt,kt,Vt,$t,me,re]of St){z.set($t,me,re).normalize();const Re=new vi(.014,Vt,3);Re.translate(0,Vt*.4,0),q(Re,H.set(ct,xt,kt),w.setFromUnitVectors(J,z),L.set(.9,1,.55))}const k=1.706,at=Vn(U);at.translate(0,-k,0);const _t=new et(at,l);_t.position.y=k,n.add(_t);const O=new et(new Ee(.109,.109,.04,28,1,!0,-Math.PI*.28,Math.PI*.56),u);O.position.set(0,1.668,.004),O.scale.set(1,1,.94),n.add(O);const K=new et(new Ee(.104,.104,.052,28,1,!0,-Math.PI*.29,Math.PI*.58),o);K.position.set(0,1.668,.004),K.scale.set(1,1,.94),n.add(K);for(const ct of[-1,1]){const xt=new et(new Ee(.005,.005,.085,8),o);xt.rotation.set(Math.PI/2,0,0),xt.position.set(ct*.098,1.668,-.028),n.add(xt)}for(const ct of[-1,1]){const xt=new et(new ae(.036,16,12),o);xt.scale.set(.55,1,.9),xt.position.set(ct*.107,1.658,0),n.add(xt)}const rt=new et(new Ee(.005,.005,.11,8),o);rt.position.set(-.078,1.618,.062),rt.rotation.set(-.5,0,.7),n.add(rt);const tt=new et(new ae(.012,10,8),h);tt.position.set(-.048,1.588,.097),n.add(tt);const Mt=[];for(const ct of[-1,1]){const xt=new pe;xt.position.set(ct*.215,1.44,0),n.add(xt),xt.add(ia(.072,a));const kt=new et(new ae(.108,20,14,0,Math.PI*2,0,Math.PI*.58),r);kt.scale.set(1.04,1.05,1.08),kt.position.y=.012,kt.rotation.z=ct*.22,xt.add(kt);const Vt=new et(new ae(.088,18,10,0,Math.PI*2,Math.PI*.34,Math.PI*.2),o);Vt.position.y=-.032,Vt.rotation.z=ct*.22,xt.add(Vt);const $t=Ir(.058,.05,.24,a);$t.position.y=-.17,xt.add($t);const me=new et(new si(.055,.015,10,20),o);me.rotation.x=Math.PI/2,me.position.y=-.12,xt.add(me),xt.add(ia(.052,r,-.3));const re=new pe;re.position.y=-.3,xt.add(re),Mt.push({shoulder:xt,forearm:re,side:ct});const Re=Ir(.052,.045,.22,a);Re.position.y=-.12,re.add(Re);const Ce=new et(new Ee(.062,.05,.17,16),r);Ce.position.y=-.14,Ce.scale.z=.92,re.add(Ce);const on=pn(.1,.055,.09,o,0,-.052,.006,.026);re.add(on);const Xe=new pe;Xe.position.set(0,-.28,.004),Xe.rotation.y=-ct*1.15,re.add(Xe);const $e=pn(.056,.078,.032,a,0,.004,0,.018);$e.rotation.x=.06,Xe.add($e);const Pe=new et(new pr(.011,.045,3,8),a);Pe.rotation.z=Math.PI/2,Pe.position.set(0,-.032,.003),Xe.add(Pe);const an=[{len:.044,r:.0078,curl:.3,splay:.05},{len:.047,r:.008,curl:.36,splay:.02},{len:.043,r:.0075,curl:.44,splay:-.02},{len:.035,r:.0068,curl:.52,splay:-.06}];for(const[N,V]of an.entries()){const W=new et(new pr(V.r,V.len,3,8),a),F=V.len/2+.006;W.position.set((N-1.5)*.0165*ct,-.037-Math.cos(V.curl)*F,.003+Math.sin(V.curl)*F),W.rotation.set(V.curl,0,V.splay*ct),Xe.add(W)}const un=new et(new pr(.0092,.032,3,8),a);un.position.set(ct*.028,-.016,.014),un.rotation.set(.5,0,-ct*.7),Xe.add(un);const E=pn(.034,.052,.008,d,ct*.055,-.145,.004,.008);E.rotation.y=ct*Math.PI/2,re.add(E),xt.rotation.z=ct*.11,xt.rotation.x=.04}const gt=[];for(const ct of[-1,1]){const xt=new pe;xt.position.set(ct*.098,.8,0),n.add(xt),xt.add(ia(.082,a));const kt=Ir(.085,.07,.34,a);kt.position.y=-.2,xt.add(kt);const Vt=pn(.125,.25,.05,r,0,-.19,.045,.05);if(Vt.rotation.x=-.05,xt.add(Vt),ct>0){const un=pn(.052,.115,.062,r,ct*.086,-.235,.004,.016);un.rotation.set(.12,ct*.3,0),xt.add(un);const E=pn(.06,.022,.07,o,ct*.086,-.19,.004,.008);E.rotation.set(0,ct*.3,0),xt.add(E);const N=new pe;N.position.set(ct*.088,-.16,.006),N.rotation.set(.18,ct*.3,ct*.12),xt.add(N);const V=pn(.026,.1,.036,r,0,-.03,0,.006);N.add(V);const W=pn(.024,.062,.032,a,0,.034,-.019,.008);W.rotation.x=-.32,N.add(W);const F=new et(new si(.014,.004,6,12,Math.PI),r);F.rotation.set(0,Math.PI/2,-.4),F.position.set(0,.006,.004),N.add(F);const mt=new et(new cn(.008,.006,.004),d);mt.position.set(0,.014,.016),N.add(mt)}else for(const[un,E]of[-.185,-.245].entries()){const N=pn(.042,.052,.05,o,ct*.086,E,.004,.01);N.rotation.y=ct*.32,xt.add(N);const V=pn(.046,.01,.054,r,ct*.086,E+.03,.004,.005);V.rotation.y=ct*.32,xt.add(V)}xt.add(ia(.068,a,-.4));const $t=new et(new ae(.075,18,12,0,Math.PI*2,0,Math.PI*.55),r);$t.rotation.x=Math.PI*.42,$t.position.set(0,-.405,.028),xt.add($t);const me=new pe;me.position.y=-.4,xt.add(me);const re=new pe;re.position.y=-.3,me.add(re),gt.push({hip:xt,shin:me,ankle:re,side:ct});const Re=Ir(.068,.055,.32,a);Re.position.y=-.18,me.add(Re);const Ce=new et(new Ee(.072,.06,.27,16,1,!0,-1.1,2.2),r);Ce.position.set(0,-.175,.008),Ce.scale.z=1.1,me.add(Ce);const on=new et(new ae(.075,18,14),r);on.scale.set(.95,.72,1.5),on.position.set(0,-.035,.03),re.add(on);const Xe=pn(.105,.07,.11,r,0,-.012,.072,.03);Xe.rotation.x=.22,re.add(Xe);const $e=new et(new ae(.055,16,12),o);$e.scale.set(1,.62,1.15),$e.position.set(0,-.062,.132),re.add($e);const Pe=new et(new ae(.05,14,10),o);Pe.scale.set(1,.7,.9),Pe.position.set(0,-.057,-.045),re.add(Pe);const an=new et(new si(.042,.011,8,18),h);an.rotation.x=Math.PI/2,an.position.set(0,-.086,.025),re.add(an)}let Et=null;i&&(Et=new xl(Pr,.45,2.2,2),Et.position.set(0,1.2,.12),n.add(Et));const Tt=1.02,$=1.53,A=new pe;A.position.y=Tt;const nt=new pe;nt.position.y=$-Tt;const ut=new Set([M,v,x,...gt.map(ct=>ct.hip)]);Et&&ut.add(Et);for(const ct of[...n.children])ut.has(ct)||(ct.position.y-=Tt,A.add(ct));for(const ct of[...A.children])ct.position.y+Tt>=$&&(ct.position.y-=$-Tt,nt.add(ct));A.add(nt),n.add(A);const ot=f.position.y,lt=nt.position.y;let wt=0,vt="idle",R=0,S=0,B=0;const Z=.04,st=.05,Q=.04;function Nt(){const ct=Math.sin(wt*1.6);f.position.y=ot+ct*.005,f.scale.x=1+ct*.006,n.position.set(0,0,0),n.rotation.z=0,A.rotation.set(-ct*.006,0,0),nt.rotation.set(ct*.006,0,0),nt.position.y=lt;for(const xt of gt)xt.hip.rotation.x=0,xt.hip.rotation.y=xt.side*.07,xt.hip.position.z=0,xt.shin.rotation.x=0,xt.ankle.rotation.x=0;for(const[xt,kt]of Mt.entries())kt.shoulder.rotation.x=Z+Math.sin(wt*1.6+xt)*.012,kt.shoulder.rotation.z=kt.side*.11,kt.forearm.rotation.x=0}const yt=[[0,28],[12,22],[30,6],[50,-12],[62,-8],[75,16],[88,28],[100,28]],Lt=[[0,4],[12,16],[30,6],[45,14],[60,40],[73,60],[87,26],[100,4]],Jt=[[0,0],[8,-8],[30,5],[45,10],[58,-20],[68,-4],[80,2],[100,0]],dt=[[0,42],[10,28],[28,2],[42,-20],[52,-12],[68,24],[85,48],[100,42]],j=[[0,22],[12,40],[28,26],[42,34],[55,74],[70,112],[86,52],[100,22]],ft=[[0,-6],[8,-14],[26,6],[40,14],[50,-26],[64,-10],[82,-4],[100,-6]],Rt=2.8,pt=5.4,Gt=1.5,Ht=2.7;function ie(ct){return ct<0?0:ct>1?1:ct}function D(ct,xt,kt){const Vt=Ct(ct,kt);return B<=.001?Vt:Vt+(Ct(xt,kt)-Vt)*B}function Ct(ct,xt){const kt=(xt%1+1)%1*100;for(let Vt=1;Vt<ct.length;Vt++){const[$t,me]=ct[Vt-1],[re,Re]=ct[Vt];if(kt<=re){const Ce=(kt-$t)/(re-$t);return me+(Re-me)*(Ce*Ce*(3-2*Ce))}}return ct[ct.length-1][1]}const Y=Math.PI/180,it=.8,Pt=.4,It=.3,Zt=[[-.045,-.107],[.132,-.096]];function Se(){let ct=1/0;for(const xt of gt){const kt=xt.hip.rotation.x,Vt=kt+xt.shin.rotation.x,$t=Vt+xt.ankle.rotation.x,me=it-Pt*Math.cos(kt)-It*Math.cos(Vt);for(const[re,Re]of Zt){const Ce=me+Re*Math.cos($t)-re*Math.sin($t);Ce<ct&&(ct=Ce)}}return ct}function ze(ct){const xt=Math.max(R,.4);B+=(ie((xt-Rt)/(pt-Rt))-B)*(1-Math.pow(2,-ct/.18));const kt=Gt+(Ht-Gt)*B;S+=xt/kt*Math.PI*2*ct;const Vt=S/(Math.PI*2),$t=Math.min(1.35,.55+xt/4);for(const[$e,Pe]of gt.entries()){const an=Vt+$e*.5,un=D(yt,dt,an)*Y*$t,E=D(Lt,j,an)*Y*$t,N=D(Jt,ft,an)*Y*$t;Pe.hip.rotation.x=-un,Pe.hip.rotation.y=Pe.side*.09,Pe.shin.rotation.x=E,Pe.ankle.rotation.x=-N,Pe.hip.position.z=Math.sin(an%1*Math.PI*2)*.022*$t}const me=Vt-st;for(const[$e,Pe]of Mt.entries()){const an=me+$e*.5,un=D(yt,dt,an)*Y*$t*(.5+B*.3);Pe.shoulder.rotation.x=Z+un+Math.sin(wt*.71+$e)*.012,Pe.shoulder.rotation.z=Pe.side*(.11-Math.max(0,-un)*.28);const E=D(yt,dt,an-Q)*Y*$t*.5;Pe.forearm.rotation.x=-(.22+B*.85+Math.max(0,-E)*1.3)}const re=Se(),Re=Math.max(0,Math.sin(S*2))*.055*B;n.position.y=-re+Re,n.position.x=Math.sin(S)*.022*$t,n.rotation.z=-Math.sin(S)*.045*$t;const Ce=Math.sin(me%1*Math.PI*2);A.rotation.y=Ce*.13*$t,A.rotation.z=-n.rotation.z*.55,A.rotation.x=-(.06+B*.28)-(.5-.5*Math.cos(S*2))*.02;const on=Math.sin(wt*2.3);f.position.y=ot+on*.004,f.scale.x=1+on*.005;const Xe=Math.sin(wt*.83)*.035+Math.sin(wt*.37)*.02;nt.rotation.y=-A.rotation.y*.75+Xe,nt.rotation.x=-A.rotation.x*.8+Math.sin(wt*.61)*.015,nt.rotation.z=-A.rotation.z*.6,nt.position.y=lt+re*.35}function ee(ct){S+=ct*4.2;for(const[xt,kt]of gt.entries()){const Vt=S+xt*Math.PI;kt.hip.rotation.x=-.5-Math.sin(Vt)*.4,kt.hip.rotation.y=0,kt.hip.position.z=0,kt.shin.rotation.x=.95+Math.sin(Vt)*.45,kt.ankle.rotation.x=-.25}for(const[xt,kt]of Mt.entries()){const Vt=S+xt*Math.PI+Math.PI;kt.shoulder.rotation.x=-2.45+Math.sin(Vt)*.28,kt.shoulder.rotation.z=kt.side*.16,kt.forearm.rotation.x=-(.5-Math.max(0,Math.sin(Vt))*.3)}n.position.set(0,0,0),n.rotation.z=0,A.rotation.set(-.12,0,0),nt.rotation.set(.2,0,0),nt.position.y=lt,f.position.y=ot}function We(ct){wt+=ct;const xt=.85+.25*Math.sin(wt*2.1);r.emissiveIntensity=.34*xt,o.emissiveIntensity=.22*xt,a.emissiveIntensity=.3*xt,Et&&(Et.intensity=.45*xt),vt==="walk"?ze(ct):vt==="climb"?ee(ct):Nt()}return{group:e,update:We,height:Yi,setGait(ct,xt=0){ct!==vt&&(S=0,ct!=="walk"&&(B=0)),vt=ct,R=xt},get gait(){return vt}}}class xy extends Os{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new wy(e)}),this.register(function(e){return new by(e)}),this.register(function(e){return new Dy(e)}),this.register(function(e){return new Ny(e)}),this.register(function(e){return new Uy(e)}),this.register(function(e){return new Ty(e)}),this.register(function(e){return new Ay(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new Cy(e)}),this.register(function(e){return new Sy(e)}),this.register(function(e){return new Py(e)}),this.register(function(e){return new Ey(e)}),this.register(function(e){return new Ly(e)}),this.register(function(e){return new Iy(e)}),this.register(function(e){return new yy(e)}),this.register(function(e){return new Oy(e)}),this.register(function(e){return new Fy(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=br.extractUrlBase(t);o=br.resolveURL(l,this.path)}else o=br.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new gd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===pf){try{o[te.KHR_BINARY_GLTF]=new ky(t)}catch(h){s&&s(h);return}r=JSON.parse(o[te.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Jy(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case te.KHR_MATERIALS_UNLIT:o[h]=new My;break;case te.KHR_DRACO_MESH_COMPRESSION:o[h]=new By(r,this.dracoLoader);break;case te.KHR_TEXTURE_TRANSFORM:o[h]=new zy;break;case te.KHR_MESH_QUANTIZATION:o[h]=new Hy;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function vy(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const te={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yy{constructor(t){this.parser=t,this.name=te.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const u=new zt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ye);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xl(u),l.distance=h;break;case"spot":l=new b2(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class My{constructor(){this.name=te.KHR_MATERIALS_UNLIT}getMaterialType(){return Ge}extendParams(t,e,n){const s=[];t.color=new zt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ye),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,ge))}return Promise.all(s)}}class Sy{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class wy{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ht(a,a)}return Promise.all(r)}}class by{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ey{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Ty{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new zt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ye)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,ge)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ay{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ry{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new zt().setRGB(a[0],a[1],a[2],Ye),Promise.all(r)}}class Cy{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Py{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new zt().setRGB(a[0],a[1],a[2],Ye),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,ge)),Promise.all(r)}}class Iy{constructor(t){this.parser=t,this.name=te.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ly{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Dy{constructor(t){this.parser=t,this.name=te.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Ny{constructor(t){this.parser=t,this.name=te.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Uy{constructor(t){this.parser=t,this.name=te.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Oy{constructor(t){this.name=te.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class Fy{constructor(t){this.name=te.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new qt,p=new C,m=new Ke,v=new C(1,1,1),x=new Yh(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,_.compose(p,m,v));for(const M in c)if(M==="_COLOR_0"){const P=c[M];x.instanceColor=new Zc(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);xe.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const pf="glTF",Lr=12,mf={JSON:1313821514,BIN:5130562};class ky{constructor(t){this.name=te.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Lr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Lr,r=new DataView(t,Lr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===mf.JSON){const l=new Uint8Array(t,Lr+o,a);this.content=n.decode(l)}else if(c===mf.BIN){const l=Lr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class By{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=te.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Bl[u]||u.toLowerCase();a[h]=o[u]}for(const u in t.attributes){const h=Bl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[t.attributes[u]],f=Hs[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}h(f)},a,l,Ye,d)})})}}class zy{constructor(){this.name=te.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Hy{constructor(){this.name=te.KHR_MESH_QUANTIZATION}}class gf extends Mr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-e,h=(n-e)/u,d=h*h,f=d*h,g=t*l,_=g-l,p=-2*f+3*d,m=f-d,v=1-p,x=m-d+h;for(let M=0;M!==a;M++){const P=o[_+M+a],b=o[_+M+c]*u,T=o[g+M+a],I=o[g+M]*u;r[M]=v*P+x*b+p*T+m*I}return r}}const Gy=new Ke;class Vy extends gf{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return Gy.fromArray(r).normalize().toArray(r),r}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_f={9728:nn,9729:hn,9984:mu,9985:zr,9986:Ws,9987:jn},xf={33071:ui,33648:Br,10497:_n},kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wy={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Ys},zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ne({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function Ki(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function oi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function qy(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,u=t.length;l<u;l++){const h=t[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Yy(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ky(i){let t;const e=i.extensions&&i.extensions[te.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Hl(e.attributes):t=i.indices+":"+Hl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Hl(i.targets[n]);return t}function Hl(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Gl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const $y=new qt;class Jy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new S2(this.options.manager):this.textureLoader=new R2(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ki(r,a,s),oi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[te.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(br.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=kl[s.type],a=Hs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Oe(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=kl[s.type],l=Hs[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(f&&f!==h){const m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let x=e.cache.get(v);x||(_=new l(a,m*f,s.count*f/u),x=new Lh(_,f/u),e.cache.add(v,x)),p=new rr(x,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new Oe(_,c,g);if(s.sparse!==void 0){const m=kl.SCALAR,v=Hs[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,P=new v(o[1],x,s.sparse.count*m),b=new l(o[2],M,s.sparse.count*c);a!==null&&(p=new Oe(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,I=P.length;T<I;T++){const U=P[T];if(p.setX(U,b[T*c]),c>=2&&p.setY(U,b[T*c+1]),c>=3&&p.setZ(U,b[T*c+2]),c>=4&&p.setW(U,b[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=_f[d.magFilter]||hn,u.minFilter=_f[d.minFilter]||jn,u.wrapS=xf[d.wrapS]||_n,u.wrapT=xf[d.wrapT]||_n,s.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const p=new Ue(_);p.needsUpdate=!0,d(p)}),e.load(br.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),oi(h,o),h.userData.mimeType=o.mimeType||jy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[te.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[te.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[te.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new No,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Kh,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return ne}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[te.KHR_MATERIALS_UNLIT]){const h=s[te.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,e))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new zt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ye),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",h.baseColorTexture,ge)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=De);const u=r.alphaMode||zl.OPAQUE;if(u===zl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===zl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ge&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ht(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ge&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ge){const h=r.emissiveFactor;a.emissive=new zt().setRGB(h[0],h[1],h[2],Ye)}return r.emissiveTexture!==void 0&&o!==Ge&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ge)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),oi(h,r),e.associations.set(h,{materials:t}),r.extensions&&Ki(s,h,r),h})}createUniqueName(t){const e=ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return vf(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],u=Ky(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[te.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=vf(new Me,l,e),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Xy(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=o[f];let m;const v=l[f];if(p.mode===wn.TRIANGLES||p.mode===wn.TRIANGLE_STRIP||p.mode===wn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new A_(_,v):new et(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===wn.TRIANGLE_STRIP?m.geometry=Qd(m.geometry,Eu):p.mode===wn.TRIANGLE_FAN&&(m.geometry=Qd(m.geometry,lc));else if(p.mode===wn.LINES)m=new P_(_,v);else if(p.mode===wn.LINE_STRIP)m=new tl(_,v);else if(p.mode===wn.LINE_LOOP)m=new I_(_,v);else if(p.mode===wn.POINTS)m=new nl(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Yy(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),oi(m,r),p.extensions&&Ki(s,m,p),e.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return r.extensions&&Ki(s,h[0],r),h[0];const d=new pe;r.extensions&&Ki(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Fe(Li.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Oc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),oi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new qt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Jc(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let v=0,x=d.length;v<x;v++){const M=d[v],P=f[v],b=g[v],T=_[v],I=p[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const U=n._createAnimationTracks(M,P,b,T,I);if(U)for(let y=0;y<U.length;y++)m.push(U[y])}return new fl(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,$y)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Gh:l.length>1?u=new pe:l.length===1?u=l[0]:u=new xe,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),oi(u,r),r.extensions&&Ki(n,u,r),r.matrix!==void 0){const h=new qt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new pe;n.name&&(r.name=s.createUniqueName(n.name)),oi(r,n),n.extensions&&Ki(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Mn||d instanceof Ue)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];wi[r.path]===wi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(wi[r.path]){case wi.weights:l=Ls;break;case wi.rotation:l=Ds;break;case wi.position:case wi.scale:l=Us;break;default:n.itemSize===1?l=Ls:l=Us;break}const u=s.interpolation!==void 0?Wy[s.interpolation]:Ks,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+wi[r.path],e.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Gl(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Ds?Vy:gf;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Zy(i,t,e){const n=t.attributes,s=new On;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const u=Gl(Hs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new C,c=new C;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Gl(Hs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function vf(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Bl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return se.workingColorSpace!==Ye&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${se.workingColorSpace}" not supported.`),oi(i,t),Zy(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?qy(i,t.targets,e):i})}const Qy="Idle",t3=.6,e3=.1,n3=new xy;function i3(i,{height:t=Yi,clip:e=Qy}={}){return new Promise((n,s)=>{n3.load(i,r=>n(s3(r,t,e)),void 0,s)})}function s3(i,t,e){const n=i.scene;n.traverse(h=>{if(h.isMesh){h.castShadow=!0,h.receiveShadow=!0;for(const d of yf(h.material))d&&("roughness"in d&&(d.roughness=t3),"metalness"in d&&(d.metalness=e3))}});const s=new pe;n.updateWorldMatrix(!0,!0);const r=new On().setFromObject(n),o=r.getSize(new C);if(o.y>1e-4){const h=t/o.y;n.scale.multiplyScalar(h),r.min.multiplyScalar(h),r.max.multiplyScalar(h)}n.position.x-=(r.min.x+r.max.x)/2,n.position.z-=(r.min.z+r.max.z)/2,n.position.y-=r.min.y,s.add(n);const a=new H2(n),c=new Map;for(const h of i.animations)c.set(h.name,a.clipAction(h));let l=null;function u(h,d=.25){const f=c.get(h);return!f||f===l?!!f:(f.reset().play(),l?l.crossFadeTo(f,d,!1):d>0&&f.fadeIn(d),l=f,!0)}return!u(e,0)&&i.animations.length&&u(i.animations[0].name,0),{group:s,height:t,clips:[...c.keys()],play:u,update(h){a.update(h)},dispose(){a.stopAllAction(),a.uncacheRoot(n),r3(n)}}}function yf(i){return i?Array.isArray(i)?i:[i]:[]}function r3(i){const t=new Set;i.traverse(e=>{if(e.isMesh){e.geometry?.dispose();for(const n of yf(e.material))t.add(n)}});for(const e of t){for(const n of Object.values(e))n&&n.isTexture&&n.dispose();e.dispose()}}const o3=.45,Vl=1.5;function a3({renderer:i,modelUrl:t=null}){const e=new bo;e.background=new zt(658966);const n=i.toneMapping,s=i.toneMappingExposure,r=i.outputColorSpace;i.toneMapping=du,i.toneMappingExposure=1,i.outputColorSpace=ge;const o=i.shadowMap.enabled,a=i.shadowMap.type;i.shadowMap.enabled=!0,i.shadowMap.type=lu;const c=new Fe(38,window.innerWidth/window.innerHeight,.05,100),l=new vo(i);e.environment=l.fromScene(new hf,.04).texture,e.environmentIntensity=.55,l.dispose(),e.add(new A2(15266047,.8));const u=new qi(16774634,2.5);u.position.set(5,10,7),u.castShadow=!0,u.shadow.mapSize.width=2048,u.shadow.mapSize.height=2048,u.shadow.bias=-1e-4,u.shadow.radius=4,u.shadow.camera.near=8,u.shadow.camera.far=20,u.shadow.camera.left=-1.8,u.shadow.camera.right=1.8,u.shadow.camera.top=1.8,u.shadow.camera.bottom=-1.8,e.add(u);const h=new qi(10273023,1.15);h.position.set(3.2,1.4,1.6),e.add(h);const d=new qi(10420176,1);d.position.set(.6,2,-3.6),e.add(d);const f=new et(new Ee(.62,.7,.06,48),new ne({color:1053724,metalness:.2,roughness:.85}));f.position.y=-.03,f.receiveShadow=!0,e.add(f);const g=new et(new si(.63,.008,8,64),new Ge({color:4835583}));g.rotation.x=Math.PI/2,g.position.y=.012,e.add(g);const _=new pe;e.add(_);const p=ff();_.add(p.group),p.group.traverse(q=>{q.isMesh&&(q.castShadow=!0,q.receiveShadow=!0)});let m=!1,v=p;t&&i3(t).then(q=>{if(m){q.dispose();return}_.remove(p.group),_.add(q.group),v=q}).catch(q=>{console.warn(`[character] could not load ${t}, keeping the built-in Vexo:`,q)});let x=0,M=.06,P=0,b=!1,T=0;function I(){const X=Yi*.52;c.position.set(0,X+Math.sin(M)*3.7,Math.cos(M)*3.7),c.lookAt(0,Yi*.52,0)}I();function U(q){b=!0,T=q.clientX}function y(q){b&&(x+=(q.clientX-T)*.012,T=q.clientX,P=Vl)}function w(){b=!1}function H(q){q.code==="ArrowLeft"&&(x-=.2,P=Vl),q.code==="ArrowRight"&&(x+=.2,P=Vl),q.code==="ArrowUp"&&(M=Math.min(.9,M+.06),I()),q.code==="ArrowDown"&&(M=Math.max(-.35,M-.06),I())}window.addEventListener("pointerdown",U),window.addEventListener("pointermove",y),window.addEventListener("pointerup",w),window.addEventListener("keydown",H);const L=document.createElement("div");L.id="character-label",L.innerHTML=`
    <div class="character-label__name">VEXO</div>
    <div class="character-label__hint">Drag to turn · ↑ ↓ to tilt</div>
  `,document.body.appendChild(L);function z(q){P>0?P-=q:b||(x+=o3*q),_.rotation.y=x,v.update(q)}function J(){i.render(e,c)}function G(q=window.innerWidth,X=window.innerHeight){c.aspect=q/X,c.updateProjectionMatrix()}return{update:z,render:J,onResize:G,dispose(){m=!0,i.toneMapping=n,i.toneMappingExposure=s,i.outputColorSpace=r,i.shadowMap.enabled=o,i.shadowMap.type=a,v!==p&&v.dispose?.(),e.environment?.dispose()},setAngle(q){x=q,P=1/0,_.rotation.y=x},get vexo(){return v}}}const c3=8161430,l3=15659509,Mf=4828159,Sf=.46,Wl=.32,Xl=4,u3=Math.ceil(Xl/Wl);function h3(){const i=new pe;i.visible=!1;const t=new ne({color:c3,metalness:.75,roughness:.42}),e=new ne({color:l3,metalness:.5,roughness:.5}),n=new ne({color:Mf,emissive:Mf,emissiveIntensity:1.4,roughness:.5}),s=[];for(const h of[-1,1]){const d=new Ee(.035,.035,1,10);d.translate(0,-.5,0);const f=new et(d,t);f.position.x=h*Sf/2,i.add(f),s.push(f)}const r=[];for(let h=0;h<u3;h++){const d=new et(new Ee(.022,.022,Sf,8),e);d.rotation.z=Math.PI/2,d.position.y=-Wl*(h+1),d.visible=!1,i.add(d),r.push(d)}const o=new et(new si(.5,.035,8,28),n);o.rotation.x=Math.PI/2,i.add(o);let a=Xl,c=0;function l(){return a*c}function u(){const h=l();for(const d of s)d.scale.y=Math.max(h,.001);for(const[d,f]of r.entries())f.visible=-f.position.y<=h-.04;o.position.y=-h,o.visible=c>.02,i.visible=c>.001}return u(),{group:i,setHeight(h){a=Math.min(Math.max(h,.4),Xl),u()},setExtension(h){c=h<0?0:h>1?1:h,u()},get height(){return a},get extension(){return c},rungSpacing:Wl}}const ql=22,wf=2*Math.PI*ql,Yl=.6;function d3(){const i=document.createElement("div");i.id="stamina-wheel",i.hidden=!0,i.innerHTML=`
    <svg viewBox="0 0 56 56" width="56" height="56">
      <circle class="stamina-wheel__track" cx="28" cy="28" r="${ql}" />
      <circle class="stamina-wheel__fill" cx="28" cy="28" r="${ql}"
              stroke-dasharray="${wf.toFixed(2)}" />
    </svg>
  `,document.body.appendChild(i);const t=i.querySelector(".stamina-wheel__fill");let e=!1,n=0,s=-1,r=null;return{update(o,a,c,l){l!=null&&(o<.999||a)?n=Yl:n>0&&(n-=c);const h=n>0&&l!=null;if(h!==e&&(i.hidden=!h,e=h),!h)return;i.style.transform=`translate(${Math.round(l.x)}px, ${Math.round(l.y)}px)`,i.style.opacity=n<Yl?(n/Yl).toFixed(2):"1";const d=Math.round(wf*(1-Math.max(0,Math.min(1,o))));d!==s&&(t.style.strokeDashoffset=String(d),s=d),a!==r&&(i.classList.toggle("stamina-wheel--winded",a),r=a)},hide(){i.hidden=!0,e=!1,n=0}}}const Dr=1.5,f3=3.3,p3=6.2,sa=.55,bf=.2,m3=.62,g3=.3,_3=.25,x3=.05,v3=2.2,y3=.11,M3=.08,S3=.15,Ef=.75,w3=.38,Kl=1.7,b3=2.6,Tf=.8,E3=22,T3=4.5,A3=.9,R3=1.3,C3=.55,Af=.7,P3=.35,Rf=.5,I3=.4,Cf=.55,ra=.32,Pf=2,L3=2.4,D3=1.3,If=Math.PI*.19,Nr=4.6,Lf=2,N3=6.2,U3=5,O3=2.5,Df=["KeyL"],ji=new C(0,1,0);function bi(i,t){return 1-Math.pow(2,-i/t)}function oa(i){return i<-1?-1:i>1?1:i}function F3(i,t,e){return i<t?t:i>e?e:i}function aa(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function k3({scene:i,camera:t,ship:e,surface:n,input:s,renderer:r}){const o=new vo(r),a=o.fromScene(new hf,.04).texture;o.dispose();const c=ff({suitLight:!1,environment:a}),l=h3();let u=!1;function h(){u||(i.add(c.group),i.add(l.group),u=!0)}function d(){u&&(i.remove(c.group),i.remove(l.group),u=!1)}const f=document.createElement("div");f.id="foot-prompt",f.hidden=!0,document.body.appendChild(f);const g=d3(),_=new C;let p="off",m=0,v=0,x=0,M=Tf,P=0;const b=new C,T=new C,I=new C,U=new C,y=new Ke,w=new C,H=new Ke,L=new C;let z=0,J=0,G=0,q=1,X=0,bt=!1,St=!1,k=0;const at=new C,_t=new C,O=new C,K=new C,rt=new C,tt=new C,Mt=[0,0];let gt=!1;const Et=n.town;function Tt(j,ft){return de.y+Et.groundHeightAt(j-de.x,ft-de.z)}let $=null;function A(j){if(j!==$){if($=j,!j){f.hidden=!0;return}f.textContent=j,f.hidden=!1}}function nt(){if(p!=="off"||!n.active)return;P=new He().setFromQuaternion(e.mesh.quaternion,"YXZ").y,w.copy(e.mesh.position),H.copy(e.mesh.quaternion),y.setFromEuler(new He(0,P,0,"YXZ")),U.set(w.x,n.hullGroundY(e)+ty,w.z);const ft=e.mesh.scale.x;let Rt=-1;if(!ut(-1,ft)){if(!ut(1,ft)){x=O3;return}Rt=1}h(),p="settle",m=0,M=Math.min(T3,Tf+Math.max(0,w.y-U.y)/E3),n.park(),ot(Rt,ft),J=T.y,L.copy(b).addScaledVector(I,ra),L.y=J,z=Math.atan2(-I.x,-I.z),c.setGait("climb"),lt(),c.group.visible=!1,l.setExtension(0),s.consumeAnyJustPressed(),A(Yt.onFoot.skip)}function ut(j,ft){return tt.set(j*Rf,0,Cf).multiplyScalar(ft).applyQuaternion(y).add(U),Et.isClear(tt.x-de.x,tt.z-de.z,1.2)}function ot(j,ft){T.set(j*Rf,I3,Cf).multiplyScalar(ft).applyQuaternion(y).add(U),I.set(j,0,0).applyQuaternion(y).setY(0).normalize();const Rt=Tt(T.x,T.z);b.set(T.x,Rt,T.z),l.group.position.copy(T),l.group.rotation.set(0,Math.atan2(I.x,I.z),0),l.setHeight(T.y-Rt),l.setExtension(0)}function lt(){c.group.position.copy(L),c.group.rotation.y=z}function wt(){if(p==="walk"||p==="stepoff"){K.copy(L).addScaledVector(ji,Yi*.62);const{dx:j,dz:ft,boom:Rt}=S(),pt=Rt*Math.cos(G),Gt=Rt*Math.sin(G);O.set(j,0,ft).multiplyScalar(pt).add(K).addScaledVector(ji,1.15+(Nr-Rt)*.2+Gt),vt();return}if(p==="settle"||p==="deploy"){K.copy(e.mesh.position).addScaledVector(ji,.9),O.copy(e.mesh.position).addScaledVector(I,11).addScaledVector(ji,3.4),tt.set(Math.sin(P),0,Math.cos(P)).multiplyScalar(3.5),O.add(tt),vt();return}K.copy(L).addScaledVector(ji,Yi*.5),O.copy(b).addScaledVector(I,5.6).addScaledVector(ji,2.2),tt.set(Math.sin(P),0,Math.cos(P)).multiplyScalar(1.6),O.add(tt),O.y=Math.max(O.y,K.y-.4),vt()}function vt(){const j=Tt(O.x,O.z)+.7;O.y<j&&(O.y=j)}function R(j,ft){return n.parked&&Math.hypot(j-U.x,ft-U.z)<N3?!1:Et.isClear(j-de.x,ft-de.z,.5)}function S(){const j=k+Math.PI;for(const pt of[0,.42,-.42,.85,-.85,1.3,-1.3,1.9,-1.9]){const Gt=j+pt,Ht=Math.sin(Gt),ie=Math.cos(Gt);if(R(L.x+Ht*Nr,L.z+ie*Nr))return{dx:Ht,dz:ie,boom:Nr}}const ft=Math.sin(j),Rt=Math.cos(j);for(let pt=Nr-.6;pt>Lf;pt-=.6)if(R(L.x+ft*pt,L.z+Rt*pt))return{dx:ft,dz:Rt,boom:pt};return{dx:ft,dz:Rt,boom:Lf}}function B(j){wt();const ft=p==="walk"?.13:.34;!gt||p==="settle"?(t.position.copy(O),rt.copy(K),gt=!0):(t.position.lerp(O,bi(j,ft)),rt.lerp(K,bi(j,ft))),t.up.set(0,1,0),t.lookAt(rt)}function Z(){e.mesh.position.copy(U),e.mesh.quaternion.copy(y),l.setExtension(1),L.copy(b).addScaledVector(I,Pf),L.y=Tt(L.x,L.z),z=Math.atan2(I.x,I.z),c.group.visible=!0,c.setGait("idle"),lt(),st()}function st(){p="walk",m=0,q=1,X=0,St=!1,G=0,k=z,at.set(0,0,0),v=U3,gt=!1}function Q(){const j=Math.min(1,m/M),ft=1-(1-j)*(1-j);e.mesh.position.lerpVectors(w,U,ft),e.mesh.quaternion.slerpQuaternions(H,y,ft),e.velocity.set(0,0,0),j>=1&&(p="deploy",m=0)}function Nt(){const j=Math.min(1,m/A3);l.setExtension(j),j>=1&&(p="down",m=0,c.group.visible=!0,c.setGait("climb"))}function yt(j,ft){J+=(ft?-1:1)*R3*j;const Rt=b.y,pt=T.y-.15,Gt=tt.copy(b).addScaledVector(I,ra),Ht=bi(j,.12);L.x+=(Gt.x-L.x)*Ht,L.z+=(Gt.z-L.z)*Ht,z+=aa(z,Math.atan2(-I.x,-I.z))*Ht,ft?(L.y=Math.max(Rt,J),J<=Rt&&(J=Rt,p="stepoff",m=0,c.setGait("walk",Dr*.7))):(L.y=Math.min(pt,J),J>=pt&&(J=pt,p="stow",m=0,c.group.visible=!1,A(null))),lt()}function Lt(j){const ft=Math.min(1,m/C3),Rt=ra+(Pf-ra)*ft;L.copy(b).addScaledVector(I,Rt),L.y=Tt(L.x,L.z);const pt=Math.atan2(I.x,I.z);z+=aa(z,pt)*bi(j,.12),k=z,lt(),ft>=1&&st()}function Jt(){l.setExtension(1-Math.min(1,m/Af)),m>=Af&&(p="off",l.setExtension(0),n.unpark(),gt=!1,St=!1,g.hide(),d())}function dt(j,ft){const Rt=oa(ft?.lookX??0),pt=oa(ft?.lookY??0),Gt=ft?.lookTurnX??0,Ht=ft?.lookTurnY??0;k+=Rt*L3*j+Gt,G=F3(G-pt*D3*j-Ht,-If,If);const ie=Math.abs(Rt)>.05||Math.abs(Gt)>.0015,D=oa(ft?.stickYaw??ft?.yaw??0),Ct=oa(ft?.stickThrottle??ft?.throttle??0);let Y=Math.hypot(D,Ct);Y>1&&(Y=1);const it=s.keyboard.isDown("ShiftLeft")||s.keyboard.isDown("ShiftRight")||s.gamepad.isButtonDown(en.B),Pt=it&&Y>.15;it&&!bt&&q>0&&X<=0&&(q=Math.max(0,q-x3)),bt=it,X>0&&(X-=j);const It=Pt&&X<=0&&q>0;if(St=It,It){const kt=q<_3?bf*.5:bf;q-=kt*j,q<=0&&(q=0,X=v3)}else q=Math.min(1,q+(X>0?g3:m3)*j);const Zt=Y<sa?Dr*(Y/sa):Dr+(f3-Dr)*((Y-sa)/(1-sa)),Se=X>0?Math.min(Zt,Dr):It?p3:Zt;if(Y>.05){const kt=k+Math.atan2(D,Ct);_t.set(Math.sin(kt),0,Math.cos(kt)).multiplyScalar(Se),z+=aa(z,kt)*bi(j,M3)}else _t.set(0,0,0);const ze=bi(j,y3);at.x+=(_t.x-at.x)*ze,at.z+=(_t.z-at.z)*ze;const ee=Math.hypot(at.x,at.z);if(ee>.05){L.x+=at.x*j,L.z+=at.z*j,Et.resolveWalk(L.x-de.x,L.z-de.z,w3,Mt),L.x=Mt[0]+de.x,L.z=Mt[1]+de.z;const kt=L.x-U.x,Vt=L.z-U.z,$t=Math.hypot(kt,Vt);$t<Kl&&$t>1e-4&&(L.x=U.x+kt/$t*Kl,L.z=U.z+Vt/$t*Kl)}ee>S3?c.setGait("walk",ee):c.setGait("idle");const We=Math.abs(D)<.4&&Y>.05;!ie&&We&&(k+=aa(k,z)*bi(j,Ef),G+=(0-G)*bi(j,Ef*2)),L.y=Tt(L.x,L.z),lt(),_.copy(L).addScaledVector(ji,Yi*.75).project(t);const ct=_.z<1&&Math.abs(_.x)<1.4&&Math.abs(_.y)<1.4;g.update(q,X>0,j,ct?{x:(_.x*.5+.5)*window.innerWidth+52,y:(-_.y*.5+.5)*window.innerHeight}:null),Math.hypot(L.x-b.x,L.z-b.z)<b3?(A(Yt.onFoot.board),(s.keyboard.consumeJustPressed(Df)||s.gamepad.consumeJustPressed(en.A))&&(p="up",m=0,J=L.y,c.setGait("climb"),A(null))):v>0?A(Yt.onFoot.controls):A(null)}return{get active(){return p!=="off"},get cutscene(){return p==="settle"||p==="deploy"||p==="down"||p==="stepoff"},get state(){return p},vexo:c,ladder:l,get position(){return L},get stamina(){return q},get winded(){return X>0},get sprinting(){return St},begin:nt,update(j,ft){if(p==="off"){x>0&&(x-=j),ft&&n.active?(A(x>0?Yt.onFoot.noRoom:Yt.onFoot.climbOut),(s.keyboard.consumeJustPressed(Df)||s.gamepad.consumeJustPressed(en.A))&&nt()):A(null);return}switch(m+=j,v>0&&(v-=j),this.cutscene&&m>P3&&s.consumeAnyJustPressed()&&(Z(),A(null)),p){case"settle":Q();break;case"deploy":Nt();break;case"down":yt(j,!0);break;case"stepoff":Lt(j);break;case"walk":dt(j,ft);break;case"up":yt(j,!1);break;case"stow":Jt();break}c.update(j),p!=="off"&&B(j),this.cutscene?A(Yt.onFoot.skip):p!=="walk"&&A(null)},prewarm(j,ft){const Rt=c.group.visible;c.group.position.copy(de),c.group.visible=!0,l.group.position.copy(de),l.setHeight(2.6),l.setExtension(1),j.compile(i,ft);const pt=new Fe(50,ft.aspect,.1,5e3);pt.position.copy(de).add(new C(3.5,1.6,4.5)),pt.lookAt(de.x,de.y+1,de.z),j.render(i,pt),c.group.visible=Rt,l.setExtension(0),j.render(i,ft)},reset(){p!=="off"&&n.unpark(),p="off",m=0,x=0,gt=!1,c.group.visible=!1,l.setExtension(0),A(null),St=!1,g.hide(),d()}}}const{resolveAsteroidCollisions:B3}=Hx,ca=new URLSearchParams(window.location.search),z3=ca.get("skipIntro")==="1",H3=ca.get("land")==="1",jl=ca.get("character")==="1",G3=ca.get("model"),V3=document.getElementById("app"),Wn=new E_({antialias:!0});V3.appendChild(Wn.domElement);const Dn=X2(),ai=q2(),ve=ex(),$l=Ad(),la=lx(),Jl=hx(),Zl=Sx(),Ql=Tx(),Ur=Ox(),ua=Bx();Dn.add(ve.mesh),Dn.add($l),Dn.add(la.mesh),Dn.add(Jl.mesh),Dn.add(Zl.mesh),Dn.add(Ql.sprite);for(const i of Ur.rovers)Dn.add(i.mesh);Dn.add(ua.points),ve.mesh.visible=!0;const Ei=iy(Dn,[$l,la.mesh,Jl.mesh,Zl.mesh,Ql.sprite,ua.points,...Ur.rovers.map(i=>i.mesh)],()=>tu.reset()),be=Jx(),Ae=Zx(),Nf=window.matchMedia("(max-height: 480px), (max-width: 480px)");Nf.matches&&(Ae.hide(),Ae.setHintVisible(!1));const ha=Qx();jl&&(ha.hide(),Ae.hide(),Ae.setHintVisible(!1));const $i=ev(document.body),Xn=uv(),Uf=_v(),qn=gv(Ur),ln=xv({upgrades:Uf,mission:qn,audio:Xn,onClose:()=>Ae.show()});qn.setOnRepaired(i=>{ua.fire(i.mesh.position),Xn.chirp()}),qn.setOnComplete(()=>{Xn.fanfare(),ln.show("complete")}),Ae.onFastTravel(()=>{Of()}),Ae.onUpgradesClick(()=>{ln.show("upgrades")});function W3(){Ai.reset(),Ei.reset(ve),ve.mesh.position.set(0,0,0),ve.velocity.set(0,0,0),ve.mesh.quaternion.identity(),ve.arcadeDamping=!1,qn.reset(),Ur.reset(),Uf.reset(),Y2(),ln.hideAll(),tu.reset()}function Of(){$i.active||Ei.active||(Ae.setFastTravelActive(!0),$i.begin(ve,{onDone:()=>Ae.setFastTravelActive(!1)}))}const tu=Dv(ai),Or={x:0,y:0,turnX:0,turnY:0};let eu=null;function Ff(i){eu=i;const{width:t,height:e,pixelRatio:n}=i;Wn.setPixelRatio(n*nu.scale),Wn.setSize(t,e,!1),ai.aspect=t/e,ai.updateProjectionMatrix(),Ti&&Ti.onResize(t,e),Fr&&Fr.onResize(t,e)}const nu=cy(()=>{eu&&Ff(eu)}),X3=900,Gs={CINEMATIC:"cinematic",TITLE:"title",FLY:"fly"},Fr=jl?a3({renderer:Wn,modelUrl:G3}):null,Ti=z3||jl?null:bv({renderer:Wn});let da=Ti?Gs.CINEMATIC:Gs.TITLE;Ti&&ha.hide();const q3=Ev();Cv(Wn.domElement,Ff);const Ai=k3({scene:Dn,camera:ai,ship:ve,surface:Ei,input:be,renderer:Wn});Ei.prewarm(Wn,ai),Ai.prewarm(Wn,ai);function Y3(){da=Gs.TITLE,ha.show(),Nf.matches||Ae.show()}let kf=performance.now();const fa=new He;function pa(i){const t=(i-kf)/1e3,e=Math.min(t,.1);if(kf=i,nu.sample(t),nu.update(e),Fr){Fr.update(e),Fr.render(),requestAnimationFrame(pa);return}if(q3.update(),da===Gs.CINEMATIC){be.consumeAnyJustPressed()&&(Ti.skip(),be.gamepad.suppressCurrentlyPressed()),Ti.update(e),Ti.render(),Ti.active||Y3(),requestAnimationFrame(pa);return}if(da===Gs.TITLE)be.consumeAnyJustPressed()&&(da=Gs.FLY,ha.dismiss(),Ae.showFastTravel(),Ae.showUpgrades(),Ae.setMissionVisible(!0),Ae.showResetHint(),Ae.hide(),be.enableGyro().catch(()=>{}),Xn.start(),H3&&Ei.enter(ve));else{const s=be.sample(),r=!$i.suppressInput&&!ln.isOpen();if(Or.x=r?s.lookX:0,Or.y=r?s.lookY:0,Or.turnX=r?s.lookTurnX:0,Or.turnY=r?s.lookTurnY:0,(be.keyboard.consumeJustPressed(["KeyT"])||be.gamepad.consumeJustPressed(en.Select))&&Ae.toggle(),(be.keyboard.consumeJustPressed(["KeyX"])||be.gamepad.consumeJustPressed(en.X))&&(ve.arcadeDamping=!ve.arcadeDamping),(be.keyboard.consumeJustPressed(["KeyF"])||be.gamepad.consumeJustPressed(en.R1))&&Of(),(be.keyboard.consumeJustPressed(["KeyU"])||be.gamepad.consumeJustPressed(en.Y))&&(ln.isOpen()?(ln.hideAll(),Ae.show()):ln.show("upgrades")),ln.isOpen()&&(be.gamepad.consumeJustPressed(en.B)||be.keyboard.consumeJustPressed(["Escape"]))&&(ln.hideAll(),Ae.show()),ln.isOpen()){const c=(be.gamepad.isButtonDown(en.Down)?1:0)-(be.gamepad.isButtonDown(en.Up)?1:0),u=-s.throttle||c;u&&ln.scrollBy(u*X3*e)}(be.keyboard.consumeJustPressed(["KeyR"])||be.gamepad.consumeJustPressed(en.Start))&&W3();const o=ln.isOpen()||$i.suppressInput?null:s;Ai.active?(Ai.update(e,o),Ei.update(ve,e),Xn.setThrottle(0),Xn.setSprinting(Ai.sprinting)):$i.suppressInput||ln.isOpen()?Xn.setThrottle(0):(ix(ve,s,e),Xn.setThrottle(s.throttle),Ei.update(ve,e),B3({position:ve.mesh.position,velocity:ve.velocity},la.instances),ve.braking&&ve.velocity.set(0,0,0)),Ai.active||(Ai.update(e,o),Xn.setSprinting(!1));const a=be.keyboard.isDown("KeyH")||be.gamepad.isButtonDown(en.L1);qn.update({shipPos:ve.mesh.position,shipSpeed:ve.velocity.length(),holdActive:a&&!ln.isOpen()&&!$i.suppressInput&&!Ei.active,dt:e})}$i.update(e),Xn.update(e),la.update(e),Jl.update(e),Zl.update(e),Ql.update(ai),Ur.update(e),ua.update(e),Rd($l,ai),Ai.active||tu.update(ve,Or,e),Wn.render(Dn,ai),fa.setFromQuaternion(ve.mesh.quaternion,"YXZ"),Ae.update({velocity:ve.velocity.length(),eulerDeg:{x:Li.radToDeg(fa.x),y:Li.radToDeg(fa.y),z:Li.radToDeg(fa.z)},dt:e,sources:be.activeSources(),dampingOn:ve.arcadeDamping}),Ae.updateMission({remaining:qn.remaining(),total:qn.totalRovers(),credits:qn.credits});const n=qn.repairing??qn.inRange;Ae.updateHack({name:n?n.name:null,progress:n?n.repairProgress:0}),requestAnimationFrame(pa)}requestAnimationFrame(pa)})();
