(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[22],{100:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return l}));var r=e(5),c=e(0),u=e.n(c),i=e(2),a=u.a.createContext(),s=function(){return Object(c.useContext)(a)},o="singIn",f="signOut",d=function(t,n){switch(n.type){case o:return{isSignIn:!0,loading:!1,userData:n.userData,uid:n.uid};case f:return{isSignIn:!1,loading:!1,userData:null,uid:null};default:return t}},l=function(t){var n=t.children,e=Object(c.useReducer)(d,{isSignIn:!1,loading:!0,userData:null,uid:null}),u=Object(r.a)(e,2),s=u[0],l=u[1];return Object(i.jsx)(a.Provider,{value:{isSignIn:s.isSignIn,loading:s.loading,userData:s.userData,uid:s.uid,signIn:function(t,n){console.log("signIn",t),l({type:o,userData:t,uid:n})},signOut:function(){l({type:f})}},children:n})}},101:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return f}));var r=e(0),c=e.n(r),u=e(316),i=e.n(u),a=e(2),s=c.a.createContext(),o=function(){return Object(r.useContext)(s)};function f(t){var n=t.children,e=i.a.createInstance([]),r=i.a.createInstance({}),c=i.a.createInstance({}),u=i.a.createInstance({});return e.config({name:"collections",storeName:"user_collection"}),r.config({name:"collections",storeName:"colection_chunk_height"}),c.config({name:"collections",storeName:"bookmarks"}),u.config({name:"collections",storeName:"settings"}),Object(a.jsx)(s.Provider,{value:{userCollection:e,colectionChunkHeight:r,bookmarks:c,settings:u},children:n})}},105:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return b}));var r=e(5),c=e(3),u=e(0),i=e.n(u),a=e(2),s=i.a.createContext(),o=function(){return Object(u.useContext)(s)},f="SHOW",d="HIDE",l=function(t,n){switch(n.type){case f:return Object(c.a)(Object(c.a)({},t),{},{status:!0});case d:return Object(c.a)(Object(c.a)({},t),{},{status:!1});default:return t}},b=function(t){var n=t.children,e=Object(u.useReducer)(l,{status:!1}),c=Object(r.a)(e,2),i=c[0],o=c[1];return Object(a.jsx)(s.Provider,{value:{status:i.status,show:function(){return o({type:f})},hide:function(){return o({type:d})}},children:n})}},141:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return O}));var r=e(5),c=e(3),u=e(0),i=e.n(u),a=e(2),s=i.a.createContext(),o=function(){return Object(u.useContext)(s)},f="ON",d="OFF",l="HIDE",b=!1,j=function(t,n){switch(n.type){case f:return Object(c.a)(Object(c.a)({},t),{},{status:f});case d:return Object(c.a)(Object(c.a)({},t),{},{status:d});case l:return Object(c.a)(Object(c.a)({},t),{},{status:l});case b:return Object(c.a)(Object(c.a)({},t),{},{status:b});default:return t}},O=function(t){var n=t.children,e=Object(u.useReducer)(j,{status:!1}),c=Object(r.a)(e,2),i=c[0],o=c[1];return Object(a.jsx)(s.Provider,{value:{status:i.status,on:function(){return o({type:f})},off:function(){return o({type:d})},hide:function(){return o({type:l})},reset:function(){return o({type:b})}},children:n})}},142:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return o}));var r=e(5),c=e(0),u=e.n(c),i=e(2),a=u.a.createContext(),s=function(){return Object(c.useContext)(a)},o=function(t){var n=t.children,e=Object(c.useState)({updated:!1}),u=Object(r.a)(e,2),s=u[0],o=u[1];return Object(i.jsx)(a.Provider,{value:{updated:s,update:function(){return o({updated:!0})}},children:n})}},206:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return l}));var r=e(5),c=e(0),u=e.n(c),i=e(2),a=u.a.createContext(),s=function(){return Object(c.useContext)(a)},o="singIn",f="signOut",d=function(t,n){switch(n.type){case o:return{isSignIn:!0};case f:return{isSignIn:!1};default:return t}},l=function(t){var n=t.children,e=Object(c.useReducer)(d,{isSignIn:!1}),u=Object(r.a)(e,2),s=u[0],l=u[1];return Object(i.jsx)(a.Provider,{value:{isSignIn:s.isSignIn,signIn:function(){l({type:o})},signOut:function(){l({type:f})}},children:n})}},261:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(0),c=e(100),u=e(105),i=e(2);function a(){var t=Object(c.b)(),n=Object(u.b)();return Object(r.useEffect)((function(){!1===t.loading&&!0===t.isSignIn&&n.hide()}),[t]),Object(i.jsx)(i.Fragment,{})}},571:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return h}));var r=e(26),c=e.n(r),u=e(31),i=e(0),a=e(141),s=e(142),o=(e(105),e(100)),f=e(206),d=e(101),l=e(20),b=(e(261),e(2)),j=Object(i.lazy)((function(){return new Promise(function(){var t=Object(u.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(25)]).then(e.bind(null,317));case 2:r=t.sent,l.b.inc(),n(r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())})),O=Object(i.lazy)((function(){return new Promise(function(){var t=Object(u.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(2),e.e(19),e.e(21)]).then(e.bind(null,543));case 2:r=t.sent,l.b.inc(),n(r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}));function h(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(f.a,{children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(a.a,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(s.a,{children:Object(b.jsx)(O,{})})]})})})})})}}}]);
//# sourceMappingURL=22.3ed84381.chunk.js.map