(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1276:function(e,a,t){"use strict";t.r(a);var n=t(8),o=t(9),r=t(15),i=t(11),s=t(10),c=t(0),u=t.n(c),p=t(31),l=t(57),d=t(7),m=t(30),h=t(27),b=t.n(h),g=t(23),f=t(18),E=t(45),k=t(4),O=t(53),j=t(320),G=t(321),v=t(101),D=t(20),_=function(e,a){var t={};return e.kode_group||(t.kode_group="Kode Group Tidak Boleh Kosong"),e.nama_group||(t.nama_group="Nama Group Tidak Boleh Kosong"),e.harga||(t.harga="Harga Tidak Boleh Kosong"),e.persentase||(t.persentase="Persentase Tidak Boleh Kosong"),t},y=t(63),M=t.n(y),S=Object(v.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),x=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={aktif:!1},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.isEdit?document.getElementById("nama_group").focus():document.getElementById("kode_group").focus()},100)}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},this.props.isEdit?u.a.createElement(u.a.Fragment,null,u.a.createElement(j.a,{name:"id",component:D.b,type:"hidden",readOnly:this.props.isEdit})):null,u.a.createElement(j.a,{tabIndex:"1",id:"kode_group",name:"kode_group",component:D.e,type:"text",label:" Kode Group",readOnly:this.props.isEdit,placeholder:"Masukan Kode Group"}),u.a.createElement(j.a,{tabIndex:"2",id:"nama_group",name:"nama_group",component:D.e,type:"text",label:" Nama Group",placeholder:"Masukan Nama Group"}),u.a.createElement(j.a,Object.assign({tabIndex:"3",name:"harga",component:D.e,type:"text",label:"Harga"},S,{placeholder:"Masukan Harga"})),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 text-right"},u.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.dispatch(Object(d.Qb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",u.a.createElement("button",{tabIndex:"5",className:this.state.aktif?"btn btn-success":"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?u.a.createElement(M.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(c.Component);x=Object(G.a)({form:"ModalFormDataGroup",enableReinitialize:!0,validate:_})(x);var N=Object(m.b)(function(e){if(null!==e.datamaster.ShowModalGroup)return{initialValues:{id:e.datamaster.ShowModalGroup.id,kode_group:e.datamaster.ShowModalGroup.kode_group,nama_group:e.datamaster.ShowModalGroup.nama_group,harga:e.datamaster.ShowModalGroup.harga,persentase:e.datamaster.ShowModalGroup.persentase}}},null)(x),w=t(141),K=function(e,a,t){b.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Group "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(f.b)("group/delete/by-kode-group/"+a).then(function(){Object(g.d)("Data Berhasil Di Hapus").then(function(){return t(Object(d.z)())})}).catch(function(e){Object(g.e)("error",e.response.data)})})},B=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kode_group",text:"Kode Group",sort:!0},{dataField:"nama_group",text:"Nama Group"},{dataField:"harga",text:"Harga",formatter:function(e){return u.a.createElement("span",null,parseFloat(e).toLocaleString("kr-KO"))}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a){var t={id:a._id,kode_group:a.kode_group,nama_group:a.nama_group,persentase:a.persentase.toFixed(1),harga:a.harga};return u.a.createElement("div",{className:"row text-center"},u.a.createElement("div",{className:"col-12"},u.a.createElement("button",{onClick:function(){return o.formEditDataGroup(t)},className:"btn btn-primary mr-3"},u.a.createElement("i",{className:"fa fa-edit"})),u.a.createElement("button",{onClick:function(){return K(a.kode_group,a._id,o.props.dispatch)},className:"btn btn-danger"},u.a.createElement("i",{className:"fa fa-trash"}))))}}]},o.handleSubmit=o.handleSubmit.bind(Object(r.a)(o)),o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.z)())}},{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0});var t={nama_group:e.nama_group,harga:e.harga,persentase:0},n={kode_group:e.kode_group,nama_group:e.nama_group,harga:e.harga,persentase:0};this.state.isEdit?Object(f.m)("group/edit/by-kode-group/"+e.id,t).then(function(){a.props.dispatch(Object(d.Qb)())}).then(function(){Object(g.e)("success","Data Berhasil Diupdate")}).then(function(){a.props.dispatch(Object(d.z)())}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(E.d)("ModalFormDataGroup"))}).catch(function(e){Object(g.e)("info",void 0===e.response?"Terjadi Kesalahan Saat Megirim Data ":e.response.data),a.setState({isLoading:!1})}):Object(f.h)("group/add",n).then(function(){a.props.dispatch(Object(d.Qb)())}).then(function(){Object(g.e)("success","Data Berhasil Disimpan")}).then(function(){a.props.dispatch(Object(d.z)())}).then(function(){a.props.dispatch(Object(E.d)("ModalFormDataGroup"))}).then(function(){a.setState({isLoading:!1})}).catch(function(e){return Object(k.a)(e,"group/reactive/by-kode-group",n,a.props.dispatch,Object(d.z)(),Object(d.Qb)(),"ModalFormDataGroup").then(function(){a.setState({isLoading:!1})})})}},{key:"formEditDataGroup",value:function(e){this.props.dispatch(Object(d.Vb)()),this.props.dispatch(Object(d.gb)(e)),this.setState({isEdit:!0})}},{key:"ShowModalGroup",value:function(){this.props.dispatch(Object(d.Vb)()),this.props.dispatch(Object(d.gb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("ol",{className:"breadcrumb float-xl-right"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement(p.b,{to:"#"},"Data Master")),u.a.createElement("li",{className:"breadcrumb-item active"},"Master Group")),u.a.createElement("h1",{className:"page-header"},"Master Group "),u.a.createElement(l.a,null,u.a.createElement(l.c,null,"Master Group"),u.a.createElement("br",null),u.a.createElement("div",{className:"container"},u.a.createElement(O.a,{keyField:"kode_group",tambahData:!0,handleClick:function(){return e.ShowModalGroup()},exportCsv:!0,data:this.props.DataGroup,columns:this.state.columns,empty:this.props.DataGroup,textEmpty:"Data Group Kosong"})),u.a.createElement("br",null),u.a.createElement(w.a,{size:"P",title:this.state.isEdit?"Edit Data Data Group":"Tambah Data Data Group",content:u.a.createElement(N,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(a){return e.handleSubmit(a)}})})))}}]),t}(u.a.Component);a.default=Object(m.b)(function(e){return{DataGroup:e.datamaster.GetDataGroup,hideModal:e.datamaster.modalDialog}},null)(B)}}]);
//# sourceMappingURL=54.b7385e5d.chunk.js.map