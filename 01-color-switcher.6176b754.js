!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.setAttribute("disabled","disabled");var d=null;t.addEventListener("click",(function(){return d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled","disabled"),void e.removeAttribute("disabled","disabled")})),e.addEventListener("click",(function(){return clearInterval(d),t.removeAttribute("disabled","disabled"),void e.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.6176b754.js.map
