const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(o){t.disabled=!0,e.disabled=!1,d=setInterval(n,1e3)})),e.addEventListener("click",(function(n){t.disabled=!1,e.disabled=!0,clearInterval(d)}));let d=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.disabled=!0;
//# sourceMappingURL=01-color-switcher.d2c4343f.js.map