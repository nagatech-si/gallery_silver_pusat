(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1283:function(a,e,t){"use strict";t.r(e);var n=t(8),i=t(9),o=t(14),r=t(11),d=t(10),s=t(1),l=t.n(s),c=t(32),b=t(45),u=t(6),m=t(25),k=t(27),p=t.n(k),h=t(19),f=t(16),g=t(34),_=t(2),B=t(49),E=t(322),O=t(323),j=t(20),v=function(a,e){var t={};return a.kode_gudang||(t.kode_gudang="Kode Gudang Tidak Boleh Kosong"),a.kode_baki||(t.kode_baki="Kode Baki Tidak Boleh Kosong"),a.nama_baki||(t.nama_baki="Nam Baki Tidak Boleh Kosong"),a.berat_baki||(t.berat_baki="Berat Baki Tidak Boleh Kosong"),a.berat_bandrol||(t.berat_bandrol="Berat Bandrol Tidak Boleh Kosong"),t},y=t(52),S=t.n(y),x=t(58),M=function(a){Object(r.a)(t,a);var e=Object(d.a)(t);function t(a){var i;return Object(n.a)(this,t),(i=e.call(this,a)).state={aktif:!1,listgroup:[],parameter_bandrol:"2301"},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var a=this;Object(f.d)("gudang/get/all/master").then(function(e){a.setState({listgroup:e.data})}).catch(function(a){console.log(a)}),setTimeout(function(){a.props.isEdit?document.getElementById("nama_baki").focus():document.getElementById("kode_gudang").focus()},100),Object(f.d)("parabandrol/get/all").then(function(e){0===e.data.length?a.setState({parameter_bandrol:0}):a.setState({parameter_bandrol:e.data[0].berat_bandrol||0})}).then(function(){return a.props.change("berat_bandrol",a.state.parameter_bandrol)})}},{key:"setFocus",value:function(){setTimeout(function(){document.getElementById("kode_baki").focus()},100)}},{key:"render",value:function(){var a=this;return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},this.props.isEdit?l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{name:"id",component:j.b,type:"hidden",label:"Kode Baki",readOnly:this.props.isEdit})):null,l.a.createElement("div",{className:"form-group"},l.a.createElement(E.a,{tabIndex:"1",id:"kode_gudang",label:"Kode Gudang",name:"kode_gudang",options:this.state.listgroup.filter(function(a){return void 0!==a.kode_gudang}).map(function(a){return{value:a.kode_gudang,name:a.kode_gudang}}),value:this.props.kode_group,disabled:this.props.isEdit,onChange:function(){return a.setFocus()},placeholder:"Silahkan Pilih Kode Gudang",component:j.f})),l.a.createElement(E.a,{tabIndex:"2",id:"kode_baki",name:"kode_baki",component:j.e,type:"text",label:"Kode Baki",readOnly:this.props.isEdit,placeholder:"Masukan Kode Baki"}),l.a.createElement(E.a,{tabIndex:"3",id:"nama_baki",name:"nama_baki",component:j.e,type:"text",label:"Nama Baki",placeholder:"Masukan Nama Baki"}),l.a.createElement(E.a,{tabIndex:"4",name:"berat_baki",component:j.e,normalize:x.a,type:"text",label:"Berat Baki",placeholder:"Masukan Berat Baki"}),l.a.createElement(E.a,{tabIndex:"5",name:"berat_bandrol",component:j.e,type:"text",normalize:x.a,label:"Berat Bandrol",onBlur:function(){return a.setState({aktif:!0})},placeholder:"Masukan Berat Bandrol"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-right"},l.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(u.Ub)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",l.a.createElement("button",{tabIndex:"6",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?l.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(s.Component);M=Object(O.a)({form:"ModalDataBaki",enableReinitialize:!0,validate:v})(M);var D=Object(m.b)(function(a){if(null!==a.datamaster.ShowModalBaki)return{initialValues:{id:a.datamaster.ShowModalBaki.id,kode_gudang:a.datamaster.ShowModalBaki.kode_gudang,kode_baki:a.datamaster.ShowModalBaki.kode_baki,nama_baki:a.datamaster.ShowModalBaki.nama_baki,berat_baki:a.datamaster.ShowModalBaki.berat_baki,berat_bandrol:a.datamaster.ShowModalBaki.berat_bandrol}}},null)(M),w=t(102),N=function(a,e,t){p.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Baki "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(a){a.isConfirmed&&Object(f.b)("baki/delete/by-kode-baki/"+e).then(function(){Object(h.d)("Data Berhasil Di Hapus").then(function(){return t(Object(u.yb)())})})}).catch(function(a){Object(h.e)("error",a.response.data)})},K=function(a){Object(r.a)(t,a);var e=Object(d.a)(t);function t(a){var i;return Object(n.a)(this,t),(i=e.call(this,a)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_gudang",text:"Kode Gudang ",sort:!0},{dataField:"kode_baki",text:"Kode Baki"},{dataField:"nama_baki",text:"Nama Baki"},{dataField:"berat_baki",text:"Berat Baki",formatter:function(a){return a.toFixed(3)}},{dataField:"berat_bandrol",text:"Berat Bandrol",formatter:function(a){return a.toFixed(3)}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e){var t={id:e._id,kode_gudang:e.kode_gudang,kode_baki:e.kode_baki,nama_baki:e.nama_baki,berat_baki:e.berat_baki.toFixed(3),berat_bandrol:e.berat_bandrol.toFixed(3)};return l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},"TITIPJUAL"===e.kode_baki?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){return i.formEditBaki(t)},className:"btn btn-primary mr-3"},l.a.createElement("i",{className:"fa fa-edit"})),l.a.createElement("button",{onClick:function(){return N(e.kode_baki,e._id,i.props.dispatch)},className:"btn btn-danger"},l.a.createElement("i",{className:"fa fa-trash"})))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(o.a)(i)),i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.yb)())}},{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0});var t={nama_baki:a.nama_baki,berat_bandrol:a.berat_bandrol,berat_baki:a.berat_baki},n={kode_baki:a.kode_baki,nama_baki:a.nama_baki,kode_gudang:a.kode_gudang,berat_bandrol:a.berat_bandrol,berat_baki:a.berat_baki};this.state.isEdit?Object(f.q)("baki/edit/by-kode-baki/"+a.id,t).then(function(){e.props.dispatch(Object(u.Ub)())}).then(function(){Object(h.e)("success","Data Berhasil Disimpan")}).then(function(){e.props.dispatch(Object(u.yb)())}).then(function(){e.setState({isLoading:!1})}).then(function(){e.props.dispatch(Object(g.d)("ModalDataBaki"))}).catch(function(a){Object(h.e)("info",void 0===a.response?"Terjadi Kesalahan Saat Megirim Data ":a.response.data),e.setState({isLoading:!1})}):Object(f.k)("baki/add",n).then(function(){e.props.dispatch(Object(u.Ub)())}).then(function(){Object(h.e)("success","Data Berhasil Disimpan")}).then(function(){e.props.dispatch(Object(u.yb)())}).then(function(){e.props.dispatch(Object(g.d)("ModalDataBaki"))}).then(function(){e.setState({isLoading:!1})}).catch(function(a){return Object(_.b)(a,"baki/reactive/by-kode-baki/",n,e.props.dispatch,Object(u.yb)(),Object(u.Ub)(),"ModalDataBaki").then(function(){e.setState({isLoading:!1})})})}},{key:"formEditBaki",value:function(a){this.props.dispatch(Object(u.Zb)()),this.props.dispatch(Object(u.eb)(a)),this.setState({isEdit:!0})}},{key:"ShowModalBaki",value:function(){this.props.dispatch(Object(u.Zb)()),this.props.dispatch(Object(u.eb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var a=this;return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(c.b,{to:"#"},"Data Master")),l.a.createElement("li",{className:"breadcrumb-item active"},"Master Baki")),l.a.createElement("h1",{className:"page-header"},"Master Baki "),l.a.createElement(b.a,null,l.a.createElement(b.c,null,"Master Baki"),l.a.createElement("br",null),l.a.createElement(b.b,null,l.a.createElement(B.a,{keyField:"kode_baki",tambahData:!0,handleClick:function(){return a.ShowModalBaki()},exportCsv:!0,data:this.props.DataBaki,columns:this.state.columns,empty:this.props.DataBaki,textEmpty:"Data Baki Kosong"})),l.a.createElement("br",null),l.a.createElement(w.a,{size:"P",title:this.state.isEdit?"Edit Data Baki":"Tambah Data Baki",content:l.a.createElement(D,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(e){return a.handleSubmit(e)}})})))}}]),t}(l.a.Component);e.default=Object(m.b)(function(a){return{DataBaki:a.datamaster.getDataBaki,hideModal:a.datamaster.modalDialog}},null)(K)}}]);
//# sourceMappingURL=53.967d93b5.chunk.js.map