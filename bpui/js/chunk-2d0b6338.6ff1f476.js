(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6338"],{"1bc4":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"1000px"}},[i("h4",[e._v("custom picker")]),i("button",{on:{click:function(t){e.visible1=!0}}},[e._v("show1")]),i("button",{on:{click:function(){e.visible1=!0,e.value1=2}}},[e._v("show1")]),i("button",{on:{click:function(t){e.visible2=!0}}},[e._v("show2")]),i("button",{on:{click:function(t){e.visible3=!0}}},[e._v("show phone style")]),i("bp-picker",{ref:"picker1",attrs:{visible:e.visible1,datasource:[{label:"1",value:1},{label:"2",value:2},{label:"2",value:2},{label:"2",value:2},{label:"2",value:2}]},on:{"update:visible":function(t){e.visible1=t},confirm:e.onConfirm1,change:e.onChange1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),i("bp-picker",{attrs:{forcePhoneStyle:"true",visible:e.visible3,datasource:[{label:"1",value:1},{label:"2",value:2},{label:"2",value:2},{label:"2",value:2},{label:"2",value:2}]},on:{"update:visible":function(t){e.visible3=t},confirm:e.onConfirm1,change:e.onChange1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),i("bp-picker",{ref:"picker2",attrs:{visible:e.visible2,datasource:e.PickerDateDatasource},on:{"update:visible":function(t){e.visible2=t},confirm:e.onConfirm2,change:e.onChange2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)},c=[],n=i("9ab4"),a=i("60a3"),l=i("f210"),b=function(e){function t(){var t=e.call(this)||this;return t.visible1=!1,t.visible2=!1,t.visible3=!1,t.value1=null,t.value2=[],t.PickerTimeDatasource=new l["a"].PickerTimeDatasource({hourText:"h",minuteText:"m"}),t.PickerDateDatasource=new l["a"].PickerDateDatasource({yearText:"n"}),t}var i;return Object(n["b"])(t,e),t.prototype.demoEvent=function(e){},t.prototype.mounted=function(){this.$timer.sleep(1e4).then((function(){}))},t.prototype.onConfirm2=function(){console.log("confirm",this.value2),this.$bpWidget.showAlert(JSON.stringify(this.value2))},t.prototype.onChange2=function(e){console.log("change",e),this.$bpWidget.showToast(JSON.stringify(e))},t.prototype.onConfirm1=function(){console.log("confirm",this.value1,this.picker1.getValue()),this.$bpWidget.showAlert(this.value1)},t.prototype.onChange1=function(e){console.log("change",e),this.$bpWidget.showToast(e)},Object(n["a"])([Object(a["e"])(),Object(n["c"])("design:type","function"===typeof(i="undefined"!==typeof bp&&bp.Picker)?i:Object)],t.prototype,"picker1",void 0),Object(n["a"])([Object(a["b"])(),Object(n["c"])("design:type",Function),Object(n["c"])("design:paramtypes",[String]),Object(n["c"])("design:returntype",void 0)],t.prototype,"demoEvent",null),Object(n["a"])([Object(a["d"])(),Object(n["c"])("design:type",Boolean)],t.prototype,"visible1",void 0),Object(n["a"])([Object(a["d"])(),Object(n["c"])("design:type",Boolean)],t.prototype,"visible2",void 0),Object(n["a"])([Object(a["d"])(),Object(n["c"])("design:type",Boolean)],t.prototype,"visible3",void 0),Object(n["a"])([Object(a["d"])(),Object(n["c"])("design:type",Object)],t.prototype,"value1",void 0),Object(n["a"])([Object(a["d"])(),Object(n["c"])("design:type",Object)],t.prototype,"value2",void 0),Object(n["a"])([Object(a["d"])(),Object(n["c"])("design:type",Object)],t.prototype,"PickerTimeDatasource",void 0),Object(n["a"])([Object(a["d"])(),Object(n["c"])("design:type",Object)],t.prototype,"PickerDateDatasource",void 0),t=Object(n["a"])([Object(a["a"])({components:{bpPicker:l["a"].bpPicker}}),Object(n["c"])("design:paramtypes",[])],t),t}(a["f"]),s=b,u=s,r=i("2877"),p=Object(r["a"])(u,o,c,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0b6338.6ff1f476.js.map