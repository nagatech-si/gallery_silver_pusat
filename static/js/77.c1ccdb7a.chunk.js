(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1249:function(t,e,a){"use strict";a.r(e);var n=a(8),l=a(9),r=a(15),o=a(11),c=a(10),s=a(0),i=a.n(s),u=a(31),m=a(4),g=a(24),E=a(56),h=a(18),d=a(30),b=a(320),p=a(321),f=a(20),A=a(52),O=a(68),S=a(47),_=a.n(S),L=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){var t=0,e=0,a=0;return this.props.data.forEach(function(n,l){n.detail.forEach(function(n,l){t+=n.berat_emas,e+=n.berat_bruto,a+=n.jumlah_hutang})}),i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Hutang Lunas",sheet:"Laporan Hutang Lunas",buttonText:"Export Exel"}),i.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"14"}," Laporan Transaksi Hutang Lunas ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"14"}," Periode  ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"14"}," ",0===Object(m.n)("tgl_laporan").length?null:JSON.parse(Object(m.n)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(m.n)("tgl_laporan")).tgl_akhir," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"14"}," TOKO :  ",Object(m.l)().nama_toko," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"14"}," ALAMAT :  ",Object(m.l)().alamat_toko," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"14"})),i.a.createElement("tr",null,i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TANGGAL SYSTEM"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TANGGAL LUNAS"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TANGGAL JTH TEMPO"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE SALES"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA CUSTOMER"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO HP"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"ALAMAT CUSTOMER"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT EMAS"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT+PLASTIK"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"JUMLAH HUTANG"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"LAMA PINJAM"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BUNGA"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TOTAL HUTANG"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TOTAL BAYAR"))),i.a.createElement("tbody",null,this.props.data.map(function(t,e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"14",style:{textAlign:"left"}},"No Faktur : ",t._id.no_faktur_hutang," ")),t.detail.map(function(t,e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",null," ",t.tgl_system),i.a.createElement("td",null," ",t.tgl_lunas),i.a.createElement("td",null," ",t.tgl_tempo),i.a.createElement("td",null," ",t.kode_sales),i.a.createElement("td",null," ",t.nama_customer),i.a.createElement("td",null," ",t.no_hp),i.a.createElement("td",null," ",t.alamat_customer),i.a.createElement("td",{style:{textAlign:"right"}},"\xa0",Object(m.g)(t.berat_emas,3)),i.a.createElement("td",{style:{textAlign:"right"}},"\xa0",Object(m.g)(t.berat_bruto,3)),i.a.createElement("td",{style:{textAlign:"right"}}," \xa0",t.jumlah_hutang.toLocaleString("kr-KO")),i.a.createElement("td",{style:{textAlign:"right"}}," ",t.lama_pinjam),i.a.createElement("td",{style:{textAlign:"right"}}," ",t.bunga),i.a.createElement("td",{style:{textAlign:"right"}}," \xa0",t.total_hutang.toLocaleString("kr-KO")),i.a.createElement("td",{style:{textAlign:"right"}}," \xa0",t.total_bayar.toLocaleString("kr-KO"))))}))})),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"},colSpan:"7"}," Grand Total "),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",Object(m.g)(t,3)," "),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",Object(m.g)(e,3)),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",a.toLocaleString("kr-KO")),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"},colSpan:"4"})))))}}]),a}(s.Component),y=a(33),k=(a(53),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=new y.default("l","mm",[297,210]),n=[],l=30,r=0,o=0,c=0;a.setFontSize(15),a.text("LAPORAN  HUTANG LUNAS",14,15),a.setFontSize(20),a.text(Object(m.l)().nama_toko,200,15),a.setFontSize(8);var s=Object(m.l)().alamat_toko.length;s>20&&a.text(Object(m.l)().alamat_toko.slice(0,48),200,20),s>50&&a.text(Object(m.l)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN  HUTANG LUNAS"}),a.text("PERIODE : ".concat(0===Object(m.n)("tgl_laporan").length?null:JSON.parse(Object(m.n)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.n)("tgl_laporan")).tgl_akhir),14,25),t=[[{content:"TANGGAL SYSTEM"},{content:"TANGGAL LUNAS"},{content:"TANGGAL JTH TEMPO"},{content:"KODE SALES"},{content:"NAMA CUSTOMER"},{content:"NO HP"},{content:"ALAMAT CUSTOMER"},{content:"BERAT EMAS",styles:{halign:"right"}},{content:"BERAT+PLASTIK",styles:{halign:"right"}},{content:"JUMLAH HUTANG",styles:{halign:"right"}},{content:"LAMA PINJAM",styles:{halign:"right"}},{content:"BUNGA",styles:{halign:"right"}},{content:"TOTAL HUTANG",styles:{halign:"right"}},{content:"TOTAL BAYAR",styles:{halign:"right"}}]],e.forEach(function(t,e){var a=[{content:"NO FAKTUR : ".concat(t._id.no_faktur_hutang),colSpan:13}];n.push(a),t.detail.forEach(function(t,e){var a=[t.tgl_system,t.tgl_lunas,t.tgl_tempo,t.kode_sales,t.nama_customer,t.no_hp,t.alamat_customer,{content:Object(m.g)(t.berat_emas,3),styles:{halign:"right"}},{content:Object(m.g)(t.berat_bruto,3),styles:{halign:"right"}},{content:parseInt(t.jumlah_hutang).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:t.lama_pinjam,styles:{halign:"right"}},{content:t.bunga+"%",styles:{halign:"right"}},{content:parseInt(t.total_hutang).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.total_bayar).toLocaleString("kr-KO"),styles:{halign:"right"}}];t.berat_emas,t.berat_bruto,t.jumlah_hutang,r+=t.berat_emas,o+=t.berat_bruto,c+=t.jumlah_hutang,n.push(a)}),t.detail.length,t.detail.length});var i=[{content:"Grand total",colSpan:7,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(r.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(o.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(c.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"",colSpan:"4",styles:{fillColor:"#E8E5E5",textColor:"#000"}}];n.push(i);var u=[{colSpan:3,content:"Printed By ".concat(JSON.parse(Object(m.n)("userdata")).user_id," / ").concat(Object(m.k)()),styles:{fontStyle:"italic",textColor:"#000"}}];n.push(u),a.autoTable({head:t,body:n,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),l=a.autoTableEndPosY()+3,n=[];var g=a.internal.getNumberOfPages(),E=a.internal.pageSize.width,h=a.internal.pageSize.height;a.setFontSize(10);for(var d=1;d<g+1;d++){var b=E/2,p=h-10;a.setPage(d),a.text("".concat(d," of ").concat(g),b,p,{align:"center"})}a.save("LAPORAN HUTANG LUNAS.pdf")}),N=a(62),x=a.n(N),v=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={date:new Date},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"exportPdf",value:function(){k(this.props.LaporanHutang)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this,e={renderer:function(t){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},"Kode Sales : ",t.kode_sales," ",i.a.createElement("br",null),"Nama Customer : ",t.nama_customer," ",i.a.createElement("br",null),"No Hp : ",t.no_hp," ",i.a.createElement("br",null),"Alamat Customer : ",t.alamat_customer," ",i.a.createElement("br",null))))},showExpandColumn:!0,expandByColumnOnly:!0},a=[];this.props.LaporanHutang.forEach(function(t,e){t.detail.forEach(function(t,e){a.push(t)})});var n=[{dataField:"no_faktur_hutang",text:"No Faktur Hutang",footerAttrs:{colSpan:"2"},footer:function(t,e,n,l){return i.a.createElement("div",null,"Total Hutang Lunas : ",a.length," ")}},{dataField:"tgl_lunas",text:"Tanggal Lunas"},{dataField:"berat_emas",text:"Berat",headerClasses:"text-right",formatter:function(t){return i.a.createElement("div",{className:"text-right"}," ",t.toFixed(3))},footer:function(t){return i.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toFixed(3)," ")}},{dataField:"jumlah_hutang",text:"Jumlah Hutang",headerClasses:"text-right",formatter:function(t){return i.a.createElement("div",{className:"text-right"}," ",parseInt(t).toLocaleString("kr-KO"))},footer:function(t){return i.a.createElement("div",{className:"text-right"}," ",parseInt(t.reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO")," ")}},{dataField:"lama_pinjam",text:"Lama Pinjam",headerClasses:"text-right",formatter:function(t){return i.a.createElement("div",{className:"text-right"}," ",t)},footer:""},{dataField:"total_hutang",text:"Total Hutang",headerClasses:"text-right",formatter:function(t){return i.a.createElement("div",{className:"text-right"}," ",parseInt(t).toLocaleString("kr-KO"))},footer:function(t){return i.a.createElement("div",{className:"text-right"}," ",parseInt(t.reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO")," ")}}];return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tgl_awal",component:f.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tgl_akhir",component:f.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"text-right"},i.a.createElement("label",null,"\xa0"),i.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(A.a,{keyField:"no_hp",data:this.props.export?a:[],columns:n,empty:!0,textEmpty:"Data Laporan Hutang Kosong",expandRow:e})),i.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("button",{type:"button",onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement(L,{data:this.props.LaporanHutang}))))),this.props.isLoading?i.a.createElement(x.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);v=Object(p.a)({form:"HeadFormHutangLunas",enableReinitialize:!0,validate:O.a})(v);var j=Object(d.b)(function(t){return{initialValues:{tgl_awal:Object(m.j)(),tgl_akhir:Object(m.j)()}}})(v),T=a(116),C=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={isLoading:!1,export:!1,dataHutang:[],LaporanHutang:[]},l.handleSubmit=l.handleSubmit.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(t){var e=this;this.setState({isLoading:!0});var a={tgl_awal:Object(m.f)(T(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(m.f)(T(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};Object(h.k)("hutang/get/reportlunas",a).then(function(t){0===t.data.length?(Object(g.e)("info","Data Yang Anda Cari Tidak Ada"),e.setState({isLoading:!1,export:!1})):(Object(g.e)("success","Laporan Hutang Lunas Tersedia"),Object(m.o)("tgl_laporan",JSON.stringify(a)),e.setState({export:!0,isLoading:!1,LaporanHutang:t.data}))}).catch(function(t){e.setState({export:!1,isLoading:!1}),Object(g.e)("info","Data Yang Anda Cari Tidak Ada")})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(u.b,{to:"#"},"Laporan")),i.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Hutang Lunas")),i.a.createElement("h1",{className:"page-header"},"Laporan Hutang Lunas"),i.a.createElement(E.a,null,i.a.createElement(E.c,null,"Laporan Hutang Lunas"),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement(j,{export:this.state.export,isLoading:this.state.isLoading,LaporanHutang:this.state.LaporanHutang,onSubmit:function(e){return t.handleSubmit(e)}})))),i.a.createElement("br",null)))}}]),a}(i.a.Component);e.default=C}}]);
//# sourceMappingURL=77.c1ccdb7a.chunk.js.map