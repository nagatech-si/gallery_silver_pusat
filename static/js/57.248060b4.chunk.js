(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1312:function(a,t,e){"use strict";e.r(t);var n=e(8),i=e(9),s=e(14),o=e(11),r=e(10),d=e(1),c=e.n(d),l=e(32),b=e(45),u=e(6),p=e(25),m=e(27),h=e.n(m),g=e(19),f=e(16),k=e(34),E=e(2),O=e(49),j=e(102),B=e(322),K=e(323),v=e(20),_=e(319),y=e(52),S=e.n(y),D=function(a){Object(o.a)(e,a);var t=Object(r.a)(e);function e(){var a;Object(n.a)(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(a=t.call.apply(t,[this].concat(s))).state={aktif:!1},a}return Object(i.a)(e,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("kondisi_barang").focus()},100)}},{key:"render",value:function(){var a=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},c.a.createElement("input",{name:"kondisi_barang_lama",type:"hidden"}),this.props.isEdit?c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{name:"id",component:v.b,type:"hidden",readOnly:this.props.isEdit})):null,c.a.createElement(B.a,{tabIndex:"1",id:"kondisi_barang",name:"kondisi_barang",component:v.e,type:"text",label:"Kode Kondisi Barang",onBlur:function(){return a.setState({aktif:!0})},placeholder:"Masukan Kode Kondisi Barang"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(u.Ub)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",c.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?c.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),e}(d.Component);D=Object(K.a)({form:"ModalKondisiBarang",enableReinitialize:!0,validate:_.a})(D);var M=Object(p.b)(function(a){if(null!==a.datamaster.ShowModalKondisiBarang)return{initialValues:{id:a.datamaster.ShowModalKondisiBarang.id,kondisi_barang_lama:a.datamaster.ShowModalKondisiBarang.kondisi_barang,kondisi_barang:a.datamaster.ShowModalKondisiBarang.kondisi_barang}}},null)(D),w=function(a,t){h.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Kondisi Barang "+a.kondisi_barang+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(f.b)("parakondisi/delete/by-kode-kondisi/"+a._id,{}).then(function(){Object(g.d)("Data Berhasil Di Hapus").then(function(){return t(Object(u.Fb)())})}).then(function(){return t(Object(E.c)("parakondisi/delete/by-kode-kondisi",{kondisi_barang:a.kondisi_barang}))})}).catch(function(a){Object(g.e)("error",a.response.data)})},N=function(a){Object(o.a)(e,a);var t=Object(r.a)(e);function e(a){var i;return Object(n.a)(this,e),(i=t.call(this,a)).state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kondisi_barang",text:"Kode Kondisi Barang",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,t){var e={id:t._id,kondisi_barang:t.kondisi_barang};return c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{onClick:function(){return i.formEditKondisiBarang(e)},className:"btn btn-primary mr-3"},c.a.createElement("i",{className:"fa fa-edit"})),c.a.createElement("button",{onClick:function(){return w(t,i.props.dispatch)},className:"btn btn-danger"},c.a.createElement("i",{className:"fa fa-trash"}))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(s.a)(i)),i}return Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.Fb)()),this.props.dispatch(Object(u.Ob)())}},{key:"handleSubmit",value:function(a){var t=this;this.setState({isLoading:!0});var e={kondisi_barang:a.kondisi_barang},n={kondisi_barang:a.kondisi_barang},i={kondisi_barang:a.kondisi_barang,kondisi_barang_lama:a.kondisi_barang_lama};this.state.isEdit?Object(f.q)("parakondisi/edit/by-kode-kondisi/"+a.id,e).then(function(){t.props.dispatch(Object(u.Ub)())}).then(function(){return Object(g.e)("success","Data Berhasil Diedit")}).then(function(){t.props.dispatch(Object(u.Fb)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(k.d)("ModalKondisiBarang"))}).then(function(){t.props.dispatch(Object(E.d)("parakondisi/edit/by-kode-kondisi",i))}).catch(function(a){Object(g.e)("info",void 0===a.response?"Terjadi Kesalahan Saat Megirim Data ":a.response.data),t.setState({isLoading:!1})}):Object(f.k)("parakondisi/add",n).then(function(){t.props.dispatch(Object(u.Ub)())}).then(function(){return Object(g.e)("success","Data Berhasil Disimpan")}).then(function(){t.props.dispatch(Object(u.Fb)())}).then(function(){t.props.dispatch(Object(k.d)("ModalKondisiBarang"))}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(E.e)("parakondisi/add",n))}).catch(function(a){return Object(E.b)(a,"parakondisi/reactive/by-kode-kondisi/",n,t.props.dispatch,Object(u.Fb)(),Object(u.Ub)(),"ModalKondisiBarang").then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(E.e)("parakondisi/add",n))})})}},{key:"formEditKondisiBarang",value:function(a){this.props.dispatch(Object(u.Zb)()),this.props.dispatch(Object(u.nb)(a)),this.setState({isEdit:!0})}},{key:"ShowModalKondisiBarang",value:function(){this.props.dispatch(Object(u.Zb)()),this.props.dispatch(Object(u.nb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var a=this;return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(l.b,{to:"#"},"Data Master")),c.a.createElement("li",{className:"breadcrumb-item active"},"Master Kondisi Barang")),c.a.createElement("h1",{className:"page-header"},"Master Kondisi Barang "),c.a.createElement(b.a,null,c.a.createElement(b.c,null,"Master Kondisi Barang"),c.a.createElement("br",null),c.a.createElement(b.b,null,c.a.createElement(O.a,{keyField:"kondisi_barang",tambahData:!0,handleClick:function(){return a.ShowModalKondisiBarang()},exportCsv:!0,data:this.props.DataKondisiBarang,columns:this.state.columns,empty:this.props.DataKondisiBarang,textEmpty:"Data Baki Kosong"})),c.a.createElement("br",null),c.a.createElement(j.a,{size:"P",title:this.state.isEdit?"Edit Data Kondisi Barang":"Tambah Data Kondisi Barang",content:c.a.createElement(M,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:function(t){return a.handleSubmit(t)}})})))}}]),e}(c.a.Component);t.default=Object(p.b)(function(a){return{DataKondisiBarang:a.datamaster.getDataKondisiBarang,hideModal:a.datamaster.modalDialog}},null)(N)}}]);
//# sourceMappingURL=57.248060b4.chunk.js.map