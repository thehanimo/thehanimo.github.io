(this["webpackJsonpthehanimo.github.io"]=this["webpackJsonpthehanimo.github.io"]||[]).push([[0],{102:function(e,t,a){e.exports=a(192)},107:function(e,t,a){},188:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),r=a.n(o),i=(a(107),a(98)),s=a(8),c=(a(108),a(109),a(81)),m=a(82),d=a(101),f=a(100),h=a(5),u=a(14),g=a.n(u),p=(a(185),a(35)),E=a.n(p),y=a(63),b=(a(188),a(87)),w=a.n(b),x=a(88),F=a.n(x),v=a(89),B=a.n(v),k=a(90),z=a.n(k),A=a(91),S=a.n(A),C=a(92),M=a.n(C),N=a(93),T=a.n(N),I=a(94),D=a.n(I),_=a(95),j=a.n(_),H=a(96),O=a.n(H),W=a(97),G=a.n(W),L=a(64),P=a.n(L),U=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){Object(y.init)("user_fPYfAmrOM5e7hArFO7aDq")},n.toggleContactModal=function(){n.state.showContactModal?n.setState({formloader:!1,formSuccess:!1,showContactModal:!n.state.showContactModal}):n.setState({showContactModal:!n.state.showContactModal})},n.submitForm=function(){if(!n.state.formloader&&!n.state.formSuccess){var e=n.validate("contact-body"),t=n.validate("contact-name");if(e&&t){n.setState({formloader:!0,formSuccess:!1,formError:!1});Object(y.send)("mailgun","template_VgF2K5ij",{name:t,body:e}).then((function(e){n.setState({formloader:!1,formSuccess:!0})})).catch((function(e){return n.setState({formloader:!1,formError:!0})}))}}},n.validate=function(e){var t=document.getElementById(e).value.trim();return""===t?(document.getElementById(e).classList.add("error"),!1):(document.getElementById(e).classList.remove("error"),t)},n.state={companiesTrigger:!1,showContactModal:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{backgroundColor:"black"}},l.a.createElement(h.c,null,l.a.createElement(h.f,{style:{height:"90vh",minHeight:600}},l.a.createElement(h.c,null,l.a.createElement(h.f,{style:{alignItems:"center",marginTop:"15%"}},l.a.createElement(h.b,{xs:{size:8,order:3,offset:1},sm:{size:8,order:3,offset:1},md:{size:5,order:1,offset:1},lg:{size:4,order:1,offset:2},xl:{size:4,order:1,offset:2}},l.a.createElement(g.a,{left:!0,distance:"20px",duration:1500},l.a.createElement("h2",{style:{fontFamily:"MuseoSans-900",color:"#FBFBFB",textTransform:"uppercase",lineHeight:1.2}},"Developer",l.a.createElement("br",null),"& Design",l.a.createElement("br",null),"Enthusiast.")),l.a.createElement(g.a,{top:!0,distance:"20px",delay:250},l.a.createElement("p",{style:{color:"#8D8D8D",fontFamily:"MuseoSans-300"}},"Hi! I'm Hani Mohammed and writing code for the real-world is what I do.")),l.a.createElement(g.a,{top:!0,distance:"20px",delay:500},l.a.createElement("div",{style:{marginBottom:10}},l.a.createElement("a",{className:"link",href:"mailto:thehanimo@gmail.com",style:{color:"#FBFBFB",fontFamily:"MuseoSans-300"}},"thehanimo@gmail.com"))),l.a.createElement("div",{className:"social-container"},l.a.createElement(E.a,{delay:750},l.a.createElement("a",{href:"https://www.linkedin.com/in/thehanimo",target:"_blank"},l.a.createElement("img",{src:j.a}))),l.a.createElement(E.a,{delay:850},l.a.createElement("a",{href:"https://github.com/thehanimo",target:"_blank"},l.a.createElement("img",{src:O.a}))),l.a.createElement(E.a,{delay:950},l.a.createElement("a",{href:"https://instagram.com/thehanimo",target:"_blank"},l.a.createElement("img",{src:G.a}))),l.a.createElement(E.a,{delay:1050},l.a.createElement("a",{href:"https://dribbble.com/thehanimo",target:"_blank"},l.a.createElement("img",{src:P.a})))),l.a.createElement(g.a,{bottom:!0,distance:"30px",delay:1150,cascade:!0,duration:750},l.a.createElement("div",null,l.a.createElement(h.a,{outline:!0,pill:!0,onClick:this.toggleContactModal},"Say Hello!"),l.a.createElement(h.a,{outline:!0,pill:!0,href:"/Hani_resume.pdf",target:"_blank",theme:"secondary",style:{marginLeft:20}},"Resume"))),l.a.createElement(h.d,{open:this.state.showContactModal,toggle:this.toggleContactModal},l.a.createElement(h.e,null,l.a.createElement("form",null,l.a.createElement("div",{className:"contact-form-container"},l.a.createElement("div",{class:"lds-ellipsis-container"},this.state.formloader&&l.a.createElement("div",{class:"lds-ellipsis"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),this.state.formSuccess&&"Sent! \ud83c\udf89",this.state.formError&&"Sorry, Try Again \ud83d\ude41",!this.state.formloader&&!this.state.formSuccess&&!this.state.formError&&"\ud83d\udc4b Hey There!"),l.a.createElement("textarea",{id:"contact-body",className:"contact-body",placeholder:"Your message...",onChange:function(){return e.validate("contact-body")}}),l.a.createElement("div",{className:"contact-form-sub-container"},l.a.createElement("input",{id:"contact-name",className:"contact-name",placeholder:"How can I get back to you?",onChange:function(){return e.validate("contact-name")}}),l.a.createElement("button",{className:"contact-submit",onClick:this.submitForm,type:"button"},"Send"))))))),l.a.createElement(h.b,{xs:{size:12,order:2},sm:{size:12,order:2},md:{size:1,order:2},lg:{size:1,order:2},xl:{size:1,order:2},style:{height:50}}),l.a.createElement(h.b,{xs:{size:6,order:1,offset:1},sm:{size:5,order:1,offset:1},md:{size:4,order:2,offset:0},lg:{size:3,order:2,offset:0},xl:{size:3,order:2,offset:0}},l.a.createElement(g.a,{duration:2e3},l.a.createElement("div",null,l.a.createElement("img",{src:w.a,alt:"Hani Mohammed",className:"avatar"}))))))))),l.a.createElement("div",{style:{backgroundColor:"black"}},l.a.createElement(h.c,null,l.a.createElement(h.f,{style:{paddingTop:50,paddingBottom:30}},l.a.createElement(h.b,{xs:{size:12,offset:0},sm:{size:12,offset:0},md:{size:6,offset:0},lg:{size:4,offset:1},xl:{size:4,offset:2}},l.a.createElement("h3",{style:{fontFamily:"MuseoSans-700",color:"#AAA",textTransform:"uppercase",lineHeight:1.2}},"Work"),l.a.createElement("div",{style:{height:5,width:100,backgroundColor:"#4A4A4A"}}))))),l.a.createElement(h.c,{style:{margin:0}},l.a.createElement(h.f,{style:{width:"100vw",backgroundColor:"#F3F3F3"}},l.a.createElement(h.b,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6",style:{backgroundColor:"#ee5253",width:"100%"}},l.a.createElement("center",null,l.a.createElement("div",{style:{width:"100%",textAlign:"left",marginTop:30}},l.a.createElement("a",{className:"link",href:"https://nodestory.com",style:{color:"#FBFBFB",fontFamily:"MuseoSans-500"}},"Nodestory")),l.a.createElement("div",{style:{width:"100%",textAlign:"left",color:"#FBFBFB",fontFamily:"MuseoSans-300",fontSize:"0.8em"}},"Full Stack"),l.a.createElement("div",{style:{position:"absolute",top:30,right:16}},l.a.createElement(h.a,{outline:!0,pill:!0,href:"https://nodestory.com",target:"_blank",theme:"light",size:"sm",className:"custom-light-but"},"Go to site")),l.a.createElement(g.a,{bottom:!0,distance:"30px"},l.a.createElement("img",{src:F.a,style:{width:"70%",marginTop:-30}})))),l.a.createElement(h.b,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6",style:{backgroundColor:"#F5B83D",width:"100%"}},l.a.createElement("center",null,l.a.createElement("div",{style:{width:"100%",textAlign:"left",marginTop:30}},l.a.createElement("a",{className:"link",href:"https://pushstart.in",style:{color:"#FBFBFB",fontFamily:"MuseoSans-500"}},"Pushstart")),l.a.createElement("div",{style:{width:"100%",textAlign:"left",color:"#FBFBFB",fontFamily:"MuseoSans-300",fontSize:"0.8em"}},"Mobile Application"),l.a.createElement("div",{style:{position:"absolute",top:30,right:16}},l.a.createElement(h.a,{outline:!0,pill:!0,href:"https://pushstart.in",target:"_blank",theme:"light",size:"sm",className:"custom-light-but"},"Go to site")),l.a.createElement(g.a,{bottom:!0,distance:"30px",delay:250},l.a.createElement("img",{src:B.a,style:{width:"70%",marginTop:-25}})))),l.a.createElement(h.b,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6",style:{backgroundColor:"#005BAB",width:"100%"}},l.a.createElement("center",null,l.a.createElement("div",{style:{width:"100%",textAlign:"left",marginTop:30}},l.a.createElement("a",{className:"link",href:"https://pwip.co",style:{color:"#FBFBFB",fontFamily:"MuseoSans-500"}},"Pwip")),l.a.createElement("div",{style:{width:"100%",textAlign:"left",color:"#FBFBFB",fontFamily:"MuseoSans-300",fontSize:"0.8em"}},"Mobile Application"),l.a.createElement("div",{style:{position:"absolute",top:30,right:16}},l.a.createElement(h.a,{outline:!0,pill:!0,href:"https://pwip.co",target:"_blank",theme:"light",size:"sm",className:"custom-light-but"},"Go to site")),l.a.createElement(g.a,{bottom:!0,distance:"30px"},l.a.createElement("img",{src:z.a,style:{width:"50%",marginTop:-20}})))),l.a.createElement(h.b,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6",style:{backgroundColor:"#4A4A4A",width:"100%",display:"flex",flexDirection:"column"}},l.a.createElement("center",null,l.a.createElement("div",{style:{width:"100%",textAlign:"left",marginTop:30}},l.a.createElement("a",{className:"link",href:"https://www.zscore.co.in",style:{color:"#FBFBFB",fontFamily:"MuseoSans-500"}},"ZScore")),l.a.createElement("div",{style:{width:"100%",textAlign:"left",color:"#FBFBFB",fontFamily:"MuseoSans-300",fontSize:"0.8em"}},"Web Application"),l.a.createElement("div",{style:{position:"absolute",top:30,right:16}},l.a.createElement(h.a,{outline:!0,pill:!0,href:"https://www.zscore.co.in",target:"_blank",theme:"light",size:"sm",className:"custom-light-but"},"Go to site"))),l.a.createElement("div",{style:{flex:1,width:"100%",marginBottom:46,justifyContent:"center",alignItems:"center",display:"flex"}},l.a.createElement(g.a,{bottom:!0,distance:"30px",delay:250},l.a.createElement("img",{src:M.a,style:{width:"80%",marginTop:30,marginBottom:30}})))),l.a.createElement(h.b,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6",style:{backgroundColor:"#EABAD8",width:"100%",display:"flex",flexDirection:"column"}},l.a.createElement("center",null,l.a.createElement("div",{style:{width:"100%",textAlign:"left",marginTop:30}},l.a.createElement("a",{className:"link",href:"https://www.antzknow.com",style:{color:"#FBFBFB",fontFamily:"MuseoSans-500"}},"Antzknow")),l.a.createElement("div",{style:{width:"100%",textAlign:"left",color:"#FBFBFB",fontFamily:"MuseoSans-300",fontSize:"0.8em"}},"Web Application, UI/UX"),l.a.createElement("div",{style:{position:"absolute",top:30,right:16}},l.a.createElement("div",{style:{float:"left",height:20,width:20,marginTop:2,marginRight:10}},l.a.createElement("a",{href:"https://dribbble.com/shots/11583582-Antzknow-Web-UI-UX",target:"_blank",className:"custom-link-anim"},l.a.createElement("img",{src:P.a}))),l.a.createElement(h.a,{outline:!0,pill:!0,href:"https://www.antzknow.com",target:"_blank",theme:"light",size:"sm",className:"custom-light-but"},"Go to site"))),l.a.createElement("div",{style:{flex:1,width:"100%",marginBottom:46,justifyContent:"center",alignItems:"center",display:"flex"}},l.a.createElement(g.a,{bottom:!0,distance:"30px"},l.a.createElement("img",{src:S.a,style:{width:"80%",marginTop:30,marginBottom:30}})))),l.a.createElement(h.b,{xs:"12",sm:"12",md:"6",lg:"6",xl:"6",style:{backgroundColor:"#049EE2",width:"100%",display:"flex",flexDirection:"column"}},l.a.createElement("center",null,l.a.createElement("div",{style:{width:"100%",textAlign:"left",marginTop:30}},l.a.createElement("a",{className:"link",href:"http://www.thefuture.school",style:{color:"#FBFBFB",fontFamily:"MuseoSans-500"}},"The Future School")),l.a.createElement("div",{style:{width:"100%",textAlign:"left",color:"#FBFBFB",fontFamily:"MuseoSans-300",fontSize:"0.8em"}},"Code Walkthroughs"),l.a.createElement("div",{style:{position:"absolute",top:30,right:16}},l.a.createElement(h.a,{outline:!0,pill:!0,href:"http://www.thefuture.school",target:"_blank",theme:"light",size:"sm",className:"custom-light-but"},"Go to site"))),l.a.createElement("div",{style:{flex:1,width:"100%",marginBottom:46,justifyContent:"center",alignItems:"center",display:"flex"}},l.a.createElement(g.a,{bottom:!0,distance:"30px",delay:250},l.a.createElement("img",{src:T.a,style:{width:"80%",marginTop:30,marginBottom:30}})))))),l.a.createElement("div",{style:{backgroundColor:"#F3F3F3",paddingBottom:80}},l.a.createElement(h.c,null,l.a.createElement(h.f,{style:{paddingTop:50,paddingBottom:30}},l.a.createElement(h.b,{xs:{size:12,offset:0},sm:{size:12,offset:0},md:{size:6,offset:0},lg:{size:4,offset:1},xl:{size:4,offset:2}},l.a.createElement("h3",{style:{fontFamily:"MuseoSans-700",color:"#4A4A4A",textTransform:"uppercase",lineHeight:1.2}},"Education"),l.a.createElement("div",{style:{height:5,width:100,backgroundColor:"#DADADA"}}))),l.a.createElement(h.f,{style:{justifyContent:"center",alignItems:"center"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:20,marginRight:20}},l.a.createElement("img",{src:D.a,style:{width:"15%",float:"left"}}),l.a.createElement("div",{style:{marginLeft:12}},l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.iiits.ac.in",target:"_blank",className:"edu-card-header link-dark"},"Indian Institute Of Information Technology")),l.a.createElement("div",{className:"edu-card-subheader"},"B.Tech, Computer Science Engineering ",l.a.createElement("span",null,"(Exp. '21)"))))))),l.a.createElement("div",{style:{backgroundColor:"#F3F3F3",borderTop:"1px solid #DADADA"}},l.a.createElement(h.c,null,l.a.createElement(h.f,{style:{paddingTop:20,paddingBottom:20}},l.a.createElement(h.b,{className:"footer-text",xs:{size:12,offset:0},sm:{size:12,offset:0},md:{size:6,offset:0},lg:{size:7,offset:0},xl:{size:5,offset:0}},"All product names, logos, and brands are property of their respective owners."),l.a.createElement(h.b,{className:"footer-text",xs:{size:12,offset:0},sm:{size:12,offset:0},md:{size:6,offset:0},lg:{size:5,offset:0},xl:{size:4,offset:3}},"Copyright \xa9 2020 Hani Mohammed. All rights reserved.")))))}}]),a}(n.Component);var R=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(s.a,{exact:!0,path:"/",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,t,a){e.exports=a.p+"static/media/dribble.29a152db.svg"},87:function(e,t,a){e.exports=a.p+"static/media/hani.4e742076.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/Nodestory-app.1331ce78.png"},89:function(e,t,a){e.exports=a.p+"static/media/PushApp.eddd31fa.png"},90:function(e,t,a){e.exports=a.p+"static/media/Pwip-app.fcd083f0.png"},91:function(e,t,a){e.exports=a.p+"static/media/Antzknow-app.1072e76e.png"},92:function(e,t,a){e.exports=a.p+"static/media/ZS-app.933c095f.png"},93:function(e,t,a){e.exports=a.p+"static/media/FutureSchool-app.ec32918c.png"},94:function(e,t,a){e.exports=a.p+"static/media/IIITS.faea592d.png"},95:function(e,t,a){e.exports=a.p+"static/media/linkedin.f35867f4.svg"},96:function(e,t,a){e.exports=a.p+"static/media/github.47e18e36.svg"},97:function(e,t,a){e.exports=a.p+"static/media/instagram.b150fca8.svg"}},[[102,1,2]]]);
//# sourceMappingURL=main.23755647.chunk.js.map