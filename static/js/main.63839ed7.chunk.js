(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,n){e.exports=n(530)},211:function(e,t,n){},214:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},215:function(e,t,n){},226:function(e,t){},228:function(e,t){},316:function(e,t){},360:function(e,t){},362:function(e,t){},393:function(e,t){},530:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(199),l=n.n(i),u=(n(211),n(12)),r=n.n(u),o=n(54),c=n(200),p=n(201),m=n(204),y=n(202),f=n(205),d=(n(214),n(215),n(203)),h=n.n(d);"undefined"==typeof window.ethereum&&(console.error("No Ethereum wallet provider found"),alert("This application requires MetaMask web extension"),alert("Please install MetaMask to continue!"),alert("You can download it from: https://metamask.io/"));var b=new h.a(window.web3.currentProvider),w=new b.eth.Contract(JSON.parse('[{"constant":true,"inputs":[],"name":"supply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_winners_length","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_val","type":"uint256"}],"name":"get_winners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFromContract","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deboletos","type":"uint256"}],"name":"get_costo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"select_Winner2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"founder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"addressIndexes","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deleteAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"arrayStructs","outputs":[{"name":"_val","type":"uint256"},{"name":"index","type":"uint256"},{"name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Tikets_till_game","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players_till_raise","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"winners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"deboletos","type":"uint256"}],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_players","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}]'),"0xce68d0b24871038a7d30f5A44773CA5C89b4e0FE"),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(s)))).state={manager:"",players:[],balance:"",value:"",message:"",price:"",numerodeboletos:"",players_till_game:"[]",winnerLength:"",winners:""},n.onBla=function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n.setState({message:"Remember to use your Metamask extension to get your Lotto Coins!"});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.onSubmit=function(){var e=Object(o.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b.eth.getAccounts();case 3:return a=e.sent,n.setState({message:"Waiting on transaction success..."}),e.next=7,w.methods.enter(n.state.value).send({from:a[0],value:n.state.price*n.state.value});case 7:n.setState({message:"You are in!"}),window.location.reload();case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.onClick=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.eth.getAccounts();case 2:return t=e.sent,n.setState({message:"Waiting on transaction successs..."}),e.next=6,w.methods.selectWinner().send({from:t[0]});case 6:n.state({message:"A winner has been picked!"});case 7:case"end":return e.stop()}},e)})),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark(function e(){var t,n,a,s,i,l,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="0xF8CcedC0F4298BEa79aEa0Fca3178d84C4d48338",e.next=3,w.methods.get_players().call();case 3:return n=e.sent,e.next=6,w.methods.Tikets_till_game().call();case 6:return a=e.sent,e.next=9,b.eth.getBalance(w.options.address);case 9:return s=e.sent,e.next=12,w.methods.get_price().call();case 12:return i=e.sent,e.next=15,w.methods.name().call();case 15:return e.sent,e.next=18,w.methods.totalSupply().call();case 18:return e.sent,e.next=21,w.methods.get_winners_length().call();case 21:return l=e.sent,e.next=24,w.methods.get_winners(this.state.winnerLength).call();case 24:u=e.sent,this.setState({manager:t,players:n,balance:s,price:i,players_till_game:a,winnerLength:l,winners:u});case 26:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h1",null,"Forever Lottery"),s.a.createElement("h3",null," Contract Addres: 0xF8CcedC0F4298BEa79aEa0Fca3178d84C4d48338"),s.a.createElement("h3",null," Tickets remaining until next draw:"," "," ",50),s.a.createElement("h3",null," Tickets sold so far: "," ",this.state.players.length),s.a.createElement("p",null," To win: ",b.utils.fromWei(this.state.balance.toString(),"ether")/2," ether! "),s.a.createElement("p",null," Current ticket price: ",b.utils.fromWei(this.state.price.toString())," ether! "),s.a.createElement("hr",null),s.a.createElement("form",{onSubmit:this.onBla},s.a.createElement("div",null,s.a.createElement("h4",null,"How many tickets will you buy today?",s.a.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}})))),s.a.createElement("hr",null),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("h4",null,"Ready to try your luck?"),s.a.createElement("div",null,s.a.createElement("label",null," Prepare to send:"),"  ",s.a.createElement("button",null,"Enter"),s.a.createElement("input",{value:b.utils.fromWei(this.state.value)*this.state.price,onChange:function(t){return e.setState({value:t.target.value})}}),s.a.createElement("hr",null),s.a.createElement("h2",null,this.state.message))),s.a.createElement("hr",null),s.a.createElement("h4",null,"Last Winner"),s.a.createElement("h3",null,this.state.winners),s.a.createElement("h4",null,"Past Winners"),s.a.createElement("hr",null),s.a.createElement("h2",null,"NEVER STOP PLAYING :)"),s.a.createElement("hr",null),s.a.createElement("h3",null,"How does it work?"),s.a.createElement("li",null,"Buy a ticket by sending the amount of ether stated on the 'enter' button."),s.a.createElement("li",null,"The tickets you buy will be sent to the Metamask account you paid with."),s.a.createElement("li",null,'In order to see your tickets follow the Metamask instructions to add tokens. Use the "contract address" to add them.'),s.a.createElement("li",null,"The tickets are acctual Tokens called LottoCoins built on ERC20Interface so you can send them to other accounts."),s.a.createElement("li",null,"Whoever owns the ticket owns the right to participate in the lottery."),s.a.createElement("li",null,"The tickets never expire so as long as you hold them they will participate in the ongoing raffles."),s.a.createElement("li",null,"Every time 50 tickets are sold the contract will automatically run the raffle."),s.a.createElement("li",null,"The contract holds 45% of the paid tickets in orther to increase the next pot, which means that the pot is forever increasing."),s.a.createElement("li",null,"Every time 10 tikets are sold the ticket price will rise 0.0001 ethers so make sure to buy as many tickets in advance as you can."),s.a.createElement("li",null,"This lottery has no owner and is automatic. It will keep on going without human interference for as long as the ethereum blockchain exists."),s.a.createElement("hr",null),s.a.createElement("hr",null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(518);l.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[206,1,2]]]);
//# sourceMappingURL=main.63839ed7.chunk.js.map