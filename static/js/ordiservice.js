(()=>{var t={415:()=>{var t=document.querySelector(".hamburger"),e=document.querySelector("#menu"),r=document.querySelector("#main"),n=document.querySelector("#header");t.addEventListener("click",(function(){t.classList.toggle("is-active"),e.classList.toggle("open"),r.classList.toggle("open"),n&&n.classList.toggle("open")}))}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}(()=>{"use strict";function t(t,e){var r=t.textContent.replace(e.textContent,"");return(r=r.trim()).replace("*","")}r(415);var e,n,o,a=function(e,r){return"Un "+t(e,r).toLowerCase()+" est requis"},i=function(e,r,n){return"Un "+t(e,r).toLowerCase()+"  doit avoir au moins "+n+" caractères."},u=function(e,r){return"Un "+t(e,r).toLowerCase()+" ne doit comprendre que des lettres, tiret ou espace."},s=function(e,r,n,o,a){o=new RegExp(o),console.log(a,o);var i=a.replace(o,"*");return console.log(i),t(e,r)+" n'est pas un email valable"};function c(t){var e,r=t.parentNode,n=r.getElementsByTagName("span")[0];return t.validity.valid?t.validity.valid&&t.value?(r.classList.remove("erreur"),t.removeAttribute("aria-invalid"),r.classList.add("valide"),n.textContent="",e=!0):(r.classList.remove("erreur"),r.classList.remove("valide"),n.textContent=""):(t.setAttribute("aria-invalid","true"),r.classList.add("erreur"),e=!1,function(t,e,r){var n=t.validity;if(n.valueMissing&&(r.textContent=a(e,r)),n.tooShort){var o=t.getAttribute("minlength");r.textContent=i(e,r,o)}if(n.tooLong){var c=t.getAttribute("maxlength");r.textContent=i(e,r,c)}if(n.patternMismatch&&(r.textContent=u(e,r)),n.typeMismatch){var l=t.type,d=t.getAttribute("pattern"),v=t.value;r.textContent=s(e,r,l,d,v)}}(t,r,n)),e}(e=document.querySelector("#contact")).querySelector('[type="submit"'),n=Array.from(e.childNodes).filter((function(t){return"submit"!=t.type})),o=[],n.forEach((function(t){Array.from(t.childNodes).forEach((function(t){"INPUT"!==t.nodeName&&"TEXTAREA"!==t.nodeName||"telephone"==t.id||o.push(t)}))})),e.setAttribute("novalidate",""),e.addEventListener("submit",(function(t){t.preventDefault();var r=function(t){var e;return t.forEach((function(t){e=c(t)})),e}(o);r&&function(t,e){var r=t.getAttribute("data-protect");r="../php/"+r+".php",t.setAttribute("action",r),e.currentTarget.submit()}(e,t)})),e.addEventListener("blur",(function(t){var e=t.target;"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||"telephone"==e.id||c(e)}),!0)})()})();