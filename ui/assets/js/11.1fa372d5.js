(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{388:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"d",(function(){return s}));e(119),e(27),e(35),e(117),e(397),e(118),e(37),e(85),e(28);function r(t,n){return t===n}function i(t,n){return function(t,n){return t.startsWith(n)?t.substring(n.length):t}(t,n).split("/")[0].split(".")[0]}function o(t){if(/\/$/.test(t))return"README";var n=t.split("/");return/\.html$/.test(t)?n[n.length-1].slice(0,-5):""}function s(t,n){for(var e=Object.keys(n).filter((function(t){return"/"!==t})),r=0,i=e.length;r<i;r++){var o=e[r];if(t.startsWith(o))return o}return"/"}},410:function(t,n,e){},489:function(t,n,e){"use strict";e(410)},527:function(t,n,e){"use strict";e.r(n);e(43),e(44);var r=e(393),i=e.n(r),o=(e(388),e(120)),s=new i.a,c={components:{Button:o.a},computed:{data:function(){return this.$page.frontmatter},title:function(){return this.$page.frontmatter.title||this.$title||""},description:function(){return this.$page.frontmatter.description||""},footer:function(){return s.render(this.data.footer||"")}}},u=(e(489),e(3)),a=Object(u.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home__container container"},[e("div",{staticClass:"home__header"},[e("h1",{staticClass:"home__title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"home__description"},[t._v(t._s(t.description))])]),t._v(" "),e("div",{staticClass:"home__body row"},[e("div",{staticClass:"home__content col-md-10"},[e("Content",{attrs:{custom:""}})],1)]),t._v(" "),e("footer",{staticClass:"home__footer",domProps:{innerHTML:t._s(t.footer)}})])}),[],!1,null,null,null);n.default=a.exports}}]);