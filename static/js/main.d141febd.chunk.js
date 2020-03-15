(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{207:function(e){e.exports=JSON.parse('{"site.title":"COVID-19 in Finland","site.titles.confirmed":"Confirmed cases","site.titles.deaths":"Deaths","site.titles.recovered":"Recovered","footer.data-source":"Data-source: {HSLink}","footer.made-by":"Source code in {GithubLink}","numbers.confirmed":"confirmed","numbers.deaths":"deaths","numbers.recovered":"recovered","numbers.today":"today","charts.confirmedPerDistrict":"Confirmed cases per health care district","charts.confirmedPerCountry":"Known infection sources by country","charts.infectionsPerDay":"Numbers per day","charts.totalInfectionsPerDay":"Total infections","labels.confirmed":"Confirmed","labels.deaths":"Deaths","labels.recovered":"Recovered","labels.pcs":"pcs","labels.date":"Date"}')},208:function(e){e.exports=JSON.parse('{"site.title":"Koronatartunnat Suomessa","site.titles.confirmed":"Varmistetut tapaukset","site.titles.deaths":"Kuolemat","site.titles.recovered":"Parantuneet","footer.data-source":"Datal\xe4hde: {HSLink}","footer.made-by":"L\xe4hdekoodi: {GithubLink}","numbers.confirmed":"varmistettua tapausta","numbers.deaths":"kuolemaa","numbers.recovered":"parantunutta","numbers.today":"t\xe4n\xe4\xe4n","charts.confirmedPerDistrict":"Vahvistetut tartunnat sairaanhoitopiireitt\xe4in","charts.confirmedPerCountry":"Tiedossa olevat tartunnansaantimaat","charts.infectionsPerDay":"Lukemat p\xe4ivitt\xe4in","charts.totalInfectionsPerDay":"Kaikki tartunnat","labels.confirmed":"Varmistettuja","labels.deaths":"Kuolleita","labels.recovered":"Toipuneita","labels.pcs":"kpl","labels.date":"P\xe4iv\xe4"}')},219:function(e,t,a){e.exports=a(339)},224:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(186),c=a.n(l),i=(a(224),a(36)),o=a(26),d=a(352),m=a(33),u=a(345),s=a(344),f=a(35);function b(){var e=Object(m.a)(["\n  font-size: 0.85rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  @media only screen and (min-width: 770px) {\n    width: 50rem;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n"]);return b=function(){return e},e}var h=f.a.footer(b()),p=function(){return r.a.createElement(h,null,r.a.createElement("p",null,r.a.createElement(s.a,{id:"footer.data-source",values:{HSLink:r.a.createElement("a",{href:"https://github.com/HS-Datadesk/koronavirus-avoindata"},"Helsingin Sanomat")}})),r.a.createElement("p",null,r.a.createElement(s.a,{id:"footer.made-by",values:{GithubLink:r.a.createElement("a",{href:"https://github.com/eevajonnapanula/covid-19"},"Github")}})))},y=a(47),E=a(354),g=a(357),v=a(361),j=a(362),x=a(197),O=a(356),k=a(355),S=function(e){var t=e.data,a=e.title,n=t.map((function(e){return e.x})),l=t.map((function(e){return e.y})),c=l.length>0?Math.max.apply(Math,Object(y.a)(l)):0,i=Object(u.a)().formatMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,a),t.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{theme:g.a.grayscale,domainPadding:20,containerComponent:r.a.createElement(v.a,{responsive:!0}),padding:{bottom:150}},r.a.createElement(j.a,{style:{axis:{stroke:"#e4e3d3"},grid:{stroke:"rgba(188, 187, 174, 0.3)"}},tickFormat:function(e){return"".concat(e," ").concat(i({id:"labels.pcs"}))},dependentAxis:!0,tickLabelComponent:r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{fontSize:"12px",fill:"#e4e3d3"}}))}),r.a.createElement(j.a,{style:{axis:{stroke:"#e4e3d3"}},tickValues:n,tickLabelComponent:r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{textAnchor:"end",fontSize:"12px",fill:"#e4e3d3"},angle:-75}))}),r.a.createElement(k.a,{maxDomain:{y:c+20},data:t,labels:l.map((function(e){return e.toString()})),style:{parent:{border:"1px solid #ccc"},data:{fill:"#23c9ff"},labels:{fontSize:15,fill:"#e4e3d3",padding:15}},animate:{duration:2e3},labelComponent:r.a.createElement(O.a,{dy:0})}))))},D=a(358),w=a(359),C=function(e){var t=e.data,a=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,a),r.a.createElement(D.a,{name:"legend",orientation:"horizontal",gutter:20,data:t.filter((function(e){return e.x})).map((function(e){return{name:"".concat(e.x,": ").concat(e.y)}})),colorScale:["#23c9ff","#f7b267","#a93f55","#6B2D5C","#D7A7B1","#476774","#FBF2C0"],style:{labels:{fill:"#e4e3d3"}},itemsPerRow:5,height:50}),r.a.createElement(w.a,{name:"bar",padAngle:2,innerRadius:100,data:t.filter((function(e){return e.x})),colorScale:["#23c9ff","#f7b267","#a93f55","#6B2D5C","#D7A7B1","#476774","#FBF2C0"],containerComponent:r.a.createElement(v.a,{responsive:!0}),theme:g.a.grayscale,style:{labels:{fill:"transparent"}},labels:function(e){var t=e.datum;return"".concat(t.x,": ").concat(t.y)},labelComponent:r.a.createElement(x.a,null,r.a.createElement(O.a,null)),events:[{target:"data",eventHandlers:{onClick:function(){return[{target:"labels",mutation:function(e){return"transparent"===(e.style&&e.style.fill)?{style:{fill:"#e4e3d3"}}:{style:{fill:"transparent"}}}}]},onMouseOver:function(){return[{target:"labels",mutation:function(){return{style:{fill:"#e4e3d3"}}}}]},onMouseLeave:function(){return[{target:"labels",mutation:function(){return{style:{fill:"transparent"}}}}]}}}]}))},F=a(360),L=a(353),P=a(365),M=a(366),z=function(e){var t=e.data,a=e.title,n=t.map((function(e){return e.y})),l=Object(u.a)().formatMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,a),r.a.createElement(E.a,{theme:g.a.grayscale,domainPadding:20,containerComponent:r.a.createElement(F.a,{responsive:!0}),padding:{bottom:100}},r.a.createElement(j.a,{style:{axis:{stroke:"#e4e3d3"},grid:{stroke:"rgba(188, 187, 174, 0.3)"}},tickFormat:function(e){return"".concat(e," ").concat(l({id:"labels.pcs"}))},dependentAxis:!0,tickLabelComponent:r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{fontSize:"12px",fill:"#e4e3d3"}}))}),r.a.createElement(j.a,{style:{axis:{stroke:"#e4e3d3"}},tickValues:n,tickLabelComponent:r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{textAnchor:"end",fontSize:"12px",fill:"#e4e3d3"},angle:-75}))}),r.a.createElement(L.a,{interpolation:"natural",data:t,labels:n,style:{parent:{border:"1px solid #ccc"},data:{stroke:"#23c9ff"},labels:{fontSize:15,fill:"#e4e3d3",padding:15}},animate:{duration:2e3},padding:{top:20,bottom:60},labelComponent:r.a.createElement(P.a,{pointerLength:0,flyoutStyle:{fill:"transparent",stroke:"transparent",color:"#e4e3d3"},width:5,height:5})}),r.a.createElement(M.a,{animate:{duration:2e3},data:t,size:2,style:{data:{fill:"#23c9ff"}}})))},A=a(200),B=a(83),I=a(118),N=a(120),V=a(201),H=a(212),R=Object(V.a)({start:Object(H.a)(new Date,14),end:new Date}),K=function(e,t){return e.reduce((function(e,a){return void 0!==e.find((function(e){return e.x===a[t]}))?e.map((function(e){return e.x===a[t]?Object(A.a)({},e,{y:e.y+1}):e})):(e.push({x:a[t],y:1}),e)}),[])},G=function(e){return R.map((function(t){return{x:Object(N.a)(t,"dd.MM"),y:e.filter((function(e){return Object(B.a)(Object(I.a)(e.date),t)})).length}}))},J=a(367),T=function(e){var t,a=e.data,l=e.title,c=Object(u.a)().formatMessage,o=a.confirmed.map((function(e){return e.x})),d=a.confirmed.map((function(e){return e.y})),m=Object(n.useState)(""),s=Object(i.a)(m,2),f=s[0],b=s[1],h=Object(n.useState)(""),p=Object(i.a)(h,2),v=p[0],S=p[1],w=Object(n.useState)(""),C=Object(i.a)(w,2),L=C[0],P=C[1],M=Object(n.useState)(""),z=Object(i.a)(M,2),A=z[0],B=z[1],I=(t=d).length>0?Math.max.apply(Math,Object(y.a)(t)):0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,l),a.confirmed.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{theme:g.a.grayscale,domainPadding:20,padding:{bottom:100},containerComponent:r.a.createElement(F.a,{onActivated:function(e){return function(e){var t=e.find((function(e){return"bar-confirmed"===e.childName})),a=e.find((function(e){return"bar-deaths"===e.childName})),n=e.find((function(e){return"bar-recovered"===e.childName}));S(t.y),P(a.y),B(n.y),b(t.x)}(e)},voronoiDimension:"x"})},r.a.createElement(D.a,{name:"legend",title:"".concat(c({id:"labels.date"})," ").concat(f),orientation:"vertical",height:50,gutter:10,data:[{name:"".concat(c({id:"labels.confirmed"})," ").concat(v)},{name:"".concat(c({id:"labels.recovered"})," ").concat(A)},{name:"".concat(c({id:"labels.deaths"})," ").concat(L)}],colorScale:["#23c9ff","#f7b267","#a93f55"],style:{labels:{fill:"#e4e3d3",fontSize:10},title:{fill:"#e4e3d3",fontSize:10}}}),r.a.createElement(j.a,{style:{axis:{stroke:"#e4e3d3"},grid:{stroke:"rgba(188, 187, 174, 0.3)"}},tickFormat:function(e){return"".concat(e," ").concat(c({id:"labels.pcs"}))},dependentAxis:!0,tickLabelComponent:r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{fontSize:"12px",fill:"#e4e3d3"}}))}),r.a.createElement(j.a,{tickValues:o,style:{axis:{stroke:"#e4e3d3"}},tickLabelComponent:r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{textAnchor:"end",fontSize:"12px",fill:"#e4e3d3"},angle:-75}))}),r.a.createElement(J.a,{colorScale:["#23c9ff","#a93f55","#f7b267","#6B2D5C","#D7A7B1"]},r.a.createElement(k.a,{name:"bar-confirmed",maxDomain:{y:I+20},data:a.confirmed,animate:{duration:2e3},style:{labels:{fill:"#e4e3d3"}}}),r.a.createElement(k.a,{name:"bar-deaths",maxDomain:{y:I+20},data:a.deaths,style:{labels:{fill:"#e4e3d3"}},animate:{duration:2e3}}),r.a.createElement(k.a,{name:"bar-recovered",maxDomain:{y:I+20},data:a.recovered,style:{labels:{fill:"#e4e3d3"}},animate:{duration:2e3}})))))},q=function(e){var t=e.data,a=Object(u.a)().formatMessage,l=Object(n.useState)([]),c=Object(i.a)(l,2),o=c[0],d=c[1],m=Object(n.useState)([]),s=Object(i.a)(m,2),f=s[0],b=s[1],h=Object(n.useState)({confirmed:[],deaths:[],recovered:[]}),p=Object(i.a)(h,2),y=p[0],E=p[1],g=Object(n.useState)([]),v=Object(i.a)(g,2),j=v[0],x=v[1];Object(n.useEffect)((function(){if(t){var e=K(t.confirmed,"healthCareDistrict");d(e);var a=K(t.confirmed,"infectionSourceCountry");b(a);var n={confirmed:G(t.confirmed),deaths:G(t.deaths),recovered:G(t.recovered)};E(n);var r=function(e){return R.reduce((function(t,a,n){return 0===n?t.push({x:Object(N.a)(a,"dd.MM"),y:e.filter((function(e){return Object(B.a)(Object(I.a)(e.date),a)})).length}):t.push({x:Object(N.a)(a,"dd.MM"),y:t[n-1].y+e.filter((function(e){return Object(B.a)(Object(I.a)(e.date),a)})).length}),t}),[])}(t.confirmed);x(r)}}),[t]);return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{data:j,title:a({id:"charts.totalInfectionsPerDay"})}),r.a.createElement(T,{data:y,title:a({id:"charts.infectionsPerDay"})}),r.a.createElement(S,{data:o,title:a({id:"charts.confirmedPerDistrict"})}),r.a.createElement(C,{data:f,title:a({id:"charts.confirmedPerCountry"})})):r.a.createElement("div",null,"loading"))};function Q(){var e=Object(m.a)(["\n  font-size: 3rem;\n"]);return Q=function(){return e},e}function U(){var e=Object(m.a)(["\n  min-width: 10rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #222139;\n  padding: 0.5rem;\n"]);return U=function(){return e},e}var W=f.a.div(U()),X=f.a.div(Q()),Y=function(e){var t=e.number,a=e.label;return r.a.createElement(W,null,r.a.createElement(X,null,t),r.a.createElement("p",null,a))};function Z(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 1rem;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 0.5rem;\n  }\n"]);return Z=function(){return e},e}function $(){var e=Object(m.a)(["\n  width: 100%;\n  padding-bottom: 2rem;\n  @media only screen and (min-width: 770px) {\n    width: 30rem;\n  }\n"]);return $=function(){return e},e}var _=f.a.div($()),ee=f.a.div(Z()),te=function(e){var t=e.confirmed,a=e.deaths,n=e.recovered,l=Object(u.a)().formatMessage;return r.a.createElement(_,null,r.a.createElement("h2",null,r.a.createElement(s.a,{id:"site.titles.confirmed"})),r.a.createElement(ee,null,r.a.createElement(Y,{number:t.all,label:l({id:"numbers.confirmed"})}),r.a.createElement(Y,{number:t.today,label:l({id:"numbers.today"})})),r.a.createElement("h2",null,r.a.createElement(s.a,{id:"site.titles.deaths"})),r.a.createElement(ee,null,r.a.createElement(Y,{number:a.all,label:l({id:"numbers.deaths"})}),r.a.createElement(Y,{number:a.today,label:l({id:"numbers.today"})})),r.a.createElement("h2",null,r.a.createElement(s.a,{id:"site.titles.recovered"})),r.a.createElement(ee,null,r.a.createElement(Y,{number:n.all,label:l({id:"numbers.recovered"})}),r.a.createElement(Y,{number:n.today,label:l({id:"numbers.today"})})))},ae=a(143),ne=a(202);function re(){var e=Object(m.a)(['\n  query confirmed {\n    data @rest(type: "Data", path: "/") {\n      confirmed @type(name: "Confirmed") {\n        id\n        date\n        healthCareDistrict\n        infectionSourceCountry\n        infectionSource\n      }\n      deaths @type(name: "Deaths") {\n        id\n        date\n      }\n      recovered @type(name: "Recovered") {\n        id\n        date\n      }\n    }\n  }\n']);return re=function(){return e},e}var le=a.n(ne)()(re()),ce=a(119);function ie(){var e=Object(m.a)(["\n  background-color: ",";\n  border: 0.125rem solid #e4e3d3;\n  color: ",";\n  padding: 1rem;\n  width: 4rem;\n  &:first-child {\n    border-radius: 0.5rem 0 0 0.5rem;\n    border-right: none;\n  }\n\n  &:last-child {\n    border-radius: 0 0.5rem 0.5rem 0;\n    border-left: none;\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 1rem 2rem 1rem;\n  width: 90%;\n  @media only screen and (min-width: 770px) {\n    width: 50rem;\n  }\n"]);return oe=function(){return e},e}function de(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  width: 100%;\n"]);return de=function(){return e},e}var me=f.a.header(de()),ue=f.a.main(oe()),se=f.a.button(ie(),(function(e){return e.active?"#e4e3d3":"#2e2d4d"}),(function(e){return e.active?"#2e2d4d":"#e4e3d3"})),fe=function(e){var t=e.changeLocale,a=Object(u.a)().locale,n=Object(ae.a)(le).data,l=function(){t()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null,r.a.createElement("div",null,r.a.createElement(se,{onClick:l,active:"fi"===a},"FI"),r.a.createElement(se,{onClick:l,active:"en"===a},"EN"))),r.a.createElement(ue,null,r.a.createElement("h1",null,r.a.createElement(s.a,{id:"site.title"})),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{confirmed:{all:n.data.confirmed.length,today:n.data.confirmed.filter((function(e){return Object(ce.a)(new Date(e.date))})).length},deaths:{all:n.data.deaths.length,today:n.data.deaths.filter((function(e){return Object(ce.a)(new Date(e.date))})).length},recovered:{all:n.data.recovered.length,today:n.data.recovered.filter((function(e){return Object(ce.a)(new Date(e.date))})).length}}),r.a.createElement(q,{data:n.data}))),r.a.createElement(p,null))},be=a(207),he=a(208),pe=a(61),ye=a(210),Ee=a(209),ge=new ye.a,ve=new Ee.RestLink({uri:"https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData"}),je=new pe.a({link:ve,cache:ge}),xe={en:be,fi:he},Oe=function(){var e=localStorage.getItem("locale"),t="en"===e||"fi"===e?e:"fi",a=Object(n.useState)(t),l=Object(i.a)(a,2),c=l[0],m=l[1];return r.a.createElement(d.a,{locale:c,messages:xe[c]},r.a.createElement(o.a,{client:je},r.a.createElement(fe,{changeLocale:function(){localStorage.setItem("locale","en"===c?"fi":"en"),m("en"===c?"fi":"en")}})))};c.a.render(r.a.createElement(Oe,null),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.d141febd.chunk.js.map