(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{536:function(t,a,s){"use strict";s.r(a);var e=s(386),n={data:function(){return{JSON:JSON,selectMultiple:null,selectChildren:null,timeDatasource:new e.UIPickerTimeDatasource({hourText:"时",minuteText:"分"}),dateDatasource:new e.UIPickerDateDatasource({yearText:" 年",monthText:" 月",dateText:" 日",yearFrom:2e3,yearTo:2021})}}},r=s(3),p=Object(r.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#introduce"}},[t._v("Introduce")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#props"}},[t._v("Props")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#events"}},[t._v("Events")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#methods"}},[t._v("Methods")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#examples"}},[t._v("Examples")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%A4%9A%E9%80%89"}},[t._v("多选")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%A4%9A%E7%BA%A7%E9%80%89%E9%A1%B9"}},[t._v("多级选项")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89option"}},[t._v("自定义Option")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8datasource"}},[t._v("使用Datasource")])])]),t._v(" "),s("h2",{attrs:{id:"introduce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduce"}},[t._v("#")]),t._v(" Introduce")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("ui-select")]),t._v(", "),s("code",[t._v("ui-select-option")]),t._v(" 已注册为全局组件")])]),t._v(" "),s("p",[t._v("ui-select可以使用数组做数据源, 或者使用 "),s("code",[t._v("UIPickerDatasource")]),t._v(" 进行异步获取数据源")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ui-select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":datasource")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[\n  {label:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",value:1},\n  {label:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",value:2}\n]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui-select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ui-select",{attrs:{datasource:[{label:"1",value:1},{label:"2",value:2}]}}),t._v(" "),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("默认")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("v-model / value")]),t._v(" "),s("td",[t._v("string,number或Array")]),t._v(" "),s("td",[t._v("表示当前select的值;"),s("br"),t._v(" 如果是单列picker则值为string或number"),s("br"),t._v("如果列大于1, 则值为数组"),s("br"),t._v("特殊情况: 如果是"),s("code",[t._v("multiple")]),t._v("多选, 则返回的是数组")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("表示占位符文字")]),t._v(" "),s("td",[t._v("请选择")])]),t._v(" "),s("tr",[s("td",[t._v("emptyText")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("表示无选项文字")]),t._v(" "),s("td",[t._v("无数据")])]),t._v(" "),s("tr",[s("td",[t._v("datasource")]),t._v(" "),s("td",[t._v("Array 或 "),s("code",[t._v("UIPickerDataSource")]),t._v(" 数据源对象")]),t._v(" "),s("td",[t._v("数据源")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("multiple")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("(仅对一维数据源有效) 是否允许多选")]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("当选择改变时触发"),s("br"),t._v("(单组数据源为值, 多组数据源为值数组)")]),t._v(" "),s("td",[t._v("(selectValue:any)=>void")])])])]),t._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("show():Promise<void>")]),t._v(" "),s("td",[t._v("显示")])]),t._v(" "),s("tr",[s("td",[t._v("hide():Promise<void>")]),t._v(" "),s("td",[t._v("隐藏")])]),t._v(" "),s("tr",[s("td",[t._v("getSelect(groupIndex:number = 0)")]),t._v(" "),s("td",[t._v("获得指定组当前界面上所选择的值")])]),t._v(" "),s("tr",[s("td",[t._v("refreshDatasource(groupIndex:number, trigger = true)")]),t._v(" "),s("td",[t._v("手动刷新指定组的数据源, 将触发数据源对象的"),s("code",[t._v("picker_datasource")]),t._v("方法, trigger表明是否触发change事件")])])])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"多选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多选"}},[t._v("#")]),t._v(" 多选")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ui-select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("multiple")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":datasource")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[\n  {label:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",value:1},\n  {label:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",value:2}\n]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui-select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ui-select",{attrs:{multiple:"",datasource:[{label:"1",value:1},{label:"2",value:2}]},model:{value:t.selectMultiple,callback:function(a){t.selectMultiple=a},expression:"selectMultiple"}}),t._v(" "),s("ui-button",{attrs:{primary:""},on:{click:function(a){t.$UIAlert(JSON.stringify(t.selectMultiple))}}},[t._v("当前值")]),t._v(" "),s("ul",[s("li",[t._v("多选只能支持一维数据源")]),t._v(" "),s("li",[t._v("多选的值是数组, 例如: [1,2]")])]),t._v(" "),s("h3",{attrs:{id:"多级选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多级选项"}},[t._v("#")]),t._v(" 多级选项")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ui-select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":datasource")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[\n  {label:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",value:1, children:[{label:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",value:3}]},\n  {label:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",value:2}\n]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui-select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ui-select",{attrs:{datasource:[{label:"1",value:1,children:[{label:"3",value:3}]},{label:"2",value:2}]},model:{value:t.selectChildren,callback:function(a){t.selectChildren=a},expression:"selectChildren"}}),t._v(" "),s("ui-button",{attrs:{primary:""},on:{click:function(a){t.$UIAlert(JSON.stringify(t.selectChildren))}}},[t._v("当前值")]),t._v(" "),s("ul",[s("li",[t._v("多选只能支持一维数据源")]),t._v(" "),s("li",[t._v("多选的值是数组, 例如: [1,2]")])]),t._v(" "),s("h2",{attrs:{id:"自定义option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义option"}},[t._v("#")]),t._v(" 自定义Option")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ui-select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ui-select-option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":disabled")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui-se-cell")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ui-select-option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui-select-option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ui-select-option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui-select-option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ui-select-option")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui-select-option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui-select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("可以使用"),s("code",[t._v("ui-select-option")]),t._v("子元素来自定义数据源. 此时"),s("code",[t._v("datasource")]),t._v("属性必须为空;")]),t._v(" "),s("h2",{attrs:{id:"使用datasource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用datasource"}},[t._v("#")]),t._v(" 使用Datasource")]),t._v(" "),s("p",[t._v("除此方式外, 还可以使用与Picker相同的"),s("code",[t._v("PickerDataSource")]),t._v("方式定义数据源.")])],1)}),[],!1,null,null,null);a.default=p.exports}}]);