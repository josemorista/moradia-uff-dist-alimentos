(this.webpackJsonpmoradia=this.webpackJsonpmoradia||[]).push([[0],{53:function(e,a,t){e.exports=t(62)},58:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),i=(t(58),t(46)),u=t(103),o=t(28),m=t(27),s=t(19),d=t(93),b=t(36),E=t(106),p=t(99),v=t(98),g=t(64),f=t(100),y=t(101),j=t(102),h=t(97);function x(){var e=Object(n.useState)("kg"),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),u=i[0],x=i[1],O=Object(n.useState)(0),q=Object(s.a)(O,2),k=q[0],C=q[1],S=Object(n.useState)({}),N=Object(s.a)(S,2),A=N[0],Q=N[1],F=Object(n.useState)(2),W=Object(s.a)(F,2),L=W[0],z=W[1],B=Object(n.useState)([{}]),D=Object(s.a)(B,2),M=D[0],R=D[1];return Object(n.useEffect)((function(){if("kg"===t){var e=0;u.forEach((function(a){e+=Number(a.qnt)})),console.log(e),C(e)}}),[u,t]),Object(n.useEffect)((function(){for(var e=Object(m.a)(M),a=0;a<e.length;a++)if(e[a].result&&e[a].result.length>0){e[a].result=[];for(var n=0;n<u.length;n++)e[a].result.push("".concat((u[n].qnt/k*e[a].qnt).toFixed(L)," ").concat(t," de ").concat(u[n].name))}R(e)}),[u,k,L]),r.a.createElement(d.a,{container:!0,justify:"center",style:{marginTop:"20px"}},r.a.createElement(d.a,{item:!0,sm:6},r.a.createElement(b.a,{variant:"h5",color:"primary"},"Moradia UFF - Distribui\xe7\xe3o de alimentos ;)"),r.a.createElement(b.a,{color:"primary"},"Seja bem vindo!"),r.a.createElement("br",null),r.a.createElement(b.a,null,"Qual o tipo de divis\xe3o de alimentos deseja fazer?"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"outlined",style:{margin:"8px",marginLeft:"0px"},select:!0,label:"Tipo de opera\xe7\xe3o",value:t,onChange:function(e){l(e.target.value),"items"===e.target.value&&C(0),x([]),Q({}),R([{}])}},r.a.createElement(p.a,{value:"kg"},"Divis\xe3o por Kg"),r.a.createElement(p.a,{value:"items"},"Divis\xe3o por items")),r.a.createElement(E.a,{variant:"outlined",label:"Precis\xe3o",style:{margin:"8px",maxWidth:"70px"},type:"Number",value:L,onChange:function(e){var a=Number(e.target.value);a<0&&(a=0),a>6&&(a=6),z(a)}}),r.a.createElement("br",null),r.a.createElement("br",null),u.length>0?r.a.createElement("div",null,r.a.createElement(v.a,null,u.map((function(e,a){return r.a.createElement(g.a,{key:a},r.a.createElement(f.a,{primary:e.name,secondary:"".concat(e.qnt," ").concat(t)})," ",r.a.createElement(y.a,null,r.a.createElement(j.a,{variant:"outlined",onClick:function(){return x(u.filter((function(e,t){return t!==a})))}},"Remover")))})))):null,r.a.createElement(b.a,null,"Certo, agora adicione os items que deseja dividir e suas respectivas quantidades:"),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"outlined",style:{padding:"20px",paddingLeft:"0px"}},r.a.createElement(E.a,{variant:"outlined",label:"Nome do item",type:"text",style:{margin:"8px"},value:A.name||"",onChange:function(e){return Q(Object(o.a)(Object(o.a)({},A),{},{name:e.target.value}))}}),r.a.createElement(E.a,{variant:"outlined",label:"Quantidade em "+t,type:"number",style:{margin:"8px"},value:A.qnt||"",onChange:function(e){return Q(Object(o.a)(Object(o.a)({},A),{},{qnt:e.target.value}))}}),r.a.createElement("br",null),r.a.createElement(d.a,{container:!0,justify:"flex-end"},r.a.createElement(j.a,{variant:"outlined",onClick:function(){x([].concat(Object(m.a)(u),[A])),Q({})}},"Adicionar item"))),r.a.createElement("br",null),"items"===t?r.a.createElement("div",null,r.a.createElement(b.a,null,"Pra fazer as contas preciso saber tambem quantas pessoas moram atualmente na moradia(total). Quantas sao?"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"outlined",label:"Quantidade de moradores",type:"Number",value:k,onChange:function(e){return C(Number(e.target.value))}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,null,"Agora, irei perguntar quantas pessoas moram em cada ala e te direi quantos ",t," de cada devem ser enviados :)")):r.a.createElement(b.a,null,"Agora, irei perguntar quantos ",t," ir\xe3o para cada ala e te direi quantos ",t," de cada devem ser enviados :)"),r.a.createElement("br",null),M.map((function(e,a){return r.a.createElement(h.a,{key:a,variant:"outlined",style:{padding:"20px",paddingLeft:"0px",marginBottom:"10px"}},r.a.createElement(b.a,{style:{margin:"8px"},color:"primary"},r.a.createElement("b",null,"Ala ",a+1,":")),r.a.createElement(E.a,{variant:"outlined",label:"items"===t?"Quantidade de pessoas":"Quantidade em kg",type:"Number",style:{margin:"8px"},value:M[a].qnt||"",onChange:function(e){var n=Object(m.a)(M);n[a].qnt=Number(e.target.value),n[a].result=[];for(var r=0;r<u.length;r++)n[a].result.push("".concat((u[r].qnt/k*n[a].qnt).toFixed(L)," ").concat(t," de ").concat(u[r].name));R(n)}}),r.a.createElement("br",null),M[a].result?r.a.createElement("div",null,r.a.createElement(b.a,{style:{margin:"8px"}},r.a.createElement("b",null,"Esta ala deve receber:")),r.a.createElement("br",null),r.a.createElement("ul",null,M[a].result.map((function(e,a){return r.a.createElement("li",{key:a}," ",e," ")})))):null)})),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"outlined",onClick:function(){return R([].concat(Object(m.a)(M),[{}]))},style:{marginBottom:"10px"}},"Adicionar ala")))}var O=t(104),q=t(105),k=Object(i.a)({typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500},palette:{type:"dark"}});function C(e){return r.a.createElement(u.a,{theme:k},r.a.createElement(O.a,{maxWidth:"xl"},r.a.createElement(q.a,null),r.a.createElement(x,null)))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.797ee210.chunk.js.map