(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1277:function(a,e,t){"use strict";t.r(e);var n=t(8),s=t(9),r=t(15),i=t(11),o=t(10),c=t(48),d=t.n(c),l=t(103),p=t(66),u=t(0),k=t.n(u),b=t(31),h=t(57),m=t(7),f=t(30),v=t(27),j=t.n(v),O=t(23),E=t(18),g=t(45),T=t(4),x=t(53),_=t(141),D=t(320),y=t(321),K=t(20),M=function(a,e){var t={};return a.kode_transaksi||(t.kode_transaksi="Kode Transaksi Tidak Boleh Kosong"),t},w=t(63),S=t.n(w),N=function(a){Object(i.a)(t,a);var e=Object(o.a)(t);function t(){var a;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(a=e.call.apply(e,[this].concat(r))).state={aktif:!1},a}return Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("kode_transaksi").focus()},100)}},{key:"render",value:function(){var a=this;return k.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}},this.props.isEdit?k.a.createElement(k.a.Fragment,null,k.a.createElement(D.a,{name:"id",component:K.b,type:"hidden",readOnly:this.props.isEdit})):null,k.a.createElement("input",{type:"hidden",name:"kode_transaksi_lama"}),k.a.createElement(D.a,{tabIndex:"1",id:"kode_transaksi",name:"kode_transaksi",component:K.e,type:"text",label:"Kode Transaksi",placeholder:"Masukan Kode Transaksi",onBlur:function(){return a.setState({aktif:!0})}}),k.a.createElement("div",{className:"row"},k.a.createElement("div",{className:"col-12 text-right"},k.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(m.Qb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",k.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?k.a.createElement(k.a.Fragment,null,k.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?k.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(u.Component);N=Object(y.a)({form:"ModalKodeTrransaksi",enableReinitialize:!0,validate:M})(N);var B=Object(f.b)(function(a){if(null!==a.datamaster.ShowModalKodeTransaksi)return{initialValues:{id:a.datamaster.ShowModalKodeTransaksi.id,kode_transaksi:a.datamaster.ShowModalKodeTransaksi.kode_transaksi,kode_transaksi_lama:a.datamaster.ShowModalKodeTransaksi.kode_transaksi}}},null)(N),L=function(a,e,t){j.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Transaksi "+a.kode_transaksi+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(){var n=Object(p.a)(d.a.mark(function n(s){var r,i,o;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!s.isConfirmed){n.next=26;break}n.prev=1,r=Object(l.a)(t),n.prev=3,r.s();case 5:if((i=r.n()).done){n.next=11;break}return o=i.value,n.next=9,Object(E.q)(o.portal+"/api/v1/paratransaksi/delete/by-kode-transaksi",{kode_transaksi:a.kode_transaksi});case 9:n.next=5;break;case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),r.e(n.t0);case 16:return n.prev=16,r.f(),n.finish(16);case 19:Object(O.d)("Data Berhasil Di Hapus"),n.next=25;break;case 22:n.prev=22,n.t1=n.catch(1),Object(O.a)("Data Gagal Di Hapus");case 25:Object(E.b)("paratransaksi/delete/by-kode-transaksi/"+a._id).then(function(){Object(O.d)("Data Berhasil Di Hapus").then(function(){return e(Object(m.Pb)())})}).catch(function(a){Object(O.e)("error",a.response.data)});case 26:case"end":return n.stop()}},n,null,[[1,22],[3,13,16,19]])}));return function(a){return n.apply(this,arguments)}}())},C=function(a){Object(i.a)(t,a);var e=Object(o.a)(t);function t(a){var s;return Object(n.a)(this,t),(s=e.call(this,a)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_transaksi",text:"Kode Transaksi ",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e){var t={id:e._id,kode_transaksi:e.kode_transaksi,kode_transaksi_lama:e.kode_transaksi_lama};return k.a.createElement("div",{className:"row text-center"},k.a.createElement("div",{className:"col-12"},k.a.createElement("button",{onClick:function(){return s.FormEditKodeTransaksi(t)},className:"btn btn-primary mr-3"},k.a.createElement("i",{className:"fa fa-edit"})),k.a.createElement("button",{onClick:function(){return L(e,s.props.dispatch,s.props.getMasterToko)},className:"btn btn-danger"},k.a.createElement("i",{className:"fa fa-trash"}))))}}],dataKodeTransaksi:[{kode_transaksi:"Uang Makan"}]},s.handleSubmit=s.handleSubmit.bind(Object(r.a)(s)),s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.Pb)()),this.props.dispatch(Object(m.Kb)())}},{key:"handleSubmit",value:function(){var a=Object(p.a)(d.a.mark(function a(e){var t,n,s,r,i,o,c,p,u,k=this;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this.setState({isLoading:!0}),t={kode_transaksi_lama:e.kode_transaksi_lama,kode_transaksi:e.kode_transaksi},n={id:e.id,kode_transaksi:e.kode_transaksi},s=this.props.getMasterToko,!this.state.isEdit){a.next=32;break}a.prev=5,r=Object(l.a)(s),a.prev=7,r.s();case 9:if((i=r.n()).done){a.next=15;break}return o=i.value,a.next=13,Object(E.q)(o.portal+"/api/v1/paratransaksi/edit/by-kode-transaksi",t);case 13:a.next=9;break;case 15:a.next=20;break;case 17:a.prev=17,a.t0=a.catch(7),r.e(a.t0);case 20:return a.prev=20,r.f(),a.finish(20);case 23:Object(O.e)("success","Data Berhasil Diedit"),a.next=29;break;case 26:a.prev=26,a.t1=a.catch(5),Object(O.e)("error","Data Gagal Diedit");case 29:Object(E.m)("paratransaksi/edit/by-kode-transaksi/"+e.id,t).then(function(){k.setState({isLoading:!1}),k.props.dispatch(Object(m.Qb)())}).then(function(){return Object(O.e)("success","Data Berhasil Diedit")}).then(function(){k.props.dispatch(Object(m.Pb)())}).then(function(){k.setState({isLoading:!1})}).then(function(){k.props.dispatch(Object(g.d)("ModalKodeTrransaksi"))}).catch(function(a){Object(O.e)("info",void 0===a.response?"Terjadi Kesalahan Saat Megirim Data ":a.response.data),k.setState({isLoading:!1})}),a.next=57;break;case 32:a.prev=32,c=Object(l.a)(s),a.prev=34,c.s();case 36:if((p=c.n()).done){a.next=42;break}return u=p.value,a.next=40,Object(E.l)(u.portal+"/api/v1/paratransaksi/add",n);case 40:a.next=36;break;case 42:a.next=47;break;case 44:a.prev=44,a.t2=a.catch(34),c.e(a.t2);case 47:return a.prev=47,c.f(),a.finish(47);case 50:Object(O.e)("success","Data Berhasil Disimpan"),a.next=56;break;case 53:a.prev=53,a.t3=a.catch(32),Object(O.e)("error","Data Gagal Disimpan");case 56:Object(E.h)("paratransaksi/add",n).then(function(){k.setState({isLoading:!1}),k.props.dispatch(Object(m.Qb)())}).then(function(){Object(O.e)("success","Data Berhasil Disimpan")}).then(function(){k.props.dispatch(Object(m.Pb)())}).then(function(){k.props.dispatch(Object(g.d)("ModalKodeTrransaksi"))}).then(function(){k.setState({isLoading:!1})}).catch(function(a){return Object(T.a)(a,"paratransaksi/reactive/by-kode-transaksi/",n,k.props.dispatch,Object(m.Pb)(),Object(m.Qb)(),"ModalKodeTrransaksi").then(function(){k.setState({isLoading:!1})})});case 57:case"end":return a.stop()}},a,this,[[5,26],[7,17,20,23],[32,53],[34,44,47,50]])}));return function(e){return a.apply(this,arguments)}}()},{key:"FormEditKodeTransaksi",value:function(a){this.props.dispatch(Object(m.Vb)()),this.props.dispatch(Object(m.jb)(a)),this.setState({isEdit:!0})}},{key:"showModalKodeTranaksi",value:function(){this.props.dispatch(Object(m.Vb)()),this.props.dispatch(Object(m.jb)(!1)),this.setState({isEdit:!1,isLoading:!1})}},{key:"render",value:function(){var a=this;return k.a.createElement("div",null,k.a.createElement("ol",{className:"breadcrumb float-xl-right"},k.a.createElement("li",{className:"breadcrumb-item"},k.a.createElement(b.b,{to:"#"},"Data Master")),k.a.createElement("li",{className:"breadcrumb-item active"},"Master Kode Transaksi")),k.a.createElement("h1",{className:"page-header"},"Master Kode Transaksi "),k.a.createElement(h.a,null,k.a.createElement(h.c,null,"Master Kode Transaksi"),k.a.createElement("br",null),k.a.createElement("div",{className:"container"},k.a.createElement(x.a,{keyField:"kode_transaksi",tambahData:!0,handleClick:function(){return a.showModalKodeTranaksi()},exportCsv:!0,data:this.props.DataTransaksi,columns:this.state.columns,empty:this.props.DataTransaksi,textEmpty:"Data Jenis Kosong"})),k.a.createElement("br",null),k.a.createElement(_.a,{title:this.state.isEdit?"Edit Data Kode Transaksi":"Tambah Data Kode Transaksi",size:"P",content:k.a.createElement(B,{isLoading:this.state.isLoading,onSubmit:function(e){return a.handleSubmit(e)}})})))}}]),t}(k.a.Component);e.default=Object(f.b)(function(a){return{DataTransaksi:a.datamaster.getParamterTransaksi,hideModal:a.datamaster.modalDialog,getMasterToko:a.datamaster.getMasterToko}},null)(C)}}]);
//# sourceMappingURL=56.19764d2a.chunk.js.map