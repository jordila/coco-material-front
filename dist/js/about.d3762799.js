(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0767":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team"},[a("h3",{staticClass:"title"},[t._v("The team")]),a("div",{staticClass:"bg"},[t._m(0),a("p",[t._v("The team members are:")]),a("div",{staticClass:"members"},[a("img",{attrs:{alt:"Team members illustration",src:s("8316")}}),a("div",{staticClass:"group"},t._l(t.members,(function(e,s){return a("div",{key:s,staticClass:"person"},[a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"position"},[t._v(t._s(e.position))])])})),0)])]),t._m(1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("CocoMaterial")]),t._v(" is an idea of Esther Moreno for Kaleidos’ PIWEEK.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"contact"},[t._v("Feel free to "),s("a",{staticClass:"highlight",attrs:{href:"mailto:esther.moreno@kaleidos.net"}},[t._v("contact us")])])}],o=s("bc3a"),i=s.n(o),l={name:"Team",data:function(){return{info:null,members:[{name:"Marina López",position:"Front-End Developer"},{name:"Natacha Menjibar",position:"UX/UI Designer"},{name:"Esther Moreno",position:"Creator & Illustrator"},{name:"Yamila Moreno",position:"Back-End Developer"}]}},mounted:function(){var t=this;i.a.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){return t.info=e}))}},r=l,c=(s("56d7"),s("2877")),u=Object(c["a"])(r,a,n,!1,null,"5ae4571e",null);e["default"]=u.exports},"0bf2":function(t,e,s){"use strict";var a=s("ccd7"),n=s.n(a);n.a},"0c33":function(t,e,s){"use strict";var a=s("22de"),n=s.n(a);n.a},"22de":function(t,e,s){},"56d7":function(t,e,s){"use strict";var a=s("cdf4"),n=s.n(a);n.a},"6c19":function(t,e,s){t.exports=s.p+"img/coco.6d579ec8.svg"},"81d5":function(t,e,s){"use strict";var a=s("7b0b"),n=s("23cb"),o=s("50c4");t.exports=function(t){var e=a(this),s=o(e.length),i=arguments.length,l=n(i>1?arguments[1]:void 0,s),r=i>2?arguments[2]:void 0,c=void 0===r?s:n(r,s);while(c>l)e[l++]=t;return e}},8316:function(t,e,s){t.exports=s.p+"img/team.e1648445.svg"},b3c3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"results"},[t._m(0),a("section",{staticClass:"results-data"},[a("div",{staticClass:"menu"},[t._l(t.searchTags,(function(e,s){return a("span",{key:s,staticClass:"tag",on:{click:function(s){return t.removeTag(e)}}},[t._v("x "+t._s(e))])})),a("form",{staticClass:"search",attrs:{autocomplete:"off"}},[a("label",{attrs:{for:"search"}},[t._v("Search results for: ")]),a("div",{staticClass:"relative"},[a("div",{staticClass:"search-input-wrapper"},[t._l(t.searchTags,(function(e,s){return a("span",{key:s,staticClass:"tag",on:{click:function(s){return t.removeTag(e)}}},[t._v("x "+t._s(e))])})),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",attrs:{id:"search",type:"text"},domProps:{value:t.search},on:{keyup:t.autocompleteSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}})],2),t.autocompleteResults.length?a("div",{ref:"results",staticClass:"autocomplete-results"},t._l(t.autocompleteResults,(function(e,s){return a("span",{key:s,on:{click:function(s){return t.addTag(e.slug)}}},[t._v(" "+t._s(e.slug)+" ")])})),0):t._e()])]),t.filteredVectorsList.length?a("span",{staticClass:"info-text"},[t._v("Showing "+t._s(t.filteredVectorsList.length)+" results")]):t._e(),t.filteredVectorsList.length?a("div",{staticClass:"vectors-actions"},[t._m(1),a("button",{staticClass:"btn-download"},[t._v("Download all SVG")])]):t._e()],2),t.filteredVectorsList.length?a("div",{staticClass:"results-list"},t._l(t.filteredVectorsList,(function(e,s){return a("div",{key:s,staticClass:"vector-container"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{id:s,alt:e.name,src:e.svg},on:{load:function(e){return t.loaded(s)}}})]),a("div",{staticClass:"download-btn"},[a("button",{staticClass:"btn svg"},[t._v("SVG")]),a("button",{staticClass:"btn png",on:{click:function(s){return t.showModal(e)}}},[t._v("PNG")])])])})),0):a("div",{staticClass:"no-results"},[a("img",{attrs:{alt:"Coconut illustration",src:s("6c19")}}),a("h3",[t._v("Sorry, this coconut is empty")]),a("div",[a("span",[t._v("We didn't find any result matching \"")]),a("span",{staticClass:"highlight"},t._l(t.searchTags,(function(e,s){return a("span",{key:s},[t._v(" "+t._s(e)+" ")])})),0),a("span",[t._v('".')])]),t._m(2)])]),t.isModalVisible&&t.filteredVectorsList.length?a("modal",{attrs:{vector:t.svgCode},on:{close:t.closeModal}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"tags"},[s("p",[t._v("Popular tags")]),s("ul",{staticClass:"tags-list"},[s("li",[t._v("Food")]),s("li",[t._v("Pets")]),s("li",[t._v("Fruits")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-color"},[a("img",{attrs:{alt:"Palette icon",src:s("d168")}}),a("span",[t._v("Customize all")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Please try a different search term or look within our "),s("strong",[t._v("popular tags")])])}],o=(s("4de4"),s("caad"),s("ac1f"),s("2532"),s("841c"),s("5530")),i=s("2f62"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal"},[s("header",{staticClass:"modal-header"},[t._t("header",[s("span",{staticClass:"title"},[t._v(" Customize illustration ")]),s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[t._v(" x ")])])],2),s("section",{staticClass:"modal-body"},[t._t("body",[s("div",{ref:"preview",staticClass:"preview",domProps:{innerHTML:t._s(t.vector)}}),s("div",{staticClass:"colors"},[s("div",{staticClass:"stroke"},[s("label",{staticClass:"title",attrs:{for:"strokeHex"}},[t._v(" Color ")]),s("div",{staticClass:"color-options"},[t._l(t.strokeColor,(function(e,a){return s("span",{key:a,staticClass:"round",style:{backgroundColor:""+e},on:{click:function(s){return t.selectStroke(e)}}})})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeHexValue,expression:"strokeHexValue"}],staticClass:"hex",attrs:{name:"strokeHex",type:"text",placeholder:"HEX"},domProps:{value:t.strokeHexValue},on:{keyup:function(e){return t.selectStroke(t.strokeHexValue)},input:function(e){e.target.composing||(t.strokeHexValue=e.target.value)}}})],2)]),s("div",{staticClass:"fill"},[s("label",{staticClass:"title",attrs:{for:"fillHex"}},[t._v(" Background ")]),s("div",{staticClass:"color-options"},[t._l(t.fillColor,(function(e,a){return s("span",{key:a,class:"round "+("transparent"==e?"transparent":""),style:{backgroundColor:""+e},on:{click:function(s){return t.selectFill(e)}}})})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundHexValue,expression:"backgroundHexValue"}],staticClass:"hex",attrs:{name:"fillHex",type:"text",placeholder:"HEX"},domProps:{value:t.backgroundHexValue},on:{keyup:function(e){return t.selectFill(t.backgroundHexValue)},input:function(e){e.target.composing||(t.backgroundHexValue=e.target.value)}}})],2)]),s("div",{staticClass:"download"},[s("span",{staticClass:"title"},[t._v("Download PNG")]),s("div",{staticClass:"buttons"},[s("div",{staticClass:"btn-container"},[s("button",{staticClass:"btn-download",attrs:{type:"button"},on:{click:function(e){return t.downloadPng("128")}}},[t._v("S")]),s("span",{staticClass:"size"},[t._v("128px")])]),s("div",{staticClass:"btn-container"},[s("button",{staticClass:"btn-download",attrs:{type:"button"},on:{click:function(e){return t.downloadPng("256")}}},[t._v("M")]),s("span",{staticClass:"size"},[t._v("256px")])]),s("div",{staticClass:"btn-container"},[s("button",{staticClass:"btn-download",attrs:{type:"button"},on:{click:function(e){return t.downloadPng("512")}}},[t._v("L")]),s("span",{staticClass:"size"},[t._v("512px")])])])])])])],2)])])])},r=[],c=(s("cb29"),{name:"modal",props:{vector:null},data:function(){return{fillColor:["transparent","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF"],strokeColor:["#1C2541","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF"],svgCode:null,strokeHexValue:null,backgroundHexValue:null}},methods:{close:function(){this.$emit("close")},selectStroke:function(t){7===t.length?this.$refs.preview.firstElementChild.lastElementChild.style.fill=t:this.$refs.preview.firstElementChild.lastElementChild.style.fill="#000000"},selectFill:function(t){7===t.length?this.$refs.preview.firstElementChild.firstElementChild.style.fill=t:this.$refs.preview.firstElementChild.firstElementChild.style.fill="#FFFFFF"},downloadPng:function(t){console.log("downloadPng",t)}}}),u=c,d=(s("0c33"),s("2877")),v=Object(d["a"])(u,l,r,!1,null,"5c5601eb",null),f=v.exports,p={name:"Results",components:{modal:f},data:function(){return{search:"",isModalVisible:!1,selectedVector:null,svgCode:null,autocompleteResults:[]}},computed:Object(o["a"])({},Object(i["c"])({filteredVectorsList:"filteredVectorsList",searchTags:"searchTags",tagsList:"tagsList"})),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["b"])({getVectorsByTag:"getVectorByTag"})),Object(i["d"])({clearFilteredVectors:"clearFilteredVectors",updateSearchTags:"updateSearchTags",removeSearchTag:"removeSearchTag"})),{},{showModal:function(t){this.selectedVector=t;var e=new XMLHttpRequest;e.open("GET",t.url,!1),e.send(null),this.svgCode=JSON.parse(e.responseText).svg_content,this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},loaded:function(t){var e=document.getElementById("".concat(t)).clientHeight,s=document.getElementById("".concat(t)).clientWidth;document.getElementById(t).className=e>s?"vertical":"horizontal"},autocompleteSearch:function(){var t=this;this.autocompleteResults=this.tagsList.filter((function(e){return e.slug.includes(t.search)}))},closeAutocomplete:function(){this.autocompleteResults=[]},addTag:function(t){this.search="",this.$refs.search.focus(),this.autocompleteResults=[],this.updateSearchTags(t),this.$store.dispatch("getVectorByTag",this.searchTags)},removeTag:function(t){this.removeSearchTag(t),this.searchTags.length?this.$store.dispatch("getVectorByTag",this.searchTags):this.clearFilteredVectors()}})},m=p,h=(s("0bf2"),Object(d["a"])(m,a,n,!1,null,"e6bd983a",null));e["default"]=h.exports},cb29:function(t,e,s){var a=s("23e7"),n=s("81d5"),o=s("44d2");a({target:"Array",proto:!0},{fill:n}),o("fill")},ccd7:function(t,e,s){},cdf4:function(t,e,s){},d168:function(t,e,s){t.exports=s.p+"img/palette.301da43b.svg"}}]);
//# sourceMappingURL=about.d3762799.js.map