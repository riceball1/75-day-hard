(function(e){function t(t){for(var n,c,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},o={app:0},r=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1fc9":function(e,t,a){"use strict";a("25fc")},"25fc":function(e,t,a){},"2b4e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function o(e,t,a,o,r,c){var i=Object(n["k"])("MainPage");return Object(n["g"])(),Object(n["c"])(i)}var r=Object(n["m"])("data-v-7dbfab0e");Object(n["i"])("data-v-7dbfab0e");var c={class:"mainpage"},i={key:0,class:"selection"},s=Object(n["f"])("p",null,"Select Your Level",-1),l={class:"selection-options"},u=Object(n["f"])("span",{class:"number"},"25",-1),d=Object(n["e"])(" Easy "),b=Object(n["f"])("span",{class:"number"},"50",-1),f=Object(n["e"])(" Medium "),p=Object(n["f"])("span",{class:"number"},"75",-1),h=Object(n["e"])(" Hard "),v={key:1,class:"list"},O={key:2,class:"list-footer"};Object(n["h"])();var j=r((function(e,t,a,o,r,j){var g=Object(n["k"])("MainPageHeader"),m=Object(n["k"])("Footer");return Object(n["g"])(),Object(n["c"])("main",c,[Object(n["f"])(g,{onResetChallenge:j.handleResetChallenge,onLogin:j.handleLogin,currentDay:r.currentDay,variationDays:r.variationDays},null,8,["onResetChallenge","onLogin","currentDay","variationDays"]),0==r.variationDays?(Object(n["g"])(),Object(n["c"])("section",i,[s,Object(n["f"])("div",l,[Object(n["f"])("div",{class:"card-levels",onClick:t[1]||(t[1]=function(e){return j.selectVariation("easy")})},[u,d]),Object(n["f"])("div",{class:"card-levels",onClick:t[2]||(t[2]=function(e){return j.selectVariation("medium")})},[b,f]),Object(n["f"])("div",{class:"card-levels",onClick:t[3]||(t[3]=function(e){return j.selectVariation("hard")})},[p,h])])])):Object(n["d"])("",!0),r.variation?(Object(n["g"])(),Object(n["c"])("section",v,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(r.generalTasks,(function(e){return Object(n["g"])(),Object(n["c"])("p",{class:["list-item",{"selected-item":e.completed}],key:e,onClick:function(t){return j.checkTask(e.id)}},Object(n["l"])(e.task),11,["onClick"])})),128))])):Object(n["d"])("",!0),75!==r.currentDay&&r.variation?(Object(n["g"])(),Object(n["c"])("div",O,[Object(n["f"])("button",{onClick:t[4]||(t[4]=function(e){return j.completeDay()}),disabled:5!==r.tasksCompleted}," Day Completed ",8,["disabled"])])):Object(n["d"])("",!0),Object(n["f"])(m)])})),g=Object(n["m"])("data-v-65bb3466");Object(n["i"])("data-v-65bb3466");var m={class:"counter"},k={class:"header-subsection"};Object(n["h"])();var y=g((function(e,t,a,o,r,c){return Object(n["g"])(),Object(n["c"])("header",null,[Object(n["f"])("div",m,[Object(n["f"])("h1",null,Object(n["l"])(a.currentDay),1),Object(n["f"])("p",null,"/"+Object(n["l"])(a.variationDays)+" Days Hard Challenge",1)]),Object(n["f"])("div",k,[Object(n["f"])("button",{class:"login",onClick:t[1]||(t[1]=function(e){return c.handleLogin()})},"login"),Object(n["f"])("button",{onClick:t[2]||(t[2]=function(e){return c.handleResetChallenge()}),class:"reset-button"}," reset ")])])})),w=(a("a9e3"),{name:"MainPageHeader",props:{currentDay:Number,variationDays:Number},methods:{handleResetChallenge:function(){this.$emit("resetChallenge")},handleLogin:function(){this.$emit("login")}}});a("e04f");w.render=y,w.__scopeId="data-v-65bb3466";var D=w,C=Object(n["m"])("data-v-42a93914");Object(n["i"])("data-v-42a93914");var T=Object(n["e"])("Github Repo 2021 👋 "),M=Object(n["f"])("a",{href:"https://github.com/riceball1/75-day-hard",target:"_blank"},"riceball1",-1);Object(n["h"])();var P=C((function(e,t,a,o,r,c){return Object(n["g"])(),Object(n["c"])("footer",null,[T,M])})),_={name:"Footer"};a("1fc9");_.render=P,_.__scopeId="data-v-42a93914";var R=_,N={name:"MainPage",props:{},components:{MainPageHeader:D,Footer:R},data:function(){return{generalTasks:[{task:"Two 45-minute workouts (at least one workout outdoors) 🏋️",completed:!1,id:0,timesCompleted:0},{task:"Drink 1 gallon of water 🚰",completed:!1,id:1},{task:"No Alcohol or Cheat Meals ❌",completed:!1,id:2},{task:"Read 10 pages of non-fiction 📚",completed:!1,id:3},{task:"Follow a diet ✍️",completed:!1,id:4}],isCheckAll:!1,variation:"",variationDays:0,currentDay:0,tasksCompleted:0,pages:[{pageNumber:1,tasks:["Two 45-minute workouts (at least one workout outdoors) 🏋️","Drink 1 gallon of water 🚰","No Alcohol or Cheat Meals ❌","Read 10 pages of non-fiction 📚","Follow a diet ✍️"]},{pageNumber:2,tasks:["Two 45-minute workouts (at least one workout outdoors) 🏋️","Drink 1 gallon of water 🚰","No Alcohol or Cheat Meals ❌","Read 10 pages of non-fiction 📚","Follow a diet ✍️"]},{pageNumber:3,tasks:["Two 45-minute workouts (at least one workout outdoors) 🏋️","Drink 1 gallon of water 🚰","No Alcohol or Cheat Meals ❌","Read 10 pages of non-fiction 📚","Follow a diet ✍️"]}]}},methods:{selectVariation:function(e){switch(this.variation=e,e){case"easy":return void(this.variationDays=25);case"medium":return void(this.variationDays=50);case"hard":default:this.variationDays=75}},checkTask:function(e){this.generalTasks[e].completed?(this.generalTasks[e].completed=!this.generalTasks[e].completed,this.tasksCompleted=this.tasksCompleted-1):(this.generalTasks[e].completed=!this.generalTasks[e].completed,this.tasksCompleted=this.tasksCompleted+1)},completeDay:function(){for(var e in this.currentDay=this.currentDay+1,this.generalTasks)this.generalTasks[e].completed=!1;this.tasksCompleted=0,this.currentDay===this.variationDays&&alert("You've completed the challenge")},handleResetChallenge:function(){this.currentDay=0,this.variation="",this.variationDays=0,alert("You're on day 0 now :P")},handleLogin:function(){alert("Login not implemented")}}};a("5744");N.render=j,N.__scopeId="data-v-7dbfab0e";var L=N,F={name:"App",components:{MainPage:L}};a("97d5");F.render=o;var x=F;Object(n["b"])(x).mount("#app")},5744:function(e,t,a){"use strict";a("9903")},"97d5":function(e,t,a){"use strict";a("97fe")},"97fe":function(e,t,a){},9903:function(e,t,a){},e04f:function(e,t,a){"use strict";a("2b4e")}});
//# sourceMappingURL=app.6297f49b.js.map