!function(){"use strict";var e,t,a,o=window.location,p=window.document,l=p.getElementById("plausible"),s=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function r(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=t&&t.u?t.u:o.href,a.d=l.getAttribute("data-domain"),a.r=p.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var r=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),i=a.p||{};r.forEach(function(e){var t=e.replace("event-",""),a=l.getAttribute(e);i[t]=i[t]||a}),a.p=i,a.h=1;var n=new XMLHttpRequest;n.open("POST",s,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&t&&t.callback&&t.callback()}}}function i(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==o.host&&((a||r)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}p.addEventListener("click",i),p.addEventListener("auxclick",i);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=l.getAttribute("file-types"),u=l.getAttribute("add-file-types"),d=c&&c.split(",")||u&&u.split(",").concat(n)||n;function f(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var i,n=t&&t.href&&t.href.split("?")[0];n&&(i=n.split(".").pop(),d.some(function(e){return e===i}))&&((a||r)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}p.addEventListener("click",f),p.addEventListener("auxclick",f);var w=window.plausible&&window.plausible.q||[];window.plausible=r;for(var g=0;g<w.length;g++)r.apply(this,w[g])}();