/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

;/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#dt/dt-1.10.15
 *
 * Included libraries:
 *   DataTables 1.10.15
 */

/*!
 DataTables 1.10.15
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&fb(a)}function gb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function hb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function ib(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function jb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==
e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=
e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(hb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=R(g),i=b.mRender?R(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};
b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return S(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=
d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Z(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ma(a);s(a,null,"column-sizing",[a])}function $(a,b){var c=na(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function aa(a,b){var c=na(a,"bVisible"),c=h.inArray(b,
c);return-1!==c?c:null}function ba(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function na(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,r;e=0;for(f=b.length;e<f;e++)if(l=b[e],r=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){r[i]===k&&(r[i]=B(a,i,e,"type"));
q=d[g](r[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function kb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&
d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function oa(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,
f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function lb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}
function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function R(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=R(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);
for(var i=0,n=j.length;i<n;i++){f=j[i].match(ca);g=j[i].match(V);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function S(a){if(h.isPlainObject(a))return S(a._);
if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ca);j=e[i].match(V);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,
""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function pa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function qa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],r=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
-1!==c&&(c=a.substring(c+1),S(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(S(j.mData._)(d,n),r(j.mData.sort,a),r(j.mData.type,a),r(j.mData.filter,a)):q?(j._setter||(j._setter=S(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&S(a.rowId)(d,b);return{data:d,cells:e}}
function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:H.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}s(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?sa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function mb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function O(a){var b=s(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
-1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!nb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var r=d[c%e];q._sRowStripe!=r&&(h(l).removeClass(q._sRowStripe).addClass(r),q._sRowStripe=r)}s(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ba(a),"class":a.oClasses.sRowEmpty}).html(c))[0];s(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,i]);s(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));s(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;
c.bSort&&ob(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=!1}function pb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];
n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=qb(a);else if("f"==j&&d.bFilter)g=rb(a);else if("r"==j&&d.bProcessing)g=sb(a);else if("t"==j)g=tb(a);else if("i"==j&&d.bInfo)g=ub(a);else if("p"==
j&&d.bPaginate)g=vb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ta(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ua(a,b,c){s(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){s(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=s(a,null,"xhr",
[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;s(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function nb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
!0),ua(a,wb(a),function(b){xb(a,b)}),!1):!0}function wb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var r=function(a,b){j.push({name:a,value:b})};r("sEcho",a.iDraw);r("iColumns",c);r("sColumns",D(b,"sName").join(","));r("iDisplayStart",g);r("iDisplayLength",i);var ra={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
l=f[g],i="function"==typeof n.mData?"function":n.mData,ra.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),r("mDataProp_"+g,i),d.bFilter&&(r("sSearch_"+g,l.sSearch),r("bRegex_"+g,l.bRegex),r("bSearchable_"+g,n.bSearchable)),d.bSort&&r("bSortable_"+g,n.bSortable);d.bFilter&&(r("sSearch",e.sSearch),r("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){ra.order.push({column:b.col,dir:b.dir});r("iSortCol_"+a,b.col);r("sSortDir_"+
a,b.dir)}),r("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:ra:b?j:ra}function xb(a,b){var c=va(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}pa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||
wa(a,b);a.bAjaxDataGet=!0;C(a,!1)}function va(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?R(c)(b):b}function rb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Qa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});
return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){yb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)zb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);Ab(a)}else f(b);a.bFiltered=!0;s(a,null,"search",[a])}function Ab(a){for(var b=
m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function zb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Ra(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function yb(a,b,c,d,e,f){var d=Ra(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=Bb(a);if(0>=b.length)a.aiDisplay=
g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Ra(a,b,c,d){a=b?a:Sa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Bb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;
d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(xa.innerHTML=i,i=$b?xa.textContent:xa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Cb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
caseInsensitive:a.bCaseInsensitive}}function Db(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function ub(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Eb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Eb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+
1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Fb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Fb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){pb(a);mb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));s(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ua(a,[],function(c){var f=va(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=
d;T(a);C(a,!1);wa(a,c)},a):(C(a,!1),wa(a))}else setTimeout(function(){ha(a)},200)}function wa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Z(a);s(a,null,"plugin-init",[a,b]);s(a,"aoInitComplete","init",[a,b])}function Ta(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ua(a);s(a,null,"length",[a,c])}function qb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=
new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ta(a,h(this).val());O(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function vb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+
b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Va(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&
(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(s(a,null,"page",[a]),c&&O(a));return b}function sb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");
s(a,null,"processing",[a,b])}function tb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],r=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(r.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=r;a.aoDrawCallback.push({fn:ma,sName:"scrolling"});return i[0]}function ma(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
j=a.nScrollBody,l=h(j),q=j.style,r=h(a.nScrollFoot).children("div"),m=r.children("table"),p=h(a.nTHead),o=h(a.nTable),t=o[0],s=t.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,ac=D(a.aoColumns,"nTh"),P,L,Q,w,Wa=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,Z(a);else{a.scrollBarVis=L;o.children("thead, tfoot").remove();
u&&(Q=u.clone().prependTo(o),P=u.find("tr"),Q=Q.find("tr"));w=p.clone().prependTo(o);p=p.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ta(a,w),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},Q);f=o.outerWidth();if(""===c){s.width="100%";if(U&&(o.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(o.outerWidth()-b);f=o.outerWidth()}else""!==d&&(s.width=
v(d),f=o.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Wa.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,ac)!==-1)a.style.width=Wa[b]},p);h(L).height(0);u&&(I(C,Q),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},Q),I(function(a,b){a.style.width=y[b]},P),h(Q).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Wa[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
A[b]+"</div>";a.style.width=y[b]},Q);if(o.outerWidth()<f){P=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(P-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else P="100%";q.width=v(P);g.width=v(P);u&&(a.nScrollFoot.style.width=v(P));!e&&U&&(q.height=v(t.offsetHeight+b));c=o.outerWidth();n[0].style.width=v(c);i.width=v(c);d=o.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=v(c),r[0].style.width=v(c),r[0].style[e]=d?b+"px":"0px");o.children("colgroup").insertBefore(o.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=na(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,r=!1,m,p,o=a.oBrowser,d=o.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)p=c[i[m]],null!==p.sWidth&&(p.sWidth=Gb(p.sWidthOrig,k),r=!0);if(d||!r&&!f&&!e&&j==ba(a)&&j==n.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));
j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ta(a,j.find("thead")[0]);for(m=0;m<i.length;m++)p=c[i[m]],n[m].style.width=null!==p.sWidthOrig&&""!==p.sWidthOrig?v(p.sWidthOrig):"",p.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:p.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)r=i[m],p=c[r],h(Hb(a,r)).clone(!1).append(p.sContentPadding).appendTo(t);h("[name]",
j).removeAttr("name");p=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=o.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);p.remove()}l&&(b.style.width=
v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Qa(function(){Z(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Gb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Hb(a,b){var c=Ib(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Ib(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(bc,
""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||
"string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function ob(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Jb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=
0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,
"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Xa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,
D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Ya(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Xa(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Xa(a,c,b.shiftKey,d))})}
function ya(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Jb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,aa(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],
c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function za(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Cb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Cb(a.aoPreSearchCols[d])}})};s(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,
b)}}function Lb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=s(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==
k&&h.extend(a.oPreviousSearch,Db(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Db(g.search))}s(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function Aa(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+
" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&s(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Mb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],
h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Ya(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function s(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+
".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ua(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Nb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,
c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function fb(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Za)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Za)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Ob(a){return function(){var b=
[Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(Aa(this[x.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=
function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ma(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};
this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();
return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Aa(this[x.iApiIndex])};
this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Ob(e));this.each(function(){var e={},g=1<d?Mb(e,a,!0):
a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{gb(l);hb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var r=m.settings,j=0;for(i=r.length;j<i;j++){var p=r[j];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){var t=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||t)return p.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){p.oInstance.fnDestroy();
break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){r.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});o.nTable=this;o.oApi=b.internal;o.oInit=g;r.push(o);o.oInstance=1===b.length?b:q.dataTable();gb(g);g.oLanguage&&Fa(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);
g=Mb(h.extend(!0,{},l),g);F(o.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],
["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(o.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,g,"fnInfoCallback");z(o,"aoDrawCallback",g.fnDrawCallback,"user");z(o,"aoServerParams",g.fnServerParams,"user");z(o,"aoStateSaveParams",g.fnStateSaveParams,"user");z(o,"aoStateLoadParams",g.fnStateLoadParams,"user");z(o,"aoStateLoaded",g.fnStateLoaded,
"user");z(o,"aoRowCallback",g.fnRowCallback,"user");z(o,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(o,"aoHeaderCallback",g.fnHeaderCallback,"user");z(o,"aoFooterCallback",g.fnFooterCallback,"user");z(o,"aoInitComplete",g.fnInitComplete,"user");z(o,"aoPreDrawCallback",g.fnPreDrawCallback,"user");o.rowIdFn=R(g.rowId);ib(o);var u=o.oClasses;g.bJQueryUI?(h.extend(u,m.ext.oJUIClasses,g.oClasses),g.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&
!o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(u,m.ext.classes,g.oClasses);q.addClass(u.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=g.iDisplayStart,o._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(o.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),o._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,o._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=o.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Fa(a);
J(l.oLanguage,a);h.extend(true,v,a);ha(o)},error:function(){ha(o)}}),n=!0);null===g.asStripeClasses&&(o.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=o.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),o.asDestroyStripes=e.slice());e=[];r=this.getElementsByTagName("thead");0!==r.length&&(ea(o.aoHeader,r[0]),e=ta(o));if(null===g.aoColumns){r=[];j=0;for(i=e.length;j<i;j++)r.push(null)}else r=
g.aoColumns;j=0;for(i=r.length;j<i;j++)Ga(o,e?e[j]:null);kb(o,g.aoColumnDefs,r,function(a,b){la(o,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(o,a)}}})}var U=o.oFeatures,
e=function(){if(g.aaSorting===k){var a=o.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=o.aoColumns[j].asSorting[0]}ya(o);U.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=W(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});s(o,null,"order",[o,a,b]);Kb(o)}});z(o,"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||U.bDeferRender)&&ya(o)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
o.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));o.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(o.oScroll.sX!==""||o.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){o.nTFoot=b[0];ea(o.aoFooter,o.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)N(o,g.aaData[j]);else(o.bDeferLoading||y(o)=="dom")&&oa(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();
o.bInitialised=true;n===false&&ha(o)};g.bStateSave?(U.bStateSave=!0,z(o,"aoDrawCallback",za,"state_save"),Lb(o,g,e)):e()}});b=null;return this},x,t,p,u,$a={},Pb=/[\r\n]/g,Ca=/<.*?>/g,cc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,dc=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Za=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Qb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
isFinite(a)?b:null},Rb=function(a,b){$a[b]||($a[b]=RegExp(Sa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace($a[b],"."):a},ab=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Rb(a,b));c&&d&&(a=a.replace(Za,""));return!isNaN(parseFloat(a))&&isFinite(a)},Sb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:ab(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Tb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},sa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,h=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,h)},c)):(d=g,a.apply(b,h))}},escapeRegex:function(a){return a.replace(dc,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,V=/\(\)$/,Sa=m.util.escapeRegex,xa=h("<div>")[0],$b=xa.textContent!==k,bc=
/<.*?>/g,Qa=m.util.throttle,Ub=[],w=Array.prototype,ec=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof
t))return new t(a,b);var c=[],d=function(a){(a=ec(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=sa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Ub)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,n,l=this.context,
m,p,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var s=new t(l[g]);if("table"===b)f=c.call(s,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(s,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],u.opts));i=0;for(n=p.length;i<n;i++)f=p[i],f="cell"===b?c.call(s,l[g],f.row,f.column,g,i):c.call(s,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?
e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return jb(this,a,b,0,this.length,
1)},reduceRight:w.reduceRight||function(a,b){return jb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new t(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new t(this.context,sa(this))},unshift:w.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Ub,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=
f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=u=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
"table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Va(b,a)})});p("page.info()",function(){if(0===
this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ta(b,a)})});var Vb=function(a,b,c){if(c){var d=new t(a);
d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ua(a,[],function(c){pa(a);for(var c=va(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});p("ajax.url()",function(a){var b=
this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});var bb=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return sa(f)},cb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},db=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,
d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};
p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=b,f;return bb("row",a,function(a){var b=Qb(a);if(b!==null&&!e)return[b];f||(f=Da(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Tb(ja(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];
b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},
1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<
g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<n;i++)l[i]._DT_CellIndex.row=g}qa(b.aiDisplayMaster,c);qa(b.aiDisplay,c);qa(a[d],c,!1);Ua(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});
this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(oa(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return db(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:
k;b[0].aoData[this[0]]._aData=a;da(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?oa(b,a)[0]:N(b,a)});return this.row(b[0])});var eb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=
k,c._details=k},Wb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",
function(a,b){if(e===b)for(var c,d=ba(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&eb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)eb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,
b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ba(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Wb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Wb(this,!1);
return this});p(["row().child.remove()","row().child().remove()"],function(){eb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var fc=/^([^:]+):(name|visIdx|visible)$/,Xb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,
j=D(g,"sName"),i=D(g,"nTh");return bb("column",e,function(a){var b=Qb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Xb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(fc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===
k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",
function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Xb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()",
"column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();
g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);za(b)}});a!==k&&(this.iterator("column",function(c,e){s(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?aa(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Z(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===
a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return aa(c,b)}});p("column()",function(a,b){return db(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=cb(c),f=b.aoData,g=Da(b,e),j=Tb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,p,u,t,s,v;return bb("cell",d,function(a){var c=typeof a==="function";
if(a===null||a===k||c){m=[];p=0;for(u=g.length;p<u;p++){l=g[p];for(t=0;t<n;t++){s={row:l,column:t};if(c){v=f[l];a(s,B(b,l,t),v.anCells?v.anCells[t]:null)&&m.push(s)}else m.push(s)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,
c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a=
"search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:aa(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});p("cell()",
function(a,b,c){return db(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;lb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});
p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=
this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?
!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){za(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),
a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,
function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",
function(a){pa(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),
p;b.bDestroying=!0;s(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];ya(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+
", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column",
"row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=R(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.15";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,
_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults=
{aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,
aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=
this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},build:"dt/dt-1.10.15",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},
header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Yb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,
m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",
sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Yb+" ui-corner-tl ui-corner-tr",sJUIFooter:Yb+" ui-corner-bl ui-corner-br"});var Nb=m.ext.pager;h.extend(Nb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,
b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,p=0,r=function(b,d){var k,t,u,s,v=function(b){Va(a,b.data.action,true)};k=0;for(t=d.length;k<t;k++){s=d[k];if(h.isArray(s)){u=
h("<"+(s.DT_el||"div")+"/>").appendTo(b);r(u,s)}else{m=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=s+1;l=e===s?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+
" "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":p,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(m).appendTo(b);Ya(u,{action:s},v);p++}}}},t;try{t=h(b).find(H.activeElement).data("dt-idx")}catch(u){}r(h(b).empty(),d);t!==k&&h(b).find("[data-dt-idx="+t+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!cc.test(a))return null;var b=Date.parse(a);
return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Pb," ").replace(Ca,""):""},string:function(a){return M(a)?
a:"string"===typeof a?a.replace(Pb," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Rb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<
b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});fb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);
h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Zb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
"&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Zb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Zb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Ob,_fnBuildAjax:ua,_fnAjaxUpdate:nb,_fnAjaxParameters:wb,_fnAjaxUpdateDraw:xb,
_fnAjaxDataSrc:va,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:Z,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:aa,_fnVisbleColumns:ba,_fnGetColumns:na,_fnColumnTypes:Ia,_fnApplyColumnDefs:kb,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:ib,_fnAddData:N,_fnAddTr:oa,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:lb,
_fnSplitObjNotation:La,_fnGetObjectDataFn:R,_fnSetObjectDataFn:S,_fnGetDataMaster:Ma,_fnClearTable:pa,_fnDeleteIndex:qa,_fnInvalidate:da,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:mb,_fnDrawHead:fa,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:pb,_fnDetectHeader:ea,_fnGetUniqueThs:ta,_fnFeatureHtmlFilter:rb,_fnFilterComplete:ga,_fnFilterCustom:Ab,_fnFilterColumn:zb,_fnFilter:yb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:Sa,_fnFilterData:Bb,_fnFeatureHtmlInfo:ub,_fnUpdateInfo:Eb,_fnInfoMacros:Fb,_fnInitialise:ha,
_fnInitComplete:wa,_fnLengthChange:Ta,_fnFeatureHtmlLength:qb,_fnFeatureHtmlPaginate:vb,_fnPageChange:Va,_fnFeatureHtmlProcessing:sb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:tb,_fnScrollDraw:ma,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:Qa,_fnConvertToWidth:Gb,_fnGetWidestNode:Hb,_fnGetMaxLenString:Ib,_fnStringToCss:v,_fnSortFlatten:W,_fnSort:ob,_fnSortAria:Kb,_fnSortListener:Xa,_fnSortAttachListener:Oa,_fnSortingClasses:ya,_fnSortData:Jb,_fnSaveState:za,_fnLoadState:Lb,_fnSettingsFromNode:Aa,
_fnLog:K,_fnMap:F,_fnBindAction:Ya,_fnCallbackReg:z,_fnCallbackFire:s,_fnLengthOverflow:Ua,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});



;
/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Emitter, ExifRestore, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    slice = [].slice,
    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  noop = function() {};

  Emitter = (function() {
    function Emitter() {}

    Emitter.prototype.addEventListener = Emitter.prototype.on;

    Emitter.prototype.on = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    };

    Emitter.prototype.emit = function() {
      var args, callback, callbacks, event, j, len;
      event = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      this._callbacks = this._callbacks || {};
      callbacks = this._callbacks[event];
      if (callbacks) {
        for (j = 0, len = callbacks.length; j < len; j++) {
          callback = callbacks[j];
          callback.apply(this, args);
        }
      }
      return this;
    };

    Emitter.prototype.removeListener = Emitter.prototype.off;

    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

    Emitter.prototype.removeEventListener = Emitter.prototype.off;

    Emitter.prototype.off = function(event, fn) {
      var callback, callbacks, i, j, len;
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }
      for (i = j = 0, len = callbacks.length; j < len; i = ++j) {
        callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };

    return Emitter;

  })();

  Dropzone = (function(superClass) {
    var extend, resolveOption;

    extend1(Dropzone, superClass);

    Dropzone.prototype.Emitter = Emitter;


    /*
    This is a list of all available events you can register on a dropzone object.
    
    You can register an event handler like this:
    
        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      timeout: 30000,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      thumbnailMethod: 'crop',
      resizeWidth: null,
      resizeHeight: null,
      resizeMimeType: null,
      resizeQuality: 0.8,
      resizeMethod: 'contain',
      filesizeBase: 1000,
      maxFiles: null,
      params: {},
      headers: null,
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      hiddenInputContainer: "body",
      capture: null,
      renameFilename: null,
      renameFile: null,
      forceFallback: false,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      dictFileSizeUnits: {
        tb: "TB",
        gb: "GB",
        mb: "MB",
        kb: "KB",
        b: "b"
      },
      init: function() {
        return noop;
      },
      accept: function(file, done) {
        return done();
      },
      fallback: function() {
        var child, j, len, messageElement, ref, span;
        this.element.className = this.element.className + " dz-browser-not-supported";
        ref = this.element.getElementsByTagName("div");
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          if (span.textContent != null) {
            span.textContent = this.options.dictFallbackMessage;
          } else if (span.innerText != null) {
            span.innerText = this.options.dictFallbackMessage;
          }
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file, width, height, resizeMethod) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        if ((width == null) && (height == null)) {
          width = info.srcWidth;
          height = info.srcHeight;
        } else if (width == null) {
          width = height * srcRatio;
        } else if (height == null) {
          height = width / srcRatio;
        }
        width = Math.min(width, info.srcWidth);
        height = Math.min(height, info.srcHeight);
        trgRatio = width / height;
        if (info.srcWidth > width || info.srcHeight > height) {
          if (resizeMethod === 'crop') {
            if (srcRatio > trgRatio) {
              info.srcHeight = file.height;
              info.srcWidth = info.srcHeight * trgRatio;
            } else {
              info.srcWidth = file.width;
              info.srcHeight = info.srcWidth / trgRatio;
            }
          } else if (resizeMethod === 'contain') {
            if (srcRatio > trgRatio) {
              height = width / srcRatio;
            } else {
              width = height * srcRatio;
            }
          } else {
            throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        info.trgWidth = width;
        info.trgHeight = height;
        return info;
      },
      transformFile: function(file, done) {
        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
          return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
        } else {
          return done(file);
        }
      },
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var j, k, l, len, len1, len2, node, ref, ref1, ref2, removeFileEvent, removeLink, results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            node.textContent = file.name;
          }
          ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            node = ref1[k];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          results = [];
          for (l = 0, len2 = ref2.length; l < len2; l++) {
            removeLink = ref2[l];
            results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return results;
        }
      },
      removedfile: function(file) {
        var ref;
        if (file.previewElement) {
          if ((ref = file.previewElement) != null) {
            ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var j, len, ref, thumbnailElement;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (j = 0, len = ref.length; j < len; j++) {
            thumbnailElement = ref[j];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this)), 1);
        }
      },
      error: function(file, message) {
        var j, len, node, ref, results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            results.push(node.textContent = message);
          }
          return results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var j, len, node, ref, results;
        if (file.previewElement) {
          ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            if (node.nodeName === 'PROGRESS') {
              results.push(node.value = progress);
            } else {
              results.push(node.style.width = progress + "%");
            }
          }
          return results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          file._removeLink.textContent = this.options.dictRemoveFile;
        }
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-complete");
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      queuecomplete: noop,
      addedfiles: noop
    };

    extend = function() {
      var j, key, len, object, objects, target, val;
      target = arguments[0], objects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      for (j = 0, len = objects.length; j < len; j++) {
        object = objects[j];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element1, options) {
      var elementOptions, fallback, ref;
      this.element = element1;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (ref = Dropzone.optionsForElement(this.element)) != null ? ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      if (this.options.renameFilename != null) {
        this.options.renameFile = (function(_this) {
          return function(file) {
            return _this.options.renameFilename.call(_this, file.name, file);
          };
        })(this);
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.accepted) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (!file.accepted) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status === status) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getAddedFiles = function() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.init = function() {
      var eventName, j, len, noPropagation, ref, ref1, setupHiddenFileInput;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            if (_this.options.capture != null) {
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, j, len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (j = 0, len = files.length; j < len; j++) {
                  file = files[j];
                  _this.addFile(file);
                }
              }
              _this.emit("addedfiles", files);
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (ref = window.URL) != null ? ref : window.webkitURL;
      ref1 = this.events;
      for (j = 0, len = ref1.length; j < len; j++) {
        eventName = ref1[j];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (undefined) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();
                }
                return true;
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var ref;
      this.disable();
      this.removeAllFiles(true);
      if ((ref = this.hiddenFileInput) != null ? ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, j, len, ref, totalBytes, totalBytesSent, totalUploadProgress;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        ref = this.getActiveFiles();
        for (j = 0, len = ref.length; j < len; j++) {
          file = ref[j];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype._renameFile = function(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }
      return this.options.renameFile(file);
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, j, len, ref, tagName;
      getFallback = function(elements) {
        var el, j, len;
        for (j = 0, len = elements.length; j < len; j++) {
          el = elements[j];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      ref = ["div", "form"];
      for (j = 0, len = ref.length; j < len; j++) {
        tagName = ref[j];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, j, len, listener, ref, results;
      ref = this.listeners;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        elementListeners = ref[j];
        results.push((function() {
          var ref1, results1;
          ref1 = elementListeners.events;
          results1 = [];
          for (event in ref1) {
            listener = ref1[event];
            results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return results1;
        })());
      }
      return results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, j, len, listener, ref, results;
      ref = this.listeners;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        elementListeners = ref[j];
        results.push((function() {
          var ref1, results1;
          ref1 = elementListeners.events;
          results1 = [];
          for (event in ref1) {
            listener = ref1[event];
            results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return results1;
        })());
      }
      return results;
    };

    Dropzone.prototype.disable = function() {
      var file, j, len, ref, results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        results.push(this.cancelUpload(file));
      }
      return results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var cutoff, i, j, len, selectedSize, selectedUnit, unit, units;
      selectedSize = 0;
      selectedUnit = "b";
      if (size > 0) {
        units = ['tb', 'gb', 'mb', 'kb', 'b'];
        for (i = j = 0, len = units.length; j < len; i = ++j) {
          unit = units[i];
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }
        selectedSize = Math.round(10 * selectedSize) / 10;
      }
      return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      this.emit("addedfiles", files);
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, ref;
      if ((e != null ? (ref = e.clipboardData) != null ? ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, j, len, results;
      results = [];
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        results.push(this.addFile(file));
      }
      return results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, j, len, results;
      results = [];
      for (j = 0, len = items.length; j < len; j++) {
        item = items[j];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            results.push(this.addFile(item.getAsFile()));
          } else {
            results.push(void 0);
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, errorHandler, readEntries;
      dirReader = directory.createReader();
      errorHandler = function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      };
      readEntries = (function(_this) {
        return function() {
          return dirReader.readEntries(function(entries) {
            var entry, j, len;
            if (entries.length > 0) {
              for (j = 0, len = entries.length; j < len; j++) {
                entry = entries[j];
                if (entry.isFile) {
                  entry.file(function(file) {
                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }
                    file.fullPath = path + "/" + file.name;
                    return _this.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this._addFilesFromDirectory(entry, path + "/" + entry.name);
                }
              }
              readEntries();
            }
            return null;
          }, errorHandler);
        };
      })(this);
      return readEntries();
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file)
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      var file;
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      file = this._thumbnailQueue.shift();
      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (function(_this) {
        return function(dataUrl) {
          _this.emit("thumbnail", file, dataUrl);
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, j, len, ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      ref = this.files.slice();
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.resizeImage = function(file, width, height, resizeMethod, callback) {
      return this.createThumbnail(file, width, height, resizeMethod, false, (function(_this) {
        return function(dataUrl, canvas) {
          var resizeMimeType, resizedDataURL;
          if (canvas === null) {
            return callback(file);
          } else {
            resizeMimeType = _this.options.resizeMimeType;
            if (resizeMimeType == null) {
              resizeMimeType = file.type;
            }
            resizedDataURL = canvas.toDataURL(resizeMimeType, _this.options.resizeQuality);
            if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
              resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
            }
            return callback(Dropzone.dataURItoBlob(resizedDataURL));
          }
        };
      })(this));
    };

    Dropzone.prototype.createThumbnail = function(file, width, height, resizeMethod, fixOrientation, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          file.dataURL = fileReader.result;
          if (file.type === "image/svg+xml") {
            if (callback != null) {
              callback(fileReader.result);
            }
            return;
          }
          return _this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.createThumbnailFromUrl = function(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var img;
      img = document.createElement("img");
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.onload = (function(_this) {
        return function() {
          var loadExif;
          loadExif = function(callback) {
            return callback(1);
          };
          if ((typeof EXIF !== "undefined" && EXIF !== null) && fixOrientation) {
            loadExif = function(callback) {
              return EXIF.getData(img, function() {
                return callback(EXIF.getTag(this, 'Orientation'));
              });
            };
          }
          return loadExif(function(orientation) {
            var canvas, ctx, ref, ref1, ref2, ref3, resizeInfo, thumbnail;
            file.width = img.width;
            file.height = img.height;
            resizeInfo = _this.options.resize.call(_this, file, width, height, resizeMethod);
            canvas = document.createElement("canvas");
            ctx = canvas.getContext("2d");
            canvas.width = resizeInfo.trgWidth;
            canvas.height = resizeInfo.trgHeight;
            if (orientation > 4) {
              canvas.width = resizeInfo.trgHeight;
              canvas.height = resizeInfo.trgWidth;
            }
            switch (orientation) {
              case 2:
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                break;
              case 3:
                ctx.translate(canvas.width, canvas.height);
                ctx.rotate(Math.PI);
                break;
              case 4:
                ctx.translate(0, canvas.height);
                ctx.scale(1, -1);
                break;
              case 5:
                ctx.rotate(0.5 * Math.PI);
                ctx.scale(1, -1);
                break;
              case 6:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(0, -canvas.height);
                break;
              case 7:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(canvas.width, -canvas.height);
                ctx.scale(-1, 1);
                break;
              case 8:
                ctx.rotate(-0.5 * Math.PI);
                ctx.translate(-canvas.width, 0);
            }
            drawImageIOSFix(ctx, img, (ref = resizeInfo.srcX) != null ? ref : 0, (ref1 = resizeInfo.srcY) != null ? ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (ref2 = resizeInfo.trgX) != null ? ref2 : 0, (ref3 = resizeInfo.trgY) != null ? ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
            thumbnail = canvas.toDataURL("image/png");
            if (callback != null) {
              return callback(thumbnail, canvas);
            }
          });
        };
      })(this);
      if (callback != null) {
        img.onerror = callback;
      }
      return img.src = file.dataURL;
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var j, len, ref, results;
        ref = this.files;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          file = ref[j];
          if (file.xhr === xhr) {
            results.push(file);
          }
        }
        return results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, j, k, len, len1, ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (j = 0, len = groupedFiles.length; j < len; j++) {
          groupedFile = groupedFiles[j];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (k = 0, len1 = groupedFiles.length; k < len1; k++) {
          groupedFile = groupedFiles[k];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((ref = file.status) === Dropzone.ADDED || ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    resolveOption = function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (typeof option === 'function') {
        return option.apply(this, args);
      }
      return option;
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var doneCounter, doneFunction, file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, j, k, key, l, len, len1, len2, len3, m, method, o, option, progressObj, ref, ref1, ref2, ref3, ref4, ref5, response, results, updateProgress, url, value, xhr;
      xhr = new XMLHttpRequest();
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.xhr = xhr;
      }
      method = resolveOption(this.options.method, files);
      url = resolveOption(this.options.url, files);
      xhr.open(method, url, true);
      xhr.timeout = resolveOption(this.options.timeout, files);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var k, len1, results;
          results = [];
          for (k = 0, len1 = files.length; k < len1; k++) {
            file = files[k];
            results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, k, l, len1, len2, len3, m, progress, results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (k = 0, len1 = files.length; k < len1; k++) {
              file = files[k];
              file.upload.progress = progress;
              file.upload.total = e.total;
              file.upload.bytesSent = e.loaded;
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (l = 0, len2 = files.length; l < len2; l++) {
              file = files[l];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          results = [];
          for (m = 0, len3 = files.length; m < len3; m++) {
            file = files[m];
            results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var error1, ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
            response = xhr.responseText;
            if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
              try {
                response = JSON.parse(response);
              } catch (error1) {
                e = error1;
                response = "Invalid JSON response from server.";
              }
            }
          }
          updateProgress();
          if (!((200 <= (ref = xhr.status) && ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (ref = xhr.upload) != null ? ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }
      formData = new FormData();
      if (this.options.params) {
        ref1 = this.options.params;
        for (key in ref1) {
          value = ref1[key];
          formData.append(key, value);
        }
      }
      for (k = 0, len1 = files.length; k < len1; k++) {
        file = files[k];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          input = ref2[l];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            ref3 = input.options;
            for (m = 0, len3 = ref3.length; m < len3; m++) {
              option = ref3[m];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((ref4 = inputType.toLowerCase()) !== "checkbox" && ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      doneCounter = 0;
      results = [];
      for (i = o = 0, ref5 = files.length - 1; 0 <= ref5 ? o <= ref5 : o >= ref5; i = 0 <= ref5 ? ++o : --o) {
        doneFunction = (function(_this) {
          return function(file, paramName, fileName) {
            return function(transformedFile) {
              formData.append(paramName, transformedFile, fileName);
              if (++doneCounter === files.length) {
                return _this.submitRequest(xhr, formData, files);
              }
            };
          };
        })(this);
        results.push(this.options.transformFile.call(this, files[i], doneFunction(files[i], this._getParamName(i), files[i].upload.filename)));
      }
      return results;
    };

    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Emitter);

  Dropzone.version = "5.1.1";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, j, len, results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, j, len, results;
        results = [];
        for (j = 0, len = elements.length; j < len; j++) {
          el = elements[j];
          if (/(^| )dropzone($| )/.test(el.className)) {
            results.push(dropzones.push(el));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    results = [];
    for (j = 0, len = dropzones.length; j < len; j++) {
      dropzone = dropzones[j];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        results.push(new Dropzone(dropzone));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, j, len, ref, regex;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        ref = Dropzone.blacklistedBrowsers;
        for (j = 0, len = ref.length; j < len; j++) {
          regex = ref[j];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  Dropzone.dataURItoBlob = function(dataURI) {
    var ab, byteString, i, ia, j, mimeString, ref;
    byteString = atob(dataURI.split(',')[1]);
    mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    ab = new ArrayBuffer(byteString.length);
    ia = new Uint8Array(ab);
    for (i = j = 0, ref = byteString.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
      type: mimeString
    });
  };

  without = function(list, rejectedItem) {
    var item, j, len, results;
    results = [];
    for (j = 0, len = list.length; j < len; j++) {
      item = list[j];
      if (item !== rejectedItem) {
        results.push(item);
      }
    }
    return results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, error1, j, k, len, len1, ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (j = 0, len = els.length; j < len; j++) {
          el = els[j];
          elements.push(this.getElement(el, name));
        }
      } catch (error1) {
        e = error1;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      ref = document.querySelectorAll(els);
      for (k = 0, len1 = ref.length; k < len1; k++) {
        el = ref[k];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, j, len, mimeType, validType;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (j = 0, len = acceptedFiles.length; j < len; j++) {
      validType = acceptedFiles[j];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*
  
  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(1, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };

  ExifRestore = (function() {
    function ExifRestore() {}

    ExifRestore.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    ExifRestore.encode64 = function(input) {
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;
      output = '';
      chr1 = void 0;
      chr2 = void 0;
      chr3 = '';
      enc1 = void 0;
      enc2 = void 0;
      enc3 = void 0;
      enc4 = '';
      i = 0;
      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return output;
    };

    ExifRestore.restore = function(origFileBase64, resizedFileBase64) {
      var image, rawImage, segments;
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }
      rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      segments = this.slice2Segments(rawImage);
      image = this.exifManipulation(resizedFileBase64, segments);
      return 'data:image/jpeg;base64,' + this.encode64(image);
    };

    ExifRestore.exifManipulation = function(resizedFileBase64, segments) {
      var aBuffer, exifArray, newImageArray;
      exifArray = this.getExifArray(segments);
      newImageArray = this.insertExif(resizedFileBase64, exifArray);
      aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    };

    ExifRestore.getExifArray = function(segments) {
      var seg, x;
      seg = void 0;
      x = 0;
      while (x < segments.length) {
        seg = segments[x];
        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }
        x++;
      }
      return [];
    };

    ExifRestore.insertExif = function(resizedFileBase64, exifArray) {
      var array, ato, buf, imageData, mae, separatePoint;
      imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      buf = this.decode64(imageData);
      separatePoint = buf.indexOf(255, 3);
      mae = buf.slice(0, separatePoint);
      ato = buf.slice(separatePoint);
      array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    };

    ExifRestore.slice2Segments = function(rawImageArray) {
      var endPoint, head, length, seg, segments;
      head = 0;
      segments = [];
      while (true) {
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          endPoint = head + length + 2;
          seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }
      return segments;
    };

    ExifRestore.decode64 = function(input) {
      var base64test, buf, chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;
      output = '';
      chr1 = void 0;
      chr2 = void 0;
      chr3 = '';
      enc1 = void 0;
      enc2 = void 0;
      enc3 = void 0;
      enc4 = '';
      i = 0;
      buf = [];
      base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        console.warning('There were invalid base64 characters in the input text.\n' + 'Valid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\n' + 'Expect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);
        if (enc3 !== 64) {
          buf.push(chr2);
        }
        if (enc4 !== 64) {
          buf.push(chr3);
        }
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return buf;
    };

    return ExifRestore;

  })();


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e, error1;
      try {
        root.doScroll("left");
      } catch (error1) {
        e = error1;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (undefined) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

;/*
 Highstock JS v5.0.12 (2017-05-24)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(L,T){"object"===typeof module&&module.exports?module.exports=L.document?T(L):T:L.Highcharts=T(L)})("undefined"!==typeof window?window:this,function(L){L=function(){var a=window,E=a.document,B=a.navigator&&a.navigator.userAgent||"",F=E&&E.createElementNS&&!!E.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,D=/(edge|msie|trident)/i.test(B)&&!window.opera,n=!F,h=/Firefox/.test(B),u=h&&4>parseInt(B.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highstock",
version:"5.0.12",deg2rad:2*Math.PI/360,doc:E,hasBidiBug:u,hasTouch:E&&void 0!==E.documentElement.ontouchstart,isMS:D,isWebKit:/AppleWebKit/.test(B),isFirefox:h,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(B),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:F,vml:n,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){var E=[],B=a.charts,F=a.doc,D=a.win;a.error=function(n,h){n=a.isNumber(n)?"Highcharts error #"+
n+": www.highcharts.com/errors/"+n:n;if(h)throw Error(n);D.console&&console.log(n)};a.Fx=function(a,h,u){this.options=h;this.elem=a;this.prop=u};a.Fx.prototype={dSetter:function(){var a=this.paths[0],h=this.paths[1],u=[],r=this.now,x=a.length,t;if(1===r)u=this.toD;else if(x===h.length&&1>r)for(;x--;)t=parseFloat(a[x]),u[x]=isNaN(t)?a[x]:r*parseFloat(h[x]-t)+t;else u=h;this.elem.attr("d",u,null,!0)},update:function(){var a=this.elem,h=this.prop,u=this.now,r=this.options.step;if(this[h+"Setter"])this[h+
"Setter"]();else a.attr?a.element&&a.attr(h,u,null,!0):a.style[h]=u+this.unit;r&&r.call(a,u,this)},run:function(a,h,u){var r=this,n=function(a){return n.stopped?!1:r.step(a)},t;this.startTime=+new Date;this.start=a;this.end=h;this.unit=u;this.now=this.start;this.pos=0;n.elem=this.elem;n.prop=this.prop;n()&&1===E.push(n)&&(n.timerId=setInterval(function(){for(t=0;t<E.length;t++)E[t]()||E.splice(t--,1);E.length||clearInterval(n.timerId)},13))},step:function(n){var h=+new Date,u,r=this.options,x=this.elem,
t=r.complete,m=r.duration,f=r.curAnim;x.attr&&!x.element?n=!1:n||h>=m+this.startTime?(this.now=this.end,this.pos=1,this.update(),u=f[this.prop]=!0,a.objectEach(f,function(a){!0!==a&&(u=!1)}),u&&t&&t.call(x),n=!1):(this.pos=r.easing((h-this.startTime)/m),this.now=this.start+(this.end-this.start)*this.pos,this.update(),n=!0);return n},initPath:function(n,h,u){function r(a){var c,b;for(A=a.length;A--;)c="M"===a[A]||"L"===a[A],b=/[a-zA-Z]/.test(a[A+3]),c&&b&&a.splice(A+1,0,a[A+1],a[A+2],a[A+1],a[A+2])}
function x(a,c){for(;a.length<p;){a[0]=c[p-a.length];var b=a.slice(0,d);[].splice.apply(a,[0,0].concat(b));v&&(b=a.slice(a.length-d),[].splice.apply(a,[a.length,0].concat(b)),A--)}a[0]="M"}function t(a,c){for(var q=(p-a.length)/d;0<q&&q--;)b=a.slice().splice(a.length/H-d,d*H),b[0]=c[p-d-q*d],e&&(b[d-6]=b[d-2],b[d-5]=b[d-1]),[].splice.apply(a,[a.length/H,0].concat(b)),v&&q--}h=h||"";var m,f=n.startX,g=n.endX,e=-1<h.indexOf("C"),d=e?7:3,p,b,A;h=h.split(" ");u=u.slice();var v=n.isArea,H=v?2:1,q;e&&(r(h),
r(u));if(f&&g){for(A=0;A<f.length;A++)if(f[A]===g[0]){m=A;break}else if(f[0]===g[g.length-f.length+A]){m=A;q=!0;break}void 0===m&&(h=[])}h.length&&a.isNumber(m)&&(p=u.length+m*H*d,q?(x(h,u),t(u,h)):(x(u,h),t(h,u)));return[h,u]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.extend=function(a,h){var n;a||(a={});for(n in h)a[n]=h[n];return a};a.merge=function(){var n,h=arguments,u,r={},x=
function(h,m){"object"!==typeof h&&(h={});a.objectEach(m,function(f,g){!a.isObject(f,!0)||a.isClass(f)||a.isDOMElement(f)?h[g]=m[g]:h[g]=x(h[g]||{},f)});return h};!0===h[0]&&(r=h[1],h=Array.prototype.slice.call(h,2));u=h.length;for(n=0;n<u;n++)r=x(r,h[n]);return r};a.pInt=function(a,h){return parseInt(a,h||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(n,
h){return!!n&&"object"===typeof n&&(!h||!a.isArray(n))};a.isDOMElement=function(n){return a.isObject(n)&&"number"===typeof n.nodeType};a.isClass=function(n){var h=n&&n.constructor;return!(!a.isObject(n,!0)||a.isDOMElement(n)||!h||!h.name||"Object"===h.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,h){for(var n=a.length;n--;)if(a[n]===h){a.splice(n,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(n,h,u){var r;a.isString(h)?a.defined(u)?
n.setAttribute(h,u):n&&n.getAttribute&&(r=n.getAttribute(h)):a.defined(h)&&a.isObject(h)&&a.objectEach(h,function(a,h){n.setAttribute(h,a)});return r};a.splat=function(n){return a.isArray(n)?n:[n]};a.syncTimeout=function(a,h,u){if(h)return setTimeout(a,h,u);a.call(0,u)};a.pick=function(){var a=arguments,h,u,r=a.length;for(h=0;h<r;h++)if(u=a[h],void 0!==u&&null!==u)return u};a.css=function(n,h){a.isMS&&!a.svg&&h&&void 0!==h.opacity&&(h.filter="alpha(opacity\x3d"+100*h.opacity+")");a.extend(n.style,
h)};a.createElement=function(n,h,u,r,x){n=F.createElement(n);var t=a.css;h&&a.extend(n,h);x&&t(n,{padding:0,border:"none",margin:0});u&&t(n,u);r&&r.appendChild(n);return n};a.extendClass=function(n,h){var u=function(){};u.prototype=new n;a.extend(u.prototype,h);return u};a.pad=function(a,h,u){return Array((h||2)+1-String(a).length).join(u||0)+a};a.relativeLength=function(a,h){return/%$/.test(a)?h*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,h,u){var r=a[h];a[h]=function(){var a=Array.prototype.slice.call(arguments),
h=arguments,m=this;m.proceed=function(){r.apply(m,arguments.length?arguments:h)};a.unshift(r);a=u.apply(this,a);m.proceed=null;return a}};a.getTZOffset=function(n){var h=a.Date;return 6E4*(h.hcGetTimezoneOffset&&h.hcGetTimezoneOffset(n)||h.hcTimezoneOffset||0)};a.dateFormat=function(n,h,u){if(!a.defined(h)||isNaN(h))return a.defaultOptions.lang.invalidDate||"";n=a.pick(n,"%Y-%m-%d %H:%M:%S");var r=a.Date,x=new r(h-a.getTZOffset(h)),t=x[r.hcGetHours](),m=x[r.hcGetDay](),f=x[r.hcGetDate](),g=x[r.hcGetMonth](),
e=x[r.hcGetFullYear](),d=a.defaultOptions.lang,p=d.weekdays,b=d.shortWeekdays,A=a.pad,r=a.extend({a:b?b[m]:p[m].substr(0,3),A:p[m],d:A(f),e:A(f,2," "),w:m,b:d.shortMonths[g],B:d.months[g],m:A(g+1),y:e.toString().substr(2,2),Y:e,H:A(t),k:t,I:A(t%12||12),l:t%12||12,M:A(x[r.hcGetMinutes]()),p:12>t?"AM":"PM",P:12>t?"am":"pm",S:A(x.getSeconds()),L:A(Math.round(h%1E3),3)},a.dateFormats);a.objectEach(r,function(a,b){for(;-1!==n.indexOf("%"+b);)n=n.replace("%"+b,"function"===typeof a?a(h):a)});return u?n.substr(0,
1).toUpperCase()+n.substr(1):n};a.formatSingle=function(n,h){var u=/\.([0-9])/,r=a.defaultOptions.lang;/f$/.test(n)?(u=(u=n.match(u))?u[1]:-1,null!==h&&(h=a.numberFormat(h,u,r.decimalPoint,-1<n.indexOf(",")?r.thousandsSep:""))):h=a.dateFormat(n,h);return h};a.format=function(n,h){for(var u="{",r=!1,x,t,m,f,g=[],e;n;){u=n.indexOf(u);if(-1===u)break;x=n.slice(0,u);if(r){x=x.split(":");t=x.shift().split(".");f=t.length;e=h;for(m=0;m<f;m++)e=e[t[m]];x.length&&(e=a.formatSingle(x.join(":"),e));g.push(e)}else g.push(x);
n=n.slice(u+1);u=(r=!r)?"}":"{"}g.push(n);return g.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(n,h,u,r,x){var t,m=n;u=a.pick(u,1);t=n/u;h||(h=x?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===r&&(1===u?h=a.grep(h,function(a){return 0===a%1}):.1>=u&&(h=[1/u])));for(r=0;r<h.length&&!(m=h[r],x&&m*u>=n||!x&&t<=(h[r]+(h[r+1]||h[r]))/2);r++);return m=a.correctFloat(m*u,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=
function(a,h){var n=a.length,r,x;for(x=0;x<n;x++)a[x].safeI=x;a.sort(function(a,m){r=h(a,m);return 0===r?a.safeI-m.safeI:r});for(x=0;x<n;x++)delete a[x].safeI};a.arrayMin=function(a){for(var h=a.length,n=a[0];h--;)a[h]<n&&(n=a[h]);return n};a.arrayMax=function(a){for(var h=a.length,n=a[0];h--;)a[h]>n&&(n=a[h]);return n};a.destroyObjectProperties=function(n,h){a.objectEach(n,function(a,r){a&&a!==h&&a.destroy&&a.destroy();delete n[r]})};a.discardElement=function(n){var h=a.garbageBin;h||(h=a.createElement("div"));
n&&h.appendChild(n);h.innerHTML=""};a.correctFloat=function(a,h){return parseFloat(a.toPrecision(h||14))};a.setAnimation=function(n,h){h.renderer.globalAnimation=a.pick(n,h.options.chart.animation,!0)};a.animObject=function(n){return a.isObject(n)?a.merge(n):{duration:n?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(n,h,u,r){n=+n||0;h=+h;var x=a.defaultOptions.lang,t=(n.toString().split(".")[1]||"").length,
m,f;-1===h?h=Math.min(t,20):a.isNumber(h)||(h=2);f=(Math.abs(n)+Math.pow(10,-Math.max(h,t)-1)).toFixed(h);t=String(a.pInt(f));m=3<t.length?t.length%3:0;u=a.pick(u,x.decimalPoint);r=a.pick(r,x.thousandsSep);n=(0>n?"-":"")+(m?t.substr(0,m)+r:"");n+=t.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+r);h&&(n+=u+f.slice(-h));return n};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(n,h,u){if("width"===h)return Math.min(n.offsetWidth,n.scrollWidth)-a.getStyle(n,"padding-left")-
a.getStyle(n,"padding-right");if("height"===h)return Math.min(n.offsetHeight,n.scrollHeight)-a.getStyle(n,"padding-top")-a.getStyle(n,"padding-bottom");if(n=D.getComputedStyle(n,void 0))n=n.getPropertyValue(h),a.pick(u,!0)&&(n=a.pInt(n));return n};a.inArray=function(a,h){return h.indexOf?h.indexOf(a):[].indexOf.call(h,a)};a.grep=function(a,h){return[].filter.call(a,h)};a.find=function(a,h){return[].find.call(a,h)};a.map=function(a,h){for(var n=[],r=0,x=a.length;r<x;r++)n[r]=h.call(a[r],a[r],r,a);
return n};a.offset=function(a){var h=F.documentElement;a=a.getBoundingClientRect();return{top:a.top+(D.pageYOffset||h.scrollTop)-(h.clientTop||0),left:a.left+(D.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}};a.stop=function(a,h){for(var n=E.length;n--;)E[n].elem!==a||h&&h!==E[n].prop||(E[n].stopped=!0)};a.each=function(a,h,u){return Array.prototype.forEach.call(a,h,u)};a.objectEach=function(a,h,u){for(var r in a)a.hasOwnProperty(r)&&h.call(u,a[r],r,a)};a.addEvent=function(n,h,u){function r(a){a.target=
a.srcElement||D;u.call(n,a)}var x=n.hcEvents=n.hcEvents||{};n.addEventListener?n.addEventListener(h,u,!1):n.attachEvent&&(n.hcEventsIE||(n.hcEventsIE={}),n.hcEventsIE[u.toString()]=r,n.attachEvent("on"+h,r));x[h]||(x[h]=[]);x[h].push(u);return function(){a.removeEvent(n,h,u)}};a.removeEvent=function(n,h,u){function r(a,e){n.removeEventListener?n.removeEventListener(a,e,!1):n.attachEvent&&(e=n.hcEventsIE[e.toString()],n.detachEvent("on"+a,e))}function x(){var f,e;n.nodeName&&(h?(f={},f[h]=!0):f=m,
a.objectEach(f,function(a,f){if(m[f])for(e=m[f].length;e--;)r(f,m[f][e])}))}var t,m=n.hcEvents,f;m&&(h?(t=m[h]||[],u?(f=a.inArray(u,t),-1<f&&(t.splice(f,1),m[h]=t),r(h,u)):(x(),m[h]=[])):(x(),n.hcEvents={}))};a.fireEvent=function(n,h,u,r){var x;x=n.hcEvents;var t,m;u=u||{};if(F.createEvent&&(n.dispatchEvent||n.fireEvent))x=F.createEvent("Events"),x.initEvent(h,!0,!0),a.extend(x,u),n.dispatchEvent?n.dispatchEvent(x):n.fireEvent(h,x);else if(x)for(x=x[h]||[],t=x.length,u.target||a.extend(u,{preventDefault:function(){u.defaultPrevented=
!0},target:n,type:h}),h=0;h<t;h++)(m=x[h])&&!1===m.call(n,u)&&u.preventDefault();r&&!u.defaultPrevented&&r(u)};a.animate=function(n,h,u){var r,x="",t,m,f;a.isObject(u)||(f=arguments,u={duration:f[2],easing:f[3],complete:f[4]});a.isNumber(u.duration)||(u.duration=400);u.easing="function"===typeof u.easing?u.easing:Math[u.easing]||Math.easeInOutSine;u.curAnim=a.merge(h);a.objectEach(h,function(f,e){a.stop(n,e);m=new a.Fx(n,u,e);t=null;"d"===e?(m.paths=m.initPath(n,n.d,h.d),m.toD=h.d,r=0,t=1):n.attr?
r=n.attr(e):(r=parseFloat(a.getStyle(n,e))||0,"opacity"!==e&&(x="px"));t||(t=f);t&&t.match&&t.match("px")&&(t=t.replace(/px/g,""));m.run(r,t,x)})};a.seriesType=function(n,h,u,r,x){var t=a.getOptions(),m=a.seriesTypes;if(m[n])return a.error(27);t.plotOptions[n]=a.merge(t.plotOptions[h],u);m[n]=a.extendClass(m[h]||function(){},r);m[n].prototype.type=n;x&&(m[n].prototype.pointClass=a.extendClass(a.Point,x));return m[n]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),h=0;return function(){return"highcharts-"+
a+"-"+h++}}();D.jQuery&&(D.jQuery.fn.highcharts=function(){var n=[].slice.call(arguments);if(this[0])return n[0]?(new (a[a.isString(n[0])?n.shift():"Chart"])(this[0],n[0],n[1]),this):B[a.attr(this[0],"data-highcharts-chart")]});F&&!F.defaultView&&(a.getStyle=function(n,h){var u={width:"clientWidth",height:"clientHeight"}[h];if(n.style[h])return a.pInt(n.style[h]);"opacity"===h&&(h="filter");if(u)return n.style.zoom=1,Math.max(n[u]-2*a.getStyle(n,"padding"),0);n=n.currentStyle[h.replace(/\-(\w)/g,
function(a,h){return h.toUpperCase()})];"filter"===h&&(n=n.replace(/alpha\(opacity=([0-9]+)\)/,function(a,h){return h/100}));return""===n?1:a.pInt(n)});Array.prototype.forEach||(a.each=function(a,h,u){for(var r=0,n=a.length;r<n;r++)if(!1===h.call(u,a[r],r,a))return r});Array.prototype.indexOf||(a.inArray=function(a,h){var n,r=0;if(h)for(n=h.length;r<n;r++)if(h[r]===a)return r;return-1});Array.prototype.filter||(a.grep=function(a,h){for(var n=[],r=0,x=a.length;r<x;r++)h(a[r],r)&&n.push(a[r]);return n});
Array.prototype.find||(a.find=function(a,h){var n,r=a.length;for(n=0;n<r;n++)if(h(a[n],n))return a[n]})})(L);(function(a){var E=a.each,B=a.isNumber,F=a.map,D=a.merge,n=a.pInt;a.Color=function(h){if(!(this instanceof a.Color))return new a.Color(h);this.init(h)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[n(a[1]),n(a[2]),n(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[n(a[1]),n(a[2]),n(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(h){var n,r,x,t;if((this.input=h=this.names[h&&h.toLowerCase?h.toLowerCase():""]||h)&&h.stops)this.stops=F(h.stops,function(m){return new a.Color(m[1])});else if(h&&"#"===h[0]&&(n=h.length,h=parseInt(h.substr(1),16),7===n?r=[(h&16711680)>>16,(h&65280)>>8,h&255,1]:4===n&&(r=[(h&3840)>>4|(h&3840)>>8,(h&240)>>4|h&240,(h&15)<<4|h&15,1])),!r)for(x=this.parsers.length;x--&&
!r;)t=this.parsers[x],(n=t.regex.exec(h))&&(r=t.parse(n));this.rgba=r||[]},get:function(a){var h=this.input,r=this.rgba,n;this.stops?(n=D(h),n.stops=[].concat(n.stops),E(this.stops,function(h,m){n.stops[m]=[n.stops[m][0],h.get(a)]})):n=r&&B(r[0])?"rgb"===a||!a&&1===r[3]?"rgb("+r[0]+","+r[1]+","+r[2]+")":"a"===a?r[3]:"rgba("+r.join(",")+")":h;return n},brighten:function(a){var h,r=this.rgba;if(this.stops)E(this.stops,function(h){h.brighten(a)});else if(B(a)&&0!==a)for(h=0;3>h;h++)r[h]+=n(255*a),0>
r[h]&&(r[h]=0),255<r[h]&&(r[h]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,n){var h,x;a.rgba.length?(h=this.rgba,a=a.rgba,x=1!==a[3]||1!==h[3],a=(x?"rgba(":"rgb(")+Math.round(a[0]+(h[0]-a[0])*(1-n))+","+Math.round(a[1]+(h[1]-a[1])*(1-n))+","+Math.round(a[2]+(h[2]-a[2])*(1-n))+(x?","+(a[3]+(h[3]-a[3])*(1-n)):"")+")"):a=a.input||"none";return a}};a.color=function(h){return new a.Color(h)}})(L);(function(a){var E,B,F=a.addEvent,D=a.animate,n=a.attr,h=a.charts,
u=a.color,r=a.css,x=a.createElement,t=a.defined,m=a.deg2rad,f=a.destroyObjectProperties,g=a.doc,e=a.each,d=a.extend,p=a.erase,b=a.grep,A=a.hasTouch,v=a.inArray,H=a.isArray,q=a.isFirefox,J=a.isMS,c=a.isObject,w=a.isString,K=a.isWebKit,y=a.merge,G=a.noop,l=a.objectEach,I=a.pick,k=a.pInt,z=a.removeEvent,Q=a.stop,M=a.svg,N=a.SVG_NS,P=a.symbolSizes,O=a.win;E=a.SVGElement=function(){return this};d(E.prototype,{opacity:1,SVG_NS:N,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
init:function(a,k){this.element="span"===k?x(k):g.createElementNS(this.SVG_NS,k);this.renderer=a},animate:function(C,k,c){k=a.animObject(I(k,this.renderer.globalAnimation,!0));0!==k.duration?(c&&(k.complete=c),D(this,C,k)):(this.attr(C,null,c),k.step&&k.step.call(this));return this},colorGradient:function(C,k,c){var z=this.renderer,b,d,q,f,w,G,g,M,v,R,p=[],I;C.radialGradient?d="radialGradient":C.linearGradient&&(d="linearGradient");d&&(q=C[d],w=z.gradients,g=C.stops,R=c.radialReference,H(q)&&(C[d]=
q={x1:q[0],y1:q[1],x2:q[2],y2:q[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===d&&R&&!t(q.gradientUnits)&&(f=q,q=y(q,z.getRadialAttr(R,f),{gradientUnits:"userSpaceOnUse"})),l(q,function(a,C){"id"!==C&&p.push(C,a)}),l(g,function(a){p.push(a)}),p=p.join(","),w[p]?R=w[p].attr("id"):(q.id=R=a.uniqueKey(),w[p]=G=z.createElement(d).attr(q).add(z.defs),G.radAttr=f,G.stops=[],e(g,function(C){0===C[1].indexOf("rgba")?(b=a.color(C[1]),M=b.get("rgb"),v=b.get("a")):(M=C[1],v=1);C=z.createElement("stop").attr({offset:C[0],
"stop-color":M,"stop-opacity":v}).add(G);G.stops.push(C)})),I="url("+z.url+"#"+R+")",c.setAttribute(k,I),c.gradient=p,C.toString=function(){return I})},applyTextOutline:function(C){var k=this.element,c,z,l,b,d;-1!==C.indexOf("contrast")&&(C=C.replace(/contrast/g,this.renderer.getContrast(k.style.fill)));C=C.split(" ");z=C[C.length-1];if((l=C[0])&&"none"!==l&&a.svg){this.fakeTS=!0;C=[].slice.call(k.getElementsByTagName("tspan"));this.ySetter=this.xSetter;l=l.replace(/(^[\d\.]+)(.*?)$/g,function(a,
C,k){return 2*C+k});for(d=C.length;d--;)c=C[d],"highcharts-text-outline"===c.getAttribute("class")&&p(C,k.removeChild(c));b=k.firstChild;e(C,function(a,C){0===C&&(a.setAttribute("x",k.getAttribute("x")),C=k.getAttribute("y"),a.setAttribute("y",C||0),null===C&&k.setAttribute("y",0));a=a.cloneNode(1);n(a,{"class":"highcharts-text-outline",fill:z,stroke:z,"stroke-width":l,"stroke-linejoin":"round"});k.insertBefore(a,b)})}},attr:function(a,k,c,z){var C,b=this.element,d,q=this,e,y;"string"===typeof a&&
void 0!==k&&(C=a,a={},a[C]=k);"string"===typeof a?q=(this[a+"Getter"]||this._defaultGetter).call(this,a,b):(l(a,function(k,C){e=!1;z||Q(this,C);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(C)&&(d||(this.symbolAttr(a),d=!0),e=!0);!this.rotation||"x"!==C&&"y"!==C||(this.doTransform=!0);e||(y=this[C+"Setter"]||this._defaultSetter,y.call(this,k,C,b),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(C)&&this.updateShadows(C,k,y))},this),this.afterSetters());
c&&c();return q},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,k,c){for(var C=this.shadows,z=C.length;z--;)c.call(C[z],"height"===a?Math.max(k-(C[z].cutHeight||0),0):"d"===a?this.d:k,a,C[z])},addClass:function(a,k){var C=this.attr("class")||"";-1===C.indexOf(a)&&(k||(a=(C+(C?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==n(this.element,"class").indexOf(a)},removeClass:function(a){n(this.element,
"class",(n(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var k=this;e("x y r start end width height innerR anchorX anchorY".split(" "),function(C){k[C]=I(a[C],k[C])});k.attr({d:k.renderer.symbols[k.symbolName](k.x,k.y,k.width,k.height,k)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,k){var C=this,c={},z;k=k||a.strokeWidth||0;z=Math.round(k)%2/2;a.x=Math.floor(a.x||C.x||0)+z;a.y=Math.floor(a.y||C.y||
0)+z;a.width=Math.floor((a.width||C.width||0)-2*z);a.height=Math.floor((a.height||C.height||0)-2*z);t(a.strokeWidth)&&(a.strokeWidth=k);l(a,function(a,k){C[k]!==a&&(C[k]=c[k]=a)});return c},css:function(a){var C=this.styles,c={},z=this.element,b,q="",e,y=!C,f=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);C&&l(a,function(a,k){a!==C[k]&&(c[k]=a,y=!0)});y&&(C&&(a=d(C,c)),b=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===z.nodeName.toLowerCase()&&k(a.width),this.styles=a,b&&
!M&&this.renderer.forExport&&delete a.width,J&&!M?r(this.element,a):(e=function(a,k){return"-"+k.toLowerCase()},l(a,function(a,k){-1===v(k,f)&&(q+=k.replace(/([A-Z])/g,e)+":"+a+";")}),q&&n(z,"style",q)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,k){var C=this,c=C.element;A&&"click"===a?(c.ontouchstart=function(a){C.touchEventFired=
Date.now();a.preventDefault();k.call(c,a)},c.onclick=function(a){(-1===O.navigator.userAgent.indexOf("Android")||1100<Date.now()-(C.touchEventFired||0))&&k.call(c,a)}):c["on"+a]=k;return this},setRadialReference:function(a){var k=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;k&&k.radAttr&&k.animate(this.renderer.getRadialAttr(a,k.radAttr));return this},translate:function(a,k){return this.attr({translateX:a,translateY:k})},invert:function(a){this.inverted=a;this.updateTransform();
return this},updateTransform:function(){var a=this.translateX||0,k=this.translateY||0,c=this.scaleX,z=this.scaleY,l=this.inverted,b=this.rotation,d=this.element;l&&(a+=this.width,k+=this.height);a=["translate("+a+","+k+")"];l?a.push("rotate(90) scale(-1,1)"):b&&a.push("rotate("+b+" "+(d.getAttribute("x")||0)+" "+(d.getAttribute("y")||0)+")");(t(c)||t(z))&&a.push("scale("+I(c,1)+" "+I(z,1)+")");a.length&&d.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);
return this},align:function(a,k,c){var C,z,l,b,d={};z=this.renderer;l=z.alignedObjects;var q,e;if(a){if(this.alignOptions=a,this.alignByTranslate=k,!c||w(c))this.alignTo=C=c||"renderer",p(l,this),l.push(this),c=null}else a=this.alignOptions,k=this.alignByTranslate,C=this.alignTo;c=I(c,z[C],z);C=a.align;z=a.verticalAlign;l=(c.x||0)+(a.x||0);b=(c.y||0)+(a.y||0);"right"===C?q=1:"center"===C&&(q=2);q&&(l+=(c.width-(a.width||0))/q);d[k?"translateX":"x"]=Math.round(l);"bottom"===z?e=1:"middle"===z&&(e=
2);e&&(b+=(c.height-(a.height||0))/e);d[k?"translateY":"y"]=Math.round(b);this[this.placed?"animate":"attr"](d);this.placed=!0;this.alignAttr=d;return this},getBBox:function(a,k){var C,c=this.renderer,z,l=this.element,b=this.styles,q,y=this.textStr,f,w=c.cache,G=c.cacheKeys,g;k=I(k,this.rotation);z=k*m;q=b&&b.fontSize;void 0!==y&&(g=y.toString(),-1===g.indexOf("\x3c")&&(g=g.replace(/[0-9]/g,"0")),g+=["",k||0,q,b&&b.width,b&&b.textOverflow].join());g&&!a&&(C=w[g]);if(!C){if(l.namespaceURI===this.SVG_NS||
c.forExport){try{(f=this.fakeTS&&function(a){e(l.querySelectorAll(".highcharts-text-outline"),function(k){k.style.display=a})})&&f("none"),C=l.getBBox?d({},l.getBBox()):{width:l.offsetWidth,height:l.offsetHeight},f&&f("")}catch(W){}if(!C||0>C.width)C={width:0,height:0}}else C=this.htmlGetBBox();c.isSVG&&(a=C.width,c=C.height,b&&"11px"===b.fontSize&&17===Math.round(c)&&(C.height=c=14),k&&(C.width=Math.abs(c*Math.sin(z))+Math.abs(a*Math.cos(z)),C.height=Math.abs(c*Math.cos(z))+Math.abs(a*Math.sin(z))));
if(g&&0<C.height){for(;250<G.length;)delete w[G.shift()];w[g]||G.push(g);w[g]=C}}return C},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var k=this;k.animate({opacity:0},{duration:a||150,complete:function(){k.attr({y:-9999})}})},add:function(a){var k=this.renderer,c=this.element,C;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&k.buildText(this);this.added=!0;if(!a||
a.handleZ||this.zIndex)C=this.zIndexSetter();C||(a?a.element:k.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var k=a.parentNode;k&&k.removeChild(a)},destroy:function(){var a=this,k=a.element||{},c=a.renderer.isSVG&&"SPAN"===k.nodeName&&a.parentGroup,z=k.ownerSVGElement;k.onclick=k.onmouseout=k.onmouseover=k.onmousemove=k.point=null;Q(a);a.clipPath&&z&&(e(z.querySelectorAll("[clip-path]"),function(k){-1<k.getAttribute("clip-path").indexOf(a.clipPath.element.id+
")")&&k.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(z=0;z<a.stops.length;z++)a.stops[z]=a.stops[z].destroy();a.stops=null}a.safeRemoveChild(k);for(a.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)k=c.parentGroup,a.safeRemoveChild(c.div),delete c.div,c=k;a.alignTo&&p(a.renderer.alignedObjects,a);l(a,function(k,c){delete a[c]});return null},shadow:function(a,k,c){var C=[],z,l,b=this.element,d,q,e,y;if(!a)this.destroyShadows();else if(!this.shadows){q=I(a.width,
3);e=(a.opacity||.15)/q;y=this.parentInverted?"(-1,-1)":"("+I(a.offsetX,1)+", "+I(a.offsetY,1)+")";for(z=1;z<=q;z++)l=b.cloneNode(0),d=2*q+1-2*z,n(l,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":e*z,"stroke-width":d,transform:"translate"+y,fill:"none"}),c&&(n(l,"height",Math.max(n(l,"height")-d,0)),l.cutHeight=d),k?k.element.appendChild(l):b.parentNode.insertBefore(l,b),C.push(l);this.shadows=C}return this},destroyShadows:function(){e(this.shadows||[],function(a){this.safeRemoveChild(a)},
this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=I(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,k,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(k,a);this[k]=a},dashstyleSetter:function(a){var c,z=this["stroke-width"];"inherit"===z&&(z=1);if(a=a&&a.toLowerCase()){a=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(c=a.length;c--;)a[c]=k(a[c])*z;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,k,c){this[k]=
a;c.setAttribute(k,a)},titleSetter:function(a){var k=this.element.getElementsByTagName("title")[0];k||(k=g.createElementNS(this.SVG_NS,"title"),this.element.appendChild(k));k.firstChild&&k.removeChild(k.firstChild);k.appendChild(g.createTextNode(String(I(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,k,c){"string"===typeof a?c.setAttribute(k,a):a&&this.colorGradient(a,k,c)},
visibilitySetter:function(a,k,c){"inherit"===a?c.removeAttribute(k):c.setAttribute(k,a)},zIndexSetter:function(a,c){var z=this.renderer,l=this.parentGroup,C=(l||z).element||z.box,b,d=this.element,q;b=this.added;var e;t(a)&&(d.zIndex=a,a=+a,this[c]===a&&(b=!1),this[c]=a);if(b){(a=this.zIndex)&&l&&(l.handleZ=!0);c=C.childNodes;for(e=0;e<c.length&&!q;e++)l=c[e],b=l.zIndex,l!==d&&(k(b)>a||!t(a)&&t(b)||0>a&&!t(b)&&C!==z.box)&&(C.insertBefore(d,l),q=!0);q||C.appendChild(d)}return q},_defaultSetter:function(a,
k,c){c.setAttribute(k,a)}});E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=function(a,k){this[k]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,k,c){this[k]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===k&&0===a&&this.hasStroke&&(c.removeAttribute("stroke"),this.hasStroke=!1)};B=a.SVGRenderer=function(){this.init.apply(this,arguments)};d(B.prototype,{Element:E,SVG_NS:N,init:function(a,k,c,z,l,b){var C;z=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(z));C=z.element;a.appendChild(C);-1===a.innerHTML.indexOf("xmlns")&&n(C,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=C;this.boxWrapper=z;this.alignedObjects=[];this.url=(q||
K)&&g.getElementsByTagName("base").length?O.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(g.createTextNode("Created with Highstock 5.0.12"));this.defs=this.createElement("defs").add();this.allowHTML=b;this.forExport=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(k,c,!1);var d;q&&a.getBoundingClientRect&&(k=function(){r(a,{left:0,top:0});d=a.getBoundingClientRect();
r(a,{left:Math.ceil(d.left)-d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},k(),this.unSubPixelFix=F(O,"resize",k))},getStyle:function(a){return this.style=d({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();f(this.gradients||{});this.gradients=
null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var k=new this.Element;k.init(this,a);return k},draw:G,getRadialAttr:function(a,k){return{cx:a[0]-a[2]/2+k.cx*a[2],cy:a[1]-a[2]/2+k.cy*a[2],r:k.r*a[2]}},getSpanWidth:function(a,k){var c=a.getBBox(!0).width;!M&&this.forExport&&(c=this.measureSpanWidth(k.firstChild.data,a.styles));return c},applyEllipsis:function(a,k,c,z){var l=this.getSpanWidth(a,k),b=l>z,l=c,d,q=0,C=
c.length,e=function(a){k.removeChild(k.firstChild);a&&k.appendChild(g.createTextNode(a))};if(b){for(;q<=C;)d=Math.ceil((q+C)/2),l=c.substring(0,d)+"\u2026",e(l),l=this.getSpanWidth(a,k),q===C?q=C+1:l>z?C=d-1:q=d;0===C&&e("")}return b},buildText:function(a){var c=a.element,z=this,l=z.forExport,d=I(a.textStr,"").toString(),q=-1!==d.indexOf("\x3c"),C=c.childNodes,y,f,w,G,v=n(c,"x"),p=a.styles,J=a.textWidth,m=p&&p.lineHeight,A=p&&p.textOutline,H=p&&"ellipsis"===p.textOverflow,K=p&&"nowrap"===p.whiteSpace,
h=p&&p.fontSize,Q,t,x=C.length,p=J&&!a.added&&this.box,u=function(a){var l;l=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:h||z.style.fontSize||12;return m?k(m):z.fontMetrics(l,a.getAttribute("style")?a:c).h};Q=[d,H,K,m,A,h,J].join();if(Q!==a.textCache){for(a.textCache=Q;x--;)c.removeChild(C[x]);q||A||H||J||-1!==d.indexOf(" ")?(y=/<.*class="([^"]+)".*>/,f=/<.*style="([^"]+)".*>/,w=/<.*href="([^"]+)".*>/,p&&p.appendChild(c),d=q?d.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[d],d=b(d,function(a){return""!==a}),e(d,function(k,b){var d,q=0;k=k.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");d=k.split("|||");e(d,function(k){if(""!==k||1===d.length){var C={},e=g.createElementNS(z.SVG_NS,"tspan"),p,I;y.test(k)&&(p=k.match(y)[1],n(e,"class",p));f.test(k)&&(I=k.match(f)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),n(e,"style",I));w.test(k)&&!l&&(n(e,"onclick",'location.href\x3d"'+k.match(w)[1]+'"'),r(e,{cursor:"pointer"}));k=(k.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==k){e.appendChild(g.createTextNode(k));q?C.dx=0:b&&null!==v&&(C.x=v);n(e,C);c.appendChild(e);!q&&t&&(!M&&l&&r(e,{display:"block"}),n(e,"dy",u(e)));if(J){C=k.replace(/([^\^])-/g,"$1- ").split(" ");p=1<d.length||b||1<C.length&&!K;var m=[],A,h=u(e),Q=a.rotation;for(H&&(G=z.applyEllipsis(a,
e,k,J));!H&&p&&(C.length||m.length);)a.rotation=0,A=z.getSpanWidth(a,e),k=A>J,void 0===G&&(G=k),k&&1!==C.length?(e.removeChild(e.firstChild),m.unshift(C.pop())):(C=m,m=[],C.length&&!K&&(e=g.createElementNS(N,"tspan"),n(e,{dy:h,x:v}),I&&n(e,"style",I),c.appendChild(e)),A>J&&(J=A)),C.length&&e.appendChild(g.createTextNode(C.join(" ").replace(/- /g,"-")));a.rotation=Q}q++}}});t=t||c.childNodes.length}),G&&a.attr("title",a.textStr),p&&p.removeChild(c),A&&a.applyTextOutline&&a.applyTextOutline(A)):c.appendChild(g.createTextNode(d.replace(/&lt;/g,
"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=u(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,k,c,z,l,b,q,e,f){var C=this.label(a,k,c,f,null,null,null,null,"button"),w=0;C.attr(y({padding:8,r:2},l));var G,g,p,v;l=y({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},l);G=l.style;delete l.style;b=y(l,{fill:"#e6e6e6"},b);g=b.style;delete b.style;q=y(l,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},
q);p=q.style;delete q.style;e=y(l,{style:{color:"#cccccc"}},e);v=e.style;delete e.style;F(C.element,J?"mouseover":"mouseenter",function(){3!==w&&C.setState(1)});F(C.element,J?"mouseout":"mouseleave",function(){3!==w&&C.setState(w)});C.setState=function(a){1!==a&&(C.state=w=a);C.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);C.attr([l,b,q,e][a||0]).css([G,g,p,v][a||0])};C.attr(l).css(d({cursor:"default"},
G));return C.on("click",function(a){3!==w&&z.call(C,a)})},crispLine:function(a,k){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-k%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+k%2/2);return a},path:function(a){var k={fill:"none"};H(a)?k.d=a:c(a)&&d(k,a);return this.createElement("path").attr(k)},circle:function(a,k,z){a=c(a)?a:{x:a,y:k,r:z};k=this.createElement("circle");k.xSetter=k.ySetter=function(a,k,c){c.setAttribute("c"+k,a)};return k.attr(a)},arc:function(a,k,z,l,b,d){c(a)?(l=a,k=l.y,z=l.r,a=l.x):
l={innerR:l,start:b,end:d};a=this.symbol("arc",a,k,z,z,l);a.r=z;return a},rect:function(a,k,z,l,b,d){b=c(a)?a.r:b;var q=this.createElement("rect");a=c(a)?a:void 0===a?{}:{x:a,y:k,width:Math.max(z,0),height:Math.max(l,0)};void 0!==d&&(a.strokeWidth=d,a=q.crisp(a));a.fill="none";b&&(a.r=b);q.rSetter=function(a,k,c){n(c,{rx:a,ry:a})};return q.attr(a)},setSize:function(a,k,c){var z=this.alignedObjects,l=z.length;this.width=a;this.height=k;for(this.boxWrapper.animate({width:a,height:k},{step:function(){this.attr({viewBox:"0 0 "+
this.attr("width")+" "+this.attr("height")})},duration:I(c,!0)?void 0:0});l--;)z[l].align()},g:function(a){var k=this.createElement("g");return a?k.attr({"class":"highcharts-"+a}):k},image:function(a,k,c,z,l){var b={preserveAspectRatio:"none"};1<arguments.length&&d(b,{x:k,y:c,width:z,height:l});b=this.createElement("image").attr(b);b.element.setAttributeNS?b.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):b.element.setAttribute("hc-svg-href",a);return b},symbol:function(a,k,c,z,l,
b){var q=this,y,C=/^url\((.*?)\)$/,f=C.test(a),w=!f&&(this.symbols[a]?a:"circle"),G=w&&this.symbols[w],p=t(k)&&G&&G.call(this.symbols,Math.round(k),Math.round(c),z,l,b),v,M;G?(y=this.path(p),y.attr("fill","none"),d(y,{symbolName:w,x:k,y:c,width:z,height:l}),b&&d(y,b)):f&&(v=a.match(C)[1],y=this.image(v),y.imgwidth=I(P[v]&&P[v].width,b&&b.width),y.imgheight=I(P[v]&&P[v].height,b&&b.height),M=function(){y.attr({width:y.width,height:y.height})},e(["width","height"],function(a){y[a+"Setter"]=function(a,
k){var c={},z=this["img"+k],l="width"===k?"translateX":"translateY";this[k]=a;t(z)&&(this.element&&this.element.setAttribute(k,z),this.alignByTranslate||(c[l]=((this[k]||0)-z)/2,this.attr(c)))}}),t(k)&&y.attr({x:k,y:c}),y.isImg=!0,t(y.imgwidth)&&t(y.imgheight)?M():(y.attr({width:0,height:0}),x("img",{onload:function(){var a=h[q.chartIndex];0===this.width&&(r(this,{position:"absolute",top:"-999em"}),g.body.appendChild(this));P[v]={width:this.width,height:this.height};y.imgwidth=this.width;y.imgheight=
this.height;y.element&&M();this.parentNode&&this.parentNode.removeChild(this);q.imgCount--;if(!q.imgCount&&a&&a.onload)a.onload()},src:v}),this.imgCount++));return y},symbols:{circle:function(a,k,c,z){return this.arc(a+c/2,k+z/2,c/2,z/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,k,c,z){return["M",a,k,"L",a+c,k,a+c,k+z,a,k+z,"Z"]},triangle:function(a,k,c,z){return["M",a+c/2,k,"L",a+c,k+z,a,k+z,"Z"]},"triangle-down":function(a,k,c,z){return["M",a,k,"L",a+c,k,a+c/2,k+z,"Z"]},diamond:function(a,
k,c,z){return["M",a+c/2,k,"L",a+c,k+z/2,a+c/2,k+z,a,k+z/2,"Z"]},arc:function(a,k,c,z,l){var b=l.start,d=l.r||c,q=l.r||z||c,e=l.end-.001;c=l.innerR;z=l.open;var y=Math.cos(b),f=Math.sin(b),C=Math.cos(e),e=Math.sin(e);l=l.end-b<Math.PI?0:1;d=["M",a+d*y,k+q*f,"A",d,q,0,l,1,a+d*C,k+q*e];t(c)&&d.push(z?"M":"L",a+c*C,k+c*e,"A",c,c,0,l,0,a+c*y,k+c*f);d.push(z?"":"Z");return d},callout:function(a,k,c,z,l){var b=Math.min(l&&l.r||0,c,z),d=b+6,q=l&&l.anchorX;l=l&&l.anchorY;var e;e=["M",a+b,k,"L",a+c-b,k,"C",
a+c,k,a+c,k,a+c,k+b,"L",a+c,k+z-b,"C",a+c,k+z,a+c,k+z,a+c-b,k+z,"L",a+b,k+z,"C",a,k+z,a,k+z,a,k+z-b,"L",a,k+b,"C",a,k,a,k,a+b,k];q&&q>c?l>k+d&&l<k+z-d?e.splice(13,3,"L",a+c,l-6,a+c+6,l,a+c,l+6,a+c,k+z-b):e.splice(13,3,"L",a+c,z/2,q,l,a+c,z/2,a+c,k+z-b):q&&0>q?l>k+d&&l<k+z-d?e.splice(33,3,"L",a,l+6,a-6,l,a,l-6,a,k+b):e.splice(33,3,"L",a,z/2,q,l,a,z/2,a,k+b):l&&l>z&&q>a+d&&q<a+c-d?e.splice(23,3,"L",q+6,k+z,q,k+z+6,q-6,k+z,a+b,k+z):l&&0>l&&q>a+d&&q<a+c-d&&e.splice(3,3,"L",q-6,k,q,k-6,q+6,k,c-b,k);return e}},
clipRect:function(k,c,z,l){var b=a.uniqueKey(),d=this.createElement("clipPath").attr({id:b}).add(this.defs);k=this.rect(k,c,z,l,0).add(d);k.id=b;k.clipPath=d;k.count=0;return k},text:function(a,k,c,z){var l=!M&&this.forExport,b={};if(z&&(this.allowHTML||!this.forExport))return this.html(a,k,c);b.x=Math.round(k||0);c&&(b.y=Math.round(c));if(a||0===a)b.text=a;a=this.createElement("text").attr(b);l&&a.css({position:"absolute"});z||(a.xSetter=function(a,k,c){var z=c.getElementsByTagName("tspan"),l,b=
c.getAttribute(k),d;for(d=0;d<z.length;d++)l=z[d],l.getAttribute(k)===b&&l.setAttribute(k,a);c.setAttribute(k,a)});return a},fontMetrics:function(a,c){a=a||c&&c.style&&c.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?k(a):/em/.test(a)?parseFloat(a)*(c?this.fontMetrics(null,c.parentNode).f:16):12;c=24>a?a+3:Math.round(1.2*a);return{h:c,b:Math.round(.8*c),f:a}},rotCorr:function(a,k,c){var z=a;k&&c&&(z=Math.max(z*Math.cos(k*m),4));return{x:-a/3*Math.sin(k*m),y:z}},label:function(k,c,
l,b,q,f,w,G,g){var v=this,p=v.g("button"!==g&&"label"),M=p.text=v.text("",0,0,w).attr({zIndex:1}),C,I,J=0,m=3,A=0,H,h,K,Q,r,N={},n,x,u=/^url\((.*?)\)$/.test(b),P=u,R,V,U,O;g&&p.addClass("highcharts-"+g);P=u;R=function(){return(n||0)%2/2};V=function(){var a=M.element.style,k={};I=(void 0===H||void 0===h||r)&&t(M.textStr)&&M.getBBox();p.width=(H||I.width||0)+2*m+A;p.height=(h||I.height||0)+2*m;x=m+v.fontMetrics(a&&a.fontSize,M).b;P&&(C||(p.box=C=v.symbols[b]||u?v.symbol(b):v.rect(),C.addClass(("button"===
g?"":"highcharts-label-box")+(g?" highcharts-"+g+"-box":"")),C.add(p),a=R(),k.x=a,k.y=(G?-x:0)+a),k.width=Math.round(p.width),k.height=Math.round(p.height),C.attr(d(k,N)),N={})};U=function(){var a=A+m,k;k=G?0:x;t(H)&&I&&("center"===r||"right"===r)&&(a+={center:.5,right:1}[r]*(H-I.width));if(a!==M.x||k!==M.y)M.attr("x",a),void 0!==k&&M.attr("y",k);M.x=a;M.y=k};O=function(a,k){C?C.attr(a,k):N[a]=k};p.onAdd=function(){M.add(p);p.attr({text:k||0===k?k:"",x:c,y:l});C&&t(q)&&p.attr({anchorX:q,anchorY:f})};
p.widthSetter=function(k){H=a.isNumber(k)?k:null};p.heightSetter=function(a){h=a};p["text-alignSetter"]=function(a){r=a};p.paddingSetter=function(a){t(a)&&a!==m&&(m=p.padding=a,U())};p.paddingLeftSetter=function(a){t(a)&&a!==A&&(A=a,U())};p.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==J&&(J=a,I&&p.attr({x:K}))};p.textSetter=function(a){void 0!==a&&M.textSetter(a);V();U()};p["stroke-widthSetter"]=function(a,k){a&&(P=!0);n=this["stroke-width"]=a;O(k,a)};p.strokeSetter=p.fillSetter=p.rSetter=
function(a,k){"fill"===k&&a&&(P=!0);O(k,a)};p.anchorXSetter=function(a,k){q=p.anchorX=a;O(k,Math.round(a)-R()-K)};p.anchorYSetter=function(a,k){f=p.anchorY=a;O(k,a-Q)};p.xSetter=function(a){p.x=a;J&&(a-=J*((H||I.width)+2*m));K=Math.round(a);p.attr("translateX",K)};p.ySetter=function(a){Q=p.y=Math.round(a);p.attr("translateY",Q)};var B=p.css;return d(p,{css:function(a){if(a){var k={};a=y(a);e(p.textProps,function(c){void 0!==a[c]&&(k[c]=a[c],delete a[c])});M.css(k)}return B.call(p,a)},getBBox:function(){return{width:I.width+
2*m,height:I.height+2*m,x:I.x-m,y:I.y-m}},shadow:function(a){a&&(V(),C&&C.shadow(a));return p},destroy:function(){z(p.element,"mouseenter");z(p.element,"mouseleave");M&&(M=M.destroy());C&&(C=C.destroy());E.prototype.destroy.call(p);p=v=V=U=O=null}})}});a.Renderer=B})(L);(function(a){var E=a.attr,B=a.createElement,F=a.css,D=a.defined,n=a.each,h=a.extend,u=a.isFirefox,r=a.isMS,x=a.isWebKit,t=a.pInt,m=a.SVGRenderer,f=a.win,g=a.wrap;h(a.SVGElement.prototype,{htmlCss:function(a){var d=this.element;if(d=
a&&"SPAN"===d.tagName&&a.width)delete a.width,this.textWidth=d,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=h(this.styles,a);F(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,d=this.element,f=this.translateX||0,b=this.translateY||
0,g=this.x||0,v=this.y||0,m=this.textAlign||"left",q={left:0,center:.5,right:1}[m],J=this.styles;F(d,{marginLeft:f,marginTop:b});this.shadows&&n(this.shadows,function(a){F(a,{marginLeft:f+1,marginTop:b+1})});this.inverted&&n(d.childNodes,function(c){a.invertChild(c,d)});if("SPAN"===d.tagName){var c=this.rotation,w=t(this.textWidth),K=J&&J.whiteSpace,y=[c,m,d.innerHTML,this.textWidth,this.textAlign].join();y!==this.cTT&&(J=a.fontMetrics(d.style.fontSize).b,D(c)&&this.setSpanRotation(c,q,J),F(d,{width:"",
whiteSpace:K||"nowrap"}),d.offsetWidth>w&&/[ \-]/.test(d.textContent||d.innerText)&&F(d,{width:w+"px",display:"block",whiteSpace:K||"normal"}),this.getSpanCorrection(d.offsetWidth,J,q,c,m));F(d,{left:g+(this.xCorr||0)+"px",top:v+(this.yCorr||0)+"px"});x&&(J=d.offsetHeight);this.cTT=y}}else this.alignOnAdd=!0},setSpanRotation:function(a,d,p){var b={},e=r?"-ms-transform":x?"-webkit-transform":u?"MozTransform":f.opera?"-o-transform":"";b[e]=b.transform="rotate("+a+"deg)";b[e+(u?"Origin":"-origin")]=
b.transformOrigin=100*d+"% "+p+"px";F(this.element,b)},getSpanCorrection:function(a,d,f){this.xCorr=-a*f;this.yCorr=-d}});h(m.prototype,{html:function(a,d,f){var b=this.createElement("span"),e=b.element,p=b.renderer,m=p.isSVG,q=function(a,c){n(["opacity","visibility"],function(b){g(a,b+"Setter",function(a,b,d,l){a.call(this,b,d,l);c[d]=b})})};b.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;b.htmlUpdateTransform()};m&&q(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=
b.rotationSetter=function(a,c){"align"===c&&(c="textAlign");b[c]=a;b.htmlUpdateTransform()};b.attr({text:a,x:Math.round(d),y:Math.round(f)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});e.style.whiteSpace="nowrap";b.css=b.htmlCss;m&&(b.add=function(a){var c,d=p.box.parentNode,f=[];if(this.parentGroup=a){if(c=a.div,!c){for(;a;)f.push(a),a=a.parentGroup;n(f.reverse(),function(a){var e,l=E(a.element,"class");l&&(l={className:l});c=a.div=a.div||B("div",l,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},c||d);e=c.style;h(a,{on:function(){b.on.apply({element:f[0].div},arguments);return a},translateXSetter:function(c,k){e.left=c+"px";a[k]=c;a.doTransform=!0},translateYSetter:function(c,k){e.top=c+"px";a[k]=c;a.doTransform=!0}});q(a,e)})}}else c=d;c.appendChild(e);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(L);(function(a){var E,B,F=
a.createElement,D=a.css,n=a.defined,h=a.deg2rad,u=a.discardElement,r=a.doc,x=a.each,t=a.erase,m=a.extend;E=a.extendClass;var f=a.isArray,g=a.isNumber,e=a.isObject,d=a.merge;B=a.noop;var p=a.pick,b=a.pInt,A=a.SVGElement,v=a.SVGRenderer,H=a.win;a.svg||(B={docMode8:r&&8===r.documentMode,init:function(a,b){var c=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],d=["position: ","absolute",";"],q="div"===b;("shape"===b||q)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",q?"hidden":"visible");
c.push(' style\x3d"',d.join(""),'"/\x3e');b&&(c=q||"span"===b||"img"===b?c.join(""):a.prepVML(c),this.element=F(c));this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,q=a&&a.inverted,d=a?a.element||a:d;a&&(this.parentGroup=a);q&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:A.prototype.htmlUpdateTransform,
setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*h),c=Math.sin(a*h);D(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-c,", M21\x3d",c,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var q=d?Math.cos(d*h):1,f=d?Math.sin(d*h):0,l=p(this.elemHeight,this.element.offsetHeight),w;this.xCorr=0>q&&-a;this.yCorr=0>f&&-l;w=0>q*f;this.xCorr+=f*b*(w?1-c:c);this.yCorr-=q*b*(d?w?c:1-c:1);e&&"left"!==
e&&(this.xCorr-=a*c*(0>q?-1:1),d&&(this.yCorr-=l*c*(0>f?-1:1)),D(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)g(a[b])?c[b]=Math.round(10*a[b])-5:"Z"===a[b]?c[b]="x":(c[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1)));return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,t(c,b),c.push(b),b.destroyClip=function(){t(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),
a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:A.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&u(a)},destroy:function(){this.destroyClip&&this.destroyClip();return A.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=H.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,d){var c;a=a.split(/[ ,]/);c=a.length;if(9===c||11===c)a[c-4]=a[c-2]=b(a[c-2])-10*d;return a.join(" ")},shadow:function(a,d,c){var e=[],q,f=this.element,
g=this.renderer,l,v=f.style,k,z=f.path,m,M,A,J;z&&"string"!==typeof z.value&&(z="x");M=z;if(a){A=p(a.width,3);J=(a.opacity||.15)/A;for(q=1;3>=q;q++)m=2*A+1-2*q,c&&(M=this.cutOffPath(z.value,m+.5)),k=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',m,'" filled\x3d"false" path\x3d"',M,'" coordsize\x3d"10 10" style\x3d"',f.style.cssText,'" /\x3e'],l=F(g.prepVML(k),null,{left:b(v.left)+p(a.offsetX,1),top:b(v.top)+p(a.offsetY,1)}),c&&(l.cutOff=m+1),k=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',
J*q,'"/\x3e'],F(g.prepVML(k),null,null,l),d?d.element.appendChild(l):f.parentNode.insertBefore(l,f),e.push(l);this.shadows=e}return this},updateShadows:B,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||F(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows;
a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;"SPAN"===d?c.style.color=a:"IMG"!==d&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){F(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,c)},opacitySetter:B,rotationSetter:function(a,b,c){c=
c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*h)+1)+"px";c.top=Math.round(Math.cos(a*h))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;g(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&x(this.shadows,function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===a?"-999em":
0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}},B["stroke-opacitySetter"]=B["fill-opacitySetter"],a.VMLElement=B=E(A,B),B.prototype.ySetter=B.prototype.widthSetter=B.prototype.heightSetter=B.prototype.xSetter,B={Element:B,isIE8:-1<H.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,c){var d,
e;this.alignedObjects=[];d=this.createElement("div").css({position:"relative"});e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!r.namespaces.hcv){r.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{r.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(y){r.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var f=this.createElement(),q=e(a);return m(f,{members:[],count:0,left:(q?a.x:a)+1,top:(q?a.y:b)+1,width:(q?a.width:c)-1,height:(q?a.height:d)-1,getCSS:function(a){var c=a.element,b=c.nodeName,k=a.inverted,z=this.top-("shape"===b?c.offsetTop:0),d=this.left,c=d+this.width,e=z+this.height,z={clip:"rect("+Math.round(k?d:z)+"px,"+Math.round(k?e:c)+"px,"+Math.round(k?c:e)+"px,"+Math.round(k?z:d)+"px)"};!k&&a.docMode8&&"DIV"===b&&
m(z,{width:c+"px",height:e+"px"});return z},updateClipping:function(){x(f.members,function(a){a.element&&a.css(f.getCSS(a))})}})},color:function(b,d,c,e){var f=this,y,q=/^rgba/,l,p,k="none";b&&b.linearGradient?p="gradient":b&&b.radialGradient&&(p="pattern");if(p){var z,g,v=b.linearGradient||b.radialGradient,w,m,A,C,H,h="";b=b.stops;var J,r=[],n=function(){l=['\x3cfill colors\x3d"'+r.join(",")+'" opacity\x3d"',A,'" o:opacity2\x3d"',m,'" type\x3d"',p,'" ',h,'focus\x3d"100%" method\x3d"any" /\x3e'];
F(f.prepVML(l),null,null,d)};w=b[0];J=b[b.length-1];0<w[0]&&b.unshift([0,w[1]]);1>J[0]&&b.push([1,J[1]]);x(b,function(k,c){q.test(k[1])?(y=a.color(k[1]),z=y.get("rgb"),g=y.get("a")):(z=k[1],g=1);r.push(100*k[0]+"% "+z);c?(A=g,C=z):(m=g,H=z)});if("fill"===c)if("gradient"===p)c=v.x1||v[0]||0,b=v.y1||v[1]||0,w=v.x2||v[2]||0,v=v.y2||v[3]||0,h='angle\x3d"'+(90-180*Math.atan((v-b)/(w-c))/Math.PI)+'"',n();else{var k=v.r,t=2*k,u=2*k,B=v.cx,E=v.cy,D=d.radialReference,S,k=function(){D&&(S=e.getBBox(),B+=(D[0]-
S.x)/S.width-.5,E+=(D[1]-S.y)/S.height-.5,t*=D[2]/S.width,u*=D[2]/S.height);h='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+t+","+u+'" origin\x3d"0.5,0.5" position\x3d"'+B+","+E+'" color2\x3d"'+H+'" ';n()};e.added?k():e.onAdd=k;k=C}else k=z}else q.test(b)&&"IMG"!==d.tagName?(y=a.color(b),e[c+"-opacitySetter"](y.get("a"),c,d),k=y.get("rgb")):(k=d.getElementsByTagName(c),k.length&&(k[0].opacity=1,k[0].type="solid"),k=b);return k},prepVML:function(a){var b=this.isIE8;a=a.join("");
b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:v.prototype.html,path:function(a){var b={coordsize:"10 10"};f(a)?b.d=a:e(a)&&m(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");
e(a)&&(c=a.r,b=a.y,a=a.x);d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});1<arguments.length&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return"rect"===a?this.symbol(a):v.prototype.createElement.call(this,a)},invertChild:function(a,d){var c=this;d=d.style;var e="IMG"===a.tagName&&a.style;
D(a,{flip:"x",left:b(d.width)-(e?b(e.top):1),top:b(d.height)-(e?b(e.left):1),rotation:-90});x(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,p=e.end,l=e.r||c||d;c=e.innerR;d=Math.cos(f);var g=Math.sin(f),k=Math.cos(p),z=Math.sin(p);if(0===p-f)return["x"];f=["wa",a-l,b-l,a+l,b+l,a+l*d,b+l*g,a+l*k,b+l*z];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*k,b+c*z,a+c*d,b+c*g,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&n(e.r)&&
(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return v.prototype.symbols[n(e)&&e.r?"callout":"square"].call(0,a,b,c,d,e)}}},a.VMLRenderer=E=function(){this.init.apply(this,arguments)},E.prototype=d(v.prototype,B),a.Renderer=E);v.prototype.measureSpanWidth=function(a,b){var c=r.createElement("span");a=r.createTextNode(a);c.appendChild(a);D(c,b);this.box.appendChild(c);b=c.offsetWidth;u(c);return b}})(L);(function(a){function E(){var h=
a.defaultOptions.global,n=r.moment;if(h.timezone){if(n)return function(a){return-n.tz(a,h.timezone).utcOffset()};a.error(25)}return h.useUTC&&h.getTimezoneOffset}function B(){var h=a.defaultOptions.global,t,m=h.useUTC,f=m?"getUTC":"get",g=m?"setUTC":"set";a.Date=t=h.Date||r.Date;t.hcTimezoneOffset=m&&h.timezoneOffset;t.hcGetTimezoneOffset=E();t.hcMakeTime=function(a,d,f,b,g,v){var e;m?(e=t.UTC.apply(0,arguments),e+=n(e)):e=(new t(a,d,u(f,1),u(b,0),u(g,0),u(v,0))).getTime();return e};D("Minutes Hours Day Date Month FullYear".split(" "),
function(a){t["hcGet"+a]=f+a});D("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){t["hcSet"+a]=g+a})}var F=a.color,D=a.each,n=a.getTZOffset,h=a.merge,u=a.pick,r=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.12/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},
itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,
animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:F("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(r){a.defaultOptions=h(!0,a.defaultOptions,r);B();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;B()})(L);
(function(a){var E=a.correctFloat,B=a.defined,F=a.destroyObjectProperties,D=a.isNumber,n=a.merge,h=a.pick,u=a.deg2rad;a.Tick=function(a,h,n,m){this.axis=a;this.pos=h;this.type=n||"";this.isNewLabel=this.isNew=!0;n||m||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,x=a.options,t=a.chart,m=a.categories,f=a.names,g=this.pos,e=x.labels,d=a.tickPositions,p=g===d[0],b=g===d[d.length-1],f=m?h(m[g],f[g],g):g,m=this.label,d=d.info,A;a.isDatetimeAxis&&d&&(A=x.dateTimeLabelFormats[d.higherRanks[g]||
d.unitName]);this.isFirst=p;this.isLast=b;x=a.labelFormatter.call({axis:a,chart:t,isFirst:p,isLast:b,dateTimeLabelFormat:A,value:a.isLog?E(a.lin2log(f)):f});B(m)?m&&m.attr({text:x}):(this.labelLength=(this.label=m=B(x)&&e.enabled?t.renderer.text(x,0,0,e.useHTML).css(n(e.style)).add(a.labelGroup):null)&&m.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var r=this.axis,n=a.x,m=r.chart.chartWidth,
f=r.chart.spacing,g=h(r.labelLeft,Math.min(r.pos,f[3])),f=h(r.labelRight,Math.max(r.pos+r.len,m-f[1])),e=this.label,d=this.rotation,p={left:0,center:.5,right:1}[r.labelAlign],b=e.getBBox().width,A=r.getSlotWidth(),v=A,H=1,q,J={};if(d)0>d&&n-p*b<g?q=Math.round(n/Math.cos(d*u)-g):0<d&&n+p*b>f&&(q=Math.round((m-n)/Math.cos(d*u)));else if(m=n+(1-p)*b,n-p*b<g?v=a.x+v*(1-p)-g:m>f&&(v=f-a.x+v*p,H=-1),v=Math.min(A,v),v<A&&"center"===r.labelAlign&&(a.x+=H*(A-v-p*(A-Math.min(b,v)))),b>v||r.autoRotation&&(e.styles||
{}).width)q=v;q&&(J.width=q,(r.options.labels.style||{}).textOverflow||(J.textOverflow="ellipsis"),e.css(J))},getPosition:function(a,h,n,m){var f=this.axis,g=f.chart,e=m&&g.oldChartHeight||g.chartHeight;return{x:a?f.translate(h+n,null,null,m)+f.transB:f.left+f.offset+(f.opposite?(m&&g.oldChartWidth||g.chartWidth)-f.right-f.left:0),y:a?e-f.bottom+f.offset-(f.opposite?f.height:0):e-f.translate(h+n,null,null,m)-f.transB}},getLabelPosition:function(a,h,n,m,f,g,e,d){var p=this.axis,b=p.transA,A=p.reversed,
v=p.staggerLines,H=p.tickRotCorr||{x:0,y:0},q=f.y;B(q)||(q=0===p.side?n.rotation?-8:-n.getBBox().height:2===p.side?H.y+8:Math.cos(n.rotation*u)*(H.y-n.getBBox(!1,0).height/2));a=a+f.x+H.x-(g&&m?g*b*(A?-1:1):0);h=h+q-(g&&!m?g*b*(A?1:-1):0);v&&(n=e/(d||1)%v,p.opposite&&(n=v-n-1),h+=p.labelOffset/v*n);return{x:a,y:Math.round(h)}},getMarkPath:function(a,h,n,m,f,g){return g.crispLine(["M",a,h,"L",a+(f?0:-n),h+(f?n:0)],m)},renderGridLine:function(a,h,n){var m=this.axis,f=m.options,g=this.gridLine,e={},
d=this.pos,p=this.type,b=m.tickmarkOffset,A=m.chart.renderer,v=p?p+"Grid":"grid",H=f[v+"LineWidth"],q=f[v+"LineColor"],f=f[v+"LineDashStyle"];g||(e.stroke=q,e["stroke-width"]=H,f&&(e.dashstyle=f),p||(e.zIndex=1),a&&(e.opacity=0),this.gridLine=g=A.path().attr(e).addClass("highcharts-"+(p?p+"-":"")+"grid-line").add(m.gridGroup));if(!a&&g&&(a=m.getPlotLinePath(d+b,g.strokeWidth()*n,a,!0)))g[this.isNew?"attr":"animate"]({d:a,opacity:h})},renderMark:function(a,n,t){var m=this.axis,f=m.options,g=m.chart.renderer,
e=this.type,d=e?e+"Tick":"tick",p=m.tickSize(d),b=this.mark,A=!b,v=a.x;a=a.y;var H=h(f[d+"Width"],!e&&m.isXAxis?1:0),f=f[d+"Color"];p&&(m.opposite&&(p[0]=-p[0]),A&&(this.mark=b=g.path().addClass("highcharts-"+(e?e+"-":"")+"tick").add(m.axisGroup),b.attr({stroke:f,"stroke-width":H})),b[A?"attr":"animate"]({d:this.getMarkPath(v,a,p[0],b.strokeWidth()*t,m.horiz,g),opacity:n}))},renderLabel:function(a,n,t,m){var f=this.axis,g=f.horiz,e=f.options,d=this.label,p=e.labels,b=p.step,A=f.tickmarkOffset,v=!0,
H=a.x;a=a.y;d&&D(H)&&(d.xy=a=this.getLabelPosition(H,a,d,g,p,A,m,b),this.isFirst&&!this.isLast&&!h(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!h(e.showLastLabel,1)?v=!1:!g||f.isRadial||p.step||p.rotation||n||0===t||this.handleOverflow(a),b&&m%b&&(v=!1),v&&D(a.y)?(a.opacity=t,d[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(d.attr("y",-9999),this.isNewLabel=!0),this.isNew=!1)},render:function(a,n,t){var m=this.axis,f=m.horiz,g=this.getPosition(f,this.pos,m.tickmarkOffset,n),e=g.x,
d=g.y,m=f&&e===m.pos+m.len||!f&&d===m.pos?-1:1;t=h(t,1);this.isActive=!0;this.renderGridLine(n,t,m);this.renderMark(g,t,m);this.renderLabel(g,n,t,a)},destroy:function(){F(this,this.axis)}}})(L);var T=function(a){var E=a.addEvent,B=a.animObject,F=a.arrayMax,D=a.arrayMin,n=a.color,h=a.correctFloat,u=a.defaultOptions,r=a.defined,x=a.deg2rad,t=a.destroyObjectProperties,m=a.each,f=a.extend,g=a.fireEvent,e=a.format,d=a.getMagnitude,p=a.grep,b=a.inArray,A=a.isArray,v=a.isNumber,H=a.isString,q=a.merge,J=
a.normalizeTickInterval,c=a.objectEach,w=a.pick,K=a.removeEvent,y=a.splat,G=a.syncTimeout,l=a.Tick,I=function(){this.init.apply(this,arguments)};a.extend(I.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,
startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,
formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,z){var k=z.isX,l=this;l.chart=a;l.horiz=
a.inverted&&!l.isZAxis?!k:k;l.isXAxis=k;l.coll=l.coll||(k?"xAxis":"yAxis");l.opposite=z.opposite;l.side=z.side||(l.horiz?l.opposite?0:2:l.opposite?1:3);l.setOptions(z);var d=this.options,e=d.type;l.labelFormatter=d.labels.formatter||l.defaultLabelFormatter;l.userOptions=z;l.minPixelPadding=0;l.reversed=d.reversed;l.visible=!1!==d.visible;l.zoomEnabled=!1!==d.zoomEnabled;l.hasNames="category"===e||!0===d.categories;l.categories=d.categories||l.hasNames;l.names=l.names||[];l.plotLinesAndBandsGroups=
{};l.isLog="logarithmic"===e;l.isDatetimeAxis="datetime"===e;l.positiveValuesOnly=l.isLog&&!l.allowNegativeLog;l.isLinked=r(d.linkedTo);l.ticks={};l.labelEdge=[];l.minorTicks={};l.plotLinesAndBands=[];l.alternateBands={};l.len=0;l.minRange=l.userMinRange=d.minRange||d.maxZoom;l.range=d.range;l.offset=d.offset||0;l.stacks={};l.oldStacks={};l.stacksTouched=0;l.max=null;l.min=null;l.crosshair=w(d.crosshair,y(a.options.tooltip.crosshairs)[k?0:1],!1);z=l.options.events;-1===b(l,a.axes)&&(k?a.axes.splice(a.xAxis.length,
0,l):a.axes.push(l),a[l.coll].push(l));l.series=l.series||[];a.inverted&&!l.isZAxis&&k&&void 0===l.reversed&&(l.reversed=!0);c(z,function(a,k){E(l,k,a)});l.lin2log=d.linearToLogConverter||l.lin2log;l.isLog&&(l.val2lin=l.log2lin,l.lin2val=l.lin2log)},setOptions:function(a){this.options=q(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],q(u[this.coll],a))},
defaultLabelFormatter:function(){var k=this.axis,c=this.value,b=k.categories,l=this.dateTimeLabelFormat,d=u.lang,f=d.numericSymbols,d=d.numericSymbolMagnitude||1E3,y=f&&f.length,p,g=k.options.labels.format,k=k.isLog?Math.abs(c):k.tickInterval;if(g)p=e(g,this);else if(b)p=c;else if(l)p=a.dateFormat(l,c);else if(y&&1E3<=k)for(;y--&&void 0===p;)b=Math.pow(d,y+1),k>=b&&0===10*c%b&&null!==f[y]&&0!==c&&(p=a.numberFormat(c/b,-1)+f[y]);void 0===p&&(p=1E4<=Math.abs(c)?a.numberFormat(c,-1):a.numberFormat(c,
-1,void 0,""));return p},getSeriesExtremes:function(){var a=this,c=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();m(a.series,function(k){if(k.visible||!c.options.chart.ignoreHiddenSeries){var b=k.options,l=b.threshold,z;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=l&&(l=null);if(a.isXAxis)b=k.xData,b.length&&(k=D(b),v(k)||k instanceof Date||(b=p(b,function(a){return v(a)}),k=D(b)),a.dataMin=Math.min(w(a.dataMin,b[0]),
k),a.dataMax=Math.max(w(a.dataMax,b[0]),F(b)));else if(k.getExtremes(),z=k.dataMax,k=k.dataMin,r(k)&&r(z)&&(a.dataMin=Math.min(w(a.dataMin,k),k),a.dataMax=Math.max(w(a.dataMax,z),z)),r(l)&&(a.threshold=l),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,c,b,l,d,e){var k=this.linkedParent||this,z=1,f=0,y=l?k.oldTransA:k.transA;l=l?k.oldMin:k.min;var p=k.minPixelPadding;d=(k.isOrdinal||k.isBroken||k.isLog&&d)&&k.lin2val;y||(y=k.transA);b&&(z*=-1,f=k.len);k.reversed&&
(z*=-1,f-=z*(k.sector||k.len));c?(a=(a*z+f-p)/y+l,d&&(a=k.lin2val(a))):(d&&(a=k.val2lin(a)),a=z*(a-l)*y+f+z*p+(v(e)?y*e:0));return a},toPixels:function(a,c){return this.translate(a,!1,!this.horiz,null,!0)+(c?0:this.pos)},toValue:function(a,c){return this.translate(a-(c?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,c,b,l,d){var k=this.chart,z=this.left,e=this.top,f,y,p=b&&k.oldChartHeight||k.chartHeight,g=b&&k.oldChartWidth||k.chartWidth,q;f=this.transB;var G=function(a,k,c){if(a<
k||a>c)l?a=Math.min(Math.max(k,a),c):q=!0;return a};d=w(d,this.translate(a,null,null,b));a=b=Math.round(d+f);f=y=Math.round(p-d-f);v(d)?this.horiz?(f=e,y=p-this.bottom,a=b=G(a,z,z+this.width)):(a=z,b=g-this.right,f=y=G(f,e,e+this.height)):q=!0;return q&&!l?null:k.renderer.crispLine(["M",a,f,"L",b,y],c||1)},getLinearTickPositions:function(a,c,b){var k,l=h(Math.floor(c/a)*a);b=h(Math.ceil(b/a)*a);var z=[];if(this.single)return[c];for(c=l;c<=b;){z.push(c);c=h(c+a);if(c===k)break;k=c}return z},getMinorTickPositions:function(){var a=
this,c=a.options,b=a.tickPositions,l=a.minorTickInterval,d=[],e=a.pointRangePadding||0,f=a.min-e,e=a.max+e,y=e-f;if(y&&y/l<a.len/3)if(a.isLog)m(this.paddedTicks,function(k,c,b){c&&d.push.apply(d,a.getLogTickPositions(l,b[c-1],b[c],!0))});else if(a.isDatetimeAxis&&"auto"===c.minorTickInterval)d=d.concat(a.getTimeTicks(a.normalizeTimeTickInterval(l),f,e,c.startOfWeek));else for(c=f+(b[0]-f)%l;c<=e&&c!==d[0];c+=l)d.push(c);0!==d.length&&a.trimTicks(d);return d},adjustForMinRange:function(){var a=this.options,
c=this.min,b=this.max,l,d,e,f,y,p,g,v;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(r(a.min)||r(a.max)?this.minRange=null:(m(this.series,function(a){p=a.xData;for(f=g=a.xIncrement?1:p.length-1;0<f;f--)if(y=p[f]-p[f-1],void 0===e||y<e)e=y}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));b-c<this.minRange&&(d=this.dataMax-this.dataMin>=this.minRange,v=this.minRange,l=(v-b+c)/2,l=[c-l,w(a.min,c-l)],d&&(l[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),c=F(l),b=[c+v,w(a.max,c+v)],
d&&(b[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),b=D(b),b-c<v&&(l[0]=b-v,l[1]=w(a.min,b-v),c=F(l)));this.min=c;this.max=b},getClosest:function(){var a;this.categories?a=1:m(this.series,function(k){var c=k.closestPointRange,b=k.visible||!k.chart.options.chart.ignoreHiddenSeries;!k.noSharedTooltip&&r(c)&&b&&(a=r(a)?Math.min(a,c):c)});return a},nameToX:function(a){var k=A(this.categories),c=k?this.categories:this.names,l=a.options.x,d;a.series.requireSorting=!1;r(l)||(l=!1===this.options.uniqueNames?
a.series.autoIncrement():b(a.name,c));-1===l?k||(d=c.length):d=l;void 0!==d&&(this.names[d]=a.name);return d},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,m(this.series||[],function(k){k.xIncrement=null;if(!k.points||k.isDirtyData)k.processData(),k.generatePoints();m(k.points,function(c,b){var l;c.options&&(l=a.nameToX(c),void 0!==l&&l!==c.x&&(c.x=l,k.xData[b]=l))})}))},setAxisTranslation:function(a){var k=this,c=k.max-k.min,b=k.axisPointRange||
0,l,d=0,e=0,f=k.linkedParent,y=!!k.categories,p=k.transA,g=k.isXAxis;if(g||y||b)l=k.getClosest(),f?(d=f.minPointOffset,e=f.pointRangePadding):m(k.series,function(a){var c=y?1:g?w(a.options.pointRange,l,0):k.axisPointRange||0;a=a.options.pointPlacement;b=Math.max(b,c);k.single||(d=Math.max(d,H(a)?0:c/2),e=Math.max(e,"on"===a?0:c))}),f=k.ordinalSlope&&l?k.ordinalSlope/l:1,k.minPointOffset=d*=f,k.pointRangePadding=e*=f,k.pointRange=Math.min(b,c),g&&(k.closestPointRange=l);a&&(k.oldTransA=p);k.translationSlope=
k.transA=p=k.options.staticScale||k.len/(c+e||1);k.transB=k.horiz?k.left:k.bottom;k.minPixelPadding=p*d},minFromRange:function(){return this.max-this.range},setTickInterval:function(k){var c=this,b=c.chart,l=c.options,e=c.isLog,f=c.log2lin,y=c.isDatetimeAxis,p=c.isXAxis,q=c.isLinked,G=l.maxPadding,I=l.minPadding,A=l.tickInterval,H=l.tickPixelInterval,n=c.categories,K=c.threshold,t=c.softThreshold,u,x,B,D;y||n||q||this.getTickAmount();B=w(c.userMin,l.min);D=w(c.userMax,l.max);q?(c.linkedParent=b[c.coll][l.linkedTo],
b=c.linkedParent.getExtremes(),c.min=w(b.min,b.dataMin),c.max=w(b.max,b.dataMax),l.type!==c.linkedParent.options.type&&a.error(11,1)):(!t&&r(K)&&(c.dataMin>=K?(u=K,I=0):c.dataMax<=K&&(x=K,G=0)),c.min=w(B,u,c.dataMin),c.max=w(D,x,c.dataMax));e&&(c.positiveValuesOnly&&!k&&0>=Math.min(c.min,w(c.dataMin,c.min))&&a.error(10,1),c.min=h(f(c.min),15),c.max=h(f(c.max),15));c.range&&r(c.max)&&(c.userMin=c.min=B=Math.max(c.min,c.minFromRange()),c.userMax=D=c.max,c.range=null);g(c,"foundExtremes");c.beforePadding&&
c.beforePadding();c.adjustForMinRange();!(n||c.axisPointRange||c.usePercentage||q)&&r(c.min)&&r(c.max)&&(f=c.max-c.min)&&(!r(B)&&I&&(c.min-=f*I),!r(D)&&G&&(c.max+=f*G));v(l.softMin)&&(c.min=Math.min(c.min,l.softMin));v(l.softMax)&&(c.max=Math.max(c.max,l.softMax));v(l.floor)&&(c.min=Math.max(c.min,l.floor));v(l.ceiling)&&(c.max=Math.min(c.max,l.ceiling));t&&r(c.dataMin)&&(K=K||0,!r(B)&&c.min<K&&c.dataMin>=K?c.min=K:!r(D)&&c.max>K&&c.dataMax<=K&&(c.max=K));c.tickInterval=c.min===c.max||void 0===c.min||
void 0===c.max?1:q&&!A&&H===c.linkedParent.options.tickPixelInterval?A=c.linkedParent.tickInterval:w(A,this.tickAmount?(c.max-c.min)/Math.max(this.tickAmount-1,1):void 0,n?1:(c.max-c.min)*H/Math.max(c.len,H));p&&!k&&m(c.series,function(a){a.processData(c.min!==c.oldMin||c.max!==c.oldMax)});c.setAxisTranslation(!0);c.beforeSetTickPositions&&c.beforeSetTickPositions();c.postProcessTickInterval&&(c.tickInterval=c.postProcessTickInterval(c.tickInterval));c.pointRange&&!A&&(c.tickInterval=Math.max(c.pointRange,
c.tickInterval));k=w(l.minTickInterval,c.isDatetimeAxis&&c.closestPointRange);!A&&c.tickInterval<k&&(c.tickInterval=k);y||e||A||(c.tickInterval=J(c.tickInterval,null,d(c.tickInterval),w(l.allowDecimals,!(.5<c.tickInterval&&5>c.tickInterval&&1E3<c.max&&9999>c.max)),!!this.tickAmount));this.tickAmount||(c.tickInterval=c.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,c,b=a.tickPositions,l=a.tickPositioner,d=a.startOnTick,e=a.endOnTick;this.tickmarkOffset=this.categories&&
"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=this.min===this.max&&r(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=c=b&&b.slice();!c&&(c=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,
!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()]),this.tickPositions=c,l&&(l=l.apply(this,[this.min,this.max])))&&(this.tickPositions=c=l);this.paddedTicks=c.slice(0);this.trimTicks(c,d,e);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),b||l||this.adjustTickAmount())},trimTicks:function(a,c,b){var k=a[0],l=a[a.length-1],d=this.minPointOffset||0;if(!this.isLinked){if(c&&
-Infinity!==k)this.min=k;else for(;this.min-d>a[0];)a.shift();if(b)this.max=l;else for(;this.max+d<a[a.length-1];)a.pop();0===a.length&&r(k)&&a.push((l+k)/2)}},alignToOthers:function(){var a={},c,b=this.options;!1===this.chart.options.chart.alignTicks||!1===b.alignTicks||this.isLog||m(this.chart[this.coll],function(k){var b=k.options,b=[k.horiz?b.left:b.top,b.width,b.height,b.pane].join();k.series.length&&(a[b]?c=!0:a[b]=1)});return c},getTickAmount:function(){var a=this.options,c=a.tickAmount,b=
a.tickPixelInterval;!r(a.tickInterval)&&this.len<b&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(c=2);!c&&this.alignToOthers()&&(c=Math.ceil(this.len/b)+1);4>c&&(this.finalTickAmt=c,c=5);this.tickAmount=c},adjustTickAmount:function(){var a=this.tickInterval,c=this.tickPositions,b=this.tickAmount,l=this.finalTickAmt,d=c&&c.length;if(d<b){for(;c.length<b;)c.push(h(c[c.length-1]+a));this.transA*=(d-1)/(b-1);this.max=c[c.length-1]}else d>b&&(this.tickInterval*=2,this.setTickPositions());
if(r(l)){for(a=b=c.length;a--;)(3===l&&1===a%2||2>=l&&0<a&&a<b-1)&&c.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();c=this.len!==this.oldAxisLength;m(this.series,function(c){if(c.isDirtyData||c.isDirty||c.xAxis.isDirty)a=!0});c||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=
!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,c,b,l,d){var k=this,e=k.chart;b=w(b,!0);m(k.series,function(a){delete a.kdTree});d=f(d,{min:a,max:c});g(k,"setExtremes",d,function(){k.userMin=a;k.userMax=c;k.eventArgs=d;b&&e.redraw(l)})},zoom:function(a,c){var k=this.dataMin,b=this.dataMax,l=this.options,
d=Math.min(k,w(l.min,k)),l=Math.max(b,w(l.max,b));if(a!==this.min||c!==this.max)this.allowZoomOutside||(r(k)&&(a<d&&(a=d),a>l&&(a=l)),r(b)&&(c<d&&(c=d),c>l&&(c=l))),this.displayBtn=void 0!==a||void 0!==c,this.setExtremes(a,c,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,c=this.options,b=c.offsets||[0,0,0,0],l=this.horiz,d=w(c.width,a.plotWidth-b[3]+b[1]),e=w(c.height,a.plotHeight-b[0]+b[2]),f=w(c.top,a.plotTop+b[0]),c=w(c.left,a.plotLeft+b[3]),b=/%$/;b.test(e)&&(e=
Math.round(parseFloat(e)/100*a.plotHeight));b.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight+a.plotTop));this.left=c;this.top=f;this.width=d;this.height=e;this.bottom=a.chartHeight-e-f;this.right=a.chartWidth-d-c;this.len=Math.max(l?d:e,0);this.pos=l?c:f},getExtremes:function(){var a=this.isLog,c=this.lin2log;return{min:a?h(c(this.min)):this.min,max:a?h(c(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var c=
this.isLog,k=this.lin2log,b=c?k(this.min):this.min,c=c?k(this.max):this.max;null===a?a=b:b>a?a=b:c<a&&(a=c);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(w(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var c=this.options,k=c[a+"Length"],b=w(c[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(b&&k)return"inside"===c[a+"Position"]&&(k=-k),[k,b]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,b=this.tickInterval,l=b,d=this.len/(((this.categories?1:0)+this.max-this.min)/b),e,f=a.rotation,y=this.labelMetrics(),p,g=Number.MAX_VALUE,v,q=function(a){a/=d||1;a=1<a?Math.ceil(a):1;return a*b};c?(v=!a.staggerLines&&!a.step&&(r(f)?[f]:d<w(a.autoRotationLimit,80)&&a.autoRotation))&&m(v,function(a){var c;if(a===f||a&&-90<=a&&90>=a)p=q(Math.abs(y.h/Math.sin(x*a))),c=p+
Math.abs(a/360),c<g&&(g=c,e=a,l=p)}):a.step||(l=q(y.h));this.autoRotation=v;this.labelRotation=w(e,f);return l},getSlotWidth:function(){var a=this.chart,c=this.horiz,b=this.options.labels,l=Math.max(this.tickPositions.length-(this.categories?0:1),1),d=a.margin[3];return c&&2>(b.step||0)&&!b.rotation&&(this.staggerLines||1)*this.len/l||!c&&(d&&d-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,c=a.renderer,b=this.tickPositions,l=this.ticks,d=this.options.labels,e=this.horiz,
f=this.getSlotWidth(),y=Math.max(1,Math.round(f-2*(d.padding||5))),p={},g=this.labelMetrics(),v=d.style&&d.style.textOverflow,G,w=0,I,A;H(d.rotation)||(p.rotation=d.rotation||0);m(b,function(a){(a=l[a])&&a.labelLength>w&&(w=a.labelLength)});this.maxLabelLength=w;if(this.autoRotation)w>y&&w>g.h?p.rotation=this.labelRotation:this.labelRotation=0;else if(f&&(G={width:y+"px"},!v))for(G.textOverflow="clip",I=b.length;!e&&I--;)if(A=b[I],y=l[A].label)y.styles&&"ellipsis"===y.styles.textOverflow?y.css({textOverflow:"clip"}):
l[A].labelLength>f&&y.css({width:f+"px"}),y.getBBox().height>this.len/b.length-(g.h-g.f)&&(y.specCss={textOverflow:"ellipsis"});p.rotation&&(G={width:(w>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},v||(G.textOverflow="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))p.align=this.labelAlign;m(b,function(a){var c=(a=l[a])&&a.label;c&&(c.attr(p),G&&c.css(q(G,c.specCss)),delete c.specCss,a.rotation=p.rotation)});this.tickRotCorr=c.rotCorr(g.b,this.labelRotation||
0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||r(this.min)&&r(this.max)&&!!this.tickPositions},addTitle:function(a){var c=this.chart.renderer,k=this.horiz,b=this.opposite,l=this.options.title,d;this.axisTitle||((d=l.textAlign)||(d=(k?{low:"left",middle:"center",high:"right"}:{low:b?"right":"left",middle:"center",high:b?"left":"right"})[l.align]),this.axisTitle=c.text(l.text,0,0,l.useHTML).attr({zIndex:7,rotation:l.rotation||0,align:d}).addClass("highcharts-axis-title").css(l.style).add(this.axisGroup),
this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var c=this.ticks;c[a]?c[a].addLabel():c[a]=new l(this,a)},getOffset:function(){var a=this,b=a.chart,l=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,y=a.horiz,p=a.side,g=b.inverted&&!a.isZAxis?[1,0,3,2][p]:p,v,q,G=0,I,A=0,h=d.title,H=d.labels,n=0,K=b.axisOffset,b=b.clipOffset,J=[-1,1,1,-1][p],t=d.className,u=a.axisParent,x=this.tickSize("tick");v=a.hasData();a.showAxis=q=v||w(d.showEmpty,!0);a.staggerLines=
a.horiz&&H.staggerLines;a.axisGroup||(a.gridGroup=l.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(t||"")).add(u),a.axisGroup=l.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(t||"")).add(u),a.labelGroup=l.g("axis-labels").attr({zIndex:H.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(t||"")).add(u));v||a.isLinked?(m(e,function(c,b){a.generateTick(c,b)}),a.renderUnsquish(),!1===H.reserveSpace||
0!==p&&2!==p&&{1:"left",3:"right"}[p]!==a.labelAlign&&"center"!==a.labelAlign||m(e,function(a){n=Math.max(f[a].getLabelSize(),n)}),a.staggerLines&&(n*=a.staggerLines,a.labelOffset=n*(a.opposite?-1:1))):c(f,function(a,c){a.destroy();delete f[c]});h&&h.text&&!1!==h.enabled&&(a.addTitle(q),q&&!1!==h.reserveSpace&&(a.titleOffset=G=a.axisTitle.getBBox()[y?"height":"width"],I=h.offset,A=r(I)?0:w(h.margin,y?5:10)));a.renderLine();a.offset=J*w(d.offset,K[p]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};l=0===p?
-a.labelMetrics().h:2===p?a.tickRotCorr.y:0;A=Math.abs(n)+A;n&&(A=A-l+J*(y?w(H.y,a.tickRotCorr.y+8*J):H.x));a.axisTitleMargin=w(I,A);K[p]=Math.max(K[p],a.axisTitleMargin+G+J*a.offset,A,v&&e.length&&x?x[0]+J*a.offset:0);e=2*Math.floor(a.axisLine.strokeWidth()/2);0<d.offset&&(e-=2*d.offset);b[g]=Math.max(b[g]||e,e)},getLinePath:function(a){var c=this.chart,b=this.opposite,k=this.offset,l=this.horiz,d=this.left+(b?this.width:0)+k,k=c.chartHeight-this.bottom-(b?this.height:0)+k;b&&(a*=-1);return c.renderer.crispLine(["M",
l?this.left:d,l?k:this.top,"L",l?c.chartWidth-this.right:d,l?k:c.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,c=this.left,b=this.top,l=this.len,d=this.options.title,e=a?c:b,f=this.opposite,y=this.offset,p=d.x||0,g=d.y||0,v=this.chart.renderer.fontMetrics(d.style&&
d.style.fontSize,this.axisTitle).f,l={low:e+(a?0:l),middle:e+l/2,high:e+(a?l:0)}[d.align],c=(a?b+this.height:c)+(a?1:-1)*(f?-1:1)*this.axisTitleMargin+(2===this.side?v:0);return{x:a?l+p:c+(f?this.width:0)+y+p,y:a?c+g-(f?this.height:0)+y:l+g}},renderMinorTick:function(a){var c=this.chart.hasRendered&&v(this.oldMin),b=this.minorTicks;b[a]||(b[a]=new l(this,a,"minor"));c&&b[a].isNew&&b[a].render(null,!0);b[a].render(null,!1,1)},renderTick:function(a,c){var b=this.isLinked,k=this.ticks,d=this.chart.hasRendered&&
v(this.oldMin);if(!b||a>=this.min&&a<=this.max)k[a]||(k[a]=new l(this,a)),d&&k[a].isNew&&k[a].render(c,!0,.1),k[a].render(c)},render:function(){var b=this,d=b.chart,e=b.options,f=b.isLog,y=b.lin2log,p=b.isLinked,g=b.tickPositions,q=b.axisTitle,w=b.ticks,I=b.minorTicks,A=b.alternateBands,h=e.stackLabels,H=e.alternateGridColor,n=b.tickmarkOffset,K=b.axisLine,J=b.showAxis,r=B(d.renderer.globalAnimation),t,u;b.labelEdge.length=0;b.overlap=!1;m([w,I,A],function(a){c(a,function(a){a.isActive=!1})});if(b.hasData()||
p)b.minorTickInterval&&!b.categories&&m(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),g.length&&(m(g,function(a,c){b.renderTick(a,c)}),n&&(0===b.min||b.single)&&(w[-1]||(w[-1]=new l(b,-1,null,!0)),w[-1].render(-1))),H&&m(g,function(c,l){u=void 0!==g[l+1]?g[l+1]+n:b.max-n;0===l%2&&c<b.max&&u<=b.max+(d.polar?-n:n)&&(A[c]||(A[c]=new a.PlotLineOrBand(b)),t=c+n,A[c].options={from:f?y(t):t,to:f?y(u):u,color:H},A[c].render(),A[c].isActive=!0)}),b._addedPlotLB||(m((e.plotLines||[]).concat(e.plotBands||
[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);m([w,I,A],function(a){var b,l=[],k=r.duration;c(a,function(a,c){a.isActive||(a.render(c,!1,0),a.isActive=!1,l.push(c))});G(function(){for(b=l.length;b--;)a[l[b]]&&!a[l[b]].isActive&&(a[l[b]].destroy(),delete a[l[b]])},a!==A&&d.hasRendered&&k?k:0)});K&&(K[K.isPlaced?"animate":"attr"]({d:this.getLinePath(K.strokeWidth())}),K.isPlaced=!0,K[J?"show":"hide"](!0));q&&J&&(e=b.getTitlePosition(),v(e.y)?(q[q.isNew?"attr":"animate"](e),q.isNew=!1):
(q.attr("y",-9999),q.isNew=!0));h&&h.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),m(this.plotLinesAndBands,function(a){a.render()}));m(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var l=this,k=l.stacks,d=l.plotLinesAndBands,e;a||K(l);c(k,function(a,c){t(a);k[c]=null});m([l.ticks,l.minorTicks,l.alternateBands],function(a){t(a)});if(d)for(a=d.length;a--;)d[a].destroy();m("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
function(a){l[a]&&(l[a]=l[a].destroy())});for(e in l.plotLinesAndBandsGroups)l.plotLinesAndBandsGroups[e]=l.plotLinesAndBandsGroups[e].destroy();c(l,function(a,c){-1===b(c,l.keepProps)&&delete l[c]})},drawCrosshair:function(a,c){var b,l=this.crosshair,k=w(l.snap,!0),d,e=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(r(c)||!k)?(k?r(c)&&(d=this.isXAxis?c.plotX:this.len-c.plotY):d=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),r(d)&&(b=this.getPlotLinePath(c&&(this.isXAxis?
c.x:w(c.stackY,c.y)),null,null,null,d)||null),r(b)?(c=this.categories&&!this.isRadial,e||(this.cross=e=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+l.className).attr({zIndex:w(l.zIndex,2)}).add(),e.attr({stroke:l.color||(c?n("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":w(l.width,1)}),l.dashStyle&&e.attr({dashstyle:l.dashStyle})),e.show().attr({d:b}),c&&!l.width&&e.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):
this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=I}(L);(function(a){var E=a.Axis,B=a.Date,F=a.dateFormat,D=a.defaultOptions,n=a.defined,h=a.each,u=a.extend,r=a.getMagnitude,x=a.getTZOffset,t=a.normalizeTickInterval,m=a.pick,f=a.timeUnits;E.prototype.getTimeTicks=function(a,e,d,p){var b=[],g={},v=D.global.useUTC,H,q=new B(e-Math.max(x(e),x(d))),J=B.hcMakeTime,c=a.unitRange,w=a.count,K;if(n(e)){q[B.hcSetMilliseconds](c>=f.second?0:w*Math.floor(q.getMilliseconds()/
w));if(c>=f.second)q[B.hcSetSeconds](c>=f.minute?0:w*Math.floor(q.getSeconds()/w));if(c>=f.minute)q[B.hcSetMinutes](c>=f.hour?0:w*Math.floor(q[B.hcGetMinutes]()/w));if(c>=f.hour)q[B.hcSetHours](c>=f.day?0:w*Math.floor(q[B.hcGetHours]()/w));if(c>=f.day)q[B.hcSetDate](c>=f.month?1:w*Math.floor(q[B.hcGetDate]()/w));c>=f.month&&(q[B.hcSetMonth](c>=f.year?0:w*Math.floor(q[B.hcGetMonth]()/w)),H=q[B.hcGetFullYear]());if(c>=f.year)q[B.hcSetFullYear](H-H%w);if(c===f.week)q[B.hcSetDate](q[B.hcGetDate]()-q[B.hcGetDay]()+
m(p,1));H=q[B.hcGetFullYear]();p=q[B.hcGetMonth]();var y=q[B.hcGetDate](),G=q[B.hcGetHours]();if(B.hcTimezoneOffset||B.hcGetTimezoneOffset)K=(!v||!!B.hcGetTimezoneOffset)&&(d-e>4*f.month||x(e)!==x(d)),q=q.getTime(),q=new B(q+x(q));v=q.getTime();for(e=1;v<d;)b.push(v),v=c===f.year?J(H+e*w,0):c===f.month?J(H,p+e*w):!K||c!==f.day&&c!==f.week?K&&c===f.hour?J(H,p,y,G+e*w):v+c*w:J(H,p,y+e*w*(c===f.day?1:7)),e++;b.push(v);c<=f.hour&&1E4>b.length&&h(b,function(a){0===a%18E5&&"000000000"===F("%H%M%S%L",a)&&
(g[a]="day")})}b.info=u(a,{higherRanks:g,totalRange:c*w});return b};E.prototype.normalizeTimeTickInterval=function(a,e){var d=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=d[d.length-1];var p=f[e[0]],b=e[1],g;for(g=0;g<d.length&&!(e=d[g],p=f[e[0]],b=e[1],d[g+1]&&a<=(p*b[b.length-1]+f[d[g+1][0]])/2);g++);p===f.year&&a<5*p&&(b=[1,2,5]);a=t(a/p,b,
"year"===e[0]?Math.max(r(a/p),1):1);return{unitRange:p,count:a,unitName:e[0]}}})(L);(function(a){var E=a.Axis,B=a.getMagnitude,F=a.map,D=a.normalizeTickInterval,n=a.pick;E.prototype.getLogTickPositions=function(a,u,r,x){var h=this.options,m=this.len,f=this.lin2log,g=this.log2lin,e=[];x||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),e=this.getLinearTickPositions(a,u,r);else if(.08<=a)for(var m=Math.floor(u),d,p,b,A,v,h=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];m<r+1&&!v;m++)for(p=
h.length,d=0;d<p&&!v;d++)b=g(f(m)*h[d]),b>u&&(!x||A<=r)&&void 0!==A&&e.push(A),A>r&&(v=!0),A=b;else u=f(u),r=f(r),a=h[x?"minorTickInterval":"tickInterval"],a=n("auto"===a?null:a,this._minorAutoInterval,h.tickPixelInterval/(x?5:1)*(r-u)/((x?m/this.tickPositions.length:m)||1)),a=D(a,null,B(a)),e=F(this.getLinearTickPositions(a,u,r),g),x||(this._minorAutoInterval=a/5);x||(this.tickInterval=a);return e};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,
a)}})(L);(function(a,E){var B=a.arrayMax,F=a.arrayMin,D=a.defined,n=a.destroyObjectProperties,h=a.each,u=a.erase,r=a.merge,x=a.pick;a.PlotLineOrBand=function(a,m){this.axis=a;m&&(this.options=m,this.id=m.id)};a.PlotLineOrBand.prototype={render:function(){var h=this,m=h.axis,f=m.horiz,g=h.options,e=g.label,d=h.label,p=g.to,b=g.from,A=g.value,v=D(b)&&D(p),H=D(A),q=h.svgElem,n=!q,c=[],w=g.color,K=x(g.zIndex,0),y=g.events,c={"class":"highcharts-plot-"+(v?"band ":"line ")+(g.className||"")},G={},l=m.chart.renderer,
I=v?"bands":"lines",k=m.log2lin;m.isLog&&(b=k(b),p=k(p),A=k(A));H?(c={stroke:w,"stroke-width":g.width},g.dashStyle&&(c.dashstyle=g.dashStyle)):v&&(w&&(c.fill=w),g.borderWidth&&(c.stroke=g.borderColor,c["stroke-width"]=g.borderWidth));G.zIndex=K;I+="-"+K;(w=m.plotLinesAndBandsGroups[I])||(m.plotLinesAndBandsGroups[I]=w=l.g("plot-"+I).attr(G).add());n&&(h.svgElem=q=l.path().attr(c).add(w));if(H)c=m.getPlotLinePath(A,q.strokeWidth());else if(v)c=m.getPlotBandPath(b,p,g);else return;n&&c&&c.length?(q.attr({d:c}),
y&&a.objectEach(y,function(a,c){q.on(c,function(a){y[c].apply(h,[a])})})):q&&(c?(q.show(),q.animate({d:c})):(q.hide(),d&&(h.label=d=d.destroy())));e&&D(e.text)&&c&&c.length&&0<m.width&&0<m.height&&!c.flat?(e=r({align:f&&v&&"center",x:f?!v&&4:10,verticalAlign:!f&&v&&"middle",y:f?v?16:10:v?6:-4,rotation:f&&!v&&90},e),this.renderLabel(e,c,v,K)):d&&d.hide();return h},renderLabel:function(a,m,f,g){var e=this.label,d=this.axis.chart.renderer;e||(e={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+
(f?"band":"line")+"-label "+(a.className||"")},e.zIndex=g,this.label=e=d.text(a.text,0,0,a.useHTML).attr(e).add(),e.css(a.style));g=[m[1],m[4],f?m[6]:m[1]];m=[m[2],m[5],f?m[7]:m[2]];f=F(g);d=F(m);e.align(a,!1,{x:f,y:d,width:B(g)-f,height:B(m)-d});e.show()},destroy:function(){u(this.axis.plotLinesAndBands,this);delete this.axis;n(this)}};a.extend(E.prototype,{getPlotBandPath:function(a,m){var f=this.getPlotLinePath(m,null,null,!0),g=this.getPlotLinePath(a,null,null,!0),e=this.horiz,d=1;a=a<this.min&&
m<this.min||a>this.max&&m>this.max;g&&f?(a&&(g.flat=g.toString()===f.toString(),d=0),g.push(e&&f[4]===g[4]?f[4]+d:f[4],e||f[5]!==g[5]?f[5]:f[5]+d,e&&f[1]===g[1]?f[1]+d:f[1],e||f[2]!==g[2]?f[2]:f[2]+d)):g=null;return g},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(h,m){var f=(new a.PlotLineOrBand(this,h)).render(),g=this.userOptions;f&&(m&&(g[m]=g[m]||[],g[m].push(h)),this.plotLinesAndBands.push(f));
return f},removePlotBandOrLine:function(a){for(var m=this.plotLinesAndBands,f=this.options,g=this.userOptions,e=m.length;e--;)m[e].id===a&&m[e].destroy();h([f.plotLines||[],g.plotLines||[],f.plotBands||[],g.plotBands||[]],function(d){for(e=d.length;e--;)d[e].id===a&&u(d,d[e])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(L,T);(function(a){var E=a.dateFormat,B=a.each,F=a.extend,D=a.format,n=a.isNumber,h=a.map,u=a.merge,r=a.pick,
x=a.splat,t=a.syncTimeout,m=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,g){this.chart=a;this.options=g;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=g.split&&!a.inverted;this.shared=g.shared||this.split},cleanSplit:function(a){B(this.chart.series,function(f){var e=f&&f.tt;e&&(!e.isActive||a?f.tt=e.destroy():e.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,g=this.options;this.label||(this.split?this.label=
a.g("tooltip"):(this.label=a.label("",0,0,g.shape||"callout",null,null,g.useHTML,null,"tooltip").attr({padding:g.padding,r:g.borderRadius}),this.label.attr({fill:g.backgroundColor,"stroke-width":g.borderWidth}).css(g.style).shadow(g.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();u(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,u(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&
(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,g,e,d){var f=this,b=f.now,m=!1!==f.options.animation&&!f.isHidden&&(1<Math.abs(a-b.x)||1<Math.abs(g-b.y)),v=f.followPointer||1<f.len;F(b,{x:m?(2*b.x+a)/3:a,y:m?(b.y+g)/2:g,anchorX:v?void 0:m?(2*b.anchorX+e)/3:e,anchorY:v?void 0:m?(b.anchorY+d)/2:d});f.getLabel().attr(b);m&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){f&&f.move(a,
g,e,d)},32))},hide:function(a){var f=this;clearTimeout(this.hideTimer);a=r(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=t(function(){f.getLabel()[a?"fadeOut":"hide"]();f.isHidden=!0},a))},getAnchor:function(a,g){var e,d=this.chart,f=d.inverted,b=d.plotTop,m=d.plotLeft,v=0,H=0,q,n;a=x(a);e=a[0].tooltipPos;this.followPointer&&g&&(void 0===g.chartX&&(g=d.pointer.normalize(g)),e=[g.chartX-d.plotLeft,g.chartY-b]);e||(B(a,function(a){q=a.series.yAxis;n=a.series.xAxis;v+=a.plotX+(!f&&n?n.left-
m:0);H+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!f&&q?q.top-b:0)}),v/=a.length,H/=a.length,e=[f?d.plotWidth-H:v,this.shared&&!f&&1<a.length&&g?g.chartY-b:f?d.plotHeight-v:H]);return h(e,Math.round)},getPosition:function(a,g,e){var d=this.chart,f=this.distance,b={},m=e.h||0,v,h=["y",d.chartHeight,g,e.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],q=["x",d.chartWidth,a,e.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],n=!this.followPointer&&r(e.ttBelow,!d.inverted===!!e.negative),c=function(a,
c,d,k,e,y){var l=d<k-f,p=k+f+d<c,g=k-f-d;k+=f;if(n&&p)b[a]=k;else if(!n&&l)b[a]=g;else if(l)b[a]=Math.min(y-d,0>g-m?g:g-m);else if(p)b[a]=Math.max(e,k+m+d>c?k:k+m);else return!1},w=function(a,c,d,k){var l;k<f||k>c-f?l=!1:b[a]=k<d/2?1:k>c-d/2?c-d-2:k-d/2;return l},K=function(a){var c=h;h=q;q=c;v=a},y=function(){!1!==c.apply(0,h)?!1!==w.apply(0,q)||v||(K(!0),y()):v?b.x=b.y=0:(K(!0),y())};(d.inverted||1<this.len)&&K();y();return b},defaultFormatter:function(a){var f=this.points||x(this),e;e=[a.tooltipFooterHeaderFormatter(f[0])];
e=e.concat(a.bodyFormatter(f));e.push(a.tooltipFooterHeaderFormatter(f[0],!0));return e},refresh:function(a,g){var e,d=this.options,f,b=a,m,v={},h=[];e=d.formatter||this.defaultFormatter;var v=this.shared,q;clearTimeout(this.hideTimer);this.followPointer=x(b)[0].series.tooltipOptions.followPointer;m=this.getAnchor(b,g);g=m[0];f=m[1];!v||b.series&&b.series.noSharedTooltip?v=b.getLabelConfig():(B(b,function(a){a.setState("hover");h.push(a.getLabelConfig())}),v={x:b[0].category,y:b[0].y},v.points=h,
b=b[0]);this.len=h.length;v=e.call(v,this);q=b.series;this.distance=r(q.tooltipOptions.distance,16);!1===v?this.hide():(e=this.getLabel(),this.isHidden&&e.attr({opacity:1}).show(),this.split?this.renderSplit(v,a):(d.style.width||e.css({width:this.chart.spacingBox.width}),e.attr({text:v&&v.join?v.join(""):v}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+r(b.colorIndex,q.colorIndex)),e.attr({stroke:d.borderColor||b.color||q.color||"#666666"}),this.updatePosition({plotX:g,plotY:f,
negative:b.negative,ttBelow:b.ttBelow,h:m[2]||0})),this.isHidden=!1)},renderSplit:function(f,g){var e=this,d=[],p=this.chart,b=p.renderer,m=!0,v=this.options,h,q=this.getLabel();B(f.slice(0,g.length+1),function(a,c){c=g[c-1]||{isHeader:!0,plotX:g[0].plotX};var f=c.series||e,A=f.tt,y=c.series||{},G="highcharts-color-"+r(c.colorIndex,y.colorIndex,"none");A||(f.tt=A=b.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+G).attr({padding:v.padding,r:v.borderRadius,fill:v.backgroundColor,
stroke:c.color||y.color||"#333333","stroke-width":v.borderWidth}).add(q));A.isActive=!0;A.attr({text:a});A.css(v.style);a=A.getBBox();y=a.width+A.strokeWidth();c.isHeader?(h=a.height,y=Math.max(0,Math.min(c.plotX+p.plotLeft-y/2,p.chartWidth-y))):y=c.plotX+p.plotLeft-r(v.distance,16)-y;0>y&&(m=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=p.plotTop;d.push({target:c.isHeader?p.plotHeight+h:a,rank:c.isHeader?1:0,size:f.tt.getBBox().height+1,point:c,x:y,tt:A})});this.cleanSplit();
a.distribute(d,p.plotHeight+h);B(d,function(a){var c=a.point,b=c.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:m||c.isHeader?a.x:c.plotX+p.plotLeft+r(v.distance,16),y:a.pos+p.plotTop,anchorX:c.isHeader?c.plotX+p.plotLeft:c.plotX+b.xAxis.pos,anchorY:c.isHeader?a.pos+p.plotTop-15:c.plotY+b.yAxis.pos})})},updatePosition:function(a){var f=this.chart,e=this.getLabel(),e=(this.options.positioner||this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||
0),a.plotX+f.plotLeft,a.plotY+f.plotTop)},getDateFormat:function(a,g,e,d){var f=E("%m-%d %H:%M:%S.%L",g),b,A,v={millisecond:15,second:12,minute:9,hour:6,day:3},h="millisecond";for(A in m){if(a===m.week&&+E("%w",g)===e&&"00:00:00.000"===f.substr(6)){A="week";break}if(m[A]>a){A=h;break}if(v[A]&&f.substr(v[A])!=="01-01 00:00:00.000".substr(v[A]))break;"week"!==A&&(h=A)}A&&(b=d[A]);return b},getXDateFormat:function(a,g,e){g=g.dateTimeLabelFormats;var d=e&&e.closestPointRange;return(d?this.getDateFormat(d,
a.x,e.options.startOfWeek,g):g.day)||g.year},tooltipFooterHeaderFormatter:function(a,g){var e=g?"footer":"header";g=a.series;var d=g.tooltipOptions,f=d.xDateFormat,b=g.xAxis,m=b&&"datetime"===b.options.type&&n(a.key),e=d[e+"Format"];m&&!f&&(f=this.getXDateFormat(a,d,b));m&&f&&(e=e.replace("{point.key}","{point.key:"+f+"}"));return D(e,{point:a,series:g})},bodyFormatter:function(a){return h(a,function(a){var e=a.series.tooltipOptions;return(e.pointFormatter||a.point.tooltipFormatter).call(a.point,
e.pointFormat)})}}})(L);(function(a){var E=a.addEvent,B=a.attr,F=a.charts,D=a.color,n=a.css,h=a.defined,u=a.doc,r=a.each,x=a.extend,t=a.fireEvent,m=a.offset,f=a.pick,g=a.removeEvent,e=a.splat,d=a.Tooltip,p=a.win;a.Pointer=function(a,d){this.init(a,d)};a.Pointer.prototype={init:function(a,e){this.options=e;this.chart=a;this.runChartClick=e.chart.events&&!!e.chart.events.click;this.pinchDown=[];this.lastValidTouch={};d&&e.tooltip.enabled&&(a.tooltip=new d(a,e.tooltip),this.followTouchMove=f(e.tooltip.followTouchMove,
!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,d=b.options.chart,e=d.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(e=f(d.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=a&&!b||e&&b;this.zoomVert=e&&!b||a&&b;this.hasZoom=a||e},normalize:function(a,d){var b,e;a=a||p.event;a.target||(a.target=a.srcElement);e=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;d||(this.chartPosition=d=m(this.chart.container));void 0===e.pageX?(b=Math.max(a.x,
a.clientX-d.left),d=a.y):(b=e.pageX-d.left,d=e.pageY-d.top);return x(a,{chartX:Math.round(b),chartY:Math.round(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};r(this.chart.axes,function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,d,e){var b=[],p,g,c;r(a,function(a){p=a.noSharedTooltip&&d;g=!d&&a.directTouch;a.visible&&!g&&f(a.options.enableMouseTracking,!0)&&(c=a.searchPoint(e,!p&&0>a.options.findNearestPointBy.indexOf("y")))&&
c.series&&b.push(c)});b.sort(function(a,c){var b=a.distX-c.distX,e=a.dist-c.dist,l=(c.series.group&&c.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==b&&d?b:0!==e?e:0!==l?l:a.series.index>c.series.index?-1:1});if(d&&b[0]&&!b[0].series.noSharedTooltip)for(a=b.length;a--;)(b[a].x!==b[0].x||b[a].series.noSharedTooltip)&&b.splice(a,1);return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,d){var b=
a.series,e=b.xAxis,b=b.yAxis;if(e&&b)return d?{chartX:e.len+e.pos-a.clientX,chartY:b.len+b.pos-a.plotY}:{chartX:a.clientX+e.pos,chartY:a.plotY+b.pos}},getHoverData:function(b,d,e,f,p,g){var c=b,v=d,c=p?e:[v];f=!(!f||!b);d=v&&!v.stickyTracking;var q=function(a,c){return 0===c},y;f?q=function(a){return a===b}:d?q=function(a){return a.series===v}:c=a.grep(e,function(a){return a.stickyTracking});y=f&&!p?[b]:this.getKDPoints(c,p,g);v=(c=a.find(y,q))&&c.series;f||d||!p||(y=this.getKDPoints(e,p,g));y.sort(function(a,
c){return a.series.index-c.series.index});return{hoverPoint:c,hoverSeries:v,hoverPoints:y}},runPointActions:function(b,d){var e=this.chart,p=e.tooltip,g=p?p.shared:!1,m=d||e.hoverPoint,c=m&&m.series||e.hoverSeries;d=this.getHoverData(m,c,e.series,!!d||c&&c.directTouch&&this.isDirectTouch,g,b);var w,h,m=d.hoverPoint;w=(c=d.hoverSeries)&&c.tooltipOptions.followPointer;h=(g=g&&m&&!m.series.noSharedTooltip)?d.hoverPoints:m?[m]:[];if(m&&(m!==e.hoverPoint||p&&p.isHidden)){r(e.hoverPoints||[],function(c){-1===
a.inArray(c,h)&&c.setState()});r(h||[],function(a){a.setState("hover")});if(e.hoverSeries!==c)c.onMouseOver();e.hoverPoint&&e.hoverPoint.firePointEvent("mouseOut");m.firePointEvent("mouseOver");e.hoverPoints=h;e.hoverPoint=m;p&&p.refresh(g?h:m,b)}else w&&p&&!p.isHidden&&(c=p.getAnchor([{}],b),p.updatePosition({plotX:c[0],plotY:c[1]}));this.unDocMouseMove||(this.unDocMouseMove=E(u,"mousemove",function(c){var b=F[a.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(c)}));r(e.axes,function(c){f(c.crosshair.snap,
!0)?a.find(h,function(a){return a.series[c.coll]===c})?c.drawCrosshair(b,m):c.hideCrosshair():c.drawCrosshair(b)})},reset:function(a,d){var b=this.chart,f=b.hoverSeries,p=b.hoverPoint,g=b.hoverPoints,c=b.tooltip,m=c&&c.shared?g:p;a&&m&&r(e(m),function(c){c.series.isCartesian&&void 0===c.plotX&&(a=!1)});if(a)c&&m&&(c.refresh(m),p&&(p.setState(p.state,!0),r(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,p)})));else{if(p)p.onMouseOut();g&&r(g,function(a){a.setState()});if(f)f.onMouseOut();c&&c.hide(d);
this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());r(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,d){var b=this.chart,e;r(b.series,function(f){e=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(e),f.markerGroup&&(f.markerGroup.attr(e),f.markerGroup.clip(d?b.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(e))});b.clipRect.attr(d||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=
a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,d=b.options.chart,e=a.chartX,f=a.chartY,p=this.zoomHor,c=this.zoomVert,g=b.plotLeft,m=b.plotTop,y=b.plotWidth,G=b.plotHeight,l,I=this.selectionMarker,k=this.mouseDownX,z=this.mouseDownY,h=d.panKey&&a[d.panKey+"Key"];I&&I.touch||(e<g?e=g:e>g+y&&(e=g+y),f<m?f=m:f>m+G&&(f=m+G),this.hasDragged=Math.sqrt(Math.pow(k-e,2)+Math.pow(z-f,2)),10<this.hasDragged&&(l=b.isInsidePlot(k-
g,z-m),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!h&&!I&&(this.selectionMarker=I=b.renderer.rect(g,m,p?1:y,c?1:G,0).attr({fill:d.selectionMarkerFill||D("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),I&&p&&(e-=k,I.attr({width:Math.abs(e),x:(0<e?0:e)+k})),I&&c&&(e=f-z,I.attr({height:Math.abs(e),y:(0<e?0:e)+z})),l&&!I&&d.panning&&b.pan(a,d.panning)))},drop:function(a){var b=this,d=this.chart,e=this.hasPinched;if(this.selectionMarker){var f={originalEvent:a,
xAxis:[],yAxis:[]},p=this.selectionMarker,c=p.attr?p.attr("x"):p.x,g=p.attr?p.attr("y"):p.y,m=p.attr?p.attr("width"):p.width,y=p.attr?p.attr("height"):p.height,G;if(this.hasDragged||e)r(d.axes,function(l){if(l.zoomEnabled&&h(l.min)&&(e||b[{xAxis:"zoomX",yAxis:"zoomY"}[l.coll]])){var d=l.horiz,k="touchend"===a.type?l.minPixelPadding:0,p=l.toValue((d?c:g)+k),d=l.toValue((d?c+m:g+y)-k);f[l.coll].push({axis:l,min:Math.min(p,d),max:Math.max(p,d)});G=!0}}),G&&t(d,"selection",f,function(a){d.zoom(x(a,e?
{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();e&&this.scaleGroups()}d&&(n(d.container,{cursor:d._cursor}),d.cancelClick=10<this.hasDragged,d.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){F[a.hoverChartIndex]&&F[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
d=this.chartPosition;a=this.normalize(a,d);!d||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var d=F[a.hoverChartIndex];d&&(b.relatedTarget||b.toElement)&&(d.pointer.reset(),d.pointer.chartPosition=null)},onContainerMouseMove:function(b){var d=this.chart;h(a.hoverChartIndex)&&F[a.hoverChartIndex]&&F[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=d.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===d.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!d.isInsidePlot(b.chartX-d.plotLeft,b.chartY-d.plotTop)||d.openMenu||this.runPointActions(b)},inClass:function(a,d){for(var b;a;){if(b=B(a,"class")){if(-1!==b.indexOf(d))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,d=b.hoverPoint,e=b.plotLeft,f=b.plotTop;a=this.normalize(a);b.cancelClick||(d&&this.inClass(a.target,"highcharts-tracker")?(t(d.series,"click",x(a,{point:d})),b.hoverPoint&&d.firePointEvent("click",a)):(x(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-e,a.chartY-f)&&t(b,"click",a)))},setDOMEvents:function(){var b=this,d=b.chart.container;d.onmousedown=
function(a){b.onContainerMouseDown(a)};d.onmousemove=function(a){b.onContainerMouseMove(a)};d.onclick=function(a){b.onContainerClick(a)};E(d,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&E(u,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(d.ontouchstart=function(a){b.onContainerTouchStart(a)},d.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&E(u,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();g(b.chart.container,"mouseleave",
b.onContainerMouseLeave);a.chartCount||(g(u,"mouseup",b.onDocumentMouseUp),g(u,"touchend",b.onDocumentTouchEnd));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,d){b[d]=null})}}})(L);(function(a){var E=a.charts,B=a.each,F=a.extend,D=a.map,n=a.noop,h=a.pick;F(a.Pointer.prototype,{pinchTranslate:function(a,h,n,t,m,f){this.zoomHor&&this.pinchTranslateDirection(!0,a,h,n,t,m,f);this.zoomVert&&this.pinchTranslateDirection(!1,a,h,n,t,m,f)},pinchTranslateDirection:function(a,h,n,t,m,f,g,e){var d=
this.chart,p=a?"x":"y",b=a?"X":"Y",A="chart"+b,v=a?"width":"height",H=d["plot"+(a?"Left":"Top")],q,r,c=e||1,w=d.inverted,K=d.bounds[a?"h":"v"],y=1===h.length,G=h[0][A],l=n[0][A],I=!y&&h[1][A],k=!y&&n[1][A],z;n=function(){!y&&20<Math.abs(G-I)&&(c=e||Math.abs(l-k)/Math.abs(G-I));r=(H-l)/c+G;q=d["plot"+(a?"Width":"Height")]/c};n();h=r;h<K.min?(h=K.min,z=!0):h+q>K.max&&(h=K.max-q,z=!0);z?(l-=.8*(l-g[p][0]),y||(k-=.8*(k-g[p][1])),n()):g[p]=[l,k];w||(f[p]=r-H,f[v]=q);f=w?1/c:c;m[v]=q;m[p]=h;t[w?a?"scaleY":
"scaleX":"scale"+b]=c;t["translate"+b]=f*H+(l-f*G)},pinch:function(a){var r=this,u=r.chart,t=r.pinchDown,m=a.touches,f=m.length,g=r.lastValidTouch,e=r.hasZoom,d=r.selectionMarker,p={},b=1===f&&(r.inClass(a.target,"highcharts-tracker")&&u.runTrackerClick||r.runChartClick),A={};1<f&&(r.initiated=!0);e&&r.initiated&&!b&&a.preventDefault();D(m,function(a){return r.normalize(a)});"touchstart"===a.type?(B(m,function(a,b){t[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[t[0].chartX,t[1]&&t[1].chartX],g.y=[t[0].chartY,
t[1]&&t[1].chartY],B(u.axes,function(a){if(a.zoomEnabled){var b=u.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(h(a.options.min,a.dataMin)),c=a.toPixels(h(a.options.max,a.dataMax)),f=Math.max(e,c);b.min=Math.min(a.pos,Math.min(e,c)-d);b.max=Math.max(a.pos+a.len,f+d)}}),r.res=!0):r.followTouchMove&&1===f?this.runPointActions(r.normalize(a)):t.length&&(d||(r.selectionMarker=d=F({destroy:n,touch:!0},u.plotBox)),r.pinchTranslate(t,m,p,d,A,g),r.hasPinched=e,r.scaleGroups(p,A),r.res&&(r.res=
!1,this.reset(!1,0)))},touch:function(n,r){var u=this.chart,t,m;if(u.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=u.index;1===n.touches.length?(n=this.normalize(n),(m=u.isInsidePlot(n.chartX-u.plotLeft,n.chartY-u.plotTop))&&!u.openMenu?(r&&this.runPointActions(n),"touchmove"===n.type&&(r=this.pinchDown,t=r[0]?4<=Math.sqrt(Math.pow(r[0].chartX-n.chartX,2)+Math.pow(r[0].chartY-n.chartY,2)):!1),h(t,!0)&&this.pinch(n)):r&&this.reset()):2===n.touches.length&&
this.pinch(n)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(h){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(h)}})})(L);(function(a){var E=a.addEvent,B=a.charts,F=a.css,D=a.doc,n=a.extend,h=a.noop,u=a.Pointer,r=a.removeEvent,x=a.win,t=a.wrap;if(!a.hasTouch&&(x.PointerEvent||x.MSPointerEvent)){var m={},f=!!x.PointerEvent,g=function(){var d=[];d.item=function(a){return this[a]};a.objectEach(m,
function(a){d.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return d},e=function(d,e,b,f){"touch"!==d.pointerType&&d.pointerType!==d.MSPOINTER_TYPE_TOUCH||!B[a.hoverChartIndex]||(f(d),f=B[a.hoverChartIndex].pointer,f[e]({type:b,target:d.currentTarget,preventDefault:h,touches:g()}))};n(u.prototype,{onContainerPointerDown:function(a){e(a,"onContainerTouchStart","touchstart",function(a){m[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){e(a,
"onContainerTouchMove","touchmove",function(a){m[a.pointerId]={pageX:a.pageX,pageY:a.pageY};m[a.pointerId].target||(m[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){e(a,"onDocumentTouchEnd","touchend",function(a){delete m[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,f?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,f?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(D,f?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});
t(u.prototype,"init",function(a,e,b){a.call(this,e,b);this.hasZoom&&F(e.container,{"-ms-touch-action":"none","touch-action":"none"})});t(u.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});t(u.prototype,"destroy",function(a){this.batchMSEvents(r);a.call(this)})}})(L);(function(a){var E=a.addEvent,B=a.css,F=a.discardElement,D=a.defined,n=a.each,h=a.isFirefox,u=a.marginNames,r=a.merge,x=a.pick,t=a.setAnimation,m=a.stableSort,f=a.win,g=a.wrap;
a.Legend=function(a,d){this.init(a,d)};a.Legend.prototype={init:function(a,d){this.chart=a;this.setOptions(d);d.enabled&&(this.render(),E(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var d=x(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=r(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=d;this.initialItemY=d-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=x(a.symbolWidth,16);this.pages=
[]},update:function(a,d){var e=this.chart;this.setOptions(r(!0,this.options,a));this.destroy();e.isDirtyLegend=e.isDirtyBox=!0;x(d,!0)&&e.redraw()},colorizeItem:function(e,d){e.legendGroup[d?"removeClass":"addClass"]("highcharts-legend-item-hidden");var f=this.options,b=e.legendItem,g=e.legendLine,m=e.legendSymbol,h=this.itemHiddenStyle.color,f=d?f.itemStyle.color:h,q=d?e.color||h:h,n=e.options&&e.options.marker,c={fill:q};b&&b.css({fill:f,color:f});g&&g.attr({stroke:q});m&&(n&&m.isMarker&&(c=e.pointAttribs(),
d||a.objectEach(c,function(a,b){c[b]=h})),m.attr(c))},positionItem:function(a){var d=this.options,e=d.symbolPadding,d=!d.rtl,b=a._legendItemPos,f=b[0],b=b[1],g=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(d?f:this.legendWidth-f-2*e-4,b);g&&(g.x=f,g.y=b)},destroyItem:function(a){var d=a.checkbox;n(["legendItem","legendLine","legendSymbol","legendGroup"],function(d){a[d]&&(a[d]=a[d].destroy())});d&&F(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}n(this.getAllItems(),
function(d){n(["legendItem","legendGroup"],a,d)});n("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var d=this.group&&this.group.alignAttr,e,b=this.clipHeight||this.legendHeight,f=this.titleHeight;d&&(e=d.translateY,n(this.allItems,function(g){var p=g.checkbox,m;p&&(m=e+f+p.y+(a||0)+3,B(p,{left:d.translateX+g.checkboxOffset+p.x-20+"px",top:m+"px",display:m>e-6&&m<e+b-6?"":"none"}))}))},renderTitle:function(){var a=this.options,d=this.padding,
f=a.title,b=0;f.text&&(this.title||(this.title=this.chart.renderer.label(f.text,d-3,d-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(f.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(e){var d=this.options;e.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,e):d.labelFormatter.call(e)})},renderItem:function(a){var d=this.chart,e=d.renderer,b=this.options,f=
"horizontal"===b.layout,g=this.symbolWidth,m=b.symbolPadding,q=this.itemStyle,h=this.itemHiddenStyle,c=this.padding,w=f?x(b.itemDistance,20):0,n=!b.rtl,y=b.width,G=b.itemMarginBottom||0,l=this.itemMarginTop,I=a.legendItem,k=!a.series,z=!k&&a.series.drawLegendSymbol?a.series:a,u=z.options,M=this.createCheckboxForItem&&u&&u.showCheckbox,u=g+m+w+(M?20:0),t=b.useHTML,P=a.options.className;I||(a.legendGroup=e.g("legend-item").addClass("highcharts-"+z.type+"-series highcharts-color-"+a.colorIndex+(P?" "+
P:"")+(k?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=I=e.text("",n?g+m:-m,this.baseline||0,t).css(r(a.visible?q:h)).attr({align:n?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(g=q.fontSize,this.fontMetrics=e.fontMetrics(g,I),this.baseline=this.fontMetrics.f+3+l,I.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,z.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,I,t),M&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);q.width||I.css({width:(b.itemWidth||d.spacingBox.width)-u});this.setText(a);e=I.getBBox();q=a.checkboxOffset=b.itemWidth||a.legendItemWidth||e.width+u;this.itemHeight=e=Math.round(a.legendItemHeight||e.height||this.symbolHeight);f&&this.itemX-c+q>(y||d.spacingBox.width-2*c-b.x)&&(this.itemX=c,this.itemY+=l+this.lastLineHeight+G,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,q);this.lastItemY=l+this.itemY+G;this.lastLineHeight=Math.max(e,this.lastLineHeight);
a._legendItemPos=[this.itemX,this.itemY];f?this.itemX+=q:(this.itemY+=l+e+G,this.lastLineHeight=e);this.offsetWidth=y||Math.max((f?this.itemX-c-w:q)+c,this.offsetWidth)},getAllItems:function(){var a=[];n(this.chart.series,function(d){var e=d&&d.options;d&&x(e.showInLegend,D(e.linkedTo)?!1:void 0,!0)&&(a=a.concat(d.legendItems||("point"===e.legendType?d.data:d)))});return a},adjustMargins:function(a,d){var e=this.chart,b=this.options,f=b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0);
b.floating||n([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(g,p){g.test(f)&&!D(a[p])&&(e[u[p]]=Math.max(e[u[p]],e.legend[(p+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][p]*b[p%2?"x":"y"]+x(b.margin,12)+d[p]))})},render:function(){var a=this,d=a.chart,f=d.renderer,b=a.group,g,h,H,q,u=a.box,c=a.options,w=a.padding;a.itemX=w;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;b||(a.group=b=f.g("legend").attr({zIndex:7}).add(),a.contentGroup=f.g().attr({zIndex:1}).add(b),a.scrollGroup=
f.g().add(a.contentGroup));a.renderTitle();g=a.getAllItems();m(g,function(a,c){return(a.options&&a.options.legendIndex||0)-(c.options&&c.options.legendIndex||0)});c.reversed&&g.reverse();a.allItems=g;a.display=h=!!g.length;a.lastLineHeight=0;n(g,function(c){a.renderItem(c)});H=(c.width||a.offsetWidth)+w;q=a.lastItemY+a.lastLineHeight+a.titleHeight;q=a.handleOverflow(q);q+=w;u||(a.box=u=f.rect().addClass("highcharts-legend-box").attr({r:c.borderRadius}).add(b),u.isNew=!0);u.attr({stroke:c.borderColor,
"stroke-width":c.borderWidth||0,fill:c.backgroundColor||"none"}).shadow(c.shadow);0<H&&0<q&&(u[u.isNew?"attr":"animate"](u.crisp({x:0,y:0,width:H,height:q},u.strokeWidth())),u.isNew=!1);u[h?"show":"hide"]();a.legendWidth=H;a.legendHeight=q;n(g,function(c){a.positionItem(c)});h&&b.align(r(c,{width:H,height:q}),!0,"spacingBox");d.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var d=this,e=this.chart,b=e.renderer,f=this.options,g=f.y,m=this.padding,e=e.spacingBox.height+("top"===f.verticalAlign?
-g:g)-m,g=f.maxHeight,q,h=this.clipRect,c=f.navigation,w=x(c.animation,!0),r=c.arrowSize||12,y=this.nav,G=this.pages,l,I=this.allItems,k=function(a){"number"===typeof a?h.attr({height:a}):h&&(d.clipRect=h.destroy(),d.contentGroup.clip());d.contentGroup.div&&(d.contentGroup.div.style.clip=a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")};"horizontal"!==f.layout||"middle"===f.verticalAlign||f.floating||(e/=2);g&&(e=Math.min(e,g));G.length=0;a>e&&!1!==c.enabled?(this.clipHeight=q=Math.max(e-20-this.titleHeight-
m,0),this.currentPage=x(this.currentPage,1),this.fullHeight=a,n(I,function(a,c){var b=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var d=G.length;if(!d||b-G[d-1]>q&&(l||b)!==G[d-1])G.push(l||b),d++;c===I.length-1&&b+a-G[d-1]>q&&G.push(b);b!==l&&(l=b)}),h||(h=d.clipRect=b.clipRect(0,m,9999,0),d.contentGroup.clip(h)),k(q),y||(this.nav=y=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,r,r).on("click",function(){d.scroll(-1,w)}).add(y),this.pager=b.text("",15,
10).addClass("highcharts-legend-navigation").css(c.style).add(y),this.down=b.symbol("triangle-down",0,0,r,r).on("click",function(){d.scroll(1,w)}).add(y)),d.scroll(0),a=e):y&&(k(),this.nav=y.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,d){var e=this.pages,b=e.length;a=this.currentPage+a;var f=this.clipHeight,g=this.options.navigation,m=this.pager,q=this.padding;a>b&&(a=b);0<a&&(void 0!==d&&t(d,this.chart),this.nav.attr({translateX:q,translateY:f+this.padding+
7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),m.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?g.inactiveColor:g.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?g.inactiveColor:g.activeColor}).css({cursor:a===b?"default":"pointer"}),d=-e[a-1]+this.initialItemY,
this.scrollGroup.animate({translateY:d}),this.currentPage=a,this.positionCheckboxes(d))}};a.LegendSymbolMixin={drawRectangle:function(a,d){var e=a.symbolHeight,b=a.options.squareSymbol;d.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-e)/2:0,a.baseline-e+1,b?e:a.symbolWidth,e,x(a.options.symbolRadius,e/2)).addClass("highcharts-point").attr({zIndex:3}).add(d.legendGroup)},drawLineMarker:function(a){var d=this.options,e=d.marker,b=a.symbolWidth,f=a.symbolHeight,g=f/2,m=this.chart.renderer,q=
this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var h;h={"stroke-width":d.lineWidth||0};d.dashStyle&&(h.dashstyle=d.dashStyle);this.legendLine=m.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(h).add(q);e&&!1!==e.enabled&&(d=Math.min(x(e.radius,g),g),0===this.symbol.indexOf("url")&&(e=r(e,{width:f,height:f}),d=0),this.legendSymbol=e=m.symbol(this.symbol,b/2-d,a-d,2*d,2*d,e).addClass("highcharts-point").add(q),e.isMarker=!0)}};(/Trident\/7\.0/.test(f.navigator.userAgent)||h)&&
g(a.Legend.prototype,"positionItem",function(a,d){var e=this,b=function(){d._legendItemPos&&a.call(e,d)};b();setTimeout(b)})})(L);(function(a){var E=a.addEvent,B=a.animate,F=a.animObject,D=a.attr,n=a.doc,h=a.Axis,u=a.createElement,r=a.defaultOptions,x=a.discardElement,t=a.charts,m=a.css,f=a.defined,g=a.each,e=a.extend,d=a.find,p=a.fireEvent,b=a.getStyle,A=a.grep,v=a.isNumber,H=a.isObject,q=a.isString,J=a.Legend,c=a.marginNames,w=a.merge,K=a.objectEach,y=a.Pointer,G=a.pick,l=a.pInt,I=a.removeEvent,
k=a.seriesTypes,z=a.splat,Q=a.svg,M=a.syncTimeout,N=a.win,P=a.Renderer,O=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,c,b){return new O(a,c,b)};e(O.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(q(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(c,b){var l,d,k=c.series,e=c.plotOptions||{};c.series=null;l=w(r,c);for(d in l.plotOptions)l.plotOptions[d].tooltip=e[d]&&w(e[d].tooltip)||void 0;l.tooltip.userOptions=
c.chart&&c.chart.forExport&&c.tooltip.userOptions||c.tooltip;l.series=c.series=k;this.userOptions=c;c=l.chart;d=c.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=l;this.axes=[];this.series=[];this.hasCartesianSeries=c.showAxes;var f=this;f.index=t.length;t.push(f);a.chartCount++;d&&K(d,function(a,c){E(f,c,a)});f.xAxis=[];f.yAxis=[];f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(c){var b=this.options.chart;
(b=k[c.type||b.type||b.defaultSeriesType])||a.error(17,!0);b=new b;b.init(this,c);return b},orderSeries:function(a){var c=this.series;for(a=a||0;a<c.length;a++)c[a]&&(c[a].index=a,c[a].name=c[a].name||"Series "+(c[a].index+1))},isInsidePlot:function(a,c,b){var l=b?c:a;a=b?a:c;return 0<=l&&l<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(c){var b=this.axes,l=this.series,d=this.pointer,k=this.legend,f=this.isDirtyLegend,y,m,G=this.hasCartesianSeries,q=this.isDirtyBox,z,h=this.renderer,w=
h.isHidden(),I=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(c,this);w&&this.temporaryDisplay();this.layOutTitles();for(c=l.length;c--;)if(z=l[c],z.options.stacking&&(y=!0,z.isDirty)){m=!0;break}if(m)for(c=l.length;c--;)z=l[c],z.options.stacking&&(z.isDirty=!0);g(l,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&p(a,"updatedData")});f&&k.options.enabled&&(k.render(),this.isDirtyLegend=!1);y&&this.getStacks();G&&g(b,function(a){a.updateNames();
a.setScale()});this.getMargins();G&&(g(b,function(a){a.isDirty&&(q=!0)}),g(b,function(a){var c=a.min+","+a.max;a.extKey!==c&&(a.extKey=c,I.push(function(){p(a,"afterSetExtremes",e(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(q||y)&&a.redraw()}));q&&this.drawChartBox();p(this,"predraw");g(l,function(a){(q||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});d&&d.reset(!0);h.draw();p(this,"redraw");p(this,"render");w&&this.temporaryDisplay(!0);g(I,function(a){a.call()})},get:function(a){function c(c){return c.id===
a||c.options&&c.options.id===a}var b,l=this.series,k;b=d(this.axes,c)||d(this.series,c);for(k=0;!b&&k<l.length;k++)b=d(l[k].points||[],c);return b},getAxes:function(){var a=this,c=this.options,b=c.xAxis=z(c.xAxis||{}),c=c.yAxis=z(c.yAxis||{});g(b,function(a,c){a.index=c;a.isX=!0});g(c,function(a,c){a.index=c});b=b.concat(c);g(b,function(c){new h(a,c)})},getSelectedPoints:function(){var a=[];g(this.series,function(c){a=a.concat(A(c.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return A(this.series,
function(a){return a.selected})},setTitle:function(a,c,b){var l=this,d=l.options,k;k=d.title=w({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=w({style:{color:"#666666"}},d.subtitle,c);g([["title",a,k],["subtitle",c,d]],function(a,c){var b=a[0],d=l[b],k=a[1];a=a[2];d&&k&&(l[b]=d=d.destroy());a&&a.text&&!d&&(l[b]=l.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).add(),l[b].update=function(a){l.setTitle(!c&&a,c&&
a)},l[b].css(a.style))});l.layOutTitles(b)},layOutTitles:function(a){var c=0,b,l=this.renderer,d=this.spacingBox;g(["title","subtitle"],function(a){var b=this[a],k=this.options[a];a="title"===a?-3:k.verticalAlign?0:c+2;var f;b&&(f=k.style.fontSize,f=l.fontMetrics(f,b).b,b.css({width:(k.width||d.width+k.widthAdjust)+"px"}).align(e({y:a+f},k),!1,"spacingBox"),k.floating||k.verticalAlign||(c=Math.ceil(c+b.getBBox(k.useHTML).height)))},this);b=this.titleOffset!==c;this.titleOffset=c;!this.isDirtyBox&&
b&&(this.isDirtyBox=b,this.hasRendered&&G(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var c=this.options.chart,l=c.width,c=c.height,d=this.renderTo;f(l)||(this.containerWidth=b(d,"width"));f(c)||(this.containerHeight=b(d,"height"));this.chartWidth=Math.max(0,l||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(c,this.chartWidth)||this.containerHeight||400)},temporaryDisplay:function(c){var l=this.renderTo;if(c)for(;l&&l.style;)l.hcOrigStyle&&(a.css(l,l.hcOrigStyle),
delete l.hcOrigStyle),l=l.parentNode;else for(;l&&l.style;)"none"===b(l,"display",!1)&&(l.hcOrigStyle={display:l.style.display,height:l.style.height,overflow:l.style.overflow},c={display:"block",overflow:"hidden"},l!==this.renderTo&&(c.height=0),a.css(l,c),l.style.setProperty&&l.style.setProperty("display","block","important")),l=l.parentNode},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var c,b=this.options,d=b.chart,k,f;c=this.renderTo;
var g=a.uniqueKey(),y;c||(this.renderTo=c=d.renderTo);q(c)&&(this.renderTo=c=n.getElementById(c));c||a.error(13,!0);k=l(D(c,"data-highcharts-chart"));v(k)&&t[k]&&t[k].hasRendered&&t[k].destroy();D(c,"data-highcharts-chart",this.index);c.innerHTML="";d.skipClone||c.offsetWidth||this.temporaryDisplay();this.getChartSize();k=this.chartWidth;f=this.chartHeight;y=e({position:"relative",overflow:"hidden",width:k+"px",height:f+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},
d.style);this.container=c=u("div",{id:g},y,c);this._cursor=c.style.cursor;this.renderer=new (a[d.renderer]||P)(c,k,f,null,d.forExport,b.exporting&&b.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},getMargins:function(a){var c=this.spacing,b=this.margin,l=this.titleOffset;this.resetMargins();l&&!f(b[0])&&(this.plotTop=Math.max(this.plotTop,l+this.options.title.margin+c[0]));this.legend.display&&this.legend.adjustMargins(b,c);
this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],l=a.margin;a.hasCartesianSeries&&g(a.axes,function(a){a.visible&&a.getOffset()});g(c,function(c,d){f(l[d])||(a[c]+=b[d])});a.setChartSize()},reflow:function(a){var c=this,l=c.options.chart,d=c.renderTo,k=f(l.width),e=l.width||b(d,"width"),l=l.height||b(d,
"height"),d=a?a.target:N;if(!k&&!c.isPrinting&&e&&l&&(d===N||d===n)){if(e!==c.containerWidth||l!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=M(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=e;c.containerHeight=l}},initReflow:function(){var a=this,c;c=E(N,"resize",function(c){a.reflow(c)});E(a,"destroy",c)},setSize:function(c,b,l){var d=this,k=d.renderer;d.isResizing+=1;a.setAnimation(l,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;
void 0!==c&&(d.options.chart.width=c);void 0!==b&&(d.options.chart.height=b);d.getChartSize();c=k.globalAnimation;(c?B:m)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},c);d.setChartSize(!0);k.setSize(d.chartWidth,d.chartHeight,l);g(d.axes,function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(l);d.oldChartHeight=null;p(d,"resize");M(function(){d&&p(d,"endResize",null,function(){--d.isResizing})},F(c).duration)},setChartSize:function(a){function c(a){a=
y[a]||0;return Math.max(z||a,a)/2}var b=this.inverted,l=this.renderer,d=this.chartWidth,k=this.chartHeight,f=this.options.chart,e=this.spacing,y=this.clipOffset,m,p,G,q,z;this.plotLeft=m=Math.round(this.plotLeft);this.plotTop=p=Math.round(this.plotTop);this.plotWidth=G=Math.max(0,Math.round(d-m-this.marginRight));this.plotHeight=q=Math.max(0,Math.round(k-p-this.marginBottom));this.plotSizeX=b?q:G;this.plotSizeY=b?G:q;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=l.spacingBox={x:e[3],y:e[0],
width:d-e[3]-e[1],height:k-e[0]-e[2]};this.plotBox=l.plotBox={x:m,y:p,width:G,height:q};z=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(c(3));l=Math.ceil(c(0));this.clipBox={x:b,y:l,width:Math.floor(this.plotSizeX-c(1)-b),height:Math.max(0,Math.floor(this.plotSizeY-c(2)-l))};a||g(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;g(["margin","spacing"],function(c){var l=b[c],d=H(l)?l:[l,l,l,l];g(["Top","Right","Bottom","Left"],function(l,
k){a[c][k]=G(b[c+l],d[k])})});g(c,function(c,b){a[c]=G(a.margin[b],a.spacing[b])});a.axisOffset=[0,0,0,0];a.clipOffset=[]},drawChartBox:function(){var a=this.options.chart,c=this.renderer,b=this.chartWidth,l=this.chartHeight,d=this.chartBackground,k=this.plotBackground,e=this.plotBorder,f,g=this.plotBGImage,y=a.backgroundColor,m=a.plotBackgroundColor,p=a.plotBackgroundImage,G,q=this.plotLeft,z=this.plotTop,h=this.plotWidth,w=this.plotHeight,I=this.plotBox,v=this.clipRect,n=this.clipBox,r="animate";
d||(this.chartBackground=d=c.rect().addClass("highcharts-background").add(),r="attr");f=a.borderWidth||0;G=f+(a.shadow?8:0);y={fill:y||"none"};if(f||d["stroke-width"])y.stroke=a.borderColor,y["stroke-width"]=f;d.attr(y).shadow(a.shadow);d[r]({x:G/2,y:G/2,width:b-G-f%2,height:l-G-f%2,r:a.borderRadius});r="animate";k||(r="attr",this.plotBackground=k=c.rect().addClass("highcharts-plot-background").add());k[r](I);k.attr({fill:m||"none"}).shadow(a.plotShadow);p&&(g?g.animate(I):this.plotBGImage=c.image(p,
q,z,h,w).add());v?v.animate({width:n.width,height:n.height}):this.clipRect=c.clipRect(n);r="animate";e||(r="attr",this.plotBorder=e=c.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[r](e.crisp({x:q,y:z,width:h,height:w},-e.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,c=a.options.chart,b,l=a.options.series,d,e;g(["inverted","angular","polar"],function(f){b=k[c.type||c.defaultSeriesType];
e=c[f]||b&&b.prototype[f];for(d=l&&l.length;!e&&d--;)(b=k[l[d].type])&&b.prototype[f]&&(e=!0);a[f]=e})},linkSeries:function(){var a=this,c=a.series;g(c,function(a){a.linkedSeries.length=0});g(c,function(c){var b=c.options.linkedTo;q(b)&&(b=":previous"===b?a.series[c.index-1]:a.get(b))&&b.linkedParent!==c&&(b.linkedSeries.push(c),c.linkedParent=b,c.visible=G(c.options.visible,b.options.visible,c.visible))})},renderSeries:function(){g(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=
this,c=a.options.labels;c.items&&g(c.items,function(b){var d=e(c.style,b.style),k=l(d.left)+a.plotLeft,f=l(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(b.html,k,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,c=this.renderer,b=this.options,l,d,k;this.setTitle();this.legend=new J(this,b.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();b=this.plotWidth;l=this.plotHeight-=21;g(a,function(a){a.setScale()});this.getAxisMargins();d=
1.1<b/this.plotWidth;k=1.05<l/this.plotHeight;if(d||k)g(a,function(a){(a.horiz&&d||!a.horiz&&k)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&g(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=c.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var c=this;a=w(!0,this.options.credits,a);a.enabled&&!this.credits&&
(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(N.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){c.credits=c.credits.destroy();c.addCredits(a)})},destroy:function(){var c=this,b=c.axes,d=c.series,l=c.container,k,f=l&&l.parentNode;p(c,"destroy");c.renderer.forExport?a.erase(t,c):t[c.index]=void 0;a.chartCount--;c.renderTo.removeAttribute("data-highcharts-chart");
I(c);for(k=b.length;k--;)b[k]=b[k].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(k=d.length;k--;)d[k]=d[k].destroy();g("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var b=c[a];b&&b.destroy&&(c[a]=b.destroy())});l&&(l.innerHTML="",I(l),f&&x(l));K(c,function(a,b){delete c[b]})},isReadyToRender:function(){var a=this;return Q||N!=N.top||
"complete"===n.readyState?!0:(n.attachEvent("onreadystatechange",function(){n.detachEvent("onreadystatechange",a.firstRender);"complete"===n.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,c=a.options;if(a.isReadyToRender()){a.getContainer();p(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();g(c.series||[],function(c){a.initSeries(c)});a.linkSeries();p(a,"beforeRender");y&&(a.pointer=new y(a,c));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();
a.temporaryDisplay(!0)}},onload:function(){g([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);p(this,"load");p(this,"render");f(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(L);(function(a){var E,B=a.each,F=a.extend,D=a.erase,n=a.fireEvent,h=a.format,u=a.isArray,r=a.isNumber,x=a.pick,t=a.removeEvent;a.Point=E=function(){};a.Point.prototype={init:function(a,f,g){this.series=a;this.color=a.color;this.applyOptions(f,
g);a.options.colorByPoint?(f=a.options.colors||a.chart.options.colors,this.color=this.color||f[a.colorCounter],f=f.length,g=a.colorCounter,a.colorCounter++,a.colorCounter===f&&(a.colorCounter=0)):g=a.colorIndex;this.colorIndex=x(this.colorIndex,g);a.chart.pointCount++;return this},applyOptions:function(a,f){var g=this.series,e=g.options.pointValKey||g.pointValKey;a=E.prototype.optionsToObject.call(this,a);F(this,a);this.options=this.options?F(this.options,a):a;a.group&&delete this.group;e&&(this.y=
this[e]);this.isNull=x(this.isValid&&!this.isValid(),null===this.x||!r(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===f&&g.xAxis&&g.xAxis.hasNames&&(this.x=g.xAxis.nameToX(this));void 0===this.x&&g&&(this.x=void 0===f?g.autoIncrement(this):f);return this},optionsToObject:function(a){var f={},g=this.series,e=g.options.keys,d=e||g.pointArrayMap||["y"],p=d.length,b=0,m=0;if(r(a)||null===a)f[d[0]]=a;else if(u(a))for(!e&&a.length>p&&(g=typeof a[0],"string"===g?f.name=a[0]:"number"===
g&&(f.x=a[0]),b++);m<p;)e&&void 0===a[b]||(f[d[m]]=a[b]),b++,m++;else"object"===typeof a&&(f=a,a.dataLabels&&(g._hasPointLabels=!0),a.marker&&(g._hasPointMarkers=!0));return f},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?
" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,f=a.zones,a=a.zoneAxis||"y",g=0,e;for(e=f[g];this[a]>=e.value;)e=f[++g];e&&e.color&&!this.options.color&&(this.color=e.color);return e},destroy:function(){var a=this.series.chart,f=a.hoverPoints,g;a.pointCount--;f&&(this.setState(),D(f,this),f.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)t(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);
for(g in this)this[g]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],f,g=6;g--;)f=a[g],this[f]&&(this[f]=this[f].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var f=this.series,g=f.tooltipOptions,e=x(g.valueDecimals,""),
d=g.valuePrefix||"",p=g.valueSuffix||"";B(f.pointArrayMap||["y"],function(b){b="{point."+b;if(d||p)a=a.replace(b+"}",d+b+"}"+p);a=a.replace(b+"}",b+":,."+e+"f}")});return h(a,{point:this,series:this.series})},firePointEvent:function(a,f,g){var e=this,d=this.series.options;(d.point.events[a]||e.options&&e.options.events&&e.options.events[a])&&this.importEvents();"click"===a&&d.allowPointSelect&&(g=function(a){e.select&&e.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});n(this,a,f,g)},visible:!0}})(L);
(function(a){var E=a.addEvent,B=a.animObject,F=a.arrayMax,D=a.arrayMin,n=a.correctFloat,h=a.Date,u=a.defaultOptions,r=a.defaultPlotOptions,x=a.defined,t=a.each,m=a.erase,f=a.extend,g=a.fireEvent,e=a.grep,d=a.isArray,p=a.isNumber,b=a.isString,A=a.merge,v=a.objectEach,H=a.pick,q=a.removeEvent,J=a.splat,c=a.SVGElement,w=a.syncTimeout,K=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,
states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},
halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,c){var b=this,d,k=a.series,e;b.chart=a;b.options=c=b.setOptions(c);b.linkedSeries=[];b.bindAxes();f(b,{name:c.name,state:"",visible:!1!==c.visible,selected:!0===c.selected});d=c.events;v(d,function(a,c){E(b,c,a)});if(d&&
d.click||c.point&&c.point.events&&c.point.events.click||c.allowPointSelect)a.runTrackerClick=!0;b.getColor();b.getSymbol();t(b.parallelArrays,function(a){b[a+"Data"]=[]});b.setData(c.data,!1);b.isCartesian&&(a.hasCartesianSeries=!0);k.length&&(e=k[k.length-1]);b._i=H(e&&e._i,-1)+1;a.orderSeries(this.insert(k))},insert:function(a){var c=this.options.index,b;if(p(c)){for(b=a.length;b--;)if(c>=H(a[b].options.index,a[b]._i)){a.splice(b+1,0,this);break}-1===b&&a.unshift(this);b+=1}else a.push(this);return H(b,
a.length-1)},bindAxes:function(){var c=this,b=c.options,d=c.chart,e;t(c.axisTypes||[],function(l){t(d[l],function(a){e=a.options;if(b[l]===e.index||void 0!==b[l]&&b[l]===e.id||void 0===b[l]&&0===e.index)c.insert(a.series),c[l]=a,a.isDirty=!0});c[l]||c.optionalAxis===l||a.error(18,!0)})},updateParallelArrays:function(a,c){var b=a.series,d=arguments,k=p(c)?function(d){var l="y"===d&&b.toYData?b.toYData(a):a[d];b[d+"Data"][c]=l}:function(a){Array.prototype[c].apply(b[a+"Data"],Array.prototype.slice.call(d,
2))};t(b.parallelArrays,k)},autoIncrement:function(){var a=this.options,c=this.xIncrement,b,d=a.pointIntervalUnit,c=H(c,a.pointStart,0);this.pointInterval=b=H(this.pointInterval,a.pointInterval,1);d&&(a=new h(c),"day"===d?a=+a[h.hcSetDate](a[h.hcGetDate]()+b):"month"===d?a=+a[h.hcSetMonth](a[h.hcGetMonth]()+b):"year"===d&&(a=+a[h.hcSetFullYear](a[h.hcGetFullYear]()+b)),b=a-c);this.xIncrement=c+b;return c},setOptions:function(a){var c=this.chart,b=c.options,d=b.plotOptions,k=(c.userOptions||{}).plotOptions||
{},e=d[this.type];this.userOptions=a;c=A(e,d.series,a);this.tooltipOptions=A(u.tooltip,u.plotOptions.series&&u.plotOptions.series.tooltip,u.plotOptions[this.type].tooltip,b.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=H(a.stickyTracking,k[this.type]&&k[this.type].stickyTracking,k.series&&k.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:c.stickyTracking);null===e.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=
(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&x(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,c,b){var d,l=this.chart,e=this.userOptions,f=a+"Index",g=a+"Counter",y=b?b.length:H(l.options.chart[a+"Count"],l[a+"Count"]);c||(d=H(e[f],e["_"+f]),x(d)||(l.series.length||
(l[g]=0),e["_"+f]=d=l[g]%y,l[g]+=1),b&&(c=b[d]));void 0!==d&&(this[f]=d);this[a]=c},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||r[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(c,e,l,f){var k=this,g=k.points,y=g&&g.length||0,q,m=k.options,h=k.chart,w=null,G=k.xAxis,
I=m.turboThreshold,v=this.xData,n=this.yData,r=(q=k.pointArrayMap)&&q.length;c=c||[];q=c.length;e=H(e,!0);if(!1!==f&&q&&y===q&&!k.cropped&&!k.hasGroupedData&&k.visible)t(c,function(a,c){g[c].update&&a!==m.data[c]&&g[c].update(a,!1,null,!1)});else{k.xIncrement=null;k.colorCounter=0;t(this.parallelArrays,function(a){k[a+"Data"].length=0});if(I&&q>I){for(l=0;null===w&&l<q;)w=c[l],l++;if(p(w))for(l=0;l<q;l++)v[l]=this.autoIncrement(),n[l]=c[l];else if(d(w))if(r)for(l=0;l<q;l++)w=c[l],v[l]=w[0],n[l]=w.slice(1,
r+1);else for(l=0;l<q;l++)w=c[l],v[l]=w[0],n[l]=w[1];else a.error(12)}else for(l=0;l<q;l++)void 0!==c[l]&&(w={series:k},k.pointClass.prototype.applyOptions.apply(w,[c[l]]),k.updateParallelArrays(w,l));b(n[0])&&a.error(14,!0);k.data=[];k.options.data=k.userOptions.data=c;for(l=y;l--;)g[l]&&g[l].destroy&&g[l].destroy();G&&(G.minRange=G.userMinRange);k.isDirty=h.isDirtyBox=!0;k.isDirtyData=!!g;l=!1}"point"===m.legendType&&(this.processData(),this.generatePoints());e&&h.redraw(l)},processData:function(c){var b=
this.xData,d=this.yData,e=b.length,k;k=0;var f,g,y=this.xAxis,p,q=this.options;p=q.cropThreshold;var m=this.getExtremesFromAll||q.getExtremesFromAll,w=this.isCartesian,q=y&&y.val2lin,h=y&&y.isLog,v,n;if(w&&!this.isDirty&&!y.isDirty&&!this.yAxis.isDirty&&!c)return!1;y&&(c=y.getExtremes(),v=c.min,n=c.max);if(w&&this.sorted&&!m&&(!p||e>p||this.forceCrop))if(b[e-1]<v||b[0]>n)b=[],d=[];else if(b[0]<v||b[e-1]>n)k=this.cropData(this.xData,this.yData,v,n),b=k.xData,d=k.yData,k=k.start,f=!0;for(p=b.length||
1;--p;)e=h?q(b[p])-q(b[p-1]):b[p]-b[p-1],0<e&&(void 0===g||e<g)?g=e:0>e&&this.requireSorting&&a.error(15);this.cropped=f;this.cropStart=k;this.processedXData=b;this.processedYData=d;this.closestPointRange=g},cropData:function(a,c,b,d){var l=a.length,e=0,f=l,g=H(this.cropShoulder,1),y;for(y=0;y<l;y++)if(a[y]>=b){e=Math.max(0,y-g);break}for(b=y;b<l;b++)if(a[b]>d){f=b+g;break}return{xData:a.slice(e,f),yData:c.slice(e,f),start:e,end:f}},generatePoints:function(){var a=this.options,c=a.data,b=this.data,
d,k=this.processedXData,e=this.processedYData,f=this.pointClass,g=k.length,p=this.cropStart||0,q,m=this.hasGroupedData,a=a.keys,w,h=[],v;b||m||(b=[],b.length=c.length,b=this.data=b);a&&m&&(this.options.keys=!1);for(v=0;v<g;v++)q=p+v,m?(w=(new f).init(this,[k[v]].concat(J(e[v]))),w.dataGroup=this.groupMap[v]):(w=b[q])||void 0===c[q]||(b[q]=w=(new f).init(this,c[q],k[v])),w&&(w.index=q,h[v]=w);this.options.keys=a;if(b&&(g!==(d=b.length)||m))for(v=0;v<d;v++)v!==p||m||(v+=g),b[v]&&(b[v].destroyElements(),
b[v].plotX=void 0);this.data=b;this.points=h},getExtremes:function(a){var c=this.yAxis,b=this.processedXData,e,k=[],f=0;e=this.xAxis.getExtremes();var g=e.min,y=e.max,q,m,w,h;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(h=0;h<e;h++)if(m=b[h],w=a[h],q=(p(w,!0)||d(w))&&(!c.positiveValuesOnly||w.length||0<w),m=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(b[h]||m)>=g&&(b[h]||m)<=y,q&&m)if(q=w.length)for(;q--;)null!==w[q]&&(k[f++]=w[q]);else k[f++]=w;this.dataMin=
D(k);this.dataMax=F(k)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,c=a.stacking,b=this.xAxis,d=b.categories,k=this.yAxis,e=this.points,f=e.length,g=!!this.modifyValue,q=a.pointPlacement,m="between"===q||p(q),w=a.threshold,h=a.startFromThreshold?w:0,v,r,K,A,u=Number.MAX_VALUE;"between"===q&&(q=.5);p(q)&&(q*=H(a.pointRange||b.pointRange));for(a=0;a<f;a++){var t=e[a],J=t.x,B=t.y;r=t.low;var D=c&&k.stacks[(this.negStacks&&B<(h?0:w)?"-":"")+this.stackKey],
E;k.positiveValuesOnly&&null!==B&&0>=B&&(t.isNull=!0);t.plotX=v=n(Math.min(Math.max(-1E5,b.translate(J,0,0,0,1,q,"flags"===this.type)),1E5));c&&this.visible&&!t.isNull&&D&&D[J]&&(A=this.getStackIndicator(A,J,this.index),E=D[J],B=E.points[A.key],r=B[0],B=B[1],r===h&&A.key===D[J].base&&(r=H(w,k.min)),k.positiveValuesOnly&&0>=r&&(r=null),t.total=t.stackTotal=E.total,t.percentage=E.total&&t.y/E.total*100,t.stackY=B,E.setOffset(this.pointXOffset||0,this.barW||0));t.yBottom=x(r)?k.translate(r,0,1,0,1):
null;g&&(B=this.modifyValue(B,t));t.plotY=r="number"===typeof B&&Infinity!==B?Math.min(Math.max(-1E5,k.translate(B,0,1,0,1)),1E5):void 0;t.isInside=void 0!==r&&0<=r&&r<=k.len&&0<=v&&v<=b.len;t.clientX=m?n(b.translate(J,0,0,0,1,q)):v;t.negative=t.y<(w||0);t.category=d&&void 0!==d[t.x]?d[t.x]:t.x;t.isNull||(void 0!==K&&(u=Math.min(u,Math.abs(v-K))),K=v);t.zone=this.zones.length&&t.getZone()}this.closestPointRangePx=u},getValidPoints:function(a,c){var b=this.chart;return e(a||this.points||[],function(a){return c&&
!b.isInsidePlot(a.plotX,a.plotY,b.inverted)?!1:!a.isNull})},setClip:function(a){var c=this.chart,b=this.options,d=c.renderer,k=c.inverted,e=this.clipBox,f=e||c.clipBox,g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,f.height,b.xAxis,b.yAxis].join(),p=c[g],q=c[g+"m"];p||(a&&(f.width=0,c[g+"m"]=q=d.clipRect(-99,k?-c.plotLeft:-c.plotTop,99,k?c.chartWidth:c.chartHeight)),c[g]=p=d.clipRect(f),p.count={length:0});a&&!p.count[this.index]&&(p.count[this.index]=!0,p.count.length+=1);!1!==b.clip&&
(this.group.clip(a||e?p:c.clipRect),this.markerGroup.clip(q),this.sharedClipKey=g);a||(p.count[this.index]&&(delete p.count[this.index],--p.count.length),0===p.count.length&&g&&c[g]&&(e||(c[g]=c[g].destroy()),c[g+"m"]&&(c[g+"m"]=c[g+"m"].destroy())))},animate:function(a){var c=this.chart,b=B(this.options.animation),d;a?this.setClip(b):(d=this.sharedClipKey,(a=c[d])&&a.animate({width:c.plotSizeX},b),c[d+"m"]&&c[d+"m"].animate({width:c.plotSizeX+99},b),this.animate=null)},afterAnimate:function(){this.setClip();
g(this,"afterAnimate")},drawPoints:function(){var a=this.points,c=this.chart,b,d,k,e,f=this.options.marker,g,q,m,w,h=this[this.specialGroup]||this.markerGroup,v=H(f.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*f.radius);if(!1!==f.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)k=a[d],b=k.plotY,e=k.graphic,g=k.marker||{},q=!!k.marker,m=v&&void 0===g.enabled||g.enabled,w=k.isInside,m&&p(b)&&null!==k.y?(b=H(g.symbol,this.symbol),k.hasImage=0===b.indexOf("url"),m=this.markerAttribs(k,
k.selected&&"select"),e?e[w?"show":"hide"](!0).animate(m):w&&(0<m.width||k.hasImage)&&(k.graphic=e=c.renderer.symbol(b,m.x,m.y,m.width,m.height,q?g:f).add(h)),e&&e.attr(this.pointAttribs(k,k.selected&&"select")),e&&e.addClass(k.getClassName(),!0)):e&&(k.graphic=e.destroy())},markerAttribs:function(a,c){var b=this.options.marker,d=a.marker||{},k=H(d.radius,b.radius);c&&(b=b.states[c],c=d.states&&d.states[c],k=H(c&&c.radius,b&&b.radius,k+(b&&b.radiusPlus||0)));a.hasImage&&(k=0);a={x:Math.floor(a.plotX)-
k,y:a.plotY-k};k&&(a.width=a.height=2*k);return a},pointAttribs:function(a,c){var b=this.options.marker,d=a&&a.options,k=d&&d.marker||{},e=this.color,f=d&&d.color,g=a&&a.color,d=H(k.lineWidth,b.lineWidth);a=a&&a.zone&&a.zone.color;e=f||a||g||e;a=k.fillColor||b.fillColor||e;e=k.lineColor||b.lineColor||e;c&&(b=b.states[c],c=k.states&&k.states[c]||{},d=H(c.lineWidth,b.lineWidth,d+H(c.lineWidthPlus,b.lineWidthPlus,0)),a=c.fillColor||b.fillColor||a,e=c.lineColor||b.lineColor||e);return{stroke:e,"stroke-width":d,
fill:a}},destroy:function(){var a=this,b=a.chart,d=/AppleWebKit\/533/.test(K.navigator.userAgent),e,k,f=a.data||[],p,w;g(a,"destroy");q(a);t(a.axisTypes||[],function(c){(w=a[c])&&w.series&&(m(w.series,a),w.isDirty=w.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(k=f.length;k--;)(p=f[k])&&p.destroy&&p.destroy();a.points=null;clearTimeout(a.animationTimeout);v(a,function(a,b){a instanceof c&&!a.survive&&(e=d&&"group"===b?"hide":"destroy",a[e]())});b.hoverSeries===a&&(b.hoverSeries=
null);m(b.series,a);b.orderSeries();v(a,function(c,b){delete a[b]})},getGraphPath:function(a,c,b){var d=this,l=d.options,e=l.step,f,g=[],p=[],q;a=a||d.points;(f=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&f&&(e=4-e);!l.connectNulls||c||b||(a=this.getValidPoints(a));t(a,function(k,f){var m=k.plotX,w=k.plotY,h=a[f-1];(k.leftCliff||h&&h.rightCliff)&&!b&&(q=!0);k.isNull&&!x(c)&&0<f?q=!l.connectNulls:k.isNull&&!c?q=!0:(0===f||q?f=["M",k.plotX,k.plotY]:d.getPointSpline?f=d.getPointSpline(a,
k,f):e?(f=1===e?["L",h.plotX,w]:2===e?["L",(h.plotX+m)/2,h.plotY,"L",(h.plotX+m)/2,w]:["L",m,h.plotY],f.push("L",m,w)):f=["L",m,w],p.push(k.x),e&&p.push(k.x),g.push.apply(g,f),q=!1)});g.xMap=p;return d.graphPath=g},drawGraph:function(){var a=this,c=this.options,b=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",c.lineColor||this.color,c.dashStyle]];t(this.zones,function(b,l){d.push(["zone-graph-"+l,"highcharts-graph highcharts-zone-graph-"+l+" "+(b.className||""),b.color||
a.color,b.dashStyle||c.dashStyle])});t(d,function(d,l){var k=d[0],e=a[k];e?(e.endX=b.xMap,e.animate({d:b})):b.length&&(a[k]=a.chart.renderer.path(b).addClass(d[1]).attr({zIndex:1}).add(a.group),e={stroke:d[2],"stroke-width":c.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?e.dashstyle=d[3]:"square"!==c.linecap&&(e["stroke-linecap"]=e["stroke-linejoin"]="round"),e=a[k].attr(e).shadow(2>l&&c.shadow));e&&(e.startX=b.xMap,e.isArea=b.isArea)})},applyZones:function(){var a=this,c=this.chart,b=c.renderer,
d=this.zones,k,e,f=this.clips||[],g,p=this.graph,q=this.area,m=Math.max(c.chartWidth,c.chartHeight),w=this[(this.zoneAxis||"y")+"Axis"],h,v,n=c.inverted,r,K,A,u,J=!1;d.length&&(p||q)&&w&&void 0!==w.min&&(v=w.reversed,r=w.horiz,p&&p.hide(),q&&q.hide(),h=w.getExtremes(),t(d,function(d,l){k=v?r?c.plotWidth:0:r?0:w.toPixels(h.min);k=Math.min(Math.max(H(e,k),0),m);e=Math.min(Math.max(Math.round(w.toPixels(H(d.value,h.max),!0)),0),m);J&&(k=e=w.toPixels(h.max));K=Math.abs(k-e);A=Math.min(k,e);u=Math.max(k,
e);w.isXAxis?(g={x:n?u:A,y:0,width:K,height:m},r||(g.x=c.plotHeight-g.x)):(g={x:0,y:n?u:A,width:m,height:K},r&&(g.y=c.plotWidth-g.y));n&&b.isVML&&(g=w.isXAxis?{x:0,y:v?A:u,height:g.width,width:c.chartWidth}:{x:g.y-c.plotLeft-c.spacingBox.x,y:0,width:g.height,height:c.chartHeight});f[l]?f[l].animate(g):(f[l]=b.clipRect(g),p&&a["zone-graph-"+l].clip(f[l]),q&&a["zone-area-"+l].clip(f[l]));J=d.value>h.max}),this.clips=f)},invertGroups:function(a){function c(){t(["group","markerGroup"],function(c){b[c]&&
(d.renderer.isVML&&b[c].attr({width:b.yAxis.len,height:b.xAxis.len}),b[c].width=b.yAxis.len,b[c].height=b.xAxis.len,b[c].invert(a))})}var b=this,d=b.chart,k;b.xAxis&&(k=E(d,"resize",c),E(b,"destroy",k),c(a),b.invertGroups=c)},plotGroup:function(a,c,b,d,k){var l=this[a],e=!l;e&&(this[a]=l=this.chart.renderer.g().attr({zIndex:d||.1}).add(k));l.addClass("highcharts-"+c+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||""),
!0);l.attr({visibility:b})[e?"attr":"animate"](this.getPlotBox());return l},getPlotBox:function(){var a=this.chart,c=this.xAxis,b=this.yAxis;a.inverted&&(c=b,b=this.xAxis);return{translateX:c?c.left:a.plotLeft,translateY:b?b.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,c=a.chart,b,d=a.options,k=!!a.animate&&c.renderer.isSVG&&B(d.animation).duration,e=a.visible?"inherit":"hidden",f=d.zIndex,g=a.hasRendered,p=c.seriesGroup,q=c.inverted;b=a.plotGroup("group","series",e,f,p);a.markerGroup=
a.plotGroup("markerGroup","markers",e,f,p);k&&a.animate(!0);b.inverted=a.isCartesian?q:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(q);!1===d.clip||a.sharedClipKey||g||b.clip(c.clipRect);k&&a.animate();g||(a.animationTimeout=w(function(){a.afterAnimate()},k));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,c=this.isDirty||this.isDirtyData,
b=this.group,d=this.xAxis,k=this.yAxis;b&&(a.inverted&&b.attr({width:a.plotWidth,height:a.plotHeight}),b.animate({translateX:H(d&&d.left,a.plotLeft),translateY:H(k&&k.top,a.plotTop)}));this.translate();this.render();c&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,c){var b=this.xAxis,d=this.yAxis,k=this.chart.inverted;return this.searchKDTree({clientX:k?b.len-a.chartY+b.pos:a.chartX-b.pos,plotY:k?d.len-a.chartX+d.pos:a.chartY-d.pos},c)},buildKDTree:function(){function a(b,
d,l){var k,e;if(e=b&&b.length)return k=c.kdAxisArray[d%l],b.sort(function(a,c){return a[k]-c[k]}),e=Math.floor(e/2),{point:b[e],left:a(b.slice(0,e),d+1,l),right:a(b.slice(e+1),d+1,l)}}this.buildingKdTree=!0;var c=this,b=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;w(function(){c.kdTree=a(c.getValidPoints(null,!c.directTouch),b,b);c.buildingKdTree=!1},c.options.kdNow?0:1)},searchKDTree:function(a,c){function b(a,c,l,g){var p=c.point,q=d.kdAxisArray[l%g],m,w,h=p;w=x(a[k])&&x(p[k])?
Math.pow(a[k]-p[k],2):null;m=x(a[e])&&x(p[e])?Math.pow(a[e]-p[e],2):null;m=(w||0)+(m||0);p.dist=x(m)?Math.sqrt(m):Number.MAX_VALUE;p.distX=x(w)?Math.sqrt(w):Number.MAX_VALUE;q=a[q]-p[q];m=0>q?"left":"right";w=0>q?"right":"left";c[m]&&(m=b(a,c[m],l+1,g),h=m[f]<h[f]?m:p);c[w]&&Math.sqrt(q*q)<h[f]&&(a=b(a,c[w],l+1,g),h=a[f]<h[f]?a:h);return h}var d=this,k=this.kdAxisArray[0],e=this.kdAxisArray[1],f=c?"distX":"dist";c=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||
this.buildKDTree();if(this.kdTree)return b(a,this.kdTree,c,c)}})})(L);(function(a){function E(a,f,g,e,d){var p=a.chart.inverted;this.axis=a;this.isNegative=g;this.options=f;this.x=e;this.total=null;this.points={};this.stack=d;this.rightCliff=this.leftCliff=0;this.alignOptions={align:f.align||(p?g?"left":"right":"center"),verticalAlign:f.verticalAlign||(p?"middle":g?"bottom":"top"),y:t(f.y,p?4:g?14:-6),x:t(f.x,p?g?-6:6:0)};this.textAlign=f.textAlign||(p?g?"right":"left":"center")}var B=a.Axis,F=a.Chart,
D=a.correctFloat,n=a.defined,h=a.destroyObjectProperties,u=a.each,r=a.format,x=a.objectEach,t=a.pick;a=a.Series;E.prototype={destroy:function(){h(this,this.axis)},render:function(a){var f=this.options,g=f.format,g=g?r(g,this):f.formatter.call(this);this.label?this.label.attr({text:g,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(g,null,null,f.useHTML).css(f.style).attr({align:this.textAlign,rotation:f.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,f){var g=this.axis,e=
g.chart,d=e.inverted,p=g.reversed,p=this.isNegative&&!p||!this.isNegative&&p,b=g.translate(g.usePercentage?100:this.total,0,0,0,1),g=g.translate(0),g=Math.abs(b-g);a=e.xAxis[0].translate(this.x)+a;var m=e.plotHeight,d={x:d?p?b:b-g:a,y:d?m-a-f:p?m-b-g:m-b,width:d?g:f,height:d?f:g};if(f=this.label)f.align(this.alignOptions,null,d),d=f.alignAttr,f[!1===this.options.crop||e.isInsidePlot(d.x,d.y)?"show":"hide"](!0)}};F.prototype.getStacks=function(){var a=this;u(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&
(a.oldStacks=a.stacks)});u(a.series,function(f){!f.options.stacking||!0!==f.visible&&!1!==a.options.chart.ignoreHiddenSeries||(f.stackKey=f.type+t(f.options.stack,""))})};B.prototype.buildStacks=function(){var a=this.series,f,g=t(this.options.reversedStacks,!0),e=a.length,d;if(!this.isXAxis){this.usePercentage=!1;for(d=e;d--;)a[g?d:e-d-1].setStackedPoints();for(d=e;d--;)f=a[g?d:e-d-1],f.setStackCliffs&&f.setStackCliffs();if(this.usePercentage)for(d=0;d<e;d++)a[d].setPercentStacks()}};B.prototype.renderStackTotals=
function(){var a=this.chart,f=a.renderer,g=this.stacks,e=this.stackTotalGroup;e||(this.stackTotalGroup=e=f.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());e.translate(a.plotLeft,a.plotTop);x(g,function(a){x(a,function(a){a.render(e)})})};B.prototype.resetStacks=function(){var a=this,f=a.stacks;a.isXAxis||x(f,function(f){x(f,function(e,d){e.touched<a.stacksTouched?(e.destroy(),delete f[d]):(e.total=null,e.cum=null)})})};B.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&
(a=this.stacks=this.oldStacks),x(a,function(a){x(a,function(a){a.cum=a.total})}))};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,f=this.processedYData,g=[],e=f.length,d=this.options,p=d.threshold,b=d.startFromThreshold?p:0,h=d.stack,d=d.stacking,v=this.stackKey,r="-"+v,q=this.negStacks,u=this.yAxis,c=u.stacks,w=u.oldStacks,K,y,G,l,I,k,z;u.stacksTouched+=1;for(I=0;I<e;I++)k=a[I],z=f[I],
K=this.getStackIndicator(K,k,this.index),l=K.key,G=(y=q&&z<(b?0:p))?r:v,c[G]||(c[G]={}),c[G][k]||(w[G]&&w[G][k]?(c[G][k]=w[G][k],c[G][k].total=null):c[G][k]=new E(u,u.options.stackLabels,y,k,h)),G=c[G][k],null!==z&&(G.points[l]=G.points[this.index]=[t(G.cum,b)],n(G.cum)||(G.base=l),G.touched=u.stacksTouched,0<K.index&&!1===this.singleStacks&&(G.points[l][0]=G.points[this.index+","+k+",0"][0])),"percent"===d?(y=y?v:r,q&&c[y]&&c[y][k]?(y=c[y][k],G.total=y.total=Math.max(y.total,G.total)+Math.abs(z)||
0):G.total=D(G.total+(Math.abs(z)||0))):G.total=D(G.total+(z||0)),G.cum=t(G.cum,b)+(z||0),null!==z&&(G.points[l].push(G.cum),g[I]=G.cum);"percent"===d&&(u.usePercentage=!0);this.stackedYData=g;u.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,f=a.stackKey,g=a.yAxis.stacks,e=a.processedXData,d;u([f,"-"+f],function(f){for(var b=e.length,p,h;b--;)if(p=e[b],d=a.getStackIndicator(d,p,a.index,f),p=(h=g[f]&&g[f][p])&&h.points[d.key])h=h.total?100/h.total:0,p[0]=D(p[0]*h),p[1]=D(p[1]*h),
a.stackedYData[b]=p[1]})};a.prototype.getStackIndicator=function(a,f,g,e){!n(a)||a.x!==f||e&&a.key!==e?a={x:f,index:0,key:e}:a.index++;a.key=[g,f,a.index].join();return a}})(L);(function(a){var E=a.addEvent,B=a.animate,F=a.Axis,D=a.createElement,n=a.css,h=a.defined,u=a.each,r=a.erase,x=a.extend,t=a.fireEvent,m=a.inArray,f=a.isNumber,g=a.isObject,e=a.isArray,d=a.merge,p=a.objectEach,b=a.pick,A=a.Point,v=a.Series,H=a.seriesTypes,q=a.setAnimation,J=a.splat;x(a.Chart.prototype,{addSeries:function(a,d,
e){var c,f=this;a&&(d=b(d,!0),t(f,"addSeries",{options:a},function(){c=f.initSeries(a);f.isDirtyLegend=!0;f.linkSeries();d&&f.redraw(e)}));return c},addAxis:function(a,e,f,g){var c=e?"xAxis":"yAxis",l=this.options;a=d(a,{index:this[c].length,isX:e});new F(this,a);l[c]=J(l[c]||{});l[c].push(a);b(f,!0)&&this.redraw(g)},showLoading:function(a){var c=this,b=c.options,d=c.loadingDiv,e=b.loading,l=function(){d&&n(d,{left:c.plotLeft+"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+"px"})};
d||(c.loadingDiv=d=D("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container),c.loadingSpan=D("span",{className:"highcharts-loading-inner"},null,d),E(c,"redraw",l));d.className="highcharts-loading";c.loadingSpan.innerHTML=a||b.lang.loading;n(d,x(e.style,{zIndex:10}));n(c.loadingSpan,e.labelStyle);c.loadingShown||(n(d,{opacity:0,display:""}),B(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));c.loadingShown=!0;l()},hideLoading:function(){var a=this.options,b=
this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",B(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){n(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
update:function(a,e){var c=this,g={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},q=a.chart,l,w;if(q){d(!0,c.options.chart,q);"className"in q&&c.setClassName(q.className);if("inverted"in q||"polar"in q)c.propFromSeries(),l=!0;"alignTicks"in q&&(l=!0);p(q,function(a,b){-1!==m("chart."+b,c.propsRequireUpdateSeries)&&(w=!0);-1!==m(b,c.propsRequireDirtyBox)&&(c.isDirtyBox=!0)});"style"in q&&c.renderer.setStyle(q.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&d(!0,this.options.plotOptions,
a.plotOptions);p(a,function(a,b){if(c[b]&&"function"===typeof c[b].update)c[b].update(a,!1);else if("function"===typeof c[g[b]])c[g[b]](a);"chart"!==b&&-1!==m(b,c.propsRequireUpdateSeries)&&(w=!0)});u("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&u(J(a[b]),function(a,d){(d=h(a.id)&&c.get(a.id)||c[b][d])&&d.coll===b&&d.update(a,!1)})});l&&u(c.axes,function(a){a.update({},!1)});w&&u(c.series,function(a){a.update({},!1)});a.loading&&d(!0,c.options.loading,a.loading);l=q&&q.width;
q=q&&q.height;f(l)&&l!==c.chartWidth||f(q)&&q!==c.chartHeight?c.setSize(l,q):b(e,!0)&&c.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});x(A.prototype,{update:function(a,d,e,f){function c(){l.applyOptions(a);null===l.y&&k&&(l.graphic=k.destroy());g(a,!0)&&(k&&k.element&&a&&a.marker&&a.marker.symbol&&(l.graphic=k.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=l.dataLabel.destroy()));q=l.index;p.updateParallelArrays(l,q);w.data[q]=g(w.data[q],!0)||g(a,!0)?l.options:a;p.isDirty=p.isDirtyData=
!0;!p.fixedBox&&p.hasCartesianSeries&&(h.isDirtyBox=!0);"point"===w.legendType&&(h.isDirtyLegend=!0);d&&h.redraw(e)}var l=this,p=l.series,k=l.graphic,q,h=p.chart,w=p.options;d=b(d,!0);!1===f?c():l.firePointEvent("update",{options:a},c)},remove:function(a,b){this.series.removePoint(m(this,this.series.data),a,b)}});x(v.prototype,{addPoint:function(a,d,e,f){var c=this.options,l=this.data,g=this.chart,k=this.xAxis,k=k&&k.hasNames&&k.names,p=c.data,q,h,m=this.xData,w,v;d=b(d,!0);q={series:this};this.pointClass.prototype.applyOptions.apply(q,
[a]);v=q.x;w=m.length;if(this.requireSorting&&v<m[w-1])for(h=!0;w&&m[w-1]>v;)w--;this.updateParallelArrays(q,"splice",w,0,0);this.updateParallelArrays(q,w);k&&q.name&&(k[v]=q.name);p.splice(w,0,a);h&&(this.data.splice(w,0,null),this.processData());"point"===c.legendType&&this.generatePoints();e&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(q,"shift"),p.shift()));this.isDirtyData=this.isDirty=!0;d&&g.redraw(f)},removePoint:function(a,d,e){var c=this,f=c.data,l=f[a],g=c.points,
k=c.chart,p=function(){g&&g.length===f.length&&g.splice(a,1);f.splice(a,1);c.options.data.splice(a,1);c.updateParallelArrays(l||{series:c},"splice",a,1);l&&l.destroy();c.isDirty=!0;c.isDirtyData=!0;d&&k.redraw()};q(e,k);d=b(d,!0);l?l.firePointEvent("remove",null,p):p()},remove:function(a,d,e){function c(){f.destroy();l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();b(a,!0)&&l.redraw(d)}var f=this,l=f.chart;!1!==e?t(f,"remove",null,c):c()},update:function(a,e){var c=this,f=c.chart,g=c.userOptions,l=
c.oldType||c.type,p=a.type||g.type||f.options.chart.type,k=H[l].prototype,q=["group","markerGroup","dataLabelsGroup"],h;if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,e);if(p&&p!==l||void 0!==a.zIndex)q.length=0;u(q,function(a){q[a]=c[a];delete c[a]});a=d(g,{animation:!1,index:c.index,pointStart:c.xData[0]},{data:c.options.data},a);c.remove(!1,null,!1);for(h in k)c[h]=void 0;x(c,H[p||l].prototype);u(q,function(a){c[a]=q[a]});c.init(f,a);c.oldType=l;f.linkSeries();b(e,
!0)&&f.redraw(!1)}});x(F.prototype,{update:function(a,e){var c=this.chart;a=c.options[this.coll][this.options.index]=d(this.userOptions,a);this.destroy(!0);this.init(c,x(a,{events:void 0}));c.isDirtyBox=!0;b(e,!0)&&c.redraw()},remove:function(a){for(var c=this.chart,d=this.coll,f=this.series,g=f.length;g--;)f[g]&&f[g].remove(!1);r(c.axes,this);r(c[d],this);e(c.options[d])?c.options[d].splice(this.options.index,1):delete c.options[d];u(c[d],function(a,c){a.options.index=c});this.destroy();c.isDirtyBox=
!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(L);(function(a){var E=a.color,B=a.each,F=a.map,D=a.pick,n=a.Series,h=a.seriesType;h("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var h=[],n=[],x=this.xAxis,t=this.yAxis,m=t.stacks[this.stackKey],f={},g=this.points,e=this.index,d=t.series,p=d.length,b,A=D(t.options.reversedStacks,!0)?1:-1,v;if(this.options.stacking){for(v=
0;v<g.length;v++)f[g[v].x]=g[v];a.objectEach(m,function(a,b){null!==a.total&&n.push(b)});n.sort(function(a,b){return a-b});b=F(d,function(){return this.visible});B(n,function(a,d){var g=0,c,q;if(f[a]&&!f[a].isNull)h.push(f[a]),B([-1,1],function(g){var h=1===g?"rightNull":"leftNull",w=0,l=m[n[d+g]];if(l)for(v=e;0<=v&&v<p;)c=l.points[v],c||(v===e?f[a][h]=!0:b[v]&&(q=m[a].points[v])&&(w-=q[1]-q[0])),v+=A;f[a][1===g?"rightCliff":"leftCliff"]=w});else{for(v=e;0<=v&&v<p;){if(c=m[a].points[v]){g=c[1];break}v+=
A}g=t.translate(g,0,1,0,1);h.push({isNull:!0,plotX:x.translate(a,0,0,0,1),x:a,plotY:g,yBottom:g})}})}return h},getGraphPath:function(a){var h=n.prototype.getGraphPath,u=this.options,t=u.stacking,m=this.yAxis,f,g,e=[],d=[],p=this.index,b,A=m.stacks[this.stackKey],v=u.threshold,H=m.getThreshold(u.threshold),q,u=u.connectNulls||"percent"===t,J=function(c,f,g){var q=a[c];c=t&&A[q.x].points[p];var h=q[g+"Null"]||0;g=q[g+"Cliff"]||0;var l,w,q=!0;g||h?(l=(h?c[0]:c[1])+g,w=c[0]+g,q=!!h):!t&&a[f]&&a[f].isNull&&
(l=w=v);void 0!==l&&(d.push({plotX:b,plotY:null===l?H:m.getThreshold(l),isNull:q,isCliff:!0}),e.push({plotX:b,plotY:null===w?H:m.getThreshold(w),doCurve:!1}))};a=a||this.points;t&&(a=this.getStackPoints());for(f=0;f<a.length;f++)if(g=a[f].isNull,b=D(a[f].rectPlotX,a[f].plotX),q=D(a[f].yBottom,H),!g||u)u||J(f,f-1,"left"),g&&!t&&u||(d.push(a[f]),e.push({x:f,plotX:b,plotY:q})),u||J(f,f+1,"right");f=h.call(this,d,!0,!0);e.reversed=!0;g=h.call(this,e,!0,!0);g.length&&(g[0]="L");g=f.concat(g);h=h.call(this,
d,!1,u);g.xMap=f.xMap;this.areaPath=g;return h},drawGraph:function(){this.areaPath=[];n.prototype.drawGraph.apply(this);var a=this,h=this.areaPath,x=this.options,t=[["area","highcharts-area",this.color,x.fillColor]];B(this.zones,function(h,f){t.push(["zone-area-"+f,"highcharts-area highcharts-zone-area-"+f+" "+h.className,h.color||a.color,h.fillColor||x.fillColor])});B(t,function(m){var f=m[0],g=a[f];g?(g.endX=h.xMap,g.animate({d:h})):(g=a[f]=a.chart.renderer.path(h).addClass(m[1]).attr({fill:D(m[3],
E(m[2]).setOpacity(D(x.fillOpacity,.75)).get()),zIndex:0}).add(a.group),g.isArea=!0);g.startX=h.xMap;g.shiftUnit=x.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(L);(function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,F,D){var n=F.plotX,h=F.plotY,u=a[D-1];D=a[D+1];var r,x,t,m;if(u&&!u.isNull&&!1!==u.doCurve&&!F.isCliff&&D&&!D.isNull&&!1!==D.doCurve&&!F.isCliff){a=u.plotY;t=D.plotX;D=D.plotY;var f=0;r=(1.5*n+u.plotX)/2.5;x=(1.5*h+a)/2.5;t=(1.5*
n+t)/2.5;m=(1.5*h+D)/2.5;t!==r&&(f=(m-x)*(t-n)/(t-r)+h-m);x+=f;m+=f;x>a&&x>h?(x=Math.max(a,h),m=2*h-x):x<a&&x<h&&(x=Math.min(a,h),m=2*h-x);m>D&&m>h?(m=Math.max(D,h),x=2*h-m):m<D&&m<h&&(m=Math.min(D,h),x=2*h-m);F.rightContX=t;F.rightContY=m}F=["C",E(u.rightContX,u.plotX),E(u.rightContY,u.plotY),E(r,n),E(x,h),n,h];u.rightContX=u.rightContY=null;return F}})})(L);(function(a){var E=a.seriesTypes.area.prototype,B=a.seriesType;B("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,
getGraphPath:E.getGraphPath,setStackCliffs:E.setStackCliffs,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(L);(function(a){var E=a.animObject,B=a.color,F=a.each,D=a.extend,n=a.isNumber,h=a.merge,u=a.pick,r=a.Series,x=a.seriesType,t=a.svg;x("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},
dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){r.prototype.init.apply(this,arguments);var a=this,f=a.chart;f.hasRendered&&F(f.series,function(f){f.type===a.type&&(f.isDirty=!0)})},getColumnMetrics:function(){var a=this,f=a.options,g=a.xAxis,e=a.yAxis,d=g.reversed,p,b={},h=0;!1===f.grouping?
h=1:F(a.chart.series,function(d){var c=d.options,f=d.yAxis,g;d.type!==a.type||!d.visible&&a.chart.options.chart.ignoreHiddenSeries||e.len!==f.len||e.pos!==f.pos||(c.stacking?(p=d.stackKey,void 0===b[p]&&(b[p]=h++),g=b[p]):!1!==c.grouping&&(g=h++),d.columnIndex=g)});var v=Math.min(Math.abs(g.transA)*(g.ordinalSlope||f.pointRange||g.closestPointRange||g.tickInterval||1),g.len),n=v*f.groupPadding,q=(v-2*n)/(h||1),f=Math.min(f.maxPointWidth||g.len,u(f.pointWidth,q*(1-2*f.pointPadding)));a.columnMetrics=
{width:f,offset:(q-f)/2+(n+((a.columnIndex||0)+(d?1:0))*q-v/2)*(d?-1:1)};return a.columnMetrics},crispCol:function(a,f,g,e){var d=this.chart,p=this.borderWidth,b=-(p%2?.5:0),p=p%2?.5:1;d.inverted&&d.renderer.isVML&&(p+=1);this.options.crisp&&(g=Math.round(a+g)+b,a=Math.round(a)+b,g-=a);e=Math.round(f+e)+p;b=.5>=Math.abs(f)&&.5<e;f=Math.round(f)+p;e-=f;b&&e&&(--f,e+=1);return{x:a,y:f,width:g,height:e}},translate:function(){var a=this,f=a.chart,g=a.options,e=a.dense=2>a.closestPointRange*a.xAxis.transA,
e=a.borderWidth=u(g.borderWidth,e?0:1),d=a.yAxis,p=a.translatedThreshold=d.getThreshold(g.threshold),b=u(g.minPointLength,5),h=a.getColumnMetrics(),v=h.width,n=a.barW=Math.max(v,1+2*e),q=a.pointXOffset=h.offset;f.inverted&&(p-=.5);g.pointPadding&&(n=Math.ceil(n));r.prototype.translate.apply(a);F(a.points,function(e){var c=u(e.yBottom,p),g=999+Math.abs(c),g=Math.min(Math.max(-g,e.plotY),d.len+g),h=e.plotX+q,m=n,r=Math.min(g,c),l,I=Math.max(g,c)-r;Math.abs(I)<b&&b&&(I=b,l=!d.reversed&&!e.negative||
d.reversed&&e.negative,r=Math.abs(r-p)>b?c-b:p-(l?b:0));e.barX=h;e.pointWidth=v;e.tooltipPos=f.inverted?[d.len+d.pos-f.plotLeft-g,a.xAxis.len-h-m/2,I]:[h+m/2,g+d.pos-f.plotTop,I];e.shapeType="rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[h,p,m,0]:[h,r,m,I])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,f){var g=this.options,e,d=this.pointAttrToOptions||{};
e=d.stroke||"borderColor";var p=d["stroke-width"]||"borderWidth",b=a&&a.color||this.color,m=a[e]||g[e]||this.color||b,v=a[p]||g[p]||this[p]||0,d=g.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);f&&(a=h(g.states[f],a.options.states&&a.options.states[f]||{}),f=a.brightness,b=a.color||void 0!==f&&B(b).brighten(a.brightness).get()||b,m=a[e]||m,v=a[p]||v,d=a.dashStyle||d);e={fill:b,stroke:m,"stroke-width":v};g.borderRadius&&(e.r=g.borderRadius);d&&(e.dashstyle=
d);return e},drawPoints:function(){var a=this,f=this.chart,g=a.options,e=f.renderer,d=g.animationLimit||250,p;F(a.points,function(b){var m=b.graphic;if(n(b.plotY)&&null!==b.y){p=b.shapeArgs;if(m)m[f.pointCount<d?"animate":"attr"](h(p));else b.graphic=m=e[b.shapeType](p).add(b.group||a.group);m.attr(a.pointAttribs(b,b.selected&&"select")).shadow(g.shadow,null,g.stacking&&!g.borderRadius);m.addClass(b.getClassName(),!0)}else m&&(b.graphic=m.destroy())})},animate:function(a){var f=this,g=this.yAxis,
e=f.options,d=this.chart.inverted,p={};t&&(a?(p.scaleY=.001,a=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(e.threshold))),d?p.translateX=a-g.len:p.translateY=a,f.group.attr(p)):(p[d?"translateX":"translateY"]=g.pos,f.group.animate(p,D(E(f.options.animation),{step:function(a,d){f.group.attr({scaleY:Math.max(.001,d.pos)})}})),f.animate=null))},remove:function(){var a=this,f=a.chart;f.hasRendered&&F(f.series,function(f){f.type===a.type&&(f.isDirty=!0)});r.prototype.remove.apply(a,arguments)}})})(L);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(L);(function(a){var E=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&E.prototype.drawGraph.call(this)}})})(L);(function(a){var E=a.pick,B=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,D=this.chart,n=2*(a.slicedOffset||0),h=D.plotWidth-2*n,D=D.plotHeight-2*n,u=a.center,u=[E(u[0],"50%"),E(u[1],"50%"),a.size||"100%",a.innerSize||0],r=Math.min(h,D),x,t;for(x=0;4>x;++x)t=u[x],a=2>x||2===x&&/%$/.test(t),u[x]=B(t,[h,
D,r,u[2]][x])+(a?n:0);u[3]>u[2]&&(u[3]=u[2]);return u}}})(L);(function(a){var E=a.addEvent,B=a.defined,F=a.each,D=a.extend,n=a.inArray,h=a.noop,u=a.pick,r=a.Point,x=a.Series,t=a.seriesType,m=a.setAnimation;t("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},
borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var f=this,e=f.points,d=f.startAngleRad;a||(F(e,function(a){var b=a.graphic,e=a.shapeArgs;b&&(b.attr({r:a.startR||f.center[3]/2,start:d,end:d}),b.animate({r:e.r,start:e.start,end:e.end},f.options.animation))}),f.animate=null)},
updateTotals:function(){var a,g=0,e=this.points,d=e.length,p,b=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)p=e[a],g+=b&&!p.visible?0:p.isNull?0:p.y;this.total=g;for(a=0;a<d;a++)p=e[a],p.percentage=0<g&&(p.visible||!b)?p.y/g*100:0,p.total=g},generatePoints:function(){x.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var f=0,e=this.options,d=e.slicedOffset,p=d+(e.borderWidth||0),b,h,v,m=e.startAngle||0,q=this.startAngleRad=Math.PI/180*(m-90),m=
(this.endAngleRad=Math.PI/180*(u(e.endAngle,m+360)-90))-q,n=this.points,c,w=e.dataLabels.distance,e=e.ignoreHiddenPoint,r,y=n.length,t;a||(this.center=a=this.getCenter());this.getX=function(c,b,d){v=Math.asin(Math.min((c-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(b?-1:1)*Math.cos(v)*(a[2]/2+d.labelDistance)};for(r=0;r<y;r++){t=n[r];t.labelDistance=u(t.options.dataLabels&&t.options.dataLabels.distance,w);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,t.labelDistance);b=q+f*m;if(!e||t.visible)f+=
t.percentage/100;h=q+f*m;t.shapeType="arc";t.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*b)/1E3,end:Math.round(1E3*h)/1E3};v=(h+b)/2;v>1.5*Math.PI?v-=2*Math.PI:v<-Math.PI/2&&(v+=2*Math.PI);t.slicedTranslation={translateX:Math.round(Math.cos(v)*d),translateY:Math.round(Math.sin(v)*d)};h=Math.cos(v)*a[2]/2;c=Math.sin(v)*a[2]/2;t.tooltipPos=[a[0]+.7*h,a[1]+.7*c];t.half=v<-Math.PI/2||v>Math.PI/2?1:0;t.angle=v;b=Math.min(p,t.labelDistance/5);t.labelPos=[a[0]+h+Math.cos(v)*t.labelDistance,
a[1]+c+Math.sin(v)*t.labelDistance,a[0]+h+Math.cos(v)*b,a[1]+c+Math.sin(v)*b,a[0]+h,a[1]+c,0>t.labelDistance?"center":t.half?"right":"left",v]}},drawGraph:null,drawPoints:function(){var a=this,g=a.chart.renderer,e,d,p,b,h=a.options.shadow;h&&!a.shadowGroup&&(a.shadowGroup=g.g("shadow").add(a.group));F(a.points,function(f){if(!f.isNull){d=f.graphic;b=f.shapeArgs;e=f.getTranslate();var m=f.shadowGroup;h&&!m&&(m=f.shadowGroup=g.g("shadow").add(a.shadowGroup));m&&m.attr(e);p=a.pointAttribs(f,f.selected&&
"select");d?d.setRadialReference(a.center).attr(p).animate(D(b,e)):(f.graphic=d=g[f.shapeType](b).setRadialReference(a.center).attr(e).add(a.group),f.visible||d.attr({visibility:"hidden"}),d.attr(p).attr({"stroke-linejoin":"round"}).shadow(h,m));d.addClass(f.getClassName())}})},searchPoint:h,sortByAngle:function(a,g){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*g})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:h},{init:function(){r.prototype.init.apply(this,
arguments);var a=this,g;a.name=u(a.name,"Slice");g=function(e){a.slice("select"===e.type)};E(a,"select",g);E(a,"unselect",g);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,g){var e=this,d=e.series,f=d.chart,b=d.options.ignoreHiddenPoint;g=u(g,b);a!==e.visible&&(e.visible=e.options.visible=a=void 0===a?!e.visible:a,d.options.data[n(e,d.data)]=e.options,F(["graphic","dataLabel","connector","shadowGroup"],function(b){if(e[b])e[b][a?"show":"hide"](!0)}),e.legendItem&&
f.legend.colorizeItem(e,a),a||"hover"!==e.state||e.setState(""),b&&(d.isDirty=!0),g&&f.redraw())},slice:function(a,g,e){var d=this.series;m(e,d.chart);u(g,!0);this.sliced=this.options.sliced=B(a)?a:!this.sliced;d.options.data[n(this,d.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var f=this.shapeArgs;return this.sliced||
!this.visible?[]:this.series.chart.renderer.symbols.arc(f.x,f.y,f.r+a,f.r+a,{innerR:this.shapeArgs.r,start:f.start,end:f.end})}})})(L);(function(a){var E=a.addEvent,B=a.arrayMax,F=a.defined,D=a.each,n=a.extend,h=a.format,u=a.map,r=a.merge,x=a.noop,t=a.pick,m=a.relativeLength,f=a.Series,g=a.seriesTypes,e=a.stableSort;a.distribute=function(a,f){function b(a,b){return a.target-b.target}var d,g=!0,p=a,q=[],h;h=0;for(d=a.length;d--;)h+=a[d].size;if(h>f){e(a,function(a,b){return(b.rank||0)-(a.rank||0)});
for(h=d=0;h<=f;)h+=a[d].size,d++;q=a.splice(d-1,a.length)}e(a,b);for(a=u(a,function(a){return{size:a.size,targets:[a.target]}});g;){for(d=a.length;d--;)g=a[d],h=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,h-g.size/2),f-g.size);d=a.length;for(g=!1;d--;)0<d&&a[d-1].pos+a[d-1].size>a[d].pos&&(a[d-1].size+=a[d].size,a[d-1].targets=a[d-1].targets.concat(a[d].targets),a[d-1].pos+a[d-1].size>f&&(a[d-1].pos=f-a[d-1].size),a.splice(d,1),g=!0)}d=0;D(a,function(a){var c=
0;D(a.targets,function(){p[d].pos=a.pos+c;c+=p[d].size;d++})});p.push.apply(p,q);e(p,b)};f.prototype.drawDataLabels=function(){var d=this,e=d.options,b=e.dataLabels,f=d.points,g,m,q=d.hasRendered||0,n,c,w=t(b.defer,!!e.animation),u=d.chart.renderer;if(b.enabled||d._hasPointLabels)d.dlProcessOptions&&d.dlProcessOptions(b),c=d.plotGroup("dataLabelsGroup","data-labels",w&&!q?"hidden":"visible",b.zIndex||6),w&&(c.attr({opacity:+q}),q||E(d,"afterAnimate",function(){d.visible&&c.show(!0);c[e.animation?
"animate":"attr"]({opacity:1},{duration:200})})),m=b,D(f,function(f){var q,l=f.dataLabel,p,k,w=f.connector,v=!l,y;g=f.dlOptions||f.options&&f.options.dataLabels;if(q=t(g&&g.enabled,m.enabled)&&null!==f.y)b=r(m,g),p=f.getLabelConfig(),n=b.format?h(b.format,p):b.formatter.call(p,b),y=b.style,p=b.rotation,y.color=t(b.color,y.color,d.color,"#000000"),"contrast"===y.color&&(f.contrastColor=u.getContrast(f.color||d.color),y.color=b.inside||0>t(f.labelDistance,b.distance)||e.stacking?f.contrastColor:"#000000"),
e.cursor&&(y.cursor=e.cursor),k={fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,r:b.borderRadius||0,rotation:p,padding:b.padding,zIndex:1},a.objectEach(k,function(a,c){void 0===a&&delete k[c]});!l||q&&F(n)?q&&F(n)&&(l?k.text=n:(l=f.dataLabel=u[p?"text":"label"](n,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),l.addClass("highcharts-data-label-color-"+f.colorIndex+" "+(b.className||"")+(b.useHTML?"highcharts-tracker":""))),l.attr(k),l.css(y).shadow(b.shadow),l.added||
l.add(c),d.alignDataLabel(f,l,b,null,v)):(f.dataLabel=l=l.destroy(),w&&(f.connector=w.destroy()))})};f.prototype.alignDataLabel=function(a,e,b,f,g){var d=this.chart,q=d.inverted,h=t(a.plotX,-9999),c=t(a.plotY,-9999),p=e.getBBox(),m,v=b.rotation,r=b.align,l=this.visible&&(a.series.forceDL||d.isInsidePlot(h,Math.round(c),q)||f&&d.isInsidePlot(h,q?f.x+1:f.y+f.height-1,q)),I="justify"===t(b.overflow,"justify");if(l&&(m=b.style.fontSize,m=d.renderer.fontMetrics(m,e).b,f=n({x:q?d.plotWidth-c:h,y:Math.round(q?
d.plotHeight-h:c),width:0,height:0},f),n(b,{width:p.width,height:p.height}),v?(I=!1,h=d.renderer.rotCorr(m,v),h={x:f.x+b.x+f.width/2+h.x,y:f.y+b.y+{top:0,middle:.5,bottom:1}[b.verticalAlign]*f.height},e[g?"attr":"animate"](h).attr({align:r}),c=(v+720)%360,c=180<c&&360>c,"left"===r?h.y-=c?p.height:0:"center"===r?(h.x-=p.width/2,h.y-=p.height/2):"right"===r&&(h.x-=p.width,h.y-=c?0:p.height)):(e.align(b,null,f),h=e.alignAttr),I?a.isLabelJustified=this.justifyDataLabel(e,b,h,p,f,g):t(b.crop,!0)&&(l=d.isInsidePlot(h.x,
h.y)&&d.isInsidePlot(h.x+p.width,h.y+p.height)),b.shape&&!v))e[g?"attr":"animate"]({anchorX:q?d.plotWidth-a.plotY:a.plotX,anchorY:q?d.plotHeight-a.plotX:a.plotY});l||(e.attr({y:-9999}),e.placed=!1)};f.prototype.justifyDataLabel=function(a,e,b,f,g,h){var d=this.chart,p=e.align,c=e.verticalAlign,m,n,v=a.box?0:a.padding||0;m=b.x+v;0>m&&("right"===p?e.align="left":e.x=-m,n=!0);m=b.x+f.width-v;m>d.plotWidth&&("left"===p?e.align="right":e.x=d.plotWidth-m,n=!0);m=b.y+v;0>m&&("bottom"===c?e.verticalAlign=
"top":e.y=-m,n=!0);m=b.y+f.height-v;m>d.plotHeight&&("top"===c?e.verticalAlign="bottom":e.y=d.plotHeight-m,n=!0);n&&(a.placed=!h,a.align(e,null,g));return n};g.pie&&(g.pie.prototype.drawDataLabels=function(){var d=this,e=d.data,b,g=d.chart,h=d.options.dataLabels,m=t(h.connectorPadding,10),q=t(h.connectorWidth,1),n=g.plotWidth,c=g.plotHeight,w,r=d.center,y=r[2]/2,u=r[1],l,I,k,z,x=[[],[]],M,N,E,O,C=[0,0,0,0];d.visible&&(h.enabled||d._hasPointLabels)&&(D(e,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&
(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),f.prototype.drawDataLabels.apply(d),D(e,function(a){a.dataLabel&&a.visible&&(x[a.half].push(a),a.dataLabel._pos=null)}),D(x,function(e,f){var q,p,w=e.length,v=[],t;if(w)for(d.sortByAngle(e,f-.5),0<d.maxLabelDistance&&(q=Math.max(0,u-y-d.maxLabelDistance),p=Math.min(u+y+d.maxLabelDistance,g.plotHeight),D(e,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,u-y-a.labelDistance),a.bottom=
Math.min(u+y+a.labelDistance,g.plotHeight),t=a.dataLabel.getBBox().height||21,a.positionsIndex=v.push({target:a.labelPos[1]-a.top+t/2,size:t,rank:a.y})-1)}),a.distribute(v,p+t-q)),O=0;O<w;O++)b=e[O],p=b.positionsIndex,k=b.labelPos,l=b.dataLabel,E=!1===b.visible?"hidden":"inherit",q=k[1],v&&F(v[p])?void 0===v[p].pos?E="hidden":(z=v[p].size,N=b.top+v[p].pos):N=q,delete b.positionIndex,M=h.justify?r[0]+(f?-1:1)*(y+b.labelDistance):d.getX(N<b.top+2||N>b.bottom-2?q:N,f,b),l._attr={visibility:E,align:k[6]},
l._pos={x:M+h.x+({left:m,right:-m}[k[6]]||0),y:N+h.y-10},k.x=M,k.y=N,I=l.getBBox().width,q=null,M-I<m?(q=Math.round(I-M+m),C[3]=Math.max(q,C[3])):M+I>n-m&&(q=Math.round(M+I-n+m),C[1]=Math.max(q,C[1])),0>N-z/2?C[0]=Math.max(Math.round(-N+z/2),C[0]):N+z/2>c&&(C[2]=Math.max(Math.round(N+z/2-c),C[2])),l.sideOverflow=q}),0===B(C)||this.verifyDataLabelOverflow(C))&&(this.placeDataLabels(),q&&D(this.points,function(a){var c;w=a.connector;if((l=a.dataLabel)&&l._pos&&a.visible&&0<a.labelDistance){E=l._attr.visibility;
if(c=!w)a.connector=w=g.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(d.dataLabelsGroup),w.attr({"stroke-width":q,stroke:h.connectorColor||a.color||"#666666"});w[c?"attr":"animate"]({d:d.connectorPath(a.labelPos)});w.attr("visibility",E)}else w&&(a.connector=w.destroy())}))},g.pie.prototype.connectorPath=function(a){var d=a.x,b=a.y;return t(this.options.dataLabels.softConnector,!0)?["M",d+("left"===a[6]?5:-5),b,"C",d,b,2*a[2]-a[4],2*a[3]-a[5],a[2],
a[3],"L",a[4],a[5]]:["M",d+("left"===a[6]?5:-5),b,"L",a[2],a[3],"L",a[4],a[5]]},g.pie.prototype.placeDataLabels=function(){D(this.points,function(a){var d=a.dataLabel;d&&a.visible&&((a=d._pos)?(d.sideOverflow&&(d._attr.width=d.getBBox().width-d.sideOverflow,d.css({width:d._attr.width+"px",textOverflow:"ellipsis"}),d.shortened=!0),d.attr(d._attr),d[d.moved?"animate":"attr"](a),d.moved=!0):d&&d.attr({y:-9999}))},this)},g.pie.prototype.alignDataLabel=x,g.pie.prototype.verifyDataLabelOverflow=function(a){var d=
this.center,b=this.options,e=b.center,f=b.minSize||80,g,h=null!==b.size;h||(null!==e[0]?g=Math.max(d[2]-Math.max(a[1],a[3]),f):(g=Math.max(d[2]-a[1]-a[3],f),d[0]+=(a[3]-a[1])/2),null!==e[1]?g=Math.max(Math.min(g,d[2]-Math.max(a[0],a[2])),f):(g=Math.max(Math.min(g,d[2]-a[0]-a[2]),f),d[1]+=(a[0]-a[2])/2),g<d[2]?(d[2]=g,d[3]=Math.min(m(b.innerSize||0,g),g),this.translate(d),this.drawDataLabels&&this.drawDataLabels()):h=!0);return h});g.column&&(g.column.prototype.alignDataLabel=function(a,e,b,g,h){var d=
this.chart.inverted,q=a.series,p=a.dlBox||a.shapeArgs,c=t(a.below,a.plotY>t(this.translatedThreshold,q.yAxis.len)),m=t(b.inside,!!this.options.stacking);p&&(g=r(p),0>g.y&&(g.height+=g.y,g.y=0),p=g.y+g.height-q.yAxis.len,0<p&&(g.height-=p),d&&(g={x:q.yAxis.len-g.y-g.height,y:q.xAxis.len-g.x-g.width,width:g.height,height:g.width}),m||(d?(g.x+=c?0:g.width,g.width=0):(g.y+=c?g.height:0,g.height=0)));b.align=t(b.align,!d||m?"center":c?"right":"left");b.verticalAlign=t(b.verticalAlign,d||m?"middle":c?"top":
"bottom");f.prototype.alignDataLabel.call(this,a,e,b,g,h);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(L);(function(a){var E=a.Chart,B=a.each,F=a.pick,D=a.addEvent;E.prototype.callbacks.push(function(a){function h(){var h=[];B(a.series||[],function(a){var n=a.options.dataLabels,r=a.dataLabelCollections||["dataLabel"];(n.enabled||a._hasPointLabels)&&!n.allowOverlap&&a.visible&&B(r,function(m){B(a.points,function(a){a[m]&&(a[m].labelrank=F(a.labelrank,a.shapeArgs&&
a.shapeArgs.height),h.push(a[m]))})})});a.hideOverlappingLabels(h)}h();D(a,"redraw",h)});E.prototype.hideOverlappingLabels=function(a){var h=a.length,n,r,x,t,m,f,g,e,d,p=function(a,d,e,f,g,h,c,p){return!(g>a+e||g+c<a||h>d+f||h+p<d)};for(r=0;r<h;r++)if(n=a[r])n.oldOpacity=n.opacity,n.newOpacity=1;a.sort(function(a,d){return(d.labelrank||0)-(a.labelrank||0)});for(r=0;r<h;r++)for(x=a[r],n=r+1;n<h;++n)if(t=a[n],x&&t&&x!==t&&x.placed&&t.placed&&0!==x.newOpacity&&0!==t.newOpacity&&(m=x.alignAttr,f=t.alignAttr,
g=x.parentGroup,e=t.parentGroup,d=2*(x.box?0:x.padding),m=p(m.x+g.translateX,m.y+g.translateY,x.width-d,x.height-d,f.x+e.translateX,f.y+e.translateY,t.width-d,t.height-d)))(x.labelrank<t.labelrank?x:t).newOpacity=0;B(a,function(a){var b,d;a&&(d=a.newOpacity,a.oldOpacity!==d&&a.placed&&(d?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=d,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(L);(function(a){var E=a.addEvent,B=a.Chart,F=a.createElement,D=a.css,n=a.defaultOptions,h=
a.defaultPlotOptions,u=a.each,r=a.extend,x=a.fireEvent,t=a.hasTouch,m=a.inArray,f=a.isObject,g=a.Legend,e=a.merge,d=a.pick,p=a.Point,b=a.Series,A=a.seriesTypes,v=a.svg,H;H=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};u(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||
(u(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(t)a[d].on("touchstart",c);a.options.cursor&&a[d].css(D).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,l=f.renderer,h=f.options.tooltip.snap,k=a.tracker,p,m=function(){if(f.hoverSeries!==a)a.onMouseOver()},n=
"rgba(192,192,192,"+(v?.0001:.002)+")";if(e&&!c)for(p=e+1;p--;)"M"===d[p]&&d.splice(p+1,0,d[p+1]-h,d[p+2],"L"),(p&&"M"===d[p]||p===e)&&d.splice(p,0,"L",d[p-2]+h,d[p-1]);k?k.attr({d:d}):a.graph&&(a.tracker=l.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:n,fill:c?n:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*h),zIndex:2}).add(a.group),u([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)});
b.cursor&&a.css({cursor:b.cursor});if(t)a.on("touchstart",m)}))}};A.column&&(A.column.prototype.drawTracker=H.drawTrackerPoint);A.pie&&(A.pie.prototype.drawTracker=H.drawTrackerPoint);A.scatter&&(A.scatter.prototype.drawTracker=H.drawTrackerPoint);r(g.prototype,{setItemEvents:function(a,b,c){var d=this,f=d.chart.renderer.boxWrapper,g="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(g);b.css(d.options.itemHoverStyle)}).on("mouseout",
function(){b.css(e(a.visible?d.itemStyle:d.itemHiddenStyle));f.removeClass(g);a.setState()}).on("click",function(c){var b=function(){a.setVisible&&a.setVisible()};c={browserEvent:c};a.firePointEvent?a.firePointEvent("legendItemClick",c,b):x(a,"legendItemClick",c,b)})},createCheckboxForItem:function(a){a.checkbox=F("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){x(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});n.legend.itemStyle.cursor="pointer";r(B.prototype,{showResetZoom:function(){var a=this,b=n.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,f)},zoomOut:function(){var a=this;
x(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,e=!1,g;!a||a.resetSelection?u(this.axes,function(a){b=a.zoom()}):u(a.xAxis.concat(a.yAxis),function(a){var d=a.axis;c[d.isXAxis?"zoomX":"zoomY"]&&(b=d.zoom(a.min,a.max),d.displayBtn&&(e=!0))});g=this.resetZoomButton;e&&!g?this.showResetZoom():!e&&f(g)&&(this.resetZoomButton=g.destroy());b&&this.redraw(d(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,
e;d&&u(d,function(a){a.setState()});u("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,l=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",f=c[d],k=(b.pointRange||0)/2,g=b.getExtremes(),h=b.toValue(f-l,!0)+k,k=b.toValue(f+b.len-l,!0)-k,p=k<h,f=p?k:h,h=p?h:k,k=Math.min(g.dataMin,b.toValue(b.toPixels(g.min)-b.minPixelPadding)),p=Math.max(g.dataMax,b.toValue(b.toPixels(g.max)+b.minPixelPadding)),q;q=k-f;0<q&&(h+=q,f=k);q=h-p;0<q&&(h=p,f-=q);b.series.length&&f!==g.min&&h!==g.max&&
(b.setExtremes(f,h,!1,!1,{trigger:"pan"}),e=!0);c[d]=l});e&&c.redraw(!1);D(c.container,{cursor:"move"})}});r(p.prototype,{select:function(a,b){var c=this,e=c.series,f=e.chart;a=d(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;e.options.data[m(c,e.data)]=c.options;c.setState(a&&"select");b||u(f.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,e.options.data[m(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},
onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");u(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,d=e(b.series.options.point,b.options).events;b.events=d;a.objectEach(d,function(a,d){E(b,d,a)});this.hasImportedEvents=!0}},setState:function(a,
b){var c=Math.floor(this.plotX),e=this.plotY,f=this.series,g=f.options.states[a]||{},p=h[f.type].marker&&f.options.marker,l=p&&!1===p.enabled,q=p&&p.states&&p.states[a]||{},k=!1===q.enabled,m=f.stateMarkerGraphic,n=this.marker||{},v=f.chart,t=f.halo,u,x=p&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(k||l&&!1===q.enabled)||a&&n.states&&n.states[a]&&!1===n.states[a].enabled)){x&&(u=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(f.pointAttribs(this,a)),u&&this.graphic.animate(u,d(v.options.chart.animation,q.animation,p.animation)),m&&m.hide();else{if(a&&q){p=n.symbol||f.symbol;m&&m.currentSymbol!==p&&(m=m.destroy());if(m)m[b?"animate":"attr"]({x:u.x,y:u.y});else p&&(f.stateMarkerGraphic=m=v.renderer.symbol(p,u.x,u.y,u.width,u.height).add(f.markerGroup),m.currentSymbol=p);m&&m.attr(f.pointAttribs(this,a))}m&&(m[a&&v.isInsidePlot(c,e,v.inverted)?
"show":"hide"](),m.element.point=this)}(c=g.halo)&&c.size?(t||(f.halo=t=v.renderer.path().add((this.graphic||m).parentGroup)),t[b?"animate":"attr"]({d:this.haloPath(c.size)}),t.attr({"class":"highcharts-halo highcharts-color-"+d(this.colorIndex,f.colorIndex)}),t.point=this,t.attr(r({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):t&&t.point&&t.point.haloPath&&t.animate({d:t.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});r(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&x(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&x(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
c=b.options,e=b.graph,f=c.states,g=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(u([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(g=f[a].lineWidth||g+(f[a].lineWidthPlus||0)),e&&!e.dashstyle))for(g={"stroke-width":g},e.animate(g,d(b.chart.options.chart.animation,f[a]&&f[a].animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(g),c+=1},setVisible:function(a,
b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,l=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!l:a)?"show":"hide";u(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&u(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});u(c.linkedSeries,function(c){c.setVisible(a,
!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();x(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);x(this,a?"select":"unselect")},drawTracker:H.drawTrackerGraph})})(L);(function(a){var E=a.Chart,B=a.each,F=a.inArray,D=a.isArray,n=a.isObject,h=a.pick,u=a.splat;E.prototype.setResponsive=function(h){var n=this.options.responsive,r=[],m=this.currentResponsive;n&&n.rules&&
B(n.rules,function(f){void 0===f._id&&(f._id=a.uniqueKey());this.matchResponsiveRule(f,r,h)},this);var f=a.merge.apply(0,a.map(r,function(f){return a.find(n.rules,function(a){return a._id===f}).chartOptions})),r=r.toString()||void 0;r!==(m&&m.ruleIds)&&(m&&this.update(m.undoOptions,h),r?(this.currentResponsive={ruleIds:r,mergedOptions:f,undoOptions:this.currentOptions(f)},this.update(f,h)):this.currentResponsive=void 0)};E.prototype.matchResponsiveRule=function(a,n){var r=a.condition;(r.callback||
function(){return this.chartWidth<=h(r.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=h(r.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=h(r.minWidth,0)&&this.chartHeight>=h(r.minHeight,0)}).call(this)&&n.push(a._id)};E.prototype.currentOptions=function(h){function r(h,f,g,e){var d;a.objectEach(h,function(a,b){if(!e&&-1<F(b,["series","xAxis","yAxis"]))for(h[b]=u(h[b]),g[b]=[],d=0;d<h[b].length;d++)f[b][d]&&(g[b][d]={},r(a[d],f[b][d],g[b][d],e+1));else n(a)?(g[b]=D(a)?[]:{},r(a,f[b]||{},g[b],e+1)):g[b]=
f[b]||null})}var t={};r(h,this.options,t,0);return t}})(L);(function(a){var E=a.addEvent,B=a.Axis,F=a.Chart,D=a.css,n=a.dateFormat,h=a.defined,u=a.each,r=a.extend,x=a.noop,t=a.timeUnits,m=a.wrap;m(a.Series.prototype,"init",function(a){var f;a.apply(this,Array.prototype.slice.call(arguments,1));(f=this.xAxis)&&f.options.ordinal&&E(this,"updatedData",function(){delete f.ordinalIndex})});m(B.prototype,"getTimeTicks",function(a,g,e,d,p,b,m,v){var f=0,q,r,c={},w,u,y,x=[],l=-Number.MAX_VALUE,I=this.options.tickPixelInterval;
if(!this.options.ordinal&&!this.options.breaks||!b||3>b.length||void 0===e)return a.call(this,g,e,d,p);u=b.length;for(q=0;q<u;q++){y=q&&b[q-1]>d;b[q]<e&&(f=q);if(q===u-1||b[q+1]-b[q]>5*m||y){if(b[q]>l){for(r=a.call(this,g,b[f],b[q],p);r.length&&r[0]<=l;)r.shift();r.length&&(l=r[r.length-1]);x=x.concat(r)}f=q+1}if(y)break}a=r.info;if(v&&a.unitRange<=t.hour){q=x.length-1;for(f=1;f<q;f++)n("%d",x[f])!==n("%d",x[f-1])&&(c[x[f]]="day",w=!0);w&&(c[x[0]]="day");a.higherRanks=c}x.info=a;if(v&&h(I)){v=a=x.length;
q=[];var k;for(w=[];v--;)f=this.translate(x[v]),k&&(w[v]=k-f),q[v]=k=f;w.sort();w=w[Math.floor(w.length/2)];w<.6*I&&(w=null);v=x[a-1]>d?a-1:a;for(k=void 0;v--;)f=q[v],d=Math.abs(k-f),k&&d<.8*I&&(null===w||d<.8*w)?(c[x[v]]&&!c[x[v+1]]?(d=v+1,k=f):d=v,x.splice(d,1)):k=f}return x});r(B.prototype,{beforeSetTickPositions:function(){var a,g=[],e=!1,d,h=this.getExtremes(),b=h.min,m=h.max,n,r=this.isXAxis&&!!this.options.breaks,h=this.options.ordinal,q=this.chart.options.chart.ignoreHiddenSeries;if(h||r){u(this.series,
function(b,c){if(!(q&&!1===b.visible||!1===b.takeOrdinalPosition&&!r)&&(g=g.concat(b.processedXData),a=g.length,g.sort(function(a,c){return a-c}),a))for(c=a-1;c--;)g[c]===g[c+1]&&g.splice(c,1)});a=g.length;if(2<a){d=g[1]-g[0];for(n=a-1;n--&&!e;)g[n+1]-g[n]!==d&&(e=!0);!this.options.keepOrdinalPadding&&(g[0]-b>d||m-g[g.length-1]>d)&&(e=!0)}e?(this.ordinalPositions=g,d=this.ordinal2lin(Math.max(b,g[0]),!0),n=Math.max(this.ordinal2lin(Math.min(m,g[g.length-1]),!0),1),this.ordinalSlope=m=(m-b)/(n-d),
this.ordinalOffset=b-d*m):this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=void 0}this.isOrdinal=h&&e;this.groupIntervalFactor=null},val2lin:function(a,g){var e=this.ordinalPositions;if(e){var d=e.length,f,b;for(f=d;f--;)if(e[f]===a){b=f;break}for(f=d-1;f--;)if(a>e[f]||0===f){a=(a-e[f])/(e[f+1]-e[f]);b=f+a;break}g=g?b:this.ordinalSlope*(b||0)+this.ordinalOffset}else g=a;return g},lin2val:function(a,g){var e=this.ordinalPositions;if(e){var d=this.ordinalSlope,f=this.ordinalOffset,b=e.length-
1,h;if(g)0>a?a=e[0]:a>b?a=e[b]:(b=Math.floor(a),h=a-b);else for(;b--;)if(g=d*b+f,a>=g){d=d*(b+1)+f;h=(a-g)/(d-g);break}return void 0!==h&&void 0!==e[b]?e[b]+(h?h*(e[b+1]-e[b]):0):a}return a},getExtendedPositions:function(){var a=this.chart,g=this.series[0].currentDataGrouping,e=this.ordinalIndex,d=g?g.count+g.unitName:"raw",h=this.getExtremes(),b,m;e||(e=this.ordinalIndex={});e[d]||(b={series:[],chart:a,getExtremes:function(){return{min:h.dataMin,max:h.dataMax}},options:{ordinal:!0},val2lin:B.prototype.val2lin,
ordinal2lin:B.prototype.ordinal2lin},u(this.series,function(d){m={xAxis:b,xData:d.xData,chart:a,destroyGroupedData:x};m.options={dataGrouping:g?{enabled:!0,forced:!0,approximation:"open",units:[[g.unitName,[g.count]]]}:{enabled:!1}};d.processData.apply(m);b.series.push(m)}),this.beforeSetTickPositions.apply(b),e[d]=b.ordinalPositions);return e[d]},getGroupIntervalFactor:function(a,g,e){var d;e=e.processedXData;var f=e.length,b=[];d=this.groupIntervalFactor;if(!d){for(d=0;d<f-1;d++)b[d]=e[d+1]-e[d];
b.sort(function(a,b){return a-b});b=b[Math.floor(f/2)];a=Math.max(a,e[0]);g=Math.min(g,e[f-1]);this.groupIntervalFactor=d=f*b/(g-a)}return d},postProcessTickInterval:function(a){var f=this.ordinalSlope;return f?this.options.breaks?this.closestPointRange:a/(f/this.closestPointRange):a}});B.prototype.ordinal2lin=B.prototype.val2lin;m(F.prototype,"pan",function(a,g){var e=this.xAxis[0],d=g.chartX,f=!1;if(e.options.ordinal&&e.series.length){var b=this.mouseDownX,h=e.getExtremes(),m=h.dataMax,n=h.min,
q=h.max,r=this.hoverPoints,c=e.closestPointRange,b=(b-d)/(e.translationSlope*(e.ordinalSlope||c)),w={ordinalPositions:e.getExtendedPositions()},c=e.lin2val,t=e.val2lin,y;w.ordinalPositions?1<Math.abs(b)&&(r&&u(r,function(a){a.setState()}),0>b?(r=w,y=e.ordinalPositions?e:w):(r=e.ordinalPositions?e:w,y=w),w=y.ordinalPositions,m>w[w.length-1]&&w.push(m),this.fixedRange=q-n,b=e.toFixedRange(null,null,c.apply(r,[t.apply(r,[n,!0])+b,!0]),c.apply(y,[t.apply(y,[q,!0])+b,!0])),b.min>=Math.min(h.dataMin,n)&&
b.max<=Math.max(m,q)&&e.setExtremes(b.min,b.max,!0,!1,{trigger:"pan"}),this.mouseDownX=d,D(this.container,{cursor:"move"})):f=!0}else f=!0;f&&a.apply(this,Array.prototype.slice.call(arguments,1))})})(L);(function(a){function E(){return Array.prototype.slice.call(arguments,1)}function B(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,F(this.pointArrayMap,["y"]))}var F=a.pick,D=a.wrap,n=a.each,h=a.extend,u=a.isArray,r=a.fireEvent,x=a.Axis,t=a.Series;h(x.prototype,{isInBreak:function(a,
f){var g=a.repeat||Infinity,e=a.from,d=a.to-a.from;f=f>=e?(f-e)%g:g-(e-f)%g;return a.inclusive?f<=d:f<d&&0!==f},isInAnyBreak:function(a,f){var g=this.options.breaks,e=g&&g.length,d,h,b;if(e){for(;e--;)this.isInBreak(g[e],a)&&(d=!0,h||(h=F(g[e].showPoints,this.isXAxis?!1:!0)));b=d&&f?d&&!h:d}return b}});D(x.prototype,"setTickPositions",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));if(this.options.breaks){var f=this.tickPositions,g=this.tickPositions.info,e=[],d;for(d=0;d<f.length;d++)this.isInAnyBreak(f[d])||
e.push(f[d]);this.tickPositions=e;this.tickPositions.info=g}});D(x.prototype,"init",function(a,f,g){var e=this;g.breaks&&g.breaks.length&&(g.ordinal=!1);a.call(this,f,g);a=this.options.breaks;e.isBroken=u(a)&&!!a.length;e.isBroken&&(e.val2lin=function(a){var d=a,b,f;for(f=0;f<e.breakArray.length;f++)if(b=e.breakArray[f],b.to<=a)d-=b.len;else if(b.from>=a)break;else if(e.isInBreak(b,a)){d-=a-b.from;break}return d},e.lin2val=function(a){var d,b;for(b=0;b<e.breakArray.length&&!(d=e.breakArray[b],d.from>=
a);b++)d.to<a?a+=d.len:e.isInBreak(d,a)&&(a+=d.len);return a},e.setExtremes=function(a,e,b,f,g){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(e);)e-=this.closestPointRange;x.prototype.setExtremes.call(this,a,e,b,f,g)},e.setAxisTranslation=function(a){x.prototype.setAxisTranslation.call(this,a);a=e.options.breaks;var d=[],b=[],f=0,g,h,m=e.userMin||e.min,u=e.userMax||e.max,c=F(e.pointRangePadding,0),w,t;n(a,function(a){h=a.repeat||Infinity;e.isInBreak(a,m)&&(m+=a.to%h-
m%h);e.isInBreak(a,u)&&(u-=u%h-a.from%h)});n(a,function(a){w=a.from;for(h=a.repeat||Infinity;w-h>m;)w-=h;for(;w<m;)w+=h;for(t=w;t<u;t+=h)d.push({value:t,move:"in"}),d.push({value:t+(a.to-a.from),move:"out",size:a.breakSize})});d.sort(function(a,c){return a.value===c.value?("in"===a.move?0:1)-("in"===c.move?0:1):a.value-c.value});g=0;w=m;n(d,function(a){g+="in"===a.move?1:-1;1===g&&"in"===a.move&&(w=a.value);0===g&&(b.push({from:w,to:a.value,len:a.value-w-(a.size||0)}),f+=a.value-w-(a.size||0))});
e.breakArray=b;e.unitLength=u-m-f+c;r(e,"afterBreaks");e.options.staticScale?e.transA=e.options.staticScale:e.unitLength&&(e.transA*=(u-e.min+c)/e.unitLength);c&&(e.minPixelPadding=e.transA*e.minPointOffset);e.min=m;e.max=u})});D(t.prototype,"generatePoints",function(a){a.apply(this,E(arguments));var f=this.xAxis,g=this.yAxis,e=this.points,d,h=e.length,b=this.options.connectNulls,m;if(f&&g&&(f.options.breaks||g.options.breaks))for(;h--;)d=e[h],m=null===d.y&&!1===b,m||!f.isInAnyBreak(d.x,!0)&&!g.isInAnyBreak(d.y,
!0)||(e.splice(h,1),this.data[h]&&this.data[h].destroyElements())});a.Series.prototype.drawBreaks=function(a,f){var g=this,e=g.points,d,h,b,m;a&&n(f,function(f){d=a.breakArray||[];h=a.isXAxis?a.min:F(g.options.threshold,a.min);n(e,function(e){m=F(e["stack"+f.toUpperCase()],e[f]);n(d,function(d){b=!1;if(h<d.from&&m>d.to||h>d.from&&m<d.from)b="pointBreak";else if(h<d.from&&m>d.from&&m<d.to||h>d.from&&m>d.to&&m<d.from)b="pointInBreak";b&&r(a,b,{point:e,brk:d})})})})};a.Series.prototype.gappedPath=function(){var a=
this.options.gapSize,f=this.points.slice(),g=f.length-1;if(a&&0<g)for(;g--;)f[g+1].x-f[g].x>this.closestPointRange*a&&f.splice(g+1,0,{isNull:!0});return this.getGraphPath(f)};D(a.seriesTypes.column.prototype,"drawPoints",B);D(a.Series.prototype,"drawPoints",B)})(L);(function(a){var E=a.arrayMax,B=a.arrayMin,F=a.Axis,D=a.defaultPlotOptions,n=a.defined,h=a.each,u=a.extend,r=a.format,x=a.isNumber,t=a.merge,m=a.pick,f=a.Point,g=a.Tooltip,e=a.wrap,d=a.Series.prototype,p=d.processData,b=d.generatePoints,
A=d.destroy,v={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},
H={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},q=a.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",
[1]],["month",[1,3,6]],["year",null]],J={sum:function(a){var c=a.length,b;if(!c&&a.hasNulls)b=null;else if(c)for(b=0;c--;)b+=a[c];return b},average:function(a){var c=a.length;a=J.sum(a);x(a)&&c&&(a/=c);return a},averages:function(){var a=[];h(arguments,function(c){a.push(J.average(c))});return a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?E(a):a.hasNulls?null:void 0},low:function(a){return a.length?B(a):a.hasNulls?null:void 0},close:function(a){return a.length?
a[a.length-1]:a.hasNulls?null:void 0},ohlc:function(a,b,d,e){a=J.open(a);b=J.high(b);d=J.low(d);e=J.close(e);if(x(a)||x(b)||x(d)||x(e))return[a,b,d,e]},range:function(a,b){a=J.low(a);b=J.high(b);if(x(a)||x(b))return[a,b];if(null===a&&null===b)return null}};d.groupData=function(a,b,d,e){var c=this.data,f=this.options.data,g=[],k=[],p=[],m=a.length,n,q,r=!!b,w=[];e="function"===typeof e?e:J[e]||H[this.type]&&J[H[this.type].approximation]||J[v.approximation];var u=this.pointArrayMap,t=u&&u.length,y=
0;q=0;var K,A;t?h(u,function(){w.push([])}):w.push([]);K=t||1;for(A=0;A<=m&&!(a[A]>=d[0]);A++);for(A;A<=m;A++){for(;void 0!==d[y+1]&&a[A]>=d[y+1]||A===m;){n=d[y];this.dataGroupInfo={start:q,length:w[0].length};q=e.apply(this,w);void 0!==q&&(g.push(n),k.push(q),p.push(this.dataGroupInfo));q=A;for(n=0;n<K;n++)w[n].length=0,w[n].hasNulls=!1;y+=1;if(A===m)break}if(A===m)break;if(u){n=this.cropStart+A;var B=c&&c[n]||this.pointClass.prototype.applyOptions.apply({series:this},[f[n]]),D;for(n=0;n<t;n++)D=
B[u[n]],x(D)?w[n].push(D):null===D&&(w[n].hasNulls=!0)}else n=r?b[A]:null,x(n)?w[0].push(n):null===n&&(w[0].hasNulls=!0)}return[g,k,p]};d.processData=function(){var a=this.chart,b=this.options.dataGrouping,e=!1!==this.allowDG&&b&&m(b.enabled,a.options.isStock),f=this.visible||!a.options.chart.ignoreHiddenSeries,g;this.forceCrop=e;this.groupPixelWidth=null;this.hasProcessed=!0;if(!1!==p.apply(this,arguments)&&e){this.destroyGroupedData();var l=this.processedXData,h=this.processedYData,k=a.plotSizeX,
a=this.xAxis,v=a.options.ordinal,r=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(r){this.isDirty=g=!0;this.points=null;var u=a.getExtremes(),e=u.min,u=u.max,v=v&&a.getGroupIntervalFactor(e,u,this)||1,k=r*(u-e)/k*v,r=a.getTimeTicks(a.normalizeTimeTickInterval(k,b.units||q),Math.min(e,l[0]),Math.max(u,l[l.length-1]),a.options.startOfWeek,l,this.closestPointRange),l=d.groupData.apply(this,[l,h,r,b.approximation]),h=l[0],v=l[1];if(b.smoothed){b=h.length-1;for(h[b]=Math.min(h[b],
u);b--&&0<b;)h[b]+=k/2;h[0]=Math.max(h[0],e)}this.currentDataGrouping=r.info;this.closestPointRange=r.info.totalRange;this.groupMap=l[2];n(h[0])&&h[0]<a.dataMin&&f&&(a.min===a.dataMin&&(a.min=h[0]),a.dataMin=h[0]);this.processedXData=h;this.processedYData=v}else this.currentDataGrouping=this.groupMap=null;this.hasGroupedData=g}};d.destroyGroupedData=function(){var a=this.groupedData;h(a||[],function(c,b){c&&(a[b]=c.destroy?c.destroy():null)});this.groupedData=null};d.generatePoints=function(){b.apply(this);
this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};e(f.prototype,"update",function(c){this.dataGroup?a.error(24):c.apply(this,[].slice.call(arguments,1))});e(g.prototype,"tooltipFooterHeaderFormatter",function(c,b,d){var e=b.series,f=e.tooltipOptions,l=e.options.dataGrouping,g=f.xDateFormat,k,h=e.xAxis,p=a.dateFormat;return h&&"datetime"===h.options.type&&l&&x(b.key)?(c=e.currentDataGrouping,l=l.dateTimeLabelFormats,c?(h=l[c.unitName],1===c.count?g=h[0]:(g=h[1],k=h[2])):
!g&&l&&(g=this.getXDateFormat(b,f,h)),g=p(g,b.key),k&&(g+=p(k,b.key+c.totalRange-1)),r(f[(d?"footer":"header")+"Format"],{point:u(b.point,{key:g}),series:e})):c.call(this,b,d)});d.destroy=function(){for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();A.apply(this)};e(d,"setOptions",function(a,b){a=a.call(this,b);var c=this.type,d=this.chart.options.plotOptions,e=D[c].dataGrouping;H[c]&&(e||(e=t(v,H[c])),a.dataGrouping=t(e,d.series&&d.series.dataGrouping,d[c].dataGrouping,b.dataGrouping));
this.chart.options.isStock&&(this.requireSorting=!0);return a});e(F.prototype,"setScale",function(a){a.call(this);h(this.series,function(a){a.hasProcessed=!1})});F.prototype.getGroupPixelWidth=function(){var a=this.series,b=a.length,d,e=0,f=!1,l;for(d=b;d--;)(l=a[d].options.dataGrouping)&&(e=Math.max(e,l.groupPixelWidth));for(d=b;d--;)(l=a[d].options.dataGrouping)&&a[d].hasProcessed&&(b=(a[d].processedXData||a[d].data).length,a[d].groupPixelWidth||b>this.chart.plotSizeX/e||b&&l.forced)&&(f=!0);return f?
e:0};F.prototype.setDataGrouping=function(a,b){var c;b=m(b,!0);a||(a={forced:!1,units:null});if(this instanceof F)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);else h(this.chart.options.series,function(c){c.dataGrouping=a},!1);b&&this.chart.redraw()}})(L);(function(a){var E=a.each,B=a.Point,F=a.seriesType,D=a.seriesTypes;F("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e'},
threshold:null,states:{hover:{lineWidth:3}},stickyTracking:!0},{directTouch:!1,pointArrayMap:["open","high","low","close"],toYData:function(a){return[a.open,a.high,a.low,a.close]},pointValKey:"close",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},pointAttribs:function(a,h){h=D.column.prototype.pointAttribs.call(this,a,h);var n=this.options;delete h.fill;!a.options.color&&n.upColor&&a.open<a.close&&(h.stroke=n.upColor);return h},translate:function(){var a=this,h=a.yAxis,u=!!a.modifyValue,
r=["plotOpen","plotHigh","plotLow","plotClose","yBottom"];D.column.prototype.translate.apply(a);E(a.points,function(n){E([n.open,n.high,n.low,n.close,n.low],function(t,m){null!==t&&(u&&(t=a.modifyValue(t)),n[r[m]]=h.toPixels(t,!0))});n.tooltipPos[1]=n.plotHigh+h.pos-a.chart.plotTop})},drawPoints:function(){var a=this,h=a.chart;E(a.points,function(n){var r,u,t,m,f=n.graphic,g,e=!f;void 0!==n.plotY&&(f||(n.graphic=f=h.renderer.path().add(a.group)),f.attr(a.pointAttribs(n,n.selected&&"select")),u=f.strokeWidth()%
2/2,g=Math.round(n.plotX)-u,t=Math.round(n.shapeArgs.width/2),m=["M",g,Math.round(n.yBottom),"L",g,Math.round(n.plotHigh)],null!==n.open&&(r=Math.round(n.plotOpen)+u,m.push("M",g,r,"L",g-t,r)),null!==n.close&&(r=Math.round(n.plotClose)+u,m.push("M",g,r,"L",g+t,r)),f[e?"attr":"animate"]({d:m}).addClass(n.getClassName(),!0))})},animate:null},{getClassName:function(){return B.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}})})(L);(function(a){var E=
a.defaultPlotOptions,B=a.each,F=a.merge,D=a.seriesType,n=a.seriesTypes;D("candlestick","ohlc",F(E.column,{states:{hover:{lineWidth:2}},tooltip:E.ohlc.tooltip,threshold:null,lineColor:"#000000",lineWidth:1,upColor:"#ffffff",stickyTracking:!0}),{pointAttribs:function(a,u){var h=n.column.prototype.pointAttribs.call(this,a,u),x=this.options,t=a.open<a.close,m=x.lineColor||this.color;h["stroke-width"]=x.lineWidth;h.fill=a.options.color||(t?x.upColor||this.color:this.color);h.stroke=a.lineColor||(t?x.upLineColor||
m:m);u&&(a=x.states[u],h.fill=a.color||h.fill,h.stroke=a.lineColor||h.stroke,h["stroke-width"]=a.lineWidth||h["stroke-width"]);return h},drawPoints:function(){var a=this,n=a.chart;B(a.points,function(h){var r=h.graphic,t,m,f,g,e,d,p,b=!r;void 0!==h.plotY&&(r||(h.graphic=r=n.renderer.path().add(a.group)),r.attr(a.pointAttribs(h,h.selected&&"select")).shadow(a.options.shadow),e=r.strokeWidth()%2/2,d=Math.round(h.plotX)-e,t=h.plotOpen,m=h.plotClose,f=Math.min(t,m),t=Math.max(t,m),p=Math.round(h.shapeArgs.width/
2),m=Math.round(f)!==Math.round(h.plotHigh),g=t!==h.yBottom,f=Math.round(f)+e,t=Math.round(t)+e,e=[],e.push("M",d-p,t,"L",d-p,f,"L",d+p,f,"L",d+p,t,"Z","M",d,f,"L",d,m?Math.round(h.plotHigh):f,"M",d,t,"L",d,g?Math.round(h.yBottom):t),r[b?"attr":"animate"]({d:e}).addClass(h.getClassName(),!0))})}})})(L);(function(a){var E=a.addEvent,B=a.each,F=a.merge,D=a.noop,n=a.Renderer,h=a.seriesType,u=a.seriesTypes,r=a.TrackerMixin,x=a.VMLRenderer,t=a.SVGRenderer.prototype.symbols,m=a.stableSort;h("flags","column",
{pointRange:0,shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}\x3cbr/\x3e"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:a.Series.prototype.init,pointAttribs:function(a,g){var e=this.options,d=a&&a.color||this.color,f=e.lineColor,b=a&&a.lineWidth;
a=a&&a.fillColor||e.fillColor;g&&(a=e.states[g].fillColor,f=e.states[g].lineColor,b=e.states[g].lineWidth);return{fill:a||d,stroke:f||d,"stroke-width":b||e.lineWidth||0}},translate:function(){u.column.prototype.translate.apply(this);var a=this.options,g=this.chart,e=this.points,d=e.length-1,h,b,n=a.onSeries;h=n&&g.get(n);var a=a.onKey||"y",n=h&&h.options.step,v=h&&h.points,r=v&&v.length,q=this.xAxis,t=this.yAxis,c=q.getExtremes(),w=0,x,y,G;if(h&&h.visible&&r)for(w=(h.pointXOffset||0)+(h.barW||0)/
2,h=h.currentDataGrouping,y=v[r-1].x+(h?h.totalRange:0),m(e,function(a,c){return a.x-c.x}),a="plot"+a[0].toUpperCase()+a.substr(1);r--&&e[d]&&!(h=e[d],x=v[r],x.x<=h.x&&void 0!==x[a]&&(h.x<=y&&(h.plotY=x[a],x.x<h.x&&!n&&(G=v[r+1])&&void 0!==G[a]&&(h.plotY+=(h.x-x.x)/(G.x-x.x)*(G[a]-x[a]))),d--,r++,0>d)););B(e,function(a,d){var f;void 0===a.plotY&&(a.x>=c.min&&a.x<=c.max?a.plotY=g.chartHeight-q.bottom-(q.opposite?q.height:0)+q.offset-t.top:a.shapeArgs={});a.plotX+=w;(b=e[d-1])&&b.plotX===a.plotX&&(void 0===
b.stackIndex&&(b.stackIndex=0),f=b.stackIndex+1);a.stackIndex=f})},drawPoints:function(){var f=this.points,g=this.chart,e=g.renderer,d,h,b=this.options,m=b.y,n,r,q,t,c,w,u,y=this.yAxis;for(r=f.length;r--;)q=f[r],u=q.plotX>this.xAxis.len,d=q.plotX,t=q.stackIndex,n=q.options.shape||b.shape,h=q.plotY,void 0!==h&&(h=q.plotY+m-(void 0!==t&&t*b.stackDistance)),c=t?void 0:q.plotX,w=t?void 0:q.plotY,t=q.graphic,void 0!==h&&0<=d&&!u?(t||(t=q.graphic=e.label("",null,null,n,null,null,b.useHTML).attr(this.pointAttribs(q)).css(F(b.style,
q.style)).attr({align:"flag"===n?"left":"center",width:b.width,height:b.height,"text-align":b.textAlign}).addClass("highcharts-point").add(this.markerGroup),q.graphic.div&&(q.graphic.div.point=q),t.shadow(b.shadow)),0<d&&(d-=t.strokeWidth()%2),t.attr({text:q.options.title||b.title||"A",x:d,y:h,anchorX:c,anchorY:w}),q.tooltipPos=g.inverted?[y.len+y.pos-g.plotLeft-h,this.xAxis.len-d]:[d,h+y.pos-g.plotTop]):t&&(q.graphic=t.destroy());b.useHTML&&a.wrap(this.markerGroup,"on",function(c){return a.SVGElement.prototype.on.apply(c.apply(this,
[].slice.call(arguments,1)),[].slice.call(arguments,1))})},drawTracker:function(){var a=this.points;r.drawTrackerPoint.apply(this);B(a,function(f){var e=f.graphic;e&&E(e.element,"mouseover",function(){0<f.stackIndex&&!f.raised&&(f._y=e.y,e.attr({y:f._y-8}),f.raised=!0);B(a,function(a){a!==f&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1)})})})},animate:D,buildKDTree:D,setClip:D});t.flag=function(a,g,e,d,h){return["M",h&&h.anchorX||a,h&&h.anchorY||g,"L",a,g+d,a,g,a+e,g,a+e,g+d,a,g+d,"Z"]};
B(["circle","square"],function(a){t[a+"pin"]=function(f,e,d,h,b){var g=b&&b.anchorX;b=b&&b.anchorY;"circle"===a&&h>d&&(f-=Math.round((h-d)/2),d=h);f=t[a](f,e,d,h);g&&b&&f.push("M",g,e>b?e:e+h,"L",g,b);return f}});n===x&&B(["flag","circlepin","squarepin"],function(a){x.prototype.symbols[a]=t[a]})})(L);(function(a){function E(a,b,d){this.init(a,b,d)}var B=a.addEvent,F=a.Axis,D=a.correctFloat,n=a.defaultOptions,h=a.defined,u=a.destroyObjectProperties,r=a.doc,x=a.each,t=a.fireEvent,m=a.hasTouch,f=a.isTouchDevice,
g=a.merge,e=a.pick,d=a.removeEvent,p=a.wrap,b,A={height:f?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:a.svg&&!f,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};n.scrollbar=g(!0,A,n.scrollbar);a.swapXY=b=function(a,b){var d=
a.length,e;if(b)for(b=0;b<d;b+=3)e=a[b+1],a[b+1]=a[b+2],a[b+2]=e;return a};E.prototype={init:function(a,b,d){this.scrollbarButtons=[];this.renderer=a;this.userOptions=b;this.options=g(A,b);this.chart=d;this.size=e(this.options.size,this.options.height);b.enabled&&(this.render(),this.initEvents(),this.addEvents())},render:function(){var a=this.renderer,d=this.options,e=this.size,f;this.group=f=a.g("scrollbar").attr({zIndex:d.zIndex,translateY:-99999}).add();this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,
r:d.trackBorderRadius||0,height:e,width:e}).add(f);this.track.attr({fill:d.trackBackgroundColor,stroke:d.trackBorderColor,"stroke-width":d.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(f);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:e,width:e,r:d.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=a.path(b(["M",-3,e/4,"L",-3,2*e/3,"M",0,e/4,"L",0,2*e/3,"M",
3,e/4,"L",3,2*e/3],d.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);this.scrollbar.attr({fill:d.barBackgroundColor,stroke:d.barBorderColor,"stroke-width":d.barBorderWidth});this.scrollbarRifles.attr({stroke:d.rifleColor,"stroke-width":1});this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);this.drawScrollbarButton(1)},position:function(a,b,d,e){var c=
this.options.vertical,f=0,g=this.rendered?"animate":"attr";this.x=a;this.y=b+this.trackBorderWidth;this.width=d;this.xOffset=this.height=e;this.yOffset=f;c?(this.width=this.yOffset=d=f=this.size,this.xOffset=b=0,this.barWidth=e-2*d,this.x=a+=this.options.margin):(this.height=this.xOffset=e=b=this.size,this.barWidth=d-2*e,this.y+=this.options.margin);this.group[g]({translateX:a,translateY:this.y});this.track[g]({width:d,height:e});this.scrollbarButtons[1][g]({translateX:c?0:d-b,translateY:c?e-f:0})},
drawScrollbarButton:function(a){var d=this.renderer,e=this.scrollbarButtons,f=this.options,c=this.size,g;g=d.g().add(this.group);e.push(g);g=d.rect().addClass("highcharts-scrollbar-button").add(g);g.attr({stroke:f.buttonBorderColor,"stroke-width":f.buttonBorderWidth,fill:f.buttonBackgroundColor});g.attr(g.crisp({x:-.5,y:-.5,width:c+1,height:c+1,r:f.buttonBorderRadius},g.strokeWidth()));g=d.path(b(["M",c/2+(a?-1:1),c/2-3,"L",c/2+(a?-1:1),c/2+3,"L",c/2+(a?2:-2),c/2],f.vertical)).addClass("highcharts-scrollbar-arrow").add(e[a]);
g.attr({fill:f.buttonArrowColor})},setRange:function(a,b){var d=this.options,e=d.vertical,c=d.minWidth,f=this.barWidth,g,m,n=this.rendered&&!this.hasDragged?"animate":"attr";h(f)&&(a=Math.max(a,0),g=Math.ceil(f*a),this.calculatedWidth=m=D(f*Math.min(b,1)-g),m<c&&(g=(f-c+m)*a,m=c),c=Math.floor(g+this.xOffset+this.yOffset),f=m/2-.5,this.from=a,this.to=b,e?(this.scrollbarGroup[n]({translateY:c}),this.scrollbar[n]({height:m}),this.scrollbarRifles[n]({translateY:f}),this.scrollbarTop=c,this.scrollbarLeft=
0):(this.scrollbarGroup[n]({translateX:c}),this.scrollbar[n]({width:m}),this.scrollbarRifles[n]({translateX:f}),this.scrollbarLeft=c,this.scrollbarTop=0),12>=m?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0),!1===d.showFull&&(0>=a&&1<=b?this.group.hide():this.group.show()),this.rendered=!0)},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var d=a.chart.pointer.normalize(b),e=a.options.vertical?"chartY":"chartX",c=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][e]||
(d=a.cursorToScrollbarPosition(d)[e],e=a[e],e=d-e,a.hasDragged=!0,a.updatePosition(c[0]+e,c[1]+e),a.hasDragged&&t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}))};a.mouseUpHandler=function(b){a.hasDragged&&t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null};a.mouseDownHandler=function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;
a.initPositions=[a.from,a.to];a.grabbedCenter=!0};a.buttonToMinClick=function(b){var d=D(a.to-a.from)*a.options.step;a.updatePosition(D(a.from-d),D(a.to-d));t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.buttonToMaxClick=function(b){var d=(a.to-a.from)*a.options.step;a.updatePosition(a.from+d,a.to+d);t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.trackClick=function(b){var d=a.chart.pointer.normalize(b),e=a.to-a.from,c=a.y+a.scrollbarTop,f=a.x+a.scrollbarLeft;
a.options.vertical&&d.chartY>c||!a.options.vertical&&d.chartX>f?a.updatePosition(a.from+e,a.to+e):a.updatePosition(a.from-e,a.to-e);t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})}},cursorToScrollbarPosition:function(a){var b=this.options,b=b.minWidth>this.calculatedWidth?b.minWidth:0;return{chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,b){1<b&&(a=D(1-D(b-a)),b=1);0>a&&(b=D(b-a),a=0);
this.from=a;this.to=b},update:function(a){this.destroy();this.init(this.chart.renderer,g(!0,this.options,a),this.chart)},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],b=this.scrollbarButtons,d=this.scrollbarGroup.element,e=this.mouseDownHandler,c=this.mouseMoveHandler,f=this.mouseUpHandler,a=[[b[a[0]].element,"click",this.buttonToMinClick],[b[a[1]].element,"click",this.buttonToMaxClick],[this.track.element,"click",this.trackClick],[d,"mousedown",e],[r,"mousemove",c],[r,"mouseup",f]];
m&&a.push([d,"touchstart",e],[r,"touchmove",c],[r,"touchend",f]);x(a,function(a){B.apply(null,a)});this._events=a},removeEvents:function(){x(this._events,function(a){d.apply(null,a)});this._events.length=0},destroy:function(){var a=this.chart.scroller;this.removeEvents();x(["track","scrollbarRifles","scrollbar","scrollbarGroup","group"],function(a){this[a]&&this[a].destroy&&(this[a]=this[a].destroy())},this);a&&this===a.scrollbar&&(a.scrollbar=null,u(a.scrollbarButtons))}};p(F.prototype,"init",function(a){var b=
this;a.apply(b,Array.prototype.slice.call(arguments,1));b.options.scrollbar&&b.options.scrollbar.enabled&&(b.options.scrollbar.vertical=!b.horiz,b.options.startOnTick=b.options.endOnTick=!1,b.scrollbar=new E(b.chart.renderer,b.options.scrollbar,b.chart),B(b.scrollbar,"changed",function(a){var d=Math.min(e(b.options.min,b.min),b.min,b.dataMin),c=Math.max(e(b.options.max,b.max),b.max,b.dataMax)-d,f;b.horiz&&!b.reversed||!b.horiz&&b.reversed?(f=d+c*this.to,d+=c*this.from):(f=d+c*(1-this.from),d+=c*(1-
this.to));b.setExtremes(d,f,!0,!1,a)}))});p(F.prototype,"render",function(a){var b=Math.min(e(this.options.min,this.min),this.min,this.dataMin),d=Math.max(e(this.options.max,this.max),this.max,this.dataMax),f=this.scrollbar,c=this.titleOffset||0;a.apply(this,Array.prototype.slice.call(arguments,1));if(f){this.horiz?(f.position(this.left,this.top+this.height+2+this.chart.scrollbarsOffsets[1]+(this.opposite?0:c+this.axisTitleMargin+this.offset),this.width,this.height),c=1):(f.position(this.left+this.width+
2+this.chart.scrollbarsOffsets[0]+(this.opposite?c+this.axisTitleMargin+this.offset:0),this.top,this.width,this.height),c=0);if(!this.opposite&&!this.horiz||this.opposite&&this.horiz)this.chart.scrollbarsOffsets[c]+=this.scrollbar.size+this.scrollbar.options.margin;isNaN(b)||isNaN(d)||!h(this.min)||!h(this.max)?f.setRange(0,0):(c=(this.min-b)/(d-b),b=(this.max-b)/(d-b),this.horiz&&!this.reversed||!this.horiz&&this.reversed?f.setRange(c,b):f.setRange(1-b,1-c))}});p(F.prototype,"getOffset",function(a){var b=
this.horiz?2:1,d=this.scrollbar;a.apply(this,Array.prototype.slice.call(arguments,1));d&&(this.chart.scrollbarsOffsets=[0,0],this.chart.axisOffset[b]+=d.size+d.options.margin)});p(F.prototype,"destroy",function(a){this.scrollbar&&(this.scrollbar=this.scrollbar.destroy());a.apply(this,Array.prototype.slice.call(arguments,1))});a.Scrollbar=E})(L);(function(a){function E(a){this.init(a)}var B=a.addEvent,F=a.Axis,D=a.Chart,n=a.color,h=a.defaultOptions,u=a.defined,r=a.destroyObjectProperties,x=a.doc,t=
a.each,m=a.erase,f=a.error,g=a.extend,e=a.grep,d=a.hasTouch,p=a.isNumber,b=a.isObject,A=a.merge,v=a.pick,H=a.removeEvent,q=a.Scrollbar,J=a.Series,c=a.seriesTypes,w=a.wrap,K=a.swapXY,y=[].concat(a.defaultDataGroupingUnits),G=function(a){var b=e(arguments,p);if(b.length)return Math[a].apply(0,b)};y[4]=["day",[1,2,3,4]];y[5]=["week",[1,2,3]];c=void 0===c.areaspline?"line":"areaspline";g(h,{navigator:{height:40,margin:25,maskInside:!0,handles:{backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:n("#6685c2").setOpacity(.3).get(),
outlineColor:"#cccccc",outlineWidth:1,series:{type:c,color:"#335cad",fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:y},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,shadow:!1,threshold:null},xAxis:{className:"highcharts-navigator-xaxis",tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,
labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});E.prototype={drawHandle:function(a,b,c,d){this.handles[b][d](c?{translateX:Math.round(this.left+this.height/2-8),translateY:Math.round(this.top+parseInt(a,10)+.5)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+
this.height/2-8)})},getHandlePath:function(a){return K(["M",-4.5,.5,"L",3.5,.5,"L",3.5,15.5,"L",-4.5,15.5,"L",-4.5,.5,"M",-1.5,4,"L",-1.5,12,"M",.5,4,"L",.5,12],a)},drawOutline:function(a,b,c,d){var e=this.navigatorOptions.maskInside,f=this.outline.strokeWidth(),l=f/2,f=f%2/2,k=this.outlineHeight,g=this.scrollbarHeight,h=this.size,m=this.left-g,n=this.top;c?(m-=l,c=n+b+f,b=n+a+f,a=["M",m+k,n-g-f,"L",m+k,c,"L",m,c,"L",m,b,"L",m+k,b,"L",m+k,n+h+g].concat(e?["M",m+k,c-l,"L",m+k,b+l]:[])):(a+=m+g-f,b+=
m+g-f,n+=l,a=["M",m,n,"L",a,n,"L",a,n+k,"L",b,n+k,"L",b,n,"L",m+h+2*g,n].concat(e?["M",a-l,n,"L",b+l,n]:[]));this.outline[d]({d:a})},drawMasks:function(a,b,c,d){var e=this.left,f=this.top,l=this.height,k,g,h,m;c?(h=[e,e,e],m=[f,f+a,f+b],g=[l,l,l],k=[a,b-a,this.size-b]):(h=[e,e+a,e+b],m=[f,f,f],g=[a,b-a,this.size-b],k=[l,l,l]);t(this.shades,function(a,b){a[d]({x:h[b],y:m[b],width:g[b],height:k[b]})})},renderElements:function(){var a=this,b=a.navigatorOptions,c=b.maskInside,d=a.chart,e=d.inverted,f=
d.renderer,g;a.navigatorGroup=g=f.g("navigator").attr({zIndex:8,visibility:"hidden"}).add();var h={cursor:e?"ns-resize":"ew-resize"};t([!c,c,!c],function(c,d){a.shades[d]=f.rect().addClass("highcharts-navigator-mask"+(1===d?"-inside":"-outside")).attr({fill:c?b.maskFill:"rgba(0,0,0,0)"}).css(1===d&&h).add(g)});a.outline=f.path().addClass("highcharts-navigator-outline").attr({"stroke-width":b.outlineWidth,stroke:b.outlineColor}).add(g);t([0,1],function(c){a.handles[c]=f.path(a.getHandlePath(e)).attr({zIndex:7-
c}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][c]).add(g);var d=b.handles;a.handles[c].attr({fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":1}).css(h)})},update:function(a){this.destroy();A(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)},render:function(a,b,c,d){var e=this.chart,f,l,k=this.scrollbarHeight,g,h=this.xAxis;f=h.fake?e.xAxis[0]:h;var m=this.navigatorEnabled,n,q=this.rendered;l=e.inverted;var r=e.xAxis[0].minRange;
if(!this.hasDragged||u(c)){if(!p(a)||!p(b))if(q)c=0,d=h.width;else return;this.left=v(h.left,e.plotLeft+k+(l?e.plotWidth:0));this.size=n=g=v(h.len,(l?e.plotHeight:e.plotWidth)-2*k);e=l?k:g+2*k;c=v(c,h.toPixels(a,!0));d=v(d,h.toPixels(b,!0));p(c)&&Infinity!==Math.abs(c)||(c=0,d=e);a=h.toValue(c,!0);b=h.toValue(d,!0);if(Math.abs(b-a)<r)if(this.grabbedLeft)c=h.toPixels(b-r,!0);else if(this.grabbedRight)d=h.toPixels(a+r,!0);else return;this.zoomedMax=Math.min(Math.max(c,d,0),n);this.zoomedMin=Math.min(Math.max(this.fixedWidth?
this.zoomedMax-this.fixedWidth:Math.min(c,d),0),n);this.range=this.zoomedMax-this.zoomedMin;n=Math.round(this.zoomedMax);c=Math.round(this.zoomedMin);m&&(this.navigatorGroup.attr({visibility:"visible"}),q=q&&!this.hasDragged?"animate":"attr",this.drawMasks(c,n,l,q),this.drawOutline(c,n,l,q),this.drawHandle(c,0,l,q),this.drawHandle(n,1,l,q));this.scrollbar&&(l?(l=this.top-k,f=this.left-k+(m||!f.opposite?0:(f.titleOffset||0)+f.axisTitleMargin),k=g+2*k):(l=this.top+(m?this.height:-k),f=this.left-k),
this.scrollbar.position(f,l,e,k),this.scrollbar.setRange(this.zoomedMin/g,this.zoomedMax/g));this.rendered=!0}},addMouseEvents:function(){var a=this,b=a.chart,c=b.container,e=[],f,g;a.mouseMoveHandler=f=function(b){a.onMouseMove(b)};a.mouseUpHandler=g=function(b){a.onMouseUp(b)};e=a.getPartsEvents("mousedown");e.push(B(c,"mousemove",f),B(x,"mouseup",g));d&&(e.push(B(c,"touchmove",f),B(x,"touchend",g)),e.concat(a.getPartsEvents("touchstart")));a.eventsToUnbind=e;a.series&&a.series[0]&&e.push(B(a.series[0].xAxis,
"foundExtremes",function(){b.navigator.modifyNavigatorAxisExtremes()}))},getPartsEvents:function(a){var b=this,c=[];t(["shades","handles"],function(d){t(b[d],function(e,f){c.push(B(e.element,a,function(a){b[d+"Mousedown"](a,f)}))})});return c},shadesMousedown:function(a,b){a=this.chart.pointer.normalize(a);var c=this.chart,d=this.xAxis,e=this.zoomedMin,f=this.left,l=this.size,g=this.range,h=a.chartX,m;c.inverted&&(h=a.chartY,f=this.top);1===b?(this.grabbedCenter=h,this.fixedWidth=g,this.dragOffset=
h-e):(a=h-f-g/2,0===b?a=Math.max(0,a):2===b&&a+g>=l&&(a=l-g,m=this.getUnionExtremes().dataMax),a!==e&&(this.fixedWidth=g,b=d.toFixedRange(a,a+g,null,m),c.xAxis[0].setExtremes(Math.min(b.min,b.max),Math.max(b.min,b.max),!0,null,{trigger:"navigator"})))},handlesMousedown:function(a,b){this.chart.pointer.normalize(a);a=this.chart;var c=a.xAxis[0],d=a.inverted&&!c.reversed||!a.inverted&&c.reversed;0===b?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=d?c.min:c.max):(this.grabbedRight=
!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=d?c.max:c.min);a.fixedRange=null},onMouseMove:function(a){var b=this,c=b.chart,d=b.left,e=b.navigatorSize,f=b.range,l=b.dragOffset,g=c.inverted;a.touches&&0===a.touches[0].pageX||(a=c.pointer.normalize(a),c=a.chartX,g&&(d=b.top,c=a.chartY),b.grabbedLeft?(b.hasDragged=!0,b.render(0,0,c-d,b.otherHandlePos)):b.grabbedRight?(b.hasDragged=!0,b.render(0,0,b.otherHandlePos,c-d)):b.grabbedCenter&&(b.hasDragged=!0,c<l?c=l:c>e+l-f&&(c=e+l-f),b.render(0,
0,c-l,c-l+f)),b.hasDragged&&b.scrollbar&&b.scrollbar.options.liveRedraw&&(a.DOMType=a.type,setTimeout(function(){b.onMouseUp(a)},0)))},onMouseUp:function(a){var b=this.chart,c=this.xAxis,d=this.scrollbar,e,f,l=a.DOMEvent||a;(!this.hasDragged||d&&d.hasDragged)&&"scrollbar"!==a.trigger||(this.zoomedMin===this.otherHandlePos?e=this.fixedExtreme:this.zoomedMax===this.otherHandlePos&&(f=this.fixedExtreme),this.zoomedMax===this.size&&(f=this.getUnionExtremes().dataMax),c=c.toFixedRange(this.zoomedMin,this.zoomedMax,
e,f),u(c.min)&&b.xAxis[0].setExtremes(Math.min(c.min,c.max),Math.max(c.min,c.max),!0,this.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:l}));"mousemove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null)},removeEvents:function(){this.eventsToUnbind&&(t(this.eventsToUnbind,function(a){a()}),this.eventsToUnbind=void 0);this.removeBaseSeriesEvents()},removeBaseSeriesEvents:function(){var a=
this.baseSeries||[];this.navigatorEnabled&&a[0]&&!1!==this.navigatorOptions.adaptToUpdatedData&&(t(a,function(a){H(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&H(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))},init:function(a){var b=a.options,c=b.navigator,d=c.enabled,e=b.scrollbar,f=e.enabled,b=d?c.height:0,l=f?e.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=b;this.scrollbarHeight=l;this.scrollbarEnabled=f;this.navigatorEnabled=d;this.navigatorOptions=
c;this.scrollbarOptions=e;this.outlineHeight=b+l;this.opposite=v(c.opposite,!d&&a.inverted);var g=this,e=g.baseSeries,f=a.xAxis.length,h=a.yAxis.length,m=e&&e[0]&&e[0].xAxis||a.xAxis[0];a.extraMargin={type:g.opposite?"plotTop":"marginBottom",value:(d||!a.inverted?g.outlineHeight:0)+c.margin};a.inverted&&(a.extraMargin.type=g.opposite?"marginRight":"plotLeft");a.isDirtyBox=!0;g.navigatorEnabled?(g.xAxis=new F(a,A({breaks:m.options.breaks,ordinal:m.options.ordinal},c.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",
isX:!0,type:"datetime",index:f,offset:0,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[l,0,-l,0],width:b}:{offsets:[0,-l,0,l],height:b})),g.yAxis=new F(a,A(c.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:h,zoomEnabled:!1},a.inverted?{width:b}:{height:b})),e||c.series.data?g.addBaseSeries():0===a.series.length&&w(a,"redraw",function(b,c){0<a.series.length&&!g.series&&(g.setBaseSeries(),a.redraw=b);b.call(a,c)}),g.renderElements(),
g.addMouseEvents()):g.xAxis={translate:function(b,c){var d=a.xAxis[0],e=d.getExtremes(),f=d.len-2*l,k=G("min",d.options.min,e.dataMin),d=G("max",d.options.max,e.dataMax)-k;return c?b*d/f+k:f*(b-k)/d},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)},toFixedRange:F.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=g.scrollbar=new q(a.renderer,A(a.options.scrollbar,{margin:g.navigatorEnabled?0:10,vertical:a.inverted}),a),B(g.scrollbar,
"changed",function(b){var c=g.size,d=c*this.to,c=c*this.from;g.hasDragged=g.scrollbar.hasDragged;g.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType)&&setTimeout(function(){g.onMouseUp(b)})}));g.addBaseSeriesEvents();g.addChartEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;a&&null===b.dataMin||(f={dataMin:v(d&&d.min,G("min",e.min,b.dataMin,c.dataMin,c.min)),dataMax:v(d&&d.max,G("max",e.max,b.dataMax,c.dataMax,c.max))});
return f},setBaseSeries:function(a){var b=this.chart,c;a=a||b.options&&b.options.navigator.baseSeries||0;this.series&&(this.removeBaseSeriesEvents(),t(this.series,function(a){a.destroy()}));c=this.baseSeries=[];t(b.series||[],function(b,d){(b.options.showInNavigator||(d===a||b.options.id===a)&&!1!==b.options.showInNavigator)&&c.push(b)});this.xAxis&&!this.xAxis.fake&&this.addBaseSeries()},addBaseSeries:function(){var a=this,b=a.chart,c=a.series=[],d=a.baseSeries,e,f,g=a.navigatorOptions.series,h,
m={enableMouseTracking:!1,index:null,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0};d?t(d,function(d,k){m.name="Navigator "+(k+1);e=d.options||{};h=e.navigatorOptions||{};f=A(e,m,g,h);k=h.data||g.data;a.hasNavigatorData=a.hasNavigatorData||!!k;f.data=k||e.data&&e.data.slice(0);d.navigatorSeries=b.initSeries(f);c.push(d.navigatorSeries)}):(f=A(g,m),f.data=g.data,a.hasNavigatorData=!!f.data,c.push(b.initSeries(f)));this.addBaseSeriesEvents()},
addBaseSeriesEvents:function(){var a=this,b=a.baseSeries||[];b[0]&&b[0].xAxis&&B(b[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);!1!==this.navigatorOptions.adaptToUpdatedData&&t(b,function(b){b.xAxis&&B(b,"updatedData",this.updatedDataHandler);B(b,"remove",function(){this.navigatorSeries&&(m(a.series,this.navigatorSeries),this.navigatorSeries.remove(!1),delete this.navigatorSeries)})},this)},modifyNavigatorAxisExtremes:function(){var a=this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||
b.dataMin===a.min&&b.dataMax===a.max||(a.min=b.dataMin,a.max=b.dataMax))},modifyBaseAxisExtremes:function(){var a=this.chart.navigator,b=this.getExtremes(),c=b.dataMin,d=b.dataMax,b=b.max-b.min,e=a.stickToMin,f=a.stickToMax,g,h,m=a.series&&a.series[0],n=!!this.setExtremes;this.eventArgs&&"rangeSelectorButton"===this.eventArgs.trigger||(e&&(h=c,g=h+b),f&&(g=d,e||(h=Math.max(g-b,m&&m.xData?m.xData[0]:-Number.MAX_VALUE))),n&&(e||f)&&p(h)&&(this.min=this.userMin=h,this.max=this.userMax=g));a.stickToMin=
a.stickToMax=null},updatedDataHandler:function(){var a=this.chart.navigator,b=this.navigatorSeries;a.stickToMin=p(this.xAxis.min)&&this.xAxis.min<=this.xData[0];a.stickToMax=Math.round(a.zoomedMax)>=Math.round(a.size);b&&!a.hasNavigatorData&&(b.options.pointStart=this.xData[0],b.setData(this.options.data,!1,null,!1))},addChartEvents:function(){B(this.chart,"redraw",function(){var a=this.navigator,b=a&&(a.baseSeries&&a.baseSeries[0]&&a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,
b.max)})},destroy:function(){this.removeEvents();this.xAxis&&(m(this.chart.xAxis,this.xAxis),m(this.chart.axes,this.xAxis));this.yAxis&&(m(this.chart.yAxis,this.yAxis),m(this.chart.axes,this.yAxis));t(this.series||[],function(a){a.destroy&&a.destroy()});t("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "),function(a){this[a]&&this[a].destroy&&this[a].destroy();this[a]=null},this);t([this.handles],function(a){r(a)},this)}};
a.Navigator=E;w(F.prototype,"zoom",function(a,b,c){var d=this.chart,e=d.options,f=e.chart.zoomType,g=e.navigator,e=e.rangeSelector,k;this.isXAxis&&(g&&g.enabled||e&&e.enabled)&&("x"===f?d.resetZoomButton="blocked":"y"===f?k=!1:"xy"===f&&(d=this.previousZoom,u(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom)));return void 0!==k?k:a.call(this,b,c)});w(D.prototype,"init",function(a,b,c){B(this,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=
this.navigator=new E(this)});a.call(this,b,c)});w(D.prototype,"setChartSize",function(a){var b=this.legend,c=this.navigator,d,e,f,g;a.apply(this,[].slice.call(arguments,1));c&&(e=b.options,f=c.xAxis,g=c.yAxis,d=c.scrollbarHeight,this.inverted?(c.left=c.opposite?this.chartWidth-d-c.height:this.spacing[3]+d,c.top=this.plotTop+d):(c.left=this.plotLeft+d,c.top=c.navigatorOptions.top||this.chartHeight-c.height-d-this.spacing[2]-("bottom"===e.verticalAlign&&e.enabled&&!e.floating?b.legendHeight+v(e.margin,
10):0)),f&&g&&(this.inverted?f.options.left=g.options.left=c.left:f.options.top=g.options.top=c.top,f.setAxisSize(),g.setAxisSize()))});w(J.prototype,"addPoint",function(a,c,d,e,g){var k=this.options.turboThreshold;k&&this.xData.length>k&&b(c,!0)&&this.chart.navigator&&f(20,!0);a.call(this,c,d,e,g)});w(D.prototype,"addSeries",function(a,b,c,d){a=a.call(this,b,!1,d);this.navigator&&this.navigator.setBaseSeries();v(c,!0)&&this.redraw();return a});w(J.prototype,"update",function(a,b,c){a.call(this,b,
!1);this.chart.navigator&&this.chart.navigator.setBaseSeries();v(c,!0)&&this.chart.redraw()});D.prototype.callbacks.push(function(a){var b=a.navigator;b&&(a=a.xAxis[0].getExtremes(),b.render(a.min,a.max))})})(L);(function(a){function E(a){this.init(a)}var B=a.addEvent,F=a.Axis,D=a.Chart,n=a.css,h=a.createElement,u=a.dateFormat,r=a.defaultOptions,x=r.global.useUTC,t=a.defined,m=a.destroyObjectProperties,f=a.discardElement,g=a.each,e=a.extend,d=a.fireEvent,p=a.Date,b=a.isNumber,A=a.merge,v=a.pick,H=
a.pInt,q=a.splat,J=a.wrap;e(r,{rangeSelector:{buttonTheme:{"stroke-width":0,width:28,height:18,padding:2,zIndex:7},height:35,inputPosition:{align:"right"},labelStyle:{color:"#666666"}}});r.lang=A(r.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});E.prototype={clickButton:function(a,d){var c=this,e=c.chart,f=c.buttonOptions[a],h=e.xAxis[0],m=e.scroller&&e.scroller.getUnionExtremes()||h||{},k=m.dataMin,n=m.dataMax,p,r=h&&Math.round(Math.min(h.max,v(n,h.max))),t=f.type,
u,m=f._range,w,C,A,D=f.dataGrouping;if(null!==k&&null!==n){e.fixedRange=m;D&&(this.forcedDataGrouping=!0,F.prototype.setDataGrouping.call(h||{chart:this.chart},D,!1));if("month"===t||"year"===t)h?(t={range:f,max:r,dataMin:k,dataMax:n},p=h.minFromRange.call(t),b(t.newMax)&&(r=t.newMax)):m=f;else if(m)p=Math.max(r-m,k),r=Math.min(p+m,n);else if("ytd"===t)if(h)void 0===n&&(k=Number.MAX_VALUE,n=Number.MIN_VALUE,g(e.series,function(a){a=a.xData;k=Math.min(a[0],k);n=Math.max(a[a.length-1],n)}),d=!1),r=
c.getYTDExtremes(n,k,x),p=w=r.min,r=r.max;else{B(e,"beforeRender",function(){c.clickButton(a)});return}else"all"===t&&h&&(p=k,r=n);c.setSelected(a);h?h.setExtremes(p,r,v(d,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:f}):(u=q(e.options.xAxis)[0],A=u.range,u.range=m,C=u.min,u.min=w,B(e,"load",function(){u.range=A;u.min=C}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,
text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],init:function(a){var b=this,c=a.options.rangeSelector,e=c.buttons||[].concat(b.defaultButtons),f=c.selected,h=function(){var a=b.minInput,c=b.maxInput;a&&a.blur&&d(a,"blur");c&&c.blur&&d(c,"blur")};b.chart=a;b.options=c;b.buttons=[];a.extraTopMargin=c.height;b.buttonOptions=e;this.unMouseDown=B(a.container,"mousedown",h);this.unResize=B(a,"resize",h);g(e,b.computeButtonRange);void 0!==f&&e[f]&&this.clickButton(f,
!1);B(a,"load",function(){B(a.xAxis[0],"setExtremes",function(c){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==c.trigger&&"updatedData"!==c.trigger&&b.forcedDataGrouping&&this.setDataGrouping(!1,!1)})})},updateButtonStates:function(){var a=this.chart,d=a.xAxis[0],e=Math.round(d.max-d.min),f=!d.hasVisibleSeries,a=a.scroller&&a.scroller.getUnionExtremes()||d,h=a.dataMin,l=a.dataMax,a=this.getYTDExtremes(l,h,x),m=a.min,k=a.max,n=this.selected,p=b(n),q=this.options.allButtonsEnabled,r=this.buttons;
g(this.buttonOptions,function(a,b){var c=a._range,g=a.type,t=a.count||1;a=r[b];var u=0;b=b===n;var w=c>l-h,v=c<d.minRange,x=!1,y=!1,c=c===e;("month"===g||"year"===g)&&e>=864E5*{month:28,year:365}[g]*t&&e<=864E5*{month:31,year:366}[g]*t?c=!0:"ytd"===g?(c=k-m===e,x=!b):"all"===g&&(c=d.max-d.min>=l-h,y=!b&&p&&c);g=!q&&(w||v||y||f);c=b&&c||c&&!p&&!x;g?u=3:c&&(p=!0,u=2);a.state!==u&&a.setState(u)})},computeButtonRange:function(a){var b=a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if("month"===b||"year"===b)a._range=864E5*{month:30,year:365}[b]*c},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,d=this[a+"Input"];t(b)&&(d.previousValue=d.HCTime,d.HCTime=b);d.value=u(c.inputEditDateFormat||"%Y-%m-%d",d.HCTime);this[a+"DateBox"].attr({text:u(c.inputDateFormat||"%b %e, %Y",d.HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];n(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+
"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},hideInput:function(a){n(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function c(){var a=q.value,c=(m.inputDateParser||Date.parse)(a),e=f.xAxis[0],g=f.scroller&&f.scroller.xAxis?f.scroller.xAxis:e,k=g.dataMin,g=g.dataMax;c!==q.previousValue&&(q.previousValue=c,b(c)||(c=a.split("-"),c=Date.UTC(H(c[0]),H(c[1])-1,H(c[2]))),b(c)&&(x||(c+=6E4*(new Date).getTimezoneOffset()),
p?c>d.maxInput.HCTime?c=void 0:c<k&&(c=k):c<d.minInput.HCTime?c=void 0:c>g&&(c=g),void 0!==c&&e.setExtremes(p?c:e.min,p?e.max:c,void 0,void 0,{trigger:"rangeSelectorInput"})))}var d=this,f=d.chart,g=f.renderer.style||{},l=f.renderer,m=f.options.rangeSelector,k=d.div,p="min"===a,q,t,u=this.inputGroup;this[a+"Label"]=t=l.label(r.lang[p?"rangeSelectorFrom":"rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(u);u.offset+=t.width+5;this[a+"DateBox"]=l=l.label("",
u.offset).addClass("highcharts-range-input").attr({padding:2,width:m.inputBoxWidth||90,height:m.inputBoxHeight||17,stroke:m.inputBoxBorderColor||"#cccccc","stroke-width":1,"text-align":"center"}).on("click",function(){d.showInput(a);d[a+"Input"].focus()}).add(u);u.offset+=l.width+(p?10:0);this[a+"Input"]=q=h("input",{name:a,className:"highcharts-range-selector",type:"text"},{top:f.plotTop+"px"},k);t.css(A(g,m.labelStyle));l.css(A({color:"#333333"},g,m.inputStyle));n(q,e({position:"absolute",border:0,
width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:g.fontSize,fontFamily:g.fontFamily,left:"-9em"},m.inputStyle));q.onfocus=function(){d.showInput(a)};q.onblur=function(){d.hideInput(a)};q.onchange=c;q.onkeypress=function(a){13===a.keyCode&&c()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a=v((b.buttonPosition||{}).y,a.plotTop-a.axisOffset[0]-b.height);return{buttonTop:a,inputTop:a-10}},getYTDExtremes:function(a,b,d){var c=new p(a),e=c[p.hcGetFullYear]();d=d?p.UTC(e,
0,1):+new p(e,0,1);b=Math.max(b||0,d);c=c.getTime();return{max:Math.min(a||c,c),min:b}},render:function(a,b){var c=this,d=c.chart,f=d.renderer,l=d.container,m=d.options,k=m.exporting&&!1!==m.exporting.enabled&&m.navigation&&m.navigation.buttonOptions,n=m.rangeSelector,p=c.buttons,m=r.lang,q=c.div,q=c.inputGroup,u=n.buttonTheme,w=n.buttonPosition||{},x=n.inputEnabled,C=u&&u.states,A=d.plotLeft,B,D=this.getPosition(),E=c.group,F=c.rendered;!1!==n.enabled&&(F||(c.group=E=f.g("range-selector-buttons").add(),
c.zoomText=f.text(m.rangeSelectorZoom,v(w.x,A),15).css(n.labelStyle).add(E),B=v(w.x,A)+c.zoomText.getBBox().width+5,g(c.buttonOptions,function(a,b){p[b]=f.button(a.text,B,0,function(){c.clickButton(b);c.isActive=!0},u,C&&C.hover,C&&C.select,C&&C.disabled).attr({"text-align":"center"}).add(E);B+=p[b].width+v(n.buttonSpacing,5)}),!1!==x&&(c.div=q=h("div",null,{position:"relative",height:0,zIndex:1}),l.parentNode.insertBefore(q,l),c.inputGroup=q=f.g("input-group").add(),q.offset=0,c.drawInput("min"),
c.drawInput("max"))),c.updateButtonStates(),E[F?"animate":"attr"]({translateY:D.buttonTop}),!1!==x&&(q.align(e({y:D.inputTop,width:q.offset,x:k&&D.inputTop<(k.y||0)+k.height-d.spacing[0]?-40:0},n.inputPosition),!0,d.spacingBox),t(x)||(d=E.getBBox(),q[q.alignAttr.translateX<d.x+d.width+10?"hide":"show"]()),c.setInputValue("min",a),c.setInputValue("max",b)),c.rendered=!0)},update:function(a){var b=this.chart;A(!0,b.options.rangeSelector,a);this.destroy();this.init(b)},destroy:function(){var b=this,
d=b.minInput,e=b.maxInput;b.unMouseDown();b.unResize();m(b.buttons);d&&(d.onfocus=d.onblur=d.onchange=null);e&&(e.onfocus=e.onblur=e.onchange=null);a.objectEach(b,function(a,c){a&&"chart"!==c&&(a.destroy?a.destroy():a.nodeType&&f(this[c]));a!==E.prototype[c]&&(b[c]=null)},this)}};F.prototype.toFixedRange=function(a,d,e,f){var c=this.chart&&this.chart.fixedRange;a=v(e,this.translate(a,!0,!this.horiz));d=v(f,this.translate(d,!0,!this.horiz));e=c&&(d-a)/c;.7<e&&1.3>e&&(f?a=d-c:d=a+c);b(a)||(a=d=void 0);
return{min:a,max:d}};F.prototype.minFromRange=function(){var a=this.range,d={month:"Month",year:"FullYear"}[a.type],e,f=this.max,g,h,m=function(a,b){var c=new Date(a),e=c["get"+d]();c["set"+d](e+b);e===c["get"+d]()&&c.setDate(0);return c.getTime()-a};b(a)?(e=f-a,h=a):(e=f+m(f,-a.count),this.chart&&(this.chart.fixedRange=f-e));g=v(this.dataMin,Number.MIN_VALUE);b(e)||(e=g);e<=g&&(e=g,void 0===h&&(h=m(e,a.count)),this.newMax=Math.min(e+h,this.dataMax));b(f)||(e=void 0);return e};J(D.prototype,"init",
function(a,b,d){B(this,"init",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new E(this))});a.call(this,b,d)});D.prototype.callbacks.push(function(a){function c(){d=a.xAxis[0].getExtremes();b(d.min)&&e.render(d.min,d.max)}var d,e=a.rangeSelector,f,g;e&&(g=B(a.xAxis[0],"afterSetExtremes",function(a){e.render(a.min,a.max)}),f=B(a,"redraw",c),c());B(a,"destroy",function(){e&&(f(),g())})});a.RangeSelector=E})(L);(function(a){var E=a.arrayMax,B=a.arrayMin,F=a.Axis,D=a.Chart,n=a.defined,
h=a.each,u=a.extend,r=a.format,x=a.grep,t=a.inArray,m=a.isNumber,f=a.isString,g=a.map,e=a.merge,d=a.pick,p=a.Point,b=a.Renderer,A=a.Series,v=a.splat,H=a.SVGRenderer,q=a.VMLRenderer,J=a.wrap,c=A.prototype,w=c.init,K=c.processData,y=p.prototype.tooltipFormatter;a.StockChart=a.stockChart=function(b,c,h){var k=f(b)||b.nodeName,l=arguments[k?1:0],m=l.series,n=a.getOptions(),p,q=d(l.navigator&&l.navigator.enabled,n.navigator.enabled,!0),r=q?{startOnTick:!1,endOnTick:!1}:null,t={marker:{enabled:!1,radius:2}},
u={shadow:!1,borderWidth:0};l.xAxis=g(v(l.xAxis||{}),function(a){return e({minPadding:0,maxPadding:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},n.xAxis,a,{type:"datetime",categories:null},r)});l.yAxis=g(v(l.yAxis||{}),function(a){p=d(a.opposite,!0);return e({labels:{y:-2},opposite:p,showLastLabel:!1,title:{text:null}},n.yAxis,a)});l.series=null;l=e({chart:{panning:!0,pinchType:"x"},navigator:{enabled:q},scrollbar:{enabled:d(n.scrollbar.enabled,!0)},rangeSelector:{enabled:d(n.rangeSelector.enabled,
!0)},title:{text:null},tooltip:{shared:!0,crosshairs:!0},legend:{enabled:!1},plotOptions:{line:t,spline:t,area:t,areaspline:t,arearange:t,areasplinerange:t,column:u,columnrange:u,candlestick:u,ohlc:u}},l,{isStock:!0});l.series=m;return k?new D(b,l,h):new D(l,c)};J(F.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;return this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled)?(15===d.x&&
(d.x=0),void 0===d.align&&(d.align="right"),b[c]=this,"right"):a.call(this,[].slice.call(arguments,1))});J(F.prototype,"destroy",function(a){var b=this.chart,c=this.options&&this.options.top+","+this.options.height;c&&b._labelPanes&&b._labelPanes[c]===this&&delete b._labelPanes[c];return a.call(this,Array.prototype.slice.call(arguments,1))});J(F.prototype,"getPlotLinePath",function(b,c,e,k,p,q){var l=this,r=this.isLinked&&!this.series?this.linkedParent.series:this.series,u=l.chart,v=u.renderer,w=
l.left,x=l.top,z,y,A,B,G=[],D=[],E,I;if("xAxis"!==l.coll&&"yAxis"!==l.coll)return b.apply(this,[].slice.call(arguments,1));D=function(a){var b="xAxis"===a?"yAxis":"xAxis";a=l.options[b];return m(a)?[u[b][a]]:f(a)?[u.get(a)]:g(r,function(a){return a[b]})}(l.coll);h(l.isXAxis?u.yAxis:u.xAxis,function(a){if(n(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis",b=n(a.options[b])?u[b][a.options[b]]:u[b][0];l===b&&D.push(a)}});E=D.length?[]:[l.isXAxis?u.yAxis[0]:u.xAxis[0]];
h(D,function(b){-1!==t(b,E)||a.find(E,function(a){return a.pos===b.pos&&a.len&&b.len})||E.push(b)});I=d(q,l.translate(c,null,null,k));m(I)&&(l.horiz?h(E,function(a){var b;y=a.pos;B=y+a.len;z=A=Math.round(I+l.transB);if(z<w||z>w+l.width)p?z=A=Math.min(Math.max(w,z),w+l.width):b=!0;b||G.push("M",z,y,"L",A,B)}):h(E,function(a){var b;z=a.pos;A=z+a.len;y=B=Math.round(x+l.height-I);if(y<x||y>x+l.height)p?y=B=Math.min(Math.max(x,y),l.top+l.height):b=!0;b||G.push("M",z,y,"L",A,B)}));return 0<G.length?v.crispPolyLine(G,
e||1):null});F.prototype.getPlotBandPath=function(a,b){b=this.getPlotLinePath(b,null,null,!0);a=this.getPlotLinePath(a,null,null,!0);var c=[],d;if(a&&b)if(a.toString()===b.toString())c=a,c.flat=!0;else for(d=0;d<a.length;d+=6)c.push("M",a[d+1],a[d+2],"L",a[d+4],a[d+5],b[d+4],b[d+5],b[d+1],b[d+2],"z");else c=null;return c};H.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=Math.round(a[c+2])+
b%2/2);return a};b===q&&(q.prototype.crispPolyLine=H.prototype.crispPolyLine);J(F.prototype,"hideCrosshair",function(a,b){a.call(this,b);this.crossLabel&&(this.crossLabel=this.crossLabel.hide())});J(F.prototype,"drawCrosshair",function(a,b,c){var e,f;a.call(this,b,c);if(n(this.crosshair.label)&&this.crosshair.label.enabled&&this.cross){a=this.chart;var g=this.options.crosshair.label,h=this.horiz;e=this.opposite;f=this.left;var l=this.top,m=this.crossLabel,p,q=g.format,t="",v="inside"===this.options.tickPosition,
w=!1!==this.crosshair.snap,x=0;b||(b=this.cross&&this.cross.e);p=h?"center":e?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";m||(m=this.crossLabel=a.renderer.label(null,null,null,g.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:g.align||p,padding:d(g.padding,8),r:d(g.borderRadius,3),zIndex:2}).add(this.labelGroup),m.attr({fill:g.backgroundColor||this.series[0]&&this.series[0].color||
"#666666",stroke:g.borderColor||"","stroke-width":g.borderWidth||0}).css(u({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},g.style)));h?(p=w?c.plotX+f:b.chartX,l+=e?0:this.height):(p=e?this.width+f:0,l=w?c.plotY+l:b.chartY);q||g.formatter||(this.isDatetimeAxis&&(t="%b %d, %Y"),q="{value"+(t?":"+t:"")+"}");b=w?c[this.isXAxis?"x":"y"]:this.toValue(h?b.chartX:b.chartY);m.attr({text:q?r(q,{value:b}):g.formatter.call(this,b),x:p,y:l,visibility:"visible"});b=m.getBBox();if(h){if(v&&
!e||!v&&e)l=m.y-b.height}else l=m.y-b.height/2;h?(e=f-b.x,f=f+this.width-b.x):(e="left"===this.labelAlign?f:0,f="right"===this.labelAlign?f+this.width:a.chartWidth);m.translateX<e&&(x=e-m.translateX);m.translateX+b.width>=f&&(x=-(m.translateX+b.width-f));m.attr({x:p+x,y:l,anchorX:h?p:this.opposite?0:a.chartWidth,anchorY:h?this.opposite?a.chartHeight:0:l+b.height/2})}});c.init=function(){w.apply(this,arguments);this.setCompare(this.options.compare)};c.setCompare=function(a){this.modifyValue="value"===
a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=a;this.chart.hasRendered&&(this.isDirty=!0)};c.processData=function(){var a,b=-1,c,d,e,f;K.apply(this,arguments);if(this.xAxis&&this.processedYData)for(c=this.processedXData,d=this.processedYData,e=d.length,this.pointArrayMap&&(b=t("close",this.pointArrayMap),-1===b&&(b=t(this.pointValKey||"y",this.pointArrayMap))),
a=0;a<e-1;a++)if(f=d[a]&&-1<b?d[a][b]:d[a],m(f)&&c[a+1]>=this.xAxis.min&&0!==f){this.compareValue=f;break}};J(c,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,1));this.modifyValue&&(b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=B(b),this.dataMax=E(b))});F.prototype.setCompare=function(a,b){this.isXAxis||(h(this.series,function(b){b.setCompare(a)}),d(b,!0)&&this.chart.redraw())};p.prototype.tooltipFormatter=function(b){b=b.replace("{point.change}",
(0<this.change?"+":"")+a.numberFormat(this.change,d(this.series.tooltipOptions.changeDecimals,2)));return y.apply(this,[b])};J(A.prototype,"render",function(a){this.chart.is3d&&this.chart.is3d()||this.chart.polar||!this.xAxis||this.xAxis.isRadial||(!this.clipBox&&this.animate?(this.clipBox=e(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]?this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}):this.clipBox&&
(this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len));a.call(this)});J(D.prototype,"getSelectedPoints",function(a){var b=a.call(this);h(this.series,function(a){a.hasGroupedData&&(b=b.concat(x(a.points||[],function(a){return a.selected})))});return b});J(D.prototype,"update",function(a,b){"scrollbar"in b&&this.navigator&&(e(!0,this.options.scrollbar,b.scrollbar),this.navigator.update({},!1),delete b.scrollbar);return a.apply(this,Array.prototype.slice.call(arguments,1))})})(L);return L});

;/*
 Highcharts JS v5.0.12 (2017-05-24)
 Exporting module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(f){var k=f.defaultOptions,p=f.doc,A=f.Chart,w=f.addEvent,I=f.removeEvent,E=f.fireEvent,t=f.createElement,B=f.discardElement,v=f.css,n=f.merge,C=f.pick,h=f.each,F=f.objectEach,u=f.extend,J=f.isTouchDevice,D=f.win,G=D.navigator.userAgent,K=f.Renderer.prototype.symbols;/Edge\/|Trident\/|MSIE /.test(G);/firefox/i.test(G);u(k.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",
downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});k.navigation={buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}};n(!0,k.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",background:"none",color:"#333333",fontSize:J?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",
color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",stroke:"none",padding:5}}});k.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},
{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}};f.post=function(a,b,e){var c=t("form",n({method:"post",action:a,enctype:"multipart/form-data"},e),{display:"none"},p.body);F(b,function(a,b){t("input",{type:"hidden",name:b,value:a},null,c)});c.submit();B(c)};u(A.prototype,{sanitizeSVG:function(a,
b){if(b&&b.exporting&&b.exporting.allowHTML){var e=a.match(/<\/svg>(.*?$)/);e&&e[1]&&(e='\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"'+b.chart.width+'" height\x3d"'+b.chart.height+'"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e'+e[1]+"\x3c/body\x3e\x3c/foreignObject\x3e",a=a.replace("\x3c/svg\x3e",e+"\x3c/svg\x3e"))}a=a.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,
"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href\x3d").replace(/\n/," ").replace(/<\/svg>.*?$/,"\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad");return a=a.replace(/<IMG /g,"\x3cimage ").replace(/<(\/?)TITLE>/g,"\x3c$1title\x3e").replace(/height=([^" ]+)/g,
'height\x3d"$1"').replace(/width=([^" ]+)/g,'width\x3d"$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href\x3d"$1"/\x3e').replace(/ id=([^" >]+)/g,' id\x3d"$1"').replace(/class=([^" >]+)/g,'class\x3d"$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},getChartHTML:function(){return this.container.innerHTML},getSVG:function(a){var b,e,c,r,m,g=n(this.options,a);p.createElementNS||(p.createElementNS=function(a,b){return p.createElement(b)});
e=t("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},p.body);c=this.renderTo.style.width;m=this.renderTo.style.height;c=g.exporting.sourceWidth||g.chart.width||/px$/.test(c)&&parseInt(c,10)||600;m=g.exporting.sourceHeight||g.chart.height||/px$/.test(m)&&parseInt(m,10)||400;u(g.chart,{animation:!1,renderTo:e,forExport:!0,renderer:"SVGRenderer",width:c,height:m});g.exporting.enabled=!1;delete g.data;g.series=[];h(this.series,function(a){r=n(a.userOptions,
{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});r.isInternal||g.series.push(r)});h(this.axes,function(a){a.userOptions.internalKey||(a.userOptions.internalKey=f.uniqueKey())});b=new f.Chart(g,this.callback);a&&h(["xAxis","yAxis","series"],function(c){var d={};a[c]&&(d[c]=a[c],b.update(d))});h(this.axes,function(a){var c=f.find(b.axes,function(b){return b.options.internalKey===a.userOptions.internalKey}),d=a.getExtremes(),e=d.userMin,d=d.userMax;!c||void 0===e&&void 0===d||
c.setExtremes(e,d,!0,!1)});c=b.getChartHTML();c=this.sanitizeSVG(c,g);g=null;b.destroy();B(e);return c},getSVGForExport:function(a,b){var e=this.options.exporting;return this.getSVG(n({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=n(this.options.exporting,a);f.post(a.url,{filename:a.filename||"chart",type:a.type,width:a.width||0,scale:a.scale,
svg:b},a.formAttributes)},print:function(){var a=this,b=a.container,e=[],c=b.parentNode,f=p.body,m=f.childNodes,g=a.options.exporting.printMaxWidth,d,H;if(!a.isPrinting){a.isPrinting=!0;a.pointer.reset(null,0);E(a,"beforePrint");if(H=g&&a.chartWidth>g)d=[a.options.chart.width,void 0,!1],a.setSize(g,void 0,!1);h(m,function(a,b){1===a.nodeType&&(e[b]=a.style.display,a.style.display="none")});f.appendChild(b);D.focus();D.print();setTimeout(function(){c.appendChild(b);h(m,function(a,b){1===a.nodeType&&
(a.style.display=e[b])});a.isPrinting=!1;H&&a.setSize.apply(a,d);E(a,"afterPrint")},1E3)}},contextMenu:function(a,b,e,c,f,m,g){var d=this,r=d.options.navigation,k=d.chartWidth,q=d.chartHeight,n="cache-"+a,l=d[n],x=Math.max(f,m),y,z;l||(d[n]=l=t("div",{className:a},{position:"absolute",zIndex:1E3,padding:x+"px"},d.container),y=t("div",{className:"highcharts-menu"},null,l),v(y,u({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},r.menuStyle)),z=function(){v(l,
{display:"none"});g&&g.setState(0);d.openMenu=!1},d.exportEvents.push(w(l,"mouseleave",function(){l.hideTimer=setTimeout(z,500)}),w(l,"mouseenter",function(){clearTimeout(l.hideTimer)}),w(p,"mouseup",function(b){d.pointer.inClass(b.target,a)||z()})),h(b,function(a){if(a){var b;a.separator?b=t("hr",null,null,y):(b=t("div",{className:"highcharts-menu-item",onclick:function(b){b&&b.stopPropagation();z();a.onclick&&a.onclick.apply(d,arguments)},innerHTML:a.text||d.options.lang[a.textKey]},null,y),b.onmouseover=
function(){v(this,r.menuItemHoverStyle)},b.onmouseout=function(){v(this,r.menuItemStyle)},v(b,u({cursor:"pointer"},r.menuItemStyle)));d.exportDivElements.push(b)}}),d.exportDivElements.push(y,l),d.exportMenuWidth=l.offsetWidth,d.exportMenuHeight=l.offsetHeight);b={display:"block"};e+d.exportMenuWidth>k?b.right=k-e-f-x+"px":b.left=e-x+"px";c+m+d.exportMenuHeight>q&&"top"!==g.alignOptions.verticalAlign?b.bottom=q-c-x+"px":b.top=c+m-x+"px";v(l,b);d.openMenu=!0},addButton:function(a){var b=this,e=b.renderer,
c=n(b.options.navigation.buttonOptions,a),f=c.onclick,m=c.menuItems,g,d,k=c.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);if(!1!==c.enabled){var h=c.theme,q=h.states,p=q&&q.hover,q=q&&q.select,l;delete h.states;f?l=function(a){a.stopPropagation();f.call(b,a)}:m&&(l=function(){b.contextMenu(d.menuClassName,m,d.translateX,d.translateY,d.width,d.height,d);d.setState(2)});c.text&&c.symbol?h.paddingLeft=C(h.paddingLeft,25):c.text||u(h,{width:c.width,
height:c.height,padding:0});d=e.button(c.text,0,0,l,h,p,q).addClass(a.className).attr({"stroke-linecap":"round",title:b.options.lang[c._titleKey],zIndex:3});d.menuClassName=a.menuClassName||"highcharts-menu-"+b.btnCount++;c.symbol&&(g=e.symbol(c.symbol,c.symbolX-k/2,c.symbolY-k/2,k,k).addClass("highcharts-button-symbol").attr({zIndex:1}).add(d),g.attr({stroke:c.symbolStroke,fill:c.symbolFill,"stroke-width":c.symbolStrokeWidth||1}));d.add().align(u(c,{width:d.width,x:C(c.x,b.buttonOffset)}),!0,"spacingBox");
b.buttonOffset+=(d.width+c.buttonSpacing)*("right"===c.align?-1:1);b.exportSVGElements.push(d,g)}},destroyExport:function(a){var b=a?a.target:this;a=b.exportSVGElements;var e=b.exportDivElements,c=b.exportEvents,f;a&&(h(a,function(a,c){a&&(a.onclick=a.ontouchstart=null,f="cache-"+a.menuClassName,b[f]&&delete b[f],b.exportSVGElements[c]=a.destroy())}),a.length=0);e&&(h(e,function(a,c){clearTimeout(a.hideTimer);I(a,"mouseleave");b.exportDivElements[c]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=
null;B(a)}),e.length=0);c&&(h(c,function(a){a()}),c.length=0)}});K.menu=function(a,b,e,c){return["M",a,b+2.5,"L",a+e,b+2.5,"M",a,b+c/2+.5,"L",a+e,b+c/2+.5,"M",a,b+c-1.5,"L",a+e,b+c-1.5]};A.prototype.renderExporting=function(){var a=this,b=a.options.exporting,e=b.buttons,c=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();c&&!1!==b.enabled&&(a.exportEvents=[],F(e,function(b){a.addButton(b)}),a.isDirtyExporting=!1);w(a,"destroy",a.destroyExport)};A.prototype.callbacks.push(function(a){a.renderExporting();
w(a,"redraw",a.renderExporting);h(["exporting","navigation"],function(b){a[b]={update:function(e,c){a.isDirtyExporting=!0;n(!0,a.options[b],e);C(c,!0)&&a.redraw()}}})})})(k)});

;/**
 * To use sails.io.js in an AMD environment (e.g. with require.js),
 * replace this file with the sails.io.js file from the root of:
 * https://github.com/balderdashy/sails.io.js
 * and download a standalone copy of socket.io-client from:
 * https://github.com/socketio/socket.io-client
 * then follow the instructions at:
 * https://github.com/balderdashy/sails.io.js#requirejsamd-usage
 */

// socket.io-client version 1.4.4
// https://github.com/socketio/socket.io-client

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.io=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){b.exports=a("./lib/")},{"./lib/":2}],2:[function(a,b,c){b.exports=a("./socket"),b.exports.parser=a("engine.io-parser")},{"./socket":3,"engine.io-parser":19}],3:[function(a,b,c){(function(c){function d(a,b){if(!(this instanceof d))return new d(a,b);b=b||{},a&&"object"==typeof a&&(b=a,a=null),a?(a=k(a),b.hostname=a.host,b.secure="https"==a.protocol||"wss"==a.protocol,b.port=a.port,a.query&&(b.query=a.query)):b.host&&(b.hostname=k(b.host).host),this.secure=null!=b.secure?b.secure:c.location&&"https:"==location.protocol,b.hostname&&!b.port&&(b.port=this.secure?"443":"80"),this.agent=b.agent||!1,this.hostname=b.hostname||(c.location?location.hostname:"localhost"),this.port=b.port||(c.location&&location.port?location.port:this.secure?443:80),this.query=b.query||{},"string"==typeof this.query&&(this.query=m.decode(this.query)),this.upgrade=!1!==b.upgrade,this.path=(b.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!b.forceJSONP,this.jsonp=!1!==b.jsonp,this.forceBase64=!!b.forceBase64,this.enablesXDR=!!b.enablesXDR,this.timestampParam=b.timestampParam||"t",this.timestampRequests=b.timestampRequests,this.transports=b.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.policyPort=b.policyPort||843,this.rememberUpgrade=b.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=b.onlyBinaryUpgrades,this.perMessageDeflate=!1!==b.perMessageDeflate?b.perMessageDeflate||{}:!1,!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=b.pfx||null,this.key=b.key||null,this.passphrase=b.passphrase||null,this.cert=b.cert||null,this.ca=b.ca||null,this.ciphers=b.ciphers||null,this.rejectUnauthorized=void 0===b.rejectUnauthorized?null:b.rejectUnauthorized;var e="object"==typeof c&&c;e.global===e&&b.extraHeaders&&Object.keys(b.extraHeaders).length>0&&(this.extraHeaders=b.extraHeaders),this.open()}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var f=a("./transports"),g=a("component-emitter"),h=a("debug")("engine.io-client:socket"),i=a("indexof"),j=a("engine.io-parser"),k=a("parseuri"),l=a("parsejson"),m=a("parseqs");b.exports=d,d.priorWebsocketSuccess=!1,g(d.prototype),d.protocol=j.protocol,d.Socket=d,d.Transport=a("./transport"),d.transports=a("./transports"),d.parser=a("engine.io-parser"),d.prototype.createTransport=function(a){h('creating transport "%s"',a);var b=e(this.query);b.EIO=j.protocol,b.transport=a,this.id&&(b.sid=this.id);var c=new f[a]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:b,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return c},d.prototype.open=function(){var a;if(this.rememberUpgrade&&d.priorWebsocketSuccess&&-1!=this.transports.indexOf("websocket"))a="websocket";else{if(0===this.transports.length){var b=this;return void setTimeout(function(){b.emit("error","No transports available")},0)}a=this.transports[0]}this.readyState="opening";try{a=this.createTransport(a)}catch(c){return this.transports.shift(),void this.open()}a.open(),this.setTransport(a)},d.prototype.setTransport=function(a){h("setting transport %s",a.name);var b=this;this.transport&&(h("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=a,a.on("drain",function(){b.onDrain()}).on("packet",function(a){b.onPacket(a)}).on("error",function(a){b.onError(a)}).on("close",function(){b.onClose("transport close")})},d.prototype.probe=function(a){function b(){if(m.onlyBinaryUpgrades){var b=!this.supportsBinary&&m.transport.supportsBinary;l=l||b}l||(h('probe transport "%s" opened',a),k.send([{type:"ping",data:"probe"}]),k.once("packet",function(b){if(!l)if("pong"==b.type&&"probe"==b.data){if(h('probe transport "%s" pong',a),m.upgrading=!0,m.emit("upgrading",k),!k)return;d.priorWebsocketSuccess="websocket"==k.name,h('pausing current transport "%s"',m.transport.name),m.transport.pause(function(){l||"closed"!=m.readyState&&(h("changing transport and sending upgrade packet"),j(),m.setTransport(k),k.send([{type:"upgrade"}]),m.emit("upgrade",k),k=null,m.upgrading=!1,m.flush())})}else{h('probe transport "%s" failed',a);var c=new Error("probe error");c.transport=k.name,m.emit("upgradeError",c)}}))}function c(){l||(l=!0,j(),k.close(),k=null)}function e(b){var d=new Error("probe error: "+b);d.transport=k.name,c(),h('probe transport "%s" failed because of error: %s',a,b),m.emit("upgradeError",d)}function f(){e("transport closed")}function g(){e("socket closed")}function i(a){k&&a.name!=k.name&&(h('"%s" works - aborting "%s"',a.name,k.name),c())}function j(){k.removeListener("open",b),k.removeListener("error",e),k.removeListener("close",f),m.removeListener("close",g),m.removeListener("upgrading",i)}h('probing transport "%s"',a);var k=this.createTransport(a,{probe:1}),l=!1,m=this;d.priorWebsocketSuccess=!1,k.once("open",b),k.once("error",e),k.once("close",f),this.once("close",g),this.once("upgrading",i),k.open()},d.prototype.onOpen=function(){if(h("socket open"),this.readyState="open",d.priorWebsocketSuccess="websocket"==this.transport.name,this.emit("open"),this.flush(),"open"==this.readyState&&this.upgrade&&this.transport.pause){h("starting upgrade probes");for(var a=0,b=this.upgrades.length;b>a;a++)this.probe(this.upgrades[a])}},d.prototype.onPacket=function(a){if("opening"==this.readyState||"open"==this.readyState)switch(h('socket receive: type "%s", data "%s"',a.type,a.data),this.emit("packet",a),this.emit("heartbeat"),a.type){case"open":this.onHandshake(l(a.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var b=new Error("server error");b.code=a.data,this.onError(b);break;case"message":this.emit("data",a.data),this.emit("message",a.data)}else h('packet received with socket readyState "%s"',this.readyState)},d.prototype.onHandshake=function(a){this.emit("handshake",a),this.id=a.sid,this.transport.query.sid=a.sid,this.upgrades=this.filterUpgrades(a.upgrades),this.pingInterval=a.pingInterval,this.pingTimeout=a.pingTimeout,this.onOpen(),"closed"!=this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},d.prototype.onHeartbeat=function(a){clearTimeout(this.pingTimeoutTimer);var b=this;b.pingTimeoutTimer=setTimeout(function(){"closed"!=b.readyState&&b.onClose("ping timeout")},a||b.pingInterval+b.pingTimeout)},d.prototype.setPing=function(){var a=this;clearTimeout(a.pingIntervalTimer),a.pingIntervalTimer=setTimeout(function(){h("writing ping packet - expecting pong within %sms",a.pingTimeout),a.ping(),a.onHeartbeat(a.pingTimeout)},a.pingInterval)},d.prototype.ping=function(){var a=this;this.sendPacket("ping",function(){a.emit("ping")})},d.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},d.prototype.flush=function(){"closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(h("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},d.prototype.write=d.prototype.send=function(a,b,c){return this.sendPacket("message",a,b,c),this},d.prototype.sendPacket=function(a,b,c,d){if("function"==typeof b&&(d=b,b=void 0),"function"==typeof c&&(d=c,c=null),"closing"!=this.readyState&&"closed"!=this.readyState){c=c||{},c.compress=!1!==c.compress;var e={type:a,data:b,options:c};this.emit("packetCreate",e),this.writeBuffer.push(e),d&&this.once("flush",d),this.flush()}},d.prototype.close=function(){function a(){d.onClose("forced close"),h("socket closing - telling transport to close"),d.transport.close()}function b(){d.removeListener("upgrade",b),d.removeListener("upgradeError",b),a()}function c(){d.once("upgrade",b),d.once("upgradeError",b)}if("opening"==this.readyState||"open"==this.readyState){this.readyState="closing";var d=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?c():a()}):this.upgrading?c():a()}return this},d.prototype.onError=function(a){h("socket error %j",a),d.priorWebsocketSuccess=!1,this.emit("error",a),this.onClose("transport error",a)},d.prototype.onClose=function(a,b){if("opening"==this.readyState||"open"==this.readyState||"closing"==this.readyState){h('socket close with reason: "%s"',a);var c=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",a,b),c.writeBuffer=[],c.prevBufferLen=0}},d.prototype.filterUpgrades=function(a){for(var b=[],c=0,d=a.length;d>c;c++)~i(this.transports,a[c])&&b.push(a[c]);return b}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./transport":4,"./transports":5,"component-emitter":15,debug:17,"engine.io-parser":19,indexof:23,parsejson:26,parseqs:27,parseuri:28}],4:[function(a,b,c){function d(a){this.path=a.path,this.hostname=a.hostname,this.port=a.port,this.secure=a.secure,this.query=a.query,this.timestampParam=a.timestampParam,this.timestampRequests=a.timestampRequests,this.readyState="",this.agent=a.agent||!1,this.socket=a.socket,this.enablesXDR=a.enablesXDR,this.pfx=a.pfx,this.key=a.key,this.passphrase=a.passphrase,this.cert=a.cert,this.ca=a.ca,this.ciphers=a.ciphers,this.rejectUnauthorized=a.rejectUnauthorized,this.extraHeaders=a.extraHeaders}var e=a("engine.io-parser"),f=a("component-emitter");b.exports=d,f(d.prototype),d.prototype.onError=function(a,b){var c=new Error(a);return c.type="TransportError",c.description=b,this.emit("error",c),this},d.prototype.open=function(){return("closed"==this.readyState||""==this.readyState)&&(this.readyState="opening",this.doOpen()),this},d.prototype.close=function(){return("opening"==this.readyState||"open"==this.readyState)&&(this.doClose(),this.onClose()),this},d.prototype.send=function(a){if("open"!=this.readyState)throw new Error("Transport not open");this.write(a)},d.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},d.prototype.onData=function(a){var b=e.decodePacket(a,this.socket.binaryType);this.onPacket(b)},d.prototype.onPacket=function(a){this.emit("packet",a)},d.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},{"component-emitter":15,"engine.io-parser":19}],5:[function(a,b,c){(function(b){function d(a){var c,d=!1,h=!1,i=!1!==a.jsonp;if(b.location){var j="https:"==location.protocol,k=location.port;k||(k=j?443:80),d=a.hostname!=location.hostname||k!=a.port,h=a.secure!=j}if(a.xdomain=d,a.xscheme=h,c=new e(a),"open"in c&&!a.forceJSONP)return new f(a);if(!i)throw new Error("JSONP disabled");return new g(a)}var e=a("xmlhttprequest-ssl"),f=a("./polling-xhr"),g=a("./polling-jsonp"),h=a("./websocket");c.polling=d,c.websocket=h}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling-jsonp":6,"./polling-xhr":7,"./websocket":9,"xmlhttprequest-ssl":10}],6:[function(a,b,c){(function(c){function d(){}function e(a){f.call(this,a),this.query=this.query||{},h||(c.___eio||(c.___eio=[]),h=c.___eio),this.index=h.length;var b=this;h.push(function(a){b.onData(a)}),this.query.j=this.index,c.document&&c.addEventListener&&c.addEventListener("beforeunload",function(){b.script&&(b.script.onerror=d)},!1)}var f=a("./polling"),g=a("component-inherit");b.exports=e;var h,i=/\n/g,j=/\\n/g;g(e,f),e.prototype.supportsBinary=!1,e.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),f.prototype.doClose.call(this)},e.prototype.doPoll=function(){var a=this,b=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),b.async=!0,b.src=this.uri(),b.onerror=function(b){a.onError("jsonp poll error",b)};var c=document.getElementsByTagName("script")[0];c?c.parentNode.insertBefore(b,c):(document.head||document.body).appendChild(b),this.script=b;var d="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);d&&setTimeout(function(){var a=document.createElement("iframe");document.body.appendChild(a),document.body.removeChild(a)},100)},e.prototype.doWrite=function(a,b){function c(){d(),b()}function d(){if(e.iframe)try{e.form.removeChild(e.iframe)}catch(a){e.onError("jsonp polling iframe removal error",a)}try{var b='<iframe src="javascript:0" name="'+e.iframeId+'">';f=document.createElement(b)}catch(a){f=document.createElement("iframe"),f.name=e.iframeId,f.src="javascript:0"}f.id=e.iframeId,e.form.appendChild(f),e.iframe=f}var e=this;if(!this.form){var f,g=document.createElement("form"),h=document.createElement("textarea"),k=this.iframeId="eio_iframe_"+this.index;g.className="socketio",g.style.position="absolute",g.style.top="-1000px",g.style.left="-1000px",g.target=k,g.method="POST",g.setAttribute("accept-charset","utf-8"),h.name="d",g.appendChild(h),document.body.appendChild(g),this.form=g,this.area=h}this.form.action=this.uri(),d(),a=a.replace(j,"\\\n"),this.area.value=a.replace(i,"\\n");try{this.form.submit()}catch(l){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"==e.iframe.readyState&&c()}:this.iframe.onload=c}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling":8,"component-inherit":16}],7:[function(a,b,c){(function(c){function d(){}function e(a){if(i.call(this,a),c.location){var b="https:"==location.protocol,d=location.port;d||(d=b?443:80),this.xd=a.hostname!=c.location.hostname||d!=a.port,this.xs=a.secure!=b}else this.extraHeaders=a.extraHeaders}function f(a){this.method=a.method||"GET",this.uri=a.uri,this.xd=!!a.xd,this.xs=!!a.xs,this.async=!1!==a.async,this.data=void 0!=a.data?a.data:null,this.agent=a.agent,this.isBinary=a.isBinary,this.supportsBinary=a.supportsBinary,this.enablesXDR=a.enablesXDR,this.pfx=a.pfx,this.key=a.key,this.passphrase=a.passphrase,this.cert=a.cert,this.ca=a.ca,this.ciphers=a.ciphers,this.rejectUnauthorized=a.rejectUnauthorized,this.extraHeaders=a.extraHeaders,this.create()}function g(){for(var a in f.requests)f.requests.hasOwnProperty(a)&&f.requests[a].abort()}var h=a("xmlhttprequest-ssl"),i=a("./polling"),j=a("component-emitter"),k=a("component-inherit"),l=a("debug")("engine.io-client:polling-xhr");b.exports=e,b.exports.Request=f,k(e,i),e.prototype.supportsBinary=!0,e.prototype.request=function(a){return a=a||{},a.uri=this.uri(),a.xd=this.xd,a.xs=this.xs,a.agent=this.agent||!1,a.supportsBinary=this.supportsBinary,a.enablesXDR=this.enablesXDR,a.pfx=this.pfx,a.key=this.key,a.passphrase=this.passphrase,a.cert=this.cert,a.ca=this.ca,a.ciphers=this.ciphers,a.rejectUnauthorized=this.rejectUnauthorized,a.extraHeaders=this.extraHeaders,new f(a)},e.prototype.doWrite=function(a,b){var c="string"!=typeof a&&void 0!==a,d=this.request({method:"POST",data:a,isBinary:c}),e=this;d.on("success",b),d.on("error",function(a){e.onError("xhr post error",a)}),this.sendXhr=d},e.prototype.doPoll=function(){l("xhr poll");var a=this.request(),b=this;a.on("data",function(a){b.onData(a)}),a.on("error",function(a){b.onError("xhr poll error",a)}),this.pollXhr=a},j(f.prototype),f.prototype.create=function(){var a={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};a.pfx=this.pfx,a.key=this.key,a.passphrase=this.passphrase,a.cert=this.cert,a.ca=this.ca,a.ciphers=this.ciphers,a.rejectUnauthorized=this.rejectUnauthorized;var b=this.xhr=new h(a),d=this;try{l("xhr open %s: %s",this.method,this.uri),b.open(this.method,this.uri,this.async);try{if(this.extraHeaders){b.setDisableHeaderCheck(!0);for(var e in this.extraHeaders)this.extraHeaders.hasOwnProperty(e)&&b.setRequestHeader(e,this.extraHeaders[e])}}catch(g){}if(this.supportsBinary&&(b.responseType="arraybuffer"),"POST"==this.method)try{this.isBinary?b.setRequestHeader("Content-type","application/octet-stream"):b.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(g){}"withCredentials"in b&&(b.withCredentials=!0),this.hasXDR()?(b.onload=function(){d.onLoad()},b.onerror=function(){d.onError(b.responseText)}):b.onreadystatechange=function(){4==b.readyState&&(200==b.status||1223==b.status?d.onLoad():setTimeout(function(){d.onError(b.status)},0))},l("xhr data %s",this.data),b.send(this.data)}catch(g){return void setTimeout(function(){d.onError(g)},0)}c.document&&(this.index=f.requestsCount++,f.requests[this.index]=this)},f.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},f.prototype.onData=function(a){this.emit("data",a),this.onSuccess()},f.prototype.onError=function(a){this.emit("error",a),this.cleanup(!0)},f.prototype.cleanup=function(a){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=d:this.xhr.onreadystatechange=d,a)try{this.xhr.abort()}catch(b){}c.document&&delete f.requests[this.index],this.xhr=null}},f.prototype.onLoad=function(){var a;try{var b;try{b=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(c){}if("application/octet-stream"===b)a=this.xhr.response;else if(this.supportsBinary)try{a=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(c){for(var d=new Uint8Array(this.xhr.response),e=[],f=0,g=d.length;g>f;f++)e.push(d[f]);a=String.fromCharCode.apply(null,e)}else a=this.xhr.responseText}catch(c){this.onError(c)}null!=a&&this.onData(a)},f.prototype.hasXDR=function(){return"undefined"!=typeof c.XDomainRequest&&!this.xs&&this.enablesXDR},f.prototype.abort=function(){this.cleanup()},c.document&&(f.requestsCount=0,f.requests={},c.attachEvent?c.attachEvent("onunload",g):c.addEventListener&&c.addEventListener("beforeunload",g,!1))}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling":8,"component-emitter":15,"component-inherit":16,debug:17,"xmlhttprequest-ssl":10}],8:[function(a,b,c){function d(a){var b=a&&a.forceBase64;(!k||b)&&(this.supportsBinary=!1),e.call(this,a)}var e=a("../transport"),f=a("parseqs"),g=a("engine.io-parser"),h=a("component-inherit"),i=a("yeast"),j=a("debug")("engine.io-client:polling");b.exports=d;var k=function(){var b=a("xmlhttprequest-ssl"),c=new b({xdomain:!1});return null!=c.responseType}();h(d,e),d.prototype.name="polling",d.prototype.doOpen=function(){this.poll()},d.prototype.pause=function(a){function b(){j("paused"),c.readyState="paused",a()}var c=this;if(this.readyState="pausing",this.polling||!this.writable){var d=0;this.polling&&(j("we are currently polling - waiting to pause"),d++,this.once("pollComplete",function(){j("pre-pause polling complete"),--d||b()})),this.writable||(j("we are currently writing - waiting to pause"),d++,this.once("drain",function(){j("pre-pause writing complete"),--d||b()}))}else b()},d.prototype.poll=function(){j("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},d.prototype.onData=function(a){var b=this;j("polling got data %s",a);var c=function(a,c,d){return"opening"==b.readyState&&b.onOpen(),"close"==a.type?(b.onClose(),!1):void b.onPacket(a)};g.decodePayload(a,this.socket.binaryType,c),"closed"!=this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"==this.readyState?this.poll():j('ignoring poll - transport state "%s"',this.readyState))},d.prototype.doClose=function(){function a(){j("writing close packet"),b.write([{type:"close"}])}var b=this;"open"==this.readyState?(j("transport open - closing"),a()):(j("transport not open - deferring close"),this.once("open",a))},d.prototype.write=function(a){var b=this;this.writable=!1;var c=function(){b.writable=!0,b.emit("drain")},b=this;g.encodePayload(a,this.supportsBinary,function(a){b.doWrite(a,c)})},d.prototype.uri=function(){var a=this.query||{},b=this.secure?"https":"http",c="";!1!==this.timestampRequests&&(a[this.timestampParam]=i()),this.supportsBinary||a.sid||(a.b64=1),a=f.encode(a),this.port&&("https"==b&&443!=this.port||"http"==b&&80!=this.port)&&(c=":"+this.port),a.length&&(a="?"+a);var d=-1!==this.hostname.indexOf(":");return b+"://"+(d?"["+this.hostname+"]":this.hostname)+c+this.path+a}},{"../transport":4,"component-inherit":16,debug:17,"engine.io-parser":19,parseqs:27,"xmlhttprequest-ssl":10,yeast:30}],9:[function(a,b,c){(function(c){function d(a){var b=a&&a.forceBase64;b&&(this.supportsBinary=!1),this.perMessageDeflate=a.perMessageDeflate,e.call(this,a)}var e=a("../transport"),f=a("engine.io-parser"),g=a("parseqs"),h=a("component-inherit"),i=a("yeast"),j=a("debug")("engine.io-client:websocket"),k=c.WebSocket||c.MozWebSocket,l=k||("undefined"!=typeof window?null:a("ws"));b.exports=d,h(d,e),d.prototype.name="websocket",d.prototype.supportsBinary=!0,d.prototype.doOpen=function(){if(this.check()){var a=this.uri(),b=void 0,c={agent:this.agent,perMessageDeflate:this.perMessageDeflate};c.pfx=this.pfx,c.key=this.key,c.passphrase=this.passphrase,c.cert=this.cert,c.ca=this.ca,c.ciphers=this.ciphers,c.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(c.headers=this.extraHeaders),this.ws=k?new l(a):new l(a,b,c),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="buffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},d.prototype.addEventListeners=function(){var a=this;this.ws.onopen=function(){a.onOpen()},this.ws.onclose=function(){a.onClose()},this.ws.onmessage=function(b){a.onData(b.data)},this.ws.onerror=function(b){a.onError("websocket error",b)}},"undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)&&(d.prototype.onData=function(a){var b=this;setTimeout(function(){e.prototype.onData.call(b,a)},0)}),d.prototype.write=function(a){function b(){d.emit("flush"),setTimeout(function(){d.writable=!0,d.emit("drain")},0)}var d=this;this.writable=!1;for(var e=a.length,g=0,h=e;h>g;g++)!function(a){f.encodePacket(a,d.supportsBinary,function(f){if(!k){var g={};if(a.options&&(g.compress=a.options.compress),d.perMessageDeflate){var h="string"==typeof f?c.Buffer.byteLength(f):f.length;h<d.perMessageDeflate.threshold&&(g.compress=!1)}}try{k?d.ws.send(f):d.ws.send(f,g)}catch(i){j("websocket closed before onclose event")}--e||b()})}(a[g])},d.prototype.onClose=function(){e.prototype.onClose.call(this)},d.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},d.prototype.uri=function(){var a=this.query||{},b=this.secure?"wss":"ws",c="";this.port&&("wss"==b&&443!=this.port||"ws"==b&&80!=this.port)&&(c=":"+this.port),this.timestampRequests&&(a[this.timestampParam]=i()),this.supportsBinary||(a.b64=1),a=g.encode(a),a.length&&(a="?"+a);var d=-1!==this.hostname.indexOf(":");return b+"://"+(d?"["+this.hostname+"]":this.hostname)+c+this.path+a},d.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===d.prototype.name)}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"../transport":4,"component-inherit":16,debug:17,"engine.io-parser":19,parseqs:27,ws:void 0,yeast:30}],10:[function(a,b,c){var d=a("has-cors");b.exports=function(a){var b=a.xdomain,c=a.xscheme,e=a.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!b||d))return new XMLHttpRequest}catch(f){}try{if("undefined"!=typeof XDomainRequest&&!c&&e)return new XDomainRequest}catch(f){}if(!b)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(f){}}},{"has-cors":22}],11:[function(a,b,c){function d(a,b,c){function d(a,e){if(d.count<=0)throw new Error("after called too many times");--d.count,a?(f=!0,b(a),b=c):0!==d.count||f||b(null,e)}var f=!1;return c=c||e,d.count=a,0===a?b():d}function e(){}b.exports=d},{}],12:[function(a,b,c){b.exports=function(a,b,c){var d=a.byteLength;if(b=b||0,c=c||d,a.slice)return a.slice(b,c);if(0>b&&(b+=d),0>c&&(c+=d),c>d&&(c=d),b>=d||b>=c||0===d)return new ArrayBuffer(0);for(var e=new Uint8Array(a),f=new Uint8Array(c-b),g=b,h=0;c>g;g++,h++)f[h]=e[g];return f.buffer}},{}],13:[function(a,b,c){!function(a){"use strict";c.encode=function(b){var c,d=new Uint8Array(b),e=d.length,f="";for(c=0;e>c;c+=3)f+=a[d[c]>>2],f+=a[(3&d[c])<<4|d[c+1]>>4],f+=a[(15&d[c+1])<<2|d[c+2]>>6],f+=a[63&d[c+2]];return e%3===2?f=f.substring(0,f.length-1)+"=":e%3===1&&(f=f.substring(0,f.length-2)+"=="),f},c.decode=function(b){var c,d,e,f,g,h=.75*b.length,i=b.length,j=0;"="===b[b.length-1]&&(h--,"="===b[b.length-2]&&h--);var k=new ArrayBuffer(h),l=new Uint8Array(k);for(c=0;i>c;c+=4)d=a.indexOf(b[c]),e=a.indexOf(b[c+1]),f=a.indexOf(b[c+2]),g=a.indexOf(b[c+3]),l[j++]=d<<2|e>>4,l[j++]=(15&e)<<4|f>>2,l[j++]=(3&f)<<6|63&g;return k}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],14:[function(a,b,c){(function(a){function c(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.buffer instanceof ArrayBuffer){var d=c.buffer;if(c.byteLength!==d.byteLength){var e=new Uint8Array(c.byteLength);e.set(new Uint8Array(d,c.byteOffset,c.byteLength)),d=e.buffer}a[b]=d}}}function d(a,b){b=b||{};var d=new f;c(a);for(var e=0;e<a.length;e++)d.append(a[e]);return b.type?d.getBlob(b.type):d.getBlob()}function e(a,b){return c(a),new Blob(a,b||{})}var f=a.BlobBuilder||a.WebKitBlobBuilder||a.MSBlobBuilder||a.MozBlobBuilder,g=function(){try{var a=new Blob(["hi"]);return 2===a.size}catch(b){return!1}}(),h=g&&function(){try{var a=new Blob([new Uint8Array([1,2])]);return 2===a.size}catch(b){return!1}}(),i=f&&f.prototype.append&&f.prototype.getBlob;b.exports=function(){return g?h?a.Blob:e:i?d:void 0}()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],15:[function(a,b,c){function d(a){return a?e(a):void 0}function e(a){for(var b in d.prototype)a[b]=d.prototype[b];return a}b.exports=d,d.prototype.on=d.prototype.addEventListener=function(a,b){return this._callbacks=this._callbacks||{},(this._callbacks[a]=this._callbacks[a]||[]).push(b),this},d.prototype.once=function(a,b){function c(){d.off(a,c),b.apply(this,arguments)}var d=this;return this._callbacks=this._callbacks||{},c.fn=b,this.on(a,c),this},d.prototype.off=d.prototype.removeListener=d.prototype.removeAllListeners=d.prototype.removeEventListener=function(a,b){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var c=this._callbacks[a];if(!c)return this;if(1==arguments.length)return delete this._callbacks[a],this;for(var d,e=0;e<c.length;e++)if(d=c[e],d===b||d.fn===b){c.splice(e,1);break}return this},d.prototype.emit=function(a){this._callbacks=this._callbacks||{};var b=[].slice.call(arguments,1),c=this._callbacks[a];if(c){c=c.slice(0);for(var d=0,e=c.length;e>d;++d)c[d].apply(this,b)}return this},d.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks[a]||[]},d.prototype.hasListeners=function(a){return!!this.listeners(a).length}},{}],16:[function(a,b,c){b.exports=function(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a}},{}],17:[function(a,b,c){function d(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function e(){var a=arguments,b=this.useColors;if(a[0]=(b?"%c":"")+this.namespace+(b?" %c":" ")+a[0]+(b?"%c ":" ")+"+"+c.humanize(this.diff),!b)return a;var d="color: "+this.color;a=[a[0],d,"color: inherit"].concat(Array.prototype.slice.call(a,1));var e=0,f=0;return a[0].replace(/%[a-z%]/g,function(a){"%%"!==a&&(e++,"%c"===a&&(f=e))}),a.splice(f,0,d),a}function f(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function g(a){try{null==a?c.storage.removeItem("debug"):c.storage.debug=a}catch(b){}}function h(){var a;try{a=c.storage.debug}catch(b){}return a}function i(){try{return window.localStorage}catch(a){}}c=b.exports=a("./debug"),c.log=f,c.formatArgs=e,c.save=g,c.load=h,c.useColors=d,c.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:i(),c.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],c.formatters.j=function(a){return JSON.stringify(a)},c.enable(h())},{"./debug":18}],18:[function(a,b,c){function d(){return c.colors[k++%c.colors.length]}function e(a){function b(){}function e(){var a=e,b=+new Date,f=b-(j||b);a.diff=f,a.prev=j,a.curr=b,j=b,null==a.useColors&&(a.useColors=c.useColors()),null==a.color&&a.useColors&&(a.color=d());var g=Array.prototype.slice.call(arguments);g[0]=c.coerce(g[0]),"string"!=typeof g[0]&&(g=["%o"].concat(g));var h=0;g[0]=g[0].replace(/%([a-z%])/g,function(b,d){if("%%"===b)return b;h++;var e=c.formatters[d];if("function"==typeof e){var f=g[h];b=e.call(a,f),g.splice(h,1),h--}return b}),"function"==typeof c.formatArgs&&(g=c.formatArgs.apply(a,g));var i=e.log||c.log||console.log.bind(console);i.apply(a,g)}b.enabled=!1,e.enabled=!0;var f=c.enabled(a)?e:b;return f.namespace=a,f}function f(a){c.save(a);for(var b=(a||"").split(/[\s,]+/),d=b.length,e=0;d>e;e++)b[e]&&(a=b[e].replace(/\*/g,".*?"),"-"===a[0]?c.skips.push(new RegExp("^"+a.substr(1)+"$")):c.names.push(new RegExp("^"+a+"$")))}function g(){c.enable("")}function h(a){var b,d;for(b=0,d=c.skips.length;d>b;b++)if(c.skips[b].test(a))return!1;for(b=0,d=c.names.length;d>b;b++)if(c.names[b].test(a))return!0;return!1}function i(a){return a instanceof Error?a.stack||a.message:a}c=b.exports=e,c.coerce=i,c.disable=g,c.enable=f,c.enabled=h,c.humanize=a("ms"),c.names=[],c.skips=[],c.formatters={};var j,k=0},{ms:25}],19:[function(a,b,c){(function(b){function d(a,b){var d="b"+c.packets[a.type]+a.data.data;return b(d)}function e(a,b,d){if(!b)return c.encodeBase64Packet(a,d);var e=a.data,f=new Uint8Array(e),g=new Uint8Array(1+e.byteLength);g[0]=r[a.type];for(var h=0;h<f.length;h++)g[h+1]=f[h];return d(g.buffer)}function f(a,b,d){if(!b)return c.encodeBase64Packet(a,d);var e=new FileReader;return e.onload=function(){a.data=e.result,c.encodePacket(a,b,!0,d)},e.readAsArrayBuffer(a.data)}function g(a,b,d){if(!b)return c.encodeBase64Packet(a,d);if(q)return f(a,b,d);var e=new Uint8Array(1);e[0]=r[a.type];var g=new u([e.buffer,a.data]);return d(g)}function h(a,b,c){for(var d=new Array(a.length),e=m(a.length,c),f=function(a,c,e){b(c,function(b,c){d[a]=c,e(b,d)})},g=0;g<a.length;g++)f(g,a[g],e)}var i=a("./keys"),j=a("has-binary"),k=a("arraybuffer.slice"),l=a("base64-arraybuffer"),m=a("after"),n=a("utf8"),o=navigator.userAgent.match(/Android/i),p=/PhantomJS/i.test(navigator.userAgent),q=o||p;c.protocol=3;var r=c.packets={open:0,close:1,ping:2,pong:3,
message:4,upgrade:5,noop:6},s=i(r),t={type:"error",data:"parser error"},u=a("blob");c.encodePacket=function(a,c,f,h){"function"==typeof c&&(h=c,c=!1),"function"==typeof f&&(h=f,f=null);var i=void 0===a.data?void 0:a.data.buffer||a.data;if(b.ArrayBuffer&&i instanceof ArrayBuffer)return e(a,c,h);if(u&&i instanceof b.Blob)return g(a,c,h);if(i&&i.base64)return d(a,h);var j=r[a.type];return void 0!==a.data&&(j+=f?n.encode(String(a.data)):String(a.data)),h(""+j)},c.encodeBase64Packet=function(a,d){var e="b"+c.packets[a.type];if(u&&a.data instanceof b.Blob){var f=new FileReader;return f.onload=function(){var a=f.result.split(",")[1];d(e+a)},f.readAsDataURL(a.data)}var g;try{g=String.fromCharCode.apply(null,new Uint8Array(a.data))}catch(h){for(var i=new Uint8Array(a.data),j=new Array(i.length),k=0;k<i.length;k++)j[k]=i[k];g=String.fromCharCode.apply(null,j)}return e+=b.btoa(g),d(e)},c.decodePacket=function(a,b,d){if("string"==typeof a||void 0===a){if("b"==a.charAt(0))return c.decodeBase64Packet(a.substr(1),b);if(d)try{a=n.decode(a)}catch(e){return t}var f=a.charAt(0);return Number(f)==f&&s[f]?a.length>1?{type:s[f],data:a.substring(1)}:{type:s[f]}:t}var g=new Uint8Array(a),f=g[0],h=k(a,1);return u&&"blob"===b&&(h=new u([h])),{type:s[f],data:h}},c.decodeBase64Packet=function(a,c){var d=s[a.charAt(0)];if(!b.ArrayBuffer)return{type:d,data:{base64:!0,data:a.substr(1)}};var e=l.decode(a.substr(1));return"blob"===c&&u&&(e=new u([e])),{type:d,data:e}},c.encodePayload=function(a,b,d){function e(a){return a.length+":"+a}function f(a,d){c.encodePacket(a,g?b:!1,!0,function(a){d(null,e(a))})}"function"==typeof b&&(d=b,b=null);var g=j(a);return b&&g?u&&!q?c.encodePayloadAsBlob(a,d):c.encodePayloadAsArrayBuffer(a,d):a.length?void h(a,f,function(a,b){return d(b.join(""))}):d("0:")},c.decodePayload=function(a,b,d){if("string"!=typeof a)return c.decodePayloadAsBinary(a,b,d);"function"==typeof b&&(d=b,b=null);var e;if(""==a)return d(t,0,1);for(var f,g,h="",i=0,j=a.length;j>i;i++){var k=a.charAt(i);if(":"!=k)h+=k;else{if(""==h||h!=(f=Number(h)))return d(t,0,1);if(g=a.substr(i+1,f),h!=g.length)return d(t,0,1);if(g.length){if(e=c.decodePacket(g,b,!0),t.type==e.type&&t.data==e.data)return d(t,0,1);var l=d(e,i+f,j);if(!1===l)return}i+=f,h=""}}return""!=h?d(t,0,1):void 0},c.encodePayloadAsArrayBuffer=function(a,b){function d(a,b){c.encodePacket(a,!0,!0,function(a){return b(null,a)})}return a.length?void h(a,d,function(a,c){var d=c.reduce(function(a,b){var c;return c="string"==typeof b?b.length:b.byteLength,a+c.toString().length+c+2},0),e=new Uint8Array(d),f=0;return c.forEach(function(a){var b="string"==typeof a,c=a;if(b){for(var d=new Uint8Array(a.length),g=0;g<a.length;g++)d[g]=a.charCodeAt(g);c=d.buffer}b?e[f++]=0:e[f++]=1;for(var h=c.byteLength.toString(),g=0;g<h.length;g++)e[f++]=parseInt(h[g]);e[f++]=255;for(var d=new Uint8Array(c),g=0;g<d.length;g++)e[f++]=d[g]}),b(e.buffer)}):b(new ArrayBuffer(0))},c.encodePayloadAsBlob=function(a,b){function d(a,b){c.encodePacket(a,!0,!0,function(a){var c=new Uint8Array(1);if(c[0]=1,"string"==typeof a){for(var d=new Uint8Array(a.length),e=0;e<a.length;e++)d[e]=a.charCodeAt(e);a=d.buffer,c[0]=0}for(var f=a instanceof ArrayBuffer?a.byteLength:a.size,g=f.toString(),h=new Uint8Array(g.length+1),e=0;e<g.length;e++)h[e]=parseInt(g[e]);if(h[g.length]=255,u){var i=new u([c.buffer,h.buffer,a]);b(null,i)}})}h(a,d,function(a,c){return b(new u(c))})},c.decodePayloadAsBinary=function(a,b,d){"function"==typeof b&&(d=b,b=null);for(var e=a,f=[],g=!1;e.byteLength>0;){for(var h=new Uint8Array(e),i=0===h[0],j="",l=1;255!=h[l];l++){if(j.length>310){g=!0;break}j+=h[l]}if(g)return d(t,0,1);e=k(e,2+j.length),j=parseInt(j);var m=k(e,0,j);if(i)try{m=String.fromCharCode.apply(null,new Uint8Array(m))}catch(n){var o=new Uint8Array(m);m="";for(var l=0;l<o.length;l++)m+=String.fromCharCode(o[l])}f.push(m),e=k(e,j)}var p=f.length;f.forEach(function(a,e){d(c.decodePacket(a,b,!0),e,p)})}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./keys":20,after:11,"arraybuffer.slice":12,"base64-arraybuffer":13,blob:14,"has-binary":21,utf8:29}],20:[function(a,b,c){b.exports=Object.keys||function(a){var b=[],c=Object.prototype.hasOwnProperty;for(var d in a)c.call(a,d)&&b.push(d);return b}},{}],21:[function(a,b,c){(function(c){function d(a){function b(a){if(!a)return!1;if(c.Buffer&&c.Buffer.isBuffer(a)||c.ArrayBuffer&&a instanceof ArrayBuffer||c.Blob&&a instanceof Blob||c.File&&a instanceof File)return!0;if(e(a)){for(var d=0;d<a.length;d++)if(b(a[d]))return!0}else if(a&&"object"==typeof a){a.toJSON&&(a=a.toJSON());for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)&&b(a[f]))return!0}return!1}return b(a)}var e=a("isarray");b.exports=d}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{isarray:24}],22:[function(a,b,c){try{b.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(d){b.exports=!1}},{}],23:[function(a,b,c){var d=[].indexOf;b.exports=function(a,b){if(d)return a.indexOf(b);for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1}},{}],24:[function(a,b,c){b.exports=Array.isArray||function(a){return"[object Array]"==Object.prototype.toString.call(a)}},{}],25:[function(a,b,c){function d(a){if(a=""+a,!(a.length>1e4)){var b=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);if(b){var c=parseFloat(b[1]),d=(b[2]||"ms").toLowerCase();switch(d){case"years":case"year":case"yrs":case"yr":case"y":return c*l;case"days":case"day":case"d":return c*k;case"hours":case"hour":case"hrs":case"hr":case"h":return c*j;case"minutes":case"minute":case"mins":case"min":case"m":return c*i;case"seconds":case"second":case"secs":case"sec":case"s":return c*h;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c}}}}function e(a){return a>=k?Math.round(a/k)+"d":a>=j?Math.round(a/j)+"h":a>=i?Math.round(a/i)+"m":a>=h?Math.round(a/h)+"s":a+"ms"}function f(a){return g(a,k,"day")||g(a,j,"hour")||g(a,i,"minute")||g(a,h,"second")||a+" ms"}function g(a,b,c){return b>a?void 0:1.5*b>a?Math.floor(a/b)+" "+c:Math.ceil(a/b)+" "+c+"s"}var h=1e3,i=60*h,j=60*i,k=24*j,l=365.25*k;b.exports=function(a,b){return b=b||{},"string"==typeof a?d(a):b["long"]?f(a):e(a)}},{}],26:[function(a,b,c){(function(a){var c=/^[\],:{}\s]*$/,d=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,e=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,f=/(?:^|:|,)(?:\s*\[)+/g,g=/^\s+/,h=/\s+$/;b.exports=function(b){return"string"==typeof b&&b?(b=b.replace(g,"").replace(h,""),a.JSON&&JSON.parse?JSON.parse(b):c.test(b.replace(d,"@").replace(e,"]").replace(f,""))?new Function("return "+b)():void 0):null}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],27:[function(a,b,c){c.encode=function(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b.length&&(b+="&"),b+=encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b},c.decode=function(a){for(var b={},c=a.split("&"),d=0,e=c.length;e>d;d++){var f=c[d].split("=");b[decodeURIComponent(f[0])]=decodeURIComponent(f[1])}return b}},{}],28:[function(a,b,c){var d=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,e=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];b.exports=function(a){var b=a,c=a.indexOf("["),f=a.indexOf("]");-1!=c&&-1!=f&&(a=a.substring(0,c)+a.substring(c,f).replace(/:/g,";")+a.substring(f,a.length));for(var g=d.exec(a||""),h={},i=14;i--;)h[e[i]]=g[i]||"";return-1!=c&&-1!=f&&(h.source=b,h.host=h.host.substring(1,h.host.length-1).replace(/;/g,":"),h.authority=h.authority.replace("[","").replace("]","").replace(/;/g,":"),h.ipv6uri=!0),h}},{}],29:[function(b,c,d){(function(b){!function(e){function f(a){for(var b,c,d=[],e=0,f=a.length;f>e;)b=a.charCodeAt(e++),b>=55296&&56319>=b&&f>e?(c=a.charCodeAt(e++),56320==(64512&c)?d.push(((1023&b)<<10)+(1023&c)+65536):(d.push(b),e--)):d.push(b);return d}function g(a){for(var b,c=a.length,d=-1,e="";++d<c;)b=a[d],b>65535&&(b-=65536,e+=u(b>>>10&1023|55296),b=56320|1023&b),e+=u(b);return e}function h(a){if(a>=55296&&57343>=a)throw Error("Lone surrogate U+"+a.toString(16).toUpperCase()+" is not a scalar value")}function i(a,b){return u(a>>b&63|128)}function j(a){if(0==(4294967168&a))return u(a);var b="";return 0==(4294965248&a)?b=u(a>>6&31|192):0==(4294901760&a)?(h(a),b=u(a>>12&15|224),b+=i(a,6)):0==(4292870144&a)&&(b=u(a>>18&7|240),b+=i(a,12),b+=i(a,6)),b+=u(63&a|128)}function k(a){for(var b,c=f(a),d=c.length,e=-1,g="";++e<d;)b=c[e],g+=j(b);return g}function l(){if(t>=s)throw Error("Invalid byte index");var a=255&r[t];if(t++,128==(192&a))return 63&a;throw Error("Invalid continuation byte")}function m(){var a,b,c,d,e;if(t>s)throw Error("Invalid byte index");if(t==s)return!1;if(a=255&r[t],t++,0==(128&a))return a;if(192==(224&a)){var b=l();if(e=(31&a)<<6|b,e>=128)return e;throw Error("Invalid continuation byte")}if(224==(240&a)){if(b=l(),c=l(),e=(15&a)<<12|b<<6|c,e>=2048)return h(e),e;throw Error("Invalid continuation byte")}if(240==(248&a)&&(b=l(),c=l(),d=l(),e=(15&a)<<18|b<<12|c<<6|d,e>=65536&&1114111>=e))return e;throw Error("Invalid UTF-8 detected")}function n(a){r=f(a),s=r.length,t=0;for(var b,c=[];(b=m())!==!1;)c.push(b);return g(c)}var o="object"==typeof d&&d,p="object"==typeof c&&c&&c.exports==o&&c,q="object"==typeof b&&b;(q.global===q||q.window===q)&&(e=q);var r,s,t,u=String.fromCharCode,v={version:"2.0.0",encode:k,decode:n};if("function"==typeof a&&"object"==typeof a.amd&&a.amd)a(function(){return v});else if(o&&!o.nodeType)if(p)p.exports=v;else{var w={},x=w.hasOwnProperty;for(var y in v)x.call(v,y)&&(o[y]=v[y])}else e.utf8=v}(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],30:[function(a,b,c){"use strict";function d(a){var b="";do b=h[a%i]+b,a=Math.floor(a/i);while(a>0);return b}function e(a){var b=0;for(l=0;l<a.length;l++)b=b*i+j[a.charAt(l)];return b}function f(){var a=d(+new Date);return a!==g?(k=0,g=a):a+"."+d(k++)}for(var g,h="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),i=64,j={},k=0,l=0;i>l;l++)j[h[l]]=l;f.encode=d,f.decode=e,b.exports=f},{}],31:[function(a,b,c){function d(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d=e(a),f=d.source,j=d.id,k=d.path,l=i[j]&&k in i[j].nsps,m=b.forceNew||b["force new connection"]||!1===b.multiplex||l;return m?(h("ignoring socket cache for %s",f),c=g(f,b)):(i[j]||(h("new io instance for %s",f),i[j]=g(f,b)),c=i[j]),c.socket(d.path)}var e=a("./url"),f=a("socket.io-parser"),g=a("./manager"),h=a("debug")("socket.io-client");b.exports=c=d;var i=c.managers={};c.protocol=f.protocol,c.connect=d,c.Manager=a("./manager"),c.Socket=a("./socket")},{"./manager":32,"./socket":34,"./url":35,debug:39,"socket.io-parser":47}],32:[function(a,b,c){function d(a,b){return this instanceof d?(a&&"object"==typeof a&&(b=a,a=void 0),b=b||{},b.path=b.path||"/socket.io",this.nsps={},this.subs=[],this.opts=b,this.reconnection(b.reconnection!==!1),this.reconnectionAttempts(b.reconnectionAttempts||1/0),this.reconnectionDelay(b.reconnectionDelay||1e3),this.reconnectionDelayMax(b.reconnectionDelayMax||5e3),this.randomizationFactor(b.randomizationFactor||.5),this.backoff=new m({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==b.timeout?2e4:b.timeout),this.readyState="closed",this.uri=a,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new h.Encoder,this.decoder=new h.Decoder,this.autoConnect=b.autoConnect!==!1,void(this.autoConnect&&this.open())):new d(a,b)}var e=a("engine.io-client"),f=a("./socket"),g=a("component-emitter"),h=a("socket.io-parser"),i=a("./on"),j=a("component-bind"),k=a("debug")("socket.io-client:manager"),l=a("indexof"),m=a("backo2"),n=Object.prototype.hasOwnProperty;b.exports=d,d.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var a in this.nsps)n.call(this.nsps,a)&&this.nsps[a].emit.apply(this.nsps[a],arguments)},d.prototype.updateSocketIds=function(){for(var a in this.nsps)n.call(this.nsps,a)&&(this.nsps[a].id=this.engine.id)},g(d.prototype),d.prototype.reconnection=function(a){return arguments.length?(this._reconnection=!!a,this):this._reconnection},d.prototype.reconnectionAttempts=function(a){return arguments.length?(this._reconnectionAttempts=a,this):this._reconnectionAttempts},d.prototype.reconnectionDelay=function(a){return arguments.length?(this._reconnectionDelay=a,this.backoff&&this.backoff.setMin(a),this):this._reconnectionDelay},d.prototype.randomizationFactor=function(a){return arguments.length?(this._randomizationFactor=a,this.backoff&&this.backoff.setJitter(a),this):this._randomizationFactor},d.prototype.reconnectionDelayMax=function(a){return arguments.length?(this._reconnectionDelayMax=a,this.backoff&&this.backoff.setMax(a),this):this._reconnectionDelayMax},d.prototype.timeout=function(a){return arguments.length?(this._timeout=a,this):this._timeout},d.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},d.prototype.open=d.prototype.connect=function(a){if(k("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;k("opening %s",this.uri),this.engine=e(this.uri,this.opts);var b=this.engine,c=this;this.readyState="opening",this.skipReconnect=!1;var d=i(b,"open",function(){c.onopen(),a&&a()}),f=i(b,"error",function(b){if(k("connect_error"),c.cleanup(),c.readyState="closed",c.emitAll("connect_error",b),a){var d=new Error("Connection error");d.data=b,a(d)}else c.maybeReconnectOnOpen()});if(!1!==this._timeout){var g=this._timeout;k("connect attempt will timeout after %d",g);var h=setTimeout(function(){k("connect attempt timed out after %d",g),d.destroy(),b.close(),b.emit("error","timeout"),c.emitAll("connect_timeout",g)},g);this.subs.push({destroy:function(){clearTimeout(h)}})}return this.subs.push(d),this.subs.push(f),this},d.prototype.onopen=function(){k("open"),this.cleanup(),this.readyState="open",this.emit("open");var a=this.engine;this.subs.push(i(a,"data",j(this,"ondata"))),this.subs.push(i(a,"ping",j(this,"onping"))),this.subs.push(i(a,"pong",j(this,"onpong"))),this.subs.push(i(a,"error",j(this,"onerror"))),this.subs.push(i(a,"close",j(this,"onclose"))),this.subs.push(i(this.decoder,"decoded",j(this,"ondecoded")))},d.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},d.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},d.prototype.ondata=function(a){this.decoder.add(a)},d.prototype.ondecoded=function(a){this.emit("packet",a)},d.prototype.onerror=function(a){k("error",a),this.emitAll("error",a)},d.prototype.socket=function(a){function b(){~l(d.connecting,c)||d.connecting.push(c)}var c=this.nsps[a];if(!c){c=new f(this,a),this.nsps[a]=c;var d=this;c.on("connecting",b),c.on("connect",function(){c.id=d.engine.id}),this.autoConnect&&b()}return c},d.prototype.destroy=function(a){var b=l(this.connecting,a);~b&&this.connecting.splice(b,1),this.connecting.length||this.close()},d.prototype.packet=function(a){k("writing packet %j",a);var b=this;b.encoding?b.packetBuffer.push(a):(b.encoding=!0,this.encoder.encode(a,function(c){for(var d=0;d<c.length;d++)b.engine.write(c[d],a.options);b.encoding=!1,b.processPacketQueue()}))},d.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var a=this.packetBuffer.shift();this.packet(a)}},d.prototype.cleanup=function(){k("cleanup");for(var a;a=this.subs.shift();)a.destroy();this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},d.prototype.close=d.prototype.disconnect=function(){k("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"==this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},d.prototype.onclose=function(a){k("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",a),this._reconnection&&!this.skipReconnect&&this.reconnect()},d.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var a=this;if(this.backoff.attempts>=this._reconnectionAttempts)k("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var b=this.backoff.duration();k("will wait %dms before reconnect attempt",b),this.reconnecting=!0;var c=setTimeout(function(){a.skipReconnect||(k("attempting reconnect"),a.emitAll("reconnect_attempt",a.backoff.attempts),a.emitAll("reconnecting",a.backoff.attempts),a.skipReconnect||a.open(function(b){b?(k("reconnect attempt error"),a.reconnecting=!1,a.reconnect(),a.emitAll("reconnect_error",b.data)):(k("reconnect success"),a.onreconnect())}))},b);this.subs.push({destroy:function(){clearTimeout(c)}})}},d.prototype.onreconnect=function(){var a=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",a)}},{"./on":33,"./socket":34,backo2:36,"component-bind":37,"component-emitter":38,debug:39,"engine.io-client":1,indexof:42,"socket.io-parser":47}],33:[function(a,b,c){function d(a,b,c){return a.on(b,c),{destroy:function(){a.removeListener(b,c)}}}b.exports=d},{}],34:[function(a,b,c){function d(a,b){this.io=a,this.nsp=b,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.io.autoConnect&&this.open()}var e=a("socket.io-parser"),f=a("component-emitter"),g=a("to-array"),h=a("./on"),i=a("component-bind"),j=a("debug")("socket.io-client:socket"),k=a("has-binary");b.exports=c=d;var l={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},m=f.prototype.emit;f(d.prototype),d.prototype.subEvents=function(){if(!this.subs){var a=this.io;this.subs=[h(a,"open",i(this,"onopen")),h(a,"packet",i(this,"onpacket")),h(a,"close",i(this,"onclose"))]}},d.prototype.open=d.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"==this.io.readyState&&this.onopen(),this.emit("connecting"),this)},d.prototype.send=function(){var a=g(arguments);return a.unshift("message"),this.emit.apply(this,a),this},d.prototype.emit=function(a){if(l.hasOwnProperty(a))return m.apply(this,arguments),this;var b=g(arguments),c=e.EVENT;k(b)&&(c=e.BINARY_EVENT);var d={type:c,data:b};return d.options={},d.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof b[b.length-1]&&(j("emitting packet with ack id %d",this.ids),this.acks[this.ids]=b.pop(),d.id=this.ids++),this.connected?this.packet(d):this.sendBuffer.push(d),delete this.flags,this},d.prototype.packet=function(a){a.nsp=this.nsp,this.io.packet(a)},d.prototype.onopen=function(){j("transport is open - connecting"),"/"!=this.nsp&&this.packet({type:e.CONNECT})},d.prototype.onclose=function(a){j("close (%s)",a),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",a)},d.prototype.onpacket=function(a){if(a.nsp==this.nsp)switch(a.type){case e.CONNECT:this.onconnect();break;case e.EVENT:this.onevent(a);break;case e.BINARY_EVENT:this.onevent(a);break;case e.ACK:this.onack(a);break;case e.BINARY_ACK:this.onack(a);break;case e.DISCONNECT:this.ondisconnect();break;case e.ERROR:this.emit("error",a.data)}},d.prototype.onevent=function(a){var b=a.data||[];j("emitting event %j",b),null!=a.id&&(j("attaching ack callback to event"),b.push(this.ack(a.id))),this.connected?m.apply(this,b):this.receiveBuffer.push(b)},d.prototype.ack=function(a){var b=this,c=!1;return function(){if(!c){c=!0;var d=g(arguments);j("sending ack %j",d);var f=k(d)?e.BINARY_ACK:e.ACK;b.packet({type:f,id:a,data:d})}}},d.prototype.onack=function(a){var b=this.acks[a.id];"function"==typeof b?(j("calling ack %s with %j",a.id,a.data),b.apply(this,a.data),delete this.acks[a.id]):j("bad ack %s",a.id)},d.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},d.prototype.emitBuffered=function(){var a;for(a=0;a<this.receiveBuffer.length;a++)m.apply(this,this.receiveBuffer[a]);for(this.receiveBuffer=[],a=0;a<this.sendBuffer.length;a++)this.packet(this.sendBuffer[a]);this.sendBuffer=[]},d.prototype.ondisconnect=function(){j("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},d.prototype.destroy=function(){if(this.subs){for(var a=0;a<this.subs.length;a++)this.subs[a].destroy();this.subs=null}this.io.destroy(this)},d.prototype.close=d.prototype.disconnect=function(){return this.connected&&(j("performing disconnect (%s)",this.nsp),this.packet({type:e.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},d.prototype.compress=function(a){return this.flags=this.flags||{},this.flags.compress=a,this}},{"./on":33,"component-bind":37,"component-emitter":38,debug:39,"has-binary":41,"socket.io-parser":47,"to-array":51}],35:[function(a,b,c){(function(c){function d(a,b){var d=a,b=b||c.location;null==a&&(a=b.protocol+"//"+b.host),"string"==typeof a&&("/"==a.charAt(0)&&(a="/"==a.charAt(1)?b.protocol+a:b.host+a),/^(https?|wss?):\/\//.test(a)||(f("protocol-less url %s",a),a="undefined"!=typeof b?b.protocol+"//"+a:"https://"+a),f("parse %s",a),d=e(a)),d.port||(/^(http|ws)$/.test(d.protocol)?d.port="80":/^(http|ws)s$/.test(d.protocol)&&(d.port="443")),d.path=d.path||"/";var g=-1!==d.host.indexOf(":"),h=g?"["+d.host+"]":d.host;return d.id=d.protocol+"://"+h+":"+d.port,d.href=d.protocol+"://"+h+(b&&b.port==d.port?"":":"+d.port),d}var e=a("parseuri"),f=a("debug")("socket.io-client:url");b.exports=d}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{debug:39,parseuri:45}],36:[function(a,b,c){function d(a){a=a||{},this.ms=a.min||100,this.max=a.max||1e4,this.factor=a.factor||2,this.jitter=a.jitter>0&&a.jitter<=1?a.jitter:0,this.attempts=0}b.exports=d,d.prototype.duration=function(){var a=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var b=Math.random(),c=Math.floor(b*this.jitter*a);a=0==(1&Math.floor(10*b))?a-c:a+c}return 0|Math.min(a,this.max)},d.prototype.reset=function(){this.attempts=0},d.prototype.setMin=function(a){this.ms=a},d.prototype.setMax=function(a){this.max=a},d.prototype.setJitter=function(a){this.jitter=a}},{}],37:[function(a,b,c){var d=[].slice;b.exports=function(a,b){if("string"==typeof b&&(b=a[b]),"function"!=typeof b)throw new Error("bind() requires a function");var c=d.call(arguments,2);return function(){return b.apply(a,c.concat(d.call(arguments)))}}},{}],38:[function(a,b,c){function d(a){return a?e(a):void 0}function e(a){for(var b in d.prototype)a[b]=d.prototype[b];return a}b.exports=d,d.prototype.on=d.prototype.addEventListener=function(a,b){return this._callbacks=this._callbacks||{},(this._callbacks["$"+a]=this._callbacks["$"+a]||[]).push(b),this},d.prototype.once=function(a,b){function c(){this.off(a,c),b.apply(this,arguments)}return c.fn=b,this.on(a,c),this},d.prototype.off=d.prototype.removeListener=d.prototype.removeAllListeners=d.prototype.removeEventListener=function(a,b){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var c=this._callbacks["$"+a];if(!c)return this;if(1==arguments.length)return delete this._callbacks["$"+a],this;for(var d,e=0;e<c.length;e++)if(d=c[e],d===b||d.fn===b){c.splice(e,1);break}return this},d.prototype.emit=function(a){this._callbacks=this._callbacks||{};var b=[].slice.call(arguments,1),c=this._callbacks["$"+a];if(c){c=c.slice(0);for(var d=0,e=c.length;e>d;++d)c[d].apply(this,b)}return this},d.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks["$"+a]||[]},d.prototype.hasListeners=function(a){return!!this.listeners(a).length}},{}],39:[function(a,b,c){arguments[4][17][0].apply(c,arguments)},{"./debug":40,dup:17}],40:[function(a,b,c){arguments[4][18][0].apply(c,arguments)},{dup:18,ms:44}],41:[function(a,b,c){(function(c){function d(a){function b(a){if(!a)return!1;if(c.Buffer&&c.Buffer.isBuffer&&c.Buffer.isBuffer(a)||c.ArrayBuffer&&a instanceof ArrayBuffer||c.Blob&&a instanceof Blob||c.File&&a instanceof File)return!0;if(e(a)){for(var d=0;d<a.length;d++)if(b(a[d]))return!0}else if(a&&"object"==typeof a){a.toJSON&&"function"==typeof a.toJSON&&(a=a.toJSON());for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)&&b(a[f]))return!0}return!1}return b(a)}var e=a("isarray");b.exports=d}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{isarray:43}],42:[function(a,b,c){arguments[4][23][0].apply(c,arguments)},{dup:23}],43:[function(a,b,c){arguments[4][24][0].apply(c,arguments)},{dup:24}],44:[function(a,b,c){arguments[4][25][0].apply(c,arguments)},{dup:25}],45:[function(a,b,c){arguments[4][28][0].apply(c,arguments)},{dup:28}],46:[function(a,b,c){(function(b){var d=a("isarray"),e=a("./is-buffer");c.deconstructPacket=function(a){function b(a){if(!a)return a;if(e(a)){var f={_placeholder:!0,num:c.length};return c.push(a),f}if(d(a)){for(var g=new Array(a.length),h=0;h<a.length;h++)g[h]=b(a[h]);return g}if("object"==typeof a&&!(a instanceof Date)){var g={};for(var i in a)g[i]=b(a[i]);return g}return a}var c=[],f=a.data,g=a;return g.data=b(f),g.attachments=c.length,{packet:g,buffers:c}},c.reconstructPacket=function(a,b){function c(a){if(a&&a._placeholder){var e=b[a.num];return e}if(d(a)){for(var f=0;f<a.length;f++)a[f]=c(a[f]);return a}if(a&&"object"==typeof a){for(var g in a)a[g]=c(a[g]);return a}return a}return a.data=c(a.data),a.attachments=void 0,a},c.removeBlobs=function(a,c){function f(a,i,j){if(!a)return a;if(b.Blob&&a instanceof Blob||b.File&&a instanceof File){g++;var k=new FileReader;k.onload=function(){j?j[i]=this.result:h=this.result,--g||c(h)},k.readAsArrayBuffer(a)}else if(d(a))for(var l=0;l<a.length;l++)f(a[l],l,a);else if(a&&"object"==typeof a&&!e(a))for(var m in a)f(a[m],m,a)}var g=0,h=a;f(h),g||c(h)}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./is-buffer":48,isarray:43}],47:[function(a,b,c){function d(){}function e(a){var b="",d=!1;return b+=a.type,(c.BINARY_EVENT==a.type||c.BINARY_ACK==a.type)&&(b+=a.attachments,b+="-"),a.nsp&&"/"!=a.nsp&&(d=!0,b+=a.nsp),null!=a.id&&(d&&(b+=",",d=!1),b+=a.id),null!=a.data&&(d&&(b+=","),b+=l.stringify(a.data)),k("encoded %j as %s",a,b),b}function f(a,b){function c(a){var c=n.deconstructPacket(a),d=e(c.packet),f=c.buffers;f.unshift(d),b(f)}n.removeBlobs(a,c)}function g(){this.reconstructor=null}function h(a){var b={},d=0;if(b.type=Number(a.charAt(0)),null==c.types[b.type])return j();if(c.BINARY_EVENT==b.type||c.BINARY_ACK==b.type){for(var e="";"-"!=a.charAt(++d)&&(e+=a.charAt(d),d!=a.length););if(e!=Number(e)||"-"!=a.charAt(d))throw new Error("Illegal attachments");b.attachments=Number(e)}if("/"==a.charAt(d+1))for(b.nsp="";++d;){var f=a.charAt(d);if(","==f)break;if(b.nsp+=f,d==a.length)break}else b.nsp="/";var g=a.charAt(d+1);if(""!==g&&Number(g)==g){for(b.id="";++d;){var f=a.charAt(d);if(null==f||Number(f)!=f){--d;break}if(b.id+=a.charAt(d),d==a.length)break}b.id=Number(b.id)}if(a.charAt(++d))try{b.data=l.parse(a.substr(d))}catch(h){return j()}return k("decoded %s as %j",a,b),b}function i(a){this.reconPack=a,this.buffers=[]}function j(a){return{type:c.ERROR,data:"parser error"}}var k=a("debug")("socket.io-parser"),l=a("json3"),m=(a("isarray"),a("component-emitter")),n=a("./binary"),o=a("./is-buffer");c.protocol=4,c.types=["CONNECT","DISCONNECT","EVENT","BINARY_EVENT","ACK","BINARY_ACK","ERROR"],c.CONNECT=0,c.DISCONNECT=1,c.EVENT=2,c.ACK=3,c.ERROR=4,c.BINARY_EVENT=5,c.BINARY_ACK=6,c.Encoder=d,c.Decoder=g,d.prototype.encode=function(a,b){if(k("encoding packet %j",a),c.BINARY_EVENT==a.type||c.BINARY_ACK==a.type)f(a,b);else{var d=e(a);b([d])}},m(g.prototype),g.prototype.add=function(a){var b;if("string"==typeof a)b=h(a),c.BINARY_EVENT==b.type||c.BINARY_ACK==b.type?(this.reconstructor=new i(b),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",b)):this.emit("decoded",b);else{if(!o(a)&&!a.base64)throw new Error("Unknown type: "+a);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");b=this.reconstructor.takeBinaryData(a),b&&(this.reconstructor=null,this.emit("decoded",b))}},g.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},i.prototype.takeBinaryData=function(a){if(this.buffers.push(a),this.buffers.length==this.reconPack.attachments){var b=n.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),b}return null},i.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},{"./binary":46,"./is-buffer":48,"component-emitter":49,debug:39,isarray:43,json3:50}],48:[function(a,b,c){(function(a){function c(b){return a.Buffer&&a.Buffer.isBuffer(b)||a.ArrayBuffer&&b instanceof ArrayBuffer}b.exports=c}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],49:[function(a,b,c){arguments[4][15][0].apply(c,arguments)},{dup:15}],50:[function(b,c,d){(function(b){(function(){function e(a,b){function c(a){if(c[a]!==q)return c[a];var e;if("bug-string-char-index"==a)e="a"!="a"[0];else if("json"==a)e=c("json-stringify")&&c("json-parse");else{var g,h='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==a){var i=b.stringify,k="function"==typeof i&&t;if(k){(g=function(){return 1}).toJSON=g;try{k="0"===i(0)&&"0"===i(new d)&&'""'==i(new f)&&i(s)===q&&i(q)===q&&i()===q&&"1"===i(g)&&"[1]"==i([g])&&"[null]"==i([q])&&"null"==i(null)&&"[null,null,null]"==i([q,s,null])&&i({a:[g,!0,!1,null,"\x00\b\n\f\r	"]})==h&&"1"===i(null,g)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new j(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new j(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new j(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new j(-1))}catch(l){k=!1}}e=k}if("json-parse"==a){var m=b.parse;if("function"==typeof m)try{if(0===m("0")&&!m(!1)){g=m(h);var n=5==g.a.length&&1===g.a[0];if(n){try{n=!m('"	"')}catch(l){}if(n)try{n=1!==m("01")}catch(l){}if(n)try{n=1!==m("1.")}catch(l){}}}}catch(l){n=!1}e=n}}return c[a]=!!e}a||(a=i.Object()),b||(b=i.Object());var d=a.Number||i.Number,f=a.String||i.String,h=a.Object||i.Object,j=a.Date||i.Date,k=a.SyntaxError||i.SyntaxError,l=a.TypeError||i.TypeError,m=a.Math||i.Math,n=a.JSON||i.JSON;"object"==typeof n&&n&&(b.stringify=n.stringify,b.parse=n.parse);var o,p,q,r=h.prototype,s=r.toString,t=new j(-0xc782b5b800cec);try{t=-109252==t.getUTCFullYear()&&0===t.getUTCMonth()&&1===t.getUTCDate()&&10==t.getUTCHours()&&37==t.getUTCMinutes()&&6==t.getUTCSeconds()&&708==t.getUTCMilliseconds()}catch(u){}if(!c("json")){var v="[object Function]",w="[object Date]",x="[object Number]",y="[object String]",z="[object Array]",A="[object Boolean]",B=c("bug-string-char-index");if(!t)var C=m.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,b){return D[b]+365*(a-1970)+C((a-1969+(b=+(b>1)))/4)-C((a-1901+b)/100)+C((a-1601+b)/400)};if((o=r.hasOwnProperty)||(o=function(a){var b,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=s?o=function(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:(b=c.constructor,o=function(a){var c=(this.constructor||b).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,o.call(this,a)}),p=function(a,b){var c,d,e,f=0;(c=function(){this.valueOf=0;
}).prototype.valueOf=0,d=new c;for(e in d)o.call(d,e)&&f++;return c=d=null,f?p=2==f?function(a,b){var c,d={},e=s.call(a)==v;for(c in a)e&&"prototype"==c||o.call(d,c)||!(d[c]=1)||!o.call(a,c)||b(c)}:function(a,b){var c,d,e=s.call(a)==v;for(c in a)e&&"prototype"==c||!o.call(a,c)||(d="constructor"===c)||b(c);(d||o.call(a,c="constructor"))&&b(c)}:(d=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],p=function(a,b){var c,e,f=s.call(a)==v,h=!f&&"function"!=typeof a.constructor&&g[typeof a.hasOwnProperty]&&a.hasOwnProperty||o;for(c in a)f&&"prototype"==c||!h.call(a,c)||b(c);for(e=d.length;c=d[--e];h.call(a,c)&&b(c));}),p(a,b)},!c("json-stringify")){var F={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},G="000000",H=function(a,b){return(G+(b||0)).slice(-a)},I="\\u00",J=function(a){for(var b='"',c=0,d=a.length,e=!B||d>10,f=e&&(B?a.split(""):a);d>c;c++){var g=a.charCodeAt(c);switch(g){case 8:case 9:case 10:case 12:case 13:case 34:case 92:b+=F[g];break;default:if(32>g){b+=I+H(2,g.toString(16));break}b+=e?f[c]:a.charAt(c)}}return b+'"'},K=function(a,b,c,d,e,f,g){var h,i,j,k,m,n,r,t,u,v,B,D,F,G,I,L;try{h=b[a]}catch(M){}if("object"==typeof h&&h)if(i=s.call(h),i!=w||o.call(h,"toJSON"))"function"==typeof h.toJSON&&(i!=x&&i!=y&&i!=z||o.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&1/0>h){if(E){for(m=C(h/864e5),j=C(m/365.2425)+1970-1;E(j+1,0)<=m;j++);for(k=C((m-E(j,0))/30.42);E(j,k+1)<=m;k++);m=1+m-E(j,k),n=(h%864e5+864e5)%864e5,r=C(n/36e5)%24,t=C(n/6e4)%60,u=C(n/1e3)%60,v=n%1e3}else j=h.getUTCFullYear(),k=h.getUTCMonth(),m=h.getUTCDate(),r=h.getUTCHours(),t=h.getUTCMinutes(),u=h.getUTCSeconds(),v=h.getUTCMilliseconds();h=(0>=j||j>=1e4?(0>j?"-":"+")+H(6,0>j?-j:j):H(4,j))+"-"+H(2,k+1)+"-"+H(2,m)+"T"+H(2,r)+":"+H(2,t)+":"+H(2,u)+"."+H(3,v)+"Z"}else h=null;if(c&&(h=c.call(b,a,h)),null===h)return"null";if(i=s.call(h),i==A)return""+h;if(i==x)return h>-1/0&&1/0>h?""+h:"null";if(i==y)return J(""+h);if("object"==typeof h){for(G=g.length;G--;)if(g[G]===h)throw l();if(g.push(h),B=[],I=f,f+=e,i==z){for(F=0,G=h.length;G>F;F++)D=K(F,h,c,d,e,f,g),B.push(D===q?"null":D);L=B.length?e?"[\n"+f+B.join(",\n"+f)+"\n"+I+"]":"["+B.join(",")+"]":"[]"}else p(d||h,function(a){var b=K(a,h,c,d,e,f,g);b!==q&&B.push(J(a)+":"+(e?" ":"")+b)}),L=B.length?e?"{\n"+f+B.join(",\n"+f)+"\n"+I+"}":"{"+B.join(",")+"}":"{}";return g.pop(),L}};b.stringify=function(a,b,c){var d,e,f,h;if(g[typeof b]&&b)if((h=s.call(b))==v)e=b;else if(h==z){f={};for(var i,j=0,k=b.length;k>j;i=b[j++],h=s.call(i),(h==y||h==x)&&(f[i]=1));}if(c)if((h=s.call(c))==x){if((c-=c%1)>0)for(d="",c>10&&(c=10);d.length<c;d+=" ");}else h==y&&(d=c.length<=10?c:c.slice(0,10));return K("",(i={},i[""]=a,i),e,f,d,"",[])}}if(!c("json-parse")){var L,M,N=f.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},P=function(){throw L=M=null,k()},Q=function(){for(var a,b,c,d,e,f=M,g=f.length;g>L;)switch(e=f.charCodeAt(L)){case 9:case 10:case 13:case 32:L++;break;case 123:case 125:case 91:case 93:case 58:case 44:return a=B?f.charAt(L):f[L],L++,a;case 34:for(a="@",L++;g>L;)if(e=f.charCodeAt(L),32>e)P();else if(92==e)switch(e=f.charCodeAt(++L)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:a+=O[e],L++;break;case 117:for(b=++L,c=L+4;c>L;L++)e=f.charCodeAt(L),e>=48&&57>=e||e>=97&&102>=e||e>=65&&70>=e||P();a+=N("0x"+f.slice(b,L));break;default:P()}else{if(34==e)break;for(e=f.charCodeAt(L),b=L;e>=32&&92!=e&&34!=e;)e=f.charCodeAt(++L);a+=f.slice(b,L)}if(34==f.charCodeAt(L))return L++,a;P();default:if(b=L,45==e&&(d=!0,e=f.charCodeAt(++L)),e>=48&&57>=e){for(48==e&&(e=f.charCodeAt(L+1),e>=48&&57>=e)&&P(),d=!1;g>L&&(e=f.charCodeAt(L),e>=48&&57>=e);L++);if(46==f.charCodeAt(L)){for(c=++L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}if(e=f.charCodeAt(L),101==e||69==e){for(e=f.charCodeAt(++L),(43==e||45==e)&&L++,c=L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}return+f.slice(b,L)}if(d&&P(),"true"==f.slice(L,L+4))return L+=4,!0;if("false"==f.slice(L,L+5))return L+=5,!1;if("null"==f.slice(L,L+4))return L+=4,null;P()}return"$"},R=function(a){var b,c;if("$"==a&&P(),"string"==typeof a){if("@"==(B?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];a=Q(),"]"!=a;c||(c=!0))c&&(","==a?(a=Q(),"]"==a&&P()):P()),","==a&&P(),b.push(R(a));return b}if("{"==a){for(b={};a=Q(),"}"!=a;c||(c=!0))c&&(","==a?(a=Q(),"}"==a&&P()):P()),(","==a||"string"!=typeof a||"@"!=(B?a.charAt(0):a[0])||":"!=Q())&&P(),b[a.slice(1)]=R(Q());return b}P()}return a},S=function(a,b,c){var d=T(a,b,c);d===q?delete a[b]:a[b]=d},T=function(a,b,c){var d,e=a[b];if("object"==typeof e&&e)if(s.call(e)==z)for(d=e.length;d--;)S(e,d,c);else p(e,function(a){S(e,a,c)});return c.call(a,b,e)};b.parse=function(a,b){var c,d;return L=0,M=""+a,c=R(Q()),"$"!=Q()&&P(),L=M=null,b&&s.call(b)==v?T((d={},d[""]=c,d),"",b):c}}}return b.runInContext=e,b}var f="function"==typeof a&&a.amd,g={"function":!0,object:!0},h=g[typeof d]&&d&&!d.nodeType&&d,i=g[typeof window]&&window||this,j=h&&g[typeof c]&&c&&!c.nodeType&&"object"==typeof b&&b;if(!j||j.global!==j&&j.window!==j&&j.self!==j||(i=j),h&&!f)e(i,h);else{var k=i.JSON,l=i.JSON3,m=!1,n=e(i,i.JSON3={noConflict:function(){return m||(m=!0,i.JSON=k,i.JSON3=l,k=l=null),n}});i.JSON={parse:n.parse,stringify:n.stringify}}f&&a(function(){return n})}).call(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],51:[function(a,b,c){function d(a,b){var c=[];b=b||0;for(var d=b||0;d<a.length;d++)c[d-b]=a[d];return c}b.exports=d},{}]},{},[31])(31)});;

//////////////////////////////////////////////////////////////////////////////////////
 //                                                                                //
 //  ███████╗ █████╗ ██╗██╗     ███████╗   ██╗ ██████╗         ██╗███████╗         //
 //  ██╔════╝██╔══██╗██║██║     ██╔════╝   ██║██╔═══██╗        ██║██╔════╝         //
 //  ███████╗███████║██║██║     ███████╗   ██║██║   ██║        ██║███████╗         //
 //  ╚════██║██╔══██║██║██║     ╚════██║   ██║██║   ██║   ██   ██║╚════██║         //
 //  ███████║██║  ██║██║███████╗███████║██╗██║╚██████╔╝██╗╚█████╔╝███████║         //
 //  ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚═╝╚═╝ ╚═════╝ ╚═╝ ╚════╝ ╚══════╝         //
 //                                                                                //
 //   ╦╔═╗╦  ╦╔═╗╔═╗╔═╗╦═╗╦╔═╗╔╦╗  ╔═╗╦  ╦╔═╗╔╗╔╔╦╗  ╔═╗╔╦╗╦╔═                     //
 //   ║╠═╣╚╗╔╝╠═╣╚═╗║  ╠╦╝║╠═╝ ║   ║  ║  ║║╣ ║║║ ║   ╚═╗ ║║╠╩╗                     //
 //  ╚╝╩ ╩ ╚╝ ╩ ╩╚═╝╚═╝╩╚═╩╩   ╩   ╚═╝╩═╝╩╚═╝╝╚╝ ╩   ╚═╝═╩╝╩ ╩                     //
 //  ┌─┐┌─┐┬─┐  ┌┐┌┌─┐┌┬┐┌─┐  ┬┌─┐  ┌─┐┌┐┌┌┬┐  ┌┬┐┬ ┬┌─┐  ┌┐ ┬─┐┌─┐┬ ┬┌─┐┌─┐┬─┐    //
 //  ├┤ │ │├┬┘  ││││ │ ││├┤   │└─┐  ├─┤│││ ││   │ ├─┤├┤   ├┴┐├┬┘│ ││││└─┐├┤ ├┬┘    //
 //  └  └─┘┴└─  ┘└┘└─┘─┴┘└─┘o└┘└─┘  ┴ ┴┘└┘─┴┘   ┴ ┴ ┴└─┘  └─┘┴└─└─┘└┴┘└─┘└─┘┴└─    //
 //                                                                                //
//////////////////////////////////////////////////////////////////////////////////////

/**
 * sails.io.js
 * ------------------------------------------------------------------------
 * JavaScript Client (SDK) for communicating with Sails.
 *
 * Note that this script is completely optional, but it is handy if you're
 * using WebSockets from the browser to talk to your Sails server.
 *
 * For tips and documentation, visit:
 * http://sailsjs.org/#!documentation/reference/BrowserSDK/BrowserSDK.html
 * ------------------------------------------------------------------------
 *
 * This file allows you to send and receive socket.io messages to & from Sails
 * by simulating a REST client interface on top of socket.io. It models its API
 * after the $.ajax pattern from jQuery you might already be familiar with.
 *
 * So if you're switching from using AJAX to sockets, instead of:
 *    `$.post( url, [data], [cb] )`
 *
 * You would use:
 *    `socket.post( url, [data], [cb] )`
 */


(function() {


  //   ██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ███╗   ██╗████████╗███████╗
  //  ██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗████╗  ██║╚══██╔══╝██╔════╝
  //  ██║     ██║   ██║██╔██╗ ██║███████╗   ██║   ███████║██╔██╗ ██║   ██║   ███████╗
  //  ██║     ██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║╚██╗██║   ██║   ╚════██║
  //  ╚██████╗╚██████╔╝██║ ╚████║███████║   ██║   ██║  ██║██║ ╚████║   ██║   ███████║
  //   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
  //


  /**
   * Constant containing the names of all available options
   * for individual sockets.
   *
   * @type {Array}
   */
  var SOCKET_OPTIONS = [
    'useCORSRouteToGetCookie',
    'url',
    'multiplex',
    'transports',
    'query',
    'path',
    'headers',
    'initialConnectionHeaders',
    'reconnection',
    'reconnectionAttempts',
    'reconnectionDelay',
    'reconnectionDelayMax',
    'rejectUnauthorized',
    'randomizationFactor',
    'timeout'
  ];


  /**
   * Constant containing the names of properties on `io.sails` which
   * may be configured using HTML attributes on the script tag which
   * loaded this file.
   *
   * @type {Array}
   *
   * (this is unused if loading from node.js)
   */
  var CONFIGURABLE_VIA_HTML_ATTR = [
    'autoConnect',
    'environment',
    'headers',
    'url',
    'transports',
    'path'
  ];




  /**
   * Constant containing the names of querystring
   * parameters sent when connecting any SailsSocket.
   *
   * @type {Dictionary}
   */
  var CONNECTION_METADATA_PARAMS = {
    version: '__sails_io_sdk_version',
    platform: '__sails_io_sdk_platform',
    language: '__sails_io_sdk_language'
  };


  /**
   * Constant containing metadata about the platform, language, and
   * current version of this SDK.
   *
   * @type {Dictionary}
   */
  var SDK_INFO = {
    version: '0.13.8', // <-- pulled automatically from package.json, do not change!
    language: 'javascript',
    platform: (function (){
      if (typeof module === 'object' && typeof module.exports !== 'undefined') {
        return 'node';
      }
      else {
        return 'browser';
      }
    })()
  };

  // Build `versionString` (a querystring snippet) by
  // combining SDK_INFO and CONNECTION_METADATA_PARAMS.
  SDK_INFO.versionString =
    CONNECTION_METADATA_PARAMS.version + '=' + SDK_INFO.version + '&' +
    CONNECTION_METADATA_PARAMS.platform + '=' + SDK_INFO.platform + '&' +
    CONNECTION_METADATA_PARAMS.language + '=' + SDK_INFO.language;




  //   █████╗ ██████╗ ███████╗ ██████╗ ██████╗ ██████╗     ██╗  ██╗████████╗███╗   ███╗██╗
  //  ██╔══██╗██╔══██╗██╔════╝██╔═══██╗██╔══██╗██╔══██╗    ██║  ██║╚══██╔══╝████╗ ████║██║
  //  ███████║██████╔╝███████╗██║   ██║██████╔╝██████╔╝    ███████║   ██║   ██╔████╔██║██║
  //  ██╔══██║██╔══██╗╚════██║██║   ██║██╔══██╗██╔══██╗    ██╔══██║   ██║   ██║╚██╔╝██║██║
  //  ██║  ██║██████╔╝███████║╚██████╔╝██║  ██║██████╔╝    ██║  ██║   ██║   ██║ ╚═╝ ██║███████╗
  //  ╚═╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝
  //
  //   █████╗ ████████╗████████╗██████╗ ██╗██████╗ ██╗   ██╗████████╗███████╗███████╗
  //  ██╔══██╗╚══██╔══╝╚══██╔══╝██╔══██╗██║██╔══██╗██║   ██║╚══██╔══╝██╔════╝██╔════╝
  //  ███████║   ██║      ██║   ██████╔╝██║██████╔╝██║   ██║   ██║   █████╗  ███████╗
  //  ██╔══██║   ██║      ██║   ██╔══██╗██║██╔══██╗██║   ██║   ██║   ██╔══╝  ╚════██║
  //  ██║  ██║   ██║      ██║   ██║  ██║██║██████╔╝╚██████╔╝   ██║   ███████╗███████║
  //  ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝╚═╝╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚══════╝
  //
  //  ███████╗██████╗  ██████╗ ███╗   ███╗      ██╗███████╗ ██████╗██████╗ ██╗██████╗ ████████╗██╗
  //  ██╔════╝██╔══██╗██╔═══██╗████╗ ████║     ██╔╝██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝╚██╗
  //  █████╗  ██████╔╝██║   ██║██╔████╔██║    ██╔╝ ███████╗██║     ██████╔╝██║██████╔╝   ██║    ╚██╗
  //  ██╔══╝  ██╔══██╗██║   ██║██║╚██╔╝██║    ╚██╗ ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║    ██╔╝
  //  ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║     ╚██╗███████║╚██████╗██║  ██║██║██║        ██║   ██╔╝
  //  ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝      ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚═╝
  //
  //
  // If available, grab the DOM element for the script tag which imported this file.
  // (skip this if this SDK is being used outside of the DOM, i.e. in a Node process)
  //
  // This is used below to parse client-side sails.io.js configuration encoded as
  // HTML attributes, as well as grabbing hold of the URL from whence the SDK was fetched.
  var thisScriptTag = (function() {
    if (
      typeof window !== 'object' ||
      typeof window.document !== 'object' ||
      typeof window.document.getElementsByTagName !== 'function'
    ) {
      return null;
    }

    // Return the URL of the last script loaded (i.e. this one)
    // (this must run before nextTick; see http://stackoverflow.com/a/2976714/486547)
    var allScriptsCurrentlyInDOM = window.document.getElementsByTagName('script');
    return allScriptsCurrentlyInDOM[allScriptsCurrentlyInDOM.length - 1];
  })();


  // Variables to contain src URL and other script tag config (for use below).
  var urlThisScriptWasFetchedFrom = '';
  var scriptTagConfig = {};


  if (thisScriptTag) {
    // Save the URL that this script was fetched from.
    urlThisScriptWasFetchedFrom = thisScriptTag.src;

    // Now parse the most common client-side configuration settings
    // from the script tag where they may be encoded as HTML attributes.
    //
    // Any configuration which may be provided as an HTML attribute may
    // also be provided prefixed with `data-`.  This is for folks who
    // need to support browsers that have issues with nonstandard
    // HTML attributes (or if the idea of using nonstandard HTML attributes
    // just creeps you out)
    //
    // If a `data-` prefixed attr is provided, it takes precedence.
    // (this is so that if you are already using one of these HTML
    //  attrs for some reason, you can keep it as-is and override
    //  it using `data-`. If you are using the `data-` prefixed version
    //  for some other purpose... well, in that case you'll just have to
    //  configure programmatically using `io.sails` instead.)
    CONFIGURABLE_VIA_HTML_ATTR.forEach(function (configKey){

      scriptTagConfig[configKey] = (function (){

        // Support 'data-' prefixed or normal attributes.
        // (prefixed versions take precedence if provided)
        var htmlAttrVal = thisScriptTag.getAttribute( 'data-'+configKey );
        if (!htmlAttrVal) {
          htmlAttrVal = thisScriptTag.getAttribute( configKey );
        }

        // The HTML attribute value should always be a string or `null`.
        // We'll try to parse it as JSON and use that, but worst case fall back
        // to the default situation of it being a string.
        if (typeof htmlAttrVal === 'string') {
          try { return JSON.parse(htmlAttrVal); } catch (e) { return htmlAttrVal; }
        }
        // If `null` was returned from getAttribute(), it means that the HTML attribute
        // was not specified, so we treat it as undefined (which will cause the property
        // to be removed below)
        else if (htmlAttrVal === null) {
          return undefined;
        }
        // Any other contingency shouldn't be possible:
        // - if no quotes are used in the HTML attribute, it still comes in as a string.
        // - if no RHS is provided for the attribute, it still comes in as "" (empty string)
        // (but we still handle this with an explicit error just in case--for debugging and support purposes)
        else throw new Error('sails.io.js :: Unexpected/invalid script tag configuration for `'+configKey+'`: `'+htmlAttrVal+'` (a `'+typeof htmlAttrVal+'`). Should be a string.');
      })();

      if (scriptTagConfig[configKey] === undefined){
        delete scriptTagConfig[configKey];
      }
    });



    // Now that they've been parsed, do an extremely lean version of
    // logical type validation/coercion of provided values.
    //////////////////////////////////////////////////////////////////

    // `autoConnect`
    if (typeof scriptTagConfig.autoConnect !== 'undefined') {
      if (scriptTagConfig.autoConnect === '') {
        // Special case for empty string.  It means `true` (see above).
        scriptTagConfig.autoConnect = true;
      }
      else if (typeof scriptTagConfig.autoConnect !== 'boolean') {
        throw new Error('sails.io.js :: Unexpected/invalid configuration for `autoConnect` provided in script tag: `'+scriptTagConfig.autoConnect+'` (a `'+typeof scriptTagConfig.autoConnect+'`). Should be a boolean.');
      }
    }


    // `environment`
    if (typeof scriptTagConfig.environment !== 'undefined') {
      if (typeof scriptTagConfig.environment !== 'string') {
        throw new Error('sails.io.js :: Unexpected/invalid configuration for `environment` provided in script tag: `'+scriptTagConfig.environment+'` (a `'+typeof scriptTagConfig.environment+'`). Should be a string.');
      }
    }


    // `headers`
    if (typeof scriptTagConfig.headers !== 'undefined') {
      if (typeof scriptTagConfig.headers !== 'object' || Array.isArray(scriptTagConfig.headers)) {
        throw new Error('sails.io.js :: Unexpected/invalid configuration for `headers` provided in script tag: `'+scriptTagConfig.headers+'` (a `'+typeof scriptTagConfig.headers+'`). Should be a JSON-compatible dictionary (i.e. `{}`).  Don\'t forget those double quotes (""), even on key names!  Use single quotes (\'\') to wrap the HTML attribute value; e.g. `headers=\'{"X-Auth": "foo"}\'`');
      }
    }


    // `url`
    if (typeof scriptTagConfig.url !== 'undefined') {
      if (typeof scriptTagConfig.url !== 'string') {
        throw new Error('sails.io.js :: Unexpected/invalid configuration for `url` provided in script tag: `'+scriptTagConfig.url+'` (a `'+typeof scriptTagConfig.url+'`). Should be a string.');
      }
    }

    // OTHER `io.sails` options are NOT CURRENTLY SUPPORTED VIA HTML ATTRIBUTES.
  }




  // Grab a reference to the global socket.io client (if one is available).
  // This is used via closure below to determine which `io` to use when the
  // socket.io client instance (`io`) is augmented to become the Sails client
  // SDK instance (still `io`).
  var _existingGlobalSocketIO = (typeof io !== 'undefined') ? io : undefined;




  //////////////////////////////////////////////////////////////
  /////
  ///// NOW FOR BUNCHES OF:
  /////  - PRIVATE FUNCTION DEFINITIONS
  /////  - CONSTRUCTORS
  /////  - AND METHODS
  /////
  //////////////////////////////////////////////////////////////
  //



  //  ███████╗ █████╗ ██╗██╗     ███████╗      ██╗ ██████╗        ██████╗██╗     ██╗███████╗███╗   ██╗████████╗
  //  ██╔════╝██╔══██╗██║██║     ██╔════╝      ██║██╔═══██╗      ██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝
  //  ███████╗███████║██║██║     ███████╗█████╗██║██║   ██║█████╗██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║
  //  ╚════██║██╔══██║██║██║     ╚════██║╚════╝██║██║   ██║╚════╝██║     ██║     ██║██╔══╝  ██║╚██╗██║   ██║
  //  ███████║██║  ██║██║███████╗███████║      ██║╚██████╔╝      ╚██████╗███████╗██║███████╗██║ ╚████║   ██║
  //  ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝      ╚═╝ ╚═════╝        ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝
  //

  /**
   * SailsIOClient()
   *
   * Augment the provided Socket.io client object (`io`) with methods for
   * talking and listening to one or more Sails backend(s).  If no `io` was
   * provided (i.e. in a browser setting), then attempt to use the global.
   *
   * This absorbs implicit `io.sails` configuration, sets a timer for
   * automatically connecting a socket (if `io.sails.autoConnect` is enabled)
   * and returns the augmented `io`.
   *
   * Note:
   * The automatically-connected socket is exposed as `io.socket`.  If this
   * socket attempts to bind event listeners or send requests before it is
   * connected, it will be queued up and replayed when the connection is
   * successfully opened.
   *
   * @param {SocketIO} io
   * @returns {SailsIOClient} [also called `io`]
   */

  function SailsIOClient(_providedSocketIO) {

    // First, determine which `io` we're augmenting.
    //
    // Prefer the passed-in `io` instance, but fall back to the
    // global one if we've got it.
    var io;
    if (_providedSocketIO) {
      io = _providedSocketIO;
    }
    else {
      io = _existingGlobalSocketIO;
    }
    // (note that for readability, we deliberately do not short circuit or use the tertiary operator above)


    // If a socket.io client (`io`) is not available, none of this will work.
    if (!io) {
      // If node:
      if (SDK_INFO.platform === 'node') {
        throw new Error('No socket.io client available.  When requiring `sails.io.js` from Node.js, a socket.io client (`io`) must be passed in; e.g.:\n```\nvar io = require(\'sails.io.js\')( require(\'socket.io-client\') )\n```\n(see https://github.com/balderdashy/sails.io.js/tree/master/test for more examples)');
      }
      // Otherwise, this is a web browser:
      else {
        throw new Error('The Sails socket SDK depends on the socket.io client, but the socket.io global (`io`) was not available when `sails.io.js` loaded.  Normally, the socket.io client code is bundled with sails.io.js, so something is a little off.  Please check to be sure this version of `sails.io.js` has the minified Socket.io client at the top of the file.');
      }
    }

    // If the chosen socket.io client (`io`) has ALREADY BEEN AUGMENTED by this SDK,
    // (i.e. if it already has a `.sails` property) then throw an error.
    if (io.sails) {
      // If node:
      if (SDK_INFO.platform === 'node') {
        throw new Error('The provided socket.io client (`io`) has already been augmented into a Sails socket SDK instance (it has `io.sails`).');
      }
      // Otherwise, this is a web browser:
      else {
        throw new Error('The socket.io client (`io`) has already been augmented into a Sails socket SDK instance.  Usually, this means you are bringing `sails.io.js` onto the page more than once.');
      }
    }


    /**
     * A little logger for this library to use internally.
     * Basically just a wrapper around `console.log` with
     * support for feature-detection.
     *
     * @api private
     * @factory
     */
    function LoggerFactory(options) {
      options = options || {
        prefix: true
      };

      // If `console.log` is not accessible, `log` is a noop.
      if (
        typeof console !== 'object' ||
        typeof console.log !== 'function' ||
        typeof console.log.bind !== 'function'
      ) {
        return function noop() {};
      }

      return function log() {
        var args = Array.prototype.slice.call(arguments);

        // All logs are disabled when `io.sails.environment = 'production'`.
        if (io.sails.environment === 'production') return;

        // Add prefix to log messages (unless disabled)
        var PREFIX = '';
        if (options.prefix) {
          args.unshift(PREFIX);
        }

        // Call wrapped logger
        console.log
          .bind(console)
          .apply(this, args);
      };
    }//</LoggerFactory>

    // Create a private logger instance
    var consolog = LoggerFactory();
    consolog.noPrefix = LoggerFactory({
      prefix: false
    });



    /**
     * What is the `requestQueue`?
     *
     * The request queue is used to simplify app-level connection logic--
     * i.e. so you don't have to wait for the socket to be connected
     * to start trying to  synchronize data.
     *
     * @api private
     * @param  {SailsSocket}  socket
     */

    function runRequestQueue (socket) {
      var queue = socket.requestQueue;

      if (!queue) return;
      for (var i in queue) {

        // Double-check that `queue[i]` will not
        // inadvertently discover extra properties attached to the Object
        // and/or Array prototype by other libraries/frameworks/tools.
        // (e.g. Ember does this. See https://github.com/balderdashy/sails.io.js/pull/5)
        var isSafeToDereference = ({}).hasOwnProperty.call(queue, i);
        if (isSafeToDereference) {
          // Get the arguments that were originally made to the "request" method
          var requestArgs = queue[i];
          // Call the request method again in the context of the socket, with the original args
          socket.request.apply(socket, requestArgs);
        }
      }

      // Now empty the queue to remove it as a source of additional complexity.
      socket.requestQueue = null;
    }



    /**
     * Send a JSONP request.
     *
     * @param  {Object}   opts [optional]
     * @param  {Function} cb
     * @return {XMLHttpRequest}
     */

    function jsonp(opts, cb) {
      opts = opts || {};

      if (typeof window === 'undefined') {
        // TODO: refactor node usage to live in here
        return cb();
      }

      var scriptEl = document.createElement('script');
      window._sailsIoJSConnect = function(response) {
        // In rare circumstances our script may have been vaporised.
        // Remove it, but only if it still exists
        // https://github.com/balderdashy/sails.io.js/issues/92
        if (scriptEl && scriptEl.parentNode) {
            scriptEl.parentNode.removeChild(scriptEl);
        }

        cb(response);
      };
      scriptEl.src = opts.url;
      document.getElementsByTagName('head')[0].appendChild(scriptEl);

    }


 
    /**
     * The JWR (JSON WebSocket Response) received from a Sails server.
     *
     * @api public
     * @param  {Object}  responseCtx
     *         => :body
     *         => :statusCode
     *         => :headers
     *
     * @constructor
     */

    function JWR(responseCtx) {
      this.body = responseCtx.body || {};
      this.headers = responseCtx.headers || {};
      this.statusCode = responseCtx.statusCode || 200;
      if (this.statusCode < 200 || this.statusCode >= 400) {
        this.error = this.body || this.statusCode;
      }
    }
    JWR.prototype.toString = function() {
      return '[ResponseFromSails]' + '  -- ' +
        'Status: ' + this.statusCode + '  -- ' +
        'Headers: ' + this.headers + '  -- ' +
        'Body: ' + this.body;
    };
    JWR.prototype.toPOJO = function() {
      return {
        body: this.body,
        headers: this.headers,
        statusCode: this.statusCode
      };
    };
    JWR.prototype.pipe = function() {
      // TODO: look at substack's stuff
      return new Error('Client-side streaming support not implemented yet.');
    };




    //          ███████╗███╗   ███╗██╗████████╗███████╗██████╗  ██████╗ ███╗   ███╗ ██╗██╗
    //          ██╔════╝████╗ ████║██║╚══██╔══╝██╔════╝██╔══██╗██╔═══██╗████╗ ████║██╔╝╚██╗
    //          █████╗  ██╔████╔██║██║   ██║   █████╗  ██████╔╝██║   ██║██╔████╔██║██║  ██║
    //          ██╔══╝  ██║╚██╔╝██║██║   ██║   ██╔══╝  ██╔══██╗██║   ██║██║╚██╔╝██║██║  ██║
    //  ███████╗███████╗██║ ╚═╝ ██║██║   ██║   ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║╚██╗██╔╝
    //  ╚══════╝╚══════╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝ ╚═╝╚═╝
    //

    /**
     * @api private
     * @param  {SailsSocket} socket  [description]
     * @param  {Object} requestCtx [description]
     */

    function _emitFrom(socket, requestCtx) {

      if (!socket._raw) {
        throw new Error('Failed to emit from socket- raw SIO socket is missing.');
      }

      // Since callback is embedded in requestCtx,
      // retrieve it and delete the key before continuing.
      var cb = requestCtx.cb;
      delete requestCtx.cb;

      // Name of the appropriate socket.io listener on the server
      // ( === the request method or "verb", e.g. 'get', 'post', 'put', etc. )
      var sailsEndpoint = requestCtx.method;

      socket._raw.emit(sailsEndpoint, requestCtx, function serverResponded(responseCtx) {

        // Send back (emulatedHTTPBody, jsonWebSocketResponse)
        if (cb) {
          cb(responseCtx.body, new JWR(responseCtx));
        }
      });
    }







    //  ███████╗ █████╗ ██╗██╗     ███████╗███████╗ ██████╗  ██████╗██╗  ██╗███████╗████████╗
    //  ██╔════╝██╔══██╗██║██║     ██╔════╝██╔════╝██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝
    //  ███████╗███████║██║██║     ███████╗███████╗██║   ██║██║     █████╔╝ █████╗     ██║
    //  ╚════██║██╔══██║██║██║     ╚════██║╚════██║██║   ██║██║     ██╔═██╗ ██╔══╝     ██║
    //  ███████║██║  ██║██║███████╗███████║███████║╚██████╔╝╚██████╗██║  ██╗███████╗   ██║
    //  ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝
    //

    /**
     * SailsSocket
     *
     * A wrapper for an underlying Socket instance that communicates directly
     * to the Socket.io server running inside of Sails.
     *
     * If no `socket` option is provied, SailsSocket will function as a mock. It will queue socket
     * requests and event handler bindings, replaying them when the raw underlying socket actually
     * connects. This is handy when we don't necessarily have the valid configuration to know
     * WHICH SERVER to talk to yet, etc.  It is also used by `io.socket` for your convenience.
     *
     * @constructor
     * @api private
     *
     * ----------------------------------------------------------------------
     * Note: This constructor should not be used directly. To obtain a `SailsSocket`
     * instance of your very own, run:
     * ```
     * var mySocket = io.sails.connect();
     * ```
     * ----------------------------------------------------------------------
     */
    function SailsSocket (opts){
      var self = this;
      opts = opts||{};

      // Set up connection options so that they can only be changed when socket is disconnected.
      var _opts = {};
      SOCKET_OPTIONS.forEach(function(option) {
        // Okay to change global headers while socket is connected
        if (option == 'headers') {return;}
        Object.defineProperty(self, option, {
          get: function() {
            if (option == 'url') {
              return _opts[option] || (self._raw && self._raw.io && self._raw.io.uri);
            }
            return _opts[option];
          },
          set: function(value) {
            // Don't allow value to be changed while socket is connected
            if (self.isConnected() && io.sails.strict !== false && value != _opts[option]) {
              throw new Error('Cannot change value of `' + option + '` while socket is connected.');
            }
            // If socket is attempting to reconnect, stop it.
            if (self._raw && self._raw.io && self._raw.io.reconnecting && !self._raw.io.skipReconnect) {
              self._raw.io.skipReconnect = true;
              consolog('Stopping reconnect; use .reconnect() to connect socket after changing options.');
            }
            _opts[option] = value;
          }
        });
      });

      // Absorb opts into SailsSocket instance
      // See https://sailsjs.org/reference/websockets/sails.io.js/SailsSocket/properties.md
      // for description of options
      SOCKET_OPTIONS.forEach(function(option) {
        self[option] = opts[option];
      });

      // Set up "eventQueue" to hold event handlers which have not been set on the actual raw socket yet.
      self.eventQueue = {};

      // Listen for special `parseError` event sent from sockets hook on the backend
      // if an error occurs but a valid callback was not received from the client
      // (i.e. so the server had no other way to send back the error information)
      self.on('sails:parseError', function (err){
        consolog('Sails encountered an error parsing a socket message sent from this client, and did not have access to a callback function to respond with.');
        consolog('Error details:',err);
      });

      // TODO:
      // Listen for a special private message on any connected that allows the server
      // to set the environment (giving us 100% certainty that we guessed right)
      // However, note that the `console.log`s called before and after connection
      // are still forced to rely on our existing heuristics (to disable, tack #production
      // onto the URL used to fetch this file.)
    }//</SailsSocket>


    /**
     * `SailsSocket.prototype._connect()`
     *
     * Begin connecting this socket to the server.
     *
     * @api private
     */
    SailsSocket.prototype._connect = function (){
      var self = this;

      self.isConnecting = true;

      // Apply `io.sails` config as defaults
      // (now that at least one tick has elapsed)
      // See https://sailsjs.org/reference/websockets/sails.io.js/SailsSocket/properties.md
      // for description of options and default values
      SOCKET_OPTIONS.forEach(function(option) {
        if ('undefined' == typeof self[option]) {
          self[option] = io.sails[option];
        }
      });

      // Headers that will be sent with the initial request to /socket.io (Node.js only)
      self.extraHeaders = self.initialConnectionHeaders || {};

      // Log a warning if non-Node.js platform attempts to use `initialConnectionHeaders`
      if (self.initialConnectionHeaders && SDK_INFO.platform !== 'node') {
        if (typeof console === 'object' && typeof console.warn === 'function') {
          console.warn('initialConnectionHeaders option available in Node.js only!');
        }
      }

      // Ensure URL has no trailing slash
      self.url = self.url ? self.url.replace(/(\/)$/, '') : undefined;

      // Mix the current SDK version into the query string in
      // the connection request to the server:
      if (typeof self.query !== 'string') self.query = SDK_INFO.versionString;
      else self.query += '&' + SDK_INFO.versionString;

      // Determine whether this is a cross-origin socket by examining the
      // hostname and port on the `window.location` object.  If it's cross-origin,
      // we'll attempt to get a cookie for the domain so that a Sails session can
      // be established.
      var isXOrigin = (function (){

        // If `window` doesn't exist (i.e. being used from Node.js), then
        // we won't bother attempting to get a cookie.  If you're using sockets
        // from Node.js and find you need to share a session between multiple
        // socket connections, you'll need to make an HTTP request to the /__getcookie
        // endpoint of the Sails server (or any endpoint that returns a set-cookie header)
        // and then use the cookie value in the `initialConnectionHeaders` option to
        // io.sails.connect()
        if (typeof window === 'undefined' || typeof window.location === 'undefined') {
          return false;
        }

        // If `self.url` (aka "target") is falsy, then we don't need to worry about it.
        if (typeof self.url !== 'string') { return false; }

        // Get information about the "target" (`self.url`)
        var targetProtocol = (function (){
          try {
            targetProtocol = self.url.match(/^([a-z]+:\/\/)/i)[1].toLowerCase();
          }
          catch (e) {}
          targetProtocol = targetProtocol || 'http://';
          return targetProtocol;
        })();
        var isTargetSSL = !!self.url.match('^https');
        var targetPort = (function (){
          try {
            return self.url.match(/^[a-z]+:\/\/[^:]*:([0-9]*)/i)[1];
          }
          catch (e){}
          return isTargetSSL ? '443' : '80';
        })();
        var targetAfterProtocol = self.url.replace(/^([a-z]+:\/\/)/i, '');


        // If target protocol is different than the actual protocol,
        // then we'll consider this cross-origin.
        if (targetProtocol.replace(/[:\/]/g, '') !== window.location.protocol.replace(/[:\/]/g,'')) {
          return true;
        }


        // If target hostname is different than actual hostname, we'll consider this cross-origin.
        var hasSameHostname = targetAfterProtocol.search(window.location.hostname) === 0;
        if (!hasSameHostname) {
          return true;
        }

        // If no actual port is explicitly set on the `window.location` object,
        // we'll assume either 80 or 443.
        var isLocationSSL = window.location.protocol.match(/https/i);
        var locationPort = (window.location.port+'') || (isLocationSSL ? '443' : '80');

        // Finally, if ports don't match, we'll consider this cross-origin.
        if (targetPort !== locationPort) {
          return true;
        }

        // Otherwise, it's the same origin.
        return false;

      })();


      // Prepare to start connecting the socket
      (function selfInvoking (cb){

        // If this is an attempt at a cross-origin or cross-port
        // socket connection via a browswe, send a JSONP request
        // first to ensure that a valid cookie is available.
        // This can be disabled by setting `io.sails.useCORSRouteToGetCookie`
        // to false.
        //
        // Otherwise, skip the stuff below.
        //
        if (!(self.useCORSRouteToGetCookie && isXOrigin)) {
          return cb();
        }

        // Figure out the x-origin CORS route
        // (Sails provides a default)
        var xOriginCookieURL = self.url;
        if (typeof self.useCORSRouteToGetCookie === 'string') {
          xOriginCookieURL += self.useCORSRouteToGetCookie;
        }
        else {
          xOriginCookieURL += '/__getcookie';
        }

        // Make the AJAX request (CORS)
        jsonp({
          url: xOriginCookieURL,
          method: 'GET'
        }, cb);

      })(function goAheadAndActuallyConnect() {

        // Now that we're ready to connect, create a raw underlying Socket
        // using Socket.io and save it as `_raw` (this will start it connecting)
        self._raw = io(self.url, self);

        // Replay event bindings from the eager socket
        self.replay();


        /**
         * 'connect' event is triggered when the socket establishes a connection
         *  successfully.
         */
        self.on('connect', function socketConnected() {
          self.isConnecting = false;
          // consolog.noPrefix(
          //   '\n' +
          //   '\n' +
          //   // '    |>    ' + '\n' +
          //   // '  \\___/  '+️
          //   // '\n'+
          //    '  |>    Now connected to Sails.' + '\n' +
          //   '\\___/   For help, see: http://bit.ly/1DmTvgK' + '\n' +
          //    '        (using sails.io.js '+io.sails.sdk.platform+' SDK @v'+io.sails.sdk.version+')'+ '\n' +
          //   '\n'+
          //   '\n'+
          //   // '\n'+
          //   ''
          //   // ' ⚓︎ (development mode)'
          //   // 'e.g. to send a GET request to Sails via WebSockets, run:'+ '\n' +
          //   // '`io.socket.get("/foo", function serverRespondedWith (body, jwr) { console.log(body); })`'+ '\n' +
          // );
        });

        self.on('disconnect', function() {
          self.connectionLostTimestamp = (new Date()).getTime();
          consolog('====================================');
          consolog('Socket was disconnected from Sails.');
          consolog('Usually, this is due to one of the following reasons:' + '\n' +
            ' -> the server ' + (self.url ? self.url + ' ' : '') + 'was taken down' + '\n' +
            ' -> your browser lost internet connectivity');
          consolog('====================================');
        });

        self.on('reconnecting', function(numAttempts) {
          consolog(
            '\n'+
            '        Socket is trying to reconnect to Sails...\n'+
            '_-|>_-  (attempt #' + numAttempts + ')'+'\n'+
            '\n'
          );
        });

        self.on('reconnect', function(transport, numAttempts) {
          if (!self.isConnecting) {
            self.on('connect', runRequestQueue.bind(self, self));
          }
          var msSinceConnectionLost = ((new Date()).getTime() - self.connectionLostTimestamp);
          var numSecsOffline = (msSinceConnectionLost / 1000);
          consolog(
            '\n'+
             '  |>    Socket reconnected successfully after'+'\n'+
            '\\___/   being offline for ~' + numSecsOffline + ' seconds.'+'\n'+
            '\n'
          );
        });

        // 'error' event is triggered if connection can not be established.
        // (usually because of a failed authorization, which is in turn
        // usually due to a missing or invalid cookie)
        self.on('error', function failedToConnect(err) {
          self.isConnecting = false;
          ////////////////////////////////////////////////////////////////////////////////////
          // Note:
          // In the future, we could provide a separate event for when a socket cannot connect
          // due to a failed `beforeConnect` (aka "authorization" if you're old school).
          // this could probably be implemented by emitting a special event from the server.
          ////////////////////////////////////////////////////////////////////////////////////

          consolog(
            'Failed to connect socket (possibly due to failed `beforeConnect` on server)',
            'Error:', err
          );
        });
      });

    };

    /**
     * Reconnect the underlying socket.
     *
     * @api public
     */
    SailsSocket.prototype.reconnect = function (){
      if (this.isConnecting) {
        throw new Error('Cannot connect- socket is already connecting');
      }
      if (this.isConnected()) {
        throw new Error('Cannot connect- socket is already connected');
      }
      return this._connect();
    };

    /**
     * Disconnect the underlying socket.
     *
     * @api public
     */
    SailsSocket.prototype.disconnect = function (){
      this.isConnecting = false;
      if (!this.isConnected()) {
        throw new Error('Cannot disconnect- socket is already disconnected');
      }
      return this._raw.disconnect();
    };



    /**
     * isConnected
     *
     * @api private
     * @return {Boolean} whether the socket is connected and able to
     *                           communicate w/ the server.
     */

    SailsSocket.prototype.isConnected = function () {
      if (!this._raw) {
        return false;
      }

      return !!this._raw.connected;
    };



    /**
     * [replay description]
     * @return {[type]} [description]
     */
    SailsSocket.prototype.replay = function (){
      var self = this;

      // Pass events and a reference to the request queue
      // off to the self._raw for consumption
      for (var evName in self.eventQueue) {
        for (var i in self.eventQueue[evName]) {
          self._raw.on(evName, self.eventQueue[evName][i]);
        }
      }

      // Bind a one-time function to run the request queue
      // when the self._raw connects.
      if ( !self.isConnected() ) {
        self._raw.once('connect', runRequestQueue.bind(self, self));
      }
      // Or run it immediately if self._raw is already connected
      else {
        runRequestQueue(self);
      }

      return self;
    };


    /**
     * Chainable method to bind an event to the socket.
     *
     * @param  {String}   evName [event name]
     * @param  {Function} fn     [event handler function]
     * @return {SailsSocket}
     */
    SailsSocket.prototype.on = function (evName, fn){

      // Bind the event to the raw underlying socket if possible.
      if (this._raw) {
        this._raw.on(evName, fn);
        return this;
      }

      // Otherwise queue the event binding.
      if (!this.eventQueue[evName]) {
        this.eventQueue[evName] = [fn];
      }
      else {
        this.eventQueue[evName].push(fn);
      }

      return this;
    };

    /**
     * Chainable method to unbind an event from the socket.
     *
     * @param  {String}   evName [event name]
     * @param  {Function} fn     [event handler function]
     * @return {SailsSocket}
     */
    SailsSocket.prototype.off = function (evName, fn){

      // Bind the event to the raw underlying socket if possible.
      if (this._raw) {
        this._raw.off(evName, fn);
        return this;
      }

      // Otherwise queue the event binding.
      if (this.eventQueue[evName] && this.eventQueue[evName].indexOf(fn) > -1) {
        this.eventQueue[evName].splice(this.eventQueue[evName].indexOf(fn), 1);
      }

      return this;
    };


    /**
     * Chainable method to unbind all events from the socket.
     *
     * @return {SailsSocket}
     */
    SailsSocket.prototype.removeAllListeners = function (){

      // Bind the event to the raw underlying socket if possible.
      if (this._raw) {
        this._raw.removeAllListeners();
        return this;
      }

      // Otherwise queue the event binding.
      this.eventQueue = {};

      return this;
    };

    /**
     * Simulate a GET request to sails
     * e.g.
     *    `socket.get('/user/3', Stats.populate)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype.get = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'get',
        params: data,
        url: url
      }, cb);
    };



    /**
     * Simulate a POST request to sails
     * e.g.
     *    `socket.post('/event', newMeeting, $spinner.hide)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype.post = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'post',
        data: data,
        url: url
      }, cb);
    };



    /**
     * Simulate a PUT request to sails
     * e.g.
     *    `socket.post('/event/3', changedFields, $spinner.hide)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype.put = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'put',
        params: data,
        url: url
      }, cb);
    };



    /**
     * Simulate a DELETE request to sails
     * e.g.
     *    `socket.delete('/event', $spinner.hide)`
     *
     * @api public
     * @param {String} url    ::    destination URL
     * @param {Object} data   ::    parameters to send with the request [optional]
     * @param {Function} cb   ::    callback function to call when finished [optional]
     */

    SailsSocket.prototype['delete'] = function(url, data, cb) {

      // `data` is optional
      if (typeof data === 'function') {
        cb = data;
        data = {};
      }

      return this.request({
        method: 'delete',
        params: data,
        url: url
      }, cb);
    };



    /**
     * Simulate an HTTP request to sails
     * e.g.
     * ```
     * socket.request({
     *   url:'/user',
     *   params: {},
     *   method: 'POST',
     *   headers: {}
     * }, function (responseBody, JWR) {
     *   // ...
     * });
     * ```
     *
     * @api public
     * @option {String} url    ::    destination URL
     * @option {Object} params ::    parameters to send with the request [optional]
     * @option {Object} headers::    headers to send with the request [optional]
     * @option {Function} cb   ::    callback function to call when finished [optional]
     * @option {String} method ::    HTTP request method [optional]
     */

    SailsSocket.prototype.request = function(options, cb) {

      var usage =
      'Usage:\n'+
      'socket.request( options, [fnToCallWhenComplete] )\n\n'+
      'options.url :: e.g. "/foo/bar"'+'\n'+
      'options.method :: e.g. "get", "post", "put", or "delete", etc.'+'\n'+
      'options.params :: e.g. { emailAddress: "mike@sailsjs.org" }'+'\n'+
      'options.headers :: e.g. { "x-my-custom-header": "some string" }';
      // Old usage:
      // var usage = 'Usage:\n socket.'+(options.method||'request')+'('+
      //   ' destinationURL, [dataToSend], [fnToCallWhenComplete] )';


      // Validate options and callback
      if (typeof options !== 'object' || typeof options.url !== 'string') {
        throw new Error('Invalid or missing URL!\n' + usage);
      }
      if (options.method && typeof options.method !== 'string') {
        throw new Error('Invalid `method` provided (should be a string like "post" or "put")\n' + usage);
      }
      if (options.headers && typeof options.headers !== 'object') {
        throw new Error('Invalid `headers` provided (should be a dictionary with string values)\n' + usage);
      }
      if (options.params && typeof options.params !== 'object') {
        throw new Error('Invalid `params` provided (should be a dictionary with JSON-serializable values)\n' + usage);
      }
      if (options.data && typeof options.data !== 'object') {
        throw new Error('Invalid `data` provided (should be a dictionary with JSON-serializable values)\n' + usage);
      }
      if (cb && typeof cb !== 'function') {
        throw new Error('Invalid callback function!\n' + usage);
      }

      // Accept either `params` or `data` for backwards compatibility (but not both!)
      if (options.data && options.params) {
        throw new Error('Cannot specify both `params` and `data`!  They are aliases of each other.\n' + usage);
      }
      else if (options.data) {
        options.params = options.data;
        delete options.data;
      }


      // If this socket is not connected yet, queue up this request
      // instead of sending it.
      // (so it can be replayed when the socket comes online.)
      if ( ! this.isConnected() ) {

        // If no queue array exists for this socket yet, create it.
        this.requestQueue = this.requestQueue || [];
        this.requestQueue.push([options, cb]);
        return;
      }

      // Otherwise, our socket is connected, so continue prepping
      // the request.

      // Default headers to an empty object
      options.headers = options.headers || {};

      // Build a simulated request object
      // (and sanitize/marshal options along the way)
      var requestCtx = {

        method: options.method.toLowerCase() || 'get',

        headers: options.headers,

        data: options.params || options.data || {},

        // Remove trailing slashes and spaces to make packets smaller.
        url: options.url.replace(/^(.+)\/*\s*$/, '$1'),

        cb: cb
      };

      // Merge global headers in
      if (this.headers && 'object' == typeof this.headers) {
        for (var header in this.headers) {
          if (!options.headers.hasOwnProperty(header)) {
            options.headers[header] = this.headers[header];
          }
        }
      }

      // Send the request.
      _emitFrom(this, requestCtx);
    };



    /**
     * Socket.prototype._request
     *
     * Simulate HTTP over Socket.io.
     *
     * @api private
     * @param  {[type]}   options [description]
     * @param  {Function} cb      [description]
     */
    SailsSocket.prototype._request = function(options, cb) {
      throw new Error('`_request()` was a private API deprecated as of v0.11 of the sails.io.js client. Use `.request()` instead.');
    };







    //  ██╗ ██████╗    ███████╗ █████╗ ██╗██╗     ███████╗
    //  ██║██╔═══██╗   ██╔════╝██╔══██╗██║██║     ██╔════╝
    //  ██║██║   ██║   ███████╗███████║██║██║     ███████╗
    //  ██║██║   ██║   ╚════██║██╔══██║██║██║     ╚════██║
    //  ██║╚██████╔╝██╗███████║██║  ██║██║███████╗███████║
    //  ╚═╝ ╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
    //
    // Set an `io.sails` object that may be used for configuration before the
    // first socket connects (i.e. to allow auto-connect behavior to be
    // prevented by setting `io.sails.autoConnect` in an inline script
    // directly after the script tag which loaded this file).


    //  ┌─┐┌─┐┌┬┐  ┬ ┬┌─┐  ╔╦╗╔═╗╔═╗╔═╗╦ ╦╦ ╔╦╗╔═╗  ┌─┐┌─┐┬─┐  ┬┌─┐ ┌─┐┌─┐┬┬  ┌─┐
    //  └─┐├┤  │   │ │├─┘   ║║║╣ ╠╣ ╠═╣║ ║║  ║ ╚═╗  ├┤ │ │├┬┘  ││ │ └─┐├─┤││  └─┐
    //  └─┘└─┘ ┴   └─┘┴    ═╩╝╚═╝╚  ╩ ╩╚═╝╩═╝╩ ╚═╝  └  └─┘┴└─  ┴└─┘o└─┘┴ ┴┴┴─┘└─┘
    io.sails = {

      // Whether to automatically connect a socket and save it as `io.socket`.
      autoConnect: false,

      // The route (path) to hit to get a x-origin (CORS) cookie
      // (or true to use the default: '/__getcookie')
      useCORSRouteToGetCookie: true,

      // The environment we're running in.
      // (logs are not displayed when this is set to 'production')
      //
      // Defaults to development unless this script was fetched from a URL
      // that ends in `*.min.js` or '#production' (may also be manually overridden.)
      //
      environment: urlThisScriptWasFetchedFrom.match(/(\#production|\.min\.js)/g) ? 'production' : 'development',

      // The version of this sails.io.js client SDK
      sdk: SDK_INFO,

      // Transports to use when communicating with the server, in the order they will be tried
      transports: ['polling', 'websocket']
    };



    //  ┌─┐─┐ ┬┌┬┐┌─┐┌┐┌┌┬┐  ┬┌─┐ ┌─┐┌─┐┬┬  ┌─┐  ┌┬┐┌─┐┌─┐┌─┐┬ ┬┬ ┌┬┐┌─┐
    //  ├┤ ┌┴┬┘ │ ├┤ │││ ││  ││ │ └─┐├─┤││  └─┐   ││├┤ ├┤ ├─┤│ ││  │ └─┐
    //  └─┘┴ └─ ┴ └─┘┘└┘─┴┘  ┴└─┘o└─┘┴ ┴┴┴─┘└─┘  ─┴┘└─┘└  ┴ ┴└─┘┴─┘┴ └─┘
    //  ┬ ┬┬┌┬┐┬ ┬  ┌┬┐┬ ┬┌─┐  ╦ ╦╔╦╗╔╦╗╦    ╔═╗╔╦╗╔╦╗╦═╗╦╔╗ ╦ ╦╔╦╗╔═╗╔═╗
    //  ││││ │ ├─┤   │ ├─┤├┤   ╠═╣ ║ ║║║║    ╠═╣ ║  ║ ╠╦╝║╠╩╗║ ║ ║ ║╣ ╚═╗
    //  └┴┘┴ ┴ ┴ ┴   ┴ ┴ ┴└─┘  ╩ ╩ ╩ ╩ ╩╩═╝  ╩ ╩ ╩  ╩ ╩╚═╩╚═╝╚═╝ ╩ ╚═╝╚═╝
    //  ┌─┐┬─┐┌─┐┌┬┐  ┌┬┐┬ ┬┌─┐  ┌─┐┌─┐┬─┐┬┌─┐┌┬┐  ┌┬┐┌─┐┌─┐
    //  ├┤ ├┬┘│ ││││   │ ├─┤├┤   └─┐│  ├┬┘│├─┘ │    │ ├─┤│ ┬
    //  └  ┴└─└─┘┴ ┴   ┴ ┴ ┴└─┘  └─┘└─┘┴└─┴┴   ┴    ┴ ┴ ┴└─┘
    //
    // Now fold in config provided as HTML attributes on the script tag:
    // (note that if `io.sails.*` is changed after this script, those changes
    //  will still take precedence)
    CONFIGURABLE_VIA_HTML_ATTR.forEach(function (configKey){
      if (typeof scriptTagConfig[configKey] !== 'undefined') {
        io.sails[configKey] = scriptTagConfig[configKey];
      }
    });
    //////////////////////////////////////////////////////////////////////////////
    // Note that the new HTML attribute configuration style may eventually
    // completely replace the original approach of setting `io.sails` properties,
    // since the new strategy is easier to reason about.  Also, it would allow us
    // to remove the timeout below someday.
    //////////////////////////////////////////////////////////////////////////////




    //  ┬┌─┐ ┌─┐┌─┐┬┬  ┌─┐ ╔═╗╔═╗╔╗╔╔╗╔╔═╗╔═╗╔╦╗  /  \
    //  ││ │ └─┐├─┤││  └─┐ ║  ║ ║║║║║║║║╣ ║   ║  /   /
    //  ┴└─┘o└─┘┴ ┴┴┴─┘└─┘o╚═╝╚═╝╝╚╝╝╚╝╚═╝╚═╝ ╩  \  /

    /**
     * Add `io.sails.connect` function as a wrapper for the built-in `io()` aka `io.connect()`
     * method, returning a SailsSocket. This special function respects the configured io.sails
     * connection URL, as well as sending other identifying information (most importantly, the
     * current version of this SDK).
     *
     * @param  {String} url  [optional]
     * @param  {Object} opts [optional]
     * @return {Socket}
     */
    io.sails.connect = function(url, opts, forced) {
      if (!forced) return;
      // Make URL optional
      if ('object' === typeof url) {
        opts = url;
        url = null;
      }

      // Default opts to empty object
      opts = opts || {};

      // If explicit connection url is specified, save it to options
      opts.url = url || opts.url || undefined;

      // Instantiate and return a new SailsSocket- and try to connect immediately.
      var socket = new SailsSocket(opts);
      socket._connect();
      return socket;
    };






    //  ██╗ ██████╗    ███████╗ ██████╗  ██████╗██╗  ██╗███████╗████████╗
    //  ██║██╔═══██╗   ██╔════╝██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝
    //  ██║██║   ██║   ███████╗██║   ██║██║     █████╔╝ █████╗     ██║
    //  ██║██║   ██║   ╚════██║██║   ██║██║     ██╔═██╗ ██╔══╝     ██║
    //  ██║╚██████╔╝██╗███████║╚██████╔╝╚██████╗██║  ██╗███████╗   ██║
    //  ╚═╝ ╚═════╝ ╚═╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝
    //
    // io.socket
    //
    // The eager instance of Socket which will automatically try to connect
    // using the host that this js file was served from.
    //
    // This can be disabled or configured by setting properties on `io.sails.*` within the
    // first cycle of the event loop.
    //


    // Build `io.socket` so it exists
    // (note that this DOES NOT start the connection process)
    io.socket = new SailsSocket();
    //
    // This socket is not connected yet, and has not even _started_ connecting.
    //
    // But in the mean time, this eager socket will be queue events bound by the user
    // before the first cycle of the event loop (using `.on()`), which will later
    // be rebound on the raw underlying socket.


    //  ┌─┐┌─┐┌┬┐  ┌─┐┬ ┬┌┬┐┌─┐   ┌─┐┌─┐┌┐┌┌┐┌┌─┐┌─┐┌┬┐  ┌┬┐┬┌┬┐┌─┐┬─┐
    //  └─┐├┤  │   ├─┤│ │ │ │ │───│  │ │││││││├┤ │   │    │ ││││├┤ ├┬┘
    //  └─┘└─┘ ┴   ┴ ┴└─┘ ┴ └─┘   └─┘└─┘┘└┘┘└┘└─┘└─┘ ┴    ┴ ┴┴ ┴└─┘┴└─
    // If configured to do so, start auto-connecting after the first cycle of the event loop
    // has completed (to allow time for this behavior to be configured/disabled
    // by specifying properties on `io.sails`)
    setTimeout(function() {

      // If autoConnect is disabled, delete the eager socket (io.socket) and bail out.
      if (io.sails.autoConnect === false || io.sails.autoconnect === false) {
        delete io.socket;
        return;
      }

      // consolog('Eagerly auto-connecting socket to Sails... (requests will be queued in the mean-time)');
      io.socket._connect();


    }, 0); // </setTimeout>


    // Return the `io` object.
    return io;
  } //</SailsIOClient>

  //
  /////////////////////////////////////////////////////////////////////////////////
  ///// </bunches of private function definitions, constructors, and methods>
  /////////////////////////////////////////////////////////////////////////////////




  //  ███████╗██╗  ██╗██████╗  ██████╗ ███████╗███████╗    ███████╗██████╗ ██╗  ██╗
  //  ██╔════╝╚██╗██╔╝██╔══██╗██╔═══██╗██╔════╝██╔════╝    ██╔════╝██╔══██╗██║ ██╔╝
  //  █████╗   ╚███╔╝ ██████╔╝██║   ██║███████╗█████╗      ███████╗██║  ██║█████╔╝
  //  ██╔══╝   ██╔██╗ ██╔═══╝ ██║   ██║╚════██║██╔══╝      ╚════██║██║  ██║██╔═██╗
  //  ███████╗██╔╝ ██╗██║     ╚██████╔╝███████║███████╗    ███████║██████╔╝██║  ██╗
  //  ╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚══════╝╚══════╝    ╚══════╝╚═════╝ ╚═╝  ╚═╝
  //


  // Add CommonJS support to allow this client SDK to be used from Node.js.
  if (SDK_INFO.platform === 'node') {
    module.exports = SailsIOClient;
  }
  // Add AMD support, registering this client SDK as an anonymous module.
  else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return SailsIOClient;
    });
  }
  else {
    // Otherwise, try to instantiate the client using the global `io`:
    SailsIOClient();

    // Note:
    // If you are modifying this file manually to wrap an existing socket.io client
    // (e.g. to prevent pollution of the global namespace), you can replace the global
    // `io` with your own `io` instance above.
  }

})();

;
//# sourceMappingURL=scripts.bundle.js.map