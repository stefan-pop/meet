(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{12:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(22),s=n.n(o),i=(n(29),n(7)),c=n.n(i),l=n(8),u=n(2),d=n(6),h=n(4),f=n(3),p=n(0),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showMore:!1},e.toggleShowMore=function(){e.setState({showMore:!e.state.showMore})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(p.jsxs)("div",{className:"event-wrapper",children:[Object(p.jsx)("h2",{className:"event-title",children:e.summary}),Object(p.jsxs)("div",{className:"event-time",children:[Object(p.jsx)("span",{children:e.start.dateTime}),Object(p.jsx)("span",{children:" (".concat(e.start.timeZone,") ")})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[e.summary," | "]}),Object(p.jsx)("span",{className:"location",children:e.location})]}),this.state.showMore?Object(p.jsxs)("div",{className:"show-more",children:[Object(p.jsx)("h4",{children:"About event:"}),Object(p.jsx)("a",{href:e.htmlLink,children:"See details on Google Calendar"}),Object(p.jsx)("p",{className:"event-description",children:e.description})]}):"",Object(p.jsx)("div",{className:"btn-wrapper",children:Object(p.jsx)("button",{onClick:this.toggleShowMore,children:this.state.showMore?"Show less":"Show more"})})]})}}]),n}(r.Component),m=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(v,{event:e})},e.id)}))})}}]),n}(r.Component),g=(n(12),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color}},r.color=null,r}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("small",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component)),b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="blue",r}return n}(g),j=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="red",r}return n}(g),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,backgroundColor:"orangered",width:"100%",display:"block",margin:"0",lineHeight:"2rem"}},r.color="white",r}return n}(g),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(e.setState({query:n,suggestions:r}),0===n.length?e.setState({showSuggestions:void 0}):e.setState({showSuggestions:!0}),0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We can't find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:void 0,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)("h1",{children:"Meet App"}),Object(p.jsx)("h3",{children:"Choose your nearest city"}),Object(p.jsx)(b,{text:this.state.infoText}),Object(p.jsxs)("div",{className:"suggestion-wrapper",children:[Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})})]})]})]})}}]),n}(r.Component),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={displayedEvents:32,errorText:""},e.handleInput=function(t){var n=t.target.value;return n<1?(e.setState({displayedEvents:n,errorText:"Please enter a number greater than 0"}),!1):n>32?(e.setState({displayedEvents:n,errorText:"Please enter a number not greater than 32"}),!1):(e.setState({displayedEvents:n,errorText:""}),void e.props.updateEventsLength(n))},e.resetInput=function(e){e.target.value=""},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"events-number",children:[Object(p.jsx)("label",{htmlFor:"events-number-input",children:"Number of events:"})," ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"number",id:"events-number-input",value:this.state.displayedEvents,onChange:function(t){return e.handleInput(t)},onFocus:function(t){return e.resetInput(t)}}),Object(p.jsx)(j,{text:this.state.errorText})]})}}]),n}(r.Component),y=(n(32),n(24)),k=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),S=n(11),T=n.n(S),E=n(9),N=n.n(E),C=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},W=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://dld2mjoeyk.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",k);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,I();case 10:if(!(n=e.sent)){e.next=20;break}return W(),r="https://dld2mjoeyk.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,T.a.get(r);case 16:return(a=e.sent).data&&(o=C(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),N.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,r,a,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,T.a.get("https://dld2mjoeyk.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",a&&Z(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(50);var A=function(e){return e.showWelcomeScreen?Object(p.jsx)("div",{className:"WelcomeScreen",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h1",{children:"Welcome to Meet"}),Object(p.jsx)("br",{}),Object(p.jsx)("h4",{children:"Check out upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{className:"google-icon-wrapper",children:[Object(p.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://stefan-pop.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]})}):null},q=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],displayedEvents:32,defaultLocation:"all",warningText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){M().then((function(r){var a="all"===t?r:r.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:a.slice(0,n),defaultLocation:t})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,r,a,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,L(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||n)}),navigator.onLine||this.setState({warningText:"You are currently offline. Some features of the app might be limited!"}),window.addEventListener("offline",(function(){o.setState({warningText:"You are currently offline. Some features of the app might be limited!"})})),window.addEventListener("online",(function(){o.setState({warningText:"You are back online!"}),setTimeout((function(){o.setState({warningText:""})}),3e3)})),(a||n)&&this.mounted&&M().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.displayedEvents),locations:C(e)})}));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=this;this.mounted=!1,window.removeEventListener("offline",(function(){e.setState({warningText:"You are currently offline. Some features of the app might be limited!"})})),window.removeEventListener("online",(function(){e.setState({warningText:"You are back online!"}),setTimeout((function(){e.setState({warningText:""})}),3e3)}))}},{key:"updateEventsLength",value:function(e){this.setState({displayedEvents:e});var t=this.state.defaultLocation;this.updateEvents(t,e)}},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?Object(p.jsx)("div",{className:"App"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(w,{text:this.state.warningText}),Object(p.jsx)(x,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(p.jsx)(O,{updateEventsLength:function(t){return e.updateEventsLength(t)}}),Object(p.jsx)(m,{events:this.state.events}),Object(p.jsx)(A,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){I()}})]})}}]),n}(r.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))};n(23).config("03fe77c74ab34bbca3e3bbec64c31805").install(),s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):U(t,e)}))}}(),B()}},[[52,1,2]]]);
//# sourceMappingURL=main.0fd7972b.chunk.js.map