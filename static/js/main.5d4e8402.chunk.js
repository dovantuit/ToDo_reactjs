(this.webpackJsonptodo_reactjs=this.webpackJsonptodo_reactjs||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),s=(n(20),n(12)),c=n(7),l=n(8),u=n(2),m=n(14),d=n(13),h=(n(21),n(22),n(9)),p=n(10),f=n(11);var v=function(e){var t=e.items||[];console.log("props from Listitems"),console.log(t);var n=t.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(h.a,{className:"faicons",icon:p.a,onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,r.a.createElement(f.a,{duration:500,easing:"ease-in-out"},n))},I=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handldeInput=a.handldeInput.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.setUpdate=a.setUpdate.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handldeInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}}),console.log(this.state.currentItem)}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(s.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}}),console.log(n)}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handldeInput}),r.a.createElement("button",{type:"submit"},"Add more")),r.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5d4e8402.chunk.js.map