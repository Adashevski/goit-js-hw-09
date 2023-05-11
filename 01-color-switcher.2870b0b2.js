const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.body;let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.2870b0b2.js.map
