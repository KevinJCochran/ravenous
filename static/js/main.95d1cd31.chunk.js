(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(83),i=n.n(r),o=(n(178),n(13)),c=n(14),l=n(17),u=n(15),h=n(16),d=n(7),m=(n(179),n(180),n(181),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:this.props.business.imageSrc,alt:this.props.business.name})),s.a.createElement("h2",null,this.props.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,this.props.business.address),s.a.createElement("p",null,this.props.business.city),s.a.createElement("p",null,this.props.business.state," ",this.props.business.zipCode)),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,this.props.business.category),s.a.createElement("h3",{className:"rating"},this.props.business.rating," stars"),s.a.createElement("p",null,this.props.business.reviewCount," reviews"))))}}]),t}(s.a.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.businesses.map(function(e){return s.a.createElement(m,{key:e.id,business:e})});return s.a.createElement("div",{className:"BusinessList"},e)}}]),t}(s.a.Component),b=(n(182),{"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"}),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={term:"",location:"",sortBy:"best_match"},n.handleTermChange=n.handleTermChange.bind(Object(d.a)(Object(d.a)(n))),n.handleLocationChange=n.handleLocationChange.bind(Object(d.a)(Object(d.a)(n))),n.handleSearch=n.handleSearch.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getSortByClass",value:function(e){return e===this.state.sortBy?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{onChange:this.handleTermChange,placeholder:"Search Businesses"}),s.a.createElement("input",{onChange:this.handleLocationChange,placeholder:"Where?"})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("a",{onClick:this.handleSearch},"Let's Go")))}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(b).map(function(t){var n=b[t];return s.a.createElement("li",{className:e.getSortByClass(n),key:n,onClick:e.handleSortByChange.bind(e,n)},t)})}}]),t}(s.a.Component),v=("https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=".concat("v4Lv4z9fI2EmrXeI3_FCxg","&client_secret=").concat("ybPPIGCdz2sbdU8HxlpS1CkTS13UkWSmPeFnUlXHbxAlxkuzOsgLOjchyEcveoui"),function(e,t,n){var a="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n);return fetch(a,{headers:{Authorization:"Bearer ".concat("rgmptxLMmPXhRZ94Don1LZk-hLMAiF_iESiQaJelBHqG2H4Yk3oUbfnqklJI_RHRTKlRS3B6EAPFAhwC3ST7vOaRX67RxOWy4oG6rqXQ9Qr9a28FLuhOkbGoMQnLWXYx")}}).then(function(e){return e.json()}).then(function(e){if(e.businesses)return console.log("Number of businesses found: "+e.businesses.length),e.businesses.map(function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories.title,rating:e.rating,reviewCount:e.review_count}})})}),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"searchYelp",value:function(e,t,n){var a=this;v(e,t,n).then(function(e){a.setState({businesses:e})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"ravenous"),s.a.createElement(f,{searchYelp:this.searchYelp}),s.a.createElement(p,{businesses:this.state.businesses}))}}]),t}(s.a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(s.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ravenous",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ravenous","/service-worker.js");y?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):O(e)})}}()},84:function(e,t,n){e.exports=n(183)}},[[84,1,2]]]);
//# sourceMappingURL=main.95d1cd31.chunk.js.map