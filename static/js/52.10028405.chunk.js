(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1229:function(e,a,t){"use strict";t.r(a);var n=t(8),l=t(9),i=t(11),o=t(10),r=t(0),c=t.n(r),s=t(31),d=t(56),m=t(1182),u=t(18),h=t(4),b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={penjualan_hari_ini:0,pembelian_hari_ini:0,pembelian_bulanan:0,pesanan_hari_ini:0,pesanan_bulanan:0,service_hari_ini:0,service_bulanan:0},l.lineChartData={labels:["JANUARI","FEBRUARI","MARET","APRIL","MEI","JUNI","JULI","AGUSTUS","SEPTEMBER","OKTOBER","NOVEMBER","DESEMBER"],datasets:[{label:"Penjualan",fill:!1,lineTension:.1,backgroundColor:"rgba(0, 172, 172, 0.25)",borderColor:"#FF5B57",borderWidth:2,pointBorderColor:"#FF5B57",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#FF5B57",pointHoverBorderWidth:3,pointRadius:3,pointHitRadius:10,data:Object(h.i)("data_penjualan_bulanan")},{label:"Pembelian",fill:!1,lineTension:.1,backgroundColor:"rgba(52, 143, 226, 0.25)",borderColor:"#F59C1A",borderWidth:2,pointBorderColor:"#F59C1A",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#F59C1A",pointHoverBorderWidth:3,pointRadius:3,pointHitRadius:10,data:Object(h.i)("data_pembelian_bulanan")}]},l.lineChartOptions={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"black"}}],xAxes:[{ticks:{fontColor:"black"}}]},legend:{labels:{fontColor:"black"}}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(u.d)("penjualan/chart?type=today").then(function(a){e.setState({penjualan_hari_ini:a.data.value||0})}).catch(function(e){console.log(e)}),Object(u.d)("penjualan/chart?type=monthly").then(function(e){Object(h.s)("data_penjualan_bulanan",e.data.value)}).catch(function(e){console.log(e)}),Object(u.d)("pembelian/chart?type=monthly").then(function(e){Object(h.s)("data_pembelian_bulanan",e.data.value)}).catch(function(e){console.log(e)}),Object(u.d)("pembelian/chart?type=today").then(function(a){e.setState({pembelian_hari_ini:a.data.value||0})}).catch(function(e){console.log(e)}),Object(u.d)("pesanan/chart?type=today").then(function(a){e.setState({pesanan_hari_ini:a.data.value||0})}).catch(function(e){console.log(e)}),Object(u.d)("service/chart?type=today").then(function(a){e.setState({service_hari_ini:a.data.value||0})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(s.b,{to:"#"},"Home")),c.a.createElement("li",{className:"breadcrumb-item active"},"Dashboard")),c.a.createElement("h1",{className:"page-header"},"Dashboard"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-6 col-md-6"},c.a.createElement("div",{className:"widget widget-stats bg-red"},c.a.createElement("div",{className:"stats-icon"},c.a.createElement("i",{className:"fa fa-shopping-cart"})),c.a.createElement("div",{className:"stats-info"},c.a.createElement("h4",null,"TOTAL PENJUALAN HARI INI"),c.a.createElement("p",null,this.state.penjualan_hari_ini)),c.a.createElement("div",{className:"stats-link"},c.a.createElement(s.b,{to:"/lihat-penjualan"},"Lihat Detail ",c.a.createElement("i",{className:"fa fa-arrow-alt-circle-right"}))))),c.a.createElement("div",{className:"col-xl-6 col-md-6"},c.a.createElement("div",{className:"widget widget-stats bg-orange"},c.a.createElement("div",{className:"stats-icon"},c.a.createElement("i",{className:"fa fa-shopping-bag"})),c.a.createElement("div",{className:"stats-info"},c.a.createElement("h4",null,"TOTAL PEMBELIAN HARI INI"),c.a.createElement("p",null,this.state.pembelian_hari_ini)),c.a.createElement("div",{className:"stats-link"},c.a.createElement(s.b,{to:"/lihat-pembelian"},"Lihat Detail ",c.a.createElement("i",{className:"fa fa-arrow-alt-circle-right"})))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement(d.a,null,c.a.createElement(d.c,null,"Analisa Transaksi / Bulan"),c.a.createElement(d.b,null,c.a.createElement(m.Line,{data:this.lineChartData,height:300,options:this.lineChartOptions}))))))}}]),t}(c.a.Component);a.default=b}}]);
//# sourceMappingURL=52.10028405.chunk.js.map