(function(){"use strict";var Ju=document.createElement("style");Ju.textContent=`html,body{margin:0;padding:0;width:100%;height:100%;height:100dvh;background:#000;overflow:hidden;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#d6f0ff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}body,#app{position:fixed;inset:0}canvas{display:block;position:fixed;inset:0;width:100%;height:100%;touch-action:none}#cinematic{position:fixed;inset:0;z-index:12;pointer-events:none;color:#e6f3ff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.cinematic__skip{position:absolute;top:calc(1rem + env(safe-area-inset-top));right:calc(1.25rem + env(safe-area-inset-right));font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6aa3d1;opacity:.65}.cinematic__text{position:absolute;left:0;right:0;bottom:12%;text-align:center;padding:0 2rem;opacity:0;transition:opacity .9s ease;text-shadow:0 0 18px rgba(80,160,255,.4),0 2px 8px rgba(0,0,0,.85)}.cinematic__text--in{opacity:1}.cinematic__text p{font-size:clamp(1.05rem,2vw,1.6rem);letter-spacing:.04em;line-height:1.5;margin:.3em 0;color:#cbe2ff}.cinematic__flash{position:absolute;inset:0;background:radial-gradient(circle at center,#fff,#d3eaff,#7fb8ee 80%,#112540);opacity:0;pointer-events:none}#title-card{position:fixed;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#080e1e8c,#000000d9 70%);transition:opacity .5s ease;opacity:1}#title-card.title-card--hidden{opacity:0;pointer-events:none}.title-card__inner{text-align:center;padding:2rem 3rem}.title-card__title{font-size:clamp(1.6rem,4vw,3rem);letter-spacing:.05em;margin:0 0 1.5rem;color:#b8e0ff;text-shadow:0 0 24px rgba(80,160,255,.4)}.title-card__prompt{font-size:clamp(.9rem,1.5vw,1.1rem);color:#6aa3d1;margin:0;animation:pulse 1.4s ease-in-out infinite}@keyframes pulse{0%,to{opacity:.5}50%{opacity:1}}#tablet-hint{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;padding:4px 10px;background:#0a141eb3;color:#9ab3c9;font:11px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;border:1px solid rgba(120,160,200,.18);pointer-events:none}#tablet-hint[hidden]{display:none}#tablet{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;pointer-events:none}.tablet-frame{padding:6px;background:linear-gradient(135deg,#1a232e,#0a0f15);border-radius:14px;box-shadow:0 4px 24px #0009,inset 0 0 0 1px #ffffff0d}.tablet-bezel{padding:6px;background:#050709;border-radius:10px}.tablet-screen{width:220px;padding:10px 12px;background:linear-gradient(180deg,#061320,#03070d);border-radius:6px;font-size:12px;line-height:1.5;color:#9fd1ff;box-shadow:inset 0 0 18px #3278c81f}.tablet-titlebar{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid rgba(80,140,200,.18);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1}.tablet-app{font-weight:600}.tablet-source{padding:1px 6px;border-radius:3px;background:#50a0ff1f;color:#b8e0ff}.tablet-row{display:flex;justify-content:space-between}.tablet-row--small{font-size:10px;opacity:.7;margin-top:4px}.tablet-row--hint{margin-top:8px;padding-top:6px;border-top:1px solid rgba(80,140,200,.12);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1;opacity:.7;text-align:right}.tablet-label{color:#6aa3d1}.tablet-value{color:#d6f0ff;font-variant-numeric:tabular-nums}.tablet-app-btn{display:flex;margin-top:10px;width:100%;padding:8px 10px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:6px;color:#d6f0ff;font-family:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .4s ease}.tablet-app-btn--visible{opacity:1;pointer-events:auto}.tablet-app-btn:hover:not(:disabled){background:linear-gradient(135deg,#235080,#103050)}.tablet-app-btn:active:not(:disabled){transform:translateY(1px)}.tablet-app-btn:disabled{cursor:progress;opacity:.65}.tablet-app-btn--active{box-shadow:0 0 16px #78c8ff99}.tablet-app-btn__icon{font-size:14px;opacity:.85}.tablet-app-btn__label{flex:1;text-align:left;font-weight:600}.tablet-app-btn__key{padding:1px 6px;border-radius:3px;background:#78b4f02e;font-size:10px}.tablet-mission{margin-top:8px;padding-top:8px;border-top:1px solid rgba(80,140,200,.18)}.tablet-hack{margin-top:8px;padding:8px;background:#50a0ff14;border:1px solid rgba(120,180,240,.35);border-radius:4px}.tablet-hack__name{font-size:11px;font-weight:700;letter-spacing:.1em;color:#d6f0ff}.tablet-hack__hint{font-size:10px;color:#9adfff;opacity:.85;margin-bottom:4px}.tablet-hack__bar{height:6px;background:#ffffff14;border-radius:3px;overflow:hidden}.tablet-hack__fill{height:100%;width:0%;background:linear-gradient(90deg,#4aa3ff,#9adfff);transition:none}.screen-overlay{position:fixed;inset:0;z-index:8;display:flex;align-items:center;justify-content:center;padding:2rem;background:radial-gradient(ellipse at center,#080e1ec7,#000000eb 80%);pointer-events:auto}.screen-overlay[hidden]{display:none}.screen-card{max-width:460px;max-height:84vh;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:1.6rem 1.8rem;background:linear-gradient(160deg,#0e1e30,#050a14);border:1px solid rgba(120,180,240,.3);border-radius:10px;box-shadow:0 8px 36px #0000008c,inset 0 0 0 1px #ffffff08;color:#d6f0ff;text-align:center}.screen-card--wide{max-width:520px;text-align:left}.screen-card{scrollbar-width:thin;scrollbar-color:rgba(120,180,240,.4) transparent}.screen-card::-webkit-scrollbar{width:6px}.screen-card::-webkit-scrollbar-track{background:transparent}.screen-card::-webkit-scrollbar-thumb{background:#78b4f066;border-radius:3px}.screen-card__title{margin:0 0 .5rem;font-size:clamp(1.2rem,2.2vw,1.8rem);letter-spacing:.08em;color:#b8e0ff}.screen-card__body{color:#9fc6e7;font-size:.95rem;line-height:1.5}.screen-card__row{margin:.8rem 0}.screen-card__hint{margin:0 0 .8rem;padding-bottom:.6rem;border-bottom:1px solid rgba(80,140,200,.15);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6aa3d1;opacity:.75;text-align:center}.screen-card__credits{font-size:1.1rem;font-weight:700;color:#ffdf80}.screen-card__credits-label{font-size:.7rem;letter-spacing:.15em;color:#6aa3d1;margin-right:6px;font-weight:400}.screen-card__actions{display:flex;justify-content:center;gap:10px;margin-top:1rem}.screen-btn{padding:8px 14px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:5px;color:#d6f0ff;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.screen-btn--primary{background:linear-gradient(135deg,#2660a0,#154070);border-color:#a0dcff99}.screen-btn--small{padding:5px 10px;font-size:11px}.screen-btn:hover:not(:disabled){filter:brightness(1.15)}.screen-btn:disabled{opacity:.45;cursor:not-allowed}.upgrade-list{list-style:none;padding:0;margin:0}.upgrade-item{padding:10px 12px;margin-bottom:8px;background:#50a0ff0f;border:1px solid rgba(120,180,240,.18);border-radius:6px}.upgrade-item--bought{opacity:.65;border-color:#64dcb466}.upgrade-item__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.upgrade-item__name{font-weight:700;color:#d6f0ff;letter-spacing:.05em}.upgrade-item__cost{color:#ffdf80;font-weight:700;font-variant-numeric:tabular-nums}.upgrade-item__desc{margin:4px 0 8px;font-size:12px;color:#9fc6e7;line-height:1.4}#warp-flash{position:fixed;inset:0;background:radial-gradient(circle at center,#fff,#c4dfff,#6aa3d1 80%,#0a1a30);pointer-events:none;opacity:0;z-index:6;transition:none}@media(max-height:480px){.title-card__inner{padding:1rem 1.5rem;max-width:62vw}.title-card__title{font-size:clamp(1rem,2.6vw,1.6rem);margin-bottom:.9rem}.title-card__prompt{font-size:.85rem}.cinematic__text{bottom:8%}.cinematic__text p{font-size:1rem;line-height:1.35}.tablet-screen{width:180px;font-size:11px}.screen-overlay{padding:1rem}.screen-card{padding:1rem 1.2rem;max-height:88vh}.screen-card__title{font-size:1.1rem}.upgrade-item{padding:8px 10px;margin-bottom:6px}}@media(max-width:480px){.tablet-screen{width:min(58vw,220px)}.title-card__inner{padding:1.5rem 1rem}}#landing-banner{position:fixed;left:50%;bottom:calc(2.2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;padding:.7rem 1.5rem;text-align:center;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none;transition:opacity 1.2s ease}#landing-banner[hidden]{display:none}.landing-banner--fading{opacity:0}.landing-banner__town{font-size:10px;letter-spacing:.22em;color:#6aa3d1}.landing-banner__street{margin-top:2px;font-size:1.05rem;letter-spacing:.04em;color:#eaf4ff}.landing-banner__hint{margin-top:6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8fb8d8;opacity:.8}@media(max-height:480px){#landing-banner{bottom:calc(1rem + env(safe-area-inset-bottom));padding:.5rem 1.1rem}.landing-banner__street{font-size:.9rem}}.title-card__build{margin:1.1rem 0 0;font-size:9px;letter-spacing:.16em;color:#4d7ba1;opacity:.65}#map-screen{position:fixed;inset:0;z-index:11;display:flex;align-items:center;justify-content:center;background:#040910e6}#map-screen[hidden]{display:none}.map-panel{display:flex;flex-direction:column;gap:.5rem;width:min(1100px,96vw);height:min(760px,92vh);padding:.9rem 1rem .7rem;background:#0a1622f0;border:1px solid rgba(120,180,240,.28);border-radius:10px}.map-head{display:flex;align-items:baseline;justify-content:space-between}.map-title{font-size:.95rem;letter-spacing:.24em;color:#cfe4f6}.map-scale{font-size:10px;letter-spacing:.12em;color:#6f9dc4}.map-frame{position:relative;flex:1 1 auto;min-height:0;border-radius:6px;overflow:hidden;background:#0a1622}.map-canvas{position:relative;inset:auto;width:100%;height:100%;display:block}.map-building{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;font-size:11px;letter-spacing:.14em;color:#9fd8ff;background:#060e18cc;padding:.5rem .9rem;border-radius:5px}#dialogue{position:fixed;left:50%;bottom:5%;transform:translate(-50%);z-index:9;pointer-events:none;width:min(680px,92vw)}#dialogue[hidden]{display:none}.dialogue__box{background:#08121ce6;border:1px solid rgba(120,180,240,.35);border-left:3px solid #7dff9f;border-radius:8px;padding:.7rem 1rem .6rem}.dialogue__who{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#7dff9f}.dialogue__line{margin:.35rem 0 .45rem;font-size:.95rem;line-height:1.45;color:#eaf3fb}.dialogue__hint{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6f9dc4}#game-over{position:fixed;inset:0;z-index:12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.9rem;background:#020408e0;animation:game-over-in 1.1s ease-out}#game-over[hidden]{display:none}@keyframes game-over-in{0%{opacity:0}40%{opacity:0}to{opacity:1}}.game-over__sign{font-size:clamp(2.2rem,9vw,4.2rem);letter-spacing:.3em;color:#ff4d5e;text-shadow:0 0 24px rgba(255,77,94,.55),0 3px 0 rgba(0,0,0,.6)}.game-over__ask{margin:0;color:#cfe4f6;font-size:.95rem;letter-spacing:.08em}.game-over__buttons{display:flex;gap:1rem;margin-top:.4rem}.game-over__btn{font:inherit;font-size:.85rem;letter-spacing:.14em;padding:.6rem 1.3rem;color:#d8ecff;background:#0a1828e6;border:1px solid rgba(120,180,240,.35);border-radius:6px;cursor:pointer}.game-over__btn--on{border-color:#5effa6;color:#eaffef;box-shadow:0 0 18px #5effa640}.game-over__btn:disabled{opacity:.35;cursor:default}.game-over__hint{margin:.3rem 0 0;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4}#inventory{background:none}.inventory__panel{display:flex;gap:1.4rem;width:min(920px,94vw);height:min(560px,82vh)}.inventory__list{flex:1 1 56%;display:flex;flex-direction:column;min-width:0;padding:1.4rem;background:linear-gradient(160deg,#0e1e30f5,#050a14f7);border:1px solid rgba(120,180,240,.28);border-radius:10px;box-shadow:0 18px 60px #0009}.inventory__figure{flex:1 1 44%;position:relative;border:1px solid rgba(120,180,240,.18);border-radius:8px;touch-action:none;user-select:none;cursor:grab}.inventory__figure:active{cursor:grabbing}.inventory__figure-hint{position:absolute;bottom:.5rem;left:0;right:0;margin:0;text-align:center;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6f9dc4;pointer-events:none}.inventory__tabs{display:flex;gap:.6rem;margin:.2rem 0 .9rem}.inventory__tab{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4;padding:.25rem .7rem;border:1px solid rgba(120,180,240,.22);border-radius:999px}.inventory__tab--on{color:#d8ecff;border-color:#5effa680;background:#5effa614}.inventory__items{list-style:none;margin:0;padding:0;overflow-y:auto;flex:1 1 auto;overscroll-behavior:contain;touch-action:pan-y}.inventory__item{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;padding:.6rem .75rem;border:1px solid rgba(120,180,240,.16);border-radius:6px;margin-bottom:.5rem;background:#0a162699}.inventory__item--held{border-color:#5effa673;box-shadow:inset 0 0 18px #5effa614}.inventory__item--empty{color:#6f9dc4;justify-content:center}.inventory__tablet{flex:1 1 auto;min-height:0;overflow-y:auto}.inventory__tablet[hidden]{display:none}.inventory__tablet #tablet{position:static;inset:auto;z-index:auto;pointer-events:auto}.inventory__tablet .tablet-frame{width:100%}.inventory__tablet .tablet-bezel,.inventory__tablet .tablet-screen{width:100%;box-sizing:border-box}.inventory__system{flex:1 1 auto;display:flex;flex-direction:column;align-items:flex-start;gap:.7rem}.inventory__system[hidden]{display:none}.inventory__save{font:inherit;font-size:.85rem;letter-spacing:.16em;padding:.7rem 1.4rem;color:#eaffef;background:#0c281cd9;border:1px solid rgba(94,255,166,.45);border-radius:6px;cursor:pointer}.inventory__save:hover{background:#123c28e6}.inventory__saved{margin:0;font-size:11px;letter-spacing:.1em;color:#7fb0d8}.inventory__item-name{color:#eaf4ff;font-size:.95rem;letter-spacing:.04em}.inventory__item-note{color:#7fb0d8;font-size:11px;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}@media(max-width:700px),(max-height:460px){.inventory__panel{flex-direction:row;height:88vh;padding:.8rem;gap:.8rem}.inventory__item{padding:.4rem .55rem}.inventory__item-name{font-size:.85rem}}#hearts{position:fixed;top:calc(.8rem + env(safe-area-inset-top));left:50%;transform:translate(-50%);z-index:6;display:flex;gap:6px;pointer-events:none;font-size:22px;line-height:1}#hearts[hidden]{display:none}.heart{color:#ff4d5e;text-shadow:0 0 6px rgba(255,77,94,.55),0 1px 2px rgba(0,0,0,.8)}.heart--spent{color:#ffffff38;text-shadow:0 1px 2px rgba(0,0,0,.8)}@keyframes hearts-hit{0%{transform:translate(-50%) scale(1.35);filter:brightness(2.2)}to{transform:translate(-50%) scale(1);filter:brightness(1)}}.hearts--hit{animation:hearts-hit .45s ease-out}#stamina-wheel{position:fixed;left:0;top:0;z-index:6;width:56px;height:56px;margin:-28px 0 0 -28px;pointer-events:none;transition:opacity .2s linear}#stamina-wheel[hidden]{display:none}.stamina-wheel__track{fill:none;stroke:#06140e8c;stroke-width:5}.stamina-wheel__fill{fill:none;stroke:#5effa6;stroke-width:4;stroke-linecap:round;transform:rotate(-90deg);transform-origin:28px 28px;filter:drop-shadow(0 0 3px rgba(94,255,166,.7))}.stamina-wheel--winded .stamina-wheel__fill{stroke:#ff8a5c;filter:drop-shadow(0 0 4px rgba(255,138,92,.8))}#foot-prompt{position:fixed;left:50%;bottom:calc(7rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:6;padding:.45rem 1.1rem;font-size:11px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;color:#dceaf7;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none}#foot-prompt[hidden]{display:none}@media(max-height:480px){#foot-prompt{bottom:calc(4.4rem + env(safe-area-inset-bottom));font-size:10px;padding:.35rem .8rem}}#character-label{position:fixed;left:50%;bottom:calc(2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;text-align:center;pointer-events:none}.character-label__name{font-size:1.6rem;letter-spacing:.4em;text-indent:.4em;color:#eaf4ff;text-shadow:0 0 18px rgba(83,255,157,.45)}.character-label__hint{margin-top:6px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6aa3d1;opacity:.75}
/*$vite$:1*/`,document.head.appendChild(Ju);const $a="169",Qp=0,Qu=1,em=2,eh=1,th=2,ii=3,si=0,jt=1,Zt=2,Mi=0,ms=1,ri=2,nh=3,ih=4,tm=5,Gi=100,nm=101,im=102,sm=103,rm=104,om=200,am=201,cm=202,lm=203,ja=204,Za=205,um=206,hm=207,dm=208,fm=209,pm=210,mm=211,gm=212,_m=213,xm=214,Ja=0,Qa=1,ec=2,gs=3,tc=4,nc=5,ic=6,sc=7,sh=0,vm=1,ym=2,Si=0,Mm=1,Sm=2,bm=3,rh=4,wm=5,Em=6,Am=7,oh="attached",Tm="detached",ah=300,_s=301,xs=302,rc=303,oc=304,vo=306,bi=1e3,wi=1001,yo=1002,cn=1003,ch=1004,_r=1005,_n=1006,Mo=1007,oi=1008,ai=1009,lh=1010,uh=1011,xr=1012,ac=1013,Vi=1014,Dn=1015,vr=1016,cc=1017,lc=1018,vs=1020,hh=35902,dh=1021,fh=1022,Tn=1023,ph=1024,mh=1025,ys=1026,Ms=1027,uc=1028,hc=1029,gh=1030,dc=1031,fc=1033,So=33776,bo=33777,wo=33778,Eo=33779,pc=35840,mc=35841,gc=35842,_c=35843,xc=36196,vc=37492,yc=37496,Mc=37808,Sc=37809,bc=37810,wc=37811,Ec=37812,Ac=37813,Tc=37814,Rc=37815,Cc=37816,Pc=37817,Ic=37818,Lc=37819,Nc=37820,Dc=37821,Ao=36492,Uc=36494,Oc=36495,_h=36283,Fc=36284,Bc=36285,kc=36286,Rm=2200,Cm=2201,Pm=2202,yr=2300,Mr=2301,zc=2302,Ss=2400,bs=2401,To=2402,Hc=2500,Im=2501,Lm=0,xh=1,Gc=2,Nm=3200,Dm=3201,vh=0,Um=1,Ei="",Rt="srgb",Jt="srgb-linear",Vc="display-p3",Ro="display-p3-linear",Co="linear",bt="srgb",Po="rec709",Io="p3",ws=7680,yh=519,Om=512,Fm=513,Bm=514,Mh=515,km=516,zm=517,Hm=518,Gm=519,Wc=35044,Vm=35048,Sh="300 es",ci=2e3,Lo=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bh=1234567;const Sr=Math.PI/180,Es=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function Xc(i,e){return(i%e+e)%e}function Wm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Xm(i,e,t){return i!==e?(t-i)/(e-i):0}function br(i,e,t){return(1-t)*i+t*e}function qm(i,e,t,n){return br(i,e,1-Math.exp(-t*n))}function Ym(i,e=1){return e-Math.abs(Xc(i,e*2)-e)}function Km(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $m(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zm(i,e){return i+Math.random()*(e-i)}function Jm(i){return i*(.5-Math.random())}function Qm(i){i!==void 0&&(bh=i);let e=bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e0(i){return i*Sr}function t0(i){return i*Es}function n0(i){return(i&i-1)===0&&i!==0}function i0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function s0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function r0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xi={DEG2RAD:Sr,RAD2DEG:Es,generateUUID:Rn,clamp:zt,euclideanModulo:Xc,mapLinear:Wm,inverseLerp:Xm,lerp:br,damp:qm,pingpong:Ym,smoothstep:Km,smootherstep:$m,randInt:jm,randFloat:Zm,randFloatSpread:Jm,seededRandom:Qm,degToRad:e0,radToDeg:t0,isPowerOfTwo:n0,ceilPowerOfTwo:i0,floorPowerOfTwo:s0,setQuaternionFromProperEuler:r0,normalize:vt,denormalize:Un};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,s,r,o,a,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],S=s[1],y=s[4],v=s[7],C=s[2],w=s[5],A=s[8];return r[0]=o*x+a*S+c*C,r[3]=o*p+a*y+c*w,r[6]=o*m+a*v+c*A,r[1]=l*x+u*S+h*C,r[4]=l*p+u*y+h*w,r[7]=l*m+u*v+h*A,r[2]=d*x+f*S+g*C,r[5]=d*p+f*y+g*w,r[8]=d*m+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qc.makeScale(e,t)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new et;function wh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function o0(){const i=wr("canvas");return i.style.display="block",i}const Eh={};function No(i){i in Eh||(Eh[i]=!0,console.warn(i))}function a0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function c0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function l0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ah=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Th=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[Jt]:{transfer:Co,primaries:Po,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Rt]:{transfer:bt,primaries:Po,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ro]:{transfer:Co,primaries:Io,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Th),fromReference:i=>i.applyMatrix3(Ah)},[Vc]:{transfer:bt,primaries:Io,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Th),fromReference:i=>i.applyMatrix3(Ah).convertLinearToSRGB()}},u0=new Set([Jt,Ro]),dt={enabled:!0,_workingColorSpace:Jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!u0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Er[e].toReference,s=Er[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Er[i].primaries},getTransfer:function(i){return i===Ei?Co:Er[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Er[e].luminanceCoefficients)}};function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class h0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=wr("canvas")),Ts.width=e.width,Ts.height=e.height;const n=Ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d0=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kc(s[o].image)):r.push(Kc(s[o]))}else r=Kc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?h0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f0=0;class Ht extends Wi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=wi,s=wi,r=_n,o=oi,a=Tn,c=ai,l=Ht.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Rn(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bi:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bi:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null,Ht.DEFAULT_MAPPING=ah,Ht.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,C=(m+1)/2,w=(u+d)/4,A=(h+x)/4,P=(g+p)/4;return y>v&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=A/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=P/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p0 extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends p0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ch extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m0 extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let p=1-a;const m=c*d+l*f+u*g+h*x,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const C=Math.sqrt(y),w=Math.atan2(C,m*S);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C}const v=a*S;if(c=c*p+d*v,l=l*p+f*v,u=u*p+g*v,h=h*p+x*v,p===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new U,Ph=new qt;class Yn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Uo.subVectors(this.max,Ar),Rs.subVectors(e.a,Ar),Cs.subVectors(e.b,Ar),Ps.subVectors(e.c,Ar),Ai.subVectors(Cs,Rs),Ti.subVectors(Ps,Cs),Yi.subVectors(Rs,Ps);let t=[0,-Ai.z,Ai.y,0,-Ti.z,Ti.y,0,-Yi.z,Yi.y,Ai.z,0,-Ai.x,Ti.z,0,-Ti.x,Yi.z,0,-Yi.x,-Ai.y,Ai.x,0,-Ti.y,Ti.x,0,-Yi.y,Yi.x,0];return!jc(t,Rs,Cs,Ps,Uo)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,Rs,Cs,Ps,Uo))?!1:(Oo.crossVectors(Ai,Ti),t=[Oo.x,Oo.y,Oo.z],jc(t,Rs,Cs,Ps,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,Do=new Yn,Rs=new U,Cs=new U,Ps=new U,Ai=new U,Ti=new U,Yi=new U,Ar=new U,Uo=new U,Oo=new U,Ki=new U;function jc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const g0=new Yn,Tr=new U,Zc=new U;class Kn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):g0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Zc)),this.expandByPoint(Tr.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new U,Jc=new U,Fo=new U,Ri=new U,Qc=new U,Bo=new U,el=new U;class ko{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Jc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Ri.dot(this.direction),c=-Ri.dot(Fo),l=Ri.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Jc).addScaledVector(Fo,d),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,s,r){Qc.subVectors(t,e),Bo.subVectors(n,e),el.crossVectors(Qc,Bo);let o=this.direction.dot(el),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const c=a*this.direction.dot(Bo.crossVectors(Ri,Bo));if(c<0)return null;const l=a*this.direction.dot(Qc.cross(Ri));if(l<0||c+l>o)return null;const u=-a*Ri.dot(el);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,p){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,p)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_0,e,x0)}lookAt(e,t,n){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ci.crossVectors(n,xn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ci.crossVectors(n,xn)),Ci.normalize(),zo.crossVectors(xn,Ci),s[0]=Ci.x,s[4]=zo.x,s[8]=xn.x,s[1]=Ci.y,s[5]=zo.y,s[9]=xn.y,s[2]=Ci.z,s[6]=zo.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],S=n[3],y=n[7],v=n[11],C=n[15],w=s[0],A=s[4],P=s[8],O=s[12],_=s[1],M=s[5],F=s[9],H=s[13],D=s[2],q=s[6],E=s[10],V=s[14],B=s[3],j=s[7],X=s[11],Q=s[15];return r[0]=o*w+a*_+c*D+l*B,r[4]=o*A+a*M+c*q+l*j,r[8]=o*P+a*F+c*E+l*X,r[12]=o*O+a*H+c*V+l*Q,r[1]=u*w+h*_+d*D+f*B,r[5]=u*A+h*M+d*q+f*j,r[9]=u*P+h*F+d*E+f*X,r[13]=u*O+h*H+d*V+f*Q,r[2]=g*w+x*_+p*D+m*B,r[6]=g*A+x*M+p*q+m*j,r[10]=g*P+x*F+p*E+m*X,r[14]=g*O+x*H+p*V+m*Q,r[3]=S*w+y*_+v*D+C*B,r[7]=S*A+y*M+v*q+C*j,r[11]=S*P+y*F+v*E+C*X,r[15]=S*O+y*H+v*V+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+p*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],S=h*p*l-x*d*l+x*c*f-a*p*f-h*c*m+a*d*m,y=g*d*l-u*p*l-g*c*f+o*p*f+u*c*m-o*d*m,v=u*x*l-g*h*l+g*a*f-o*x*f-u*a*m+o*h*m,C=g*h*c-u*x*c-g*a*d+o*x*d+u*a*p-o*h*p,w=t*S+n*y+s*v+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=S*A,e[1]=(x*d*r-h*p*r-x*s*f+n*p*f+h*s*m-n*d*m)*A,e[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*m+n*c*m)*A,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*A,e[4]=y*A,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*A,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*A,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=v*A,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*m-t*h*m)*A,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*m+t*a*m)*A,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*A,e[12]=C*A,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*p+t*h*p)*A,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*p-t*a*p)*A,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,p=o*h,m=a*h,S=c*l,y=c*u,v=c*h,C=n.x,w=n.y,A=n.z;return s[0]=(1-(x+m))*C,s[1]=(f+v)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+m))*w,s[6]=(p+S)*w,s[7]=0,s[8]=(g+y)*A,s[9]=(p-S)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fn.copy(this);const l=1/r,u=1/o,h=1/a;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ci){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ci){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u;let g,x;if(a===ci)g=(o+r)*h,x=-2*h;else if(a===Lo)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Is=new U,Fn=new $e,_0=new U(0,0,0),x0=new U(1,1,1),Ci=new U,zo=new U,xn=new U,Ih=new $e,Lh=new qt;class Yt{constructor(e=0,t=0,n=0,s=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v0=0;const Dh=new U,Ls=new qt,hi=new $e,Ho=new U,Rr=new U,y0=new U,M0=new qt,Uh=new U(1,0,0),Oh=new U(0,1,0),Fh=new U(0,0,1),Bh={type:"added"},S0={type:"removed"},Ns={type:"childadded",child:null},tl={type:"childremoved",child:null};class wt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new U,t=new Yt,n=new qt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new et}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,t){return Dh.copy(e).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ho.copy(e):Ho.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Rr,Ho,this.up):hi.lookAt(Ho,Rr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(hi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S0),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new U(0,1,0),wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new U,di=new U,nl=new U,fi=new U,Ds=new U,Us=new U,kh=new U,il=new U,sl=new U,rl=new U,ol=new pt,al=new pt,cl=new pt;class Cn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),di.subVectors(n,t),nl.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(di),c=Bn.dot(nl),l=di.dot(di),u=di.dot(nl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ol.setScalar(0),al.setScalar(0),cl.setScalar(0),ol.fromBufferAttribute(e,t),al.fromBufferAttribute(e,n),cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ol,r.x),o.addScaledVector(al,r.y),o.addScaledVector(cl,r.z),o}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),di.subVectors(e,t),Bn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Bn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,n),Us.subVectors(r,n),il.subVectors(e,n);const c=Ds.dot(il),l=Us.dot(il);if(c<=0&&l<=0)return t.copy(n);sl.subVectors(e,s);const u=Ds.dot(sl),h=Us.dot(sl);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ds,o);rl.subVectors(e,r);const f=Ds.dot(rl),g=Us.dot(rl);if(g>=0&&f<=g)return t.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Us,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return kh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(kh,a);const m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Ds,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function ll(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Xc(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Yc(e.r),this.g=Yc(e.g),this.b=Yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return dt.fromWorkingColorSpace(sn.copy(this),e),Math.round(zt(sn.r*255,0,255))*65536+Math.round(zt(sn.g*255,0,255))*256+Math.round(zt(sn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Rt){dt.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,s=sn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Go);const n=br(Pi.h,Go.h,t),s=br(Pi.s,Go.s,t),r=br(Pi.l,Go.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new We;We.NAMES=zh;let b0=0;class kn extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=ms,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Za,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new U,Vo=new Se;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}}class Hh extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gh extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let w0=0;const Pn=new $e,ul=new wt,Os=new U,vn=new Yn,Cr=new Yn,Kt=new U;class Lt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wh(e)?Gh:Hh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(vn.min,Cr.min),vn.expandByPoint(Kt),Kt.addVectors(vn.max,Cr.max),vn.expandByPoint(Kt)):(vn.expandByPoint(Cr.min),vn.expandByPoint(Cr.max))}vn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Kt.fromBufferAttribute(a,l),c&&(Os.fromBufferAttribute(e,l),Kt.add(Os)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new U,c[P]=new U;const l=new U,u=new U,h=new U,d=new Se,f=new Se,g=new Se,x=new U,p=new U;function m(P,O,_){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,O),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,_),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const M=1/(f.x*g.y-g.x*f.y);isFinite(M)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(M),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(M),a[P].add(x),a[O].add(x),a[_].add(x),c[P].add(p),c[O].add(p),c[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,O=S.length;P<O;++P){const _=S[P],M=_.start,F=_.count;for(let H=M,D=M+F;H<D;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new U,v=new U,C=new U,w=new U;function A(P){C.fromBufferAttribute(s,P),w.copy(C);const O=a[P];y.copy(O),y.sub(C.multiplyScalar(C.dot(O))).normalize(),v.crossVectors(w,O);const M=v.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,M)}for(let P=0,O=S.length;P<O;++P){const _=S[P],M=_.start,F=_.count;for(let H=M,D=M+F;H<D;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new It(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new $e,$i=new ko,Wo=new Kn,Wh=new U,Xo=new U,qo=new U,Yo=new U,hl=new U,Ko=new U,Xh=new U,$o=new U;class pe extends wt{constructor(e=new Lt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(hl.fromBufferAttribute(h,e),o?Ko.addScaledVector(hl,u):Ko.addScaledVector(hl.sub(t),u))}t.add(Ko)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Wo.containsPoint($i.origin)===!1&&($i.intersectSphere(Wo,Wh)===null||$i.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,C=y;v<C;v+=3){const w=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);s=jo(this,m,e,n,l,u,h,w,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);s=jo(this,o,e,n,l,u,h,S,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,C=y;v<C;v+=3){const w=v,A=v+1,P=v+2;s=jo(this,m,e,n,l,u,h,w,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const S=p,y=p+1,v=p+2;s=jo(this,o,e,n,l,u,h,S,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function E0(i,e,t,n,s,r,o,a){let c;if(e.side===jt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===si,a),c===null)return null;$o.copy(a),$o.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo($o);return l<t.near||l>t.far?null:{distance:l,point:$o.clone(),object:i}}function jo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Xo),i.getVertexPosition(c,qo),i.getVertexPosition(l,Yo);const u=E0(i,e,t,n,Xo,qo,Yo,Xh);if(u){const h=new U;Cn.getBarycoord(Xh,Xo,qo,Yo,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,c,l,h,new Se)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,c,l,h,new Se)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};Cn.getNormal(Xo,qo,Yo,d.normal),u.face=d,u.barycoord=h}return u}class yt extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(x,p,m,S,y,v,C,w,A,P,O){const _=v/A,M=C/P,F=v/2,H=C/2,D=w/2,q=A+1,E=P+1;let V=0,B=0;const j=new U;for(let X=0;X<E;X++){const Q=X*M-H;for(let I=0;I<q;I++){const k=I*_-F;j[x]=k*S,j[p]=Q*y,j[m]=D,l.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[m]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(I/A),h.push(1-X/P),V+=1}}for(let X=0;X<P;X++)for(let Q=0;Q<A;Q++){const I=d+Q+q*X,k=d+Q+q*(X+1),G=d+(Q+1)+q*(X+1),$=d+(Q+1)+q*X;c.push(I,k,$),c.push(k,G,$),B+=6}a.addGroup(f,B,O),f+=B,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ln(i){const e={};for(let t=0;t<i.length;t++){const n=Fs(i[t]);for(const s in n)e[s]=n[s]}return e}function A0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const T0={clone:Fs,merge:ln};var R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=A0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new U,Kh=new Se,$h=new Se;class kt extends Yh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Kh,$h),t.subVectors($h,Kh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,ks=1;class P0 extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(Bs,ks,e,t);s.layers=this.layers,this.add(s);const r=new kt(Bs,ks,e,t);r.layers=this.layers,this.add(r);const o=new kt(Bs,ks,e,t);o.layers=this.layers,this.add(o);const a=new kt(Bs,ks,e,t);a.layers=this.layers,this.add(a);const c=new kt(Bs,ks,e,t);c.layers=this.layers,this.add(c);const l=new kt(Bs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jh extends Ht{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class I0 extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yt(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Mi});r.uniforms.tEquirect.value=t;const o=new pe(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=_n),new P0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const dl=new U,L0=new U,N0=new et;class ji{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=dl.subVectors(n,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||N0.getNormalMatrix(e),s=this.coplanarPoint(dl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Kn,Zo=new U;class fl{constructor(e=new ji,t=new ji,n=new ji,s=new ji,r=new ji,o=new ji){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],S=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,p-f,v-m).normalize(),n[1].setComponents(c+r,d+l,p+f,v+m).normalize(),n[2].setComponents(c+o,d+u,p+g,v+S).normalize(),n[3].setComponents(c-o,d-u,p-g,v-S).normalize(),n[4].setComponents(c-a,d-h,p-x,v-y).normalize(),t===ci)n[5].setComponents(c+a,d+h,p+x,v+y).normalize();else if(t===Lo)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zo.x=s.normal.x>0?e.max.x:e.min.x,Zo.y=s.normal.y>0?e.max.y:e.min.y,Zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function D0(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class zs extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let y=0;y<l;y++){const v=y*h-r;g.push(v,-S,0),x.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const y=S+l*m,v=S+l*(m+1),C=S+1+l*(m+1),w=S+1+l*m;f.push(y,v,w),f.push(v,C,w)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O0=`#ifdef USE_ALPHAHASH
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
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H0=`#ifdef USE_AOMAP
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
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
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
#endif`,W0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K0=`#ifdef USE_IRIDESCENCE
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
#endif`,$0=`#ifdef USE_BUMPMAP
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sg=`#define PI 3.141592653589793
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
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,og=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`
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
}`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
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
}`,bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
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
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lg=`PhysicalMaterial material;
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
#endif`,Ng=`struct PhysicalMaterial {
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
}`,Dg=`
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wg=`#if defined( USE_POINTS_UV )
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
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i_=`#ifdef USE_NORMALMAP
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
#endif`,s_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v_=`float getShadowMask() {
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
}`,y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M_=`#ifdef USE_SKINNING
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
#endif`,S_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,w_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tt={alphahash_fragment:U0,alphahash_pars_fragment:O0,alphamap_fragment:F0,alphamap_pars_fragment:B0,alphatest_fragment:k0,alphatest_pars_fragment:z0,aomap_fragment:H0,aomap_pars_fragment:G0,batching_pars_vertex:V0,batching_vertex:W0,begin_vertex:X0,beginnormal_vertex:q0,bsdfs:Y0,iridescence_fragment:K0,bumpmap_pars_fragment:$0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:Q0,color_fragment:eg,color_pars_fragment:tg,color_pars_vertex:ng,color_vertex:ig,common:sg,cube_uv_reflection_fragment:rg,defaultnormal_vertex:og,displacementmap_pars_vertex:ag,displacementmap_vertex:cg,emissivemap_fragment:lg,emissivemap_pars_fragment:ug,colorspace_fragment:hg,colorspace_pars_fragment:dg,envmap_fragment:fg,envmap_common_pars_fragment:pg,envmap_pars_fragment:mg,envmap_pars_vertex:gg,envmap_physical_pars_fragment:Tg,envmap_vertex:_g,fog_vertex:xg,fog_pars_vertex:vg,fog_fragment:yg,fog_pars_fragment:Mg,gradientmap_pars_fragment:Sg,lightmap_pars_fragment:bg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Ag,lights_toon_fragment:Rg,lights_toon_pars_fragment:Cg,lights_phong_fragment:Pg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Lg,lights_physical_pars_fragment:Ng,lights_fragment_begin:Dg,lights_fragment_maps:Ug,lights_fragment_end:Og,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:zg,map_fragment:Hg,map_pars_fragment:Gg,map_particle_fragment:Vg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:qg,morphinstance_vertex:Yg,morphcolor_vertex:Kg,morphnormal_vertex:$g,morphtarget_pars_vertex:jg,morphtarget_vertex:Zg,normal_fragment_begin:Jg,normal_fragment_maps:Qg,normal_pars_fragment:e_,normal_pars_vertex:t_,normal_vertex:n_,normalmap_pars_fragment:i_,clearcoat_normal_fragment_begin:s_,clearcoat_normal_fragment_maps:r_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:a_,opaque_fragment:c_,packing:l_,premultiplied_alpha_fragment:u_,project_vertex:h_,dithering_fragment:d_,dithering_pars_fragment:f_,roughnessmap_fragment:p_,roughnessmap_pars_fragment:m_,shadowmap_pars_fragment:g_,shadowmap_pars_vertex:__,shadowmap_vertex:x_,shadowmask_pars_fragment:v_,skinbase_vertex:y_,skinning_pars_vertex:M_,skinning_vertex:S_,skinnormal_vertex:b_,specularmap_fragment:w_,specularmap_pars_fragment:E_,tonemapping_fragment:A_,tonemapping_pars_fragment:T_,transmission_fragment:R_,transmission_pars_fragment:C_,uv_pars_fragment:P_,uv_pars_vertex:I_,uv_vertex:L_,worldpos_vertex:N_,background_vert:`varying vec2 vUv;
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
}`},Le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},$n={basic:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new We(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:ln([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:ln([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new We(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:ln([Le.points,Le.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:ln([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:ln([Le.common,Le.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:ln([Le.sprite,Le.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:ln([Le.common,Le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:ln([Le.lights,Le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};$n.physical={uniforms:ln([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Jo={r:0,b:0,g:0},Ji=new Yt,D_=new $e;function U_(i,e,t,n,s,r,o){const a=new We(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function x(S){let y=!1;const v=g(S);v===null?m(a,c):v&&v.isColor&&(m(v,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===vo)?(u===void 0&&(u=new pe(new yt(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Fs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ji.copy(y.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Ji)),u.material.toneMapped=dt.getTransfer(v.colorSpace)!==bt,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pe(new zs(2,2),new Ii({name:"BackgroundMaterial",uniforms:Fs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=dt.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,y){S.getRGB(Jo,qh(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(a,c)},render:x,addToRenderList:p}}function O_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(_,M,F,H,D){let q=!1;const E=h(H,F,M);r!==E&&(r=E,l(r.object)),q=f(_,H,F,D),q&&g(_,H,F,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(_,M,F,H),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,M,F){const H=F.wireframe===!0;let D=n[_.id];D===void 0&&(D={},n[_.id]=D);let q=D[M.id];q===void 0&&(q={},D[M.id]=q);let E=q[H];return E===void 0&&(E=d(c()),q[H]=E),E}function d(_){const M=[],F=[],H=[];for(let D=0;D<t;D++)M[D]=0,F[D]=0,H[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:F,attributeDivisors:H,object:_,attributes:{},index:null}}function f(_,M,F,H){const D=r.attributes,q=M.attributes;let E=0;const V=F.getAttributes();for(const B in V)if(V[B].location>=0){const X=D[B];let Q=q[B];if(Q===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),X===void 0||X.attribute!==Q||Q&&X.data!==Q.data)return!0;E++}return r.attributesNum!==E||r.index!==H}function g(_,M,F,H){const D={},q=M.attributes;let E=0;const V=F.getAttributes();for(const B in V)if(V[B].location>=0){let X=q[B];X===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(X=_.instanceColor));const Q={};Q.attribute=X,X&&X.data&&(Q.data=X.data),D[B]=Q,E++}r.attributes=D,r.attributesNum=E,r.index=H}function x(){const _=r.newAttributes;for(let M=0,F=_.length;M<F;M++)_[M]=0}function p(_){m(_,0)}function m(_,M){const F=r.newAttributes,H=r.enabledAttributes,D=r.attributeDivisors;F[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),D[_]!==M&&(i.vertexAttribDivisor(_,M),D[_]=M)}function S(){const _=r.newAttributes,M=r.enabledAttributes;for(let F=0,H=M.length;F<H;F++)M[F]!==_[F]&&(i.disableVertexAttribArray(F),M[F]=0)}function y(_,M,F,H,D,q,E){E===!0?i.vertexAttribIPointer(_,M,F,D,q):i.vertexAttribPointer(_,M,F,H,D,q)}function v(_,M,F,H){x();const D=H.attributes,q=F.getAttributes(),E=M.defaultAttributeValues;for(const V in q){const B=q[V];if(B.location>=0){let j=D[V];if(j===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){const X=j.normalized,Q=j.itemSize,I=e.get(j);if(I===void 0)continue;const k=I.buffer,G=I.type,$=I.bytesPerElement,te=G===i.INT||G===i.UNSIGNED_INT||j.gpuType===ac;if(j.isInterleavedBufferAttribute){const ee=j.data,se=ee.stride,ne=j.offset;if(ee.isInstancedInterleavedBuffer){for(let de=0;de<B.locationSize;de++)m(B.location+de,ee.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let de=0;de<B.locationSize;de++)p(B.location+de);i.bindBuffer(i.ARRAY_BUFFER,k);for(let de=0;de<B.locationSize;de++)y(B.location+de,Q/B.locationSize,G,X,se*$,(ne+Q/B.locationSize*de)*$,te)}else{if(j.isInstancedBufferAttribute){for(let ee=0;ee<B.locationSize;ee++)m(B.location+ee,j.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ee=0;ee<B.locationSize;ee++)p(B.location+ee);i.bindBuffer(i.ARRAY_BUFFER,k);for(let ee=0;ee<B.locationSize;ee++)y(B.location+ee,Q/B.locationSize,G,X,Q*$,Q/B.locationSize*ee*$,te)}}else if(E!==void 0){const X=E[V];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(B.location,X);break;case 3:i.vertexAttrib3fv(B.location,X);break;case 4:i.vertexAttrib4fv(B.location,X);break;default:i.vertexAttrib1fv(B.location,X)}}}}S()}function C(){P();for(const _ in n){const M=n[_];for(const F in M){const H=M[F];for(const D in H)u(H[D].object),delete H[D];delete M[F]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const F in M){const H=M[F];for(const D in H)u(H[D].object),delete H[D];delete M[F]}delete n[_.id]}function A(_){for(const M in n){const F=n[M];if(F[_.id]===void 0)continue;const H=F[_.id];for(const D in H)u(H[D].object),delete H[D];delete F[_.id]}}function P(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function F_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function B_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ai&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Dn&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function k_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ji,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const S=r?0:n,y=S*4;let v=m.clippingState||null;c.value=v,v=u(g,d,y,f);for(let C=0;C!==y;++C)v[C]=t[C];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const m=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function z_(i){let e=new WeakMap;function t(o,a){return a===rc?o.mapping=_s:a===oc&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===rc||a===oc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new I0(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class pl extends Yh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,Jh=[.125,.215,.35,.446,.526,.582],Qi=20,ml=new pl,Qh=new We;let gl=null,_l=0,xl=0,vl=!1;const es=(1+Math.sqrt(5))/2,Gs=1/es,ed=[new U(-es,Gs,0),new U(es,Gs,0),new U(-Gs,0,es),new U(Gs,0,es),new U(0,es,-Gs),new U(0,es,Gs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Pr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gl,_l,xl),this._renderer.xr.enabled=vl,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:vr,format:Tn,colorSpace:Jt,depthBuffer:!1},s=td(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(r)),this._blurMaterial=G_(r,e,t)}return s}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,ml)}_sceneToCubeUV(e,t,n,s){const a=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Qh),u.toneMapping=Si,u.autoClear=!1;const f=new rn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new pe(new yt,f);let x=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(Qh),x=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):S===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;Qo(s,S*y,m>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_s||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Qo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ml)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ed[(s-r-1)%ed.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):Qi;p>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);const m=[];let S=0;for(let A=0;A<Qi;++A){const P=A/x,O=Math.exp(-P*P/2);m.push(O),A===0?S+=O:A<p&&(S+=2*O)}for(let A=0;A<m.length;A++)m[A]=m[A]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],C=3*v*(s>y-Hs?s-y+Hs:0),w=4*(this._cubeSize-v);Qo(t,C,w,3*v,2*v),c.setRenderTarget(t),c.render(h,ml)}}function H_(i){const e=[],t=[],n=[];let s=i;const r=i-Hs+1+Jh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Hs?c=Jh[o-i+Hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,p=2,m=1,S=new Float32Array(x*g*f),y=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,P=w>2?0:-1,O=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(O,x*g*w),y.set(d,p*g*w);const _=[w,w,w,w,w,w];v.set(_,m*g*w)}const C=new Lt;C.setAttribute("position",new It(S,x)),C.setAttribute("uv",new It(y,p)),C.setAttribute("faceIndex",new It(v,m)),e.push(C),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function td(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function G_(i,e,t){const n=new Float32Array(Qi),s=new U(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nd(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function id(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function V_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===rc||c===oc,u=c===_s||c===xs;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Pr(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Pr(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function W_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&No("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function X_(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let y=0,v=S.length;y<v;y+=3){const C=S[y+0],w=S[y+1],A=S[y+2];d.push(C,w,w,A,A,C)}}else if(g!==void 0){const S=g.array;x=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const C=y+0,w=y+1,A=y+2;d.push(C,w,w,A,A,C)}}else return;const p=new(wh(d)?Gh:Hh)(d,1);p.version=x;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function q_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S];for(let S=0;S<x.length;S++)t.update(m,n,x[S])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Y_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K_(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let O=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*C*4*h),A=new Ch(w,v,C,h);A.type=Dn,A.needsUpdate=!0;const P=y*4;for(let _=0;_<h;_++){const M=p[_],F=m[_],H=S[_],D=v*C*4*_;for(let q=0;q<M.count;q++){const E=q*P;f===!0&&(s.fromBufferAttribute(M,q),w[D+E+0]=s.x,w[D+E+1]=s.y,w[D+E+2]=s.z,w[D+E+3]=0),g===!0&&(s.fromBufferAttribute(F,q),w[D+E+4]=s.x,w[D+E+5]=s.y,w[D+E+6]=s.z,w[D+E+7]=0),x===!0&&(s.fromBufferAttribute(H,q),w[D+E+8]=s.x,w[D+E+9]=s.y,w[D+E+10]=s.z,w[D+E+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Se(v,C)},n.set(a,d),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class sd extends Ht{constructor(e,t,n,s,r,o,a,c,l,u=ys){if(u!==ys&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ys&&(n=Vi),n===void 0&&u===Ms&&(n=vs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rd=new Ht,od=new sd(1,1),ad=new Ch,cd=new m0,ld=new jh,ud=[],hd=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function Vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ud[s];if(r===void 0&&(r=new Float32Array(s),ud[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ea(i,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function ex(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;pd.set(n),i.uniformMatrix2fv(this.addr,!1,pd),Vt(t,n)}}function tx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),Vt(t,n)}}function nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;dd.set(n),i.uniformMatrix4fv(this.addr,!1,dd),Vt(t,n)}}function ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function ax(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function hx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(od.compareFunction=Mh,r=od):r=rd,t.setTexture2D(e||r,s)}function dx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cd,s)}function fx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ld,s)}function px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ad,s)}function mx(i){switch(i){case 5126:return j_;case 35664:return Z_;case 35665:return J_;case 35666:return Q_;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return cx;case 36295:return lx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(i,e){i.uniform1fv(this.addr,e)}function _x(i,e){const t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function xx(i,e){const t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function vx(i,e){const t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function yx(i,e){const t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mx(i,e){const t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sx(i,e){const t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bx(i,e){i.uniform1iv(this.addr,e)}function wx(i,e){i.uniform2iv(this.addr,e)}function Ex(i,e){i.uniform3iv(this.addr,e)}function Ax(i,e){i.uniform4iv(this.addr,e)}function Tx(i,e){i.uniform1uiv(this.addr,e)}function Rx(i,e){i.uniform2uiv(this.addr,e)}function Cx(i,e){i.uniform3uiv(this.addr,e)}function Px(i,e){i.uniform4uiv(this.addr,e)}function Ix(i,e,t){const n=this.cache,s=e.length,r=ea(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rd,r[o])}function Lx(i,e,t){const n=this.cache,s=e.length,r=ea(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cd,r[o])}function Nx(i,e,t){const n=this.cache,s=e.length,r=ea(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ld,r[o])}function Dx(i,e,t){const n=this.cache,s=e.length,r=ea(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ad,r[o])}function Ux(i){switch(i){case 5126:return gx;case 35664:return _x;case 35665:return xx;case 35666:return vx;case 35674:return yx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return Tx;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Dx}}class Ox{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mx(t.type)}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ux(t.type)}}class Bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function md(i,e){i.seq.push(e),i.map[e.id]=e}function kx(i,e,t){const n=i.name,s=n.length;for(Ml.lastIndex=0;;){const r=Ml.exec(n),o=Ml.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){md(t,l===void 0?new Ox(a,i,e):new Fx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Bx(a),md(t,h)),t=h}}}class ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);kx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function gd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zx=37297;let Hx=0;function Gx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Vx(i){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(i);let n;switch(e===t?n="":e===Io&&t===Po?n="LinearDisplayP3ToLinearSRGB":e===Po&&t===Io&&(n="LinearSRGBToLinearDisplayP3"),i){case Jt:case Ro:return[n,"LinearTransferOETF"];case Rt:case Vc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _d(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gx(i.getShaderSource(e),o)}else return s}function Wx(i,e){const t=Vx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xx(i,e){let t;switch(e){case Mm:t="Linear";break;case Sm:t="Reinhard";break;case bm:t="Cineon";break;case rh:t="ACESFilmic";break;case Em:t="AgX";break;case Am:t="Neutral";break;case wm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const na=new U;function qx(){dt.getLuminanceCoefficients(na);const i=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Kx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $x(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ir(i){return i!==""}function xd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(jx,Jx)}const Zx=new Map;function Jx(i,e){let t=tt[e];if(t===void 0){const n=Zx.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(i){return i.replace(Qx,ev)}function ev(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function tv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===th?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function nv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xs&&(e="ENVMAP_MODE_REFRACTION"),e}function sv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case vm:e="ENVMAP_BLENDING_MIX";break;case ym:e="ENVMAP_BLENDING_ADD";break}return e}function rv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ov(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tv(t),l=nv(t),u=iv(t),h=sv(t),d=rv(t),f=Yx(t),g=Kx(r),x=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(p=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?tt.tonemapping_pars_fragment:"",t.toneMapping!==Si?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Sl(o),o=xd(o,t),o=vd(o,t),a=Sl(a),a=xd(a,t),a=vd(a,t),o=yd(o),a=yd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+o,v=S+m+a,C=gd(s,s.VERTEX_SHADER,y),w=gd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(M){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(w).trim();let q=!0,E=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,w);else{const V=_d(s,C,"vertex"),B=_d(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+F+`
`+V+`
`+B)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(H===""||D==="")&&(E=!1);E&&(M.diagnostics={runnable:q,programLog:F,vertexShader:{log:H,prefix:p},fragmentShader:{log:D,prefix:m}})}s.deleteShader(C),s.deleteShader(w),P=new ta(s,x),O=$x(s,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let O;this.getAttributes=function(){return O===void 0&&A(this),O};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,zx)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}let av=0;class cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lv(e),t.set(e,n)),n}}class lv{constructor(e){this.id=av++,this.code=e,this.usedTimes=0}}function uv(i,e,t,n,s,r,o){const a=new Nh,c=new cv,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,F,H,D){const q=H.fog,E=D.geometry,V=_.isMeshStandardMaterial?H.environment:null,B=(_.isMeshStandardMaterial?t:e).get(_.envMap||V),j=B&&B.mapping===vo?B.image.height:null,X=x[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Q=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,I=Q!==void 0?Q.length:0;let k=0;E.morphAttributes.position!==void 0&&(k=1),E.morphAttributes.normal!==void 0&&(k=2),E.morphAttributes.color!==void 0&&(k=3);let G,$,te,ee;if(X){const Wt=$n[X];G=Wt.vertexShader,$=Wt.fragmentShader}else G=_.vertexShader,$=_.fragmentShader,c.update(_),te=c.getVertexShaderID(_),ee=c.getFragmentShaderID(_);const se=i.getRenderTarget(),ne=D.isInstancedMesh===!0,de=D.isBatchedMesh===!0,he=!!_.map,Z=!!_.matcap,T=!!B,ce=!!_.aoMap,ae=!!_.lightMap,le=!!_.bumpMap,Me=!!_.normalMap,Te=!!_.displacementMap,Ee=!!_.emissiveMap,L=!!_.metalnessMap,b=!!_.roughnessMap,J=_.anisotropy>0,ie=_.clearcoat>0,me=_.dispersion>0,oe=_.iridescence>0,Pe=_.sheen>0,ve=_.transmission>0,ge=J&&!!_.anisotropyMap,ke=ie&&!!_.clearcoatMap,_e=ie&&!!_.clearcoatNormalMap,Re=ie&&!!_.clearcoatRoughnessMap,ze=oe&&!!_.iridescenceMap,Ge=oe&&!!_.iridescenceThicknessMap,Fe=Pe&&!!_.sheenColorMap,Ke=Pe&&!!_.sheenRoughnessMap,Ve=!!_.specularMap,ht=!!_.specularColorMap,K=!!_.specularIntensityMap,Ue=ve&&!!_.transmissionMap,re=ve&&!!_.thicknessMap,xe=!!_.gradientMap,Ie=!!_.alphaMap,Oe=_.alphaTest>0,ot=!!_.alphaHash,Mt=!!_.extensions;let $t=Si;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&($t=i.toneMapping);const ct={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:G,fragmentShader:$,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:de,batchingColor:de&&D._colorsTexture!==null,instancing:ne,instancingColor:ne&&D.instanceColor!==null,instancingMorph:ne&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Jt,alphaToCoverage:!!_.alphaToCoverage,map:he,matcap:Z,envMap:T,envMapMode:T&&B.mapping,envMapCubeUVHeight:j,aoMap:ce,lightMap:ae,bumpMap:le,normalMap:Me,displacementMap:f&&Te,emissiveMap:Ee,normalMapObjectSpace:Me&&_.normalMapType===Um,normalMapTangentSpace:Me&&_.normalMapType===vh,metalnessMap:L,roughnessMap:b,anisotropy:J,anisotropyMap:ge,clearcoat:ie,clearcoatMap:ke,clearcoatNormalMap:_e,clearcoatRoughnessMap:Re,dispersion:me,iridescence:oe,iridescenceMap:ze,iridescenceThicknessMap:Ge,sheen:Pe,sheenColorMap:Fe,sheenRoughnessMap:Ke,specularMap:Ve,specularColorMap:ht,specularIntensityMap:K,transmission:ve,transmissionMap:Ue,thicknessMap:re,gradientMap:xe,opaque:_.transparent===!1&&_.blending===ms&&_.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Oe,alphaHash:ot,combine:_.combine,mapUv:he&&p(_.map.channel),aoMapUv:ce&&p(_.aoMap.channel),lightMapUv:ae&&p(_.lightMap.channel),bumpMapUv:le&&p(_.bumpMap.channel),normalMapUv:Me&&p(_.normalMap.channel),displacementMapUv:Te&&p(_.displacementMap.channel),emissiveMapUv:Ee&&p(_.emissiveMap.channel),metalnessMapUv:L&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:ge&&p(_.anisotropyMap.channel),clearcoatMapUv:ke&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&p(_.sheenRoughnessMap.channel),specularMapUv:Ve&&p(_.specularMap.channel),specularColorMapUv:ht&&p(_.specularColorMap.channel),specularIntensityMapUv:K&&p(_.specularIntensityMap.channel),transmissionMapUv:Ue&&p(_.transmissionMap.channel),thicknessMapUv:re&&p(_.thicknessMap.channel),alphaMapUv:Ie&&p(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Me||J),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!E.attributes.uv&&(he||Ie),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:k,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:he&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zt,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Mt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&_.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function S(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(y(M,_),v(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function y(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function v(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function C(_){const M=x[_.type];let F;if(M){const H=$n[M];F=T0.clone(H.uniforms)}else F=_.uniforms;return F}function w(_,M){let F;for(let H=0,D=u.length;H<D;H++){const q=u[H];if(q.cacheKey===M){F=q,++F.usedTimes;break}}return F===void 0&&(F=new ov(i,M,_,r),u.push(F)),F}function A(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function P(_){c.remove(_)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:C,acquireProgram:w,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:O}}function hv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),e++,m}function a(h,d,f,g,x,p){const m=o(h,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(h,d,f,g,x,p){const m=o(h,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||dv),n.length>1&&n.sort(d||Sd),s.length>1&&s.sort(d||Sd)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function fv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new bd,i.set(n,[o])):s>=r.length?(o=new bd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new We};break;case"SpotLight":t={position:new U,direction:new U,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function mv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gv=0;function _v(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xv(i){const e=new pv,t=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new $e,o=new $e;function a(l){let u=0,h=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,S=0,y=0,v=0,C=0,w=0,A=0;l.sort(_v);for(let O=0,_=l.length;O<_;O++){const M=l[O],F=M.color,H=M.intensity,D=M.distance,q=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=F.r*H,h+=F.g*H,d+=F.b*H;else if(M.isLightProbe){for(let E=0;E<9;E++)n.probe[E].addScaledVector(M.sh.coefficients[E],H);A++}else if(M.isDirectionalLight){const E=e.get(M);if(E.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const V=M.shadow,B=t.get(M);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=M.shadow.matrix,S++}n.directional[f]=E,f++}else if(M.isSpotLight){const E=e.get(M);E.position.setFromMatrixPosition(M.matrixWorld),E.color.copy(F).multiplyScalar(H),E.distance=D,E.coneCos=Math.cos(M.angle),E.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),E.decay=M.decay,n.spot[x]=E;const V=M.shadow;if(M.map&&(n.spotLightMap[C]=M.map,C++,V.updateMatrices(M),M.castShadow&&w++),n.spotLightMatrix[x]=V.matrix,M.castShadow){const B=t.get(M);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=q,v++}x++}else if(M.isRectAreaLight){const E=e.get(M);E.color.copy(F).multiplyScalar(H),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=E,p++}else if(M.isPointLight){const E=e.get(M);if(E.color.copy(M.color).multiplyScalar(M.intensity),E.distance=M.distance,E.decay=M.decay,M.castShadow){const V=M.shadow,B=t.get(M);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=M.shadow.matrix,y++}n.point[g]=E,g++}else if(M.isHemisphereLight){const E=e.get(M);E.skyColor.copy(M.color).multiplyScalar(H),E.groundColor.copy(M.groundColor).multiplyScalar(H),n.hemi[m]=E,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=C,P.numLightProbes=A,n.version=gv++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const p=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const y=l[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function wd(i){const e=new xv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function vv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new wd(i),e.set(s,[a])):r>=o.length?(a=new wd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class yv extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mv extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
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
}`;function wv(i,e,t){let n=new fl;const s=new Se,r=new Se,o=new pt,a=new yv({depthPacking:Dm}),c=new Mv,l={},u=t.maxTextureSize,h={[si]:jt,[jt]:si,[Zt]:Zt},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Sv,fragmentShader:bv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let m=this.type;this.render=function(w,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const O=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=m!==ii&&this.type===ii,D=m===ii&&this.type!==ii;for(let q=0,E=w.length;q<E;q++){const V=w[q],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const j=B.getFrameExtents();if(s.multiply(j),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,B.mapSize.y=r.y)),B.map===null||H===!0||D===!0){const Q=this.type!==ii?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new qi(s.x,s.y,Q),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const X=B.getViewportCount();for(let Q=0;Q<X;Q++){const I=B.getViewport(Q);o.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),F.viewport(o),B.updateMatrices(V,Q),n=B.getFrustum(),v(A,P,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===ii&&S(B,P),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(O,_,M)};function S(w,A){const P=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,P,f,x,null)}function y(w,A,P,O){let _=null;const M=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(M!==void 0)_=M;else if(_=P.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=_.uuid,H=A.uuid;let D=l[F];D===void 0&&(D={},l[F]=D);let q=D[H];q===void 0&&(q=_.clone(),D[H]=q,A.addEventListener("dispose",C)),_=q}if(_.visible=A.visible,_.wireframe=A.wireframe,O===ii?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=P}return _}function v(w,A,P,O,_){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===ii)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const H=e.update(w),D=w.material;if(Array.isArray(D)){const q=H.groups;for(let E=0,V=q.length;E<V;E++){const B=q[E],j=D[B.materialIndex];if(j&&j.visible){const X=y(w,j,O,_);w.onBeforeShadow(i,w,A,P,H,X,B),i.renderBufferDirect(P,null,H,X,w,B),w.onAfterShadow(i,w,A,P,H,X,B)}}}else if(D.visible){const q=y(w,D,O,_);w.onBeforeShadow(i,w,A,P,H,q,null),i.renderBufferDirect(P,null,H,q,w,null),w.onAfterShadow(i,w,A,P,H,q,null)}}const F=w.children;for(let H=0,D=F.length;H<D;H++)v(F[H],A,P,O,_)}function C(w){w.target.removeEventListener("dispose",C);for(const P in l){const O=l[P],_=w.target.uuid;_ in O&&(O[_].dispose(),delete O[_])}}}const Ev={[Ja]:Qa,[ec]:ic,[tc]:sc,[gs]:nc,[Qa]:Ja,[ic]:ec,[sc]:tc,[nc]:gs};function Av(i){function e(){let K=!1;const Ue=new pt;let re=null;const xe=new pt(0,0,0,0);return{setMask:function(Ie){re!==Ie&&!K&&(i.colorMask(Ie,Ie,Ie,Ie),re=Ie)},setLocked:function(Ie){K=Ie},setClear:function(Ie,Oe,ot,Mt,$t){$t===!0&&(Ie*=Mt,Oe*=Mt,ot*=Mt),Ue.set(Ie,Oe,ot,Mt),xe.equals(Ue)===!1&&(i.clearColor(Ie,Oe,ot,Mt),xe.copy(Ue))},reset:function(){K=!1,re=null,xe.set(-1,0,0,0)}}}function t(){let K=!1,Ue=!1,re=null,xe=null,Ie=null;return{setReversed:function(Oe){Ue=Oe},setTest:function(Oe){Oe?te(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(Oe){re!==Oe&&!K&&(i.depthMask(Oe),re=Oe)},setFunc:function(Oe){if(Ue&&(Oe=Ev[Oe]),xe!==Oe){switch(Oe){case Ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case ec:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case nc:i.depthFunc(i.GEQUAL);break;case ic:i.depthFunc(i.GREATER);break;case sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Oe}},setLocked:function(Oe){K=Oe},setClear:function(Oe){Ie!==Oe&&(i.clearDepth(Oe),Ie=Oe)},reset:function(){K=!1,re=null,xe=null,Ie=null}}}function n(){let K=!1,Ue=null,re=null,xe=null,Ie=null,Oe=null,ot=null,Mt=null,$t=null;return{setTest:function(ct){K||(ct?te(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(ct){Ue!==ct&&!K&&(i.stencilMask(ct),Ue=ct)},setFunc:function(ct,Wt,be){(re!==ct||xe!==Wt||Ie!==be)&&(i.stencilFunc(ct,Wt,be),re=ct,xe=Wt,Ie=be)},setOp:function(ct,Wt,be){(Oe!==ct||ot!==Wt||Mt!==be)&&(i.stencilOp(ct,Wt,be),Oe=ct,ot=Wt,Mt=be)},setLocked:function(ct){K=ct},setClear:function(ct){$t!==ct&&(i.clearStencil(ct),$t=ct)},reset:function(){K=!1,Ue=null,re=null,xe=null,Ie=null,Oe=null,ot=null,Mt=null,$t=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,S=null,y=null,v=null,C=null,w=new We(0,0,0),A=0,P=!1,O=null,_=null,M=null,F=null,H=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,E=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=E>=1):V.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=E>=2);let B=null,j={};const X=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),I=new pt().fromArray(X),k=new pt().fromArray(Q);function G(K,Ue,re,xe){const Ie=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(K,Oe),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<re;ot++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Ue+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Oe}const $={};$[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(i.DEPTH_TEST),r.setFunc(gs),ae(!1),le(Qu),te(i.CULL_FACE),T(Mi);function te(K){l[K]!==!0&&(i.enable(K),l[K]=!0)}function ee(K){l[K]!==!1&&(i.disable(K),l[K]=!1)}function se(K,Ue){return u[K]!==Ue?(i.bindFramebuffer(K,Ue),u[K]=Ue,K===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ue),K===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ne(K,Ue){let re=d,xe=!1;if(K){re=h.get(Ue),re===void 0&&(re=[],h.set(Ue,re));const Ie=K.textures;if(re.length!==Ie.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,ot=Ie.length;Oe<ot;Oe++)re[Oe]=i.COLOR_ATTACHMENT0+Oe;re.length=Ie.length,xe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,xe=!0);xe&&i.drawBuffers(re)}function de(K){return f!==K?(i.useProgram(K),f=K,!0):!1}const he={[Gi]:i.FUNC_ADD,[nm]:i.FUNC_SUBTRACT,[im]:i.FUNC_REVERSE_SUBTRACT};he[sm]=i.MIN,he[rm]=i.MAX;const Z={[om]:i.ZERO,[am]:i.ONE,[cm]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[pm]:i.SRC_ALPHA_SATURATE,[dm]:i.DST_COLOR,[um]:i.DST_ALPHA,[lm]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[fm]:i.ONE_MINUS_DST_COLOR,[hm]:i.ONE_MINUS_DST_ALPHA,[mm]:i.CONSTANT_COLOR,[gm]:i.ONE_MINUS_CONSTANT_COLOR,[_m]:i.CONSTANT_ALPHA,[xm]:i.ONE_MINUS_CONSTANT_ALPHA};function T(K,Ue,re,xe,Ie,Oe,ot,Mt,$t,ct){if(K===Mi){g===!0&&(ee(i.BLEND),g=!1);return}if(g===!1&&(te(i.BLEND),g=!0),K!==tm){if(K!==x||ct!==P){if((p!==Gi||y!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,y=Gi),ct)switch(K){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}m=null,S=null,v=null,C=null,w.set(0,0,0),A=0,x=K,P=ct}return}Ie=Ie||Ue,Oe=Oe||re,ot=ot||xe,(Ue!==p||Ie!==y)&&(i.blendEquationSeparate(he[Ue],he[Ie]),p=Ue,y=Ie),(re!==m||xe!==S||Oe!==v||ot!==C)&&(i.blendFuncSeparate(Z[re],Z[xe],Z[Oe],Z[ot]),m=re,S=xe,v=Oe,C=ot),(Mt.equals(w)===!1||$t!==A)&&(i.blendColor(Mt.r,Mt.g,Mt.b,$t),w.copy(Mt),A=$t),x=K,P=!1}function ce(K,Ue){K.side===Zt?ee(i.CULL_FACE):te(i.CULL_FACE);let re=K.side===jt;Ue&&(re=!re),ae(re),K.blending===ms&&K.transparent===!1?T(Mi):T(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),r.setFunc(K.depthFunc),r.setTest(K.depthTest),r.setMask(K.depthWrite),s.setMask(K.colorWrite);const xe=K.stencilWrite;o.setTest(xe),xe&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Te(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(K){O!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),O=K)}function le(K){K!==Qp?(te(i.CULL_FACE),K!==_&&(K===Qu?i.cullFace(i.BACK):K===em?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),_=K}function Me(K){K!==M&&(q&&i.lineWidth(K),M=K)}function Te(K,Ue,re){K?(te(i.POLYGON_OFFSET_FILL),(F!==Ue||H!==re)&&(i.polygonOffset(Ue,re),F=Ue,H=re)):ee(i.POLYGON_OFFSET_FILL)}function Ee(K){K?te(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function L(K){K===void 0&&(K=i.TEXTURE0+D-1),B!==K&&(i.activeTexture(K),B=K)}function b(K,Ue,re){re===void 0&&(B===null?re=i.TEXTURE0+D-1:re=B);let xe=j[re];xe===void 0&&(xe={type:void 0,texture:void 0},j[re]=xe),(xe.type!==K||xe.texture!==Ue)&&(B!==re&&(i.activeTexture(re),B=re),i.bindTexture(K,Ue||$[K]),xe.type=K,xe.texture=Ue)}function J(){const K=j[B];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ke(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ge(K){I.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),I.copy(K))}function Fe(K){k.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),k.copy(K))}function Ke(K,Ue){let re=c.get(Ue);re===void 0&&(re=new WeakMap,c.set(Ue,re));let xe=re.get(K);xe===void 0&&(xe=i.getUniformBlockIndex(Ue,K.name),re.set(K,xe))}function Ve(K,Ue){const xe=c.get(Ue).get(K);a.get(Ue)!==xe&&(i.uniformBlockBinding(Ue,xe,K.__bindingPointIndex),a.set(Ue,xe))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},B=null,j={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,S=null,y=null,v=null,C=null,w=new We(0,0,0),A=0,P=!1,O=null,_=null,M=null,F=null,H=null,I.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:te,disable:ee,bindFramebuffer:se,drawBuffers:ne,useProgram:de,setBlending:T,setMaterial:ce,setFlipSided:ae,setCullFace:le,setLineWidth:Me,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:L,bindTexture:b,unbindTexture:J,compressedTexImage2D:ie,compressedTexImage3D:me,texImage2D:Re,texImage3D:ze,updateUBOMapping:Ke,uniformBlockBinding:Ve,texStorage2D:ke,texStorage3D:_e,texSubImage2D:oe,texSubImage3D:Pe,compressedTexSubImage2D:ve,compressedTexSubImage3D:ge,scissor:Ge,viewport:Fe,reset:ht}}function Ed(i,e,t,n){const s=Tv(n);switch(t){case dh:return i*e;case ph:return i*e;case mh:return i*e*2;case uc:return i*e/s.components*s.byteLength;case hc:return i*e/s.components*s.byteLength;case gh:return i*e*2/s.components*s.byteLength;case dc:return i*e*2/s.components*s.byteLength;case fh:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case fc:return i*e*4/s.components*s.byteLength;case So:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:case _c:return Math.max(i,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(i,8)*Math.max(e,8)/2;case xc:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ao:case Uc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _h:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tv(i){switch(i){case ai:case lh:return{byteLength:1,components:1};case xr:case uh:case vr:return{byteLength:2,components:1};case cc:case lc:return{byteLength:2,components:4};case Vi:case ac:case Dn:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):wr("canvas")}function x(L,b,J){let ie=1;const me=Ee(L);if((me.width>J||me.height>J)&&(ie=J/Math.max(me.width,me.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(ie*me.width),Pe=Math.floor(ie*me.height);h===void 0&&(h=g(oe,Pe));const ve=b?g(oe,Pe):h;return ve.width=oe,ve.height=Pe,ve.getContext("2d").drawImage(L,0,0,oe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+oe+"x"+Pe+")."),ve}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function p(L){return L.generateMipmaps&&L.minFilter!==cn&&L.minFilter!==_n}function m(L){i.generateMipmap(L)}function S(L,b,J,ie,me=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=b;if(b===i.RED&&(J===i.FLOAT&&(oe=i.R32F),J===i.HALF_FLOAT&&(oe=i.R16F),J===i.UNSIGNED_BYTE&&(oe=i.R8)),b===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.R8UI),J===i.UNSIGNED_SHORT&&(oe=i.R16UI),J===i.UNSIGNED_INT&&(oe=i.R32UI),J===i.BYTE&&(oe=i.R8I),J===i.SHORT&&(oe=i.R16I),J===i.INT&&(oe=i.R32I)),b===i.RG&&(J===i.FLOAT&&(oe=i.RG32F),J===i.HALF_FLOAT&&(oe=i.RG16F),J===i.UNSIGNED_BYTE&&(oe=i.RG8)),b===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.RG8UI),J===i.UNSIGNED_SHORT&&(oe=i.RG16UI),J===i.UNSIGNED_INT&&(oe=i.RG32UI),J===i.BYTE&&(oe=i.RG8I),J===i.SHORT&&(oe=i.RG16I),J===i.INT&&(oe=i.RG32I)),b===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),J===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),J===i.UNSIGNED_INT&&(oe=i.RGB32UI),J===i.BYTE&&(oe=i.RGB8I),J===i.SHORT&&(oe=i.RGB16I),J===i.INT&&(oe=i.RGB32I)),b===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),J===i.UNSIGNED_INT&&(oe=i.RGBA32UI),J===i.BYTE&&(oe=i.RGBA8I),J===i.SHORT&&(oe=i.RGBA16I),J===i.INT&&(oe=i.RGBA32I)),b===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),b===i.RGBA){const Pe=me?Co:dt.getTransfer(ie);J===i.FLOAT&&(oe=i.RGBA32F),J===i.HALF_FLOAT&&(oe=i.RGBA16F),J===i.UNSIGNED_BYTE&&(oe=Pe===bt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(L,b){let J;return L?b===null||b===Vi||b===vs?J=i.DEPTH24_STENCIL8:b===Dn?J=i.DEPTH32F_STENCIL8:b===xr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vi||b===vs?J=i.DEPTH_COMPONENT24:b===Dn?J=i.DEPTH_COMPONENT32F:b===xr&&(J=i.DEPTH_COMPONENT16),J}function v(L,b){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==cn&&L.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function C(L){const b=L.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&u.delete(b)}function w(L){const b=L.target;b.removeEventListener("dispose",w),O(b)}function A(L){const b=n.get(L);if(b.__webglInit===void 0)return;const J=L.source,ie=d.get(J);if(ie){const me=ie[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&P(L),Object.keys(ie).length===0&&d.delete(J)}n.remove(L)}function P(L){const b=n.get(L);i.deleteTexture(b.__webglTexture);const J=L.source,ie=d.get(J);delete ie[b.__cacheKey],o.memory.textures--}function O(L){const b=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let me=0;me<b.__webglFramebuffer[ie].length;me++)i.deleteFramebuffer(b.__webglFramebuffer[ie][me]);else i.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)i.deleteFramebuffer(b.__webglFramebuffer[ie]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=L.textures;for(let ie=0,me=J.length;ie<me;ie++){const oe=n.get(J[ie]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(J[ie])}n.remove(L)}let _=0;function M(){_=0}function F(){const L=_;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),_+=1,L}function H(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function D(L,b){const J=n.get(L);if(L.isVideoTexture&&Me(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(J,L,b);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+b)}function q(L,b){const J=n.get(L);if(L.version>0&&J.__version!==L.version){k(J,L,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+b)}function E(L,b){const J=n.get(L);if(L.version>0&&J.__version!==L.version){k(J,L,b);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+b)}function V(L,b){const J=n.get(L);if(L.version>0&&J.__version!==L.version){G(J,L,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+b)}const B={[bi]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},j={[cn]:i.NEAREST,[ch]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},X={[Om]:i.NEVER,[Gm]:i.ALWAYS,[Fm]:i.LESS,[Mh]:i.LEQUAL,[Bm]:i.EQUAL,[Hm]:i.GEQUAL,[km]:i.GREATER,[zm]:i.NOTEQUAL};function Q(L,b){if(b.type===Dn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===Mo||b.magFilter===_r||b.magFilter===oi||b.minFilter===_n||b.minFilter===Mo||b.minFilter===_r||b.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,B[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,B[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,B[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,j[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,j[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==_r&&b.minFilter!==oi||b.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function I(L,b){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",C));const ie=b.source;let me=d.get(ie);me===void 0&&(me={},d.set(ie,me));const oe=H(b);if(oe!==L.__cacheKey){me[oe]===void 0&&(me[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),me[oe].usedTimes++;const Pe=me[L.__cacheKey];Pe!==void 0&&(me[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&P(b)),L.__cacheKey=oe,L.__webglTexture=me[oe].texture}return J}function k(L,b,J){let ie=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=i.TEXTURE_3D);const me=I(L,b),oe=b.source;t.bindTexture(ie,L.__webglTexture,i.TEXTURE0+J);const Pe=n.get(oe);if(oe.version!==Pe.__version||me===!0){t.activeTexture(i.TEXTURE0+J);const ve=dt.getPrimaries(dt.workingColorSpace),ge=b.colorSpace===Ei?null:dt.getPrimaries(b.colorSpace),ke=b.colorSpace===Ei||ve===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let _e=x(b.image,!1,s.maxTextureSize);_e=Te(b,_e);const Re=r.convert(b.format,b.colorSpace),ze=r.convert(b.type);let Ge=S(b.internalFormat,Re,ze,b.colorSpace,b.isVideoTexture);Q(ie,b);let Fe;const Ke=b.mipmaps,Ve=b.isVideoTexture!==!0,ht=Pe.__version===void 0||me===!0,K=oe.dataReady,Ue=v(b,_e);if(b.isDepthTexture)Ge=y(b.format===Ms,b.type),ht&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ge,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ge,_e.width,_e.height,0,Re,ze,null));else if(b.isDataTexture)if(Ke.length>0){Ve&&ht&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,Ke[0].width,Ke[0].height);for(let re=0,xe=Ke.length;re<xe;re++)Fe=Ke[re],Ve?K&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Re,ze,Fe.data):t.texImage2D(i.TEXTURE_2D,re,Ge,Fe.width,Fe.height,0,Re,ze,Fe.data);b.generateMipmaps=!1}else Ve?(ht&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,_e.width,_e.height),K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Re,ze,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,_e.width,_e.height,0,Re,ze,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ge,Ke[0].width,Ke[0].height,_e.depth);for(let re=0,xe=Ke.length;re<xe;re++)if(Fe=Ke[re],b.format!==Tn)if(Re!==null)if(Ve){if(K)if(b.layerUpdates.size>0){const Ie=Ed(Fe.width,Fe.height,b.format,b.type);for(const Oe of b.layerUpdates){const ot=Fe.data.subarray(Oe*Ie/Fe.data.BYTES_PER_ELEMENT,(Oe+1)*Ie/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Oe,Fe.width,Fe.height,1,Re,ot,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,_e.depth,Re,Fe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ge,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,_e.depth,Re,ze,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ge,Fe.width,Fe.height,_e.depth,0,Re,ze,Fe.data)}else{Ve&&ht&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,Ke[0].width,Ke[0].height);for(let re=0,xe=Ke.length;re<xe;re++)Fe=Ke[re],b.format!==Tn?Re!==null?Ve?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Re,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ge,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?K&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Re,ze,Fe.data):t.texImage2D(i.TEXTURE_2D,re,Ge,Fe.width,Fe.height,0,Re,ze,Fe.data)}else if(b.isDataArrayTexture)if(Ve){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ge,_e.width,_e.height,_e.depth),K)if(b.layerUpdates.size>0){const re=Ed(_e.width,_e.height,b.format,b.type);for(const xe of b.layerUpdates){const Ie=_e.data.subarray(xe*re/_e.data.BYTES_PER_ELEMENT,(xe+1)*re/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,_e.width,_e.height,1,Re,ze,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,ze,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,_e.width,_e.height,_e.depth,0,Re,ze,_e.data);else if(b.isData3DTexture)Ve?(ht&&t.texStorage3D(i.TEXTURE_3D,Ue,Ge,_e.width,_e.height,_e.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,ze,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,_e.width,_e.height,_e.depth,0,Re,ze,_e.data);else if(b.isFramebufferTexture){if(ht)if(Ve)t.texStorage2D(i.TEXTURE_2D,Ue,Ge,_e.width,_e.height);else{let re=_e.width,xe=_e.height;for(let Ie=0;Ie<Ue;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ge,re,xe,0,Re,ze,null),re>>=1,xe>>=1}}else if(Ke.length>0){if(Ve&&ht){const re=Ee(Ke[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ge,re.width,re.height)}for(let re=0,xe=Ke.length;re<xe;re++)Fe=Ke[re],Ve?K&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Re,ze,Fe):t.texImage2D(i.TEXTURE_2D,re,Ge,Re,ze,Fe);b.generateMipmaps=!1}else if(Ve){if(ht){const re=Ee(_e);t.texStorage2D(i.TEXTURE_2D,Ue,Ge,re.width,re.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,ze,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Re,ze,_e);p(b)&&m(ie),Pe.__version=oe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function G(L,b,J){if(b.image.length!==6)return;const ie=I(L,b),me=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const oe=n.get(me);if(me.version!==oe.__version||ie===!0){t.activeTexture(i.TEXTURE0+J);const Pe=dt.getPrimaries(dt.workingColorSpace),ve=b.colorSpace===Ei?null:dt.getPrimaries(b.colorSpace),ge=b.colorSpace===Ei||Pe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ke=b.isCompressedTexture||b.image[0].isCompressedTexture,_e=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let xe=0;xe<6;xe++)!ke&&!_e?Re[xe]=x(b.image[xe],!0,s.maxCubemapSize):Re[xe]=_e?b.image[xe].image:b.image[xe],Re[xe]=Te(b,Re[xe]);const ze=Re[0],Ge=r.convert(b.format,b.colorSpace),Fe=r.convert(b.type),Ke=S(b.internalFormat,Ge,Fe,b.colorSpace),Ve=b.isVideoTexture!==!0,ht=oe.__version===void 0||ie===!0,K=me.dataReady;let Ue=v(b,ze);Q(i.TEXTURE_CUBE_MAP,b);let re;if(ke){Ve&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Ke,ze.width,ze.height);for(let xe=0;xe<6;xe++){re=Re[xe].mipmaps;for(let Ie=0;Ie<re.length;Ie++){const Oe=re[Ie];b.format!==Tn?Ge!==null?Ve?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,Oe.width,Oe.height,Ge,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,Ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,0,0,Oe.width,Oe.height,Ge,Fe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie,Ke,Oe.width,Oe.height,0,Ge,Fe,Oe.data)}}}else{if(re=b.mipmaps,Ve&&ht){re.length>0&&Ue++;const xe=Ee(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Ke,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(_e){Ve?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Re[xe].width,Re[xe].height,Ge,Fe,Re[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ke,Re[xe].width,Re[xe].height,0,Ge,Fe,Re[xe].data);for(let Ie=0;Ie<re.length;Ie++){const ot=re[Ie].image[xe].image;Ve?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,ot.width,ot.height,Ge,Fe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,Ke,ot.width,ot.height,0,Ge,Fe,ot.data)}}else{Ve?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ge,Fe,Re[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ke,Ge,Fe,Re[xe]);for(let Ie=0;Ie<re.length;Ie++){const Oe=re[Ie];Ve?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,0,0,Ge,Fe,Oe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie+1,Ke,Ge,Fe,Oe.image[xe])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),oe.__version=me.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function $(L,b,J,ie,me,oe){const Pe=r.convert(J.format,J.colorSpace),ve=r.convert(J.type),ge=S(J.internalFormat,Pe,ve,J.colorSpace);if(!n.get(b).__hasExternalTextures){const _e=Math.max(1,b.width>>oe),Re=Math.max(1,b.height>>oe);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,oe,ge,_e,Re,b.depth,0,Pe,ve,null):t.texImage2D(me,oe,ge,_e,Re,0,Pe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,me,n.get(J).__webglTexture,0,ae(b)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,me,n.get(J).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(L,b,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){const ie=b.depthTexture,me=ie&&ie.isDepthTexture?ie.type:null,oe=y(b.stencilBuffer,me),Pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=ae(b);le(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,oe,b.width,b.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,oe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,oe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,L)}else{const ie=b.textures;for(let me=0;me<ie.length;me++){const oe=ie[me],Pe=r.convert(oe.format,oe.colorSpace),ve=r.convert(oe.type),ge=S(oe.internalFormat,Pe,ve,oe.colorSpace),ke=ae(b);J&&le(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,ge,b.width,b.height):le(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,ge,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ge,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);const ie=n.get(b.depthTexture).__webglTexture,me=ae(b);if(b.depthTexture.format===ys)le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Ms)le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function se(L){const b=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",me)};ie.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=ie}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ee(b.__webglFramebuffer,L)}else if(J){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=i.createRenderbuffer(),te(b.__webglDepthbuffer[ie],L,!1);else{const me=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),te(b.__webglDepthbuffer,L,!1);else{const ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(L,b,J){const ie=n.get(L);b!==void 0&&$(ie.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&se(L)}function de(L){const b=L.texture,J=n.get(L),ie=n.get(b);L.addEventListener("dispose",w);const me=L.textures,oe=L.isWebGLCubeRenderTarget===!0,Pe=me.length>1;if(Pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=b.version,o.memory.textures++),oe){J.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ve]=[];for(let ge=0;ge<b.mipmaps.length;ge++)J.__webglFramebuffer[ve][ge]=i.createFramebuffer()}else J.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)J.__webglFramebuffer[ve]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ve=0,ge=me.length;ve<ge;ve++){const ke=n.get(me[ve]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&le(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ve=0;ve<me.length;ve++){const ge=me[ve];J.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ve]);const ke=r.convert(ge.format,ge.colorSpace),_e=r.convert(ge.type),Re=S(ge.internalFormat,ke,_e,ge.colorSpace,L.isXRRenderTarget===!0),ze=ae(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Re,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,J.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),te(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Q(i.TEXTURE_CUBE_MAP,b);for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)$(J.__webglFramebuffer[ve][ge],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ge);else $(J.__webglFramebuffer[ve],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ve=0,ge=me.length;ve<ge;ve++){const ke=me[ve],_e=n.get(ke);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Q(i.TEXTURE_2D,ke),$(J.__webglFramebuffer,L,ke,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),p(ke)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ie.__webglTexture),Q(ve,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)$(J.__webglFramebuffer[ge],L,b,i.COLOR_ATTACHMENT0,ve,ge);else $(J.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,ve,0);p(b)&&m(ve),t.unbindTexture()}L.depthBuffer&&se(L)}function he(L){const b=L.textures;for(let J=0,ie=b.length;J<ie;J++){const me=b[J];if(p(me)){const oe=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(me).__webglTexture;t.bindTexture(oe,Pe),m(oe),t.unbindTexture()}}}const Z=[],T=[];function ce(L){if(L.samples>0){if(le(L)===!1){const b=L.textures,J=L.width,ie=L.height;let me=i.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(L),ve=b.length>1;if(ve)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ge]);const ke=n.get(b[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,J,ie,0,0,J,ie,me,i.NEAREST),c===!0&&(Z.length=0,T.length=0,Z.push(i.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Z.push(oe),T.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ge]);const ke=n.get(b[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ae(L){return Math.min(s.maxSamples,L.samples)}function le(L){const b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(L){const b=o.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function Te(L,b){const J=L.colorSpace,ie=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Jt&&J!==Ei&&(dt.getTransfer(J)===bt?(ie!==Tn||me!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function Ee(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=D,this.setTexture2DArray=q,this.setTexture3D=E,this.setTextureCube=V,this.rebindTextures=ne,this.setupRenderTarget=de,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=$,this.useMultisampledRTT=le}function Cv(i,e){function t(n,s=Ei){let r;const o=dt.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return i.BYTE;if(n===uh)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===fh)return i.RGB;if(n===Tn)return i.RGBA;if(n===ph)return i.LUMINANCE;if(n===mh)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===hc)return i.RED_INTEGER;if(n===gh)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===So||n===bo||n===wo||n===Eo)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===_c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===vc||n===yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xc||n===vc)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===Sc||n===bc||n===wc||n===Ec||n===Ac||n===Tc||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Nc||n===Dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Uc||n===Oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===Fc||n===Bc||n===kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Pv extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class st extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iv={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nv=`
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

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:Lv,fragmentShader:Nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uv extends Wi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=new Dv,p=t.getContextAttributes();let m=null,S=null;const y=[],v=[],C=new Se;let w=null;const A=new kt;A.layers.enable(1),A.viewport=new pt;const P=new kt;P.layers.enable(2),P.viewport=new pt;const O=[A,P],_=new Pv;_.layers.enable(1),_.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=y[G];return $===void 0&&($=new bl,y[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=y[G];return $===void 0&&($=new bl,y[G]=$),$.getGripSpace()},this.getHand=function(G){let $=y[G];return $===void 0&&($=new bl,y[G]=$),$.getHandSpace()};function H(G){const $=v.indexOf(G.inputSource);if($===-1)return;const te=y[$];te!==void 0&&(te.update(G.inputSource,G.frame,l||o),te.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",q);for(let G=0;G<y.length;G++){const $=v[G];$!==null&&(v[G]=null,y[G].disconnect($))}M=null,F=null,x.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,S=null,k.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",D),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new qi(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,te=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=p.stencil?Ms:ys,te=p.stencil?vs:Vi);const se={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new qi(d.textureWidth,d.textureHeight,{format:Tn,type:ai,depthTexture:new sd(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(G){for(let $=0;$<G.removed.length;$++){const te=G.removed[$],ee=v.indexOf(te);ee>=0&&(v[ee]=null,y[ee].disconnect(te))}for(let $=0;$<G.added.length;$++){const te=G.added[$];let ee=v.indexOf(te);if(ee===-1){for(let ne=0;ne<y.length;ne++)if(ne>=v.length){v.push(te),ee=ne;break}else if(v[ne]===null){v[ne]=te,ee=ne;break}if(ee===-1)break}const se=y[ee];se&&se.connect(te)}}const E=new U,V=new U;function B(G,$,te){E.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(te.matrixWorld);const ee=E.distanceTo(V),se=$.projectionMatrix.elements,ne=te.projectionMatrix.elements,de=se[14]/(se[10]-1),he=se[14]/(se[10]+1),Z=(se[9]+1)/se[5],T=(se[9]-1)/se[5],ce=(se[8]-1)/se[0],ae=(ne[8]+1)/ne[0],le=de*ce,Me=de*ae,Te=ee/(-ce+ae),Ee=Te*-ce;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ee),G.translateZ(Te),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),se[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const L=de+Te,b=he+Te,J=le-Ee,ie=Me+(ee-Ee),me=Z*he/b*L,oe=T*he/b*L;G.projectionMatrix.makePerspective(J,ie,me,oe,L,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function j(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let $=G.near,te=G.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(te=x.depthFar)),_.near=P.near=A.near=$,_.far=P.far=A.far=te,(M!==_.near||F!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,F=_.far);const ee=G.parent,se=_.cameras;j(_,ee);for(let ne=0;ne<se.length;ne++)j(se[ne],ee);se.length===2?B(_,A,P):_.projectionMatrix.copy(A.projectionMatrix),X(G,_,ee)};function X(G,$,te){te===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(te.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Es*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Q=null;function I(G,$){if(u=$.getViewerPose(l||o),g=$,u!==null){const te=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ee=!1;te.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let ne=0;ne<te.length;ne++){const de=te[ne];let he=null;if(f!==null)he=f.getViewport(de);else{const T=h.getViewSubImage(d,de);he=T.viewport,ne===0&&(e.setRenderTargetTextures(S,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(S))}let Z=O[ne];Z===void 0&&(Z=new kt,Z.layers.enable(ne),Z.viewport=new pt,O[ne]=Z),Z.matrix.fromArray(de.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(de.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(he.x,he.y,he.width,he.height),ne===0&&(_.matrix.copy(Z.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ee===!0&&_.cameras.push(Z)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")){const ne=h.getDepthInformation(te[0]);ne&&ne.isValid&&ne.texture&&x.init(e,ne,s.renderState)}}for(let te=0;te<y.length;te++){const ee=v[te],se=y[te];ee!==null&&se!==void 0&&se.update(ee,$,l||o)}Q&&Q(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const k=new Zh;k.setAnimationLoop(I),this.setAnimationLoop=function(G){Q=G},this.dispose=function(){}}}const ts=new Yt,Ov=new $e;function Fv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,S,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,v=S.envMapRotation;y&&(p.envMap.value=y,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),p.envMapRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(ts)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function l(S,y){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",p));const C=y.program;n.updateUBOMapping(S,C);const w=e.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function u(S){const y=h();S.__bindingPointIndex=y;const v=i.createBuffer(),C=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],v=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let O=0,_=P.length;O<_;O++){const M=P[O];if(f(M,w,O,C)===!0){const F=M.__offset,H=Array.isArray(M.value)?M.value:[M.value];let D=0;for(let q=0;q<H.length;q++){const E=H[q],V=x(E);typeof E=="number"||typeof E=="boolean"?(M.__data[0]=E,i.bufferSubData(i.UNIFORM_BUFFER,F+D,M.__data)):E.isMatrix3?(M.__data[0]=E.elements[0],M.__data[1]=E.elements[1],M.__data[2]=E.elements[2],M.__data[3]=0,M.__data[4]=E.elements[3],M.__data[5]=E.elements[4],M.__data[6]=E.elements[5],M.__data[7]=0,M.__data[8]=E.elements[6],M.__data[9]=E.elements[7],M.__data[10]=E.elements[8],M.__data[11]=0):(E.toArray(M.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,v,C){const w=S.value,A=y+"_"+v;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const P=C[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(S){const y=S.uniforms;let v=0;const C=16;for(let A=0,P=y.length;A<P;A++){const O=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,M=O.length;_<M;_++){const F=O[_],H=Array.isArray(F.value)?F.value:[F.value];for(let D=0,q=H.length;D<q;D++){const E=H[D],V=x(E),B=v%C,j=B%V.boundary,X=B+j;v+=j,X!==0&&C-X<V.storage&&(v+=C-X),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=V.storage}}}const w=v%C;return w>0&&(v+=C-w),S.__size=v,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class kv{constructor(e={}){const{canvas:t=o0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=Si,this.toneMappingExposure=1;const y=this;let v=!1,C=0,w=0,A=null,P=-1,O=null;const _=new pt,M=new pt;let F=null;const H=new We(0);let D=0,q=t.width,E=t.height,V=1,B=null,j=null;const X=new pt(0,0,q,E),Q=new pt(0,0,q,E);let I=!1;const k=new fl;let G=!1,$=!1;const te=new $e,ee=new $e,se=new U,ne=new pt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Z(){return A===null?V:1}let T=n;function ce(R,N){return t.getContext(R,N)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$a}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),T===null){const N="webgl2";if(T=ce(N,R),T===null)throw ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,le,Me,Te,Ee,L,b,J,ie,me,oe,Pe,ve,ge,ke,_e,Re,ze,Ge,Fe,Ke,Ve,ht,K;function Ue(){ae=new W_(T),ae.init(),Ve=new Cv(T,ae),le=new B_(T,ae,e,Ve),Me=new Av(T),le.reverseDepthBuffer&&Me.buffers.depth.setReversed(!0),Te=new Y_(T),Ee=new hv,L=new Rv(T,ae,Me,Ee,le,Ve,Te),b=new z_(y),J=new V_(y),ie=new D0(T),ht=new O_(T,ie),me=new X_(T,ie,Te,ht),oe=new $_(T,me,ie,Te),Ge=new K_(T,le,L),_e=new k_(Ee),Pe=new uv(y,b,J,ae,le,ht,_e),ve=new Fv(y,Ee),ge=new fv,ke=new vv(ae),ze=new U_(y,b,J,Me,oe,d,c),Re=new wv(y,oe,le),K=new Bv(T,Te,le,Me),Fe=new F_(T,ae,Te),Ke=new q_(T,ae,Te),Te.programs=Pe.programs,y.capabilities=le,y.extensions=ae,y.properties=Ee,y.renderLists=ge,y.shadowMap=Re,y.state=Me,y.info=Te}Ue();const re=new Uv(y,T);this.xr=re,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(q,E,!1))},this.getSize=function(R){return R.set(q,E)},this.setSize=function(R,N,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,E=N,t.width=Math.floor(R*V),t.height=Math.floor(N*V),z===!0&&(t.style.width=R+"px",t.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(q*V,E*V).floor()},this.setDrawingBufferSize=function(R,N,z){q=R,E=N,V=z,t.width=Math.floor(R*z),t.height=Math.floor(N*z),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,N,z,Y){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,N,z,Y),Me.viewport(_.copy(X).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,N,z,Y){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,N,z,Y),Me.scissor(M.copy(Q).multiplyScalar(V).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(R){Me.setScissorTest(I=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,N=!0,z=!0){let Y=0;if(R){let W=!1;if(A!==null){const ue=A.texture.format;W=ue===fc||ue===dc||ue===hc}if(W){const ue=A.texture.type,ye=ue===ai||ue===Vi||ue===xr||ue===vs||ue===cc||ue===lc,fe=ze.getClearColor(),we=ze.getClearAlpha(),Ae=fe.r,De=fe.g,Ce=fe.b;ye?(f[0]=Ae,f[1]=De,f[2]=Ce,f[3]=we,T.clearBufferuiv(T.COLOR,0,f)):(g[0]=Ae,g[1]=De,g[2]=Ce,g[3]=we,T.clearBufferiv(T.COLOR,0,g))}else Y|=T.COLOR_BUFFER_BIT}N&&(Y|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(Y|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),ge.dispose(),ke.dispose(),Ee.dispose(),b.dispose(),J.dispose(),oe.dispose(),ht.dispose(),K.dispose(),Pe.dispose(),re.dispose(),re.removeEventListener("sessionstart",He),re.removeEventListener("sessionend",lt),it.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=Te.autoReset,N=Re.enabled,z=Re.autoUpdate,Y=Re.needsUpdate,W=Re.type;Ue(),Te.autoReset=R,Re.enabled=N,Re.autoUpdate=z,Re.needsUpdate=Y,Re.type=W}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const N=R.target;N.removeEventListener("dispose",ot),Mt(N)}function Mt(R){$t(R),Ee.remove(R)}function $t(R){const N=Ee.get(R).programs;N!==void 0&&(N.forEach(function(z){Pe.releaseProgram(z)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,z,Y,W,ue){N===null&&(N=de);const ye=W.isMesh&&W.matrixWorld.determinant()<0,fe=ps(R,N,z,Y,W);Me.setMaterial(Y,ye);let we=z.index,Ae=1;if(Y.wireframe===!0){if(we=me.getWireframeAttribute(z),we===void 0)return;Ae=2}const De=z.drawRange,Ce=z.attributes.position;let je=De.start*Ae,qe=(De.start+De.count)*Ae;ue!==null&&(je=Math.max(je,ue.start*Ae),qe=Math.min(qe,(ue.start+ue.count)*Ae)),we!==null?(je=Math.max(je,0),qe=Math.min(qe,we.count)):Ce!=null&&(je=Math.max(je,0),qe=Math.min(qe,Ce.count));const nt=qe-je;if(nt<0||nt===1/0)return;ht.setup(W,Y,fe,z,we);let xt,Je=Fe;if(we!==null&&(xt=ie.get(we),Je=Ke,Je.setIndex(xt)),W.isMesh)Y.wireframe===!0?(Me.setLineWidth(Y.wireframeLinewidth*Z()),Je.setMode(T.LINES)):Je.setMode(T.TRIANGLES);else if(W.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),Me.setLineWidth(Be*Z()),W.isLineSegments?Je.setMode(T.LINES):W.isLineLoop?Je.setMode(T.LINE_LOOP):Je.setMode(T.LINE_STRIP)}else W.isPoints?Je.setMode(T.POINTS):W.isSprite&&Je.setMode(T.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Je.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Be=W._multiDrawStarts,Tt=W._multiDrawCounts,at=W._multiDrawCount,gn=we?ie.get(we).bytesPerElement:1,yi=Ee.get(Y).currentProgram.getUniforms();for(let An=0;An<at;An++)yi.setValue(T,"_gl_DrawID",An),Je.render(Be[An]/gn,Tt[An])}else if(W.isInstancedMesh)Je.renderInstances(je,nt,W.count);else if(z.isInstancedBufferGeometry){const Be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Tt=Math.min(z.instanceCount,Be);Je.renderInstances(je,nt,Tt)}else Je.render(je,nt)};function ct(R,N,z){R.transparent===!0&&R.side===Zt&&R.forceSinglePass===!1?(R.side=jt,R.needsUpdate=!0,dn(R,N,z),R.side=si,R.needsUpdate=!0,dn(R,N,z),R.side=Zt):dn(R,N,z)}this.compile=function(R,N,z=null){z===null&&(z=R),p=ke.get(z),p.init(N),S.push(p),z.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),R!==z&&R.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const Y=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ue=W.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const fe=ue[ye];ct(fe,z,W),Y.add(fe)}else ct(ue,z,W),Y.add(ue)}),S.pop(),p=null,Y},this.compileAsync=function(R,N,z=null){const Y=this.compile(R,N,z);return new Promise(W=>{function ue(){if(Y.forEach(function(ye){Ee.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){W(R);return}setTimeout(ue,10)}ae.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Wt=null;function be(R){Wt&&Wt(R)}function He(){it.stop()}function lt(){it.start()}const it=new Zh;it.setAnimationLoop(be),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(R){Wt=R,re.setAnimationLoop(R),R===null?it.stop():it.start()},re.addEventListener("sessionstart",He),re.addEventListener("sessionend",lt),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,N,A),p=ke.get(R,S.length),p.init(N),S.push(p),ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),k.setFromProjectionMatrix(ee),$=this.localClippingEnabled,G=_e.init(this.clippingPlanes,$),x=ge.get(R,m.length),x.init(),m.push(x),re.enabled===!0&&re.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&At(ue,N,-1/0,y.sortObjects)}At(R,N,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(B,j),he=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,he&&ze.addToRenderList(x,R),this.info.render.frame++,G===!0&&_e.beginShadows();const z=p.state.shadowsArray;Re.render(z,R,N),G===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,W=x.transmissive;if(p.setupLights(),N.isArrayCamera){const ue=N.cameras;if(W.length>0)for(let ye=0,fe=ue.length;ye<fe;ye++){const we=ue[ye];mn(Y,W,R,we)}he&&ze.render(R);for(let ye=0,fe=ue.length;ye<fe;ye++){const we=ue[ye];Xt(x,R,we,we.viewport)}}else W.length>0&&mn(Y,W,R,N),he&&ze.render(R),Xt(x,R,N);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(y,R,N),ht.resetDefaultState(),P=-1,O=null,S.pop(),S.length>0?(p=S[S.length-1],G===!0&&_e.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function At(R,N,z,Y){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||k.intersectsSprite(R)){Y&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const ye=oe.update(R),fe=R.material;fe.visible&&x.push(R,ye,fe,z,ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||k.intersectsObject(R))){const ye=oe.update(R),fe=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ne.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ne.copy(ye.boundingSphere.center)),ne.applyMatrix4(R.matrixWorld).applyMatrix4(ee)),Array.isArray(fe)){const we=ye.groups;for(let Ae=0,De=we.length;Ae<De;Ae++){const Ce=we[Ae],je=fe[Ce.materialIndex];je&&je.visible&&x.push(R,ye,je,z,ne.z,Ce)}}else fe.visible&&x.push(R,ye,fe,z,ne.z,null)}}const ue=R.children;for(let ye=0,fe=ue.length;ye<fe;ye++)At(ue[ye],N,z,Y)}function Xt(R,N,z,Y){const W=R.opaque,ue=R.transmissive,ye=R.transparent;p.setupLightsView(z),G===!0&&_e.setGlobalState(y.clippingPlanes,z),Y&&Me.viewport(_.copy(Y)),W.length>0&&En(W,N,z),ue.length>0&&En(ue,N,z),ye.length>0&&En(ye,N,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function mn(R,N,z,Y){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new qi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?vr:ai,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[Y.id],ye=Y.viewport||_;ue.setSize(ye.z,ye.w);const fe=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(H),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear(),he&&ze.render(z);const we=y.toneMapping;y.toneMapping=Si;const Ae=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),G===!0&&_e.setGlobalState(y.clippingPlanes,Y),En(R,z,Y),L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue),ae.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ce=0,je=N.length;Ce<je;Ce++){const qe=N[Ce],nt=qe.object,xt=qe.geometry,Je=qe.material,Be=qe.group;if(Je.side===Zt&&nt.layers.test(Y.layers)){const Tt=Je.side;Je.side=jt,Je.needsUpdate=!0,fs(nt,z,Y,xt,Je,Be),Je.side=Tt,Je.needsUpdate=!0,De=!0}}De===!0&&(L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue))}y.setRenderTarget(fe),y.setClearColor(H,D),Ae!==void 0&&(Y.viewport=Ae),y.toneMapping=we}function En(R,N,z){const Y=N.isScene===!0?N.overrideMaterial:null;for(let W=0,ue=R.length;W<ue;W++){const ye=R[W],fe=ye.object,we=ye.geometry,Ae=Y===null?ye.material:Y,De=ye.group;fe.layers.test(z.layers)&&fs(fe,N,z,we,Ae,De)}}function fs(R,N,z,Y,W,ue){R.onBeforeRender(y,N,z,Y,W,ue),R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(y,N,z,Y,R,ue),W.transparent===!0&&W.side===Zt&&W.forceSinglePass===!1?(W.side=jt,W.needsUpdate=!0,y.renderBufferDirect(z,N,Y,W,R,ue),W.side=si,W.needsUpdate=!0,y.renderBufferDirect(z,N,Y,W,R,ue),W.side=Zt):y.renderBufferDirect(z,N,Y,W,R,ue),R.onAfterRender(y,N,z,Y,W,ue)}function dn(R,N,z){N.isScene!==!0&&(N=de);const Y=Ee.get(R),W=p.state.lights,ue=p.state.shadowsArray,ye=W.state.version,fe=Pe.getParameters(R,W.state,ue,N,z),we=Pe.getProgramCacheKey(fe);let Ae=Y.programs;Y.environment=R.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(R.isMeshStandardMaterial?J:b).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?N.environmentRotation:R.envMapRotation,Ae===void 0&&(R.addEventListener("dispose",ot),Ae=new Map,Y.programs=Ae);let De=Ae.get(we);if(De!==void 0){if(Y.currentProgram===De&&Y.lightsStateVersion===ye)return mr(R,fe),De}else fe.uniforms=Pe.getUniforms(R),R.onBeforeCompile(fe,y),De=Pe.acquireProgram(fe,we),Ae.set(we,De),Y.uniforms=fe.uniforms;const Ce=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ce.clippingPlanes=_e.uniform),mr(R,fe),Y.needsLights=xo(R),Y.lightsStateVersion=ye,Y.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.directionalShadowMap.value=W.state.directionalShadowMap,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotShadowMap.value=W.state.spotShadowMap,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMap.value=W.state.pointShadowMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=De,Y.uniformsList=null,De}function zi(R){if(R.uniformsList===null){const N=R.currentProgram.getUniforms();R.uniformsList=ta.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function mr(R,N){const z=Ee.get(R);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function ps(R,N,z,Y,W){N.isScene!==!0&&(N=de),L.resetTextureUnits();const ue=N.fog,ye=Y.isMeshStandardMaterial?N.environment:null,fe=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Jt,we=(Y.isMeshStandardMaterial?J:b).get(Y.envMap||ye),Ae=Y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ce=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,qe=!!z.morphAttributes.color;let nt=Si;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(nt=y.toneMapping);const xt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=xt!==void 0?xt.length:0,Be=Ee.get(Y),Tt=p.state.lights;if(G===!0&&($===!0||R!==O)){const Nn=R===O&&Y.id===P;_e.setState(Y,R,Nn)}let at=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Tt.state.version||Be.outputColorSpace!==fe||W.isBatchedMesh&&Be.batching===!1||!W.isBatchedMesh&&Be.batching===!0||W.isBatchedMesh&&Be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Be.instancingMorph===!1&&W.morphTexture!==null||Be.envMap!==we||Y.fog===!0&&Be.fog!==ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==_e.numPlanes||Be.numIntersection!==_e.numIntersection)||Be.vertexAlphas!==Ae||Be.vertexTangents!==De||Be.morphTargets!==Ce||Be.morphNormals!==je||Be.morphColors!==qe||Be.toneMapping!==nt||Be.morphTargetsCount!==Je)&&(at=!0):(at=!0,Be.__version=Y.version);let gn=Be.currentProgram;at===!0&&(gn=dn(Y,N,W));let yi=!1,An=!1,$u=!1;const Ft=gn.getUniforms(),Hi=Be.uniforms;if(Me.useProgram(gn.program)&&(yi=!0,An=!0,$u=!0),Y.id!==P&&(P=Y.id,An=!0),yi||O!==R){le.reverseDepthBuffer?(te.copy(R.projectionMatrix),c0(te),l0(te),Ft.setValue(T,"projectionMatrix",te)):Ft.setValue(T,"projectionMatrix",R.projectionMatrix),Ft.setValue(T,"viewMatrix",R.matrixWorldInverse);const Nn=Ft.map.cameraPosition;Nn!==void 0&&Nn.setValue(T,se.setFromMatrixPosition(R.matrixWorld)),le.logarithmicDepthBuffer&&Ft.setValue(T,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ft.setValue(T,"isOrthographic",R.isOrthographicCamera===!0),O!==R&&(O=R,An=!0,$u=!0)}if(W.isSkinnedMesh){Ft.setOptional(T,W,"bindMatrix"),Ft.setOptional(T,W,"bindMatrixInverse");const Nn=W.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Ft.setValue(T,"boneTexture",Nn.boneTexture,L))}W.isBatchedMesh&&(Ft.setOptional(T,W,"batchingTexture"),Ft.setValue(T,"batchingTexture",W._matricesTexture,L),Ft.setOptional(T,W,"batchingIdTexture"),Ft.setValue(T,"batchingIdTexture",W._indirectTexture,L),Ft.setOptional(T,W,"batchingColorTexture"),W._colorsTexture!==null&&Ft.setValue(T,"batchingColorTexture",W._colorsTexture,L));const ju=z.morphAttributes;if((ju.position!==void 0||ju.normal!==void 0||ju.color!==void 0)&&Ge.update(W,z,gn),(An||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,Ft.setValue(T,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Hi.envMap.value=we,Hi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(Hi.envMapIntensity.value=N.environmentIntensity),An&&(Ft.setValue(T,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&gr(Hi,$u),ue&&Y.fog===!0&&ve.refreshFogUniforms(Hi,ue),ve.refreshMaterialUniforms(Hi,Y,V,E,p.state.transmissionRenderTarget[R.id]),ta.upload(T,zi(Be),Hi,L)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ta.upload(T,zi(Be),Hi,L),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ft.setValue(T,"center",W.center),Ft.setValue(T,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(T,"normalMatrix",W.normalMatrix),Ft.setValue(T,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Nn=Y.uniformsGroups;for(let Zu=0,lE=Nn.length;Zu<lE;Zu++){const Jp=Nn[Zu];K.update(Jp,gn),K.bind(Jp,gn)}}return gn}function gr(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function xo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,N,z){Ee.get(R.texture).__webglTexture=N,Ee.get(R.depthTexture).__webglTexture=z;const Y=Ee.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=z===void 0,Y.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,N){const z=Ee.get(R);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,z=0){A=R,C=N,w=z;let Y=!0,W=null,ue=!1,ye=!1;if(R){const we=Ee.get(R);if(we.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(T.FRAMEBUFFER,null),Y=!1;else if(we.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(we.__hasExternalTextures)L.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ce=R.depthTexture;if(we.__boundDepthTexture!==Ce){if(Ce!==null&&Ee.has(Ce)&&(R.width!==Ce.image.width||R.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);const De=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(De[N])?W=De[N][z]:W=De[N],ue=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?W=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[z]:W=De,_.copy(R.viewport),M.copy(R.scissor),F=R.scissorTest}else _.copy(X).multiplyScalar(V).floor(),M.copy(Q).multiplyScalar(V).floor(),F=I;if(Me.bindFramebuffer(T.FRAMEBUFFER,W)&&Y&&Me.drawBuffers(R,W),Me.viewport(_),Me.scissor(M),Me.setScissorTest(F),ue){const we=Ee.get(R.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,z)}else if(ye){const we=Ee.get(R.texture),Ae=N||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,we.__webglTexture,z||0,Ae)}P=-1},this.readRenderTargetPixels=function(R,N,z,Y,W,ue,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(fe=fe[ye]),fe){Me.bindFramebuffer(T.FRAMEBUFFER,fe);try{const we=R.texture,Ae=we.format,De=we.type;if(!le.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-Y&&z>=0&&z<=R.height-W&&T.readPixels(N,z,Y,W,Ve.convert(Ae),Ve.convert(De),ue)}finally{const we=A!==null?Ee.get(A).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(R,N,z,Y,W,ue,ye){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(fe=fe[ye]),fe){const we=R.texture,Ae=we.format,De=we.type;if(!le.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=R.width-Y&&z>=0&&z<=R.height-W){Me.bindFramebuffer(T.FRAMEBUFFER,fe);const Ce=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ce),T.bufferData(T.PIXEL_PACK_BUFFER,ue.byteLength,T.STREAM_READ),T.readPixels(N,z,Y,W,Ve.convert(Ae),Ve.convert(De),0);const je=A!==null?Ee.get(A).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,je);const qe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await a0(T,qe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ce),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ue),T.deleteBuffer(Ce),T.deleteSync(qe),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,N=null,z=0){R.isTexture!==!0&&(No("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-z),W=Math.floor(R.image.width*Y),ue=Math.floor(R.image.height*Y),ye=N!==null?N.x:0,fe=N!==null?N.y:0;L.setTexture2D(R,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,ye,fe,W,ue),Me.unbindTexture()},this.copyTextureToTexture=function(R,N,z=null,Y=null,W=0){R.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],N=arguments[2],W=arguments[3]||0,z=null);let ue,ye,fe,we,Ae,De;z!==null?(ue=z.max.x-z.min.x,ye=z.max.y-z.min.y,fe=z.min.x,we=z.min.y):(ue=R.image.width,ye=R.image.height,fe=0,we=0),Y!==null?(Ae=Y.x,De=Y.y):(Ae=0,De=0);const Ce=Ve.convert(N.format),je=Ve.convert(N.type);L.setTexture2D(N,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);const qe=T.getParameter(T.UNPACK_ROW_LENGTH),nt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),xt=T.getParameter(T.UNPACK_SKIP_PIXELS),Je=T.getParameter(T.UNPACK_SKIP_ROWS),Be=T.getParameter(T.UNPACK_SKIP_IMAGES),Tt=R.isCompressedTexture?R.mipmaps[W]:R.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Tt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Tt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,fe),T.pixelStorei(T.UNPACK_SKIP_ROWS,we),R.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,W,Ae,De,ue,ye,Ce,je,Tt.data):R.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,W,Ae,De,Tt.width,Tt.height,Ce,Tt.data):T.texSubImage2D(T.TEXTURE_2D,W,Ae,De,ue,ye,Ce,je,Tt),T.pixelStorei(T.UNPACK_ROW_LENGTH,qe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,nt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Be),W===0&&N.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(R,N,z=null,Y=null,W=0){R.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],N=arguments[3],W=arguments[4]||0);let ue,ye,fe,we,Ae,De,Ce,je,qe;const nt=R.isCompressedTexture?R.mipmaps[W]:R.image;z!==null?(ue=z.max.x-z.min.x,ye=z.max.y-z.min.y,fe=z.max.z-z.min.z,we=z.min.x,Ae=z.min.y,De=z.min.z):(ue=nt.width,ye=nt.height,fe=nt.depth,we=0,Ae=0,De=0),Y!==null?(Ce=Y.x,je=Y.y,qe=Y.z):(Ce=0,je=0,qe=0);const xt=Ve.convert(N.format),Je=Ve.convert(N.type);let Be;if(N.isData3DTexture)L.setTexture3D(N,0),Be=T.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)L.setTexture2DArray(N,0),Be=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);const Tt=T.getParameter(T.UNPACK_ROW_LENGTH),at=T.getParameter(T.UNPACK_IMAGE_HEIGHT),gn=T.getParameter(T.UNPACK_SKIP_PIXELS),yi=T.getParameter(T.UNPACK_SKIP_ROWS),An=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,nt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,nt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,we),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ae),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De),R.isDataTexture||R.isData3DTexture?T.texSubImage3D(Be,W,Ce,je,qe,ue,ye,fe,xt,Je,nt.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(Be,W,Ce,je,qe,ue,ye,fe,xt,nt.data):T.texSubImage3D(Be,W,Ce,je,qe,ue,ye,fe,xt,Je,nt),T.pixelStorei(T.UNPACK_ROW_LENGTH,Tt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,at),T.pixelStorei(T.UNPACK_SKIP_PIXELS,gn),T.pixelStorei(T.UNPACK_SKIP_ROWS,yi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,An),W===0&&N.generateMipmaps&&T.generateMipmap(Be),Me.unbindTexture()},this.initRenderTarget=function(R){Ee.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Me.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,Me.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vc?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Ro?"display-p3":"srgb"}}class wl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lr extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ad{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new U;class Nr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class El extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ws;const Dr=new U,Xs=new U,qs=new U,Ys=new Se,Ur=new Se,Td=new $e,ia=new U,Or=new U,sa=new U,Rd=new Se,Al=new Se,Cd=new Se;class Pd extends wt{constructor(e=new El){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ad(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Nr(n,3,0,!1)),Ws.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ra(ia.set(-.5,-.5,0),qs,o,Xs,s,r),ra(Or.set(.5,-.5,0),qs,o,Xs,s,r),ra(sa.set(.5,.5,0),qs,o,Xs,s,r),Rd.set(0,0),Al.set(1,0),Cd.set(1,1);let a=e.ray.intersectTriangle(ia,Or,sa,!1,Dr);if(a===null&&(ra(Or.set(-.5,.5,0),qs,o,Xs,s,r),Al.set(0,1),a=e.ray.intersectTriangle(ia,sa,Or,!1,Dr),a===null))return;const c=e.ray.origin.distanceTo(Dr);c<e.near||c>e.far||t.push({distance:c,point:Dr.clone(),uv:Cn.getInterpolation(Dr,ia,Or,sa,Rd,Al,Cd,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ra(i,e,t,n,s,r){Ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ur.x=r*Ys.x-s*Ys.y,Ur.y=s*Ys.x+r*Ys.y):Ur.copy(Ys),i.copy(e),i.x+=Ur.x,i.y+=Ur.y,i.applyMatrix4(Td)}const Id=new U,Ld=new pt,Nd=new pt,zv=new U,Dd=new $e,oa=new U,Tl=new Kn,Ud=new $e,Rl=new ko;class Hv extends pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oh,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingBox.expandByPoint(oa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingSphere.expandByPoint(oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(s),e.ray.intersectsSphere(Tl)!==!1&&(Ud.copy(s).invert(),Rl.copy(e.ray).applyMatrix4(Ud),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ld.fromBufferAttribute(s.attributes.skinIndex,e),Nd.fromBufferAttribute(s.attributes.skinWeight,e),Id.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nd.getComponent(r);if(o!==0){const a=Ld.getComponent(r);Dd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zv.copy(Id).applyMatrix4(Dd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Od extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fd extends Ht{constructor(e=null,t=1,n=1,s,r,o,a,c,l=cn,u=cn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bd=new $e,Gv=new $e;class Cl{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Gv;Bd.multiplyMatrices(a,t[r]),Bd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fd(t,e,e,Tn,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Od),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Ks extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new $e,kd=new $e,aa=[],zd=new Yn,Vv=new $e,Fr=new pe,Br=new Kn;class kr extends pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),zd.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(zd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Br.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),kd.multiplyMatrices(n,$s),Fr.matrixWorld=kd,Fr.raycast(e,aa);for(let o=0,a=aa.length;o<a;o++){const c=aa[o];c.instanceId=r,c.object=this,t.push(c)}aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fd(new Float32Array(s*this.count),s,this.count,uc,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pl extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ca=new U,la=new U,Hd=new $e,zr=new ko,ua=new Kn,Il=new U,Gd=new U;class ha extends wt{constructor(e=new Lt,t=new Pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ca.fromBufferAttribute(t,s-1),la.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ca.distanceTo(la);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;Hd.copy(s).invert(),zr.copy(e.ray).applyMatrix4(Hd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){const m=u.getX(x),S=u.getX(x+1),y=da(this,e,zr,c,m,S);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(f),m=da(this,e,zr,c,x,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){const m=da(this,e,zr,c,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=da(this,e,zr,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function da(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(ca.fromBufferAttribute(o,s),la.fromBufferAttribute(o,r),t.distanceSqToSegment(ca,la,Il,Gd)>n)return;Il.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Il);if(!(c<e.near||c>e.far))return{distance:c,point:Gd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Vd=new U,Wd=new U;class Wv extends ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vd.fromBufferAttribute(t,s),Wd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vd.distanceTo(Wd);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xv extends ha{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fa extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xd=new $e,Ll=new ko,pa=new Kn,ma=new U;class Nl extends wt{constructor(e=new Lt,t=new fa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Xd.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Xd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const p=l.getX(g);ma.fromBufferAttribute(h,p),qd(ma,p,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)ma.fromBufferAttribute(h,g),qd(ma,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qd(i,e,t,n,s,r,o){const a=Ll.distanceSqToPoint(i);if(a<t){const c=new U;Ll.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ns extends Ht{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Se:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,s=[],r=[],o=[],a=new U,c=new $e;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dl extends jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qv extends Dl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ul(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ga=new U,Ol=new Ul,Fl=new Ul,Bl=new Ul;class Yv extends jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ga.subVectors(s[0],s[1]).add(s[0]),l=ga);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ga.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ga),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Ol.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,p),Fl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,p),Bl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Fl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Bl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ol.calc(c),Fl.calc(c),Bl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yd(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Kv(i,e){const t=1-i;return t*t*e}function $v(i,e){return 2*(1-i)*i*e}function jv(i,e){return i*i*e}function Hr(i,e,t,n){return Kv(i,e)+$v(i,t)+jv(i,n)}function Zv(i,e){const t=1-i;return t*t*t*e}function Jv(i,e){const t=1-i;return 3*t*t*i*e}function Qv(i,e){return 3*(1-i)*i*i*e}function ey(i,e){return i*i*i*e}function Gr(i,e,t,n,s){return Zv(i,e)+Jv(i,t)+Qv(i,n)+ey(i,s)}class Kd extends jn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gr(e,s.x,r.x,o.x,a.x),Gr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ty extends jn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gr(e,s.x,r.x,o.x,a.x),Gr(e,s.y,r.y,o.y,a.y),Gr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $d extends jn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends jn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jd extends jn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iy extends jn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y),Hr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Yd(a,c.x,l.x,u.x,h.x),Yd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Se().fromArray(s))}return this}}var kl=Object.freeze({__proto__:null,ArcCurve:qv,CatmullRomCurve3:Yv,CubicBezierCurve:Kd,CubicBezierCurve3:ty,EllipseCurve:Dl,LineCurve:$d,LineCurve3:ny,QuadraticBezierCurve:jd,QuadraticBezierCurve3:iy,SplineCurve:Zd});class sy extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new kl[s.type]().fromJSON(s))}return this}}class zl extends sy{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $d(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new jd(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Kd(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Dl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _a extends Lt{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new U,d=new Se,f=new U,g=new U,x=new U;let p=0,m=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let S=0;S<=t;S++){const y=n+S*u*s,v=Math.sin(y),C=Math.cos(y);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*v,h.y=e[w].y,h.z=e[w].x*C,o.push(h.x,h.y,h.z),d.x=S/t,d.y=w/(e.length-1),a.push(d.x,d.y);const A=c[3*w+0]*v,P=c[3*w+1],O=c[3*w+0]*C;l.push(A,P,O)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){const v=y+S*e.length,C=v,w=v+e.length,A=v+e.length+1,P=v+1;r.push(C,w,P),r.push(A,P,w)}this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("uv",new St(a,2)),this.setAttribute("normal",new St(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.points,e.segments,e.phiStart,e.phiLength)}}class yn extends _a{constructor(e=1,t=1,n=4,s=8){const r=new zl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new yn(e.radius,e.length,e.capSegments,e.radialSegments)}}class mt extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],p=n/2;let m=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function S(){const v=new U,C=new U;let w=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const O=[],_=P/r,M=_*(t-e)+e;for(let F=0;F<=s;F++){const H=F/s,D=H*c+a,q=Math.sin(D),E=Math.cos(D);C.x=M*q,C.y=-_*n+p,C.z=M*E,h.push(C.x,C.y,C.z),v.set(q,A,E).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-_),O.push(g++)}x.push(O)}for(let P=0;P<s;P++)for(let O=0;O<r;O++){const _=x[O][P],M=x[O+1][P],F=x[O+1][P+1],H=x[O][P+1];e>0&&(u.push(_,M,H),w+=3),t>0&&(u.push(M,F,H),w+=3)}l.addGroup(m,w,0),m+=w}function y(v){const C=g,w=new Se,A=new U;let P=0;const O=v===!0?e:t,_=v===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),g++;const M=g;for(let F=0;F<=s;F++){const D=F/s*c+a,q=Math.cos(D),E=Math.sin(D);A.x=O*E,A.y=p*_,A.z=O*q,h.push(A.x,A.y,A.z),d.push(0,_,0),w.x=q*.5+.5,w.y=E*.5*_+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){const H=C+F,D=M+F;v===!0?u.push(D,D+1,H):u.push(D+1,D,H),P+=3}l.addGroup(m,P,v===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hn extends mt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xa extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new U,v=new U,C=new U;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],v),f(t[w+2],C),c(y,v,C,S)}function c(S,y,v,C){const w=C+1,A=[];for(let P=0;P<=w;P++){A[P]=[];const O=S.clone().lerp(v,P/w),_=y.clone().lerp(v,P/w),M=w-P;for(let F=0;F<=M;F++)F===0&&P===w?A[P][F]=O:A[P][F]=O.clone().lerp(_,F/M)}for(let P=0;P<w;P++)for(let O=0;O<2*(w-P)-1;O++){const _=Math.floor(O/2);O%2===0?(d(A[P][_+1]),d(A[P+1][_]),d(A[P][_])):(d(A[P][_+1]),d(A[P+1][_+1]),d(A[P+1][_]))}}function l(S){const y=new U;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(S),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const S=new U;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const v=p(S)/2/Math.PI+.5,C=m(S)/Math.PI+.5;o.push(v,1-C)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const y=o[S+0],v=o[S+2],C=o[S+4],w=Math.max(y,v,C),A=Math.min(y,v,C);w>.9&&A<.1&&(y<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){const v=S*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const S=new U,y=new U,v=new U,C=new U,w=new Se,A=new Se,P=new Se;for(let O=0,_=0;O<r.length;O+=9,_+=6){S.set(r[O+0],r[O+1],r[O+2]),y.set(r[O+3],r[O+4],r[O+5]),v.set(r[O+6],r[O+7],r[O+8]),w.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),C.copy(S).add(y).add(v).divideScalar(3);const M=p(C);x(w,_+0,S,M),x(A,_+2,y,M),x(P,_+4,v,M)}}function x(S,y,v,C){C<0&&S.x===1&&(o[y]=S.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.vertices,e.indices,e.radius,e.details)}}class Vr extends zl{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new zl().fromJSON(s))}return this}}const ry={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Jd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=uy(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Wr(r,o,t,a,c,f,0),o}};function Jd(i,e,t,n,s){let r,o;if(s===My(i,e,t,n)>0)for(r=e;r<t;r+=n)o=tf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=tf(r,i[r],i[r+1],o);return o&&va(o,o.next)&&(qr(o),o=o.next),o}function is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(va(t,t.next)||Ct(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&my(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ay(i,n,s,r):oy(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),qr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=cy(is(i),e,t),Wr(i,e,t,n,s,r,2)):o===2&&ly(i,e,t,n,s,r):Wr(is(i),e,t,n,s,r,1);break}}}function oy(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&js(s,a,r,c,o,l,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ay(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,p=u>h?u>d?u:d:h>d?h:d,m=Hl(f,g,e,t,n),S=Hl(x,p,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=m&&v&&v.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&js(a,u,c,h,l,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&js(a,u,c,h,l,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&js(a,u,c,h,l,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&js(a,u,c,h,l,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function cy(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!va(s,r)&&Qd(s,n,n.next,r)&&Xr(s,r)&&Xr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),qr(n),qr(n.next),n=i=r),n=n.next}while(n!==i);return is(n)}function ly(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xy(o,a)){let c=ef(o,a);o=is(o,o.next),c=is(c,c.next),Wr(o,e,t,n,s,r,0),Wr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function uy(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Jd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(_y(l));for(s.sort(hy),r=0;r<s.length;r++)t=dy(s[r],t);return t}function hy(i,e){return i.x-e.x}function dy(i,e){const t=fy(i,e);if(!t)return e;const n=ef(t,i);return is(n,n.next),is(t,t.next)}function fy(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&js(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Xr(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&py(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function py(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function my(i,e,t,n){let s=i;do s.z===0&&(s.z=Hl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gy(s)}function gy(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Hl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _y(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function js(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function xy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vy(i,e)&&(Xr(i,e)&&Xr(e,i)&&yy(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||va(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function va(i,e){return i.x===e.x&&i.y===e.y}function Qd(i,e,t,n){const s=Ma(Ct(i,e,t)),r=Ma(Ct(i,e,n)),o=Ma(Ct(t,n,i)),a=Ma(Ct(t,n,e));return!!(s!==r&&o!==a||s===0&&ya(i,t,e)||r===0&&ya(i,n,e)||o===0&&ya(t,i,n)||a===0&&ya(t,e,n))}function ya(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ma(i){return i>0?1:i<0?-1:0}function vy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xr(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function yy(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ef(i,e){const t=new Gl(i.i,i.x,i.y),n=new Gl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function tf(i,e,t,n){const s=new Gl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function My(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Yr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Yr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];nf(e),sf(n,e);let o=e.length;t.forEach(nf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,sf(n,t[c]);const a=ry.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function nf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Zs extends Lt{constructor(e=new Vr([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Sy;let y,v=!1,C,w,A,P;m&&(y=m.getSpacedPoints(u),v=!0,d=!1,C=m.computeFrenetFrames(u,!1),w=new U,A=new U,P=new U),d||(p=0,f=0,g=0,x=0);const O=a.extractPoints(l);let _=O.shape;const M=O.holes;if(!Yr.isClockWise(_)){_=_.reverse();for(let Z=0,T=M.length;Z<T;Z++){const ce=M[Z];Yr.isClockWise(ce)&&(M[Z]=ce.reverse())}}const H=Yr.triangulateShape(_,M),D=_;for(let Z=0,T=M.length;Z<T;Z++){const ce=M[Z];_=_.concat(ce)}function q(Z,T,ce){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(T,ce)}const E=_.length,V=H.length;function B(Z,T,ce){let ae,le,Me;const Te=Z.x-T.x,Ee=Z.y-T.y,L=ce.x-Z.x,b=ce.y-Z.y,J=Te*Te+Ee*Ee,ie=Te*b-Ee*L;if(Math.abs(ie)>Number.EPSILON){const me=Math.sqrt(J),oe=Math.sqrt(L*L+b*b),Pe=T.x-Ee/me,ve=T.y+Te/me,ge=ce.x-b/oe,ke=ce.y+L/oe,_e=((ge-Pe)*b-(ke-ve)*L)/(Te*b-Ee*L);ae=Pe+Te*_e-Z.x,le=ve+Ee*_e-Z.y;const Re=ae*ae+le*le;if(Re<=2)return new Se(ae,le);Me=Math.sqrt(Re/2)}else{let me=!1;Te>Number.EPSILON?L>Number.EPSILON&&(me=!0):Te<-Number.EPSILON?L<-Number.EPSILON&&(me=!0):Math.sign(Ee)===Math.sign(b)&&(me=!0),me?(ae=-Ee,le=Te,Me=Math.sqrt(J)):(ae=Te,le=Ee,Me=Math.sqrt(J/2))}return new Se(ae/Me,le/Me)}const j=[];for(let Z=0,T=D.length,ce=T-1,ae=Z+1;Z<T;Z++,ce++,ae++)ce===T&&(ce=0),ae===T&&(ae=0),j[Z]=B(D[Z],D[ce],D[ae]);const X=[];let Q,I=j.concat();for(let Z=0,T=M.length;Z<T;Z++){const ce=M[Z];Q=[];for(let ae=0,le=ce.length,Me=le-1,Te=ae+1;ae<le;ae++,Me++,Te++)Me===le&&(Me=0),Te===le&&(Te=0),Q[ae]=B(ce[ae],ce[Me],ce[Te]);X.push(Q),I=I.concat(Q)}for(let Z=0;Z<p;Z++){const T=Z/p,ce=f*Math.cos(T*Math.PI/2),ae=g*Math.sin(T*Math.PI/2)+x;for(let le=0,Me=D.length;le<Me;le++){const Te=q(D[le],j[le],ae);ee(Te.x,Te.y,-ce)}for(let le=0,Me=M.length;le<Me;le++){const Te=M[le];Q=X[le];for(let Ee=0,L=Te.length;Ee<L;Ee++){const b=q(Te[Ee],Q[Ee],ae);ee(b.x,b.y,-ce)}}}const k=g+x;for(let Z=0;Z<E;Z++){const T=d?q(_[Z],I[Z],k):_[Z];v?(A.copy(C.normals[0]).multiplyScalar(T.x),w.copy(C.binormals[0]).multiplyScalar(T.y),P.copy(y[0]).add(A).add(w),ee(P.x,P.y,P.z)):ee(T.x,T.y,0)}for(let Z=1;Z<=u;Z++)for(let T=0;T<E;T++){const ce=d?q(_[T],I[T],k):_[T];v?(A.copy(C.normals[Z]).multiplyScalar(ce.x),w.copy(C.binormals[Z]).multiplyScalar(ce.y),P.copy(y[Z]).add(A).add(w),ee(P.x,P.y,P.z)):ee(ce.x,ce.y,h/u*Z)}for(let Z=p-1;Z>=0;Z--){const T=Z/p,ce=f*Math.cos(T*Math.PI/2),ae=g*Math.sin(T*Math.PI/2)+x;for(let le=0,Me=D.length;le<Me;le++){const Te=q(D[le],j[le],ae);ee(Te.x,Te.y,h+ce)}for(let le=0,Me=M.length;le<Me;le++){const Te=M[le];Q=X[le];for(let Ee=0,L=Te.length;Ee<L;Ee++){const b=q(Te[Ee],Q[Ee],ae);v?ee(b.x,b.y+y[u-1].y,y[u-1].x+ce):ee(b.x,b.y,h+ce)}}}G(),$();function G(){const Z=s.length/3;if(d){let T=0,ce=E*T;for(let ae=0;ae<V;ae++){const le=H[ae];se(le[2]+ce,le[1]+ce,le[0]+ce)}T=u+p*2,ce=E*T;for(let ae=0;ae<V;ae++){const le=H[ae];se(le[0]+ce,le[1]+ce,le[2]+ce)}}else{for(let T=0;T<V;T++){const ce=H[T];se(ce[2],ce[1],ce[0])}for(let T=0;T<V;T++){const ce=H[T];se(ce[0]+E*u,ce[1]+E*u,ce[2]+E*u)}}n.addGroup(Z,s.length/3-Z,0)}function $(){const Z=s.length/3;let T=0;te(D,T),T+=D.length;for(let ce=0,ae=M.length;ce<ae;ce++){const le=M[ce];te(le,T),T+=le.length}n.addGroup(Z,s.length/3-Z,1)}function te(Z,T){let ce=Z.length;for(;--ce>=0;){const ae=ce;let le=ce-1;le<0&&(le=Z.length-1);for(let Me=0,Te=u+p*2;Me<Te;Me++){const Ee=E*Me,L=E*(Me+1),b=T+ae+Ee,J=T+le+Ee,ie=T+le+L,me=T+ae+L;ne(b,J,ie,me)}}}function ee(Z,T,ce){c.push(Z),c.push(T),c.push(ce)}function se(Z,T,ce){de(Z),de(T),de(ce);const ae=s.length/3,le=S.generateTopUV(n,s,ae-3,ae-2,ae-1);he(le[0]),he(le[1]),he(le[2])}function ne(Z,T,ce,ae){de(Z),de(T),de(ae),de(T),de(ce),de(ae);const le=s.length/3,Me=S.generateSideWallUV(n,s,le-6,le-3,le-2,le-1);he(Me[0]),he(Me[1]),he(Me[3]),he(Me[1]),he(Me[2]),he(Me[3])}function de(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function he(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return by(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new kl[s.type]().fromJSON(s)),new Zs(n,e.options)}}const Sy={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,c),new Se(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Se(o,1-c),new Se(l,1-h),new Se(d,1-g),new Se(x,1-m)]:[new Se(a,1-c),new Se(u,1-h),new Se(f,1-g),new Se(p,1-m)]}};function by(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vl extends xa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vl(e.radius,e.detail)}}class Wl extends xa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wl(e.radius,e.detail)}}class Qe extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new U,d=new U,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const S=[],y=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(w+v,1-y),S.push(l++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const y=u[m][S+1],v=u[m][S],C=u[m+1][S],w=u[m+1][S+1];(m!==0||o>0)&&f.push(y,v,w),(m!==n-1||c<Math.PI)&&f.push(v,C,w)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zn extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new U,h=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(x,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Xe extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends Xe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Sa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ey(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function rf(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function of(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Kr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ay extends Kr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ss,endingEnd:Ss}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bs:r=e,a=2*t-n;break;case To:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bs:o=e,c=2*n-t;break;case To:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,S=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*p+(1.5+f)*x+.5*g,v=f*p-f*x;for(let C=0;C!==a;++C)r[C]=m*o[u+C]+S*o[l+C]+y*o[c+C]+v*o[h+C];return r}}class af extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Ty extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ty(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ay(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case zc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&wy(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Jn.prototype.TimeBufferType=Float32Array,Jn.prototype.ValueBufferType=Float32Array,Jn.prototype.DefaultInterpolation=Mr;class Js extends Jn{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="bool",Js.prototype.ValueBufferType=Array,Js.prototype.DefaultInterpolation=yr,Js.prototype.InterpolantFactoryMethodLinear=void 0,Js.prototype.InterpolantFactoryMethodSmooth=void 0;class cf extends Jn{}cf.prototype.ValueTypeName="color";class Qs extends Jn{}Qs.prototype.ValueTypeName="number";class Ry extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)qt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class er extends Jn{InterpolantFactoryMethodLinear(e){return new Ry(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion",er.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Jn{constructor(e,t,n){super(e,t,n)}}tr.prototype.ValueTypeName="string",tr.prototype.ValueBufferType=Array,tr.prototype.DefaultInterpolation=yr,tr.prototype.InterpolantFactoryMethodLinear=void 0,tr.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Jn{}nr.prototype.ValueTypeName="vector";class Xl{constructor(e="",t=-1,n=[],s=Hc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Py(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Ey(c);c=rf(c,1,u),l=rf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Qs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const p=[],m=[];of(f,p,m,g),p.length!==0&&x.push(new h(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const p=[],m=[];for(let S=0;S!==d[g].morphTargets.length;++S){const y=d[g];p.push(y.time),m.push(y.morphTarget===x?1:0)}s.push(new Qs(".morphTargetInfluence["+x+"]",p,m))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(nr,f+".position",d,"pos",s),n(er,f+".quaternion",d,"rot",s),n(nr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qs;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return cf;case"quaternion":return er;case"bool":case"boolean":return Js;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Py(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cy(i.type);if(i.times===void 0){const t=[],n=[];of(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Iy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Ly=new Iy;class ir{constructor(e){this.manager=e!==void 0?e:Ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class Ny extends Error{constructor(e,t){super(e),this.response=t}}class lf extends ir{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=pi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:y,value:v})=>{if(y)m.close();else{x+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,A=u.length;w<A;w++){const P=u[w];P.onProgress&&P.onProgress(C)}m.enqueue(v),S()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Ny(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ni.add(e,l);const u=pi[e];delete pi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=pi[e];if(u===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dy extends ir{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=wr("img");function c(){u(),Ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Uy extends ir{constructor(e){super(e)}load(e,t,n,s){const r=new Ht,o=new Dy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class $r extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ba extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ql=new $e,uf=new U,hf=new U;class Yl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(uf),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Oy extends Yl{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Es*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fy extends $r{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Oy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const df=new $e,jr=new U,Kl=new U;class By extends Yl{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Kl.copy(n.position),Kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kl),n.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df)}}class $l extends $r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new By}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ky extends Yl{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mi extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zy extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hy extends ir{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ni.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ni.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(e,c),r.manager.itemStart(e)}}class Gy{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){qt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;qt.multiplyQuaternionsFlat(e,o,e,t,e,n),qt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const jl="\\[\\]\\.:\\/",Vy=new RegExp("["+jl+"]","g"),Zl="[^"+jl+"]",Wy="[^"+jl.replace("\\.","")+"]",Xy=/((?:WC+[\/:])*)/.source.replace("WC",Zl),qy=/(WCOD+)?/.source.replace("WCOD",Wy),Yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Ky=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),$y=new RegExp("^"+Xy+qy+Yy+Ky+"$"),jy=["material","materials","bones","map"];class Zy{constructor(e,t,n){const s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vy,"")}static parseTrackName(e){const t=$y.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);jy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Zy,gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray],gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jy{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ss,endingEnd:Ss};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Im:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Hc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===Pm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Rm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=bs,s.endingEnd=bs):(e?s.endingStart=this.zeroSlopeAtStart?bs:Ss:s.endingStart=To,t?s.endingEnd=this.zeroSlopeAtEnd?bs:Ss:s.endingEnd=To)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Qy=new Float32Array(1);class eM extends Wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new Gy(gt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new af(new Float32Array(2),new Float32Array(2),1,Qy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Xl.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Hc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Jy(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Xl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a),(function(){var i="[native-gamepad-bridge]",e=typeof window.__p5NativeHost<"u"&&window.__p5NativeHost===!0||typeof window.webkit<"u"&&window.webkit&&window.webkit.messageHandlers;if(!e)return;var t={connected:!1,timestamp:0,buttons:[],axes:[]};function n(){return{pressed:!1,touched:!1,value:0}}function s(a){if(a==null)return n();if(typeof a=="boolean")return{pressed:a,touched:a,value:a?1:0};if(typeof a=="number"){var c=a>.5;return{pressed:c,touched:c,value:a}}if(typeof a=="object"){var l="p"in a?!!a.p:"pressed"in a?!!a.pressed:!1,u=typeof a.v=="number"?a.v:typeof a.value=="number"?a.value:l?1:0;return{pressed:l,touched:l,value:u}}return n()}function r(){for(var a=new Array(17),c=0;c<17;c++)a[c]=s(t.buttons&&t.buttons[c]);var l=[0,0,0,0];if(t.axes&&t.axes.length)for(var u=0;u<Math.min(4,t.axes.length);u++){var h=t.axes[u];l[u]=typeof h=="number"&&!isNaN(h)?h:0}return{id:"Native iOS Gamepad (GCController bridge)",index:0,connected:t.connected,timestamp:t.timestamp,mapping:"standard",axes:l,buttons:a,vibrationActuator:null,hapticActuators:[]}}window.__nativeGamepadLastRaw=null,window.__nativeGamepadUpdateCount=0,window.__nativeGamepadUpdate=function(a){a&&(t.buttons=Array.isArray(a.buttons)?a.buttons:[],t.axes=Array.isArray(a.axes)?a.axes:[],t.connected=!0,t.timestamp=typeof performance<"u"&&performance.now?performance.now():Date.now(),window.__nativeGamepadLastRaw=a,window.__nativeGamepadUpdateCount++)},window.__nativeGamepadConnection=function(a){var c=t.connected;if(t.connected=!!a,t.connected||(t.buttons=[],t.axes=[]),t.connected!==c){var l=t.connected?"gamepadconnected":"gamepaddisconnected",u=new Event(l);u.gamepad=r(),window.dispatchEvent(u)}};var o=typeof navigator.getGamepads=="function"?navigator.getGamepads.bind(navigator):null;navigator.getGamepads=function(){if(t.connected)return[r(),null,null,null];if(o)try{return o()}catch{return[null,null,null,null]}return[null,null,null,null]},window.__nativeGamepadBridgeReady=!0,console.log(i,"active: iOS host detected")})();const tM=60,nM=.5,iM=5e3,ff=1e6,pf=2e6;function sM(){const i=new Lr;i.background=new We(131850),i.add(new ba(6328512,2105392,.55)),i.fog=new wl(131850,ff,pf);const e=new mi(16777215,1.1);return e.position.set(40,30,20),i.add(e),i}function rM(){return new kt(tM,window.innerWidth/window.innerHeight,nM,iM)}const Jl=Object.freeze({maxThrottleAccel:18,reverseThrottleAccel:12,maxSpeed:60,surfaceSpeed:1e3/3.6,surfaceBoostSpeed:2e3/3.6,yawRate:1.4,pitchRate:1.4,rollRate:2,arcadeDampingRate:.6,hackRadius:8}),on={...Jl};function oM(){Object.assign(on,Jl)}const aM=15659509,cM=8161430,lM=1259630,uM=3108832,hM=16106818,mf=4828159;function gf(i){const e=new Vr;i==="stripe"?(e.moveTo(.15,.34),e.lineTo(.7,.13),e.lineTo(.7,.02),e.lineTo(.15,.17)):(e.moveTo(.15,.17),e.lineTo(.7,.02),e.lineTo(.7,-.32),e.lineTo(.15,-.48)),e.closePath();const t=new Zs(e,{depth:.045,bevelEnabled:!1});return t.rotateX(Math.PI/2),t.translate(0,.0225,0),t}function dM(){const i=new Vr;i.moveTo(.26,.02),i.lineTo(-.06,.48),i.lineTo(-.38,.12),i.lineTo(-.34,-.12),i.lineTo(-.08,-.32),i.closePath();const e=new Zs(i,{depth:.05,bevelEnabled:!1});return e.rotateY(-Math.PI/2),e.translate(.025,0,0),e}function fM(i,e){const t=new Vr;t.moveTo(0,0),t.lineTo(-.06,e),t.lineTo(-.46,0),t.closePath();const n=new Zs(t,{depth:.035,bevelEnabled:!1});return n.rotateY(-Math.PI/2),n.translate(.0175,0,0),n}function pM(){const i=new st,e=new Xe({color:aM,roughness:.42,metalness:.45,emissive:790550,side:Zt}),t=new Xe({color:cM,roughness:.6,metalness:.5,emissive:329740,side:Zt}),n=new Xe({color:lM,roughness:.08,metalness:.6,emissive:662586,side:Zt}),s=new Xe({color:uM,roughness:.35,metalness:.45,emissive:662602,side:Zt}),r=new Xe({color:hM,roughness:.3,metalness:.55,emissive:2759936,side:Zt}),o=new Xe({color:mf,roughness:.3,metalness:.2,emissive:mf,emissiveIntensity:1.4,side:Zt}),a=new mt(.22,.18,1.05,6);a.rotateX(Math.PI/2);const c=new pe(a,e);c.scale.set(1.3,.7,1),c.position.z=-.05,i.add(c);const l=new hn(.22,.92,6);l.rotateX(Math.PI/2);const u=new pe(l,e);u.scale.set(1.3,.7,1),u.position.z=.935,i.add(u);const h=new pe(new yt(.42,.09,.92),t);h.position.set(0,-.16,-.05),i.add(h);const d=new pe(new Qe(.19,18,12),n);d.scale.set(.86,.6,1.7),d.position.set(0,.13,.22),i.add(d);const f=new pe(fM(.46,.36),e);f.position.set(0,.12,-.2),i.add(f);const g=new pe(new yt(.04,.08,.13),r);g.position.set(0,.47,-.29),i.add(g);for(const m of[1,-1]){const S=new st;S.add(new pe(gf("main"),e)),S.add(new pe(gf("stripe"),s));const y=new pe(dM(),e);y.position.set(.69,0,-.08),S.add(y);const v=new pe(new yt(.06,.5,.05),s);v.position.set(.69,.08,.12),v.rotation.x=-.5,S.add(v);const C=new mt(.028,.04,.56,10);C.rotateX(Math.PI/2);const w=new pe(C,t);w.position.set(.69,0,.3),S.add(w);const A=new pe(new mt(.03,.02,.15,10),r);A.rotation.x=Math.PI/2,A.position.set(.69,0,.62),S.add(A);const P=new pe(new yt(.16,.13,.4),o);P.position.set(.28,-.02,-.28),S.add(P),S.position.set(m*.16,0,-.05),m===-1&&(S.scale.x=-1),S.rotation.z=m*.14,i.add(S)}const x=new rn({color:9425151,transparent:!0,opacity:.85,blending:ri,depthWrite:!1}),p=[];for(const m of[-.12,.12]){const S=new mt(.12,.095,.36,8);S.rotateX(Math.PI/2);const y=new pe(S,t);y.position.set(m,-.03,-.66),i.add(y);const v=new mt(.082,.082,.07,8);v.rotateX(Math.PI/2);const C=new pe(v,o);C.position.set(m,-.03,-.82),i.add(C);const w=new hn(.08,.38,14);w.rotateX(-Math.PI/2);const A=new pe(w,x);A.position.set(m,-.03,-1.04),A.visible=!1,p.push(A),i.add(A)}return{mesh:i,velocity:new U,arcadeDamping:!1,glows:p,glowMat:x,flame:0,braking:!0}}const Ql=new U,_f=new qt,xf=new U,mM=.25;function gM(i,e,t){eu(i.mesh.quaternion,Ql.set(1,0,0),e.pitch*on.pitchRate*t),eu(i.mesh.quaternion,Ql.set(0,1,0),e.yaw*on.yawRate*t),eu(i.mesh.quaternion,Ql.set(0,0,1),e.roll*on.rollRate*t),i.mesh.quaternion.normalize();const n=e.throttle>=mM;if(_M(i,n?e.throttle:0,t),!n){i.velocity.set(0,0,0),i.braking=!0;return}i.braking=!1,xf.set(0,0,1).applyQuaternion(i.mesh.quaternion);const s=i.speedLimit||on.maxSpeed,r=e.throttle*on.maxThrottleAccel*Math.max(1,s/Jl.maxSpeed);if(i.velocity.addScaledVector(xf,r*t),i.arcadeDamping){const o=Math.exp(-on.arcadeDampingRate*t);i.velocity.multiplyScalar(o)}i.velocity.lengthSq()>s*s&&i.velocity.setLength(s),i.mesh.position.addScaledVector(i.velocity,t)}function _M(i,e,t){const n=e>0?e:0,s=n>i.flame?18:11;i.flame+=(n-i.flame)*Math.min(1,s*t),i.flame<.002&&(i.flame=0);const r=i.flame>0,o=r?.85+.15*Math.sin(performance.now()*.05):1;i.glowMat.opacity=.85*i.flame*o;for(const a of i.glows)a.visible=r,a.scale.set(i.flame,i.flame,(.4+i.flame)*o)}function eu(i,e,t){t!==0&&(_f.setFromAxisAngle(e,t),i.multiply(_f))}const tu=12e3,nu=1200;function vf(){const i=new Float32Array(tu*3),e=new Float32Array(tu*3);for(let r=0;r<tu;r++){const o=Math.random(),a=Math.random(),c=2*Math.PI*o,l=Math.acos(2*a-1),u=Math.sin(l),h=nu*u*Math.cos(c),d=nu*u*Math.sin(c),f=nu*Math.cos(l);i[r*3+0]=h,i[r*3+1]=d,i[r*3+2]=f;const g=.85+Math.random()*.15,x=Math.random()*.1;e[r*3+0]=g-x,e[r*3+1]=g-x*.5,e[r*3+2]=g}const t=new Lt;t.setAttribute("position",new It(i,3)),t.setAttribute("color",new It(e,3));const n=new fa({size:1.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1}),s=new Nl(t,n);return s.frustumCulled=!1,s}function yf(i,e){i.position.copy(e.position)}const iu=250,Jr={zNear:80,zFar:480,xHalf:70,yHalf:45},xM=1.2,vM=4.5,yM=.4;function Hn(i,e){return i+Math.random()*(e-i)}function MM(){return Math.random()<.5?-1:1}function SM(){const i=new Vl(1,0),e=new Xe({color:9074021,roughness:.95,metalness:.05,flatShading:!0}),t=new kr(i,e,iu);t.frustumCulled=!1;const n=[],s=new $e,r=new qt,o=new U,a=new U;for(let l=0;l<iu;l++){const u=Hn(xM,vM);a.set(Hn(-70,Jr.xHalf),Hn(-45,Jr.yHalf),Hn(Jr.zNear,Jr.zFar)),o.setScalar(u),r.setFromEuler(new Yt(Hn(0,Math.PI*2),Hn(0,Math.PI*2),Hn(0,Math.PI*2))),s.compose(a,r,o),t.setMatrixAt(l,s),n.push({position:a.clone(),radius:u*1.05,spinAxis:new U(Hn(-1,1),Hn(-1,1),Hn(-1,1)).normalize(),spinRate:Hn(.05,yM)*MM(),rotation:r.clone()})}t.instanceMatrix.needsUpdate=!0;function c(l){const u=new qt;for(let h=0;h<iu;h++){const d=n[h];u.setFromAxisAngle(d.spinAxis,d.spinRate*l),d.rotation.premultiply(u),o.setScalar(d.radius/1.05),s.compose(d.position,d.rotation,o),t.setMatrixAt(h,s)}t.instanceMatrix.needsUpdate=!0}return{mesh:t,instances:n,update:c,volume:{...Jr}}}const Mf=new U(0,0,700),su=60;function bM(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#c97648"),s.addColorStop(.5,"#b15a30"),s.addColorStop(1,"#7a3a1c"),n.fillStyle=s,n.fillRect(0,0,1024,512);for(let o=0;o<320;o++){const a=Math.random()*1024,c=Math.random()*512,l=8+Math.random()*80,u=.05+Math.random()*.18,h=Math.random()<.65;n.beginPath(),n.fillStyle=h?`rgba(70, 30, 15, ${u})`:`rgba(240, 180, 130, ${u})`,n.arc(a,c,l,0,Math.PI*2),n.fill()}for(const o of[0,512]){const a=n.createRadialGradient(512,o,0,512,o,179.2);a.addColorStop(0,"rgba(230, 240, 245, 0.85)"),a.addColorStop(1,"rgba(230, 240, 245, 0)"),n.fillStyle=a,n.fillRect(0,0,1024,512)}const r=new ns(t);return r.colorSpace=Rt,r}function wM(){const i=new Qe(su,64,32),e=new Xe({map:bM(),roughness:.95,metalness:0}),t=new pe(i,e);t.position.copy(Mf);const n=.02;function s(r){t.rotation.y+=n*r}return{mesh:t,update:s}}const Qr=new U(-90,25,-330),eo=112,Qn=2048,Qt=1024,EM=1.015,AM=1.035,Sf=.03,TM=.042,RM=[[[-168,65],[-150,61],[-130,54],[-124,40],[-117,32],[-105,22],[-97,16],[-83,9],[-78,19],[-81,26],[-70,42],[-60,47],[-55,52],[-64,60],[-80,70],[-95,69],[-125,70],[-155,71]],[[-80,8],[-70,11],[-60,8],[-50,0],[-35,-5],[-38,-15],[-48,-25],[-58,-35],[-63,-42],[-73,-52],[-75,-47],[-71,-33],[-71,-18],[-79,-6],[-80,2]],[[-17,15],[-10,25],[0,32],[10,34],[25,32],[35,30],[43,12],[51,12],[42,-2],[40,-15],[35,-25],[25,-34],[18,-33],[12,-18],[9,-2],[5,5],[-8,5]],[[-9,37],[0,40],[12,45],[24,40],[30,36],[36,37],[45,40],[50,30],[57,25],[68,24],[77,8],[81,16],[89,22],[95,16],[100,13],[106,10],[110,20],[120,32],[122,40],[130,43],[136,50],[142,54],[160,60],[170,66],[178,68],[168,72],[140,75],[110,76],[90,76],[70,73],[58,70],[48,68],[38,66],[30,70],[24,66],[17,62],[11,58],[4,57],[-2,51],[0,47],[-5,43]],[[113,-22],[122,-18],[130,-12],[137,-12],[142,-11],[147,-19],[153,-25],[150,-35],[145,-38],[137,-35],[129,-32],[118,-34],[114,-28]],[[-45,60],[-30,68],[-24,75],[-35,82],[-55,82],[-60,75],[-55,65]]],CM=[[-4,54,4],[138,37,4],[47,-20,5],[174,-41,4],[110,-3,6],[102,-2,5],[122,12,4],[-19,65,3],[80,8,2.5],[-78,21,3]],PM=[[10,22,18],[30,25,14],[45,22,12],[65,28,10],[95,40,12],[132,-25,14],[18,-22,8],[-110,32,8],[-68,-25,6]];function wa(i,e){return{x:(i+180)/360*Qn,y:(90-e)/180*Qt}}function bf(i){return i/180*Qt}function IM(i,e){const t=e.map(([o,a])=>wa(o,a)),n=t.length,s=(o,a)=>({x:(o.x+a.x)/2,y:(o.y+a.y)/2}),r=s(t[n-1],t[0]);i.moveTo(r.x,r.y);for(let o=0;o<n;o++){const a=t[o],c=s(t[o],t[(o+1)%n]);i.quadraticCurveTo(a.x,a.y,c.x,c.y)}i.closePath()}function Ea(i){for(const e of RM)IM(i,e);for(const[e,t,n]of CM){const{x:s,y:r}=wa(e,t),o=bf(n);i.moveTo(s+o,r),i.arc(s,r,o,0,Math.PI*2)}}function ru(i,e,t,n,s,r,o=1,a=1){i.save(),i.translate(e,t),i.scale(o,a);const c=i.createRadialGradient(0,0,0,0,0,n);c.addColorStop(0,`rgba(${s}, ${r})`),c.addColorStop(.55,`rgba(${s}, ${r*.55})`),c.addColorStop(1,`rgba(${s}, 0)`),i.fillStyle=c,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.fill(),i.restore()}function wf(){const i=document.createElement("canvas");return i.width=Qn,i.height=Qt,i.getContext("2d")}function LM(i){const e=new ns(i.canvas);return e.colorSpace=Rt,e}function NM(){const i=wf(),e=i.createLinearGradient(0,0,0,Qt);e.addColorStop(0,"#0a2c50"),e.addColorStop(.35,"#1259a0"),e.addColorStop(.5,"#1a72bd"),e.addColorStop(.65,"#1259a0"),e.addColorStop(1,"#0a2c50"),i.fillStyle=e,i.fillRect(0,0,Qn,Qt);for(let o=0;o<700;o++){const a=Math.random()*Qn,c=Math.random()*Qt,l=20+Math.random()*110,u=Math.random()<.55;ru(i,a,c,l,u?"6, 28, 58":"70, 165, 215",(u?.1:.07)*(.4+Math.random()*.6),1.6,.7)}const t=[{width:52,color:"rgba(30, 105, 165, 0.18)"},{width:38,color:"rgba(45, 130, 190, 0.20)"},{width:26,color:"rgba(65, 160, 205, 0.22)"},{width:14,color:"rgba(95, 190, 220, 0.25)"}];i.lineJoin="round",i.lineCap="round",i.beginPath(),Ea(i);for(const o of t)i.strokeStyle=o.color,i.lineWidth=o.width,i.stroke();i.fillStyle="#3f7a3a",i.beginPath(),Ea(i),i.fill(),i.save(),i.beginPath(),Ea(i),i.clip();const n=i.createLinearGradient(0,0,0,Qt);n.addColorStop(0,"rgba(190, 205, 200, 0.55)"),n.addColorStop(.22,"rgba(60, 90, 60, 0.45)"),n.addColorStop(.5,"rgba(30, 85, 35, 0.5)"),n.addColorStop(.78,"rgba(70, 100, 55, 0.35)"),n.addColorStop(1,"rgba(200, 215, 215, 0.6)"),i.fillStyle=n,i.fillRect(0,0,Qn,Qt);for(const[o,a,c]of PM){const{x:l,y:u}=wa(o,a),h=bf(c),d=i.createRadialGradient(l,u,0,l,u,h);d.addColorStop(0,"rgba(200, 168, 105, 0.85)"),d.addColorStop(.6,"rgba(190, 158, 100, 0.55)"),d.addColorStop(1,"rgba(180, 150, 95, 0)"),i.fillStyle=d,i.beginPath(),i.arc(l,u,h,0,Math.PI*2),i.fill()}for(let o=0;o<1400;o++){const a=Math.random()*Qn,c=Math.random()*Qt,l=5+Math.random()*30,u=Math.random()<.5;ru(i,a,c,l,u?"25, 52, 25":"155, 148, 108",.06+Math.random()*.14,1+Math.random(),.8)}for(let o=0;o<90;o++){const a=Math.random()*Qn,c=Math.random()*Qt,l=40+Math.random()*160,u=(Math.random()-.5)*Math.PI,h=Math.cos(u)*l,d=Math.sin(u)*l*.6;i.beginPath(),i.moveTo(a,c),i.quadraticCurveTo(a+h*.5,c+d*.5-18,a+h,c+d),i.strokeStyle="rgba(48, 42, 32, 0.30)",i.lineWidth=6+Math.random()*8,i.stroke(),i.beginPath(),i.moveTo(a,c-5),i.quadraticCurveTo(a+h*.5,c+d*.5-23,a+h,c+d-5),i.strokeStyle="rgba(200, 195, 175, 0.18)",i.lineWidth=3,i.stroke()}i.beginPath(),Ea(i),i.strokeStyle="rgba(214, 196, 142, 0.28)",i.lineWidth=14,i.stroke(),i.strokeStyle="rgba(224, 208, 158, 0.30)",i.lineWidth=6,i.stroke(),i.restore();const s=i.createLinearGradient(0,Qt*.86,0,Qt);s.addColorStop(0,"rgba(238, 246, 252, 0)"),s.addColorStop(.45,"rgba(238, 246, 252, 0.9)"),s.addColorStop(1,"rgba(255, 255, 255, 1)"),i.fillStyle=s,i.fillRect(0,Qt*.86,Qn,Qt*.14);const r=i.createLinearGradient(0,0,0,Qt*.1);return r.addColorStop(0,"rgba(240, 248, 255, 0.95)"),r.addColorStop(1,"rgba(240, 248, 255, 0)"),i.fillStyle=r,i.fillRect(0,0,Qn,Qt*.1),LM(i)}function DM(){const i=wf();i.clearRect(0,0,Qn,Qt);function e(s){const r=Math.exp(-((s/12)**2)),o=Math.exp(-(((s-55)/16)**2)),a=Math.exp(-(((s+55)/16)**2));return .25+.75*Math.max(r,Math.max(o,a))}const t=600;for(let s=0;s<t;s++){const r=Math.random()*360-180,o=Math.random()*170-85;if(Math.random()>e(o))continue;const{x:a,y:c}=wa(r,o),l=8+Math.floor(Math.random()*12),u=16+Math.random()*50;for(let h=0;h<l;h++){const d=a+(Math.random()-.5)*u*2.6,f=c+(Math.random()-.5)*u*.7,g=5+Math.random()*14;ru(i,d,f,g,"255, 255, 255",.18+Math.random()*.28,2.2+Math.random(),.85)}}const n=new ns(i.canvas);return n.colorSpace=Rt,n}function UM(){const i=new Qe(eo,96,48),e=NM();e.anisotropy=8;const t=new Xe({map:e,roughness:.9,metalness:0,emissive:661030}),n=new pe(i,t);n.position.copy(Qr),n.rotation.z=Xi.degToRad(23.4);const s=new pe(new Qe(eo*EM,96,48),new Xe({map:DM(),transparent:!0,opacity:.85,depthWrite:!1,roughness:1,metalness:0}));n.add(s);const r=new pe(new Qe(eo*AM,64,32),new rn({color:6269183,transparent:!0,opacity:.22,blending:ri,side:jt,depthWrite:!1}));n.add(r);function o(a){n.rotation.y+=Sf*a,s.rotation.y+=(TM-Sf)*a}return{mesh:n,clouds:s,atmosphere:r,update:o}}const to=256,OM=new U(0,0,-2e3),FM=350;function BM(){const i=document.createElement("canvas");i.width=to,i.height=to;const e=i.getContext("2d"),t=to/2,n=e.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"rgba(255, 245, 220, 1)"),n.addColorStop(.08,"rgba(255, 230, 180, 0.95)"),n.addColorStop(.25,"rgba(255, 200, 130, 0.45)"),n.addColorStop(.55,"rgba(255, 170, 100, 0.15)"),n.addColorStop(1,"rgba(255, 150, 90, 0)"),e.fillStyle=n,e.fillRect(0,0,to,to);const s=new ns(i);return s.colorSpace=Rt,s}function kM(){const i=BM(),e=new El({map:i,depthWrite:!1,transparent:!0,blending:ri}),t=new Pd(e);t.scale.setScalar(FM);function n(s){t.position.copy(s.position).add(OM)}return{sprite:t,update:n}}const zM=["Sojourner","Spirit","Opportunity","Curiosity","Perseverance","Zhurong"],HM=su+18,GM=su+60,VM=60,Ef=8028296,WM=5431551,XM=2106408,qM=1060936;function Aa(i,e){return i+Math.random()*(e-i)}function YM(){const i=new st,e=new Xe({color:Ef,roughness:.7,metalness:.3,emissive:0}),t=new pe(new yt(2.2,.7,1.4),e);t.position.y=.45,i.add(t);const n=new pe(new yt(1.8,.1,1.1),new Xe({color:qM,roughness:.4,metalness:.8,emissive:332832}));n.position.y=.85,i.add(n);const s=new mt(.32,.32,.2,12);s.rotateZ(Math.PI/2);const r=new Xe({color:XM,roughness:.95,metalness:.1}),o=[-.85,.85],a=[-.55,.55];for(const u of o)for(const h of a){const d=new pe(s,r);d.position.set(u,.1,h),i.add(d)}const c=new pe(new mt(.04,.04,.8,6),new Xe({color:11184810,roughness:.6,metalness:.5}));c.position.set(.6,1.2,0),i.add(c);const l=new pe(new Qe(.1,8,6),new Xe({color:16733525,emissive:4456448}));return l.position.set(.6,1.65,0),i.add(l),{group:i,bodyMat:e}}function KM(){const i=Math.random(),e=Math.random(),t=2*Math.PI*i,n=Math.acos(2*e-1),s=Aa(HM,GM),r=Math.sin(n);return new U(s*r*Math.cos(t),s*r*Math.sin(t),s*Math.cos(n)).add(Mf)}function $M(){const i=[];for(const s of zM){const{group:r,bodyMat:o}=YM(),a=KM();r.position.copy(a),r.rotation.set(Aa(0,Math.PI*2),Aa(0,Math.PI*2),Aa(0,Math.PI*2)),i.push({name:s,mesh:r,bodyMat:o,position:a,fixed:!1,repairProgress:0,creditValue:VM})}function e(s){for(const r of i)r.mesh.rotation.y+=.25*s,r.mesh.rotation.x+=.08*s}function t(s){s.fixed=!0,s.repairProgress=1,s.bodyMat.color.setHex(WM),s.bodyMat.emissive.setHex(1060928)}function n(){for(const s of i)s.fixed=!1,s.repairProgress=0,s.bodyMat.color.setHex(Ef),s.bodyMat.emissive.setHex(0)}return{rovers:i,update:e,markFixed:t,reset:n}}const Ta=32,ou=.9,jM=6,ZM=.18;function JM(){const i=new Float32Array(Ta*3),e=new Float32Array(Ta*3),t=new Lt;t.setAttribute("position",new It(i,3));const n=new fa({color:10149887,size:ZM,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ri}),s=new Nl(t,n);s.visible=!1;let r=ou;function o(c){r=0;for(let l=0;l<Ta;l++){i[l*3+0]=c.x,i[l*3+1]=c.y,i[l*3+2]=c.z;const u=Math.random(),h=Math.random(),d=2*Math.PI*u,f=Math.acos(2*h-1),g=Math.sin(f),x=(.4+Math.random()*.6)*jM;e[l*3+0]=x*g*Math.cos(d),e[l*3+1]=x*g*Math.sin(d),e[l*3+2]=x*Math.cos(f)}t.attributes.position.needsUpdate=!0,s.visible=!0}function a(c){if(r>=ou){s.visible=!1;return}r+=c;const l=Math.min(1,r/ou),u=Math.pow(.05,c);for(let h=0;h<Ta;h++)i[h*3+0]+=e[h*3+0]*c,i[h*3+1]+=e[h*3+1]*c,i[h*3+2]+=e[h*3+2]*c,e[h*3+0]*=u,e[h*3+1]*=u,e[h*3+2]*=u;t.attributes.position.needsUpdate=!0,n.opacity=1-l}return{points:s,fire:o,update:a}}const Af=.7,au=new U,sr=new U;function QM(i,e){let t=0;for(const n of e){au.subVectors(i.position,n.position);const s=Af+n.radius,r=au.lengthSq();if(r>=s*s)continue;if(r<1e-8)sr.set(0,1,0),i.position.addScaledVector(sr,s);else{const a=Math.sqrt(r);sr.copy(au).divideScalar(a);const c=s-a;i.position.addScaledVector(sr,c)}const o=i.velocity.dot(sr);o<0&&i.velocity.addScaledVector(sr,-1.55*o),t+=1}return t}const eS=Object.freeze(Object.defineProperty({__proto__:null,SHIP_RADIUS:Af,resolveAsteroidCollisions:QM},Symbol.toStringTag,{value:"Module"})),Di={throttleUp:["KeyW"],throttleDown:["KeyS"],yawLeft:["KeyA"],yawRight:["KeyD"],pitchUp:["ArrowUp"],pitchDown:["ArrowDown"],rollLeft:["KeyQ"],rollRight:["KeyE"]};function tS(){const i=new Set,e=new Set;function t(o){i.has(o.code)||e.add(o.code),i.add(o.code)}function n(o){i.delete(o.code)}window.addEventListener("keydown",t),window.addEventListener("keyup",n);function s(o){for(const a of o)if(i.has(a))return!0;return!1}function r(o){for(const a of o)if(e.has(a))return!0;return!1}return{isDown:o=>i.has(o),sample(){const o=(s(Di.throttleUp)?1:0)-(s(Di.throttleDown)?1:0),a=(s(Di.yawLeft)?1:0)-(s(Di.yawRight)?1:0),c=(s(Di.pitchUp)?1:0)-(s(Di.pitchDown)?1:0),l=(s(Di.rollLeft)?1:0)-(s(Di.rollRight)?1:0);return{throttle:o,yaw:a,pitch:c,roll:l}},consumeAnyJustPressed(){const o=e.size>0;return e.clear(),o},consumeJustPressed(o){if(r(o)){for(const a of o)e.delete(a);return!0}return!1},dispose(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}}}const nS=.15,Ra={throttle:{axisIndex:1,sign:-1},yaw:{axisIndex:0,sign:-1},lookX:{axisIndex:2,sign:1},lookY:{axisIndex:3,sign:-1}},Pt={A:0,B:1,X:2,Y:3,L1:4,R1:5,L2:6,R2:7,Select:8,Start:9,L3:10,R3:11,Up:12,Down:13,Left:14,Right:15};function iS(i,e=nS){const t=Math.abs(i);return t<e?0:Math.sign(i)*((t-e)/(1-e))}function Ca(i,e){return e.sign*iS(i.axes[e.axisIndex]??0)}function sS(){let i=!1,e=!1;const t=new Set,n=new Set,s=new Set;function r(){const c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(const l of c)if(l&&l.connected)return l;return null}const o=new Set;function a(c){if(n.clear(),o.clear(),!!c.buttons){for(let l=0;l<c.buttons.length;l++){const u=c.buttons[l];!!(u&&u.pressed)?(o.add(l),!t.has(l)&&!s.has(l)&&n.add(l)):s.delete(l)}for(const l of t)o.has(l)||t.delete(l);for(const l of o)t.add(l)}}return{get active(){return i},sample(){const c=r();if(!c)return i=!1,n.clear(),o.clear(),t.clear(),null;!e&&c.mapping!=="standard"&&(e=!0,console.info("[input/gamepad] Connected pad reports non-standard mapping",`(id="${c.id}"). Throttle/look may not be on axes 1/2/3 as expected.`,"See BACKLOG.md for the calibration follow-up.")),a(c);const l=Ca(c,Ra.yaw),u=Ca(c,Ra.throttle),h=Ca(c,Ra.lookX),d=Ca(c,Ra.lookY),f=(o.has(Pt.Up)?1:0)-(o.has(Pt.Down)?1:0),g=(o.has(Pt.Left)?1:0)-(o.has(Pt.Right)?1:0),x=(l||f||g||u||h||d)!==0,p=o.size>0;return i=x||p,{throttle:u,yaw:l,pitch:f,roll:g,lookX:h,lookY:d}},isButtonDown(c){return o.has(c)},consumeJustPressed(c){return n.has(c)?(n.delete(c),!0):!1},consumeAnyJustPressed(){return n.size===0?!1:(n.clear(),!0)},suppressCurrentlyPressed(){for(const c of o)s.add(c)}}}const Tf=.2,Rf=1,Cf=25,rS=1e3,oS=35,aS=35;function Pf(){return(screen.orientation?.angle??window.orientation??0)*Math.PI/180}function cS(){let i=!1,e=!1,t=!1,n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},o=null,a=0,c=0,l=0,u=null,h=null;function d(p){if(p.alpha==null&&p.beta==null&&p.gamma==null)return;o={alpha:p.alpha??0,beta:p.beta??0,gamma:p.gamma??0},a=typeof performance<"u"?performance.now():Date.now();const m=g(o);if(u!==null){const S=m.pitch-u,y=m.yaw-h;Math.abs(S)<Cf&&Math.abs(y)<Cf&&(c+=S,l+=y)}if(u=m.pitch,h=m.yaw,n==null){const S=a;s===0&&(s=S),r.alpha+=o.alpha,r.beta+=o.beta,r.gamma+=o.gamma,r.n+=1,S-s>=rS&&r.n>0&&(n={alpha:r.alpha/r.n,beta:r.beta/r.n,gamma:r.gamma/r.n})}}function f(){n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},u=null,h=null}function g(p){const m=Pf(),S=Math.cos(m),y=Math.sin(m);return{pitch:p.beta*S-p.gamma*y,yaw:p.beta*y+p.gamma*S}}function x(){i||(window.addEventListener("deviceorientation",d),screen.orientation?.addEventListener("change",f),window.addEventListener("orientationchange",f),i=!0)}return{get active(){return!i||o==null?!1:(typeof performance<"u"?performance.now():Date.now())-a<1e3},get calibrated(){return n!=null},async request(){if(t)return x(),e;t=!0;const p=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(p&&typeof p.requestPermission=="function"){try{e=await p.requestPermission()==="granted"}catch{e=!1}e&&x()}else e=!0,x();return e},consumeTurn(){if(!i||u===null)return{pitch:0,yaw:0};const p={pitch:c*Lf*Rf,yaw:l*Lf*Rf};return c=0,l=0,p},sample(){if(!o||!n)return null;const p=o.beta-n.beta,m=o.gamma-n.gamma,S=Pf(),y=Math.cos(S),v=Math.sin(S),C=p*y-m*v,w=p*v+m*y;let A=If(C/oS,-1,1),P=If(w/aS,-1,1);return{pitchDelta:A*Tf,yawDelta:P*Tf}}}}function If(i,e,t){return i<e?e:i>t?t:i}const Lf=Math.PI/180,cu=typeof window<"u"&&"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0;function lS(){let i=!1;function e(t){t.pointerType!=="mouse"&&(i=!0)}return window.addEventListener("pointerdown",e,{passive:!0}),{consumeJustPressed(){const t=i;return i=!1,t},clear(){i=!1}}}function Nf(){return typeof window>"u"?!1:!!(window.__p5NativeHost===!0||window.webkit&&window.webkit.messageHandlers)}function rr(i){return i<-1?-1:i>1?1:i}function uS(){const i=tS(),e=sS(),t=cS(),n=lS();let s=["KB"];return{keyboard:i,gamepad:e,gyro:t,touch:n,isTouchDevice:cu,bridgeAvailable:Nf,async enableGyro(){return t.request()},sample(){const r=i.sample(),o=e.sample(),a=[];let c,l,u,h;o&&(o.throttle||o.yaw||o.pitch||o.roll)?(c=o.throttle,l=o.yaw,u=o.pitch,h=o.roll,a.push("PAD"),(r.throttle||r.yaw||r.pitch||r.roll)&&(c=rr(c+r.throttle),l=rr(l+r.yaw),u=rr(u+r.pitch),h=rr(h+r.roll),a.push("KB"))):(c=r.throttle,l=r.yaw,u=r.pitch,h=r.roll,(r.throttle||r.yaw||r.pitch||r.roll)&&a.push("KB"));const d=l,f=c,g=t.sample();g&&t.active&&(u=rr(u+g.pitchDelta),l=rr(l-g.yawDelta),a.push("GYRO"));let x=o?o.lookX:0,p=o?o.lookY:0;(x||p)&&!a.includes("PAD")&&a.push("PAD");const m=t.active?t.consumeTurn():{pitch:0,yaw:0},S=m.yaw,y=m.pitch;return(S||y)&&!a.includes("GYRO")&&a.push("GYRO"),a.length===0&&a.push("KB"),s=a,{throttle:c,yaw:l,pitch:u,roll:h,lookX:x,lookY:p,lookTurnX:S,lookTurnY:y,stickYaw:d,stickThrottle:f}},activeSources(){return s},consumeAnyJustPressed(){const r=i.consumeAnyJustPressed();e.sample();const o=e.consumeAnyJustPressed(),a=n.consumeJustPressed();return r||o||a}}}const Ne={title:"Super Vexo and the Mystery of the System",pressAnyKey:"Press any button to start",tapToStart:"Tap to start",intro:{skip:"Press any button to skip",tapToSkip:"Tap to skip",beats:["Long ago, in the kingdom of Astra…","The kingdom lived in peace.","Until Lord Draxos came.","He kidnapped Princess Astra.","And vanished into deep space.",`The Scientists handed Vexo the Super Mega Tablet.

Can you save her?`]},surface:{town:"AN UNNAMED WORLD",street:"unknown ground",ground:{plain:"open plain",savanna:"dry grassland",forest:"forest",hills:"hill country",mountain:"bare mountain",snow:"snowfield",dunes:"sand sea",stone:"stone desert",salt:"salt pan",badlands:"badlands",mesa:"plateau country",beach:"shoreline",sea:"open water"},leaveHint:"Descend to land · climb to leave the atmosphere"},onFoot:{skip:"Press any button to skip",climbOut:"L / A — land and climb out",noRoom:"No room to climb out here — move the ship",board:"L / A — climb back in",controls:"W A S D / stick — walk · Shift / B — sprint",talk:"E — talk to {name}"},dialogue:{more:"E — go on · walk away to leave"},map:{title:"THE WORLD",hint:"M / − — close · the whole continent, every inch of it",scale:"{km} × {kmZ} km · {m} m per pixel",building:"drawing the world… {pct}%"},gameOver:{title:"GAME OVER",ask:"Continue from your last save?",noSave:"You have no saved game. Start again?",yes:"YES — CONTINUE",no:"NO — TITLE SCREEN",hint:"← → to choose · Enter / A to take it"},inventory:{title:"GEAR",weapons:"Weapons",empty:"Nothing yet.",hint:"T / + — close · ← → or L / R — tabs · B / Esc — back",turnHint:"Drag, or A / D, to turn him",tablet:"Tablet",system:"System",save:"SAVE GAME",neverSaved:"Not saved yet.",savedJustNow:"Saved just now.",savedSecondsAgo:"Saved a few seconds ago.",savedMinutesAgo:"Saved {n} minutes ago.",saveFailed:"Couldn't save — this browser won't let the game store anything.",starterGun:"Sidearm",starterGunNote:"Equipped"},hud:{appName:"Tablet",velocity:"VEL",orientation:"ORI",fps:"FPS",dampingOn:"damping: ON",dampingOff:"damping: OFF",fastTravelButton:"FAST TRAVEL",fastTravelHint:"R1 / F",fastTravelActive:"warping…",rovers:"ROVERS",credits:"CRED",hackHint:"Hold L1 / H to hack",upgradeButton:"UPGRADES",upgradeHint:"Y / U",upgradeBought:"OWNED",upgradeBuy:"BUY",upgradeClose:"Close",screenHint:"Stick / swipe = scroll · B / Esc = back to Tablet",missionCompleteTitle:"MISSION COMPLETE",missionCompleteBody:"All rovers repaired. Earth Command transfers a bonus to your account.",missionCompleteCta:"Open Upgrades",missionCompleteClose:"Continue Flying",resetHint:"L3 / R = reset",tabletHint:"T / + — GEAR · M / − — MAP"}};function hS(){const i=document.createElement("div");i.id="tablet",i.innerHTML=`
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
  `,i.style.display="none",document.body.appendChild(i);const e=document.createElement("div");e.id="tablet-hint",e.textContent=Ne.hud.tabletHint,e.hidden=!0,document.body.appendChild(e);const t=i.querySelector("[data-velocity]"),n=i.querySelector("[data-orientation]"),s=i.querySelector("[data-fps]"),r=i.querySelector("[data-source]"),o=i.querySelector("[data-damping]"),a=i.querySelector("[data-fast-travel]"),c=i.querySelector("[data-upgrades]"),l=i.querySelector("[data-reset-hint]"),u=i.querySelector("[data-mission]"),h=i.querySelector("[data-rovers]"),d=i.querySelector("[data-credits]"),f=i.querySelector("[data-hack]"),g=i.querySelector("[data-hack-name]"),x=i.querySelector("[data-hack-fill]");let p=0,m=0,S=0;return{element:i,update({velocity:y,eulerDeg:v,dt:C,sources:w,dampingOn:A,inKph:P=!1}){t.textContent=P?`${Math.round(y*3.6)} km/h`:y.toFixed(1),n.textContent=`${v.x.toFixed(0)}°, ${v.y.toFixed(0)}°, ${v.z.toFixed(0)}°`,p+=1,m+=C,m>=.5&&(S=Math.round(p/m),p=0,m=0,s.textContent=String(S)),r.textContent=w.join("+"),o.textContent=A?Ne.hud.dampingOn:Ne.hud.dampingOff},show(){e.hidden=!0},hide(){e.hidden=!1},toggle(){return e.hidden=!e.hidden,!e.hidden},setHintVisible(y){e.hidden=!y},showFastTravel(){a.classList.add("tablet-app-btn--visible")},showUpgrades(){c.classList.add("tablet-app-btn--visible")},showResetHint(){l.hidden=!1},setMissionVisible(y){u.hidden=!y},updateMission({remaining:y,total:v,credits:C}){h.textContent=`${v-y}/${v}`,d.textContent=String(C)},updateHack({name:y,progress:v}){if(!y){f.hidden=!0;return}f.hidden=!1,g.textContent=y,x.style.width=`${Math.max(0,Math.min(1,v))*100}%`},onUpgradesClick(y){c.addEventListener("click",y)},setFastTravelActive(y){a.classList.toggle("tablet-app-btn--active",y);const v=a.querySelector(".tablet-app-btn__label");v.textContent=y?Ne.hud.fastTravelActive:Ne.hud.fastTravelButton,a.disabled=y},onFastTravel(y){a.addEventListener("click",y)}}}function dS(){const i=document.createElement("div");i.id="title-card";const e="2026-09-01 17:11";i.innerHTML=`
    <div class="title-card__inner">
      <h1 class="title-card__title">${Ne.title}</h1>
      <p class="title-card__prompt">${cu?Ne.tapToStart:Ne.pressAnyKey}</p>
      <p class="title-card__build">build ${e}</p>
    </div>
  `,document.body.appendChild(i);let t=null;return{hide(){i.style.opacity="0"},show(){t&&(clearTimeout(t),t=null),i.classList.remove("title-card--hidden"),i.style.opacity="",i.isConnected||document.body.appendChild(i)},dismiss(){i.classList.add("title-card--hidden"),t=setTimeout(()=>{i.remove(),t=null},500)}}}const fS=1.2,Df=540;function pS(i){const e=document.createElement("div");e.id="warp-flash",i.appendChild(e);let t=!1,n=0,s=!1,r=null,o=!1,a=null;function c(u,h={}){return t?!1:(t=!0,n=0,s=!1,r=h.onDone??null,o=!0,a=u,u.velocity.set(0,0,0),!0)}function l(u){if(!t)return;n+=u;const d=Math.max(0,Math.min(1,n/fS));let f;if(d<.4?f=d/.4:d<.6?f=1:f=1-(d-.6)/.4,e.style.opacity=String(Math.max(0,Math.min(1,f))),!s&&d>=.5&&a&&(a.mesh.position.set(0,0,Df),a.velocity.set(0,0,0),a.mesh.quaternion.identity(),s=!0),d>=1){t=!1,o=!1,e.style.opacity="0";const g=r;r=null,a=null,g&&g()}}return{begin:c,update:l,get active(){return t},get suppressInput(){return o},targetZ:Df}}const mS=""+new URL("invincibility_theme-K-djvXIp.mp3",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,gS=""+new URL("game_over-CW0fu00F.m4a",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,Uf=80,_S=18,xS=.06,vS=2.5,Of=280,yS=520,MS=.18,SS=.18,Ff=.45,bS=.3,wS=.6;function ES(){let i=null,e=null,t=!1,n=null,s=0,r=!1,o=null,a=null,c=null,l=0;function u(){if(r)return!0;const v=window.AudioContext||window.webkitAudioContext;return v?(i=new v,o=i.createGain(),o.gain.value=1,o.connect(i.destination),a=AS(i,o),c=TS(i,o),r=!0,!0):!1}function h(v){r&&(l=Math.min(1,Math.abs(v)))}function d(v){t=v,v&&(e||(e=new Audio(mS),e.loop=!0,e.preload="auto",e.volume=0),e.paused&&(e.currentTime=0,e.play().catch(()=>{})))}function f(){n||(n=new Audio(gS),n.preload="auto"),n.loop=!1,n.volume=wS,n.currentTime=0,n.play().catch(()=>{})}function g(){n&&(n.pause(),n.currentTime=0)}function x(v){if(!e)return;const C=t?Ff:0,w=v/bS*Ff;s=C>s?Math.min(C,s+w):Math.max(C,s-w),e.volume=s,s===0&&!e.paused&&e.pause()}function p(v){if(x(v),!r)return;const C=1-Math.pow(2,-v/SS),w=c.gainNode.gain.value,A=l*MS,P=w+(A-w)*C;c.gainNode.gain.setValueAtTime(P,i.currentTime);const O=Of+l*yS;c.filter.frequency.setValueAtTime(O,i.currentTime)}function m(){if(g(),e&&(e.pause(),e=null,t=!1,s=0),!!r){try{a.osc1.stop(),a.osc2.stop()}catch{}try{c.source.stop()}catch{}i.close(),r=!1,i=null}}function S({fromHz:v=300,toHz:C=900,durationS:w=.35,peakGain:A=.18}={}){if(!r)return;const P=i.currentTime,O=i.createOscillator();O.type="sine",O.frequency.setValueAtTime(v,P),O.frequency.exponentialRampToValueAtTime(C,P+w);const _=i.createGain();_.gain.setValueAtTime(0,P),_.gain.linearRampToValueAtTime(A,P+.03),_.gain.exponentialRampToValueAtTime(1e-4,P+w),O.connect(_),_.connect(o),O.start(P),O.stop(P+w+.05)}function y(){S({fromHz:440,toHz:660,durationS:.45,peakGain:.2}),setTimeout(()=>S({fromHz:660,toHz:990,durationS:.6,peakGain:.22}),200)}return{start:u,setSprinting:d,playGameOver:f,stopGameOver:g,update:p,setThrottle:h,chirp:S,fanfare:y,dispose:m,get running(){return r}}}function AS(i,e){const t=i.createOscillator(),n=i.createOscillator();t.type="triangle",n.type="triangle",t.frequency.value=Uf,n.detune.value=_S,n.frequency.value=Uf;const s=i.createBiquadFilter();s.type="lowpass",s.frequency.value=320,s.Q.value=.7;const r=i.createGain();return r.gain.value=xS,t.connect(s),n.connect(s),s.connect(r),r.connect(e),t.start(),n.start(),{osc1:t,osc2:n,filter:s,gain:r}}function TS(i,e){const t=i.sampleRate,n=i.createBuffer(1,t*vS,t),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=i.createBufferSource();r.buffer=n,r.loop=!0;const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=Of,o.Q.value=1.2;const a=i.createGain();return a.gain.value=0,r.connect(o),o.connect(a),a.connect(e),r.start(),{source:r,filter:o,gainNode:a}}const RS=8,CS=2,PS=100,Pa={ACTIVE:"active",COMPLETE:"complete"};function IS(i){const{rovers:e,markFixed:t}=i;let n=0,s=Pa.ACTIVE,r=null,o=null,a=null,c=null;function l(m){a=m}function u(m){c=m}function h(){let m=0;for(const S of e)S.fixed||(m+=1);return m}function d(){return e.length}function f(m,S){if(S>RS)return null;let y=null,v=on.hackRadius*on.hackRadius;for(const C of e){if(C.fixed)continue;const w=C.position.x-m.x,A=C.position.y-m.y,P=C.position.z-m.z,O=w*w+A*A+P*P;O<v&&(v=O,y=C)}return y}function g({shipPos:m,shipSpeed:S,holdActive:y,dt:v}){if(r=f(m,S),s!==Pa.ACTIVE){o=null;return}if(y&&r){if(o!==r&&(o=r,o.repairProgress=0),o.repairProgress=Math.min(1,o.repairProgress+v/CS),o.repairProgress>=1&&!o.fixed){const C=o;t(C),n+=C.creditValue,c&&c(C),o=null,h()===0&&(s=Pa.COMPLETE,n+=PS,a&&a())}}else o&&(o.repairProgress=0,o=null)}function x(m){return m>n?!1:(n-=m,!0)}function p(){n=0,s=Pa.ACTIVE,r=null,o=null}return{get state(){return s},get credits(){return n},get inRange(){return r},get repairing(){return o},grantCredits(m){n=Math.max(0,Math.round(m))},remaining:h,totalRovers:d,update:g,spendCredits:x,setOnComplete:l,setOnRepaired:u,reset:p}}function LS(){const i=[{id:"throttle",label:"Boost Throttle",description:"Push the engines harder. +40% forward acceleration, +25% top speed.",cost:100,bought:!1,apply(){on.maxThrottleAccel*=1.4,on.maxSpeed*=1.25}},{id:"agility",label:"Sharper Turning",description:"Twitch-faster yaw and pitch. +35% on both rates.",cost:90,bought:!1,apply(){on.yawRate*=1.35,on.pitchRate*=1.35}},{id:"hackRange",label:"Long-Range Hack",description:"The Tablet locks on from further out. Hack radius +50%.",cost:80,bought:!1,apply(){on.hackRadius*=1.5}}];function e(s,r){const o=i.find(a=>a.id===s);return!o||o.bought||!r.spendCredits(o.cost)?!1:(o.apply(),o.bought=!0,!0)}function t(s){const r=i.find(o=>o.id===s);return!r||r.bought?!1:(r.apply(),r.bought=!0,!0)}function n(){for(const s of i)s.bought=!1}return{upgrades:i,buy:e,buyFree:t,reset:n}}function NS({upgrades:i,mission:e,audio:t,onClose:n}){const s=document.createElement("div");s.id="mission-screens",s.innerHTML=`
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
  `,document.body.appendChild(s);const r=s.querySelector("#screen-complete"),o=s.querySelector("[data-complete-credits]"),a=s.querySelector("#screen-upgrades"),c=s.querySelector("[data-upgrades-credits]"),l=s.querySelector("[data-upgrade-list]");function u(){c.textContent=String(e.credits),l.innerHTML="";for(const m of i.upgrades){const S=document.createElement("li");S.className="upgrade-item"+(m.bought?" upgrade-item--bought":"");const y=!m.bought&&e.credits>=m.cost;S.innerHTML=`
        <div class="upgrade-item__head">
          <span class="upgrade-item__name">${m.label}</span>
          <span class="upgrade-item__cost">${m.cost} c</span>
        </div>
        <p class="upgrade-item__desc">${m.description}</p>
        <button class="screen-btn screen-btn--small" data-buy="${m.id}" ${m.bought||!y?"disabled":""}>
          ${m.bought?Ne.hud.upgradeBought:Ne.hud.upgradeBuy}
        </button>
      `,l.appendChild(S)}}function h(m){m==="complete"?(o.textContent=String(e.credits),r.hidden=!1):m==="upgrades"&&(u(),a.hidden=!1)}function d(m){m==="complete"?r.hidden=!0:m==="upgrades"&&(a.hidden=!0)}function f(){d("complete"),d("upgrades")}function g(){return!r.hidden||!a.hidden}function x(){return a.hidden?r.hidden?null:r.querySelector(".screen-card"):a.querySelector(".screen-card")}function p(m){const S=x();S&&(S.scrollTop+=m)}return s.addEventListener("click",m=>{const S=m.target;if(!(S instanceof Element))return;const y=S.getAttribute("data-action");if(y==="open-upgrades"){d("complete"),h("upgrades");return}if(y==="close-complete"){d("complete"),n?.();return}if(y==="close-upgrades"){d("upgrades"),n?.();return}const v=S.getAttribute("data-buy");v&&i.buy(v,e)&&(t&&t.chirp({fromHz:520,toHz:780,durationS:.25,peakGain:.18}),u())}),{show:h,hide:d,hideAll:f,isOpen:g,scrollBy:p}}const Bf=40;function DS(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#0c3a66"),s.addColorStop(.5,"#1b6aa3"),s.addColorStop(1,"#0c3a66"),n.fillStyle=s,n.fillRect(0,0,1024,512);const r=[];for(let a=0;a<6;a++)r.push({x:Math.random()*1024,y:512*.25+Math.random()*512*.5,r:50+Math.random()*90});for(const a of r){const c=8+Math.floor(Math.random()*6);for(let l=0;l<c;l++){const u=(Math.random()-.5)*a.r*1.6,h=(Math.random()-.5)*a.r*1,d=18+Math.random()*45,f=Math.random()<.35;n.beginPath(),n.fillStyle=f?"rgba(30, 70, 30, 0.85)":"rgba(70, 130, 55, 0.9)",n.arc(a.x+u,a.y+h,d,0,Math.PI*2),n.fill()}}for(let a=0;a<60;a++){const c=Math.random()*1024,l=Math.random()*512,u=14+Math.random()*50;n.beginPath(),n.fillStyle=`rgba(245, 250, 255, ${.1+Math.random()*.12})`,n.arc(c,l,u,0,Math.PI*2),n.fill()}for(const a of[0,512]){const c=n.createRadialGradient(512,a,0,512,a,153.6);c.addColorStop(0,"rgba(240, 248, 255, 0.85)"),c.addColorStop(1,"rgba(240, 248, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,1024,512)}const o=new ns(t);return o.colorSpace=Rt,o}function US(){const i=new Qe(Bf,64,32),e=new Xe({map:DS(),roughness:.85,metalness:0,emissive:1296}),t=new pe(i,e),n=new rn({color:6990591,transparent:!0,opacity:.18,blending:ri,side:jt}),s=new pe(new Qe(Bf*1.05,64,32),n);t.add(s);const r=.05;function o(a){t.rotation.y+=r*a}return{mesh:t,update:o}}const kf=14,zf=4.5,OS=.9;function FS(){const i=new st,e=new Wl(1,0);e.scale(zf,zf,kf*.5);const t=new Xe({color:3807780,roughness:.45,metalness:.6,emissive:3149848,flatShading:!0}),n=new pe(e,t);i.add(n);const s=new rn({color:16724016}),r=new pe(new Qe(OS,12,8),s);r.position.set(0,0,kf*.55),i.add(r);const o=document.createElement("canvas");o.width=o.height=128;{const h=o.getContext("2d"),d=64,f=h.createRadialGradient(d,d,0,d,d,d);f.addColorStop(0,"rgba(255, 60, 60, 1)"),f.addColorStop(.3,"rgba(255, 30, 30, 0.6)"),f.addColorStop(1,"rgba(255, 30, 30, 0)"),h.fillStyle=f,h.fillRect(0,0,128,128)}const a=new ns(o);a.colorSpace=Rt;const c=new Pd(new El({map:a,transparent:!0,blending:ri,depthWrite:!1}));c.position.copy(r.position),c.scale.setScalar(5.5),i.add(c);const l=new yt(.35,1.4,6);l.translate(0,0,-1.5);const u=new Xe({color:1837586,roughness:.6,metalness:.5,emissive:2099216,flatShading:!0});for(const h of[-1,1]){const d=new pe(l,u);d.position.set(h*2.6,0,-2.5),d.rotation.z=h*.25,d.rotation.y=h*.2,i.add(d)}return{group:i,hull:n,core:r,halo:c}}const Ia=i=>i*i*(3-2*i),BS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,lu=[3.5,3,4,4,3.5,4.5];function kS({renderer:i}){const e=new Lr;e.background=new We(66055);const t=new kt(50,window.innerWidth/window.innerHeight,.1,5e3);t.position.set(0,8,140),t.lookAt(0,0,0),e.add(new ba(10141920,1052704,.7));const n=new mi(16773848,1.1);n.position.set(50,30,80),e.add(n);const s=vf();e.add(s);const r=US();e.add(r.mesh);const o=FS();o.group.position.set(200,30,30),o.group.rotation.y=-.6,e.add(o.group);const a=new rn({color:16732224,transparent:!0,opacity:0,blending:ri,depthWrite:!1,side:Zt}),c=new pe(new hn(2,60,16,1,!0),a);c.rotation.x=Math.PI,e.add(c);const l=document.createElement("div");l.id="cinematic",l.innerHTML=`
    <div class="cinematic__skip" data-skip>${cu?Ne.intro.tapToSkip:Ne.intro.skip}</div>
    <div class="cinematic__text" data-text></div>
    <div class="cinematic__flash" data-flash></div>
  `,document.body.appendChild(l);const u=l.querySelector("[data-text]"),h=l.querySelector("[data-flash]");let d=0,f=0,g=0,x=!0,p=!0;function m(O,_,M){switch(O){case 0:{r.mesh.position.set(0,0,0),r.mesh.scale.setScalar(1+.02*Math.sin(g*.5)),o.group.position.x=200,c.material.opacity=0;break}case 1:{r.mesh.position.set(0,0,0),t.position.x=-10+20*BS(_),t.lookAt(0,0,0);break}case 2:{const F=140+-45*Ia(_);t.position.set(0,8,F),t.lookAt(0,0,0);const H=140,D=38;o.group.position.x=H+(D-H)*Ia(_),o.group.position.z=30-10*Ia(_),o.group.rotation.y=-.6-.4*Ia(_);break}case 3:{t.position.set(0,8,95),o.group.position.x=38,o.group.position.z=20,o.group.rotation.y=-1,c.material.opacity=.4+.35*Math.sin(g*12);const F=o.group.position,H=r.mesh.position;c.position.set((F.x+H.x)/2,(F.y+H.y)/2,(F.z+H.z)/2),c.lookAt(H),c.rotateX(Math.PI/2),t.position.x=Math.sin(g*30)*.4,t.position.y=8+Math.cos(g*27)*.3,t.position.z=95,t.lookAt(0,0,0);break}case 4:{o.group.position.x=38,o.group.position.z=20,t.position.set(0,8,95),t.lookAt(0,0,0),_<.5?(h.style.opacity=String(_*2*.95),c.material.opacity=.35*(1-_*2)):(o.group.visible=!1,r.mesh.visible=!1,c.material.opacity=0,h.style.opacity=String(Math.max(0,1-(_-.5)*2)));break}case 5:{h.style.opacity="0";break}}}function S(O){u.innerHTML=O.split(`
`).map(_=>`<p>${_}</p>`).join(""),u.classList.remove("cinematic__text--in"),u.offsetWidth,u.classList.add("cinematic__text--in")}function y(){d+=1,f=0,p=!0,d>=lu.length&&v()}function v(){x&&(x=!1,l.remove(),e.traverse(O=>{O.geometry&&O.geometry.dispose();const _=Array.isArray(O.material)?O.material:O.material?[O.material]:[];for(const M of _)M.map&&M.map.dispose(),M.dispose()}))}function C(){v()}function w(O){if(!x)return;g+=O,f+=O,p&&(S(Ne.intro.beats[d]),p=!1);const _=Math.min(1,f/lu[d]);m(d,_),r.update(O),o.halo.material.opacity=.7+.25*Math.sin(g*4),yf(s,t),f>=lu[d]&&y()}function A(){x&&i.render(e,t)}function P(O=window.innerWidth,_=window.innerHeight){t.aspect=O/_,t.updateProjectionMatrix()}return{update:w,render:A,skip:C,onResize:P,get active(){return x}}}function zS(){if(!(new URLSearchParams(window.location.search).get("debugPad")==="1"))return{update(){}};const e=document.createElement("div");e.id="debug-pad",Object.assign(e.style,{position:"fixed",top:"8px",left:"8px",zIndex:"9999",background:"rgba(0,0,0,0.78)",color:"#9af0a0",font:"11px ui-monospace, Menlo, Consolas, monospace",padding:"8px 10px",maxWidth:"min(92vw, 520px)",maxHeight:"60vh",overflow:"auto",border:"1px solid #3a3",borderRadius:"4px",whiteSpace:"pre-wrap",pointerEvents:"none",lineHeight:"1.35"}),document.body.appendChild(e);function t(){const n=Nf(),s=n?window.__p5NativeHost===!0?"__p5NativeHost=true":"webkit.messageHandlers":"(none — desktop / non-wrapper)",r=window.__nativeGamepadBridgeReady===!0,o=window.__nativeGamepadUpdateCount||0,a=window.__nativeGamepadLastRaw,c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[],l=c&&c[0];let u="(no pad)";if(l){const h=[];for(let d=0;d<l.buttons.length;d++)l.buttons[d]&&l.buttons[d].pressed&&h.push(d);u=`id=${JSON.stringify(l.id)}
mapping=${l.mapping}
axes=[${l.axes.map(d=>d.toFixed(2)).join(", ")}]
pressed buttons=[${h.join(", ")||"(none)"}]`}return["=== gamepad debug ===",`bridge available: ${n}  (${s})`,`bridge module ready: ${r}`,`__nativeGamepadUpdate calls: ${o}`,`last raw payload: ${a?JSON.stringify(a).slice(0,240):"(none yet)"}`,"","--- navigator.getGamepads()[0] ---",u].join(`
`)}return{update(){e.textContent=t()}}}const HS=[0,120,350,700],GS=2;function VS(i){const e=i.getBoundingClientRect(),t=Math.max(1,Math.round(e.width||window.innerWidth)),n=Math.max(1,Math.round(e.height||window.innerHeight));return{width:t,height:n,pixelRatio:Math.min(window.devicePixelRatio||1,GS)}}function WS(i,e){let t={width:0,height:0,pixelRatio:0};const n=[];function s(){const a=VS(i);a.width===t.width&&a.height===t.height&&a.pixelRatio===t.pixelRatio||(t=a,e(a))}function r(){for(const a of n.splice(0))clearTimeout(a);for(const a of HS)n.push(setTimeout(s,a))}const o=new ResizeObserver(s);return o.observe(i),window.addEventListener("resize",s),window.addEventListener("orientationchange",r),window.visualViewport?.addEventListener("resize",s),window.addEventListener("pageshow",r),screen.orientation?.addEventListener("change",r),s(),{measure:s,dispose(){for(const a of n.splice(0))clearTimeout(a);o.disconnect(),window.removeEventListener("resize",s),window.removeEventListener("orientationchange",r),window.visualViewport?.removeEventListener("resize",s),window.removeEventListener("pageshow",r),screen.orientation?.removeEventListener("change",r)}}}const XS=new U(0,1.4,-5.5),uu=Xi.degToRad(180),hu=Xi.degToRad(85),qS=.04,YS=.09,Hf=new U(1,0,0),Gf=new U(0,1,0);function Vf(i){return i<-1?-1:i>1?1:i}function La(i,e){return i<-e?-e:i>e?e:i}function du(i,e){return 1-Math.pow(2,-i/e)}function KS(i){let e=0,t=0,n=0,s=0,r=!1;const o=new U,a=new U,c=new U;return{get orbit(){return{yaw:e,pitch:t}},reset(){e=0,t=0,n=0,s=0,r=!1},update(l,u,h){const d=Vf(u?.x??0),f=Vf(u?.y??0);if(n=La(n+(u?.turnX??0),uu),s=La(s-(u?.turnY??0),hu),Math.abs(d)>.05||Math.abs(f)>.05){const m=du(h,.25);n-=n*m,s-=s*m}const g=La(d*uu+n,uu),x=La(-f*hu+s,hu),p=du(h,YS);e+=(g-e)*p,t+=(x-t)*p,o.copy(XS).multiplyScalar(l.mesh.scale.x).applyAxisAngle(Hf,t).applyAxisAngle(Gf,e).applyQuaternion(l.mesh.quaternion),a.copy(l.mesh.position).add(o),r?i.position.lerp(a,du(h,qS)):(i.position.copy(a),r=!0),c.set(0,1,0).applyAxisAngle(Hf,t).applyAxisAngle(Gf,e).applyQuaternion(l.mesh.quaternion),i.up.copy(c),i.lookAt(l.mesh.position)}}}const $S=[{name:"The Camelloo",of:"Camels Kindom",at:[.16,.16],r:.3,uplift:.14,moisture:.02,heat:.94},{name:"The Camelloo",of:"the deep sand",at:[.06,.34],r:.2,uplift:.1,moisture:.04,heat:.92},{name:"The Vulcans",of:"Rock People Kindom",at:[.89,.2],r:.26,uplift:.95,moisture:.3,heat:.8},{name:"Astro Lake",of:"the lake country",at:[.63,.2],r:.2,uplift:.3,moisture:.92,heat:.44},{name:"Estronic",of:"capital of Continent Alpha",at:[.49,.47],r:.16,uplift:.2,moisture:.62,heat:.58},{name:"Dwellers Territory",of:"the wooded hills",at:[.42,.74],r:.24,uplift:.52,moisture:.86,heat:.54},{name:"The Dwellers",of:"Elfs Kindom",at:[.14,.88],r:.32,uplift:.3,moisture:.99,heat:.6},{name:"The Magica Republic",of:"the Republic of Wizards",at:[.87,.78],r:.3,uplift:.58,moisture:.44,heat:.24},{name:"the west shore",of:"low ground along the western sea",at:[-.04,.6],r:.2,uplift:.1,moisture:.7,heat:.56}],jS=[{name:"Only river to the Camelloo",points:[[.03,.33],[.11,.35],[.19,.33],[.27,.35],[.34,.36],[.4,.36],[.45,.38]]},{name:"Artifical river",points:[[0,.5],[.12,.47],[.24,.45],[.34,.43],[.42,.42]],straight:!0},{name:"Lava river",points:[[.79,.33],[.77,.38],[.76,.43],[.74,.48]],lava:!0},{name:"the north river",points:[[.42,0],[.4,.08],[.36,.14],[.3,.19],[.26,.25],[.28,.31],[.34,.34]]},{name:"the river out of Astro Lake",points:[[.56,.3],[.54,.36],[.52,.41],[.5,.44]]},{name:"the south road river",points:[[.47,.57],[.45,.64],[.42,.71],[.38,.78],[.35,.86]]},{name:"the Dwellers water",points:[[.2,.66],[.26,.7],[.31,.74],[.33,.8],[.31,.88]]},{name:"the barrier river",points:[[.62,.55],[.65,.62],[.68,.68],[.7,.75],[.71,.83]],magic:!0},{name:"the east river",points:[[.74,.52],[.79,.55],[.84,.57],[.9,.58]]}],fu={points:[[.55,.06],[.62,.04],[.69,.08],[.73,.15],[.73,.23],[.7,.29],[.64,.33],[.58,.32],[.54,.27],[.53,.19],[.53,.12]]},ZS=[{points:[[.03,.63],[.12,.6],[.22,.59],[.31,.6],[.4,.63]],height:1},{points:[[.4,.63],[.47,.7],[.54,.78],[.6,.86],[.64,.95]],height:.9}],Wf=[{name:"Estronic",of:"capital of Continent Alpha",kind:"capital",at:[.49,.47],r:620,walls:14276303,roofs:10262672,trim:8225416,glass:4156288},{name:"West Village",of:"on the edge of the Camelloo",kind:"village",at:[.23,.52],r:190,walls:13216644,roofs:9270608,trim:7298112},{name:"Bobo Village",of:"of the Rock People",kind:"village",at:[.87,.42],r:190,walls:7038304,roofs:4208687,trim:3025190}],JS={Estronic:[{name:"Ferra",lines:["Estronic sits in the middle of Continent Alpha, and every road you can see runs out to somewhere worth going.","The shipport is on the south side. Set down on a lit ring and nobody will complain."]},{name:"Oben",lines:["Fly north-east far enough and the ground goes white. That is the Spire, over in the Vulcans.","The Rock People live under it. They say the mountain is quiet. They say that every year."]},{name:"Sil",lines:["Astro Lake is a morning north of here. Big water, cold, and no bottom that anyone has found."]},{name:"Marn",lines:["West of us the green runs out and the Camelloo begins. Sand as far as you can fly.","There is one river into the Camelloo. One. Do not go out there expecting a second."]},{name:"Yeska",lines:["South and west is the Dwellers’ forest. Elves. Polite, and they would rather you did not."]},{name:"Colm",lines:["Do not cross the invisible barrier in the south-east without being asked. The Magica Republic keeps to itself."]},{name:"Vess",lines:["The tower in the middle? You can see it from outside the city. That is what it is for."]},{name:"Tarro",lines:["Monsters camp out in the wild country. Fires at night. Give them a wide berth or bring the gun."]},{name:"Enna",lines:["Two villages worth the trip: West Village out towards the sand, Bobo under the mountain."]},{name:"Rulf",lines:["Nine kingdoms’ worth of road meets in this city, and every one of them is somebody else’s edge of the world."]},{name:"Miot",lines:["Rivers run out of here in every direction. Follow one and you will get somewhere eventually."]},{name:"Sabb",lines:["I have never left the walls. There are no walls any more, and I have still never left."]},{name:"Della",lines:["Weather comes off Astro Lake. When the north goes grey, get indoors."]},{name:"Poy",lines:["Watch where you set that ship down. The pads are lit for a reason."]},{name:"Ivo",lines:["Everything north-east of here is uphill. Everything. I have walked it."]},{name:"Wren",lines:["You are the one with the spacecraft, then. We do not get many."]}],"West Village":[{name:"Idra",lines:["We are the last green thing before the sand. Fill your water here."]},{name:"Bo",lines:["The artificial river runs past us. Somebody dug it, long ago. Nobody remembers who."]},{name:"Halle",lines:["Camels come through in the season, out of the Camelloo. Big feet, worse tempers."]}],"Bobo Village":[{name:"Grud",lines:["You are standing on the Vulcans. Under us it is warm all the way down."]},{name:"Ashet",lines:["The Spire has a hole in the top and snow round it. Both true at once. That is the mountain for you."]},{name:"Perrin",lines:["A lava river ran through here once. You are walking on it."]}]},Xf=[.89,.2],qf=6,_t=i=>i/qf,In=_t(3400),or=_t(2100),Yf=_t(3100),Kf=_t(480),QS=_t(25),e1=_t(300),gi=2e4,t1=62e3,n1=127,$f=620,i1=-6,jf=4200,s1=300,an=65e3,fn=43e3,r1=.8,ss=0,ei={x:(Xf[0]-.5)*2*65e3,z:(Xf[1]-.5)*2*43e3,radius:5200,height:1450,craterR:520,craterDepth:320},Zf=Math.tan(33*Math.PI/180);function o1(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const pu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],a1=.5*(Math.sqrt(3)-1),no=(3-Math.sqrt(3))/6;function Na(i){const e=o1(i),t=new Uint8Array(512),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1)),o=n[s];n[s]=n[r],n[r]=o}for(let s=0;s<512;s++)t[s]=n[s&255];return function(r,o){const a=(r+o)*a1,c=Math.floor(r+a),l=Math.floor(o+a),u=(c+l)*no,h=r-(c-u),d=o-(l-u),f=h>d?1:0,g=h>d?0:1,x=h-f+no,p=d-g+no,m=h-1+2*no,S=d-1+2*no,y=c&255,v=l&255;let C=0,w=.5-h*h-d*d;if(w>0){const O=pu[t[y+t[v]]&7];w*=w,C+=w*w*(O[0]*h+O[1]*d)}let A=.5-x*x-p*p;if(A>0){const O=pu[t[y+f+t[v+g]]&7];A*=A,C+=A*A*(O[0]*x+O[1]*p)}let P=.5-m*m-S*S;if(P>0){const O=pu[t[y+1+t[v+1]]&7];P*=P,C+=P*P*(O[0]*m+O[1]*S)}return 70*C}}const io=i=>i<0?0:i>1?1:i,Nt=(i,e,t)=>{const n=io((t-i)/(e-i));return n*n*(3-2*n)},Mn=(i,e,t)=>i+(e-i)*t,Ye={SEA:"sea",BEACH:"beach",PLAIN:"plain",SAVANNA:"savanna",FOREST:"forest",HILLS:"hills",MOUNTAIN:"mountain",SNOW:"snow",DUNES:"dunes",STONE_DESERT:"stone",SALT:"salt",BADLANDS:"badlands",MESA:"mesa"},en={[Ye.SEA]:1915725,[Ye.BEACH]:13482642,[Ye.PLAIN]:6056771,[Ye.SAVANNA]:8680794,[Ye.FOREST]:3755310,[Ye.HILLS]:5465665,[Ye.MOUNTAIN]:8223340,[Ye.SNOW]:15265008,[Ye.DUNES]:11040327,[Ye.STONE_DESERT]:7369301,[Ye.SALT]:15721154,[Ye.BADLANDS]:9073235,[Ye.MESA]:10714715};function c1({seed:i=20260827}={}){const e=Na(i),t=Na(i+101),n=Na(i+202),s=Na(i+303);function r(I,k,G,$,te,ee=.38){let se=0,ne=1,de=0,he=1/te;for(let Z=0;Z<$;Z++)se+=I(k*he,G*he)*ne,de+=ne,ne*=ee,he*=2.02;return se/de}function o(I,k,G,$,te,ee=.42){let se=0,ne=1,de=0,he=1/te,Z=1;for(let T=0;T<$;T++){let ce=1-Math.abs(I(k*he,G*he));ce*=ce,ce*=Z,Z=io(ce*2.2),se+=ce*ne,de+=ne,ne*=ee,he*=2.02}return se/de}function a(I,k,G,$){return[I+r(n,I,k,2,$)*G,k+r(s,I,k,2,$)*G]}function c(I,k){const G=r(e,I,k,4,t1,.42)*.3+1,$=Math.max(Math.abs(I)/an,Math.abs(k)/fn),te=Nt(r1,1.02,$)*2.4+Math.max(0,$-1)*3;return G-te}const l=$S.map(I=>({x:(I.at[0]-.5)*2*an,z:(I.at[1]-.5)*2*fn,rr:(I.r*2*an)**2,uplift:I.uplift,moisture:I.moisture,heat:I.heat})),u=512,h=340,d=an*2/u,f=fn*2/h;let g=null;function x(){const I=new Float32Array(u*h).fill(1e9),k=new Float32Array(u*h).fill(1e9),G=new Uint8Array(u*h),$=(se,ne,de)=>{const he=Math.round(ne*u),Z=Math.round(de*h);he<0||Z<0||he>=u||Z>=h||(se[Z*u+he]=0)},te=(se,ne)=>{for(let de=0;de<ne.length-1;de++){const[he,Z]=ne[de],[T,ce]=ne[de+1],ae=Math.ceil(Math.hypot((T-he)*u,(ce-Z)*h))+1;for(let le=0;le<=ae;le++)$(se,he+(T-he)*le/ae,Z+(ce-Z)*le/ae)}};for(const se of jS)te(I,se.points);for(const se of ZS)te(k,se.points);for(let se=0;se<h;se++){const ne=(se+.5)/h;for(let de=0;de<u;de++){const he=(de+.5)/u;let Z=!1;for(let T=0,ce=fu.points.length,ae=ce-1;T<ce;ae=T++){const[le,Me]=fu.points[T],[Te,Ee]=fu.points[ae];Me>ne!=Ee>ne&&he<(Te-le)*(ne-Me)/(Ee-Me)+le&&(Z=!Z)}Z&&(G[se*u+de]=1)}}const ee=se=>{const ne=d,de=f,he=Math.hypot(ne,de);for(let Z=0;Z<h;Z++)for(let T=0;T<u;T++){const ce=Z*u+T;let ae=se[ce];T>0&&(ae=Math.min(ae,se[ce-1]+ne)),Z>0&&(ae=Math.min(ae,se[ce-u]+de)),T>0&&Z>0&&(ae=Math.min(ae,se[ce-u-1]+he)),T<u-1&&Z>0&&(ae=Math.min(ae,se[ce-u+1]+he)),se[ce]=ae}for(let Z=h-1;Z>=0;Z--)for(let T=u-1;T>=0;T--){const ce=Z*u+T;let ae=se[ce];T<u-1&&(ae=Math.min(ae,se[ce+1]+ne)),Z<h-1&&(ae=Math.min(ae,se[ce+u]+de)),T<u-1&&Z<h-1&&(ae=Math.min(ae,se[ce+u+1]+he)),T>0&&Z<h-1&&(ae=Math.min(ae,se[ce+u-1]+he)),se[ce]=ae}};return ee(I),ee(k),{river:I,ridge:k,lake:G}}function p(I,k,G){const $=(k+an)/(an*2)*u-.5,te=(G+fn)/(fn*2)*h-.5,ee=Math.floor($),se=Math.floor(te);if(ee<0||se<0||ee>=u-1||se>=h-1)return 1e9;const ne=$-ee,de=te-se,he=I[se*u+ee],Z=I[se*u+ee+1],T=I[(se+1)*u+ee],ce=I[(se+1)*u+ee+1];return Mn(Mn(he,Z,ne),Mn(T,ce,ne),de)}const m=Wf.map(I=>({name:I.name,x:(I.at[0]-.5)*2*an,z:(I.at[1]-.5)*2*fn,r:I.r,reach:I.r*2.4,level:0}));let S=!1,y=!1;const v={uplift:.5,moisture:.5,heat:.5};function C(I,k){const G=gi*.55,$=I+r(t,I,k,2,gi*2.2)*G,te=k+r(n,I,k,2,gi*2.2)*G;let ee=0,se=0,ne=0,de=0;for(const he of l){const Z=(($-he.x)**2+(te-he.z)**2)/he.rr,T=1/(Z*Z*Z+.02);ee+=he.uplift*T,se+=he.moisture*T,ne+=he.heat*T,de+=T}return v.uplift=ee/de,v.moisture=se/de,v.heat=ne/de,v}function w(I,k){return io(C(I,k).uplift+r(t,I+4e3,k-9e3,3,gi*.8,.45)*.22)}function A(I,k){return io(C(I,k).moisture+r(n,I-21e3,k+12e3,3,gi*.7,.45)*.2)}function P(I,k){return io(C(I,k).heat+r(s,I*.3+7e3,k,2,gi*1.6,.45)*.14)}function O(I,k,G){const $=I/k,te=Math.floor($),ee=$-te;return(te+Nt(0,1,Math.min(1,ee*G)))*k}const _=.22,M=or*_*Zf;function F(I){const k=I-Math.floor(I),G=1-_;if(k<G){const $=k/G;return $*$*(3-2*$)}return 1-(k-G)/_}function H(I,k){return{continent:c(I,k),uplift:w(I,k),moisture:A(I,k),heat:P(I,k)}}const D=_t(150);function q(I,k,G){return I<D*.8&&G>.5?.05:.12+k*.45}function E(I){const{uplift:k,moisture:G}=I,$=1-G;return{alpine:Nt(.56,.92,k)*(1-Nt(.42,.62,$)),plateau:Nt(.58,.72,$)*Nt(.36,.52,k)*(1-Nt(.66,.84,k)),sandy:Nt(.64,.84,$)*(1-Nt(.34,.6,k))}}function V(I,k,G){const $=G??H(I,k),{continent:te,uplift:ee,moisture:se}=$,ne=1-se,{alpine:de,plateau:he,sandy:Z}=E($);let T=r(e,I,k,3,gi*.9)*_t(90);if(T+=r(t,I,k,3,In*3.2)*Kf*(.04+ee*ee*1.6),de>.001){const[ge,ke]=a(I,k,In*.75,In*6);let _e=o(e,ge,ke,5,In*4);_e=Math.pow(_e,1.25),T=Mn(T,T+_e*Yf,de)}if(he>.01){const ge=_t(1500)*(.45+ee*.8)+r(t,I,k,2,In*6)*_t(260),[ke,_e]=a(I,k,In*.8,In*5),ze=Nt(.55,.92,o(s,ke,_e,3,In*3))*_t(1100);T=Mn(T,O(ge-ze,_t(170),3.2),he)}const ce=Math.hypot(I-ei.x,k-ei.z);if(ce<ei.radius){const ge=1-ce/ei.radius,ke=Math.atan2(k-ei.z,I-ei.x),_e=Math.sin(ke*17+r(t,I,k,2,900)*2.2)*34*ge*(1-ge)*4,Re=n1+Math.pow(ge,1.6)*ei.height-Nt(ei.craterR,ei.craterR*.3,ce)*ei.craterDepth-Math.abs(_e)+r(s,I,k,3,120,.5)*9;T=Mn(T,Re,Nt(0,.34,ge))}if(Z>.001){const ge=r(t,I,k,2,gi*2)*.9,ke=I*Math.cos(ge)+k*Math.sin(ge),_e=r(n,I,k,2,or*5)*or*.5,Re=F((ke+_e)/or),ze=F((ke*2.7-_e)/or);T+=(Re*.78+ze*.22)*M*Z}if(ne>.5&&T<D&&te>.12){const ge=Nt(.5,.72,ne)*Nt(D,_t(20),T);T=Mn(T,D*.55,ge*.95)}const[ae,le]=a(I,k,In*1.2,In*7),Me=o(n,ae,le,3,In*5),Te=Nt(.5,.98,Me);Te>.001&&(T-=Te*_t(340)*(.06+ee*ee*1.1)*(1-he*.8));const Ee=q(T,ee,ne);Ee>.01&&(T+=r(s,I,k,3,17,.5)*Ee);const L=_t(760)*Nt(-.05,.55,te),b=Nt(-.1,.14,te),J=Mn(-_t(900),_t(10),Nt(-.6,.14,te));let ie=Mn(J,T+L,b);S||B(),g||(g=x());const me=p(g.ridge,I,k);me<jf&&(ie+=Nt(jf,0,me)*s1*b);const oe=p(g.river,I+r(t,I,k,2,2600)*520,k+r(n,I,k,2,2600)*520);if(oe<$f&&b>.01){const ge=Nt($f,0,oe);ie=Mn(ie,Math.min(ie,i1),Math.min(1,ge*1.25)*b)}const Pe=Math.round((I+an)/(an*2)*u),ve=Math.round((k+fn)/(fn*2)*h);if(Pe>=0&&ve>=0&&Pe<u&&ve<h&&g.lake[ve*u+Pe])ie=Math.min(ie,-_t(160));else if(Pe>=1&&ve>=1&&Pe<u-1&&ve<h-1){let ge=0;for(const[ke,_e]of[[1,0],[-1,0],[0,1],[0,-1]])ge+=g.lake[(ve+_e)*u+Pe+ke];ge>0&&r(n,I,k,2,1400)>.1&&(ie=Math.min(ie,-_t(60)))}if(!y)for(const ge of m){const ke=Math.hypot(I-ge.x,k-ge.z);ke>ge.reach||(ie=Mn(ie,ge.level,Nt(ge.reach,ge.r*.75,ke)))}return ie}function B(){S=!0,y=!0;for(const I of m){let k=0,G=0;for(let $=0;$<12;$++){const te=$/12*Math.PI*2,ee=I.r*($%2?.75:.35);k+=V(I.x+Math.cos(te)*ee,I.z+Math.sin(te)*ee),G++}I.level=k/G}y=!1}function j(I,k,G=4){const $=H(I,k),te=V(I,k,$),ee=V(I+G,k)-V(I-G,k),se=V(I,k+G)-V(I,k-G),ne=Math.atan(Math.hypot(ee,se)/(2*G));return{height:te,slope:ne,slopeDeg:ne*180/Math.PI,region:$,biome:X(I,k,te,ne,$)}}function X(I,k,G,$,te){if(G<=ss)return Ye.SEA;const{uplift:ee,moisture:se,heat:ne}=te,de=1-se,he=$*180/Math.PI,{alpine:Z,plateau:T,sandy:ce}=E(te),ae=Mn(_t(1500),_t(6400),ne);if(G>ae&&!(T>Z))return Ye.SNOW;const le=ae*.62;return G<_t(40)&&he<3&&de<.55?Ye.BEACH:T>.35&&T>=Z?G<D*.8&&he<2.5?Ye.SALT:ee>.44?Ye.MESA:Ye.BADLANDS:ce>.35&&ce>=Z?G<D*.8&&he<2.5?Ye.SALT:Ye.DUNES:de>.58?G<D*.8&&he<2.5?Ye.SALT:he>30||G>le?Ye.MOUNTAIN:Ye.STONE_DESERT:he>30||G>le?Ye.MOUNTAIN:se<.5?Ye.SAVANNA:ee>.62||he>13?Ye.HILLS:se>.66?Ye.FOREST:Ye.PLAIN}function Q(I,k){return j(I,k).biome}return{heightAt:V,sampleAt:j,biomeAt:Q,regionAt:H,continentField:c,upliftField:w,moistureField:A,heatField:P,styleAt:E,get towns(){return S||B(),m},snowlineAt(I,k){return Mn(_t(1500),_t(6400),P(I,k))},seaLevel:ss,constants:{SHRINK:qf,RIDGE_SPACING:In,DUNE_SPACING:or,MOUNTAIN_RELIEF:Yf,HILL_RELIEF:Kf,PLAIN_RELIEF:QS,DUNE_HEIGHT:e1,REGION_SIZE:gi,REPOSE:Zf}}}function Sn(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Lt;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Jf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const g=Jf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Jf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new It(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Qf(i,e){if(e===Lm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Gc||e===xh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Gc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function l1(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function u1(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const Da=3.2;function h1(i,e,{x:t,z:n,w:s,d:r,storeys:o}){const a=o*Da,c=new yt(s,a,r);c.translate(t,a/2,n),i.push(c);const l=new yt(s+1.2,1.1,r+1.2);l.translate(t,a+.55,n),i.push(l);const u=Math.max(1,Math.round(o/2));for(let h=0;h<u;h++){const d=(h+.62)/u*a,f=Math.min(2.2,a/u*.5),g=new yt(s*.82,f,r+.5);g.translate(t,d,n),e.push(g);const x=new yt(s+.5,f,r*.82);x.translate(t,d,n),e.push(x)}}function d1(i,e,{x:t,z:n,w:s,d:r,storeys:o,angle:a}){const c=o*Da,l=new yt(s,c,r);l.translate(0,c/2,0);const u=new hn(Math.hypot(s,r)*.54,Math.max(1.6,c*.34),4);u.rotateY(Math.PI/4),u.translate(0,c+Math.max(1.6,c*.34)/2,0);for(const h of[l,u])h.rotateY(a),h.translate(t,0,n);return i.push(l),e.push(u),{x:t,z:n,halfX:Math.max(s,r)*.5,halfZ:Math.max(s,r)*.5}}function f1(i,e,t,n){const s=l1(u1(i.name)),r=[],o=[],a=[],c=[],l=[],u=[],h=[],d=[],f=p=>{h.push(d1(r,o,p))};if(i.kind==="capital"){const y=new mt(i.r*.82,i.r*.86,.4,40);y.translate(0,.2,0),l.push(y);const v=Da*40,C=new yt(19,v,19);C.translate(0,v/2,0),r.push(C);const w=new yt(19.6,v*.82,13);w.translate(0,v*.5,0),c.push(w);const A=new mt(.7,1.1,26,6);A.translate(0,v+13,0),a.push(A),h.push({x:0,z:0,halfX:11,halfZ:11});for(let D=-4;D<=4;D++)for(let q=-4;q<=4;q++){if(D===0&&q===0)continue;const E=D*62,V=q*62,B=Math.hypot(D,q)/(4+.5);if(B>1.05||D>=1&&q>=2||s()<.13)continue;const j=46,X=s()<.45?1:2,Q=s()<.4?1:2;for(let I=0;I<X;I++)for(let k=0;k<Q;k++){const G=j/X,$=j/Q,te=G-5-s()*4,ee=$-5-s()*4;if(te<8||ee<8)continue;const se=(I-(X-1)/2)*G,ne=(k-(Q-1)/2)*$,de=Math.max(2,Math.round((1-B)**1.6*20+2+(s()<.12?9:0)+s()*3));h1(r,c,{x:E+se,z:V+ne,w:te,d:ee,storeys:de}),h.push({x:E+se,z:V+ne,halfX:te/2,halfZ:ee/2})}}const P=62*2.4,O=62*2.9,_=new yt(62*3.4,.5,62*2.6);_.translate(P,.25,O),l.push(_);for(let D=0;D<4;D++){const q=P+(D%2-.5)*62*1.6,E=O+(Math.floor(D/2)-.5)*62*1.2,V=new zn(13,1.1,6,20);V.rotateX(Math.PI/2),V.translate(q,.7,E),u.push(V),d.push({x:q,z:E,r:13})}const M=Da*12,F=new mt(3.4,4.6,M,10);F.translate(P-62*1.9,M/2,O-62*1.5),r.push(F);const H=new mt(9,7,9,10);H.translate(P-62*1.9,M+4.5,O-62*1.5),c.push(H),h.push({x:P-62*1.9,z:O-62*1.5,halfX:5,halfZ:5});for(let D=0;D<2;D++){const q=P+(D-.5)*62*1.7,E=O+62*1.15,V=new yt(62*1.3,13,26);V.translate(q,6.5,E),r.push(V);const B=new mt(13,13,62*1.3,12,1,!1,0,Math.PI);B.rotateZ(Math.PI/2),B.translate(q,13,E),a.push(B),h.push({x:q,z:E,halfX:62*.65,halfZ:13})}}else{const p=13+Math.floor(s()*5);for(let S=0;S<p;S++){const y=S/p*Math.PI*2+s()*.4,v=i.r*(.3+s()*.42);f({x:Math.cos(y)*v,z:Math.sin(y)*v,w:7+s()*6,d:7+s()*6,storeys:1+Math.floor(s()*2),angle:y+Math.PI/2+(s()-.5)*.5})}const m=new mt(2.2,2.4,1.6,10);m.translate(0,.8,0),a.push(m),h.push({x:0,z:0,halfX:2.6,halfZ:2.6})}const g=new st,x=[[r,new Xe({color:i.walls,roughness:.92})],[o,new Xe({color:i.roofs,roughness:.86})],[a,new Xe({color:i.trim,roughness:.95})],[c,new Xe({color:i.glass??2375758,roughness:.12,metalness:.72})],[l,new Xe({color:7237750,roughness:.98})],[u,new Xe({color:9433343,emissive:3135231,emissiveIntensity:1.4,roughness:.5})]];for(const[p,m]of x){if(!p.length)continue;const S=Sn(p,!1);for(const v of p)v.dispose();const y=new pe(S,m);y.castShadow=!0,y.receiveShadow=!0,g.add(y)}g.position.set(e,n,t);for(const p of h)p.x+=e,p.z+=t;return{group:g,footprints:h,name:i.name,kind:i.kind,x:e,z:t,level:n,radius:i.r,pads:d.map(p=>({x:p.x+e,z:p.z+t,r:p.r}))}}const p1=1.15,m1=2.6,g1=3.4,ep=[3960485,8014699,5077586,11040316,5462111,9194052],tp=[14198404,11565653,9067068,15713956];function _1(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function x1(){const i=[],e=new yt(.42,.62,.26);e.translate(0,1.16,0),i.push(e);const t=new Qe(.13,8,6);t.translate(0,1.6,0),i.push(t);for(const n of[-1,1]){const s=new yn(.055,.42,3,6);s.translate(n*.27,1.14,0),i.push(s)}return Sn(i,!1)}function v1(){const i=new yn(.075,.56,3,6);return i.translate(0,-.34,0),i}function y1({town:i,count:e,isStreet:t,seed:n=1}){const s=_1(n),r=x1(),o=v1(),a=new Xe({roughness:.85}),c=new Xe({roughness:.9}),l=new kr(r,c,e),u=new kr(o,c,e),h=new kr(o,c,e);for(const w of[l,u,h])w.instanceMatrix.setUsage(Vm),w.frustumCulled=!1,w.castShadow=!0;l.instanceColor=new Ks(new Float32Array(e*3),3),u.instanceColor=new Ks(new Float32Array(e*3),3),h.instanceColor=new Ks(new Float32Array(e*3),3);const d=new st;d.add(l,u,h);const f=new We,g=new $e,x=new qt,p=new Yt,m=new U,S=new U(1,1,1);function y(){for(let w=0;w<40;w++){const A=s()*Math.PI*2,P=Math.sqrt(s())*i.radius*.62,O=i.x+Math.cos(A)*P,_=i.z+Math.sin(A)*P;if(t(O,_))return{x:O,z:_}}return{x:i.x,z:i.z}}const v=[];for(let w=0;w<e;w++){const A=y(),P=ep[Math.floor(s()*ep.length)];v.push({x:A.x,z:A.z,heading:s()*Math.PI*2,to:y(),phase:s()*Math.PI*2,wait:s()*3,shirt:P,skinTone:tp[Math.floor(s()*tp.length)],talking:!1}),f.setHex(P),l.instanceColor.setXYZ(w,f.r,f.g,f.b),f.multiplyScalar(.72),u.instanceColor.setXYZ(w,f.r,f.g,f.b),h.instanceColor.setXYZ(w,f.r,f.g,f.b)}function C(w,A,P){const O=Math.sin(A.phase)*(A.moving?.55:.04),_=A.moving?Math.abs(Math.sin(A.phase))*.035:0;p.set(0,A.heading,0),x.setFromEuler(p),m.set(A.x,P+_,A.z),g.compose(m,x,S),l.setMatrixAt(w,g);for(const[M,F]of[[u,1],[h,-1]])p.set(O*F,A.heading,0),x.setFromEuler(p),m.set(A.x+Math.cos(A.heading)*.11*F,P+.86+_,A.z-Math.sin(A.heading)*.11*F),g.compose(m,x,S),M.setMatrixAt(w,g)}return{group:d,folk:v,material:{skin:a,cloth:c},update(w,A){for(let P=0;P<v.length;P++){const O=v[P];if(O.talking)O.moving=!1;else if(O.wait>0)O.wait-=w,O.moving=!1;else{const _=O.to.x-O.x,M=O.to.z-O.z,F=Math.hypot(_,M);if(F<1.2)O.to=y(),O.wait=.8+Math.random()*3.5,O.moving=!1;else{O.moving=!0;const H=Math.min(F,p1*w);O.x+=_/F*H,O.z+=M/F*H;let q=Math.atan2(_,M)-O.heading;for(;q>Math.PI;)q-=Math.PI*2;for(;q<-Math.PI;)q+=Math.PI*2;O.heading+=q*Math.min(1,w*5),O.phase+=H*m1}}C(P,O,A(O.x,O.z))}l.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0},nearest(w,A){let P=null,O=g1;for(const _ of v){const M=Math.hypot(_.x-w,_.z-A);M<O&&(O=M,P=_)}return P},startTalking(w,A,P){w.talking=!0,w.heading=Math.atan2(A-w.x,P-w.z)},stopTalking(w){w&&(w.talking=!1)}}}const so=6,_i=17,np=64,ro=9,ip=2,mu=np*ip**(ro-1)*so/2,Ua=new We,ti=new We,Oa={height:0,slopeDeg:0,region:null},M1=3,ar=i=>i<0?0:i>1?1:i,Fa=(i,e,t)=>{const n=ar((t-i)/(e-i));return n*n*(3-2*n)},gu=_t(140),sp=_t(45),S1=8;function b1({seed:i=20260827}={}){const e=c1({seed:i}),t=new st,n=new Xe({vertexColors:!0,roughness:.96,metalness:0,flatShading:!1}),s=[];for(let M=0;M<ro;M++){const F=np*ip**M,H={tileSize:F,step:F/(_i-1),centre:{i:NaN,j:NaN},holeKey:null,tiles:[],spare:[],group:new st};H.group.renderOrder=ro-M;for(let D=0;D<so*so+12;D++){const q=new zs(F,F,_i-1,_i-1);q.rotateX(-Math.PI/2),q.setAttribute("color",new It(new Float32Array(_i*_i*3),3));const E=new pe(q,n);E.name=`ground-r${M}`,E.receiveShadow=!0,E.frustumCulled=!0,E.matrixAutoUpdate=!1,H.tiles.push({mesh:E,i:NaN,j:NaN}),H.group.add(E)}s.push(H),t.add(H.group)}for(let M=1;M<ro;M++)s[M].group.position.y=-.05*s[M].step;const r=Wf.map(M=>{const F=e.towns.find(q=>q.name===M.name),H=f1(M,F.x,F.z,F.level);H.group.visible=!1,t.add(H.group);const D=JS[M.name]??[];if(D.length){H.people=y1({town:H,count:D.length,seed:7+M.name.length*31,isStreet:(q,E)=>!H.footprints.some(V=>Math.abs(q-V.x)<V.halfX+1.4&&Math.abs(E-V.z)<V.halfZ+1.4)});for(const[q,E]of H.people.folk.entries())E.name=D[q].name,E.lines=D[q].lines,E.said=0,E.town=M.name;H.people.group.visible=!1,t.add(H.people.group)}return H}),o=4200,a=new pe(new zs(mu*2.4,mu*2.4,1,1),new Xe({color:en[Ye.SEA],roughness:.22,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.y=ss,a.renderOrder=ro+1,t.add(a);function c(M,F,H,D){const{height:q,slopeDeg:E,region:V}=H,B=1-V.moisture,{sandy:j,plateau:X}=e.styleAt(V);D.setHex(en[Ye.FOREST]),D.lerp(ti.setHex(en[Ye.PLAIN]),Fa(.28,.44,B)),D.lerp(ti.setHex(en[Ye.SAVANNA]),Fa(.42,.58,B)),D.lerp(ti.setHex(en[Ye.STONE_DESERT]),Fa(.55,.68,B)),D.lerp(ti.setHex(en[Ye.MESA]),X*.85),D.lerp(ti.setHex(en[Ye.DUNES]),j);const Q=ar((E-24)/22);Q>0&&D.lerp(ti.setHex(7169884),Q*.85);const I=e.snowlineAt(M,F),k=ar((q-I*.86)/(I*.3));if(k>0&&D.lerp(ti.setHex(en[Ye.SNOW]),k*ar(1-E/52)),B>.5&&q<gu&&E<4&&D.lerp(ti.setHex(en[Ye.SALT]),Fa(gu,gu*.4,q)*.9),q<sp&&q>ss){const G=1-ar(q/sp);D.lerp(ti.setHex(en[Ye.BEACH]),G*G*.8)}return q<=ss&&D.lerp(ti.setHex(860464),ar(-q/_t(500))),D}const l=2,u=_i+l*2,h=new Float64Array(u*u);function d(M,F,H,D){const q=H*M.tileSize,E=D*M.tileSize,V=F.mesh.geometry.attributes.position,B=F.mesh.geometry.attributes.color,j=F.mesh.geometry.attributes.normal,X=V.array,Q=B.array,I=j.array,k=M.step,G=q-M.tileSize/2,$=E-M.tileSize/2;for(let se=0;se<u;se++){const ne=$+(se-l)*k;for(let de=0;de<u;de++)h[se*u+de]=e.heightAt(G+(de-l)*k,ne)}const te=Math.max(1,Math.min(l,Math.round(S1/k))),ee=2*te*k;for(let se=0;se<_i;se++)for(let ne=0;ne<_i;ne++){const he=(se*_i+ne)*3,Z=ne+l,T=se+l,ce=G+ne*k,ae=$+se*k,le=h[T*u+Z];X[he]=ce-q,X[he+1]=le,X[he+2]=ae-E;const Me=(h[T*u+Z+te]-h[T*u+Z-te])/ee,Te=(h[(T+te)*u+Z]-h[(T-te)*u+Z])/ee,Ee=Math.hypot(Me,1,Te);I[he]=-Me/Ee,I[he+1]=1/Ee,I[he+2]=-Te/Ee,Oa.height=le,Oa.slopeDeg=Math.atan(Math.hypot(Me,Te))*180/Math.PI,Oa.region=e.regionAt(ce,ae),c(ce,ae,Oa,Ua),Q[he]=Ua.r,Q[he+1]=Ua.g,Q[he+2]=Ua.b}V.needsUpdate=!0,B.needsUpdate=!0,j.needsUpdate=!0,F.mesh.geometry.computeBoundingSphere(),F.mesh.position.set(q,0,E),F.mesh.visible=!0,F.mesh.updateMatrix(),F.i=H,F.j=D}function f(M,F){return Math.round((M/F-1)/2)*2+1}let g=0,x=0;const p=[];function m(M,F){let H=null;for(const D of s){const q=f(M,D.tileSize),E=f(F,D.tileSize),V=H;H={x:q*D.tileSize,z:E*D.tileSize,half:so*D.tileSize/2};const B=V?`${V.x},${V.z}`:"";if(q===D.centre.i&&E===D.centre.j&&B===D.holeKey)continue;D.centre.i=q,D.centre.j=E,D.holeKey=B;const j=(so-1)/2,X=new Set;for(let k=-j;k<=j;k++)for(let G=-j;G<=j;G++){if(V){const $=(q+G)*D.tileSize,te=(E+k)*D.tileSize,ee=D.tileSize/2;if(Math.abs($-V.x)+ee<=V.half&&Math.abs(te-V.z)+ee<=V.half)continue}X.add(`${q+G},${E+k}`)}const Q=new Set,I=[];for(const k of D.tiles){const G=`${k.i},${k.j}`;X.has(G)&&!Q.has(G)?Q.add(G):I.push(k)}for(const k of I)k.mesh.visible=!1,k.i=NaN,k.j=NaN;D.spare=I;for(let k=p.length-1;k>=0;k--)p[k].ring===D&&p.splice(k,1);for(const k of X){if(Q.has(k))continue;const[G,$]=k.split(",").map(Number);p.push({ring:D,i:G,j:$,d2:(G*D.tileSize-M)**2+($*D.tileSize-F)**2})}}p.sort((D,q)=>D.d2-q.d2),a.position.x=M,a.position.z=F;for(const D of r)D.group.visible=Math.hypot(D.x-M,D.z-F)<o+D.radius,D.people&&(D.people.group.visible=Math.hypot(D.x-M,D.z-F)<D.radius+700);S(M1)}function S(M){const F=performance.now();for(;p.length&&performance.now()-F<M;){const H=p.shift(),D=H.ring.spare.pop();D&&(d(H.ring,D,H.i,H.j),g++)}x=performance.now()-F}function y(M,F){return e.heightAt(M,F)}function v(M,F,H=3){const D=e.sampleAt(M,F,Math.max(2,H));return D.height<=ss+1.5||D.slopeDeg>=12?!1:!C(M,F,H)}function C(M,F,H=0){for(const D of r)if(!(Math.hypot(D.x-M,D.z-F)>D.radius*1.4)){for(const q of D.footprints)if(Math.abs(M-q.x)<q.halfX+H&&Math.abs(F-q.z)<q.halfZ+H)return q}return null}const w=38,A=[0,0];function P(M,F,H,D=[]){D[0]=M,D[1]=F;const q=C(M,F,H??.4);if(q){const I=H??.4,k=M-q.x,G=F-q.z,$=q.halfX+I-Math.abs(k),te=q.halfZ+I-Math.abs(G);return $<te?D[0]=q.x+Math.sign(k||1)*(q.halfX+I):D[1]=q.z+Math.sign(G||1)*(q.halfZ+I),D}if(e.sampleAt(M,F,2).slopeDeg<=w)return D;const V=4,B=e.heightAt(M+V,F)-e.heightAt(M-V,F),j=e.heightAt(M,F+V)-e.heightAt(M,F-V),X=Math.hypot(B,j);if(X<1e-5)return D;A[0]=B/X,A[1]=j/X;const Q=Math.max(.35,H??.5);return D[0]=M-A[0]*Q,D[1]=F-A[1]*Q,D}function O(){for(let F=1;F<9e3;F++){const H=14e3+90*Math.sqrt(F),D=Math.cos(F*.7)*H,q=Math.sin(F*.7)*H,E=e.sampleAt(D,q,6);if(!(E.height<20||E.height>320||E.slopeDeg>5)&&!(E.biome===Ye.SEA||E.biome===Ye.SALT||E.biome===Ye.SNOW))return{x:D,z:q,height:E.height,biome:E.biome}}return{x:14e3,z:0,height:e.heightAt(14e3,0),biome:e.biomeAt(14e3,0)}}const _=O();return{group:t,terrain:e,setFocus:m,flush(){S(1/0)},update(M){for(const F of r)!F.people||!F.people.group.visible||F.people.update(M,y)},nearestPerson(M,F){for(const H of r){if(!H.people||!H.people.group.visible||Math.hypot(H.x-M,H.z-F)>H.radius*1.6)continue;const D=H.people.nearest(M,F);if(D)return{person:D,people:H.people}}return null},groundHeightAt:y,resolveWalk:P,isClear:v,findLandingSite:O,spawn:new U(_.x,_.height,_.z),heading:-Math.PI/2,info:{name:"an unnamed world",biomeAt:(M,F)=>e.biomeAt(M,F),get tilesBuilt(){return g},settlements:r,get build(){return{ms:+x.toFixed(2),queued:p.length}},reach:mu}}}const Ze=new U(0,-2e4,0),w1=22,E1=2800,rp=1,A1=4,T1=1,op=10340847,R1=1600,C1=34e3,ap=24e3;function P1(i,e,t,n=()=>{}){const s=b1();s.group.position.copy(Ze),s.group.visible=!1,i.add(s.group);const r=new U().copy(s.spawn);let o=!1;const a=t.far,c=1.6,l=.9,u=new mi(16774112,0);u.position.set(-260,420,180).add(Ze),u.target.position.copy(Ze),i.add(u.target),i.add(u);const h=new ba(12377343,6978386,0);h.position.copy(Ze),i.add(h);const d=document.createElement("div");d.id="landing-banner",d.hidden=!0,d.innerHTML=`
    <div class="landing-banner__town"></div>
    <div class="landing-banner__street"></div>
    <div class="landing-banner__hint"></div>
  `,document.body.appendChild(d),d.querySelector(".landing-banner__town").textContent=Ne.surface.town,d.querySelector(".landing-banner__street").textContent=Ne.surface.street,d.querySelector(".landing-banner__hint").textContent=Ne.surface.leaveHint;const f=new Yt;let g=!1,x=!1,p=0;const m=new U,S=i.background,y=i.fog.color.clone();function v(_){return _.mesh.position.distanceTo(Qr)<eo+w1}function C(_){return _.mesh.position.y-Ze.y}const w=[[0,0],[1.4,0],[-1.25,0],[0,.9],[0,-.9]];function A(_){const M=f.setFromQuaternion(_.mesh.quaternion,"YXZ"),F=Math.sin(M.y),H=Math.cos(M.y),D=_.mesh.scale.x;let q=-1/0;for(const[E,V]of w){const B=_.mesh.position.x+(F*E+H*V)*D,j=_.mesh.position.z+(H*E-F*V)*D,X=s.groundHeightAt(B-Ze.x,j-Ze.z);X>q&&(q=X)}return q}function P(_){if(g)return;g=!0,m.copy(_.mesh.position).sub(Qr).setLength(eo+60).add(Qr),s.group.visible=!0,u.intensity=c,h.intensity=l,_.mesh.scale.setScalar(A1);for(const F of e)F.visible=!1;i.background=new We(op),i.fog.color.setHex(op),i.fog.near=R1,i.fog.far=C1;const M=o?r:s.spawn;o=!0,s.setFocus(M.x,M.z),s.flush(),_.mesh.position.set(M.x,s.groundHeightAt(M.x,M.z)+90,M.z).add(Ze),_.mesh.quaternion.setFromEuler(new Yt(0,s.heading,0,"YXZ")),_.velocity.set(0,0,0),t.far=ap,t.updateProjectionMatrix(),n(),d.querySelector(".landing-banner__street").textContent=Ne.surface.ground[s.info.biomeAt(M.x,M.z)]??Ne.surface.street,d.hidden=!1,d.classList.remove("landing-banner--fading"),p=6}function O(_){if(!g)return;g=!1,x=!1,_.mesh.scale.setScalar(1),r.set(_.mesh.position.x-Ze.x,0,_.mesh.position.z-Ze.z),t.far=a,t.updateProjectionMatrix(),s.group.visible=!1,u.intensity=0,h.intensity=0;for(const F of e)F.visible=!0;i.background=S,i.fog.color.copy(y),i.fog.near=ff,i.fog.far=pf,_.mesh.position.copy(m);const M=m.clone().sub(Qr).normalize();_.mesh.quaternion.setFromUnitVectors(new U(0,0,1),M),_.velocity.set(0,0,0),n(),d.hidden=!0}return{get active(){return g},get parked(){return x},world:s,enter:P,exit:O,altitude:C,hullGroundY(_){return Ze.y+A(_)},park(){x=!0},unpark(){x=!1},prewarm(_,M){s.setFocus(s.spawn.x,s.spawn.z),s.flush(),s.group.visible=!0,u.intensity=c,h.intensity=l,_.compile(i,M);const F=new kt(60,M.aspect,.1,ap);F.position.copy(Ze).add(s.spawn).add(new U(0,160,320)),F.lookAt(new U().copy(Ze).add(s.spawn)),_.render(i,F),s.group.visible=!1,u.intensity=0,h.intensity=0,_.render(i,M)},update(_,M){if(!g){v(_)&&P(_);return}if(s.update(M),s.setFocus(_.mesh.position.x-Ze.x,_.mesh.position.z-Ze.z),x){p>0&&(p-=M,p<=0&&d.classList.add("landing-banner--fading"));return}const F=C(_),H=A(_);F<H+rp&&(_.mesh.position.y=Ze.y+H+rp,_.velocity.y<0&&(_.velocity.y=0)),F>E1&&O(_),p>0&&(p-=M,p<=0&&d.classList.add("landing-banner--fading"))},reset(_){O(_)}}}const I1=38,L1=19,N1=45,cp=1.5,lp=.25,D1=.5,Ba=1;function U1(i){let e=Ba,t=0;const n=[];return{get scale(){return e},sample(s){const r=s*1e3;if(r>250||(n.push(r),n.length<N1))return;const o=[...n].sort((l,u)=>l-u),a=o[Math.floor(o.length/2)];if(n.length=0,t>0)return;let c=e;a>I1?c=Math.max(D1,e-lp):a<L1&&(c=Math.min(Ba,e+lp)),c!==e&&(e=c,t=cp,i(e))},update(s){t>0&&(t-=s)},reset(){e!==Ba&&(e=Ba,n.length=0,t=cp,i(e))}}}class _u extends Lr{constructor(){super();const e=new yt;e.deleteAttribute("uv");const t=new Xe({side:jt}),n=new Xe,s=new $l(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new pe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new pe(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new pe(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new pe(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new pe(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new pe(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new pe(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new pe(e,cr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new pe(e,cr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new pe(e,cr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new pe(e,cr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new pe(e,cr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new pe(e,cr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function cr(i){const e=new rn;return e.color.setScalar(i),e}const xi=.181,Gn=.032;function O1({metal:i,polymer:e,glow:t}){const n=new st,s=[],r=[],o=[],a=(d,f,g,x,p,m)=>{const S=new yt(d,f,g);return S.translate(x,p,m),S};s.push(a(Gn,.027,xi*.92,0,.021,.012));{const d=new mt(Gn*.5,Gn*.5,xi*.92,10,1,!1,0,Math.PI);d.rotateZ(Math.PI/2),d.rotateY(Math.PI/2),d.translate(0,.034,.012),s.push(d)}for(let d=0;d<5;d++)s.push(a(Gn+.002,.02,.004,0,.022,-.052-d*.008));r.push(a(.003,.016,.042,Gn*.5,.026,.03));{const d=new mt(.0085,.0085,.02,10);d.rotateX(Math.PI/2),d.translate(0,.022,xi*.47),s.push(d)}s.push(a(.005,.008,.005,0,.05,xi*.42)),s.push(a(.008,.008,.006,-.009,.05,-.07)),s.push(a(.008,.008,.006,.009,.05,-.07)),o.push(a(.0035,.0035,.0035,0,.052,xi*.42+.002)),r.push(a(Gn-.004,.016,xi*.55,0,0,.038)),r.push(a(.014,.005,.05,0,-.009,.05)),r.push(a(.012,.03,.006,0,-.02,.028)),r.push(a(.012,.006,.045,0,-.033,.006)),r.push(a(.012,.022,.006,0,-.024,-.014)),r.push(a(.007,.018,.005,0,-.017,.004));{const d=new yt(Gn-.005,.095,.032);d.translate(0,-.055,-.03),d.rotateX(-.34),d.translate(0,0,-.006),r.push(d);const f=new yt(Gn-.002,.008,.036);f.translate(0,-.104,-.062),f.rotateX(-.1),r.push(f);const g=new yt(.006,.05,.005);g.translate(Gn*.48-.004,-.055,-.03),g.rotateX(-.34),o.push(g)}o.push(a(.0035,.004,.075,Gn*.5,.016,.01)),o.push(a(.0035,.004,.075,-Gn*.5,.016,.01)),n.add(new pe(Sn(s),i)),n.add(new pe(Sn(r),e)),n.add(new pe(Sn(o),t));const c=new rn({color:16773296,transparent:!0,opacity:.75,depthWrite:!1}),l=new pe(new hn(.022,.062,6),c);l.rotation.x=Math.PI/2,l.position.set(0,.022,xi*.52),l.visible=!1,n.add(l);let u=0;const h=new U(0,.022,xi*.5);return{group:n,getMuzzle(d){return n.updateWorldMatrix(!0,!1),d.copy(h).applyMatrix4(n.matrixWorld)},getAim(d){n.updateWorldMatrix(!0,!1);const f=n.matrixWorld.elements;return d.set(f[8],f[9],f[10]).normalize()},fire(){u=.055,l.visible=!0,l.rotation.z=Math.random()*Math.PI,l.scale.setScalar(.85+Math.random()*.4)},update(d){u<=0||(u-=d,u<=0?l.visible=!1:c.opacity=Math.min(1,u/.03))},length:xi}}const Vn=1.8,F1=4146511,B1=5857646,k1=2303790,oo=5504925,up=8257456,z1=4835583,H1=14198404,G1=3810328;function V1(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,256,256),t.lineCap="square",t.strokeStyle="#5effa6";for(let s=0;s<14;s++){let r=Math.random()*256,o=Math.random()*256;t.lineWidth=Math.random()<.3?2:1,t.beginPath(),t.moveTo(r,o);const a=2+Math.floor(Math.random()*4);for(let c=0;c<a;c++)c%2===0?o+=(Math.random()-.35)*90:r+=(Math.random()-.5)*70,t.lineTo(r,o);t.stroke(),t.fillStyle="#9dffcb",t.fillRect(r-2,o-2,4,4),t.fillStyle="#5effa6"}const n=new ns(e);return n.wrapS=bi,n.wrapT=bi,n.colorSpace=Rt,n}function W1(i,e,t){const n=new Vr,s=-i/2,r=-e/2,o=Math.max(.001,Math.min(t,i/2-.001,e/2-.001));return n.moveTo(s+o,r),n.lineTo(s+i-o,r),n.absarc(s+i-o,r+o,o,-Math.PI/2,0),n.lineTo(s+i,r+e-o),n.absarc(s+i-o,r+e-o,o,0,Math.PI/2),n.lineTo(s+o,r+e),n.absarc(s+o,r+e-o,o,Math.PI/2,Math.PI),n.lineTo(s,r+o),n.absarc(s+o,r+o,o,Math.PI,Math.PI*1.5),n}function Wn(i,e,t,n,s=0,r=0,o=0,a=.02){const c=Math.min(.012,t*.35),l=new Zs(W1(i,e,a),{depth:Math.max(.001,t-c*2),bevelEnabled:!0,bevelThickness:c,bevelSize:c,bevelSegments:2,curveSegments:4});l.center();const u=new pe(l,n);return u.position.set(s,r,o),u}function ao(i,e,t,n,s=16){const r=new st;r.add(new pe(new mt(i,e,t,s),n));const o=new pe(new Qe(i,s,8),n);o.position.y=t/2,o.scale.y=.7,r.add(o);const a=new pe(new Qe(e,s,8),n);return a.position.y=-t/2,a.scale.y=.7,r.add(a),r}function ka(i,e,t=0){const n=new pe(new Qe(i,16,12),e);return n.position.y=t,n}function X1(){const i=[[.001,0],[.15,0],[.168,.04],[.163,.12],[.178,.2],[.2,.3],[.212,.38],[.208,.46],[.17,.52],[.09,.55],[.001,.555]].map(([t,n])=>new Se(t,n)),e=new _a(i,28);return e.scale(1.06,1,.84),e}function xu({suitLight:i=!0,environment:e=null}={}){const t=new st,n=new st;t.add(n);const s=V1(),r=new Xe({color:F1,metalness:.62,roughness:.38,emissive:oo,emissiveMap:s,emissiveIntensity:.34}),o=new Xe({color:B1,metalness:.7,roughness:.3,emissive:oo,emissiveMap:s,emissiveIntensity:.22}),a=new Xe({color:k1,metalness:.25,roughness:.72,emissive:oo,emissiveMap:s,emissiveIntensity:.3}),c=new Xe({color:H1,metalness:0,roughness:.72}),l=new Xe({color:G1,metalness:0,roughness:.9}),u=new Xe({color:up,emissive:up,emissiveIntensity:1.6,transparent:!0,opacity:.58,metalness:.4,roughness:.08}),h=new rn({color:z1}),d=new Xe({color:863004,emissive:oo,emissiveIntensity:1.15,metalness:.2,roughness:.35});if(e)for(const N of[r,o,a,c,l,u,d])N.envMap=e,N.envMapIntensity=.55;const f=new pe(X1(),a);f.position.y=.97,n.add(f);const g=new pe(new Qe(.19,28,18,Math.PI*.22,Math.PI*.56,Math.PI*.16,Math.PI*.5),r);g.scale.set(1.12,1.16,.92),g.position.set(0,1.33,.006),n.add(g);const x=Wn(.028,.19,.03,o,0,1.35,.155,.012);n.add(x);const p=new pe(new zn(.125,.026,10,24,Math.PI*1.15),r);p.rotation.set(Math.PI/2,0,Math.PI*.92),p.position.set(0,1.465,.01),p.scale.z=.8,n.add(p);const m=Wn(.25,.3,.05,r,0,1.3,-.11,.07);m.rotation.x=-.06,n.add(m);const S=new pe(new zn(.153,.034,12,32),o);S.rotation.x=Math.PI/2,S.position.y=.99,S.scale.set(1.06,.86,1),n.add(S);const y=new pe(new Qe(.042,16,12),h);y.scale.set(1.5,1,.45),y.position.set(0,.99,.132),n.add(y);const v=new pe(new Qe(.152,20,14),r);v.scale.set(1.04,.58,.82),v.position.y=.905,n.add(v);const C=ao(.052,.058,.08,a,12);C.position.y=1.55,n.add(C);const w=new pe(new Qe(.105,24,20),c);w.scale.set(.95,1.14,1),w.position.y=1.66,n.add(w);const A=new pe(new Qe(.07,20,16),c);A.scale.set(.94,.82,1.04),A.position.set(0,1.6,.014),n.add(A);const P=new pe(new hn(.018,.042,8),c);P.rotation.x=Math.PI*.52,P.position.set(0,1.646,.095),n.add(P);for(const N of[-1,1]){const z=new pe(new Qe(.022,10,8),c);z.scale.set(.5,1,.8),z.position.set(N*.096,1.655,.005),n.add(z)}const O=[],_=new $e,M=new qt,F=new U,H=new U,D=new U,q=new U(0,1,0),E=new U(0,0,1);function V(N,z,Y,W){N.applyMatrix4(_.compose(z,Y,W)),O.push(N)}const B=[[0,1.732,-.012,.088],[-.06,1.722,.028,.064],[.06,1.726,.024,.066],[0,1.71,-.07,.074],[-.082,1.7,-.024,.06],[.084,1.703,-.02,.058],[.026,1.757,-.005,.048],[-.032,1.752,-.036,.046],[-.056,1.692,.056,.044],[.058,1.694,.053,.042]];for(const[N,[z,Y,W,ue]]of B.entries())V(new Qe(ue,10,8),F.set(z,Y,W),M.setFromEuler(new Yt(N%3*.18,N*.7,(N%5-2)*.12)),H.set(1.12,.72,1.1));const j=[[-.05,1.736,.055,.048,1.5,.35,-.6,.72],[-.008,1.744,.062,.05,1.55,.3,-.45,.84],[.038,1.74,.056,.046,1.45,.55,-.5,.67],[.074,1.728,.03,.04,1.35,.85,-.35,.4],[-.03,1.764,.03,.048,1.5,-.25,.25,.94],[.028,1.768,.012,.05,1.6,.42,.62,.66],[-.02,1.766,-.03,.048,1.5,-.3,.6,-.74],[.042,1.756,-.036,.044,1.45,.5,.15,-.85],[-.084,1.72,.014,.044,1.5,-.5,-.1,.86],[-.086,1.712,-.038,.042,1.45,-.45,-.05,-.89],[.086,1.722,.01,.046,1.5,.5,-.05,.86],[.088,1.714,-.036,.042,1.45,.45,-.1,-.89],[-.032,1.72,-.078,.046,1.55,-.2,.05,-.98],[.03,1.724,-.08,.048,1.6,.2,.15,-.97],[0,1.7,-.082,.042,1.4,0,-.35,-.94]];for(const[N,[z,Y,W,ue,ye,fe,we,Ae]]of j.entries()){D.set(fe,we,Ae).normalize(),V(new Qe(ue,10,8),F.set(z,Y,W),M.setFromUnitVectors(E,D),H.set(.62,.44,ye));const De=ue*ye*.66,Ce=N%3===0?.052:N%3===1?.04:.032,je=new hn(ue*.62,Ce,3);je.translate(0,Ce*.42,0),V(je,F.set(z,Y,W).addScaledVector(D,De),M.setFromUnitVectors(q,D),H.set(.85,1,.5))}const X=[[-.07,1.75,0,.042,-.5,.75,.44],[.012,1.782,-.01,.046,.15,.95,-.28],[.066,1.756,.02,.038,.7,.66,.28],[-.05,1.73,.072,.034,-.1,.3,.95],[.05,1.736,-.07,.04,.35,.45,-.82],[-.088,1.73,-.01,.036,-.85,.42,.3],[.03,1.706,-.094,.032,.2,-.1,-.97],[-.026,1.776,.03,.04,-.2,.85,.49]];for(const[N,z,Y,W,ue,ye,fe]of X){D.set(ue,ye,fe).normalize();const we=new hn(.014,W,3);we.translate(0,W*.4,0),V(we,F.set(N,z,Y),M.setFromUnitVectors(q,D),H.set(.9,1,.55))}const Q=1.706,I=Sn(O);I.translate(0,-Q,0);const k=new pe(I,l);k.position.y=Q,n.add(k);const G=new pe(new mt(.109,.109,.04,28,1,!0,-Math.PI*.28,Math.PI*.56),u);G.position.set(0,1.668,.004),G.scale.set(1,1,.94),n.add(G);const $=new pe(new mt(.104,.104,.052,28,1,!0,-Math.PI*.29,Math.PI*.58),o);$.position.set(0,1.668,.004),$.scale.set(1,1,.94),n.add($);for(const N of[-1,1]){const z=new pe(new mt(.005,.005,.085,8),o);z.rotation.set(Math.PI/2,0,0),z.position.set(N*.098,1.668,-.028),n.add(z)}for(const N of[-1,1]){const z=new pe(new Qe(.036,16,12),o);z.scale.set(.55,1,.9),z.position.set(N*.107,1.658,0),n.add(z)}const te=new pe(new mt(.005,.005,.11,8),o);te.position.set(-.078,1.618,.062),te.rotation.set(-.5,0,.7),n.add(te);const ee=new pe(new Qe(.012,10,8),h);ee.position.set(-.048,1.588,.097),n.add(ee);const se=1.25,ne=[],de=[];for(const N of[-1,1]){const z=new st;z.position.set(N*.215,1.44,0),n.add(z),z.add(ka(.072,a));const Y=new pe(new Qe(.108,20,14,0,Math.PI*2,0,Math.PI*.58),r);Y.scale.set(1.04,1.05,1.08),Y.position.y=.012,Y.rotation.z=N*.22,z.add(Y);const W=new pe(new Qe(.088,18,10,0,Math.PI*2,Math.PI*.34,Math.PI*.2),o);W.position.y=-.032,W.rotation.z=N*.22,z.add(W);const ue=ao(.058,.05,.24,a);ue.position.y=-.17,z.add(ue);const ye=new pe(new zn(.055,.015,10,20),o);ye.rotation.x=Math.PI/2,ye.position.y=-.12,z.add(ye),z.add(ka(.052,r,-.3));const fe=new st;fe.position.y=-.3,z.add(fe),de.push({shoulder:z,forearm:fe,side:N});const we=ao(.052,.045,.22,a);we.position.y=-.12,fe.add(we);const Ae=new pe(new mt(.062,.05,.17,16),r);Ae.position.y=-.14,Ae.scale.z=.92,fe.add(Ae);const De=Wn(.1,.055,.09,o,0,-.052,.006,.026);fe.add(De);const Ce=new st;Ce.position.set(0,-.28,.004),Ce.rotation.y=-N*1.15,Ce.scale.setScalar(se),fe.add(Ce);const je=Wn(.056,.078,.032,a,0,.004,0,.018);je.rotation.x=.06,Ce.add(je);const qe=new pe(new yn(.011,.045,3,8),a);qe.rotation.z=Math.PI/2,qe.position.set(0,-.032,.003),Ce.add(qe);const nt=[{len:.044,r:.0078,open:.3,grip:1.15,splay:.05},{len:.047,r:.008,open:.36,grip:1.75,splay:.02},{len:.043,r:.0075,open:.44,grip:1.85,splay:-.02},{len:.035,r:.0068,open:.52,grip:1.9,splay:-.06}],xt=[];for(const[Tt,at]of nt.entries()){const gn=new pe(new yn(at.r,at.len*.55,3,8),a),yi=new pe(new yn(at.r*.86,at.len*.42,3,8),a);xt.push({near:gn,far:yi,spec:at,index:Tt,side:N}),Ce.add(gn),Ce.add(yi)}const Je=new pe(new yn(.0092,.032,3,8),a);Ce.add(Je),ne.push({group:Ce,fingers:xt,thumb:Je,side:N});const Be=Wn(.034,.052,.008,d,N*.055,-.145,.004,.008);Be.rotation.y=N*Math.PI/2,fe.add(Be),z.rotation.z=N*.11,z.rotation.x=.04}let he=null,Z=null,T=!1,ce=!0;const ae=[];for(const N of[-1,1]){const z=new st;z.position.set(N*.098,.8,0),n.add(z),z.add(ka(.082,a));const Y=ao(.085,.07,.34,a);Y.position.y=-.2,z.add(Y);const W=Wn(.125,.25,.05,r,0,-.19,.045,.05);if(W.rotation.x=-.05,z.add(W),N>0){const xt=Wn(.052,.115,.062,r,N*.086,-.235,.004,.016);xt.rotation.set(.12,N*.3,0),z.add(xt);const Je=Wn(.06,.022,.07,o,N*.086,-.19,.004,.008);Je.rotation.set(0,N*.3,0),z.add(Je);const Be=O1({metal:r,polymer:a,glow:d});he=Be,Z=z,Te(),z.add(Be.group)}else for(const[xt,Je]of[-.185,-.245].entries()){const Be=Wn(.042,.052,.05,o,N*.086,Je,.004,.01);Be.rotation.y=N*.32,z.add(Be);const Tt=Wn(.046,.01,.054,r,N*.086,Je+.03,.004,.005);Tt.rotation.y=N*.32,z.add(Tt)}z.add(ka(.068,a,-.4));const ue=new pe(new Qe(.075,18,12,0,Math.PI*2,0,Math.PI*.55),r);ue.rotation.x=Math.PI*.42,ue.position.set(0,-.405,.028),z.add(ue);const ye=new st;ye.position.y=-.4,z.add(ye);const fe=new st;fe.position.y=-.3,ye.add(fe),ae.push({hip:z,shin:ye,ankle:fe,side:N});const we=ao(.068,.055,.32,a);we.position.y=-.18,ye.add(we);const Ae=new pe(new mt(.072,.06,.27,16,1,!0,-1.1,2.2),r);Ae.position.set(0,-.175,.008),Ae.scale.z=1.1,ye.add(Ae);const De=new pe(new Qe(.075,18,14),r);De.scale.set(.95,.72,1.5),De.position.set(0,-.035,.03),fe.add(De);const Ce=Wn(.105,.07,.11,r,0,-.012,.072,.03);Ce.rotation.x=.22,fe.add(Ce);const je=new pe(new Qe(.055,16,12),o);je.scale.set(1,.62,1.15),je.position.set(0,-.062,.132),fe.add(je);const qe=new pe(new Qe(.05,14,10),o);qe.scale.set(1,.7,.9),qe.position.set(0,-.057,-.045),fe.add(qe);const nt=new pe(new zn(.042,.011,8,18),h);nt.rotation.x=Math.PI/2,nt.position.set(0,-.086,.025),fe.add(nt)}let le=null;i&&(le=new $l(oo,.45,2.2,2),le.position.set(0,1.2,.12),n.add(le));function Me(N,z){for(const{near:ue,far:ye,spec:fe,index:we,side:Ae}of N.fingers){const De=(we-1.5)*.0165*Ae,Ce=-.037,je=.003,qe=fe.open+(fe.grip-fe.open)*z,nt=qe+(.35+1.15*z),xt=fe.len*.55,Je=fe.len*.42;ue.position.set(De,Ce-Math.cos(qe)*xt*.5,je+Math.sin(qe)*xt*.5),ue.rotation.set(qe,0,fe.splay*Ae*(1-z*.6));const Be=Ce-Math.cos(qe)*xt,Tt=je+Math.sin(qe)*xt;ye.position.set(De,Be-Math.cos(nt)*Je*.5,Tt+Math.sin(nt)*Je*.5),ye.rotation.set(nt,0,fe.splay*Ae*(1-z*.6))}const Y=N.thumb,W=N.side;Y.position.set(W*(.028-.006*z),-.016-.012*z,.014+.022*z),Y.rotation.set(.5+z*.85,0,-W*(.7-z*.45))}function Te(){he.group.position.set(.078,-.175,.014),he.group.rotation.set(Math.PI/2+.3,.34,.06)}function Ee(N,z=!0){if(ce=z,N===T||!he)return;T=N;const Y=ne.find(W=>W.side>0);N?(Y.group.quaternion.setFromRotationMatrix(ie.makeBasis(L,b,J)),Y.group.add(he.group),he.group.scale.setScalar(1/se),he.group.position.set(-.03,-.024,.019),he.group.rotation.set(0,0,Math.PI/2),Me(Y,1)):(Z.add(he.group),he.group.scale.setScalar(1),Te(),Me(Y,0))}const L=new U(0,0,-1),b=new U(1,0,0),J=new U(0,-1,0),ie=new $e;function me(){he&&he.fire()}const oe=1.02,Pe=1.53,ve=new st;ve.position.y=oe;const ge=new st;ge.position.y=Pe-oe;const ke=new Set([v,S,y,...ae.map(N=>N.hip)]);le&&ke.add(le);for(const N of[...n.children])ke.has(N)||(N.position.y-=oe,ve.add(N));for(const N of[...ve.children])N.position.y+oe>=Pe&&(N.position.y-=Pe-oe,ge.add(N));ve.add(ge),n.add(ve);const _e=f.position.y,Re=ge.position.y;let ze=0,Ge="idle",Fe=0,Ke=0,Ve=0,ht=0;const K=.04,Ue=.05,re=.04;function xe(){const N=Math.sin(ze*1.6);f.position.y=_e+N*.005,f.scale.x=1+N*.006,n.position.set(0,0,0),n.rotation.z=0,ve.rotation.set(-N*.006,0,0),ge.rotation.set(N*.006,0,0),ge.position.y=Re;for(const z of ae)z.hip.rotation.x=0,z.hip.rotation.y=z.side*.07,z.hip.position.z=0,z.shin.rotation.x=0,z.ankle.rotation.x=0;for(const[z,Y]of de.entries())Y.shoulder.rotation.x=K+Math.sin(ze*1.6+z)*.012,Y.shoulder.rotation.z=Y.side*.11,Y.forearm.rotation.x=0}const Ie=[[0,28],[12,22],[30,6],[50,-12],[62,-8],[75,16],[88,28],[100,28]],Oe=[[0,4],[12,16],[30,6],[45,14],[60,40],[73,60],[87,26],[100,4]],ot=[[0,0],[8,-8],[30,5],[45,10],[58,-20],[68,-4],[80,2],[100,0]],Mt=[[0,42],[10,28],[28,2],[42,-20],[52,-12],[68,24],[85,48],[100,42]],$t=[[0,22],[12,40],[28,26],[42,34],[55,74],[70,112],[86,52],[100,22]],ct=[[0,-6],[8,-14],[26,6],[40,14],[50,-26],[64,-10],[82,-4],[100,-6]],Wt=2.8,be=5.4,He=1.5,lt=2.7;function it(N){return N<0?0:N>1?1:N}function At(N,z,Y){const W=Xt(N,Y);return Ve<=.001?W:W+(Xt(z,Y)-W)*Ve}function Xt(N,z){const Y=(z%1+1)%1*100;for(let W=1;W<N.length;W++){const[ue,ye]=N[W-1],[fe,we]=N[W];if(Y<=fe){const Ae=(Y-ue)/(fe-ue);return ye+(we-ye)*(Ae*Ae*(3-2*Ae))}}return N[N.length-1][1]}const mn=Math.PI/180,En=.8,fs=.4,dn=.3,zi=[[-.045,-.107],[.132,-.096]];function mr(){let N=1/0;for(const z of ae){const Y=z.hip.rotation.x,W=Y+z.shin.rotation.x,ue=W+z.ankle.rotation.x,ye=En-fs*Math.cos(Y)-dn*Math.cos(W);for(const[fe,we]of zi){const Ae=ye+we*Math.cos(ue)-fe*Math.sin(ue);Ae<N&&(N=Ae)}}return N}function ps(N){const z=Math.max(Fe,.4);Ve+=(it((z-Wt)/(be-Wt))-Ve)*(1-Math.pow(2,-N/.18));const Y=He+(lt-He)*Ve;Ke+=z/Y*Math.PI*2*N;const W=Ke/(Math.PI*2),ue=Math.min(1.35,.55+z/4);for(const[je,qe]of ae.entries()){const nt=W+je*.5,xt=At(Ie,Mt,nt)*mn*ue,Je=At(Oe,$t,nt)*mn*ue,Be=At(ot,ct,nt)*mn*ue;qe.hip.rotation.x=-xt,qe.hip.rotation.y=qe.side*.09,qe.shin.rotation.x=Je,qe.ankle.rotation.x=-Be,qe.hip.position.z=Math.sin(nt%1*Math.PI*2)*.022*ue}const ye=W-Ue;for(const[je,qe]of de.entries()){const nt=ye+je*.5,xt=At(Ie,Mt,nt)*mn*ue*(.5+Ve*.3);qe.shoulder.rotation.x=K+xt+Math.sin(ze*.71+je)*.012,qe.shoulder.rotation.z=qe.side*(.11-Math.max(0,-xt)*.28);const Je=At(Ie,Mt,nt-re)*mn*ue*.5;qe.forearm.rotation.x=-(.22+Ve*.85+Math.max(0,-Je)*1.3)}const fe=mr(),we=Math.max(0,Math.sin(Ke*2))*.055*Ve;n.position.y=-fe+we,n.position.x=Math.sin(Ke)*.022*ue,n.rotation.z=-Math.sin(Ke)*.045*ue;const Ae=Math.sin(ye%1*Math.PI*2);ve.rotation.y=Ae*.13*ue,ve.rotation.z=-n.rotation.z*.55,ve.rotation.x=-(.06+Ve*.28)-(.5-.5*Math.cos(Ke*2))*.02;const De=Math.sin(ze*2.3);f.position.y=_e+De*.004,f.scale.x=1+De*.005;const Ce=Math.sin(ze*.83)*.035+Math.sin(ze*.37)*.02;ge.rotation.y=-ve.rotation.y*.75+Ce,ge.rotation.x=-ve.rotation.x*.8+Math.sin(ze*.61)*.015,ge.rotation.z=-ve.rotation.z*.6,ge.position.y=Re+fe*.35}function gr(N){Ke+=N*4.2;for(const[z,Y]of ae.entries()){const W=Ke+z*Math.PI;Y.hip.rotation.x=-.5-Math.sin(W)*.4,Y.hip.rotation.y=0,Y.hip.position.z=0,Y.shin.rotation.x=.95+Math.sin(W)*.45,Y.ankle.rotation.x=-.25}for(const[z,Y]of de.entries()){const W=Ke+z*Math.PI+Math.PI;Y.shoulder.rotation.x=-2.45+Math.sin(W)*.28,Y.shoulder.rotation.z=Y.side*.16,Y.forearm.rotation.x=-(.5-Math.max(0,Math.sin(W))*.3)}n.position.set(0,0,0),n.rotation.z=0,ve.rotation.set(-.12,0,0),ge.rotation.set(.2,0,0),ge.position.y=Re,f.position.y=_e}function xo(N){ht+=N;const z=Math.min(1,ht/.35),Y=Math.min(1,Math.max(0,(ht-.3)/.5)),W=Math.min(1,Math.max(0,(ht-.7)/.65)),ue=Ae=>Ae*Ae*(3-2*Ae),ye=ue(z)*(1-ue(Y)),fe=ue(Y),we=ue(W);for(const[Ae,De]of ae.entries())De.hip.rotation.x=-fe*(.9+Ae*.35)*(1-we*.35),De.hip.rotation.y=De.side*.09,De.hip.position.z=0,De.shin.rotation.x=fe*(1.7+Ae*.3),De.ankle.rotation.x=-.15*fe;for(const[Ae,De]of de.entries())De.shoulder.rotation.x=-ye*1.5-we*(.6+Ae*.25),De.shoulder.rotation.z=De.side*(.11+ye*.5+we*.5),De.forearm.rotation.x=-(.3+ye*.9);n.rotation.x=ye*.28-we*(Math.PI/2-.12),n.rotation.z=we*.22,n.position.y=-fe*.42-we*.38,n.position.x=we*.05,ve.rotation.x=ye*.3+we*.25,ve.rotation.y=0,ve.rotation.z=0,ge.rotation.set(ye*-.4+we*.35,0,0),ge.position.y=Re,f.position.y=_e,f.rotation.y=0}function R(N){ze+=N;const z=.85+.25*Math.sin(ze*2.1);if(r.emissiveIntensity=.34*z,o.emissiveIntensity=.22*z,a.emissiveIntensity=.3*z,le&&(le.intensity=.45*z),he&&he.update(N),Ge==="walk"?ps(N):Ge==="climb"?gr(N):Ge==="dying"?xo(N):xe(),T&&Ge!=="dying"){const Y=de.find(W=>W.side>0);if(Y.shoulder.rotation.x=ce?-1.42:-.28,Y.shoulder.rotation.z=Y.side*(ce?.06:.13),Y.forearm.rotation.x=ce?-.16:-.55,ce){const W=de.find(ue=>ue.side<0);W.shoulder.rotation.x=Math.min(W.shoulder.rotation.x,-.35),W.forearm.rotation.x=-.9}}else{const Y=ne.find(W=>W.side>0);Y.group.rotation.set(0,-Y.side*1.15,0)}}return{group:t,update:R,height:Vn,setArmed:Ee,fire:me,get pistol(){return he},getMuzzle(N){return!T||!he?null:he.getMuzzle(N)},setGait(N,z=0){N!==Ge&&(Ke=0,N!=="walk"&&(Ve=0),N==="dying"&&(ht=0)),Ge=N,Fe=z},get gait(){return Ge}}}const vu=1.35,hp={red:{skin:12076332,belly:14258282,dark:6044196,hp:2},blue:{skin:4156336,belly:9417949,dark:2832978,hp:3},black:{skin:3880496,belly:9076592,dark:2367260,hp:4},silver:{skin:12173516,belly:15001838,dark:5922920,hp:6}},q1=15129796,Y1=7031343;function Et(i,e,t,n,s,r=null,o=null){r&&e.scale(r[0],r[1],r[2]),o&&(o[0]&&e.rotateX(o[0]),o[1]&&e.rotateY(o[1]),o[2]&&e.rotateZ(o[2])),e.translate(t,n,s),i.push(e)}function dp({tier:i="red"}={}){const e=hp[i]??hp.red,t=new st,n=new Xe({color:e.skin,roughness:.85,metalness:.05}),s=new Xe({color:e.dark,roughness:.9,metalness:.05}),r=new Xe({color:q1,roughness:.55,metalness:.1}),o=new Xe({color:e.belly,roughness:.8,metalness:.04}),a=new Xe({color:Y1,roughness:.95,metalness:0}),c=.26,l=[],u=[],h=[],d=[];Et(l,new Qe(.23,14,12),0,.76,0,[1.05,.88,.95]),Et(u,new Qe(.16,12,10),0,.77,.11,[1,.8,.6]),Et(l,new Qe(.185,14,12),0,.98,.075,[1.1,.8,.9],[c,0,0]),Et(l,new yn(.072,.3,4,8),0,1.06,.06,null,[0,0,Math.PI/2]);const f=0,g=1.2,x=.16;Et(l,new Qe(.175,14,12),f,g,x,[1,.95,1.12]),Et(l,new Qe(.1,10,8),f,g+.08,x+.055,[1.25,.42,.8]),Et(l,new mt(.062,.095,.19,10),f,g-.045,x+.13,null,[Math.PI/2+.25,0,0]),Et(l,new Qe(.062,10,8),f,g-.085,x+.21);for(const v of[-1,1])Et(h,new Qe(.018,8,6),v*.026,g-.06,x+.235);for(const v of[-1,1])Et(d,new hn(.019,.075,6),v*.055,g-.09,x+.16,null,[.35,0,v*.3]);for(const v of[-1,1])Et(l,new hn(.085,.2,4),v*.21,g+.06,x-.06,[1,1,.3],[.2,0,v*-1.25]);Et(d,new hn(.032,.19,6),f,g+.18,x-.02,null,[-.4,0,0]);for(const v of[-1,1])Et(u,new Qe(.036,10,8),v*.07,g+.02,x+.135,[1,1,.75]),Et(h,new Qe(.018,8,6),v*.074,g+.018,x+.163,[.7,1.25,.7]);Et(h,new mt(.185,.225,.19,12),0,.55,0),Et(h,new zn(.2,.022,6,16),0,.645,0,[1.05,1,.95],[Math.PI/2,0,0]);const p=new st;p.add(new pe(Sn(l),n)),p.add(new pe(Sn(u),o)),p.add(new pe(Sn(h),s)),p.add(new pe(Sn(d),r)),t.add(p);const m=[];for(const v of[-1,1]){const C=new st;C.position.set(v*.225,1.05,.05),C.rotation.set(.18,0,v*.2),t.add(C);const w=[];Et(w,new yn(.05,.15,3,8),0,-.1,.01),Et(w,new yn(.042,.14,3,8),0,-.26,.045),Et(w,new Qe(.052,8,6),0,-.36,.06),C.add(new pe(Sn(w),n)),m.push({group:C,side:v})}const S=[];for(const v of[-1,1]){const C=new st;C.position.set(v*.115,.6,0),t.add(C);const w=[];Et(w,new yn(.062,.15,3,8),v*.022,-.11,0,null,[0,0,v*-.16]),Et(w,new yn(.048,.15,3,8),v*.03,-.28,.015,null,[.1,0,v*.12]),Et(w,new Qe(.072,8,6),v*.012,-.4,.045,[.9,.5,1.4]),C.add(new pe(Sn(w),n)),S.push({group:C,side:v})}const y=new st;y.position.set(0,-.36,.05),m[0].group.add(y);{const v=[];Et(v,new mt(.022,.028,.34,8),0,-.1,0),Et(v,new Qe(.06,8,6),0,-.3,0,[1,1.3,1]);for(const C of[0,1.6,3.1,4.7])Et(v,new hn(.018,.06,4),Math.sin(C)*.06,-.3,Math.cos(C)*.06,null,[Math.cos(C)*1.4,0,-Math.sin(C)*1.4]);y.add(new pe(Sn(v),a))}return{group:t,body:p,arms:m,legs:S,club:y,tier:i,height:vu,maxHp:e.hp}}class K1 extends ir{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Q1(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new fb(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Zr.extractUrlBase(e);o=Zr.resolveURL(l,this.path)}else o=Zr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new lf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===fp){try{o[rt.KHR_BINARY_GLTF]=new pb(e)}catch(h){s&&s(h);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Tb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new Z1;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new mb(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new gb;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new _b;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function $1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class j1{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new We(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Jt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new mi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $l(u),l.distance=h;break;case"spot":l=new Fy(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Z1{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){const s=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Q1{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(a,a)}return Promise.all(r)}}class eb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class tb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ib{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],Jt),Promise.all(r)}}class rb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ob{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],Jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}}class ab{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class cb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class lb{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ub{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hb{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class db{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class fb{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Ln.TRIANGLES&&l.mode!==Ln.TRIANGLE_STRIP&&l.mode!==Ln.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const x=new $e,p=new U,m=new qt,S=new U(1,1,1),y=new kr(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,x.compose(p,m,S));for(const v in c)if(v==="_COLOR_0"){const C=c[v];y.instanceColor=new Ks(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);wt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const fp="glTF",co=12,pp={JSON:1313821514,BIN:5130562};class pb{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-co,r=new DataView(e,co);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===pp.JSON){const l=new Uint8Array(e,co+o,a);this.content=n.decode(l)}else if(c===pp.BIN){const l=co+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Mu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Mu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=lr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}h(f)},a,l,Jt,d)})})}}class gb{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _b{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class mp extends Kr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,p=-2*f+3*d,m=f-d,S=1-p,y=m-d+h;for(let v=0;v!==a;v++){const C=o[x+v+a],w=o[x+v+c]*u,A=o[g+v+a],P=o[g+v]*u;r[v]=S*C+y*w+p*A+m*P}return r}}const xb=new qt;class vb extends mp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return xb.fromArray(r).normalize().toArray(r),r}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gp={9728:cn,9729:_n,9984:ch,9985:Mo,9986:_r,9987:oi},_p={33071:wi,33648:yo,10497:bi},yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yb={CUBICSPLINE:void 0,LINEAR:Mr,STEP:yr},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Xe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),i.DefaultMaterial}function rs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sb(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function bb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wb(i){let e;const t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bu(t.attributes):e=i.indices+":"+bu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+bu(i.targets[n]);return e}function bu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function wu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Eb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Ab=new $e;class Tb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Uy(this.options.manager):this.textureLoader=new Hy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return rs(r,a,s),vi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Zr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=yu[s.type],a=lr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new It(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=yu[s.type],l=lr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,p;if(f&&f!==h){const m=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=t.cache.get(S);y||(x=new l(a,m*f,s.count*f/u),y=new Ad(x,f/u),t.cache.add(S,y)),p=new Nr(y,c,d%f/u,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),p=new It(x,c,g);if(s.sparse!==void 0){const m=yu.SCALAR,S=lr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,C=new S(o[1],y,s.sparse.count*m),w=new l(o[2],v,s.sparse.count*c);a!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,P=C.length;A<P;A++){const O=C[A];if(p.setX(O,w[A*c]),c>=2&&p.setY(O,w[A*c+1]),c>=3&&p.setZ(O,w[A*c+2]),c>=4&&p.setW(O,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=gp[d.magFilter]||_n,u.minFilter=gp[d.minFilter]||oi,u.wrapS=_p[d.wrapS]||bi,u.wrapT=_p[d.wrapT]||bi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const p=new Ht(x);p.needsUpdate=!0,d(p)}),t.load(Zr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),vi(h,o),h.userData.mimeType=o.mimeType||Eb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new fa,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Pl,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xe}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){const h=s[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Jt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Zt);const u=r.alphaMode||Su.OPAQUE;if(u===Su.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Su.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==rn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rn){const h=r.emissiveFactor;a.emissive=new We().setRGB(h[0],h[1],h[2],Jt)}return r.emissiveTexture!==void 0&&o!==rn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),vi(h,r),t.associations.set(h,{materials:e}),r.extensions&&rs(s,h,r),h})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return xp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=wb(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=xp(new Lt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Mb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const x=u[f],p=o[f];let m;const S=l[f];if(p.mode===Ln.TRIANGLES||p.mode===Ln.TRIANGLE_STRIP||p.mode===Ln.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Hv(x,S):new pe(x,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Ln.TRIANGLE_STRIP?m.geometry=Qf(m.geometry,xh):p.mode===Ln.TRIANGLE_FAN&&(m.geometry=Qf(m.geometry,Gc));else if(p.mode===Ln.LINES)m=new Wv(x,S);else if(p.mode===Ln.LINE_STRIP)m=new ha(x,S);else if(p.mode===Ln.LINE_LOOP)m=new Xv(x,S);else if(p.mode===Ln.POINTS)m=new Nl(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&bb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),vi(m,r),p.extensions&&rs(s,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&rs(s,h[0],r),h[0];const d=new st;r.extensions&&rs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Xi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new pl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new $e;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Cl(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",S)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],x=h[3],p=h[4],m=[];for(let S=0,y=d.length;S<y;S++){const v=d[S],C=f[S],w=g[S],A=x[S],P=p[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const O=n._createAnimationTracks(v,C,w,A,P);if(O)for(let _=0;_<O.length;_++)m.push(O[_])}return new Xl(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ab)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Od:l.length>1?u=new st:l.length===1?u=l[0]:u=new wt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),vi(u,r),r.extensions&&rs(n,u,r),r.matrix!==void 0){const h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new st;n.name&&(r.name=s.createUniqueName(n.name)),vi(r,n),n.extensions&&rs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof kn||d instanceof Ht)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ui[r.path]===Ui.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ui[r.path]){case Ui.weights:l=Qs;break;case Ui.rotation:l=er;break;case Ui.position:case Ui.scale:l=nr;break;default:n.itemSize===1?l=Qs:l=nr;break}const u=s.interpolation!==void 0?yb[s.interpolation]:Mr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ui[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof er?vb:mp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Rb(i,e,t){const n=e.attributes,s=new Yn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){const u=wu(lr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,c=new U;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=wu(lr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Kn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function xp(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Mu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return dt.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),vi(i,e),Rb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Sb(i,e.targets,t):i})}const Cb="Idle",Pb=.6,Ib=.1,Lb=new K1;function Nb(i,{height:e=Vn,clip:t=Cb}={}){return new Promise((n,s)=>{Lb.load(i,r=>n(Db(r,e,t)),void 0,s)})}function Db(i,e,t){const n=i.scene;n.traverse(h=>{if(h.isMesh){h.castShadow=!0,h.receiveShadow=!0;for(const d of vp(h.material))d&&("roughness"in d&&(d.roughness=Pb),"metalness"in d&&(d.metalness=Ib))}});const s=new st;n.updateWorldMatrix(!0,!0);const r=new Yn().setFromObject(n),o=r.getSize(new U);if(o.y>1e-4){const h=e/o.y;n.scale.multiplyScalar(h),r.min.multiplyScalar(h),r.max.multiplyScalar(h)}n.position.x-=(r.min.x+r.max.x)/2,n.position.z-=(r.min.z+r.max.z)/2,n.position.y-=r.min.y,s.add(n);const a=new eM(n),c=new Map;for(const h of i.animations)c.set(h.name,a.clipAction(h));let l=null;function u(h,d=.25){const f=c.get(h);return!f||f===l?!!f:(f.reset().play(),l?l.crossFadeTo(f,d,!1):d>0&&f.fadeIn(d),l=f,!0)}return!u(t,0)&&i.animations.length&&u(i.animations[0].name,0),{group:s,height:e,clips:[...c.keys()],play:u,update(h){a.update(h)},dispose(){a.stopAllAction(),a.uncacheRoot(n),Ub(n)}}}function vp(i){return i?Array.isArray(i)?i:[i]:[]}function Ub(i){const e=new Set;i.traverse(t=>{if(t.isMesh){t.geometry?.dispose();for(const n of vp(t.material))e.add(n)}});for(const t of e){for(const n of Object.values(t))n&&n.isTexture&&n.dispose();t.dispose()}}const Ob=.45;function Fb(i){const e=i.split("-")[1]??"red",t=dp({tier:e});let n=0;return{...t,update(s){n+=s,t.body.position.y=Math.sin(n*1.8)*.006;for(const[r,o]of t.arms.entries())o.group.rotation.x=.12+Math.sin(n*1.8+r)*.03,o.group.rotation.z=o.side*.18},setGait(){}}}const Eu=1.5;function Bb({renderer:i,modelUrl:e=null,who:t="vexo"}){const n=new Lr;n.background=new We(658966);const s=i.toneMapping,r=i.toneMappingExposure,o=i.outputColorSpace;i.toneMapping=rh,i.toneMappingExposure=1,i.outputColorSpace=Rt;const a=i.shadowMap.enabled,c=i.shadowMap.type;i.shadowMap.enabled=!0,i.shadowMap.type=th;const l=new kt(38,window.innerWidth/window.innerHeight,.05,100),u=new Pr(i);n.environment=u.fromScene(new _u,.04).texture,n.environmentIntensity=.55,u.dispose(),n.add(new zy(15266047,.8));const h=new mi(16774634,2.5);h.position.set(5,10,7),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.bias=-1e-4,h.shadow.radius=4,h.shadow.camera.near=8,h.shadow.camera.far=20,h.shadow.camera.left=-1.8,h.shadow.camera.right=1.8,h.shadow.camera.top=1.8,h.shadow.camera.bottom=-1.8,n.add(h);const d=new mi(10273023,1.15);d.position.set(3.2,1.4,1.6),n.add(d);const f=new mi(10420176,1);f.position.set(.6,2,-3.6),n.add(f);const g=new pe(new mt(.62,.7,.06,48),new Xe({color:1053724,metalness:.2,roughness:.85}));g.position.y=-.03,g.receiveShadow=!0,n.add(g);const x=new pe(new zn(.63,.008,8,64),new rn({color:4835583}));x.rotation.x=Math.PI/2,x.position.y=.012,n.add(x);const p=new st;n.add(p);const m=t.startsWith("boko")?Fb(t):xu();p.add(m.group),m.group.traverse(B=>{B.isMesh&&(B.castShadow=!0,B.receiveShadow=!0)});let S=!1,y=m;e&&Nb(e).then(B=>{if(S){B.dispose();return}p.remove(m.group),p.add(B.group),y=B}).catch(B=>{console.warn(`[character] could not load ${e}, keeping the built-in Vexo:`,B)});let v=0,C=.06,w=0,A=!1,P=0;function O(){const j=Vn*.52;l.position.set(0,j+Math.sin(C)*3.7,Math.cos(C)*3.7),l.lookAt(0,Vn*.52,0)}O();function _(B){A=!0,P=B.clientX}function M(B){A&&(v+=(B.clientX-P)*.012,P=B.clientX,w=Eu)}function F(){A=!1}function H(B){B.code==="ArrowLeft"&&(v-=.2,w=Eu),B.code==="ArrowRight"&&(v+=.2,w=Eu),B.code==="ArrowUp"&&(C=Math.min(.9,C+.06),O()),B.code==="ArrowDown"&&(C=Math.max(-.35,C-.06),O())}window.addEventListener("pointerdown",_),window.addEventListener("pointermove",M),window.addEventListener("pointerup",F),window.addEventListener("keydown",H);const D=document.createElement("div");D.id="character-label",D.innerHTML=`
    <div class="character-label__name">VEXO</div>
    <div class="character-label__hint">Drag to turn · ↑ ↓ to tilt</div>
  `,document.body.appendChild(D);function q(B){w>0?w-=B:A||(v+=Ob*B),p.rotation.y=v,y.update(B)}function E(){i.render(n,l)}function V(B=window.innerWidth,j=window.innerHeight){l.aspect=B/j,l.updateProjectionMatrix()}return{update:q,render:E,onResize:V,dispose(){S=!0,i.toneMapping=s,i.toneMappingExposure=r,i.outputColorSpace=o,i.shadowMap.enabled=a,i.shadowMap.type=c,y!==m&&y.dispose?.(),n.environment?.dispose()},setAngle(B){v=B,w=1/0,p.rotation.y=v},get vexo(){return y}}}const kb=8161430,zb=15659509,yp=4828159,Mp=.46,Au=.32,Tu=4,Hb=Math.ceil(Tu/Au);function Gb(){const i=new st;i.visible=!1;const e=new Xe({color:kb,metalness:.75,roughness:.42}),t=new Xe({color:zb,metalness:.5,roughness:.5}),n=new Xe({color:yp,emissive:yp,emissiveIntensity:1.4,roughness:.5}),s=[];for(const h of[-1,1]){const d=new mt(.035,.035,1,10);d.translate(0,-.5,0);const f=new pe(d,e);f.position.x=h*Mp/2,i.add(f),s.push(f)}const r=[];for(let h=0;h<Hb;h++){const d=new pe(new mt(.022,.022,Mp,8),t);d.rotation.z=Math.PI/2,d.position.y=-Au*(h+1),d.visible=!1,i.add(d),r.push(d)}const o=new pe(new zn(.5,.035,8,28),n);o.rotation.x=Math.PI/2,i.add(o);let a=Tu,c=0;function l(){return a*c}function u(){const h=l();for(const d of s)d.scale.y=Math.max(h,.001);for(const[d,f]of r.entries())f.visible=-f.position.y<=h-.04;o.position.y=-h,o.visible=c>.02,i.visible=c>.001}return u(),{group:i,setHeight(h){a=Math.min(Math.max(h,.4),Tu),u()},setExtension(h){c=h<0?0:h>1?1:h,u()},get height(){return a},get extension(){return c},rungSpacing:Au}}const Ru=22,Sp=2*Math.PI*Ru,Cu=.6;function Vb(){const i=document.createElement("div");i.id="stamina-wheel",i.hidden=!0,i.innerHTML=`
    <svg viewBox="0 0 56 56" width="56" height="56">
      <circle class="stamina-wheel__track" cx="28" cy="28" r="${Ru}" />
      <circle class="stamina-wheel__fill" cx="28" cy="28" r="${Ru}"
              stroke-dasharray="${Sp.toFixed(2)}" />
    </svg>
  `,document.body.appendChild(i);const e=i.querySelector(".stamina-wheel__fill");let t=!1,n=0,s=-1,r=null;return{update(o,a,c,l){l!=null&&(o<.999||a)?n=Cu:n>0&&(n-=c);const h=n>0&&l!=null;if(h!==t&&(i.hidden=!h,t=h),!h)return;i.style.transform=`translate(${Math.round(l.x)}px, ${Math.round(l.y)}px)`,i.style.opacity=n<Cu?(n/Cu).toFixed(2):"1";const d=Math.round(Sp*(1-Math.max(0,Math.min(1,o))));d!==s&&(e.style.strokeDashoffset=String(d),s=d),a!==r&&(i.classList.toggle("stamina-wheel--winded",a),r=a)},hide(){i.hidden=!0,t=!1,n=0}}}const Wb="♥";function Xb(){const i=document.createElement("div");i.id="hearts",i.hidden=!0,document.body.appendChild(i);let e=-1,t=0;return{set(n,s){if(!(n===e&&s===t)){e=n,t=s,i.innerHTML="";for(let r=0;r<s;r++){const o=document.createElement("span");o.className=r<n?"heart":"heart heart--spent",o.textContent=Wb,i.appendChild(o)}i.hidden=!1}},flash(){i.classList.remove("hearts--hit"),i.offsetWidth,i.classList.add("hearts--hit")},hide(){i.hidden=!0,e=-1}}}const lo=1.5,qb=3.3,Yb=6.2,za=.55,bp=.2,Kb=.62,$b=.3,jb=.25,Zb=.05,wp=2.2,Jb=.11,Qb=.08,ew=.15,Ep=.75,tw=.38,Pu=1.7,nw=2.6,Ap=.8,iw=22,sw=4.5,rw=.9,ow=1.3,aw=.55,Tp=.7,cw=.35,Rp=.5,lw=.4,Cp=.55,Ha=.32,Pp=2,uw=2.4,hw=1.3,Ip=Math.PI*.19,uo=4.6,Lp=2,dw=6.2,fw=5,os=5,pw=.32,Np=55,mw=.7,gw=4,_w=1.5,Dp=3.4,xw=2.4,vw=2.5,Up=["KeyL"],as=new U(0,1,0);function Oi(i,e){return 1-Math.pow(2,-i/e)}function Ga(i){return i<-1?-1:i>1?1:i}function yw(i,e,t){return i<e?e:i>t?t:i}function ho(i,e){let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Mw({scene:i,camera:e,ship:t,surface:n,input:s,renderer:r,monsters:o=null,onShot:a=()=>{},dialogue:c=null,onDown:l=()=>{},onLanded:u=()=>{},onAboard:h=()=>{}}){const d=new Pr(r),f=d.fromScene(new _u,.04).texture;d.dispose();const g=xu({suitLight:!1,environment:f}),x=Gb();let p=!1;function m(){p||(i.add(g.group),i.add(x.group),p=!0)}function S(){p&&(i.remove(g.group),i.remove(x.group),p=!1)}const y=document.createElement("div");y.id="foot-prompt",y.hidden=!0,document.body.appendChild(y);const v=Vb(),C=Xb(),w=new U,A=new U,P=new U;let O="off",_=0,M=0,F=0,H=Ap,D=0;const q=new U,E=new U,V=new U,B=new U,j=new qt,X=new U,Q=new qt,I=new U;let k=0,G=0,$=0,te=1,ee=0,se=!1,ne=!1,de=null,he=os,Z=!1,T=0,ce=0,ae=0,le=0,Me=0;const Te=new U,Ee=new U,L=new U,b=new U,J=new U,ie=new U,me=[0,0];let oe=!1;const Pe=n.world;function ve(be,He){return Ze.y+Pe.groundHeightAt(be-Ze.x,He-Ze.z)}let ge=null;function ke(be){if(be!==ge){if(ge=be,!be){y.hidden=!0;return}y.textContent=be,y.hidden=!1}}function _e(){if(O!=="off"||!n.active)return;D=new Yt().setFromQuaternion(t.mesh.quaternion,"YXZ").y,X.copy(t.mesh.position),Q.copy(t.mesh.quaternion),j.setFromEuler(new Yt(0,D,0,"YXZ")),B.set(X.x,n.hullGroundY(t)+T1,X.z);const He=t.mesh.scale.x;let lt=-1;if(!Re(-1,He)){if(!Re(1,He)){F=vw;return}lt=1}m(),O="settle",_=0,H=Math.min(sw,Ap+Math.max(0,X.y-B.y)/iw),n.park(),ze(lt,He),G=E.y,I.copy(q).addScaledVector(V,Ha),I.y=G,k=Math.atan2(-V.x,-V.z),g.setGait("climb"),Ge(),g.group.visible=!1,x.setExtension(0),s.consumeAnyJustPressed(),ke(Ne.onFoot.skip)}function Re(be,He){return ie.set(be*Rp,0,Cp).multiplyScalar(He).applyQuaternion(j).add(B),Pe.isClear(ie.x-Ze.x,ie.z-Ze.z,1.2)}function ze(be,He){E.set(be*Rp,lw,Cp).multiplyScalar(He).applyQuaternion(j).add(B),V.set(be,0,0).applyQuaternion(j).setY(0).normalize();const lt=ve(E.x,E.z);q.set(E.x,lt,E.z),x.group.position.copy(E),x.group.rotation.set(0,Math.atan2(V.x,V.z),0),x.setHeight(E.y-lt),x.setExtension(0)}function Ge(){g.group.position.copy(I),g.group.rotation.y=k}function Fe(){if(O==="walk"||O==="stepoff"){b.copy(I).addScaledVector(as,Vn*.62);const{dx:be,dz:He,boom:lt}=ht(),it=lt*Math.cos($),At=lt*Math.sin($);L.set(be,0,He).multiplyScalar(it).add(b).addScaledVector(as,1.15+(uo-lt)*.2+At),Ke();return}if(O==="settle"||O==="deploy"){b.copy(t.mesh.position).addScaledVector(as,.9),L.copy(t.mesh.position).addScaledVector(V,11).addScaledVector(as,3.4),ie.set(Math.sin(D),0,Math.cos(D)).multiplyScalar(3.5),L.add(ie),Ke();return}b.copy(I).addScaledVector(as,Vn*.5),L.copy(q).addScaledVector(V,5.6).addScaledVector(as,2.2),ie.set(Math.sin(D),0,Math.cos(D)).multiplyScalar(1.6),L.add(ie),L.y=Math.max(L.y,b.y-.4),Ke()}function Ke(){const be=ve(L.x,L.z)+.7;L.y<be&&(L.y=be);const He=6;for(let lt=1;lt<He;lt++){const it=lt/He,At=L.x+(b.x-L.x)*it,Xt=L.z+(b.z-L.z)*it,En=(ve(At,Xt)+.5-b.y*it)/(1-it);En>L.y&&(L.y=En)}}function Ve(be,He){return n.parked&&Math.hypot(be-B.x,He-B.z)<dw?!1:Pe.isClear(be-Ze.x,He-Ze.z,.5)}function ht(){const be=Me+Math.PI;for(const it of[0,.42,-.42,.85,-.85,1.3,-1.3,1.9,-1.9]){const At=be+it,Xt=Math.sin(At),mn=Math.cos(At);if(Ve(I.x+Xt*uo,I.z+mn*uo))return{dx:Xt,dz:mn,boom:uo}}const He=Math.sin(be),lt=Math.cos(be);for(let it=uo-.6;it>Lp;it-=.6)if(Ve(I.x+He*it,I.z+lt*it))return{dx:He,dz:lt,boom:it};return{dx:He,dz:lt,boom:Lp}}function K(be){Fe();const He=O==="walk"?.13:.34;!oe||O==="settle"?(e.position.copy(L),J.copy(b),oe=!0):(e.position.lerp(L,Oi(be,He)),J.lerp(b,Oi(be,He))),e.up.set(0,1,0),e.lookAt(J)}function Ue(){t.mesh.position.copy(B),t.mesh.quaternion.copy(j),x.setExtension(1),I.copy(q).addScaledVector(V,Pp),I.y=ve(I.x,I.z),k=Math.atan2(V.x,V.z),g.group.visible=!0,g.setGait("idle"),Ge(),Ie()}function re(){if(!c)return!1;const be=Pe.nearestPerson?Pe.nearestPerson(I.x-Ze.x,I.z-Ze.z):null;if(c.isOpen&&(!be||be.person!==c.person)){const He=c.person;c.close(),de&&de.people.stopTalking(He),de=null}return be?((s.keyboard.consumeJustPressed(["KeyE"])||s.gamepad.consumeJustPressed(Pt.Y))&&(be.people.startTalking(be.person,I.x-Ze.x,I.z-Ze.z),de=be,c.next(be.person)||(be.people.stopTalking(be.person),de=null)),c.isOpen?ke(null):ke(Ne.onFoot.talk.replace("{name}",be.person.name)),!0):!1}function xe(be,He=null,lt=null){if(!(O!=="walk"||T>0||le>0)){if(T=_w,He!=null){const it=I.x-He,At=I.z-lt,Xt=Math.hypot(it,At)||1;Te.x=it/Xt*Dp,Te.z=At/Xt*Dp}he=Math.max(0,he-be),C.set(he,os),C.flash(),te=0,ee=wp,he<=0&&(le=xw,g.setGait("dying"),Te.set(0,0,0),ke(null),v.hide())}}function Ie(){O="walk",_=0,te=1,ee=0,ne=!1,he=os,T=0,le=0,Z=!1,C.set(he,os),u(),$=0,Me=k,Te.set(0,0,0),M=fw,oe=!1}function Oe(){const be=Math.min(1,_/H),He=1-(1-be)*(1-be);t.mesh.position.lerpVectors(X,B,He),t.mesh.quaternion.slerpQuaternions(Q,j,He),t.velocity.set(0,0,0),be>=1&&(O="deploy",_=0)}function ot(){const be=Math.min(1,_/rw);x.setExtension(be),be>=1&&(O="down",_=0,g.group.visible=!0,g.setGait("climb"))}function Mt(be,He){G+=(He?-1:1)*ow*be;const lt=q.y,it=E.y-.15,At=ie.copy(q).addScaledVector(V,Ha),Xt=Oi(be,.12);I.x+=(At.x-I.x)*Xt,I.z+=(At.z-I.z)*Xt,k+=ho(k,Math.atan2(-V.x,-V.z))*Xt,He?(I.y=Math.max(lt,G),G<=lt&&(G=lt,O="stepoff",_=0,g.setGait("walk",lo*.7))):(I.y=Math.min(it,G),G>=it&&(G=it,O="stow",_=0,g.group.visible=!1,ke(null))),Ge()}function $t(be){const He=Math.min(1,_/aw),lt=Ha+(Pp-Ha)*He;I.copy(q).addScaledVector(V,lt),I.y=ve(I.x,I.z);const it=Math.atan2(V.x,V.z);k+=ho(k,it)*Oi(be,.12),Me=k,Ge(),He>=1&&Ie()}function ct(){x.setExtension(1-Math.min(1,_/Tp)),_>=Tp&&(O="off",x.setExtension(0),n.unpark(),oe=!1,ne=!1,v.hide(),C.hide(),S(),h())}function Wt(be,He){if(le>0||Z){Te.set(0,0,0);return}const lt=Ga(He?.lookX??0),it=Ga(He?.lookY??0),At=He?.lookTurnX??0,Xt=He?.lookTurnY??0;Me+=lt*uw*be+At,$=yw($-it*hw*be-Xt,-Ip,Ip);const mn=Math.abs(lt)>.05||Math.abs(At)>.0015,En=Ga(He?.stickYaw??He?.yaw??0),fs=Ga(He?.stickThrottle??He?.throttle??0);let dn=Math.hypot(En,fs);dn>1&&(dn=1);const zi=s.keyboard.isDown("ShiftLeft")||s.keyboard.isDown("ShiftRight")||s.gamepad.isButtonDown(Pt.B),mr=zi&&dn>.15;zi&&!se&&te>0&&ee<=0&&(te=Math.max(0,te-Zb)),se=zi,ee>0&&(ee-=be);const ps=mr&&ee<=0&&te>0;if(ne=ps,ps){const fe=te<jb?bp*.5:bp;te-=fe*be,te<=0&&(te=0,ee=wp)}else te=Math.min(1,te+(ee>0?$b:Kb)*be);const gr=dn<za?lo*(dn/za):lo+(qb-lo)*((dn-za)/(1-za)),xo=ee>0?Math.min(gr,lo):ps?Yb:gr;if(dn>.05){const fe=Me+Math.atan2(En,fs);Ee.set(Math.sin(fe),0,Math.cos(fe)).multiplyScalar(xo),k+=ho(k,fe)*Oi(be,Qb)}else Ee.set(0,0,0);const R=Oi(be,Jb);Te.x+=(Ee.x-Te.x)*R,Te.z+=(Ee.z-Te.z)*R;const N=Math.hypot(Te.x,Te.z);if(N>.05){I.x+=Te.x*be,I.z+=Te.z*be,Pe.resolveWalk(I.x-Ze.x,I.z-Ze.z,tw,me),I.x=me[0]+Ze.x,I.z=me[1]+Ze.z;const fe=I.x-B.x,we=I.z-B.z,Ae=Math.hypot(fe,we);Ae<Pu&&Ae>1e-4&&(I.x=B.x+fe/Ae*Pu,I.z=B.z+we/Ae*Pu)}N>ew?g.setGait("walk",N):g.setGait("idle");const z=Math.abs(En)<.4&&dn>.05;!mn&&z&&(Me+=ho(Me,k)*Oi(be,Ep),$+=(0-$)*Oi(be,Ep*2)),I.y=ve(I.x,I.z),Ge(),w.copy(I).addScaledVector(as,Vn*.75).project(e);const Y=w.z<1&&Math.abs(w.x)<1.4&&Math.abs(w.y)<1.4;if(v.update(te,ee>0,be,Y?{x:(w.x*.5+.5)*window.innerWidth+52,y:(-w.y*.5+.5)*window.innerHeight}:null),ce>0&&(ce-=be),ae>0&&(ae-=be),(s.keyboard.isDown("Space")||s.gamepad.isButtonDown(Pt.R2)||s.gamepad.isButtonDown(Pt.X))&&ce<=0&&o&&(ae=gw,g.getMuzzle(A))){ce=pw;const fe=o.aimAt(A,k,mw,Np);fe?(P.copy(fe).sub(A).normalize(),k+=ho(k,Math.atan2(P.x,P.z))*.6):P.set(Math.sin(k),0,Math.cos(k));const we=o.shoot(A,P,Np);g.fire(),a(A,P,we)}if(g.setArmed(ae>0,k),re())return;Math.hypot(I.x-q.x,I.z-q.z)<nw?(ke(Ne.onFoot.board),(s.keyboard.consumeJustPressed(Up)||s.gamepad.consumeJustPressed(Pt.A))&&(O="up",_=0,G=I.y,g.setGait("climb"),ke(null))):M>0?ke(Ne.onFoot.controls):ke(null)}return{get active(){return O!=="off"},get cutscene(){return O==="settle"||O==="deploy"||O==="down"||O==="stepoff"},get state(){return O},vexo:g,ladder:x,get position(){return I},get heading(){return k},get stamina(){return te},get winded(){return ee>0},get sprinting(){return ne},get hearts(){return he},get maxHearts(){return os},get down(){return le>0||Z},get quarry(){return O==="walk"&&le<=0?I:null},takeHit:xe,begin:_e,update(be,He){if(O==="off"){F>0&&(F-=be),He&&n.active?(ke(F>0?Ne.onFoot.noRoom:Ne.onFoot.climbOut),(s.keyboard.consumeJustPressed(Up)||s.gamepad.consumeJustPressed(Pt.A))&&_e()):ke(null);return}switch(_+=be,M>0&&(M-=be),this.cutscene&&_>cw&&s.consumeAnyJustPressed()&&(Ue(),ke(null)),O){case"settle":Oe();break;case"deploy":ot();break;case"down":Mt(be,!0);break;case"stepoff":$t(be);break;case"walk":Wt(be,He);break;case"up":Mt(be,!1);break;case"stow":ct();break}T>0&&(T-=be),le>0&&(le-=be,le<=0&&(le=0,Z=!0,l())),g.update(be),O!=="off"&&K(be),this.cutscene?ke(Ne.onFoot.skip):O!=="walk"&&ke(null)},prewarm(be,He){const lt=g.group.visible;g.group.position.copy(Ze),g.group.visible=!0,x.group.position.copy(Ze),x.setHeight(2.6),x.setExtension(1),be.compile(i,He);const it=new kt(50,He.aspect,.1,5e3);it.position.copy(Ze).add(new U(3.5,1.6,4.5)),it.lookAt(Ze.x,Ze.y+1,Ze.z),be.render(i,it),g.group.visible=lt,x.setExtension(0),be.render(i,He)},reset(){O!=="off"&&n.unpark(),O="off",_=0,F=0,Z=!1,le=0,he=os,C.set(he,os),oe=!1,g.group.visible=!1,x.setExtension(0),ke(null),ne=!1,v.hide(),C.hide(),S()}}}const Op=4,Sw=3,bw=24,ww=Math.cos(1.1),Ew=7,Aw=8,Tw=55,Fp=4.5,Bp=.9,Iu=3.4,kp=2,Rw=3.2,zp=1.9,ur=.42,Hp=.22,Cw=.9,Pw=.45;function Iw({scene:i,world:e,origin:t}){const n=new st;n.visible=!1,i.add(n);const s=new Xe({color:16751164,emissive:16742940,emissiveIntensity:1.6,roughness:.6}),r=new Xe({color:5453855,roughness:.95}),o=new Xe({color:7164979,roughness:.9}),a=[],c=[],l=[[2.4,1.2],[-2.1,1.9],[1.1,-2.4]],u=(E,V)=>t.y+e.groundHeightAt(E,V),h=620;for(let E=0;E<Op;E++){const V={x:0,z:0,cell:null,members:[]};c.push(V),y(V);for(let B=0;B<Sw;B++)C(V,0,0,B===0?"blue":"red",!1);C(V,0,0,"black",!0)}function d(E,V,B=0){let j=Math.imul(E|0,668265261)^Math.imul(V|0,374761393)^Math.imul(B,2654435761);return j=Math.imul(j^j>>>15,2246822507),j=Math.imul(j^j>>>13,3266489909),((j^j>>>16)>>>0)/4294967296}const f=new Map;function g(E,V){const B=`${E},${V}`;if(f.has(B))return f.get(B);let j=null;if(d(E,V,7)<=.42){const X=(E+.2+d(E,V,11)*.6)*h,Q=(V+.2+d(E,V,13)*.6)*h;j=S(X,Q,7)}return f.set(B,j),j}const x=2;function p(E,V){const B=Math.floor(E/h),j=Math.floor(V/h),X=[],Q=3;let k=c.every(ne=>ne.cell===null)?1/0:x,G=!1;const $=[];for(let ne=-Q;ne<=Q;ne++)for(let de=-Q;de<=Q;de++)$.push([B+de,j+ne,de*de+ne*ne]);$.sort((ne,de)=>ne[2]-de[2]);for(const[ne,de]of $){if(!f.has(`${ne},${de}`)){if(k<=0){G=!0;continue}k-=1}const Z=g(ne,de);Z&&X.push({key:`${ne},${de}`,site:Z,d2:(Z.x-E)**2+(Z.z-V)**2})}P=G,X.sort((ne,de)=>ne.d2-de.d2);const te=X.slice(0,Op),ee=new Set(te.map(ne=>ne.key)),se=c.filter(ne=>!ee.has(ne.cell));for(const ne of te){if(c.some(he=>he.cell===ne.key))continue;const de=se.pop();if(!de)break;m(de,ne.key,ne.site.x,ne.site.z)}}function m(E,V,B,j){E.cell=V,E.x=B,E.z=j,v(E);for(const[X,Q]of E.members.entries()){const I=X/E.members.length*Math.PI*2+d(B|0,j|0)*6,k=Q.boss?1.9:2.6;Q.home.set(B+Math.sin(I)*k,j+Math.cos(I)*k),Q.pos.copy(Q.home),Q.state="idle",Q.timer=0,Q.hp=Q.boko.maxHp*(Q.boss?2:1),Q.boko.group.rotation.set(0,Q.heading,0),Q.boko.group.visible=!0,O(Q)}}function S(E,V,B){if(e.isClear(E,V,B))return{x:E,z:V};for(let j=9;j<=45;j+=9)for(let X=0;X<Math.PI*2;X+=Math.PI/4){const Q=E+Math.sin(X)*j,I=V+Math.cos(X)*j;if(e.isClear(Q,I,B))return{x:Q,z:I}}return null}function y(E){const V=new pe(new zn(.55,.13,6,12),r);V.rotation.x=Math.PI/2,n.add(V),E.stones=V;const B=new pe(new hn(.32,.8,7),s);n.add(B),E.flame=B,E.crates=l.map((j,X)=>{const Q=new pe(new yt(.7,.62,.7),o);return Q.rotation.y=X*.8,n.add(Q),Q})}function v(E){const V=u(E.x,E.z);E.stones.position.set(E.x+t.x,V+.1,E.z+t.z),E.flame.position.set(E.x+t.x,V+.5,E.z+t.z);for(const[B,[j,X]]of l.entries())E.crates[B].position.set(E.x+j+t.x,u(E.x+j,E.z+X)+.31,E.z+X+t.z)}function C(E,V,B,j,X){const Q=dp({tier:j});X&&Q.group.scale.setScalar(1.35);const I={boko:Q,camp:E,home:new Se(V,B),pos:new Se(V,B),heading:Math.random()*Math.PI*2,state:"idle",timer:0,hp:Q.maxHp*(X?2:1),boss:X,phase:Math.random()*10,lastSeen:0,hitCooldown:0};return n.add(Q.group),a.push(I),E.members.push(I),O(I),I}const w=new U,A=new Se(1/0,1/0);let P=!1;function O(E){E.boko.group.position.set(E.pos.x+t.x,u(E.pos.x,E.pos.y),E.pos.y+t.z),E.boko.group.rotation.y=E.heading}function _(E,V){const B=V.x-E.pos.x,j=V.y-E.pos.y,X=Math.hypot(B,j);if(X>bw)return!1;if(X<Ew)return!0;const Q=Math.sin(E.heading),I=Math.cos(E.heading);return(B*Q+j*I)/(X||1)>ww}function M(E,V){for(const B of E.members)B.state==="dead"||B.state==="chase"||(B.state="alert",B.timer=.35+Math.random()*.25,B.lastSeen=V)}function F(E,V,B,j,X){const Q=V-E.pos.x,I=B-E.pos.y,k=Math.hypot(Q,I);if(k<.05)return k;let $=Math.atan2(Q,I)-E.heading;for(;$>Math.PI;)$-=Math.PI*2;for(;$<-Math.PI;)$+=Math.PI*2;E.heading+=Math.max(-Iu*X,Math.min(Iu*X,$));const te=Math.min(k,j*X);if(Math.abs($)<1.2){const ee=E.pos.x+Math.sin(E.heading)*te,se=E.pos.y+Math.cos(E.heading)*te;e.isClear(ee,se,.45)?(E.pos.x=ee,E.pos.y=se):E.heading+=.8*X*Iu}return k}function H(E,V,B){const j=E.boko;E.phase+=B*(V?9:1.6);const X=Math.sin(E.phase);if(E.state!=="dead"){for(const[Q,I]of j.legs.entries())I.group.rotation.x=V?X*(Q?-.7:.7):0;for(const[Q,I]of j.arms.entries()){const k=.18+(E.state==="chase"?.35:0);I.group.rotation.x=k+(V?X*(Q?.5:-.5):X*.05),I.group.rotation.z=I.side*.2}if(E.state==="attack"){const Q=E.timer,I=Q<ur?-(Q/ur)*2.2:-2.2+(Q-ur)/Hp*3.4;j.arms[0].group.rotation.x=Math.min(1.2,I)}E.state==="alert"?(j.arms[0].group.rotation.x=-1.4,j.arms[1].group.rotation.x=-1.2,j.body.rotation.x=-.18):j.body.rotation.x=E.state==="chase"?.16:0}}function D(E){let V=0;for(const B of E.members)B.state==="attack"&&(V+=1);return V}const q=new Se;return{group:n,monsters:a,camps:c,setActive(E){n.visible=E},focus(E,V){!(Math.abs(E-A.x)>=60||Math.abs(V-A.y)>=60)&&!P||(A.set(E,V),p(E,V))},update(E,V,B){if(!n.visible)return;for(const X of c)X.flame.scale.setScalar(.85+Math.sin(performance.now()*.006+X.x)*.12);const j=V!=null;j&&q.set(V.x-t.x,V.z-t.z);for(const X of a){X.timer+=E,X.hitCooldown>0&&(X.hitCooldown-=E);let Q=!1;switch(X.state){case"idle":{const I=X.phase*.35+X.home.x,k=X.home.x+Math.sin(I)*1.4,G=X.home.y+Math.cos(I)*1.4;Q=F(X,k,G,Bp,E)>.3,j&&_(X,q)&&M(X.camp,0);break}case"alert":{X.timer>=.55&&(X.state="chase",X.timer=0);break}case"chase":{if(!j){X.state="idle",X.timer=0;break}const I=F(X,q.x,q.y,Fp,E);Q=!0,_(X,q)?X.lastSeen=0:X.lastSeen+=E,I<=zp&&D(X.camp)<kp?(X.state="attack",X.timer=0):I<Rw&&D(X.camp)>=kp?F(X,X.pos.x+(X.pos.x-q.x)*.4,X.pos.y+(X.pos.y-q.y)*.4,Fp*.5,E):(X.lastSeen>Aw||I>Tw)&&(X.state="return",X.timer=0);break}case"attack":{X.timer>=ur&&X.timer<ur+E&&j&&Math.hypot(q.x-X.pos.x,q.y-X.pos.y)<=zp+.5&&B(X.boss?2:1,X.pos.x+t.x,X.pos.y+t.z),X.timer>=ur+Hp+Cw&&(X.state=j?"chase":"return",X.timer=0);break}case"stagger":{X.timer>=Pw&&(X.state=j?"chase":"return",X.timer=0);break}case"return":{Q=F(X,X.home.x,X.home.y,Bp*1.8,E)>.4,Q||(X.state="idle",X.timer=0),j&&_(X,q)&&M(X.camp,0);break}}H(X,Q,E),X.state!=="dead"&&O(X)}},aimAt(E,V,B=.55,j=45){const X=Math.sin(V),Q=Math.cos(V),I=Math.cos(B);let k=null,G=-1/0;for(const $ of a){if($.state==="dead")continue;const te=$.pos.x+t.x-E.x,ee=$.pos.y+t.z-E.z,se=Math.hypot(te,ee);if(se>j||se<.001)continue;const ne=(te*X+ee*Q)/se;if(ne<I)continue;const de=ne*2-se/j;de>G&&(G=de,k=$)}return k?(w.set(k.pos.x+t.x,u(k.pos.x,k.pos.y)+vu*.55,k.pos.y+t.z),w):null},shoot(E,V,B=60,j=.55){let X=null,Q=B;for(const I of a){if(I.state==="dead")continue;w.set(I.pos.x+t.x,u(I.pos.x,I.pos.y)+vu*.55,I.pos.y+t.z).sub(E);const k=w.dot(V);k<=0||k>Q||Math.sqrt(Math.max(0,w.lengthSq()-k*k))>j*(I.boss?1.5:1)||(X=I,Q=k)}return X?(X.hp-=1,X.hp<=0?(X.state="dead",X.timer=0,X.boko.group.rotation.x=-Math.PI/2.2,X.boko.group.position.y=u(X.pos.x,X.pos.y)+.25):(X.state="stagger",X.timer=0),X):null},kill(E){E.state="dead",E.timer=0,E.hp=0,E.boko.group.rotation.x=-Math.PI/2.2,E.boko.group.position.y=u(E.pos.x,E.pos.y)+.25},snapshot(){return c.filter(E=>E.cell).map(E=>({cell:E.cell,hp:E.members.map(V=>V.state==="dead"?0:V.hp)}))},restore(E){if(!Array.isArray(E))return;const V=new Map(E.map(B=>[B.cell,B]));for(const B of c){const j=V.get(B.cell);if(j)for(const[X,Q]of B.members.entries()){const I=j.hp[X];I!==void 0&&(Q.hp=I,I<=0&&this.kill(Q))}}},reset(){for(const E of a)E.pos.copy(E.home),E.state="idle",E.timer=0,E.hp=E.boko.maxHp*(E.boss?2:1),E.boko.group.rotation.set(0,E.heading,0),O(E)}}}const Lw=2.2,Nw=.011,Dw=.25,Uw=0,Ow=4,Fw=5;function Bw({renderer:i,input:e,saves:t=null,tablet:n=null}){const s=document.createElement("div");s.id="inventory",s.className="screen-overlay",s.hidden=!0,s.innerHTML=`
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
  `,document.body.appendChild(s);const r=s.querySelector("[data-items]"),o=s.querySelector("[data-tabs]"),a=s.querySelector("[data-system]"),c=s.querySelector("[data-tablet]"),l=s.querySelector("[data-save]"),u=s.querySelector("[data-saved]"),h=s.querySelector(".inventory__figure"),d=[{id:"weapons",label:Ne.inventory.weapons},...n?[{id:"tablet",label:Ne.inventory.tablet}]:[],{id:"system",label:Ne.inventory.system}];n&&(c.appendChild(n),n.style.display="");let f=0;const g=new Lr;g.background=null;const x=new kt(32,1,.05,40),p=new Pr(i),m=p.fromScene(new _u,.04).texture;p.dispose(),g.add(new ba(8363712,1185824,.9));const S=new mi(16774116,2.2);S.position.set(-2,3,3.2),g.add(S);const y=new mi(10420176,1.1);y.position.set(1.4,2,-3),g.add(y);const v=new st;g.add(v);const C=xu({suitLight:!1,environment:m});v.add(C.group),C.setArmed(!1);const w=Vn*1.22;function A(I){const k=x.fov*Math.PI/180,G=w/2/Math.tan(k/2),$=Vn*.42/(Math.tan(k/2)*I),te=Math.max(G,$);x.position.set(0,Vn*.52,te),x.lookAt(0,Vn*.5,0)}A(.75);const P=new We;let O=!1,_=0,M=!0,F=!1,H=0;function D(I){O&&(F=!0,M=!1,H=I.clientX)}function q(I){F&&(_+=(I.clientX-H)*Nw,H=I.clientX)}function E(){F=!1}h.addEventListener("pointerdown",D),window.addEventListener("pointermove",q),window.addEventListener("pointerup",E);let V=[];function B(){o.innerHTML="";for(const[I,k]of d.entries()){const G=document.createElement("span");G.className=I===f?"inventory__tab inventory__tab--on":"inventory__tab",G.textContent=k.label,G.addEventListener("click",()=>{f=I,B(),X()}),o.appendChild(G)}}function j(I){f=(f+I+d.length)%d.length,B(),X()}function X(){const I=d[f].id;if(r.hidden=I!=="weapons",a.hidden=I!=="system",c.hidden=I!=="tablet",I==="system"){u.textContent=Q();return}if(I!=="tablet"){r.innerHTML="";for(const k of V){const G=document.createElement("li");G.className=k.held?"inventory__item inventory__item--held":"inventory__item",G.innerHTML=`
        <span class="inventory__item-name">${k.name}</span>
        <span class="inventory__item-note">${k.note}</span>
      `,r.appendChild(G)}if(!V.length){const k=document.createElement("li");k.className="inventory__item inventory__item--empty",k.textContent=Ne.inventory.empty,r.appendChild(k)}}}function Q(){const I=t?.latest;if(!I)return Ne.inventory.neverSaved;const k=Math.max(0,Date.now()-I.at);if(k<8e3)return Ne.inventory.savedJustNow;const G=Math.round(k/6e4);return G<1?Ne.inventory.savedSecondsAgo:Ne.inventory.savedMinutesAgo.replace("{n}",String(G))}return l.addEventListener("click",()=>{const I=t?.saveManual();u.textContent=I?Ne.inventory.savedJustNow:Ne.inventory.saveFailed}),{get isOpen(){return O},setItems(I){V=I.map(k=>({held:!1,...k})),X()},get tab(){return d[f].id},toggle(){return O?this.close():this.show()},show(){return O=!0,s.hidden=!1,M=!0,_=0,C.setArmed(!0,!1),B(),X(),C.setGait("idle"),!0},close(){return O=!1,s.hidden=!0,F=!1,C.setArmed(!1),!1},update(I,k){if(!O)return;const G=k?.stickYaw??k?.yaw??0,$=(e.keyboard.isDown("KeyA")?1:0)-(e.keyboard.isDown("KeyD")?1:0);if((e.gamepad.consumeJustPressed(Fw)||e.keyboard.consumeJustPressed(["ArrowRight"]))&&j(1),(e.gamepad.consumeJustPressed(Ow)||e.keyboard.consumeJustPressed(["ArrowLeft"]))&&j(-1),d[f].id==="system"&&e.gamepad.consumeJustPressed(Uw)){const ee=t?.saveManual();u.textContent=ee?Ne.inventory.savedJustNow:Ne.inventory.saveFailed}const te=G||$;te?(M=!1,_+=te*Lw*I):M&&!F&&(_+=Dw*I),v.rotation.y=_,C.update(I)},render(){if(!O)return;const I=h.getBoundingClientRect();if(I.width<8||I.height<8)return;const k=i.getPixelRatio(),G=i.getSize(new Se),$=I.left*k,te=G.height*k-I.bottom*k,ee=I.width*k,se=I.height*k;x.aspect=I.width/I.height,x.updateProjectionMatrix(),A(x.aspect);const ne=i.getScissorTest();i.setScissorTest(!0),i.setViewport($/k,te/k,ee/k,se/k),i.setScissor($/k,te/k,ee/k,se/k);const de=i.autoClear;i.autoClear=!1,i.getClearColor(P);const he=i.getClearAlpha();i.setClearColor(661026,1),i.clear(!0,!0,!1),i.setClearColor(P,he),i.render(g,x),i.autoClear=de,i.setScissorTest(ne),i.setViewport(0,0,G.width,G.height),i.setScissor(0,0,G.width,G.height)},vexo:C}}const Lu="super-vexo/save",Gp=4;function Va(){try{const i=localStorage.getItem(Lu);if(!i)return{manual:null,auto:null};const e=JSON.parse(i);return e.v!==Gp?{manual:null,auto:null}:{manual:e.manual??null,auto:e.auto??null}}catch{return{manual:null,auto:null}}}function Vp(i){try{return localStorage.setItem(Lu,JSON.stringify({v:Gp,...i})),!0}catch{return!1}}function kw({ship:i,surface:e,onFoot:t,monsters:n,mission:s,upgrades:r,rovers:o}){function a(c){return{kind:c,at:Date.now(),ship:{p:i.mesh.position.toArray(),q:i.mesh.quaternion.toArray(),scale:i.mesh.scale.x},inTown:e.active,camps:n.snapshot(),credits:s.credits,upgrades:r.upgrades.filter(l=>l.bought).map(l=>l.id),rovers:o.rovers.map(l=>l.fixed)}}return{get has(){const{manual:c,auto:l}=Va();return!!(c||l)},get latest(){const{manual:c,auto:l}=Va();return c?l&&l.at>c.at?l:c:l},saveManual(){const c=Va();return c.manual=a("manual"),Vp(c)},saveAuto(c){const l=Va();return l.auto={...a("auto"),reason:c},Vp(l)},restore(c){if(!c)return!1;t.reset(),e.reset(i),c.inTown&&e.enter(i),i.mesh.position.fromArray(c.ship.p),i.mesh.quaternion.fromArray(c.ship.q),i.mesh.scale.setScalar(c.ship.scale??1),i.velocity.set(0,0,0),n.reset(),n.focus(i.mesh.position.x-Ze.x,i.mesh.position.z-Ze.z),n.restore(c.camps),o.reset();for(const[l,u]of(c.rovers??[]).entries())u&&o.rovers[l]&&o.markFixed(o.rovers[l]);s.reset(),s.grantCredits(c.credits??0),r.reset();for(const l of c.upgrades??[])r.buyFree(l);return!0},clear(){try{return localStorage.removeItem(Lu),!0}catch{return!1}}}}function zw({onContinue:i,onTitle:e}){const t=document.createElement("div");t.id="game-over",t.hidden=!0,t.innerHTML=`
    <div class="game-over__sign">${Ne.gameOver.title}</div>
    <p class="game-over__ask" data-ask>${Ne.gameOver.ask}</p>
    <div class="game-over__buttons">
      <button class="game-over__btn" data-yes>${Ne.gameOver.yes}</button>
      <button class="game-over__btn" data-no>${Ne.gameOver.no}</button>
    </div>
    <p class="game-over__hint">${Ne.gameOver.hint}</p>
  `,document.body.appendChild(t);const n=t.querySelector("[data-ask]"),s=t.querySelector("[data-yes]"),r=t.querySelector("[data-no]");let o=!1,a=0,c=!0;function l(){s.classList.toggle("game-over__btn--on",a===0),r.classList.toggle("game-over__btn--on",a===1),s.disabled=!c}function u(){const d=a===0&&c;h(),d?i():e()}function h(){o=!1,t.hidden=!0}return s.addEventListener("click",()=>{a=0,l(),u()}),r.addEventListener("click",()=>{a=1,l(),u()}),{get isOpen(){return o},show(d){o=!0,c=d,a=d?0:1,n.textContent=d?Ne.gameOver.ask:Ne.gameOver.noSave,t.hidden=!1,l()},update(d,f){if(!o)return;const g=d.keyboard.consumeJustPressed(["ArrowLeft","KeyA"])||d.gamepad.consumeJustPressed(f.Left),x=d.keyboard.consumeJustPressed(["ArrowRight","KeyD"])||d.gamepad.consumeJustPressed(f.Right);(g||x)&&(a=a===0?1:0,l()),(d.keyboard.consumeJustPressed(["Enter","Space"])||d.gamepad.consumeJustPressed(f.A))&&u()},hide:h}}const Wp=Math.PI*1.25,Hw=.55,Nu=8,fo=i=>[i>>16&255,i>>8&255,i&255],Du=fo(3105920),Uu=fo(729139),Ou=fo(14734254),Wa=i=>i<0?0:i>1?1:i,bn=(i,e,t)=>i+(e-i)*t;function Gw(i,e,t,n,s,r){const o=1-s.moisture,{sandy:a,plateau:c}=i.styleAt(s),l=f=>{const g=fo(f);r[0]=g[0],r[1]=g[1],r[2]=g[2]},u=(f,g)=>{if(g<=0)return;const x=fo(f);r[0]=bn(r[0],x[0],g),r[1]=bn(r[1],x[1],g),r[2]=bn(r[2],x[2],g)},h=(f,g,x)=>{const p=Wa((x-f)/(g-f));return p*p*(3-2*p)};l(en[Ye.FOREST]),u(en[Ye.PLAIN],h(.28,.44,o)),u(en[Ye.SAVANNA],h(.42,.58,o)),u(en[Ye.STONE_DESERT],h(.55,.68,o)),u(en[Ye.MESA],c*.85),u(en[Ye.DUNES],a);const d=i.snowlineAt(e,t);if(u(9275257,h(d*.55,d*.9,n)),u(en[Ye.SNOW],h(d*.86,d*1.15,n)),n<_t(70)){const f=1-Wa(n/_t(70));r[0]=bn(r[0],Ou[0],f*f*.6),r[1]=bn(r[1],Ou[1],f*f*.6),r[2]=bn(r[2],Ou[2],f*f*.6)}}function Vw({terrain:i,width:e,height:t,minX:n,maxX:s,minZ:r,maxZ:o}){const a=new Uint8ClampedArray(e*t*4),c=(s-n)/e,l=(o-r)/t,u=new Float64Array(e+1),h=new Float64Array(e+1),d=[0,0,0];let f=null,g=-1;const x={continent:0,uplift:0,moisture:0,heat:0};let p=0;const m=(y,v)=>{for(let C=0;C<=e;C++)y[C]=i.heightAt(n+C*c,v)},S=y=>{const v=Math.ceil(e/Nu)+1;f||(f=new Array(v));for(let C=0;C<v;C++)f[C]=i.regionAt(n+C*Nu*c,y);return f};return{pixels:a,width:e,height:t,get done(){return p>=t},get progress(){return p/t},drawRows(y=8){for(let v=0;v<y&&p<t;v++,p++){const C=r+p*l;p===0?m(u,C):u.set(h),m(h,C+l),g!==p&&(S(C),g=p);for(let w=0;w<e;w++){const A=u[w],P=(p*e+w)*4;if(a[P+3]=255,A<=ss){const j=Wa(-A/_t(700));a[P]=bn(Du[0],Uu[0],j),a[P+1]=bn(Du[1],Uu[1],j),a[P+2]=bn(Du[2],Uu[2],j);continue}const O=n+w*c,_=w/Nu,M=Math.floor(_),F=_-M,H=f[M],D=f[M+1]??H;x.continent=bn(H.continent,D.continent,F),x.uplift=bn(H.uplift,D.uplift,F),x.moisture=bn(H.moisture,D.moisture,F),x.heat=bn(H.heat,D.heat,F),Gw(i,O,C,A,x,d);const q=(u[w+1]-A)/c,E=(h[w]-A)/l,B=.55+Wa((Hw+Math.cos(Wp)*q*6+Math.sin(Wp)*E*6)/Math.sqrt(1+(q*q+E*E)*36)+.42)*.75;a[P]=d[0]*B,a[P+1]=d[1]*B,a[P+2]=d[2]*B}}return p>=t}}}const Fi=900,hr=Math.round(Fi*fn/an),Ww=2.5,Xw="#7dff9f",qw="#8fd0ff";function Yw({world:i}){const e=document.createElement("div");e.id="map-screen",e.hidden=!0,e.innerHTML=`
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
  `,document.body.appendChild(e);const t=e.querySelector("[data-canvas]"),n=e.querySelector("[data-building]"),s=e.querySelector("[data-scale]"),r=t.getContext("2d");s.textContent=Ne.map.scale.replace("{km}",Math.round(an*2/1e3)).replace("{kmZ}",Math.round(fn*2/1e3)).replace("{m}",Math.round(an*2/Fi));const o=document.createElement("canvas");o.width=Fi,o.height=hr;const a=o.getContext("2d"),c=a.createImageData(Fi,hr),l=Vw({terrain:i.terrain,width:Fi,height:hr,minX:-an,maxX:an,minZ:-fn,maxZ:fn});let u=!1,h=null,d=null,f=!0;function g(){const v=performance.now();for(;!l.done&&performance.now()-v<Ww;)l.drawRows(4);c.data.set(l.pixels),a.putImageData(c,0,0),f=!0,l.done||requestAnimationFrame(g)}requestAnimationFrame(g);const x={x:0,y:0};let p={x:0,y:0,w:0,h:0};function m(v,C){return x.x=p.x+(v+an)/(an*2)*p.w,x.y=p.y+(C+fn)/(fn*2)*p.h,x}function S(v,C,w,A,P){const O=m(v,C);r.save(),r.translate(O.x,O.y),r.rotate(-w+Math.PI),r.beginPath(),r.moveTo(0,-P),r.lineTo(P*.62,P*.75),r.lineTo(0,P*.35),r.lineTo(-P*.62,P*.75),r.closePath(),r.fillStyle=A,r.strokeStyle="rgba(4, 10, 18, 0.85)",r.lineWidth=1.5,r.fill(),r.stroke(),r.restore()}function y(){const v=t.getBoundingClientRect();if(v.width<8||v.height<8)return;const C=Math.min(window.devicePixelRatio||1,2),w=Math.round(v.width*C),A=Math.round(v.height*C);(t.width!==w||t.height!==A)&&(t.width=w,t.height=A),r.clearRect(0,0,w,A);const P=Math.min(w/Fi,A/hr);p={w:Fi*P,h:hr*P,x:(w-Fi*P)/2,y:(A-hr*P)/2},r.imageSmoothingEnabled=!0,r.drawImage(o,p.x,p.y,p.w,p.h);for(const O of i.info.settlements??[]){const _=m(O.x,O.z),M=O.kind==="capital";r.beginPath(),r.arc(_.x,_.y,(M?5:3.2)*C,0,Math.PI*2),r.fillStyle=M?"#ffe9b0":"#efe0c4",r.strokeStyle="rgba(20, 14, 8, 0.85)",r.lineWidth=1.6*C,r.fill(),r.stroke(),r.font=`${(M?12:10)*C}px ui-monospace, monospace`,r.textAlign="center",r.lineWidth=3*C,r.strokeStyle="rgba(10, 16, 24, 0.9)",r.strokeText(O.name,_.x,_.y-(M?9:7)*C),r.fillStyle="#fff6e2",r.fillText(O.name,_.x,_.y-(M?9:7)*C)}d&&S(d.x,d.z,d.heading,qw,9*C),h&&S(h.x,h.z,h.heading,Xw,8*C),n.hidden=l.done,l.done||(n.textContent=Ne.map.building.replace("{pct}",String(Math.round(l.progress*100)))),f=!1}return{get isOpen(){return u},get progress(){return l.progress},setMarkers(v,C=null){h=v,d=C,u&&(f=!0)},toggle(){return u?this.close():this.show()},show(){return u=!0,e.hidden=!1,f=!0,y(),!0},close(){return u=!1,e.hidden=!0,!1},update(){!u||!f||y()}}}function Kw(){const i=document.createElement("div");i.id="dialogue",i.hidden=!0,i.innerHTML=`
    <div class="dialogue__box">
      <div class="dialogue__who" data-who></div>
      <p class="dialogue__line" data-line></p>
      <div class="dialogue__hint">${Ne.dialogue.more}</div>
    </div>
  `,document.body.appendChild(i);const e=i.querySelector("[data-who]"),t=i.querySelector("[data-line]");let n=!1,s=null;return{get isOpen(){return n},get person(){return s},next(r){return s!==r&&(s=r,r.said=0),r.said>=r.lines.length?(this.close(),!1):(e.textContent=r.name,t.textContent=r.lines[r.said],r.said+=1,n=!0,i.hidden=!1,!0)},close(){s&&(s.said=0),s=null,n=!1,i.hidden=!0}}}const $w=12,Xp=.09,Fu=14;function jw(i){const e=new st;i.add(e);const t=[],n=[];for(let s=0;s<$w;s++){const r=new Lt;r.setAttribute("position",new It(new Float32Array(6),3));const o=new ha(r,new Pl({color:10475775,transparent:!0,opacity:1}));o.visible=!1,o.frustumCulled=!1,e.add(o),t.push(o)}return{group:e,fire(s,r,o=10475775){const a=t.pop()??n.shift();if(!a)return;const c=a.geometry.attributes.position;c.setXYZ(0,s.x,s.y,s.z),c.setXYZ(1,s.x+r.x*Fu,s.y+r.y*Fu,s.z+r.z*Fu),c.needsUpdate=!0,a.material.color.setHex(o),a.material.opacity=1,a.visible=!0,a.userData.life=Xp,n.push(a)},update(s){for(let r=n.length-1;r>=0;r--){const o=n[r];o.userData.life-=s,o.userData.life<=0?(o.visible=!1,n.splice(r,1),t.push(o)):o.material.opacity=o.userData.life/Xp}}}}const{resolveAsteroidCollisions:Zw}=eS,dr=new URLSearchParams(window.location.search),Jw=dr.get("skipIntro")==="1",Qw=dr.get("land")==="1",Bu=dr.get("character")==="1",eE=dr.get("peaceful")==="1",tE=dr.get("model"),nE=document.getElementById("app"),Xn=new kv({antialias:!0});nE.appendChild(Xn.domElement);const wn=sM(),ni=rM(),ut=pM(),ku=vf(),Xa=SM(),zu=wM(),Hu=UM(),Gu=kM(),fr=$M(),qa=JM();wn.add(ut.mesh),wn.add(ku),wn.add(Xa.mesh),wn.add(zu.mesh),wn.add(Hu.mesh),wn.add(Gu.sprite);for(const i of fr.rovers)wn.add(i.mesh);wn.add(qa.points),ut.mesh.visible=!0;const Dt=P1(wn,[ku,Xa.mesh,zu.mesh,Hu.mesh,Gu.sprite,qa.points,...fr.rovers.map(i=>i.mesh)],ni,()=>Xu.reset()),ft=uS(),Ut=hS(),qp=window.matchMedia("(max-height: 480px), (max-width: 480px)");qp.matches&&(Ut.hide(),Ut.setHintVisible(!1));const po=dS();Bu&&(po.hide(),Ut.hide(),Ut.setHintVisible(!1));const cs=pS(document.body),Ot=ES(),Vu=LS(),qn=IS(fr),pn=NS({upgrades:Vu,mission:qn,audio:Ot,onClose:()=>Ut.show()});qn.setOnRepaired(i=>{qa.fire(i.mesh.position),Ot.chirp()}),qn.setOnComplete(()=>{Ot.fanfare(),pn.show("complete")}),Ut.onFastTravel(()=>{Yp()}),Ut.onUpgradesClick(()=>{pn.show("upgrades")});function Wu(){tn.reset(),Dt.reset(ut),ut.mesh.position.set(0,0,0),ut.velocity.set(0,0,0),ut.mesh.quaternion.identity(),ut.arcadeDamping=!1,qn.reset(),fr.reset(),Vu.reset(),ls.reset(),oM(),pn.hideAll(),Xu.reset()}function Yp(){cs.active||Dt.active||(Ut.setFastTravelActive(!0),cs.begin(ut,{onDone:()=>Ut.setFastTravelActive(!1)}))}const Xu=KS(ni),mo={x:0,y:0,turnX:0,turnY:0};let qu=null;function Kp(i){qu=i;const{width:e,height:t,pixelRatio:n}=i;Xn.setPixelRatio(n*Yu.scale),Xn.setSize(e,t,!1),ni.aspect=e/t,ni.updateProjectionMatrix(),ki&&ki.onResize(e,t),go&&go.onResize(e,t)}const Yu=U1(()=>{qu&&Kp(qu)}),iE=900,Bi={CINEMATIC:"cinematic",TITLE:"title",FLY:"fly"},go=Bu?Bb({renderer:Xn,modelUrl:tE,who:dr.get("who")??"vexo"}):null,ki=Jw||Bu?null:kS({renderer:Xn});let pr=ki?Bi.CINEMATIC:Bi.TITLE;ki&&po.hide();const sE=zS();WS(Xn.domElement,Kp);const ls=Iw({scene:wn,world:Dt.world,origin:Ze}),$p=jw(wn),rE=Kw(),tn=Mw({scene:wn,camera:ni,ship:ut,surface:Dt,input:ft,renderer:Xn,monsters:ls,dialogue:rE,onDown:()=>{Ya.show(us.has),Ot.playGameOver()},onLanded:()=>us.saveAuto("landed"),onAboard:()=>us.saveAuto("aboard"),onShot:(i,e,t)=>{$p.fire(i,e,t?16765562:10475775),Ot.chirp(t?{fromHz:900,toHz:260,durationS:.16,peakGain:.16}:{fromHz:1400,toHz:700,durationS:.08,peakGain:.09}),t&&t.camp.members.every(n=>n.state==="dead")&&(Ot.fanfare(),us.saveAuto("camp cleared"))}}),us=kw({ship:ut,surface:Dt,onFoot:tn,monsters:ls,mission:qn,upgrades:Vu,rovers:fr}),Ya=zw({onContinue:()=>{Ot.stopGameOver();const i=us.latest;Wu(),us.restore(i),pr=Bi.FLY},onTitle:()=>{Ot.stopGameOver(),Wu(),pr=Bi.TITLE,po.show()}}),hs=Yw({world:Dt.world}),ds=Bw({renderer:Xn,input:ft,saves:us,tablet:Ut.element});ds.setItems([{name:Ne.inventory.starterGun,note:Ne.inventory.starterGunNote,held:!0}]),Dt.prewarm(Xn,ni),tn.prewarm(Xn,ni);function oE(){pr=Bi.TITLE,po.show(),qp.matches||Ut.show()}const aE=320;let jp=-1/0,Ku=!1;function cE(i){const e=ft.keyboard.consumeJustPressed(["KeyW"]),t=ft.keyboard.isDown("KeyW");if(e){const s=performance.now();Ku=s-jp<aE,jp=s}t||(Ku=!1);const n=ft.gamepad.isButtonDown(Pt.A)&&i.throttle>.1;return Ku||n}let Zp=performance.now();const _o=new Yt;function Ka(i){const e=(i-Zp)/1e3,t=Math.min(e,.1);if(Zp=i,Yu.sample(e),Yu.update(t),go){go.update(t),go.render(),requestAnimationFrame(Ka);return}if(sE.update(),pr===Bi.CINEMATIC){ft.consumeAnyJustPressed()&&(ki.skip(),ft.gamepad.suppressCurrentlyPressed()),ki.update(t),ki.render(),ki.active||oE(),requestAnimationFrame(Ka);return}if(pr===Bi.TITLE)ft.consumeAnyJustPressed()&&(pr=Bi.FLY,po.dismiss(),Ut.showFastTravel(),Ut.showUpgrades(),Ut.setMissionVisible(!0),Ut.showResetHint(),Ut.hide(),ft.enableGyro().catch(()=>{}),Ot.start(),Qw&&Dt.enter(ut));else{const s=ft.sample(),r=!cs.suppressInput&&!pn.isOpen();if(mo.x=r?s.lookX:0,mo.y=r?s.lookY:0,mo.turnX=r?s.lookTurnX:0,mo.turnY=r?s.lookTurnY:0,(ft.keyboard.consumeJustPressed(["KeyM"])||ft.gamepad.consumeJustPressed(Pt.Select))&&hs.toggle(),(ft.keyboard.consumeJustPressed(["KeyX"])||ft.gamepad.consumeJustPressed(Pt.X))&&(ut.arcadeDamping=!ut.arcadeDamping),(ft.keyboard.consumeJustPressed(["KeyF"])||ft.gamepad.consumeJustPressed(Pt.R1))&&Yp(),(ft.keyboard.consumeJustPressed(["KeyU"])||ft.gamepad.consumeJustPressed(Pt.Y))&&(pn.isOpen()?(pn.hideAll(),Ut.show()):pn.show("upgrades")),pn.isOpen()&&(ft.gamepad.consumeJustPressed(Pt.B)||ft.keyboard.consumeJustPressed(["Escape"]))&&(pn.hideAll(),Ut.show()),pn.isOpen()){const c=(ft.gamepad.isButtonDown(Pt.Down)?1:0)-(ft.gamepad.isButtonDown(Pt.Up)?1:0),u=-s.throttle||c;u&&pn.scrollBy(u*iE*t)}!Ya.isOpen&&(ft.keyboard.consumeJustPressed(["KeyT"])||ft.gamepad.consumeJustPressed(Pt.Start))&&ds.toggle(),(ds.isOpen||hs.isOpen)&&(ft.gamepad.consumeJustPressed(Pt.B)||ft.keyboard.consumeJustPressed(["Escape"]))&&(ds.close(),hs.close()),(ft.keyboard.consumeJustPressed(["KeyR"])||ft.gamepad.consumeJustPressed(Pt.L3))&&Wu();const o=pn.isOpen()||cs.suppressInput?null:s;Ya.isOpen?(Ya.update(ft,Pt),Ot.setThrottle(0),Ot.setSprinting(!1)):hs.isOpen?(Ot.setThrottle(0),Ot.setSprinting(!1),Dt.active&&Dt.update(ut,t)):ds.isOpen?(ds.update(t,s),Ot.setThrottle(0),Ot.setSprinting(!1),Dt.active&&Dt.update(ut,t)):tn.active?(tn.update(t,o),Dt.update(ut,t),ls.update(t,tn.quarry,(c,l,u)=>tn.takeHit(c,l,u)),Ot.setThrottle(0),Ot.setSprinting(tn.sprinting)):cs.suppressInput||pn.isOpen()?Ot.setThrottle(0):(ut.speedLimit=Dt.active?cE(s)?on.surfaceBoostSpeed:on.surfaceSpeed:0,gM(ut,s,t),Ot.setThrottle(s.throttle),Dt.update(ut,t),Zw({position:ut.mesh.position,velocity:ut.velocity},Xa.instances),ut.braking&&ut.velocity.set(0,0,0)),tn.active||(tn.update(t,o),Ot.setSprinting(!1));const a=ft.keyboard.isDown("KeyH")||ft.gamepad.isButtonDown(Pt.L1);qn.update({shipPos:ut.mesh.position,shipSpeed:ut.velocity.length(),holdActive:a&&!pn.isOpen()&&!cs.suppressInput&&!Dt.active,dt:t})}if(ls.setActive(Dt.active&&!eE),Dt.active&&ls.focus(ut.mesh.position.x-Ze.x,ut.mesh.position.z-Ze.z),Dt.active&&!tn.active&&ls.update(t,null,()=>{}),$p.update(t),Dt.active||hs.isOpen){const s={x:ut.mesh.position.x-Ze.x,z:ut.mesh.position.z-Ze.z,heading:_o.setFromQuaternion(ut.mesh.quaternion,"YXZ").y};hs.setMarkers(tn.active?{x:tn.position.x-Ze.x,z:tn.position.z-Ze.z,heading:tn.heading}:s,tn.active?s:null),hs.update()}cs.update(t),Ot.update(t),Xa.update(t),zu.update(t),Hu.update(t),Gu.update(ni),fr.update(t),qa.update(t),yf(ku,ni),tn.active||Xu.update(ut,mo,t),Xn.render(wn,ni),ds.render(),_o.setFromQuaternion(ut.mesh.quaternion,"YXZ"),Ut.update({velocity:ut.velocity.length(),inKph:Dt.active,eulerDeg:{x:Xi.radToDeg(_o.x),y:Xi.radToDeg(_o.y),z:Xi.radToDeg(_o.z)},dt:t,sources:ft.activeSources(),dampingOn:ut.arcadeDamping}),Ut.updateMission({remaining:qn.remaining(),total:qn.totalRovers(),credits:qn.credits});const n=qn.repairing??qn.inRange;Ut.updateHack({name:n?n.name:null,progress:n?n.repairProgress:0}),requestAnimationFrame(Ka)}requestAnimationFrame(Ka)})();
