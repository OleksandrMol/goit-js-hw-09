const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.setAttribute("disabled","disabled");let d=null;t.addEventListener("click",(function(){return d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.setAttribute("disabled","disabled"),void e.removeAttribute("disabled","disabled")})),e.addEventListener("click",(function(){return clearInterval(d),t.removeAttribute("disabled","disabled"),void e.setAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.51c07d7b.js.map
