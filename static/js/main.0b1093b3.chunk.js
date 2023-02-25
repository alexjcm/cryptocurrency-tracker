(this["webpackJsonpcryptocurrency-tracker"]=this["webpackJsonpcryptocurrency-tracker"]||[]).push([[0],{74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var r=c(3),n=c(48),a=c.n(n),s=c(26),i=c(10),o=c(31),l=c.n(o),d=c(35),u=c(11),j=c(25),b=(c(76),c(22)),p=c(49),x=c(80);function m(e){return Object(x.a)(new Date(e),"Pp")}var y={animation:{duration:1500},maintainAspectRatio:!1,responsive:!0,parsing:{xAxisKey:"time",yAxisKey:"price"},scales:{x:{type:"time",display:!0,title:{display:!0,text:"Date"},ticks:{major:{enabled:!0}}},y:{title:{display:!0,text:"Price"},ticks:{callback:function(e){return"$"+e}}}},interaction:{intersect:!1,mode:"index"},plugins:{legend:{labels:{usePointStyle:!0}},title:{display:!0,text:"Chart with Tick Configuration"}},tooltips:{enabled:!1,custom:function(e){if(e.body){var t=document.getElementById("tooltip");t.style.left=e.caretX+"px",t.style.top=e.caretY-66-5+"px",t.style.display="block",t.querySelector(".tooltip-label").textContent=e.dataPoints[0].label,t.querySelector(".tooltip-value .value").textContent="$"+e.dataPoints[0].value}},intersect:!1,mode:"index"}},h={borderColor:"rgb(75, 192, 192)",backgroundColor:function(e,t){var c=void 0===t?.5:1-t;return Object(p.a)(e).alpha(c).rgbString()}("rgb(255, 99, 132)",.5),fill:{target:"origin",above:"rgb(255, 0, 0)",below:"rgb(0, 0, 255)"},borderWidth:2,pointRadius:0,pointStyle:"circle",pointBorderColor:"rgb(0, 0, 0)"},O=c(2),f=function(e){var t=e.data,c=Object(r.useRef)(),n=t.day,a=t.week,s=t.year,i=t.detail,o=Object(r.useState)("24h"),l=Object(u.a)(o,2),d=l[0],p=l[1],x=function(){switch(d){case"24h":return n;case"7d":return a;case"1y":return s;default:return n}};b.a.register(b.b,b.c,b.d,b.e,b.f),Object(r.useEffect)((function(){if(c&&c.current&&i){var e=new b.a(c.current,{type:"line",data:{datasets:[Object(j.a)({label:"".concat(i.name," price"),data:x()},h)]},options:Object(j.a)({},y)});return function(){e.destroy()}}}));return Object(O.jsxs)("div",{className:"bg-white border mt-2 rounded p-3",children:[Object(O.jsx)("div",{children:function(){if(i)return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{className:"my-0",children:["$",i.current_price.toFixed(2)]}),Object(O.jsxs)("p",{className:i.price_change_24h<0?"text-danger my-0":"text-success my-0",children:[i.price_change_24h<0?Object(O.jsx)("i",{className:"fas fa-sort-down align-middle"}):Object(O.jsx)("i",{className:"fas fa-sort-up align-middle"}),i.price_change_percentage_24h.toFixed(2),"%"]})]})}()}),Object(O.jsx)("div",{children:Object(O.jsx)("canvas",{ref:c,id:"myChart",height:250})}),Object(O.jsxs)("div",{className:"chart-buttons",children:[Object(O.jsx)("button",{onClick:function(){return p("24h")},className:"btn btn-outline-secondary btn-sm",children:"24h"}),Object(O.jsx)("button",{onClick:function(){return p("7d")},className:"btn btn-outline-secondary btn-sm mx-1",children:"1 week"}),Object(O.jsx)("button",{onClick:function(){return p("1y")},className:"btn btn-outline-secondary btn-sm",children:"1 year"})]})]})},g=function(e){var t=e.title,c=e.data;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{className:"text-muted cryptocurrency-data-category",children:t}),Object(O.jsx)("span",{children:c})]})})},v=function(e){var t=e.data;return Object(O.jsx)("div",{children:function(){if(t)return Object(O.jsxs)("div",{className:"cryptocurrency-data bg-white mt-2 p-2 rounded border row",children:[Object(O.jsxs)("div",{className:"col-sm",children:[Object(O.jsx)(g,{title:"Circulating Supply",data:t.circulating_supply}),Object(O.jsx)("hr",{}),Object(O.jsx)(g,{title:"ATH (All-Time High)",data:"$"+t.ath})]}),Object(O.jsxs)("div",{className:"col-sm",children:[Object(O.jsx)(g,{title:"Max Supply",data:t.max_supply}),Object(O.jsx)("hr",{}),Object(O.jsx)(g,{title:"ATH date",data:m(t.ath_date)})]}),Object(O.jsxs)("div",{className:"col-sm",children:[Object(O.jsx)(g,{title:"Low 24h",data:"$"+t.low_24h}),Object(O.jsx)("hr",{}),Object(O.jsx)(g,{title:"Market Cap",data:t.market_cap})]}),Object(O.jsxs)("div",{className:"col-sm",children:[Object(O.jsx)(g,{title:"High 24h",data:"$"+t.high_24h}),Object(O.jsx)("hr",{}),Object(O.jsx)(g,{title:"Last updated",data:m(t.last_updated)})]})]})}()})},N=c(79).a.create({baseURL:"https://api.coingecko.com/api/v3"}),k=c(51),_=function(e){return Object(O.jsx)(k.a,{color:"#c5c2c2",loading:e,radius:200})},w=function(){var e=Object(i.e)().id,t=Object(r.useState)({}),c=Object(u.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(!1),o=Object(u.a)(s,2),j=o[0],b=o[1],p=function(e){return e.map((function(e){return{time:e[0],price:e[1].toFixed(2)}}))};Object(r.useEffect)((function(){(function(){var t=Object(d.a)(l.a.mark((function t(){var c,r,n,s,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.next=3,Promise.all([N.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"usd",days:"1"}}),N.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"usd",days:"7"}}),N.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"usd",days:"365"}}),N.get("/coins/markets/",{params:{vs_currency:"usd",ids:e}})]);case 3:c=t.sent,r=Object(u.a)(c,4),n=r[0],s=r[1],i=r[2],o=r[3],a({day:p(n.data.prices),week:p(s.data.prices),year:p(i.data.prices),detail:o.data[0]}),b(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);return j?Object(O.jsx)(_,{loading:j}):Object(O.jsxs)("div",{className:"cryptocurrencydetail",children:[Object(O.jsx)(f,{data:n}),Object(O.jsx)(v,{data:n.detail})]})},C=c(12),S=Object(r.createContext)(),P=function(e){var t,c=Object(r.useState)((null===(t=localStorage.getItem("watchList"))||void 0===t?void 0:t.split(","))||["bitcoin","ethereum","bitcoin-cash","binancecoin","chainlink","ripple","okb","tether","litecoin","cardano","polkadot","solana","stellar","uniswap","dogecoin","eos","tezos"]),n=Object(u.a)(c,2),a=n[0],s=n[1];Object(r.useEffect)((function(){localStorage.setItem("watchList",a)}),[a]);return Object(O.jsx)(S.Provider,{value:{watchList:a,deleteCryptocurrency:function(e){s(a.filter((function(t){return t!==e})))},addCryptocurrency:function(e){-1===a.indexOf(e)&&s([].concat(Object(C.a)(a),[e]))}},children:e.children})},$=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useContext)(S).addCryptocurrency;return Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsx)("button",{onClick:function(){return n(!c)},className:"btn btn-dark dropdown-toggle",type:"button",children:"Add Cryptocurrency"}),Object(O.jsx)("div",{className:c?"dropdown-menu show":"dropdown-menu",children:["bitcoin","ethereum","bitcoin-cash","binancecoin","chainlink","ripple","okb","tether","litecoin","cardano","polkadot","solana","stellar","uniswap","dogecoin","eos","tezos"].map((function(e){return Object(O.jsx)("a",{onClick:function(){return a(e),void n(!1)},href:"/#",className:"dropdown-item",children:e},e)}))})]})},A=function(e){var t=e.cryptocurrency,c=e.deleteCryptocurrency;return Object(O.jsx)(s.b,{to:"/cryptocurrencies/".concat(t.id),className:"text-decoration-none my-1 cryptocurrency",children:Object(O.jsxs)("li",{className:"cryptocurrencylist-item list-group-item list-group-item-action align-items-center",children:[Object(O.jsx)("img",{className:"cryptocurrencylist-image",src:t.image,alt:""}),Object(O.jsx)("span",{className:"cryptocurrency-text-name",children:t.name}),Object(O.jsx)("span",{className:"cryptocurrency-text-symbol text-muted",children:t.symbol.toUpperCase()}),Object(O.jsx)("span",{className:"cryptocurrency-text",children:"$"+t.current_price}),Object(O.jsxs)("span",{className:t.price_change_percentage_24h<0?"text-danger cryptocurrency-text":"text-success cryptocurrency-text",children:[" ",t.price_change_percentage_24h<0?Object(O.jsx)("i",{className:"fas fa-sort-down align-middle"}):Object(O.jsx)("i",{className:"fas fa-sort-up align-middle"}),t.price_change_percentage_24h+" %"]}),Object(O.jsx)("span",{className:t.price_change_24h<0?"text-danger cryptocurrency-text":"text-success cryptocurrency-text",children:"$"+t.price_change_24h}),Object(O.jsx)("i",{className:"delete-icon far fa-times-circle text-muted",onClick:function(e){e.preventDefault(),c(t.id)}})]})})},L=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useContext)(S),s=a.watchList,i=a.deleteCryptocurrency,o=Object(r.useState)(!1),j=Object(u.a)(o,2),b=j[0],p=j[1];Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,N.get("/coins/markets/",{params:{vs_currency:"usd",ids:s.join(",")}});case 3:t=e.sent,n(t.data),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s.length>0?e():n([])}),[s]);return Object(O.jsx)("div",{children:b?Object(O.jsx)(_,{}):Object(O.jsxs)("ul",{className:"cryptocurrencylist list-group mt-2",children:[Object(O.jsxs)("li",{className:"cryptocurrencylist-item list-group-item list-group-item-action align-items-center",children:[Object(O.jsx)("span",{className:"cryptocurrency-header text-bold",children:"Asset"}),Object(O.jsx)("span",{className:"cryptocurrency-text-symbol text-bold",children:"Symbol"}),Object(O.jsx)("span",{className:"cryptocurrency-text text-bold",children:"Market price"}),Object(O.jsx)("span",{className:"cryptocurrency-text text-bold",children:"Price change % 24h"}),Object(O.jsx)("span",{className:"cryptocurrency-text text-bold",children:"Price change $ 24h"})]}),c.map((function(e){return Object(O.jsx)(A,{cryptocurrency:e,deleteCryptocurrency:i},e.id)}))]})})},E=function(){return Object(O.jsxs)("div",{className:"cryptocurrencysummary border p-2 rounded bg-light",children:[Object(O.jsx)($,{}),Object(O.jsx)(L,{})]})},F=c(52),H=(c(74),function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(s.b,{to:"/cryptocurrency-tracker",className:"button-home",children:Object(O.jsx)(F.a,{size:32})}),Object(O.jsx)("h1",{className:"text-center headerCryptocurrency",children:"World's most popular cryptocurrencies"})]})}),I=(c(75),function(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(P,{children:Object(O.jsxs)(s.a,{children:[Object(O.jsx)(H,{}),Object(O.jsx)(i.a,{exact:!0,path:"/cryptocurrency-tracker",component:E}),Object(O.jsx)(i.a,{path:"/cryptocurrency-tracker/cryptocurrencies/:id",component:w})]})})})});a.a.render(Object(O.jsx)(I,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.0b1093b3.chunk.js.map