(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1215:function(e,a,t){"use strict";t.r(a);var n=t(8),c=t(9),o=t(15),r=t(11),d=t(10),l=t(0),i=t.n(l),s=t(31),b=t(24),m=t(56),g=t(18),u=t(52),k=t(320),_=t(321),p=t(30),h=t(7),f=t(20),v=t(4),S=t(1),E=function(e){Object(r.a)(t,e);var a=Object(d.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).toggle=c.toggle.bind(Object(o.a)(c)),c.state={activeTab:"1",loading:!1,isLoading:!1,kode_baki:"",kode_gudang:"",databarang:[],columns:[{dataField:"kode_barcode",text:"Kode Barcode "},{dataField:"nama_barang",text:"Nama Barang "},{dataField:"kode_dept",text:"Kode Jenis "},{dataField:"berat",text:"Berat "},{dataField:"kode_intern",text:"Kode Intern "}]},c}return Object(c.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"componentDidMount",value:function(){Object(v.s)("cetak_barcode_selected",[]),this.props.dispatch(Object(h.xb)()),this.props.dispatch(Object(h.vb)())}},{key:"setSystem",value:function(e){var a={key:"kategori_harga",value:e,type:"kategori_harga"};Object(g.j)("para-system/",a).then(function(){Object(b.e)("success","Berhasil Setting System")})}},{key:"getBarcode",value:function(){var e=this;this.setState({isLoading:!0}),Object(g.e)("tambah-barang?kode_gudang=".concat(this.state.kode_gudang||"ALL","&kode_toko=").concat(this.state.kode_baki||"ALL")).then(function(a){0===a.data.length?(Object(b.e)("info","Data Yang Anda Cari Tidak Ada"),e.setState({isLoading:!1,databarang:[]})):(Object(b.e)("success","Data Barang Tersedia"),e.setState({isLoading:!1,databarang:a.data}))}).catch(function(a){Object(b.e)("info","Terjadi Kesalahan Saat Request Data"),e.setState({isLoading:!1,databarang:[]})})}},{key:"print",value:function(){var e=JSON.parse(localStorage.getItem("cetak_barcode_selected"))||[];if(0===e.length)Object(b.e)("info","Silahkan pilih barcode terlebih dahulu");else{Object(g.i)("tmp-barang",e).then(function(e){Object(b.e)("success","Data Berhasil Disimpan")}).catch(function(e){Object(b.e)("info","Data Gagal Disimpan")});var a="",t=1;e.map(function(n,c){return 1===e.length?a+=n.kode_barcode:t===e.length?a+=n.kode_barcode:a=a+n.kode_barcode+",",t++,!0}),document.getElementById("barcode").value=a,this.TextFilenotapesanan()}}},{key:"TextFilenotapesanan",value:function(){var e=document.createElement("a"),a=new Blob([document.getElementById("barcode").value],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(a),e.download="autoprint_barcode.txt",document.body.appendChild(e),e.click()}},{key:"render",value:function(){var e=this,a=[{value:"ALL",name:"SEMUA"}];this.props.dataGudang.forEach(function(e){var t={value:e.kode_gudang,name:e.kode_gudang+" - "+e.nama_gudang};a.push(t)});var t=[{value:"ALL",name:"SEMUA"}];this.props.databaki.forEach(function(e){var a={value:e.kode_baki,name:e.kode_baki+" - "+e.nama_baki};t.push(a)});var n={mode:"checkbox",clickToSelect:!0,selectColumnPosition:"left",onSelect:function(e,a,t,n){if(!0===a){var c={kode_barcode:e.kode_barcode,nama_barang:e.nama_barang,berat:e.berat,kode_intern:e.kode_intern,kode_dept:e.kode_dept},o=JSON.parse(localStorage.getItem("cetak_barcode_selected"))||[];-1===o.findIndex(function(a){return a.kode_barcode===e.kode_barcode})&&(o.push(c),localStorage.setItem("cetak_barcode_selected",JSON.stringify(o)))}else if(null===localStorage.getItem("cetak_barcode_selected"));else{var r=(JSON.parse(localStorage.getItem("cetak_barcode_selected"))||[]).findIndex(function(a){return a.kode_barcode===e.kode_barcode}),d=JSON.parse(localStorage.getItem("cetak_barcode_selected"));d.splice(r,1),localStorage.setItem("cetak_barcode_selected",JSON.stringify(d))}},onSelectAll:function(e,a,t){a.forEach(function(a,t){if(!0===e){var n={kode_barcode:a.kode_barcode,nama_barang:a.nama_barang,berat:a.berat,kode_intern:a.kode_intern,kode_dept:a.kode_dept,kadar_cetak:a.kadar_cetak},c=JSON.parse(localStorage.getItem("cetak_barcode_selected"))||[];-1===c.findIndex(function(e){return e.kode_barcode===a.kode_barcode})&&(c.push(n),localStorage.setItem("cetak_barcode_selected",JSON.stringify(c)))}else if(null===localStorage.getItem("cetak_barcode_selected"));else{var o=(JSON.parse(localStorage.getItem("cetak_barcode_selected"))||[]).findIndex(function(e){return e.kode_barcode===a.kode_barcode}),r=JSON.parse(localStorage.getItem("cetak_barcode_selected"));r.splice(o,1),localStorage.setItem("cetak_barcode_selected",JSON.stringify(r))}})}};return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(s.b,{to:"#"},"Dashboard")),i.a.createElement("li",{className:"breadcrumb-item"},"Cetak Barcode")),i.a.createElement("h1",{className:"page-header"},"Cetak Barcode"),i.a.createElement(m.a,null,i.a.createElement(m.c,null,"Cetak Barcode"),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"d-none"},i.a.createElement("textarea",{style:{display:"none"},id:"barcode",rows:"100",cols:"100"})),i.a.createElement("div",{className:"col-3"},!1===this.state.loading?i.a.createElement(k.a,{label:"Gudang",name:"kode_gudang",options:a,placeholder:"Silahkan Pilih Kode Baki",onChange:function(a){"ALL"!==a?e.props.dispatch(Object(h.wb)(a)):e.props.dispatch(Object(h.vb)()),e.setState({kode_gudang:a})},component:f.f}):i.a.createElement(f.g,{label:"Kode Baki"})),i.a.createElement("div",{className:"col-3"},!1===this.state.loading?i.a.createElement(k.a,{label:"Kode Baki",name:"kode_baki",options:t,onChange:function(a){e.setState({kode_baki:a})},placeholder:"Silahkan Pilih Kode Baki",component:f.f}):i.a.createElement(f.g,{label:"Kode Baki"})),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("label",{htmlFor:""},"\xa0"),i.a.createElement("button",{className:"btn btn-outline-secondary btn-block",onClick:function(a){return e.getBarcode(a)}},this.state.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Data")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("label",{htmlFor:""},"\xa0"),i.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){return e.print()}},"Print Barcode"))))),i.a.createElement(u.a,{selectRow:n,keyField:"kode_barcode",columns:this.state.columns,data:this.state.databarang||[],empty:!0})),i.a.createElement("br",null)),this.state.isLoading?i.a.createElement(S.i,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(i.a.Component);E=Object(_.a)({form:"CetakBarcode",enableReinitialize:!0})(E),a.default=Object(p.b)(function(e){return{databaki:e.datamaster.getDataBaki,dataGroup:e.datamaster.GetDataGroup,dataJenis:e.datamaster.getDataJenis,dataGudang:e.datamaster.getDataGudang}})(E)}}]);
//# sourceMappingURL=123.13049e38.chunk.js.map