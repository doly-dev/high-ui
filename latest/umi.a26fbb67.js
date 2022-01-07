(function(e){function t(t){for(var n,l,i=t[0],c=t[1],s=t[2],u=0,m=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={0:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="https://doly-dev.github.io/high-ui/latest/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;r.push([0,1]),a()})({"/4HV":function(e,t,a){"use strict";a.r(t);a("7Kak");var n=a("9yH6"),o=(a("sRBo"),a("kaz8")),r=a("tJVT"),l=a("q1tI"),i=a("TSYQ"),c=a.n(i),s=(a("tU7J"),a("wFql")),d=(a("miYZ"),a("tsqr")),u=a("aSns"),m=a.n(u),p=a("P5Jw"),h=[{text:"AAA",range:[7,21]},{text:"AA",range:[4.5,7]},{text:"AA18",range:[3,4.5]},{text:"\u4e0d\u901a\u8fc7",range:[1,3]}],v=e=>h.find((t=>e>=t.range[0])),g=a("evYr"),f=a("GY+O"),E=a("qUIV"),y=a("xMtS"),b=a.n(y),k=e=>{var t=e.color,a=e.name,n=e.type,o=e.mode,i=void 0===o?f["c"].Material:o,c=e.showColor,u=void 0===c||c,h=e.showContrast,y=void 0===h||h,k=e.showName,w=void 0===k||k,_=e.copyField,x=void 0===_?"color":_,N=l["useRef"](null),S=l["useState"](),A=Object(r["a"])(S,2),L=A[0],I=A[1],C=l["useState"](),O=Object(r["a"])(C,2),T=O[0],j=O[1],q=l["useMemo"]((()=>{var e;return L?null===(e=v(L))||void 0===e?void 0:e.text:""}),[L]);l["useEffect"]((()=>{if(N.current){var e=window.getComputedStyle(N.current).backgroundColor,t=m()(e);j({rgb:t.rgb().toString(),hex:t.hex().toString().toLowerCase(),hsl:Object(g["a"])(t.hsl().array())});var a=Object(g["b"])(e,{mode:i}),n=a.contrast;I(Object(g["c"])(n))}}),[i,t]);var F=(null===T||void 0===T?void 0:T[n])||"",R="color"===x?F:a;return l["createElement"](p["CopyToClipboard"],{text:R,onCopy:()=>{d["b"].success(l["createElement"](l["Fragment"],null,"\u590d\u5236\u6210\u529f\uff01",l["createElement"](s["a"].Text,{code:!0},R)))}},l["createElement"](E["a"],{className:b.a.palettePanel,style:{backgroundColor:t},mode:i,ref:N},(w||y||u)&&l["createElement"]("div",{className:b.a.info},w&&l["createElement"]("div",{className:b.a.name},a),y&&l["createElement"]("div",{className:b.a.contrast},L," (",q,")")),u&&l["createElement"]("div",{className:b.a.color},l["createElement"]("div",null,F))))},w=k,_=e=>{var t=e.data,a=e.colorType,n=void 0===a?f["b"].RGB:a,o=e.showColor,r=void 0===o||o,i=e.showName,s=void 0===i||i,d=e.showContrast,u=void 0===d||d,m=e.contrastMode,p=void 0===m?f["c"].Material:m,h=e.copyField,v=void 0===h?"color":h,g=e.className,E=e.style;return l["createElement"]("div",{className:c()(b.a.palette,g),style:E},t.map((e=>l["createElement"](w,{key:e.name,color:e.color,name:e.name,type:n,mode:p,showColor:r,showName:s,showContrast:u,copyField:v}))))},x=_,N=a("6BMV"),S=a.n(N),A=[{value:f["b"].HEX,label:f["b"].HEX.toUpperCase()},{value:f["b"].RGB,label:f["b"].RGB.toUpperCase()},{value:f["b"].HSL,label:f["b"].HSL.toUpperCase()}],L=[{value:"name",label:"CSS \u53d8\u91cf\u540d"},{value:"contrast",label:"\u5bf9\u6bd4\u5ea6"},{value:"color",label:"\u989c\u8272"}],I=L.map((e=>e.value)),C=[{value:"name",label:"CSS \u53d8\u91cf\u540d"},{value:"color",label:"\u989c\u8272"}],O=[{value:f["c"].Material,label:"Material Design"},{value:f["c"].Standard,label:"Standard"}],T=f["d"].map((e=>f["e"].map((t=>{var a="".concat(f["a"],"-").concat(e,"-").concat(t);return{name:"--".concat(a),color:"rgb(var(--".concat(a,"))")}})))),j=()=>{var e=l["useState"](I),t=Object(r["a"])(e,2),a=t[0],i=t[1],c=l["useState"](O[0].value),s=Object(r["a"])(c,2),d=s[0],u=s[1],m=l["useState"](A[0].value),p=Object(r["a"])(m,2),h=p[0],v=p[1],g=l["useState"]("color"),f=Object(r["a"])(g,2),E=f[0],y=f[1];return l["createElement"]("div",null,l["createElement"]("div",{className:S.a.formItem},"\u663e\u793a\uff1a",l["createElement"](o["a"].Group,{options:L,value:a,onChange:i})),l["createElement"]("div",{className:S.a.formItem},"\u6587\u672c\u989c\u8272\u5bf9\u6bd4\u5ea6\u8ba1\u7b97\uff1a",l["createElement"](n["a"].Group,{options:O,value:d,onChange:e=>u(e.target.value)})),l["createElement"]("div",{className:S.a.formItem},"\u70b9\u51fb\u590d\u5236\uff1a",l["createElement"](n["a"].Group,{options:C,value:E,onChange:e=>y(e.target.value)})),l["createElement"]("div",{className:S.a.formItem},"\u989c\u8272\u7c7b\u578b\uff1a",l["createElement"](n["a"].Group,{options:A,value:h,onChange:e=>v(e.target.value),optionType:"button",buttonStyle:"solid"})),l["createElement"]("div",{className:S.a.list},T.map(((e,t)=>l["createElement"](x,{key:t,data:e,contrastMode:d,colorType:h,showColor:a.includes("color"),showName:a.includes("name"),showContrast:a.includes("contrast"),copyField:E,className:S.a.item})))))};t["default"]=j},"/y7R":function(e,t,a){e.exports={iconList:"iconList___ggOp8"}},0:function(e,t,a){e.exports=a("tB8F")},"50RX":function(e,t,a){e.exports={dark:"dark___1Dwa8",boxList:"boxList___3dqnX",box:"box___3tNw1",primary:"primary___2A6wf",primaryLight:"primaryLight___U9T4k",primaryDark:"primaryDark___3tdy-",secondary:"secondary___1_oUV",secondaryLight:"secondaryLight___1_K_i",secondaryDark:"secondaryDark___19rd7",error:"error___3HNNm",errorLight:"errorLight___2Vwp_",errorDark:"errorDark___34FzB",warning:"warning___3Qd5B",warningLight:"warningLight___1q3Vv",warningDark:"warningDark___1t764",info:"info___3ITXR",infoLight:"infoLight___3_kj2",infoDark:"infoDark___3JEfC",success:"success___dhM_H",successLight:"successLight___cOqOX",successDark:"successDark___SJAof"}},"6BMV":function(e,t,a){e.exports={list:"list___3BMvo",item:"item___1exRQ",formItem:"formItem___2d2sx"}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},EZUb:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a("o55x"),r=a("X2T+"),l=a("OiFJ"),i=a("cFLb"),c=a("yyiz"),s=a("Ynd/"),d=a("Tm2U"),u=a("72ZF"),m=a("/y7R"),p=a.n(m),h=()=>n["createElement"](n["Fragment"],null,n["createElement"]("h3",null,"\u5927\u5c0f"),n["createElement"]("div",{className:p.a.iconList},n["createElement"](o["a"],{style:{fontSize:16}}),n["createElement"](o["a"],{style:{fontSize:24}}),n["createElement"](o["a"],{style:{fontSize:32}}),n["createElement"](o["a"],{style:{fontSize:48}})),n["createElement"]("h3",null,"\u989c\u8272"),n["createElement"]("div",{className:p.a.iconList},n["createElement"](r["a"],{style:{color:"#e91e63"}}),n["createElement"](l["a"],{style:{color:"#ffc107"}}),n["createElement"](i["a"],{style:{color:"#2196f3"}})),n["createElement"]("h3",null,"\u65cb\u8f6c\u52a8\u753b"),n["createElement"]("div",{className:p.a.iconList},n["createElement"](c["a"],{spin:!0}),n["createElement"](s["a"],{spin:!0}),n["createElement"](d["a"],{spin:!0}),n["createElement"](u["a"],{spinReverse:!0})));t["default"]=h},"F+kV":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("dEAq"),l=o.a.memo((e=>{e.demos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"high-ui"},o.a.createElement(r["AnchorLink"],{to:"#high-ui","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"high-ui"),o.a.createElement("p",null,"\u5f00\u53d1\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\uff01")))}));t["default"]=e=>{var t=o.a.useContext(r["context"]),a=t.demos;return o.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(l,{demos:a})}},FfOG:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var n=a("YS25"),o={basename:"/"};window.routerBase&&(o.basename=window.routerBase);var r=Object({NODE_ENV:"production"}).__IS_SERVER?null:Object(n["b"])(o),l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e||(r=Object(n["b"])(o)),r}},"GY+O":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return c}));var n,o,r="high",l=["red","pink","purple","deeppurple","indigo","blue","lightblue","cyan","teal","green","lightgreen","lime","yellow","amber","orange","deeporange","brown","grey","bluegrey"],i=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];(function(e){e["HEX"]="hex",e["RGB"]="rgb",e["HSL"]="hsl"})(n||(n={})),function(e){e["Material"]="material",e["Standard"]="standard"}(o||(o={}));var c=["primary","secondary","error","warning","info","success"]},ISmF:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("dEAq"),l=o.a.memo((e=>{e.demos;var t=a("QEwd").default;return o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u4e3b\u9898"},o.a.createElement(r["AnchorLink"],{to:"#\u4e3b\u9898","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u4e3b\u9898"),o.a.createElement("h2",{id:"\u989c\u8272"},o.a.createElement(r["AnchorLink"],{to:"#\u989c\u8272","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u989c\u8272")),o.a.createElement(t,null),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u5b57\u4f53"},o.a.createElement(r["AnchorLink"],{to:"#\u5b57\u4f53","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u4f53"),o.a.createElement("h3",{id:"\u5b57\u4f53\u5e8f\u53f7"},o.a.createElement(r["AnchorLink"],{to:"#\u5b57\u4f53\u5e8f\u53f7","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u4f53\u5e8f\u53f7"),o.a.createElement("h3",{id:"\u5b57\u4f53\u57fa\u7840\u5927\u5c0f"},o.a.createElement(r["AnchorLink"],{to:"#\u5b57\u4f53\u57fa\u7840\u5927\u5c0f","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u4f53\u57fa\u7840\u5927\u5c0f"),o.a.createElement("h2",{id:"\u5c3a\u5bf8"},o.a.createElement(r["AnchorLink"],{to:"#\u5c3a\u5bf8","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5c3a\u5bf8"),o.a.createElement("h3",{id:"\u65ad\u70b9"},o.a.createElement(r["AnchorLink"],{to:"#\u65ad\u70b9","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u65ad\u70b9"),o.a.createElement("h3",{id:"\u95f4\u8ddd"},o.a.createElement(r["AnchorLink"],{to:"#\u95f4\u8ddd","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u95f4\u8ddd"),o.a.createElement("h2",{id:"\u5c42\u7ea7"},o.a.createElement(r["AnchorLink"],{to:"#\u5c42\u7ea7","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5c42\u7ea7"),o.a.createElement("h2",{id:"\u8fb9\u6846"},o.a.createElement(r["AnchorLink"],{to:"#\u8fb9\u6846","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u8fb9\u6846"),o.a.createElement("h2",{id:"\u5706\u89d2"},o.a.createElement(r["AnchorLink"],{to:"#\u5706\u89d2","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5706\u89d2"),o.a.createElement("h2",{id:"\u9634\u5f71"},o.a.createElement(r["AnchorLink"],{to:"#\u9634\u5f71","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u9634\u5f71"))))}));t["default"]=e=>{var t=o.a.useContext(r["context"]),a=t.demos;return o.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(l,{demos:a})}},J21y:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=()=>n["createElement"]("div",null,"TODO");t["default"]=o},L4gW:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("dEAq"),l=a("Zxc8"),i=a("H1Ra"),c=o.a.memo((e=>{var t=e.demos,n=a("J21y").default,c=t["icon-basic"].component;return o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"icon"},o.a.createElement(r["AnchorLink"],{to:"#icon","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Icon"),o.a.createElement("p",null,"\u4f7f\u7528\u56fe\u6807\u7ec4\u4ef6\uff0c\u9700\u8981\u5b89\u88c5 ",o.a.createElement(r["Link"],{to:"https://doly-dev.github.io/doly-icons/latest/index.html"},"doly-icons")," \uff1a"),o.a.createElement(i["a"],{code:"npm install doly-icons --save",lang:"bash"}),o.a.createElement("blockquote",null,o.a.createElement("p",null,o.a.createElement("em",null,o.a.createElement(r["Link"],{to:"https://doly-dev.github.io/doly-icons/latest/index.html"},"doly-icons")," \u662f\u57fa\u4e8e ",o.a.createElement(r["Link"],{to:"https://icons.getbootstrap.com/"},"Bootstrap Icons")," \u7684 React \u56fe\u6807\u7ec4\u4ef6\u3002"))),o.a.createElement("p",null,"\u9664\u4e86\u5185\u7f6e\u7684 Bootstrap \u56fe\u6807\u5916\uff0c\u8fd8\u652f\u6301\u81ea\u5b9a\u4e49\u56fe\u6807\u548c SVG Symbol \uff0c\u5177\u4f53\u7528\u6cd5\u548c API \u8bf7",o.a.createElement(r["Link"],{to:"https://doly-dev.github.io/doly-icons/latest/index.html#/documents/instruction"},"\u67e5\u9605 doly-icons \u4f7f\u7528\u8bf4\u660e"),"\u3002"),o.a.createElement("h2",{id:"\u5e38\u7528\u56fe\u6807"},o.a.createElement(r["AnchorLink"],{to:"#\u5e38\u7528\u56fe\u6807","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5e38\u7528\u56fe\u6807"),o.a.createElement("blockquote",null,o.a.createElement("p",null,o.a.createElement(r["Link"],{to:"https://doly-dev.github.io/doly-icons/latest/index.html#/icons"},"\u70b9\u51fb\u67e5\u770b\u5168\u90e8\u56fe\u6807")))),o.a.createElement(n,null),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},o.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),o.a.createElement(l["default"],t["icon-basic"].previewerProps,o.a.createElement(c,null))))}));t["default"]=e=>{var t=o.a.useContext(r["context"]),a=t.demos;return o.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(c,{demos:a})}},QEwd:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a("TSYQ"),r=a.n(o),l=a("qUIV"),i=a("GY+O"),c=a("50RX"),s=a.n(c),d=i["f"].map((e=>{var t="--".concat(i["a"],"-").concat(e),a="".concat(t,"-light"),n="".concat(t,"-dark");return[e,[{name:t,color:"var(".concat(t,")")},{name:a,color:"var(".concat(a,")")},{name:n,color:"var(".concat(n,")")}]]})),u=()=>n["createElement"]("div",{className:s.a.color},d.map((e=>n["createElement"]("div",{key:e[0]},n["createElement"]("h3",null,e[0]),n["createElement"]("div",{className:s.a.boxList},e[1].map((e=>n["createElement"](l["a"],{className:r()(s.a.box),style:{backgroundColor:e.color},key:e.name},e.name))))))));t["default"]=u},afA6:function(e,t,a){"use strict";a.r(t);var n=a("0Owb"),o=a("q1tI"),r=a.n(o),l=a("q3YX"),i="import * as React from 'react';\nimport {\n  Gear,\n  HeartFill,\n  EmojiSmileFill,\n  ArrowRepeat,\n  ArrowClockwise,\n  ArrowCounterclockwise,\n  Search,\n  YinYang\n} from 'doly-icons';\nimport styles from './demo.less';\n\nconst Demo = () => {\n  return (\n    <>\n      <h3>\u5927\u5c0f</h3>\n      <div className={styles.iconList}>\n        <Gear style={{ fontSize: 16 }} />\n        <Gear style={{ fontSize: 24 }} />\n        <Gear style={{ fontSize: 32 }} />\n        <Gear style={{ fontSize: 48 }} />\n      </div>\n      <h3>\u989c\u8272</h3>\n      <div className={styles.iconList}>\n        <HeartFill style={{ color: '#e91e63' }} />\n        <EmojiSmileFill style={{ color: '#ffc107' }} />\n        <Search style={{ color: '#2196f3' }} />\n      </div>\n      <h3>\u65cb\u8f6c\u52a8\u753b</h3>\n      <div className={styles.iconList}>\n        <YinYang spin />\n        <ArrowRepeat spin />\n        <ArrowClockwise spin />\n        <ArrowCounterclockwise spinReverse />\n      </div>\n    </>\n  );\n};\n\nexport default Demo;",c=".iconList {\n  :global {\n    .doly-icon {\n      margin-right: 6px;\n      font-size: 32px;\n    }\n  }\n}",s={"icon-basic":{component:a("EZUb").default,previewerProps:{sources:{_:{tsx:i},"demo.less":{import:"./demo.less",content:c}},dependencies:{react:{version:"16.14.0"},"doly-icons":{version:"1.0.2"}},identifier:"icon-basic"}}},d=a("x2v5"),u=a("KcUY"),m=a.n(u);t["default"]=e=>r.a.createElement(m.a,Object(n["a"])({},e,{config:l,demos:s,apis:d}))},bCY9:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("LtsZ"),o=new n["Plugin"]({validKeys:["modifyClientRenderOpts","patchRoutes","rootContainer","render","onRouteChange","__mfsu"]})},dY63:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("dEAq"),l=o.a.memo((e=>{e.demos;var t=a("/4HV").default;return o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u989c\u8272"},o.a.createElement(r["AnchorLink"],{to:"#\u989c\u8272","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u989c\u8272")),o.a.createElement(t,null),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u53c2\u8003"},o.a.createElement(r["AnchorLink"],{to:"#\u53c2\u8003","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(r["Link"],{to:"https://material.io/design/color/the-color-system.html"},"Material Design \u989c\u8272\u7cfb\u7edf"))))))}));t["default"]=e=>{var t=o.a.useContext(r["context"]),a=t.demos;return o.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(l,{demos:a})}},evYr:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a("tJVT"),o=a("aSns"),r=a.n(o),l=a("GY+O"),i="white",c="black",s=3,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=e;return"number"!==typeof e&&(a=Number(e)),isNaN(a)?e:Number(a.toFixed(t))},u=e=>{var t=Object(n["a"])(e,3),a=t[0],o=t[1],r=t[2];return"hsl(".concat(d(a),", ").concat(d(o),"%, ").concat(d(r),"%)")},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.contrast,n=void 0===a?s:a,o=t.mode,d=void 0===o?l["c"].Material:o,u=r()(e),m=u.contrast(r()(i)),p=u.contrast(r()(c));if(d===l["c"].Material)return m>=n||m>=p?{color:i,contrast:m}:{color:c,contrast:p};var h=m>=p;return{color:h?i:c,contrast:h?m:p}}},n0SN:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("dEAq"),l=o.a.memo((e=>{e.demos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"typography"},o.a.createElement(r["AnchorLink"],{to:"#typography","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Typography"),o.a.createElement("p",null,"\u6392\u7248"),o.a.createElement("p",null,"More skills for writing demo: ",o.a.createElement(r["Link"],{to:"https://d.umijs.org/guide/basic#write-component-demo"},"https://d.umijs.org/guide/basic#write-component-demo"))))}));t["default"]=e=>{var t=o.a.useContext(r["context"]),a=t.demos;return o.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(l,{demos:a})}},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"Icon","path":"/components/icon","meta":{},"children":[]},{"title":"Typography","path":"/components/typography","meta":{},"children":[]}],"*":[{"path":"/","title":"high-ui","meta":{}}],"/guide":[{"path":"/guide/colors","title":"\u989c\u8272","meta":{}},{"path":"/guide/theme","title":"\u4e3b\u9898","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"\u7ec4\u4ef6","path":"/components"},{"title":"GitHub","path":"https://github.com/doly-dev/high-ui"},{"title":"\u66f4\u65b0\u65e5\u5fd7","path":"https://github.com/doly-dev/high-ui/releases"}]},"title":"high-ui","logo":"https://www.caijinfeng.com/assets/images/logo-doly@3x.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},qUIV:function(e,t,a){"use strict";var n=a("k1fw"),o=a("tJVT"),r=a("PpiC"),l=a("q1tI"),i=a("GY+O"),c=a("evYr"),s=l["forwardRef"](((e,t)=>{var a=e.as,s=void 0===a?"div":a,d=e.position,u=void 0===d?"fore":d,m=e.mode,p=void 0===m?i["c"].Material:m,h=Object(r["a"])(e,["as","position","mode"]),v=l["useState"](""),g=Object(o["a"])(v,2),f=g[0],E=g[1],y=l["useRef"](null),b=l["useCallback"]((e=>{y.current=e,null!==t&&("function"===typeof t?t(e):t.current=e)}),[t]),k=l["useMemo"]((()=>"fore"===u?{currentStyleProp:"backgroundColor",calcStyleProp:"color"}:{currentStyleProp:"color",calcStyleProp:"backgroundColor"}),[u]),w=k.currentStyleProp,_=k.calcStyleProp,x=l["useMemo"]((()=>({[_]:f})),[_,f]);return l["useEffect"]((()=>{if(y.current){var e=window.getComputedStyle(y.current)[w],t=Object(c["b"])(e,{mode:p}),a=t.color;E(a)}}),[f,w,p]),l["createElement"](s,Object(n["a"])(Object(n["a"])({},h),{},{ref:b,style:Object(n["a"])(Object(n["a"])({},h.style),x)}))}));t["a"]=s},tB8F:function(e,t,a){"use strict";a.r(t);a("pNMO"),a("4Brf"),a("tjZM"),a("3I1R"),a("7+kd"),a("KhsS"),a("gOCb"),a("a57n"),a("GXvd"),a("I1Gw"),a("gXIK"),a("lEou"),a("ma9I"),a("TeQF"),a("BIHw"),a("XbcX"),a("pjDv"),a("yq1k"),a("yXV3"),a("4mDm"),a("uqXc"),a("2B1R"),a("E9XD"),a("9N29"),a("Junv"),a("+2oP"),a("ToJy"),a("94Xl"),a("pDQq"),a("QGkA"),a("c9m3"),a("wZ/5"),a("rOQg"),a("7+zs"),a("tW5y"),a("DEfu"),a("Tskq"),a("Uydy"),a("QFcT"),a("I9xj"),a("w1rZ"),a("toAj"),a("zKZe"),a("Eqjn"),a("5xtp"),a("T63A"),a("wfmh"),a("27RR"),a("v5b1"),a("W/eh"),a("07d7"),a("B6y2"),a("5s+n"),a("p532"),a("pv2x"),a("SuFq"),a("ftMj"),a("TWNs"),a("U3f4"),a("JfAA"),a("YGK4"),a("inlA"),a("JTJg"),a("Rm1S"),a("hDyC"),a("TZCg"),a("UxlC"),a("hByQ"),a("EnZy"),a("LKBx"),a("SYor"),a("HiXI"),a("7ueG"),a("z8NH"),a("SpvK"),a("/Yfv"),a("iwkZ"),a("FDzp"),a("XMab"),a("ilnZ"),a("hMMk"),a("+ywr"),a("IL/d"),a("gvgV"),a("7JcK"),a("s5qe"),a("cvf0"),a("ENF9"),a("H+LF"),a("66V8"),a("iIM6"),a("2tOg"),a("gYJb"),a("EDT/"),a("j+VE"),a("wgYD"),a("R3/m"),a("l/vG"),a("0q/z"),a("n5pg"),a("zu+z"),a("ihrJ"),a("Q7Pz"),a("unQa"),a("Vnov"),a("nIe3"),a("CUyW"),a("qc1c"),a("5921"),a("VOz1"),a("Thag"),a("9D6x"),a("cOPa"),a("vdRX"),a("KrxN"),a("SL6q"),a("lehK"),a("eO0o"),a("NqR8"),a("w7s6"),a("uWhJ"),a("WPzJ"),a("NV22"),a("ny8l"),a("a5/B"),a("vzwy"),a("pevA"),a("8go2"),a("DrvE"),a("kCkZ"),a("++zV"),a("Y4C7"),a("ZsH6"),a("vZi8"),a("5r1n"),a("sQ9d"),a("bdeN"),a("AwgR"),a("qgGA"),a("49+q"),a("AVoK"),a("hcok"),a("dNT4"),a("3uUd"),a("tijO"),a("1kQv"),a("ZY7T"),a("C1JJ"),a("lmH4"),a("Co1j"),a("5JV0"),a("ctDJ"),a("8r4s"),a("JwUS"),a("qaHo"),a("Si40"),a("BGb9"),a("fN96"),a("UzNg"),a("DhMN"),a("rZ3M"),a("apDx"),a("4XaG"),a("6V7H"),a("cfiF"),a("702D"),a("TJ79"),a("Z4nd"),a("8STE"),a("spTT"),a("rb3L"),a("FZtP"),a("3bBZ"),a("Ew+T"),a("n5b4"),a("Kz25"),a("vxnP"),a("mGGf"),a("VWci");var n=a("bCY9"),o=a("FfOG"),r=a("LtsZ"),l=a("/dmz"),i=a("tJVT");function c(){var e=[{path:"/~demos/:uuid",layout:!1,wrappers:[a("afA6").default],component:e=>{var t=a("q1tI"),n=a("F4QJ"),o=n.default,r=a("Zxc8"),l=r.default,c=a("dEAq"),s=c.usePrefersColor,d=c.context,u=t.useContext(d),m=u.demos,p=t.useState([]),h=Object(i["a"])(p,2),v=h[0],g=h[1];switch(t.useLayoutEffect((()=>{g(o(e,m))}),[e.match.params.uuid,e.location.query.wrapper,e.location.query.capture]),s(),v.length){case 1:return v[0];case 2:return t.createElement(l,v[0],v[1]);default:return"Demo ".concat(e.match.params.uuid," not found :(")}}},{path:"/_demos/:uuid",redirect:"/~demos/:uuid"},{__dumiRoot:!0,layout:!1,path:"/",wrappers:[a("afA6").default,a("0Bia").default],routes:[{path:"/components/icon",component:a("L4gW").default,exact:!0,meta:{filePath:"src/components/icon/index.md",updatedTime:1641524852e3,slugs:[{depth:1,value:"Icon",heading:"icon"},{depth:2,value:"\u5e38\u7528\u56fe\u6807",heading:"\u5e38\u7528\u56fe\u6807"},{depth:2,value:"\u57fa\u7840\u7528\u6cd5",heading:"\u57fa\u7840\u7528\u6cd5"}],title:"Icon",hasPreviewer:!0,nav:{path:"/components",title:"Components"},group:{path:"/components/icon",title:"Icon"}},title:"Icon - high-ui"},{path:"/components/typography",component:a("n0SN").default,exact:!0,meta:{filePath:"src/components/typography/index.md",updatedTime:1641524852e3,componentName:"typography",slugs:[{depth:2,value:"Typography",heading:"typography"}],title:"Typography",nav:{path:"/components",title:"Components"},group:{path:"/components/typography",title:"Typography"}},title:"Typography - high-ui"},{path:"/",component:a("F+kV").default,exact:!0,meta:{filePath:"docs/index.md",updatedTime:1641524852e3,hero:{title:"high-ui",desc:'<div class="markdown"><p>\u79fb\u52a8\u7aef\u6269\u5c55UI</p></div>',actions:[{text:"Getting Started",link:"/guide/colors"}]},features:[{icon:"https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",title:"Feature 1",desc:'<div class="markdown"><p>Balabala</p></div>'},{icon:"https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",title:"Feature 2",desc:'<div class="markdown"><p>Balabala</p></div>'},{icon:"https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",title:"Feature 3",desc:'<div class="markdown"><p>Balabala</p></div>'}],footer:'<div class="markdown"><p>Open-source MIT Licensed | Copyright \xa9 2020<br />Powered by <a href="https://d.umijs.org/" target="_blank">dumi<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="__dumi-default-external-link-icon"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></p></div>',slugs:[{depth:2,value:"high-ui",heading:"high-ui"}],title:"high-ui"},title:"high-ui - high-ui"},{path:"/guide/colors",component:a("dY63").default,exact:!0,meta:{filePath:"docs/guide/colors.md",updatedTime:1641524852e3,slugs:[{depth:1,value:"\u989c\u8272",heading:"\u989c\u8272"},{depth:2,value:"\u53c2\u8003",heading:"\u53c2\u8003"}],title:"\u989c\u8272",nav:{path:"/guide",title:"Guide"}},title:"\u989c\u8272 - high-ui"},{path:"/guide/theme",component:a("ISmF").default,exact:!0,meta:{filePath:"docs/guide/theme.md",updatedTime:1641524852e3,slugs:[{depth:1,value:"\u4e3b\u9898",heading:"\u4e3b\u9898"},{depth:2,value:"\u989c\u8272",heading:"\u989c\u8272"},{depth:2,value:"\u5b57\u4f53",heading:"\u5b57\u4f53"},{depth:3,value:"\u5b57\u4f53\u5e8f\u53f7",heading:"\u5b57\u4f53\u5e8f\u53f7"},{depth:3,value:"\u5b57\u4f53\u57fa\u7840\u5927\u5c0f",heading:"\u5b57\u4f53\u57fa\u7840\u5927\u5c0f"},{depth:2,value:"\u5c3a\u5bf8",heading:"\u5c3a\u5bf8"},{depth:3,value:"\u65ad\u70b9",heading:"\u65ad\u70b9"},{depth:3,value:"\u95f4\u8ddd",heading:"\u95f4\u8ddd"},{depth:2,value:"\u5c42\u7ea7",heading:"\u5c42\u7ea7"},{depth:2,value:"\u8fb9\u6846",heading:"\u8fb9\u6846"},{depth:2,value:"\u5706\u89d2",heading:"\u5706\u89d2"},{depth:2,value:"\u9634\u5f71",heading:"\u9634\u5f71"}],title:"\u4e3b\u9898",nav:{path:"/guide",title:"Guide"}},title:"\u4e3b\u9898 - high-ui"},{path:"/components",meta:{},exact:!0,redirect:"/components/icon"},{path:"/guide",meta:{},exact:!0,redirect:"/guide/colors"}],title:"high-ui",component:e=>e.children}];return n["a"].applyPlugins({key:"patchRoutes",type:r["ApplyPluginsType"].event,args:{routes:e}}),e}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].applyPlugins({key:"render",type:r["ApplyPluginsType"].compose,initialValue:()=>{var t=n["a"].applyPlugins({key:"modifyClientRenderOpts",type:r["ApplyPluginsType"].modify,initialValue:{routes:e.routes||c(),plugin:n["a"],history:Object(o["a"])(e.hot),isServer:Object({NODE_ENV:"production"}).__IS_SERVER,rootElement:"root",defaultTitle:"high-ui"}});return Object(l["a"])(t)},args:e})},d=s();t["default"]=d();window.g_umi={version:"3.5.20"}},x2v5:function(e){e.exports=JSON.parse("{}")},xMtS:function(e,t,a){e.exports={dark:"dark___2-ZYY",palettePanel:"palettePanel___1_vy0",color:"color___1tyZ9"}}});