(function(){"use strict";var rh=document.createElement("style");rh.textContent=`html,body{margin:0;padding:0;width:100%;height:100%;height:100dvh;background:#000;overflow:hidden;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#d6f0ff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}body,#app{position:fixed;inset:0}canvas{display:block;position:fixed;inset:0;width:100%;height:100%;touch-action:none}#cinematic{position:fixed;inset:0;z-index:12;pointer-events:none;color:#e6f3ff;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.cinematic__skip{position:absolute;top:calc(1rem + env(safe-area-inset-top));right:calc(1.25rem + env(safe-area-inset-right));font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#6aa3d1;opacity:.65}.cinematic__text{position:absolute;left:0;right:0;bottom:12%;text-align:center;padding:0 2rem;opacity:0;transition:opacity .9s ease;text-shadow:0 0 18px rgba(80,160,255,.4),0 2px 8px rgba(0,0,0,.85)}.cinematic__text--in{opacity:1}.cinematic__text p{font-size:clamp(1.05rem,2vw,1.6rem);letter-spacing:.04em;line-height:1.5;margin:.3em 0;color:#cbe2ff}.cinematic__flash{position:absolute;inset:0;background:radial-gradient(circle at center,#fff,#d3eaff,#7fb8ee 80%,#112540);opacity:0;pointer-events:none}#title-card{position:fixed;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#080e1e8c,#000000d9 70%);transition:opacity .5s ease;opacity:1}#title-card.title-card--hidden{opacity:0;pointer-events:none}.title-card__inner{text-align:center;padding:2rem 3rem}.title-card__title{font-size:clamp(1.6rem,4vw,3rem);letter-spacing:.05em;margin:0 0 1.5rem;color:#b8e0ff;text-shadow:0 0 24px rgba(80,160,255,.4)}.title-card__prompt{font-size:clamp(.9rem,1.5vw,1.1rem);color:#6aa3d1;margin:0;animation:pulse 1.4s ease-in-out infinite}@keyframes pulse{0%,to{opacity:.5}50%{opacity:1}}#tablet-hint{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;padding:4px 10px;background:#0a141eb3;color:#9ab3c9;font:11px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;border:1px solid rgba(120,160,200,.18);pointer-events:none}#tablet-hint[hidden]{display:none}#tablet{position:fixed;top:calc(1rem + env(safe-area-inset-top));right:calc(1rem + env(safe-area-inset-right));z-index:5;pointer-events:none}.tablet-frame{padding:6px;background:linear-gradient(135deg,#1a232e,#0a0f15);border-radius:14px;box-shadow:0 4px 24px #0009,inset 0 0 0 1px #ffffff0d}.tablet-bezel{padding:6px;background:#050709;border-radius:10px}.tablet-screen{width:220px;padding:10px 12px;background:linear-gradient(180deg,#061320,#03070d);border-radius:6px;font-size:12px;line-height:1.5;color:#9fd1ff;box-shadow:inset 0 0 18px #3278c81f}.tablet-titlebar{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid rgba(80,140,200,.18);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1}.tablet-app{font-weight:600}.tablet-source{padding:1px 6px;border-radius:3px;background:#50a0ff1f;color:#b8e0ff}.tablet-row{display:flex;justify-content:space-between}.tablet-row--small{font-size:10px;opacity:.7;margin-top:4px}.tablet-row--hint{margin-top:8px;padding-top:6px;border-top:1px solid rgba(80,140,200,.12);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#6aa3d1;opacity:.7;text-align:right}.tablet-label{color:#6aa3d1}.tablet-value{color:#d6f0ff;font-variant-numeric:tabular-nums}.tablet-app-btn{display:flex;margin-top:10px;width:100%;padding:8px 10px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:6px;color:#d6f0ff;font-family:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .4s ease}.tablet-app-btn--visible{opacity:1;pointer-events:auto}.tablet-app-btn:hover:not(:disabled){background:linear-gradient(135deg,#235080,#103050)}.tablet-app-btn:active:not(:disabled){transform:translateY(1px)}.tablet-app-btn:disabled{cursor:progress;opacity:.65}.tablet-app-btn--active{box-shadow:0 0 16px #78c8ff99}.tablet-app-btn__icon{font-size:14px;opacity:.85}.tablet-app-btn__label{flex:1;text-align:left;font-weight:600}.tablet-app-btn__key{padding:1px 6px;border-radius:3px;background:#78b4f02e;font-size:10px}.tablet-mission{margin-top:8px;padding-top:8px;border-top:1px solid rgba(80,140,200,.18)}.tablet-hack{margin-top:8px;padding:8px;background:#50a0ff14;border:1px solid rgba(120,180,240,.35);border-radius:4px}.tablet-hack__name{font-size:11px;font-weight:700;letter-spacing:.1em;color:#d6f0ff}.tablet-hack__hint{font-size:10px;color:#9adfff;opacity:.85;margin-bottom:4px}.tablet-hack__bar{height:6px;background:#ffffff14;border-radius:3px;overflow:hidden}.tablet-hack__fill{height:100%;width:0%;background:linear-gradient(90deg,#4aa3ff,#9adfff);transition:none}.screen-overlay{position:fixed;inset:0;z-index:8;display:flex;align-items:center;justify-content:center;padding:2rem;background:radial-gradient(ellipse at center,#080e1ec7,#000000eb 80%);pointer-events:auto}.screen-overlay[hidden]{display:none}.screen-card{max-width:460px;max-height:84vh;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;padding:1.6rem 1.8rem;background:linear-gradient(160deg,#0e1e30,#050a14);border:1px solid rgba(120,180,240,.3);border-radius:10px;box-shadow:0 8px 36px #0000008c,inset 0 0 0 1px #ffffff08;color:#d6f0ff;text-align:center}.screen-card--wide{max-width:520px;text-align:left}.screen-card{scrollbar-width:thin;scrollbar-color:rgba(120,180,240,.4) transparent}.screen-card::-webkit-scrollbar{width:6px}.screen-card::-webkit-scrollbar-track{background:transparent}.screen-card::-webkit-scrollbar-thumb{background:#78b4f066;border-radius:3px}.screen-card__title{margin:0 0 .5rem;font-size:clamp(1.2rem,2.2vw,1.8rem);letter-spacing:.08em;color:#b8e0ff}.screen-card__body{color:#9fc6e7;font-size:.95rem;line-height:1.5}.screen-card__row{margin:.8rem 0}.screen-card__hint{margin:0 0 .8rem;padding-bottom:.6rem;border-bottom:1px solid rgba(80,140,200,.15);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6aa3d1;opacity:.75;text-align:center}.screen-card__credits{font-size:1.1rem;font-weight:700;color:#ffdf80}.screen-card__credits-label{font-size:.7rem;letter-spacing:.15em;color:#6aa3d1;margin-right:6px;font-weight:400}.screen-card__actions{display:flex;justify-content:center;gap:10px;margin-top:1rem}.screen-btn{padding:8px 14px;background:linear-gradient(135deg,#1a4060,#0c2238);border:1px solid rgba(120,180,240,.35);border-radius:5px;color:#d6f0ff;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.screen-btn--primary{background:linear-gradient(135deg,#2660a0,#154070);border-color:#a0dcff99}.screen-btn--small{padding:5px 10px;font-size:11px}.screen-btn:hover:not(:disabled){filter:brightness(1.15)}.screen-btn:disabled{opacity:.45;cursor:not-allowed}.upgrade-list{list-style:none;padding:0;margin:0}.upgrade-item{padding:10px 12px;margin-bottom:8px;background:#50a0ff0f;border:1px solid rgba(120,180,240,.18);border-radius:6px}.upgrade-item--bought{opacity:.65;border-color:#64dcb466}.upgrade-item__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.upgrade-item__name{font-weight:700;color:#d6f0ff;letter-spacing:.05em}.upgrade-item__cost{color:#ffdf80;font-weight:700;font-variant-numeric:tabular-nums}.upgrade-item__desc{margin:4px 0 8px;font-size:12px;color:#9fc6e7;line-height:1.4}#warp-flash{position:fixed;inset:0;background:radial-gradient(circle at center,#fff,#c4dfff,#6aa3d1 80%,#0a1a30);pointer-events:none;opacity:0;z-index:6;transition:none}@media(max-height:480px){.title-card__inner{padding:1rem 1.5rem;max-width:62vw}.title-card__title{font-size:clamp(1rem,2.6vw,1.6rem);margin-bottom:.9rem}.title-card__prompt{font-size:.85rem}.cinematic__text{bottom:8%}.cinematic__text p{font-size:1rem;line-height:1.35}.tablet-screen{width:180px;font-size:11px}.screen-overlay{padding:1rem}.screen-card{padding:1rem 1.2rem;max-height:88vh}.screen-card__title{font-size:1.1rem}.upgrade-item{padding:8px 10px;margin-bottom:6px}}@media(max-width:480px){.tablet-screen{width:min(58vw,220px)}.title-card__inner{padding:1.5rem 1rem}}#landing-banner{position:fixed;left:50%;bottom:calc(2.2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;padding:.7rem 1.5rem;text-align:center;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none;transition:opacity 1.2s ease}#landing-banner[hidden]{display:none}.landing-banner--fading{opacity:0}.landing-banner__town{font-size:10px;letter-spacing:.22em;color:#6aa3d1}.landing-banner__street{margin-top:2px;font-size:1.05rem;letter-spacing:.04em;color:#eaf4ff}.landing-banner__hint{margin-top:6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8fb8d8;opacity:.8}@media(max-height:480px){#landing-banner{bottom:calc(1rem + env(safe-area-inset-bottom));padding:.5rem 1.1rem}.landing-banner__street{font-size:.9rem}}.title-card__build{margin:1.1rem 0 0;font-size:9px;letter-spacing:.16em;color:#4d7ba1;opacity:.65}#map-screen{position:fixed;inset:0;z-index:11;display:flex;align-items:center;justify-content:center;background:#040910e6}#map-screen[hidden]{display:none}.map-panel{display:flex;flex-direction:column;gap:.5rem;width:min(1100px,96vw);height:min(760px,92vh);padding:.9rem 1rem .7rem;background:#0a1622f0;border:1px solid rgba(120,180,240,.28);border-radius:10px}.map-head{display:flex;align-items:baseline;justify-content:space-between}.map-title{font-size:.95rem;letter-spacing:.24em;color:#cfe4f6}.map-scale{font-size:10px;letter-spacing:.12em;color:#6f9dc4}.map-zoom{position:absolute;top:10px;right:10px;bottom:10px;width:26px;display:flex;flex-direction:column;align-items:center;gap:6px;pointer-events:none}.map-zoom__btn{pointer-events:auto;flex:0 0 auto;width:26px;height:26px;padding:0;font:15px/1 ui-monospace,monospace;color:#cfe6ff;background:#08101ab8;border:1px solid rgba(120,170,220,.45);border-radius:5px;cursor:pointer}.map-zoom__btn:hover{background:#14283ee6}.map-zoom__bar{flex:1 1 auto;width:6px;min-height:40px;background:#08101ab8;border:1px solid rgba(120,170,220,.35);border-radius:3px;display:flex;align-items:flex-end;overflow:hidden}.map-zoom__fill{width:100%;height:0;background:linear-gradient(#7dff9f,#3f9dd8);transition:height 90ms linear}.map-frame{position:relative;flex:1 1 auto;min-height:0;border-radius:6px;overflow:hidden;background:#0a1622}.map-canvas{position:relative;inset:auto;width:100%;height:100%;display:block}.map-building{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;font-size:11px;letter-spacing:.14em;color:#9fd8ff;background:#060e18cc;padding:.5rem .9rem;border-radius:5px}#shop{background:#040910db}.shop__panel{width:min(620px,94vw);background:#0a1622f5;border:1px solid rgba(120,180,240,.3);border-radius:10px;padding:1rem 1.1rem .8rem}.shop__head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:.7rem}.shop__name{margin:0;font-size:.95rem;letter-spacing:.22em;color:#cfe4f6}.shop__purse{font-size:.85rem;color:#ffe9b0;letter-spacing:.1em}.shop__list{list-style:none;margin:0;padding:0}.shop__item{display:grid;grid-template-columns:1fr auto;gap:.1rem 1rem;padding:.5rem .7rem;border:1px solid transparent;border-radius:6px;cursor:pointer}.shop__item-name{font-size:.9rem;color:#eaf3fb}.shop__item-price{grid-column:2;grid-row:1 / span 2;align-self:center;text-align:right;font-size:.85rem;color:#ffe9b0;letter-spacing:.08em}.shop__item-note{font-size:11px;color:#7fb0d8}.shop__item--on{border-color:#5effa6;background:#5effa614}.shop__item--sold .shop__item-price{color:#6f9dc4}.shop__item--sold,.shop__item--dear{opacity:.55}.shop__said{margin:.6rem 0 .3rem;min-height:1.2em;font-size:.85rem;color:#9fd8ff}#dialogue{position:fixed;left:50%;bottom:5%;transform:translate(-50%);z-index:9;pointer-events:none;width:min(680px,92vw)}#dialogue[hidden]{display:none}.dialogue__box{background:#08121ce6;border:1px solid rgba(120,180,240,.35);border-left:3px solid #7dff9f;border-radius:8px;padding:.7rem 1rem .6rem}.dialogue__who{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#7dff9f}.dialogue__line{margin:.35rem 0 .45rem;font-size:.95rem;line-height:1.45;color:#eaf3fb}.dialogue__hint{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6f9dc4}#game-over{position:fixed;inset:0;z-index:12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.9rem;background:#020408e0;animation:game-over-in 1.1s ease-out}#game-over[hidden]{display:none}@keyframes game-over-in{0%{opacity:0}40%{opacity:0}to{opacity:1}}.game-over__sign{font-size:clamp(2.2rem,9vw,4.2rem);letter-spacing:.3em;color:#ff4d5e;text-shadow:0 0 24px rgba(255,77,94,.55),0 3px 0 rgba(0,0,0,.6)}.game-over__ask{margin:0;color:#cfe4f6;font-size:.95rem;letter-spacing:.08em}.game-over__buttons{display:flex;gap:1rem;margin-top:.4rem}.game-over__btn{font:inherit;font-size:.85rem;letter-spacing:.14em;padding:.6rem 1.3rem;color:#d8ecff;background:#0a1828e6;border:1px solid rgba(120,180,240,.35);border-radius:6px;cursor:pointer}.game-over__btn--on{border-color:#5effa6;color:#eaffef;box-shadow:0 0 18px #5effa640}.game-over__btn:disabled{opacity:.35;cursor:default}.game-over__hint{margin:.3rem 0 0;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4}#inventory{background:none}.inventory__panel{display:flex;gap:1.4rem;width:min(920px,94vw);height:min(560px,82vh)}.inventory__list{flex:1 1 56%;display:flex;flex-direction:column;min-width:0;padding:1.4rem;background:linear-gradient(160deg,#0e1e30f5,#050a14f7);border:1px solid rgba(120,180,240,.28);border-radius:10px;box-shadow:0 18px 60px #0009}.inventory__figure{flex:1 1 44%;position:relative;border:1px solid rgba(120,180,240,.18);border-radius:8px;touch-action:none;user-select:none;cursor:grab}.inventory__figure:active{cursor:grabbing}.inventory__figure-hint{position:absolute;bottom:.5rem;left:0;right:0;margin:0;text-align:center;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6f9dc4;pointer-events:none}.inventory__tabs{display:flex;gap:.6rem;margin:.2rem 0 .9rem}.inventory__tab{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#6f9dc4;padding:.25rem .7rem;border:1px solid rgba(120,180,240,.22);border-radius:999px}.inventory__tab--on{color:#d8ecff;border-color:#5effa680;background:#5effa614}.inventory__items{list-style:none;margin:0;padding:0;overflow-y:auto;flex:1 1 auto;overscroll-behavior:contain;touch-action:pan-y}.inventory__item{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;padding:.6rem .75rem;border:1px solid rgba(120,180,240,.16);border-radius:6px;margin-bottom:.5rem;background:#0a162699}.inventory__item--held{border-color:#5effa673;box-shadow:inset 0 0 18px #5effa614}.inventory__item--empty{color:#6f9dc4;justify-content:center}.inventory__tablet{flex:1 1 auto;min-height:0;overflow-y:auto}.inventory__tablet[hidden]{display:none}.inventory__tablet #tablet{position:static;inset:auto;z-index:auto;pointer-events:auto}.inventory__tablet .tablet-frame{width:100%}.inventory__tablet .tablet-bezel,.inventory__tablet .tablet-screen{width:100%;box-sizing:border-box}.inventory__system{flex:1 1 auto;display:flex;flex-direction:column;align-items:flex-start;gap:.7rem}.inventory__system[hidden]{display:none}.inventory__save{font:inherit;font-size:.85rem;letter-spacing:.16em;padding:.7rem 1.4rem;color:#eaffef;background:#0c281cd9;border:1px solid rgba(94,255,166,.45);border-radius:6px;cursor:pointer}.inventory__save:hover{background:#123c28e6}.inventory__saved{margin:0;font-size:11px;letter-spacing:.1em;color:#7fb0d8}.inventory__item-name{color:#eaf4ff;font-size:.95rem;letter-spacing:.04em}.inventory__item-note{color:#7fb0d8;font-size:11px;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}@media(max-width:700px),(max-height:460px){.inventory__panel{flex-direction:row;height:88vh;padding:.8rem;gap:.8rem}.inventory__item{padding:.4rem .55rem}.inventory__item-name{font-size:.85rem}}#hearts{position:fixed;top:calc(.8rem + env(safe-area-inset-top));left:50%;transform:translate(-50%);z-index:6;display:flex;gap:6px;pointer-events:none;font-size:22px;line-height:1}#hearts[hidden]{display:none}.heart{color:#ff4d5e;text-shadow:0 0 6px rgba(255,77,94,.55),0 1px 2px rgba(0,0,0,.8)}.heart--spent{color:#ffffff38;text-shadow:0 1px 2px rgba(0,0,0,.8)}@keyframes hearts-hit{0%{transform:translate(-50%) scale(1.35);filter:brightness(2.2)}to{transform:translate(-50%) scale(1);filter:brightness(1)}}.hearts--hit{animation:hearts-hit .45s ease-out}#stamina-wheel{position:fixed;left:0;top:0;z-index:6;width:56px;height:56px;margin:-28px 0 0 -28px;pointer-events:none;transition:opacity .2s linear}#stamina-wheel[hidden]{display:none}.stamina-wheel__track{fill:none;stroke:#06140e8c;stroke-width:5}.stamina-wheel__fill{fill:none;stroke:#5effa6;stroke-width:4;stroke-linecap:round;transform:rotate(-90deg);transform-origin:28px 28px;filter:drop-shadow(0 0 3px rgba(94,255,166,.7))}.stamina-wheel--winded .stamina-wheel__fill{stroke:#ff8a5c;filter:drop-shadow(0 0 4px rgba(255,138,92,.8))}#foot-prompt{position:fixed;left:50%;bottom:calc(7rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:6;padding:.45rem 1.1rem;font-size:11px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;color:#dceaf7;background:#06101ab8;border:1px solid rgba(120,180,240,.28);border-radius:6px;pointer-events:none}#foot-prompt[hidden]{display:none}@media(max-height:480px){#foot-prompt{bottom:calc(4.4rem + env(safe-area-inset-bottom));font-size:10px;padding:.35rem .8rem}}#character-label{position:fixed;left:50%;bottom:calc(2rem + env(safe-area-inset-bottom));transform:translate(-50%);z-index:5;text-align:center;pointer-events:none}.character-label__name{font-size:1.6rem;letter-spacing:.4em;text-indent:.4em;color:#eaf4ff;text-shadow:0 0 18px rgba(83,255,157,.45)}.character-label__hint{margin-top:6px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6aa3d1;opacity:.75}
/*$vite$:1*/`,document.head.appendChild(rh);const Qa="169",p0=0,oh=1,m0=2,ah=1,ch=2,oi=3,ai=0,en=1,tn=2,wi=0,xs=1,ci=2,lh=3,uh=4,g0=5,Vi=100,_0=101,x0=102,v0=103,y0=104,M0=200,S0=201,b0=202,w0=203,ec=204,tc=205,E0=206,A0=207,T0=208,R0=209,C0=210,P0=211,I0=212,L0=213,N0=214,nc=0,ic=1,sc=2,vs=3,rc=4,oc=5,ac=6,cc=7,hh=0,D0=1,U0=2,Ei=0,O0=1,F0=2,B0=3,dh=4,k0=5,z0=6,H0=7,fh="attached",G0="detached",ph=300,ys=301,Ms=302,lc=303,uc=304,bo=306,Ai=1e3,Ti=1001,wo=1002,hn=1003,mh=1004,_r=1005,xn=1006,Eo=1007,li=1008,ui=1009,gh=1010,_h=1011,xr=1012,hc=1013,Wi=1014,Fn=1015,vr=1016,dc=1017,fc=1018,Ss=1020,xh=35902,vh=1021,yh=1022,Tn=1023,Mh=1024,Sh=1025,bs=1026,ws=1027,pc=1028,mc=1029,bh=1030,gc=1031,_c=1033,Ao=33776,To=33777,Ro=33778,Co=33779,xc=35840,vc=35841,yc=35842,Mc=35843,Sc=36196,bc=37492,wc=37496,Ec=37808,Ac=37809,Tc=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Lc=37815,Nc=37816,Dc=37817,Uc=37818,Oc=37819,Fc=37820,Bc=37821,Po=36492,kc=36494,zc=36495,wh=36283,Hc=36284,Gc=36285,Vc=36286,V0=2200,W0=2201,X0=2202,yr=2300,Mr=2301,Wc=2302,Es=2400,As=2401,Io=2402,Xc=2500,q0=2501,Y0=0,Eh=1,qc=2,K0=3200,$0=3201,Ah=0,j0=1,Ri="",Pt="srgb",nn="srgb-linear",Yc="display-p3",Lo="display-p3-linear",No="linear",Et="srgb",Do="rec709",Uo="p3",Ts=7680,Th=519,J0=512,Z0=513,Q0=514,Rh=515,em=516,tm=517,nm=518,im=519,Kc=35044,Ch=35048,Ph="300 es",hi=2e3,Oo=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ih=1234567;const Sr=Math.PI/180,Rs=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function sm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rm(i,e,t){return i!==e?(t-i)/(e-i):0}function br(i,e,t){return(1-t)*i+t*e}function om(i,e,t,n){return br(i,e,1-Math.exp(-t*n))}function am(i,e=1){return e-Math.abs($c(i,e*2)-e)}function cm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function um(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hm(i,e){return i+Math.random()*(e-i)}function dm(i){return i*(.5-Math.random())}function fm(i){i!==void 0&&(Ih=i);let e=Ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pm(i){return i*Sr}function mm(i){return i*Rs}function gm(i){return(i&i-1)===0&&i!==0}function _m(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qi={DEG2RAD:Sr,RAD2DEG:Rs,generateUUID:Rn,clamp:Wt,euclideanModulo:$c,mapLinear:sm,inverseLerp:rm,lerp:br,damp:om,pingpong:am,smoothstep:cm,smootherstep:lm,randInt:um,randFloat:hm,randFloatSpread:dm,seededRandom:fm,degToRad:pm,radToDeg:mm,isPowerOfTwo:gm,ceilPowerOfTwo:_m,floorPowerOfTwo:xm,setQuaternionFromProperEuler:vm,normalize:yt,denormalize:Bn};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,s,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],x=s[4],y=s[7],T=s[2],E=s[5],A=s[8];return r[0]=o*_+a*M+c*T,r[3]=o*p+a*x+c*E,r[6]=o*m+a*y+c*A,r[1]=l*_+u*M+h*T,r[4]=l*p+u*x+h*E,r[7]=l*m+u*y+h*A,r[2]=d*_+f*M+g*T,r[5]=d*p+f*x+g*E,r[8]=d*m+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jc.makeScale(e,t)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new tt;function Lh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ym(){const i=wr("canvas");return i.style.display="block",i}const Nh={};function Fo(i){i in Nh||(Nh[i]=!0,console.warn(i))}function Mm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Sm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[nn]:{transfer:No,primaries:Do,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Pt]:{transfer:Et,primaries:Do,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Lo]:{transfer:No,primaries:Uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Uh),fromReference:i=>i.applyMatrix3(Dh)},[Yc]:{transfer:Et,primaries:Uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uh),fromReference:i=>i.applyMatrix3(Dh).convertLinearToSRGB()}},wm=new Set([nn,Lo]),pt={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!wm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Er[e].toReference,s=Er[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Er[i].primaries},getTransfer:function(i){return i===Ri?No:Er[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Er[e].luminanceCoefficients)}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ps;class Em{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=wr("canvas")),Ps.width=e.width,Ps.height=e.height;const n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cs(t[n]/255)*255):t[n]=Cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Am=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zc(s[o].image)):r.push(Zc(s[o]))}else r=Zc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Em.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tm=0;class Xt extends Xi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=Ti,s=Ti,r=xn,o=li,a=Tn,c=ui,l=Xt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Rn(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=ph,Xt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(f+1)/2,T=(m+1)/2,E=(u+d)/4,A=(h+_)/4,k=(g+p)/4;return x>y&&x>T?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=A/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=k/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=k/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rm extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Rm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fh extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cm extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let p=1-a;const m=c*d+l*f+u*g+h*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const T=Math.sqrt(x),E=Math.atan2(T,m*M);p=Math.sin(p*E)/T,a=Math.sin(a*E)/T}const y=a*M;if(c=c*p+d*y,l=l*p+f*y,u=u*p+g*y,h=h*p+_*y,p===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new B,Bh=new Kt;class jn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),ko.subVectors(this.max,Ar),Is.subVectors(e.a,Ar),Ls.subVectors(e.b,Ar),Ns.subVectors(e.c,Ar),Ci.subVectors(Ls,Is),Pi.subVectors(Ns,Ls),Ki.subVectors(Is,Ns);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Ki.z,Ki.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Ki.z,0,-Ki.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Ki.y,Ki.x,0];return!el(t,Is,Ls,Ns,ko)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Is,Ls,Ns,ko))?!1:(zo.crossVectors(Ci,Pi),t=[zo.x,zo.y,zo.z],el(t,Is,Ls,Ns,ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new B,new B,new B,new B,new B,new B,new B,new B],kn=new B,Bo=new jn,Is=new B,Ls=new B,Ns=new B,Ci=new B,Pi=new B,Ki=new B,Ar=new B,ko=new B,zo=new B,$i=new B;function el(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$i.fromArray(i,r);const a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),u=n.dot($i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Pm=new jn,Tr=new B,tl=new B;class Jn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(tl)),this.expandByPoint(Tr.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new B,nl=new B,Ho=new B,Ii=new B,il=new B,Go=new B,sl=new B;class Vo{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nl.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(nl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ho),a=Ii.dot(this.direction),c=-Ii.dot(Ho),l=Ii.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(nl).addScaledVector(Ho,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){il.subVectors(t,e),Go.subVectors(n,e),sl.crossVectors(il,Go);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const c=a*this.direction.dot(Go.crossVectors(Ii,Go));if(c<0)return null;const l=a*this.direction.dot(il.cross(Ii));if(l<0||c+l>o)return null;const u=-a*Ii.dot(sl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Im,e,Lm)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Li.crossVectors(n,vn),Li.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Li.crossVectors(n,vn)),Li.normalize(),Wo.crossVectors(vn,Li),s[0]=Li.x,s[4]=Wo.x,s[8]=vn.x,s[1]=Li.y,s[5]=Wo.y,s[9]=vn.y,s[2]=Li.z,s[6]=Wo.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],y=n[11],T=n[15],E=s[0],A=s[4],k=s[8],$=s[12],v=s[1],b=s[5],C=s[9],D=s[13],z=s[2],W=s[6],S=s[10],H=s[14],N=s[3],X=s[7],U=s[11],K=s[15];return r[0]=o*E+a*v+c*z+l*N,r[4]=o*A+a*b+c*W+l*X,r[8]=o*k+a*C+c*S+l*U,r[12]=o*$+a*D+c*H+l*K,r[1]=u*E+h*v+d*z+f*N,r[5]=u*A+h*b+d*W+f*X,r[9]=u*k+h*C+d*S+f*U,r[13]=u*$+h*D+d*H+f*K,r[2]=g*E+_*v+p*z+m*N,r[6]=g*A+_*b+p*W+m*X,r[10]=g*k+_*C+p*S+m*U,r[14]=g*$+_*D+p*H+m*K,r[3]=M*E+x*v+y*z+T*N,r[7]=M*A+x*b+y*W+T*X,r[11]=M*k+x*C+y*S+T*U,r[15]=M*$+x*D+y*H+T*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+p*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=h*p*l-_*d*l+_*c*f-a*p*f-h*c*m+a*d*m,x=g*d*l-u*p*l-g*c*f+o*p*f+u*c*m-o*d*m,y=u*_*l-g*h*l+g*a*f-o*_*f-u*a*m+o*h*m,T=g*h*c-u*_*c-g*a*d+o*_*d+u*a*p-o*h*p,E=t*M+n*x+s*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=M*A,e[1]=(_*d*r-h*p*r-_*s*f+n*p*f+h*s*m-n*d*m)*A,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*A,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*A,e[4]=x*A,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*A,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*A,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=y*A,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*m-t*h*m)*A,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*m+t*a*m)*A,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*A,e[12]=T*A,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*A,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*p-t*a*p)*A,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,p=o*h,m=a*h,M=c*l,x=c*u,y=c*h,T=n.x,E=n.y,A=n.z;return s[0]=(1-(_+m))*T,s[1]=(f+y)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+x)*A,s[9]=(p-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);const l=1/r,u=1/o,h=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,t.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===hi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Oo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u;let g,_;if(a===hi)g=(o+r)*h,_=-2*h;else if(a===Oo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ds=new B,zn=new Je,Im=new B(0,0,0),Lm=new B(1,1,1),Li=new B,Wo=new B,vn=new B,kh=new Je,zh=new Kt;class $t{constructor(e=0,t=0,n=0,s=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const Gh=new B,Us=new Kt,pi=new Je,Xo=new B,Rr=new B,Dm=new B,Um=new Kt,Vh=new B(1,0,0),Wh=new B(0,1,0),Xh=new B(0,0,1),qh={type:"added"},Om={type:"removed"},Os={type:"childadded",child:null},rl={type:"childremoved",child:null};class At extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new B,t=new $t,n=new Kt,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new tt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Vh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xo.copy(e):Xo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Rr,Xo,this.up):pi.lookAt(Xo,Rr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(pi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new B(0,1,0),At.DEFAULT_MATRIX_AUTO_UPDATE=!0,At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new B,mi=new B,ol=new B,gi=new B,Fs=new B,Bs=new B,Yh=new B,al=new B,cl=new B,ll=new B,ul=new mt,hl=new mt,dl=new mt;class Cn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),mi.subVectors(n,t),ol.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(mi),c=Hn.dot(ol),l=mi.dot(mi),u=mi.dot(ol),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ul.setScalar(0),hl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),mi.subVectors(e,t),Hn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,n),Bs.subVectors(r,n),al.subVectors(e,n);const c=Fs.dot(al),l=Bs.dot(al);if(c<=0&&l<=0)return t.copy(n);cl.subVectors(e,s);const u=Fs.dot(cl),h=Bs.dot(cl);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Fs,o);ll.subVectors(e,r);const f=Fs.dot(ll),g=Bs.dot(ll);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Bs,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Yh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Yh,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},qo={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=$c(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fl(o,r,e+1/3),this.g=fl(o,r,e),this.b=fl(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return pt.fromWorkingColorSpace(an.copy(this),e),Math.round(Wt(an.r*255,0,255))*65536+Math.round(Wt(an.g*255,0,255))*256+Math.round(Wt(an.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(an.copy(this),t);const n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Pt){pt.fromWorkingColorSpace(an.copy(this),e);const t=an.r,n=an.g,s=an.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(qo);const n=br(Ni.h,qo.h,t),s=br(Ni.s,qo.s,t),r=br(Ni.l,qo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Xe;Xe.NAMES=Kh;let Fm=0;class Gn extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=xs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ec&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cn extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new B,Yo=new Se;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class $h extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jh extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bm=0;const Pn=new Je,pl=new At,ks=new B,yn=new jn,Cr=new jn,jt=new B;class Ut extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lh(e)?jh:$h)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(yn.min,Cr.min),yn.expandByPoint(jt),jt.addVectors(yn.max,Cr.max),yn.expandByPoint(jt)):(yn.expandByPoint(Cr.min),yn.expandByPoint(Cr.max))}yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(ks.fromBufferAttribute(e,l),jt.add(ks)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new B,c[k]=new B;const l=new B,u=new B,h=new B,d=new Se,f=new Se,g=new Se,_=new B,p=new B;function m(k,$,v){l.fromBufferAttribute(n,k),u.fromBufferAttribute(n,$),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,k),f.fromBufferAttribute(r,$),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(b),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(b),a[k].add(_),a[$].add(_),a[v].add(_),c[k].add(p),c[$].add(p),c[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let k=0,$=M.length;k<$;++k){const v=M[k],b=v.start,C=v.count;for(let D=b,z=b+C;D<z;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new B,y=new B,T=new B,E=new B;function A(k){T.fromBufferAttribute(s,k),E.copy(T);const $=a[k];x.copy($),x.sub(T.multiplyScalar(T.dot($))).normalize(),y.crossVectors(E,$);const b=y.dot(c[k])<0?-1:1;o.setXYZW(k,x.x,x.y,x.z,b)}for(let k=0,$=M.length;k<$;++k){const v=M[k],b=v.start,C=v.count;for(let D=b,z=b+C;D<z;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new Dt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new Je,ji=new Vo,Ko=new Jn,Zh=new B,$o=new B,jo=new B,Jo=new B,ml=new B,Zo=new B,Qh=new B,Qo=new B;class pe extends At{constructor(e=new Ut,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(ml.fromBufferAttribute(h,e),o?Zo.addScaledVector(ml,u):Zo.addScaledVector(ml.sub(t),u))}t.add(Zo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Ko.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Ko,Zh)===null||ji.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,T=x;y<T;y+=3){const E=a.getX(y),A=a.getX(y+1),k=a.getX(y+2);s=ea(this,m,e,n,l,u,h,E,A,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);s=ea(this,o,e,n,l,u,h,M,x,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,T=x;y<T;y+=3){const E=y,A=y+1,k=y+2;s=ea(this,m,e,n,l,u,h,E,A,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=p,x=p+1,y=p+2;s=ea(this,o,e,n,l,u,h,M,x,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function km(i,e,t,n,s,r,o,a){let c;if(e.side===en?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ai,a),c===null)return null;Qo.copy(a),Qo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Qo);return l<t.near||l>t.far?null:{distance:l,point:Qo.clone(),object:i}}function ea(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,$o),i.getVertexPosition(c,jo),i.getVertexPosition(l,Jo);const u=km(i,e,t,n,$o,jo,Jo,Qh);if(u){const h=new B;Cn.getBarycoord(Qh,$o,jo,Jo,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,c,l,h,new Se)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,c,l,h,new Se)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,c,l,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new B,materialIndex:0};Cn.getNormal($o,jo,Jo,d.normal),u.face=d,u.barycoord=h}return u}class gt extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function g(_,p,m,M,x,y,T,E,A,k,$){const v=y/A,b=T/k,C=y/2,D=T/2,z=E/2,W=A+1,S=k+1;let H=0,N=0;const X=new B;for(let U=0;U<S;U++){const K=U*b-D;for(let I=0;I<W;I++){const G=I*v-C;X[_]=G*M,X[p]=K*x,X[m]=z,l.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[m]=E>0?1:-1,u.push(X.x,X.y,X.z),h.push(I/A),h.push(1-U/k),H+=1}}for(let U=0;U<k;U++)for(let K=0;K<A;K++){const I=d+K+W*U,G=d+K+W*(U+1),L=d+(K+1)+W*(U+1),Y=d+(K+1)+W*U;c.push(I,G,Y),c.push(G,L,Y),N+=6}a.addGroup(f,N,$),f+=N,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=zs(i[t]);for(const s in n)e[s]=n[s]}return e}function zm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ed(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Hm={clone:zs,merge:dn};var Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class td extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new B,nd=new Se,id=new Se;class Gt extends td{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,nd,id),t.subVectors(id,nd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Gs=1;class Wm extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gt(Hs,Gs,e,t);s.layers=this.layers,this.add(s);const r=new Gt(Hs,Gs,e,t);r.layers=this.layers,this.add(r);const o=new Gt(Hs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new Gt(Hs,Gs,e,t);a.layers=this.layers,this.add(a);const c=new Gt(Hs,Gs,e,t);c.layers=this.layers,this.add(c);const l=new Gt(Hs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sd extends Xt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xm extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:wi});r.uniforms.tEquirect.value=t;const o=new pe(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=xn),new Wm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const gl=new B,qm=new B,Ym=new tt;class Ji{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=gl.subVectors(n,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ym.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Jn,ta=new B;class _l{constructor(e=new Ji,t=new Ji,n=new Ji,s=new Ji,r=new Ji,o=new Ji){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],M=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,p-f,y-m).normalize(),n[1].setComponents(c+r,d+l,p+f,y+m).normalize(),n[2].setComponents(c+o,d+u,p+g,y+M).normalize(),n[3].setComponents(c-o,d-u,p-g,y-M).normalize(),n[4].setComponents(c-a,d-h,p-_,y-x).normalize(),t===hi)n[5].setComponents(c+a,d+h,p+_,y+x).normalize();else if(t===Oo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Km(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Vs extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*d-o;for(let x=0;x<l;x++){const y=x*h-r;g.push(y,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const x=M+l*m,y=M+l*(m+1),T=M+1+l*(m+1),E=M+1+l*m;f.push(x,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
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
#endif`,ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`#ifdef USE_BATCHING
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
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cg=`#ifdef USE_IRIDESCENCE
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
#endif`,lg=`#ifdef USE_BUMPMAP
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
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xg=`#define PI 3.141592653589793
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
} // validated`,vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`
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
}`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
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
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
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
#endif`,Yg=`struct PhysicalMaterial {
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
}`,Kg=`
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
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
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N_=`float getShadowMask() {
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
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,O_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nt={alphahash_fragment:$m,alphahash_pars_fragment:jm,alphamap_fragment:Jm,alphamap_pars_fragment:Zm,alphatest_fragment:Qm,alphatest_pars_fragment:eg,aomap_fragment:tg,aomap_pars_fragment:ng,batching_pars_vertex:ig,batching_vertex:sg,begin_vertex:rg,beginnormal_vertex:og,bsdfs:ag,iridescence_fragment:cg,bumpmap_pars_fragment:lg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:fg,color_fragment:pg,color_pars_fragment:mg,color_pars_vertex:gg,color_vertex:_g,common:xg,cube_uv_reflection_fragment:vg,defaultnormal_vertex:yg,displacementmap_pars_vertex:Mg,displacementmap_vertex:Sg,emissivemap_fragment:bg,emissivemap_pars_fragment:wg,colorspace_fragment:Eg,colorspace_pars_fragment:Ag,envmap_fragment:Tg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Cg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Hg,envmap_vertex:Ig,fog_vertex:Lg,fog_pars_vertex:Ng,fog_fragment:Dg,fog_pars_fragment:Ug,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Fg,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:kg,lights_pars_begin:zg,lights_toon_fragment:Gg,lights_toon_pars_fragment:Vg,lights_phong_fragment:Wg,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:Kg,lights_fragment_maps:$g,lights_fragment_end:jg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:e_,map_fragment:t_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:s_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:o_,morphinstance_vertex:a_,morphcolor_vertex:c_,morphnormal_vertex:l_,morphtarget_pars_vertex:u_,morphtarget_vertex:h_,normal_fragment_begin:d_,normal_fragment_maps:f_,normal_pars_fragment:p_,normal_pars_vertex:m_,normal_vertex:g_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:M_,opaque_fragment:S_,packing:b_,premultiplied_alpha_fragment:w_,project_vertex:E_,dithering_fragment:A_,dithering_pars_fragment:T_,roughnessmap_fragment:R_,roughnessmap_pars_fragment:C_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:I_,shadowmap_vertex:L_,shadowmask_pars_fragment:N_,skinbase_vertex:D_,skinning_pars_vertex:U_,skinning_vertex:O_,skinnormal_vertex:F_,specularmap_fragment:B_,specularmap_pars_fragment:k_,tonemapping_fragment:z_,tonemapping_pars_fragment:H_,transmission_fragment:G_,transmission_pars_fragment:V_,uv_pars_fragment:W_,uv_pars_vertex:X_,uv_vertex:q_,worldpos_vertex:Y_,background_vert:`varying vec2 vUv;
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
}`},Ne={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Zn={basic:{uniforms:dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Xe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:dn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:dn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Xe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:dn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:dn([Ne.points,Ne.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:dn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:dn([Ne.common,Ne.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:dn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:dn([Ne.sprite,Ne.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:dn([Ne.common,Ne.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:dn([Ne.lights,Ne.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Zn.physical={uniforms:dn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const na={r:0,b:0,g:0},Qi=new $t,K_=new Je;function $_(i,e,t,n,s,r,o){const a=new Xe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const y=g(M);y===null?m(a,c):y&&y.isColor&&(m(y,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===bo)?(u===void 0&&(u=new pe(new gt(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:zs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(x.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(Qi)),u.material.toneMapped=pt.getTransfer(y.colorSpace)!==Et,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new pe(new Vs(2,2),new Di({name:"BackgroundMaterial",uniforms:zs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=pt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,x){M.getRGB(na,ed(i)),n.buffers.color.setClear(na.r,na.g,na.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:_,addToRenderList:p}}function j_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,b,C,D,z){let W=!1;const S=h(D,C,b);r!==S&&(r=S,l(r.object)),W=f(v,D,C,z),W&&g(v,D,C,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(v,b,C,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,b,C){const D=C.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let W=z[b.id];W===void 0&&(W={},z[b.id]=W);let S=W[D];return S===void 0&&(S=d(c()),W[D]=S),S}function d(v){const b=[],C=[],D=[];for(let z=0;z<t;z++)b[z]=0,C[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:C,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,b,C,D){const z=r.attributes,W=b.attributes;let S=0;const H=C.getAttributes();for(const N in H)if(H[N].location>=0){const U=z[N];let K=W[N];if(K===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),U===void 0||U.attribute!==K||K&&U.data!==K.data)return!0;S++}return r.attributesNum!==S||r.index!==D}function g(v,b,C,D){const z={},W=b.attributes;let S=0;const H=C.getAttributes();for(const N in H)if(H[N].location>=0){let U=W[N];U===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(U=v.instanceColor));const K={};K.attribute=U,U&&U.data&&(K.data=U.data),z[N]=K,S++}r.attributes=z,r.attributesNum=S,r.index=D}function _(){const v=r.newAttributes;for(let b=0,C=v.length;b<C;b++)v[b]=0}function p(v){m(v,0)}function m(v,b){const C=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;C[v]=1,D[v]===0&&(i.enableVertexAttribArray(v),D[v]=1),z[v]!==b&&(i.vertexAttribDivisor(v,b),z[v]=b)}function M(){const v=r.newAttributes,b=r.enabledAttributes;for(let C=0,D=b.length;C<D;C++)b[C]!==v[C]&&(i.disableVertexAttribArray(C),b[C]=0)}function x(v,b,C,D,z,W,S){S===!0?i.vertexAttribIPointer(v,b,C,z,W):i.vertexAttribPointer(v,b,C,D,z,W)}function y(v,b,C,D){_();const z=D.attributes,W=C.getAttributes(),S=b.defaultAttributeValues;for(const H in W){const N=W[H];if(N.location>=0){let X=z[H];if(X===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(X=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(X=v.instanceColor)),X!==void 0){const U=X.normalized,K=X.itemSize,I=e.get(X);if(I===void 0)continue;const G=I.buffer,L=I.type,Y=I.bytesPerElement,ne=L===i.INT||L===i.UNSIGNED_INT||X.gpuType===hc;if(X.isInterleavedBufferAttribute){const te=X.data,se=te.stride,ee=X.offset;if(te.isInstancedInterleavedBuffer){for(let ce=0;ce<N.locationSize;ce++)m(N.location+ce,te.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ce=0;ce<N.locationSize;ce++)p(N.location+ce);i.bindBuffer(i.ARRAY_BUFFER,G);for(let ce=0;ce<N.locationSize;ce++)x(N.location+ce,K/N.locationSize,L,U,se*Y,(ee+K/N.locationSize*ce)*Y,ne)}else{if(X.isInstancedBufferAttribute){for(let te=0;te<N.locationSize;te++)m(N.location+te,X.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let te=0;te<N.locationSize;te++)p(N.location+te);i.bindBuffer(i.ARRAY_BUFFER,G);for(let te=0;te<N.locationSize;te++)x(N.location+te,K/N.locationSize,L,U,K*Y,K/N.locationSize*te*Y,ne)}}else if(S!==void 0){const U=S[H];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(N.location,U);break;case 3:i.vertexAttrib3fv(N.location,U);break;case 4:i.vertexAttrib4fv(N.location,U);break;default:i.vertexAttrib1fv(N.location,U)}}}}M()}function T(){k();for(const v in n){const b=n[v];for(const C in b){const D=b[C];for(const z in D)u(D[z].object),delete D[z];delete b[C]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const C in b){const D=b[C];for(const z in D)u(D[z].object),delete D[z];delete b[C]}delete n[v.id]}function A(v){for(const b in n){const C=n[b];if(C[v.id]===void 0)continue;const D=C[v.id];for(const z in D)u(D[z].object),delete D[z];delete C[v.id]}}function k(){$(),o=!0,r!==s&&(r=s,l(r.object))}function $(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:$,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function J_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Z_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const k=A===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ui&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!k)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function Q_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ji,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,x=M*4;let y=m.clippingState||null;c.value=y,y=u(g,d,x,f);for(let T=0;T!==x;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ex(i){let e=new WeakMap;function t(o,a){return a===lc?o.mapping=ys:a===uc&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===lc||a===uc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xl extends td{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,od=[.125,.215,.35,.446,.526,.582],es=20,vl=new xl,ad=new Xe;let yl=null,Ml=0,Sl=0,bl=!1;const ts=(1+Math.sqrt(5))/2,Xs=1/ts,cd=[new B(-ts,Xs,0),new B(ts,Xs,0),new B(-Xs,0,ts),new B(Xs,0,ts),new B(0,ts,-Xs),new B(0,ts,Xs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Pr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,Ml,Sl),this._renderer.xr.enabled=bl,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:vr,format:Tn,colorSpace:nn,depthBuffer:!1},s=ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tx(r)),this._blurMaterial=nx(r,e,t)}return s}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s){const a=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ad),u.toneMapping=Ei,u.autoClear=!1;const f=new cn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new pe(new gt,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(ad),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;ia(s,M*x,m>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ys||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ia(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cd[(s-r-1)%cd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):es;p>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${es}`);const m=[];let M=0;for(let A=0;A<es;++A){const k=A/_,$=Math.exp(-k*k/2);m.push($),A===0?M+=$:A<p&&(M+=2*$)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[s],T=3*y*(s>x-Ws?s-x+Ws:0),E=4*(this._cubeSize-y);ia(t,T,E,3*y,2*y),c.setRenderTarget(t),c.render(h,vl)}}function tx(i){const e=[],t=[],n=[];let s=i;const r=i-Ws+1+od.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ws?c=od[o-i+Ws-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),x=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,k=E>2?0:-1,$=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];M.set($,_*g*E),x.set(d,p*g*E);const v=[E,E,E,E,E,E];y.set(v,m*g*E)}const T=new Ut;T.setAttribute("position",new Dt(M,_)),T.setAttribute("uv",new Dt(x,p)),T.setAttribute("faceIndex",new Dt(y,m)),e.push(T),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ld(i,e,t){const n=new Yi(i,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function nx(i,e,t){const n=new Float32Array(es),s=new B(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ud(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function hd(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function ix(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===lc||c===uc,u=c===ys||c===Ms;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Pr(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Pr(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Fo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rx(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,y=M.length;x<y;x+=3){const T=M[x+0],E=M[x+1],A=M[x+2];d.push(T,E,E,A,A,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const T=x+0,E=x+1,A=x+2;d.push(T,E,E,A,A,T)}}else return;const p=new(Lh(d)?jh:$h)(d,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ox(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<_.length;M++)t.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ax(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cx(i,e,t){const n=new WeakMap,s=new mt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let $=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",$)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*T*4*h),A=new Fh(E,y,T,h);A.type=Fn,A.needsUpdate=!0;const k=x*4;for(let v=0;v<h;v++){const b=p[v],C=m[v],D=M[v],z=y*T*4*v;for(let W=0;W<b.count;W++){const S=W*k;f===!0&&(s.fromBufferAttribute(b,W),E[z+S+0]=s.x,E[z+S+1]=s.y,E[z+S+2]=s.z,E[z+S+3]=0),g===!0&&(s.fromBufferAttribute(C,W),E[z+S+4]=s.x,E[z+S+5]=s.y,E[z+S+6]=s.z,E[z+S+7]=0),_===!0&&(s.fromBufferAttribute(D,W),E[z+S+8]=s.x,E[z+S+9]=s.y,E[z+S+10]=s.z,E[z+S+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Se(y,T)},n.set(a,d),a.addEventListener("dispose",$)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lx(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class dd extends Xt{constructor(e,t,n,s,r,o,a,c,l,u=bs){if(u!==bs&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bs&&(n=Wi),n===void 0&&u===ws&&(n=Ss),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fd=new Xt,pd=new dd(1,1),md=new Fh,gd=new Cm,_d=new sd,xd=[],vd=[],yd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function qs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function px(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),Yt(t,n)}}function mx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Md.set(n),i.uniformMatrix3fv(this.addr,!1,Md),Yt(t,n)}}function gx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),Yt(t,n)}}function _x(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Mx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Ex(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pd.compareFunction=Rh,r=pd):r=fd,t.setTexture2D(e||r,s)}function Ax(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gd,s)}function Tx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_d,s)}function Rx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||md,s)}function Cx(i){switch(i){case 5126:return ux;case 35664:return hx;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return xx;case 35668:case 35672:return vx;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return Sx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(i,e){i.uniform1fv(this.addr,e)}function Ix(i,e){const t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Lx(i,e){const t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Nx(i,e){const t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function Dx(i,e){const t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ux(i,e){const t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ox(i,e){const t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fx(i,e){i.uniform1iv(this.addr,e)}function Bx(i,e){i.uniform2iv(this.addr,e)}function kx(i,e){i.uniform3iv(this.addr,e)}function zx(i,e){i.uniform4iv(this.addr,e)}function Hx(i,e){i.uniform1uiv(this.addr,e)}function Gx(i,e){i.uniform2uiv(this.addr,e)}function Vx(i,e){i.uniform3uiv(this.addr,e)}function Wx(i,e){i.uniform4uiv(this.addr,e)}function Xx(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||fd,r[o])}function qx(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gd,r[o])}function Yx(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_d,r[o])}function Kx(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||md,r[o])}function $x(i){switch(i){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Nx;case 35674:return Dx;case 35675:return Ux;case 35676:return Ox;case 5124:case 35670:return Fx;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return zx;case 5125:return Hx;case 36294:return Gx;case 36295:return Vx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Kx}}class jx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}}class Jx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$x(t.type)}}class Zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const El=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function Qx(i,e,t){const n=i.name,s=n.length;for(El.lastIndex=0;;){const r=El.exec(n),o=El.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){bd(t,l===void 0?new jx(a,i,e):new Jx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Zx(a),bd(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Qx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function wd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ev=37297;let tv=0;function nv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function iv(i){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(i);let n;switch(e===t?n="":e===Uo&&t===Do?n="LinearDisplayP3ToLinearSRGB":e===Do&&t===Uo&&(n="LinearSRGBToLinearDisplayP3"),i){case nn:case Lo:return[n,"LinearTransferOETF"];case Pt:case Yc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ed(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+nv(i.getShaderSource(e),o)}else return s}function sv(i,e){const t=iv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rv(i,e){let t;switch(e){case O0:t="Linear";break;case F0:t="Reinhard";break;case B0:t="Cineon";break;case dh:t="ACESFilmic";break;case z0:t="AgX";break;case H0:t="Neutral";break;case k0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oa=new B;function ov(){pt.getLuminanceCoefficients(oa);const i=oa.x.toFixed(4),e=oa.y.toFixed(4),t=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function cv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ir(i){return i!==""}function Ad(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(uv,dv)}const hv=new Map;function dv(i,e){let t=nt[e];if(t===void 0){const n=hv.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(fv,pv)}function pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function mv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case Ms:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _v(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ms&&(e="ENVMAP_MODE_REFRACTION"),e}function xv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:e="ENVMAP_BLENDING_MULTIPLY";break;case D0:e="ENVMAP_BLENDING_MIX";break;case U0:e="ENVMAP_BLENDING_ADD";break}return e}function vv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=mv(t),l=gv(t),u=_v(t),h=xv(t),d=vv(t),f=av(t),g=cv(r),_=s.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(p=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Al(o),o=Ad(o,t),o=Td(o,t),a=Al(a),a=Ad(a,t),a=Td(a,t),o=Rd(o),a=Rd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,y=M+m+a,T=wd(s,s.VERTEX_SHADER,x),E=wd(s,s.FRAGMENT_SHADER,y);s.attachShader(_,T),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(b){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(T).trim(),z=s.getShaderInfoLog(E).trim();let W=!0,S=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,E);else{const H=Ed(s,T,"vertex"),N=Ed(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+C+`
`+H+`
`+N)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||z==="")&&(S=!1);S&&(b.diagnostics={runnable:W,programLog:C,vertexShader:{log:D,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(T),s.deleteShader(E),k=new ra(s,_),$=lv(s,_)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let $;this.getAttributes=function(){return $===void 0&&A(this),$};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,ev)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let Mv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bv(e),t.set(e,n)),n}}class bv{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}}function wv(i,e,t,n,s,r,o){const a=new Hh,c=new Sv,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,b,C,D,z){const W=D.fog,S=z.geometry,H=v.isMeshStandardMaterial?D.environment:null,N=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),X=N&&N.mapping===bo?N.image.height:null,U=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const K=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,I=K!==void 0?K.length:0;let G=0;S.morphAttributes.position!==void 0&&(G=1),S.morphAttributes.normal!==void 0&&(G=2),S.morphAttributes.color!==void 0&&(G=3);let L,Y,ne,te;if(U){const Vt=Zn[U];L=Vt.vertexShader,Y=Vt.fragmentShader}else L=v.vertexShader,Y=v.fragmentShader,c.update(v),ne=c.getVertexShaderID(v),te=c.getFragmentShaderID(v);const se=i.getRenderTarget(),ee=z.isInstancedMesh===!0,ce=z.isBatchedMesh===!0,he=!!v.map,Z=!!v.matcap,R=!!N,re=!!v.aoMap,oe=!!v.lightMap,de=!!v.bumpMap,be=!!v.normalMap,Ue=!!v.displacementMap,we=!!v.emissiveMap,O=!!v.metalnessMap,w=!!v.roughnessMap,Q=v.anisotropy>0,ie=v.clearcoat>0,fe=v.dispersion>0,le=v.iridescence>0,Pe=v.sheen>0,ye=v.transmission>0,me=Q&&!!v.anisotropyMap,Ge=ie&&!!v.clearcoatMap,ge=ie&&!!v.clearcoatNormalMap,Ie=ie&&!!v.clearcoatRoughnessMap,Le=le&&!!v.iridescenceMap,We=le&&!!v.iridescenceThicknessMap,Be=Pe&&!!v.sheenColorMap,Ze=Pe&&!!v.sheenRoughnessMap,He=!!v.specularMap,dt=!!v.specularColorMap,J=!!v.specularIntensityMap,Oe=ye&&!!v.transmissionMap,ae=ye&&!!v.thicknessMap,_e=!!v.gradientMap,De=!!v.alphaMap,Fe=v.alphaTest>0,ct=!!v.alphaHash,St=!!v.extensions;let Zt=Ei;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Zt=i.toneMapping);const ht={shaderID:U,shaderType:v.type,shaderName:v.name,vertexShader:L,fragmentShader:Y,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ce,batchingColor:ce&&z._colorsTexture!==null,instancing:ee,instancingColor:ee&&z.instanceColor!==null,instancingMorph:ee&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nn,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:Z,envMap:R,envMapMode:R&&N.mapping,envMapCubeUVHeight:X,aoMap:re,lightMap:oe,bumpMap:de,normalMap:be,displacementMap:f&&Ue,emissiveMap:we,normalMapObjectSpace:be&&v.normalMapType===j0,normalMapTangentSpace:be&&v.normalMapType===Ah,metalnessMap:O,roughnessMap:w,anisotropy:Q,anisotropyMap:me,clearcoat:ie,clearcoatMap:Ge,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ie,dispersion:fe,iridescence:le,iridescenceMap:Le,iridescenceThicknessMap:We,sheen:Pe,sheenColorMap:Be,sheenRoughnessMap:Ze,specularMap:He,specularColorMap:dt,specularIntensityMap:J,transmission:ye,transmissionMap:Oe,thicknessMap:ae,gradientMap:_e,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:De,alphaTest:Fe,alphaHash:ct,combine:v.combine,mapUv:he&&p(v.map.channel),aoMapUv:re&&p(v.aoMap.channel),lightMapUv:oe&&p(v.lightMap.channel),bumpMapUv:de&&p(v.bumpMap.channel),normalMapUv:be&&p(v.normalMap.channel),displacementMapUv:Ue&&p(v.displacementMap.channel),emissiveMapUv:we&&p(v.emissiveMap.channel),metalnessMapUv:O&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:me&&p(v.anisotropyMap.channel),clearcoatMapUv:Ge&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:We&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&p(v.sheenRoughnessMap.channel),specularMapUv:He&&p(v.specularMap.channel),specularColorMapUv:dt&&p(v.specularColorMap.channel),specularIntensityMapUv:J&&p(v.specularIntensityMap.channel),transmissionMapUv:Oe&&p(v.transmissionMap.channel),thicknessMapUv:ae&&p(v.thicknessMap.channel),alphaMapUv:De&&p(v.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(be||Q),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!S.attributes.uv&&(he||De),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:G,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&pt.getTransfer(v.map.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:St&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&v.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function M(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)b.push(C),b.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(x(b,v),y(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function T(v){const b=_[v.type];let C;if(b){const D=Zn[b];C=Hm.clone(D.uniforms)}else C=v.uniforms;return C}function E(v,b){let C;for(let D=0,z=u.length;D<z;D++){const W=u[D];if(W.cacheKey===b){C=W,++C.usedTimes;break}}return C===void 0&&(C=new yv(i,b,v,r),u.push(C)),C}function A(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function k(v){c.remove(v)}function $(){c.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:T,acquireProgram:E,releaseProgram:A,releaseShaderCache:k,programs:u,dispose:$}}function Ev(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Av(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Id(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||Av),n.length>1&&n.sort(d||Pd),s.length>1&&s.sort(d||Pd)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Tv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Id,i.set(n,[o])):s>=r.length?(o=new Id,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Xe};break;case"SpotLight":t={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pv=0;function Iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lv(i){const e=new Rv,t=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const s=new B,r=new Je,o=new Je;function a(l){let u=0,h=0,d=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,x=0,y=0,T=0,E=0,A=0;l.sort(Iv);for(let $=0,v=l.length;$<v;$++){const b=l[$],C=b.color,D=b.intensity,z=b.distance,W=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=C.r*D,h+=C.g*D,d+=C.b*D;else if(b.isLightProbe){for(let S=0;S<9;S++)n.probe[S].addScaledVector(b.sh.coefficients[S],D);A++}else if(b.isDirectionalLight){const S=e.get(b);if(S.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,N=t.get(b);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=b.shadow.matrix,M++}n.directional[f]=S,f++}else if(b.isSpotLight){const S=e.get(b);S.position.setFromMatrixPosition(b.matrixWorld),S.color.copy(C).multiplyScalar(D),S.distance=z,S.coneCos=Math.cos(b.angle),S.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),S.decay=b.decay,n.spot[_]=S;const H=b.shadow;if(b.map&&(n.spotLightMap[T]=b.map,T++,H.updateMatrices(b),b.castShadow&&E++),n.spotLightMatrix[_]=H.matrix,b.castShadow){const N=t.get(b);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=W,y++}_++}else if(b.isRectAreaLight){const S=e.get(b);S.color.copy(C).multiplyScalar(D),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=S,p++}else if(b.isPointLight){const S=e.get(b);if(S.color.copy(b.color).multiplyScalar(b.intensity),S.distance=b.distance,S.decay=b.decay,b.castShadow){const H=b.shadow,N=t.get(b);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,N.shadowCameraNear=H.camera.near,N.shadowCameraFar=H.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=b.shadow.matrix,x++}n.point[g]=S,g++}else if(b.isHemisphereLight){const S=e.get(b);S.skyColor.copy(b.color).multiplyScalar(D),S.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[m]=S,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const k=n.hash;(k.directionalLength!==f||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==p||k.hemiLength!==m||k.numDirectionalShadows!==M||k.numPointShadows!==x||k.numSpotShadows!==y||k.numSpotMaps!==T||k.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,k.directionalLength=f,k.pointLength=g,k.spotLength=_,k.rectAreaLength=p,k.hemiLength=m,k.numDirectionalShadows=M,k.numPointShadows=x,k.numSpotShadows=y,k.numSpotMaps=T,k.numLightProbes=A,n.version=Pv++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const x=l[m];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Ld(i){const e=new Lv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Nv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ld(i),e.set(s,[a])):r>=o.length?(a=new Ld(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Dv extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uv extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`;function Bv(i,e,t){let n=new _l;const s=new Se,r=new Se,o=new mt,a=new Dv({depthPacking:$0}),c=new Uv,l={},u=t.maxTextureSize,h={[ai]:en,[en]:ai,[tn]:tn},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Ov,fragmentShader:Fv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let m=this.type;this.render=function(E,A,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const $=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),C=i.state;C.setBlending(wi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const D=m!==oi&&this.type===oi,z=m===oi&&this.type!==oi;for(let W=0,S=E.length;W<S;W++){const H=E[W],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const X=N.getFrameExtents();if(s.multiply(X),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,N.mapSize.y=r.y)),N.map===null||D===!0||z===!0){const K=this.type!==oi?{minFilter:hn,magFilter:hn}:{};N.map!==null&&N.map.dispose(),N.map=new Yi(s.x,s.y,K),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const U=N.getViewportCount();for(let K=0;K<U;K++){const I=N.getViewport(K);o.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),C.viewport(o),N.updateMatrices(H,K),n=N.getFrustum(),y(A,k,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===oi&&M(N,k),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget($,v,b)};function M(E,A){const k=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,k,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,k,f,_,null)}function x(E,A,k,$){let v=null;const b=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)v=b;else if(v=k.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const C=v.uuid,D=A.uuid;let z=l[C];z===void 0&&(z={},l[C]=z);let W=z[D];W===void 0&&(W=v.clone(),z[D]=W,A.addEventListener("dispose",T)),v=W}if(v.visible=A.visible,v.wireframe=A.wireframe,$===oi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,k.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const C=i.properties.get(v);C.light=k}return v}function y(E,A,k,$,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===oi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);const D=e.update(E),z=E.material;if(Array.isArray(z)){const W=D.groups;for(let S=0,H=W.length;S<H;S++){const N=W[S],X=z[N.materialIndex];if(X&&X.visible){const U=x(E,X,$,v);E.onBeforeShadow(i,E,A,k,D,U,N),i.renderBufferDirect(k,null,D,U,E,N),E.onAfterShadow(i,E,A,k,D,U,N)}}}else if(z.visible){const W=x(E,z,$,v);E.onBeforeShadow(i,E,A,k,D,W,null),i.renderBufferDirect(k,null,D,W,E,null),E.onAfterShadow(i,E,A,k,D,W,null)}}const C=E.children;for(let D=0,z=C.length;D<z;D++)y(C[D],A,k,$,v)}function T(E){E.target.removeEventListener("dispose",T);for(const k in l){const $=l[k],v=E.target.uuid;v in $&&($[v].dispose(),delete $[v])}}}const kv={[nc]:ic,[sc]:ac,[rc]:cc,[vs]:oc,[ic]:nc,[ac]:sc,[cc]:rc,[oc]:vs};function zv(i){function e(){let J=!1;const Oe=new mt;let ae=null;const _e=new mt(0,0,0,0);return{setMask:function(De){ae!==De&&!J&&(i.colorMask(De,De,De,De),ae=De)},setLocked:function(De){J=De},setClear:function(De,Fe,ct,St,Zt){Zt===!0&&(De*=St,Fe*=St,ct*=St),Oe.set(De,Fe,ct,St),_e.equals(Oe)===!1&&(i.clearColor(De,Fe,ct,St),_e.copy(Oe))},reset:function(){J=!1,ae=null,_e.set(-1,0,0,0)}}}function t(){let J=!1,Oe=!1,ae=null,_e=null,De=null;return{setReversed:function(Fe){Oe=Fe},setTest:function(Fe){Fe?ne(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(Fe){ae!==Fe&&!J&&(i.depthMask(Fe),ae=Fe)},setFunc:function(Fe){if(Oe&&(Fe=kv[Fe]),_e!==Fe){switch(Fe){case nc:i.depthFunc(i.NEVER);break;case ic:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Fe}},setLocked:function(Fe){J=Fe},setClear:function(Fe){De!==Fe&&(i.clearDepth(Fe),De=Fe)},reset:function(){J=!1,ae=null,_e=null,De=null}}}function n(){let J=!1,Oe=null,ae=null,_e=null,De=null,Fe=null,ct=null,St=null,Zt=null;return{setTest:function(ht){J||(ht?ne(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(ht){Oe!==ht&&!J&&(i.stencilMask(ht),Oe=ht)},setFunc:function(ht,Vt,En){(ae!==ht||_e!==Vt||De!==En)&&(i.stencilFunc(ht,Vt,En),ae=ht,_e=Vt,De=En)},setOp:function(ht,Vt,En){(Fe!==ht||ct!==Vt||St!==En)&&(i.stencilOp(ht,Vt,En),Fe=ht,ct=Vt,St=En)},setLocked:function(ht){J=ht},setClear:function(ht){Zt!==ht&&(i.clearStencil(ht),Zt=ht)},reset:function(){J=!1,Oe=null,ae=null,_e=null,De=null,Fe=null,ct=null,St=null,Zt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,x=null,y=null,T=null,E=new Xe(0,0,0),A=0,k=!1,$=null,v=null,b=null,C=null,D=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,S=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(S=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=S>=1):H.indexOf("OpenGL ES")!==-1&&(S=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=S>=2);let N=null,X={};const U=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),I=new mt().fromArray(U),G=new mt().fromArray(K);function L(J,Oe,ae,_e){const De=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(J,Fe),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<ae;ct++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Oe+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Fe}const Y={};Y[i.TEXTURE_2D]=L(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=L(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=L(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=L(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),r.setFunc(vs),oe(!1),de(oh),ne(i.CULL_FACE),R(wi);function ne(J){l[J]!==!0&&(i.enable(J),l[J]=!0)}function te(J){l[J]!==!1&&(i.disable(J),l[J]=!1)}function se(J,Oe){return u[J]!==Oe?(i.bindFramebuffer(J,Oe),u[J]=Oe,J===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Oe),J===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function ee(J,Oe){let ae=d,_e=!1;if(J){ae=h.get(Oe),ae===void 0&&(ae=[],h.set(Oe,ae));const De=J.textures;if(ae.length!==De.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,ct=De.length;Fe<ct;Fe++)ae[Fe]=i.COLOR_ATTACHMENT0+Fe;ae.length=De.length,_e=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ae)}function ce(J){return f!==J?(i.useProgram(J),f=J,!0):!1}const he={[Vi]:i.FUNC_ADD,[_0]:i.FUNC_SUBTRACT,[x0]:i.FUNC_REVERSE_SUBTRACT};he[v0]=i.MIN,he[y0]=i.MAX;const Z={[M0]:i.ZERO,[S0]:i.ONE,[b0]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[C0]:i.SRC_ALPHA_SATURATE,[T0]:i.DST_COLOR,[E0]:i.DST_ALPHA,[w0]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[R0]:i.ONE_MINUS_DST_COLOR,[A0]:i.ONE_MINUS_DST_ALPHA,[P0]:i.CONSTANT_COLOR,[I0]:i.ONE_MINUS_CONSTANT_COLOR,[L0]:i.CONSTANT_ALPHA,[N0]:i.ONE_MINUS_CONSTANT_ALPHA};function R(J,Oe,ae,_e,De,Fe,ct,St,Zt,ht){if(J===wi){g===!0&&(te(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),J!==g0){if(J!==_||ht!==k){if((p!==Vi||x!==Vi)&&(i.blendEquation(i.FUNC_ADD),p=Vi,x=Vi),ht)switch(J){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.ONE,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}m=null,M=null,y=null,T=null,E.set(0,0,0),A=0,_=J,k=ht}return}De=De||Oe,Fe=Fe||ae,ct=ct||_e,(Oe!==p||De!==x)&&(i.blendEquationSeparate(he[Oe],he[De]),p=Oe,x=De),(ae!==m||_e!==M||Fe!==y||ct!==T)&&(i.blendFuncSeparate(Z[ae],Z[_e],Z[Fe],Z[ct]),m=ae,M=_e,y=Fe,T=ct),(St.equals(E)===!1||Zt!==A)&&(i.blendColor(St.r,St.g,St.b,Zt),E.copy(St),A=Zt),_=J,k=!1}function re(J,Oe){J.side===tn?te(i.CULL_FACE):ne(i.CULL_FACE);let ae=J.side===en;Oe&&(ae=!ae),oe(ae),J.blending===xs&&J.transparent===!1?R(wi):R(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),r.setFunc(J.depthFunc),r.setTest(J.depthTest),r.setMask(J.depthWrite),s.setMask(J.colorWrite);const _e=J.stencilWrite;o.setTest(_e),_e&&(o.setMask(J.stencilWriteMask),o.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),o.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Ue(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(J){$!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),$=J)}function de(J){J!==p0?(ne(i.CULL_FACE),J!==v&&(J===oh?i.cullFace(i.BACK):J===m0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),v=J}function be(J){J!==b&&(W&&i.lineWidth(J),b=J)}function Ue(J,Oe,ae){J?(ne(i.POLYGON_OFFSET_FILL),(C!==Oe||D!==ae)&&(i.polygonOffset(Oe,ae),C=Oe,D=ae)):te(i.POLYGON_OFFSET_FILL)}function we(J){J?ne(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function O(J){J===void 0&&(J=i.TEXTURE0+z-1),N!==J&&(i.activeTexture(J),N=J)}function w(J,Oe,ae){ae===void 0&&(N===null?ae=i.TEXTURE0+z-1:ae=N);let _e=X[ae];_e===void 0&&(_e={type:void 0,texture:void 0},X[ae]=_e),(_e.type!==J||_e.texture!==Oe)&&(N!==ae&&(i.activeTexture(ae),N=ae),i.bindTexture(J,Oe||Y[J]),_e.type=J,_e.texture=Oe)}function Q(){const J=X[N];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function We(J){I.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),I.copy(J))}function Be(J){G.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),G.copy(J))}function Ze(J,Oe){let ae=c.get(Oe);ae===void 0&&(ae=new WeakMap,c.set(Oe,ae));let _e=ae.get(J);_e===void 0&&(_e=i.getUniformBlockIndex(Oe,J.name),ae.set(J,_e))}function He(J,Oe){const _e=c.get(Oe).get(J);a.get(Oe)!==_e&&(i.uniformBlockBinding(Oe,_e,J.__bindingPointIndex),a.set(Oe,_e))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},N=null,X={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,x=null,y=null,T=null,E=new Xe(0,0,0),A=0,k=!1,$=null,v=null,b=null,C=null,D=null,I.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ne,disable:te,bindFramebuffer:se,drawBuffers:ee,useProgram:ce,setBlending:R,setMaterial:re,setFlipSided:oe,setCullFace:de,setLineWidth:be,setPolygonOffset:Ue,setScissorTest:we,activeTexture:O,bindTexture:w,unbindTexture:Q,compressedTexImage2D:ie,compressedTexImage3D:fe,texImage2D:Ie,texImage3D:Le,updateUBOMapping:Ze,uniformBlockBinding:He,texStorage2D:Ge,texStorage3D:ge,texSubImage2D:le,texSubImage3D:Pe,compressedTexSubImage2D:ye,compressedTexSubImage3D:me,scissor:We,viewport:Be,reset:dt}}function Nd(i,e,t,n){const s=Hv(n);switch(t){case vh:return i*e;case Mh:return i*e;case Sh:return i*e*2;case pc:return i*e/s.components*s.byteLength;case mc:return i*e/s.components*s.byteLength;case bh:return i*e*2/s.components*s.byteLength;case gc:return i*e*2/s.components*s.byteLength;case yh:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case _c:return i*e*4/s.components*s.byteLength;case Ao:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:case Mc:return Math.max(i,16)*Math.max(e,8)/4;case xc:case yc:return Math.max(i,8)*Math.max(e,8)/2;case Sc:case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Po:case kc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wh:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hv(i){switch(i){case ui:case gh:return{byteLength:1,components:1};case xr:case _h:case vr:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case Wi:case hc:case Fn:return{byteLength:4,components:1};case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Gv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,w){return f?new OffscreenCanvas(O,w):wr("canvas")}function _(O,w,Q){let ie=1;const fe=we(O);if((fe.width>Q||fe.height>Q)&&(ie=Q/Math.max(fe.width,fe.height)),ie<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const le=Math.floor(ie*fe.width),Pe=Math.floor(ie*fe.height);h===void 0&&(h=g(le,Pe));const ye=w?g(le,Pe):h;return ye.width=le,ye.height=Pe,ye.getContext("2d").drawImage(O,0,0,le,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+le+"x"+Pe+")."),ye}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),O;return O}function p(O){return O.generateMipmaps&&O.minFilter!==hn&&O.minFilter!==xn}function m(O){i.generateMipmap(O)}function M(O,w,Q,ie,fe=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let le=w;if(w===i.RED&&(Q===i.FLOAT&&(le=i.R32F),Q===i.HALF_FLOAT&&(le=i.R16F),Q===i.UNSIGNED_BYTE&&(le=i.R8)),w===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.R8UI),Q===i.UNSIGNED_SHORT&&(le=i.R16UI),Q===i.UNSIGNED_INT&&(le=i.R32UI),Q===i.BYTE&&(le=i.R8I),Q===i.SHORT&&(le=i.R16I),Q===i.INT&&(le=i.R32I)),w===i.RG&&(Q===i.FLOAT&&(le=i.RG32F),Q===i.HALF_FLOAT&&(le=i.RG16F),Q===i.UNSIGNED_BYTE&&(le=i.RG8)),w===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RG8UI),Q===i.UNSIGNED_SHORT&&(le=i.RG16UI),Q===i.UNSIGNED_INT&&(le=i.RG32UI),Q===i.BYTE&&(le=i.RG8I),Q===i.SHORT&&(le=i.RG16I),Q===i.INT&&(le=i.RG32I)),w===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Q===i.UNSIGNED_INT&&(le=i.RGB32UI),Q===i.BYTE&&(le=i.RGB8I),Q===i.SHORT&&(le=i.RGB16I),Q===i.INT&&(le=i.RGB32I)),w===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Q===i.UNSIGNED_INT&&(le=i.RGBA32UI),Q===i.BYTE&&(le=i.RGBA8I),Q===i.SHORT&&(le=i.RGBA16I),Q===i.INT&&(le=i.RGBA32I)),w===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),w===i.RGBA){const Pe=fe?No:pt.getTransfer(ie);Q===i.FLOAT&&(le=i.RGBA32F),Q===i.HALF_FLOAT&&(le=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(le=Pe===Et?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(O,w){let Q;return O?w===null||w===Wi||w===Ss?Q=i.DEPTH24_STENCIL8:w===Fn?Q=i.DEPTH32F_STENCIL8:w===xr&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Wi||w===Ss?Q=i.DEPTH_COMPONENT24:w===Fn?Q=i.DEPTH_COMPONENT32F:w===xr&&(Q=i.DEPTH_COMPONENT16),Q}function y(O,w){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==hn&&O.minFilter!==xn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function T(O){const w=O.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&u.delete(w)}function E(O){const w=O.target;w.removeEventListener("dispose",E),$(w)}function A(O){const w=n.get(O);if(w.__webglInit===void 0)return;const Q=O.source,ie=d.get(Q);if(ie){const fe=ie[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&k(O),Object.keys(ie).length===0&&d.delete(Q)}n.remove(O)}function k(O){const w=n.get(O);i.deleteTexture(w.__webglTexture);const Q=O.source,ie=d.get(Q);delete ie[w.__cacheKey],o.memory.textures--}function $(O){const w=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let fe=0;fe<w.__webglFramebuffer[ie].length;fe++)i.deleteFramebuffer(w.__webglFramebuffer[ie][fe]);else i.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)i.deleteFramebuffer(w.__webglFramebuffer[ie]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=O.textures;for(let ie=0,fe=Q.length;ie<fe;ie++){const le=n.get(Q[ie]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Q[ie])}n.remove(O)}let v=0;function b(){v=0}function C(){const O=v;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),v+=1,O}function D(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function z(O,w){const Q=n.get(O);if(O.isVideoTexture&&be(O),O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){const ie=O.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(Q,O,w);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+w)}function W(O,w){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){G(Q,O,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+w)}function S(O,w){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){G(Q,O,w);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+w)}function H(O,w){const Q=n.get(O);if(O.version>0&&Q.__version!==O.version){L(Q,O,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+w)}const N={[Ai]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},X={[hn]:i.NEAREST,[mh]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},U={[J0]:i.NEVER,[im]:i.ALWAYS,[Z0]:i.LESS,[Rh]:i.LEQUAL,[Q0]:i.EQUAL,[nm]:i.GEQUAL,[em]:i.GREATER,[tm]:i.NOTEQUAL};function K(O,w){if(w.type===Fn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xn||w.magFilter===Eo||w.magFilter===_r||w.magFilter===li||w.minFilter===xn||w.minFilter===Eo||w.minFilter===_r||w.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,N[w.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,N[w.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,N[w.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,X[w.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,X[w.minFilter]),w.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hn||w.minFilter!==_r&&w.minFilter!==li||w.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function I(O,w){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",T));const ie=w.source;let fe=d.get(ie);fe===void 0&&(fe={},d.set(ie,fe));const le=D(w);if(le!==O.__cacheKey){fe[le]===void 0&&(fe[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),fe[le].usedTimes++;const Pe=fe[O.__cacheKey];Pe!==void 0&&(fe[O.__cacheKey].usedTimes--,Pe.usedTimes===0&&k(w)),O.__cacheKey=le,O.__webglTexture=fe[le].texture}return Q}function G(O,w,Q){let ie=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=i.TEXTURE_3D);const fe=I(O,w),le=w.source;t.bindTexture(ie,O.__webglTexture,i.TEXTURE0+Q);const Pe=n.get(le);if(le.version!==Pe.__version||fe===!0){t.activeTexture(i.TEXTURE0+Q);const ye=pt.getPrimaries(pt.workingColorSpace),me=w.colorSpace===Ri?null:pt.getPrimaries(w.colorSpace),Ge=w.colorSpace===Ri||ye===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ge=_(w.image,!1,s.maxTextureSize);ge=Ue(w,ge);const Ie=r.convert(w.format,w.colorSpace),Le=r.convert(w.type);let We=M(w.internalFormat,Ie,Le,w.colorSpace,w.isVideoTexture);K(ie,w);let Be;const Ze=w.mipmaps,He=w.isVideoTexture!==!0,dt=Pe.__version===void 0||fe===!0,J=le.dataReady,Oe=y(w,ge);if(w.isDepthTexture)We=x(w.format===ws,w.type),dt&&(He?t.texStorage2D(i.TEXTURE_2D,1,We,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,We,ge.width,ge.height,0,Ie,Le,null));else if(w.isDataTexture)if(Ze.length>0){He&&dt&&t.texStorage2D(i.TEXTURE_2D,Oe,We,Ze[0].width,Ze[0].height);for(let ae=0,_e=Ze.length;ae<_e;ae++)Be=Ze[ae],He?J&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Be.width,Be.height,Ie,Le,Be.data):t.texImage2D(i.TEXTURE_2D,ae,We,Be.width,Be.height,0,Ie,Le,Be.data);w.generateMipmaps=!1}else He?(dt&&t.texStorage2D(i.TEXTURE_2D,Oe,We,ge.width,ge.height),J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,Ie,Le,ge.data)):t.texImage2D(i.TEXTURE_2D,0,We,ge.width,ge.height,0,Ie,Le,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,We,Ze[0].width,Ze[0].height,ge.depth);for(let ae=0,_e=Ze.length;ae<_e;ae++)if(Be=Ze[ae],w.format!==Tn)if(Ie!==null)if(He){if(J)if(w.layerUpdates.size>0){const De=Nd(Be.width,Be.height,w.format,w.type);for(const Fe of w.layerUpdates){const ct=Be.data.subarray(Fe*De/Be.data.BYTES_PER_ELEMENT,(Fe+1)*De/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Fe,Be.width,Be.height,1,Ie,ct,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,ge.depth,Ie,Be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,We,Be.width,Be.height,ge.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,ge.depth,Ie,Le,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,We,Be.width,Be.height,ge.depth,0,Ie,Le,Be.data)}else{He&&dt&&t.texStorage2D(i.TEXTURE_2D,Oe,We,Ze[0].width,Ze[0].height);for(let ae=0,_e=Ze.length;ae<_e;ae++)Be=Ze[ae],w.format!==Tn?Ie!==null?He?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Be.width,Be.height,Ie,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,We,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?J&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Be.width,Be.height,Ie,Le,Be.data):t.texImage2D(i.TEXTURE_2D,ae,We,Be.width,Be.height,0,Ie,Le,Be.data)}else if(w.isDataArrayTexture)if(He){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,We,ge.width,ge.height,ge.depth),J)if(w.layerUpdates.size>0){const ae=Nd(ge.width,ge.height,w.format,w.type);for(const _e of w.layerUpdates){const De=ge.data.subarray(_e*ae/ge.data.BYTES_PER_ELEMENT,(_e+1)*ae/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ge.width,ge.height,1,Ie,Le,De)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ie,Le,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,ge.width,ge.height,ge.depth,0,Ie,Le,ge.data);else if(w.isData3DTexture)He?(dt&&t.texStorage3D(i.TEXTURE_3D,Oe,We,ge.width,ge.height,ge.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ie,Le,ge.data)):t.texImage3D(i.TEXTURE_3D,0,We,ge.width,ge.height,ge.depth,0,Ie,Le,ge.data);else if(w.isFramebufferTexture){if(dt)if(He)t.texStorage2D(i.TEXTURE_2D,Oe,We,ge.width,ge.height);else{let ae=ge.width,_e=ge.height;for(let De=0;De<Oe;De++)t.texImage2D(i.TEXTURE_2D,De,We,ae,_e,0,Ie,Le,null),ae>>=1,_e>>=1}}else if(Ze.length>0){if(He&&dt){const ae=we(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Oe,We,ae.width,ae.height)}for(let ae=0,_e=Ze.length;ae<_e;ae++)Be=Ze[ae],He?J&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ie,Le,Be):t.texImage2D(i.TEXTURE_2D,ae,We,Ie,Le,Be);w.generateMipmaps=!1}else if(He){if(dt){const ae=we(ge);t.texStorage2D(i.TEXTURE_2D,Oe,We,ae.width,ae.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Le,ge)}else t.texImage2D(i.TEXTURE_2D,0,We,Ie,Le,ge);p(w)&&m(ie),Pe.__version=le.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function L(O,w,Q){if(w.image.length!==6)return;const ie=I(O,w),fe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Q);const le=n.get(fe);if(fe.version!==le.__version||ie===!0){t.activeTexture(i.TEXTURE0+Q);const Pe=pt.getPrimaries(pt.workingColorSpace),ye=w.colorSpace===Ri?null:pt.getPrimaries(w.colorSpace),me=w.colorSpace===Ri||Pe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ge=w.isCompressedTexture||w.image[0].isCompressedTexture,ge=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let _e=0;_e<6;_e++)!Ge&&!ge?Ie[_e]=_(w.image[_e],!0,s.maxCubemapSize):Ie[_e]=ge?w.image[_e].image:w.image[_e],Ie[_e]=Ue(w,Ie[_e]);const Le=Ie[0],We=r.convert(w.format,w.colorSpace),Be=r.convert(w.type),Ze=M(w.internalFormat,We,Be,w.colorSpace),He=w.isVideoTexture!==!0,dt=le.__version===void 0||ie===!0,J=fe.dataReady;let Oe=y(w,Le);K(i.TEXTURE_CUBE_MAP,w);let ae;if(Ge){He&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,Ze,Le.width,Le.height);for(let _e=0;_e<6;_e++){ae=Ie[_e].mipmaps;for(let De=0;De<ae.length;De++){const Fe=ae[De];w.format!==Tn?We!==null?He?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,0,0,Fe.width,Fe.height,We,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,Ze,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,0,0,Fe.width,Fe.height,We,Be,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De,Ze,Fe.width,Fe.height,0,We,Be,Fe.data)}}}else{if(ae=w.mipmaps,He&&dt){ae.length>0&&Oe++;const _e=we(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,Ze,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ge){He?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ie[_e].width,Ie[_e].height,We,Be,Ie[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ze,Ie[_e].width,Ie[_e].height,0,We,Be,Ie[_e].data);for(let De=0;De<ae.length;De++){const ct=ae[De].image[_e].image;He?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,0,0,ct.width,ct.height,We,Be,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,Ze,ct.width,ct.height,0,We,Be,ct.data)}}else{He?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,We,Be,Ie[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ze,We,Be,Ie[_e]);for(let De=0;De<ae.length;De++){const Fe=ae[De];He?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,0,0,We,Be,Fe.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,De+1,Ze,We,Be,Fe.image[_e])}}}p(w)&&m(i.TEXTURE_CUBE_MAP),le.__version=fe.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Y(O,w,Q,ie,fe,le){const Pe=r.convert(Q.format,Q.colorSpace),ye=r.convert(Q.type),me=M(Q.internalFormat,Pe,ye,Q.colorSpace);if(!n.get(w).__hasExternalTextures){const ge=Math.max(1,w.width>>le),Ie=Math.max(1,w.height>>le);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,le,me,ge,Ie,w.depth,0,Pe,ye,null):t.texImage2D(fe,le,me,ge,Ie,0,Pe,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,fe,n.get(Q).__webglTexture,0,oe(w)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,fe,n.get(Q).__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(O,w,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,O),w.depthBuffer){const ie=w.depthTexture,fe=ie&&ie.isDepthTexture?ie.type:null,le=x(w.stencilBuffer,fe),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=oe(w);de(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,le,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,le,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,O)}else{const ie=w.textures;for(let fe=0;fe<ie.length;fe++){const le=ie[fe],Pe=r.convert(le.format,le.colorSpace),ye=r.convert(le.type),me=M(le.internalFormat,Pe,ye,le.colorSpace),Ge=oe(w);Q&&de(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,me,w.width,w.height):de(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,me,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const ie=n.get(w.depthTexture).__webglTexture,fe=oe(w);if(w.depthTexture.format===bs)de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(w.depthTexture.format===ws)de(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function se(O){const w=n.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const ie=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const fe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",fe)};ie.addEventListener("dispose",fe),w.__depthDisposeCallback=fe}w.__boundDepthTexture=ie}if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");te(w.__webglFramebuffer,O)}else if(Q){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=i.createRenderbuffer(),ne(w.__webglDepthbuffer[ie],O,!1);else{const fe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,le)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ne(w.__webglDepthbuffer,O,!1);else{const ie=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(O,w,Q){const ie=n.get(O);w!==void 0&&Y(ie.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&se(O)}function ce(O){const w=O.texture,Q=n.get(O),ie=n.get(w);O.addEventListener("dispose",E);const fe=O.textures,le=O.isWebGLCubeRenderTarget===!0,Pe=fe.length>1;if(Pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=w.version,o.memory.textures++),le){Q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[ye]=[];for(let me=0;me<w.mipmaps.length;me++)Q.__webglFramebuffer[ye][me]=i.createFramebuffer()}else Q.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ye=0;ye<w.mipmaps.length;ye++)Q.__webglFramebuffer[ye]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ye=0,me=fe.length;ye<me;ye++){const Ge=n.get(fe[ye]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&de(O)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){const me=fe[ye];Q.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ye]);const Ge=r.convert(me.format,me.colorSpace),ge=r.convert(me.type),Ie=M(me.internalFormat,Ge,ge,me.colorSpace,O.isXRRenderTarget===!0),Le=oe(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ie,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),K(i.TEXTURE_CUBE_MAP,w);for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Y(Q.__webglFramebuffer[ye][me],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,me);else Y(Q.__webglFramebuffer[ye],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ye=0,me=fe.length;ye<me;ye++){const Ge=fe[ye],ge=n.get(Ge);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),K(i.TEXTURE_2D,Ge),Y(Q.__webglFramebuffer,O,Ge,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),p(Ge)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ye=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ie.__webglTexture),K(ye,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Y(Q.__webglFramebuffer[me],O,w,i.COLOR_ATTACHMENT0,ye,me);else Y(Q.__webglFramebuffer,O,w,i.COLOR_ATTACHMENT0,ye,0);p(w)&&m(ye),t.unbindTexture()}O.depthBuffer&&se(O)}function he(O){const w=O.textures;for(let Q=0,ie=w.length;Q<ie;Q++){const fe=w[Q];if(p(fe)){const le=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(fe).__webglTexture;t.bindTexture(le,Pe),m(le),t.unbindTexture()}}}const Z=[],R=[];function re(O){if(O.samples>0){if(de(O)===!1){const w=O.textures,Q=O.width,ie=O.height;let fe=i.COLOR_BUFFER_BIT;const le=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(O),ye=w.length>1;if(ye)for(let me=0;me<w.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let me=0;me<w.length;me++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[me]);const Ge=n.get(w[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,Q,ie,0,0,Q,ie,fe,i.NEAREST),c===!0&&(Z.length=0,R.length=0,Z.push(i.COLOR_ATTACHMENT0+me),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Z.push(le),R.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let me=0;me<w.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[me]);const Ge=n.get(w[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const w=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function oe(O){return Math.min(s.maxSamples,O.samples)}function de(O){const w=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(O){const w=o.render.frame;u.get(O)!==w&&(u.set(O,w),O.update())}function Ue(O,w){const Q=O.colorSpace,ie=O.format,fe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==nn&&Q!==Ri&&(pt.getTransfer(Q)===Et?(ie!==Tn||fe!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function we(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=C,this.resetTextureUnits=b,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=S,this.setTextureCube=H,this.rebindTextures=ee,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=de}function Vv(i,e){function t(n,s=Ri){let r;const o=pt.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return i.BYTE;if(n===_h)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===hc)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===yh)return i.RGB;if(n===Tn)return i.RGBA;if(n===Mh)return i.LUMINANCE;if(n===Sh)return i.LUMINANCE_ALPHA;if(n===bs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===pc)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===bh)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===Ao||n===To||n===Ro||n===Co)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===yc||n===Mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sc||n===bc||n===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sc||n===bc)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ec||n===Ac||n===Tc||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Nc||n===Dc||n===Uc||n===Oc||n===Fc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ec)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ac)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===kc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wh||n===Hc||n===Gc||n===Vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Wv extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xv={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yv=`
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

}`;class Kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Di({vertexShader:qv,fragmentShader:Yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends Xi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new Kv,p=t.getContextAttributes();let m=null,M=null;const x=[],y=[],T=new Se;let E=null;const A=new Gt;A.layers.enable(1),A.viewport=new mt;const k=new Gt;k.layers.enable(2),k.viewport=new mt;const $=[A,k],v=new Wv;v.layers.enable(1),v.layers.enable(2);let b=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let Y=x[L];return Y===void 0&&(Y=new Tl,x[L]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(L){let Y=x[L];return Y===void 0&&(Y=new Tl,x[L]=Y),Y.getGripSpace()},this.getHand=function(L){let Y=x[L];return Y===void 0&&(Y=new Tl,x[L]=Y),Y.getHandSpace()};function D(L){const Y=y.indexOf(L.inputSource);if(Y===-1)return;const ne=x[Y];ne!==void 0&&(ne.update(L.inputSource,L.frame,l||o),ne.dispatchEvent({type:L.type,data:L.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let L=0;L<x.length;L++){const Y=y[L];Y!==null&&(y[L]=null,x[L].disconnect(Y))}b=null,C=null,_.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,M=null,G.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Yi(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,ne=null,te=null;p.depth&&(te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?ws:bs,ne=p.stencil?Ss:Wi);const se={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Yi(d.textureWidth,d.textureHeight,{format:Tn,type:ui,depthTexture:new dd(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(L){for(let Y=0;Y<L.removed.length;Y++){const ne=L.removed[Y],te=y.indexOf(ne);te>=0&&(y[te]=null,x[te].disconnect(ne))}for(let Y=0;Y<L.added.length;Y++){const ne=L.added[Y];let te=y.indexOf(ne);if(te===-1){for(let ee=0;ee<x.length;ee++)if(ee>=y.length){y.push(ne),te=ee;break}else if(y[ee]===null){y[ee]=ne,te=ee;break}if(te===-1)break}const se=x[te];se&&se.connect(ne)}}const S=new B,H=new B;function N(L,Y,ne){S.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(ne.matrixWorld);const te=S.distanceTo(H),se=Y.projectionMatrix.elements,ee=ne.projectionMatrix.elements,ce=se[14]/(se[10]-1),he=se[14]/(se[10]+1),Z=(se[9]+1)/se[5],R=(se[9]-1)/se[5],re=(se[8]-1)/se[0],oe=(ee[8]+1)/ee[0],de=ce*re,be=ce*oe,Ue=te/(-re+oe),we=Ue*-re;if(Y.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(we),L.translateZ(Ue),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),se[10]===-1)L.projectionMatrix.copy(Y.projectionMatrix),L.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const O=ce+Ue,w=he+Ue,Q=de-we,ie=be+(te-we),fe=Z*he/w*O,le=R*he/w*O;L.projectionMatrix.makePerspective(Q,ie,fe,le,O,w),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function X(L,Y){Y===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(Y.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let Y=L.near,ne=L.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),v.near=k.near=A.near=Y,v.far=k.far=A.far=ne,(b!==v.near||C!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,C=v.far);const te=L.parent,se=v.cameras;X(v,te);for(let ee=0;ee<se.length;ee++)X(se[ee],te);se.length===2?N(v,A,k):v.projectionMatrix.copy(A.projectionMatrix),U(L,v,te)};function U(L,Y,ne){ne===null?L.matrix.copy(Y.matrixWorld):(L.matrix.copy(ne.matrixWorld),L.matrix.invert(),L.matrix.multiply(Y.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(Y.projectionMatrix),L.projectionMatrixInverse.copy(Y.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Rs*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(L){c=L,d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let K=null;function I(L,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let te=!1;ne.length!==v.cameras.length&&(v.cameras.length=0,te=!0);for(let ee=0;ee<ne.length;ee++){const ce=ne[ee];let he=null;if(f!==null)he=f.getViewport(ce);else{const R=h.getViewSubImage(d,ce);he=R.viewport,ee===0&&(e.setRenderTargetTextures(M,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(M))}let Z=$[ee];Z===void 0&&(Z=new Gt,Z.layers.enable(ee),Z.viewport=new mt,$[ee]=Z),Z.matrix.fromArray(ce.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ce.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(he.x,he.y,he.width,he.height),ee===0&&(v.matrix.copy(Z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),te===!0&&v.cameras.push(Z)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")){const ee=h.getDepthInformation(ne[0]);ee&&ee.isValid&&ee.texture&&_.init(e,ee,s.renderState)}}for(let ne=0;ne<x.length;ne++){const te=y[ne],se=x[ne];te!==null&&se!==void 0&&se.update(te,Y,l||o)}K&&K(L,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const G=new rd;G.setAnimationLoop(I),this.setAnimationLoop=function(L){K=L},this.dispose=function(){}}}const ns=new $t,jv=new Je;function Jv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ed(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===en&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===en&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,ns.copy(y),ns.x*=-1,ns.y*=-1,ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),p.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(ns)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function l(M,x){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(M,T);const E=e.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function u(M){const x=h();M.__bindingPointIndex=x;const y=i.createBuffer(),T=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],y=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=y.length;E<A;E++){const k=Array.isArray(y[E])?y[E]:[y[E]];for(let $=0,v=k.length;$<v;$++){const b=k[$];if(f(b,E,$,T)===!0){const C=b.__offset,D=Array.isArray(b.value)?b.value:[b.value];let z=0;for(let W=0;W<D.length;W++){const S=D[W],H=_(S);typeof S=="number"||typeof S=="boolean"?(b.__data[0]=S,i.bufferSubData(i.UNIFORM_BUFFER,C+z,b.__data)):S.isMatrix3?(b.__data[0]=S.elements[0],b.__data[1]=S.elements[1],b.__data[2]=S.elements[2],b.__data[3]=0,b.__data[4]=S.elements[3],b.__data[5]=S.elements[4],b.__data[6]=S.elements[5],b.__data[7]=0,b.__data[8]=S.elements[6],b.__data[9]=S.elements[7],b.__data[10]=S.elements[8],b.__data[11]=0):(S.toArray(b.__data,z),z+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,y,T){const E=M.value,A=x+"_"+y;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const k=T[A];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return T[A]=E,!0}else if(k.equals(E)===!1)return k.copy(E),!0}return!1}function g(M){const x=M.uniforms;let y=0;const T=16;for(let A=0,k=x.length;A<k;A++){const $=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,b=$.length;v<b;v++){const C=$[v],D=Array.isArray(C.value)?C.value:[C.value];for(let z=0,W=D.length;z<W;z++){const S=D[z],H=_(S),N=y%T,X=N%H.boundary,U=N+X;y+=X,U!==0&&T-U<H.storage&&(y+=T-U),C.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=H.storage}}}const E=y%T;return E>0&&(y+=T-E),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Qv{constructor(e={}){const{canvas:t=ym(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=Ei,this.toneMappingExposure=1;const x=this;let y=!1,T=0,E=0,A=null,k=-1,$=null;const v=new mt,b=new mt;let C=null;const D=new Xe(0);let z=0,W=t.width,S=t.height,H=1,N=null,X=null;const U=new mt(0,0,W,S),K=new mt(0,0,W,S);let I=!1;const G=new _l;let L=!1,Y=!1;const ne=new Je,te=new Je,se=new B,ee=new mt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Z(){return A===null?H:1}let R=n;function re(P,F){return t.getContext(P,F)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),R===null){const F="webgl2";if(R=re(F,P),R===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let oe,de,be,Ue,we,O,w,Q,ie,fe,le,Pe,ye,me,Ge,ge,Ie,Le,We,Be,Ze,He,dt,J;function Oe(){oe=new sx(R),oe.init(),He=new Vv(R,oe),de=new Z_(R,oe,e,He),be=new zv(R),de.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),Ue=new ax(R),we=new Ev,O=new Gv(R,oe,be,we,de,He,Ue),w=new ex(x),Q=new ix(x),ie=new Km(R),dt=new j_(R,ie),fe=new rx(R,ie,Ue,dt),le=new lx(R,fe,ie,Ue),We=new cx(R,de,O),ge=new Q_(we),Pe=new wv(x,w,Q,oe,de,dt,ge),ye=new Jv(x,we),me=new Tv,Ge=new Nv(oe),Le=new $_(x,w,Q,be,le,d,c),Ie=new Bv(x,le,de),J=new Zv(R,Ue,de,be),Be=new J_(R,oe,Ue),Ze=new ox(R,oe,Ue),Ue.programs=Pe.programs,x.capabilities=de,x.extensions=oe,x.properties=we,x.renderLists=me,x.shadowMap=Ie,x.state=be,x.info=Ue}Oe();const ae=new $v(x,R);this.xr=ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=oe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=oe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(W,S,!1))},this.getSize=function(P){return P.set(W,S)},this.setSize=function(P,F,V=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,S=F,t.width=Math.floor(P*H),t.height=Math.floor(F*H),V===!0&&(t.style.width=P+"px",t.style.height=F+"px"),this.setViewport(0,0,P,F)},this.getDrawingBufferSize=function(P){return P.set(W*H,S*H).floor()},this.setDrawingBufferSize=function(P,F,V){W=P,S=F,H=V,t.width=Math.floor(P*V),t.height=Math.floor(F*V),this.setViewport(0,0,P,F)},this.getCurrentViewport=function(P){return P.copy(v)},this.getViewport=function(P){return P.copy(U)},this.setViewport=function(P,F,V,j){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,F,V,j),be.viewport(v.copy(U).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(K)},this.setScissor=function(P,F,V,j){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,F,V,j),be.scissor(b.copy(K).multiplyScalar(H).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(P){be.setScissorTest(I=P)},this.setOpaqueSort=function(P){N=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(P=!0,F=!0,V=!0){let j=0;if(P){let q=!1;if(A!==null){const ue=A.texture.format;q=ue===_c||ue===gc||ue===mc}if(q){const ue=A.texture.type,xe=ue===ui||ue===Wi||ue===xr||ue===Ss||ue===dc||ue===fc,ve=Le.getClearColor(),Ee=Le.getClearAlpha(),Ce=ve.r,Re=ve.g,Te=ve.b;xe?(f[0]=Ce,f[1]=Re,f[2]=Te,f[3]=Ee,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=Ce,g[1]=Re,g[2]=Te,g[3]=Ee,R.clearBufferiv(R.COLOR,0,g))}else j|=R.COLOR_BUFFER_BIT}F&&(j|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(j|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),me.dispose(),Ge.dispose(),we.dispose(),w.dispose(),Q.dispose(),le.dispose(),dt.dispose(),J.dispose(),Pe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ms),ae.removeEventListener("sessionend",gr),Me.stop()};function _e(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=Ue.autoReset,F=Ie.enabled,V=Ie.autoUpdate,j=Ie.needsUpdate,q=Ie.type;Oe(),Ue.autoReset=P,Ie.enabled=F,Ie.autoUpdate=V,Ie.needsUpdate=j,Ie.type=q}function Fe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ct(P){const F=P.target;F.removeEventListener("dispose",ct),St(F)}function St(P){Zt(P),we.remove(P)}function Zt(P){const F=we.get(P).programs;F!==void 0&&(F.forEach(function(V){Pe.releaseProgram(V)}),P.isShaderMaterial&&Pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,F,V,j,q,ue){F===null&&(F=ce);const xe=q.isMesh&&q.matrixWorld.determinant()<0,ve=Un(P,F,V,j,q);be.setMaterial(j,xe);let Ee=V.index,Ce=1;if(j.wireframe===!0){if(Ee=fe.getWireframeAttribute(V),Ee===void 0)return;Ce=2}const Re=V.drawRange,Te=V.attributes.position;let qe=Re.start*Ce,Ye=(Re.start+Re.count)*Ce;ue!==null&&(qe=Math.max(qe,ue.start*Ce),Ye=Math.min(Ye,(ue.start+ue.count)*Ce)),Ee!==null?(qe=Math.max(qe,0),Ye=Math.min(Ye,Ee.count)):Te!=null&&(qe=Math.max(qe,0),Ye=Math.min(Ye,Te.count));const st=Ye-qe;if(st<0||st===1/0)return;dt.setup(q,j,ve,V,Ee);let vt,Qe=Be;if(Ee!==null&&(vt=ie.get(Ee),Qe=Ze,Qe.setIndex(vt)),q.isMesh)j.wireframe===!0?(be.setLineWidth(j.wireframeLinewidth*Z()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(q.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),be.setLineWidth(ke*Z()),q.isLineSegments?Qe.setMode(R.LINES):q.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else q.isPoints?Qe.setMode(R.POINTS):q.isSprite&&Qe.setMode(R.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Qe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ke=q._multiDrawStarts,Ct=q._multiDrawCounts,lt=q._multiDrawCount,_n=Ee?ie.get(Ee).bytesPerElement:1,bi=we.get(j).currentProgram.getUniforms();for(let An=0;An<lt;An++)bi.setValue(R,"_gl_DrawID",An),Qe.render(ke[An]/_n,Ct[An])}else if(q.isInstancedMesh)Qe.renderInstances(qe,st,q.count);else if(V.isInstancedBufferGeometry){const ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ct=Math.min(V.instanceCount,ke);Qe.renderInstances(qe,st,Ct)}else Qe.render(qe,st)};function ht(P,F,V){P.transparent===!0&&P.side===tn&&P.forceSinglePass===!1?(P.side=en,P.needsUpdate=!0,Dn(P,F,V),P.side=ai,P.needsUpdate=!0,Dn(P,F,V),P.side=tn):Dn(P,F,V)}this.compile=function(P,F,V=null){V===null&&(V=P),p=Ge.get(V),p.init(F),M.push(p),V.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),P!==V&&P.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const j=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ue=q.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const ve=ue[xe];ht(ve,V,q),j.add(ve)}else ht(ue,V,q),j.add(ue)}),M.pop(),p=null,j},this.compileAsync=function(P,F,V=null){const j=this.compile(P,F,V);return new Promise(q=>{function ue(){if(j.forEach(function(xe){we.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){q(P);return}setTimeout(ue,10)}oe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Vt=null;function En(P){Vt&&Vt(P)}function ms(){Me.stop()}function gr(){Me.start()}const Me=new rd;Me.setAnimationLoop(En),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(P){Vt=P,ae.setAnimationLoop(P),P===null?Me.stop():Me.start()},ae.addEventListener("sessionstart",ms),ae.addEventListener("sessionend",gr),this.render=function(P,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,F,A),p=Ge.get(P,M.length),p.init(F),M.push(p),te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),G.setFromProjectionMatrix(te),Y=this.localClippingEnabled,L=ge.init(this.clippingPlanes,Y),_=me.get(P,m.length),_.init(),m.push(_),ae.enabled===!0&&ae.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&ze(ue,F,-1/0,x.sortObjects)}ze(P,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,X),he=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,he&&Le.addToRenderList(_,P),this.info.render.frame++,L===!0&&ge.beginShadows();const V=p.state.shadowsArray;Ie.render(V,P,F),L===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,q=_.transmissive;if(p.setupLights(),F.isArrayCamera){const ue=F.cameras;if(q.length>0)for(let xe=0,ve=ue.length;xe<ve;xe++){const Ee=ue[xe];it(j,q,P,Ee)}he&&Le.render(P);for(let xe=0,ve=ue.length;xe<ve;xe++){const Ee=ue[xe];et(_,P,Ee,Ee.viewport)}}else q.length>0&&it(j,q,P,F),he&&Le.render(P),et(_,P,F);A!==null&&(O.updateMultisampleRenderTarget(A),O.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(x,P,F),dt.resetDefaultState(),k=-1,$=null,M.pop(),M.length>0?(p=M[M.length-1],L===!0&&ge.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ze(P,F,V,j){if(P.visible===!1)return;if(P.layers.test(F.layers)){if(P.isGroup)V=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(F);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){j&&ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(te);const xe=le.update(P),ve=P.material;ve.visible&&_.push(P,xe,ve,V,ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||G.intersectsObject(P))){const xe=le.update(P),ve=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ee.copy(P.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ee.copy(xe.boundingSphere.center)),ee.applyMatrix4(P.matrixWorld).applyMatrix4(te)),Array.isArray(ve)){const Ee=xe.groups;for(let Ce=0,Re=Ee.length;Ce<Re;Ce++){const Te=Ee[Ce],qe=ve[Te.materialIndex];qe&&qe.visible&&_.push(P,xe,qe,V,ee.z,Te)}}else ve.visible&&_.push(P,xe,ve,V,ee.z,null)}}const ue=P.children;for(let xe=0,ve=ue.length;xe<ve;xe++)ze(ue[xe],F,V,j)}function et(P,F,V,j){const q=P.opaque,ue=P.transmissive,xe=P.transparent;p.setupLightsView(V),L===!0&&ge.setGlobalState(x.clippingPlanes,V),j&&be.viewport(v.copy(j)),q.length>0&&Nt(q,F,V),ue.length>0&&Nt(ue,F,V),xe.length>0&&Nt(xe,F,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function it(P,F,V,j){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Yi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?vr:ui,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[j.id],xe=j.viewport||v;ue.setSize(xe.z,xe.w);const ve=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(D),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),he&&Le.render(V);const Ee=x.toneMapping;x.toneMapping=Ei;const Ce=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),L===!0&&ge.setGlobalState(x.clippingPlanes,j),Nt(P,V,j),O.updateMultisampleRenderTarget(ue),O.updateRenderTargetMipmap(ue),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Te=0,qe=F.length;Te<qe;Te++){const Ye=F[Te],st=Ye.object,vt=Ye.geometry,Qe=Ye.material,ke=Ye.group;if(Qe.side===tn&&st.layers.test(j.layers)){const Ct=Qe.side;Qe.side=en,Qe.needsUpdate=!0,Qt(st,V,j,vt,Qe,ke),Qe.side=Ct,Qe.needsUpdate=!0,Re=!0}}Re===!0&&(O.updateMultisampleRenderTarget(ue),O.updateRenderTargetMipmap(ue))}x.setRenderTarget(ve),x.setClearColor(D,z),Ce!==void 0&&(j.viewport=Ce),x.toneMapping=Ee}function Nt(P,F,V){const j=F.isScene===!0?F.overrideMaterial:null;for(let q=0,ue=P.length;q<ue;q++){const xe=P[q],ve=xe.object,Ee=xe.geometry,Ce=j===null?xe.material:j,Re=xe.group;ve.layers.test(V.layers)&&Qt(ve,F,V,Ee,Ce,Re)}}function Qt(P,F,V,j,q,ue){P.onBeforeRender(x,F,V,j,q,ue),P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(x,F,V,j,P,ue),q.transparent===!0&&q.side===tn&&q.forceSinglePass===!1?(q.side=en,q.needsUpdate=!0,x.renderBufferDirect(V,F,j,q,P,ue),q.side=ai,q.needsUpdate=!0,x.renderBufferDirect(V,F,j,q,P,ue),q.side=tn):x.renderBufferDirect(V,F,j,q,P,ue),P.onAfterRender(x,F,V,j,q,ue)}function Dn(P,F,V){F.isScene!==!0&&(F=ce);const j=we.get(P),q=p.state.lights,ue=p.state.shadowsArray,xe=q.state.version,ve=Pe.getParameters(P,q.state,ue,F,V),Ee=Pe.getProgramCacheKey(ve);let Ce=j.programs;j.environment=P.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(P.isMeshStandardMaterial?Q:w).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?F.environmentRotation:P.envMapRotation,Ce===void 0&&(P.addEventListener("dispose",ct),Ce=new Map,j.programs=Ce);let Re=Ce.get(Ee);if(Re!==void 0){if(j.currentProgram===Re&&j.lightsStateVersion===xe)return gs(P,ve),Re}else ve.uniforms=Pe.getUniforms(P),P.onBeforeCompile(ve,x),Re=Pe.acquireProgram(ve,Ee),Ce.set(Ee,Re),j.uniforms=ve.uniforms;const Te=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Te.clippingPlanes=ge.uniform),gs(P,ve),j.needsLights=So(P),j.lightsStateVersion=xe,j.needsLights&&(Te.ambientLightColor.value=q.state.ambient,Te.lightProbe.value=q.state.probe,Te.directionalLights.value=q.state.directional,Te.directionalLightShadows.value=q.state.directionalShadow,Te.spotLights.value=q.state.spot,Te.spotLightShadows.value=q.state.spotShadow,Te.rectAreaLights.value=q.state.rectArea,Te.ltc_1.value=q.state.rectAreaLTC1,Te.ltc_2.value=q.state.rectAreaLTC2,Te.pointLights.value=q.state.point,Te.pointLightShadows.value=q.state.pointShadow,Te.hemisphereLights.value=q.state.hemi,Te.directionalShadowMap.value=q.state.directionalShadowMap,Te.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Te.spotShadowMap.value=q.state.spotShadowMap,Te.spotLightMatrix.value=q.state.spotLightMatrix,Te.spotLightMap.value=q.state.spotLightMap,Te.pointShadowMap.value=q.state.pointShadowMap,Te.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Re,j.uniformsList=null,Re}function $n(P){if(P.uniformsList===null){const F=P.currentProgram.getUniforms();P.uniformsList=ra.seqWithValue(F.seq,P.uniforms)}return P.uniformsList}function gs(P,F){const V=we.get(P);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Un(P,F,V,j,q){F.isScene!==!0&&(F=ce),O.resetTextureUnits();const ue=F.fog,xe=j.isMeshStandardMaterial?F.environment:null,ve=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:nn,Ee=(j.isMeshStandardMaterial?Q:w).get(j.envMap||xe),Ce=j.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Re=!!V.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Te=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,Ye=!!V.morphAttributes.color;let st=Ei;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(st=x.toneMapping);const vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=vt!==void 0?vt.length:0,ke=we.get(j),Ct=p.state.lights;if(L===!0&&(Y===!0||P!==$)){const On=P===$&&j.id===k;ge.setState(j,P,On)}let lt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ct.state.version||ke.outputColorSpace!==ve||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==Ee||j.fog===!0&&ke.fog!==ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ge.numPlanes||ke.numIntersection!==ge.numIntersection)||ke.vertexAlphas!==Ce||ke.vertexTangents!==Re||ke.morphTargets!==Te||ke.morphNormals!==qe||ke.morphColors!==Ye||ke.toneMapping!==st||ke.morphTargetsCount!==Qe)&&(lt=!0):(lt=!0,ke.__version=j.version);let _n=ke.currentProgram;lt===!0&&(_n=Dn(j,F,q));let bi=!1,An=!1,nh=!1;const zt=_n.getUniforms(),Gi=ke.uniforms;if(be.useProgram(_n.program)&&(bi=!0,An=!0,nh=!0),j.id!==k&&(k=j.id,An=!0),bi||$!==P){de.reverseDepthBuffer?(ne.copy(P.projectionMatrix),Sm(ne),bm(ne),zt.setValue(R,"projectionMatrix",ne)):zt.setValue(R,"projectionMatrix",P.projectionMatrix),zt.setValue(R,"viewMatrix",P.matrixWorldInverse);const On=zt.map.cameraPosition;On!==void 0&&On.setValue(R,se.setFromMatrixPosition(P.matrixWorld)),de.logarithmicDepthBuffer&&zt.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&zt.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),$!==P&&($=P,An=!0,nh=!0)}if(q.isSkinnedMesh){zt.setOptional(R,q,"bindMatrix"),zt.setOptional(R,q,"bindMatrixInverse");const On=q.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),zt.setValue(R,"boneTexture",On.boneTexture,O))}q.isBatchedMesh&&(zt.setOptional(R,q,"batchingTexture"),zt.setValue(R,"batchingTexture",q._matricesTexture,O),zt.setOptional(R,q,"batchingIdTexture"),zt.setValue(R,"batchingIdTexture",q._indirectTexture,O),zt.setOptional(R,q,"batchingColorTexture"),q._colorsTexture!==null&&zt.setValue(R,"batchingColorTexture",q._colorsTexture,O));const ih=V.morphAttributes;if((ih.position!==void 0||ih.normal!==void 0||ih.color!==void 0)&&We.update(q,V,_n),(An||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,zt.setValue(R,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Gi.envMap.value=Ee,Gi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(Gi.envMapIntensity.value=F.environmentIntensity),An&&(zt.setValue(R,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&_s(Gi,nh),ue&&j.fog===!0&&ye.refreshFogUniforms(Gi,ue),ye.refreshMaterialUniforms(Gi,j,H,S,p.state.transmissionRenderTarget[P.id]),ra.upload(R,$n(ke),Gi,O)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ra.upload(R,$n(ke),Gi,O),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&zt.setValue(R,"center",q.center),zt.setValue(R,"modelViewMatrix",q.modelViewMatrix),zt.setValue(R,"normalMatrix",q.normalMatrix),zt.setValue(R,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const On=j.uniformsGroups;for(let sh=0,FE=On.length;sh<FE;sh++){const f0=On[sh];J.update(f0,_n),J.bind(f0,_n)}}return _n}function _s(P,F){P.ambientLightColor.needsUpdate=F,P.lightProbe.needsUpdate=F,P.directionalLights.needsUpdate=F,P.directionalLightShadows.needsUpdate=F,P.pointLights.needsUpdate=F,P.pointLightShadows.needsUpdate=F,P.spotLights.needsUpdate=F,P.spotLightShadows.needsUpdate=F,P.rectAreaLights.needsUpdate=F,P.hemisphereLights.needsUpdate=F}function So(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,F,V){we.get(P.texture).__webglTexture=F,we.get(P.depthTexture).__webglTexture=V;const j=we.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=V===void 0,j.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,F){const V=we.get(P);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(P,F=0,V=0){A=P,T=F,E=V;let j=!0,q=null,ue=!1,xe=!1;if(P){const Ee=we.get(P);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(R.FRAMEBUFFER,null),j=!1;else if(Ee.__webglFramebuffer===void 0)O.setupRenderTarget(P);else if(Ee.__hasExternalTextures)O.rebindTextures(P,we.get(P.texture).__webglTexture,we.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Te=P.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&we.has(Te)&&(P.width!==Te.image.width||P.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(P)}}const Ce=P.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Re=we.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?q=Re[F][V]:q=Re[F],ue=!0):P.samples>0&&O.useMultisampledRTT(P)===!1?q=we.get(P).__webglMultisampledFramebuffer:Array.isArray(Re)?q=Re[V]:q=Re,v.copy(P.viewport),b.copy(P.scissor),C=P.scissorTest}else v.copy(U).multiplyScalar(H).floor(),b.copy(K).multiplyScalar(H).floor(),C=I;if(be.bindFramebuffer(R.FRAMEBUFFER,q)&&j&&be.drawBuffers(P,q),be.viewport(v),be.scissor(b),be.setScissorTest(C),ue){const Ee=we.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,V)}else if(xe){const Ee=we.get(P.texture),Ce=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Ce)}k=-1},this.readRenderTargetPixels=function(P,F,V,j,q,ue,xe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){be.bindFramebuffer(R.FRAMEBUFFER,ve);try{const Ee=P.texture,Ce=Ee.format,Re=Ee.type;if(!de.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=P.width-j&&V>=0&&V<=P.height-q&&R.readPixels(F,V,j,q,He.convert(Ce),He.convert(Re),ue)}finally{const Ee=A!==null?we.get(A).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(P,F,V,j,q,ue,xe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){const Ee=P.texture,Ce=Ee.format,Re=Ee.type;if(!de.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=P.width-j&&V>=0&&V<=P.height-q){be.bindFramebuffer(R.FRAMEBUFFER,ve);const Te=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Te),R.bufferData(R.PIXEL_PACK_BUFFER,ue.byteLength,R.STREAM_READ),R.readPixels(F,V,j,q,He.convert(Ce),He.convert(Re),0);const qe=A!==null?we.get(A).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,qe);const Ye=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Mm(R,Ye,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Te),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ue),R.deleteBuffer(Te),R.deleteSync(Ye),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,F=null,V=0){P.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-V),q=Math.floor(P.image.width*j),ue=Math.floor(P.image.height*j),xe=F!==null?F.x:0,ve=F!==null?F.y:0;O.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,xe,ve,q,ue),be.unbindTexture()},this.copyTextureToTexture=function(P,F,V=null,j=null,q=0){P.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],F=arguments[2],q=arguments[3]||0,V=null);let ue,xe,ve,Ee,Ce,Re;V!==null?(ue=V.max.x-V.min.x,xe=V.max.y-V.min.y,ve=V.min.x,Ee=V.min.y):(ue=P.image.width,xe=P.image.height,ve=0,Ee=0),j!==null?(Ce=j.x,Re=j.y):(Ce=0,Re=0);const Te=He.convert(F.format),qe=He.convert(F.type);O.setTexture2D(F,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const Ye=R.getParameter(R.UNPACK_ROW_LENGTH),st=R.getParameter(R.UNPACK_IMAGE_HEIGHT),vt=R.getParameter(R.UNPACK_SKIP_PIXELS),Qe=R.getParameter(R.UNPACK_SKIP_ROWS),ke=R.getParameter(R.UNPACK_SKIP_IMAGES),Ct=P.isCompressedTexture?P.mipmaps[q]:P.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ee),P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,q,Ce,Re,ue,xe,Te,qe,Ct.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,q,Ce,Re,Ct.width,Ct.height,Te,Ct.data):R.texSubImage2D(R.TEXTURE_2D,q,Ce,Re,ue,xe,Te,qe,Ct),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st),R.pixelStorei(R.UNPACK_SKIP_PIXELS,vt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke),q===0&&F.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(P,F,V=null,j=null,q=0){P.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,j=arguments[1]||null,P=arguments[2],F=arguments[3],q=arguments[4]||0);let ue,xe,ve,Ee,Ce,Re,Te,qe,Ye;const st=P.isCompressedTexture?P.mipmaps[q]:P.image;V!==null?(ue=V.max.x-V.min.x,xe=V.max.y-V.min.y,ve=V.max.z-V.min.z,Ee=V.min.x,Ce=V.min.y,Re=V.min.z):(ue=st.width,xe=st.height,ve=st.depth,Ee=0,Ce=0,Re=0),j!==null?(Te=j.x,qe=j.y,Ye=j.z):(Te=0,qe=0,Ye=0);const vt=He.convert(F.format),Qe=He.convert(F.type);let ke;if(F.isData3DTexture)O.setTexture3D(F,0),ke=R.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)O.setTexture2DArray(F,0),ke=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const Ct=R.getParameter(R.UNPACK_ROW_LENGTH),lt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),_n=R.getParameter(R.UNPACK_SKIP_PIXELS),bi=R.getParameter(R.UNPACK_SKIP_ROWS),An=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,st.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ee),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Re),P.isDataTexture||P.isData3DTexture?R.texSubImage3D(ke,q,Te,qe,Ye,ue,xe,ve,vt,Qe,st.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(ke,q,Te,qe,Ye,ue,xe,ve,vt,st.data):R.texSubImage3D(ke,q,Te,qe,Ye,ue,xe,ve,vt,Qe,st),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ct),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,lt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_n),R.pixelStorei(R.UNPACK_SKIP_ROWS,bi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,An),q===0&&F.generateMipmaps&&R.generateMipmap(ke),be.unbindTexture()},this.initRenderTarget=function(P){we.get(P).__webglFramebuffer===void 0&&O.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?O.setTextureCube(P,0):P.isData3DTexture?O.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?O.setTexture2DArray(P,0):O.setTexture2D(P,0),be.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,be.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yc?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Lo?"display-p3":"srgb"}}class Rl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lr extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new B;class Nr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cl extends Gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ys;const Dr=new B,Ks=new B,$s=new B,js=new Se,Ur=new Se,Ud=new Je,aa=new B,Or=new B,ca=new B,Od=new Se,Pl=new Se,Fd=new Se;class Bd extends At{constructor(e=new Cl){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dd(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new Nr(n,3,0,!1)),Ys.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Ud.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-$s.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;la(aa.set(-.5,-.5,0),$s,o,Ks,s,r),la(Or.set(.5,-.5,0),$s,o,Ks,s,r),la(ca.set(.5,.5,0),$s,o,Ks,s,r),Od.set(0,0),Pl.set(1,0),Fd.set(1,1);let a=e.ray.intersectTriangle(aa,Or,ca,!1,Dr);if(a===null&&(la(Or.set(-.5,.5,0),$s,o,Ks,s,r),Pl.set(0,1),a=e.ray.intersectTriangle(aa,ca,Or,!1,Dr),a===null))return;const c=e.ray.origin.distanceTo(Dr);c<e.near||c>e.far||t.push({distance:c,point:Dr.clone(),uv:Cn.getInterpolation(Dr,aa,Or,ca,Od,Pl,Fd,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function la(i,e,t,n,s,r){js.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ur.x=r*js.x-s*js.y,Ur.y=s*js.x+r*js.y):Ur.copy(js),i.copy(e),i.x+=Ur.x,i.y+=Ur.y,i.applyMatrix4(Ud)}const kd=new B,zd=new mt,Hd=new mt,ey=new B,Gd=new Je,ua=new B,Il=new Jn,Vd=new Je,Ll=new Vo;class ty extends pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ua),this.boundingBox.expandByPoint(ua)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ua),this.boundingSphere.expandByPoint(ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Il.copy(this.boundingSphere),Il.applyMatrix4(s),e.ray.intersectsSphere(Il)!==!1&&(Vd.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&Ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===G0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;zd.fromBufferAttribute(s.attributes.skinIndex,e),Hd.fromBufferAttribute(s.attributes.skinWeight,e),kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Hd.getComponent(r);if(o!==0){const a=zd.getComponent(r);Gd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ey.copy(kd).applyMatrix4(Gd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wd extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xd extends Xt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=hn,u=hn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qd=new Je,ny=new Je;class Nl{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ny;qd.multiplyMatrices(a,t[r]),qd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Nl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xd(t,e,e,Tn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wd),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class ha extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new Je,Yd=new Je,da=[],Kd=new jn,iy=new Je,Fr=new pe,Br=new Jn;class Dl extends pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,iy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Kd.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Kd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Br.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Yd.multiplyMatrices(n,Js),Fr.matrixWorld=Yd,Fr.raycast(e,da);for(let o=0,a=da.length;o<a;o++){const c=da[o];c.instanceId=r,c.object=this,t.push(c)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xd(new Float32Array(s*this.count),s,this.count,pc,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ul extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fa=new B,pa=new B,$d=new Je,kr=new Vo,ma=new Jn,Ol=new B,jd=new B;class ga extends At{constructor(e=new Ut,t=new Ul){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fa.fromBufferAttribute(t,s-1),pa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fa.distanceTo(pa);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;$d.copy(s).invert(),kr.copy(e.ray).applyMatrix4($d);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=u.getX(_),M=u.getX(_+1),x=_a(this,e,kr,c,m,M);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=_a(this,e,kr,c,_,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=_a(this,e,kr,c,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=_a(this,e,kr,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _a(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(fa.fromBufferAttribute(o,s),pa.fromBufferAttribute(o,r),t.distanceSqToSegment(fa,pa,Ol,jd)>n)return;Ol.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ol);if(!(c<e.near||c>e.far))return{distance:c,point:jd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Jd=new B,Zd=new B;class sy extends ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Jd.fromBufferAttribute(t,s),Zd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jd.distanceTo(Zd);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ry extends ga{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xa extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qd=new Je,Fl=new Vo,va=new Jn,ya=new B;class Bl extends At{constructor(e=new Ut,t=new xa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Qd.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(Qd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);ya.fromBufferAttribute(h,p),ef(ya,p,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ya.fromBufferAttribute(h,g),ef(ya,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ef(i,e,t,n,s,r,o){const a=Fl.distanceSqToPoint(i);if(a<t){const c=new B;Fl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class is extends Xt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Se:new B);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new B,s=[],r=[],o=[],a=new B,c=new Je;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kl extends Qn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oy extends kl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ma=new B,Hl=new zl,Gl=new zl,Vl=new zl;class ay extends Qn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ma.subVectors(s[0],s[1]).add(s[0]),l=Ma);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Hl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,p),Gl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,p),Vl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Gl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Vl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Hl.calc(c),Gl.calc(c),Vl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function tf(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function cy(i,e){const t=1-i;return t*t*e}function ly(i,e){return 2*(1-i)*i*e}function uy(i,e){return i*i*e}function zr(i,e,t,n){return cy(i,e)+ly(i,t)+uy(i,n)}function hy(i,e){const t=1-i;return t*t*t*e}function dy(i,e){const t=1-i;return 3*t*t*i*e}function fy(i,e){return 3*(1-i)*i*i*e}function py(i,e){return i*i*i*e}function Hr(i,e,t,n,s){return hy(i,e)+dy(i,t)+fy(i,n)+py(i,s)}class nf extends Qn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class my extends Qn{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y),Hr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sf extends Qn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gy extends Qn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rf extends Qn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _y extends Qn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y),zr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class of extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(tf(a,c.x,l.x,u.x,h.x),tf(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Se().fromArray(s))}return this}}var Wl=Object.freeze({__proto__:null,ArcCurve:oy,CatmullRomCurve3:ay,CubicBezierCurve:nf,CubicBezierCurve3:my,EllipseCurve:kl,LineCurve:sf,LineCurve3:gy,QuadraticBezierCurve:rf,QuadraticBezierCurve3:_y,SplineCurve:of});class xy extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Wl[s.type]().fromJSON(s))}return this}}class Xl extends xy{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sf(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new rf(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new nf(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new of(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new kl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gr extends Ut{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Wt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new B,d=new Se,f=new B,g=new B,_=new B;let p=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=t;M++){const x=n+M*u*s,y=Math.sin(x),T=Math.cos(x);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*T,o.push(h.x,h.y,h.z),d.x=M/t,d.y=E/(e.length-1),a.push(d.x,d.y);const A=c[3*E+0]*y,k=c[3*E+1],$=c[3*E+0]*T;l.push(A,k,$)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){const y=x+M*e.length,T=y,E=y+e.length,A=y+e.length+1,k=y+1;r.push(T,E,k),r.push(A,k,E)}this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("uv",new bt(a,2)),this.setAttribute("normal",new bt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.points,e.segments,e.phiStart,e.phiLength)}}class pn extends Gr{constructor(e=1,t=1,n=4,s=8){const r=new Xl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new pn(e.radius,e.length,e.capSegments,e.radialSegments)}}class ft extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function M(){const y=new B,T=new B;let E=0;const A=(t-e)/n;for(let k=0;k<=r;k++){const $=[],v=k/r,b=v*(t-e)+e;for(let C=0;C<=s;C++){const D=C/s,z=D*c+a,W=Math.sin(z),S=Math.cos(z);T.x=b*W,T.y=-v*n+p,T.z=b*S,h.push(T.x,T.y,T.z),y.set(W,A,S).normalize(),d.push(y.x,y.y,y.z),f.push(D,1-v),$.push(g++)}_.push($)}for(let k=0;k<s;k++)for(let $=0;$<r;$++){const v=_[$][k],b=_[$+1][k],C=_[$+1][k+1],D=_[$][k+1];e>0&&(u.push(v,b,D),E+=3),t>0&&(u.push(b,C,D),E+=3)}l.addGroup(m,E,0),m+=E}function x(y){const T=g,E=new Se,A=new B;let k=0;const $=y===!0?e:t,v=y===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),g++;const b=g;for(let C=0;C<=s;C++){const z=C/s*c+a,W=Math.cos(z),S=Math.sin(z);A.x=$*S,A.y=p*v,A.z=$*W,h.push(A.x,A.y,A.z),d.push(0,v,0),E.x=W*.5+.5,E.y=S*.5*v+.5,f.push(E.x,E.y),g++}for(let C=0;C<s;C++){const D=T+C,z=b+C;y===!0?u.push(z,z+1,D):u.push(z+1,z,D),k+=3}l.addGroup(m,k,y===!0?1:2),m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ln extends ft{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ln(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sa extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new B,y=new B,T=new B;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],y),f(t[E+2],T),c(x,y,T,M)}function c(M,x,y,T){const E=T+1,A=[];for(let k=0;k<=E;k++){A[k]=[];const $=M.clone().lerp(y,k/E),v=x.clone().lerp(y,k/E),b=E-k;for(let C=0;C<=b;C++)C===0&&k===E?A[k][C]=$:A[k][C]=$.clone().lerp(v,C/b)}for(let k=0;k<E;k++)for(let $=0;$<2*(E-k)-1;$++){const v=Math.floor($/2);$%2===0?(d(A[k][v+1]),d(A[k+1][v]),d(A[k][v])):(d(A[k][v+1]),d(A[k+1][v+1]),d(A[k+1][v]))}}function l(M){const x=new B;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function u(){const M=new B;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const y=p(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;o.push(y,1-T)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const x=o[M+0],y=o[M+2],T=o[M+4],E=Math.max(x,y,T),A=Math.min(x,y,T);E>.9&&A<.1&&(x<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const y=M*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const M=new B,x=new B,y=new B,T=new B,E=new Se,A=new Se,k=new Se;for(let $=0,v=0;$<r.length;$+=9,v+=6){M.set(r[$+0],r[$+1],r[$+2]),x.set(r[$+3],r[$+4],r[$+5]),y.set(r[$+6],r[$+7],r[$+8]),E.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),k.set(o[v+4],o[v+5]),T.copy(M).add(x).add(y).divideScalar(3);const b=p(T);_(E,v+0,M,b),_(A,v+2,x,b),_(k,v+4,y,b)}}function _(M,x,y,T){T<0&&M.x===1&&(o[x]=M.x-1),y.x===0&&y.z===0&&(o[x]=T/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.vertices,e.indices,e.radius,e.details)}}class Vr extends Xl{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Xl().fromJSON(s))}return this}}const vy={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=af(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=wy(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Wr(r,o,t,a,c,f,0),o}};function af(i,e,t,n,s){let r,o;if(s===Uy(i,e,t,n)>0)for(r=e;r<t;r+=n)o=uf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=uf(r,i[r],i[r+1],o);return o&&ba(o,o.next)&&(qr(o),o=o.next),o}function ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ba(t,t.next)||It(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Cy(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?My(i,n,s,r):yy(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),qr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Sy(ss(i),e,t),Wr(i,e,t,n,s,r,2)):o===2&&by(i,e,t,n,s,r):Wr(ss(i),e,t,n,s,r,1);break}}}function yy(i){const e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Zs(s,a,r,c,o,l,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function My(i,e,t,n){const s=i.prev,r=i,o=i.next;if(It(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,p=u>h?u>d?u:d:h>d?h:d,m=ql(f,g,e,t,n),M=ql(_,p,e,t,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=m&&y&&y.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Zs(a,u,c,h,l,d,x.x,x.y)&&It(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Zs(a,u,c,h,l,d,y.x,y.y)&&It(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Zs(a,u,c,h,l,d,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Zs(a,u,c,h,l,d,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Sy(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ba(s,r)&&cf(s,n,n.next,r)&&Xr(s,r)&&Xr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),qr(n),qr(n.next),n=i=r),n=n.next}while(n!==i);return ss(n)}function by(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ly(o,a)){let c=lf(o,a);o=ss(o,o.next),c=ss(c,c.next),Wr(o,e,t,n,s,r,0),Wr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wy(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=af(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Iy(l));for(s.sort(Ey),r=0;r<s.length;r++)t=Ay(s[r],t);return t}function Ey(i,e){return i.x-e.x}function Ay(i,e){const t=Ty(i,e);if(!t)return e;const n=lf(t,i);return ss(n,n.next),ss(t,t.next)}function Ty(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Zs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Xr(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Ry(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Ry(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function Cy(i,e,t,n){let s=i;do s.z===0&&(s.z=ql(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Py(s)}function Py(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function ql(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Iy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ly(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ny(i,e)&&(Xr(i,e)&&Xr(e,i)&&Dy(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||ba(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ba(i,e){return i.x===e.x&&i.y===e.y}function cf(i,e,t,n){const s=Ea(It(i,e,t)),r=Ea(It(i,e,n)),o=Ea(It(t,n,i)),a=Ea(It(t,n,e));return!!(s!==r&&o!==a||s===0&&wa(i,t,e)||r===0&&wa(i,n,e)||o===0&&wa(t,i,n)||a===0&&wa(t,e,n))}function wa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ea(i){return i>0?1:i<0?-1:0}function Ny(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xr(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function Dy(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function lf(i,e){const t=new Yl(i.i,i.x,i.y),n=new Yl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uf(i,e,t,n){const s=new Yl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Uy(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Yr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Yr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];hf(e),df(n,e);let o=e.length;t.forEach(hf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,df(n,t[c]);const a=vy.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function hf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function df(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Qs extends Ut{constructor(e=new Vr([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Oy;let x,y=!1,T,E,A,k;m&&(x=m.getSpacedPoints(u),y=!0,d=!1,T=m.computeFrenetFrames(u,!1),E=new B,A=new B,k=new B),d||(p=0,f=0,g=0,_=0);const $=a.extractPoints(l);let v=$.shape;const b=$.holes;if(!Yr.isClockWise(v)){v=v.reverse();for(let Z=0,R=b.length;Z<R;Z++){const re=b[Z];Yr.isClockWise(re)&&(b[Z]=re.reverse())}}const D=Yr.triangulateShape(v,b),z=v;for(let Z=0,R=b.length;Z<R;Z++){const re=b[Z];v=v.concat(re)}function W(Z,R,re){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(R,re)}const S=v.length,H=D.length;function N(Z,R,re){let oe,de,be;const Ue=Z.x-R.x,we=Z.y-R.y,O=re.x-Z.x,w=re.y-Z.y,Q=Ue*Ue+we*we,ie=Ue*w-we*O;if(Math.abs(ie)>Number.EPSILON){const fe=Math.sqrt(Q),le=Math.sqrt(O*O+w*w),Pe=R.x-we/fe,ye=R.y+Ue/fe,me=re.x-w/le,Ge=re.y+O/le,ge=((me-Pe)*w-(Ge-ye)*O)/(Ue*w-we*O);oe=Pe+Ue*ge-Z.x,de=ye+we*ge-Z.y;const Ie=oe*oe+de*de;if(Ie<=2)return new Se(oe,de);be=Math.sqrt(Ie/2)}else{let fe=!1;Ue>Number.EPSILON?O>Number.EPSILON&&(fe=!0):Ue<-Number.EPSILON?O<-Number.EPSILON&&(fe=!0):Math.sign(we)===Math.sign(w)&&(fe=!0),fe?(oe=-we,de=Ue,be=Math.sqrt(Q)):(oe=Ue,de=we,be=Math.sqrt(Q/2))}return new Se(oe/be,de/be)}const X=[];for(let Z=0,R=z.length,re=R-1,oe=Z+1;Z<R;Z++,re++,oe++)re===R&&(re=0),oe===R&&(oe=0),X[Z]=N(z[Z],z[re],z[oe]);const U=[];let K,I=X.concat();for(let Z=0,R=b.length;Z<R;Z++){const re=b[Z];K=[];for(let oe=0,de=re.length,be=de-1,Ue=oe+1;oe<de;oe++,be++,Ue++)be===de&&(be=0),Ue===de&&(Ue=0),K[oe]=N(re[oe],re[be],re[Ue]);U.push(K),I=I.concat(K)}for(let Z=0;Z<p;Z++){const R=Z/p,re=f*Math.cos(R*Math.PI/2),oe=g*Math.sin(R*Math.PI/2)+_;for(let de=0,be=z.length;de<be;de++){const Ue=W(z[de],X[de],oe);te(Ue.x,Ue.y,-re)}for(let de=0,be=b.length;de<be;de++){const Ue=b[de];K=U[de];for(let we=0,O=Ue.length;we<O;we++){const w=W(Ue[we],K[we],oe);te(w.x,w.y,-re)}}}const G=g+_;for(let Z=0;Z<S;Z++){const R=d?W(v[Z],I[Z],G):v[Z];y?(A.copy(T.normals[0]).multiplyScalar(R.x),E.copy(T.binormals[0]).multiplyScalar(R.y),k.copy(x[0]).add(A).add(E),te(k.x,k.y,k.z)):te(R.x,R.y,0)}for(let Z=1;Z<=u;Z++)for(let R=0;R<S;R++){const re=d?W(v[R],I[R],G):v[R];y?(A.copy(T.normals[Z]).multiplyScalar(re.x),E.copy(T.binormals[Z]).multiplyScalar(re.y),k.copy(x[Z]).add(A).add(E),te(k.x,k.y,k.z)):te(re.x,re.y,h/u*Z)}for(let Z=p-1;Z>=0;Z--){const R=Z/p,re=f*Math.cos(R*Math.PI/2),oe=g*Math.sin(R*Math.PI/2)+_;for(let de=0,be=z.length;de<be;de++){const Ue=W(z[de],X[de],oe);te(Ue.x,Ue.y,h+re)}for(let de=0,be=b.length;de<be;de++){const Ue=b[de];K=U[de];for(let we=0,O=Ue.length;we<O;we++){const w=W(Ue[we],K[we],oe);y?te(w.x,w.y+x[u-1].y,x[u-1].x+re):te(w.x,w.y,h+re)}}}L(),Y();function L(){const Z=s.length/3;if(d){let R=0,re=S*R;for(let oe=0;oe<H;oe++){const de=D[oe];se(de[2]+re,de[1]+re,de[0]+re)}R=u+p*2,re=S*R;for(let oe=0;oe<H;oe++){const de=D[oe];se(de[0]+re,de[1]+re,de[2]+re)}}else{for(let R=0;R<H;R++){const re=D[R];se(re[2],re[1],re[0])}for(let R=0;R<H;R++){const re=D[R];se(re[0]+S*u,re[1]+S*u,re[2]+S*u)}}n.addGroup(Z,s.length/3-Z,0)}function Y(){const Z=s.length/3;let R=0;ne(z,R),R+=z.length;for(let re=0,oe=b.length;re<oe;re++){const de=b[re];ne(de,R),R+=de.length}n.addGroup(Z,s.length/3-Z,1)}function ne(Z,R){let re=Z.length;for(;--re>=0;){const oe=re;let de=re-1;de<0&&(de=Z.length-1);for(let be=0,Ue=u+p*2;be<Ue;be++){const we=S*be,O=S*(be+1),w=R+oe+we,Q=R+de+we,ie=R+de+O,fe=R+oe+O;ee(w,Q,ie,fe)}}}function te(Z,R,re){c.push(Z),c.push(R),c.push(re)}function se(Z,R,re){ce(Z),ce(R),ce(re);const oe=s.length/3,de=M.generateTopUV(n,s,oe-3,oe-2,oe-1);he(de[0]),he(de[1]),he(de[2])}function ee(Z,R,re,oe){ce(Z),ce(R),ce(oe),ce(R),ce(re),ce(oe);const de=s.length/3,be=M.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);he(be[0]),he(be[1]),he(be[3]),he(be[1]),he(be[2]),he(be[3])}function ce(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function he(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wl[s.type]().fromJSON(s)),new Qs(n,e.options)}}const Oy={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,c),new Se(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Se(o,1-c),new Se(l,1-h),new Se(d,1-g),new Se(_,1-m)]:[new Se(a,1-c),new Se(u,1-h),new Se(f,1-g),new Se(p,1-m)]}};function Fy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Kl extends Sa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kl(e.radius,e.detail)}}class $l extends Sa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $l(e.radius,e.detail)}}class Ke extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new B,d=new B,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const M=[],x=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const E=T/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(E+y,1-x),M.push(l++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const x=u[m][M+1],y=u[m][M],T=u[m+1][M],E=u[m+1][M+1];(m!==0||o>0)&&f.push(x,y,E),(m!==n-1||c<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class In extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new B,h=new B,d=new B;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ve extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ei extends Ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function By(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ky(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ff(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function pf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Kr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zy extends Kr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Es,endingEnd:Es}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case As:r=e,a=2*t-n;break;case Io:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case As:o=e,c=2*n-t;break;case Io:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+M*o[l+T]+x*o[c+T]+y*o[h+T];return r}}class mf extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Hy extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case Wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&By(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ti.prototype.TimeBufferType=Float32Array,ti.prototype.ValueBufferType=Float32Array,ti.prototype.DefaultInterpolation=Mr;class er extends ti{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="bool",er.prototype.ValueBufferType=Array,er.prototype.DefaultInterpolation=yr,er.prototype.InterpolantFactoryMethodLinear=void 0,er.prototype.InterpolantFactoryMethodSmooth=void 0;class gf extends ti{}gf.prototype.ValueTypeName="color";class tr extends ti{}tr.prototype.ValueTypeName="number";class Gy extends Kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Kt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class nr extends ti{InterpolantFactoryMethodLinear(e){return new Gy(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion",nr.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends ti{constructor(e,t,n){super(e,t,n)}}ir.prototype.ValueTypeName="string",ir.prototype.ValueBufferType=Array,ir.prototype.DefaultInterpolation=yr,ir.prototype.InterpolantFactoryMethodLinear=void 0,ir.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends ti{}sr.prototype.ValueTypeName="vector";class jl{constructor(e="",t=-1,n=[],s=Xc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Wy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ti.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=ky(c);c=ff(c,1,u),l=ff(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new tr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const p=[],m=[];pf(f,p,m,g),p.length!==0&&_.push(new h(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let M=0;M!==d[g].morphTargets.length;++M){const x=d[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}s.push(new tr(".morphTargetInfluence["+_+"]",p,m))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(sr,f+".position",d,"pos",s),n(nr,f+".quaternion",d,"rot",s),n(sr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return gf;case"quaternion":return nr;case"bool":case"boolean":return er;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vy(i.type);if(i.times===void 0){const t=[],n=[];pf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Xy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const qy=new Xy;class rr{constructor(e){this.manager=e!==void 0?e:qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class Yy extends Error{constructor(e,t){super(e),this.response=t}}class _f extends rr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Oi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=_i[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:x,value:y})=>{if(x)m.close();else{_+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,A=u.length;E<A;E++){const k=u[E];k.onProgress&&k.onProgress(T)}m.enqueue(y),M()}},x=>{m.error(x)})}}});return new Response(p)}else throw new Yy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Oi.add(e,l);const u=_i[e];delete _i[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=_i[e];if(u===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ky extends rr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Oi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=wr("img");function c(){u(),Oi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $y extends rr{constructor(e){super(e)}load(e,t,n,s){const r=new Xt,o=new Ky(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class $r extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ta extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Jl=new Je,xf=new B,vf=new B;class Zl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jy extends Zl{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Rs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jy extends $r{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yf=new Je,jr=new B,Ql=new B;class Zy extends Zl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Ql.copy(n.position),Ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ql),n.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf)}}class eu extends $r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qy extends Zl{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xi extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Qy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eM extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tM extends rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Oi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Oi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Oi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Oi.add(e,c),r.manager.itemStart(e)}}class nM{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Kt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,o,e,t,e,n),Kt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const tu="\\[\\]\\.:\\/",iM=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",sM="[^"+tu.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",nu),oM=/(WCOD+)?/.source.replace("WCOD",sM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),cM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),lM=new RegExp("^"+rM+oM+aM+cM+"$"),uM=["material","materials","bones","map"];class hM{constructor(e,t,n){const s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iM,"")}static parseTrackName(e){const t=lM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);uM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=hM,_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray],_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dM{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Es,endingEnd:Es};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=W0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case q0:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Xc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===X0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===V0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=As,s.endingEnd=As):(e?s.endingStart=this.zeroSlopeAtStart?As:Es:s.endingStart=Io,t?s.endingEnd=this.zeroSlopeAtEnd?As:Es:s.endingEnd=Io)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const fM=new Float32Array(1);class pM extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new nM(_t.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new mf(new Float32Array(2),new Float32Array(2),1,fM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?jl.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new dM(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?jl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa),(function(){var i="[native-gamepad-bridge]",e=typeof window.__p5NativeHost<"u"&&window.__p5NativeHost===!0||typeof window.webkit<"u"&&window.webkit&&window.webkit.messageHandlers;if(!e)return;var t={connected:!1,timestamp:0,buttons:[],axes:[]};function n(){return{pressed:!1,touched:!1,value:0}}function s(a){if(a==null)return n();if(typeof a=="boolean")return{pressed:a,touched:a,value:a?1:0};if(typeof a=="number"){var c=a>.5;return{pressed:c,touched:c,value:a}}if(typeof a=="object"){var l="p"in a?!!a.p:"pressed"in a?!!a.pressed:!1,u=typeof a.v=="number"?a.v:typeof a.value=="number"?a.value:l?1:0;return{pressed:l,touched:l,value:u}}return n()}function r(){for(var a=new Array(17),c=0;c<17;c++)a[c]=s(t.buttons&&t.buttons[c]);var l=[0,0,0,0];if(t.axes&&t.axes.length)for(var u=0;u<Math.min(4,t.axes.length);u++){var h=t.axes[u];l[u]=typeof h=="number"&&!isNaN(h)?h:0}return{id:"Native iOS Gamepad (GCController bridge)",index:0,connected:t.connected,timestamp:t.timestamp,mapping:"standard",axes:l,buttons:a,vibrationActuator:null,hapticActuators:[]}}window.__nativeGamepadLastRaw=null,window.__nativeGamepadUpdateCount=0,window.__nativeGamepadUpdate=function(a){a&&(t.buttons=Array.isArray(a.buttons)?a.buttons:[],t.axes=Array.isArray(a.axes)?a.axes:[],t.connected=!0,t.timestamp=typeof performance<"u"&&performance.now?performance.now():Date.now(),window.__nativeGamepadLastRaw=a,window.__nativeGamepadUpdateCount++)},window.__nativeGamepadConnection=function(a){var c=t.connected;if(t.connected=!!a,t.connected||(t.buttons=[],t.axes=[]),t.connected!==c){var l=t.connected?"gamepadconnected":"gamepaddisconnected",u=new Event(l);u.gamepad=r(),window.dispatchEvent(u)}};var o=typeof navigator.getGamepads=="function"?navigator.getGamepads.bind(navigator):null;navigator.getGamepads=function(){if(t.connected)return[r(),null,null,null];if(o)try{return o()}catch{return[null,null,null,null]}return[null,null,null,null]},window.__nativeGamepadBridgeReady=!0,console.log(i,"active: iOS host detected")})();const mM=60,gM=.5,_M=5e3,Mf=1e6,Sf=2e6;function xM(){const i=new Lr;i.background=new Xe(131850),i.add(new Ta(6328512,2105392,.55)),i.fog=new Rl(131850,Mf,Sf);const e=new xi(16777215,1.1);return e.position.set(40,30,20),i.add(e),i}function vM(){return new Gt(mM,window.innerWidth/window.innerHeight,gM,_M)}const iu=Object.freeze({maxThrottleAccel:18,reverseThrottleAccel:12,maxSpeed:60,surfaceSpeed:1e3/3.6,surfaceBoostSpeed:2e3/3.6,yawRate:1.4,pitchRate:1.4,rollRate:2,arcadeDampingRate:.6,hackRadius:8}),un={...iu};function yM(){Object.assign(un,iu)}const MM=15659509,SM=8161430,bM=1259630,wM=3108832,EM=16106818,bf=4828159;function wf(i){const e=new Vr;i==="stripe"?(e.moveTo(.15,.34),e.lineTo(.7,.13),e.lineTo(.7,.02),e.lineTo(.15,.17)):(e.moveTo(.15,.17),e.lineTo(.7,.02),e.lineTo(.7,-.32),e.lineTo(.15,-.48)),e.closePath();const t=new Qs(e,{depth:.045,bevelEnabled:!1});return t.rotateX(Math.PI/2),t.translate(0,.0225,0),t}function AM(){const i=new Vr;i.moveTo(.26,.02),i.lineTo(-.06,.48),i.lineTo(-.38,.12),i.lineTo(-.34,-.12),i.lineTo(-.08,-.32),i.closePath();const e=new Qs(i,{depth:.05,bevelEnabled:!1});return e.rotateY(-Math.PI/2),e.translate(.025,0,0),e}function TM(i,e){const t=new Vr;t.moveTo(0,0),t.lineTo(-.06,e),t.lineTo(-.46,0),t.closePath();const n=new Qs(t,{depth:.035,bevelEnabled:!1});return n.rotateY(-Math.PI/2),n.translate(.0175,0,0),n}function RM(){const i=new rt,e=new Ve({color:MM,roughness:.42,metalness:.45,emissive:790550,side:tn}),t=new Ve({color:SM,roughness:.6,metalness:.5,emissive:329740,side:tn}),n=new Ve({color:bM,roughness:.08,metalness:.6,emissive:662586,side:tn}),s=new Ve({color:wM,roughness:.35,metalness:.45,emissive:662602,side:tn}),r=new Ve({color:EM,roughness:.3,metalness:.55,emissive:2759936,side:tn}),o=new Ve({color:bf,roughness:.3,metalness:.2,emissive:bf,emissiveIntensity:1.4,side:tn}),a=new ft(.22,.18,1.05,6);a.rotateX(Math.PI/2);const c=new pe(a,e);c.scale.set(1.3,.7,1),c.position.z=-.05,i.add(c);const l=new ln(.22,.92,6);l.rotateX(Math.PI/2);const u=new pe(l,e);u.scale.set(1.3,.7,1),u.position.z=.935,i.add(u);const h=new pe(new gt(.42,.09,.92),t);h.position.set(0,-.16,-.05),i.add(h);const d=new pe(new Ke(.19,18,12),n);d.scale.set(.86,.6,1.7),d.position.set(0,.13,.22),i.add(d);const f=new pe(TM(.46,.36),e);f.position.set(0,.12,-.2),i.add(f);const g=new pe(new gt(.04,.08,.13),r);g.position.set(0,.47,-.29),i.add(g);for(const m of[1,-1]){const M=new rt;M.add(new pe(wf("main"),e)),M.add(new pe(wf("stripe"),s));const x=new pe(AM(),e);x.position.set(.69,0,-.08),M.add(x);const y=new pe(new gt(.06,.5,.05),s);y.position.set(.69,.08,.12),y.rotation.x=-.5,M.add(y);const T=new ft(.028,.04,.56,10);T.rotateX(Math.PI/2);const E=new pe(T,t);E.position.set(.69,0,.3),M.add(E);const A=new pe(new ft(.03,.02,.15,10),r);A.rotation.x=Math.PI/2,A.position.set(.69,0,.62),M.add(A);const k=new pe(new gt(.16,.13,.4),o);k.position.set(.28,-.02,-.28),M.add(k),M.position.set(m*.16,0,-.05),m===-1&&(M.scale.x=-1),M.rotation.z=m*.14,i.add(M)}const _=new cn({color:9425151,transparent:!0,opacity:.85,blending:ci,depthWrite:!1}),p=[];for(const m of[-.12,.12]){const M=new ft(.12,.095,.36,8);M.rotateX(Math.PI/2);const x=new pe(M,t);x.position.set(m,-.03,-.66),i.add(x);const y=new ft(.082,.082,.07,8);y.rotateX(Math.PI/2);const T=new pe(y,o);T.position.set(m,-.03,-.82),i.add(T);const E=new ln(.08,.38,14);E.rotateX(-Math.PI/2);const A=new pe(E,_);A.position.set(m,-.03,-1.04),A.visible=!1,p.push(A),i.add(A)}return{mesh:i,velocity:new B,arcadeDamping:!1,glows:p,glowMat:_,flame:0,braking:!0}}const su=new B,Ef=new Kt,Af=new B,CM=.25;function PM(i,e,t){ru(i.mesh.quaternion,su.set(1,0,0),e.pitch*un.pitchRate*t),ru(i.mesh.quaternion,su.set(0,1,0),e.yaw*un.yawRate*t),ru(i.mesh.quaternion,su.set(0,0,1),e.roll*un.rollRate*t),i.mesh.quaternion.normalize();const n=e.throttle>=CM;if(IM(i,n?e.throttle:0,t),!n){i.velocity.set(0,0,0),i.braking=!0;return}i.braking=!1,Af.set(0,0,1).applyQuaternion(i.mesh.quaternion);const s=i.speedLimit||un.maxSpeed,r=e.throttle*un.maxThrottleAccel*Math.max(1,s/iu.maxSpeed);if(i.velocity.addScaledVector(Af,r*t),i.arcadeDamping){const o=Math.exp(-un.arcadeDampingRate*t);i.velocity.multiplyScalar(o)}i.velocity.lengthSq()>s*s&&i.velocity.setLength(s),i.mesh.position.addScaledVector(i.velocity,t)}function IM(i,e,t){const n=e>0?e:0,s=n>i.flame?18:11;i.flame+=(n-i.flame)*Math.min(1,s*t),i.flame<.002&&(i.flame=0);const r=i.flame>0,o=r?.85+.15*Math.sin(performance.now()*.05):1;i.glowMat.opacity=.85*i.flame*o;for(const a of i.glows)a.visible=r,a.scale.set(i.flame,i.flame,(.4+i.flame)*o)}function ru(i,e,t){t!==0&&(Ef.setFromAxisAngle(e,t),i.multiply(Ef))}const ou=12e3,au=1200;function Tf(){const i=new Float32Array(ou*3),e=new Float32Array(ou*3);for(let r=0;r<ou;r++){const o=Math.random(),a=Math.random(),c=2*Math.PI*o,l=Math.acos(2*a-1),u=Math.sin(l),h=au*u*Math.cos(c),d=au*u*Math.sin(c),f=au*Math.cos(l);i[r*3+0]=h,i[r*3+1]=d,i[r*3+2]=f;const g=.85+Math.random()*.15,_=Math.random()*.1;e[r*3+0]=g-_,e[r*3+1]=g-_*.5,e[r*3+2]=g}const t=new Ut;t.setAttribute("position",new Dt(i,3)),t.setAttribute("color",new Dt(e,3));const n=new xa({size:1.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1}),s=new Bl(t,n);return s.frustumCulled=!1,s}function Rf(i,e){i.position.copy(e.position)}const cu=250,Zr={zNear:80,zFar:480,xHalf:70,yHalf:45},LM=1.2,NM=4.5,DM=.4;function Vn(i,e){return i+Math.random()*(e-i)}function UM(){return Math.random()<.5?-1:1}function OM(){const i=new Kl(1,0),e=new Ve({color:9074021,roughness:.95,metalness:.05,flatShading:!0}),t=new Dl(i,e,cu);t.frustumCulled=!1;const n=[],s=new Je,r=new Kt,o=new B,a=new B;for(let l=0;l<cu;l++){const u=Vn(LM,NM);a.set(Vn(-70,Zr.xHalf),Vn(-45,Zr.yHalf),Vn(Zr.zNear,Zr.zFar)),o.setScalar(u),r.setFromEuler(new $t(Vn(0,Math.PI*2),Vn(0,Math.PI*2),Vn(0,Math.PI*2))),s.compose(a,r,o),t.setMatrixAt(l,s),n.push({position:a.clone(),radius:u*1.05,spinAxis:new B(Vn(-1,1),Vn(-1,1),Vn(-1,1)).normalize(),spinRate:Vn(.05,DM)*UM(),rotation:r.clone()})}t.instanceMatrix.needsUpdate=!0;function c(l){const u=new Kt;for(let h=0;h<cu;h++){const d=n[h];u.setFromAxisAngle(d.spinAxis,d.spinRate*l),d.rotation.premultiply(u),o.setScalar(d.radius/1.05),s.compose(d.position,d.rotation,o),t.setMatrixAt(h,s)}t.instanceMatrix.needsUpdate=!0}return{mesh:t,instances:n,update:c,volume:{...Zr}}}const Cf=new B(0,0,700),lu=60;function FM(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#c97648"),s.addColorStop(.5,"#b15a30"),s.addColorStop(1,"#7a3a1c"),n.fillStyle=s,n.fillRect(0,0,1024,512);for(let o=0;o<320;o++){const a=Math.random()*1024,c=Math.random()*512,l=8+Math.random()*80,u=.05+Math.random()*.18,h=Math.random()<.65;n.beginPath(),n.fillStyle=h?`rgba(70, 30, 15, ${u})`:`rgba(240, 180, 130, ${u})`,n.arc(a,c,l,0,Math.PI*2),n.fill()}for(const o of[0,512]){const a=n.createRadialGradient(512,o,0,512,o,179.2);a.addColorStop(0,"rgba(230, 240, 245, 0.85)"),a.addColorStop(1,"rgba(230, 240, 245, 0)"),n.fillStyle=a,n.fillRect(0,0,1024,512)}const r=new is(t);return r.colorSpace=Pt,r}function BM(){const i=new Ke(lu,64,32),e=new Ve({map:FM(),roughness:.95,metalness:0}),t=new pe(i,e);t.position.copy(Cf);const n=.02;function s(r){t.rotation.y+=n*r}return{mesh:t,update:s}}const Qr=new B(-90,25,-330),eo=112,ni=2048,sn=1024,kM=1.015,zM=1.035,Pf=.03,HM=.042,GM=[[[-168,65],[-150,61],[-130,54],[-124,40],[-117,32],[-105,22],[-97,16],[-83,9],[-78,19],[-81,26],[-70,42],[-60,47],[-55,52],[-64,60],[-80,70],[-95,69],[-125,70],[-155,71]],[[-80,8],[-70,11],[-60,8],[-50,0],[-35,-5],[-38,-15],[-48,-25],[-58,-35],[-63,-42],[-73,-52],[-75,-47],[-71,-33],[-71,-18],[-79,-6],[-80,2]],[[-17,15],[-10,25],[0,32],[10,34],[25,32],[35,30],[43,12],[51,12],[42,-2],[40,-15],[35,-25],[25,-34],[18,-33],[12,-18],[9,-2],[5,5],[-8,5]],[[-9,37],[0,40],[12,45],[24,40],[30,36],[36,37],[45,40],[50,30],[57,25],[68,24],[77,8],[81,16],[89,22],[95,16],[100,13],[106,10],[110,20],[120,32],[122,40],[130,43],[136,50],[142,54],[160,60],[170,66],[178,68],[168,72],[140,75],[110,76],[90,76],[70,73],[58,70],[48,68],[38,66],[30,70],[24,66],[17,62],[11,58],[4,57],[-2,51],[0,47],[-5,43]],[[113,-22],[122,-18],[130,-12],[137,-12],[142,-11],[147,-19],[153,-25],[150,-35],[145,-38],[137,-35],[129,-32],[118,-34],[114,-28]],[[-45,60],[-30,68],[-24,75],[-35,82],[-55,82],[-60,75],[-55,65]]],VM=[[-4,54,4],[138,37,4],[47,-20,5],[174,-41,4],[110,-3,6],[102,-2,5],[122,12,4],[-19,65,3],[80,8,2.5],[-78,21,3]],WM=[[10,22,18],[30,25,14],[45,22,12],[65,28,10],[95,40,12],[132,-25,14],[18,-22,8],[-110,32,8],[-68,-25,6]];function Ra(i,e){return{x:(i+180)/360*ni,y:(90-e)/180*sn}}function If(i){return i/180*sn}function XM(i,e){const t=e.map(([o,a])=>Ra(o,a)),n=t.length,s=(o,a)=>({x:(o.x+a.x)/2,y:(o.y+a.y)/2}),r=s(t[n-1],t[0]);i.moveTo(r.x,r.y);for(let o=0;o<n;o++){const a=t[o],c=s(t[o],t[(o+1)%n]);i.quadraticCurveTo(a.x,a.y,c.x,c.y)}i.closePath()}function Ca(i){for(const e of GM)XM(i,e);for(const[e,t,n]of VM){const{x:s,y:r}=Ra(e,t),o=If(n);i.moveTo(s+o,r),i.arc(s,r,o,0,Math.PI*2)}}function uu(i,e,t,n,s,r,o=1,a=1){i.save(),i.translate(e,t),i.scale(o,a);const c=i.createRadialGradient(0,0,0,0,0,n);c.addColorStop(0,`rgba(${s}, ${r})`),c.addColorStop(.55,`rgba(${s}, ${r*.55})`),c.addColorStop(1,`rgba(${s}, 0)`),i.fillStyle=c,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.fill(),i.restore()}function Lf(){const i=document.createElement("canvas");return i.width=ni,i.height=sn,i.getContext("2d")}function qM(i){const e=new is(i.canvas);return e.colorSpace=Pt,e}function YM(){const i=Lf(),e=i.createLinearGradient(0,0,0,sn);e.addColorStop(0,"#0a2c50"),e.addColorStop(.35,"#1259a0"),e.addColorStop(.5,"#1a72bd"),e.addColorStop(.65,"#1259a0"),e.addColorStop(1,"#0a2c50"),i.fillStyle=e,i.fillRect(0,0,ni,sn);for(let o=0;o<700;o++){const a=Math.random()*ni,c=Math.random()*sn,l=20+Math.random()*110,u=Math.random()<.55;uu(i,a,c,l,u?"6, 28, 58":"70, 165, 215",(u?.1:.07)*(.4+Math.random()*.6),1.6,.7)}const t=[{width:52,color:"rgba(30, 105, 165, 0.18)"},{width:38,color:"rgba(45, 130, 190, 0.20)"},{width:26,color:"rgba(65, 160, 205, 0.22)"},{width:14,color:"rgba(95, 190, 220, 0.25)"}];i.lineJoin="round",i.lineCap="round",i.beginPath(),Ca(i);for(const o of t)i.strokeStyle=o.color,i.lineWidth=o.width,i.stroke();i.fillStyle="#3f7a3a",i.beginPath(),Ca(i),i.fill(),i.save(),i.beginPath(),Ca(i),i.clip();const n=i.createLinearGradient(0,0,0,sn);n.addColorStop(0,"rgba(190, 205, 200, 0.55)"),n.addColorStop(.22,"rgba(60, 90, 60, 0.45)"),n.addColorStop(.5,"rgba(30, 85, 35, 0.5)"),n.addColorStop(.78,"rgba(70, 100, 55, 0.35)"),n.addColorStop(1,"rgba(200, 215, 215, 0.6)"),i.fillStyle=n,i.fillRect(0,0,ni,sn);for(const[o,a,c]of WM){const{x:l,y:u}=Ra(o,a),h=If(c),d=i.createRadialGradient(l,u,0,l,u,h);d.addColorStop(0,"rgba(200, 168, 105, 0.85)"),d.addColorStop(.6,"rgba(190, 158, 100, 0.55)"),d.addColorStop(1,"rgba(180, 150, 95, 0)"),i.fillStyle=d,i.beginPath(),i.arc(l,u,h,0,Math.PI*2),i.fill()}for(let o=0;o<1400;o++){const a=Math.random()*ni,c=Math.random()*sn,l=5+Math.random()*30,u=Math.random()<.5;uu(i,a,c,l,u?"25, 52, 25":"155, 148, 108",.06+Math.random()*.14,1+Math.random(),.8)}for(let o=0;o<90;o++){const a=Math.random()*ni,c=Math.random()*sn,l=40+Math.random()*160,u=(Math.random()-.5)*Math.PI,h=Math.cos(u)*l,d=Math.sin(u)*l*.6;i.beginPath(),i.moveTo(a,c),i.quadraticCurveTo(a+h*.5,c+d*.5-18,a+h,c+d),i.strokeStyle="rgba(48, 42, 32, 0.30)",i.lineWidth=6+Math.random()*8,i.stroke(),i.beginPath(),i.moveTo(a,c-5),i.quadraticCurveTo(a+h*.5,c+d*.5-23,a+h,c+d-5),i.strokeStyle="rgba(200, 195, 175, 0.18)",i.lineWidth=3,i.stroke()}i.beginPath(),Ca(i),i.strokeStyle="rgba(214, 196, 142, 0.28)",i.lineWidth=14,i.stroke(),i.strokeStyle="rgba(224, 208, 158, 0.30)",i.lineWidth=6,i.stroke(),i.restore();const s=i.createLinearGradient(0,sn*.86,0,sn);s.addColorStop(0,"rgba(238, 246, 252, 0)"),s.addColorStop(.45,"rgba(238, 246, 252, 0.9)"),s.addColorStop(1,"rgba(255, 255, 255, 1)"),i.fillStyle=s,i.fillRect(0,sn*.86,ni,sn*.14);const r=i.createLinearGradient(0,0,0,sn*.1);return r.addColorStop(0,"rgba(240, 248, 255, 0.95)"),r.addColorStop(1,"rgba(240, 248, 255, 0)"),i.fillStyle=r,i.fillRect(0,0,ni,sn*.1),qM(i)}function KM(){const i=Lf();i.clearRect(0,0,ni,sn);function e(s){const r=Math.exp(-((s/12)**2)),o=Math.exp(-(((s-55)/16)**2)),a=Math.exp(-(((s+55)/16)**2));return .25+.75*Math.max(r,Math.max(o,a))}const t=600;for(let s=0;s<t;s++){const r=Math.random()*360-180,o=Math.random()*170-85;if(Math.random()>e(o))continue;const{x:a,y:c}=Ra(r,o),l=8+Math.floor(Math.random()*12),u=16+Math.random()*50;for(let h=0;h<l;h++){const d=a+(Math.random()-.5)*u*2.6,f=c+(Math.random()-.5)*u*.7,g=5+Math.random()*14;uu(i,d,f,g,"255, 255, 255",.18+Math.random()*.28,2.2+Math.random(),.85)}}const n=new is(i.canvas);return n.colorSpace=Pt,n}function $M(){const i=new Ke(eo,96,48),e=YM();e.anisotropy=8;const t=new Ve({map:e,roughness:.9,metalness:0,emissive:661030}),n=new pe(i,t);n.position.copy(Qr),n.rotation.z=qi.degToRad(23.4);const s=new pe(new Ke(eo*kM,96,48),new Ve({map:KM(),transparent:!0,opacity:.85,depthWrite:!1,roughness:1,metalness:0}));n.add(s);const r=new pe(new Ke(eo*zM,64,32),new cn({color:6269183,transparent:!0,opacity:.22,blending:ci,side:en,depthWrite:!1}));n.add(r);function o(a){n.rotation.y+=Pf*a,s.rotation.y+=(HM-Pf)*a}return{mesh:n,clouds:s,atmosphere:r,update:o}}const to=256,jM=new B(0,0,-2e3),JM=350;function ZM(){const i=document.createElement("canvas");i.width=to,i.height=to;const e=i.getContext("2d"),t=to/2,n=e.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"rgba(255, 245, 220, 1)"),n.addColorStop(.08,"rgba(255, 230, 180, 0.95)"),n.addColorStop(.25,"rgba(255, 200, 130, 0.45)"),n.addColorStop(.55,"rgba(255, 170, 100, 0.15)"),n.addColorStop(1,"rgba(255, 150, 90, 0)"),e.fillStyle=n,e.fillRect(0,0,to,to);const s=new is(i);return s.colorSpace=Pt,s}function QM(){const i=ZM(),e=new Cl({map:i,depthWrite:!1,transparent:!0,blending:ci}),t=new Bd(e);t.scale.setScalar(JM);function n(s){t.position.copy(s.position).add(jM)}return{sprite:t,update:n}}const e1=["Sojourner","Spirit","Opportunity","Curiosity","Perseverance","Zhurong"],t1=lu+18,n1=lu+60,i1=60,Nf=8028296,s1=5431551,r1=2106408,o1=1060936;function Pa(i,e){return i+Math.random()*(e-i)}function a1(){const i=new rt,e=new Ve({color:Nf,roughness:.7,metalness:.3,emissive:0}),t=new pe(new gt(2.2,.7,1.4),e);t.position.y=.45,i.add(t);const n=new pe(new gt(1.8,.1,1.1),new Ve({color:o1,roughness:.4,metalness:.8,emissive:332832}));n.position.y=.85,i.add(n);const s=new ft(.32,.32,.2,12);s.rotateZ(Math.PI/2);const r=new Ve({color:r1,roughness:.95,metalness:.1}),o=[-.85,.85],a=[-.55,.55];for(const u of o)for(const h of a){const d=new pe(s,r);d.position.set(u,.1,h),i.add(d)}const c=new pe(new ft(.04,.04,.8,6),new Ve({color:11184810,roughness:.6,metalness:.5}));c.position.set(.6,1.2,0),i.add(c);const l=new pe(new Ke(.1,8,6),new Ve({color:16733525,emissive:4456448}));return l.position.set(.6,1.65,0),i.add(l),{group:i,bodyMat:e}}function c1(){const i=Math.random(),e=Math.random(),t=2*Math.PI*i,n=Math.acos(2*e-1),s=Pa(t1,n1),r=Math.sin(n);return new B(s*r*Math.cos(t),s*r*Math.sin(t),s*Math.cos(n)).add(Cf)}function l1(){const i=[];for(const s of e1){const{group:r,bodyMat:o}=a1(),a=c1();r.position.copy(a),r.rotation.set(Pa(0,Math.PI*2),Pa(0,Math.PI*2),Pa(0,Math.PI*2)),i.push({name:s,mesh:r,bodyMat:o,position:a,fixed:!1,repairProgress:0,creditValue:i1})}function e(s){for(const r of i)r.mesh.rotation.y+=.25*s,r.mesh.rotation.x+=.08*s}function t(s){s.fixed=!0,s.repairProgress=1,s.bodyMat.color.setHex(s1),s.bodyMat.emissive.setHex(1060928)}function n(){for(const s of i)s.fixed=!1,s.repairProgress=0,s.bodyMat.color.setHex(Nf),s.bodyMat.emissive.setHex(0)}return{rovers:i,update:e,markFixed:t,reset:n}}const Ia=32,hu=.9,u1=6,h1=.18;function d1(){const i=new Float32Array(Ia*3),e=new Float32Array(Ia*3),t=new Ut;t.setAttribute("position",new Dt(i,3));const n=new xa({color:10149887,size:h1,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ci}),s=new Bl(t,n);s.visible=!1;let r=hu;function o(c){r=0;for(let l=0;l<Ia;l++){i[l*3+0]=c.x,i[l*3+1]=c.y,i[l*3+2]=c.z;const u=Math.random(),h=Math.random(),d=2*Math.PI*u,f=Math.acos(2*h-1),g=Math.sin(f),_=(.4+Math.random()*.6)*u1;e[l*3+0]=_*g*Math.cos(d),e[l*3+1]=_*g*Math.sin(d),e[l*3+2]=_*Math.cos(f)}t.attributes.position.needsUpdate=!0,s.visible=!0}function a(c){if(r>=hu){s.visible=!1;return}r+=c;const l=Math.min(1,r/hu),u=Math.pow(.05,c);for(let h=0;h<Ia;h++)i[h*3+0]+=e[h*3+0]*c,i[h*3+1]+=e[h*3+1]*c,i[h*3+2]+=e[h*3+2]*c,e[h*3+0]*=u,e[h*3+1]*=u,e[h*3+2]*=u;t.attributes.position.needsUpdate=!0,n.opacity=1-l}return{points:s,fire:o,update:a}}const Df=.7,du=new B,or=new B;function f1(i,e){let t=0;for(const n of e){du.subVectors(i.position,n.position);const s=Df+n.radius,r=du.lengthSq();if(r>=s*s)continue;if(r<1e-8)or.set(0,1,0),i.position.addScaledVector(or,s);else{const a=Math.sqrt(r);or.copy(du).divideScalar(a);const c=s-a;i.position.addScaledVector(or,c)}const o=i.velocity.dot(or);o<0&&i.velocity.addScaledVector(or,-1.55*o),t+=1}return t}const p1=Object.freeze(Object.defineProperty({__proto__:null,SHIP_RADIUS:Df,resolveAsteroidCollisions:f1},Symbol.toStringTag,{value:"Module"})),Fi={throttleUp:["KeyW"],throttleDown:["KeyS"],yawLeft:["KeyA"],yawRight:["KeyD"],pitchUp:["ArrowUp"],pitchDown:["ArrowDown"],rollLeft:["KeyQ"],rollRight:["KeyE"]};function m1(){const i=new Set,e=new Set;function t(o){i.has(o.code)||e.add(o.code),i.add(o.code)}function n(o){i.delete(o.code)}window.addEventListener("keydown",t),window.addEventListener("keyup",n);function s(o){for(const a of o)if(i.has(a))return!0;return!1}function r(o){for(const a of o)if(e.has(a))return!0;return!1}return{isDown:o=>i.has(o),sample(){const o=(s(Fi.throttleUp)?1:0)-(s(Fi.throttleDown)?1:0),a=(s(Fi.yawLeft)?1:0)-(s(Fi.yawRight)?1:0),c=(s(Fi.pitchUp)?1:0)-(s(Fi.pitchDown)?1:0),l=(s(Fi.rollLeft)?1:0)-(s(Fi.rollRight)?1:0);return{throttle:o,yaw:a,pitch:c,roll:l}},consumeAnyJustPressed(){const o=e.size>0;return e.clear(),o},consumeJustPressed(o){if(r(o)){for(const a of o)e.delete(a);return!0}return!1},dispose(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}}}const g1=.15,La={throttle:{axisIndex:1,sign:-1},yaw:{axisIndex:0,sign:-1},lookX:{axisIndex:2,sign:1},lookY:{axisIndex:3,sign:-1}},Mt={A:0,B:1,X:2,Y:3,L1:4,R1:5,L2:6,R2:7,Select:8,Start:9,L3:10,R3:11,Up:12,Down:13,Left:14,Right:15};function _1(i,e=g1){const t=Math.abs(i);return t<e?0:Math.sign(i)*((t-e)/(1-e))}function Na(i,e){return e.sign*_1(i.axes[e.axisIndex]??0)}function x1(){let i=!1,e=!1;const t=new Set,n=new Set,s=new Set;function r(){const c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(const l of c)if(l&&l.connected)return l;return null}const o=new Set;function a(c){if(n.clear(),o.clear(),!!c.buttons){for(let l=0;l<c.buttons.length;l++){const u=c.buttons[l];!!(u&&u.pressed)?(o.add(l),!t.has(l)&&!s.has(l)&&n.add(l)):s.delete(l)}for(const l of t)o.has(l)||t.delete(l);for(const l of o)t.add(l)}}return{get active(){return i},sample(){const c=r();if(!c)return i=!1,n.clear(),o.clear(),t.clear(),null;!e&&c.mapping!=="standard"&&(e=!0,console.info("[input/gamepad] Connected pad reports non-standard mapping",`(id="${c.id}"). Throttle/look may not be on axes 1/2/3 as expected.`,"See BACKLOG.md for the calibration follow-up.")),a(c);const l=Na(c,La.yaw),u=Na(c,La.throttle),h=Na(c,La.lookX),d=Na(c,La.lookY),f=(o.has(Mt.Up)?1:0)-(o.has(Mt.Down)?1:0),g=(o.has(Mt.Left)?1:0)-(o.has(Mt.Right)?1:0),_=(l||f||g||u||h||d)!==0,p=o.size>0;return i=_||p,{throttle:u,yaw:l,pitch:f,roll:g,lookX:h,lookY:d}},isButtonDown(c){return o.has(c)},consumeJustPressed(c){return n.has(c)?(n.delete(c),!0):!1},consumeAnyJustPressed(){return n.size===0?!1:(n.clear(),!0)},suppressCurrentlyPressed(){for(const c of o)s.add(c)}}}const Uf=.2,Of=1,Ff=25,v1=1e3,y1=35,M1=35;function Bf(){return(screen.orientation?.angle??window.orientation??0)*Math.PI/180}function S1(){let i=!1,e=!1,t=!1,n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},o=null,a=0,c=0,l=0,u=null,h=null;function d(p){if(p.alpha==null&&p.beta==null&&p.gamma==null)return;o={alpha:p.alpha??0,beta:p.beta??0,gamma:p.gamma??0},a=typeof performance<"u"?performance.now():Date.now();const m=g(o);if(u!==null){const M=m.pitch-u,x=m.yaw-h;Math.abs(M)<Ff&&Math.abs(x)<Ff&&(c+=M,l+=x)}if(u=m.pitch,h=m.yaw,n==null){const M=a;s===0&&(s=M),r.alpha+=o.alpha,r.beta+=o.beta,r.gamma+=o.gamma,r.n+=1,M-s>=v1&&r.n>0&&(n={alpha:r.alpha/r.n,beta:r.beta/r.n,gamma:r.gamma/r.n})}}function f(){n=null,s=0,r={alpha:0,beta:0,gamma:0,n:0},u=null,h=null}function g(p){const m=Bf(),M=Math.cos(m),x=Math.sin(m);return{pitch:p.beta*M-p.gamma*x,yaw:p.beta*x+p.gamma*M}}function _(){i||(window.addEventListener("deviceorientation",d),screen.orientation?.addEventListener("change",f),window.addEventListener("orientationchange",f),i=!0)}return{get active(){return!i||o==null?!1:(typeof performance<"u"?performance.now():Date.now())-a<1e3},get calibrated(){return n!=null},async request(){if(t)return _(),e;t=!0;const p=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(p&&typeof p.requestPermission=="function"){try{e=await p.requestPermission()==="granted"}catch{e=!1}e&&_()}else e=!0,_();return e},consumeTurn(){if(!i||u===null)return{pitch:0,yaw:0};const p={pitch:c*zf*Of,yaw:l*zf*Of};return c=0,l=0,p},sample(){if(!o||!n)return null;const p=o.beta-n.beta,m=o.gamma-n.gamma,M=Bf(),x=Math.cos(M),y=Math.sin(M),T=p*x-m*y,E=p*y+m*x;let A=kf(T/y1,-1,1),k=kf(E/M1,-1,1);return{pitchDelta:A*Uf,yawDelta:k*Uf}}}}function kf(i,e,t){return i<e?e:i>t?t:i}const zf=Math.PI/180,fu=typeof window<"u"&&"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0;function b1(){let i=!1;function e(t){t.pointerType!=="mouse"&&(i=!0)}return window.addEventListener("pointerdown",e,{passive:!0}),{consumeJustPressed(){const t=i;return i=!1,t},clear(){i=!1}}}function Hf(){return typeof window>"u"?!1:!!(window.__p5NativeHost===!0||window.webkit&&window.webkit.messageHandlers)}function ar(i){return i<-1?-1:i>1?1:i}function w1(){const i=m1(),e=x1(),t=S1(),n=b1();let s=["KB"];return{keyboard:i,gamepad:e,gyro:t,touch:n,isTouchDevice:fu,bridgeAvailable:Hf,async enableGyro(){return t.request()},sample(){const r=i.sample(),o=e.sample(),a=[];let c,l,u,h;o&&(o.throttle||o.yaw||o.pitch||o.roll)?(c=o.throttle,l=o.yaw,u=o.pitch,h=o.roll,a.push("PAD"),(r.throttle||r.yaw||r.pitch||r.roll)&&(c=ar(c+r.throttle),l=ar(l+r.yaw),u=ar(u+r.pitch),h=ar(h+r.roll),a.push("KB"))):(c=r.throttle,l=r.yaw,u=r.pitch,h=r.roll,(r.throttle||r.yaw||r.pitch||r.roll)&&a.push("KB"));const d=l,f=c,g=t.sample();g&&t.active&&(u=ar(u+g.pitchDelta),l=ar(l-g.yawDelta),a.push("GYRO"));let _=o?o.lookX:0,p=o?o.lookY:0;(_||p)&&!a.includes("PAD")&&a.push("PAD");const m=t.active?t.consumeTurn():{pitch:0,yaw:0},M=m.yaw,x=m.pitch;return(M||x)&&!a.includes("GYRO")&&a.push("GYRO"),a.length===0&&a.push("KB"),s=a,{throttle:c,yaw:l,pitch:u,roll:h,lookX:_,lookY:p,lookTurnX:M,lookTurnY:x,stickYaw:d,stickThrottle:f}},activeSources(){return s},consumeAnyJustPressed(){const r=i.consumeAnyJustPressed();e.sample();const o=e.consumeAnyJustPressed(),a=n.consumeJustPressed();return r||o||a}}}const Ae={title:"Super Vexo and the Mystery of the System",pressAnyKey:"Press any button to start",tapToStart:"Tap to start",intro:{skip:"Press any button to skip",tapToSkip:"Tap to skip",beats:["Long ago, in the kingdom of Astra…","The kingdom lived in peace.","Until Lord Draxos came.","He kidnapped Princess Astra.","And vanished into deep space.",`The Scientists handed Vexo the Super Mega Tablet.

Can you save her?`]},surface:{town:"AN UNNAMED WORLD",street:"unknown ground",ground:{plain:"open plain",savanna:"dry grassland",forest:"forest",hills:"hill country",mountain:"bare mountain",snow:"snowfield",dunes:"sand sea",stone:"stone desert",salt:"salt pan",badlands:"badlands",mesa:"plateau country",beach:"shoreline",sea:"open water"},leaveHint:"Descend to land · climb to leave the atmosphere"},onFoot:{skip:"Press any button to skip",climbOut:"L / A — land and climb out",noRoom:"No room to climb out here — move the ship",board:"L / A — climb back in",controls:"W A S D / stick — walk · Shift / B — sprint",talk:"E / A — talk to {name}"},shop:{credits:"cr",hint:"↑ ↓ — choose · E / A — buy · B / Esc — leave",welcome:"Have a look. Everything here works.",bought:"{name} — yours. Mind how you go.",tooDear:"Not enough credits for that one.",alreadyHave:"You have that already.",sold:"owned",names:{apothecary:"THE APOTHECARY",gunsmith:"THE GUNSMITH",shipwright:"THE SHIPWRIGHT"},keeper:{apothecary:"E / A — the apothecary",gunsmith:"E / A — the gunsmith",shipwright:"E / A — the shipwright"},goods:{heart:{name:"Vital patch",note:"One more heart. Stacks."},wind:{name:"Lung filter",note:"Sprint lasts about half as long again."},quickdraw:{name:"Quickdraw kit",note:"The pistol fires half as fast again."},barrel:{name:"Long barrel",note:"Shots carry almost half again as far."},thrusters:{name:"Tuned thrusters",note:"The airship flies 15% faster."}}},dialogue:{more:"E / A — go on · walk away to leave"},map:{title:"THE WORLD",hint:"M / − — close · W S / left stick — zoom · right stick — scroll · C — back to you",scale:"{km} × {kmZ} km · {m} m per pixel",building:"drawing the world… {pct}%"},gameOver:{title:"GAME OVER",ask:"Continue from your last save?",noSave:"You have no saved game. Start again?",yes:"YES — CONTINUE",no:"NO — TITLE SCREEN",hint:"← → to choose · Enter / A to take it"},inventory:{title:"GEAR",weapons:"Weapons",empty:"Nothing yet.",hint:"T / + — close · ← → or L / R — tabs · B / Esc — back",turnHint:"Drag, or A / D, to turn him",tablet:"Tablet",system:"System",save:"SAVE GAME",neverSaved:"Not saved yet.",savedJustNow:"Saved just now.",savedSecondsAgo:"Saved a few seconds ago.",savedMinutesAgo:"Saved {n} minutes ago.",saveFailed:"Couldn't save — this browser won't let the game store anything.",starterGun:"Sidearm",starterGunNote:"Equipped"},hud:{appName:"Tablet",velocity:"VEL",orientation:"ORI",fps:"FPS",dampingOn:"damping: ON",dampingOff:"damping: OFF",fastTravelButton:"FAST TRAVEL",fastTravelHint:"R1 / F",fastTravelActive:"warping…",rovers:"ROVERS",credits:"CRED",hackHint:"Hold L1 / H to hack",upgradeButton:"UPGRADES",upgradeHint:"Y / U",upgradeBought:"OWNED",upgradeBuy:"BUY",upgradeClose:"Close",screenHint:"Stick / swipe = scroll · B / Esc = back to Tablet",missionCompleteTitle:"MISSION COMPLETE",missionCompleteBody:"All rovers repaired. Earth Command transfers a bonus to your account.",missionCompleteCta:"Open Upgrades",missionCompleteClose:"Continue Flying",resetHint:"L3 / R = reset",tabletHint:"T / + — GEAR · M / − — MAP"}};function E1(){const i=document.createElement("div");i.id="tablet",i.innerHTML=`
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
  `,i.style.display="none",document.body.appendChild(i);const e=document.createElement("div");e.id="tablet-hint",e.textContent=Ae.hud.tabletHint,e.hidden=!0,document.body.appendChild(e);const t=i.querySelector("[data-velocity]"),n=i.querySelector("[data-orientation]"),s=i.querySelector("[data-fps]"),r=i.querySelector("[data-source]"),o=i.querySelector("[data-damping]"),a=i.querySelector("[data-fast-travel]"),c=i.querySelector("[data-upgrades]"),l=i.querySelector("[data-reset-hint]"),u=i.querySelector("[data-mission]"),h=i.querySelector("[data-rovers]"),d=i.querySelector("[data-credits]"),f=i.querySelector("[data-hack]"),g=i.querySelector("[data-hack-name]"),_=i.querySelector("[data-hack-fill]");let p=0,m=0,M=0;return{element:i,update({velocity:x,eulerDeg:y,dt:T,sources:E,dampingOn:A,inKph:k=!1}){t.textContent=k?`${Math.round(x*3.6)} km/h`:x.toFixed(1),n.textContent=`${y.x.toFixed(0)}°, ${y.y.toFixed(0)}°, ${y.z.toFixed(0)}°`,p+=1,m+=T,m>=.5&&(M=Math.round(p/m),p=0,m=0,s.textContent=String(M)),r.textContent=E.join("+"),o.textContent=A?Ae.hud.dampingOn:Ae.hud.dampingOff},show(){e.hidden=!0},hide(){e.hidden=!1},toggle(){return e.hidden=!e.hidden,!e.hidden},setHintVisible(x){e.hidden=!x},showFastTravel(){a.classList.add("tablet-app-btn--visible")},showUpgrades(){c.classList.add("tablet-app-btn--visible")},showResetHint(){l.hidden=!1},setMissionVisible(x){u.hidden=!x},updateMission({remaining:x,total:y,credits:T}){h.textContent=`${y-x}/${y}`,d.textContent=String(T)},updateHack({name:x,progress:y}){if(!x){f.hidden=!0;return}f.hidden=!1,g.textContent=x,_.style.width=`${Math.max(0,Math.min(1,y))*100}%`},onUpgradesClick(x){c.addEventListener("click",x)},setFastTravelActive(x){a.classList.toggle("tablet-app-btn--active",x);const y=a.querySelector(".tablet-app-btn__label");y.textContent=x?Ae.hud.fastTravelActive:Ae.hud.fastTravelButton,a.disabled=x},onFastTravel(x){a.addEventListener("click",x)}}}function A1(){const i=document.createElement("div");i.id="title-card";const e="2026-09-04 16:12";i.innerHTML=`
    <div class="title-card__inner">
      <h1 class="title-card__title">${Ae.title}</h1>
      <p class="title-card__prompt">${fu?Ae.tapToStart:Ae.pressAnyKey}</p>
      <p class="title-card__build">build ${e}</p>
    </div>
  `,document.body.appendChild(i);let t=null;return{hide(){i.style.opacity="0"},show(){t&&(clearTimeout(t),t=null),i.classList.remove("title-card--hidden"),i.style.opacity="",i.isConnected||document.body.appendChild(i)},dismiss(){i.classList.add("title-card--hidden"),t=setTimeout(()=>{i.remove(),t=null},500)}}}const T1=1.2,Gf=540;function R1(i){const e=document.createElement("div");e.id="warp-flash",i.appendChild(e);let t=!1,n=0,s=!1,r=null,o=!1,a=null;function c(u,h={}){return t?!1:(t=!0,n=0,s=!1,r=h.onDone??null,o=!0,a=u,u.velocity.set(0,0,0),!0)}function l(u){if(!t)return;n+=u;const d=Math.max(0,Math.min(1,n/T1));let f;if(d<.4?f=d/.4:d<.6?f=1:f=1-(d-.6)/.4,e.style.opacity=String(Math.max(0,Math.min(1,f))),!s&&d>=.5&&a&&(a.mesh.position.set(0,0,Gf),a.velocity.set(0,0,0),a.mesh.quaternion.identity(),s=!0),d>=1){t=!1,o=!1,e.style.opacity="0";const g=r;r=null,a=null,g&&g()}}return{begin:c,update:l,get active(){return t},get suppressInput(){return o},targetZ:Gf}}const C1=""+new URL("invincibility_theme-K-djvXIp.mp3",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,P1=""+new URL("game_over-CW0fu00F.m4a",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,Vf=80,I1=18,L1=.06,N1=2.5,Wf=280,D1=520,U1=.18,O1=.18,Xf=.45,F1=.3,B1=.6;function k1(){let i=null,e=null,t=!1,n=null,s=0,r=!1,o=null,a=null,c=null,l=0;function u(){if(r)return!0;const y=window.AudioContext||window.webkitAudioContext;return y?(i=new y,o=i.createGain(),o.gain.value=1,o.connect(i.destination),a=z1(i,o),c=H1(i,o),r=!0,!0):!1}function h(y){r&&(l=Math.min(1,Math.abs(y)))}function d(y){t=y,y&&(e||(e=new Audio(C1),e.loop=!0,e.preload="auto",e.volume=0),e.paused&&(e.currentTime=0,e.play().catch(()=>{})))}function f(){n||(n=new Audio(P1),n.preload="auto"),n.loop=!1,n.volume=B1,n.currentTime=0,n.play().catch(()=>{})}function g(){n&&(n.pause(),n.currentTime=0)}function _(y){if(!e)return;const T=t?Xf:0,E=y/F1*Xf;s=T>s?Math.min(T,s+E):Math.max(T,s-E),e.volume=s,s===0&&!e.paused&&e.pause()}function p(y){if(_(y),!r)return;const T=1-Math.pow(2,-y/O1),E=c.gainNode.gain.value,A=l*U1,k=E+(A-E)*T;c.gainNode.gain.setValueAtTime(k,i.currentTime);const $=Wf+l*D1;c.filter.frequency.setValueAtTime($,i.currentTime)}function m(){if(g(),e&&(e.pause(),e=null,t=!1,s=0),!!r){try{a.osc1.stop(),a.osc2.stop()}catch{}try{c.source.stop()}catch{}i.close(),r=!1,i=null}}function M({fromHz:y=300,toHz:T=900,durationS:E=.35,peakGain:A=.18}={}){if(!r)return;const k=i.currentTime,$=i.createOscillator();$.type="sine",$.frequency.setValueAtTime(y,k),$.frequency.exponentialRampToValueAtTime(T,k+E);const v=i.createGain();v.gain.setValueAtTime(0,k),v.gain.linearRampToValueAtTime(A,k+.03),v.gain.exponentialRampToValueAtTime(1e-4,k+E),$.connect(v),v.connect(o),$.start(k),$.stop(k+E+.05)}function x(){M({fromHz:440,toHz:660,durationS:.45,peakGain:.2}),setTimeout(()=>M({fromHz:660,toHz:990,durationS:.6,peakGain:.22}),200)}return{start:u,setSprinting:d,playGameOver:f,stopGameOver:g,update:p,setThrottle:h,chirp:M,fanfare:x,dispose:m,get running(){return r}}}function z1(i,e){const t=i.createOscillator(),n=i.createOscillator();t.type="triangle",n.type="triangle",t.frequency.value=Vf,n.detune.value=I1,n.frequency.value=Vf;const s=i.createBiquadFilter();s.type="lowpass",s.frequency.value=320,s.Q.value=.7;const r=i.createGain();return r.gain.value=L1,t.connect(s),n.connect(s),s.connect(r),r.connect(e),t.start(),n.start(),{osc1:t,osc2:n,filter:s,gain:r}}function H1(i,e){const t=i.sampleRate,n=i.createBuffer(1,t*N1,t),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=i.createBufferSource();r.buffer=n,r.loop=!0;const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=Wf,o.Q.value=1.2;const a=i.createGain();return a.gain.value=0,r.connect(o),o.connect(a),a.connect(e),r.start(),{source:r,filter:o,gainNode:a}}const G1=8,V1=2,W1=100,Da={ACTIVE:"active",COMPLETE:"complete"};function X1(i){const{rovers:e,markFixed:t}=i;let n=0,s=Da.ACTIVE,r=null,o=null,a=null,c=null;function l(m){a=m}function u(m){c=m}function h(){let m=0;for(const M of e)M.fixed||(m+=1);return m}function d(){return e.length}function f(m,M){if(M>G1)return null;let x=null,y=un.hackRadius*un.hackRadius;for(const T of e){if(T.fixed)continue;const E=T.position.x-m.x,A=T.position.y-m.y,k=T.position.z-m.z,$=E*E+A*A+k*k;$<y&&(y=$,x=T)}return x}function g({shipPos:m,shipSpeed:M,holdActive:x,dt:y}){if(r=f(m,M),s!==Da.ACTIVE){o=null;return}if(x&&r){if(o!==r&&(o=r,o.repairProgress=0),o.repairProgress=Math.min(1,o.repairProgress+y/V1),o.repairProgress>=1&&!o.fixed){const T=o;t(T),n+=T.creditValue,c&&c(T),o=null,h()===0&&(s=Da.COMPLETE,n+=W1,a&&a())}}else o&&(o.repairProgress=0,o=null)}function _(m){return m>n?!1:(n-=m,!0)}function p(){n=0,s=Da.ACTIVE,r=null,o=null}return{get state(){return s},get credits(){return n},get inRange(){return r},get repairing(){return o},grantCredits(m){n=Math.max(0,Math.round(m))},earn(m){return n+=Math.max(0,Math.round(m)),n},remaining:h,totalRovers:d,update:g,spendCredits:_,setOnComplete:l,setOnRepaired:u,reset:p}}function q1(){const i=[{id:"throttle",label:"Boost Throttle",description:"Push the engines harder. +40% forward acceleration, +25% top speed.",cost:100,bought:!1,apply(){un.maxThrottleAccel*=1.4,un.maxSpeed*=1.25}},{id:"agility",label:"Sharper Turning",description:"Twitch-faster yaw and pitch. +35% on both rates.",cost:90,bought:!1,apply(){un.yawRate*=1.35,un.pitchRate*=1.35}},{id:"hackRange",label:"Long-Range Hack",description:"The Tablet locks on from further out. Hack radius +50%.",cost:80,bought:!1,apply(){un.hackRadius*=1.5}}];function e(s,r){const o=i.find(a=>a.id===s);return!o||o.bought||!r.spendCredits(o.cost)?!1:(o.apply(),o.bought=!0,!0)}function t(s){const r=i.find(o=>o.id===s);return!r||r.bought?!1:(r.apply(),r.bought=!0,!0)}function n(){for(const s of i)s.bought=!1}return{upgrades:i,buy:e,buyFree:t,reset:n}}function Y1({upgrades:i,mission:e,audio:t,onClose:n}){const s=document.createElement("div");s.id="mission-screens",s.innerHTML=`
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
  `,document.body.appendChild(s);const r=s.querySelector("#screen-complete"),o=s.querySelector("[data-complete-credits]"),a=s.querySelector("#screen-upgrades"),c=s.querySelector("[data-upgrades-credits]"),l=s.querySelector("[data-upgrade-list]");function u(){c.textContent=String(e.credits),l.innerHTML="";for(const m of i.upgrades){const M=document.createElement("li");M.className="upgrade-item"+(m.bought?" upgrade-item--bought":"");const x=!m.bought&&e.credits>=m.cost;M.innerHTML=`
        <div class="upgrade-item__head">
          <span class="upgrade-item__name">${m.label}</span>
          <span class="upgrade-item__cost">${m.cost} c</span>
        </div>
        <p class="upgrade-item__desc">${m.description}</p>
        <button class="screen-btn screen-btn--small" data-buy="${m.id}" ${m.bought||!x?"disabled":""}>
          ${m.bought?Ae.hud.upgradeBought:Ae.hud.upgradeBuy}
        </button>
      `,l.appendChild(M)}}function h(m){m==="complete"?(o.textContent=String(e.credits),r.hidden=!1):m==="upgrades"&&(u(),a.hidden=!1)}function d(m){m==="complete"?r.hidden=!0:m==="upgrades"&&(a.hidden=!0)}function f(){d("complete"),d("upgrades")}function g(){return!r.hidden||!a.hidden}function _(){return a.hidden?r.hidden?null:r.querySelector(".screen-card"):a.querySelector(".screen-card")}function p(m){const M=_();M&&(M.scrollTop+=m)}return s.addEventListener("click",m=>{const M=m.target;if(!(M instanceof Element))return;const x=M.getAttribute("data-action");if(x==="open-upgrades"){d("complete"),h("upgrades");return}if(x==="close-complete"){d("complete"),n?.();return}if(x==="close-upgrades"){d("upgrades"),n?.();return}const y=M.getAttribute("data-buy");y&&i.buy(y,e)&&(t&&t.chirp({fromHz:520,toHz:780,durationS:.25,peakGain:.18}),u())}),{show:h,hide:d,hideAll:f,isOpen:g,scrollBy:p}}const qf=40;function K1(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#0c3a66"),s.addColorStop(.5,"#1b6aa3"),s.addColorStop(1,"#0c3a66"),n.fillStyle=s,n.fillRect(0,0,1024,512);const r=[];for(let a=0;a<6;a++)r.push({x:Math.random()*1024,y:512*.25+Math.random()*512*.5,r:50+Math.random()*90});for(const a of r){const c=8+Math.floor(Math.random()*6);for(let l=0;l<c;l++){const u=(Math.random()-.5)*a.r*1.6,h=(Math.random()-.5)*a.r*1,d=18+Math.random()*45,f=Math.random()<.35;n.beginPath(),n.fillStyle=f?"rgba(30, 70, 30, 0.85)":"rgba(70, 130, 55, 0.9)",n.arc(a.x+u,a.y+h,d,0,Math.PI*2),n.fill()}}for(let a=0;a<60;a++){const c=Math.random()*1024,l=Math.random()*512,u=14+Math.random()*50;n.beginPath(),n.fillStyle=`rgba(245, 250, 255, ${.1+Math.random()*.12})`,n.arc(c,l,u,0,Math.PI*2),n.fill()}for(const a of[0,512]){const c=n.createRadialGradient(512,a,0,512,a,153.6);c.addColorStop(0,"rgba(240, 248, 255, 0.85)"),c.addColorStop(1,"rgba(240, 248, 255, 0)"),n.fillStyle=c,n.fillRect(0,0,1024,512)}const o=new is(t);return o.colorSpace=Pt,o}function $1(){const i=new Ke(qf,64,32),e=new Ve({map:K1(),roughness:.85,metalness:0,emissive:1296}),t=new pe(i,e),n=new cn({color:6990591,transparent:!0,opacity:.18,blending:ci,side:en}),s=new pe(new Ke(qf*1.05,64,32),n);t.add(s);const r=.05;function o(a){t.rotation.y+=r*a}return{mesh:t,update:o}}const Yf=14,Kf=4.5,j1=.9;function J1(){const i=new rt,e=new $l(1,0);e.scale(Kf,Kf,Yf*.5);const t=new Ve({color:3807780,roughness:.45,metalness:.6,emissive:3149848,flatShading:!0}),n=new pe(e,t);i.add(n);const s=new cn({color:16724016}),r=new pe(new Ke(j1,12,8),s);r.position.set(0,0,Yf*.55),i.add(r);const o=document.createElement("canvas");o.width=o.height=128;{const h=o.getContext("2d"),d=64,f=h.createRadialGradient(d,d,0,d,d,d);f.addColorStop(0,"rgba(255, 60, 60, 1)"),f.addColorStop(.3,"rgba(255, 30, 30, 0.6)"),f.addColorStop(1,"rgba(255, 30, 30, 0)"),h.fillStyle=f,h.fillRect(0,0,128,128)}const a=new is(o);a.colorSpace=Pt;const c=new Bd(new Cl({map:a,transparent:!0,blending:ci,depthWrite:!1}));c.position.copy(r.position),c.scale.setScalar(5.5),i.add(c);const l=new gt(.35,1.4,6);l.translate(0,0,-1.5);const u=new Ve({color:1837586,roughness:.6,metalness:.5,emissive:2099216,flatShading:!0});for(const h of[-1,1]){const d=new pe(l,u);d.position.set(h*2.6,0,-2.5),d.rotation.z=h*.25,d.rotation.y=h*.2,i.add(d)}return{group:i,hull:n,core:r,halo:c}}const Ua=i=>i*i*(3-2*i),Z1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,pu=[3.5,3,4,4,3.5,4.5];function Q1({renderer:i}){const e=new Lr;e.background=new Xe(66055);const t=new Gt(50,window.innerWidth/window.innerHeight,.1,5e3);t.position.set(0,8,140),t.lookAt(0,0,0),e.add(new Ta(10141920,1052704,.7));const n=new xi(16773848,1.1);n.position.set(50,30,80),e.add(n);const s=Tf();e.add(s);const r=$1();e.add(r.mesh);const o=J1();o.group.position.set(200,30,30),o.group.rotation.y=-.6,e.add(o.group);const a=new cn({color:16732224,transparent:!0,opacity:0,blending:ci,depthWrite:!1,side:tn}),c=new pe(new ln(2,60,16,1,!0),a);c.rotation.x=Math.PI,e.add(c);const l=document.createElement("div");l.id="cinematic",l.innerHTML=`
    <div class="cinematic__skip" data-skip>${fu?Ae.intro.tapToSkip:Ae.intro.skip}</div>
    <div class="cinematic__text" data-text></div>
    <div class="cinematic__flash" data-flash></div>
  `,document.body.appendChild(l);const u=l.querySelector("[data-text]"),h=l.querySelector("[data-flash]");let d=0,f=0,g=0,_=!0,p=!0;function m($,v,b){switch($){case 0:{r.mesh.position.set(0,0,0),r.mesh.scale.setScalar(1+.02*Math.sin(g*.5)),o.group.position.x=200,c.material.opacity=0;break}case 1:{r.mesh.position.set(0,0,0),t.position.x=-10+20*Z1(v),t.lookAt(0,0,0);break}case 2:{const C=140+-45*Ua(v);t.position.set(0,8,C),t.lookAt(0,0,0);const D=140,z=38;o.group.position.x=D+(z-D)*Ua(v),o.group.position.z=30-10*Ua(v),o.group.rotation.y=-.6-.4*Ua(v);break}case 3:{t.position.set(0,8,95),o.group.position.x=38,o.group.position.z=20,o.group.rotation.y=-1,c.material.opacity=.4+.35*Math.sin(g*12);const C=o.group.position,D=r.mesh.position;c.position.set((C.x+D.x)/2,(C.y+D.y)/2,(C.z+D.z)/2),c.lookAt(D),c.rotateX(Math.PI/2),t.position.x=Math.sin(g*30)*.4,t.position.y=8+Math.cos(g*27)*.3,t.position.z=95,t.lookAt(0,0,0);break}case 4:{o.group.position.x=38,o.group.position.z=20,t.position.set(0,8,95),t.lookAt(0,0,0),v<.5?(h.style.opacity=String(v*2*.95),c.material.opacity=.35*(1-v*2)):(o.group.visible=!1,r.mesh.visible=!1,c.material.opacity=0,h.style.opacity=String(Math.max(0,1-(v-.5)*2)));break}case 5:{h.style.opacity="0";break}}}function M($){u.innerHTML=$.split(`
`).map(v=>`<p>${v}</p>`).join(""),u.classList.remove("cinematic__text--in"),u.offsetWidth,u.classList.add("cinematic__text--in")}function x(){d+=1,f=0,p=!0,d>=pu.length&&y()}function y(){_&&(_=!1,l.remove(),e.traverse($=>{$.geometry&&$.geometry.dispose();const v=Array.isArray($.material)?$.material:$.material?[$.material]:[];for(const b of v)b.map&&b.map.dispose(),b.dispose()}))}function T(){y()}function E($){if(!_)return;g+=$,f+=$,p&&(M(Ae.intro.beats[d]),p=!1);const v=Math.min(1,f/pu[d]);m(d,v),r.update($),o.halo.material.opacity=.7+.25*Math.sin(g*4),Rf(s,t),f>=pu[d]&&x()}function A(){_&&i.render(e,t)}function k($=window.innerWidth,v=window.innerHeight){t.aspect=$/v,t.updateProjectionMatrix()}return{update:E,render:A,skip:T,onResize:k,get active(){return _}}}function eS(){if(!(new URLSearchParams(window.location.search).get("debugPad")==="1"))return{update(){}};const e=document.createElement("div");e.id="debug-pad",Object.assign(e.style,{position:"fixed",top:"8px",left:"8px",zIndex:"9999",background:"rgba(0,0,0,0.78)",color:"#9af0a0",font:"11px ui-monospace, Menlo, Consolas, monospace",padding:"8px 10px",maxWidth:"min(92vw, 520px)",maxHeight:"60vh",overflow:"auto",border:"1px solid #3a3",borderRadius:"4px",whiteSpace:"pre-wrap",pointerEvents:"none",lineHeight:"1.35"}),document.body.appendChild(e);function t(){const n=Hf(),s=n?window.__p5NativeHost===!0?"__p5NativeHost=true":"webkit.messageHandlers":"(none — desktop / non-wrapper)",r=window.__nativeGamepadBridgeReady===!0,o=window.__nativeGamepadUpdateCount||0,a=window.__nativeGamepadLastRaw,c=typeof navigator.getGamepads=="function"?navigator.getGamepads():[],l=c&&c[0];let u="(no pad)";if(l){const h=[];for(let d=0;d<l.buttons.length;d++)l.buttons[d]&&l.buttons[d].pressed&&h.push(d);u=`id=${JSON.stringify(l.id)}
mapping=${l.mapping}
axes=[${l.axes.map(d=>d.toFixed(2)).join(", ")}]
pressed buttons=[${h.join(", ")||"(none)"}]`}return["=== gamepad debug ===",`bridge available: ${n}  (${s})`,`bridge module ready: ${r}`,`__nativeGamepadUpdate calls: ${o}`,`last raw payload: ${a?JSON.stringify(a).slice(0,240):"(none yet)"}`,"","--- navigator.getGamepads()[0] ---",u].join(`
`)}return{update(){e.textContent=t()}}}const tS=[0,120,350,700],nS=2;function iS(i){const e=i.getBoundingClientRect(),t=Math.max(1,Math.round(e.width||window.innerWidth)),n=Math.max(1,Math.round(e.height||window.innerHeight));return{width:t,height:n,pixelRatio:Math.min(window.devicePixelRatio||1,nS)}}function sS(i,e){let t={width:0,height:0,pixelRatio:0};const n=[];function s(){const a=iS(i);a.width===t.width&&a.height===t.height&&a.pixelRatio===t.pixelRatio||(t=a,e(a))}function r(){for(const a of n.splice(0))clearTimeout(a);for(const a of tS)n.push(setTimeout(s,a))}const o=new ResizeObserver(s);return o.observe(i),window.addEventListener("resize",s),window.addEventListener("orientationchange",r),window.visualViewport?.addEventListener("resize",s),window.addEventListener("pageshow",r),screen.orientation?.addEventListener("change",r),s(),{measure:s,dispose(){for(const a of n.splice(0))clearTimeout(a);o.disconnect(),window.removeEventListener("resize",s),window.removeEventListener("orientationchange",r),window.visualViewport?.removeEventListener("resize",s),window.removeEventListener("pageshow",r),screen.orientation?.removeEventListener("change",r)}}}const rS=new B(0,1.4,-5.5),mu=qi.degToRad(180),gu=qi.degToRad(85),oS=.04,aS=.09,$f=new B(1,0,0),jf=new B(0,1,0);function Jf(i){return i<-1?-1:i>1?1:i}function Oa(i,e){return i<-e?-e:i>e?e:i}function _u(i,e){return 1-Math.pow(2,-i/e)}function cS(i){let e=0,t=0,n=0,s=0,r=!1;const o=new B,a=new B,c=new B;return{get orbit(){return{yaw:e,pitch:t}},reset(){e=0,t=0,n=0,s=0,r=!1},update(l,u,h){const d=Jf(u?.x??0),f=Jf(u?.y??0);if(n=Oa(n+(u?.turnX??0),mu),s=Oa(s-(u?.turnY??0),gu),Math.abs(d)>.05||Math.abs(f)>.05){const m=_u(h,.25);n-=n*m,s-=s*m}const g=Oa(d*mu+n,mu),_=Oa(-f*gu+s,gu),p=_u(h,aS);e+=(g-e)*p,t+=(_-t)*p,o.copy(rS).multiplyScalar(l.mesh.scale.x).applyAxisAngle($f,t).applyAxisAngle(jf,e).applyQuaternion(l.mesh.quaternion),a.copy(l.mesh.position).add(o),r?i.position.lerp(a,_u(h,oS)):(i.position.copy(a),r=!0),c.set(0,1,0).applyAxisAngle($f,t).applyAxisAngle(jf,e).applyQuaternion(l.mesh.quaternion),i.up.copy(c),i.lookAt(l.mesh.position)}}}const lS=[{name:"The Camelloo",of:"Camels Kindom",at:[.16,.16],r:.3,uplift:.14,moisture:.02,heat:.94},{name:"The Camelloo",of:"the deep sand",at:[.06,.34],r:.2,uplift:.1,moisture:.04,heat:.92},{name:"The Vulcans",of:"Rock People Kindom",at:[.89,.2],r:.26,uplift:.95,moisture:.3,heat:.8},{name:"Astro Lake",of:"the lake country",at:[.63,.2],r:.2,uplift:.3,moisture:.92,heat:.44},{name:"Estronic",of:"capital of Continent Alpha",at:[.49,.47],r:.16,uplift:.2,moisture:.62,heat:.58},{name:"Dwellers Territory",of:"the wooded hills",at:[.42,.74],r:.24,uplift:.52,moisture:.86,heat:.54},{name:"The Dwellers",of:"Elfs Kindom",at:[.14,.88],r:.32,uplift:.3,moisture:.99,heat:.6},{name:"The Magica Republic",of:"the Republic of Wizards",at:[.87,.78],r:.3,uplift:.58,moisture:.44,heat:.24},{name:"the west shore",of:"low ground along the western sea",at:[-.04,.6],r:.2,uplift:.1,moisture:.7,heat:.56}],uS=[{name:"Only river to the Camelloo",points:[[.03,.33],[.11,.35],[.19,.33],[.27,.35],[.34,.36],[.4,.36],[.45,.38]]},{name:"Artifical river",points:[[0,.5],[.12,.47],[.24,.45],[.34,.43],[.42,.42]],straight:!0},{name:"Lava river",points:[[.79,.33],[.77,.38],[.76,.43],[.74,.48]],lava:!0},{name:"the north river",points:[[.42,0],[.4,.08],[.36,.14],[.3,.19],[.26,.25],[.28,.31],[.34,.34]]},{name:"the river out of Astro Lake",points:[[.56,.3],[.54,.36],[.52,.41],[.5,.44]]},{name:"the south road river",points:[[.47,.57],[.45,.64],[.42,.71],[.38,.78],[.35,.86]]},{name:"the Dwellers water",points:[[.2,.66],[.26,.7],[.31,.74],[.33,.8],[.31,.88]]},{name:"the barrier river",points:[[.62,.55],[.65,.62],[.68,.68],[.7,.75],[.71,.83]],magic:!0},{name:"the east river",points:[[.74,.52],[.79,.55],[.84,.57],[.9,.58]]}],xu={points:[[.55,.06],[.62,.04],[.69,.08],[.73,.15],[.73,.23],[.7,.29],[.64,.33],[.58,.32],[.54,.27],[.53,.19],[.53,.12]]},hS=[{points:[[.03,.63],[.12,.6],[.22,.59],[.31,.6],[.4,.63]],height:1},{points:[[.4,.63],[.47,.7],[.54,.78],[.6,.86],[.64,.95]],height:.9}],Zf=[{name:"Estronic",of:"capital of Continent Alpha",kind:"capital",at:[.49,.47],r:1800,walls:14276303,roofs:10262672,trim:8225416,glass:4156288},{name:"West Village",of:"on the edge of the Camelloo",kind:"village",at:[.23,.52],r:190,walls:13216644,roofs:9270608,trim:7298112},{name:"Bobo Village",of:"of the Rock People",kind:"village",at:[.87,.42],r:190,walls:7038304,roofs:4208687,trim:3025190}],dS={Estronic:[{name:"Ferra",lines:["Estronic sits in the middle of Continent Alpha, and every road you can see runs out to somewhere worth going.","The shipport is on the south side. Set down on a lit ring and nobody will complain."]},{name:"Oben",lines:["Fly north-east far enough and the ground goes white. That is the Spire, over in the Vulcans.","The Rock People live under it. They say the mountain is quiet. They say that every year."]},{name:"Sil",lines:["Astro Lake is a morning north of here. Big water, cold, and no bottom that anyone has found."]},{name:"Marn",lines:["West of us the green runs out and the Camelloo begins. Sand as far as you can fly.","There is one river into the Camelloo. One. Do not go out there expecting a second."]},{name:"Yeska",lines:["South and west is the Dwellers’ forest. Elves. Polite, and they would rather you did not."]},{name:"Colm",lines:["Do not cross the invisible barrier in the south-east without being asked. The Magica Republic keeps to itself."]},{name:"Vess",lines:["The tower in the middle? You can see it from outside the city. That is what it is for."]},{name:"Tarro",lines:["Monsters camp out in the wild country. Fires at night. Give them a wide berth or bring the gun."]},{name:"Enna",lines:["Two villages worth the trip: West Village out towards the sand, Bobo under the mountain."]},{name:"Rulf",lines:["Nine kingdoms’ worth of road meets in this city, and every one of them is somebody else’s edge of the world."]},{name:"Miot",lines:["Rivers run out of here in every direction. Follow one and you will get somewhere eventually."]},{name:"Sabb",lines:["I have never left the walls. There are no walls any more, and I have still never left."]},{name:"Della",lines:["Weather comes off Astro Lake. When the north goes grey, get indoors."]},{name:"Poy",lines:["Watch where you set that ship down. The pads are lit for a reason."]},{name:"Ivo",lines:["Everything north-east of here is uphill. Everything. I have walked it."]},{name:"Wren",lines:["You are the one with the spacecraft, then. We do not get many."]}],"West Village":[{name:"Idra",lines:["We are the last green thing before the sand. Fill your water here."]},{name:"Bo",lines:["The artificial river runs past us. Somebody dug it, long ago. Nobody remembers who."]},{name:"Halle",lines:["Camels come through in the season, out of the Camelloo. Big feet, worse tempers."]}],"Bobo Village":[{name:"Grud",lines:["You are standing on the Vulcans. Under us it is warm all the way down."]},{name:"Ashet",lines:["The Spire has a hole in the top and snow round it. Both true at once. That is the mountain for you."]},{name:"Perrin",lines:["A lava river ran through here once. You are walking on it."]}]},Qf=["Anse","Bett","Calla","Dov","Emm","Faro","Gale","Hesk","Ivet","Jarn","Kesta","Lom","Mira","Noll","Orin","Pell","Quill","Rue","Semm","Tavi","Ubba","Vell","Wick","Xan","Ysolde","Zeb","Arno","Bru","Cassi","Dell","Efa","Fitz","Gerd","Halm","Iska","Jory","Kip","Lenn","Morra","Nen","Obb","Pim","Ras","Sena","Toft","Ulla","Vero","Wenn","Yara","Zorn"],ep=["Mind the ships. They come in over the south side all day.","You are not from the city. Nobody from here looks up that much.","Market is better in the morning. Everything worth having has gone by noon.","That tower? Climb it if they let you. They will not let you.","Rain off the lake by evening, I should think.","Careful past the barrier. The wizards do not send anybody back.","The Camelloo road is dry the whole way. Take more water than you think.","My cousin walked to Bobo Village. Took her nine days and she has not stopped talking about it.","The rivers all start somewhere up in the Vulcans. All of them.","Do not camp in the open country. There are things out there with clubs.","Every street in this city ends at a gate. That was on purpose, they say.","You get used to the noise from the shipport. Mostly.","The Dwellers keep to their forest and we keep to our streets.","Estronic was three streets and a well, once. My grandfather says.","There is nothing north of the lake but weather.","If you are flying west, go over the sand, not round it. Round it takes a week.","Nobody has ever counted the buildings. People have tried.","Good day for it, whatever you are doing.","Astro Lake freezes at the edges some winters. Never the middle.","They light the landing rings at dusk. Prettiest thing in the city."],tp=[.89,.2],np=6,xt=i=>i/np,Ln=xt(3400),cr=xt(2100),ip=xt(3100),sp=xt(480),fS=xt(25),pS=xt(300),vi=2e4,mS=62e3,gS=127,rp=620,_S=-6,op=4200,xS=300,Ot=65e3,Jt=43e3,vS=.8,rs=0,ii={x:(tp[0]-.5)*2*65e3,z:(tp[1]-.5)*2*43e3,radius:5200,height:1450,craterR:520,craterDepth:320},ap=Math.tan(33*Math.PI/180);function yS(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const vu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],MS=.5*(Math.sqrt(3)-1),no=(3-Math.sqrt(3))/6;function Fa(i){const e=yS(i),t=new Uint8Array(512),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1)),o=n[s];n[s]=n[r],n[r]=o}for(let s=0;s<512;s++)t[s]=n[s&255];return function(r,o){const a=(r+o)*MS,c=Math.floor(r+a),l=Math.floor(o+a),u=(c+l)*no,h=r-(c-u),d=o-(l-u),f=h>d?1:0,g=h>d?0:1,_=h-f+no,p=d-g+no,m=h-1+2*no,M=d-1+2*no,x=c&255,y=l&255;let T=0,E=.5-h*h-d*d;if(E>0){const $=vu[t[x+t[y]]&7];E*=E,T+=E*E*($[0]*h+$[1]*d)}let A=.5-_*_-p*p;if(A>0){const $=vu[t[x+f+t[y+g]]&7];A*=A,T+=A*A*($[0]*_+$[1]*p)}let k=.5-m*m-M*M;if(k>0){const $=vu[t[x+1+t[y+1]]&7];k*=k,T+=k*k*($[0]*m+$[1]*M)}return 70*T}}const io=i=>i<0?0:i>1?1:i,Ft=(i,e,t)=>{const n=io((t-i)/(e-i));return n*n*(3-2*n)},Mn=(i,e,t)=>i+(e-i)*t,je={SEA:"sea",BEACH:"beach",PLAIN:"plain",SAVANNA:"savanna",FOREST:"forest",HILLS:"hills",MOUNTAIN:"mountain",SNOW:"snow",DUNES:"dunes",STONE_DESERT:"stone",SALT:"salt",BADLANDS:"badlands",MESA:"mesa"},rn={[je.SEA]:1915725,[je.BEACH]:13482642,[je.PLAIN]:6056771,[je.SAVANNA]:8680794,[je.FOREST]:3755310,[je.HILLS]:5465665,[je.MOUNTAIN]:8223340,[je.SNOW]:15265008,[je.DUNES]:11040327,[je.STONE_DESERT]:7369301,[je.SALT]:15721154,[je.BADLANDS]:9073235,[je.MESA]:10714715};function SS({seed:i=20260827}={}){const e=Fa(i),t=Fa(i+101),n=Fa(i+202),s=Fa(i+303);function r(I,G,L,Y,ne,te=.38){let se=0,ee=1,ce=0,he=1/ne;for(let Z=0;Z<Y;Z++)se+=I(G*he,L*he)*ee,ce+=ee,ee*=te,he*=2.02;return se/ce}function o(I,G,L,Y,ne,te=.42){let se=0,ee=1,ce=0,he=1/ne,Z=1;for(let R=0;R<Y;R++){let re=1-Math.abs(I(G*he,L*he));re*=re,re*=Z,Z=io(re*2.2),se+=re*ee,ce+=ee,ee*=te,he*=2.02}return se/ce}function a(I,G,L,Y){return[I+r(n,I,G,2,Y)*L,G+r(s,I,G,2,Y)*L]}function c(I,G){const L=r(e,I,G,4,mS,.42)*.3+1,Y=Math.max(Math.abs(I)/Ot,Math.abs(G)/Jt),ne=Ft(vS,1.02,Y)*2.4+Math.max(0,Y-1)*3;return L-ne}const l=lS.map(I=>({x:(I.at[0]-.5)*2*Ot,z:(I.at[1]-.5)*2*Jt,rr:(I.r*2*Ot)**2,uplift:I.uplift,moisture:I.moisture,heat:I.heat})),u=512,h=340,d=Ot*2/u,f=Jt*2/h;let g=null;function _(){const I=new Float32Array(u*h).fill(1e9),G=new Float32Array(u*h).fill(1e9),L=new Uint8Array(u*h),Y=(se,ee,ce)=>{const he=Math.round(ee*u),Z=Math.round(ce*h);he<0||Z<0||he>=u||Z>=h||(se[Z*u+he]=0)},ne=(se,ee)=>{for(let ce=0;ce<ee.length-1;ce++){const[he,Z]=ee[ce],[R,re]=ee[ce+1],oe=Math.ceil(Math.hypot((R-he)*u,(re-Z)*h))+1;for(let de=0;de<=oe;de++)Y(se,he+(R-he)*de/oe,Z+(re-Z)*de/oe)}};for(const se of uS)ne(I,se.points);for(const se of hS)ne(G,se.points);for(let se=0;se<h;se++){const ee=(se+.5)/h;for(let ce=0;ce<u;ce++){const he=(ce+.5)/u;let Z=!1;for(let R=0,re=xu.points.length,oe=re-1;R<re;oe=R++){const[de,be]=xu.points[R],[Ue,we]=xu.points[oe];be>ee!=we>ee&&he<(Ue-de)*(ee-be)/(we-be)+de&&(Z=!Z)}Z&&(L[se*u+ce]=1)}}const te=se=>{const ee=d,ce=f,he=Math.hypot(ee,ce);for(let Z=0;Z<h;Z++)for(let R=0;R<u;R++){const re=Z*u+R;let oe=se[re];R>0&&(oe=Math.min(oe,se[re-1]+ee)),Z>0&&(oe=Math.min(oe,se[re-u]+ce)),R>0&&Z>0&&(oe=Math.min(oe,se[re-u-1]+he)),R<u-1&&Z>0&&(oe=Math.min(oe,se[re-u+1]+he)),se[re]=oe}for(let Z=h-1;Z>=0;Z--)for(let R=u-1;R>=0;R--){const re=Z*u+R;let oe=se[re];R<u-1&&(oe=Math.min(oe,se[re+1]+ee)),Z<h-1&&(oe=Math.min(oe,se[re+u]+ce)),R<u-1&&Z<h-1&&(oe=Math.min(oe,se[re+u+1]+he)),R>0&&Z<h-1&&(oe=Math.min(oe,se[re+u-1]+he)),se[re]=oe}};return te(I),te(G),{river:I,ridge:G,lake:L}}function p(I,G,L){const Y=(G+Ot)/(Ot*2)*u-.5,ne=(L+Jt)/(Jt*2)*h-.5,te=Math.floor(Y),se=Math.floor(ne);if(te<0||se<0||te>=u-1||se>=h-1)return 1e9;const ee=Y-te,ce=ne-se,he=I[se*u+te],Z=I[se*u+te+1],R=I[(se+1)*u+te],re=I[(se+1)*u+te+1];return Mn(Mn(he,Z,ee),Mn(R,re,ee),ce)}const m=Zf.map(I=>({name:I.name,x:(I.at[0]-.5)*2*Ot,z:(I.at[1]-.5)*2*Jt,r:I.r,reach:I.r*2.4,level:0}));let M=!1,x=!1;const y={uplift:.5,moisture:.5,heat:.5};function T(I,G){const L=vi*.55,Y=I+r(t,I,G,2,vi*2.2)*L,ne=G+r(n,I,G,2,vi*2.2)*L;let te=0,se=0,ee=0,ce=0;for(const he of l){const Z=((Y-he.x)**2+(ne-he.z)**2)/he.rr,R=1/(Z*Z*Z+.02);te+=he.uplift*R,se+=he.moisture*R,ee+=he.heat*R,ce+=R}return y.uplift=te/ce,y.moisture=se/ce,y.heat=ee/ce,y}function E(I,G){return io(T(I,G).uplift+r(t,I+4e3,G-9e3,3,vi*.8,.45)*.22)}function A(I,G){return io(T(I,G).moisture+r(n,I-21e3,G+12e3,3,vi*.7,.45)*.2)}function k(I,G){return io(T(I,G).heat+r(s,I*.3+7e3,G,2,vi*1.6,.45)*.14)}function $(I,G,L){const Y=I/G,ne=Math.floor(Y),te=Y-ne;return(ne+Ft(0,1,Math.min(1,te*L)))*G}const v=.22,b=cr*v*ap;function C(I){const G=I-Math.floor(I),L=1-v;if(G<L){const Y=G/L;return Y*Y*(3-2*Y)}return 1-(G-L)/v}function D(I,G){return{continent:c(I,G),uplift:E(I,G),moisture:A(I,G),heat:k(I,G)}}const z=xt(150);function W(I,G,L){return I<z*.8&&L>.5?.05:.12+G*.45}function S(I){const{uplift:G,moisture:L}=I,Y=1-L;return{alpine:Ft(.56,.92,G)*(1-Ft(.42,.62,Y)),plateau:Ft(.58,.72,Y)*Ft(.36,.52,G)*(1-Ft(.66,.84,G)),sandy:Ft(.64,.84,Y)*(1-Ft(.34,.6,G))}}function H(I,G,L){const Y=L??D(I,G),{continent:ne,uplift:te,moisture:se}=Y,ee=1-se,{alpine:ce,plateau:he,sandy:Z}=S(Y);let R=r(e,I,G,3,vi*.9)*xt(90);if(R+=r(t,I,G,3,Ln*3.2)*sp*(.04+te*te*1.6),ce>.001){const[me,Ge]=a(I,G,Ln*.75,Ln*6);let ge=o(e,me,Ge,5,Ln*4);ge=Math.pow(ge,1.25),R=Mn(R,R+ge*ip,ce)}if(he>.01){const me=xt(1500)*(.45+te*.8)+r(t,I,G,2,Ln*6)*xt(260),[Ge,ge]=a(I,G,Ln*.8,Ln*5),Le=Ft(.55,.92,o(s,Ge,ge,3,Ln*3))*xt(1100);R=Mn(R,$(me-Le,xt(170),3.2),he)}const re=Math.hypot(I-ii.x,G-ii.z);if(re<ii.radius){const me=1-re/ii.radius,Ge=Math.atan2(G-ii.z,I-ii.x),ge=Math.sin(Ge*17+r(t,I,G,2,900)*2.2)*34*me*(1-me)*4,Ie=gS+Math.pow(me,1.6)*ii.height-Ft(ii.craterR,ii.craterR*.3,re)*ii.craterDepth-Math.abs(ge)+r(s,I,G,3,120,.5)*9;R=Mn(R,Ie,Ft(0,.34,me))}if(Z>.001){const me=r(t,I,G,2,vi*2)*.9,Ge=I*Math.cos(me)+G*Math.sin(me),ge=r(n,I,G,2,cr*5)*cr*.5,Ie=C((Ge+ge)/cr),Le=C((Ge*2.7-ge)/cr);R+=(Ie*.78+Le*.22)*b*Z}if(ee>.5&&R<z&&ne>.12){const me=Ft(.5,.72,ee)*Ft(z,xt(20),R);R=Mn(R,z*.55,me*.95)}const[oe,de]=a(I,G,Ln*1.2,Ln*7),be=o(n,oe,de,3,Ln*5),Ue=Ft(.5,.98,be);Ue>.001&&(R-=Ue*xt(340)*(.06+te*te*1.1)*(1-he*.8));const we=W(R,te,ee);we>.01&&(R+=r(s,I,G,3,17,.5)*we);const O=xt(760)*Ft(-.05,.55,ne),w=Ft(-.1,.14,ne),Q=Mn(-xt(900),xt(10),Ft(-.6,.14,ne));let ie=Mn(Q,R+O,w);M||N(),g||(g=_());const fe=p(g.ridge,I,G);fe<op&&(ie+=Ft(op,0,fe)*xS*w);const le=p(g.river,I+r(t,I,G,2,2600)*520,G+r(n,I,G,2,2600)*520);if(le<rp&&w>.01){const me=Ft(rp,0,le);ie=Mn(ie,Math.min(ie,_S),Math.min(1,me*1.25)*w)}const Pe=Math.round((I+Ot)/(Ot*2)*u),ye=Math.round((G+Jt)/(Jt*2)*h);if(Pe>=0&&ye>=0&&Pe<u&&ye<h&&g.lake[ye*u+Pe])ie=Math.min(ie,-xt(160));else if(Pe>=1&&ye>=1&&Pe<u-1&&ye<h-1){let me=0;for(const[Ge,ge]of[[1,0],[-1,0],[0,1],[0,-1]])me+=g.lake[(ye+ge)*u+Pe+Ge];me>0&&r(n,I,G,2,1400)>.1&&(ie=Math.min(ie,-xt(60)))}if(!x)for(const me of m){const Ge=Math.hypot(I-me.x,G-me.z);Ge>me.reach||(ie=Mn(ie,me.level,Ft(me.reach,me.r*.75,Ge)))}return ie}function N(){M=!0,x=!0;for(const I of m){let G=0,L=0;for(let Y=0;Y<12;Y++){const ne=Y/12*Math.PI*2,te=I.r*(Y%2?.75:.35);G+=H(I.x+Math.cos(ne)*te,I.z+Math.sin(ne)*te),L++}I.level=G/L}x=!1}function X(I,G,L=4){const Y=D(I,G),ne=H(I,G,Y),te=H(I+L,G)-H(I-L,G),se=H(I,G+L)-H(I,G-L),ee=Math.atan(Math.hypot(te,se)/(2*L));return{height:ne,slope:ee,slopeDeg:ee*180/Math.PI,region:Y,biome:U(I,G,ne,ee,Y)}}function U(I,G,L,Y,ne){if(L<=rs)return je.SEA;const{uplift:te,moisture:se,heat:ee}=ne,ce=1-se,he=Y*180/Math.PI,{alpine:Z,plateau:R,sandy:re}=S(ne),oe=Mn(xt(1500),xt(6400),ee);if(L>oe&&!(R>Z))return je.SNOW;const de=oe*.62;return L<xt(40)&&he<3&&ce<.55?je.BEACH:R>.35&&R>=Z?L<z*.8&&he<2.5?je.SALT:te>.44?je.MESA:je.BADLANDS:re>.35&&re>=Z?L<z*.8&&he<2.5?je.SALT:je.DUNES:ce>.58?L<z*.8&&he<2.5?je.SALT:he>30||L>de?je.MOUNTAIN:je.STONE_DESERT:he>30||L>de?je.MOUNTAIN:se<.5?je.SAVANNA:te>.62||he>13?je.HILLS:se>.66?je.FOREST:je.PLAIN}function K(I,G){return X(I,G).biome}return{heightAt:H,sampleAt:X,biomeAt:K,regionAt:D,continentField:c,upliftField:E,moistureField:A,heatField:k,styleAt:S,get towns(){return M||N(),m},snowlineAt(I,G){return Mn(xt(1500),xt(6400),k(I,G))},seaLevel:rs,constants:{SHRINK:np,RIDGE_SPACING:Ln,DUNE_SPACING:cr,MOUNTAIN_RELIEF:ip,HILL_RELIEF:sp,PLAIN_RELIEF:fS,DUNE_HEIGHT:pS,REGION_SIZE:vi,REPOSE:ap}}}function Sn(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ut;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=cp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=cp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function cp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Dt(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function lp(i,e){if(e===Y0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qc||e===Eh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===qc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function bS(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wS(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const so=3.2,ES=4;function AS(i,e,{x:t,z:n,w:s,d:r,storeys:o}){const a=o*so,c=new gt(s,a,r);if(c.translate(t,a/2,n),i.push(c),o>=4){const u=new gt(s+1.4,1.2,r+1.4);u.translate(t,a+.6,n),i.push(u)}const l=Math.max(1,Math.min(ES,Math.round(o/3)));for(let u=0;u<l;u++){const h=(u+.6)/l*a,d=Math.min(2.4,a/l*.42),f=new gt(s+.5,d,r+.5);f.translate(t,h,n),e.push(f)}}function TS(i,e,{x:t,z:n,w:s,d:r,storeys:o,angle:a}){const c=o*so,l=new gt(s,c,r);l.translate(0,c/2,0);const u=new ln(Math.hypot(s,r)*.54,Math.max(1.6,c*.34),4);u.rotateY(Math.PI/4),u.translate(0,c+Math.max(1.6,c*.34)/2,0);for(const h of[l,u])h.rotateY(a),h.translate(t,0,n);return i.push(l),e.push(u),{x:t,z:n,halfX:Math.max(s,r)*.5,halfZ:Math.max(s,r)*.5}}function RS(i,e,t,n){const s=bS(wS(i.name)),r=[],o=[],a=[],c=[],l=[],u=[],h=[],d=[],f=[],g=[],_=x=>{d.push(TS(r,o,x))};if(i.kind==="capital"){const T=Math.max(3,Math.round(i.r*.78/96)),E=new ft(i.r*.82,i.r*.86,.4,40);E.translate(0,.2,0),l.push(E);const A=so*60,k=new gt(26,A,26);k.translate(0,A/2,0),r.push(k);const $=new gt(26.6,A*.82,18);$.translate(0,A*.5,0),c.push($);const v=new ft(.8,1.3,38,6);v.translate(0,A+19,0),a.push(v),d.push({x:0,z:0,halfX:15,halfZ:15});for(let N=-T;N<=T;N++)for(let X=-T;X<=T;X++){if(N===0&&X===0)continue;const U=N*96,K=X*96,I=Math.hypot(N,X)/(T+.5);if(I>1.05||N>=T-5.4&&X>=T-5||s()<.19)continue;const G=76,L=s()<.62?1:2,Y=s()<.58?1:2;for(let ne=0;ne<L;ne++)for(let te=0;te<Y;te++){const se=G/L,ee=G/Y,ce=se-5-s()*4,he=ee-5-s()*4;if(ce<8||he<8)continue;const Z=(ne-(L-1)/2)*se,R=(te-(Y-1)/2)*ee,re=Math.max(0,1-I),oe=Math.max(2,Math.round(re**1.6*20+2+(s()<.12?9:0)+s()*3));AS(r,c,{x:U+Z,z:K+R,w:ce,d:he,storeys:oe}),d.push({x:U+Z,z:K+R,halfX:ce/2,halfZ:he/2})}}const b=["apothecary","gunsmith","shipwright"];for(const[N,X]of b.entries()){const U=N/b.length*Math.PI*2+.55,K=96*1.15,I=Math.cos(U)*K,G=Math.sin(U)*K,L=U+Math.PI,Y=26,ne=17,te=so*2,se=new gt(Y,te,ne);se.translate(0,te/2,0),se.rotateY(-L),se.translate(I,0,G),r.push(se);const ee=new gt(Y*.8,.6,4.5);ee.translate(0,te*.62,ne/2+2),ee.rotateY(-L),ee.translate(I,0,G),h.push(ee);const ce=new gt(Y*.5,2.2,.5);ce.translate(0,te*.82,ne/2+.4),ce.rotateY(-L),ce.translate(I,0,G),h.push(ce),d.push({x:I,z:G,halfX:Math.max(Y,ne)/2,halfZ:Math.max(Y,ne)/2});const he=Math.max(Y,ne)/2+4.5;g.push({kind:X,x:I+Math.sin(L)*he,z:G+Math.cos(L)*he})}const C=96*(T-3.4),D=96*(T-3),z=new gt(96*3.4,.5,96*2.6);z.translate(C,.25,D),l.push(z);for(let N=0;N<4;N++){const X=C+(N%2-.5)*96*1.6,U=D+(Math.floor(N/2)-.5)*96*1.2,K=new In(13,.7,5,20);K.rotateX(Math.PI/2),K.translate(X,.7,U),u.push(K),f.push({x:X,z:U,r:13})}const W=so*12,S=new ft(3.4,4.6,W,10);S.translate(C-96*1.9,W/2,D-96*1.5),r.push(S);const H=new ft(9,7,9,10);H.translate(C-96*1.9,W+4.5,D-96*1.5),c.push(H),d.push({x:C-96*1.9,z:D-96*1.5,halfX:5,halfZ:5});for(let N=0;N<2;N++){const X=C+(N-.5)*96*1.7,U=D+96*1.15,K=new gt(96*1.3,13,26);K.translate(X,6.5,U),r.push(K);const I=new ft(13,13,96*1.3,12,1,!1,0,Math.PI);I.rotateZ(Math.PI/2),I.translate(X,13,U),a.push(I),d.push({x:X,z:U,halfX:96*.65,halfZ:13})}}else{const x=13+Math.floor(s()*5);for(let T=0;T<x;T++){const E=T/x*Math.PI*2+s()*.4,A=i.r*(.3+s()*.42);_({x:Math.cos(E)*A,z:Math.sin(E)*A,w:7+s()*6,d:7+s()*6,storeys:1+Math.floor(s()*2),angle:E+Math.PI/2+(s()-.5)*.5})}const y=new ft(2.2,2.4,1.6,10);y.translate(0,.8,0),a.push(y),d.push({x:0,z:0,halfX:2.6,halfZ:2.6})}const p=(x,y)=>!d.some(T=>Math.abs(x-T.x)<T.halfX+.8&&Math.abs(y-T.z)<T.halfZ+.8);for(const x of g){if(p(x.x,x.z))continue;const y=Math.atan2(x.z,x.x);let T=!1;for(let E=4;E<=40&&!T;E+=4)for(let A=0;A<12&&!T;A++){const k=y+(A%2?1:-1)*Math.ceil(A/2)*.42,$=x.x+Math.cos(k)*E,v=x.z+Math.sin(k)*E;p($,v)&&(x.x=$,x.z=v,T=!0)}}const m=new rt,M=[[r,new Ve({color:i.walls,roughness:.92})],[o,new Ve({color:i.roofs,roughness:.86})],[a,new Ve({color:i.trim,roughness:.95})],[c,new Ve({color:i.glass??2375758,roughness:.12,metalness:.72})],[l,new Ve({color:7237750,roughness:.98})],[h,new Ve({color:12866879,roughness:.85})],[u,new Ve({color:10476778,emissive:3135231,emissiveIntensity:.45,roughness:.6})]];for(const[x,y]of M){if(!x.length)continue;const T=Sn(x,!1);for(const A of x)A.dispose();const E=new pe(T,y);E.castShadow=!0,E.receiveShadow=!0,m.add(E)}m.position.set(e,n,t);for(const x of d)x.x+=e,x.z+=t;return{group:m,footprints:d,name:i.name,kind:i.kind,x:e,z:t,level:n,radius:i.r,pads:f.map(x=>({x:x.x+e,z:x.z+t,r:x.r})),shops:g.map(x=>({...x,x:x.x+e,z:x.z+t}))}}const yu=.9,CS=1.25,up=.42,PS=Math.PI/(2*yu*Math.sin(up)),IS=3.4,hp=190,LS=110,dp=[2577791,6106982,2059084,9067026,3949136,9318186,1467757,8003664,4877084,10111504,2898804,7168800],NS=5067871,fp=[14198404,11565653,9067068,15713956],pp=[3810328,1906450,5914918,8088147,2763310],mp=5504925;function DS(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function os(i,e,t){return new gt(i,e,t)}function as(i){return Sn(i.map(e=>e.index?e.toNonIndexed():e),!1)}function Lt(i,e,t,n,s=0,r=0,o=0){return s&&i.rotateX(s),r&&i.rotateY(r),o&&i.rotateZ(o),i.translate(e,t,n),i}function US(){const i=[[.145,.02],[.128,.12],[.132,.23],[.155,.35],[.163,.46],[.148,.55],[.095,.6]].map(([r,o])=>new Se(r,o)),e=new Gr(i,10);e.scale(1,1,.78);const t=new Ke(.152,10,5);t.scale(1.04,.58,.82);const n=new In(.152,.026,6,12),s=new ft(.05,.056,.09,6,1,!0);return as([e,Lt(t,0,.01,0),Lt(n,0,.08,0,Math.PI/2),Lt(s,0,.63,0)])}function OS(){const i=os(.24,.28,.06),e=[Lt(i,0,.42,.105,-.06),Lt(os(.026,.18,.03),0,.44,.145),Lt(os(.22,.26,.05),0,.4,-.1,.05)];for(const t of[-1,1]){const n=new Ke(.105,8,5);n.scale(1,.78,.92),e.push(Lt(n,t*.195,.545,0)),e.push(Lt(os(.1,.16,.05),t*.1,-.16,.07)),e.push(Lt(os(.09,.2,.05),t*.085,-.61,.055))}return as(e)}function FS(){const i=new Ke(.104,10,7);i.scale(.95,1.14,1);const e=new Ke(.07,8,5);e.scale(.94,.82,1.04);const t=new ln(.018,.042,5);return as([Lt(i,0,.77,0),Lt(e,0,.71,.014),Lt(t,0,.756,.095,Math.PI*.52)])}function BS(){const i=[],e=[[0,.862,-.01,.1],[-.05,.842,.05,.074],[.052,.845,.045,.072],[-.01,.828,-.075,.08]];for(const[t,n,s,r]of e){const o=new Ke(r,6,4);o.scale(1.1,.66,1.05),i.push(Lt(o,t,n,s))}return as(i)}function kS(){const i=new ft(.107,.107,.05,8,1,!0,-.95,1.9),e=new Ke(.03,6,4);return e.scale(1.5,1,.45),as([Lt(i,0,.775,0),Lt(e,0,.08,.132)])}function gp(){const i=new Ke(.062,6,4),e=new pn(.052,.22,2,6),t=new Ke(.05,6,4),n=new pn(.046,.2,2,6);return as([i,Lt(e,0,-.15,0),Lt(t,0,-.29,0),Lt(n,0,-.4,0),Lt(os(.1,.11,.08),0,-.52,.01)])}function _p(){const i=new pn(.082,.3,2,6),e=new Ke(.076,6,4),t=new pn(.068,.28,2,6);return as([Lt(i,0,-.21,0),Lt(e,0,-.42,0),Lt(t,0,-.62,0),Lt(os(.11,.1,.24),0,-.845,.035)])}function zS({town:i,count:e,isStreet:t,seed:n=1,anchors:s=[],lift:r=0}){const o=DS(n),a=new Ve({roughness:.78,metalness:.15}),c=new Ve({color:NS,roughness:.45,metalness:.55}),l=new Ve({roughness:.85}),u=new Ve({roughness:.95}),h=new Ve({color:mp,emissive:mp,emissiveIntensity:1.1,roughness:.4}),d=[{key:"suit",geom:US(),mat:a,tint:1},{key:"plates",geom:OS(),mat:c,tint:-1},{key:"skin",geom:FS(),mat:l,tint:0},{key:"hair",geom:BS(),mat:u,tint:0},{key:"glow",geom:kS(),mat:h,tint:-1},{key:"armL",geom:gp(),mat:a,tint:.82},{key:"armR",geom:gp(),mat:a,tint:.82},{key:"legL",geom:_p(),mat:a,tint:.7},{key:"legR",geom:_p(),mat:a,tint:.7}],f=Math.min(e,LS),g={},_={},p=new rt;for(const S of d){const H=new Dl(S.geom,S.mat,f);H.instanceMatrix.setUsage(Ch),H.frustumCulled=!1,H.castShadow=!0,H.count=0,S.tint>=0&&(H.instanceColor=new ha(new Float32Array(f*3),3),H.instanceColor.setUsage(Ch),_[S.key]=new Float32Array(e*3)),g[S.key]=H,p.add(H)}const m=d.filter(S=>S.tint>=0).map(S=>S.key),M=new Int32Array(f).fill(-1),x=new Xe,y=new Je,T=new Kt,E=new $t(0,0,0,"YXZ"),A=new B,k=new B(1,1,1);function $(S){const H=S?S.spread:i.radius*.7,N=S?S.x:i.x,X=S?S.z:i.z;for(let U=0;U<40;U++){const K=o()*Math.PI*2,I=Math.sqrt(o())*H,G=N+Math.cos(K)*I,L=X+Math.sin(K)*I;if(t(G,L))return{x:G,z:L}}for(let U=0;U<24;U++){const K=U/24*Math.PI*2,I=i.x+Math.cos(K)*i.radius*.12,G=i.z+Math.sin(K)*i.radius*.12;if(t(I,G))return{x:I,z:G}}return{x:i.x+i.radius*.2,z:i.z}}function v(S,H,N){for(let X=0;X<8;X++){const U=$(N),K=Math.max(2,Math.min(90,Math.ceil(Math.hypot(U.x-S,U.z-H)/5)));let I=!0;for(let G=1;G<=K&&I;G++){const L=G/K;I=t(S+(U.x-S)*L,H+(U.z-H)*L)}if(I)return U}return{x:S,z:H}}const b=s.length?s:[{x:i.x,z:i.z,spread:i.radius*.7,share:1}];let C=0;const D=b.map(S=>(C+=S.share,{...S,upTo:C})),z=[];for(let S=0;S<e;S++){const H=o()*C,N=D.find(G=>H<=G.upTo)??D[D.length-1],X=$(N),U=dp[Math.floor(o()*dp.length)],K=fp[Math.floor(o()*fp.length)],I=pp[Math.floor(o()*pp.length)];z.push({x:X.x,z:X.z,heading:o()*Math.PI*2,to:{x:X.x,z:X.z},phase:o()*Math.PI*2,wait:o()*2.2,home:N,suit:U,shirt:U,skinTone:K,hair:I,talking:!1});for(const G of d)G.tint<0||(G.key==="skin"?x.setHex(K):G.key==="hair"?x.setHex(I):x.setHex(U).multiplyScalar(G.tint),_[G.key][S*3]=Math.min(1,x.r),_[G.key][S*3+1]=Math.min(1,x.g),_[G.key][S*3+2]=Math.min(1,x.b))}function W(S,H,N){const X=Math.sin(H.phase)*(H.moving?up:.03),U=N+yu-yu*(1-Math.cos(X)),K=H.heading,I=Math.cos(K),G=-Math.sin(K);E.set(H.moving?.05:0,K,0),T.setFromEuler(E),A.set(H.x,U,H.z),y.compose(A,T,k);for(const L of["suit","plates","skin","hair","glow"])g[L].setMatrixAt(S,y);for(const[L,Y]of[["armL",-1],["armR",1]])E.set(X*Y*.7,K,0),T.setFromEuler(E),A.set(H.x+I*.195*Y,U+.55,H.z+G*.195*Y),y.compose(A,T,k),g[L].setMatrixAt(S,y);for(const[L,Y]of[["legL",1],["legR",-1]])E.set(X*Y,K,0),T.setFromEuler(E),A.set(H.x+I*.085*Y,U,H.z+G*.085*Y),y.compose(A,T,k),g[L].setMatrixAt(S,y)}return{group:p,folk:z,mesh:g,material:{skin:l,cloth:a,armour:c,hair:u,glow:h},update(S,H,N=i.x,X=i.z){const U=[];for(let K=0;K<z.length;K++){const I=z[K];if(I.talking||I.stays)I.moving=!1;else if(I.wait>0)I.wait-=S,I.moving=!1;else{const L=I.to.x-I.x,Y=I.to.z-I.z,ne=Math.hypot(L,Y);if(ne<1.2)I.to=v(I.x,I.z,I.home),I.wait=.8+Math.random()*3.5,I.moving=!1;else{I.moving=!0;const te=Math.min(ne,CS*S);I.x+=L/ne*te,I.z+=Y/ne*te;let ee=Math.atan2(L,Y)-I.heading;for(;ee>Math.PI;)ee-=Math.PI*2;for(;ee<-Math.PI;)ee+=Math.PI*2;I.heading+=ee*Math.min(1,S*5),I.phase+=te*PS}}const G=(I.x-N)**2+(I.z-X)**2;G<hp*hp&&U.push({i:K,d2:G})}U.length>f&&(U.sort((K,I)=>K.d2-I.d2),U.length=f);for(let K=0;K<U.length;K++){const I=U[K].i,G=z[I];if(W(K,G,H(G.x,G.z)+r),M[K]!==I){M[K]=I;for(const L of m){const Y=g[L].instanceColor;Y.array[K*3]=_[L][I*3],Y.array[K*3+1]=_[L][I*3+1],Y.array[K*3+2]=_[L][I*3+2],Y.needsUpdate=!0}}}for(const K of d)g[K.key].count=U.length,g[K.key].instanceMatrix.needsUpdate=!0},nearest(S,H){let N=null,X=IS;for(const U of z){const K=Math.hypot(U.x-S,U.z-H);K<X&&(X=K,N=U)}return N},startTalking(S,H,N){S.talking=!0,S.heading=Math.atan2(H-S.x,N-S.z)},stopTalking(S){S&&(S.talking=!1)}}}const ro=6,yi=17,xp=64,oo=9,vp=2,Mu=xp*vp**(oo-1)*ro/2,Ba=new Xe,si=new Xe,ka={height:0,slopeDeg:0,region:null},HS=3,lr=i=>i<0?0:i>1?1:i,za=(i,e,t)=>{const n=lr((t-i)/(e-i));return n*n*(3-2*n)},Su=xt(140),yp=xt(45),GS=8;function VS({seed:i=20260827}={}){const e=SS({seed:i}),t=new rt,n=new Ve({vertexColors:!0,roughness:.96,metalness:0,flatShading:!1}),s=[];for(let C=0;C<oo;C++){const D=xp*vp**C,z={tileSize:D,step:D/(yi-1),centre:{i:NaN,j:NaN},holeKey:null,tiles:[],spare:[],group:new rt};z.group.renderOrder=oo-C;for(let W=0;W<ro*ro+12;W++){const S=new Vs(D,D,yi-1,yi-1);S.rotateX(-Math.PI/2),S.setAttribute("color",new Dt(new Float32Array(yi*yi*3),3));const H=new pe(S,n);H.name=`ground-r${C}`,H.receiveShadow=!0,H.frustumCulled=!0,H.matrixAutoUpdate=!1,z.tiles.push({mesh:H,i:NaN,j:NaN}),z.group.add(H)}s.push(z),t.add(z.group)}for(let C=1;C<oo;C++)s[C].group.position.y=-.05*s[C].step;const r=Zf.map(C=>{const D=e.towns.find(S=>S.name===C.name),z=RS(C,D.x,D.z,D.level);z.group.visible=!1,t.add(z.group);const W=dS[C.name]??[];if(W.length){const S=C.kind==="capital"?Math.round(C.r/6):W.length,H=C.kind==="capital"?[{x:z.x,z:z.z,spread:240,share:.4},...z.pads.map(N=>({x:N.x,z:N.z,spread:120,share:.06})),{x:z.x,z:z.z,spread:C.r*.62,share:.36}]:[];z.people=zS({town:z,anchors:H,lift:C.kind==="capital"?.4:0,count:Math.max(W.length,S),seed:7+C.name.length*31,isStreet:(N,X)=>!z.footprints.some(U=>Math.abs(N-U.x)<U.halfX+1.4&&Math.abs(X-U.z)<U.halfZ+1.4)});for(const[N,X]of(z.shops??[]).entries()){const U=z.people.folk[N];if(!U)break;U.x=X.x,U.z=X.z,U.to={x:X.x,z:X.z},U.heading=Math.atan2(z.x-X.x,z.z-X.z),U.stays=!0,U.shop=X.kind}for(const[N,X]of z.people.folk.entries()){if(X.shop)X.name=X.shop,X.lines=[];else if(N<W.length)X.name=W[N].name,X.lines=W[N].lines;else{const U=N-W.length;X.name=Qf[U%Qf.length],X.lines=[ep[(U*7+N)%ep.length]]}X.said=0,X.town=C.name}z.people.group.visible=!1,t.add(z.people.group)}return z}),o=4200,a=new pe(new Vs(Mu*2.4,Mu*2.4,1,1),new Ve({color:rn[je.SEA],roughness:.22,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.y=rs,a.renderOrder=oo+1,t.add(a);function c(C,D,z,W){const{height:S,slopeDeg:H,region:N}=z,X=1-N.moisture,{sandy:U,plateau:K}=e.styleAt(N);W.setHex(rn[je.FOREST]),W.lerp(si.setHex(rn[je.PLAIN]),za(.28,.44,X)),W.lerp(si.setHex(rn[je.SAVANNA]),za(.42,.58,X)),W.lerp(si.setHex(rn[je.STONE_DESERT]),za(.55,.68,X)),W.lerp(si.setHex(rn[je.MESA]),K*.85),W.lerp(si.setHex(rn[je.DUNES]),U);const I=lr((H-24)/22);I>0&&W.lerp(si.setHex(7169884),I*.85);const G=e.snowlineAt(C,D),L=lr((S-G*.86)/(G*.3));if(L>0&&W.lerp(si.setHex(rn[je.SNOW]),L*lr(1-H/52)),X>.5&&S<Su&&H<4&&W.lerp(si.setHex(rn[je.SALT]),za(Su,Su*.4,S)*.9),S<yp&&S>rs){const Y=1-lr(S/yp);W.lerp(si.setHex(rn[je.BEACH]),Y*Y*.8)}return S<=rs&&W.lerp(si.setHex(860464),lr(-S/xt(500))),W}const l=2,u=yi+l*2,h=new Float64Array(u*u);function d(C,D,z,W){const S=z*C.tileSize,H=W*C.tileSize,N=D.mesh.geometry.attributes.position,X=D.mesh.geometry.attributes.color,U=D.mesh.geometry.attributes.normal,K=N.array,I=X.array,G=U.array,L=C.step,Y=S-C.tileSize/2,ne=H-C.tileSize/2;for(let ee=0;ee<u;ee++){const ce=ne+(ee-l)*L;for(let he=0;he<u;he++)h[ee*u+he]=e.heightAt(Y+(he-l)*L,ce)}const te=Math.max(1,Math.min(l,Math.round(GS/L))),se=2*te*L;for(let ee=0;ee<yi;ee++)for(let ce=0;ce<yi;ce++){const Z=(ee*yi+ce)*3,R=ce+l,re=ee+l,oe=Y+ce*L,de=ne+ee*L,be=h[re*u+R];K[Z]=oe-S,K[Z+1]=be,K[Z+2]=de-H;const Ue=(h[re*u+R+te]-h[re*u+R-te])/se,we=(h[(re+te)*u+R]-h[(re-te)*u+R])/se,O=Math.hypot(Ue,1,we);G[Z]=-Ue/O,G[Z+1]=1/O,G[Z+2]=-we/O,ka.height=be,ka.slopeDeg=Math.atan(Math.hypot(Ue,we))*180/Math.PI,ka.region=e.regionAt(oe,de),c(oe,de,ka,Ba),I[Z]=Ba.r,I[Z+1]=Ba.g,I[Z+2]=Ba.b}N.needsUpdate=!0,X.needsUpdate=!0,U.needsUpdate=!0,D.mesh.geometry.computeBoundingSphere(),D.mesh.position.set(S,0,H),D.mesh.visible=!0,D.mesh.updateMatrix(),D.i=z,D.j=W}function f(C,D){return Math.round((C/D-1)/2)*2+1}let g=0,_=0;const p=[];function m(C,D){let z=null;for(const W of s){const S=f(C,W.tileSize),H=f(D,W.tileSize),N=z;z={x:S*W.tileSize,z:H*W.tileSize,half:ro*W.tileSize/2};const X=N?`${N.x},${N.z}`:"";if(S===W.centre.i&&H===W.centre.j&&X===W.holeKey)continue;W.centre.i=S,W.centre.j=H,W.holeKey=X;const U=(ro-1)/2,K=new Set;for(let L=-U;L<=U;L++)for(let Y=-U;Y<=U;Y++){if(N){const ne=(S+Y)*W.tileSize,te=(H+L)*W.tileSize,se=W.tileSize/2;if(Math.abs(ne-N.x)+se<=N.half&&Math.abs(te-N.z)+se<=N.half)continue}K.add(`${S+Y},${H+L}`)}const I=new Set,G=[];for(const L of W.tiles){const Y=`${L.i},${L.j}`;K.has(Y)&&!I.has(Y)?I.add(Y):G.push(L)}for(const L of G)L.mesh.visible=!1,L.i=NaN,L.j=NaN;W.spare=G;for(let L=p.length-1;L>=0;L--)p[L].ring===W&&p.splice(L,1);for(const L of K){if(I.has(L))continue;const[Y,ne]=L.split(",").map(Number);p.push({ring:W,i:Y,j:ne,d2:(Y*W.tileSize-C)**2+(ne*W.tileSize-D)**2})}}p.sort((W,S)=>W.d2-S.d2),a.position.x=C,a.position.z=D;for(const W of r)W.group.visible=Math.hypot(W.x-C,W.z-D)<o+W.radius,W.people&&(W.people.group.visible=Math.hypot(W.x-C,W.z-D)<W.radius+700);M(HS)}function M(C){const D=performance.now();for(;p.length&&performance.now()-D<C;){const z=p.shift(),W=z.ring.spare.pop();W&&(d(z.ring,W,z.i,z.j),g++)}_=performance.now()-D}function x(C,D){return e.heightAt(C,D)}function y(C,D,z=3){const W=e.sampleAt(C,D,Math.max(2,z));return W.height<=rs+1.5||W.slopeDeg>=12?!1:!T(C,D,z)}function T(C,D,z=0){for(const W of r)if(!(Math.hypot(W.x-C,W.z-D)>W.radius*1.4)){for(const S of W.footprints)if(Math.abs(C-S.x)<S.halfX+z&&Math.abs(D-S.z)<S.halfZ+z)return S}return null}const E=38,A=[0,0];function k(C,D,z,W=[]){W[0]=C,W[1]=D;const S=T(C,D,z??.4);if(S){const G=z??.4,L=C-S.x,Y=D-S.z,ne=S.halfX+G-Math.abs(L),te=S.halfZ+G-Math.abs(Y);return ne<te?W[0]=S.x+Math.sign(L||1)*(S.halfX+G):W[1]=S.z+Math.sign(Y||1)*(S.halfZ+G),W}if(e.sampleAt(C,D,2).slopeDeg<=E)return W;const N=4,X=e.heightAt(C+N,D)-e.heightAt(C-N,D),U=e.heightAt(C,D+N)-e.heightAt(C,D-N),K=Math.hypot(X,U);if(K<1e-5)return W;A[0]=X/K,A[1]=U/K;const I=Math.max(.35,z??.5);return W[0]=C-A[0]*I,W[1]=D-A[1]*I,W}function $(){for(let D=1;D<9e3;D++){const z=14e3+90*Math.sqrt(D),W=Math.cos(D*.7)*z,S=Math.sin(D*.7)*z,H=e.sampleAt(W,S,6);if(!(H.height<20||H.height>320||H.slopeDeg>5)&&!(H.biome===je.SEA||H.biome===je.SALT||H.biome===je.SNOW))return{x:W,z:S,height:H.height,biome:H.biome}}return{x:14e3,z:0,height:e.heightAt(14e3,0),biome:e.biomeAt(14e3,0)}}function v(){const C=r.find(D=>D.kind==="capital"&&D.pads.length);if(C){const D=C.pads[0];return{x:D.x,z:D.z,height:C.level,biome:"the shipport"}}return $()}const b=v();return{group:t,terrain:e,setFocus:m,flush(){M(1/0)},update(C,D=0,z=0){for(const W of r)!W.people||!W.people.group.visible||W.people.update(C,x,D,z)},nearestPerson(C,D){for(const z of r){if(!z.people||!z.people.group.visible||Math.hypot(z.x-C,z.z-D)>z.radius*1.6)continue;const W=z.people.nearest(C,D);if(W)return{person:W,people:z.people}}return null},groundHeightAt:x,resolveWalk:k,isClear:y,findLandingSite:$,spawn:new B(b.x,b.height,b.z),heading:-Math.PI/2,info:{name:"an unnamed world",biomeAt:(C,D)=>e.biomeAt(C,D),get tilesBuilt(){return g},settlements:r,get build(){return{ms:+_.toFixed(2),queued:p.length}},reach:Mu}}}const $e=new B(0,-2e4,0),WS=22,XS=2800,Mp=1,qS=4,YS=1,Sp=10340847,KS=1600,$S=34e3,bp=24e3;function jS(i,e,t,n=()=>{}){const s=VS();s.group.position.copy($e),s.group.visible=!1,i.add(s.group);const r=new B().copy(s.spawn);let o=!1;const a=t.far,c=1.6,l=.9,u=new xi(16774112,0);u.position.set(-260,420,180).add($e),u.target.position.copy($e),i.add(u.target),i.add(u);const h=new Ta(12377343,6978386,0);h.position.copy($e),i.add(h);const d=document.createElement("div");d.id="landing-banner",d.hidden=!0,d.innerHTML=`
    <div class="landing-banner__town"></div>
    <div class="landing-banner__street"></div>
    <div class="landing-banner__hint"></div>
  `,document.body.appendChild(d),d.querySelector(".landing-banner__town").textContent=Ae.surface.town,d.querySelector(".landing-banner__street").textContent=Ae.surface.street,d.querySelector(".landing-banner__hint").textContent=Ae.surface.leaveHint;const f=new $t;let g=!1,_=!1,p=null,m=null,M=0;const x=new B,y=i.background,T=i.fog.color.clone();function E(C){return C.mesh.position.distanceTo(Qr)<eo+WS}function A(C){return C.mesh.position.y-$e.y}const k=[[0,0],[1.4,0],[-1.25,0],[0,.9],[0,-.9]];function $(C){const D=f.setFromQuaternion(C.mesh.quaternion,"YXZ"),z=Math.sin(D.y),W=Math.cos(D.y),S=C.mesh.scale.x;let H=-1/0;for(const[N,X]of k){const U=C.mesh.position.x+(z*N+W*X)*S,K=C.mesh.position.z+(W*N-z*X)*S,I=s.groundHeightAt(U-$e.x,K-$e.z);I>H&&(H=I)}return H}function v(C){if(g)return;g=!0,x.copy(C.mesh.position).sub(Qr).setLength(eo+60).add(Qr),s.group.visible=!0,u.intensity=c,h.intensity=l,C.mesh.scale.setScalar(qS);for(const z of e)z.visible=!1;i.background=new Xe(Sp),i.fog.color.setHex(Sp),i.fog.near=KS,i.fog.far=$S;const D=o?r:s.spawn;o=!0,s.setFocus(D.x,D.z),s.flush(),C.mesh.position.set(D.x,s.groundHeightAt(D.x,D.z)+90,D.z).add($e),C.mesh.quaternion.setFromEuler(new $t(0,s.heading,0,"YXZ")),C.velocity.set(0,0,0),t.far=bp,t.updateProjectionMatrix(),n(),d.querySelector(".landing-banner__street").textContent=Ae.surface.ground[s.info.biomeAt(D.x,D.z)]??Ae.surface.street,d.hidden=!1,d.classList.remove("landing-banner--fading"),M=6}function b(C){if(!g)return;g=!1,_=!1,C.mesh.scale.setScalar(1),r.set(C.mesh.position.x-$e.x,0,C.mesh.position.z-$e.z),t.far=a,t.updateProjectionMatrix(),s.group.visible=!1,u.intensity=0,h.intensity=0;for(const z of e)z.visible=!0;i.background=y,i.fog.color.copy(T),i.fog.near=Mf,i.fog.far=Sf,C.mesh.position.copy(x);const D=x.clone().sub(Qr).normalize();C.mesh.quaternion.setFromUnitVectors(new B(0,0,1),D),C.velocity.set(0,0,0),n(),d.hidden=!0}return{watchFrom(C,D){p=C,m=D},get active(){return g},get parked(){return _},world:s,enter:v,exit:b,altitude:A,hullGroundY(C){return $e.y+$(C)},park(){_=!0},unpark(){_=!1},prewarm(C,D){s.setFocus(s.spawn.x,s.spawn.z),s.flush(),s.group.visible=!0,u.intensity=c,h.intensity=l,C.compile(i,D);const z=new Gt(60,D.aspect,.1,bp);z.position.copy($e).add(s.spawn).add(new B(0,160,320)),z.lookAt(new B().copy($e).add(s.spawn)),C.render(i,z),s.group.visible=!1,u.intensity=0,h.intensity=0,C.render(i,D)},update(C,D){if(!g){E(C)&&v(C);return}if(s.update(D,p??C.mesh.position.x-$e.x,m??C.mesh.position.z-$e.z),s.setFocus(C.mesh.position.x-$e.x,C.mesh.position.z-$e.z),_){M>0&&(M-=D,M<=0&&d.classList.add("landing-banner--fading"));return}const z=A(C),W=$(C);z<W+Mp&&(C.mesh.position.y=$e.y+W+Mp,C.velocity.y<0&&(C.velocity.y=0)),z>XS&&b(C),M>0&&(M-=D,M<=0&&d.classList.add("landing-banner--fading"))},reset(C){b(C)}}}const JS=38,ZS=19,QS=45,wp=1.5,Ep=.25,eb=.5,Ha=1;function tb(i){let e=Ha,t=0;const n=[];return{get scale(){return e},sample(s){const r=s*1e3;if(r>250||(n.push(r),n.length<QS))return;const o=[...n].sort((l,u)=>l-u),a=o[Math.floor(o.length/2)];if(n.length=0,t>0)return;let c=e;a>JS?c=Math.max(eb,e-Ep):a<ZS&&(c=Math.min(Ha,e+Ep)),c!==e&&(e=c,t=wp,i(e))},update(s){t>0&&(t-=s)},reset(){e!==Ha&&(e=Ha,n.length=0,t=wp,i(e))}}}class bu extends Lr{constructor(){super();const e=new gt;e.deleteAttribute("uv");const t=new Ve({side:en}),n=new Ve,s=new eu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new pe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new pe(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new pe(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new pe(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new pe(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new pe(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new pe(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new pe(e,ur(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new pe(e,ur(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new pe(e,ur(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new pe(e,ur(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const p=new pe(e,ur(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new pe(e,ur(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ur(i){const e=new cn;return e.color.setScalar(i),e}const Mi=.181,Wn=.032;function nb({metal:i,polymer:e,glow:t}){const n=new rt,s=[],r=[],o=[],a=(d,f,g,_,p,m)=>{const M=new gt(d,f,g);return M.translate(_,p,m),M};s.push(a(Wn,.027,Mi*.92,0,.021,.012));{const d=new ft(Wn*.5,Wn*.5,Mi*.92,10,1,!1,0,Math.PI);d.rotateZ(Math.PI/2),d.rotateY(Math.PI/2),d.translate(0,.034,.012),s.push(d)}for(let d=0;d<5;d++)s.push(a(Wn+.002,.02,.004,0,.022,-.052-d*.008));r.push(a(.003,.016,.042,Wn*.5,.026,.03));{const d=new ft(.0085,.0085,.02,10);d.rotateX(Math.PI/2),d.translate(0,.022,Mi*.47),s.push(d)}s.push(a(.005,.008,.005,0,.05,Mi*.42)),s.push(a(.008,.008,.006,-.009,.05,-.07)),s.push(a(.008,.008,.006,.009,.05,-.07)),o.push(a(.0035,.0035,.0035,0,.052,Mi*.42+.002)),r.push(a(Wn-.004,.016,Mi*.55,0,0,.038)),r.push(a(.014,.005,.05,0,-.009,.05)),r.push(a(.012,.03,.006,0,-.02,.028)),r.push(a(.012,.006,.045,0,-.033,.006)),r.push(a(.012,.022,.006,0,-.024,-.014)),r.push(a(.007,.018,.005,0,-.017,.004));{const d=new gt(Wn-.005,.095,.032);d.translate(0,-.055,-.03),d.rotateX(-.34),d.translate(0,0,-.006),r.push(d);const f=new gt(Wn-.002,.008,.036);f.translate(0,-.104,-.062),f.rotateX(-.1),r.push(f);const g=new gt(.006,.05,.005);g.translate(Wn*.48-.004,-.055,-.03),g.rotateX(-.34),o.push(g)}o.push(a(.0035,.004,.075,Wn*.5,.016,.01)),o.push(a(.0035,.004,.075,-Wn*.5,.016,.01)),n.add(new pe(Sn(s),i)),n.add(new pe(Sn(r),e)),n.add(new pe(Sn(o),t));const c=new cn({color:16773296,transparent:!0,opacity:.75,depthWrite:!1}),l=new pe(new ln(.022,.062,6),c);l.rotation.x=Math.PI/2,l.position.set(0,.022,Mi*.52),l.visible=!1,n.add(l);let u=0;const h=new B(0,.022,Mi*.5);return{group:n,getMuzzle(d){return n.updateWorldMatrix(!0,!1),d.copy(h).applyMatrix4(n.matrixWorld)},getAim(d){n.updateWorldMatrix(!0,!1);const f=n.matrixWorld.elements;return d.set(f[8],f[9],f[10]).normalize()},fire(){u=.055,l.visible=!0,l.rotation.z=Math.random()*Math.PI,l.scale.setScalar(.85+Math.random()*.4)},update(d){u<=0||(u-=d,u<=0?l.visible=!1:c.opacity=Math.min(1,u/.03))},length:Mi}}const Xn=1.8,ib=4146511,sb=5857646,rb=2303790,ao=5504925,Ap=8257456,ob=4835583,ab=14198404,cb=3810328;function lb(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,256,256),t.lineCap="square",t.strokeStyle="#5effa6";for(let s=0;s<14;s++){let r=Math.random()*256,o=Math.random()*256;t.lineWidth=Math.random()<.3?2:1,t.beginPath(),t.moveTo(r,o);const a=2+Math.floor(Math.random()*4);for(let c=0;c<a;c++)c%2===0?o+=(Math.random()-.35)*90:r+=(Math.random()-.5)*70,t.lineTo(r,o);t.stroke(),t.fillStyle="#9dffcb",t.fillRect(r-2,o-2,4,4),t.fillStyle="#5effa6"}const n=new is(e);return n.wrapS=Ai,n.wrapT=Ai,n.colorSpace=Pt,n}function ub(i,e,t){const n=new Vr,s=-i/2,r=-e/2,o=Math.max(.001,Math.min(t,i/2-.001,e/2-.001));return n.moveTo(s+o,r),n.lineTo(s+i-o,r),n.absarc(s+i-o,r+o,o,-Math.PI/2,0),n.lineTo(s+i,r+e-o),n.absarc(s+i-o,r+e-o,o,0,Math.PI/2),n.lineTo(s+o,r+e),n.absarc(s+o,r+e-o,o,Math.PI/2,Math.PI),n.lineTo(s,r+o),n.absarc(s+o,r+o,o,Math.PI,Math.PI*1.5),n}function qn(i,e,t,n,s=0,r=0,o=0,a=.02){const c=Math.min(.012,t*.35),l=new Qs(ub(i,e,a),{depth:Math.max(.001,t-c*2),bevelEnabled:!0,bevelThickness:c,bevelSize:c,bevelSegments:2,curveSegments:4});l.center();const u=new pe(l,n);return u.position.set(s,r,o),u}function co(i,e,t,n,s=16){const r=new rt;r.add(new pe(new ft(i,e,t,s),n));const o=new pe(new Ke(i,s,8),n);o.position.y=t/2,o.scale.y=.7,r.add(o);const a=new pe(new Ke(e,s,8),n);return a.position.y=-t/2,a.scale.y=.7,r.add(a),r}function Ga(i,e,t=0){const n=new pe(new Ke(i,16,12),e);return n.position.y=t,n}function hb(){const i=[[.001,0],[.15,0],[.168,.04],[.163,.12],[.178,.2],[.2,.3],[.212,.38],[.208,.46],[.17,.52],[.09,.55],[.001,.555]].map(([t,n])=>new Se(t,n)),e=new Gr(i,28);return e.scale(1.06,1,.84),e}function wu({suitLight:i=!0,environment:e=null}={}){const t=new rt,n=new rt;t.add(n);const s=lb(),r=new Ve({color:ib,metalness:.62,roughness:.38,emissive:ao,emissiveMap:s,emissiveIntensity:.34}),o=new Ve({color:sb,metalness:.7,roughness:.3,emissive:ao,emissiveMap:s,emissiveIntensity:.22}),a=new Ve({color:rb,metalness:.25,roughness:.72,emissive:ao,emissiveMap:s,emissiveIntensity:.3}),c=new Ve({color:ab,metalness:0,roughness:.72}),l=new Ve({color:cb,metalness:0,roughness:.9}),u=new Ve({color:Ap,emissive:Ap,emissiveIntensity:1.6,transparent:!0,opacity:.58,metalness:.4,roughness:.08}),h=new cn({color:ob}),d=new Ve({color:863004,emissive:ao,emissiveIntensity:1.15,metalness:.2,roughness:.35});if(e)for(const F of[r,o,a,c,l,u,d])F.envMap=e,F.envMapIntensity=.55;const f=new pe(hb(),a);f.position.y=.97,n.add(f);const g=new pe(new Ke(.19,28,18,Math.PI*.22,Math.PI*.56,Math.PI*.16,Math.PI*.5),r);g.scale.set(1.12,1.16,.92),g.position.set(0,1.33,.006),n.add(g);const _=qn(.028,.19,.03,o,0,1.35,.155,.012);n.add(_);const p=new pe(new In(.125,.026,10,24,Math.PI*1.15),r);p.rotation.set(Math.PI/2,0,Math.PI*.92),p.position.set(0,1.465,.01),p.scale.z=.8,n.add(p);const m=qn(.25,.3,.05,r,0,1.3,-.11,.07);m.rotation.x=-.06,n.add(m);const M=new pe(new In(.153,.034,12,32),o);M.rotation.x=Math.PI/2,M.position.y=.99,M.scale.set(1.06,.86,1),n.add(M);const x=new pe(new Ke(.042,16,12),h);x.scale.set(1.5,1,.45),x.position.set(0,.99,.132),n.add(x);const y=new pe(new Ke(.152,20,14),r);y.scale.set(1.04,.58,.82),y.position.y=.905,n.add(y);const T=co(.052,.058,.08,a,12);T.position.y=1.55,n.add(T);const E=new pe(new Ke(.105,24,20),c);E.scale.set(.95,1.14,1),E.position.y=1.66,n.add(E);const A=new pe(new Ke(.07,20,16),c);A.scale.set(.94,.82,1.04),A.position.set(0,1.6,.014),n.add(A);const k=new pe(new ln(.018,.042,8),c);k.rotation.x=Math.PI*.52,k.position.set(0,1.646,.095),n.add(k);for(const F of[-1,1]){const V=new pe(new Ke(.022,10,8),c);V.scale.set(.5,1,.8),V.position.set(F*.096,1.655,.005),n.add(V)}const $=[],v=new Je,b=new Kt,C=new B,D=new B,z=new B,W=new B(0,1,0),S=new B(0,0,1);function H(F,V,j,q){F.applyMatrix4(v.compose(V,j,q)),$.push(F)}const N=[[0,1.732,-.012,.088],[-.06,1.722,.028,.064],[.06,1.726,.024,.066],[0,1.71,-.07,.074],[-.082,1.7,-.024,.06],[.084,1.703,-.02,.058],[.026,1.757,-.005,.048],[-.032,1.752,-.036,.046],[-.056,1.692,.056,.044],[.058,1.694,.053,.042]];for(const[F,[V,j,q,ue]]of N.entries())H(new Ke(ue,10,8),C.set(V,j,q),b.setFromEuler(new $t(F%3*.18,F*.7,(F%5-2)*.12)),D.set(1.12,.72,1.1));const X=[[-.05,1.736,.055,.048,1.5,.35,-.6,.72],[-.008,1.744,.062,.05,1.55,.3,-.45,.84],[.038,1.74,.056,.046,1.45,.55,-.5,.67],[.074,1.728,.03,.04,1.35,.85,-.35,.4],[-.03,1.764,.03,.048,1.5,-.25,.25,.94],[.028,1.768,.012,.05,1.6,.42,.62,.66],[-.02,1.766,-.03,.048,1.5,-.3,.6,-.74],[.042,1.756,-.036,.044,1.45,.5,.15,-.85],[-.084,1.72,.014,.044,1.5,-.5,-.1,.86],[-.086,1.712,-.038,.042,1.45,-.45,-.05,-.89],[.086,1.722,.01,.046,1.5,.5,-.05,.86],[.088,1.714,-.036,.042,1.45,.45,-.1,-.89],[-.032,1.72,-.078,.046,1.55,-.2,.05,-.98],[.03,1.724,-.08,.048,1.6,.2,.15,-.97],[0,1.7,-.082,.042,1.4,0,-.35,-.94]];for(const[F,[V,j,q,ue,xe,ve,Ee,Ce]]of X.entries()){z.set(ve,Ee,Ce).normalize(),H(new Ke(ue,10,8),C.set(V,j,q),b.setFromUnitVectors(S,z),D.set(.62,.44,xe));const Re=ue*xe*.66,Te=F%3===0?.052:F%3===1?.04:.032,qe=new ln(ue*.62,Te,3);qe.translate(0,Te*.42,0),H(qe,C.set(V,j,q).addScaledVector(z,Re),b.setFromUnitVectors(W,z),D.set(.85,1,.5))}const U=[[-.07,1.75,0,.042,-.5,.75,.44],[.012,1.782,-.01,.046,.15,.95,-.28],[.066,1.756,.02,.038,.7,.66,.28],[-.05,1.73,.072,.034,-.1,.3,.95],[.05,1.736,-.07,.04,.35,.45,-.82],[-.088,1.73,-.01,.036,-.85,.42,.3],[.03,1.706,-.094,.032,.2,-.1,-.97],[-.026,1.776,.03,.04,-.2,.85,.49]];for(const[F,V,j,q,ue,xe,ve]of U){z.set(ue,xe,ve).normalize();const Ee=new ln(.014,q,3);Ee.translate(0,q*.4,0),H(Ee,C.set(F,V,j),b.setFromUnitVectors(W,z),D.set(.9,1,.55))}const K=1.706,I=Sn($);I.translate(0,-K,0);const G=new pe(I,l);G.position.y=K,n.add(G);const L=new pe(new ft(.109,.109,.04,28,1,!0,-Math.PI*.28,Math.PI*.56),u);L.position.set(0,1.668,.004),L.scale.set(1,1,.94),n.add(L);const Y=new pe(new ft(.104,.104,.052,28,1,!0,-Math.PI*.29,Math.PI*.58),o);Y.position.set(0,1.668,.004),Y.scale.set(1,1,.94),n.add(Y);for(const F of[-1,1]){const V=new pe(new ft(.005,.005,.085,8),o);V.rotation.set(Math.PI/2,0,0),V.position.set(F*.098,1.668,-.028),n.add(V)}for(const F of[-1,1]){const V=new pe(new Ke(.036,16,12),o);V.scale.set(.55,1,.9),V.position.set(F*.107,1.658,0),n.add(V)}const ne=new pe(new ft(.005,.005,.11,8),o);ne.position.set(-.078,1.618,.062),ne.rotation.set(-.5,0,.7),n.add(ne);const te=new pe(new Ke(.012,10,8),h);te.position.set(-.048,1.588,.097),n.add(te);const se=1.25,ee=[],ce=[];for(const F of[-1,1]){const V=new rt;V.position.set(F*.215,1.44,0),n.add(V),V.add(Ga(.072,a));const j=new pe(new Ke(.108,20,14,0,Math.PI*2,0,Math.PI*.58),r);j.scale.set(1.04,1.05,1.08),j.position.y=.012,j.rotation.z=F*.22,V.add(j);const q=new pe(new Ke(.088,18,10,0,Math.PI*2,Math.PI*.34,Math.PI*.2),o);q.position.y=-.032,q.rotation.z=F*.22,V.add(q);const ue=co(.058,.05,.24,a);ue.position.y=-.17,V.add(ue);const xe=new pe(new In(.055,.015,10,20),o);xe.rotation.x=Math.PI/2,xe.position.y=-.12,V.add(xe),V.add(Ga(.052,r,-.3));const ve=new rt;ve.position.y=-.3,V.add(ve),ce.push({shoulder:V,forearm:ve,side:F});const Ee=co(.052,.045,.22,a);Ee.position.y=-.12,ve.add(Ee);const Ce=new pe(new ft(.062,.05,.17,16),r);Ce.position.y=-.14,Ce.scale.z=.92,ve.add(Ce);const Re=qn(.1,.055,.09,o,0,-.052,.006,.026);ve.add(Re);const Te=new rt;Te.position.set(0,-.28,.004),Te.rotation.y=-F*1.15,Te.scale.setScalar(se),ve.add(Te);const qe=qn(.056,.078,.032,a,0,.004,0,.018);qe.rotation.x=.06,Te.add(qe);const Ye=new pe(new pn(.011,.045,3,8),a);Ye.rotation.z=Math.PI/2,Ye.position.set(0,-.032,.003),Te.add(Ye);const st=[{len:.044,r:.0078,open:.3,grip:1.15,splay:.05},{len:.047,r:.008,open:.36,grip:1.75,splay:.02},{len:.043,r:.0075,open:.44,grip:1.85,splay:-.02},{len:.035,r:.0068,open:.52,grip:1.9,splay:-.06}],vt=[];for(const[Ct,lt]of st.entries()){const _n=new pe(new pn(lt.r,lt.len*.55,3,8),a),bi=new pe(new pn(lt.r*.86,lt.len*.42,3,8),a);vt.push({near:_n,far:bi,spec:lt,index:Ct,side:F}),Te.add(_n),Te.add(bi)}const Qe=new pe(new pn(.0092,.032,3,8),a);Te.add(Qe),ee.push({group:Te,fingers:vt,thumb:Qe,side:F});const ke=qn(.034,.052,.008,d,F*.055,-.145,.004,.008);ke.rotation.y=F*Math.PI/2,ve.add(ke),V.rotation.z=F*.11,V.rotation.x=.04}let he=null,Z=null,R=!1,re=!0;const oe=[];for(const F of[-1,1]){const V=new rt;V.position.set(F*.098,.8,0),n.add(V),V.add(Ga(.082,a));const j=co(.085,.07,.34,a);j.position.y=-.2,V.add(j);const q=qn(.125,.25,.05,r,0,-.19,.045,.05);if(q.rotation.x=-.05,V.add(q),F>0){const vt=qn(.052,.115,.062,r,F*.086,-.235,.004,.016);vt.rotation.set(.12,F*.3,0),V.add(vt);const Qe=qn(.06,.022,.07,o,F*.086,-.19,.004,.008);Qe.rotation.set(0,F*.3,0),V.add(Qe);const ke=nb({metal:r,polymer:a,glow:d});he=ke,Z=V,Ue(),V.add(ke.group)}else for(const[vt,Qe]of[-.185,-.245].entries()){const ke=qn(.042,.052,.05,o,F*.086,Qe,.004,.01);ke.rotation.y=F*.32,V.add(ke);const Ct=qn(.046,.01,.054,r,F*.086,Qe+.03,.004,.005);Ct.rotation.y=F*.32,V.add(Ct)}V.add(Ga(.068,a,-.4));const ue=new pe(new Ke(.075,18,12,0,Math.PI*2,0,Math.PI*.55),r);ue.rotation.x=Math.PI*.42,ue.position.set(0,-.405,.028),V.add(ue);const xe=new rt;xe.position.y=-.4,V.add(xe);const ve=new rt;ve.position.y=-.3,xe.add(ve),oe.push({hip:V,shin:xe,ankle:ve,side:F});const Ee=co(.068,.055,.32,a);Ee.position.y=-.18,xe.add(Ee);const Ce=new pe(new ft(.072,.06,.27,16,1,!0,-1.1,2.2),r);Ce.position.set(0,-.175,.008),Ce.scale.z=1.1,xe.add(Ce);const Re=new pe(new Ke(.075,18,14),r);Re.scale.set(.95,.72,1.5),Re.position.set(0,-.035,.03),ve.add(Re);const Te=qn(.105,.07,.11,r,0,-.012,.072,.03);Te.rotation.x=.22,ve.add(Te);const qe=new pe(new Ke(.055,16,12),o);qe.scale.set(1,.62,1.15),qe.position.set(0,-.062,.132),ve.add(qe);const Ye=new pe(new Ke(.05,14,10),o);Ye.scale.set(1,.7,.9),Ye.position.set(0,-.057,-.045),ve.add(Ye);const st=new pe(new In(.042,.011,8,18),h);st.rotation.x=Math.PI/2,st.position.set(0,-.086,.025),ve.add(st)}let de=null;i&&(de=new eu(ao,.45,2.2,2),de.position.set(0,1.2,.12),n.add(de));function be(F,V){for(const{near:ue,far:xe,spec:ve,index:Ee,side:Ce}of F.fingers){const Re=(Ee-1.5)*.0165*Ce,Te=-.037,qe=.003,Ye=ve.open+(ve.grip-ve.open)*V,st=Ye+(.35+1.15*V),vt=ve.len*.55,Qe=ve.len*.42;ue.position.set(Re,Te-Math.cos(Ye)*vt*.5,qe+Math.sin(Ye)*vt*.5),ue.rotation.set(Ye,0,ve.splay*Ce*(1-V*.6));const ke=Te-Math.cos(Ye)*vt,Ct=qe+Math.sin(Ye)*vt;xe.position.set(Re,ke-Math.cos(st)*Qe*.5,Ct+Math.sin(st)*Qe*.5),xe.rotation.set(st,0,ve.splay*Ce*(1-V*.6))}const j=F.thumb,q=F.side;j.position.set(q*(.028-.006*V),-.016-.012*V,.014+.022*V),j.rotation.set(.5+V*.85,0,-q*(.7-V*.45))}function Ue(){he.group.position.set(.078,-.175,.014),he.group.rotation.set(Math.PI/2+.3,.34,.06)}function we(F,V=!0){if(re=V,F===R||!he)return;R=F;const j=ee.find(q=>q.side>0);F?(j.group.quaternion.setFromRotationMatrix(ie.makeBasis(O,w,Q)),j.group.add(he.group),he.group.scale.setScalar(1/se),he.group.position.set(-.03,-.024,.019),he.group.rotation.set(0,0,Math.PI/2),be(j,1)):(Z.add(he.group),he.group.scale.setScalar(1),Ue(),be(j,0))}const O=new B(0,0,-1),w=new B(1,0,0),Q=new B(0,-1,0),ie=new Je;function fe(){he&&he.fire()}const le=1.02,Pe=1.53,ye=new rt;ye.position.y=le;const me=new rt;me.position.y=Pe-le;const Ge=new Set([y,M,x,...oe.map(F=>F.hip)]);de&&Ge.add(de);for(const F of[...n.children])Ge.has(F)||(F.position.y-=le,ye.add(F));for(const F of[...ye.children])F.position.y+le>=Pe&&(F.position.y-=Pe-le,me.add(F));ye.add(me),n.add(ye);const ge=f.position.y,Ie=me.position.y;let Le=0,We="idle",Be=0,Ze=0,He=0,dt=0;const J=.04,Oe=.05,ae=.04;function _e(){const F=Math.sin(Le*1.6);f.position.y=ge+F*.005,f.scale.x=1+F*.006,n.position.set(0,0,0),n.rotation.z=0,ye.rotation.set(-F*.006,0,0),me.rotation.set(F*.006,0,0),me.position.y=Ie;for(const V of oe)V.hip.rotation.x=0,V.hip.rotation.y=V.side*.07,V.hip.position.z=0,V.shin.rotation.x=0,V.ankle.rotation.x=0;for(const[V,j]of ce.entries())j.shoulder.rotation.x=J+Math.sin(Le*1.6+V)*.012,j.shoulder.rotation.z=j.side*.11,j.forearm.rotation.x=0}const De=[[0,28],[12,22],[30,6],[50,-12],[62,-8],[75,16],[88,28],[100,28]],Fe=[[0,4],[12,16],[30,6],[45,14],[60,40],[73,60],[87,26],[100,4]],ct=[[0,0],[8,-8],[30,5],[45,10],[58,-20],[68,-4],[80,2],[100,0]],St=[[0,42],[10,28],[28,2],[42,-20],[52,-12],[68,24],[85,48],[100,42]],Zt=[[0,22],[12,40],[28,26],[42,34],[55,74],[70,112],[86,52],[100,22]],ht=[[0,-6],[8,-14],[26,6],[40,14],[50,-26],[64,-10],[82,-4],[100,-6]],Vt=2.8,En=5.4,ms=1.5,gr=2.7;function Me(F){return F<0?0:F>1?1:F}function ze(F,V,j){const q=et(F,j);return He<=.001?q:q+(et(V,j)-q)*He}function et(F,V){const j=(V%1+1)%1*100;for(let q=1;q<F.length;q++){const[ue,xe]=F[q-1],[ve,Ee]=F[q];if(j<=ve){const Ce=(j-ue)/(ve-ue);return xe+(Ee-xe)*(Ce*Ce*(3-2*Ce))}}return F[F.length-1][1]}const it=Math.PI/180,Nt=.8,Qt=.4,Dn=.3,$n=[[-.045,-.107],[.132,-.096]];function gs(){let F=1/0;for(const V of oe){const j=V.hip.rotation.x,q=j+V.shin.rotation.x,ue=q+V.ankle.rotation.x,xe=Nt-Qt*Math.cos(j)-Dn*Math.cos(q);for(const[ve,Ee]of $n){const Ce=xe+Ee*Math.cos(ue)-ve*Math.sin(ue);Ce<F&&(F=Ce)}}return F}function Un(F){const V=Math.max(Be,.4);He+=(Me((V-Vt)/(En-Vt))-He)*(1-Math.pow(2,-F/.18));const j=ms+(gr-ms)*He;Ze+=V/j*Math.PI*2*F;const q=Ze/(Math.PI*2),ue=Math.min(1.35,.55+V/4);for(const[qe,Ye]of oe.entries()){const st=q+qe*.5,vt=ze(De,St,st)*it*ue,Qe=ze(Fe,Zt,st)*it*ue,ke=ze(ct,ht,st)*it*ue;Ye.hip.rotation.x=-vt,Ye.hip.rotation.y=Ye.side*.09,Ye.shin.rotation.x=Qe,Ye.ankle.rotation.x=-ke,Ye.hip.position.z=Math.sin(st%1*Math.PI*2)*.022*ue}const xe=q-Oe;for(const[qe,Ye]of ce.entries()){const st=xe+qe*.5,vt=ze(De,St,st)*it*ue*(.5+He*.3);Ye.shoulder.rotation.x=J+vt+Math.sin(Le*.71+qe)*.012,Ye.shoulder.rotation.z=Ye.side*(.11-Math.max(0,-vt)*.28);const Qe=ze(De,St,st-ae)*it*ue*.5;Ye.forearm.rotation.x=-(.22+He*.85+Math.max(0,-Qe)*1.3)}const ve=gs(),Ee=Math.max(0,Math.sin(Ze*2))*.055*He;n.position.y=-ve+Ee,n.position.x=Math.sin(Ze)*.022*ue,n.rotation.z=-Math.sin(Ze)*.045*ue;const Ce=Math.sin(xe%1*Math.PI*2);ye.rotation.y=Ce*.13*ue,ye.rotation.z=-n.rotation.z*.55,ye.rotation.x=-(.06+He*.28)-(.5-.5*Math.cos(Ze*2))*.02;const Re=Math.sin(Le*2.3);f.position.y=ge+Re*.004,f.scale.x=1+Re*.005;const Te=Math.sin(Le*.83)*.035+Math.sin(Le*.37)*.02;me.rotation.y=-ye.rotation.y*.75+Te,me.rotation.x=-ye.rotation.x*.8+Math.sin(Le*.61)*.015,me.rotation.z=-ye.rotation.z*.6,me.position.y=Ie+ve*.35}function _s(F){Ze+=F*4.2;for(const[V,j]of oe.entries()){const q=Ze+V*Math.PI;j.hip.rotation.x=-.5-Math.sin(q)*.4,j.hip.rotation.y=0,j.hip.position.z=0,j.shin.rotation.x=.95+Math.sin(q)*.45,j.ankle.rotation.x=-.25}for(const[V,j]of ce.entries()){const q=Ze+V*Math.PI+Math.PI;j.shoulder.rotation.x=-2.45+Math.sin(q)*.28,j.shoulder.rotation.z=j.side*.16,j.forearm.rotation.x=-(.5-Math.max(0,Math.sin(q))*.3)}n.position.set(0,0,0),n.rotation.z=0,ye.rotation.set(-.12,0,0),me.rotation.set(.2,0,0),me.position.y=Ie,f.position.y=ge}function So(F){dt+=F;const V=Math.min(1,dt/.35),j=Math.min(1,Math.max(0,(dt-.3)/.5)),q=Math.min(1,Math.max(0,(dt-.7)/.65)),ue=Ce=>Ce*Ce*(3-2*Ce),xe=ue(V)*(1-ue(j)),ve=ue(j),Ee=ue(q);for(const[Ce,Re]of oe.entries())Re.hip.rotation.x=-ve*(.9+Ce*.35)*(1-Ee*.35),Re.hip.rotation.y=Re.side*.09,Re.hip.position.z=0,Re.shin.rotation.x=ve*(1.7+Ce*.3),Re.ankle.rotation.x=-.15*ve;for(const[Ce,Re]of ce.entries())Re.shoulder.rotation.x=-xe*1.5-Ee*(.6+Ce*.25),Re.shoulder.rotation.z=Re.side*(.11+xe*.5+Ee*.5),Re.forearm.rotation.x=-(.3+xe*.9);n.rotation.x=xe*.28-Ee*(Math.PI/2-.12),n.rotation.z=Ee*.22,n.position.y=-ve*.42-Ee*.38,n.position.x=Ee*.05,ye.rotation.x=xe*.3+Ee*.25,ye.rotation.y=0,ye.rotation.z=0,me.rotation.set(xe*-.4+Ee*.35,0,0),me.position.y=Ie,f.position.y=ge,f.rotation.y=0}function P(F){Le+=F;const V=.85+.25*Math.sin(Le*2.1);if(r.emissiveIntensity=.34*V,o.emissiveIntensity=.22*V,a.emissiveIntensity=.3*V,de&&(de.intensity=.45*V),he&&he.update(F),We==="walk"?Un(F):We==="climb"?_s(F):We==="dying"?So(F):_e(),R&&We!=="dying"){const j=ce.find(q=>q.side>0);if(j.shoulder.rotation.x=re?-1.42:-.28,j.shoulder.rotation.z=j.side*(re?.06:.13),j.forearm.rotation.x=re?-.16:-.55,re){const q=ce.find(ue=>ue.side<0);q.shoulder.rotation.x=Math.min(q.shoulder.rotation.x,-.35),q.forearm.rotation.x=-.9}}else{const j=ee.find(q=>q.side>0);j.group.rotation.set(0,-j.side*1.15,0)}}return{group:t,update:P,height:Xn,setArmed:we,fire:fe,get pistol(){return he},getMuzzle(F){return!R||!he?null:he.getMuzzle(F)},setGait(F,V=0){F!==We&&(Ze=0,F!=="walk"&&(He=0),F==="dying"&&(dt=0)),We=F,Be=V},get gait(){return We}}}const Eu=1.35,Tp={red:{skin:12076332,belly:14258282,dark:6044196,hp:2},blue:{skin:4156336,belly:9417949,dark:2832978,hp:3},black:{skin:3880496,belly:9076592,dark:2367260,hp:4},silver:{skin:12173516,belly:15001838,dark:5922920,hp:6}},db=15129796,fb=7031343;function Tt(i,e,t,n,s,r=null,o=null){r&&e.scale(r[0],r[1],r[2]),o&&(o[0]&&e.rotateX(o[0]),o[1]&&e.rotateY(o[1]),o[2]&&e.rotateZ(o[2])),e.translate(t,n,s),i.push(e)}function Rp({tier:i="red"}={}){const e=Tp[i]??Tp.red,t=new rt,n=new Ve({color:e.skin,roughness:.85,metalness:.05}),s=new Ve({color:e.dark,roughness:.9,metalness:.05}),r=new Ve({color:db,roughness:.55,metalness:.1}),o=new Ve({color:e.belly,roughness:.8,metalness:.04}),a=new Ve({color:fb,roughness:.95,metalness:0}),c=.26,l=[],u=[],h=[],d=[];Tt(l,new Ke(.23,14,12),0,.76,0,[1.05,.88,.95]),Tt(u,new Ke(.16,12,10),0,.77,.11,[1,.8,.6]),Tt(l,new Ke(.185,14,12),0,.98,.075,[1.1,.8,.9],[c,0,0]),Tt(l,new pn(.072,.3,4,8),0,1.06,.06,null,[0,0,Math.PI/2]);const f=0,g=1.2,_=.16;Tt(l,new Ke(.175,14,12),f,g,_,[1,.95,1.12]),Tt(l,new Ke(.1,10,8),f,g+.08,_+.055,[1.25,.42,.8]),Tt(l,new ft(.062,.095,.19,10),f,g-.045,_+.13,null,[Math.PI/2+.25,0,0]),Tt(l,new Ke(.062,10,8),f,g-.085,_+.21);for(const y of[-1,1])Tt(h,new Ke(.018,8,6),y*.026,g-.06,_+.235);for(const y of[-1,1])Tt(d,new ln(.019,.075,6),y*.055,g-.09,_+.16,null,[.35,0,y*.3]);for(const y of[-1,1])Tt(l,new ln(.085,.2,4),y*.21,g+.06,_-.06,[1,1,.3],[.2,0,y*-1.25]);Tt(d,new ln(.032,.19,6),f,g+.18,_-.02,null,[-.4,0,0]);for(const y of[-1,1])Tt(u,new Ke(.036,10,8),y*.07,g+.02,_+.135,[1,1,.75]),Tt(h,new Ke(.018,8,6),y*.074,g+.018,_+.163,[.7,1.25,.7]);Tt(h,new ft(.185,.225,.19,12),0,.55,0),Tt(h,new In(.2,.022,6,16),0,.645,0,[1.05,1,.95],[Math.PI/2,0,0]);const p=new rt;p.add(new pe(Sn(l),n)),p.add(new pe(Sn(u),o)),p.add(new pe(Sn(h),s)),p.add(new pe(Sn(d),r)),t.add(p);const m=[];for(const y of[-1,1]){const T=new rt;T.position.set(y*.225,1.05,.05),T.rotation.set(.18,0,y*.2),t.add(T);const E=[];Tt(E,new pn(.05,.15,3,8),0,-.1,.01),Tt(E,new pn(.042,.14,3,8),0,-.26,.045),Tt(E,new Ke(.052,8,6),0,-.36,.06),T.add(new pe(Sn(E),n)),m.push({group:T,side:y})}const M=[];for(const y of[-1,1]){const T=new rt;T.position.set(y*.115,.6,0),t.add(T);const E=[];Tt(E,new pn(.062,.15,3,8),y*.022,-.11,0,null,[0,0,y*-.16]),Tt(E,new pn(.048,.15,3,8),y*.03,-.28,.015,null,[.1,0,y*.12]),Tt(E,new Ke(.072,8,6),y*.012,-.4,.045,[.9,.5,1.4]),T.add(new pe(Sn(E),n)),M.push({group:T,side:y})}const x=new rt;x.position.set(0,-.36,.05),m[0].group.add(x);{const y=[];Tt(y,new ft(.022,.028,.34,8),0,-.1,0),Tt(y,new Ke(.06,8,6),0,-.3,0,[1,1.3,1]);for(const T of[0,1.6,3.1,4.7])Tt(y,new ln(.018,.06,4),Math.sin(T)*.06,-.3,Math.cos(T)*.06,null,[Math.cos(T)*1.4,0,-Math.sin(T)*1.4]);x.add(new pe(Sn(y),a))}return{group:t,body:p,arms:m,legs:M,club:x,tier:i,height:Eu,maxHp:e.hp}}class pb extends rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Nb(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Jr.extractUrlBase(e);o=Jr.resolveURL(l,this.path)}else o=Jr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new _f(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Cp){try{o[ot.KHR_BINARY_GLTF]=new Db(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Yb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new _b;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new Ub(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new Ob;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new Fb;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function mb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gb{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Xe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],nn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new xi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new eu(u),l.distance=h;break;case"spot":l=new Jy(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class _b{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){const s=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}}class xb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class vb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(a,a)}return Promise.all(r)}}class yb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Mb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Sb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Pt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class bb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class wb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}}class Eb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ab{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Pt)),Promise.all(r)}}class Tb{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Rb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Cb{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Pb{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ib{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lb{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class Nb{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Je,p=new B,m=new Kt,M=new B(1,1,1),x=new Dl(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&M.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,_.compose(p,m,M));for(const y in c)if(y==="_COLOR_0"){const T=c[y];x.instanceColor=new ha(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);At.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Cp="glTF",lo=12,Pp={JSON:1313821514,BIN:5130562};class Db{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-lo,r=new DataView(e,lo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Pp.JSON){const l=new Uint8Array(e,lo+o,a);this.content=n.decode(l)}else if(c===Pp.BIN){const l=lo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ub{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Tu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Tu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=hr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}h(f)},a,l,nn,d)})})}}class Ob{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Fb{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class Ip extends Kr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,M=1-p,x=m-d+h;for(let y=0;y!==a;y++){const T=o[_+y+a],E=o[_+y+c]*u,A=o[g+y+a],k=o[g+y]*u;r[y]=M*T+x*E+p*A+m*k}return r}}const Bb=new Kt;class kb extends Ip{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Bb.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lp={9728:hn,9729:xn,9984:mh,9985:Eo,9986:_r,9987:li},Np={33071:Ti,33648:wo,10497:Ai},Au={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zb={CUBICSPLINE:void 0,LINEAR:Mr,STEP:yr},Ru={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ve({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),i.DefaultMaterial}function cs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gb(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Vb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wb(i){let e;const t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cu(t.attributes):e=i.indices+":"+Cu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Cu(i.targets[n]);return e}function Cu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Pu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const qb=new Je;class Yb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new $y(this.options.manager):this.textureLoader=new tM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _f(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return cs(r,a,s),Si(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Jr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Au[s.type],a=hr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Dt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Au[s.type],l=hr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(f&&f!==h){const m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let x=t.cache.get(M);x||(_=new l(a,m*f,s.count*f/u),x=new Dd(_,f/u),t.cache.add(M,x)),p=new Nr(x,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new Dt(_,c,g);if(s.sparse!==void 0){const m=Au.SCALAR,M=hr[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new M(o[1],x,s.sparse.count*m),E=new l(o[2],y,s.sparse.count*c);a!==null&&(p=new Dt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,k=T.length;A<k;A++){const $=T[A];if(p.setX($,E[A*c]),c>=2&&p.setY($,E[A*c+1]),c>=3&&p.setZ($,E[A*c+2]),c>=4&&p.setW($,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Lp[d.magFilter]||xn,u.minFilter=Lp[d.minFilter]||li,u.wrapS=Np[d.wrapS]||Ai,u.wrapT=Np[d.wrapT]||Ai,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Xt(_);p.needsUpdate=!0,d(p)}),t.load(Jr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Si(h,o),h.userData.mimeType=o.mimeType||Xb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new xa,Gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ul,Gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ve}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){const h=s[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Pt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=tn);const u=r.alphaMode||Ru.OPAQUE;if(u===Ru.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ru.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==cn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==cn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==cn){const h=r.emissiveFactor;a.emissive=new Xe().setRGB(h[0],h[1],h[2],nn)}return r.emissiveTexture!==void 0&&o!==cn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Si(h,r),t.associations.set(h,{materials:e}),r.extensions&&cs(s,h,r),h})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Dp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Wb(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Dp(new Ut,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Hb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=o[f];let m;const M=l[f];if(p.mode===Nn.TRIANGLES||p.mode===Nn.TRIANGLE_STRIP||p.mode===Nn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ty(_,M):new pe(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Nn.TRIANGLE_STRIP?m.geometry=lp(m.geometry,Eh):p.mode===Nn.TRIANGLE_FAN&&(m.geometry=lp(m.geometry,qc));else if(p.mode===Nn.LINES)m=new sy(_,M);else if(p.mode===Nn.LINE_STRIP)m=new ga(_,M);else if(p.mode===Nn.LINE_LOOP)m=new ry(_,M);else if(p.mode===Nn.POINTS)m=new Bl(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Vb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Si(m,r),p.extensions&&cs(s,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&cs(s,h[0],r),h[0];const d=new rt;r.extensions&&cs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(qi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new xl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Je;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Nl(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let M=0,x=d.length;M<x;M++){const y=d[M],T=f[M],E=g[M],A=_[M],k=p[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const $=n._createAnimationTracks(y,T,E,A,k);if($)for(let v=0;v<$.length;v++)m.push($[v])}return new jl(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Wd:l.length>1?u=new rt:l.length===1?u=l[0]:u=new At,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Si(u,r),r.extensions&&cs(n,u,r),r.matrix!==void 0){const h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),Si(r,n),n.extensions&&cs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Gn||d instanceof Xt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Bi[r.path]===Bi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Bi[r.path]){case Bi.weights:l=tr;break;case Bi.rotation:l=nr;break;case Bi.position:case Bi.scale:l=sr;break;default:n.itemSize===1?l=tr:l=sr;break}const u=s.interpolation!==void 0?zb[s.interpolation]:Mr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Bi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof nr?kb:Ip;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Kb(i,e,t){const n=e.attributes,s=new jn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new B(c[0],c[1],c[2]),new B(l[0],l[1],l[2])),a.normalized){const u=Pu(hr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,c=new B;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Pu(hr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Dp(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Tu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return pt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Si(i,e),Kb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Gb(i,e.targets,t):i})}const $b="Idle",jb=.6,Jb=.1,Zb=new pb;function Qb(i,{height:e=Xn,clip:t=$b}={}){return new Promise((n,s)=>{Zb.load(i,r=>n(ew(r,e,t)),void 0,s)})}function ew(i,e,t){const n=i.scene;n.traverse(h=>{if(h.isMesh){h.castShadow=!0,h.receiveShadow=!0;for(const d of Up(h.material))d&&("roughness"in d&&(d.roughness=jb),"metalness"in d&&(d.metalness=Jb))}});const s=new rt;n.updateWorldMatrix(!0,!0);const r=new jn().setFromObject(n),o=r.getSize(new B);if(o.y>1e-4){const h=e/o.y;n.scale.multiplyScalar(h),r.min.multiplyScalar(h),r.max.multiplyScalar(h)}n.position.x-=(r.min.x+r.max.x)/2,n.position.z-=(r.min.z+r.max.z)/2,n.position.y-=r.min.y,s.add(n);const a=new pM(n),c=new Map;for(const h of i.animations)c.set(h.name,a.clipAction(h));let l=null;function u(h,d=.25){const f=c.get(h);return!f||f===l?!!f:(f.reset().play(),l?l.crossFadeTo(f,d,!1):d>0&&f.fadeIn(d),l=f,!0)}return!u(t,0)&&i.animations.length&&u(i.animations[0].name,0),{group:s,height:e,clips:[...c.keys()],play:u,update(h){a.update(h)},dispose(){a.stopAllAction(),a.uncacheRoot(n),tw(n)}}}function Up(i){return i?Array.isArray(i)?i:[i]:[]}function tw(i){const e=new Set;i.traverse(t=>{if(t.isMesh){t.geometry?.dispose();for(const n of Up(t.material))e.add(n)}});for(const t of e){for(const n of Object.values(t))n&&n.isTexture&&n.dispose();t.dispose()}}const nw=.45;function iw(i){const e=i.split("-")[1]??"red",t=Rp({tier:e});let n=0;return{...t,update(s){n+=s,t.body.position.y=Math.sin(n*1.8)*.006;for(const[r,o]of t.arms.entries())o.group.rotation.x=.12+Math.sin(n*1.8+r)*.03,o.group.rotation.z=o.side*.18},setGait(){}}}const Iu=1.5;function sw({renderer:i,modelUrl:e=null,who:t="vexo"}){const n=new Lr;n.background=new Xe(658966);const s=i.toneMapping,r=i.toneMappingExposure,o=i.outputColorSpace;i.toneMapping=dh,i.toneMappingExposure=1,i.outputColorSpace=Pt;const a=i.shadowMap.enabled,c=i.shadowMap.type;i.shadowMap.enabled=!0,i.shadowMap.type=ch;const l=new Gt(38,window.innerWidth/window.innerHeight,.05,100),u=new Pr(i);n.environment=u.fromScene(new bu,.04).texture,n.environmentIntensity=.55,u.dispose(),n.add(new eM(15266047,.8));const h=new xi(16774634,2.5);h.position.set(5,10,7),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.bias=-1e-4,h.shadow.radius=4,h.shadow.camera.near=8,h.shadow.camera.far=20,h.shadow.camera.left=-1.8,h.shadow.camera.right=1.8,h.shadow.camera.top=1.8,h.shadow.camera.bottom=-1.8,n.add(h);const d=new xi(10273023,1.15);d.position.set(3.2,1.4,1.6),n.add(d);const f=new xi(10420176,1);f.position.set(.6,2,-3.6),n.add(f);const g=new pe(new ft(.62,.7,.06,48),new Ve({color:1053724,metalness:.2,roughness:.85}));g.position.y=-.03,g.receiveShadow=!0,n.add(g);const _=new pe(new In(.63,.008,8,64),new cn({color:4835583}));_.rotation.x=Math.PI/2,_.position.y=.012,n.add(_);const p=new rt;n.add(p);const m=t.startsWith("boko")?iw(t):wu();p.add(m.group),m.group.traverse(N=>{N.isMesh&&(N.castShadow=!0,N.receiveShadow=!0)});let M=!1,x=m;e&&Qb(e).then(N=>{if(M){N.dispose();return}p.remove(m.group),p.add(N.group),x=N}).catch(N=>{console.warn(`[character] could not load ${e}, keeping the built-in Vexo:`,N)});let y=0,T=.06,E=0,A=!1,k=0;function $(){const X=Xn*.52;l.position.set(0,X+Math.sin(T)*3.7,Math.cos(T)*3.7),l.lookAt(0,Xn*.52,0)}$();function v(N){A=!0,k=N.clientX}function b(N){A&&(y+=(N.clientX-k)*.012,k=N.clientX,E=Iu)}function C(){A=!1}function D(N){N.code==="ArrowLeft"&&(y-=.2,E=Iu),N.code==="ArrowRight"&&(y+=.2,E=Iu),N.code==="ArrowUp"&&(T=Math.min(.9,T+.06),$()),N.code==="ArrowDown"&&(T=Math.max(-.35,T-.06),$())}window.addEventListener("pointerdown",v),window.addEventListener("pointermove",b),window.addEventListener("pointerup",C),window.addEventListener("keydown",D);const z=document.createElement("div");z.id="character-label",z.innerHTML=`
    <div class="character-label__name">VEXO</div>
    <div class="character-label__hint">Drag to turn · ↑ ↓ to tilt</div>
  `,document.body.appendChild(z);function W(N){E>0?E-=N:A||(y+=nw*N),p.rotation.y=y,x.update(N)}function S(){i.render(n,l)}function H(N=window.innerWidth,X=window.innerHeight){l.aspect=N/X,l.updateProjectionMatrix()}return{update:W,render:S,onResize:H,dispose(){M=!0,i.toneMapping=s,i.toneMappingExposure=r,i.outputColorSpace=o,i.shadowMap.enabled=a,i.shadowMap.type=c,x!==m&&x.dispose?.(),n.environment?.dispose()},setAngle(N){y=N,E=1/0,p.rotation.y=y},get vexo(){return x}}}const rw=8161430,ow=15659509,Op=4828159,Fp=.46,Lu=.32,Nu=4,aw=Math.ceil(Nu/Lu);function cw(){const i=new rt;i.visible=!1;const e=new Ve({color:rw,metalness:.75,roughness:.42}),t=new Ve({color:ow,metalness:.5,roughness:.5}),n=new Ve({color:Op,emissive:Op,emissiveIntensity:1.4,roughness:.5}),s=[];for(const h of[-1,1]){const d=new ft(.035,.035,1,10);d.translate(0,-.5,0);const f=new pe(d,e);f.position.x=h*Fp/2,i.add(f),s.push(f)}const r=[];for(let h=0;h<aw;h++){const d=new pe(new ft(.022,.022,Fp,8),t);d.rotation.z=Math.PI/2,d.position.y=-Lu*(h+1),d.visible=!1,i.add(d),r.push(d)}const o=new pe(new In(.5,.035,8,28),n);o.rotation.x=Math.PI/2,i.add(o);let a=Nu,c=0;function l(){return a*c}function u(){const h=l();for(const d of s)d.scale.y=Math.max(h,.001);for(const[d,f]of r.entries())f.visible=-f.position.y<=h-.04;o.position.y=-h,o.visible=c>.02,i.visible=c>.001}return u(),{group:i,setHeight(h){a=Math.min(Math.max(h,.4),Nu),u()},setExtension(h){c=h<0?0:h>1?1:h,u()},get height(){return a},get extension(){return c},rungSpacing:Lu}}const Du=22,Bp=2*Math.PI*Du,Uu=.6;function lw(){const i=document.createElement("div");i.id="stamina-wheel",i.hidden=!0,i.innerHTML=`
    <svg viewBox="0 0 56 56" width="56" height="56">
      <circle class="stamina-wheel__track" cx="28" cy="28" r="${Du}" />
      <circle class="stamina-wheel__fill" cx="28" cy="28" r="${Du}"
              stroke-dasharray="${Bp.toFixed(2)}" />
    </svg>
  `,document.body.appendChild(i);const e=i.querySelector(".stamina-wheel__fill");let t=!1,n=0,s=-1,r=null;return{update(o,a,c,l){l!=null&&(o<.999||a)?n=Uu:n>0&&(n-=c);const h=n>0&&l!=null;if(h!==t&&(i.hidden=!h,t=h),!h)return;i.style.transform=`translate(${Math.round(l.x)}px, ${Math.round(l.y)}px)`,i.style.opacity=n<Uu?(n/Uu).toFixed(2):"1";const d=Math.round(Bp*(1-Math.max(0,Math.min(1,o))));d!==s&&(e.style.strokeDashoffset=String(d),s=d),a!==r&&(i.classList.toggle("stamina-wheel--winded",a),r=a)},hide(){i.hidden=!0,t=!1,n=0}}}const uw="♥";function hw(){const i=document.createElement("div");i.id="hearts",i.hidden=!0,document.body.appendChild(i);let e=-1,t=0;return{set(n,s){if(!(n===e&&s===t)){e=n,t=s,i.innerHTML="";for(let r=0;r<s;r++){const o=document.createElement("span");o.className=r<n?"heart":"heart heart--spent",o.textContent=uw,i.appendChild(o)}i.hidden=!1}},flash(){i.classList.remove("hearts--hit"),i.offsetWidth,i.classList.add("hearts--hit")},hide(){i.hidden=!0,e=-1}}}const uo=1.5,dw=3.3,fw=6.2,Va=.55,pw=.2,mw=.62,gw=.3,_w=.25,xw=.05,kp=2.2,vw=.11,yw=.08,Mw=.15,zp=.75,Sw=.38,Ou=1.7,Hp=2.6,Gp=.8,bw=22,ww=4.5,Ew=.9,Aw=1.3,Tw=.55,Vp=.7,Rw=.35,Wp=.5,Cw=.4,Xp=.55,Wa=.32,qp=2,Pw=2.4,Iw=1.3,Yp=Math.PI*.19,ho=4.6,Kp=2,Lw=6.2,Nw=5,Dw=5,Uw=.32,Ow=55,Fw=.7,Bw=4,kw=1.5,$p=3.4,zw=2.4,Hw=2.5,jp=["KeyL"],ls=new B(0,1,0);function ki(i,e){return 1-Math.pow(2,-i/e)}function Xa(i){return i<-1?-1:i>1?1:i}function Gw(i,e,t){return i<e?e:i>t?t:i}function fo(i,e){let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Vw({scene:i,camera:e,ship:t,surface:n,input:s,renderer:r,monsters:o=null,onShot:a=()=>{},dialogue:c=null,shop:l=null,perks:u=null,onDown:h=()=>{},onLanded:d=()=>{},onAboard:f=()=>{}}){const g=new Pr(r),_=g.fromScene(new bu,.04).texture;g.dispose();const p=wu({suitLight:!1,environment:_}),m=cw();let M=!1;function x(){M||(i.add(p.group),i.add(m.group),M=!0)}function y(){M&&(i.remove(p.group),i.remove(m.group),M=!1)}const T=document.createElement("div");T.id="foot-prompt",T.hidden=!0,document.body.appendChild(T);const E=lw(),A=hw(),k=new B,$=new B,v=new B;let b="off",C=0,D=0,z=0,W=Gp,S=0;const H=new B,N=new B,X=new B,U=new B,K=new Kt,I=new B,G=new Kt,L=new B;let Y=0,ne=0,te=0,se=1,ee=0,ce=!1,he=!1,Z=null;const R=()=>u?u.maxHearts:Dw;let re=R(),oe=!1,de=0,be=0,Ue=0,we=0,O=0;const w=new B,Q=new B,ie=new B,fe=new B,le=new B,Pe=new B,ye=[0,0];let me=!1;const Ge=n.world;function ge(Me,ze){return $e.y+Ge.groundHeightAt(Me-$e.x,ze-$e.z)}let Ie=null;function Le(Me){if(Me!==Ie){if(Ie=Me,!Me){T.hidden=!0;return}T.textContent=Me,T.hidden=!1}}function We(){if(b!=="off"||!n.active)return;S=new $t().setFromQuaternion(t.mesh.quaternion,"YXZ").y,I.copy(t.mesh.position),G.copy(t.mesh.quaternion),K.setFromEuler(new $t(0,S,0,"YXZ")),U.set(I.x,n.hullGroundY(t)+YS,I.z);const ze=t.mesh.scale.x;let et=-1;if(!Be(-1,ze)){if(!Be(1,ze)){z=Hw;return}et=1}x(),b="settle",C=0,W=Math.min(ww,Gp+Math.max(0,I.y-U.y)/bw),n.park(),Ze(et,ze),ne=N.y,L.copy(H).addScaledVector(X,Wa),L.y=ne,Y=Math.atan2(-X.x,-X.z),p.setGait("climb"),He(),p.group.visible=!1,m.setExtension(0),s.consumeAnyJustPressed(),Le(Ae.onFoot.skip)}function Be(Me,ze){return Pe.set(Me*Wp,0,Xp).multiplyScalar(ze).applyQuaternion(K).add(U),Ge.isClear(Pe.x-$e.x,Pe.z-$e.z,1.2)}function Ze(Me,ze){N.set(Me*Wp,Cw,Xp).multiplyScalar(ze).applyQuaternion(K).add(U),X.set(Me,0,0).applyQuaternion(K).setY(0).normalize();const et=ge(N.x,N.z);H.set(N.x,et,N.z),m.group.position.copy(N),m.group.rotation.set(0,Math.atan2(X.x,X.z),0),m.setHeight(N.y-et),m.setExtension(0)}function He(){p.group.position.copy(L),p.group.rotation.y=Y}function dt(){if(b==="walk"||b==="stepoff"){fe.copy(L).addScaledVector(ls,Xn*.62);const{dx:Me,dz:ze,boom:et}=ae(),it=et*Math.cos(te),Nt=et*Math.sin(te);ie.set(Me,0,ze).multiplyScalar(it).add(fe).addScaledVector(ls,1.15+(ho-et)*.2+Nt),J();return}if(b==="settle"||b==="deploy"){fe.copy(t.mesh.position).addScaledVector(ls,.9),ie.copy(t.mesh.position).addScaledVector(X,11).addScaledVector(ls,3.4),Pe.set(Math.sin(S),0,Math.cos(S)).multiplyScalar(3.5),ie.add(Pe),J();return}fe.copy(L).addScaledVector(ls,Xn*.5),ie.copy(H).addScaledVector(X,5.6).addScaledVector(ls,2.2),Pe.set(Math.sin(S),0,Math.cos(S)).multiplyScalar(1.6),ie.add(Pe),ie.y=Math.max(ie.y,fe.y-.4),J()}function J(){const Me=ge(ie.x,ie.z)+.7;ie.y<Me&&(ie.y=Me);const ze=6;for(let et=1;et<ze;et++){const it=et/ze,Nt=ie.x+(fe.x-ie.x)*it,Qt=ie.z+(fe.z-ie.z)*it,$n=(ge(Nt,Qt)+.5-fe.y*it)/(1-it);$n>ie.y&&(ie.y=$n)}}function Oe(Me,ze){return n.parked&&Math.hypot(Me-U.x,ze-U.z)<Lw?!1:Ge.isClear(Me-$e.x,ze-$e.z,.5)}function ae(){const Me=O+Math.PI;for(const it of[0,.42,-.42,.85,-.85,1.3,-1.3,1.9,-1.9]){const Nt=Me+it,Qt=Math.sin(Nt),Dn=Math.cos(Nt);if(Oe(L.x+Qt*ho,L.z+Dn*ho))return{dx:Qt,dz:Dn,boom:ho}}const ze=Math.sin(Me),et=Math.cos(Me);for(let it=ho-.6;it>Kp;it-=.6)if(Oe(L.x+ze*it,L.z+et*it))return{dx:ze,dz:et,boom:it};return{dx:ze,dz:et,boom:Kp}}function _e(Me){dt();const ze=b==="walk"?.13:.34;!me||b==="settle"?(e.position.copy(ie),le.copy(fe),me=!0):(e.position.lerp(ie,ki(Me,ze)),le.lerp(fe,ki(Me,ze))),e.up.set(0,1,0),e.lookAt(le)}function De(){t.mesh.position.copy(U),t.mesh.quaternion.copy(K),m.setExtension(1),L.copy(H).addScaledVector(X,qp),L.y=ge(L.x,L.z),Y=Math.atan2(X.x,X.z),p.group.visible=!0,p.setGait("idle"),He(),St()}function Fe(){if(!c)return!1;const Me=Ge.nearestPerson?Ge.nearestPerson(L.x-$e.x,L.z-$e.z):null;if(Me&&!c.isOpen){const et=Math.hypot(L.x-H.x,L.z-H.z),it=Math.hypot(Me.person.x-(L.x-$e.x),Me.person.z-(L.z-$e.z));if(et<Hp&&et<it)return!1}if(c.isOpen&&(!Me||Me.person!==c.person)){const et=c.person;c.close(),Z&&Z.people.stopTalking(et),Z=null}if(!Me)return!1;const ze=s.keyboard.consumeJustPressed(["KeyE"])||s.gamepad.consumeJustPressed(Mt.A);return Me.person.shop?(ze&&l&&l.show(Me.person.shop),Le(l&&l.isOpen?null:Ae.shop.keeper[Me.person.shop]??Ae.onFoot.talk.replace("{name}",Me.person.name)),!0):(ze&&(Me.people.startTalking(Me.person,L.x-$e.x,L.z-$e.z),Z=Me,c.next(Me.person)||(Me.people.stopTalking(Me.person),Z=null)),c.isOpen?Le(null):Le(Ae.onFoot.talk.replace("{name}",Me.person.name)),!0)}function ct(Me,ze=null,et=null){if(!(b!=="walk"||de>0||we>0)){if(de=kw,ze!=null){const it=L.x-ze,Nt=L.z-et,Qt=Math.hypot(it,Nt)||1;w.x=it/Qt*$p,w.z=Nt/Qt*$p}re=Math.max(0,re-Me),A.set(re,R()),A.flash(),se=0,ee=kp,re<=0&&(we=zw,p.setGait("dying"),w.set(0,0,0),Le(null),E.hide())}}function St(){b="walk",C=0,se=1,ee=0,he=!1,re=R(),de=0,we=0,oe=!1,A.set(re,R()),d(),te=0,O=Y,w.set(0,0,0),D=Nw,me=!1}function Zt(){const Me=Math.min(1,C/W),ze=1-(1-Me)*(1-Me);t.mesh.position.lerpVectors(I,U,ze),t.mesh.quaternion.slerpQuaternions(G,K,ze),t.velocity.set(0,0,0),Me>=1&&(b="deploy",C=0)}function ht(){const Me=Math.min(1,C/Ew);m.setExtension(Me),Me>=1&&(b="down",C=0,p.group.visible=!0,p.setGait("climb"))}function Vt(Me,ze){ne+=(ze?-1:1)*Aw*Me;const et=H.y,it=N.y-.15,Nt=Pe.copy(H).addScaledVector(X,Wa),Qt=ki(Me,.12);L.x+=(Nt.x-L.x)*Qt,L.z+=(Nt.z-L.z)*Qt,Y+=fo(Y,Math.atan2(-X.x,-X.z))*Qt,ze?(L.y=Math.max(et,ne),ne<=et&&(ne=et,b="stepoff",C=0,p.setGait("walk",uo*.7))):(L.y=Math.min(it,ne),ne>=it&&(ne=it,b="stow",C=0,p.group.visible=!1,Le(null))),He()}function En(Me){const ze=Math.min(1,C/Tw),et=Wa+(qp-Wa)*ze;L.copy(H).addScaledVector(X,et),L.y=ge(L.x,L.z);const it=Math.atan2(X.x,X.z);Y+=fo(Y,it)*ki(Me,.12),O=Y,He(),ze>=1&&St()}function ms(){m.setExtension(1-Math.min(1,C/Vp)),C>=Vp&&(b="off",m.setExtension(0),n.unpark(),me=!1,he=!1,E.hide(),A.hide(),y(),f())}function gr(Me,ze){if(we>0||oe){w.set(0,0,0);return}const et=Xa(ze?.lookX??0),it=Xa(ze?.lookY??0),Nt=ze?.lookTurnX??0,Qt=ze?.lookTurnY??0;O+=et*Pw*Me+Nt,te=Gw(te-it*Iw*Me-Qt,-Yp,Yp);const Dn=Math.abs(et)>.05||Math.abs(Nt)>.0015,$n=Xa(ze?.stickYaw??ze?.yaw??0),gs=Xa(ze?.stickThrottle??ze?.throttle??0);let Un=Math.hypot($n,gs);Un>1&&(Un=1);const _s=s.keyboard.isDown("ShiftLeft")||s.keyboard.isDown("ShiftRight")||s.gamepad.isButtonDown(Mt.B),So=_s&&Un>.15;_s&&!ce&&se>0&&ee<=0&&(se=Math.max(0,se-xw)),ce=_s,ee>0&&(ee-=Me);const P=So&&ee<=0&&se>0;if(he=P,P){const Re=pw*(u?u.staminaDrain:1),Te=se<_w?Re*.5:Re;se-=Te*Me,se<=0&&(se=0,ee=kp)}else se=Math.min(1,se+(ee>0?gw:mw)*Me);const F=Un<Va?uo*(Un/Va):uo+(dw-uo)*((Un-Va)/(1-Va)),V=ee>0?Math.min(F,uo):P?fw:F;if(Un>.05){const Re=O+Math.atan2($n,gs);Q.set(Math.sin(Re),0,Math.cos(Re)).multiplyScalar(V),Y+=fo(Y,Re)*ki(Me,yw)}else Q.set(0,0,0);const j=ki(Me,vw);w.x+=(Q.x-w.x)*j,w.z+=(Q.z-w.z)*j;const q=Math.hypot(w.x,w.z);if(q>.05){L.x+=w.x*Me,L.z+=w.z*Me,Ge.resolveWalk(L.x-$e.x,L.z-$e.z,Sw,ye),L.x=ye[0]+$e.x,L.z=ye[1]+$e.z;const Re=L.x-U.x,Te=L.z-U.z,qe=Math.hypot(Re,Te);qe<Ou&&qe>1e-4&&(L.x=U.x+Re/qe*Ou,L.z=U.z+Te/qe*Ou)}q>Mw?p.setGait("walk",q):p.setGait("idle");const ue=Math.abs($n)<.4&&Un>.05;!Dn&&ue&&(O+=fo(O,Y)*ki(Me,zp),te+=(0-te)*ki(Me,zp*2)),L.y=ge(L.x,L.z),He(),k.copy(L).addScaledVector(ls,Xn*.75).project(e);const xe=k.z<1&&Math.abs(k.x)<1.4&&Math.abs(k.y)<1.4;if(E.update(se,ee>0,Me,xe?{x:(k.x*.5+.5)*window.innerWidth+52,y:(-k.y*.5+.5)*window.innerHeight}:null),be>0&&(be-=Me),Ue>0&&(Ue-=Me),(s.keyboard.isDown("Space")||s.gamepad.isButtonDown(Mt.R2)||s.gamepad.isButtonDown(Mt.X))&&be<=0&&o&&(Ue=Bw,p.getMuzzle($))){be=Uw*(u?u.shotInterval:1);const Re=Ow*(u?u.shotRange:1),Te=o.aimAt($,Y,Fw,Re);Te?(v.copy(Te).sub($).normalize(),Y+=fo(Y,Math.atan2(v.x,v.z))*.6):v.set(Math.sin(Y),0,Math.cos(Y));const qe=o.shoot($,v,Re);p.fire(),a($,v,qe)}if(p.setArmed(Ue>0,Y),Fe())return;Math.hypot(L.x-H.x,L.z-H.z)<Hp?(Le(Ae.onFoot.board),(s.keyboard.consumeJustPressed(jp)||s.gamepad.consumeJustPressed(Mt.A))&&(b="up",C=0,ne=L.y,p.setGait("climb"),Le(null))):D>0?Le(Ae.onFoot.controls):Le(null)}return{get active(){return b!=="off"},get cutscene(){return b==="settle"||b==="deploy"||b==="down"||b==="stepoff"},get state(){return b},vexo:p,ladder:m,get position(){return L},get heading(){return Y},get stamina(){return se},get winded(){return ee>0},get sprinting(){return he},get hearts(){return re},get maxHearts(){return R()},refreshHearts(){re=Math.min(R(),Math.max(re,R())),A.set(re,R())},get down(){return we>0||oe},get quarry(){return b==="walk"&&we<=0?L:null},takeHit:ct,begin:We,update(Me,ze){if(b==="off"){z>0&&(z-=Me),ze&&n.active?(Le(z>0?Ae.onFoot.noRoom:Ae.onFoot.climbOut),(s.keyboard.consumeJustPressed(jp)||s.gamepad.consumeJustPressed(Mt.A))&&We()):Le(null);return}switch(C+=Me,D>0&&(D-=Me),this.cutscene&&C>Rw&&s.consumeAnyJustPressed()&&(De(),Le(null)),b){case"settle":Zt();break;case"deploy":ht();break;case"down":Vt(Me,!0);break;case"stepoff":En(Me);break;case"walk":gr(Me,ze);break;case"up":Vt(Me,!1);break;case"stow":ms();break}de>0&&(de-=Me),we>0&&(we-=Me,we<=0&&(we=0,oe=!0,h())),p.update(Me),b!=="off"&&_e(Me),this.cutscene?Le(Ae.onFoot.skip):b!=="walk"&&Le(null)},prewarm(Me,ze){const et=p.group.visible;p.group.position.copy($e),p.group.visible=!0,m.group.position.copy($e),m.setHeight(2.6),m.setExtension(1),Me.compile(i,ze);const it=new Gt(50,ze.aspect,.1,5e3);it.position.copy($e).add(new B(3.5,1.6,4.5)),it.lookAt($e.x,$e.y+1,$e.z),Me.render(i,it),p.group.visible=et,m.setExtension(0),Me.render(i,ze)},reset(){b!=="off"&&n.unpark(),b="off",C=0,z=0,oe=!1,we=0,re=R(),A.set(re,R()),me=!1,p.group.visible=!1,m.setExtension(0),Le(null),he=!1,E.hide(),A.hide(),y()}}}const Jp=4,Ww=3,Xw=24,qw=Math.cos(1.1),Yw=7,Kw=8,$w=55,Zp=4.5,Qp=.9,Fu=3.4,e0=2,jw=3.2,t0=1.9,dr=.42,n0=.22,Jw=.9,Zw=.45;function Qw({scene:i,world:e,origin:t}){const n=new rt;n.visible=!1,i.add(n);const s=new Ve({color:16751164,emissive:16742940,emissiveIntensity:1.6,roughness:.6}),r=new Ve({color:5453855,roughness:.95}),o=new Ve({color:7164979,roughness:.9}),a=[],c=[],l=[[2.4,1.2],[-2.1,1.9],[1.1,-2.4]],u=(S,H)=>t.y+e.groundHeightAt(S,H),h=620;for(let S=0;S<Jp;S++){const H={x:0,z:0,cell:null,members:[]};c.push(H),x(H);for(let N=0;N<Ww;N++)T(H,0,0,N===0?"blue":"red",!1);T(H,0,0,"black",!0)}function d(S,H,N=0){let X=Math.imul(S|0,668265261)^Math.imul(H|0,374761393)^Math.imul(N,2654435761);return X=Math.imul(X^X>>>15,2246822507),X=Math.imul(X^X>>>13,3266489909),((X^X>>>16)>>>0)/4294967296}const f=new Map;function g(S,H){const N=`${S},${H}`;if(f.has(N))return f.get(N);let X=null;if(d(S,H,7)<=.42){const U=(S+.2+d(S,H,11)*.6)*h,K=(H+.2+d(S,H,13)*.6)*h;(e.info.settlements??[]).some(G=>Math.hypot(U-G.x,K-G.z)<G.radius+500)||(X=M(U,K,7))}return f.set(N,X),X}const _=2;function p(S,H){const N=Math.floor(S/h),X=Math.floor(H/h),U=[],K=3;let G=c.every(ee=>ee.cell===null)?1/0:_,L=!1;const Y=[];for(let ee=-K;ee<=K;ee++)for(let ce=-K;ce<=K;ce++)Y.push([N+ce,X+ee,ce*ce+ee*ee]);Y.sort((ee,ce)=>ee[2]-ce[2]);for(const[ee,ce]of Y){if(!f.has(`${ee},${ce}`)){if(G<=0){L=!0;continue}G-=1}const Z=g(ee,ce);Z&&U.push({key:`${ee},${ce}`,site:Z,d2:(Z.x-S)**2+(Z.z-H)**2})}k=L,U.sort((ee,ce)=>ee.d2-ce.d2);const ne=U.slice(0,Jp),te=new Set(ne.map(ee=>ee.key)),se=c.filter(ee=>!te.has(ee.cell));for(const ee of ne){if(c.some(he=>he.cell===ee.key))continue;const ce=se.pop();if(!ce)break;m(ce,ee.key,ee.site.x,ee.site.z)}}function m(S,H,N,X){S.cell=H,S.x=N,S.z=X,y(S);for(const[U,K]of S.members.entries()){const I=U/S.members.length*Math.PI*2+d(N|0,X|0)*6,G=K.boss?1.9:2.6;K.home.set(N+Math.sin(I)*G,X+Math.cos(I)*G),K.pos.copy(K.home),K.state="idle",K.timer=0,K.hp=K.boko.maxHp*(K.boss?2:1),K.boko.group.rotation.set(0,K.heading,0),K.boko.group.visible=!0,$(K)}}function M(S,H,N){if(e.isClear(S,H,N))return{x:S,z:H};for(let X=9;X<=45;X+=9)for(let U=0;U<Math.PI*2;U+=Math.PI/4){const K=S+Math.sin(U)*X,I=H+Math.cos(U)*X;if(e.isClear(K,I,N))return{x:K,z:I}}return null}function x(S){const H=new pe(new In(.55,.13,6,12),r);H.rotation.x=Math.PI/2,n.add(H),S.stones=H;const N=new pe(new ln(.32,.8,7),s);n.add(N),S.flame=N,S.crates=l.map((X,U)=>{const K=new pe(new gt(.7,.62,.7),o);return K.rotation.y=U*.8,n.add(K),K})}function y(S){const H=u(S.x,S.z);S.stones.position.set(S.x+t.x,H+.1,S.z+t.z),S.flame.position.set(S.x+t.x,H+.5,S.z+t.z);for(const[N,[X,U]]of l.entries())S.crates[N].position.set(S.x+X+t.x,u(S.x+X,S.z+U)+.31,S.z+U+t.z)}function T(S,H,N,X,U){const K=Rp({tier:X});U&&K.group.scale.setScalar(1.35);const I={boko:K,camp:S,home:new Se(H,N),pos:new Se(H,N),heading:Math.random()*Math.PI*2,state:"idle",timer:0,hp:K.maxHp*(U?2:1),boss:U,phase:Math.random()*10,lastSeen:0,hitCooldown:0};return n.add(K.group),a.push(I),S.members.push(I),$(I),I}const E=new B,A=new Se(1/0,1/0);let k=!1;function $(S){S.boko.group.position.set(S.pos.x+t.x,u(S.pos.x,S.pos.y),S.pos.y+t.z),S.boko.group.rotation.y=S.heading}function v(S,H){const N=H.x-S.pos.x,X=H.y-S.pos.y,U=Math.hypot(N,X);if(U>Xw)return!1;if(U<Yw)return!0;const K=Math.sin(S.heading),I=Math.cos(S.heading);return(N*K+X*I)/(U||1)>qw}function b(S,H){for(const N of S.members)N.state==="dead"||N.state==="chase"||(N.state="alert",N.timer=.35+Math.random()*.25,N.lastSeen=H)}function C(S,H,N,X,U){const K=H-S.pos.x,I=N-S.pos.y,G=Math.hypot(K,I);if(G<.05)return G;let Y=Math.atan2(K,I)-S.heading;for(;Y>Math.PI;)Y-=Math.PI*2;for(;Y<-Math.PI;)Y+=Math.PI*2;S.heading+=Math.max(-Fu*U,Math.min(Fu*U,Y));const ne=Math.min(G,X*U);if(Math.abs(Y)<1.2){const te=S.pos.x+Math.sin(S.heading)*ne,se=S.pos.y+Math.cos(S.heading)*ne;e.isClear(te,se,.45)?(S.pos.x=te,S.pos.y=se):S.heading+=.8*U*Fu}return G}function D(S,H,N){const X=S.boko;S.phase+=N*(H?9:1.6);const U=Math.sin(S.phase);if(S.state!=="dead"){for(const[K,I]of X.legs.entries())I.group.rotation.x=H?U*(K?-.7:.7):0;for(const[K,I]of X.arms.entries()){const G=.18+(S.state==="chase"?.35:0);I.group.rotation.x=G+(H?U*(K?.5:-.5):U*.05),I.group.rotation.z=I.side*.2}if(S.state==="attack"){const K=S.timer,I=K<dr?-(K/dr)*2.2:-2.2+(K-dr)/n0*3.4;X.arms[0].group.rotation.x=Math.min(1.2,I)}S.state==="alert"?(X.arms[0].group.rotation.x=-1.4,X.arms[1].group.rotation.x=-1.2,X.body.rotation.x=-.18):X.body.rotation.x=S.state==="chase"?.16:0}}function z(S){let H=0;for(const N of S.members)N.state==="attack"&&(H+=1);return H}const W=new Se;return{group:n,monsters:a,camps:c,setActive(S){n.visible=S},focus(S,H){!(Math.abs(S-A.x)>=60||Math.abs(H-A.y)>=60)&&!k||(A.set(S,H),p(S,H))},update(S,H,N){if(!n.visible)return;for(const U of c)U.flame.scale.setScalar(.85+Math.sin(performance.now()*.006+U.x)*.12);const X=H!=null;X&&W.set(H.x-t.x,H.z-t.z);for(const U of a){U.timer+=S,U.hitCooldown>0&&(U.hitCooldown-=S);let K=!1;switch(U.state){case"idle":{const I=U.phase*.35+U.home.x,G=U.home.x+Math.sin(I)*1.4,L=U.home.y+Math.cos(I)*1.4;K=C(U,G,L,Qp,S)>.3,X&&v(U,W)&&b(U.camp,0);break}case"alert":{U.timer>=.55&&(U.state="chase",U.timer=0);break}case"chase":{if(!X){U.state="idle",U.timer=0;break}const I=C(U,W.x,W.y,Zp,S);K=!0,v(U,W)?U.lastSeen=0:U.lastSeen+=S,I<=t0&&z(U.camp)<e0?(U.state="attack",U.timer=0):I<jw&&z(U.camp)>=e0?C(U,U.pos.x+(U.pos.x-W.x)*.4,U.pos.y+(U.pos.y-W.y)*.4,Zp*.5,S):(U.lastSeen>Kw||I>$w)&&(U.state="return",U.timer=0);break}case"attack":{U.timer>=dr&&U.timer<dr+S&&X&&Math.hypot(W.x-U.pos.x,W.y-U.pos.y)<=t0+.5&&N(U.boss?2:1,U.pos.x+t.x,U.pos.y+t.z),U.timer>=dr+n0+Jw&&(U.state=X?"chase":"return",U.timer=0);break}case"stagger":{U.timer>=Zw&&(U.state=X?"chase":"return",U.timer=0);break}case"return":{K=C(U,U.home.x,U.home.y,Qp*1.8,S)>.4,K||(U.state="idle",U.timer=0),X&&v(U,W)&&b(U.camp,0);break}}D(U,K,S),U.state!=="dead"&&$(U)}},aimAt(S,H,N=.55,X=45){const U=Math.sin(H),K=Math.cos(H),I=Math.cos(N);let G=null,L=-1/0;for(const Y of a){if(Y.state==="dead")continue;const ne=Y.pos.x+t.x-S.x,te=Y.pos.y+t.z-S.z,se=Math.hypot(ne,te);if(se>X||se<.001)continue;const ee=(ne*U+te*K)/se;if(ee<I)continue;const ce=ee*2-se/X;ce>L&&(L=ce,G=Y)}return G?(E.set(G.pos.x+t.x,u(G.pos.x,G.pos.y)+Eu*.55,G.pos.y+t.z),E):null},shoot(S,H,N=60,X=.55){let U=null,K=N;for(const I of a){if(I.state==="dead")continue;E.set(I.pos.x+t.x,u(I.pos.x,I.pos.y)+Eu*.55,I.pos.y+t.z).sub(S);const G=E.dot(H);G<=0||G>K||Math.sqrt(Math.max(0,E.lengthSq()-G*G))>X*(I.boss?1.5:1)||(U=I,K=G)}return U?(U.hp-=1,U.hp<=0?(U.state="dead",U.timer=0,U.boko.group.rotation.x=-Math.PI/2.2,U.boko.group.position.y=u(U.pos.x,U.pos.y)+.25):(U.state="stagger",U.timer=0),U):null},kill(S){S.state="dead",S.timer=0,S.hp=0,S.boko.group.rotation.x=-Math.PI/2.2,S.boko.group.position.y=u(S.pos.x,S.pos.y)+.25},snapshot(){return c.filter(S=>S.cell).map(S=>({cell:S.cell,hp:S.members.map(H=>H.state==="dead"?0:H.hp)}))},restore(S){if(!Array.isArray(S))return;const H=new Map(S.map(N=>[N.cell,N]));for(const N of c){const X=H.get(N.cell);if(X)for(const[U,K]of N.members.entries()){const I=X.hp[U];I!==void 0&&(K.hp=I,I<=0&&this.kill(K))}}},reset(){for(const S of a)S.pos.copy(S.home),S.state="idle",S.timer=0,S.hp=S.boko.maxHp*(S.boss?2:1),S.boko.group.rotation.set(0,S.heading,0),$(S)}}}const eE=2.2,tE=.011,nE=.25,iE=0,sE=4,rE=5;function oE({renderer:i,input:e,saves:t=null,tablet:n=null}){const s=document.createElement("div");s.id="inventory",s.className="screen-overlay",s.hidden=!0,s.innerHTML=`
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
  `,document.body.appendChild(s);const r=s.querySelector("[data-items]"),o=s.querySelector("[data-tabs]"),a=s.querySelector("[data-system]"),c=s.querySelector("[data-tablet]"),l=s.querySelector("[data-save]"),u=s.querySelector("[data-saved]"),h=s.querySelector(".inventory__figure"),d=[{id:"weapons",label:Ae.inventory.weapons},...n?[{id:"tablet",label:Ae.inventory.tablet}]:[],{id:"system",label:Ae.inventory.system}];n&&(c.appendChild(n),n.style.display="");let f=0;const g=new Lr;g.background=null;const _=new Gt(32,1,.05,40),p=new Pr(i),m=p.fromScene(new bu,.04).texture;p.dispose(),g.add(new Ta(8363712,1185824,.9));const M=new xi(16774116,2.2);M.position.set(-2,3,3.2),g.add(M);const x=new xi(10420176,1.1);x.position.set(1.4,2,-3),g.add(x);const y=new rt;g.add(y);const T=wu({suitLight:!1,environment:m});y.add(T.group),T.setArmed(!1);const E=Xn*1.22;function A(I){const G=_.fov*Math.PI/180,L=E/2/Math.tan(G/2),Y=Xn*.42/(Math.tan(G/2)*I),ne=Math.max(L,Y);_.position.set(0,Xn*.52,ne),_.lookAt(0,Xn*.5,0)}A(.75);const k=new Xe;let $=!1,v=0,b=!0,C=!1,D=0;function z(I){$&&(C=!0,b=!1,D=I.clientX)}function W(I){C&&(v+=(I.clientX-D)*tE,D=I.clientX)}function S(){C=!1}h.addEventListener("pointerdown",z),window.addEventListener("pointermove",W),window.addEventListener("pointerup",S);let H=[];function N(){o.innerHTML="";for(const[I,G]of d.entries()){const L=document.createElement("span");L.className=I===f?"inventory__tab inventory__tab--on":"inventory__tab",L.textContent=G.label,L.addEventListener("click",()=>{f=I,N(),U()}),o.appendChild(L)}}function X(I){f=(f+I+d.length)%d.length,N(),U()}function U(){const I=d[f].id;if(r.hidden=I!=="weapons",a.hidden=I!=="system",c.hidden=I!=="tablet",I==="system"){u.textContent=K();return}if(I!=="tablet"){r.innerHTML="";for(const G of H){const L=document.createElement("li");L.className=G.held?"inventory__item inventory__item--held":"inventory__item",L.innerHTML=`
        <span class="inventory__item-name">${G.name}</span>
        <span class="inventory__item-note">${G.note}</span>
      `,r.appendChild(L)}if(!H.length){const G=document.createElement("li");G.className="inventory__item inventory__item--empty",G.textContent=Ae.inventory.empty,r.appendChild(G)}}}function K(){const I=t?.latest;if(!I)return Ae.inventory.neverSaved;const G=Math.max(0,Date.now()-I.at);if(G<8e3)return Ae.inventory.savedJustNow;const L=Math.round(G/6e4);return L<1?Ae.inventory.savedSecondsAgo:Ae.inventory.savedMinutesAgo.replace("{n}",String(L))}return l.addEventListener("click",()=>{const I=t?.saveManual();u.textContent=I?Ae.inventory.savedJustNow:Ae.inventory.saveFailed}),{get isOpen(){return $},setItems(I){H=I.map(G=>({held:!1,...G})),U()},get tab(){return d[f].id},toggle(){return $?this.close():this.show()},show(){return $=!0,s.hidden=!1,b=!0,v=0,T.setArmed(!0,!1),N(),U(),T.setGait("idle"),!0},close(){return $=!1,s.hidden=!0,C=!1,T.setArmed(!1),!1},update(I,G){if(!$)return;const L=G?.stickYaw??G?.yaw??0,Y=(e.keyboard.isDown("KeyA")?1:0)-(e.keyboard.isDown("KeyD")?1:0);if((e.gamepad.consumeJustPressed(rE)||e.keyboard.consumeJustPressed(["ArrowRight"]))&&X(1),(e.gamepad.consumeJustPressed(sE)||e.keyboard.consumeJustPressed(["ArrowLeft"]))&&X(-1),d[f].id==="system"&&e.gamepad.consumeJustPressed(iE)){const te=t?.saveManual();u.textContent=te?Ae.inventory.savedJustNow:Ae.inventory.saveFailed}const ne=L||Y;ne?(b=!1,v+=ne*eE*I):b&&!C&&(v+=nE*I),y.rotation.y=v,T.update(I)},render(){if(!$)return;const I=h.getBoundingClientRect();if(I.width<8||I.height<8)return;const G=i.getPixelRatio(),L=i.getSize(new Se),Y=I.left*G,ne=L.height*G-I.bottom*G,te=I.width*G,se=I.height*G;_.aspect=I.width/I.height,_.updateProjectionMatrix(),A(_.aspect);const ee=i.getScissorTest();i.setScissorTest(!0),i.setViewport(Y/G,ne/G,te/G,se/G),i.setScissor(Y/G,ne/G,te/G,se/G);const ce=i.autoClear;i.autoClear=!1,i.getClearColor(k);const he=i.getClearAlpha();i.setClearColor(661026,1),i.clear(!0,!0,!1),i.setClearColor(k,he),i.render(g,_),i.autoClear=ce,i.setScissorTest(ee),i.setViewport(0,0,L.width,L.height),i.setScissor(0,0,L.width,L.height)},vexo:T}}const Bu="super-vexo/save",i0=5;function qa(){try{const i=localStorage.getItem(Bu);if(!i)return{manual:null,auto:null};const e=JSON.parse(i);return e.v!==i0?{manual:null,auto:null}:{manual:e.manual??null,auto:e.auto??null}}catch{return{manual:null,auto:null}}}function s0(i){try{return localStorage.setItem(Bu,JSON.stringify({v:i0,...i})),!0}catch{return!1}}function aE({ship:i,surface:e,onFoot:t,monsters:n,mission:s,upgrades:r,rovers:o,perks:a=null}){function c(l){return{kind:l,at:Date.now(),ship:{p:i.mesh.position.toArray(),q:i.mesh.quaternion.toArray(),scale:i.mesh.scale.x},inTown:e.active,camps:n.snapshot(),credits:s.credits,perks:a?a.snapshot():null,upgrades:r.upgrades.filter(u=>u.bought).map(u=>u.id),rovers:o.rovers.map(u=>u.fixed)}}return{get has(){const{manual:l,auto:u}=qa();return!!(l||u)},get latest(){const{manual:l,auto:u}=qa();return l?u&&u.at>l.at?u:l:u},saveManual(){const l=qa();return l.manual=c("manual"),s0(l)},saveAuto(l){const u=qa();return u.auto={...c("auto"),reason:l},s0(u)},restore(l){if(!l)return!1;t.reset(),e.reset(i),l.inTown&&e.enter(i),i.mesh.position.fromArray(l.ship.p),i.mesh.quaternion.fromArray(l.ship.q),i.mesh.scale.setScalar(l.ship.scale??1),i.velocity.set(0,0,0),n.reset(),n.focus(i.mesh.position.x-$e.x,i.mesh.position.z-$e.z),n.restore(l.camps),o.reset();for(const[u,h]of(l.rovers??[]).entries())h&&o.rovers[u]&&o.markFixed(o.rovers[u]);s.reset(),s.grantCredits(l.credits??0),a&&a.restore(l.perks),r.reset();for(const u of l.upgrades??[])r.buyFree(u);return!0},clear(){try{return localStorage.removeItem(Bu),!0}catch{return!1}}}}function cE({onContinue:i,onTitle:e}){const t=document.createElement("div");t.id="game-over",t.hidden=!0,t.innerHTML=`
    <div class="game-over__sign">${Ae.gameOver.title}</div>
    <p class="game-over__ask" data-ask>${Ae.gameOver.ask}</p>
    <div class="game-over__buttons">
      <button class="game-over__btn" data-yes>${Ae.gameOver.yes}</button>
      <button class="game-over__btn" data-no>${Ae.gameOver.no}</button>
    </div>
    <p class="game-over__hint">${Ae.gameOver.hint}</p>
  `,document.body.appendChild(t);const n=t.querySelector("[data-ask]"),s=t.querySelector("[data-yes]"),r=t.querySelector("[data-no]");let o=!1,a=0,c=!0;function l(){s.classList.toggle("game-over__btn--on",a===0),r.classList.toggle("game-over__btn--on",a===1),s.disabled=!c}function u(){const d=a===0&&c;h(),d?i():e()}function h(){o=!1,t.hidden=!0}return s.addEventListener("click",()=>{a=0,l(),u()}),r.addEventListener("click",()=>{a=1,l(),u()}),{get isOpen(){return o},show(d){o=!0,c=d,a=d?0:1,n.textContent=d?Ae.gameOver.ask:Ae.gameOver.noSave,t.hidden=!1,l()},update(d,f){if(!o)return;const g=d.keyboard.consumeJustPressed(["ArrowLeft","KeyA"])||d.gamepad.consumeJustPressed(f.Left),_=d.keyboard.consumeJustPressed(["ArrowRight","KeyD"])||d.gamepad.consumeJustPressed(f.Right);(g||_)&&(a=a===0?1:0,l()),(d.keyboard.consumeJustPressed(["Enter","Space"])||d.gamepad.consumeJustPressed(f.A))&&u()},hide:h}}const r0=Math.PI*1.25,lE=.55,ku=8,po=i=>[i>>16&255,i>>8&255,i&255],zu=po(3105920),Hu=po(729139),Gu=po(14734254),Ya=i=>i<0?0:i>1?1:i,bn=(i,e,t)=>i+(e-i)*t;function uE(i,e,t,n,s,r){const o=1-s.moisture,{sandy:a,plateau:c}=i.styleAt(s),l=f=>{const g=po(f);r[0]=g[0],r[1]=g[1],r[2]=g[2]},u=(f,g)=>{if(g<=0)return;const _=po(f);r[0]=bn(r[0],_[0],g),r[1]=bn(r[1],_[1],g),r[2]=bn(r[2],_[2],g)},h=(f,g,_)=>{const p=Ya((_-f)/(g-f));return p*p*(3-2*p)};l(rn[je.FOREST]),u(rn[je.PLAIN],h(.28,.44,o)),u(rn[je.SAVANNA],h(.42,.58,o)),u(rn[je.STONE_DESERT],h(.55,.68,o)),u(rn[je.MESA],c*.85),u(rn[je.DUNES],a);const d=i.snowlineAt(e,t);if(u(9275257,h(d*.55,d*.9,n)),u(rn[je.SNOW],h(d*.86,d*1.15,n)),n<xt(70)){const f=1-Ya(n/xt(70));r[0]=bn(r[0],Gu[0],f*f*.6),r[1]=bn(r[1],Gu[1],f*f*.6),r[2]=bn(r[2],Gu[2],f*f*.6)}}function hE({terrain:i,width:e,height:t,minX:n,maxX:s,minZ:r,maxZ:o}){const a=new Uint8ClampedArray(e*t*4),c=(s-n)/e,l=(o-r)/t,u=new Float64Array(e+1),h=new Float64Array(e+1),d=[0,0,0];let f=null,g=-1;const _={continent:0,uplift:0,moisture:0,heat:0};let p=0;const m=(x,y)=>{for(let T=0;T<=e;T++)x[T]=i.heightAt(n+T*c,y)},M=x=>{const y=Math.ceil(e/ku)+1;f||(f=new Array(y));for(let T=0;T<y;T++)f[T]=i.regionAt(n+T*ku*c,x);return f};return{pixels:a,width:e,height:t,get done(){return p>=t},get progress(){return p/t},drawRows(x=8){for(let y=0;y<x&&p<t;y++,p++){const T=r+p*l;p===0?m(u,T):u.set(h),m(h,T+l),g!==p&&(M(T),g=p);for(let E=0;E<e;E++){const A=u[E],k=(p*e+E)*4;if(a[k+3]=255,A<=rs){const X=Ya(-A/xt(700));a[k]=bn(zu[0],Hu[0],X),a[k+1]=bn(zu[1],Hu[1],X),a[k+2]=bn(zu[2],Hu[2],X);continue}const $=n+E*c,v=E/ku,b=Math.floor(v),C=v-b,D=f[b],z=f[b+1]??D;_.continent=bn(D.continent,z.continent,C),_.uplift=bn(D.uplift,z.uplift,C),_.moisture=bn(D.moisture,z.moisture,C),_.heat=bn(D.heat,z.heat,C),uE(i,$,T,A,_,d);const W=(u[E+1]-A)/c,S=(h[E]-A)/l,N=.55+Ya((lE+Math.cos(r0)*W*6+Math.sin(r0)*S*6)/Math.sqrt(1+(W*W+S*S)*36)+.42)*.75;a[k]=d[0]*N,a[k+1]=d[1]*N,a[k+2]=d[2]*N}}return p>=t}}}const us=900,mo=Math.round(us*Jt/Ot),dE=2.5,fE="#7dff9f",pE="#8fd0ff",Vu=8,mE=1.15;function gE({world:i}){const e=document.createElement("div");e.id="map-screen",e.hidden=!0,e.innerHTML=`
    <div class="map-panel">
      <div class="map-head">
        <span class="map-title">${Ae.map.title}</span>
        <span class="map-scale" data-scale></span>
      </div>
      <div class="map-frame">
        <canvas class="map-canvas" data-canvas></canvas>
        <p class="map-building" data-building></p>
        <div class="map-zoom">
          <button class="map-zoom__btn" data-in type="button" aria-label="zoom in">+</button>
          <div class="map-zoom__bar"><div class="map-zoom__fill" data-fill></div></div>
          <button class="map-zoom__btn" data-out type="button" aria-label="zoom out">&minus;</button>
        </div>
      </div>
      <p class="screen-card__hint">${Ae.map.hint}</p>
    </div>
  `,document.body.appendChild(e);const t=e.querySelector("[data-canvas]"),n=e.querySelector("[data-building]"),s=e.querySelector("[data-fill]"),r=e.querySelector("[data-scale]"),o=t.getContext("2d"),a=Ae.map.scale.replace("{km}",Math.round(Ot*2/1e3)).replace("{kmZ}",Math.round(Jt*2/1e3)).replace("{m}",Math.round(Ot*2/us));r.textContent=a;const c=document.createElement("canvas");c.width=us,c.height=mo;const l=c.getContext("2d"),u=l.createImageData(us,mo),h=hE({terrain:i.terrain,width:us,height:mo,minX:-Ot,maxX:Ot,minZ:-Jt,maxZ:Jt});let d=!1,f=null,g=null,_=!0,p=1,m=0,M=0;function x(){const v=performance.now();for(;!h.done&&performance.now()-v<dE;)h.drawRows(4);u.data.set(h.pixels),l.putImageData(u,0,0),_=!0,h.done||requestAnimationFrame(x)}requestAnimationFrame(x);function y(v){p=Math.min(Vu,Math.max(1,p*(v>0?1.45:1/1.45))),p<=1.0001&&(m=0,M=0),_=!0,$()}e.querySelector("[data-in]").addEventListener("click",()=>y(1)),e.querySelector("[data-out]").addEventListener("click",()=>y(-1)),e.addEventListener("wheel",v=>{d&&(v.preventDefault(),y(v.deltaY<0?1:-1))},{passive:!1});const T={x:0,y:0};let E={x:0,y:0,w:0,h:0};function A(v,b){return T.x=E.x+(v+Ot)/(Ot*2)*E.w,T.y=E.y+(b+Jt)/(Jt*2)*E.h,T}function k(v,b,C,D,z){const W=A(v,b);o.save(),o.translate(W.x,W.y),o.rotate(-C+Math.PI),o.beginPath(),o.moveTo(0,-z),o.lineTo(z*.62,z*.75),o.lineTo(0,z*.35),o.lineTo(-z*.62,z*.75),o.closePath(),o.fillStyle=D,o.strokeStyle="rgba(4, 10, 18, 0.85)",o.lineWidth=1.5,o.fill(),o.stroke(),o.restore()}function $(){const v=t.getBoundingClientRect();if(v.width<8||v.height<8)return;const b=Math.min(window.devicePixelRatio||1,2),C=Math.round(v.width*b),D=Math.round(v.height*b);(t.width!==C||t.height!==D)&&(t.width=C,t.height=D),o.clearRect(0,0,C,D);const z=Math.min(C/us,D/mo)*p,W=us*z,S=mo*z,H=f??g??{x:0,z:0},N=(H.x+m+Ot)/(Ot*2),X=(H.z+M+Jt)/(Jt*2);E={w:W,h:S,x:W<=C?(C-W)/2:Math.min(0,Math.max(C-W,C/2-N*W)),y:S<=D?(D-S)/2:Math.min(0,Math.max(D-S,D/2-X*S))},o.imageSmoothingEnabled=p<2.5,o.drawImage(c,E.x,E.y,E.w,E.h);for(const U of i.info.settlements??[]){const K=A(U.x,U.z),I=U.kind==="capital";o.beginPath(),o.arc(K.x,K.y,(I?5:3.2)*b,0,Math.PI*2),o.fillStyle=I?"#ffe9b0":"#efe0c4",o.strokeStyle="rgba(20, 14, 8, 0.85)",o.lineWidth=1.6*b,o.fill(),o.stroke(),o.font=`${(I?12:10)*b}px ui-monospace, monospace`,o.textAlign="center",o.lineWidth=3*b,o.strokeStyle="rgba(10, 16, 24, 0.9)",o.strokeText(U.name,K.x,K.y-(I?9:7)*b),o.fillStyle="#fff6e2",o.fillText(U.name,K.x,K.y-(I?9:7)*b)}g&&k(g.x,g.z,g.heading,pE,9*b),f&&k(f.x,f.z,f.heading,fE,8*b),r.textContent=a+(p>1.02?` · ×${p.toFixed(1)}`:""),s.style.height=`${Math.log(p)/Math.log(Vu)*100}%`,n.hidden=h.done,h.done||(n.textContent=Ae.map.building.replace("{pct}",String(Math.round(h.progress*100)))),_=!1}return{get isOpen(){return d},get progress(){return h.progress},get zoom(){return p},get view(){return{panX:m,panZ:M}},setMarkers(v,b=null){f=v,g=b,d&&(_=!0)},zoomBy(v,b){if(!d||!v)return p;const C=p;return p=Math.min(Vu,Math.max(1,p*2**(v*mE*b))),p<=1.0001&&(m=0,M=0),p!==C&&(_=!0),p},panBy(v,b,C){if(!d||p<=1.0001||!v&&!b)return;const D=Ot*2/p;m=Math.max(-Ot,Math.min(Ot,m+v*D*C)),M=Math.max(-Jt,Math.min(Jt,M+b*D*C)),_=!0},recentre(){m=0,M=0,_=!0},toggle(){return d?this.close():this.show()},show(){return d=!0,m=0,M=0,e.hidden=!1,_=!0,$(),!0},close(){return d=!1,e.hidden=!0,!1},update(){!d||!_||$()}}}function _E(){const i=document.createElement("div");i.id="dialogue",i.hidden=!0,i.innerHTML=`
    <div class="dialogue__box">
      <div class="dialogue__who" data-who></div>
      <p class="dialogue__line" data-line></p>
      <div class="dialogue__hint">${Ae.dialogue.more}</div>
    </div>
  `,document.body.appendChild(i);const e=i.querySelector("[data-who]"),t=i.querySelector("[data-line]");let n=!1,s=null;return{get isOpen(){return n},get person(){return s},next(r){return s!==r&&(s=r,r.said=0),r.said>=r.lines.length?(this.close(),!1):(e.textContent=r.name,t.textContent=r.lines[r.said],r.said+=1,n=!0,i.hidden=!1,!0)},close(){s&&(s.said=0),s=null,n=!1,i.hidden=!0}}}const Ka=[{id:"heart",shop:"apothecary",price:120,max:3,scale:1.6},{id:"wind",shop:"apothecary",price:90,max:1},{id:"quickdraw",shop:"gunsmith",price:150,max:1},{id:"barrel",shop:"gunsmith",price:130,max:1},{id:"thrusters",shop:"shipwright",price:200,max:1}];function xE(){const i=Object.fromEntries(Ka.map(t=>[t.id,0])),e=t=>i[t]>0;return{get owned(){return{...i}},priceOf(t){return Math.round(t.price*(t.scale??1)**i[t.id])},soldOut(t){return i[t.id]>=t.max},stockOf(t){return Ka.filter(n=>n.shop===t)},take(t){i[t]=(i[t]??0)+1},snapshot(){return{...i}},restore(t){for(const n of Ka)i[n.id]=Math.min(n.max,Math.max(0,t?.[n.id]??0))},reset(){for(const t of Ka)i[t.id]=0},get maxHearts(){return 5+i.heart},get staminaDrain(){return e("wind")?1/1.4:1},get shotInterval(){return e("quickdraw")?.65:1},get shotRange(){return e("barrel")?1.45:1},get shipSpeed(){return e("thrusters")?1.15:1},label(t){return Ae.shop.goods[t]?.name??t},note(t){return Ae.shop.goods[t]?.note??""}}}function vE({perks:i,mission:e,audio:t=null,onBought:n=()=>{}}){const s=document.createElement("div");s.id="shop",s.className="screen-overlay",s.hidden=!0,s.innerHTML=`
    <div class="shop__panel">
      <div class="shop__head">
        <h2 class="shop__name" data-name></h2>
        <div class="shop__purse"><span data-credits>0</span> ${Ae.shop.credits}</div>
      </div>
      <ul class="shop__list" data-list></ul>
      <p class="shop__said" data-said></p>
      <p class="screen-card__hint">${Ae.shop.hint}</p>
    </div>
  `,document.body.appendChild(s);const r=s.querySelector("[data-name]"),o=s.querySelector("[data-credits]"),a=s.querySelector("[data-list]"),c=s.querySelector("[data-said]");let l=!1,u=null,h=[],d=0;function f(){o.textContent=String(e.credits),a.innerHTML="";for(const[p,m]of h.entries()){const M=i.priceOf(m),x=i.soldOut(m),y=e.credits>=M,T=document.createElement("li");T.className="shop__item"+(p===d?" shop__item--on":"")+(x?" shop__item--sold":"")+(!x&&!y?" shop__item--dear":""),T.innerHTML=`
        <span class="shop__item-name">${i.label(m.id)}</span>
        <span class="shop__item-note">${i.note(m.id)}</span>
        <span class="shop__item-price">${x?Ae.shop.sold:`${M} ${Ae.shop.credits}`}</span>
      `,T.addEventListener("click",()=>{d=p,f(),_()}),a.appendChild(T)}}function g(p){c.textContent=p}function _(){const p=h[d];if(!p)return;if(i.soldOut(p)){g(Ae.shop.alreadyHave);return}const m=i.priceOf(p);if(!e.spendCredits(m)){g(Ae.shop.tooDear),t?.chirp({fromHz:320,toHz:180,durationS:.14,peakGain:.1});return}i.take(p.id),g(Ae.shop.bought.replace("{name}",i.label(p.id))),t?.chirp({fromHz:680,toHz:1120,durationS:.16,peakGain:.14}),n(p),f()}return{get isOpen(){return l},get shop(){return u},show(p){return u=p,h=i.stockOf(p),d=0,r.textContent=Ae.shop.names[p]??p,g(Ae.shop.welcome),f(),l=!0,s.hidden=!1,!0},close(){return l=!1,u=null,s.hidden=!0,!1},update(p,m){if(!l)return;const M=p.keyboard.consumeJustPressed(["ArrowDown","KeyS"])||p.gamepad.consumeJustPressed(m.Down),x=p.keyboard.consumeJustPressed(["ArrowUp","KeyW"])||p.gamepad.consumeJustPressed(m.Up);(M||x)&&(d=(d+(M?1:-1)+h.length)%h.length,f()),(p.keyboard.consumeJustPressed(["KeyE","Enter"])||p.gamepad.consumeJustPressed(m.A))&&_()}}}const yE=12,o0=.09,Wu=14;function ME(i){const e=new rt;i.add(e);const t=[],n=[];for(let s=0;s<yE;s++){const r=new Ut;r.setAttribute("position",new Dt(new Float32Array(6),3));const o=new ga(r,new Ul({color:10475775,transparent:!0,opacity:1}));o.visible=!1,o.frustumCulled=!1,e.add(o),t.push(o)}return{group:e,fire(s,r,o=10475775){const a=t.pop()??n.shift();if(!a)return;const c=a.geometry.attributes.position;c.setXYZ(0,s.x,s.y,s.z),c.setXYZ(1,s.x+r.x*Wu,s.y+r.y*Wu,s.z+r.z*Wu),c.needsUpdate=!0,a.material.color.setHex(o),a.material.opacity=1,a.visible=!0,a.userData.life=o0,n.push(a)},update(s){for(let r=n.length-1;r>=0;r--){const o=n[r];o.userData.life-=s,o.userData.life<=0?(o.visible=!1,n.splice(r,1),t.push(o)):o.material.opacity=o.userData.life/o0}}}}const{resolveAsteroidCollisions:SE}=p1,fr=new URLSearchParams(window.location.search),bE=fr.get("skipIntro")==="1",wE=fr.get("land")==="1",Xu=fr.get("character")==="1",EE=fr.get("peaceful")==="1",AE=fr.get("model"),TE=document.getElementById("app"),Yn=new Qv({antialias:!0});TE.appendChild(Yn.domElement);const wn=xM(),ri=vM(),ut=RM(),qu=Tf(),$a=OM(),Yu=BM(),Ku=$M(),$u=QM(),pr=l1(),ja=d1();wn.add(ut.mesh),wn.add(qu),wn.add($a.mesh),wn.add(Yu.mesh),wn.add(Ku.mesh),wn.add($u.sprite);for(const i of pr.rovers)wn.add(i.mesh);wn.add(ja.points),ut.mesh.visible=!0;const wt=jS(wn,[qu,$a.mesh,Yu.mesh,Ku.mesh,$u.sprite,ja.points,...pr.rovers.map(i=>i.mesh)],ri,()=>Zu.reset()),at=w1(),Bt=E1(),a0=window.matchMedia("(max-height: 480px), (max-width: 480px)");a0.matches&&(Bt.hide(),Bt.setHintVisible(!1));const go=A1();Xu&&(go.hide(),Bt.hide(),Bt.setHintVisible(!1));const hs=R1(document.body),Rt=k1(),ju=q1(),mn=X1(pr),gn=Y1({upgrades:ju,mission:mn,audio:Rt,onClose:()=>Bt.show()});mn.setOnRepaired(i=>{ja.fire(i.mesh.position),Rt.chirp()}),mn.setOnComplete(()=>{Rt.fanfare(),gn.show("complete")}),Bt.onFastTravel(()=>{c0()}),Bt.onUpgradesClick(()=>{gn.show("upgrades")});function Ju(){kt.reset(),wt.reset(ut),ut.mesh.position.set(0,0,0),ut.velocity.set(0,0,0),ut.mesh.quaternion.identity(),ut.arcadeDamping=!1,mn.reset(),pr.reset(),ju.reset(),vo.reset(),ds.reset(),yM(),gn.hideAll(),Zu.reset()}function c0(){hs.active||wt.active||(Bt.setFastTravelActive(!0),hs.begin(ut,{onDone:()=>Bt.setFastTravelActive(!1)}))}const Zu=cS(ri),_o={x:0,y:0,turnX:0,turnY:0};let Qu=null;function l0(i){Qu=i;const{width:e,height:t,pixelRatio:n}=i;Yn.setPixelRatio(n*eh.scale),Yn.setSize(e,t,!1),ri.aspect=e/t,ri.updateProjectionMatrix(),Hi&&Hi.onResize(e,t),xo&&xo.onResize(e,t)}const eh=tb(()=>{Qu&&l0(Qu)}),RE=900,zi={CINEMATIC:"cinematic",TITLE:"title",FLY:"fly"},CE=14,PE=40,IE=60,xo=Xu?sw({renderer:Yn,modelUrl:AE,who:fr.get("who")??"vexo"}):null,Hi=bE||Xu?null:Q1({renderer:Yn});let mr=Hi?zi.CINEMATIC:zi.TITLE;Hi&&go.hide();const LE=eS();sS(Yn.domElement,l0);const ds=Qw({scene:wn,world:wt.world,origin:$e}),u0=ME(wn),NE=_E(),vo=xE(),yo=vE({perks:vo,mission:mn,audio:Rt,onBought:()=>kt.refreshHearts()}),kt=Vw({scene:wn,camera:ri,ship:ut,surface:wt,input:at,renderer:Yn,monsters:ds,dialogue:NE,shop:yo,perks:vo,onDown:()=>{Ja.show(fs.has),Rt.playGameOver()},onLanded:()=>fs.saveAuto("landed"),onAboard:()=>fs.saveAuto("aboard"),onShot:(i,e,t)=>{u0.fire(i,e,t?16765562:10475775),Rt.chirp(t?{fromHz:900,toHz:260,durationS:.16,peakGain:.16}:{fromHz:1400,toHz:700,durationS:.08,peakGain:.09}),t&&t.state==="dead"&&mn.earn(t.boss?PE:CE),t&&t.camp.members.every(n=>n.state==="dead")&&(mn.earn(IE),Rt.fanfare(),fs.saveAuto("camp cleared"))}}),fs=aE({ship:ut,surface:wt,onFoot:kt,monsters:ds,mission:mn,upgrades:ju,rovers:pr,perks:vo}),Ja=cE({onContinue:()=>{Rt.stopGameOver();const i=fs.latest;Ju(),fs.restore(i),mr=zi.FLY},onTitle:()=>{Rt.stopGameOver(),Ju(),mr=zi.TITLE,go.show()}}),Kn=gE({world:wt.world}),ps=oE({renderer:Yn,input:at,saves:fs,tablet:Bt.element});ps.setItems([{name:Ae.inventory.starterGun,note:Ae.inventory.starterGunNote,held:!0}]),wt.prewarm(Yn,ri),kt.prewarm(Yn,ri);function DE(){mr=zi.TITLE,go.show(),a0.matches||Bt.show()}const UE=320;let h0=-1/0,th=!1;function OE(i){const e=at.keyboard.consumeJustPressed(["KeyW"]),t=at.keyboard.isDown("KeyW");if(e){const s=performance.now();th=s-h0<UE,h0=s}t||(th=!1);const n=at.gamepad.isButtonDown(Mt.A)&&i.throttle>.1;return th||n}let d0=performance.now();const Mo=new $t;function Za(i){const e=(i-d0)/1e3,t=Math.min(e,.1);if(d0=i,eh.sample(e),eh.update(t),xo){xo.update(t),xo.render(),requestAnimationFrame(Za);return}if(LE.update(),mr===zi.CINEMATIC){at.consumeAnyJustPressed()&&(Hi.skip(),at.gamepad.suppressCurrentlyPressed()),Hi.update(t),Hi.render(),Hi.active||DE(),requestAnimationFrame(Za);return}if(mr===zi.TITLE)at.consumeAnyJustPressed()&&(mr=zi.FLY,go.dismiss(),Bt.showFastTravel(),Bt.showUpgrades(),Bt.setMissionVisible(!0),Bt.showResetHint(),Bt.hide(),at.enableGyro().catch(()=>{}),Rt.start(),wE&&wt.enter(ut));else{const s=at.sample(),r=!hs.suppressInput&&!gn.isOpen()&&!Kn.isOpen;if(_o.x=r?s.lookX:0,_o.y=r?s.lookY:0,_o.turnX=r?s.lookTurnX:0,_o.turnY=r?s.lookTurnY:0,(at.keyboard.consumeJustPressed(["KeyM"])||at.gamepad.consumeJustPressed(Mt.Select))&&Kn.toggle(),(at.keyboard.consumeJustPressed(["KeyX"])||at.gamepad.consumeJustPressed(Mt.X))&&(ut.arcadeDamping=!ut.arcadeDamping),(at.keyboard.consumeJustPressed(["KeyF"])||at.gamepad.consumeJustPressed(Mt.R1))&&c0(),(at.keyboard.consumeJustPressed(["KeyU"])||at.gamepad.consumeJustPressed(Mt.Y))&&(gn.isOpen()?(gn.hideAll(),Bt.show()):gn.show("upgrades")),gn.isOpen()&&(at.gamepad.consumeJustPressed(Mt.B)||at.keyboard.consumeJustPressed(["Escape"]))&&(gn.hideAll(),Bt.show()),gn.isOpen()){const c=(at.gamepad.isButtonDown(Mt.Down)?1:0)-(at.gamepad.isButtonDown(Mt.Up)?1:0),u=-s.throttle||c;u&&gn.scrollBy(u*RE*t)}!Ja.isOpen&&(at.keyboard.consumeJustPressed(["KeyT"])||at.gamepad.consumeJustPressed(Mt.Start))&&ps.toggle(),(ps.isOpen||Kn.isOpen||yo.isOpen)&&(at.gamepad.consumeJustPressed(Mt.B)||at.keyboard.consumeJustPressed(["Escape"]))&&(ps.close(),Kn.close(),yo.close()),(at.keyboard.consumeJustPressed(["KeyR"])||at.gamepad.consumeJustPressed(Mt.L3))&&Ju();const o=gn.isOpen()||hs.suppressInput?null:s;if(wt.active&&(kt.active?wt.watchFrom(kt.position.x,kt.position.z):wt.watchFrom(null,null)),Ja.isOpen)Ja.update(at,Mt),Rt.setThrottle(0),Rt.setSprinting(!1);else if(yo.isOpen)yo.update(at,Mt),Rt.setThrottle(0),Rt.setSprinting(!1),wt.active&&wt.update(ut,t);else if(Kn.isOpen){const c=at.keyboard,l=(at.gamepad.isButtonDown(Mt.Up)?1:0)-(at.gamepad.isButtonDown(Mt.Down)?1:0),u=(c.isDown("ArrowUp")||c.isDown("Equal")||c.isDown("NumpadAdd")?1:0)-(c.isDown("ArrowDown")||c.isDown("Minus")||c.isDown("NumpadSubtract")?1:0);Kn.zoomBy(s.throttle||l||u,t),Kn.panBy(s.lookX,-s.lookY,t),(at.gamepad.consumeJustPressed(Mt.R3)||c.consumeJustPressed(["KeyC"]))&&Kn.recentre(),Rt.setThrottle(0),Rt.setSprinting(!1),wt.active&&wt.update(ut,t)}else ps.isOpen?(ps.update(t,s),Rt.setThrottle(0),Rt.setSprinting(!1),wt.active&&wt.update(ut,t)):kt.active?(kt.update(t,o),wt.update(ut,t),ds.update(t,kt.quarry,(c,l,u)=>kt.takeHit(c,l,u)),Rt.setThrottle(0),Rt.setSprinting(kt.sprinting)):hs.suppressInput||gn.isOpen()?Rt.setThrottle(0):(ut.speedLimit=wt.active?(OE(s)?un.surfaceBoostSpeed:un.surfaceSpeed)*vo.shipSpeed:0,PM(ut,s,t),Rt.setThrottle(s.throttle),wt.update(ut,t),SE({position:ut.mesh.position,velocity:ut.velocity},$a.instances),ut.braking&&ut.velocity.set(0,0,0));kt.active||(kt.update(t,o),Rt.setSprinting(!1));const a=at.keyboard.isDown("KeyH")||at.gamepad.isButtonDown(Mt.L1);mn.update({shipPos:ut.mesh.position,shipSpeed:ut.velocity.length(),holdActive:a&&!gn.isOpen()&&!hs.suppressInput&&!wt.active,dt:t})}if(ds.setActive(wt.active&&!EE),wt.active&&ds.focus(ut.mesh.position.x-$e.x,ut.mesh.position.z-$e.z),wt.active&&!kt.active&&ds.update(t,null,()=>{}),u0.update(t),wt.active||Kn.isOpen){const s={x:ut.mesh.position.x-$e.x,z:ut.mesh.position.z-$e.z,heading:Mo.setFromQuaternion(ut.mesh.quaternion,"YXZ").y};Kn.setMarkers(kt.active?{x:kt.position.x-$e.x,z:kt.position.z-$e.z,heading:kt.heading}:s,kt.active?s:null),Kn.update()}hs.update(t),Rt.update(t),$a.update(t),Yu.update(t),Ku.update(t),$u.update(ri),pr.update(t),ja.update(t),Rf(qu,ri),kt.active||Zu.update(ut,_o,t),Yn.render(wn,ri),ps.render(),Mo.setFromQuaternion(ut.mesh.quaternion,"YXZ"),Bt.update({velocity:ut.velocity.length(),inKph:wt.active,eulerDeg:{x:qi.radToDeg(Mo.x),y:qi.radToDeg(Mo.y),z:qi.radToDeg(Mo.z)},dt:t,sources:at.activeSources(),dampingOn:ut.arcadeDamping}),Bt.updateMission({remaining:mn.remaining(),total:mn.totalRovers(),credits:mn.credits});const n=mn.repairing??mn.inRange;Bt.updateHack({name:n?n.name:null,progress:n?n.repairProgress:0}),requestAnimationFrame(Za)}requestAnimationFrame(Za)})();
