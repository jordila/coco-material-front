(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0767":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team"},[a("h3",{staticClass:"title"},[t._v("The team")]),a("div",{staticClass:"bg"},[t._m(0),a("p",[t._v("The team members are:")]),a("div",{staticClass:"members"},[a("img",{attrs:{alt:"Team members illustration",src:s("8316")}}),a("div",{staticClass:"group"},t._l(t.members,(function(e,s){return a("a",{key:s,staticClass:"person",attrs:{href:e.link,target:"_blank"}},[a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"position"},[t._v(t._s(e.position))])])})),0)])]),t._m(1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("CocoMaterial")]),t._v(" is an idea of Esther Moreno for "),s("a",{staticClass:"link",attrs:{href:"https://kaleidos.net/",target:"_blank"}},[t._v("Kaleidos’")]),t._v(" "),s("a",{staticClass:"link",attrs:{href:"https://piweek.com/",target:"_blank"}},[t._v("PIWEEK ")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"contact"},[t._v("Feel free to "),s("a",{staticClass:"highlight",attrs:{href:"mailto:esther.moreno@kaleidos.net"}},[t._v("contact us")])])}],n={name:"Team",data:function(){return{members:[{name:"Marina López",position:"Front-End Developer",link:"https://kaleidos.net/ff8a80/"},{name:"Natacha Menjibar",position:"UX/UI Designer",link:"https://kaleidos.net/492858/"},{name:"Esther Moreno",position:"Creator & Illustrator",link:"https://kaleidos.net/720b34/"},{name:"Yamila Moreno",position:"Back-End Developer",link:"https://kaleidos.net/D70A53/"}]}}},r=n,i=(s("eeee"),s("2877")),l=Object(i["a"])(r,a,o,!1,null,"0bdb8ff9",null);e["default"]=l.exports},"2a33":function(t,e,s){},3132:function(t,e,s){"use strict";var a=s("d0b5"),o=s.n(a);o.a},5319:function(t,e,s){"use strict";var a=s("d784"),o=s("825a"),n=s("7b0b"),r=s("50c4"),i=s("a691"),l=s("1d80"),c=s("8aa5"),u=s("14c3"),d=Math.max,f=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,s,a){var m=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,k=a.REPLACE_KEEPS_$0,b=m?"$":"$0";return[function(s,a){var o=l(this),n=void 0==s?void 0:s[t];return void 0!==n?n.call(s,o,a):e.call(String(o),s,a)},function(t,a){if(!m&&k||"string"===typeof a&&-1===a.indexOf(b)){var n=s(e,t,this,a);if(n.done)return n.value}var l=o(t),p=String(this),v="function"===typeof a;v||(a=String(a));var h=l.global;if(h){var C=l.unicode;l.lastIndex=0}var y=[];while(1){var w=u(l,p);if(null===w)break;if(y.push(w),!h)break;var x=String(w[0]);""===x&&(l.lastIndex=c(p,r(l.lastIndex),C))}for(var V="",F=0,T=0;T<y.length;T++){w=y[T];for(var E=String(w[0]),S=d(f(i(w.index),p.length),0),H=[],A=1;A<w.length;A++)H.push(g(w[A]));var M=w.groups;if(v){var z=[E].concat(H,S,p);void 0!==M&&z.push(M);var B=String(a.apply(void 0,z))}else B=_(E,p,S,H,M,a);S>=F&&(V+=p.slice(F,S)+B,F=S+E.length)}return V+p.slice(F)}];function _(t,s,a,o,r,i){var l=a+t.length,c=o.length,u=h;return void 0!==r&&(r=n(r),u=v),e.call(i,u,(function(e,n){var i;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,a);case"'":return s.slice(l);case"<":i=r[n.slice(1,-1)];break;default:var u=+n;if(0===u)return e;if(u>c){var d=p(u/10);return 0===d?e:d<=c?void 0===o[d-1]?n.charAt(1):o[d-1]+n.charAt(1):e}i=o[u-1]}return void 0===i?"":i}))}}))},6547:function(t,e,s){var a=s("a691"),o=s("1d80"),n=function(t){return function(e,s){var n,r,i=String(o(e)),l=a(s),c=i.length;return l<0||l>=c?t?"":void 0:(n=i.charCodeAt(l),n<55296||n>56319||l+1===c||(r=i.charCodeAt(l+1))<56320||r>57343?t?i.charAt(l):n:t?i.slice(l,l+2):r-56320+(n-55296<<10)+65536)}};t.exports={codeAt:n(!1),charAt:n(!0)}},"6c19":function(t,e,s){t.exports=s.p+"img/coco.6d579ec8.svg"},"81d5":function(t,e,s){"use strict";var a=s("7b0b"),o=s("23cb"),n=s("50c4");t.exports=function(t){var e=a(this),s=n(e.length),r=arguments.length,i=o(r>1?arguments[1]:void 0,s),l=r>2?arguments[2]:void 0,c=void 0===l?s:o(l,s);while(c>i)e[i++]=t;return e}},8316:function(t,e,s){t.exports=s.p+"img/team.e1648445.svg"},"8aa5":function(t,e,s){"use strict";var a=s("6547").charAt;t.exports=function(t,e,s){return e+(s?a(t,e).length:1)}},"911b":function(t,e,s){},"999e":function(t,e,s){},"99af":function(t,e,s){"use strict";var a=s("23e7"),o=s("d039"),n=s("e8b5"),r=s("861d"),i=s("7b0b"),l=s("50c4"),c=s("8418"),u=s("65f0"),d=s("1dde"),f=s("b622"),p=s("2d00"),v=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",m=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),k=d("concat"),b=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:n(t)},_=!m||!k;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,s,a,o,n,r=i(this),d=u(r,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?r:arguments[e],b(n)){if(o=l(n.length),f+o>h)throw TypeError(g);for(s=0;s<o;s++,f++)s in n&&c(d,f,n[s])}else{if(f>=h)throw TypeError(g);c(d,f++,n)}return d.length=f,d}})},b3c3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"results"},[a("aside",{staticClass:"tags",on:{click:t.closeAutocomplete}},[a("p",[t._v("Popular tags")]),a("ul",{staticClass:"tags-list"},[a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["face"])}}},[t._v("Face")])]),a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["transportation"])}}},[t._v("Transportation")])]),a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["social"])}}},[t._v("Social")])]),a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["nature"])}}},[t._v("Nature")])]),a("li",[a("button",{staticClass:"popular-btn",on:{click:function(e){return t.searchVector(["food"])}}},[t._v("Food")])])])]),a("section",{staticClass:"results-data",on:{click:t.closeAutocomplete}},[a("div",{staticClass:"menu"},[a("form",{staticClass:"search",attrs:{autocomplete:"off",onsubmit:"return false;"}},[a("label",{attrs:{for:"search"}},[t._v("Search results for: ")]),a("div",{staticClass:"relative"},[a("div",{staticClass:"search-input-wrapper"},[t._l(t.searchTags,(function(e,s){return a("span",{key:s,staticClass:"tag",on:{click:function(s){return t.removeTag(e)}}},[t._v("x "+t._s(e))])})),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",attrs:{id:"search",type:"text"},domProps:{value:t.search},on:{keyup:t.autocompleteSearch,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focusAutocompleteResults(-1,"down")},input:function(e){e.target.composing||(t.search=e.target.value)}}})],2),t.autocompleteResults.length?a("div",{ref:"results",staticClass:"autocomplete-results",attrs:{id:"results"}},t._l(t.autocompleteResults,(function(e,s){return a("span",{key:s,attrs:{tabindex:"1"},on:{click:function(s){return t.addTag(e.slug)},keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.addTag(e.slug)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.focusAutocompleteResults(s,"up")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focusAutocompleteResults(s,"down")}]}},[t._v(" "+t._s(e.slug)+" ")])})),0):t._e()])]),t.filteredVectorsList.length?a("span",{staticClass:"info-text"},[t._v("Showing "+t._s(t.filteredVectorsList.length)+" results")]):t._e(),t.filteredVectorsList.length?a("div",{staticClass:"vectors-actions",on:{click:t.closeAutocomplete}},[a("button",{staticClass:"btn-color",on:{click:function(e){return t.showModal(t.filteredVectorsList[0],!0,0)}}},[a("img",{attrs:{alt:"Palette icon",src:s("d168")}}),a("span",[t._v("Customize all")])]),a("a",{staticClass:"btn-download",attrs:{href:t.downloadAllSvg,target:"_blank"}},[t._v("Download all SVG")])]):t._e()]),t.filteredVectorsList.length?a("div",{staticClass:"results-list",on:{click:t.closeAutocomplete}},t._l(t.filteredVectorsList,(function(e,s){return a("div",{key:s,staticClass:"vector-container"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{id:s,alt:e.name,src:e.svg},on:{load:function(e){return t.loaded(s)}}})]),a("div",{staticClass:"download-btn"},[a("a",{staticClass:"btn svg",attrs:{href:t.downloadSvg(e),target:"_blank"}},[t._v("SVG")]),a("button",{staticClass:"btn png",on:{click:function(a){return t.showModal(e,!1,s)}}},[t._v("PNG")])])])})),0):a("div",{staticClass:"no-results",on:{click:t.closeAutocomplete}},[a("img",{attrs:{alt:"Coconut illustration",src:s("6c19")}}),a("h3",[t._v("Sorry, this coconut is empty")]),t.searchTags.length?a("div",[a("span",[t._v("We didn't find any result matching \"")]),a("span",{staticClass:"highlight"},t._l(t.searchTags,(function(e,s){return a("span",{key:s},[t._v(" "+t._s(e)+" ")])})),0),a("span",[t._v('".')])]):t._e(),t._m(0)])]),t.isModalVisible&&t.filteredVectorsList.length?a("modal",{attrs:{vector:t.svgCode,customizeBulk:t.customizeBulk,vectors:t.filteredVectorsList.length,vectorId:t.selectedVector.id,tags:t.searchTags,isHorizontal:t.isHorizontal},on:{close:t.closeModal}}):t._e()],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Please try a different search term or look within our "),s("strong",[t._v("popular tags")])])}],n=(s("4de4"),s("caad"),s("a15b"),s("ac1f"),s("2532"),s("841c"),s("5530")),r=s("2f62"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal"},[s("header",{staticClass:"modal-header"},[t._t("header",[s("div",{staticClass:"title-container"},[s("span",{staticClass:"title"},[t._v(" "+t._s(t.customizeBulk?"Customize selection":"Customize illustration")+" ")]),t.customizeBulk?s("span",{staticClass:"subtitle"},[t._v(" ("),s("strong",[t._v(t._s(t.vectors)+" illustrations ")]),t._v("selected for bulk edit) ")]):t._e()]),s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[t._v(" x ")])])],2),s("section",{staticClass:"modal-body"},[t._t("body",[s("div",{staticClass:"preview-container"},[t.customizeBulk?s("span",{staticClass:"preview-title"},[t._v("Example illustation for reference")]):t._e(),s("div",{ref:"preview",class:"preview "+(t.isHorizontal?"horizontal":"vertical"),attrs:{id:"preview"},domProps:{innerHTML:t._s(t.vector)}})]),s("div",{staticClass:"colors"},[s("div",{staticClass:"stroke"},[s("label",{staticClass:"title",attrs:{for:"strokeHex"}},[t._v(" Color ")]),s("div",{staticClass:"color-options"},[s("div",{staticClass:"rounds"},t._l(t.strokeColor,(function(e,a){return s("span",{key:a,class:"round "+(t.strokeHexValue===e?"selected":""),style:{backgroundColor:""+e},on:{click:function(s){return t.selectStroke(e)}}})})),0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeHexValue,expression:"strokeHexValue"}],staticClass:"hex",attrs:{name:"strokeHex",type:"text",placeholder:"HEX"},domProps:{value:t.strokeHexValue},on:{keyup:function(e){return t.selectStroke(t.strokeHexValue)},input:function(e){e.target.composing||(t.strokeHexValue=e.target.value)}}})])]),s("div",{staticClass:"fill"},[s("label",{staticClass:"title",attrs:{for:"fillHex"}},[t._v(" Background ")]),s("div",{staticClass:"color-options"},[s("div",{staticClass:"rounds"},t._l(t.fillColor,(function(e,a){return s("span",{key:a,class:"round "+("none"===e?"transparent":"")+" "+(t.backgroundHexValue===e?"selected":""),style:{backgroundColor:""+e},on:{click:function(s){return t.selectFill(e)}}})})),0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundHexValue,expression:"backgroundHexValue"}],staticClass:"hex",attrs:{name:"fillHex",type:"text",placeholder:"HEX"},domProps:{value:t.backgroundHexValue},on:{keyup:function(e){return t.selectFill(t.backgroundHexValue)},input:function(e){e.target.composing||(t.backgroundHexValue=e.target.value)}}})])]),s("div",{staticClass:"download"},[s("div",{staticClass:"title-container"},[s("span",{staticClass:"title"},[t._v("Download PNG")]),t.customizeBulk?s("span",{staticClass:"subtitle"},[t._v("( "+t._s(t.vectors)+" illustrations)")]):t._e()]),s("div",{staticClass:"buttons"},[s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("128")}},[t._v("S")]),s("span",{staticClass:"size"},[t._v("128px")])]),s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("256")}},[t._v("M")]),s("span",{staticClass:"size"},[t._v("256px")])]),s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("512")}},[t._v("L")]),s("span",{staticClass:"size"},[t._v("512px")])])])])])])],2)])])])},l=[],c=(s("99af"),s("cb29"),s("5319"),{name:"modal",props:{vector:null,vectorId:null,customizeBulk:null,vectors:null,tags:null,isHorizontal:null},data:function(){return{fillColor:["#FFFFFF","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF","none"],strokeColor:["#1C2541","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF","#FFFFFF"],svgCode:null,strokeHexValue:"#1C2541",backgroundHexValue:"#FFFFFF"}},methods:{close:function(){this.$emit("close")},selectStroke:function(t){7===t.length?(document.querySelectorAll("#preview path")[1].style.fill=t,this.backgroundHexValue=t,this.strokeHexValue=t):(document.querySelectorAll("#preview path")[1].style.fill="#1C2541",this.backgroundHexValue=t)},selectFill:function(t){7===t.length||"none"===t?(document.querySelectorAll("#preview path")[0].style.fill=t,this.backgroundHexValue=t):document.querySelectorAll("#preview path")[0].style.fill="none"},downloadPng:function(t){var e="none"!==this.backgroundHexValue&&this.backgroundHexValue?this.backgroundHexValue.replace("#",""):"none";if(this.customizeBulk){var s=this.tags.length?this.tags.join():"all";return"https://cocomaterial.com/api/download/?tags=".concat(s,"&img_format=png&stroke=").concat(this.strokeHexValue?this.strokeHexValue.replace("#",""):"1C2541","&fill=").concat(e,"&size=").concat(t)}return"https://cocomaterial.com/api/download/?id=".concat(this.vectorId,"&img_format=png&stroke=").concat(this.strokeHexValue?this.strokeHexValue.replace("#",""):"1C2541","&fill=").concat(e,"&size=").concat(t)}}}),u=c,d=(s("3132"),s("2877")),f=Object(d["a"])(u,i,l,!1,null,"175e6200",null),p=f.exports,v={name:"Results",components:{modal:p},data:function(){return{search:"",isModalVisible:!1,selectedVector:null,svgCode:null,autocompleteResults:[],customizeBulk:!1,isHorizontal:!0}},beforeMount:function(){!this.searchTags.length&&this.getTags()},computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])({filteredVectorsList:"filteredVectorsList",searchTags:"searchTags",tagsList:"tagsList",loading:"loading"})),{},{downloadAllSvg:function(){var t=this.searchTags.length?this.searchTags.join():"all";return"https://cocomaterial.com/api/download/?tags=".concat(t,"&img_format=svg")}}),methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["b"])({getTags:"getTags",getVectorsByTag:"getVectorByTag",getVectors:"getVectors"})),Object(r["d"])({clearFilteredVectors:"clearFilteredVectors",updateSearchTags:"updateSearchTags",removeSearchTag:"removeSearchTag"})),{},{showModal:function(t,e,s){this.selectedVector=t;var a=new XMLHttpRequest;a.open("GET",t.url,!1),a.send(null);var o=document.getElementById("".concat(s)).clientHeight,n=document.getElementById("".concat(s)).clientWidth;this.isHorizontal=o<n,this.svgCode=JSON.parse(a.responseText).svg_content,this.customizeBulk=e,this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},loaded:function(t){var e=document.getElementById("".concat(t)).clientHeight,s=document.getElementById("".concat(t)).clientWidth;document.getElementById(t).className=e>s?"vertical":"horizontal"},autocompleteSearch:function(){var t=this;this.autocompleteResults=this.tagsList.filter((function(e){return e.slug.includes(t.search)}))},focusAutocompleteResults:function(t,e){if(this.autocompleteResults.length)if("down"===e){var s=document.querySelectorAll("#results span")[t+1];s.focus(),-1===t&&setTimeout((function(){document.querySelector("#results").scrollTop=0}),100)}else if("up"===e&&0===t)document.querySelector("#search").focus();else{var a=document.querySelectorAll("#results span")[t-1];a.focus()}},closeAutocomplete:function(){this.autocompleteResults=[]},addTag:function(t){this.search="",this.$refs.search.focus(),this.autocompleteResults=[],this.updateSearchTags(t),this.$store.dispatch("getVectorByTag",this.searchTags)},removeTag:function(t){this.removeSearchTag(t),this.searchTags.length?this.$store.dispatch("getVectorByTag",this.searchTags):this.getVectors()},downloadSvg:function(t){var e=t.id;return"https://cocomaterial.com/api/download/?id=".concat(e,"&img_format=svg")},searchVector:function(t){this.$store.dispatch("getVectorByTag",t)}})},h=v,g=(s("e9eb"),Object(d["a"])(h,a,o,!1,null,"400e1fee",null));e["default"]=g.exports},bff3:function(t,e,s){"use strict";var a=s("999e"),o=s.n(a);o.a},cb29:function(t,e,s){var a=s("23e7"),o=s("81d5"),n=s("44d2");a({target:"Array",proto:!0},{fill:o}),n("fill")},d0b5:function(t,e,s){},d168:function(t,e,s){t.exports=s.p+"img/palette.301da43b.svg"},e70f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"license"},[s("h3",{staticClass:"title"},[t._v("License")]),s("p",[t._v("All illustrations published on CocoMaterial can be used for free. You can use them for commercial and non-commercial purposes. You do not need to ask permission from or provide credit to CocoMaterial, although it is appreciated when possible. CocoMaterial grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use creations made on CocoMaterial for free, including for commercial purposes, without permission from or attributing the illustrator.")]),s("p",[t._v("This license does not include the right to compile illustrations from CocoMaterial to replicate a similar or competing service.")])])}],n={name:"License"},r=n,i=(s("bff3"),s("2877")),l=Object(i["a"])(r,a,o,!1,null,"0ed13dd8",null);e["default"]=l.exports},e9eb:function(t,e,s){"use strict";var a=s("911b"),o=s.n(a);o.a},eeee:function(t,e,s){"use strict";var a=s("2a33"),o=s.n(a);o.a}}]);
//# sourceMappingURL=about.7e63b590.js.map