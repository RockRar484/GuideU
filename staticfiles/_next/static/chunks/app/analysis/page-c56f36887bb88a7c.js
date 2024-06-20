(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{6565:function(t,e,n){Promise.resolve().then(n.bind(n,3680))},3680:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var s=n(7437),i=n(2265),a=n(6522),o=n(433),l=n(8472),r=t=>{let{institute:e,category:n,branch:a}=t,r=(0,i.useRef)(null),[c,u]=(0,i.useState)({years:[],openRanks:[],closeRanks:[]});return(0,i.useEffect)(()=>{(async()=>{try{localStorage.getItem("token");let t=await l.Z.get("http://localhost:8000/api/yearlytrend/",{params:{institute:e,category:n,branch:a}});console.log("API response:",t.data);let s=[],i=[],o=[];t.data.forEach(t=>{s.push(parseInt(t.open_rank.open_rank,10)),i.push(parseInt(t.close_rank.close_rank,10)),o.push(""+t.year)}),u({years:o,openRanks:s,closeRanks:i})}catch(t){console.error("Error fetching data:",t)}})()},[e,n,a]),(0,i.useEffect)(()=>{let t;if(!r.current||0===c.years.length||0===c.openRanks.length||0===c.closeRanks.length)return;let e=r.current.getContext("2d");return e&&(t=new o.kL(e,{type:"line",data:{labels:c.years,datasets:[{label:"Open Rank",data:c.openRanks,fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1},{label:"Close Rank",data:c.closeRanks,fill:!1,borderColor:"rgb(255, 99, 132)",tension:.1}]},options:{scales:{y:{beginAtZero:!0}}}})),()=>{t&&t.destroy()}},[c]),(0,s.jsx)("canvas",{ref:r,className:"p-3 lg:p-20 md:p-10 sm:p-3"})};n(3712);var c=n(3711),u=n(3983),d=n(1282),h=n(2468),I=n(8214),g=n(2200),f=n(3856),p=n(4634);let y=[{institute:"Indian Institute  of Technology Bhubaneswar"},{institute:"Indian Institute  of Technology Bombay"},{institute:"Indian Institute  of Technology Mandi"},{institute:"Indian Institute  of Technology Delhi"},{institute:"Indian Institute  of Technology Indore"},{institute:"Indian Institute  of Technology Kharagpur"},{institute:"Indian Institute  of Technology Hyderabad"},{institute:"Indian Institute  of Technology Jodhpur"},{institute:"Indian Institute  of Technology Kanpur"},{institute:"Indian Institute  of Technology Madras"},{institute:"Indian Institute  of Technology Gandhinagar"},{institute:"Indian Institute  of Technology Patna"},{institute:"Indian Institute  of Technology Roorkee"},{institute:"Indian Institute  of Technology (ISM) Dhanbad"},{institute:"Indian Institute  of Technology Ropar"},{institute:"Indian Institute  of Technology (BHU) Varanasi"},{institute:"Indian Institute  of Technology Guwahati"},{institute:"Indian Institute of Technology Bhilai"},{institute:"Indian Institute of Technology Goa"},{institute:"Indian Institute  of Technology Palakkad"},{institute:"Indian Institute  of Technology Tirupati"},{institute:"Indian Institute of Technology Jammu"},{institute:"Indian Institute of Technology Dharwad"},{institute:""}];function x(t){var e;let{onSelect:n}=t,[a,o]=i.useState(!1),[l,r]=i.useState(""),c=t=>{r(t===l?"":t),n(t),o(!1)};return(0,s.jsxs)(p.J2,{open:a,onOpenChange:o,children:[(0,s.jsx)(p.xo,{asChild:!0,children:(0,s.jsxs)(g.z,{variant:"outline",role:"combobox","aria-expanded":a,className:"w-[300px] justify-between overflow-auto",children:[l?null===(e=y.find(t=>t.institute===l))||void 0===e?void 0:e.institute:"Select Institute...",(0,s.jsx)(d.Z,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),(0,s.jsx)(p.yk,{className:"w-[300px] p-0",children:(0,s.jsxs)(f.mY,{children:[(0,s.jsx)(f.sZ,{placeholder:"Search Institute..."}),(0,s.jsxs)(f.e8,{children:[(0,s.jsx)(f.rb,{children:"No Institute found."}),(0,s.jsx)(f.fu,{children:y.map(t=>(0,s.jsxs)(f.di,{onSelect:()=>c(t.institute),children:[(0,s.jsx)(h.Z,{className:(0,I.cn)("mr-2 h-4 w-4",l===t.institute?"opacity-100":"opacity-0")}),t.institute]},t.institute))})]})]})})]})}var m=(0,a.Z)(()=>{let[t,e]=(0,i.useState)(""),[n,a]=(0,i.useState)(""),[o,l]=(0,i.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"max-w-7xl border-b-[2px] m-auto p-20 lg:px-30 md:px-20 sm:px-10",children:(0,s.jsxs)("div",{className:"w-full p-30 border-1 m-auto",children:[(0,s.jsx)("h1",{className:"text-2xl text-left mb-10 font-bold",children:"Yearly Trends of Ranks"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1",children:[(0,s.jsx)("div",{className:"space-y-1",children:(0,s.jsx)(c.G,{onSelect:t=>{a(t),console.log("Selected Program:",t)}})}),(0,s.jsx)("div",{className:"space-y-1",children:(0,s.jsx)(u.w,{onSelect:t=>{l(t),console.log("Selected Category:",t)}})}),(0,s.jsx)("div",{className:"space-y-1",children:(0,s.jsx)(x,{onSelect:t=>{e(t),console.log("Selected Institute:",t)}})})]})]})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(r,{branch:n,category:o,institute:t})})]})})}},function(t){t.O(0,[674,979,472,798,304,582,757,971,23,744],function(){return t(t.s=6565)}),_N_E=t.O()}]);