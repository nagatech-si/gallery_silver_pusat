(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1248:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(9),o=t(14),s=t(11),i=t(10),l=t(0),c=t(16),p=t(721),m=t(6),u=[{value:"MEMBER",name:"MEMBER"},{value:"NONMEMBER",name:"NON MEMBER"}],d=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={showMember:!0},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.Hb)());var e=0===Object(l.Q)("data_customer_tmp").length?[]:JSON.parse(Object(l.Q)("data_customer_tmp")||[]);e&&"MEMBER"===e.jenis_pelanggan?this.setState({showMember:!1}):(this.setState({showMember:!0}),this.props.change("jenis_pelanggan","NONMEMBER"))}},{key:"changemember",value:function(e){"MEMBER"===e?(this.setState({showMember:!1}),document.getElementById("kode_member").focus(),this.props.change("kode_customer","")):(this.props.change("kode_customer","NONMEMBER"),document.getElementById("nama_customer").focus(),this.props.change("nama_customer",""),this.props.change("no_hp",""),this.props.change("alamat_customer",""),this.setState({showMember:!0}))}},{key:"getMember",value:function(e){var a=this;Object(l.E)("member/get/by-kode-member/"+e).then(function(e){0===e.data.length?Object(l.v)("info","Member Yang Anda Masukan Tidak Ada !!!"):e.data.forEach(function(e,t){a.props.change("nama_customer",e.nama_customer),a.props.change("no_hp",e.no_hp),a.props.change("alamat_customer",e.alamat_customer)})}).catch(function(e){Object(l.v)("info","Terjadi Kesalahan SIlahkan Ulangi Kembali !!!")})}},{key:"render",value:function(){var e=this;return l.p.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},l.p.createElement("div",{className:"row"},l.p.createElement("div",{className:"col-4"},l.p.createElement(l.e,{name:"kode_sales",label:"Pilih Kode Sales",placeholder:"Masukan Kode Sales",options:this.props.DataSales.filter(function(e){return void 0!==e.kode_sales}).map(function(e){return{value:e.kode_sales,name:e.kode_sales}}),component:l.s})),l.p.createElement("div",{className:"col-4"},l.p.createElement(l.e,{id:"jenis_pelanggan",name:"jenis_pelanggan",label:"Pilih Pelanggan",onChange:function(a){return e.changemember(a)},placeholder:"Silahkan Pilih Pelanggan",options:u,component:l.s})),l.p.createElement("div",{className:"col-4"},l.p.createElement(l.e,{id:"kode_member",name:"kode_customer",onChange:function(a){return e.getMember(a.target.value)},component:l.r,type:"text",readOnly:this.state.showMember,label:"Kode Customer",placeholder:"Masukan Kode Customer"})),l.p.createElement("div",{className:"col-4"},l.p.createElement(l.e,{id:"nama_customer",name:"nama_customer",component:l.r,type:"text",label:"Nama Customer",placeholder:"Masukan Nama Customer"})),l.p.createElement("div",{className:"col-4"},l.p.createElement(l.e,{name:"no_hp",component:l.r,type:"text",normalize:l.l,label:"No Hp",placeholder:"Masukan No Hp"})),l.p.createElement("div",{className:"col-4"},l.p.createElement(l.e,{name:"alamat_customer",component:l.r,type:"textarea",label:"Alamat Customer",placeholder:"Masukan Alamat Customer"}))),l.p.createElement("div",{className:"row"},l.p.createElement("div",{className:"col-8"}),l.p.createElement("div",{className:"col-4"},l.p.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoadingDataCustomer,type:"submit"},this.props.isLoadingDataCustomer?l.p.createElement(l.p.Fragment,null,l.p.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),t}(l.c);d=Object(l.Z)({form:"ModalDataCustomer",enableReinitialize:!0,validate:p.a})(d);var b=Object(l.w)(function(e){var a=0===Object(l.Q)("data_customer_tmp").length?[]:JSON.parse(Object(l.Q)("data_customer_tmp")||[]);return{initialValues:{kode_sales:a.kode_sales||"",jenis_pelanggan:a.jenis_pelanggan||"",kode_customer:a.kode_customer||"",nama_customer:a.nama_customer||"",no_hp:a.no_hp||"",alamat_customer:a.alamat_customer||""},DataSales:e.datamaster.getDataSales}})(d),h=t(695),_=Object(l.z)({prefix:"Rp. ",locale:"kr-KO"}),g=[{value:"CASH",name:"CASH"},{value:"DEBET",name:"DEBET"},{value:"TRANSFER",name:"TRANSFER"},{value:"CREDIT",name:"CREDIT"}],k=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1,type_pembayaran:"CASH",lebih:!1,columns:[{dataField:"type",text:"Type",footerAttrs:{colSpan:"1"},footer:"Grand Total"},{dataField:"Total",text:"Total",footer:""}]},r.setStartDate=r.setStartDate.bind(Object(o.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(m.Hb)());var a=JSON.parse(Object(l.Q)("data_barang_pesanan")),t=0;a.forEach(function(a,n){t+=a.sub_total,e.props.change("grand_total_pembayaran",t),e.props.change("harus_bayar_rp",t)}),this.props.change("jenis","CASH"),setTimeout(function(){document.getElementById("cash_trx_penjualan").focus()},100)}},{key:"hitungTotal",value:function(){this.props.change("kembali",this.props.kembali),this.props.change("nominal_kembali",this.props.nominal_kembali)}},{key:"pilihPembyaran",value:function(e){"CASH"===e?this.setState({type_pembayaran:"CASH"}):"TRANSFER"===e?this.setState({type_pembayaran:"TRANSFER"}):"DEBET"===e?this.setState({type_pembayaran:"DEBET"}):this.setState({type_pembayaran:"CREDIT"}),this.props.change("cash","")}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"copyValue",value:function(e){this.props.change("cash",parseInt(Object(l.l)(e)))}},{key:"render",value:function(){var e=this;return l.p.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},l.p.createElement("div",{className:"row"},l.p.createElement("div",{className:"col-6"},l.p.createElement(l.e,Object.assign({name:"grand_total_pembayaran",component:l.r,type:"text",onChange:this.hitungTotal(),readOnly:!0},_,{label:"Total Harga Jual",placeholder:"Total Harga Jual"}))),l.p.createElement("div",{className:"col-6"},l.p.createElement(l.e,Object.assign({id:"harus_bayar_rp",name:"harus_bayar_rp",component:l.r,type:"text",onChange:this.hitungTotal(),readOnly:!0},_,{label:"Harus Bayar Rp",placeholder:"Harus Bayar Rp"}))),l.p.createElement("div",{className:"col-6"},l.p.createElement(l.e,{name:"jenis",label:"Pilih Jenis Bayar",placeholder:"Pilih Jenis Pembayaran",options:g,onChange:function(a){return e.pilihPembyaran(a)},component:l.s})),l.p.createElement("div",{className:"col-6",style:{display:"CASH"===this.state.type_pembayaran?"none":(this.state.type_pembayaran,"block")}},l.p.createElement(l.e,{tabIndex:"1",name:"nama_bank",id:"nama_bank",component:l.r,type:"text",label:"Bank",placeholder:"Masukan Nama Bank"})),l.p.createElement("div",{className:"col-6",style:{display:"CASH"===this.state.type_pembayaran?"none":"DEBET"===this.state.type_pembayaran?"none":"block"}},l.p.createElement(l.e,{tabIndex:"1",name:"no_card",id:"no_card",component:l.r,type:"text",label:"TRANSFER"===this.state.type_pembayaran?"No Rek":"Card No",placeholder:"TRANSFER"===this.state.type_pembayaran?"Masukan No Rek":"Masukan Card No"})),l.p.createElement("div",{className:"col-6"},l.p.createElement(l.e,Object.assign({tabIndex:"1",name:"cash",id:"cash_trx_penjualan",component:l.r,type:"text",label:"Nominal",onChange:this.hitungTotal()},_,{normalize:l.l,placeholder:"Masukan Nominal"}))),l.p.createElement("div",{className:"col-6",style:{display:"CREDIT"===this.state.type_pembayaran?"block":"none"}},l.p.createElement(l.e,{tabIndex:"1",name:"fee",id:"fee",component:l.r,type:"text",label:"Fee (%)",normalize:l.l,placeholder:"5"})),l.p.createElement("div",{className:"col-6 d-none"},l.p.createElement(l.e,{tabIndex:"1",name:"nominal_kembali",component:l.r,type:"text",label:"Nominal",placeholder:"Masukan Nominal"})),l.p.createElement("div",{className:"col-6"},l.p.createElement(l.e,{name:"kembali",id:"sisa_bayar",component:l.r,type:"text",readOnly:!0,label:"Sisa",onFocus:function(a){return e.copyValue(a.target.value)},placeholder:"Sisa Pembayaran"})),l.p.createElement("div",{className:"CASH"===this.state.type_pembayaran?"col-6 text-right":"TRANSFER"===this.state.type_pembayaran?"col-6 text-right":"col-12 text-right"},l.p.createElement("br",null),l.p.createElement("label",null,"\xa0"),l.p.createElement("button",{tabIndex:"2",disabled:this.props.notif,className:"btn btn-primary"}," ",l.p.createElement("i",{className:"fa fa-plus"}))),l.p.createElement("div",{className:"col-12"},l.p.createElement(l.e,{name:"estimasi_pesanan",component:l.h,type:"text",label:"Estimasi Pesanan Selesai",defaultValue:Object(l.J)(),selected:this.state.tgl_awal,onChange:function(a){return e.setStartDate(a)},placeholder:"Estimasi Pesanan"}))))}}]),t}(l.c);k=Object(l.Z)({form:"HeadInputPembayaran",enableReinitialize:!0,validate:h.a})(k);var f=Object(l.B)("HeadInputPembayaran"),E=Object(l.w)(function(e){var a=f(e,"grand_total_pembayaran","harus_bayar_rp","cash"),t=a.cash,n=a.harus_bayar_rp,r=JSON.parse(localStorage.getItem("trx_pemabayaran_pesanan"))||[],o=0;r.forEach(function(e){o=e.nominal+o});var s=parseFloat(o||0)-parseFloat(n||0);return{kembali:s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),nominal_kembali:s+parseInt(t),initialValues:{estimasi_pesanan:Object(l.J)()}}})(k),y=t(52),v=t.n(y),j=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1,type_pembayaran:"CASH",columns:[{dataField:"jenis",text:"Jenis",footerAttrs:{colSpan:"2"},footer:"Grand Total"},{dataField:"keterangan",text:"Keterangan"},{dataField:"nominal",text:"Total",formatter:function(e){return l.p.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a,t){return l.p.createElement("div",{className:"row text-center"},l.p.createElement("div",{className:"col-12"},l.p.createElement("button",{type:"button",disabled:"TITIPAN"===a.keterangan,onClick:function(){return r.hapusdata(t)},className:"btn btn-danger mr-3"},l.p.createElement("i",{className:"fa fa-trash"}))))},footer:""}]},r}return Object(r.a)(t,[{key:"hapusdata",value:function(e){var a=this;l.t.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(t){if(t.isConfirmed){var n=Object(l.I)("trx_pemabayaran_pesanan");n.splice(e,1),Object(l.bb)("trx_pemabayaran_pesanan",n),a.setState({status:"berhasil"})}})}},{key:"simpanPembayaran",value:function(e){if(void 0===e.no_card&&"CASH"!==e.jenis&&"DEBET"!==e.jenis)return Object(l.v)("info","Nomor kartu tidak boleh kosong"),!1;if(void 0===e.nama_bank&&"CASH"!==e.jenis)return Object(l.v)("info","Nama Bank tidak boleh kosong"),!1;if(void 0===e.cash||"0"===e.cash)return Object(l.v)("info","Nominal tidak boleh kosong"),!1;var a={total_transaksi:e.harus_bayar_rp,sisa_bayar:e.nominal_kembali};Object(l.bb)("sisa_bayar_pesanan",a);var t=JSON.parse(localStorage.getItem("trx_pemabayaran_pesanan"))||[];if("CASH"===e.jenis||t.length){if("CASH"!==e.jenis){if(e.kembali.replace(/[^0-9]/g,"")-e.cash<0&&0!==parseInt(e.kembali))return Object(l.v)("info","Pembayaran tidak boleh lebih dari sisa"),!1;if(t.reduce(function(e,a){return e+a.nominal},0)>=e.harus_bayar_rp)return Object(l.v)("info","Pembayaran Sudah Cukup"),!1}}else if(e.kembali.replace(/[^0-9]/g,"")-e.cash<0)return Object(l.v)("info","Pembayaran tidak boleh lebih dari sisa"),!1;if(t.findIndex(function(e){return"CASH"===e.jenis})>=0){if(e.kembali.replace(/[^0-9]/g,"")-e.cash<0&&t.reduce(function(e,a){return e+a.nominal},0)>e.harus_bayar_rp)return Object(l.v)("info","Pembayaran Sudah Cukup"),!1;if(t.reduce(function(e,a){return e+a.nominal},0)>=e.harus_bayar_rp)return Object(l.v)("info","Pembayaran Sudah Cukup"),!1}if(Object(l.bb)("estimasi_pesanan",Object(l.C)(Object(l.S)(new Date(e.estimasi_pesanan)).format("YYYY-MM-DD"))),-1===t.findIndex(function(a){return a.jenis===e.jenis})){var n="";n="CASH"===e.jenis?"CASH":"TRANSFER"===e.jenis?e.no_card+" - "+e.nama_bank:e.nama_bank;var r={jenis:e.jenis,nominal:parseInt(e.cash||0),nama_bank:void 0!==e.nama_bank?e.nama_bank.toUpperCase():"-",fee:"CREDIT"===e.jenis&&e.fee||0,no_card:e.no_card||"-",keterangan:n.toUpperCase()};t.push(r),this.setState({masuk:!0}),Object(l.bb)("trx_pemabayaran_pesanan",t)}else{var o=Object(l.I)("trx_pemabayaran_pesanan");o=o.map(function(a){return a.jenis===e.jenis&&(a.nominal+=parseInt(e.cash)),a}),Object(l.bb)("trx_pemabayaran_pesanan",o),this.setState({status:!0})}}},{key:"render",value:function(){var e=this;return l.p.createElement(l.p.Fragment,null,l.p.createElement(E,{onSubmit:function(a){return e.simpanPembayaran(a)}}),l.p.createElement("hr",null),l.p.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},l.p.createElement(l.u,{keyField:"jenis",exportCsv:!1,data:Object(l.I)("trx_pemabayaran_pesanan")||[],columns:this.state.columns,empty:!0,pagination:"off",textEmpty:"Data Pembayaran Kosong"}),l.p.createElement("div",{className:"row"},l.p.createElement("div",{className:"col-6"}),l.p.createElement("div",{className:"col-6 text-right"},l.p.createElement("button",{className:"btn btn-primary",disabled:this.props.isLoadingPembayranTitipan,onClick:function(){return e.props.bayarSekarang()},type:"button"},this.props.isLoadingPembayranTitipan?l.p.createElement(l.p.Fragment,null,l.p.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Diproses"):"Bayar Sekarang"))),this.props.isLoadingPembayranTitipan?l.p.createElement(v.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}]),t}(l.c);j=Object(l.Z)({form:"ModalPembayaran",enableReinitialize:!0,validate:h.a})(j);var O=Object(l.w)(function(e){var a=Object(l.I)("data_barang_penjualan_tmp")||[],t="PENJUALAN";return a.forEach(function(e){t="-"===e.no_titip_group?"PENJUALAN":"TITIPAN"}),{status:t}})(j),N=t(2),S=Object(l.z)({prefix:"Rp. ",locale:"kr-KO"}),C=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1,bawa_sendiri:!1,dari_toko:!0,isChecked:!0,kategori_harga:!0},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(m.A)()),setTimeout(function(){Object(c.e)("para-system/key/kategori_harga").then(function(a){"harga_100%"===a.data.value?e.setState({kategori_harga:!0}):e.setState({kategori_harga:!1}),e.props.change("kadar",e.state.kategori_harga?0:100)})},200)}},{key:"hitungTotal",value:function(){this.props.change("sub_total",this.props.sub_total)}},{key:"chnageValue",value:function(e){"dari_toko"===e.target.value?(document.getElementById("kode_dari_toko").focus(),this.props.change("deskripsi_bawa_sediri",""),this.props.change("berat_bawa_sendiri",""),this.setState({dari_toko:!1,bawa_sendiri:!0,isChecked:!1})):(document.getElementById("deskripsi_bawa_sediri").focus(),this.props.change("kode_dari_toko",""),this.props.change("deskripsi_dari_toko",""),this.props.change("berat_dari_toko",""),this.setState({dari_toko:!0,bawa_sendiri:!1,isChecked:!0}))}},{key:"getBarcode",value:function(e){var a=this;Object(l.E)("barang/get/by-kode-barcode/"+e).then(function(e){e.data.forEach(function(e){a.props.change("deskripsi_dari_toko",e.nama_barang),a.props.change("berat_dari_toko",e.berat)})}).catch(function(e){404!==e.response.status&&Object(l.v)("info",e.response.data)})}},{key:"hideModal",value:function(){this.props.dispatch(Object(m.Ub)())}},{key:"setIndex",value:function(e){var a=this;document.getElementById("jenis_barang").focus(),Object(l.E)("group/get/by-kode-group/"+e).then(function(e){a.props.change("harga_pergram",e.data.harga)})}},{key:"render",value:function(){var e=this;return l.p.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},l.p.createElement("div",{className:"row"},l.p.createElement("div",{className:"col-2"},l.p.createElement(l.e,{name:"kode_group",label:"Kategori",onChange:function(a){return e.setIndex(a)},placeholder:"Pilih Kategori",options:this.props.DataGroup.filter(function(e){return void 0!==e.kode_group}).map(function(e){return{value:e.kode_group,name:e.kode_group}}),component:l.s})),l.p.createElement("div",{className:"col-4"},l.p.createElement(l.e,{id:"jenis_barang",name:"jenis_barang",component:l.r,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang"})),l.p.createElement("div",{className:"col-2"},l.p.createElement(l.e,{id:"betat",name:"berat",component:l.r,type:"text",onChange:this.hitungTotal(),normalize:l.f,label:"Berat",placeholder:"Masukan Berat"})),l.p.createElement("div",{className:this.state.kategori_harga?"col-lg-2":"col-lg-2 d-none"},l.p.createElement(l.e,{id:"kadar",name:"kadar",component:l.r,type:"text",onChange:this.hitungTotal(),normalize:l.l,label:"Kadar",placeholder:"Masukan Kadar"})),l.p.createElement("div",{className:this.state.kategori_harga?"col-lg-2":"col-lg-4"},l.p.createElement(l.e,Object.assign({name:"harga_pergram",component:l.r,type:"text",onChange:this.hitungTotal()},S,{label:"Harga / Gram",placeholder:"Masukan Harga / Gram"}))),l.p.createElement("div",{className:"col-6"},l.p.createElement(l.e,{id:"atribut",name:"atribut",component:l.r,type:"text",label:"Atribut",placeholder:"Masukan Atribut"})),l.p.createElement("div",{className:"col-2"},l.p.createElement(l.e,Object.assign({name:"harga_atribut",component:l.r,type:"text"},S,{label:"Harga Atribut",onChange:this.hitungTotal(),placeholder:"Masukan Harga"}))),l.p.createElement("div",{className:"col-2"},l.p.createElement(l.e,Object.assign({name:"ongkos",component:l.r,type:"text"},S,{onChange:this.hitungTotal(),label:"Ongkos",placeholder:"Masukan Ongkos"}))),l.p.createElement("div",{className:"col-2"},l.p.createElement(l.e,Object.assign({name:"sub_total",component:l.r,type:"text"},S,{readOnly:!0,label:"Sub Total",placeholder:"Masukan Sub Total"}))),l.p.createElement("div",{className:"col-12"},l.p.createElement(l.e,{name:"deskripsi_pesanan",component:l.r,type:"text",label:"Deskripsi",placeholder:"Masukan Deskripsi"})),l.p.createElement("div",{className:"col-2"},l.p.createElement("div",{className:"form-group"},l.p.createElement("label",null,"\xa0"),l.p.createElement("br",null),l.p.createElement("label",null,l.p.createElement(l.e,{name:"options_value",component:"input",onClick:function(a){return e.chnageValue(a)},type:"radio",checked:this.state.isChecked,value:"bawa_sendiri"})," ","Bawa Sendiri"))),l.p.createElement("div",{className:"col-7"},l.p.createElement(l.e,{id:"deskripsi_bawa_sediri",name:"deskripsi_bawa_sediri",component:l.r,type:"text",readOnly:this.state.bawa_sendiri,label:"Deskripsi",placeholder:"Masukan Deskripsi"})),l.p.createElement("div",{className:"col-3"},l.p.createElement(l.e,{readOnly:this.state.bawa_sendiri,name:"berat_bawa_sendiri",component:l.r,type:"text",normalize:l.f,label:"Berat",placeholder:"Masukan Berat"})),l.p.createElement("div",{className:"col-2"},l.p.createElement("div",{className:"form-group"},l.p.createElement("label",null,"\xa0"),l.p.createElement("br",null),l.p.createElement("label",null,l.p.createElement(l.e,{name:"options_value",component:"input",type:"radio",onClick:function(a){return e.chnageValue(a)},value:"dari_toko"})," ","Dari Toko"))),l.p.createElement("div",{className:"col-3"},l.p.createElement(l.e,{id:"kode_dari_toko",name:"kode_dari_toko",onChange:function(a){return e.getBarcode(a.target.value)},component:l.r,type:"text",label:"Kode Barcode",readOnly:this.state.dari_toko,placeholder:"Masukan Kode Barcode"})),l.p.createElement("div",{className:"col-4"},l.p.createElement(l.e,{name:"deskripsi_dari_toko",component:l.r,type:"text",label:"Deskripsi",readOnly:!0,placeholder:"Masukan Deskripsi"})),l.p.createElement("div",{className:"col-3"},l.p.createElement(l.e,{name:"berat_dari_toko",component:l.r,type:"text",normalize:l.f,label:"Berat",readOnly:!0,placeholder:"Masukan Berat"})),l.p.createElement("div",{className:"col-6"},l.p.createElement("button",{className:"btn btn-warning",type:"button",onClick:function(){return e.hideModal()}}," ","Close"," ")),l.p.createElement("div",{className:"col-6 text-right"},l.p.createElement("button",{className:"btn btn-primary"}," Add "))))}}]),t}(l.p.Component);C=Object(l.Z)({form:"ModalTambahBarangPesanan",enableReinitialize:!0})(C);var M=Object(l.w)(function(e){var a=Object(l.B)("ModalTambahBarangPesanan")(e,"kadar","berat","harga_pergram","ongkos","harga_atribut"),t=a.ongkos,n=a.kadar,r=a.harga_pergram,o=a.berat,s=a.harga_atribut,i=Object(N.w)(parseInt(r||0)*parseInt(n||0)/parseInt(100)*parseFloat(o||0)),c=parseInt(i||0)+parseInt(t||0)+parseInt(s||0);return{DataGroup:e.datamaster.GetDataGroup,sub_total:parseFloat(c)}})(C),x=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1,loadingreset:!1,FormModal:"",isLoadingPembayranTitipan:!1,isLoadingPembayran:!1,columns:[{dataField:"kode_kategori",text:"Kategori",footerAttrs:{colSpan:"5"},footer:"Total"},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"keterangan",text:"Nama Barang"},{dataField:"perkiraan_berat",text:"Perkiraan Berat"},{dataField:"perkiraan_kadar",text:"Perkiraan Kadar"},{dataField:"harga_gram",text:"Harga / Gram",formatter:function(e){return l.p.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"sub_total",text:"Sub Total",formatter:function(e){return l.p.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a,t){return l.p.createElement("div",{className:"row text-center"},l.p.createElement("div",{className:"col-12"},l.p.createElement("button",{type:"button",onClick:function(){return r.hapusdata(t,a)},className:"btn btn-danger mr-3"},l.p.createElement("i",{className:"fa fa-trash"}))))},footer:""}]},r.handleSubmit=r.handleSubmit.bind(Object(o.a)(r)),r}return Object(r.a)(t,[{key:"handleSubmit",value:function(e){var a=this,t={alamat_customer:e.alamat_customer||"-",jenis_pelanggan:e.jenis_pelanggan||"NONMEMBER",kode_customer:"NONMEMBER"===e.jenis_pelanggan?"NONMEMBER":e.kode_customer,kode_sales:e.kode_sales,nama_customer:e.nama_customer||"REGULER",no_hp:e.no_hp||"-"};Object(l.R)("data_customer_tmp",JSON.stringify(t)),this.setState({isLoadingDataCustomer:!0}),setTimeout(function(){a.setState({isLoadingDataCustomer:!1}),a.props.dispatch(Object(l.L)())},500)}},{key:"ShowModalCustomer",value:function(){this.setState({FormModal:"ShowModalCustomer"}),this.props.dispatch(Object(l.cb)())}},{key:"ShowModalBarang",value:function(){this.setState({FormModal:"ShowModalBarang"}),this.props.dispatch(Object(l.cb)())}},{key:"simpanBarang",value:function(e){var a=[],t={kode_kategori:e.kode_group,perkiraan_berat:parseFloat(e.berat),perkiraan_kadar:parseInt(e.kadar),harga_gram:parseInt(e.harga_pergram),attribut:e.atribut||"-",harga_atribut:parseInt(e.harga_atribut||0),ongkos:parseInt(e.ongkos||0),sub_total:parseInt(e.sub_total),keterangan:e.jenis_barang||"-",deskripsi:e.deskripsi_pesanan||"-",barang_contoh_internal:"dari_toko"===e.options_value,kode_barcode:e.kode_dari_toko||"-",deskripsi_contoh:"dari_toko"===e.options_value?e.deskripsi_dari_toko||"-":e.deskripsi_bawa_sediri||"-",berat_barang_contoh:"dari_toko"===e.options_value?e.berat_dari_toko||0:e.berat_bawa_sendiri||0};a.push(t),Object(l.bb)("data_barang_pesanan",a),this.setState({status:!0}),this.props.dispatch(Object(l.ab)("ModalTambahBarangPesanan")),this.props.dispatch(Object(l.L)())}},{key:"hapusdata",value:function(e,a){var t=this;l.t.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(a){if(a.isConfirmed){var n=Object(l.I)("data_barang_pesanan");n.splice(e,1),Object(l.bb)("data_barang_pesanan",n),t.setState({status:"berhasil"})}})}},{key:"bayarSekarang",value:function(){var e=this;this.setState({isLoadingPembayranTitipan:!0});var a=Object(l.I)("estimasi_pesanan"),t=Object(l.I)("trx_pemabayaran_pesanan"),n=[],r=0,o=0;t.forEach(function(e){"CASH"===e.jenis?(o=parseInt(e.nominal)<=Math.abs(parseInt(Object(l.I)("sisa_bayar_pesanan").sisa_bayar))?Math.abs(parseInt(Object(l.I)("sisa_bayar_pesanan").sisa_bayar)-parseInt(e.nominal)):parseInt(e.nominal),o=parseInt(e.nominal)>=Math.abs(parseInt(Object(l.I)("sisa_bayar_pesanan").total_transaksi))?parseInt(e.nominal)-Math.abs(parseInt(Object(l.I)("sisa_bayar_pesanan").sisa_bayar)):parseInt(e.nominal)):o=parseInt(e.nominal);var a={jenis:e.jenis,keterangan:e.keterangan,fee:"CREDIT"===e.jenis&&parseInt(e.fee)||0,jumlah_rp:o};r=e.nominal+r,n.push(a)});var s=JSON.parse(Object(l.Q)("data_customer_tmp")),i=Object(l.I)("data_barang_pesanan"),p=[],m=0;i.forEach(function(e,a){m=e.sub_total+m;var t={kode_kategori:e.kode_kategori,perkiraan_berat:parseFloat(e.perkiraan_berat),perkiraan_kadar:parseInt(e.perkiraan_kadar),harga_gram:parseInt(e.harga_gram),attribut:e.attribut||"-",kode_barcode:e.kode_barcode||"-",harga_atribut:parseInt(e.harga_atribut),ongkos:parseInt(e.ongkos||0),sub_total:parseInt(e.sub_total),keterangan:e.keterangan||"-",deskripsi:e.deskripsi||"-",barang_contoh_internal:e.barang_contoh_internal||!1,deskripsi_contoh:e.deskripsi_contoh||"-",berat_barang_contoh:parseFloat(e.berat_barang_contoh)};p.push(t)});var u={status:"PESANAN",estimasi_tanggal:a,kode_sales:s.kode_sales,kode_customer:"NONMEMBER"===s.jenis_pelanggan?s.jenis_pelanggan:s.kode_customer,nama_customer:s.nama_customer,alamat_customer:s.alamat_customer,no_hp:s.no_hp,detail_barang:p,pembayaran:n,total_harga:m,jumlah_bayar:r,sisa_bayar:Math.abs(parseInt(m)-parseInt(r))};Object(c.l)("pesanan/create",u).then(function(a){if(Object(l.bb)("data_barang_pesanan",[]),Object(l.v)("success","Transaksi Pesanan Berhasil"),0!==a.data.length){for(var t=[],n=0;n<2;n++){var r="";r+="========================================\n",r+="               NOTA PESANAN             \n",r+="========================================\nTanggal          : ".concat(a.data.tanggal,"\nNama Customer    : ").concat(a.data.nama_customer,"\nNo Hp            : ").concat(a.data.no_hp,"\n"),r+="========================================\n",r+="Keterangan\n",r+="========================================\n",a.data.detail_barang.forEach(function(e,t){r+="No Faktur Pesanan  : ".concat(a.data.no_pesanan,"\n"),r+="Dp                 : ".concat(a.data.dp.toLocaleString("kr-KO"),"\n"),r+="Estimasi Pesanan   : ".concat(a.data.estimasi_tanggal,"\n"),r+="========================================\n",r+="                               TTD      \n",r+="                                        \n",r+="                                        \n",r+="                                        \n",r+="                         (             )\n",r+="                                        \n",r+="                                        \n",r+="                                        \n"}),t.push(r)}document.getElementById("nota_pesanan").value=t.join(""),setTimeout(function(){e.TextFilenotapesanan()},100)}}).then(function(){e.props.dispatch(Object(l.L)())}).then(function(){e.props.dispatch(Object(l.ab)("ModalPembayaran"))}).then(function(){Object(l.bb)("data_barang_pesanan",[]),Object(l.bb)("trx_pemabayaran_pesanan",[]),Object(l.bb)("data_customer_tmp",[]),Object(l.bb)("estimasi_pesanan",[])}).then(function(){e.setState({isLoadingPembayranTitipan:!1})}).catch(function(a){e.setState({isLoadingPembayranTitipan:!1}),Object(l.v)("info",void 0===a.response?"Terjadi Kesalahan Saat Request Data, Silahkan Ulangi Lagi":a.response.data.message||"Terjadi Kesalahan Saat Request Data, Silahkan Ulangi Lagi")})}},{key:"showModalPembayaran",value:function(){var e=Object(l.I)("data_customer_tmp")||[],a=Object(l.I)("data_barang_pesanan")||[];0===e.length||0===a.length?Object(l.v)("info","Data Customer Atau Data Barang Belum Diisi !!!"):(this.setState({FormModal:"ShowModalPembayaran"}),this.props.dispatch(Object(l.cb)()))}},{key:"TextFilenotapesanan",value:function(){var e=document.createElement("a"),a=new Blob([document.getElementById("nota_pesanan").value],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(a),e.download="autoprint_pesanan.txt",document.body.appendChild(e),e.click()}},{key:"reset",value:function(){var e=this;this.setState({loadingreset:!0}),setTimeout(function(){Object(l.bb)("data_barang_pesanan",[]),Object(l.bb)("trx_pemabayaran_pesanan",[]),Object(l.bb)("data_customer_tmp",[]),Object(l.bb)("estimasi_pesanan",[]),e.setState({loadingreset:!1})},100)}},{key:"render",value:function(){var e=this,a={renderer:function(e){return l.p.createElement("div",{className:"container"},l.p.createElement("div",{className:"row"},l.p.createElement("div",{className:"col-12"},"Ongkos : ",e.ongkos.toLocaleString("kr-KO")," ",l.p.createElement("br",null),"Nama Atribut : ",e.attribut," ",l.p.createElement("br",null),"Harga Atribut : ",e.harga_atribut.toLocaleString("kr-KO")," ",l.p.createElement("br",null),"Betar Barang Contoh : ",e.berat_barang_contoh," ",l.p.createElement("br",null),"Deskripsi Contoh : ",e.deskripsi_contoh," ",l.p.createElement("br",null),"Deskripsi Pesanan : ",e.deskripsi," ",l.p.createElement("br",null))))},showExpandColumn:!0,expandByColumnOnly:!0};return l.p.createElement("div",null,l.p.createElement("ol",{className:"breadcrumb float-xl-right"},l.p.createElement("li",{className:"breadcrumb-item"},l.p.createElement(l.i,{to:"#"},"Pesanan")),l.p.createElement("li",{className:"breadcrumb-item active"},"Transaksi Pesanan")),l.p.createElement("h1",{className:"page-header"},"Transaksi Pesanan "),l.p.createElement("textarea",{style:{display:"none"},id:"nota_pesanan",rows:"100",cols:"100"}),l.p.createElement(l.m,null,l.p.createElement(l.o,null,"Transaksi Pesanan"),l.p.createElement("br",null),l.p.createElement(l.n,null,l.p.createElement(l.u,{keyField:"kode_barcode",exportCsv:!1,data:Object(l.I)("data_barang_pesanan")||[],tambahData:!0,btnText:"Data Customer",columns:this.state.columns,btnOptional:!0,namaCustomer:!0,jenisCustomer:!0,form:"Penjualan",btnTextOptional:"Data Barang",handleClick:function(){return e.ShowModalCustomer()},handleClickOptional:function(){return e.ShowModalBarang()},empty:!0,textEmpty:"Data Barang Kosong",expandRow:a,margin:!0}),l.p.createElement("div",{className:"row"},l.p.createElement("div",{className:"col-6 text-left"},l.p.createElement("button",{className:"btn btn-primary",onClick:function(){return e.showModalPembayaran()}}," ","Simpan Pesanan"," "),"\xa0",l.p.createElement("button",{className:"btn btn-warning",onClick:function(){return e.reset()}},this.state.loadingreset?l.p.createElement(l.p.Fragment,null,l.p.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Reset"):"Reset")))),l.p.createElement("br",null)),l.p.createElement(l.k,{size:"ShowModalCustomer"===this.state.FormModal?"xl":"ShowModalBarang"===this.state.FormModal?"xl":"l",title:"ShowModalCustomer"===this.state.FormModal?"Data Customer":"ShowModalBarang"===this.state.FormModal?"Tambah Barang Pesanan":"Form Pembayaran",content:"ShowModalCustomer"===this.state.FormModal?l.p.createElement(b,{isLoadingDataCustomer:this.state.isLoadingDataCustomer,onSubmit:function(a){return e.handleSubmit(a)}}):"ShowModalBarang"===this.state.FormModal?l.p.createElement(M,{isLoadingTopBar:this.props.isLoadingTopBar,hideModal:function(){return e.hideModa()},onSubmit:function(a){return e.simpanBarang(a)}}):l.p.createElement(O,{isLoadingPembayranTitipan:this.state.isLoadingPembayranTitipan,isLoadingPembayran:this.state.isLoadingPembayran,bayarSekarang:function(a){return e.bayarSekarang(a)},simpanPembayaran:function(a){return e.simpanPembayaran(a)}})}),this.props.isLoadingPembayranTitipan?l.p.createElement(v.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(l.p.Component);x=Object(l.Z)({form:"Pesanan",enableReinitialize:!0})(x);a.default=Object(l.w)()(x)},695:function(e,a,t){"use strict";a.a=function(e){var a={};return e.jenis||(a.jenis="Jenis Tidak Boleh Kosong"),a}},721:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kode_sales||(a.kode_sales="Kode Sales Harus Dipilih"),e.nama_customer||(a.nama_customer="Nama Customer Harus Diisi"),e.no_hp||(a.no_hp="No Hp Harus Diisi"),e.alamat||(a.alamat="Alamat Harus Diisi"),a}}}]);
//# sourceMappingURL=15.a62869c6.chunk.js.map