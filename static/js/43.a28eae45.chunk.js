(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1193:function(t,e,a){t.exports=a.p+"static/media/backround-kresno.57bcbf16.png"},1233:function(t,e,a){"use strict";a.r(e);var n=a(8),o=a(9),i=a(11),s=a(10),c=a(1),r=a.n(c),d=a(48),l=a(27),u=a.n(l),h=a(2),m=a(19),f=a(16),b=a(43),g=Object(c.lazy)(function(){return Promise.all([a.e(12),a.e(122)]).then(a.bind(null,1212))}),p=function(t){Object(i.a)(c,t);var e=Object(s.a)(c);function c(t){var a;return Object(n.a)(this,c),(a=e.call(this,t)).state={date:""},a.getDate=function(){var t=(new Date).toDateString();a.setState({date:t})},a.state={isLoading:!1},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;localStorage.setItem("base_url",JSON.stringify(window.location.href)),Object(h.u)("islogin")===Object(h.r)()&&this.props.history.push("/dashboard"),window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",function(t){window.history.pushState(null,document.title,window.location.href)}),this.context.handleSetPageSidebar(!1),this.context.handleSetPageHeader(!1),this.context.handleSetBodyWhiteBg(!0),this.getDate(),Object(f.d)("system/get").then(function(e){var a={alamat_toko:e.data[0].alamat_toko,nama_toko:e.data[0].nama_toko};Object(h.z)("data_toko",a),t.setState({alamat_toko:e.data[0].alamat_toko,nama_toko:e.data[0].nama_toko})}).catch(function(e){t.setState({alamat_toko:"",nama_toko:""})})}},{key:"componentWillUnmount",value:function(){this.context.handleSetPageSidebar(!0),this.context.handleSetPageHeader(!0),this.context.handleSetBodyWhiteBg(!1)}},{key:"onfiled",value:function(t){u.a.fire({title:"Oopss !!!",text:void 0===t.response?"Terjadi Kesalahan Saat Request Data":t.response.data,icon:"info"}),this.setState({isLoading:!1})}},{key:"onSubmit",value:function(t){var e=this,a={user_id:t.user_id,password:t.password};this.setState({isLoading:!0}),Object(f.k)("users/login",a).then(function(t){Object(h.v)("userdata",JSON.stringify(t.data)),Object(h.v)("token",t.data.token),Object(h.v)("islogin",Object(h.r)())}).then(function(){Object(f.d)("akses-user/id/"+t.user_id).then(function(t){localStorage.setItem("menu",JSON.stringify(t.data))}).catch(function(t){Object(m.e)("info",t.response.data)})}).then(function(){return e.props.history.push("/dashboard")}).catch(function(t){return e.onfiled(t)})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"login login-with-news-feed"},r.a.createElement("div",{className:"news-feed"},r.a.createElement("div",{className:"news-image",style:{backgroundImage:"url(".concat(a(1193),")")}}),r.a.createElement("div",{className:"news-caption text-center"},r.a.createElement("p",null,this.state.alamat_toko))),r.a.createElement("div",{className:"right-content"},r.a.createElement(g,{isLoading:this.state.isLoading,nama_toko:this.state.nama_toko,onSubmit:function(e){return t.onSubmit(e)}})))}}]),c}(r.a.Component);p.contextType=b.a,e.default=Object(d.f)(p)}}]);
//# sourceMappingURL=43.a28eae45.chunk.js.map