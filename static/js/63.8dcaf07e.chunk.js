(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1286:function(a,e,t){"use strict";t.r(e);var r=t(8),n=t(9),o=t(15),s=t(11),i=t(10),c=t(0),l=t.n(c),m=t(31),u=t(56),d=t(7),p=t(30),b=t(24),h=t(40),g=t(18),E=t(4),f=t(52),k=t(320),v=t(321),O=t(20),j=t(100),H=t(62),y=t.n(H),S=Object(j.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),P=function(a){Object(s.a)(t,a);var e=Object(i.a)(t);function t(){var a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=e.call.apply(e,[this].concat(o))).state={aktif:!1},a}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.z)()),setTimeout(function(){document.getElementById("harga").focus()},100)}},{key:"render",value:function(){var a=this;return l.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}},l.a.createElement(k.a,{label:"Kode Group",name:"kode_group",options:this.props.datagroup.filter(function(a){return void 0!==a.kode_group}).map(function(a){return{value:a.kode_group,name:a.kode_group+" - "+a.nama_group}}),value:this.props.kode_group,disabled:this.props.isEdit,placeholder:"Silahkan Pilih Kode Group",component:O.f}),l.a.createElement(k.a,Object.assign({id:"harga",name:"harga",tabIndex:"1"},S,{component:O.e,type:"text",label:"Jumlah Harga",onBlur:function(){return a.setState({aktif:!0})},placeholder:"Masukan Jumlah Harga"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-right"},l.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(d.Qb)())},type:"button"},"Batal"),"\xa0",l.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?l.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(c.Component);P=Object(v.a)({form:"HeadHargaEmas",enableReinitialize:!0})(P);var N=Object(p.b)(function(a){if(null!==a.datamaster.ShowModalParameterHargaEmas)return{datagroup:a.datamaster.GetDataGroup,initialValues:{kode_group:a.datamaster.ShowModalParameterHargaEmas.kode_group,harga:a.datamaster.ShowModalParameterHargaEmas.harga}}},null)(P),_=t(140),x=function(a){Object(s.a)(t,a);var e=Object(i.a)(t);function t(a){var n;return Object(r.a)(this,t),(n=e.call(this,a)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_group",text:"Kode Group",sort:!0},{dataField:"nama_group",text:"Nama Group"},{dataField:"harga",text:"Harga",formatter:function(a){return l.a.createElement("span",null,parseFloat(a).toLocaleString("kr-KO"))}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e){var t={kode_group:e.kode_group,harga:e.harga};return l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{onClick:function(){return n.formEditParameterHargaEmas(t)},className:"btn btn-primary mr-3"}," ",l.a.createElement("i",{className:"fa fa-edit"}))))}}]},n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.Lb)()),this.props.dispatch(Object(d.Kb)())}},{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0});var t={kode_group:a.kode_group,harga:a.harga};this.props.getMasterToko.map(function(a){return Object(g.r)(a.portal+"/api/v1/paraemas/edit/by-kode-group",t).then(function(){Object(b.e)("success","Data Berhasil Diedit")}),!0}),Object(g.p)("paraemas/edit/by-kode-group",t).then(function(){e.props.dispatch(Object(d.Qb)())}).then(function(){Object(b.e)("success","Data Berhasil Diedit")}).then(function(){e.props.dispatch(Object(d.Lb)())}).then(function(){e.setState({isLoading:!1})}).then(function(){e.props.dispatch(Object(h.d)("HeadHargaEmas"))}).catch(function(r){Object(E.a)(r,"sales/reactive/by-kode-sales/",a.kode_sales,t,e.props.dispatch,Object(d.Lb)(),Object(d.Qb)(),"HeadHargaEmas").then(function(){e.setState({isLoading:!1})})})}},{key:"formEditParameterHargaEmas",value:function(a){this.props.dispatch(Object(d.Vb)()),this.props.dispatch(Object(d.nb)(a)),this.setState({isEdit:!0})}},{key:"render",value:function(){var a=this;return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(m.b,{to:"#"},"Data Master")),l.a.createElement("li",{className:"breadcrumb-item active"},"Parameter Harga Emas")),l.a.createElement("h1",{className:"page-header"},"Parameter Harga Emas "),l.a.createElement(u.a,null,l.a.createElement(u.c,null,"Parameter Harga Emas"),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{keyField:"kode_group",exportCsv:!0,data:this.props.ParameterHargaEmas,columns:this.state.columns,empty:this.props.ParameterHargaEmas,textEmpty:"Parameter Harga Emas Kosong"})),l.a.createElement("br",null),l.a.createElement(_.a,{size:"P",title:this.state.isEdit?"Edit Parameter Harga Emas":"Tambah Parameter Harga Emas",content:l.a.createElement(N,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(e){return a.handleSubmit(e)}})})))}}]),t}(l.a.Component);e.default=Object(p.b)(function(a){return{ParameterHargaEmas:a.datamaster.getParameterHargaEmas,hideModal:a.datamaster.modalDialog,getMasterToko:a.datamaster.getMasterToko}},null)(x)}}]);
//# sourceMappingURL=63.8dcaf07e.chunk.js.map