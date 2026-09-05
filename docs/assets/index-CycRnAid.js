(function(){"use strict";var eh=document.createElement("style");eh.textContent=`html,body{margin:0;padding:0;width:100%;height:100%;height:100dvh;background:#000;overflow:hidden;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#d6f0ff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}body,#app{position:fixed;inset:0}canvas{display:block;position:fixed;inset:0;width:100%;height:100%;touch-action:none}#cinematic{position:fixed;inset:0;z-index:12;pointer-events:none;color:#e6f3ff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.cinematic__skip{position:absolute;top:calc(1rem + env(safe-area-inset-top));right:calc(1.25rem + env(safe-area-inset-right));font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6aa3d1;opacity:.65}.cinematic__text{position:absolute;left:0;right:0;bottom:12%;text-align:center;padding:0 2rem;opacity:0;transition:opacity .9s ease;text-shadow:0 0 18px rgba(80,160,255,.4),0 2px 8px rgba(0,0,0,.85)}.cinematic__text--in{opacity:1}.cinematic__text p{font-size:clamp(1.05rem,2vw,1.6rem);letter-spacing:.04em;line-height:1.5;margin:.3em 0;color:#cbe2ff}.cinematic__flash{position:absolute;inset:0;background:radial-gradient(circle at center,#fff,#d3eaff,#7fb8ee 80%,#112540);opacity:0;pointer-events:none}#title-card{position:fixed;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#080e1e8c,#000000d9 70%);transition:opacity .5s ease;opacity:1}#title-card.title-card--hidden{opacity:0;pointer-events:none}.title-card__inner{text-align:center;padding:2rem 3rem}.title-card__title{font-size:clamp(1.6rem,4vw,3rem);letter-spacing:.05em;margin:0 0 1.5rem;color:#b8e0ff;text-shadow:0 0 24px rgba(80,160,255,.4)}.title-card__prompt{font-size:clamp(.9rem,1.5vw,1.1rem);color:#6aa3d1;margin:0;animation:pulse 1.4s ease-in-out infinite}@keyframes pulse{0%,to{opacity:.5}50%{opacity:1}}#tablet-hint{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;padding:4px 10px;background:#0a141eb3;color:#9ab3c9;font:11px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;border:1px solid rgba(120,160,200,.18);pointer-events:none}#tablet-hint[hidden]{display:none}#tablet{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;pointer-events:none}.tablet-frame{padding:6px;background:linear-gradient(135deg,#1a232e,#0a0f15);border-radius:14px;box-shadow:0 4px 24px #0009,inset 0 0 0 1px #ffffff0d}.tablet-bezel{padding:6px;background:#050709;border-radius:10px}.tablet-screen{width:220px;padding:10px 12px;background:linear-gradient(180deg,#061320,#03070d);border-radius:6px;font-size:12px;line-height:1.5;color:#9fd1ff;box-shadow:inset 0 0 18px #3278c81f}.tablet-titlebar{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid rgba(80,140,200,.18);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1}.tablet-app{font-weight:600}.tablet-source{padding:1px 6px;border-radius:3px;background:#50a0ff1f;color:#b8e0ff}.tablet-row{display:flex;justify-content:space-between}.tablet-row--small{font-size:10px;opacity:.7;margin-top:4px}.tablet-row--hint{margin-top:8px;padding-top:6px;border-top:1px solid rgba(80,140,200,.12);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1;opacity:.7;text-align:right}.tablet-label{color:#6aa3d1}.tablet-value{color:#d6f0ff;font-variant-numeric:tabular-nums}.tablet-app-btn{display:flex;margin-top:10px;width:100%;padding:8px 10px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:6px;color:#d6f0ff;font-family:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .4s ease}.tablet-app-btn--visible{opacity:1;pointer-events:auto}.tablet-app-btn:hover:not(:disabled){background:linear-gradient(135deg,#235080,#103050)}.tablet-app-btn:active:not(:disabled){transform:translateY(1px)}.tablet-app-btn:disabled{cursor:progress;opacity:.65}.tablet-app-btn--active{box-shadow:0 0 16px #78c8ff99}.tablet-app-btn__icon{font-size:14px;opacity:.85}.tablet-app-btn__label{flex:1;text-align:left;font-weight:600}.tablet-app-btn__key{padding:1px 6px;border-radius:3px;background:#78b4f02e;font-size:10px}.tablet-mission{margin-top:8px;padding-top:8px;border-top:1px solid rgba(80,140,200,.18)}.tablet-hack{margin-top:8px;padding:8px;background:#50a0ff14;border:1px solid rgba(120,180,240,.35);border-radius:4px}.tablet-hack__name{font-size:11px;font-weight:700;letter-spacing:.1em;color:#d6f0ff}.tablet-hack__hint{font-size:10px;color:#9adfff;opacity:.85;margin-bottom:4px}.tablet-hack__bar{height:6px;background:#ffffff14;border-radius:3px;overflow:hidden}.tablet-hack__fill{height:100%;width:0%;background:linear-gradient(90deg,#4aa3ff,#9adfff);transition:none}.screen-overlay{position:fixed;inset:0;z-index:8;display:flex;align-items:center;justify-content:center;padding:2rem;background:radial-gradient(ellipse at center,#080e1ec7,#000000eb 80%);pointer-events:auto}.screen-overlay[hidden]{display:none}.screen-card{max-width:460px;max-height:84vh;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:1.6rem 1.8rem;background:linear-gradient(160deg,#0e1e30,#050a14);border:1px solid rgba(120,180,240,.3);border-radius:10px;box-shadow:0 8px 36px #0000008c,inset 0 0 0 1px #ffffff08;color:#d6f0ff;text-align:center}.screen-card--wide{max-width:520px;text-align:left}.screen-card{scrollbar-width:thin;scrollbar-color:rgba(120,180,240,.4) transparent}.screen-card::-webkit-scrollbar{width:6px}.screen-card::-webkit-scrollbar-track{background:transparent}.screen-card::-webkit-scrollbar-thumb{background:#78b4f066;border-radius:3px}.screen-card__title{margin:0 0 .5rem;font-size:clamp(1.2rem,2.2vw,1.8rem);letter-spacing:.08em;color:#b8e0ff}.screen-card__body{color:#9fc6e7;font-size:.95rem;line-height:1.5}.screen-card__row{margin:.8rem 0}.screen-card__hint{margin:0 0 .8rem;padding-bottom:.6rem;border-bottom:1px solid rgba(80,140,200,.15);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6aa3d1;opacity:.75;text-align:center}.screen-card__credits{font-size:1.1rem;font-weight:700;color:#ffdf80}.screen-card__credits-label{font-size:.7rem;letter-spacing:.15em;color:#6aa3d1;margin-right:6px;font-weight:400}.screen-card__actions{display:flex;justify-content:center;gap:10px;margin-top:1rem}.screen-btn{padding:8px 14px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:5px;color:#d6f0ff;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.screen-btn--primary{background:linear-gradient(135deg,#2660a0,#154070);border-color:#a0dcff99}.screen-btn--small{padding:5px 10px;font-size:11px}.screen-btn:hover:not(:disabled){filter:brightness(1.15)}.screen-btn:disabled{opacity:.45;cursor:not-allowed}.upgrade-list{list-style:none;padding:0;margin:0}.upgrade-item{padding:10px 12px;margin-bottom:8px;background:#50a0ff0f;border:1px solid rgba(120,180,240,.18);border-radius:6px}.upgrade-item--bought{opacity:.65;border-color:#64dcb466}.upgrade-item__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.upgrade-item__name{font-weight:700;color:#d6f0ff;letter-spacing:.05em}.upgrade-item__cost{color:#ffdf80;font-weight:700;font-variant-numeric:tabular-nums}.upgrade-item__desc{margin:4px 0 8px;font-size:12px;color:#9fc6e7;line-height:1.4}#warp-flash{position:fixed;inset:0;background:radial-gradient(circle at center,#fff,#c4dfff,#6aa3d1 80%,#0a1a30);pointer-events:none;opacity:0;z-index:6;transition:none}@media(max-height:480px){.title-card__inner{padding:1rem 1.5rem;max-width:62vw}.title-card__title{font-size:clamp(1rem,2.6vw,1.6rem);margin-bottom:.9rem}.title-card__prompt{font-size:.85rem}.cinematic__text{bottom:8%}.cinematic__text p{font-size:1rem;line-height:1.35}.tablet-screen{width:180px;font-size:11px}.screen-overlay{padding:1rem}.screen-card{padding:1rem 1.2rem;max-height:88vh}.screen-card__title{font-size:1.1rem}.upgrade-item{padding:8px 10px;margin-bottom:6px}}@media(max-width:480px){.tablet-screen{width:min(58vw,220px)}.title-card__inner{padding:1.5rem 1rem}}#landing-banner{position:fixed;left:50%;bottom:calc(2.2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;padding:.7rem 1.5rem;text-align:center;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none;transition:opacity 1.2s ease}#landing-banner[hidden]{display:none}.landing-banner--fading{opacity:0}.landing-banner__town{font-size:10px;letter-spacing:.22em;color:#6aa3d1}.landing-banner__street{margin-top:2px;font-size:1.05rem;letter-spacing:.04em;color:#eaf4ff}.landing-banner__hint{margin-top:6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8fb8d8;opacity:.8}@media(max-height:480px){#landing-banner{bottom:calc(1rem + env(safe-area-inset-bottom));padding:.5rem 1.1rem}.landing-banner__street{font-size:.9rem}}.title-card__build{margin:1.1rem 0 0;font-size:9px;letter-spacing:.16em;color:#4d7ba1;opacity:.65}#map-screen{position:fixed;inset:0;z-index:11;display:flex;align-items:center;justify-content:center;background:#040910e6}#map-screen[hidden]{display:none}.map-panel{display:flex;flex-direction:column;gap:.5rem;width:min(1100px,96vw);height:min(760px,92vh);padding:.9rem 1rem .7rem;background:#0a1622f0;border:1px solid rgba(120,180,240,.28);border-radius:10px}.map-head{display:flex;align-items:baseline;justify-content:space-between}.map-title{font-size:.95rem;letter-spacing:.24em;color:#cfe4f6}.map-scale{font-size:10px;letter-spacing:.12em;color:#6f9dc4}.map-frame{position:relative;flex:1 1 auto;min-height:0;border-radius:6px;overflow:hidden;background:#0a1622}.map-canvas{position:relative;inset:auto;width:100%;height:100%;display:block}.map-building{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;font-size:11px;letter-spacing:.14em;color:#9fd8ff;background:#060e18cc;padding:.5rem .9rem;border-radius:5px}#shop{background:#040910db}.shop__panel{width:min(620px,94vw);background:#0a1622f5;border:1px solid rgba(120,180,240,.3);border-radius:10px;padding:1rem 1.1rem .8rem}.shop__head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:.7rem}.shop__name{margin:0;font-size:.95rem;letter-spacing:.22em;color:#cfe4f6}.shop__purse{font-size:.85rem;color:#ffe9b0;letter-spacing:.1em}.shop__list{list-style:none;margin:0;padding:0}.shop__item{display:grid;grid-template-columns:1fr auto;gap:.1rem 1rem;padding:.5rem .7rem;border:1px solid transparent;border-radius:6px;cursor:pointer}.shop__item-name{font-size:.9rem;color:#eaf3fb}.shop__item-price{grid-column:2;grid-row:1 / span 2;align-self:center;text-align:right;font-size:.85rem;color:#ffe9b0;letter-spacing:.08em}.shop__item-note{font-size:11px;color:#7fb0d8}.shop__item--on{border-color:#5effa6;background:#5effa614}.shop__item--sold .shop__item-price{color:#6f9dc4}.shop__item--sold,.shop__item--dear{opacity:.55}.shop__said{margin:.6rem 0 .3rem;min-height:1.2em;font-size:.85rem;color:#9fd8ff}#dialogue{position:fixed;left:50%;bottom:5%;transform:translate(-50%);z-index:9;pointer-events:none;width:min(680px,92vw)}#dialogue[hidden]{display:none}.dialogue__box{background:#08121ce6;border:1px solid rgba(120,180,240,.35);border-left:3px solid #7dff9f;border-radius:8px;padding:.7rem 1rem .6rem}.dialogue__who{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#7dff9f}.dialogue__line{margin:.35rem 0 .45rem;font-size:.95rem;line-height:1.45;color:#eaf3fb}.dialogue__hint{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6f9dc4}#game-over{position:fixed;inset:0;z-index:12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.9rem;background:#020408e0;animation:game-over-in 1.1s ease-out}#game-over[hidden]{display:none}@keyframes game-over-in{0%{opacity:0}40%{opacity:0}to{opacity:1}}.game-over__sign{font-size:clamp(2.2rem,9vw,4.2rem);letter-spacing:.3em;color:#ff4d5e;text-shadow:0 0 24px rgba(255,77,94,.55),0 3px 0 rgba(0,0,0,.6)}.game-over__ask{margin:0;color:#cfe4f6;font-size:.95rem;letter-spacing:.08em}.game-over__buttons{display:flex;gap:1rem;margin-top:.4rem}.game-over__btn{font:inherit;font-size:.85rem;letter-spacing:.14em;padding:.6rem 1.3rem;color:#d8ecff;background:#0a1828e6;border:1px solid rgba(120,180,240,.35);border-radius:6px;cursor:pointer}.game-over__btn--on{border-color:#5effa6;color:#eaffef;box-shadow:0 0 18px #5effa640}.game-over__btn:disabled{opacity:.35;cursor:default}.game-over__hint{margin:.3rem 0 0;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4}#inventory{background:none}.inventory__panel{display:flex;gap:1.4rem;width:min(920px,94vw);height:min(560px,82vh)}.inventory__list{flex:1 1 56%;display:flex;flex-direction:column;min-width:0;padding:1.4rem;background:linear-gradient(160deg,#0e1e30f5,#050a14f7);border:1px solid rgba(120,180,240,.28);border-radius:10px;box-shadow:0 18px 60px #0009}.inventory__figure{flex:1 1 44%;position:relative;border:1px solid rgba(120,180,240,.18);border-radius:8px;touch-action:none;user-select:none;cursor:grab}.inventory__figure:active{cursor:grabbing}.inventory__figure-hint{position:absolute;bottom:.5rem;left:0;right:0;margin:0;text-align:center;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6f9dc4;pointer-events:none}.inventory__tabs{display:flex;gap:.6rem;margin:.2rem 0 .9rem}.inventory__tab{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4;padding:.25rem .7rem;border:1px solid rgba(120,180,240,.22);border-radius:999px}.inventory__tab--on{color:#d8ecff;border-color:#5effa680;background:#5effa614}.inventory__items{list-style:none;margin:0;padding:0;overflow-y:auto;flex:1 1 auto;overscroll-behavior:contain;touch-action:pan-y}.inventory__item{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;padding:.6rem .75rem;border:1px solid rgba(120,180,240,.16);border-radius:6px;margin-bottom:.5rem;background:#0a162699}.inventory__item--held{border-color:#5effa673;box-shadow:inset 0 0 18px #5effa614}.inventory__item--empty{color:#6f9dc4;justify-content:center}.inventory__tablet{flex:1 1 auto;min-height:0;overflow-y:auto}.inventory__tablet[hidden]{display:none}.inventory__tablet #tablet{position:static;inset:auto;z-index:auto;pointer-events:auto}.inventory__tablet .tablet-frame{width:100%}.inventory__tablet .tablet-bezel,.inventory__tablet .tablet-screen{width:100%;box-sizing:border-box}.inventory__system{flex:1 1 auto;display:flex;flex-direction:column;align-items:flex-start;gap:.7rem}.inventory__system[hidden]{display:none}.inventory__save{font:inherit;font-size:.85rem;letter-spacing:.16em;padding:.7rem 1.4rem;color:#eaffef;background:#0c281cd9;border:1px solid rgba(94,255,166,.45);border-radius:6px;cursor:pointer}.inventory__save:hover{background:#123c28e6}.inventory__saved{margin:0;font-size:11px;letter-spacing:.1em;color:#7fb0d8}.inventory__item-name{color:#eaf4ff;font-size:.95rem;letter-spacing:.04em}.inventory__item-note{color:#7fb0d8;font-size:11px;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}@media(max-width:700px),(max-height:460px){.inventory__panel{flex-direction:row;height:88vh;padding:.8rem;gap:.8rem}.inventory__item{padding:.4rem .55rem}.inventory__item-name{font-size:.85rem}}#hearts{position:fixed;top:calc(.8rem + env(safe-area-inset-top));left:50%;transform:translate(-50%);z-index:6;display:flex;gap:6px;pointer-events:none;font-size:22px;line-height:1}#hearts[hidden]{display:none}.heart{color:#ff4d5e;text-shadow:0 0 6px rgba(255,77,94,.55),0 1px 2px rgba(0,0,0,.8)}.heart--spent{color:#ffffff38;text-shadow:0 1px 2px rgba(0,0,0,.8)}@keyframes hearts-hit{0%{transform:translate(-50%) scale(1.35);filter:brightness(2.2)}to{transform:translate(-50%) scale(1);filter:brightness(1)}}.hearts--hit{animation:hearts-hit .45s ease-out}#stamina-wheel{position:fixed;left:0;top:0;z-index:6;width:56px;height:56px;margin:-28px 0 0 -28px;pointer-events:none;transition:opacity .2s linear}#stamina-wheel[hidden]{display:none}.stamina-wheel__track{fill:none;stroke:#06140e8c;stroke-width:5}.stamina-wheel__fill{fill:none;stroke:#5effa6;stroke-width:4;stroke-linecap:round;transform:rotate(-90deg);transform-origin:28px 28px;filter:drop-shadow(0 0 3px rgba(94,255,166,.7))}.stamina-wheel--winded .stamina-wheel__fill{stroke:#ff8a5c;filter:drop-shadow(0 0 4px rgba(255,138,92,.8))}#foot-prompt{position:fixed;left:50%;bottom:calc(7rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:6;padding:.45rem 1.1rem;font-size:11px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;color:#dceaf7;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none}#foot-prompt[hidden]{display:none}@media(max-height:480px){#foot-prompt{bottom:calc(4.4rem + env(safe-area-inset-bottom));font-size:10px;padding:.35rem .8rem}}#character-label{position:fixed;left:50%;bottom:calc(2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;text-align:center;pointer-events:none}.character-label__name{font-size:1.6rem;letter-spacing:.4em;text-indent:.4em;color:#eaf4ff;text-shadow:0 0 18px rgba(83,255,157,.45)}.character-label__hint{margin-top:6px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6aa3d1;opacity:.75}
/*$vite$:1*/`,document.head.appendChild(eh);const Ja="169",nm=0,th=1,im=2,nh=1,ih=2,si=3,ri=0,Jt=1,Zt=2,Si=0,ms=1,oi=2,sh=3,rh=4,sm=5,Gi=100,rm=101,om=102,am=103,cm=104,lm=200,um=201,hm=202,dm=203,Za=204,Qa=205,fm=206,pm=207,mm=208,gm=209,_m=210,xm=211,vm=212,ym=213,Mm=214,ec=0,tc=1,nc=2,gs=3,ic=4,sc=5,rc=6,oc=7,oh=0,Sm=1,bm=2,bi=0,wm=1,Em=2,Am=3,ah=4,Tm=5,Rm=6,Cm=7,ch="attached",Pm="detached",lh=300,_s=301,xs=302,ac=303,cc=304,Mo=306,wi=1e3,Ei=1001,So=1002,cn=1003,uh=1004,gr=1005,gn=1006,bo=1007,ai=1008,ci=1009,hh=1010,dh=1011,_r=1012,lc=1013,Vi=1014,Un=1015,xr=1016,uc=1017,hc=1018,vs=1020,fh=35902,ph=1021,mh=1022,An=1023,gh=1024,_h=1025,ys=1026,Ms=1027,dc=1028,fc=1029,xh=1030,pc=1031,mc=1033,wo=33776,Eo=33777,Ao=33778,To=33779,gc=35840,_c=35841,xc=35842,vc=35843,yc=36196,Mc=37492,Sc=37496,bc=37808,wc=37809,Ec=37810,Ac=37811,Tc=37812,Rc=37813,Cc=37814,Pc=37815,Ic=37816,Lc=37817,Nc=37818,Dc=37819,Uc=37820,Oc=37821,Ro=36492,Fc=36494,Bc=36495,vh=36283,kc=36284,zc=36285,Hc=36286,Im=2200,Lm=2201,Nm=2202,vr=2300,yr=2301,Gc=2302,Ss=2400,bs=2401,Co=2402,Vc=2500,Dm=2501,Um=0,yh=1,Wc=2,Om=3200,Fm=3201,Mh=0,Bm=1,Ai="",Ct="srgb",Qt="srgb-linear",Xc="display-p3",Po="display-p3-linear",Io="linear",bt="srgb",Lo="rec709",No="p3",ws=7680,Sh=519,km=512,zm=513,Hm=514,bh=515,Gm=516,Vm=517,Wm=518,Xm=519,qc=35044,qm=35048,wh="300 es",li=2e3,Do=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eh=1234567;const Mr=Math.PI/180,Es=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function Yc(i,e){return(i%e+e)%e}function Ym(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Km(i,e,t){return i!==e?(t-i)/(e-i):0}function Sr(i,e,t){return(1-t)*i+t*e}function $m(i,e,t,n){return Sr(i,e,1-Math.exp(-t*n))}function jm(i,e=1){return e-Math.abs(Yc(i,e*2)-e)}function Jm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function e0(i,e){return i+Math.random()*(e-i)}function t0(i){return i*(.5-Math.random())}function n0(i){i!==void 0&&(Eh=i);let e=Eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i0(i){return i*Mr}function s0(i){return i*Es}function r0(i){return(i&i-1)===0&&i!==0}function o0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function a0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function c0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xi={DEG2RAD:Mr,RAD2DEG:Es,generateUUID:Tn,clamp:Ht,euclideanModulo:Yc,mapLinear:Ym,inverseLerp:Km,lerp:Sr,damp:$m,pingpong:jm,smoothstep:Jm,smootherstep:Zm,randInt:Qm,randFloat:e0,randFloatSpread:t0,seededRandom:n0,degToRad:i0,radToDeg:s0,isPowerOfTwo:r0,ceilPowerOfTwo:o0,floorPowerOfTwo:a0,setQuaternionFromProperEuler:c0,normalize:yt,denormalize:On};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,s,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],v=s[4],y=s[7],A=s[2],E=s[5],T=s[8];return r[0]=o*_+a*M+c*A,r[3]=o*p+a*v+c*E,r[6]=o*m+a*y+c*T,r[1]=l*_+u*M+h*A,r[4]=l*p+u*v+h*E,r[7]=l*m+u*y+h*T,r[2]=d*_+f*M+g*A,r[5]=d*p+f*v+g*E,r[8]=d*m+f*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new tt;function Ah(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l0(){const i=br("canvas");return i.style.display="block",i}const Th={};function Uo(i){i in Th||(Th[i]=!0,console.warn(i))}function u0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function h0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function d0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Rh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ch=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Qt]:{transfer:Io,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ct]:{transfer:bt,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Po]:{transfer:Io,primaries:No,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ch),fromReference:i=>i.applyMatrix3(Rh)},[Xc]:{transfer:bt,primaries:No,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ch),fromReference:i=>i.applyMatrix3(Rh).convertLinearToSRGB()}},f0=new Set([Qt,Po]),ft={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!f0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=wr[e].toReference,s=wr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return wr[i].primaries},getTransfer:function(i){return i===Ai?Io:wr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(wr[e].luminanceCoefficients)}};function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $c(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class p0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=br("canvas")),Ts.width=e.width,Ts.height=e.height;const n=Ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m0=0;class Ph{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jc(s[o].image)):r.push(jc(s[o]))}else r=jc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?p0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g0=0;class Gt extends Wi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Ei,s=Ei,r=gn,o=ai,a=An,c=ci,l=Gt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Tn(),this.name="",this.source=new Ph(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null,Gt.DEFAULT_MAPPING=lh,Gt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(f+1)/2,A=(m+1)/2,E=(u+d)/4,T=(h+_)/4,U=(g+p)/4;return v>y&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=T/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=U/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=T/r,s=U/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _0 extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Gt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ph(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends _0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ih extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x0 extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let p=1-a;const m=c*d+l*f+u*g+h*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,m*M);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const y=a*M;if(c=c*p+d*y,l=l*p+f*y,u=u*p+g*y,h=h*p+_*y,p===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new F,Lh=new Xt;class Kn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oo.copy(n.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Fo.subVectors(this.max,Er),Rs.subVectors(e.a,Er),Cs.subVectors(e.b,Er),Ps.subVectors(e.c,Er),Ti.subVectors(Cs,Rs),Ri.subVectors(Ps,Cs),Yi.subVectors(Rs,Ps);let t=[0,-Ti.z,Ti.y,0,-Ri.z,Ri.y,0,-Yi.z,Yi.y,Ti.z,0,-Ti.x,Ri.z,0,-Ri.x,Yi.z,0,-Yi.x,-Ti.y,Ti.x,0,-Ri.y,Ri.x,0,-Yi.y,Yi.x,0];return!Zc(t,Rs,Cs,Ps,Fo)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,Rs,Cs,Ps,Fo))?!1:(Bo.crossVectors(Ti,Ri),t=[Bo.x,Bo.y,Bo.z],Zc(t,Rs,Cs,Ps,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,Oo=new Kn,Rs=new F,Cs=new F,Ps=new F,Ti=new F,Ri=new F,Yi=new F,Er=new F,Fo=new F,Bo=new F,Ki=new F;function Zc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const v0=new Kn,Ar=new F,Qc=new F;class $n{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):v0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Qc)),this.expandByPoint(Ar.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new F,el=new F,ko=new F,Ci=new F,tl=new F,zo=new F,nl=new F;class Ho{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){el.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(el);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ko),a=Ci.dot(this.direction),c=-Ci.dot(ko),l=Ci.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(el).addScaledVector(ko,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){tl.subVectors(t,e),zo.subVectors(n,e),nl.crossVectors(tl,zo);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const c=a*this.direction.dot(zo.crossVectors(Ci,zo));if(c<0)return null;const l=a*this.direction.dot(tl.cross(Ci));if(l<0||c+l>o)return null;const u=-a*Ci.dot(nl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,M0)}lookAt(e,t,n){const s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Pi.crossVectors(n,_n),Pi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Pi.crossVectors(n,_n)),Pi.normalize(),Go.crossVectors(_n,Pi),s[0]=Pi.x,s[4]=Go.x,s[8]=_n.x,s[1]=Pi.y,s[5]=Go.y,s[9]=_n.y,s[2]=Pi.z,s[6]=Go.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],v=n[7],y=n[11],A=n[15],E=s[0],T=s[4],U=s[8],q=s[12],x=s[1],S=s[5],C=s[9],N=s[13],k=s[2],B=s[6],b=s[10],G=s[14],I=s[3],W=s[7],H=s[11],Z=s[15];return r[0]=o*E+a*x+c*k+l*I,r[4]=o*T+a*S+c*B+l*W,r[8]=o*U+a*C+c*b+l*H,r[12]=o*q+a*N+c*G+l*Z,r[1]=u*E+h*x+d*k+f*I,r[5]=u*T+h*S+d*B+f*W,r[9]=u*U+h*C+d*b+f*H,r[13]=u*q+h*N+d*G+f*Z,r[2]=g*E+_*x+p*k+m*I,r[6]=g*T+_*S+p*B+m*W,r[10]=g*U+_*C+p*b+m*H,r[14]=g*q+_*N+p*G+m*Z,r[3]=M*E+v*x+y*k+A*I,r[7]=M*T+v*S+y*B+A*W,r[11]=M*U+v*C+y*b+A*H,r[15]=M*q+v*N+y*G+A*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+p*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=h*p*l-_*d*l+_*c*f-a*p*f-h*c*m+a*d*m,v=g*d*l-u*p*l-g*c*f+o*p*f+u*c*m-o*d*m,y=u*_*l-g*h*l+g*a*f-o*_*f-u*a*m+o*h*m,A=g*h*c-u*_*c-g*a*d+o*_*d+u*a*p-o*h*p,E=t*M+n*v+s*y+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=M*T,e[1]=(_*d*r-h*p*r-_*s*f+n*p*f+h*s*m-n*d*m)*T,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*T,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*T,e[4]=v*T,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*T,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*T,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*T,e[8]=y*T,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*m-t*h*m)*T,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*m+t*a*m)*T,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*T,e[12]=A*T,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*T,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*p-t*a*p)*T,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,p=o*h,m=a*h,M=c*l,v=c*u,y=c*h,A=n.x,E=n.y,T=n.z;return s[0]=(1-(_+m))*A,s[1]=(f+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(p-M)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);const l=1/r,u=1/o,h=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=li){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===li)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Do)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=li){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u;let g,_;if(a===li)g=(o+r)*h,_=-2*h;else if(a===Do)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Is=new F,Bn=new je,y0=new F(0,0,0),M0=new F(1,1,1),Pi=new F,Go=new F,_n=new F,Nh=new je,Dh=new Xt;class qt{constructor(e=0,t=0,n=0,s=qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qt.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S0=0;const Oh=new F,Ls=new Xt,di=new je,Vo=new F,Tr=new F,b0=new F,w0=new Xt,Fh=new F(1,0,0),Bh=new F(0,1,0),kh=new F(0,0,1),zh={type:"added"},E0={type:"removed"},Ns={type:"childadded",child:null},il={type:"childremoved",child:null};class wt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new F,t=new qt,n=new Xt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new tt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vo.copy(e):Vo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Tr,Vo,this.up):di.lookAt(Vo,Tr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(di),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,b0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,w0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new F(0,1,0),wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new F,fi=new F,sl=new F,pi=new F,Ds=new F,Us=new F,Hh=new F,rl=new F,ol=new F,al=new F,cl=new pt,ll=new pt,ul=new pt;class Rn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kn.subVectors(e,t),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kn.subVectors(s,t),fi.subVectors(n,t),sl.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(fi),c=kn.dot(sl),l=fi.dot(fi),u=fi.dot(sl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return cl.setScalar(0),ll.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(e,t),ll.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(e,t,n,s){return kn.subVectors(n,t),fi.subVectors(e,t),kn.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,n),Us.subVectors(r,n),rl.subVectors(e,n);const c=Ds.dot(rl),l=Us.dot(rl);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,s);const u=Ds.dot(ol),h=Us.dot(ol);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ds,o);al.subVectors(e,r);const f=Ds.dot(al),g=Us.dot(al);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Us,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Hh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Hh,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Ds,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Yc(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return ft.fromWorkingColorSpace(sn.copy(this),e),Math.round(Ht(sn.r*255,0,255))*65536+Math.round(Ht(sn.g*255,0,255))*256+Math.round(Ht(sn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Ct){ft.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,s=sn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Wo);const n=Sr(Ii.h,Wo.h,t),s=Sr(Ii.s,Wo.s,t),r=Sr(Ii.l,Wo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new We;We.NAMES=Gh;let A0=0;class zn extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=ms,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Qa,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new F,Xo=new Se;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class Vh extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wh extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let T0=0;const Cn=new je,dl=new wt,Os=new F,xn=new Kn,Rr=new Kn,Yt=new F;class Dt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Wh:Vh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(xn.min,Rr.min),xn.expandByPoint(Yt),Yt.addVectors(xn.max,Rr.max),xn.expandByPoint(Yt)):(xn.expandByPoint(Rr.min),xn.expandByPoint(Rr.max))}xn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Yt.fromBufferAttribute(a,l),c&&(Os.fromBufferAttribute(e,l),Yt.add(Os)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new F,c[U]=new F;const l=new F,u=new F,h=new F,d=new Se,f=new Se,g=new Se,_=new F,p=new F;function m(U,q,x){l.fromBufferAttribute(n,U),u.fromBufferAttribute(n,q),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,q),g.fromBufferAttribute(r,x),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(S),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(S),a[U].add(_),a[q].add(_),a[x].add(_),c[U].add(p),c[q].add(p),c[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,q=M.length;U<q;++U){const x=M[U],S=x.start,C=x.count;for(let N=S,k=S+C;N<k;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new F,y=new F,A=new F,E=new F;function T(U){A.fromBufferAttribute(s,U),E.copy(A);const q=a[U];v.copy(q),v.sub(A.multiplyScalar(A.dot(q))).normalize(),y.crossVectors(E,q);const S=y.dot(c[U])<0?-1:1;o.setXYZW(U,v.x,v.y,v.z,S)}for(let U=0,q=M.length;U<q;++U){const x=M[U],S=x.start,C=x.count;for(let N=S,k=S+C;N<k;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new Nt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new je,$i=new Ho,qo=new $n,qh=new F,Yo=new F,Ko=new F,$o=new F,fl=new F,jo=new F,Yh=new F,Jo=new F;class pe extends wt{constructor(e=new Dt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(fl.fromBufferAttribute(h,e),o?jo.addScaledVector(fl,u):jo.addScaledVector(fl.sub(t),u))}t.add(jo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(qo.containsPoint($i.origin)===!1&&($i.intersectSphere(qo,qh)===null||$i.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Xh.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,A=v;y<A;y+=3){const E=a.getX(y),T=a.getX(y+1),U=a.getX(y+2);s=Zo(this,m,e,n,l,u,h,E,T,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=Zo(this,o,e,n,l,u,h,M,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,A=v;y<A;y+=3){const E=y,T=y+1,U=y+2;s=Zo(this,m,e,n,l,u,h,E,T,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=p,v=p+1,y=p+2;s=Zo(this,o,e,n,l,u,h,M,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function R0(i,e,t,n,s,r,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ri,a),c===null)return null;Jo.copy(a),Jo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Jo);return l<t.near||l>t.far?null:{distance:l,point:Jo.clone(),object:i}}function Zo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Yo),i.getVertexPosition(c,Ko),i.getVertexPosition(l,$o);const u=R0(i,e,t,n,Yo,Ko,$o,Yh);if(u){const h=new F;Rn.getBarycoord(Yh,Yo,Ko,$o,h),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,c,l,h,new Se)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,c,l,h,new Se)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,c,l,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new F,materialIndex:0};Rn.getNormal(Yo,Ko,$o,d.normal),u.face=d,u.barycoord=h}return u}class gt extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(_,p,m,M,v,y,A,E,T,U,q){const x=y/T,S=A/U,C=y/2,N=A/2,k=E/2,B=T+1,b=U+1;let G=0,I=0;const W=new F;for(let H=0;H<b;H++){const Z=H*S-N;for(let z=0;z<B;z++){const Y=z*x-C;W[_]=Y*M,W[p]=Z*v,W[m]=k,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[m]=E>0?1:-1,u.push(W.x,W.y,W.z),h.push(z/T),h.push(1-H/U),G+=1}}for(let H=0;H<U;H++)for(let Z=0;Z<T;Z++){const z=d+Z+B*H,Y=d+Z+B*(H+1),L=d+(Z+1)+B*(H+1),K=d+(Z+1)+B*H;c.push(z,Y,K),c.push(Y,L,K),I+=6}a.addGroup(f,I,q),f+=I,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ln(i){const e={};for(let t=0;t<i.length;t++){const n=Fs(i[t]);for(const s in n)e[s]=n[s]}return e}function C0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const P0={clone:Fs,merge:ln};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=C0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new F,jh=new Se,Jh=new Se;class kt extends $h{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Jh),t.subVectors(Jh,jh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,ks=1;class N0 extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(Bs,ks,e,t);s.layers=this.layers,this.add(s);const r=new kt(Bs,ks,e,t);r.layers=this.layers,this.add(r);const o=new kt(Bs,ks,e,t);o.layers=this.layers,this.add(o);const a=new kt(Bs,ks,e,t);a.layers=this.layers,this.add(a);const c=new kt(Bs,ks,e,t);c.layers=this.layers,this.add(c);const l=new kt(Bs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zh extends Gt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D0 extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new Li({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Si});r.uniforms.tEquirect.value=t;const o=new pe(s,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=gn),new N0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const pl=new F,U0=new F,O0=new tt;class ji{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=pl.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||O0.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new $n,Qo=new F;class ml{constructor(e=new ji,t=new ji,n=new ji,s=new ji,r=new ji,o=new ji){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,p-f,y-m).normalize(),n[1].setComponents(c+r,d+l,p+f,y+m).normalize(),n[2].setComponents(c+o,d+u,p+g,y+M).normalize(),n[3].setComponents(c-o,d-u,p-g,y-M).normalize(),n[4].setComponents(c-a,d-h,p-_,y-v).normalize(),t===li)n[5].setComponents(c+a,d+h,p+_,y+v).normalize();else if(t===Do)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function F0(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class zs extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*d-o;for(let v=0;v<l;v++){const y=v*h-r;g.push(y,-M,0),_.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const v=M+l*m,y=M+l*(m+1),A=M+1+l*(m+1),E=M+1+l*m;f.push(v,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
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
#endif`,z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W0=`#ifdef USE_AOMAP
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
#endif`,X0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J0=`#ifdef USE_IRIDESCENCE
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
#endif`,Z0=`#ifdef USE_BUMPMAP
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,cg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`
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
}`,gg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
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
}`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
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
#endif`,Og=`struct PhysicalMaterial {
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
}`,Fg=`
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,e_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,E_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nt={alphahash_fragment:B0,alphahash_pars_fragment:k0,alphamap_fragment:z0,alphamap_pars_fragment:H0,alphatest_fragment:G0,alphatest_pars_fragment:V0,aomap_fragment:W0,aomap_pars_fragment:X0,batching_pars_vertex:q0,batching_vertex:Y0,begin_vertex:K0,beginnormal_vertex:$0,bsdfs:j0,iridescence_fragment:J0,bumpmap_pars_fragment:Z0,clipping_planes_fragment:Q0,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:tg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:og,common:ag,cube_uv_reflection_fragment:cg,defaultnormal_vertex:lg,displacementmap_pars_vertex:ug,displacementmap_vertex:hg,emissivemap_fragment:dg,emissivemap_pars_fragment:fg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:gg,envmap_common_pars_fragment:_g,envmap_pars_fragment:xg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Pg,envmap_vertex:yg,fog_vertex:Mg,fog_pars_vertex:Sg,fog_fragment:bg,fog_pars_fragment:wg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Ag,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Lg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Dg,lights_physical_fragment:Ug,lights_physical_pars_fragment:Og,lights_fragment_begin:Fg,lights_fragment_maps:Bg,lights_fragment_end:kg,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Vg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:$g,morphinstance_vertex:jg,morphcolor_vertex:Jg,morphnormal_vertex:Zg,morphtarget_pars_vertex:Qg,morphtarget_vertex:e_,normal_fragment_begin:t_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:u_,opaque_fragment:h_,packing:d_,premultiplied_alpha_fragment:f_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:__,roughnessmap_pars_fragment:x_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:b_,skinning_pars_vertex:w_,skinning_vertex:E_,skinnormal_vertex:A_,specularmap_fragment:T_,specularmap_pars_fragment:R_,tonemapping_fragment:C_,tonemapping_pars_fragment:P_,transmission_fragment:I_,transmission_pars_fragment:L_,uv_pars_fragment:N_,uv_pars_vertex:D_,uv_vertex:U_,worldpos_vertex:O_,background_vert:`varying vec2 vUv;
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
}`},Ne={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},jn={basic:{uniforms:ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new We(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ln([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ln([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new We(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ln([Ne.points,Ne.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ln([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ln([Ne.common,Ne.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ln([Ne.sprite,Ne.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:ln([Ne.common,Ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:ln([Ne.lights,Ne.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};jn.physical={uniforms:ln([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ea={r:0,b:0,g:0},Zi=new qt,F_=new je;function B_(i,e,t,n,s,r,o){const a=new We(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const y=g(M);y===null?m(a,c):y&&y.isColor&&(m(y,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Mo)?(u===void 0&&(u=new pe(new gt(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Fs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(v.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Zi)),u.material.toneMapped=ft.getTransfer(y.colorSpace)!==bt,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new pe(new zs(2,2),new Li({name:"BackgroundMaterial",uniforms:Fs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB(ea,Kh(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:_,addToRenderList:p}}function k_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,S,C,N,k){let B=!1;const b=h(N,C,S);r!==b&&(r=b,l(r.object)),B=f(x,N,C,k),B&&g(x,N,C,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(x,S,C,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,S,C){const N=C.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let B=k[S.id];B===void 0&&(B={},k[S.id]=B);let b=B[N];return b===void 0&&(b=d(c()),B[N]=b),b}function d(x){const S=[],C=[],N=[];for(let k=0;k<t;k++)S[k]=0,C[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:C,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,S,C,N){const k=r.attributes,B=S.attributes;let b=0;const G=C.getAttributes();for(const I in G)if(G[I].location>=0){const H=k[I];let Z=B[I];if(Z===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;b++}return r.attributesNum!==b||r.index!==N}function g(x,S,C,N){const k={},B=S.attributes;let b=0;const G=C.getAttributes();for(const I in G)if(G[I].location>=0){let H=B[I];H===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(H=x.instanceColor));const Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),k[I]=Z,b++}r.attributes=k,r.attributesNum=b,r.index=N}function _(){const x=r.newAttributes;for(let S=0,C=x.length;S<C;S++)x[S]=0}function p(x){m(x,0)}function m(x,S){const C=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;C[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),k[x]!==S&&(i.vertexAttribDivisor(x,S),k[x]=S)}function M(){const x=r.newAttributes,S=r.enabledAttributes;for(let C=0,N=S.length;C<N;C++)S[C]!==x[C]&&(i.disableVertexAttribArray(C),S[C]=0)}function v(x,S,C,N,k,B,b){b===!0?i.vertexAttribIPointer(x,S,C,k,B):i.vertexAttribPointer(x,S,C,N,k,B)}function y(x,S,C,N){_();const k=N.attributes,B=C.getAttributes(),b=S.defaultAttributeValues;for(const G in B){const I=B[G];if(I.location>=0){let W=k[G];if(W===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(W=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(W=x.instanceColor)),W!==void 0){const H=W.normalized,Z=W.itemSize,z=e.get(W);if(z===void 0)continue;const Y=z.buffer,L=z.type,K=z.bytesPerElement,ie=L===i.INT||L===i.UNSIGNED_INT||W.gpuType===lc;if(W.isInterleavedBufferAttribute){const ee=W.data,se=ee.stride,te=W.offset;if(ee.isInstancedInterleavedBuffer){for(let ce=0;ce<I.locationSize;ce++)m(I.location+ce,ee.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ce=0;ce<I.locationSize;ce++)p(I.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let ce=0;ce<I.locationSize;ce++)v(I.location+ce,Z/I.locationSize,L,H,se*K,(te+Z/I.locationSize*ce)*K,ie)}else{if(W.isInstancedBufferAttribute){for(let ee=0;ee<I.locationSize;ee++)m(I.location+ee,W.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ee=0;ee<I.locationSize;ee++)p(I.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let ee=0;ee<I.locationSize;ee++)v(I.location+ee,Z/I.locationSize,L,H,Z*K,Z/I.locationSize*ee*K,ie)}}else if(b!==void 0){const H=b[G];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(I.location,H);break;case 3:i.vertexAttrib3fv(I.location,H);break;case 4:i.vertexAttrib4fv(I.location,H);break;default:i.vertexAttrib1fv(I.location,H)}}}}M()}function A(){U();for(const x in n){const S=n[x];for(const C in S){const N=S[C];for(const k in N)u(N[k].object),delete N[k];delete S[C]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const S=n[x.id];for(const C in S){const N=S[C];for(const k in N)u(N[k].object),delete N[k];delete S[C]}delete n[x.id]}function T(x){for(const S in n){const C=n[S];if(C[x.id]===void 0)continue;const N=C[x.id];for(const k in N)u(N[k].object),delete N[k];delete C[x.id]}}function U(){q(),o=!0,r!==s&&(r=s,l(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:q,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function z_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==An&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const U=T===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ci&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Un&&!U)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function G_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ji,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,v=M*4;let y=m.clippingState||null;c.value=y,y=u(g,d,v,f);for(let A=0;A!==v;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function V_(i){let e=new WeakMap;function t(o,a){return a===ac?o.mapping=_s:a===cc&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ac||a===cc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new D0(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class gl extends $h{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,ed=[.125,.215,.35,.446,.526,.582],Qi=20,_l=new gl,td=new We;let xl=null,vl=0,yl=0,Ml=!1;const es=(1+Math.sqrt(5))/2,Gs=1/es,nd=[new F(-es,Gs,0),new F(es,Gs,0),new F(-Gs,0,es),new F(Gs,0,es),new F(0,es,-Gs),new F(0,es,Gs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Cr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,vl,yl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:xr,format:An,colorSpace:Qt,depthBuffer:!1},s=id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W_(r)),this._blurMaterial=X_(r,e,t)}return s}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,s){const a=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(td),u.toneMapping=bi,u.autoClear=!1;const f=new rn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new pe(new gt,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(td),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;ta(s,M*v,m>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_s||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ta(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nd[(s-r-1)%nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Qi;p>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);const m=[];let M=0;for(let T=0;T<Qi;++T){const U=T/_,q=Math.exp(-U*U/2);m.push(q),T===0?M+=q:T<p&&(M+=2*q)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[s],A=3*y*(s>v-Hs?s-v+Hs:0),E=4*(this._cubeSize-y);ta(t,A,E,3*y,2*y),c.setRenderTarget(t),c.render(h,_l)}}function W_(i){const e=[],t=[],n=[];let s=i;const r=i-Hs+1+ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Hs?c=ed[o-i+Hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),v=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,U=E>2?0:-1,q=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];M.set(q,_*g*E),v.set(d,p*g*E);const x=[E,E,E,E,E,E];y.set(x,m*g*E)}const A=new Dt;A.setAttribute("position",new Nt(M,_)),A.setAttribute("uv",new Nt(v,p)),A.setAttribute("faceIndex",new Nt(y,m)),e.push(A),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function id(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function X_(i,e,t){const n=new Float32Array(Qi),s=new F(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function sd(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function rd(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function q_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ac||c===cc,u=c===_s||c===xs;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cr(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Cr(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Y_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Uo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function K_(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,y=M.length;v<y;v+=3){const A=M[v+0],E=M[v+1],T=M[v+2];d.push(A,E,E,T,T,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const A=v+0,E=v+1,T=v+2;d.push(A,E,E,T,T,A)}}else return;const p=new(Ah(d)?Wh:Vh)(d,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<_.length;M++)t.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function j_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function J_(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let q=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*A*4*h),T=new Ih(E,y,A,h);T.type=Un,T.needsUpdate=!0;const U=v*4;for(let x=0;x<h;x++){const S=p[x],C=m[x],N=M[x],k=y*A*4*x;for(let B=0;B<S.count;B++){const b=B*U;f===!0&&(s.fromBufferAttribute(S,B),E[k+b+0]=s.x,E[k+b+1]=s.y,E[k+b+2]=s.z,E[k+b+3]=0),g===!0&&(s.fromBufferAttribute(C,B),E[k+b+4]=s.x,E[k+b+5]=s.y,E[k+b+6]=s.z,E[k+b+7]=0),_===!0&&(s.fromBufferAttribute(N,B),E[k+b+8]=s.x,E[k+b+9]=s.y,E[k+b+10]=s.z,E[k+b+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Se(y,A)},n.set(a,d),a.addEventListener("dispose",q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Z_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class od extends Gt{constructor(e,t,n,s,r,o,a,c,l,u=ys){if(u!==ys&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ys&&(n=Vi),n===void 0&&u===Ms&&(n=vs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ad=new Gt,cd=new od(1,1),ld=new Ih,ud=new x0,hd=new Zh,dd=[],fd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=dd[s];if(r===void 0&&(r=new Float32Array(s),dd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function na(i,e){let t=fd[e];t===void 0&&(t=new Int32Array(e),fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;gd.set(n),i.uniformMatrix2fv(this.addr,!1,gd),Wt(t,n)}}function sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),Wt(t,n)}}function rx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),Wt(t,n)}}function ox(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cd.compareFunction=bh,r=cd):r=ad,t.setTexture2D(e||r,s)}function mx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ud,s)}function gx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hd,s)}function _x(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ld,s)}function xx(i){switch(i){case 5126:return Q_;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return cx;case 35669:case 35673:return lx;case 5125:return ux;case 36294:return hx;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}function vx(i,e){i.uniform1fv(this.addr,e)}function yx(i,e){const t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function Mx(i,e){const t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Sx(i,e){const t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function bx(i,e){const t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wx(i,e){const t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ex(i,e){const t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ax(i,e){i.uniform1iv(this.addr,e)}function Tx(i,e){i.uniform2iv(this.addr,e)}function Rx(i,e){i.uniform3iv(this.addr,e)}function Cx(i,e){i.uniform4iv(this.addr,e)}function Px(i,e){i.uniform1uiv(this.addr,e)}function Ix(i,e){i.uniform2uiv(this.addr,e)}function Lx(i,e){i.uniform3uiv(this.addr,e)}function Nx(i,e){i.uniform4uiv(this.addr,e)}function Dx(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ad,r[o])}function Ux(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ud,r[o])}function Ox(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hd,r[o])}function Fx(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ld,r[o])}function Bx(i){switch(i){case 5126:return vx;case 35664:return yx;case 35665:return Mx;case 35666:return Sx;case 35674:return bx;case 35675:return wx;case 35676:return Ex;case 5124:case 35670:return Ax;case 35667:case 35671:return Tx;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Fx}}class kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xx(t.type)}}class zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bx(t.type)}}class Hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function _d(i,e){i.seq.push(e),i.map[e.id]=e}function Gx(i,e,t){const n=i.name,s=n.length;for(bl.lastIndex=0;;){const r=bl.exec(n),o=bl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){_d(t,l===void 0?new kx(a,i,e):new zx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Hx(a),_d(t,h)),t=h}}}class ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Gx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function xd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Vx=37297;let Wx=0;function Xx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function qx(i){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i);let n;switch(e===t?n="":e===No&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===No&&(n="LinearSRGBToLinearDisplayP3"),i){case Qt:case Po:return[n,"LinearTransferOETF"];case Ct:case Xc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function vd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xx(i.getShaderSource(e),o)}else return s}function Yx(i,e){const t=qx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kx(i,e){let t;switch(e){case wm:t="Linear";break;case Em:t="Reinhard";break;case Am:t="Cineon";break;case ah:t="ACESFilmic";break;case Rm:t="AgX";break;case Cm:t="Neutral";break;case Tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new F;function $x(){ft.getLuminanceCoefficients(sa);const i=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Jx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Pr(i){return i!==""}function yd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(Qx,tv)}const ev=new Map;function tv(i,e){let t=nt[e];if(t===void 0){const n=ev.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(i){return i.replace(nv,iv)}function iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function sv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function rv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ov(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xs&&(e="ENVMAP_MODE_REFRACTION"),e}function av(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oh:e="ENVMAP_BLENDING_MULTIPLY";break;case Sm:e="ENVMAP_BLENDING_MIX";break;case bm:e="ENVMAP_BLENDING_ADD";break}return e}function cv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=sv(t),l=rv(t),u=ov(t),h=av(t),d=cv(t),f=jx(t),g=Jx(r),_=s.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(p=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?nt.tonemapping_pars_fragment:"",t.toneMapping!==bi?Kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Yx("linearToOutputTexel",t.outputColorSpace),$x(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=wl(o),o=yd(o,t),o=Md(o,t),a=wl(a),a=yd(a,t),a=Md(a,t),o=Sd(o),a=Sd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+o,y=M+m+a,A=xd(s,s.VERTEX_SHADER,v),E=xd(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(S){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(A).trim(),k=s.getShaderInfoLog(E).trim();let B=!0,b=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,E);else{const G=vd(s,A,"vertex"),I=vd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+C+`
`+G+`
`+I)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(N===""||k==="")&&(b=!1);b&&(S.diagnostics={runnable:B,programLog:C,vertexShader:{log:N,prefix:p},fragmentShader:{log:k,prefix:m}})}s.deleteShader(A),s.deleteShader(E),U=new ia(s,_),q=Zx(s,_)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let q;this.getAttributes=function(){return q===void 0&&T(this),q};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Vx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let uv=0;class hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dv(e),t.set(e,n)),n}}class dv{constructor(e){this.id=uv++,this.code=e,this.usedTimes=0}}function fv(i,e,t,n,s,r,o){const a=new Uh,c=new hv,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,C,N,k){const B=N.fog,b=k.geometry,G=x.isMeshStandardMaterial?N.environment:null,I=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),W=I&&I.mapping===Mo?I.image.height:null,H=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const Z=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,z=Z!==void 0?Z.length:0;let Y=0;b.morphAttributes.position!==void 0&&(Y=1),b.morphAttributes.normal!==void 0&&(Y=2),b.morphAttributes.color!==void 0&&(Y=3);let L,K,ie,ee;if(H){const zt=jn[H];L=zt.vertexShader,K=zt.fragmentShader}else L=x.vertexShader,K=x.fragmentShader,c.update(x),ie=c.getVertexShaderID(x),ee=c.getFragmentShaderID(x);const se=i.getRenderTarget(),te=k.isInstancedMesh===!0,ce=k.isBatchedMesh===!0,he=!!x.map,J=!!x.matcap,R=!!I,re=!!x.aoMap,oe=!!x.lightMap,de=!!x.bumpMap,be=!!x.normalMap,Ue=!!x.displacementMap,we=!!x.emissiveMap,D=!!x.metalnessMap,w=!!x.roughnessMap,Q=x.anisotropy>0,ne=x.clearcoat>0,fe=x.dispersion>0,le=x.iridescence>0,Pe=x.sheen>0,ye=x.transmission>0,me=Q&&!!x.anisotropyMap,Ge=ne&&!!x.clearcoatMap,ge=ne&&!!x.clearcoatNormalMap,Ie=ne&&!!x.clearcoatRoughnessMap,Le=le&&!!x.iridescenceMap,Ve=le&&!!x.iridescenceThicknessMap,Be=Pe&&!!x.sheenColorMap,Je=Pe&&!!x.sheenRoughnessMap,He=!!x.specularMap,ht=!!x.specularColorMap,j=!!x.specularIntensityMap,Oe=ye&&!!x.transmissionMap,ae=ye&&!!x.thicknessMap,_e=!!x.gradientMap,De=!!x.alphaMap,Fe=x.alphaTest>0,at=!!x.alphaHash,Mt=!!x.extensions;let $t=bi;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&($t=i.toneMapping);const ut={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:L,fragmentShader:K,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ce,batchingColor:ce&&k._colorsTexture!==null,instancing:te,instancingColor:te&&k.instanceColor!==null,instancingMorph:te&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Qt,alphaToCoverage:!!x.alphaToCoverage,map:he,matcap:J,envMap:R,envMapMode:R&&I.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:oe,bumpMap:de,normalMap:be,displacementMap:f&&Ue,emissiveMap:we,normalMapObjectSpace:be&&x.normalMapType===Bm,normalMapTangentSpace:be&&x.normalMapType===Mh,metalnessMap:D,roughnessMap:w,anisotropy:Q,anisotropyMap:me,clearcoat:ne,clearcoatMap:Ge,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ie,dispersion:fe,iridescence:le,iridescenceMap:Le,iridescenceThicknessMap:Ve,sheen:Pe,sheenColorMap:Be,sheenRoughnessMap:Je,specularMap:He,specularColorMap:ht,specularIntensityMap:j,transmission:ye,transmissionMap:Oe,thicknessMap:ae,gradientMap:_e,opaque:x.transparent===!1&&x.blending===ms&&x.alphaToCoverage===!1,alphaMap:De,alphaTest:Fe,alphaHash:at,combine:x.combine,mapUv:he&&p(x.map.channel),aoMapUv:re&&p(x.aoMap.channel),lightMapUv:oe&&p(x.lightMap.channel),bumpMapUv:de&&p(x.bumpMap.channel),normalMapUv:be&&p(x.normalMap.channel),displacementMapUv:Ue&&p(x.displacementMap.channel),emissiveMapUv:we&&p(x.emissiveMap.channel),metalnessMapUv:D&&p(x.metalnessMap.channel),roughnessMapUv:w&&p(x.roughnessMap.channel),anisotropyMapUv:me&&p(x.anisotropyMap.channel),clearcoatMapUv:Ge&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Je&&p(x.sheenRoughnessMap.channel),specularMapUv:He&&p(x.specularMap.channel),specularColorMapUv:ht&&p(x.specularColorMap.channel),specularIntensityMapUv:j&&p(x.specularIntensityMap.channel),transmissionMapUv:Oe&&p(x.transmissionMap.channel),thicknessMapUv:ae&&p(x.thicknessMap.channel),alphaMapUv:De&&p(x.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(be||Q),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!b.attributes.uv&&(he||De),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Y,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:he&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zt,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Mt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&x.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function M(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(v(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const S=_[x.type];let C;if(S){const N=jn[S];C=P0.clone(N.uniforms)}else C=x.uniforms;return C}function E(x,S){let C;for(let N=0,k=u.length;N<k;N++){const B=u[N];if(B.cacheKey===S){C=B,++C.usedTimes;break}}return C===void 0&&(C=new lv(i,S,x,r),u.push(C)),C}function T(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),x.destroy()}}function U(x){c.remove(x)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:A,acquireProgram:E,releaseProgram:T,releaseShaderCache:U,programs:u,dispose:q}}function pv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ed(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||mv),n.length>1&&n.sort(d||wd),s.length>1&&s.sort(d||wd)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function gv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ed,i.set(n,[o])):s>=r.length?(o=new Ed,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _v(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new We};break;case"SpotLight":t={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vv=0;function yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mv(i){const e=new _v,t=xv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new je,o=new je;function a(l){let u=0,h=0,d=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,v=0,y=0,A=0,E=0,T=0;l.sort(yv);for(let q=0,x=l.length;q<x;q++){const S=l[q],C=S.color,N=S.intensity,k=S.distance,B=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=C.r*N,h+=C.g*N,d+=C.b*N;else if(S.isLightProbe){for(let b=0;b<9;b++)n.probe[b].addScaledVector(S.sh.coefficients[b],N);T++}else if(S.isDirectionalLight){const b=e.get(S);if(b.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const G=S.shadow,I=t.get(S);I.shadowIntensity=G.intensity,I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=S.shadow.matrix,M++}n.directional[f]=b,f++}else if(S.isSpotLight){const b=e.get(S);b.position.setFromMatrixPosition(S.matrixWorld),b.color.copy(C).multiplyScalar(N),b.distance=k,b.coneCos=Math.cos(S.angle),b.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),b.decay=S.decay,n.spot[_]=b;const G=S.shadow;if(S.map&&(n.spotLightMap[A]=S.map,A++,G.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[_]=G.matrix,S.castShadow){const I=t.get(S);I.shadowIntensity=G.intensity,I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=B,y++}_++}else if(S.isRectAreaLight){const b=e.get(S);b.color.copy(C).multiplyScalar(N),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=b,p++}else if(S.isPointLight){const b=e.get(S);if(b.color.copy(S.color).multiplyScalar(S.intensity),b.distance=S.distance,b.decay=S.decay,S.castShadow){const G=S.shadow,I=t.get(S);I.shadowIntensity=G.intensity,I.shadowBias=G.bias,I.shadowNormalBias=G.normalBias,I.shadowRadius=G.radius,I.shadowMapSize=G.mapSize,I.shadowCameraNear=G.camera.near,I.shadowCameraFar=G.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=S.shadow.matrix,v++}n.point[g]=b,g++}else if(S.isHemisphereLight){const b=e.get(S);b.skyColor.copy(S.color).multiplyScalar(N),b.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[m]=b,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==m||U.numDirectionalShadows!==M||U.numPointShadows!==v||U.numSpotShadows!==y||U.numSpotMaps!==A||U.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=m,U.numDirectionalShadows=M,U.numPointShadows=v,U.numSpotShadows=y,U.numSpotMaps=A,U.numLightProbes=T,n.version=vv++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const v=l[m];if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(v.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Ad(i){const e=new Mv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Sv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ad(i),e.set(s,[a])):r>=o.length?(a=new Ad(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class bv extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
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
}`;function Tv(i,e,t){let n=new ml;const s=new Se,r=new Se,o=new pt,a=new bv({depthPacking:Fm}),c=new wv,l={},u=t.maxTextureSize,h={[ri]:Jt,[Jt]:ri,[Zt]:Zt},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Ev,fragmentShader:Av}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let m=this.type;this.render=function(E,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const q=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Si),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=m!==si&&this.type===si,k=m===si&&this.type!==si;for(let B=0,b=E.length;B<b;B++){const G=E[B],I=G.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const W=I.getFrameExtents();if(s.multiply(W),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,I.mapSize.y=r.y)),I.map===null||N===!0||k===!0){const Z=this.type!==si?{minFilter:cn,magFilter:cn}:{};I.map!==null&&I.map.dispose(),I.map=new qi(s.x,s.y,Z),I.map.texture.name=G.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const H=I.getViewportCount();for(let Z=0;Z<H;Z++){const z=I.getViewport(Z);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),C.viewport(o),I.updateMatrices(G,Z),n=I.getFrustum(),y(T,U,I.camera,G,this.type)}I.isPointLightShadow!==!0&&this.type===si&&M(I,U),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(q,x,S)};function M(E,T){const U=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,U,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,U,f,_,null)}function v(E,T,U,q){let x=null;const S=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)x=S;else if(x=U.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const C=x.uuid,N=T.uuid;let k=l[C];k===void 0&&(k={},l[C]=k);let B=k[N];B===void 0&&(B=x.clone(),k[N]=B,T.addEventListener("dispose",A)),x=B}if(x.visible=T.visible,x.wireframe=T.wireframe,q===si?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const C=i.properties.get(x);C.light=U}return x}function y(E,T,U,q,x){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const N=e.update(E),k=E.material;if(Array.isArray(k)){const B=N.groups;for(let b=0,G=B.length;b<G;b++){const I=B[b],W=k[I.materialIndex];if(W&&W.visible){const H=v(E,W,q,x);E.onBeforeShadow(i,E,T,U,N,H,I),i.renderBufferDirect(U,null,N,H,E,I),E.onAfterShadow(i,E,T,U,N,H,I)}}}else if(k.visible){const B=v(E,k,q,x);E.onBeforeShadow(i,E,T,U,N,B,null),i.renderBufferDirect(U,null,N,B,E,null),E.onAfterShadow(i,E,T,U,N,B,null)}}const C=E.children;for(let N=0,k=C.length;N<k;N++)y(C[N],T,U,q,x)}function A(E){E.target.removeEventListener("dispose",A);for(const U in l){const q=l[U],x=E.target.uuid;x in q&&(q[x].dispose(),delete q[x])}}}const Rv={[ec]:tc,[nc]:rc,[ic]:oc,[gs]:sc,[tc]:ec,[rc]:nc,[oc]:ic,[sc]:gs};function Cv(i){function e(){let j=!1;const Oe=new pt;let ae=null;const _e=new pt(0,0,0,0);return{setMask:function(De){ae!==De&&!j&&(i.colorMask(De,De,De,De),ae=De)},setLocked:function(De){j=De},setClear:function(De,Fe,at,Mt,$t){$t===!0&&(De*=Mt,Fe*=Mt,at*=Mt),Oe.set(De,Fe,at,Mt),_e.equals(Oe)===!1&&(i.clearColor(De,Fe,at,Mt),_e.copy(Oe))},reset:function(){j=!1,ae=null,_e.set(-1,0,0,0)}}}function t(){let j=!1,Oe=!1,ae=null,_e=null,De=null;return{setReversed:function(Fe){Oe=Fe},setTest:function(Fe){Fe?ie(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(Fe){ae!==Fe&&!j&&(i.depthMask(Fe),ae=Fe)},setFunc:function(Fe){if(Oe&&(Fe=Rv[Fe]),_e!==Fe){switch(Fe){case ec:i.depthFunc(i.NEVER);break;case tc:i.depthFunc(i.ALWAYS);break;case nc:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case ic:i.depthFunc(i.EQUAL);break;case sc:i.depthFunc(i.GEQUAL);break;case rc:i.depthFunc(i.GREATER);break;case oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Fe}},setLocked:function(Fe){j=Fe},setClear:function(Fe){De!==Fe&&(i.clearDepth(Fe),De=Fe)},reset:function(){j=!1,ae=null,_e=null,De=null}}}function n(){let j=!1,Oe=null,ae=null,_e=null,De=null,Fe=null,at=null,Mt=null,$t=null;return{setTest:function(ut){j||(ut?ie(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(ut){Oe!==ut&&!j&&(i.stencilMask(ut),Oe=ut)},setFunc:function(ut,zt,wn){(ae!==ut||_e!==zt||De!==wn)&&(i.stencilFunc(ut,zt,wn),ae=ut,_e=zt,De=wn)},setOp:function(ut,zt,wn){(Fe!==ut||at!==zt||Mt!==wn)&&(i.stencilOp(ut,zt,wn),Fe=ut,at=zt,Mt=wn)},setLocked:function(ut){j=ut},setClear:function(ut){$t!==ut&&(i.clearStencil(ut),$t=ut)},reset:function(){j=!1,Oe=null,ae=null,_e=null,De=null,Fe=null,at=null,Mt=null,$t=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,v=null,y=null,A=null,E=new We(0,0,0),T=0,U=!1,q=null,x=null,S=null,C=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,b=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=b>=1):G.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=b>=2);let I=null,W={};const H=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),z=new pt().fromArray(H),Y=new pt().fromArray(Z);function L(j,Oe,ae,_e){const De=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(j,Fe),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<ae;at++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Oe+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Fe}const K={};K[i.TEXTURE_2D]=L(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=L(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=L(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=L(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),r.setFunc(gs),oe(!1),de(th),ie(i.CULL_FACE),R(Si);function ie(j){l[j]!==!0&&(i.enable(j),l[j]=!0)}function ee(j){l[j]!==!1&&(i.disable(j),l[j]=!1)}function se(j,Oe){return u[j]!==Oe?(i.bindFramebuffer(j,Oe),u[j]=Oe,j===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Oe),j===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function te(j,Oe){let ae=d,_e=!1;if(j){ae=h.get(Oe),ae===void 0&&(ae=[],h.set(Oe,ae));const De=j.textures;if(ae.length!==De.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,at=De.length;Fe<at;Fe++)ae[Fe]=i.COLOR_ATTACHMENT0+Fe;ae.length=De.length,_e=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ae)}function ce(j){return f!==j?(i.useProgram(j),f=j,!0):!1}const he={[Gi]:i.FUNC_ADD,[rm]:i.FUNC_SUBTRACT,[om]:i.FUNC_REVERSE_SUBTRACT};he[am]=i.MIN,he[cm]=i.MAX;const J={[lm]:i.ZERO,[um]:i.ONE,[hm]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[_m]:i.SRC_ALPHA_SATURATE,[mm]:i.DST_COLOR,[fm]:i.DST_ALPHA,[dm]:i.ONE_MINUS_SRC_COLOR,[Qa]:i.ONE_MINUS_SRC_ALPHA,[gm]:i.ONE_MINUS_DST_COLOR,[pm]:i.ONE_MINUS_DST_ALPHA,[xm]:i.CONSTANT_COLOR,[vm]:i.ONE_MINUS_CONSTANT_COLOR,[ym]:i.CONSTANT_ALPHA,[Mm]:i.ONE_MINUS_CONSTANT_ALPHA};function R(j,Oe,ae,_e,De,Fe,at,Mt,$t,ut){if(j===Si){g===!0&&(ee(i.BLEND),g=!1);return}if(g===!1&&(ie(i.BLEND),g=!0),j!==sm){if(j!==_||ut!==U){if((p!==Gi||v!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,v=Gi),ut)switch(j){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}m=null,M=null,y=null,A=null,E.set(0,0,0),T=0,_=j,U=ut}return}De=De||Oe,Fe=Fe||ae,at=at||_e,(Oe!==p||De!==v)&&(i.blendEquationSeparate(he[Oe],he[De]),p=Oe,v=De),(ae!==m||_e!==M||Fe!==y||at!==A)&&(i.blendFuncSeparate(J[ae],J[_e],J[Fe],J[at]),m=ae,M=_e,y=Fe,A=at),(Mt.equals(E)===!1||$t!==T)&&(i.blendColor(Mt.r,Mt.g,Mt.b,$t),E.copy(Mt),T=$t),_=j,U=!1}function re(j,Oe){j.side===Zt?ee(i.CULL_FACE):ie(i.CULL_FACE);let ae=j.side===Jt;Oe&&(ae=!ae),oe(ae),j.blending===ms&&j.transparent===!1?R(Si):R(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),r.setFunc(j.depthFunc),r.setTest(j.depthTest),r.setMask(j.depthWrite),s.setMask(j.colorWrite);const _e=j.stencilWrite;o.setTest(_e),_e&&(o.setMask(j.stencilWriteMask),o.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),o.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ue(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(j){q!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),q=j)}function de(j){j!==nm?(ie(i.CULL_FACE),j!==x&&(j===th?i.cullFace(i.BACK):j===im?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),x=j}function be(j){j!==S&&(B&&i.lineWidth(j),S=j)}function Ue(j,Oe,ae){j?(ie(i.POLYGON_OFFSET_FILL),(C!==Oe||N!==ae)&&(i.polygonOffset(Oe,ae),C=Oe,N=ae)):ee(i.POLYGON_OFFSET_FILL)}function we(j){j?ie(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function D(j){j===void 0&&(j=i.TEXTURE0+k-1),I!==j&&(i.activeTexture(j),I=j)}function w(j,Oe,ae){ae===void 0&&(I===null?ae=i.TEXTURE0+k-1:ae=I);let _e=W[ae];_e===void 0&&(_e={type:void 0,texture:void 0},W[ae]=_e),(_e.type!==j||_e.texture!==Oe)&&(I!==ae&&(i.activeTexture(ae),I=ae),i.bindTexture(j,Oe||K[j]),_e.type=j,_e.texture=Oe)}function Q(){const j=W[I];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ve(j){z.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),z.copy(j))}function Be(j){Y.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Y.copy(j))}function Je(j,Oe){let ae=c.get(Oe);ae===void 0&&(ae=new WeakMap,c.set(Oe,ae));let _e=ae.get(j);_e===void 0&&(_e=i.getUniformBlockIndex(Oe,j.name),ae.set(j,_e))}function He(j,Oe){const _e=c.get(Oe).get(j);a.get(Oe)!==_e&&(i.uniformBlockBinding(Oe,_e,j.__bindingPointIndex),a.set(Oe,_e))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},I=null,W={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,v=null,y=null,A=null,E=new We(0,0,0),T=0,U=!1,q=null,x=null,S=null,C=null,N=null,z.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ie,disable:ee,bindFramebuffer:se,drawBuffers:te,useProgram:ce,setBlending:R,setMaterial:re,setFlipSided:oe,setCullFace:de,setLineWidth:be,setPolygonOffset:Ue,setScissorTest:we,activeTexture:D,bindTexture:w,unbindTexture:Q,compressedTexImage2D:ne,compressedTexImage3D:fe,texImage2D:Ie,texImage3D:Le,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:Ge,texStorage3D:ge,texSubImage2D:le,texSubImage3D:Pe,compressedTexSubImage2D:ye,compressedTexSubImage3D:me,scissor:Ve,viewport:Be,reset:ht}}function Td(i,e,t,n){const s=Pv(n);switch(t){case ph:return i*e;case gh:return i*e;case _h:return i*e*2;case dc:return i*e/s.components*s.byteLength;case fc:return i*e/s.components*s.byteLength;case xh:return i*e*2/s.components*s.byteLength;case pc:return i*e*2/s.components*s.byteLength;case mh:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case mc:return i*e*4/s.components*s.byteLength;case wo:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:case vc:return Math.max(i,16)*Math.max(e,8)/4;case gc:case xc:return Math.max(i,8)*Math.max(e,8)/2;case yc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Fc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vh:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pv(i){switch(i){case ci:case hh:return{byteLength:1,components:1};case _r:case dh:case xr:return{byteLength:2,components:1};case uc:case hc:return{byteLength:2,components:4};case Vi:case lc:case Un:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Iv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return f?new OffscreenCanvas(D,w):br("canvas")}function _(D,w,Q){let ne=1;const fe=we(D);if((fe.width>Q||fe.height>Q)&&(ne=Q/Math.max(fe.width,fe.height)),ne<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const le=Math.floor(ne*fe.width),Pe=Math.floor(ne*fe.height);h===void 0&&(h=g(le,Pe));const ye=w?g(le,Pe):h;return ye.width=le,ye.height=Pe,ye.getContext("2d").drawImage(D,0,0,le,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+le+"x"+Pe+")."),ye}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==cn&&D.minFilter!==gn}function m(D){i.generateMipmap(D)}function M(D,w,Q,ne,fe=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let le=w;if(w===i.RED&&(Q===i.FLOAT&&(le=i.R32F),Q===i.HALF_FLOAT&&(le=i.R16F),Q===i.UNSIGNED_BYTE&&(le=i.R8)),w===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.R8UI),Q===i.UNSIGNED_SHORT&&(le=i.R16UI),Q===i.UNSIGNED_INT&&(le=i.R32UI),Q===i.BYTE&&(le=i.R8I),Q===i.SHORT&&(le=i.R16I),Q===i.INT&&(le=i.R32I)),w===i.RG&&(Q===i.FLOAT&&(le=i.RG32F),Q===i.HALF_FLOAT&&(le=i.RG16F),Q===i.UNSIGNED_BYTE&&(le=i.RG8)),w===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RG8UI),Q===i.UNSIGNED_SHORT&&(le=i.RG16UI),Q===i.UNSIGNED_INT&&(le=i.RG32UI),Q===i.BYTE&&(le=i.RG8I),Q===i.SHORT&&(le=i.RG16I),Q===i.INT&&(le=i.RG32I)),w===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Q===i.UNSIGNED_INT&&(le=i.RGB32UI),Q===i.BYTE&&(le=i.RGB8I),Q===i.SHORT&&(le=i.RGB16I),Q===i.INT&&(le=i.RGB32I)),w===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Q===i.UNSIGNED_INT&&(le=i.RGBA32UI),Q===i.BYTE&&(le=i.RGBA8I),Q===i.SHORT&&(le=i.RGBA16I),Q===i.INT&&(le=i.RGBA32I)),w===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),w===i.RGBA){const Pe=fe?Io:ft.getTransfer(ne);Q===i.FLOAT&&(le=i.RGBA32F),Q===i.HALF_FLOAT&&(le=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(le=Pe===bt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function v(D,w){let Q;return D?w===null||w===Vi||w===vs?Q=i.DEPTH24_STENCIL8:w===Un?Q=i.DEPTH32F_STENCIL8:w===_r&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vi||w===vs?Q=i.DEPTH_COMPONENT24:w===Un?Q=i.DEPTH_COMPONENT32F:w===_r&&(Q=i.DEPTH_COMPONENT16),Q}function y(D,w){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==cn&&D.minFilter!==gn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function A(D){const w=D.target;w.removeEventListener("dispose",A),T(w),w.isVideoTexture&&u.delete(w)}function E(D){const w=D.target;w.removeEventListener("dispose",E),q(w)}function T(D){const w=n.get(D);if(w.__webglInit===void 0)return;const Q=D.source,ne=d.get(Q);if(ne){const fe=ne[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&U(D),Object.keys(ne).length===0&&d.delete(Q)}n.remove(D)}function U(D){const w=n.get(D);i.deleteTexture(w.__webglTexture);const Q=D.source,ne=d.get(Q);delete ne[w.__cacheKey],o.memory.textures--}function q(D){const w=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let fe=0;fe<w.__webglFramebuffer[ne].length;fe++)i.deleteFramebuffer(w.__webglFramebuffer[ne][fe]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=D.textures;for(let ne=0,fe=Q.length;ne<fe;ne++){const le=n.get(Q[ne]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Q[ne])}n.remove(D)}let x=0;function S(){x=0}function C(){const D=x;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),x+=1,D}function N(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function k(D,w){const Q=n.get(D);if(D.isVideoTexture&&be(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const ne=D.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Q,D,w);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+w)}function B(D,w){const Q=n.get(D);if(D.version>0&&Q.__version!==D.version){Y(Q,D,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+w)}function b(D,w){const Q=n.get(D);if(D.version>0&&Q.__version!==D.version){Y(Q,D,w);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+w)}function G(D,w){const Q=n.get(D);if(D.version>0&&Q.__version!==D.version){L(Q,D,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+w)}const I={[wi]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},W={[cn]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},H={[km]:i.NEVER,[Xm]:i.ALWAYS,[zm]:i.LESS,[bh]:i.LEQUAL,[Hm]:i.EQUAL,[Wm]:i.GEQUAL,[Gm]:i.GREATER,[Vm]:i.NOTEQUAL};function Z(D,w){if(w.type===Un&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===gn||w.magFilter===bo||w.magFilter===gr||w.magFilter===ai||w.minFilter===gn||w.minFilter===bo||w.minFilter===gr||w.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,I[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,I[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,I[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,W[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,W[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,H[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==gr&&w.minFilter!==ai||w.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function z(D,w){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",A));const ne=w.source;let fe=d.get(ne);fe===void 0&&(fe={},d.set(ne,fe));const le=N(w);if(le!==D.__cacheKey){fe[le]===void 0&&(fe[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),fe[le].usedTimes++;const Pe=fe[D.__cacheKey];Pe!==void 0&&(fe[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&U(w)),D.__cacheKey=le,D.__webglTexture=fe[le].texture}return Q}function Y(D,w,Q){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const fe=z(D,w),le=w.source;t.bindTexture(ne,D.__webglTexture,i.TEXTURE0+Q);const Pe=n.get(le);if(le.version!==Pe.__version||fe===!0){t.activeTexture(i.TEXTURE0+Q);const ye=ft.getPrimaries(ft.workingColorSpace),me=w.colorSpace===Ai?null:ft.getPrimaries(w.colorSpace),Ge=w.colorSpace===Ai||ye===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ge=_(w.image,!1,s.maxTextureSize);ge=Ue(w,ge);const Ie=r.convert(w.format,w.colorSpace),Le=r.convert(w.type);let Ve=M(w.internalFormat,Ie,Le,w.colorSpace,w.isVideoTexture);Z(ne,w);let Be;const Je=w.mipmaps,He=w.isVideoTexture!==!0,ht=Pe.__version===void 0||fe===!0,j=le.dataReady,Oe=y(w,ge);if(w.isDepthTexture)Ve=v(w.format===Ms,w.type),ht&&(He?t.texStorage2D(i.TEXTURE_2D,1,Ve,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Ve,ge.width,ge.height,0,Ie,Le,null));else if(w.isDataTexture)if(Je.length>0){He&&ht&&t.texStorage2D(i.TEXTURE_2D,Oe,Ve,Je[0].width,Je[0].height);for(let ae=0,_e=Je.length;ae<_e;ae++)Be=Je[ae],He?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Be.width,Be.height,Ie,Le,Be.data):t.texImage2D(i.TEXTURE_2D,ae,Ve,Be.width,Be.height,0,Ie,Le,Be.data);w.generateMipmaps=!1}else He?(ht&&t.texStorage2D(i.TEXTURE_2D,Oe,Ve,ge.width,ge.height),j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,Ie,Le,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,ge.width,ge.height,0,Ie,Le,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Ve,Je[0].width,Je[0].height,ge.depth);for(let ae=0,_e=Je.length;ae<_e;ae++)if(Be=Je[ae],w.format!==An)if(Ie!==null)if(He){if(j)if(w.layerUpdates.size>0){const De=Td(Be.width,Be.height,w.format,w.type);for(const Fe of w.layerUpdates){const at=Be.data.subarray(Fe*De/Be.data.BYTES_PER_ELEMENT,(Fe+1)*De/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Fe,Be.width,Be.height,1,Ie,at,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,ge.depth,Ie,Be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ve,Be.width,Be.height,ge.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?j&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,ge.depth,Ie,Le,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ve,Be.width,Be.height,ge.depth,0,Ie,Le,Be.data)}else{He&&ht&&t.texStorage2D(i.TEXTURE_2D,Oe,Ve,Je[0].width,Je[0].height);for(let ae=0,_e=Je.length;ae<_e;ae++)Be=Je[ae],w.format!==An?Ie!==null?He?j&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Be.width,Be.height,Ie,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ve,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Be.width,Be.height,Ie,Le,Be.data):t.texImage2D(i.TEXTURE_2D,ae,Ve,Be.width,Be.height,0,Ie,Le,Be.data)}else if(w.isDataArrayTexture)if(He){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Ve,ge.width,ge.height,ge.depth),j)if(w.layerUpdates.size>0){const ae=Td(ge.width,ge.height,w.format,w.type);for(const _e of w.layerUpdates){const De=ge.data.subarray(_e*ae/ge.data.BYTES_PER_ELEMENT,(_e+1)*ae/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ge.width,ge.height,1,Ie,Le,De)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ie,Le,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,ge.width,ge.height,ge.depth,0,Ie,Le,ge.data);else if(w.isData3DTexture)He?(ht&&t.texStorage3D(i.TEXTURE_3D,Oe,Ve,ge.width,ge.height,ge.depth),j&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ie,Le,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,ge.width,ge.height,ge.depth,0,Ie,Le,ge.data);else if(w.isFramebufferTexture){if(ht)if(He)t.texStorage2D(i.TEXTURE_2D,Oe,Ve,ge.width,ge.height);else{let ae=ge.width,_e=ge.height;for(let De=0;De<Oe;De++)t.texImage2D(i.TEXTURE_2D,De,Ve,ae,_e,0,Ie,Le,null),ae>>=1,_e>>=1}}else if(Je.length>0){if(He&&ht){const ae=we(Je[0]);t.texStorage2D(i.TEXTURE_2D,Oe,Ve,ae.width,ae.height)}for(let ae=0,_e=Je.length;ae<_e;ae++)Be=Je[ae],He?j&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ie,Le,Be):t.texImage2D(i.TEXTURE_2D,ae,Ve,Ie,Le,Be);w.generateMipmaps=!1}else if(He){if(ht){const ae=we(ge);t.texStorage2D(i.TEXTURE_2D,Oe,Ve,ae.width,ae.height)}j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Le,ge)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Ie,Le,ge);p(w)&&m(ne),Pe.__version=le.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function L(D,w,Q){if(w.image.length!==6)return;const ne=z(D,w),fe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Q);const le=n.get(fe);if(fe.version!==le.__version||ne===!0){t.activeTexture(i.TEXTURE0+Q);const Pe=ft.getPrimaries(ft.workingColorSpace),ye=w.colorSpace===Ai?null:ft.getPrimaries(w.colorSpace),me=w.colorSpace===Ai||Pe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ge=w.isCompressedTexture||w.image[0].isCompressedTexture,ge=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let _e=0;_e<6;_e++)!Ge&&!ge?Ie[_e]=_(w.image[_e],!0,s.maxCubemapSize):Ie[_e]=ge?w.image[_e].image:w.image[_e],Ie[_e]=Ue(w,Ie[_e]);const Le=Ie[0],Ve=r.convert(w.format,w.colorSpace),Be=r.convert(w.type),Je=M(w.internalFormat,Ve,Be,w.colorSpace),He=w.isVideoTexture!==!0,ht=le.__version===void 0||ne===!0,j=fe.dataReady;let Oe=y(w,Le);Z(i.TEXTURE_CUBE_MAP,w);let ae;if(Ge){He&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,Je,Le.width,Le.height);for(let _e=0;_e<6;_e++){ae=Ie[_e].mipmaps;for(let De=0;De<ae.length;De++){const Fe=ae[De];w.format!==An?Ve!==null?He?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,0,0,Fe.width,Fe.height,Ve,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,Je,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,0,0,Fe.width,Fe.height,Ve,Be,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,Je,Fe.width,Fe.height,0,Ve,Be,Fe.data)}}}else{if(ae=w.mipmaps,He&&ht){ae.length>0&&Oe++;const _e=we(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,Je,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ge){He?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ie[_e].width,Ie[_e].height,Ve,Be,Ie[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Je,Ie[_e].width,Ie[_e].height,0,Ve,Be,Ie[_e].data);for(let De=0;De<ae.length;De++){const at=ae[De].image[_e].image;He?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,0,0,at.width,at.height,Ve,Be,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,Je,at.width,at.height,0,Ve,Be,at.data)}}else{He?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ve,Be,Ie[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Je,Ve,Be,Ie[_e]);for(let De=0;De<ae.length;De++){const Fe=ae[De];He?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,0,0,Ve,Be,Fe.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,Je,Ve,Be,Fe.image[_e])}}}p(w)&&m(i.TEXTURE_CUBE_MAP),le.__version=fe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function K(D,w,Q,ne,fe,le){const Pe=r.convert(Q.format,Q.colorSpace),ye=r.convert(Q.type),me=M(Q.internalFormat,Pe,ye,Q.colorSpace);if(!n.get(w).__hasExternalTextures){const ge=Math.max(1,w.width>>le),Ie=Math.max(1,w.height>>le);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,le,me,ge,Ie,w.depth,0,Pe,ye,null):t.texImage2D(fe,le,me,ge,Ie,0,Pe,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,fe,n.get(Q).__webglTexture,0,oe(w)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,fe,n.get(Q).__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(D,w,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){const ne=w.depthTexture,fe=ne&&ne.isDepthTexture?ne.type:null,le=v(w.stencilBuffer,fe),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=oe(w);de(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,le,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,le,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,D)}else{const ne=w.textures;for(let fe=0;fe<ne.length;fe++){const le=ne[fe],Pe=r.convert(le.format,le.colorSpace),ye=r.convert(le.type),me=M(le.internalFormat,Pe,ye,le.colorSpace),Ge=oe(w);Q&&de(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,me,w.width,w.height):de(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,me,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,fe=oe(w);if(w.depthTexture.format===ys)de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(w.depthTexture.format===Ms)de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function se(D){const w=n.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const ne=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const fe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",fe)};ne.addEventListener("dispose",fe),w.__depthDisposeCallback=fe}w.__boundDepthTexture=ne}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ee(w.__webglFramebuffer,D)}else if(Q){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),ie(w.__webglDepthbuffer[ne],D,!1);else{const fe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,le)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ie(w.__webglDepthbuffer,D,!1);else{const ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(D,w,Q){const ne=n.get(D);w!==void 0&&K(ne.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&se(D)}function ce(D){const w=D.texture,Q=n.get(D),ne=n.get(w);D.addEventListener("dispose",E);const fe=D.textures,le=D.isWebGLCubeRenderTarget===!0,Pe=fe.length>1;if(Pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),le){Q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[ye]=[];for(let me=0;me<w.mipmaps.length;me++)Q.__webglFramebuffer[ye][me]=i.createFramebuffer()}else Q.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ye=0;ye<w.mipmaps.length;ye++)Q.__webglFramebuffer[ye]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ye=0,me=fe.length;ye<me;ye++){const Ge=n.get(fe[ye]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&de(D)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){const me=fe[ye];Q.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ye]);const Ge=r.convert(me.format,me.colorSpace),ge=r.convert(me.type),Ie=M(me.internalFormat,Ge,ge,me.colorSpace,D.isXRRenderTarget===!0),Le=oe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ie,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Z(i.TEXTURE_CUBE_MAP,w);for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)K(Q.__webglFramebuffer[ye][me],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,me);else K(Q.__webglFramebuffer[ye],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ye=0,me=fe.length;ye<me;ye++){const Ge=fe[ye],ge=n.get(Ge);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),Z(i.TEXTURE_2D,Ge),K(Q.__webglFramebuffer,D,Ge,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),p(Ge)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ne.__webglTexture),Z(ye,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)K(Q.__webglFramebuffer[me],D,w,i.COLOR_ATTACHMENT0,ye,me);else K(Q.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,ye,0);p(w)&&m(ye),t.unbindTexture()}D.depthBuffer&&se(D)}function he(D){const w=D.textures;for(let Q=0,ne=w.length;Q<ne;Q++){const fe=w[Q];if(p(fe)){const le=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(fe).__webglTexture;t.bindTexture(le,Pe),m(le),t.unbindTexture()}}}const J=[],R=[];function re(D){if(D.samples>0){if(de(D)===!1){const w=D.textures,Q=D.width,ne=D.height;let fe=i.COLOR_BUFFER_BIT;const le=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(D),ye=w.length>1;if(ye)for(let me=0;me<w.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let me=0;me<w.length;me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[me]);const Ge=n.get(w[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,Q,ne,0,0,Q,ne,fe,i.NEAREST),c===!0&&(J.length=0,R.length=0,J.push(i.COLOR_ATTACHMENT0+me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(J.push(le),R.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let me=0;me<w.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[me]);const Ge=n.get(w[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function oe(D){return Math.min(s.maxSamples,D.samples)}function de(D){const w=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(D){const w=o.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function Ue(D,w){const Q=D.colorSpace,ne=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Qt&&Q!==Ai&&(ft.getTransfer(Q)===bt?(ne!==An||fe!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function we(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=C,this.resetTextureUnits=S,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=b,this.setTextureCube=G,this.rebindTextures=te,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=K,this.useMultisampledRTT=de}function Lv(i,e){function t(n,s=Ai){let r;const o=ft.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.BYTE;if(n===dh)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===An)return i.RGBA;if(n===gh)return i.LUMINANCE;if(n===_h)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===xh)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===wo||n===Eo||n===Ao||n===To)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===_c||n===xc||n===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===Mc)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bc||n===wc||n===Ec||n===Ac||n===Tc||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Nc||n===Dc||n===Uc||n===Oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Fc||n===Bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===kc||n===zc||n===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Nv extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dv={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
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

}`;class Fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Gt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Li({vertexShader:Uv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bv extends Wi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new Fv,p=t.getContextAttributes();let m=null,M=null;const v=[],y=[],A=new Se;let E=null;const T=new kt;T.layers.enable(1),T.viewport=new pt;const U=new kt;U.layers.enable(2),U.viewport=new pt;const q=[T,U],x=new Nv;x.layers.enable(1),x.layers.enable(2);let S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let K=v[L];return K===void 0&&(K=new El,v[L]=K),K.getTargetRaySpace()},this.getControllerGrip=function(L){let K=v[L];return K===void 0&&(K=new El,v[L]=K),K.getGripSpace()},this.getHand=function(L){let K=v[L];return K===void 0&&(K=new El,v[L]=K),K.getHandSpace()};function N(L){const K=y.indexOf(L.inputSource);if(K===-1)return;const ie=v[K];ie!==void 0&&(ie.update(L.inputSource,L.frame,l||o),ie.dispatchEvent({type:L.type,data:L.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",B);for(let L=0;L<v.length;L++){const K=y[L];K!==null&&(y[L]=null,v[L].disconnect(K))}S=null,C=null,_.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,M=null,Y.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new qi(f.framebufferWidth,f.framebufferHeight,{format:An,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ie=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=p.stencil?Ms:ys,ie=p.stencil?vs:Vi);const se={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new qi(d.textureWidth,d.textureHeight,{format:An,type:ci,depthTexture:new od(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(L){for(let K=0;K<L.removed.length;K++){const ie=L.removed[K],ee=y.indexOf(ie);ee>=0&&(y[ee]=null,v[ee].disconnect(ie))}for(let K=0;K<L.added.length;K++){const ie=L.added[K];let ee=y.indexOf(ie);if(ee===-1){for(let te=0;te<v.length;te++)if(te>=y.length){y.push(ie),ee=te;break}else if(y[te]===null){y[te]=ie,ee=te;break}if(ee===-1)break}const se=v[ee];se&&se.connect(ie)}}const b=new F,G=new F;function I(L,K,ie){b.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(ie.matrixWorld);const ee=b.distanceTo(G),se=K.projectionMatrix.elements,te=ie.projectionMatrix.elements,ce=se[14]/(se[10]-1),he=se[14]/(se[10]+1),J=(se[9]+1)/se[5],R=(se[9]-1)/se[5],re=(se[8]-1)/se[0],oe=(te[8]+1)/te[0],de=ce*re,be=ce*oe,Ue=ee/(-re+oe),we=Ue*-re;if(K.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(we),L.translateZ(Ue),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),se[10]===-1)L.projectionMatrix.copy(K.projectionMatrix),L.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const D=ce+Ue,w=he+Ue,Q=de-we,ne=be+(ee-we),fe=J*he/w*D,le=R*he/w*D;L.projectionMatrix.makePerspective(Q,ne,fe,le,D,w),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function W(L,K){K===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(K.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let K=L.near,ie=L.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),x.near=U.near=T.near=K,x.far=U.far=T.far=ie,(S!==x.near||C!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,C=x.far);const ee=L.parent,se=x.cameras;W(x,ee);for(let te=0;te<se.length;te++)W(se[te],ee);se.length===2?I(x,T,U):x.projectionMatrix.copy(T.projectionMatrix),H(L,x,ee)};function H(L,K,ie){ie===null?L.matrix.copy(K.matrixWorld):(L.matrix.copy(ie.matrixWorld),L.matrix.invert(),L.matrix.multiply(K.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(K.projectionMatrix),L.projectionMatrixInverse.copy(K.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Es*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(L){c=L,d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Z=null;function z(L,K){if(u=K.getViewerPose(l||o),g=K,u!==null){const ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ee=!1;ie.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let te=0;te<ie.length;te++){const ce=ie[te];let he=null;if(f!==null)he=f.getViewport(ce);else{const R=h.getViewSubImage(d,ce);he=R.viewport,te===0&&(e.setRenderTargetTextures(M,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(M))}let J=q[te];J===void 0&&(J=new kt,J.layers.enable(te),J.viewport=new pt,q[te]=J),J.matrix.fromArray(ce.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ce.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(he.x,he.y,he.width,he.height),te===0&&(x.matrix.copy(J.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ee===!0&&x.cameras.push(J)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")){const te=h.getDepthInformation(ie[0]);te&&te.isValid&&te.texture&&_.init(e,te,s.renderState)}}for(let ie=0;ie<v.length;ie++){const ee=y[ie],se=v[ie];ee!==null&&se!==void 0&&se.update(ee,K,l||o)}Z&&Z(L,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Y=new Qh;Y.setAnimationLoop(z),this.setAnimationLoop=function(L){Z=L},this.dispose=function(){}}}const ts=new qt,kv=new je;function zv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Kh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,y=M.envMapRotation;v&&(p.envMap.value=v,ts.copy(y),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),p.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(ts)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function l(M,v){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(M,A);const E=e.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function u(M){const v=h();M.__bindingPointIndex=v;const y=i.createBuffer(),A=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const U=Array.isArray(y[E])?y[E]:[y[E]];for(let q=0,x=U.length;q<x;q++){const S=U[q];if(f(S,E,q,A)===!0){const C=S.__offset,N=Array.isArray(S.value)?S.value:[S.value];let k=0;for(let B=0;B<N.length;B++){const b=N[B],G=_(b);typeof b=="number"||typeof b=="boolean"?(S.__data[0]=b,i.bufferSubData(i.UNIFORM_BUFFER,C+k,S.__data)):b.isMatrix3?(S.__data[0]=b.elements[0],S.__data[1]=b.elements[1],S.__data[2]=b.elements[2],S.__data[3]=0,S.__data[4]=b.elements[3],S.__data[5]=b.elements[4],S.__data[6]=b.elements[5],S.__data[7]=0,S.__data[8]=b.elements[6],S.__data[9]=b.elements[7],S.__data[10]=b.elements[8],S.__data[11]=0):(b.toArray(S.__data,k),k+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,y,A){const E=M.value,T=v+"_"+y;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const U=A[T];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return A[T]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function g(M){const v=M.uniforms;let y=0;const A=16;for(let T=0,U=v.length;T<U;T++){const q=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,S=q.length;x<S;x++){const C=q[x],N=Array.isArray(C.value)?C.value:[C.value];for(let k=0,B=N.length;k<B;k++){const b=N[k],G=_(b),I=y%A,W=I%G.boundary,H=I+W;y+=W,H!==0&&A-H<G.storage&&(y+=A-H),C.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=G.storage}}}const E=y%A;return E>0&&(y+=A-E),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Gv{constructor(e={}){const{canvas:t=l0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=bi,this.toneMappingExposure=1;const v=this;let y=!1,A=0,E=0,T=null,U=-1,q=null;const x=new pt,S=new pt;let C=null;const N=new We(0);let k=0,B=t.width,b=t.height,G=1,I=null,W=null;const H=new pt(0,0,B,b),Z=new pt(0,0,B,b);let z=!1;const Y=new ml;let L=!1,K=!1;const ie=new je,ee=new je,se=new F,te=new pt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function J(){return T===null?G:1}let R=n;function re(P,O){return t.getContext(P,O)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),R===null){const O="webgl2";if(R=re(O,P),R===null)throw re(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let oe,de,be,Ue,we,D,w,Q,ne,fe,le,Pe,ye,me,Ge,ge,Ie,Le,Ve,Be,Je,He,ht,j;function Oe(){oe=new Y_(R),oe.init(),He=new Lv(R,oe),de=new H_(R,oe,e,He),be=new Cv(R),de.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),Ue=new j_(R),we=new pv,D=new Iv(R,oe,be,we,de,He,Ue),w=new V_(v),Q=new q_(v),ne=new F0(R),ht=new k_(R,ne),fe=new K_(R,ne,Ue,ht),le=new Z_(R,fe,ne,Ue),Ve=new J_(R,de,D),ge=new G_(we),Pe=new fv(v,w,Q,oe,de,ht,ge),ye=new zv(v,we),me=new gv,Ge=new Sv(oe),Le=new B_(v,w,Q,be,le,d,c),Ie=new Tv(v,le,de),j=new Hv(R,Ue,de,be),Be=new z_(R,oe,Ue),Je=new $_(R,oe,Ue),Ue.programs=Pe.programs,v.capabilities=de,v.extensions=oe,v.properties=we,v.renderLists=me,v.shadowMap=Ie,v.state=be,v.info=Ue}Oe();const ae=new Bv(v,R);this.xr=ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=oe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=oe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(B,b,!1))},this.getSize=function(P){return P.set(B,b)},this.setSize=function(P,O,V=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,b=O,t.width=Math.floor(P*G),t.height=Math.floor(O*G),V===!0&&(t.style.width=P+"px",t.style.height=O+"px"),this.setViewport(0,0,P,O)},this.getDrawingBufferSize=function(P){return P.set(B*G,b*G).floor()},this.setDrawingBufferSize=function(P,O,V){B=P,b=O,G=V,t.width=Math.floor(P*V),t.height=Math.floor(O*V),this.setViewport(0,0,P,O)},this.getCurrentViewport=function(P){return P.copy(x)},this.getViewport=function(P){return P.copy(H)},this.setViewport=function(P,O,V,$){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,O,V,$),be.viewport(x.copy(H).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(Z)},this.setScissor=function(P,O,V,$){P.isVector4?Z.set(P.x,P.y,P.z,P.w):Z.set(P,O,V,$),be.scissor(S.copy(Z).multiplyScalar(G).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(P){be.setScissorTest(z=P)},this.setOpaqueSort=function(P){I=P},this.setTransparentSort=function(P){W=P},this.getClearColor=function(P){return P.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(P=!0,O=!0,V=!0){let $=0;if(P){let X=!1;if(T!==null){const ue=T.texture.format;X=ue===mc||ue===pc||ue===fc}if(X){const ue=T.texture.type,xe=ue===ci||ue===Vi||ue===_r||ue===vs||ue===uc||ue===hc,ve=Le.getClearColor(),Ee=Le.getClearAlpha(),Ce=ve.r,Re=ve.g,Te=ve.b;xe?(f[0]=Ce,f[1]=Re,f[2]=Te,f[3]=Ee,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=Ce,g[1]=Re,g[2]=Te,g[3]=Ee,R.clearBufferiv(R.COLOR,0,g))}else $|=R.COLOR_BUFFER_BIT}O&&($|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&($|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),me.dispose(),Ge.dispose(),we.dispose(),w.dispose(),Q.dispose(),le.dispose(),ht.dispose(),j.dispose(),Pe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ds),ae.removeEventListener("sessionend",mr),Me.stop()};function _e(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=Ue.autoReset,O=Ie.enabled,V=Ie.autoUpdate,$=Ie.needsUpdate,X=Ie.type;Oe(),Ue.autoReset=P,Ie.enabled=O,Ie.autoUpdate=V,Ie.needsUpdate=$,Ie.type=X}function Fe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function at(P){const O=P.target;O.removeEventListener("dispose",at),Mt(O)}function Mt(P){$t(P),we.remove(P)}function $t(P){const O=we.get(P).programs;O!==void 0&&(O.forEach(function(V){Pe.releaseProgram(V)}),P.isShaderMaterial&&Pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,O,V,$,X,ue){O===null&&(O=ce);const xe=X.isMesh&&X.matrixWorld.determinant()<0,ve=Nn(P,O,V,$,X);be.setMaterial($,xe);let Ee=V.index,Ce=1;if($.wireframe===!0){if(Ee=fe.getWireframeAttribute(V),Ee===void 0)return;Ce=2}const Re=V.drawRange,Te=V.attributes.position;let Xe=Re.start*Ce,Ye=(Re.start+Re.count)*Ce;ue!==null&&(Xe=Math.max(Xe,ue.start*Ce),Ye=Math.min(Ye,(ue.start+ue.count)*Ce)),Ee!==null?(Xe=Math.max(Xe,0),Ye=Math.min(Ye,Ee.count)):Te!=null&&(Xe=Math.max(Xe,0),Ye=Math.min(Ye,Te.count));const st=Ye-Xe;if(st<0||st===1/0)return;ht.setup(X,$,ve,V,Ee);let vt,Ze=Be;if(Ee!==null&&(vt=ne.get(Ee),Ze=Je,Ze.setIndex(vt)),X.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*J()),Ze.setMode(R.LINES)):Ze.setMode(R.TRIANGLES);else if(X.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),be.setLineWidth(ke*J()),X.isLineSegments?Ze.setMode(R.LINES):X.isLineLoop?Ze.setMode(R.LINE_LOOP):Ze.setMode(R.LINE_STRIP)}else X.isPoints?Ze.setMode(R.POINTS):X.isSprite&&Ze.setMode(R.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ze.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Ze.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ke=X._multiDrawStarts,Rt=X._multiDrawCounts,ct=X._multiDrawCount,mn=Ee?ne.get(Ee).bytesPerElement:1,Mi=we.get($).currentProgram.getUniforms();for(let En=0;En<ct;En++)Mi.setValue(R,"_gl_DrawID",En),Ze.render(ke[En]/mn,Rt[En])}else if(X.isInstancedMesh)Ze.renderInstances(Xe,st,X.count);else if(V.isInstancedBufferGeometry){const ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Rt=Math.min(V.instanceCount,ke);Ze.renderInstances(Xe,st,Rt)}else Ze.render(Xe,st)};function ut(P,O,V){P.transparent===!0&&P.side===Zt&&P.forceSinglePass===!1?(P.side=Jt,P.needsUpdate=!0,Ln(P,O,V),P.side=ri,P.needsUpdate=!0,Ln(P,O,V),P.side=Zt):Ln(P,O,V)}this.compile=function(P,O,V=null){V===null&&(V=P),p=Ge.get(V),p.init(O),M.push(p),V.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),P!==V&&P.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const $=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ue=X.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const ve=ue[xe];ut(ve,V,X),$.add(ve)}else ut(ue,V,X),$.add(ue)}),M.pop(),p=null,$},this.compileAsync=function(P,O,V=null){const $=this.compile(P,O,V);return new Promise(X=>{function ue(){if($.forEach(function(xe){we.get(xe).currentProgram.isReady()&&$.delete(xe)}),$.size===0){X(P);return}setTimeout(ue,10)}oe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let zt=null;function wn(P){zt&&zt(P)}function ds(){Me.stop()}function mr(){Me.start()}const Me=new Qh;Me.setAnimationLoop(wn),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(P){zt=P,ae.setAnimationLoop(P),P===null?Me.stop():Me.start()},ae.addEventListener("sessionstart",ds),ae.addEventListener("sessionend",mr),this.render=function(P,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,O,T),p=Ge.get(P,M.length),p.init(O),M.push(p),ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(ee),K=this.localClippingEnabled,L=ge.init(this.clippingPlanes,K),_=me.get(P,m.length),_.init(),m.push(_),ae.enabled===!0&&ae.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&ze(ue,O,-1/0,v.sortObjects)}ze(P,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(I,W),he=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,he&&Le.addToRenderList(_,P),this.info.render.frame++,L===!0&&ge.beginShadows();const V=p.state.shadowsArray;Ie.render(V,P,O),L===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,X=_.transmissive;if(p.setupLights(),O.isArrayCamera){const ue=O.cameras;if(X.length>0)for(let xe=0,ve=ue.length;xe<ve;xe++){const Ee=ue[xe];it($,X,P,Ee)}he&&Le.render(P);for(let xe=0,ve=ue.length;xe<ve;xe++){const Ee=ue[xe];et(_,P,Ee,Ee.viewport)}}else X.length>0&&it($,X,P,O),he&&Le.render(P),et(_,P,O);T!==null&&(D.updateMultisampleRenderTarget(T),D.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(v,P,O),ht.resetDefaultState(),U=-1,q=null,M.pop(),M.length>0?(p=M[M.length-1],L===!0&&ge.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ze(P,O,V,$){if(P.visible===!1)return;if(P.layers.test(O.layers)){if(P.isGroup)V=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(O);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){$&&te.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ee);const xe=le.update(P),ve=P.material;ve.visible&&_.push(P,xe,ve,V,te.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){const xe=le.update(P),ve=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),te.copy(P.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),te.copy(xe.boundingSphere.center)),te.applyMatrix4(P.matrixWorld).applyMatrix4(ee)),Array.isArray(ve)){const Ee=xe.groups;for(let Ce=0,Re=Ee.length;Ce<Re;Ce++){const Te=Ee[Ce],Xe=ve[Te.materialIndex];Xe&&Xe.visible&&_.push(P,xe,Xe,V,te.z,Te)}}else ve.visible&&_.push(P,xe,ve,V,te.z,null)}}const ue=P.children;for(let xe=0,ve=ue.length;xe<ve;xe++)ze(ue[xe],O,V,$)}function et(P,O,V,$){const X=P.opaque,ue=P.transmissive,xe=P.transparent;p.setupLightsView(V),L===!0&&ge.setGlobalState(v.clippingPlanes,V),$&&be.viewport(x.copy($)),X.length>0&&Lt(X,O,V),ue.length>0&&Lt(ue,O,V),xe.length>0&&Lt(xe,O,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function it(P,O,V,$){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new qi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?xr:ci,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ue=p.state.transmissionRenderTarget[$.id],xe=$.viewport||x;ue.setSize(xe.z,xe.w);const ve=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(N),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),he&&Le.render(V);const Ee=v.toneMapping;v.toneMapping=bi;const Ce=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),L===!0&&ge.setGlobalState(v.clippingPlanes,$),Lt(P,V,$),D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Te=0,Xe=O.length;Te<Xe;Te++){const Ye=O[Te],st=Ye.object,vt=Ye.geometry,Ze=Ye.material,ke=Ye.group;if(Ze.side===Zt&&st.layers.test($.layers)){const Rt=Ze.side;Ze.side=Jt,Ze.needsUpdate=!0,jt(st,V,$,vt,Ze,ke),Ze.side=Rt,Ze.needsUpdate=!0,Re=!0}}Re===!0&&(D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue))}v.setRenderTarget(ve),v.setClearColor(N,k),Ce!==void 0&&($.viewport=Ce),v.toneMapping=Ee}function Lt(P,O,V){const $=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ue=P.length;X<ue;X++){const xe=P[X],ve=xe.object,Ee=xe.geometry,Ce=$===null?xe.material:$,Re=xe.group;ve.layers.test(V.layers)&&jt(ve,O,V,Ee,Ce,Re)}}function jt(P,O,V,$,X,ue){P.onBeforeRender(v,O,V,$,X,ue),P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(v,O,V,$,P,ue),X.transparent===!0&&X.side===Zt&&X.forceSinglePass===!1?(X.side=Jt,X.needsUpdate=!0,v.renderBufferDirect(V,O,$,X,P,ue),X.side=ri,X.needsUpdate=!0,v.renderBufferDirect(V,O,$,X,P,ue),X.side=Zt):v.renderBufferDirect(V,O,$,X,P,ue),P.onAfterRender(v,O,V,$,X,ue)}function Ln(P,O,V){O.isScene!==!0&&(O=ce);const $=we.get(P),X=p.state.lights,ue=p.state.shadowsArray,xe=X.state.version,ve=Pe.getParameters(P,X.state,ue,O,V),Ee=Pe.getProgramCacheKey(ve);let Ce=$.programs;$.environment=P.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(P.isMeshStandardMaterial?Q:w).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?O.environmentRotation:P.envMapRotation,Ce===void 0&&(P.addEventListener("dispose",at),Ce=new Map,$.programs=Ce);let Re=Ce.get(Ee);if(Re!==void 0){if($.currentProgram===Re&&$.lightsStateVersion===xe)return fs(P,ve),Re}else ve.uniforms=Pe.getUniforms(P),P.onBeforeCompile(ve,v),Re=Pe.acquireProgram(ve,Ee),Ce.set(Ee,Re),$.uniforms=ve.uniforms;const Te=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Te.clippingPlanes=ge.uniform),fs(P,ve),$.needsLights=yo(P),$.lightsStateVersion=xe,$.needsLights&&(Te.ambientLightColor.value=X.state.ambient,Te.lightProbe.value=X.state.probe,Te.directionalLights.value=X.state.directional,Te.directionalLightShadows.value=X.state.directionalShadow,Te.spotLights.value=X.state.spot,Te.spotLightShadows.value=X.state.spotShadow,Te.rectAreaLights.value=X.state.rectArea,Te.ltc_1.value=X.state.rectAreaLTC1,Te.ltc_2.value=X.state.rectAreaLTC2,Te.pointLights.value=X.state.point,Te.pointLightShadows.value=X.state.pointShadow,Te.hemisphereLights.value=X.state.hemi,Te.directionalShadowMap.value=X.state.directionalShadowMap,Te.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Te.spotShadowMap.value=X.state.spotShadowMap,Te.spotLightMatrix.value=X.state.spotLightMatrix,Te.spotLightMap.value=X.state.spotLightMap,Te.pointShadowMap.value=X.state.pointShadowMap,Te.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Re,$.uniformsList=null,Re}function Yn(P){if(P.uniformsList===null){const O=P.currentProgram.getUniforms();P.uniformsList=ia.seqWithValue(O.seq,P.uniforms)}return P.uniformsList}function fs(P,O){const V=we.get(P);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Nn(P,O,V,$,X){O.isScene!==!0&&(O=ce),D.resetTextureUnits();const ue=O.fog,xe=$.isMeshStandardMaterial?O.environment:null,ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qt,Ee=($.isMeshStandardMaterial?Q:w).get($.envMap||xe),Ce=$.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Re=!!V.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Te=!!V.morphAttributes.position,Xe=!!V.morphAttributes.normal,Ye=!!V.morphAttributes.color;let st=bi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(st=v.toneMapping);const vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=vt!==void 0?vt.length:0,ke=we.get($),Rt=p.state.lights;if(L===!0&&(K===!0||P!==q)){const Dn=P===q&&$.id===U;ge.setState($,P,Dn)}let ct=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Rt.state.version||ke.outputColorSpace!==ve||X.isBatchedMesh&&ke.batching===!1||!X.isBatchedMesh&&ke.batching===!0||X.isBatchedMesh&&ke.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ke.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||X.isInstancedMesh&&ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ke.instancingMorph===!1&&X.morphTexture!==null||ke.envMap!==Ee||$.fog===!0&&ke.fog!==ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ge.numPlanes||ke.numIntersection!==ge.numIntersection)||ke.vertexAlphas!==Ce||ke.vertexTangents!==Re||ke.morphTargets!==Te||ke.morphNormals!==Xe||ke.morphColors!==Ye||ke.toneMapping!==st||ke.morphTargetsCount!==Ze)&&(ct=!0):(ct=!0,ke.__version=$.version);let mn=ke.currentProgram;ct===!0&&(mn=Ln($,O,X));let Mi=!1,En=!1,Ju=!1;const Ft=mn.getUniforms(),Hi=ke.uniforms;if(be.useProgram(mn.program)&&(Mi=!0,En=!0,Ju=!0),$.id!==U&&(U=$.id,En=!0),Mi||q!==P){de.reverseDepthBuffer?(ie.copy(P.projectionMatrix),h0(ie),d0(ie),Ft.setValue(R,"projectionMatrix",ie)):Ft.setValue(R,"projectionMatrix",P.projectionMatrix),Ft.setValue(R,"viewMatrix",P.matrixWorldInverse);const Dn=Ft.map.cameraPosition;Dn!==void 0&&Dn.setValue(R,se.setFromMatrixPosition(P.matrixWorld)),de.logarithmicDepthBuffer&&Ft.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ft.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),q!==P&&(q=P,En=!0,Ju=!0)}if(X.isSkinnedMesh){Ft.setOptional(R,X,"bindMatrix"),Ft.setOptional(R,X,"bindMatrixInverse");const Dn=X.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Ft.setValue(R,"boneTexture",Dn.boneTexture,D))}X.isBatchedMesh&&(Ft.setOptional(R,X,"batchingTexture"),Ft.setValue(R,"batchingTexture",X._matricesTexture,D),Ft.setOptional(R,X,"batchingIdTexture"),Ft.setValue(R,"batchingIdTexture",X._indirectTexture,D),Ft.setOptional(R,X,"batchingColorTexture"),X._colorsTexture!==null&&Ft.setValue(R,"batchingColorTexture",X._colorsTexture,D));const Zu=V.morphAttributes;if((Zu.position!==void 0||Zu.normal!==void 0||Zu.color!==void 0)&&Ve.update(X,V,mn),(En||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,Ft.setValue(R,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Hi.envMap.value=Ee,Hi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(Hi.envMapIntensity.value=O.environmentIntensity),En&&(Ft.setValue(R,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&ps(Hi,Ju),ue&&$.fog===!0&&ye.refreshFogUniforms(Hi,ue),ye.refreshMaterialUniforms(Hi,$,G,b,p.state.transmissionRenderTarget[P.id]),ia.upload(R,Yn(ke),Hi,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ia.upload(R,Yn(ke),Hi,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ft.setValue(R,"center",X.center),Ft.setValue(R,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(R,"normalMatrix",X.normalMatrix),Ft.setValue(R,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Dn=$.uniformsGroups;for(let Qu=0,yE=Dn.length;Qu<yE;Qu++){const tm=Dn[Qu];j.update(tm,mn),j.bind(tm,mn)}}return mn}function ps(P,O){P.ambientLightColor.needsUpdate=O,P.lightProbe.needsUpdate=O,P.directionalLights.needsUpdate=O,P.directionalLightShadows.needsUpdate=O,P.pointLights.needsUpdate=O,P.pointLightShadows.needsUpdate=O,P.spotLights.needsUpdate=O,P.spotLightShadows.needsUpdate=O,P.rectAreaLights.needsUpdate=O,P.hemisphereLights.needsUpdate=O}function yo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,O,V){we.get(P.texture).__webglTexture=O,we.get(P.depthTexture).__webglTexture=V;const $=we.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=V===void 0,$.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,O){const V=we.get(P);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(P,O=0,V=0){T=P,A=O,E=V;let $=!0,X=null,ue=!1,xe=!1;if(P){const Ee=we.get(P);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(R.FRAMEBUFFER,null),$=!1;else if(Ee.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(Ee.__hasExternalTextures)D.rebindTextures(P,we.get(P.texture).__webglTexture,we.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Te=P.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&we.has(Te)&&(P.width!==Te.image.width||P.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Ce=P.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Re=we.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?X=Re[O][V]:X=Re[O],ue=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?X=we.get(P).__webglMultisampledFramebuffer:Array.isArray(Re)?X=Re[V]:X=Re,x.copy(P.viewport),S.copy(P.scissor),C=P.scissorTest}else x.copy(H).multiplyScalar(G).floor(),S.copy(Z).multiplyScalar(G).floor(),C=z;if(be.bindFramebuffer(R.FRAMEBUFFER,X)&&$&&be.drawBuffers(P,X),be.viewport(x),be.scissor(S),be.setScissorTest(C),ue){const Ee=we.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,V)}else if(xe){const Ee=we.get(P.texture),Ce=O||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Ce)}U=-1},this.readRenderTargetPixels=function(P,O,V,$,X,ue,xe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){be.bindFramebuffer(R.FRAMEBUFFER,ve);try{const Ee=P.texture,Ce=Ee.format,Re=Ee.type;if(!de.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=P.width-$&&V>=0&&V<=P.height-X&&R.readPixels(O,V,$,X,He.convert(Ce),He.convert(Re),ue)}finally{const Ee=T!==null?we.get(T).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(P,O,V,$,X,ue,xe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){const Ee=P.texture,Ce=Ee.format,Re=Ee.type;if(!de.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=P.width-$&&V>=0&&V<=P.height-X){be.bindFramebuffer(R.FRAMEBUFFER,ve);const Te=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Te),R.bufferData(R.PIXEL_PACK_BUFFER,ue.byteLength,R.STREAM_READ),R.readPixels(O,V,$,X,He.convert(Ce),He.convert(Re),0);const Xe=T!==null?we.get(T).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,Xe);const Ye=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await u0(R,Ye,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Te),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ue),R.deleteBuffer(Te),R.deleteSync(Ye),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,O=null,V=0){P.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,P=arguments[1]);const $=Math.pow(2,-V),X=Math.floor(P.image.width*$),ue=Math.floor(P.image.height*$),xe=O!==null?O.x:0,ve=O!==null?O.y:0;D.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,xe,ve,X,ue),be.unbindTexture()},this.copyTextureToTexture=function(P,O,V=null,$=null,X=0){P.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],O=arguments[2],X=arguments[3]||0,V=null);let ue,xe,ve,Ee,Ce,Re;V!==null?(ue=V.max.x-V.min.x,xe=V.max.y-V.min.y,ve=V.min.x,Ee=V.min.y):(ue=P.image.width,xe=P.image.height,ve=0,Ee=0),$!==null?(Ce=$.x,Re=$.y):(Ce=0,Re=0);const Te=He.convert(O.format),Xe=He.convert(O.type);D.setTexture2D(O,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const Ye=R.getParameter(R.UNPACK_ROW_LENGTH),st=R.getParameter(R.UNPACK_IMAGE_HEIGHT),vt=R.getParameter(R.UNPACK_SKIP_PIXELS),Ze=R.getParameter(R.UNPACK_SKIP_ROWS),ke=R.getParameter(R.UNPACK_SKIP_IMAGES),Rt=P.isCompressedTexture?P.mipmaps[X]:P.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ee),P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,X,Ce,Re,ue,xe,Te,Xe,Rt.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,X,Ce,Re,Rt.width,Rt.height,Te,Rt.data):R.texSubImage2D(R.TEXTURE_2D,X,Ce,Re,ue,xe,Te,Xe,Rt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st),R.pixelStorei(R.UNPACK_SKIP_PIXELS,vt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke),X===0&&O.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(P,O,V=null,$=null,X=0){P.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,$=arguments[1]||null,P=arguments[2],O=arguments[3],X=arguments[4]||0);let ue,xe,ve,Ee,Ce,Re,Te,Xe,Ye;const st=P.isCompressedTexture?P.mipmaps[X]:P.image;V!==null?(ue=V.max.x-V.min.x,xe=V.max.y-V.min.y,ve=V.max.z-V.min.z,Ee=V.min.x,Ce=V.min.y,Re=V.min.z):(ue=st.width,xe=st.height,ve=st.depth,Ee=0,Ce=0,Re=0),$!==null?(Te=$.x,Xe=$.y,Ye=$.z):(Te=0,Xe=0,Ye=0);const vt=He.convert(O.format),Ze=He.convert(O.type);let ke;if(O.isData3DTexture)D.setTexture3D(O,0),ke=R.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)D.setTexture2DArray(O,0),ke=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const Rt=R.getParameter(R.UNPACK_ROW_LENGTH),ct=R.getParameter(R.UNPACK_IMAGE_HEIGHT),mn=R.getParameter(R.UNPACK_SKIP_PIXELS),Mi=R.getParameter(R.UNPACK_SKIP_ROWS),En=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,st.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ee),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Re),P.isDataTexture||P.isData3DTexture?R.texSubImage3D(ke,X,Te,Xe,Ye,ue,xe,ve,vt,Ze,st.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(ke,X,Te,Xe,Ye,ue,xe,ve,vt,st.data):R.texSubImage3D(ke,X,Te,Xe,Ye,ue,xe,ve,vt,Ze,st),R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct),R.pixelStorei(R.UNPACK_SKIP_PIXELS,mn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Mi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,En),X===0&&O.generateMipmaps&&R.generateMipmap(ke),be.unbindTexture()},this.initRenderTarget=function(P){we.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),be.unbindTexture()},this.resetState=function(){A=0,E=0,T=null,be.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xc?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Po?"display-p3":"srgb"}}class Al{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new Al(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ir extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new F;class Lr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tl extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ws;const Nr=new F,Xs=new F,qs=new F,Ys=new Se,Dr=new Se,Cd=new je,ra=new F,Ur=new F,oa=new F,Pd=new Se,Rl=new Se,Id=new Se;class Ld extends wt{constructor(e=new Tl){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rd(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Lr(n,3,0,!1)),Ws.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Cd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;aa(ra.set(-.5,-.5,0),qs,o,Xs,s,r),aa(Ur.set(.5,-.5,0),qs,o,Xs,s,r),aa(oa.set(.5,.5,0),qs,o,Xs,s,r),Pd.set(0,0),Rl.set(1,0),Id.set(1,1);let a=e.ray.intersectTriangle(ra,Ur,oa,!1,Nr);if(a===null&&(aa(Ur.set(-.5,.5,0),qs,o,Xs,s,r),Rl.set(0,1),a=e.ray.intersectTriangle(ra,oa,Ur,!1,Nr),a===null))return;const c=e.ray.origin.distanceTo(Nr);c<e.near||c>e.far||t.push({distance:c,point:Nr.clone(),uv:Rn.getInterpolation(Nr,ra,Ur,oa,Pd,Rl,Id,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function aa(i,e,t,n,s,r){Ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Dr.x=r*Ys.x-s*Ys.y,Dr.y=s*Ys.x+r*Ys.y):Dr.copy(Ys),i.copy(e),i.x+=Dr.x,i.y+=Dr.y,i.applyMatrix4(Cd)}const Nd=new F,Dd=new pt,Ud=new pt,Vv=new F,Od=new je,ca=new F,Cl=new $n,Fd=new je,Pl=new Ho;class Wv extends pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ch,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingSphere.expandByPoint(ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(s),e.ray.intersectsSphere(Cl)!==!1&&(Fd.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(Fd),!(this.boundingBox!==null&&Pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Dd.fromBufferAttribute(s.attributes.skinIndex,e),Ud.fromBufferAttribute(s.attributes.skinWeight,e),Nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ud.getComponent(r);if(o!==0){const a=Dd.getComponent(r);Od.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vv.copy(Nd).applyMatrix4(Od),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bd extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kd extends Gt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=cn,u=cn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new je,Xv=new je;class Il{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Xv;zd.multiplyMatrices(a,t[r]),zd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new kd(t,e,e,An,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Bd),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Ks extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new je,Hd=new je,la=[],Gd=new Kn,qv=new je,Or=new pe,Fr=new $n;class Br extends pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Gd.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Gd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Fr.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Hd.multiplyMatrices(n,$s),Or.matrixWorld=Hd,Or.raycast(e,la);for(let o=0,a=la.length;o<a;o++){const c=la[o];c.instanceId=r,c.object=this,t.push(c)}la.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kd(new Float32Array(s*this.count),s,this.count,dc,Un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ll extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ua=new F,ha=new F,Vd=new je,kr=new Ho,da=new $n,Nl=new F,Wd=new F;class fa extends wt{constructor(e=new Dt,t=new Ll){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ua.fromBufferAttribute(t,s-1),ha.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ua.distanceTo(ha);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Vd.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Vd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=u.getX(_),M=u.getX(_+1),v=pa(this,e,kr,c,m,M);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=pa(this,e,kr,c,_,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=pa(this,e,kr,c,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=pa(this,e,kr,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pa(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(ua.fromBufferAttribute(o,s),ha.fromBufferAttribute(o,r),t.distanceSqToSegment(ua,ha,Nl,Wd)>n)return;Nl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Nl);if(!(c<e.near||c>e.far))return{distance:c,point:Wd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xd=new F,qd=new F;class Yv extends fa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xd.fromBufferAttribute(t,s),qd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xd.distanceTo(qd);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kv extends fa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ma extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yd=new je,Dl=new Ho,ga=new $n,_a=new F;class Ul extends wt{constructor(e=new Dt,t=new ma){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Yd.copy(s).invert(),Dl.copy(e.ray).applyMatrix4(Yd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);_a.fromBufferAttribute(h,p),Kd(_a,p,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)_a.fromBufferAttribute(h,g),Kd(_a,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kd(i,e,t,n,s,r,o){const a=Dl.distanceSqToPoint(i);if(a<t){const c=new F;Dl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ns extends Gt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Se:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,s=[],r=[],o=[],a=new F,c=new je;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ol extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $v extends Ol{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const xa=new F,Bl=new Fl,kl=new Fl,zl=new Fl;class jv extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(xa.subVectors(s[0],s[1]).add(s[0]),l=xa);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Bl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,p),kl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,p),zl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),kl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),zl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Bl.calc(c),kl.calc(c),zl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $d(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Jv(i,e){const t=1-i;return t*t*e}function Zv(i,e){return 2*(1-i)*i*e}function Qv(i,e){return i*i*e}function zr(i,e,t,n){return Jv(i,e)+Zv(i,t)+Qv(i,n)}function ey(i,e){const t=1-i;return t*t*t*e}function ty(i,e){const t=1-i;return 3*t*t*i*e}function ny(i,e){return 3*(1-i)*i*i*e}function iy(i,e){return i*i*i*e}function Hr(i,e,t,n,s){return ey(i,e)+ty(i,t)+ny(i,n)+iy(i,s)}class jd extends Jn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sy extends Jn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y),Hr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jd extends Jn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ry extends Jn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends Jn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oy extends Jn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y),zr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qd extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set($d(a,c.x,l.x,u.x,h.x),$d(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Se().fromArray(s))}return this}}var Hl=Object.freeze({__proto__:null,ArcCurve:$v,CatmullRomCurve3:jv,CubicBezierCurve:jd,CubicBezierCurve3:sy,EllipseCurve:Ol,LineCurve:Jd,LineCurve3:ry,QuadraticBezierCurve:Zd,QuadraticBezierCurve3:oy,SplineCurve:Qd});class ay extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Hl[s.type]().fromJSON(s))}return this}}class Gl extends ay{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Jd(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Zd(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new jd(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Ol(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class va extends Dt{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ht(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new F,d=new Se,f=new F,g=new F,_=new F;let p=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=t;M++){const v=n+M*u*s,y=Math.sin(v),A=Math.cos(v);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*A,o.push(h.x,h.y,h.z),d.x=M/t,d.y=E/(e.length-1),a.push(d.x,d.y);const T=c[3*E+0]*y,U=c[3*E+1],q=c[3*E+0]*A;l.push(T,U,q)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){const y=v+M*e.length,A=y,E=y+e.length,T=y+e.length+1,U=y+1;r.push(A,E,U),r.push(T,U,E)}this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("uv",new St(a,2)),this.setAttribute("normal",new St(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.points,e.segments,e.phiStart,e.phiLength)}}class vn extends va{constructor(e=1,t=1,n=4,s=8){const r=new Gl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new vn(e.radius,e.length,e.capSegments,e.radialSegments)}}class mt extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function M(){const y=new F,A=new F;let E=0;const T=(t-e)/n;for(let U=0;U<=r;U++){const q=[],x=U/r,S=x*(t-e)+e;for(let C=0;C<=s;C++){const N=C/s,k=N*c+a,B=Math.sin(k),b=Math.cos(k);A.x=S*B,A.y=-x*n+p,A.z=S*b,h.push(A.x,A.y,A.z),y.set(B,T,b).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-x),q.push(g++)}_.push(q)}for(let U=0;U<s;U++)for(let q=0;q<r;q++){const x=_[q][U],S=_[q+1][U],C=_[q+1][U+1],N=_[q][U+1];e>0&&(u.push(x,S,N),E+=3),t>0&&(u.push(S,C,N),E+=3)}l.addGroup(m,E,0),m+=E}function v(y){const A=g,E=new Se,T=new F;let U=0;const q=y===!0?e:t,x=y===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),g++;const S=g;for(let C=0;C<=s;C++){const k=C/s*c+a,B=Math.cos(k),b=Math.sin(k);T.x=q*b,T.y=p*x,T.z=q*B,h.push(T.x,T.y,T.z),d.push(0,x,0),E.x=B*.5+.5,E.y=b*.5*x+.5,f.push(E.x,E.y),g++}for(let C=0;C<s;C++){const N=A+C,k=S+C;y===!0?u.push(k,k+1,N):u.push(k+1,k,N),U+=3}l.addGroup(m,U,y===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hn extends mt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ya extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new F,y=new F,A=new F;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],y),f(t[E+2],A),c(v,y,A,M)}function c(M,v,y,A){const E=A+1,T=[];for(let U=0;U<=E;U++){T[U]=[];const q=M.clone().lerp(y,U/E),x=v.clone().lerp(y,U/E),S=E-U;for(let C=0;C<=S;C++)C===0&&U===E?T[U][C]=q:T[U][C]=q.clone().lerp(x,C/S)}for(let U=0;U<E;U++)for(let q=0;q<2*(E-U)-1;q++){const x=Math.floor(q/2);q%2===0?(d(T[U][x+1]),d(T[U+1][x]),d(T[U][x])):(d(T[U][x+1]),d(T[U+1][x+1]),d(T[U+1][x]))}}function l(M){const v=new F;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){const M=new F;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const y=p(M)/2/Math.PI+.5,A=m(M)/Math.PI+.5;o.push(y,1-A)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const v=o[M+0],y=o[M+2],A=o[M+4],E=Math.max(v,y,A),T=Math.min(v,y,A);E>.9&&T<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){const y=M*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){const M=new F,v=new F,y=new F,A=new F,E=new Se,T=new Se,U=new Se;for(let q=0,x=0;q<r.length;q+=9,x+=6){M.set(r[q+0],r[q+1],r[q+2]),v.set(r[q+3],r[q+4],r[q+5]),y.set(r[q+6],r[q+7],r[q+8]),E.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),U.set(o[x+4],o[x+5]),A.copy(M).add(v).add(y).divideScalar(3);const S=p(A);_(E,x+0,M,S),_(T,x+2,v,S),_(U,x+4,y,S)}}function _(M,v,y,A){A<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.vertices,e.indices,e.radius,e.details)}}class Gr extends Gl{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Gl().fromJSON(s))}return this}}const cy={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=ef(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=fy(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Vr(r,o,t,a,c,f,0),o}};function ef(i,e,t,n,s){let r,o;if(s===wy(i,e,t,n)>0)for(r=e;r<t;r+=n)o=sf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=sf(r,i[r],i[r+1],o);return o&&Ma(o,o.next)&&(Xr(o),o=o.next),o}function is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ma(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&xy(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?uy(i,n,s,r):ly(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Xr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=hy(is(i),e,t),Vr(i,e,t,n,s,r,2)):o===2&&dy(i,e,t,n,s,r):Vr(is(i),e,t,n,s,r,1);break}}}function ly(i){const e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&js(s,a,r,c,o,l,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function uy(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,p=u>h?u>d?u:d:h>d?h:d,m=Vl(f,g,e,t,n),M=Vl(_,p,e,t,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&js(a,u,c,h,l,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&js(a,u,c,h,l,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&js(a,u,c,h,l,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&js(a,u,c,h,l,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function hy(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ma(s,r)&&tf(s,n,n.next,r)&&Wr(s,r)&&Wr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Xr(n),Xr(n.next),n=i=r),n=n.next}while(n!==i);return is(n)}function dy(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&My(o,a)){let c=nf(o,a);o=is(o,o.next),c=is(c,c.next),Vr(o,e,t,n,s,r,0),Vr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fy(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=ef(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(yy(l));for(s.sort(py),r=0;r<s.length;r++)t=my(s[r],t);return t}function py(i,e){return i.x-e.x}function my(i,e){const t=gy(i,e);if(!t)return e;const n=nf(t,i);return is(n,n.next),is(t,t.next)}function gy(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&js(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Wr(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&_y(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function _y(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function xy(i,e,t,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vy(s)}function vy(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Vl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function js(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function My(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sy(i,e)&&(Wr(i,e)&&Wr(e,i)&&by(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||Ma(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ma(i,e){return i.x===e.x&&i.y===e.y}function tf(i,e,t,n){const s=ba(Pt(i,e,t)),r=ba(Pt(i,e,n)),o=ba(Pt(t,n,i)),a=ba(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Sa(i,t,e)||r===0&&Sa(i,n,e)||o===0&&Sa(t,i,n)||a===0&&Sa(t,e,n))}function Sa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ba(i){return i>0?1:i<0?-1:0}function Sy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&tf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wr(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function by(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function nf(i,e){const t=new Wl(i.i,i.x,i.y),n=new Wl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sf(i,e,t,n){const s=new Wl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wy(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class qr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return qr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];rf(e),of(n,e);let o=e.length;t.forEach(rf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,of(n,t[c]);const a=cy.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function rf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function of(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Js extends Dt{constructor(e=new Gr([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Ey;let v,y=!1,A,E,T,U;m&&(v=m.getSpacedPoints(u),y=!0,d=!1,A=m.computeFrenetFrames(u,!1),E=new F,T=new F,U=new F),d||(p=0,f=0,g=0,_=0);const q=a.extractPoints(l);let x=q.shape;const S=q.holes;if(!qr.isClockWise(x)){x=x.reverse();for(let J=0,R=S.length;J<R;J++){const re=S[J];qr.isClockWise(re)&&(S[J]=re.reverse())}}const N=qr.triangulateShape(x,S),k=x;for(let J=0,R=S.length;J<R;J++){const re=S[J];x=x.concat(re)}function B(J,R,re){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(R,re)}const b=x.length,G=N.length;function I(J,R,re){let oe,de,be;const Ue=J.x-R.x,we=J.y-R.y,D=re.x-J.x,w=re.y-J.y,Q=Ue*Ue+we*we,ne=Ue*w-we*D;if(Math.abs(ne)>Number.EPSILON){const fe=Math.sqrt(Q),le=Math.sqrt(D*D+w*w),Pe=R.x-we/fe,ye=R.y+Ue/fe,me=re.x-w/le,Ge=re.y+D/le,ge=((me-Pe)*w-(Ge-ye)*D)/(Ue*w-we*D);oe=Pe+Ue*ge-J.x,de=ye+we*ge-J.y;const Ie=oe*oe+de*de;if(Ie<=2)return new Se(oe,de);be=Math.sqrt(Ie/2)}else{let fe=!1;Ue>Number.EPSILON?D>Number.EPSILON&&(fe=!0):Ue<-Number.EPSILON?D<-Number.EPSILON&&(fe=!0):Math.sign(we)===Math.sign(w)&&(fe=!0),fe?(oe=-we,de=Ue,be=Math.sqrt(Q)):(oe=Ue,de=we,be=Math.sqrt(Q/2))}return new Se(oe/be,de/be)}const W=[];for(let J=0,R=k.length,re=R-1,oe=J+1;J<R;J++,re++,oe++)re===R&&(re=0),oe===R&&(oe=0),W[J]=I(k[J],k[re],k[oe]);const H=[];let Z,z=W.concat();for(let J=0,R=S.length;J<R;J++){const re=S[J];Z=[];for(let oe=0,de=re.length,be=de-1,Ue=oe+1;oe<de;oe++,be++,Ue++)be===de&&(be=0),Ue===de&&(Ue=0),Z[oe]=I(re[oe],re[be],re[Ue]);H.push(Z),z=z.concat(Z)}for(let J=0;J<p;J++){const R=J/p,re=f*Math.cos(R*Math.PI/2),oe=g*Math.sin(R*Math.PI/2)+_;for(let de=0,be=k.length;de<be;de++){const Ue=B(k[de],W[de],oe);ee(Ue.x,Ue.y,-re)}for(let de=0,be=S.length;de<be;de++){const Ue=S[de];Z=H[de];for(let we=0,D=Ue.length;we<D;we++){const w=B(Ue[we],Z[we],oe);ee(w.x,w.y,-re)}}}const Y=g+_;for(let J=0;J<b;J++){const R=d?B(x[J],z[J],Y):x[J];y?(T.copy(A.normals[0]).multiplyScalar(R.x),E.copy(A.binormals[0]).multiplyScalar(R.y),U.copy(v[0]).add(T).add(E),ee(U.x,U.y,U.z)):ee(R.x,R.y,0)}for(let J=1;J<=u;J++)for(let R=0;R<b;R++){const re=d?B(x[R],z[R],Y):x[R];y?(T.copy(A.normals[J]).multiplyScalar(re.x),E.copy(A.binormals[J]).multiplyScalar(re.y),U.copy(v[J]).add(T).add(E),ee(U.x,U.y,U.z)):ee(re.x,re.y,h/u*J)}for(let J=p-1;J>=0;J--){const R=J/p,re=f*Math.cos(R*Math.PI/2),oe=g*Math.sin(R*Math.PI/2)+_;for(let de=0,be=k.length;de<be;de++){const Ue=B(k[de],W[de],oe);ee(Ue.x,Ue.y,h+re)}for(let de=0,be=S.length;de<be;de++){const Ue=S[de];Z=H[de];for(let we=0,D=Ue.length;we<D;we++){const w=B(Ue[we],Z[we],oe);y?ee(w.x,w.y+v[u-1].y,v[u-1].x+re):ee(w.x,w.y,h+re)}}}L(),K();function L(){const J=s.length/3;if(d){let R=0,re=b*R;for(let oe=0;oe<G;oe++){const de=N[oe];se(de[2]+re,de[1]+re,de[0]+re)}R=u+p*2,re=b*R;for(let oe=0;oe<G;oe++){const de=N[oe];se(de[0]+re,de[1]+re,de[2]+re)}}else{for(let R=0;R<G;R++){const re=N[R];se(re[2],re[1],re[0])}for(let R=0;R<G;R++){const re=N[R];se(re[0]+b*u,re[1]+b*u,re[2]+b*u)}}n.addGroup(J,s.length/3-J,0)}function K(){const J=s.length/3;let R=0;ie(k,R),R+=k.length;for(let re=0,oe=S.length;re<oe;re++){const de=S[re];ie(de,R),R+=de.length}n.addGroup(J,s.length/3-J,1)}function ie(J,R){let re=J.length;for(;--re>=0;){const oe=re;let de=re-1;de<0&&(de=J.length-1);for(let be=0,Ue=u+p*2;be<Ue;be++){const we=b*be,D=b*(be+1),w=R+oe+we,Q=R+de+we,ne=R+de+D,fe=R+oe+D;te(w,Q,ne,fe)}}}function ee(J,R,re){c.push(J),c.push(R),c.push(re)}function se(J,R,re){ce(J),ce(R),ce(re);const oe=s.length/3,de=M.generateTopUV(n,s,oe-3,oe-2,oe-1);he(de[0]),he(de[1]),he(de[2])}function te(J,R,re,oe){ce(J),ce(R),ce(oe),ce(R),ce(re),ce(oe);const de=s.length/3,be=M.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);he(be[0]),he(be[1]),he(be[3]),he(be[1]),he(be[2]),he(be[3])}function ce(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function he(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ay(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Hl[s.type]().fromJSON(s)),new Js(n,e.options)}}const Ey={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,c),new Se(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Se(o,1-c),new Se(l,1-h),new Se(d,1-g),new Se(_,1-m)]:[new Se(a,1-c),new Se(u,1-h),new Se(f,1-g),new Se(p,1-m)]}};function Ay(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xl extends ya{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xl(e.radius,e.detail)}}class ql extends ya{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ql(e.radius,e.detail)}}class Qe extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new F,d=new F,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const E=A/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(E+y,1-v),M.push(l++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const v=u[m][M+1],y=u[m][M],A=u[m+1][M],E=u[m+1][M+1];(m!==0||o>0)&&f.push(v,y,E),(m!==n-1||c<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hn extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new F,h=new F,d=new F;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qe extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function wa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ty(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ry(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function af(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function cf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Yr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cy extends Yr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ss,endingEnd:Ss}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bs:r=e,a=2*t-n;break;case Co:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bs:o=e,c=2*n-t;break;case Co:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let A=0;A!==a;++A)r[A]=m*o[u+A]+M*o[l+A]+v*o[c+A]+y*o[h+A];return r}}class lf extends Yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Py extends Yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Py(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ty(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Qn.prototype.TimeBufferType=Float32Array,Qn.prototype.ValueBufferType=Float32Array,Qn.prototype.DefaultInterpolation=yr;class Zs extends Qn{constructor(e,t,n){super(e,t,n)}}Zs.prototype.ValueTypeName="bool",Zs.prototype.ValueBufferType=Array,Zs.prototype.DefaultInterpolation=vr,Zs.prototype.InterpolantFactoryMethodLinear=void 0,Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class uf extends Qn{}uf.prototype.ValueTypeName="color";class Qs extends Qn{}Qs.prototype.ValueTypeName="number";class Iy extends Yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Xt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class er extends Qn{InterpolantFactoryMethodLinear(e){return new Iy(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion",er.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Qn{constructor(e,t,n){super(e,t,n)}}tr.prototype.ValueTypeName="string",tr.prototype.ValueBufferType=Array,tr.prototype.DefaultInterpolation=vr,tr.prototype.InterpolantFactoryMethodLinear=void 0,tr.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Qn{}nr.prototype.ValueTypeName="vector";class Yl{constructor(e="",t=-1,n=[],s=Vc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ny(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Qn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Ry(c);c=af(c,1,u),l=af(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Qs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const p=[],m=[];cf(f,p,m,g),p.length!==0&&_.push(new h(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let M=0;M!==d[g].morphTargets.length;++M){const v=d[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}s.push(new Qs(".morphTargetInfluence["+_+"]",p,m))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(nr,f+".position",d,"pos",s),n(er,f+".quaternion",d,"rot",s),n(nr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ly(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qs;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return uf;case"quaternion":return er;case"bool":case"boolean":return Zs;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ny(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ly(i.type);if(i.times===void 0){const t=[],n=[];cf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Dy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Uy=new Dy;class ir{constructor(e){this.manager=e!==void 0?e:Uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class Oy extends Error{constructor(e,t){super(e),this.response=t}}class hf extends ir{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:s});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=mi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,T=u.length;E<T;E++){const U=u[E];U.onProgress&&U.onProgress(A)}m.enqueue(y),M()}},v=>{m.error(v)})}}});return new Response(p)}else throw new Oy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Di.add(e,l);const u=mi[e];delete mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=mi[e];if(u===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fy extends ir{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=br("img");function c(){u(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class By extends ir{constructor(e){super(e)}load(e,t,n,s){const r=new Gt,o=new Fy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Kr extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ea extends Kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kl=new je,df=new F,ff=new F;class $l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ff),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ky extends $l{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Es*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zy extends Kr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ky}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pf=new je,$r=new F,jl=new F;class Hy extends $l{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$r.setFromMatrixPosition(e.matrixWorld),n.position.copy($r),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),s.makeTranslation(-$r.x,-$r.y,-$r.z),pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}}class Jl extends Kr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gy extends $l{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gi extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Gy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vy extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class jr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wy extends ir{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,c),r.manager.itemStart(e)}}class Xy{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Xt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;Xt.multiplyQuaternionsFlat(e,o,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Zl="\\[\\]\\.:\\/",qy=new RegExp("["+Zl+"]","g"),Ql="[^"+Zl+"]",Yy="[^"+Zl.replace("\\.","")+"]",Ky=/((?:WC+[\/:])*)/.source.replace("WC",Ql),$y=/(WCOD+)?/.source.replace("WCOD",Yy),jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),Jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),Zy=new RegExp("^"+Ky+$y+jy+Jy+"$"),Qy=["material","materials","bones","map"];class eM{constructor(e,t,n){const s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qy,"")}static parseTrackName(e){const t=Zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Qy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=eM,_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray],_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tM{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ss,endingEnd:Ss};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Lm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Dm:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Vc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===Nm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Im){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=bs,s.endingEnd=bs):(e?s.endingStart=this.zeroSlopeAtStart?bs:Ss:s.endingStart=Co,t?s.endingEnd=this.zeroSlopeAtEnd?bs:Ss:s.endingEnd=Co)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const nM=new Float32Array(1);class iM extends Wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new Xy(_t.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new lf(new Float32Array(2),new Float32Array(2),1,nM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Yl.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Vc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new tM(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Yl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja),(function(){var i="[native-gamepad-bridge]",e=typeof window.__p5NativeHost<"u"&&window.__p5NativeHost===!0||typeof window.webkit<"u"&&window.webkit&&window.webkit.messageHandlers;if(!e)return;var t={connected:!1,timestamp:0,buttons:[],axes:[]};function n(){return{pressed:!1,touched:!1,value:0}}function s(a){if(a==null)return n();if(typeof a=="boolean")return{pressed:a,touched:a,value:a?1:0};if(typeof a=="number"){var c=a>.5;return{pressed:c,touched:c,value:a}}if(typeof a=="object"){var l="p"in a?!!a.p:"pressed"in a?!!a.pressed:!1,u=typeof a.v=="number"?a.v:typeof a.value=="number"?a.value:l?1:0;return{pressed:l,touched:l,value:u}}return n()}function r(){for(var a=new Array(17),c=0;c<17;c++)a[c]=s(t.buttons&&t.buttons[c]);var l=[0,0,0,0];if(t.axes&&t.axes.length)for(var u=0;u<Math.min(4,t.axes.length);u++){var h=t.axes[u];l[u]=typeof h=="number"&&!isNaN(h)?h:0}return{id:"Native iOS Gamepad (GCController bridge)",index:0,connected:t.connected,timestamp:t.timestamp,mapping:"standard",axes:l,buttons:a,vibrationActuator:null,hapticActuators:[]}}window.__nativeGamepadLastRaw=null,window.__nativeGamepadUpdateCount=0,window.__nativeGamepadUpdate=function(a){a&&(t.buttons=Array.isArray(a.buttons)?a.buttons:[],t.axes=Array.isArray(a.axes)?a.axes:[],t.connected=!0,t.timestamp=typeof performance<"u"&&performance.now?performance.now():Date.now(),window.__nativeGamepadLastRaw=a,window.__nativeGamepadUpdateCount++)},window.__nativeGamepadConnection=function(a){var c=t.connected;if(t.connected=!!a,t.connected||(t.buttons=[],t.axes=[]),t.connected!==c){var l=t.connected?"gamepadconnected":"gamepaddisconnected",u=new Event(l);u.gamepad=r(),window.dispatchEvent(u)}};var o=typeof navigator.getGamepads=="function"?navigator.getGamepads.bind(navigator):null;navigator.getGamepads=function(){if(t.connected)return[r(),null,null,null];if(o)try{return o()}catch{return[null,null,null,null]}return[null,null,null,null]},window.__nativeGamepadBridgeReady=!0,console.log(i,"active: iOS host detected")})();const sM=60,rM=.5,oM=5e3,mf=1e6,gf=2e6;function aM(){const i=new Ir;i.background=new We(131850),i.add(new Ea(6328512,2105392,.55)),i.fog=new Al(131850,mf,gf);const e=new gi(16777215,1.1);return e.position.set(40,30,20),i.add(e),i}function cM(){return new kt(sM,window.innerWidth/window.innerHeight,rM,oM)}const eu=Object.freeze({maxThrottleAccel:18,reverseThrottleAccel:12,maxSpeed:60,surfaceSpeed:1e3/3.6,surfaceBoostSpeed:2e3/3.6,yawRate:1.4,pitchRate:1.4,rollRate:2,arcadeDampingRate:.6,hackRadius:8}),on={...eu};function lM(){Object.assign(on,eu)}const uM=15659509,hM=8161430,dM=1259630,fM=3108832,pM=16106818,_f=4828159;function xf(i){const e=new Gr;i==="stripe"?(e.moveTo(.15,.34),e.lineTo(.7,.13),e.lineTo(.7,.02),e.lineTo(.15,.17)):(e.moveTo(.15,.17),e.lineTo(.7,.02),e.lineTo(.7,-.32),e.lineTo(.15,-.48)),e.closePath();const t=new Js(e,{depth:.045,bevelEnabled:!1});return t.rotateX(Math.PI/2),t.translate(0,.0225,0),t}function mM(){const i=new Gr;i.moveTo(.26,.02),i.lineTo(-.06,.48),i.lineTo(-.38,.12),i.lineTo(-.34,-.12),i.lineTo(-.08,-.32),i.closePath();const e=new Js(i,{depth:.05,bevelEnabled:!1});return e.rotateY(-Math.PI/2),e.translate(.025,0,0),e}function gM(i,e){const t=new Gr;t.moveTo(0,0),t.lineTo(-.06,e),t.lineTo(-.46,0),t.closePath();const n=new Js(t,{depth:.035,bevelEnabled:!1});return n.rotateY(-Math.PI/2),n.translate(.0175,0,0),n}function _M(){const i=new rt,e=new qe({color:uM,roughness:.42,metalness:.45,emissive:790550,side:Zt}),t=new qe({color:hM,roughness:.6,metalness:.5,emissive:329740,side:Zt}),n=new qe({color:dM,roughness:.08,metalness:.6,emissive:662586,side:Zt}),s=new qe({color:fM,roughness:.35,metalness:.45,emissive:662602,side:Zt}),r=new qe({color:pM,roughness:.3,metalness:.55,emissive:2759936,side:Zt}),o=new qe({color:_f,roughness:.3,metalness:.2,emissive:_f,emissiveIntensity:1.4,side:Zt}),a=new mt(.22,.18,1.05,6);a.rotateX(Math.PI/2);const c=new pe(a,e);c.scale.set(1.3,.7,1),c.position.z=-.05,i.add(c);const l=new hn(.22,.92,6);l.rotateX(Math.PI/2);const u=new pe(l,e);u.scale.set(1.3,.7,1),u.position.z=.935,i.add(u);const h=new pe(new gt(.42,.09,.92),t);h.position.set(0,-.16,-.05),i.add(h);const d=new pe(new Qe(.19,18,12),n);d.scale.set(.86,.6,1.7),d.position.set(0,.13,.22),i.add(d);const f=new pe(gM(.46,.36),e);f.position.set(0,.12,-.2),i.add(f);const g=new pe(new gt(.04,.08,.13),r);g.position.set(0,.47,-.29),i.add(g);for(const m of[1,-1]){const M=new rt;M.add(new pe(xf("main"),e)),M.add(new pe(xf("stripe"),s));const v=new pe(mM(),e);v.position.set(.69,0,-.08),M.add(v);const y=new pe(new gt(.06,.5,.05),s);y.position.set(.69,.08,.12),y.rotation.x=-.5,M.add(y);const A=new mt(.028,.04,.56,10);A.rotateX(Math.PI/2);const E=new pe(A,t);E.position.set(.69,0,.3),M.add(E);const T=new pe(new mt(.03,.02,.15,10),r);T.rotation.x=Math.PI/2,T.position.set(.69,0,.62),M.add(T);const U=new pe(new gt(.16,.13,.4),o);U.position.set(.28,-.02,-.28),M.add(U),M.position.set(m*.16,0,-.05),m===-1&&(M.scale.x=-1),M.rotation.z=m*.14,i.add(M)}const _=new rn({color:9425151,transparent:!0,opacity:.85,blending:oi,depthWrite:!1}),p=[];for(const m of[-.12,.12]){const M=new mt(.12,.095,.36,8);M.rotateX(Math.PI/2);const v=new pe(M,t);v.position.set(m,-.03,-.66),i.add(v);const y=new mt(.082,.082,.07,8);y.rotateX(Math.PI/2);const A=new pe(y,o);A.position.set(m,-.03,-.82),i.add(A);const E=new hn(.08,.38,14);E.rotateX(-Math.PI/2);const T=new pe(E,_);T.position.set(m,-.03,-1.04),T.visible=!1,p.push(T),i.add(T)}return{mesh:i,velocity:new F,arcadeDamping:!1,glows:p,glowMat:_,flame:0,braking:!0}}const tu=new F,vf=new Xt,yf=new F,xM=.25;function vM(i,e,t){nu(i.mesh.quaternion,tu.set(1,0,0),e.pitch*on.pitchRate*t),nu(i.mesh.quaternion,tu.set(0,1,0),e.yaw*on.yawRate*t),nu(i.mesh.quaternion,tu.set(0,0,1),e.roll*on.rollRate*t),i.mesh.quaternion.normalize();const n=e.throttle>=xM;if(yM(i,n?e.throttle:0,t),!n){i.velocity.set(0,0,0),i.braking=!0;return}i.braking=!1,yf.set(0,0,1).applyQuaternion(i.mesh.quaternion);const s=i.speedLimit||on.maxSpeed,r=e.throttle*on.maxThrottleAccel*Math.max(1,s/eu.maxSpeed);if(i.velocity.addScaledVector(yf,r*t),i.arcadeDamping){const o=Math.exp(-on.arcadeDampingRate*t);i.velocity.multiplyScalar(o)}i.velocity.lengthSq()>s*s&&i.velocity.setLength(s),i.mesh.position.addScaledVector(i.velocity,t)}function yM(i,e,t){const n=e>0?e:0,s=n>i.flame?18:11;i.flame+=(n-i.flame)*Math.min(1,s*t),i.flame<.002&&(i.flame=0);const r=i.flame>0,o=r?.85+.15*Math.sin(performance.now()*.05):1;i.glowMat.opacity=.85*i.flame*o;for(const a of i.glows)a.visible=r,a.scale.set(i.flame,i.flame,(.4+i.flame)*o)}function nu(i,e,t){t!==0&&(vf.setFromAxisAngle(e,t),i.multiply(vf))}const iu=12e3,su=1200;function Mf(){const i=new Float32Array(iu*3),e=new Float32Array(iu*3);for(let r=0;r<iu;r++){const o=Math.random(),a=Math.random(),c=2*Math.PI*o,l=Math.acos(2*a-1),u=Math.sin(l),h=su*u*Math.cos(c),d=su*u*Math.sin(c),f=su*Math.cos(l);i[r*3+0]=h,i[r*3+1]=d,i[r*3+2]=f;const g=.85+Math.random()*.15,_=Math.random()*.1;e[r*3+0]=g-_,e[r*3+1]=g-_*.5,e[r*3+2]=g}const t=new Dt;t.setAttribute("position",new Nt(i,3)),t.setAttribute("color",new Nt(e,3));const n=new ma({size:1.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1}),s=new Ul(t,n);return s.frustumCulled=!1,s}function Sf(i,e){i.position.copy(e.position)}const ru=250,Jr={zNear:80,zFar:480,xHalf:70,yHalf:45},MM=1.2,SM=4.5,bM=.4;function Gn(i,e){return i+Math.random()*(e-i)}function wM(){return Math.random()<.5?-1:1}function EM(){const i=new Xl(1,0),e=new qe({color:9074021,roughness:.95,metalness:.05,flatShading:!0}),t=new Br(i,e,ru);t.frustumCulled=!1;const n=[],s=new je,r=new Xt,o=new F,a=new F;for(let l=0;l<ru;l++){const u=Gn(MM,SM);a.set(Gn(-70,Jr.xHalf),Gn(-45,Jr.yHalf),Gn(Jr.zNear,Jr.zFar)),o.setScalar(u),r.setFromEuler(new qt(Gn(0,Math.PI*2),Gn(0,Math.PI*2),Gn(0,Math.PI*2))),s.compose(a,r,o),t.setMatrixAt(l,s),n.push({position:a.clone(),radius:u*1.05,spinAxis:new F(Gn(-1,1),Gn(-1,1),Gn(-1,1)).normalize(),spinRate:Gn(.05,bM)*wM(),rotation:r.clone()})}t.instanceMatrix.needsUpdate=!0;function c(l){const u=new Xt;for(let h=0;h<ru;h++){const d=n[h];u.setFromAxisAngle(d.spinAxis,d.spinRate*l),d.rotation.premultiply(u),o.setScalar(d.radius/1.05),s.compose(d.position,d.rotation,o),t.setMatrixAt(h,s)}t.instanceMatrix.needsUpdate=!0}return{mesh:t,instances:n,update:c,volume:{...Jr}}}const bf=new F(0,0,700),ou=60;function AM(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#c97648"),s.addColorStop(.5,"#b15a30"),s.addColorStop(1,"#7a3a1c"),n.fillStyle=s,n.fillRect(0,0,1024,512);for(let o=0;o<320;o++){const a=Math.random()*1024,c=Math.random()*512,l=8+Math.random()*80,u=.05+Math.random()*.18,h=Math.random()<.65;n.beginPath(),n.fillStyle=h?`rgba(70, 30, 15, ${u})`:`rgba(240, 180, 130, ${u})`,n.arc(a,c,l,0,Math.PI*2),n.fill()}for(const o of[0,512]){const a=n.createRadialGradient(512,o,0,512,o,179.2);a.addColorStop(0,"rgba(230, 240, 245, 0.85)"),a.addColorStop(1,"rgba(230, 240, 245, 0)"),n.fillStyle=a,n.fillRect(0,0,1024,512)}const r=new ns(t);return r.colorSpace=Ct,r}function TM(){const i=new Qe(ou,64,32),e=new qe({map:AM(),roughness:.95,metalness:0}),t=new pe(i,e);t.position.copy(bf);const n=.02;function s(r){t.rotation.y+=n*r}return{mesh:t,update:s}}const Zr=new F(-90,25,-330),Qr=112,ei=2048,en=1024,RM=1.015,CM=1.035,wf=.03,PM=.042,IM=[[[-168,65],[-150,61],[-130,54],[-124,40],[-117,32],[-105,22],[-97,16],[-83,9],[-78,19],[-81,26],[-70,42],[-60,47],[-55,52],[-64,60],[-80,70],[-95,69],[-125,70],[-155,71]],[[-80,8],[-70,11],[-60,8],[-50,0],[-35,-5],[-38,-15],[-48,-25],[-58,-35],[-63,-42],[-73,-52],[-75,-47],[-71,-33],[-71,-18],[-79,-6],[-80,2]],[[-17,15],[-10,25],[0,32],[10,34],[25,32],[35,30],[43,12],[51,12],[42,-2],[40,-15],[35,-25],[25,-34],[18,-33],[12,-18],[9,-2],[5,5],[-8,5]],[[-9,37],[0,40],[12,45],[24,40],[30,36],[36,37],[45,40],[50,30],[57,25],[68,24],[77,8],[81,16],[89,22],[95,16],[100,13],[106,10],[110,20],[120,32],[122,40],[130,43],[136,50],[142,54],[160,60],[170,66],[178,68],[168,72],[140,75],[110,76],[90,76],[70,73],[58,70],[48,68],[38,66],[30,70],[24,66],[17,62],[11,58],[4,57],[-2,51],[0,47],[-5,43]],[[113,-22],[122,-18],[130,-12],[137,-12],[142,-11],[147,-19],[153,-25],[150,-35],[145,-38],[137,-35],[129,-32],[118,-34],[114,-28]],[[-45,60],[-30,68],[-24,75],[-35,82],[-55,82],[-60,75],[-55,65]]],LM=[[-4,54,4],[138,37,4],[47,-20,5],[174,-41,4],[110,-3,6],[102,-2,5],[122,12,4],[-19,65,3],[80,8,2.5],[-78,21,3]],NM=[[10,22,18],[30,25,14],[45,22,12],[65,28,10],[95,40,12],[132,-25,14],[18,-22,8],[-110,32,8],[-68,-25,6]];function Aa(i,e){return{x:(i+180)/360*ei,y:(90-e)/180*en}}function Ef(i){return i/180*en}function DM(i,e){const t=e.map(([o,a])=>Aa(o,a)),n=t.length,s=(o,a)=>({x:(o.x+a.x)/2,y:(o.y+a.y)/2}),r=s(t[n-1],t[0]);i.moveTo(r.x,r.y);for(let o=0;o<n;o++){const a=t[o],c=s(t[o],t[(o+1)%n]);i.quadraticCurveTo(a.x,a.y,c.x,c.y)}i.closePath()}function Ta(i){for(const e of IM)DM(i,e);for(const[e,t,n]of LM){const{x:s,y:r}=Aa(e,t),o=Ef(n);i.moveTo(s+o,r),i.arc(s,r,o,0,Math.PI*2)}}function au(i,e,t,n,s,r,o=1,a=1){i.save(),i.translate(e,t),i.scale(o,a);const c=i.createRadialGradient(0,0,0,0,0,n);c.addColorStop(0,`rgba(${s}, ${r})`),c.addColorStop(.55,`rgba(${s}, ${r*.55})`),c.addColorStop(1,`rgba(${s}, 0)`),i.fillStyle=c,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.fill(),i.restore()}function Af(){const i=document.createElement("canvas");return i.width=ei,i.height=en,i.getContext("2d")}function UM(i){const e=new ns(i.canvas);return e.colorSpace=Ct,e}function OM(){const i=Af(),e=i.createLinearGradient(0,0,0,en);e.addColorStop(0,"#0a2c50"),e.addColorStop(.35,"#1259a0"),e.addColorStop(.5,"#1a72bd"),e.addColorStop(.65,"#1259a0"),e.addColorStop(1,"#0a2c50"),i.fillStyle=e,i.fillRect(0,0,ei,en);for(let o=0;o<700;o++){const a=Math.random()*ei,c=Math.random()*en,l=20+Math.random()*110,u=Math.random()<.55;au(i,a,c,l,u?"6, 28, 58":"70, 165, 215",(u?.1:.07)*(.4+Math.random()*.6),1.6,.7)}const t=[{width:52,color:"rgba(30, 105, 165, 0.18)"},{width:38,color:"rgba(45, 130, 190, 0.20)"},{width:26,color:"rgba(65, 160, 205, 0.22)"},{width:14,color:"rgba(95, 190, 220, 0.25)"}];i.lineJoin="round",i.lineCap="round",i.beginPath(),Ta(i);for(const o of t)i.strokeStyle=o.color,i.lineWidth=o.width,i.stroke();i.fillStyle="#3f7a3a",i.beginPath(),Ta(i),i.fill(),i.save(),i.beginPath(),Ta(i),i.clip();const n=i.createLinearGradient(0,0,0,en);n.addColorStop(0,"rgba(190, 205, 200, 0.55)"),n.addColorStop(.22,"rgba(60, 90, 60, 0.45)"),n.addColorStop(.5,"rgba(30, 85, 35, 0.5)"),n.addColorStop(.78,"rgba(70, 100, 55, 0.35)"),n.addColorStop(1,"rgba(200, 215, 215, 0.6)"),i.fillStyle=n,i.fillRect(0,0,ei,en);for(const[o,a,c]of NM){const{x:l,y:u}=Aa(o,a),h=Ef(c),d=i.createRadialGradient(l,u,0,l,u,h);d.addColorStop(0,"rgba(200, 168, 105, 0.85)"),d.addColorStop(.6,"rgba(190, 158, 100, 0.55)"),d.addColorStop(1,"rgba(180, 150, 95, 0)"),i.fillStyle=d,i.beginPath(),i.arc(l,u,h,0,Math.PI*2),i.fill()}for(let o=0;o<1400;o++){const a=Math.random()*ei,c=Math.random()*en,l=5+Math.random()*30,u=Math.random()<.5;au(i,a,c,l,u?"25, 52, 25":"155, 148, 108",.06+Math.random()*.14,1+Math.random(),.8)}for(let o=0;o<90;o++){const a=Math.random()*ei,c=Math.random()*en,l=40+Math.random()*160,u=(Math.random()-.5)*Math.PI,h=Math.cos(u)*l,d=Math.sin(u)*l*.6;i.beginPath(),i.moveTo(a,c),i.quadraticCurveTo(a+h*.5,c+d*.5-18,a+h,c+d),i.strokeStyle="rgba(48, 42, 32, 0.30)",i.lineWidth=6+Math.random()*8,i.stroke(),i.beginPath(),i.moveTo(a,c-5),i.quadraticCurveTo(a+h*.5,c+d*.5-23,a+h,c+d-5),i.strokeStyle="rgba(200, 195, 175, 0.18)",i.lineWidth=3,i.stroke()}i.beginPath(),Ta(i),i.strokeStyle="rgba(214, 196, 142, 0.28)",i.lineWidth=14,i.stroke(),i.strokeStyle="rgba(224, 208, 158, 0.30)",i.lineWidth=6,i.stroke(),i.restore();const s=i.createLinearGradient(0,en*.86,0,en);s.addColorStop(0,"rgba(238, 246, 252, 0)"),s.addColorStop(.45,"rgba(238, 246, 252, 0.9)"),s.addColorStop(1,"rgba(255, 255, 255, 1)"),i.fillStyle=s,i.fillRect(0,en*.86,ei,en*.14);const r=i.createLinearGradient(0,0,0,en*.1);return r.addColorStop(0,"rgba(240, 248, 255, 0.95)"),r.addColorStop(1,"rgba(240, 248, 255, 0)"),i.fillStyle=r,i.fillRect(0,0,ei,en*.1),UM(i)}function FM(){const i=Af();i.clearRect(0,0,ei,en);function e(s){const r=Math.exp(-((s/12)**2)),o=Math.exp(-(((s-55)/16)**2)),a=Math.exp(-(((s+55)/16)**2));return .25+.75*Math.max(r,Math.max(o,a))}const t=600;for(let s=0;s<t;s++){const r=Math.random()*360-180,o=Math.random()*170-85;if(Math.random()>e(o))continue;const{x:a,y:c}=Aa(r,o),l=8+Math.floor(Math.random()*12),u=16+Math.random()*50;for(let h=0;h<l;h++){const d=a+(Math.random()-.5)*u*2.6,f=c+(Math.random()-.5)*u*.7,g=5+Math.random()*14;au(i,d,f,g,"255, 255, 255",.18+Math.random()*.28,2.2+Math.random(),.85)}}const n=new ns(i.canvas);return n.colorSpace=Ct,n}function BM(){const i=new Qe(Qr,96,48),e=OM();e.anisotropy=8;const t=new qe({map:e,roughness:.9,metalness:0,emissive:661030}),n=new pe(i,t);n.position.copy(Zr),n.rotation.z=Xi.degToRad(23.4);const s=new pe(new Qe(Qr*RM,96,48),new qe({map:FM(),transparent:!0,opacity:.85,depthWrite:!1,roughness:1,metalness:0}));n.add(s);const r=new pe(new Qe(Qr*CM,64,32),new rn({color:6269183,transparent:!0,opacity:.22,blending:oi,side:Jt,depthWrite:!1}));n.add(r);function o(a){n.rotation.y+=wf*a,s.rotation.y+=(PM-wf)*a}return{mesh:n,clouds:s,atmosphere:r,update:o}}const eo=256,kM=new F(0,0,-2e3),zM=350;function HM(){const i=document.createElement("canvas");i.width=eo,i.height=eo;const e=i.getContext("2d"),t=eo/2,n=e.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"rgba(255, 245, 220, 1)"),n.addColorStop(.08,"rgba(255, 230, 180, 0.95)"),n.addColorStop(.25,"rgba(255, 200, 130, 0.45)"),n.addColorStop(.55,"rgba(255, 170, 100, 0.15)"),n.addColorStop(1,"rgba(255, 150, 90, 0)"),e.fillStyle=n,e.fillRect(0,0,eo,eo);const s=new ns(i);return s.colorSpace=Ct,s}function GM(){const i=HM(),e=new Tl({map:i,depthWrite:!1,transparent:!0,blending:oi}),t=new Ld(e);t.scale.setScalar(zM);function n(s){t.position.copy(s.position).add(kM)}return{sprite:t,update:n}}const VM=["Sojourner","Spirit","Opportunity","Curiosity","Perseverance","Zhurong"],WM=ou+18,XM=ou+60,qM=60,Tf=8028296,YM=5431551,KM=2106408,$M=1060936;function Ra(i,e){return i+Math.random()*(e-i)}function jM(){const i=new rt,e=new qe({color:Tf,roughness:.7,metalness:.3,emissive:0}),t=new pe(new gt(2.2,.7,1.4),e);t.position.y=.45,i.add(t);const n=new pe(new gt(1.8,.1,1.1),new qe({color:$M,roughness:.4,metalness:.8,emissive:332832}));n.position.y=.85,i.add(n);const s=new mt(.32,.32,.2,12);s.rotateZ(Math.PI/2);const r=new qe({color:KM,roughness:.95,metalness:.1}),o=[-.85,.85],a=[-.55,.55];for(const u of o)for(const h of a){const d=new pe(s,r);d.position.set(u,.1,h),i.add(d)}const c=new pe(new mt(.04,.04,.8,6),new qe({color:11184810,roughness:.6,metalness:.5}));c.position.set(.6,1.2,0),i.add(c);const l=new pe(new Qe(.1,8,6),new qe({color:16733525,emissive:4456448}));return l.position.set(.6,1.65,0),i.add(l),{group:i,bodyMat:e}}function JM(){const i=Math.random(),e=Math.random(),t=2*Math.PI*i,n=Math.acos(2*e-1),s=Ra(WM,XM),r=Math.sin(n);return new F(s*r*Math.cos(t),s*r*Math.sin(t),s*Math.cos(n)).add(bf)}function ZM(){const i=[];for(const s of VM){const{group:r,bodyMat:o}=jM(),a=JM();r.position.copy(a),r.rotation.set(Ra(0,Math.PI*2),Ra(0,Math.PI*2),Ra(0,Math.PI*2)),i.push({name:s,mesh:r,bodyMat:o,position:a,fixed:!1,repairProgress:0,creditValue:qM})}function e(s){for(const r of i)r.mesh.rotation.y+=.25*s,r.mesh.rotation.x+=.08*s}function t(s){s.fixed=!0,s.repairProgress=1,s.bodyMat.color.setHex(YM),s.bodyMat.emissive.setHex(1060928)}function n(){for(const s of i)s.fixed=!1,s.repairProgress=0,s.bodyMat.color.setHex(Tf),s.bodyMat.emissive.setHex(0)}return{rovers:i,update:e,markFixed:t,reset:n}}const Ca=32,cu=.9,QM=6,eS=.18;function tS(){const i=new Float32Array(Ca*3),e=new Float32Array(Ca*3),t=new Dt;t.setAttribute("position",new Nt(i,3));const n=new ma({color:10149887,size:eS,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:oi}),s=new Ul(t,n);s.visible=!1;let r=cu;function o(c){r=0;for(let l=0;l<Ca;l++){i[l*3+0]=c.x,i[l*3+1]=c.y,i[l*3+2]=c.z;const u=Math.random(),h=Math.random(),d=2*Math.PI*u,f=Math.acos(2*h-1),g=Math.sin(f),_=(.4+Math.random()*.6)*QM;e[l*3+0]=_*g*Math.cos(d),e[l*3+1]=_*g*Math.sin(d),e[l*3+2]=_*Math.cos(f)}t.attributes.position.needsUpdate=!0,s.visible=!0}function a(c){if(r>=cu){s.visible=!1;return}r+=c;const l=Math.min(1,r/cu),u=Math.pow(.05,c);for(let h=0;h<Ca;h++)i[h*3+0]+=e[h*3+0]*c,i[h*3+1]+=e[h*3+1]*c,i[h*3+2]+=e[h*3+2]*c,e[h*3+0]*=u,e[h*3+1]*=u,e[h*3+2]*=u;t.attributes.position.needsUpdate=!0,n.opacity=1-l}return{points:s,fire:o,update:a}}const Rf=.7,lu=new F,sr=new F;function nS(i,e){let t=0;for(const n of e){lu.subVectors(i.position,n.position);const s=Rf+n.radius,r=lu.lengthSq();if(r>=s*s)continue;if(r<1e-8)sr.set(0,1,0),i.position.addScaledVector(sr,s);else{const a=Math.sqrt(r);sr.copy(lu).divideScalar(a);const c=s-a;i.position.addScaledVector(sr,c)}const o=i.velocity.dot(sr);o<0&&i.velocity.addScaledVector(sr,-1.55*o),t+=1}return t}const iS=Object.freeze(Object.defineProperty({__proto__:null,SHIP_RADIUS:Rf,resolveAsteroidCollisions:nS},Symbol.toStringTag,{value:"Module"})),Ui={throttleUp:["KeyW"],throttleDown:["KeyS"],yawLeft:["KeyA"],yawRight:["KeyD"],pitchUp:["ArrowUp"],pitchDown:["ArrowDown"],rollLeft:["KeyQ"],rollRight:["KeyE"]};function sS(){const i=new Set,e=new Set;function t(o){i.has(o.code)||e.add(o.code),i.add(o.code)}function n(o){i.delete(o.code)}window.addEventListener("keydown",t),window.addEventListener("keyup",n);function s(o){for(const a of o)if(i.has(a))return!0;return!1}function r(o){for(const a of o)if(e.has(a))return!0;return!1}return{isDown:o=>i.has(o),sample(){const o=(s(Ui.throttleUp)?1:0)-(s(Ui.throttleDown)?1:0),a=(s(Ui.yawLeft)?1:0)-(s(Ui.yawRight)?1:0),c=(s(Ui.pitchUp)?1:0)-(s(Ui.pitchDown)?1:0),l=(s(Ui.rollLeft)?1:0)-(s(Ui.rollRight)?1:0);return{throttle:o,yaw:a,pitch:c,roll:l}},consumeAnyJustPressed(){const o=e.size>0;return e.clear(),o},consumeJustPressed(o){if(r(o)){for(const a of o)e.delete(a);return!0}return!1},dispose(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}}}const rS=.15,Pa={throttle:{axisIndex:1,sign:-1},yaw:{axisIndex:0,sign:-1},lookX:{axisIndex:2,sign:1},lookY:{axisIndex:3,sign:-1}},At={A:0,B:1,X:2,Y:3,L1:4,R1:5,L2:6,R2:7,Select:8,Start:9,L3:10,R3:11,Up:12,Down:13,Left:14,Right:15};function oS(i,e=rS){const t=Math.abs(i);return t<e?0:Math.sign(i)*((t-e)/(1-e))}function Ia(i,e){return e.sign*oS(i.axes[e.axisIndex]??0)}function aS(){let i=!1,e=!1;const t=new Set,n=new Set,s=new Set;function r(){const c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(const l of c)if(l&&l.connected)return l;return null}const o=new Set;function a(c){if(n.clear(),o.clear(),!!c.buttons){for(let l=0;l<c.buttons.length;l++){const u=c.buttons[l];!!(u&&u.pressed)?(o.add(l),!t.has(l)&&!s.has(l)&&n.add(l)):s.delete(l)}for(const l of t)o.has(l)||t.delete(l);for(const l of o)t.add(l)}}return{get active(){return i},sample(){const c=r();if(!c)return i=!1,n.clear(),o.clear(),t.clear(),null;!e&&c.mapping!=="standard"&&(e=!0,console.info("[input/gamepad] Connected pad reports non-standard mapping",`(id="${c.id}"). Throttle/look may not be on axes 1/2/3 as expected.`,"See BACKLOG.md for the calibration follow-up.")),a(c);const l=Ia(c,Pa.yaw),u=Ia(c,Pa.throttle),h=Ia(c,Pa.lookX),d=Ia(c,Pa.lookY),f=(o.has(At.Up)?1:0)-(o.has(At.Down)?1:0),g=(o.has(At.Left)?1:0)-(o.has(At.Right)?1:0),_=(l||f||g||u||h||d)!==0,p=o.size>0;return i=_||p,{throttle:u,yaw:l,pitch:f,roll:g,lookX:h,lookY:d}},isButtonDown(c){return o.has(c)},consumeJustPressed(c){return n.has(c)?(n.delete(c),!0):!1},consumeAnyJustPressed(){return n.size===0?!1:(n.clear(),!0)},suppressCurrentlyPressed(){for(const c of o)s.add(c)}}}const Cf=.2,Pf=1,If=25,cS=1e3,lS=35,uS=35;function Lf(){return(screen.orientation?.angle??window.orientation??0)*Math.PI/180}function hS(){let i=!1,e=!1,t=!1,n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},o=null,a=0,c=0,l=0,u=null,h=null;function d(p){if(p.alpha==null&&p.beta==null&&p.gamma==null)return;o={alpha:p.alpha??0,beta:p.beta??0,gamma:p.gamma??0},a=typeof performance<"u"?performance.now():Date.now();const m=g(o);if(u!==null){const M=m.pitch-u,v=m.yaw-h;Math.abs(M)<If&&Math.abs(v)<If&&(c+=M,l+=v)}if(u=m.pitch,h=m.yaw,n==null){const M=a;s===0&&(s=M),r.alpha+=o.alpha,r.beta+=o.beta,r.gamma+=o.gamma,r.n+=1,M-s>=cS&&r.n>0&&(n={alpha:r.alpha/r.n,beta:r.beta/r.n,gamma:r.gamma/r.n})}}function f(){n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},u=null,h=null}function g(p){const m=Lf(),M=Math.cos(m),v=Math.sin(m);return{pitch:p.beta*M-p.gamma*v,yaw:p.beta*v+p.gamma*M}}function _(){i||(window.addEventListener("deviceorientation",d),screen.orientation?.addEventListener("change",f),window.addEventListener("orientationchange",f),i=!0)}return{get active(){return!i||o==null?!1:(typeof performance<"u"?performance.now():Date.now())-a<1e3},get calibrated(){return n!=null},async request(){if(t)return _(),e;t=!0;const p=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(p&&typeof p.requestPermission=="function"){try{e=await p.requestPermission()==="granted"}catch{e=!1}e&&_()}else e=!0,_();return e},consumeTurn(){if(!i||u===null)return{pitch:0,yaw:0};const p={pitch:c*Df*Pf,yaw:l*Df*Pf};return c=0,l=0,p},sample(){if(!o||!n)return null;const p=o.beta-n.beta,m=o.gamma-n.gamma,M=Lf(),v=Math.cos(M),y=Math.sin(M),A=p*v-m*y,E=p*y+m*v;let T=Nf(A/lS,-1,1),U=Nf(E/uS,-1,1);return{pitchDelta:T*Cf,yawDelta:U*Cf}}}}function Nf(i,e,t){return i<e?e:i>t?t:i}const Df=Math.PI/180,uu=typeof window<"u"&&"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0;function dS(){let i=!1;function e(t){t.pointerType!=="mouse"&&(i=!0)}return window.addEventListener("pointerdown",e,{passive:!0}),{consumeJustPressed(){const t=i;return i=!1,t},clear(){i=!1}}}function Uf(){return typeof window>"u"?!1:!!(window.__p5NativeHost===!0||window.webkit&&window.webkit.messageHandlers)}function rr(i){return i<-1?-1:i>1?1:i}function fS(){const i=sS(),e=aS(),t=hS(),n=dS();let s=["KB"];return{keyboard:i,gamepad:e,gyro:t,touch:n,isTouchDevice:uu,bridgeAvailable:Uf,async enableGyro(){return t.request()},sample(){const r=i.sample(),o=e.sample(),a=[];let c,l,u,h;o&&(o.throttle||o.yaw||o.pitch||o.roll)?(c=o.throttle,l=o.yaw,u=o.pitch,h=o.roll,a.push("PAD"),(r.throttle||r.yaw||r.pitch||r.roll)&&(c=rr(c+r.throttle),l=rr(l+r.yaw),u=rr(u+r.pitch),h=rr(h+r.roll),a.push("KB"))):(c=r.throttle,l=r.yaw,u=r.pitch,h=r.roll,(r.throttle||r.yaw||r.pitch||r.roll)&&a.push("KB"));const d=l,f=c,g=t.sample();g&&t.active&&(u=rr(u+g.pitchDelta),l=rr(l-g.yawDelta),a.push("GYRO"));let _=o?o.lookX:0,p=o?o.lookY:0;(_||p)&&!a.includes("PAD")&&a.push("PAD");const m=t.active?t.consumeTurn():{pitch:0,yaw:0},M=m.yaw,v=m.pitch;return(M||v)&&!a.includes("GYRO")&&a.push("GYRO"),a.length===0&&a.push("KB"),s=a,{throttle:c,yaw:l,pitch:u,roll:h,lookX:_,lookY:p,lookTurnX:M,lookTurnY:v,stickYaw:d,stickThrottle:f}},activeSources(){return s},consumeAnyJustPressed(){const r=i.consumeAnyJustPressed();e.sample();const o=e.consumeAnyJustPressed(),a=n.consumeJustPressed();return r||o||a}}}const Ae={title:"Super Vexo and the Mystery of the System",pressAnyKey:"Press any button to start",tapToStart:"Tap to start",intro:{skip:"Press any button to skip",tapToSkip:"Tap to skip",beats:["Long ago, in the kingdom of Astra…","The kingdom lived in peace.","Until Lord Draxos came.","He kidnapped Princess Astra.","And vanished into deep space.",`The Scientists handed Vexo the Super Mega Tablet.

Can you save her?`]},surface:{town:"AN UNNAMED WORLD",street:"unknown ground",ground:{plain:"open plain",savanna:"dry grassland",forest:"forest",hills:"hill country",mountain:"bare mountain",snow:"snowfield",dunes:"sand sea",stone:"stone desert",salt:"salt pan",badlands:"badlands",mesa:"plateau country",beach:"shoreline",sea:"open water"},leaveHint:"Descend to land · climb to leave the atmosphere"},onFoot:{skip:"Press any button to skip",climbOut:"L / A — land and climb out",noRoom:"No room to climb out here — move the ship",board:"L / A — climb back in",controls:"W A S D / stick — walk · Shift / B — sprint",talk:"E / A — talk to {name}"},shop:{credits:"cr",hint:"↑ ↓ — choose · E / A — buy · B / Esc — leave",welcome:"Have a look. Everything here works.",bought:"{name} — yours. Mind how you go.",tooDear:"Not enough credits for that one.",alreadyHave:"You have that already.",sold:"owned",names:{apothecary:"THE APOTHECARY",gunsmith:"THE GUNSMITH",shipwright:"THE SHIPWRIGHT"},keeper:{apothecary:"E / A — the apothecary",gunsmith:"E / A — the gunsmith",shipwright:"E / A — the shipwright"},goods:{heart:{name:"Vital patch",note:"One more heart. Stacks."},wind:{name:"Lung filter",note:"Sprint lasts about half as long again."},quickdraw:{name:"Quickdraw kit",note:"The pistol fires half as fast again."},barrel:{name:"Long barrel",note:"Shots carry almost half again as far."},thrusters:{name:"Tuned thrusters",note:"The airship flies 15% faster."}}},dialogue:{more:"E / A — go on · walk away to leave"},map:{title:"THE WORLD",hint:"M / − — close · the whole continent, every inch of it",scale:"{km} × {kmZ} km · {m} m per pixel",building:"drawing the world… {pct}%"},gameOver:{title:"GAME OVER",ask:"Continue from your last save?",noSave:"You have no saved game. Start again?",yes:"YES — CONTINUE",no:"NO — TITLE SCREEN",hint:"← → to choose · Enter / A to take it"},inventory:{title:"GEAR",weapons:"Weapons",empty:"Nothing yet.",hint:"T / + — close · ← → or L / R — tabs · B / Esc — back",turnHint:"Drag, or A / D, to turn him",tablet:"Tablet",system:"System",save:"SAVE GAME",neverSaved:"Not saved yet.",savedJustNow:"Saved just now.",savedSecondsAgo:"Saved a few seconds ago.",savedMinutesAgo:"Saved {n} minutes ago.",saveFailed:"Couldn't save — this browser won't let the game store anything.",starterGun:"Sidearm",starterGunNote:"Equipped"},hud:{appName:"Tablet",velocity:"VEL",orientation:"ORI",fps:"FPS",dampingOn:"damping: ON",dampingOff:"damping: OFF",fastTravelButton:"FAST TRAVEL",fastTravelHint:"R1 / F",fastTravelActive:"warping…",rovers:"ROVERS",credits:"CRED",hackHint:"Hold L1 / H to hack",upgradeButton:"UPGRADES",upgradeHint:"Y / U",upgradeBought:"OWNED",upgradeBuy:"BUY",upgradeClose:"Close",screenHint:"Stick / swipe = scroll · B / Esc = back to Tablet",missionCompleteTitle:"MISSION COMPLETE",missionCompleteBody:"All rovers repaired. Earth Command transfers a bonus to your account.",missionCompleteCta:"Open Upgrades",missionCompleteClose:"Continue Flying",resetHint:"L3 / R = reset",tabletHint:"T / + — GEAR · M / − — MAP"}};function pS(){const i=document.createElement("div");i.id="tablet",i.innerHTML=`
    <div class="tablet-frame">
      <div class="tablet-bezel">
        <div class="tablet-screen">
          <div class="tablet-titlebar">
            <span class="tablet-app">${Ae.hud.appName}</span>
            <span class="tablet-source" data-source>KB</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Ae.hud.velocity}</span>
            <span class="tablet-value" data-velocity>0.0</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Ae.hud.orientation}</span>
            <span class="tablet-value" data-orientation>0°,0°,0°</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${Ae.hud.fps}</span>
            <span class="tablet-value" data-fps>--</span>
          </div>
          <div class="tablet-row tablet-row--small">
            <span class="tablet-value" data-damping>${Ae.hud.dampingOff}</span>
          </div>

          <!-- Mission panel: rover progress + credits -->
          <div class="tablet-mission" data-mission hidden>
            <div class="tablet-row">
              <span class="tablet-label">${Ae.hud.rovers}</span>
              <span class="tablet-value" data-rovers>0/0</span>
            </div>
            <div class="tablet-row">
              <span class="tablet-label">${Ae.hud.credits}</span>
              <span class="tablet-value" data-credits>0</span>
            </div>
            <!-- Hack prompt: only visible when a rover is in range -->
            <div class="tablet-hack" data-hack hidden>
              <div class="tablet-hack__name" data-hack-name>—</div>
              <div class="tablet-hack__hint">${Ae.hud.hackHint}</div>
              <div class="tablet-hack__bar"><div class="tablet-hack__fill" data-hack-fill></div></div>
            </div>
          </div>

          <button class="tablet-app-btn" data-fast-travel type="button">
            <span class="tablet-app-btn__icon">⤴</span>
            <span class="tablet-app-btn__label">${Ae.hud.fastTravelButton}</span>
            <span class="tablet-app-btn__key">${Ae.hud.fastTravelHint}</span>
          </button>
          <button class="tablet-app-btn" data-upgrades type="button">
            <span class="tablet-app-btn__icon">⚙</span>
            <span class="tablet-app-btn__label">${Ae.hud.upgradeButton}</span>
            <span class="tablet-app-btn__key">${Ae.hud.upgradeHint}</span>
          </button>
          <div class="tablet-row tablet-row--hint" data-reset-hint hidden>
            ${Ae.hud.resetHint}
          </div>
        </div>
      </div>
    </div>
  `,i.style.display="none",document.body.appendChild(i);const e=document.createElement("div");e.id="tablet-hint",e.textContent=Ae.hud.tabletHint,e.hidden=!0,document.body.appendChild(e);const t=i.querySelector("[data-velocity]"),n=i.querySelector("[data-orientation]"),s=i.querySelector("[data-fps]"),r=i.querySelector("[data-source]"),o=i.querySelector("[data-damping]"),a=i.querySelector("[data-fast-travel]"),c=i.querySelector("[data-upgrades]"),l=i.querySelector("[data-reset-hint]"),u=i.querySelector("[data-mission]"),h=i.querySelector("[data-rovers]"),d=i.querySelector("[data-credits]"),f=i.querySelector("[data-hack]"),g=i.querySelector("[data-hack-name]"),_=i.querySelector("[data-hack-fill]");let p=0,m=0,M=0;return{element:i,update({velocity:v,eulerDeg:y,dt:A,sources:E,dampingOn:T,inKph:U=!1}){t.textContent=U?`${Math.round(v*3.6)} km/h`:v.toFixed(1),n.textContent=`${y.x.toFixed(0)}°, ${y.y.toFixed(0)}°, ${y.z.toFixed(0)}°`,p+=1,m+=A,m>=.5&&(M=Math.round(p/m),p=0,m=0,s.textContent=String(M)),r.textContent=E.join("+"),o.textContent=T?Ae.hud.dampingOn:Ae.hud.dampingOff},show(){e.hidden=!0},hide(){e.hidden=!1},toggle(){return e.hidden=!e.hidden,!e.hidden},setHintVisible(v){e.hidden=!v},showFastTravel(){a.classList.add("tablet-app-btn--visible")},showUpgrades(){c.classList.add("tablet-app-btn--visible")},showResetHint(){l.hidden=!1},setMissionVisible(v){u.hidden=!v},updateMission({remaining:v,total:y,credits:A}){h.textContent=`${y-v}/${y}`,d.textContent=String(A)},updateHack({name:v,progress:y}){if(!v){f.hidden=!0;return}f.hidden=!1,g.textContent=v,_.style.width=`${Math.max(0,Math.min(1,y))*100}%`},onUpgradesClick(v){c.addEventListener("click",v)},setFastTravelActive(v){a.classList.toggle("tablet-app-btn--active",v);const y=a.querySelector(".tablet-app-btn__label");y.textContent=v?Ae.hud.fastTravelActive:Ae.hud.fastTravelButton,a.disabled=v},onFastTravel(v){a.addEventListener("click",v)}}}function mS(){const i=document.createElement("div");i.id="title-card";const e="2026-09-02 17:06";i.innerHTML=`
    <div class="title-card__inner">
      <h1 class="title-card__title">${Ae.title}</h1>
      <p class="title-card__prompt">${uu?Ae.tapToStart:Ae.pressAnyKey}</p>
      <p class="title-card__build">build ${e}</p>
    </div>
  `,document.body.appendChild(i);let t=null;return{hide(){i.style.opacity="0"},show(){t&&(clearTimeout(t),t=null),i.classList.remove("title-card--hidden"),i.style.opacity="",i.isConnected||document.body.appendChild(i)},dismiss(){i.classList.add("title-card--hidden"),t=setTimeout(()=>{i.remove(),t=null},500)}}}const gS=1.2,Of=540;function _S(i){const e=document.createElement("div");e.id="warp-flash",i.appendChild(e);let t=!1,n=0,s=!1,r=null,o=!1,a=null;function c(u,h={}){return t?!1:(t=!0,n=0,s=!1,r=h.onDone??null,o=!0,a=u,u.velocity.set(0,0,0),!0)}function l(u){if(!t)return;n+=u;const d=Math.max(0,Math.min(1,n/gS));let f;if(d<.4?f=d/.4:d<.6?f=1:f=1-(d-.6)/.4,e.style.opacity=String(Math.max(0,Math.min(1,f))),!s&&d>=.5&&a&&(a.mesh.position.set(0,0,Of),a.velocity.set(0,0,0),a.mesh.quaternion.identity(),s=!0),d>=1){t=!1,o=!1,e.style.opacity="0";const g=r;r=null,a=null,g&&g()}}return{begin:c,update:l,get active(){return t},get suppressInput(){return o},targetZ:Of}}const xS=""+new URL("invincibility_theme-K-djvXIp.mp3",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,vS=""+new URL("game_over-CW0fu00F.m4a",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,Ff=80,yS=18,MS=.06,SS=2.5,Bf=280,bS=520,wS=.18,ES=.18,kf=.45,AS=.3,TS=.6;function RS(){let i=null,e=null,t=!1,n=null,s=0,r=!1,o=null,a=null,c=null,l=0;function u(){if(r)return!0;const y=window.AudioContext||window.webkitAudioContext;return y?(i=new y,o=i.createGain(),o.gain.value=1,o.connect(i.destination),a=CS(i,o),c=PS(i,o),r=!0,!0):!1}function h(y){r&&(l=Math.min(1,Math.abs(y)))}function d(y){t=y,y&&(e||(e=new Audio(xS),e.loop=!0,e.preload="auto",e.volume=0),e.paused&&(e.currentTime=0,e.play().catch(()=>{})))}function f(){n||(n=new Audio(vS),n.preload="auto"),n.loop=!1,n.volume=TS,n.currentTime=0,n.play().catch(()=>{})}function g(){n&&(n.pause(),n.currentTime=0)}function _(y){if(!e)return;const A=t?kf:0,E=y/AS*kf;s=A>s?Math.min(A,s+E):Math.max(A,s-E),e.volume=s,s===0&&!e.paused&&e.pause()}function p(y){if(_(y),!r)return;const A=1-Math.pow(2,-y/ES),E=c.gainNode.gain.value,T=l*wS,U=E+(T-E)*A;c.gainNode.gain.setValueAtTime(U,i.currentTime);const q=Bf+l*bS;c.filter.frequency.setValueAtTime(q,i.currentTime)}function m(){if(g(),e&&(e.pause(),e=null,t=!1,s=0),!!r){try{a.osc1.stop(),a.osc2.stop()}catch{}try{c.source.stop()}catch{}i.close(),r=!1,i=null}}function M({fromHz:y=300,toHz:A=900,durationS:E=.35,peakGain:T=.18}={}){if(!r)return;const U=i.currentTime,q=i.createOscillator();q.type="sine",q.frequency.setValueAtTime(y,U),q.frequency.exponentialRampToValueAtTime(A,U+E);const x=i.createGain();x.gain.setValueAtTime(0,U),x.gain.linearRampToValueAtTime(T,U+.03),x.gain.exponentialRampToValueAtTime(1e-4,U+E),q.connect(x),x.connect(o),q.start(U),q.stop(U+E+.05)}function v(){M({fromHz:440,toHz:660,durationS:.45,peakGain:.2}),setTimeout(()=>M({fromHz:660,toHz:990,durationS:.6,peakGain:.22}),200)}return{start:u,setSprinting:d,playGameOver:f,stopGameOver:g,update:p,setThrottle:h,chirp:M,fanfare:v,dispose:m,get running(){return r}}}function CS(i,e){const t=i.createOscillator(),n=i.createOscillator();t.type="triangle",n.type="triangle",t.frequency.value=Ff,n.detune.value=yS,n.frequency.value=Ff;const s=i.createBiquadFilter();s.type="lowpass",s.frequency.value=320,s.Q.value=.7;const r=i.createGain();return r.gain.value=MS,t.connect(s),n.connect(s),s.connect(r),r.connect(e),t.start(),n.start(),{osc1:t,osc2:n,filter:s,gain:r}}function PS(i,e){const t=i.sampleRate,n=i.createBuffer(1,t*SS,t),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=i.createBufferSource();r.buffer=n,r.loop=!0;const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=Bf,o.Q.value=1.2;const a=i.createGain();return a.gain.value=0,r.connect(o),o.connect(a),a.connect(e),r.start(),{source:r,filter:o,gainNode:a}}const IS=8,LS=2,NS=100,La={ACTIVE:"active",COMPLETE:"complete"};function DS(i){const{rovers:e,markFixed:t}=i;let n=0,s=La.ACTIVE,r=null,o=null,a=null,c=null;function l(m){a=m}function u(m){c=m}function h(){let m=0;for(const M of e)M.fixed||(m+=1);return m}function d(){return e.length}function f(m,M){if(M>IS)return null;let v=null,y=on.hackRadius*on.hackRadius;for(const A of e){if(A.fixed)continue;const E=A.position.x-m.x,T=A.position.y-m.y,U=A.position.z-m.z,q=E*E+T*T+U*U;q<y&&(y=q,v=A)}return v}function g({shipPos:m,shipSpeed:M,holdActive:v,dt:y}){if(r=f(m,M),s!==La.ACTIVE){o=null;return}if(v&&r){if(o!==r&&(o=r,o.repairProgress=0),o.repairProgress=Math.min(1,o.repairProgress+y/LS),o.repairProgress>=1&&!o.fixed){const A=o;t(A),n+=A.creditValue,c&&c(A),o=null,h()===0&&(s=La.COMPLETE,n+=NS,a&&a())}}else o&&(o.repairProgress=0,o=null)}function _(m){return m>n?!1:(n-=m,!0)}function p(){n=0,s=La.ACTIVE,r=null,o=null}return{get state(){return s},get credits(){return n},get inRange(){return r},get repairing(){return o},grantCredits(m){n=Math.max(0,Math.round(m))},earn(m){return n+=Math.max(0,Math.round(m)),n},remaining:h,totalRovers:d,update:g,spendCredits:_,setOnComplete:l,setOnRepaired:u,reset:p}}function US(){const i=[{id:"throttle",label:"Boost Throttle",description:"Push the engines harder. +40% forward acceleration, +25% top speed.",cost:100,bought:!1,apply(){on.maxThrottleAccel*=1.4,on.maxSpeed*=1.25}},{id:"agility",label:"Sharper Turning",description:"Twitch-faster yaw and pitch. +35% on both rates.",cost:90,bought:!1,apply(){on.yawRate*=1.35,on.pitchRate*=1.35}},{id:"hackRange",label:"Long-Range Hack",description:"The Tablet locks on from further out. Hack radius +50%.",cost:80,bought:!1,apply(){on.hackRadius*=1.5}}];function e(s,r){const o=i.find(a=>a.id===s);return!o||o.bought||!r.spendCredits(o.cost)?!1:(o.apply(),o.bought=!0,!0)}function t(s){const r=i.find(o=>o.id===s);return!r||r.bought?!1:(r.apply(),r.bought=!0,!0)}function n(){for(const s of i)s.bought=!1}return{upgrades:i,buy:e,buyFree:t,reset:n}}function OS({upgrades:i,mission:e,audio:t,onClose:n}){const s=document.createElement("div");s.id="mission-screens",s.innerHTML=`
    <div class="screen-overlay" id="screen-complete" data-screen="complete" hidden>
      <div class="screen-card">
        <h2 class="screen-card__title">${Ae.hud.missionCompleteTitle}</h2>
        <p class="screen-card__body">${Ae.hud.missionCompleteBody}</p>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-complete-credits>0</span></span>
        </div>
        <div class="screen-card__actions">
          <button class="screen-btn screen-btn--primary" data-action="open-upgrades">${Ae.hud.missionCompleteCta}</button>
          <button class="screen-btn" data-action="close-complete">${Ae.hud.missionCompleteClose}</button>
        </div>
      </div>
    </div>

    <div class="screen-overlay" id="screen-upgrades" data-screen="upgrades" hidden>
      <div class="screen-card screen-card--wide">
        <h2 class="screen-card__title">${Ae.hud.upgradeButton}</h2>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-upgrades-credits>0</span></span>
        </div>
        <p class="screen-card__hint">${Ae.hud.screenHint}</p>
        <ul class="upgrade-list" data-upgrade-list></ul>
        <div class="screen-card__actions">
          <button class="screen-btn" data-action="close-upgrades">${Ae.hud.upgradeClose}</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(s);const r=s.querySelector("#screen-complete"),o=s.querySelector("[data-complete-credits]"),a=s.querySelector("#screen-upgrades"),c=s.querySelector("[data-upgrades-credits]"),l=s.querySelector("[data-upgrade-list]");function u(){c.textContent=String(e.credits),l.innerHTML="";for(const m of i.upgrades){const M=document.createElement("li");M.className="upgrade-item"+(m.bought?" upgrade-item--bought":"");const v=!m.bought&&e.credits>=m.cost;M.innerHTML=`
        <div class="upgrade-item__head">
          <span class="upgrade-item__name">${m.label}</span>
          <span class="upgrade-item__cost">${m.cost} c</span>
        </div>
        <p class="upgrade-item__desc">${m.description}</p>
        <button class="screen-btn screen-btn--small" data-buy="${m.id}" ${m.bought||!v?"disabled":""}>
          ${m.bought?Ae.hud.upgradeBought:Ae.hud.upgradeBuy}
        </button>
      `,l.appendChild(M)}}function h(m){m==="complete"?(o.textContent=String(e.credits),r.hidden=!1):m==="upgrades"&&(u(),a.hidden=!1)}function d(m){m==="complete"?r.hidden=!0:m==="upgrades"&&(a.hidden=!0)}function f(){d("complete"),d("upgrades")}function g(){return!r.hidden||!a.hidden}function _(){return a.hidden?r.hidden?null:r.querySelector(".screen-card"):a.querySelector(".screen-card")}function p(m){const M=_();M&&(M.scrollTop+=m)}return s.addEventListener("click",m=>{const M=m.target;if(!(M instanceof Element))return;const v=M.getAttribute("data-action");if(v==="open-upgrades"){d("complete"),h("upgrades");return}if(v==="close-complete"){d("complete"),n?.();return}if(v==="close-upgrades"){d("upgrades"),n?.();return}const y=M.getAttribute("data-buy");y&&i.buy(y,e)&&(t&&t.chirp({fromHz:520,toHz:780,durationS:.25,peakGain:.18}),u())}),{show:h,hide:d,hideAll:f,isOpen:g,scrollBy:p}}const zf=40;function FS(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#0c3a66"),s.addColorStop(.5,"#1b6aa3"),s.addColorStop(1,"#0c3a66"),n.fillStyle=s,n.fillRect(0,0,1024,512);const r=[];for(let a=0;a<6;a++)r.push({x:Math.random()*1024,y:512*.25+Math.random()*512*.5,r:50+Math.random()*90});for(const a of r){const c=8+Math.floor(Math.random()*6);for(let l=0;l<c;l++){const u=(Math.random()-.5)*a.r*1.6,h=(Math.random()-.5)*a.r*1,d=18+Math.random()*45,f=Math.random()<.35;n.beginPath(),n.fillStyle=f?"rgba(30, 70, 30, 0.85)":"rgba(70, 130, 55, 0.9)",n.arc(a.x+u,a.y+h,d,0,Math.PI*2),n.fill()}}for(let a=0;a<60;a++){const c=Math.random()*1024,l=Math.random()*512,u=14+Math.random()*50;n.beginPath(),n.fillStyle=`rgba(245, 250, 255, ${.1+Math.random()*.12})`,n.arc(c,l,u,0,Math.PI*2),n.fill()}for(const a of[0,512]){const c=n.createRadialGradient(512,a,0,512,a,153.6);c.addColorStop(0,"rgba(240, 248, 255, 0.85)"),c.addColorStop(1,"rgba(240, 248, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,1024,512)}const o=new ns(t);return o.colorSpace=Ct,o}function BS(){const i=new Qe(zf,64,32),e=new qe({map:FS(),roughness:.85,metalness:0,emissive:1296}),t=new pe(i,e),n=new rn({color:6990591,transparent:!0,opacity:.18,blending:oi,side:Jt}),s=new pe(new Qe(zf*1.05,64,32),n);t.add(s);const r=.05;function o(a){t.rotation.y+=r*a}return{mesh:t,update:o}}const Hf=14,Gf=4.5,kS=.9;function zS(){const i=new rt,e=new ql(1,0);e.scale(Gf,Gf,Hf*.5);const t=new qe({color:3807780,roughness:.45,metalness:.6,emissive:3149848,flatShading:!0}),n=new pe(e,t);i.add(n);const s=new rn({color:16724016}),r=new pe(new Qe(kS,12,8),s);r.position.set(0,0,Hf*.55),i.add(r);const o=document.createElement("canvas");o.width=o.height=128;{const h=o.getContext("2d"),d=64,f=h.createRadialGradient(d,d,0,d,d,d);f.addColorStop(0,"rgba(255, 60, 60, 1)"),f.addColorStop(.3,"rgba(255, 30, 30, 0.6)"),f.addColorStop(1,"rgba(255, 30, 30, 0)"),h.fillStyle=f,h.fillRect(0,0,128,128)}const a=new ns(o);a.colorSpace=Ct;const c=new Ld(new Tl({map:a,transparent:!0,blending:oi,depthWrite:!1}));c.position.copy(r.position),c.scale.setScalar(5.5),i.add(c);const l=new gt(.35,1.4,6);l.translate(0,0,-1.5);const u=new qe({color:1837586,roughness:.6,metalness:.5,emissive:2099216,flatShading:!0});for(const h of[-1,1]){const d=new pe(l,u);d.position.set(h*2.6,0,-2.5),d.rotation.z=h*.25,d.rotation.y=h*.2,i.add(d)}return{group:i,hull:n,core:r,halo:c}}const Na=i=>i*i*(3-2*i),HS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,hu=[3.5,3,4,4,3.5,4.5];function GS({renderer:i}){const e=new Ir;e.background=new We(66055);const t=new kt(50,window.innerWidth/window.innerHeight,.1,5e3);t.position.set(0,8,140),t.lookAt(0,0,0),e.add(new Ea(10141920,1052704,.7));const n=new gi(16773848,1.1);n.position.set(50,30,80),e.add(n);const s=Mf();e.add(s);const r=BS();e.add(r.mesh);const o=zS();o.group.position.set(200,30,30),o.group.rotation.y=-.6,e.add(o.group);const a=new rn({color:16732224,transparent:!0,opacity:0,blending:oi,depthWrite:!1,side:Zt}),c=new pe(new hn(2,60,16,1,!0),a);c.rotation.x=Math.PI,e.add(c);const l=document.createElement("div");l.id="cinematic",l.innerHTML=`
    <div class="cinematic__skip" data-skip>${uu?Ae.intro.tapToSkip:Ae.intro.skip}</div>
    <div class="cinematic__text" data-text></div>
    <div class="cinematic__flash" data-flash></div>
  `,document.body.appendChild(l);const u=l.querySelector("[data-text]"),h=l.querySelector("[data-flash]");let d=0,f=0,g=0,_=!0,p=!0;function m(q,x,S){switch(q){case 0:{r.mesh.position.set(0,0,0),r.mesh.scale.setScalar(1+.02*Math.sin(g*.5)),o.group.position.x=200,c.material.opacity=0;break}case 1:{r.mesh.position.set(0,0,0),t.position.x=-10+20*HS(x),t.lookAt(0,0,0);break}case 2:{const C=140+-45*Na(x);t.position.set(0,8,C),t.lookAt(0,0,0);const N=140,k=38;o.group.position.x=N+(k-N)*Na(x),o.group.position.z=30-10*Na(x),o.group.rotation.y=-.6-.4*Na(x);break}case 3:{t.position.set(0,8,95),o.group.position.x=38,o.group.position.z=20,o.group.rotation.y=-1,c.material.opacity=.4+.35*Math.sin(g*12);const C=o.group.position,N=r.mesh.position;c.position.set((C.x+N.x)/2,(C.y+N.y)/2,(C.z+N.z)/2),c.lookAt(N),c.rotateX(Math.PI/2),t.position.x=Math.sin(g*30)*.4,t.position.y=8+Math.cos(g*27)*.3,t.position.z=95,t.lookAt(0,0,0);break}case 4:{o.group.position.x=38,o.group.position.z=20,t.position.set(0,8,95),t.lookAt(0,0,0),x<.5?(h.style.opacity=String(x*2*.95),c.material.opacity=.35*(1-x*2)):(o.group.visible=!1,r.mesh.visible=!1,c.material.opacity=0,h.style.opacity=String(Math.max(0,1-(x-.5)*2)));break}case 5:{h.style.opacity="0";break}}}function M(q){u.innerHTML=q.split(`
`).map(x=>`<p>${x}</p>`).join(""),u.classList.remove("cinematic__text--in"),u.offsetWidth,u.classList.add("cinematic__text--in")}function v(){d+=1,f=0,p=!0,d>=hu.length&&y()}function y(){_&&(_=!1,l.remove(),e.traverse(q=>{q.geometry&&q.geometry.dispose();const x=Array.isArray(q.material)?q.material:q.material?[q.material]:[];for(const S of x)S.map&&S.map.dispose(),S.dispose()}))}function A(){y()}function E(q){if(!_)return;g+=q,f+=q,p&&(M(Ae.intro.beats[d]),p=!1);const x=Math.min(1,f/hu[d]);m(d,x),r.update(q),o.halo.material.opacity=.7+.25*Math.sin(g*4),Sf(s,t),f>=hu[d]&&v()}function T(){_&&i.render(e,t)}function U(q=window.innerWidth,x=window.innerHeight){t.aspect=q/x,t.updateProjectionMatrix()}return{update:E,render:T,skip:A,onResize:U,get active(){return _}}}function VS(){if(!(new URLSearchParams(window.location.search).get("debugPad")==="1"))return{update(){}};const e=document.createElement("div");e.id="debug-pad",Object.assign(e.style,{position:"fixed",top:"8px",left:"8px",zIndex:"9999",background:"rgba(0,0,0,0.78)",color:"#9af0a0",font:"11px ui-monospace, Menlo, Consolas, monospace",padding:"8px 10px",maxWidth:"min(92vw, 520px)",maxHeight:"60vh",overflow:"auto",border:"1px solid #3a3",borderRadius:"4px",whiteSpace:"pre-wrap",pointerEvents:"none",lineHeight:"1.35"}),document.body.appendChild(e);function t(){const n=Uf(),s=n?window.__p5NativeHost===!0?"__p5NativeHost=true":"webkit.messageHandlers":"(none — desktop / non-wrapper)",r=window.__nativeGamepadBridgeReady===!0,o=window.__nativeGamepadUpdateCount||0,a=window.__nativeGamepadLastRaw,c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[],l=c&&c[0];let u="(no pad)";if(l){const h=[];for(let d=0;d<l.buttons.length;d++)l.buttons[d]&&l.buttons[d].pressed&&h.push(d);u=`id=${JSON.stringify(l.id)}
mapping=${l.mapping}
axes=[${l.axes.map(d=>d.toFixed(2)).join(", ")}]
pressed buttons=[${h.join(", ")||"(none)"}]`}return["=== gamepad debug ===",`bridge available: ${n}  (${s})`,`bridge module ready: ${r}`,`__nativeGamepadUpdate calls: ${o}`,`last raw payload: ${a?JSON.stringify(a).slice(0,240):"(none yet)"}`,"","--- navigator.getGamepads()[0] ---",u].join(`
`)}return{update(){e.textContent=t()}}}const WS=[0,120,350,700],XS=2;function qS(i){const e=i.getBoundingClientRect(),t=Math.max(1,Math.round(e.width||window.innerWidth)),n=Math.max(1,Math.round(e.height||window.innerHeight));return{width:t,height:n,pixelRatio:Math.min(window.devicePixelRatio||1,XS)}}function YS(i,e){let t={width:0,height:0,pixelRatio:0};const n=[];function s(){const a=qS(i);a.width===t.width&&a.height===t.height&&a.pixelRatio===t.pixelRatio||(t=a,e(a))}function r(){for(const a of n.splice(0))clearTimeout(a);for(const a of WS)n.push(setTimeout(s,a))}const o=new ResizeObserver(s);return o.observe(i),window.addEventListener("resize",s),window.addEventListener("orientationchange",r),window.visualViewport?.addEventListener("resize",s),window.addEventListener("pageshow",r),screen.orientation?.addEventListener("change",r),s(),{measure:s,dispose(){for(const a of n.splice(0))clearTimeout(a);o.disconnect(),window.removeEventListener("resize",s),window.removeEventListener("orientationchange",r),window.visualViewport?.removeEventListener("resize",s),window.removeEventListener("pageshow",r),screen.orientation?.removeEventListener("change",r)}}}const KS=new F(0,1.4,-5.5),du=Xi.degToRad(180),fu=Xi.degToRad(85),$S=.04,jS=.09,Vf=new F(1,0,0),Wf=new F(0,1,0);function Xf(i){return i<-1?-1:i>1?1:i}function Da(i,e){return i<-e?-e:i>e?e:i}function pu(i,e){return 1-Math.pow(2,-i/e)}function JS(i){let e=0,t=0,n=0,s=0,r=!1;const o=new F,a=new F,c=new F;return{get orbit(){return{yaw:e,pitch:t}},reset(){e=0,t=0,n=0,s=0,r=!1},update(l,u,h){const d=Xf(u?.x??0),f=Xf(u?.y??0);if(n=Da(n+(u?.turnX??0),du),s=Da(s-(u?.turnY??0),fu),Math.abs(d)>.05||Math.abs(f)>.05){const m=pu(h,.25);n-=n*m,s-=s*m}const g=Da(d*du+n,du),_=Da(-f*fu+s,fu),p=pu(h,jS);e+=(g-e)*p,t+=(_-t)*p,o.copy(KS).multiplyScalar(l.mesh.scale.x).applyAxisAngle(Vf,t).applyAxisAngle(Wf,e).applyQuaternion(l.mesh.quaternion),a.copy(l.mesh.position).add(o),r?i.position.lerp(a,pu(h,$S)):(i.position.copy(a),r=!0),c.set(0,1,0).applyAxisAngle(Vf,t).applyAxisAngle(Wf,e).applyQuaternion(l.mesh.quaternion),i.up.copy(c),i.lookAt(l.mesh.position)}}}const ZS=[{name:"The Camelloo",of:"Camels Kindom",at:[.16,.16],r:.3,uplift:.14,moisture:.02,heat:.94},{name:"The Camelloo",of:"the deep sand",at:[.06,.34],r:.2,uplift:.1,moisture:.04,heat:.92},{name:"The Vulcans",of:"Rock People Kindom",at:[.89,.2],r:.26,uplift:.95,moisture:.3,heat:.8},{name:"Astro Lake",of:"the lake country",at:[.63,.2],r:.2,uplift:.3,moisture:.92,heat:.44},{name:"Estronic",of:"capital of Continent Alpha",at:[.49,.47],r:.16,uplift:.2,moisture:.62,heat:.58},{name:"Dwellers Territory",of:"the wooded hills",at:[.42,.74],r:.24,uplift:.52,moisture:.86,heat:.54},{name:"The Dwellers",of:"Elfs Kindom",at:[.14,.88],r:.32,uplift:.3,moisture:.99,heat:.6},{name:"The Magica Republic",of:"the Republic of Wizards",at:[.87,.78],r:.3,uplift:.58,moisture:.44,heat:.24},{name:"the west shore",of:"low ground along the western sea",at:[-.04,.6],r:.2,uplift:.1,moisture:.7,heat:.56}],QS=[{name:"Only river to the Camelloo",points:[[.03,.33],[.11,.35],[.19,.33],[.27,.35],[.34,.36],[.4,.36],[.45,.38]]},{name:"Artifical river",points:[[0,.5],[.12,.47],[.24,.45],[.34,.43],[.42,.42]],straight:!0},{name:"Lava river",points:[[.79,.33],[.77,.38],[.76,.43],[.74,.48]],lava:!0},{name:"the north river",points:[[.42,0],[.4,.08],[.36,.14],[.3,.19],[.26,.25],[.28,.31],[.34,.34]]},{name:"the river out of Astro Lake",points:[[.56,.3],[.54,.36],[.52,.41],[.5,.44]]},{name:"the south road river",points:[[.47,.57],[.45,.64],[.42,.71],[.38,.78],[.35,.86]]},{name:"the Dwellers water",points:[[.2,.66],[.26,.7],[.31,.74],[.33,.8],[.31,.88]]},{name:"the barrier river",points:[[.62,.55],[.65,.62],[.68,.68],[.7,.75],[.71,.83]],magic:!0},{name:"the east river",points:[[.74,.52],[.79,.55],[.84,.57],[.9,.58]]}],mu={points:[[.55,.06],[.62,.04],[.69,.08],[.73,.15],[.73,.23],[.7,.29],[.64,.33],[.58,.32],[.54,.27],[.53,.19],[.53,.12]]},e1=[{points:[[.03,.63],[.12,.6],[.22,.59],[.31,.6],[.4,.63]],height:1},{points:[[.4,.63],[.47,.7],[.54,.78],[.6,.86],[.64,.95]],height:.9}],qf=[{name:"Estronic",of:"capital of Continent Alpha",kind:"capital",at:[.49,.47],r:1800,walls:14276303,roofs:10262672,trim:8225416,glass:4156288},{name:"West Village",of:"on the edge of the Camelloo",kind:"village",at:[.23,.52],r:190,walls:13216644,roofs:9270608,trim:7298112},{name:"Bobo Village",of:"of the Rock People",kind:"village",at:[.87,.42],r:190,walls:7038304,roofs:4208687,trim:3025190}],t1={Estronic:[{name:"Ferra",lines:["Estronic sits in the middle of Continent Alpha, and every road you can see runs out to somewhere worth going.","The shipport is on the south side. Set down on a lit ring and nobody will complain."]},{name:"Oben",lines:["Fly north-east far enough and the ground goes white. That is the Spire, over in the Vulcans.","The Rock People live under it. They say the mountain is quiet. They say that every year."]},{name:"Sil",lines:["Astro Lake is a morning north of here. Big water, cold, and no bottom that anyone has found."]},{name:"Marn",lines:["West of us the green runs out and the Camelloo begins. Sand as far as you can fly.","There is one river into the Camelloo. One. Do not go out there expecting a second."]},{name:"Yeska",lines:["South and west is the Dwellers’ forest. Elves. Polite, and they would rather you did not."]},{name:"Colm",lines:["Do not cross the invisible barrier in the south-east without being asked. The Magica Republic keeps to itself."]},{name:"Vess",lines:["The tower in the middle? You can see it from outside the city. That is what it is for."]},{name:"Tarro",lines:["Monsters camp out in the wild country. Fires at night. Give them a wide berth or bring the gun."]},{name:"Enna",lines:["Two villages worth the trip: West Village out towards the sand, Bobo under the mountain."]},{name:"Rulf",lines:["Nine kingdoms’ worth of road meets in this city, and every one of them is somebody else’s edge of the world."]},{name:"Miot",lines:["Rivers run out of here in every direction. Follow one and you will get somewhere eventually."]},{name:"Sabb",lines:["I have never left the walls. There are no walls any more, and I have still never left."]},{name:"Della",lines:["Weather comes off Astro Lake. When the north goes grey, get indoors."]},{name:"Poy",lines:["Watch where you set that ship down. The pads are lit for a reason."]},{name:"Ivo",lines:["Everything north-east of here is uphill. Everything. I have walked it."]},{name:"Wren",lines:["You are the one with the spacecraft, then. We do not get many."]}],"West Village":[{name:"Idra",lines:["We are the last green thing before the sand. Fill your water here."]},{name:"Bo",lines:["The artificial river runs past us. Somebody dug it, long ago. Nobody remembers who."]},{name:"Halle",lines:["Camels come through in the season, out of the Camelloo. Big feet, worse tempers."]}],"Bobo Village":[{name:"Grud",lines:["You are standing on the Vulcans. Under us it is warm all the way down."]},{name:"Ashet",lines:["The Spire has a hole in the top and snow round it. Both true at once. That is the mountain for you."]},{name:"Perrin",lines:["A lava river ran through here once. You are walking on it."]}]},Yf=["Anse","Bett","Calla","Dov","Emm","Faro","Gale","Hesk","Ivet","Jarn","Kesta","Lom","Mira","Noll","Orin","Pell","Quill","Rue","Semm","Tavi","Ubba","Vell","Wick","Xan","Ysolde","Zeb","Arno","Bru","Cassi","Dell","Efa","Fitz","Gerd","Halm","Iska","Jory","Kip","Lenn","Morra","Nen","Obb","Pim","Ras","Sena","Toft","Ulla","Vero","Wenn","Yara","Zorn"],Kf=["Mind the ships. They come in over the south side all day.","You are not from the city. Nobody from here looks up that much.","Market is better in the morning. Everything worth having has gone by noon.","That tower? Climb it if they let you. They will not let you.","Rain off the lake by evening, I should think.","Careful past the barrier. The wizards do not send anybody back.","The Camelloo road is dry the whole way. Take more water than you think.","My cousin walked to Bobo Village. Took her nine days and she has not stopped talking about it.","The rivers all start somewhere up in the Vulcans. All of them.","Do not camp in the open country. There are things out there with clubs.","Every street in this city ends at a gate. That was on purpose, they say.","You get used to the noise from the shipport. Mostly.","The Dwellers keep to their forest and we keep to our streets.","Estronic was three streets and a well, once. My grandfather says.","There is nothing north of the lake but weather.","If you are flying west, go over the sand, not round it. Round it takes a week.","Nobody has ever counted the buildings. People have tried.","Good day for it, whatever you are doing.","Astro Lake freezes at the edges some winters. Never the middle.","They light the landing rings at dusk. Prettiest thing in the city."],$f=[.89,.2],jf=6,xt=i=>i/jf,Pn=xt(3400),or=xt(2100),Jf=xt(3100),Zf=xt(480),n1=xt(25),i1=xt(300),_i=2e4,s1=62e3,r1=127,Qf=620,o1=-6,ep=4200,a1=300,an=65e3,dn=43e3,c1=.8,ss=0,ti={x:($f[0]-.5)*2*65e3,z:($f[1]-.5)*2*43e3,radius:5200,height:1450,craterR:520,craterDepth:320},tp=Math.tan(33*Math.PI/180);function l1(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const gu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],u1=.5*(Math.sqrt(3)-1),to=(3-Math.sqrt(3))/6;function Ua(i){const e=l1(i),t=new Uint8Array(512),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1)),o=n[s];n[s]=n[r],n[r]=o}for(let s=0;s<512;s++)t[s]=n[s&255];return function(r,o){const a=(r+o)*u1,c=Math.floor(r+a),l=Math.floor(o+a),u=(c+l)*to,h=r-(c-u),d=o-(l-u),f=h>d?1:0,g=h>d?0:1,_=h-f+to,p=d-g+to,m=h-1+2*to,M=d-1+2*to,v=c&255,y=l&255;let A=0,E=.5-h*h-d*d;if(E>0){const q=gu[t[v+t[y]]&7];E*=E,A+=E*E*(q[0]*h+q[1]*d)}let T=.5-_*_-p*p;if(T>0){const q=gu[t[v+f+t[y+g]]&7];T*=T,A+=T*T*(q[0]*_+q[1]*p)}let U=.5-m*m-M*M;if(U>0){const q=gu[t[v+1+t[y+1]]&7];U*=U,A+=U*U*(q[0]*m+q[1]*M)}return 70*A}}const no=i=>i<0?0:i>1?1:i,Ut=(i,e,t)=>{const n=no((t-i)/(e-i));return n*n*(3-2*n)},yn=(i,e,t)=>i+(e-i)*t,Ke={SEA:"sea",BEACH:"beach",PLAIN:"plain",SAVANNA:"savanna",FOREST:"forest",HILLS:"hills",MOUNTAIN:"mountain",SNOW:"snow",DUNES:"dunes",STONE_DESERT:"stone",SALT:"salt",BADLANDS:"badlands",MESA:"mesa"},tn={[Ke.SEA]:1915725,[Ke.BEACH]:13482642,[Ke.PLAIN]:6056771,[Ke.SAVANNA]:8680794,[Ke.FOREST]:3755310,[Ke.HILLS]:5465665,[Ke.MOUNTAIN]:8223340,[Ke.SNOW]:15265008,[Ke.DUNES]:11040327,[Ke.STONE_DESERT]:7369301,[Ke.SALT]:15721154,[Ke.BADLANDS]:9073235,[Ke.MESA]:10714715};function h1({seed:i=20260827}={}){const e=Ua(i),t=Ua(i+101),n=Ua(i+202),s=Ua(i+303);function r(z,Y,L,K,ie,ee=.38){let se=0,te=1,ce=0,he=1/ie;for(let J=0;J<K;J++)se+=z(Y*he,L*he)*te,ce+=te,te*=ee,he*=2.02;return se/ce}function o(z,Y,L,K,ie,ee=.42){let se=0,te=1,ce=0,he=1/ie,J=1;for(let R=0;R<K;R++){let re=1-Math.abs(z(Y*he,L*he));re*=re,re*=J,J=no(re*2.2),se+=re*te,ce+=te,te*=ee,he*=2.02}return se/ce}function a(z,Y,L,K){return[z+r(n,z,Y,2,K)*L,Y+r(s,z,Y,2,K)*L]}function c(z,Y){const L=r(e,z,Y,4,s1,.42)*.3+1,K=Math.max(Math.abs(z)/an,Math.abs(Y)/dn),ie=Ut(c1,1.02,K)*2.4+Math.max(0,K-1)*3;return L-ie}const l=ZS.map(z=>({x:(z.at[0]-.5)*2*an,z:(z.at[1]-.5)*2*dn,rr:(z.r*2*an)**2,uplift:z.uplift,moisture:z.moisture,heat:z.heat})),u=512,h=340,d=an*2/u,f=dn*2/h;let g=null;function _(){const z=new Float32Array(u*h).fill(1e9),Y=new Float32Array(u*h).fill(1e9),L=new Uint8Array(u*h),K=(se,te,ce)=>{const he=Math.round(te*u),J=Math.round(ce*h);he<0||J<0||he>=u||J>=h||(se[J*u+he]=0)},ie=(se,te)=>{for(let ce=0;ce<te.length-1;ce++){const[he,J]=te[ce],[R,re]=te[ce+1],oe=Math.ceil(Math.hypot((R-he)*u,(re-J)*h))+1;for(let de=0;de<=oe;de++)K(se,he+(R-he)*de/oe,J+(re-J)*de/oe)}};for(const se of QS)ie(z,se.points);for(const se of e1)ie(Y,se.points);for(let se=0;se<h;se++){const te=(se+.5)/h;for(let ce=0;ce<u;ce++){const he=(ce+.5)/u;let J=!1;for(let R=0,re=mu.points.length,oe=re-1;R<re;oe=R++){const[de,be]=mu.points[R],[Ue,we]=mu.points[oe];be>te!=we>te&&he<(Ue-de)*(te-be)/(we-be)+de&&(J=!J)}J&&(L[se*u+ce]=1)}}const ee=se=>{const te=d,ce=f,he=Math.hypot(te,ce);for(let J=0;J<h;J++)for(let R=0;R<u;R++){const re=J*u+R;let oe=se[re];R>0&&(oe=Math.min(oe,se[re-1]+te)),J>0&&(oe=Math.min(oe,se[re-u]+ce)),R>0&&J>0&&(oe=Math.min(oe,se[re-u-1]+he)),R<u-1&&J>0&&(oe=Math.min(oe,se[re-u+1]+he)),se[re]=oe}for(let J=h-1;J>=0;J--)for(let R=u-1;R>=0;R--){const re=J*u+R;let oe=se[re];R<u-1&&(oe=Math.min(oe,se[re+1]+te)),J<h-1&&(oe=Math.min(oe,se[re+u]+ce)),R<u-1&&J<h-1&&(oe=Math.min(oe,se[re+u+1]+he)),R>0&&J<h-1&&(oe=Math.min(oe,se[re+u-1]+he)),se[re]=oe}};return ee(z),ee(Y),{river:z,ridge:Y,lake:L}}function p(z,Y,L){const K=(Y+an)/(an*2)*u-.5,ie=(L+dn)/(dn*2)*h-.5,ee=Math.floor(K),se=Math.floor(ie);if(ee<0||se<0||ee>=u-1||se>=h-1)return 1e9;const te=K-ee,ce=ie-se,he=z[se*u+ee],J=z[se*u+ee+1],R=z[(se+1)*u+ee],re=z[(se+1)*u+ee+1];return yn(yn(he,J,te),yn(R,re,te),ce)}const m=qf.map(z=>({name:z.name,x:(z.at[0]-.5)*2*an,z:(z.at[1]-.5)*2*dn,r:z.r,reach:z.r*2.4,level:0}));let M=!1,v=!1;const y={uplift:.5,moisture:.5,heat:.5};function A(z,Y){const L=_i*.55,K=z+r(t,z,Y,2,_i*2.2)*L,ie=Y+r(n,z,Y,2,_i*2.2)*L;let ee=0,se=0,te=0,ce=0;for(const he of l){const J=((K-he.x)**2+(ie-he.z)**2)/he.rr,R=1/(J*J*J+.02);ee+=he.uplift*R,se+=he.moisture*R,te+=he.heat*R,ce+=R}return y.uplift=ee/ce,y.moisture=se/ce,y.heat=te/ce,y}function E(z,Y){return no(A(z,Y).uplift+r(t,z+4e3,Y-9e3,3,_i*.8,.45)*.22)}function T(z,Y){return no(A(z,Y).moisture+r(n,z-21e3,Y+12e3,3,_i*.7,.45)*.2)}function U(z,Y){return no(A(z,Y).heat+r(s,z*.3+7e3,Y,2,_i*1.6,.45)*.14)}function q(z,Y,L){const K=z/Y,ie=Math.floor(K),ee=K-ie;return(ie+Ut(0,1,Math.min(1,ee*L)))*Y}const x=.22,S=or*x*tp;function C(z){const Y=z-Math.floor(z),L=1-x;if(Y<L){const K=Y/L;return K*K*(3-2*K)}return 1-(Y-L)/x}function N(z,Y){return{continent:c(z,Y),uplift:E(z,Y),moisture:T(z,Y),heat:U(z,Y)}}const k=xt(150);function B(z,Y,L){return z<k*.8&&L>.5?.05:.12+Y*.45}function b(z){const{uplift:Y,moisture:L}=z,K=1-L;return{alpine:Ut(.56,.92,Y)*(1-Ut(.42,.62,K)),plateau:Ut(.58,.72,K)*Ut(.36,.52,Y)*(1-Ut(.66,.84,Y)),sandy:Ut(.64,.84,K)*(1-Ut(.34,.6,Y))}}function G(z,Y,L){const K=L??N(z,Y),{continent:ie,uplift:ee,moisture:se}=K,te=1-se,{alpine:ce,plateau:he,sandy:J}=b(K);let R=r(e,z,Y,3,_i*.9)*xt(90);if(R+=r(t,z,Y,3,Pn*3.2)*Zf*(.04+ee*ee*1.6),ce>.001){const[me,Ge]=a(z,Y,Pn*.75,Pn*6);let ge=o(e,me,Ge,5,Pn*4);ge=Math.pow(ge,1.25),R=yn(R,R+ge*Jf,ce)}if(he>.01){const me=xt(1500)*(.45+ee*.8)+r(t,z,Y,2,Pn*6)*xt(260),[Ge,ge]=a(z,Y,Pn*.8,Pn*5),Le=Ut(.55,.92,o(s,Ge,ge,3,Pn*3))*xt(1100);R=yn(R,q(me-Le,xt(170),3.2),he)}const re=Math.hypot(z-ti.x,Y-ti.z);if(re<ti.radius){const me=1-re/ti.radius,Ge=Math.atan2(Y-ti.z,z-ti.x),ge=Math.sin(Ge*17+r(t,z,Y,2,900)*2.2)*34*me*(1-me)*4,Ie=r1+Math.pow(me,1.6)*ti.height-Ut(ti.craterR,ti.craterR*.3,re)*ti.craterDepth-Math.abs(ge)+r(s,z,Y,3,120,.5)*9;R=yn(R,Ie,Ut(0,.34,me))}if(J>.001){const me=r(t,z,Y,2,_i*2)*.9,Ge=z*Math.cos(me)+Y*Math.sin(me),ge=r(n,z,Y,2,or*5)*or*.5,Ie=C((Ge+ge)/or),Le=C((Ge*2.7-ge)/or);R+=(Ie*.78+Le*.22)*S*J}if(te>.5&&R<k&&ie>.12){const me=Ut(.5,.72,te)*Ut(k,xt(20),R);R=yn(R,k*.55,me*.95)}const[oe,de]=a(z,Y,Pn*1.2,Pn*7),be=o(n,oe,de,3,Pn*5),Ue=Ut(.5,.98,be);Ue>.001&&(R-=Ue*xt(340)*(.06+ee*ee*1.1)*(1-he*.8));const we=B(R,ee,te);we>.01&&(R+=r(s,z,Y,3,17,.5)*we);const D=xt(760)*Ut(-.05,.55,ie),w=Ut(-.1,.14,ie),Q=yn(-xt(900),xt(10),Ut(-.6,.14,ie));let ne=yn(Q,R+D,w);M||I(),g||(g=_());const fe=p(g.ridge,z,Y);fe<ep&&(ne+=Ut(ep,0,fe)*a1*w);const le=p(g.river,z+r(t,z,Y,2,2600)*520,Y+r(n,z,Y,2,2600)*520);if(le<Qf&&w>.01){const me=Ut(Qf,0,le);ne=yn(ne,Math.min(ne,o1),Math.min(1,me*1.25)*w)}const Pe=Math.round((z+an)/(an*2)*u),ye=Math.round((Y+dn)/(dn*2)*h);if(Pe>=0&&ye>=0&&Pe<u&&ye<h&&g.lake[ye*u+Pe])ne=Math.min(ne,-xt(160));else if(Pe>=1&&ye>=1&&Pe<u-1&&ye<h-1){let me=0;for(const[Ge,ge]of[[1,0],[-1,0],[0,1],[0,-1]])me+=g.lake[(ye+ge)*u+Pe+Ge];me>0&&r(n,z,Y,2,1400)>.1&&(ne=Math.min(ne,-xt(60)))}if(!v)for(const me of m){const Ge=Math.hypot(z-me.x,Y-me.z);Ge>me.reach||(ne=yn(ne,me.level,Ut(me.reach,me.r*.75,Ge)))}return ne}function I(){M=!0,v=!0;for(const z of m){let Y=0,L=0;for(let K=0;K<12;K++){const ie=K/12*Math.PI*2,ee=z.r*(K%2?.75:.35);Y+=G(z.x+Math.cos(ie)*ee,z.z+Math.sin(ie)*ee),L++}z.level=Y/L}v=!1}function W(z,Y,L=4){const K=N(z,Y),ie=G(z,Y,K),ee=G(z+L,Y)-G(z-L,Y),se=G(z,Y+L)-G(z,Y-L),te=Math.atan(Math.hypot(ee,se)/(2*L));return{height:ie,slope:te,slopeDeg:te*180/Math.PI,region:K,biome:H(z,Y,ie,te,K)}}function H(z,Y,L,K,ie){if(L<=ss)return Ke.SEA;const{uplift:ee,moisture:se,heat:te}=ie,ce=1-se,he=K*180/Math.PI,{alpine:J,plateau:R,sandy:re}=b(ie),oe=yn(xt(1500),xt(6400),te);if(L>oe&&!(R>J))return Ke.SNOW;const de=oe*.62;return L<xt(40)&&he<3&&ce<.55?Ke.BEACH:R>.35&&R>=J?L<k*.8&&he<2.5?Ke.SALT:ee>.44?Ke.MESA:Ke.BADLANDS:re>.35&&re>=J?L<k*.8&&he<2.5?Ke.SALT:Ke.DUNES:ce>.58?L<k*.8&&he<2.5?Ke.SALT:he>30||L>de?Ke.MOUNTAIN:Ke.STONE_DESERT:he>30||L>de?Ke.MOUNTAIN:se<.5?Ke.SAVANNA:ee>.62||he>13?Ke.HILLS:se>.66?Ke.FOREST:Ke.PLAIN}function Z(z,Y){return W(z,Y).biome}return{heightAt:G,sampleAt:W,biomeAt:Z,regionAt:N,continentField:c,upliftField:E,moistureField:T,heatField:U,styleAt:b,get towns(){return M||I(),m},snowlineAt(z,Y){return yn(xt(1500),xt(6400),U(z,Y))},seaLevel:ss,constants:{SHRINK:jf,RIDGE_SPACING:Pn,DUNE_SPACING:or,MOUNTAIN_RELIEF:Jf,HILL_RELIEF:Zf,PLAIN_RELIEF:n1,DUNE_HEIGHT:i1,REGION_SIZE:_i,REPOSE:tp}}}function Mn(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Dt;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=np(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=np(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function np(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Nt(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function ip(i,e){if(e===Um)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wc||e===yh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Wc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function d1(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function f1(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const io=3.2,p1=4;function m1(i,e,{x:t,z:n,w:s,d:r,storeys:o}){const a=o*io,c=new gt(s,a,r);if(c.translate(t,a/2,n),i.push(c),o>=4){const u=new gt(s+1.4,1.2,r+1.4);u.translate(t,a+.6,n),i.push(u)}const l=Math.max(1,Math.min(p1,Math.round(o/3)));for(let u=0;u<l;u++){const h=(u+.6)/l*a,d=Math.min(2.4,a/l*.42),f=new gt(s+.5,d,r+.5);f.translate(t,h,n),e.push(f)}}function g1(i,e,{x:t,z:n,w:s,d:r,storeys:o,angle:a}){const c=o*io,l=new gt(s,c,r);l.translate(0,c/2,0);const u=new hn(Math.hypot(s,r)*.54,Math.max(1.6,c*.34),4);u.rotateY(Math.PI/4),u.translate(0,c+Math.max(1.6,c*.34)/2,0);for(const h of[l,u])h.rotateY(a),h.translate(t,0,n);return i.push(l),e.push(u),{x:t,z:n,halfX:Math.max(s,r)*.5,halfZ:Math.max(s,r)*.5}}function _1(i,e,t,n){const s=d1(f1(i.name)),r=[],o=[],a=[],c=[],l=[],u=[],h=[],d=[],f=[],g=[],_=v=>{d.push(g1(r,o,v))};if(i.kind==="capital"){const A=Math.max(3,Math.round(i.r*.78/96)),E=new mt(i.r*.82,i.r*.86,.4,40);E.translate(0,.2,0),l.push(E);const T=io*60,U=new gt(26,T,26);U.translate(0,T/2,0),r.push(U);const q=new gt(26.6,T*.82,18);q.translate(0,T*.5,0),c.push(q);const x=new mt(.8,1.3,38,6);x.translate(0,T+19,0),a.push(x),d.push({x:0,z:0,halfX:15,halfZ:15});for(let I=-A;I<=A;I++)for(let W=-A;W<=A;W++){if(I===0&&W===0)continue;const H=I*96,Z=W*96,z=Math.hypot(I,W)/(A+.5);if(z>1.05||I>=A-5.4&&W>=A-5||s()<.19)continue;const Y=76,L=s()<.62?1:2,K=s()<.58?1:2;for(let ie=0;ie<L;ie++)for(let ee=0;ee<K;ee++){const se=Y/L,te=Y/K,ce=se-5-s()*4,he=te-5-s()*4;if(ce<8||he<8)continue;const J=(ie-(L-1)/2)*se,R=(ee-(K-1)/2)*te,re=Math.max(0,1-z),oe=Math.max(2,Math.round(re**1.6*20+2+(s()<.12?9:0)+s()*3));m1(r,c,{x:H+J,z:Z+R,w:ce,d:he,storeys:oe}),d.push({x:H+J,z:Z+R,halfX:ce/2,halfZ:he/2})}}const S=["apothecary","gunsmith","shipwright"];for(const[I,W]of S.entries()){const H=I/S.length*Math.PI*2+.55,Z=96*1.15,z=Math.cos(H)*Z,Y=Math.sin(H)*Z,L=H+Math.PI,K=26,ie=17,ee=io*2,se=new gt(K,ee,ie);se.translate(0,ee/2,0),se.rotateY(-L),se.translate(z,0,Y),r.push(se);const te=new gt(K*.8,.6,4.5);te.translate(0,ee*.62,ie/2+2),te.rotateY(-L),te.translate(z,0,Y),h.push(te);const ce=new gt(K*.5,2.2,.5);ce.translate(0,ee*.82,ie/2+.4),ce.rotateY(-L),ce.translate(z,0,Y),h.push(ce),d.push({x:z,z:Y,halfX:Math.max(K,ie)/2,halfZ:Math.max(K,ie)/2});const he=Math.max(K,ie)/2+4.5;g.push({kind:W,x:z+Math.sin(L)*he,z:Y+Math.cos(L)*he})}const C=96*(A-3.4),N=96*(A-3),k=new gt(96*3.4,.5,96*2.6);k.translate(C,.25,N),l.push(k);for(let I=0;I<4;I++){const W=C+(I%2-.5)*96*1.6,H=N+(Math.floor(I/2)-.5)*96*1.2,Z=new Hn(13,.7,5,20);Z.rotateX(Math.PI/2),Z.translate(W,.7,H),u.push(Z),f.push({x:W,z:H,r:13})}const B=io*12,b=new mt(3.4,4.6,B,10);b.translate(C-96*1.9,B/2,N-96*1.5),r.push(b);const G=new mt(9,7,9,10);G.translate(C-96*1.9,B+4.5,N-96*1.5),c.push(G),d.push({x:C-96*1.9,z:N-96*1.5,halfX:5,halfZ:5});for(let I=0;I<2;I++){const W=C+(I-.5)*96*1.7,H=N+96*1.15,Z=new gt(96*1.3,13,26);Z.translate(W,6.5,H),r.push(Z);const z=new mt(13,13,96*1.3,12,1,!1,0,Math.PI);z.rotateZ(Math.PI/2),z.translate(W,13,H),a.push(z),d.push({x:W,z:H,halfX:96*.65,halfZ:13})}}else{const v=13+Math.floor(s()*5);for(let A=0;A<v;A++){const E=A/v*Math.PI*2+s()*.4,T=i.r*(.3+s()*.42);_({x:Math.cos(E)*T,z:Math.sin(E)*T,w:7+s()*6,d:7+s()*6,storeys:1+Math.floor(s()*2),angle:E+Math.PI/2+(s()-.5)*.5})}const y=new mt(2.2,2.4,1.6,10);y.translate(0,.8,0),a.push(y),d.push({x:0,z:0,halfX:2.6,halfZ:2.6})}const p=(v,y)=>!d.some(A=>Math.abs(v-A.x)<A.halfX+.8&&Math.abs(y-A.z)<A.halfZ+.8);for(const v of g){if(p(v.x,v.z))continue;const y=Math.atan2(v.z,v.x);let A=!1;for(let E=4;E<=40&&!A;E+=4)for(let T=0;T<12&&!A;T++){const U=y+(T%2?1:-1)*Math.ceil(T/2)*.42,q=v.x+Math.cos(U)*E,x=v.z+Math.sin(U)*E;p(q,x)&&(v.x=q,v.z=x,A=!0)}}const m=new rt,M=[[r,new qe({color:i.walls,roughness:.92})],[o,new qe({color:i.roofs,roughness:.86})],[a,new qe({color:i.trim,roughness:.95})],[c,new qe({color:i.glass??2375758,roughness:.12,metalness:.72})],[l,new qe({color:7237750,roughness:.98})],[h,new qe({color:12866879,roughness:.85})],[u,new qe({color:10476778,emissive:3135231,emissiveIntensity:.45,roughness:.6})]];for(const[v,y]of M){if(!v.length)continue;const A=Mn(v,!1);for(const T of v)T.dispose();const E=new pe(A,y);E.castShadow=!0,E.receiveShadow=!0,m.add(E)}m.position.set(e,n,t);for(const v of d)v.x+=e,v.z+=t;return{group:m,footprints:d,name:i.name,kind:i.kind,x:e,z:t,level:n,radius:i.r,pads:f.map(v=>({x:v.x+e,z:v.z+t,r:v.r})),shops:g.map(v=>({...v,x:v.x+e,z:v.z+t}))}}const x1=1.15,v1=2.6,y1=3.4,sp=[3960485,8014699,5077586,11040316,5462111,9194052],rp=[14198404,11565653,9067068,15713956];function M1(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function S1(){const i=[],e=new gt(.42,.62,.26);e.translate(0,1.16,0),i.push(e);const t=new Qe(.13,8,6);t.translate(0,1.6,0),i.push(t);for(const n of[-1,1]){const s=new vn(.055,.42,3,6);s.translate(n*.27,1.14,0),i.push(s)}return Mn(i,!1)}function b1(){const i=new vn(.075,.56,3,6);return i.translate(0,-.34,0),i}function w1({town:i,count:e,isStreet:t,seed:n=1,anchors:s=[],lift:r=0}){const o=M1(n),a=S1(),c=b1(),l=new qe({roughness:.85}),u=new qe({roughness:.9}),h=new Br(a,u,e),d=new Br(c,u,e),f=new Br(c,u,e);for(const C of[h,d,f])C.instanceMatrix.setUsage(qm),C.frustumCulled=!1,C.castShadow=!0;h.instanceColor=new Ks(new Float32Array(e*3),3),d.instanceColor=new Ks(new Float32Array(e*3),3),f.instanceColor=new Ks(new Float32Array(e*3),3);const g=new rt;g.add(h,d,f);const _=new We,p=new je,m=new Xt,M=new qt,v=new F,y=new F(1,1,1);function A(C){const N=C?C.spread:i.radius*.7,k=C?C.x:i.x,B=C?C.z:i.z;for(let b=0;b<40;b++){const G=o()*Math.PI*2,I=Math.sqrt(o())*N,W=k+Math.cos(G)*I,H=B+Math.sin(G)*I;if(t(W,H))return{x:W,z:H}}for(let b=0;b<24;b++){const G=b/24*Math.PI*2,I=i.x+Math.cos(G)*i.radius*.12,W=i.z+Math.sin(G)*i.radius*.12;if(t(I,W))return{x:I,z:W}}return{x:i.x+i.radius*.2,z:i.z}}function E(C,N,k){for(let B=0;B<8;B++){const b=A(k),G=Math.max(2,Math.min(90,Math.ceil(Math.hypot(b.x-C,b.z-N)/5)));let I=!0;for(let W=1;W<=G&&I;W++){const H=W/G;I=t(C+(b.x-C)*H,N+(b.z-N)*H)}if(I)return b}return{x:C,z:N}}const T=s.length?s:[{x:i.x,z:i.z,spread:i.radius*.7,share:1}];let U=0;const q=T.map(C=>(U+=C.share,{...C,upTo:U})),x=[];for(let C=0;C<e;C++){const N=o()*U,k=q.find(G=>N<=G.upTo)??q[q.length-1],B=A(k),b=sp[Math.floor(o()*sp.length)];x.push({x:B.x,z:B.z,heading:o()*Math.PI*2,to:{x:B.x,z:B.z},phase:o()*Math.PI*2,wait:o()*2.2,home:k,shirt:b,skinTone:rp[Math.floor(o()*rp.length)],talking:!1}),_.setHex(b),h.instanceColor.setXYZ(C,_.r,_.g,_.b),_.multiplyScalar(.72),d.instanceColor.setXYZ(C,_.r,_.g,_.b),f.instanceColor.setXYZ(C,_.r,_.g,_.b)}function S(C,N,k){const B=Math.sin(N.phase)*(N.moving?.55:.04),b=N.moving?Math.abs(Math.sin(N.phase))*.035:0;M.set(0,N.heading,0),m.setFromEuler(M),v.set(N.x,k+b,N.z),p.compose(v,m,y),h.setMatrixAt(C,p);for(const[G,I]of[[d,1],[f,-1]])M.set(B*I,N.heading,0),m.setFromEuler(M),v.set(N.x+Math.cos(N.heading)*.11*I,k+.86+b,N.z-Math.sin(N.heading)*.11*I),p.compose(v,m,y),G.setMatrixAt(C,p)}return{group:g,folk:x,material:{skin:l,cloth:u},update(C,N){for(let k=0;k<x.length;k++){const B=x[k];if(B.talking||B.stays)B.moving=!1;else if(B.wait>0)B.wait-=C,B.moving=!1;else{const b=B.to.x-B.x,G=B.to.z-B.z,I=Math.hypot(b,G);if(I<1.2)B.to=E(B.x,B.z,B.home),B.wait=.8+Math.random()*3.5,B.moving=!1;else{B.moving=!0;const W=Math.min(I,x1*C);B.x+=b/I*W,B.z+=G/I*W;let Z=Math.atan2(b,G)-B.heading;for(;Z>Math.PI;)Z-=Math.PI*2;for(;Z<-Math.PI;)Z+=Math.PI*2;B.heading+=Z*Math.min(1,C*5),B.phase+=W*v1}}S(k,B,N(B.x,B.z)+r)}h.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0},nearest(C,N){let k=null,B=y1;for(const b of x){const G=Math.hypot(b.x-C,b.z-N);G<B&&(B=G,k=b)}return k},startTalking(C,N,k){C.talking=!0,C.heading=Math.atan2(N-C.x,k-C.z)},stopTalking(C){C&&(C.talking=!1)}}}const so=6,xi=17,op=64,ro=9,ap=2,_u=op*ap**(ro-1)*so/2,Oa=new We,ni=new We,Fa={height:0,slopeDeg:0,region:null},E1=3,ar=i=>i<0?0:i>1?1:i,Ba=(i,e,t)=>{const n=ar((t-i)/(e-i));return n*n*(3-2*n)},xu=xt(140),cp=xt(45),A1=8;function T1({seed:i=20260827}={}){const e=h1({seed:i}),t=new rt,n=new qe({vertexColors:!0,roughness:.96,metalness:0,flatShading:!1}),s=[];for(let C=0;C<ro;C++){const N=op*ap**C,k={tileSize:N,step:N/(xi-1),centre:{i:NaN,j:NaN},holeKey:null,tiles:[],spare:[],group:new rt};k.group.renderOrder=ro-C;for(let B=0;B<so*so+12;B++){const b=new zs(N,N,xi-1,xi-1);b.rotateX(-Math.PI/2),b.setAttribute("color",new Nt(new Float32Array(xi*xi*3),3));const G=new pe(b,n);G.name=`ground-r${C}`,G.receiveShadow=!0,G.frustumCulled=!0,G.matrixAutoUpdate=!1,k.tiles.push({mesh:G,i:NaN,j:NaN}),k.group.add(G)}s.push(k),t.add(k.group)}for(let C=1;C<ro;C++)s[C].group.position.y=-.05*s[C].step;const r=qf.map(C=>{const N=e.towns.find(b=>b.name===C.name),k=_1(C,N.x,N.z,N.level);k.group.visible=!1,t.add(k.group);const B=t1[C.name]??[];if(B.length){const b=C.kind==="capital"?Math.round(C.r/6):B.length,G=C.kind==="capital"?[{x:k.x,z:k.z,spread:240,share:.4},...k.pads.map(I=>({x:I.x,z:I.z,spread:120,share:.06})),{x:k.x,z:k.z,spread:C.r*.62,share:.36}]:[];k.people=w1({town:k,anchors:G,lift:C.kind==="capital"?.4:0,count:Math.max(B.length,b),seed:7+C.name.length*31,isStreet:(I,W)=>!k.footprints.some(H=>Math.abs(I-H.x)<H.halfX+1.4&&Math.abs(W-H.z)<H.halfZ+1.4)});for(const[I,W]of(k.shops??[]).entries()){const H=k.people.folk[I];if(!H)break;H.x=W.x,H.z=W.z,H.to={x:W.x,z:W.z},H.heading=Math.atan2(k.x-W.x,k.z-W.z),H.stays=!0,H.shop=W.kind}for(const[I,W]of k.people.folk.entries()){if(W.shop)W.name=W.shop,W.lines=[];else if(I<B.length)W.name=B[I].name,W.lines=B[I].lines;else{const H=I-B.length;W.name=Yf[H%Yf.length],W.lines=[Kf[(H*7+I)%Kf.length]]}W.said=0,W.town=C.name}k.people.group.visible=!1,t.add(k.people.group)}return k}),o=4200,a=new pe(new zs(_u*2.4,_u*2.4,1,1),new qe({color:tn[Ke.SEA],roughness:.22,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.y=ss,a.renderOrder=ro+1,t.add(a);function c(C,N,k,B){const{height:b,slopeDeg:G,region:I}=k,W=1-I.moisture,{sandy:H,plateau:Z}=e.styleAt(I);B.setHex(tn[Ke.FOREST]),B.lerp(ni.setHex(tn[Ke.PLAIN]),Ba(.28,.44,W)),B.lerp(ni.setHex(tn[Ke.SAVANNA]),Ba(.42,.58,W)),B.lerp(ni.setHex(tn[Ke.STONE_DESERT]),Ba(.55,.68,W)),B.lerp(ni.setHex(tn[Ke.MESA]),Z*.85),B.lerp(ni.setHex(tn[Ke.DUNES]),H);const z=ar((G-24)/22);z>0&&B.lerp(ni.setHex(7169884),z*.85);const Y=e.snowlineAt(C,N),L=ar((b-Y*.86)/(Y*.3));if(L>0&&B.lerp(ni.setHex(tn[Ke.SNOW]),L*ar(1-G/52)),W>.5&&b<xu&&G<4&&B.lerp(ni.setHex(tn[Ke.SALT]),Ba(xu,xu*.4,b)*.9),b<cp&&b>ss){const K=1-ar(b/cp);B.lerp(ni.setHex(tn[Ke.BEACH]),K*K*.8)}return b<=ss&&B.lerp(ni.setHex(860464),ar(-b/xt(500))),B}const l=2,u=xi+l*2,h=new Float64Array(u*u);function d(C,N,k,B){const b=k*C.tileSize,G=B*C.tileSize,I=N.mesh.geometry.attributes.position,W=N.mesh.geometry.attributes.color,H=N.mesh.geometry.attributes.normal,Z=I.array,z=W.array,Y=H.array,L=C.step,K=b-C.tileSize/2,ie=G-C.tileSize/2;for(let te=0;te<u;te++){const ce=ie+(te-l)*L;for(let he=0;he<u;he++)h[te*u+he]=e.heightAt(K+(he-l)*L,ce)}const ee=Math.max(1,Math.min(l,Math.round(A1/L))),se=2*ee*L;for(let te=0;te<xi;te++)for(let ce=0;ce<xi;ce++){const J=(te*xi+ce)*3,R=ce+l,re=te+l,oe=K+ce*L,de=ie+te*L,be=h[re*u+R];Z[J]=oe-b,Z[J+1]=be,Z[J+2]=de-G;const Ue=(h[re*u+R+ee]-h[re*u+R-ee])/se,we=(h[(re+ee)*u+R]-h[(re-ee)*u+R])/se,D=Math.hypot(Ue,1,we);Y[J]=-Ue/D,Y[J+1]=1/D,Y[J+2]=-we/D,Fa.height=be,Fa.slopeDeg=Math.atan(Math.hypot(Ue,we))*180/Math.PI,Fa.region=e.regionAt(oe,de),c(oe,de,Fa,Oa),z[J]=Oa.r,z[J+1]=Oa.g,z[J+2]=Oa.b}I.needsUpdate=!0,W.needsUpdate=!0,H.needsUpdate=!0,N.mesh.geometry.computeBoundingSphere(),N.mesh.position.set(b,0,G),N.mesh.visible=!0,N.mesh.updateMatrix(),N.i=k,N.j=B}function f(C,N){return Math.round((C/N-1)/2)*2+1}let g=0,_=0;const p=[];function m(C,N){let k=null;for(const B of s){const b=f(C,B.tileSize),G=f(N,B.tileSize),I=k;k={x:b*B.tileSize,z:G*B.tileSize,half:so*B.tileSize/2};const W=I?`${I.x},${I.z}`:"";if(b===B.centre.i&&G===B.centre.j&&W===B.holeKey)continue;B.centre.i=b,B.centre.j=G,B.holeKey=W;const H=(so-1)/2,Z=new Set;for(let L=-H;L<=H;L++)for(let K=-H;K<=H;K++){if(I){const ie=(b+K)*B.tileSize,ee=(G+L)*B.tileSize,se=B.tileSize/2;if(Math.abs(ie-I.x)+se<=I.half&&Math.abs(ee-I.z)+se<=I.half)continue}Z.add(`${b+K},${G+L}`)}const z=new Set,Y=[];for(const L of B.tiles){const K=`${L.i},${L.j}`;Z.has(K)&&!z.has(K)?z.add(K):Y.push(L)}for(const L of Y)L.mesh.visible=!1,L.i=NaN,L.j=NaN;B.spare=Y;for(let L=p.length-1;L>=0;L--)p[L].ring===B&&p.splice(L,1);for(const L of Z){if(z.has(L))continue;const[K,ie]=L.split(",").map(Number);p.push({ring:B,i:K,j:ie,d2:(K*B.tileSize-C)**2+(ie*B.tileSize-N)**2})}}p.sort((B,b)=>B.d2-b.d2),a.position.x=C,a.position.z=N;for(const B of r)B.group.visible=Math.hypot(B.x-C,B.z-N)<o+B.radius,B.people&&(B.people.group.visible=Math.hypot(B.x-C,B.z-N)<B.radius+700);M(E1)}function M(C){const N=performance.now();for(;p.length&&performance.now()-N<C;){const k=p.shift(),B=k.ring.spare.pop();B&&(d(k.ring,B,k.i,k.j),g++)}_=performance.now()-N}function v(C,N){return e.heightAt(C,N)}function y(C,N,k=3){const B=e.sampleAt(C,N,Math.max(2,k));return B.height<=ss+1.5||B.slopeDeg>=12?!1:!A(C,N,k)}function A(C,N,k=0){for(const B of r)if(!(Math.hypot(B.x-C,B.z-N)>B.radius*1.4)){for(const b of B.footprints)if(Math.abs(C-b.x)<b.halfX+k&&Math.abs(N-b.z)<b.halfZ+k)return b}return null}const E=38,T=[0,0];function U(C,N,k,B=[]){B[0]=C,B[1]=N;const b=A(C,N,k??.4);if(b){const Y=k??.4,L=C-b.x,K=N-b.z,ie=b.halfX+Y-Math.abs(L),ee=b.halfZ+Y-Math.abs(K);return ie<ee?B[0]=b.x+Math.sign(L||1)*(b.halfX+Y):B[1]=b.z+Math.sign(K||1)*(b.halfZ+Y),B}if(e.sampleAt(C,N,2).slopeDeg<=E)return B;const I=4,W=e.heightAt(C+I,N)-e.heightAt(C-I,N),H=e.heightAt(C,N+I)-e.heightAt(C,N-I),Z=Math.hypot(W,H);if(Z<1e-5)return B;T[0]=W/Z,T[1]=H/Z;const z=Math.max(.35,k??.5);return B[0]=C-T[0]*z,B[1]=N-T[1]*z,B}function q(){for(let N=1;N<9e3;N++){const k=14e3+90*Math.sqrt(N),B=Math.cos(N*.7)*k,b=Math.sin(N*.7)*k,G=e.sampleAt(B,b,6);if(!(G.height<20||G.height>320||G.slopeDeg>5)&&!(G.biome===Ke.SEA||G.biome===Ke.SALT||G.biome===Ke.SNOW))return{x:B,z:b,height:G.height,biome:G.biome}}return{x:14e3,z:0,height:e.heightAt(14e3,0),biome:e.biomeAt(14e3,0)}}function x(){const C=r.find(N=>N.kind==="capital"&&N.pads.length);if(C){const N=C.pads[0];return{x:N.x,z:N.z,height:C.level,biome:"the shipport"}}return q()}const S=x();return{group:t,terrain:e,setFocus:m,flush(){M(1/0)},update(C){for(const N of r)!N.people||!N.people.group.visible||N.people.update(C,v)},nearestPerson(C,N){for(const k of r){if(!k.people||!k.people.group.visible||Math.hypot(k.x-C,k.z-N)>k.radius*1.6)continue;const B=k.people.nearest(C,N);if(B)return{person:B,people:k.people}}return null},groundHeightAt:v,resolveWalk:U,isClear:y,findLandingSite:q,spawn:new F(S.x,S.height,S.z),heading:-Math.PI/2,info:{name:"an unnamed world",biomeAt:(C,N)=>e.biomeAt(C,N),get tilesBuilt(){return g},settlements:r,get build(){return{ms:+_.toFixed(2),queued:p.length}},reach:_u}}}const $e=new F(0,-2e4,0),R1=22,C1=2800,lp=1,P1=4,I1=1,up=10340847,L1=1600,N1=34e3,hp=24e3;function D1(i,e,t,n=()=>{}){const s=T1();s.group.position.copy($e),s.group.visible=!1,i.add(s.group);const r=new F().copy(s.spawn);let o=!1;const a=t.far,c=1.6,l=.9,u=new gi(16774112,0);u.position.set(-260,420,180).add($e),u.target.position.copy($e),i.add(u.target),i.add(u);const h=new Ea(12377343,6978386,0);h.position.copy($e),i.add(h);const d=document.createElement("div");d.id="landing-banner",d.hidden=!0,d.innerHTML=`
    <div class="landing-banner__town"></div>
    <div class="landing-banner__street"></div>
    <div class="landing-banner__hint"></div>
  `,document.body.appendChild(d),d.querySelector(".landing-banner__town").textContent=Ae.surface.town,d.querySelector(".landing-banner__street").textContent=Ae.surface.street,d.querySelector(".landing-banner__hint").textContent=Ae.surface.leaveHint;const f=new qt;let g=!1,_=!1,p=0;const m=new F,M=i.background,v=i.fog.color.clone();function y(x){return x.mesh.position.distanceTo(Zr)<Qr+R1}function A(x){return x.mesh.position.y-$e.y}const E=[[0,0],[1.4,0],[-1.25,0],[0,.9],[0,-.9]];function T(x){const S=f.setFromQuaternion(x.mesh.quaternion,"YXZ"),C=Math.sin(S.y),N=Math.cos(S.y),k=x.mesh.scale.x;let B=-1/0;for(const[b,G]of E){const I=x.mesh.position.x+(C*b+N*G)*k,W=x.mesh.position.z+(N*b-C*G)*k,H=s.groundHeightAt(I-$e.x,W-$e.z);H>B&&(B=H)}return B}function U(x){if(g)return;g=!0,m.copy(x.mesh.position).sub(Zr).setLength(Qr+60).add(Zr),s.group.visible=!0,u.intensity=c,h.intensity=l,x.mesh.scale.setScalar(P1);for(const C of e)C.visible=!1;i.background=new We(up),i.fog.color.setHex(up),i.fog.near=L1,i.fog.far=N1;const S=o?r:s.spawn;o=!0,s.setFocus(S.x,S.z),s.flush(),x.mesh.position.set(S.x,s.groundHeightAt(S.x,S.z)+90,S.z).add($e),x.mesh.quaternion.setFromEuler(new qt(0,s.heading,0,"YXZ")),x.velocity.set(0,0,0),t.far=hp,t.updateProjectionMatrix(),n(),d.querySelector(".landing-banner__street").textContent=Ae.surface.ground[s.info.biomeAt(S.x,S.z)]??Ae.surface.street,d.hidden=!1,d.classList.remove("landing-banner--fading"),p=6}function q(x){if(!g)return;g=!1,_=!1,x.mesh.scale.setScalar(1),r.set(x.mesh.position.x-$e.x,0,x.mesh.position.z-$e.z),t.far=a,t.updateProjectionMatrix(),s.group.visible=!1,u.intensity=0,h.intensity=0;for(const C of e)C.visible=!0;i.background=M,i.fog.color.copy(v),i.fog.near=mf,i.fog.far=gf,x.mesh.position.copy(m);const S=m.clone().sub(Zr).normalize();x.mesh.quaternion.setFromUnitVectors(new F(0,0,1),S),x.velocity.set(0,0,0),n(),d.hidden=!0}return{get active(){return g},get parked(){return _},world:s,enter:U,exit:q,altitude:A,hullGroundY(x){return $e.y+T(x)},park(){_=!0},unpark(){_=!1},prewarm(x,S){s.setFocus(s.spawn.x,s.spawn.z),s.flush(),s.group.visible=!0,u.intensity=c,h.intensity=l,x.compile(i,S);const C=new kt(60,S.aspect,.1,hp);C.position.copy($e).add(s.spawn).add(new F(0,160,320)),C.lookAt(new F().copy($e).add(s.spawn)),x.render(i,C),s.group.visible=!1,u.intensity=0,h.intensity=0,x.render(i,S)},update(x,S){if(!g){y(x)&&U(x);return}if(s.update(S),s.setFocus(x.mesh.position.x-$e.x,x.mesh.position.z-$e.z),_){p>0&&(p-=S,p<=0&&d.classList.add("landing-banner--fading"));return}const C=A(x),N=T(x);C<N+lp&&(x.mesh.position.y=$e.y+N+lp,x.velocity.y<0&&(x.velocity.y=0)),C>C1&&q(x),p>0&&(p-=S,p<=0&&d.classList.add("landing-banner--fading"))},reset(x){q(x)}}}const U1=38,O1=19,F1=45,dp=1.5,fp=.25,B1=.5,ka=1;function k1(i){let e=ka,t=0;const n=[];return{get scale(){return e},sample(s){const r=s*1e3;if(r>250||(n.push(r),n.length<F1))return;const o=[...n].sort((l,u)=>l-u),a=o[Math.floor(o.length/2)];if(n.length=0,t>0)return;let c=e;a>U1?c=Math.max(B1,e-fp):a<O1&&(c=Math.min(ka,e+fp)),c!==e&&(e=c,t=dp,i(e))},update(s){t>0&&(t-=s)},reset(){e!==ka&&(e=ka,n.length=0,t=dp,i(e))}}}class vu extends Ir{constructor(){super();const e=new gt;e.deleteAttribute("uv");const t=new qe({side:Jt}),n=new qe,s=new Jl(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new pe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new pe(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new pe(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new pe(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new pe(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new pe(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new pe(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new pe(e,cr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new pe(e,cr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new pe(e,cr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new pe(e,cr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const p=new pe(e,cr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new pe(e,cr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function cr(i){const e=new rn;return e.color.setScalar(i),e}const vi=.181,Vn=.032;function z1({metal:i,polymer:e,glow:t}){const n=new rt,s=[],r=[],o=[],a=(d,f,g,_,p,m)=>{const M=new gt(d,f,g);return M.translate(_,p,m),M};s.push(a(Vn,.027,vi*.92,0,.021,.012));{const d=new mt(Vn*.5,Vn*.5,vi*.92,10,1,!1,0,Math.PI);d.rotateZ(Math.PI/2),d.rotateY(Math.PI/2),d.translate(0,.034,.012),s.push(d)}for(let d=0;d<5;d++)s.push(a(Vn+.002,.02,.004,0,.022,-.052-d*.008));r.push(a(.003,.016,.042,Vn*.5,.026,.03));{const d=new mt(.0085,.0085,.02,10);d.rotateX(Math.PI/2),d.translate(0,.022,vi*.47),s.push(d)}s.push(a(.005,.008,.005,0,.05,vi*.42)),s.push(a(.008,.008,.006,-.009,.05,-.07)),s.push(a(.008,.008,.006,.009,.05,-.07)),o.push(a(.0035,.0035,.0035,0,.052,vi*.42+.002)),r.push(a(Vn-.004,.016,vi*.55,0,0,.038)),r.push(a(.014,.005,.05,0,-.009,.05)),r.push(a(.012,.03,.006,0,-.02,.028)),r.push(a(.012,.006,.045,0,-.033,.006)),r.push(a(.012,.022,.006,0,-.024,-.014)),r.push(a(.007,.018,.005,0,-.017,.004));{const d=new gt(Vn-.005,.095,.032);d.translate(0,-.055,-.03),d.rotateX(-.34),d.translate(0,0,-.006),r.push(d);const f=new gt(Vn-.002,.008,.036);f.translate(0,-.104,-.062),f.rotateX(-.1),r.push(f);const g=new gt(.006,.05,.005);g.translate(Vn*.48-.004,-.055,-.03),g.rotateX(-.34),o.push(g)}o.push(a(.0035,.004,.075,Vn*.5,.016,.01)),o.push(a(.0035,.004,.075,-Vn*.5,.016,.01)),n.add(new pe(Mn(s),i)),n.add(new pe(Mn(r),e)),n.add(new pe(Mn(o),t));const c=new rn({color:16773296,transparent:!0,opacity:.75,depthWrite:!1}),l=new pe(new hn(.022,.062,6),c);l.rotation.x=Math.PI/2,l.position.set(0,.022,vi*.52),l.visible=!1,n.add(l);let u=0;const h=new F(0,.022,vi*.5);return{group:n,getMuzzle(d){return n.updateWorldMatrix(!0,!1),d.copy(h).applyMatrix4(n.matrixWorld)},getAim(d){n.updateWorldMatrix(!0,!1);const f=n.matrixWorld.elements;return d.set(f[8],f[9],f[10]).normalize()},fire(){u=.055,l.visible=!0,l.rotation.z=Math.random()*Math.PI,l.scale.setScalar(.85+Math.random()*.4)},update(d){u<=0||(u-=d,u<=0?l.visible=!1:c.opacity=Math.min(1,u/.03))},length:vi}}const Wn=1.8,H1=4146511,G1=5857646,V1=2303790,oo=5504925,pp=8257456,W1=4835583,X1=14198404,q1=3810328;function Y1(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,256,256),t.lineCap="square",t.strokeStyle="#5effa6";for(let s=0;s<14;s++){let r=Math.random()*256,o=Math.random()*256;t.lineWidth=Math.random()<.3?2:1,t.beginPath(),t.moveTo(r,o);const a=2+Math.floor(Math.random()*4);for(let c=0;c<a;c++)c%2===0?o+=(Math.random()-.35)*90:r+=(Math.random()-.5)*70,t.lineTo(r,o);t.stroke(),t.fillStyle="#9dffcb",t.fillRect(r-2,o-2,4,4),t.fillStyle="#5effa6"}const n=new ns(e);return n.wrapS=wi,n.wrapT=wi,n.colorSpace=Ct,n}function K1(i,e,t){const n=new Gr,s=-i/2,r=-e/2,o=Math.max(.001,Math.min(t,i/2-.001,e/2-.001));return n.moveTo(s+o,r),n.lineTo(s+i-o,r),n.absarc(s+i-o,r+o,o,-Math.PI/2,0),n.lineTo(s+i,r+e-o),n.absarc(s+i-o,r+e-o,o,0,Math.PI/2),n.lineTo(s+o,r+e),n.absarc(s+o,r+e-o,o,Math.PI/2,Math.PI),n.lineTo(s,r+o),n.absarc(s+o,r+o,o,Math.PI,Math.PI*1.5),n}function Xn(i,e,t,n,s=0,r=0,o=0,a=.02){const c=Math.min(.012,t*.35),l=new Js(K1(i,e,a),{depth:Math.max(.001,t-c*2),bevelEnabled:!0,bevelThickness:c,bevelSize:c,bevelSegments:2,curveSegments:4});l.center();const u=new pe(l,n);return u.position.set(s,r,o),u}function ao(i,e,t,n,s=16){const r=new rt;r.add(new pe(new mt(i,e,t,s),n));const o=new pe(new Qe(i,s,8),n);o.position.y=t/2,o.scale.y=.7,r.add(o);const a=new pe(new Qe(e,s,8),n);return a.position.y=-t/2,a.scale.y=.7,r.add(a),r}function za(i,e,t=0){const n=new pe(new Qe(i,16,12),e);return n.position.y=t,n}function $1(){const i=[[.001,0],[.15,0],[.168,.04],[.163,.12],[.178,.2],[.2,.3],[.212,.38],[.208,.46],[.17,.52],[.09,.55],[.001,.555]].map(([t,n])=>new Se(t,n)),e=new va(i,28);return e.scale(1.06,1,.84),e}function yu({suitLight:i=!0,environment:e=null}={}){const t=new rt,n=new rt;t.add(n);const s=Y1(),r=new qe({color:H1,metalness:.62,roughness:.38,emissive:oo,emissiveMap:s,emissiveIntensity:.34}),o=new qe({color:G1,metalness:.7,roughness:.3,emissive:oo,emissiveMap:s,emissiveIntensity:.22}),a=new qe({color:V1,metalness:.25,roughness:.72,emissive:oo,emissiveMap:s,emissiveIntensity:.3}),c=new qe({color:X1,metalness:0,roughness:.72}),l=new qe({color:q1,metalness:0,roughness:.9}),u=new qe({color:pp,emissive:pp,emissiveIntensity:1.6,transparent:!0,opacity:.58,metalness:.4,roughness:.08}),h=new rn({color:W1}),d=new qe({color:863004,emissive:oo,emissiveIntensity:1.15,metalness:.2,roughness:.35});if(e)for(const O of[r,o,a,c,l,u,d])O.envMap=e,O.envMapIntensity=.55;const f=new pe($1(),a);f.position.y=.97,n.add(f);const g=new pe(new Qe(.19,28,18,Math.PI*.22,Math.PI*.56,Math.PI*.16,Math.PI*.5),r);g.scale.set(1.12,1.16,.92),g.position.set(0,1.33,.006),n.add(g);const _=Xn(.028,.19,.03,o,0,1.35,.155,.012);n.add(_);const p=new pe(new Hn(.125,.026,10,24,Math.PI*1.15),r);p.rotation.set(Math.PI/2,0,Math.PI*.92),p.position.set(0,1.465,.01),p.scale.z=.8,n.add(p);const m=Xn(.25,.3,.05,r,0,1.3,-.11,.07);m.rotation.x=-.06,n.add(m);const M=new pe(new Hn(.153,.034,12,32),o);M.rotation.x=Math.PI/2,M.position.y=.99,M.scale.set(1.06,.86,1),n.add(M);const v=new pe(new Qe(.042,16,12),h);v.scale.set(1.5,1,.45),v.position.set(0,.99,.132),n.add(v);const y=new pe(new Qe(.152,20,14),r);y.scale.set(1.04,.58,.82),y.position.y=.905,n.add(y);const A=ao(.052,.058,.08,a,12);A.position.y=1.55,n.add(A);const E=new pe(new Qe(.105,24,20),c);E.scale.set(.95,1.14,1),E.position.y=1.66,n.add(E);const T=new pe(new Qe(.07,20,16),c);T.scale.set(.94,.82,1.04),T.position.set(0,1.6,.014),n.add(T);const U=new pe(new hn(.018,.042,8),c);U.rotation.x=Math.PI*.52,U.position.set(0,1.646,.095),n.add(U);for(const O of[-1,1]){const V=new pe(new Qe(.022,10,8),c);V.scale.set(.5,1,.8),V.position.set(O*.096,1.655,.005),n.add(V)}const q=[],x=new je,S=new Xt,C=new F,N=new F,k=new F,B=new F(0,1,0),b=new F(0,0,1);function G(O,V,$,X){O.applyMatrix4(x.compose(V,$,X)),q.push(O)}const I=[[0,1.732,-.012,.088],[-.06,1.722,.028,.064],[.06,1.726,.024,.066],[0,1.71,-.07,.074],[-.082,1.7,-.024,.06],[.084,1.703,-.02,.058],[.026,1.757,-.005,.048],[-.032,1.752,-.036,.046],[-.056,1.692,.056,.044],[.058,1.694,.053,.042]];for(const[O,[V,$,X,ue]]of I.entries())G(new Qe(ue,10,8),C.set(V,$,X),S.setFromEuler(new qt(O%3*.18,O*.7,(O%5-2)*.12)),N.set(1.12,.72,1.1));const W=[[-.05,1.736,.055,.048,1.5,.35,-.6,.72],[-.008,1.744,.062,.05,1.55,.3,-.45,.84],[.038,1.74,.056,.046,1.45,.55,-.5,.67],[.074,1.728,.03,.04,1.35,.85,-.35,.4],[-.03,1.764,.03,.048,1.5,-.25,.25,.94],[.028,1.768,.012,.05,1.6,.42,.62,.66],[-.02,1.766,-.03,.048,1.5,-.3,.6,-.74],[.042,1.756,-.036,.044,1.45,.5,.15,-.85],[-.084,1.72,.014,.044,1.5,-.5,-.1,.86],[-.086,1.712,-.038,.042,1.45,-.45,-.05,-.89],[.086,1.722,.01,.046,1.5,.5,-.05,.86],[.088,1.714,-.036,.042,1.45,.45,-.1,-.89],[-.032,1.72,-.078,.046,1.55,-.2,.05,-.98],[.03,1.724,-.08,.048,1.6,.2,.15,-.97],[0,1.7,-.082,.042,1.4,0,-.35,-.94]];for(const[O,[V,$,X,ue,xe,ve,Ee,Ce]]of W.entries()){k.set(ve,Ee,Ce).normalize(),G(new Qe(ue,10,8),C.set(V,$,X),S.setFromUnitVectors(b,k),N.set(.62,.44,xe));const Re=ue*xe*.66,Te=O%3===0?.052:O%3===1?.04:.032,Xe=new hn(ue*.62,Te,3);Xe.translate(0,Te*.42,0),G(Xe,C.set(V,$,X).addScaledVector(k,Re),S.setFromUnitVectors(B,k),N.set(.85,1,.5))}const H=[[-.07,1.75,0,.042,-.5,.75,.44],[.012,1.782,-.01,.046,.15,.95,-.28],[.066,1.756,.02,.038,.7,.66,.28],[-.05,1.73,.072,.034,-.1,.3,.95],[.05,1.736,-.07,.04,.35,.45,-.82],[-.088,1.73,-.01,.036,-.85,.42,.3],[.03,1.706,-.094,.032,.2,-.1,-.97],[-.026,1.776,.03,.04,-.2,.85,.49]];for(const[O,V,$,X,ue,xe,ve]of H){k.set(ue,xe,ve).normalize();const Ee=new hn(.014,X,3);Ee.translate(0,X*.4,0),G(Ee,C.set(O,V,$),S.setFromUnitVectors(B,k),N.set(.9,1,.55))}const Z=1.706,z=Mn(q);z.translate(0,-Z,0);const Y=new pe(z,l);Y.position.y=Z,n.add(Y);const L=new pe(new mt(.109,.109,.04,28,1,!0,-Math.PI*.28,Math.PI*.56),u);L.position.set(0,1.668,.004),L.scale.set(1,1,.94),n.add(L);const K=new pe(new mt(.104,.104,.052,28,1,!0,-Math.PI*.29,Math.PI*.58),o);K.position.set(0,1.668,.004),K.scale.set(1,1,.94),n.add(K);for(const O of[-1,1]){const V=new pe(new mt(.005,.005,.085,8),o);V.rotation.set(Math.PI/2,0,0),V.position.set(O*.098,1.668,-.028),n.add(V)}for(const O of[-1,1]){const V=new pe(new Qe(.036,16,12),o);V.scale.set(.55,1,.9),V.position.set(O*.107,1.658,0),n.add(V)}const ie=new pe(new mt(.005,.005,.11,8),o);ie.position.set(-.078,1.618,.062),ie.rotation.set(-.5,0,.7),n.add(ie);const ee=new pe(new Qe(.012,10,8),h);ee.position.set(-.048,1.588,.097),n.add(ee);const se=1.25,te=[],ce=[];for(const O of[-1,1]){const V=new rt;V.position.set(O*.215,1.44,0),n.add(V),V.add(za(.072,a));const $=new pe(new Qe(.108,20,14,0,Math.PI*2,0,Math.PI*.58),r);$.scale.set(1.04,1.05,1.08),$.position.y=.012,$.rotation.z=O*.22,V.add($);const X=new pe(new Qe(.088,18,10,0,Math.PI*2,Math.PI*.34,Math.PI*.2),o);X.position.y=-.032,X.rotation.z=O*.22,V.add(X);const ue=ao(.058,.05,.24,a);ue.position.y=-.17,V.add(ue);const xe=new pe(new Hn(.055,.015,10,20),o);xe.rotation.x=Math.PI/2,xe.position.y=-.12,V.add(xe),V.add(za(.052,r,-.3));const ve=new rt;ve.position.y=-.3,V.add(ve),ce.push({shoulder:V,forearm:ve,side:O});const Ee=ao(.052,.045,.22,a);Ee.position.y=-.12,ve.add(Ee);const Ce=new pe(new mt(.062,.05,.17,16),r);Ce.position.y=-.14,Ce.scale.z=.92,ve.add(Ce);const Re=Xn(.1,.055,.09,o,0,-.052,.006,.026);ve.add(Re);const Te=new rt;Te.position.set(0,-.28,.004),Te.rotation.y=-O*1.15,Te.scale.setScalar(se),ve.add(Te);const Xe=Xn(.056,.078,.032,a,0,.004,0,.018);Xe.rotation.x=.06,Te.add(Xe);const Ye=new pe(new vn(.011,.045,3,8),a);Ye.rotation.z=Math.PI/2,Ye.position.set(0,-.032,.003),Te.add(Ye);const st=[{len:.044,r:.0078,open:.3,grip:1.15,splay:.05},{len:.047,r:.008,open:.36,grip:1.75,splay:.02},{len:.043,r:.0075,open:.44,grip:1.85,splay:-.02},{len:.035,r:.0068,open:.52,grip:1.9,splay:-.06}],vt=[];for(const[Rt,ct]of st.entries()){const mn=new pe(new vn(ct.r,ct.len*.55,3,8),a),Mi=new pe(new vn(ct.r*.86,ct.len*.42,3,8),a);vt.push({near:mn,far:Mi,spec:ct,index:Rt,side:O}),Te.add(mn),Te.add(Mi)}const Ze=new pe(new vn(.0092,.032,3,8),a);Te.add(Ze),te.push({group:Te,fingers:vt,thumb:Ze,side:O});const ke=Xn(.034,.052,.008,d,O*.055,-.145,.004,.008);ke.rotation.y=O*Math.PI/2,ve.add(ke),V.rotation.z=O*.11,V.rotation.x=.04}let he=null,J=null,R=!1,re=!0;const oe=[];for(const O of[-1,1]){const V=new rt;V.position.set(O*.098,.8,0),n.add(V),V.add(za(.082,a));const $=ao(.085,.07,.34,a);$.position.y=-.2,V.add($);const X=Xn(.125,.25,.05,r,0,-.19,.045,.05);if(X.rotation.x=-.05,V.add(X),O>0){const vt=Xn(.052,.115,.062,r,O*.086,-.235,.004,.016);vt.rotation.set(.12,O*.3,0),V.add(vt);const Ze=Xn(.06,.022,.07,o,O*.086,-.19,.004,.008);Ze.rotation.set(0,O*.3,0),V.add(Ze);const ke=z1({metal:r,polymer:a,glow:d});he=ke,J=V,Ue(),V.add(ke.group)}else for(const[vt,Ze]of[-.185,-.245].entries()){const ke=Xn(.042,.052,.05,o,O*.086,Ze,.004,.01);ke.rotation.y=O*.32,V.add(ke);const Rt=Xn(.046,.01,.054,r,O*.086,Ze+.03,.004,.005);Rt.rotation.y=O*.32,V.add(Rt)}V.add(za(.068,a,-.4));const ue=new pe(new Qe(.075,18,12,0,Math.PI*2,0,Math.PI*.55),r);ue.rotation.x=Math.PI*.42,ue.position.set(0,-.405,.028),V.add(ue);const xe=new rt;xe.position.y=-.4,V.add(xe);const ve=new rt;ve.position.y=-.3,xe.add(ve),oe.push({hip:V,shin:xe,ankle:ve,side:O});const Ee=ao(.068,.055,.32,a);Ee.position.y=-.18,xe.add(Ee);const Ce=new pe(new mt(.072,.06,.27,16,1,!0,-1.1,2.2),r);Ce.position.set(0,-.175,.008),Ce.scale.z=1.1,xe.add(Ce);const Re=new pe(new Qe(.075,18,14),r);Re.scale.set(.95,.72,1.5),Re.position.set(0,-.035,.03),ve.add(Re);const Te=Xn(.105,.07,.11,r,0,-.012,.072,.03);Te.rotation.x=.22,ve.add(Te);const Xe=new pe(new Qe(.055,16,12),o);Xe.scale.set(1,.62,1.15),Xe.position.set(0,-.062,.132),ve.add(Xe);const Ye=new pe(new Qe(.05,14,10),o);Ye.scale.set(1,.7,.9),Ye.position.set(0,-.057,-.045),ve.add(Ye);const st=new pe(new Hn(.042,.011,8,18),h);st.rotation.x=Math.PI/2,st.position.set(0,-.086,.025),ve.add(st)}let de=null;i&&(de=new Jl(oo,.45,2.2,2),de.position.set(0,1.2,.12),n.add(de));function be(O,V){for(const{near:ue,far:xe,spec:ve,index:Ee,side:Ce}of O.fingers){const Re=(Ee-1.5)*.0165*Ce,Te=-.037,Xe=.003,Ye=ve.open+(ve.grip-ve.open)*V,st=Ye+(.35+1.15*V),vt=ve.len*.55,Ze=ve.len*.42;ue.position.set(Re,Te-Math.cos(Ye)*vt*.5,Xe+Math.sin(Ye)*vt*.5),ue.rotation.set(Ye,0,ve.splay*Ce*(1-V*.6));const ke=Te-Math.cos(Ye)*vt,Rt=Xe+Math.sin(Ye)*vt;xe.position.set(Re,ke-Math.cos(st)*Ze*.5,Rt+Math.sin(st)*Ze*.5),xe.rotation.set(st,0,ve.splay*Ce*(1-V*.6))}const $=O.thumb,X=O.side;$.position.set(X*(.028-.006*V),-.016-.012*V,.014+.022*V),$.rotation.set(.5+V*.85,0,-X*(.7-V*.45))}function Ue(){he.group.position.set(.078,-.175,.014),he.group.rotation.set(Math.PI/2+.3,.34,.06)}function we(O,V=!0){if(re=V,O===R||!he)return;R=O;const $=te.find(X=>X.side>0);O?($.group.quaternion.setFromRotationMatrix(ne.makeBasis(D,w,Q)),$.group.add(he.group),he.group.scale.setScalar(1/se),he.group.position.set(-.03,-.024,.019),he.group.rotation.set(0,0,Math.PI/2),be($,1)):(J.add(he.group),he.group.scale.setScalar(1),Ue(),be($,0))}const D=new F(0,0,-1),w=new F(1,0,0),Q=new F(0,-1,0),ne=new je;function fe(){he&&he.fire()}const le=1.02,Pe=1.53,ye=new rt;ye.position.y=le;const me=new rt;me.position.y=Pe-le;const Ge=new Set([y,M,v,...oe.map(O=>O.hip)]);de&&Ge.add(de);for(const O of[...n.children])Ge.has(O)||(O.position.y-=le,ye.add(O));for(const O of[...ye.children])O.position.y+le>=Pe&&(O.position.y-=Pe-le,me.add(O));ye.add(me),n.add(ye);const ge=f.position.y,Ie=me.position.y;let Le=0,Ve="idle",Be=0,Je=0,He=0,ht=0;const j=.04,Oe=.05,ae=.04;function _e(){const O=Math.sin(Le*1.6);f.position.y=ge+O*.005,f.scale.x=1+O*.006,n.position.set(0,0,0),n.rotation.z=0,ye.rotation.set(-O*.006,0,0),me.rotation.set(O*.006,0,0),me.position.y=Ie;for(const V of oe)V.hip.rotation.x=0,V.hip.rotation.y=V.side*.07,V.hip.position.z=0,V.shin.rotation.x=0,V.ankle.rotation.x=0;for(const[V,$]of ce.entries())$.shoulder.rotation.x=j+Math.sin(Le*1.6+V)*.012,$.shoulder.rotation.z=$.side*.11,$.forearm.rotation.x=0}const De=[[0,28],[12,22],[30,6],[50,-12],[62,-8],[75,16],[88,28],[100,28]],Fe=[[0,4],[12,16],[30,6],[45,14],[60,40],[73,60],[87,26],[100,4]],at=[[0,0],[8,-8],[30,5],[45,10],[58,-20],[68,-4],[80,2],[100,0]],Mt=[[0,42],[10,28],[28,2],[42,-20],[52,-12],[68,24],[85,48],[100,42]],$t=[[0,22],[12,40],[28,26],[42,34],[55,74],[70,112],[86,52],[100,22]],ut=[[0,-6],[8,-14],[26,6],[40,14],[50,-26],[64,-10],[82,-4],[100,-6]],zt=2.8,wn=5.4,ds=1.5,mr=2.7;function Me(O){return O<0?0:O>1?1:O}function ze(O,V,$){const X=et(O,$);return He<=.001?X:X+(et(V,$)-X)*He}function et(O,V){const $=(V%1+1)%1*100;for(let X=1;X<O.length;X++){const[ue,xe]=O[X-1],[ve,Ee]=O[X];if($<=ve){const Ce=($-ue)/(ve-ue);return xe+(Ee-xe)*(Ce*Ce*(3-2*Ce))}}return O[O.length-1][1]}const it=Math.PI/180,Lt=.8,jt=.4,Ln=.3,Yn=[[-.045,-.107],[.132,-.096]];function fs(){let O=1/0;for(const V of oe){const $=V.hip.rotation.x,X=$+V.shin.rotation.x,ue=X+V.ankle.rotation.x,xe=Lt-jt*Math.cos($)-Ln*Math.cos(X);for(const[ve,Ee]of Yn){const Ce=xe+Ee*Math.cos(ue)-ve*Math.sin(ue);Ce<O&&(O=Ce)}}return O}function Nn(O){const V=Math.max(Be,.4);He+=(Me((V-zt)/(wn-zt))-He)*(1-Math.pow(2,-O/.18));const $=ds+(mr-ds)*He;Je+=V/$*Math.PI*2*O;const X=Je/(Math.PI*2),ue=Math.min(1.35,.55+V/4);for(const[Xe,Ye]of oe.entries()){const st=X+Xe*.5,vt=ze(De,Mt,st)*it*ue,Ze=ze(Fe,$t,st)*it*ue,ke=ze(at,ut,st)*it*ue;Ye.hip.rotation.x=-vt,Ye.hip.rotation.y=Ye.side*.09,Ye.shin.rotation.x=Ze,Ye.ankle.rotation.x=-ke,Ye.hip.position.z=Math.sin(st%1*Math.PI*2)*.022*ue}const xe=X-Oe;for(const[Xe,Ye]of ce.entries()){const st=xe+Xe*.5,vt=ze(De,Mt,st)*it*ue*(.5+He*.3);Ye.shoulder.rotation.x=j+vt+Math.sin(Le*.71+Xe)*.012,Ye.shoulder.rotation.z=Ye.side*(.11-Math.max(0,-vt)*.28);const Ze=ze(De,Mt,st-ae)*it*ue*.5;Ye.forearm.rotation.x=-(.22+He*.85+Math.max(0,-Ze)*1.3)}const ve=fs(),Ee=Math.max(0,Math.sin(Je*2))*.055*He;n.position.y=-ve+Ee,n.position.x=Math.sin(Je)*.022*ue,n.rotation.z=-Math.sin(Je)*.045*ue;const Ce=Math.sin(xe%1*Math.PI*2);ye.rotation.y=Ce*.13*ue,ye.rotation.z=-n.rotation.z*.55,ye.rotation.x=-(.06+He*.28)-(.5-.5*Math.cos(Je*2))*.02;const Re=Math.sin(Le*2.3);f.position.y=ge+Re*.004,f.scale.x=1+Re*.005;const Te=Math.sin(Le*.83)*.035+Math.sin(Le*.37)*.02;me.rotation.y=-ye.rotation.y*.75+Te,me.rotation.x=-ye.rotation.x*.8+Math.sin(Le*.61)*.015,me.rotation.z=-ye.rotation.z*.6,me.position.y=Ie+ve*.35}function ps(O){Je+=O*4.2;for(const[V,$]of oe.entries()){const X=Je+V*Math.PI;$.hip.rotation.x=-.5-Math.sin(X)*.4,$.hip.rotation.y=0,$.hip.position.z=0,$.shin.rotation.x=.95+Math.sin(X)*.45,$.ankle.rotation.x=-.25}for(const[V,$]of ce.entries()){const X=Je+V*Math.PI+Math.PI;$.shoulder.rotation.x=-2.45+Math.sin(X)*.28,$.shoulder.rotation.z=$.side*.16,$.forearm.rotation.x=-(.5-Math.max(0,Math.sin(X))*.3)}n.position.set(0,0,0),n.rotation.z=0,ye.rotation.set(-.12,0,0),me.rotation.set(.2,0,0),me.position.y=Ie,f.position.y=ge}function yo(O){ht+=O;const V=Math.min(1,ht/.35),$=Math.min(1,Math.max(0,(ht-.3)/.5)),X=Math.min(1,Math.max(0,(ht-.7)/.65)),ue=Ce=>Ce*Ce*(3-2*Ce),xe=ue(V)*(1-ue($)),ve=ue($),Ee=ue(X);for(const[Ce,Re]of oe.entries())Re.hip.rotation.x=-ve*(.9+Ce*.35)*(1-Ee*.35),Re.hip.rotation.y=Re.side*.09,Re.hip.position.z=0,Re.shin.rotation.x=ve*(1.7+Ce*.3),Re.ankle.rotation.x=-.15*ve;for(const[Ce,Re]of ce.entries())Re.shoulder.rotation.x=-xe*1.5-Ee*(.6+Ce*.25),Re.shoulder.rotation.z=Re.side*(.11+xe*.5+Ee*.5),Re.forearm.rotation.x=-(.3+xe*.9);n.rotation.x=xe*.28-Ee*(Math.PI/2-.12),n.rotation.z=Ee*.22,n.position.y=-ve*.42-Ee*.38,n.position.x=Ee*.05,ye.rotation.x=xe*.3+Ee*.25,ye.rotation.y=0,ye.rotation.z=0,me.rotation.set(xe*-.4+Ee*.35,0,0),me.position.y=Ie,f.position.y=ge,f.rotation.y=0}function P(O){Le+=O;const V=.85+.25*Math.sin(Le*2.1);if(r.emissiveIntensity=.34*V,o.emissiveIntensity=.22*V,a.emissiveIntensity=.3*V,de&&(de.intensity=.45*V),he&&he.update(O),Ve==="walk"?Nn(O):Ve==="climb"?ps(O):Ve==="dying"?yo(O):_e(),R&&Ve!=="dying"){const $=ce.find(X=>X.side>0);if($.shoulder.rotation.x=re?-1.42:-.28,$.shoulder.rotation.z=$.side*(re?.06:.13),$.forearm.rotation.x=re?-.16:-.55,re){const X=ce.find(ue=>ue.side<0);X.shoulder.rotation.x=Math.min(X.shoulder.rotation.x,-.35),X.forearm.rotation.x=-.9}}else{const $=te.find(X=>X.side>0);$.group.rotation.set(0,-$.side*1.15,0)}}return{group:t,update:P,height:Wn,setArmed:we,fire:fe,get pistol(){return he},getMuzzle(O){return!R||!he?null:he.getMuzzle(O)},setGait(O,V=0){O!==Ve&&(Je=0,O!=="walk"&&(He=0),O==="dying"&&(ht=0)),Ve=O,Be=V},get gait(){return Ve}}}const Mu=1.35,mp={red:{skin:12076332,belly:14258282,dark:6044196,hp:2},blue:{skin:4156336,belly:9417949,dark:2832978,hp:3},black:{skin:3880496,belly:9076592,dark:2367260,hp:4},silver:{skin:12173516,belly:15001838,dark:5922920,hp:6}},j1=15129796,J1=7031343;function Et(i,e,t,n,s,r=null,o=null){r&&e.scale(r[0],r[1],r[2]),o&&(o[0]&&e.rotateX(o[0]),o[1]&&e.rotateY(o[1]),o[2]&&e.rotateZ(o[2])),e.translate(t,n,s),i.push(e)}function gp({tier:i="red"}={}){const e=mp[i]??mp.red,t=new rt,n=new qe({color:e.skin,roughness:.85,metalness:.05}),s=new qe({color:e.dark,roughness:.9,metalness:.05}),r=new qe({color:j1,roughness:.55,metalness:.1}),o=new qe({color:e.belly,roughness:.8,metalness:.04}),a=new qe({color:J1,roughness:.95,metalness:0}),c=.26,l=[],u=[],h=[],d=[];Et(l,new Qe(.23,14,12),0,.76,0,[1.05,.88,.95]),Et(u,new Qe(.16,12,10),0,.77,.11,[1,.8,.6]),Et(l,new Qe(.185,14,12),0,.98,.075,[1.1,.8,.9],[c,0,0]),Et(l,new vn(.072,.3,4,8),0,1.06,.06,null,[0,0,Math.PI/2]);const f=0,g=1.2,_=.16;Et(l,new Qe(.175,14,12),f,g,_,[1,.95,1.12]),Et(l,new Qe(.1,10,8),f,g+.08,_+.055,[1.25,.42,.8]),Et(l,new mt(.062,.095,.19,10),f,g-.045,_+.13,null,[Math.PI/2+.25,0,0]),Et(l,new Qe(.062,10,8),f,g-.085,_+.21);for(const y of[-1,1])Et(h,new Qe(.018,8,6),y*.026,g-.06,_+.235);for(const y of[-1,1])Et(d,new hn(.019,.075,6),y*.055,g-.09,_+.16,null,[.35,0,y*.3]);for(const y of[-1,1])Et(l,new hn(.085,.2,4),y*.21,g+.06,_-.06,[1,1,.3],[.2,0,y*-1.25]);Et(d,new hn(.032,.19,6),f,g+.18,_-.02,null,[-.4,0,0]);for(const y of[-1,1])Et(u,new Qe(.036,10,8),y*.07,g+.02,_+.135,[1,1,.75]),Et(h,new Qe(.018,8,6),y*.074,g+.018,_+.163,[.7,1.25,.7]);Et(h,new mt(.185,.225,.19,12),0,.55,0),Et(h,new Hn(.2,.022,6,16),0,.645,0,[1.05,1,.95],[Math.PI/2,0,0]);const p=new rt;p.add(new pe(Mn(l),n)),p.add(new pe(Mn(u),o)),p.add(new pe(Mn(h),s)),p.add(new pe(Mn(d),r)),t.add(p);const m=[];for(const y of[-1,1]){const A=new rt;A.position.set(y*.225,1.05,.05),A.rotation.set(.18,0,y*.2),t.add(A);const E=[];Et(E,new vn(.05,.15,3,8),0,-.1,.01),Et(E,new vn(.042,.14,3,8),0,-.26,.045),Et(E,new Qe(.052,8,6),0,-.36,.06),A.add(new pe(Mn(E),n)),m.push({group:A,side:y})}const M=[];for(const y of[-1,1]){const A=new rt;A.position.set(y*.115,.6,0),t.add(A);const E=[];Et(E,new vn(.062,.15,3,8),y*.022,-.11,0,null,[0,0,y*-.16]),Et(E,new vn(.048,.15,3,8),y*.03,-.28,.015,null,[.1,0,y*.12]),Et(E,new Qe(.072,8,6),y*.012,-.4,.045,[.9,.5,1.4]),A.add(new pe(Mn(E),n)),M.push({group:A,side:y})}const v=new rt;v.position.set(0,-.36,.05),m[0].group.add(v);{const y=[];Et(y,new mt(.022,.028,.34,8),0,-.1,0),Et(y,new Qe(.06,8,6),0,-.3,0,[1,1.3,1]);for(const A of[0,1.6,3.1,4.7])Et(y,new hn(.018,.06,4),Math.sin(A)*.06,-.3,Math.cos(A)*.06,null,[Math.cos(A)*1.4,0,-Math.sin(A)*1.4]);v.add(new pe(Mn(y),a))}return{group:t,body:p,arms:m,legs:M,club:v,tier:i,height:Mu,maxHp:e.hp}}class Z1 extends ir{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ib(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new _b(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=jr.extractUrlBase(e);o=jr.resolveURL(l,this.path)}else o=jr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new hf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_p){try{o[ot.KHR_BINARY_GLTF]=new xb(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ib(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new tb;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new vb(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new yb;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new Mb;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Q1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eb{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new We(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Qt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new gi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Jl(u),l.distance=h;break;case"spot":l=new zy(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class tb{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){const s=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(s)}}class nb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ib{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(a,a)}return Promise.all(r)}}class sb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class rb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ob{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ab{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class cb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}}class lb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ub{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}}class hb{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class db{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class fb{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class pb{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mb{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gb{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class _b{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new je,p=new F,m=new Xt,M=new F(1,1,1),v=new Br(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&M.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,_.compose(p,m,M));for(const y in c)if(y==="_COLOR_0"){const A=c[y];v.instanceColor=new Ks(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);wt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const _p="glTF",co=12,xp={JSON:1313821514,BIN:5130562};class xb{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_p)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-co,r=new DataView(e,co);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===xp.JSON){const l=new Uint8Array(e,co+o,a);this.content=n.decode(l)}else if(c===xp.BIN){const l=co+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=bu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=bu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=lr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}h(f)},a,l,Qt,d)})})}}class yb{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Mb{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class vp extends Yr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,M=1-p,v=m-d+h;for(let y=0;y!==a;y++){const A=o[_+y+a],E=o[_+y+c]*u,T=o[g+y+a],U=o[g+y]*u;r[y]=M*A+v*E+p*T+m*U}return r}}const Sb=new Xt;class bb extends vp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Sb.fromArray(r).normalize().toArray(r),r}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yp={9728:cn,9729:gn,9984:uh,9985:bo,9986:gr,9987:ai},Mp={33071:Ei,33648:So,10497:wi},Su={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wb={CUBICSPLINE:void 0,LINEAR:yr,STEP:vr},wu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Eb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new qe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),i.DefaultMaterial}function rs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ab(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Tb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rb(i){let e;const t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eu(t.attributes):e=i.indices+":"+Eu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Eu(i.targets[n]);return e}function Eu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Au(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Pb=new je;class Ib{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new By(this.options.manager):this.textureLoader=new Wy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return rs(r,a,s),yi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(jr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Su[s.type],a=lr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Nt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Su[s.type],l=lr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(f&&f!==h){const m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let v=t.cache.get(M);v||(_=new l(a,m*f,s.count*f/u),v=new Rd(_,f/u),t.cache.add(M,v)),p=new Lr(v,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new Nt(_,c,g);if(s.sparse!==void 0){const m=Su.SCALAR,M=lr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,A=new M(o[1],v,s.sparse.count*m),E=new l(o[2],y,s.sparse.count*c);a!==null&&(p=new Nt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,U=A.length;T<U;T++){const q=A[T];if(p.setX(q,E[T*c]),c>=2&&p.setY(q,E[T*c+1]),c>=3&&p.setZ(q,E[T*c+2]),c>=4&&p.setW(q,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=yp[d.magFilter]||gn,u.minFilter=yp[d.minFilter]||ai,u.wrapS=Mp[d.wrapS]||wi,u.wrapT=Mp[d.wrapT]||wi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Gt(_);p.needsUpdate=!0,d(p)}),t.load(jr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),yi(h,o),h.userData.mimeType=o.mimeType||Cb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ma,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ll,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return qe}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){const h=s[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ct)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Zt);const u=r.alphaMode||wu.OPAQUE;if(u===wu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===wu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==rn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rn){const h=r.emissiveFactor;a.emissive=new We().setRGB(h[0],h[1],h[2],Qt)}return r.emissiveTexture!==void 0&&o!==rn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),yi(h,r),t.associations.set(h,{materials:e}),r.extensions&&rs(s,h,r),h})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Sp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Rb(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Sp(new Dt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Eb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=o[f];let m;const M=l[f];if(p.mode===In.TRIANGLES||p.mode===In.TRIANGLE_STRIP||p.mode===In.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Wv(_,M):new pe(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===In.TRIANGLE_STRIP?m.geometry=ip(m.geometry,yh):p.mode===In.TRIANGLE_FAN&&(m.geometry=ip(m.geometry,Wc));else if(p.mode===In.LINES)m=new Yv(_,M);else if(p.mode===In.LINE_STRIP)m=new fa(_,M);else if(p.mode===In.LINE_LOOP)m=new Kv(_,M);else if(p.mode===In.POINTS)m=new Ul(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Tb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),yi(m,r),p.extensions&&rs(s,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&rs(s,h[0],r),h[0];const d=new rt;r.extensions&&rs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Xi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new gl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new je;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Il(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let M=0,v=d.length;M<v;M++){const y=d[M],A=f[M],E=g[M],T=_[M],U=p[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const q=n._createAnimationTracks(y,A,E,T,U);if(q)for(let x=0;x<q.length;x++)m.push(q[x])}return new Yl(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Pb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Bd:l.length>1?u=new rt:l.length===1?u=l[0]:u=new wt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),yi(u,r),r.extensions&&rs(n,u,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),yi(r,n),n.extensions&&rs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof zn||d instanceof Gt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Oi[r.path]===Oi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Oi[r.path]){case Oi.weights:l=Qs;break;case Oi.rotation:l=er;break;case Oi.position:case Oi.scale:l=nr;break;default:n.itemSize===1?l=Qs:l=nr;break}const u=s.interpolation!==void 0?wb[s.interpolation]:yr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Oi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Au(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof er?bb:vp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Lb(i,e,t){const n=e.attributes,s=new Kn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),a.normalized){const u=Au(lr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new F,c=new F;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Au(lr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new $n;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Sp(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=bu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ft.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),yi(i,e),Lb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ab(i,e.targets,t):i})}const Nb="Idle",Db=.6,Ub=.1,Ob=new Z1;function Fb(i,{height:e=Wn,clip:t=Nb}={}){return new Promise((n,s)=>{Ob.load(i,r=>n(Bb(r,e,t)),void 0,s)})}function Bb(i,e,t){const n=i.scene;n.traverse(h=>{if(h.isMesh){h.castShadow=!0,h.receiveShadow=!0;for(const d of bp(h.material))d&&("roughness"in d&&(d.roughness=Db),"metalness"in d&&(d.metalness=Ub))}});const s=new rt;n.updateWorldMatrix(!0,!0);const r=new Kn().setFromObject(n),o=r.getSize(new F);if(o.y>1e-4){const h=e/o.y;n.scale.multiplyScalar(h),r.min.multiplyScalar(h),r.max.multiplyScalar(h)}n.position.x-=(r.min.x+r.max.x)/2,n.position.z-=(r.min.z+r.max.z)/2,n.position.y-=r.min.y,s.add(n);const a=new iM(n),c=new Map;for(const h of i.animations)c.set(h.name,a.clipAction(h));let l=null;function u(h,d=.25){const f=c.get(h);return!f||f===l?!!f:(f.reset().play(),l?l.crossFadeTo(f,d,!1):d>0&&f.fadeIn(d),l=f,!0)}return!u(t,0)&&i.animations.length&&u(i.animations[0].name,0),{group:s,height:e,clips:[...c.keys()],play:u,update(h){a.update(h)},dispose(){a.stopAllAction(),a.uncacheRoot(n),kb(n)}}}function bp(i){return i?Array.isArray(i)?i:[i]:[]}function kb(i){const e=new Set;i.traverse(t=>{if(t.isMesh){t.geometry?.dispose();for(const n of bp(t.material))e.add(n)}});for(const t of e){for(const n of Object.values(t))n&&n.isTexture&&n.dispose();t.dispose()}}const zb=.45;function Hb(i){const e=i.split("-")[1]??"red",t=gp({tier:e});let n=0;return{...t,update(s){n+=s,t.body.position.y=Math.sin(n*1.8)*.006;for(const[r,o]of t.arms.entries())o.group.rotation.x=.12+Math.sin(n*1.8+r)*.03,o.group.rotation.z=o.side*.18},setGait(){}}}const Tu=1.5;function Gb({renderer:i,modelUrl:e=null,who:t="vexo"}){const n=new Ir;n.background=new We(658966);const s=i.toneMapping,r=i.toneMappingExposure,o=i.outputColorSpace;i.toneMapping=ah,i.toneMappingExposure=1,i.outputColorSpace=Ct;const a=i.shadowMap.enabled,c=i.shadowMap.type;i.shadowMap.enabled=!0,i.shadowMap.type=ih;const l=new kt(38,window.innerWidth/window.innerHeight,.05,100),u=new Cr(i);n.environment=u.fromScene(new vu,.04).texture,n.environmentIntensity=.55,u.dispose(),n.add(new Vy(15266047,.8));const h=new gi(16774634,2.5);h.position.set(5,10,7),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.bias=-1e-4,h.shadow.radius=4,h.shadow.camera.near=8,h.shadow.camera.far=20,h.shadow.camera.left=-1.8,h.shadow.camera.right=1.8,h.shadow.camera.top=1.8,h.shadow.camera.bottom=-1.8,n.add(h);const d=new gi(10273023,1.15);d.position.set(3.2,1.4,1.6),n.add(d);const f=new gi(10420176,1);f.position.set(.6,2,-3.6),n.add(f);const g=new pe(new mt(.62,.7,.06,48),new qe({color:1053724,metalness:.2,roughness:.85}));g.position.y=-.03,g.receiveShadow=!0,n.add(g);const _=new pe(new Hn(.63,.008,8,64),new rn({color:4835583}));_.rotation.x=Math.PI/2,_.position.y=.012,n.add(_);const p=new rt;n.add(p);const m=t.startsWith("boko")?Hb(t):yu();p.add(m.group),m.group.traverse(I=>{I.isMesh&&(I.castShadow=!0,I.receiveShadow=!0)});let M=!1,v=m;e&&Fb(e).then(I=>{if(M){I.dispose();return}p.remove(m.group),p.add(I.group),v=I}).catch(I=>{console.warn(`[character] could not load ${e}, keeping the built-in Vexo:`,I)});let y=0,A=.06,E=0,T=!1,U=0;function q(){const W=Wn*.52;l.position.set(0,W+Math.sin(A)*3.7,Math.cos(A)*3.7),l.lookAt(0,Wn*.52,0)}q();function x(I){T=!0,U=I.clientX}function S(I){T&&(y+=(I.clientX-U)*.012,U=I.clientX,E=Tu)}function C(){T=!1}function N(I){I.code==="ArrowLeft"&&(y-=.2,E=Tu),I.code==="ArrowRight"&&(y+=.2,E=Tu),I.code==="ArrowUp"&&(A=Math.min(.9,A+.06),q()),I.code==="ArrowDown"&&(A=Math.max(-.35,A-.06),q())}window.addEventListener("pointerdown",x),window.addEventListener("pointermove",S),window.addEventListener("pointerup",C),window.addEventListener("keydown",N);const k=document.createElement("div");k.id="character-label",k.innerHTML=`
    <div class="character-label__name">VEXO</div>
    <div class="character-label__hint">Drag to turn · ↑ ↓ to tilt</div>
  `,document.body.appendChild(k);function B(I){E>0?E-=I:T||(y+=zb*I),p.rotation.y=y,v.update(I)}function b(){i.render(n,l)}function G(I=window.innerWidth,W=window.innerHeight){l.aspect=I/W,l.updateProjectionMatrix()}return{update:B,render:b,onResize:G,dispose(){M=!0,i.toneMapping=s,i.toneMappingExposure=r,i.outputColorSpace=o,i.shadowMap.enabled=a,i.shadowMap.type=c,v!==m&&v.dispose?.(),n.environment?.dispose()},setAngle(I){y=I,E=1/0,p.rotation.y=y},get vexo(){return v}}}const Vb=8161430,Wb=15659509,wp=4828159,Ep=.46,Ru=.32,Cu=4,Xb=Math.ceil(Cu/Ru);function qb(){const i=new rt;i.visible=!1;const e=new qe({color:Vb,metalness:.75,roughness:.42}),t=new qe({color:Wb,metalness:.5,roughness:.5}),n=new qe({color:wp,emissive:wp,emissiveIntensity:1.4,roughness:.5}),s=[];for(const h of[-1,1]){const d=new mt(.035,.035,1,10);d.translate(0,-.5,0);const f=new pe(d,e);f.position.x=h*Ep/2,i.add(f),s.push(f)}const r=[];for(let h=0;h<Xb;h++){const d=new pe(new mt(.022,.022,Ep,8),t);d.rotation.z=Math.PI/2,d.position.y=-Ru*(h+1),d.visible=!1,i.add(d),r.push(d)}const o=new pe(new Hn(.5,.035,8,28),n);o.rotation.x=Math.PI/2,i.add(o);let a=Cu,c=0;function l(){return a*c}function u(){const h=l();for(const d of s)d.scale.y=Math.max(h,.001);for(const[d,f]of r.entries())f.visible=-f.position.y<=h-.04;o.position.y=-h,o.visible=c>.02,i.visible=c>.001}return u(),{group:i,setHeight(h){a=Math.min(Math.max(h,.4),Cu),u()},setExtension(h){c=h<0?0:h>1?1:h,u()},get height(){return a},get extension(){return c},rungSpacing:Ru}}const Pu=22,Ap=2*Math.PI*Pu,Iu=.6;function Yb(){const i=document.createElement("div");i.id="stamina-wheel",i.hidden=!0,i.innerHTML=`
    <svg viewBox="0 0 56 56" width="56" height="56">
      <circle class="stamina-wheel__track" cx="28" cy="28" r="${Pu}" />
      <circle class="stamina-wheel__fill" cx="28" cy="28" r="${Pu}"
              stroke-dasharray="${Ap.toFixed(2)}" />
    </svg>
  `,document.body.appendChild(i);const e=i.querySelector(".stamina-wheel__fill");let t=!1,n=0,s=-1,r=null;return{update(o,a,c,l){l!=null&&(o<.999||a)?n=Iu:n>0&&(n-=c);const h=n>0&&l!=null;if(h!==t&&(i.hidden=!h,t=h),!h)return;i.style.transform=`translate(${Math.round(l.x)}px, ${Math.round(l.y)}px)`,i.style.opacity=n<Iu?(n/Iu).toFixed(2):"1";const d=Math.round(Ap*(1-Math.max(0,Math.min(1,o))));d!==s&&(e.style.strokeDashoffset=String(d),s=d),a!==r&&(i.classList.toggle("stamina-wheel--winded",a),r=a)},hide(){i.hidden=!0,t=!1,n=0}}}const Kb="♥";function $b(){const i=document.createElement("div");i.id="hearts",i.hidden=!0,document.body.appendChild(i);let e=-1,t=0;return{set(n,s){if(!(n===e&&s===t)){e=n,t=s,i.innerHTML="";for(let r=0;r<s;r++){const o=document.createElement("span");o.className=r<n?"heart":"heart heart--spent",o.textContent=Kb,i.appendChild(o)}i.hidden=!1}},flash(){i.classList.remove("hearts--hit"),i.offsetWidth,i.classList.add("hearts--hit")},hide(){i.hidden=!0,e=-1}}}const lo=1.5,jb=3.3,Jb=6.2,Ha=.55,Zb=.2,Qb=.62,ew=.3,tw=.25,nw=.05,Tp=2.2,iw=.11,sw=.08,rw=.15,Rp=.75,ow=.38,Lu=1.7,Cp=2.6,Pp=.8,aw=22,cw=4.5,lw=.9,uw=1.3,hw=.55,Ip=.7,dw=.35,Lp=.5,fw=.4,Np=.55,Ga=.32,Dp=2,pw=2.4,mw=1.3,Up=Math.PI*.19,uo=4.6,Op=2,gw=6.2,_w=5,xw=5,vw=.32,yw=55,Mw=.7,Sw=4,bw=1.5,Fp=3.4,ww=2.4,Ew=2.5,Bp=["KeyL"],os=new F(0,1,0);function Fi(i,e){return 1-Math.pow(2,-i/e)}function Va(i){return i<-1?-1:i>1?1:i}function Aw(i,e,t){return i<e?e:i>t?t:i}function ho(i,e){let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Tw({scene:i,camera:e,ship:t,surface:n,input:s,renderer:r,monsters:o=null,onShot:a=()=>{},dialogue:c=null,shop:l=null,perks:u=null,onDown:h=()=>{},onLanded:d=()=>{},onAboard:f=()=>{}}){const g=new Cr(r),_=g.fromScene(new vu,.04).texture;g.dispose();const p=yu({suitLight:!1,environment:_}),m=qb();let M=!1;function v(){M||(i.add(p.group),i.add(m.group),M=!0)}function y(){M&&(i.remove(p.group),i.remove(m.group),M=!1)}const A=document.createElement("div");A.id="foot-prompt",A.hidden=!0,document.body.appendChild(A);const E=Yb(),T=$b(),U=new F,q=new F,x=new F;let S="off",C=0,N=0,k=0,B=Pp,b=0;const G=new F,I=new F,W=new F,H=new F,Z=new Xt,z=new F,Y=new Xt,L=new F;let K=0,ie=0,ee=0,se=1,te=0,ce=!1,he=!1,J=null;const R=()=>u?u.maxHearts:xw;let re=R(),oe=!1,de=0,be=0,Ue=0,we=0,D=0;const w=new F,Q=new F,ne=new F,fe=new F,le=new F,Pe=new F,ye=[0,0];let me=!1;const Ge=n.world;function ge(Me,ze){return $e.y+Ge.groundHeightAt(Me-$e.x,ze-$e.z)}let Ie=null;function Le(Me){if(Me!==Ie){if(Ie=Me,!Me){A.hidden=!0;return}A.textContent=Me,A.hidden=!1}}function Ve(){if(S!=="off"||!n.active)return;b=new qt().setFromQuaternion(t.mesh.quaternion,"YXZ").y,z.copy(t.mesh.position),Y.copy(t.mesh.quaternion),Z.setFromEuler(new qt(0,b,0,"YXZ")),H.set(z.x,n.hullGroundY(t)+I1,z.z);const ze=t.mesh.scale.x;let et=-1;if(!Be(-1,ze)){if(!Be(1,ze)){k=Ew;return}et=1}v(),S="settle",C=0,B=Math.min(cw,Pp+Math.max(0,z.y-H.y)/aw),n.park(),Je(et,ze),ie=I.y,L.copy(G).addScaledVector(W,Ga),L.y=ie,K=Math.atan2(-W.x,-W.z),p.setGait("climb"),He(),p.group.visible=!1,m.setExtension(0),s.consumeAnyJustPressed(),Le(Ae.onFoot.skip)}function Be(Me,ze){return Pe.set(Me*Lp,0,Np).multiplyScalar(ze).applyQuaternion(Z).add(H),Ge.isClear(Pe.x-$e.x,Pe.z-$e.z,1.2)}function Je(Me,ze){I.set(Me*Lp,fw,Np).multiplyScalar(ze).applyQuaternion(Z).add(H),W.set(Me,0,0).applyQuaternion(Z).setY(0).normalize();const et=ge(I.x,I.z);G.set(I.x,et,I.z),m.group.position.copy(I),m.group.rotation.set(0,Math.atan2(W.x,W.z),0),m.setHeight(I.y-et),m.setExtension(0)}function He(){p.group.position.copy(L),p.group.rotation.y=K}function ht(){if(S==="walk"||S==="stepoff"){fe.copy(L).addScaledVector(os,Wn*.62);const{dx:Me,dz:ze,boom:et}=ae(),it=et*Math.cos(ee),Lt=et*Math.sin(ee);ne.set(Me,0,ze).multiplyScalar(it).add(fe).addScaledVector(os,1.15+(uo-et)*.2+Lt),j();return}if(S==="settle"||S==="deploy"){fe.copy(t.mesh.position).addScaledVector(os,.9),ne.copy(t.mesh.position).addScaledVector(W,11).addScaledVector(os,3.4),Pe.set(Math.sin(b),0,Math.cos(b)).multiplyScalar(3.5),ne.add(Pe),j();return}fe.copy(L).addScaledVector(os,Wn*.5),ne.copy(G).addScaledVector(W,5.6).addScaledVector(os,2.2),Pe.set(Math.sin(b),0,Math.cos(b)).multiplyScalar(1.6),ne.add(Pe),ne.y=Math.max(ne.y,fe.y-.4),j()}function j(){const Me=ge(ne.x,ne.z)+.7;ne.y<Me&&(ne.y=Me);const ze=6;for(let et=1;et<ze;et++){const it=et/ze,Lt=ne.x+(fe.x-ne.x)*it,jt=ne.z+(fe.z-ne.z)*it,Yn=(ge(Lt,jt)+.5-fe.y*it)/(1-it);Yn>ne.y&&(ne.y=Yn)}}function Oe(Me,ze){return n.parked&&Math.hypot(Me-H.x,ze-H.z)<gw?!1:Ge.isClear(Me-$e.x,ze-$e.z,.5)}function ae(){const Me=D+Math.PI;for(const it of[0,.42,-.42,.85,-.85,1.3,-1.3,1.9,-1.9]){const Lt=Me+it,jt=Math.sin(Lt),Ln=Math.cos(Lt);if(Oe(L.x+jt*uo,L.z+Ln*uo))return{dx:jt,dz:Ln,boom:uo}}const ze=Math.sin(Me),et=Math.cos(Me);for(let it=uo-.6;it>Op;it-=.6)if(Oe(L.x+ze*it,L.z+et*it))return{dx:ze,dz:et,boom:it};return{dx:ze,dz:et,boom:Op}}function _e(Me){ht();const ze=S==="walk"?.13:.34;!me||S==="settle"?(e.position.copy(ne),le.copy(fe),me=!0):(e.position.lerp(ne,Fi(Me,ze)),le.lerp(fe,Fi(Me,ze))),e.up.set(0,1,0),e.lookAt(le)}function De(){t.mesh.position.copy(H),t.mesh.quaternion.copy(Z),m.setExtension(1),L.copy(G).addScaledVector(W,Dp),L.y=ge(L.x,L.z),K=Math.atan2(W.x,W.z),p.group.visible=!0,p.setGait("idle"),He(),Mt()}function Fe(){if(!c)return!1;const Me=Ge.nearestPerson?Ge.nearestPerson(L.x-$e.x,L.z-$e.z):null;if(Me&&!c.isOpen){const et=Math.hypot(L.x-G.x,L.z-G.z),it=Math.hypot(Me.person.x-(L.x-$e.x),Me.person.z-(L.z-$e.z));if(et<Cp&&et<it)return!1}if(c.isOpen&&(!Me||Me.person!==c.person)){const et=c.person;c.close(),J&&J.people.stopTalking(et),J=null}if(!Me)return!1;const ze=s.keyboard.consumeJustPressed(["KeyE"])||s.gamepad.consumeJustPressed(At.A);return Me.person.shop?(ze&&l&&l.show(Me.person.shop),Le(l&&l.isOpen?null:Ae.shop.keeper[Me.person.shop]??Ae.onFoot.talk.replace("{name}",Me.person.name)),!0):(ze&&(Me.people.startTalking(Me.person,L.x-$e.x,L.z-$e.z),J=Me,c.next(Me.person)||(Me.people.stopTalking(Me.person),J=null)),c.isOpen?Le(null):Le(Ae.onFoot.talk.replace("{name}",Me.person.name)),!0)}function at(Me,ze=null,et=null){if(!(S!=="walk"||de>0||we>0)){if(de=bw,ze!=null){const it=L.x-ze,Lt=L.z-et,jt=Math.hypot(it,Lt)||1;w.x=it/jt*Fp,w.z=Lt/jt*Fp}re=Math.max(0,re-Me),T.set(re,R()),T.flash(),se=0,te=Tp,re<=0&&(we=ww,p.setGait("dying"),w.set(0,0,0),Le(null),E.hide())}}function Mt(){S="walk",C=0,se=1,te=0,he=!1,re=R(),de=0,we=0,oe=!1,T.set(re,R()),d(),ee=0,D=K,w.set(0,0,0),N=_w,me=!1}function $t(){const Me=Math.min(1,C/B),ze=1-(1-Me)*(1-Me);t.mesh.position.lerpVectors(z,H,ze),t.mesh.quaternion.slerpQuaternions(Y,Z,ze),t.velocity.set(0,0,0),Me>=1&&(S="deploy",C=0)}function ut(){const Me=Math.min(1,C/lw);m.setExtension(Me),Me>=1&&(S="down",C=0,p.group.visible=!0,p.setGait("climb"))}function zt(Me,ze){ie+=(ze?-1:1)*uw*Me;const et=G.y,it=I.y-.15,Lt=Pe.copy(G).addScaledVector(W,Ga),jt=Fi(Me,.12);L.x+=(Lt.x-L.x)*jt,L.z+=(Lt.z-L.z)*jt,K+=ho(K,Math.atan2(-W.x,-W.z))*jt,ze?(L.y=Math.max(et,ie),ie<=et&&(ie=et,S="stepoff",C=0,p.setGait("walk",lo*.7))):(L.y=Math.min(it,ie),ie>=it&&(ie=it,S="stow",C=0,p.group.visible=!1,Le(null))),He()}function wn(Me){const ze=Math.min(1,C/hw),et=Ga+(Dp-Ga)*ze;L.copy(G).addScaledVector(W,et),L.y=ge(L.x,L.z);const it=Math.atan2(W.x,W.z);K+=ho(K,it)*Fi(Me,.12),D=K,He(),ze>=1&&Mt()}function ds(){m.setExtension(1-Math.min(1,C/Ip)),C>=Ip&&(S="off",m.setExtension(0),n.unpark(),me=!1,he=!1,E.hide(),T.hide(),y(),f())}function mr(Me,ze){if(we>0||oe){w.set(0,0,0);return}const et=Va(ze?.lookX??0),it=Va(ze?.lookY??0),Lt=ze?.lookTurnX??0,jt=ze?.lookTurnY??0;D+=et*pw*Me+Lt,ee=Aw(ee-it*mw*Me-jt,-Up,Up);const Ln=Math.abs(et)>.05||Math.abs(Lt)>.0015,Yn=Va(ze?.stickYaw??ze?.yaw??0),fs=Va(ze?.stickThrottle??ze?.throttle??0);let Nn=Math.hypot(Yn,fs);Nn>1&&(Nn=1);const ps=s.keyboard.isDown("ShiftLeft")||s.keyboard.isDown("ShiftRight")||s.gamepad.isButtonDown(At.B),yo=ps&&Nn>.15;ps&&!ce&&se>0&&te<=0&&(se=Math.max(0,se-nw)),ce=ps,te>0&&(te-=Me);const P=yo&&te<=0&&se>0;if(he=P,P){const Re=Zb*(u?u.staminaDrain:1),Te=se<tw?Re*.5:Re;se-=Te*Me,se<=0&&(se=0,te=Tp)}else se=Math.min(1,se+(te>0?ew:Qb)*Me);const O=Nn<Ha?lo*(Nn/Ha):lo+(jb-lo)*((Nn-Ha)/(1-Ha)),V=te>0?Math.min(O,lo):P?Jb:O;if(Nn>.05){const Re=D+Math.atan2(Yn,fs);Q.set(Math.sin(Re),0,Math.cos(Re)).multiplyScalar(V),K+=ho(K,Re)*Fi(Me,sw)}else Q.set(0,0,0);const $=Fi(Me,iw);w.x+=(Q.x-w.x)*$,w.z+=(Q.z-w.z)*$;const X=Math.hypot(w.x,w.z);if(X>.05){L.x+=w.x*Me,L.z+=w.z*Me,Ge.resolveWalk(L.x-$e.x,L.z-$e.z,ow,ye),L.x=ye[0]+$e.x,L.z=ye[1]+$e.z;const Re=L.x-H.x,Te=L.z-H.z,Xe=Math.hypot(Re,Te);Xe<Lu&&Xe>1e-4&&(L.x=H.x+Re/Xe*Lu,L.z=H.z+Te/Xe*Lu)}X>rw?p.setGait("walk",X):p.setGait("idle");const ue=Math.abs(Yn)<.4&&Nn>.05;!Ln&&ue&&(D+=ho(D,K)*Fi(Me,Rp),ee+=(0-ee)*Fi(Me,Rp*2)),L.y=ge(L.x,L.z),He(),U.copy(L).addScaledVector(os,Wn*.75).project(e);const xe=U.z<1&&Math.abs(U.x)<1.4&&Math.abs(U.y)<1.4;if(E.update(se,te>0,Me,xe?{x:(U.x*.5+.5)*window.innerWidth+52,y:(-U.y*.5+.5)*window.innerHeight}:null),be>0&&(be-=Me),Ue>0&&(Ue-=Me),(s.keyboard.isDown("Space")||s.gamepad.isButtonDown(At.R2)||s.gamepad.isButtonDown(At.X))&&be<=0&&o&&(Ue=Sw,p.getMuzzle(q))){be=vw*(u?u.shotInterval:1);const Re=yw*(u?u.shotRange:1),Te=o.aimAt(q,K,Mw,Re);Te?(x.copy(Te).sub(q).normalize(),K+=ho(K,Math.atan2(x.x,x.z))*.6):x.set(Math.sin(K),0,Math.cos(K));const Xe=o.shoot(q,x,Re);p.fire(),a(q,x,Xe)}if(p.setArmed(Ue>0,K),Fe())return;Math.hypot(L.x-G.x,L.z-G.z)<Cp?(Le(Ae.onFoot.board),(s.keyboard.consumeJustPressed(Bp)||s.gamepad.consumeJustPressed(At.A))&&(S="up",C=0,ie=L.y,p.setGait("climb"),Le(null))):N>0?Le(Ae.onFoot.controls):Le(null)}return{get active(){return S!=="off"},get cutscene(){return S==="settle"||S==="deploy"||S==="down"||S==="stepoff"},get state(){return S},vexo:p,ladder:m,get position(){return L},get heading(){return K},get stamina(){return se},get winded(){return te>0},get sprinting(){return he},get hearts(){return re},get maxHearts(){return R()},refreshHearts(){re=Math.min(R(),Math.max(re,R())),T.set(re,R())},get down(){return we>0||oe},get quarry(){return S==="walk"&&we<=0?L:null},takeHit:at,begin:Ve,update(Me,ze){if(S==="off"){k>0&&(k-=Me),ze&&n.active?(Le(k>0?Ae.onFoot.noRoom:Ae.onFoot.climbOut),(s.keyboard.consumeJustPressed(Bp)||s.gamepad.consumeJustPressed(At.A))&&Ve()):Le(null);return}switch(C+=Me,N>0&&(N-=Me),this.cutscene&&C>dw&&s.consumeAnyJustPressed()&&(De(),Le(null)),S){case"settle":$t();break;case"deploy":ut();break;case"down":zt(Me,!0);break;case"stepoff":wn(Me);break;case"walk":mr(Me,ze);break;case"up":zt(Me,!1);break;case"stow":ds();break}de>0&&(de-=Me),we>0&&(we-=Me,we<=0&&(we=0,oe=!0,h())),p.update(Me),S!=="off"&&_e(Me),this.cutscene?Le(Ae.onFoot.skip):S!=="walk"&&Le(null)},prewarm(Me,ze){const et=p.group.visible;p.group.position.copy($e),p.group.visible=!0,m.group.position.copy($e),m.setHeight(2.6),m.setExtension(1),Me.compile(i,ze);const it=new kt(50,ze.aspect,.1,5e3);it.position.copy($e).add(new F(3.5,1.6,4.5)),it.lookAt($e.x,$e.y+1,$e.z),Me.render(i,it),p.group.visible=et,m.setExtension(0),Me.render(i,ze)},reset(){S!=="off"&&n.unpark(),S="off",C=0,k=0,oe=!1,we=0,re=R(),T.set(re,R()),me=!1,p.group.visible=!1,m.setExtension(0),Le(null),he=!1,E.hide(),T.hide(),y()}}}const kp=4,Rw=3,Cw=24,Pw=Math.cos(1.1),Iw=7,Lw=8,Nw=55,zp=4.5,Hp=.9,Nu=3.4,Gp=2,Dw=3.2,Vp=1.9,ur=.42,Wp=.22,Uw=.9,Ow=.45;function Fw({scene:i,world:e,origin:t}){const n=new rt;n.visible=!1,i.add(n);const s=new qe({color:16751164,emissive:16742940,emissiveIntensity:1.6,roughness:.6}),r=new qe({color:5453855,roughness:.95}),o=new qe({color:7164979,roughness:.9}),a=[],c=[],l=[[2.4,1.2],[-2.1,1.9],[1.1,-2.4]],u=(b,G)=>t.y+e.groundHeightAt(b,G),h=620;for(let b=0;b<kp;b++){const G={x:0,z:0,cell:null,members:[]};c.push(G),v(G);for(let I=0;I<Rw;I++)A(G,0,0,I===0?"blue":"red",!1);A(G,0,0,"black",!0)}function d(b,G,I=0){let W=Math.imul(b|0,668265261)^Math.imul(G|0,374761393)^Math.imul(I,2654435761);return W=Math.imul(W^W>>>15,2246822507),W=Math.imul(W^W>>>13,3266489909),((W^W>>>16)>>>0)/4294967296}const f=new Map;function g(b,G){const I=`${b},${G}`;if(f.has(I))return f.get(I);let W=null;if(d(b,G,7)<=.42){const H=(b+.2+d(b,G,11)*.6)*h,Z=(G+.2+d(b,G,13)*.6)*h;(e.info.settlements??[]).some(Y=>Math.hypot(H-Y.x,Z-Y.z)<Y.radius+500)||(W=M(H,Z,7))}return f.set(I,W),W}const _=2;function p(b,G){const I=Math.floor(b/h),W=Math.floor(G/h),H=[],Z=3;let Y=c.every(te=>te.cell===null)?1/0:_,L=!1;const K=[];for(let te=-Z;te<=Z;te++)for(let ce=-Z;ce<=Z;ce++)K.push([I+ce,W+te,ce*ce+te*te]);K.sort((te,ce)=>te[2]-ce[2]);for(const[te,ce]of K){if(!f.has(`${te},${ce}`)){if(Y<=0){L=!0;continue}Y-=1}const J=g(te,ce);J&&H.push({key:`${te},${ce}`,site:J,d2:(J.x-b)**2+(J.z-G)**2})}U=L,H.sort((te,ce)=>te.d2-ce.d2);const ie=H.slice(0,kp),ee=new Set(ie.map(te=>te.key)),se=c.filter(te=>!ee.has(te.cell));for(const te of ie){if(c.some(he=>he.cell===te.key))continue;const ce=se.pop();if(!ce)break;m(ce,te.key,te.site.x,te.site.z)}}function m(b,G,I,W){b.cell=G,b.x=I,b.z=W,y(b);for(const[H,Z]of b.members.entries()){const z=H/b.members.length*Math.PI*2+d(I|0,W|0)*6,Y=Z.boss?1.9:2.6;Z.home.set(I+Math.sin(z)*Y,W+Math.cos(z)*Y),Z.pos.copy(Z.home),Z.state="idle",Z.timer=0,Z.hp=Z.boko.maxHp*(Z.boss?2:1),Z.boko.group.rotation.set(0,Z.heading,0),Z.boko.group.visible=!0,q(Z)}}function M(b,G,I){if(e.isClear(b,G,I))return{x:b,z:G};for(let W=9;W<=45;W+=9)for(let H=0;H<Math.PI*2;H+=Math.PI/4){const Z=b+Math.sin(H)*W,z=G+Math.cos(H)*W;if(e.isClear(Z,z,I))return{x:Z,z}}return null}function v(b){const G=new pe(new Hn(.55,.13,6,12),r);G.rotation.x=Math.PI/2,n.add(G),b.stones=G;const I=new pe(new hn(.32,.8,7),s);n.add(I),b.flame=I,b.crates=l.map((W,H)=>{const Z=new pe(new gt(.7,.62,.7),o);return Z.rotation.y=H*.8,n.add(Z),Z})}function y(b){const G=u(b.x,b.z);b.stones.position.set(b.x+t.x,G+.1,b.z+t.z),b.flame.position.set(b.x+t.x,G+.5,b.z+t.z);for(const[I,[W,H]]of l.entries())b.crates[I].position.set(b.x+W+t.x,u(b.x+W,b.z+H)+.31,b.z+H+t.z)}function A(b,G,I,W,H){const Z=gp({tier:W});H&&Z.group.scale.setScalar(1.35);const z={boko:Z,camp:b,home:new Se(G,I),pos:new Se(G,I),heading:Math.random()*Math.PI*2,state:"idle",timer:0,hp:Z.maxHp*(H?2:1),boss:H,phase:Math.random()*10,lastSeen:0,hitCooldown:0};return n.add(Z.group),a.push(z),b.members.push(z),q(z),z}const E=new F,T=new Se(1/0,1/0);let U=!1;function q(b){b.boko.group.position.set(b.pos.x+t.x,u(b.pos.x,b.pos.y),b.pos.y+t.z),b.boko.group.rotation.y=b.heading}function x(b,G){const I=G.x-b.pos.x,W=G.y-b.pos.y,H=Math.hypot(I,W);if(H>Cw)return!1;if(H<Iw)return!0;const Z=Math.sin(b.heading),z=Math.cos(b.heading);return(I*Z+W*z)/(H||1)>Pw}function S(b,G){for(const I of b.members)I.state==="dead"||I.state==="chase"||(I.state="alert",I.timer=.35+Math.random()*.25,I.lastSeen=G)}function C(b,G,I,W,H){const Z=G-b.pos.x,z=I-b.pos.y,Y=Math.hypot(Z,z);if(Y<.05)return Y;let K=Math.atan2(Z,z)-b.heading;for(;K>Math.PI;)K-=Math.PI*2;for(;K<-Math.PI;)K+=Math.PI*2;b.heading+=Math.max(-Nu*H,Math.min(Nu*H,K));const ie=Math.min(Y,W*H);if(Math.abs(K)<1.2){const ee=b.pos.x+Math.sin(b.heading)*ie,se=b.pos.y+Math.cos(b.heading)*ie;e.isClear(ee,se,.45)?(b.pos.x=ee,b.pos.y=se):b.heading+=.8*H*Nu}return Y}function N(b,G,I){const W=b.boko;b.phase+=I*(G?9:1.6);const H=Math.sin(b.phase);if(b.state!=="dead"){for(const[Z,z]of W.legs.entries())z.group.rotation.x=G?H*(Z?-.7:.7):0;for(const[Z,z]of W.arms.entries()){const Y=.18+(b.state==="chase"?.35:0);z.group.rotation.x=Y+(G?H*(Z?.5:-.5):H*.05),z.group.rotation.z=z.side*.2}if(b.state==="attack"){const Z=b.timer,z=Z<ur?-(Z/ur)*2.2:-2.2+(Z-ur)/Wp*3.4;W.arms[0].group.rotation.x=Math.min(1.2,z)}b.state==="alert"?(W.arms[0].group.rotation.x=-1.4,W.arms[1].group.rotation.x=-1.2,W.body.rotation.x=-.18):W.body.rotation.x=b.state==="chase"?.16:0}}function k(b){let G=0;for(const I of b.members)I.state==="attack"&&(G+=1);return G}const B=new Se;return{group:n,monsters:a,camps:c,setActive(b){n.visible=b},focus(b,G){!(Math.abs(b-T.x)>=60||Math.abs(G-T.y)>=60)&&!U||(T.set(b,G),p(b,G))},update(b,G,I){if(!n.visible)return;for(const H of c)H.flame.scale.setScalar(.85+Math.sin(performance.now()*.006+H.x)*.12);const W=G!=null;W&&B.set(G.x-t.x,G.z-t.z);for(const H of a){H.timer+=b,H.hitCooldown>0&&(H.hitCooldown-=b);let Z=!1;switch(H.state){case"idle":{const z=H.phase*.35+H.home.x,Y=H.home.x+Math.sin(z)*1.4,L=H.home.y+Math.cos(z)*1.4;Z=C(H,Y,L,Hp,b)>.3,W&&x(H,B)&&S(H.camp,0);break}case"alert":{H.timer>=.55&&(H.state="chase",H.timer=0);break}case"chase":{if(!W){H.state="idle",H.timer=0;break}const z=C(H,B.x,B.y,zp,b);Z=!0,x(H,B)?H.lastSeen=0:H.lastSeen+=b,z<=Vp&&k(H.camp)<Gp?(H.state="attack",H.timer=0):z<Dw&&k(H.camp)>=Gp?C(H,H.pos.x+(H.pos.x-B.x)*.4,H.pos.y+(H.pos.y-B.y)*.4,zp*.5,b):(H.lastSeen>Lw||z>Nw)&&(H.state="return",H.timer=0);break}case"attack":{H.timer>=ur&&H.timer<ur+b&&W&&Math.hypot(B.x-H.pos.x,B.y-H.pos.y)<=Vp+.5&&I(H.boss?2:1,H.pos.x+t.x,H.pos.y+t.z),H.timer>=ur+Wp+Uw&&(H.state=W?"chase":"return",H.timer=0);break}case"stagger":{H.timer>=Ow&&(H.state=W?"chase":"return",H.timer=0);break}case"return":{Z=C(H,H.home.x,H.home.y,Hp*1.8,b)>.4,Z||(H.state="idle",H.timer=0),W&&x(H,B)&&S(H.camp,0);break}}N(H,Z,b),H.state!=="dead"&&q(H)}},aimAt(b,G,I=.55,W=45){const H=Math.sin(G),Z=Math.cos(G),z=Math.cos(I);let Y=null,L=-1/0;for(const K of a){if(K.state==="dead")continue;const ie=K.pos.x+t.x-b.x,ee=K.pos.y+t.z-b.z,se=Math.hypot(ie,ee);if(se>W||se<.001)continue;const te=(ie*H+ee*Z)/se;if(te<z)continue;const ce=te*2-se/W;ce>L&&(L=ce,Y=K)}return Y?(E.set(Y.pos.x+t.x,u(Y.pos.x,Y.pos.y)+Mu*.55,Y.pos.y+t.z),E):null},shoot(b,G,I=60,W=.55){let H=null,Z=I;for(const z of a){if(z.state==="dead")continue;E.set(z.pos.x+t.x,u(z.pos.x,z.pos.y)+Mu*.55,z.pos.y+t.z).sub(b);const Y=E.dot(G);Y<=0||Y>Z||Math.sqrt(Math.max(0,E.lengthSq()-Y*Y))>W*(z.boss?1.5:1)||(H=z,Z=Y)}return H?(H.hp-=1,H.hp<=0?(H.state="dead",H.timer=0,H.boko.group.rotation.x=-Math.PI/2.2,H.boko.group.position.y=u(H.pos.x,H.pos.y)+.25):(H.state="stagger",H.timer=0),H):null},kill(b){b.state="dead",b.timer=0,b.hp=0,b.boko.group.rotation.x=-Math.PI/2.2,b.boko.group.position.y=u(b.pos.x,b.pos.y)+.25},snapshot(){return c.filter(b=>b.cell).map(b=>({cell:b.cell,hp:b.members.map(G=>G.state==="dead"?0:G.hp)}))},restore(b){if(!Array.isArray(b))return;const G=new Map(b.map(I=>[I.cell,I]));for(const I of c){const W=G.get(I.cell);if(W)for(const[H,Z]of I.members.entries()){const z=W.hp[H];z!==void 0&&(Z.hp=z,z<=0&&this.kill(Z))}}},reset(){for(const b of a)b.pos.copy(b.home),b.state="idle",b.timer=0,b.hp=b.boko.maxHp*(b.boss?2:1),b.boko.group.rotation.set(0,b.heading,0),q(b)}}}const Bw=2.2,kw=.011,zw=.25,Hw=0,Gw=4,Vw=5;function Ww({renderer:i,input:e,saves:t=null,tablet:n=null}){const s=document.createElement("div");s.id="inventory",s.className="screen-overlay",s.hidden=!0,s.innerHTML=`
    <div class="inventory__panel">
      <div class="inventory__list">
        <h2 class="screen-card__title">${Ae.inventory.title}</h2>
        <div class="inventory__tabs" data-tabs></div>
        <ul class="inventory__items" data-items></ul>
        <div class="inventory__tablet" data-tablet hidden></div>
        <div class="inventory__system" data-system hidden>
          <button class="inventory__save" data-save>${Ae.inventory.save}</button>
          <p class="inventory__saved" data-saved></p>
        </div>
        <p class="screen-card__hint">${Ae.inventory.hint}</p>
      </div>
      <div class="inventory__figure">
        <p class="inventory__figure-hint">${Ae.inventory.turnHint}</p>
      </div>
    </div>
  `,document.body.appendChild(s);const r=s.querySelector("[data-items]"),o=s.querySelector("[data-tabs]"),a=s.querySelector("[data-system]"),c=s.querySelector("[data-tablet]"),l=s.querySelector("[data-save]"),u=s.querySelector("[data-saved]"),h=s.querySelector(".inventory__figure"),d=[{id:"weapons",label:Ae.inventory.weapons},...n?[{id:"tablet",label:Ae.inventory.tablet}]:[],{id:"system",label:Ae.inventory.system}];n&&(c.appendChild(n),n.style.display="");let f=0;const g=new Ir;g.background=null;const _=new kt(32,1,.05,40),p=new Cr(i),m=p.fromScene(new vu,.04).texture;p.dispose(),g.add(new Ea(8363712,1185824,.9));const M=new gi(16774116,2.2);M.position.set(-2,3,3.2),g.add(M);const v=new gi(10420176,1.1);v.position.set(1.4,2,-3),g.add(v);const y=new rt;g.add(y);const A=yu({suitLight:!1,environment:m});y.add(A.group),A.setArmed(!1);const E=Wn*1.22;function T(z){const Y=_.fov*Math.PI/180,L=E/2/Math.tan(Y/2),K=Wn*.42/(Math.tan(Y/2)*z),ie=Math.max(L,K);_.position.set(0,Wn*.52,ie),_.lookAt(0,Wn*.5,0)}T(.75);const U=new We;let q=!1,x=0,S=!0,C=!1,N=0;function k(z){q&&(C=!0,S=!1,N=z.clientX)}function B(z){C&&(x+=(z.clientX-N)*kw,N=z.clientX)}function b(){C=!1}h.addEventListener("pointerdown",k),window.addEventListener("pointermove",B),window.addEventListener("pointerup",b);let G=[];function I(){o.innerHTML="";for(const[z,Y]of d.entries()){const L=document.createElement("span");L.className=z===f?"inventory__tab inventory__tab--on":"inventory__tab",L.textContent=Y.label,L.addEventListener("click",()=>{f=z,I(),H()}),o.appendChild(L)}}function W(z){f=(f+z+d.length)%d.length,I(),H()}function H(){const z=d[f].id;if(r.hidden=z!=="weapons",a.hidden=z!=="system",c.hidden=z!=="tablet",z==="system"){u.textContent=Z();return}if(z!=="tablet"){r.innerHTML="";for(const Y of G){const L=document.createElement("li");L.className=Y.held?"inventory__item inventory__item--held":"inventory__item",L.innerHTML=`
        <span class="inventory__item-name">${Y.name}</span>
        <span class="inventory__item-note">${Y.note}</span>
      `,r.appendChild(L)}if(!G.length){const Y=document.createElement("li");Y.className="inventory__item inventory__item--empty",Y.textContent=Ae.inventory.empty,r.appendChild(Y)}}}function Z(){const z=t?.latest;if(!z)return Ae.inventory.neverSaved;const Y=Math.max(0,Date.now()-z.at);if(Y<8e3)return Ae.inventory.savedJustNow;const L=Math.round(Y/6e4);return L<1?Ae.inventory.savedSecondsAgo:Ae.inventory.savedMinutesAgo.replace("{n}",String(L))}return l.addEventListener("click",()=>{const z=t?.saveManual();u.textContent=z?Ae.inventory.savedJustNow:Ae.inventory.saveFailed}),{get isOpen(){return q},setItems(z){G=z.map(Y=>({held:!1,...Y})),H()},get tab(){return d[f].id},toggle(){return q?this.close():this.show()},show(){return q=!0,s.hidden=!1,S=!0,x=0,A.setArmed(!0,!1),I(),H(),A.setGait("idle"),!0},close(){return q=!1,s.hidden=!0,C=!1,A.setArmed(!1),!1},update(z,Y){if(!q)return;const L=Y?.stickYaw??Y?.yaw??0,K=(e.keyboard.isDown("KeyA")?1:0)-(e.keyboard.isDown("KeyD")?1:0);if((e.gamepad.consumeJustPressed(Vw)||e.keyboard.consumeJustPressed(["ArrowRight"]))&&W(1),(e.gamepad.consumeJustPressed(Gw)||e.keyboard.consumeJustPressed(["ArrowLeft"]))&&W(-1),d[f].id==="system"&&e.gamepad.consumeJustPressed(Hw)){const ee=t?.saveManual();u.textContent=ee?Ae.inventory.savedJustNow:Ae.inventory.saveFailed}const ie=L||K;ie?(S=!1,x+=ie*Bw*z):S&&!C&&(x+=zw*z),y.rotation.y=x,A.update(z)},render(){if(!q)return;const z=h.getBoundingClientRect();if(z.width<8||z.height<8)return;const Y=i.getPixelRatio(),L=i.getSize(new Se),K=z.left*Y,ie=L.height*Y-z.bottom*Y,ee=z.width*Y,se=z.height*Y;_.aspect=z.width/z.height,_.updateProjectionMatrix(),T(_.aspect);const te=i.getScissorTest();i.setScissorTest(!0),i.setViewport(K/Y,ie/Y,ee/Y,se/Y),i.setScissor(K/Y,ie/Y,ee/Y,se/Y);const ce=i.autoClear;i.autoClear=!1,i.getClearColor(U);const he=i.getClearAlpha();i.setClearColor(661026,1),i.clear(!0,!0,!1),i.setClearColor(U,he),i.render(g,_),i.autoClear=ce,i.setScissorTest(te),i.setViewport(0,0,L.width,L.height),i.setScissor(0,0,L.width,L.height)},vexo:A}}const Du="super-vexo/save",Xp=5;function Wa(){try{const i=localStorage.getItem(Du);if(!i)return{manual:null,auto:null};const e=JSON.parse(i);return e.v!==Xp?{manual:null,auto:null}:{manual:e.manual??null,auto:e.auto??null}}catch{return{manual:null,auto:null}}}function qp(i){try{return localStorage.setItem(Du,JSON.stringify({v:Xp,...i})),!0}catch{return!1}}function Xw({ship:i,surface:e,onFoot:t,monsters:n,mission:s,upgrades:r,rovers:o,perks:a=null}){function c(l){return{kind:l,at:Date.now(),ship:{p:i.mesh.position.toArray(),q:i.mesh.quaternion.toArray(),scale:i.mesh.scale.x},inTown:e.active,camps:n.snapshot(),credits:s.credits,perks:a?a.snapshot():null,upgrades:r.upgrades.filter(u=>u.bought).map(u=>u.id),rovers:o.rovers.map(u=>u.fixed)}}return{get has(){const{manual:l,auto:u}=Wa();return!!(l||u)},get latest(){const{manual:l,auto:u}=Wa();return l?u&&u.at>l.at?u:l:u},saveManual(){const l=Wa();return l.manual=c("manual"),qp(l)},saveAuto(l){const u=Wa();return u.auto={...c("auto"),reason:l},qp(u)},restore(l){if(!l)return!1;t.reset(),e.reset(i),l.inTown&&e.enter(i),i.mesh.position.fromArray(l.ship.p),i.mesh.quaternion.fromArray(l.ship.q),i.mesh.scale.setScalar(l.ship.scale??1),i.velocity.set(0,0,0),n.reset(),n.focus(i.mesh.position.x-$e.x,i.mesh.position.z-$e.z),n.restore(l.camps),o.reset();for(const[u,h]of(l.rovers??[]).entries())h&&o.rovers[u]&&o.markFixed(o.rovers[u]);s.reset(),s.grantCredits(l.credits??0),a&&a.restore(l.perks),r.reset();for(const u of l.upgrades??[])r.buyFree(u);return!0},clear(){try{return localStorage.removeItem(Du),!0}catch{return!1}}}}function qw({onContinue:i,onTitle:e}){const t=document.createElement("div");t.id="game-over",t.hidden=!0,t.innerHTML=`
    <div class="game-over__sign">${Ae.gameOver.title}</div>
    <p class="game-over__ask" data-ask>${Ae.gameOver.ask}</p>
    <div class="game-over__buttons">
      <button class="game-over__btn" data-yes>${Ae.gameOver.yes}</button>
      <button class="game-over__btn" data-no>${Ae.gameOver.no}</button>
    </div>
    <p class="game-over__hint">${Ae.gameOver.hint}</p>
  `,document.body.appendChild(t);const n=t.querySelector("[data-ask]"),s=t.querySelector("[data-yes]"),r=t.querySelector("[data-no]");let o=!1,a=0,c=!0;function l(){s.classList.toggle("game-over__btn--on",a===0),r.classList.toggle("game-over__btn--on",a===1),s.disabled=!c}function u(){const d=a===0&&c;h(),d?i():e()}function h(){o=!1,t.hidden=!0}return s.addEventListener("click",()=>{a=0,l(),u()}),r.addEventListener("click",()=>{a=1,l(),u()}),{get isOpen(){return o},show(d){o=!0,c=d,a=d?0:1,n.textContent=d?Ae.gameOver.ask:Ae.gameOver.noSave,t.hidden=!1,l()},update(d,f){if(!o)return;const g=d.keyboard.consumeJustPressed(["ArrowLeft","KeyA"])||d.gamepad.consumeJustPressed(f.Left),_=d.keyboard.consumeJustPressed(["ArrowRight","KeyD"])||d.gamepad.consumeJustPressed(f.Right);(g||_)&&(a=a===0?1:0,l()),(d.keyboard.consumeJustPressed(["Enter","Space"])||d.gamepad.consumeJustPressed(f.A))&&u()},hide:h}}const Yp=Math.PI*1.25,Yw=.55,Uu=8,fo=i=>[i>>16&255,i>>8&255,i&255],Ou=fo(3105920),Fu=fo(729139),Bu=fo(14734254),Xa=i=>i<0?0:i>1?1:i,Sn=(i,e,t)=>i+(e-i)*t;function Kw(i,e,t,n,s,r){const o=1-s.moisture,{sandy:a,plateau:c}=i.styleAt(s),l=f=>{const g=fo(f);r[0]=g[0],r[1]=g[1],r[2]=g[2]},u=(f,g)=>{if(g<=0)return;const _=fo(f);r[0]=Sn(r[0],_[0],g),r[1]=Sn(r[1],_[1],g),r[2]=Sn(r[2],_[2],g)},h=(f,g,_)=>{const p=Xa((_-f)/(g-f));return p*p*(3-2*p)};l(tn[Ke.FOREST]),u(tn[Ke.PLAIN],h(.28,.44,o)),u(tn[Ke.SAVANNA],h(.42,.58,o)),u(tn[Ke.STONE_DESERT],h(.55,.68,o)),u(tn[Ke.MESA],c*.85),u(tn[Ke.DUNES],a);const d=i.snowlineAt(e,t);if(u(9275257,h(d*.55,d*.9,n)),u(tn[Ke.SNOW],h(d*.86,d*1.15,n)),n<xt(70)){const f=1-Xa(n/xt(70));r[0]=Sn(r[0],Bu[0],f*f*.6),r[1]=Sn(r[1],Bu[1],f*f*.6),r[2]=Sn(r[2],Bu[2],f*f*.6)}}function $w({terrain:i,width:e,height:t,minX:n,maxX:s,minZ:r,maxZ:o}){const a=new Uint8ClampedArray(e*t*4),c=(s-n)/e,l=(o-r)/t,u=new Float64Array(e+1),h=new Float64Array(e+1),d=[0,0,0];let f=null,g=-1;const _={continent:0,uplift:0,moisture:0,heat:0};let p=0;const m=(v,y)=>{for(let A=0;A<=e;A++)v[A]=i.heightAt(n+A*c,y)},M=v=>{const y=Math.ceil(e/Uu)+1;f||(f=new Array(y));for(let A=0;A<y;A++)f[A]=i.regionAt(n+A*Uu*c,v);return f};return{pixels:a,width:e,height:t,get done(){return p>=t},get progress(){return p/t},drawRows(v=8){for(let y=0;y<v&&p<t;y++,p++){const A=r+p*l;p===0?m(u,A):u.set(h),m(h,A+l),g!==p&&(M(A),g=p);for(let E=0;E<e;E++){const T=u[E],U=(p*e+E)*4;if(a[U+3]=255,T<=ss){const W=Xa(-T/xt(700));a[U]=Sn(Ou[0],Fu[0],W),a[U+1]=Sn(Ou[1],Fu[1],W),a[U+2]=Sn(Ou[2],Fu[2],W);continue}const q=n+E*c,x=E/Uu,S=Math.floor(x),C=x-S,N=f[S],k=f[S+1]??N;_.continent=Sn(N.continent,k.continent,C),_.uplift=Sn(N.uplift,k.uplift,C),_.moisture=Sn(N.moisture,k.moisture,C),_.heat=Sn(N.heat,k.heat,C),Kw(i,q,A,T,_,d);const B=(u[E+1]-T)/c,b=(h[E]-T)/l,I=.55+Xa((Yw+Math.cos(Yp)*B*6+Math.sin(Yp)*b*6)/Math.sqrt(1+(B*B+b*b)*36)+.42)*.75;a[U]=d[0]*I,a[U+1]=d[1]*I,a[U+2]=d[2]*I}}return p>=t}}}const Bi=900,hr=Math.round(Bi*dn/an),jw=2.5,Jw="#7dff9f",Zw="#8fd0ff";function Qw({world:i}){const e=document.createElement("div");e.id="map-screen",e.hidden=!0,e.innerHTML=`
    <div class="map-panel">
      <div class="map-head">
        <span class="map-title">${Ae.map.title}</span>
        <span class="map-scale" data-scale></span>
      </div>
      <div class="map-frame">
        <canvas class="map-canvas" data-canvas></canvas>
        <p class="map-building" data-building></p>
      </div>
      <p class="screen-card__hint">${Ae.map.hint}</p>
    </div>
  `,document.body.appendChild(e);const t=e.querySelector("[data-canvas]"),n=e.querySelector("[data-building]"),s=e.querySelector("[data-scale]"),r=t.getContext("2d");s.textContent=Ae.map.scale.replace("{km}",Math.round(an*2/1e3)).replace("{kmZ}",Math.round(dn*2/1e3)).replace("{m}",Math.round(an*2/Bi));const o=document.createElement("canvas");o.width=Bi,o.height=hr;const a=o.getContext("2d"),c=a.createImageData(Bi,hr),l=$w({terrain:i.terrain,width:Bi,height:hr,minX:-an,maxX:an,minZ:-dn,maxZ:dn});let u=!1,h=null,d=null,f=!0;function g(){const y=performance.now();for(;!l.done&&performance.now()-y<jw;)l.drawRows(4);c.data.set(l.pixels),a.putImageData(c,0,0),f=!0,l.done||requestAnimationFrame(g)}requestAnimationFrame(g);const _={x:0,y:0};let p={x:0,y:0,w:0,h:0};function m(y,A){return _.x=p.x+(y+an)/(an*2)*p.w,_.y=p.y+(A+dn)/(dn*2)*p.h,_}function M(y,A,E,T,U){const q=m(y,A);r.save(),r.translate(q.x,q.y),r.rotate(-E+Math.PI),r.beginPath(),r.moveTo(0,-U),r.lineTo(U*.62,U*.75),r.lineTo(0,U*.35),r.lineTo(-U*.62,U*.75),r.closePath(),r.fillStyle=T,r.strokeStyle="rgba(4, 10, 18, 0.85)",r.lineWidth=1.5,r.fill(),r.stroke(),r.restore()}function v(){const y=t.getBoundingClientRect();if(y.width<8||y.height<8)return;const A=Math.min(window.devicePixelRatio||1,2),E=Math.round(y.width*A),T=Math.round(y.height*A);(t.width!==E||t.height!==T)&&(t.width=E,t.height=T),r.clearRect(0,0,E,T);const U=Math.min(E/Bi,T/hr);p={w:Bi*U,h:hr*U,x:(E-Bi*U)/2,y:(T-hr*U)/2},r.imageSmoothingEnabled=!0,r.drawImage(o,p.x,p.y,p.w,p.h);for(const q of i.info.settlements??[]){const x=m(q.x,q.z),S=q.kind==="capital";r.beginPath(),r.arc(x.x,x.y,(S?5:3.2)*A,0,Math.PI*2),r.fillStyle=S?"#ffe9b0":"#efe0c4",r.strokeStyle="rgba(20, 14, 8, 0.85)",r.lineWidth=1.6*A,r.fill(),r.stroke(),r.font=`${(S?12:10)*A}px ui-monospace, monospace`,r.textAlign="center",r.lineWidth=3*A,r.strokeStyle="rgba(10, 16, 24, 0.9)",r.strokeText(q.name,x.x,x.y-(S?9:7)*A),r.fillStyle="#fff6e2",r.fillText(q.name,x.x,x.y-(S?9:7)*A)}d&&M(d.x,d.z,d.heading,Zw,9*A),h&&M(h.x,h.z,h.heading,Jw,8*A),n.hidden=l.done,l.done||(n.textContent=Ae.map.building.replace("{pct}",String(Math.round(l.progress*100)))),f=!1}return{get isOpen(){return u},get progress(){return l.progress},setMarkers(y,A=null){h=y,d=A,u&&(f=!0)},toggle(){return u?this.close():this.show()},show(){return u=!0,e.hidden=!1,f=!0,v(),!0},close(){return u=!1,e.hidden=!0,!1},update(){!u||!f||v()}}}function eE(){const i=document.createElement("div");i.id="dialogue",i.hidden=!0,i.innerHTML=`
    <div class="dialogue__box">
      <div class="dialogue__who" data-who></div>
      <p class="dialogue__line" data-line></p>
      <div class="dialogue__hint">${Ae.dialogue.more}</div>
    </div>
  `,document.body.appendChild(i);const e=i.querySelector("[data-who]"),t=i.querySelector("[data-line]");let n=!1,s=null;return{get isOpen(){return n},get person(){return s},next(r){return s!==r&&(s=r,r.said=0),r.said>=r.lines.length?(this.close(),!1):(e.textContent=r.name,t.textContent=r.lines[r.said],r.said+=1,n=!0,i.hidden=!1,!0)},close(){s&&(s.said=0),s=null,n=!1,i.hidden=!0}}}const qa=[{id:"heart",shop:"apothecary",price:120,max:3,scale:1.6},{id:"wind",shop:"apothecary",price:90,max:1},{id:"quickdraw",shop:"gunsmith",price:150,max:1},{id:"barrel",shop:"gunsmith",price:130,max:1},{id:"thrusters",shop:"shipwright",price:200,max:1}];function tE(){const i=Object.fromEntries(qa.map(t=>[t.id,0])),e=t=>i[t]>0;return{get owned(){return{...i}},priceOf(t){return Math.round(t.price*(t.scale??1)**i[t.id])},soldOut(t){return i[t.id]>=t.max},stockOf(t){return qa.filter(n=>n.shop===t)},take(t){i[t]=(i[t]??0)+1},snapshot(){return{...i}},restore(t){for(const n of qa)i[n.id]=Math.min(n.max,Math.max(0,t?.[n.id]??0))},reset(){for(const t of qa)i[t.id]=0},get maxHearts(){return 5+i.heart},get staminaDrain(){return e("wind")?1/1.4:1},get shotInterval(){return e("quickdraw")?.65:1},get shotRange(){return e("barrel")?1.45:1},get shipSpeed(){return e("thrusters")?1.15:1},label(t){return Ae.shop.goods[t]?.name??t},note(t){return Ae.shop.goods[t]?.note??""}}}function nE({perks:i,mission:e,audio:t=null,onBought:n=()=>{}}){const s=document.createElement("div");s.id="shop",s.className="screen-overlay",s.hidden=!0,s.innerHTML=`
    <div class="shop__panel">
      <div class="shop__head">
        <h2 class="shop__name" data-name></h2>
        <div class="shop__purse"><span data-credits>0</span> ${Ae.shop.credits}</div>
      </div>
      <ul class="shop__list" data-list></ul>
      <p class="shop__said" data-said></p>
      <p class="screen-card__hint">${Ae.shop.hint}</p>
    </div>
  `,document.body.appendChild(s);const r=s.querySelector("[data-name]"),o=s.querySelector("[data-credits]"),a=s.querySelector("[data-list]"),c=s.querySelector("[data-said]");let l=!1,u=null,h=[],d=0;function f(){o.textContent=String(e.credits),a.innerHTML="";for(const[p,m]of h.entries()){const M=i.priceOf(m),v=i.soldOut(m),y=e.credits>=M,A=document.createElement("li");A.className="shop__item"+(p===d?" shop__item--on":"")+(v?" shop__item--sold":"")+(!v&&!y?" shop__item--dear":""),A.innerHTML=`
        <span class="shop__item-name">${i.label(m.id)}</span>
        <span class="shop__item-note">${i.note(m.id)}</span>
        <span class="shop__item-price">${v?Ae.shop.sold:`${M} ${Ae.shop.credits}`}</span>
      `,A.addEventListener("click",()=>{d=p,f(),_()}),a.appendChild(A)}}function g(p){c.textContent=p}function _(){const p=h[d];if(!p)return;if(i.soldOut(p)){g(Ae.shop.alreadyHave);return}const m=i.priceOf(p);if(!e.spendCredits(m)){g(Ae.shop.tooDear),t?.chirp({fromHz:320,toHz:180,durationS:.14,peakGain:.1});return}i.take(p.id),g(Ae.shop.bought.replace("{name}",i.label(p.id))),t?.chirp({fromHz:680,toHz:1120,durationS:.16,peakGain:.14}),n(p),f()}return{get isOpen(){return l},get shop(){return u},show(p){return u=p,h=i.stockOf(p),d=0,r.textContent=Ae.shop.names[p]??p,g(Ae.shop.welcome),f(),l=!0,s.hidden=!1,!0},close(){return l=!1,u=null,s.hidden=!0,!1},update(p,m){if(!l)return;const M=p.keyboard.consumeJustPressed(["ArrowDown","KeyS"])||p.gamepad.consumeJustPressed(m.Down),v=p.keyboard.consumeJustPressed(["ArrowUp","KeyW"])||p.gamepad.consumeJustPressed(m.Up);(M||v)&&(d=(d+(M?1:-1)+h.length)%h.length,f()),(p.keyboard.consumeJustPressed(["KeyE","Enter"])||p.gamepad.consumeJustPressed(m.A))&&_()}}}const iE=12,Kp=.09,ku=14;function sE(i){const e=new rt;i.add(e);const t=[],n=[];for(let s=0;s<iE;s++){const r=new Dt;r.setAttribute("position",new Nt(new Float32Array(6),3));const o=new fa(r,new Ll({color:10475775,transparent:!0,opacity:1}));o.visible=!1,o.frustumCulled=!1,e.add(o),t.push(o)}return{group:e,fire(s,r,o=10475775){const a=t.pop()??n.shift();if(!a)return;const c=a.geometry.attributes.position;c.setXYZ(0,s.x,s.y,s.z),c.setXYZ(1,s.x+r.x*ku,s.y+r.y*ku,s.z+r.z*ku),c.needsUpdate=!0,a.material.color.setHex(o),a.material.opacity=1,a.visible=!0,a.userData.life=Kp,n.push(a)},update(s){for(let r=n.length-1;r>=0;r--){const o=n[r];o.userData.life-=s,o.userData.life<=0?(o.visible=!1,n.splice(r,1),t.push(o)):o.material.opacity=o.userData.life/Kp}}}}const{resolveAsteroidCollisions:rE}=iS,dr=new URLSearchParams(window.location.search),oE=dr.get("skipIntro")==="1",aE=dr.get("land")==="1",zu=dr.get("character")==="1",cE=dr.get("peaceful")==="1",lE=dr.get("model"),uE=document.getElementById("app"),qn=new Gv({antialias:!0});uE.appendChild(qn.domElement);const bn=aM(),ii=cM(),lt=_M(),Hu=Mf(),Ya=EM(),Gu=TM(),Vu=BM(),Wu=GM(),fr=ZM(),Ka=tS();bn.add(lt.mesh),bn.add(Hu),bn.add(Ya.mesh),bn.add(Gu.mesh),bn.add(Vu.mesh),bn.add(Wu.sprite);for(const i of fr.rovers)bn.add(i.mesh);bn.add(Ka.points),lt.mesh.visible=!0;const It=D1(bn,[Hu,Ya.mesh,Gu.mesh,Vu.mesh,Wu.sprite,Ka.points,...fr.rovers.map(i=>i.mesh)],ii,()=>Yu.reset()),dt=fS(),Ot=pS(),$p=window.matchMedia("(max-height: 480px), (max-width: 480px)");$p.matches&&(Ot.hide(),Ot.setHintVisible(!1));const po=mS();zu&&(po.hide(),Ot.hide(),Ot.setHintVisible(!1));const as=_S(document.body),Tt=RS(),Xu=US(),fn=DS(fr),pn=OS({upgrades:Xu,mission:fn,audio:Tt,onClose:()=>Ot.show()});fn.setOnRepaired(i=>{Ka.fire(i.mesh.position),Tt.chirp()}),fn.setOnComplete(()=>{Tt.fanfare(),pn.show("complete")}),Ot.onFastTravel(()=>{jp()}),Ot.onUpgradesClick(()=>{pn.show("upgrades")});function qu(){Kt.reset(),It.reset(lt),lt.mesh.position.set(0,0,0),lt.velocity.set(0,0,0),lt.mesh.quaternion.identity(),lt.arcadeDamping=!1,fn.reset(),fr.reset(),Xu.reset(),_o.reset(),cs.reset(),lM(),pn.hideAll(),Yu.reset()}function jp(){as.active||It.active||(Ot.setFastTravelActive(!0),as.begin(lt,{onDone:()=>Ot.setFastTravelActive(!1)}))}const Yu=JS(ii),mo={x:0,y:0,turnX:0,turnY:0};let Ku=null;function Jp(i){Ku=i;const{width:e,height:t,pixelRatio:n}=i;qn.setPixelRatio(n*$u.scale),qn.setSize(e,t,!1),ii.aspect=e/t,ii.updateProjectionMatrix(),zi&&zi.onResize(e,t),go&&go.onResize(e,t)}const $u=k1(()=>{Ku&&Jp(Ku)}),hE=900,ki={CINEMATIC:"cinematic",TITLE:"title",FLY:"fly"},dE=14,fE=40,pE=60,go=zu?Gb({renderer:qn,modelUrl:lE,who:dr.get("who")??"vexo"}):null,zi=oE||zu?null:GS({renderer:qn});let pr=zi?ki.CINEMATIC:ki.TITLE;zi&&po.hide();const mE=VS();YS(qn.domElement,Jp);const cs=Fw({scene:bn,world:It.world,origin:$e}),Zp=sE(bn),gE=eE(),_o=tE(),xo=nE({perks:_o,mission:fn,audio:Tt,onBought:()=>Kt.refreshHearts()}),Kt=Tw({scene:bn,camera:ii,ship:lt,surface:It,input:dt,renderer:qn,monsters:cs,dialogue:gE,shop:xo,perks:_o,onDown:()=>{$a.show(ls.has),Tt.playGameOver()},onLanded:()=>ls.saveAuto("landed"),onAboard:()=>ls.saveAuto("aboard"),onShot:(i,e,t)=>{Zp.fire(i,e,t?16765562:10475775),Tt.chirp(t?{fromHz:900,toHz:260,durationS:.16,peakGain:.16}:{fromHz:1400,toHz:700,durationS:.08,peakGain:.09}),t&&t.state==="dead"&&fn.earn(t.boss?fE:dE),t&&t.camp.members.every(n=>n.state==="dead")&&(fn.earn(pE),Tt.fanfare(),ls.saveAuto("camp cleared"))}}),ls=Xw({ship:lt,surface:It,onFoot:Kt,monsters:cs,mission:fn,upgrades:Xu,rovers:fr,perks:_o}),$a=qw({onContinue:()=>{Tt.stopGameOver();const i=ls.latest;qu(),ls.restore(i),pr=ki.FLY},onTitle:()=>{Tt.stopGameOver(),qu(),pr=ki.TITLE,po.show()}}),us=Qw({world:It.world}),hs=Ww({renderer:qn,input:dt,saves:ls,tablet:Ot.element});hs.setItems([{name:Ae.inventory.starterGun,note:Ae.inventory.starterGunNote,held:!0}]),It.prewarm(qn,ii),Kt.prewarm(qn,ii);function _E(){pr=ki.TITLE,po.show(),$p.matches||Ot.show()}const xE=320;let Qp=-1/0,ju=!1;function vE(i){const e=dt.keyboard.consumeJustPressed(["KeyW"]),t=dt.keyboard.isDown("KeyW");if(e){const s=performance.now();ju=s-Qp<xE,Qp=s}t||(ju=!1);const n=dt.gamepad.isButtonDown(At.A)&&i.throttle>.1;return ju||n}let em=performance.now();const vo=new qt;function ja(i){const e=(i-em)/1e3,t=Math.min(e,.1);if(em=i,$u.sample(e),$u.update(t),go){go.update(t),go.render(),requestAnimationFrame(ja);return}if(mE.update(),pr===ki.CINEMATIC){dt.consumeAnyJustPressed()&&(zi.skip(),dt.gamepad.suppressCurrentlyPressed()),zi.update(t),zi.render(),zi.active||_E(),requestAnimationFrame(ja);return}if(pr===ki.TITLE)dt.consumeAnyJustPressed()&&(pr=ki.FLY,po.dismiss(),Ot.showFastTravel(),Ot.showUpgrades(),Ot.setMissionVisible(!0),Ot.showResetHint(),Ot.hide(),dt.enableGyro().catch(()=>{}),Tt.start(),aE&&It.enter(lt));else{const s=dt.sample(),r=!as.suppressInput&&!pn.isOpen();if(mo.x=r?s.lookX:0,mo.y=r?s.lookY:0,mo.turnX=r?s.lookTurnX:0,mo.turnY=r?s.lookTurnY:0,(dt.keyboard.consumeJustPressed(["KeyM"])||dt.gamepad.consumeJustPressed(At.Select))&&us.toggle(),(dt.keyboard.consumeJustPressed(["KeyX"])||dt.gamepad.consumeJustPressed(At.X))&&(lt.arcadeDamping=!lt.arcadeDamping),(dt.keyboard.consumeJustPressed(["KeyF"])||dt.gamepad.consumeJustPressed(At.R1))&&jp(),(dt.keyboard.consumeJustPressed(["KeyU"])||dt.gamepad.consumeJustPressed(At.Y))&&(pn.isOpen()?(pn.hideAll(),Ot.show()):pn.show("upgrades")),pn.isOpen()&&(dt.gamepad.consumeJustPressed(At.B)||dt.keyboard.consumeJustPressed(["Escape"]))&&(pn.hideAll(),Ot.show()),pn.isOpen()){const c=(dt.gamepad.isButtonDown(At.Down)?1:0)-(dt.gamepad.isButtonDown(At.Up)?1:0),u=-s.throttle||c;u&&pn.scrollBy(u*hE*t)}!$a.isOpen&&(dt.keyboard.consumeJustPressed(["KeyT"])||dt.gamepad.consumeJustPressed(At.Start))&&hs.toggle(),(hs.isOpen||us.isOpen||xo.isOpen)&&(dt.gamepad.consumeJustPressed(At.B)||dt.keyboard.consumeJustPressed(["Escape"]))&&(hs.close(),us.close(),xo.close()),(dt.keyboard.consumeJustPressed(["KeyR"])||dt.gamepad.consumeJustPressed(At.L3))&&qu();const o=pn.isOpen()||as.suppressInput?null:s;$a.isOpen?($a.update(dt,At),Tt.setThrottle(0),Tt.setSprinting(!1)):xo.isOpen?(xo.update(dt,At),Tt.setThrottle(0),Tt.setSprinting(!1),It.active&&It.update(lt,t)):us.isOpen?(Tt.setThrottle(0),Tt.setSprinting(!1),It.active&&It.update(lt,t)):hs.isOpen?(hs.update(t,s),Tt.setThrottle(0),Tt.setSprinting(!1),It.active&&It.update(lt,t)):Kt.active?(Kt.update(t,o),It.update(lt,t),cs.update(t,Kt.quarry,(c,l,u)=>Kt.takeHit(c,l,u)),Tt.setThrottle(0),Tt.setSprinting(Kt.sprinting)):as.suppressInput||pn.isOpen()?Tt.setThrottle(0):(lt.speedLimit=It.active?(vE(s)?on.surfaceBoostSpeed:on.surfaceSpeed)*_o.shipSpeed:0,vM(lt,s,t),Tt.setThrottle(s.throttle),It.update(lt,t),rE({position:lt.mesh.position,velocity:lt.velocity},Ya.instances),lt.braking&&lt.velocity.set(0,0,0)),Kt.active||(Kt.update(t,o),Tt.setSprinting(!1));const a=dt.keyboard.isDown("KeyH")||dt.gamepad.isButtonDown(At.L1);fn.update({shipPos:lt.mesh.position,shipSpeed:lt.velocity.length(),holdActive:a&&!pn.isOpen()&&!as.suppressInput&&!It.active,dt:t})}if(cs.setActive(It.active&&!cE),It.active&&cs.focus(lt.mesh.position.x-$e.x,lt.mesh.position.z-$e.z),It.active&&!Kt.active&&cs.update(t,null,()=>{}),Zp.update(t),It.active||us.isOpen){const s={x:lt.mesh.position.x-$e.x,z:lt.mesh.position.z-$e.z,heading:vo.setFromQuaternion(lt.mesh.quaternion,"YXZ").y};us.setMarkers(Kt.active?{x:Kt.position.x-$e.x,z:Kt.position.z-$e.z,heading:Kt.heading}:s,Kt.active?s:null),us.update()}as.update(t),Tt.update(t),Ya.update(t),Gu.update(t),Vu.update(t),Wu.update(ii),fr.update(t),Ka.update(t),Sf(Hu,ii),Kt.active||Yu.update(lt,mo,t),qn.render(bn,ii),hs.render(),vo.setFromQuaternion(lt.mesh.quaternion,"YXZ"),Ot.update({velocity:lt.velocity.length(),inKph:It.active,eulerDeg:{x:Xi.radToDeg(vo.x),y:Xi.radToDeg(vo.y),z:Xi.radToDeg(vo.z)},dt:t,sources:dt.activeSources(),dampingOn:lt.arcadeDamping}),Ot.updateMission({remaining:fn.remaining(),total:fn.totalRovers(),credits:fn.credits});const n=fn.repairing??fn.inRange;Ot.updateHack({name:n?n.name:null,progress:n?n.repairProgress:0}),requestAnimationFrame(ja)}requestAnimationFrame(ja)})();
