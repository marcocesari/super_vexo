(function(){"use strict";var qu=document.createElement("style");qu.textContent=`html,body{margin:0;padding:0;width:100%;height:100%;height:100dvh;background:#000;overflow:hidden;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#d6f0ff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}body,#app{position:fixed;inset:0}canvas{display:block;position:fixed;inset:0;width:100%;height:100%;touch-action:none}#cinematic{position:fixed;inset:0;z-index:12;pointer-events:none;color:#e6f3ff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.cinematic__skip{position:absolute;top:calc(1rem + env(safe-area-inset-top));right:calc(1.25rem + env(safe-area-inset-right));font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6aa3d1;opacity:.65}.cinematic__text{position:absolute;left:0;right:0;bottom:12%;text-align:center;padding:0 2rem;opacity:0;transition:opacity .9s ease;text-shadow:0 0 18px rgba(80,160,255,.4),0 2px 8px rgba(0,0,0,.85)}.cinematic__text--in{opacity:1}.cinematic__text p{font-size:clamp(1.05rem,2vw,1.6rem);letter-spacing:.04em;line-height:1.5;margin:.3em 0;color:#cbe2ff}.cinematic__flash{position:absolute;inset:0;background:radial-gradient(circle at center,#fff,#d3eaff,#7fb8ee 80%,#112540);opacity:0;pointer-events:none}#title-card{position:fixed;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#080e1e8c,#000000d9 70%);transition:opacity .5s ease;opacity:1}#title-card.title-card--hidden{opacity:0;pointer-events:none}.title-card__inner{text-align:center;padding:2rem 3rem}.title-card__title{font-size:clamp(1.6rem,4vw,3rem);letter-spacing:.05em;margin:0 0 1.5rem;color:#b8e0ff;text-shadow:0 0 24px rgba(80,160,255,.4)}.title-card__prompt{font-size:clamp(.9rem,1.5vw,1.1rem);color:#6aa3d1;margin:0;animation:pulse 1.4s ease-in-out infinite}@keyframes pulse{0%,to{opacity:.5}50%{opacity:1}}#tablet-hint{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;padding:4px 10px;background:#0a141eb3;color:#9ab3c9;font:11px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;border:1px solid rgba(120,160,200,.18);pointer-events:none}#tablet-hint[hidden]{display:none}#tablet{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;pointer-events:none}.tablet-frame{padding:6px;background:linear-gradient(135deg,#1a232e,#0a0f15);border-radius:14px;box-shadow:0 4px 24px #0009,inset 0 0 0 1px #ffffff0d}.tablet-bezel{padding:6px;background:#050709;border-radius:10px}.tablet-screen{width:220px;padding:10px 12px;background:linear-gradient(180deg,#061320,#03070d);border-radius:6px;font-size:12px;line-height:1.5;color:#9fd1ff;box-shadow:inset 0 0 18px #3278c81f}.tablet-titlebar{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid rgba(80,140,200,.18);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1}.tablet-app{font-weight:600}.tablet-source{padding:1px 6px;border-radius:3px;background:#50a0ff1f;color:#b8e0ff}.tablet-row{display:flex;justify-content:space-between}.tablet-row--small{font-size:10px;opacity:.7;margin-top:4px}.tablet-row--hint{margin-top:8px;padding-top:6px;border-top:1px solid rgba(80,140,200,.12);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1;opacity:.7;text-align:right}.tablet-label{color:#6aa3d1}.tablet-value{color:#d6f0ff;font-variant-numeric:tabular-nums}.tablet-app-btn{display:flex;margin-top:10px;width:100%;padding:8px 10px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:6px;color:#d6f0ff;font-family:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .4s ease}.tablet-app-btn--visible{opacity:1;pointer-events:auto}.tablet-app-btn:hover:not(:disabled){background:linear-gradient(135deg,#235080,#103050)}.tablet-app-btn:active:not(:disabled){transform:translateY(1px)}.tablet-app-btn:disabled{cursor:progress;opacity:.65}.tablet-app-btn--active{box-shadow:0 0 16px #78c8ff99}.tablet-app-btn__icon{font-size:14px;opacity:.85}.tablet-app-btn__label{flex:1;text-align:left;font-weight:600}.tablet-app-btn__key{padding:1px 6px;border-radius:3px;background:#78b4f02e;font-size:10px}.tablet-mission{margin-top:8px;padding-top:8px;border-top:1px solid rgba(80,140,200,.18)}.tablet-hack{margin-top:8px;padding:8px;background:#50a0ff14;border:1px solid rgba(120,180,240,.35);border-radius:4px}.tablet-hack__name{font-size:11px;font-weight:700;letter-spacing:.1em;color:#d6f0ff}.tablet-hack__hint{font-size:10px;color:#9adfff;opacity:.85;margin-bottom:4px}.tablet-hack__bar{height:6px;background:#ffffff14;border-radius:3px;overflow:hidden}.tablet-hack__fill{height:100%;width:0%;background:linear-gradient(90deg,#4aa3ff,#9adfff);transition:none}.screen-overlay{position:fixed;inset:0;z-index:8;display:flex;align-items:center;justify-content:center;padding:2rem;background:radial-gradient(ellipse at center,#080e1ec7,#000000eb 80%);pointer-events:auto}.screen-overlay[hidden]{display:none}.screen-card{max-width:460px;max-height:84vh;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:1.6rem 1.8rem;background:linear-gradient(160deg,#0e1e30,#050a14);border:1px solid rgba(120,180,240,.3);border-radius:10px;box-shadow:0 8px 36px #0000008c,inset 0 0 0 1px #ffffff08;color:#d6f0ff;text-align:center}.screen-card--wide{max-width:520px;text-align:left}.screen-card{scrollbar-width:thin;scrollbar-color:rgba(120,180,240,.4) transparent}.screen-card::-webkit-scrollbar{width:6px}.screen-card::-webkit-scrollbar-track{background:transparent}.screen-card::-webkit-scrollbar-thumb{background:#78b4f066;border-radius:3px}.screen-card__title{margin:0 0 .5rem;font-size:clamp(1.2rem,2.2vw,1.8rem);letter-spacing:.08em;color:#b8e0ff}.screen-card__body{color:#9fc6e7;font-size:.95rem;line-height:1.5}.screen-card__row{margin:.8rem 0}.screen-card__hint{margin:0 0 .8rem;padding-bottom:.6rem;border-bottom:1px solid rgba(80,140,200,.15);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6aa3d1;opacity:.75;text-align:center}.screen-card__credits{font-size:1.1rem;font-weight:700;color:#ffdf80}.screen-card__credits-label{font-size:.7rem;letter-spacing:.15em;color:#6aa3d1;margin-right:6px;font-weight:400}.screen-card__actions{display:flex;justify-content:center;gap:10px;margin-top:1rem}.screen-btn{padding:8px 14px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:5px;color:#d6f0ff;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.screen-btn--primary{background:linear-gradient(135deg,#2660a0,#154070);border-color:#a0dcff99}.screen-btn--small{padding:5px 10px;font-size:11px}.screen-btn:hover:not(:disabled){filter:brightness(1.15)}.screen-btn:disabled{opacity:.45;cursor:not-allowed}.upgrade-list{list-style:none;padding:0;margin:0}.upgrade-item{padding:10px 12px;margin-bottom:8px;background:#50a0ff0f;border:1px solid rgba(120,180,240,.18);border-radius:6px}.upgrade-item--bought{opacity:.65;border-color:#64dcb466}.upgrade-item__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.upgrade-item__name{font-weight:700;color:#d6f0ff;letter-spacing:.05em}.upgrade-item__cost{color:#ffdf80;font-weight:700;font-variant-numeric:tabular-nums}.upgrade-item__desc{margin:4px 0 8px;font-size:12px;color:#9fc6e7;line-height:1.4}#warp-flash{position:fixed;inset:0;background:radial-gradient(circle at center,#fff,#c4dfff,#6aa3d1 80%,#0a1a30);pointer-events:none;opacity:0;z-index:6;transition:none}@media(max-height:480px){.title-card__inner{padding:1rem 1.5rem;max-width:62vw}.title-card__title{font-size:clamp(1rem,2.6vw,1.6rem);margin-bottom:.9rem}.title-card__prompt{font-size:.85rem}.cinematic__text{bottom:8%}.cinematic__text p{font-size:1rem;line-height:1.35}.tablet-screen{width:180px;font-size:11px}.screen-overlay{padding:1rem}.screen-card{padding:1rem 1.2rem;max-height:88vh}.screen-card__title{font-size:1.1rem}.upgrade-item{padding:8px 10px;margin-bottom:6px}}@media(max-width:480px){.tablet-screen{width:min(58vw,220px)}.title-card__inner{padding:1.5rem 1rem}}#landing-banner{position:fixed;left:50%;bottom:calc(2.2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;padding:.7rem 1.5rem;text-align:center;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none;transition:opacity 1.2s ease}#landing-banner[hidden]{display:none}.landing-banner--fading{opacity:0}.landing-banner__town{font-size:10px;letter-spacing:.22em;color:#6aa3d1}.landing-banner__street{margin-top:2px;font-size:1.05rem;letter-spacing:.04em;color:#eaf4ff}.landing-banner__hint{margin-top:6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8fb8d8;opacity:.8}@media(max-height:480px){#landing-banner{bottom:calc(1rem + env(safe-area-inset-bottom));padding:.5rem 1.1rem}.landing-banner__street{font-size:.9rem}}.title-card__build{margin:1.1rem 0 0;font-size:9px;letter-spacing:.16em;color:#4d7ba1;opacity:.65}#map-screen{position:fixed;inset:0;z-index:11;display:flex;align-items:center;justify-content:center;background:#040910e6}#map-screen[hidden]{display:none}.map-panel{display:flex;flex-direction:column;gap:.5rem;width:min(1100px,96vw);height:min(760px,92vh);padding:.9rem 1rem .7rem;background:#0a1622f0;border:1px solid rgba(120,180,240,.28);border-radius:10px}.map-head{display:flex;align-items:baseline;justify-content:space-between}.map-title{font-size:.95rem;letter-spacing:.24em;color:#cfe4f6}.map-scale{font-size:10px;letter-spacing:.12em;color:#6f9dc4}.map-frame{position:relative;flex:1 1 auto;min-height:0;border-radius:6px;overflow:hidden;background:#0a1622}.map-canvas{position:relative;inset:auto;width:100%;height:100%;display:block}.map-building{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;font-size:11px;letter-spacing:.14em;color:#9fd8ff;background:#060e18cc;padding:.5rem .9rem;border-radius:5px}#game-over{position:fixed;inset:0;z-index:12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.9rem;background:#020408e0;animation:game-over-in 1.1s ease-out}#game-over[hidden]{display:none}@keyframes game-over-in{0%{opacity:0}40%{opacity:0}to{opacity:1}}.game-over__sign{font-size:clamp(2.2rem,9vw,4.2rem);letter-spacing:.3em;color:#ff4d5e;text-shadow:0 0 24px rgba(255,77,94,.55),0 3px 0 rgba(0,0,0,.6)}.game-over__ask{margin:0;color:#cfe4f6;font-size:.95rem;letter-spacing:.08em}.game-over__buttons{display:flex;gap:1rem;margin-top:.4rem}.game-over__btn{font:inherit;font-size:.85rem;letter-spacing:.14em;padding:.6rem 1.3rem;color:#d8ecff;background:#0a1828e6;border:1px solid rgba(120,180,240,.35);border-radius:6px;cursor:pointer}.game-over__btn--on{border-color:#5effa6;color:#eaffef;box-shadow:0 0 18px #5effa640}.game-over__btn:disabled{opacity:.35;cursor:default}.game-over__hint{margin:.3rem 0 0;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4}#inventory{background:none}.inventory__panel{display:flex;gap:1.4rem;width:min(920px,94vw);height:min(560px,82vh)}.inventory__list{flex:1 1 56%;display:flex;flex-direction:column;min-width:0;padding:1.4rem;background:linear-gradient(160deg,#0e1e30f5,#050a14f7);border:1px solid rgba(120,180,240,.28);border-radius:10px;box-shadow:0 18px 60px #0009}.inventory__figure{flex:1 1 44%;position:relative;border:1px solid rgba(120,180,240,.18);border-radius:8px;touch-action:none;user-select:none;cursor:grab}.inventory__figure:active{cursor:grabbing}.inventory__figure-hint{position:absolute;bottom:.5rem;left:0;right:0;margin:0;text-align:center;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6f9dc4;pointer-events:none}.inventory__tabs{display:flex;gap:.6rem;margin:.2rem 0 .9rem}.inventory__tab{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4;padding:.25rem .7rem;border:1px solid rgba(120,180,240,.22);border-radius:999px}.inventory__tab--on{color:#d8ecff;border-color:#5effa680;background:#5effa614}.inventory__items{list-style:none;margin:0;padding:0;overflow-y:auto;flex:1 1 auto;overscroll-behavior:contain;touch-action:pan-y}.inventory__item{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;padding:.6rem .75rem;border:1px solid rgba(120,180,240,.16);border-radius:6px;margin-bottom:.5rem;background:#0a162699}.inventory__item--held{border-color:#5effa673;box-shadow:inset 0 0 18px #5effa614}.inventory__item--empty{color:#6f9dc4;justify-content:center}.inventory__tablet{flex:1 1 auto;min-height:0;overflow-y:auto}.inventory__tablet[hidden]{display:none}.inventory__tablet #tablet{position:static;inset:auto;z-index:auto;pointer-events:auto}.inventory__tablet .tablet-frame{width:100%}.inventory__tablet .tablet-bezel,.inventory__tablet .tablet-screen{width:100%;box-sizing:border-box}.inventory__system{flex:1 1 auto;display:flex;flex-direction:column;align-items:flex-start;gap:.7rem}.inventory__system[hidden]{display:none}.inventory__save{font:inherit;font-size:.85rem;letter-spacing:.16em;padding:.7rem 1.4rem;color:#eaffef;background:#0c281cd9;border:1px solid rgba(94,255,166,.45);border-radius:6px;cursor:pointer}.inventory__save:hover{background:#123c28e6}.inventory__saved{margin:0;font-size:11px;letter-spacing:.1em;color:#7fb0d8}.inventory__item-name{color:#eaf4ff;font-size:.95rem;letter-spacing:.04em}.inventory__item-note{color:#7fb0d8;font-size:11px;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}@media(max-width:700px),(max-height:460px){.inventory__panel{flex-direction:row;height:88vh;padding:.8rem;gap:.8rem}.inventory__item{padding:.4rem .55rem}.inventory__item-name{font-size:.85rem}}#hearts{position:fixed;top:calc(.8rem + env(safe-area-inset-top));left:50%;transform:translate(-50%);z-index:6;display:flex;gap:6px;pointer-events:none;font-size:22px;line-height:1}#hearts[hidden]{display:none}.heart{color:#ff4d5e;text-shadow:0 0 6px rgba(255,77,94,.55),0 1px 2px rgba(0,0,0,.8)}.heart--spent{color:#ffffff38;text-shadow:0 1px 2px rgba(0,0,0,.8)}@keyframes hearts-hit{0%{transform:translate(-50%) scale(1.35);filter:brightness(2.2)}to{transform:translate(-50%) scale(1);filter:brightness(1)}}.hearts--hit{animation:hearts-hit .45s ease-out}#stamina-wheel{position:fixed;left:0;top:0;z-index:6;width:56px;height:56px;margin:-28px 0 0 -28px;pointer-events:none;transition:opacity .2s linear}#stamina-wheel[hidden]{display:none}.stamina-wheel__track{fill:none;stroke:#06140e8c;stroke-width:5}.stamina-wheel__fill{fill:none;stroke:#5effa6;stroke-width:4;stroke-linecap:round;transform:rotate(-90deg);transform-origin:28px 28px;filter:drop-shadow(0 0 3px rgba(94,255,166,.7))}.stamina-wheel--winded .stamina-wheel__fill{stroke:#ff8a5c;filter:drop-shadow(0 0 4px rgba(255,138,92,.8))}#foot-prompt{position:fixed;left:50%;bottom:calc(7rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:6;padding:.45rem 1.1rem;font-size:11px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;color:#dceaf7;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none}#foot-prompt[hidden]{display:none}@media(max-height:480px){#foot-prompt{bottom:calc(4.4rem + env(safe-area-inset-bottom));font-size:10px;padding:.35rem .8rem}}#character-label{position:fixed;left:50%;bottom:calc(2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;text-align:center;pointer-events:none}.character-label__name{font-size:1.6rem;letter-spacing:.4em;text-indent:.4em;color:#eaf4ff;text-shadow:0 0 18px rgba(83,255,157,.45)}.character-label__hint{margin-top:6px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6aa3d1;opacity:.75}
/*$vite$:1*/`,document.head.appendChild(qu);const Xa="169",Gp=0,Yu=1,Vp=2,Ku=1,$u=2,Zn=3,Qn=0,Wt=1,Xt=2,mi=0,ds=1,ei=2,ju=3,Ju=4,Wp=5,Fi=100,Xp=101,qp=102,Yp=103,Kp=104,$p=200,jp=201,Jp=202,Zp=203,qa=204,Ya=205,Qp=206,em=207,tm=208,nm=209,im=210,sm=211,rm=212,om=213,am=214,Ka=0,$a=1,ja=2,fs=3,Ja=4,Za=5,Qa=6,ec=7,Zu=0,cm=1,lm=2,gi=0,um=1,hm=2,dm=3,Qu=4,fm=5,pm=6,mm=7,eh="attached",gm="detached",th=300,ps=301,ms=302,tc=303,nc=304,go=306,_i=1e3,xi=1001,_o=1002,on=1003,nh=1004,mr=1005,fn=1006,xo=1007,ti=1008,ni=1009,ih=1010,sh=1011,gr=1012,ic=1013,Bi=1014,An=1015,_r=1016,sc=1017,rc=1018,gs=1020,rh=35902,oh=1021,ah=1022,vn=1023,ch=1024,lh=1025,_s=1026,xs=1027,oc=1028,ac=1029,uh=1030,cc=1031,lc=1033,vo=33776,yo=33777,Mo=33778,So=33779,uc=35840,hc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,_c=37808,xc=37809,vc=37810,yc=37811,Mc=37812,Sc=37813,bc=37814,wc=37815,Ec=37816,Ac=37817,Tc=37818,Rc=37819,Cc=37820,Pc=37821,bo=36492,Ic=36494,Lc=36495,hh=36283,Nc=36284,Dc=36285,Uc=36286,_m=2200,xm=2201,vm=2202,xr=2300,vr=2301,Oc=2302,vs=2400,ys=2401,wo=2402,Fc=2500,ym=2501,Mm=0,dh=1,Bc=2,Sm=3200,bm=3201,fh=0,wm=1,vi="",Et="srgb",qt="srgb-linear",kc="display-p3",Eo="display-p3-linear",Ao="linear",yt="srgb",To="rec709",Ro="p3",Ms=7680,ph=519,Em=512,Am=513,Tm=514,mh=515,Rm=516,Cm=517,Pm=518,Im=519,zc=35044,gh="300 es",ii=2e3,Co=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const yr=Math.PI/180,Ss=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function Hc(i,e){return(i%e+e)%e}function Lm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Nm(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function Dm(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function Um(i,e=1){return e-Math.abs(Hc(i,e*2)-e)}function Om(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function km(i,e){return i+Math.random()*(e-i)}function zm(i){return i*(.5-Math.random())}function Hm(i){i!==void 0&&(_h=i);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gm(i){return i*yr}function Vm(i){return i*Ss}function Wm(i){return(i&i-1)===0&&i!==0}function Xm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ym(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:yr,RAD2DEG:Ss,generateUUID:yn,clamp:Ut,euclideanModulo:Hc,mapLinear:Lm,inverseLerp:Nm,lerp:Mr,damp:Dm,pingpong:Um,smoothstep:Om,smootherstep:Fm,randInt:Bm,randFloat:km,randFloatSpread:zm,seededRandom:Hm,degToRad:Gm,radToDeg:Vm,isPowerOfTwo:Wm,ceilPowerOfTwo:Xm,floorPowerOfTwo:qm,setQuaternionFromProperEuler:Ym,normalize:mt,denormalize:Tn};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,s,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],v=s[4],y=s[7],C=s[2],E=s[5],T=s[8];return r[0]=o*x+a*S+c*C,r[3]=o*m+a*v+c*E,r[6]=o*p+a*y+c*T,r[1]=l*x+u*S+h*C,r[4]=l*m+u*v+h*E,r[7]=l*p+u*y+h*T,r[2]=d*x+f*S+g*C,r[5]=d*m+f*v+g*E,r[8]=d*p+f*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new tt;function xh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Km(){const i=Sr("canvas");return i.style.display="block",i}const vh={};function Po(i){i in vh||(vh[i]=!0,console.warn(i))}function $m(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function jm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[qt]:{transfer:Ao,primaries:To,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Et]:{transfer:yt,primaries:To,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Eo]:{transfer:Ao,primaries:Ro,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(yh)},[kc]:{transfer:yt,primaries:Ro,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(yh).convertLinearToSRGB()}},Zm=new Set([qt,Eo]),ht={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=br[e].toReference,s=br[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return br[i].primaries},getTransfer:function(i){return i===vi?Ao:br[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(br[e].luminanceCoefficients)}};function bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ws;class Qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=Sr("canvas")),ws.width=e.width,ws.height=e.height;const n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e0=0;class Sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wc(s[o].image)):r.push(Wc(s[o]))}else r=Wc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class Ot extends ki{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=xi,s=xi,r=fn,o=ti,a=vn,c=ni,l=Ot.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=yn(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=th,Ot.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(f+1)/2,C=(p+1)/2,E=(u+d)/4,T=(h+x)/4,b=(g+m)/4;return v>y&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=T/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=b/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ot(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends n0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bh extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i0 extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*x,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),E=Math.atan2(C,p*S);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const y=a*S;if(c=c*m+d*y,l=l*m+f*y,u=u*m+g*y,h=h*m+x*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new N,wh=new Yt;class zn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Lo.subVectors(this.max,wr),Es.subVectors(e.a,wr),As.subVectors(e.b,wr),Ts.subVectors(e.c,wr),yi.subVectors(As,Es),Mi.subVectors(Ts,As),Gi.subVectors(Es,Ts);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Gi.z,Gi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Gi.z,0,-Gi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Gi.y,Gi.x,0];return!qc(t,Es,As,Ts,Lo)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,Es,As,Ts,Lo))?!1:(No.crossVectors(yi,Mi),t=[No.x,No.y,No.z],qc(t,Es,As,Ts,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new N,new N,new N,new N,new N,new N,new N,new N],Rn=new N,Io=new zn,Es=new N,As=new N,Ts=new N,yi=new N,Mi=new N,Gi=new N,wr=new N,Lo=new N,No=new N,Vi=new N;function qc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vi.fromArray(i,r);const a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const s0=new zn,Er=new N,Yc=new N;class Hn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Yc)),this.expandByPoint(Er.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new N,Kc=new N,Do=new N,Si=new N,$c=new N,Uo=new N,jc=new N;class Oo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kc.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Kc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=Si.dot(this.direction),c=-Si.dot(Do),l=Si.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Kc).addScaledVector(Do,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){$c.subVectors(t,e),Uo.subVectors(n,e),jc.crossVectors($c,Uo);let o=this.direction.dot(jc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const c=a*this.direction.dot(Uo.crossVectors(Si,Uo));if(c<0)return null;const l=a*this.direction.dot($c.cross(Si));if(l<0||c+l>o)return null;const u=-a*Si.dot(jc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,o0)}lookAt(e,t,n){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),bi.crossVectors(n,pn),bi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),bi.crossVectors(n,pn)),bi.normalize(),Fo.crossVectors(pn,bi),s[0]=bi.x,s[4]=Fo.x,s[8]=pn.x,s[1]=bi.y,s[5]=Fo.y,s[9]=pn.y,s[2]=bi.z,s[6]=Fo.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],v=n[7],y=n[11],C=n[15],E=s[0],T=s[4],b=s[8],P=s[12],_=s[1],M=s[5],F=s[9],z=s[13],V=s[2],Y=s[6],A=s[10],G=s[14],U=s[3],q=s[7],B=s[11],W=s[15];return r[0]=o*E+a*_+c*V+l*U,r[4]=o*T+a*M+c*Y+l*q,r[8]=o*b+a*F+c*A+l*B,r[12]=o*P+a*z+c*G+l*W,r[1]=u*E+h*_+d*V+f*U,r[5]=u*T+h*M+d*Y+f*q,r[9]=u*b+h*F+d*A+f*B,r[13]=u*P+h*z+d*G+f*W,r[2]=g*E+x*_+m*V+p*U,r[6]=g*T+x*M+m*Y+p*q,r[10]=g*b+x*F+m*A+p*B,r[14]=g*P+x*z+m*G+p*W,r[3]=S*E+v*_+y*V+C*U,r[7]=S*T+v*M+y*Y+C*q,r[11]=S*b+v*F+y*A+C*B,r[15]=S*P+v*z+y*G+C*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,v=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,y=u*x*l-g*h*l+g*a*f-o*x*f-u*a*p+o*h*p,C=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,E=t*S+n*v+s*y+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*T,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*T,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*T,e[4]=v*T,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*T,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*T,e[8]=y*T,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*T,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*T,e[12]=C*T,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*T,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*T,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,S=c*l,v=c*u,y=c*h,C=n.x,E=n.y,T=n.z;return s[0]=(1-(x+p))*C,s[1]=(f+y)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(m-S)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const l=1/r,u=1/o,h=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ii){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Co)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ii){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u;let g,x;if(a===ii)g=(o+r)*h,x=-2*h;else if(a===Co)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rs=new N,Cn=new $e,r0=new N(0,0,0),o0=new N(1,1,1),bi=new N,Fo=new N,pn=new N,Eh=new $e,Ah=new Yt;class Kt{constructor(e=0,t=0,n=0,s=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a0=0;const Rh=new N,Cs=new Yt,oi=new $e,Bo=new N,Ar=new N,c0=new N,l0=new Yt,Ch=new N(1,0,0),Ph=new N(0,1,0),Ih=new N(0,0,1),Lh={type:"added"},u0={type:"removed"},Ps={type:"childadded",child:null},Jc={type:"childremoved",child:null};class Mt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new N,t=new Kt,n=new Yt,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new tt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ar,Bo,this.up):oi.lookAt(Bo,Ar,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(oi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u0),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new N(0,1,0),Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new N,ai=new N,Zc=new N,ci=new N,Is=new N,Ls=new N,Nh=new N,Qc=new N,el=new N,tl=new N,nl=new dt,il=new dt,sl=new dt;class Mn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),ai.subVectors(n,t),Zc.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ai),c=Pn.dot(Zc),l=ai.dot(ai),u=ai.dot(Zc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nl,r.x),o.addScaledVector(il,r.y),o.addScaledVector(sl,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ai.subVectors(e,t),Pn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Pn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,n),Ls.subVectors(r,n),Qc.subVectors(e,n);const c=Is.dot(Qc),l=Ls.dot(Qc);if(c<=0&&l<=0)return t.copy(n);el.subVectors(e,s);const u=Is.dot(el),h=Ls.dot(el);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Is,o);tl.subVectors(e,r);const f=Is.dot(tl),g=Ls.dot(tl);if(g>=0&&f<=g)return t.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ls,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Nh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Nh,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Is,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Hc(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rl(o,r,e+1/3),this.g=rl(o,r,e),this.b=rl(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=Dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ht.fromWorkingColorSpace(en.copy(this),e),Math.round(Ut(en.r*255,0,255))*65536+Math.round(Ut(en.g*255,0,255))*256+Math.round(Ut(en.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(en.copy(this),t);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Et){ht.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,s=en.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(ko);const n=Mr(wi.h,ko.h,t),s=Mr(wi.s,ko.s,t),r=Mr(wi.l,ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ve;Ve.NAMES=Dh;let h0=0;class In extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=ds,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new N,zo=new ge;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}}class Uh extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oh extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d0=0;const Sn=new $e,ol=new Mt,Ns=new N,mn=new zn,Tr=new zn,zt=new N;class Rt extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?Oh:Uh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(mn.min,Tr.min),mn.expandByPoint(zt),zt.addVectors(mn.max,Tr.max),mn.expandByPoint(zt)):(mn.expandByPoint(Tr.min),mn.expandByPoint(Tr.max))}mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zt.fromBufferAttribute(a,l),c&&(Ns.fromBufferAttribute(e,l),zt.add(Ns)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new N,c[b]=new N;const l=new N,u=new N,h=new N,d=new ge,f=new ge,g=new ge,x=new N,m=new N;function p(b,P,_){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,b),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,_),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const M=1/(f.x*g.y-g.x*f.y);isFinite(M)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(M),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(M),a[b].add(x),a[P].add(x),a[_].add(x),c[b].add(m),c[P].add(m),c[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,P=S.length;b<P;++b){const _=S[b],M=_.start,F=_.count;for(let z=M,V=M+F;z<V;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new N,y=new N,C=new N,E=new N;function T(b){C.fromBufferAttribute(s,b),E.copy(C);const P=a[b];v.copy(P),v.sub(C.multiplyScalar(C.dot(P))).normalize(),y.crossVectors(E,P);const M=y.dot(c[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,M)}for(let b=0,P=S.length;b<P;++b){const _=S[b],M=_.start,F=_.count;for(let z=M,V=M+F;z<V;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Tt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new $e,Wi=new Oo,Ho=new Hn,Bh=new N,Go=new N,Vo=new N,Wo=new N,al=new N,Xo=new N,kh=new N,qo=new N;class re extends Mt{constructor(e=new Rt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(al.fromBufferAttribute(h,e),o?Xo.addScaledVector(al,u):Xo.addScaledVector(al.sub(t),u))}t.add(Xo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Ho.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ho,Bh)===null||Wi.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(Fh.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,C=v;y<C;y+=3){const E=a.getX(y),T=a.getX(y+1),b=a.getX(y+2);s=Yo(this,p,e,n,l,u,h,E,T,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Yo(this,o,e,n,l,u,h,S,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,C=v;y<C;y+=3){const E=y,T=y+1,b=y+2;s=Yo(this,p,e,n,l,u,h,E,T,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=m,v=m+1,y=m+2;s=Yo(this,o,e,n,l,u,h,S,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function f0(i,e,t,n,s,r,o,a){let c;if(e.side===Wt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Qn,a),c===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qo);return l<t.near||l>t.far?null:{distance:l,point:qo.clone(),object:i}}function Yo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Go),i.getVertexPosition(c,Vo),i.getVertexPosition(l,Wo);const u=f0(i,e,t,n,Go,Vo,Wo,kh);if(u){const h=new N;Mn.getBarycoord(kh,Go,Vo,Wo,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,c,l,h,new ge)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,h,new ge)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};Mn.getNormal(Go,Vo,Wo,d.normal),u.face=d,u.barycoord=h}return u}class Ht extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function g(x,m,p,S,v,y,C,E,T,b,P){const _=y/T,M=C/b,F=y/2,z=C/2,V=E/2,Y=T+1,A=b+1;let G=0,U=0;const q=new N;for(let B=0;B<A;B++){const W=B*M-z;for(let j=0;j<Y;j++){const ie=j*_-F;q[x]=ie*S,q[m]=W*v,q[p]=V,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=E>0?1:-1,u.push(q.x,q.y,q.z),h.push(j/T),h.push(1-B/b),G+=1}}for(let B=0;B<b;B++)for(let W=0;W<T;W++){const j=d+W+Y*B,ie=d+W+Y*(B+1),K=d+(W+1)+Y*(B+1),J=d+(W+1)+Y*B;c.push(j,ie,J),c.push(ie,K,J),U+=6}a.addGroup(f,U,P),f+=U,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=Ds(i[t]);for(const s in n)e[s]=n[s]}return e}function p0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const m0={clone:Ds,merge:an};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new N,Gh=new ge,Vh=new ge;class Dt extends Hh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Vh),t.subVectors(Vh,Gh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Os=1;class x0 extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dt(Us,Os,e,t);s.layers=this.layers,this.add(s);const r=new Dt(Us,Os,e,t);r.layers=this.layers,this.add(r);const o=new Dt(Us,Os,e,t);o.layers=this.layers,this.add(o);const a=new Dt(Us,Os,e,t);a.layers=this.layers,this.add(a);const c=new Dt(Us,Os,e,t);c.layers=this.layers,this.add(c);const l=new Dt(Us,Os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wh extends Ot{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:mi});r.uniforms.tEquirect.value=t;const o=new re(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=fn),new x0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const cl=new N,y0=new N,M0=new tt;class Xi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=cl.subVectors(n,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||M0.getNormalMatrix(e),s=this.coplanarPoint(cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Hn,Ko=new N;class ll{constructor(e=new Xi,t=new Xi,n=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+u,m+g,y+S).normalize(),n[3].setComponents(c-o,d-u,m-g,y-S).normalize(),n[4].setComponents(c-a,d-h,m-x,y-v).normalize(),t===ii)n[5].setComponents(c+a,d+h,m+x,y+v).normalize();else if(t===Co)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ko.x=s.normal.x>0?e.max.x:e.min.x,Ko.y=s.normal.y>0?e.max.y:e.min.y,Ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function S0(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Fs extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const S=p*d-o;for(let v=0;v<l;v++){const y=v*h-r;g.push(y,-S,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const v=S+l*p,y=S+l*(p+1),C=S+1+l*(p+1),E=S+1+l*p;f.push(v,y,E),f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
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
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O0=`#ifdef USE_IRIDESCENCE
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
#endif`,F0=`#ifdef USE_BUMPMAP
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q0=`#define PI 3.141592653589793
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`
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
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
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
#endif`,Mg=`struct PhysicalMaterial {
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
}`,Sg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lg=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nt={alphahash_fragment:b0,alphahash_pars_fragment:w0,alphamap_fragment:E0,alphamap_pars_fragment:A0,alphatest_fragment:T0,alphatest_pars_fragment:R0,aomap_fragment:C0,aomap_pars_fragment:P0,batching_pars_vertex:I0,batching_vertex:L0,begin_vertex:N0,beginnormal_vertex:D0,bsdfs:U0,iridescence_fragment:O0,bumpmap_pars_fragment:F0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:H0,color_fragment:G0,color_pars_fragment:V0,color_pars_vertex:W0,color_vertex:X0,common:q0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:K0,displacementmap_pars_vertex:$0,displacementmap_vertex:j0,emissivemap_fragment:J0,emissivemap_pars_fragment:Z0,colorspace_fragment:Q0,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:cg,fog_pars_fragment:lg,gradientmap_pars_fragment:ug,lightmap_pars_fragment:hg,lights_lambert_fragment:dg,lights_lambert_pars_fragment:fg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:xg,lights_phong_pars_fragment:vg,lights_physical_fragment:yg,lights_physical_pars_fragment:Mg,lights_fragment_begin:Sg,lights_fragment_maps:bg,lights_fragment_end:wg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:Rg,map_fragment:Cg,map_pars_fragment:Pg,map_particle_fragment:Ig,map_particle_pars_fragment:Lg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ug,morphcolor_vertex:Og,morphnormal_vertex:Fg,morphtarget_pars_vertex:Bg,morphtarget_vertex:kg,normal_fragment_begin:zg,normal_fragment_maps:Hg,normal_pars_fragment:Gg,normal_pars_vertex:Vg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:$g,opaque_fragment:jg,packing:Jg,premultiplied_alpha_fragment:Zg,project_vertex:Qg,dithering_fragment:e_,dithering_pars_fragment:t_,roughnessmap_fragment:n_,roughnessmap_pars_fragment:i_,shadowmap_pars_fragment:s_,shadowmap_pars_vertex:r_,shadowmap_vertex:o_,shadowmask_pars_fragment:a_,skinbase_vertex:c_,skinning_pars_vertex:l_,skinning_vertex:u_,skinnormal_vertex:h_,specularmap_fragment:d_,specularmap_pars_fragment:f_,tonemapping_fragment:p_,tonemapping_pars_fragment:m_,transmission_fragment:g_,transmission_pars_fragment:__,uv_pars_fragment:x_,uv_pars_vertex:v_,uv_vertex:y_,worldpos_vertex:M_,background_vert:`varying vec2 vUv;
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
}`},Ie={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Gn={basic:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:an([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:an([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:an([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:an([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:an([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:an([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:an([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:an([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:an([Ie.common,Ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:an([Ie.lights,Ie.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Gn.physical={uniforms:an([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const $o={r:0,b:0,g:0},Yi=new Kt,S_=new $e;function b_(i,e,t,n,s,r,o){const a=new Ve(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1;const y=g(S);y===null?p(a,c):y&&y.isColor&&(p(y,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===go)?(u===void 0&&(u=new re(new Ht(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Ds(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Yi.copy(v.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(Yi)),u.material.toneMapped=ht.getTransfer(y.colorSpace)!==yt,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new re(new Fs(2,2),new Ei({name:"BackgroundMaterial",uniforms:Ds(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,v){S.getRGB($o,zh(i)),n.buffers.color.setClear($o.r,$o.g,$o.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:x,addToRenderList:m}}function w_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(_,M,F,z,V){let Y=!1;const A=h(z,F,M);r!==A&&(r=A,l(r.object)),Y=f(_,z,F,V),Y&&g(_,z,F,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(_,M,F,z),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,M,F){const z=F.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let Y=V[M.id];Y===void 0&&(Y={},V[M.id]=Y);let A=Y[z];return A===void 0&&(A=d(c()),Y[z]=A),A}function d(_){const M=[],F=[],z=[];for(let V=0;V<t;V++)M[V]=0,F[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:F,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,M,F,z){const V=r.attributes,Y=M.attributes;let A=0;const G=F.getAttributes();for(const U in G)if(G[U].location>=0){const B=V[U];let W=Y[U];if(W===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(W=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(W=_.instanceColor)),B===void 0||B.attribute!==W||W&&B.data!==W.data)return!0;A++}return r.attributesNum!==A||r.index!==z}function g(_,M,F,z){const V={},Y=M.attributes;let A=0;const G=F.getAttributes();for(const U in G)if(G[U].location>=0){let B=Y[U];B===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(B=_.instanceColor));const W={};W.attribute=B,B&&B.data&&(W.data=B.data),V[U]=W,A++}r.attributes=V,r.attributesNum=A,r.index=z}function x(){const _=r.newAttributes;for(let M=0,F=_.length;M<F;M++)_[M]=0}function m(_){p(_,0)}function p(_,M){const F=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;F[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),V[_]!==M&&(i.vertexAttribDivisor(_,M),V[_]=M)}function S(){const _=r.newAttributes,M=r.enabledAttributes;for(let F=0,z=M.length;F<z;F++)M[F]!==_[F]&&(i.disableVertexAttribArray(F),M[F]=0)}function v(_,M,F,z,V,Y,A){A===!0?i.vertexAttribIPointer(_,M,F,V,Y):i.vertexAttribPointer(_,M,F,z,V,Y)}function y(_,M,F,z){x();const V=z.attributes,Y=F.getAttributes(),A=M.defaultAttributeValues;for(const G in Y){const U=Y[G];if(U.location>=0){let q=V[G];if(q===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),q!==void 0){const B=q.normalized,W=q.itemSize,j=e.get(q);if(j===void 0)continue;const ie=j.buffer,K=j.type,J=j.bytesPerElement,ce=K===i.INT||K===i.UNSIGNED_INT||q.gpuType===ic;if(q.isInterleavedBufferAttribute){const fe=q.data,ye=fe.stride,ue=q.offset;if(fe.isInstancedInterleavedBuffer){for(let xe=0;xe<U.locationSize;xe++)p(U.location+xe,fe.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<U.locationSize;xe++)m(U.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let xe=0;xe<U.locationSize;xe++)v(U.location+xe,W/U.locationSize,K,B,ye*J,(ue+W/U.locationSize*xe)*J,ce)}else{if(q.isInstancedBufferAttribute){for(let fe=0;fe<U.locationSize;fe++)p(U.location+fe,q.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let fe=0;fe<U.locationSize;fe++)m(U.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let fe=0;fe<U.locationSize;fe++)v(U.location+fe,W/U.locationSize,K,B,W*J,W/U.locationSize*fe*J,ce)}}else if(A!==void 0){const B=A[G];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(U.location,B);break;case 3:i.vertexAttrib3fv(U.location,B);break;case 4:i.vertexAttrib4fv(U.location,B);break;default:i.vertexAttrib1fv(U.location,B)}}}}S()}function C(){b();for(const _ in n){const M=n[_];for(const F in M){const z=M[F];for(const V in z)u(z[V].object),delete z[V];delete M[F]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const F in M){const z=M[F];for(const V in z)u(z[V].object),delete z[V];delete M[F]}delete n[_.id]}function T(_){for(const M in n){const F=n[M];if(F[_.id]===void 0)continue;const z=F[_.id];for(const V in z)u(z[V].object),delete z[V];delete F[_.id]}}function b(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function E_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function A_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ni&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!b)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:E}}function T_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Xi,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,v=S*4;let y=p.clippingState||null;c.value=y,y=u(g,d,v,f);for(let C=0;C!==v;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function R_(i){let e=new WeakMap;function t(o,a){return a===tc?o.mapping=ps:a===nc&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===tc||a===nc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new v0(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ul extends Hh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,qh=[.125,.215,.35,.446,.526,.582],Ki=20,hl=new ul,Yh=new Ve;let dl=null,fl=0,pl=0,ml=!1;const $i=(1+Math.sqrt(5))/2,ks=1/$i,Kh=[new N(-$i,ks,0),new N($i,ks,0),new N(-ks,0,$i),new N(ks,0,$i),new N(0,$i,-ks),new N(0,$i,ks),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Rr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,fl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:_r,format:vn,colorSpace:qt,depthBuffer:!1},s=$h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C_(r)),this._blurMaterial=P_(r,e,t)}return s}_compileMaterial(e){const t=new re(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,s){const a=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Yh),u.toneMapping=gi,u.autoClear=!1;const f=new tn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new re(new Ht,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Yh),x=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;jo(s,S*v,p>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ps||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,hl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kh[(s-r-1)%Kh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new re(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let S=0;for(let T=0;T<Ki;++T){const b=T/x,P=Math.exp(-b*b/2);p.push(P),T===0?S+=P:T<m&&(S+=2*P)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[s],C=3*y*(s>v-Bs?s-v+Bs:0),E=4*(this._cubeSize-y);jo(t,C,E,3*y,2*y),c.setRenderTarget(t),c.render(h,hl)}}function C_(i){const e=[],t=[],n=[];let s=i;const r=i-Bs+1+qh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Bs?c=qh[o-i+Bs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,b=E>2?0:-1,P=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(P,x*g*E),v.set(d,m*g*E);const _=[E,E,E,E,E,E];y.set(_,p*g*E)}const C=new Rt;C.setAttribute("position",new Tt(S,x)),C.setAttribute("uv",new Tt(v,m)),C.setAttribute("faceIndex",new Tt(y,p)),e.push(C),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $h(i,e,t){const n=new Hi(i,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function P_(i,e,t){const n=new Float32Array(Ki),s=new N(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function jh(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Jh(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function I_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===tc||c===nc,u=c===ps||c===ms;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Rr(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Rr(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function L_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Po("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function N_(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let v=0,y=S.length;v<y;v+=3){const C=S[v+0],E=S[v+1],T=S[v+2];d.push(C,E,E,T,T,C)}}else if(g!==void 0){const S=g.array;x=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const C=v+0,E=v+1,T=v+2;d.push(C,E,E,T,T,C)}}else return;const m=new(xh(d)?Oh:Uh)(d,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function D_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S];for(let S=0;S<x.length;S++)t.update(p,n,x[S])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function U_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function O_(i,e,t){const n=new WeakMap,s=new dt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let P=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*C*4*h),T=new bh(E,y,C,h);T.type=An,T.needsUpdate=!0;const b=v*4;for(let _=0;_<h;_++){const M=m[_],F=p[_],z=S[_],V=y*C*4*_;for(let Y=0;Y<M.count;Y++){const A=Y*b;f===!0&&(s.fromBufferAttribute(M,Y),E[V+A+0]=s.x,E[V+A+1]=s.y,E[V+A+2]=s.z,E[V+A+3]=0),g===!0&&(s.fromBufferAttribute(F,Y),E[V+A+4]=s.x,E[V+A+5]=s.y,E[V+A+6]=s.z,E[V+A+7]=0),x===!0&&(s.fromBufferAttribute(z,Y),E[V+A+8]=s.x,E[V+A+9]=s.y,E[V+A+10]=s.z,E[V+A+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new ge(y,C)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Zh extends Ot{constructor(e,t,n,s,r,o,a,c,l,u=_s){if(u!==_s&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_s&&(n=Bi),n===void 0&&u===xs&&(n=gs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qh=new Ot,ed=new Zh(1,1),td=new bh,nd=new i0,id=new Wh,sd=[],rd=[],od=new Float32Array(16),ad=new Float32Array(9),cd=new Float32Array(4);function zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jo(i,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function B_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function H_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function G_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;cd.set(n),i.uniformMatrix2fv(this.addr,!1,cd),Bt(t,n)}}function V_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;ad.set(n),i.uniformMatrix3fv(this.addr,!1,ad),Bt(t,n)}}function W_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),Bt(t,n)}}function X_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function Y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function $_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function Q_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ed.compareFunction=mh,r=ed):r=Qh,t.setTexture2D(e||r,s)}function ex(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nd,s)}function tx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||id,s)}function nx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||td,s)}function ix(i){switch(i){case 5126:return B_;case 35664:return k_;case 35665:return z_;case 35666:return H_;case 35674:return G_;case 35675:return V_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return K_;case 5125:return $_;case 36294:return j_;case 36295:return J_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(i,e){i.uniform1fv(this.addr,e)}function rx(i,e){const t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function ox(i,e){const t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function ax(i,e){const t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function cx(i,e){const t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lx(i,e){const t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ux(i,e){const t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hx(i,e){i.uniform1iv(this.addr,e)}function dx(i,e){i.uniform2iv(this.addr,e)}function fx(i,e){i.uniform3iv(this.addr,e)}function px(i,e){i.uniform4iv(this.addr,e)}function mx(i,e){i.uniform1uiv(this.addr,e)}function gx(i,e){i.uniform2uiv(this.addr,e)}function _x(i,e){i.uniform3uiv(this.addr,e)}function xx(i,e){i.uniform4uiv(this.addr,e)}function vx(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qh,r[o])}function yx(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nd,r[o])}function Mx(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||id,r[o])}function Sx(i,e,t){const n=this.cache,s=e.length,r=Jo(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||td,r[o])}function bx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return cx;case 35675:return lx;case 35676:return ux;case 5124:case 35670:return hx;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}class wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ix(t.type)}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bx(t.type)}}class Ax{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function ld(i,e){i.seq.push(e),i.map[e.id]=e}function Tx(i,e,t){const n=i.name,s=n.length;for(_l.lastIndex=0;;){const r=_l.exec(n),o=_l.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ld(t,l===void 0?new wx(a,i,e):new Ex(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ax(a),ld(t,h)),t=h}}}class Zo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ud(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Rx=37297;let Cx=0;function Px(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ix(i){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(i);let n;switch(e===t?n="":e===Ro&&t===To?n="LinearDisplayP3ToLinearSRGB":e===To&&t===Ro&&(n="LinearSRGBToLinearDisplayP3"),i){case qt:case Eo:return[n,"LinearTransferOETF"];case Et:case kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function hd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Px(i.getShaderSource(e),o)}else return s}function Lx(i,e){const t=Ix(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nx(i,e){let t;switch(e){case um:t="Linear";break;case hm:t="Reinhard";break;case dm:t="Cineon";break;case Qu:t="ACESFilmic";break;case pm:t="AgX";break;case mm:t="Neutral";break;case fm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qo=new N;function Dx(){ht.getLuminanceCoefficients(Qo);const i=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Ox(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Cr(i){return i!==""}function dd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(i){return i.replace(Bx,zx)}const kx=new Map;function zx(i,e){let t=nt[e];if(t===void 0){const n=kx.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(i){return i.replace(Hx,Gx)}function Gx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ms&&(e="ENVMAP_MODE_REFRACTION"),e}function qx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zu:e="ENVMAP_BLENDING_MULTIPLY";break;case cm:e="ENVMAP_BLENDING_MIX";break;case lm:e="ENVMAP_BLENDING_ADD";break}return e}function Yx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Vx(t),l=Wx(t),u=Xx(t),h=qx(t),d=Yx(t),f=Ux(t),g=Ox(r),x=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?nt.tonemapping_pars_fragment:"",t.toneMapping!==gi?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),Dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=xl(o),o=dd(o,t),o=fd(o,t),a=xl(a),a=dd(a,t),a=fd(a,t),o=pd(o),a=pd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+o,y=S+p+a,C=ud(s,s.VERTEX_SHADER,v),E=ud(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(M){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(E).trim();let Y=!0,A=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,E);else{const G=hd(s,C,"vertex"),U=hd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+F+`
`+G+`
`+U)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||V==="")&&(A=!1);A&&(M.diagnostics={runnable:Y,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(C),s.deleteShader(E),b=new Zo(s,x),P=Fx(s,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let P;this.getAttributes=function(){return P===void 0&&T(this),P};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Rx)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}let $x=0;class jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jx(e),t.set(e,n)),n}}class Jx{constructor(e){this.id=$x++,this.code=e,this.usedTimes=0}}function Zx(i,e,t,n,s,r,o){const a=new Th,c=new jx,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,F,z,V){const Y=z.fog,A=V.geometry,G=_.isMeshStandardMaterial?z.environment:null,U=(_.isMeshStandardMaterial?t:e).get(_.envMap||G),q=U&&U.mapping===go?U.image.height:null,B=x[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const W=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,j=W!==void 0?W.length:0;let ie=0;A.morphAttributes.position!==void 0&&(ie=1),A.morphAttributes.normal!==void 0&&(ie=2),A.morphAttributes.color!==void 0&&(ie=3);let K,J,ce,fe;if(B){const qe=Gn[B];K=qe.vertexShader,J=qe.fragmentShader}else K=_.vertexShader,J=_.fragmentShader,c.update(_),ce=c.getVertexShaderID(_),fe=c.getFragmentShaderID(_);const ye=i.getRenderTarget(),ue=V.isInstancedMesh===!0,xe=V.isBatchedMesh===!0,Le=!!_.map,te=!!_.matcap,D=!!U,pe=!!_.aoMap,me=!!_.lightMap,se=!!_.bumpMap,be=!!_.normalMap,Te=!!_.displacementMap,Ee=!!_.emissiveMap,L=!!_.metalnessMap,w=!!_.roughnessMap,$=_.anisotropy>0,ne=_.clearcoat>0,oe=_.dispersion>0,ee=_.iridescence>0,ke=_.sheen>0,le=_.transmission>0,we=$&&!!_.anisotropyMap,it=ne&&!!_.clearcoatMap,_e=ne&&!!_.clearcoatNormalMap,Ce=ne&&!!_.clearcoatRoughnessMap,ze=ee&&!!_.iridescenceMap,He=ee&&!!_.iridescenceThicknessMap,Fe=ke&&!!_.sheenColorMap,Ye=ke&&!!_.sheenRoughnessMap,Ge=!!_.specularMap,lt=!!_.specularColorMap,X=!!_.specularIntensityMap,De=le&&!!_.transmissionMap,Z=le&&!!_.thicknessMap,ae=!!_.gradientMap,Pe=!!_.alphaMap,Oe=_.alphaTest>0,ot=!!_.alphaHash,vt=!!_.extensions;let ve=gi;_.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Se={shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:J,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:xe,batchingColor:xe&&V._colorsTexture!==null,instancing:ue,instancingColor:ue&&V.instanceColor!==null,instancingMorph:ue&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:qt,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:te,envMap:D,envMapMode:D&&U.mapping,envMapCubeUVHeight:q,aoMap:pe,lightMap:me,bumpMap:se,normalMap:be,displacementMap:f&&Te,emissiveMap:Ee,normalMapObjectSpace:be&&_.normalMapType===wm,normalMapTangentSpace:be&&_.normalMapType===fh,metalnessMap:L,roughnessMap:w,anisotropy:$,anisotropyMap:we,clearcoat:ne,clearcoatMap:it,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ce,dispersion:oe,iridescence:ee,iridescenceMap:ze,iridescenceThicknessMap:He,sheen:ke,sheenColorMap:Fe,sheenRoughnessMap:Ye,specularMap:Ge,specularColorMap:lt,specularIntensityMap:X,transmission:le,transmissionMap:De,thicknessMap:Z,gradientMap:ae,opaque:_.transparent===!1&&_.blending===ds&&_.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Oe,alphaHash:ot,combine:_.combine,mapUv:Le&&m(_.map.channel),aoMapUv:pe&&m(_.aoMap.channel),lightMapUv:me&&m(_.lightMap.channel),bumpMapUv:se&&m(_.bumpMap.channel),normalMapUv:be&&m(_.normalMap.channel),displacementMapUv:Te&&m(_.displacementMap.channel),emissiveMapUv:Ee&&m(_.emissiveMap.channel),metalnessMapUv:L&&m(_.metalnessMap.channel),roughnessMapUv:w&&m(_.roughnessMap.channel),anisotropyMapUv:we&&m(_.anisotropyMap.channel),clearcoatMapUv:it&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(_.sheenRoughnessMap.channel),specularMapUv:Ge&&m(_.specularMap.channel),specularColorMapUv:lt&&m(_.specularColorMap.channel),specularIntensityMapUv:X&&m(_.specularIntensityMap.channel),transmissionMapUv:De&&m(_.transmissionMap.channel),thicknessMapUv:Z&&m(_.thicknessMap.channel),alphaMapUv:Pe&&m(_.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(be||$),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!A.attributes.uv&&(Le||Pe),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xt,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:vt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&_.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function S(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(v(M,_),y(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function v(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function C(_){const M=x[_.type];let F;if(M){const z=Gn[M];F=m0.clone(z.uniforms)}else F=_.uniforms;return F}function E(_,M){let F;for(let z=0,V=u.length;z<V;z++){const Y=u[z];if(Y.cacheKey===M){F=Y,++F.usedTimes;break}}return F===void 0&&(F=new Kx(i,M,_,r),u.push(F)),F}function T(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function b(_){c.remove(_)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:C,acquireProgram:E,releaseProgram:T,releaseShaderCache:b,programs:u,dispose:P}}function Qx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ev(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _d(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||ev),n.length>1&&n.sort(d||gd),s.length>1&&s.sort(d||gd)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function tv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new _d,i.set(n,[o])):s>=r.length?(o=new _d,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function nv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ve};break;case"SpotLight":t={position:new N,direction:new N,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function iv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sv=0;function rv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ov(i){const e=new nv,t=iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new $e,o=new $e;function a(l){let u=0,h=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,v=0,y=0,C=0,E=0,T=0;l.sort(rv);for(let P=0,_=l.length;P<_;P++){const M=l[P],F=M.color,z=M.intensity,V=M.distance,Y=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=F.r*z,h+=F.g*z,d+=F.b*z;else if(M.isLightProbe){for(let A=0;A<9;A++)n.probe[A].addScaledVector(M.sh.coefficients[A],z);T++}else if(M.isDirectionalLight){const A=e.get(M);if(A.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const G=M.shadow,U=t.get(M);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=M.shadow.matrix,S++}n.directional[f]=A,f++}else if(M.isSpotLight){const A=e.get(M);A.position.setFromMatrixPosition(M.matrixWorld),A.color.copy(F).multiplyScalar(z),A.distance=V,A.coneCos=Math.cos(M.angle),A.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),A.decay=M.decay,n.spot[x]=A;const G=M.shadow;if(M.map&&(n.spotLightMap[C]=M.map,C++,G.updateMatrices(M),M.castShadow&&E++),n.spotLightMatrix[x]=G.matrix,M.castShadow){const U=t.get(M);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=Y,y++}x++}else if(M.isRectAreaLight){const A=e.get(M);A.color.copy(F).multiplyScalar(z),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=A,m++}else if(M.isPointLight){const A=e.get(M);if(A.color.copy(M.color).multiplyScalar(M.intensity),A.distance=M.distance,A.decay=M.decay,M.castShadow){const G=M.shadow,U=t.get(M);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,U.shadowCameraNear=G.camera.near,U.shadowCameraFar=G.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=M.shadow.matrix,v++}n.point[g]=A,g++}else if(M.isHemisphereLight){const A=e.get(M);A.skyColor.copy(M.color).multiplyScalar(z),A.groundColor.copy(M.groundColor).multiplyScalar(z),n.hemi[p]=A,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==f||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==S||b.numPointShadows!==v||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=f,b.pointLength=g,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=S,b.numPointShadows=v,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=T,n.version=sv++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const v=l[p];if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function xd(i){const e=new ov(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function av(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new xd(i),e.set(s,[a])):r>=o.length?(a=new xd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class cv extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lv extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`;function dv(i,e,t){let n=new ll;const s=new ge,r=new ge,o=new dt,a=new cv({depthPacking:bm}),c=new lv,l={},u=t.maxTextureSize,h={[Qn]:Wt,[Wt]:Qn,[Xt]:Xt},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:uv,fragmentShader:hv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let p=this.type;this.render=function(E,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const P=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),F=i.state;F.setBlending(mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==Zn&&this.type===Zn,V=p===Zn&&this.type!==Zn;for(let Y=0,A=E.length;Y<A;Y++){const G=E[Y],U=G.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const q=U.getFrameExtents();if(s.multiply(q),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,U.mapSize.y=r.y)),U.map===null||z===!0||V===!0){const W=this.type!==Zn?{minFilter:on,magFilter:on}:{};U.map!==null&&U.map.dispose(),U.map=new Hi(s.x,s.y,W),U.map.texture.name=G.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const B=U.getViewportCount();for(let W=0;W<B;W++){const j=U.getViewport(W);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),F.viewport(o),U.updateMatrices(G,W),n=U.getFrustum(),y(T,b,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===Zn&&S(U,b),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,_,M)};function S(E,T){const b=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Hi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,b,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,b,f,x,null)}function v(E,T,b,P){let _=null;const M=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(M!==void 0)_=M;else if(_=b.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=_.uuid,z=T.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let Y=V[z];Y===void 0&&(Y=_.clone(),V[z]=Y,T.addEventListener("dispose",C)),_=Y}if(_.visible=T.visible,_.wireframe=T.wireframe,P===Zn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=b}return _}function y(E,T,b,P,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const z=e.update(E),V=E.material;if(Array.isArray(V)){const Y=z.groups;for(let A=0,G=Y.length;A<G;A++){const U=Y[A],q=V[U.materialIndex];if(q&&q.visible){const B=v(E,q,P,_);E.onBeforeShadow(i,E,T,b,z,B,U),i.renderBufferDirect(b,null,z,B,E,U),E.onAfterShadow(i,E,T,b,z,B,U)}}}else if(V.visible){const Y=v(E,V,P,_);E.onBeforeShadow(i,E,T,b,z,Y,null),i.renderBufferDirect(b,null,z,Y,E,null),E.onAfterShadow(i,E,T,b,z,Y,null)}}const F=E.children;for(let z=0,V=F.length;z<V;z++)y(F[z],T,b,P,_)}function C(E){E.target.removeEventListener("dispose",C);for(const b in l){const P=l[b],_=E.target.uuid;_ in P&&(P[_].dispose(),delete P[_])}}}const fv={[Ka]:$a,[ja]:Qa,[Ja]:ec,[fs]:Za,[$a]:Ka,[Qa]:ja,[ec]:Ja,[Za]:fs};function pv(i){function e(){let X=!1;const De=new dt;let Z=null;const ae=new dt(0,0,0,0);return{setMask:function(Pe){Z!==Pe&&!X&&(i.colorMask(Pe,Pe,Pe,Pe),Z=Pe)},setLocked:function(Pe){X=Pe},setClear:function(Pe,Oe,ot,vt,ve){ve===!0&&(Pe*=vt,Oe*=vt,ot*=vt),De.set(Pe,Oe,ot,vt),ae.equals(De)===!1&&(i.clearColor(Pe,Oe,ot,vt),ae.copy(De))},reset:function(){X=!1,Z=null,ae.set(-1,0,0,0)}}}function t(){let X=!1,De=!1,Z=null,ae=null,Pe=null;return{setReversed:function(Oe){De=Oe},setTest:function(Oe){Oe?ce(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(Oe){Z!==Oe&&!X&&(i.depthMask(Oe),Z=Oe)},setFunc:function(Oe){if(De&&(Oe=fv[Oe]),ae!==Oe){switch(Oe){case Ka:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Ja:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Oe}},setLocked:function(Oe){X=Oe},setClear:function(Oe){Pe!==Oe&&(i.clearDepth(Oe),Pe=Oe)},reset:function(){X=!1,Z=null,ae=null,Pe=null}}}function n(){let X=!1,De=null,Z=null,ae=null,Pe=null,Oe=null,ot=null,vt=null,ve=null;return{setTest:function(Se){X||(Se?ce(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Se){De!==Se&&!X&&(i.stencilMask(Se),De=Se)},setFunc:function(Se,qe,et){(Z!==Se||ae!==qe||Pe!==et)&&(i.stencilFunc(Se,qe,et),Z=Se,ae=qe,Pe=et)},setOp:function(Se,qe,et){(Oe!==Se||ot!==qe||vt!==et)&&(i.stencilOp(Se,qe,et),Oe=Se,ot=qe,vt=et)},setLocked:function(Se){X=Se},setClear:function(Se){ve!==Se&&(i.clearStencil(Se),ve=Se)},reset:function(){X=!1,De=null,Z=null,ae=null,Pe=null,Oe=null,ot=null,vt=null,ve=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,S=null,v=null,y=null,C=null,E=new Ve(0,0,0),T=0,b=!1,P=null,_=null,M=null,F=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,A=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=A>=1):G.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=A>=2);let U=null,q={};const B=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),j=new dt().fromArray(B),ie=new dt().fromArray(W);function K(X,De,Z,ae){const Pe=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(X,Oe),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<Z;ot++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(De+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Oe}const J={};J[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),r.setFunc(fs),me(!1),se(Yu),ce(i.CULL_FACE),D(mi);function ce(X){l[X]!==!0&&(i.enable(X),l[X]=!0)}function fe(X){l[X]!==!1&&(i.disable(X),l[X]=!1)}function ye(X,De){return u[X]!==De?(i.bindFramebuffer(X,De),u[X]=De,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=De),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=De),!0):!1}function ue(X,De){let Z=d,ae=!1;if(X){Z=h.get(De),Z===void 0&&(Z=[],h.set(De,Z));const Pe=X.textures;if(Z.length!==Pe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,ot=Pe.length;Oe<ot;Oe++)Z[Oe]=i.COLOR_ATTACHMENT0+Oe;Z.length=Pe.length,ae=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Z)}function xe(X){return f!==X?(i.useProgram(X),f=X,!0):!1}const Le={[Fi]:i.FUNC_ADD,[Xp]:i.FUNC_SUBTRACT,[qp]:i.FUNC_REVERSE_SUBTRACT};Le[Yp]=i.MIN,Le[Kp]=i.MAX;const te={[$p]:i.ZERO,[jp]:i.ONE,[Jp]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[im]:i.SRC_ALPHA_SATURATE,[tm]:i.DST_COLOR,[Qp]:i.DST_ALPHA,[Zp]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[nm]:i.ONE_MINUS_DST_COLOR,[em]:i.ONE_MINUS_DST_ALPHA,[sm]:i.CONSTANT_COLOR,[rm]:i.ONE_MINUS_CONSTANT_COLOR,[om]:i.CONSTANT_ALPHA,[am]:i.ONE_MINUS_CONSTANT_ALPHA};function D(X,De,Z,ae,Pe,Oe,ot,vt,ve,Se){if(X===mi){g===!0&&(fe(i.BLEND),g=!1);return}if(g===!1&&(ce(i.BLEND),g=!0),X!==Wp){if(X!==x||Se!==b){if((m!==Fi||v!==Fi)&&(i.blendEquation(i.FUNC_ADD),m=Fi,v=Fi),Se)switch(X){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.ONE,i.ONE);break;case ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ju:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}p=null,S=null,y=null,C=null,E.set(0,0,0),T=0,x=X,b=Se}return}Pe=Pe||De,Oe=Oe||Z,ot=ot||ae,(De!==m||Pe!==v)&&(i.blendEquationSeparate(Le[De],Le[Pe]),m=De,v=Pe),(Z!==p||ae!==S||Oe!==y||ot!==C)&&(i.blendFuncSeparate(te[Z],te[ae],te[Oe],te[ot]),p=Z,S=ae,y=Oe,C=ot),(vt.equals(E)===!1||ve!==T)&&(i.blendColor(vt.r,vt.g,vt.b,ve),E.copy(vt),T=ve),x=X,b=!1}function pe(X,De){X.side===Xt?fe(i.CULL_FACE):ce(i.CULL_FACE);let Z=X.side===Wt;De&&(Z=!Z),me(Z),X.blending===ds&&X.transparent===!1?D(mi):D(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),s.setMask(X.colorWrite);const ae=X.stencilWrite;o.setTest(ae),ae&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Te(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(X){P!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),P=X)}function se(X){X!==Gp?(ce(i.CULL_FACE),X!==_&&(X===Yu?i.cullFace(i.BACK):X===Vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),_=X}function be(X){X!==M&&(Y&&i.lineWidth(X),M=X)}function Te(X,De,Z){X?(ce(i.POLYGON_OFFSET_FILL),(F!==De||z!==Z)&&(i.polygonOffset(De,Z),F=De,z=Z)):fe(i.POLYGON_OFFSET_FILL)}function Ee(X){X?ce(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function L(X){X===void 0&&(X=i.TEXTURE0+V-1),U!==X&&(i.activeTexture(X),U=X)}function w(X,De,Z){Z===void 0&&(U===null?Z=i.TEXTURE0+V-1:Z=U);let ae=q[Z];ae===void 0&&(ae={type:void 0,texture:void 0},q[Z]=ae),(ae.type!==X||ae.texture!==De)&&(U!==Z&&(i.activeTexture(Z),U=Z),i.bindTexture(X,De||J[X]),ae.type=X,ae.texture=De)}function $(){const X=q[U];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(X){j.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),j.copy(X))}function Fe(X){ie.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ie.copy(X))}function Ye(X,De){let Z=c.get(De);Z===void 0&&(Z=new WeakMap,c.set(De,Z));let ae=Z.get(X);ae===void 0&&(ae=i.getUniformBlockIndex(De,X.name),Z.set(X,ae))}function Ge(X,De){const ae=c.get(De).get(X);a.get(De)!==ae&&(i.uniformBlockBinding(De,ae,X.__bindingPointIndex),a.set(De,ae))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},U=null,q={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,S=null,v=null,y=null,C=null,E=new Ve(0,0,0),T=0,b=!1,P=null,_=null,M=null,F=null,z=null,j.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ce,disable:fe,bindFramebuffer:ye,drawBuffers:ue,useProgram:xe,setBlending:D,setMaterial:pe,setFlipSided:me,setCullFace:se,setLineWidth:be,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:L,bindTexture:w,unbindTexture:$,compressedTexImage2D:ne,compressedTexImage3D:oe,texImage2D:Ce,texImage3D:ze,updateUBOMapping:Ye,uniformBlockBinding:Ge,texStorage2D:it,texStorage3D:_e,texSubImage2D:ee,texSubImage3D:ke,compressedTexSubImage2D:le,compressedTexSubImage3D:we,scissor:He,viewport:Fe,reset:lt}}function vd(i,e,t,n){const s=mv(n);switch(t){case oh:return i*e;case ch:return i*e;case lh:return i*e*2;case oc:return i*e/s.components*s.byteLength;case ac:return i*e/s.components*s.byteLength;case uh:return i*e*2/s.components*s.byteLength;case cc:return i*e*2/s.components*s.byteLength;case ah:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case lc:return i*e*4/s.components*s.byteLength;case vo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case fc:return Math.max(i,16)*Math.max(e,8)/4;case uc:case dc:return Math.max(i,8)*Math.max(e,8)/2;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bo:case Ic:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hh:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mv(i){switch(i){case ni:case ih:return{byteLength:1,components:1};case gr:case sh:case _r:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Bi:case ic:case An:return{byteLength:4,components:1};case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return f?new OffscreenCanvas(L,w):Sr("canvas")}function x(L,w,$){let ne=1;const oe=Ee(L);if((oe.width>$||oe.height>$)&&(ne=$/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ee=Math.floor(ne*oe.width),ke=Math.floor(ne*oe.height);h===void 0&&(h=g(ee,ke));const le=w?g(ee,ke):h;return le.width=ee,le.height=ke,le.getContext("2d").drawImage(L,0,0,ee,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ee+"x"+ke+")."),le}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==on&&L.minFilter!==fn}function p(L){i.generateMipmap(L)}function S(L,w,$,ne,oe=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ee=w;if(w===i.RED&&($===i.FLOAT&&(ee=i.R32F),$===i.HALF_FLOAT&&(ee=i.R16F),$===i.UNSIGNED_BYTE&&(ee=i.R8)),w===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.R8UI),$===i.UNSIGNED_SHORT&&(ee=i.R16UI),$===i.UNSIGNED_INT&&(ee=i.R32UI),$===i.BYTE&&(ee=i.R8I),$===i.SHORT&&(ee=i.R16I),$===i.INT&&(ee=i.R32I)),w===i.RG&&($===i.FLOAT&&(ee=i.RG32F),$===i.HALF_FLOAT&&(ee=i.RG16F),$===i.UNSIGNED_BYTE&&(ee=i.RG8)),w===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RG8UI),$===i.UNSIGNED_SHORT&&(ee=i.RG16UI),$===i.UNSIGNED_INT&&(ee=i.RG32UI),$===i.BYTE&&(ee=i.RG8I),$===i.SHORT&&(ee=i.RG16I),$===i.INT&&(ee=i.RG32I)),w===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),$===i.UNSIGNED_INT&&(ee=i.RGB32UI),$===i.BYTE&&(ee=i.RGB8I),$===i.SHORT&&(ee=i.RGB16I),$===i.INT&&(ee=i.RGB32I)),w===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),$===i.UNSIGNED_INT&&(ee=i.RGBA32UI),$===i.BYTE&&(ee=i.RGBA8I),$===i.SHORT&&(ee=i.RGBA16I),$===i.INT&&(ee=i.RGBA32I)),w===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),w===i.RGBA){const ke=oe?Ao:ht.getTransfer(ne);$===i.FLOAT&&(ee=i.RGBA32F),$===i.HALF_FLOAT&&(ee=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ee=ke===yt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(L,w){let $;return L?w===null||w===Bi||w===gs?$=i.DEPTH24_STENCIL8:w===An?$=i.DEPTH32F_STENCIL8:w===gr&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bi||w===gs?$=i.DEPTH_COMPONENT24:w===An?$=i.DEPTH_COMPONENT32F:w===gr&&($=i.DEPTH_COMPONENT16),$}function y(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==on&&L.minFilter!==fn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function C(L){const w=L.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&u.delete(w)}function E(L){const w=L.target;w.removeEventListener("dispose",E),P(w)}function T(L){const w=n.get(L);if(w.__webglInit===void 0)return;const $=L.source,ne=d.get($);if(ne){const oe=ne[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(L),Object.keys(ne).length===0&&d.delete($)}n.remove(L)}function b(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const $=L.source,ne=d.get($);delete ne[w.__cacheKey],o.memory.textures--}function P(L){const w=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let oe=0;oe<w.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(w.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=L.textures;for(let ne=0,oe=$.length;ne<oe;ne++){const ee=n.get($[ne]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove($[ne])}n.remove(L)}let _=0;function M(){_=0}function F(){const L=_;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),_+=1,L}function z(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function V(L,w){const $=n.get(L);if(L.isVideoTexture&&be(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie($,L,w);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+w)}function Y(L,w){const $=n.get(L);if(L.version>0&&$.__version!==L.version){ie($,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+w)}function A(L,w){const $=n.get(L);if(L.version>0&&$.__version!==L.version){ie($,L,w);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+w)}function G(L,w){const $=n.get(L);if(L.version>0&&$.__version!==L.version){K($,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+w)}const U={[_i]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},q={[on]:i.NEAREST,[nh]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},B={[Em]:i.NEVER,[Im]:i.ALWAYS,[Am]:i.LESS,[mh]:i.LEQUAL,[Tm]:i.EQUAL,[Pm]:i.GEQUAL,[Rm]:i.GREATER,[Cm]:i.NOTEQUAL};function W(L,w){if(w.type===An&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===fn||w.magFilter===xo||w.magFilter===mr||w.magFilter===ti||w.minFilter===fn||w.minFilter===xo||w.minFilter===mr||w.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,U[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,U[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,U[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,q[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,B[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===on||w.minFilter!==mr&&w.minFilter!==ti||w.type===An&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function j(L,w){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",C));const ne=w.source;let oe=d.get(ne);oe===void 0&&(oe={},d.set(ne,oe));const ee=z(w);if(ee!==L.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),oe[ee].usedTimes++;const ke=oe[L.__cacheKey];ke!==void 0&&(oe[L.__cacheKey].usedTimes--,ke.usedTimes===0&&b(w)),L.__cacheKey=ee,L.__webglTexture=oe[ee].texture}return $}function ie(L,w,$){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const oe=j(L,w),ee=w.source;t.bindTexture(ne,L.__webglTexture,i.TEXTURE0+$);const ke=n.get(ee);if(ee.version!==ke.__version||oe===!0){t.activeTexture(i.TEXTURE0+$);const le=ht.getPrimaries(ht.workingColorSpace),we=w.colorSpace===vi?null:ht.getPrimaries(w.colorSpace),it=w.colorSpace===vi||le===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let _e=x(w.image,!1,s.maxTextureSize);_e=Te(w,_e);const Ce=r.convert(w.format,w.colorSpace),ze=r.convert(w.type);let He=S(w.internalFormat,Ce,ze,w.colorSpace,w.isVideoTexture);W(ne,w);let Fe;const Ye=w.mipmaps,Ge=w.isVideoTexture!==!0,lt=ke.__version===void 0||oe===!0,X=ee.dataReady,De=y(w,_e);if(w.isDepthTexture)He=v(w.format===xs,w.type),lt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,He,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,He,_e.width,_e.height,0,Ce,ze,null));else if(w.isDataTexture)if(Ye.length>0){Ge&&lt&&t.texStorage2D(i.TEXTURE_2D,De,He,Ye[0].width,Ye[0].height);for(let Z=0,ae=Ye.length;Z<ae;Z++)Fe=Ye[Z],Ge?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Fe.width,Fe.height,Ce,ze,Fe.data):t.texImage2D(i.TEXTURE_2D,Z,He,Fe.width,Fe.height,0,Ce,ze,Fe.data);w.generateMipmaps=!1}else Ge?(lt&&t.texStorage2D(i.TEXTURE_2D,De,He,_e.width,_e.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Ce,ze,_e.data)):t.texImage2D(i.TEXTURE_2D,0,He,_e.width,_e.height,0,Ce,ze,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,He,Ye[0].width,Ye[0].height,_e.depth);for(let Z=0,ae=Ye.length;Z<ae;Z++)if(Fe=Ye[Z],w.format!==vn)if(Ce!==null)if(Ge){if(X)if(w.layerUpdates.size>0){const Pe=vd(Fe.width,Fe.height,w.format,w.type);for(const Oe of w.layerUpdates){const ot=Fe.data.subarray(Oe*Pe/Fe.data.BYTES_PER_ELEMENT,(Oe+1)*Pe/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Oe,Fe.width,Fe.height,1,Ce,ot,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Fe.width,Fe.height,_e.depth,Ce,Fe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,He,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Fe.width,Fe.height,_e.depth,Ce,ze,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,He,Fe.width,Fe.height,_e.depth,0,Ce,ze,Fe.data)}else{Ge&&lt&&t.texStorage2D(i.TEXTURE_2D,De,He,Ye[0].width,Ye[0].height);for(let Z=0,ae=Ye.length;Z<ae;Z++)Fe=Ye[Z],w.format!==vn?Ce!==null?Ge?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Fe.width,Fe.height,Ce,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,He,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Fe.width,Fe.height,Ce,ze,Fe.data):t.texImage2D(i.TEXTURE_2D,Z,He,Fe.width,Fe.height,0,Ce,ze,Fe.data)}else if(w.isDataArrayTexture)if(Ge){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,He,_e.width,_e.height,_e.depth),X)if(w.layerUpdates.size>0){const Z=vd(_e.width,_e.height,w.format,w.type);for(const ae of w.layerUpdates){const Pe=_e.data.subarray(ae*Z/_e.data.BYTES_PER_ELEMENT,(ae+1)*Z/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,_e.width,_e.height,1,Ce,ze,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,ze,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,_e.width,_e.height,_e.depth,0,Ce,ze,_e.data);else if(w.isData3DTexture)Ge?(lt&&t.texStorage3D(i.TEXTURE_3D,De,He,_e.width,_e.height,_e.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,ze,_e.data)):t.texImage3D(i.TEXTURE_3D,0,He,_e.width,_e.height,_e.depth,0,Ce,ze,_e.data);else if(w.isFramebufferTexture){if(lt)if(Ge)t.texStorage2D(i.TEXTURE_2D,De,He,_e.width,_e.height);else{let Z=_e.width,ae=_e.height;for(let Pe=0;Pe<De;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,He,Z,ae,0,Ce,ze,null),Z>>=1,ae>>=1}}else if(Ye.length>0){if(Ge&&lt){const Z=Ee(Ye[0]);t.texStorage2D(i.TEXTURE_2D,De,He,Z.width,Z.height)}for(let Z=0,ae=Ye.length;Z<ae;Z++)Fe=Ye[Z],Ge?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ce,ze,Fe):t.texImage2D(i.TEXTURE_2D,Z,He,Ce,ze,Fe);w.generateMipmaps=!1}else if(Ge){if(lt){const Z=Ee(_e);t.texStorage2D(i.TEXTURE_2D,De,He,Z.width,Z.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,ze,_e)}else t.texImage2D(i.TEXTURE_2D,0,He,Ce,ze,_e);m(w)&&p(ne),ke.__version=ee.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function K(L,w,$){if(w.image.length!==6)return;const ne=j(L,w),oe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+$);const ee=n.get(oe);if(oe.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+$);const ke=ht.getPrimaries(ht.workingColorSpace),le=w.colorSpace===vi?null:ht.getPrimaries(w.colorSpace),we=w.colorSpace===vi||ke===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const it=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let ae=0;ae<6;ae++)!it&&!_e?Ce[ae]=x(w.image[ae],!0,s.maxCubemapSize):Ce[ae]=_e?w.image[ae].image:w.image[ae],Ce[ae]=Te(w,Ce[ae]);const ze=Ce[0],He=r.convert(w.format,w.colorSpace),Fe=r.convert(w.type),Ye=S(w.internalFormat,He,Fe,w.colorSpace),Ge=w.isVideoTexture!==!0,lt=ee.__version===void 0||ne===!0,X=oe.dataReady;let De=y(w,ze);W(i.TEXTURE_CUBE_MAP,w);let Z;if(it){Ge&&lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Ye,ze.width,ze.height);for(let ae=0;ae<6;ae++){Z=Ce[ae].mipmaps;for(let Pe=0;Pe<Z.length;Pe++){const Oe=Z[Pe];w.format!==vn?He!==null?Ge?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Oe.width,Oe.height,He,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,Ye,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Oe.width,Oe.height,He,Fe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,Ye,Oe.width,Oe.height,0,He,Fe,Oe.data)}}}else{if(Z=w.mipmaps,Ge&&lt){Z.length>0&&De++;const ae=Ee(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Ye,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(_e){Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ce[ae].width,Ce[ae].height,He,Fe,Ce[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,Ce[ae].width,Ce[ae].height,0,He,Fe,Ce[ae].data);for(let Pe=0;Pe<Z.length;Pe++){const ot=Z[Pe].image[ae].image;Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,ot.width,ot.height,He,Fe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,Ye,ot.width,ot.height,0,He,Fe,ot.data)}}else{Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,He,Fe,Ce[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,He,Fe,Ce[ae]);for(let Pe=0;Pe<Z.length;Pe++){const Oe=Z[Pe];Ge?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,He,Fe,Oe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,Ye,He,Fe,Oe.image[ae])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),ee.__version=oe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function J(L,w,$,ne,oe,ee){const ke=r.convert($.format,$.colorSpace),le=r.convert($.type),we=S($.internalFormat,ke,le,$.colorSpace);if(!n.get(w).__hasExternalTextures){const _e=Math.max(1,w.width>>ee),Ce=Math.max(1,w.height>>ee);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ee,we,_e,Ce,w.depth,0,ke,le,null):t.texImage2D(oe,ee,we,_e,Ce,0,ke,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,n.get($).__webglTexture,0,me(w)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,n.get($).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(L,w,$){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const ne=w.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,ee=v(w.stencilBuffer,oe),ke=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=me(w);se(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,ee,w.width,w.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ee,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,L)}else{const ne=w.textures;for(let oe=0;oe<ne.length;oe++){const ee=ne[oe],ke=r.convert(ee.format,ee.colorSpace),le=r.convert(ee.type),we=S(ee.internalFormat,ke,le,ee.colorSpace),it=me(w);$&&se(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,we,w.width,w.height):se(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,we,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,we,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,oe=me(w);if(w.depthTexture.format===_s)se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(w.depthTexture.format===xs)se(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ye(L){const w=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ne=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const oe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),w.__depthDisposeCallback=oe}w.__boundDepthTexture=ne}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,L)}else if($){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),ce(w.__webglDepthbuffer[ne],L,!1);else{const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ce(w.__webglDepthbuffer,L,!1);else{const ne=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(L,w,$){const ne=n.get(L);w!==void 0&&J(ne.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&ye(L)}function xe(L){const w=L.texture,$=n.get(L),ne=n.get(w);L.addEventListener("dispose",E);const oe=L.textures,ee=L.isWebGLCubeRenderTarget===!0,ke=oe.length>1;if(ke||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),ee){$.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[le]=[];for(let we=0;we<w.mipmaps.length;we++)$.__webglFramebuffer[le][we]=i.createFramebuffer()}else $.__webglFramebuffer[le]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)$.__webglFramebuffer[le]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(ke)for(let le=0,we=oe.length;le<we;le++){const it=n.get(oe[le]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&se(L)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){const we=oe[le];$.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[le]);const it=r.convert(we.format,we.colorSpace),_e=r.convert(we.type),Ce=S(we.internalFormat,it,_e,we.colorSpace,L.isXRRenderTarget===!0),ze=me(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ce,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,$.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ce($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),W(i.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)J($.__webglFramebuffer[le][we],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we);else J($.__webglFramebuffer[le],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let le=0,we=oe.length;le<we;le++){const it=oe[le],_e=n.get(it);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),W(i.TEXTURE_2D,it),J($.__webglFramebuffer,L,it,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),m(it)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ne.__webglTexture),W(le,w),w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)J($.__webglFramebuffer[we],L,w,i.COLOR_ATTACHMENT0,le,we);else J($.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,le,0);m(w)&&p(le),t.unbindTexture()}L.depthBuffer&&ye(L)}function Le(L){const w=L.textures;for(let $=0,ne=w.length;$<ne;$++){const oe=w[$];if(m(oe)){const ee=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ke=n.get(oe).__webglTexture;t.bindTexture(ee,ke),p(ee),t.unbindTexture()}}}const te=[],D=[];function pe(L){if(L.samples>0){if(se(L)===!1){const w=L.textures,$=L.width,ne=L.height;let oe=i.COLOR_BUFFER_BIT;const ee=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(L),le=w.length>1;if(le)for(let we=0;we<w.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let we=0;we<w.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[we]);const it=n.get(w[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,$,ne,0,0,$,ne,oe,i.NEAREST),c===!0&&(te.length=0,D.length=0,te.push(i.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(te.push(ee),D.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<w.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ke.__webglColorRenderbuffer[we]);const it=n.get(w[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function me(L){return Math.min(s.maxSamples,L.samples)}function se(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Te(L,w){const $=L.colorSpace,ne=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==qt&&$!==vi&&(ht.getTransfer($)===yt?(ne!==vn||oe!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function Ee(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=A,this.setTextureCube=G,this.rebindTextures=ue,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=J,this.useMultisampledRTT=se}function _v(i,e){function t(n,s=vi){let r;const o=ht.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===_r)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===ah)return i.RGB;if(n===vn)return i.RGBA;if(n===ch)return i.LUMINANCE;if(n===lh)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===vo||n===yo||n===Mo||n===So)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===hc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===wc||n===Ec||n===Ac||n===Tc||n===Rc||n===Cc||n===Pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===Ic||n===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===Nc||n===Dc||n===Uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xv extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class at extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
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

}`;class Sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ei({vertexShader:yv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bv extends ki{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=new Sv,m=t.getContextAttributes();let p=null,S=null;const v=[],y=[],C=new ge;let E=null;const T=new Dt;T.layers.enable(1),T.viewport=new dt;const b=new Dt;b.layers.enable(2),b.viewport=new dt;const P=[T,b],_=new xv;_.layers.enable(1),_.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=v[K];return J===void 0&&(J=new vl,v[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=v[K];return J===void 0&&(J=new vl,v[K]=J),J.getGripSpace()},this.getHand=function(K){let J=v[K];return J===void 0&&(J=new vl,v[K]=J),J.getHandSpace()};function z(K){const J=y.indexOf(K.inputSource);if(J===-1)return;const ce=v[J];ce!==void 0&&(ce.update(K.inputSource,K.frame,l||o),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<v.length;K++){const J=y[K];J!==null&&(y[K]=null,v[K].disconnect(J))}M=null,F=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,S=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Hi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ce=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?xs:_s,ce=m.stencil?gs:Bi);const ye={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Hi(d.textureWidth,d.textureHeight,{format:vn,type:ni,depthTexture:new Zh(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(K){for(let J=0;J<K.removed.length;J++){const ce=K.removed[J],fe=y.indexOf(ce);fe>=0&&(y[fe]=null,v[fe].disconnect(ce))}for(let J=0;J<K.added.length;J++){const ce=K.added[J];let fe=y.indexOf(ce);if(fe===-1){for(let ue=0;ue<v.length;ue++)if(ue>=y.length){y.push(ce),fe=ue;break}else if(y[ue]===null){y[ue]=ce,fe=ue;break}if(fe===-1)break}const ye=v[fe];ye&&ye.connect(ce)}}const A=new N,G=new N;function U(K,J,ce){A.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ce.matrixWorld);const fe=A.distanceTo(G),ye=J.projectionMatrix.elements,ue=ce.projectionMatrix.elements,xe=ye[14]/(ye[10]-1),Le=ye[14]/(ye[10]+1),te=(ye[9]+1)/ye[5],D=(ye[9]-1)/ye[5],pe=(ye[8]-1)/ye[0],me=(ue[8]+1)/ue[0],se=xe*pe,be=xe*me,Te=fe/(-pe+me),Ee=Te*-pe;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ee),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const L=xe+Te,w=Le+Te,$=se-Ee,ne=be+(fe-Ee),oe=te*Le/w*L,ee=D*Le/w*L;K.projectionMatrix.makePerspective($,ne,oe,ee,L,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let J=K.near,ce=K.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),_.near=b.near=T.near=J,_.far=b.far=T.far=ce,(M!==_.near||F!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,F=_.far);const fe=K.parent,ye=_.cameras;q(_,fe);for(let ue=0;ue<ye.length;ue++)q(ye[ue],fe);ye.length===2?U(_,T,b):_.projectionMatrix.copy(T.projectionMatrix),B(K,_,fe)};function B(K,J,ce){ce===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ss*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let W=null;function j(K,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let fe=!1;ce.length!==_.cameras.length&&(_.cameras.length=0,fe=!0);for(let ue=0;ue<ce.length;ue++){const xe=ce[ue];let Le=null;if(f!==null)Le=f.getViewport(xe);else{const D=h.getViewSubImage(d,xe);Le=D.viewport,ue===0&&(e.setRenderTargetTextures(S,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(S))}let te=P[ue];te===void 0&&(te=new Dt,te.layers.enable(ue),te.viewport=new dt,P[ue]=te),te.matrix.fromArray(xe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(xe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Le.x,Le.y,Le.width,Le.height),ue===0&&(_.matrix.copy(te.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),fe===!0&&_.cameras.push(te)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const ue=h.getDepthInformation(ce[0]);ue&&ue.isValid&&ue.texture&&x.init(e,ue,s.renderState)}}for(let ce=0;ce<v.length;ce++){const fe=y[ce],ye=v[ce];fe!==null&&ye!==void 0&&ye.update(fe,J,l||o)}W&&W(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ie=new Xh;ie.setAnimationLoop(j),this.setAnimationLoop=function(K){W=K},this.dispose=function(){}}}const ji=new Kt,wv=new $e;function Ev(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),v=S.envMap,y=S.envMapRotation;v&&(m.envMap.value=v,ji.copy(y),ji.x*=-1,ji.y*=-1,ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(ji)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Av(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function l(S,v){let y=s[S.id];y===void 0&&(g(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(S,C);const E=e.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function u(S){const v=h();S.__bindingPointIndex=v;const y=i.createBuffer(),C=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=s[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let P=0,_=b.length;P<_;P++){const M=b[P];if(f(M,E,P,C)===!0){const F=M.__offset,z=Array.isArray(M.value)?M.value:[M.value];let V=0;for(let Y=0;Y<z.length;Y++){const A=z[Y],G=x(A);typeof A=="number"||typeof A=="boolean"?(M.__data[0]=A,i.bufferSubData(i.UNIFORM_BUFFER,F+V,M.__data)):A.isMatrix3?(M.__data[0]=A.elements[0],M.__data[1]=A.elements[1],M.__data[2]=A.elements[2],M.__data[3]=0,M.__data[4]=A.elements[3],M.__data[5]=A.elements[4],M.__data[6]=A.elements[5],M.__data[7]=0,M.__data[8]=A.elements[6],M.__data[9]=A.elements[7],M.__data[10]=A.elements[8],M.__data[11]=0):(A.toArray(M.__data,V),V+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,y,C){const E=S.value,T=v+"_"+y;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const b=C[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return C[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(S){const v=S.uniforms;let y=0;const C=16;for(let T=0,b=v.length;T<b;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,M=P.length;_<M;_++){const F=P[_],z=Array.isArray(F.value)?F.value:[F.value];for(let V=0,Y=z.length;V<Y;V++){const A=z[V],G=x(A),U=y%C,q=U%G.boundary,B=U+q;y+=q,B!==0&&C-B<G.storage&&(y+=C-B),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=G.storage}}}const E=y%C;return E>0&&(y+=C-E),S.__size=y,S.__cache={},this}function x(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Tv{constructor(e={}){const{canvas:t=Km(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=gi,this.toneMappingExposure=1;const v=this;let y=!1,C=0,E=0,T=null,b=-1,P=null;const _=new dt,M=new dt;let F=null;const z=new Ve(0);let V=0,Y=t.width,A=t.height,G=1,U=null,q=null;const B=new dt(0,0,Y,A),W=new dt(0,0,Y,A);let j=!1;const ie=new ll;let K=!1,J=!1;const ce=new $e,fe=new $e,ye=new N,ue=new dt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function te(){return T===null?G:1}let D=n;function pe(R,I){return t.getContext(R,I)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xa}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),D===null){const I="webgl2";if(D=pe(I,R),D===null)throw pe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let me,se,be,Te,Ee,L,w,$,ne,oe,ee,ke,le,we,it,_e,Ce,ze,He,Fe,Ye,Ge,lt,X;function De(){me=new L_(D),me.init(),Ge=new _v(D,me),se=new A_(D,me,e,Ge),be=new pv(D),se.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),Te=new U_(D),Ee=new Qx,L=new gv(D,me,be,Ee,se,Ge,Te),w=new R_(v),$=new I_(v),ne=new S0(D),lt=new w_(D,ne),oe=new N_(D,ne,Te,lt),ee=new F_(D,oe,ne,Te),He=new O_(D,se,L),_e=new T_(Ee),ke=new Zx(v,w,$,me,se,lt,_e),le=new Ev(v,Ee),we=new tv,it=new av(me),ze=new b_(v,w,$,be,ee,d,c),Ce=new dv(v,ee,se),X=new Av(D,Te,se,be),Fe=new E_(D,me,Te),Ye=new D_(D,me,Te),Te.programs=ke.programs,v.capabilities=se,v.extensions=me,v.properties=Ee,v.renderLists=we,v.shadowMap=Ce,v.state=be,v.info=Te}De();const Z=new bv(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(Y,A,!1))},this.getSize=function(R){return R.set(Y,A)},this.setSize=function(R,I,O=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,A=I,t.width=Math.floor(R*G),t.height=Math.floor(I*G),O===!0&&(t.style.width=R+"px",t.style.height=I+"px"),this.setViewport(0,0,R,I)},this.getDrawingBufferSize=function(R){return R.set(Y*G,A*G).floor()},this.setDrawingBufferSize=function(R,I,O){Y=R,A=I,G=O,t.width=Math.floor(R*O),t.height=Math.floor(I*O),this.setViewport(0,0,R,I)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(B)},this.setViewport=function(R,I,O,H){R.isVector4?B.set(R.x,R.y,R.z,R.w):B.set(R,I,O,H),be.viewport(_.copy(B).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(W)},this.setScissor=function(R,I,O,H){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,I,O,H),be.scissor(M.copy(W).multiplyScalar(G).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(R){be.setScissorTest(j=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,I=!0,O=!0){let H=0;if(R){let k=!1;if(T!==null){const Q=T.texture.format;k=Q===lc||Q===cc||Q===ac}if(k){const Q=T.texture.type,de=Q===ni||Q===Bi||Q===gr||Q===gs||Q===sc||Q===rc,he=ze.getClearColor(),Me=ze.getClearAlpha(),Ae=he.r,Ue=he.g,Re=he.b;de?(f[0]=Ae,f[1]=Ue,f[2]=Re,f[3]=Me,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Ae,g[1]=Ue,g[2]=Re,g[3]=Me,D.clearBufferiv(D.COLOR,0,g))}else H|=D.COLOR_BUFFER_BIT}I&&(H|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),we.dispose(),it.dispose(),Ee.dispose(),w.dispose(),$.dispose(),ee.dispose(),lt.dispose(),X.dispose(),ke.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",It),Z.removeEventListener("sessionend",Vt),ln.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Te.autoReset,I=Ce.enabled,O=Ce.autoUpdate,H=Ce.needsUpdate,k=Ce.type;De(),Te.autoReset=R,Ce.enabled=I,Ce.autoUpdate=O,Ce.needsUpdate=H,Ce.type=k}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const I=R.target;I.removeEventListener("dispose",ot),vt(I)}function vt(R){ve(R),Ee.remove(R)}function ve(R){const I=Ee.get(R).programs;I!==void 0&&(I.forEach(function(O){ke.releaseProgram(O)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,I,O,H,k,Q){I===null&&(I=xe);const de=k.isMesh&&k.matrixWorld.determinant()<0,he=pr(R,I,O,H,k);be.setMaterial(H,de);let Me=O.index,Ae=1;if(H.wireframe===!0){if(Me=oe.getWireframeAttribute(O),Me===void 0)return;Ae=2}const Ue=O.drawRange,Re=O.attributes.position;let Ke=Ue.start*Ae,We=(Ue.start+Ue.count)*Ae;Q!==null&&(Ke=Math.max(Ke,Q.start*Ae),We=Math.min(We,(Q.start+Q.count)*Ae)),Me!==null?(Ke=Math.max(Ke,0),We=Math.min(We,Me.count)):Re!=null&&(Ke=Math.max(Ke,0),We=Math.min(We,Re.count));const st=We-Ke;if(st<0||st===1/0)return;lt.setup(k,H,he,O,Me);let pt,je=Fe;if(Me!==null&&(pt=ne.get(Me),je=Ye,je.setIndex(pt)),k.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*te()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(k.isLine){let Be=H.linewidth;Be===void 0&&(Be=1),be.setLineWidth(Be*te()),k.isLineSegments?je.setMode(D.LINES):k.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else k.isPoints?je.setMode(D.POINTS):k.isSprite&&je.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Be=k._multiDrawStarts,wt=k._multiDrawCounts,ct=k._multiDrawCount,dn=Me?ne.get(Me).bytesPerElement:1,pi=Ee.get(H).currentProgram.getUniforms();for(let xn=0;xn<ct;xn++)pi.setValue(D,"_gl_DrawID",xn),je.render(Be[xn]/dn,wt[xn])}else if(k.isInstancedMesh)je.renderInstances(Ke,st,k.count);else if(O.isInstancedBufferGeometry){const Be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,wt=Math.min(O.instanceCount,Be);je.renderInstances(Ke,st,wt)}else je.render(Ke,st)};function Se(R,I,O){R.transparent===!0&&R.side===Xt&&R.forceSinglePass===!1?(R.side=Wt,R.needsUpdate=!0,Jn(R,I,O),R.side=Qn,R.needsUpdate=!0,Jn(R,I,O),R.side=Xt):Jn(R,I,O)}this.compile=function(R,I,O=null){O===null&&(O=R),m=it.get(O),m.init(I),S.push(m),O.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),R!==O&&R.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const H=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Q=k.material;if(Q)if(Array.isArray(Q))for(let de=0;de<Q.length;de++){const he=Q[de];Se(he,O,k),H.add(he)}else Se(Q,O,k),H.add(Q)}),S.pop(),m=null,H},this.compileAsync=function(R,I,O=null){const H=this.compile(R,I,O);return new Promise(k=>{function Q(){if(H.forEach(function(de){Ee.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){k(R);return}setTimeout(Q,10)}me.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let qe=null;function et(R){qe&&qe(R)}function It(){ln.stop()}function Vt(){ln.start()}const ln=new Xh;ln.setAnimationLoop(et),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(R){qe=R,Z.setAnimationLoop(R),R===null?ln.stop():ln.start()},Z.addEventListener("sessionstart",It),Z.addEventListener("sessionend",Vt),this.render=function(R,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(I),I=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,I,T),m=it.get(R,S.length),m.init(I),S.push(m),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ie.setFromProjectionMatrix(fe),J=this.localClippingEnabled,K=_e.init(this.clippingPlanes,J),x=we.get(R,p.length),x.init(),p.push(x),Z.enabled===!0&&Z.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&rn(Q,I,-1/0,v.sortObjects)}rn(R,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(U,q),Le=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Le&&ze.addToRenderList(x,R),this.info.render.frame++,K===!0&&_e.beginShadows();const O=m.state.shadowsArray;Ce.render(O,R,I),K===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,k=x.transmissive;if(m.setupLights(),I.isArrayCamera){const Q=I.cameras;if(k.length>0)for(let de=0,he=Q.length;de<he;de++){const Me=Q[de];Zt(H,k,R,Me)}Le&&ze.render(R);for(let de=0,he=Q.length;de<he;de++){const Me=Q[de];Ui(x,R,Me,Me.viewport)}}else k.length>0&&Zt(H,k,R,I),Le&&ze.render(R),Ui(x,R,I);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,I),lt.resetDefaultState(),b=-1,P=null,S.pop(),S.length>0?(m=S[S.length-1],K===!0&&_e.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function rn(R,I,O,H){if(R.visible===!1)return;if(R.layers.test(I.layers)){if(R.isGroup)O=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(I);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){H&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const de=ee.update(R),he=R.material;he.visible&&x.push(R,de,he,O,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const de=ee.update(R),he=R.material;if(H&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ue.copy(de.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(he)){const Me=de.groups;for(let Ae=0,Ue=Me.length;Ae<Ue;Ae++){const Re=Me[Ae],Ke=he[Re.materialIndex];Ke&&Ke.visible&&x.push(R,de,Ke,O,ue.z,Re)}}else he.visible&&x.push(R,de,he,O,ue.z,null)}}const Q=R.children;for(let de=0,he=Q.length;de<he;de++)rn(Q[de],I,O,H)}function Ui(R,I,O,H){const k=R.opaque,Q=R.transmissive,de=R.transparent;m.setupLightsView(O),K===!0&&_e.setGlobalState(v.clippingPlanes,O),H&&be.viewport(_.copy(H)),k.length>0&&jn(k,I,O),Q.length>0&&jn(Q,I,O),de.length>0&&jn(de,I,O),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Zt(R,I,O,H){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Hi(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?_r:ni,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const Q=m.state.transmissionRenderTarget[H.id],de=H.viewport||_;Q.setSize(de.z,de.w);const he=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(z),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Le&&ze.render(O);const Me=v.toneMapping;v.toneMapping=gi;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),K===!0&&_e.setGlobalState(v.clippingPlanes,H),jn(R,O,H),L.updateMultisampleRenderTarget(Q),L.updateRenderTargetMipmap(Q),me.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Re=0,Ke=I.length;Re<Ke;Re++){const We=I[Re],st=We.object,pt=We.geometry,je=We.material,Be=We.group;if(je.side===Xt&&st.layers.test(H.layers)){const wt=je.side;je.side=Wt,je.needsUpdate=!0,dr(st,O,H,pt,je,Be),je.side=wt,je.needsUpdate=!0,Ue=!0}}Ue===!0&&(L.updateMultisampleRenderTarget(Q),L.updateRenderTargetMipmap(Q))}v.setRenderTarget(he),v.setClearColor(z,V),Ae!==void 0&&(H.viewport=Ae),v.toneMapping=Me}function jn(R,I,O){const H=I.isScene===!0?I.overrideMaterial:null;for(let k=0,Q=R.length;k<Q;k++){const de=R[k],he=de.object,Me=de.geometry,Ae=H===null?de.material:H,Ue=de.group;he.layers.test(O.layers)&&dr(he,I,O,Me,Ae,Ue)}}function dr(R,I,O,H,k,Q){R.onBeforeRender(v,I,O,H,k,Q),R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(v,I,O,H,R,Q),k.transparent===!0&&k.side===Xt&&k.forceSinglePass===!1?(k.side=Wt,k.needsUpdate=!0,v.renderBufferDirect(O,I,H,k,R,Q),k.side=Qn,k.needsUpdate=!0,v.renderBufferDirect(O,I,H,k,R,Q),k.side=Xt):v.renderBufferDirect(O,I,H,k,R,Q),R.onAfterRender(v,I,O,H,k,Q)}function Jn(R,I,O){I.isScene!==!0&&(I=xe);const H=Ee.get(R),k=m.state.lights,Q=m.state.shadowsArray,de=k.state.version,he=ke.getParameters(R,k.state,Q,I,O),Me=ke.getProgramCacheKey(he);let Ae=H.programs;H.environment=R.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(R.isMeshStandardMaterial?$:w).get(R.envMap||H.environment),H.envMapRotation=H.environment!==null&&R.envMap===null?I.environmentRotation:R.envMapRotation,Ae===void 0&&(R.addEventListener("dispose",ot),Ae=new Map,H.programs=Ae);let Ue=Ae.get(Me);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===de)return fr(R,he),Ue}else he.uniforms=ke.getUniforms(R),R.onBeforeCompile(he,v),Ue=ke.acquireProgram(he,Me),Ae.set(Me,Ue),H.uniforms=he.uniforms;const Re=H.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Re.clippingPlanes=_e.uniform),fr(R,he),H.needsLights=mo(R),H.lightsStateVersion=de,H.needsLights&&(Re.ambientLightColor.value=k.state.ambient,Re.lightProbe.value=k.state.probe,Re.directionalLights.value=k.state.directional,Re.directionalLightShadows.value=k.state.directionalShadow,Re.spotLights.value=k.state.spot,Re.spotLightShadows.value=k.state.spotShadow,Re.rectAreaLights.value=k.state.rectArea,Re.ltc_1.value=k.state.rectAreaLTC1,Re.ltc_2.value=k.state.rectAreaLTC2,Re.pointLights.value=k.state.point,Re.pointLightShadows.value=k.state.pointShadow,Re.hemisphereLights.value=k.state.hemi,Re.directionalShadowMap.value=k.state.directionalShadowMap,Re.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Re.spotShadowMap.value=k.state.spotShadowMap,Re.spotLightMatrix.value=k.state.spotLightMatrix,Re.spotLightMap.value=k.state.spotLightMap,Re.pointShadowMap.value=k.state.pointShadowMap,Re.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function us(R){if(R.uniformsList===null){const I=R.currentProgram.getUniforms();R.uniformsList=Zo.seqWithValue(I.seq,R.uniforms)}return R.uniformsList}function fr(R,I){const O=Ee.get(R);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function pr(R,I,O,H,k){I.isScene!==!0&&(I=xe),L.resetTextureUnits();const Q=I.fog,de=H.isMeshStandardMaterial?I.environment:null,he=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qt,Me=(H.isMeshStandardMaterial?$:w).get(H.envMap||de),Ae=H.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!O.morphAttributes.position,Ke=!!O.morphAttributes.normal,We=!!O.morphAttributes.color;let st=gi;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(st=v.toneMapping);const pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,je=pt!==void 0?pt.length:0,Be=Ee.get(H),wt=m.state.lights;if(K===!0&&(J===!0||R!==P)){const En=R===P&&H.id===b;_e.setState(H,R,En)}let ct=!1;H.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wt.state.version||Be.outputColorSpace!==he||k.isBatchedMesh&&Be.batching===!1||!k.isBatchedMesh&&Be.batching===!0||k.isBatchedMesh&&Be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Be.instancing===!1||!k.isInstancedMesh&&Be.instancing===!0||k.isSkinnedMesh&&Be.skinning===!1||!k.isSkinnedMesh&&Be.skinning===!0||k.isInstancedMesh&&Be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Be.instancingMorph===!1&&k.morphTexture!==null||Be.envMap!==Me||H.fog===!0&&Be.fog!==Q||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==_e.numPlanes||Be.numIntersection!==_e.numIntersection)||Be.vertexAlphas!==Ae||Be.vertexTangents!==Ue||Be.morphTargets!==Re||Be.morphNormals!==Ke||Be.morphColors!==We||Be.toneMapping!==st||Be.morphTargetsCount!==je)&&(ct=!0):(ct=!0,Be.__version=H.version);let dn=Be.currentProgram;ct===!0&&(dn=Jn(H,I,k));let pi=!1,xn=!1,Vu=!1;const Lt=dn.getUniforms(),Oi=Be.uniforms;if(be.useProgram(dn.program)&&(pi=!0,xn=!0,Vu=!0),H.id!==b&&(b=H.id,xn=!0),pi||P!==R){se.reverseDepthBuffer?(ce.copy(R.projectionMatrix),jm(ce),Jm(ce),Lt.setValue(D,"projectionMatrix",ce)):Lt.setValue(D,"projectionMatrix",R.projectionMatrix),Lt.setValue(D,"viewMatrix",R.matrixWorldInverse);const En=Lt.map.cameraPosition;En!==void 0&&En.setValue(D,ye.setFromMatrixPosition(R.matrixWorld)),se.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,xn=!0,Vu=!0)}if(k.isSkinnedMesh){Lt.setOptional(D,k,"bindMatrix"),Lt.setOptional(D,k,"bindMatrixInverse");const En=k.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Lt.setValue(D,"boneTexture",En.boneTexture,L))}k.isBatchedMesh&&(Lt.setOptional(D,k,"batchingTexture"),Lt.setValue(D,"batchingTexture",k._matricesTexture,L),Lt.setOptional(D,k,"batchingIdTexture"),Lt.setValue(D,"batchingIdTexture",k._indirectTexture,L),Lt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",k._colorsTexture,L));const Wu=O.morphAttributes;if((Wu.position!==void 0||Wu.normal!==void 0||Wu.color!==void 0)&&He.update(k,O,dn),(xn||Be.receiveShadow!==k.receiveShadow)&&(Be.receiveShadow=k.receiveShadow,Lt.setValue(D,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Oi.envMap.value=Me,Oi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Oi.envMapIntensity.value=I.environmentIntensity),xn&&(Lt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&hs(Oi,Vu),Q&&H.fog===!0&&le.refreshFogUniforms(Oi,Q),le.refreshMaterialUniforms(Oi,H,G,A,m.state.transmissionRenderTarget[R.id]),Zo.upload(D,us(Be),Oi,L)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zo.upload(D,us(Be),Oi,L),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Lt.setValue(D,"center",k.center),Lt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Lt.setValue(D,"normalMatrix",k.normalMatrix),Lt.setValue(D,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const En=H.uniformsGroups;for(let Xu=0,Aw=En.length;Xu<Aw;Xu++){const Hp=En[Xu];X.update(Hp,dn),X.bind(Hp,dn)}}return dn}function hs(R,I){R.ambientLightColor.needsUpdate=I,R.lightProbe.needsUpdate=I,R.directionalLights.needsUpdate=I,R.directionalLightShadows.needsUpdate=I,R.pointLights.needsUpdate=I,R.pointLightShadows.needsUpdate=I,R.spotLights.needsUpdate=I,R.spotLightShadows.needsUpdate=I,R.rectAreaLights.needsUpdate=I,R.hemisphereLights.needsUpdate=I}function mo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,I,O){Ee.get(R.texture).__webglTexture=I,Ee.get(R.depthTexture).__webglTexture=O;const H=Ee.get(R);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=O===void 0,H.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,I){const O=Ee.get(R);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(R,I=0,O=0){T=R,C=I,E=O;let H=!0,k=null,Q=!1,de=!1;if(R){const Me=Ee.get(R);if(Me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Me.__hasExternalTextures)L.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Re=R.depthTexture;if(Me.__boundDepthTexture!==Re){if(Re!==null&&Ee.has(Re)&&(R.width!==Re.image.width||R.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(de=!0);const Ue=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?k=Ue[I][O]:k=Ue[I],Q=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?k=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[O]:k=Ue,_.copy(R.viewport),M.copy(R.scissor),F=R.scissorTest}else _.copy(B).multiplyScalar(G).floor(),M.copy(W).multiplyScalar(G).floor(),F=j;if(be.bindFramebuffer(D.FRAMEBUFFER,k)&&H&&be.drawBuffers(R,k),be.viewport(_),be.scissor(M),be.setScissorTest(F),Q){const Me=Ee.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,O)}else if(de){const Me=Ee.get(R.texture),Ae=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.__webglTexture,O||0,Ae)}b=-1},this.readRenderTargetPixels=function(R,I,O,H,k,Q,de){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&de!==void 0&&(he=he[de]),he){be.bindFramebuffer(D.FRAMEBUFFER,he);try{const Me=R.texture,Ae=Me.format,Ue=Me.type;if(!se.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=R.width-H&&O>=0&&O<=R.height-k&&D.readPixels(I,O,H,k,Ge.convert(Ae),Ge.convert(Ue),Q)}finally{const Me=T!==null?Ee.get(T).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(R,I,O,H,k,Q,de){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&de!==void 0&&(he=he[de]),he){const Me=R.texture,Ae=Me.format,Ue=Me.type;if(!se.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=R.width-H&&O>=0&&O<=R.height-k){be.bindFramebuffer(D.FRAMEBUFFER,he);const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(I,O,H,k,Ge.convert(Ae),Ge.convert(Ue),0);const Ke=T!==null?Ee.get(T).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Ke);const We=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $m(D,We,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(Re),D.deleteSync(We),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,I=null,O=0){R.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,R=arguments[1]);const H=Math.pow(2,-O),k=Math.floor(R.image.width*H),Q=Math.floor(R.image.height*H),de=I!==null?I.x:0,he=I!==null?I.y:0;L.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,de,he,k,Q),be.unbindTexture()},this.copyTextureToTexture=function(R,I,O=null,H=null,k=0){R.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1],I=arguments[2],k=arguments[3]||0,O=null);let Q,de,he,Me,Ae,Ue;O!==null?(Q=O.max.x-O.min.x,de=O.max.y-O.min.y,he=O.min.x,Me=O.min.y):(Q=R.image.width,de=R.image.height,he=0,Me=0),H!==null?(Ae=H.x,Ue=H.y):(Ae=0,Ue=0);const Re=Ge.convert(I.format),Ke=Ge.convert(I.type);L.setTexture2D(I,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const We=D.getParameter(D.UNPACK_ROW_LENGTH),st=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pt=D.getParameter(D.UNPACK_SKIP_PIXELS),je=D.getParameter(D.UNPACK_SKIP_ROWS),Be=D.getParameter(D.UNPACK_SKIP_IMAGES),wt=R.isCompressedTexture?R.mipmaps[k]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,he),D.pixelStorei(D.UNPACK_SKIP_ROWS,Me),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Ae,Ue,Q,de,Re,Ke,wt.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Ae,Ue,wt.width,wt.height,Re,wt.data):D.texSubImage2D(D.TEXTURE_2D,k,Ae,Ue,Q,de,Re,Ke,wt),D.pixelStorei(D.UNPACK_ROW_LENGTH,We),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),k===0&&I.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(R,I,O=null,H=null,k=0){R.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,H=arguments[1]||null,R=arguments[2],I=arguments[3],k=arguments[4]||0);let Q,de,he,Me,Ae,Ue,Re,Ke,We;const st=R.isCompressedTexture?R.mipmaps[k]:R.image;O!==null?(Q=O.max.x-O.min.x,de=O.max.y-O.min.y,he=O.max.z-O.min.z,Me=O.min.x,Ae=O.min.y,Ue=O.min.z):(Q=st.width,de=st.height,he=st.depth,Me=0,Ae=0,Ue=0),H!==null?(Re=H.x,Ke=H.y,We=H.z):(Re=0,Ke=0,We=0);const pt=Ge.convert(I.format),je=Ge.convert(I.type);let Be;if(I.isData3DTexture)L.setTexture3D(I,0),Be=D.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)L.setTexture2DArray(I,0),Be=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const wt=D.getParameter(D.UNPACK_ROW_LENGTH),ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=D.getParameter(D.UNPACK_SKIP_PIXELS),pi=D.getParameter(D.UNPACK_SKIP_ROWS),xn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,st.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Be,k,Re,Ke,We,Q,de,he,pt,je,st.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Be,k,Re,Ke,We,Q,de,he,pt,st.data):D.texSubImage3D(Be,k,Re,Ke,We,Q,de,he,pt,je,st),D.pixelStorei(D.UNPACK_ROW_LENGTH,wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,pi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),k===0&&I.generateMipmaps&&D.generateMipmap(Be),be.unbindTexture()},this.initRenderTarget=function(R){Ee.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),be.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,be.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===kc?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Eo?"display-p3":"srgb"}}class yl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new yl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pr extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new N;class Ir{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ir(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ml extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hs;const Lr=new N,Gs=new N,Vs=new N,Ws=new ge,Nr=new ge,Md=new $e,ea=new N,Dr=new N,ta=new N,Sd=new ge,Sl=new ge,bd=new ge;class wd extends Mt{constructor(e=new Ml){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Rt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yd(t,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Ir(n,3,0,!1)),Hs.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Hs,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Vs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;na(ea.set(-.5,-.5,0),Vs,o,Gs,s,r),na(Dr.set(.5,-.5,0),Vs,o,Gs,s,r),na(ta.set(.5,.5,0),Vs,o,Gs,s,r),Sd.set(0,0),Sl.set(1,0),bd.set(1,1);let a=e.ray.intersectTriangle(ea,Dr,ta,!1,Lr);if(a===null&&(na(Dr.set(-.5,.5,0),Vs,o,Gs,s,r),Sl.set(0,1),a=e.ray.intersectTriangle(ea,ta,Dr,!1,Lr),a===null))return;const c=e.ray.origin.distanceTo(Lr);c<e.near||c>e.far||t.push({distance:c,point:Lr.clone(),uv:Mn.getInterpolation(Lr,ea,Dr,ta,Sd,Sl,bd,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function na(i,e,t,n,s,r){Ws.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Nr.x=r*Ws.x-s*Ws.y,Nr.y=s*Ws.x+r*Ws.y):Nr.copy(Ws),i.copy(e),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(Md)}const Ed=new N,Ad=new dt,Td=new dt,Rv=new N,Rd=new $e,ia=new N,bl=new Hn,Cd=new $e,wl=new Oo;class Cv extends re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eh,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingBox.expandByPoint(ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingSphere.expandByPoint(ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),e.ray.intersectsSphere(bl)!==!1&&(Cd.copy(s).invert(),wl.copy(e.ray).applyMatrix4(Cd),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ad.fromBufferAttribute(s.attributes.skinIndex,e),Td.fromBufferAttribute(s.attributes.skinWeight,e),Ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Td.getComponent(r);if(o!==0){const a=Ad.getComponent(r);Rd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Rv.copy(Ed).applyMatrix4(Rd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pd extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Id extends Ot{constructor(e=null,t=1,n=1,s,r,o,a,c,l=on,u=on,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new $e,Pv=new $e;class El{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Pv;Ld.multiplyMatrices(a,t[r]),Ld.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new El(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Id(t,e,e,vn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Pd),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Al extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new $e,Nd=new $e,sa=[],Dd=new zn,Iv=new $e,Ur=new re,Or=new Hn;class Ud extends re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Iv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Dd.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Dd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Or.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Nd.multiplyMatrices(n,Xs),Ur.matrixWorld=Nd,Ur.raycast(e,sa);for(let o=0,a=sa.length;o<a;o++){const c=sa[o];c.instanceId=r,c.object=this,t.push(c)}sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Id(new Float32Array(s*this.count),s,this.count,oc,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Tl extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new N,oa=new N,Od=new $e,Fr=new Oo,aa=new Hn,Rl=new N,Fd=new N;class ca extends Mt{constructor(e=new Rt,t=new Tl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ra.fromBufferAttribute(t,s-1),oa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ra.distanceTo(oa);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;Od.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Od);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=u.getX(x),S=u.getX(x+1),v=la(this,e,Fr,c,p,S);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=la(this,e,Fr,c,x,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=la(this,e,Fr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=la(this,e,Fr,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function la(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(ra.fromBufferAttribute(o,s),oa.fromBufferAttribute(o,r),t.distanceSqToSegment(ra,oa,Rl,Fd)>n)return;Rl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Rl);if(!(c<e.near||c>e.far))return{distance:c,point:Fd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Bd=new N,kd=new N;class Lv extends ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bd.distanceTo(kd);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nv extends ca{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ua extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zd=new $e,Cl=new Oo,ha=new Hn,da=new N;class Pl extends Mt{constructor(e=new Rt,t=new ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;zd.copy(s).invert(),Cl.copy(e.ray).applyMatrix4(zd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=l.getX(g);da.fromBufferAttribute(h,m),Hd(da,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)da.fromBufferAttribute(h,g),Hd(da,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hd(i,e,t,n,s,r,o){const a=Cl.distanceSqToPoint(i);if(a<t){const c=new N;Cl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ji extends Ot{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ge:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,s=[],r=[],o=[],a=new N,c=new $e;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Il extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Dv extends Il{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const fa=new N,Nl=new Ll,Dl=new Ll,Ul=new Ll;class Uv extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(fa.subVectors(s[0],s[1]).add(s[0]),l=fa);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(fa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Nl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),Dl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),Ul.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Dl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ul.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Nl.calc(c),Dl.calc(c),Ul.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gd(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Ov(i,e){const t=1-i;return t*t*e}function Fv(i,e){return 2*(1-i)*i*e}function Bv(i,e){return i*i*e}function Br(i,e,t,n){return Ov(i,e)+Fv(i,t)+Bv(i,n)}function kv(i,e){const t=1-i;return t*t*t*e}function zv(i,e){const t=1-i;return 3*t*t*i*e}function Hv(i,e){return 3*(1-i)*i*i*e}function Gv(i,e){return i*i*i*e}function kr(i,e,t,n,s){return kv(i,e)+zv(i,t)+Hv(i,n)+Gv(i,s)}class Vd extends Vn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vv extends Vn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wd extends Vn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wv extends Vn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends Vn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xv extends Vn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y),Br(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Gd(a,c.x,l.x,u.x,h.x),Gd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ge().fromArray(s))}return this}}var Ol=Object.freeze({__proto__:null,ArcCurve:Dv,CatmullRomCurve3:Uv,CubicBezierCurve:Vd,CubicBezierCurve3:Vv,EllipseCurve:Il,LineCurve:Wd,LineCurve3:Wv,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:Xv,SplineCurve:qd});class qv extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ol[s.type]().fromJSON(s))}return this}}class Fl extends qv{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wd(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Xd(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Vd(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Il(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pa extends Rt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ut(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new N,d=new ge,f=new N,g=new N,x=new N;let m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let S=0;S<=t;S++){const v=n+S*u*s,y=Math.sin(v),C=Math.cos(v);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*C,o.push(h.x,h.y,h.z),d.x=S/t,d.y=E/(e.length-1),a.push(d.x,d.y);const T=c[3*E+0]*y,b=c[3*E+1],P=c[3*E+0]*C;l.push(T,b,P)}}for(let S=0;S<t;S++)for(let v=0;v<e.length-1;v++){const y=v+S*e.length,C=y,E=y+e.length,T=y+e.length+1,b=y+1;r.push(C,E,b),r.push(T,b,E)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.points,e.segments,e.phiStart,e.phiLength)}}class Ln extends pa{constructor(e=1,t=1,n=4,s=8){const r=new Fl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Ln(e.radius,e.length,e.capSegments,e.radialSegments)}}class St extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;S(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function S(){const y=new N,C=new N;let E=0;const T=(t-e)/n;for(let b=0;b<=r;b++){const P=[],_=b/r,M=_*(t-e)+e;for(let F=0;F<=s;F++){const z=F/s,V=z*c+a,Y=Math.sin(V),A=Math.cos(V);C.x=M*Y,C.y=-_*n+m,C.z=M*A,h.push(C.x,C.y,C.z),y.set(Y,T,A).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-_),P.push(g++)}x.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){const _=x[P][b],M=x[P+1][b],F=x[P+1][b+1],z=x[P][b+1];e>0&&(u.push(_,M,z),E+=3),t>0&&(u.push(M,F,z),E+=3)}l.addGroup(p,E,0),p+=E}function v(y){const C=g,E=new ge,T=new N;let b=0;const P=y===!0?e:t,_=y===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const M=g;for(let F=0;F<=s;F++){const V=F/s*c+a,Y=Math.cos(V),A=Math.sin(V);T.x=P*A,T.y=m*_,T.z=P*Y,h.push(T.x,T.y,T.z),d.push(0,_,0),E.x=Y*.5+.5,E.y=A*.5*_+.5,f.push(E.x,E.y),g++}for(let F=0;F<s;F++){const z=C+F,V=M+F;y===!0?u.push(V,V+1,z):u.push(V+1,V,z),b+=3}l.addGroup(p,b,y===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class un extends St{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new un(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ma extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const v=new N,y=new N,C=new N;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],y),f(t[E+2],C),c(v,y,C,S)}function c(S,v,y,C){const E=C+1,T=[];for(let b=0;b<=E;b++){T[b]=[];const P=S.clone().lerp(y,b/E),_=v.clone().lerp(y,b/E),M=E-b;for(let F=0;F<=M;F++)F===0&&b===E?T[b][F]=P:T[b][F]=P.clone().lerp(_,F/M)}for(let b=0;b<E;b++)for(let P=0;P<2*(E-b)-1;P++){const _=Math.floor(P/2);P%2===0?(d(T[b][_+1]),d(T[b+1][_]),d(T[b][_])):(d(T[b][_+1]),d(T[b+1][_+1]),d(T[b+1][_]))}}function l(S){const v=new N;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(S),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){const S=new N;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];const y=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;o.push(y,1-C)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const v=o[S+0],y=o[S+2],C=o[S+4],E=Math.max(v,y,C),T=Math.min(v,y,C);E>.9&&T<.1&&(v<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){const y=S*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){const S=new N,v=new N,y=new N,C=new N,E=new ge,T=new ge,b=new ge;for(let P=0,_=0;P<r.length;P+=9,_+=6){S.set(r[P+0],r[P+1],r[P+2]),v.set(r[P+3],r[P+4],r[P+5]),y.set(r[P+6],r[P+7],r[P+8]),E.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),b.set(o[_+4],o[_+5]),C.copy(S).add(v).add(y).divideScalar(3);const M=m(C);x(E,_+0,S,M),x(T,_+2,v,M),x(b,_+4,y,M)}}function x(S,v,y,C){C<0&&S.x===1&&(o[v]=S.x-1),y.x===0&&y.z===0&&(o[v]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.vertices,e.indices,e.radius,e.details)}}class zr extends Fl{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Fl().fromJSON(s))}return this}}const Yv={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Yd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=Zv(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Hr(r,o,t,a,c,f,0),o}};function Yd(i,e,t,n,s){let r,o;if(s===ly(i,e,t,n)>0)for(r=e;r<t;r+=n)o=jd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=jd(r,i[r],i[r+1],o);return o&&ga(o,o.next)&&(Vr(o),o=o.next),o}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ga(t,t.next)||At(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&iy(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?$v(i,n,s,r):Kv(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=jv(Zi(i),e,t),Hr(i,e,t,n,s,r,2)):o===2&&Jv(i,e,t,n,s,r):Hr(Zi(i),e,t,n,s,r,1);break}}}function Kv(i){const e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&qs(s,a,r,c,o,l,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $v(i,e,t,n){const s=i.prev,r=i,o=i.next;if(At(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=Bl(f,g,e,t,n),S=Bl(x,m,e,t,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=p&&y&&y.z<=S;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&qs(a,u,c,h,l,d,v.x,v.y)&&At(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&qs(a,u,c,h,l,d,y.x,y.y)&&At(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&qs(a,u,c,h,l,d,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&qs(a,u,c,h,l,d,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jv(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ga(s,r)&&Kd(s,n,n.next,r)&&Gr(s,r)&&Gr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vr(n),Vr(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function Jv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oy(o,a)){let c=$d(o,a);o=Zi(o,o.next),c=Zi(c,c.next),Hr(o,e,t,n,s,r,0),Hr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Zv(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Yd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(ry(l));for(s.sort(Qv),r=0;r<s.length;r++)t=ey(s[r],t);return t}function Qv(i,e){return i.x-e.x}function ey(i,e){const t=ty(i,e);if(!t)return e;const n=$d(t,i);return Zi(n,n.next),Zi(t,t.next)}function ty(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&qs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Gr(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&ny(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function ny(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function iy(i,e,t,n){let s=i;do s.z===0&&(s.z=Bl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sy(s)}function sy(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Bl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ry(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function oy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ay(i,e)&&(Gr(i,e)&&Gr(e,i)&&cy(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||ga(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ga(i,e){return i.x===e.x&&i.y===e.y}function Kd(i,e,t,n){const s=xa(At(i,e,t)),r=xa(At(i,e,n)),o=xa(At(t,n,i)),a=xa(At(t,n,e));return!!(s!==r&&o!==a||s===0&&_a(i,t,e)||r===0&&_a(i,n,e)||o===0&&_a(t,i,n)||a===0&&_a(t,e,n))}function _a(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xa(i){return i>0?1:i<0?-1:0}function ay(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Kd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Gr(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function cy(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $d(i,e){const t=new kl(i.i,i.x,i.y),n=new kl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jd(i,e,t,n){const s=new kl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ly(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Wr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Wr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Jd(e),Zd(n,e);let o=e.length;t.forEach(Jd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Zd(n,t[c]);const a=Yv.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Jd(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ys extends Rt{constructor(e=new zr([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:uy;let v,y=!1,C,E,T,b;p&&(v=p.getSpacedPoints(u),y=!0,d=!1,C=p.computeFrenetFrames(u,!1),E=new N,T=new N,b=new N),d||(m=0,f=0,g=0,x=0);const P=a.extractPoints(l);let _=P.shape;const M=P.holes;if(!Wr.isClockWise(_)){_=_.reverse();for(let te=0,D=M.length;te<D;te++){const pe=M[te];Wr.isClockWise(pe)&&(M[te]=pe.reverse())}}const z=Wr.triangulateShape(_,M),V=_;for(let te=0,D=M.length;te<D;te++){const pe=M[te];_=_.concat(pe)}function Y(te,D,pe){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(D,pe)}const A=_.length,G=z.length;function U(te,D,pe){let me,se,be;const Te=te.x-D.x,Ee=te.y-D.y,L=pe.x-te.x,w=pe.y-te.y,$=Te*Te+Ee*Ee,ne=Te*w-Ee*L;if(Math.abs(ne)>Number.EPSILON){const oe=Math.sqrt($),ee=Math.sqrt(L*L+w*w),ke=D.x-Ee/oe,le=D.y+Te/oe,we=pe.x-w/ee,it=pe.y+L/ee,_e=((we-ke)*w-(it-le)*L)/(Te*w-Ee*L);me=ke+Te*_e-te.x,se=le+Ee*_e-te.y;const Ce=me*me+se*se;if(Ce<=2)return new ge(me,se);be=Math.sqrt(Ce/2)}else{let oe=!1;Te>Number.EPSILON?L>Number.EPSILON&&(oe=!0):Te<-Number.EPSILON?L<-Number.EPSILON&&(oe=!0):Math.sign(Ee)===Math.sign(w)&&(oe=!0),oe?(me=-Ee,se=Te,be=Math.sqrt($)):(me=Te,se=Ee,be=Math.sqrt($/2))}return new ge(me/be,se/be)}const q=[];for(let te=0,D=V.length,pe=D-1,me=te+1;te<D;te++,pe++,me++)pe===D&&(pe=0),me===D&&(me=0),q[te]=U(V[te],V[pe],V[me]);const B=[];let W,j=q.concat();for(let te=0,D=M.length;te<D;te++){const pe=M[te];W=[];for(let me=0,se=pe.length,be=se-1,Te=me+1;me<se;me++,be++,Te++)be===se&&(be=0),Te===se&&(Te=0),W[me]=U(pe[me],pe[be],pe[Te]);B.push(W),j=j.concat(W)}for(let te=0;te<m;te++){const D=te/m,pe=f*Math.cos(D*Math.PI/2),me=g*Math.sin(D*Math.PI/2)+x;for(let se=0,be=V.length;se<be;se++){const Te=Y(V[se],q[se],me);fe(Te.x,Te.y,-pe)}for(let se=0,be=M.length;se<be;se++){const Te=M[se];W=B[se];for(let Ee=0,L=Te.length;Ee<L;Ee++){const w=Y(Te[Ee],W[Ee],me);fe(w.x,w.y,-pe)}}}const ie=g+x;for(let te=0;te<A;te++){const D=d?Y(_[te],j[te],ie):_[te];y?(T.copy(C.normals[0]).multiplyScalar(D.x),E.copy(C.binormals[0]).multiplyScalar(D.y),b.copy(v[0]).add(T).add(E),fe(b.x,b.y,b.z)):fe(D.x,D.y,0)}for(let te=1;te<=u;te++)for(let D=0;D<A;D++){const pe=d?Y(_[D],j[D],ie):_[D];y?(T.copy(C.normals[te]).multiplyScalar(pe.x),E.copy(C.binormals[te]).multiplyScalar(pe.y),b.copy(v[te]).add(T).add(E),fe(b.x,b.y,b.z)):fe(pe.x,pe.y,h/u*te)}for(let te=m-1;te>=0;te--){const D=te/m,pe=f*Math.cos(D*Math.PI/2),me=g*Math.sin(D*Math.PI/2)+x;for(let se=0,be=V.length;se<be;se++){const Te=Y(V[se],q[se],me);fe(Te.x,Te.y,h+pe)}for(let se=0,be=M.length;se<be;se++){const Te=M[se];W=B[se];for(let Ee=0,L=Te.length;Ee<L;Ee++){const w=Y(Te[Ee],W[Ee],me);y?fe(w.x,w.y+v[u-1].y,v[u-1].x+pe):fe(w.x,w.y,h+pe)}}}K(),J();function K(){const te=s.length/3;if(d){let D=0,pe=A*D;for(let me=0;me<G;me++){const se=z[me];ye(se[2]+pe,se[1]+pe,se[0]+pe)}D=u+m*2,pe=A*D;for(let me=0;me<G;me++){const se=z[me];ye(se[0]+pe,se[1]+pe,se[2]+pe)}}else{for(let D=0;D<G;D++){const pe=z[D];ye(pe[2],pe[1],pe[0])}for(let D=0;D<G;D++){const pe=z[D];ye(pe[0]+A*u,pe[1]+A*u,pe[2]+A*u)}}n.addGroup(te,s.length/3-te,0)}function J(){const te=s.length/3;let D=0;ce(V,D),D+=V.length;for(let pe=0,me=M.length;pe<me;pe++){const se=M[pe];ce(se,D),D+=se.length}n.addGroup(te,s.length/3-te,1)}function ce(te,D){let pe=te.length;for(;--pe>=0;){const me=pe;let se=pe-1;se<0&&(se=te.length-1);for(let be=0,Te=u+m*2;be<Te;be++){const Ee=A*be,L=A*(be+1),w=D+me+Ee,$=D+se+Ee,ne=D+se+L,oe=D+me+L;ue(w,$,ne,oe)}}}function fe(te,D,pe){c.push(te),c.push(D),c.push(pe)}function ye(te,D,pe){xe(te),xe(D),xe(pe);const me=s.length/3,se=S.generateTopUV(n,s,me-3,me-2,me-1);Le(se[0]),Le(se[1]),Le(se[2])}function ue(te,D,pe,me){xe(te),xe(D),xe(me),xe(D),xe(pe),xe(me);const se=s.length/3,be=S.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);Le(be[0]),Le(be[1]),Le(be[3]),Le(be[1]),Le(be[2]),Le(be[3])}function xe(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Le(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return hy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ol[s.type]().fromJSON(s)),new Ys(n,e.options)}}const uy={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new ge(r,o),new ge(a,c),new ge(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-h),new ge(d,1-g),new ge(x,1-p)]:[new ge(a,1-c),new ge(u,1-h),new ge(f,1-g),new ge(m,1-p)]}};function hy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zl extends ma{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zl(e.radius,e.detail)}}class Hl extends ma{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hl(e.radius,e.detail)}}class Ze extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new N,d=new N,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const E=C/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+y,1-v),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const v=u[p][S+1],y=u[p][S],C=u[p+1][S],E=u[p+1][S+1];(p!==0||o>0)&&f.push(v,y,E),(p!==n-1||c<Math.PI)&&f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wn extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new N,h=new N,d=new N;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Je extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends Je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fy(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function ef(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Xr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class py extends Xr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vs,endingEnd:vs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ys:r=e,a=2*t-n;break;case wo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ys:o=e,c=2*n-t;break;case wo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+S*o[l+C]+v*o[c+C]+y*o[h+C];return r}}class tf extends Xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class my extends Xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new my(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new py(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Oc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&dy(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}qn.prototype.TimeBufferType=Float32Array,qn.prototype.ValueBufferType=Float32Array,qn.prototype.DefaultInterpolation=vr;class Ks extends qn{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="bool",Ks.prototype.ValueBufferType=Array,Ks.prototype.DefaultInterpolation=xr,Ks.prototype.InterpolantFactoryMethodLinear=void 0,Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends qn{}nf.prototype.ValueTypeName="color";class $s extends qn{}$s.prototype.ValueTypeName="number";class gy extends Xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Yt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class js extends qn{InterpolantFactoryMethodLinear(e){return new gy(this.times,this.values,this.getValueSize(),e)}}js.prototype.ValueTypeName="quaternion",js.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends qn{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="string",Js.prototype.ValueBufferType=Array,Js.prototype.DefaultInterpolation=xr,Js.prototype.InterpolantFactoryMethodLinear=void 0,Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends qn{}Zs.prototype.ValueTypeName="vector";class Gl{constructor(e="",t=-1,n=[],s=Fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=fy(c);c=Qd(c,1,u),l=Qd(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new $s(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const m=[],p=[];ef(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const v=d[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new $s(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Zs,f+".position",d,"pos",s),n(js,f+".quaternion",d,"rot",s),n(Zs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _y(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return Zs;case"color":return nf;case"quaternion":return js;case"bool":case"boolean":return Ks;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_y(i.type);if(i.times===void 0){const t=[],n=[];ef(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const yy=new vy;class Qs{constructor(e){this.manager=e!==void 0?e:yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class My extends Error{constructor(e,t){super(e),this.response=t}}class sf extends Qs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:s});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=li[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{x+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,T=u.length;E<T;E++){const b=u[E];b.onProgress&&b.onProgress(C)}p.enqueue(y),S()}},v=>{p.error(v)})}}});return new Response(m)}else throw new My(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ti.add(e,l);const u=li[e];delete li[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=li[e];if(u===void 0)throw this.manager.itemError(e),l;delete li[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sy extends Qs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Sr("img");function c(){u(),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class by extends Qs{constructor(e){super(e)}load(e,t,n,s){const r=new Ot,o=new Sy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class qr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ya extends qr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Vl=new $e,rf=new N,of=new N;class Wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),Vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wy extends Wl{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ss*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ey extends qr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const af=new $e,Yr=new N,Xl=new N;class Ay extends Wl{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yr),Xl.copy(n.position),Xl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xl),n.updateMatrixWorld(),s.makeTranslation(-Yr.x,-Yr.y,-Yr.z),af.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af)}}class ql extends qr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ay}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ty extends Wl{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ui extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Ty}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ry extends qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cy extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ti.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(e,c),r.manager.itemStart(e)}}class Py{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Yt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;Yt.multiplyQuaternionsFlat(e,o,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Yl="\\[\\]\\.:\\/",Iy=new RegExp("["+Yl+"]","g"),Kl="[^"+Yl+"]",Ly="[^"+Yl.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Kl),Dy=/(WCOD+)?/.source.replace("WCOD",Ly),Uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),Fy=new RegExp("^"+Ny+Dy+Uy+Oy+"$"),By=["material","materials","bones","map"];class ky{constructor(e,t,n){const s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Iy,"")}static parseTrackName(e){const t=Fy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);By.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=ky,ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray],ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zy{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:vs,endingEnd:vs};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=xm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ym:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Fc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===vm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===_m){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=ys,s.endingEnd=ys):(e?s.endingStart=this.zeroSlopeAtStart?ys:vs:s.endingStart=wo,t?s.endingEnd=this.zeroSlopeAtEnd?ys:vs:s.endingEnd=wo)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Hy=new Float32Array(1);class Gy extends ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new Py(ft.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new tf(new Float32Array(2),new Float32Array(2),1,Hy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Gl.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Fc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new zy(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Gl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa),(function(){var i="[native-gamepad-bridge]",e=typeof window.__p5NativeHost<"u"&&window.__p5NativeHost===!0||typeof window.webkit<"u"&&window.webkit&&window.webkit.messageHandlers;if(!e)return;var t={connected:!1,timestamp:0,buttons:[],axes:[]};function n(){return{pressed:!1,touched:!1,value:0}}function s(a){if(a==null)return n();if(typeof a=="boolean")return{pressed:a,touched:a,value:a?1:0};if(typeof a=="number"){var c=a>.5;return{pressed:c,touched:c,value:a}}if(typeof a=="object"){var l="p"in a?!!a.p:"pressed"in a?!!a.pressed:!1,u=typeof a.v=="number"?a.v:typeof a.value=="number"?a.value:l?1:0;return{pressed:l,touched:l,value:u}}return n()}function r(){for(var a=new Array(17),c=0;c<17;c++)a[c]=s(t.buttons&&t.buttons[c]);var l=[0,0,0,0];if(t.axes&&t.axes.length)for(var u=0;u<Math.min(4,t.axes.length);u++){var h=t.axes[u];l[u]=typeof h=="number"&&!isNaN(h)?h:0}return{id:"Native iOS Gamepad (GCController bridge)",index:0,connected:t.connected,timestamp:t.timestamp,mapping:"standard",axes:l,buttons:a,vibrationActuator:null,hapticActuators:[]}}window.__nativeGamepadLastRaw=null,window.__nativeGamepadUpdateCount=0,window.__nativeGamepadUpdate=function(a){a&&(t.buttons=Array.isArray(a.buttons)?a.buttons:[],t.axes=Array.isArray(a.axes)?a.axes:[],t.connected=!0,t.timestamp=typeof performance<"u"&&performance.now?performance.now():Date.now(),window.__nativeGamepadLastRaw=a,window.__nativeGamepadUpdateCount++)},window.__nativeGamepadConnection=function(a){var c=t.connected;if(t.connected=!!a,t.connected||(t.buttons=[],t.axes=[]),t.connected!==c){var l=t.connected?"gamepadconnected":"gamepaddisconnected",u=new Event(l);u.gamepad=r(),window.dispatchEvent(u)}};var o=typeof navigator.getGamepads=="function"?navigator.getGamepads.bind(navigator):null;navigator.getGamepads=function(){if(t.connected)return[r(),null,null,null];if(o)try{return o()}catch{return[null,null,null,null]}return[null,null,null,null]},window.__nativeGamepadBridgeReady=!0,console.log(i,"active: iOS host detected")})();const Vy=60,Wy=.5,Xy=5e3,cf=1e6,lf=2e6;function qy(){const i=new Pr;i.background=new Ve(131850),i.add(new ya(6328512,2105392,.55)),i.fog=new yl(131850,cf,lf);const e=new ui(16777215,1.1);return e.position.set(40,30,20),i.add(e),i}function Yy(){return new Dt(Vy,window.innerWidth/window.innerHeight,Wy,Xy)}const uf=Object.freeze({maxThrottleAccel:18,reverseThrottleAccel:12,maxSpeed:60,yawRate:1.4,pitchRate:1.4,rollRate:2,arcadeDampingRate:.6,hackRadius:8}),nn={...uf};function Ky(){Object.assign(nn,uf)}const $y=15659509,jy=8161430,Jy=1259630,Zy=3108832,Qy=16106818,hf=4828159;function df(i){const e=new zr;i==="stripe"?(e.moveTo(.15,.34),e.lineTo(.7,.13),e.lineTo(.7,.02),e.lineTo(.15,.17)):(e.moveTo(.15,.17),e.lineTo(.7,.02),e.lineTo(.7,-.32),e.lineTo(.15,-.48)),e.closePath();const t=new Ys(e,{depth:.045,bevelEnabled:!1});return t.rotateX(Math.PI/2),t.translate(0,.0225,0),t}function eM(){const i=new zr;i.moveTo(.26,.02),i.lineTo(-.06,.48),i.lineTo(-.38,.12),i.lineTo(-.34,-.12),i.lineTo(-.08,-.32),i.closePath();const e=new Ys(i,{depth:.05,bevelEnabled:!1});return e.rotateY(-Math.PI/2),e.translate(.025,0,0),e}function tM(i,e){const t=new zr;t.moveTo(0,0),t.lineTo(-.06,e),t.lineTo(-.46,0),t.closePath();const n=new Ys(t,{depth:.035,bevelEnabled:!1});return n.rotateY(-Math.PI/2),n.translate(.0175,0,0),n}function nM(){const i=new at,e=new Je({color:$y,roughness:.42,metalness:.45,emissive:790550,side:Xt}),t=new Je({color:jy,roughness:.6,metalness:.5,emissive:329740,side:Xt}),n=new Je({color:Jy,roughness:.08,metalness:.6,emissive:662586,side:Xt}),s=new Je({color:Zy,roughness:.35,metalness:.45,emissive:662602,side:Xt}),r=new Je({color:Qy,roughness:.3,metalness:.55,emissive:2759936,side:Xt}),o=new Je({color:hf,roughness:.3,metalness:.2,emissive:hf,emissiveIntensity:1.4,side:Xt}),a=new St(.22,.18,1.05,6);a.rotateX(Math.PI/2);const c=new re(a,e);c.scale.set(1.3,.7,1),c.position.z=-.05,i.add(c);const l=new un(.22,.92,6);l.rotateX(Math.PI/2);const u=new re(l,e);u.scale.set(1.3,.7,1),u.position.z=.935,i.add(u);const h=new re(new Ht(.42,.09,.92),t);h.position.set(0,-.16,-.05),i.add(h);const d=new re(new Ze(.19,18,12),n);d.scale.set(.86,.6,1.7),d.position.set(0,.13,.22),i.add(d);const f=new re(tM(.46,.36),e);f.position.set(0,.12,-.2),i.add(f);const g=new re(new Ht(.04,.08,.13),r);g.position.set(0,.47,-.29),i.add(g);for(const p of[1,-1]){const S=new at;S.add(new re(df("main"),e)),S.add(new re(df("stripe"),s));const v=new re(eM(),e);v.position.set(.69,0,-.08),S.add(v);const y=new re(new Ht(.06,.5,.05),s);y.position.set(.69,.08,.12),y.rotation.x=-.5,S.add(y);const C=new St(.028,.04,.56,10);C.rotateX(Math.PI/2);const E=new re(C,t);E.position.set(.69,0,.3),S.add(E);const T=new re(new St(.03,.02,.15,10),r);T.rotation.x=Math.PI/2,T.position.set(.69,0,.62),S.add(T);const b=new re(new Ht(.16,.13,.4),o);b.position.set(.28,-.02,-.28),S.add(b),S.position.set(p*.16,0,-.05),p===-1&&(S.scale.x=-1),S.rotation.z=p*.14,i.add(S)}const x=new tn({color:9425151,transparent:!0,opacity:.85,blending:ei,depthWrite:!1}),m=[];for(const p of[-.12,.12]){const S=new St(.12,.095,.36,8);S.rotateX(Math.PI/2);const v=new re(S,t);v.position.set(p,-.03,-.66),i.add(v);const y=new St(.082,.082,.07,8);y.rotateX(Math.PI/2);const C=new re(y,o);C.position.set(p,-.03,-.82),i.add(C);const E=new un(.08,.38,14);E.rotateX(-Math.PI/2);const T=new re(E,x);T.position.set(p,-.03,-1.04),T.visible=!1,m.push(T),i.add(T)}return{mesh:i,velocity:new N,arcadeDamping:!1,glows:m,glowMat:x,flame:0,braking:!0}}const $l=new N,ff=new Yt,pf=new N,iM=.25;function sM(i,e,t){jl(i.mesh.quaternion,$l.set(1,0,0),e.pitch*nn.pitchRate*t),jl(i.mesh.quaternion,$l.set(0,1,0),e.yaw*nn.yawRate*t),jl(i.mesh.quaternion,$l.set(0,0,1),e.roll*nn.rollRate*t),i.mesh.quaternion.normalize();const n=e.throttle>=iM;if(rM(i,n?e.throttle:0,t),!n){i.velocity.set(0,0,0),i.braking=!0;return}i.braking=!1,pf.set(0,0,1).applyQuaternion(i.mesh.quaternion);const s=e.throttle*nn.maxThrottleAccel;if(i.velocity.addScaledVector(pf,s*t),i.arcadeDamping){const r=Math.exp(-nn.arcadeDampingRate*t);i.velocity.multiplyScalar(r)}i.velocity.lengthSq()>nn.maxSpeed*nn.maxSpeed&&i.velocity.setLength(nn.maxSpeed),i.mesh.position.addScaledVector(i.velocity,t)}function rM(i,e,t){const n=e>0?e:0,s=n>i.flame?18:11;i.flame+=(n-i.flame)*Math.min(1,s*t),i.flame<.002&&(i.flame=0);const r=i.flame>0,o=r?.85+.15*Math.sin(performance.now()*.05):1;i.glowMat.opacity=.85*i.flame*o;for(const a of i.glows)a.visible=r,a.scale.set(i.flame,i.flame,(.4+i.flame)*o)}function jl(i,e,t){t!==0&&(ff.setFromAxisAngle(e,t),i.multiply(ff))}const Jl=12e3,Zl=1200;function mf(){const i=new Float32Array(Jl*3),e=new Float32Array(Jl*3);for(let r=0;r<Jl;r++){const o=Math.random(),a=Math.random(),c=2*Math.PI*o,l=Math.acos(2*a-1),u=Math.sin(l),h=Zl*u*Math.cos(c),d=Zl*u*Math.sin(c),f=Zl*Math.cos(l);i[r*3+0]=h,i[r*3+1]=d,i[r*3+2]=f;const g=.85+Math.random()*.15,x=Math.random()*.1;e[r*3+0]=g-x,e[r*3+1]=g-x*.5,e[r*3+2]=g}const t=new Rt;t.setAttribute("position",new Tt(i,3)),t.setAttribute("color",new Tt(e,3));const n=new ua({size:1.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1}),s=new Pl(t,n);return s.frustumCulled=!1,s}function gf(i,e){i.position.copy(e.position)}const Ql=250,$r={zNear:80,zFar:480,xHalf:70,yHalf:45},oM=1.2,aM=4.5,cM=.4;function Nn(i,e){return i+Math.random()*(e-i)}function lM(){return Math.random()<.5?-1:1}function uM(){const i=new zl(1,0),e=new Je({color:9074021,roughness:.95,metalness:.05,flatShading:!0}),t=new Ud(i,e,Ql);t.frustumCulled=!1;const n=[],s=new $e,r=new Yt,o=new N,a=new N;for(let l=0;l<Ql;l++){const u=Nn(oM,aM);a.set(Nn(-70,$r.xHalf),Nn(-45,$r.yHalf),Nn($r.zNear,$r.zFar)),o.setScalar(u),r.setFromEuler(new Kt(Nn(0,Math.PI*2),Nn(0,Math.PI*2),Nn(0,Math.PI*2))),s.compose(a,r,o),t.setMatrixAt(l,s),n.push({position:a.clone(),radius:u*1.05,spinAxis:new N(Nn(-1,1),Nn(-1,1),Nn(-1,1)).normalize(),spinRate:Nn(.05,cM)*lM(),rotation:r.clone()})}t.instanceMatrix.needsUpdate=!0;function c(l){const u=new Yt;for(let h=0;h<Ql;h++){const d=n[h];u.setFromAxisAngle(d.spinAxis,d.spinRate*l),d.rotation.premultiply(u),o.setScalar(d.radius/1.05),s.compose(d.position,d.rotation,o),t.setMatrixAt(h,s)}t.instanceMatrix.needsUpdate=!0}return{mesh:t,instances:n,update:c,volume:{...$r}}}const _f=new N(0,0,700),eu=60;function hM(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#c97648"),s.addColorStop(.5,"#b15a30"),s.addColorStop(1,"#7a3a1c"),n.fillStyle=s,n.fillRect(0,0,1024,512);for(let o=0;o<320;o++){const a=Math.random()*1024,c=Math.random()*512,l=8+Math.random()*80,u=.05+Math.random()*.18,h=Math.random()<.65;n.beginPath(),n.fillStyle=h?`rgba(70, 30, 15, ${u})`:`rgba(240, 180, 130, ${u})`,n.arc(a,c,l,0,Math.PI*2),n.fill()}for(const o of[0,512]){const a=n.createRadialGradient(512,o,0,512,o,179.2);a.addColorStop(0,"rgba(230, 240, 245, 0.85)"),a.addColorStop(1,"rgba(230, 240, 245, 0)"),n.fillStyle=a,n.fillRect(0,0,1024,512)}const r=new Ji(t);return r.colorSpace=Et,r}function dM(){const i=new Ze(eu,64,32),e=new Je({map:hM(),roughness:.95,metalness:0}),t=new re(i,e);t.position.copy(_f);const n=.02;function s(r){t.rotation.y+=n*r}return{mesh:t,update:s}}const jr=new N(-90,25,-330),Jr=112,Yn=2048,$t=1024,fM=1.015,pM=1.035,xf=.03,mM=.042,gM=[[[-168,65],[-150,61],[-130,54],[-124,40],[-117,32],[-105,22],[-97,16],[-83,9],[-78,19],[-81,26],[-70,42],[-60,47],[-55,52],[-64,60],[-80,70],[-95,69],[-125,70],[-155,71]],[[-80,8],[-70,11],[-60,8],[-50,0],[-35,-5],[-38,-15],[-48,-25],[-58,-35],[-63,-42],[-73,-52],[-75,-47],[-71,-33],[-71,-18],[-79,-6],[-80,2]],[[-17,15],[-10,25],[0,32],[10,34],[25,32],[35,30],[43,12],[51,12],[42,-2],[40,-15],[35,-25],[25,-34],[18,-33],[12,-18],[9,-2],[5,5],[-8,5]],[[-9,37],[0,40],[12,45],[24,40],[30,36],[36,37],[45,40],[50,30],[57,25],[68,24],[77,8],[81,16],[89,22],[95,16],[100,13],[106,10],[110,20],[120,32],[122,40],[130,43],[136,50],[142,54],[160,60],[170,66],[178,68],[168,72],[140,75],[110,76],[90,76],[70,73],[58,70],[48,68],[38,66],[30,70],[24,66],[17,62],[11,58],[4,57],[-2,51],[0,47],[-5,43]],[[113,-22],[122,-18],[130,-12],[137,-12],[142,-11],[147,-19],[153,-25],[150,-35],[145,-38],[137,-35],[129,-32],[118,-34],[114,-28]],[[-45,60],[-30,68],[-24,75],[-35,82],[-55,82],[-60,75],[-55,65]]],_M=[[-4,54,4],[138,37,4],[47,-20,5],[174,-41,4],[110,-3,6],[102,-2,5],[122,12,4],[-19,65,3],[80,8,2.5],[-78,21,3]],xM=[[10,22,18],[30,25,14],[45,22,12],[65,28,10],[95,40,12],[132,-25,14],[18,-22,8],[-110,32,8],[-68,-25,6]];function Ma(i,e){return{x:(i+180)/360*Yn,y:(90-e)/180*$t}}function vf(i){return i/180*$t}function vM(i,e){const t=e.map(([o,a])=>Ma(o,a)),n=t.length,s=(o,a)=>({x:(o.x+a.x)/2,y:(o.y+a.y)/2}),r=s(t[n-1],t[0]);i.moveTo(r.x,r.y);for(let o=0;o<n;o++){const a=t[o],c=s(t[o],t[(o+1)%n]);i.quadraticCurveTo(a.x,a.y,c.x,c.y)}i.closePath()}function Sa(i){for(const e of gM)vM(i,e);for(const[e,t,n]of _M){const{x:s,y:r}=Ma(e,t),o=vf(n);i.moveTo(s+o,r),i.arc(s,r,o,0,Math.PI*2)}}function tu(i,e,t,n,s,r,o=1,a=1){i.save(),i.translate(e,t),i.scale(o,a);const c=i.createRadialGradient(0,0,0,0,0,n);c.addColorStop(0,`rgba(${s}, ${r})`),c.addColorStop(.55,`rgba(${s}, ${r*.55})`),c.addColorStop(1,`rgba(${s}, 0)`),i.fillStyle=c,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.fill(),i.restore()}function yf(){const i=document.createElement("canvas");return i.width=Yn,i.height=$t,i.getContext("2d")}function yM(i){const e=new Ji(i.canvas);return e.colorSpace=Et,e}function MM(){const i=yf(),e=i.createLinearGradient(0,0,0,$t);e.addColorStop(0,"#0a2c50"),e.addColorStop(.35,"#1259a0"),e.addColorStop(.5,"#1a72bd"),e.addColorStop(.65,"#1259a0"),e.addColorStop(1,"#0a2c50"),i.fillStyle=e,i.fillRect(0,0,Yn,$t);for(let o=0;o<700;o++){const a=Math.random()*Yn,c=Math.random()*$t,l=20+Math.random()*110,u=Math.random()<.55;tu(i,a,c,l,u?"6, 28, 58":"70, 165, 215",(u?.1:.07)*(.4+Math.random()*.6),1.6,.7)}const t=[{width:52,color:"rgba(30, 105, 165, 0.18)"},{width:38,color:"rgba(45, 130, 190, 0.20)"},{width:26,color:"rgba(65, 160, 205, 0.22)"},{width:14,color:"rgba(95, 190, 220, 0.25)"}];i.lineJoin="round",i.lineCap="round",i.beginPath(),Sa(i);for(const o of t)i.strokeStyle=o.color,i.lineWidth=o.width,i.stroke();i.fillStyle="#3f7a3a",i.beginPath(),Sa(i),i.fill(),i.save(),i.beginPath(),Sa(i),i.clip();const n=i.createLinearGradient(0,0,0,$t);n.addColorStop(0,"rgba(190, 205, 200, 0.55)"),n.addColorStop(.22,"rgba(60, 90, 60, 0.45)"),n.addColorStop(.5,"rgba(30, 85, 35, 0.5)"),n.addColorStop(.78,"rgba(70, 100, 55, 0.35)"),n.addColorStop(1,"rgba(200, 215, 215, 0.6)"),i.fillStyle=n,i.fillRect(0,0,Yn,$t);for(const[o,a,c]of xM){const{x:l,y:u}=Ma(o,a),h=vf(c),d=i.createRadialGradient(l,u,0,l,u,h);d.addColorStop(0,"rgba(200, 168, 105, 0.85)"),d.addColorStop(.6,"rgba(190, 158, 100, 0.55)"),d.addColorStop(1,"rgba(180, 150, 95, 0)"),i.fillStyle=d,i.beginPath(),i.arc(l,u,h,0,Math.PI*2),i.fill()}for(let o=0;o<1400;o++){const a=Math.random()*Yn,c=Math.random()*$t,l=5+Math.random()*30,u=Math.random()<.5;tu(i,a,c,l,u?"25, 52, 25":"155, 148, 108",.06+Math.random()*.14,1+Math.random(),.8)}for(let o=0;o<90;o++){const a=Math.random()*Yn,c=Math.random()*$t,l=40+Math.random()*160,u=(Math.random()-.5)*Math.PI,h=Math.cos(u)*l,d=Math.sin(u)*l*.6;i.beginPath(),i.moveTo(a,c),i.quadraticCurveTo(a+h*.5,c+d*.5-18,a+h,c+d),i.strokeStyle="rgba(48, 42, 32, 0.30)",i.lineWidth=6+Math.random()*8,i.stroke(),i.beginPath(),i.moveTo(a,c-5),i.quadraticCurveTo(a+h*.5,c+d*.5-23,a+h,c+d-5),i.strokeStyle="rgba(200, 195, 175, 0.18)",i.lineWidth=3,i.stroke()}i.beginPath(),Sa(i),i.strokeStyle="rgba(214, 196, 142, 0.28)",i.lineWidth=14,i.stroke(),i.strokeStyle="rgba(224, 208, 158, 0.30)",i.lineWidth=6,i.stroke(),i.restore();const s=i.createLinearGradient(0,$t*.86,0,$t);s.addColorStop(0,"rgba(238, 246, 252, 0)"),s.addColorStop(.45,"rgba(238, 246, 252, 0.9)"),s.addColorStop(1,"rgba(255, 255, 255, 1)"),i.fillStyle=s,i.fillRect(0,$t*.86,Yn,$t*.14);const r=i.createLinearGradient(0,0,0,$t*.1);return r.addColorStop(0,"rgba(240, 248, 255, 0.95)"),r.addColorStop(1,"rgba(240, 248, 255, 0)"),i.fillStyle=r,i.fillRect(0,0,Yn,$t*.1),yM(i)}function SM(){const i=yf();i.clearRect(0,0,Yn,$t);function e(s){const r=Math.exp(-((s/12)**2)),o=Math.exp(-(((s-55)/16)**2)),a=Math.exp(-(((s+55)/16)**2));return .25+.75*Math.max(r,Math.max(o,a))}const t=600;for(let s=0;s<t;s++){const r=Math.random()*360-180,o=Math.random()*170-85;if(Math.random()>e(o))continue;const{x:a,y:c}=Ma(r,o),l=8+Math.floor(Math.random()*12),u=16+Math.random()*50;for(let h=0;h<l;h++){const d=a+(Math.random()-.5)*u*2.6,f=c+(Math.random()-.5)*u*.7,g=5+Math.random()*14;tu(i,d,f,g,"255, 255, 255",.18+Math.random()*.28,2.2+Math.random(),.85)}}const n=new Ji(i.canvas);return n.colorSpace=Et,n}function bM(){const i=new Ze(Jr,96,48),e=MM();e.anisotropy=8;const t=new Je({map:e,roughness:.9,metalness:0,emissive:661030}),n=new re(i,t);n.position.copy(jr),n.rotation.z=zi.degToRad(23.4);const s=new re(new Ze(Jr*fM,96,48),new Je({map:SM(),transparent:!0,opacity:.85,depthWrite:!1,roughness:1,metalness:0}));n.add(s);const r=new re(new Ze(Jr*pM,64,32),new tn({color:6269183,transparent:!0,opacity:.22,blending:ei,side:Wt,depthWrite:!1}));n.add(r);function o(a){n.rotation.y+=xf*a,s.rotation.y+=(mM-xf)*a}return{mesh:n,clouds:s,atmosphere:r,update:o}}const Zr=256,wM=new N(0,0,-2e3),EM=350;function AM(){const i=document.createElement("canvas");i.width=Zr,i.height=Zr;const e=i.getContext("2d"),t=Zr/2,n=e.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"rgba(255, 245, 220, 1)"),n.addColorStop(.08,"rgba(255, 230, 180, 0.95)"),n.addColorStop(.25,"rgba(255, 200, 130, 0.45)"),n.addColorStop(.55,"rgba(255, 170, 100, 0.15)"),n.addColorStop(1,"rgba(255, 150, 90, 0)"),e.fillStyle=n,e.fillRect(0,0,Zr,Zr);const s=new Ji(i);return s.colorSpace=Et,s}function TM(){const i=AM(),e=new Ml({map:i,depthWrite:!1,transparent:!0,blending:ei}),t=new wd(e);t.scale.setScalar(EM);function n(s){t.position.copy(s.position).add(wM)}return{sprite:t,update:n}}const RM=["Sojourner","Spirit","Opportunity","Curiosity","Perseverance","Zhurong"],CM=eu+18,PM=eu+60,IM=60,Mf=8028296,LM=5431551,NM=2106408,DM=1060936;function ba(i,e){return i+Math.random()*(e-i)}function UM(){const i=new at,e=new Je({color:Mf,roughness:.7,metalness:.3,emissive:0}),t=new re(new Ht(2.2,.7,1.4),e);t.position.y=.45,i.add(t);const n=new re(new Ht(1.8,.1,1.1),new Je({color:DM,roughness:.4,metalness:.8,emissive:332832}));n.position.y=.85,i.add(n);const s=new St(.32,.32,.2,12);s.rotateZ(Math.PI/2);const r=new Je({color:NM,roughness:.95,metalness:.1}),o=[-.85,.85],a=[-.55,.55];for(const u of o)for(const h of a){const d=new re(s,r);d.position.set(u,.1,h),i.add(d)}const c=new re(new St(.04,.04,.8,6),new Je({color:11184810,roughness:.6,metalness:.5}));c.position.set(.6,1.2,0),i.add(c);const l=new re(new Ze(.1,8,6),new Je({color:16733525,emissive:4456448}));return l.position.set(.6,1.65,0),i.add(l),{group:i,bodyMat:e}}function OM(){const i=Math.random(),e=Math.random(),t=2*Math.PI*i,n=Math.acos(2*e-1),s=ba(CM,PM),r=Math.sin(n);return new N(s*r*Math.cos(t),s*r*Math.sin(t),s*Math.cos(n)).add(_f)}function FM(){const i=[];for(const s of RM){const{group:r,bodyMat:o}=UM(),a=OM();r.position.copy(a),r.rotation.set(ba(0,Math.PI*2),ba(0,Math.PI*2),ba(0,Math.PI*2)),i.push({name:s,mesh:r,bodyMat:o,position:a,fixed:!1,repairProgress:0,creditValue:IM})}function e(s){for(const r of i)r.mesh.rotation.y+=.25*s,r.mesh.rotation.x+=.08*s}function t(s){s.fixed=!0,s.repairProgress=1,s.bodyMat.color.setHex(LM),s.bodyMat.emissive.setHex(1060928)}function n(){for(const s of i)s.fixed=!1,s.repairProgress=0,s.bodyMat.color.setHex(Mf),s.bodyMat.emissive.setHex(0)}return{rovers:i,update:e,markFixed:t,reset:n}}const wa=32,nu=.9,BM=6,kM=.18;function zM(){const i=new Float32Array(wa*3),e=new Float32Array(wa*3),t=new Rt;t.setAttribute("position",new Tt(i,3));const n=new ua({color:10149887,size:kM,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ei}),s=new Pl(t,n);s.visible=!1;let r=nu;function o(c){r=0;for(let l=0;l<wa;l++){i[l*3+0]=c.x,i[l*3+1]=c.y,i[l*3+2]=c.z;const u=Math.random(),h=Math.random(),d=2*Math.PI*u,f=Math.acos(2*h-1),g=Math.sin(f),x=(.4+Math.random()*.6)*BM;e[l*3+0]=x*g*Math.cos(d),e[l*3+1]=x*g*Math.sin(d),e[l*3+2]=x*Math.cos(f)}t.attributes.position.needsUpdate=!0,s.visible=!0}function a(c){if(r>=nu){s.visible=!1;return}r+=c;const l=Math.min(1,r/nu),u=Math.pow(.05,c);for(let h=0;h<wa;h++)i[h*3+0]+=e[h*3+0]*c,i[h*3+1]+=e[h*3+1]*c,i[h*3+2]+=e[h*3+2]*c,e[h*3+0]*=u,e[h*3+1]*=u,e[h*3+2]*=u;t.attributes.position.needsUpdate=!0,n.opacity=1-l}return{points:s,fire:o,update:a}}const Sf=.7,iu=new N,er=new N;function HM(i,e){let t=0;for(const n of e){iu.subVectors(i.position,n.position);const s=Sf+n.radius,r=iu.lengthSq();if(r>=s*s)continue;if(r<1e-8)er.set(0,1,0),i.position.addScaledVector(er,s);else{const a=Math.sqrt(r);er.copy(iu).divideScalar(a);const c=s-a;i.position.addScaledVector(er,c)}const o=i.velocity.dot(er);o<0&&i.velocity.addScaledVector(er,-1.55*o),t+=1}return t}const GM=Object.freeze(Object.defineProperty({__proto__:null,SHIP_RADIUS:Sf,resolveAsteroidCollisions:HM},Symbol.toStringTag,{value:"Module"})),Ri={throttleUp:["KeyW"],throttleDown:["KeyS"],yawLeft:["KeyA"],yawRight:["KeyD"],pitchUp:["ArrowUp"],pitchDown:["ArrowDown"],rollLeft:["KeyQ"],rollRight:["KeyE"]};function VM(){const i=new Set,e=new Set;function t(o){i.has(o.code)||e.add(o.code),i.add(o.code)}function n(o){i.delete(o.code)}window.addEventListener("keydown",t),window.addEventListener("keyup",n);function s(o){for(const a of o)if(i.has(a))return!0;return!1}function r(o){for(const a of o)if(e.has(a))return!0;return!1}return{isDown:o=>i.has(o),sample(){const o=(s(Ri.throttleUp)?1:0)-(s(Ri.throttleDown)?1:0),a=(s(Ri.yawLeft)?1:0)-(s(Ri.yawRight)?1:0),c=(s(Ri.pitchUp)?1:0)-(s(Ri.pitchDown)?1:0),l=(s(Ri.rollLeft)?1:0)-(s(Ri.rollRight)?1:0);return{throttle:o,yaw:a,pitch:c,roll:l}},consumeAnyJustPressed(){const o=e.size>0;return e.clear(),o},consumeJustPressed(o){if(r(o)){for(const a of o)e.delete(a);return!0}return!1},dispose(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}}}const WM=.15,Ea={throttle:{axisIndex:1,sign:-1},yaw:{axisIndex:0,sign:-1},lookX:{axisIndex:2,sign:1},lookY:{axisIndex:3,sign:-1}},Ct={A:0,B:1,X:2,Y:3,L1:4,R1:5,L2:6,R2:7,Select:8,Start:9,L3:10,R3:11,Up:12,Down:13,Left:14,Right:15};function XM(i,e=WM){const t=Math.abs(i);return t<e?0:Math.sign(i)*((t-e)/(1-e))}function Aa(i,e){return e.sign*XM(i.axes[e.axisIndex]??0)}function qM(){let i=!1,e=!1;const t=new Set,n=new Set,s=new Set;function r(){const c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(const l of c)if(l&&l.connected)return l;return null}const o=new Set;function a(c){if(n.clear(),o.clear(),!!c.buttons){for(let l=0;l<c.buttons.length;l++){const u=c.buttons[l];!!(u&&u.pressed)?(o.add(l),!t.has(l)&&!s.has(l)&&n.add(l)):s.delete(l)}for(const l of t)o.has(l)||t.delete(l);for(const l of o)t.add(l)}}return{get active(){return i},sample(){const c=r();if(!c)return i=!1,n.clear(),o.clear(),t.clear(),null;!e&&c.mapping!=="standard"&&(e=!0,console.info("[input/gamepad] Connected pad reports non-standard mapping",`(id="${c.id}"). Throttle/look may not be on axes 1/2/3 as expected.`,"See BACKLOG.md for the calibration follow-up.")),a(c);const l=Aa(c,Ea.yaw),u=Aa(c,Ea.throttle),h=Aa(c,Ea.lookX),d=Aa(c,Ea.lookY),f=(o.has(Ct.Up)?1:0)-(o.has(Ct.Down)?1:0),g=(o.has(Ct.Left)?1:0)-(o.has(Ct.Right)?1:0),x=(l||f||g||u||h||d)!==0,m=o.size>0;return i=x||m,{throttle:u,yaw:l,pitch:f,roll:g,lookX:h,lookY:d}},isButtonDown(c){return o.has(c)},consumeJustPressed(c){return n.has(c)?(n.delete(c),!0):!1},consumeAnyJustPressed(){return n.size===0?!1:(n.clear(),!0)},suppressCurrentlyPressed(){for(const c of o)s.add(c)}}}const bf=.2,wf=1,Ef=25,YM=1e3,KM=35,$M=35;function Af(){return(screen.orientation?.angle??window.orientation??0)*Math.PI/180}function jM(){let i=!1,e=!1,t=!1,n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},o=null,a=0,c=0,l=0,u=null,h=null;function d(m){if(m.alpha==null&&m.beta==null&&m.gamma==null)return;o={alpha:m.alpha??0,beta:m.beta??0,gamma:m.gamma??0},a=typeof performance<"u"?performance.now():Date.now();const p=g(o);if(u!==null){const S=p.pitch-u,v=p.yaw-h;Math.abs(S)<Ef&&Math.abs(v)<Ef&&(c+=S,l+=v)}if(u=p.pitch,h=p.yaw,n==null){const S=a;s===0&&(s=S),r.alpha+=o.alpha,r.beta+=o.beta,r.gamma+=o.gamma,r.n+=1,S-s>=YM&&r.n>0&&(n={alpha:r.alpha/r.n,beta:r.beta/r.n,gamma:r.gamma/r.n})}}function f(){n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},u=null,h=null}function g(m){const p=Af(),S=Math.cos(p),v=Math.sin(p);return{pitch:m.beta*S-m.gamma*v,yaw:m.beta*v+m.gamma*S}}function x(){i||(window.addEventListener("deviceorientation",d),screen.orientation?.addEventListener("change",f),window.addEventListener("orientationchange",f),i=!0)}return{get active(){return!i||o==null?!1:(typeof performance<"u"?performance.now():Date.now())-a<1e3},get calibrated(){return n!=null},async request(){if(t)return x(),e;t=!0;const m=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(m&&typeof m.requestPermission=="function"){try{e=await m.requestPermission()==="granted"}catch{e=!1}e&&x()}else e=!0,x();return e},consumeTurn(){if(!i||u===null)return{pitch:0,yaw:0};const m={pitch:c*Rf*wf,yaw:l*Rf*wf};return c=0,l=0,m},sample(){if(!o||!n)return null;const m=o.beta-n.beta,p=o.gamma-n.gamma,S=Af(),v=Math.cos(S),y=Math.sin(S),C=m*v-p*y,E=m*y+p*v;let T=Tf(C/KM,-1,1),b=Tf(E/$M,-1,1);return{pitchDelta:T*bf,yawDelta:b*bf}}}}function Tf(i,e,t){return i<e?e:i>t?t:i}const Rf=Math.PI/180,su=typeof window<"u"&&"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0;function JM(){let i=!1;function e(t){t.pointerType!=="mouse"&&(i=!0)}return window.addEventListener("pointerdown",e,{passive:!0}),{consumeJustPressed(){const t=i;return i=!1,t},clear(){i=!1}}}function Cf(){return typeof window>"u"?!1:!!(window.__p5NativeHost===!0||window.webkit&&window.webkit.messageHandlers)}function tr(i){return i<-1?-1:i>1?1:i}function ZM(){const i=VM(),e=qM(),t=jM(),n=JM();let s=["KB"];return{keyboard:i,gamepad:e,gyro:t,touch:n,isTouchDevice:su,bridgeAvailable:Cf,async enableGyro(){return t.request()},sample(){const r=i.sample(),o=e.sample(),a=[];let c,l,u,h;o&&(o.throttle||o.yaw||o.pitch||o.roll)?(c=o.throttle,l=o.yaw,u=o.pitch,h=o.roll,a.push("PAD"),(r.throttle||r.yaw||r.pitch||r.roll)&&(c=tr(c+r.throttle),l=tr(l+r.yaw),u=tr(u+r.pitch),h=tr(h+r.roll),a.push("KB"))):(c=r.throttle,l=r.yaw,u=r.pitch,h=r.roll,(r.throttle||r.yaw||r.pitch||r.roll)&&a.push("KB"));const d=l,f=c,g=t.sample();g&&t.active&&(u=tr(u+g.pitchDelta),l=tr(l-g.yawDelta),a.push("GYRO"));let x=o?o.lookX:0,m=o?o.lookY:0;(x||m)&&!a.includes("PAD")&&a.push("PAD");const p=t.active?t.consumeTurn():{pitch:0,yaw:0},S=p.yaw,v=p.pitch;return(S||v)&&!a.includes("GYRO")&&a.push("GYRO"),a.length===0&&a.push("KB"),s=a,{throttle:c,yaw:l,pitch:u,roll:h,lookX:x,lookY:m,lookTurnX:S,lookTurnY:v,stickYaw:d,stickThrottle:f}},activeSources(){return s},consumeAnyJustPressed(){const r=i.consumeAnyJustPressed();e.sample();const o=e.consumeAnyJustPressed(),a=n.consumeJustPressed();return r||o||a}}}const Ne={title:"Super Vexo and the Mystery of the System",pressAnyKey:"Press any button to start",tapToStart:"Tap to start",intro:{skip:"Press any button to skip",tapToSkip:"Tap to skip",beats:["Long ago, in the kingdom of Astra…","The kingdom lived in peace.","Until Lord Draxos came.","He kidnapped Princess Astra.","And vanished into deep space.",`The Scientists handed Vexo the Super Mega Tablet.

Can you save her?`]},surface:{town:"AN UNNAMED WORLD",street:"unknown ground",ground:{plain:"open plain",savanna:"dry grassland",forest:"forest",hills:"hill country",mountain:"bare mountain",snow:"snowfield",dunes:"sand sea",stone:"stone desert",salt:"salt pan",badlands:"badlands",mesa:"plateau country",beach:"shoreline",sea:"open water"},leaveHint:"Descend to land · climb to leave the atmosphere"},onFoot:{skip:"Press any button to skip",climbOut:"L / A — land and climb out",noRoom:"No room to climb out here — move the ship",board:"L / A — climb back in",controls:"W A S D / stick — walk · Shift / B — sprint"},map:{title:"THE WORLD",hint:"M / − — close · the whole continent, every inch of it",scale:"{km} × {kmZ} km · {m} m per pixel",building:"drawing the world… {pct}%"},gameOver:{title:"GAME OVER",ask:"Continue from your last save?",noSave:"You have no saved game. Start again?",yes:"YES — CONTINUE",no:"NO — TITLE SCREEN",hint:"← → to choose · Enter / A to take it"},inventory:{title:"GEAR",weapons:"Weapons",empty:"Nothing yet.",hint:"T / + — close · ← → or L / R — tabs · B / Esc — back",turnHint:"Drag, or A / D, to turn him",tablet:"Tablet",system:"System",save:"SAVE GAME",neverSaved:"Not saved yet.",savedJustNow:"Saved just now.",savedSecondsAgo:"Saved a few seconds ago.",savedMinutesAgo:"Saved {n} minutes ago.",saveFailed:"Couldn't save — this browser won't let the game store anything.",starterGun:"Sidearm",starterGunNote:"Equipped"},hud:{appName:"Tablet",velocity:"VEL",orientation:"ORI",fps:"FPS",dampingOn:"damping: ON",dampingOff:"damping: OFF",fastTravelButton:"FAST TRAVEL",fastTravelHint:"R1 / F",fastTravelActive:"warping…",rovers:"ROVERS",credits:"CRED",hackHint:"Hold L1 / H to hack",upgradeButton:"UPGRADES",upgradeHint:"Y / U",upgradeBought:"OWNED",upgradeBuy:"BUY",upgradeClose:"Close",screenHint:"Stick / swipe = scroll · B / Esc = back to Tablet",missionCompleteTitle:"MISSION COMPLETE",missionCompleteBody:"All rovers repaired. Earth Command transfers a bonus to your account.",missionCompleteCta:"Open Upgrades",missionCompleteClose:"Continue Flying",resetHint:"L3 / R = reset",tabletHint:"T / + — GEAR · M / − — MAP"}};function QM(){const i=document.createElement("div");i.id="tablet",i.innerHTML=`
    <div class="tablet-frame">
      <div class="tablet-bezel">
        <div class="tablet-screen">
          <div class="tablet-titlebar">
            <span class="tablet-app">${Ne.hud.appName}</span>
            <span class="tablet-source" data-source>KB</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Ne.hud.velocity}</span>
            <span class="tablet-value" data-velocity>0.0</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Ne.hud.orientation}</span>
            <span class="tablet-value" data-orientation>0°,0°,0°</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Ne.hud.fps}</span>
            <span class="tablet-value" data-fps>--</span>
          </div>
          <div class="tablet-row tablet-row--small">
            <span class="tablet-value" data-damping>${Ne.hud.dampingOff}</span>
          </div>

          <!-- Mission panel: rover progress + credits -->
          <div class="tablet-mission" data-mission hidden>
            <div class="tablet-row">
              <span class="tablet-label">${Ne.hud.rovers}</span>
              <span class="tablet-value" data-rovers>0/0</span>
            </div>
            <div class="tablet-row">
              <span class="tablet-label">${Ne.hud.credits}</span>
              <span class="tablet-value" data-credits>0</span>
            </div>
            <!-- Hack prompt: only visible when a rover is in range -->
            <div class="tablet-hack" data-hack hidden>
              <div class="tablet-hack__name" data-hack-name>—</div>
              <div class="tablet-hack__hint">${Ne.hud.hackHint}</div>
              <div class="tablet-hack__bar"><div class="tablet-hack__fill" data-hack-fill></div></div>
            </div>
          </div>

          <button class="tablet-app-btn" data-fast-travel type="button">
            <span class="tablet-app-btn__icon">⤴</span>
            <span class="tablet-app-btn__label">${Ne.hud.fastTravelButton}</span>
            <span class="tablet-app-btn__key">${Ne.hud.fastTravelHint}</span>
          </button>
          <button class="tablet-app-btn" data-upgrades type="button">
            <span class="tablet-app-btn__icon">⚙</span>
            <span class="tablet-app-btn__label">${Ne.hud.upgradeButton}</span>
            <span class="tablet-app-btn__key">${Ne.hud.upgradeHint}</span>
          </button>
          <div class="tablet-row tablet-row--hint" data-reset-hint hidden>
            ${Ne.hud.resetHint}
          </div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const e=document.createElement("div");e.id="tablet-hint",e.textContent=Ne.hud.tabletHint,e.hidden=!0,document.body.appendChild(e);const t=i.querySelector("[data-velocity]"),n=i.querySelector("[data-orientation]"),s=i.querySelector("[data-fps]"),r=i.querySelector("[data-source]"),o=i.querySelector("[data-damping]"),a=i.querySelector("[data-fast-travel]"),c=i.querySelector("[data-upgrades]"),l=i.querySelector("[data-reset-hint]"),u=i.querySelector("[data-mission]"),h=i.querySelector("[data-rovers]"),d=i.querySelector("[data-credits]"),f=i.querySelector("[data-hack]"),g=i.querySelector("[data-hack-name]"),x=i.querySelector("[data-hack-fill]");let m=0,p=0,S=0;return{element:i,update({velocity:v,eulerDeg:y,dt:C,sources:E,dampingOn:T}){t.textContent=v.toFixed(1),n.textContent=`${y.x.toFixed(0)}°, ${y.y.toFixed(0)}°, ${y.z.toFixed(0)}°`,m+=1,p+=C,p>=.5&&(S=Math.round(m/p),m=0,p=0,s.textContent=String(S)),r.textContent=E.join("+"),o.textContent=T?Ne.hud.dampingOn:Ne.hud.dampingOff},show(){e.hidden=!0},hide(){e.hidden=!1},toggle(){return e.hidden=!e.hidden,!e.hidden},setHintVisible(v){e.hidden=!v},showFastTravel(){a.classList.add("tablet-app-btn--visible")},showUpgrades(){c.classList.add("tablet-app-btn--visible")},showResetHint(){l.hidden=!1},setMissionVisible(v){u.hidden=!v},updateMission({remaining:v,total:y,credits:C}){h.textContent=`${y-v}/${y}`,d.textContent=String(C)},updateHack({name:v,progress:y}){if(!v){f.hidden=!0;return}f.hidden=!1,g.textContent=v,x.style.width=`${Math.max(0,Math.min(1,y))*100}%`},onUpgradesClick(v){c.addEventListener("click",v)},setFastTravelActive(v){a.classList.toggle("tablet-app-btn--active",v);const y=a.querySelector(".tablet-app-btn__label");y.textContent=v?Ne.hud.fastTravelActive:Ne.hud.fastTravelButton,a.disabled=v},onFastTravel(v){a.addEventListener("click",v)}}}function eS(){const i=document.createElement("div");i.id="title-card";const e="2026-08-31 08:50";i.innerHTML=`
    <div class="title-card__inner">
      <h1 class="title-card__title">${Ne.title}</h1>
      <p class="title-card__prompt">${su?Ne.tapToStart:Ne.pressAnyKey}</p>
      <p class="title-card__build">build ${e}</p>
    </div>
  `,document.body.appendChild(i);let t=null;return{hide(){i.style.opacity="0"},show(){t&&(clearTimeout(t),t=null),i.classList.remove("title-card--hidden"),i.style.opacity="",i.isConnected||document.body.appendChild(i)},dismiss(){i.classList.add("title-card--hidden"),t=setTimeout(()=>{i.remove(),t=null},500)}}}const tS=1.2,Pf=540;function nS(i){const e=document.createElement("div");e.id="warp-flash",i.appendChild(e);let t=!1,n=0,s=!1,r=null,o=!1,a=null;function c(u,h={}){return t?!1:(t=!0,n=0,s=!1,r=h.onDone??null,o=!0,a=u,u.velocity.set(0,0,0),!0)}function l(u){if(!t)return;n+=u;const d=Math.max(0,Math.min(1,n/tS));let f;if(d<.4?f=d/.4:d<.6?f=1:f=1-(d-.6)/.4,e.style.opacity=String(Math.max(0,Math.min(1,f))),!s&&d>=.5&&a&&(a.mesh.position.set(0,0,Pf),a.velocity.set(0,0,0),a.mesh.quaternion.identity(),s=!0),d>=1){t=!1,o=!1,e.style.opacity="0";const g=r;r=null,a=null,g&&g()}}return{begin:c,update:l,get active(){return t},get suppressInput(){return o},targetZ:Pf}}const iS=""+new URL("invincibility_theme-K-djvXIp.mp3",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,If=80,sS=18,rS=.06,oS=2.5,Lf=280,aS=520,cS=.18,lS=.18,Nf=.45,uS=.3;function hS(){let i=null,e=null,t=!1,n=0,s=!1,r=null,o=null,a=null,c=0;function l(){if(s)return!0;const p=window.AudioContext||window.webkitAudioContext;return p?(i=new p,r=i.createGain(),r.gain.value=1,r.connect(i.destination),o=dS(i,r),a=fS(i,r),s=!0,!0):!1}function u(p){s&&(c=Math.min(1,Math.abs(p)))}function h(p){t=p,p&&(e||(e=new Audio(iS),e.loop=!0,e.preload="auto",e.volume=0),e.paused&&(e.currentTime=0,e.play().catch(()=>{})))}function d(p){if(!e)return;const S=t?Nf:0,v=p/uS*Nf;n=S>n?Math.min(S,n+v):Math.max(S,n-v),e.volume=n,n===0&&!e.paused&&e.pause()}function f(p){if(d(p),!s)return;const S=1-Math.pow(2,-p/lS),v=a.gainNode.gain.value,y=c*cS,C=v+(y-v)*S;a.gainNode.gain.setValueAtTime(C,i.currentTime);const E=Lf+c*aS;a.filter.frequency.setValueAtTime(E,i.currentTime)}function g(){if(e&&(e.pause(),e=null,t=!1,n=0),!!s){try{o.osc1.stop(),o.osc2.stop()}catch{}try{a.source.stop()}catch{}i.close(),s=!1,i=null}}function x({fromHz:p=300,toHz:S=900,durationS:v=.35,peakGain:y=.18}={}){if(!s)return;const C=i.currentTime,E=i.createOscillator();E.type="sine",E.frequency.setValueAtTime(p,C),E.frequency.exponentialRampToValueAtTime(S,C+v);const T=i.createGain();T.gain.setValueAtTime(0,C),T.gain.linearRampToValueAtTime(y,C+.03),T.gain.exponentialRampToValueAtTime(1e-4,C+v),E.connect(T),T.connect(r),E.start(C),E.stop(C+v+.05)}function m(){x({fromHz:440,toHz:660,durationS:.45,peakGain:.2}),setTimeout(()=>x({fromHz:660,toHz:990,durationS:.6,peakGain:.22}),200)}return{start:l,setSprinting:h,update:f,setThrottle:u,chirp:x,fanfare:m,dispose:g,get running(){return s}}}function dS(i,e){const t=i.createOscillator(),n=i.createOscillator();t.type="triangle",n.type="triangle",t.frequency.value=If,n.detune.value=sS,n.frequency.value=If;const s=i.createBiquadFilter();s.type="lowpass",s.frequency.value=320,s.Q.value=.7;const r=i.createGain();return r.gain.value=rS,t.connect(s),n.connect(s),s.connect(r),r.connect(e),t.start(),n.start(),{osc1:t,osc2:n,filter:s,gain:r}}function fS(i,e){const t=i.sampleRate,n=i.createBuffer(1,t*oS,t),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=i.createBufferSource();r.buffer=n,r.loop=!0;const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=Lf,o.Q.value=1.2;const a=i.createGain();return a.gain.value=0,r.connect(o),o.connect(a),a.connect(e),r.start(),{source:r,filter:o,gainNode:a}}const pS=8,mS=2,gS=100,Ta={ACTIVE:"active",COMPLETE:"complete"};function _S(i){const{rovers:e,markFixed:t}=i;let n=0,s=Ta.ACTIVE,r=null,o=null,a=null,c=null;function l(p){a=p}function u(p){c=p}function h(){let p=0;for(const S of e)S.fixed||(p+=1);return p}function d(){return e.length}function f(p,S){if(S>pS)return null;let v=null,y=nn.hackRadius*nn.hackRadius;for(const C of e){if(C.fixed)continue;const E=C.position.x-p.x,T=C.position.y-p.y,b=C.position.z-p.z,P=E*E+T*T+b*b;P<y&&(y=P,v=C)}return v}function g({shipPos:p,shipSpeed:S,holdActive:v,dt:y}){if(r=f(p,S),s!==Ta.ACTIVE){o=null;return}if(v&&r){if(o!==r&&(o=r,o.repairProgress=0),o.repairProgress=Math.min(1,o.repairProgress+y/mS),o.repairProgress>=1&&!o.fixed){const C=o;t(C),n+=C.creditValue,c&&c(C),o=null,h()===0&&(s=Ta.COMPLETE,n+=gS,a&&a())}}else o&&(o.repairProgress=0,o=null)}function x(p){return p>n?!1:(n-=p,!0)}function m(){n=0,s=Ta.ACTIVE,r=null,o=null}return{get state(){return s},get credits(){return n},get inRange(){return r},get repairing(){return o},grantCredits(p){n=Math.max(0,Math.round(p))},remaining:h,totalRovers:d,update:g,spendCredits:x,setOnComplete:l,setOnRepaired:u,reset:m}}function xS(){const i=[{id:"throttle",label:"Boost Throttle",description:"Push the engines harder. +40% forward acceleration, +25% top speed.",cost:100,bought:!1,apply(){nn.maxThrottleAccel*=1.4,nn.maxSpeed*=1.25}},{id:"agility",label:"Sharper Turning",description:"Twitch-faster yaw and pitch. +35% on both rates.",cost:90,bought:!1,apply(){nn.yawRate*=1.35,nn.pitchRate*=1.35}},{id:"hackRange",label:"Long-Range Hack",description:"The Tablet locks on from further out. Hack radius +50%.",cost:80,bought:!1,apply(){nn.hackRadius*=1.5}}];function e(s,r){const o=i.find(a=>a.id===s);return!o||o.bought||!r.spendCredits(o.cost)?!1:(o.apply(),o.bought=!0,!0)}function t(s){const r=i.find(o=>o.id===s);return!r||r.bought?!1:(r.apply(),r.bought=!0,!0)}function n(){for(const s of i)s.bought=!1}return{upgrades:i,buy:e,buyFree:t,reset:n}}function vS({upgrades:i,mission:e,audio:t,onClose:n}){const s=document.createElement("div");s.id="mission-screens",s.innerHTML=`
    <div class="screen-overlay" id="screen-complete" data-screen="complete" hidden>
      <div class="screen-card">
        <h2 class="screen-card__title">${Ne.hud.missionCompleteTitle}</h2>
        <p class="screen-card__body">${Ne.hud.missionCompleteBody}</p>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-complete-credits>0</span></span>
        </div>
        <div class="screen-card__actions">
          <button class="screen-btn screen-btn--primary" data-action="open-upgrades">${Ne.hud.missionCompleteCta}</button>
          <button class="screen-btn" data-action="close-complete">${Ne.hud.missionCompleteClose}</button>
        </div>
      </div>
    </div>

    <div class="screen-overlay" id="screen-upgrades" data-screen="upgrades" hidden>
      <div class="screen-card screen-card--wide">
        <h2 class="screen-card__title">${Ne.hud.upgradeButton}</h2>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-upgrades-credits>0</span></span>
        </div>
        <p class="screen-card__hint">${Ne.hud.screenHint}</p>
        <ul class="upgrade-list" data-upgrade-list></ul>
        <div class="screen-card__actions">
          <button class="screen-btn" data-action="close-upgrades">${Ne.hud.upgradeClose}</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(s);const r=s.querySelector("#screen-complete"),o=s.querySelector("[data-complete-credits]"),a=s.querySelector("#screen-upgrades"),c=s.querySelector("[data-upgrades-credits]"),l=s.querySelector("[data-upgrade-list]");function u(){c.textContent=String(e.credits),l.innerHTML="";for(const p of i.upgrades){const S=document.createElement("li");S.className="upgrade-item"+(p.bought?" upgrade-item--bought":"");const v=!p.bought&&e.credits>=p.cost;S.innerHTML=`
        <div class="upgrade-item__head">
          <span class="upgrade-item__name">${p.label}</span>
          <span class="upgrade-item__cost">${p.cost} c</span>
        </div>
        <p class="upgrade-item__desc">${p.description}</p>
        <button class="screen-btn screen-btn--small" data-buy="${p.id}" ${p.bought||!v?"disabled":""}>
          ${p.bought?Ne.hud.upgradeBought:Ne.hud.upgradeBuy}
        </button>
      `,l.appendChild(S)}}function h(p){p==="complete"?(o.textContent=String(e.credits),r.hidden=!1):p==="upgrades"&&(u(),a.hidden=!1)}function d(p){p==="complete"?r.hidden=!0:p==="upgrades"&&(a.hidden=!0)}function f(){d("complete"),d("upgrades")}function g(){return!r.hidden||!a.hidden}function x(){return a.hidden?r.hidden?null:r.querySelector(".screen-card"):a.querySelector(".screen-card")}function m(p){const S=x();S&&(S.scrollTop+=p)}return s.addEventListener("click",p=>{const S=p.target;if(!(S instanceof Element))return;const v=S.getAttribute("data-action");if(v==="open-upgrades"){d("complete"),h("upgrades");return}if(v==="close-complete"){d("complete"),n?.();return}if(v==="close-upgrades"){d("upgrades"),n?.();return}const y=S.getAttribute("data-buy");y&&i.buy(y,e)&&(t&&t.chirp({fromHz:520,toHz:780,durationS:.25,peakGain:.18}),u())}),{show:h,hide:d,hideAll:f,isOpen:g,scrollBy:m}}const Df=40;function yS(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#0c3a66"),s.addColorStop(.5,"#1b6aa3"),s.addColorStop(1,"#0c3a66"),n.fillStyle=s,n.fillRect(0,0,1024,512);const r=[];for(let a=0;a<6;a++)r.push({x:Math.random()*1024,y:512*.25+Math.random()*512*.5,r:50+Math.random()*90});for(const a of r){const c=8+Math.floor(Math.random()*6);for(let l=0;l<c;l++){const u=(Math.random()-.5)*a.r*1.6,h=(Math.random()-.5)*a.r*1,d=18+Math.random()*45,f=Math.random()<.35;n.beginPath(),n.fillStyle=f?"rgba(30, 70, 30, 0.85)":"rgba(70, 130, 55, 0.9)",n.arc(a.x+u,a.y+h,d,0,Math.PI*2),n.fill()}}for(let a=0;a<60;a++){const c=Math.random()*1024,l=Math.random()*512,u=14+Math.random()*50;n.beginPath(),n.fillStyle=`rgba(245, 250, 255, ${.1+Math.random()*.12})`,n.arc(c,l,u,0,Math.PI*2),n.fill()}for(const a of[0,512]){const c=n.createRadialGradient(512,a,0,512,a,153.6);c.addColorStop(0,"rgba(240, 248, 255, 0.85)"),c.addColorStop(1,"rgba(240, 248, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,1024,512)}const o=new Ji(t);return o.colorSpace=Et,o}function MS(){const i=new Ze(Df,64,32),e=new Je({map:yS(),roughness:.85,metalness:0,emissive:1296}),t=new re(i,e),n=new tn({color:6990591,transparent:!0,opacity:.18,blending:ei,side:Wt}),s=new re(new Ze(Df*1.05,64,32),n);t.add(s);const r=.05;function o(a){t.rotation.y+=r*a}return{mesh:t,update:o}}const Uf=14,Of=4.5,SS=.9;function bS(){const i=new at,e=new Hl(1,0);e.scale(Of,Of,Uf*.5);const t=new Je({color:3807780,roughness:.45,metalness:.6,emissive:3149848,flatShading:!0}),n=new re(e,t);i.add(n);const s=new tn({color:16724016}),r=new re(new Ze(SS,12,8),s);r.position.set(0,0,Uf*.55),i.add(r);const o=document.createElement("canvas");o.width=o.height=128;{const h=o.getContext("2d"),d=64,f=h.createRadialGradient(d,d,0,d,d,d);f.addColorStop(0,"rgba(255, 60, 60, 1)"),f.addColorStop(.3,"rgba(255, 30, 30, 0.6)"),f.addColorStop(1,"rgba(255, 30, 30, 0)"),h.fillStyle=f,h.fillRect(0,0,128,128)}const a=new Ji(o);a.colorSpace=Et;const c=new wd(new Ml({map:a,transparent:!0,blending:ei,depthWrite:!1}));c.position.copy(r.position),c.scale.setScalar(5.5),i.add(c);const l=new Ht(.35,1.4,6);l.translate(0,0,-1.5);const u=new Je({color:1837586,roughness:.6,metalness:.5,emissive:2099216,flatShading:!0});for(const h of[-1,1]){const d=new re(l,u);d.position.set(h*2.6,0,-2.5),d.rotation.z=h*.25,d.rotation.y=h*.2,i.add(d)}return{group:i,hull:n,core:r,halo:c}}const Ra=i=>i*i*(3-2*i),wS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ru=[3.5,3,4,4,3.5,4.5];function ES({renderer:i}){const e=new Pr;e.background=new Ve(66055);const t=new Dt(50,window.innerWidth/window.innerHeight,.1,5e3);t.position.set(0,8,140),t.lookAt(0,0,0),e.add(new ya(10141920,1052704,.7));const n=new ui(16773848,1.1);n.position.set(50,30,80),e.add(n);const s=mf();e.add(s);const r=MS();e.add(r.mesh);const o=bS();o.group.position.set(200,30,30),o.group.rotation.y=-.6,e.add(o.group);const a=new tn({color:16732224,transparent:!0,opacity:0,blending:ei,depthWrite:!1,side:Xt}),c=new re(new un(2,60,16,1,!0),a);c.rotation.x=Math.PI,e.add(c);const l=document.createElement("div");l.id="cinematic",l.innerHTML=`
    <div class="cinematic__skip" data-skip>${su?Ne.intro.tapToSkip:Ne.intro.skip}</div>
    <div class="cinematic__text" data-text></div>
    <div class="cinematic__flash" data-flash></div>
  `,document.body.appendChild(l);const u=l.querySelector("[data-text]"),h=l.querySelector("[data-flash]");let d=0,f=0,g=0,x=!0,m=!0;function p(P,_,M){switch(P){case 0:{r.mesh.position.set(0,0,0),r.mesh.scale.setScalar(1+.02*Math.sin(g*.5)),o.group.position.x=200,c.material.opacity=0;break}case 1:{r.mesh.position.set(0,0,0),t.position.x=-10+20*wS(_),t.lookAt(0,0,0);break}case 2:{const F=140+-45*Ra(_);t.position.set(0,8,F),t.lookAt(0,0,0);const z=140,V=38;o.group.position.x=z+(V-z)*Ra(_),o.group.position.z=30-10*Ra(_),o.group.rotation.y=-.6-.4*Ra(_);break}case 3:{t.position.set(0,8,95),o.group.position.x=38,o.group.position.z=20,o.group.rotation.y=-1,c.material.opacity=.4+.35*Math.sin(g*12);const F=o.group.position,z=r.mesh.position;c.position.set((F.x+z.x)/2,(F.y+z.y)/2,(F.z+z.z)/2),c.lookAt(z),c.rotateX(Math.PI/2),t.position.x=Math.sin(g*30)*.4,t.position.y=8+Math.cos(g*27)*.3,t.position.z=95,t.lookAt(0,0,0);break}case 4:{o.group.position.x=38,o.group.position.z=20,t.position.set(0,8,95),t.lookAt(0,0,0),_<.5?(h.style.opacity=String(_*2*.95),c.material.opacity=.35*(1-_*2)):(o.group.visible=!1,r.mesh.visible=!1,c.material.opacity=0,h.style.opacity=String(Math.max(0,1-(_-.5)*2)));break}case 5:{h.style.opacity="0";break}}}function S(P){u.innerHTML=P.split(`
`).map(_=>`<p>${_}</p>`).join(""),u.classList.remove("cinematic__text--in"),u.offsetWidth,u.classList.add("cinematic__text--in")}function v(){d+=1,f=0,m=!0,d>=ru.length&&y()}function y(){x&&(x=!1,l.remove(),e.traverse(P=>{P.geometry&&P.geometry.dispose();const _=Array.isArray(P.material)?P.material:P.material?[P.material]:[];for(const M of _)M.map&&M.map.dispose(),M.dispose()}))}function C(){y()}function E(P){if(!x)return;g+=P,f+=P,m&&(S(Ne.intro.beats[d]),m=!1);const _=Math.min(1,f/ru[d]);p(d,_),r.update(P),o.halo.material.opacity=.7+.25*Math.sin(g*4),gf(s,t),f>=ru[d]&&v()}function T(){x&&i.render(e,t)}function b(P=window.innerWidth,_=window.innerHeight){t.aspect=P/_,t.updateProjectionMatrix()}return{update:E,render:T,skip:C,onResize:b,get active(){return x}}}function AS(){if(!(new URLSearchParams(window.location.search).get("debugPad")==="1"))return{update(){}};const e=document.createElement("div");e.id="debug-pad",Object.assign(e.style,{position:"fixed",top:"8px",left:"8px",zIndex:"9999",background:"rgba(0,0,0,0.78)",color:"#9af0a0",font:"11px ui-monospace, Menlo, Consolas, monospace",padding:"8px 10px",maxWidth:"min(92vw, 520px)",maxHeight:"60vh",overflow:"auto",border:"1px solid #3a3",borderRadius:"4px",whiteSpace:"pre-wrap",pointerEvents:"none",lineHeight:"1.35"}),document.body.appendChild(e);function t(){const n=Cf(),s=n?window.__p5NativeHost===!0?"__p5NativeHost=true":"webkit.messageHandlers":"(none — desktop / non-wrapper)",r=window.__nativeGamepadBridgeReady===!0,o=window.__nativeGamepadUpdateCount||0,a=window.__nativeGamepadLastRaw,c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[],l=c&&c[0];let u="(no pad)";if(l){const h=[];for(let d=0;d<l.buttons.length;d++)l.buttons[d]&&l.buttons[d].pressed&&h.push(d);u=`id=${JSON.stringify(l.id)}
mapping=${l.mapping}
axes=[${l.axes.map(d=>d.toFixed(2)).join(", ")}]
pressed buttons=[${h.join(", ")||"(none)"}]`}return["=== gamepad debug ===",`bridge available: ${n}  (${s})`,`bridge module ready: ${r}`,`__nativeGamepadUpdate calls: ${o}`,`last raw payload: ${a?JSON.stringify(a).slice(0,240):"(none yet)"}`,"","--- navigator.getGamepads()[0] ---",u].join(`
`)}return{update(){e.textContent=t()}}}const TS=[0,120,350,700],RS=2;function CS(i){const e=i.getBoundingClientRect(),t=Math.max(1,Math.round(e.width||window.innerWidth)),n=Math.max(1,Math.round(e.height||window.innerHeight));return{width:t,height:n,pixelRatio:Math.min(window.devicePixelRatio||1,RS)}}function PS(i,e){let t={width:0,height:0,pixelRatio:0};const n=[];function s(){const a=CS(i);a.width===t.width&&a.height===t.height&&a.pixelRatio===t.pixelRatio||(t=a,e(a))}function r(){for(const a of n.splice(0))clearTimeout(a);for(const a of TS)n.push(setTimeout(s,a))}const o=new ResizeObserver(s);return o.observe(i),window.addEventListener("resize",s),window.addEventListener("orientationchange",r),window.visualViewport?.addEventListener("resize",s),window.addEventListener("pageshow",r),screen.orientation?.addEventListener("change",r),s(),{measure:s,dispose(){for(const a of n.splice(0))clearTimeout(a);o.disconnect(),window.removeEventListener("resize",s),window.removeEventListener("orientationchange",r),window.visualViewport?.removeEventListener("resize",s),window.removeEventListener("pageshow",r),screen.orientation?.removeEventListener("change",r)}}}const IS=new N(0,1.4,-5.5),ou=zi.degToRad(180),au=zi.degToRad(85),LS=.04,NS=.09,Ff=new N(1,0,0),Bf=new N(0,1,0);function kf(i){return i<-1?-1:i>1?1:i}function Ca(i,e){return i<-e?-e:i>e?e:i}function cu(i,e){return 1-Math.pow(2,-i/e)}function DS(i){let e=0,t=0,n=0,s=0,r=!1;const o=new N,a=new N,c=new N;return{get orbit(){return{yaw:e,pitch:t}},reset(){e=0,t=0,n=0,s=0,r=!1},update(l,u,h){const d=kf(u?.x??0),f=kf(u?.y??0);if(n=Ca(n+(u?.turnX??0),ou),s=Ca(s-(u?.turnY??0),au),Math.abs(d)>.05||Math.abs(f)>.05){const p=cu(h,.25);n-=n*p,s-=s*p}const g=Ca(d*ou+n,ou),x=Ca(-f*au+s,au),m=cu(h,NS);e+=(g-e)*m,t+=(x-t)*m,o.copy(IS).multiplyScalar(l.mesh.scale.x).applyAxisAngle(Ff,t).applyAxisAngle(Bf,e).applyQuaternion(l.mesh.quaternion),a.copy(l.mesh.position).add(o),r?i.position.lerp(a,cu(h,LS)):(i.position.copy(a),r=!0),c.set(0,1,0).applyAxisAngle(Ff,t).applyAxisAngle(Bf,e).applyQuaternion(l.mesh.quaternion),i.up.copy(c),i.lookAt(l.mesh.position)}}}const zf=6,_t=i=>i/zf,bn=_t(3400),nr=_t(2100),Hf=_t(3100),Gf=_t(480),US=_t(25),OS=_t(300),ir=2e4,FS=62e3,Ci=6e4,Qi=4e4,BS=.8,es=0,Vf=Math.tan(33*Math.PI/180);function kS(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const lu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],zS=.5*(Math.sqrt(3)-1),Qr=(3-Math.sqrt(3))/6;function Pa(i){const e=kS(i),t=new Uint8Array(512),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1)),o=n[s];n[s]=n[r],n[r]=o}for(let s=0;s<512;s++)t[s]=n[s&255];return function(r,o){const a=(r+o)*zS,c=Math.floor(r+a),l=Math.floor(o+a),u=(c+l)*Qr,h=r-(c-u),d=o-(l-u),f=h>d?1:0,g=h>d?0:1,x=h-f+Qr,m=d-g+Qr,p=h-1+2*Qr,S=d-1+2*Qr,v=c&255,y=l&255;let C=0,E=.5-h*h-d*d;if(E>0){const P=lu[t[v+t[y]]&7];E*=E,C+=E*E*(P[0]*h+P[1]*d)}let T=.5-x*x-m*m;if(T>0){const P=lu[t[v+f+t[y+g]]&7];T*=T,C+=T*T*(P[0]*x+P[1]*m)}let b=.5-p*p-S*S;if(b>0){const P=lu[t[v+1+t[y+1]]&7];b*=b,C+=b*b*(P[0]*p+P[1]*S)}return 70*C}}const eo=i=>i<0?0:i>1?1:i,sn=(i,e,t)=>{const n=eo((t-i)/(e-i));return n*n*(3-2*n)},ts=(i,e,t)=>i+(e-i)*t,Xe={SEA:"sea",BEACH:"beach",PLAIN:"plain",SAVANNA:"savanna",FOREST:"forest",HILLS:"hills",MOUNTAIN:"mountain",SNOW:"snow",DUNES:"dunes",STONE_DESERT:"stone",SALT:"salt",BADLANDS:"badlands",MESA:"mesa"},jt={[Xe.SEA]:1915725,[Xe.BEACH]:13482642,[Xe.PLAIN]:6056771,[Xe.SAVANNA]:8680794,[Xe.FOREST]:3755310,[Xe.HILLS]:5465665,[Xe.MOUNTAIN]:8223340,[Xe.SNOW]:15265008,[Xe.DUNES]:11040327,[Xe.STONE_DESERT]:7369301,[Xe.SALT]:15721154,[Xe.BADLANDS]:9073235,[Xe.MESA]:10714715};function HS({seed:i=20260827}={}){const e=Pa(i),t=Pa(i+101),n=Pa(i+202),s=Pa(i+303);function r(b,P,_,M,F,z=.38){let V=0,Y=1,A=0,G=1/F;for(let U=0;U<M;U++)V+=b(P*G,_*G)*Y,A+=Y,Y*=z,G*=2.02;return V/A}function o(b,P,_,M,F,z=.42){let V=0,Y=1,A=0,G=1/F,U=1;for(let q=0;q<M;q++){let B=1-Math.abs(b(P*G,_*G));B*=B,B*=U,U=eo(B*2.2),V+=B*Y,A+=Y,Y*=z,G*=2.02}return V/A}function a(b,P,_,M){return[b+r(n,b,P,2,M)*_,P+r(s,b,P,2,M)*_]}function c(b,P){const _=r(e,b,P,4,FS,.42)*1.05+.46,M=Math.max(Math.abs(b)/Ci,Math.abs(P)/Qi),F=sn(BS,1.02,M)*2.4+Math.max(0,M-1)*3;return _-F}function l(b,P){return eo(.5+r(t,b+4e3,P-9e3,3,ir*1.4,.45)*.95)}function u(b,P){return eo(.5+r(n,b-21e3,P+12e3,3,ir,.45)*.95)}function h(b,P){return eo(.5+r(s,b*.3+7e3,P,2,ir*2.4,.45)*.95)}function d(b,P,_){const M=b/P,F=Math.floor(M),z=M-F;return(F+sn(0,1,Math.min(1,z*_)))*P}const f=.22,g=nr*f*Vf;function x(b){const P=b-Math.floor(b),_=1-f;if(P<_){const M=P/_;return M*M*(3-2*M)}return 1-(P-_)/f}function m(b,P){return{continent:c(b,P),uplift:l(b,P),moisture:u(b,P),heat:h(b,P)}}const p=_t(150);function S(b,P,_){return b<p*.8&&_>.5?.05:.12+P*.45}function v(b){const{uplift:P,moisture:_}=b,M=1-_;return{alpine:sn(.56,.92,P)*(1-sn(.42,.62,M)),plateau:sn(.58,.72,M)*sn(.36,.52,P)*(1-sn(.66,.84,P)),sandy:sn(.64,.84,M)*(1-sn(.34,.6,P))}}function y(b,P,_){const M=_??m(b,P),{continent:F,uplift:z,moisture:V}=M,Y=1-V,{alpine:A,plateau:G,sandy:U}=v(M);let q=r(e,b,P,3,ir*.9)*_t(90);if(q+=r(t,b,P,3,bn*3.2)*Gf*(.04+z*z*1.6),A>.001){const[ye,ue]=a(b,P,bn*.75,bn*6);let xe=o(e,ye,ue,5,bn*4);xe=Math.pow(xe,1.25),q=ts(q,q+xe*Hf,A)}if(G>.01){const ye=_t(1500)*(.45+z*.8)+r(t,b,P,2,bn*6)*_t(260),[ue,xe]=a(b,P,bn*.8,bn*5),te=sn(.55,.92,o(s,ue,xe,3,bn*3))*_t(1100);q=ts(q,d(ye-te,_t(170),3.2),G)}if(U>.001){const ye=r(t,b,P,2,ir*2)*.9,ue=b*Math.cos(ye)+P*Math.sin(ye),xe=r(n,b,P,2,nr*5)*nr*.5,Le=x((ue+xe)/nr),te=x((ue*2.7-xe)/nr);q+=(Le*.78+te*.22)*g*U}if(Y>.5&&q<p&&F>.12){const ye=sn(.5,.72,Y)*sn(p,_t(20),q);q=ts(q,p*.55,ye*.95)}const[B,W]=a(b,P,bn*1.2,bn*7),j=o(n,B,W,3,bn*5),ie=sn(.5,.98,j);ie>.001&&(q-=ie*_t(340)*(.06+z*z*1.1)*(1-G*.8));const K=S(q,z,Y);K>.01&&(q+=r(s,b,P,3,17,.5)*K);const J=_t(760)*sn(-.05,.55,F),ce=sn(-.1,.14,F),fe=ts(-_t(900),_t(10),sn(-.6,.14,F));return ts(fe,q+J,ce)}function C(b,P,_=4){const M=m(b,P),F=y(b,P,M),z=y(b+_,P)-y(b-_,P),V=y(b,P+_)-y(b,P-_),Y=Math.atan(Math.hypot(z,V)/(2*_));return{height:F,slope:Y,slopeDeg:Y*180/Math.PI,region:M,biome:E(b,P,F,Y,M)}}function E(b,P,_,M,F){if(_<=es)return Xe.SEA;const{uplift:z,moisture:V,heat:Y}=F,A=1-V,G=M*180/Math.PI,{alpine:U,plateau:q,sandy:B}=v(F),W=ts(_t(2700),_t(6400),Y);if(_>W&&!(q>U))return Xe.SNOW;const j=W*.62;return _<_t(40)&&G<3&&A<.55?Xe.BEACH:q>.35&&q>=U?_<p*.8&&G<2.5?Xe.SALT:z>.44?Xe.MESA:Xe.BADLANDS:B>.35&&B>=U?_<p*.8&&G<2.5?Xe.SALT:Xe.DUNES:A>.58?_<p*.8&&G<2.5?Xe.SALT:G>30||_>j?Xe.MOUNTAIN:Xe.STONE_DESERT:G>30||_>j?Xe.MOUNTAIN:V<.5?Xe.SAVANNA:z>.62||G>13?Xe.HILLS:V>.66?Xe.FOREST:Xe.PLAIN}function T(b,P){return C(b,P).biome}return{heightAt:y,sampleAt:C,biomeAt:T,regionAt:m,continentField:c,upliftField:l,moistureField:u,heatField:h,styleAt:v,snowlineAt(b,P){return ts(_t(2700),_t(6400),h(b,P))},seaLevel:es,constants:{SHRINK:zf,RIDGE_SPACING:bn,DUNE_SPACING:nr,MOUNTAIN_RELIEF:Hf,HILL_RELIEF:Gf,PLAIN_RELIEF:US,DUNE_HEIGHT:OS,REGION_SIZE:ir,REPOSE:Vf}}}const to=6,hi=17,Wf=64,no=7,Xf=2,uu=Wf*Xf**(no-1)*to/2,Ia=new Ve,Kn=new Ve,La={height:0,slopeDeg:0,region:null},GS=3,sr=i=>i<0?0:i>1?1:i,Na=(i,e,t)=>{const n=sr((t-i)/(e-i));return n*n*(3-2*n)},hu=_t(140),qf=_t(45),VS=8;function WS({seed:i=20260827}={}){const e=HS({seed:i}),t=new at,n=new Je({vertexColors:!0,roughness:.96,metalness:0,flatShading:!1}),s=[];for(let b=0;b<no;b++){const P=Wf*Xf**b,_={tileSize:P,step:P/(hi-1),centre:{i:NaN,j:NaN},holeKey:null,tiles:[],spare:[],group:new at};_.group.renderOrder=no-b;for(let M=0;M<to*to+12;M++){const F=new Fs(P,P,hi-1,hi-1);F.rotateX(-Math.PI/2),F.setAttribute("color",new Tt(new Float32Array(hi*hi*3),3));const z=new re(F,n);z.name=`ground-r${b}`,z.receiveShadow=!0,z.frustumCulled=!0,z.matrixAutoUpdate=!1,_.tiles.push({mesh:z,i:NaN,j:NaN}),_.group.add(z)}s.push(_),t.add(_.group)}for(let b=1;b<no;b++)s[b].group.position.y=-.05*s[b].step;const r=new re(new Fs(uu*2.4,uu*2.4,1,1),new Je({color:jt[Xe.SEA],roughness:.22,metalness:.1,transparent:!0,opacity:.88}));r.rotation.x=-Math.PI/2,r.position.y=es,r.renderOrder=no+1,t.add(r);function o(b,P,_,M){const{height:F,slopeDeg:z,region:V}=_,Y=1-V.moisture,{sandy:A,plateau:G}=e.styleAt(V);M.setHex(jt[Xe.FOREST]),M.lerp(Kn.setHex(jt[Xe.PLAIN]),Na(.28,.44,Y)),M.lerp(Kn.setHex(jt[Xe.SAVANNA]),Na(.42,.58,Y)),M.lerp(Kn.setHex(jt[Xe.STONE_DESERT]),Na(.55,.68,Y)),M.lerp(Kn.setHex(jt[Xe.MESA]),G*.85),M.lerp(Kn.setHex(jt[Xe.DUNES]),A);const U=sr((z-24)/22);U>0&&M.lerp(Kn.setHex(7169884),U*.85);const q=e.snowlineAt(b,P),B=sr((F-q*.86)/(q*.3));if(B>0&&M.lerp(Kn.setHex(jt[Xe.SNOW]),B*sr(1-z/52)),Y>.5&&F<hu&&z<4&&M.lerp(Kn.setHex(jt[Xe.SALT]),Na(hu,hu*.4,F)*.9),F<qf&&F>es){const W=1-sr(F/qf);M.lerp(Kn.setHex(jt[Xe.BEACH]),W*W*.8)}return F<=es&&M.lerp(Kn.setHex(860464),sr(-F/_t(500))),M}const a=2,c=hi+a*2,l=new Float64Array(c*c);function u(b,P,_,M){const F=_*b.tileSize,z=M*b.tileSize,V=P.mesh.geometry.attributes.position,Y=P.mesh.geometry.attributes.color,A=P.mesh.geometry.attributes.normal,G=V.array,U=Y.array,q=A.array,B=b.step,W=F-b.tileSize/2,j=z-b.tileSize/2;for(let J=0;J<c;J++){const ce=j+(J-a)*B;for(let fe=0;fe<c;fe++)l[J*c+fe]=e.heightAt(W+(fe-a)*B,ce)}const ie=Math.max(1,Math.min(a,Math.round(VS/B))),K=2*ie*B;for(let J=0;J<hi;J++)for(let ce=0;ce<hi;ce++){const ye=(J*hi+ce)*3,ue=ce+a,xe=J+a,Le=W+ce*B,te=j+J*B,D=l[xe*c+ue];G[ye]=Le-F,G[ye+1]=D,G[ye+2]=te-z;const pe=(l[xe*c+ue+ie]-l[xe*c+ue-ie])/K,me=(l[(xe+ie)*c+ue]-l[(xe-ie)*c+ue])/K,se=Math.hypot(pe,1,me);q[ye]=-pe/se,q[ye+1]=1/se,q[ye+2]=-me/se,La.height=D,La.slopeDeg=Math.atan(Math.hypot(pe,me))*180/Math.PI,La.region=e.regionAt(Le,te),o(Le,te,La,Ia),U[ye]=Ia.r,U[ye+1]=Ia.g,U[ye+2]=Ia.b}V.needsUpdate=!0,Y.needsUpdate=!0,A.needsUpdate=!0,P.mesh.geometry.computeBoundingSphere(),P.mesh.position.set(F,0,z),P.mesh.visible=!0,P.mesh.updateMatrix(),P.i=_,P.j=M}function h(b,P){return Math.round((b/P-1)/2)*2+1}let d=0,f=0;const g=[];function x(b,P){let _=null;for(const M of s){const F=h(b,M.tileSize),z=h(P,M.tileSize),V=_;_={x:F*M.tileSize,z:z*M.tileSize,half:to*M.tileSize/2};const Y=V?`${V.x},${V.z}`:"";if(F===M.centre.i&&z===M.centre.j&&Y===M.holeKey)continue;M.centre.i=F,M.centre.j=z,M.holeKey=Y;const A=(to-1)/2,G=new Set;for(let B=-A;B<=A;B++)for(let W=-A;W<=A;W++){if(V){const j=(F+W)*M.tileSize,ie=(z+B)*M.tileSize,K=M.tileSize/2;if(Math.abs(j-V.x)+K<=V.half&&Math.abs(ie-V.z)+K<=V.half)continue}G.add(`${F+W},${z+B}`)}const U=new Set,q=[];for(const B of M.tiles){const W=`${B.i},${B.j}`;G.has(W)&&!U.has(W)?U.add(W):q.push(B)}for(const B of q)B.mesh.visible=!1,B.i=NaN,B.j=NaN;M.spare=q;for(let B=g.length-1;B>=0;B--)g[B].ring===M&&g.splice(B,1);for(const B of G){if(U.has(B))continue;const[W,j]=B.split(",").map(Number);g.push({ring:M,i:W,j,d2:(W*M.tileSize-b)**2+(j*M.tileSize-P)**2})}}g.sort((M,F)=>M.d2-F.d2),r.position.x=b,r.position.z=P,m(GS)}function m(b){const P=performance.now();for(;g.length&&performance.now()-P<b;){const _=g.shift(),M=_.ring.spare.pop();M&&(u(_.ring,M,_.i,_.j),d++)}f=performance.now()-P}function p(b,P){return e.heightAt(b,P)}function S(b,P,_=3){const M=e.sampleAt(b,P,Math.max(2,_));return M.height>es+1.5&&M.slopeDeg<12}const v=38,y=[0,0];function C(b,P,_,M=[]){const F=e.sampleAt(b,P,2);if(M[0]=b,M[1]=P,F.slopeDeg<=v)return M;const z=4,V=e.heightAt(b+z,P)-e.heightAt(b-z,P),Y=e.heightAt(b,P+z)-e.heightAt(b,P-z),A=Math.hypot(V,Y);if(A<1e-5)return M;y[0]=V/A,y[1]=Y/A;const G=Math.max(.35,_??.5);return M[0]=b-y[0]*G,M[1]=P-y[1]*G,M}function E(){for(let b=1;b<6e3;b++){const P=140*Math.sqrt(b),_=Math.cos(b*.7)*P,M=Math.sin(b*.7)*P,F=e.sampleAt(_,M,6);if(!(F.height<12||F.slopeDeg>5)&&!(F.biome===Xe.SEA||F.biome===Xe.SALT))return{x:_,z:M,height:F.height,biome:F.biome}}return{x:0,z:0,height:e.heightAt(0,0),biome:e.biomeAt(0,0)}}const T=E();return{group:t,terrain:e,setFocus:x,flush(){m(1/0)},update(){},groundHeightAt:p,resolveWalk:C,isClear:S,findLandingSite:E,spawn:new N(T.x,T.height,T.z),heading:-Math.PI/2,info:{name:"an unnamed world",biomeAt:(b,P)=>e.biomeAt(b,P),get tilesBuilt(){return d},get build(){return{ms:+f.toFixed(2),queued:g.length}},reach:uu}}}const Qe=new N(0,-2e4,0),XS=22,qS=1500,Yf=1,YS=4,KS=1,Kf=10340847,$S=700,jS=11e3,$f=24e3;function JS(i,e,t,n=()=>{}){const s=WS();s.group.position.copy(Qe),s.group.visible=!1,i.add(s.group);const r=new N().copy(s.spawn);let o=!1;const a=t.far,c=1.6,l=.9,u=new ui(16774112,0);u.position.set(-260,420,180).add(Qe),u.target.position.copy(Qe),i.add(u.target),i.add(u);const h=new ya(12377343,6978386,0);h.position.copy(Qe),i.add(h);const d=document.createElement("div");d.id="landing-banner",d.hidden=!0,d.innerHTML=`
    <div class="landing-banner__town"></div>
    <div class="landing-banner__street"></div>
    <div class="landing-banner__hint"></div>
  `,document.body.appendChild(d),d.querySelector(".landing-banner__town").textContent=Ne.surface.town,d.querySelector(".landing-banner__street").textContent=Ne.surface.street,d.querySelector(".landing-banner__hint").textContent=Ne.surface.leaveHint;const f=new Kt;let g=!1,x=!1,m=0;const p=new N,S=i.background,v=i.fog.color.clone();function y(_){return _.mesh.position.distanceTo(jr)<Jr+XS}function C(_){return _.mesh.position.y-Qe.y}const E=[[0,0],[1.4,0],[-1.25,0],[0,.9],[0,-.9]];function T(_){const M=f.setFromQuaternion(_.mesh.quaternion,"YXZ"),F=Math.sin(M.y),z=Math.cos(M.y),V=_.mesh.scale.x;let Y=-1/0;for(const[A,G]of E){const U=_.mesh.position.x+(F*A+z*G)*V,q=_.mesh.position.z+(z*A-F*G)*V,B=s.groundHeightAt(U-Qe.x,q-Qe.z);B>Y&&(Y=B)}return Y}function b(_){if(g)return;g=!0,p.copy(_.mesh.position).sub(jr).setLength(Jr+60).add(jr),s.group.visible=!0,u.intensity=c,h.intensity=l,_.mesh.scale.setScalar(YS);for(const F of e)F.visible=!1;i.background=new Ve(Kf),i.fog.color.setHex(Kf),i.fog.near=$S,i.fog.far=jS;const M=o?r:s.spawn;o=!0,s.setFocus(M.x,M.z),s.flush(),_.mesh.position.set(M.x,s.groundHeightAt(M.x,M.z)+90,M.z).add(Qe),_.mesh.quaternion.setFromEuler(new Kt(0,s.heading,0,"YXZ")),_.velocity.set(0,0,0),t.far=$f,t.updateProjectionMatrix(),n(),d.querySelector(".landing-banner__street").textContent=Ne.surface.ground[s.info.biomeAt(M.x,M.z)]??Ne.surface.street,d.hidden=!1,d.classList.remove("landing-banner--fading"),m=6}function P(_){if(!g)return;g=!1,x=!1,_.mesh.scale.setScalar(1),r.set(_.mesh.position.x-Qe.x,0,_.mesh.position.z-Qe.z),t.far=a,t.updateProjectionMatrix(),s.group.visible=!1,u.intensity=0,h.intensity=0;for(const F of e)F.visible=!0;i.background=S,i.fog.color.copy(v),i.fog.near=cf,i.fog.far=lf,_.mesh.position.copy(p);const M=p.clone().sub(jr).normalize();_.mesh.quaternion.setFromUnitVectors(new N(0,0,1),M),_.velocity.set(0,0,0),n(),d.hidden=!0}return{get active(){return g},get parked(){return x},world:s,enter:b,exit:P,altitude:C,hullGroundY(_){return Qe.y+T(_)},park(){x=!0},unpark(){x=!1},prewarm(_,M){s.setFocus(s.spawn.x,s.spawn.z),s.flush(),s.group.visible=!0,u.intensity=c,h.intensity=l,_.compile(i,M);const F=new Dt(60,M.aspect,.1,$f);F.position.copy(Qe).add(s.spawn).add(new N(0,160,320)),F.lookAt(new N().copy(Qe).add(s.spawn)),_.render(i,F),s.group.visible=!1,u.intensity=0,h.intensity=0,_.render(i,M)},update(_,M){if(!g){y(_)&&b(_);return}if(s.update(M),s.setFocus(_.mesh.position.x-Qe.x,_.mesh.position.z-Qe.z),x){m>0&&(m-=M,m<=0&&d.classList.add("landing-banner--fading"));return}const F=C(_),z=T(_);F<z+Yf&&(_.mesh.position.y=Qe.y+z+Yf,_.velocity.y<0&&(_.velocity.y=0)),F>qS&&P(_),m>0&&(m-=M,m<=0&&d.classList.add("landing-banner--fading"))},reset(_){P(_)}}}const ZS=38,QS=19,e1=45,jf=1.5,Jf=.25,t1=.5,Da=1;function n1(i){let e=Da,t=0;const n=[];return{get scale(){return e},sample(s){const r=s*1e3;if(r>250||(n.push(r),n.length<e1))return;const o=[...n].sort((l,u)=>l-u),a=o[Math.floor(o.length/2)];if(n.length=0,t>0)return;let c=e;a>ZS?c=Math.max(t1,e-Jf):a<QS&&(c=Math.min(Da,e+Jf)),c!==e&&(e=c,t=jf,i(e))},update(s){t>0&&(t-=s)},reset(){e!==Da&&(e=Da,n.length=0,t=jf,i(e))}}}class du extends Pr{constructor(){super();const e=new Ht;e.deleteAttribute("uv");const t=new Je({side:Wt}),n=new Je,s=new ql(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new re(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new re(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new re(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new re(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new re(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new re(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new re(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new re(e,rr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new re(e,rr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new re(e,rr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new re(e,rr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new re(e,rr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new re(e,rr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function rr(i){const e=new tn;return e.color.setScalar(i),e}function Dn(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Rt;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Zf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const g=Zf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Zf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Tt(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Qf(i,e){if(e===Mm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Bc||e===dh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Bc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const di=.181,Un=.032;function i1({metal:i,polymer:e,glow:t}){const n=new at,s=[],r=[],o=[],a=(d,f,g,x,m,p)=>{const S=new Ht(d,f,g);return S.translate(x,m,p),S};s.push(a(Un,.027,di*.92,0,.021,.012));{const d=new St(Un*.5,Un*.5,di*.92,10,1,!1,0,Math.PI);d.rotateZ(Math.PI/2),d.rotateY(Math.PI/2),d.translate(0,.034,.012),s.push(d)}for(let d=0;d<5;d++)s.push(a(Un+.002,.02,.004,0,.022,-.052-d*.008));r.push(a(.003,.016,.042,Un*.5,.026,.03));{const d=new St(.0085,.0085,.02,10);d.rotateX(Math.PI/2),d.translate(0,.022,di*.47),s.push(d)}s.push(a(.005,.008,.005,0,.05,di*.42)),s.push(a(.008,.008,.006,-.009,.05,-.07)),s.push(a(.008,.008,.006,.009,.05,-.07)),o.push(a(.0035,.0035,.0035,0,.052,di*.42+.002)),r.push(a(Un-.004,.016,di*.55,0,0,.038)),r.push(a(.014,.005,.05,0,-.009,.05)),r.push(a(.012,.03,.006,0,-.02,.028)),r.push(a(.012,.006,.045,0,-.033,.006)),r.push(a(.012,.022,.006,0,-.024,-.014)),r.push(a(.007,.018,.005,0,-.017,.004));{const d=new Ht(Un-.005,.095,.032);d.translate(0,-.055,-.03),d.rotateX(-.34),d.translate(0,0,-.006),r.push(d);const f=new Ht(Un-.002,.008,.036);f.translate(0,-.104,-.062),f.rotateX(-.1),r.push(f);const g=new Ht(.006,.05,.005);g.translate(Un*.48-.004,-.055,-.03),g.rotateX(-.34),o.push(g)}o.push(a(.0035,.004,.075,Un*.5,.016,.01)),o.push(a(.0035,.004,.075,-Un*.5,.016,.01)),n.add(new re(Dn(s),i)),n.add(new re(Dn(r),e)),n.add(new re(Dn(o),t));const c=new tn({color:16773296,transparent:!0,opacity:.75,depthWrite:!1}),l=new re(new un(.022,.062,6),c);l.rotation.x=Math.PI/2,l.position.set(0,.022,di*.52),l.visible=!1,n.add(l);let u=0;const h=new N(0,.022,di*.5);return{group:n,getMuzzle(d){return n.updateWorldMatrix(!0,!1),d.copy(h).applyMatrix4(n.matrixWorld)},getAim(d){n.updateWorldMatrix(!0,!1);const f=n.matrixWorld.elements;return d.set(f[8],f[9],f[10]).normalize()},fire(){u=.055,l.visible=!0,l.rotation.z=Math.random()*Math.PI,l.scale.setScalar(.85+Math.random()*.4)},update(d){u<=0||(u-=d,u<=0?l.visible=!1:c.opacity=Math.min(1,u/.03))},length:di}}const On=1.8,s1=4146511,r1=5857646,o1=2303790,io=5504925,ep=8257456,a1=4835583,c1=14198404,l1=3810328;function u1(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,256,256),t.lineCap="square",t.strokeStyle="#5effa6";for(let s=0;s<14;s++){let r=Math.random()*256,o=Math.random()*256;t.lineWidth=Math.random()<.3?2:1,t.beginPath(),t.moveTo(r,o);const a=2+Math.floor(Math.random()*4);for(let c=0;c<a;c++)c%2===0?o+=(Math.random()-.35)*90:r+=(Math.random()-.5)*70,t.lineTo(r,o);t.stroke(),t.fillStyle="#9dffcb",t.fillRect(r-2,o-2,4,4),t.fillStyle="#5effa6"}const n=new Ji(e);return n.wrapS=_i,n.wrapT=_i,n.colorSpace=Et,n}function h1(i,e,t){const n=new zr,s=-i/2,r=-e/2,o=Math.max(.001,Math.min(t,i/2-.001,e/2-.001));return n.moveTo(s+o,r),n.lineTo(s+i-o,r),n.absarc(s+i-o,r+o,o,-Math.PI/2,0),n.lineTo(s+i,r+e-o),n.absarc(s+i-o,r+e-o,o,0,Math.PI/2),n.lineTo(s+o,r+e),n.absarc(s+o,r+e-o,o,Math.PI/2,Math.PI),n.lineTo(s,r+o),n.absarc(s+o,r+o,o,Math.PI,Math.PI*1.5),n}function Fn(i,e,t,n,s=0,r=0,o=0,a=.02){const c=Math.min(.012,t*.35),l=new Ys(h1(i,e,a),{depth:Math.max(.001,t-c*2),bevelEnabled:!0,bevelThickness:c,bevelSize:c,bevelSegments:2,curveSegments:4});l.center();const u=new re(l,n);return u.position.set(s,r,o),u}function so(i,e,t,n,s=16){const r=new at;r.add(new re(new St(i,e,t,s),n));const o=new re(new Ze(i,s,8),n);o.position.y=t/2,o.scale.y=.7,r.add(o);const a=new re(new Ze(e,s,8),n);return a.position.y=-t/2,a.scale.y=.7,r.add(a),r}function Ua(i,e,t=0){const n=new re(new Ze(i,16,12),e);return n.position.y=t,n}function d1(){const i=[[.001,0],[.15,0],[.168,.04],[.163,.12],[.178,.2],[.2,.3],[.212,.38],[.208,.46],[.17,.52],[.09,.55],[.001,.555]].map(([t,n])=>new ge(t,n)),e=new pa(i,28);return e.scale(1.06,1,.84),e}function fu({suitLight:i=!0,environment:e=null}={}){const t=new at,n=new at;t.add(n);const s=u1(),r=new Je({color:s1,metalness:.62,roughness:.38,emissive:io,emissiveMap:s,emissiveIntensity:.34}),o=new Je({color:r1,metalness:.7,roughness:.3,emissive:io,emissiveMap:s,emissiveIntensity:.22}),a=new Je({color:o1,metalness:.25,roughness:.72,emissive:io,emissiveMap:s,emissiveIntensity:.3}),c=new Je({color:c1,metalness:0,roughness:.72}),l=new Je({color:l1,metalness:0,roughness:.9}),u=new Je({color:ep,emissive:ep,emissiveIntensity:1.6,transparent:!0,opacity:.58,metalness:.4,roughness:.08}),h=new tn({color:a1}),d=new Je({color:863004,emissive:io,emissiveIntensity:1.15,metalness:.2,roughness:.35});if(e)for(const I of[r,o,a,c,l,u,d])I.envMap=e,I.envMapIntensity=.55;const f=new re(d1(),a);f.position.y=.97,n.add(f);const g=new re(new Ze(.19,28,18,Math.PI*.22,Math.PI*.56,Math.PI*.16,Math.PI*.5),r);g.scale.set(1.12,1.16,.92),g.position.set(0,1.33,.006),n.add(g);const x=Fn(.028,.19,.03,o,0,1.35,.155,.012);n.add(x);const m=new re(new Wn(.125,.026,10,24,Math.PI*1.15),r);m.rotation.set(Math.PI/2,0,Math.PI*.92),m.position.set(0,1.465,.01),m.scale.z=.8,n.add(m);const p=Fn(.25,.3,.05,r,0,1.3,-.11,.07);p.rotation.x=-.06,n.add(p);const S=new re(new Wn(.153,.034,12,32),o);S.rotation.x=Math.PI/2,S.position.y=.99,S.scale.set(1.06,.86,1),n.add(S);const v=new re(new Ze(.042,16,12),h);v.scale.set(1.5,1,.45),v.position.set(0,.99,.132),n.add(v);const y=new re(new Ze(.152,20,14),r);y.scale.set(1.04,.58,.82),y.position.y=.905,n.add(y);const C=so(.052,.058,.08,a,12);C.position.y=1.55,n.add(C);const E=new re(new Ze(.105,24,20),c);E.scale.set(.95,1.14,1),E.position.y=1.66,n.add(E);const T=new re(new Ze(.07,20,16),c);T.scale.set(.94,.82,1.04),T.position.set(0,1.6,.014),n.add(T);const b=new re(new un(.018,.042,8),c);b.rotation.x=Math.PI*.52,b.position.set(0,1.646,.095),n.add(b);for(const I of[-1,1]){const O=new re(new Ze(.022,10,8),c);O.scale.set(.5,1,.8),O.position.set(I*.096,1.655,.005),n.add(O)}const P=[],_=new $e,M=new Yt,F=new N,z=new N,V=new N,Y=new N(0,1,0),A=new N(0,0,1);function G(I,O,H,k){I.applyMatrix4(_.compose(O,H,k)),P.push(I)}const U=[[0,1.732,-.012,.088],[-.06,1.722,.028,.064],[.06,1.726,.024,.066],[0,1.71,-.07,.074],[-.082,1.7,-.024,.06],[.084,1.703,-.02,.058],[.026,1.757,-.005,.048],[-.032,1.752,-.036,.046],[-.056,1.692,.056,.044],[.058,1.694,.053,.042]];for(const[I,[O,H,k,Q]]of U.entries())G(new Ze(Q,10,8),F.set(O,H,k),M.setFromEuler(new Kt(I%3*.18,I*.7,(I%5-2)*.12)),z.set(1.12,.72,1.1));const q=[[-.05,1.736,.055,.048,1.5,.35,-.6,.72],[-.008,1.744,.062,.05,1.55,.3,-.45,.84],[.038,1.74,.056,.046,1.45,.55,-.5,.67],[.074,1.728,.03,.04,1.35,.85,-.35,.4],[-.03,1.764,.03,.048,1.5,-.25,.25,.94],[.028,1.768,.012,.05,1.6,.42,.62,.66],[-.02,1.766,-.03,.048,1.5,-.3,.6,-.74],[.042,1.756,-.036,.044,1.45,.5,.15,-.85],[-.084,1.72,.014,.044,1.5,-.5,-.1,.86],[-.086,1.712,-.038,.042,1.45,-.45,-.05,-.89],[.086,1.722,.01,.046,1.5,.5,-.05,.86],[.088,1.714,-.036,.042,1.45,.45,-.1,-.89],[-.032,1.72,-.078,.046,1.55,-.2,.05,-.98],[.03,1.724,-.08,.048,1.6,.2,.15,-.97],[0,1.7,-.082,.042,1.4,0,-.35,-.94]];for(const[I,[O,H,k,Q,de,he,Me,Ae]]of q.entries()){V.set(he,Me,Ae).normalize(),G(new Ze(Q,10,8),F.set(O,H,k),M.setFromUnitVectors(A,V),z.set(.62,.44,de));const Ue=Q*de*.66,Re=I%3===0?.052:I%3===1?.04:.032,Ke=new un(Q*.62,Re,3);Ke.translate(0,Re*.42,0),G(Ke,F.set(O,H,k).addScaledVector(V,Ue),M.setFromUnitVectors(Y,V),z.set(.85,1,.5))}const B=[[-.07,1.75,0,.042,-.5,.75,.44],[.012,1.782,-.01,.046,.15,.95,-.28],[.066,1.756,.02,.038,.7,.66,.28],[-.05,1.73,.072,.034,-.1,.3,.95],[.05,1.736,-.07,.04,.35,.45,-.82],[-.088,1.73,-.01,.036,-.85,.42,.3],[.03,1.706,-.094,.032,.2,-.1,-.97],[-.026,1.776,.03,.04,-.2,.85,.49]];for(const[I,O,H,k,Q,de,he]of B){V.set(Q,de,he).normalize();const Me=new un(.014,k,3);Me.translate(0,k*.4,0),G(Me,F.set(I,O,H),M.setFromUnitVectors(Y,V),z.set(.9,1,.55))}const W=1.706,j=Dn(P);j.translate(0,-W,0);const ie=new re(j,l);ie.position.y=W,n.add(ie);const K=new re(new St(.109,.109,.04,28,1,!0,-Math.PI*.28,Math.PI*.56),u);K.position.set(0,1.668,.004),K.scale.set(1,1,.94),n.add(K);const J=new re(new St(.104,.104,.052,28,1,!0,-Math.PI*.29,Math.PI*.58),o);J.position.set(0,1.668,.004),J.scale.set(1,1,.94),n.add(J);for(const I of[-1,1]){const O=new re(new St(.005,.005,.085,8),o);O.rotation.set(Math.PI/2,0,0),O.position.set(I*.098,1.668,-.028),n.add(O)}for(const I of[-1,1]){const O=new re(new Ze(.036,16,12),o);O.scale.set(.55,1,.9),O.position.set(I*.107,1.658,0),n.add(O)}const ce=new re(new St(.005,.005,.11,8),o);ce.position.set(-.078,1.618,.062),ce.rotation.set(-.5,0,.7),n.add(ce);const fe=new re(new Ze(.012,10,8),h);fe.position.set(-.048,1.588,.097),n.add(fe);const ye=1.25,ue=[],xe=[];for(const I of[-1,1]){const O=new at;O.position.set(I*.215,1.44,0),n.add(O),O.add(Ua(.072,a));const H=new re(new Ze(.108,20,14,0,Math.PI*2,0,Math.PI*.58),r);H.scale.set(1.04,1.05,1.08),H.position.y=.012,H.rotation.z=I*.22,O.add(H);const k=new re(new Ze(.088,18,10,0,Math.PI*2,Math.PI*.34,Math.PI*.2),o);k.position.y=-.032,k.rotation.z=I*.22,O.add(k);const Q=so(.058,.05,.24,a);Q.position.y=-.17,O.add(Q);const de=new re(new Wn(.055,.015,10,20),o);de.rotation.x=Math.PI/2,de.position.y=-.12,O.add(de),O.add(Ua(.052,r,-.3));const he=new at;he.position.y=-.3,O.add(he),xe.push({shoulder:O,forearm:he,side:I});const Me=so(.052,.045,.22,a);Me.position.y=-.12,he.add(Me);const Ae=new re(new St(.062,.05,.17,16),r);Ae.position.y=-.14,Ae.scale.z=.92,he.add(Ae);const Ue=Fn(.1,.055,.09,o,0,-.052,.006,.026);he.add(Ue);const Re=new at;Re.position.set(0,-.28,.004),Re.rotation.y=-I*1.15,Re.scale.setScalar(ye),he.add(Re);const Ke=Fn(.056,.078,.032,a,0,.004,0,.018);Ke.rotation.x=.06,Re.add(Ke);const We=new re(new Ln(.011,.045,3,8),a);We.rotation.z=Math.PI/2,We.position.set(0,-.032,.003),Re.add(We);const st=[{len:.044,r:.0078,open:.3,grip:1.15,splay:.05},{len:.047,r:.008,open:.36,grip:1.75,splay:.02},{len:.043,r:.0075,open:.44,grip:1.85,splay:-.02},{len:.035,r:.0068,open:.52,grip:1.9,splay:-.06}],pt=[];for(const[wt,ct]of st.entries()){const dn=new re(new Ln(ct.r,ct.len*.55,3,8),a),pi=new re(new Ln(ct.r*.86,ct.len*.42,3,8),a);pt.push({near:dn,far:pi,spec:ct,index:wt,side:I}),Re.add(dn),Re.add(pi)}const je=new re(new Ln(.0092,.032,3,8),a);Re.add(je),ue.push({group:Re,fingers:pt,thumb:je,side:I});const Be=Fn(.034,.052,.008,d,I*.055,-.145,.004,.008);Be.rotation.y=I*Math.PI/2,he.add(Be),O.rotation.z=I*.11,O.rotation.x=.04}let Le=null,te=null,D=!1,pe=!0;const me=[];for(const I of[-1,1]){const O=new at;O.position.set(I*.098,.8,0),n.add(O),O.add(Ua(.082,a));const H=so(.085,.07,.34,a);H.position.y=-.2,O.add(H);const k=Fn(.125,.25,.05,r,0,-.19,.045,.05);if(k.rotation.x=-.05,O.add(k),I>0){const pt=Fn(.052,.115,.062,r,I*.086,-.235,.004,.016);pt.rotation.set(.12,I*.3,0),O.add(pt);const je=Fn(.06,.022,.07,o,I*.086,-.19,.004,.008);je.rotation.set(0,I*.3,0),O.add(je);const Be=i1({metal:r,polymer:a,glow:d});Le=Be,te=O,Te(),O.add(Be.group)}else for(const[pt,je]of[-.185,-.245].entries()){const Be=Fn(.042,.052,.05,o,I*.086,je,.004,.01);Be.rotation.y=I*.32,O.add(Be);const wt=Fn(.046,.01,.054,r,I*.086,je+.03,.004,.005);wt.rotation.y=I*.32,O.add(wt)}O.add(Ua(.068,a,-.4));const Q=new re(new Ze(.075,18,12,0,Math.PI*2,0,Math.PI*.55),r);Q.rotation.x=Math.PI*.42,Q.position.set(0,-.405,.028),O.add(Q);const de=new at;de.position.y=-.4,O.add(de);const he=new at;he.position.y=-.3,de.add(he),me.push({hip:O,shin:de,ankle:he,side:I});const Me=so(.068,.055,.32,a);Me.position.y=-.18,de.add(Me);const Ae=new re(new St(.072,.06,.27,16,1,!0,-1.1,2.2),r);Ae.position.set(0,-.175,.008),Ae.scale.z=1.1,de.add(Ae);const Ue=new re(new Ze(.075,18,14),r);Ue.scale.set(.95,.72,1.5),Ue.position.set(0,-.035,.03),he.add(Ue);const Re=Fn(.105,.07,.11,r,0,-.012,.072,.03);Re.rotation.x=.22,he.add(Re);const Ke=new re(new Ze(.055,16,12),o);Ke.scale.set(1,.62,1.15),Ke.position.set(0,-.062,.132),he.add(Ke);const We=new re(new Ze(.05,14,10),o);We.scale.set(1,.7,.9),We.position.set(0,-.057,-.045),he.add(We);const st=new re(new Wn(.042,.011,8,18),h);st.rotation.x=Math.PI/2,st.position.set(0,-.086,.025),he.add(st)}let se=null;i&&(se=new ql(io,.45,2.2,2),se.position.set(0,1.2,.12),n.add(se));function be(I,O){for(const{near:Q,far:de,spec:he,index:Me,side:Ae}of I.fingers){const Ue=(Me-1.5)*.0165*Ae,Re=-.037,Ke=.003,We=he.open+(he.grip-he.open)*O,st=We+(.35+1.15*O),pt=he.len*.55,je=he.len*.42;Q.position.set(Ue,Re-Math.cos(We)*pt*.5,Ke+Math.sin(We)*pt*.5),Q.rotation.set(We,0,he.splay*Ae*(1-O*.6));const Be=Re-Math.cos(We)*pt,wt=Ke+Math.sin(We)*pt;de.position.set(Ue,Be-Math.cos(st)*je*.5,wt+Math.sin(st)*je*.5),de.rotation.set(st,0,he.splay*Ae*(1-O*.6))}const H=I.thumb,k=I.side;H.position.set(k*(.028-.006*O),-.016-.012*O,.014+.022*O),H.rotation.set(.5+O*.85,0,-k*(.7-O*.45))}function Te(){Le.group.position.set(.078,-.175,.014),Le.group.rotation.set(Math.PI/2+.3,.34,.06)}function Ee(I,O=!0){if(pe=O,I===D||!Le)return;D=I;const H=ue.find(k=>k.side>0);I?(H.group.quaternion.setFromRotationMatrix(ne.makeBasis(L,w,$)),H.group.add(Le.group),Le.group.scale.setScalar(1/ye),Le.group.position.set(-.03,-.024,.019),Le.group.rotation.set(0,0,Math.PI/2),be(H,1)):(te.add(Le.group),Le.group.scale.setScalar(1),Te(),be(H,0))}const L=new N(0,0,-1),w=new N(1,0,0),$=new N(0,-1,0),ne=new $e;function oe(){Le&&Le.fire()}const ee=1.02,ke=1.53,le=new at;le.position.y=ee;const we=new at;we.position.y=ke-ee;const it=new Set([y,S,v,...me.map(I=>I.hip)]);se&&it.add(se);for(const I of[...n.children])it.has(I)||(I.position.y-=ee,le.add(I));for(const I of[...le.children])I.position.y+ee>=ke&&(I.position.y-=ke-ee,we.add(I));le.add(we),n.add(le);const _e=f.position.y,Ce=we.position.y;let ze=0,He="idle",Fe=0,Ye=0,Ge=0,lt=0;const X=.04,De=.05,Z=.04;function ae(){const I=Math.sin(ze*1.6);f.position.y=_e+I*.005,f.scale.x=1+I*.006,n.position.set(0,0,0),n.rotation.z=0,le.rotation.set(-I*.006,0,0),we.rotation.set(I*.006,0,0),we.position.y=Ce;for(const O of me)O.hip.rotation.x=0,O.hip.rotation.y=O.side*.07,O.hip.position.z=0,O.shin.rotation.x=0,O.ankle.rotation.x=0;for(const[O,H]of xe.entries())H.shoulder.rotation.x=X+Math.sin(ze*1.6+O)*.012,H.shoulder.rotation.z=H.side*.11,H.forearm.rotation.x=0}const Pe=[[0,28],[12,22],[30,6],[50,-12],[62,-8],[75,16],[88,28],[100,28]],Oe=[[0,4],[12,16],[30,6],[45,14],[60,40],[73,60],[87,26],[100,4]],ot=[[0,0],[8,-8],[30,5],[45,10],[58,-20],[68,-4],[80,2],[100,0]],vt=[[0,42],[10,28],[28,2],[42,-20],[52,-12],[68,24],[85,48],[100,42]],ve=[[0,22],[12,40],[28,26],[42,34],[55,74],[70,112],[86,52],[100,22]],Se=[[0,-6],[8,-14],[26,6],[40,14],[50,-26],[64,-10],[82,-4],[100,-6]],qe=2.8,et=5.4,It=1.5,Vt=2.7;function ln(I){return I<0?0:I>1?1:I}function rn(I,O,H){const k=Ui(I,H);return Ge<=.001?k:k+(Ui(O,H)-k)*Ge}function Ui(I,O){const H=(O%1+1)%1*100;for(let k=1;k<I.length;k++){const[Q,de]=I[k-1],[he,Me]=I[k];if(H<=he){const Ae=(H-Q)/(he-Q);return de+(Me-de)*(Ae*Ae*(3-2*Ae))}}return I[I.length-1][1]}const Zt=Math.PI/180,jn=.8,dr=.4,Jn=.3,us=[[-.045,-.107],[.132,-.096]];function fr(){let I=1/0;for(const O of me){const H=O.hip.rotation.x,k=H+O.shin.rotation.x,Q=k+O.ankle.rotation.x,de=jn-dr*Math.cos(H)-Jn*Math.cos(k);for(const[he,Me]of us){const Ae=de+Me*Math.cos(Q)-he*Math.sin(Q);Ae<I&&(I=Ae)}}return I}function pr(I){const O=Math.max(Fe,.4);Ge+=(ln((O-qe)/(et-qe))-Ge)*(1-Math.pow(2,-I/.18));const H=It+(Vt-It)*Ge;Ye+=O/H*Math.PI*2*I;const k=Ye/(Math.PI*2),Q=Math.min(1.35,.55+O/4);for(const[Ke,We]of me.entries()){const st=k+Ke*.5,pt=rn(Pe,vt,st)*Zt*Q,je=rn(Oe,ve,st)*Zt*Q,Be=rn(ot,Se,st)*Zt*Q;We.hip.rotation.x=-pt,We.hip.rotation.y=We.side*.09,We.shin.rotation.x=je,We.ankle.rotation.x=-Be,We.hip.position.z=Math.sin(st%1*Math.PI*2)*.022*Q}const de=k-De;for(const[Ke,We]of xe.entries()){const st=de+Ke*.5,pt=rn(Pe,vt,st)*Zt*Q*(.5+Ge*.3);We.shoulder.rotation.x=X+pt+Math.sin(ze*.71+Ke)*.012,We.shoulder.rotation.z=We.side*(.11-Math.max(0,-pt)*.28);const je=rn(Pe,vt,st-Z)*Zt*Q*.5;We.forearm.rotation.x=-(.22+Ge*.85+Math.max(0,-je)*1.3)}const he=fr(),Me=Math.max(0,Math.sin(Ye*2))*.055*Ge;n.position.y=-he+Me,n.position.x=Math.sin(Ye)*.022*Q,n.rotation.z=-Math.sin(Ye)*.045*Q;const Ae=Math.sin(de%1*Math.PI*2);le.rotation.y=Ae*.13*Q,le.rotation.z=-n.rotation.z*.55,le.rotation.x=-(.06+Ge*.28)-(.5-.5*Math.cos(Ye*2))*.02;const Ue=Math.sin(ze*2.3);f.position.y=_e+Ue*.004,f.scale.x=1+Ue*.005;const Re=Math.sin(ze*.83)*.035+Math.sin(ze*.37)*.02;we.rotation.y=-le.rotation.y*.75+Re,we.rotation.x=-le.rotation.x*.8+Math.sin(ze*.61)*.015,we.rotation.z=-le.rotation.z*.6,we.position.y=Ce+he*.35}function hs(I){Ye+=I*4.2;for(const[O,H]of me.entries()){const k=Ye+O*Math.PI;H.hip.rotation.x=-.5-Math.sin(k)*.4,H.hip.rotation.y=0,H.hip.position.z=0,H.shin.rotation.x=.95+Math.sin(k)*.45,H.ankle.rotation.x=-.25}for(const[O,H]of xe.entries()){const k=Ye+O*Math.PI+Math.PI;H.shoulder.rotation.x=-2.45+Math.sin(k)*.28,H.shoulder.rotation.z=H.side*.16,H.forearm.rotation.x=-(.5-Math.max(0,Math.sin(k))*.3)}n.position.set(0,0,0),n.rotation.z=0,le.rotation.set(-.12,0,0),we.rotation.set(.2,0,0),we.position.y=Ce,f.position.y=_e}function mo(I){lt+=I;const O=Math.min(1,lt/.35),H=Math.min(1,Math.max(0,(lt-.3)/.5)),k=Math.min(1,Math.max(0,(lt-.7)/.65)),Q=Ae=>Ae*Ae*(3-2*Ae),de=Q(O)*(1-Q(H)),he=Q(H),Me=Q(k);for(const[Ae,Ue]of me.entries())Ue.hip.rotation.x=-he*(.9+Ae*.35)*(1-Me*.35),Ue.hip.rotation.y=Ue.side*.09,Ue.hip.position.z=0,Ue.shin.rotation.x=he*(1.7+Ae*.3),Ue.ankle.rotation.x=-.15*he;for(const[Ae,Ue]of xe.entries())Ue.shoulder.rotation.x=-de*1.5-Me*(.6+Ae*.25),Ue.shoulder.rotation.z=Ue.side*(.11+de*.5+Me*.5),Ue.forearm.rotation.x=-(.3+de*.9);n.rotation.x=de*.28-Me*(Math.PI/2-.12),n.rotation.z=Me*.22,n.position.y=-he*.42-Me*.38,n.position.x=Me*.05,le.rotation.x=de*.3+Me*.25,le.rotation.y=0,le.rotation.z=0,we.rotation.set(de*-.4+Me*.35,0,0),we.position.y=Ce,f.position.y=_e,f.rotation.y=0}function R(I){ze+=I;const O=.85+.25*Math.sin(ze*2.1);if(r.emissiveIntensity=.34*O,o.emissiveIntensity=.22*O,a.emissiveIntensity=.3*O,se&&(se.intensity=.45*O),Le&&Le.update(I),He==="walk"?pr(I):He==="climb"?hs(I):He==="dying"?mo(I):ae(),D&&He!=="dying"){const H=xe.find(k=>k.side>0);if(H.shoulder.rotation.x=pe?-1.42:-.28,H.shoulder.rotation.z=H.side*(pe?.06:.13),H.forearm.rotation.x=pe?-.16:-.55,pe){const k=xe.find(Q=>Q.side<0);k.shoulder.rotation.x=Math.min(k.shoulder.rotation.x,-.35),k.forearm.rotation.x=-.9}}else{const H=ue.find(k=>k.side>0);H.group.rotation.set(0,-H.side*1.15,0)}}return{group:t,update:R,height:On,setArmed:Ee,fire:oe,get pistol(){return Le},getMuzzle(I){return!D||!Le?null:Le.getMuzzle(I)},setGait(I,O=0){I!==He&&(Ye=0,I!=="walk"&&(Ge=0),I==="dying"&&(lt=0)),He=I,Fe=O},get gait(){return He}}}const pu=1.35,tp={red:{skin:12076332,belly:14258282,dark:6044196,hp:2},blue:{skin:4156336,belly:9417949,dark:2832978,hp:3},black:{skin:3880496,belly:9076592,dark:2367260,hp:4},silver:{skin:12173516,belly:15001838,dark:5922920,hp:6}},f1=15129796,p1=7031343;function bt(i,e,t,n,s,r=null,o=null){r&&e.scale(r[0],r[1],r[2]),o&&(o[0]&&e.rotateX(o[0]),o[1]&&e.rotateY(o[1]),o[2]&&e.rotateZ(o[2])),e.translate(t,n,s),i.push(e)}function np({tier:i="red"}={}){const e=tp[i]??tp.red,t=new at,n=new Je({color:e.skin,roughness:.85,metalness:.05}),s=new Je({color:e.dark,roughness:.9,metalness:.05}),r=new Je({color:f1,roughness:.55,metalness:.1}),o=new Je({color:e.belly,roughness:.8,metalness:.04}),a=new Je({color:p1,roughness:.95,metalness:0}),c=.26,l=[],u=[],h=[],d=[];bt(l,new Ze(.23,14,12),0,.76,0,[1.05,.88,.95]),bt(u,new Ze(.16,12,10),0,.77,.11,[1,.8,.6]),bt(l,new Ze(.185,14,12),0,.98,.075,[1.1,.8,.9],[c,0,0]),bt(l,new Ln(.072,.3,4,8),0,1.06,.06,null,[0,0,Math.PI/2]);const f=0,g=1.2,x=.16;bt(l,new Ze(.175,14,12),f,g,x,[1,.95,1.12]),bt(l,new Ze(.1,10,8),f,g+.08,x+.055,[1.25,.42,.8]),bt(l,new St(.062,.095,.19,10),f,g-.045,x+.13,null,[Math.PI/2+.25,0,0]),bt(l,new Ze(.062,10,8),f,g-.085,x+.21);for(const y of[-1,1])bt(h,new Ze(.018,8,6),y*.026,g-.06,x+.235);for(const y of[-1,1])bt(d,new un(.019,.075,6),y*.055,g-.09,x+.16,null,[.35,0,y*.3]);for(const y of[-1,1])bt(l,new un(.085,.2,4),y*.21,g+.06,x-.06,[1,1,.3],[.2,0,y*-1.25]);bt(d,new un(.032,.19,6),f,g+.18,x-.02,null,[-.4,0,0]);for(const y of[-1,1])bt(u,new Ze(.036,10,8),y*.07,g+.02,x+.135,[1,1,.75]),bt(h,new Ze(.018,8,6),y*.074,g+.018,x+.163,[.7,1.25,.7]);bt(h,new St(.185,.225,.19,12),0,.55,0),bt(h,new Wn(.2,.022,6,16),0,.645,0,[1.05,1,.95],[Math.PI/2,0,0]);const m=new at;m.add(new re(Dn(l),n)),m.add(new re(Dn(u),o)),m.add(new re(Dn(h),s)),m.add(new re(Dn(d),r)),t.add(m);const p=[];for(const y of[-1,1]){const C=new at;C.position.set(y*.225,1.05,.05),C.rotation.set(.18,0,y*.2),t.add(C);const E=[];bt(E,new Ln(.05,.15,3,8),0,-.1,.01),bt(E,new Ln(.042,.14,3,8),0,-.26,.045),bt(E,new Ze(.052,8,6),0,-.36,.06),C.add(new re(Dn(E),n)),p.push({group:C,side:y})}const S=[];for(const y of[-1,1]){const C=new at;C.position.set(y*.115,.6,0),t.add(C);const E=[];bt(E,new Ln(.062,.15,3,8),y*.022,-.11,0,null,[0,0,y*-.16]),bt(E,new Ln(.048,.15,3,8),y*.03,-.28,.015,null,[.1,0,y*.12]),bt(E,new Ze(.072,8,6),y*.012,-.4,.045,[.9,.5,1.4]),C.add(new re(Dn(E),n)),S.push({group:C,side:y})}const v=new at;v.position.set(0,-.36,.05),p[0].group.add(v);{const y=[];bt(y,new St(.022,.028,.34,8),0,-.1,0),bt(y,new Ze(.06,8,6),0,-.3,0,[1,1.3,1]);for(const C of[0,1.6,3.1,4.7])bt(y,new un(.018,.06,4),Math.sin(C)*.06,-.3,Math.cos(C)*.06,null,[Math.cos(C)*1.4,0,-Math.sin(C)*1.4]);v.add(new re(Dn(y),a))}return{group:t,body:m,arms:p,legs:S,club:v,tier:i,height:pu,maxHp:e.hp}}class m1 extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new y1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new D1(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Kr.extractUrlBase(e);o=Kr.resolveURL(l,this.path)}else o=Kr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ip){try{o[rt.KHR_BINARY_GLTF]=new U1(e)}catch(h){s&&s(h);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new K1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new x1;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new O1(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new F1;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new B1;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function g1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _1{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ve(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],qt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ui(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ql(u),l.distance=h;break;case"spot":l=new Ey(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class x1{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}}class v1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class y1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(a,a)}return Promise.all(r)}}class M1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class S1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class b1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class w1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class E1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}}class A1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class T1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class R1{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class C1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class P1{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class I1{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class L1{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class N1{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class D1{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const x=new $e,m=new N,p=new Yt,S=new N(1,1,1),v=new Ud(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&S.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,x.compose(m,p,S));for(const y in c)if(y==="_COLOR_0"){const C=c[y];v.instanceColor=new Al(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Mt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const ip="glTF",ro=12,sp={JSON:1313821514,BIN:5130562};class U1{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ro),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ip)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ro,r=new DataView(e,ro);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===sp.JSON){const l=new Uint8Array(e,ro+o,a);this.content=n.decode(l)}else if(c===sp.BIN){const l=ro+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class O1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=gu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=gu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=or[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(f)},a,l,qt,d)})})}}class F1{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class B1{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class rp extends Xr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,S=1-m,v=p-d+h;for(let y=0;y!==a;y++){const C=o[x+y+a],E=o[x+y+c]*u,T=o[g+y+a],b=o[g+y]*u;r[y]=S*C+v*E+m*T+p*b}return r}}const k1=new Yt;class z1 extends rp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return k1.fromArray(r).normalize().toArray(r),r}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},op={9728:on,9729:fn,9984:nh,9985:xo,9986:mr,9987:ti},ap={33071:xi,33648:_o,10497:_i},mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},H1={CUBICSPLINE:void 0,LINEAR:vr,STEP:xr},_u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function G1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Je({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),i.DefaultMaterial}function ns(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function V1(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function W1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function X1(i){let e;const t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xu(t.attributes):e=i.indices+":"+xu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+xu(i.targets[n]);return e}function xu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function vu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function q1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Y1=new $e;class K1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new g1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new by(this.options.manager):this.textureLoader=new Cy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ns(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Kr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=mu[s.type],a=or[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Tt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=mu[s.type],l=or[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let v=t.cache.get(S);v||(x=new l(a,p*f,s.count*f/u),v=new yd(x,f/u),t.cache.add(S,v)),m=new Ir(v,c,d%f/u,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new Tt(x,c,g);if(s.sparse!==void 0){const p=mu.SCALAR,S=or[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new S(o[1],v,s.sparse.count*p),E=new l(o[2],y,s.sparse.count*c);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,b=C.length;T<b;T++){const P=C[T];if(m.setX(P,E[T*c]),c>=2&&m.setY(P,E[T*c+1]),c>=3&&m.setZ(P,E[T*c+2]),c>=4&&m.setW(P,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=op[d.magFilter]||fn,u.minFilter=op[d.minFilter]||ti,u.wrapS=ap[d.wrapS]||_i,u.wrapT=ap[d.wrapT]||_i,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Ot(x);m.needsUpdate=!0,d(m)}),t.load(Kr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),fi(h,o),h.userData.mimeType=o.mimeType||q1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ua,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Tl,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Je}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){const h=s[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Xt);const u=r.alphaMode||_u.OPAQUE;if(u===_u.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===_u.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ge(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==tn){const h=r.emissiveFactor;a.emissive=new Ve().setRGB(h[0],h[1],h[2],qt)}return r.emissiveTexture!==void 0&&o!==tn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ns(s,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return cp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=X1(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=cp(new Rt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?G1(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],m=o[f];let p;const S=l[f];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Cv(x,S):new re(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?p.geometry=Qf(p.geometry,dh):m.mode===wn.TRIANGLE_FAN&&(p.geometry=Qf(p.geometry,Bc));else if(m.mode===wn.LINES)p=new Lv(x,S);else if(m.mode===wn.LINE_STRIP)p=new ca(x,S);else if(m.mode===wn.LINE_LOOP)p=new Nv(x,S);else if(m.mode===wn.POINTS)p=new Pl(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&W1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),fi(p,r),m.extensions&&ns(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ns(s,h[0],r),h[0];const d=new at;r.extensions&&ns(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(zi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ul(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new $e;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new El(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let S=0,v=d.length;S<v;S++){const y=d[S],C=f[S],E=g[S],T=x[S],b=m[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const P=n._createAnimationTracks(y,C,E,T,b);if(P)for(let _=0;_<P.length;_++)p.push(P[_])}return new Gl(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Y1)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Pd:l.length>1?u=new at:l.length===1?u=l[0]:u=new Mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),fi(u,r),r.extensions&&ns(n,u,r),r.matrix!==void 0){const h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new at;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&ns(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof In||d instanceof Ot)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Pi[r.path]===Pi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Pi[r.path]){case Pi.weights:l=$s;break;case Pi.rotation:l=js;break;case Pi.position:case Pi.scale:l=Zs;break;default:n.itemSize===1?l=$s:l=Zs;break}const u=s.interpolation!==void 0?H1[s.interpolation]:vr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Pi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof js?z1:rp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $1(i,e,t){const n=e.attributes,s=new zn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){const u=vu(or[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,c=new N;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=vu(or[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Hn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function cp(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=gu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),fi(i,e),$1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?V1(i,e.targets,t):i})}const j1="Idle",J1=.6,Z1=.1,Q1=new m1;function eb(i,{height:e=On,clip:t=j1}={}){return new Promise((n,s)=>{Q1.load(i,r=>n(tb(r,e,t)),void 0,s)})}function tb(i,e,t){const n=i.scene;n.traverse(h=>{if(h.isMesh){h.castShadow=!0,h.receiveShadow=!0;for(const d of lp(h.material))d&&("roughness"in d&&(d.roughness=J1),"metalness"in d&&(d.metalness=Z1))}});const s=new at;n.updateWorldMatrix(!0,!0);const r=new zn().setFromObject(n),o=r.getSize(new N);if(o.y>1e-4){const h=e/o.y;n.scale.multiplyScalar(h),r.min.multiplyScalar(h),r.max.multiplyScalar(h)}n.position.x-=(r.min.x+r.max.x)/2,n.position.z-=(r.min.z+r.max.z)/2,n.position.y-=r.min.y,s.add(n);const a=new Gy(n),c=new Map;for(const h of i.animations)c.set(h.name,a.clipAction(h));let l=null;function u(h,d=.25){const f=c.get(h);return!f||f===l?!!f:(f.reset().play(),l?l.crossFadeTo(f,d,!1):d>0&&f.fadeIn(d),l=f,!0)}return!u(t,0)&&i.animations.length&&u(i.animations[0].name,0),{group:s,height:e,clips:[...c.keys()],play:u,update(h){a.update(h)},dispose(){a.stopAllAction(),a.uncacheRoot(n),nb(n)}}}function lp(i){return i?Array.isArray(i)?i:[i]:[]}function nb(i){const e=new Set;i.traverse(t=>{if(t.isMesh){t.geometry?.dispose();for(const n of lp(t.material))e.add(n)}});for(const t of e){for(const n of Object.values(t))n&&n.isTexture&&n.dispose();t.dispose()}}const ib=.45;function sb(i){const e=i.split("-")[1]??"red",t=np({tier:e});let n=0;return{...t,update(s){n+=s,t.body.position.y=Math.sin(n*1.8)*.006;for(const[r,o]of t.arms.entries())o.group.rotation.x=.12+Math.sin(n*1.8+r)*.03,o.group.rotation.z=o.side*.18},setGait(){}}}const yu=1.5;function rb({renderer:i,modelUrl:e=null,who:t="vexo"}){const n=new Pr;n.background=new Ve(658966);const s=i.toneMapping,r=i.toneMappingExposure,o=i.outputColorSpace;i.toneMapping=Qu,i.toneMappingExposure=1,i.outputColorSpace=Et;const a=i.shadowMap.enabled,c=i.shadowMap.type;i.shadowMap.enabled=!0,i.shadowMap.type=$u;const l=new Dt(38,window.innerWidth/window.innerHeight,.05,100),u=new Rr(i);n.environment=u.fromScene(new du,.04).texture,n.environmentIntensity=.55,u.dispose(),n.add(new Ry(15266047,.8));const h=new ui(16774634,2.5);h.position.set(5,10,7),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.bias=-1e-4,h.shadow.radius=4,h.shadow.camera.near=8,h.shadow.camera.far=20,h.shadow.camera.left=-1.8,h.shadow.camera.right=1.8,h.shadow.camera.top=1.8,h.shadow.camera.bottom=-1.8,n.add(h);const d=new ui(10273023,1.15);d.position.set(3.2,1.4,1.6),n.add(d);const f=new ui(10420176,1);f.position.set(.6,2,-3.6),n.add(f);const g=new re(new St(.62,.7,.06,48),new Je({color:1053724,metalness:.2,roughness:.85}));g.position.y=-.03,g.receiveShadow=!0,n.add(g);const x=new re(new Wn(.63,.008,8,64),new tn({color:4835583}));x.rotation.x=Math.PI/2,x.position.y=.012,n.add(x);const m=new at;n.add(m);const p=t.startsWith("boko")?sb(t):fu();m.add(p.group),p.group.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0)});let S=!1,v=p;e&&eb(e).then(U=>{if(S){U.dispose();return}m.remove(p.group),m.add(U.group),v=U}).catch(U=>{console.warn(`[character] could not load ${e}, keeping the built-in Vexo:`,U)});let y=0,C=.06,E=0,T=!1,b=0;function P(){const q=On*.52;l.position.set(0,q+Math.sin(C)*3.7,Math.cos(C)*3.7),l.lookAt(0,On*.52,0)}P();function _(U){T=!0,b=U.clientX}function M(U){T&&(y+=(U.clientX-b)*.012,b=U.clientX,E=yu)}function F(){T=!1}function z(U){U.code==="ArrowLeft"&&(y-=.2,E=yu),U.code==="ArrowRight"&&(y+=.2,E=yu),U.code==="ArrowUp"&&(C=Math.min(.9,C+.06),P()),U.code==="ArrowDown"&&(C=Math.max(-.35,C-.06),P())}window.addEventListener("pointerdown",_),window.addEventListener("pointermove",M),window.addEventListener("pointerup",F),window.addEventListener("keydown",z);const V=document.createElement("div");V.id="character-label",V.innerHTML=`
    <div class="character-label__name">VEXO</div>
    <div class="character-label__hint">Drag to turn · ↑ ↓ to tilt</div>
  `,document.body.appendChild(V);function Y(U){E>0?E-=U:T||(y+=ib*U),m.rotation.y=y,v.update(U)}function A(){i.render(n,l)}function G(U=window.innerWidth,q=window.innerHeight){l.aspect=U/q,l.updateProjectionMatrix()}return{update:Y,render:A,onResize:G,dispose(){S=!0,i.toneMapping=s,i.toneMappingExposure=r,i.outputColorSpace=o,i.shadowMap.enabled=a,i.shadowMap.type=c,v!==p&&v.dispose?.(),n.environment?.dispose()},setAngle(U){y=U,E=1/0,m.rotation.y=y},get vexo(){return v}}}const ob=8161430,ab=15659509,up=4828159,hp=.46,Mu=.32,Su=4,cb=Math.ceil(Su/Mu);function lb(){const i=new at;i.visible=!1;const e=new Je({color:ob,metalness:.75,roughness:.42}),t=new Je({color:ab,metalness:.5,roughness:.5}),n=new Je({color:up,emissive:up,emissiveIntensity:1.4,roughness:.5}),s=[];for(const h of[-1,1]){const d=new St(.035,.035,1,10);d.translate(0,-.5,0);const f=new re(d,e);f.position.x=h*hp/2,i.add(f),s.push(f)}const r=[];for(let h=0;h<cb;h++){const d=new re(new St(.022,.022,hp,8),t);d.rotation.z=Math.PI/2,d.position.y=-Mu*(h+1),d.visible=!1,i.add(d),r.push(d)}const o=new re(new Wn(.5,.035,8,28),n);o.rotation.x=Math.PI/2,i.add(o);let a=Su,c=0;function l(){return a*c}function u(){const h=l();for(const d of s)d.scale.y=Math.max(h,.001);for(const[d,f]of r.entries())f.visible=-f.position.y<=h-.04;o.position.y=-h,o.visible=c>.02,i.visible=c>.001}return u(),{group:i,setHeight(h){a=Math.min(Math.max(h,.4),Su),u()},setExtension(h){c=h<0?0:h>1?1:h,u()},get height(){return a},get extension(){return c},rungSpacing:Mu}}const bu=22,dp=2*Math.PI*bu,wu=.6;function ub(){const i=document.createElement("div");i.id="stamina-wheel",i.hidden=!0,i.innerHTML=`
    <svg viewBox="0 0 56 56" width="56" height="56">
      <circle class="stamina-wheel__track" cx="28" cy="28" r="${bu}" />
      <circle class="stamina-wheel__fill" cx="28" cy="28" r="${bu}"
              stroke-dasharray="${dp.toFixed(2)}" />
    </svg>
  `,document.body.appendChild(i);const e=i.querySelector(".stamina-wheel__fill");let t=!1,n=0,s=-1,r=null;return{update(o,a,c,l){l!=null&&(o<.999||a)?n=wu:n>0&&(n-=c);const h=n>0&&l!=null;if(h!==t&&(i.hidden=!h,t=h),!h)return;i.style.transform=`translate(${Math.round(l.x)}px, ${Math.round(l.y)}px)`,i.style.opacity=n<wu?(n/wu).toFixed(2):"1";const d=Math.round(dp*(1-Math.max(0,Math.min(1,o))));d!==s&&(e.style.strokeDashoffset=String(d),s=d),a!==r&&(i.classList.toggle("stamina-wheel--winded",a),r=a)},hide(){i.hidden=!0,t=!1,n=0}}}const hb="♥";function db(){const i=document.createElement("div");i.id="hearts",i.hidden=!0,document.body.appendChild(i);let e=-1,t=0;return{set(n,s){if(!(n===e&&s===t)){e=n,t=s,i.innerHTML="";for(let r=0;r<s;r++){const o=document.createElement("span");o.className=r<n?"heart":"heart heart--spent",o.textContent=hb,i.appendChild(o)}i.hidden=!1}},flash(){i.classList.remove("hearts--hit"),i.offsetWidth,i.classList.add("hearts--hit")},hide(){i.hidden=!0,e=-1}}}const oo=1.5,fb=3.3,pb=6.2,Oa=.55,fp=.2,mb=.62,gb=.3,_b=.25,xb=.05,pp=2.2,vb=.11,yb=.08,Mb=.15,mp=.75,Sb=.38,Eu=1.7,bb=2.6,gp=.8,wb=22,Eb=4.5,Ab=.9,Tb=1.3,Rb=.55,_p=.7,Cb=.35,xp=.5,Pb=.4,vp=.55,Fa=.32,yp=2,Ib=2.4,Lb=1.3,Mp=Math.PI*.19,ao=4.6,Sp=2,Nb=6.2,Db=5,is=5,Ub=.32,bp=55,Ob=.7,Fb=4,Bb=1.5,wp=3.4,kb=2.4,zb=2.5,Ep=["KeyL"],ss=new N(0,1,0);function Ii(i,e){return 1-Math.pow(2,-i/e)}function Ba(i){return i<-1?-1:i>1?1:i}function Hb(i,e,t){return i<e?e:i>t?t:i}function co(i,e){let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Gb({scene:i,camera:e,ship:t,surface:n,input:s,renderer:r,monsters:o=null,onShot:a=()=>{},onDown:c=()=>{},onLanded:l=()=>{},onAboard:u=()=>{}}){const h=new Rr(r),d=h.fromScene(new du,.04).texture;h.dispose();const f=fu({suitLight:!1,environment:d}),g=lb();let x=!1;function m(){x||(i.add(f.group),i.add(g.group),x=!0)}function p(){x&&(i.remove(f.group),i.remove(g.group),x=!1)}const S=document.createElement("div");S.id="foot-prompt",S.hidden=!0,document.body.appendChild(S);const v=ub(),y=db(),C=new N,E=new N,T=new N;let b="off",P=0,_=0,M=0,F=gp,z=0;const V=new N,Y=new N,A=new N,G=new N,U=new Yt,q=new N,B=new Yt,W=new N;let j=0,ie=0,K=0,J=1,ce=0,fe=!1,ye=!1,ue=is,xe=!1,Le=0,te=0,D=0,pe=0,me=0;const se=new N,be=new N,Te=new N,Ee=new N,L=new N,w=new N,$=[0,0];let ne=!1;const oe=n.world;function ee(ve,Se){return Qe.y+oe.groundHeightAt(ve-Qe.x,Se-Qe.z)}let ke=null;function le(ve){if(ve!==ke){if(ke=ve,!ve){S.hidden=!0;return}S.textContent=ve,S.hidden=!1}}function we(){if(b!=="off"||!n.active)return;z=new Kt().setFromQuaternion(t.mesh.quaternion,"YXZ").y,q.copy(t.mesh.position),B.copy(t.mesh.quaternion),U.setFromEuler(new Kt(0,z,0,"YXZ")),G.set(q.x,n.hullGroundY(t)+KS,q.z);const Se=t.mesh.scale.x;let qe=-1;if(!it(-1,Se)){if(!it(1,Se)){M=zb;return}qe=1}m(),b="settle",P=0,F=Math.min(Eb,gp+Math.max(0,q.y-G.y)/wb),n.park(),_e(qe,Se),ie=Y.y,W.copy(V).addScaledVector(A,Fa),W.y=ie,j=Math.atan2(-A.x,-A.z),f.setGait("climb"),Ce(),f.group.visible=!1,g.setExtension(0),s.consumeAnyJustPressed(),le(Ne.onFoot.skip)}function it(ve,Se){return w.set(ve*xp,0,vp).multiplyScalar(Se).applyQuaternion(U).add(G),oe.isClear(w.x-Qe.x,w.z-Qe.z,1.2)}function _e(ve,Se){Y.set(ve*xp,Pb,vp).multiplyScalar(Se).applyQuaternion(U).add(G),A.set(ve,0,0).applyQuaternion(U).setY(0).normalize();const qe=ee(Y.x,Y.z);V.set(Y.x,qe,Y.z),g.group.position.copy(Y),g.group.rotation.set(0,Math.atan2(A.x,A.z),0),g.setHeight(Y.y-qe),g.setExtension(0)}function Ce(){f.group.position.copy(W),f.group.rotation.y=j}function ze(){if(b==="walk"||b==="stepoff"){Ee.copy(W).addScaledVector(ss,On*.62);const{dx:ve,dz:Se,boom:qe}=Ye(),et=qe*Math.cos(K),It=qe*Math.sin(K);Te.set(ve,0,Se).multiplyScalar(et).add(Ee).addScaledVector(ss,1.15+(ao-qe)*.2+It),He();return}if(b==="settle"||b==="deploy"){Ee.copy(t.mesh.position).addScaledVector(ss,.9),Te.copy(t.mesh.position).addScaledVector(A,11).addScaledVector(ss,3.4),w.set(Math.sin(z),0,Math.cos(z)).multiplyScalar(3.5),Te.add(w),He();return}Ee.copy(W).addScaledVector(ss,On*.5),Te.copy(V).addScaledVector(A,5.6).addScaledVector(ss,2.2),w.set(Math.sin(z),0,Math.cos(z)).multiplyScalar(1.6),Te.add(w),Te.y=Math.max(Te.y,Ee.y-.4),He()}function He(){const ve=ee(Te.x,Te.z)+.7;Te.y<ve&&(Te.y=ve);const Se=6;for(let qe=1;qe<Se;qe++){const et=qe/Se,It=Te.x+(Ee.x-Te.x)*et,Vt=Te.z+(Ee.z-Te.z)*et,rn=(ee(It,Vt)+.5-Ee.y*et)/(1-et);rn>Te.y&&(Te.y=rn)}}function Fe(ve,Se){return n.parked&&Math.hypot(ve-G.x,Se-G.z)<Nb?!1:oe.isClear(ve-Qe.x,Se-Qe.z,.5)}function Ye(){const ve=me+Math.PI;for(const et of[0,.42,-.42,.85,-.85,1.3,-1.3,1.9,-1.9]){const It=ve+et,Vt=Math.sin(It),ln=Math.cos(It);if(Fe(W.x+Vt*ao,W.z+ln*ao))return{dx:Vt,dz:ln,boom:ao}}const Se=Math.sin(ve),qe=Math.cos(ve);for(let et=ao-.6;et>Sp;et-=.6)if(Fe(W.x+Se*et,W.z+qe*et))return{dx:Se,dz:qe,boom:et};return{dx:Se,dz:qe,boom:Sp}}function Ge(ve){ze();const Se=b==="walk"?.13:.34;!ne||b==="settle"?(e.position.copy(Te),L.copy(Ee),ne=!0):(e.position.lerp(Te,Ii(ve,Se)),L.lerp(Ee,Ii(ve,Se))),e.up.set(0,1,0),e.lookAt(L)}function lt(){t.mesh.position.copy(G),t.mesh.quaternion.copy(U),g.setExtension(1),W.copy(V).addScaledVector(A,yp),W.y=ee(W.x,W.z),j=Math.atan2(A.x,A.z),f.group.visible=!0,f.setGait("idle"),Ce(),De()}function X(ve,Se=null,qe=null){if(!(b!=="walk"||Le>0||pe>0)){if(Le=Bb,Se!=null){const et=W.x-Se,It=W.z-qe,Vt=Math.hypot(et,It)||1;se.x=et/Vt*wp,se.z=It/Vt*wp}ue=Math.max(0,ue-ve),y.set(ue,is),y.flash(),J=0,ce=pp,ue<=0&&(pe=kb,f.setGait("dying"),se.set(0,0,0),le(null),v.hide())}}function De(){b="walk",P=0,J=1,ce=0,ye=!1,ue=is,Le=0,pe=0,xe=!1,y.set(ue,is),l(),K=0,me=j,se.set(0,0,0),_=Db,ne=!1}function Z(){const ve=Math.min(1,P/F),Se=1-(1-ve)*(1-ve);t.mesh.position.lerpVectors(q,G,Se),t.mesh.quaternion.slerpQuaternions(B,U,Se),t.velocity.set(0,0,0),ve>=1&&(b="deploy",P=0)}function ae(){const ve=Math.min(1,P/Ab);g.setExtension(ve),ve>=1&&(b="down",P=0,f.group.visible=!0,f.setGait("climb"))}function Pe(ve,Se){ie+=(Se?-1:1)*Tb*ve;const qe=V.y,et=Y.y-.15,It=w.copy(V).addScaledVector(A,Fa),Vt=Ii(ve,.12);W.x+=(It.x-W.x)*Vt,W.z+=(It.z-W.z)*Vt,j+=co(j,Math.atan2(-A.x,-A.z))*Vt,Se?(W.y=Math.max(qe,ie),ie<=qe&&(ie=qe,b="stepoff",P=0,f.setGait("walk",oo*.7))):(W.y=Math.min(et,ie),ie>=et&&(ie=et,b="stow",P=0,f.group.visible=!1,le(null))),Ce()}function Oe(ve){const Se=Math.min(1,P/Rb),qe=Fa+(yp-Fa)*Se;W.copy(V).addScaledVector(A,qe),W.y=ee(W.x,W.z);const et=Math.atan2(A.x,A.z);j+=co(j,et)*Ii(ve,.12),me=j,Ce(),Se>=1&&De()}function ot(){g.setExtension(1-Math.min(1,P/_p)),P>=_p&&(b="off",g.setExtension(0),n.unpark(),ne=!1,ye=!1,v.hide(),y.hide(),p(),u())}function vt(ve,Se){if(pe>0||xe){se.set(0,0,0);return}const qe=Ba(Se?.lookX??0),et=Ba(Se?.lookY??0),It=Se?.lookTurnX??0,Vt=Se?.lookTurnY??0;me+=qe*Ib*ve+It,K=Hb(K-et*Lb*ve-Vt,-Mp,Mp);const ln=Math.abs(qe)>.05||Math.abs(It)>.0015,rn=Ba(Se?.stickYaw??Se?.yaw??0),Ui=Ba(Se?.stickThrottle??Se?.throttle??0);let Zt=Math.hypot(rn,Ui);Zt>1&&(Zt=1);const jn=s.keyboard.isDown("ShiftLeft")||s.keyboard.isDown("ShiftRight")||s.gamepad.isButtonDown(Ct.B),dr=jn&&Zt>.15;jn&&!fe&&J>0&&ce<=0&&(J=Math.max(0,J-xb)),fe=jn,ce>0&&(ce-=ve);const Jn=dr&&ce<=0&&J>0;if(ye=Jn,Jn){const H=J<_b?fp*.5:fp;J-=H*ve,J<=0&&(J=0,ce=pp)}else J=Math.min(1,J+(ce>0?gb:mb)*ve);const us=Zt<Oa?oo*(Zt/Oa):oo+(fb-oo)*((Zt-Oa)/(1-Oa)),fr=ce>0?Math.min(us,oo):Jn?pb:us;if(Zt>.05){const H=me+Math.atan2(rn,Ui);be.set(Math.sin(H),0,Math.cos(H)).multiplyScalar(fr),j+=co(j,H)*Ii(ve,yb)}else be.set(0,0,0);const pr=Ii(ve,vb);se.x+=(be.x-se.x)*pr,se.z+=(be.z-se.z)*pr;const hs=Math.hypot(se.x,se.z);if(hs>.05){W.x+=se.x*ve,W.z+=se.z*ve,oe.resolveWalk(W.x-Qe.x,W.z-Qe.z,Sb,$),W.x=$[0]+Qe.x,W.z=$[1]+Qe.z;const H=W.x-G.x,k=W.z-G.z,Q=Math.hypot(H,k);Q<Eu&&Q>1e-4&&(W.x=G.x+H/Q*Eu,W.z=G.z+k/Q*Eu)}hs>Mb?f.setGait("walk",hs):f.setGait("idle");const mo=Math.abs(rn)<.4&&Zt>.05;!ln&&mo&&(me+=co(me,j)*Ii(ve,mp),K+=(0-K)*Ii(ve,mp*2)),W.y=ee(W.x,W.z),Ce(),C.copy(W).addScaledVector(ss,On*.75).project(e);const R=C.z<1&&Math.abs(C.x)<1.4&&Math.abs(C.y)<1.4;if(v.update(J,ce>0,ve,R?{x:(C.x*.5+.5)*window.innerWidth+52,y:(-C.y*.5+.5)*window.innerHeight}:null),te>0&&(te-=ve),D>0&&(D-=ve),(s.keyboard.isDown("Space")||s.gamepad.isButtonDown(Ct.R2)||s.gamepad.isButtonDown(Ct.X))&&te<=0&&o&&(D=Fb,f.getMuzzle(E))){te=Ub;const H=o.aimAt(E,j,Ob,bp);H?(T.copy(H).sub(E).normalize(),j+=co(j,Math.atan2(T.x,T.z))*.6):T.set(Math.sin(j),0,Math.cos(j));const k=o.shoot(E,T,bp);f.fire(),a(E,T,k)}f.setArmed(D>0,j),Math.hypot(W.x-V.x,W.z-V.z)<bb?(le(Ne.onFoot.board),(s.keyboard.consumeJustPressed(Ep)||s.gamepad.consumeJustPressed(Ct.A))&&(b="up",P=0,ie=W.y,f.setGait("climb"),le(null))):_>0?le(Ne.onFoot.controls):le(null)}return{get active(){return b!=="off"},get cutscene(){return b==="settle"||b==="deploy"||b==="down"||b==="stepoff"},get state(){return b},vexo:f,ladder:g,get position(){return W},get heading(){return j},get stamina(){return J},get winded(){return ce>0},get sprinting(){return ye},get hearts(){return ue},get maxHearts(){return is},get down(){return pe>0||xe},get quarry(){return b==="walk"&&pe<=0?W:null},takeHit:X,begin:we,update(ve,Se){if(b==="off"){M>0&&(M-=ve),Se&&n.active?(le(M>0?Ne.onFoot.noRoom:Ne.onFoot.climbOut),(s.keyboard.consumeJustPressed(Ep)||s.gamepad.consumeJustPressed(Ct.A))&&we()):le(null);return}switch(P+=ve,_>0&&(_-=ve),this.cutscene&&P>Cb&&s.consumeAnyJustPressed()&&(lt(),le(null)),b){case"settle":Z();break;case"deploy":ae();break;case"down":Pe(ve,!0);break;case"stepoff":Oe(ve);break;case"walk":vt(ve,Se);break;case"up":Pe(ve,!1);break;case"stow":ot();break}Le>0&&(Le-=ve),pe>0&&(pe-=ve,pe<=0&&(pe=0,xe=!0,c())),f.update(ve),b!=="off"&&Ge(ve),this.cutscene?le(Ne.onFoot.skip):b!=="walk"&&le(null)},prewarm(ve,Se){const qe=f.group.visible;f.group.position.copy(Qe),f.group.visible=!0,g.group.position.copy(Qe),g.setHeight(2.6),g.setExtension(1),ve.compile(i,Se);const et=new Dt(50,Se.aspect,.1,5e3);et.position.copy(Qe).add(new N(3.5,1.6,4.5)),et.lookAt(Qe.x,Qe.y+1,Qe.z),ve.render(i,et),f.group.visible=qe,g.setExtension(0),ve.render(i,Se)},reset(){b!=="off"&&n.unpark(),b="off",P=0,M=0,xe=!1,pe=0,ue=is,y.set(ue,is),ne=!1,f.group.visible=!1,g.setExtension(0),le(null),ye=!1,v.hide(),y.hide(),p()}}}const Ap=4,Vb=3,Wb=24,Xb=Math.cos(1.1),qb=7,Yb=8,Kb=55,Tp=4.5,Rp=.9,Au=3.4,Cp=2,$b=3.2,Pp=1.9,ar=.42,Ip=.22,jb=.9,Jb=.45;function Zb({scene:i,world:e,origin:t}){const n=new at;n.visible=!1,i.add(n);const s=new Je({color:16751164,emissive:16742940,emissiveIntensity:1.6,roughness:.6}),r=new Je({color:5453855,roughness:.95}),o=new Je({color:7164979,roughness:.9}),a=[],c=[],l=[[2.4,1.2],[-2.1,1.9],[1.1,-2.4]],u=(A,G)=>t.y+e.groundHeightAt(A,G),h=620;for(let A=0;A<Ap;A++){const G={x:0,z:0,cell:null,members:[]};c.push(G),v(G);for(let U=0;U<Vb;U++)C(G,0,0,U===0?"blue":"red",!1);C(G,0,0,"black",!0)}function d(A,G,U=0){let q=Math.imul(A|0,668265261)^Math.imul(G|0,374761393)^Math.imul(U,2654435761);return q=Math.imul(q^q>>>15,2246822507),q=Math.imul(q^q>>>13,3266489909),((q^q>>>16)>>>0)/4294967296}const f=new Map;function g(A,G){const U=`${A},${G}`;if(f.has(U))return f.get(U);let q=null;if(d(A,G,7)<=.42){const B=(A+.2+d(A,G,11)*.6)*h,W=(G+.2+d(A,G,13)*.6)*h;q=S(B,W,7)}return f.set(U,q),q}const x=2;function m(A,G){const U=Math.floor(A/h),q=Math.floor(G/h),B=[],W=3;let ie=c.every(ue=>ue.cell===null)?1/0:x,K=!1;const J=[];for(let ue=-W;ue<=W;ue++)for(let xe=-W;xe<=W;xe++)J.push([U+xe,q+ue,xe*xe+ue*ue]);J.sort((ue,xe)=>ue[2]-xe[2]);for(const[ue,xe]of J){if(!f.has(`${ue},${xe}`)){if(ie<=0){K=!0;continue}ie-=1}const te=g(ue,xe);te&&B.push({key:`${ue},${xe}`,site:te,d2:(te.x-A)**2+(te.z-G)**2})}b=K,B.sort((ue,xe)=>ue.d2-xe.d2);const ce=B.slice(0,Ap),fe=new Set(ce.map(ue=>ue.key)),ye=c.filter(ue=>!fe.has(ue.cell));for(const ue of ce){if(c.some(Le=>Le.cell===ue.key))continue;const xe=ye.pop();if(!xe)break;p(xe,ue.key,ue.site.x,ue.site.z)}}function p(A,G,U,q){A.cell=G,A.x=U,A.z=q,y(A);for(const[B,W]of A.members.entries()){const j=B/A.members.length*Math.PI*2+d(U|0,q|0)*6,ie=W.boss?1.9:2.6;W.home.set(U+Math.sin(j)*ie,q+Math.cos(j)*ie),W.pos.copy(W.home),W.state="idle",W.timer=0,W.hp=W.boko.maxHp*(W.boss?2:1),W.boko.group.rotation.set(0,W.heading,0),W.boko.group.visible=!0,P(W)}}function S(A,G,U){if(e.isClear(A,G,U))return{x:A,z:G};for(let q=9;q<=45;q+=9)for(let B=0;B<Math.PI*2;B+=Math.PI/4){const W=A+Math.sin(B)*q,j=G+Math.cos(B)*q;if(e.isClear(W,j,U))return{x:W,z:j}}return null}function v(A){const G=new re(new Wn(.55,.13,6,12),r);G.rotation.x=Math.PI/2,n.add(G),A.stones=G;const U=new re(new un(.32,.8,7),s);n.add(U),A.flame=U,A.crates=l.map((q,B)=>{const W=new re(new Ht(.7,.62,.7),o);return W.rotation.y=B*.8,n.add(W),W})}function y(A){const G=u(A.x,A.z);A.stones.position.set(A.x+t.x,G+.1,A.z+t.z),A.flame.position.set(A.x+t.x,G+.5,A.z+t.z);for(const[U,[q,B]]of l.entries())A.crates[U].position.set(A.x+q+t.x,u(A.x+q,A.z+B)+.31,A.z+B+t.z)}function C(A,G,U,q,B){const W=np({tier:q});B&&W.group.scale.setScalar(1.35);const j={boko:W,camp:A,home:new ge(G,U),pos:new ge(G,U),heading:Math.random()*Math.PI*2,state:"idle",timer:0,hp:W.maxHp*(B?2:1),boss:B,phase:Math.random()*10,lastSeen:0,hitCooldown:0};return n.add(W.group),a.push(j),A.members.push(j),P(j),j}const E=new N,T=new ge(1/0,1/0);let b=!1;function P(A){A.boko.group.position.set(A.pos.x+t.x,u(A.pos.x,A.pos.y),A.pos.y+t.z),A.boko.group.rotation.y=A.heading}function _(A,G){const U=G.x-A.pos.x,q=G.y-A.pos.y,B=Math.hypot(U,q);if(B>Wb)return!1;if(B<qb)return!0;const W=Math.sin(A.heading),j=Math.cos(A.heading);return(U*W+q*j)/(B||1)>Xb}function M(A,G){for(const U of A.members)U.state==="dead"||U.state==="chase"||(U.state="alert",U.timer=.35+Math.random()*.25,U.lastSeen=G)}function F(A,G,U,q,B){const W=G-A.pos.x,j=U-A.pos.y,ie=Math.hypot(W,j);if(ie<.05)return ie;let J=Math.atan2(W,j)-A.heading;for(;J>Math.PI;)J-=Math.PI*2;for(;J<-Math.PI;)J+=Math.PI*2;A.heading+=Math.max(-Au*B,Math.min(Au*B,J));const ce=Math.min(ie,q*B);if(Math.abs(J)<1.2){const fe=A.pos.x+Math.sin(A.heading)*ce,ye=A.pos.y+Math.cos(A.heading)*ce;e.isClear(fe,ye,.45)?(A.pos.x=fe,A.pos.y=ye):A.heading+=.8*B*Au}return ie}function z(A,G,U){const q=A.boko;A.phase+=U*(G?9:1.6);const B=Math.sin(A.phase);if(A.state!=="dead"){for(const[W,j]of q.legs.entries())j.group.rotation.x=G?B*(W?-.7:.7):0;for(const[W,j]of q.arms.entries()){const ie=.18+(A.state==="chase"?.35:0);j.group.rotation.x=ie+(G?B*(W?.5:-.5):B*.05),j.group.rotation.z=j.side*.2}if(A.state==="attack"){const W=A.timer,j=W<ar?-(W/ar)*2.2:-2.2+(W-ar)/Ip*3.4;q.arms[0].group.rotation.x=Math.min(1.2,j)}A.state==="alert"?(q.arms[0].group.rotation.x=-1.4,q.arms[1].group.rotation.x=-1.2,q.body.rotation.x=-.18):q.body.rotation.x=A.state==="chase"?.16:0}}function V(A){let G=0;for(const U of A.members)U.state==="attack"&&(G+=1);return G}const Y=new ge;return{group:n,monsters:a,camps:c,setActive(A){n.visible=A},focus(A,G){!(Math.abs(A-T.x)>=60||Math.abs(G-T.y)>=60)&&!b||(T.set(A,G),m(A,G))},update(A,G,U){if(!n.visible)return;for(const B of c)B.flame.scale.setScalar(.85+Math.sin(performance.now()*.006+B.x)*.12);const q=G!=null;q&&Y.set(G.x-t.x,G.z-t.z);for(const B of a){B.timer+=A,B.hitCooldown>0&&(B.hitCooldown-=A);let W=!1;switch(B.state){case"idle":{const j=B.phase*.35+B.home.x,ie=B.home.x+Math.sin(j)*1.4,K=B.home.y+Math.cos(j)*1.4;W=F(B,ie,K,Rp,A)>.3,q&&_(B,Y)&&M(B.camp,0);break}case"alert":{B.timer>=.55&&(B.state="chase",B.timer=0);break}case"chase":{if(!q){B.state="idle",B.timer=0;break}const j=F(B,Y.x,Y.y,Tp,A);W=!0,_(B,Y)?B.lastSeen=0:B.lastSeen+=A,j<=Pp&&V(B.camp)<Cp?(B.state="attack",B.timer=0):j<$b&&V(B.camp)>=Cp?F(B,B.pos.x+(B.pos.x-Y.x)*.4,B.pos.y+(B.pos.y-Y.y)*.4,Tp*.5,A):(B.lastSeen>Yb||j>Kb)&&(B.state="return",B.timer=0);break}case"attack":{B.timer>=ar&&B.timer<ar+A&&q&&Math.hypot(Y.x-B.pos.x,Y.y-B.pos.y)<=Pp+.5&&U(B.boss?2:1,B.pos.x+t.x,B.pos.y+t.z),B.timer>=ar+Ip+jb&&(B.state=q?"chase":"return",B.timer=0);break}case"stagger":{B.timer>=Jb&&(B.state=q?"chase":"return",B.timer=0);break}case"return":{W=F(B,B.home.x,B.home.y,Rp*1.8,A)>.4,W||(B.state="idle",B.timer=0),q&&_(B,Y)&&M(B.camp,0);break}}z(B,W,A),B.state!=="dead"&&P(B)}},aimAt(A,G,U=.55,q=45){const B=Math.sin(G),W=Math.cos(G),j=Math.cos(U);let ie=null,K=-1/0;for(const J of a){if(J.state==="dead")continue;const ce=J.pos.x+t.x-A.x,fe=J.pos.y+t.z-A.z,ye=Math.hypot(ce,fe);if(ye>q||ye<.001)continue;const ue=(ce*B+fe*W)/ye;if(ue<j)continue;const xe=ue*2-ye/q;xe>K&&(K=xe,ie=J)}return ie?(E.set(ie.pos.x+t.x,u(ie.pos.x,ie.pos.y)+pu*.55,ie.pos.y+t.z),E):null},shoot(A,G,U=60,q=.55){let B=null,W=U;for(const j of a){if(j.state==="dead")continue;E.set(j.pos.x+t.x,u(j.pos.x,j.pos.y)+pu*.55,j.pos.y+t.z).sub(A);const ie=E.dot(G);ie<=0||ie>W||Math.sqrt(Math.max(0,E.lengthSq()-ie*ie))>q*(j.boss?1.5:1)||(B=j,W=ie)}return B?(B.hp-=1,B.hp<=0?(B.state="dead",B.timer=0,B.boko.group.rotation.x=-Math.PI/2.2,B.boko.group.position.y=u(B.pos.x,B.pos.y)+.25):(B.state="stagger",B.timer=0),B):null},kill(A){A.state="dead",A.timer=0,A.hp=0,A.boko.group.rotation.x=-Math.PI/2.2,A.boko.group.position.y=u(A.pos.x,A.pos.y)+.25},snapshot(){return c.filter(A=>A.cell).map(A=>({cell:A.cell,hp:A.members.map(G=>G.state==="dead"?0:G.hp)}))},restore(A){if(!Array.isArray(A))return;const G=new Map(A.map(U=>[U.cell,U]));for(const U of c){const q=G.get(U.cell);if(q)for(const[B,W]of U.members.entries()){const j=q.hp[B];j!==void 0&&(W.hp=j,j<=0&&this.kill(W))}}},reset(){for(const A of a)A.pos.copy(A.home),A.state="idle",A.timer=0,A.hp=A.boko.maxHp*(A.boss?2:1),A.boko.group.rotation.set(0,A.heading,0),P(A)}}}const Qb=2.2,ew=.011,tw=.25,nw=0,iw=4,sw=5;function rw({renderer:i,input:e,saves:t=null,tablet:n=null}){const s=document.createElement("div");s.id="inventory",s.className="screen-overlay",s.hidden=!0,s.innerHTML=`
    <div class="inventory__panel">
      <div class="inventory__list">
        <h2 class="screen-card__title">${Ne.inventory.title}</h2>
        <div class="inventory__tabs" data-tabs></div>
        <ul class="inventory__items" data-items></ul>
        <div class="inventory__tablet" data-tablet hidden></div>
        <div class="inventory__system" data-system hidden>
          <button class="inventory__save" data-save>${Ne.inventory.save}</button>
          <p class="inventory__saved" data-saved></p>
        </div>
        <p class="screen-card__hint">${Ne.inventory.hint}</p>
      </div>
      <div class="inventory__figure">
        <p class="inventory__figure-hint">${Ne.inventory.turnHint}</p>
      </div>
    </div>
  `,document.body.appendChild(s);const r=s.querySelector("[data-items]"),o=s.querySelector("[data-tabs]"),a=s.querySelector("[data-system]"),c=s.querySelector("[data-tablet]"),l=s.querySelector("[data-save]"),u=s.querySelector("[data-saved]"),h=s.querySelector(".inventory__figure"),d=[{id:"weapons",label:Ne.inventory.weapons},...n?[{id:"tablet",label:Ne.inventory.tablet}]:[],{id:"system",label:Ne.inventory.system}];n&&(c.appendChild(n),n.style.display="");let f=0;const g=new Pr;g.background=null;const x=new Dt(32,1,.05,40),m=new Rr(i),p=m.fromScene(new du,.04).texture;m.dispose(),g.add(new ya(8363712,1185824,.9));const S=new ui(16774116,2.2);S.position.set(-2,3,3.2),g.add(S);const v=new ui(10420176,1.1);v.position.set(1.4,2,-3),g.add(v);const y=new at;g.add(y);const C=fu({suitLight:!1,environment:p});y.add(C.group),C.setArmed(!1);const E=On*1.22;function T(j){const ie=x.fov*Math.PI/180,K=E/2/Math.tan(ie/2),J=On*.42/(Math.tan(ie/2)*j),ce=Math.max(K,J);x.position.set(0,On*.52,ce),x.lookAt(0,On*.5,0)}T(.75);const b=new Ve;let P=!1,_=0,M=!0,F=!1,z=0;function V(j){P&&(F=!0,M=!1,z=j.clientX)}function Y(j){F&&(_+=(j.clientX-z)*ew,z=j.clientX)}function A(){F=!1}h.addEventListener("pointerdown",V),window.addEventListener("pointermove",Y),window.addEventListener("pointerup",A);let G=[];function U(){o.innerHTML="";for(const[j,ie]of d.entries()){const K=document.createElement("span");K.className=j===f?"inventory__tab inventory__tab--on":"inventory__tab",K.textContent=ie.label,K.addEventListener("click",()=>{f=j,U(),B()}),o.appendChild(K)}}function q(j){f=(f+j+d.length)%d.length,U(),B()}function B(){const j=d[f].id;if(r.hidden=j!=="weapons",a.hidden=j!=="system",c.hidden=j!=="tablet",j==="system"){u.textContent=W();return}if(j!=="tablet"){r.innerHTML="";for(const ie of G){const K=document.createElement("li");K.className=ie.held?"inventory__item inventory__item--held":"inventory__item",K.innerHTML=`
        <span class="inventory__item-name">${ie.name}</span>
        <span class="inventory__item-note">${ie.note}</span>
      `,r.appendChild(K)}if(!G.length){const ie=document.createElement("li");ie.className="inventory__item inventory__item--empty",ie.textContent=Ne.inventory.empty,r.appendChild(ie)}}}function W(){const j=t?.latest;if(!j)return Ne.inventory.neverSaved;const ie=Math.max(0,Date.now()-j.at);if(ie<8e3)return Ne.inventory.savedJustNow;const K=Math.round(ie/6e4);return K<1?Ne.inventory.savedSecondsAgo:Ne.inventory.savedMinutesAgo.replace("{n}",String(K))}return l.addEventListener("click",()=>{const j=t?.saveManual();u.textContent=j?Ne.inventory.savedJustNow:Ne.inventory.saveFailed}),{get isOpen(){return P},setItems(j){G=j.map(ie=>({held:!1,...ie})),B()},get tab(){return d[f].id},toggle(){return P?this.close():this.show()},show(){return P=!0,s.hidden=!1,M=!0,_=0,C.setArmed(!0,!1),U(),B(),C.setGait("idle"),!0},close(){return P=!1,s.hidden=!0,F=!1,C.setArmed(!1),!1},update(j,ie){if(!P)return;const K=ie?.stickYaw??ie?.yaw??0,J=(e.keyboard.isDown("KeyA")?1:0)-(e.keyboard.isDown("KeyD")?1:0);if((e.gamepad.consumeJustPressed(sw)||e.keyboard.consumeJustPressed(["ArrowRight"]))&&q(1),(e.gamepad.consumeJustPressed(iw)||e.keyboard.consumeJustPressed(["ArrowLeft"]))&&q(-1),d[f].id==="system"&&e.gamepad.consumeJustPressed(nw)){const fe=t?.saveManual();u.textContent=fe?Ne.inventory.savedJustNow:Ne.inventory.saveFailed}const ce=K||J;ce?(M=!1,_+=ce*Qb*j):M&&!F&&(_+=tw*j),y.rotation.y=_,C.update(j)},render(){if(!P)return;const j=h.getBoundingClientRect();if(j.width<8||j.height<8)return;const ie=i.getPixelRatio(),K=i.getSize(new ge),J=j.left*ie,ce=K.height*ie-j.bottom*ie,fe=j.width*ie,ye=j.height*ie;x.aspect=j.width/j.height,x.updateProjectionMatrix(),T(x.aspect);const ue=i.getScissorTest();i.setScissorTest(!0),i.setViewport(J/ie,ce/ie,fe/ie,ye/ie),i.setScissor(J/ie,ce/ie,fe/ie,ye/ie);const xe=i.autoClear;i.autoClear=!1,i.getClearColor(b);const Le=i.getClearAlpha();i.setClearColor(661026,1),i.clear(!0,!0,!1),i.setClearColor(b,Le),i.render(g,x),i.autoClear=xe,i.setScissorTest(ue),i.setViewport(0,0,K.width,K.height),i.setScissor(0,0,K.width,K.height)},vexo:C}}const Tu="super-vexo/save",Lp=4;function ka(){try{const i=localStorage.getItem(Tu);if(!i)return{manual:null,auto:null};const e=JSON.parse(i);return e.v!==Lp?{manual:null,auto:null}:{manual:e.manual??null,auto:e.auto??null}}catch{return{manual:null,auto:null}}}function Np(i){try{return localStorage.setItem(Tu,JSON.stringify({v:Lp,...i})),!0}catch{return!1}}function ow({ship:i,surface:e,onFoot:t,monsters:n,mission:s,upgrades:r,rovers:o}){function a(c){return{kind:c,at:Date.now(),ship:{p:i.mesh.position.toArray(),q:i.mesh.quaternion.toArray(),scale:i.mesh.scale.x},inTown:e.active,camps:n.snapshot(),credits:s.credits,upgrades:r.upgrades.filter(l=>l.bought).map(l=>l.id),rovers:o.rovers.map(l=>l.fixed)}}return{get has(){const{manual:c,auto:l}=ka();return!!(c||l)},get latest(){const{manual:c,auto:l}=ka();return c?l&&l.at>c.at?l:c:l},saveManual(){const c=ka();return c.manual=a("manual"),Np(c)},saveAuto(c){const l=ka();return l.auto={...a("auto"),reason:c},Np(l)},restore(c){if(!c)return!1;t.reset(),e.reset(i),c.inTown&&e.enter(i),i.mesh.position.fromArray(c.ship.p),i.mesh.quaternion.fromArray(c.ship.q),i.mesh.scale.setScalar(c.ship.scale??1),i.velocity.set(0,0,0),n.reset(),n.focus(i.mesh.position.x-Qe.x,i.mesh.position.z-Qe.z),n.restore(c.camps),o.reset();for(const[l,u]of(c.rovers??[]).entries())u&&o.rovers[l]&&o.markFixed(o.rovers[l]);s.reset(),s.grantCredits(c.credits??0),r.reset();for(const l of c.upgrades??[])r.buyFree(l);return!0},clear(){try{return localStorage.removeItem(Tu),!0}catch{return!1}}}}function aw({onContinue:i,onTitle:e}){const t=document.createElement("div");t.id="game-over",t.hidden=!0,t.innerHTML=`
    <div class="game-over__sign">${Ne.gameOver.title}</div>
    <p class="game-over__ask" data-ask>${Ne.gameOver.ask}</p>
    <div class="game-over__buttons">
      <button class="game-over__btn" data-yes>${Ne.gameOver.yes}</button>
      <button class="game-over__btn" data-no>${Ne.gameOver.no}</button>
    </div>
    <p class="game-over__hint">${Ne.gameOver.hint}</p>
  `,document.body.appendChild(t);const n=t.querySelector("[data-ask]"),s=t.querySelector("[data-yes]"),r=t.querySelector("[data-no]");let o=!1,a=0,c=!0;function l(){s.classList.toggle("game-over__btn--on",a===0),r.classList.toggle("game-over__btn--on",a===1),s.disabled=!c}function u(){const d=a===0&&c;h(),d?i():e()}function h(){o=!1,t.hidden=!0}return s.addEventListener("click",()=>{a=0,l(),u()}),r.addEventListener("click",()=>{a=1,l(),u()}),{get isOpen(){return o},show(d){o=!0,c=d,a=d?0:1,n.textContent=d?Ne.gameOver.ask:Ne.gameOver.noSave,t.hidden=!1,l()},update(d,f){if(!o)return;const g=d.keyboard.consumeJustPressed(["ArrowLeft","KeyA"])||d.gamepad.consumeJustPressed(f.Left),x=d.keyboard.consumeJustPressed(["ArrowRight","KeyD"])||d.gamepad.consumeJustPressed(f.Right);(g||x)&&(a=a===0?1:0,l()),(d.keyboard.consumeJustPressed(["Enter","Space"])||d.gamepad.consumeJustPressed(f.A))&&u()},hide:h}}const Dp=Math.PI*1.25,cw=.55,Ru=8,lo=i=>[i>>16&255,i>>8&255,i&255],Cu=lo(3105920),Pu=lo(729139),Iu=lo(14734254),za=i=>i<0?0:i>1?1:i,gn=(i,e,t)=>i+(e-i)*t;function lw(i,e,t,n,s,r){const o=1-s.moisture,{sandy:a,plateau:c}=i.styleAt(s),l=f=>{const g=lo(f);r[0]=g[0],r[1]=g[1],r[2]=g[2]},u=(f,g)=>{if(g<=0)return;const x=lo(f);r[0]=gn(r[0],x[0],g),r[1]=gn(r[1],x[1],g),r[2]=gn(r[2],x[2],g)},h=(f,g,x)=>{const m=za((x-f)/(g-f));return m*m*(3-2*m)};l(jt[Xe.FOREST]),u(jt[Xe.PLAIN],h(.28,.44,o)),u(jt[Xe.SAVANNA],h(.42,.58,o)),u(jt[Xe.STONE_DESERT],h(.55,.68,o)),u(jt[Xe.MESA],c*.85),u(jt[Xe.DUNES],a);const d=i.snowlineAt(e,t);if(u(9275257,h(d*.55,d*.9,n)),u(jt[Xe.SNOW],h(d*.86,d*1.15,n)),n<_t(70)){const f=1-za(n/_t(70));r[0]=gn(r[0],Iu[0],f*f*.6),r[1]=gn(r[1],Iu[1],f*f*.6),r[2]=gn(r[2],Iu[2],f*f*.6)}}function uw({terrain:i,width:e,height:t,minX:n,maxX:s,minZ:r,maxZ:o}){const a=new Uint8ClampedArray(e*t*4),c=(s-n)/e,l=(o-r)/t,u=new Float64Array(e+1),h=new Float64Array(e+1),d=[0,0,0];let f=null,g=-1;const x={continent:0,uplift:0,moisture:0,heat:0};let m=0;const p=(v,y)=>{for(let C=0;C<=e;C++)v[C]=i.heightAt(n+C*c,y)},S=v=>{const y=Math.ceil(e/Ru)+1;f||(f=new Array(y));for(let C=0;C<y;C++)f[C]=i.regionAt(n+C*Ru*c,v);return f};return{pixels:a,width:e,height:t,get done(){return m>=t},get progress(){return m/t},drawRows(v=8){for(let y=0;y<v&&m<t;y++,m++){const C=r+m*l;m===0?p(u,C):u.set(h),p(h,C+l),g!==m&&(S(C),g=m);for(let E=0;E<e;E++){const T=u[E],b=(m*e+E)*4;if(a[b+3]=255,T<=es){const q=za(-T/_t(700));a[b]=gn(Cu[0],Pu[0],q),a[b+1]=gn(Cu[1],Pu[1],q),a[b+2]=gn(Cu[2],Pu[2],q);continue}const P=n+E*c,_=E/Ru,M=Math.floor(_),F=_-M,z=f[M],V=f[M+1]??z;x.continent=gn(z.continent,V.continent,F),x.uplift=gn(z.uplift,V.uplift,F),x.moisture=gn(z.moisture,V.moisture,F),x.heat=gn(z.heat,V.heat,F),lw(i,P,C,T,x,d);const Y=(u[E+1]-T)/c,A=(h[E]-T)/l,U=.55+za((cw+Math.cos(Dp)*Y*6+Math.sin(Dp)*A*6)/Math.sqrt(1+(Y*Y+A*A)*36)+.42)*.75;a[b]=d[0]*U,a[b+1]=d[1]*U,a[b+2]=d[2]*U}}return m>=t}}}const Li=900,cr=Math.round(Li*Qi/Ci),hw=2.5,dw="#7dff9f",fw="#8fd0ff";function pw({world:i}){const e=document.createElement("div");e.id="map-screen",e.hidden=!0,e.innerHTML=`
    <div class="map-panel">
      <div class="map-head">
        <span class="map-title">${Ne.map.title}</span>
        <span class="map-scale" data-scale></span>
      </div>
      <div class="map-frame">
        <canvas class="map-canvas" data-canvas></canvas>
        <p class="map-building" data-building></p>
      </div>
      <p class="screen-card__hint">${Ne.map.hint}</p>
    </div>
  `,document.body.appendChild(e);const t=e.querySelector("[data-canvas]"),n=e.querySelector("[data-building]"),s=e.querySelector("[data-scale]"),r=t.getContext("2d");s.textContent=Ne.map.scale.replace("{km}",Math.round(Ci*2/1e3)).replace("{kmZ}",Math.round(Qi*2/1e3)).replace("{m}",Math.round(Ci*2/Li));const o=document.createElement("canvas");o.width=Li,o.height=cr;const a=o.getContext("2d"),c=a.createImageData(Li,cr),l=uw({terrain:i.terrain,width:Li,height:cr,minX:-Ci,maxX:Ci,minZ:-Qi,maxZ:Qi});let u=!1,h=null,d=null,f=!0;function g(){const y=performance.now();for(;!l.done&&performance.now()-y<hw;)l.drawRows(4);c.data.set(l.pixels),a.putImageData(c,0,0),f=!0,l.done||requestAnimationFrame(g)}requestAnimationFrame(g);const x={x:0,y:0};let m={x:0,y:0,w:0,h:0};function p(y,C){return x.x=m.x+(y+Ci)/(Ci*2)*m.w,x.y=m.y+(C+Qi)/(Qi*2)*m.h,x}function S(y,C,E,T,b){const P=p(y,C);r.save(),r.translate(P.x,P.y),r.rotate(-E+Math.PI),r.beginPath(),r.moveTo(0,-b),r.lineTo(b*.62,b*.75),r.lineTo(0,b*.35),r.lineTo(-b*.62,b*.75),r.closePath(),r.fillStyle=T,r.strokeStyle="rgba(4, 10, 18, 0.85)",r.lineWidth=1.5,r.fill(),r.stroke(),r.restore()}function v(){const y=t.getBoundingClientRect();if(y.width<8||y.height<8)return;const C=Math.min(window.devicePixelRatio||1,2),E=Math.round(y.width*C),T=Math.round(y.height*C);(t.width!==E||t.height!==T)&&(t.width=E,t.height=T),r.clearRect(0,0,E,T);const b=Math.min(E/Li,T/cr);m={w:Li*b,h:cr*b,x:(E-Li*b)/2,y:(T-cr*b)/2},r.imageSmoothingEnabled=!0,r.drawImage(o,m.x,m.y,m.w,m.h),d&&S(d.x,d.z,d.heading,fw,9*C),h&&S(h.x,h.z,h.heading,dw,8*C),n.hidden=l.done,l.done||(n.textContent=Ne.map.building.replace("{pct}",String(Math.round(l.progress*100)))),f=!1}return{get isOpen(){return u},get progress(){return l.progress},setMarkers(y,C=null){h=y,d=C,u&&(f=!0)},toggle(){return u?this.close():this.show()},show(){return u=!0,e.hidden=!1,f=!0,v(),!0},close(){return u=!1,e.hidden=!0,!1},update(){!u||!f||v()}}}const mw=12,Up=.09,Lu=14;function gw(i){const e=new at;i.add(e);const t=[],n=[];for(let s=0;s<mw;s++){const r=new Rt;r.setAttribute("position",new Tt(new Float32Array(6),3));const o=new ca(r,new Tl({color:10475775,transparent:!0,opacity:1}));o.visible=!1,o.frustumCulled=!1,e.add(o),t.push(o)}return{group:e,fire(s,r,o=10475775){const a=t.pop()??n.shift();if(!a)return;const c=a.geometry.attributes.position;c.setXYZ(0,s.x,s.y,s.z),c.setXYZ(1,s.x+r.x*Lu,s.y+r.y*Lu,s.z+r.z*Lu),c.needsUpdate=!0,a.material.color.setHex(o),a.material.opacity=1,a.visible=!0,a.userData.life=Up,n.push(a)},update(s){for(let r=n.length-1;r>=0;r--){const o=n[r];o.userData.life-=s,o.userData.life<=0?(o.visible=!1,n.splice(r,1),t.push(o)):o.material.opacity=o.userData.life/Up}}}}const{resolveAsteroidCollisions:_w}=GM,lr=new URLSearchParams(window.location.search),xw=lr.get("skipIntro")==="1",vw=lr.get("land")==="1",Nu=lr.get("character")==="1",yw=lr.get("peaceful")==="1",Mw=lr.get("model"),Sw=document.getElementById("app"),Bn=new Tv({antialias:!0});Sw.appendChild(Bn.domElement);const _n=qy(),$n=Yy(),ut=nM(),Du=mf(),Ha=uM(),Uu=dM(),Ou=bM(),Fu=TM(),ur=FM(),Ga=zM();_n.add(ut.mesh),_n.add(Du),_n.add(Ha.mesh),_n.add(Uu.mesh),_n.add(Ou.mesh),_n.add(Fu.sprite);for(const i of ur.rovers)_n.add(i.mesh);_n.add(Ga.points),ut.mesh.visible=!0;const kt=JS(_n,[Du,Ha.mesh,Uu.mesh,Ou.mesh,Fu.sprite,Ga.points,...ur.rovers.map(i=>i.mesh)],$n,()=>zu.reset()),gt=ZM(),Pt=QM(),Op=window.matchMedia("(max-height: 480px), (max-width: 480px)");Op.matches&&(Pt.hide(),Pt.setHintVisible(!1));const uo=eS();Nu&&(uo.hide(),Pt.hide(),Pt.setHintVisible(!1));const rs=nS(document.body),Gt=hS(),Bu=xS(),kn=_S(ur),hn=vS({upgrades:Bu,mission:kn,audio:Gt,onClose:()=>Pt.show()});kn.setOnRepaired(i=>{Ga.fire(i.mesh.position),Gt.chirp()}),kn.setOnComplete(()=>{Gt.fanfare(),hn.show("complete")}),Pt.onFastTravel(()=>{Fp()}),Pt.onUpgradesClick(()=>{hn.show("upgrades")});function ku(){Jt.reset(),kt.reset(ut),ut.mesh.position.set(0,0,0),ut.velocity.set(0,0,0),ut.mesh.quaternion.identity(),ut.arcadeDamping=!1,kn.reset(),ur.reset(),Bu.reset(),os.reset(),Ky(),hn.hideAll(),zu.reset()}function Fp(){rs.active||kt.active||(Pt.setFastTravelActive(!0),rs.begin(ut,{onDone:()=>Pt.setFastTravelActive(!1)}))}const zu=DS($n),ho={x:0,y:0,turnX:0,turnY:0};let Hu=null;function Bp(i){Hu=i;const{width:e,height:t,pixelRatio:n}=i;Bn.setPixelRatio(n*Gu.scale),Bn.setSize(e,t,!1),$n.aspect=e/t,$n.updateProjectionMatrix(),Di&&Di.onResize(e,t),fo&&fo.onResize(e,t)}const Gu=n1(()=>{Hu&&Bp(Hu)}),bw=900,Ni={CINEMATIC:"cinematic",TITLE:"title",FLY:"fly"},fo=Nu?rb({renderer:Bn,modelUrl:Mw,who:lr.get("who")??"vexo"}):null,Di=xw||Nu?null:ES({renderer:Bn});let hr=Di?Ni.CINEMATIC:Ni.TITLE;Di&&uo.hide();const ww=AS();PS(Bn.domElement,Bp);const os=Zb({scene:_n,world:kt.world,origin:Qe}),kp=gw(_n),Jt=Gb({scene:_n,camera:$n,ship:ut,surface:kt,input:gt,renderer:Bn,monsters:os,onDown:()=>Va.show(as.has),onLanded:()=>as.saveAuto("landed"),onAboard:()=>as.saveAuto("aboard"),onShot:(i,e,t)=>{kp.fire(i,e,t?16765562:10475775),Gt.chirp(t?{fromHz:900,toHz:260,durationS:.16,peakGain:.16}:{fromHz:1400,toHz:700,durationS:.08,peakGain:.09}),t&&t.camp.members.every(n=>n.state==="dead")&&(Gt.fanfare(),as.saveAuto("camp cleared"))}}),as=ow({ship:ut,surface:kt,onFoot:Jt,monsters:os,mission:kn,upgrades:Bu,rovers:ur}),Va=aw({onContinue:()=>{const i=as.latest;ku(),as.restore(i),hr=Ni.FLY},onTitle:()=>{ku(),hr=Ni.TITLE,uo.show()}}),cs=pw({world:kt.world}),ls=rw({renderer:Bn,input:gt,saves:as,tablet:Pt.element});ls.setItems([{name:Ne.inventory.starterGun,note:Ne.inventory.starterGunNote,held:!0}]),kt.prewarm(Bn,$n),Jt.prewarm(Bn,$n);function Ew(){hr=Ni.TITLE,uo.show(),Op.matches||Pt.show()}let zp=performance.now();const po=new Kt;function Wa(i){const e=(i-zp)/1e3,t=Math.min(e,.1);if(zp=i,Gu.sample(e),Gu.update(t),fo){fo.update(t),fo.render(),requestAnimationFrame(Wa);return}if(ww.update(),hr===Ni.CINEMATIC){gt.consumeAnyJustPressed()&&(Di.skip(),gt.gamepad.suppressCurrentlyPressed()),Di.update(t),Di.render(),Di.active||Ew(),requestAnimationFrame(Wa);return}if(hr===Ni.TITLE)gt.consumeAnyJustPressed()&&(hr=Ni.FLY,uo.dismiss(),Pt.showFastTravel(),Pt.showUpgrades(),Pt.setMissionVisible(!0),Pt.showResetHint(),Pt.hide(),gt.enableGyro().catch(()=>{}),Gt.start(),vw&&kt.enter(ut));else{const s=gt.sample(),r=!rs.suppressInput&&!hn.isOpen();if(ho.x=r?s.lookX:0,ho.y=r?s.lookY:0,ho.turnX=r?s.lookTurnX:0,ho.turnY=r?s.lookTurnY:0,(gt.keyboard.consumeJustPressed(["KeyM"])||gt.gamepad.consumeJustPressed(Ct.Select))&&cs.toggle(),(gt.keyboard.consumeJustPressed(["KeyX"])||gt.gamepad.consumeJustPressed(Ct.X))&&(ut.arcadeDamping=!ut.arcadeDamping),(gt.keyboard.consumeJustPressed(["KeyF"])||gt.gamepad.consumeJustPressed(Ct.R1))&&Fp(),(gt.keyboard.consumeJustPressed(["KeyU"])||gt.gamepad.consumeJustPressed(Ct.Y))&&(hn.isOpen()?(hn.hideAll(),Pt.show()):hn.show("upgrades")),hn.isOpen()&&(gt.gamepad.consumeJustPressed(Ct.B)||gt.keyboard.consumeJustPressed(["Escape"]))&&(hn.hideAll(),Pt.show()),hn.isOpen()){const c=(gt.gamepad.isButtonDown(Ct.Down)?1:0)-(gt.gamepad.isButtonDown(Ct.Up)?1:0),u=-s.throttle||c;u&&hn.scrollBy(u*bw*t)}!Va.isOpen&&(gt.keyboard.consumeJustPressed(["KeyT"])||gt.gamepad.consumeJustPressed(Ct.Start))&&ls.toggle(),(ls.isOpen||cs.isOpen)&&(gt.gamepad.consumeJustPressed(Ct.B)||gt.keyboard.consumeJustPressed(["Escape"]))&&(ls.close(),cs.close()),(gt.keyboard.consumeJustPressed(["KeyR"])||gt.gamepad.consumeJustPressed(Ct.L3))&&ku();const o=hn.isOpen()||rs.suppressInput?null:s;Va.isOpen?(Va.update(gt,Ct),Gt.setThrottle(0),Gt.setSprinting(!1)):cs.isOpen?(Gt.setThrottle(0),Gt.setSprinting(!1),kt.active&&kt.update(ut,t)):ls.isOpen?(ls.update(t,s),Gt.setThrottle(0),Gt.setSprinting(!1),kt.active&&kt.update(ut,t)):Jt.active?(Jt.update(t,o),kt.update(ut,t),os.update(t,Jt.quarry,(c,l,u)=>Jt.takeHit(c,l,u)),Gt.setThrottle(0),Gt.setSprinting(Jt.sprinting)):rs.suppressInput||hn.isOpen()?Gt.setThrottle(0):(sM(ut,s,t),Gt.setThrottle(s.throttle),kt.update(ut,t),_w({position:ut.mesh.position,velocity:ut.velocity},Ha.instances),ut.braking&&ut.velocity.set(0,0,0)),Jt.active||(Jt.update(t,o),Gt.setSprinting(!1));const a=gt.keyboard.isDown("KeyH")||gt.gamepad.isButtonDown(Ct.L1);kn.update({shipPos:ut.mesh.position,shipSpeed:ut.velocity.length(),holdActive:a&&!hn.isOpen()&&!rs.suppressInput&&!kt.active,dt:t})}if(os.setActive(kt.active&&!yw),kt.active&&os.focus(ut.mesh.position.x-Qe.x,ut.mesh.position.z-Qe.z),kt.active&&!Jt.active&&os.update(t,null,()=>{}),kp.update(t),kt.active||cs.isOpen){const s={x:ut.mesh.position.x-Qe.x,z:ut.mesh.position.z-Qe.z,heading:po.setFromQuaternion(ut.mesh.quaternion,"YXZ").y};cs.setMarkers(Jt.active?{x:Jt.position.x-Qe.x,z:Jt.position.z-Qe.z,heading:Jt.heading}:s,Jt.active?s:null),cs.update()}rs.update(t),Gt.update(t),Ha.update(t),Uu.update(t),Ou.update(t),Fu.update($n),ur.update(t),Ga.update(t),gf(Du,$n),Jt.active||zu.update(ut,ho,t),Bn.render(_n,$n),ls.render(),po.setFromQuaternion(ut.mesh.quaternion,"YXZ"),Pt.update({velocity:ut.velocity.length(),eulerDeg:{x:zi.radToDeg(po.x),y:zi.radToDeg(po.y),z:zi.radToDeg(po.z)},dt:t,sources:gt.activeSources(),dampingOn:ut.arcadeDamping}),Pt.updateMission({remaining:kn.remaining(),total:kn.totalRovers(),credits:kn.credits});const n=kn.repairing??kn.inRange;Pt.updateHack({name:n?n.name:null,progress:n?n.repairProgress:0}),requestAnimationFrame(Wa)}requestAnimationFrame(Wa)})();
