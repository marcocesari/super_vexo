(function(){"use strict";var $u=document.createElement("style");$u.textContent=`html,body{margin:0;padding:0;width:100%;height:100%;height:100dvh;background:#000;overflow:hidden;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#d6f0ff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}body,#app{position:fixed;inset:0}canvas{display:block;position:fixed;inset:0;width:100%;height:100%;touch-action:none}#cinematic{position:fixed;inset:0;z-index:12;pointer-events:none;color:#e6f3ff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.cinematic__skip{position:absolute;top:calc(1rem + env(safe-area-inset-top));right:calc(1.25rem + env(safe-area-inset-right));font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6aa3d1;opacity:.65}.cinematic__text{position:absolute;left:0;right:0;bottom:12%;text-align:center;padding:0 2rem;opacity:0;transition:opacity .9s ease;text-shadow:0 0 18px rgba(80,160,255,.4),0 2px 8px rgba(0,0,0,.85)}.cinematic__text--in{opacity:1}.cinematic__text p{font-size:clamp(1.05rem,2vw,1.6rem);letter-spacing:.04em;line-height:1.5;margin:.3em 0;color:#cbe2ff}.cinematic__flash{position:absolute;inset:0;background:radial-gradient(circle at center,#fff,#d3eaff,#7fb8ee 80%,#112540);opacity:0;pointer-events:none}#title-card{position:fixed;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#080e1e8c,#000000d9 70%);transition:opacity .5s ease;opacity:1}#title-card.title-card--hidden{opacity:0;pointer-events:none}.title-card__inner{text-align:center;padding:2rem 3rem}.title-card__title{font-size:clamp(1.6rem,4vw,3rem);letter-spacing:.05em;margin:0 0 1.5rem;color:#b8e0ff;text-shadow:0 0 24px rgba(80,160,255,.4)}.title-card__prompt{font-size:clamp(.9rem,1.5vw,1.1rem);color:#6aa3d1;margin:0;animation:pulse 1.4s ease-in-out infinite}@keyframes pulse{0%,to{opacity:.5}50%{opacity:1}}#tablet-hint{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;padding:4px 10px;background:#0a141eb3;color:#9ab3c9;font:11px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;border:1px solid rgba(120,160,200,.18);pointer-events:none}#tablet-hint[hidden]{display:none}#tablet{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;pointer-events:none}.tablet-frame{padding:6px;background:linear-gradient(135deg,#1a232e,#0a0f15);border-radius:14px;box-shadow:0 4px 24px #0009,inset 0 0 0 1px #ffffff0d}.tablet-bezel{padding:6px;background:#050709;border-radius:10px}.tablet-screen{width:220px;padding:10px 12px;background:linear-gradient(180deg,#061320,#03070d);border-radius:6px;font-size:12px;line-height:1.5;color:#9fd1ff;box-shadow:inset 0 0 18px #3278c81f}.tablet-titlebar{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid rgba(80,140,200,.18);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1}.tablet-app{font-weight:600}.tablet-source{padding:1px 6px;border-radius:3px;background:#50a0ff1f;color:#b8e0ff}.tablet-row{display:flex;justify-content:space-between}.tablet-row--small{font-size:10px;opacity:.7;margin-top:4px}.tablet-row--hint{margin-top:8px;padding-top:6px;border-top:1px solid rgba(80,140,200,.12);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1;opacity:.7;text-align:right}.tablet-label{color:#6aa3d1}.tablet-value{color:#d6f0ff;font-variant-numeric:tabular-nums}.tablet-app-btn{display:flex;margin-top:10px;width:100%;padding:8px 10px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:6px;color:#d6f0ff;font-family:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .4s ease}.tablet-app-btn--visible{opacity:1;pointer-events:auto}.tablet-app-btn:hover:not(:disabled){background:linear-gradient(135deg,#235080,#103050)}.tablet-app-btn:active:not(:disabled){transform:translateY(1px)}.tablet-app-btn:disabled{cursor:progress;opacity:.65}.tablet-app-btn--active{box-shadow:0 0 16px #78c8ff99}.tablet-app-btn__icon{font-size:14px;opacity:.85}.tablet-app-btn__label{flex:1;text-align:left;font-weight:600}.tablet-app-btn__key{padding:1px 6px;border-radius:3px;background:#78b4f02e;font-size:10px}.tablet-mission{margin-top:8px;padding-top:8px;border-top:1px solid rgba(80,140,200,.18)}.tablet-hack{margin-top:8px;padding:8px;background:#50a0ff14;border:1px solid rgba(120,180,240,.35);border-radius:4px}.tablet-hack__name{font-size:11px;font-weight:700;letter-spacing:.1em;color:#d6f0ff}.tablet-hack__hint{font-size:10px;color:#9adfff;opacity:.85;margin-bottom:4px}.tablet-hack__bar{height:6px;background:#ffffff14;border-radius:3px;overflow:hidden}.tablet-hack__fill{height:100%;width:0%;background:linear-gradient(90deg,#4aa3ff,#9adfff);transition:none}.screen-overlay{position:fixed;inset:0;z-index:8;display:flex;align-items:center;justify-content:center;padding:2rem;background:radial-gradient(ellipse at center,#080e1ec7,#000000eb 80%);pointer-events:auto}.screen-overlay[hidden]{display:none}.screen-card{max-width:460px;max-height:84vh;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:1.6rem 1.8rem;background:linear-gradient(160deg,#0e1e30,#050a14);border:1px solid rgba(120,180,240,.3);border-radius:10px;box-shadow:0 8px 36px #0000008c,inset 0 0 0 1px #ffffff08;color:#d6f0ff;text-align:center}.screen-card--wide{max-width:520px;text-align:left}.screen-card{scrollbar-width:thin;scrollbar-color:rgba(120,180,240,.4) transparent}.screen-card::-webkit-scrollbar{width:6px}.screen-card::-webkit-scrollbar-track{background:transparent}.screen-card::-webkit-scrollbar-thumb{background:#78b4f066;border-radius:3px}.screen-card__title{margin:0 0 .5rem;font-size:clamp(1.2rem,2.2vw,1.8rem);letter-spacing:.08em;color:#b8e0ff}.screen-card__body{color:#9fc6e7;font-size:.95rem;line-height:1.5}.screen-card__row{margin:.8rem 0}.screen-card__hint{margin:0 0 .8rem;padding-bottom:.6rem;border-bottom:1px solid rgba(80,140,200,.15);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6aa3d1;opacity:.75;text-align:center}.screen-card__credits{font-size:1.1rem;font-weight:700;color:#ffdf80}.screen-card__credits-label{font-size:.7rem;letter-spacing:.15em;color:#6aa3d1;margin-right:6px;font-weight:400}.screen-card__actions{display:flex;justify-content:center;gap:10px;margin-top:1rem}.screen-btn{padding:8px 14px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:5px;color:#d6f0ff;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.screen-btn--primary{background:linear-gradient(135deg,#2660a0,#154070);border-color:#a0dcff99}.screen-btn--small{padding:5px 10px;font-size:11px}.screen-btn:hover:not(:disabled){filter:brightness(1.15)}.screen-btn:disabled{opacity:.45;cursor:not-allowed}.upgrade-list{list-style:none;padding:0;margin:0}.upgrade-item{padding:10px 12px;margin-bottom:8px;background:#50a0ff0f;border:1px solid rgba(120,180,240,.18);border-radius:6px}.upgrade-item--bought{opacity:.65;border-color:#64dcb466}.upgrade-item__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.upgrade-item__name{font-weight:700;color:#d6f0ff;letter-spacing:.05em}.upgrade-item__cost{color:#ffdf80;font-weight:700;font-variant-numeric:tabular-nums}.upgrade-item__desc{margin:4px 0 8px;font-size:12px;color:#9fc6e7;line-height:1.4}#warp-flash{position:fixed;inset:0;background:radial-gradient(circle at center,#fff,#c4dfff,#6aa3d1 80%,#0a1a30);pointer-events:none;opacity:0;z-index:6;transition:none}@media(max-height:480px){.title-card__inner{padding:1rem 1.5rem;max-width:62vw}.title-card__title{font-size:clamp(1rem,2.6vw,1.6rem);margin-bottom:.9rem}.title-card__prompt{font-size:.85rem}.cinematic__text{bottom:8%}.cinematic__text p{font-size:1rem;line-height:1.35}.tablet-screen{width:180px;font-size:11px}.screen-overlay{padding:1rem}.screen-card{padding:1rem 1.2rem;max-height:88vh}.screen-card__title{font-size:1.1rem}.upgrade-item{padding:8px 10px;margin-bottom:6px}}@media(max-width:480px){.tablet-screen{width:min(58vw,220px)}.title-card__inner{padding:1.5rem 1rem}}#landing-banner{position:fixed;left:50%;bottom:calc(2.2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;padding:.7rem 1.5rem;text-align:center;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none;transition:opacity 1.2s ease}#landing-banner[hidden]{display:none}.landing-banner--fading{opacity:0}.landing-banner__town{font-size:10px;letter-spacing:.22em;color:#6aa3d1}.landing-banner__street{margin-top:2px;font-size:1.05rem;letter-spacing:.04em;color:#eaf4ff}.landing-banner__hint{margin-top:6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8fb8d8;opacity:.8}@media(max-height:480px){#landing-banner{bottom:calc(1rem + env(safe-area-inset-bottom));padding:.5rem 1.1rem}.landing-banner__street{font-size:.9rem}}.title-card__build{margin:1.1rem 0 0;font-size:9px;letter-spacing:.16em;color:#4d7ba1;opacity:.65}#map-screen{position:fixed;inset:0;z-index:11;display:flex;align-items:center;justify-content:center;background:#040910e6}#map-screen[hidden]{display:none}.map-panel{display:flex;flex-direction:column;gap:.5rem;width:min(1100px,96vw);height:min(760px,92vh);padding:.9rem 1rem .7rem;background:#0a1622f0;border:1px solid rgba(120,180,240,.28);border-radius:10px}.map-head{display:flex;align-items:baseline;justify-content:space-between}.map-title{font-size:.95rem;letter-spacing:.24em;color:#cfe4f6}.map-scale{font-size:10px;letter-spacing:.12em;color:#6f9dc4}.map-frame{position:relative;flex:1 1 auto;min-height:0;border-radius:6px;overflow:hidden;background:#0a1622}.map-canvas{position:relative;inset:auto;width:100%;height:100%;display:block}.map-building{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;font-size:11px;letter-spacing:.14em;color:#9fd8ff;background:#060e18cc;padding:.5rem .9rem;border-radius:5px}#game-over{position:fixed;inset:0;z-index:12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.9rem;background:#020408e0;animation:game-over-in 1.1s ease-out}#game-over[hidden]{display:none}@keyframes game-over-in{0%{opacity:0}40%{opacity:0}to{opacity:1}}.game-over__sign{font-size:clamp(2.2rem,9vw,4.2rem);letter-spacing:.3em;color:#ff4d5e;text-shadow:0 0 24px rgba(255,77,94,.55),0 3px 0 rgba(0,0,0,.6)}.game-over__ask{margin:0;color:#cfe4f6;font-size:.95rem;letter-spacing:.08em}.game-over__buttons{display:flex;gap:1rem;margin-top:.4rem}.game-over__btn{font:inherit;font-size:.85rem;letter-spacing:.14em;padding:.6rem 1.3rem;color:#d8ecff;background:#0a1828e6;border:1px solid rgba(120,180,240,.35);border-radius:6px;cursor:pointer}.game-over__btn--on{border-color:#5effa6;color:#eaffef;box-shadow:0 0 18px #5effa640}.game-over__btn:disabled{opacity:.35;cursor:default}.game-over__hint{margin:.3rem 0 0;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4}#inventory{background:none}.inventory__panel{display:flex;gap:1.4rem;width:min(920px,94vw);height:min(560px,82vh)}.inventory__list{flex:1 1 56%;display:flex;flex-direction:column;min-width:0;padding:1.4rem;background:linear-gradient(160deg,#0e1e30f5,#050a14f7);border:1px solid rgba(120,180,240,.28);border-radius:10px;box-shadow:0 18px 60px #0009}.inventory__figure{flex:1 1 44%;position:relative;border:1px solid rgba(120,180,240,.18);border-radius:8px;touch-action:none;user-select:none;cursor:grab}.inventory__figure:active{cursor:grabbing}.inventory__figure-hint{position:absolute;bottom:.5rem;left:0;right:0;margin:0;text-align:center;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6f9dc4;pointer-events:none}.inventory__tabs{display:flex;gap:.6rem;margin:.2rem 0 .9rem}.inventory__tab{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4;padding:.25rem .7rem;border:1px solid rgba(120,180,240,.22);border-radius:999px}.inventory__tab--on{color:#d8ecff;border-color:#5effa680;background:#5effa614}.inventory__items{list-style:none;margin:0;padding:0;overflow-y:auto;flex:1 1 auto;overscroll-behavior:contain;touch-action:pan-y}.inventory__item{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;padding:.6rem .75rem;border:1px solid rgba(120,180,240,.16);border-radius:6px;margin-bottom:.5rem;background:#0a162699}.inventory__item--held{border-color:#5effa673;box-shadow:inset 0 0 18px #5effa614}.inventory__item--empty{color:#6f9dc4;justify-content:center}.inventory__tablet{flex:1 1 auto;min-height:0;overflow-y:auto}.inventory__tablet[hidden]{display:none}.inventory__tablet #tablet{position:static;inset:auto;z-index:auto;pointer-events:auto}.inventory__tablet .tablet-frame{width:100%}.inventory__tablet .tablet-bezel,.inventory__tablet .tablet-screen{width:100%;box-sizing:border-box}.inventory__system{flex:1 1 auto;display:flex;flex-direction:column;align-items:flex-start;gap:.7rem}.inventory__system[hidden]{display:none}.inventory__save{font:inherit;font-size:.85rem;letter-spacing:.16em;padding:.7rem 1.4rem;color:#eaffef;background:#0c281cd9;border:1px solid rgba(94,255,166,.45);border-radius:6px;cursor:pointer}.inventory__save:hover{background:#123c28e6}.inventory__saved{margin:0;font-size:11px;letter-spacing:.1em;color:#7fb0d8}.inventory__item-name{color:#eaf4ff;font-size:.95rem;letter-spacing:.04em}.inventory__item-note{color:#7fb0d8;font-size:11px;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}@media(max-width:700px),(max-height:460px){.inventory__panel{flex-direction:row;height:88vh;padding:.8rem;gap:.8rem}.inventory__item{padding:.4rem .55rem}.inventory__item-name{font-size:.85rem}}#hearts{position:fixed;top:calc(.8rem + env(safe-area-inset-top));left:50%;transform:translate(-50%);z-index:6;display:flex;gap:6px;pointer-events:none;font-size:22px;line-height:1}#hearts[hidden]{display:none}.heart{color:#ff4d5e;text-shadow:0 0 6px rgba(255,77,94,.55),0 1px 2px rgba(0,0,0,.8)}.heart--spent{color:#ffffff38;text-shadow:0 1px 2px rgba(0,0,0,.8)}@keyframes hearts-hit{0%{transform:translate(-50%) scale(1.35);filter:brightness(2.2)}to{transform:translate(-50%) scale(1);filter:brightness(1)}}.hearts--hit{animation:hearts-hit .45s ease-out}#stamina-wheel{position:fixed;left:0;top:0;z-index:6;width:56px;height:56px;margin:-28px 0 0 -28px;pointer-events:none;transition:opacity .2s linear}#stamina-wheel[hidden]{display:none}.stamina-wheel__track{fill:none;stroke:#06140e8c;stroke-width:5}.stamina-wheel__fill{fill:none;stroke:#5effa6;stroke-width:4;stroke-linecap:round;transform:rotate(-90deg);transform-origin:28px 28px;filter:drop-shadow(0 0 3px rgba(94,255,166,.7))}.stamina-wheel--winded .stamina-wheel__fill{stroke:#ff8a5c;filter:drop-shadow(0 0 4px rgba(255,138,92,.8))}#foot-prompt{position:fixed;left:50%;bottom:calc(7rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:6;padding:.45rem 1.1rem;font-size:11px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;color:#dceaf7;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none}#foot-prompt[hidden]{display:none}@media(max-height:480px){#foot-prompt{bottom:calc(4.4rem + env(safe-area-inset-bottom));font-size:10px;padding:.35rem .8rem}}#character-label{position:fixed;left:50%;bottom:calc(2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;text-align:center;pointer-events:none}.character-label__name{font-size:1.6rem;letter-spacing:.4em;text-indent:.4em;color:#eaf4ff;text-shadow:0 0 18px rgba(83,255,157,.45)}.character-label__hint{margin-top:6px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6aa3d1;opacity:.75}
/*$vite$:1*/`,document.head.appendChild($u);const qa="169",Xp=0,ju=1,qp=2,Ju=1,Zu=2,ei=3,ti=0,Xt=1,qt=2,xi=0,ps=1,ni=2,Qu=3,eh=4,Yp=5,Hi=100,Kp=101,$p=102,jp=103,Jp=104,Zp=200,Qp=201,em=202,tm=203,Ya=204,Ka=205,nm=206,im=207,sm=208,rm=209,om=210,am=211,cm=212,lm=213,um=214,$a=0,ja=1,Ja=2,ms=3,Za=4,Qa=5,ec=6,tc=7,th=0,hm=1,dm=2,vi=0,fm=1,pm=2,mm=3,nh=4,gm=5,_m=6,xm=7,ih="attached",vm="detached",sh=300,gs=301,_s=302,nc=303,ic=304,_o=306,yi=1e3,Mi=1001,xo=1002,on=1003,rh=1004,gr=1005,fn=1006,vo=1007,ii=1008,si=1009,oh=1010,ah=1011,_r=1012,sc=1013,Gi=1014,An=1015,xr=1016,rc=1017,oc=1018,xs=1020,ch=35902,lh=1021,uh=1022,vn=1023,hh=1024,dh=1025,vs=1026,ys=1027,ac=1028,cc=1029,fh=1030,lc=1031,uc=1033,yo=33776,Mo=33777,So=33778,bo=33779,hc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,_c=37496,xc=37808,vc=37809,yc=37810,Mc=37811,Sc=37812,bc=37813,wc=37814,Ec=37815,Ac=37816,Tc=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,wo=36492,Lc=36494,Nc=36495,ph=36283,Dc=36284,Uc=36285,Oc=36286,ym=2200,Mm=2201,Sm=2202,vr=2300,yr=2301,Fc=2302,Ms=2400,Ss=2401,Eo=2402,Bc=2500,bm=2501,wm=0,mh=1,kc=2,Em=3200,Am=3201,gh=0,Tm=1,Si="",Et="srgb",Yt="srgb-linear",zc="display-p3",Ao="display-p3-linear",To="linear",yt="srgb",Ro="rec709",Co="p3",bs=7680,_h=519,Rm=512,Cm=513,Pm=514,xh=515,Im=516,Lm=517,Nm=518,Dm=519,Hc=35044,vh="300 es",ri=2e3,Po=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const Mr=Math.PI/180,ws=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function Gc(s,e){return(s%e+e)%e}function Um(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Om(s,e,t){return s!==e?(t-s)/(e-s):0}function Sr(s,e,t){return(1-t)*s+t*e}function Fm(s,e,t,n){return Sr(s,e,1-Math.exp(-t*n))}function Bm(s,e=1){return e-Math.abs(Gc(s,e*2)-e)}function km(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Hm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gm(s,e){return s+Math.random()*(e-s)}function Vm(s){return s*(.5-Math.random())}function Wm(s){s!==void 0&&(yh=s);let e=yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xm(s){return s*Mr}function qm(s){return s*ws}function Ym(s){return(s&s-1)===0&&s!==0}function Km(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $m(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function gt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Wi={DEG2RAD:Mr,RAD2DEG:ws,generateUUID:yn,clamp:Ft,euclideanModulo:Gc,mapLinear:Um,inverseLerp:Om,lerp:Sr,damp:Fm,pingpong:Bm,smoothstep:km,smootherstep:zm,randInt:Hm,randFloat:Gm,randFloatSpread:Vm,seededRandom:Wm,degToRad:Xm,radToDeg:qm,isPowerOfTwo:Ym,ceilPowerOfTwo:Km,floorPowerOfTwo:$m,setQuaternionFromProperEuler:jm,normalize:gt,denormalize:Tn};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],p=i[3],m=i[6],M=i[1],y=i[4],v=i[7],C=i[2],A=i[5],T=i[8];return r[0]=o*x+a*M+c*C,r[3]=o*p+a*y+c*A,r[6]=o*m+a*v+c*T,r[1]=l*x+u*M+h*C,r[4]=l*p+u*y+h*A,r[7]=l*m+u*v+h*T,r[2]=d*x+f*M+g*C,r[5]=d*p+f*y+g*A,r[8]=d*m+f*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vc.makeScale(e,t)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new tt;function Mh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jm(){const s=br("canvas");return s.style.display="block",s}const Sh={};function Io(s){s in Sh||(Sh[s]=!0,console.warn(s))}function Zm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Qm(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function e0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Yt]:{transfer:To,primaries:Ro,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Et]:{transfer:yt,primaries:Ro,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ao]:{transfer:To,primaries:Co,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(wh),fromReference:s=>s.applyMatrix3(bh)},[zc]:{transfer:yt,primaries:Co,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(wh),fromReference:s=>s.applyMatrix3(bh).convertLinearToSRGB()}},t0=new Set([Yt,Ao]),ht={enabled:!0,_workingColorSpace:Yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!t0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=wr[e].toReference,i=wr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wr[s].primaries},getTransfer:function(s){return s===Si?To:wr[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(wr[e].luminanceCoefficients)}};function Es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class n0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=br("canvas")),As.width=e.width,As.height=e.height;const n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Es(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Es(t[n]/255)*255):t[n]=Es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class Eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xc(i[o].image)):r.push(Xc(i[o]))}else r=Xc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?n0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s0=0;class Bt extends Vi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Mi,i=Mi,r=fn,o=ii,a=vn,c=si,l=Bt.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=yn(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null,Bt.DEFAULT_MAPPING=sh,Bt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,C=(m+1)/2,A=(u+d)/4,T=(h+x)/4,E=(g+p)/4;return y>v&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=T/n):v>C?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=E/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=T/r,i=E/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r0 extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends r0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ah extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let p=1-a;const m=c*d+l*f+u*g+h*x,M=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,m*M);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const v=a*M;if(c=c*p+d*v,l=l*p+f*v,u=u*p+g*v,h=h*p+x*v,p===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new U,Th=new Kt;class zn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),No.subVectors(this.max,Er),Ts.subVectors(e.a,Er),Rs.subVectors(e.b,Er),Cs.subVectors(e.c,Er),bi.subVectors(Rs,Ts),wi.subVectors(Cs,Rs),qi.subVectors(Ts,Cs);let t=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-qi.z,qi.y,bi.z,0,-bi.x,wi.z,0,-wi.x,qi.z,0,-qi.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-qi.y,qi.x,0];return!Yc(t,Ts,Rs,Cs,No)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,Ts,Rs,Cs,No))?!1:(Do.crossVectors(bi,wi),t=[Do.x,Do.y,Do.z],Yc(t,Ts,Rs,Cs,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new U,new U,new U,new U,new U,new U,new U,new U],Rn=new U,Lo=new zn,Ts=new U,Rs=new U,Cs=new U,bi=new U,wi=new U,qi=new U,Er=new U,No=new U,Do=new U,Yi=new U;function Yc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Yi.fromArray(s,r);const a=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const a0=new zn,Ar=new U,Kc=new U;class Hn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):a0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Kc)),this.expandByPoint(Ar.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new U,$c=new U,Uo=new U,Ei=new U,jc=new U,Oo=new U,Jc=new U;class Fo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$c.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub($c);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Uo),a=Ei.dot(this.direction),c=-Ei.dot(Uo),l=Ei.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($c).addScaledVector(Uo,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){jc.subVectors(t,e),Oo.subVectors(n,e),Jc.crossVectors(jc,Oo);let o=this.direction.dot(Jc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const c=a*this.direction.dot(Oo.crossVectors(Ei,Oo));if(c<0)return null;const l=a*this.direction.dot(jc.cross(Ei));if(l<0||c+l>o)return null;const u=-a*Ei.dot(Jc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,g,x,p){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,x,p)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,l0)}lookAt(e,t,n){const i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ai.crossVectors(n,pn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ai.crossVectors(n,pn)),Ai.normalize(),Bo.crossVectors(pn,Ai),i[0]=Ai.x,i[4]=Bo.x,i[8]=pn.x,i[1]=Ai.y,i[5]=Bo.y,i[9]=pn.y,i[2]=Ai.z,i[6]=Bo.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],M=n[3],y=n[7],v=n[11],C=n[15],A=i[0],T=i[4],E=i[8],O=i[12],_=i[1],S=i[5],P=i[9],I=i[13],z=i[2],q=i[6],w=i[10],W=i[14],F=i[3],Y=i[7],k=i[11],G=i[15];return r[0]=o*A+a*_+c*z+l*F,r[4]=o*T+a*S+c*q+l*Y,r[8]=o*E+a*P+c*w+l*k,r[12]=o*O+a*I+c*W+l*G,r[1]=u*A+h*_+d*z+f*F,r[5]=u*T+h*S+d*q+f*Y,r[9]=u*E+h*P+d*w+f*k,r[13]=u*O+h*I+d*W+f*G,r[2]=g*A+x*_+p*z+m*F,r[6]=g*T+x*S+p*q+m*Y,r[10]=g*E+x*P+p*w+m*k,r[14]=g*O+x*I+p*W+m*G,r[3]=M*A+y*_+v*z+C*F,r[7]=M*T+y*S+v*q+C*Y,r[11]=M*E+y*P+v*w+C*k,r[15]=M*O+y*I+v*W+C*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+p*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],M=h*p*l-x*d*l+x*c*f-a*p*f-h*c*m+a*d*m,y=g*d*l-u*p*l-g*c*f+o*p*f+u*c*m-o*d*m,v=u*x*l-g*h*l+g*a*f-o*x*f-u*a*m+o*h*m,C=g*h*c-u*x*c-g*a*d+o*x*d+u*a*p-o*h*p,A=t*M+n*y+i*v+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(x*d*r-h*p*r-x*i*f+n*p*f+h*i*m-n*d*m)*T,e[2]=(a*p*r-x*c*r+x*i*l-n*p*l-a*i*m+n*c*m)*T,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*T,e[4]=y*T,e[5]=(u*p*r-g*d*r+g*i*f-t*p*f-u*i*m+t*d*m)*T,e[6]=(g*c*r-o*p*r-g*i*l+t*p*l+o*i*m-t*c*m)*T,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*T,e[8]=v*T,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*m-t*h*m)*T,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*m+t*a*m)*T,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*T,e[12]=C*T,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*p+t*h*p)*T,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*p-t*a*p)*T,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,p=o*h,m=a*h,M=c*l,y=c*u,v=c*h,C=n.x,A=n.y,T=n.z;return i[0]=(1-(x+m))*C,i[1]=(f+v)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+m))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+y)*T,i[9]=(p-M)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ps.set(i[0],i[1],i[2]).length();const o=Ps.set(i[4],i[5],i[6]).length(),a=Ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Cn.copy(this);const l=1/r,u=1/o,h=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ri){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===ri)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Po)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ri){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let g,x;if(a===ri)g=(o+r)*h,x=-2*h;else if(a===Po)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ps=new U,Cn=new $e,c0=new U(0,0,0),l0=new U(1,1,1),Ai=new U,Bo=new U,pn=new U,Rh=new $e,Ch=new Kt;class $t{constructor(e=0,t=0,n=0,i=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u0=0;const Ih=new U,Is=new Kt,ci=new $e,ko=new U,Tr=new U,h0=new U,d0=new Kt,Lh=new U(1,0,0),Nh=new U(0,1,0),Dh=new U(0,0,1),Uh={type:"added"},f0={type:"removed"},Ls={type:"childadded",child:null},Zc={type:"childremoved",child:null};class Mt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new U,t=new $t,n=new Kt,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new tt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Tr,ko,this.up):ci.lookAt(ko,Tr,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Is.setFromRotationMatrix(ci),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new U(0,1,0),Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new U,li=new U,Qc=new U,ui=new U,Ns=new U,Ds=new U,Oh=new U,el=new U,tl=new U,nl=new U,il=new ft,sl=new ft,rl=new ft;class Mn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Pn.subVectors(i,t),li.subVectors(n,t),Qc.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(li),c=Pn.dot(Qc),l=li.dot(li),u=li.dot(Qc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,n),rl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(il,r.x),o.addScaledVector(sl,r.y),o.addScaledVector(rl,r.z),o}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),li.subVectors(e,t),Pn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Pn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ns.subVectors(i,n),Ds.subVectors(r,n),el.subVectors(e,n);const c=Ns.dot(el),l=Ds.dot(el);if(c<=0&&l<=0)return t.copy(n);tl.subVectors(e,i);const u=Ns.dot(tl),h=Ds.dot(tl);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ns,o);nl.subVectors(e,r);const f=Ns.dot(nl),g=Ds.dot(nl);if(g>=0&&f<=g)return t.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ds,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Oh.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Oh,a);const m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Ns,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},zo={h:0,s:0,l:0};function ol(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Gc(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ol(o,r,e+1/3),this.g=ol(o,r,e),this.b=ol(o,r,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=Fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Wc(e.r),this.g=Wc(e.g),this.b=Wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ht.fromWorkingColorSpace(tn.copy(this),e),Math.round(Ft(tn.r*255,0,255))*65536+Math.round(Ft(tn.g*255,0,255))*256+Math.round(Ft(tn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Et){ht.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(zo);const n=Sr(Ti.h,zo.h,t),i=Sr(Ti.s,zo.s,t),r=Sr(Ti.l,zo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ve;Ve.NAMES=Fh;let p0=0;class In extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=ps,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Ka,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nn extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new U,Ho=new ge;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}}class Bh extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kh extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let m0=0;const Sn=new $e,al=new Mt,Us=new U,mn=new zn,Rr=new zn,Ht=new U;class Ct extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?kh:Bh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(mn.min,Rr.min),mn.expandByPoint(Ht),Ht.addVectors(mn.max,Rr.max),mn.expandByPoint(Ht)):(mn.expandByPoint(Rr.min),mn.expandByPoint(Rr.max))}mn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(Us.fromBufferAttribute(e,l),Ht.add(Us)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new U,c[E]=new U;const l=new U,u=new U,h=new U,d=new ge,f=new ge,g=new ge,x=new U,p=new U;function m(E,O,_){l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,O),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,_),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(S),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(S),a[E].add(x),a[O].add(x),a[_].add(x),c[E].add(p),c[O].add(p),c[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,O=M.length;E<O;++E){const _=M[E],S=_.start,P=_.count;for(let I=S,z=S+P;I<z;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new U,v=new U,C=new U,A=new U;function T(E){C.fromBufferAttribute(i,E),A.copy(C);const O=a[E];y.copy(O),y.sub(C.multiplyScalar(C.dot(O))).normalize(),v.crossVectors(A,O);const S=v.dot(c[E])<0?-1:1;o.setXYZW(E,y.x,y.y,y.z,S)}for(let E=0,O=M.length;E<O;++E){const _=M[E],S=_.start,P=_.count;for(let I=S,z=S+P;I<z;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new Rt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new $e,Ki=new Fo,Go=new Hn,Hh=new U,Vo=new U,Wo=new U,Xo=new U,cl=new U,qo=new U,Gh=new U,Yo=new U;class re extends Mt{constructor(e=new Ct,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(cl.fromBufferAttribute(h,e),o?qo.addScaledVector(cl,u):qo.addScaledVector(cl.sub(t),u))}t.add(qo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(Go.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Go,Hh)===null||Ki.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(zh.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,C=y;v<C;v+=3){const A=a.getX(v),T=a.getX(v+1),E=a.getX(v+2);i=Ko(this,m,e,n,l,u,h,A,T,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const M=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);i=Ko(this,o,e,n,l,u,h,M,y,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,C=y;v<C;v+=3){const A=v,T=v+1,E=v+2;i=Ko(this,m,e,n,l,u,h,A,T,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const M=p,y=p+1,v=p+2;i=Ko(this,o,e,n,l,u,h,M,y,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function g0(s,e,t,n,i,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ti,a),c===null)return null;Yo.copy(a),Yo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Yo);return l<t.near||l>t.far?null:{distance:l,point:Yo.clone(),object:s}}function Ko(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Vo),s.getVertexPosition(c,Wo),s.getVertexPosition(l,Xo);const u=g0(s,e,t,n,Vo,Wo,Xo,Gh);if(u){const h=new U;Mn.getBarycoord(Gh,Vo,Wo,Xo,h),i&&(u.uv=Mn.getInterpolatedAttribute(i,a,c,l,h,new ge)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,h,new ge)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};Mn.getNormal(Vo,Wo,Xo,d.normal),u.face=d,u.barycoord=h}return u}class Gt extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function g(x,p,m,M,y,v,C,A,T,E,O){const _=v/T,S=C/E,P=v/2,I=C/2,z=A/2,q=T+1,w=E+1;let W=0,F=0;const Y=new U;for(let k=0;k<w;k++){const G=k*S-I;for(let $=0;$<q;$++){const J=$*_-P;Y[x]=J*M,Y[p]=G*y,Y[m]=z,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[m]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push($/T),h.push(1-k/E),W+=1}}for(let k=0;k<E;k++)for(let G=0;G<T;G++){const $=d+G+q*k,J=d+G+q*(k+1),K=d+(G+1)+q*(k+1),Z=d+(G+1)+q*k;c.push($,J,Z),c.push(J,K,Z),F+=6}a.addGroup(f,F,O),f+=F,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(s){const e={};for(let t=0;t<s.length;t++){const n=Os(s[t]);for(const i in n)e[i]=n[i]}return e}function _0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const x0={clone:Os,merge:an};var v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new U,Xh=new ge,qh=new ge;class Ot extends Wh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,qh),t.subVectors(qh,Xh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Bs=1;class M0 extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(Fs,Bs,e,t);i.layers=this.layers,this.add(i);const r=new Ot(Fs,Bs,e,t);r.layers=this.layers,this.add(r);const o=new Ot(Fs,Bs,e,t);o.layers=this.layers,this.add(o);const a=new Ot(Fs,Bs,e,t);a.layers=this.layers,this.add(a);const c=new Ot(Fs,Bs,e,t);c.layers=this.layers,this.add(c);const l=new Ot(Fs,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends Bt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S0 extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gt(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:xi});r.uniforms.tEquirect.value=t;const o=new re(i,r),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=fn),new M0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ll=new U,b0=new U,w0=new tt;class $i{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ll.subVectors(n,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||w0.getNormalMatrix(e),i=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Hn,$o=new U;class ul{constructor(e=new $i,t=new $i,n=new $i,i=new $i,r=new $i,o=new $i){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],x=i[10],p=i[11],m=i[12],M=i[13],y=i[14],v=i[15];if(n[0].setComponents(c-r,d-l,p-f,v-m).normalize(),n[1].setComponents(c+r,d+l,p+f,v+m).normalize(),n[2].setComponents(c+o,d+u,p+g,v+M).normalize(),n[3].setComponents(c-o,d-u,p-g,v-M).normalize(),n[4].setComponents(c-a,d-h,p-x,v-y).normalize(),t===ri)n[5].setComponents(c+a,d+h,p+x,v+y).normalize();else if(t===Po)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($o.x=i.normal.x>0?e.max.x:e.min.x,$o.y=i.normal.y>0?e.max.y:e.min.y,$o.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function E0(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class ks extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const M=m*d-o;for(let y=0;y<l;y++){const v=y*h-r;g.push(v,-M,0),x.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const y=M+l*m,v=M+l*(m+1),C=M+1+l*(m+1),A=M+1+l*m;f.push(y,v,A),f.push(v,C,A)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`
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
}`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
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
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
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
#endif`,wg=`struct PhysicalMaterial {
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
}`,Eg=`
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
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
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u_=`float getShadowMask() {
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
}`,h_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nt={alphahash_fragment:A0,alphahash_pars_fragment:T0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:L0,aomap_pars_fragment:N0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:O0,beginnormal_vertex:F0,bsdfs:B0,iridescence_fragment:k0,bumpmap_pars_fragment:z0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:K0,common:$0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:J0,displacementmap_pars_vertex:Z0,displacementmap_vertex:Q0,emissivemap_fragment:eg,emissivemap_pars_fragment:tg,colorspace_fragment:ng,colorspace_pars_fragment:ig,envmap_fragment:sg,envmap_common_pars_fragment:rg,envmap_pars_fragment:og,envmap_pars_vertex:ag,envmap_physical_pars_fragment:xg,envmap_vertex:cg,fog_vertex:lg,fog_pars_vertex:ug,fog_fragment:hg,fog_pars_fragment:dg,gradientmap_pars_fragment:fg,lightmap_pars_fragment:pg,lights_lambert_fragment:mg,lights_lambert_pars_fragment:gg,lights_pars_begin:_g,lights_toon_fragment:vg,lights_toon_pars_fragment:yg,lights_phong_fragment:Mg,lights_phong_pars_fragment:Sg,lights_physical_fragment:bg,lights_physical_pars_fragment:wg,lights_fragment_begin:Eg,lights_fragment_maps:Ag,lights_fragment_end:Tg,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Ig,map_fragment:Lg,map_pars_fragment:Ng,map_particle_fragment:Dg,map_particle_pars_fragment:Ug,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Bg,morphcolor_vertex:kg,morphnormal_vertex:zg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Gg,normal_fragment_begin:Vg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Jg,iridescence_pars_fragment:Zg,opaque_fragment:Qg,packing:e_,premultiplied_alpha_fragment:t_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:s_,roughnessmap_fragment:r_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:c_,shadowmap_vertex:l_,shadowmask_pars_fragment:u_,skinbase_vertex:h_,skinning_pars_vertex:d_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:__,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:y_,uv_pars_fragment:M_,uv_pars_vertex:S_,uv_vertex:b_,worldpos_vertex:w_,background_vert:`varying vec2 vUv;
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
}`},Ie={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Gn={basic:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:an([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:an([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:an([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:an([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:an([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:an([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:an([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:an([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:an([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:an([Ie.common,Ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:an([Ie.lights,Ie.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Gn.physical={uniforms:an([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const jo={r:0,b:0,g:0},Ji=new $t,E_=new $e;function A_(s,e,t,n,i,r,o){const a=new Ve(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1;const v=g(M);v===null?m(a,c):v&&v.isColor&&(m(v,1),y=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===_o)?(u===void 0&&(u=new re(new Gt(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Os(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ji.copy(y.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(Ji)),u.material.toneMapped=ht.getTransfer(v.colorSpace)!==yt,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new re(new ks(2,2),new Ri({name:"BackgroundMaterial",uniforms:Os(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,y){M.getRGB(jo,Vh(s)),n.buffers.color.setClear(jo.r,jo.g,jo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:x,addToRenderList:p}}function T_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(_,S,P,I,z){let q=!1;const w=h(I,P,S);r!==w&&(r=w,l(r.object)),q=f(_,I,P,z),q&&g(_,I,P,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(_,S,P,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(_){return s.bindVertexArray(_)}function u(_){return s.deleteVertexArray(_)}function h(_,S,P){const I=P.wireframe===!0;let z=n[_.id];z===void 0&&(z={},n[_.id]=z);let q=z[S.id];q===void 0&&(q={},z[S.id]=q);let w=q[I];return w===void 0&&(w=d(c()),q[I]=w),w}function d(_){const S=[],P=[],I=[];for(let z=0;z<t;z++)S[z]=0,P[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:P,attributeDivisors:I,object:_,attributes:{},index:null}}function f(_,S,P,I){const z=r.attributes,q=S.attributes;let w=0;const W=P.getAttributes();for(const F in W)if(W[F].location>=0){const k=z[F];let G=q[F];if(G===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(G=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(G=_.instanceColor)),k===void 0||k.attribute!==G||G&&k.data!==G.data)return!0;w++}return r.attributesNum!==w||r.index!==I}function g(_,S,P,I){const z={},q=S.attributes;let w=0;const W=P.getAttributes();for(const F in W)if(W[F].location>=0){let k=q[F];k===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(k=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(k=_.instanceColor));const G={};G.attribute=k,k&&k.data&&(G.data=k.data),z[F]=G,w++}r.attributes=z,r.attributesNum=w,r.index=I}function x(){const _=r.newAttributes;for(let S=0,P=_.length;S<P;S++)_[S]=0}function p(_){m(_,0)}function m(_,S){const P=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;P[_]=1,I[_]===0&&(s.enableVertexAttribArray(_),I[_]=1),z[_]!==S&&(s.vertexAttribDivisor(_,S),z[_]=S)}function M(){const _=r.newAttributes,S=r.enabledAttributes;for(let P=0,I=S.length;P<I;P++)S[P]!==_[P]&&(s.disableVertexAttribArray(P),S[P]=0)}function y(_,S,P,I,z,q,w){w===!0?s.vertexAttribIPointer(_,S,P,z,q):s.vertexAttribPointer(_,S,P,I,z,q)}function v(_,S,P,I){x();const z=I.attributes,q=P.getAttributes(),w=S.defaultAttributeValues;for(const W in q){const F=q[W];if(F.location>=0){let Y=z[W];if(Y===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Y!==void 0){const k=Y.normalized,G=Y.itemSize,$=e.get(Y);if($===void 0)continue;const J=$.buffer,K=$.type,Z=$.bytesPerElement,ce=K===s.INT||K===s.UNSIGNED_INT||Y.gpuType===sc;if(Y.isInterleavedBufferAttribute){const pe=Y.data,we=pe.stride,me=Y.offset;if(pe.isInstancedInterleavedBuffer){for(let Me=0;Me<F.locationSize;Me++)m(F.location+Me,pe.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Me=0;Me<F.locationSize;Me++)p(F.location+Me);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Me=0;Me<F.locationSize;Me++)y(F.location+Me,G/F.locationSize,K,k,we*Z,(me+G/F.locationSize*Me)*Z,ce)}else{if(Y.isInstancedBufferAttribute){for(let pe=0;pe<F.locationSize;pe++)m(F.location+pe,Y.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pe=0;pe<F.locationSize;pe++)p(F.location+pe);s.bindBuffer(s.ARRAY_BUFFER,J);for(let pe=0;pe<F.locationSize;pe++)y(F.location+pe,G/F.locationSize,K,k,G*Z,G/F.locationSize*pe*Z,ce)}}else if(w!==void 0){const k=w[W];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(F.location,k);break;case 3:s.vertexAttrib3fv(F.location,k);break;case 4:s.vertexAttrib4fv(F.location,k);break;default:s.vertexAttrib1fv(F.location,k)}}}}M()}function C(){E();for(const _ in n){const S=n[_];for(const P in S){const I=S[P];for(const z in I)u(I[z].object),delete I[z];delete S[P]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const P in S){const I=S[P];for(const z in I)u(I[z].object),delete I[z];delete S[P]}delete n[_.id]}function T(_){for(const S in n){const P=n[S];if(P[_.id]===void 0)continue;const I=P[_.id];for(const z in I)u(I[z].object),delete I[z];delete P[_.id]}}function E(){O(),o=!0,r!==i&&(r=i,l(r.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function R_(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function C_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==vn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==si&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!E)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:A}}function P_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new $i,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,y=M*4;let v=m.clippingState||null;c.value=v,v=u(g,d,y,f);for(let C=0;C!==y;++C)v[C]=t[C];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const m=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function I_(s){let e=new WeakMap;function t(o,a){return a===nc?o.mapping=gs:a===ic&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===nc||a===ic)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new S0(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class hl extends Wh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,$h=[.125,.215,.35,.446,.526,.582],Zi=20,dl=new hl,jh=new Ve;let fl=null,pl=0,ml=0,gl=!1;const Qi=(1+Math.sqrt(5))/2,Hs=1/Qi,Jh=[new U(-Qi,Hs,0),new U(Qi,Hs,0),new U(-Hs,0,Qi),new U(Hs,0,Qi),new U(0,Qi,-Hs),new U(0,Qi,Hs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Cr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:xr,format:vn,colorSpace:Yt,depthBuffer:!1},i=Zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L_(r)),this._blurMaterial=N_(r,e,t)}return i}_compileMaterial(e){const t=new re(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(jh),u.toneMapping=vi,u.autoClear=!1;const f=new nn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new re(new Gt,f);let x=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(jh),x=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;Jo(i,M*y,m>2?y:0,y,y),u.setRenderTarget(i),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gs||e.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jh[(i-r-1)%Jh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new re(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):Zi;p>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zi}`);const m=[];let M=0;for(let T=0;T<Zi;++T){const E=T/x,O=Math.exp(-E*E/2);m.push(O),T===0?M+=O:T<p&&(M+=2*O)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[i],C=3*v*(i>y-zs?i-y+zs:0),A=4*(this._cubeSize-v);Jo(t,C,A,3*v,2*v),c.setRenderTarget(t),c.render(h,dl)}}function L_(s){const e=[],t=[],n=[];let i=s;const r=s-zs+1+$h.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-zs?c=$h[o-s+zs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,p=2,m=1,M=new Float32Array(x*g*f),y=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,E=A>2?0:-1,O=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];M.set(O,x*g*A),y.set(d,p*g*A);const _=[A,A,A,A,A,A];v.set(_,m*g*A)}const C=new Ct;C.setAttribute("position",new Rt(M,x)),C.setAttribute("uv",new Rt(y,p)),C.setAttribute("faceIndex",new Rt(v,m)),e.push(C),i>zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zh(s,e,t){const n=new Xi(s,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function N_(s,e,t){const n=new Float32Array(Zi),i=new U(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_l(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Qh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ed(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function D_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===nc||c===ic,u=c===gs||c===_s;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cr(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Cr(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function U_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Io("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O_(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let y=0,v=M.length;y<v;y+=3){const C=M[y+0],A=M[y+1],T=M[y+2];d.push(C,A,A,T,T,C)}}else if(g!==void 0){const M=g.array;x=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const C=y+0,A=y+1,T=y+2;d.push(C,A,A,T,T,C)}}else return;const p=new(Mh(d)?kh:Bh)(d,1);p.version=x;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function F_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<x.length;M++)t.update(m,n,x[M])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function B_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function k_(s,e,t){const n=new WeakMap,i=new ft;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let O=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const A=new Float32Array(v*C*4*h),T=new Ah(A,v,C,h);T.type=An,T.needsUpdate=!0;const E=y*4;for(let _=0;_<h;_++){const S=p[_],P=m[_],I=M[_],z=v*C*4*_;for(let q=0;q<S.count;q++){const w=q*E;f===!0&&(i.fromBufferAttribute(S,q),A[z+w+0]=i.x,A[z+w+1]=i.y,A[z+w+2]=i.z,A[z+w+3]=0),g===!0&&(i.fromBufferAttribute(P,q),A[z+w+4]=i.x,A[z+w+5]=i.y,A[z+w+6]=i.z,A[z+w+7]=0),x===!0&&(i.fromBufferAttribute(I,q),A[z+w+8]=i.x,A[z+w+9]=i.y,A[z+w+10]=i.z,A[z+w+11]=I.itemSize===4?i.w:1)}}d={count:h,texture:T,size:new ge(v,C)},n.set(a,d),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function z_(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class td extends Bt{constructor(e,t,n,i,r,o,a,c,l,u=vs){if(u!==vs&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vs&&(n=Gi),n===void 0&&u===ys&&(n=xs),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nd=new Bt,id=new td(1,1),sd=new Ah,rd=new o0,od=new Yh,ad=[],cd=[],ld=new Float32Array(16),ud=new Float32Array(9),hd=new Float32Array(4);function Gs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ad[i];if(r===void 0&&(r=new Float32Array(i),ad[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Zo(s,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function H_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),zt(t,e)}}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),zt(t,e)}}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),zt(t,e)}}function X_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;hd.set(n),s.uniformMatrix2fv(this.addr,!1,hd),zt(t,n)}}function q_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;ud.set(n),s.uniformMatrix3fv(this.addr,!1,ud),zt(t,n)}}function Y_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;ld.set(n),s.uniformMatrix4fv(this.addr,!1,ld),zt(t,n)}}function K_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),zt(t,e)}}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),zt(t,e)}}function J_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),zt(t,e)}}function Z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),zt(t,e)}}function ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),zt(t,e)}}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),zt(t,e)}}function nx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(id.compareFunction=xh,r=id):r=nd,t.setTexture2D(e||r,i)}function ix(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rd,i)}function sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||od,i)}function rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sd,i)}function ox(s){switch(s){case 5126:return H_;case 35664:return G_;case 35665:return V_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return K_;case 35667:case 35671:return $_;case 35668:case 35672:return j_;case 35669:case 35673:return J_;case 5125:return Z_;case 36294:return Q_;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ax(s,e){s.uniform1fv(this.addr,e)}function cx(s,e){const t=Gs(e,this.size,2);s.uniform2fv(this.addr,t)}function lx(s,e){const t=Gs(e,this.size,3);s.uniform3fv(this.addr,t)}function ux(s,e){const t=Gs(e,this.size,4);s.uniform4fv(this.addr,t)}function hx(s,e){const t=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dx(s,e){const t=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fx(s,e){const t=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function px(s,e){s.uniform1iv(this.addr,e)}function mx(s,e){s.uniform2iv(this.addr,e)}function gx(s,e){s.uniform3iv(this.addr,e)}function _x(s,e){s.uniform4iv(this.addr,e)}function xx(s,e){s.uniform1uiv(this.addr,e)}function vx(s,e){s.uniform2uiv(this.addr,e)}function yx(s,e){s.uniform3uiv(this.addr,e)}function Mx(s,e){s.uniform4uiv(this.addr,e)}function Sx(s,e,t){const n=this.cache,i=e.length,r=Zo(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nd,r[o])}function bx(s,e,t){const n=this.cache,i=e.length,r=Zo(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rd,r[o])}function wx(s,e,t){const n=this.cache,i=e.length,r=Zo(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||od,r[o])}function Ex(s,e,t){const n=this.cache,i=e.length,r=Zo(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||sd,r[o])}function Ax(s){switch(s){case 5126:return ax;case 35664:return cx;case 35665:return lx;case 35666:return ux;case 35674:return hx;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return vx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}class Tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ox(t.type)}}class Rx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}}class Cx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function dd(s,e){s.seq.push(e),s.map[e.id]=e}function Px(s,e,t){const n=s.name,i=n.length;for(xl.lastIndex=0;;){const r=xl.exec(n),o=xl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){dd(t,l===void 0?new Tx(a,s,e):new Rx(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Cx(a),dd(t,h)),t=h}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Px(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function fd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ix=37297;let Lx=0;function Nx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Dx(s){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(s);let n;switch(e===t?n="":e===Co&&t===Ro?n="LinearDisplayP3ToLinearSRGB":e===Ro&&t===Co&&(n="LinearSRGBToLinearDisplayP3"),s){case Yt:case Ao:return[n,"LinearTransferOETF"];case Et:case zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function pd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Nx(s.getShaderSource(e),o)}else return i}function Ux(s,e){const t=Dx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ox(s,e){let t;switch(e){case fm:t="Linear";break;case pm:t="Reinhard";break;case mm:t="Cineon";break;case nh:t="ACESFilmic";break;case _m:t="AgX";break;case xm:t="Neutral";break;case gm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new U;function Fx(){ht.getLuminanceCoefficients(ea);const s=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function kx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Pr(s){return s!==""}function md(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(s){return s.replace(Hx,Vx)}const Gx=new Map;function Vx(s,e){let t=nt[e];if(t===void 0){const n=Gx.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(s){return s.replace(Wx,Xx)}function Xx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Yx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kx(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===_s&&(e="ENVMAP_MODE_REFRACTION"),e}function $x(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case th:e="ENVMAP_BLENDING_MULTIPLY";break;case hm:e="ENVMAP_BLENDING_MIX";break;case dm:e="ENVMAP_BLENDING_ADD";break}return e}function jx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=qx(t),l=Yx(t),u=Kx(t),h=$x(t),d=jx(t),f=Bx(t),g=kx(r),x=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(p=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?nt.tonemapping_pars_fragment:"",t.toneMapping!==vi?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=vl(o),o=md(o,t),o=gd(o,t),a=vl(a),a=md(a,t),a=gd(a,t),o=_d(o),a=_d(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=M+p+o,v=M+m+a,C=fd(i,i.VERTEX_SHADER,y),A=fd(i,i.FRAGMENT_SHADER,v);i.attachShader(x,C),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(S){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(x).trim(),I=i.getShaderInfoLog(C).trim(),z=i.getShaderInfoLog(A).trim();let q=!0,w=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,A);else{const W=pd(i,C,"vertex"),F=pd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+P+`
`+W+`
`+F)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||z==="")&&(w=!1);w&&(S.diagnostics={runnable:q,programLog:P,vertexShader:{log:I,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(C),i.deleteShader(A),E=new Qo(i,x),O=zx(i,x)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let O;this.getAttributes=function(){return O===void 0&&T(this),O};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,Ix)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let Zx=0;class Qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ev(e),t.set(e,n)),n}}class ev{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}}function tv(s,e,t,n,i,r,o){const a=new Ph,c=new Qx,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,P,I,z){const q=I.fog,w=z.geometry,W=_.isMeshStandardMaterial?I.environment:null,F=(_.isMeshStandardMaterial?t:e).get(_.envMap||W),Y=F&&F.mapping===_o?F.image.height:null,k=x[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const G=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,$=G!==void 0?G.length:0;let J=0;w.morphAttributes.position!==void 0&&(J=1),w.morphAttributes.normal!==void 0&&(J=2),w.morphAttributes.color!==void 0&&(J=3);let K,Z,ce,pe;if(k){const qe=Gn[k];K=qe.vertexShader,Z=qe.fragmentShader}else K=_.vertexShader,Z=_.fragmentShader,c.update(_),ce=c.getVertexShaderID(_),pe=c.getFragmentShaderID(_);const we=s.getRenderTarget(),me=z.isInstancedMesh===!0,Me=z.isBatchedMesh===!0,Ne=!!_.map,ne=!!_.matcap,L=!!F,le=!!_.aoMap,ae=!!_.lightMap,se=!!_.bumpMap,ve=!!_.normalMap,Te=!!_.displacementMap,Ee=!!_.emissiveMap,D=!!_.metalnessMap,b=!!_.roughnessMap,j=_.anisotropy>0,ie=_.clearcoat>0,oe=_.dispersion>0,te=_.iridescence>0,ke=_.sheen>0,he=_.transmission>0,be=j&&!!_.anisotropyMap,it=ie&&!!_.clearcoatMap,_e=ie&&!!_.clearcoatNormalMap,Ce=ie&&!!_.clearcoatRoughnessMap,ze=te&&!!_.iridescenceMap,He=te&&!!_.iridescenceThicknessMap,Fe=ke&&!!_.sheenColorMap,Ye=ke&&!!_.sheenRoughnessMap,Ge=!!_.specularMap,ut=!!_.specularColorMap,X=!!_.specularIntensityMap,De=he&&!!_.transmissionMap,Q=he&&!!_.thicknessMap,ue=!!_.gradientMap,Pe=!!_.alphaMap,Oe=_.alphaTest>0,ot=!!_.alphaHash,vt=!!_.extensions;let xe=vi;_.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Se={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:Z,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Me,batchingColor:Me&&z._colorsTexture!==null,instancing:me,instancingColor:me&&z.instanceColor!==null,instancingMorph:me&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Yt,alphaToCoverage:!!_.alphaToCoverage,map:Ne,matcap:ne,envMap:L,envMapMode:L&&F.mapping,envMapCubeUVHeight:Y,aoMap:le,lightMap:ae,bumpMap:se,normalMap:ve,displacementMap:f&&Te,emissiveMap:Ee,normalMapObjectSpace:ve&&_.normalMapType===Tm,normalMapTangentSpace:ve&&_.normalMapType===gh,metalnessMap:D,roughnessMap:b,anisotropy:j,anisotropyMap:be,clearcoat:ie,clearcoatMap:it,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ce,dispersion:oe,iridescence:te,iridescenceMap:ze,iridescenceThicknessMap:He,sheen:ke,sheenColorMap:Fe,sheenRoughnessMap:Ye,specularMap:Ge,specularColorMap:ut,specularIntensityMap:X,transmission:he,transmissionMap:De,thicknessMap:Q,gradientMap:ue,opaque:_.transparent===!1&&_.blending===ps&&_.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Oe,alphaHash:ot,combine:_.combine,mapUv:Ne&&p(_.map.channel),aoMapUv:le&&p(_.aoMap.channel),lightMapUv:ae&&p(_.lightMap.channel),bumpMapUv:se&&p(_.bumpMap.channel),normalMapUv:ve&&p(_.normalMap.channel),displacementMapUv:Te&&p(_.displacementMap.channel),emissiveMapUv:Ee&&p(_.emissiveMap.channel),metalnessMapUv:D&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:be&&p(_.anisotropyMap.channel),clearcoatMapUv:it&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(_.sheenRoughnessMap.channel),specularMapUv:Ge&&p(_.specularMap.channel),specularColorMapUv:ut&&p(_.specularColorMap.channel),specularIntensityMapUv:X&&p(_.specularIntensityMap.channel),transmissionMapUv:De&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:Pe&&p(_.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(ve||j),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!w.attributes.uv&&(Ne||Pe),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ne&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qt,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:vt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&_.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function M(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(y(S,_),v(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function v(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),_.push(a.mask)}function C(_){const S=x[_.type];let P;if(S){const I=Gn[S];P=x0.clone(I.uniforms)}else P=_.uniforms;return P}function A(_,S){let P;for(let I=0,z=u.length;I<z;I++){const q=u[I];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Jx(s,S,_,r),u.push(P)),P}function T(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function E(_){c.remove(_)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:O}}function nv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function iv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,x,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),e++,m}function a(h,d,f,g,x,p){const m=o(h,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(h,d,f,g,x,p){const m=o(h,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||iv),n.length>1&&n.sort(d||vd),i.length>1&&i.sort(d||vd)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function sv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new yd,s.set(n,[o])):i>=r.length?(o=new yd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function rv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function ov(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let av=0;function cv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lv(s){const e=new rv,t=ov(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,r=new $e,o=new $e;function a(l){let u=0,h=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,M=0,y=0,v=0,C=0,A=0,T=0;l.sort(cv);for(let O=0,_=l.length;O<_;O++){const S=l[O],P=S.color,I=S.intensity,z=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=P.r*I,h+=P.g*I,d+=P.b*I;else if(S.isLightProbe){for(let w=0;w<9;w++)n.probe[w].addScaledVector(S.sh.coefficients[w],I);T++}else if(S.isDirectionalLight){const w=e.get(S);if(w.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const W=S.shadow,F=t.get(S);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=S.shadow.matrix,M++}n.directional[f]=w,f++}else if(S.isSpotLight){const w=e.get(S);w.position.setFromMatrixPosition(S.matrixWorld),w.color.copy(P).multiplyScalar(I),w.distance=z,w.coneCos=Math.cos(S.angle),w.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),w.decay=S.decay,n.spot[x]=w;const W=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,W.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[x]=W.matrix,S.castShadow){const F=t.get(S);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=q,v++}x++}else if(S.isRectAreaLight){const w=e.get(S);w.color.copy(P).multiplyScalar(I),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=w,p++}else if(S.isPointLight){const w=e.get(S);if(w.color.copy(S.color).multiplyScalar(S.intensity),w.distance=S.distance,w.decay=S.decay,S.castShadow){const W=S.shadow,F=t.get(S);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=S.shadow.matrix,y++}n.point[g]=w,g++}else if(S.isHemisphereLight){const w=e.get(S);w.skyColor.copy(S.color).multiplyScalar(I),w.groundColor.copy(S.groundColor).multiplyScalar(I),n.hemi[m]=w,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==x||E.rectAreaLength!==p||E.hemiLength!==m||E.numDirectionalShadows!==M||E.numPointShadows!==y||E.numSpotShadows!==v||E.numSpotMaps!==C||E.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,E.directionalLength=f,E.pointLength=g,E.spotLength=x,E.rectAreaLength=p,E.hemiLength=m,E.numDirectionalShadows=M,E.numPointShadows=y,E.numSpotShadows=v,E.numSpotMaps=C,E.numLightProbes=T,n.version=av++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const p=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const y=l[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Md(s){const e=new lv(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function uv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Md(s),e.set(i,[a])):r>=o.length?(a=new Md(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class hv extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dv extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function mv(s,e,t){let n=new ul;const i=new ge,r=new ge,o=new ft,a=new hv({depthPacking:Am}),c=new dv,l={},u=t.maxTextureSize,h={[ti]:Xt,[Xt]:ti,[qt]:qt},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new re(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let m=this.type;this.render=function(A,T,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const O=s.getRenderTarget(),_=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),P=s.state;P.setBlending(xi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=m!==ei&&this.type===ei,z=m===ei&&this.type!==ei;for(let q=0,w=A.length;q<w;q++){const W=A[q],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Y=F.getFrameExtents();if(i.multiply(Y),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null||I===!0||z===!0){const G=this.type!==ei?{minFilter:on,magFilter:on}:{};F.map!==null&&F.map.dispose(),F.map=new Xi(i.x,i.y,G),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const k=F.getViewportCount();for(let G=0;G<k;G++){const $=F.getViewport(G);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),P.viewport(o),F.updateMatrices(W,G),n=F.getFrustum(),v(T,E,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===ei&&M(F,E),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(O,_,S)};function M(A,T){const E=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,E,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,E,f,x,null)}function y(A,T,E,O){let _=null;const S=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)_=S;else if(_=E.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=_.uuid,I=T.uuid;let z=l[P];z===void 0&&(z={},l[P]=z);let q=z[I];q===void 0&&(q=_.clone(),z[I]=q,T.addEventListener("dispose",C)),_=q}if(_.visible=T.visible,_.wireframe=T.wireframe,O===ei?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,E.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const P=s.properties.get(_);P.light=E}return _}function v(A,T,E,O,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const I=e.update(A),z=A.material;if(Array.isArray(z)){const q=I.groups;for(let w=0,W=q.length;w<W;w++){const F=q[w],Y=z[F.materialIndex];if(Y&&Y.visible){const k=y(A,Y,O,_);A.onBeforeShadow(s,A,T,E,I,k,F),s.renderBufferDirect(E,null,I,k,A,F),A.onAfterShadow(s,A,T,E,I,k,F)}}}else if(z.visible){const q=y(A,z,O,_);A.onBeforeShadow(s,A,T,E,I,q,null),s.renderBufferDirect(E,null,I,q,A,null),A.onAfterShadow(s,A,T,E,I,q,null)}}const P=A.children;for(let I=0,z=P.length;I<z;I++)v(P[I],T,E,O,_)}function C(A){A.target.removeEventListener("dispose",C);for(const E in l){const O=l[E],_=A.target.uuid;_ in O&&(O[_].dispose(),delete O[_])}}}const gv={[$a]:ja,[Ja]:ec,[Za]:tc,[ms]:Qa,[ja]:$a,[ec]:Ja,[tc]:Za,[Qa]:ms};function _v(s){function e(){let X=!1;const De=new ft;let Q=null;const ue=new ft(0,0,0,0);return{setMask:function(Pe){Q!==Pe&&!X&&(s.colorMask(Pe,Pe,Pe,Pe),Q=Pe)},setLocked:function(Pe){X=Pe},setClear:function(Pe,Oe,ot,vt,xe){xe===!0&&(Pe*=vt,Oe*=vt,ot*=vt),De.set(Pe,Oe,ot,vt),ue.equals(De)===!1&&(s.clearColor(Pe,Oe,ot,vt),ue.copy(De))},reset:function(){X=!1,Q=null,ue.set(-1,0,0,0)}}}function t(){let X=!1,De=!1,Q=null,ue=null,Pe=null;return{setReversed:function(Oe){De=Oe},setTest:function(Oe){Oe?ce(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(Oe){Q!==Oe&&!X&&(s.depthMask(Oe),Q=Oe)},setFunc:function(Oe){if(De&&(Oe=gv[Oe]),ue!==Oe){switch(Oe){case $a:s.depthFunc(s.NEVER);break;case ja:s.depthFunc(s.ALWAYS);break;case Ja:s.depthFunc(s.LESS);break;case ms:s.depthFunc(s.LEQUAL);break;case Za:s.depthFunc(s.EQUAL);break;case Qa:s.depthFunc(s.GEQUAL);break;case ec:s.depthFunc(s.GREATER);break;case tc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=Oe}},setLocked:function(Oe){X=Oe},setClear:function(Oe){Pe!==Oe&&(s.clearDepth(Oe),Pe=Oe)},reset:function(){X=!1,Q=null,ue=null,Pe=null}}}function n(){let X=!1,De=null,Q=null,ue=null,Pe=null,Oe=null,ot=null,vt=null,xe=null;return{setTest:function(Se){X||(Se?ce(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(Se){De!==Se&&!X&&(s.stencilMask(Se),De=Se)},setFunc:function(Se,qe,et){(Q!==Se||ue!==qe||Pe!==et)&&(s.stencilFunc(Se,qe,et),Q=Se,ue=qe,Pe=et)},setOp:function(Se,qe,et){(Oe!==Se||ot!==qe||vt!==et)&&(s.stencilOp(Se,qe,et),Oe=Se,ot=qe,vt=et)},setLocked:function(Se){X=Se},setClear:function(Se){xe!==Se&&(s.clearStencil(Se),xe=Se)},reset:function(){X=!1,De=null,Q=null,ue=null,Pe=null,Oe=null,ot=null,vt=null,xe=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,M=null,y=null,v=null,C=null,A=new Ve(0,0,0),T=0,E=!1,O=null,_=null,S=null,P=null,I=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,w=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=w>=1):W.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=w>=2);let F=null,Y={};const k=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),$=new ft().fromArray(k),J=new ft().fromArray(G);function K(X,De,Q,ue){const Pe=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(X,Oe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<Q;ot++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(De+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Oe}const Z={};Z[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ce(s.DEPTH_TEST),r.setFunc(ms),ae(!1),se(ju),ce(s.CULL_FACE),L(xi);function ce(X){l[X]!==!0&&(s.enable(X),l[X]=!0)}function pe(X){l[X]!==!1&&(s.disable(X),l[X]=!1)}function we(X,De){return u[X]!==De?(s.bindFramebuffer(X,De),u[X]=De,X===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=De),X===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=De),!0):!1}function me(X,De){let Q=d,ue=!1;if(X){Q=h.get(De),Q===void 0&&(Q=[],h.set(De,Q));const Pe=X.textures;if(Q.length!==Pe.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,ot=Pe.length;Oe<ot;Oe++)Q[Oe]=s.COLOR_ATTACHMENT0+Oe;Q.length=Pe.length,ue=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,ue=!0);ue&&s.drawBuffers(Q)}function Me(X){return f!==X?(s.useProgram(X),f=X,!0):!1}const Ne={[Hi]:s.FUNC_ADD,[Kp]:s.FUNC_SUBTRACT,[$p]:s.FUNC_REVERSE_SUBTRACT};Ne[jp]=s.MIN,Ne[Jp]=s.MAX;const ne={[Zp]:s.ZERO,[Qp]:s.ONE,[em]:s.SRC_COLOR,[Ya]:s.SRC_ALPHA,[om]:s.SRC_ALPHA_SATURATE,[sm]:s.DST_COLOR,[nm]:s.DST_ALPHA,[tm]:s.ONE_MINUS_SRC_COLOR,[Ka]:s.ONE_MINUS_SRC_ALPHA,[rm]:s.ONE_MINUS_DST_COLOR,[im]:s.ONE_MINUS_DST_ALPHA,[am]:s.CONSTANT_COLOR,[cm]:s.ONE_MINUS_CONSTANT_COLOR,[lm]:s.CONSTANT_ALPHA,[um]:s.ONE_MINUS_CONSTANT_ALPHA};function L(X,De,Q,ue,Pe,Oe,ot,vt,xe,Se){if(X===xi){g===!0&&(pe(s.BLEND),g=!1);return}if(g===!1&&(ce(s.BLEND),g=!0),X!==Yp){if(X!==x||Se!==E){if((p!==Hi||y!==Hi)&&(s.blendEquation(s.FUNC_ADD),p=Hi,y=Hi),Se)switch(X){case ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ni:s.blendFunc(s.ONE,s.ONE);break;case Qu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ni:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}m=null,M=null,v=null,C=null,A.set(0,0,0),T=0,x=X,E=Se}return}Pe=Pe||De,Oe=Oe||Q,ot=ot||ue,(De!==p||Pe!==y)&&(s.blendEquationSeparate(Ne[De],Ne[Pe]),p=De,y=Pe),(Q!==m||ue!==M||Oe!==v||ot!==C)&&(s.blendFuncSeparate(ne[Q],ne[ue],ne[Oe],ne[ot]),m=Q,M=ue,v=Oe,C=ot),(vt.equals(A)===!1||xe!==T)&&(s.blendColor(vt.r,vt.g,vt.b,xe),A.copy(vt),T=xe),x=X,E=!1}function le(X,De){X.side===qt?pe(s.CULL_FACE):ce(s.CULL_FACE);let Q=X.side===Xt;De&&(Q=!Q),ae(Q),X.blending===ps&&X.transparent===!1?L(xi):L(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),i.setMask(X.colorWrite);const ue=X.stencilWrite;o.setTest(ue),ue&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Te(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ae(X){O!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),O=X)}function se(X){X!==Xp?(ce(s.CULL_FACE),X!==_&&(X===ju?s.cullFace(s.BACK):X===qp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),_=X}function ve(X){X!==S&&(q&&s.lineWidth(X),S=X)}function Te(X,De,Q){X?(ce(s.POLYGON_OFFSET_FILL),(P!==De||I!==Q)&&(s.polygonOffset(De,Q),P=De,I=Q)):pe(s.POLYGON_OFFSET_FILL)}function Ee(X){X?ce(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function D(X){X===void 0&&(X=s.TEXTURE0+z-1),F!==X&&(s.activeTexture(X),F=X)}function b(X,De,Q){Q===void 0&&(F===null?Q=s.TEXTURE0+z-1:Q=F);let ue=Y[Q];ue===void 0&&(ue={type:void 0,texture:void 0},Y[Q]=ue),(ue.type!==X||ue.texture!==De)&&(F!==Q&&(s.activeTexture(Q),F=Q),s.bindTexture(X,De||Z[X]),ue.type=X,ue.texture=De)}function j(){const X=Y[F];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(X){$.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),$.copy(X))}function Fe(X){J.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function Ye(X,De){let Q=c.get(De);Q===void 0&&(Q=new WeakMap,c.set(De,Q));let ue=Q.get(X);ue===void 0&&(ue=s.getUniformBlockIndex(De,X.name),Q.set(X,ue))}function Ge(X,De){const ue=c.get(De).get(X);a.get(De)!==ue&&(s.uniformBlockBinding(De,ue,X.__bindingPointIndex),a.set(De,ue))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},F=null,Y={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,M=null,y=null,v=null,C=null,A=new Ve(0,0,0),T=0,E=!1,O=null,_=null,S=null,P=null,I=null,$.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ce,disable:pe,bindFramebuffer:we,drawBuffers:me,useProgram:Me,setBlending:L,setMaterial:le,setFlipSided:ae,setCullFace:se,setLineWidth:ve,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:D,bindTexture:b,unbindTexture:j,compressedTexImage2D:ie,compressedTexImage3D:oe,texImage2D:Ce,texImage3D:ze,updateUBOMapping:Ye,uniformBlockBinding:Ge,texStorage2D:it,texStorage3D:_e,texSubImage2D:te,texSubImage3D:ke,compressedTexSubImage2D:he,compressedTexSubImage3D:be,scissor:He,viewport:Fe,reset:ut}}function Sd(s,e,t,n){const i=xv(n);switch(t){case lh:return s*e;case hh:return s*e;case dh:return s*e*2;case ac:return s*e/i.components*i.byteLength;case cc:return s*e/i.components*i.byteLength;case fh:return s*e*2/i.components*i.byteLength;case lc:return s*e*2/i.components*i.byteLength;case uh:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case uc:return s*e*4/i.components*i.byteLength;case yo:case Mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case So:case bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:case pc:return Math.max(s,16)*Math.max(e,8)/4;case hc:case fc:return Math.max(s,8)*Math.max(e,8)/2;case mc:case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wo:case Lc:case Nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ph:case Dc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Uc:case Oc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xv(s){switch(s){case si:case oh:return{byteLength:1,components:1};case _r:case ah:case xr:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case Gi:case sc:case An:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function vv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,b){return f?new OffscreenCanvas(D,b):br("canvas")}function x(D,b,j){let ie=1;const oe=Ee(D);if((oe.width>j||oe.height>j)&&(ie=j/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const te=Math.floor(ie*oe.width),ke=Math.floor(ie*oe.height);h===void 0&&(h=g(te,ke));const he=b?g(te,ke):h;return he.width=te,he.height=ke,he.getContext("2d").drawImage(D,0,0,te,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+ke+")."),he}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==on&&D.minFilter!==fn}function m(D){s.generateMipmap(D)}function M(D,b,j,ie,oe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let te=b;if(b===s.RED&&(j===s.FLOAT&&(te=s.R32F),j===s.HALF_FLOAT&&(te=s.R16F),j===s.UNSIGNED_BYTE&&(te=s.R8)),b===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(te=s.R8UI),j===s.UNSIGNED_SHORT&&(te=s.R16UI),j===s.UNSIGNED_INT&&(te=s.R32UI),j===s.BYTE&&(te=s.R8I),j===s.SHORT&&(te=s.R16I),j===s.INT&&(te=s.R32I)),b===s.RG&&(j===s.FLOAT&&(te=s.RG32F),j===s.HALF_FLOAT&&(te=s.RG16F),j===s.UNSIGNED_BYTE&&(te=s.RG8)),b===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(te=s.RG8UI),j===s.UNSIGNED_SHORT&&(te=s.RG16UI),j===s.UNSIGNED_INT&&(te=s.RG32UI),j===s.BYTE&&(te=s.RG8I),j===s.SHORT&&(te=s.RG16I),j===s.INT&&(te=s.RG32I)),b===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(te=s.RGB8UI),j===s.UNSIGNED_SHORT&&(te=s.RGB16UI),j===s.UNSIGNED_INT&&(te=s.RGB32UI),j===s.BYTE&&(te=s.RGB8I),j===s.SHORT&&(te=s.RGB16I),j===s.INT&&(te=s.RGB32I)),b===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),j===s.UNSIGNED_INT&&(te=s.RGBA32UI),j===s.BYTE&&(te=s.RGBA8I),j===s.SHORT&&(te=s.RGBA16I),j===s.INT&&(te=s.RGBA32I)),b===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),b===s.RGBA){const ke=oe?To:ht.getTransfer(ie);j===s.FLOAT&&(te=s.RGBA32F),j===s.HALF_FLOAT&&(te=s.RGBA16F),j===s.UNSIGNED_BYTE&&(te=ke===yt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(D,b){let j;return D?b===null||b===Gi||b===xs?j=s.DEPTH24_STENCIL8:b===An?j=s.DEPTH32F_STENCIL8:b===_r&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===xs?j=s.DEPTH_COMPONENT24:b===An?j=s.DEPTH_COMPONENT32F:b===_r&&(j=s.DEPTH_COMPONENT16),j}function v(D,b){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==on&&D.minFilter!==fn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function C(D){const b=D.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&u.delete(b)}function A(D){const b=D.target;b.removeEventListener("dispose",A),O(b)}function T(D){const b=n.get(D);if(b.__webglInit===void 0)return;const j=D.source,ie=d.get(j);if(ie){const oe=ie[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(D),Object.keys(ie).length===0&&d.delete(j)}n.remove(D)}function E(D){const b=n.get(D);s.deleteTexture(b.__webglTexture);const j=D.source,ie=d.get(j);delete ie[b.__cacheKey],o.memory.textures--}function O(D){const b=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let oe=0;oe<b.__webglFramebuffer[ie].length;oe++)s.deleteFramebuffer(b.__webglFramebuffer[ie][oe]);else s.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)s.deleteFramebuffer(b.__webglFramebuffer[ie]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=D.textures;for(let ie=0,oe=j.length;ie<oe;ie++){const te=n.get(j[ie]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(j[ie])}n.remove(D)}let _=0;function S(){_=0}function P(){const D=_;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),_+=1,D}function I(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function z(D,b){const j=n.get(D);if(D.isVideoTexture&&ve(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const ie=D.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,D,b);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+b)}function q(D,b){const j=n.get(D);if(D.version>0&&j.__version!==D.version){J(j,D,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+b)}function w(D,b){const j=n.get(D);if(D.version>0&&j.__version!==D.version){J(j,D,b);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+b)}function W(D,b){const j=n.get(D);if(D.version>0&&j.__version!==D.version){K(j,D,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+b)}const F={[yi]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[xo]:s.MIRRORED_REPEAT},Y={[on]:s.NEAREST,[rh]:s.NEAREST_MIPMAP_NEAREST,[gr]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[vo]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},k={[Rm]:s.NEVER,[Dm]:s.ALWAYS,[Cm]:s.LESS,[xh]:s.LEQUAL,[Pm]:s.EQUAL,[Nm]:s.GEQUAL,[Im]:s.GREATER,[Lm]:s.NOTEQUAL};function G(D,b){if(b.type===An&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===fn||b.magFilter===vo||b.magFilter===gr||b.magFilter===ii||b.minFilter===fn||b.minFilter===vo||b.minFilter===gr||b.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,F[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,F[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,F[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Y[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Y[b.minFilter]),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,k[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==gr&&b.minFilter!==ii||b.type===An&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function $(D,b){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",C));const ie=b.source;let oe=d.get(ie);oe===void 0&&(oe={},d.set(ie,oe));const te=I(b);if(te!==D.__cacheKey){oe[te]===void 0&&(oe[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),oe[te].usedTimes++;const ke=oe[D.__cacheKey];ke!==void 0&&(oe[D.__cacheKey].usedTimes--,ke.usedTimes===0&&E(b)),D.__cacheKey=te,D.__webglTexture=oe[te].texture}return j}function J(D,b,j){let ie=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=s.TEXTURE_3D);const oe=$(D,b),te=b.source;t.bindTexture(ie,D.__webglTexture,s.TEXTURE0+j);const ke=n.get(te);if(te.version!==ke.__version||oe===!0){t.activeTexture(s.TEXTURE0+j);const he=ht.getPrimaries(ht.workingColorSpace),be=b.colorSpace===Si?null:ht.getPrimaries(b.colorSpace),it=b.colorSpace===Si||he===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let _e=x(b.image,!1,i.maxTextureSize);_e=Te(b,_e);const Ce=r.convert(b.format,b.colorSpace),ze=r.convert(b.type);let He=M(b.internalFormat,Ce,ze,b.colorSpace,b.isVideoTexture);G(ie,b);let Fe;const Ye=b.mipmaps,Ge=b.isVideoTexture!==!0,ut=ke.__version===void 0||oe===!0,X=te.dataReady,De=v(b,_e);if(b.isDepthTexture)He=y(b.format===ys,b.type),ut&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,He,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,He,_e.width,_e.height,0,Ce,ze,null));else if(b.isDataTexture)if(Ye.length>0){Ge&&ut&&t.texStorage2D(s.TEXTURE_2D,De,He,Ye[0].width,Ye[0].height);for(let Q=0,ue=Ye.length;Q<ue;Q++)Fe=Ye[Q],Ge?X&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Fe.width,Fe.height,Ce,ze,Fe.data):t.texImage2D(s.TEXTURE_2D,Q,He,Fe.width,Fe.height,0,Ce,ze,Fe.data);b.generateMipmaps=!1}else Ge?(ut&&t.texStorage2D(s.TEXTURE_2D,De,He,_e.width,_e.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e.width,_e.height,Ce,ze,_e.data)):t.texImage2D(s.TEXTURE_2D,0,He,_e.width,_e.height,0,Ce,ze,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,He,Ye[0].width,Ye[0].height,_e.depth);for(let Q=0,ue=Ye.length;Q<ue;Q++)if(Fe=Ye[Q],b.format!==vn)if(Ce!==null)if(Ge){if(X)if(b.layerUpdates.size>0){const Pe=Sd(Fe.width,Fe.height,b.format,b.type);for(const Oe of b.layerUpdates){const ot=Fe.data.subarray(Oe*Pe/Fe.data.BYTES_PER_ELEMENT,(Oe+1)*Pe/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Oe,Fe.width,Fe.height,1,Ce,ot,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Fe.width,Fe.height,_e.depth,Ce,Fe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,He,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Fe.width,Fe.height,_e.depth,Ce,ze,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,He,Fe.width,Fe.height,_e.depth,0,Ce,ze,Fe.data)}else{Ge&&ut&&t.texStorage2D(s.TEXTURE_2D,De,He,Ye[0].width,Ye[0].height);for(let Q=0,ue=Ye.length;Q<ue;Q++)Fe=Ye[Q],b.format!==vn?Ce!==null?Ge?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Fe.width,Fe.height,Ce,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,He,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?X&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Fe.width,Fe.height,Ce,ze,Fe.data):t.texImage2D(s.TEXTURE_2D,Q,He,Fe.width,Fe.height,0,Ce,ze,Fe.data)}else if(b.isDataArrayTexture)if(Ge){if(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,He,_e.width,_e.height,_e.depth),X)if(b.layerUpdates.size>0){const Q=Sd(_e.width,_e.height,b.format,b.type);for(const ue of b.layerUpdates){const Pe=_e.data.subarray(ue*Q/_e.data.BYTES_PER_ELEMENT,(ue+1)*Q/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,Ce,ze,Pe)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,ze,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,He,_e.width,_e.height,_e.depth,0,Ce,ze,_e.data);else if(b.isData3DTexture)Ge?(ut&&t.texStorage3D(s.TEXTURE_3D,De,He,_e.width,_e.height,_e.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,ze,_e.data)):t.texImage3D(s.TEXTURE_3D,0,He,_e.width,_e.height,_e.depth,0,Ce,ze,_e.data);else if(b.isFramebufferTexture){if(ut)if(Ge)t.texStorage2D(s.TEXTURE_2D,De,He,_e.width,_e.height);else{let Q=_e.width,ue=_e.height;for(let Pe=0;Pe<De;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,He,Q,ue,0,Ce,ze,null),Q>>=1,ue>>=1}}else if(Ye.length>0){if(Ge&&ut){const Q=Ee(Ye[0]);t.texStorage2D(s.TEXTURE_2D,De,He,Q.width,Q.height)}for(let Q=0,ue=Ye.length;Q<ue;Q++)Fe=Ye[Q],Ge?X&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ce,ze,Fe):t.texImage2D(s.TEXTURE_2D,Q,He,Ce,ze,Fe);b.generateMipmaps=!1}else if(Ge){if(ut){const Q=Ee(_e);t.texStorage2D(s.TEXTURE_2D,De,He,Q.width,Q.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,ze,_e)}else t.texImage2D(s.TEXTURE_2D,0,He,Ce,ze,_e);p(b)&&m(ie),ke.__version=te.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function K(D,b,j){if(b.image.length!==6)return;const ie=$(D,b),oe=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+j);const te=n.get(oe);if(oe.version!==te.__version||ie===!0){t.activeTexture(s.TEXTURE0+j);const ke=ht.getPrimaries(ht.workingColorSpace),he=b.colorSpace===Si?null:ht.getPrimaries(b.colorSpace),be=b.colorSpace===Si||ke===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const it=b.isCompressedTexture||b.image[0].isCompressedTexture,_e=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let ue=0;ue<6;ue++)!it&&!_e?Ce[ue]=x(b.image[ue],!0,i.maxCubemapSize):Ce[ue]=_e?b.image[ue].image:b.image[ue],Ce[ue]=Te(b,Ce[ue]);const ze=Ce[0],He=r.convert(b.format,b.colorSpace),Fe=r.convert(b.type),Ye=M(b.internalFormat,He,Fe,b.colorSpace),Ge=b.isVideoTexture!==!0,ut=te.__version===void 0||ie===!0,X=oe.dataReady;let De=v(b,ze);G(s.TEXTURE_CUBE_MAP,b);let Q;if(it){Ge&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,Ye,ze.width,ze.height);for(let ue=0;ue<6;ue++){Q=Ce[ue].mipmaps;for(let Pe=0;Pe<Q.length;Pe++){const Oe=Q[Pe];b.format!==vn?He!==null?Ge?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,0,0,Oe.width,Oe.height,He,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,Ye,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,0,0,Oe.width,Oe.height,He,Fe,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,Ye,Oe.width,Oe.height,0,He,Fe,Oe.data)}}}else{if(Q=b.mipmaps,Ge&&ut){Q.length>0&&De++;const ue=Ee(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,Ye,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){Ge?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce[ue].width,Ce[ue].height,He,Fe,Ce[ue].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ye,Ce[ue].width,Ce[ue].height,0,He,Fe,Ce[ue].data);for(let Pe=0;Pe<Q.length;Pe++){const ot=Q[Pe].image[ue].image;Ge?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,0,0,ot.width,ot.height,He,Fe,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,Ye,ot.width,ot.height,0,He,Fe,ot.data)}}else{Ge?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,He,Fe,Ce[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ye,He,Fe,Ce[ue]);for(let Pe=0;Pe<Q.length;Pe++){const Oe=Q[Pe];Ge?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,0,0,He,Fe,Oe.image[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,Ye,He,Fe,Oe.image[ue])}}}p(b)&&m(s.TEXTURE_CUBE_MAP),te.__version=oe.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Z(D,b,j,ie,oe,te){const ke=r.convert(j.format,j.colorSpace),he=r.convert(j.type),be=M(j.internalFormat,ke,he,j.colorSpace);if(!n.get(b).__hasExternalTextures){const _e=Math.max(1,b.width>>te),Ce=Math.max(1,b.height>>te);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,te,be,_e,Ce,b.depth,0,ke,he,null):t.texImage2D(oe,te,be,_e,Ce,0,ke,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),se(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,oe,n.get(j).__webglTexture,0,ae(b)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,oe,n.get(j).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(D,b,j){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer){const ie=b.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,te=y(b.stencilBuffer,oe),ke=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=ae(b);se(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,te,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,te,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,te,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,D)}else{const ie=b.textures;for(let oe=0;oe<ie.length;oe++){const te=ie[oe],ke=r.convert(te.format,te.colorSpace),he=r.convert(te.type),be=M(te.internalFormat,ke,he,te.colorSpace),it=ae(b);j&&se(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,be,b.width,b.height):se(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,be,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,be,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const ie=n.get(b.depthTexture).__webglTexture,oe=ae(b);if(b.depthTexture.format===vs)se(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(b.depthTexture.format===ys)se(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function we(D){const b=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const ie=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",oe)};ie.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=ie}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");pe(b.__webglFramebuffer,D)}else if(j){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=s.createRenderbuffer(),ce(b.__webglDepthbuffer[ie],D,!1);else{const oe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,te)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ce(b.__webglDepthbuffer,D,!1);else{const ie=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,oe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(D,b,j){const ie=n.get(D);b!==void 0&&Z(ie.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&we(D)}function Me(D){const b=D.texture,j=n.get(D),ie=n.get(b);D.addEventListener("dispose",A);const oe=D.textures,te=D.isWebGLCubeRenderTarget===!0,ke=oe.length>1;if(ke||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=b.version,o.memory.textures++),te){j.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[he]=[];for(let be=0;be<b.mipmaps.length;be++)j.__webglFramebuffer[he][be]=s.createFramebuffer()}else j.__webglFramebuffer[he]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)j.__webglFramebuffer[he]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ke)for(let he=0,be=oe.length;he<be;he++){const it=n.get(oe[he]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&se(D)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const be=oe[he];j.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[he]);const it=r.convert(be.format,be.colorSpace),_e=r.convert(be.type),Ce=M(be.internalFormat,it,_e,be.colorSpace,D.isXRRenderTarget===!0),ze=ae(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Ce,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,j.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ce(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),G(s.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)Z(j.__webglFramebuffer[he][be],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be);else Z(j.__webglFramebuffer[he],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let he=0,be=oe.length;he<be;he++){const it=oe[he],_e=n.get(it);t.bindTexture(s.TEXTURE_2D,_e.__webglTexture),G(s.TEXTURE_2D,it),Z(j.__webglFramebuffer,D,it,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),p(it)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),G(he,b),b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)Z(j.__webglFramebuffer[be],D,b,s.COLOR_ATTACHMENT0,he,be);else Z(j.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,he,0);p(b)&&m(he),t.unbindTexture()}D.depthBuffer&&we(D)}function Ne(D){const b=D.textures;for(let j=0,ie=b.length;j<ie;j++){const oe=b[j];if(p(oe)){const te=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ke=n.get(oe).__webglTexture;t.bindTexture(te,ke),m(te),t.unbindTexture()}}}const ne=[],L=[];function le(D){if(D.samples>0){if(se(D)===!1){const b=D.textures,j=D.width,ie=D.height;let oe=s.COLOR_BUFFER_BIT;const te=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=n.get(D),he=b.length>1;if(he)for(let be=0;be<b.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let be=0;be<b.length;be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[be]);const it=n.get(b[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,j,ie,0,0,j,ie,oe,s.NEAREST),c===!0&&(ne.length=0,L.length=0,ne.push(s.COLOR_ATTACHMENT0+be),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ne.push(te),L.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let be=0;be<b.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ke.__webglColorRenderbuffer[be]);const it=n.get(b[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,it,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const b=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ae(D){return Math.min(i.maxSamples,D.samples)}function se(D){const b=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ve(D){const b=o.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function Te(D,b){const j=D.colorSpace,ie=D.format,oe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Yt&&j!==Si&&(ht.getTransfer(j)===yt?(ie!==vn||oe!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function Ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=S,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=w,this.setTextureCube=W,this.rebindTextures=me,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=se}function yv(s,e){function t(n,i=Si){let r;const o=ht.getTransfer(i);if(n===si)return s.UNSIGNED_BYTE;if(n===rc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return s.BYTE;if(n===ah)return s.SHORT;if(n===_r)return s.UNSIGNED_SHORT;if(n===sc)return s.INT;if(n===Gi)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===xr)return s.HALF_FLOAT;if(n===lh)return s.ALPHA;if(n===uh)return s.RGB;if(n===vn)return s.RGBA;if(n===hh)return s.LUMINANCE;if(n===dh)return s.LUMINANCE_ALPHA;if(n===vs)return s.DEPTH_COMPONENT;if(n===ys)return s.DEPTH_STENCIL;if(n===ac)return s.RED;if(n===cc)return s.RED_INTEGER;if(n===fh)return s.RG;if(n===lc)return s.RG_INTEGER;if(n===uc)return s.RGBA_INTEGER;if(n===yo||n===Mo||n===So||n===bo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mc||n===gc||n===_c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mc||n===gc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xc||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===wc||n===Ec||n===Ac||n===Tc||n===Rc||n===Cc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Lc||n===Nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===Dc||n===Uc||n===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Mv extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class at extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
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

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:bv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Av extends Vi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=new Ev,p=t.getContextAttributes();let m=null,M=null;const y=[],v=[],C=new ge;let A=null;const T=new Ot;T.layers.enable(1),T.viewport=new ft;const E=new Ot;E.layers.enable(2),E.viewport=new ft;const O=[T,E],_=new Mv;_.layers.enable(1),_.layers.enable(2);let S=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Z=y[K];return Z===void 0&&(Z=new yl,y[K]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(K){let Z=y[K];return Z===void 0&&(Z=new yl,y[K]=Z),Z.getGripSpace()},this.getHand=function(K){let Z=y[K];return Z===void 0&&(Z=new yl,y[K]=Z),Z.getHandSpace()};function I(K){const Z=v.indexOf(K.inputSource);if(Z===-1)return;const ce=y[Z];ce!==void 0&&(ce.update(K.inputSource,K.frame,l||o),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",q);for(let K=0;K<y.length;K++){const Z=v[K];Z!==null&&(v[K]=null,y[K].disconnect(Z))}S=null,P=null,x.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,M=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",z),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Xi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ce=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?ys:vs,ce=p.stencil?xs:Gi);const we={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(we),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Xi(d.textureWidth,d.textureHeight,{format:vn,type:si,depthTexture:new td(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let Z=0;Z<K.removed.length;Z++){const ce=K.removed[Z],pe=v.indexOf(ce);pe>=0&&(v[pe]=null,y[pe].disconnect(ce))}for(let Z=0;Z<K.added.length;Z++){const ce=K.added[Z];let pe=v.indexOf(ce);if(pe===-1){for(let me=0;me<y.length;me++)if(me>=v.length){v.push(ce),pe=me;break}else if(v[me]===null){v[me]=ce,pe=me;break}if(pe===-1)break}const we=y[pe];we&&we.connect(ce)}}const w=new U,W=new U;function F(K,Z,ce){w.setFromMatrixPosition(Z.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const pe=w.distanceTo(W),we=Z.projectionMatrix.elements,me=ce.projectionMatrix.elements,Me=we[14]/(we[10]-1),Ne=we[14]/(we[10]+1),ne=(we[9]+1)/we[5],L=(we[9]-1)/we[5],le=(we[8]-1)/we[0],ae=(me[8]+1)/me[0],se=Me*le,ve=Me*ae,Te=pe/(-le+ae),Ee=Te*-le;if(Z.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ee),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const D=Me+Te,b=Ne+Te,j=se-Ee,ie=ve+(pe-Ee),oe=ne*Ne/b*D,te=L*Ne/b*D;K.projectionMatrix.makePerspective(j,ie,oe,te,D,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Y(K,Z){Z===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Z.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Z=K.near,ce=K.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),_.near=E.near=T.near=Z,_.far=E.far=T.far=ce,(S!==_.near||P!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,P=_.far);const pe=K.parent,we=_.cameras;Y(_,pe);for(let me=0;me<we.length;me++)Y(we[me],pe);we.length===2?F(_,T,E):_.projectionMatrix.copy(T.projectionMatrix),k(K,_,pe)};function k(K,Z,ce){ce===null?K.matrix.copy(Z.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(Z.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ws*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let G=null;function $(K,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let pe=!1;ce.length!==_.cameras.length&&(_.cameras.length=0,pe=!0);for(let me=0;me<ce.length;me++){const Me=ce[me];let Ne=null;if(f!==null)Ne=f.getViewport(Me);else{const L=h.getViewSubImage(d,Me);Ne=L.viewport,me===0&&(e.setRenderTargetTextures(M,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(M))}let ne=O[me];ne===void 0&&(ne=new Ot,ne.layers.enable(me),ne.viewport=new ft,O[me]=ne),ne.matrix.fromArray(Me.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Me.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),me===0&&(_.matrix.copy(ne.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pe===!0&&_.cameras.push(ne)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")){const me=h.getDepthInformation(ce[0]);me&&me.isValid&&me.texture&&x.init(e,me,i.renderState)}}for(let ce=0;ce<y.length;ce++){const pe=v[ce],we=y[ce];pe!==null&&we!==void 0&&we.update(pe,Z,l||o)}G&&G(K,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const J=new Kh;J.setAnimationLoop($),this.setAnimationLoop=function(K){G=K},this.dispose=function(){}}}const es=new $t,Tv=new $e;function Rv(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Vh(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),y=M.envMap,v=M.envMapRotation;y&&(p.envMap.value=y,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),p.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(es)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function l(M,y){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",p));const C=y.program;n.updateUBOMapping(M,C);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function u(M){const y=h();M.__bindingPointIndex=y;const v=s.createBuffer(),C=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=i[M.id],v=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,T=v.length;A<T;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let O=0,_=E.length;O<_;O++){const S=E[O];if(f(S,A,O,C)===!0){const P=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let z=0;for(let q=0;q<I.length;q++){const w=I[q],W=x(w);typeof w=="number"||typeof w=="boolean"?(S.__data[0]=w,s.bufferSubData(s.UNIFORM_BUFFER,P+z,S.__data)):w.isMatrix3?(S.__data[0]=w.elements[0],S.__data[1]=w.elements[1],S.__data[2]=w.elements[2],S.__data[3]=0,S.__data[4]=w.elements[3],S.__data[5]=w.elements[4],S.__data[6]=w.elements[5],S.__data[7]=0,S.__data[8]=w.elements[6],S.__data[9]=w.elements[7],S.__data[10]=w.elements[8],S.__data[11]=0):(w.toArray(S.__data,z),z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,v,C){const A=M.value,T=y+"_"+v;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const E=C[T];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return C[T]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function g(M){const y=M.uniforms;let v=0;const C=16;for(let T=0,E=y.length;T<E;T++){const O=Array.isArray(y[T])?y[T]:[y[T]];for(let _=0,S=O.length;_<S;_++){const P=O[_],I=Array.isArray(P.value)?P.value:[P.value];for(let z=0,q=I.length;z<q;z++){const w=I[z],W=x(w),F=v%C,Y=F%W.boundary,k=F+Y;v+=Y,k!==0&&C-k<W.storage&&(v+=C-k),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=W.storage}}}const A=v%C;return A>0&&(v+=C-A),M.__size=v,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class Pv{constructor(e={}){const{canvas:t=Jm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=vi,this.toneMappingExposure=1;const y=this;let v=!1,C=0,A=0,T=null,E=-1,O=null;const _=new ft,S=new ft;let P=null;const I=new Ve(0);let z=0,q=t.width,w=t.height,W=1,F=null,Y=null;const k=new ft(0,0,q,w),G=new ft(0,0,q,w);let $=!1;const J=new ul;let K=!1,Z=!1;const ce=new $e,pe=new $e,we=new U,me=new ft,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ne(){return T===null?W:1}let L=n;function le(R,N){return t.getContext(R,N)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),L===null){const N="webgl2";if(L=le(N,R),L===null)throw le(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,se,ve,Te,Ee,D,b,j,ie,oe,te,ke,he,be,it,_e,Ce,ze,He,Fe,Ye,Ge,ut,X;function De(){ae=new U_(L),ae.init(),Ge=new yv(L,ae),se=new C_(L,ae,e,Ge),ve=new _v(L),se.reverseDepthBuffer&&ve.buffers.depth.setReversed(!0),Te=new B_(L),Ee=new nv,D=new vv(L,ae,ve,Ee,se,Ge,Te),b=new I_(y),j=new D_(y),ie=new E0(L),ut=new T_(L,ie),oe=new O_(L,ie,Te,ut),te=new z_(L,oe,ie,Te),He=new k_(L,se,D),_e=new P_(Ee),ke=new tv(y,b,j,ae,se,ut,_e),he=new Rv(y,Ee),be=new sv,it=new uv(ae),ze=new A_(y,b,j,ve,te,d,c),Ce=new mv(y,te,se),X=new Cv(L,Te,se,ve),Fe=new R_(L,ae,Te),Ye=new F_(L,ae,Te),Te.programs=ke.programs,y.capabilities=se,y.extensions=ae,y.properties=Ee,y.renderLists=be,y.shadowMap=Ce,y.state=ve,y.info=Te}De();const Q=new Av(y,L);this.xr=Q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(q,w,!1))},this.getSize=function(R){return R.set(q,w)},this.setSize=function(R,N,B=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,w=N,t.width=Math.floor(R*W),t.height=Math.floor(N*W),B===!0&&(t.style.width=R+"px",t.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(q*W,w*W).floor()},this.setDrawingBufferSize=function(R,N,B){q=R,w=N,W=B,t.width=Math.floor(R*B),t.height=Math.floor(N*B),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,N,B,V){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,N,B,V),ve.viewport(_.copy(k).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(G)},this.setScissor=function(R,N,B,V){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,N,B,V),ve.scissor(S.copy(G).multiplyScalar(W).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(R){ve.setScissorTest($=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,N=!0,B=!0){let V=0;if(R){let H=!1;if(T!==null){const ee=T.texture.format;H=ee===uc||ee===lc||ee===cc}if(H){const ee=T.texture.type,fe=ee===si||ee===Gi||ee===_r||ee===xs||ee===rc||ee===oc,de=ze.getClearColor(),ye=ze.getClearAlpha(),Ae=de.r,Ue=de.g,Re=de.b;fe?(f[0]=Ae,f[1]=Ue,f[2]=Re,f[3]=ye,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ae,g[1]=Ue,g[2]=Re,g[3]=ye,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),be.dispose(),it.dispose(),Ee.dispose(),b.dispose(),j.dispose(),te.dispose(),ut.dispose(),X.dispose(),ke.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Nt),Q.removeEventListener("sessionend",Wt),ln.stop()};function ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=Te.autoReset,N=Ce.enabled,B=Ce.autoUpdate,V=Ce.needsUpdate,H=Ce.type;De(),Te.autoReset=R,Ce.enabled=N,Ce.autoUpdate=B,Ce.needsUpdate=V,Ce.type=H}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const N=R.target;N.removeEventListener("dispose",ot),vt(N)}function vt(R){xe(R),Ee.remove(R)}function xe(R){const N=Ee.get(R).programs;N!==void 0&&(N.forEach(function(B){ke.releaseProgram(B)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,B,V,H,ee){N===null&&(N=Me);const fe=H.isMesh&&H.matrixWorld.determinant()<0,de=mr(R,N,B,V,H);ve.setMaterial(V,fe);let ye=B.index,Ae=1;if(V.wireframe===!0){if(ye=oe.getWireframeAttribute(B),ye===void 0)return;Ae=2}const Ue=B.drawRange,Re=B.attributes.position;let Ke=Ue.start*Ae,We=(Ue.start+Ue.count)*Ae;ee!==null&&(Ke=Math.max(Ke,ee.start*Ae),We=Math.min(We,(ee.start+ee.count)*Ae)),ye!==null?(Ke=Math.max(Ke,0),We=Math.min(We,ye.count)):Re!=null&&(Ke=Math.max(Ke,0),We=Math.min(We,Re.count));const st=We-Ke;if(st<0||st===1/0)return;ut.setup(H,V,de,B,ye);let mt,je=Fe;if(ye!==null&&(mt=ie.get(ye),je=Ye,je.setIndex(mt)),H.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*ne()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(H.isLine){let Be=V.linewidth;Be===void 0&&(Be=1),ve.setLineWidth(Be*ne()),H.isLineSegments?je.setMode(L.LINES):H.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else H.isPoints?je.setMode(L.POINTS):H.isSprite&&je.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)je.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))je.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,wt=H._multiDrawCounts,ct=H._multiDrawCount,dn=ye?ie.get(ye).bytesPerElement:1,_i=Ee.get(V).currentProgram.getUniforms();for(let xn=0;xn<ct;xn++)_i.setValue(L,"_gl_DrawID",xn),je.render(Be[xn]/dn,wt[xn])}else if(H.isInstancedMesh)je.renderInstances(Ke,st,H.count);else if(B.isInstancedBufferGeometry){const Be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,wt=Math.min(B.instanceCount,Be);je.renderInstances(Ke,st,wt)}else je.render(Ke,st)};function Se(R,N,B){R.transparent===!0&&R.side===qt&&R.forceSinglePass===!1?(R.side=Xt,R.needsUpdate=!0,Qn(R,N,B),R.side=ti,R.needsUpdate=!0,Qn(R,N,B),R.side=qt):Qn(R,N,B)}this.compile=function(R,N,B=null){B===null&&(B=R),p=it.get(B),p.init(N),M.push(p),B.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),R!==B&&R.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const V=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ee=H.material;if(ee)if(Array.isArray(ee))for(let fe=0;fe<ee.length;fe++){const de=ee[fe];Se(de,B,H),V.add(de)}else Se(ee,B,H),V.add(ee)}),M.pop(),p=null,V},this.compileAsync=function(R,N,B=null){const V=this.compile(R,N,B);return new Promise(H=>{function ee(){if(V.forEach(function(fe){Ee.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){H(R);return}setTimeout(ee,10)}ae.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let qe=null;function et(R){qe&&qe(R)}function Nt(){ln.stop()}function Wt(){ln.start()}const ln=new Kh;ln.setAnimationLoop(et),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(R){qe=R,Q.setAnimationLoop(R),R===null?ln.stop():ln.start()},Q.addEventListener("sessionstart",Nt),Q.addEventListener("sessionend",Wt),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(N),N=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,N,T),p=it.get(R,M.length),p.init(N),M.push(p),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(pe),Z=this.localClippingEnabled,K=_e.init(this.clippingPlanes,Z),x=be.get(R,m.length),x.init(),m.push(x),Q.enabled===!0&&Q.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&rn(ee,N,-1/0,y.sortObjects)}rn(R,N,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(F,Y),Ne=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ne&&ze.addToRenderList(x,R),this.info.render.frame++,K===!0&&_e.beginShadows();const B=p.state.shadowsArray;Ce.render(B,R,N),K===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,H=x.transmissive;if(p.setupLights(),N.isArrayCamera){const ee=N.cameras;if(H.length>0)for(let fe=0,de=ee.length;fe<de;fe++){const ye=ee[fe];Qt(V,H,R,ye)}Ne&&ze.render(R);for(let fe=0,de=ee.length;fe<de;fe++){const ye=ee[fe];ki(x,R,ye,ye.viewport)}}else H.length>0&&Qt(V,H,R,N),Ne&&ze.render(R),ki(x,R,N);T!==null&&(D.updateMultisampleRenderTarget(T),D.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(y,R,N),ut.resetDefaultState(),E=-1,O=null,M.pop(),M.length>0?(p=M[M.length-1],K===!0&&_e.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function rn(R,N,B,V){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)B=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){V&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const fe=te.update(R),de=R.material;de.visible&&x.push(R,fe,de,B,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const fe=te.update(R),de=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),me.copy(fe.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(de)){const ye=fe.groups;for(let Ae=0,Ue=ye.length;Ae<Ue;Ae++){const Re=ye[Ae],Ke=de[Re.materialIndex];Ke&&Ke.visible&&x.push(R,fe,Ke,B,me.z,Re)}}else de.visible&&x.push(R,fe,de,B,me.z,null)}}const ee=R.children;for(let fe=0,de=ee.length;fe<de;fe++)rn(ee[fe],N,B,V)}function ki(R,N,B,V){const H=R.opaque,ee=R.transmissive,fe=R.transparent;p.setupLightsView(B),K===!0&&_e.setGlobalState(y.clippingPlanes,B),V&&ve.viewport(_.copy(V)),H.length>0&&Zn(H,N,B),ee.length>0&&Zn(ee,N,B),fe.length>0&&Zn(fe,N,B),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Qt(R,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Xi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?xr:si,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ee=p.state.transmissionRenderTarget[V.id],fe=V.viewport||_;ee.setSize(fe.z,fe.w);const de=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(I),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&ze.render(B);const ye=y.toneMapping;y.toneMapping=vi;const Ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),K===!0&&_e.setGlobalState(y.clippingPlanes,V),Zn(R,B,V),D.updateMultisampleRenderTarget(ee),D.updateRenderTargetMipmap(ee),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Re=0,Ke=N.length;Re<Ke;Re++){const We=N[Re],st=We.object,mt=We.geometry,je=We.material,Be=We.group;if(je.side===qt&&st.layers.test(V.layers)){const wt=je.side;je.side=Xt,je.needsUpdate=!0,fr(st,B,V,mt,je,Be),je.side=wt,je.needsUpdate=!0,Ue=!0}}Ue===!0&&(D.updateMultisampleRenderTarget(ee),D.updateRenderTargetMipmap(ee))}y.setRenderTarget(de),y.setClearColor(I,z),Ae!==void 0&&(V.viewport=Ae),y.toneMapping=ye}function Zn(R,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let H=0,ee=R.length;H<ee;H++){const fe=R[H],de=fe.object,ye=fe.geometry,Ae=V===null?fe.material:V,Ue=fe.group;de.layers.test(B.layers)&&fr(de,N,B,ye,Ae,Ue)}}function fr(R,N,B,V,H,ee){R.onBeforeRender(y,N,B,V,H,ee),R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(y,N,B,V,R,ee),H.transparent===!0&&H.side===qt&&H.forceSinglePass===!1?(H.side=Xt,H.needsUpdate=!0,y.renderBufferDirect(B,N,V,H,R,ee),H.side=ti,H.needsUpdate=!0,y.renderBufferDirect(B,N,V,H,R,ee),H.side=qt):y.renderBufferDirect(B,N,V,H,R,ee),R.onAfterRender(y,N,B,V,H,ee)}function Qn(R,N,B){N.isScene!==!0&&(N=Me);const V=Ee.get(R),H=p.state.lights,ee=p.state.shadowsArray,fe=H.state.version,de=ke.getParameters(R,H.state,ee,N,B),ye=ke.getProgramCacheKey(de);let Ae=V.programs;V.environment=R.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(R.isMeshStandardMaterial?j:b).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?N.environmentRotation:R.envMapRotation,Ae===void 0&&(R.addEventListener("dispose",ot),Ae=new Map,V.programs=Ae);let Ue=Ae.get(ye);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===fe)return pr(R,de),Ue}else de.uniforms=ke.getUniforms(R),R.onBeforeCompile(de,y),Ue=ke.acquireProgram(de,ye),Ae.set(ye,Ue),V.uniforms=de.uniforms;const Re=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Re.clippingPlanes=_e.uniform),pr(R,de),V.needsLights=go(R),V.lightsStateVersion=fe,V.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function ds(R){if(R.uniformsList===null){const N=R.currentProgram.getUniforms();R.uniformsList=Qo.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function pr(R,N){const B=Ee.get(R);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function mr(R,N,B,V,H){N.isScene!==!0&&(N=Me),D.resetTextureUnits();const ee=N.fog,fe=V.isMeshStandardMaterial?N.environment:null,de=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Yt,ye=(V.isMeshStandardMaterial?j:b).get(V.envMap||fe),Ae=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!B.morphAttributes.position,Ke=!!B.morphAttributes.normal,We=!!B.morphAttributes.color;let st=vi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(st=y.toneMapping);const mt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=mt!==void 0?mt.length:0,Be=Ee.get(V),wt=p.state.lights;if(K===!0&&(Z===!0||R!==O)){const En=R===O&&V.id===E;_e.setState(V,R,En)}let ct=!1;V.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wt.state.version||Be.outputColorSpace!==de||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==ye||V.fog===!0&&Be.fog!==ee||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==_e.numPlanes||Be.numIntersection!==_e.numIntersection)||Be.vertexAlphas!==Ae||Be.vertexTangents!==Ue||Be.morphTargets!==Re||Be.morphNormals!==Ke||Be.morphColors!==We||Be.toneMapping!==st||Be.morphTargetsCount!==je)&&(ct=!0):(ct=!0,Be.__version=V.version);let dn=Be.currentProgram;ct===!0&&(dn=Qn(V,N,H));let _i=!1,xn=!1,qu=!1;const Dt=dn.getUniforms(),zi=Be.uniforms;if(ve.useProgram(dn.program)&&(_i=!0,xn=!0,qu=!0),V.id!==E&&(E=V.id,xn=!0),_i||O!==R){se.reverseDepthBuffer?(ce.copy(R.projectionMatrix),Qm(ce),e0(ce),Dt.setValue(L,"projectionMatrix",ce)):Dt.setValue(L,"projectionMatrix",R.projectionMatrix),Dt.setValue(L,"viewMatrix",R.matrixWorldInverse);const En=Dt.map.cameraPosition;En!==void 0&&En.setValue(L,we.setFromMatrixPosition(R.matrixWorld)),se.logarithmicDepthBuffer&&Dt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Dt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),O!==R&&(O=R,xn=!0,qu=!0)}if(H.isSkinnedMesh){Dt.setOptional(L,H,"bindMatrix"),Dt.setOptional(L,H,"bindMatrixInverse");const En=H.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Dt.setValue(L,"boneTexture",En.boneTexture,D))}H.isBatchedMesh&&(Dt.setOptional(L,H,"batchingTexture"),Dt.setValue(L,"batchingTexture",H._matricesTexture,D),Dt.setOptional(L,H,"batchingIdTexture"),Dt.setValue(L,"batchingIdTexture",H._indirectTexture,D),Dt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&Dt.setValue(L,"batchingColorTexture",H._colorsTexture,D));const Yu=B.morphAttributes;if((Yu.position!==void 0||Yu.normal!==void 0||Yu.color!==void 0)&&He.update(H,B,dn),(xn||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,Dt.setValue(L,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zi.envMap.value=ye,zi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(zi.envMapIntensity.value=N.environmentIntensity),xn&&(Dt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&fs(zi,qu),ee&&V.fog===!0&&he.refreshFogUniforms(zi,ee),he.refreshMaterialUniforms(zi,V,W,w,p.state.transmissionRenderTarget[R.id]),Qo.upload(L,ds(Be),zi,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Qo.upload(L,ds(Be),zi,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Dt.setValue(L,"center",H.center),Dt.setValue(L,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(L,"normalMatrix",H.normalMatrix),Dt.setValue(L,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const En=V.uniformsGroups;for(let Ku=0,Dw=En.length;Ku<Dw;Ku++){const Wp=En[Ku];X.update(Wp,dn),X.bind(Wp,dn)}}return dn}function fs(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function go(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,N,B){Ee.get(R.texture).__webglTexture=N,Ee.get(R.depthTexture).__webglTexture=B;const V=Ee.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,N){const B=Ee.get(R);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,B=0){T=R,C=N,A=B;let V=!0,H=null,ee=!1,fe=!1;if(R){const ye=Ee.get(R);if(ye.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(ye.__hasExternalTextures)D.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Re=R.depthTexture;if(ye.__boundDepthTexture!==Re){if(Re!==null&&Ee.has(Re)&&(R.width!==Re.image.width||R.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(fe=!0);const Ue=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?H=Ue[N][B]:H=Ue[N],ee=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?H=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[B]:H=Ue,_.copy(R.viewport),S.copy(R.scissor),P=R.scissorTest}else _.copy(k).multiplyScalar(W).floor(),S.copy(G).multiplyScalar(W).floor(),P=$;if(ve.bindFramebuffer(L.FRAMEBUFFER,H)&&V&&ve.drawBuffers(R,H),ve.viewport(_),ve.scissor(S),ve.setScissorTest(P),ee){const ye=Ee.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,B)}else if(fe){const ye=Ee.get(R.texture),Ae=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Ae)}E=-1},this.readRenderTargetPixels=function(R,N,B,V,H,ee,fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(de=de[fe]),de){ve.bindFramebuffer(L.FRAMEBUFFER,de);try{const ye=R.texture,Ae=ye.format,Ue=ye.type;if(!se.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-V&&B>=0&&B<=R.height-H&&L.readPixels(N,B,V,H,Ge.convert(Ae),Ge.convert(Ue),ee)}finally{const ye=T!==null?Ee.get(T).__webglFramebuffer:null;ve.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(R,N,B,V,H,ee,fe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(de=de[fe]),de){const ye=R.texture,Ae=ye.format,Ue=ye.type;if(!se.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=R.width-V&&B>=0&&B<=R.height-H){ve.bindFramebuffer(L.FRAMEBUFFER,de);const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(N,B,V,H,Ge.convert(Ae),Ge.convert(Ue),0);const Ke=T!==null?Ee.get(T).__webglFramebuffer:null;ve.bindFramebuffer(L.FRAMEBUFFER,Ke);const We=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zm(L,We,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(Re),L.deleteSync(We),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,N=null,B=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,R=arguments[1]);const V=Math.pow(2,-B),H=Math.floor(R.image.width*V),ee=Math.floor(R.image.height*V),fe=N!==null?N.x:0,de=N!==null?N.y:0;D.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,fe,de,H,ee),ve.unbindTexture()},this.copyTextureToTexture=function(R,N,B=null,V=null,H=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],N=arguments[2],H=arguments[3]||0,B=null);let ee,fe,de,ye,Ae,Ue;B!==null?(ee=B.max.x-B.min.x,fe=B.max.y-B.min.y,de=B.min.x,ye=B.min.y):(ee=R.image.width,fe=R.image.height,de=0,ye=0),V!==null?(Ae=V.x,Ue=V.y):(Ae=0,Ue=0);const Re=Ge.convert(N.format),Ke=Ge.convert(N.type);D.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const We=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mt=L.getParameter(L.UNPACK_SKIP_PIXELS),je=L.getParameter(L.UNPACK_SKIP_ROWS),Be=L.getParameter(L.UNPACK_SKIP_IMAGES),wt=R.isCompressedTexture?R.mipmaps[H]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,de),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,Ae,Ue,ee,fe,Re,Ke,wt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,Ae,Ue,wt.width,wt.height,Re,wt.data):L.texSubImage2D(L.TEXTURE_2D,H,Ae,Ue,ee,fe,Re,Ke,wt),L.pixelStorei(L.UNPACK_ROW_LENGTH,We),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),H===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(R,N,B=null,V=null,H=0){R.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,R=arguments[2],N=arguments[3],H=arguments[4]||0);let ee,fe,de,ye,Ae,Ue,Re,Ke,We;const st=R.isCompressedTexture?R.mipmaps[H]:R.image;B!==null?(ee=B.max.x-B.min.x,fe=B.max.y-B.min.y,de=B.max.z-B.min.z,ye=B.min.x,Ae=B.min.y,Ue=B.min.z):(ee=st.width,fe=st.height,de=st.depth,ye=0,Ae=0,Ue=0),V!==null?(Re=V.x,Ke=V.y,We=V.z):(Re=0,Ke=0,We=0);const mt=Ge.convert(N.format),je=Ge.convert(N.type);let Be;if(N.isData3DTexture)D.setTexture3D(N,0),Be=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)D.setTexture2DArray(N,0),Be=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const wt=L.getParameter(L.UNPACK_ROW_LENGTH),ct=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),_i=L.getParameter(L.UNPACK_SKIP_ROWS),xn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,st.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Be,H,Re,Ke,We,ee,fe,de,mt,je,st.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Be,H,Re,Ke,We,ee,fe,de,mt,st.data):L.texSubImage3D(Be,H,Re,Ke,We,ee,fe,de,mt,je,st),L.pixelStorei(L.UNPACK_ROW_LENGTH,wt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,_i),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xn),H===0&&N.generateMipmaps&&L.generateMipmap(Be),ve.unbindTexture()},this.initRenderTarget=function(R){Ee.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),ve.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,ve.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zc?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Ao?"display-p3":"srgb"}}class Ml{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new Ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ir extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new U;class Lr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sl extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vs;const Nr=new U,Ws=new U,Xs=new U,qs=new ge,Dr=new ge,wd=new $e,ta=new U,Ur=new U,na=new U,Ed=new ge,bl=new ge,Ad=new ge;class Td extends Mt{constructor(e=new Sl){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bd(t,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new Lr(n,3,0,!1)),Vs.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ia(ta.set(-.5,-.5,0),Xs,o,Ws,i,r),ia(Ur.set(.5,-.5,0),Xs,o,Ws,i,r),ia(na.set(.5,.5,0),Xs,o,Ws,i,r),Ed.set(0,0),bl.set(1,0),Ad.set(1,1);let a=e.ray.intersectTriangle(ta,Ur,na,!1,Nr);if(a===null&&(ia(Ur.set(-.5,.5,0),Xs,o,Ws,i,r),bl.set(0,1),a=e.ray.intersectTriangle(ta,na,Ur,!1,Nr),a===null))return;const c=e.ray.origin.distanceTo(Nr);c<e.near||c>e.far||t.push({distance:c,point:Nr.clone(),uv:Mn.getInterpolation(Nr,ta,Ur,na,Ed,bl,Ad,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ia(s,e,t,n,i,r){qs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Dr.x=r*qs.x-i*qs.y,Dr.y=i*qs.x+r*qs.y):Dr.copy(qs),s.copy(e),s.x+=Dr.x,s.y+=Dr.y,s.applyMatrix4(wd)}const Rd=new U,Cd=new ft,Pd=new ft,Iv=new U,Id=new $e,sa=new U,wl=new Hn,Ld=new $e,El=new Fo;class Lv extends re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ih,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(i),e.ray.intersectsSphere(wl)!==!1&&(Ld.copy(i).invert(),El.copy(e.ray).applyMatrix4(Ld),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,El)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Cd.fromBufferAttribute(i.attributes.skinIndex,e),Pd.fromBufferAttribute(i.attributes.skinWeight,e),Rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Pd.getComponent(r);if(o!==0){const a=Cd.getComponent(r);Id.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Iv.copy(Rd).applyMatrix4(Id),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nd extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dd extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=on,u=on,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ud=new $e,Nv=new $e;class Al{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Nv;Ud.multiplyMatrices(a,t[r]),Ud.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Dd(t,e,e,vn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Nd),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Tl extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ys=new $e,Od=new $e,ra=[],Fd=new zn,Dv=new $e,Or=new re,Fr=new Hn;class Bd extends re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Fd.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Fd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Fr.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),Od.multiplyMatrices(n,Ys),Or.matrixWorld=Od,Or.raycast(e,ra);for(let o=0,a=ra.length;o<a;o++){const c=ra[o];c.instanceId=r,c.object=this,t.push(c)}ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dd(new Float32Array(i*this.count),i,this.count,ac,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Rl extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new U,aa=new U,kd=new $e,Br=new Fo,ca=new Hn,Cl=new U,zd=new U;class la extends Mt{constructor(e=new Ct,t=new Rl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oa.fromBufferAttribute(t,i-1),aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oa.distanceTo(aa);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;kd.copy(i).invert(),Br.copy(e.ray).applyMatrix4(kd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){const m=u.getX(x),M=u.getX(x+1),y=ua(this,e,Br,c,m,M);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(f),m=ua(this,e,Br,c,x,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){const m=ua(this,e,Br,c,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=ua(this,e,Br,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ua(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(oa.fromBufferAttribute(o,i),aa.fromBufferAttribute(o,r),t.distanceSqToSegment(oa,aa,Cl,zd)>n)return;Cl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:zd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Hd=new U,Gd=new U;class Uv extends la{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Hd.fromBufferAttribute(t,i),Gd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hd.distanceTo(Gd);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ov extends la{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ha extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vd=new $e,Pl=new Fo,da=new Hn,fa=new U;class Il extends Mt{constructor(e=new Ct,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Vd.copy(i).invert(),Pl.copy(e.ray).applyMatrix4(Vd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const p=l.getX(g);fa.fromBufferAttribute(h,p),Wd(fa,p,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)fa.fromBufferAttribute(h,g),Wd(fa,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wd(s,e,t,n,i,r,o){const a=Pl.distanceSqToPoint(s);if(a<t){const c=new U;Pl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ts extends Bt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ge:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],r=[],o=[],a=new U,c=new $e;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ft(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ft(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ll extends Vn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fv extends Ll{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const pa=new U,Dl=new Nl,Ul=new Nl,Ol=new Nl;class Bv extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(pa.subVectors(i[0],i[1]).add(i[0]),l=pa);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(pa.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=pa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Dl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,p),Ul.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,p),Ol.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ul.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ol.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Dl.calc(c),Ul.calc(c),Ol.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xd(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function kv(s,e){const t=1-s;return t*t*e}function zv(s,e){return 2*(1-s)*s*e}function Hv(s,e){return s*s*e}function kr(s,e,t,n){return kv(s,e)+zv(s,t)+Hv(s,n)}function Gv(s,e){const t=1-s;return t*t*t*e}function Vv(s,e){const t=1-s;return 3*t*t*s*e}function Wv(s,e){return 3*(1-s)*s*s*e}function Xv(s,e){return s*s*s*e}function zr(s,e,t,n,i){return Gv(s,e)+Vv(s,t)+Wv(s,n)+Xv(s,i)}class qd extends Vn{constructor(e=new ge,t=new ge,n=new ge,i=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ge){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(e,i.x,r.x,o.x,a.x),zr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qv extends Vn{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(e,i.x,r.x,o.x,a.x),zr(e,i.y,r.y,o.y,a.y),zr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yd extends Vn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yv extends Vn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends Vn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(kr(e,i.x,r.x,o.x),kr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kv extends Vn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(kr(e,i.x,r.x,o.x),kr(e,i.y,r.y,o.y),kr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Xd(a,c.x,l.x,u.x,h.x),Xd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ge().fromArray(i))}return this}}var Fl=Object.freeze({__proto__:null,ArcCurve:Fv,CatmullRomCurve3:Bv,CubicBezierCurve:qd,CubicBezierCurve3:qv,EllipseCurve:Ll,LineCurve:Yd,LineCurve3:Yv,QuadraticBezierCurve:Kd,QuadraticBezierCurve3:Kv,SplineCurve:$d});class $v extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Fl[i.type]().fromJSON(i))}return this}}class Bl extends $v{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yd(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Kd(this.currentPoint.clone(),new ge(e,t),new ge(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new qd(this.currentPoint.clone(),new ge(e,t),new ge(n,i),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Ll(e,t,n,i,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ma extends Ct{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ft(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new U,d=new ge,f=new U,g=new U,x=new U;let p=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=t;M++){const y=n+M*u*i,v=Math.sin(y),C=Math.cos(y);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*v,h.y=e[A].y,h.z=e[A].x*C,o.push(h.x,h.y,h.z),d.x=M/t,d.y=A/(e.length-1),a.push(d.x,d.y);const T=c[3*A+0]*v,E=c[3*A+1],O=c[3*A+0]*C;l.push(T,E,O)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){const v=y+M*e.length,C=v,A=v+e.length,T=v+e.length+1,E=v+1;r.push(C,A,E),r.push(T,E,A)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.points,e.segments,e.phiStart,e.phiLength)}}class Ln extends ma{constructor(e=1,t=1,n=4,i=8){const r=new Bl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ln(e.radius,e.length,e.capSegments,e.radialSegments)}}class St extends Ct{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],p=n/2;let m=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function M(){const v=new U,C=new U;let A=0;const T=(t-e)/n;for(let E=0;E<=r;E++){const O=[],_=E/r,S=_*(t-e)+e;for(let P=0;P<=i;P++){const I=P/i,z=I*c+a,q=Math.sin(z),w=Math.cos(z);C.x=S*q,C.y=-_*n+p,C.z=S*w,h.push(C.x,C.y,C.z),v.set(q,T,w).normalize(),d.push(v.x,v.y,v.z),f.push(I,1-_),O.push(g++)}x.push(O)}for(let E=0;E<i;E++)for(let O=0;O<r;O++){const _=x[O][E],S=x[O+1][E],P=x[O+1][E+1],I=x[O][E+1];e>0&&(u.push(_,S,I),A+=3),t>0&&(u.push(S,P,I),A+=3)}l.addGroup(m,A,0),m+=A}function y(v){const C=g,A=new ge,T=new U;let E=0;const O=v===!0?e:t,_=v===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),g++;const S=g;for(let P=0;P<=i;P++){const z=P/i*c+a,q=Math.cos(z),w=Math.sin(z);T.x=O*w,T.y=p*_,T.z=O*q,h.push(T.x,T.y,T.z),d.push(0,_,0),A.x=q*.5+.5,A.y=w*.5*_+.5,f.push(A.x,A.y),g++}for(let P=0;P<i;P++){const I=C+P,z=S+P;v===!0?u.push(z,z+1,I):u.push(z+1,z,I),E+=3}l.addGroup(m,E,v===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class un extends St{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new un(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ga extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new U,v=new U,C=new U;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],v),f(t[A+2],C),c(y,v,C,M)}function c(M,y,v,C){const A=C+1,T=[];for(let E=0;E<=A;E++){T[E]=[];const O=M.clone().lerp(v,E/A),_=y.clone().lerp(v,E/A),S=A-E;for(let P=0;P<=S;P++)P===0&&E===A?T[E][P]=O:T[E][P]=O.clone().lerp(_,P/S)}for(let E=0;E<A;E++)for(let O=0;O<2*(A-E)-1;O++){const _=Math.floor(O/2);O%2===0?(d(T[E][_+1]),d(T[E+1][_]),d(T[E][_])):(d(T[E][_+1]),d(T[E+1][_+1]),d(T[E+1][_]))}}function l(M){const y=new U;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(M),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const M=new U;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const v=p(M)/2/Math.PI+.5,C=m(M)/Math.PI+.5;o.push(v,1-C)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],v=o[M+2],C=o[M+4],A=Math.max(y,v,C),T=Math.min(y,v,C);A>.9&&T<.1&&(y<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const v=M*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const M=new U,y=new U,v=new U,C=new U,A=new ge,T=new ge,E=new ge;for(let O=0,_=0;O<r.length;O+=9,_+=6){M.set(r[O+0],r[O+1],r[O+2]),y.set(r[O+3],r[O+4],r[O+5]),v.set(r[O+6],r[O+7],r[O+8]),A.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),E.set(o[_+4],o[_+5]),C.copy(M).add(y).add(v).divideScalar(3);const S=p(C);x(A,_+0,M,S),x(T,_+2,y,S),x(E,_+4,v,S)}}function x(M,y,v,C){C<0&&M.x===1&&(o[y]=M.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.vertices,e.indices,e.radius,e.details)}}class Hr extends Bl{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Bl().fromJSON(i))}return this}}const jv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=jd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=ty(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(let g=t;g<i;g+=t)h=s[g],d=s[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Gr(r,o,t,a,c,f,0),o}};function jd(s,e,t,n,i){let r,o;if(i===dy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Qd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Qd(r,s[r],s[r+1],o);return o&&_a(o,o.next)&&(Wr(o),o=o.next),o}function ns(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(_a(t,t.next)||At(t.prev,t,t.next)===0)){if(Wr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&oy(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Zv(s,n,i,r):Jv(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Wr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Qv(ns(s),e,t),Gr(s,e,t,n,i,r,2)):o===2&&ey(s,e,t,n,i,r):Gr(ns(s),e,t,n,i,r,1);break}}}function Jv(s){const e=s.prev,t=s,n=s.next;if(At(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Ks(i,a,r,c,o,l,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(At(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,p=u>h?u>d?u:d:h>d?h:d,m=kl(f,g,e,t,n),M=kl(x,p,e,t,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=m&&v&&v.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Ks(a,u,c,h,l,d,y.x,y.y)&&At(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ks(a,u,c,h,l,d,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Ks(a,u,c,h,l,d,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ks(a,u,c,h,l,d,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!_a(i,r)&&Jd(i,n,n.next,r)&&Vr(i,r)&&Vr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Wr(n),Wr(n.next),n=s=r),n=n.next}while(n!==s);return ns(n)}function ey(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ly(o,a)){let c=Zd(o,a);o=ns(o,o.next),c=ns(c,c.next),Gr(o,e,t,n,i,r,0),Gr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ty(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=jd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(cy(l));for(i.sort(ny),r=0;r<i.length;r++)t=iy(i[r],t);return t}function ny(s,e){return s.x-e.x}function iy(s,e){const t=sy(s,e);if(!t)return e;const n=Zd(t,s);return ns(n,n.next),ns(t,t.next)}function sy(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ks(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Vr(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&ry(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function ry(s,e){return At(s.prev,s,e.prev)<0&&At(e.next,s,s.next)<0}function oy(s,e,t,n){let i=s;do i.z===0&&(i.z=kl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ay(i)}function ay(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function kl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function cy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ks(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ly(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!uy(s,e)&&(Vr(s,e)&&Vr(e,s)&&hy(s,e)&&(At(s.prev,s,e.prev)||At(s,e.prev,e))||_a(s,e)&&At(s.prev,s,s.next)>0&&At(e.prev,e,e.next)>0)}function At(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _a(s,e){return s.x===e.x&&s.y===e.y}function Jd(s,e,t,n){const i=va(At(s,e,t)),r=va(At(s,e,n)),o=va(At(t,n,s)),a=va(At(t,n,e));return!!(i!==r&&o!==a||i===0&&xa(s,t,e)||r===0&&xa(s,n,e)||o===0&&xa(t,s,n)||a===0&&xa(t,e,n))}function xa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function va(s){return s>0?1:s<0?-1:0}function uy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Vr(s,e){return At(s.prev,s,s.next)<0?At(s,e,s.next)>=0&&At(s,s.prev,e)>=0:At(s,e,s.prev)<0||At(s,s.next,e)<0}function hy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Zd(s,e){const t=new zl(s.i,s.x,s.y),n=new zl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qd(s,e,t,n){const i=new zl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function zl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Xr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Xr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];ef(e),tf(n,e);let o=e.length;t.forEach(ef);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,tf(n,t[c]);const a=jv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ef(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function tf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class $s extends Ct{constructor(e=new Hr([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new xt(i,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:fy;let y,v=!1,C,A,T,E;m&&(y=m.getSpacedPoints(u),v=!0,d=!1,C=m.computeFrenetFrames(u,!1),A=new U,T=new U,E=new U),d||(p=0,f=0,g=0,x=0);const O=a.extractPoints(l);let _=O.shape;const S=O.holes;if(!Xr.isClockWise(_)){_=_.reverse();for(let ne=0,L=S.length;ne<L;ne++){const le=S[ne];Xr.isClockWise(le)&&(S[ne]=le.reverse())}}const I=Xr.triangulateShape(_,S),z=_;for(let ne=0,L=S.length;ne<L;ne++){const le=S[ne];_=_.concat(le)}function q(ne,L,le){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(L,le)}const w=_.length,W=I.length;function F(ne,L,le){let ae,se,ve;const Te=ne.x-L.x,Ee=ne.y-L.y,D=le.x-ne.x,b=le.y-ne.y,j=Te*Te+Ee*Ee,ie=Te*b-Ee*D;if(Math.abs(ie)>Number.EPSILON){const oe=Math.sqrt(j),te=Math.sqrt(D*D+b*b),ke=L.x-Ee/oe,he=L.y+Te/oe,be=le.x-b/te,it=le.y+D/te,_e=((be-ke)*b-(it-he)*D)/(Te*b-Ee*D);ae=ke+Te*_e-ne.x,se=he+Ee*_e-ne.y;const Ce=ae*ae+se*se;if(Ce<=2)return new ge(ae,se);ve=Math.sqrt(Ce/2)}else{let oe=!1;Te>Number.EPSILON?D>Number.EPSILON&&(oe=!0):Te<-Number.EPSILON?D<-Number.EPSILON&&(oe=!0):Math.sign(Ee)===Math.sign(b)&&(oe=!0),oe?(ae=-Ee,se=Te,ve=Math.sqrt(j)):(ae=Te,se=Ee,ve=Math.sqrt(j/2))}return new ge(ae/ve,se/ve)}const Y=[];for(let ne=0,L=z.length,le=L-1,ae=ne+1;ne<L;ne++,le++,ae++)le===L&&(le=0),ae===L&&(ae=0),Y[ne]=F(z[ne],z[le],z[ae]);const k=[];let G,$=Y.concat();for(let ne=0,L=S.length;ne<L;ne++){const le=S[ne];G=[];for(let ae=0,se=le.length,ve=se-1,Te=ae+1;ae<se;ae++,ve++,Te++)ve===se&&(ve=0),Te===se&&(Te=0),G[ae]=F(le[ae],le[ve],le[Te]);k.push(G),$=$.concat(G)}for(let ne=0;ne<p;ne++){const L=ne/p,le=f*Math.cos(L*Math.PI/2),ae=g*Math.sin(L*Math.PI/2)+x;for(let se=0,ve=z.length;se<ve;se++){const Te=q(z[se],Y[se],ae);pe(Te.x,Te.y,-le)}for(let se=0,ve=S.length;se<ve;se++){const Te=S[se];G=k[se];for(let Ee=0,D=Te.length;Ee<D;Ee++){const b=q(Te[Ee],G[Ee],ae);pe(b.x,b.y,-le)}}}const J=g+x;for(let ne=0;ne<w;ne++){const L=d?q(_[ne],$[ne],J):_[ne];v?(T.copy(C.normals[0]).multiplyScalar(L.x),A.copy(C.binormals[0]).multiplyScalar(L.y),E.copy(y[0]).add(T).add(A),pe(E.x,E.y,E.z)):pe(L.x,L.y,0)}for(let ne=1;ne<=u;ne++)for(let L=0;L<w;L++){const le=d?q(_[L],$[L],J):_[L];v?(T.copy(C.normals[ne]).multiplyScalar(le.x),A.copy(C.binormals[ne]).multiplyScalar(le.y),E.copy(y[ne]).add(T).add(A),pe(E.x,E.y,E.z)):pe(le.x,le.y,h/u*ne)}for(let ne=p-1;ne>=0;ne--){const L=ne/p,le=f*Math.cos(L*Math.PI/2),ae=g*Math.sin(L*Math.PI/2)+x;for(let se=0,ve=z.length;se<ve;se++){const Te=q(z[se],Y[se],ae);pe(Te.x,Te.y,h+le)}for(let se=0,ve=S.length;se<ve;se++){const Te=S[se];G=k[se];for(let Ee=0,D=Te.length;Ee<D;Ee++){const b=q(Te[Ee],G[Ee],ae);v?pe(b.x,b.y+y[u-1].y,y[u-1].x+le):pe(b.x,b.y,h+le)}}}K(),Z();function K(){const ne=i.length/3;if(d){let L=0,le=w*L;for(let ae=0;ae<W;ae++){const se=I[ae];we(se[2]+le,se[1]+le,se[0]+le)}L=u+p*2,le=w*L;for(let ae=0;ae<W;ae++){const se=I[ae];we(se[0]+le,se[1]+le,se[2]+le)}}else{for(let L=0;L<W;L++){const le=I[L];we(le[2],le[1],le[0])}for(let L=0;L<W;L++){const le=I[L];we(le[0]+w*u,le[1]+w*u,le[2]+w*u)}}n.addGroup(ne,i.length/3-ne,0)}function Z(){const ne=i.length/3;let L=0;ce(z,L),L+=z.length;for(let le=0,ae=S.length;le<ae;le++){const se=S[le];ce(se,L),L+=se.length}n.addGroup(ne,i.length/3-ne,1)}function ce(ne,L){let le=ne.length;for(;--le>=0;){const ae=le;let se=le-1;se<0&&(se=ne.length-1);for(let ve=0,Te=u+p*2;ve<Te;ve++){const Ee=w*ve,D=w*(ve+1),b=L+ae+Ee,j=L+se+Ee,ie=L+se+D,oe=L+ae+D;me(b,j,ie,oe)}}}function pe(ne,L,le){c.push(ne),c.push(L),c.push(le)}function we(ne,L,le){Me(ne),Me(L),Me(le);const ae=i.length/3,se=M.generateTopUV(n,i,ae-3,ae-2,ae-1);Ne(se[0]),Ne(se[1]),Ne(se[2])}function me(ne,L,le,ae){Me(ne),Me(L),Me(ae),Me(L),Me(le),Me(ae);const se=i.length/3,ve=M.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);Ne(ve[0]),Ne(ve[1]),Ne(ve[3]),Ne(ve[1]),Ne(ve[2]),Ne(ve[3])}function Me(ne){i.push(c[ne*3+0]),i.push(c[ne*3+1]),i.push(c[ne*3+2])}function Ne(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return py(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Fl[i.type]().fromJSON(i)),new $s(n,e.options)}}const fy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ge(r,o),new ge(a,c),new ge(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-h),new ge(d,1-g),new ge(x,1-m)]:[new ge(a,1-c),new ge(u,1-h),new ge(f,1-g),new ge(p,1-m)]}};function py(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Hl extends ga{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hl(e.radius,e.detail)}}class Gl extends ga{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gl(e.radius,e.detail)}}class Ze extends Ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new U,d=new U,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const M=[],y=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const A=C/t;h.x=-e*Math.cos(i+A*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+A*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(A+v,1-y),M.push(l++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const y=u[m][M+1],v=u[m][M],C=u[m+1][M],A=u[m+1][M+1];(m!==0||o>0)&&f.push(y,v,A),(m!==n-1||c<Math.PI)&&f.push(v,C,A)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wn extends Ct{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new U,h=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const x=g/i*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const x=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(x,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Je extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends Je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ya(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function my(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function gy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function sf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class qr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _y extends qr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ms,endingEnd:Ms}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ss:r=e,a=2*t-n;break;case Eo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ss:o=e,c=2*n-t;break;case Eo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,M=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*p+(1.5+f)*x+.5*g,v=f*p-f*x;for(let C=0;C!==a;++C)r[C]=m*o[u+C]+M*o[l+C]+y*o[c+C]+v*o[h+C];return r}}class rf extends qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class xy extends qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _y(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case Fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&my(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}qn.prototype.TimeBufferType=Float32Array,qn.prototype.ValueBufferType=Float32Array,qn.prototype.DefaultInterpolation=yr;class js extends qn{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="bool",js.prototype.ValueBufferType=Array,js.prototype.DefaultInterpolation=vr,js.prototype.InterpolantFactoryMethodLinear=void 0,js.prototype.InterpolantFactoryMethodSmooth=void 0;class of extends qn{}of.prototype.ValueTypeName="color";class Js extends qn{}Js.prototype.ValueTypeName="number";class vy extends qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Kt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Zs extends qn{InterpolantFactoryMethodLinear(e){return new vy(this.times,this.values,this.getValueSize(),e)}}Zs.prototype.ValueTypeName="quaternion",Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends qn{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="string",Qs.prototype.ValueBufferType=Array,Qs.prototype.DefaultInterpolation=vr,Qs.prototype.InterpolantFactoryMethodLinear=void 0,Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends qn{}er.prototype.ValueTypeName="vector";class Vl{constructor(e="",t=-1,n=[],i=Bc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(My(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=gy(c);c=nf(c,1,u),l=nf(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Js(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const p=[],m=[];sf(f,p,m,g),p.length!==0&&x.push(new h(d,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const p=[],m=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];p.push(y.time),m.push(y.morphTarget===x?1:0)}i.push(new Js(".morphTargetInfluence["+x+"]",p,m))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(er,f+".position",d,"pos",i),n(Zs,f+".quaternion",d,"rot",i),n(er,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return er;case"color":return of;case"quaternion":return Zs;case"bool":case"boolean":return js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function My(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yy(s.type);if(s.times===void 0){const t=[],n=[];sf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Pi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Sy{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const by=new Sy;class tr{constructor(e){this.manager=e!==void 0?e:by,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class wy extends Error{constructor(e,t){super(e),this.response=t}}class af extends tr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=hi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:y,value:v})=>{if(y)m.close();else{x+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,T=u.length;A<T;A++){const E=u[A];E.onProgress&&E.onProgress(C)}m.enqueue(v),M()}},y=>{m.error(y)})}}});return new Response(p)}else throw new wy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Pi.add(e,l);const u=hi[e];delete hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=hi[e];if(u===void 0)throw this.manager.itemError(e),l;delete hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ey extends tr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Pi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=br("img");function c(){u(),Pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ay extends tr{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new Ey(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Yr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ma extends Yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wl=new $e,cf=new U,lf=new U;class Xl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ty extends Xl{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ry extends Yr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ty}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const uf=new $e,Kr=new U,ql=new U;class Cy extends Xl{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kr),ql.copy(n.position),ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ql),n.updateMatrixWorld(),i.makeTranslation(-Kr.x,-Kr.y,-Kr.z),uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf)}}class Yl extends Yr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Py extends Xl{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class di extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Py}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Iy extends Yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $r{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ly extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Pi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(e,c),r.manager.itemStart(e)}}class Ny{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,o,e,t,e,n),Kt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Kl="\\[\\]\\.:\\/",Dy=new RegExp("["+Kl+"]","g"),$l="[^"+Kl+"]",Uy="[^"+Kl.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",$l),Fy=/(WCOD+)?/.source.replace("WCOD",Uy),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),ky=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),zy=new RegExp("^"+Oy+Fy+By+ky+"$"),Hy=["material","materials","bones","map"];class Gy{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dy,"")}static parseTrackName(e){const t=zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Hy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Gy,pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray],pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ms,endingEnd:Ms};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Mm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case bm:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Bc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Sm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===ym){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ss,i.endingEnd=Ss):(e?i.endingStart=this.zeroSlopeAtStart?Ss:Ms:i.endingStart=Eo,t?i.endingEnd=this.zeroSlopeAtEnd?Ss:Ms:i.endingEnd=Eo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Wy=new Float32Array(1);class Xy extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new Ny(pt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new rf(new Float32Array(2),new Float32Array(2),1,Wy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Vl.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Bc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Vy(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Vl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa),(function(){var s="[native-gamepad-bridge]",e=typeof window.__p5NativeHost<"u"&&window.__p5NativeHost===!0||typeof window.webkit<"u"&&window.webkit&&window.webkit.messageHandlers;if(!e)return;var t={connected:!1,timestamp:0,buttons:[],axes:[]};function n(){return{pressed:!1,touched:!1,value:0}}function i(a){if(a==null)return n();if(typeof a=="boolean")return{pressed:a,touched:a,value:a?1:0};if(typeof a=="number"){var c=a>.5;return{pressed:c,touched:c,value:a}}if(typeof a=="object"){var l="p"in a?!!a.p:"pressed"in a?!!a.pressed:!1,u=typeof a.v=="number"?a.v:typeof a.value=="number"?a.value:l?1:0;return{pressed:l,touched:l,value:u}}return n()}function r(){for(var a=new Array(17),c=0;c<17;c++)a[c]=i(t.buttons&&t.buttons[c]);var l=[0,0,0,0];if(t.axes&&t.axes.length)for(var u=0;u<Math.min(4,t.axes.length);u++){var h=t.axes[u];l[u]=typeof h=="number"&&!isNaN(h)?h:0}return{id:"Native iOS Gamepad (GCController bridge)",index:0,connected:t.connected,timestamp:t.timestamp,mapping:"standard",axes:l,buttons:a,vibrationActuator:null,hapticActuators:[]}}window.__nativeGamepadLastRaw=null,window.__nativeGamepadUpdateCount=0,window.__nativeGamepadUpdate=function(a){a&&(t.buttons=Array.isArray(a.buttons)?a.buttons:[],t.axes=Array.isArray(a.axes)?a.axes:[],t.connected=!0,t.timestamp=typeof performance<"u"&&performance.now?performance.now():Date.now(),window.__nativeGamepadLastRaw=a,window.__nativeGamepadUpdateCount++)},window.__nativeGamepadConnection=function(a){var c=t.connected;if(t.connected=!!a,t.connected||(t.buttons=[],t.axes=[]),t.connected!==c){var l=t.connected?"gamepadconnected":"gamepaddisconnected",u=new Event(l);u.gamepad=r(),window.dispatchEvent(u)}};var o=typeof navigator.getGamepads=="function"?navigator.getGamepads.bind(navigator):null;navigator.getGamepads=function(){if(t.connected)return[r(),null,null,null];if(o)try{return o()}catch{return[null,null,null,null]}return[null,null,null,null]},window.__nativeGamepadBridgeReady=!0,console.log(s,"active: iOS host detected")})();const qy=60,Yy=.5,Ky=5e3,hf=1e6,df=2e6;function $y(){const s=new Ir;s.background=new Ve(131850),s.add(new Ma(6328512,2105392,.55)),s.fog=new Ml(131850,hf,df);const e=new di(16777215,1.1);return e.position.set(40,30,20),s.add(e),s}function jy(){return new Ot(qy,window.innerWidth/window.innerHeight,Yy,Ky)}const jl=Object.freeze({maxThrottleAccel:18,reverseThrottleAccel:12,maxSpeed:60,surfaceSpeed:1e3/3.6,surfaceBoostSpeed:2e3/3.6,yawRate:1.4,pitchRate:1.4,rollRate:2,arcadeDampingRate:.6,hackRadius:8}),sn={...jl};function Jy(){Object.assign(sn,jl)}const Zy=15659509,Qy=8161430,eM=1259630,tM=3108832,nM=16106818,ff=4828159;function pf(s){const e=new Hr;s==="stripe"?(e.moveTo(.15,.34),e.lineTo(.7,.13),e.lineTo(.7,.02),e.lineTo(.15,.17)):(e.moveTo(.15,.17),e.lineTo(.7,.02),e.lineTo(.7,-.32),e.lineTo(.15,-.48)),e.closePath();const t=new $s(e,{depth:.045,bevelEnabled:!1});return t.rotateX(Math.PI/2),t.translate(0,.0225,0),t}function iM(){const s=new Hr;s.moveTo(.26,.02),s.lineTo(-.06,.48),s.lineTo(-.38,.12),s.lineTo(-.34,-.12),s.lineTo(-.08,-.32),s.closePath();const e=new $s(s,{depth:.05,bevelEnabled:!1});return e.rotateY(-Math.PI/2),e.translate(.025,0,0),e}function sM(s,e){const t=new Hr;t.moveTo(0,0),t.lineTo(-.06,e),t.lineTo(-.46,0),t.closePath();const n=new $s(t,{depth:.035,bevelEnabled:!1});return n.rotateY(-Math.PI/2),n.translate(.0175,0,0),n}function rM(){const s=new at,e=new Je({color:Zy,roughness:.42,metalness:.45,emissive:790550,side:qt}),t=new Je({color:Qy,roughness:.6,metalness:.5,emissive:329740,side:qt}),n=new Je({color:eM,roughness:.08,metalness:.6,emissive:662586,side:qt}),i=new Je({color:tM,roughness:.35,metalness:.45,emissive:662602,side:qt}),r=new Je({color:nM,roughness:.3,metalness:.55,emissive:2759936,side:qt}),o=new Je({color:ff,roughness:.3,metalness:.2,emissive:ff,emissiveIntensity:1.4,side:qt}),a=new St(.22,.18,1.05,6);a.rotateX(Math.PI/2);const c=new re(a,e);c.scale.set(1.3,.7,1),c.position.z=-.05,s.add(c);const l=new un(.22,.92,6);l.rotateX(Math.PI/2);const u=new re(l,e);u.scale.set(1.3,.7,1),u.position.z=.935,s.add(u);const h=new re(new Gt(.42,.09,.92),t);h.position.set(0,-.16,-.05),s.add(h);const d=new re(new Ze(.19,18,12),n);d.scale.set(.86,.6,1.7),d.position.set(0,.13,.22),s.add(d);const f=new re(sM(.46,.36),e);f.position.set(0,.12,-.2),s.add(f);const g=new re(new Gt(.04,.08,.13),r);g.position.set(0,.47,-.29),s.add(g);for(const m of[1,-1]){const M=new at;M.add(new re(pf("main"),e)),M.add(new re(pf("stripe"),i));const y=new re(iM(),e);y.position.set(.69,0,-.08),M.add(y);const v=new re(new Gt(.06,.5,.05),i);v.position.set(.69,.08,.12),v.rotation.x=-.5,M.add(v);const C=new St(.028,.04,.56,10);C.rotateX(Math.PI/2);const A=new re(C,t);A.position.set(.69,0,.3),M.add(A);const T=new re(new St(.03,.02,.15,10),r);T.rotation.x=Math.PI/2,T.position.set(.69,0,.62),M.add(T);const E=new re(new Gt(.16,.13,.4),o);E.position.set(.28,-.02,-.28),M.add(E),M.position.set(m*.16,0,-.05),m===-1&&(M.scale.x=-1),M.rotation.z=m*.14,s.add(M)}const x=new nn({color:9425151,transparent:!0,opacity:.85,blending:ni,depthWrite:!1}),p=[];for(const m of[-.12,.12]){const M=new St(.12,.095,.36,8);M.rotateX(Math.PI/2);const y=new re(M,t);y.position.set(m,-.03,-.66),s.add(y);const v=new St(.082,.082,.07,8);v.rotateX(Math.PI/2);const C=new re(v,o);C.position.set(m,-.03,-.82),s.add(C);const A=new un(.08,.38,14);A.rotateX(-Math.PI/2);const T=new re(A,x);T.position.set(m,-.03,-1.04),T.visible=!1,p.push(T),s.add(T)}return{mesh:s,velocity:new U,arcadeDamping:!1,glows:p,glowMat:x,flame:0,braking:!0}}const Jl=new U,mf=new Kt,gf=new U,oM=.25;function aM(s,e,t){Zl(s.mesh.quaternion,Jl.set(1,0,0),e.pitch*sn.pitchRate*t),Zl(s.mesh.quaternion,Jl.set(0,1,0),e.yaw*sn.yawRate*t),Zl(s.mesh.quaternion,Jl.set(0,0,1),e.roll*sn.rollRate*t),s.mesh.quaternion.normalize();const n=e.throttle>=oM;if(cM(s,n?e.throttle:0,t),!n){s.velocity.set(0,0,0),s.braking=!0;return}s.braking=!1,gf.set(0,0,1).applyQuaternion(s.mesh.quaternion);const i=s.speedLimit||sn.maxSpeed,r=e.throttle*sn.maxThrottleAccel*Math.max(1,i/jl.maxSpeed);if(s.velocity.addScaledVector(gf,r*t),s.arcadeDamping){const o=Math.exp(-sn.arcadeDampingRate*t);s.velocity.multiplyScalar(o)}s.velocity.lengthSq()>i*i&&s.velocity.setLength(i),s.mesh.position.addScaledVector(s.velocity,t)}function cM(s,e,t){const n=e>0?e:0,i=n>s.flame?18:11;s.flame+=(n-s.flame)*Math.min(1,i*t),s.flame<.002&&(s.flame=0);const r=s.flame>0,o=r?.85+.15*Math.sin(performance.now()*.05):1;s.glowMat.opacity=.85*s.flame*o;for(const a of s.glows)a.visible=r,a.scale.set(s.flame,s.flame,(.4+s.flame)*o)}function Zl(s,e,t){t!==0&&(mf.setFromAxisAngle(e,t),s.multiply(mf))}const Ql=12e3,eu=1200;function _f(){const s=new Float32Array(Ql*3),e=new Float32Array(Ql*3);for(let r=0;r<Ql;r++){const o=Math.random(),a=Math.random(),c=2*Math.PI*o,l=Math.acos(2*a-1),u=Math.sin(l),h=eu*u*Math.cos(c),d=eu*u*Math.sin(c),f=eu*Math.cos(l);s[r*3+0]=h,s[r*3+1]=d,s[r*3+2]=f;const g=.85+Math.random()*.15,x=Math.random()*.1;e[r*3+0]=g-x,e[r*3+1]=g-x*.5,e[r*3+2]=g}const t=new Ct;t.setAttribute("position",new Rt(s,3)),t.setAttribute("color",new Rt(e,3));const n=new ha({size:1.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1}),i=new Il(t,n);return i.frustumCulled=!1,i}function xf(s,e){s.position.copy(e.position)}const tu=250,jr={zNear:80,zFar:480,xHalf:70,yHalf:45},lM=1.2,uM=4.5,hM=.4;function Nn(s,e){return s+Math.random()*(e-s)}function dM(){return Math.random()<.5?-1:1}function fM(){const s=new Hl(1,0),e=new Je({color:9074021,roughness:.95,metalness:.05,flatShading:!0}),t=new Bd(s,e,tu);t.frustumCulled=!1;const n=[],i=new $e,r=new Kt,o=new U,a=new U;for(let l=0;l<tu;l++){const u=Nn(lM,uM);a.set(Nn(-70,jr.xHalf),Nn(-45,jr.yHalf),Nn(jr.zNear,jr.zFar)),o.setScalar(u),r.setFromEuler(new $t(Nn(0,Math.PI*2),Nn(0,Math.PI*2),Nn(0,Math.PI*2))),i.compose(a,r,o),t.setMatrixAt(l,i),n.push({position:a.clone(),radius:u*1.05,spinAxis:new U(Nn(-1,1),Nn(-1,1),Nn(-1,1)).normalize(),spinRate:Nn(.05,hM)*dM(),rotation:r.clone()})}t.instanceMatrix.needsUpdate=!0;function c(l){const u=new Kt;for(let h=0;h<tu;h++){const d=n[h];u.setFromAxisAngle(d.spinAxis,d.spinRate*l),d.rotation.premultiply(u),o.setScalar(d.radius/1.05),i.compose(d.position,d.rotation,o),t.setMatrixAt(h,i)}t.instanceMatrix.needsUpdate=!0}return{mesh:t,instances:n,update:c,volume:{...jr}}}const vf=new U(0,0,700),nu=60;function pM(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#c97648"),i.addColorStop(.5,"#b15a30"),i.addColorStop(1,"#7a3a1c"),n.fillStyle=i,n.fillRect(0,0,1024,512);for(let o=0;o<320;o++){const a=Math.random()*1024,c=Math.random()*512,l=8+Math.random()*80,u=.05+Math.random()*.18,h=Math.random()<.65;n.beginPath(),n.fillStyle=h?`rgba(70, 30, 15, ${u})`:`rgba(240, 180, 130, ${u})`,n.arc(a,c,l,0,Math.PI*2),n.fill()}for(const o of[0,512]){const a=n.createRadialGradient(512,o,0,512,o,179.2);a.addColorStop(0,"rgba(230, 240, 245, 0.85)"),a.addColorStop(1,"rgba(230, 240, 245, 0)"),n.fillStyle=a,n.fillRect(0,0,1024,512)}const r=new ts(t);return r.colorSpace=Et,r}function mM(){const s=new Ze(nu,64,32),e=new Je({map:pM(),roughness:.95,metalness:0}),t=new re(s,e);t.position.copy(vf);const n=.02;function i(r){t.rotation.y+=n*r}return{mesh:t,update:i}}const Jr=new U(-90,25,-330),Zr=112,Yn=2048,jt=1024,gM=1.015,_M=1.035,yf=.03,xM=.042,vM=[[[-168,65],[-150,61],[-130,54],[-124,40],[-117,32],[-105,22],[-97,16],[-83,9],[-78,19],[-81,26],[-70,42],[-60,47],[-55,52],[-64,60],[-80,70],[-95,69],[-125,70],[-155,71]],[[-80,8],[-70,11],[-60,8],[-50,0],[-35,-5],[-38,-15],[-48,-25],[-58,-35],[-63,-42],[-73,-52],[-75,-47],[-71,-33],[-71,-18],[-79,-6],[-80,2]],[[-17,15],[-10,25],[0,32],[10,34],[25,32],[35,30],[43,12],[51,12],[42,-2],[40,-15],[35,-25],[25,-34],[18,-33],[12,-18],[9,-2],[5,5],[-8,5]],[[-9,37],[0,40],[12,45],[24,40],[30,36],[36,37],[45,40],[50,30],[57,25],[68,24],[77,8],[81,16],[89,22],[95,16],[100,13],[106,10],[110,20],[120,32],[122,40],[130,43],[136,50],[142,54],[160,60],[170,66],[178,68],[168,72],[140,75],[110,76],[90,76],[70,73],[58,70],[48,68],[38,66],[30,70],[24,66],[17,62],[11,58],[4,57],[-2,51],[0,47],[-5,43]],[[113,-22],[122,-18],[130,-12],[137,-12],[142,-11],[147,-19],[153,-25],[150,-35],[145,-38],[137,-35],[129,-32],[118,-34],[114,-28]],[[-45,60],[-30,68],[-24,75],[-35,82],[-55,82],[-60,75],[-55,65]]],yM=[[-4,54,4],[138,37,4],[47,-20,5],[174,-41,4],[110,-3,6],[102,-2,5],[122,12,4],[-19,65,3],[80,8,2.5],[-78,21,3]],MM=[[10,22,18],[30,25,14],[45,22,12],[65,28,10],[95,40,12],[132,-25,14],[18,-22,8],[-110,32,8],[-68,-25,6]];function Sa(s,e){return{x:(s+180)/360*Yn,y:(90-e)/180*jt}}function Mf(s){return s/180*jt}function SM(s,e){const t=e.map(([o,a])=>Sa(o,a)),n=t.length,i=(o,a)=>({x:(o.x+a.x)/2,y:(o.y+a.y)/2}),r=i(t[n-1],t[0]);s.moveTo(r.x,r.y);for(let o=0;o<n;o++){const a=t[o],c=i(t[o],t[(o+1)%n]);s.quadraticCurveTo(a.x,a.y,c.x,c.y)}s.closePath()}function ba(s){for(const e of vM)SM(s,e);for(const[e,t,n]of yM){const{x:i,y:r}=Sa(e,t),o=Mf(n);s.moveTo(i+o,r),s.arc(i,r,o,0,Math.PI*2)}}function iu(s,e,t,n,i,r,o=1,a=1){s.save(),s.translate(e,t),s.scale(o,a);const c=s.createRadialGradient(0,0,0,0,0,n);c.addColorStop(0,`rgba(${i}, ${r})`),c.addColorStop(.55,`rgba(${i}, ${r*.55})`),c.addColorStop(1,`rgba(${i}, 0)`),s.fillStyle=c,s.beginPath(),s.arc(0,0,n,0,Math.PI*2),s.fill(),s.restore()}function Sf(){const s=document.createElement("canvas");return s.width=Yn,s.height=jt,s.getContext("2d")}function bM(s){const e=new ts(s.canvas);return e.colorSpace=Et,e}function wM(){const s=Sf(),e=s.createLinearGradient(0,0,0,jt);e.addColorStop(0,"#0a2c50"),e.addColorStop(.35,"#1259a0"),e.addColorStop(.5,"#1a72bd"),e.addColorStop(.65,"#1259a0"),e.addColorStop(1,"#0a2c50"),s.fillStyle=e,s.fillRect(0,0,Yn,jt);for(let o=0;o<700;o++){const a=Math.random()*Yn,c=Math.random()*jt,l=20+Math.random()*110,u=Math.random()<.55;iu(s,a,c,l,u?"6, 28, 58":"70, 165, 215",(u?.1:.07)*(.4+Math.random()*.6),1.6,.7)}const t=[{width:52,color:"rgba(30, 105, 165, 0.18)"},{width:38,color:"rgba(45, 130, 190, 0.20)"},{width:26,color:"rgba(65, 160, 205, 0.22)"},{width:14,color:"rgba(95, 190, 220, 0.25)"}];s.lineJoin="round",s.lineCap="round",s.beginPath(),ba(s);for(const o of t)s.strokeStyle=o.color,s.lineWidth=o.width,s.stroke();s.fillStyle="#3f7a3a",s.beginPath(),ba(s),s.fill(),s.save(),s.beginPath(),ba(s),s.clip();const n=s.createLinearGradient(0,0,0,jt);n.addColorStop(0,"rgba(190, 205, 200, 0.55)"),n.addColorStop(.22,"rgba(60, 90, 60, 0.45)"),n.addColorStop(.5,"rgba(30, 85, 35, 0.5)"),n.addColorStop(.78,"rgba(70, 100, 55, 0.35)"),n.addColorStop(1,"rgba(200, 215, 215, 0.6)"),s.fillStyle=n,s.fillRect(0,0,Yn,jt);for(const[o,a,c]of MM){const{x:l,y:u}=Sa(o,a),h=Mf(c),d=s.createRadialGradient(l,u,0,l,u,h);d.addColorStop(0,"rgba(200, 168, 105, 0.85)"),d.addColorStop(.6,"rgba(190, 158, 100, 0.55)"),d.addColorStop(1,"rgba(180, 150, 95, 0)"),s.fillStyle=d,s.beginPath(),s.arc(l,u,h,0,Math.PI*2),s.fill()}for(let o=0;o<1400;o++){const a=Math.random()*Yn,c=Math.random()*jt,l=5+Math.random()*30,u=Math.random()<.5;iu(s,a,c,l,u?"25, 52, 25":"155, 148, 108",.06+Math.random()*.14,1+Math.random(),.8)}for(let o=0;o<90;o++){const a=Math.random()*Yn,c=Math.random()*jt,l=40+Math.random()*160,u=(Math.random()-.5)*Math.PI,h=Math.cos(u)*l,d=Math.sin(u)*l*.6;s.beginPath(),s.moveTo(a,c),s.quadraticCurveTo(a+h*.5,c+d*.5-18,a+h,c+d),s.strokeStyle="rgba(48, 42, 32, 0.30)",s.lineWidth=6+Math.random()*8,s.stroke(),s.beginPath(),s.moveTo(a,c-5),s.quadraticCurveTo(a+h*.5,c+d*.5-23,a+h,c+d-5),s.strokeStyle="rgba(200, 195, 175, 0.18)",s.lineWidth=3,s.stroke()}s.beginPath(),ba(s),s.strokeStyle="rgba(214, 196, 142, 0.28)",s.lineWidth=14,s.stroke(),s.strokeStyle="rgba(224, 208, 158, 0.30)",s.lineWidth=6,s.stroke(),s.restore();const i=s.createLinearGradient(0,jt*.86,0,jt);i.addColorStop(0,"rgba(238, 246, 252, 0)"),i.addColorStop(.45,"rgba(238, 246, 252, 0.9)"),i.addColorStop(1,"rgba(255, 255, 255, 1)"),s.fillStyle=i,s.fillRect(0,jt*.86,Yn,jt*.14);const r=s.createLinearGradient(0,0,0,jt*.1);return r.addColorStop(0,"rgba(240, 248, 255, 0.95)"),r.addColorStop(1,"rgba(240, 248, 255, 0)"),s.fillStyle=r,s.fillRect(0,0,Yn,jt*.1),bM(s)}function EM(){const s=Sf();s.clearRect(0,0,Yn,jt);function e(i){const r=Math.exp(-((i/12)**2)),o=Math.exp(-(((i-55)/16)**2)),a=Math.exp(-(((i+55)/16)**2));return .25+.75*Math.max(r,Math.max(o,a))}const t=600;for(let i=0;i<t;i++){const r=Math.random()*360-180,o=Math.random()*170-85;if(Math.random()>e(o))continue;const{x:a,y:c}=Sa(r,o),l=8+Math.floor(Math.random()*12),u=16+Math.random()*50;for(let h=0;h<l;h++){const d=a+(Math.random()-.5)*u*2.6,f=c+(Math.random()-.5)*u*.7,g=5+Math.random()*14;iu(s,d,f,g,"255, 255, 255",.18+Math.random()*.28,2.2+Math.random(),.85)}}const n=new ts(s.canvas);return n.colorSpace=Et,n}function AM(){const s=new Ze(Zr,96,48),e=wM();e.anisotropy=8;const t=new Je({map:e,roughness:.9,metalness:0,emissive:661030}),n=new re(s,t);n.position.copy(Jr),n.rotation.z=Wi.degToRad(23.4);const i=new re(new Ze(Zr*gM,96,48),new Je({map:EM(),transparent:!0,opacity:.85,depthWrite:!1,roughness:1,metalness:0}));n.add(i);const r=new re(new Ze(Zr*_M,64,32),new nn({color:6269183,transparent:!0,opacity:.22,blending:ni,side:Xt,depthWrite:!1}));n.add(r);function o(a){n.rotation.y+=yf*a,i.rotation.y+=(xM-yf)*a}return{mesh:n,clouds:i,atmosphere:r,update:o}}const Qr=256,TM=new U(0,0,-2e3),RM=350;function CM(){const s=document.createElement("canvas");s.width=Qr,s.height=Qr;const e=s.getContext("2d"),t=Qr/2,n=e.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"rgba(255, 245, 220, 1)"),n.addColorStop(.08,"rgba(255, 230, 180, 0.95)"),n.addColorStop(.25,"rgba(255, 200, 130, 0.45)"),n.addColorStop(.55,"rgba(255, 170, 100, 0.15)"),n.addColorStop(1,"rgba(255, 150, 90, 0)"),e.fillStyle=n,e.fillRect(0,0,Qr,Qr);const i=new ts(s);return i.colorSpace=Et,i}function PM(){const s=CM(),e=new Sl({map:s,depthWrite:!1,transparent:!0,blending:ni}),t=new Td(e);t.scale.setScalar(RM);function n(i){t.position.copy(i.position).add(TM)}return{sprite:t,update:n}}const IM=["Sojourner","Spirit","Opportunity","Curiosity","Perseverance","Zhurong"],LM=nu+18,NM=nu+60,DM=60,bf=8028296,UM=5431551,OM=2106408,FM=1060936;function wa(s,e){return s+Math.random()*(e-s)}function BM(){const s=new at,e=new Je({color:bf,roughness:.7,metalness:.3,emissive:0}),t=new re(new Gt(2.2,.7,1.4),e);t.position.y=.45,s.add(t);const n=new re(new Gt(1.8,.1,1.1),new Je({color:FM,roughness:.4,metalness:.8,emissive:332832}));n.position.y=.85,s.add(n);const i=new St(.32,.32,.2,12);i.rotateZ(Math.PI/2);const r=new Je({color:OM,roughness:.95,metalness:.1}),o=[-.85,.85],a=[-.55,.55];for(const u of o)for(const h of a){const d=new re(i,r);d.position.set(u,.1,h),s.add(d)}const c=new re(new St(.04,.04,.8,6),new Je({color:11184810,roughness:.6,metalness:.5}));c.position.set(.6,1.2,0),s.add(c);const l=new re(new Ze(.1,8,6),new Je({color:16733525,emissive:4456448}));return l.position.set(.6,1.65,0),s.add(l),{group:s,bodyMat:e}}function kM(){const s=Math.random(),e=Math.random(),t=2*Math.PI*s,n=Math.acos(2*e-1),i=wa(LM,NM),r=Math.sin(n);return new U(i*r*Math.cos(t),i*r*Math.sin(t),i*Math.cos(n)).add(vf)}function zM(){const s=[];for(const i of IM){const{group:r,bodyMat:o}=BM(),a=kM();r.position.copy(a),r.rotation.set(wa(0,Math.PI*2),wa(0,Math.PI*2),wa(0,Math.PI*2)),s.push({name:i,mesh:r,bodyMat:o,position:a,fixed:!1,repairProgress:0,creditValue:DM})}function e(i){for(const r of s)r.mesh.rotation.y+=.25*i,r.mesh.rotation.x+=.08*i}function t(i){i.fixed=!0,i.repairProgress=1,i.bodyMat.color.setHex(UM),i.bodyMat.emissive.setHex(1060928)}function n(){for(const i of s)i.fixed=!1,i.repairProgress=0,i.bodyMat.color.setHex(bf),i.bodyMat.emissive.setHex(0)}return{rovers:s,update:e,markFixed:t,reset:n}}const Ea=32,su=.9,HM=6,GM=.18;function VM(){const s=new Float32Array(Ea*3),e=new Float32Array(Ea*3),t=new Ct;t.setAttribute("position",new Rt(s,3));const n=new ha({color:10149887,size:GM,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ni}),i=new Il(t,n);i.visible=!1;let r=su;function o(c){r=0;for(let l=0;l<Ea;l++){s[l*3+0]=c.x,s[l*3+1]=c.y,s[l*3+2]=c.z;const u=Math.random(),h=Math.random(),d=2*Math.PI*u,f=Math.acos(2*h-1),g=Math.sin(f),x=(.4+Math.random()*.6)*HM;e[l*3+0]=x*g*Math.cos(d),e[l*3+1]=x*g*Math.sin(d),e[l*3+2]=x*Math.cos(f)}t.attributes.position.needsUpdate=!0,i.visible=!0}function a(c){if(r>=su){i.visible=!1;return}r+=c;const l=Math.min(1,r/su),u=Math.pow(.05,c);for(let h=0;h<Ea;h++)s[h*3+0]+=e[h*3+0]*c,s[h*3+1]+=e[h*3+1]*c,s[h*3+2]+=e[h*3+2]*c,e[h*3+0]*=u,e[h*3+1]*=u,e[h*3+2]*=u;t.attributes.position.needsUpdate=!0,n.opacity=1-l}return{points:i,fire:o,update:a}}const wf=.7,ru=new U,nr=new U;function WM(s,e){let t=0;for(const n of e){ru.subVectors(s.position,n.position);const i=wf+n.radius,r=ru.lengthSq();if(r>=i*i)continue;if(r<1e-8)nr.set(0,1,0),s.position.addScaledVector(nr,i);else{const a=Math.sqrt(r);nr.copy(ru).divideScalar(a);const c=i-a;s.position.addScaledVector(nr,c)}const o=s.velocity.dot(nr);o<0&&s.velocity.addScaledVector(nr,-1.55*o),t+=1}return t}const XM=Object.freeze(Object.defineProperty({__proto__:null,SHIP_RADIUS:wf,resolveAsteroidCollisions:WM},Symbol.toStringTag,{value:"Module"})),Ii={throttleUp:["KeyW"],throttleDown:["KeyS"],yawLeft:["KeyA"],yawRight:["KeyD"],pitchUp:["ArrowUp"],pitchDown:["ArrowDown"],rollLeft:["KeyQ"],rollRight:["KeyE"]};function qM(){const s=new Set,e=new Set;function t(o){s.has(o.code)||e.add(o.code),s.add(o.code)}function n(o){s.delete(o.code)}window.addEventListener("keydown",t),window.addEventListener("keyup",n);function i(o){for(const a of o)if(s.has(a))return!0;return!1}function r(o){for(const a of o)if(e.has(a))return!0;return!1}return{isDown:o=>s.has(o),sample(){const o=(i(Ii.throttleUp)?1:0)-(i(Ii.throttleDown)?1:0),a=(i(Ii.yawLeft)?1:0)-(i(Ii.yawRight)?1:0),c=(i(Ii.pitchUp)?1:0)-(i(Ii.pitchDown)?1:0),l=(i(Ii.rollLeft)?1:0)-(i(Ii.rollRight)?1:0);return{throttle:o,yaw:a,pitch:c,roll:l}},consumeAnyJustPressed(){const o=e.size>0;return e.clear(),o},consumeJustPressed(o){if(r(o)){for(const a of o)e.delete(a);return!0}return!1},dispose(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}}}const YM=.15,Aa={throttle:{axisIndex:1,sign:-1},yaw:{axisIndex:0,sign:-1},lookX:{axisIndex:2,sign:1},lookY:{axisIndex:3,sign:-1}},Tt={A:0,B:1,X:2,Y:3,L1:4,R1:5,L2:6,R2:7,Select:8,Start:9,L3:10,R3:11,Up:12,Down:13,Left:14,Right:15};function KM(s,e=YM){const t=Math.abs(s);return t<e?0:Math.sign(s)*((t-e)/(1-e))}function Ta(s,e){return e.sign*KM(s.axes[e.axisIndex]??0)}function $M(){let s=!1,e=!1;const t=new Set,n=new Set,i=new Set;function r(){const c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(const l of c)if(l&&l.connected)return l;return null}const o=new Set;function a(c){if(n.clear(),o.clear(),!!c.buttons){for(let l=0;l<c.buttons.length;l++){const u=c.buttons[l];!!(u&&u.pressed)?(o.add(l),!t.has(l)&&!i.has(l)&&n.add(l)):i.delete(l)}for(const l of t)o.has(l)||t.delete(l);for(const l of o)t.add(l)}}return{get active(){return s},sample(){const c=r();if(!c)return s=!1,n.clear(),o.clear(),t.clear(),null;!e&&c.mapping!=="standard"&&(e=!0,console.info("[input/gamepad] Connected pad reports non-standard mapping",`(id="${c.id}"). Throttle/look may not be on axes 1/2/3 as expected.`,"See BACKLOG.md for the calibration follow-up.")),a(c);const l=Ta(c,Aa.yaw),u=Ta(c,Aa.throttle),h=Ta(c,Aa.lookX),d=Ta(c,Aa.lookY),f=(o.has(Tt.Up)?1:0)-(o.has(Tt.Down)?1:0),g=(o.has(Tt.Left)?1:0)-(o.has(Tt.Right)?1:0),x=(l||f||g||u||h||d)!==0,p=o.size>0;return s=x||p,{throttle:u,yaw:l,pitch:f,roll:g,lookX:h,lookY:d}},isButtonDown(c){return o.has(c)},consumeJustPressed(c){return n.has(c)?(n.delete(c),!0):!1},consumeAnyJustPressed(){return n.size===0?!1:(n.clear(),!0)},suppressCurrentlyPressed(){for(const c of o)i.add(c)}}}const Ef=.2,Af=1,Tf=25,jM=1e3,JM=35,ZM=35;function Rf(){return(screen.orientation?.angle??window.orientation??0)*Math.PI/180}function QM(){let s=!1,e=!1,t=!1,n=null,i=0,r={alpha:0,beta:0,gamma:0,n:0},o=null,a=0,c=0,l=0,u=null,h=null;function d(p){if(p.alpha==null&&p.beta==null&&p.gamma==null)return;o={alpha:p.alpha??0,beta:p.beta??0,gamma:p.gamma??0},a=typeof performance<"u"?performance.now():Date.now();const m=g(o);if(u!==null){const M=m.pitch-u,y=m.yaw-h;Math.abs(M)<Tf&&Math.abs(y)<Tf&&(c+=M,l+=y)}if(u=m.pitch,h=m.yaw,n==null){const M=a;i===0&&(i=M),r.alpha+=o.alpha,r.beta+=o.beta,r.gamma+=o.gamma,r.n+=1,M-i>=jM&&r.n>0&&(n={alpha:r.alpha/r.n,beta:r.beta/r.n,gamma:r.gamma/r.n})}}function f(){n=null,i=0,r={alpha:0,beta:0,gamma:0,n:0},u=null,h=null}function g(p){const m=Rf(),M=Math.cos(m),y=Math.sin(m);return{pitch:p.beta*M-p.gamma*y,yaw:p.beta*y+p.gamma*M}}function x(){s||(window.addEventListener("deviceorientation",d),screen.orientation?.addEventListener("change",f),window.addEventListener("orientationchange",f),s=!0)}return{get active(){return!s||o==null?!1:(typeof performance<"u"?performance.now():Date.now())-a<1e3},get calibrated(){return n!=null},async request(){if(t)return x(),e;t=!0;const p=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(p&&typeof p.requestPermission=="function"){try{e=await p.requestPermission()==="granted"}catch{e=!1}e&&x()}else e=!0,x();return e},consumeTurn(){if(!s||u===null)return{pitch:0,yaw:0};const p={pitch:c*Pf*Af,yaw:l*Pf*Af};return c=0,l=0,p},sample(){if(!o||!n)return null;const p=o.beta-n.beta,m=o.gamma-n.gamma,M=Rf(),y=Math.cos(M),v=Math.sin(M),C=p*y-m*v,A=p*v+m*y;let T=Cf(C/JM,-1,1),E=Cf(A/ZM,-1,1);return{pitchDelta:T*Ef,yawDelta:E*Ef}}}}function Cf(s,e,t){return s<e?e:s>t?t:s}const Pf=Math.PI/180,ou=typeof window<"u"&&"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0;function eS(){let s=!1;function e(t){t.pointerType!=="mouse"&&(s=!0)}return window.addEventListener("pointerdown",e,{passive:!0}),{consumeJustPressed(){const t=s;return s=!1,t},clear(){s=!1}}}function If(){return typeof window>"u"?!1:!!(window.__p5NativeHost===!0||window.webkit&&window.webkit.messageHandlers)}function ir(s){return s<-1?-1:s>1?1:s}function tS(){const s=qM(),e=$M(),t=QM(),n=eS();let i=["KB"];return{keyboard:s,gamepad:e,gyro:t,touch:n,isTouchDevice:ou,bridgeAvailable:If,async enableGyro(){return t.request()},sample(){const r=s.sample(),o=e.sample(),a=[];let c,l,u,h;o&&(o.throttle||o.yaw||o.pitch||o.roll)?(c=o.throttle,l=o.yaw,u=o.pitch,h=o.roll,a.push("PAD"),(r.throttle||r.yaw||r.pitch||r.roll)&&(c=ir(c+r.throttle),l=ir(l+r.yaw),u=ir(u+r.pitch),h=ir(h+r.roll),a.push("KB"))):(c=r.throttle,l=r.yaw,u=r.pitch,h=r.roll,(r.throttle||r.yaw||r.pitch||r.roll)&&a.push("KB"));const d=l,f=c,g=t.sample();g&&t.active&&(u=ir(u+g.pitchDelta),l=ir(l-g.yawDelta),a.push("GYRO"));let x=o?o.lookX:0,p=o?o.lookY:0;(x||p)&&!a.includes("PAD")&&a.push("PAD");const m=t.active?t.consumeTurn():{pitch:0,yaw:0},M=m.yaw,y=m.pitch;return(M||y)&&!a.includes("GYRO")&&a.push("GYRO"),a.length===0&&a.push("KB"),i=a,{throttle:c,yaw:l,pitch:u,roll:h,lookX:x,lookY:p,lookTurnX:M,lookTurnY:y,stickYaw:d,stickThrottle:f}},activeSources(){return i},consumeAnyJustPressed(){const r=s.consumeAnyJustPressed();e.sample();const o=e.consumeAnyJustPressed(),a=n.consumeJustPressed();return r||o||a}}}const Le={title:"Super Vexo and the Mystery of the System",pressAnyKey:"Press any button to start",tapToStart:"Tap to start",intro:{skip:"Press any button to skip",tapToSkip:"Tap to skip",beats:["Long ago, in the kingdom of Astra…","The kingdom lived in peace.","Until Lord Draxos came.","He kidnapped Princess Astra.","And vanished into deep space.",`The Scientists handed Vexo the Super Mega Tablet.

Can you save her?`]},surface:{town:"AN UNNAMED WORLD",street:"unknown ground",ground:{plain:"open plain",savanna:"dry grassland",forest:"forest",hills:"hill country",mountain:"bare mountain",snow:"snowfield",dunes:"sand sea",stone:"stone desert",salt:"salt pan",badlands:"badlands",mesa:"plateau country",beach:"shoreline",sea:"open water"},leaveHint:"Descend to land · climb to leave the atmosphere"},onFoot:{skip:"Press any button to skip",climbOut:"L / A — land and climb out",noRoom:"No room to climb out here — move the ship",board:"L / A — climb back in",controls:"W A S D / stick — walk · Shift / B — sprint"},map:{title:"THE WORLD",hint:"M / − — close · the whole continent, every inch of it",scale:"{km} × {kmZ} km · {m} m per pixel",building:"drawing the world… {pct}%"},gameOver:{title:"GAME OVER",ask:"Continue from your last save?",noSave:"You have no saved game. Start again?",yes:"YES — CONTINUE",no:"NO — TITLE SCREEN",hint:"← → to choose · Enter / A to take it"},inventory:{title:"GEAR",weapons:"Weapons",empty:"Nothing yet.",hint:"T / + — close · ← → or L / R — tabs · B / Esc — back",turnHint:"Drag, or A / D, to turn him",tablet:"Tablet",system:"System",save:"SAVE GAME",neverSaved:"Not saved yet.",savedJustNow:"Saved just now.",savedSecondsAgo:"Saved a few seconds ago.",savedMinutesAgo:"Saved {n} minutes ago.",saveFailed:"Couldn't save — this browser won't let the game store anything.",starterGun:"Sidearm",starterGunNote:"Equipped"},hud:{appName:"Tablet",velocity:"VEL",orientation:"ORI",fps:"FPS",dampingOn:"damping: ON",dampingOff:"damping: OFF",fastTravelButton:"FAST TRAVEL",fastTravelHint:"R1 / F",fastTravelActive:"warping…",rovers:"ROVERS",credits:"CRED",hackHint:"Hold L1 / H to hack",upgradeButton:"UPGRADES",upgradeHint:"Y / U",upgradeBought:"OWNED",upgradeBuy:"BUY",upgradeClose:"Close",screenHint:"Stick / swipe = scroll · B / Esc = back to Tablet",missionCompleteTitle:"MISSION COMPLETE",missionCompleteBody:"All rovers repaired. Earth Command transfers a bonus to your account.",missionCompleteCta:"Open Upgrades",missionCompleteClose:"Continue Flying",resetHint:"L3 / R = reset",tabletHint:"T / + — GEAR · M / − — MAP"}};function nS(){const s=document.createElement("div");s.id="tablet",s.innerHTML=`
    <div class="tablet-frame">
      <div class="tablet-bezel">
        <div class="tablet-screen">
          <div class="tablet-titlebar">
            <span class="tablet-app">${Le.hud.appName}</span>
            <span class="tablet-source" data-source>KB</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Le.hud.velocity}</span>
            <span class="tablet-value" data-velocity>0.0</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Le.hud.orientation}</span>
            <span class="tablet-value" data-orientation>0°,0°,0°</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Le.hud.fps}</span>
            <span class="tablet-value" data-fps>--</span>
          </div>
          <div class="tablet-row tablet-row--small">
            <span class="tablet-value" data-damping>${Le.hud.dampingOff}</span>
          </div>

          <!-- Mission panel: rover progress + credits -->
          <div class="tablet-mission" data-mission hidden>
            <div class="tablet-row">
              <span class="tablet-label">${Le.hud.rovers}</span>
              <span class="tablet-value" data-rovers>0/0</span>
            </div>
            <div class="tablet-row">
              <span class="tablet-label">${Le.hud.credits}</span>
              <span class="tablet-value" data-credits>0</span>
            </div>
            <!-- Hack prompt: only visible when a rover is in range -->
            <div class="tablet-hack" data-hack hidden>
              <div class="tablet-hack__name" data-hack-name>—</div>
              <div class="tablet-hack__hint">${Le.hud.hackHint}</div>
              <div class="tablet-hack__bar"><div class="tablet-hack__fill" data-hack-fill></div></div>
            </div>
          </div>

          <button class="tablet-app-btn" data-fast-travel type="button">
            <span class="tablet-app-btn__icon">⤴</span>
            <span class="tablet-app-btn__label">${Le.hud.fastTravelButton}</span>
            <span class="tablet-app-btn__key">${Le.hud.fastTravelHint}</span>
          </button>
          <button class="tablet-app-btn" data-upgrades type="button">
            <span class="tablet-app-btn__icon">⚙</span>
            <span class="tablet-app-btn__label">${Le.hud.upgradeButton}</span>
            <span class="tablet-app-btn__key">${Le.hud.upgradeHint}</span>
          </button>
          <div class="tablet-row tablet-row--hint" data-reset-hint hidden>
            ${Le.hud.resetHint}
          </div>
        </div>
      </div>
    </div>
  `,s.style.display="none",document.body.appendChild(s);const e=document.createElement("div");e.id="tablet-hint",e.textContent=Le.hud.tabletHint,e.hidden=!0,document.body.appendChild(e);const t=s.querySelector("[data-velocity]"),n=s.querySelector("[data-orientation]"),i=s.querySelector("[data-fps]"),r=s.querySelector("[data-source]"),o=s.querySelector("[data-damping]"),a=s.querySelector("[data-fast-travel]"),c=s.querySelector("[data-upgrades]"),l=s.querySelector("[data-reset-hint]"),u=s.querySelector("[data-mission]"),h=s.querySelector("[data-rovers]"),d=s.querySelector("[data-credits]"),f=s.querySelector("[data-hack]"),g=s.querySelector("[data-hack-name]"),x=s.querySelector("[data-hack-fill]");let p=0,m=0,M=0;return{element:s,update({velocity:y,eulerDeg:v,dt:C,sources:A,dampingOn:T,inKph:E=!1}){t.textContent=E?`${Math.round(y*3.6)} km/h`:y.toFixed(1),n.textContent=`${v.x.toFixed(0)}°, ${v.y.toFixed(0)}°, ${v.z.toFixed(0)}°`,p+=1,m+=C,m>=.5&&(M=Math.round(p/m),p=0,m=0,i.textContent=String(M)),r.textContent=A.join("+"),o.textContent=T?Le.hud.dampingOn:Le.hud.dampingOff},show(){e.hidden=!0},hide(){e.hidden=!1},toggle(){return e.hidden=!e.hidden,!e.hidden},setHintVisible(y){e.hidden=!y},showFastTravel(){a.classList.add("tablet-app-btn--visible")},showUpgrades(){c.classList.add("tablet-app-btn--visible")},showResetHint(){l.hidden=!1},setMissionVisible(y){u.hidden=!y},updateMission({remaining:y,total:v,credits:C}){h.textContent=`${v-y}/${v}`,d.textContent=String(C)},updateHack({name:y,progress:v}){if(!y){f.hidden=!0;return}f.hidden=!1,g.textContent=y,x.style.width=`${Math.max(0,Math.min(1,v))*100}%`},onUpgradesClick(y){c.addEventListener("click",y)},setFastTravelActive(y){a.classList.toggle("tablet-app-btn--active",y);const v=a.querySelector(".tablet-app-btn__label");v.textContent=y?Le.hud.fastTravelActive:Le.hud.fastTravelButton,a.disabled=y},onFastTravel(y){a.addEventListener("click",y)}}}function iS(){const s=document.createElement("div");s.id="title-card";const e="2026-08-31 18:55";s.innerHTML=`
    <div class="title-card__inner">
      <h1 class="title-card__title">${Le.title}</h1>
      <p class="title-card__prompt">${ou?Le.tapToStart:Le.pressAnyKey}</p>
      <p class="title-card__build">build ${e}</p>
    </div>
  `,document.body.appendChild(s);let t=null;return{hide(){s.style.opacity="0"},show(){t&&(clearTimeout(t),t=null),s.classList.remove("title-card--hidden"),s.style.opacity="",s.isConnected||document.body.appendChild(s)},dismiss(){s.classList.add("title-card--hidden"),t=setTimeout(()=>{s.remove(),t=null},500)}}}const sS=1.2,Lf=540;function rS(s){const e=document.createElement("div");e.id="warp-flash",s.appendChild(e);let t=!1,n=0,i=!1,r=null,o=!1,a=null;function c(u,h={}){return t?!1:(t=!0,n=0,i=!1,r=h.onDone??null,o=!0,a=u,u.velocity.set(0,0,0),!0)}function l(u){if(!t)return;n+=u;const d=Math.max(0,Math.min(1,n/sS));let f;if(d<.4?f=d/.4:d<.6?f=1:f=1-(d-.6)/.4,e.style.opacity=String(Math.max(0,Math.min(1,f))),!i&&d>=.5&&a&&(a.mesh.position.set(0,0,Lf),a.velocity.set(0,0,0),a.mesh.quaternion.identity(),i=!0),d>=1){t=!1,o=!1,e.style.opacity="0";const g=r;r=null,a=null,g&&g()}}return{begin:c,update:l,get active(){return t},get suppressInput(){return o},targetZ:Lf}}const oS=""+new URL("invincibility_theme-K-djvXIp.mp3",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,aS=""+new URL("game_over-CW0fu00F.m4a",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,Nf=80,cS=18,lS=.06,uS=2.5,Df=280,hS=520,dS=.18,fS=.18,Uf=.45,pS=.3,mS=.6;function gS(){let s=null,e=null,t=!1,n=null,i=0,r=!1,o=null,a=null,c=null,l=0;function u(){if(r)return!0;const v=window.AudioContext||window.webkitAudioContext;return v?(s=new v,o=s.createGain(),o.gain.value=1,o.connect(s.destination),a=_S(s,o),c=xS(s,o),r=!0,!0):!1}function h(v){r&&(l=Math.min(1,Math.abs(v)))}function d(v){t=v,v&&(e||(e=new Audio(oS),e.loop=!0,e.preload="auto",e.volume=0),e.paused&&(e.currentTime=0,e.play().catch(()=>{})))}function f(){n||(n=new Audio(aS),n.preload="auto"),n.loop=!1,n.volume=mS,n.currentTime=0,n.play().catch(()=>{})}function g(){n&&(n.pause(),n.currentTime=0)}function x(v){if(!e)return;const C=t?Uf:0,A=v/pS*Uf;i=C>i?Math.min(C,i+A):Math.max(C,i-A),e.volume=i,i===0&&!e.paused&&e.pause()}function p(v){if(x(v),!r)return;const C=1-Math.pow(2,-v/fS),A=c.gainNode.gain.value,T=l*dS,E=A+(T-A)*C;c.gainNode.gain.setValueAtTime(E,s.currentTime);const O=Df+l*hS;c.filter.frequency.setValueAtTime(O,s.currentTime)}function m(){if(g(),e&&(e.pause(),e=null,t=!1,i=0),!!r){try{a.osc1.stop(),a.osc2.stop()}catch{}try{c.source.stop()}catch{}s.close(),r=!1,s=null}}function M({fromHz:v=300,toHz:C=900,durationS:A=.35,peakGain:T=.18}={}){if(!r)return;const E=s.currentTime,O=s.createOscillator();O.type="sine",O.frequency.setValueAtTime(v,E),O.frequency.exponentialRampToValueAtTime(C,E+A);const _=s.createGain();_.gain.setValueAtTime(0,E),_.gain.linearRampToValueAtTime(T,E+.03),_.gain.exponentialRampToValueAtTime(1e-4,E+A),O.connect(_),_.connect(o),O.start(E),O.stop(E+A+.05)}function y(){M({fromHz:440,toHz:660,durationS:.45,peakGain:.2}),setTimeout(()=>M({fromHz:660,toHz:990,durationS:.6,peakGain:.22}),200)}return{start:u,setSprinting:d,playGameOver:f,stopGameOver:g,update:p,setThrottle:h,chirp:M,fanfare:y,dispose:m,get running(){return r}}}function _S(s,e){const t=s.createOscillator(),n=s.createOscillator();t.type="triangle",n.type="triangle",t.frequency.value=Nf,n.detune.value=cS,n.frequency.value=Nf;const i=s.createBiquadFilter();i.type="lowpass",i.frequency.value=320,i.Q.value=.7;const r=s.createGain();return r.gain.value=lS,t.connect(i),n.connect(i),i.connect(r),r.connect(e),t.start(),n.start(),{osc1:t,osc2:n,filter:i,gain:r}}function xS(s,e){const t=s.sampleRate,n=s.createBuffer(1,t*uS,t),i=n.getChannelData(0);for(let c=0;c<i.length;c++)i[c]=Math.random()*2-1;const r=s.createBufferSource();r.buffer=n,r.loop=!0;const o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=Df,o.Q.value=1.2;const a=s.createGain();return a.gain.value=0,r.connect(o),o.connect(a),a.connect(e),r.start(),{source:r,filter:o,gainNode:a}}const vS=8,yS=2,MS=100,Ra={ACTIVE:"active",COMPLETE:"complete"};function SS(s){const{rovers:e,markFixed:t}=s;let n=0,i=Ra.ACTIVE,r=null,o=null,a=null,c=null;function l(m){a=m}function u(m){c=m}function h(){let m=0;for(const M of e)M.fixed||(m+=1);return m}function d(){return e.length}function f(m,M){if(M>vS)return null;let y=null,v=sn.hackRadius*sn.hackRadius;for(const C of e){if(C.fixed)continue;const A=C.position.x-m.x,T=C.position.y-m.y,E=C.position.z-m.z,O=A*A+T*T+E*E;O<v&&(v=O,y=C)}return y}function g({shipPos:m,shipSpeed:M,holdActive:y,dt:v}){if(r=f(m,M),i!==Ra.ACTIVE){o=null;return}if(y&&r){if(o!==r&&(o=r,o.repairProgress=0),o.repairProgress=Math.min(1,o.repairProgress+v/yS),o.repairProgress>=1&&!o.fixed){const C=o;t(C),n+=C.creditValue,c&&c(C),o=null,h()===0&&(i=Ra.COMPLETE,n+=MS,a&&a())}}else o&&(o.repairProgress=0,o=null)}function x(m){return m>n?!1:(n-=m,!0)}function p(){n=0,i=Ra.ACTIVE,r=null,o=null}return{get state(){return i},get credits(){return n},get inRange(){return r},get repairing(){return o},grantCredits(m){n=Math.max(0,Math.round(m))},remaining:h,totalRovers:d,update:g,spendCredits:x,setOnComplete:l,setOnRepaired:u,reset:p}}function bS(){const s=[{id:"throttle",label:"Boost Throttle",description:"Push the engines harder. +40% forward acceleration, +25% top speed.",cost:100,bought:!1,apply(){sn.maxThrottleAccel*=1.4,sn.maxSpeed*=1.25}},{id:"agility",label:"Sharper Turning",description:"Twitch-faster yaw and pitch. +35% on both rates.",cost:90,bought:!1,apply(){sn.yawRate*=1.35,sn.pitchRate*=1.35}},{id:"hackRange",label:"Long-Range Hack",description:"The Tablet locks on from further out. Hack radius +50%.",cost:80,bought:!1,apply(){sn.hackRadius*=1.5}}];function e(i,r){const o=s.find(a=>a.id===i);return!o||o.bought||!r.spendCredits(o.cost)?!1:(o.apply(),o.bought=!0,!0)}function t(i){const r=s.find(o=>o.id===i);return!r||r.bought?!1:(r.apply(),r.bought=!0,!0)}function n(){for(const i of s)i.bought=!1}return{upgrades:s,buy:e,buyFree:t,reset:n}}function wS({upgrades:s,mission:e,audio:t,onClose:n}){const i=document.createElement("div");i.id="mission-screens",i.innerHTML=`
    <div class="screen-overlay" id="screen-complete" data-screen="complete" hidden>
      <div class="screen-card">
        <h2 class="screen-card__title">${Le.hud.missionCompleteTitle}</h2>
        <p class="screen-card__body">${Le.hud.missionCompleteBody}</p>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-complete-credits>0</span></span>
        </div>
        <div class="screen-card__actions">
          <button class="screen-btn screen-btn--primary" data-action="open-upgrades">${Le.hud.missionCompleteCta}</button>
          <button class="screen-btn" data-action="close-complete">${Le.hud.missionCompleteClose}</button>
        </div>
      </div>
    </div>

    <div class="screen-overlay" id="screen-upgrades" data-screen="upgrades" hidden>
      <div class="screen-card screen-card--wide">
        <h2 class="screen-card__title">${Le.hud.upgradeButton}</h2>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-upgrades-credits>0</span></span>
        </div>
        <p class="screen-card__hint">${Le.hud.screenHint}</p>
        <ul class="upgrade-list" data-upgrade-list></ul>
        <div class="screen-card__actions">
          <button class="screen-btn" data-action="close-upgrades">${Le.hud.upgradeClose}</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const r=i.querySelector("#screen-complete"),o=i.querySelector("[data-complete-credits]"),a=i.querySelector("#screen-upgrades"),c=i.querySelector("[data-upgrades-credits]"),l=i.querySelector("[data-upgrade-list]");function u(){c.textContent=String(e.credits),l.innerHTML="";for(const m of s.upgrades){const M=document.createElement("li");M.className="upgrade-item"+(m.bought?" upgrade-item--bought":"");const y=!m.bought&&e.credits>=m.cost;M.innerHTML=`
        <div class="upgrade-item__head">
          <span class="upgrade-item__name">${m.label}</span>
          <span class="upgrade-item__cost">${m.cost} c</span>
        </div>
        <p class="upgrade-item__desc">${m.description}</p>
        <button class="screen-btn screen-btn--small" data-buy="${m.id}" ${m.bought||!y?"disabled":""}>
          ${m.bought?Le.hud.upgradeBought:Le.hud.upgradeBuy}
        </button>
      `,l.appendChild(M)}}function h(m){m==="complete"?(o.textContent=String(e.credits),r.hidden=!1):m==="upgrades"&&(u(),a.hidden=!1)}function d(m){m==="complete"?r.hidden=!0:m==="upgrades"&&(a.hidden=!0)}function f(){d("complete"),d("upgrades")}function g(){return!r.hidden||!a.hidden}function x(){return a.hidden?r.hidden?null:r.querySelector(".screen-card"):a.querySelector(".screen-card")}function p(m){const M=x();M&&(M.scrollTop+=m)}return i.addEventListener("click",m=>{const M=m.target;if(!(M instanceof Element))return;const y=M.getAttribute("data-action");if(y==="open-upgrades"){d("complete"),h("upgrades");return}if(y==="close-complete"){d("complete"),n?.();return}if(y==="close-upgrades"){d("upgrades"),n?.();return}const v=M.getAttribute("data-buy");v&&s.buy(v,e)&&(t&&t.chirp({fromHz:520,toHz:780,durationS:.25,peakGain:.18}),u())}),{show:h,hide:d,hideAll:f,isOpen:g,scrollBy:p}}const Of=40;function ES(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#0c3a66"),i.addColorStop(.5,"#1b6aa3"),i.addColorStop(1,"#0c3a66"),n.fillStyle=i,n.fillRect(0,0,1024,512);const r=[];for(let a=0;a<6;a++)r.push({x:Math.random()*1024,y:512*.25+Math.random()*512*.5,r:50+Math.random()*90});for(const a of r){const c=8+Math.floor(Math.random()*6);for(let l=0;l<c;l++){const u=(Math.random()-.5)*a.r*1.6,h=(Math.random()-.5)*a.r*1,d=18+Math.random()*45,f=Math.random()<.35;n.beginPath(),n.fillStyle=f?"rgba(30, 70, 30, 0.85)":"rgba(70, 130, 55, 0.9)",n.arc(a.x+u,a.y+h,d,0,Math.PI*2),n.fill()}}for(let a=0;a<60;a++){const c=Math.random()*1024,l=Math.random()*512,u=14+Math.random()*50;n.beginPath(),n.fillStyle=`rgba(245, 250, 255, ${.1+Math.random()*.12})`,n.arc(c,l,u,0,Math.PI*2),n.fill()}for(const a of[0,512]){const c=n.createRadialGradient(512,a,0,512,a,153.6);c.addColorStop(0,"rgba(240, 248, 255, 0.85)"),c.addColorStop(1,"rgba(240, 248, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,1024,512)}const o=new ts(t);return o.colorSpace=Et,o}function AS(){const s=new Ze(Of,64,32),e=new Je({map:ES(),roughness:.85,metalness:0,emissive:1296}),t=new re(s,e),n=new nn({color:6990591,transparent:!0,opacity:.18,blending:ni,side:Xt}),i=new re(new Ze(Of*1.05,64,32),n);t.add(i);const r=.05;function o(a){t.rotation.y+=r*a}return{mesh:t,update:o}}const Ff=14,Bf=4.5,TS=.9;function RS(){const s=new at,e=new Gl(1,0);e.scale(Bf,Bf,Ff*.5);const t=new Je({color:3807780,roughness:.45,metalness:.6,emissive:3149848,flatShading:!0}),n=new re(e,t);s.add(n);const i=new nn({color:16724016}),r=new re(new Ze(TS,12,8),i);r.position.set(0,0,Ff*.55),s.add(r);const o=document.createElement("canvas");o.width=o.height=128;{const h=o.getContext("2d"),d=64,f=h.createRadialGradient(d,d,0,d,d,d);f.addColorStop(0,"rgba(255, 60, 60, 1)"),f.addColorStop(.3,"rgba(255, 30, 30, 0.6)"),f.addColorStop(1,"rgba(255, 30, 30, 0)"),h.fillStyle=f,h.fillRect(0,0,128,128)}const a=new ts(o);a.colorSpace=Et;const c=new Td(new Sl({map:a,transparent:!0,blending:ni,depthWrite:!1}));c.position.copy(r.position),c.scale.setScalar(5.5),s.add(c);const l=new Gt(.35,1.4,6);l.translate(0,0,-1.5);const u=new Je({color:1837586,roughness:.6,metalness:.5,emissive:2099216,flatShading:!0});for(const h of[-1,1]){const d=new re(l,u);d.position.set(h*2.6,0,-2.5),d.rotation.z=h*.25,d.rotation.y=h*.2,s.add(d)}return{group:s,hull:n,core:r,halo:c}}const Ca=s=>s*s*(3-2*s),CS=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,au=[3.5,3,4,4,3.5,4.5];function PS({renderer:s}){const e=new Ir;e.background=new Ve(66055);const t=new Ot(50,window.innerWidth/window.innerHeight,.1,5e3);t.position.set(0,8,140),t.lookAt(0,0,0),e.add(new Ma(10141920,1052704,.7));const n=new di(16773848,1.1);n.position.set(50,30,80),e.add(n);const i=_f();e.add(i);const r=AS();e.add(r.mesh);const o=RS();o.group.position.set(200,30,30),o.group.rotation.y=-.6,e.add(o.group);const a=new nn({color:16732224,transparent:!0,opacity:0,blending:ni,depthWrite:!1,side:qt}),c=new re(new un(2,60,16,1,!0),a);c.rotation.x=Math.PI,e.add(c);const l=document.createElement("div");l.id="cinematic",l.innerHTML=`
    <div class="cinematic__skip" data-skip>${ou?Le.intro.tapToSkip:Le.intro.skip}</div>
    <div class="cinematic__text" data-text></div>
    <div class="cinematic__flash" data-flash></div>
  `,document.body.appendChild(l);const u=l.querySelector("[data-text]"),h=l.querySelector("[data-flash]");let d=0,f=0,g=0,x=!0,p=!0;function m(O,_,S){switch(O){case 0:{r.mesh.position.set(0,0,0),r.mesh.scale.setScalar(1+.02*Math.sin(g*.5)),o.group.position.x=200,c.material.opacity=0;break}case 1:{r.mesh.position.set(0,0,0),t.position.x=-10+20*CS(_),t.lookAt(0,0,0);break}case 2:{const P=140+-45*Ca(_);t.position.set(0,8,P),t.lookAt(0,0,0);const I=140,z=38;o.group.position.x=I+(z-I)*Ca(_),o.group.position.z=30-10*Ca(_),o.group.rotation.y=-.6-.4*Ca(_);break}case 3:{t.position.set(0,8,95),o.group.position.x=38,o.group.position.z=20,o.group.rotation.y=-1,c.material.opacity=.4+.35*Math.sin(g*12);const P=o.group.position,I=r.mesh.position;c.position.set((P.x+I.x)/2,(P.y+I.y)/2,(P.z+I.z)/2),c.lookAt(I),c.rotateX(Math.PI/2),t.position.x=Math.sin(g*30)*.4,t.position.y=8+Math.cos(g*27)*.3,t.position.z=95,t.lookAt(0,0,0);break}case 4:{o.group.position.x=38,o.group.position.z=20,t.position.set(0,8,95),t.lookAt(0,0,0),_<.5?(h.style.opacity=String(_*2*.95),c.material.opacity=.35*(1-_*2)):(o.group.visible=!1,r.mesh.visible=!1,c.material.opacity=0,h.style.opacity=String(Math.max(0,1-(_-.5)*2)));break}case 5:{h.style.opacity="0";break}}}function M(O){u.innerHTML=O.split(`
`).map(_=>`<p>${_}</p>`).join(""),u.classList.remove("cinematic__text--in"),u.offsetWidth,u.classList.add("cinematic__text--in")}function y(){d+=1,f=0,p=!0,d>=au.length&&v()}function v(){x&&(x=!1,l.remove(),e.traverse(O=>{O.geometry&&O.geometry.dispose();const _=Array.isArray(O.material)?O.material:O.material?[O.material]:[];for(const S of _)S.map&&S.map.dispose(),S.dispose()}))}function C(){v()}function A(O){if(!x)return;g+=O,f+=O,p&&(M(Le.intro.beats[d]),p=!1);const _=Math.min(1,f/au[d]);m(d,_),r.update(O),o.halo.material.opacity=.7+.25*Math.sin(g*4),xf(i,t),f>=au[d]&&y()}function T(){x&&s.render(e,t)}function E(O=window.innerWidth,_=window.innerHeight){t.aspect=O/_,t.updateProjectionMatrix()}return{update:A,render:T,skip:C,onResize:E,get active(){return x}}}function IS(){if(!(new URLSearchParams(window.location.search).get("debugPad")==="1"))return{update(){}};const e=document.createElement("div");e.id="debug-pad",Object.assign(e.style,{position:"fixed",top:"8px",left:"8px",zIndex:"9999",background:"rgba(0,0,0,0.78)",color:"#9af0a0",font:"11px ui-monospace, Menlo, Consolas, monospace",padding:"8px 10px",maxWidth:"min(92vw, 520px)",maxHeight:"60vh",overflow:"auto",border:"1px solid #3a3",borderRadius:"4px",whiteSpace:"pre-wrap",pointerEvents:"none",lineHeight:"1.35"}),document.body.appendChild(e);function t(){const n=If(),i=n?window.__p5NativeHost===!0?"__p5NativeHost=true":"webkit.messageHandlers":"(none — desktop / non-wrapper)",r=window.__nativeGamepadBridgeReady===!0,o=window.__nativeGamepadUpdateCount||0,a=window.__nativeGamepadLastRaw,c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[],l=c&&c[0];let u="(no pad)";if(l){const h=[];for(let d=0;d<l.buttons.length;d++)l.buttons[d]&&l.buttons[d].pressed&&h.push(d);u=`id=${JSON.stringify(l.id)}
mapping=${l.mapping}
axes=[${l.axes.map(d=>d.toFixed(2)).join(", ")}]
pressed buttons=[${h.join(", ")||"(none)"}]`}return["=== gamepad debug ===",`bridge available: ${n}  (${i})`,`bridge module ready: ${r}`,`__nativeGamepadUpdate calls: ${o}`,`last raw payload: ${a?JSON.stringify(a).slice(0,240):"(none yet)"}`,"","--- navigator.getGamepads()[0] ---",u].join(`
`)}return{update(){e.textContent=t()}}}const LS=[0,120,350,700],NS=2;function DS(s){const e=s.getBoundingClientRect(),t=Math.max(1,Math.round(e.width||window.innerWidth)),n=Math.max(1,Math.round(e.height||window.innerHeight));return{width:t,height:n,pixelRatio:Math.min(window.devicePixelRatio||1,NS)}}function US(s,e){let t={width:0,height:0,pixelRatio:0};const n=[];function i(){const a=DS(s);a.width===t.width&&a.height===t.height&&a.pixelRatio===t.pixelRatio||(t=a,e(a))}function r(){for(const a of n.splice(0))clearTimeout(a);for(const a of LS)n.push(setTimeout(i,a))}const o=new ResizeObserver(i);return o.observe(s),window.addEventListener("resize",i),window.addEventListener("orientationchange",r),window.visualViewport?.addEventListener("resize",i),window.addEventListener("pageshow",r),screen.orientation?.addEventListener("change",r),i(),{measure:i,dispose(){for(const a of n.splice(0))clearTimeout(a);o.disconnect(),window.removeEventListener("resize",i),window.removeEventListener("orientationchange",r),window.visualViewport?.removeEventListener("resize",i),window.removeEventListener("pageshow",r),screen.orientation?.removeEventListener("change",r)}}}const OS=new U(0,1.4,-5.5),cu=Wi.degToRad(180),lu=Wi.degToRad(85),FS=.04,BS=.09,kf=new U(1,0,0),zf=new U(0,1,0);function Hf(s){return s<-1?-1:s>1?1:s}function Pa(s,e){return s<-e?-e:s>e?e:s}function uu(s,e){return 1-Math.pow(2,-s/e)}function kS(s){let e=0,t=0,n=0,i=0,r=!1;const o=new U,a=new U,c=new U;return{get orbit(){return{yaw:e,pitch:t}},reset(){e=0,t=0,n=0,i=0,r=!1},update(l,u,h){const d=Hf(u?.x??0),f=Hf(u?.y??0);if(n=Pa(n+(u?.turnX??0),cu),i=Pa(i-(u?.turnY??0),lu),Math.abs(d)>.05||Math.abs(f)>.05){const m=uu(h,.25);n-=n*m,i-=i*m}const g=Pa(d*cu+n,cu),x=Pa(-f*lu+i,lu),p=uu(h,BS);e+=(g-e)*p,t+=(x-t)*p,o.copy(OS).multiplyScalar(l.mesh.scale.x).applyAxisAngle(kf,t).applyAxisAngle(zf,e).applyQuaternion(l.mesh.quaternion),a.copy(l.mesh.position).add(o),r?s.position.lerp(a,uu(h,FS)):(s.position.copy(a),r=!0),c.set(0,1,0).applyAxisAngle(kf,t).applyAxisAngle(zf,e).applyQuaternion(l.mesh.quaternion),s.up.copy(c),s.lookAt(l.mesh.position)}}}const Gf=6,_t=s=>s/Gf,bn=_t(3400),sr=_t(2100),Vf=_t(3100),Wf=_t(480),zS=_t(25),HS=_t(300),fi=2e4,GS=62e3,VS=127,Kn=65e3,Li=43e3,WS=.8,is=0,$n={x:0,z:0,radius:5200,height:1450,craterR:520,craterDepth:320},Xf=Math.tan(33*Math.PI/180);function XS(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const hu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],qS=.5*(Math.sqrt(3)-1),eo=(3-Math.sqrt(3))/6;function Ia(s){const e=XS(s),t=new Uint8Array(512),n=new Uint8Array(256);for(let i=0;i<256;i++)n[i]=i;for(let i=255;i>0;i--){const r=Math.floor(e()*(i+1)),o=n[i];n[i]=n[r],n[r]=o}for(let i=0;i<512;i++)t[i]=n[i&255];return function(r,o){const a=(r+o)*qS,c=Math.floor(r+a),l=Math.floor(o+a),u=(c+l)*eo,h=r-(c-u),d=o-(l-u),f=h>d?1:0,g=h>d?0:1,x=h-f+eo,p=d-g+eo,m=h-1+2*eo,M=d-1+2*eo,y=c&255,v=l&255;let C=0,A=.5-h*h-d*d;if(A>0){const O=hu[t[y+t[v]]&7];A*=A,C+=A*A*(O[0]*h+O[1]*d)}let T=.5-x*x-p*p;if(T>0){const O=hu[t[y+f+t[v+g]]&7];T*=T,C+=T*T*(O[0]*x+O[1]*p)}let E=.5-m*m-M*M;if(E>0){const O=hu[t[y+1+t[v+1]]&7];E*=E,C+=E*E*(O[0]*m+O[1]*M)}return 70*C}}const to=s=>s<0?0:s>1?1:s,Vt=(s,e,t)=>{const n=to((t-s)/(e-s));return n*n*(3-2*n)},Ni=(s,e,t)=>s+(e-s)*t,Xe={SEA:"sea",BEACH:"beach",PLAIN:"plain",SAVANNA:"savanna",FOREST:"forest",HILLS:"hills",MOUNTAIN:"mountain",SNOW:"snow",DUNES:"dunes",STONE_DESERT:"stone",SALT:"salt",BADLANDS:"badlands",MESA:"mesa"},Jt={[Xe.SEA]:1915725,[Xe.BEACH]:13482642,[Xe.PLAIN]:6056771,[Xe.SAVANNA]:8680794,[Xe.FOREST]:3755310,[Xe.HILLS]:5465665,[Xe.MOUNTAIN]:8223340,[Xe.SNOW]:15265008,[Xe.DUNES]:11040327,[Xe.STONE_DESERT]:7369301,[Xe.SALT]:15721154,[Xe.BADLANDS]:9073235,[Xe.MESA]:10714715};function YS({seed:s=20260827}={}){const e=Ia(s),t=Ia(s+101),n=Ia(s+202),i=Ia(s+303);function r(P,I,z,q,w,W=.38){let F=0,Y=1,k=0,G=1/w;for(let $=0;$<q;$++)F+=P(I*G,z*G)*Y,k+=Y,Y*=W,G*=2.02;return F/k}function o(P,I,z,q,w,W=.42){let F=0,Y=1,k=0,G=1/w,$=1;for(let J=0;J<q;J++){let K=1-Math.abs(P(I*G,z*G));K*=K,K*=$,$=to(K*2.2),F+=K*Y,k+=Y,Y*=W,G*=2.02}return F/k}function a(P,I,z,q){return[P+r(n,P,I,2,q)*z,I+r(i,P,I,2,q)*z]}function c(P,I){const z=r(e,P,I,4,GS,.42)*1.05+.46,q=Math.max(Math.abs(P)/Kn,Math.abs(I)/Li),w=Vt(WS,1.02,q)*2.4+Math.max(0,q-1)*3;return z-w}const u=[{at:[0,0],r:.34,uplift:.97,moisture:.58,heat:.52},{at:[.62,-.72],r:.62,uplift:.86,moisture:.62,heat:.05},{at:[.22,-.86],r:.5,uplift:.74,moisture:.58,heat:.12},{at:[1.02,.06],r:.66,uplift:.16,moisture:.03,heat:.93},{at:[.7,.34],r:.52,uplift:.2,moisture:.09,heat:.88},{at:[.72,.82],r:.56,uplift:.5,moisture:.26,heat:.74},{at:[-.1,.92],r:.66,uplift:.34,moisture:.97,heat:.72},{at:[-.86,.18],r:.7,uplift:.24,moisture:.66,heat:.5},{at:[-.72,-.66],r:.58,uplift:.58,moisture:.18,heat:.6},{at:[-.94,.86],r:.48,uplift:.1,moisture:.8,heat:.62}].map(P=>({x:P.at[0]*Kn,z:P.at[1]*Li,rr:(P.r*Kn)**2,uplift:P.uplift,moisture:P.moisture,heat:P.heat})),h={uplift:.5,moisture:.5,heat:.5};function d(P,I){const z=fi*.55,q=P+r(t,P,I,2,fi*2.2)*z,w=I+r(n,P,I,2,fi*2.2)*z;let W=0,F=0,Y=0,k=0;for(const G of u){const $=((q-G.x)**2+(w-G.z)**2)/G.rr,J=1/($*$*$+.02);W+=G.uplift*J,F+=G.moisture*J,Y+=G.heat*J,k+=J}return h.uplift=W/k,h.moisture=F/k,h.heat=Y/k,h}function f(P,I){return to(d(P,I).uplift+r(t,P+4e3,I-9e3,3,fi*.8,.45)*.22)}function g(P,I){return to(d(P,I).moisture+r(n,P-21e3,I+12e3,3,fi*.7,.45)*.2)}function x(P,I){return to(d(P,I).heat+r(i,P*.3+7e3,I,2,fi*1.6,.45)*.14)}function p(P,I,z){const q=P/I,w=Math.floor(q),W=q-w;return(w+Vt(0,1,Math.min(1,W*z)))*I}const m=.22,M=sr*m*Xf;function y(P){const I=P-Math.floor(P),z=1-m;if(I<z){const q=I/z;return q*q*(3-2*q)}return 1-(I-z)/m}function v(P,I){return{continent:c(P,I),uplift:f(P,I),moisture:g(P,I),heat:x(P,I)}}const C=_t(150);function A(P,I,z){return P<C*.8&&z>.5?.05:.12+I*.45}function T(P){const{uplift:I,moisture:z}=P,q=1-z;return{alpine:Vt(.56,.92,I)*(1-Vt(.42,.62,q)),plateau:Vt(.58,.72,q)*Vt(.36,.52,I)*(1-Vt(.66,.84,I)),sandy:Vt(.64,.84,q)*(1-Vt(.34,.6,I))}}function E(P,I,z){const q=z??v(P,I),{continent:w,uplift:W,moisture:F}=q,Y=1-F,{alpine:k,plateau:G,sandy:$}=T(q);let J=r(e,P,I,3,fi*.9)*_t(90);if(J+=r(t,P,I,3,bn*3.2)*Wf*(.04+W*W*1.6),k>.001){const[L,le]=a(P,I,bn*.75,bn*6);let ae=o(e,L,le,5,bn*4);ae=Math.pow(ae,1.25),J=Ni(J,J+ae*Vf,k)}if(G>.01){const L=_t(1500)*(.45+W*.8)+r(t,P,I,2,bn*6)*_t(260),[le,ae]=a(P,I,bn*.8,bn*5),ve=Vt(.55,.92,o(i,le,ae,3,bn*3))*_t(1100);J=Ni(J,p(L-ve,_t(170),3.2),G)}const K=Math.hypot(P-$n.x,I-$n.z);if(K<$n.radius){const L=1-K/$n.radius,le=Math.atan2(I-$n.z,P-$n.x),ae=Math.sin(le*17+r(t,P,I,2,900)*2.2)*34*L*(1-L)*4,se=VS+Math.pow(L,1.6)*$n.height-Vt($n.craterR,$n.craterR*.3,K)*$n.craterDepth-Math.abs(ae)+r(i,P,I,3,120,.5)*9;J=Ni(J,se,Vt(0,.34,L))}if($>.001){const L=r(t,P,I,2,fi*2)*.9,le=P*Math.cos(L)+I*Math.sin(L),ae=r(n,P,I,2,sr*5)*sr*.5,se=y((le+ae)/sr),ve=y((le*2.7-ae)/sr);J+=(se*.78+ve*.22)*M*$}if(Y>.5&&J<C&&w>.12){const L=Vt(.5,.72,Y)*Vt(C,_t(20),J);J=Ni(J,C*.55,L*.95)}const[Z,ce]=a(P,I,bn*1.2,bn*7),pe=o(n,Z,ce,3,bn*5),we=Vt(.5,.98,pe);we>.001&&(J-=we*_t(340)*(.06+W*W*1.1)*(1-G*.8));const me=A(J,W,Y);me>.01&&(J+=r(i,P,I,3,17,.5)*me);const Me=_t(760)*Vt(-.05,.55,w),Ne=Vt(-.1,.14,w),ne=Ni(-_t(900),_t(10),Vt(-.6,.14,w));return Ni(ne,J+Me,Ne)}function O(P,I,z=4){const q=v(P,I),w=E(P,I,q),W=E(P+z,I)-E(P-z,I),F=E(P,I+z)-E(P,I-z),Y=Math.atan(Math.hypot(W,F)/(2*z));return{height:w,slope:Y,slopeDeg:Y*180/Math.PI,region:q,biome:_(P,I,w,Y,q)}}function _(P,I,z,q,w){if(z<=is)return Xe.SEA;const{uplift:W,moisture:F,heat:Y}=w,k=1-F,G=q*180/Math.PI,{alpine:$,plateau:J,sandy:K}=T(w),Z=Ni(_t(1500),_t(6400),Y);if(z>Z&&!(J>$))return Xe.SNOW;const ce=Z*.62;return z<_t(40)&&G<3&&k<.55?Xe.BEACH:J>.35&&J>=$?z<C*.8&&G<2.5?Xe.SALT:W>.44?Xe.MESA:Xe.BADLANDS:K>.35&&K>=$?z<C*.8&&G<2.5?Xe.SALT:Xe.DUNES:k>.58?z<C*.8&&G<2.5?Xe.SALT:G>30||z>ce?Xe.MOUNTAIN:Xe.STONE_DESERT:G>30||z>ce?Xe.MOUNTAIN:F<.5?Xe.SAVANNA:W>.62||G>13?Xe.HILLS:F>.66?Xe.FOREST:Xe.PLAIN}function S(P,I){return O(P,I).biome}return{heightAt:E,sampleAt:O,biomeAt:S,regionAt:v,continentField:c,upliftField:f,moistureField:g,heatField:x,styleAt:T,snowlineAt(P,I){return Ni(_t(1500),_t(6400),x(P,I))},seaLevel:is,constants:{SHRINK:Gf,RIDGE_SPACING:bn,DUNE_SPACING:sr,MOUNTAIN_RELIEF:Vf,HILL_RELIEF:Wf,PLAIN_RELIEF:zS,DUNE_HEIGHT:HS,REGION_SIZE:fi,REPOSE:Xf}}}const no=6,pi=17,qf=64,io=9,Yf=2,du=qf*Yf**(io-1)*no/2,La=new Ve,jn=new Ve,Na={height:0,slopeDeg:0,region:null},KS=3,rr=s=>s<0?0:s>1?1:s,Da=(s,e,t)=>{const n=rr((t-s)/(e-s));return n*n*(3-2*n)},fu=_t(140),Kf=_t(45),$S=8;function jS({seed:s=20260827}={}){const e=YS({seed:s}),t=new at,n=new Je({vertexColors:!0,roughness:.96,metalness:0,flatShading:!1}),i=[];for(let E=0;E<io;E++){const O=qf*Yf**E,_={tileSize:O,step:O/(pi-1),centre:{i:NaN,j:NaN},holeKey:null,tiles:[],spare:[],group:new at};_.group.renderOrder=io-E;for(let S=0;S<no*no+12;S++){const P=new ks(O,O,pi-1,pi-1);P.rotateX(-Math.PI/2),P.setAttribute("color",new Rt(new Float32Array(pi*pi*3),3));const I=new re(P,n);I.name=`ground-r${E}`,I.receiveShadow=!0,I.frustumCulled=!0,I.matrixAutoUpdate=!1,_.tiles.push({mesh:I,i:NaN,j:NaN}),_.group.add(I)}i.push(_),t.add(_.group)}for(let E=1;E<io;E++)i[E].group.position.y=-.05*i[E].step;const r=new re(new ks(du*2.4,du*2.4,1,1),new Je({color:Jt[Xe.SEA],roughness:.22,metalness:.1,transparent:!0,opacity:.88}));r.rotation.x=-Math.PI/2,r.position.y=is,r.renderOrder=io+1,t.add(r);function o(E,O,_,S){const{height:P,slopeDeg:I,region:z}=_,q=1-z.moisture,{sandy:w,plateau:W}=e.styleAt(z);S.setHex(Jt[Xe.FOREST]),S.lerp(jn.setHex(Jt[Xe.PLAIN]),Da(.28,.44,q)),S.lerp(jn.setHex(Jt[Xe.SAVANNA]),Da(.42,.58,q)),S.lerp(jn.setHex(Jt[Xe.STONE_DESERT]),Da(.55,.68,q)),S.lerp(jn.setHex(Jt[Xe.MESA]),W*.85),S.lerp(jn.setHex(Jt[Xe.DUNES]),w);const F=rr((I-24)/22);F>0&&S.lerp(jn.setHex(7169884),F*.85);const Y=e.snowlineAt(E,O),k=rr((P-Y*.86)/(Y*.3));if(k>0&&S.lerp(jn.setHex(Jt[Xe.SNOW]),k*rr(1-I/52)),q>.5&&P<fu&&I<4&&S.lerp(jn.setHex(Jt[Xe.SALT]),Da(fu,fu*.4,P)*.9),P<Kf&&P>is){const G=1-rr(P/Kf);S.lerp(jn.setHex(Jt[Xe.BEACH]),G*G*.8)}return P<=is&&S.lerp(jn.setHex(860464),rr(-P/_t(500))),S}const a=2,c=pi+a*2,l=new Float64Array(c*c);function u(E,O,_,S){const P=_*E.tileSize,I=S*E.tileSize,z=O.mesh.geometry.attributes.position,q=O.mesh.geometry.attributes.color,w=O.mesh.geometry.attributes.normal,W=z.array,F=q.array,Y=w.array,k=E.step,G=P-E.tileSize/2,$=I-E.tileSize/2;for(let Z=0;Z<c;Z++){const ce=$+(Z-a)*k;for(let pe=0;pe<c;pe++)l[Z*c+pe]=e.heightAt(G+(pe-a)*k,ce)}const J=Math.max(1,Math.min(a,Math.round($S/k))),K=2*J*k;for(let Z=0;Z<pi;Z++)for(let ce=0;ce<pi;ce++){const we=(Z*pi+ce)*3,me=ce+a,Me=Z+a,Ne=G+ce*k,ne=$+Z*k,L=l[Me*c+me];W[we]=Ne-P,W[we+1]=L,W[we+2]=ne-I;const le=(l[Me*c+me+J]-l[Me*c+me-J])/K,ae=(l[(Me+J)*c+me]-l[(Me-J)*c+me])/K,se=Math.hypot(le,1,ae);Y[we]=-le/se,Y[we+1]=1/se,Y[we+2]=-ae/se,Na.height=L,Na.slopeDeg=Math.atan(Math.hypot(le,ae))*180/Math.PI,Na.region=e.regionAt(Ne,ne),o(Ne,ne,Na,La),F[we]=La.r,F[we+1]=La.g,F[we+2]=La.b}z.needsUpdate=!0,q.needsUpdate=!0,w.needsUpdate=!0,O.mesh.geometry.computeBoundingSphere(),O.mesh.position.set(P,0,I),O.mesh.visible=!0,O.mesh.updateMatrix(),O.i=_,O.j=S}function h(E,O){return Math.round((E/O-1)/2)*2+1}let d=0,f=0;const g=[];function x(E,O){let _=null;for(const S of i){const P=h(E,S.tileSize),I=h(O,S.tileSize),z=_;_={x:P*S.tileSize,z:I*S.tileSize,half:no*S.tileSize/2};const q=z?`${z.x},${z.z}`:"";if(P===S.centre.i&&I===S.centre.j&&q===S.holeKey)continue;S.centre.i=P,S.centre.j=I,S.holeKey=q;const w=(no-1)/2,W=new Set;for(let k=-w;k<=w;k++)for(let G=-w;G<=w;G++){if(z){const $=(P+G)*S.tileSize,J=(I+k)*S.tileSize,K=S.tileSize/2;if(Math.abs($-z.x)+K<=z.half&&Math.abs(J-z.z)+K<=z.half)continue}W.add(`${P+G},${I+k}`)}const F=new Set,Y=[];for(const k of S.tiles){const G=`${k.i},${k.j}`;W.has(G)&&!F.has(G)?F.add(G):Y.push(k)}for(const k of Y)k.mesh.visible=!1,k.i=NaN,k.j=NaN;S.spare=Y;for(let k=g.length-1;k>=0;k--)g[k].ring===S&&g.splice(k,1);for(const k of W){if(F.has(k))continue;const[G,$]=k.split(",").map(Number);g.push({ring:S,i:G,j:$,d2:(G*S.tileSize-E)**2+($*S.tileSize-O)**2})}}g.sort((S,P)=>S.d2-P.d2),r.position.x=E,r.position.z=O,p(KS)}function p(E){const O=performance.now();for(;g.length&&performance.now()-O<E;){const _=g.shift(),S=_.ring.spare.pop();S&&(u(_.ring,S,_.i,_.j),d++)}f=performance.now()-O}function m(E,O){return e.heightAt(E,O)}function M(E,O,_=3){const S=e.sampleAt(E,O,Math.max(2,_));return S.height>is+1.5&&S.slopeDeg<12}const y=38,v=[0,0];function C(E,O,_,S=[]){const P=e.sampleAt(E,O,2);if(S[0]=E,S[1]=O,P.slopeDeg<=y)return S;const I=4,z=e.heightAt(E+I,O)-e.heightAt(E-I,O),q=e.heightAt(E,O+I)-e.heightAt(E,O-I),w=Math.hypot(z,q);if(w<1e-5)return S;v[0]=z/w,v[1]=q/w;const W=Math.max(.35,_??.5);return S[0]=E-v[0]*W,S[1]=O-v[1]*W,S}function A(){for(let O=1;O<9e3;O++){const _=14e3+90*Math.sqrt(O),S=Math.cos(O*.7)*_,P=Math.sin(O*.7)*_,I=e.sampleAt(S,P,6);if(!(I.height<20||I.height>320||I.slopeDeg>5)&&!(I.biome===Xe.SEA||I.biome===Xe.SALT||I.biome===Xe.SNOW))return{x:S,z:P,height:I.height,biome:I.biome}}return{x:14e3,z:0,height:e.heightAt(14e3,0),biome:e.biomeAt(14e3,0)}}const T=A();return{group:t,terrain:e,setFocus:x,flush(){p(1/0)},update(){},groundHeightAt:m,resolveWalk:C,isClear:M,findLandingSite:A,spawn:new U(T.x,T.height,T.z),heading:-Math.PI/2,info:{name:"an unnamed world",biomeAt:(E,O)=>e.biomeAt(E,O),get tilesBuilt(){return d},get build(){return{ms:+f.toFixed(2),queued:g.length}},reach:du}}}const Qe=new U(0,-2e4,0),JS=22,ZS=2800,$f=1,QS=4,e1=1,jf=10340847,t1=1600,n1=34e3,Jf=24e3;function i1(s,e,t,n=()=>{}){const i=jS();i.group.position.copy(Qe),i.group.visible=!1,s.add(i.group);const r=new U().copy(i.spawn);let o=!1;const a=t.far,c=1.6,l=.9,u=new di(16774112,0);u.position.set(-260,420,180).add(Qe),u.target.position.copy(Qe),s.add(u.target),s.add(u);const h=new Ma(12377343,6978386,0);h.position.copy(Qe),s.add(h);const d=document.createElement("div");d.id="landing-banner",d.hidden=!0,d.innerHTML=`
    <div class="landing-banner__town"></div>
    <div class="landing-banner__street"></div>
    <div class="landing-banner__hint"></div>
  `,document.body.appendChild(d),d.querySelector(".landing-banner__town").textContent=Le.surface.town,d.querySelector(".landing-banner__street").textContent=Le.surface.street,d.querySelector(".landing-banner__hint").textContent=Le.surface.leaveHint;const f=new $t;let g=!1,x=!1,p=0;const m=new U,M=s.background,y=s.fog.color.clone();function v(_){return _.mesh.position.distanceTo(Jr)<Zr+JS}function C(_){return _.mesh.position.y-Qe.y}const A=[[0,0],[1.4,0],[-1.25,0],[0,.9],[0,-.9]];function T(_){const S=f.setFromQuaternion(_.mesh.quaternion,"YXZ"),P=Math.sin(S.y),I=Math.cos(S.y),z=_.mesh.scale.x;let q=-1/0;for(const[w,W]of A){const F=_.mesh.position.x+(P*w+I*W)*z,Y=_.mesh.position.z+(I*w-P*W)*z,k=i.groundHeightAt(F-Qe.x,Y-Qe.z);k>q&&(q=k)}return q}function E(_){if(g)return;g=!0,m.copy(_.mesh.position).sub(Jr).setLength(Zr+60).add(Jr),i.group.visible=!0,u.intensity=c,h.intensity=l,_.mesh.scale.setScalar(QS);for(const P of e)P.visible=!1;s.background=new Ve(jf),s.fog.color.setHex(jf),s.fog.near=t1,s.fog.far=n1;const S=o?r:i.spawn;o=!0,i.setFocus(S.x,S.z),i.flush(),_.mesh.position.set(S.x,i.groundHeightAt(S.x,S.z)+90,S.z).add(Qe),_.mesh.quaternion.setFromEuler(new $t(0,i.heading,0,"YXZ")),_.velocity.set(0,0,0),t.far=Jf,t.updateProjectionMatrix(),n(),d.querySelector(".landing-banner__street").textContent=Le.surface.ground[i.info.biomeAt(S.x,S.z)]??Le.surface.street,d.hidden=!1,d.classList.remove("landing-banner--fading"),p=6}function O(_){if(!g)return;g=!1,x=!1,_.mesh.scale.setScalar(1),r.set(_.mesh.position.x-Qe.x,0,_.mesh.position.z-Qe.z),t.far=a,t.updateProjectionMatrix(),i.group.visible=!1,u.intensity=0,h.intensity=0;for(const P of e)P.visible=!0;s.background=M,s.fog.color.copy(y),s.fog.near=hf,s.fog.far=df,_.mesh.position.copy(m);const S=m.clone().sub(Jr).normalize();_.mesh.quaternion.setFromUnitVectors(new U(0,0,1),S),_.velocity.set(0,0,0),n(),d.hidden=!0}return{get active(){return g},get parked(){return x},world:i,enter:E,exit:O,altitude:C,hullGroundY(_){return Qe.y+T(_)},park(){x=!0},unpark(){x=!1},prewarm(_,S){i.setFocus(i.spawn.x,i.spawn.z),i.flush(),i.group.visible=!0,u.intensity=c,h.intensity=l,_.compile(s,S);const P=new Ot(60,S.aspect,.1,Jf);P.position.copy(Qe).add(i.spawn).add(new U(0,160,320)),P.lookAt(new U().copy(Qe).add(i.spawn)),_.render(s,P),i.group.visible=!1,u.intensity=0,h.intensity=0,_.render(s,S)},update(_,S){if(!g){v(_)&&E(_);return}if(i.update(S),i.setFocus(_.mesh.position.x-Qe.x,_.mesh.position.z-Qe.z),x){p>0&&(p-=S,p<=0&&d.classList.add("landing-banner--fading"));return}const P=C(_),I=T(_);P<I+$f&&(_.mesh.position.y=Qe.y+I+$f,_.velocity.y<0&&(_.velocity.y=0)),P>ZS&&O(_),p>0&&(p-=S,p<=0&&d.classList.add("landing-banner--fading"))},reset(_){O(_)}}}const s1=38,r1=19,o1=45,Zf=1.5,Qf=.25,a1=.5,Ua=1;function c1(s){let e=Ua,t=0;const n=[];return{get scale(){return e},sample(i){const r=i*1e3;if(r>250||(n.push(r),n.length<o1))return;const o=[...n].sort((l,u)=>l-u),a=o[Math.floor(o.length/2)];if(n.length=0,t>0)return;let c=e;a>s1?c=Math.max(a1,e-Qf):a<r1&&(c=Math.min(Ua,e+Qf)),c!==e&&(e=c,t=Zf,s(e))},update(i){t>0&&(t-=i)},reset(){e!==Ua&&(e=Ua,n.length=0,t=Zf,s(e))}}}class pu extends Ir{constructor(){super();const e=new Gt;e.deleteAttribute("uv");const t=new Je({side:Xt}),n=new Je,i=new Yl(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new re(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new re(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new re(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new re(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new re(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new re(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new re(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new re(e,or(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new re(e,or(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new re(e,or(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new re(e,or(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new re(e,or(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new re(e,or(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function or(s){const e=new nn;return e.color.setScalar(s),e}function Dn(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Ct;let l=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=ep(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const g=ep(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function ep(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Rt(o,t,n);let c=0;for(let l=0;l<s.length;++l){const u=s[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function tp(s,e){if(e===wm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===kc||e===mh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===kc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const mi=.181,Un=.032;function l1({metal:s,polymer:e,glow:t}){const n=new at,i=[],r=[],o=[],a=(d,f,g,x,p,m)=>{const M=new Gt(d,f,g);return M.translate(x,p,m),M};i.push(a(Un,.027,mi*.92,0,.021,.012));{const d=new St(Un*.5,Un*.5,mi*.92,10,1,!1,0,Math.PI);d.rotateZ(Math.PI/2),d.rotateY(Math.PI/2),d.translate(0,.034,.012),i.push(d)}for(let d=0;d<5;d++)i.push(a(Un+.002,.02,.004,0,.022,-.052-d*.008));r.push(a(.003,.016,.042,Un*.5,.026,.03));{const d=new St(.0085,.0085,.02,10);d.rotateX(Math.PI/2),d.translate(0,.022,mi*.47),i.push(d)}i.push(a(.005,.008,.005,0,.05,mi*.42)),i.push(a(.008,.008,.006,-.009,.05,-.07)),i.push(a(.008,.008,.006,.009,.05,-.07)),o.push(a(.0035,.0035,.0035,0,.052,mi*.42+.002)),r.push(a(Un-.004,.016,mi*.55,0,0,.038)),r.push(a(.014,.005,.05,0,-.009,.05)),r.push(a(.012,.03,.006,0,-.02,.028)),r.push(a(.012,.006,.045,0,-.033,.006)),r.push(a(.012,.022,.006,0,-.024,-.014)),r.push(a(.007,.018,.005,0,-.017,.004));{const d=new Gt(Un-.005,.095,.032);d.translate(0,-.055,-.03),d.rotateX(-.34),d.translate(0,0,-.006),r.push(d);const f=new Gt(Un-.002,.008,.036);f.translate(0,-.104,-.062),f.rotateX(-.1),r.push(f);const g=new Gt(.006,.05,.005);g.translate(Un*.48-.004,-.055,-.03),g.rotateX(-.34),o.push(g)}o.push(a(.0035,.004,.075,Un*.5,.016,.01)),o.push(a(.0035,.004,.075,-Un*.5,.016,.01)),n.add(new re(Dn(i),s)),n.add(new re(Dn(r),e)),n.add(new re(Dn(o),t));const c=new nn({color:16773296,transparent:!0,opacity:.75,depthWrite:!1}),l=new re(new un(.022,.062,6),c);l.rotation.x=Math.PI/2,l.position.set(0,.022,mi*.52),l.visible=!1,n.add(l);let u=0;const h=new U(0,.022,mi*.5);return{group:n,getMuzzle(d){return n.updateWorldMatrix(!0,!1),d.copy(h).applyMatrix4(n.matrixWorld)},getAim(d){n.updateWorldMatrix(!0,!1);const f=n.matrixWorld.elements;return d.set(f[8],f[9],f[10]).normalize()},fire(){u=.055,l.visible=!0,l.rotation.z=Math.random()*Math.PI,l.scale.setScalar(.85+Math.random()*.4)},update(d){u<=0||(u-=d,u<=0?l.visible=!1:c.opacity=Math.min(1,u/.03))},length:mi}}const On=1.8,u1=4146511,h1=5857646,d1=2303790,so=5504925,np=8257456,f1=4835583,p1=14198404,m1=3810328;function g1(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,256,256),t.lineCap="square",t.strokeStyle="#5effa6";for(let i=0;i<14;i++){let r=Math.random()*256,o=Math.random()*256;t.lineWidth=Math.random()<.3?2:1,t.beginPath(),t.moveTo(r,o);const a=2+Math.floor(Math.random()*4);for(let c=0;c<a;c++)c%2===0?o+=(Math.random()-.35)*90:r+=(Math.random()-.5)*70,t.lineTo(r,o);t.stroke(),t.fillStyle="#9dffcb",t.fillRect(r-2,o-2,4,4),t.fillStyle="#5effa6"}const n=new ts(e);return n.wrapS=yi,n.wrapT=yi,n.colorSpace=Et,n}function _1(s,e,t){const n=new Hr,i=-s/2,r=-e/2,o=Math.max(.001,Math.min(t,s/2-.001,e/2-.001));return n.moveTo(i+o,r),n.lineTo(i+s-o,r),n.absarc(i+s-o,r+o,o,-Math.PI/2,0),n.lineTo(i+s,r+e-o),n.absarc(i+s-o,r+e-o,o,0,Math.PI/2),n.lineTo(i+o,r+e),n.absarc(i+o,r+e-o,o,Math.PI/2,Math.PI),n.lineTo(i,r+o),n.absarc(i+o,r+o,o,Math.PI,Math.PI*1.5),n}function Fn(s,e,t,n,i=0,r=0,o=0,a=.02){const c=Math.min(.012,t*.35),l=new $s(_1(s,e,a),{depth:Math.max(.001,t-c*2),bevelEnabled:!0,bevelThickness:c,bevelSize:c,bevelSegments:2,curveSegments:4});l.center();const u=new re(l,n);return u.position.set(i,r,o),u}function ro(s,e,t,n,i=16){const r=new at;r.add(new re(new St(s,e,t,i),n));const o=new re(new Ze(s,i,8),n);o.position.y=t/2,o.scale.y=.7,r.add(o);const a=new re(new Ze(e,i,8),n);return a.position.y=-t/2,a.scale.y=.7,r.add(a),r}function Oa(s,e,t=0){const n=new re(new Ze(s,16,12),e);return n.position.y=t,n}function x1(){const s=[[.001,0],[.15,0],[.168,.04],[.163,.12],[.178,.2],[.2,.3],[.212,.38],[.208,.46],[.17,.52],[.09,.55],[.001,.555]].map(([t,n])=>new ge(t,n)),e=new ma(s,28);return e.scale(1.06,1,.84),e}function mu({suitLight:s=!0,environment:e=null}={}){const t=new at,n=new at;t.add(n);const i=g1(),r=new Je({color:u1,metalness:.62,roughness:.38,emissive:so,emissiveMap:i,emissiveIntensity:.34}),o=new Je({color:h1,metalness:.7,roughness:.3,emissive:so,emissiveMap:i,emissiveIntensity:.22}),a=new Je({color:d1,metalness:.25,roughness:.72,emissive:so,emissiveMap:i,emissiveIntensity:.3}),c=new Je({color:p1,metalness:0,roughness:.72}),l=new Je({color:m1,metalness:0,roughness:.9}),u=new Je({color:np,emissive:np,emissiveIntensity:1.6,transparent:!0,opacity:.58,metalness:.4,roughness:.08}),h=new nn({color:f1}),d=new Je({color:863004,emissive:so,emissiveIntensity:1.15,metalness:.2,roughness:.35});if(e)for(const N of[r,o,a,c,l,u,d])N.envMap=e,N.envMapIntensity=.55;const f=new re(x1(),a);f.position.y=.97,n.add(f);const g=new re(new Ze(.19,28,18,Math.PI*.22,Math.PI*.56,Math.PI*.16,Math.PI*.5),r);g.scale.set(1.12,1.16,.92),g.position.set(0,1.33,.006),n.add(g);const x=Fn(.028,.19,.03,o,0,1.35,.155,.012);n.add(x);const p=new re(new Wn(.125,.026,10,24,Math.PI*1.15),r);p.rotation.set(Math.PI/2,0,Math.PI*.92),p.position.set(0,1.465,.01),p.scale.z=.8,n.add(p);const m=Fn(.25,.3,.05,r,0,1.3,-.11,.07);m.rotation.x=-.06,n.add(m);const M=new re(new Wn(.153,.034,12,32),o);M.rotation.x=Math.PI/2,M.position.y=.99,M.scale.set(1.06,.86,1),n.add(M);const y=new re(new Ze(.042,16,12),h);y.scale.set(1.5,1,.45),y.position.set(0,.99,.132),n.add(y);const v=new re(new Ze(.152,20,14),r);v.scale.set(1.04,.58,.82),v.position.y=.905,n.add(v);const C=ro(.052,.058,.08,a,12);C.position.y=1.55,n.add(C);const A=new re(new Ze(.105,24,20),c);A.scale.set(.95,1.14,1),A.position.y=1.66,n.add(A);const T=new re(new Ze(.07,20,16),c);T.scale.set(.94,.82,1.04),T.position.set(0,1.6,.014),n.add(T);const E=new re(new un(.018,.042,8),c);E.rotation.x=Math.PI*.52,E.position.set(0,1.646,.095),n.add(E);for(const N of[-1,1]){const B=new re(new Ze(.022,10,8),c);B.scale.set(.5,1,.8),B.position.set(N*.096,1.655,.005),n.add(B)}const O=[],_=new $e,S=new Kt,P=new U,I=new U,z=new U,q=new U(0,1,0),w=new U(0,0,1);function W(N,B,V,H){N.applyMatrix4(_.compose(B,V,H)),O.push(N)}const F=[[0,1.732,-.012,.088],[-.06,1.722,.028,.064],[.06,1.726,.024,.066],[0,1.71,-.07,.074],[-.082,1.7,-.024,.06],[.084,1.703,-.02,.058],[.026,1.757,-.005,.048],[-.032,1.752,-.036,.046],[-.056,1.692,.056,.044],[.058,1.694,.053,.042]];for(const[N,[B,V,H,ee]]of F.entries())W(new Ze(ee,10,8),P.set(B,V,H),S.setFromEuler(new $t(N%3*.18,N*.7,(N%5-2)*.12)),I.set(1.12,.72,1.1));const Y=[[-.05,1.736,.055,.048,1.5,.35,-.6,.72],[-.008,1.744,.062,.05,1.55,.3,-.45,.84],[.038,1.74,.056,.046,1.45,.55,-.5,.67],[.074,1.728,.03,.04,1.35,.85,-.35,.4],[-.03,1.764,.03,.048,1.5,-.25,.25,.94],[.028,1.768,.012,.05,1.6,.42,.62,.66],[-.02,1.766,-.03,.048,1.5,-.3,.6,-.74],[.042,1.756,-.036,.044,1.45,.5,.15,-.85],[-.084,1.72,.014,.044,1.5,-.5,-.1,.86],[-.086,1.712,-.038,.042,1.45,-.45,-.05,-.89],[.086,1.722,.01,.046,1.5,.5,-.05,.86],[.088,1.714,-.036,.042,1.45,.45,-.1,-.89],[-.032,1.72,-.078,.046,1.55,-.2,.05,-.98],[.03,1.724,-.08,.048,1.6,.2,.15,-.97],[0,1.7,-.082,.042,1.4,0,-.35,-.94]];for(const[N,[B,V,H,ee,fe,de,ye,Ae]]of Y.entries()){z.set(de,ye,Ae).normalize(),W(new Ze(ee,10,8),P.set(B,V,H),S.setFromUnitVectors(w,z),I.set(.62,.44,fe));const Ue=ee*fe*.66,Re=N%3===0?.052:N%3===1?.04:.032,Ke=new un(ee*.62,Re,3);Ke.translate(0,Re*.42,0),W(Ke,P.set(B,V,H).addScaledVector(z,Ue),S.setFromUnitVectors(q,z),I.set(.85,1,.5))}const k=[[-.07,1.75,0,.042,-.5,.75,.44],[.012,1.782,-.01,.046,.15,.95,-.28],[.066,1.756,.02,.038,.7,.66,.28],[-.05,1.73,.072,.034,-.1,.3,.95],[.05,1.736,-.07,.04,.35,.45,-.82],[-.088,1.73,-.01,.036,-.85,.42,.3],[.03,1.706,-.094,.032,.2,-.1,-.97],[-.026,1.776,.03,.04,-.2,.85,.49]];for(const[N,B,V,H,ee,fe,de]of k){z.set(ee,fe,de).normalize();const ye=new un(.014,H,3);ye.translate(0,H*.4,0),W(ye,P.set(N,B,V),S.setFromUnitVectors(q,z),I.set(.9,1,.55))}const G=1.706,$=Dn(O);$.translate(0,-G,0);const J=new re($,l);J.position.y=G,n.add(J);const K=new re(new St(.109,.109,.04,28,1,!0,-Math.PI*.28,Math.PI*.56),u);K.position.set(0,1.668,.004),K.scale.set(1,1,.94),n.add(K);const Z=new re(new St(.104,.104,.052,28,1,!0,-Math.PI*.29,Math.PI*.58),o);Z.position.set(0,1.668,.004),Z.scale.set(1,1,.94),n.add(Z);for(const N of[-1,1]){const B=new re(new St(.005,.005,.085,8),o);B.rotation.set(Math.PI/2,0,0),B.position.set(N*.098,1.668,-.028),n.add(B)}for(const N of[-1,1]){const B=new re(new Ze(.036,16,12),o);B.scale.set(.55,1,.9),B.position.set(N*.107,1.658,0),n.add(B)}const ce=new re(new St(.005,.005,.11,8),o);ce.position.set(-.078,1.618,.062),ce.rotation.set(-.5,0,.7),n.add(ce);const pe=new re(new Ze(.012,10,8),h);pe.position.set(-.048,1.588,.097),n.add(pe);const we=1.25,me=[],Me=[];for(const N of[-1,1]){const B=new at;B.position.set(N*.215,1.44,0),n.add(B),B.add(Oa(.072,a));const V=new re(new Ze(.108,20,14,0,Math.PI*2,0,Math.PI*.58),r);V.scale.set(1.04,1.05,1.08),V.position.y=.012,V.rotation.z=N*.22,B.add(V);const H=new re(new Ze(.088,18,10,0,Math.PI*2,Math.PI*.34,Math.PI*.2),o);H.position.y=-.032,H.rotation.z=N*.22,B.add(H);const ee=ro(.058,.05,.24,a);ee.position.y=-.17,B.add(ee);const fe=new re(new Wn(.055,.015,10,20),o);fe.rotation.x=Math.PI/2,fe.position.y=-.12,B.add(fe),B.add(Oa(.052,r,-.3));const de=new at;de.position.y=-.3,B.add(de),Me.push({shoulder:B,forearm:de,side:N});const ye=ro(.052,.045,.22,a);ye.position.y=-.12,de.add(ye);const Ae=new re(new St(.062,.05,.17,16),r);Ae.position.y=-.14,Ae.scale.z=.92,de.add(Ae);const Ue=Fn(.1,.055,.09,o,0,-.052,.006,.026);de.add(Ue);const Re=new at;Re.position.set(0,-.28,.004),Re.rotation.y=-N*1.15,Re.scale.setScalar(we),de.add(Re);const Ke=Fn(.056,.078,.032,a,0,.004,0,.018);Ke.rotation.x=.06,Re.add(Ke);const We=new re(new Ln(.011,.045,3,8),a);We.rotation.z=Math.PI/2,We.position.set(0,-.032,.003),Re.add(We);const st=[{len:.044,r:.0078,open:.3,grip:1.15,splay:.05},{len:.047,r:.008,open:.36,grip:1.75,splay:.02},{len:.043,r:.0075,open:.44,grip:1.85,splay:-.02},{len:.035,r:.0068,open:.52,grip:1.9,splay:-.06}],mt=[];for(const[wt,ct]of st.entries()){const dn=new re(new Ln(ct.r,ct.len*.55,3,8),a),_i=new re(new Ln(ct.r*.86,ct.len*.42,3,8),a);mt.push({near:dn,far:_i,spec:ct,index:wt,side:N}),Re.add(dn),Re.add(_i)}const je=new re(new Ln(.0092,.032,3,8),a);Re.add(je),me.push({group:Re,fingers:mt,thumb:je,side:N});const Be=Fn(.034,.052,.008,d,N*.055,-.145,.004,.008);Be.rotation.y=N*Math.PI/2,de.add(Be),B.rotation.z=N*.11,B.rotation.x=.04}let Ne=null,ne=null,L=!1,le=!0;const ae=[];for(const N of[-1,1]){const B=new at;B.position.set(N*.098,.8,0),n.add(B),B.add(Oa(.082,a));const V=ro(.085,.07,.34,a);V.position.y=-.2,B.add(V);const H=Fn(.125,.25,.05,r,0,-.19,.045,.05);if(H.rotation.x=-.05,B.add(H),N>0){const mt=Fn(.052,.115,.062,r,N*.086,-.235,.004,.016);mt.rotation.set(.12,N*.3,0),B.add(mt);const je=Fn(.06,.022,.07,o,N*.086,-.19,.004,.008);je.rotation.set(0,N*.3,0),B.add(je);const Be=l1({metal:r,polymer:a,glow:d});Ne=Be,ne=B,Te(),B.add(Be.group)}else for(const[mt,je]of[-.185,-.245].entries()){const Be=Fn(.042,.052,.05,o,N*.086,je,.004,.01);Be.rotation.y=N*.32,B.add(Be);const wt=Fn(.046,.01,.054,r,N*.086,je+.03,.004,.005);wt.rotation.y=N*.32,B.add(wt)}B.add(Oa(.068,a,-.4));const ee=new re(new Ze(.075,18,12,0,Math.PI*2,0,Math.PI*.55),r);ee.rotation.x=Math.PI*.42,ee.position.set(0,-.405,.028),B.add(ee);const fe=new at;fe.position.y=-.4,B.add(fe);const de=new at;de.position.y=-.3,fe.add(de),ae.push({hip:B,shin:fe,ankle:de,side:N});const ye=ro(.068,.055,.32,a);ye.position.y=-.18,fe.add(ye);const Ae=new re(new St(.072,.06,.27,16,1,!0,-1.1,2.2),r);Ae.position.set(0,-.175,.008),Ae.scale.z=1.1,fe.add(Ae);const Ue=new re(new Ze(.075,18,14),r);Ue.scale.set(.95,.72,1.5),Ue.position.set(0,-.035,.03),de.add(Ue);const Re=Fn(.105,.07,.11,r,0,-.012,.072,.03);Re.rotation.x=.22,de.add(Re);const Ke=new re(new Ze(.055,16,12),o);Ke.scale.set(1,.62,1.15),Ke.position.set(0,-.062,.132),de.add(Ke);const We=new re(new Ze(.05,14,10),o);We.scale.set(1,.7,.9),We.position.set(0,-.057,-.045),de.add(We);const st=new re(new Wn(.042,.011,8,18),h);st.rotation.x=Math.PI/2,st.position.set(0,-.086,.025),de.add(st)}let se=null;s&&(se=new Yl(so,.45,2.2,2),se.position.set(0,1.2,.12),n.add(se));function ve(N,B){for(const{near:ee,far:fe,spec:de,index:ye,side:Ae}of N.fingers){const Ue=(ye-1.5)*.0165*Ae,Re=-.037,Ke=.003,We=de.open+(de.grip-de.open)*B,st=We+(.35+1.15*B),mt=de.len*.55,je=de.len*.42;ee.position.set(Ue,Re-Math.cos(We)*mt*.5,Ke+Math.sin(We)*mt*.5),ee.rotation.set(We,0,de.splay*Ae*(1-B*.6));const Be=Re-Math.cos(We)*mt,wt=Ke+Math.sin(We)*mt;fe.position.set(Ue,Be-Math.cos(st)*je*.5,wt+Math.sin(st)*je*.5),fe.rotation.set(st,0,de.splay*Ae*(1-B*.6))}const V=N.thumb,H=N.side;V.position.set(H*(.028-.006*B),-.016-.012*B,.014+.022*B),V.rotation.set(.5+B*.85,0,-H*(.7-B*.45))}function Te(){Ne.group.position.set(.078,-.175,.014),Ne.group.rotation.set(Math.PI/2+.3,.34,.06)}function Ee(N,B=!0){if(le=B,N===L||!Ne)return;L=N;const V=me.find(H=>H.side>0);N?(V.group.quaternion.setFromRotationMatrix(ie.makeBasis(D,b,j)),V.group.add(Ne.group),Ne.group.scale.setScalar(1/we),Ne.group.position.set(-.03,-.024,.019),Ne.group.rotation.set(0,0,Math.PI/2),ve(V,1)):(ne.add(Ne.group),Ne.group.scale.setScalar(1),Te(),ve(V,0))}const D=new U(0,0,-1),b=new U(1,0,0),j=new U(0,-1,0),ie=new $e;function oe(){Ne&&Ne.fire()}const te=1.02,ke=1.53,he=new at;he.position.y=te;const be=new at;be.position.y=ke-te;const it=new Set([v,M,y,...ae.map(N=>N.hip)]);se&&it.add(se);for(const N of[...n.children])it.has(N)||(N.position.y-=te,he.add(N));for(const N of[...he.children])N.position.y+te>=ke&&(N.position.y-=ke-te,be.add(N));he.add(be),n.add(he);const _e=f.position.y,Ce=be.position.y;let ze=0,He="idle",Fe=0,Ye=0,Ge=0,ut=0;const X=.04,De=.05,Q=.04;function ue(){const N=Math.sin(ze*1.6);f.position.y=_e+N*.005,f.scale.x=1+N*.006,n.position.set(0,0,0),n.rotation.z=0,he.rotation.set(-N*.006,0,0),be.rotation.set(N*.006,0,0),be.position.y=Ce;for(const B of ae)B.hip.rotation.x=0,B.hip.rotation.y=B.side*.07,B.hip.position.z=0,B.shin.rotation.x=0,B.ankle.rotation.x=0;for(const[B,V]of Me.entries())V.shoulder.rotation.x=X+Math.sin(ze*1.6+B)*.012,V.shoulder.rotation.z=V.side*.11,V.forearm.rotation.x=0}const Pe=[[0,28],[12,22],[30,6],[50,-12],[62,-8],[75,16],[88,28],[100,28]],Oe=[[0,4],[12,16],[30,6],[45,14],[60,40],[73,60],[87,26],[100,4]],ot=[[0,0],[8,-8],[30,5],[45,10],[58,-20],[68,-4],[80,2],[100,0]],vt=[[0,42],[10,28],[28,2],[42,-20],[52,-12],[68,24],[85,48],[100,42]],xe=[[0,22],[12,40],[28,26],[42,34],[55,74],[70,112],[86,52],[100,22]],Se=[[0,-6],[8,-14],[26,6],[40,14],[50,-26],[64,-10],[82,-4],[100,-6]],qe=2.8,et=5.4,Nt=1.5,Wt=2.7;function ln(N){return N<0?0:N>1?1:N}function rn(N,B,V){const H=ki(N,V);return Ge<=.001?H:H+(ki(B,V)-H)*Ge}function ki(N,B){const V=(B%1+1)%1*100;for(let H=1;H<N.length;H++){const[ee,fe]=N[H-1],[de,ye]=N[H];if(V<=de){const Ae=(V-ee)/(de-ee);return fe+(ye-fe)*(Ae*Ae*(3-2*Ae))}}return N[N.length-1][1]}const Qt=Math.PI/180,Zn=.8,fr=.4,Qn=.3,ds=[[-.045,-.107],[.132,-.096]];function pr(){let N=1/0;for(const B of ae){const V=B.hip.rotation.x,H=V+B.shin.rotation.x,ee=H+B.ankle.rotation.x,fe=Zn-fr*Math.cos(V)-Qn*Math.cos(H);for(const[de,ye]of ds){const Ae=fe+ye*Math.cos(ee)-de*Math.sin(ee);Ae<N&&(N=Ae)}}return N}function mr(N){const B=Math.max(Fe,.4);Ge+=(ln((B-qe)/(et-qe))-Ge)*(1-Math.pow(2,-N/.18));const V=Nt+(Wt-Nt)*Ge;Ye+=B/V*Math.PI*2*N;const H=Ye/(Math.PI*2),ee=Math.min(1.35,.55+B/4);for(const[Ke,We]of ae.entries()){const st=H+Ke*.5,mt=rn(Pe,vt,st)*Qt*ee,je=rn(Oe,xe,st)*Qt*ee,Be=rn(ot,Se,st)*Qt*ee;We.hip.rotation.x=-mt,We.hip.rotation.y=We.side*.09,We.shin.rotation.x=je,We.ankle.rotation.x=-Be,We.hip.position.z=Math.sin(st%1*Math.PI*2)*.022*ee}const fe=H-De;for(const[Ke,We]of Me.entries()){const st=fe+Ke*.5,mt=rn(Pe,vt,st)*Qt*ee*(.5+Ge*.3);We.shoulder.rotation.x=X+mt+Math.sin(ze*.71+Ke)*.012,We.shoulder.rotation.z=We.side*(.11-Math.max(0,-mt)*.28);const je=rn(Pe,vt,st-Q)*Qt*ee*.5;We.forearm.rotation.x=-(.22+Ge*.85+Math.max(0,-je)*1.3)}const de=pr(),ye=Math.max(0,Math.sin(Ye*2))*.055*Ge;n.position.y=-de+ye,n.position.x=Math.sin(Ye)*.022*ee,n.rotation.z=-Math.sin(Ye)*.045*ee;const Ae=Math.sin(fe%1*Math.PI*2);he.rotation.y=Ae*.13*ee,he.rotation.z=-n.rotation.z*.55,he.rotation.x=-(.06+Ge*.28)-(.5-.5*Math.cos(Ye*2))*.02;const Ue=Math.sin(ze*2.3);f.position.y=_e+Ue*.004,f.scale.x=1+Ue*.005;const Re=Math.sin(ze*.83)*.035+Math.sin(ze*.37)*.02;be.rotation.y=-he.rotation.y*.75+Re,be.rotation.x=-he.rotation.x*.8+Math.sin(ze*.61)*.015,be.rotation.z=-he.rotation.z*.6,be.position.y=Ce+de*.35}function fs(N){Ye+=N*4.2;for(const[B,V]of ae.entries()){const H=Ye+B*Math.PI;V.hip.rotation.x=-.5-Math.sin(H)*.4,V.hip.rotation.y=0,V.hip.position.z=0,V.shin.rotation.x=.95+Math.sin(H)*.45,V.ankle.rotation.x=-.25}for(const[B,V]of Me.entries()){const H=Ye+B*Math.PI+Math.PI;V.shoulder.rotation.x=-2.45+Math.sin(H)*.28,V.shoulder.rotation.z=V.side*.16,V.forearm.rotation.x=-(.5-Math.max(0,Math.sin(H))*.3)}n.position.set(0,0,0),n.rotation.z=0,he.rotation.set(-.12,0,0),be.rotation.set(.2,0,0),be.position.y=Ce,f.position.y=_e}function go(N){ut+=N;const B=Math.min(1,ut/.35),V=Math.min(1,Math.max(0,(ut-.3)/.5)),H=Math.min(1,Math.max(0,(ut-.7)/.65)),ee=Ae=>Ae*Ae*(3-2*Ae),fe=ee(B)*(1-ee(V)),de=ee(V),ye=ee(H);for(const[Ae,Ue]of ae.entries())Ue.hip.rotation.x=-de*(.9+Ae*.35)*(1-ye*.35),Ue.hip.rotation.y=Ue.side*.09,Ue.hip.position.z=0,Ue.shin.rotation.x=de*(1.7+Ae*.3),Ue.ankle.rotation.x=-.15*de;for(const[Ae,Ue]of Me.entries())Ue.shoulder.rotation.x=-fe*1.5-ye*(.6+Ae*.25),Ue.shoulder.rotation.z=Ue.side*(.11+fe*.5+ye*.5),Ue.forearm.rotation.x=-(.3+fe*.9);n.rotation.x=fe*.28-ye*(Math.PI/2-.12),n.rotation.z=ye*.22,n.position.y=-de*.42-ye*.38,n.position.x=ye*.05,he.rotation.x=fe*.3+ye*.25,he.rotation.y=0,he.rotation.z=0,be.rotation.set(fe*-.4+ye*.35,0,0),be.position.y=Ce,f.position.y=_e,f.rotation.y=0}function R(N){ze+=N;const B=.85+.25*Math.sin(ze*2.1);if(r.emissiveIntensity=.34*B,o.emissiveIntensity=.22*B,a.emissiveIntensity=.3*B,se&&(se.intensity=.45*B),Ne&&Ne.update(N),He==="walk"?mr(N):He==="climb"?fs(N):He==="dying"?go(N):ue(),L&&He!=="dying"){const V=Me.find(H=>H.side>0);if(V.shoulder.rotation.x=le?-1.42:-.28,V.shoulder.rotation.z=V.side*(le?.06:.13),V.forearm.rotation.x=le?-.16:-.55,le){const H=Me.find(ee=>ee.side<0);H.shoulder.rotation.x=Math.min(H.shoulder.rotation.x,-.35),H.forearm.rotation.x=-.9}}else{const V=me.find(H=>H.side>0);V.group.rotation.set(0,-V.side*1.15,0)}}return{group:t,update:R,height:On,setArmed:Ee,fire:oe,get pistol(){return Ne},getMuzzle(N){return!L||!Ne?null:Ne.getMuzzle(N)},setGait(N,B=0){N!==He&&(Ye=0,N!=="walk"&&(Ge=0),N==="dying"&&(ut=0)),He=N,Fe=B},get gait(){return He}}}const gu=1.35,ip={red:{skin:12076332,belly:14258282,dark:6044196,hp:2},blue:{skin:4156336,belly:9417949,dark:2832978,hp:3},black:{skin:3880496,belly:9076592,dark:2367260,hp:4},silver:{skin:12173516,belly:15001838,dark:5922920,hp:6}},v1=15129796,y1=7031343;function bt(s,e,t,n,i,r=null,o=null){r&&e.scale(r[0],r[1],r[2]),o&&(o[0]&&e.rotateX(o[0]),o[1]&&e.rotateY(o[1]),o[2]&&e.rotateZ(o[2])),e.translate(t,n,i),s.push(e)}function sp({tier:s="red"}={}){const e=ip[s]??ip.red,t=new at,n=new Je({color:e.skin,roughness:.85,metalness:.05}),i=new Je({color:e.dark,roughness:.9,metalness:.05}),r=new Je({color:v1,roughness:.55,metalness:.1}),o=new Je({color:e.belly,roughness:.8,metalness:.04}),a=new Je({color:y1,roughness:.95,metalness:0}),c=.26,l=[],u=[],h=[],d=[];bt(l,new Ze(.23,14,12),0,.76,0,[1.05,.88,.95]),bt(u,new Ze(.16,12,10),0,.77,.11,[1,.8,.6]),bt(l,new Ze(.185,14,12),0,.98,.075,[1.1,.8,.9],[c,0,0]),bt(l,new Ln(.072,.3,4,8),0,1.06,.06,null,[0,0,Math.PI/2]);const f=0,g=1.2,x=.16;bt(l,new Ze(.175,14,12),f,g,x,[1,.95,1.12]),bt(l,new Ze(.1,10,8),f,g+.08,x+.055,[1.25,.42,.8]),bt(l,new St(.062,.095,.19,10),f,g-.045,x+.13,null,[Math.PI/2+.25,0,0]),bt(l,new Ze(.062,10,8),f,g-.085,x+.21);for(const v of[-1,1])bt(h,new Ze(.018,8,6),v*.026,g-.06,x+.235);for(const v of[-1,1])bt(d,new un(.019,.075,6),v*.055,g-.09,x+.16,null,[.35,0,v*.3]);for(const v of[-1,1])bt(l,new un(.085,.2,4),v*.21,g+.06,x-.06,[1,1,.3],[.2,0,v*-1.25]);bt(d,new un(.032,.19,6),f,g+.18,x-.02,null,[-.4,0,0]);for(const v of[-1,1])bt(u,new Ze(.036,10,8),v*.07,g+.02,x+.135,[1,1,.75]),bt(h,new Ze(.018,8,6),v*.074,g+.018,x+.163,[.7,1.25,.7]);bt(h,new St(.185,.225,.19,12),0,.55,0),bt(h,new Wn(.2,.022,6,16),0,.645,0,[1.05,1,.95],[Math.PI/2,0,0]);const p=new at;p.add(new re(Dn(l),n)),p.add(new re(Dn(u),o)),p.add(new re(Dn(h),i)),p.add(new re(Dn(d),r)),t.add(p);const m=[];for(const v of[-1,1]){const C=new at;C.position.set(v*.225,1.05,.05),C.rotation.set(.18,0,v*.2),t.add(C);const A=[];bt(A,new Ln(.05,.15,3,8),0,-.1,.01),bt(A,new Ln(.042,.14,3,8),0,-.26,.045),bt(A,new Ze(.052,8,6),0,-.36,.06),C.add(new re(Dn(A),n)),m.push({group:C,side:v})}const M=[];for(const v of[-1,1]){const C=new at;C.position.set(v*.115,.6,0),t.add(C);const A=[];bt(A,new Ln(.062,.15,3,8),v*.022,-.11,0,null,[0,0,v*-.16]),bt(A,new Ln(.048,.15,3,8),v*.03,-.28,.015,null,[.1,0,v*.12]),bt(A,new Ze(.072,8,6),v*.012,-.4,.045,[.9,.5,1.4]),C.add(new re(Dn(A),n)),M.push({group:C,side:v})}const y=new at;y.position.set(0,-.36,.05),m[0].group.add(y);{const v=[];bt(v,new St(.022,.028,.34,8),0,-.1,0),bt(v,new Ze(.06,8,6),0,-.3,0,[1,1.3,1]);for(const C of[0,1.6,3.1,4.7])bt(v,new un(.018,.06,4),Math.sin(C)*.06,-.3,Math.cos(C)*.06,null,[Math.cos(C)*1.4,0,-Math.sin(C)*1.4]);y.add(new re(Dn(v),a))}return{group:t,body:p,arms:m,legs:M,club:y,tier:s,height:gu,maxHp:e.hp}}class M1 extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new A1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new z1(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=$r.extractUrlBase(e);o=$r.resolveURL(l,this.path)}else o=$r.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new af(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rp){try{o[rt.KHR_BINARY_GLTF]=new H1(e)}catch(h){i&&i(h);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new eb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new w1;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new G1(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new V1;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new W1;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function S1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class b1{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ve(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Yt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new di(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Yl(u),l.distance=h;break;case"spot":l=new Ry(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class w1{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){const i=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}}class E1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class A1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(a,a)}return Promise.all(r)}}class T1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class R1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class C1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class P1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class I1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}}class L1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class N1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class D1{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class U1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class O1{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class F1{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class B1{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class k1{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class z1{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const x=new $e,p=new U,m=new Kt,M=new U(1,1,1),y=new Bd(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,x.compose(p,m,M));for(const v in c)if(v==="_COLOR_0"){const C=c[v];y.instanceColor=new Tl(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const rp="glTF",oo=12,op={JSON:1313821514,BIN:5130562};class H1{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,oo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-oo,r=new DataView(e,oo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===op.JSON){const l=new Uint8Array(e,oo+o,a);this.content=n.decode(l)}else if(c===op.BIN){const l=oo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class G1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=xu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=xu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=ar[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}h(f)},a,l,Yt,d)})})}}class V1{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class W1{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class ap extends qr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,p=-2*f+3*d,m=f-d,M=1-p,y=m-d+h;for(let v=0;v!==a;v++){const C=o[x+v+a],A=o[x+v+c]*u,T=o[g+v+a],E=o[g+v]*u;r[v]=M*C+y*A+p*T+m*E}return r}}const X1=new Kt;class q1 extends ap{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return X1.fromArray(r).normalize().toArray(r),r}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cp={9728:on,9729:fn,9984:rh,9985:vo,9986:gr,9987:ii},lp={33071:Mi,33648:xo,10497:yi},_u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Y1={CUBICSPLINE:void 0,LINEAR:yr,STEP:vr},vu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function K1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Je({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),s.DefaultMaterial}function ss(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $1(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function j1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function J1(s){let e;const t=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yu(t.attributes):e=s.indices+":"+yu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+yu(s.targets[n]);return e}function yu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Mu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Q1=new $e;class eb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new S1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ay(this.options.manager):this.textureLoader=new Ly(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new af(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ss(r,a,i),gi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load($r.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=_u[i.type],a=ar[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Rt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=_u[i.type],l=ar[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,p;if(f&&f!==h){const m=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(M);y||(x=new l(a,m*f,i.count*f/u),y=new bd(x,f/u),t.cache.add(M,y)),p=new Lr(y,c,d%f/u,g)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),p=new Rt(x,c,g);if(i.sparse!==void 0){const m=_u.SCALAR,M=ar[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new M(o[1],y,i.sparse.count*m),A=new l(o[2],v,i.sparse.count*c);a!==null&&(p=new Rt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,E=C.length;T<E;T++){const O=C[T];if(p.setX(O,A[T*c]),c>=2&&p.setY(O,A[T*c+1]),c>=3&&p.setZ(O,A[T*c+2]),c>=4&&p.setW(O,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=cp[d.magFilter]||fn,u.minFilter=cp[d.minFilter]||ii,u.wrapS=lp[d.wrapS]||yi,u.wrapT=lp[d.wrapT]||yi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const p=new Bt(x);p.needsUpdate=!0,d(p)}),t.load($r.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),gi(h,o),h.userData.mimeType=o.mimeType||Z1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ha,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Rl,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Je}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){const h=i[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qt);const u=r.alphaMode||vu.OPAQUE;if(u===vu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===vu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ge(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==nn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nn){const h=r.emissiveFactor;a.emissive=new Ve().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&o!==nn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),gi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ss(i,h,r),h})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return up(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=J1(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=up(new Ct,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?K1(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],p=o[f];let m;const M=l[f];if(p.mode===wn.TRIANGLES||p.mode===wn.TRIANGLE_STRIP||p.mode===wn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Lv(x,M):new re(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===wn.TRIANGLE_STRIP?m.geometry=tp(m.geometry,mh):p.mode===wn.TRIANGLE_FAN&&(m.geometry=tp(m.geometry,kc));else if(p.mode===wn.LINES)m=new Uv(x,M);else if(p.mode===wn.LINE_STRIP)m=new la(x,M);else if(p.mode===wn.LINE_LOOP)m=new Ov(x,M);else if(p.mode===wn.POINTS)m=new Il(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&j1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),gi(m,r),p.extensions&&ss(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ss(i,h[0],r),h[0];const d=new at;r.extensions&&ss(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Wi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new $e;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Al(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],x=f.target,p=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],p=h[4],m=[];for(let M=0,y=d.length;M<y;M++){const v=d[M],C=f[M],A=g[M],T=x[M],E=p[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const O=n._createAnimationTracks(v,C,A,T,E);if(O)for(let _=0;_<O.length;_++)m.push(O[_])}return new Vl(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Q1)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Nd:l.length>1?u=new at:l.length===1?u=l[0]:u=new Mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),gi(u,r),r.extensions&&ss(n,u,r),r.matrix!==void 0){const h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new at;n.name&&(r.name=i.createUniqueName(n.name)),gi(r,n),n.extensions&&ss(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof In||d instanceof Bt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Di[r.path]===Di.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Di[r.path]){case Di.weights:l=Js;break;case Di.rotation:l=Zs;break;case Di.position:case Di.scale:l=er;break;default:n.itemSize===1?l=Js:l=er;break}const u=i.interpolation!==void 0?Y1[i.interpolation]:yr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Di[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Mu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Zs?q1:ap;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tb(s,e,t){const n=e.attributes,i=new zn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){const u=Mu(ar[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,c=new U;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Mu(ar[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function up(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=xu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ht.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),gi(s,e),tb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$1(s,e.targets,t):s})}const nb="Idle",ib=.6,sb=.1,rb=new M1;function ob(s,{height:e=On,clip:t=nb}={}){return new Promise((n,i)=>{rb.load(s,r=>n(ab(r,e,t)),void 0,i)})}function ab(s,e,t){const n=s.scene;n.traverse(h=>{if(h.isMesh){h.castShadow=!0,h.receiveShadow=!0;for(const d of hp(h.material))d&&("roughness"in d&&(d.roughness=ib),"metalness"in d&&(d.metalness=sb))}});const i=new at;n.updateWorldMatrix(!0,!0);const r=new zn().setFromObject(n),o=r.getSize(new U);if(o.y>1e-4){const h=e/o.y;n.scale.multiplyScalar(h),r.min.multiplyScalar(h),r.max.multiplyScalar(h)}n.position.x-=(r.min.x+r.max.x)/2,n.position.z-=(r.min.z+r.max.z)/2,n.position.y-=r.min.y,i.add(n);const a=new Xy(n),c=new Map;for(const h of s.animations)c.set(h.name,a.clipAction(h));let l=null;function u(h,d=.25){const f=c.get(h);return!f||f===l?!!f:(f.reset().play(),l?l.crossFadeTo(f,d,!1):d>0&&f.fadeIn(d),l=f,!0)}return!u(t,0)&&s.animations.length&&u(s.animations[0].name,0),{group:i,height:e,clips:[...c.keys()],play:u,update(h){a.update(h)},dispose(){a.stopAllAction(),a.uncacheRoot(n),cb(n)}}}function hp(s){return s?Array.isArray(s)?s:[s]:[]}function cb(s){const e=new Set;s.traverse(t=>{if(t.isMesh){t.geometry?.dispose();for(const n of hp(t.material))e.add(n)}});for(const t of e){for(const n of Object.values(t))n&&n.isTexture&&n.dispose();t.dispose()}}const lb=.45;function ub(s){const e=s.split("-")[1]??"red",t=sp({tier:e});let n=0;return{...t,update(i){n+=i,t.body.position.y=Math.sin(n*1.8)*.006;for(const[r,o]of t.arms.entries())o.group.rotation.x=.12+Math.sin(n*1.8+r)*.03,o.group.rotation.z=o.side*.18},setGait(){}}}const Su=1.5;function hb({renderer:s,modelUrl:e=null,who:t="vexo"}){const n=new Ir;n.background=new Ve(658966);const i=s.toneMapping,r=s.toneMappingExposure,o=s.outputColorSpace;s.toneMapping=nh,s.toneMappingExposure=1,s.outputColorSpace=Et;const a=s.shadowMap.enabled,c=s.shadowMap.type;s.shadowMap.enabled=!0,s.shadowMap.type=Zu;const l=new Ot(38,window.innerWidth/window.innerHeight,.05,100),u=new Cr(s);n.environment=u.fromScene(new pu,.04).texture,n.environmentIntensity=.55,u.dispose(),n.add(new Iy(15266047,.8));const h=new di(16774634,2.5);h.position.set(5,10,7),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.bias=-1e-4,h.shadow.radius=4,h.shadow.camera.near=8,h.shadow.camera.far=20,h.shadow.camera.left=-1.8,h.shadow.camera.right=1.8,h.shadow.camera.top=1.8,h.shadow.camera.bottom=-1.8,n.add(h);const d=new di(10273023,1.15);d.position.set(3.2,1.4,1.6),n.add(d);const f=new di(10420176,1);f.position.set(.6,2,-3.6),n.add(f);const g=new re(new St(.62,.7,.06,48),new Je({color:1053724,metalness:.2,roughness:.85}));g.position.y=-.03,g.receiveShadow=!0,n.add(g);const x=new re(new Wn(.63,.008,8,64),new nn({color:4835583}));x.rotation.x=Math.PI/2,x.position.y=.012,n.add(x);const p=new at;n.add(p);const m=t.startsWith("boko")?ub(t):mu();p.add(m.group),m.group.traverse(F=>{F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0)});let M=!1,y=m;e&&ob(e).then(F=>{if(M){F.dispose();return}p.remove(m.group),p.add(F.group),y=F}).catch(F=>{console.warn(`[character] could not load ${e}, keeping the built-in Vexo:`,F)});let v=0,C=.06,A=0,T=!1,E=0;function O(){const Y=On*.52;l.position.set(0,Y+Math.sin(C)*3.7,Math.cos(C)*3.7),l.lookAt(0,On*.52,0)}O();function _(F){T=!0,E=F.clientX}function S(F){T&&(v+=(F.clientX-E)*.012,E=F.clientX,A=Su)}function P(){T=!1}function I(F){F.code==="ArrowLeft"&&(v-=.2,A=Su),F.code==="ArrowRight"&&(v+=.2,A=Su),F.code==="ArrowUp"&&(C=Math.min(.9,C+.06),O()),F.code==="ArrowDown"&&(C=Math.max(-.35,C-.06),O())}window.addEventListener("pointerdown",_),window.addEventListener("pointermove",S),window.addEventListener("pointerup",P),window.addEventListener("keydown",I);const z=document.createElement("div");z.id="character-label",z.innerHTML=`
    <div class="character-label__name">VEXO</div>
    <div class="character-label__hint">Drag to turn · ↑ ↓ to tilt</div>
  `,document.body.appendChild(z);function q(F){A>0?A-=F:T||(v+=lb*F),p.rotation.y=v,y.update(F)}function w(){s.render(n,l)}function W(F=window.innerWidth,Y=window.innerHeight){l.aspect=F/Y,l.updateProjectionMatrix()}return{update:q,render:w,onResize:W,dispose(){M=!0,s.toneMapping=i,s.toneMappingExposure=r,s.outputColorSpace=o,s.shadowMap.enabled=a,s.shadowMap.type=c,y!==m&&y.dispose?.(),n.environment?.dispose()},setAngle(F){v=F,A=1/0,p.rotation.y=v},get vexo(){return y}}}const db=8161430,fb=15659509,dp=4828159,fp=.46,bu=.32,wu=4,pb=Math.ceil(wu/bu);function mb(){const s=new at;s.visible=!1;const e=new Je({color:db,metalness:.75,roughness:.42}),t=new Je({color:fb,metalness:.5,roughness:.5}),n=new Je({color:dp,emissive:dp,emissiveIntensity:1.4,roughness:.5}),i=[];for(const h of[-1,1]){const d=new St(.035,.035,1,10);d.translate(0,-.5,0);const f=new re(d,e);f.position.x=h*fp/2,s.add(f),i.push(f)}const r=[];for(let h=0;h<pb;h++){const d=new re(new St(.022,.022,fp,8),t);d.rotation.z=Math.PI/2,d.position.y=-bu*(h+1),d.visible=!1,s.add(d),r.push(d)}const o=new re(new Wn(.5,.035,8,28),n);o.rotation.x=Math.PI/2,s.add(o);let a=wu,c=0;function l(){return a*c}function u(){const h=l();for(const d of i)d.scale.y=Math.max(h,.001);for(const[d,f]of r.entries())f.visible=-f.position.y<=h-.04;o.position.y=-h,o.visible=c>.02,s.visible=c>.001}return u(),{group:s,setHeight(h){a=Math.min(Math.max(h,.4),wu),u()},setExtension(h){c=h<0?0:h>1?1:h,u()},get height(){return a},get extension(){return c},rungSpacing:bu}}const Eu=22,pp=2*Math.PI*Eu,Au=.6;function gb(){const s=document.createElement("div");s.id="stamina-wheel",s.hidden=!0,s.innerHTML=`
    <svg viewBox="0 0 56 56" width="56" height="56">
      <circle class="stamina-wheel__track" cx="28" cy="28" r="${Eu}" />
      <circle class="stamina-wheel__fill" cx="28" cy="28" r="${Eu}"
              stroke-dasharray="${pp.toFixed(2)}" />
    </svg>
  `,document.body.appendChild(s);const e=s.querySelector(".stamina-wheel__fill");let t=!1,n=0,i=-1,r=null;return{update(o,a,c,l){l!=null&&(o<.999||a)?n=Au:n>0&&(n-=c);const h=n>0&&l!=null;if(h!==t&&(s.hidden=!h,t=h),!h)return;s.style.transform=`translate(${Math.round(l.x)}px, ${Math.round(l.y)}px)`,s.style.opacity=n<Au?(n/Au).toFixed(2):"1";const d=Math.round(pp*(1-Math.max(0,Math.min(1,o))));d!==i&&(e.style.strokeDashoffset=String(d),i=d),a!==r&&(s.classList.toggle("stamina-wheel--winded",a),r=a)},hide(){s.hidden=!0,t=!1,n=0}}}const _b="♥";function xb(){const s=document.createElement("div");s.id="hearts",s.hidden=!0,document.body.appendChild(s);let e=-1,t=0;return{set(n,i){if(!(n===e&&i===t)){e=n,t=i,s.innerHTML="";for(let r=0;r<i;r++){const o=document.createElement("span");o.className=r<n?"heart":"heart heart--spent",o.textContent=_b,s.appendChild(o)}s.hidden=!1}},flash(){s.classList.remove("hearts--hit"),s.offsetWidth,s.classList.add("hearts--hit")},hide(){s.hidden=!0,e=-1}}}const ao=1.5,vb=3.3,yb=6.2,Fa=.55,mp=.2,Mb=.62,Sb=.3,bb=.25,wb=.05,gp=2.2,Eb=.11,Ab=.08,Tb=.15,_p=.75,Rb=.38,Tu=1.7,Cb=2.6,xp=.8,Pb=22,Ib=4.5,Lb=.9,Nb=1.3,Db=.55,vp=.7,Ub=.35,yp=.5,Ob=.4,Mp=.55,Ba=.32,Sp=2,Fb=2.4,Bb=1.3,bp=Math.PI*.19,co=4.6,wp=2,kb=6.2,zb=5,rs=5,Hb=.32,Ep=55,Gb=.7,Vb=4,Wb=1.5,Ap=3.4,Xb=2.4,qb=2.5,Tp=["KeyL"],os=new U(0,1,0);function Ui(s,e){return 1-Math.pow(2,-s/e)}function ka(s){return s<-1?-1:s>1?1:s}function Yb(s,e,t){return s<e?e:s>t?t:s}function lo(s,e){let t=(e-s)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Kb({scene:s,camera:e,ship:t,surface:n,input:i,renderer:r,monsters:o=null,onShot:a=()=>{},onDown:c=()=>{},onLanded:l=()=>{},onAboard:u=()=>{}}){const h=new Cr(r),d=h.fromScene(new pu,.04).texture;h.dispose();const f=mu({suitLight:!1,environment:d}),g=mb();let x=!1;function p(){x||(s.add(f.group),s.add(g.group),x=!0)}function m(){x&&(s.remove(f.group),s.remove(g.group),x=!1)}const M=document.createElement("div");M.id="foot-prompt",M.hidden=!0,document.body.appendChild(M);const y=gb(),v=xb(),C=new U,A=new U,T=new U;let E="off",O=0,_=0,S=0,P=xp,I=0;const z=new U,q=new U,w=new U,W=new U,F=new Kt,Y=new U,k=new Kt,G=new U;let $=0,J=0,K=0,Z=1,ce=0,pe=!1,we=!1,me=rs,Me=!1,Ne=0,ne=0,L=0,le=0,ae=0;const se=new U,ve=new U,Te=new U,Ee=new U,D=new U,b=new U,j=[0,0];let ie=!1;const oe=n.world;function te(xe,Se){return Qe.y+oe.groundHeightAt(xe-Qe.x,Se-Qe.z)}let ke=null;function he(xe){if(xe!==ke){if(ke=xe,!xe){M.hidden=!0;return}M.textContent=xe,M.hidden=!1}}function be(){if(E!=="off"||!n.active)return;I=new $t().setFromQuaternion(t.mesh.quaternion,"YXZ").y,Y.copy(t.mesh.position),k.copy(t.mesh.quaternion),F.setFromEuler(new $t(0,I,0,"YXZ")),W.set(Y.x,n.hullGroundY(t)+e1,Y.z);const Se=t.mesh.scale.x;let qe=-1;if(!it(-1,Se)){if(!it(1,Se)){S=qb;return}qe=1}p(),E="settle",O=0,P=Math.min(Ib,xp+Math.max(0,Y.y-W.y)/Pb),n.park(),_e(qe,Se),J=q.y,G.copy(z).addScaledVector(w,Ba),G.y=J,$=Math.atan2(-w.x,-w.z),f.setGait("climb"),Ce(),f.group.visible=!1,g.setExtension(0),i.consumeAnyJustPressed(),he(Le.onFoot.skip)}function it(xe,Se){return b.set(xe*yp,0,Mp).multiplyScalar(Se).applyQuaternion(F).add(W),oe.isClear(b.x-Qe.x,b.z-Qe.z,1.2)}function _e(xe,Se){q.set(xe*yp,Ob,Mp).multiplyScalar(Se).applyQuaternion(F).add(W),w.set(xe,0,0).applyQuaternion(F).setY(0).normalize();const qe=te(q.x,q.z);z.set(q.x,qe,q.z),g.group.position.copy(q),g.group.rotation.set(0,Math.atan2(w.x,w.z),0),g.setHeight(q.y-qe),g.setExtension(0)}function Ce(){f.group.position.copy(G),f.group.rotation.y=$}function ze(){if(E==="walk"||E==="stepoff"){Ee.copy(G).addScaledVector(os,On*.62);const{dx:xe,dz:Se,boom:qe}=Ye(),et=qe*Math.cos(K),Nt=qe*Math.sin(K);Te.set(xe,0,Se).multiplyScalar(et).add(Ee).addScaledVector(os,1.15+(co-qe)*.2+Nt),He();return}if(E==="settle"||E==="deploy"){Ee.copy(t.mesh.position).addScaledVector(os,.9),Te.copy(t.mesh.position).addScaledVector(w,11).addScaledVector(os,3.4),b.set(Math.sin(I),0,Math.cos(I)).multiplyScalar(3.5),Te.add(b),He();return}Ee.copy(G).addScaledVector(os,On*.5),Te.copy(z).addScaledVector(w,5.6).addScaledVector(os,2.2),b.set(Math.sin(I),0,Math.cos(I)).multiplyScalar(1.6),Te.add(b),Te.y=Math.max(Te.y,Ee.y-.4),He()}function He(){const xe=te(Te.x,Te.z)+.7;Te.y<xe&&(Te.y=xe);const Se=6;for(let qe=1;qe<Se;qe++){const et=qe/Se,Nt=Te.x+(Ee.x-Te.x)*et,Wt=Te.z+(Ee.z-Te.z)*et,rn=(te(Nt,Wt)+.5-Ee.y*et)/(1-et);rn>Te.y&&(Te.y=rn)}}function Fe(xe,Se){return n.parked&&Math.hypot(xe-W.x,Se-W.z)<kb?!1:oe.isClear(xe-Qe.x,Se-Qe.z,.5)}function Ye(){const xe=ae+Math.PI;for(const et of[0,.42,-.42,.85,-.85,1.3,-1.3,1.9,-1.9]){const Nt=xe+et,Wt=Math.sin(Nt),ln=Math.cos(Nt);if(Fe(G.x+Wt*co,G.z+ln*co))return{dx:Wt,dz:ln,boom:co}}const Se=Math.sin(xe),qe=Math.cos(xe);for(let et=co-.6;et>wp;et-=.6)if(Fe(G.x+Se*et,G.z+qe*et))return{dx:Se,dz:qe,boom:et};return{dx:Se,dz:qe,boom:wp}}function Ge(xe){ze();const Se=E==="walk"?.13:.34;!ie||E==="settle"?(e.position.copy(Te),D.copy(Ee),ie=!0):(e.position.lerp(Te,Ui(xe,Se)),D.lerp(Ee,Ui(xe,Se))),e.up.set(0,1,0),e.lookAt(D)}function ut(){t.mesh.position.copy(W),t.mesh.quaternion.copy(F),g.setExtension(1),G.copy(z).addScaledVector(w,Sp),G.y=te(G.x,G.z),$=Math.atan2(w.x,w.z),f.group.visible=!0,f.setGait("idle"),Ce(),De()}function X(xe,Se=null,qe=null){if(!(E!=="walk"||Ne>0||le>0)){if(Ne=Wb,Se!=null){const et=G.x-Se,Nt=G.z-qe,Wt=Math.hypot(et,Nt)||1;se.x=et/Wt*Ap,se.z=Nt/Wt*Ap}me=Math.max(0,me-xe),v.set(me,rs),v.flash(),Z=0,ce=gp,me<=0&&(le=Xb,f.setGait("dying"),se.set(0,0,0),he(null),y.hide())}}function De(){E="walk",O=0,Z=1,ce=0,we=!1,me=rs,Ne=0,le=0,Me=!1,v.set(me,rs),l(),K=0,ae=$,se.set(0,0,0),_=zb,ie=!1}function Q(){const xe=Math.min(1,O/P),Se=1-(1-xe)*(1-xe);t.mesh.position.lerpVectors(Y,W,Se),t.mesh.quaternion.slerpQuaternions(k,F,Se),t.velocity.set(0,0,0),xe>=1&&(E="deploy",O=0)}function ue(){const xe=Math.min(1,O/Lb);g.setExtension(xe),xe>=1&&(E="down",O=0,f.group.visible=!0,f.setGait("climb"))}function Pe(xe,Se){J+=(Se?-1:1)*Nb*xe;const qe=z.y,et=q.y-.15,Nt=b.copy(z).addScaledVector(w,Ba),Wt=Ui(xe,.12);G.x+=(Nt.x-G.x)*Wt,G.z+=(Nt.z-G.z)*Wt,$+=lo($,Math.atan2(-w.x,-w.z))*Wt,Se?(G.y=Math.max(qe,J),J<=qe&&(J=qe,E="stepoff",O=0,f.setGait("walk",ao*.7))):(G.y=Math.min(et,J),J>=et&&(J=et,E="stow",O=0,f.group.visible=!1,he(null))),Ce()}function Oe(xe){const Se=Math.min(1,O/Db),qe=Ba+(Sp-Ba)*Se;G.copy(z).addScaledVector(w,qe),G.y=te(G.x,G.z);const et=Math.atan2(w.x,w.z);$+=lo($,et)*Ui(xe,.12),ae=$,Ce(),Se>=1&&De()}function ot(){g.setExtension(1-Math.min(1,O/vp)),O>=vp&&(E="off",g.setExtension(0),n.unpark(),ie=!1,we=!1,y.hide(),v.hide(),m(),u())}function vt(xe,Se){if(le>0||Me){se.set(0,0,0);return}const qe=ka(Se?.lookX??0),et=ka(Se?.lookY??0),Nt=Se?.lookTurnX??0,Wt=Se?.lookTurnY??0;ae+=qe*Fb*xe+Nt,K=Yb(K-et*Bb*xe-Wt,-bp,bp);const ln=Math.abs(qe)>.05||Math.abs(Nt)>.0015,rn=ka(Se?.stickYaw??Se?.yaw??0),ki=ka(Se?.stickThrottle??Se?.throttle??0);let Qt=Math.hypot(rn,ki);Qt>1&&(Qt=1);const Zn=i.keyboard.isDown("ShiftLeft")||i.keyboard.isDown("ShiftRight")||i.gamepad.isButtonDown(Tt.B),fr=Zn&&Qt>.15;Zn&&!pe&&Z>0&&ce<=0&&(Z=Math.max(0,Z-wb)),pe=Zn,ce>0&&(ce-=xe);const Qn=fr&&ce<=0&&Z>0;if(we=Qn,Qn){const V=Z<bb?mp*.5:mp;Z-=V*xe,Z<=0&&(Z=0,ce=gp)}else Z=Math.min(1,Z+(ce>0?Sb:Mb)*xe);const ds=Qt<Fa?ao*(Qt/Fa):ao+(vb-ao)*((Qt-Fa)/(1-Fa)),pr=ce>0?Math.min(ds,ao):Qn?yb:ds;if(Qt>.05){const V=ae+Math.atan2(rn,ki);ve.set(Math.sin(V),0,Math.cos(V)).multiplyScalar(pr),$+=lo($,V)*Ui(xe,Ab)}else ve.set(0,0,0);const mr=Ui(xe,Eb);se.x+=(ve.x-se.x)*mr,se.z+=(ve.z-se.z)*mr;const fs=Math.hypot(se.x,se.z);if(fs>.05){G.x+=se.x*xe,G.z+=se.z*xe,oe.resolveWalk(G.x-Qe.x,G.z-Qe.z,Rb,j),G.x=j[0]+Qe.x,G.z=j[1]+Qe.z;const V=G.x-W.x,H=G.z-W.z,ee=Math.hypot(V,H);ee<Tu&&ee>1e-4&&(G.x=W.x+V/ee*Tu,G.z=W.z+H/ee*Tu)}fs>Tb?f.setGait("walk",fs):f.setGait("idle");const go=Math.abs(rn)<.4&&Qt>.05;!ln&&go&&(ae+=lo(ae,$)*Ui(xe,_p),K+=(0-K)*Ui(xe,_p*2)),G.y=te(G.x,G.z),Ce(),C.copy(G).addScaledVector(os,On*.75).project(e);const R=C.z<1&&Math.abs(C.x)<1.4&&Math.abs(C.y)<1.4;if(y.update(Z,ce>0,xe,R?{x:(C.x*.5+.5)*window.innerWidth+52,y:(-C.y*.5+.5)*window.innerHeight}:null),ne>0&&(ne-=xe),L>0&&(L-=xe),(i.keyboard.isDown("Space")||i.gamepad.isButtonDown(Tt.R2)||i.gamepad.isButtonDown(Tt.X))&&ne<=0&&o&&(L=Vb,f.getMuzzle(A))){ne=Hb;const V=o.aimAt(A,$,Gb,Ep);V?(T.copy(V).sub(A).normalize(),$+=lo($,Math.atan2(T.x,T.z))*.6):T.set(Math.sin($),0,Math.cos($));const H=o.shoot(A,T,Ep);f.fire(),a(A,T,H)}f.setArmed(L>0,$),Math.hypot(G.x-z.x,G.z-z.z)<Cb?(he(Le.onFoot.board),(i.keyboard.consumeJustPressed(Tp)||i.gamepad.consumeJustPressed(Tt.A))&&(E="up",O=0,J=G.y,f.setGait("climb"),he(null))):_>0?he(Le.onFoot.controls):he(null)}return{get active(){return E!=="off"},get cutscene(){return E==="settle"||E==="deploy"||E==="down"||E==="stepoff"},get state(){return E},vexo:f,ladder:g,get position(){return G},get heading(){return $},get stamina(){return Z},get winded(){return ce>0},get sprinting(){return we},get hearts(){return me},get maxHearts(){return rs},get down(){return le>0||Me},get quarry(){return E==="walk"&&le<=0?G:null},takeHit:X,begin:be,update(xe,Se){if(E==="off"){S>0&&(S-=xe),Se&&n.active?(he(S>0?Le.onFoot.noRoom:Le.onFoot.climbOut),(i.keyboard.consumeJustPressed(Tp)||i.gamepad.consumeJustPressed(Tt.A))&&be()):he(null);return}switch(O+=xe,_>0&&(_-=xe),this.cutscene&&O>Ub&&i.consumeAnyJustPressed()&&(ut(),he(null)),E){case"settle":Q();break;case"deploy":ue();break;case"down":Pe(xe,!0);break;case"stepoff":Oe(xe);break;case"walk":vt(xe,Se);break;case"up":Pe(xe,!1);break;case"stow":ot();break}Ne>0&&(Ne-=xe),le>0&&(le-=xe,le<=0&&(le=0,Me=!0,c())),f.update(xe),E!=="off"&&Ge(xe),this.cutscene?he(Le.onFoot.skip):E!=="walk"&&he(null)},prewarm(xe,Se){const qe=f.group.visible;f.group.position.copy(Qe),f.group.visible=!0,g.group.position.copy(Qe),g.setHeight(2.6),g.setExtension(1),xe.compile(s,Se);const et=new Ot(50,Se.aspect,.1,5e3);et.position.copy(Qe).add(new U(3.5,1.6,4.5)),et.lookAt(Qe.x,Qe.y+1,Qe.z),xe.render(s,et),f.group.visible=qe,g.setExtension(0),xe.render(s,Se)},reset(){E!=="off"&&n.unpark(),E="off",O=0,S=0,Me=!1,le=0,me=rs,v.set(me,rs),ie=!1,f.group.visible=!1,g.setExtension(0),he(null),we=!1,y.hide(),v.hide(),m()}}}const Rp=4,$b=3,jb=24,Jb=Math.cos(1.1),Zb=7,Qb=8,ew=55,Cp=4.5,Pp=.9,Ru=3.4,Ip=2,tw=3.2,Lp=1.9,cr=.42,Np=.22,nw=.9,iw=.45;function sw({scene:s,world:e,origin:t}){const n=new at;n.visible=!1,s.add(n);const i=new Je({color:16751164,emissive:16742940,emissiveIntensity:1.6,roughness:.6}),r=new Je({color:5453855,roughness:.95}),o=new Je({color:7164979,roughness:.9}),a=[],c=[],l=[[2.4,1.2],[-2.1,1.9],[1.1,-2.4]],u=(w,W)=>t.y+e.groundHeightAt(w,W),h=620;for(let w=0;w<Rp;w++){const W={x:0,z:0,cell:null,members:[]};c.push(W),y(W);for(let F=0;F<$b;F++)C(W,0,0,F===0?"blue":"red",!1);C(W,0,0,"black",!0)}function d(w,W,F=0){let Y=Math.imul(w|0,668265261)^Math.imul(W|0,374761393)^Math.imul(F,2654435761);return Y=Math.imul(Y^Y>>>15,2246822507),Y=Math.imul(Y^Y>>>13,3266489909),((Y^Y>>>16)>>>0)/4294967296}const f=new Map;function g(w,W){const F=`${w},${W}`;if(f.has(F))return f.get(F);let Y=null;if(d(w,W,7)<=.42){const k=(w+.2+d(w,W,11)*.6)*h,G=(W+.2+d(w,W,13)*.6)*h;Y=M(k,G,7)}return f.set(F,Y),Y}const x=2;function p(w,W){const F=Math.floor(w/h),Y=Math.floor(W/h),k=[],G=3;let J=c.every(me=>me.cell===null)?1/0:x,K=!1;const Z=[];for(let me=-G;me<=G;me++)for(let Me=-G;Me<=G;Me++)Z.push([F+Me,Y+me,Me*Me+me*me]);Z.sort((me,Me)=>me[2]-Me[2]);for(const[me,Me]of Z){if(!f.has(`${me},${Me}`)){if(J<=0){K=!0;continue}J-=1}const ne=g(me,Me);ne&&k.push({key:`${me},${Me}`,site:ne,d2:(ne.x-w)**2+(ne.z-W)**2})}E=K,k.sort((me,Me)=>me.d2-Me.d2);const ce=k.slice(0,Rp),pe=new Set(ce.map(me=>me.key)),we=c.filter(me=>!pe.has(me.cell));for(const me of ce){if(c.some(Ne=>Ne.cell===me.key))continue;const Me=we.pop();if(!Me)break;m(Me,me.key,me.site.x,me.site.z)}}function m(w,W,F,Y){w.cell=W,w.x=F,w.z=Y,v(w);for(const[k,G]of w.members.entries()){const $=k/w.members.length*Math.PI*2+d(F|0,Y|0)*6,J=G.boss?1.9:2.6;G.home.set(F+Math.sin($)*J,Y+Math.cos($)*J),G.pos.copy(G.home),G.state="idle",G.timer=0,G.hp=G.boko.maxHp*(G.boss?2:1),G.boko.group.rotation.set(0,G.heading,0),G.boko.group.visible=!0,O(G)}}function M(w,W,F){if(e.isClear(w,W,F))return{x:w,z:W};for(let Y=9;Y<=45;Y+=9)for(let k=0;k<Math.PI*2;k+=Math.PI/4){const G=w+Math.sin(k)*Y,$=W+Math.cos(k)*Y;if(e.isClear(G,$,F))return{x:G,z:$}}return null}function y(w){const W=new re(new Wn(.55,.13,6,12),r);W.rotation.x=Math.PI/2,n.add(W),w.stones=W;const F=new re(new un(.32,.8,7),i);n.add(F),w.flame=F,w.crates=l.map((Y,k)=>{const G=new re(new Gt(.7,.62,.7),o);return G.rotation.y=k*.8,n.add(G),G})}function v(w){const W=u(w.x,w.z);w.stones.position.set(w.x+t.x,W+.1,w.z+t.z),w.flame.position.set(w.x+t.x,W+.5,w.z+t.z);for(const[F,[Y,k]]of l.entries())w.crates[F].position.set(w.x+Y+t.x,u(w.x+Y,w.z+k)+.31,w.z+k+t.z)}function C(w,W,F,Y,k){const G=sp({tier:Y});k&&G.group.scale.setScalar(1.35);const $={boko:G,camp:w,home:new ge(W,F),pos:new ge(W,F),heading:Math.random()*Math.PI*2,state:"idle",timer:0,hp:G.maxHp*(k?2:1),boss:k,phase:Math.random()*10,lastSeen:0,hitCooldown:0};return n.add(G.group),a.push($),w.members.push($),O($),$}const A=new U,T=new ge(1/0,1/0);let E=!1;function O(w){w.boko.group.position.set(w.pos.x+t.x,u(w.pos.x,w.pos.y),w.pos.y+t.z),w.boko.group.rotation.y=w.heading}function _(w,W){const F=W.x-w.pos.x,Y=W.y-w.pos.y,k=Math.hypot(F,Y);if(k>jb)return!1;if(k<Zb)return!0;const G=Math.sin(w.heading),$=Math.cos(w.heading);return(F*G+Y*$)/(k||1)>Jb}function S(w,W){for(const F of w.members)F.state==="dead"||F.state==="chase"||(F.state="alert",F.timer=.35+Math.random()*.25,F.lastSeen=W)}function P(w,W,F,Y,k){const G=W-w.pos.x,$=F-w.pos.y,J=Math.hypot(G,$);if(J<.05)return J;let Z=Math.atan2(G,$)-w.heading;for(;Z>Math.PI;)Z-=Math.PI*2;for(;Z<-Math.PI;)Z+=Math.PI*2;w.heading+=Math.max(-Ru*k,Math.min(Ru*k,Z));const ce=Math.min(J,Y*k);if(Math.abs(Z)<1.2){const pe=w.pos.x+Math.sin(w.heading)*ce,we=w.pos.y+Math.cos(w.heading)*ce;e.isClear(pe,we,.45)?(w.pos.x=pe,w.pos.y=we):w.heading+=.8*k*Ru}return J}function I(w,W,F){const Y=w.boko;w.phase+=F*(W?9:1.6);const k=Math.sin(w.phase);if(w.state!=="dead"){for(const[G,$]of Y.legs.entries())$.group.rotation.x=W?k*(G?-.7:.7):0;for(const[G,$]of Y.arms.entries()){const J=.18+(w.state==="chase"?.35:0);$.group.rotation.x=J+(W?k*(G?.5:-.5):k*.05),$.group.rotation.z=$.side*.2}if(w.state==="attack"){const G=w.timer,$=G<cr?-(G/cr)*2.2:-2.2+(G-cr)/Np*3.4;Y.arms[0].group.rotation.x=Math.min(1.2,$)}w.state==="alert"?(Y.arms[0].group.rotation.x=-1.4,Y.arms[1].group.rotation.x=-1.2,Y.body.rotation.x=-.18):Y.body.rotation.x=w.state==="chase"?.16:0}}function z(w){let W=0;for(const F of w.members)F.state==="attack"&&(W+=1);return W}const q=new ge;return{group:n,monsters:a,camps:c,setActive(w){n.visible=w},focus(w,W){!(Math.abs(w-T.x)>=60||Math.abs(W-T.y)>=60)&&!E||(T.set(w,W),p(w,W))},update(w,W,F){if(!n.visible)return;for(const k of c)k.flame.scale.setScalar(.85+Math.sin(performance.now()*.006+k.x)*.12);const Y=W!=null;Y&&q.set(W.x-t.x,W.z-t.z);for(const k of a){k.timer+=w,k.hitCooldown>0&&(k.hitCooldown-=w);let G=!1;switch(k.state){case"idle":{const $=k.phase*.35+k.home.x,J=k.home.x+Math.sin($)*1.4,K=k.home.y+Math.cos($)*1.4;G=P(k,J,K,Pp,w)>.3,Y&&_(k,q)&&S(k.camp,0);break}case"alert":{k.timer>=.55&&(k.state="chase",k.timer=0);break}case"chase":{if(!Y){k.state="idle",k.timer=0;break}const $=P(k,q.x,q.y,Cp,w);G=!0,_(k,q)?k.lastSeen=0:k.lastSeen+=w,$<=Lp&&z(k.camp)<Ip?(k.state="attack",k.timer=0):$<tw&&z(k.camp)>=Ip?P(k,k.pos.x+(k.pos.x-q.x)*.4,k.pos.y+(k.pos.y-q.y)*.4,Cp*.5,w):(k.lastSeen>Qb||$>ew)&&(k.state="return",k.timer=0);break}case"attack":{k.timer>=cr&&k.timer<cr+w&&Y&&Math.hypot(q.x-k.pos.x,q.y-k.pos.y)<=Lp+.5&&F(k.boss?2:1,k.pos.x+t.x,k.pos.y+t.z),k.timer>=cr+Np+nw&&(k.state=Y?"chase":"return",k.timer=0);break}case"stagger":{k.timer>=iw&&(k.state=Y?"chase":"return",k.timer=0);break}case"return":{G=P(k,k.home.x,k.home.y,Pp*1.8,w)>.4,G||(k.state="idle",k.timer=0),Y&&_(k,q)&&S(k.camp,0);break}}I(k,G,w),k.state!=="dead"&&O(k)}},aimAt(w,W,F=.55,Y=45){const k=Math.sin(W),G=Math.cos(W),$=Math.cos(F);let J=null,K=-1/0;for(const Z of a){if(Z.state==="dead")continue;const ce=Z.pos.x+t.x-w.x,pe=Z.pos.y+t.z-w.z,we=Math.hypot(ce,pe);if(we>Y||we<.001)continue;const me=(ce*k+pe*G)/we;if(me<$)continue;const Me=me*2-we/Y;Me>K&&(K=Me,J=Z)}return J?(A.set(J.pos.x+t.x,u(J.pos.x,J.pos.y)+gu*.55,J.pos.y+t.z),A):null},shoot(w,W,F=60,Y=.55){let k=null,G=F;for(const $ of a){if($.state==="dead")continue;A.set($.pos.x+t.x,u($.pos.x,$.pos.y)+gu*.55,$.pos.y+t.z).sub(w);const J=A.dot(W);J<=0||J>G||Math.sqrt(Math.max(0,A.lengthSq()-J*J))>Y*($.boss?1.5:1)||(k=$,G=J)}return k?(k.hp-=1,k.hp<=0?(k.state="dead",k.timer=0,k.boko.group.rotation.x=-Math.PI/2.2,k.boko.group.position.y=u(k.pos.x,k.pos.y)+.25):(k.state="stagger",k.timer=0),k):null},kill(w){w.state="dead",w.timer=0,w.hp=0,w.boko.group.rotation.x=-Math.PI/2.2,w.boko.group.position.y=u(w.pos.x,w.pos.y)+.25},snapshot(){return c.filter(w=>w.cell).map(w=>({cell:w.cell,hp:w.members.map(W=>W.state==="dead"?0:W.hp)}))},restore(w){if(!Array.isArray(w))return;const W=new Map(w.map(F=>[F.cell,F]));for(const F of c){const Y=W.get(F.cell);if(Y)for(const[k,G]of F.members.entries()){const $=Y.hp[k];$!==void 0&&(G.hp=$,$<=0&&this.kill(G))}}},reset(){for(const w of a)w.pos.copy(w.home),w.state="idle",w.timer=0,w.hp=w.boko.maxHp*(w.boss?2:1),w.boko.group.rotation.set(0,w.heading,0),O(w)}}}const rw=2.2,ow=.011,aw=.25,cw=0,lw=4,uw=5;function hw({renderer:s,input:e,saves:t=null,tablet:n=null}){const i=document.createElement("div");i.id="inventory",i.className="screen-overlay",i.hidden=!0,i.innerHTML=`
    <div class="inventory__panel">
      <div class="inventory__list">
        <h2 class="screen-card__title">${Le.inventory.title}</h2>
        <div class="inventory__tabs" data-tabs></div>
        <ul class="inventory__items" data-items></ul>
        <div class="inventory__tablet" data-tablet hidden></div>
        <div class="inventory__system" data-system hidden>
          <button class="inventory__save" data-save>${Le.inventory.save}</button>
          <p class="inventory__saved" data-saved></p>
        </div>
        <p class="screen-card__hint">${Le.inventory.hint}</p>
      </div>
      <div class="inventory__figure">
        <p class="inventory__figure-hint">${Le.inventory.turnHint}</p>
      </div>
    </div>
  `,document.body.appendChild(i);const r=i.querySelector("[data-items]"),o=i.querySelector("[data-tabs]"),a=i.querySelector("[data-system]"),c=i.querySelector("[data-tablet]"),l=i.querySelector("[data-save]"),u=i.querySelector("[data-saved]"),h=i.querySelector(".inventory__figure"),d=[{id:"weapons",label:Le.inventory.weapons},...n?[{id:"tablet",label:Le.inventory.tablet}]:[],{id:"system",label:Le.inventory.system}];n&&(c.appendChild(n),n.style.display="");let f=0;const g=new Ir;g.background=null;const x=new Ot(32,1,.05,40),p=new Cr(s),m=p.fromScene(new pu,.04).texture;p.dispose(),g.add(new Ma(8363712,1185824,.9));const M=new di(16774116,2.2);M.position.set(-2,3,3.2),g.add(M);const y=new di(10420176,1.1);y.position.set(1.4,2,-3),g.add(y);const v=new at;g.add(v);const C=mu({suitLight:!1,environment:m});v.add(C.group),C.setArmed(!1);const A=On*1.22;function T($){const J=x.fov*Math.PI/180,K=A/2/Math.tan(J/2),Z=On*.42/(Math.tan(J/2)*$),ce=Math.max(K,Z);x.position.set(0,On*.52,ce),x.lookAt(0,On*.5,0)}T(.75);const E=new Ve;let O=!1,_=0,S=!0,P=!1,I=0;function z($){O&&(P=!0,S=!1,I=$.clientX)}function q($){P&&(_+=($.clientX-I)*ow,I=$.clientX)}function w(){P=!1}h.addEventListener("pointerdown",z),window.addEventListener("pointermove",q),window.addEventListener("pointerup",w);let W=[];function F(){o.innerHTML="";for(const[$,J]of d.entries()){const K=document.createElement("span");K.className=$===f?"inventory__tab inventory__tab--on":"inventory__tab",K.textContent=J.label,K.addEventListener("click",()=>{f=$,F(),k()}),o.appendChild(K)}}function Y($){f=(f+$+d.length)%d.length,F(),k()}function k(){const $=d[f].id;if(r.hidden=$!=="weapons",a.hidden=$!=="system",c.hidden=$!=="tablet",$==="system"){u.textContent=G();return}if($!=="tablet"){r.innerHTML="";for(const J of W){const K=document.createElement("li");K.className=J.held?"inventory__item inventory__item--held":"inventory__item",K.innerHTML=`
        <span class="inventory__item-name">${J.name}</span>
        <span class="inventory__item-note">${J.note}</span>
      `,r.appendChild(K)}if(!W.length){const J=document.createElement("li");J.className="inventory__item inventory__item--empty",J.textContent=Le.inventory.empty,r.appendChild(J)}}}function G(){const $=t?.latest;if(!$)return Le.inventory.neverSaved;const J=Math.max(0,Date.now()-$.at);if(J<8e3)return Le.inventory.savedJustNow;const K=Math.round(J/6e4);return K<1?Le.inventory.savedSecondsAgo:Le.inventory.savedMinutesAgo.replace("{n}",String(K))}return l.addEventListener("click",()=>{const $=t?.saveManual();u.textContent=$?Le.inventory.savedJustNow:Le.inventory.saveFailed}),{get isOpen(){return O},setItems($){W=$.map(J=>({held:!1,...J})),k()},get tab(){return d[f].id},toggle(){return O?this.close():this.show()},show(){return O=!0,i.hidden=!1,S=!0,_=0,C.setArmed(!0,!1),F(),k(),C.setGait("idle"),!0},close(){return O=!1,i.hidden=!0,P=!1,C.setArmed(!1),!1},update($,J){if(!O)return;const K=J?.stickYaw??J?.yaw??0,Z=(e.keyboard.isDown("KeyA")?1:0)-(e.keyboard.isDown("KeyD")?1:0);if((e.gamepad.consumeJustPressed(uw)||e.keyboard.consumeJustPressed(["ArrowRight"]))&&Y(1),(e.gamepad.consumeJustPressed(lw)||e.keyboard.consumeJustPressed(["ArrowLeft"]))&&Y(-1),d[f].id==="system"&&e.gamepad.consumeJustPressed(cw)){const pe=t?.saveManual();u.textContent=pe?Le.inventory.savedJustNow:Le.inventory.saveFailed}const ce=K||Z;ce?(S=!1,_+=ce*rw*$):S&&!P&&(_+=aw*$),v.rotation.y=_,C.update($)},render(){if(!O)return;const $=h.getBoundingClientRect();if($.width<8||$.height<8)return;const J=s.getPixelRatio(),K=s.getSize(new ge),Z=$.left*J,ce=K.height*J-$.bottom*J,pe=$.width*J,we=$.height*J;x.aspect=$.width/$.height,x.updateProjectionMatrix(),T(x.aspect);const me=s.getScissorTest();s.setScissorTest(!0),s.setViewport(Z/J,ce/J,pe/J,we/J),s.setScissor(Z/J,ce/J,pe/J,we/J);const Me=s.autoClear;s.autoClear=!1,s.getClearColor(E);const Ne=s.getClearAlpha();s.setClearColor(661026,1),s.clear(!0,!0,!1),s.setClearColor(E,Ne),s.render(g,x),s.autoClear=Me,s.setScissorTest(me),s.setViewport(0,0,K.width,K.height),s.setScissor(0,0,K.width,K.height)},vexo:C}}const Cu="super-vexo/save",Dp=4;function za(){try{const s=localStorage.getItem(Cu);if(!s)return{manual:null,auto:null};const e=JSON.parse(s);return e.v!==Dp?{manual:null,auto:null}:{manual:e.manual??null,auto:e.auto??null}}catch{return{manual:null,auto:null}}}function Up(s){try{return localStorage.setItem(Cu,JSON.stringify({v:Dp,...s})),!0}catch{return!1}}function dw({ship:s,surface:e,onFoot:t,monsters:n,mission:i,upgrades:r,rovers:o}){function a(c){return{kind:c,at:Date.now(),ship:{p:s.mesh.position.toArray(),q:s.mesh.quaternion.toArray(),scale:s.mesh.scale.x},inTown:e.active,camps:n.snapshot(),credits:i.credits,upgrades:r.upgrades.filter(l=>l.bought).map(l=>l.id),rovers:o.rovers.map(l=>l.fixed)}}return{get has(){const{manual:c,auto:l}=za();return!!(c||l)},get latest(){const{manual:c,auto:l}=za();return c?l&&l.at>c.at?l:c:l},saveManual(){const c=za();return c.manual=a("manual"),Up(c)},saveAuto(c){const l=za();return l.auto={...a("auto"),reason:c},Up(l)},restore(c){if(!c)return!1;t.reset(),e.reset(s),c.inTown&&e.enter(s),s.mesh.position.fromArray(c.ship.p),s.mesh.quaternion.fromArray(c.ship.q),s.mesh.scale.setScalar(c.ship.scale??1),s.velocity.set(0,0,0),n.reset(),n.focus(s.mesh.position.x-Qe.x,s.mesh.position.z-Qe.z),n.restore(c.camps),o.reset();for(const[l,u]of(c.rovers??[]).entries())u&&o.rovers[l]&&o.markFixed(o.rovers[l]);i.reset(),i.grantCredits(c.credits??0),r.reset();for(const l of c.upgrades??[])r.buyFree(l);return!0},clear(){try{return localStorage.removeItem(Cu),!0}catch{return!1}}}}function fw({onContinue:s,onTitle:e}){const t=document.createElement("div");t.id="game-over",t.hidden=!0,t.innerHTML=`
    <div class="game-over__sign">${Le.gameOver.title}</div>
    <p class="game-over__ask" data-ask>${Le.gameOver.ask}</p>
    <div class="game-over__buttons">
      <button class="game-over__btn" data-yes>${Le.gameOver.yes}</button>
      <button class="game-over__btn" data-no>${Le.gameOver.no}</button>
    </div>
    <p class="game-over__hint">${Le.gameOver.hint}</p>
  `,document.body.appendChild(t);const n=t.querySelector("[data-ask]"),i=t.querySelector("[data-yes]"),r=t.querySelector("[data-no]");let o=!1,a=0,c=!0;function l(){i.classList.toggle("game-over__btn--on",a===0),r.classList.toggle("game-over__btn--on",a===1),i.disabled=!c}function u(){const d=a===0&&c;h(),d?s():e()}function h(){o=!1,t.hidden=!0}return i.addEventListener("click",()=>{a=0,l(),u()}),r.addEventListener("click",()=>{a=1,l(),u()}),{get isOpen(){return o},show(d){o=!0,c=d,a=d?0:1,n.textContent=d?Le.gameOver.ask:Le.gameOver.noSave,t.hidden=!1,l()},update(d,f){if(!o)return;const g=d.keyboard.consumeJustPressed(["ArrowLeft","KeyA"])||d.gamepad.consumeJustPressed(f.Left),x=d.keyboard.consumeJustPressed(["ArrowRight","KeyD"])||d.gamepad.consumeJustPressed(f.Right);(g||x)&&(a=a===0?1:0,l()),(d.keyboard.consumeJustPressed(["Enter","Space"])||d.gamepad.consumeJustPressed(f.A))&&u()},hide:h}}const Op=Math.PI*1.25,pw=.55,Pu=8,uo=s=>[s>>16&255,s>>8&255,s&255],Iu=uo(3105920),Lu=uo(729139),Nu=uo(14734254),Ha=s=>s<0?0:s>1?1:s,gn=(s,e,t)=>s+(e-s)*t;function mw(s,e,t,n,i,r){const o=1-i.moisture,{sandy:a,plateau:c}=s.styleAt(i),l=f=>{const g=uo(f);r[0]=g[0],r[1]=g[1],r[2]=g[2]},u=(f,g)=>{if(g<=0)return;const x=uo(f);r[0]=gn(r[0],x[0],g),r[1]=gn(r[1],x[1],g),r[2]=gn(r[2],x[2],g)},h=(f,g,x)=>{const p=Ha((x-f)/(g-f));return p*p*(3-2*p)};l(Jt[Xe.FOREST]),u(Jt[Xe.PLAIN],h(.28,.44,o)),u(Jt[Xe.SAVANNA],h(.42,.58,o)),u(Jt[Xe.STONE_DESERT],h(.55,.68,o)),u(Jt[Xe.MESA],c*.85),u(Jt[Xe.DUNES],a);const d=s.snowlineAt(e,t);if(u(9275257,h(d*.55,d*.9,n)),u(Jt[Xe.SNOW],h(d*.86,d*1.15,n)),n<_t(70)){const f=1-Ha(n/_t(70));r[0]=gn(r[0],Nu[0],f*f*.6),r[1]=gn(r[1],Nu[1],f*f*.6),r[2]=gn(r[2],Nu[2],f*f*.6)}}function gw({terrain:s,width:e,height:t,minX:n,maxX:i,minZ:r,maxZ:o}){const a=new Uint8ClampedArray(e*t*4),c=(i-n)/e,l=(o-r)/t,u=new Float64Array(e+1),h=new Float64Array(e+1),d=[0,0,0];let f=null,g=-1;const x={continent:0,uplift:0,moisture:0,heat:0};let p=0;const m=(y,v)=>{for(let C=0;C<=e;C++)y[C]=s.heightAt(n+C*c,v)},M=y=>{const v=Math.ceil(e/Pu)+1;f||(f=new Array(v));for(let C=0;C<v;C++)f[C]=s.regionAt(n+C*Pu*c,y);return f};return{pixels:a,width:e,height:t,get done(){return p>=t},get progress(){return p/t},drawRows(y=8){for(let v=0;v<y&&p<t;v++,p++){const C=r+p*l;p===0?m(u,C):u.set(h),m(h,C+l),g!==p&&(M(C),g=p);for(let A=0;A<e;A++){const T=u[A],E=(p*e+A)*4;if(a[E+3]=255,T<=is){const Y=Ha(-T/_t(700));a[E]=gn(Iu[0],Lu[0],Y),a[E+1]=gn(Iu[1],Lu[1],Y),a[E+2]=gn(Iu[2],Lu[2],Y);continue}const O=n+A*c,_=A/Pu,S=Math.floor(_),P=_-S,I=f[S],z=f[S+1]??I;x.continent=gn(I.continent,z.continent,P),x.uplift=gn(I.uplift,z.uplift,P),x.moisture=gn(I.moisture,z.moisture,P),x.heat=gn(I.heat,z.heat,P),mw(s,O,C,T,x,d);const q=(u[A+1]-T)/c,w=(h[A]-T)/l,F=.55+Ha((pw+Math.cos(Op)*q*6+Math.sin(Op)*w*6)/Math.sqrt(1+(q*q+w*w)*36)+.42)*.75;a[E]=d[0]*F,a[E+1]=d[1]*F,a[E+2]=d[2]*F}}return p>=t}}}const Oi=900,lr=Math.round(Oi*Li/Kn),_w=2.5,xw="#7dff9f",vw="#8fd0ff";function yw({world:s}){const e=document.createElement("div");e.id="map-screen",e.hidden=!0,e.innerHTML=`
    <div class="map-panel">
      <div class="map-head">
        <span class="map-title">${Le.map.title}</span>
        <span class="map-scale" data-scale></span>
      </div>
      <div class="map-frame">
        <canvas class="map-canvas" data-canvas></canvas>
        <p class="map-building" data-building></p>
      </div>
      <p class="screen-card__hint">${Le.map.hint}</p>
    </div>
  `,document.body.appendChild(e);const t=e.querySelector("[data-canvas]"),n=e.querySelector("[data-building]"),i=e.querySelector("[data-scale]"),r=t.getContext("2d");i.textContent=Le.map.scale.replace("{km}",Math.round(Kn*2/1e3)).replace("{kmZ}",Math.round(Li*2/1e3)).replace("{m}",Math.round(Kn*2/Oi));const o=document.createElement("canvas");o.width=Oi,o.height=lr;const a=o.getContext("2d"),c=a.createImageData(Oi,lr),l=gw({terrain:s.terrain,width:Oi,height:lr,minX:-Kn,maxX:Kn,minZ:-Li,maxZ:Li});let u=!1,h=null,d=null,f=!0;function g(){const v=performance.now();for(;!l.done&&performance.now()-v<_w;)l.drawRows(4);c.data.set(l.pixels),a.putImageData(c,0,0),f=!0,l.done||requestAnimationFrame(g)}requestAnimationFrame(g);const x={x:0,y:0};let p={x:0,y:0,w:0,h:0};function m(v,C){return x.x=p.x+(v+Kn)/(Kn*2)*p.w,x.y=p.y+(C+Li)/(Li*2)*p.h,x}function M(v,C,A,T,E){const O=m(v,C);r.save(),r.translate(O.x,O.y),r.rotate(-A+Math.PI),r.beginPath(),r.moveTo(0,-E),r.lineTo(E*.62,E*.75),r.lineTo(0,E*.35),r.lineTo(-E*.62,E*.75),r.closePath(),r.fillStyle=T,r.strokeStyle="rgba(4, 10, 18, 0.85)",r.lineWidth=1.5,r.fill(),r.stroke(),r.restore()}function y(){const v=t.getBoundingClientRect();if(v.width<8||v.height<8)return;const C=Math.min(window.devicePixelRatio||1,2),A=Math.round(v.width*C),T=Math.round(v.height*C);(t.width!==A||t.height!==T)&&(t.width=A,t.height=T),r.clearRect(0,0,A,T);const E=Math.min(A/Oi,T/lr);p={w:Oi*E,h:lr*E,x:(A-Oi*E)/2,y:(T-lr*E)/2},r.imageSmoothingEnabled=!0,r.drawImage(o,p.x,p.y,p.w,p.h),d&&M(d.x,d.z,d.heading,vw,9*C),h&&M(h.x,h.z,h.heading,xw,8*C),n.hidden=l.done,l.done||(n.textContent=Le.map.building.replace("{pct}",String(Math.round(l.progress*100)))),f=!1}return{get isOpen(){return u},get progress(){return l.progress},setMarkers(v,C=null){h=v,d=C,u&&(f=!0)},toggle(){return u?this.close():this.show()},show(){return u=!0,e.hidden=!1,f=!0,y(),!0},close(){return u=!1,e.hidden=!0,!1},update(){!u||!f||y()}}}const Mw=12,Fp=.09,Du=14;function Sw(s){const e=new at;s.add(e);const t=[],n=[];for(let i=0;i<Mw;i++){const r=new Ct;r.setAttribute("position",new Rt(new Float32Array(6),3));const o=new la(r,new Rl({color:10475775,transparent:!0,opacity:1}));o.visible=!1,o.frustumCulled=!1,e.add(o),t.push(o)}return{group:e,fire(i,r,o=10475775){const a=t.pop()??n.shift();if(!a)return;const c=a.geometry.attributes.position;c.setXYZ(0,i.x,i.y,i.z),c.setXYZ(1,i.x+r.x*Du,i.y+r.y*Du,i.z+r.z*Du),c.needsUpdate=!0,a.material.color.setHex(o),a.material.opacity=1,a.visible=!0,a.userData.life=Fp,n.push(a)},update(i){for(let r=n.length-1;r>=0;r--){const o=n[r];o.userData.life-=i,o.userData.life<=0?(o.visible=!1,n.splice(r,1),t.push(o)):o.material.opacity=o.userData.life/Fp}}}}const{resolveAsteroidCollisions:bw}=XM,ur=new URLSearchParams(window.location.search),ww=ur.get("skipIntro")==="1",Ew=ur.get("land")==="1",Uu=ur.get("character")==="1",Aw=ur.get("peaceful")==="1",Tw=ur.get("model"),Rw=document.getElementById("app"),Bn=new Pv({antialias:!0});Rw.appendChild(Bn.domElement);const _n=$y(),Jn=jy(),lt=rM(),Ou=_f(),Ga=fM(),Fu=mM(),Bu=AM(),ku=PM(),hr=zM(),Va=VM();_n.add(lt.mesh),_n.add(Ou),_n.add(Ga.mesh),_n.add(Fu.mesh),_n.add(Bu.mesh),_n.add(ku.sprite);for(const s of hr.rovers)_n.add(s.mesh);_n.add(Va.points),lt.mesh.visible=!0;const Pt=i1(_n,[Ou,Ga.mesh,Fu.mesh,Bu.mesh,ku.sprite,Va.points,...hr.rovers.map(s=>s.mesh)],Jn,()=>Gu.reset()),dt=tS(),It=nS(),Bp=window.matchMedia("(max-height: 480px), (max-width: 480px)");Bp.matches&&(It.hide(),It.setHintVisible(!1));const ho=iS();Uu&&(ho.hide(),It.hide(),It.setHintVisible(!1));const as=rS(document.body),Lt=gS(),zu=bS(),kn=SS(hr),hn=wS({upgrades:zu,mission:kn,audio:Lt,onClose:()=>It.show()});kn.setOnRepaired(s=>{Va.fire(s.mesh.position),Lt.chirp()}),kn.setOnComplete(()=>{Lt.fanfare(),hn.show("complete")}),It.onFastTravel(()=>{kp()}),It.onUpgradesClick(()=>{hn.show("upgrades")});function Hu(){Zt.reset(),Pt.reset(lt),lt.mesh.position.set(0,0,0),lt.velocity.set(0,0,0),lt.mesh.quaternion.identity(),lt.arcadeDamping=!1,kn.reset(),hr.reset(),zu.reset(),cs.reset(),Jy(),hn.hideAll(),Gu.reset()}function kp(){as.active||Pt.active||(It.setFastTravelActive(!0),as.begin(lt,{onDone:()=>It.setFastTravelActive(!1)}))}const Gu=kS(Jn),fo={x:0,y:0,turnX:0,turnY:0};let Vu=null;function zp(s){Vu=s;const{width:e,height:t,pixelRatio:n}=s;Bn.setPixelRatio(n*Wu.scale),Bn.setSize(e,t,!1),Jn.aspect=e/t,Jn.updateProjectionMatrix(),Bi&&Bi.onResize(e,t),po&&po.onResize(e,t)}const Wu=c1(()=>{Vu&&zp(Vu)}),Cw=900,Fi={CINEMATIC:"cinematic",TITLE:"title",FLY:"fly"},po=Uu?hb({renderer:Bn,modelUrl:Tw,who:ur.get("who")??"vexo"}):null,Bi=ww||Uu?null:PS({renderer:Bn});let dr=Bi?Fi.CINEMATIC:Fi.TITLE;Bi&&ho.hide();const Pw=IS();US(Bn.domElement,zp);const cs=sw({scene:_n,world:Pt.world,origin:Qe}),Hp=Sw(_n),Zt=Kb({scene:_n,camera:Jn,ship:lt,surface:Pt,input:dt,renderer:Bn,monsters:cs,onDown:()=>{Wa.show(ls.has),Lt.playGameOver()},onLanded:()=>ls.saveAuto("landed"),onAboard:()=>ls.saveAuto("aboard"),onShot:(s,e,t)=>{Hp.fire(s,e,t?16765562:10475775),Lt.chirp(t?{fromHz:900,toHz:260,durationS:.16,peakGain:.16}:{fromHz:1400,toHz:700,durationS:.08,peakGain:.09}),t&&t.camp.members.every(n=>n.state==="dead")&&(Lt.fanfare(),ls.saveAuto("camp cleared"))}}),ls=dw({ship:lt,surface:Pt,onFoot:Zt,monsters:cs,mission:kn,upgrades:zu,rovers:hr}),Wa=fw({onContinue:()=>{Lt.stopGameOver();const s=ls.latest;Hu(),ls.restore(s),dr=Fi.FLY},onTitle:()=>{Lt.stopGameOver(),Hu(),dr=Fi.TITLE,ho.show()}}),us=yw({world:Pt.world}),hs=hw({renderer:Bn,input:dt,saves:ls,tablet:It.element});hs.setItems([{name:Le.inventory.starterGun,note:Le.inventory.starterGunNote,held:!0}]),Pt.prewarm(Bn,Jn),Zt.prewarm(Bn,Jn);function Iw(){dr=Fi.TITLE,ho.show(),Bp.matches||It.show()}const Lw=320;let Gp=-1/0,Xu=!1;function Nw(s){const e=dt.keyboard.consumeJustPressed(["KeyW"]),t=dt.keyboard.isDown("KeyW");if(e){const i=performance.now();Xu=i-Gp<Lw,Gp=i}t||(Xu=!1);const n=dt.gamepad.isButtonDown(Tt.A)&&s.throttle>.1;return Xu||n}let Vp=performance.now();const mo=new $t;function Xa(s){const e=(s-Vp)/1e3,t=Math.min(e,.1);if(Vp=s,Wu.sample(e),Wu.update(t),po){po.update(t),po.render(),requestAnimationFrame(Xa);return}if(Pw.update(),dr===Fi.CINEMATIC){dt.consumeAnyJustPressed()&&(Bi.skip(),dt.gamepad.suppressCurrentlyPressed()),Bi.update(t),Bi.render(),Bi.active||Iw(),requestAnimationFrame(Xa);return}if(dr===Fi.TITLE)dt.consumeAnyJustPressed()&&(dr=Fi.FLY,ho.dismiss(),It.showFastTravel(),It.showUpgrades(),It.setMissionVisible(!0),It.showResetHint(),It.hide(),dt.enableGyro().catch(()=>{}),Lt.start(),Ew&&Pt.enter(lt));else{const i=dt.sample(),r=!as.suppressInput&&!hn.isOpen();if(fo.x=r?i.lookX:0,fo.y=r?i.lookY:0,fo.turnX=r?i.lookTurnX:0,fo.turnY=r?i.lookTurnY:0,(dt.keyboard.consumeJustPressed(["KeyM"])||dt.gamepad.consumeJustPressed(Tt.Select))&&us.toggle(),(dt.keyboard.consumeJustPressed(["KeyX"])||dt.gamepad.consumeJustPressed(Tt.X))&&(lt.arcadeDamping=!lt.arcadeDamping),(dt.keyboard.consumeJustPressed(["KeyF"])||dt.gamepad.consumeJustPressed(Tt.R1))&&kp(),(dt.keyboard.consumeJustPressed(["KeyU"])||dt.gamepad.consumeJustPressed(Tt.Y))&&(hn.isOpen()?(hn.hideAll(),It.show()):hn.show("upgrades")),hn.isOpen()&&(dt.gamepad.consumeJustPressed(Tt.B)||dt.keyboard.consumeJustPressed(["Escape"]))&&(hn.hideAll(),It.show()),hn.isOpen()){const c=(dt.gamepad.isButtonDown(Tt.Down)?1:0)-(dt.gamepad.isButtonDown(Tt.Up)?1:0),u=-i.throttle||c;u&&hn.scrollBy(u*Cw*t)}!Wa.isOpen&&(dt.keyboard.consumeJustPressed(["KeyT"])||dt.gamepad.consumeJustPressed(Tt.Start))&&hs.toggle(),(hs.isOpen||us.isOpen)&&(dt.gamepad.consumeJustPressed(Tt.B)||dt.keyboard.consumeJustPressed(["Escape"]))&&(hs.close(),us.close()),(dt.keyboard.consumeJustPressed(["KeyR"])||dt.gamepad.consumeJustPressed(Tt.L3))&&Hu();const o=hn.isOpen()||as.suppressInput?null:i;Wa.isOpen?(Wa.update(dt,Tt),Lt.setThrottle(0),Lt.setSprinting(!1)):us.isOpen?(Lt.setThrottle(0),Lt.setSprinting(!1),Pt.active&&Pt.update(lt,t)):hs.isOpen?(hs.update(t,i),Lt.setThrottle(0),Lt.setSprinting(!1),Pt.active&&Pt.update(lt,t)):Zt.active?(Zt.update(t,o),Pt.update(lt,t),cs.update(t,Zt.quarry,(c,l,u)=>Zt.takeHit(c,l,u)),Lt.setThrottle(0),Lt.setSprinting(Zt.sprinting)):as.suppressInput||hn.isOpen()?Lt.setThrottle(0):(lt.speedLimit=Pt.active?Nw(i)?sn.surfaceBoostSpeed:sn.surfaceSpeed:0,aM(lt,i,t),Lt.setThrottle(i.throttle),Pt.update(lt,t),bw({position:lt.mesh.position,velocity:lt.velocity},Ga.instances),lt.braking&&lt.velocity.set(0,0,0)),Zt.active||(Zt.update(t,o),Lt.setSprinting(!1));const a=dt.keyboard.isDown("KeyH")||dt.gamepad.isButtonDown(Tt.L1);kn.update({shipPos:lt.mesh.position,shipSpeed:lt.velocity.length(),holdActive:a&&!hn.isOpen()&&!as.suppressInput&&!Pt.active,dt:t})}if(cs.setActive(Pt.active&&!Aw),Pt.active&&cs.focus(lt.mesh.position.x-Qe.x,lt.mesh.position.z-Qe.z),Pt.active&&!Zt.active&&cs.update(t,null,()=>{}),Hp.update(t),Pt.active||us.isOpen){const i={x:lt.mesh.position.x-Qe.x,z:lt.mesh.position.z-Qe.z,heading:mo.setFromQuaternion(lt.mesh.quaternion,"YXZ").y};us.setMarkers(Zt.active?{x:Zt.position.x-Qe.x,z:Zt.position.z-Qe.z,heading:Zt.heading}:i,Zt.active?i:null),us.update()}as.update(t),Lt.update(t),Ga.update(t),Fu.update(t),Bu.update(t),ku.update(Jn),hr.update(t),Va.update(t),xf(Ou,Jn),Zt.active||Gu.update(lt,fo,t),Bn.render(_n,Jn),hs.render(),mo.setFromQuaternion(lt.mesh.quaternion,"YXZ"),It.update({velocity:lt.velocity.length(),inKph:Pt.active,eulerDeg:{x:Wi.radToDeg(mo.x),y:Wi.radToDeg(mo.y),z:Wi.radToDeg(mo.z)},dt:t,sources:dt.activeSources(),dampingOn:lt.arcadeDamping}),It.updateMission({remaining:kn.remaining(),total:kn.totalRovers(),credits:kn.credits});const n=kn.repairing??kn.inRange;It.updateHack({name:n?n.name:null,progress:n?n.repairProgress:0}),requestAnimationFrame(Xa)}requestAnimationFrame(Xa)})();
