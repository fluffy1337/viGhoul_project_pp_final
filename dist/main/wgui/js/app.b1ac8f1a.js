(function(t){function e(e){for(var r,s,u=e[0],o=e[1],i=e[2],d=0,b=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b3c":function(t,e,n){"use strict";n("5436")},"3c44":function(t,e,n){},"479f":function(t,e,n){},"4bd1":function(t,e,n){"use strict";n("84fa")},5436:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"header"},c={id:"nav"},s=Object(r["f"])("Документация"),u=Object(r["f"])(" | "),o=Object(r["f"])("Тренировочный ружим"),i=Object(r["f"])(" | "),l=Object(r["f"])("Контрольный режим");function d(t,e,n,d,b,f){var p=Object(r["w"])("TestIndicator"),O=Object(r["w"])("router-link"),j=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("div",a,[Object(r["D"])(Object(r["g"])("input",{type:"text",placeholder:"Фамилия Имя",id:"uname","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.uname=e})},null,512),[[r["A"],t.uname]]),Object(r["D"])(Object(r["g"])("input",{type:"text",placeholder:"Класс",id:"ugroup","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.ugroup=e})},null,512),[[r["A"],t.ugroup]]),t.runningTest?(Object(r["p"])(),Object(r["d"])(p,{key:0,timeElapsed:t._timeElapsed,timeTotal:t._timeTotal,tasksTotal:t.tasksTotal,tasksDone:t.tasksDone},null,8,["timeElapsed","timeTotal","tasksTotal","tasksDone"])):Object(r["e"])("",!0)]),Object(r["g"])("div",c,[Object(r["g"])(O,{to:"/",onClick:e[3]||(e[3]=function(e){return t.runningTest=!1})},{default:Object(r["C"])((function(){return[s]})),_:1}),u,Object(r["g"])(O,{to:"/test/train",onClick:e[4]||(e[4]=function(t){return f.startTest(!0)})},{default:Object(r["C"])((function(){return[o]})),_:1}),i,Object(r["g"])(O,{to:"/test/controll",onClick:e[5]||(e[5]=function(t){return f.startTest(!1)})},{default:Object(r["C"])((function(){return[l]})),_:1})]),Object(r["g"])(j,{_test:t.test,tasksDone:t.tasksDone,set:f.set,nextTask:f.nextTask,results:t.results,train:t.train},null,8,["_test","tasksDone","set","nextTask","results","train"])])}var b=n("53ca"),f=n("1da1"),p=(n("ac1f"),n("5319"),n("d81d"),n("1276"),n("a434"),n("96cf"),Object(r["E"])("data-v-7e9cc47c"));Object(r["s"])("data-v-7e9cc47c");var O={class:"timeIndicator"},j={class:"first"},m={class:"second"};Object(r["q"])();var v=p((function(t,e,n,a,c,s){return Object(r["p"])(),Object(r["d"])("div",O,[Object(r["g"])("div",j,"Времени прошло: "+Object(r["y"])(n.timeElapsed)+" / "+Object(r["y"])(n.timeTotal),1),Object(r["g"])("div",m,"Заданий сделано: "+Object(r["y"])(n.tasksDone)+" / "+Object(r["y"])(n.tasksTotal),1)])})),h={props:["timeElapsed","timeTotal","tasksTotal","tasksDone"]};n("847e");h.render=v,h.__scopeId="data-v-7e9cc47c";var g=h,k={data:function(){return{runningTest:!1,timeEnd:0,timeStart:0,tasksTotal:0,tasksDone:0,_timeElapsed:"00:00",_timeTotal:"00:00",train:!1,results:{tasks:[],mark:null,vmark:null},test:[{question:"кто",correctAnswer:"я",answer:null},{question:"привет",correctAnswer:"да",answer:null}],uname:"",ugroup:""}},methods:{formatTime:function(t){t/=1e3;var e=[parseInt(t/60),parseInt(t%60)],n=e[0],r=e[1];return(n<10?"0":"")+n+":"+(r<10?"0":"")+r},timeElapsed:function(t){return Date.now()-t},testNotOver:function(){return this.runningTest?(this.runningTest=Date.now()<this.timeEnd&&this.tasksDone<this.tasksTotal,this.runningTest||this.testOver(),this.runningTest):this.runningTest},set:function(t,e){this[t]=e},nextTask:function(){this.tasksDone++,this.testNotOver()},testOver:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$router.push("/end"),e.next=3,eel.Judge(t.test,t.train)();case 3:t.results=e.sent;case 4:case"end":return e.stop()}}),e)})))()},startTest:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.train=t,e.uname&&e.ugroup||t){n.next=6;break}return e.$router.replace("/"),e.runningTest=!1,alert('Требуется авторизация. Введите "Фимилию Имя" и "Класс" в соответствующие поля.'),n.abrupt("return");case 6:if(r=null,!t){n.next=14;break}for(r=(prompt('Введите данные для теста в формате (основание системы счисления >= 2! & <= 16): "основание_системы_счисления,количество_заданий;основание_системы_счисления,количество_заданий;..."')||"").split(";").map((function(t){return t.split(",").map((function(t){return parseInt(t)}))})),a=r.length-1;a>=0;a--)("object"!=Object(b["a"])(r[a])||r[a].length<2||r[a][0]<2)&&r.splice(a,1);if(!(r.length<1)){n.next=14;break}return e.$router.replace("/"),alert("Неправильный ответ"),n.abrupt("return");case 14:return n.next=16,eel.GenTest(e.uname,e.ugroup,t,r)();case 16:return e.test=n.sent,e.timeStart=Date.now(),n.t0=e.timeStart,n.t1=6e4,n.next=22,eel.GetTime()();case 22:n.t2=n.sent,n.t3=n.t1*n.t2,e.timeEnd=n.t0+n.t3,e.tasksTotal=e.test.length,e.tasksDone=0,e.runningTest=!0;case 28:case"end":return n.stop()}}),n)})))()}},components:{TestIndicator:g},mounted:function(){var t=this;setInterval((function(){t.runningTest&&t.testNotOver()&&(t._timeElapsed=t.formatTime(t.timeElapsed(t.timeStart)),t._timeTotal=t.formatTime(t.timeEnd-t.timeStart))}),1e3)},setup:function(){window.onclose=eel.WindowClose}};n("6bff");k.render=d;var w=k,T=(n("7db0"),n("fb6a"),n("a630"),n("3ca3"),n("159b"),n("b64b"),n("6c02")),y=Object(r["E"])("data-v-8453740c");Object(r["s"])("data-v-8453740c");var _=Object(r["g"])("h1",null,"Здравствуйте!",-1),x=Object(r["f"])(' Данный тест предназначен для проверки знаний ученика. Вверху находятся два окна, напишите вних свое имя и фамилию, а также свой класс. Вы можете потренироваться во вкладке "Тренировочный режим", как будите готовы переходите в контрольный режим для выставления окончательной оценки. ');Object(r["q"])();var A=y((function(t,e,n,a,c,s){return Object(r["p"])(),Object(r["d"])("div",null,[_,x])})),D={name:"Docs"};n("b0ff");D.render=A,D.__scopeId="data-v-8453740c";var E=D,I=n("3835"),C=(n("4fad"),Object(r["E"])("data-v-8d127ae6"));Object(r["s"])("data-v-8d127ae6");var S={class:"test"};Object(r["q"])();var q=C((function(t,e,n,a,c,s){var u=Object(r["w"])("Task");return Object(r["p"])(),Object(r["d"])("div",S,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(Object.entries(n._test),(function(t){var e=Object(I["a"])(t,2),a=e[0],c=e[1];return Object(r["p"])(),Object(r["d"])(u,{key:a,n:a,task:c.question,text:c.text,hint:c.hint,correctAnswer:c.correctAnswer,currentTask:n.tasksDone,train:n.train,onAnswer:s.onAnswer},null,8,["n","task","text","hint","correctAnswer","currentTask","train","onAnswer"])})),128))])})),$=Object(r["E"])("data-v-eb9296d8");Object(r["s"])("data-v-eb9296d8");var P={key:0},M={class:"bigger"},N=Object(r["f"])(" ?"),R=Object(r["g"])("br",null,null,-1),J=Object(r["g"])("span",{class:"smaller"},"Ответ введите в виде десятичного числа, без лишних разделителей.",-1),U={class:"flex"},V={key:0,style:{"margin-top":"8px"}},G={key:0};Object(r["q"])();var K=$((function(t,e,n,a,c,s){return n.currentTask==n.n?(Object(r["p"])(),Object(r["d"])("div",P,[Object(r["g"])("div",null,[Object(r["f"])(Object(r["y"])(n.text)+" ",1),Object(r["g"])("span",M,Object(r["y"])(n.task),1),N,R,J]),Object(r["g"])("div",U,[Object(r["D"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.answer=e}),placeholder:"Введите ответ",onKeydown:e[2]||(e[2]=function(e){return 13==e.which&&t.$emit("answer",t.answer)}),ref:"ans"},null,544),[[r["A"],t.answer]]),Object(r["g"])("input",{type:"button",value:"Далее",onClick:e[3]||(e[3]=function(e){return t.$emit("answer",t.answer)})}),n.train?(Object(r["p"])(),Object(r["d"])("input",{key:0,type:"button",value:t.showAnswer?"Скрыть ответ":"Посмотреть ответ",onClick:e[4]||(e[4]=function(e){return t.showAnswer=!t.showAnswer})},null,8,["value"])):Object(r["e"])("",!0)]),t.showAnswer?(Object(r["p"])(),Object(r["d"])("div",V,[Object(r["g"])("div",null,"Правильный ответ: "+Object(r["y"])(n.correctAnswer),1),n.hint?(Object(r["p"])(),Object(r["d"])("div",G,Object(r["y"])(n.hint),1)):Object(r["e"])("",!0)])):Object(r["e"])("",!0)])):Object(r["e"])("",!0)})),W={props:["task","n","currentTask","train","hint","correctAnswer","text"],data:()=>({answer:"",showAnswer:!1}),updated(){this.$refs.ans&&this.$refs.ans.focus()}};n("3b3c");W.render=K,W.__scopeId="data-v-eb9296d8";var z=W,B={props:["set","_test","tasksDone","nextTask","train"],methods:{onAnswer:function(t){var e=this._test;e[this.tasksDone].answer=t,this.set("test",e),this.nextTask()}},mounted:function(){this.$route.params.mode},components:{Task:z}};n("d948");B.render=q,B.__scopeId="data-v-8d127ae6";var F=B,H=Object(r["E"])("data-v-a4b12948");Object(r["s"])("data-v-a4b12948");var L=Object(r["g"])("table",null,[Object(r["g"])("tr",null,[Object(r["g"])("td",null,"Правильность"),Object(r["g"])("td",null,"Ваш ответ"),Object(r["g"])("td",null,"Правильный ответ")])],-1);Object(r["q"])();var Q=H((function(t,e,n,a,c,s){return Object(r["p"])(),Object(r["d"])("div",null,[L,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(Object.entries(n.results.tasks),(function(t){var e=Object(I["a"])(t,2),n=e[0],a=e[1];return Object(r["p"])(),Object(r["d"])("table",{class:["result",{good:a.correct}],key:n},[Object(r["g"])("tr",null,[Object(r["g"])("td",null,Object(r["y"])(a.correct?"+":"-"),1),Object(r["g"])("td",null,Object(r["y"])(a.answer||"Ответ не дан"),1),Object(r["g"])("td",null,Object(r["y"])(a.correctAnswer),1)])],2)})),128)),Object(r["g"])("div",null,"Результат: "+Object(r["y"])(parseInt(100*n.results.mark))+"%",1),Object(r["g"])("div",null,"Оценка: "+Object(r["y"])(n.results.vmark),1)])})),X={props:["results"]};n("4bd1");X.render=Q,X.__scopeId="data-v-a4b12948";var Y=X,Z="Супер тест - ",tt=[{path:"/",name:"Docs",component:E,meta:{title:Z+"Документация"}},{path:"/test/:mode",name:"Test",component:F,meta:{title:Z+"Тест"}},{path:"/end",name:"End",component:Y,meta:{title:Z+"Результаты"}}],et=Object(T["a"])({history:Object(T["b"])(),routes:tt});et.beforeEach((function(t,e,n){var r=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),a=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags})),c=e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(r?document.title=r.meta.title:c&&(document.title=c.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!a)return n();a.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),n()}));var nt=et;Object(r["c"])(w).use(nt).mount("#app")},"6bff":function(t,e,n){"use strict";n("df3a")},"81f9":function(t,e,n){},"847e":function(t,e,n){"use strict";n("3c44")},"84fa":function(t,e,n){},b0ff:function(t,e,n){"use strict";n("81f9")},d948:function(t,e,n){"use strict";n("479f")},df3a:function(t,e,n){}});
//# sourceMappingURL=app.b1ac8f1a.js.map