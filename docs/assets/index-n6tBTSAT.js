(function(){"use strict";var lc=document.createElement("style");lc.textContent=`html,body{margin:0;padding:0;width:100%;height:100%;height:100dvh;background:#000;overflow:hidden;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#d6f0ff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}body,#app{position:fixed;inset:0}canvas{display:block;position:fixed;inset:0;width:100%;height:100%;touch-action:none}#cinematic{position:fixed;inset:0;z-index:12;pointer-events:none;color:#e6f3ff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.cinematic__skip{position:absolute;top:calc(1rem + env(safe-area-inset-top));right:calc(1.25rem + env(safe-area-inset-right));font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6aa3d1;opacity:.65}.cinematic__text{position:absolute;left:0;right:0;bottom:12%;text-align:center;padding:0 2rem;opacity:0;transition:opacity .9s ease;text-shadow:0 0 18px rgba(80,160,255,.4),0 2px 8px rgba(0,0,0,.85)}.cinematic__text--in{opacity:1}.cinematic__text p{font-size:clamp(1.05rem,2vw,1.6rem);letter-spacing:.04em;line-height:1.5;margin:.3em 0;color:#cbe2ff}.cinematic__flash{position:absolute;inset:0;background:radial-gradient(circle at center,#fff,#d3eaff,#7fb8ee 80%,#112540);opacity:0;pointer-events:none}#title-card{position:fixed;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#080e1e8c,#000000d9 70%);transition:opacity .5s ease;opacity:1}#title-card.title-card--hidden{opacity:0;pointer-events:none}.title-card__inner{text-align:center;padding:2rem 3rem}.title-card__title{font-size:clamp(1.6rem,4vw,3rem);letter-spacing:.05em;margin:0 0 1.5rem;color:#b8e0ff;text-shadow:0 0 24px rgba(80,160,255,.4)}.title-card__prompt{font-size:clamp(.9rem,1.5vw,1.1rem);color:#6aa3d1;margin:0;animation:pulse 1.4s ease-in-out infinite}@keyframes pulse{0%,to{opacity:.5}50%{opacity:1}}#tablet-hint{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;padding:4px 10px;background:#0a141eb3;color:#9ab3c9;font:11px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;border:1px solid rgba(120,160,200,.18);pointer-events:none}#tablet-hint[hidden]{display:none}#tablet{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;pointer-events:none}.tablet-frame{padding:6px;background:linear-gradient(135deg,#1a232e,#0a0f15);border-radius:14px;box-shadow:0 4px 24px #0009,inset 0 0 0 1px #ffffff0d}.tablet-bezel{padding:6px;background:#050709;border-radius:10px}.tablet-screen{width:220px;padding:10px 12px;background:linear-gradient(180deg,#061320,#03070d);border-radius:6px;font-size:12px;line-height:1.5;color:#9fd1ff;box-shadow:inset 0 0 18px #3278c81f}.tablet-titlebar{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid rgba(80,140,200,.18);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1}.tablet-app{font-weight:600}.tablet-source{padding:1px 6px;border-radius:3px;background:#50a0ff1f;color:#b8e0ff}.tablet-row{display:flex;justify-content:space-between}.tablet-row--small{font-size:10px;opacity:.7;margin-top:4px}.tablet-row--hint{margin-top:8px;padding-top:6px;border-top:1px solid rgba(80,140,200,.12);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1;opacity:.7;text-align:right}.tablet-label{color:#6aa3d1}.tablet-value{color:#d6f0ff;font-variant-numeric:tabular-nums}.tablet-app-btn{display:flex;margin-top:10px;width:100%;padding:8px 10px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:6px;color:#d6f0ff;font-family:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .4s ease}.tablet-app-btn--visible{opacity:1;pointer-events:auto}.tablet-app-btn:hover:not(:disabled){background:linear-gradient(135deg,#235080,#103050)}.tablet-app-btn:active:not(:disabled){transform:translateY(1px)}.tablet-app-btn:disabled{cursor:progress;opacity:.65}.tablet-app-btn--active{box-shadow:0 0 16px #78c8ff99}.tablet-app-btn__icon{font-size:14px;opacity:.85}.tablet-app-btn__label{flex:1;text-align:left;font-weight:600}.tablet-app-btn__key{padding:1px 6px;border-radius:3px;background:#78b4f02e;font-size:10px}.tablet-mission{margin-top:8px;padding-top:8px;border-top:1px solid rgba(80,140,200,.18)}.tablet-hack{margin-top:8px;padding:8px;background:#50a0ff14;border:1px solid rgba(120,180,240,.35);border-radius:4px}.tablet-hack__name{font-size:11px;font-weight:700;letter-spacing:.1em;color:#d6f0ff}.tablet-hack__hint{font-size:10px;color:#9adfff;opacity:.85;margin-bottom:4px}.tablet-hack__bar{height:6px;background:#ffffff14;border-radius:3px;overflow:hidden}.tablet-hack__fill{height:100%;width:0%;background:linear-gradient(90deg,#4aa3ff,#9adfff);transition:none}.screen-overlay{position:fixed;inset:0;z-index:8;display:flex;align-items:center;justify-content:center;padding:2rem;background:radial-gradient(ellipse at center,#080e1ec7,#000000eb 80%);pointer-events:auto}.screen-overlay[hidden]{display:none}.screen-card{max-width:460px;max-height:84vh;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:1.6rem 1.8rem;background:linear-gradient(160deg,#0e1e30,#050a14);border:1px solid rgba(120,180,240,.3);border-radius:10px;box-shadow:0 8px 36px #0000008c,inset 0 0 0 1px #ffffff08;color:#d6f0ff;text-align:center}.screen-card--wide{max-width:520px;text-align:left}.screen-card{scrollbar-width:thin;scrollbar-color:rgba(120,180,240,.4) transparent}.screen-card::-webkit-scrollbar{width:6px}.screen-card::-webkit-scrollbar-track{background:transparent}.screen-card::-webkit-scrollbar-thumb{background:#78b4f066;border-radius:3px}.screen-card__title{margin:0 0 .5rem;font-size:clamp(1.2rem,2.2vw,1.8rem);letter-spacing:.08em;color:#b8e0ff}.screen-card__body{color:#9fc6e7;font-size:.95rem;line-height:1.5}.screen-card__row{margin:.8rem 0}.screen-card__hint{margin:0 0 .8rem;padding-bottom:.6rem;border-bottom:1px solid rgba(80,140,200,.15);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6aa3d1;opacity:.75;text-align:center}.screen-card__credits{font-size:1.1rem;font-weight:700;color:#ffdf80}.screen-card__credits-label{font-size:.7rem;letter-spacing:.15em;color:#6aa3d1;margin-right:6px;font-weight:400}.screen-card__actions{display:flex;justify-content:center;gap:10px;margin-top:1rem}.screen-btn{padding:8px 14px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:5px;color:#d6f0ff;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.screen-btn--primary{background:linear-gradient(135deg,#2660a0,#154070);border-color:#a0dcff99}.screen-btn--small{padding:5px 10px;font-size:11px}.screen-btn:hover:not(:disabled){filter:brightness(1.15)}.screen-btn:disabled{opacity:.45;cursor:not-allowed}.upgrade-list{list-style:none;padding:0;margin:0}.upgrade-item{padding:10px 12px;margin-bottom:8px;background:#50a0ff0f;border:1px solid rgba(120,180,240,.18);border-radius:6px}.upgrade-item--bought{opacity:.65;border-color:#64dcb466}.upgrade-item__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.upgrade-item__name{font-weight:700;color:#d6f0ff;letter-spacing:.05em}.upgrade-item__cost{color:#ffdf80;font-weight:700;font-variant-numeric:tabular-nums}.upgrade-item__desc{margin:4px 0 8px;font-size:12px;color:#9fc6e7;line-height:1.4}#warp-flash{position:fixed;inset:0;background:radial-gradient(circle at center,#fff,#c4dfff,#6aa3d1 80%,#0a1a30);pointer-events:none;opacity:0;z-index:6;transition:none}@media(max-height:480px){.title-card__inner{padding:1rem 1.5rem;max-width:62vw}.title-card__title{font-size:clamp(1rem,2.6vw,1.6rem);margin-bottom:.9rem}.title-card__prompt{font-size:.85rem}.cinematic__text{bottom:8%}.cinematic__text p{font-size:1rem;line-height:1.35}.tablet-screen{width:180px;font-size:11px}.screen-overlay{padding:1rem}.screen-card{padding:1rem 1.2rem;max-height:88vh}.screen-card__title{font-size:1.1rem}.upgrade-item{padding:8px 10px;margin-bottom:6px}}@media(max-width:480px){.tablet-screen{width:min(58vw,220px)}.title-card__inner{padding:1.5rem 1rem}}#landing-banner{position:fixed;left:50%;bottom:calc(2.2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;padding:.7rem 1.5rem;text-align:center;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none;transition:opacity 1.2s ease}#landing-banner[hidden]{display:none}.landing-banner--fading{opacity:0}.landing-banner__town{font-size:10px;letter-spacing:.22em;color:#6aa3d1}.landing-banner__street{margin-top:2px;font-size:1.05rem;letter-spacing:.04em;color:#eaf4ff}.landing-banner__hint{margin-top:6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8fb8d8;opacity:.8}@media(max-height:480px){#landing-banner{bottom:calc(1rem + env(safe-area-inset-bottom));padding:.5rem 1.1rem}.landing-banner__street{font-size:.9rem}}.title-card__build{margin:1.1rem 0 0;font-size:9px;letter-spacing:.16em;color:#4d7ba1;opacity:.65}
/*$vite$:1*/`,document.head.appendChild(lc);const Xs="169",rh=0,uc=1,sh=2,hc=1,ah=2,gn=3,Tn=0,be=1,_e=2,An=0,fi=1,rn=2,dc=3,fc=4,oh=5,qn=100,ch=101,lh=102,uh=103,hh=104,dh=200,fh=201,ph=202,mh=203,qs=204,Ys=205,gh=206,_h=207,vh=208,xh=209,yh=210,Mh=211,Sh=212,wh=213,bh=214,$s=0,Ks=1,Js=2,pi=3,Zs=4,js=5,Qs=6,ta=7,ea=0,Eh=1,Th=2,Rn=0,Ah=1,Rh=2,Ch=3,Ph=4,Lh=5,Ih=6,Dh=7,pc=300,mi=301,gi=302,na=303,ia=304,Lr=306,Yn=1e3,$n=1001,ra=1002,Ie=1003,Uh=1004,Ir=1005,$e=1006,sa=1007,Kn=1008,_n=1009,mc=1010,gc=1011,er=1012,aa=1013,Jn=1014,sn=1015,nr=1016,oa=1017,ca=1018,_i=1020,_c=35902,vc=1021,xc=1022,Ke=1023,yc=1024,Mc=1025,vi=1026,xi=1027,la=1028,ua=1029,Sc=1030,ha=1031,da=1033,Dr=33776,Ur=33777,Nr=33778,Fr=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,va=37492,xa=37496,ya=37808,Ma=37809,Sa=37810,wa=37811,ba=37812,Ea=37813,Ta=37814,Aa=37815,Ra=37816,Ca=37817,Pa=37818,La=37819,Ia=37820,Da=37821,Or=36492,Ua=36494,Na=36495,wc=36283,Fa=36284,Oa=36285,ka=36286,Nh=3200,Fh=3201,Ba=0,Oh=1,Cn="",ve="srgb",Pn="srgb-linear",za="display-p3",kr="display-p3-linear",Br="linear",ne="srgb",zr="rec709",Hr="p3",yi=7680,bc=519,kh=512,Bh=513,zh=514,Ec=515,Hh=516,Gh=517,Vh=518,Wh=519,Ha=35044,Tc="300 es",vn=2e3,Gr=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ac=1234567;const ir=Math.PI/180,rr=180/Math.PI;function an(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Ga(i,t){return(i%t+t)%t}function Xh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function qh(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function Yh(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function $h(i,t=1){return t-Math.abs(Ga(i,t*2)-t)}function Kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jh(i,t){return i+Math.random()*(t-i)}function Qh(i){return i*(.5-Math.random())}function td(i){i!==void 0&&(Ac=i);let t=Ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ed(i){return i*ir}function nd(i){return i*rr}function id(i){return(i&i-1)===0&&i!==0}function rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ad(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Si={DEG2RAD:ir,RAD2DEG:rr,generateUUID:an,clamp:Me,euclideanModulo:Ga,mapLinear:Xh,inverseLerp:qh,lerp:sr,damp:Yh,pingpong:$h,smoothstep:Kh,smootherstep:Jh,randInt:Zh,randFloat:jh,randFloatSpread:Qh,seededRandom:td,degToRad:ed,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:rd,floorPowerOfTwo:sd,setQuaternionFromProperEuler:ad,normalize:Zt,denormalize:Je};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,r,s,a,o,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],y=r[0],m=r[3],f=r[6],x=r[1],v=r[4],S=r[7],P=r[2],R=r[5],A=r[8];return s[0]=a*y+o*x+c*P,s[3]=a*m+o*v+c*R,s[6]=a*f+o*S+c*A,s[1]=l*y+u*x+h*P,s[4]=l*m+u*v+h*R,s[7]=l*f+u*S+h*A,s[2]=d*y+p*x+g*P,s[5]=d*m+p*v+g*R,s[8]=d*f+p*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=e*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=h*y,t[1]=(r*l-u*n)*y,t[2]=(o*n-r*a)*y,t[3]=d*y,t[4]=(u*e-r*c)*y,t[5]=(r*s-o*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Bt;function Rc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){const i=Vr("canvas");return i.style.display="block",i}const Cc={};function Wr(i){i in Cc||(Cc[i]=!0,console.warn(i))}function cd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ld(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ud(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pc=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lc=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ar={[Pn]:{transfer:Br,primaries:zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ve]:{transfer:ne,primaries:zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[kr]:{transfer:Br,primaries:Hr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Lc),fromReference:i=>i.applyMatrix3(Pc)},[za]:{transfer:ne,primaries:Hr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Lc),fromReference:i=>i.applyMatrix3(Pc).convertLinearToSRGB()}},hd=new Set([Pn,kr]),$t={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ar[t].toReference,r=ar[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ar[i].primaries},getTransfer:function(i){return i===Cn?Br:ar[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ar[t].luminanceCoefficients)}};function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class dd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=Vr("canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fd=0;class Ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=an(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xa(r[a].image)):s.push(Xa(r[a]))}else s=Xa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pd=0;class Te extends Mi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=$n,r=$n,s=$e,a=Kn,o=Ke,c=_n,l=Te.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=an(),this.name="",this.source=new Ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null,Te.DEFAULT_MAPPING=pc,Te.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,r=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(p+1)/2,P=(f+1)/2,R=(u+d)/4,A=(h+y)/4,I=(g+m)/4;return v>S&&v>P?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=R/n,s=A/n):S>P?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=I/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=A/s,r=I/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-y)/x,this.z=(d-u)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Te(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ic(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends md{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dc extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gd extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(h!==y||c!==d||l!==p||u!==g){let m=1-o;const f=c*d+l*p+u*g+h*y,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,f*x);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const S=o*x;if(c=c*m+d*S,l=l*m+p*S,u=u*m+g*S,h=h*m+y*S,m===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-o*p,t[e+2]=l*g+u*p+o*d-c*h,t[e+3]=u*g-o*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new C,Uc=new Ln;class jn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(s,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),qr.subVectors(this.max,or),Ei.subVectors(t.a,or),Ti.subVectors(t.b,or),Ai.subVectors(t.c,or),In.subVectors(Ti,Ei),Dn.subVectors(Ai,Ti),Qn.subVectors(Ei,Ai);let e=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-Qn.z,Qn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,Qn.z,0,-Qn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-Qn.y,Qn.x,0];return!Ya(e,Ei,Ti,Ai,qr)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,Ei,Ti,Ai,qr))?!1:(Yr.crossVectors(In,Dn),e=[Yr.x,Yr.y,Yr.z],Ya(e,Ei,Ti,Ai,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new C,new C,new C,new C,new C,new C,new C,new C],Ze=new C,Xr=new jn,Ei=new C,Ti=new C,Ai=new C,In=new C,Dn=new C,Qn=new C,or=new C,qr=new C,Yr=new C,ti=new C;function Ya(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ti.fromArray(i,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const _d=new jn,cr=new C,$a=new C;class Ri{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_d.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);const e=cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(cr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add($a)),this.expandByPoint(cr.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new C,Ka=new C,$r=new C,Un=new C,Ja=new C,Kr=new C,Za=new C;class Nc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ka.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Ka);const s=t.distanceTo(e)*.5,a=-this.direction.dot($r),o=Un.dot(this.direction),c=-Un.dot($r),l=Un.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ka).addScaledVector($r,d),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),r=yn.dot(yn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,r,s){Ja.subVectors(e,t),Kr.subVectors(n,t),Za.crossVectors(Ja,Kr);let a=this.direction.dot(Za),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,t);const c=o*this.direction.dot(Kr.crossVectors(Un,Kr));if(c<0)return null;const l=o*this.direction.dot(Ja.cross(Un));if(l<0||c+l>a)return null;const u=-o*Un.dot(Za);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,r,s,a,o,c,l,u,h,d,p,g,y,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,h,d,p,g,y,m)}set(t,e,n,r,s,a,o,c,l,u,h,d,p,g,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ci.setFromMatrixColumn(t,0).length(),s=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*h,g=o*u,y=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,y=l*h;e[0]=d+y*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=y+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,y=l*h;e[0]=d-y*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=y-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*h,g=o*u,y=o*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+y,e[1]=c*h,e[5]=y*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*u,e[4]=y-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-y*h}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+y,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=y*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,xd)}lookAt(t,e,n){const r=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Nn.crossVectors(n,Oe),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Nn.crossVectors(n,Oe)),Nn.normalize(),Jr.crossVectors(Oe,Nn),r[0]=Nn.x,r[4]=Jr.x,r[8]=Oe.x,r[1]=Nn.y,r[5]=Jr.y,r[9]=Oe.y,r[2]=Nn.z,r[6]=Jr.z,r[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],x=n[3],v=n[7],S=n[11],P=n[15],R=r[0],A=r[4],I=r[8],G=r[12],_=r[1],w=r[5],L=r[9],D=r[13],k=r[2],q=r[6],B=r[10],Q=r[14],V=r[3],at=r[7],dt=r[11],ht=r[15];return s[0]=a*R+o*_+c*k+l*V,s[4]=a*A+o*w+c*q+l*at,s[8]=a*I+o*L+c*B+l*dt,s[12]=a*G+o*D+c*Q+l*ht,s[1]=u*R+h*_+d*k+p*V,s[5]=u*A+h*w+d*q+p*at,s[9]=u*I+h*L+d*B+p*dt,s[13]=u*G+h*D+d*Q+p*ht,s[2]=g*R+y*_+m*k+f*V,s[6]=g*A+y*w+m*q+f*at,s[10]=g*I+y*L+m*B+f*dt,s[14]=g*G+y*D+m*Q+f*ht,s[3]=x*R+v*_+S*k+P*V,s[7]=x*A+v*w+S*q+P*at,s[11]=x*I+v*L+S*B+P*dt,s[15]=x*G+v*D+S*Q+P*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*p-n*c*p)+y*(+e*c*p-e*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+e*l*h-e*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+f*(-r*o*u-e*c*h+e*o*d+r*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],x=h*m*l-y*d*l+y*c*p-o*m*p-h*c*f+o*d*f,v=g*d*l-u*m*l-g*c*p+a*m*p+u*c*f-a*d*f,S=u*y*l-g*h*l+g*o*p-a*y*p-u*o*f+a*h*f,P=g*h*c-u*y*c-g*o*d+a*y*d+u*o*m-a*h*m,R=e*x+n*v+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=x*A,t[1]=(y*d*s-h*m*s-y*r*p+n*m*p+h*r*f-n*d*f)*A,t[2]=(o*m*s-y*c*s+y*r*l-n*m*l-o*r*f+n*c*f)*A,t[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*p-n*c*p)*A,t[4]=v*A,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*f+e*d*f)*A,t[6]=(g*c*s-a*m*s-g*r*l+e*m*l+a*r*f-e*c*f)*A,t[7]=(a*d*s-u*c*s+u*r*l-e*d*l-a*r*p+e*c*p)*A,t[8]=S*A,t[9]=(g*h*s-u*y*s-g*n*p+e*y*p+u*n*f-e*h*f)*A,t[10]=(a*y*s-g*o*s+g*n*l-e*y*l-a*n*f+e*o*f)*A,t[11]=(u*o*s-a*h*s-u*n*l+e*h*l+a*n*p-e*o*p)*A,t[12]=P*A,t[13]=(u*y*r-g*h*r+g*n*d-e*y*d-u*n*m+e*h*m)*A,t[14]=(g*o*r-a*y*r-g*n*c+e*y*c+a*n*m-e*o*m)*A,t[15]=(a*h*r-u*o*r+u*n*c-e*h*c-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,g=s*h,y=a*u,m=a*h,f=o*h,x=c*l,v=c*u,S=c*h,P=n.x,R=n.y,A=n.z;return r[0]=(1-(y+f))*P,r[1]=(p+S)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(d+f))*R,r[6]=(m+x)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(m-x)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const a=Ci.set(r[4],r[5],r[6]).length(),o=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],je.copy(this);const l=1/s,u=1/a,h=1/o;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=h,je.elements[9]*=h,je.elements[10]*=h,e.setFromRotationMatrix(je),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=vn){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(o===vn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Gr)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=vn){const c=this.elements,l=1/(e-t),u=1/(n-r),h=1/(a-s),d=(e+t)*l,p=(n+r)*u;let g,y;if(o===vn)g=(a+s)*h,y=-2*h;else if(o===Gr)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new C,je=new jt,vd=new C(0,0,0),xd=new C(1,1,1),Nn=new C,Jr=new C,Oe=new C,Fc=new jt,Oc=new Ln;class De{constructor(t=0,e=0,n=0,r=De.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}De.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yd=0;const Bc=new C,Pi=new Ln,Mn=new jt,Zr=new C,lr=new C,Md=new C,Sd=new Ln,zc=new C(1,0,0),Hc=new C(0,1,0),Gc=new C(0,0,1),Vc={type:"added"},wd={type:"removed"},Li={type:"childadded",child:null},ja={type:"childremoved",child:null};class de extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new C,e=new De,n=new Ln,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Bt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(zc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return Bc.copy(t).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zr.copy(t):Zr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(lr,Zr,this.up):Mn.lookAt(Zr,lr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}de.DEFAULT_UP=new C(0,1,0),de.DEFAULT_MATRIX_AUTO_UPDATE=!0,de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new C,Sn=new C,Qa=new C,wn=new C,Ii=new C,Di=new C,Wc=new C,to=new C,eo=new C,no=new C,io=new ae,ro=new ae,so=new ae;class Ve{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Qe.subVectors(t,e),r.cross(Qe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Qe.subVectors(r,e),Sn.subVectors(n,e),Qa.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(Sn),c=Qe.dot(Qa),l=Sn.dot(Sn),u=Sn.dot(Qa),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return io.setScalar(0),ro.setScalar(0),so.setScalar(0),io.fromBufferAttribute(t,e),ro.fromBufferAttribute(t,n),so.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(io,s.x),a.addScaledVector(ro,s.y),a.addScaledVector(so,s.z),a}static isFrontFacing(t,e,n,r){return Qe.subVectors(n,e),Sn.subVectors(t,e),Qe.cross(Sn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Qe.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ii.subVectors(r,n),Di.subVectors(s,n),to.subVectors(t,n);const c=Ii.dot(to),l=Di.dot(to);if(c<=0&&l<=0)return e.copy(n);eo.subVectors(t,r);const u=Ii.dot(eo),h=Di.dot(eo);if(u>=0&&h<=u)return e.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ii,a);no.subVectors(t,s);const p=Ii.dot(no),g=Di.dot(no);if(g>=0&&p<=g)return e.copy(s);const y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Di,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Wc.subVectors(s,r),o=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(Wc,o);const f=1/(m+y+d);return a=y*f,o=d*f,e.copy(n).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ao(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=Ga(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ao(a,s,t+1/3),this.g=ao(a,s,t),this.b=ao(a,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const n=Xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Wa(t.r),this.g=Wa(t.g),this.b=Wa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return $t.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Me(Ae.r*255,0,255))*65536+Math.round(Me(Ae.g*255,0,255))*256+Math.round(Me(Ae.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,r=Ae.g,s=Ae.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ve){$t.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,r=Ae.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(jr);const n=sr(Fn.h,jr.h,e),r=sr(Fn.s,jr.s,e),s=sr(Fn.l,jr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new kt;kt.NAMES=Xc;let bd=0;class On extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=an(),this.name="",this.type="Material",this.blending=fi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qs,this.blendDst=Ys,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ys&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new C,Qr=new nt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Je(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Je(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Je(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ha&&(t.usage=this.usage),t}}class qc extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ed=0;const We=new jt,oo=new de,Ui=new C,ke=new jn,ur=new jn,xe=new C;class fe extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rc(t)?Yc:qc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ke.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(ke.min,ur.min),ke.expandByPoint(xe),xe.addVectors(ke.max,ur.max),ke.expandByPoint(xe)):(ke.expandByPoint(ur.min),ke.expandByPoint(ur.max))}ke.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)xe.fromBufferAttribute(o,l),c&&(Ui.fromBufferAttribute(t,l),xe.add(Ui)),r=Math.max(r,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new C,c[I]=new C;const l=new C,u=new C,h=new C,d=new nt,p=new nt,g=new nt,y=new C,m=new C;function f(I,G,_){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,G),h.fromBufferAttribute(n,_),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,G),g.fromBufferAttribute(s,_),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),o[I].add(y),o[G].add(y),o[_].add(y),c[I].add(m),c[G].add(m),c[_].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,G=x.length;I<G;++I){const _=x[I],w=_.start,L=_.count;for(let D=w,k=w+L;D<k;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const v=new C,S=new C,P=new C,R=new C;function A(I){P.fromBufferAttribute(r,I),R.copy(P);const G=o[I];v.copy(G),v.sub(P.multiplyScalar(P.dot(G))).normalize(),S.crossVectors(R,G);const w=S.dot(c[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,w)}for(let I=0,G=x.length;I<G;++I){const _=x[I],w=_.start,L=_.count;for(let D=w,k=w+L;D<k;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new C,s=new C,a=new C,o=new C,c=new C,l=new C,u=new C,h=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Re(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new jt,ei=new Nc,ts=new Ri,Kc=new C,es=new C,ns=new C,is=new C,co=new C,rs=new C,Jc=new C,ss=new C;class Rt extends de{constructor(t=new fe,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(co.fromBufferAttribute(h,t),a?rs.addScaledVector(co,u):rs.addScaledVector(co.sub(e),u))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),ei.copy(t.ray).recast(t.near),!(ts.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ts,Kc)===null||ei.origin.distanceToSquared(Kc)>(t.far-t.near)**2))&&($c.copy(s).invert(),ei.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,P=v;S<P;S+=3){const R=o.getX(S),A=o.getX(S+1),I=o.getX(S+2);r=as(this,f,t,n,l,u,h,R,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const x=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=as(this,a,t,n,l,u,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,P=v;S<P;S+=3){const R=S,A=S+1,I=S+2;r=as(this,f,t,n,l,u,h,R,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const x=m,v=m+1,S=m+2;r=as(this,a,t,n,l,u,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Td(i,t,e,n,r,s,a,o){let c;if(t.side===be?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Tn,o),c===null)return null;ss.copy(o),ss.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ss);return l<e.near||l>e.far?null:{distance:l,point:ss.clone(),object:i}}function as(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,es),i.getVertexPosition(c,ns),i.getVertexPosition(l,is);const u=Td(i,t,e,n,es,ns,is,Jc);if(u){const h=new C;Ve.getBarycoord(Jc,es,ns,is,h),r&&(u.uv=Ve.getInterpolatedAttribute(r,o,c,l,h,new nt)),s&&(u.uv1=Ve.getInterpolatedAttribute(s,o,c,l,h,new nt)),a&&(u.normal=Ve.getInterpolatedAttribute(a,o,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};Ve.getNormal(es,ns,is,d.normal),u.face=d,u.barycoord=h}return u}class Xe extends fe{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function g(y,m,f,x,v,S,P,R,A,I,G){const _=S/A,w=P/I,L=S/2,D=P/2,k=R/2,q=A+1,B=I+1;let Q=0,V=0;const at=new C;for(let dt=0;dt<B;dt++){const ht=dt*w-D;for(let Nt=0;Nt<q;Nt++){const Ht=Nt*_-L;at[y]=Ht*x,at[m]=ht*v,at[f]=k,l.push(at.x,at.y,at.z),at[y]=0,at[m]=0,at[f]=R>0?1:-1,u.push(at.x,at.y,at.z),h.push(Nt/A),h.push(1-dt/I),Q+=1}}for(let dt=0;dt<I;dt++)for(let ht=0;ht<A;ht++){const Nt=d+ht+q*dt,Ht=d+ht+q*(dt+1),X=d+(ht+1)+q*(dt+1),j=d+(ht+1)+q*dt;c.push(Nt,Ht,j),c.push(Ht,X,j),V+=6}o.addGroup(p,V,G),p+=V,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=Ni(i[e]);for(const r in n)t[r]=n[r]}return t}function Ad(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Rd={clone:Ni,merge:Pe};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jc extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new C,Qc=new nt,tl=new nt;class Ue extends jc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Qc,tl),e.subVectors(tl,Qc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class Ld extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ue(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const s=new Ue(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const a=new Ue(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new Ue(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const c=new Ue(Fi,Oi,t,e);c.layers=this.layers,this.add(c);const l=new Ue(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class el extends Te{constructor(t,e,n,r,s,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:mi,super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Id extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new el(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xe(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:An});s.uniforms.tEquirect.value=e;const a=new Rt(r,s),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=$e),new Ld(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const lo=new C,Dd=new C,Ud=new Bt;class ni{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=lo.subVectors(n,e).cross(Dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ud.getNormalMatrix(t),r=this.coplanarPoint(lo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Ri,os=new C;class uo{constructor(t=new ni,e=new ni,n=new ni,r=new ni,s=new ni,a=new ni){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],f=r[12],x=r[13],v=r[14],S=r[15];if(n[0].setComponents(c-s,d-l,m-p,S-f).normalize(),n[1].setComponents(c+s,d+l,m+p,S+f).normalize(),n[2].setComponents(c+a,d+u,m+g,S+x).normalize(),n[3].setComponents(c-a,d-u,m-g,S-x).normalize(),n[4].setComponents(c-o,d-h,m-y,S-v).normalize(),e===vn)n[5].setComponents(c+o,d+h,m+y,S+v).normalize();else if(e===Gr)n[5].setComponents(o,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(os.x=r.normal.x>0?t.max.x:t.min.x,os.y=r.normal.y>0?t.max.y:t.min.y,os.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Nd(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class hr extends fe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=t/o,d=e/c,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){const x=f*d-a;for(let v=0;v<l;v++){const S=v*h-s;g.push(S,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const v=x+l*f,S=x+l*(f+1),P=x+1+l*(f+1),R=x+1+l*f;p.push(v,S,R),p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
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
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,af=`#define PI 3.141592653589793
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
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",pf=`
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
}`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uf=`PhysicalMaterial material;
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
#endif`,Nf=`struct PhysicalMaterial {
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
}`,Ff=`
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qf=`#if defined( USE_POINTS_UV )
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
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
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
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zt={alphahash_fragment:Fd,alphahash_pars_fragment:Od,alphamap_fragment:kd,alphamap_pars_fragment:Bd,alphatest_fragment:zd,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Vd,batching_pars_vertex:Wd,batching_vertex:Xd,begin_vertex:qd,beginnormal_vertex:Yd,bsdfs:$d,iridescence_fragment:Kd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:tf,color_fragment:ef,color_pars_fragment:nf,color_pars_vertex:rf,color_vertex:sf,common:af,cube_uv_reflection_fragment:of,defaultnormal_vertex:cf,displacementmap_pars_vertex:lf,displacementmap_vertex:uf,emissivemap_fragment:hf,emissivemap_pars_fragment:df,colorspace_fragment:ff,colorspace_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:gf,envmap_pars_fragment:_f,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Cf,envmap_vertex:xf,fog_vertex:yf,fog_pars_vertex:Mf,fog_fragment:Sf,fog_pars_fragment:wf,gradientmap_pars_fragment:bf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:Af,lights_pars_begin:Rf,lights_toon_fragment:Pf,lights_toon_pars_fragment:Lf,lights_phong_fragment:If,lights_phong_pars_fragment:Df,lights_physical_fragment:Uf,lights_physical_pars_fragment:Nf,lights_fragment_begin:Ff,lights_fragment_maps:Of,lights_fragment_end:kf,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Gf,map_fragment:Vf,map_pars_fragment:Wf,map_particle_fragment:Xf,map_particle_pars_fragment:qf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:$f,morphinstance_vertex:Kf,morphcolor_vertex:Jf,morphnormal_vertex:Zf,morphtarget_pars_vertex:jf,morphtarget_vertex:Qf,normal_fragment_begin:tp,normal_fragment_maps:ep,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:rp,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:cp,iridescence_pars_fragment:lp,opaque_fragment:up,packing:hp,premultiplied_alpha_fragment:dp,project_vertex:fp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:xp,shadowmap_vertex:yp,shadowmask_pars_fragment:Mp,skinbase_vertex:Sp,skinning_pars_vertex:wp,skinning_vertex:bp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:Ap,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Lp,uv_pars_fragment:Ip,uv_pars_vertex:Dp,uv_vertex:Up,worldpos_vertex:Np,background_vert:`varying vec2 vUv;
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
}`},lt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},cn={basic:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Pe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Pe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Pe([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Pe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Pe([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Pe([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Pe([lt.common,lt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Pe([lt.lights,lt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};cn.physical={uniforms:Pe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const cs={r:0,b:0,g:0},ri=new De,Fp=new jt;function Op(i,t,e,n,r,s,a){const o=new kt(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function y(x){let v=!1;const S=g(x);S===null?f(o,c):S&&S.isColor&&(f(S,1),v=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Lr)?(u===void 0&&(u=new Rt(new Xe(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Ni(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ri.copy(v.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(ri)),u.material.toneMapped=$t.getTransfer(S.colorSpace)!==ne,(h!==S||d!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Rt(new hr(2,2),new kn({name:"BackgroundMaterial",uniforms:Ni(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$t.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,v){x.getRGB(cs,Zc(i)),n.buffers.color.setClear(cs.r,cs.g,cs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(o,c)},render:y,addToRenderList:m}}function kp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(_,w,L,D,k){let q=!1;const B=h(D,L,w);s!==B&&(s=B,l(s.object)),q=p(_,D,L,k),q&&g(_,D,L,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(_,w,L,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,w,L){const D=L.wireframe===!0;let k=n[_.id];k===void 0&&(k={},n[_.id]=k);let q=k[w.id];q===void 0&&(q={},k[w.id]=q);let B=q[D];return B===void 0&&(B=d(c()),q[D]=B),B}function d(_){const w=[],L=[],D=[];for(let k=0;k<e;k++)w[k]=0,L[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:D,object:_,attributes:{},index:null}}function p(_,w,L,D){const k=s.attributes,q=w.attributes;let B=0;const Q=L.getAttributes();for(const V in Q)if(Q[V].location>=0){const dt=k[V];let ht=q[V];if(ht===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),dt===void 0||dt.attribute!==ht||ht&&dt.data!==ht.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function g(_,w,L,D){const k={},q=w.attributes;let B=0;const Q=L.getAttributes();for(const V in Q)if(Q[V].location>=0){let dt=q[V];dt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor));const ht={};ht.attribute=dt,dt&&dt.data&&(ht.data=dt.data),k[V]=ht,B++}s.attributes=k,s.attributesNum=B,s.index=D}function y(){const _=s.newAttributes;for(let w=0,L=_.length;w<L;w++)_[w]=0}function m(_){f(_,0)}function f(_,w){const L=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;L[_]=1,D[_]===0&&(i.enableVertexAttribArray(_),D[_]=1),k[_]!==w&&(i.vertexAttribDivisor(_,w),k[_]=w)}function x(){const _=s.newAttributes,w=s.enabledAttributes;for(let L=0,D=w.length;L<D;L++)w[L]!==_[L]&&(i.disableVertexAttribArray(L),w[L]=0)}function v(_,w,L,D,k,q,B){B===!0?i.vertexAttribIPointer(_,w,L,k,q):i.vertexAttribPointer(_,w,L,D,k,q)}function S(_,w,L,D){y();const k=D.attributes,q=L.getAttributes(),B=w.defaultAttributeValues;for(const Q in q){const V=q[Q];if(V.location>=0){let at=k[Q];if(at===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),at!==void 0){const dt=at.normalized,ht=at.itemSize,Nt=t.get(at);if(Nt===void 0)continue;const Ht=Nt.buffer,X=Nt.type,j=Nt.bytesPerElement,yt=X===i.INT||X===i.UNSIGNED_INT||at.gpuType===aa;if(at.isInterleavedBufferAttribute){const ot=at.data,Ct=ot.stride,Pt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)f(V.location+Ft,ot.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)m(V.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Ft=0;Ft<V.locationSize;Ft++)v(V.location+Ft,ht/V.locationSize,X,dt,Ct*j,(Pt+ht/V.locationSize*Ft)*j,yt)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)f(V.location+ot,at.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let ot=0;ot<V.locationSize;ot++)v(V.location+ot,ht/V.locationSize,X,dt,ht*j,ht/V.locationSize*ot*j,yt)}}else if(B!==void 0){const dt=B[Q];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}x()}function P(){I();for(const _ in n){const w=n[_];for(const L in w){const D=w[L];for(const k in D)u(D[k].object),delete D[k];delete w[L]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const L in w){const D=w[L];for(const k in D)u(D[k].object),delete D[k];delete w[L]}delete n[_.id]}function A(_){for(const w in n){const L=n[w];if(L[_.id]===void 0)continue;const D=L[_.id];for(const k in D)u(D[k].object),delete D[k];delete L[_.id]}}function I(){G(),a=!0,s!==r&&(s=r,l(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:G,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function Bp(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y];for(let y=0;y<d.length;y++)e.update(g,n,d[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Ke&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:R}}function Hp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ni,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const x=s?0:n,v=x*4;let S=f.clippingState||null;c.value=S,S=u(g,d,v,p);for(let P=0;P!==v;++P)S[P]=e[P];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const f=p+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==y;++v,S+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Gp(i){let t=new WeakMap;function e(a,o){return o===na?a.mapping=mi:o===ia&&(a.mapping=gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===na||o===ia)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Id(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class il extends jc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,rl=[.125,.215,.35,.446,.526,.582],si=20,ho=new il,sl=new kt;let fo=null,po=0,mo=0,go=!1;const ai=(1+Math.sqrt(5))/2,Bi=1/ai,al=[new C(-ai,Bi,0),new C(ai,Bi,0),new C(-Bi,0,ai),new C(Bi,0,ai),new C(0,ai,-Bi),new C(0,ai,Bi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class ol{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:nr,format:Ke,colorSpace:Pn,depthBuffer:!1},r=cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(s)),this._blurMaterial=Wp(s,t,e)}return r}_compileMaterial(t){const e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,r){const o=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sl),u.toneMapping=Rn,u.autoClear=!1;const p=new on({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Rt(new Xe,p);let y=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(sl),y=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;ls(r,x*v,f>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===mi||t.mapping===gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ls(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=al[(r-s-1)%al.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*si-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):si;m>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const f=[];let x=0;for(let A=0;A<si;++A){const I=A/y,G=Math.exp(-I*I/2);f.push(G),A===0?x+=G:A<m&&(x+=2*G)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[r],P=3*S*(r>v-ki?r-v+ki:0),R=4*(this._cubeSize-S);ls(e,P,R,3*S,2*S),c.setRenderTarget(e),c.render(h,ho)}}function Vp(i){const t=[],e=[],n=[];let r=i;const s=i-ki+1+rl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-ki?c=rl[a-i+ki-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,f=1,x=new Float32Array(y*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,I=R>2?0:-1,G=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(G,y*g*R),v.set(d,m*g*R);const _=[R,R,R,R,R,R];S.set(_,f*g*R)}const P=new fe;P.setAttribute("position",new Re(x,y)),P.setAttribute("uv",new Re(v,m)),P.setAttribute("faceIndex",new Re(S,f)),t.push(P),r>ki&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cl(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Wp(i,t,e){const n=new Float32Array(si),r=new C(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_o(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function ll(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function ul(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function Xp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===na||c===ia,u=c===mi||c===gi;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ol(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new ol(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Yp(i,t,e,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let v=0,S=x.length;v<S;v+=3){const P=x[v+0],R=x[v+1],A=x[v+2];d.push(P,R,R,A,A,P)}}else if(g!==void 0){const x=g.array;y=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const P=v+0,R=v+1,A=v+2;d.push(P,R,R,A,A,P)}}else return;const m=new(Rc(d)?Yc:qc)(d,1);m.version=y;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function $p(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*a,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,y){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,y,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x];for(let x=0;x<y.length;x++)e.update(f,n,y[x])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Jp(i,t,e){const n=new WeakMap,r=new ae;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let G=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",G)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let S=o.attributes.position.count*v,P=1;S>t.maxTextureSize&&(P=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*P*4*h),A=new Dc(R,S,P,h);A.type=sn,A.needsUpdate=!0;const I=v*4;for(let _=0;_<h;_++){const w=m[_],L=f[_],D=x[_],k=S*P*4*_;for(let q=0;q<w.count;q++){const B=q*I;p===!0&&(r.fromBufferAttribute(w,q),R[k+B+0]=r.x,R[k+B+1]=r.y,R[k+B+2]=r.z,R[k+B+3]=0),g===!0&&(r.fromBufferAttribute(L,q),R[k+B+4]=r.x,R[k+B+5]=r.y,R[k+B+6]=r.z,R[k+B+7]=0),y===!0&&(r.fromBufferAttribute(D,q),R[k+B+8]=r.x,R[k+B+9]=r.y,R[k+B+10]=r.z,R[k+B+11]=D.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new nt(S,P)},n.set(o,d),o.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Zp(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class hl extends Te{constructor(t,e,n,r,s,a,o,c,l,u=vi){if(u!==vi&&u!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vi&&(n=Jn),n===void 0&&u===xi&&(n=_i),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dl=new Te,fl=new hl(1,1),pl=new Dc,ml=new gd,gl=new el,_l=[],vl=[],xl=new Float32Array(16),yl=new Float32Array(9),Ml=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=_l[r];if(s===void 0&&(s=new Float32Array(r),_l[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function us(i,t){let e=vl[t];e===void 0&&(e=new Int32Array(t),vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function nm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ml.set(n),i.uniformMatrix2fv(this.addr,!1,Ml),me(e,n)}}function im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),me(e,n)}}function rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;xl.set(n),i.uniformMatrix4fv(this.addr,!1,xl),me(e,n)}}function sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function fm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fl.compareFunction=Ec,s=fl):s=dl,e.setTexture2D(t||s,r)}function pm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ml,r)}function mm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||gl,r)}function gm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||pl,r)}function _m(i){switch(i){case 5126:return jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return um;case 36295:return hm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function vm(i,t){i.uniform1fv(this.addr,t)}function xm(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function ym(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Mm(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Sm(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wm(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bm(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Em(i,t){i.uniform1iv(this.addr,t)}function Tm(i,t){i.uniform2iv(this.addr,t)}function Am(i,t){i.uniform3iv(this.addr,t)}function Rm(i,t){i.uniform4iv(this.addr,t)}function Cm(i,t){i.uniform1uiv(this.addr,t)}function Pm(i,t){i.uniform2uiv(this.addr,t)}function Lm(i,t){i.uniform3uiv(this.addr,t)}function Im(i,t){i.uniform4uiv(this.addr,t)}function Dm(i,t,e){const n=this.cache,r=t.length,s=us(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||dl,s[a])}function Um(i,t,e){const n=this.cache,r=t.length,s=us(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ml,s[a])}function Nm(i,t,e){const n=this.cache,r=t.length,s=us(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||gl,s[a])}function Fm(i,t,e){const n=this.cache,r=t.length,s=us(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||pl,s[a])}function Om(i){switch(i){case 5126:return vm;case 35664:return xm;case 35665:return ym;case 35666:return Mm;case 35674:return Sm;case 35675:return wm;case 35676:return bm;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Pm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}class km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_m(e.type)}}class Bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}}class zm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Sl(i,t){i.seq.push(t),i.map[t.id]=t}function Hm(i,t,e){const n=i.name,r=n.length;for(vo.lastIndex=0;;){const s=vo.exec(n),a=vo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Sl(e,l===void 0?new km(o,i,t):new Bm(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new zm(o),Sl(e,h)),e=h}}}class hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Hm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function wl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gm=37297;let Vm=0;function Wm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Xm(i){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(i);let n;switch(t===e?n="":t===Hr&&e===zr?n="LinearDisplayP3ToLinearSRGB":t===zr&&e===Hr&&(n="LinearSRGBToLinearDisplayP3"),i){case Pn:case kr:return[n,"LinearTransferOETF"];case ve:case za:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Wm(i.getShaderSource(t),a)}else return r}function qm(i,t){const e=Xm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ym(i,t){let e;switch(t){case Ah:e="Linear";break;case Rh:e="Reinhard";break;case Ch:e="Cineon";break;case Ph:e="ACESFilmic";break;case Ih:e="AgX";break;case Dh:e="Neutral";break;case Lh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new C;function $m(){$t.getLuminanceCoefficients(ds);const i=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Jm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function dr(i){return i!==""}function El(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(i){return i.replace(jm,t0)}const Qm=new Map;function t0(i,t){let e=zt[t];if(e===void 0){const n=Qm.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xo(e)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(i){return i.replace(e0,n0)}function n0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function i0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function r0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===gi&&(t="ENVMAP_MODE_REFRACTION"),t}function a0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ea:t="ENVMAP_BLENDING_MULTIPLY";break;case Eh:t="ENVMAP_BLENDING_MIX";break;case Th:t="ENVMAP_BLENDING_ADD";break}return t}function o0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function c0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=i0(e),l=r0(e),u=s0(e),h=a0(e),d=o0(e),p=Km(e),g=Jm(s),y=r.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),f.length>0&&(f+=`
`)):(m=[Rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),f=[Rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?Ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),$m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),a=xo(a),a=El(a,e),a=Tl(a,e),o=xo(o),o=El(o,e),o=Tl(o,e),a=Al(a),o=Al(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+a,S=x+f+o,P=wl(r,r.VERTEX_SHADER,v),R=wl(r,r.FRAGMENT_SHADER,S);r.attachShader(y,P),r.attachShader(y,R),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(w){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(y).trim(),D=r.getShaderInfoLog(P).trim(),k=r.getShaderInfoLog(R).trim();let q=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,P,R);else{const Q=bl(r,P,"vertex"),V=bl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+Q+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||k==="")&&(B=!1);B&&(w.diagnostics={runnable:q,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(P),r.deleteShader(R),I=new hs(r,y),G=Zm(r,y)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let G;this.getAttributes=function(){return G===void 0&&A(this),G};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,Gm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}let l0=0;class u0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h0(t),e.set(t,n)),n}}class h0{constructor(t){this.id=l0++,this.code=t,this.usedTimes=0}}function d0(i,t,e,n,r,s,a){const o=new kc,c=new u0,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,w,L,D,k){const q=D.fog,B=k.geometry,Q=_.isMeshStandardMaterial?D.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||Q),at=V&&V.mapping===Lr?V.image.height:null,dt=y[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Nt=ht!==void 0?ht.length:0;let Ht=0;B.morphAttributes.position!==void 0&&(Ht=1),B.morphAttributes.normal!==void 0&&(Ht=2),B.morphAttributes.color!==void 0&&(Ht=3);let X,j,yt,ot;if(dt){const Fe=cn[dt];X=Fe.vertexShader,j=Fe.fragmentShader}else X=_.vertexShader,j=_.fragmentShader,c.update(_),yt=c.getVertexShaderID(_),ot=c.getFragmentShaderID(_);const Ct=i.getRenderTarget(),Pt=k.isInstancedMesh===!0,Ft=k.isBatchedMesh===!0,Gt=!!_.map,K=!!_.matcap,T=!!V,st=!!_.aoMap,rt=!!_.lightMap,tt=!!_.bumpMap,ct=!!_.normalMap,Tt=!!_.displacementMap,mt=!!_.emissiveMap,E=!!_.metalnessMap,M=!!_.roughnessMap,O=_.anisotropy>0,Y=_.clearcoat>0,J=_.dispersion>0,$=_.iridescence>0,wt=_.sheen>0,ut=_.transmission>0,vt=O&&!!_.anisotropyMap,Wt=Y&&!!_.clearcoatMap,et=Y&&!!_.clearcoatNormalMap,xt=Y&&!!_.clearcoatRoughnessMap,Dt=$&&!!_.iridescenceMap,Ut=$&&!!_.iridescenceThicknessMap,Mt=wt&&!!_.sheenColorMap,Xt=wt&&!!_.sheenRoughnessMap,Ot=!!_.specularMap,ee=!!_.specularColorMap,U=!!_.specularIntensityMap,gt=ut&&!!_.transmissionMap,W=ut&&!!_.thicknessMap,Z=!!_.gradientMap,ft=!!_.alphaMap,_t=_.alphaTest>0,qt=!!_.alphaHash,he=!!_.extensions;let Ne=Rn;_.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const Yt={shaderID:dt,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:j,defines:_.defines,customVertexShaderID:yt,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ft,batchingColor:Ft&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Pn,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:K,envMap:T,envMapMode:T&&V.mapping,envMapCubeUVHeight:at,aoMap:st,lightMap:rt,bumpMap:tt,normalMap:ct,displacementMap:p&&Tt,emissiveMap:mt,normalMapObjectSpace:ct&&_.normalMapType===Oh,normalMapTangentSpace:ct&&_.normalMapType===Ba,metalnessMap:E,roughnessMap:M,anisotropy:O,anisotropyMap:vt,clearcoat:Y,clearcoatMap:Wt,clearcoatNormalMap:et,clearcoatRoughnessMap:xt,dispersion:J,iridescence:$,iridescenceMap:Dt,iridescenceThicknessMap:Ut,sheen:wt,sheenColorMap:Mt,sheenRoughnessMap:Xt,specularMap:Ot,specularColorMap:ee,specularIntensityMap:U,transmission:ut,transmissionMap:gt,thicknessMap:W,gradientMap:Z,opaque:_.transparent===!1&&_.blending===fi&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:_t,alphaHash:qt,combine:_.combine,mapUv:Gt&&m(_.map.channel),aoMapUv:st&&m(_.aoMap.channel),lightMapUv:rt&&m(_.lightMap.channel),bumpMapUv:tt&&m(_.bumpMap.channel),normalMapUv:ct&&m(_.normalMap.channel),displacementMapUv:Tt&&m(_.displacementMap.channel),emissiveMapUv:mt&&m(_.emissiveMap.channel),metalnessMapUv:E&&m(_.metalnessMap.channel),roughnessMapUv:M&&m(_.roughnessMap.channel),anisotropyMapUv:vt&&m(_.anisotropyMap.channel),clearcoatMapUv:Wt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&m(_.sheenRoughnessMap.channel),specularMapUv:Ot&&m(_.specularMap.channel),specularColorMapUv:ee&&m(_.specularColorMap.channel),specularIntensityMapUv:U&&m(_.specularIntensityMap.channel),transmissionMapUv:gt&&m(_.transmissionMap.channel),thicknessMapUv:W&&m(_.thicknessMap.channel),alphaMapUv:ft&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ct||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Gt||ft),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_e,flipSided:_.side===be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:he&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&_.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function x(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(v(w,_),S(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function P(_){const w=y[_.type];let L;if(w){const D=cn[w];L=Rd.clone(D.uniforms)}else L=_.uniforms;return L}function R(_,w){let L;for(let D=0,k=u.length;D<k;D++){const q=u[D];if(q.cacheKey===w){L=q,++L.usedTimes;break}}return L===void 0&&(L=new c0(i,w,_,s),u.push(L)),L}function A(_){if(--_.usedTimes===0){const w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function I(_){c.remove(_)}function G(){c.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:P,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:G}}function f0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function p0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,d,p,g,y,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=m),t++,f}function o(h,d,p,g,y,m){const f=a(h,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(h,d,p,g,y,m){const f=a(h,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||p0),n.length>1&&n.sort(d||Cl),r.length>1&&r.sort(d||Cl)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function m0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Pl,i.set(n,[a])):r>=s.length?(a=new Pl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new kt};break;case"SpotLight":e={position:new C,direction:new C,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function _0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let v0=0;function x0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function y0(i){const t=new g0,e=_0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const r=new C,s=new jt,a=new jt;function o(l){let u=0,h=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,x=0,v=0,S=0,P=0,R=0,A=0;l.sort(x0);for(let G=0,_=l.length;G<_;G++){const w=l[G],L=w.color,D=w.intensity,k=w.distance,q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=L.r*D,h+=L.g*D,d+=L.b*D;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],D);A++}else if(w.isDirectionalLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,V=e.get(w);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=w.shadow.matrix,x++}n.directional[p]=B,p++}else if(w.isSpotLight){const B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(L).multiplyScalar(D),B.distance=k,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[y]=B;const Q=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,Q.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[y]=Q.matrix,w.castShadow){const V=e.get(w);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=q,S++}y++}else if(w.isRectAreaLight){const B=t.get(w);B.color.copy(L).multiplyScalar(D),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=B,m++}else if(w.isPointLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const Q=w.shadow,V=e.get(w);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=w.shadow.matrix,v++}n.point[g]=B,g++}else if(w.isHemisphereLight){const B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(D),B.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[f]=B,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==S||I.numSpotMaps!==P||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=S,I.numSpotMaps=P,I.numLightProbes=A,n.version=v0++)}function c(l,u){let h=0,d=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const v=l[f];if(v.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(v.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function Ll(i){const t=new y0(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function M0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ll(i),t.set(r,[o])):s>=a.length?(o=new Ll(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class S0 extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class w0 extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
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
}`;function T0(i,t,e){let n=new uo;const r=new nt,s=new nt,a=new ae,o=new S0({depthPacking:Fh}),c=new w0,l={},u=e.maxTextureSize,h={[Tn]:be,[be]:Tn,[_e]:_e},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:b0,fragmentShader:E0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let f=this.type;this.render=function(R,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const G=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(An),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=f!==gn&&this.type===gn,k=f===gn&&this.type!==gn;for(let q=0,B=R.length;q<B;q++){const Q=R[q],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const at=V.getFrameExtents();if(r.multiply(at),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,V.mapSize.y=s.y)),V.map===null||D===!0||k===!0){const ht=this.type!==gn?{minFilter:Ie,magFilter:Ie}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(r.x,r.y,ht),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const dt=V.getViewportCount();for(let ht=0;ht<dt;ht++){const Nt=V.getViewport(ht);a.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),L.viewport(a),V.updateMatrices(Q,ht),n=V.getFrustum(),S(A,I,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&x(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(G,_,w)};function x(R,A){const I=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,I,p,y,null)}function v(R,A,I,G){let _=null;const w=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)_=w;else if(_=I.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=_.uuid,D=A.uuid;let k=l[L];k===void 0&&(k={},l[L]=k);let q=k[D];q===void 0&&(q=_.clone(),k[D]=q,A.addEventListener("dispose",P)),_=q}if(_.visible=A.visible,_.wireframe=A.wireframe,G===gn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=i.properties.get(_);L.light=I}return _}function S(R,A,I,G,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===gn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const D=t.update(R),k=R.material;if(Array.isArray(k)){const q=D.groups;for(let B=0,Q=q.length;B<Q;B++){const V=q[B],at=k[V.materialIndex];if(at&&at.visible){const dt=v(R,at,G,_);R.onBeforeShadow(i,R,A,I,D,dt,V),i.renderBufferDirect(I,null,D,dt,R,V),R.onAfterShadow(i,R,A,I,D,dt,V)}}}else if(k.visible){const q=v(R,k,G,_);R.onBeforeShadow(i,R,A,I,D,q,null),i.renderBufferDirect(I,null,D,q,R,null),R.onAfterShadow(i,R,A,I,D,q,null)}}const L=R.children;for(let D=0,k=L.length;D<k;D++)S(L[D],A,I,G,_)}function P(R){R.target.removeEventListener("dispose",P);for(const I in l){const G=l[I],_=R.target.uuid;_ in G&&(G[_].dispose(),delete G[_])}}}const A0={[$s]:Ks,[Js]:Qs,[Zs]:ta,[pi]:js,[Ks]:$s,[Qs]:Js,[ta]:Zs,[js]:pi};function R0(i){function t(){let U=!1;const gt=new ae;let W=null;const Z=new ae(0,0,0,0);return{setMask:function(ft){W!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),W=ft)},setLocked:function(ft){U=ft},setClear:function(ft,_t,qt,he,Ne){Ne===!0&&(ft*=he,_t*=he,qt*=he),gt.set(ft,_t,qt,he),Z.equals(gt)===!1&&(i.clearColor(ft,_t,qt,he),Z.copy(gt))},reset:function(){U=!1,W=null,Z.set(-1,0,0,0)}}}function e(){let U=!1,gt=!1,W=null,Z=null,ft=null;return{setReversed:function(_t){gt=_t},setTest:function(_t){_t?yt(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(_t){W!==_t&&!U&&(i.depthMask(_t),W=_t)},setFunc:function(_t){if(gt&&(_t=A0[_t]),Z!==_t){switch(_t){case $s:i.depthFunc(i.NEVER);break;case Ks:i.depthFunc(i.ALWAYS);break;case Js:i.depthFunc(i.LESS);break;case pi:i.depthFunc(i.LEQUAL);break;case Zs:i.depthFunc(i.EQUAL);break;case js:i.depthFunc(i.GEQUAL);break;case Qs:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=_t}},setLocked:function(_t){U=_t},setClear:function(_t){ft!==_t&&(i.clearDepth(_t),ft=_t)},reset:function(){U=!1,W=null,Z=null,ft=null}}}function n(){let U=!1,gt=null,W=null,Z=null,ft=null,_t=null,qt=null,he=null,Ne=null;return{setTest:function(Yt){U||(Yt?yt(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Yt){gt!==Yt&&!U&&(i.stencilMask(Yt),gt=Yt)},setFunc:function(Yt,Fe,En){(W!==Yt||Z!==Fe||ft!==En)&&(i.stencilFunc(Yt,Fe,En),W=Yt,Z=Fe,ft=En)},setOp:function(Yt,Fe,En){(_t!==Yt||qt!==Fe||he!==En)&&(i.stencilOp(Yt,Fe,En),_t=Yt,qt=Fe,he=En)},setLocked:function(Yt){U=Yt},setClear:function(Yt){Ne!==Yt&&(i.clearStencil(Yt),Ne=Yt)},reset:function(){U=!1,gt=null,W=null,Z=null,ft=null,_t=null,qt=null,he=null,Ne=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],p=null,g=!1,y=null,m=null,f=null,x=null,v=null,S=null,P=null,R=new kt(0,0,0),A=0,I=!1,G=null,_=null,w=null,L=null,D=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=B>=1):Q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=B>=2);let V=null,at={};const dt=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),Nt=new ae().fromArray(dt),Ht=new ae().fromArray(ht);function X(U,gt,W,Z){const ft=new Uint8Array(4),_t=i.createTexture();i.bindTexture(U,_t),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<W;qt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(gt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return _t}const j={};j[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),s.setFunc(pi),rt(!1),tt(uc),yt(i.CULL_FACE),T(An);function yt(U){l[U]!==!0&&(i.enable(U),l[U]=!0)}function ot(U){l[U]!==!1&&(i.disable(U),l[U]=!1)}function Ct(U,gt){return u[U]!==gt?(i.bindFramebuffer(U,gt),u[U]=gt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Pt(U,gt){let W=d,Z=!1;if(U){W=h.get(gt),W===void 0&&(W=[],h.set(gt,W));const ft=U.textures;if(W.length!==ft.length||W[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,qt=ft.length;_t<qt;_t++)W[_t]=i.COLOR_ATTACHMENT0+_t;W.length=ft.length,Z=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Z=!0);Z&&i.drawBuffers(W)}function Ft(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const Gt={[qn]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};Gt[uh]=i.MIN,Gt[hh]=i.MAX;const K={[dh]:i.ZERO,[fh]:i.ONE,[ph]:i.SRC_COLOR,[qs]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[Ys]:i.ONE_MINUS_SRC_ALPHA,[xh]:i.ONE_MINUS_DST_COLOR,[_h]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[wh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function T(U,gt,W,Z,ft,_t,qt,he,Ne,Yt){if(U===An){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(yt(i.BLEND),g=!0),U!==oh){if(U!==y||Yt!==I){if((m!==qn||v!==qn)&&(i.blendEquation(i.FUNC_ADD),m=qn,v=qn),Yt)switch(U){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,x=null,S=null,P=null,R.set(0,0,0),A=0,y=U,I=Yt}return}ft=ft||gt,_t=_t||W,qt=qt||Z,(gt!==m||ft!==v)&&(i.blendEquationSeparate(Gt[gt],Gt[ft]),m=gt,v=ft),(W!==f||Z!==x||_t!==S||qt!==P)&&(i.blendFuncSeparate(K[W],K[Z],K[_t],K[qt]),f=W,x=Z,S=_t,P=qt),(he.equals(R)===!1||Ne!==A)&&(i.blendColor(he.r,he.g,he.b,Ne),R.copy(he),A=Ne),y=U,I=!1}function st(U,gt){U.side===_e?ot(i.CULL_FACE):yt(i.CULL_FACE);let W=U.side===be;gt&&(W=!W),rt(W),U.blending===fi&&U.transparent===!1?T(An):T(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(U){G!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),G=U)}function tt(U){U!==rh?(yt(i.CULL_FACE),U!==_&&(U===uc?i.cullFace(i.BACK):U===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),_=U}function ct(U){U!==w&&(q&&i.lineWidth(U),w=U)}function Tt(U,gt,W){U?(yt(i.POLYGON_OFFSET_FILL),(L!==gt||D!==W)&&(i.polygonOffset(gt,W),L=gt,D=W)):ot(i.POLYGON_OFFSET_FILL)}function mt(U){U?yt(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+k-1),V!==U&&(i.activeTexture(U),V=U)}function M(U,gt,W){W===void 0&&(V===null?W=i.TEXTURE0+k-1:W=V);let Z=at[W];Z===void 0&&(Z={type:void 0,texture:void 0},at[W]=Z),(Z.type!==U||Z.texture!==gt)&&(V!==W&&(i.activeTexture(W),V=W),i.bindTexture(U,gt||j[U]),Z.type=U,Z.texture=gt)}function O(){const U=at[V];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(U){Nt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Nt.copy(U))}function Mt(U){Ht.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ht.copy(U))}function Xt(U,gt){let W=c.get(gt);W===void 0&&(W=new WeakMap,c.set(gt,W));let Z=W.get(U);Z===void 0&&(Z=i.getUniformBlockIndex(gt,U.name),W.set(U,Z))}function Ot(U,gt){const Z=c.get(gt).get(U);o.get(gt)!==Z&&(i.uniformBlockBinding(gt,Z,U.__bindingPointIndex),o.set(gt,Z))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},V=null,at={},u={},h=new WeakMap,d=[],p=null,g=!1,y=null,m=null,f=null,x=null,v=null,S=null,P=null,R=new kt(0,0,0),A=0,I=!1,G=null,_=null,w=null,L=null,D=null,Nt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:yt,disable:ot,bindFramebuffer:Ct,drawBuffers:Pt,useProgram:Ft,setBlending:T,setMaterial:st,setFlipSided:rt,setCullFace:tt,setLineWidth:ct,setPolygonOffset:Tt,setScissorTest:mt,activeTexture:E,bindTexture:M,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:xt,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Wt,texStorage3D:et,texSubImage2D:$,texSubImage3D:wt,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Ut,viewport:Mt,reset:ee}}function Il(i,t,e,n){const r=C0(n);switch(e){case vc:return i*t;case yc:return i*t;case Mc:return i*t*2;case la:return i*t/r.components*r.byteLength;case ua:return i*t/r.components*r.byteLength;case Sc:return i*t*2/r.components*r.byteLength;case ha:return i*t*2/r.components*r.byteLength;case xc:return i*t*3/r.components*r.byteLength;case Ke:return i*t*4/r.components*r.byteLength;case da:return i*t*4/r.components*r.byteLength;case Dr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(t,8)/2;case _a:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Or:case Ua:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wc:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C0(i){switch(i){case _n:case mc:return{byteLength:1,components:1};case er:case gc:case nr:return{byteLength:2,components:1};case oa:case ca:return{byteLength:2,components:4};case Jn:case aa:case sn:return{byteLength:4,components:1};case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function P0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return p?new OffscreenCanvas(E,M):Vr("canvas")}function y(E,M,O){let Y=1;const J=mt(E);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(Y*J.width),wt=Math.floor(Y*J.height);h===void 0&&(h=g($,wt));const ut=M?g($,wt):h;return ut.width=$,ut.height=wt,ut.getContext("2d").drawImage(E,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+wt+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==Ie&&E.minFilter!==$e}function f(E){i.generateMipmap(E)}function x(E,M,O,Y,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=M;if(M===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),M===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){const wt=J?Br:$t.getTransfer(Y);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=wt===ne?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(E,M){let O;return E?M===null||M===Jn||M===_i?O=i.DEPTH24_STENCIL8:M===sn?O=i.DEPTH32F_STENCIL8:M===er&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===_i?O=i.DEPTH_COMPONENT24:M===sn?O=i.DEPTH_COMPONENT32F:M===er&&(O=i.DEPTH_COMPONENT16),O}function S(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ie&&E.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function P(E){const M=E.target;M.removeEventListener("dispose",P),A(M),M.isVideoTexture&&u.delete(M)}function R(E){const M=E.target;M.removeEventListener("dispose",R),G(M)}function A(E){const M=n.get(E);if(M.__webglInit===void 0)return;const O=E.source,Y=d.get(O);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(E),Object.keys(Y).length===0&&d.delete(O)}n.remove(E)}function I(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const O=E.source,Y=d.get(O);delete Y[M.__cacheKey],a.memory.textures--}function G(E){const M=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=E.textures;for(let Y=0,J=O.length;Y<J;Y++){const $=n.get(O[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(E)}let _=0;function w(){_=0}function L(){const E=_;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),_+=1,E}function D(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function k(E,M){const O=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(O,E,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function q(E,M){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Ht(O,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function B(E,M){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Ht(O,E,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function Q(E,M){const O=n.get(E);if(E.version>0&&O.__version!==E.version){X(O,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const V={[Yn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},at={[Ie]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},dt={[kh]:i.NEVER,[Wh]:i.ALWAYS,[Bh]:i.LESS,[Ec]:i.LEQUAL,[zh]:i.EQUAL,[Vh]:i.GEQUAL,[Hh]:i.GREATER,[Gh]:i.NOTEQUAL};function ht(E,M){if(M.type===sn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$e||M.magFilter===sa||M.magFilter===Ir||M.magFilter===Kn||M.minFilter===$e||M.minFilter===sa||M.minFilter===Ir||M.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,V[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,V[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,V[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,at[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ie||M.minFilter!==Ir&&M.minFilter!==Kn||M.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Nt(E,M){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",P));const Y=M.source;let J=d.get(Y);J===void 0&&(J={},d.set(Y,J));const $=D(M);if($!==E.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[$].usedTimes++;const wt=J[E.__cacheKey];wt!==void 0&&(J[E.__cacheKey].usedTimes--,wt.usedTimes===0&&I(M)),E.__cacheKey=$,E.__webglTexture=J[$].texture}return O}function Ht(E,M,O){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Nt(E,M),$=M.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+O);const wt=n.get($);if($.version!==wt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const ut=$t.getPrimaries($t.workingColorSpace),vt=M.colorSpace===Cn?null:$t.getPrimaries(M.colorSpace),Wt=M.colorSpace===Cn||ut===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let et=y(M.image,!1,r.maxTextureSize);et=Tt(M,et);const xt=s.convert(M.format,M.colorSpace),Dt=s.convert(M.type);let Ut=x(M.internalFormat,xt,Dt,M.colorSpace,M.isVideoTexture);ht(Y,M);let Mt;const Xt=M.mipmaps,Ot=M.isVideoTexture!==!0,ee=wt.__version===void 0||J===!0,U=$.dataReady,gt=S(M,et);if(M.isDepthTexture)Ut=v(M.format===xi,M.type),ee&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Ut,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ut,et.width,et.height,0,xt,Dt,null));else if(M.isDataTexture)if(Xt.length>0){Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,gt,Ut,Xt[0].width,Xt[0].height);for(let W=0,Z=Xt.length;W<Z;W++)Mt=Xt[W],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,xt,Dt,Mt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,Mt.width,Mt.height,0,xt,Dt,Mt.data);M.generateMipmaps=!1}else Ot?(ee&&e.texStorage2D(i.TEXTURE_2D,gt,Ut,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,xt,Dt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,et.width,et.height,0,xt,Dt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ot&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ut,Xt[0].width,Xt[0].height,et.depth);for(let W=0,Z=Xt.length;W<Z;W++)if(Mt=Xt[W],M.format!==Ke)if(xt!==null)if(Ot){if(U)if(M.layerUpdates.size>0){const ft=Il(Mt.width,Mt.height,M.format,M.type);for(const _t of M.layerUpdates){const qt=Mt.data.subarray(_t*ft/Mt.data.BYTES_PER_ELEMENT,(_t+1)*ft/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,_t,Mt.width,Mt.height,1,xt,qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,et.depth,xt,Mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ut,Mt.width,Mt.height,et.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,et.depth,xt,Dt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ut,Mt.width,Mt.height,et.depth,0,xt,Dt,Mt.data)}else{Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,gt,Ut,Xt[0].width,Xt[0].height);for(let W=0,Z=Xt.length;W<Z;W++)Mt=Xt[W],M.format!==Ke?xt!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,xt,Dt,Mt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,Mt.width,Mt.height,0,xt,Dt,Mt.data)}else if(M.isDataArrayTexture)if(Ot){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ut,et.width,et.height,et.depth),U)if(M.layerUpdates.size>0){const W=Il(et.width,et.height,M.format,M.type);for(const Z of M.layerUpdates){const ft=et.data.subarray(Z*W/et.data.BYTES_PER_ELEMENT,(Z+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,xt,Dt,ft)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Dt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,et.width,et.height,et.depth,0,xt,Dt,et.data);else if(M.isData3DTexture)Ot?(ee&&e.texStorage3D(i.TEXTURE_3D,gt,Ut,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Dt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,et.width,et.height,et.depth,0,xt,Dt,et.data);else if(M.isFramebufferTexture){if(ee)if(Ot)e.texStorage2D(i.TEXTURE_2D,gt,Ut,et.width,et.height);else{let W=et.width,Z=et.height;for(let ft=0;ft<gt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ut,W,Z,0,xt,Dt,null),W>>=1,Z>>=1}}else if(Xt.length>0){if(Ot&&ee){const W=mt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ut,W.width,W.height)}for(let W=0,Z=Xt.length;W<Z;W++)Mt=Xt[W],Ot?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt,Dt,Mt):e.texImage2D(i.TEXTURE_2D,W,Ut,xt,Dt,Mt);M.generateMipmaps=!1}else if(Ot){if(ee){const W=mt(et);e.texStorage2D(i.TEXTURE_2D,gt,Ut,W.width,W.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Dt,et)}else e.texImage2D(i.TEXTURE_2D,0,Ut,xt,Dt,et);m(M)&&f(Y),wt.__version=$.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function X(E,M,O){if(M.image.length!==6)return;const Y=Nt(E,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const $=n.get(J);if(J.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);const wt=$t.getPrimaries($t.workingColorSpace),ut=M.colorSpace===Cn?null:$t.getPrimaries(M.colorSpace),vt=M.colorSpace===Cn||wt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let Z=0;Z<6;Z++)!Wt&&!et?xt[Z]=y(M.image[Z],!0,r.maxCubemapSize):xt[Z]=et?M.image[Z].image:M.image[Z],xt[Z]=Tt(M,xt[Z]);const Dt=xt[0],Ut=s.convert(M.format,M.colorSpace),Mt=s.convert(M.type),Xt=x(M.internalFormat,Ut,Mt,M.colorSpace),Ot=M.isVideoTexture!==!0,ee=$.__version===void 0||Y===!0,U=J.dataReady;let gt=S(M,Dt);ht(i.TEXTURE_CUBE_MAP,M);let W;if(Wt){Ot&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Xt,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){W=xt[Z].mipmaps;for(let ft=0;ft<W.length;ft++){const _t=W[ft];M.format!==Ke?Ut!==null?Ot?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,0,0,_t.width,_t.height,Ut,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,Xt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,0,0,_t.width,_t.height,Ut,Mt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,Xt,_t.width,_t.height,0,Ut,Mt,_t.data)}}}else{if(W=M.mipmaps,Ot&&ee){W.length>0&&gt++;const Z=mt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Xt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xt[Z].width,xt[Z].height,Ut,Mt,xt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,xt[Z].width,xt[Z].height,0,Ut,Mt,xt[Z].data);for(let ft=0;ft<W.length;ft++){const qt=W[ft].image[Z].image;Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,0,0,qt.width,qt.height,Ut,Mt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,Xt,qt.width,qt.height,0,Ut,Mt,qt.data)}}else{Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ut,Mt,xt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xt,Ut,Mt,xt[Z]);for(let ft=0;ft<W.length;ft++){const _t=W[ft];Ot?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,0,0,Ut,Mt,_t.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,Xt,Ut,Mt,_t.image[Z])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),$.__version=J.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function j(E,M,O,Y,J,$){const wt=s.convert(O.format,O.colorSpace),ut=s.convert(O.type),vt=x(O.internalFormat,wt,ut,O.colorSpace);if(!n.get(M).__hasExternalTextures){const et=Math.max(1,M.width>>$),xt=Math.max(1,M.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,$,vt,et,xt,M.depth,0,wt,ut,null):e.texImage2D(J,$,vt,et,xt,0,wt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,n.get(O).__webglTexture,0,rt(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,n.get(O).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(E,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,$=v(M.stencilBuffer,J),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=rt(M);tt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,$,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,E)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const $=Y[J],wt=s.convert($.format,$.colorSpace),ut=s.convert($.type),vt=x($.internalFormat,wt,ut,$.colorSpace),Wt=rt(M);O&&tt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,vt,M.width,M.height):tt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const Y=n.get(M.depthTexture).__webglTexture,J=rt(M);if(M.depthTexture.format===vi)tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===xi)tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ct(E){const M=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ot(M.__webglFramebuffer,E)}else if(O){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),yt(M.__webglDepthbuffer[Y],E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),yt(M.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(E,M,O){const Y=n.get(E);M!==void 0&&j(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ct(E)}function Ft(E){const M=E.texture,O=n.get(E),Y=n.get(M);E.addEventListener("dispose",R);const J=E.textures,$=E.isWebGLCubeRenderTarget===!0,wt=J.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let vt=0;vt<M.mipmaps.length;vt++)O.__webglFramebuffer[ut][vt]=i.createFramebuffer()}else O.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)O.__webglFramebuffer[ut]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ut=0,vt=J.length;ut<vt;ut++){const Wt=n.get(J[ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&tt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){const vt=J[ut];O.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ut]);const Wt=s.convert(vt.format,vt.colorSpace),et=s.convert(vt.type),xt=x(vt.internalFormat,Wt,et,vt.colorSpace,E.isXRRenderTarget===!0),Dt=rt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,O.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ht(i.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)j(O.__webglFramebuffer[ut][vt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else j(O.__webglFramebuffer[ut],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ut=0,vt=J.length;ut<vt;ut++){const Wt=J[ut],et=n.get(Wt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),ht(i.TEXTURE_2D,Wt),j(O.__webglFramebuffer,E,Wt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Y.__webglTexture),ht(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)j(O.__webglFramebuffer[vt],E,M,i.COLOR_ATTACHMENT0,ut,vt);else j(O.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ut,0);m(M)&&f(ut),e.unbindTexture()}E.depthBuffer&&Ct(E)}function Gt(E){const M=E.textures;for(let O=0,Y=M.length;O<Y;O++){const J=M[O];if(m(J)){const $=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(J).__webglTexture;e.bindTexture($,wt),f($),e.unbindTexture()}}}const K=[],T=[];function st(E){if(E.samples>0){if(tt(E)===!1){const M=E.textures,O=E.width,Y=E.height;let J=i.COLOR_BUFFER_BIT;const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(E),ut=M.length>1;if(ut)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);const Wt=n.get(M[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,i.NEAREST),c===!0&&(K.length=0,T.length=0,K.push(i.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(K.push($),T.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);const Wt=n.get(M[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function rt(E){return Math.min(r.maxSamples,E.samples)}function tt(E){const M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(E){const M=a.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function Tt(E,M){const O=E.colorSpace,Y=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Pn&&O!==Cn&&($t.getTransfer(O)===ne?(Y!==Ke||J!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=w,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=Pt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=j,this.useMultisampledRTT=tt}function L0(i,t){function e(n,r=Cn){let s;const a=$t.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mc)return i.BYTE;if(n===gc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===vc)return i.ALPHA;if(n===xc)return i.RGB;if(n===Ke)return i.RGBA;if(n===yc)return i.LUMINANCE;if(n===Mc)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===la)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===Sc)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===Dr||n===Ur||n===Nr||n===Fr)if(a===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===va||n===xa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_a||n===va)return a===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xa)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ma||n===Sa||n===wa||n===ba||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Da)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ya)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Or||n===Ua||n===Na)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Or)return a===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Fa||n===Oa||n===ka)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Or)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class I0 extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ln extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D0={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
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

}`;class F0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Te,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:U0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O0 extends Mi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const y=new F0,m=e.getContextAttributes();let f=null,x=null;const v=[],S=[],P=new nt;let R=null;const A=new Ue;A.layers.enable(1),A.viewport=new ae;const I=new Ue;I.layers.enable(2),I.viewport=new ae;const G=[A,I],_=new I0;_.layers.enable(1),_.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=v[X];return j===void 0&&(j=new yo,v[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=v[X];return j===void 0&&(j=new yo,v[X]=j),j.getGripSpace()},this.getHand=function(X){let j=v[X];return j===void 0&&(j=new yo,v[X]=j),j.getHandSpace()};function D(X){const j=S.indexOf(X.inputSource);if(j===-1)return;const yt=v[j];yt!==void 0&&(yt.update(X.inputSource,X.frame,l||a),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let X=0;X<v.length;X++){const j=S[X];j!==null&&(S[X]=null,v[X].disconnect(j))}w=null,L=null,y.reset(),t.setRenderTarget(f),p=null,d=null,h=null,r=null,x=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Ke,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,yt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?xi:vi,yt=m.stencil?_i:Jn);const Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(Ct),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Zn(d.textureWidth,d.textureHeight,{format:Ke,type:_n,depthTexture:new hl(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ht.setContext(r),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(X){for(let j=0;j<X.removed.length;j++){const yt=X.removed[j],ot=S.indexOf(yt);ot>=0&&(S[ot]=null,v[ot].disconnect(yt))}for(let j=0;j<X.added.length;j++){const yt=X.added[j];let ot=S.indexOf(yt);if(ot===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=S.length){S.push(yt),ot=Pt;break}else if(S[Pt]===null){S[Pt]=yt,ot=Pt;break}if(ot===-1)break}const Ct=v[ot];Ct&&Ct.connect(yt)}}const B=new C,Q=new C;function V(X,j,yt){B.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(yt.matrixWorld);const ot=B.distanceTo(Q),Ct=j.projectionMatrix.elements,Pt=yt.projectionMatrix.elements,Ft=Ct[14]/(Ct[10]-1),Gt=Ct[14]/(Ct[10]+1),K=(Ct[9]+1)/Ct[5],T=(Ct[9]-1)/Ct[5],st=(Ct[8]-1)/Ct[0],rt=(Pt[8]+1)/Pt[0],tt=Ft*st,ct=Ft*rt,Tt=ot/(-st+rt),mt=Tt*-st;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(mt),X.translateZ(Tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ct[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const E=Ft+Tt,M=Gt+Tt,O=tt-mt,Y=ct+(ot-mt),J=K*Gt/M*E,$=T*Gt/M*E;X.projectionMatrix.makePerspective(O,Y,J,$,E,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function at(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let j=X.near,yt=X.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(yt=y.depthFar)),_.near=I.near=A.near=j,_.far=I.far=A.far=yt,(w!==_.near||L!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,L=_.far);const ot=X.parent,Ct=_.cameras;at(_,ot);for(let Pt=0;Pt<Ct.length;Pt++)at(Ct[Pt],ot);Ct.length===2?V(_,A,I):_.projectionMatrix.copy(A.projectionMatrix),dt(X,_,ot)};function dt(X,j,yt){yt===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=rr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let ht=null;function Nt(X,j){if(u=j.getViewerPose(l||a),g=j,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let ot=!1;yt.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let Pt=0;Pt<yt.length;Pt++){const Ft=yt[Pt];let Gt=null;if(p!==null)Gt=p.getViewport(Ft);else{const T=h.getViewSubImage(d,Ft);Gt=T.viewport,Pt===0&&(t.setRenderTargetTextures(x,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(x))}let K=G[Pt];K===void 0&&(K=new Ue,K.layers.enable(Pt),K.viewport=new ae,G[Pt]=K),K.matrix.fromArray(Ft.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ft.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Pt===0&&(_.matrix.copy(K.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(K)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Pt=h.getDepthInformation(yt[0]);Pt&&Pt.isValid&&Pt.texture&&y.init(t,Pt,r.renderState)}}for(let yt=0;yt<v.length;yt++){const ot=S[yt],Ct=v[yt];ot!==null&&Ct!==void 0&&Ct.update(ot,j,l||a)}ht&&ht(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ht=new nl;Ht.setAnimationLoop(Nt),this.setAnimationLoop=function(X){ht=X},this.dispose=function(){}}}const oi=new De,k0=new jt;function B0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Zc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,oi.copy(S),oi.x*=-1,oi.y*=-1,oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(oi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function z0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function l(x,v){let S=r[x.id];S===void 0&&(g(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",m));const P=v.program;n.updateUBOMapping(x,P);const R=t.render.frame;s[x.id]!==R&&(d(x),s[x.id]=R)}function u(x){const v=h();x.__bindingPointIndex=v;const S=i.createBuffer(),P=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],S=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,A=S.length;R<A;R++){const I=Array.isArray(S[R])?S[R]:[S[R]];for(let G=0,_=I.length;G<_;G++){const w=I[G];if(p(w,R,G,P)===!0){const L=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let q=0;q<D.length;q++){const B=D[q],Q=y(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,L+k,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,S,P){const R=x.value,A=v+"_"+S;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const I=P[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(x){const v=x.uniforms;let S=0;const P=16;for(let A=0,I=v.length;A<I;A++){const G=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,w=G.length;_<w;_++){const L=G[_],D=Array.isArray(L.value)?L.value:[L.value];for(let k=0,q=D.length;k<q;k++){const B=D[k],Q=y(B),V=S%P,at=V%Q.boundary,dt=V+at;S+=at,dt!==0&&P-dt<Q.storage&&(S+=P-dt),L.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Q.storage}}}const R=S%P;return R>0&&(S+=P-R),x.__size=S,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class H0{constructor(t={}){const{canvas:e=od(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=Rn,this.toneMappingExposure=1;const v=this;let S=!1,P=0,R=0,A=null,I=-1,G=null;const _=new ae,w=new ae;let L=null;const D=new kt(0);let k=0,q=e.width,B=e.height,Q=1,V=null,at=null;const dt=new ae(0,0,q,B),ht=new ae(0,0,q,B);let Nt=!1;const Ht=new uo;let X=!1,j=!1;const yt=new jt,ot=new jt,Ct=new C,Pt=new ae,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function K(){return A===null?Q:1}let T=n;function st(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xs}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",_t,!1),T===null){const N="webgl2";if(T=st(N,b),T===null)throw st(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let rt,tt,ct,Tt,mt,E,M,O,Y,J,$,wt,ut,vt,Wt,et,xt,Dt,Ut,Mt,Xt,Ot,ee,U;function gt(){rt=new qp(T),rt.init(),Ot=new L0(T,rt),tt=new zp(T,rt,t,Ot),ct=new R0(T),tt.reverseDepthBuffer&&ct.buffers.depth.setReversed(!0),Tt=new Kp(T),mt=new f0,E=new P0(T,rt,ct,mt,tt,Ot,Tt),M=new Gp(v),O=new Xp(v),Y=new Nd(T),ee=new kp(T,Y),J=new Yp(T,Y,Tt,ee),$=new Zp(T,J,Y,Tt),Ut=new Jp(T,tt,E),et=new Hp(mt),wt=new d0(v,M,O,rt,tt,ee,et),ut=new B0(v,mt),vt=new m0,Wt=new M0(rt),Dt=new Op(v,M,O,ct,$,d,c),xt=new T0(v,$,tt),U=new z0(T,Tt,tt,ct),Mt=new Bp(T,rt,Tt),Xt=new $p(T,rt,Tt),Tt.programs=wt.programs,v.capabilities=tt,v.extensions=rt,v.properties=mt,v.renderLists=vt,v.shadowMap=xt,v.state=ct,v.info=Tt}gt();const W=new O0(v,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(q,B,!1))},this.getSize=function(b){return b.set(q,B)},this.setSize=function(b,N,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,B=N,e.width=Math.floor(b*Q),e.height=Math.floor(N*Q),z===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(q*Q,B*Q).floor()},this.setDrawingBufferSize=function(b,N,z){q=b,B=N,Q=z,e.width=Math.floor(b*z),e.height=Math.floor(N*z),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(dt)},this.setViewport=function(b,N,z,H){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,N,z,H),ct.viewport(_.copy(dt).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(ht)},this.setScissor=function(b,N,z,H){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,N,z,H),ct.scissor(w.copy(ht).multiplyScalar(Q).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(b){ct.setScissorTest(Nt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(b=!0,N=!0,z=!0){let H=0;if(b){let F=!1;if(A!==null){const it=A.texture.format;F=it===da||it===ha||it===ua}if(F){const it=A.texture.type,pt=it===_n||it===Jn||it===er||it===_i||it===oa||it===ca,St=Dt.getClearColor(),bt=Dt.getClearAlpha(),Lt=St.r,It=St.g,Et=St.b;pt?(p[0]=Lt,p[1]=It,p[2]=Et,p[3]=bt,T.clearBufferuiv(T.COLOR,0,p)):(g[0]=Lt,g[1]=It,g[2]=Et,g[3]=bt,T.clearBufferiv(T.COLOR,0,g))}else H|=T.COLOR_BUFFER_BIT}N&&(H|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),vt.dispose(),Wt.dispose(),mt.dispose(),M.dispose(),O.dispose(),$.dispose(),ee.dispose(),U.dispose(),wt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ju),W.removeEventListener("sessionend",Zu),di.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Tt.autoReset,N=xt.enabled,z=xt.autoUpdate,H=xt.needsUpdate,F=xt.type;gt(),Tt.autoReset=b,xt.enabled=N,xt.autoUpdate=z,xt.needsUpdate=H,xt.type=F}function _t(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const N=b.target;N.removeEventListener("dispose",qt),he(N)}function he(b){Ne(b),mt.remove(b)}function Ne(b){const N=mt.get(b).programs;N!==void 0&&(N.forEach(function(z){wt.releaseProgram(z)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,z,H,F,it){N===null&&(N=Ft);const pt=F.isMesh&&F.matrixWorld.determinant()<0,St=K2(b,N,z,H,F);ct.setMaterial(H,pt);let bt=z.index,Lt=1;if(H.wireframe===!0){if(bt=J.getWireframeAttribute(z),bt===void 0)return;Lt=2}const It=z.drawRange,Et=z.attributes.position;let Qt=It.start*Lt,ie=(It.start+It.count)*Lt;it!==null&&(Qt=Math.max(Qt,it.start*Lt),ie=Math.min(ie,(it.start+it.count)*Lt)),bt!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,bt.count)):Et!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Et.count));const ce=ie-Qt;if(ce<0||ce===1/0)return;ee.setup(F,H,St,z,bt);let He,Kt=Mt;if(bt!==null&&(He=Y.get(bt),Kt=Xt,Kt.setIndex(He)),F.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*K()),Kt.setMode(T.LINES)):Kt.setMode(T.TRIANGLES);else if(F.isLine){let At=H.linewidth;At===void 0&&(At=1),ct.setLineWidth(At*K()),F.isLineSegments?Kt.setMode(T.LINES):F.isLineLoop?Kt.setMode(T.LINE_LOOP):Kt.setMode(T.LINE_STRIP)}else F.isPoints?Kt.setMode(T.POINTS):F.isSprite&&Kt.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Kt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const At=F._multiDrawStarts,we=F._multiDrawCounts,Jt=F._multiDrawCount,nn=bt?Y.get(bt).bytesPerElement:1,tr=mt.get(H).currentProgram.getUniforms();for(let Ge=0;Ge<Jt;Ge++)tr.setValue(T,"_gl_DrawID",Ge),Kt.render(At[Ge]/nn,we[Ge])}else if(F.isInstancedMesh)Kt.renderInstances(Qt,ce,F.count);else if(z.isInstancedBufferGeometry){const At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,we=Math.min(z.instanceCount,At);Kt.renderInstances(Qt,ce,we)}else Kt.render(Qt,ce)};function Yt(b,N,z){b.transparent===!0&&b.side===_e&&b.forceSinglePass===!1?(b.side=be,b.needsUpdate=!0,Ws(b,N,z),b.side=Tn,b.needsUpdate=!0,Ws(b,N,z),b.side=_e):Ws(b,N,z)}this.compile=function(b,N,z=null){z===null&&(z=b),m=Wt.get(z),m.init(N),x.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==z&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const it=F.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){const St=it[pt];Yt(St,z,F),H.add(St)}else Yt(it,z,F),H.add(it)}),x.pop(),m=null,H},this.compileAsync=function(b,N,z=null){const H=this.compile(b,N,z);return new Promise(F=>{function it(){if(H.forEach(function(pt){mt.get(pt).currentProgram.isReady()&&H.delete(pt)}),H.size===0){F(b);return}setTimeout(it,10)}rt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Fe=null;function En(b){Fe&&Fe(b)}function Ju(){di.stop()}function Zu(){di.start()}const di=new nl;di.setAnimationLoop(En),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(b){Fe=b,W.setAnimationLoop(b),b===null?di.stop():di.start()},W.addEventListener("sessionstart",Ju),W.addEventListener("sessionend",Zu),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,A),m=Wt.get(b,x.length),m.init(N),x.push(m),ot.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ht.setFromProjectionMatrix(ot),j=this.localClippingEnabled,X=et.init(this.clippingPlanes,j),y=vt.get(b,f.length),y.init(),f.push(y),W.enabled===!0&&W.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&sc(it,N,-1/0,v.sortObjects)}sc(b,N,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(V,at),Gt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Gt&&Dt.addToRenderList(y,b),this.info.render.frame++,X===!0&&et.beginShadows();const z=m.state.shadowsArray;xt.render(z,b,N),X===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=y.opaque,F=y.transmissive;if(m.setupLights(),N.isArrayCamera){const it=N.cameras;if(F.length>0)for(let pt=0,St=it.length;pt<St;pt++){const bt=it[pt];Qu(H,F,b,bt)}Gt&&Dt.render(b);for(let pt=0,St=it.length;pt<St;pt++){const bt=it[pt];ju(y,b,bt,bt.viewport)}}else F.length>0&&Qu(H,F,b,N),Gt&&Dt.render(b),ju(y,b,N);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,N),ee.resetDefaultState(),I=-1,G=null,x.pop(),x.length>0?(m=x[x.length-1],X===!0&&et.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function sc(b,N,z,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ht.intersectsSprite(b)){H&&Pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const pt=$.update(b),St=b.material;St.visible&&y.push(b,pt,St,z,Pt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ht.intersectsObject(b))){const pt=$.update(b),St=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pt.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(St)){const bt=pt.groups;for(let Lt=0,It=bt.length;Lt<It;Lt++){const Et=bt[Lt],Qt=St[Et.materialIndex];Qt&&Qt.visible&&y.push(b,pt,Qt,z,Pt.z,Et)}}else St.visible&&y.push(b,pt,St,z,Pt.z,null)}}const it=b.children;for(let pt=0,St=it.length;pt<St;pt++)sc(it[pt],N,z,H)}function ju(b,N,z,H){const F=b.opaque,it=b.transmissive,pt=b.transparent;m.setupLightsView(z),X===!0&&et.setGlobalState(v.clippingPlanes,z),H&&ct.viewport(_.copy(H)),F.length>0&&Vs(F,N,z),it.length>0&&Vs(it,N,z),pt.length>0&&Vs(pt,N,z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Qu(b,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Zn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?nr:_n,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const it=m.state.transmissionRenderTarget[H.id],pt=H.viewport||_;it.setSize(pt.z,pt.w);const St=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(D),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&Dt.render(z);const bt=v.toneMapping;v.toneMapping=Rn;const Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&et.setGlobalState(v.clippingPlanes,H),Vs(b,z,H),E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it),rt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Et=0,Qt=N.length;Et<Qt;Et++){const ie=N[Et],ce=ie.object,He=ie.geometry,Kt=ie.material,At=ie.group;if(Kt.side===_e&&ce.layers.test(H.layers)){const we=Kt.side;Kt.side=be,Kt.needsUpdate=!0,th(ce,z,H,He,Kt,At),Kt.side=we,Kt.needsUpdate=!0,It=!0}}It===!0&&(E.updateMultisampleRenderTarget(it),E.updateRenderTargetMipmap(it))}v.setRenderTarget(St),v.setClearColor(D,k),Lt!==void 0&&(H.viewport=Lt),v.toneMapping=bt}function Vs(b,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,it=b.length;F<it;F++){const pt=b[F],St=pt.object,bt=pt.geometry,Lt=H===null?pt.material:H,It=pt.group;St.layers.test(z.layers)&&th(St,N,z,bt,Lt,It)}}function th(b,N,z,H,F,it){b.onBeforeRender(v,N,z,H,F,it),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,N,z,H,b,it),F.transparent===!0&&F.side===_e&&F.forceSinglePass===!1?(F.side=be,F.needsUpdate=!0,v.renderBufferDirect(z,N,H,F,b,it),F.side=Tn,F.needsUpdate=!0,v.renderBufferDirect(z,N,H,F,b,it),F.side=_e):v.renderBufferDirect(z,N,H,F,b,it),b.onAfterRender(v,N,z,H,F,it)}function Ws(b,N,z){N.isScene!==!0&&(N=Ft);const H=mt.get(b),F=m.state.lights,it=m.state.shadowsArray,pt=F.state.version,St=wt.getParameters(b,F.state,it,N,z),bt=wt.getProgramCacheKey(St);let Lt=H.programs;H.environment=b.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(b.isMeshStandardMaterial?O:M).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",qt),Lt=new Map,H.programs=Lt);let It=Lt.get(bt);if(It!==void 0){if(H.currentProgram===It&&H.lightsStateVersion===pt)return nh(b,St),It}else St.uniforms=wt.getUniforms(b),b.onBeforeCompile(St,v),It=wt.acquireProgram(St,bt),Lt.set(bt,It),H.uniforms=St.uniforms;const Et=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Et.clippingPlanes=et.uniform),nh(b,St),H.needsLights=Z2(b),H.lightsStateVersion=pt,H.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=It,H.uniformsList=null,It}function eh(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function nh(b,N){const z=mt.get(b);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function K2(b,N,z,H,F){N.isScene!==!0&&(N=Ft),E.resetTextureUnits();const it=N.fog,pt=H.isMeshStandardMaterial?N.environment:null,St=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Pn,bt=(H.isMeshStandardMaterial?O:M).get(H.envMap||pt),Lt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!z.morphAttributes.position,Qt=!!z.morphAttributes.normal,ie=!!z.morphAttributes.color;let ce=Rn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ce=v.toneMapping);const He=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Kt=He!==void 0?He.length:0,At=mt.get(H),we=m.state.lights;if(X===!0&&(j===!0||b!==G)){const Ye=b===G&&H.id===I;et.setState(H,b,Ye)}let Jt=!1;H.version===At.__version?(At.needsLights&&At.lightsStateVersion!==we.state.version||At.outputColorSpace!==St||F.isBatchedMesh&&At.batching===!1||!F.isBatchedMesh&&At.batching===!0||F.isBatchedMesh&&At.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&At.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&At.instancing===!1||!F.isInstancedMesh&&At.instancing===!0||F.isSkinnedMesh&&At.skinning===!1||!F.isSkinnedMesh&&At.skinning===!0||F.isInstancedMesh&&At.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&At.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&At.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&At.instancingMorph===!1&&F.morphTexture!==null||At.envMap!==bt||H.fog===!0&&At.fog!==it||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==Lt||At.vertexTangents!==It||At.morphTargets!==Et||At.morphNormals!==Qt||At.morphColors!==ie||At.toneMapping!==ce||At.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,At.__version=H.version);let nn=At.currentProgram;Jt===!0&&(nn=Ws(H,N,F));let tr=!1,Ge=!1,ac=!1;const le=nn.getUniforms(),Xn=At.uniforms;if(ct.useProgram(nn.program)&&(tr=!0,Ge=!0,ac=!0),H.id!==I&&(I=H.id,Ge=!0),tr||G!==b){tt.reverseDepthBuffer?(yt.copy(b.projectionMatrix),ld(yt),ud(yt),le.setValue(T,"projectionMatrix",yt)):le.setValue(T,"projectionMatrix",b.projectionMatrix),le.setValue(T,"viewMatrix",b.matrixWorldInverse);const Ye=le.map.cameraPosition;Ye!==void 0&&Ye.setValue(T,Ct.setFromMatrixPosition(b.matrixWorld)),tt.logarithmicDepthBuffer&&le.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&le.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Ge=!0,ac=!0)}if(F.isSkinnedMesh){le.setOptional(T,F,"bindMatrix"),le.setOptional(T,F,"bindMatrixInverse");const Ye=F.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),le.setValue(T,"boneTexture",Ye.boneTexture,E))}F.isBatchedMesh&&(le.setOptional(T,F,"batchingTexture"),le.setValue(T,"batchingTexture",F._matricesTexture,E),le.setOptional(T,F,"batchingIdTexture"),le.setValue(T,"batchingIdTexture",F._indirectTexture,E),le.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(T,"batchingColorTexture",F._colorsTexture,E));const oc=z.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0)&&Ut.update(F,z,nn),(Ge||At.receiveShadow!==F.receiveShadow)&&(At.receiveShadow=F.receiveShadow,le.setValue(T,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Xn.envMap.value=bt,Xn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Xn.envMapIntensity.value=N.environmentIntensity),Ge&&(le.setValue(T,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&J2(Xn,ac),it&&H.fog===!0&&ut.refreshFogUniforms(Xn,it),ut.refreshMaterialUniforms(Xn,H,Q,B,m.state.transmissionRenderTarget[b.id]),hs.upload(T,eh(At),Xn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(hs.upload(T,eh(At),Xn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&le.setValue(T,"center",F.center),le.setValue(T,"modelViewMatrix",F.modelViewMatrix),le.setValue(T,"normalMatrix",F.normalMatrix),le.setValue(T,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ye=H.uniformsGroups;for(let cc=0,j2=Ye.length;cc<j2;cc++){const ih=Ye[cc];U.update(ih,nn),U.bind(ih,nn)}}return nn}function J2(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Z2(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,N,z){mt.get(b.texture).__webglTexture=N,mt.get(b.depthTexture).__webglTexture=z;const H=mt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const z=mt.get(b);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,z=0){A=b,P=N,R=z;let H=!0,F=null,it=!1,pt=!1;if(b){const bt=mt.get(b);if(bt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(T.FRAMEBUFFER,null),H=!1;else if(bt.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(bt.__hasExternalTextures)E.rebindTextures(b,mt.get(b.texture).__webglTexture,mt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Et=b.depthTexture;if(bt.__boundDepthTexture!==Et){if(Et!==null&&mt.has(Et)&&(b.width!==Et.image.width||b.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(pt=!0);const It=mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[N])?F=It[N][z]:F=It[N],it=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?F=mt.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?F=It[z]:F=It,_.copy(b.viewport),w.copy(b.scissor),L=b.scissorTest}else _.copy(dt).multiplyScalar(Q).floor(),w.copy(ht).multiplyScalar(Q).floor(),L=Nt;if(ct.bindFramebuffer(T.FRAMEBUFFER,F)&&H&&ct.drawBuffers(b,F),ct.viewport(_),ct.scissor(w),ct.setScissorTest(L),it){const bt=mt.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,z)}else if(pt){const bt=mt.get(b.texture),Lt=N||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,bt.__webglTexture,z||0,Lt)}I=-1},this.readRenderTargetPixels=function(b,N,z,H,F,it,pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){ct.bindFramebuffer(T.FRAMEBUFFER,St);try{const bt=b.texture,Lt=bt.format,It=bt.type;if(!tt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&z>=0&&z<=b.height-F&&T.readPixels(N,z,H,F,Ot.convert(Lt),Ot.convert(It),it)}finally{const bt=A!==null?mt.get(A).__webglFramebuffer:null;ct.bindFramebuffer(T.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(b,N,z,H,F,it,pt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){const bt=b.texture,Lt=bt.format,It=bt.type;if(!tt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-H&&z>=0&&z<=b.height-F){ct.bindFramebuffer(T.FRAMEBUFFER,St);const Et=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Et),T.bufferData(T.PIXEL_PACK_BUFFER,it.byteLength,T.STREAM_READ),T.readPixels(N,z,H,F,Ot.convert(Lt),Ot.convert(It),0);const Qt=A!==null?mt.get(A).__webglFramebuffer:null;ct.bindFramebuffer(T.FRAMEBUFFER,Qt);const ie=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await cd(T,ie,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Et),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,it),T.deleteBuffer(Et),T.deleteSync(ie),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,z=0){b.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(b.image.width*H),it=Math.floor(b.image.height*H),pt=N!==null?N.x:0,St=N!==null?N.y:0;E.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,pt,St,F,it),ct.unbindTexture()},this.copyTextureToTexture=function(b,N,z=null,H=null,F=0){b.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let it,pt,St,bt,Lt,It;z!==null?(it=z.max.x-z.min.x,pt=z.max.y-z.min.y,St=z.min.x,bt=z.min.y):(it=b.image.width,pt=b.image.height,St=0,bt=0),H!==null?(Lt=H.x,It=H.y):(Lt=0,It=0);const Et=Ot.convert(N.format),Qt=Ot.convert(N.type);E.setTexture2D(N,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);const ie=T.getParameter(T.UNPACK_ROW_LENGTH),ce=T.getParameter(T.UNPACK_IMAGE_HEIGHT),He=T.getParameter(T.UNPACK_SKIP_PIXELS),Kt=T.getParameter(T.UNPACK_SKIP_ROWS),At=T.getParameter(T.UNPACK_SKIP_IMAGES),we=b.isCompressedTexture?b.mipmaps[F]:b.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,we.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,we.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,St),T.pixelStorei(T.UNPACK_SKIP_ROWS,bt),b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,F,Lt,It,it,pt,Et,Qt,we.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,F,Lt,It,we.width,we.height,Et,we.data):T.texSubImage2D(T.TEXTURE_2D,F,Lt,It,it,pt,Et,Qt,we),T.pixelStorei(T.UNPACK_ROW_LENGTH,ie),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ce),T.pixelStorei(T.UNPACK_SKIP_PIXELS,He),T.pixelStorei(T.UNPACK_SKIP_ROWS,Kt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,At),F===0&&N.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,N,z=null,H=null,F=0){b.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0);let it,pt,St,bt,Lt,It,Et,Qt,ie;const ce=b.isCompressedTexture?b.mipmaps[F]:b.image;z!==null?(it=z.max.x-z.min.x,pt=z.max.y-z.min.y,St=z.max.z-z.min.z,bt=z.min.x,Lt=z.min.y,It=z.min.z):(it=ce.width,pt=ce.height,St=ce.depth,bt=0,Lt=0,It=0),H!==null?(Et=H.x,Qt=H.y,ie=H.z):(Et=0,Qt=0,ie=0);const He=Ot.convert(N.format),Kt=Ot.convert(N.type);let At;if(N.isData3DTexture)E.setTexture3D(N,0),At=T.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)E.setTexture2DArray(N,0),At=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);const we=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),nn=T.getParameter(T.UNPACK_SKIP_PIXELS),tr=T.getParameter(T.UNPACK_SKIP_ROWS),Ge=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ce.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ce.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,bt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Lt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,It),b.isDataTexture||b.isData3DTexture?T.texSubImage3D(At,F,Et,Qt,ie,it,pt,St,He,Kt,ce.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(At,F,Et,Qt,ie,it,pt,St,He,ce.data):T.texSubImage3D(At,F,Et,Qt,ie,it,pt,St,He,Kt,ce),T.pixelStorei(T.UNPACK_ROW_LENGTH,we),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,nn),T.pixelStorei(T.UNPACK_SKIP_ROWS,tr),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ge),F===0&&N.generateMipmaps&&T.generateMipmap(At),ct.unbindTexture()},this.initRenderTarget=function(b){mt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,ct.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===za?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===kr?"display-p3":"srgb"}}class Mo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new Mo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dl extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new De,this.environmentIntensity=1,this.environmentRotation=new De,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class G0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new C;class fs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class So extends On{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const fr=new C,Gi=new C,Vi=new C,Wi=new nt,pr=new nt,Ul=new jt,ps=new C,mr=new C,ms=new C,Nl=new nt,wo=new nt,Fl=new nt;class Ol extends de{constructor(t=new So){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new G0(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new fs(n,3,0,!1)),Hi.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Ul.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Vi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;gs(ps.set(-.5,-.5,0),Vi,a,Gi,r,s),gs(mr.set(.5,-.5,0),Vi,a,Gi,r,s),gs(ms.set(.5,.5,0),Vi,a,Gi,r,s),Nl.set(0,0),wo.set(1,0),Fl.set(1,1);let o=t.ray.intersectTriangle(ps,mr,ms,!1,fr);if(o===null&&(gs(mr.set(-.5,.5,0),Vi,a,Gi,r,s),wo.set(0,1),o=t.ray.intersectTriangle(ps,ms,mr,!1,fr),o===null))return;const c=t.ray.origin.distanceTo(fr);c<t.near||c>t.far||e.push({distance:c,point:fr.clone(),uv:Ve.getInterpolation(fr,ps,mr,ms,Nl,wo,Fl,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function gs(i,t,e,n,r,s){Wi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(pr.x=s*Wi.x-r*Wi.y,pr.y=r*Wi.x+s*Wi.y):pr.copy(Wi),i.copy(t),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(Ul)}class V0 extends Te{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Ie,u=Ie,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends Re{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new jt,Bl=new jt,_s=[],zl=new jn,W0=new jt,gr=new Rt,_r=new Ri;class X0 extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,W0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),zl.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),_r.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),t.ray.intersectsSphere(_r)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xi),Bl.multiplyMatrices(n,Xi),gr.matrixWorld=Bl,gr.raycast(t,_s);for(let a=0,o=_s.length;a<o;a++){const c=_s[a];c.instanceId=s,c.object=this,e.push(c)}_s.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new kl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new V0(new Float32Array(r*this.count),r,this.count,la,sn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bo extends On{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hl=new jt,Eo=new Nc,vs=new Ri,xs=new C;class Gl extends de{constructor(t=new fe,e=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,t.ray.intersectsSphere(vs)===!1)return;Hl.copy(r).invert(),Eo.copy(t.ray).applyMatrix4(Hl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,y=p;g<y;g++){const m=l.getX(g);xs.fromBufferAttribute(h,m),Vl(xs,m,c,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,y=p;g<y;g++)xs.fromBufferAttribute(h,g),Vl(xs,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vl(i,t,e,n,r,s,a){const o=Eo.distanceSqToPoint(i);if(o<e){const c=new C;Eo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class zn extends Te{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new nt:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,r=[],s=[],a=[],o=new C,c=new jt;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Me(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Me(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class To extends un{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new nt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class q0 extends To{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ao(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ys=new C,Ro=new Ao,Co=new Ao,Po=new Ao;class Y0 extends un{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new C){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(ys.subVectors(r[0],r[1]).add(r[0]),l=ys);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ys.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ys),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ro.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,y,m),Co.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,y,m),Po.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Co.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Po.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ro.calc(c),Co.calc(c),Po.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new C().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wl(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function $0(i,t){const e=1-i;return e*e*t}function K0(i,t){return 2*(1-i)*i*t}function J0(i,t){return i*i*t}function vr(i,t,e,n){return $0(i,t)+K0(i,e)+J0(i,n)}function Z0(i,t){const e=1-i;return e*e*e*t}function j0(i,t){const e=1-i;return 3*e*e*i*t}function Q0(i,t){return 3*(1-i)*i*i*t}function t1(i,t){return i*i*i*t}function xr(i,t,e,n,r){return Z0(i,t)+j0(i,e)+Q0(i,n)+t1(i,r)}class Xl extends un{constructor(t=new nt,e=new nt,n=new nt,r=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new nt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,r.x,s.x,a.x,o.x),xr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e1 extends un{constructor(t=new C,e=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,r.x,s.x,a.x,o.x),xr(t,r.y,s.y,a.y,o.y),xr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ql extends un{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n1 extends un{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yl extends un{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(vr(t,r.x,s.x,a.x),vr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class i1 extends un{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(vr(t,r.x,s.x,a.x),vr(t,r.y,s.y,a.y),vr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Wl(o,c.x,l.x,u.x,h.x),Wl(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new nt().fromArray(r))}return this}}var Lo=Object.freeze({__proto__:null,ArcCurve:q0,CatmullRomCurve3:Y0,CubicBezierCurve:Xl,CubicBezierCurve3:e1,EllipseCurve:To,LineCurve:ql,LineCurve3:n1,QuadraticBezierCurve:Yl,QuadraticBezierCurve3:i1,SplineCurve:$l});class r1 extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Lo[r.type]().fromJSON(r))}return this}}class Kl extends r1{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ql(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Yl(this.currentPoint.clone(),new nt(t,e),new nt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Xl(this.currentPoint.clone(),new nt(t,e),new nt(n,r),new nt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $l(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new To(t,e,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qe extends fe{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const y=[],m=n/2;let f=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(p,2));function x(){const S=new C,P=new C;let R=0;const A=(e-t)/n;for(let I=0;I<=s;I++){const G=[],_=I/s,w=_*(e-t)+t;for(let L=0;L<=r;L++){const D=L/r,k=D*c+o,q=Math.sin(k),B=Math.cos(k);P.x=w*q,P.y=-_*n+m,P.z=w*B,h.push(P.x,P.y,P.z),S.set(q,A,B).normalize(),d.push(S.x,S.y,S.z),p.push(D,1-_),G.push(g++)}y.push(G)}for(let I=0;I<r;I++)for(let G=0;G<s;G++){const _=y[G][I],w=y[G+1][I],L=y[G+1][I+1],D=y[G][I+1];t>0&&(u.push(_,w,D),R+=3),e>0&&(u.push(w,L,D),R+=3)}l.addGroup(f,R,0),f+=R}function v(S){const P=g,R=new nt,A=new C;let I=0;const G=S===!0?t:e,_=S===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const w=g;for(let L=0;L<=r;L++){const k=L/r*c+o,q=Math.cos(k),B=Math.sin(k);A.x=G*B,A.y=m*_,A.z=G*q,h.push(A.x,A.y,A.z),d.push(0,_,0),R.x=q*.5+.5,R.y=B*.5*_+.5,p.push(R.x,R.y),g++}for(let L=0;L<r;L++){const D=P+L,k=w+L;S===!0?u.push(k,k+1,D):u.push(k+1,k,D),I+=3}l.addGroup(f,I,S===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yr extends qe{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new yr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ms extends fe{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(s.slice(),3)),this.setAttribute("uv",new te(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,S=new C,P=new C;for(let R=0;R<e.length;R+=3)p(e[R+0],v),p(e[R+1],S),p(e[R+2],P),c(v,S,P,x)}function c(x,v,S,P){const R=P+1,A=[];for(let I=0;I<=R;I++){A[I]=[];const G=x.clone().lerp(S,I/R),_=v.clone().lerp(S,I/R),w=R-I;for(let L=0;L<=w;L++)L===0&&I===R?A[I][L]=G:A[I][L]=G.clone().lerp(_,L/w)}for(let I=0;I<R;I++)for(let G=0;G<2*(R-I)-1;G++){const _=Math.floor(G/2);G%2===0?(d(A[I][_+1]),d(A[I+1][_]),d(A[I][_])):(d(A[I][_+1]),d(A[I+1][_+1]),d(A[I+1][_]))}}function l(x){const v=new C;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const x=new C;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,P=f(x)/Math.PI+.5;a.push(S,1-P)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){const v=a[x+0],S=a[x+2],P=a[x+4],R=Math.max(v,S,P),A=Math.min(v,S,P);R>.9&&A<.1&&(v<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const x=new C,v=new C,S=new C,P=new C,R=new nt,A=new nt,I=new nt;for(let G=0,_=0;G<s.length;G+=9,_+=6){x.set(s[G+0],s[G+1],s[G+2]),v.set(s[G+3],s[G+4],s[G+5]),S.set(s[G+6],s[G+7],s[G+8]),R.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),P.copy(x).add(v).add(S).divideScalar(3);const w=m(P);y(R,_+0,x,w),y(A,_+2,v,w),y(I,_+4,S,w)}}function y(x,v,S,P){P<0&&x.x===1&&(a[v]=x.x-1),S.x===0&&S.z===0&&(a[v]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.vertices,t.indices,t.radius,t.details)}}class qi extends Kl{constructor(t){super(t),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Kl().fromJSON(r))}return this}}const s1={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Jl(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,h,d,p;if(n&&(s=u1(i,t,s,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<r;g+=e)h=i[g],d=i[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return Mr(s,a,e,o,c,p,0),a}};function Jl(i,t,e,n,r){let s,a;if(r===M1(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Ql(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Ql(s,i[s],i[s+1],a);return a&&Ss(a,a.next)&&(wr(a),a=a.next),a}function ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ss(e,e.next)||re(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&m1(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?o1(i,n,r,s):a1(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),wr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=c1(ci(i),t,e),Mr(i,t,e,n,r,s,2)):a===2&&l1(i,t,e,n,r,s):Mr(ci(i),t,e,n,r,s,1);break}}}function a1(i){const t=i.prev,e=i,n=i.next;if(re(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,d=r>s?r>a?r:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Yi(r,o,s,c,a,l,g.x,g.y)&&re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o1(i,t,e,n){const r=i.prev,s=i,a=i.next;if(re(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,y=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,f=Io(p,g,t,e,n),x=Io(y,m,t,e,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=f&&S&&S.z<=x;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Yi(o,u,c,h,l,d,v.x,v.y)&&re(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Yi(o,u,c,h,l,d,S.x,S.y)&&re(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Yi(o,u,c,h,l,d,v.x,v.y)&&re(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Yi(o,u,c,h,l,d,S.x,S.y)&&re(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function c1(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Ss(r,s)&&Zl(r,n,n.next,s)&&Sr(r,s)&&Sr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),wr(n),wr(n.next),n=i=s),n=n.next}while(n!==i);return ci(n)}function l1(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&v1(a,o)){let c=jl(a,o);a=ci(a,a.next),c=ci(c,c.next),Mr(a,t,e,n,r,s,0),Mr(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function u1(i,t,e,n){const r=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=Jl(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(_1(l));for(r.sort(h1),s=0;s<r.length;s++)e=d1(r[s],e);return e}function h1(i,t){return i.x-t.x}function d1(i,t){const e=f1(i,t);if(!e)return t;const n=jl(e,i);return ci(n,n.next),ci(e,e.next)}function f1(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Yi(a<l?s:n,a,c,l,a<l?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),Sr(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&p1(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function p1(i,t){return re(i.prev,i,t.prev)<0&&re(t.next,i,i.next)<0}function m1(i,t,e,n){let r=i;do r.z===0&&(r.z=Io(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,g1(r)}function g1(i){let t,e,n,r,s,a,o,c,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function Io(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yi(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function v1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!x1(i,t)&&(Sr(i,t)&&Sr(t,i)&&y1(i,t)&&(re(i.prev,i,t.prev)||re(i,t.prev,t))||Ss(i,t)&&re(i.prev,i,i.next)>0&&re(t.prev,t,t.next)>0)}function re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ss(i,t){return i.x===t.x&&i.y===t.y}function Zl(i,t,e,n){const r=bs(re(i,t,e)),s=bs(re(i,t,n)),a=bs(re(e,n,i)),o=bs(re(e,n,t));return!!(r!==s&&a!==o||r===0&&ws(i,e,t)||s===0&&ws(i,n,t)||a===0&&ws(e,i,n)||o===0&&ws(e,t,n))}function ws(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bs(i){return i>0?1:i<0?-1:0}function x1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return re(i.prev,i,i.next)<0?re(i,t,i.next)>=0&&re(i,i.prev,t)>=0:re(i,t,i.prev)<0||re(i,i.next,t)<0}function y1(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jl(i,t){const e=new Do(i.i,i.x,i.y),n=new Do(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ql(i,t,e,n){const r=new Do(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Do(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M1(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Hn{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Hn.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];tu(t),eu(n,t);let a=t.length;e.forEach(tu);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,eu(n,e[c]);const o=s1.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function tu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function eu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $i extends fe{constructor(t=new qi([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:S1;let v,S=!1,P,R,A,I;f&&(v=f.getSpacedPoints(u),S=!0,d=!1,P=f.computeFrenetFrames(u,!1),R=new C,A=new C,I=new C),d||(m=0,p=0,g=0,y=0);const G=o.extractPoints(l);let _=G.shape;const w=G.holes;if(!Hn.isClockWise(_)){_=_.reverse();for(let K=0,T=w.length;K<T;K++){const st=w[K];Hn.isClockWise(st)&&(w[K]=st.reverse())}}const D=Hn.triangulateShape(_,w),k=_;for(let K=0,T=w.length;K<T;K++){const st=w[K];_=_.concat(st)}function q(K,T,st){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(T,st)}const B=_.length,Q=D.length;function V(K,T,st){let rt,tt,ct;const Tt=K.x-T.x,mt=K.y-T.y,E=st.x-K.x,M=st.y-K.y,O=Tt*Tt+mt*mt,Y=Tt*M-mt*E;if(Math.abs(Y)>Number.EPSILON){const J=Math.sqrt(O),$=Math.sqrt(E*E+M*M),wt=T.x-mt/J,ut=T.y+Tt/J,vt=st.x-M/$,Wt=st.y+E/$,et=((vt-wt)*M-(Wt-ut)*E)/(Tt*M-mt*E);rt=wt+Tt*et-K.x,tt=ut+mt*et-K.y;const xt=rt*rt+tt*tt;if(xt<=2)return new nt(rt,tt);ct=Math.sqrt(xt/2)}else{let J=!1;Tt>Number.EPSILON?E>Number.EPSILON&&(J=!0):Tt<-Number.EPSILON?E<-Number.EPSILON&&(J=!0):Math.sign(mt)===Math.sign(M)&&(J=!0),J?(rt=-mt,tt=Tt,ct=Math.sqrt(O)):(rt=Tt,tt=mt,ct=Math.sqrt(O/2))}return new nt(rt/ct,tt/ct)}const at=[];for(let K=0,T=k.length,st=T-1,rt=K+1;K<T;K++,st++,rt++)st===T&&(st=0),rt===T&&(rt=0),at[K]=V(k[K],k[st],k[rt]);const dt=[];let ht,Nt=at.concat();for(let K=0,T=w.length;K<T;K++){const st=w[K];ht=[];for(let rt=0,tt=st.length,ct=tt-1,Tt=rt+1;rt<tt;rt++,ct++,Tt++)ct===tt&&(ct=0),Tt===tt&&(Tt=0),ht[rt]=V(st[rt],st[ct],st[Tt]);dt.push(ht),Nt=Nt.concat(ht)}for(let K=0;K<m;K++){const T=K/m,st=p*Math.cos(T*Math.PI/2),rt=g*Math.sin(T*Math.PI/2)+y;for(let tt=0,ct=k.length;tt<ct;tt++){const Tt=q(k[tt],at[tt],rt);ot(Tt.x,Tt.y,-st)}for(let tt=0,ct=w.length;tt<ct;tt++){const Tt=w[tt];ht=dt[tt];for(let mt=0,E=Tt.length;mt<E;mt++){const M=q(Tt[mt],ht[mt],rt);ot(M.x,M.y,-st)}}}const Ht=g+y;for(let K=0;K<B;K++){const T=d?q(_[K],Nt[K],Ht):_[K];S?(A.copy(P.normals[0]).multiplyScalar(T.x),R.copy(P.binormals[0]).multiplyScalar(T.y),I.copy(v[0]).add(A).add(R),ot(I.x,I.y,I.z)):ot(T.x,T.y,0)}for(let K=1;K<=u;K++)for(let T=0;T<B;T++){const st=d?q(_[T],Nt[T],Ht):_[T];S?(A.copy(P.normals[K]).multiplyScalar(st.x),R.copy(P.binormals[K]).multiplyScalar(st.y),I.copy(v[K]).add(A).add(R),ot(I.x,I.y,I.z)):ot(st.x,st.y,h/u*K)}for(let K=m-1;K>=0;K--){const T=K/m,st=p*Math.cos(T*Math.PI/2),rt=g*Math.sin(T*Math.PI/2)+y;for(let tt=0,ct=k.length;tt<ct;tt++){const Tt=q(k[tt],at[tt],rt);ot(Tt.x,Tt.y,h+st)}for(let tt=0,ct=w.length;tt<ct;tt++){const Tt=w[tt];ht=dt[tt];for(let mt=0,E=Tt.length;mt<E;mt++){const M=q(Tt[mt],ht[mt],rt);S?ot(M.x,M.y+v[u-1].y,v[u-1].x+st):ot(M.x,M.y,h+st)}}}X(),j();function X(){const K=r.length/3;if(d){let T=0,st=B*T;for(let rt=0;rt<Q;rt++){const tt=D[rt];Ct(tt[2]+st,tt[1]+st,tt[0]+st)}T=u+m*2,st=B*T;for(let rt=0;rt<Q;rt++){const tt=D[rt];Ct(tt[0]+st,tt[1]+st,tt[2]+st)}}else{for(let T=0;T<Q;T++){const st=D[T];Ct(st[2],st[1],st[0])}for(let T=0;T<Q;T++){const st=D[T];Ct(st[0]+B*u,st[1]+B*u,st[2]+B*u)}}n.addGroup(K,r.length/3-K,0)}function j(){const K=r.length/3;let T=0;yt(k,T),T+=k.length;for(let st=0,rt=w.length;st<rt;st++){const tt=w[st];yt(tt,T),T+=tt.length}n.addGroup(K,r.length/3-K,1)}function yt(K,T){let st=K.length;for(;--st>=0;){const rt=st;let tt=st-1;tt<0&&(tt=K.length-1);for(let ct=0,Tt=u+m*2;ct<Tt;ct++){const mt=B*ct,E=B*(ct+1),M=T+rt+mt,O=T+tt+mt,Y=T+tt+E,J=T+rt+E;Pt(M,O,Y,J)}}}function ot(K,T,st){c.push(K),c.push(T),c.push(st)}function Ct(K,T,st){Ft(K),Ft(T),Ft(st);const rt=r.length/3,tt=x.generateTopUV(n,r,rt-3,rt-2,rt-1);Gt(tt[0]),Gt(tt[1]),Gt(tt[2])}function Pt(K,T,st,rt){Ft(K),Ft(T),Ft(rt),Ft(T),Ft(st),Ft(rt);const tt=r.length/3,ct=x.generateSideWallUV(n,r,tt-6,tt-3,tt-2,tt-1);Gt(ct[0]),Gt(ct[1]),Gt(ct[3]),Gt(ct[1]),Gt(ct[2]),Gt(ct[3])}function Ft(K){r.push(c[K*3+0]),r.push(c[K*3+1]),r.push(c[K*3+2])}function Gt(K){s.push(K.x),s.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return w1(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Lo[r.type]().fromJSON(r)),new $i(n,t.options)}}const S1={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],u=t[r*3+1];return[new nt(s,a),new nt(o,c),new nt(l,u)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[r*3],p=t[r*3+1],g=t[r*3+2],y=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new nt(a,1-c),new nt(l,1-h),new nt(d,1-g),new nt(y,1-f)]:[new nt(o,1-c),new nt(u,1-h),new nt(p,1-g),new nt(m,1-f)]}};function w1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class br extends Ms{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new br(t.radius,t.detail)}}class Es extends Ms{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Es(t.radius,t.detail)}}class Uo extends fe{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=t;const d=(e-t)/r,p=new C,g=new nt;for(let y=0;y<=r;y++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let y=0;y<r;y++){const m=y*(n+1);for(let f=0;f<n;f++){const x=f+m,v=x,S=x+n+1,P=x+n+2,R=x+1;o.push(v,S,R),o.push(S,P,R)}}this.setIndex(o),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ts extends fe{constructor(t=new qi([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(s,3)),this.setAttribute("uv",new te(a,2));function l(u){const h=r.length/3,d=u.extractPoints(e);let p=d.shape;const g=d.holes;Hn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const x=g[m];Hn.isClockWise(x)===!0&&(g[m]=x.reverse())}const y=Hn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const x=g[m];p=p.concat(x)}for(let m=0,f=p.length;m<f;m++){const x=p[m];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,f=y.length;m<f;m++){const x=y[m],v=x[0]+h,S=x[1]+h,P=x[2]+h;n.push(v,S,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return b1(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new Ts(n,t.curveSegments)}}function b1(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class tn extends fe{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new C,d=new C,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let S=0;f===0&&a===0?S=.5/e:f===n&&c===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const R=P/e;h.x=-t*Math.cos(r+R*s)*Math.sin(a+v*o),h.y=t*Math.cos(a+v*o),h.z=t*Math.sin(r+R*s)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(R+S,1-v),x.push(l++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const v=u[f][x+1],S=u[f][x],P=u[f+1][x],R=u[f+1][x+1];(f!==0||a>0)&&p.push(v,S,R),(f!==n-1||c<Math.PI)&&p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ye extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Er extends On{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nu extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class No extends nu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fo=new jt,iu=new C,ru=new C;class E1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ru),e.updateMatrixWorld(),Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class T1 extends E1{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oo extends nu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new T1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs),(function(){var i="[native-gamepad-bridge]",t=typeof window.__p5NativeHost<"u"&&window.__p5NativeHost===!0||typeof window.webkit<"u"&&window.webkit&&window.webkit.messageHandlers;if(!t)return;var e={connected:!1,timestamp:0,buttons:[],axes:[]};function n(){return{pressed:!1,touched:!1,value:0}}function r(o){if(o==null)return n();if(typeof o=="boolean")return{pressed:o,touched:o,value:o?1:0};if(typeof o=="number"){var c=o>.5;return{pressed:c,touched:c,value:o}}if(typeof o=="object"){var l="p"in o?!!o.p:"pressed"in o?!!o.pressed:!1,u=typeof o.v=="number"?o.v:typeof o.value=="number"?o.value:l?1:0;return{pressed:l,touched:l,value:u}}return n()}function s(){for(var o=new Array(17),c=0;c<17;c++)o[c]=r(e.buttons&&e.buttons[c]);var l=[0,0,0,0];if(e.axes&&e.axes.length)for(var u=0;u<Math.min(4,e.axes.length);u++){var h=e.axes[u];l[u]=typeof h=="number"&&!isNaN(h)?h:0}return{id:"Native iOS Gamepad (GCController bridge)",index:0,connected:e.connected,timestamp:e.timestamp,mapping:"standard",axes:l,buttons:o,vibrationActuator:null,hapticActuators:[]}}window.__nativeGamepadLastRaw=null,window.__nativeGamepadUpdateCount=0,window.__nativeGamepadUpdate=function(o){o&&(e.buttons=Array.isArray(o.buttons)?o.buttons:[],e.axes=Array.isArray(o.axes)?o.axes:[],e.connected=!0,e.timestamp=typeof performance<"u"&&performance.now?performance.now():Date.now(),window.__nativeGamepadLastRaw=o,window.__nativeGamepadUpdateCount++)},window.__nativeGamepadConnection=function(o){var c=e.connected;if(e.connected=!!o,e.connected||(e.buttons=[],e.axes=[]),e.connected!==c){var l=e.connected?"gamepadconnected":"gamepaddisconnected",u=new Event(l);u.gamepad=s(),window.dispatchEvent(u)}};var a=typeof navigator.getGamepads=="function"?navigator.getGamepads.bind(navigator):null;navigator.getGamepads=function(){if(e.connected)return[s(),null,null,null];if(a)try{return a()}catch{return[null,null,null,null]}return[null,null,null,null]},window.__nativeGamepadBridgeReady=!0,console.log(i,"active: iOS host detected")})();const A1=60,R1=.5,C1=5e3,su=1e6,au=2e6;function P1(){const i=new Dl;i.background=new kt(131850),i.add(new No(6328512,2105392,.55)),i.fog=new Mo(131850,su,au);const t=new Oo(16777215,1.1);return t.position.set(40,30,20),i.add(t),i}function L1(){return new Ue(A1,window.innerWidth/window.innerHeight,R1,C1)}const ou=Object.freeze({maxThrottleAccel:18,reverseThrottleAccel:12,maxSpeed:60,yawRate:1.4,pitchRate:1.4,rollRate:2,arcadeDampingRate:.6,hackRadius:8}),Ce={...ou};function I1(){Object.assign(Ce,ou)}const D1=15659509,U1=8161430,N1=1259630,F1=3108832,O1=16106818,cu=4828159;function lu(i){const t=new qi;i==="stripe"?(t.moveTo(.15,.34),t.lineTo(.7,.13),t.lineTo(.7,.02),t.lineTo(.15,.17)):(t.moveTo(.15,.17),t.lineTo(.7,.02),t.lineTo(.7,-.32),t.lineTo(.15,-.48)),t.closePath();const e=new $i(t,{depth:.045,bevelEnabled:!1});return e.rotateX(Math.PI/2),e.translate(0,.0225,0),e}function k1(){const i=new qi;i.moveTo(.26,.02),i.lineTo(-.06,.48),i.lineTo(-.38,.12),i.lineTo(-.34,-.12),i.lineTo(-.08,-.32),i.closePath();const t=new $i(i,{depth:.05,bevelEnabled:!1});return t.rotateY(-Math.PI/2),t.translate(.025,0,0),t}function B1(i,t){const e=new qi;e.moveTo(0,0),e.lineTo(-.06,t),e.lineTo(-.46,0),e.closePath();const n=new $i(e,{depth:.035,bevelEnabled:!1});return n.rotateY(-Math.PI/2),n.translate(.0175,0,0),n}function z1(){const i=new ln,t=new ye({color:D1,roughness:.42,metalness:.45,emissive:790550,side:_e}),e=new ye({color:U1,roughness:.6,metalness:.5,emissive:329740,side:_e}),n=new ye({color:N1,roughness:.08,metalness:.6,emissive:662586,side:_e}),r=new ye({color:F1,roughness:.35,metalness:.45,emissive:662602,side:_e}),s=new ye({color:O1,roughness:.3,metalness:.55,emissive:2759936,side:_e}),a=new ye({color:cu,roughness:.3,metalness:.2,emissive:cu,emissiveIntensity:1.4,side:_e}),o=new qe(.22,.18,1.05,6);o.rotateX(Math.PI/2);const c=new Rt(o,t);c.scale.set(1.3,.7,1),c.position.z=-.05,i.add(c);const l=new yr(.22,.92,6);l.rotateX(Math.PI/2);const u=new Rt(l,t);u.scale.set(1.3,.7,1),u.position.z=.935,i.add(u);const h=new Rt(new Xe(.42,.09,.92),e);h.position.set(0,-.16,-.05),i.add(h);const d=new Rt(new tn(.19,18,12),n);d.scale.set(.86,.6,1.7),d.position.set(0,.13,.22),i.add(d);const p=new Rt(B1(.46,.36),t);p.position.set(0,.12,-.2),i.add(p);const g=new Rt(new Xe(.04,.08,.13),s);g.position.set(0,.47,-.29),i.add(g);for(const f of[1,-1]){const x=new ln;x.add(new Rt(lu("main"),t)),x.add(new Rt(lu("stripe"),r));const v=new Rt(k1(),t);v.position.set(.69,0,-.08),x.add(v);const S=new Rt(new Xe(.06,.5,.05),r);S.position.set(.69,.08,.12),S.rotation.x=-.5,x.add(S);const P=new qe(.028,.04,.56,10);P.rotateX(Math.PI/2);const R=new Rt(P,e);R.position.set(.69,0,.3),x.add(R);const A=new Rt(new qe(.03,.02,.15,10),s);A.rotation.x=Math.PI/2,A.position.set(.69,0,.62),x.add(A);const I=new Rt(new Xe(.16,.13,.4),a);I.position.set(.28,-.02,-.28),x.add(I),x.position.set(f*.16,0,-.05),f===-1&&(x.scale.x=-1),x.rotation.z=f*.14,i.add(x)}const y=new on({color:9425151,transparent:!0,opacity:.85,blending:rn,depthWrite:!1}),m=[];for(const f of[-.12,.12]){const x=new qe(.12,.095,.36,8);x.rotateX(Math.PI/2);const v=new Rt(x,e);v.position.set(f,-.03,-.66),i.add(v);const S=new qe(.082,.082,.07,8);S.rotateX(Math.PI/2);const P=new Rt(S,a);P.position.set(f,-.03,-.82),i.add(P);const R=new yr(.08,.38,14);R.rotateX(-Math.PI/2);const A=new Rt(R,y);A.position.set(f,-.03,-1.04),A.visible=!1,m.push(A),i.add(A)}return{mesh:i,velocity:new C,arcadeDamping:!1,glows:m,glowMat:y,flame:0,braking:!0}}const ko=new C,uu=new Ln,hu=new C,H1=.25;function G1(i,t,e){Bo(i.mesh.quaternion,ko.set(1,0,0),t.pitch*Ce.pitchRate*e),Bo(i.mesh.quaternion,ko.set(0,1,0),t.yaw*Ce.yawRate*e),Bo(i.mesh.quaternion,ko.set(0,0,1),t.roll*Ce.rollRate*e),i.mesh.quaternion.normalize();const n=t.throttle>=H1;if(V1(i,n?t.throttle:0,e),!n){i.velocity.set(0,0,0),i.braking=!0;return}i.braking=!1,hu.set(0,0,1).applyQuaternion(i.mesh.quaternion);const r=t.throttle*Ce.maxThrottleAccel;if(i.velocity.addScaledVector(hu,r*e),i.arcadeDamping){const s=Math.exp(-Ce.arcadeDampingRate*e);i.velocity.multiplyScalar(s)}i.velocity.lengthSq()>Ce.maxSpeed*Ce.maxSpeed&&i.velocity.setLength(Ce.maxSpeed),i.mesh.position.addScaledVector(i.velocity,e)}function V1(i,t,e){const n=t>0?t:0,r=n>i.flame?18:11;i.flame+=(n-i.flame)*Math.min(1,r*e),i.flame<.002&&(i.flame=0);const s=i.flame>0,a=s?.85+.15*Math.sin(performance.now()*.05):1;i.glowMat.opacity=.85*i.flame*a;for(const o of i.glows)o.visible=s,o.scale.set(i.flame,i.flame,(.4+i.flame)*a)}function Bo(i,t,e){e!==0&&(uu.setFromAxisAngle(t,e),i.multiply(uu))}const zo=12e3,Ho=1200;function du(){const i=new Float32Array(zo*3),t=new Float32Array(zo*3);for(let s=0;s<zo;s++){const a=Math.random(),o=Math.random(),c=2*Math.PI*a,l=Math.acos(2*o-1),u=Math.sin(l),h=Ho*u*Math.cos(c),d=Ho*u*Math.sin(c),p=Ho*Math.cos(l);i[s*3+0]=h,i[s*3+1]=d,i[s*3+2]=p;const g=.85+Math.random()*.15,y=Math.random()*.1;t[s*3+0]=g-y,t[s*3+1]=g-y*.5,t[s*3+2]=g}const e=new fe;e.setAttribute("position",new Re(i,3)),e.setAttribute("color",new Re(t,3));const n=new bo({size:1.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1}),r=new Gl(e,n);return r.frustumCulled=!1,r}function fu(i,t){i.position.copy(t.position)}const Go=250,Tr={zNear:80,zFar:480,xHalf:70,yHalf:45},W1=1.2,X1=4.5,q1=.4;function en(i,t){return i+Math.random()*(t-i)}function Y1(){return Math.random()<.5?-1:1}function $1(){const i=new br(1,0),t=new ye({color:9074021,roughness:.95,metalness:.05,flatShading:!0}),e=new X0(i,t,Go);e.frustumCulled=!1;const n=[],r=new jt,s=new Ln,a=new C,o=new C;for(let l=0;l<Go;l++){const u=en(W1,X1);o.set(en(-70,Tr.xHalf),en(-45,Tr.yHalf),en(Tr.zNear,Tr.zFar)),a.setScalar(u),s.setFromEuler(new De(en(0,Math.PI*2),en(0,Math.PI*2),en(0,Math.PI*2))),r.compose(o,s,a),e.setMatrixAt(l,r),n.push({position:o.clone(),radius:u*1.05,spinAxis:new C(en(-1,1),en(-1,1),en(-1,1)).normalize(),spinRate:en(.05,q1)*Y1(),rotation:s.clone()})}e.instanceMatrix.needsUpdate=!0;function c(l){const u=new Ln;for(let h=0;h<Go;h++){const d=n[h];u.setFromAxisAngle(d.spinAxis,d.spinRate*l),d.rotation.premultiply(u),a.setScalar(d.radius/1.05),r.compose(d.position,d.rotation,a),e.setMatrixAt(h,r)}e.instanceMatrix.needsUpdate=!0}return{mesh:e,instances:n,update:c,volume:{...Tr}}}const pu=new C(0,0,700),Vo=60;function K1(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),r=n.createLinearGradient(0,0,0,512);r.addColorStop(0,"#c97648"),r.addColorStop(.5,"#b15a30"),r.addColorStop(1,"#7a3a1c"),n.fillStyle=r,n.fillRect(0,0,1024,512);for(let a=0;a<320;a++){const o=Math.random()*1024,c=Math.random()*512,l=8+Math.random()*80,u=.05+Math.random()*.18,h=Math.random()<.65;n.beginPath(),n.fillStyle=h?`rgba(70, 30, 15, ${u})`:`rgba(240, 180, 130, ${u})`,n.arc(o,c,l,0,Math.PI*2),n.fill()}for(const a of[0,512]){const o=n.createRadialGradient(512,a,0,512,a,179.2);o.addColorStop(0,"rgba(230, 240, 245, 0.85)"),o.addColorStop(1,"rgba(230, 240, 245, 0)"),n.fillStyle=o,n.fillRect(0,0,1024,512)}const s=new zn(e);return s.colorSpace=ve,s}function J1(){const i=new tn(Vo,64,32),t=new ye({map:K1(),roughness:.95,metalness:0}),e=new Rt(i,t);e.position.copy(pu);const n=.02;function r(s){e.rotation.y+=n*s}return{mesh:e,update:r}}const Ar=new C(-90,25,-330),Rr=112,hn=2048,Se=1024,Z1=1.015,j1=1.035,mu=.03,Q1=.042,tg=[[[-168,65],[-150,61],[-130,54],[-124,40],[-117,32],[-105,22],[-97,16],[-83,9],[-78,19],[-81,26],[-70,42],[-60,47],[-55,52],[-64,60],[-80,70],[-95,69],[-125,70],[-155,71]],[[-80,8],[-70,11],[-60,8],[-50,0],[-35,-5],[-38,-15],[-48,-25],[-58,-35],[-63,-42],[-73,-52],[-75,-47],[-71,-33],[-71,-18],[-79,-6],[-80,2]],[[-17,15],[-10,25],[0,32],[10,34],[25,32],[35,30],[43,12],[51,12],[42,-2],[40,-15],[35,-25],[25,-34],[18,-33],[12,-18],[9,-2],[5,5],[-8,5]],[[-9,37],[0,40],[12,45],[24,40],[30,36],[36,37],[45,40],[50,30],[57,25],[68,24],[77,8],[81,16],[89,22],[95,16],[100,13],[106,10],[110,20],[120,32],[122,40],[130,43],[136,50],[142,54],[160,60],[170,66],[178,68],[168,72],[140,75],[110,76],[90,76],[70,73],[58,70],[48,68],[38,66],[30,70],[24,66],[17,62],[11,58],[4,57],[-2,51],[0,47],[-5,43]],[[113,-22],[122,-18],[130,-12],[137,-12],[142,-11],[147,-19],[153,-25],[150,-35],[145,-38],[137,-35],[129,-32],[118,-34],[114,-28]],[[-45,60],[-30,68],[-24,75],[-35,82],[-55,82],[-60,75],[-55,65]]],eg=[[-4,54,4],[138,37,4],[47,-20,5],[174,-41,4],[110,-3,6],[102,-2,5],[122,12,4],[-19,65,3],[80,8,2.5],[-78,21,3]],ng=[[10,22,18],[30,25,14],[45,22,12],[65,28,10],[95,40,12],[132,-25,14],[18,-22,8],[-110,32,8],[-68,-25,6]];function As(i,t){return{x:(i+180)/360*hn,y:(90-t)/180*Se}}function gu(i){return i/180*Se}function ig(i,t){const e=t.map(([a,o])=>As(a,o)),n=e.length,r=(a,o)=>({x:(a.x+o.x)/2,y:(a.y+o.y)/2}),s=r(e[n-1],e[0]);i.moveTo(s.x,s.y);for(let a=0;a<n;a++){const o=e[a],c=r(e[a],e[(a+1)%n]);i.quadraticCurveTo(o.x,o.y,c.x,c.y)}i.closePath()}function Rs(i){for(const t of tg)ig(i,t);for(const[t,e,n]of eg){const{x:r,y:s}=As(t,e),a=gu(n);i.moveTo(r+a,s),i.arc(r,s,a,0,Math.PI*2)}}function Wo(i,t,e,n,r,s,a=1,o=1){i.save(),i.translate(t,e),i.scale(a,o);const c=i.createRadialGradient(0,0,0,0,0,n);c.addColorStop(0,`rgba(${r}, ${s})`),c.addColorStop(.55,`rgba(${r}, ${s*.55})`),c.addColorStop(1,`rgba(${r}, 0)`),i.fillStyle=c,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.fill(),i.restore()}function _u(){const i=document.createElement("canvas");return i.width=hn,i.height=Se,i.getContext("2d")}function rg(i){const t=new zn(i.canvas);return t.colorSpace=ve,t}function sg(){const i=_u(),t=i.createLinearGradient(0,0,0,Se);t.addColorStop(0,"#0a2c50"),t.addColorStop(.35,"#1259a0"),t.addColorStop(.5,"#1a72bd"),t.addColorStop(.65,"#1259a0"),t.addColorStop(1,"#0a2c50"),i.fillStyle=t,i.fillRect(0,0,hn,Se);for(let a=0;a<700;a++){const o=Math.random()*hn,c=Math.random()*Se,l=20+Math.random()*110,u=Math.random()<.55;Wo(i,o,c,l,u?"6, 28, 58":"70, 165, 215",(u?.1:.07)*(.4+Math.random()*.6),1.6,.7)}const e=[{width:52,color:"rgba(30, 105, 165, 0.18)"},{width:38,color:"rgba(45, 130, 190, 0.20)"},{width:26,color:"rgba(65, 160, 205, 0.22)"},{width:14,color:"rgba(95, 190, 220, 0.25)"}];i.lineJoin="round",i.lineCap="round",i.beginPath(),Rs(i);for(const a of e)i.strokeStyle=a.color,i.lineWidth=a.width,i.stroke();i.fillStyle="#3f7a3a",i.beginPath(),Rs(i),i.fill(),i.save(),i.beginPath(),Rs(i),i.clip();const n=i.createLinearGradient(0,0,0,Se);n.addColorStop(0,"rgba(190, 205, 200, 0.55)"),n.addColorStop(.22,"rgba(60, 90, 60, 0.45)"),n.addColorStop(.5,"rgba(30, 85, 35, 0.5)"),n.addColorStop(.78,"rgba(70, 100, 55, 0.35)"),n.addColorStop(1,"rgba(200, 215, 215, 0.6)"),i.fillStyle=n,i.fillRect(0,0,hn,Se);for(const[a,o,c]of ng){const{x:l,y:u}=As(a,o),h=gu(c),d=i.createRadialGradient(l,u,0,l,u,h);d.addColorStop(0,"rgba(200, 168, 105, 0.85)"),d.addColorStop(.6,"rgba(190, 158, 100, 0.55)"),d.addColorStop(1,"rgba(180, 150, 95, 0)"),i.fillStyle=d,i.beginPath(),i.arc(l,u,h,0,Math.PI*2),i.fill()}for(let a=0;a<1400;a++){const o=Math.random()*hn,c=Math.random()*Se,l=5+Math.random()*30,u=Math.random()<.5;Wo(i,o,c,l,u?"25, 52, 25":"155, 148, 108",.06+Math.random()*.14,1+Math.random(),.8)}for(let a=0;a<90;a++){const o=Math.random()*hn,c=Math.random()*Se,l=40+Math.random()*160,u=(Math.random()-.5)*Math.PI,h=Math.cos(u)*l,d=Math.sin(u)*l*.6;i.beginPath(),i.moveTo(o,c),i.quadraticCurveTo(o+h*.5,c+d*.5-18,o+h,c+d),i.strokeStyle="rgba(48, 42, 32, 0.30)",i.lineWidth=6+Math.random()*8,i.stroke(),i.beginPath(),i.moveTo(o,c-5),i.quadraticCurveTo(o+h*.5,c+d*.5-23,o+h,c+d-5),i.strokeStyle="rgba(200, 195, 175, 0.18)",i.lineWidth=3,i.stroke()}i.beginPath(),Rs(i),i.strokeStyle="rgba(214, 196, 142, 0.28)",i.lineWidth=14,i.stroke(),i.strokeStyle="rgba(224, 208, 158, 0.30)",i.lineWidth=6,i.stroke(),i.restore();const r=i.createLinearGradient(0,Se*.86,0,Se);r.addColorStop(0,"rgba(238, 246, 252, 0)"),r.addColorStop(.45,"rgba(238, 246, 252, 0.9)"),r.addColorStop(1,"rgba(255, 255, 255, 1)"),i.fillStyle=r,i.fillRect(0,Se*.86,hn,Se*.14);const s=i.createLinearGradient(0,0,0,Se*.1);return s.addColorStop(0,"rgba(240, 248, 255, 0.95)"),s.addColorStop(1,"rgba(240, 248, 255, 0)"),i.fillStyle=s,i.fillRect(0,0,hn,Se*.1),rg(i)}function ag(){const i=_u();i.clearRect(0,0,hn,Se);function t(r){const s=Math.exp(-((r/12)**2)),a=Math.exp(-(((r-55)/16)**2)),o=Math.exp(-(((r+55)/16)**2));return .25+.75*Math.max(s,Math.max(a,o))}const e=600;for(let r=0;r<e;r++){const s=Math.random()*360-180,a=Math.random()*170-85;if(Math.random()>t(a))continue;const{x:o,y:c}=As(s,a),l=8+Math.floor(Math.random()*12),u=16+Math.random()*50;for(let h=0;h<l;h++){const d=o+(Math.random()-.5)*u*2.6,p=c+(Math.random()-.5)*u*.7,g=5+Math.random()*14;Wo(i,d,p,g,"255, 255, 255",.18+Math.random()*.28,2.2+Math.random(),.85)}}const n=new zn(i.canvas);return n.colorSpace=ve,n}function og(){const i=new tn(Rr,96,48),t=sg();t.anisotropy=8;const e=new ye({map:t,roughness:.9,metalness:0,emissive:661030}),n=new Rt(i,e);n.position.copy(Ar),n.rotation.z=Si.degToRad(23.4);const r=new Rt(new tn(Rr*Z1,96,48),new ye({map:ag(),transparent:!0,opacity:.85,depthWrite:!1,roughness:1,metalness:0}));n.add(r);const s=new Rt(new tn(Rr*j1,64,32),new on({color:6269183,transparent:!0,opacity:.22,blending:rn,side:be,depthWrite:!1}));n.add(s);function a(o){n.rotation.y+=mu*o,r.rotation.y+=(Q1-mu)*o}return{mesh:n,clouds:r,atmosphere:s,update:a}}const Cr=256,cg=new C(0,0,-2e3),lg=350;function ug(){const i=document.createElement("canvas");i.width=Cr,i.height=Cr;const t=i.getContext("2d"),e=Cr/2,n=t.createRadialGradient(e,e,0,e,e,e);n.addColorStop(0,"rgba(255, 245, 220, 1)"),n.addColorStop(.08,"rgba(255, 230, 180, 0.95)"),n.addColorStop(.25,"rgba(255, 200, 130, 0.45)"),n.addColorStop(.55,"rgba(255, 170, 100, 0.15)"),n.addColorStop(1,"rgba(255, 150, 90, 0)"),t.fillStyle=n,t.fillRect(0,0,Cr,Cr);const r=new zn(i);return r.colorSpace=ve,r}function hg(){const i=ug(),t=new So({map:i,depthWrite:!1,transparent:!0,blending:rn}),e=new Ol(t);e.scale.setScalar(lg);function n(r){e.position.copy(r.position).add(cg)}return{sprite:e,update:n}}const dg=["Sojourner","Spirit","Opportunity","Curiosity","Perseverance","Zhurong"],fg=Vo+18,pg=Vo+60,mg=60,vu=8028296,gg=5431551,_g=2106408,vg=1060936;function Cs(i,t){return i+Math.random()*(t-i)}function xg(){const i=new ln,t=new ye({color:vu,roughness:.7,metalness:.3,emissive:0}),e=new Rt(new Xe(2.2,.7,1.4),t);e.position.y=.45,i.add(e);const n=new Rt(new Xe(1.8,.1,1.1),new ye({color:vg,roughness:.4,metalness:.8,emissive:332832}));n.position.y=.85,i.add(n);const r=new qe(.32,.32,.2,12);r.rotateZ(Math.PI/2);const s=new ye({color:_g,roughness:.95,metalness:.1}),a=[-.85,.85],o=[-.55,.55];for(const u of a)for(const h of o){const d=new Rt(r,s);d.position.set(u,.1,h),i.add(d)}const c=new Rt(new qe(.04,.04,.8,6),new ye({color:11184810,roughness:.6,metalness:.5}));c.position.set(.6,1.2,0),i.add(c);const l=new Rt(new tn(.1,8,6),new ye({color:16733525,emissive:4456448}));return l.position.set(.6,1.65,0),i.add(l),{group:i,bodyMat:t}}function yg(){const i=Math.random(),t=Math.random(),e=2*Math.PI*i,n=Math.acos(2*t-1),r=Cs(fg,pg),s=Math.sin(n);return new C(r*s*Math.cos(e),r*s*Math.sin(e),r*Math.cos(n)).add(pu)}function Mg(){const i=[];for(const r of dg){const{group:s,bodyMat:a}=xg(),o=yg();s.position.copy(o),s.rotation.set(Cs(0,Math.PI*2),Cs(0,Math.PI*2),Cs(0,Math.PI*2)),i.push({name:r,mesh:s,bodyMat:a,position:o,fixed:!1,repairProgress:0,creditValue:mg})}function t(r){for(const s of i)s.mesh.rotation.y+=.25*r,s.mesh.rotation.x+=.08*r}function e(r){r.fixed=!0,r.repairProgress=1,r.bodyMat.color.setHex(gg),r.bodyMat.emissive.setHex(1060928)}function n(){for(const r of i)r.fixed=!1,r.repairProgress=0,r.bodyMat.color.setHex(vu),r.bodyMat.emissive.setHex(0)}return{rovers:i,update:t,markFixed:e,reset:n}}const Ps=32,Xo=.9,Sg=6,wg=.18;function bg(){const i=new Float32Array(Ps*3),t=new Float32Array(Ps*3),e=new fe;e.setAttribute("position",new Re(i,3));const n=new bo({color:10149887,size:wg,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:rn}),r=new Gl(e,n);r.visible=!1;let s=Xo;function a(c){s=0;for(let l=0;l<Ps;l++){i[l*3+0]=c.x,i[l*3+1]=c.y,i[l*3+2]=c.z;const u=Math.random(),h=Math.random(),d=2*Math.PI*u,p=Math.acos(2*h-1),g=Math.sin(p),y=(.4+Math.random()*.6)*Sg;t[l*3+0]=y*g*Math.cos(d),t[l*3+1]=y*g*Math.sin(d),t[l*3+2]=y*Math.cos(p)}e.attributes.position.needsUpdate=!0,r.visible=!0}function o(c){if(s>=Xo){r.visible=!1;return}s+=c;const l=Math.min(1,s/Xo),u=Math.pow(.05,c);for(let h=0;h<Ps;h++)i[h*3+0]+=t[h*3+0]*c,i[h*3+1]+=t[h*3+1]*c,i[h*3+2]+=t[h*3+2]*c,t[h*3+0]*=u,t[h*3+1]*=u,t[h*3+2]*=u;e.attributes.position.needsUpdate=!0,n.opacity=1-l}return{points:r,fire:a,update:o}}const xu=.7,qo=new C,Ki=new C;function Eg(i,t){let e=0;for(const n of t){qo.subVectors(i.position,n.position);const r=xu+n.radius,s=qo.lengthSq();if(s>=r*r)continue;if(s<1e-8)Ki.set(0,1,0),i.position.addScaledVector(Ki,r);else{const o=Math.sqrt(s);Ki.copy(qo).divideScalar(o);const c=r-o;i.position.addScaledVector(Ki,c)}const a=i.velocity.dot(Ki);a<0&&i.velocity.addScaledVector(Ki,-1.55*a),e+=1}return e}const Tg=Object.freeze(Object.defineProperty({__proto__:null,SHIP_RADIUS:xu,resolveAsteroidCollisions:Eg},Symbol.toStringTag,{value:"Module"})),Gn={throttleUp:["KeyW"],throttleDown:["KeyS"],yawLeft:["KeyA"],yawRight:["KeyD"],pitchUp:["ArrowUp"],pitchDown:["ArrowDown"],rollLeft:["KeyQ"],rollRight:["KeyE"]};function Ag(){const i=new Set,t=new Set;function e(a){i.has(a.code)||t.add(a.code),i.add(a.code)}function n(a){i.delete(a.code)}window.addEventListener("keydown",e),window.addEventListener("keyup",n);function r(a){for(const o of a)if(i.has(o))return!0;return!1}function s(a){for(const o of a)if(t.has(o))return!0;return!1}return{isDown:a=>i.has(a),sample(){const a=(r(Gn.throttleUp)?1:0)-(r(Gn.throttleDown)?1:0),o=(r(Gn.yawLeft)?1:0)-(r(Gn.yawRight)?1:0),c=(r(Gn.pitchUp)?1:0)-(r(Gn.pitchDown)?1:0),l=(r(Gn.rollLeft)?1:0)-(r(Gn.rollRight)?1:0);return{throttle:a,yaw:o,pitch:c,roll:l}},consumeAnyJustPressed(){const a=t.size>0;return t.clear(),a},consumeJustPressed(a){if(s(a)){for(const o of a)t.delete(o);return!0}return!1},dispose(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)}}}const Rg=.15,Ls={throttle:{axisIndex:1,sign:-1},yaw:{axisIndex:0,sign:-1},lookX:{axisIndex:2,sign:1},lookY:{axisIndex:3,sign:-1}},Be={B:1,X:2,Y:3,L1:4,R1:5,Select:8,Start:9,Up:12,Down:13,Left:14,Right:15};function Cg(i,t=Rg){const e=Math.abs(i);return e<t?0:Math.sign(i)*((e-t)/(1-t))}function Is(i,t){return t.sign*Cg(i.axes[t.axisIndex]??0)}function Pg(){let i=!1,t=!1;const e=new Set,n=new Set,r=new Set;function s(){const c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(const l of c)if(l&&l.connected)return l;return null}const a=new Set;function o(c){if(n.clear(),a.clear(),!!c.buttons){for(let l=0;l<c.buttons.length;l++){const u=c.buttons[l];!!(u&&u.pressed)?(a.add(l),!e.has(l)&&!r.has(l)&&n.add(l)):r.delete(l)}for(const l of e)a.has(l)||e.delete(l);for(const l of a)e.add(l)}}return{get active(){return i},sample(){const c=s();if(!c)return i=!1,n.clear(),a.clear(),e.clear(),null;!t&&c.mapping!=="standard"&&(t=!0,console.info("[input/gamepad] Connected pad reports non-standard mapping",`(id="${c.id}"). Throttle/look may not be on axes 1/2/3 as expected.`,"See BACKLOG.md for the calibration follow-up.")),o(c);const l=Is(c,Ls.yaw),u=Is(c,Ls.throttle),h=Is(c,Ls.lookX),d=Is(c,Ls.lookY),p=(a.has(Be.Up)?1:0)-(a.has(Be.Down)?1:0),g=(a.has(Be.Left)?1:0)-(a.has(Be.Right)?1:0),y=(l||p||g||u||h||d)!==0,m=a.size>0;return i=y||m,{throttle:u,yaw:l,pitch:p,roll:g,lookX:h,lookY:d}},isButtonDown(c){return a.has(c)},consumeJustPressed(c){return n.has(c)?(n.delete(c),!0):!1},consumeAnyJustPressed(){return n.size===0?!1:(n.clear(),!0)},suppressCurrentlyPressed(){for(const c of a)r.add(c)}}}const yu=.2,Lg=1e3,Ig=35,Dg=35;function Ug(){return(screen.orientation?.angle??window.orientation??0)*Math.PI/180}function Ng(){let i=!1,t=!1,e=!1,n=null,r=0,s={alpha:0,beta:0,gamma:0,n:0},a=null,o=0;function c(h){if(!(h.alpha==null&&h.beta==null&&h.gamma==null)&&(a={alpha:h.alpha??0,beta:h.beta??0,gamma:h.gamma??0},o=typeof performance<"u"?performance.now():Date.now(),n==null)){const d=o;r===0&&(r=d),s.alpha+=a.alpha,s.beta+=a.beta,s.gamma+=a.gamma,s.n+=1,d-r>=Lg&&s.n>0&&(n={alpha:s.alpha/s.n,beta:s.beta/s.n,gamma:s.gamma/s.n})}}function l(){n=null,r=0,s={alpha:0,beta:0,gamma:0,n:0}}function u(){i||(window.addEventListener("deviceorientation",c),screen.orientation?.addEventListener("change",l),window.addEventListener("orientationchange",l),i=!0)}return{get active(){return!i||a==null?!1:(typeof performance<"u"?performance.now():Date.now())-o<1e3},get calibrated(){return n!=null},async request(){if(e)return u(),t;e=!0;const h=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(h&&typeof h.requestPermission=="function"){try{t=await h.requestPermission()==="granted"}catch{t=!1}t&&u()}else t=!0,u();return t},sample(){if(!a||!n)return null;const h=a.beta-n.beta,d=a.gamma-n.gamma,p=Ug(),g=Math.cos(p),y=Math.sin(p),m=h*g-d*y,f=h*y+d*g;let x=Mu(m/Ig,-1,1),v=Mu(f/Dg,-1,1);return{pitchDelta:x*yu,yawDelta:v*yu}}}}function Mu(i,t,e){return i<t?t:i>e?e:i}const Yo=typeof window<"u"&&"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0;function Fg(){let i=!1;function t(e){e.pointerType!=="mouse"&&(i=!0)}return window.addEventListener("pointerdown",t,{passive:!0}),{consumeJustPressed(){const e=i;return i=!1,e},clear(){i=!1}}}function Su(){return typeof window>"u"?!1:!!(window.__p5NativeHost===!0||window.webkit&&window.webkit.messageHandlers)}function Ji(i){return i<-1?-1:i>1?1:i}function Og(){const i=Ag(),t=Pg(),e=Ng(),n=Fg();let r=["KB"];return{keyboard:i,gamepad:t,gyro:e,touch:n,isTouchDevice:Yo,bridgeAvailable:Su,async enableGyro(){return e.request()},sample(){const s=i.sample(),a=t.sample(),o=[];let c,l,u,h;a&&(a.throttle||a.yaw||a.pitch||a.roll)?(c=a.throttle,l=a.yaw,u=a.pitch,h=a.roll,o.push("PAD"),(s.throttle||s.yaw||s.pitch||s.roll)&&(c=Ji(c+s.throttle),l=Ji(l+s.yaw),u=Ji(u+s.pitch),h=Ji(h+s.roll),o.push("KB"))):(c=s.throttle,l=s.yaw,u=s.pitch,h=s.roll,(s.throttle||s.yaw||s.pitch||s.roll)&&o.push("KB"));const d=e.sample();d&&e.active&&(u=Ji(u+d.pitchDelta),l=Ji(l+d.yawDelta),o.push("GYRO"));const p=a?a.lookX:0,g=a?a.lookY:0;return(p||g)&&!o.includes("PAD")&&o.push("PAD"),o.length===0&&o.push("KB"),r=o,{throttle:c,yaw:l,pitch:u,roll:h,lookX:p,lookY:g}},activeSources(){return r},consumeAnyJustPressed(){const s=i.consumeAnyJustPressed();t.sample();const a=t.consumeAnyJustPressed(),o=n.consumeJustPressed();return s||a||o}}}const Vt={title:"Super Vexo and the Mystery of the System",pressAnyKey:"Press any button to start",tapToStart:"Tap to start",intro:{skip:"Press any button to skip",tapToSkip:"Tap to skip",beats:["Long ago, in the kingdom of Astra…","The kingdom lived in peace.","Until Lord Draxos came.","He kidnapped Princess Astra.","And vanished into deep space.",`The Scientists handed Vexo the Super Mega Tablet.

Can you save her?`]},surface:{town:"CASTEL MAGGIORE · BOLOGNA",street:"Via Giuseppe Impastato",leaveHint:"Climb to leave the atmosphere"},hud:{appName:"Tablet",velocity:"VEL",orientation:"ORI",fps:"FPS",dampingOn:"damping: ON",dampingOff:"damping: OFF",fastTravelButton:"FAST TRAVEL",fastTravelHint:"R1 / F",fastTravelActive:"warping…",rovers:"ROVERS",credits:"CRED",hackHint:"Hold L1 / H to hack",upgradeButton:"UPGRADES",upgradeHint:"Y / U",upgradeBought:"OWNED",upgradeBuy:"BUY",upgradeClose:"Close",screenHint:"Stick / swipe = scroll · B / Esc = back to Tablet",missionCompleteTitle:"MISSION COMPLETE",missionCompleteBody:"All rovers repaired. Earth Command transfers a bonus to your account.",missionCompleteCta:"Open Upgrades",missionCompleteClose:"Continue Flying",resetHint:"Start / R = reset",tabletHint:"− / T = Tablet"}};function kg(){const i=document.createElement("div");i.id="tablet",i.innerHTML=`
    <div class="tablet-frame">
      <div class="tablet-bezel">
        <div class="tablet-screen">
          <div class="tablet-titlebar">
            <span class="tablet-app">${Vt.hud.appName}</span>
            <span class="tablet-source" data-source>KB</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Vt.hud.velocity}</span>
            <span class="tablet-value" data-velocity>0.0</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Vt.hud.orientation}</span>
            <span class="tablet-value" data-orientation>0°,0°,0°</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Vt.hud.fps}</span>
            <span class="tablet-value" data-fps>--</span>
          </div>
          <div class="tablet-row tablet-row--small">
            <span class="tablet-value" data-damping>${Vt.hud.dampingOff}</span>
          </div>

          <!-- Mission panel: rover progress + credits -->
          <div class="tablet-mission" data-mission hidden>
            <div class="tablet-row">
              <span class="tablet-label">${Vt.hud.rovers}</span>
              <span class="tablet-value" data-rovers>0/0</span>
            </div>
            <div class="tablet-row">
              <span class="tablet-label">${Vt.hud.credits}</span>
              <span class="tablet-value" data-credits>0</span>
            </div>
            <!-- Hack prompt: only visible when a rover is in range -->
            <div class="tablet-hack" data-hack hidden>
              <div class="tablet-hack__name" data-hack-name>—</div>
              <div class="tablet-hack__hint">${Vt.hud.hackHint}</div>
              <div class="tablet-hack__bar"><div class="tablet-hack__fill" data-hack-fill></div></div>
            </div>
          </div>

          <button class="tablet-app-btn" data-fast-travel type="button">
            <span class="tablet-app-btn__icon">⤴</span>
            <span class="tablet-app-btn__label">${Vt.hud.fastTravelButton}</span>
            <span class="tablet-app-btn__key">${Vt.hud.fastTravelHint}</span>
          </button>
          <button class="tablet-app-btn" data-upgrades type="button">
            <span class="tablet-app-btn__icon">⚙</span>
            <span class="tablet-app-btn__label">${Vt.hud.upgradeButton}</span>
            <span class="tablet-app-btn__key">${Vt.hud.upgradeHint}</span>
          </button>
          <div class="tablet-row tablet-row--hint" data-reset-hint hidden>
            ${Vt.hud.resetHint}
          </div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const t=document.createElement("div");t.id="tablet-hint",t.textContent=Vt.hud.tabletHint,t.hidden=!0,document.body.appendChild(t);const e=i.querySelector("[data-velocity]"),n=i.querySelector("[data-orientation]"),r=i.querySelector("[data-fps]"),s=i.querySelector("[data-source]"),a=i.querySelector("[data-damping]"),o=i.querySelector("[data-fast-travel]"),c=i.querySelector("[data-upgrades]");i.style.display="none";const l=i.querySelector("[data-reset-hint]"),u=i.querySelector("[data-mission]"),h=i.querySelector("[data-rovers]"),d=i.querySelector("[data-credits]"),p=i.querySelector("[data-hack]"),g=i.querySelector("[data-hack-name]"),y=i.querySelector("[data-hack-fill]");let m=0,f=0,x=0;return{update({velocity:v,eulerDeg:S,dt:P,sources:R,dampingOn:A}){e.textContent=v.toFixed(1),n.textContent=`${S.x.toFixed(0)}°, ${S.y.toFixed(0)}°, ${S.z.toFixed(0)}°`,m+=1,f+=P,f>=.5&&(x=Math.round(m/f),m=0,f=0,r.textContent=String(x)),s.textContent=R.join("+"),a.textContent=A?Vt.hud.dampingOn:Vt.hud.dampingOff},show(){i.style.display="",t.hidden=!0},hide(){i.style.display="none",t.hidden=!1},toggle(){const v=i.style.display==="none";return i.style.display=v?"":"none",t.hidden=v,v},setHintVisible(v){t.hidden=!v},showFastTravel(){o.classList.add("tablet-app-btn--visible")},showUpgrades(){c.classList.add("tablet-app-btn--visible")},showResetHint(){l.hidden=!1},setMissionVisible(v){u.hidden=!v},updateMission({remaining:v,total:S,credits:P}){h.textContent=`${S-v}/${S}`,d.textContent=String(P)},updateHack({name:v,progress:S}){if(!v){p.hidden=!0;return}p.hidden=!1,g.textContent=v,y.style.width=`${Math.max(0,Math.min(1,S))*100}%`},onUpgradesClick(v){c.addEventListener("click",v)},setFastTravelActive(v){o.classList.toggle("tablet-app-btn--active",v);const S=o.querySelector(".tablet-app-btn__label");S.textContent=v?Vt.hud.fastTravelActive:Vt.hud.fastTravelButton,o.disabled=v},onFastTravel(v){o.addEventListener("click",v)}}}function Bg(){const i=document.createElement("div");i.id="title-card";const t="2026-08-20 10:24";return i.innerHTML=`
    <div class="title-card__inner">
      <h1 class="title-card__title">${Vt.title}</h1>
      <p class="title-card__prompt">${Yo?Vt.tapToStart:Vt.pressAnyKey}</p>
      <p class="title-card__build">build ${t}</p>
    </div>
  `,document.body.appendChild(i),{hide(){i.style.opacity="0"},show(){i.style.opacity=""},dismiss(){i.classList.add("title-card--hidden"),setTimeout(()=>i.remove(),500)}}}const zg=1.2,wu=540;function Hg(i){const t=document.createElement("div");t.id="warp-flash",i.appendChild(t);let e=!1,n=0,r=!1,s=null,a=!1,o=null;function c(u,h={}){return e?!1:(e=!0,n=0,r=!1,s=h.onDone??null,a=!0,o=u,u.velocity.set(0,0,0),!0)}function l(u){if(!e)return;n+=u;const d=Math.max(0,Math.min(1,n/zg));let p;if(d<.4?p=d/.4:d<.6?p=1:p=1-(d-.6)/.4,t.style.opacity=String(Math.max(0,Math.min(1,p))),!r&&d>=.5&&o&&(o.mesh.position.set(0,0,wu),o.velocity.set(0,0,0),o.mesh.quaternion.identity(),r=!0),d>=1){e=!1,a=!1,t.style.opacity="0";const g=s;s=null,o=null,g&&g()}}return{begin:c,update:l,get active(){return e},get suppressInput(){return a},targetZ:wu}}const bu=80,Gg=18,Vg=.06,Wg=2.5,Eu=280,Xg=520,qg=.18,Yg=.18;function $g(){let i=null,t=!1,e=null,n=null,r=null,s=0;function a(){if(t)return!0;const d=window.AudioContext||window.webkitAudioContext;return d?(i=new d,e=i.createGain(),e.gain.value=1,e.connect(i.destination),n=Kg(i,e),r=Jg(i,e),t=!0,!0):!1}function o(d){t&&(s=Math.min(1,Math.abs(d)))}function c(d){if(!t)return;const p=1-Math.pow(2,-d/Yg),g=r.gainNode.gain.value,y=s*qg,m=g+(y-g)*p;r.gainNode.gain.setValueAtTime(m,i.currentTime);const f=Eu+s*Xg;r.filter.frequency.setValueAtTime(f,i.currentTime)}function l(){if(t){try{n.osc1.stop(),n.osc2.stop()}catch{}try{r.source.stop()}catch{}i.close(),t=!1,i=null}}function u({fromHz:d=300,toHz:p=900,durationS:g=.35,peakGain:y=.18}={}){if(!t)return;const m=i.currentTime,f=i.createOscillator();f.type="sine",f.frequency.setValueAtTime(d,m),f.frequency.exponentialRampToValueAtTime(p,m+g);const x=i.createGain();x.gain.setValueAtTime(0,m),x.gain.linearRampToValueAtTime(y,m+.03),x.gain.exponentialRampToValueAtTime(1e-4,m+g),f.connect(x),x.connect(e),f.start(m),f.stop(m+g+.05)}function h(){u({fromHz:440,toHz:660,durationS:.45,peakGain:.2}),setTimeout(()=>u({fromHz:660,toHz:990,durationS:.6,peakGain:.22}),200)}return{start:a,update:c,setThrottle:o,chirp:u,fanfare:h,dispose:l,get running(){return t}}}function Kg(i,t){const e=i.createOscillator(),n=i.createOscillator();e.type="triangle",n.type="triangle",e.frequency.value=bu,n.detune.value=Gg,n.frequency.value=bu;const r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=320,r.Q.value=.7;const s=i.createGain();return s.gain.value=Vg,e.connect(r),n.connect(r),r.connect(s),s.connect(t),e.start(),n.start(),{osc1:e,osc2:n,filter:r,gain:s}}function Jg(i,t){const e=i.sampleRate,n=i.createBuffer(1,e*Wg,e),r=n.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=Math.random()*2-1;const s=i.createBufferSource();s.buffer=n,s.loop=!0;const a=i.createBiquadFilter();a.type="bandpass",a.frequency.value=Eu,a.Q.value=1.2;const o=i.createGain();return o.gain.value=0,s.connect(a),a.connect(o),o.connect(t),s.start(),{source:s,filter:a,gainNode:o}}const Zg=8,jg=2,Qg=100,Ds={ACTIVE:"active",COMPLETE:"complete"};function t2(i){const{rovers:t,markFixed:e}=i;let n=0,r=Ds.ACTIVE,s=null,a=null,o=null,c=null;function l(f){o=f}function u(f){c=f}function h(){let f=0;for(const x of t)x.fixed||(f+=1);return f}function d(){return t.length}function p(f,x){if(x>Zg)return null;let v=null,S=Ce.hackRadius*Ce.hackRadius;for(const P of t){if(P.fixed)continue;const R=P.position.x-f.x,A=P.position.y-f.y,I=P.position.z-f.z,G=R*R+A*A+I*I;G<S&&(S=G,v=P)}return v}function g({shipPos:f,shipSpeed:x,holdActive:v,dt:S}){if(s=p(f,x),r!==Ds.ACTIVE){a=null;return}if(v&&s){if(a!==s&&(a=s,a.repairProgress=0),a.repairProgress=Math.min(1,a.repairProgress+S/jg),a.repairProgress>=1&&!a.fixed){const P=a;e(P),n+=P.creditValue,c&&c(P),a=null,h()===0&&(r=Ds.COMPLETE,n+=Qg,o&&o())}}else a&&(a.repairProgress=0,a=null)}function y(f){return f>n?!1:(n-=f,!0)}function m(){n=0,r=Ds.ACTIVE,s=null,a=null}return{get state(){return r},get credits(){return n},get inRange(){return s},get repairing(){return a},remaining:h,totalRovers:d,update:g,spendCredits:y,setOnComplete:l,setOnRepaired:u,reset:m}}function e2(){const i=[{id:"throttle",label:"Boost Throttle",description:"Push the engines harder. +40% forward acceleration, +25% top speed.",cost:100,bought:!1,apply(){Ce.maxThrottleAccel*=1.4,Ce.maxSpeed*=1.25}},{id:"agility",label:"Sharper Turning",description:"Twitch-faster yaw and pitch. +35% on both rates.",cost:90,bought:!1,apply(){Ce.yawRate*=1.35,Ce.pitchRate*=1.35}},{id:"hackRange",label:"Long-Range Hack",description:"The Tablet locks on from further out. Hack radius +50%.",cost:80,bought:!1,apply(){Ce.hackRadius*=1.5}}];function t(n,r){const s=i.find(a=>a.id===n);return!s||s.bought||!r.spendCredits(s.cost)?!1:(s.apply(),s.bought=!0,!0)}function e(){for(const n of i)n.bought=!1}return{upgrades:i,buy:t,reset:e}}function n2({upgrades:i,mission:t,audio:e,onClose:n}){const r=document.createElement("div");r.id="mission-screens",r.innerHTML=`
    <div class="screen-overlay" id="screen-complete" data-screen="complete" hidden>
      <div class="screen-card">
        <h2 class="screen-card__title">${Vt.hud.missionCompleteTitle}</h2>
        <p class="screen-card__body">${Vt.hud.missionCompleteBody}</p>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-complete-credits>0</span></span>
        </div>
        <div class="screen-card__actions">
          <button class="screen-btn screen-btn--primary" data-action="open-upgrades">${Vt.hud.missionCompleteCta}</button>
          <button class="screen-btn" data-action="close-complete">${Vt.hud.missionCompleteClose}</button>
        </div>
      </div>
    </div>

    <div class="screen-overlay" id="screen-upgrades" data-screen="upgrades" hidden>
      <div class="screen-card screen-card--wide">
        <h2 class="screen-card__title">${Vt.hud.upgradeButton}</h2>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-upgrades-credits>0</span></span>
        </div>
        <p class="screen-card__hint">${Vt.hud.screenHint}</p>
        <ul class="upgrade-list" data-upgrade-list></ul>
        <div class="screen-card__actions">
          <button class="screen-btn" data-action="close-upgrades">${Vt.hud.upgradeClose}</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(r);const s=r.querySelector("#screen-complete"),a=r.querySelector("[data-complete-credits]"),o=r.querySelector("#screen-upgrades"),c=r.querySelector("[data-upgrades-credits]"),l=r.querySelector("[data-upgrade-list]");function u(){c.textContent=String(t.credits),l.innerHTML="";for(const f of i.upgrades){const x=document.createElement("li");x.className="upgrade-item"+(f.bought?" upgrade-item--bought":"");const v=!f.bought&&t.credits>=f.cost;x.innerHTML=`
        <div class="upgrade-item__head">
          <span class="upgrade-item__name">${f.label}</span>
          <span class="upgrade-item__cost">${f.cost} c</span>
        </div>
        <p class="upgrade-item__desc">${f.description}</p>
        <button class="screen-btn screen-btn--small" data-buy="${f.id}" ${f.bought||!v?"disabled":""}>
          ${f.bought?Vt.hud.upgradeBought:Vt.hud.upgradeBuy}
        </button>
      `,l.appendChild(x)}}function h(f){f==="complete"?(a.textContent=String(t.credits),s.hidden=!1):f==="upgrades"&&(u(),o.hidden=!1)}function d(f){f==="complete"?s.hidden=!0:f==="upgrades"&&(o.hidden=!0)}function p(){d("complete"),d("upgrades")}function g(){return!s.hidden||!o.hidden}function y(){return o.hidden?s.hidden?null:s.querySelector(".screen-card"):o.querySelector(".screen-card")}function m(f){const x=y();x&&(x.scrollTop+=f)}return r.addEventListener("click",f=>{const x=f.target;if(!(x instanceof Element))return;const v=x.getAttribute("data-action");if(v==="open-upgrades"){d("complete"),h("upgrades");return}if(v==="close-complete"){d("complete"),n?.();return}if(v==="close-upgrades"){d("upgrades"),n?.();return}const S=x.getAttribute("data-buy");S&&i.buy(S,t)&&(e&&e.chirp({fromHz:520,toHz:780,durationS:.25,peakGain:.18}),u())}),{show:h,hide:d,hideAll:p,isOpen:g,scrollBy:m}}const Tu=40;function i2(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),r=n.createLinearGradient(0,0,0,512);r.addColorStop(0,"#0c3a66"),r.addColorStop(.5,"#1b6aa3"),r.addColorStop(1,"#0c3a66"),n.fillStyle=r,n.fillRect(0,0,1024,512);const s=[];for(let o=0;o<6;o++)s.push({x:Math.random()*1024,y:512*.25+Math.random()*512*.5,r:50+Math.random()*90});for(const o of s){const c=8+Math.floor(Math.random()*6);for(let l=0;l<c;l++){const u=(Math.random()-.5)*o.r*1.6,h=(Math.random()-.5)*o.r*1,d=18+Math.random()*45,p=Math.random()<.35;n.beginPath(),n.fillStyle=p?"rgba(30, 70, 30, 0.85)":"rgba(70, 130, 55, 0.9)",n.arc(o.x+u,o.y+h,d,0,Math.PI*2),n.fill()}}for(let o=0;o<60;o++){const c=Math.random()*1024,l=Math.random()*512,u=14+Math.random()*50;n.beginPath(),n.fillStyle=`rgba(245, 250, 255, ${.1+Math.random()*.12})`,n.arc(c,l,u,0,Math.PI*2),n.fill()}for(const o of[0,512]){const c=n.createRadialGradient(512,o,0,512,o,153.6);c.addColorStop(0,"rgba(240, 248, 255, 0.85)"),c.addColorStop(1,"rgba(240, 248, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,1024,512)}const a=new zn(e);return a.colorSpace=ve,a}function r2(){const i=new tn(Tu,64,32),t=new ye({map:i2(),roughness:.85,metalness:0,emissive:1296}),e=new Rt(i,t),n=new on({color:6990591,transparent:!0,opacity:.18,blending:rn,side:be}),r=new Rt(new tn(Tu*1.05,64,32),n);e.add(r);const s=.05;function a(o){e.rotation.y+=s*o}return{mesh:e,update:a}}const Au=14,Ru=4.5,s2=.9;function a2(){const i=new ln,t=new Es(1,0);t.scale(Ru,Ru,Au*.5);const e=new ye({color:3807780,roughness:.45,metalness:.6,emissive:3149848,flatShading:!0}),n=new Rt(t,e);i.add(n);const r=new on({color:16724016}),s=new Rt(new tn(s2,12,8),r);s.position.set(0,0,Au*.55),i.add(s);const a=document.createElement("canvas");a.width=a.height=128;{const h=a.getContext("2d"),d=64,p=h.createRadialGradient(d,d,0,d,d,d);p.addColorStop(0,"rgba(255, 60, 60, 1)"),p.addColorStop(.3,"rgba(255, 30, 30, 0.6)"),p.addColorStop(1,"rgba(255, 30, 30, 0)"),h.fillStyle=p,h.fillRect(0,0,128,128)}const o=new zn(a);o.colorSpace=ve;const c=new Ol(new So({map:o,transparent:!0,blending:rn,depthWrite:!1}));c.position.copy(s.position),c.scale.setScalar(5.5),i.add(c);const l=new Xe(.35,1.4,6);l.translate(0,0,-1.5);const u=new ye({color:1837586,roughness:.6,metalness:.5,emissive:2099216,flatShading:!0});for(const h of[-1,1]){const d=new Rt(l,u);d.position.set(h*2.6,0,-2.5),d.rotation.z=h*.25,d.rotation.y=h*.2,i.add(d)}return{group:i,hull:n,core:s,halo:c}}const Us=i=>i*i*(3-2*i),o2=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,$o=[3.5,3,4,4,3.5,4.5];function c2({renderer:i}){const t=new Dl;t.background=new kt(66055);const e=new Ue(50,window.innerWidth/window.innerHeight,.1,5e3);e.position.set(0,8,140),e.lookAt(0,0,0),t.add(new No(10141920,1052704,.7));const n=new Oo(16773848,1.1);n.position.set(50,30,80),t.add(n);const r=du();t.add(r);const s=r2();t.add(s.mesh);const a=a2();a.group.position.set(200,30,30),a.group.rotation.y=-.6,t.add(a.group);const o=new on({color:16732224,transparent:!0,opacity:0,blending:rn,depthWrite:!1,side:_e}),c=new Rt(new yr(2,60,16,1,!0),o);c.rotation.x=Math.PI,t.add(c);const l=document.createElement("div");l.id="cinematic",l.innerHTML=`
    <div class="cinematic__skip" data-skip>${Yo?Vt.intro.tapToSkip:Vt.intro.skip}</div>
    <div class="cinematic__text" data-text></div>
    <div class="cinematic__flash" data-flash></div>
  `,document.body.appendChild(l);const u=l.querySelector("[data-text]"),h=l.querySelector("[data-flash]");let d=0,p=0,g=0,y=!0,m=!0;function f(G,_,w){switch(G){case 0:{s.mesh.position.set(0,0,0),s.mesh.scale.setScalar(1+.02*Math.sin(g*.5)),a.group.position.x=200,c.material.opacity=0;break}case 1:{s.mesh.position.set(0,0,0),e.position.x=-10+20*o2(_),e.lookAt(0,0,0);break}case 2:{const L=140+-45*Us(_);e.position.set(0,8,L),e.lookAt(0,0,0);const D=140,k=38;a.group.position.x=D+(k-D)*Us(_),a.group.position.z=30-10*Us(_),a.group.rotation.y=-.6-.4*Us(_);break}case 3:{e.position.set(0,8,95),a.group.position.x=38,a.group.position.z=20,a.group.rotation.y=-1,c.material.opacity=.4+.35*Math.sin(g*12);const L=a.group.position,D=s.mesh.position;c.position.set((L.x+D.x)/2,(L.y+D.y)/2,(L.z+D.z)/2),c.lookAt(D),c.rotateX(Math.PI/2),e.position.x=Math.sin(g*30)*.4,e.position.y=8+Math.cos(g*27)*.3,e.position.z=95,e.lookAt(0,0,0);break}case 4:{a.group.position.x=38,a.group.position.z=20,e.position.set(0,8,95),e.lookAt(0,0,0),_<.5?(h.style.opacity=String(_*2*.95),c.material.opacity=.35*(1-_*2)):(a.group.visible=!1,s.mesh.visible=!1,c.material.opacity=0,h.style.opacity=String(Math.max(0,1-(_-.5)*2)));break}case 5:{h.style.opacity="0";break}}}function x(G){u.innerHTML=G.split(`
`).map(_=>`<p>${_}</p>`).join(""),u.classList.remove("cinematic__text--in"),u.offsetWidth,u.classList.add("cinematic__text--in")}function v(){d+=1,p=0,m=!0,d>=$o.length&&S()}function S(){y&&(y=!1,l.remove(),t.traverse(G=>{G.geometry&&G.geometry.dispose();const _=Array.isArray(G.material)?G.material:G.material?[G.material]:[];for(const w of _)w.map&&w.map.dispose(),w.dispose()}))}function P(){S()}function R(G){if(!y)return;g+=G,p+=G,m&&(x(Vt.intro.beats[d]),m=!1);const _=Math.min(1,p/$o[d]);f(d,_),s.update(G),a.halo.material.opacity=.7+.25*Math.sin(g*4),fu(r,e),p>=$o[d]&&v()}function A(){y&&i.render(t,e)}function I(G=window.innerWidth,_=window.innerHeight){e.aspect=G/_,e.updateProjectionMatrix()}return{update:R,render:A,skip:P,onResize:I,get active(){return y}}}function l2(){if(!(new URLSearchParams(window.location.search).get("debugPad")==="1"))return{update(){}};const t=document.createElement("div");t.id="debug-pad",Object.assign(t.style,{position:"fixed",top:"8px",left:"8px",zIndex:"9999",background:"rgba(0,0,0,0.78)",color:"#9af0a0",font:"11px ui-monospace, Menlo, Consolas, monospace",padding:"8px 10px",maxWidth:"min(92vw, 520px)",maxHeight:"60vh",overflow:"auto",border:"1px solid #3a3",borderRadius:"4px",whiteSpace:"pre-wrap",pointerEvents:"none",lineHeight:"1.35"}),document.body.appendChild(t);function e(){const n=Su(),r=n?window.__p5NativeHost===!0?"__p5NativeHost=true":"webkit.messageHandlers":"(none — desktop / non-wrapper)",s=window.__nativeGamepadBridgeReady===!0,a=window.__nativeGamepadUpdateCount||0,o=window.__nativeGamepadLastRaw,c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[],l=c&&c[0];let u="(no pad)";if(l){const h=[];for(let d=0;d<l.buttons.length;d++)l.buttons[d]&&l.buttons[d].pressed&&h.push(d);u=`id=${JSON.stringify(l.id)}
mapping=${l.mapping}
axes=[${l.axes.map(d=>d.toFixed(2)).join(", ")}]
pressed buttons=[${h.join(", ")||"(none)"}]`}return["=== gamepad debug ===",`bridge available: ${n}  (${r})`,`bridge module ready: ${s}`,`__nativeGamepadUpdate calls: ${a}`,`last raw payload: ${o?JSON.stringify(o).slice(0,240):"(none yet)"}`,"","--- navigator.getGamepads()[0] ---",u].join(`
`)}return{update(){t.textContent=e()}}}const u2=[0,120,350,700],h2=2;function d2(i){const t=i.getBoundingClientRect(),e=Math.max(1,Math.round(t.width||window.innerWidth)),n=Math.max(1,Math.round(t.height||window.innerHeight));return{width:e,height:n,pixelRatio:Math.min(window.devicePixelRatio||1,h2)}}function f2(i,t){let e={width:0,height:0,pixelRatio:0};const n=[];function r(){const o=d2(i);o.width===e.width&&o.height===e.height&&o.pixelRatio===e.pixelRatio||(e=o,t(o))}function s(){for(const o of n.splice(0))clearTimeout(o);for(const o of u2)n.push(setTimeout(r,o))}const a=new ResizeObserver(r);return a.observe(i),window.addEventListener("resize",r),window.addEventListener("orientationchange",s),window.visualViewport?.addEventListener("resize",r),window.addEventListener("pageshow",s),screen.orientation?.addEventListener("change",s),r(),{measure:r,dispose(){for(const o of n.splice(0))clearTimeout(o);a.disconnect(),window.removeEventListener("resize",r),window.removeEventListener("orientationchange",s),window.visualViewport?.removeEventListener("resize",r),window.removeEventListener("pageshow",s),screen.orientation?.removeEventListener("change",s)}}}const p2=new C(0,1.4,-5.5),m2=Si.degToRad(180),g2=Si.degToRad(85),_2=.04,v2=.09,Cu=new C(1,0,0),Pu=new C(0,1,0);function Lu(i){return i<-1?-1:i>1?1:i}function Iu(i,t){return 1-Math.pow(2,-i/t)}function x2(i){let t=0,e=0,n=!1;const r=new C,s=new C,a=new C;return{get orbit(){return{yaw:t,pitch:e}},reset(){t=0,e=0,n=!1},update(o,c,l){const u=Lu(c?.x??0)*m2,h=-Lu(c?.y??0)*g2,d=Iu(l,v2);t+=(u-t)*d,e+=(h-e)*d,r.copy(p2).applyAxisAngle(Cu,e).applyAxisAngle(Pu,t).applyQuaternion(o.mesh.quaternion),s.copy(o.mesh.position).add(r),n?i.position.lerp(s,Iu(l,_2)):(i.position.copy(s),n=!0),a.set(0,1,0).applyAxisAngle(Cu,e).applyAxisAngle(Pu,t).applyQuaternion(o.mesh.quaternion),i.up.copy(a),i.lookAt(o.mesh.position)}}}function Vn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new fe;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in s){const h=Du(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let y=0;y<a[u].length;++y)p.push(a[u][y][d]);const g=Du(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Du(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new Re(a,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<e;g++){const y=u.getComponent(d,g);o.setComponent(d+h,g,y)}}else a.set(u.array,c);c+=u.count*e}return r!==void 0&&(o.gpuType=r),o}const dn={name:"Via Giuseppe Impastato",radiusM:500,attribution:"Data © OpenStreetMap contributors, ODbL 1.0 (osm.org/copyright)",buildings:[{pts:[[166.2,-518.3],[165.5,-516.5],[147.5,-476.1],[172.5,-465.1],[191.2,-507.3],[166.2,-518.3]],h:6.5,kind:"house"},{pts:[[379.6,55.3],[360.7,94.4],[377.8,102.9],[394.4,69.9],[379.6,55.3]],h:6.5,kind:"house"},{pts:[[503.5,16.9],[427.3,43.4],[414.6,71.6],[429.3,99],[451.9,56.8],[488.8,44.4],[487.9,41.4],[494.4,39.1],[491.7,30],[506.7,26],[503.5,16.9]],h:6.5,kind:"house"},{pts:[[335.8,-7.8],[285.4,94.6],[306.3,105],[308.6,98.4],[331.8,110.3],[377.7,13.7],[335.8,-7.8]],h:6.5,kind:"house"},{pts:[[356,99],[339.5,130.2],[358.9,186.9],[376.9,180.4],[359.8,133.6],[372.6,107.7],[356,99]],h:6.5,kind:"house"},{pts:[[403.5,79.3],[373.8,142.6],[382.6,169.7],[395.9,165.1],[388.1,142.8],[413.9,88.4],[403.5,79.3]],h:6.5,kind:"house"},{pts:[[435.6,9],[441.6,26.4],[381.2,47.2],[392.9,22.6],[435.6,9]],h:6.5,kind:"house"},{pts:[[511.6,6.2],[503.6,-3.8],[486.4,-12.3],[471.2,-13.1],[456.7,-8.2],[447.1,.3],[441.5,7.9],[447.4,26.6],[511.6,6.2]],h:6.5,kind:"house"},{pts:[[403,184],[362,197.6],[375.8,236.6],[386,239],[394.9,236.8],[403.5,231.8],[411.6,222.2],[414.1,212.4],[413.8,201],[412.5,197.4],[409.7,189.7],[403,184]],h:6.5,kind:"house"},{pts:[[66.4,-148.5],[74.4,-150],[74.9,-147],[110.8,-149.3],[113,-148.1],[121.5,-146.2],[118.3,-134.7],[113.2,-136.2],[109.9,-128.2],[74.4,-129.3],[72,-139.8],[67.6,-139.3],[66.4,-148.5]],h:6.5,kind:"house"},{pts:[[130.5,-122.6],[136.6,-129.2],[132.8,-133.1],[136.9,-138.5],[147.7,-124.8],[146.4,-121.9],[161.2,-98.9],[164.9,-90.6],[167.3,-81.1],[161,-79.9],[159.6,-84.8],[151.6,-83.2],[130.5,-122.6]],h:6.5,kind:"house"},{pts:[[183.3,-27.4],[185,-29.6],[186.7,-34.9],[189.4,-42.3],[190.3,-50.1],[192.5,-60.3],[194.7,-85.6],[201.8,-87.5],[201.5,-93],[208,-94.2],[209.7,-77.9],[207.9,-77.8],[207.8,-74.4],[206.4,-57.2],[204.6,-57.6],[203.7,-49.5],[205.8,-49.1],[205.5,-44.6],[199.8,-33],[202.1,-31.5],[198.4,-24.2],[192.3,-15.3],[187.5,-17.4],[190.8,-23.6],[183.3,-27.4]],h:6.5,kind:"house"},{pts:[[17.4,239.3],[23.3,225.4],[31.2,228.8],[25.3,242.7],[17.4,239.3]],h:6.5,kind:"house"},{pts:[[128.4,102.6],[140.4,82.9],[158.6,94],[146.7,113.7],[128.4,102.6]],h:6.5,kind:"house"},{pts:[[107.5,179.9],[113.7,165.6],[121.8,169.1],[115.6,183.4],[107.5,179.9]],h:6.5,kind:"house"},{pts:[[200,20.3],[218,1.1],[227,9.6],[209,28.8],[200,20.3]],h:6.5,kind:"house"},{pts:[[-419.2,57.9],[-417,52.2],[-412.6,53.9],[-414.7,59.6],[-419.2,57.9]],h:6.5,kind:"house"},{pts:[[233.2,-14.5],[248,-28.7],[258.6,-17.6],[243.7,-3.4],[233.2,-14.5]],h:6.5,kind:"house"},{pts:[[-438.6,61.7],[-436.7,56.5],[-432.7,57.9],[-434.5,63.2],[-438.6,61.7]],h:6.5,kind:"house"},{pts:[[121,151.4],[123.5,145.8],[128,147.9],[125.5,153.4],[121,151.4]],h:6.5,kind:"house"},{pts:[[-428.1,77.6],[-425.2,70.7],[-420.2,72.9],[-423.2,79.7],[-428.1,77.6]],h:6.5,kind:"house"},{pts:[[-9.3,245.8],[-4.2,233.3],[7.2,238],[2.1,250.5],[-9.3,245.8]],h:6.5,kind:"house"},{pts:[[166.1,59.1],[172.4,48.2],[182.5,54.3],[176,65.1],[166.1,59.1]],h:6.5,kind:"house"},{pts:[[134.4,163.9],[139.1,153.9],[148.6,158.4],[144,168.3],[134.4,163.9]],h:6.5,kind:"house"},{pts:[[-208.3,188.7],[-202.1,174.3],[-189.4,179.8],[-195.6,194.2],[-208.3,188.7]],h:6.5,kind:"house"},{pts:[[147.5,47.1],[153.1,37.7],[162.5,43.3],[156.9,52.7],[147.5,47.1]],h:6.5,kind:"house"},{pts:[[-19.5,262.5],[-17.1,256.3],[-15.3,251.6],[-15.2,251.3],[3.9,258.7],[-.4,269.8],[-19.5,262.5]],h:6.5,kind:"house"},{pts:[[-50.2,256.2],[-47.9,250.4],[-43,237.8],[-40.3,238.8],[-35.3,240.8],[-42.4,259.2],[-50.2,256.2]],h:6.5,kind:"house"},{pts:[[-35,208.2],[-30.5,197.5],[-3.9,208.8],[-7.3,216.8],[-26.1,208.9],[-27.2,211.5],[-35,208.2]],h:6.5,kind:"house"},{pts:[[-109.4,465.4],[-101.8,448.1],[-94.8,451.3],[-97.6,457.6],[-92.7,459.8],[-97.5,470.7],[-109.4,465.4]],h:6.5,kind:"house"},{pts:[[-448.3,80.2],[-444.1,70.6],[-428.1,77.6],[-423.2,79.7],[-420.3,81],[-424.5,90.6],[-448.3,80.2]],h:6.5,kind:"house"},{pts:[[-244.7,187.4],[-238.6,170.7],[-236.2,171.6],[-232.1,173.1],[-229.3,174.1],[-235.4,190.8],[-244.7,187.4]],h:6.5,kind:"house"},{pts:[[-88.8,468.8],[-84.1,458.5],[-75.3,462.6],[-78.5,469.7],[-77.8,470],[-79.3,473.2],[-88.8,468.8]],h:6.5,kind:"house"},{pts:[[140.3,28.2],[151,10.9],[162.4,17.9],[159.3,22.9],[158.3,24.5],[152.8,21.1],[146.3,31.8],[140.3,28.2]],h:6.5,kind:"house"},{pts:[[-230.2,161.2],[-225.3,149.9],[-217.7,153.2],[-220.1,158.8],[-208.8,163.7],[-213.6,174.8],[-225.7,169.6],[-223.3,164.2],[-230.2,161.2]],h:6.5,kind:"house"},{pts:[[-15.5,46.6],[-9.9,32.7],[9.2,40.8],[3.4,54.6],[-1.8,52.4],[-2.9,55.1],[-11.1,51.6],[-9.9,48.8],[-15.5,46.6]],h:6.5,kind:"house"},{pts:[[-28.9,232.6],[-28.6,232.1],[-25.6,226],[-22.3,219.4],[-14.9,223.1],[-15.6,224.6],[-12.4,226.2],[-18.4,238],[-28.9,232.6]],h:6.5,kind:"house"},{pts:[[48.8,74.6],[54.2,61.3],[72.9,68.8],[67.5,82.1],[61.6,79.8],[60.2,83.4],[53,80.5],[54.4,76.9],[48.8,74.6]],h:6.5,kind:"house"},{pts:[[16.5,60.6],[22.1,47.8],[39.4,55.2],[34.2,67.2],[29.2,65],[27.5,68.9],[21.9,66.5],[22.5,63.2],[16.5,60.6]],h:6.5,kind:"house"},{pts:[[447.9,-105.3],[449.5,-109],[451.1,-108.4],[454.3,-115.9],[464.6,-111.4],[465.5,-113.5],[475.8,-109.1],[472.5,-101.5],[474.6,-100.6],[469.8,-89.5],[448.7,-98.6],[451,-103.9],[447.9,-105.3]],h:6.5,kind:"house"},{pts:[[456.3,-134.4],[459.6,-142.2],[457.7,-143],[462.5,-154.3],[473.3,-149.7],[474.2,-151.8],[484.8,-147.3],[481.7,-140],[484,-139],[478.9,-127.1],[467.5,-131.9],[466.6,-129.9],[456.3,-134.4]],h:6.5,kind:"house"},{pts:[[341.4,-256.2],[345.4,-271.8],[365.8,-266.7],[361.9,-251.1],[341.4,-256.2]],h:6.5,kind:"house"},{pts:[[308.5,-264.1],[312.4,-279.6],[332.7,-274.4],[328.8,-259],[308.5,-264.1]],h:6.5,kind:"house"},{pts:[[421.6,-152.2],[428.7,-173.3],[440.6,-169.2],[441.2,-171.2],[452,-167.5],[444.6,-145.6],[432.8,-149.6],[432.4,-148.5],[421.6,-152.2]],h:6.5,kind:"house"},{pts:[[96,-37],[82.8,-36],[81.1,-15.2],[75,5.8],[66.7,19.6],[80.5,29.4],[89,13.4],[97.5,-14.4],[96,-37]],h:6.5,kind:"house"},{pts:[[24.6,-90.6],[19.8,-78.9],[33.2,-64.8],[41.6,-51.6],[45.8,-35.8],[54.6,-38.1],[59.7,-39],[57,-55.3],[49.2,-71.4],[43.9,-84],[29,-96.2],[24.6,-90.6]],h:6.5,kind:"house"},{pts:[[326.6,128.1],[314.8,132.4],[310.4,119.5],[290.5,109],[284.3,109.4],[277.7,112.4],[273,119.2],[265.5,141.5],[282.3,190.3],[287,188.9],[299.9,184.9],[301.6,191.5],[309.6,189.1],[312.6,197.1],[332.9,190.8],[334.4,195.3],[347.9,190.5],[326.6,128.1]],h:6.5,kind:"house"},{pts:[[204.8,316.2],[182.2,362.6],[192,367.3],[214.6,320.9],[204.8,316.2]],h:6.5,kind:"roof"},{pts:[[222.8,273.8],[209.4,301.2],[220.8,306.7],[234.1,279.4],[222.8,273.8]],h:6.5,kind:"house"},{pts:[[261.7,356.2],[253.6,373.4],[247.4,370.5],[255.5,353.2],[261.7,356.2]],h:6.5,kind:"house",name:"Vecchietti Autolavaggi"},{pts:[[432.9,155.5],[431.4,158.6],[435.7,160.7],[437.2,157.6],[432.9,155.5]],h:6.5,kind:"service"},{pts:[[235.9,342.3],[244.5,346.4],[246.1,343],[237.5,338.8],[235.9,342.3]],h:6.5,kind:"service"},{pts:[[229.4,338.1],[224.2,348.8],[219.5,346.6],[224.7,335.9],[229.4,338.1]],h:6.5,kind:"house"},{pts:[[87.2,403.9],[91,405.5],[92.7,401.3],[89,399.7],[87.2,403.9]],h:6.5,kind:"service"},{pts:[[-18.4,-23.6],[-24.5,-8.7],[-5.7,0],[18.3,2.4],[33.6,.8],[32.4,-16.7],[17.4,-15.6],[-6,-18.8],[-18.4,-23.6]],h:6.5,kind:"house"}],roads:JSON.parse('[{"pts":[[350.8,-81.3],[357.8,-81],[362.8,-82.1],[367.3,-84.2],[371.4,-87.2],[375,-91.4],[377.6,-96.3],[378.9,-101.6],[379,-107.1],[377.6,-113.2],[374.7,-118.7],[370.2,-123.5],[364.6,-126.8],[358.3,-128.6],[351.8,-128.5],[346.6,-127.2],[341.9,-124.8],[337.8,-121.4],[334.1,-116.4],[331.9,-110.7],[331.2,-104.6],[332,-98.6],[334.1,-93.3],[338.4,-87.7],[344.1,-83.6],[350.8,-81.3]],"w":7,"kind":"tertiary","name":"Rotonda Trattati di Roma"},{"pts":[[-250,895.6],[-240.2,870.8],[-223.5,833.7],[-206.7,799.3],[-198.2,783.5],[-190.3,770.8],[-170.1,737.8],[-163.3,725.7],[-158.5,714.5],[-144,656.4],[-126,602.8],[-118.3,566.5],[-114.8,557.5],[-105.6,535.4],[-95.3,515.2],[-83,493.8],[-52.9,442],[-40.5,417.9],[-20.4,368.5],[-13.4,350],[-7.4,332.9],[4,299.6],[5.3,296.7],[7.1,293.8],[9.1,291.4],[11.6,289.5],[13.4,289],[15.1,288.5],[18.6,287.6],[23,288.1],[49.2,299.2],[53.9,300.3],[57.7,300.1],[62.2,299.4],[66,297.6],[69.4,294.5],[87.7,263.1],[102.7,240.2],[127.5,209.1],[133.7,200],[138.7,192.1],[151,169.4],[157.8,155.4],[166.1,135.5],[178.2,104.4],[187.7,82],[189.5,77.3],[192,73.2],[203,58.1],[215.1,43.3],[220.4,38.9],[225.7,36.4],[229.9,34.5],[233.7,31.1],[253,6.5],[267.8,-13.8],[274.5,-26.7],[278.9,-37.9],[281.4,-52.6],[282.3,-64.6],[281.4,-94.6],[279.6,-121.1],[279.7,-123.6]],"w":6,"kind":"unclassified","name":"Via Frabaccia"},{"pts":[[232,165.6],[228.2,161.7],[223.6,158.8],[219.6,157.2],[216.5,156.4],[209,156.2],[203.7,157.4],[197.9,160.2],[191.3,166.5],[187.4,174.2],[186.3,182.1],[187.2,188.5],[188.7,192.6],[191.6,197.3],[197,202.5],[205,206.4],[209.3,207.2],[215.3,207.1],[221.1,205.7],[223.5,204.6],[226.7,202.7],[228.4,201.4],[232.1,197.7],[235,193.1],[236.5,189.6],[237.4,185.5],[237.5,178.6],[236,172.4],[233.7,167.9],[232,165.6]],"w":7,"kind":"tertiary","name":"Rotonda Ingrè"},{"pts":[[178,251.5],[193.1,231.4],[200.8,221.8],[215.3,207.1]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[178,251.5],[154.3,297.6],[121,375.3],[105,418.2]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[233.7,167.9],[232.5,161],[232,154.3],[232.4,150.5],[233.6,145.4],[235.9,138.4],[247.3,109.1]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[247.3,109.1],[239,120.1],[230.1,131.2],[220,143.8],[214.3,150.6],[209,156.2]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[334.1,-93.3],[335.3,-88.3],[335.7,-81.3],[335,-76],[334.6,-75],[331.3,-66],[321.5,-39.5]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[321.5,-39.5],[285.8,32.1],[247.3,109.1]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[573.7,-552.2],[571,-547.2],[459.2,-315.4],[454.9,-306.5],[388.5,-169.7]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[529.4,26.3],[512.2,32.2],[503.6,35.3],[501,37.3],[496.5,45.7],[455.4,59.8]],"w":2.2,"kind":"cycleway"},{"pts":[[553,-44],[495.4,-69],[491.5,-69.6],[478.8,-68.9],[473.5,-70.1],[441.2,-82.8],[420.5,-91.6],[417.4,-91.6]],"w":2.5,"kind":"cycleway"},{"pts":[[240,-99.2],[237.6,-95],[233.9,-88.7],[230.5,-82.8],[229.2,-57.3],[240.2,-44.7],[243.4,-41.1]],"w":4,"kind":"service"},{"pts":[[-50.7,-309.6],[-55.6,-300.8],[-57.9,-296.7],[15.6,-253.2],[60.4,-226.7]],"w":4,"kind":"service"},{"pts":[[86.3,-215],[81.5,-207.9],[74.4,-197.4]],"w":6,"kind":"residential"},{"pts":[[167.9,-27.4],[154.3,-30.6],[142.8,-30.1],[136.2,-27.6],[125.5,-21],[117.9,-12.9],[110.5,-0.1]],"w":4,"kind":"service"},{"pts":[[74.4,-197.4],[98.5,-182.9],[142,-157.3],[185.5,-131.4],[230,-104.8],[240,-99.2],[248.2,-93.9],[251.2,-90.8],[253.6,-87.7],[255.1,-85.2],[256.5,-82.8],[257.8,-78.7],[258.6,-74.6],[258.5,-68.1],[258,-62.9],[255.7,-57],[250,-47.9],[243.4,-41.1],[203.3,0.7],[197,3],[192.4,3.4],[188.2,2.6],[178.6,-3],[157.6,-15.2],[152.2,-16.3],[147.1,-15.8],[141.7,-14.8],[135.2,-10.9],[130.9,-6.3],[127.9,-1.4],[97.3,50.4],[94.2,54.6],[89.2,58.3],[82.3,60.8],[76.5,61],[69.1,59.5],[63.5,57],[-43.2,8.6],[-47.5,5.3]],"w":6,"kind":"residential","name":"Via Giuseppe Impastato"},{"pts":[[337.8,-121.4],[331.2,-119.9],[326.2,-119.1],[321.9,-119.1],[318.5,-119.6],[314.4,-120.9],[281,-130.7],[249.7,-140.5],[163.2,-192.3],[112.4,-221.8],[107.8,-227.1]],"w":6,"kind":"residential","name":"Via Emanuela Loi"},{"pts":[[86.1,-242.3],[82.2,-239.6],[79.3,-235.8],[77.8,-231.3],[77.7,-226.6],[79.2,-221.8],[82.2,-217.8],[86.3,-215],[90.9,-213.6],[95.7,-213.8],[100.2,-215.5],[104,-218.5],[106.6,-222.5],[107.8,-227.1],[107.6,-231.7],[106,-236],[103.2,-239.7],[99.4,-242.3],[95.1,-243.7],[90.4,-243.7],[86.1,-242.3]],"w":6,"kind":"residential"},{"pts":[[107.7,-199.6],[124.9,-189.4],[151.8,-173.6],[199.3,-145.6],[240.3,-121.5],[254.8,-112.9]],"w":4,"kind":"service"},{"pts":[[167.9,-27.4],[174.9,-41.4],[176.5,-53.8],[175.7,-68.3],[165.9,-101.6],[162.6,-108],[158.9,-115.2],[147.1,-130.7],[136.9,-138.5],[132.8,-141.7],[126.3,-145.2],[121.5,-146.2],[113,-148.1],[95.2,-150],[89.2,-149.7],[76.9,-149]],"w":1.8,"kind":"footway"},{"pts":[[-89.9,-328.2],[-79.8,-326.5],[-68.4,-319.9],[-50.7,-309.6],[23.1,-265.7],[69.3,-238.1],[74,-233.5],[77.7,-226.6]],"w":6,"kind":"residential"},{"pts":[[86.1,-242.3],[79.1,-243.2],[75,-244.3],[27.3,-272.6],[-64.4,-327.1],[-77.4,-334.8],[-81.9,-341.6]],"w":6,"kind":"residential"},{"pts":[[100.2,-215.5],[108.8,-215],[159,-185.5],[206.5,-157.6],[248.1,-133.1],[279.7,-123.6],[311.7,-113.5],[317,-111.9],[321.9,-109.5],[325.9,-106.1],[332,-98.6]],"w":6,"kind":"residential","name":"Via Emanuela Loi"},{"pts":[[199.3,-145.6],[201.9,-150],[206.5,-157.6]],"w":4,"kind":"service"},{"pts":[[-84,-333.8],[-82.4,-337.5],[-81.9,-341.6],[-82.6,-346.1],[-84.6,-350.2],[-87.8,-353.5],[-91.8,-355.8],[-96.3,-356.7],[-100.9,-356.2],[-105.1,-354.4],[-108.6,-351.4],[-111.1,-347.5],[-112.2,-343],[-112,-338.3],[-110.3,-334],[-107.4,-330.3],[-103.5,-327.7],[-99,-326.4],[-94.3,-326.6],[-89.9,-328.2],[-86.5,-330.6],[-84,-333.8]],"w":6,"kind":"residential"},{"pts":[[141.7,-14.8],[140.1,-18.5],[137.6,-24.4]],"w":4,"kind":"service"},{"pts":[[332.4,216.6],[326.2,198.2]],"w":4,"kind":"service"},{"pts":[[254.3,202.3],[245.5,193],[241.6,188.2],[239.3,183.3],[237.5,178.6]],"w":4,"kind":"service"},{"pts":[[442.9,182.6],[438,192.1],[410.2,244.8],[403.9,250.6],[395.8,255.5],[387.5,258.4],[378.5,258.3],[372.6,257],[367,254.9],[352.1,246.8],[341.4,240.1]],"w":4,"kind":"service"},{"pts":[[454.4,180.2],[480,191.2],[483,192.5],[489.1,191.6],[511.8,144.3],[516.4,134.7],[514.9,131.3],[510.9,129.5],[506.1,127.4],[491.1,120.8]],"w":4,"kind":"service"},{"pts":[[536.3,36.2],[533.2,25],[526.8,5.4],[523,-6.5],[519.8,-11.3],[514.4,-15.6],[477.2,-34]],"w":4,"kind":"service","name":"Via Pio La Torre"},{"pts":[[149.1,-168.3],[148.9,-166.2],[149.4,-163.9],[151.3,-161.2],[228.9,-115.2],[233.1,-114.9],[237.4,-116.8]],"w":1.8,"kind":"footway"},{"pts":[[448.8,165.8],[446.3,165.7],[443.9,166.3],[441.7,167.6],[439.9,169.4],[438.5,172.1],[438.2,175.2],[438.8,178.1],[440.5,180.7],[442.9,182.6],[445.3,183.5],[447.8,183.7],[450.3,183.2],[452.6,182],[454.4,180.2],[455.7,177.9],[456.3,175.3],[456.1,172.7],[455.1,170.2],[453.4,168.1],[451.2,166.6],[448.8,165.8]],"w":4,"kind":"service"},{"pts":[[320.8,229.5],[291.1,219.2],[262,206],[254.3,202.3]],"w":4,"kind":"service"},{"pts":[[482.9,175.4],[500.7,138.6],[506.1,127.4],[529.8,78.2],[515.8,71.4],[491.1,120.8],[486.1,131.3],[470.8,163.6],[471.5,167.8],[473,170.6],[482.9,175.4]],"w":4,"kind":"service"},{"pts":[[529.5,46.9],[519.3,50.9],[513,53.3],[507,56.5],[501.9,61.4],[498.2,67.4],[495.8,72.4],[470.8,123.6],[454.4,157],[451.2,166.6]],"w":4,"kind":"service"},{"pts":[[434.3,-73.7],[405.2,-90],[391.8,-97.4],[386.5,-101],[381.1,-105.5],[379,-107.1]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[346.1,225.1],[344.1,221.5],[340.8,218.5],[336.8,216.8],[332.4,216.6],[328.8,217.6],[325.5,219.5],[323,222.3],[321.4,225.8],[320.8,229.5],[321.5,233.5],[323.3,237.1],[326.2,240],[329.8,241.8],[333.8,242.5],[337.8,241.9],[341.4,240.1],[344.4,237.2],[346.3,233.4],[346.9,229.3],[346.1,225.1]],"w":4,"kind":"service"},{"pts":[[458.6,72.3],[473.1,79.3],[455.5,115.8],[438.2,151.9],[424.1,145.1]],"w":4,"kind":"service"},{"pts":[[550.8,-31.1],[548.2,-32],[488.6,-52],[437.2,-72.5],[434.3,-73.7]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[495.8,72.4],[483.6,67.2],[470.7,61.2],[466.5,61.3],[463.9,62.1],[462.7,64],[458.6,72.3],[441.3,108.7],[426.3,140.5],[424.1,145.1],[420.2,153.4],[421.3,160.4],[427.1,163.8],[429.1,164.6],[439.9,169.4]],"w":4,"kind":"service"},{"pts":[[163.2,-192.3],[159,-185.5],[156.9,-182],[151.8,-173.6],[149.1,-168.3],[144,-160.7],[142,-157.3],[139.6,-153.2],[132.8,-141.7],[110.7,-104],[98.7,-83.7],[86.7,-63.5],[75.1,-43.8],[62.2,-21.8],[63.2,-18.8],[63.3,-15.8],[62.6,-12.5],[61.3,-9.4],[56.9,-5],[54.2,-3.4],[50.5,-2.8],[49.1,-6],[48.7,-9.7],[49.3,-13.1],[50.5,-16.8],[53.5,-19.7],[57.2,-21.7],[59.4,-22.2],[62.2,-21.8]],"w":1.8,"kind":"footway"},{"pts":[[388.5,-169.7],[366.6,-142.9],[359.9,-135.8],[351.8,-128.5]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[374.7,-118.7],[375,-126.4],[375.6,-132.8],[376.7,-137.8],[381.7,-152.5],[388.5,-169.7]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[344.1,221.5],[349.6,215.2],[354.9,203.7],[352.9,192.3],[352.4,189.5],[331.9,131.3],[333.5,122],[389.5,9.8],[393.9,6.7],[451.4,-12],[452.6,-12.4],[459,-14.9],[463.3,-17.6],[466,-20.3],[477.2,-34]],"w":4,"kind":"service","name":"Via Pio La Torre"},{"pts":[[511.4,30.3],[501.1,34.4],[498.5,37],[495.9,42],[493.9,44.6],[464.9,54.4],[454,58.3],[451.8,59.1],[429,102.5],[423.9,95.7],[405.7,131],[399.1,143.7],[409.7,172.6],[416.8,170.5]],"w":1.8,"kind":"footway"},{"pts":[[233.7,31.1],[235.6,38.2]],"w":1.8,"kind":"footway"},{"pts":[[171.6,149.8],[156.2,181.4],[148.3,198.6],[136.7,215.8],[99.3,265],[78.6,301.1],[74.1,305.6],[66.2,310.6],[51.5,316.3],[32.9,322.5],[22.8,325.9],[15.8,330.1],[8.1,337.6],[2.4,346.2],[-34.5,432.8],[-95.3,539.5],[-101,556.5],[-112.4,590],[-114.1,601.8],[-114,613.3],[-111.6,623.6],[-106.5,634],[-100.3,641.7],[-92.6,648.4],[-84.5,652.6],[-58.3,664.9],[-49.2,665.1],[-37.1,663.8]],"w":3,"kind":"cycleway","name":"Bassa Via dei Parchi di Castel Maggiore"},{"pts":[[43.9,338],[56.2,343.6],[64,350.5],[69.4,358.6],[72.6,368]],"w":1.8,"kind":"footway"},{"pts":[[145.4,229.5],[147.9,232.6],[149,235.5],[148.6,239.8],[147.7,243.7],[105,326.5],[99.3,331.1],[92.9,333.5]],"w":1.8,"kind":"footway"},{"pts":[[74.5,318.7],[65.2,326.7],[54.7,334.8],[43.9,338],[32.7,336.1],[24.3,337.8],[14.7,341.9],[7,348.9],[-2.7,365.3],[-32.7,435.4],[-98.3,591.7],[-98.7,605.3],[-96.2,616.3],[-85.1,631.2],[-68.5,638.8]],"w":2,"kind":"footway"},{"pts":[[477.2,-34],[458.8,-40.5]],"w":4,"kind":"service","name":"Via Pio La Torre"},{"pts":[[15.9,665.7],[109.3,444.2],[122.1,410.6],[135,407.7],[142.3,390.9],[142.8,388.1],[142.3,384.5],[139.7,381.1]],"w":2,"kind":"cycleway"},{"pts":[[279.7,-123.6],[281,-130.7]],"w":6,"kind":"residential"},{"pts":[[190.8,-52.8],[176.5,-53.8],[149.5,-55.1],[126.5,-68.1],[98.7,-83.7],[69.9,-100],[61.1,-107],[53.2,-114.1],[47.3,-124.4]],"w":1.8,"kind":"footway"},{"pts":[[69.9,-100],[75.6,-106.6],[86,-109.4],[94.1,-109.1],[104.6,-106.4],[110.7,-104],[119,-97.5],[125,-88.5],[128.8,-78.4],[126.5,-68.1],[119.9,-61.6],[110.1,-57.8],[100.5,-58.2],[93.5,-60.8],[86.7,-63.5],[78.8,-69.7],[73.7,-75.8],[71.1,-81.3],[68.2,-88.3],[68.4,-95.1],[69.9,-100]],"w":1.8,"kind":"footway"},{"pts":[[-111.1,-347.5],[-119.2,-349.7],[-125.9,-348.4],[-130.2,-346.4],[-132.9,-342.4],[-133.3,-338.2],[-125.5,-303.4]],"w":6,"kind":"residential"},{"pts":[[515.8,9],[506,-3.3],[496.7,-10.4],[483.8,-16],[472.4,-16.1],[462.5,-13.7],[452.4,-8.9],[446.7,-6.2],[435.8,-0.1],[394.1,13.9],[377.2,46.4],[352.1,94.6],[335.8,126.2],[356.4,191.4],[383.6,182.3]],"w":1.8,"kind":"footway"},{"pts":[[409.7,172.6],[383.6,182.3],[366.4,136.8],[381.3,108.6],[402.1,69],[417.5,39.8],[445.9,31],[505,12.8]],"w":4,"kind":"pedestrian"},{"pts":[[423.9,95.7],[402.1,69],[377.2,46.4]],"w":4,"kind":"pedestrian"},{"pts":[[-47.5,5.3],[-49.8,9.5],[-59.4,26.8]],"w":1.8,"kind":"footway"},{"pts":[[-47.5,5.3],[-166.2,-83.6],[-170.9,-90.4],[-172.6,-100.6],[-158.6,-198.7]],"w":6,"kind":"residential","name":"Via Giuseppe Impastato"},{"pts":[[191.6,197.3],[192.3,202.7],[191.8,208.7],[190.6,214.3],[185.6,228.1],[178,251.5]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[226.7,202.7],[234.9,200.6],[241.1,200.2],[247.4,200.7],[254.3,202.3]],"w":4,"kind":"service"},{"pts":[[321.5,-39.5],[339.6,-62.1],[343.8,-68.3],[345.1,-69.8],[349.1,-74.7],[354.7,-79],[357.8,-81]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[371.4,-87.2],[380,-86.9],[390.5,-85.3],[434.3,-73.7]],"w":7,"kind":"tertiary","name":"Viale della Repubblica"},{"pts":[[15.1,288.5],[10.6,285.9],[3.4,281.7],[0.6,280.6],[-87.7,246.6],[-167.1,217.9],[-214.7,200.1],[-219.1,198.8],[-222.7,199],[-228.2,199.5],[-234.7,199.1],[-244.8,195.6],[-258.7,190.1],[-262.7,187.4],[-268.1,182.2],[-271.6,178.5],[-274.4,176.5],[-325.8,155],[-340.6,147.5]],"w":6,"kind":"residential","name":"Via Frabaccia"},{"pts":[[285.9,-94.5],[301.6,-95.6],[304.9,-96.7]],"w":1.8,"kind":"path"},{"pts":[[400.1,-212.3],[564.5,-550]],"w":2.2,"kind":"cycleway"},{"pts":[[285.9,-94.5],[286.8,-79.4],[287.5,-69.8],[286.4,-54.5],[283.9,-39.3],[280.1,-27.3],[275.1,-15.8],[254.9,14.1],[235.6,38.2]],"w":4,"kind":"path"},{"pts":[[235.6,38.2],[171.6,149.8]],"w":4,"kind":"path"},{"pts":[[92.9,333.5],[84.3,331.8],[79.1,328.2],[76.8,324.1],[74.5,318.7],[74.6,315.3],[76.1,310.8],[131.8,232.3],[137.4,228.2],[141,228.2],[145.4,229.5]],"w":1.8,"kind":"footway"},{"pts":[[72.6,368],[79.2,347.5],[92.9,333.5]],"w":1.8,"kind":"footway"},{"pts":[[-68.5,638.8],[-49.8,637.6],[-30.2,624.4],[-17.4,600.2],[73.7,383.2],[72.6,368]],"w":2,"kind":"footway"},{"pts":[[-13.8,-566.3],[-16.1,-561.4],[-18.2,-557],[-20.2,-552.7],[-21.9,-549],[-23.9,-544.9],[-25.6,-541.2],[-27.1,-537.8],[-29,-533.9],[-30.9,-529.8],[-31.7,-528.1],[-33.4,-524.5],[-34.2,-522.7],[-36.1,-518.6],[-37.5,-515.8],[-38.5,-513.6],[-41.1,-508],[-42.5,-505],[-44.4,-500.9],[-46.3,-496.8],[-48.2,-492.8],[-49.5,-489.9],[-50.5,-487.9],[-51.4,-485.8],[-52.5,-483.5],[-53.3,-481.8],[-54.9,-478.4],[-57.4,-472.9],[-59.4,-468.6],[-61.1,-465.1],[-61.7,-463.6],[-62.9,-461.2],[-64.6,-457.6],[-65.5,-455.6]],"w":1.8,"kind":"path"},{"pts":[[-42.5,-505],[-53,-510.5],[-55.8,-510.2],[-59.5,-509.8],[-66.8,-512.7],[-67.3,-511.6],[-69.1,-507.9],[-70.8,-504.5],[-72.3,-501.5],[-75.4,-495],[-78.5,-488.7],[-79,-487.8],[-81.8,-481.9],[-82.2,-481.2],[-84.7,-476.1],[-85.9,-473.7],[-87.1,-471],[-87.8,-469.8]],"w":1.8,"kind":"path"},{"pts":[[-85.9,-473.7],[-95.7,-479.4]],"w":1.8,"kind":"path"},{"pts":[[-82.2,-481.2],[-93.1,-486.8]],"w":1.8,"kind":"path"},{"pts":[[-84.7,-476.1],[-74.4,-469.7]],"w":1.8,"kind":"path"},{"pts":[[-77,-516.8],[-83.4,-519.4],[-99.3,-479.7],[-99,-476.7],[-98.1,-474.7],[-92.5,-470.8],[-88.6,-468.4],[-66,-454.8],[-38.6,-438.3],[-7.2,-420],[249.7,-267.7],[282.7,-252.4],[357.1,-227.6],[364.6,-209.7]],"w":1.8,"kind":"path"},{"pts":[[-90.6,-494],[-79,-487.8]],"w":1.8,"kind":"path"},{"pts":[[-35.3,-490.8],[-46.3,-496.8]],"w":1.8,"kind":"path"},{"pts":[[-44.4,-500.9],[-32.2,-494.2]],"w":1.8,"kind":"path"},{"pts":[[-64.6,-457.6],[-53.2,-451.3]],"w":1.8,"kind":"path"},{"pts":[[316.8,-127.7],[322.7,-126.2],[329.8,-127.8],[336.8,-133.2],[343.8,-136.6],[354.1,-140.6],[360.7,-145.9],[382.2,-174.2],[383.5,-176.6],[387.8,-184.9]],"w":3,"kind":"cycleway"},{"pts":[[310.7,-110.7],[311.7,-113.5],[314.4,-120.9],[316.8,-127.7]],"w":2.2,"kind":"cycleway"},{"pts":[[352.1,94.6],[381.3,108.6]],"w":1.8,"kind":"footway"},{"pts":[[445.9,31],[435.8,-0.1]],"w":1.8,"kind":"footway"},{"pts":[[445.9,31],[464.9,54.4]],"w":1.8,"kind":"footway"},{"pts":[[405.7,131],[414.6,135]],"w":1.8,"kind":"footway"},{"pts":[[429,102.5],[430.5,103.2],[437.3,106.6]],"w":1.8,"kind":"footway"},{"pts":[[437.3,106.6],[441.3,108.7],[443.4,109.7]],"w":1.8,"kind":"footway"},{"pts":[[443.4,109.7],[452.2,114.2]],"w":1.8,"kind":"footway"},{"pts":[[452.2,114.2],[455.5,115.8],[458,117.1]],"w":1.8,"kind":"footway"},{"pts":[[458,117.1],[464.3,120.3]],"w":1.8,"kind":"footway"},{"pts":[[464.3,120.3],[470.8,123.6],[476.9,126.6]],"w":1.8,"kind":"footway"},{"pts":[[476.9,126.6],[482.8,129.6]],"w":1.8,"kind":"footway"},{"pts":[[482.8,129.6],[486.1,131.3],[488.2,132.3]],"w":1.8,"kind":"footway"},{"pts":[[458.8,-40.5],[441,-47.7],[405.9,-65.2],[399.8,-66.2],[394.6,-65.8],[364.4,-55.7],[358.8,-52.7],[354.8,-48.4],[335.1,-16.5],[275.9,99.7],[261.5,140.5],[276.3,186.3],[277.5,190.7],[276.9,195.4],[275,198.2],[272.5,199.9],[262,206]],"w":4,"kind":"service","name":"Via Pio La Torre"},{"pts":[[458.8,-40.5],[450.2,-39.6],[443.2,-37.1],[441.9,-36.3]],"w":4,"kind":"service"},{"pts":[[-36,-486.5],[-48.2,-492.8]],"w":1.8,"kind":"path"},{"pts":[[-38.7,-480.9],[-50.5,-487.9]],"w":1.8,"kind":"path"},{"pts":[[-40.5,-477.2],[-52.5,-483.5]],"w":1.8,"kind":"path"},{"pts":[[-43.2,-471.6],[-54.9,-478.4]],"w":1.8,"kind":"path"},{"pts":[[-48.2,-492.8],[-58.9,-499]],"w":1.8,"kind":"path"},{"pts":[[-46.3,-496.8],[-56.9,-501.9],[-57.3,-503.3]],"w":1.8,"kind":"path"},{"pts":[[-49.5,-489.9],[-60.7,-495.1]],"w":1.8,"kind":"path"},{"pts":[[-63.4,-489.3],[-75.4,-495]],"w":1.8,"kind":"path"},{"pts":[[-66.5,-482.5],[-78.5,-488.7]],"w":1.8,"kind":"path"},{"pts":[[-51.4,-485.8],[-62.4,-491.4]],"w":1.8,"kind":"path"},{"pts":[[-54.9,-478.4],[-65.7,-484.2]],"w":1.8,"kind":"path"},{"pts":[[-57.4,-472.9],[-68.2,-478.9]],"w":1.8,"kind":"path"},{"pts":[[-69.6,-476],[-81.8,-481.9]],"w":1.8,"kind":"path"},{"pts":[[-59.4,-468.6],[-70.1,-474.9]],"w":1.8,"kind":"path"},{"pts":[[-57.4,-472.9],[-45.8,-466.5]],"w":1.8,"kind":"path"},{"pts":[[-59.4,-468.6],[-47.9,-462.2]],"w":1.8,"kind":"path"},{"pts":[[-61.1,-465.1],[-49.4,-459]],"w":1.8,"kind":"path"},{"pts":[[-61.7,-463.6],[-72,-469.3]],"w":1.8,"kind":"path"},{"pts":[[-62.9,-461.2],[-51.5,-454.8]],"w":1.8,"kind":"path"},{"pts":[[-64.6,-457.6],[-75.2,-463.7]],"w":1.8,"kind":"path"},{"pts":[[-75.2,-463.7],[-87.1,-471]],"w":1.8,"kind":"path"},{"pts":[[441.2,-82.8],[440.5,-81],[437.2,-72.5],[434.3,-64.9]],"w":1.8,"kind":"footway"},{"pts":[[434.3,-64.9],[431.6,-57.7],[439.1,-54.4],[443,-52.4],[442.1,-50.3]],"w":1.8,"kind":"footway"},{"pts":[[442.1,-50.3],[441,-47.7],[439.7,-45.3],[439,-44],[443.2,-37.1],[444.3,-34]],"w":1.8,"kind":"footway"},{"pts":[[444.3,-34],[450.2,-15.3]],"w":1.8,"kind":"footway"},{"pts":[[450.2,-15.3],[451.4,-12]],"w":1.8,"kind":"footway"},{"pts":[[451.4,-12],[452.4,-8.9]],"w":1.8,"kind":"footway"},{"pts":[[381.2,47.2],[441.6,26.4],[447.4,26.6],[511.6,6.2],[521.6,3],[522.9,6.8],[528.8,24.6],[513.5,29.7],[510.6,28.1],[506.7,26],[503.5,16.9],[427.3,43.4],[414.6,71.6],[429.3,99],[413.9,88.4],[403.5,79.3],[373.8,142.6],[382.6,169.7],[395.9,165.1],[407.7,161.9],[409.4,166.8],[414.8,165.5],[416.8,170.5],[419.1,176.5],[407.5,180.3],[409.7,189.7],[403,184],[362,197.6],[358.9,186.9],[376.9,180.4],[359.8,133.6],[372.6,107.7],[377.8,102.9],[394.4,69.9],[379.6,55.3],[381.2,47.2]],"w":4,"kind":"pedestrian"},{"pts":[[434.3,-64.9],[414.4,-72.9],[396.8,-78.1],[388.5,-80.1],[383.1,-80.8],[377.9,-80.7],[371.2,-78.8],[367,-76.7],[362.8,-75.5],[357.3,-72.7],[350.6,-66.5]],"w":1.8,"kind":"footway"},{"pts":[[350.6,-66.5],[345.1,-69.8],[334.6,-75],[331.3,-77]],"w":1.8,"kind":"footway"},{"pts":[[331.3,-77],[331.9,-81],[331.3,-85.8],[328.3,-92.6],[326.6,-97.3],[325.3,-101.9],[323.2,-105.2],[320.1,-107.7],[315.3,-109.6],[310.7,-110.7]],"w":1.8,"kind":"footway"},{"pts":[[310.7,-110.7],[287.5,-118.2],[285.8,-118],[284.9,-116.1],[285.9,-94.5]],"w":1.8,"kind":"footway"},{"pts":[[356.4,191.4],[352.9,192.3],[348.2,193.8],[331.4,198.6]],"w":1.8,"kind":"footway"},{"pts":[[416.8,170.5],[418.5,170.4],[423.8,172.4],[425.2,172.1],[427.3,168]],"w":1.8,"kind":"footway"},{"pts":[[427.3,168],[429.1,164.6],[431.1,160.9]],"w":1.8,"kind":"footway"},{"pts":[[411.9,149.9],[420.2,153.4],[424.2,155],[424.3,156.2],[424.7,157.5],[431.1,160.9],[434.1,162.1],[437,162.4],[440.7,161.5],[445.5,157.9],[448.1,153.4],[464.3,120.3],[485.5,77.7],[485.1,75.2],[481.4,72.1]],"w":1.8,"kind":"footway"},{"pts":[[481.4,72.1],[483.6,67.2],[484.9,64.4]],"w":1.8,"kind":"footway"},{"pts":[[484.9,64.4],[488.8,65.7],[492.8,64.3],[494.1,60.5],[498.1,54.6],[504.5,50.1],[514.6,45.2],[516.8,44.3]],"w":1.8,"kind":"footway"},{"pts":[[482.1,186.5],[468.6,180.2],[463.9,176.2],[459.9,162.9],[461.1,156.9],[476.9,126.6],[495.9,87.3],[505.2,68],[508,63.5],[513.1,60.5],[521.9,57.6]],"w":1.8,"kind":"footway"},{"pts":[[-158.6,-198.7],[-146.6,-283.2],[-141.1,-294.1],[-129,-302.8],[-125.5,-303.4],[-116.2,-305.1],[-103.6,-302.4],[6.5,-237.4],[74.4,-197.4]],"w":6,"kind":"residential","name":"Via Giuseppe Impastato"},{"pts":[[156.9,-182],[130.6,-197.8],[110.3,-210]],"w":1.8,"kind":"footway"},{"pts":[[124.9,-189.4],[130.6,-197.8]],"w":1.8,"kind":"footway"},{"pts":[[156.9,-182],[201,-155.6],[198.7,-151.8],[201.9,-150],[205.8,-147.6],[208.2,-151.6],[245.3,-130.2],[274.4,-120.3],[276.4,-94.6]],"w":1.8,"kind":"footway"},{"pts":[[245.3,-130.2],[240.3,-121.5],[237.4,-116.8]],"w":1.8,"kind":"footway"},{"pts":[[144,-160.7],[133.9,-167],[132.9,-170.1],[121.2,-176.6],[118.8,-175.4],[84.2,-197.1],[83.5,-198.3],[83.5,-199.9],[86.7,-205],[88.4,-207.4],[89.6,-208],[91.3,-208.2],[97.3,-208.8],[102,-210.2],[106.4,-211.4],[110.3,-210]],"w":1.8,"kind":"footway"},{"pts":[[237.4,-116.8],[237.4,-112.7],[239.2,-109.5],[266.7,-95.2],[276.4,-94.6],[281.4,-94.6],[285.9,-94.5]],"w":1.8,"kind":"footway"},{"pts":[[237.4,-116.8],[232.7,-109.2],[230,-104.8],[227.7,-101.2]],"w":1.8,"kind":"footway"},{"pts":[[232.7,-109.2],[249,-98.9],[258.4,-88.6],[263.9,-75.6],[263.2,-62.9],[258.8,-52.1],[248.2,-38.7],[210.6,-0.1],[203.5,6.3],[197.2,7.7],[187.9,7.6],[179.6,3.7],[177.1,3.9],[170.9,0.3],[170.2,-2.3],[158.4,-9.6],[148.3,-11.9],[141.9,-10],[135.6,-5.3],[129.4,5.7],[114.1,30.6],[115.2,34.3],[105.3,52.1],[101.3,53],[96.1,59.1],[90.5,62.6],[82.2,65.2],[73.4,65.7],[56.6,58.9],[35.4,49.8],[-36.9,17],[-49.8,9.5]],"w":1.8,"kind":"footway"},{"pts":[[227.7,-101.2],[212.4,-110],[209.7,-105.4],[186.2,-119.3],[188.6,-123.8],[183.4,-126.6],[176.1,-131.9],[139.6,-153.2],[96,-178.6],[90.5,-182.3],[85.9,-184.7],[77.1,-185.7],[68.2,-185],[63,-177.8],[66.4,-168.4],[73.3,-161.3],[76.9,-149]],"w":1.8,"kind":"footway"},{"pts":[[98.5,-182.9],[96,-178.6],[91.1,-171.4],[85.5,-163.1],[84.7,-154.1]],"w":4,"kind":"service"},{"pts":[[185.5,-131.4],[183.4,-126.6],[178.9,-119.1],[174.8,-112.4],[166.6,-105.6]],"w":4,"kind":"service"},{"pts":[[136.2,-27.6],[129,-34.8],[108.2,-34.8]],"w":4,"kind":"service"},{"pts":[[137.6,-24.4],[136.2,-27.6]],"w":4,"kind":"service"},{"pts":[[129,-34.8],[129.2,-39.6],[100.8,-39.5],[102.1,-17.3],[99.6,-4.6],[98.4,1.4],[96.6,8.8]],"w":1.8,"kind":"footway"},{"pts":[[100.8,-39.5],[81.6,-40.5],[75.1,-43.8]],"w":1.8,"kind":"footway"},{"pts":[[227.7,-101.2],[233.9,-97.5],[237.6,-95],[239.9,-93.2],[246.5,-88.8],[250.1,-84.3],[252.8,-78.1],[254.2,-70],[253.7,-62.7],[250.8,-56.6],[246,-49.9],[242.9,-46.5],[240.2,-44.7],[238.1,-42.3],[237.2,-41.2],[224.6,-27.7],[209.9,-12.6],[202.2,-4.4],[198.7,-1.7],[196,-1.1],[192.2,-0.8],[188.1,-1.9],[185.1,-3.8],[163.2,-17.2],[158.8,-19.1],[152.7,-20.6],[147.3,-20.7],[143.7,-19.8],[140.1,-18.5],[135.4,-16.7],[131.9,-13.5],[129.5,-11.3],[126.8,-7.6],[122,0.5],[119.4,5.2],[114.5,2.3],[103.1,21.2],[108,24.2],[103.5,31.7],[97.3,42.4],[93.6,48.5],[90.9,51.7],[87.3,53.8],[83.4,55.6],[78.4,56.6],[70.9,55.5],[66.6,53.6],[62,51.4],[43.1,42.6],[11.4,28.9],[-17.8,15.4],[-39,4.2],[-44.8,1]],"w":1.8,"kind":"footway"},{"pts":[[233.9,-88.7],[229.6,-92.2],[226.2,-93.9],[222.7,-93.7],[220.3,-92.6],[218.6,-91],[216.8,-86.6],[215.8,-81.7],[214.3,-62.1],[212.6,-52.7],[210,-43.3],[208.9,-38.6],[205.6,-25.4]],"w":1.8,"kind":"footway"},{"pts":[[208.9,-38.6],[213.4,-37.6],[218.2,-37.1],[222.2,-37.2],[226.5,-39.3],[229.5,-42.6],[232.8,-46.1],[234,-45.7],[238.1,-42.3]],"w":1.8,"kind":"footway"},{"pts":[[99.6,-4.6],[104.2,-3.6],[110.5,-0.1],[114.5,2.3]],"w":1.8,"kind":"footway"},{"pts":[[86.7,-205],[81.5,-207.9],[75,-211.4]],"w":1.8,"kind":"footway"},{"pts":[[75,-211.4],[75.7,-213.5],[75.9,-215.7],[74.6,-219.3],[72.6,-223.1],[72.1,-227],[71,-231.4],[69.9,-233.6],[57.4,-241.2],[21.1,-262.2],[-49.5,-304.2],[-51.9,-299.2],[-55.6,-300.8],[-59.6,-303.2],[-57.1,-308.7],[-70.2,-316.6],[-68.4,-319.9],[-66.5,-323.2],[-64.4,-327.1],[-62.7,-329.8]],"w":1.8,"kind":"footway"},{"pts":[[21.1,-262.2],[15.6,-253.2],[13.2,-249.1],[8.8,-241.3],[6.5,-237.4]],"w":1.8,"kind":"footway"},{"pts":[[21.1,-262.2],[23.1,-265.7],[27.3,-272.6],[28.9,-275.6]],"w":1.8,"kind":"footway"},{"pts":[[-70.2,-316.6],[-77.5,-304.1],[-81.9,-296.7]],"w":1.8,"kind":"footway"},{"pts":[[-77.5,-304.1],[-77.4,-299.2],[-75.4,-295.9],[-69.5,-291.9],[5.9,-247.5],[9.6,-247.4],[13.2,-249.1]],"w":1.8,"kind":"footway"},{"pts":[[75,-211.4],[72.8,-207.6],[70.2,-206.1],[68.6,-206.1],[60.1,-210.8],[44.9,-219.7],[34,-225.9],[33.4,-228.3],[21.9,-235.4],[19.6,-234.8],[8.8,-241.3]],"w":1.8,"kind":"footway"},{"pts":[[163.2,-192.3],[165.2,-195.3],[202,-173.6],[204.6,-174],[210.7,-170.7],[211.2,-168.2],[250.6,-145.1],[258.7,-142.4],[316.8,-127.7]],"w":1.8,"kind":"footway"},{"pts":[[364.6,-209.7],[383.7,-212.7],[392.9,-212.8],[400.1,-212.3]],"w":1.8,"kind":"footway"},{"pts":[[178.9,-119.1],[174.7,-121.6],[144.4,-139.1]],"w":4,"kind":"service"},{"pts":[[91.1,-171.4],[94.8,-169.2],[126,-150.6]],"w":4,"kind":"service"},{"pts":[[94.8,-169.2],[92.2,-165.8],[89.4,-160.3],[88.8,-153.1],[89.2,-149.7]],"w":1.8,"kind":"footway"},{"pts":[[174.7,-121.6],[171.5,-116],[169.2,-112],[162.6,-108]],"w":1.8,"kind":"footway"},{"pts":[[427.3,168],[430.2,170.2],[431.6,171.6],[432.6,173.8],[433.4,175.9],[433.8,178.3],[433.6,181],[433,183.2],[431.8,185.8],[430.8,187.7],[420.8,207.7],[412.6,224.7],[406.9,236.4],[404.3,240],[401.1,243.8],[397.4,247.1],[392.3,249.6],[387.3,251.1],[382.3,251.9],[375.8,251],[370.1,249.4],[358.7,243.3],[356.1,240.8],[353.4,236.3],[353.3,230.1],[352.7,225.2],[352.9,219.2],[354.9,214.5],[358.4,206.2],[358.4,200],[356.4,191.4]],"w":1.8,"kind":"footway"},{"pts":[[481.4,72.1],[467,66.2],[462.7,64],[455.4,59.8],[454,58.3]],"w":1.8,"kind":"footway"},{"pts":[[-53.3,-481.8],[-64.1,-487.7]],"w":1.8,"kind":"path"},{"pts":[[-87.8,-469.8],[-88.6,-468.4]],"w":1.8,"kind":"path"},{"pts":[[-65.5,-455.6],[-66,-454.8]],"w":1.8,"kind":"path"},{"pts":[[139.7,381.1],[137.3,376.6],[137.9,370.4],[140.4,363.4],[181.9,271.3],[215.9,222.4],[241.2,211.4],[246.9,211.7],[278.9,227.1],[292.3,229.9],[300.8,233.3],[307.9,236.9],[310.9,238.8],[312.5,243.4],[314.3,245.6],[324.7,251.6],[333.6,255.6],[338.2,253.7],[345,252.6],[363.3,260.6],[374.7,264.7],[383.8,265.8],[393.2,264.1],[400.7,260.9],[406.9,256.9],[413,251.9],[418.3,245.5],[442.4,196.5],[443.3,195.1],[446.5,191.7],[451.4,188.9],[452.7,188.3]],"w":2.2,"kind":"cycleway"},{"pts":[[105,418.2],[118.6,403],[125.2,393.1],[131.4,386.7],[139.7,381.1],[151.7,375.4],[161.3,370.6],[167.4,365.9],[171.3,361.7],[175.4,354.3],[178.4,345.9],[180.8,337]],"w":4,"kind":"service"},{"pts":[[329.8,241.8],[324.7,251.6],[303.5,292.1]],"w":4,"kind":"service"},{"pts":[[195.5,298.1],[210.5,265.5],[214.1,262.4],[217.9,260.9],[222.8,261.8],[248.6,275],[257.9,279.7],[277.3,289.2],[291.4,296]],"w":4,"kind":"service"},{"pts":[[195.5,298.1],[197.8,305.1],[199.5,307.4],[204.1,311],[225.3,322.3],[238.1,329.2]],"w":4,"kind":"service"},{"pts":[[252,290.9],[238.4,316.8],[254.1,324.5],[267.6,298.4],[252,290.9]],"w":4,"kind":"service"},{"pts":[[254.1,324.5],[249.4,333.7]],"w":4,"kind":"service"},{"pts":[[171.3,361.7],[174.4,361.5],[177.6,361.4],[197.2,367.3],[202.6,366.7],[216.4,363.2],[219.6,361.5],[222.2,359.3]],"w":4,"kind":"service"},{"pts":[[238.1,329.2],[249.4,333.7],[259.9,339.3],[274.6,345.4],[277.9,343.5],[281,337.6],[291.4,318],[294.6,313.9],[298.4,309.8]],"w":4,"kind":"service"},{"pts":[[186.8,320.4],[215.6,333.1]],"w":4,"kind":"service"},{"pts":[[184.1,327.9],[215.7,344.8]],"w":4,"kind":"service"},{"pts":[[175.4,354.3],[198,362.6]],"w":4,"kind":"service"},{"pts":[[178.4,345.9],[206.3,361]],"w":4,"kind":"service"},{"pts":[[180.8,337],[211.4,352.9]],"w":4,"kind":"service"},{"pts":[[211.4,352.9],[222.2,359.3]],"w":4,"kind":"service"},{"pts":[[222.2,359.3],[228.1,347.8],[234.1,336.6],[238.1,329.2]],"w":4,"kind":"service"},{"pts":[[292.2,-79.8],[290.1,-81.4],[288.7,-83.6],[288.1,-86.1],[288.4,-88.7],[289.5,-91.1],[291.3,-92.9],[293.7,-94.1],[296.3,-94.4],[298.8,-93.8],[301,-92.4],[302.5,-90.5],[303.4,-88.2],[303.5,-85.8],[302.9,-83.4],[301.5,-81.4],[299.6,-79.9],[297.3,-79],[294.7,-79],[292.2,-79.8]],"w":4,"kind":"pedestrian"},{"pts":[[301,-92.4],[301.6,-95.6],[285.9,-94.5],[286.8,-79.4],[288.7,-83.6],[288.1,-86.1],[288.4,-88.7],[289.5,-91.1],[291.3,-92.9],[293.7,-94.1],[296.3,-94.4],[298.8,-93.8],[301,-92.4]],"w":4,"kind":"pedestrian"},{"pts":[[503.7,-185.3],[502.1,-181.1],[499.5,-175.3],[495.1,-165.5],[457.6,-182.5]],"w":4,"kind":"service"},{"pts":[[427.3,169],[430.6,171.5],[431.8,174.2],[432.9,177.3],[425.4,173],[427.3,169]],"w":4,"kind":"pedestrian"},{"pts":[[387.8,-184.9],[389.3,-191.6],[400.1,-212.3]],"w":2.2,"kind":"cycleway"},{"pts":[[382.2,-135],[392.7,-129.2],[398.1,-123.5],[400.4,-119.6],[402.5,-115.2],[405.8,-106.7],[410.6,-98.2],[417.4,-91.6]],"w":3,"kind":"cycleway"},{"pts":[[417.4,-91.6],[420.3,-89.4],[440.5,-81],[472.6,-67.8],[497.7,-58.1],[538.5,-43.8],[550.9,-39.3]],"w":1.5,"kind":"footway"},{"pts":[[382.2,-135],[388.8,-151.5],[398.2,-171.7],[405.9,-188.4],[424.8,-226.1],[462.1,-304.9],[492.4,-366.5],[521.3,-426.5],[579.1,-543.9]],"w":2.5,"kind":"footway"},{"pts":[[304.9,-96.7],[310.7,-110.7]],"w":1.8,"kind":"path"},{"pts":[[171.6,149.8],[164.7,165.9],[158.9,181.2],[155.5,208.6],[151.8,219.4],[145.4,229.5]],"w":4,"kind":"path"},{"pts":[[215.6,333.1],[217.6,339.4],[215.7,344.8],[211.4,352.9]],"w":4,"kind":"service"},{"pts":[[198,362.6],[206.3,361],[211.4,352.9]],"w":4,"kind":"service"},{"pts":[[189.3,312.2],[195.5,298.1]],"w":4,"kind":"service"},{"pts":[[293.1,293.8],[291.4,296],[290.5,298.4],[290.2,301],[290.7,303.6],[291.9,305.9],[293.7,307.8],[295.9,309.1],[298.4,309.8],[301,309.7],[303.6,309],[305.8,307.5],[307.5,305.5],[308.6,303.1],[308.9,300.5],[308.5,297.9],[307.4,295.5],[305.7,293.5],[303.5,292.1],[300.8,291.3],[298,291.3],[295.4,292.2],[293.1,293.8]],"w":4,"kind":"service"},{"pts":[[105,418.2],[77.1,486.7],[44.8,565.9],[16.9,629.5]],"w":7,"kind":"tertiary","name":"Viale Europa"},{"pts":[[102.7,240.2],[59.3,222.4],[-23,191.1]],"w":4,"kind":"service"},{"pts":[[0.6,280.6],[13.9,230.4],[-2.7,220.4],[-14,216.1]],"w":4,"kind":"service"},{"pts":[[54.7,-164.6],[63,-177.8]],"w":1.8,"kind":"footway"},{"pts":[[54.7,-164.6],[47.2,-164.3],[40,-161.4],[33.2,-156],[28,-149.4],[23.1,-141],[19.7,-131.9],[18.7,-123.7],[19.9,-117.5],[22.7,-112.1]],"w":1.8,"kind":"footway"},{"pts":[[27,-50.8],[36.8,-56.6]],"w":1.8,"kind":"footway"},{"pts":[[27,-50.8],[31.9,-42.8],[35.5,-32.9],[38.1,-25.1],[50.5,-16.8]],"w":1.8,"kind":"footway"},{"pts":[[47.3,-124.4],[54.3,-135.9],[56.7,-145.5],[58.2,-153.3],[57.1,-159.5],[54.7,-164.6]],"w":1.8,"kind":"footway"},{"pts":[[47.3,-124.4],[42.8,-119.3],[37.2,-115.1],[31.2,-112.6],[22.7,-112.1]],"w":1.8,"kind":"footway"},{"pts":[[22.7,-112.1],[0.1,-73.6],[10.7,-67.3],[19.3,-60.5],[27,-50.8]],"w":1.8,"kind":"footway"},{"pts":[[-44.8,1],[-40.1,-3.9],[-37.1,-9.2],[-29.6,-21.5],[-22.3,-33],[-11.2,-27.1],[-1.7,-24.3],[3.2,-23.1],[11.5,-22.1],[20.3,-21.9],[29.6,-22.5],[38.1,-25.1]],"w":1.8,"kind":"footway"},{"pts":[[3.2,-23.1],[3.2,-18.3]],"w":1.8,"kind":"footway"},{"pts":[[-44.8,1],[-47.5,5.3]],"w":1.8,"kind":"footway"},{"pts":[[50.5,-2.8],[44.8,8.7]],"w":1.8,"kind":"footway"},{"pts":[[-345.6,145.1],[-352.3,142],[-526.6,65.7]],"w":6,"kind":"residential","name":"Via Frabaccia"},{"pts":[[-340.6,147.5],[-345.6,145.1]],"w":6,"kind":"residential","name":"Via Frabaccia"},{"pts":[[478.3,193.3],[463.3,186.4],[459.2,185.8],[452.7,188.3]],"w":1.8,"kind":"footway"},{"pts":[[452.7,188.3],[454.7,188.5],[466.9,194.8],[470.7,196.2],[474.8,195.6],[478.3,193.3]],"w":2.2,"kind":"cycleway"},{"pts":[[430.8,187.7],[438,192.1],[443.3,195.1]],"w":2.2,"kind":"cycleway"},{"pts":[[411.9,149.9],[418.5,170.4],[422.3,180.9],[425.3,184.4],[430.8,187.7]],"w":2.2,"kind":"cycleway"},{"pts":[[455.4,59.8],[452.1,60.9],[430.5,103.2],[414.6,135],[410.1,144],[411.9,149.9]],"w":2.2,"kind":"cycleway"},{"pts":[[358.7,243.3],[352.1,246.8],[346.9,249.8],[345,252.6]],"w":1.8,"kind":"footway"},{"pts":[[257.9,279.7],[252,290.9]],"w":4,"kind":"service"},{"pts":[[252,290.9],[246.2,287.4],[242.3,283.6],[239.4,278.4],[222.5,270],[219.5,270.3],[216.9,272.9],[203.6,300.9],[205.1,304.2],[209.7,307.4],[225,314.3],[229.4,315.5],[233.9,316.8],[238.4,316.8]],"w":4,"kind":"service"},{"pts":[[229.4,315.5],[225.3,322.3],[222.9,327.1],[224.6,332.2],[234.1,336.6]],"w":1.8,"kind":"footway"},{"pts":[[180.8,337],[184.1,327.9],[186.8,320.4],[189.3,312.2]],"w":4,"kind":"service"},{"pts":[[189.3,312.2],[195.8,312.2],[199.9,311.2],[204.1,311]],"w":4,"kind":"service"},{"pts":[[360.7,-145.9],[366.6,-142.9],[376.7,-137.8],[382.2,-135]],"w":3,"kind":"cycleway"}]'),areas:JSON.parse('[{"pts":[[240.8,-537.6],[201.1,-435.1],[272,-409.1],[383.8,-368.2],[441.1,-480.9],[465.3,-469.4],[488.3,-512.4],[459,-527.1],[476.5,-561.2],[480.5,-568.7],[476,-570.9],[469.9,-571.4],[394.6,-610.3],[387,-614.2],[385,-610.3],[370.4,-616.3],[327.2,-520.1],[321.1,-506.2],[240.8,-537.6]],"kind":"sports_centre","name":"Centro sportivo Lirone"},{"pts":[[217.1,-660.6],[220.5,-668.5],[236.3,-662],[233.8,-656.9],[257.7,-646.1],[307.7,-624.1],[319.4,-618.3],[294.8,-567.7],[301.4,-564.7],[288.8,-538.2],[327.2,-520.1],[321.1,-506.2],[240.8,-537.6],[201.1,-435.1],[129.1,-463.9],[150.6,-512.2],[-2.1,-556.6],[-16.1,-561.4],[-26.7,-565.6],[-28.6,-561.7],[-30.7,-557.3],[-32.5,-553.5],[-34.3,-549.8],[-72,-564.9],[2.6,-747.1],[5.6,-745.9],[10.8,-743.9],[71.4,-720.5],[129.3,-698.2],[154,-689.8],[159.5,-688],[158.6,-685.5],[128.4,-696.2],[122.9,-682.5],[152,-670.8],[147.2,-662.2],[146,-659.2],[169.6,-647.5],[168.1,-644.1],[195,-630.8],[201.2,-627.8],[217.1,-660.6]],"kind":"park","name":"Parco Lirone"},{"pts":[[181.7,172.5],[180.5,177.9],[180,183.7],[181.2,189.1],[183,194.4],[187.1,203.1],[188.1,207.3],[188.1,211.8],[187.2,216],[185.9,219.9],[184.3,223.9],[182.3,227.7],[134.4,328.2],[92.5,433.2],[49.4,541.4],[25.4,596],[18.9,610.1],[-2.2,643.7],[-20.5,665.6],[-43.7,676.6],[-63.3,670.9],[-134.6,641.5],[-120,600.6],[-107.1,554.7],[-85,506.4],[-46.7,439.7],[-3.3,333.9],[6.8,299.4],[9.2,295.2],[12.8,292.2],[15.8,291],[19.6,291.3],[26,293.1],[40.7,299.4],[55.4,304],[63.9,302.1],[69.4,299.2],[83.9,273.6],[100.1,247.6],[127.3,212.5],[135.9,200.6],[152.4,170.2],[157.7,159.8],[174.2,119.9],[181.7,100.6],[190.5,81.2],[196.3,70.9],[202.7,61.7],[218.4,42.3],[224.1,39.7],[231.4,37.8],[235.7,35],[240.3,34.8],[250.3,25.4],[265.8,4.5],[280.3,-17.5],[284.5,-29.1],[288.1,-40.5],[289.8,-53.1],[290.5,-66.7],[288.2,-78],[287,-89.7],[285.6,-115.4],[316.3,-106.2],[322.9,-101.6],[324.8,-93.1],[329.4,-84.4],[330.1,-75],[331.6,-74.5],[328.5,-68.3],[315.5,-41.2],[296.4,-3],[279.8,30.9],[262.9,65.2],[249.7,92],[234.4,114.8],[218.7,136.9],[213.2,144.3],[206.6,149.8],[193.1,156.2],[186.3,162.9],[181.7,172.5]],"kind":"park","name":"Parco Lupicchio"},{"pts":[[-546.5,467.6],[-390.8,521.1],[-371.9,463.4],[-354.8,409.2],[-344.2,375.6],[-363.8,367],[-325.2,266.2],[-369.8,253],[-366.8,239.9],[-400.9,229.7],[-432.3,310.8],[-487.3,290.7],[-506.3,347.6],[-546.5,467.6]],"kind":"vineyard"},{"pts":[[632.4,184.4],[632.1,194.1],[624.5,229.6],[611.6,275.7],[602.4,306.1],[591.4,340],[577.1,382.6],[509.7,349.7],[483.6,410.5],[546.5,448.7],[533.5,476.3],[524.9,499.9],[516.1,530.1],[505.8,566.9],[502.3,593.2],[497.8,613],[478.2,648.1],[387,604.4],[305.5,771.4],[409.2,825.8],[391.1,861.3],[358.1,929],[184.5,840.7],[-4.6,750.6],[-11.6,747.5],[8.5,730.2],[37.1,731.1],[53.1,723.1],[60.6,683],[11.7,660.3],[56,554.1],[97.1,452.1],[131.4,373.9],[266.1,440.5],[332.5,300.9],[347.2,259.9],[360.2,262.4],[375.2,267.8],[390.5,267.2],[406.5,260.2],[419.2,247.9],[446.5,197],[449.6,193.4],[454.8,191.6],[487.2,207.9],[526.2,127.7],[632.4,184.4]],"kind":"farmland"},{"pts":[[-149,-355.1],[-274.6,-421.4],[-284.6,-332.7],[-313.9,-307.1],[-426.3,-369.6],[-399.3,-538.2],[-372.2,-634.9],[293.6,-240.9],[353.1,-214.8],[400.2,-216.1],[368.2,-165.2],[346.4,-142.5],[316.3,-135.5],[264.7,-140.1],[179.8,-189],[125.5,-219.2],[115.2,-226.4],[111.9,-237.7],[108.5,-244.9],[97.5,-252.1],[95,-252.4],[72.8,-255.9],[35.5,-278.5],[-44.1,-322.1],[-51.4,-326.1],[-48.8,-350.3],[-144.6,-411.4],[-149,-355.1]],"kind":"construction"},{"pts":[[451,176],[451.3,174.8],[451.2,173.5],[450.7,172.4],[449.8,171.5],[448.7,170.9],[447.5,170.7],[446.3,170.9],[445.2,171.5],[444.4,172.4],[443.9,173.5],[443.8,174.7],[444.1,175.9],[444.8,177],[445.7,177.7],[446.9,178.1],[448.1,178.1],[449.3,177.8],[450.3,177],[451,176]],"kind":"grass"},{"pts":[[243.9,-533.3],[207.5,-440.4],[268,-416],[304.8,-510.2],[243.9,-533.3]],"kind":"pitch"},{"pts":[[-2.1,-556.6],[-16.1,-561.4],[-26.7,-565.6],[-28.6,-561.7],[-30.7,-557.3],[-32.5,-553.5],[-34.3,-549.8],[-36.2,-546],[-37.9,-542.5],[-39.7,-539.1],[-42.5,-533.2],[-45,-528],[-51.5,-513.6],[-53,-510.5],[-55.2,-507.2],[-66.8,-512.7],[-82.5,-517.6],[-98.1,-476.5],[-87.8,-469.8],[-75.9,-462.2],[-66.1,-455.9],[-54.4,-448.8],[-53.2,-451.3],[-51.5,-454.8],[-49.4,-459],[-47.9,-462.2],[-45.8,-466.5],[-43.2,-471.6],[-40.5,-477.2],[-38.7,-480.9],[-36,-486.5],[-32.2,-494.2],[-28.5,-501.6],[-26,-506.9],[-23,-512.9],[-21.3,-516.5],[-20.2,-518.6],[-17.4,-524.4],[-15.7,-527.9],[-13.8,-531.7],[-12.1,-535.3],[-10.3,-538.8],[-2.1,-556.6]],"kind":"allotments","name":"Area della Saggezza"},{"pts":[[334,235.9],[336.2,235.7],[338.1,234.9],[339.7,233.4],[340.7,231.5],[341.1,229.4],[340.7,227.3],[339.7,225.4],[338.1,224],[336.2,223.1],[334,223],[332,223.5],[330.2,224.7],[328.9,226.3],[328.2,228.3],[328.2,230.4],[328.9,232.4],[330.2,234.1],[331.9,235.3],[334,235.9]],"kind":"grass"},{"pts":[[514.2,43],[512.4,37.2],[509.8,35.8],[502.2,38.4],[497.4,46.6],[477.4,54.2],[485.6,58.2],[483.4,63.1],[487.1,65],[491.3,64.6],[493.3,62.2],[492.8,60.1],[495.6,55.8],[500.7,51],[508.4,46.6],[513.7,44.6],[514.2,43]],"kind":"grass"},{"pts":[[1164.7,-1514.2],[1174.6,-1511.3],[1249.4,-1477.2],[1237.7,-1333.4],[1216.6,-1245.9],[1207.3,-1189],[1190.9,-1137.9],[1162.6,-1050.2],[1139.4,-983],[1144.3,-981.3],[1139.6,-965],[1150.1,-961.4],[1143.2,-944],[1141,-944.6],[1139.8,-940.6],[1133.2,-942.8],[1123.7,-914.2],[1101.6,-856.4],[1089.2,-823.8],[1085.3,-813.3],[1078.8,-802.2],[1075.7,-796.9],[1066.9,-781.7],[1046.9,-750.2],[1045.2,-745.8],[1068.5,-734.9],[1086.1,-713.6],[1090.2,-707.9],[1079.3,-670.3],[1062.7,-616.5],[1074.2,-609.7],[1070.8,-599.8],[1070.5,-598.9],[1068.6,-593.1],[1066.4,-587.7],[1065.3,-584.9],[1062.3,-585.8],[1050.8,-589.8],[1048.1,-590.7],[1046.3,-591.3],[995.3,-609],[993.7,-606.1],[990.7,-602.9],[985.6,-599.6],[980.3,-597.5],[975.8,-596.1],[933.6,-486.3],[934.2,-485],[934.7,-483.5],[935,-482.2],[935.2,-479.9],[933.5,-475.6],[933,-473.8],[929.8,-470.4],[925.6,-466.8],[912.3,-432.1],[903.6,-409.6],[923.3,-400.8],[921.7,-396.9],[918.8,-389.4],[739.9,80.4],[652.7,44],[649.8,29.1],[642.4,17.4],[641,4.4],[635,-24.6],[628.9,-26.9],[627,-27.4],[625.4,-28.4],[623.5,-31.2],[621.6,-34],[618.1,-37.9],[591.1,-44.5],[587,-42.9],[581.8,-40.8],[576.9,-36.6],[573,-35.4],[566.1,-35.3],[556.9,-36.3],[415.8,-90.2],[398.4,-98.4],[387.8,-106.5],[383.2,-117.1],[380.2,-123.3],[378.8,-133.2],[357.9,-139.9],[343.8,-136.6],[336.8,-133.2],[329.8,-127.8],[322.9,-101.6],[321.5,-93.9],[326.2,-81.5],[324.8,-71.5],[318.7,-57.9],[297.8,-16.6],[277.8,24.2],[264,52.3],[252.3,76.1],[245,90.2],[205.8,142.2],[167.7,148.3],[99.8,237.2],[83.9,226.9],[111.1,128.9],[-204.3,-29.2],[-144.6,-411.4],[-48.8,-350.3],[-51.4,-326.1],[72.8,-255.9],[81.1,-250.9],[264.7,-140.1],[339.2,-143.5],[368.2,-165.2],[400.2,-216.1],[458.9,-339.5],[269.3,-410.1],[201.1,-435.1],[129.1,-463.9],[150.6,-512.2],[-2.1,-556.6],[-16.1,-561.4],[-26.7,-565.6],[-28.6,-561.7],[-30.7,-557.3],[-32.5,-553.5],[-34.3,-549.8],[-72,-564.9],[-23.7,-692.1],[-53.7,-703.8],[-31.5,-767.9],[-99.3,-796.8],[-96.7,-804],[-22.7,-1005.9],[-111.5,-1036.8],[-104.2,-1061],[-92.8,-1098.6],[-82.1,-1095.4],[-79,-1102.5],[-16.3,-1080.7],[5.1,-1086],[11.1,-1105.2],[-78.1,-1148.4],[-87.5,-1153],[-195.7,-1201.9],[-141.7,-1354.5],[-68.6,-1325.1],[15.4,-1556.8],[24.1,-1581.6],[124.8,-1767.1],[50.4,-1812],[89.8,-1893.4],[94,-1895],[170,-1773.4],[215.5,-1862.8],[263.4,-1843.1],[258.8,-1826.5],[278.9,-1822.1],[214.2,-1708.6],[248.9,-1660],[300.4,-1612.6],[300.8,-1764.5],[337.3,-1750],[324.1,-1712],[425.2,-1671.3],[419.1,-1656],[434.1,-1649],[404.6,-1573.8],[410.8,-1560],[475.9,-1518.9],[531.8,-1675.4],[564.4,-1662.3],[548.1,-1613.9],[554.5,-1608.4],[516.3,-1502.6],[629.9,-1593.1],[731.1,-1648.6],[740,-1658.9],[713.2,-1680.7],[730.9,-1729.1],[760.9,-1718.7],[793.7,-1822.1],[803.5,-1835],[819.5,-1875.4],[863.9,-1859.3],[944.2,-1824],[982.2,-1806.5],[952.6,-1716.7],[882.2,-1745.2],[851.4,-1648.5],[786,-1673.6],[734.8,-1640.1],[718.4,-1555.4],[747.1,-1545.1],[763.7,-1535.4],[745.8,-1477.3],[755.8,-1467.5],[781.2,-1535.4],[947.5,-1483.2],[919.1,-1396.2],[1082,-1357.6],[1098.4,-1380.7],[1111.2,-1386.1],[1120.8,-1390.1],[1135.6,-1414.2],[1158.5,-1491.3],[1164.7,-1514.2]],"kind":"residential"},{"pts":[[224.8,194.3],[228.3,189.3],[229.9,183.4],[229.3,177.3],[226.8,171.8],[222.5,167.4],[217,164.8],[211.4,164.2],[206,165.3],[201.2,168],[197.4,172],[195.1,177.1],[194.5,182.6],[195.5,188],[198.2,192.8],[202.3,196.6],[207.9,199],[214,199.5],[219.9,197.8],[224.8,194.3]],"kind":"grass"},{"pts":[[360.9,-89.5],[365.6,-92],[369.2,-96],[371.4,-100.9],[371.8,-106.3],[370.4,-111.5],[367.4,-115.9],[363.1,-119.2],[358.1,-120.8],[352.8,-120.8],[347.8,-119],[343.6,-115.7],[340.7,-111.3],[339.4,-106.2],[339.8,-100.9],[341.9,-96],[345.5,-92.1],[350.3,-89.5],[355.6,-88.6],[360.9,-89.5]],"kind":"grass"},{"pts":[[509.4,-275.2],[511.7,-280.5],[473.8,-297.1],[434.2,-213.4],[477.5,-204.6],[508,-272.2],[478.2,-284.4],[477.3,-281.5],[487.6,-276.8],[478.4,-256.5],[475.9,-251],[481.8,-248.3],[481.4,-247.3],[484.4,-245.9],[480.1,-236.5],[477,-237.9],[476.2,-236.1],[469.6,-239.1],[467.2,-233.9],[456.7,-238.7],[449.5,-242.1],[473.4,-291.1],[509.4,-275.2]],"kind":"grass"},{"pts":[[531.2,1],[542.2,-25.7],[436.7,-64.4],[435.9,-62.9],[434.8,-63.3],[432.7,-58.6],[441.7,-54.5],[444.4,-53.2],[443.6,-49.9],[470,-43.5],[498.8,-30],[515.8,-21.3],[520.9,-17.1],[525.2,-11.7],[527.4,-7.5],[530,0.4],[531.2,1]],"kind":"grass"},{"pts":[[331.9,200],[338.4,198.1],[340.2,202.9],[345.5,202],[345.3,200.7],[351.3,199.2],[351.3,205.3],[347.9,210.2],[342.6,212.4],[336.6,210.3],[333.5,206.3],[331.9,200]],"kind":"grass"},{"pts":[[375.8,236.6],[377.9,250.9],[388.9,249.8],[398.4,244.9],[406,236.6],[412.9,222.2],[428.6,189.7],[428.1,188],[426.6,187],[424.3,185.4],[421.8,182.5],[420.5,180.3],[419.1,176.5],[407.5,180.3],[409.7,189.7],[416.1,187.2],[419.5,195.4],[412.5,197.4],[413.8,201],[414.1,212.4],[411.6,222.2],[403.5,231.8],[394.9,236.8],[386,239],[375.8,236.6]],"kind":"grass"},{"pts":[[414.8,165.5],[409.4,166.8],[407.7,161.9],[402.1,144.1],[407,134.5],[411.5,136.6],[408,144.2],[408,145.5],[414.8,165.5]],"kind":"grass"},{"pts":[[409.4,129.4],[423.1,101.4],[427.6,104.1],[414.2,132.2],[409.4,129.4]],"kind":"grass"},{"pts":[[430.8,185.7],[432.4,182.7],[433.1,179.7],[432.9,177.3],[425.4,173],[422.7,173.3],[420,171.9],[422.1,177.2],[424,180.4],[426.5,183.1],[430.8,185.7]],"kind":"grass"},{"pts":[[92.2,-223],[94.2,-223.1],[96.2,-223.8],[97.8,-225.1],[98.9,-226.8],[99.4,-228.8],[99.3,-230.9],[98.5,-232.7],[97.1,-234.3],[95.2,-235.3],[93.1,-235.7],[91,-235.3],[89.1,-234.3],[87.7,-232.8],[86.9,-230.8],[86.7,-228.7],[87.3,-226.6],[88.5,-224.9],[90.2,-223.7],[92.2,-223]],"kind":"grass"},{"pts":[[108.8,-208],[109.5,-209.3],[103.7,-209.6],[97.2,-207.9],[91.8,-207.2],[87.9,-205.2],[84.4,-199.9],[132.9,-170.1],[143,-163.9],[147.2,-170.8],[141.5,-174.2],[140,-171.7],[101.3,-194.4],[108.8,-208]],"kind":"grass"},{"pts":[[147.7,-184.6],[148.7,-185.7],[153.8,-182.4],[151.1,-177.1],[145.2,-180.4],[147.7,-184.6]],"kind":"grass"},{"pts":[[253,-103.2],[251.1,-100.9],[237.9,-108.8],[237.2,-108],[249.4,-100.6],[258.5,-91.9],[264.7,-77.2],[265,-68.1],[263.6,-58.7],[261.3,-53.1],[263.7,-51.5],[259.2,-42.4],[270.6,-32.2],[275.3,-49.6],[276.3,-59.9],[276.7,-70.1],[274.6,-95.1],[273.7,-119.9],[245.8,-128.7],[245.2,-127.6],[261.8,-117.9],[253,-103.2]],"kind":"grass"},{"pts":[[235.5,-86.1],[239.7,-92],[246,-87.6],[250.5,-81.1],[253,-71.4],[252.2,-62],[247.3,-53.2],[241.9,-47.2],[234.5,-55],[239,-57],[237.2,-60.2],[238.3,-80.9],[239.8,-82.9],[235.5,-86.1]],"kind":"park"},{"pts":[[227.3,-84.4],[228.9,-87.9],[227.8,-89.9],[226.1,-91.4],[224.1,-91.4],[222.1,-90.8],[219.6,-88.6],[218.5,-85.4],[216.4,-45.3],[220.3,-44.5],[227.7,-51.1],[227.2,-51.9],[223.2,-50.2],[221,-58.1],[222.8,-86.2],[227.3,-84.4]],"kind":"grass"},{"pts":[[163.9,-175],[164.1,-176.6],[158.4,-180],[155,-174.8],[161.4,-170.9],[163.9,-175]],"kind":"grass"},{"pts":[[157.6,-164.7],[151.2,-168.5],[150.5,-165.8],[151.9,-163.2],[154.7,-160.9],[156.2,-162.5],[157.6,-164.7]],"kind":"grass"},{"pts":[[81.1,-154.3],[80.8,-161.9],[92.6,-180.3],[86.8,-183.5],[77.5,-183.9],[70.4,-184.2],[66.9,-178.1],[67.5,-171.5],[74.6,-164.6],[77.3,-156.5],[79,-154.4],[81.1,-154.3]],"kind":"park"},{"pts":[[88.6,-100.7],[82.9,-98],[78.7,-90.1],[80.2,-83.7],[83.8,-78.1],[88.6,-74.7],[95,-70.8],[102.2,-67.7],[108.7,-67.9],[114.8,-70.1],[118.8,-76],[118.5,-83.5],[114.9,-89.7],[108.7,-94.2],[102,-98.4],[95.3,-100.8],[88.6,-100.7]],"kind":"playground"},{"pts":[[475.9,-66.4],[493.2,-67.1],[549.2,-44.1],[548.3,-40.7],[475.9,-66.4]],"kind":"grass"},{"pts":[[-99.9,-335.6],[-97.7,-335.1],[-95.5,-335.3],[-93.5,-336.1],[-91.9,-337.6],[-90.8,-339.5],[-90.4,-341.6],[-90.7,-343.8],[-91.6,-345.8],[-93.2,-347.3],[-95.2,-348.3],[-97.4,-348.6],[-99.6,-348.1],[-101.6,-346.9],[-103,-345.2],[-103.8,-343],[-103.8,-340.7],[-103.1,-338.5],[-101.7,-336.8],[-99.9,-335.6]],"kind":"grass"},{"pts":[[12.2,-266.1],[9.2,-261.2],[15.4,-257.4],[18.5,-262.4],[12.2,-266.1]],"kind":"grass"},{"pts":[[22.8,-260.1],[20,-255.2],[25.8,-251.7],[28.7,-256.4],[22.8,-260.1]],"kind":"grass"},{"pts":[[16.1,-248.4],[26,-242.5],[24.5,-240],[58,-219.7],[60.8,-224.1],[64,-222.1],[67.7,-228.3],[64.6,-230.1],[66.1,-232.5],[67.5,-233.9],[69.2,-232.1],[71.1,-225.3],[72,-220.6],[74.3,-216.5],[73.7,-211.8],[71.6,-208.1],[69.1,-207.1],[35.5,-226.5],[34.1,-229.4],[22.3,-236.8],[19.9,-236.2],[11.6,-240.8],[16.1,-248.4]],"kind":"grass"},{"pts":[[144.8,-135.1],[164.7,-123.5],[162.6,-119.1],[168.9,-115.5],[171.5,-119.6],[172.2,-118.9],[168.6,-112.7],[163.8,-109.6],[161.1,-115.2],[157.6,-121.5],[153.6,-126],[144.8,-135.1]],"kind":"park"},{"pts":[[463.1,159.7],[463,164.5],[467.3,163.1],[463.1,159.7]],"kind":"grass"},{"pts":[[465.2,174],[468.6,177.7],[470.5,172.9],[465.2,174]],"kind":"grass"},{"pts":[[442.3,-84.6],[432.1,-88.5],[419.8,-93.8],[415.8,-90.2],[398.4,-98.4],[387.8,-106.5],[383.2,-117.1],[380.2,-123.3],[378.8,-133.2],[379.9,-138.1],[384.6,-148.1],[395.5,-169.1],[403.7,-186.1],[417.2,-213.8],[421.1,-212.5],[409.2,-185.4],[407.4,-181.4],[403,-169.7],[401.5,-158.2],[402.9,-142],[406.8,-127.7],[413,-113.8],[422.4,-100.6],[434.4,-90.4],[442.3,-84.6]],"kind":"grass"},{"pts":[[262.8,87.1],[303.4,4.1],[326.3,-34.4],[350.6,-66.5],[357.3,-72.7],[362.8,-75.5],[367,-76.7],[371.2,-78.8],[377.9,-80.7],[383.1,-80.8],[388.5,-80.1],[396.8,-78.1],[414.4,-72.9],[434.3,-64.9],[542.2,-25.7],[547.5,-23.9],[562.7,-16.8],[568.9,-8.1],[571.1,3.8],[568.4,13.4],[555.4,30.9],[546.6,32.2],[541,28.7],[526,34.4],[523.3,39.5],[520,42.7],[526.7,56.1],[531.5,56.9],[535.5,59.5],[538.6,62.7],[540.7,67.2],[541.2,71.4],[517.5,123.1],[526.2,127.7],[516.8,146.8],[487.2,207.9],[454.8,191.6],[449.6,193.4],[446.5,197],[419.2,247.9],[406.5,260.2],[390.5,267.2],[375.2,267.8],[360.2,262.4],[347.2,259.9],[331.6,246.8],[324.3,243.6],[314.5,235.1],[300.4,231.3],[279.7,221.9],[249,207.6],[255.7,194.3],[246.9,188.2],[243.5,184],[241.6,178.8],[240.5,172],[238,166.4],[236,159.5],[235.7,152.6],[237.2,145.1],[242.1,131.3],[251.3,111],[262.8,87.1]],"kind":"retail","name":"Centro Commerciale Le Piazze"},{"pts":[[-54.4,-448.8],[-2.1,-556.6],[150.6,-512.2],[129.1,-463.9],[458.9,-339.5],[400.2,-216.1],[353.1,-214.8],[293.6,-240.9],[-54.4,-448.8]],"kind":"farmland"},{"pts":[[151.1,368],[261.8,430.9],[327.5,301.6],[214.5,249.1],[202.8,260.3],[151.1,368]],"kind":"commercial"},{"pts":[[-219.5,77.1],[-267.7,203.5],[-209.1,226.1],[-202.5,208],[-173.6,219.1],[-132.8,110.8],[-219.5,77.1]],"kind":"grass"},{"pts":[[-75.9,365.8],[-118.8,476],[-83.8,488.3],[-50.6,432.3],[-30.2,383.2],[-75.9,365.8]],"kind":"scrub"}]')},Ns=3.2;function y2(i){return i>2500?9:i>700?4*Ns:i>400?3*Ns:2*Ns+1.2}const Uu=[11097660,10243896,11756863,9389618,10641482,12417620],Nu=[9191728,8206891,10047546],M2=12564136,S2=8224901,fn={ground:7311182,grass:8101973,park:6195777,playground:11045468,retailLot:10132119,asphalt:4211530,paving:10120018,trunk:7031346,leaf:[5208631,6064703,4483888,6723152]};function Fu(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function w2(i){let t=0;for(let e=0;e<i.length-1;e++)t+=i[e][0]*i[e+1][1]-i[e+1][0]*i[e][1];return Math.abs(t)/2}function Ou(i){let t=0,e=0;for(const n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function b2(i,t,e,n,r,s){const a=r-e,o=s-n,c=a*a+o*o;if(c<1e-9)return Math.hypot(i-e,t-n);let l=((i-e)*a+(t-n)*o)/c;return l=l<0?0:l>1?1:l,Math.hypot(i-(e+l*a),t-(n+l*o))}function ku(i,t,e){let n=!1;for(let r=0,s=e.length-1;r<e.length;s=r++){const[a,o]=e[r],[c,l]=e[s];o>t!=l>t&&i<(c-a)*(t-o)/(l-o)+a&&(n=!n)}return n}function Bu(i){const t=new qi;t.moveTo(i[0][0],-i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],-i[e][1]);return t.closePath(),t}function Fs(i,t){const e=new kt(t),n=i.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=e.r,r[s*3+1]=e.g,r[s*3+2]=e.b;return i.setAttribute("color",new te(r,3)),i}function E2(i,t,e){const n=[],r=t/2;for(let a=0;a<i.length-1;a++){const[o,c]=i[a],[l,u]=i[a+1],h=l-o,d=u-c,p=Math.hypot(h,d);if(p<.01)continue;const g=h/p,y=d/p,m=o-g*r,f=c-y*r,x=l+g*r,v=u+y*r,S=-y*r,P=g*r,R=[[m+S,f+P],[x+S,v+P],[x-S,v-P],[m-S,f-P]];for(const A of[0,1,2,0,2,3])n.push(R[A][0],e,R[A][1])}if(n.length===0)return null;const s=new fe;return s.setAttribute("position",new te(n,3)),s.computeVertexNormals(),s.setAttribute("uv",new te(new Float32Array(n.length/3*2),2)),s}function Os(i,t){return new Er({...i,polygonOffset:!0,polygonOffsetFactor:-t,polygonOffsetUnits:-t*2})}function T2(i,t){const e=new Ts(Bu(i));return e.rotateX(-Math.PI/2),e.translate(0,t,0),e}function A2(){const e=document.createElement("canvas");e.width=128,e.height=102;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,128,102),n.strokeStyle="rgba(0, 0, 0, 0.10)",n.lineWidth=1;for(let s=6;s<102;s+=7)n.beginPath(),n.moveTo(0,s+.5),n.lineTo(128,s+.5),n.stroke();n.fillStyle="rgba(240, 244, 248, 0.85)",n.fillRect(26,20,76,46),n.fillStyle="rgba(28, 42, 58, 0.92)",n.fillRect(30,24,68,38),n.fillStyle="rgba(255, 255, 255, 0.18)",n.fillRect(30,24,68,12),n.fillStyle="rgba(226, 228, 226, 0.95)",n.fillRect(12,70,104,9),n.fillStyle="rgba(150, 158, 162, 0.75)",n.fillRect(12,79,104,3);const r=new zn(e);return r.wrapS=Yn,r.wrapT=Yn,r.colorSpace=ve,r.repeat.set(1/4,1/Ns),r.anisotropy=4,r}function R2(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,512,512);const n=Fu(99);for(let s=0;s<900;s++){const a=n()*512,o=n()*512,c=8+n()*46,l=n()<.5,u=e.createRadialGradient(a,o,0,a,o,c),h=.05+n()*.1;u.addColorStop(0,l?`rgba(60, 80, 40, ${h})`:`rgba(220, 215, 170, ${h})`),u.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=u,e.beginPath(),e.arc(a,o,c,0,Math.PI*2),e.fill()}const r=new zn(t);return r.wrapS=Yn,r.wrapT=Yn,r.colorSpace=ve,r.repeat.set(24,24),r}function C2(i,t,e,n){const r=5.5*e,s=new qe(.16*e,.24*e,r*.55,5);s.translate(i,r*.275,t);const a=new br(1.55*e,0);a.scale(1,.85,1),a.translate(i,r*.62,t);const o=new br(1.15*e,0);o.scale(1,.9,1),o.translate(i+(n()-.5)*e,r*.9,t+(n()-.5)*e);const c=Vn([a,o]),l=fn.leaf[Math.floor(n()*fn.leaf.length)];return{trunk:Fs(s,fn.trunk),leaf:Fs(c,l)}}function P2(){const i=new ln,t=Fu(28),e=dn.radiusM*5,n=new Rt(new hr(e,e),Os({color:fn.ground,map:R2()},0));n.rotation.x=-Math.PI/2,i.add(n);const r=new Map;for(const L of dn.areas){if(L.pts.length<4)continue;const D=L.kind==="park"?fn.park:L.kind==="playground"?fn.playground:L.kind==="retail"||L.kind==="construction"?fn.retailLot:L.kind==="grass"?fn.grass:null;D!=null&&(r.has(D)||r.set(D,[]),r.get(D).push(T2(L.pts,.02+r.get(D).length*.001)))}for(const[L,D]of r){const k=new Rt(Vn(D),Os({color:L},1));i.add(k)}const s=[],a=[];for(const L of dn.roads){const D=L.kind==="footway"||L.kind==="path"||L.kind==="pedestrian"||L.kind==="cycleway",k=D?.06:.05,q=E2(L.pts,L.w,k);q&&(D?a:s).push(q)}s.length&&i.add(new Rt(Vn(s),Os({color:fn.asphalt},2))),a.length&&i.add(new Rt(Vn(a),Os({color:fn.paving},3)));const o=[],c=[],l=[];let u=null,h=0,d=0;const p=dn.areas.filter(L=>L.kind==="retail"||L.kind==="commercial"||L.kind==="industrial");for(const L of dn.buildings){if(L.pts.length<4)continue;const D=w2(L.pts),[k,q]=Ou(L.pts),B=D>2500||p.some(j=>ku(k,q,j.pts)),Q=L.h&&L.h!==6.5?L.h:B?8.5:y2(D),V=Bu(L.pts),at=new $i(V,{depth:Q,bevelEnabled:!1});at.rotateX(-Math.PI/2);const dt=B?M2:Uu[Math.floor(t()*Uu.length)];o.push(Fs(at,dt));const ht=new Ts(V);ht.rotateX(-Math.PI/2),ht.translate(0,Q+.06,0),c.push(Fs(ht,B?S2:Nu[Math.floor(t()*Nu.length)])),l.push(L.pts);const[Nt,Ht]=Ou(L.pts),X=Math.hypot(Nt,Ht);(u==null||X<u.d)&&(u={d:X,x:Nt,z:Ht},h=D,d=Q)}const g=new Er({map:A2(),vertexColors:!0});i.add(new Rt(Vn(o),g)),i.add(new Rt(Vn(c),new Er({vertexColors:!0})));const y=[];for(const L of dn.roads)for(let D=0;D<L.pts.length-1;D++)y.push({x1:L.pts[D][0],z1:L.pts[D][1],x2:L.pts[D+1][0],z2:L.pts[D+1][1],clear:L.w/2+2.8});const m=[];for(const L of l)for(let D=0;D<L.length-1;D++)m.push({x1:L[D][0],z1:L[D][1],x2:L[D+1][0],z2:L[D+1][1],clear:2.2});function f(L,D,k){for(const q of L)if(b2(D,k,q.x1,q.z1,q.x2,q.z2)<q.clear)return!1;return!0}const x=[],v=[],S=[];for(const L of dn.roads){if(L.kind==="service"||L.kind==="pedestrian")continue;const D=L.w/2+6.5;for(let k=0;k<L.pts.length-1;k++){const[q,B]=L.pts[k],[Q,V]=L.pts[k+1],at=Math.hypot(Q-q,V-B),dt=(Q-q)/at,ht=(V-B)/at;for(let Nt=8;Nt<at-6;Nt+=17){if(t()<.4)continue;const Ht=t()<.5?1:-1,X=q+dt*Nt-ht*D*Ht,j=B+ht*Nt+dt*D*Ht;if(l.some(Ct=>ku(X,j,Ct))||!f(y,X,j)||!f(m,X,j))continue;const{trunk:yt,leaf:ot}=C2(X,j,.75+t()*.7,t);x.push(yt),v.push(ot),S.push([X,j])}}}x.length&&(i.add(new Rt(Vn(x),new Er({vertexColors:!0}))),i.add(new Rt(Vn(v),new Er({vertexColors:!0,flatShading:!0}))));const P=new ln;P.position.set(u.x,0,u.z);const R=Math.sqrt(h)*.75,A=new Rt(new Uo(R,R+1.6,48),new on({color:4828159,transparent:!0,opacity:.5,side:_e,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.position.y=.3,P.add(A);const I=new Rt(new qe(2.2,3.4,70,12,1,!0),new on({color:8377087,transparent:!0,opacity:.13,side:_e,depthWrite:!1,blending:rn}));I.position.y=d+35,P.add(I);const G=new Rt(new Es(2.4),new on({color:10477823,transparent:!0,opacity:.85}));G.position.y=d+14,P.add(G),i.add(P);const _=new C(u.x+95,45,u.z+18);function w(L){G.rotation.y+=L*1.1,G.position.y=d+14+Math.sin(performance.now()*.0016)*1.4}return{group:i,update:w,trees:S,home:new C(u.x,d,u.z),spawn:_,heading:-Math.PI/2,info:{name:dn.name,town:"Castel Maggiore",buildings:dn.buildings.length,attribution:dn.attribution}}}const bn=new C(0,-2e4,0),L2=22,I2=620,zu=2.5,Hu=10340847,D2=260,U2=1250;function N2(i,t,e=()=>{}){const n=P2();n.group.position.copy(bn),n.group.visible=!1,i.add(n.group);const r=1.6,s=.9,a=new Oo(16774112,0);a.position.set(-260,420,180).add(bn),a.target.position.copy(bn),i.add(a.target),i.add(a);const o=new No(12377343,6978386,0);o.position.copy(bn),i.add(o);const c=document.createElement("div");c.id="landing-banner",c.hidden=!0,c.innerHTML=`
    <div class="landing-banner__town"></div>
    <div class="landing-banner__street"></div>
    <div class="landing-banner__hint"></div>
  `,document.body.appendChild(c),c.querySelector(".landing-banner__town").textContent=Vt.surface.town,c.querySelector(".landing-banner__street").textContent=Vt.surface.street,c.querySelector(".landing-banner__hint").textContent=Vt.surface.leaveHint;let l=!1,u=0;const h=new C,d=i.background,p=i.fog.color.clone();function g(x){return x.mesh.position.distanceTo(Ar)<Rr+L2}function y(x){return x.mesh.position.y-bn.y}function m(x){if(!l){l=!0,h.copy(x.mesh.position).sub(Ar).setLength(Rr+60).add(Ar),n.group.visible=!0,a.intensity=r,o.intensity=s;for(const v of t)v.visible=!1;i.background=new kt(Hu),i.fog.color.setHex(Hu),i.fog.near=D2,i.fog.far=U2,x.mesh.position.copy(n.spawn).add(bn),x.mesh.quaternion.setFromEuler(new De(0,n.heading,0,"YXZ")),x.velocity.set(0,0,0),e(),c.hidden=!1,c.classList.remove("landing-banner--fading"),u=6}}function f(x){if(!l)return;l=!1,n.group.visible=!1,a.intensity=0,o.intensity=0;for(const S of t)S.visible=!0;i.background=d,i.fog.color.copy(p),i.fog.near=su,i.fog.far=au,x.mesh.position.copy(h);const v=h.clone().sub(Ar).normalize();x.mesh.quaternion.setFromUnitVectors(new C(0,0,1),v),x.velocity.set(0,0,0),e(),c.hidden=!0}return{get active(){return l},town:n,enter:m,exit:f,altitude:y,prewarm(x,v){n.group.visible=!0,a.intensity=r,o.intensity=s,x.compile(i,v);const S=new Ue(60,v.aspect,.1,5e3);S.position.copy(bn).add(new C(0,140,300)),S.lookAt(bn),x.render(i,S),n.group.visible=!1,a.intensity=0,o.intensity=0,x.render(i,v)},update(x,v){if(!l){g(x)&&m(x);return}n.update(v);const S=y(x);S<zu&&(x.mesh.position.y=bn.y+zu,x.velocity.y<0&&(x.velocity.y=0)),S>I2&&f(x),u>0&&(u-=v,u<=0&&c.classList.add("landing-banner--fading"))},reset(x){f(x)}}}const F2=38,O2=19,k2=45,Gu=1.5,Vu=.25,B2=.5,ks=1;function z2(i){let t=ks,e=0;const n=[];return{get scale(){return t},sample(r){const s=r*1e3;if(s>250||(n.push(s),n.length<k2))return;const a=[...n].sort((l,u)=>l-u),o=a[Math.floor(a.length/2)];if(n.length=0,e>0)return;let c=t;o>F2?c=Math.max(B2,t-Vu):o<O2&&(c=Math.min(ks,t+Vu)),c!==t&&(t=c,e=Gu,i(t))},update(r){e>0&&(e-=r)},reset(){t!==ks&&(t=ks,n.length=0,e=Gu,i(t))}}}const{resolveAsteroidCollisions:H2}=Tg,G2=document.getElementById("app"),li=new H0({antialias:!0});G2.appendChild(li.domElement);const pn=P1(),ui=L1(),se=z1(),Ko=du(),Bs=$1(),Jo=J1(),Zo=og(),jo=hg(),Pr=Mg(),zs=bg();pn.add(se.mesh),pn.add(Ko),pn.add(Bs.mesh),pn.add(Jo.mesh),pn.add(Zo.mesh),pn.add(jo.sprite);for(const i of Pr.rovers)pn.add(i.mesh);pn.add(zs.points),se.mesh.visible=!0;const Zi=N2(pn,[Ko,Bs.mesh,Jo.mesh,Zo.mesh,jo.sprite,zs.points,...Pr.rovers.map(i=>i.mesh)],()=>tc.reset()),oe=Og(),ge=kg(),Wu=window.matchMedia("(max-height: 480px), (max-width: 480px)");Wu.matches&&(ge.hide(),ge.setHintVisible(!1));const Qo=Bg(),ji=Hg(document.body),hi=$g(),Xu=e2(),mn=t2(Pr),ze=n2({upgrades:Xu,mission:mn,audio:hi,onClose:()=>ge.show()});mn.setOnRepaired(i=>{zs.fire(i.mesh.position),hi.chirp()}),mn.setOnComplete(()=>{hi.fanfare(),ze.show("complete")}),ge.onFastTravel(()=>{qu()}),ge.onUpgradesClick(()=>{ze.show("upgrades")});function V2(){Zi.reset(se),se.mesh.position.set(0,0,0),se.velocity.set(0,0,0),se.mesh.quaternion.identity(),se.arcadeDamping=!1,mn.reset(),Pr.reset(),Xu.reset(),I1(),ze.hideAll(),tc.reset()}function qu(){ji.active||Zi.active||(ge.setFastTravelActive(!0),ji.begin(se,{onDone:()=>ge.setFastTravelActive(!1)}))}const tc=x2(ui),ec={x:0,y:0};let nc=null;function Yu(i){nc=i;const{width:t,height:e,pixelRatio:n}=i;li.setPixelRatio(n*ic.scale),li.setSize(t,e,!1),ui.aspect=t/e,ui.updateProjectionMatrix(),Wn&&Wn.onResize(t,e)}const ic=z2(()=>{nc&&Yu(nc)}),W2=900,Qi={CINEMATIC:"cinematic",TITLE:"title",FLY:"fly"},$u=new URLSearchParams(window.location.search),X2=$u.get("skipIntro")==="1",q2=$u.get("land")==="1",Wn=X2?null:c2({renderer:li});let Hs=Wn?Qi.CINEMATIC:Qi.TITLE;Wn&&Qo.hide();const Y2=l2();f2(li.domElement,Yu),Zi.prewarm(li,ui);function $2(){Hs=Qi.TITLE,Qo.show(),Wu.matches||ge.show()}let Ku=performance.now();const Gs=new De;function rc(i){const t=(i-Ku)/1e3,e=Math.min(t,.1);if(Ku=i,ic.sample(t),ic.update(e),Y2.update(),Hs===Qi.CINEMATIC){oe.consumeAnyJustPressed()&&(Wn.skip(),oe.gamepad.suppressCurrentlyPressed()),Wn.update(e),Wn.render(),Wn.active||$2(),requestAnimationFrame(rc);return}if(Hs===Qi.TITLE)oe.consumeAnyJustPressed()&&(Hs=Qi.FLY,Qo.dismiss(),ge.showFastTravel(),ge.showUpgrades(),ge.setMissionVisible(!0),ge.showResetHint(),ge.hide(),oe.enableGyro().catch(()=>{}),hi.start(),q2&&Zi.enter(se));else{const r=oe.sample(),s=!ji.suppressInput&&!ze.isOpen();if(ec.x=s?r.lookX:0,ec.y=s?r.lookY:0,(oe.keyboard.consumeJustPressed(["KeyT"])||oe.gamepad.consumeJustPressed(Be.Select))&&ge.toggle(),(oe.keyboard.consumeJustPressed(["KeyX"])||oe.gamepad.consumeJustPressed(Be.X))&&(se.arcadeDamping=!se.arcadeDamping),(oe.keyboard.consumeJustPressed(["KeyF"])||oe.gamepad.consumeJustPressed(Be.R1))&&qu(),(oe.keyboard.consumeJustPressed(["KeyU"])||oe.gamepad.consumeJustPressed(Be.Y))&&(ze.isOpen()?(ze.hideAll(),ge.show()):ze.show("upgrades")),ze.isOpen()&&(oe.gamepad.consumeJustPressed(Be.B)||oe.keyboard.consumeJustPressed(["Escape"]))&&(ze.hideAll(),ge.show()),ze.isOpen()){const o=(oe.gamepad.isButtonDown(Be.Down)?1:0)-(oe.gamepad.isButtonDown(Be.Up)?1:0),l=-r.throttle||o;l&&ze.scrollBy(l*W2*e)}(oe.keyboard.consumeJustPressed(["KeyR"])||oe.gamepad.consumeJustPressed(Be.Start))&&V2(),ji.suppressInput||ze.isOpen()?hi.setThrottle(0):(G1(se,r,e),hi.setThrottle(r.throttle),Zi.update(se,e),H2({position:se.mesh.position,velocity:se.velocity},Bs.instances),se.braking&&se.velocity.set(0,0,0));const a=oe.keyboard.isDown("KeyH")||oe.gamepad.isButtonDown(Be.L1);mn.update({shipPos:se.mesh.position,shipSpeed:se.velocity.length(),holdActive:a&&!ze.isOpen()&&!ji.suppressInput&&!Zi.active,dt:e})}ji.update(e),hi.update(e),Bs.update(e),Jo.update(e),Zo.update(e),jo.update(ui),Pr.update(e),zs.update(e),fu(Ko,ui),tc.update(se,ec,e),li.render(pn,ui),Gs.setFromQuaternion(se.mesh.quaternion,"YXZ"),ge.update({velocity:se.velocity.length(),eulerDeg:{x:Si.radToDeg(Gs.x),y:Si.radToDeg(Gs.y),z:Si.radToDeg(Gs.z)},dt:e,sources:oe.activeSources(),dampingOn:se.arcadeDamping}),ge.updateMission({remaining:mn.remaining(),total:mn.totalRovers(),credits:mn.credits});const n=mn.repairing??mn.inRange;ge.updateHack({name:n?n.name:null,progress:n?n.repairProgress:0}),requestAnimationFrame(rc)}requestAnimationFrame(rc)})();
