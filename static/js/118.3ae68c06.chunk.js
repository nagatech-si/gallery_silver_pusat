(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1291:function(t,e,a){"use strict";a.r(e);var n=a(8),o=a(9),r=a(15),i=a(11),l=a(10),c=a(1),s=a(18),u=a(63),m=a.n(u),d=function(t){Object(i.a)(a,t);var e=Object(l.a)(a);function a(t){var o;return Object(n.a)(this,a),(o=e.call(this,t)).state={date:new Date},o.setStartDate=o.setStartDate.bind(Object(r.a)(o)),o.setLastDate=o.setLastDate.bind(Object(r.a)(o)),o}return Object(o.a)(a,[{key:"handleSubmit",value:function(t){}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this;return c.o.createElement("div",null,c.o.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()},autoComplete:"off"},c.o.createElement("div",{className:"row"},c.o.createElement("div",{className:"col-lg-4"},c.o.createElement(c.d,{name:"tgl_awal",component:c.g,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),c.o.createElement("div",{className:"col-lg-4"},c.o.createElement(c.d,{name:"tgl_akhir",component:c.g,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),c.o.createElement("div",{className:"col-lg-4"},c.o.createElement("div",{className:"text-right"},c.o.createElement("label",null,"\xa0"),c.o.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?c.o.createElement(c.o.Fragment,null,c.o.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Titipan"))))),this.props.isLoading?c.o.createElement(m.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(c.o.Component);d=Object(c.Y)({form:"HeadBatalTitipan",enableReinitialize:!0})(d);var b=Object(c.w)(function(t){return{initialValues:{tgl_awal:Object(c.I)(),tgl_akhir:Object(c.I)()}}})(d),p=function(t){Object(i.a)(a,t);var e=Object(l.a)(a);function a(t){var o;return Object(n.a)(this,a),(o=e.call(this,t)).state={isLoading:!1,batal:!1,datatitipan:[],databaki:[],columns:[{dataField:"no_titip_group",text:"No Titip",footerAttrs:{colSpan:"4"},footer:"Total"},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"total_dp",text:"Total Dp",formatter:function(t,e,a){return c.o.createElement("span",null,parseInt(e.total_dp).toLocaleString("kr-KO"))},footer:function(t){return parseInt(t.reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO")}},{dataField:"harga_total",text:"Total Harga",formatter:function(t){return c.o.createElement("span",null," ",parseInt(t).toLocaleString("kr-KO"))},footer:function(t){return parseInt(t.reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(t,e,a){return c.o.createElement("div",{className:"row text-center"},c.o.createElement("div",{className:"col-12"},c.o.createElement("button",{type:"button",disabled:"FINIS"===e.status_titipan,"data-tooltip":"FINIS"!==e.status_titipan?"Batal Titipan":"Tidak Bisa Dibatal",onClick:function(){return o.showPilihBaki(e.no_titip_group)},className:"btn btn-danger mr-3"},c.o.createElement("i",{className:"fa fa-window-close"}))))},footer:""}]},o.handleSubmit=o.handleSubmit.bind(Object(r.a)(o)),o}return Object(o.a)(a,[{key:"batalTitipan",value:function(){var t=this;c.t.fire({title:"Anda Yakin !!",text:"Ingin Membatalkan Titipan Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){if(e.isConfirmed){t.setState({batal:!0});var a=Object(c.H)("tgl_laporan");Object(s.n)("titip/cancel",{no_titip_group:t.state.no_titip_group,kode_toko:t.state.kode_baki}).then(function(e){t.setState({batal:!1}),Object(c.v)("success","Titipan Berhasil Di Batal"),t.props.dispatch(Object(c.K)()),Object(s.d)("titip/date/"+a.tgl_awal+"/"+a.tgl_akhir).then(function(e){var a=[];e.data.filter(function(t,n){var o={no_titip_group:t.no_titip_group,kode_barcode:t.kode_barcode,nama_barang:t.nama_barang,kode_customer:t.kode_customer,nama_customer:t.nama_customer,nama_atribut:t.nama_atribut,no_hp:t.no_hp,alamat_customer:t.alamat_customer,berat_atribut:t.berat_atribut,harga_atribut:t.harga_atribut,ongkos:t.ongkos,harga_total:t.harga_total,total_dp:e.data.findIndex(function(e){return e.no_titip_group===t.no_titip_group})===n?t.total_dp:0};return a.push(o),o}),t.setState({datatitipan:a})})}).catch(function(t){Object(c.v)("info",/conflict/i.test(t.response.data.message||"Error")?"Terjadi Kesalahan Saat Mengirim Data":t.response.data.message)})}else t.setState({batal:!1})})}},{key:"showPilihBaki",value:function(t){this.setState({no_titip_group:t}),this.props.dispatch(Object(c.bb)())}},{key:"componentDidMount",value:function(){var t=this;Object(s.c)("baki/ready").then(function(e){t.setState({databaki:e.data})})}},{key:"handleSubmit",value:function(t){var e=this;this.setState({isLoading:!0}),Object(s.d)("titip/date/"+t.tgl_awal+"/"+t.tgl_akhir).then(function(a){if(0===a.data.length)Object(c.v)("info","Data Yang Anda Cari Tidak Ada"),e.setState({isLoading:!1});else{Object(c.v)("success","Data Titipan Tersedia");var n={tgl_awal:Object(c.B)(Object(c.R)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(c.B)(Object(c.R)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))},o=[];a.data.filter(function(t,e){var n={no_titip_group:t.no_titip_group,kode_barcode:t.kode_barcode,nama_barang:t.nama_barang,kode_customer:t.kode_customer,nama_customer:t.nama_customer,nama_atribut:t.nama_atribut,no_hp:t.no_hp,alamat_customer:t.alamat_customer,berat_atribut:t.berat_atribut,harga_atribut:t.harga_atribut,ongkos:t.ongkos,harga_total:t.harga_total,total_dp:a.data.findIndex(function(e){return e.no_titip_group===t.no_titip_group})===e?t.total_dp:0};return o.push(n),n}),e.setState({isLoading:!1,datatitipan:o}),Object(c.ab)("tgl_laporan",n)}}).catch(function(t){Object(c.v)("info",void 0===t.response?"Terjadi Kesalahan Saat Request Data":t.response.data.message),e.setState({isLoading:!1})})}},{key:"render",value:function(){var t=this,e={renderer:function(t){return c.o.createElement("div",{className:"container"},c.o.createElement("div",{className:"row"},c.o.createElement("div",{className:"col-12"},"NONMEMBER"===t.kode_customer?"":"kode Customer :"+t.kode_customer+c.o.createElement(c.o.Fragment,null," ",c.o.createElement("br",null)," "),"No Hp : ",t.no_hp," ",c.o.createElement("br",null),"Alamat Customer : ",t.alamat_customer," ",c.o.createElement("br",null),"Nama Atribut : ",t.nama_atribut," ",c.o.createElement("br",null),"Betat Atribut : ",t.berat_atribut.toFixed(3)," ",c.o.createElement("br",null),"Harga Atribut : ",t.harga_atribut.toLocaleString("kr-KO")," ",c.o.createElement("br",null),"Ongkos : ",t.ongkos.toLocaleString("kr-KO")," ",c.o.createElement("br",null))))},showExpandColumn:!0,expandByColumnOnly:!0};return c.o.createElement("div",null,c.o.createElement("ol",{className:"breadcrumb float-xl-right"},c.o.createElement("li",{className:"breadcrumb-item"},c.o.createElement(c.h,{to:"#"},"Penjualan")),c.o.createElement("li",{className:"breadcrumb-item active"},"Lihat Titipan")),c.o.createElement("h1",{className:"page-header"},"Lihat Titipan "),c.o.createElement(c.l,null,c.o.createElement(c.n,null,"Lihat Titipan"),c.o.createElement("br",null),c.o.createElement(c.m,null,c.o.createElement(b,{isLoading:this.state.isLoading,onSubmit:function(e){return t.handleSubmit(e)}}),c.o.createElement(c.u,{keyField:"kode_barcode",exportCsv:!1,data:this.state.datatitipan,columns:this.state.columns,empty:!0,textEmpty:"Data Barang Kosong",expandRow:e})),c.o.createElement("br",null)),c.o.createElement(c.j,{title:"Pilih Baki",size:"l",content:c.o.createElement(c.o.Fragment,null,c.o.createElement("div",{className:"col-lg-12"},c.o.createElement(c.d,{name:"kode_baki",component:c.r,options:this.state.databaki.filter(function(t){return void 0!==t.kode_baki}).map(function(t){return{value:t.kode_baki,name:t.kode_baki}}),onChange:function(e){return t.setState({kode_baki:e})},label:"Kode Baki",placeholder:"Silahkan Pilih Kode Lokasi"})),c.o.createElement("div",{className:"col-lg-12"},c.o.createElement("button",{className:"btn btn-primary",disabled:this.state.batal,onClick:function(){return t.batalTitipan()},type:"button"},this.state.batal?c.o.createElement(c.o.Fragment,null,c.o.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Batal"):"Batal")))}),this.state.batal?c.o.createElement(m.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null,this.state.isLoading?c.o.createElement(m.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(c.o.Component);p=Object(c.Y)({form:"BatalTitipan",enableReinitialize:!0})(p);e.default=Object(c.w)()(p)}}]);
//# sourceMappingURL=118.3ae68c06.chunk.js.map