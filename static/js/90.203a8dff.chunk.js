(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1204:function(t,e,a){"use strict";a.r(e);var n=a(8),l=a(9),r=a(14),o=a(11),c=a(10),s=a(1),i=a.n(s),E=a(25),g=a(322),d=a(323),m=a(20),u=a(2),h=a(49),b=a(226),p=a(33),A=(a(53),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new p.default("l","mm",[297,210])),n=[],l=[],r=30;a.setFontSize(15),a.text("LAPORAN TRANSAKSI PEMBELIAN",14,15),a.setFontSize(20),a.text(Object(u.s)().nama_toko,200,15),a.setFontSize(8);var o=Object(u.s)().alamat_toko.length;o>20&&a.text(Object(u.s)().alamat_toko.slice(0,48),200,20),o>50&&a.text(Object(u.s)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN TRANSAKSI PEMBELIAN"}),a.text("PERIODE : ".concat(0===Object(u.u)("tgl_laporan").length?null:JSON.parse(Object(u.u)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(u.u)("tgl_laporan")).tgl_akhir),14,25);var c=0,s=0,i=0,E=0,g=0,d=0;t=[[{content:"NO BELI"},{content:"KODE SALES"},{content:"KODE MEMNBER"},{content:"NAMA MEMBER"},{content:"NAMA BARANG"},{content:"KONDISI"},{content:"KODE DEPT"},{content:"BERAT NOTA",styles:{halign:"right"}},{content:"BERAT",styles:{halign:"right"}},{content:"HARGA NOTA",styles:{halign:"right"}},{content:"HARGA BELI",styles:{halign:"right"}},{content:"HARGA RATA",styles:{halign:"right"}},{content:"STATUS",styles:{halign:"left"}}]],e.forEach(function(t,e){t.detail.forEach(function(t,e){var a=[t.no_faktur_beli,t.kode_sales,t.kode_member,t.nama_customer,t.nama_barang,t.kondisi,t.kode_dept,{content:Object(u.n)(t.berat_nota,3),styles:{halign:"right"}},{content:Object(u.n)(t.berat,3),styles:{halign:"right"}},{content:parseInt(t.harga_nota).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_rata).toLocaleString("kr-KO"),styles:{halign:"right"}},"CANC"===t.status_valid?"PEMBATALAN":"PEMBELIAN"];parseFloat(t.berat),parseFloat(t.berat_nota),parseFloat(t.harga_nota),parseFloat(t.harga),parseFloat(t.harga_rata),c+=parseFloat(t.berat),s+=parseFloat(t.berat_nota),i+=parseFloat(t.harga_nota),E+=parseFloat(t.harga),g+=parseFloat(t.harga_rata),n.push(a)}),d+=t.detail.length});var m=[{content:"Grand Total : ".concat(d," Transaksi"),colSpan:7,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(s.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(c.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(parseInt(i).toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(parseInt(E).toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(parseInt(g).toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];n.push(m);var h=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(u.u)("userdata")).user_id," / ").concat(Object(u.r)()),styles:{fontStyle:"italic",textColor:"#000"}}];n.push(h),a.autoTable({head:t,body:n,foot:l,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),r=a.autoTableEndPosY()+3,n=[],l=[];var b=a.internal.getNumberOfPages(),A=a.internal.pageSize.width,k=a.internal.pageSize.height;a.setFontSize(10);for(var f=1;f<b+1;f++){var y=A/2,O=k-10;a.setPage(f),a.text("".concat(f," of ").concat(b),y,O,{align:"center"})}var S=a.output("datauristring"),_=window.open();_.document.open(),_.document.write("<html><head><title>LAPORAN TRANSAKSI PEMBELIAN</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+S+"></embed></body></html>")}),k=a(52),f=a.n(k),y=a(50),O=a.n(y),S=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){var t=0,e=0,a=0,n=0,l=0,r=0;return this.props.data.forEach(function(o,c){o.detail.forEach(function(r,o){t+=parseFloat(r.berat),e+=parseFloat(r.berat_nota),a+=parseFloat(r.harga_nota),n+=parseFloat(r.harga),l+=parseFloat(r.harga_rata)}),r+=o.detail.length}),i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Transaksi Pembelian",sheet:"Laporan Transaksi Pembelian",buttonText:"Export Exel"}),i.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"12"}," Laporan Transaksi Pembelian ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"12"}," Periode ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"12"}," TOKO :  ",Object(u.s)().nama_toko," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"12"}," ALAMAT :  ",Object(u.s)().alamat_toko," ")),i.a.createElement("tr",null,i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO BELI"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE SALES"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE MEMBER"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA MEMBER"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KONDISI"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE DEPT"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT NOTA"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA NOTA"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA BELI"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA RATA"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"STATUS"))),i.a.createElement("tbody",null,this.props.data.map(function(t,e){return i.a.createElement(i.a.Fragment,null,t.detail.map(function(t,e){return i.a.createElement("tr",null,i.a.createElement("td",null,t.no_faktur_beli),i.a.createElement("td",null,t.kode_sales),i.a.createElement("td",null,t.kode_member),i.a.createElement("td",null,t.nama_customer),i.a.createElement("td",null,t.nama_barang),i.a.createElement("td",null,t.kondisi),i.a.createElement("td",null,t.kode_dept),i.a.createElement("td",{style:{textAlign:"right"}},Object(u.n)(t.berat_nota,3)),i.a.createElement("td",{style:{textAlign:"right"}},Object(u.n)(t.berat,3)),i.a.createElement("td",{style:{textAlign:"right"}},t.harga_nota.toLocaleString("kr-KO")),i.a.createElement("td",{style:{textAlign:"right"}},t.harga.toLocaleString("kr-KO")),i.a.createElement("td",{style:{textAlign:"right"}},t.harga_rata.toLocaleString("kr-KO")),i.a.createElement("td",null,"CANC"===t.status_valid?"PEMBATALAN":"PEMBELIAN"))}))})),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"7",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total : ",r," Transaksi"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},Object(u.n)(e,3)),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},Object(u.n)(t,3)),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},a.toLocaleString("kr-KO")),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},n.toLocaleString("kr-KO")),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},l.toLocaleString("kr-KO"))))))}}]),a}(s.Component),_=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={date:new Date,type:"SEMUA"},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.change("type","SELISIH")}},{key:"exportPdf",value:function(){A(this.props.LaporanTransaksiPembelian)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this,e=[];this.props.LaporanTransaksiPembelian.forEach(function(t){t.detail.forEach(function(t){e.push(t),t.berat_nota,t.berat,t.ongkos,t.harga,t.harga_nota,t.harga_gram})});var a=[{dataField:"no_faktur_beli",text:"No FB",footerAttrs:{colSpan:"5"},footer:function(t,a,n,l){return i.a.createElement("div",null,"Total Transaksi : ",e.length," ")}},{dataField:"kode_sales",text:"Kode Sales"},{dataField:"kode_member",text:"Kode Member"},{dataField:"nama_customer",text:"Nama Member"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"kondisi",text:"Kondisi",footer:""},{dataField:"berat_nota",text:"Berat Nota",headerClasses:"text-right",formatter:function(t){return i.a.createElement("div",{className:"text-right"}," ",Object(u.n)(t,3)," ")}},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:function(t){return i.a.createElement("div",{className:"text-right"}," ",Object(u.n)(t,3)," ")}},{dataField:"harga_nota",text:"Harga Nota",headerClasses:"text-right",formatter:function(t){return i.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga",text:"Harga",headerClasses:"text-right",style:function(t,e,a,n){return"CANC"===e.status_valid?{backgroundColor:"#F6A6AD"}:{backgroundColor:"#c8e6c9"}},formatter:function(t){return i.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"status_valid",text:"Status",headerClasses:"text-left",style:function(t,e,a,n){return"CANC"===e.status_valid?{backgroundColor:"#F6A6AD"}:{backgroundColor:"#c8e6c9"}},formatter:function(t){return"CANC"===t?"BATAL PEMBELIAN":"PEMBELIAN"}}];return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(g.a,{name:"tgl_awal",component:m.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(g.a,{name:"tgl_akhir",component:m.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"text-right"},i.a.createElement("label",null,"\xa0"),i.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(h.a,{keyField:"kode_barcode",data:this.props.export?e:[],columns:a,empty:!0,textEmpty:"Data Laporan Transaksi Pembelian Kosong"})),i.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("button",{onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement(S,{data:this.props.LaporanTransaksiPembelian}))))),this.props.isLoading?i.a.createElement(f.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);_=Object(d.a)({form:"HeadFormLaporanPembelianBarangHistory",enableReinitialize:!0,validate:b.a})(_);e.default=Object(E.b)(function(t){return{initialValues:{tgl_awal:Object(u.q)(),tgl_akhir:Object(u.q)()}}})(_)}}]);
//# sourceMappingURL=90.203a8dff.chunk.js.map