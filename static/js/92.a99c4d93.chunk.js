(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1225:function(a,e,t){"use strict";t.r(e);var n=t(8),r=t(9),i=t(15),l=t(11),c=t(10),o=t(0),u=t.n(o),s=t(31),b=t(4),d=t(23),m=t(117),p=t(57),j=t(18),h=Object(o.lazy)(function(){return t.e(93).then(t.bind(null,1206))}),f=function(a){Object(l.a)(t,a);var e=Object(c.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,LaporanDataPenjualan:[],export:!1},r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var a=JSON.parse(Object(b.n)("userdata"));this.setState({username:a.user_id})}},{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0});var t={tgl_awal:Object(b.f)(m(new Date(a.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(b.f)(m(new Date(a.tgl_akhir)).format("YYYY-MM-DD"))};Object(j.j)("batalpenjualan/get/report",t).then(function(a){0===a.data.length?(Object(d.e)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({isLoading:!1,export:!1})):(Object(d.e)("success","Laporan Batal Terjual Tersedia"),Object(b.o)("tgl_laporan",JSON.stringify(t)),e.setState({export:!0,isLoading:!1,LaporanDataPenjualan:a.data}))}).catch(function(a){Object(d.e)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({export:!1,isLoading:!1})})}},{key:"render",value:function(){var a=this;return u.a.createElement("div",null,u.a.createElement("ol",{className:"breadcrumb float-xl-right"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement(s.b,{to:"#"},"Laporan")),u.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Batal Penjualan")),u.a.createElement("h1",{className:"page-header"},"Laporan Batal Penjualan "),u.a.createElement(p.a,null,u.a.createElement(p.c,null,"Laporan Batal Penjualan"),u.a.createElement(p.b,null,u.a.createElement(h,{export:this.state.export,isLoading:this.state.isLoading,LaporanDataPenjualan:this.state.LaporanDataPenjualan,onSubmit:function(e){return a.handleSubmit(e)}}))))}}]),t}(o.Component);e.default=f}}]);
//# sourceMappingURL=92.a99c4d93.chunk.js.map