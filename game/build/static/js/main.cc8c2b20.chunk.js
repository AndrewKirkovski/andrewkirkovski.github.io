(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,function(a,e,t){a.exports={choise:"ChoosePlace_choise__1Kg64",iframe:"ChoosePlace_iframe__3MIZm"}},,function(a,e,t){a.exports={avatar:"Text_avatar__2KqAg",wrapper:"Text_wrapper__q8vxa",inner:"Text_inner__3tynJ",name:"Text_name__1pgIn",text:"Text_text__eZ5Lc"}},function(a,e,t){a.exports={fullScreen:"Screen_fullScreen__QNf-Y",footer:"Screen_footer__cBt0c",content:"Screen_content__ea-B_"}},,function(a,e,t){a.exports={error:"Spamtron_error__8FZnI"}},,,,,,function(a,e,t){},,function(a,e,t){},function(a,e,t){"use strict";t.r(e);var n,c,r=t(1),o=t.n(r),i=t(8),m=t.n(i),l=(t(13),t(3)),s=function(a){window.location.replace(a)},k=function(a){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){if(a!==c){var t=document.createElement("audio");t.src="/game/build/"+a+".mp3",t.loop=e,t.play(),n&&n.pause(),c=a,n=t}}else{var r=document.createElement("audio");r.src="/game/build/"+a+".mp3",r.loop=e,r.play()}},b=t(5),u=t.n(b),h=t(0),g=function(a){var e=a.children,t=a.bg,n=a.Component,c=a.onDone,r={backgroundImage:"url(".concat(t,")")};return Object(h.jsxs)("div",{className:u.a.fullScreen,style:r,children:[Object(h.jsx)("div",{className:u.a.content,children:n&&Object(h.jsx)(n,{onDone:c})}),Object(h.jsx)("div",{className:u.a.footer,children:e})]})},v=t(2),x=t.n(v),y=t(7),w=t.n(y),d=function(a){a.onDone;var e=Object(r.useState)([[Math.random()*(window.innerWidth-200),Math.random()*(window.innerHeight-316)]]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useCallback)((function(){c((function(a){for(var e=[],t=Math.ceil(1.5*a.length),n=0;n<t;n++)e.push([Math.random()*(window.innerWidth-200),Math.random()*(window.innerHeight-316)]);return e}))}),[c]);return Object(r.useEffect)((function(){document.body.addEventListener("click",o)}),[]),Object(h.jsx)(h.Fragment,{children:n.map((function(a){var e=Object(l.a)(a,2),t=e[0],n=e[1];return Object(h.jsx)("img",{src:"/game/build/error.gif",className:w.a.error,style:{top:n+"px",left:t+"px"}})}))})},p=function(a){a.onDone;var e=Object(r.useState)([[Math.random()*(window.innerWidth-200),Math.random()*(window.innerHeight-20)]]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useCallback)((function(){c((function(a){for(var e=[],t=Math.ceil(100*a.length),n=0;n<t;n++)e.push([Math.random()*(window.innerWidth-200),Math.random()*(window.innerHeight-20)]);return e}))}),[c]);return Object(r.useEffect)((function(){o(),document.body.addEventListener("click",o)}),[]),Object(h.jsx)(h.Fragment,{children:n.map((function(a){var e=Object(l.a)(a,2),t=e[0],n=e[1];return Object(h.jsx)("img",{src:"/game/build/error.gif",className:w.a.error,style:{top:n+"px",left:t+"px"}})}))})},A=t(4),f=t.n(A),j=function(a){var e=a.children,t=a.avatar,n=a.name,c={backgroundImage:"url(".concat("/game/build/","expr-").concat(t,".png)")};return Object(h.jsx)("div",{className:f.a.wrapper,children:Object(h.jsxs)("div",{className:f.a.inner,children:[n&&Object(h.jsx)("div",{className:f.a.name,children:n}),Object(h.jsx)("div",{className:f.a.avatar,style:c}),Object(h.jsx)("div",{className:f.a.text,children:e})]})})},O=(t(15),[].concat([{music:"music",bg:"stars",avatar:"normal",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041e\u0439, \u0433\u0434\u0435 \u044d\u0442\u043e \u044f",Component:function(a){a.onDone;return"?clockworkorange"!==window.location.search&&s("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),null},clickAway:!0},{bg:"stars",avatar:"cry",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u042f \u043d\u0430\u0434\u0435\u044f\u043b\u0441\u044f \u0432\u0438\u0434\u0435\u043e \u0431\u0443\u0434\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0434\u043b\u0438\u043d\u043d\u044b\u043c",clickAway:!0},{bg:"stars",avatar:"cry",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u042f \u043e\u0436\u0438\u0434\u0430\u043b \u0431\u043e\u043b\u044c\u0448\u0435\u0433\u043e",clickAway:!0},{bg:"stars",avatar:"cry",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u042f \u043e\u0436\u0438\u0434\u0430\u043b \u0431\u043e\u043b\u044c\u0448\u0435\u0433\u043e, \u043a\u0430\u043a \u043e\u043d \u043c\u043e\u0433 \u0442\u0430\u043a \u043f\u043e\u0441\u0442\u0443\u043f\u0438\u0442\u044c",clickAway:!0},{bg:"stars",avatar:"think",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u0412\u0440\u043e\u0447\u0435\u043c \u0442\u0430\u043c \u0431\u044b\u043b \u044d\u0442\u043e\u0442 \u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0439 QR \u043a\u043e\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u0435\u043d\u044f \u043f\u0440\u0438\u0432\u0435\u043b \u0441\u044e\u0434\u0430",clickAway:!0},{bg:"stars",avatar:"wut",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"Wait, \u044d\u0442\u043e \u0447\u0442\u043e \u043c\u043e\u0435 \u0438\u043c\u044f?",clickAway:!0},{bg:"stars",avatar:"normal",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041d\u0443 \u0438 \u043b\u0430\u0434\u043d\u043e",clickAway:!0},{bg:"stars",avatar:"okay",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041d\u0443 \u0438 \u043b\u0430\u0434\u043d\u043e, \u0432\u0441\u0435 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e",clickAway:!0},{bg:"stars",avatar:"okk",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041d\u0443 \u0438 \u043b\u0430\u0434\u043d\u043e, \u0432\u0441\u0435 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e, \u0442\u0430\u043a \u0438 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c",clickAway:!0},{bg:"stars",avatar:"normal",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0447\u0442\u043e \u0442\u0443\u0442 \u0443 \u043d\u0430\u0441",clickAway:!0},{bg:"stars",avatar:"normal",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0447\u0442\u043e \u0442\u0443\u0442 \u0443 \u043d\u0430\u0441. \u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e \u0432 \u043a\u043e\u043d\u0446\u0435 \u044d\u0442\u043e\u0433\u043e...",clickAway:!0},{bg:"stars",avatar:"think",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0447\u0442\u043e \u0442\u0443\u0442 \u0443 \u043d\u0430\u0441. \u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e \u0432 \u043a\u043e\u043d\u0446\u0435 \u044d\u0442\u043e\u0433\u043e......",clickAway:!0},{bg:"stars",avatar:"normal",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0447\u0442\u043e \u0442\u0443\u0442 \u0443 \u043d\u0430\u0441. \u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e \u0432 \u043a\u043e\u043d\u0446\u0435 \u044d\u0442\u043e\u0439 \u0448\u0442\u0443\u043a\u0438",clickAway:!0},{code:"mobile",bg:"stars",avatar:"think",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041d\u043e \u0432\u043e\u043e\u0431\u0449\u0435 \u044f \u043f\u043e\u0434\u043e\u0437\u0440\u0435\u0432\u0430\u044e, \u0447\u0442\u043e \u043c\u043d\u0435 \u043d\u0430\u0434\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e \u0432 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0439 \u043e\u0431\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435",clickAway:!0},{bg:"stars",avatar:"phone",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u0418 \u043d\u0435 \u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u043a\u0430\u043a \u0442\u0443\u0442 \u0432\u043e\u043e\u0431\u0449\u0435 \u0447\u0442\u043e-\u0442\u043e \u0443\u0432\u0438\u0434\u0435\u0442\u044c",clickAway:!0},{bg:"stars",avatar:"sus",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"(\u041d\u0430\u0434\u0435\u044e\u0441\u044c \u044d\u0442\u043e \u043c\u043e\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u044b\u0441\u043b\u0438 \u0430 \u043d\u0435 \u0437\u0430\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432 \u043a\u043e\u0434\u0435)",Component:function(a){var e=a.onDone;return window.innerWidth<1024&&(setTimeout((function(){alert("\u0421\u0435\u0440\u044c\u0435\u0437\u043d\u043e, \u043d\u0430\u0439\u0434\u0438 \u0443\u0436\u0435 \u0441\u0432\u043e\u0439 \u043d\u043e\u0443\u0442 xD"),alert("\u042f \u043d\u0430\u0441\u0442\u0430\u0438\u0432\u0430\u044e xD")}),10),setTimeout((function(){e("mobile")}),10)),null},clickAway:!0},{bg:"stars",avatar:"normal",name:"\u041b\u0438\u0431\u0443\u0441\u044f",text:"\u041e\u0441\u043c\u043e\u0442\u0440\u0438\u043c\u0441\u044f \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u0433\u0434\u0435 \u044f",clickAway:!0},{bg:"stars",avatar:"normal",name:"",text:"",clickAway:!1,Component:function(a){var e=a.onDone;return Object(h.jsxs)("div",{className:x.a.wrapper,children:[Object(h.jsx)("div",{className:x.a.choise,onClick:function(){return e("home")},children:"\u042f \u0443 \u0441\u0435\u0431\u044f \u0434\u043e\u043c\u0430 \u0438 \u043e\u0434\u0438\u043d"}),Object(h.jsx)("div",{className:x.a.choise,onClick:function(){return e("nothome")},children:"\u042f \u043d\u0435 \u043e\u0434\u0438\u043d \u0438\u043b\u0438 \u0432 \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435"}),Object(h.jsx)("div",{className:x.a.choise,onClick:function(){return k("incorrect")},children:"\u0421\u043c\u0435\u0448\u043d\u0430\u044f \u0442\u0440\u0435\u0442\u044c\u044f \u043e\u043f\u0446\u0438\u044f"}),Object(h.jsx)("div",{className:x.a.choise,onClick:function(){return s("https://www.youtube.com/watch?v=na47wMFfQCo")},children:"\u042f \u0432\u043e\u043e\u0431\u0449\u0435 \u043d\u0435 \u041b\u0438\u0431\u0443\u0441\u044f \u0438 \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u044e \u043a\u0430\u043a \u0441\u044e\u0434\u0430 \u043f\u043e\u043f\u0430\u043b, \u0441\u043f\u0430\u0441\u0438\u0442\u0435 \u043f\u043e\u043c\u043e\u0433\u0438\u0442\u0435"}),Object(h.jsx)("div",{className:x.a.choise,onClick:function(){return s("https://www.youtube.com/watch?v=kYy-qJHLD4Q")},children:"\u042f \u043d\u0430 \u0441\u043e\u0431\u0440\u0430\u043d\u0438\u0438 \u0441\u0435\u043a\u0442\u044b \u043b\u044e\u0431\u0438\u0442\u0435\u043b\u0435\u0439 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u043a\u0443\u043a\u0443\u0440\u0443\u0437\u043d\u044b\u0445 \u043a\u0430\u0447\u0430\u043d\u0447\u0438\u043a\u043e\u0432"})]})}}],[{code:"nothome",bg:"party",avatar:"normal",name:"Party Animal",text:"\u041d\u0443 \u043b\u0430\u0434\u043d\u043e, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u044e \u043f\u043e\u0442\u043e\u043c",clickAway:!0},{bg:"party",avatar:"normal",name:"Party Animal",text:"\u041d\u0443 \u043b\u0430\u0434\u043d\u043e, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u044e \u043f\u043e\u0442\u043e\u043c. \u0422\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u0440\u0430 \u043d\u0430 \u043f\u0430\u0440\u0442\u0438!",clickAway:!0},{bg:"party",avatar:"normal",name:"Party Animal",text:"\u041d\u0443 \u043b\u0430\u0434\u043d\u043e, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u044e \u043f\u043e\u0442\u043e\u043c. \u0422\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u0440\u0430 \u043d\u0430 \u043f\u0430\u0440\u0442\u0438!",clickAway:!1,Component:function(){return s("https://coub.com/view/1mwt6i"),null}}],[{code:"home",music:"home",bg:"home",avatar:"normal",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0412\u043e\u0442, \u044f \u0434\u043e\u043c\u0430",clickAway:!0},{bg:"home",avatar:"normal",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0412\u043e\u0442, \u044f \u0434\u043e\u043c\u0430. \u0422\u0443\u0442 \u0442\u0438\u0445\u043e \u0438 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e.",clickAway:!0},{bg:"home",avatar:"surprise",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041e\u0439, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u0442\u0443\u0442",clickAway:!0},{bg:"home",avatar:"surprise",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041e\u0439, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u0442\u0443\u0442. \u0422\u043e\u0440\u0442 \u0438 ...",clickAway:!0},{bg:"home",avatar:"surprise",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041e\u0439, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u0442\u0443\u0442. \u0422\u043e\u0440\u0442 \u0438 \u043e\u0433\u0440\u043e\u043c\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u044e\u0442\u0443\u0431\u0430?",clickAway:!0},{code:"choice",bg:"home",avatar:"normal",name:"",text:"",clickAway:!1,Component:function(a){var e=a.onDone;return Object(h.jsxs)("div",{className:x.a.wrapper,children:[Object(h.jsx)("div",{className:x.a.choise,onClick:function(){return e("cake")},children:"\u0412\u0437\u044f\u0442\u044c \u0422\u043e\u0440\u0442"}),Object(h.jsx)("div",{className:x.a.choise,onClick:function(){return e("youtube")},children:"\u041d\u0430\u0436\u0430\u0442\u044c \u041a\u043d\u043e\u043f\u043a\u0443"}),Object(h.jsx)("div",{className:x.a.choise,onClick:function(){return e("stuff")},children:"\u041f\u043e\u0434\u0443\u043c\u0430\u0442\u044c \u043e \u0432\u0435\u0447\u043d\u043e\u043c"}),Object(h.jsx)("div",{className:x.a.choise,style:{fontFamily:"'Press Start 2P'",fontSize:"16px"},onClick:function(){e("spamtron"),document.body.classList.add("spamtron"),k("spamtron",!0)},children:"[[hyperlink Blocked]]"})]})}}],[{code:"youtube",bg:"home",avatar:"normal",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u042f \u0434\u0443\u043c\u0430\u044e \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443.",clickAway:!0},{bg:"home",avatar:"normal",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u0443\u043c\u0430\u0435\u0442 \u043e \u0442\u043e\u043c \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0436\u0430\u0442\u044c\u0441\u044f.",clickAway:!0},{bg:"home",avatar:"normal",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u0440\u0430\u0441\u0442\u0430\u0435\u0442",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u042f \u043d\u0435\u0434\u0430\u0432\u043d\u043e \u0447\u0438\u0442\u0430\u043b \u0441\u0442\u0430\u0442\u044c\u044e \u043f\u0440\u043e \u043a\u043d\u043e\u043f\u043a\u0438",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041a\u043d\u043e\u0301\u043f\u043a\u0430 \u2014 \u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u0438\u0433\u043d\u0430\u043b\u0430/\u0432\u0432\u043e\u0434\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0447\u0435\u043b\u043e\u0432\u0435\u043a-\u043c\u0430\u0448\u0438\u043d\u0430: \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0439 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u0438\u0433\u043d\u0430\u043b\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c \u043f\u0443\u0442\u0451\u043c \u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u0440\u0430\u0437\u043c\u044b\u043a\u0430\u043d\u0438\u044f \u0434\u0432\u0443\u0445 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432. ",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041f\u043e \u0441\u0443\u0442\u0438 \u0441\u0432\u043e\u0435\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u043c \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0432\u043e\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u0443\u0441\u0438\u043b\u0438\u044f \u043d\u0430\u0436\u0430\u0442\u0438\u044f), \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0449\u0438\u043c \u0434\u0430\u043b\u0435\u0435 \u0444\u0430\u043a\u0442 \u0442\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u043c \u0441 \u043d\u0438\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c. \u0414\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0442\u0435\u0440\u043c\u0438\u043d \xab\u043a\u043d\u043e\u043f\u043a\u0430\xbb \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d \u043a\u0440\u044b\u0448\u043a\u043e\u0439, \u0447\u0430\u0441\u0442\u044c\u044e \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u0430 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 \xab\u043a\u043d\u043e\u043f\u043a\u0430\xbb, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u043d, \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u043d\u0430\u0436\u0430\u0442\u0438\u0435",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0412 \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u043c \u0441\u043c\u044b\u0441\u043b\u0435 \u043a\u043d\u043e\u043f\u043a\u0430 \u2014 \u043d\u0435\u043a\u0430\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c, \u043d\u0430\u0436\u0430\u0442\u0438\u0435 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0435\u043c (\u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u043c \u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0446\u0438\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0446\u0435\u043f\u0438), \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u043e\u0442\u0432\u0435\u0442\u043d\u043e\u0439 \u0440\u0435\u0430\u043a\u0446\u0438\u0438 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0441 \u043d\u0435\u0439 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0417\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u0435 (\u0440\u0430\u0437\u043c\u044b\u043a\u0430\u043d\u0438\u0435) \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u0440\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e, \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u043d\u043e, \u0443\u0441\u0438\u043b\u0438\u044f \u0432\u0434\u043e\u043b\u044c (\u0438\u043b\u0438 \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0433\u043e \u0443\u0433\u043b\u0430 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u044f) \u0432\u043e\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u043e\u0439 \u043e\u0441\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u0435\u0440\u043f\u0435\u043d\u0434\u0438\u043a\u0443\u043b\u044f\u0440\u043d\u0430 \u043a \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u0438 \u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u043a\u043d\u043e\u043f\u043a\u0438.",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0414\u0432\u0430 (\u0442\u0440\u0438, \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0433\u043e) \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430, \u043a\u043e\u043c\u043c\u0443\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0441\u0438\u0433\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u0438\u043d\u0438\u0438 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043a\u043d\u043e\u043f\u043a\u0438, \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u043e\u0439. \u041a\u043d\u043e\u043f\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043a\u0430\u043a \u043e\u0434\u043d\u0443, \u0442\u0430\u043a \u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f \u2014 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u043e\u043c\u043a\u043d\u0443\u0442\u044b\u0445, \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0437\u0430\u043c\u043a\u043d\u0443\u0442\u044b\u0445, \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0438\u0445 \u2014 \u0432 \u043b\u044e\u0431\u043e\u0439 \u0438\u0445 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438.",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"...",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"... ...",clickAway:!0},{bg:"home",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"... ... ...",clickAway:!0},{bg:"home",avatar:"cmon",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0414\u0410\u0412\u0410\u0419 \u0423\u0416\u0415 \u0412\u0418\u0414\u0415\u041e",clickAway:!0},{bg:"home",avatar:"ryo",name:"",text:"\u041e\u043a\u0435\u0439, \u043e\u043a\u0435\u0439",clickAway:!0},{bg:"home",avatar:"ryo",name:"",text:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0436\u0430\u043b\u0430\u0441\u044c, \u0432\u0438\u0434\u0435\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f",clickAway:!0},{bg:"home",avatar:"ryo",name:"",text:"\u041a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0436\u0430\u043b\u0430\u0441\u044c, \u0432\u0438\u0434\u0435\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f",clickAway:!1,Component:function(){return alert("\u0442\u0443\u0442 \u0432\u0438\u0434\u0435\u043e"),null}}],[{code:"cake",bg:"home",avatar:"hungry",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u042d\u0442\u043e\u0442 \u0442\u043e\u0440\u0442 \u0442\u0430\u043a \u0438 \u043c\u0430\u043d\u0438\u0442.",clickAway:!0},{bg:"home",avatar:"hungry",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"So succulent",clickAway:!0},{bg:"home",avatar:"hungry",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u042f \u043d\u0435 \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0442\u0438\u0432\u0438\u0442\u044c\u0441\u044f",clickAway:!0},{bg:"home",avatar:"hungry",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u042f \u043d\u0435 \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0442\u0438\u0432\u0438\u0442\u044c\u0441\u044f. \u042d\u0442\u043e \u0432\u044b\u0448\u0435 \u043c\u0435\u043d\u044f",clickAway:!0},{bg:"home",music:"cake",avatar:"hungry",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0416\u0430\u0436\u0434\u0430 \u041d\u0438\u0447\u0442\u043e! \u0422\u043e\u0440\u0442 \u0412\u0441\u0451!",clickAway:!0},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"\u041d\u0435 \u0435\u0448\u044c \u043c\u0435\u043d\u044f \u0434\u043e\u0431\u0440\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a",clickAway:!0},{bg:"cake",avatar:"wtf",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"...",clickAway:!0},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"\u042f \u0442\u0435\u0431\u0435 \u0435\u0449\u0435 \u043f\u0440\u0438\u0433\u043e\u0436\u0443\u0441\u044c",clickAway:!0},{bg:"cake",avatar:"sus",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"...",clickAway:!0},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"\u0421\u043b\u0443\u0448\u0430\u0439!",clickAway:!0},{bg:"cake",avatar:"cakewink",name:"\u0422\u043e\u0440\u0442",text:"\u0421\u043b\u0443\u0448\u0430\u0439! \u0421\u043b\u0443\u0448\u0430\u0439!!!!!!!",clickAway:!0},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"\u041b\u0435\u0442\u0438\u043c \u0441\u043e \u043c\u043d\u043e\u0439!",clickAway:!0},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"\u0422\u0430\u043c \u043c\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e!",clickAway:!0},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"\u0422\u0430\u043c \u043c\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e! \u0422\u0435\u0431\u0435 \u0434\u043e \u0431\u0435\u0437\u0443\u043c\u0438\u044f \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",clickAway:!0},{bg:"cake",avatar:"sus",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"...",clickAway:!0},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"\u0414\u041e",clickAway:!0,Component:function(){return Object(h.jsx)("img",{src:"/game/build/cake.png"})}},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"\u0411\u0415\u0417\u0423\u041c\u0418\u042f",clickAway:!0,Component:function(){return Object(h.jsx)("img",{src:"/game/build/cake.png",style:{height:"60vh",animation:"shake 0.82s infinite cubic-bezier(.36,.07,.19,.97) both"}})}},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"",clickAway:!0,Component:function(){return Object(h.jsx)("img",{src:"/game/build/cake.png",style:{height:"120vh",transform:"translate(0, -20vh)",animation:"shake2 0.82s infinite cubic-bezier(.36,.07,.19,.97) both"}})}},{bg:"cake",avatar:"cake",name:"\u0422\u043e\u0440\u0442",text:"",clickAway:!0,Component:function(){return Object(h.jsx)("div",{style:{position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:"black",zIndex:1e3}})}},{bg:"cake",avatar:"okay",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041a\u0430\u0436\u0435\u0442\u0441\u044f \u043d\u0430\u0434\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u043f\u0430\u0442\u044c",clickAway:!0},{bg:"cake",avatar:"okay",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0420\u0435\u0436\u0438\u043c \u0441\u043d\u0430 \u0432\u043e\u043e\u0431\u0449\u0435 \u0445\u043e\u0440\u043e\u0448\u043e!",clickAway:!0},{bg:"cake",avatar:"nope",name:"\u041b\u0438\u0431\u0440\u0430\u043d\u043e\u0441",text:"\u0418\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u0443\u044e >.<",clickAway:!0},{bg:"cake",avatar:"nope",name:"\u041b\u0438\u0431\u0440\u0430\u043d\u043e\u0441",text:"\u0418\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u0443\u044e >.<",clickAway:!1,Component:function(){return window.location.reload(),null}}],[{code:"stuff",music:"zen",bg:"zen",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u042f \u0440\u0435\u0448\u0438\u043b \u043f\u043e\u0434\u0443\u043c\u0430\u0442\u044c \u043e \u0436\u0438\u0437\u043d\u0438",clickAway:!0},{bg:"zen",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0412 \u0433\u043e\u043b\u043e\u0432\u0435 \u0440\u043e\u044f\u0442\u0441\u044f \u043c\u044b\u0441\u043b\u0438",clickAway:!0},{bg:"zen",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u041a\u0430\u0436\u0435\u0442\u0441\u044f \u044f \u043c\u043e\u0433\u0443 \u0441\u043b\u043e\u0432\u0438\u0442\u044c \u0432\u043e\u0442 \u044d\u0442\u0443",clickAway:!0},{bg:"zen",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0418\u043b\u0438 \u044d\u0442\u0443",clickAway:!0},{bg:"zen",avatar:"think",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"",clickAway:!0,Component:function(a){a.onDone;return Object(h.jsx)("div",{className:x.a.iframe,children:Object(h.jsx)("iframe",{src:"https://randstuff.ru/saying/"})})}},{bg:"zen",avatar:"okk",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0427\u0435\u0440\u0442, \u044d\u0442\u043e \u043d\u0435 \u043c\u043e\u044f \u043c\u044b\u0441\u043b\u044c",clickAway:!0},{bg:"zen",avatar:"okk",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442",clickAway:!0},{bg:"zen",avatar:"okk",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u0421\u0440\u043e\u0447\u043d\u043e \u043d\u0430\u0437\u0430\u0434 \u0434\u043e\u043c\u043e\u0439!",clickAway:!0},{bg:"zen",avatar:"okk",name:"\u041b\u0438\u0431\u0440\u0430\u043d",text:"\u042d\u0442\u043e \u043d\u0435 \u043c\u043e\u044f \u043c\u044b\u0441\u043b\u044c",clickAway:!1,Component:function(a){var e=a.onDone;return k("home",!0),e("choice"),null}}],[{code:"spamtron",bg:"home",avatar:"spamtron",name:"spamton",text:"HEY EVERY                    !",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"spamtON",text:"HEY EVERY                    ! You",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"spaM++on",text:"LIB!!!run  YOU [Little Kitten Playing]! I KNEW YOU'D COME HERE [[On A Saturday Night]]!",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"Spa\u041c  \u0422\u041e\u041d",text:"LOOKING FOR [Irresistable Deals] THAT WILL [Blow Your Mind!?]",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"Spam ton",text:"EVERYONE IN [Urovka] IS TALKING ABOUT IT!",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"S\u043f@\u043c\u0442\u043eH",text:"ALL HOT [\u043a\u0443\u043a\u0443\u0440\u0443\u0437\u043d\u044b\u0435 \u043a\u0430\u0447\u0430\u043d\u0447\u0438\u043a\u0438] IN YOUR AREA",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"spAmtOn69",text:"LeeB, RuN LOOK!! YOU ARE [1000th Visitor]!! [only for you]",Component:d,clickAway:!0},{code:"spamtron",bg:"home",avatar:"spamtron",name:"sp@mt@n",text:"[[A Great Deal]] IS WAITING For [[A LimiTed Time Only!]] A HEAVEN-PIERCING [[Cake-Ready Body]]",Component:d,clickAway:!0},{code:"$$$$tron",bg:"home",avatar:"spamtron",name:"SPAMTRON",text:"DEALS SO GOOD I'LL [$!$$] MYSELF!",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"\u0421\u043f\u0430\u043c\u0442\u043e\u043d",text:"JUST 9.99$ [[Only For You]]",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"[Ad Blocked]",text:"DON'T FORGET TO [Like and Subscribe] FOR MORE [Hyperlink Blocked]!",Component:d,clickAway:!0},{bg:"home",avatar:"spamtron",name:"Spamton",text:"EAHAEHAEHAEHAEH!!! LeeB[RUN]! YOU AND ME. ARE ALREADY [Friend Forever Request Accepted]",Component:p,clickAway:!0},{bg:"home",avatar:"spamtron",name:"Spamton",text:"[[cheap flights]] TO [[censured]] AVAILABLE NOW",Component:p,clickAway:!0},{bg:"home",avatar:"ryo",name:"\u0420\u0451",text:"\u041e\u043a\u0435\u0439, \u0435\u0441\u043b\u0438 \u0442\u044b \u044d\u0442\u043e \u0432\u0438\u0434\u0438\u0448\u044c, \u0442\u043e \u0443 \u0442\u0435\u0431\u044f \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u043a\u043e\u043c\u043f \u0438\u043b\u0438 \u0442\u044b \u0443\u043c\u0435\u0435\u0448\u044c \u0438\u0441\u043a\u0430\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0438 xD",Component:p,clickAway:!1}]));var C=function(){var a=Object(r.useState)(0),e=Object(l.a)(a,2),t=e[0],n=e[1],c=Object(r.useCallback)((function(){O[t].music&&k(O[t].music,!0),t<O.length-1&&O[t].clickAway&&n(t+1)}),[t]),o=O[t],i=Object(r.useCallback)((function(a){var e=a?O.findIndex((function(e){return e.code===a})):Math.max(t+1,O.length-1);O[e].music&&k(O[e].music,!0),n(e)}),[n,t]);return Object(h.jsx)("div",{className:"App",onClick:c,children:Object(h.jsx)(g,{bg:"".concat("/game/build/").concat(o.bg,"-bg.jpg"),Component:o.Component,onDone:i,children:Object(h.jsx)(j,{avatar:o.avatar,name:o.name,children:o.text})})})},N=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;t(a),n(a),c(a),r(a),o(a)}))};m.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),N()}],[[16,1,2]]]);
//# sourceMappingURL=main.cc8c2b20.chunk.js.map