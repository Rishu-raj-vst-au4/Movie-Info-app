(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{24:function(e,t){e.exports={APIKey:"d7427946"}},38:function(e,t,a){e.exports=a.p+"static/media/spinner.3d806475.gif"},41:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},47:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(46),a(2)),i=a(3),s=a(4),m=a(5),u=(a(47),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-brand text-white text lg brand-text",href:"#"},"MoviePedia")),r.a.createElement("ul",{className:"navbar-nav ml-auto text-light d-inline-block"},r.a.createElement("li",{className:"nav-item d-inline-block mr-4"},r.a.createElement("i",{className:"fab fa-imdb fa-5x",id:"imdb-logo"}))))))}}]),a}(n.Component)),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"footer p-3 mt-4 text-center bg-dark text-light"},"Developed By:",r.a.createElement("span",{className:"text-warning font-weight-normal"},r.a.createElement("a",{href:"https://www.linkedin.com/in/rishu-raj-308263172/",target:"_blank"},"Rishu Raj")),",Using   ",r.a.createElement("i",{className:"fab fa-react"}),"   React JS   &   Redux JS Integrated with external movies data API",r.a.createElement("a",{href:"http://www.omdbapi.com/",target:"_blank"},"OMDB"))))}}]),a}(n.Component),p=a(10),b=a(23),v=a.n(b),h=a(24),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handlechange=function(t){e.props.searchMovie(t.target.value)},e.handleSubmit=function(t){console.log("clicked"),t.preventDefault(),e.props.FetchMovies(e.props.text)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid mt-5 text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("i",{className:"fa fa-search"},"Search for Movies and , Tv Series ....")),r.a.createElement("form",{id:"searchForm",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search for Movies and , Tv Series ....",onChange:this.handlechange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-bg mt-3"},"Search"))))}}]),a}(n.Component),f=Object(p.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},FetchMovies:function(e){return function(t){v.a.get("https://www.omdbapi.com/?apikey=".concat(h.APIKey,"&s=").concat(e)).then((function(e){return t({type:"FETCH_MOVIES",payload:e.data})})).catch((function(e){return console.log(e)}))}}})(E),g=a(15),y=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){console.log(this.props);var e=this.props.movie;return r.a.createElement("div",{className:"col-md-3 mb-5"},r.a.createElement("div",{className:"card card-body bg-dark text-center h-100"},r.a.createElement("img",{className:"w-100 mb-2",src:e.Poster,alt:"Movie Cover"}),r.a.createElement("h5",{className:"text-light card-title"},e.Title," - ",e.Year),r.a.createElement(g.b,{className:"btn btn-primary",to:"/movie/"+e.imdbID},"Movie Details",r.a.createElement("i",{className:"fas fa-chevron-right"}))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){console.log(this.props);var e,t=this.props.movies;return e="True"===t.movies.Response?t.movies.Search.map((function(e,t){return r.a.createElement(y,{key:t,movie:e})})):null,r.a.createElement("div",{className:"row"},e)}}]),a}(n.Component),N=Object(p.b)((function(e){return{movies:e.movies}}))(O),j=a(38),w=a.n(j);var k=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:w.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading....."}))},x=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.loading;return r.a.createElement("div",{className:"container"},r.a.createElement(f,null),e?r.a.createElement(k,null):r.a.createElement(N,null))}}]),a}(n.Component),M=Object(p.b)((function(e){return{loading:e.movies.loading}}))(x),S=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.movie,n=r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 card-body"},r.a.createElement("img",{src:a.Poster,className:"thumbnail",alt:"Poster"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h2",{className:"mb-4"},a.Title),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre:"),a.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Released:"),a.Released),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Rated:"),a.Rated),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"IMDB Rating:"),a.imdbRating),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director:"),a.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Writer:"),a.Writer),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors:"),a.Actors)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card card-body bg-dark my-5 text-light"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"About"),a.Plot,r.a.createElement("hr",null),r.a.createElement("a",{href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View on IMDB"),r.a.createElement(g.b,{to:"/",className:"btn btn-default text-light"},"Go Back to Seach"))))),c=t?r.a.createElement(k,null):n;return r.a.createElement("div",null,c)}}]),a}(n.Component),C=Object(p.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){v.a.get("https://www.omdbapi.com/?apikey=".concat(h.APIKey,"&i=").concat(e)).then((function(e){return t({type:"FETCH_MOVIE",payload:e.data})})).catch((function(e){return console.log(e)}))}}})(S),I=a(12),R=a(39),D=a(40),A=a(19),T={text:"",movies:[],loading:!1,movie:[]},P=Object(I.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(A.a)({},e,{text:t.payload,loading:!1});case"FETCH_MOVIES":return Object(A.a)({},e,{movies:t.payload});case"FETCH_MOVIE":return Object(A.a)({},e,{movie:t.payload});default:return e}}}),_=[R.a],B=Object(I.createStore)(P,{},Object(D.composeWithDevTools)(I.applyMiddleware.apply(void 0,_))),F=(a(70),a(13)),V=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{store:B},r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(F.a,{exact:!0,path:"/",component:M}),r.a.createElement(F.a,{exact:!0,path:"/movie/:id",component:C}),r.a.createElement("div",{className:"footer"},r.a.createElement(d,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.12fa7502.chunk.js.map