(function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],u=0,m=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={0:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://doly-dev.github.io/high-ui/latest/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=c;o.push([0,1]),a()})({0:function(e,t,a){e.exports=a("tB8F")},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},"F+kV":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("dEAq");t["default"]=e=>{var t=r.a.useContext(o["context"]);t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"high-ui"},r.a.createElement(o["AnchorLink"],{to:"#high-ui","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"high-ui"),r.a.createElement("p",null,"\u5f00\u53d1\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\uff01")))}},FJAS:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return c}));var n,r,o="high",i=["red","pink","purple","deeppurple","indigo","blue","lightblue","cyan","teal","green","lightgreen","lime","yellow","amber","orange","deeporange","brown","grey","bluegrey"],l=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];(function(e){e["HEX"]="hex",e["RGB"]="rgb",e["HSL"]="hsl"})(n||(n={})),function(e){e["Material"]="material",e["Standard"]="standard"}(r||(r={}));var c=["primary","secondary","error","warning","info","success"]},FfOG:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a("YS25"),r={basename:"/"};window.routerBase&&(r.basename=window.routerBase);var o=Object({NODE_ENV:"production"}).__IS_SERVER?null:Object(n["b"])(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e||(o=Object(n["b"])(r)),o}},Gs6t:function(e,t,a){e.exports={dark:"dark___2NixJ",boxList:"boxList___3-IBq",box:"box___sk-Dw",primary:"primary___nCOjV",primaryLight:"primaryLight___c9dqw",primaryDark:"primaryDark___1ltA2",secondary:"secondary___1zuPi",secondaryLight:"secondaryLight___2z8oZ",secondaryDark:"secondaryDark___3M1xk",error:"error___1d0Mm",errorLight:"errorLight___255TP",errorDark:"errorDark___25DCU",warning:"warning___2sLKa",warningLight:"warningLight___LGNwi",warningDark:"warningDark___1Xn2R",info:"info___2WBXl",infoLight:"infoLight___2qalN",infoDark:"infoDark___1hHui",success:"success___128Bk",successLight:"successLight___3A_3H",successDark:"successDark___2orBd"}},HvKk:function(e,t,a){"use strict";var n=a("k1fw"),r=a("tJVT"),o=a("PpiC"),i=a("q1tI"),l=a("FJAS"),c=a("QF7K"),s=i["forwardRef"](((e,t)=>{var a=e.as,s=void 0===a?"div":a,d=e.position,u=void 0===d?"fore":d,m=e.mode,h=void 0===m?l["c"].Material:m,p=Object(o["a"])(e,["as","position","mode"]),g=i["useState"](""),v=Object(r["a"])(g,2),f=v[0],b=v[1],y=i["useRef"](null),E=i["useCallback"]((e=>{y.current=e,null!==t&&("function"===typeof t?t(e):t.current=e)}),[t]),k=i["useMemo"]((()=>"fore"===u?{currentStyleProp:"backgroundColor",calcStyleProp:"color"}:{currentStyleProp:"color",calcStyleProp:"backgroundColor"}),[u]),_=k.currentStyleProp,w=k.calcStyleProp,x=i["useMemo"]((()=>({[w]:f})),[w,f]);return i["useEffect"]((()=>{if(y.current){var e=window.getComputedStyle(y.current)[_],t=Object(c["b"])(e,{mode:h}),a=t.color;b(a)}}),[f,_,h]),i["createElement"](s,Object(n["a"])(Object(n["a"])({},p),{},{ref:E,style:Object(n["a"])(Object(n["a"])({},p.style),x)}))}));t["a"]=s},IKRL:function(e,t,a){"use strict";a.r(t);a("7Kak");var n=a("9yH6"),r=(a("sRBo"),a("kaz8")),o=a("tJVT"),i=a("q1tI"),l=a("TSYQ"),c=a.n(l),s=(a("tU7J"),a("wFql")),d=(a("miYZ"),a("tsqr")),u=a("aSns"),m=a.n(u),h=a("P5Jw"),p=[{text:"AAA",range:[7,21]},{text:"AA",range:[4.5,7]},{text:"AA18",range:[3,4.5]},{text:"\u4e0d\u901a\u8fc7",range:[1,3]}],g=e=>p.find((t=>e>=t.range[0])),v=a("QF7K"),f=a("FJAS"),b=a("HvKk"),y=a("Lfo+"),E=a.n(y),k=e=>{var t=e.color,a=e.name,n=e.type,r=e.mode,l=void 0===r?f["c"].Material:r,c=e.showColor,u=void 0===c||c,p=e.showContrast,y=void 0===p||p,k=e.showName,_=void 0===k||k,w=e.copyField,x=void 0===w?"color":w,N=i["useRef"](null),S=i["useState"](),C=Object(o["a"])(S,2),A=C[0],O=C[1],I=i["useState"](),L=Object(o["a"])(I,2),j=L[0],T=L[1],F=i["useMemo"]((()=>{var e;return A?null===(e=g(A))||void 0===e?void 0:e.text:""}),[A]);i["useEffect"]((()=>{if(N.current){var e=window.getComputedStyle(N.current).backgroundColor,t=m()(e);T({rgb:t.rgb().toString(),hex:t.hex().toString().toLowerCase(),hsl:Object(v["a"])(t.hsl().array())});var a=Object(v["b"])(e,{mode:l}),n=a.contrast;O(Object(v["c"])(n))}}),[l,t]);var q=(null===j||void 0===j?void 0:j[n])||"",P="color"===x?q:a;return i["createElement"](h["CopyToClipboard"],{text:P,onCopy:()=>{d["b"].success(i["createElement"](i["Fragment"],null,"\u590d\u5236\u6210\u529f\uff01",i["createElement"](s["a"].Text,{code:!0},P)))}},i["createElement"](b["a"],{className:E.a.palettePanel,style:{backgroundColor:t},mode:l,ref:N},(_||y||u)&&i["createElement"]("div",{className:E.a.info},_&&i["createElement"]("div",{className:E.a.name},a),y&&i["createElement"]("div",{className:E.a.contrast},A," (",F,")")),u&&i["createElement"]("div",{className:E.a.color},i["createElement"]("div",null,q))))},_=k,w=e=>{var t=e.data,a=e.colorType,n=void 0===a?f["b"].RGB:a,r=e.showColor,o=void 0===r||r,l=e.showName,s=void 0===l||l,d=e.showContrast,u=void 0===d||d,m=e.contrastMode,h=void 0===m?f["c"].Material:m,p=e.copyField,g=void 0===p?"color":p,v=e.className,b=e.style;return i["createElement"]("div",{className:c()(E.a.palette,v),style:b},t.map((e=>i["createElement"](_,{key:e.name,color:e.color,name:e.name,type:n,mode:h,showColor:o,showName:s,showContrast:u,copyField:g}))))},x=w,N=a("nFnd"),S=a.n(N),C=[{value:f["b"].HEX,label:f["b"].HEX.toUpperCase()},{value:f["b"].RGB,label:f["b"].RGB.toUpperCase()},{value:f["b"].HSL,label:f["b"].HSL.toUpperCase()}],A=[{value:"name",label:"CSS \u53d8\u91cf\u540d"},{value:"contrast",label:"\u5bf9\u6bd4\u5ea6"},{value:"color",label:"\u989c\u8272"}],O=A.map((e=>e.value)),I=[{value:"name",label:"CSS \u53d8\u91cf\u540d"},{value:"color",label:"\u989c\u8272"}],L=[{value:f["c"].Material,label:"Material Design"},{value:f["c"].Standard,label:"Standard"}],j=f["d"].map((e=>f["e"].map((t=>{var a="".concat(f["a"],"-").concat(e,"-").concat(t);return{name:"--".concat(a),color:"rgb(var(--".concat(a,"))")}})))),T=()=>{var e=i["useState"](O),t=Object(o["a"])(e,2),a=t[0],l=t[1],c=i["useState"](L[0].value),s=Object(o["a"])(c,2),d=s[0],u=s[1],m=i["useState"](C[0].value),h=Object(o["a"])(m,2),p=h[0],g=h[1],v=i["useState"]("color"),f=Object(o["a"])(v,2),b=f[0],y=f[1];return i["createElement"]("div",null,i["createElement"]("div",{className:S.a.formItem},"\u663e\u793a\uff1a",i["createElement"](r["a"].Group,{options:A,value:a,onChange:l})),i["createElement"]("div",{className:S.a.formItem},"\u6587\u672c\u989c\u8272\u5bf9\u6bd4\u5ea6\u8ba1\u7b97\uff1a",i["createElement"](n["a"].Group,{options:L,value:d,onChange:e=>u(e.target.value)})),i["createElement"]("div",{className:S.a.formItem},"\u70b9\u51fb\u590d\u5236\uff1a",i["createElement"](n["a"].Group,{options:I,value:b,onChange:e=>y(e.target.value)})),i["createElement"]("div",{className:S.a.formItem},"\u989c\u8272\u7c7b\u578b\uff1a",i["createElement"](n["a"].Group,{options:C,value:p,onChange:e=>g(e.target.value),optionType:"button",buttonStyle:"solid"})),i["createElement"]("div",{className:S.a.list},j.map(((e,t)=>i["createElement"](x,{key:t,data:e,contrastMode:d,colorType:p,showColor:a.includes("color"),showName:a.includes("name"),showContrast:a.includes("contrast"),copyField:b,className:S.a.item})))))};t["default"]=T},ISmF:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("dEAq");t["default"]=e=>{var t=r.a.useContext(o["context"]),n=(t.demos,r.a.memo(a("qjIM").default));return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u4e3b\u9898"},r.a.createElement(o["AnchorLink"],{to:"#\u4e3b\u9898","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4e3b\u9898"),r.a.createElement("h2",{id:"\u989c\u8272"},r.a.createElement(o["AnchorLink"],{to:"#\u989c\u8272","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u989c\u8272")),r.a.createElement(n,null),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5b57\u4f53"},r.a.createElement(o["AnchorLink"],{to:"#\u5b57\u4f53","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u4f53"),r.a.createElement("h3",{id:"\u5b57\u4f53\u5e8f\u53f7"},r.a.createElement(o["AnchorLink"],{to:"#\u5b57\u4f53\u5e8f\u53f7","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u4f53\u5e8f\u53f7"),r.a.createElement("h3",{id:"\u5b57\u4f53\u57fa\u7840\u5927\u5c0f"},r.a.createElement(o["AnchorLink"],{to:"#\u5b57\u4f53\u57fa\u7840\u5927\u5c0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u4f53\u57fa\u7840\u5927\u5c0f"),r.a.createElement("h2",{id:"\u5c3a\u5bf8"},r.a.createElement(o["AnchorLink"],{to:"#\u5c3a\u5bf8","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5c3a\u5bf8"),r.a.createElement("h3",{id:"\u65ad\u70b9"},r.a.createElement(o["AnchorLink"],{to:"#\u65ad\u70b9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u65ad\u70b9"),r.a.createElement("h3",{id:"\u95f4\u8ddd"},r.a.createElement(o["AnchorLink"],{to:"#\u95f4\u8ddd","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u95f4\u8ddd"),r.a.createElement("h2",{id:"\u5c42\u7ea7"},r.a.createElement(o["AnchorLink"],{to:"#\u5c42\u7ea7","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5c42\u7ea7"),r.a.createElement("h2",{id:"\u8fb9\u6846"},r.a.createElement(o["AnchorLink"],{to:"#\u8fb9\u6846","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8fb9\u6846"),r.a.createElement("h2",{id:"\u5706\u89d2"},r.a.createElement(o["AnchorLink"],{to:"#\u5706\u89d2","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5706\u89d2"),r.a.createElement("h2",{id:"\u9634\u5f71"},r.a.createElement(o["AnchorLink"],{to:"#\u9634\u5f71","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u9634\u5f71"))))}},"Lfo+":function(e,t,a){e.exports={palettePanel:"palettePanel___1AaLQ",color:"color___3tkBS"}},OVR7:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("dEAq");t["default"]=e=>{var t=r.a.useContext(o["context"]);t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"typography---\u6392\u7248"},r.a.createElement(o["AnchorLink"],{to:"#typography---\u6392\u7248","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Typography - \u6392\u7248"),r.a.createElement("p",null,"More skills for writing demo: ",r.a.createElement(o["Link"],{to:"https://d.umijs.org/guide/basic#write-component-demo"},"https://d.umijs.org/guide/basic#write-component-demo"))))}},QF7K:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a("tJVT"),r=a("aSns"),o=a.n(r),i=a("FJAS"),l="white",c="black",s=3,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=e;return"number"!==typeof e&&(a=Number(e)),isNaN(a)?e:Number(a.toFixed(t))},u=e=>{var t=Object(n["a"])(e,3),a=t[0],r=t[1],o=t[2];return"hsl(".concat(d(a),", ").concat(d(r),"%, ").concat(d(o),"%)")},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.contrast,n=void 0===a?s:a,r=t.mode,d=void 0===r?i["c"].Material:r,u=o()(e),m=u.contrast(o()(l)),h=u.contrast(o()(c));if(d===i["c"].Material)return m>=n||m>=h?{color:l,contrast:m}:{color:c,contrast:h};var p=m>=h;return{color:p?l:c,contrast:p?m:h}}},Xmus:function(e,t,a){"use strict";a.r(t);var n=a("0Owb"),r=a("q1tI"),o=a.n(r),i=a("q3YX"),l={},c=a("x2v5"),s=a("KcUY"),d=a.n(s);t["default"]=e=>o.a.createElement(d.a,Object(n["a"])({},e,{config:i,demos:l,apis:c}))},bCY9:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("LtsZ"),r=new n["Plugin"]({validKeys:["modifyClientRenderOpts","patchRoutes","rootContainer","render","onRouteChange","__mfsu"]})},dY63:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("dEAq");t["default"]=e=>{var t=r.a.useContext(o["context"]),n=(t.demos,r.a.memo(a("IKRL").default));return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u989c\u8272"},r.a.createElement(o["AnchorLink"],{to:"#\u989c\u8272","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u989c\u8272")),r.a.createElement(n,null),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u53c2\u8003"},r.a.createElement(o["AnchorLink"],{to:"#\u53c2\u8003","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o["Link"],{to:"https://material.io/design/color/the-color-system.html"},"Material Design \u989c\u8272\u7cfb\u7edf"))))))}},nFnd:function(e,t,a){e.exports={list:"list___1KdWd",item:"item___3yDj3",formItem:"formItem___1aGq_"}},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/typography":[{"path":"/typography","title":"Typography - \u6392\u7248","meta":{}}],"*":[{"path":"/","title":"high-ui","meta":{}}],"/guide":[{"path":"/guide/colors","title":"\u989c\u8272","meta":{}},{"path":"/guide/theme","title":"\u4e3b\u9898","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"GitHub","path":"https://github.com/doly-dev/high-ui"},{"title":"\u66f4\u65b0\u65e5\u5fd7","path":"https://github.com/doly-dev/high-ui/releases"}]},"title":"high-ui","logo":"https://www.caijinfeng.com/assets/images/logo-doly@3x.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},qjIM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a("TSYQ"),o=a.n(r),i=a("HvKk"),l=a("FJAS"),c=a("Gs6t"),s=a.n(c),d=l["f"].map((e=>{var t="--".concat(l["a"],"-").concat(e),a="".concat(t,"-light"),n="".concat(t,"-dark");return[e,[{name:t,color:"var(".concat(t,")")},{name:a,color:"var(".concat(a,")")},{name:n,color:"var(".concat(n,")")}]]})),u=()=>n["createElement"]("div",{className:s.a.color},d.map((e=>n["createElement"]("div",{key:e[0]},n["createElement"]("h3",null,e[0]),n["createElement"]("div",{className:s.a.boxList},e[1].map((e=>n["createElement"](i["a"],{className:o()(s.a.box),style:{backgroundColor:e.color},key:e.name},e.name))))))));t["default"]=u},tB8F:function(e,t,a){"use strict";a.r(t);a("pNMO"),a("4Brf"),a("tjZM"),a("3I1R"),a("7+kd"),a("KhsS"),a("gOCb"),a("a57n"),a("GXvd"),a("I1Gw"),a("gXIK"),a("lEou"),a("ma9I"),a("TeQF"),a("BIHw"),a("XbcX"),a("pjDv"),a("yq1k"),a("yXV3"),a("4mDm"),a("uqXc"),a("2B1R"),a("E9XD"),a("9N29"),a("Junv"),a("+2oP"),a("ToJy"),a("94Xl"),a("pDQq"),a("QGkA"),a("c9m3"),a("wZ/5"),a("rOQg"),a("7+zs"),a("tW5y"),a("DEfu"),a("Tskq"),a("Uydy"),a("QFcT"),a("I9xj"),a("w1rZ"),a("toAj"),a("zKZe"),a("Eqjn"),a("5xtp"),a("T63A"),a("wfmh"),a("27RR"),a("v5b1"),a("W/eh"),a("07d7"),a("B6y2"),a("5s+n"),a("p532"),a("pv2x"),a("SuFq"),a("ftMj"),a("TWNs"),a("U3f4"),a("JfAA"),a("YGK4"),a("inlA"),a("JTJg"),a("Rm1S"),a("hDyC"),a("TZCg"),a("UxlC"),a("hByQ"),a("EnZy"),a("LKBx"),a("SYor"),a("HiXI"),a("7ueG"),a("z8NH"),a("SpvK"),a("/Yfv"),a("iwkZ"),a("FDzp"),a("XMab"),a("ilnZ"),a("hMMk"),a("+ywr"),a("IL/d"),a("gvgV"),a("7JcK"),a("s5qe"),a("cvf0"),a("ENF9"),a("H+LF"),a("66V8"),a("iIM6"),a("2tOg"),a("gYJb"),a("EDT/"),a("j+VE"),a("wgYD"),a("R3/m"),a("l/vG"),a("0q/z"),a("n5pg"),a("zu+z"),a("ihrJ"),a("Q7Pz"),a("unQa"),a("Vnov"),a("nIe3"),a("CUyW"),a("qc1c"),a("5921"),a("VOz1"),a("Thag"),a("9D6x"),a("cOPa"),a("vdRX"),a("KrxN"),a("SL6q"),a("lehK"),a("eO0o"),a("NqR8"),a("w7s6"),a("uWhJ"),a("WPzJ"),a("NV22"),a("ny8l"),a("a5/B"),a("vzwy"),a("pevA"),a("8go2"),a("DrvE"),a("kCkZ"),a("++zV"),a("Y4C7"),a("ZsH6"),a("vZi8"),a("5r1n"),a("sQ9d"),a("bdeN"),a("AwgR"),a("qgGA"),a("49+q"),a("AVoK"),a("hcok"),a("dNT4"),a("3uUd"),a("tijO"),a("1kQv"),a("ZY7T"),a("C1JJ"),a("lmH4"),a("Co1j"),a("5JV0"),a("ctDJ"),a("8r4s"),a("JwUS"),a("qaHo"),a("Si40"),a("BGb9"),a("fN96"),a("UzNg"),a("DhMN"),a("rZ3M"),a("apDx"),a("4XaG"),a("6V7H"),a("cfiF"),a("702D"),a("TJ79"),a("Z4nd"),a("8STE"),a("spTT"),a("rb3L"),a("FZtP"),a("3bBZ"),a("Ew+T"),a("n5b4"),a("Kz25"),a("vxnP"),a("mGGf"),a("VWci");var n=a("bCY9"),r=a("FfOG"),o=a("LtsZ"),i=a("/dmz"),l=a("q1tI"),c=a.n(l);function s(){var e=[{path:"/~demos/:uuid",layout:!1,wrappers:[a("Xmus").default],component:e=>{var t=a("F4QJ"),n=t.default,r=a("Zxc8"),o=r.default,i=a("dEAq"),l=i.usePrefersColor,s=i.context,d=c.a.useContext(s),u=d.demos,m=n(e,u);switch(l(),m.length){case 1:return m[0];case 2:return c.a.createElement(o,m[0],m[1]);default:return"Demo ".concat(e.match.params.uuid," not found :(")}}},{path:"/_demos/:uuid",redirect:"/~demos/:uuid"},{__dumiRoot:!0,layout:!1,path:"/",wrappers:[a("Xmus").default,a("0Bia").default],routes:[{path:"/typography",component:a("OVR7").default,exact:!0,meta:{filePath:"src/typography/index.md",updatedTime:1638772781e3,componentName:"typography",slugs:[{depth:2,value:"Typography - \u6392\u7248",heading:"typography---\u6392\u7248"}],title:"Typography - \u6392\u7248",nav:{path:"/typography",title:"Typography"}},title:"Typography - \u6392\u7248 - high-ui"},{path:"/",component:a("F+kV").default,exact:!0,meta:{filePath:"docs/index.md",updatedTime:1638772781e3,hero:{title:"high-ui",desc:'<div class="markdown"><p>\u79fb\u52a8\u7aef\u6269\u5c55UI</p></div>',actions:[{text:"Getting Started",link:"/guide/colors"}]},features:[{icon:"https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",title:"Feature 1",desc:'<div class="markdown"><p>Balabala</p></div>'},{icon:"https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",title:"Feature 2",desc:'<div class="markdown"><p>Balabala</p></div>'},{icon:"https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",title:"Feature 3",desc:'<div class="markdown"><p>Balabala</p></div>'}],footer:'<div class="markdown"><p>Open-source MIT Licensed | Copyright \xa9 2020<br />Powered by <a href="https://d.umijs.org/" target="_blank">dumi<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="__dumi-default-external-link-icon"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></p></div>',slugs:[{depth:2,value:"high-ui",heading:"high-ui"}],title:"high-ui"},title:"high-ui - high-ui"},{path:"/guide/colors",component:a("dY63").default,exact:!0,meta:{filePath:"docs/guide/colors.md",updatedTime:1638772781e3,slugs:[{depth:1,value:"\u989c\u8272",heading:"\u989c\u8272"},{depth:2,value:"\u53c2\u8003",heading:"\u53c2\u8003"}],title:"\u989c\u8272",nav:{path:"/guide",title:"Guide"}},title:"\u989c\u8272 - high-ui"},{path:"/guide/theme",component:a("ISmF").default,exact:!0,meta:{filePath:"docs/guide/theme.md",updatedTime:1638772781e3,slugs:[{depth:1,value:"\u4e3b\u9898",heading:"\u4e3b\u9898"},{depth:2,value:"\u989c\u8272",heading:"\u989c\u8272"},{depth:2,value:"\u5b57\u4f53",heading:"\u5b57\u4f53"},{depth:3,value:"\u5b57\u4f53\u5e8f\u53f7",heading:"\u5b57\u4f53\u5e8f\u53f7"},{depth:3,value:"\u5b57\u4f53\u57fa\u7840\u5927\u5c0f",heading:"\u5b57\u4f53\u57fa\u7840\u5927\u5c0f"},{depth:2,value:"\u5c3a\u5bf8",heading:"\u5c3a\u5bf8"},{depth:3,value:"\u65ad\u70b9",heading:"\u65ad\u70b9"},{depth:3,value:"\u95f4\u8ddd",heading:"\u95f4\u8ddd"},{depth:2,value:"\u5c42\u7ea7",heading:"\u5c42\u7ea7"},{depth:2,value:"\u8fb9\u6846",heading:"\u8fb9\u6846"},{depth:2,value:"\u5706\u89d2",heading:"\u5706\u89d2"},{depth:2,value:"\u9634\u5f71",heading:"\u9634\u5f71"}],title:"\u4e3b\u9898",nav:{path:"/guide",title:"Guide"}},title:"\u4e3b\u9898 - high-ui"},{path:"/guide",meta:{},exact:!0,redirect:"/guide/colors"}],title:"high-ui",component:e=>e.children}];return n["a"].applyPlugins({key:"patchRoutes",type:o["ApplyPluginsType"].event,args:{routes:e}}),e}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].applyPlugins({key:"render",type:o["ApplyPluginsType"].compose,initialValue:()=>{var t=n["a"].applyPlugins({key:"modifyClientRenderOpts",type:o["ApplyPluginsType"].modify,initialValue:{routes:e.routes||s(),plugin:n["a"],history:Object(r["a"])(e.hot),isServer:Object({NODE_ENV:"production"}).__IS_SERVER,rootElement:"root",defaultTitle:"high-ui"}});return Object(i["a"])(t)},args:e})},u=d();t["default"]=u();window.g_umi={version:"3.5.20"}},x2v5:function(e){e.exports=JSON.parse("{}")}});