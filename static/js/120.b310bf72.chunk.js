(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1285:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(9),i=a(11),s=a(10),u=a(1),o=a.n(u),c=a(30),l=a(32),d=a(43),m=a(321),b=a(63),_=a(320),h=a(5),p=a(21),g=a(18),k=a(25),f=a(67),y=a.n(f),v=a(116),S=a.n(v),j=a(842),E=a.n(j),O=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={isLoadingReset:!1,isLoadingSimpanDataTerima:!1,disabled:!0,isShowingMore:!1,databarang:[],columns:[{dataField:"kode_baki",text:"Baki",editable:!1},{dataField:"kode_dept",text:"Jenis",editable:!1},{dataField:"qty_sepuh",text:"Qty Sepuh",editable:!1,headerClasses:"text-right",formatter:function(e){return o.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e)}},{dataField:"berat_sepuh",text:"Berat Sepuh",editable:!1,headerClasses:"text-right",formatter:function(e){return o.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e.toFixed(2))}},{dataField:"berat_terima",text:"Berat Terima",headerClasses:"text-right",formatter:function(e){return o.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e.toFixed(2))}},{dataField:"qty_terima",text:"Qty Terima",headerClasses:"text-right",formatter:function(e){return o.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e)}},{dataField:"berat_rusak",text:"Berat Rusak",headerClasses:"text-right",formatter:function(e){return o.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e.toFixed(2))}},{dataField:"qty_rusak",text:"Qty Rusak",headerClasses:"text-right",formatter:function(e){return o.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e)}},{dataField:"berat_selisih",text:"Berat Selisih",headerClasses:"text-right",formatter:function(e){return o.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e)},editable:!1}]},n}return Object(n.a)(a,[{key:"getDataKirimSepuh",value:function(e){var t=this;clearTimeout(this.delayTimer),this.delayTimer=setTimeout(function(){if(t.setState({loadingData:!0}),""===e)return t.setState({loadingData:!1}),!1;Object(g.g)("kirim-sepuh?no_sepuh="+e).then(function(e){if(0===e.data.length)return Object(k.e)("info","Data Kosong !"),Object(h.s)("data_terima_barang_sepuh",[]),t.setState({loadingData:!1}),!1;Object(h.s)("data_terima_barang_sepuh",e.data),t.setState({loadingData:!1})}).catch(function(e){Object(h.s)("data_terima_barang_sepuh",[]),t.setState({loadingData:!1}),Object(k.e)("info","Data Kosong !")})},1500)}},{key:"componentDidMount",value:function(){Object(h.s)("data_terima_barang_sepuh",[]),setTimeout(function(){document.getElementById("nokirim_sepuh_sepuh").focus()},100)}},{key:"setStartDate",value:function(e){this.setState({tanggal_kirim:new Date(e)})}},{key:"reset",value:function(){var e=this;this.setState({isLoadingReset:!0}),setTimeout(function(){Object(h.s)("data_terima_barang_sepuh",[]),e.setState({isLoadingReset:!1})},200)}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-10"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4"},o.a.createElement(_.a,{label:"No Kirim Sepuh",id:"nokirim_sepuh_sepuh",name:"nokirim_sepuh_sepuh",placeholder:"Silahkan Pilih No Kirim",component:p.e,onChange:function(t){return e.getDataKirimSepuh(t.target.value)}}))))),"\xa0",o.a.createElement(S.a,{keyField:"kode_dept",data:Object(h.i)("data_terima_barang_sepuh")||[],columns:this.state.columns||[],cellEdit:E()({mode:"click",blurToSave:!0,afterSaveCell:function(t,a,r,n){var i=parseFloat(r.berat_sepuh)-parseFloat(r.berat_terima),s=0;i<0?Object(k.e)("info","Berat Terima Tidak Boleh Melebih Dari Berat Sepuh"):s=(parseFloat(r.berat_sepuh)-parseFloat(r.berat_terima)).toFixed(2)||0;var u={tgl_system:r.tgl_system,no_sepuh:r.no_sepuh,kode_baki:r.kode_baki,kode_dept:r.kode_dept,kode_group:r.kode_group,qty_sepuh:r.qty_sepuh,qty_terima:r.qty_terima,berat_sepuh:r.berat_sepuh,berat_terima:r.berat_terima,berat_rusak:r.berat_rusak,qty_rusak:r.qty_rusak,berat_selisih:s};switch(n.dataField){case"berat_terima":u.berat_terima=i<0?0:Number(a);break;case"qty_sepuh":u.qty_sepuh=Number(a);break;case"qty_terima":if(Number(a)+r.qty_rusak!==r.qty_sepuh)return Object(k.e)("info","Harap Masukan Qty Dengan Benar"),e.setState({disabled:!0}),!1;u.qty_terima=Number(a),e.setState({disabled:!1});break;case"berat_rusak":u.berat_rusak=Number(a);break;case"qty_rusak":u.qty_rusak=Number(a)}var o=0===Object(h.i)("data_terima_barang_sepuh").length?[]:Object(h.i)("data_terima_barang_sepuh"),c=o.findIndex(function(e){return e.kode_dept===u.kode_dept});-1===c?(o.push(u),Object(h.s)("data_terima_barang_sepuh",o),e.setState({Berhasil:!0})):(o[c]=u,Object(h.s)("data_terima_barang_sepuh",o),e.setState({Berhasil:!0}))}})}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 text-right"},o.a.createElement("button",{type:"submit",disabled:this.state.disabled,className:"btn btn-primary"},this.props.isLoading?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menuimpan"):"Simpan"),"\xa0",o.a.createElement("button",{type:"button",onClick:function(){return e.reset()},"data-tut":"resetData",className:"btn btn-warning"},this.props.isLoadingReset?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Reset"):"Reset"))),this.state.loadingData?o.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null,this.state.isLoadingReset?o.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(u.Component);O=Object(m.a)({form:"HeadTerimaSepuh",enableReinitialize:!0})(O);var q=Object(c.b)(function(e){return{initialValues:{tanggal_terima:Object(h.k)()}}})(O),x=a(0),N=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).closeTour=function(){n.setState({isTourOpen:!1})},n.openTour=function(){n.setState({isTourOpen:!0})},n.state={isLoading:!1},n}return Object(n.a)(a,[{key:"handleSubmit",value:function(e){var t=this,a=[];this.setState({isLoading:!0}),Object(x.H)("data_terima_barang_sepuh").forEach(function(e){var t={kode_baki:e.kode_baki,kode_dept:e.kode_dept,kode_group:e.kode_group,qty_sepuh:parseInt(e.qty_sepuh),berat_timbangan:parseFloat(e.berat_sepuh),berat_terima:parseFloat(e.berat_terima),qty_terima:parseInt(e.qty_terima),berat_rusak:parseFloat(e.berat_rusak),qty_rusak:parseInt(e.qty_rusak),berat_selisih:parseFloat(e.berat_selisih)};a.push(t)});var r={no_sepuh:e.nokirim_sepuh_sepuh,tgl_system:Object(x.I)(),detail_sepuh:a,total_qty:Object(x.H)("data_terima_barang_sepuh").reduce(function(e,t){return e+t.qty_sepuh},0),total_berat:Object(x.H)("data_terima_barang_sepuh").reduce(function(e,t){return e+t.berat_sepuh},0),total_qty_rusak:Object(x.H)("data_terima_barang_sepuh").reduce(function(e,t){return e+t.qty_rusak},0),total_berat_rusak:Object(x.H)("data_terima_barang_sepuh").reduce(function(e,t){return e+t.berat_rusak},0),total_qty_terima:Object(x.H)("data_terima_barang_sepuh").reduce(function(e,t){return e+t.qty_terima},0),total_berat_terima:Object(x.H)("data_terima_barang_sepuh").reduce(function(e,t){return e+t.berat_terima},0),total_berat_timbang:Object(x.H)("data_terima_barang_sepuh").reduce(function(e,t){return e+t.berat_sepuh},0)};Object(x.V)("terima-sepuh",r).then(function(e){console.log(e.data),Object(x.v)("success",e.data.message),Object(x.ab)("data_terima_barang_sepuh",[]),t.setState({isLoading:!1}),t.props.dispatch(Object(d.d)("HeadTerimaSepuh"));for(var a=[],r=0;r<2;r++){var n="";n+="========================================\n",n+="            TERIMA SEPUHAN              \n",n+="========================================\nNo Sepuh         : ".concat(e.data.buktiSlip.no_sepuh,"\nNo Terima Sepuh  : ").concat(e.data.buktiSlip.no_terima_sepuh,"\nTgl Terima       : ").concat(e.data.buktiSlip.tgl_terima),e.data.buktiSlip.jenis.forEach(function(e,t){n+="\n========================================",e.baki.forEach(function(e,t){n+=t>0?"\n                 : ".concat(e):"\nKode Baki        : ".concat(e)}),n+="\nKode Jenis       : ".concat(e.jenis),n+="\nBerat Rusak      : ".concat(e.berat_rusak),n+="\nBerat Sepuh      : ".concat(e.berat_sepuh),n+="\nBerat Terima     : ".concat(e.berat_terima),n+="\nQty Rusak        : ".concat(e.qty_rusak),n+="\nQty Sepuh        : ".concat(e.qty_sepuh),n+="\nQty Terima       : ".concat(e.qty_terima)}),n+="\n========================================",n+="\nTotal Qty SP     : ".concat(e.data.buktiSlip.jenis.reduce(function(e,t){return e+t.qty_sepuh},0),"\nTotal Berat SP   : ").concat(e.data.buktiSlip.jenis.reduce(function(e,t){return e+t.berat_sepuh},0),"\n"),n+="========================================\n",n+="              TERIMA KASIH              \n",n+="========================================",n+="\n\n\n\n\n\n\n",a.push(n)}document.getElementById("myInput").value=a.join("")}).then(function(){var e=document.createElement("a"),t=new Blob([document.getElementById("myInput").value],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t),e.download="autoprint_kirim_sepuhan.txt",document.body.appendChild(e),e.click()}).catch(function(e){var a;console.log(e),Object(x.v)("info",(null===(a=e.response)||void 0===a?void 0:a.data.message)||"Terjadi Kesalahan Saat Request Data"),t.setState({isLoading:!1})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("textarea",{style:{display:"none"},id:"myInput",rows:"100",cols:"100"}),o.a.createElement("ol",{className:"breadcrumb float-xl-right"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement(l.b,{to:"#"},"Sepuhan")),o.a.createElement("li",{className:"breadcrumb-item active"},"Terima Sepuhan")),o.a.createElement("h1",{className:"page-header"},"Terima Sepuhan "),o.a.createElement(b.a,null,o.a.createElement(b.c,null,"Terima Sepuhan"),o.a.createElement(b.b,null,o.a.createElement(q,{isLoading:this.state.isLoading,onSubmit:function(t){return e.handleSubmit(t)}}))))}}]),a}(o.a.Component);N=Object(m.a)({form:"TerimaBarangSepuh",enableReinitialize:!0})(N);t.default=Object(c.b)()(N)}}]);
//# sourceMappingURL=120.b310bf72.chunk.js.map