(this.webpackJsonpmoradia=this.webpackJsonpmoradia||[]).push([[0],{53:function(e,a,t){e.exports=t(62)},58:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),i=(t(58),t(46)),u=t(103),o=t(20),m=t(28),s=t(19),d=t(93),b=t(36),g=t(106),p=t(99),E=t(98),v=t(64),f=t(100),y=t(101),k=t(102),j=t(97);function h(){var e=Object(n.useState)("kg"),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),u=i[0],h=i[1],x=Object(n.useState)(0),O=Object(s.a)(x,2),q=O[0],P=O[1],C=Object(n.useState)({}),N=Object(s.a)(C,2),S=N[0],A=N[1],Q=Object(n.useState)(2),F=Object(s.a)(Q,2),W=F[0],L=F[1],z=Object(n.useState)([{}]),B=Object(s.a)(z,2),D=B[0],M=B[1];return Object(n.useEffect)((function(){if("kg"===t){var e=0;u.forEach((function(a){e+=Number(a.qnt)})),P(e)}}),[u,t]),Object(n.useEffect)((function(){for(var e=Object(m.a)(D),a=0;a<e.length;a++)if(e[a].result&&e[a].result.length>0){e[a].result=[];for(var n=0;n<u.length;n++){var r=(u[n].qnt/q*e[a].qnt).toFixed(W);e[a].result.push("".concat(r," ").concat(t," de ").concat(u[n].name).concat("kg"===t&&u[n].byPackage?" em ".concat(r/Number(u[n].byPackage)," pacotes de ").concat(u[n].byPackage,"kg"):""))}}M(e)}),[u,q,W]),r.a.createElement(d.a,{container:!0,justify:"center",style:{marginTop:"20px"}},r.a.createElement(d.a,{item:!0,sm:6},r.a.createElement(b.a,{variant:"h5",color:"primary"},"Moradia UFF - Distribui\xe7\xe3o de alimentos ;)"),r.a.createElement(b.a,{color:"primary"},"Seja bem vindo!"),r.a.createElement("br",null),r.a.createElement(b.a,null,"Qual o tipo de divis\xe3o de alimentos deseja fazer?"),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"outlined",style:{margin:"8px",marginLeft:"0px"},select:!0,label:"Tipo de opera\xe7\xe3o",value:t,onChange:function(e){l(e.target.value),"itens"===e.target.value&&P(0),h([]),A({}),M([{}])}},r.a.createElement(p.a,{value:"kg"},"Divis\xe3o por Kg"),r.a.createElement(p.a,{value:"itens"},"Divis\xe3o por itens")),r.a.createElement(g.a,{variant:"outlined",label:"Precis\xe3o",style:{margin:"8px",maxWidth:"70px"},type:"Number",value:W,onChange:function(e){var a=Number(e.target.value);a<0&&(a=0),a>6&&(a=6),L(a)}}),r.a.createElement("br",null),r.a.createElement("br",null),u.length>0?r.a.createElement("div",null,r.a.createElement(E.a,null,u.map((function(e,a){return r.a.createElement(v.a,{key:a},r.a.createElement(f.a,{primary:e.name,secondary:"".concat(e.qnt," ").concat(t," ").concat(e.byPackage&&"kg"===t?"- ".concat(e.byPackage,"kg por pacote"):"")})," ",r.a.createElement(y.a,null,r.a.createElement(k.a,{variant:"outlined",onClick:function(){return h(u.filter((function(e,t){return t!==a})))}},"Remover")))})))):null,r.a.createElement(b.a,null,"Certo, agora adicione os itens que deseja dividir e suas respectivas quantidades:"),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"outlined",style:{padding:"20px",paddingLeft:"0px"}},r.a.createElement(g.a,{variant:"outlined",label:"Nome do item",type:"text",style:{margin:"8px"},value:S.name||"",onChange:function(e){return A(Object(o.a)(Object(o.a)({},S),{},{name:e.target.value}))}}),r.a.createElement(g.a,{variant:"outlined",label:"Quantidade em "+t,type:"number",style:{margin:"8px"},value:S.qnt||"",onChange:function(e){return A(Object(o.a)(Object(o.a)({},S),{},{qnt:e.target.value}))}}),"kg"===t?r.a.createElement(g.a,{variant:"outlined",label:"kg de cada pacote",type:"number",style:{margin:"8px"},value:S.byPackage||"",onChange:function(e){return A(Object(o.a)(Object(o.a)({},S),{},{byPackage:e.target.value}))}}):null,r.a.createElement("br",null),r.a.createElement(d.a,{container:!0,justify:"flex-end"},r.a.createElement(k.a,{variant:"outlined",onClick:function(){h([].concat(Object(m.a)(u),[S])),A({})}},"Adicionar item"))),r.a.createElement("br",null),"itens"===t?r.a.createElement("div",null,r.a.createElement(b.a,null,"Para fazer as contas, preciso saber tambem quantas pessoas moram atualmente na moradia(total). Quantas s\xe3o?"),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"outlined",label:"Quantidade de moradores",type:"Number",value:q,onChange:function(e){return P(Number(e.target.value))}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,null,"Agora, irei perguntar quantas pessoas moram em cada ala e informarei quantos ",t," de cada devem ser enviados :)")):r.a.createElement(b.a,null,"Agora, irei perguntar quantos ",t," ir\xe3o para cada ala e informarei quantos ",t," de cada item devem ser enviados :)"),r.a.createElement("br",null),D.map((function(e,a){return r.a.createElement(j.a,{key:a,variant:"outlined",style:{padding:"20px",paddingLeft:"0px",marginBottom:"10px"}},r.a.createElement(b.a,{style:{margin:"8px"}},r.a.createElement("b",null,"Ala ",a+1,":")),r.a.createElement(g.a,{variant:"outlined",label:"itens"===t?"Quantidade de pessoas":"Quantidade em kg",type:"Number",style:{margin:"8px"},value:D[a].qnt||"",onChange:function(e){var n=Object(m.a)(D);n[a].qnt=Number(e.target.value),n[a].result=[];for(var r=0;r<u.length;r++){var l=(u[r].qnt/q*n[a].qnt).toFixed(W);n[a].result.push("".concat(l," ").concat(t," de ").concat(u[r].name).concat("kg"===t&&u[r].byPackage?" em ".concat(l/Number(u[r].byPackage)," pacotes de ").concat(u[r].byPackage,"kg"):""))}M(n)}}),r.a.createElement("br",null),D[a].result?r.a.createElement("div",null,r.a.createElement(b.a,{style:{margin:"8px"}},r.a.createElement("b",null,"Esta ala deve receber:")),r.a.createElement("br",null),r.a.createElement("ul",null,D[a].result.map((function(e,a){return r.a.createElement("li",{key:a}," ",e," ")})))):null)})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",onClick:function(){return M([].concat(Object(m.a)(D),[{}]))},style:{marginBottom:"10px"}},"Adicionar ala")))}var x=t(104),O=t(105),q=Object(i.a)({typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500},palette:{type:"dark"}});function P(e){return r.a.createElement(u.a,{theme:q},r.a.createElement(x.a,{maxWidth:"xl"},r.a.createElement(O.a,null),r.a.createElement(h,null)))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.cb05c3da.chunk.js.map