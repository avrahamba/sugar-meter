(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/sugar-meter/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"link-img",attrs:{src:n("ca1c")}})]),r("router-link",{attrs:{to:"/details"}},[r("img",{staticClass:"link-img",attrs:{src:n("5f9c")}})])],1),r("router-view")],1)},s=[],o=(n("5c0b"),n("2877")),i={},c=Object(o["a"])(i,a,s,!1,null,null,null),u=c.exports,l=n("9483");Object(l["a"])("".concat("/sugar-meter/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("add-test")],1)},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"add-test"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sugar,expression:"sugar"}],attrs:{type:"number"},domProps:{value:t.sugar},on:{input:function(e){e.target.composing||(t.sugar=e.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.timeInDay,expression:"timeInDay"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.timeInDay=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"1"}},[t._v("צום")]),n("option",{attrs:{value:"2"}},[t._v("אחרי ארוחת בוקר")]),n("option",{attrs:{value:"3"}},[t._v("לפני ארוחת צהריים")]),n("option",{attrs:{value:"4"}},[t._v("אחרי ארוחת צהריים")]),n("option",{attrs:{value:"5"}},[t._v("לפני ארוחת ערב")]),n("option",{attrs:{value:"6"}},[t._v("אחרי ארוחת ערב")]),n("option",{attrs:{value:"7"}},[t._v("לפני השינה")])]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.toDay,expression:"toDay"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.toDay=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"1"}},[t._v("היום")]),n("option",{attrs:{value:"2"}},[t._v("אתמול")])]),n("button",{on:{click:t.addTest}},[t._v("הוסיפי בדיקה")])])},m=[],g={data:function(){return{sugar:100,timeInDay:1,toDay:1}},methods:{addTest:function(){var t=this;this.$store.dispatch({type:"addTest",sugar:this.sugar,timeInDay:this.timeInDay,toDay:this.toDay}).then((function(){t.$router.push("/details")}))}}},y=g,h=Object(o["a"])(y,v,m,!1,null,null,null),b=h.exports,D={name:"Home",created:function(){this.$store.dispatch({type:"loadTests"})},computed:{tests:function(){return this.$store.getters.tests}},components:{addTest:b}},w=D,_=Object(o["a"])(w,f,p,!1,null,null,null),I=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"details"},[n("button",{on:{click:t.exportFile}},[t._v("יצאי כקובץ")]),t._l(t.tests,(function(t){return n("test-preview",{key:t.day,attrs:{test:t}})}))],2)},O=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"test-preview"},[n("span",[t._v(t._s(t.date)+" ")]),n("span",[t._v(t._s(t.test.sugar)+" ")]),n("span",[t._v(t._s(t.inDay))])])},k=[],T=(n("99af"),{props:{test:Object},computed:{date:function(){var t=new Date(this.test.day);return"".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())},inDay:function(){switch(this.test.timeInDay){case 1:case"1":return"צום";case 2:case"2":return"אחרי ארוחת בוקר";case 3:case"3":return"לפני ארוחת צהריים";case 4:case"4":return"אחרי ארוחת צהריים";case 5:case"5":return"לפני ארוחת ערב";case 6:case"6":return"אחרי ארוחת ערב";case 7:case"7":return"לפני השינה"}return""}}}),S=T,$=Object(o["a"])(S,j,k,!1,null,null,null),C=$.exports,P=(n("c740"),n("4160"),n("d81d"),n("13d5"),n("159b"),function(t){t=t.map((function(t){var e=new Date(t.day);return e="".concat(e.getDate(),"/").concat(e.getMonth(),"/").concat(e.getFullYear()),{day:e,sugar:t.sugar,timeInDay:t.timeInDay}}));var e=t.reduce((function(t,e){var n=t.findIndex((function(t){return t.day===e.day}));return-1===n?t.push({day:e.day,tests:[{sugar:e.sugar,timeInDay:e.timeInDay}]}):t[n].tests.push({sugar:e.sugar,timeInDay:e.timeInDay}),t}),[]),n="תאריך, צום, אחרי-ארוחת-בוקר, לפני-ארוחת-צהריים, אחרי-ארוחת-צהריים, לפני-ארוחת-ערב, אחרי-ארוחת-ערב, לפני-השינה ";e.forEach((function(t){n+="\r\n".concat(t.day,","),t.tests.reverse();var e=t.tests[0].timeInDay;t.tests.forEach((function(t){for(var r=t.timeInDay-e,a=0;a<r;a++)n+=",";n+=t.sugar,e=t.timeInDay})),n+=","}));var r=document.createElement("a");r.href="data:text/csv;charset=utf-8,".concat(encodeURI(n)),r.setAttribute("download","טבלת סוכר.csv"),r.click(),console.log("strCsv :",n)}),E={createCsv:P},M={computed:{created:function(){this.$store.dispatch({type:"loadTests"})},tests:function(){return this.$store.getters.tests.sort((function(t,e){var n=new Date(t.day).getDate()+100*new Date(t.day).getMonth(),r=new Date(e.day).getDate()+100*new Date(e.day).getMonth();return n===r?t.timeInDay<e.timeInDay:n<r}))}},methods:{exportFile:function(){E.createCsv(this.tests)}},components:{testPreview:C}},N=M,A=Object(o["a"])(N,x,O,!1,null,null,null),F=A.exports;r["a"].use(d["a"]);var J=[{path:"/",name:"home",component:I},{path:"/details",name:"details",component:F}],Y=new d["a"]({mode:"history",base:"/sugar-meter/",routes:J}),q=Y,B=(n("d3b7"),n("2f62"));r["a"].use(B["a"]);var H=new B["a"].Store({state:{tests:[]},getters:{tests:function(t){return t.tests}},mutations:{addTest:function(t,e){t.tests.push(e)},loadTests:function(t,e){t.tests=e}},actions:{addTest:function(t,e){var n=e.sugar,r=e.timeInDay,a=e.toDay,s=1===a?Date.now():Date.now()-864e5;return t.commit("addTest",{sugar:n,timeInDay:r,day:s}),localStorage.tests=JSON.stringify(t.getters.tests),Promise.resolve()},loadTests:function(t){if(localStorage.tests&&!t.getters.tests.length){var e=JSON.parse(localStorage.tests);t.commit("loadTests",e)}}}});n("b7e3");r["a"].config.productionTip=!1,new r["a"]({router:q,store:H,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f9c":function(t,e,n){t.exports=n.p+"img/View-Details.4fd2e605.svg"},"9c0c":function(t,e,n){},b7e3:function(t,e,n){},ca1c:function(t,e,n){t.exports=n.p+"img/blad-test.195d4973.svg"}});
//# sourceMappingURL=app.2e68c703.js.map