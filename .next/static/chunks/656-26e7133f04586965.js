"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{9656:function(e,s,l){l.d(s,{Z:function(){return F}});var a=l(5893),r=l(7294),i=l(3863),c=l.n(i);let n=e=>{let s=(0,r.useRef)();return(0,r.useEffect)(()=>{let l=l=>{s.current.contains(l.target)||e()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}}),s},d=e=>{let{close:s,src:l}=e,i=n(()=>{s(!1)});return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:" popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,a.jsx)("div",{className:"mfp-content",ref:i,children:(0,a.jsx)("div",{className:"mfp-iframe-scaler",children:(0,a.jsx)("img",{className:"mfp-img",src:l})})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},o=()=>{let[e,s]=(0,r.useState)(!1),[l,i]=(0,r.useState)(null);return(0,r.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{e.href.includes("assets/images")&&null===e.getAttribute("download")&&e.addEventListener("click",l=>{l.preventDefault(),i(e.href),s(!0)})})},1500)},[]),(0,a.jsx)(r.Fragment,{children:e&&(0,a.jsx)(d,{close:()=>s(!1),src:l})})};var t=l(2004);let h=e=>{let{close:s,videoID:l}=e,i=n(()=>{s(!1)});return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-iframe-holder",children:[(0,a.jsx)("div",{className:"mfp-content",ref:i,children:(0,a.jsxs)("div",{className:"mfp-iframe-scaler",children:[(0,a.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:()=>s(),children:"\xd7"}),(0,a.jsx)(t.Z,{url:l,playing:!0})]})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},x=()=>{let[e,s]=(0,r.useState)(!1),[l,i]=(0,r.useState)(null);return(0,r.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{e.href.includes("https://www.youtube.com")&&e.addEventListener("click",l=>{l.preventDefault(),i(e.href),s(!0)})})},1e3)},[]),(0,a.jsx)(r.Fragment,{children:e&&(0,a.jsx)(h,{close:()=>s(!1),videoID:l})})},j=()=>{window.WOW=l(5541),new WOW.WOW().init()},m=()=>{window.addEventListener("scroll",()=>{let e=window.scrollY,s=document.querySelectorAll(".main-header");for(let l=0;l<s.length;l++){let a=s[l];a&&(e>10?a.classList.add("fixed-header"):a.classList.remove("fixed-header"))}})},f=()=>{let e=document.querySelectorAll(".menu-sidebar button"),s=document.querySelector(".form-back-drop"),l=document.querySelector(".cross-icon");e.forEach(e=>{e.addEventListener("click",()=>{document.querySelector("body").classList.add("side-content-visible")})}),s.addEventListener("click",()=>{document.querySelector("body").classList.remove("side-content-visible")}),l.addEventListener("click",()=>{document.querySelector("body").classList.remove("side-content-visible")})},g=()=>{let e=document.querySelector(".scroll-top");window.addEventListener("scroll",()=>{window.scrollY>110?e.style.display="block":e.style.display="none"})},v=()=>{(0,r.useEffect)(()=>{g()},[]);let e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,a.jsx)("button",{className:"scroll-top scroll-to-target",onClick:()=>e(),children:(0,a.jsx)("span",{className:"fas fa-angle-double-up"})})};var p=l(1664),u=l.n(p);let N=()=>(0,a.jsx)("footer",{className:"main-footer rel z-1",style:{backgroundImage:"url(assets/images/footer/footer-bg-shape.png)"},children:(0,a.jsxs)("div",{className:"container container-1290",children:[(0,a.jsx)("div",{className:"footer-top pt-80 pb-60",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsx)("div",{className:"footer-logo mb-20 wow fadeInRight delay-0-2s animated",children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/logos/footer-logo.png",alt:"Logo"})})})})}),(0,a.jsx)("div",{className:"col-lg-8 text-lg-end",children:(0,a.jsxs)("div",{className:"social-style-four mb-20 wow fadeInLeft delay-0-2s animated",children:[(0,a.jsxs)("a",{href:"#",children:[(0,a.jsx)("i",{className:"fab fa-facebook-f"})," ",(0,a.jsx)("span",{children:"Facebook"})]}),(0,a.jsxs)("a",{href:"#",children:[(0,a.jsx)("i",{className:"fab fa-twitter"})," ",(0,a.jsx)("span",{children:"Twitter"})]}),(0,a.jsxs)("a",{href:"#",children:[(0,a.jsx)("i",{className:"fab fa-dribbble"})," ",(0,a.jsx)("span",{children:"Dribbble"})]}),(0,a.jsxs)("a",{href:"#",children:[(0,a.jsx)("i",{className:"fab fa-behance"})," ",(0,a.jsx)("span",{children:"Behance"})]})]})})]})}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-8",children:(0,a.jsxs)("div",{className:"footer-left-content pt-80",children:[(0,a.jsxs)("div",{className:"lets-work mb-50 wow fadeInUp delay-0-2s animated",children:[(0,a.jsx)("img",{src:"assets/images/footer/lets-work.png",alt:"Let's Work Man"}),(0,a.jsx)("span",{children:"Let’s Work Together"})]}),(0,a.jsxs)("div",{className:"footer-contact-info wow fadeInUp delay-0-3s animated",children:[(0,a.jsxs)("a",{className:"theme-btn style-three",href:"mailto:support@gmail.com",children:["support@gmail.com ",(0,a.jsx)("i",{className:"far fa-arrow-right"})]}),(0,a.jsxs)("a",{className:"theme-btn style-three phone-number",href:"callto:+000(123)45688",children:["+000 (123) 456 88 ",(0,a.jsx)("i",{className:"far fa-arrow-right"})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"footer-right-content",children:[(0,a.jsx)("h4",{className:"footer-title wow fadeInUp delay-0-2s animated",children:"Quick Links"}),(0,a.jsxs)("div",{className:"footer-widget widget_nav_menu",children:[(0,a.jsxs)("ul",{className:"list-style-two wow fadeInUp delay-0-3s animated",children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"about",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"services",children:"Popular Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"team",children:"Team Member"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"blog",children:"Latest News"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"contact",children:"Contact Us?"})})]}),(0,a.jsxs)("ul",{className:"list-style-two wow fadeInUp delay-0-4s animated",children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index",children:"UI/UX Design"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index2",children:"Development"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index3",children:"Marketing"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"contact",children:"Need a Career"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"faqs",children:"Faqs ?"})})]})]})]})})]}),(0,a.jsx)("div",{className:"footer-bottom",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-xl-8 col-lg-6",children:(0,a.jsx)("div",{className:"footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/about",children:(0,a.jsx)("a",{children:"About"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"services",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/faqs",children:(0,a.jsx)("a",{children:"FAQs"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"services",children:"How IT Works"})})]})})}),(0,a.jsx)("div",{className:"col-xl-4 col-lg-6",children:(0,a.jsx)("div",{className:"copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated",children:(0,a.jsxs)("p",{children:["Copyright @2023,"," ",(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:"Ygency"})})," ","All Rights Reserved"]})})})]})})]})}),y=()=>(0,a.jsx)("footer",{className:"main-footer footer-two pt-100 pb-50 rpb-20 rel z-1",style:{backgroundImage:"url(assets/images/footer/footer-bg-shape.png)"},children:(0,a.jsx)("div",{className:"container container-1290",children:(0,a.jsxs)("div",{className:"row gp-100 pb-20 align-items-center justify-content-between",children:[(0,a.jsx)("div",{className:"col-xl-6 col-lg-7",children:(0,a.jsx)("div",{className:"footer-left-title mb-35 wow fadeInLeft delay-0-2s",children:"Get Ready to Build Your Website"})}),(0,a.jsx)("div",{className:"col-lg-5 col-sm-7 col-6 col-small wow fadeInRight delay-0-2s",children:(0,a.jsx)("div",{className:"footer-right-btn mb-35 text-lg-end",children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/contact",children:(0,a.jsxs)("a",{className:"explore-more text-start",children:[(0,a.jsx)("i",{className:"fas fa-arrow-right"})," ",(0,a.jsx)("span",{children:"Send Us Message"})]})})})}),(0,a.jsx)("div",{className:"col-lg-3 col-6 col-small order-lg-3",children:(0,a.jsxs)("div",{className:"footer-widget footer-text wow fadeInUp delay-0-4s",children:[(0,a.jsx)("h5",{className:"footer-title",children:"Get In Touch"}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("p",{children:"55 Main Street, 2nd block Malborne, Australia"}),(0,a.jsx)("a",{href:"mailto:support@gmail.com",children:"support@gmail.com"}),(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"callto:+000(123)45688",children:"+000 (123) 456 88"})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 order-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"footer-widget footer-links wow fadeInUp delay-0-6s",children:[(0,a.jsx)("h5",{className:"footer-title",children:"Links"}),(0,a.jsxs)("div",{className:"footer-widget widget_nav_menu",children:[(0,a.jsxs)("ul",{className:"list-style-two",children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:"Home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/about",children:(0,a.jsx)("a",{children:"About"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/services",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/contact",children:(0,a.jsx)("a",{children:"Career ?"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/faqs",children:(0,a.jsx)("a",{children:"FAQs"})})})]}),(0,a.jsxs)("ul",{className:"list-style-two",children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/about",children:"Setting"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/about",children:(0,a.jsx)("a",{children:"Privacy Policy"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/contact",children:"Contact Us"})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-5 me-auto order-lg-2 align-self-center",children:(0,a.jsxs)("div",{className:"footer-widget newsletter-widget wow fadeInUp delay-0-2s",children:[(0,a.jsxs)("form",{className:"footer-newsletter",action:"#",children:[(0,a.jsx)("input",{type:"email",placeholder:"Email Address",required:!0}),(0,a.jsx)("button",{type:"submit",children:(0,a.jsx)("i",{className:"fas fa-arrow-right"})})]}),(0,a.jsxs)("p",{children:["Copyright @2023,"," ",(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:"Ygency"})})," ","All Rights Reserved"]})]})})]})})}),b=()=>(0,a.jsx)("footer",{className:"main-footer footer-three rel bgs-cover z-1",style:{backgroundImage:"url(assets/images/footer/footer-bg-shape-two.png)"},children:(0,a.jsxs)("div",{className:"container container-1290",children:[(0,a.jsx)("div",{className:"footer-top-two pt-95 pb-55",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsx)("div",{className:"footer-logo mb-20 wow fadeInRight delay-0-2s",children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/logos/footer-logo.png",alt:"Logo"})})})})}),(0,a.jsx)("div",{className:"col-lg-8 text-lg-end",children:(0,a.jsxs)("div",{className:"social-style-four mb-20 wow fadeInLeft delay-0-2s",children:[(0,a.jsx)("a",{href:"#",children:"Facebook"}),(0,a.jsx)("a",{href:"#",children:"Twitter"}),(0,a.jsx)("a",{href:"#",children:"Dribbble"}),(0,a.jsx)("a",{href:"#",children:"Behance"})]})})]})}),(0,a.jsxs)("div",{className:"row justify-content-between",children:[(0,a.jsx)("div",{className:"col-lg-3 col-7 col-small",children:(0,a.jsxs)("div",{className:"footer-widget footer-text wow fadeInUp delay-0-2s",children:[(0,a.jsx)("h5",{className:"footer-title",children:"Get In Touch"}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("p",{children:"55 Main Street, 2nd block Malborne, Australia"}),(0,a.jsx)("a",{href:"mailto:support@gmail.com",children:"support@gmail.com"}),(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"callto:+000(123)45688",children:"+000 (123) 456 88"})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-5 col-small",children:(0,a.jsxs)("div",{className:"footer-widget footer-links wow fadeInUp delay-0-4s",children:[(0,a.jsx)("h5",{className:"footer-title",children:"Menu"}),(0,a.jsx)("div",{className:"footer-widget widget_nav_menu",children:(0,a.jsxs)("ul",{className:"list-style-two",children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:"Home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/about",children:(0,a.jsx)("a",{children:"About"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/services",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/contact",children:(0,a.jsx)("a",{children:"Career ?"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/faqs",children:(0,a.jsx)("a",{children:"FAQs"})})})]})})]})}),(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsxs)("div",{className:"footer-widget newsletter-widget wow fadeInUp delay-0-6s",children:[(0,a.jsx)("h5",{className:"footer-title",children:"Newsletter"}),(0,a.jsxs)("form",{className:"footer-newsletter",action:"#",children:[(0,a.jsx)("input",{type:"email",placeholder:"Email Address",required:!0}),(0,a.jsx)("button",{type:"submit",children:(0,a.jsx)("i",{className:"fas fa-arrow-right"})})]}),(0,a.jsxs)("div",{className:"policy",children:[(0,a.jsx)("input",{id:"privacy-policy",type:"checkbox"}),(0,a.jsxs)("label",{htmlFor:"privacy-policy",children:["I agree to the"," ",(0,a.jsx)(u(),{legacyBehavior:!0,href:"/about",children:(0,a.jsx)("a",{children:"Privacy Policy"})})]})]})]})})]}),(0,a.jsx)("div",{className:"copyright-area text-center pt-10 pb-80 wow fadeInUp delay-0-2s",children:(0,a.jsxs)("p",{children:["Copyright @2023,"," ",(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:"Ygency"})})," ","All Rights Reserved"]})})]})}),w=()=>(0,a.jsxs)("footer",{className:"main-footer footer-four pt-100 rel bgs-cover z-1",style:{backgroundImage:"url(assets/images/footer/footer-bg-shape-three.png)"},children:[(0,a.jsx)("div",{className:"container container-1290 pb-40",children:(0,a.jsxs)("div",{className:"row justify-content-between",children:[(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsxs)("div",{className:"footer-widget footer-about wow fadeInUp delay-0-2s",children:[(0,a.jsx)("div",{className:"section-title mb-30",children:(0,a.jsx)("h2",{children:"Awards Winning Web Developer"})}),(0,a.jsxs)("div",{className:"social-style-four",children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:"Home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/about",children:(0,a.jsx)("a",{children:"About"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/services",children:(0,a.jsx)("a",{children:"Services"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Career ?"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/faqs",children:(0,a.jsx)("a",{children:"FAQs"})})})]})]})}),(0,a.jsx)("div",{className:"col-xl-2 col-lg-3 col-sm-4",children:(0,a.jsxs)("div",{className:"footer-widget footer-links wow fadeInUp delay-0-4s",children:[(0,a.jsx)("h5",{className:"footer-title",children:"Follow Me"}),(0,a.jsx)("div",{className:"footer-widget widget_nav_menu",children:(0,a.jsxs)("ul",{className:"list-style-two",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"LinkedIn"})})]})})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-8",children:(0,a.jsxs)("div",{className:"footer-widget newsletter-widget wow fadeInUp delay-0-6s",children:[(0,a.jsx)("h5",{className:"footer-title",children:"Newsletter"}),(0,a.jsxs)("form",{className:"footer-newsletter",action:"#",children:[(0,a.jsx)("input",{type:"email",placeholder:"Email Address",required:!0}),(0,a.jsx)("button",{type:"submit",children:(0,a.jsx)("i",{className:"fas fa-arrow-right"})})]}),(0,a.jsx)("div",{className:"footer-logo pt-15",children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/logos/footer-logo.png",alt:"Logo"})})})})]})})]})}),(0,a.jsx)("div",{className:"copyright-area text-center pt-25 pb-15 wow fadeInUp delay-0-2s",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("p",{children:["Copyright @2023,"," ",(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:"Ygency"})})," ","All Rights Reserved"]})})})]}),B=()=>(0,a.jsxs)("footer",{className:"main-footer footer-five pt-100",children:[(0,a.jsx)("div",{className:"container container-1290 pb-40",children:(0,a.jsxs)("div",{className:"row justify-content-between",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"footer-widget footer-about wow fadeInUp delay-0-2s",children:[(0,a.jsx)("div",{className:"footer-logo mb-25",children:(0,a.jsx)("a",{href:"index.html",children:(0,a.jsx)("img",{src:"assets/images/logos/logo.png",alt:"Logo"})})}),(0,a.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam reme"})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,a.jsx)("div",{className:"footer-widget footer-info wow fadeInUp delay-0-4s",children:(0,a.jsxs)("ul",{className:"list-style-two",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"far fa-envelope"})," ",(0,a.jsx)("a",{href:"mailto:support@gmail.com",children:"support@gmail.com"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"far fa-phone"})," ",(0,a.jsx)("a",{href:"callto:+000(123)45688",children:"+000 (123) 456 88"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"far fa-clock"})," ",(0,a.jsx)("span",{children:"Monday - Friday, 10am - 5pm"})]})]})})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"footer-widget newsletter-widget wow fadeInUp delay-0-6s",children:[(0,a.jsxs)("form",{className:"footer-newsletter",action:"#",children:[(0,a.jsx)("input",{type:"email",placeholder:"Email Address",required:!0}),(0,a.jsx)("button",{type:"submit",children:(0,a.jsx)("i",{className:"fas fa-arrow-right"})})]}),(0,a.jsxs)("div",{className:"policy",children:[(0,a.jsx)("input",{id:"privacy-policy",type:"checkbox"}),(0,a.jsxs)("label",{htmlFor:"privacy-policy",children:["I agree to the ",(0,a.jsx)("a",{href:"about.html",children:"Privacy Policy"})]})]})]})})]})}),(0,a.jsx)("div",{className:"copyright-area pt-25 pb-15",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"footer-copyright-text wow fadeInUp delay-0-2s",children:(0,a.jsxs)("p",{children:["Copyright @2023, ",(0,a.jsx)("a",{href:"index.html",children:"Ygency"})," All Rights Reserved"]})})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"index.html",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"about.html",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"services.html",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"about.html",children:"Career ?"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"faqs.html",children:"Faqs"})})]})})})]})})})]}),k=e=>{let{footer:s}=e;switch(s){case 1:default:return(0,a.jsx)(N,{});case 2:return(0,a.jsx)(y,{});case 3:return(0,a.jsx)(b,{});case 4:return(0,a.jsx)(w,{});case 5:return(0,a.jsx)(B,{})}};var S=l(7691);let I=e=>{let{singleMenu:s}=e;return(0,a.jsx)(r.Fragment,{children:s?(0,a.jsx)(P,{}):(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(L,{}),(0,a.jsx)(C,{})]})})},L=()=>(0,a.jsxs)("ul",{className:"navigation d-none d-lg-flex desktop-menu",children:[(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Home"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"MultiPage"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:"Web Design"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index2",children:"Web Development"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index3",children:"Creative Design Studio"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index4",children:"Web Developer"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index5",children:"Marketing Agency"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"OnePage"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index1-onepage",children:"Web Design"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index2-onepage",children:"Web Development"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index3-onepage",children:"Creative Design Studio"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index4-onepage",children:"Web Developer"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index5-onepage",children:"Marketing Agency"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"about",children:"About Us"})}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"pages"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"faqs",children:"faqs"})}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Products"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"shop",children:"our Products"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"product-details",children:"Product Details"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Team"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"team",children:"Team Members"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"team-details",children:"Team Details"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"contact",children:"Contact us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"pricing",children:"Pricing Plan"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"404",children:"404 error"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Services"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"services",children:"Our Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"service-details",children:"Service Details One"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"service-details2",children:"Service Details Two"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Projects"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"projects",children:"Project Grid"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"project-list",children:"Project List"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"project-details",children:"Project Details"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"blog"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"blog",children:"blog Grid"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"blog-standard",children:"blog standard"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"blog-details",children:"blog details"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",children:(0,a.jsx)("span",{className:"far fa-plus"})})]})]}),C=()=>{let[e,s]=(0,r.useState)(""),[l,i]=(0,r.useState)(""),c=l=>s(e===l?"":l),n=s=>s===e?{display:"block"}:{display:"none"},d=e=>i(l===e?"":e),o=e=>e===l?{display:"block"}:{display:"none"};return(0,a.jsxs)("ul",{className:"navigation d-block d-lg-none mobile-menu",children:[(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Home"}),(0,a.jsxs)("ul",{style:n("home"),children:[(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"MultiPage"}),(0,a.jsxs)("ul",{style:o("multiPage"),children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:"Web Design"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index2",children:"Web Development"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index3",children:"Creative Design Studio"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index4",children:"Web Developer"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>d("multiPage"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"OnePage"}),(0,a.jsxs)("ul",{style:o("OnePage"),children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index1-onepage",children:"Web Design"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index2-onepage",children:"Web Development"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index3-onepage",children:"Creative Design Studio"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"index4-onepage",children:"Web Developer"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>d("OnePage"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>c("home"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"about",children:"About Us"})}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"pages"}),(0,a.jsxs)("ul",{style:n("pages"),children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"faqs",children:"faqs"})}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Products"}),(0,a.jsxs)("ul",{style:o("Products"),children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"shop",children:"our Products"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"product-details",children:"Product Details"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>d("Products"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Team"}),(0,a.jsxs)("ul",{style:o("Team"),children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"team",children:"Team Members"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"team-details",children:"Team Details"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>d("Team"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"contact",children:"Contact us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"pricing",children:"Pricing Plan"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"404",children:"404 error"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>c("pages"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Services"}),(0,a.jsxs)("ul",{style:n("Services"),children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"services",children:"Our Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"service-details",children:"Service Details One"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"service-details2",children:"Service Details Two"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>c("Services"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"Projects"}),(0,a.jsxs)("ul",{style:n("Projects"),children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"projects",children:"Project Grid"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"project-list",children:"Project List"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"project-details",children:"Project Details"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>c("Projects"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("a",{href:"#",children:"blog"}),(0,a.jsxs)("ul",{style:n("blog"),children:[(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"blog",children:"blog Grid"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"blog-standard",children:"blog standard"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"blog-details",children:"blog details"})})]}),(0,a.jsx)("div",{className:"dropdown-btn",onClick:()=>c("blog"),children:(0,a.jsx)("span",{className:"far fa-plus"})})]})]})},P=()=>(0,a.jsxs)("ul",{className:"navigation onepage clearfix",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#home",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#about",children:"about"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#services",children:"services"})})]}),A=e=>{let{singleMenu:s}=e;return(0,a.jsx)("nav",{className:"main-menu navbar-expand-lg",children:(0,a.jsxs)(S.Z,{children:[(0,a.jsxs)("div",{className:"navbar-header py-10",children:[(0,a.jsx)("div",{className:"mobile-logo",children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/logos/logo.png",alt:"Logo",title:"Logo"})})})}),(0,a.jsxs)(S.Z.Toggle,{as:"button",className:"navbar-toggle",eventKey:"navbar-collapse",children:[(0,a.jsx)("span",{className:"icon-bar"}),(0,a.jsx)("span",{className:"icon-bar"}),(0,a.jsx)("span",{className:"icon-bar"})]})]}),(0,a.jsx)(S.Z.Collapse,{eventKey:"navbar-collapse",className:"navbar-collapse clearfix",children:(0,a.jsx)(I,{singleMenu:s})})]})})},D=()=>{let[e,s]=(0,r.useState)(!1);return(0,a.jsxs)("div",{className:"nav-search py-10",children:[(0,a.jsx)("button",{className:"far fa-search",onClick:()=>s(!e)}),(0,a.jsxs)("form",{action:"#",onSubmit:e=>{e.preventDefault(),s(!1)},className:e?"":"hide",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search",className:"searchbox",required:!0}),(0,a.jsx)("button",{type:"submit",className:"searchbutton far fa-search"})]})]})},q=e=>{let{singleMenu:s}=e;return(0,a.jsx)("header",{className:"main-header menu-absolute",children:(0,a.jsx)("div",{className:"header-upper",children:(0,a.jsx)("div",{className:"container container-1620 clearfix",children:(0,a.jsxs)("div",{className:"header-inner rpy-10 rel d-flex align-items-center",children:[(0,a.jsx)("div",{className:"logo-outer",children:(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/logos/logo.png",alt:"Logo",title:"Logo"})})})})}),(0,a.jsx)("div",{className:"nav-outer ms-lg-auto clearfix",children:(0,a.jsx)(A,{singleMenu:s})}),(0,a.jsx)(D,{}),(0,a.jsx)("div",{className:"menu-btns",children:(0,a.jsx)("div",{className:"menu-sidebar",children:(0,a.jsx)("button",{children:(0,a.jsx)("img",{src:"assets/images/icons/toggler.svg",alt:"Toggler"})})})})]})})})})},E=e=>{let{singleMenu:s}=e;return(0,a.jsx)("header",{className:"main-header menu-absolute",children:(0,a.jsx)("div",{className:"header-upper",children:(0,a.jsx)("div",{className:"container container-1620 clearfix",children:(0,a.jsxs)("div",{className:"header-inner rpy-10 rel d-flex align-items-center",children:[(0,a.jsx)("div",{className:"logo-outer",children:(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/logos/logo.png",alt:"Logo",title:"Logo"})})})})}),(0,a.jsx)("div",{className:"nav-outer ms-lg-auto clearfix",children:(0,a.jsx)(A,{singleMenu:s})}),(0,a.jsx)(D,{}),(0,a.jsxs)("div",{className:"menu-btns ms-lg-auto",children:[(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsxs)("a",{className:"theme-btn style-two me-4",children:["Let’s Talk ",(0,a.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,a.jsx)("div",{className:"menu-sidebar",children:(0,a.jsx)("button",{className:"bg-transparent",children:(0,a.jsx)("img",{src:"assets/images/icons/toggler-white.svg",alt:"Toggler"})})})]})]})})})})},M=e=>{let{singleMenu:s}=e;return(0,a.jsxs)("header",{className:"main-header menu-absolute header-two",children:[(0,a.jsx)("div",{className:"header-top bgc-primary",children:(0,a.jsx)("div",{className:"container container-1620",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-7",children:(0,a.jsxs)("ul",{className:"top-left",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"far fa-map-marker-alt"})," 963 main Street, Melbourne, Australia"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"far fa-clock"})," Monday - Friday, 10am - 5pm"]})]})}),(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsxs)("div",{className:"top-right",children:[(0,a.jsx)("div",{className:"lang-select",children:(0,a.jsxs)("select",{name:"language",id:"language",children:[(0,a.jsx)("option",{value:"English",children:"English"}),(0,a.jsx)("option",{value:"Arabic",children:"Arabic"}),(0,a.jsx)("option",{value:"Bangla",children:"Bangla"}),(0,a.jsx)("option",{value:"Hindi",children:"Hindi"})]})}),(0,a.jsxs)("div",{className:"social-style-two",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-twitter"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-facebook-f"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-instagram"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-pinterest-p"})})]})]})})]})})}),(0,a.jsx)("div",{className:"header-upper",children:(0,a.jsx)("div",{className:"container container-1620 clearfix",children:(0,a.jsxs)("div",{className:"header-inner rpy-10 rel d-flex align-items-center",children:[(0,a.jsx)("div",{className:"logo-outer",children:(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)(u(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/logos/logo.png",alt:"Logo",title:"Logo"})})})})}),(0,a.jsx)("div",{className:"nav-outer mx-lg-auto clearfix",children:(0,a.jsx)(A,{singleMenu:s})}),(0,a.jsx)(D,{}),(0,a.jsxs)("div",{className:"menu-btns",children:[(0,a.jsx)("button",{children:(0,a.jsx)("i",{className:"far fa-shopping-basket"})}),(0,a.jsxs)("div",{className:"call-anytime",children:[(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)("i",{className:"fas fa-comments-alt"})}),(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("span",{children:"Call Anytime"}),(0,a.jsx)("a",{href:"callto:985236425288",children:"98 523 642 5288"})]})]}),(0,a.jsx)("div",{className:"menu-sidebar",children:(0,a.jsx)("button",{children:(0,a.jsx)("img",{src:"assets/images/icons/toggler-white.svg",alt:"Toggler"})})})]})]})})})]})},U=e=>{let{header:s,singleMenu:l}=e;switch((0,r.useEffect)(()=>{m()},[]),s){case 1:default:return(0,a.jsx)(q,{singleMenu:l});case 2:return(0,a.jsx)(E,{singleMenu:l});case 5:return(0,a.jsx)(M,{singleMenu:l})}},T=()=>(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"form-back-drop"}),(0,a.jsx)("section",{className:"hidden-bar",children:(0,a.jsxs)("div",{className:"inner-box text-center",children:[(0,a.jsx)("div",{className:"cross-icon",children:(0,a.jsx)("span",{className:"fa fa-times"})}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h4",{children:"Get Appointment"})}),(0,a.jsx)("div",{className:"appointment-form",children:(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),document.querySelector("body").classList.remove("side-content-visible")},children:[(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("input",{type:"text",name:"text",placeholder:"Name",required:!0})}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("input",{type:"email",name:"email",placeholder:"Email Address",required:!0})}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("textarea",{placeholder:"Message",rows:5})}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("button",{type:"submit",className:"theme-btn",children:"Submit now"})})]})}),(0,a.jsxs)("div",{className:"social-style-one",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-twitter"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-facebook-f"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-instagram"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fab fa-pinterest-p"})})]})]})})]}),W=e=>{let{children:s,header:l,footer:i,singleMenu:n}=e;return(0,r.useEffect)(()=>{c()(),j(),f()},[]),(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(x,{}),(0,a.jsx)(o,{}),(0,a.jsxs)("div",{className:"page-wrapper",children:[(0,a.jsx)(U,{header:l,singleMenu:n}),(0,a.jsx)(T,{}),s,(0,a.jsx)(k,{footer:i}),(0,a.jsx)(v,{})]})]})};var F=W}}]);