(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2664:function(e,t,a){Promise.resolve().then(a.bind(a,4623))},4623:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var s=a(7437);a(5424);var r=a(2265),l=a(3712),i=a(4300),n=a(1266),d=a(1976),o=a(8214),c=a(2200);let u=r.createContext(null);function A(){let e=r.useContext(u);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=r.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:l,setApi:n,plugins:d,className:c,children:A,...f}=e,[m,h]=(0,i.Z)({...l,axis:"horizontal"===a?"x":"y"},d),[x,g]=r.useState(!1),[p,b]=r.useState(!1),v=r.useCallback(e=>{e&&(g(e.canScrollPrev()),b(e.canScrollNext()))},[]),N=r.useCallback(()=>{null==h||h.scrollPrev()},[h]),j=r.useCallback(()=>{null==h||h.scrollNext()},[h]),k=r.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),N()):"ArrowRight"===e.key&&(e.preventDefault(),j())},[N,j]);return r.useEffect(()=>{h&&n&&n(h)},[h,n]),r.useEffect(()=>{if(h)return v(h),h.on("reInit",v),h.on("select",v),()=>{null==h||h.off("select",v)}},[h,v]),(0,s.jsx)(u.Provider,{value:{carouselRef:m,api:h,opts:l,orientation:a||((null==l?void 0:l.axis)==="y"?"vertical":"horizontal"),scrollPrev:N,scrollNext:j,canScrollPrev:x,canScrollNext:p},children:(0,s.jsx)("div",{ref:t,onKeyDownCapture:k,className:(0,o.cn)("relative",c),role:"region","aria-roledescription":"carousel",...f,children:A})})});f.displayName="Carousel";let m=r.forwardRef((e,t)=>{let{className:a,...r}=e,{carouselRef:l,orientation:i}=A();return(0,s.jsx)("div",{ref:l,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:t,className:(0,o.cn)("flex","horizontal"===i?"-ml-4":"-mt-4 flex-col",a),...r})})});m.displayName="CarouselContent";let h=r.forwardRef((e,t)=>{let{className:a,...r}=e,{orientation:l}=A();return(0,s.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===l?"pl-4":"pt-4",a),...r})});h.displayName="CarouselItem";let x=r.forwardRef((e,t)=>{let{className:a,variant:r="outline",size:l="icon",...i}=e,{orientation:d,scrollPrev:u,canScrollPrev:f}=A();return(0,s.jsxs)(c.z,{ref:t,variant:r,size:l,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===d?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!f,onClick:u,...i,children:[(0,s.jsx)(n.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});x.displayName="CarouselPrevious";let g=r.forwardRef((e,t)=>{let{className:a,variant:r="outline",size:l="icon",...i}=e,{orientation:n,scrollNext:u,canScrollNext:f}=A();return(0,s.jsxs)(c.z,{ref:t,variant:r,size:l,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===n?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!f,onClick:u,...i,children:[(0,s.jsx)(d.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});g.displayName="CarouselNext";var p=a(6648),b={src:"/_next/static/media/iitkgp.fce8de31.png",height:2109,width:3e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAXVBMVEUpGHMpGHIoGHMoGHIpGHMoGHIpGXMpGHMpGHIpGHMpGHMoGHIpGHIoGXMpGHMpGHMoGHIpGHIpGHIpGHMpGHMpGHMpGHMpGHMpGHIpGHMoGHMpGHMpGHMpGHMpGHKgGCAHAAAAH3RSTlMAAAAAAQECAgIKCwsPHh4lJicqTE9TVWZnbXR7fX6GWDlOUAAAADpJREFUeNoNyMcRwCAQA0AJG3POmQz9lwm/nQU15lVpQHjVcg+CSbkQPU2fz/4vBQZnTk8HsezHxrEBNXICB8OOZ7sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},v={src:"/_next/static/media/iitd.5baa1209.png",height:2874,width:4e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEX+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAD+AAAeiI00AAAAEnRSTlMAAQIHCA4RLzI3Oz1CWVteZGbaqoesAAAALUlEQVR42gXAhxGAIAwAwCeGYgF0/2U9qBVC/96ukPN+1oHc17mTMOYagqI1/BjQAOtW5sB5AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},N={src:"/_next/static/media/iitk.1692d700.png",height:2331,width:3e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAPElEQVR42kXLuQ2AMBAAwWkAI6ALkyMSHvFYcv8NObJu4l2AyUjIqtcKkFw2u69Xi9/hVsyxnB6ZMEhAA9PjBCwF/VT2AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},j={src:"/_next/static/media/iith.a6b49bdb.png",height:1632,width:1668,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5UlEQVR42k2NvUoDQRSFz507mWEFcVkEtbNZRASxUAut1sansPM5LC18BAW1tLDRd8hCCjttLZIqsGEhP/uTXeZmWFLkwsc95xTnYPPyJP72vG9mJBNwOzg6qVM7b9LqDkBpEv1pL+otvo3+NCIYUu2bFO6U9lwfjnpuVj+C6z4QJRqAeCpPASdXnSNZQMRngejOQvUEFMD/9bR4bYAIXYNW84yhhwpFKrBGgS6Z8wx4Bb08PZjdBoeTX4v70XUGt1N9xF/79thxvh38U3LzHP+UNjwInTqnSgkrHjR2WU6hz8J2vAIdBVMkm8kMAgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},k={src:"/_next/static/media/iitm.2f004b3f.png",height:2179,width:3e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAnElEQVR42mMAgV3TahgZwKCUm4GhjhvE2j+nGSK2vq+RGUQvqK3y3Te9+PmB2RUvlrY0+jEAweapncwMEPCfae+UtMf398z4/2DvzP97p6Q+AYpBJCHgAtOBWeWPDy/t/39occ9/oClABdchCla2lIEZ8ypKfPdMK32xc2LOi9nFeWArljcWQhQdWdwFcZDrFm4Gl21gRx6cB3EkAOIyPjrwzo0NAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},w={src:"/_next/static/media/iitv.cef99763.png",height:1609,width:1584,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42g3JPU7DQBBA4Zn98cYOsWMHIkQDUgQFoktLQcEB6JC4C0Ki5whchZJDAEIkokA44NiQeB3vzMZf8ZqH0Lmb3sr0tHeOWiYevANi2+TNc7esgE56Fl7qWBvll6+Gf2dBX1izZy6YWcmH6/sT3VcxVdWMGozYUsTrulJJrFFAIrpk7PyCnbRisDPGQTwiCGre0Dd6PxSkwlwI2AUpV7LIpScsUEdLVDh2OvyRN6Y6bpKjA5EmLQCWnqFVWdTjv3oSvz05pXT5Eqze2w0fTjgw5CUIKkpv1p8fyhRzhM7j1dR4N9onyoYAklAu/g3MvwDAbgHvcGrR0CK/JQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};function y(){return(0,s.jsxs)(f,{className:"w-full",children:[(0,s.jsxs)(m,{children:[(0,s.jsx)(h,{className:"border-0 md:basis-1/2 lg:basis-1/3",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.Zb,{children:(0,s.jsx)(l.aY,{className:"flex aspect-square items-center justify-center ",children:(0,s.jsx)(p.default,{src:b,alt:"IIT Kharagpur",className:"grayscale-0 dark:grayscale-0"})})})})},1),(0,s.jsx)(h,{className:"border-0 md:basis-1/2 lg:basis-1/3 sm:basis-1",children:(0,s.jsx)(l.Zb,{children:(0,s.jsx)(l.aY,{className:"flex aspect-square items-center justify-center border-0",children:(0,s.jsx)(p.default,{src:v,className:"w-60 grayscale-0 dark:grayscale-0",alt:"IIT Delhi"})})})},2),(0,s.jsx)(h,{className:"border-0 md:basis-1/2 lg:basis-1/3",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.Zb,{children:(0,s.jsx)(l.aY,{className:"flex aspect-square items-center justify-center ",children:(0,s.jsx)(p.default,{src:k,alt:"IIT Madras",className:"grayscale-0 dark:grayscale-0"})})})})},3),(0,s.jsx)(h,{className:"border-0 md:basis-1/2 lg:basis-1/3",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.Zb,{children:(0,s.jsx)(l.aY,{className:"flex aspect-square items-center justify-center ",children:(0,s.jsx)(p.default,{src:w,alt:"IIT Varanasi",className:"grayscale-0 dark:grayscale-0"})})})})},4),(0,s.jsx)(h,{className:"border-0 md:basis-1/2 lg:basis-1/3",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.Zb,{children:(0,s.jsx)(l.aY,{className:"flex aspect-square items-center justify-center ",children:(0,s.jsx)(p.default,{src:j,alt:"IIT Hyderabad",className:"grayscale-0 dark:grayscale-0"})})})})},5),(0,s.jsx)(h,{className:"border-0 md:basis-1/2 lg:basis-1/3",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.Zb,{children:(0,s.jsx)(l.aY,{className:"flex aspect-square items-center justify-center ",children:(0,s.jsx)(p.default,{src:N,alt:"IIT Kanpur",className:"grayscale-0 dark:grayscale-0"})})})})},6)]}),(0,s.jsx)(x,{}),(0,s.jsx)(g,{})]})}function C(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{class:"pt-32 md:py-12 xl:container m-auto px-6 md:px-12 h-screen w-screen",children:[(0,s.jsx)("div",{"aria-hidden":"true",class:"absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"}),(0,s.jsx)("div",{class:"relative lg:flex lg:items-center lg:gap-12",children:(0,s.jsxs)("div",{class:"text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12",children:[(0,s.jsxs)("h1",{class:"text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white",children:["Empowering your future with expert career ",(0,s.jsx)("span",{class:"text-primary dark:text-primaryLight",children:"Guidance."})]}),(0,s.jsx)("p",{class:"mt-8 text-gray-600 dark:text-gray-300",children:"GuideU is a comprehensive JoSAA rank analyzer designed to assist students in evaluating their chances of admission into various IITs, NITs, and other prestigious institutions. By inputting their rank, students can receive personalized insights and recommendations on the best colleges and courses available to them. This tool helps in making informed decisions during the counseling process."}),(0,s.jsx)("div",{class:"mt-16 space-y-2 lg:space-y-0 md:w-max sm:space-x-6",children:(0,s.jsx)("button",{type:"button",title:"Start buying",class:"w-full py-3 px-6 text-center rounded-full transition bg-slate-900 text-white dark:text-black dark:hover:bg-slate-200 dark:bg-slate-50 hover:bg-slate-700 active:bg-slate-400 focus:bg-slate-300 sm:w-max",children:(0,s.jsxs)("span",{class:"block text-white dark:text-black font-semibold text-sm",children:["Get Started ",(0,s.jsx)(d.Z,{})]})})}),(0,s.jsx)("div",{class:"mt-12 flex gap-6 lg:gap-12 justify-center grayscale dark:grayscale-0",children:(0,s.jsx)(y,{})})]})})]})})}},5457:function(e,t,a){"use strict";a.d(t,{F:function(){return n},ThemeProvider:function(){return i}});var s=a(7437),r=a(2265);let l=(0,r.createContext)(),i=e=>{let{children:t}=e,[a,i]=(0,r.useState)("light"),[n,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{d(!0);let e=localStorage.getItem("theme");e?i(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&i("dark")},[]),(0,r.useEffect)(()=>{n&&(document.documentElement.className=a,localStorage.setItem("theme",a))},[a,n]),(0,s.jsx)(l.Provider,{value:{theme:a,toggleTheme:()=>{i(e=>"light"===e?"dark":"light")}},children:n?t:(0,s.jsx)("div",{})})},n=()=>(0,r.useContext)(l)},5424:function(e,t,a){"use strict";a.d(t,{l:function(){return d}});var s=a(7437);a(2265);var r=a(8296),l=a(2699),i=a(5457),n=a(2200);function d(){let{theme:e,toggleTheme:t}=(0,i.F)();return(0,s.jsxs)(n.z,{size:"icon",onClick:t,children:["light"===e?(0,s.jsx)(r.Z,{value:"dark",className:"rounded-full h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}):(0,s.jsx)(l.Z,{value:"light",className:"rounded-full absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}a(8309)},2200:function(e,t,a){"use strict";a.d(t,{z:function(){return o}});var s=a(7437),r=a(2265),l=a(1538),i=a(2218),n=a(8214);let d=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,asChild:o=!1,...c}=e,u=o?l.g7:"button";return(0,s.jsx)(u,{className:(0,n.cn)(d({variant:r,size:i,className:a})),ref:t,...c})});o.displayName="Button"},3712:function(e,t,a){"use strict";a.d(t,{Ol:function(){return n},Zb:function(){return i},aY:function(){return o},eW:function(){return c},ll:function(){return d}});var s=a(7437),r=a(2265),l=a(8214);let i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",a),...r})});i.displayName="Card";let n=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",a),...r})});n.displayName="CardHeader";let d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",a),...r})});d.displayName="CardTitle",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-slate-500 dark:text-slate-400",a),...r})}).displayName="CardDescription";let o=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",a),...r})});o.displayName="CardContent";let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",a),...r})});c.displayName="CardFooter"},8309:function(e,t,a){"use strict";a.d(t,{$F:function(){return u},AW:function(){return A},Ju:function(){return h},VD:function(){return x},Xi:function(){return f},bO:function(){return m},h_:function(){return c}});var s=a(7437),r=a(2265),l=a(1622),i=a(7592),n=a(2468),d=a(8165),o=a(8214);let c=l.fC,u=l.xz;l.ZA,l.Uv,l.Tr,l.Ee,r.forwardRef((e,t)=>{let{className:a,inset:r,children:n,...d}=e;return(0,s.jsxs)(l.fF,{ref:t,className:(0,o.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",r&&"pl-8",a),...d,children:[n,(0,s.jsx)(i.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=l.fF.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.tu,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",a),...r})}).displayName=l.tu.displayName;let A=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...i}=e;return(0,s.jsx)(l.Uv,{children:(0,s.jsx)(l.VY,{ref:t,sideOffset:r,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",a),...i})})});A.displayName=l.VY.displayName;let f=r.forwardRef((e,t)=>{let{className:a,inset:r,...i}=e;return(0,s.jsx)(l.ck,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",r&&"pl-8",a),...i})});f.displayName=l.ck.displayName;let m=r.forwardRef((e,t)=>{let{className:a,children:r,checked:i,...d}=e;return(0,s.jsxs)(l.oC,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",a),checked:i,...d,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.wU,{children:(0,s.jsx)(n.Z,{className:"h-4 w-4"})})}),r]})});m.displayName=l.oC.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e;return(0,s.jsxs)(l.Rk,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",a),...i,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.wU,{children:(0,s.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=l.Rk.displayName;let h=r.forwardRef((e,t)=>{let{className:a,inset:r,...i}=e;return(0,s.jsx)(l.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",a),...i})});h.displayName=l.__.displayName;let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800",a),...r})});x.displayName=l.Z0.displayName},8214:function(e,t,a){"use strict";a.d(t,{cn:function(){return l}});var s=a(4839),r=a(6164);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}}},function(e){e.O(0,[979,193,260,971,23,744],function(){return e(e.s=2664)}),_N_E=e.O()}]);