(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{181:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(479),n(10)),m=n.n(c),l=n(483),s=n(16),p=n(5),d=n(484),u=n.n(d),g=(n(191),n(1)),f=g.b.p.withConfig({displayName:"BodyText",componentId:"sc-1u8o0j4-0"})(["font-size:",";font-size:",";letter-spacing:",";line-height:140%;@media (max-width:991px){font-size:",";}"],p.b.small,p.b.body,p.c.med,p.b.medsmall),h=Object(g.b)(f).withConfig({displayName:"FaqText",componentId:"sc-1u8o0j4-1"})(["padding-top:1em;"]),b=Object(g.b)(f).withConfig({displayName:"FaqHeadText",componentId:"sc-1u8o0j4-2"})(["width:65vw;@media (max-width:767px){width:60vw;}@media (max-width:479px){width:65vw;}"]),w=g.b.h1.withConfig({displayName:"FaqTitle",componentId:"sc-1u8o0j4-3"})(["text-transform:none;margin-bottom:1em;font-size:",";color:",";text-transform:uppercase;font-weight:",";letter-spacing:",";"],p.b.large,p.a.primary,p.d.semib,p.c.slim),y=g.b.h2.withConfig({displayName:"FaqHeading",componentId:"sc-1u8o0j4-4"})(["border-bottom:0.2em solid ",";padding-bottom:0.5em;font-size:",";color:",";text-transform:uppercase;font-weight:",";letter-spacing:",";"],function(e){return e.color},p.b.body,p.a.primary,p.d.semib,p.c.slim),I=g.b.div.withConfig({displayName:"FaqWrapper",componentId:"sc-1u8o0j4-5"})(["width:68vw;margin-left:2em;margin-right:2em;margin-top:2.5em;margin-bottom:2.2em;padding-bottom:2.2em;padding-top:1.2em;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:",";border-radius:0.3em;z-index:3;@media (max-width:767px){width:75vw;}@media (max-width:479px){width:80vw;}"],p.a.white),N=g.b.div.withConfig({displayName:"FaqItem",componentId:"sc-1u8o0j4-6"})(["position:relative;width:60vw;margin:0.5em 1em;text-align:center;"]),x=g.b.div.withConfig({displayName:"InfoButton",componentId:"sc-1u8o0j4-7"})(["position:absolute;top:1.1em;right:0.5em;width:2.5em;height:1.6em;border-radius:0.15em;margin-bottom:0.5em;font-size:",";text-transform:uppercase;background-color:",";background-image:",";background-repeat:no-repeat;background-size:contain;background-position:center;color:",";border:none;z-index:1;"],p.b.xsmall,p.a.white,function(e){return"url("+e.background+")"},p.a.secondary),E=(g.b.img.withConfig({displayName:"Arrow",componentId:"sc-1u8o0j4-8"})(["width:2em;"]),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={id:-1},n.handleClick=n.handleClick.bind(m()(m()(n))),n}i()(t,e);var n=t.prototype;return n.handleClick=function(e){var t=this,n=Number(e.target.id);this.setState({id:n},function(){console.log(t.state.id)})},n.render=function(){var e=this,t={color:p.a.primaryInactive};return o.a.createElement(I,null,this.props.faqs.edges.map(function(n,a){return o.a.createElement(N,{key:n.node.id},o.a.createElement("div",null,o.a.createElement(y,{style:e.state.id===a?null:t},n.node.title),e.state.id===a?o.a.createElement(h,null,n.node.help," "):o.a.createElement(x,{background:u.a,id:a,onClick:e.handleClick})))}))},t}(a.Component)),v=function(){return o.a.createElement(s.StaticQuery,{query:"2872630002",render:function(e){return o.a.createElement(E,{faqs:e.allDatoCmsFaq})},data:l})},C=n(187),j=n(190),M=n.n(j),k=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(C.a,{column:!0,bgColor:p.a.secondary,background:M.a,padding:!0},o.a.createElement(w,null,"FAQs"),o.a.createElement(b,null,"Check out our FAQ section for answers, Can't find what you are looking for? Just contact us for more info"),o.a.createElement(v,null))},t}(a.Component),A=n(210),F=n(261),z=n(96);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.Helmet,null,o.a.createElement("html",{lang:"en"}),o.a.createElement("title",null,"This is the Faqs page"),o.a.createElement("meta",{name:"description",content:"A description of the page"}),o.a.createElement("meta",{property:"og:url",content:"https://example.com/page.html"}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:title",content:"Content Title"}),o.a.createElement("meta",{property:"og:image",content:"https://example.com/image.jpg"}),o.a.createElement("meta",{property:"og:image:width",content:"1200"}),o.a.createElement("meta",{property:"og:image:height",content:"630"}),o.a.createElement("meta",{property:"og:description",content:"Description Here"}),o.a.createElement("meta",{property:"og:site_name",content:"TBC"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:site",content:"@site_account"}),o.a.createElement("meta",{name:"twitter:url",content:"https://example.com/page.html"}),o.a.createElement("meta",{name:"twitter:title",content:"Content Title"}),o.a.createElement("meta",{name:"twitter:description",content:"Content description less than 200 characters"}),o.a.createElement("meta",{name:"twitter:image",content:"tbc"})),o.a.createElement(k,null),o.a.createElement(F.a,null),o.a.createElement(A.a,null))}},225:function(e,t,n){var a=n(99),o=n(64),r=n(42),i=n(97),c=n(33),m=n(98),l=Object.getOwnPropertyDescriptor;t.f=n(19)?l:function(e,t){if(e=r(e),t=i(t,!0),m)try{return l(e,t)}catch(n){}if(c(e,t))return o(!a.f.call(e,t),e[t])}},257:function(e,t,n){var a=n(15),o=n(258).set;e.exports=function(e,t,n){var r,i=t.constructor;return i!==n&&"function"==typeof i&&(r=i.prototype)!==n.prototype&&a(r)&&o&&o(e,r),e}},258:function(e,t,n){var a=n(15),o=n(8),r=function(e,t){if(o(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(26)(Function.call,n(225).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:r}},479:function(e,t,n){"use strict";var a=n(9),o=n(33),r=n(21),i=n(257),c=n(97),m=n(20),l=n(480).f,s=n(225).f,p=n(25).f,d=n(481).trim,u=a.Number,g=u,f=u.prototype,h="Number"==r(n(104)(f)),b="trim"in String.prototype,w=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,a,o,r=(t=b?t.trim():d(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+t}for(var i,m=t.slice(2),l=0,s=m.length;l<s;l++)if((i=m.charCodeAt(l))<48||i>o)return NaN;return parseInt(m,a)}}return+t};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof u&&(h?m(function(){f.valueOf.call(n)}):"Number"!=r(n))?i(new g(w(t)),n,u):w(t)};for(var y,I=n(19)?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)o(g,y=I[N])&&!o(u,y)&&p(u,y,s(g,y));u.prototype=f,f.constructor=u,n(27)(a,"Number",u)}},480:function(e,t,n){var a=n(105),o=n(69).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,o)}},481:function(e,t,n){var a=n(12),o=n(22),r=n(20),i=n(482),c="["+i+"]",m=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),s=function(e,t,n){var o={},c=r(function(){return!!i[e]()||"​"!="​"[e]()}),m=o[e]=c?t(p):i[e];n&&(o[n]=m),a(a.P+a.F*c,"String",o)},p=s.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(m,"")),2&t&&(e=e.replace(l,"")),e};e.exports=s},482:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},483:function(e){e.exports={data:{allDatoCmsFaq:{edges:[{node:{id:"DatoCmsFaq-677356-en",title:"Some shipping stuff",help:"Products come by canoe, paddled by an Iranian grasshopper"}},{node:{id:"DatoCmsFaq-677357-en",title:"Refunds",help:"No refunds products are awesome enough"}},{node:{id:"DatoCmsFaq-677378-en",title:"Sizes",help:"Small is for botswanan refugees\nMedium would fit your average joe with room for a three pack\nLarge is for lassoing whales of the coast of moobtown\n"}},{node:{id:"DatoCmsFaq-727998-en",title:"blah ",help:"jgljgljgljg;"}},{node:{id:"DatoCmsFaq-827146-en",title:"Other Stuff",help:"No help for you"}}]}}}},484:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMzAgOTUuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzMwIDk1Ljk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMyRjNDNUU7c3Ryb2tlLXdpZHRoOjQwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9DQo8L3N0eWxlPg0KPHRpdGxlPkZBUSBhcnJvd3MgZW5sYXJnZWQ8L3RpdGxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjYsNDQuMWwxMzYsMjUuNmMzLjYsMC43LDcuNCwwLjcsMTEsMGwxMzYtMjUuNiIvPg0KPC9zdmc+DQo="}}]);
//# sourceMappingURL=component---src-pages-faqs-js-e6034f3217784a7082e1.js.map