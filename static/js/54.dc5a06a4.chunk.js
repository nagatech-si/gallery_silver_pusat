(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1279:function(e,t,a){"use strict";a.r(t);var n=a(8),o=a(9),r=a(14),i=a(11),s=a(10),u=a(1),p=a.n(u),c=a(32),d=a(45),l=a(6),m=a(25),h=a(27),b=a.n(h),g=a(19),f=a(16),k=a(34),j=a(2),E=a(49),O=a(322),G=a(323),_=a(103),v=a(20),D=function(e,t){var a={};return e.kode_group||(a.kode_group="Kode Group Tidak Boleh Kosong"),e.nama_group||(a.nama_group="Nama Group Tidak Boleh Kosong"),e.harga||(a.harga="Harga Tidak Boleh Kosong"),e.persentase||(a.persentase="Persentase Tidak Boleh Kosong"),a},y=a(52),M=a.n(y),S=Object(_.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),x=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={aktif:!1},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.isEdit?document.getElementById("nama_group").focus():document.getElementById("kode_group").focus()},100)}},{key:"render",value:function(){var e=this;return p.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},this.props.isEdit?p.a.createElement(p.a.Fragment,null,p.a.createElement(O.a,{name:"id",component:v.b,type:"hidden",readOnly:this.props.isEdit})):null,p.a.createElement(O.a,{tabIndex:"1",id:"kode_group",name:"kode_group",component:v.e,type:"text",label:" Kode Group",readOnly:this.props.isEdit,placeholder:"Masukan Kode Group"}),p.a.createElement(O.a,{tabIndex:"2",id:"nama_group",name:"nama_group",component:v.e,type:"text",label:" Nama Group",placeholder:"Masukan Nama Group"}),p.a.createElement(O.a,Object.assign({tabIndex:"3",name:"harga",component:v.e,type:"text",label:"Harga"},S,{placeholder:"Masukan Harga"})),p.a.createElement(O.a,{tabIndex:"4",name:"jenis_group",component:v.f,options:this.props.GetDataJenisGroup.map(function(e){return{value:e.jenis_group,name:e.jenis_group}}),type:"text",label:"Jenis Group",placeholder:"Masukan Harga"}),p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-12 text-right"},p.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.dispatch(Object(l.Ub)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",p.a.createElement("button",{tabIndex:"6",className:this.state.aktif?"btn btn-success":"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?p.a.createElement(p.a.Fragment,null,p.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?p.a.createElement(M.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(u.Component);x=Object(G.a)({form:"ModalFormDataGroup",enableReinitialize:!0,validate:D})(x);var w=Object(m.b)(function(e){if(null!==e.datamaster.ShowModalGroup)return{GetDataJenisGroup:e.datamaster.GetDataJenisGroup,initialValues:{id:e.datamaster.ShowModalGroup.id,kode_group:e.datamaster.ShowModalGroup.kode_group,nama_group:e.datamaster.ShowModalGroup.nama_group,harga:e.datamaster.ShowModalGroup.harga,kadar_pesanan:e.datamaster.ShowModalGroup.persentase,kadar:e.datamaster.ShowModalGroup.kadar,jenis_group:e.datamaster.ShowModalGroup.jenis_group}}},null)(x),N=a(102),K=function(e,t,a){b.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Group "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(n){n.isConfirmed&&Object(f.b)("group/delete/by-kode-group/"+t).then(function(){Object(g.d)("Data Berhasil Di Hapus").then(function(){return a(Object(l.A)())})}).then(function(){return a(Object(j.c)("group/delete/by-kode-group",{kode_group:e}))}).catch(function(e){var t;console.log(e),Object(g.e)("error",null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:t.data)})})},B=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kode_group",text:"Kode Group",sort:!0},{dataField:"nama_group",text:"Nama Group"},{dataField:"harga",text:"Harga",headerClasses:"text-right",formatter:function(e){return p.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e.toLocaleString("kr-KO")," ")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,t){var a={id:t._id,kode_group:t.kode_group,nama_group:t.nama_group,persentase:t.persentase,harga:t.harga,kadar:t.kadar,jenis_group:t.jenis_group};return p.a.createElement("div",{className:"row text-center"},p.a.createElement("div",{className:"col-12"},p.a.createElement("button",{onClick:function(){return o.formEditDataGroup(a)},className:"btn btn-primary mr-3"},p.a.createElement("i",{className:"fa fa-edit"})),p.a.createElement("button",{onClick:function(){return K(t.kode_group,t._id,o.props.dispatch)},className:"btn btn-danger"},p.a.createElement("i",{className:"fa fa-trash"}))))}}]},o.handleSubmit=o.handleSubmit.bind(Object(r.a)(o)),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(l.A)()),this.props.dispatch(Object(l.Db)()),this.props.dispatch(Object(l.Ob)())}},{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={nama_group:e.nama_group,harga:e.harga,kadar:100,persentase:100,jenis_group:e.jenis_group},n={kode_group:e.kode_group,nama_group:e.nama_group,harga:e.harga,kadar:100,persentase:100,jenis_group:e.jenis_group};this.state.isEdit?Object(f.q)("group/edit/by-kode-group/"+e.id,a).then(function(){t.props.dispatch(Object(l.Ub)())}).then(function(){Object(g.e)("success","Data Berhasil Diupdate")}).then(function(){t.props.dispatch(Object(l.A)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(k.d)("ModalFormDataGroup"))}).then(function(){return t.props.dispatch(Object(j.d)("group/edit/by-kode-group",n))}).catch(function(e){Object(g.e)("info",void 0===e.response?"Terjadi Kesalahan Saat Megirim Data ":e.response.data),t.setState({isLoading:!1})}):Object(f.k)("group/add",n).then(function(){t.props.dispatch(Object(l.Ub)())}).then(function(){Object(g.e)("success","Data Berhasil Disimpan")}).then(function(){t.props.dispatch(Object(l.A)())}).then(function(){t.props.dispatch(Object(k.d)("ModalFormDataGroup"))}).then(function(){t.setState({isLoading:!1})}).then(function(){return t.props.dispatch(Object(j.e)("group/add",n))}).catch(function(e){return Object(j.b)(e,"group/reactive/by-kode-group",n,t.props.dispatch,Object(l.A)(),Object(l.Ub)(),"ModalFormDataGroup").then(function(){t.setState({isLoading:!1})}).then(function(){return t.props.dispatch(Object(j.e)("group/add",n))})})}},{key:"formEditDataGroup",value:function(e){this.props.dispatch(Object(l.Zb)()),this.props.dispatch(Object(l.ib)(e)),this.setState({isEdit:!0})}},{key:"ShowModalGroup",value:function(){this.props.dispatch(Object(l.Zb)()),this.props.dispatch(Object(l.ib)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return p.a.createElement("div",null,p.a.createElement("ol",{className:"breadcrumb float-xl-right"},p.a.createElement("li",{className:"breadcrumb-item"},p.a.createElement(c.b,{to:"#"},"Data Master")),p.a.createElement("li",{className:"breadcrumb-item active"},"Master Group")),p.a.createElement("h1",{className:"page-header"},"Master Group "),p.a.createElement(d.a,null,p.a.createElement(d.c,null,"Master Group"),p.a.createElement("br",null),p.a.createElement(d.b,null,p.a.createElement(E.a,{keyField:"kode_group",tambahData:!0,handleClick:function(){return e.ShowModalGroup()},exportCsv:!0,data:this.props.DataGroup,columns:this.state.columns,empty:this.props.DataGroup,textEmpty:"Data Group Kosong"})),p.a.createElement("br",null),p.a.createElement(N.a,{size:"P",title:this.state.isEdit?"Edit Data Data Group":"Tambah Data Data Group",content:p.a.createElement(w,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(t){return e.handleSubmit(t)}})})))}}]),a}(p.a.Component);t.default=Object(m.b)(function(e){return{DataGroup:e.datamaster.GetDataGroup,hideModal:e.datamaster.modalDialog}},null)(B)}}]);
//# sourceMappingURL=54.dc5a06a4.chunk.js.map