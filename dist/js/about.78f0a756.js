(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"14c4":function(t,e,a){},2655:function(t,e,a){t.exports=a.p+"img/next-disabled.85087abe.svg"},"432c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"license"},[a("h3",{staticClass:"title"},[t._v("License")]),a("p",[t._v("All illustrations published on CocoMaterial can be used for free. You can use them for commercial and non-commercial purposes. You do not need to ask permission from or provide credit to CocoMaterial, although it is appreciated when possible. CocoMaterial grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use creations made on CocoMaterial for free, including for commercial purposes, without permission from or attributing the illustrator.")]),a("p",[t._v("This license does not include the right to compile illustrations from CocoMaterial to replicate a similar or competing service.")])])}],n={name:"License"},r=n,i=(a("b65b"),a("2877")),l=Object(i["a"])(r,s,o,!1,null,"1a487279",null);e["default"]=l.exports},"448b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"results-container"},[s("transition",{attrs:{name:"slide",mode:"out-in"}},[t.showNavBar?s("div",{staticClass:"nav-search"},[s("div",{staticClass:"container"},[s("router-link",{attrs:{to:"/"}},[t.mobileView?s("img",{staticClass:"logo",attrs:{alt:"CocoMaterial logo. Coconut with a straw inside",src:a("e59e")}}):s("img",{staticClass:"logo",attrs:{alt:"CocoMaterial logo. Coconut with a straw inside",src:a("9b19")}})]),s("form",{staticClass:"search",attrs:{autocomplete:"off",onsubmit:"return false;"}},[s("label",{attrs:{for:"search"}},[t._v("Search results for: ")]),s("div",{staticClass:"relative"},[s("div",{staticClass:"search-input-wrapper"},[t._l(t.searchTags,(function(e,a){return s("span",{key:a,staticClass:"tag",on:{click:function(a){return t.removeTag(e)}}},[t._v("x "+t._s(e))])})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",attrs:{id:"search",type:"text"},domProps:{value:t.search},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchVector(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.handleDelete(e)},t.autocompleteSearch,function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.resetAutocompleteResults()}],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focusAutocompleteResults(-1,"down")},input:function(e){e.target.composing||(t.search=e.target.value)}}})],2),t.autocompleteResults.length?s("div",{ref:"results",staticClass:"autocomplete-results",attrs:{id:"results"}},t._l(t.autocompleteResults,(function(e,a){return s("span",{key:a,attrs:{tabindex:"1"},on:{click:function(a){return t.addTag(e.slug)},keyup:[function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addTag(e.slug)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.resetAutocompleteResults()}],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.focusAutocompleteResults(a,"up")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focusAutocompleteResults(a,"down")}]}},[t._v(" "+t._s(e.slug)+" ")])})),0):t._e()])])],1)]):t._e()]),s("div",{staticClass:"results"},[s("aside",{staticClass:"tags",on:{click:t.closeAutocomplete}},[s("p",[t._v("Popular tags")]),s("button",{staticClass:"link mobile",on:{click:function(e){return t.showAll()}}},[t._v("View all images")]),s("ul",{staticClass:"tags-list"},[s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("face")},on:{click:function(e){return t.handleSearchVector("face")}}},[t._v("face")])]),s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("family")},on:{click:function(e){return t.handleSearchVector("family")}}},[t._v("family")])]),s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("science")},on:{click:function(e){return t.handleSearchVector("science")}}},[t._v("science")])]),s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("office")},on:{click:function(e){return t.handleSearchVector("office")}}},[t._v("office")])]),s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("tools")},on:{click:function(e){return t.handleSearchVector("tools")}}},[t._v("tools")])]),s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("agile")},on:{click:function(e){return t.handleSearchVector("agile")}}},[t._v("agile")])]),s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("code")},on:{click:function(e){return t.handleSearchVector("code")}}},[t._v("code")])]),s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("chart")},on:{click:function(e){return t.handleSearchVector("chart")}}},[t._v("chart")])]),s("li",[s("button",{staticClass:"popular-btn",attrs:{disabled:t.searchTags.includes("logo")},on:{click:function(e){return t.handleSearchVector("logo")}}},[t._v("logo")])])]),s("button",{staticClass:"link desktop",on:{click:function(e){return t.showAll()}}},[t._v("View all images")])]),s("section",{staticClass:"results-data",on:{click:t.closeAutocomplete}},[s("div",{staticClass:"menu"},[s("form",{directives:[{name:"show",rawName:"v-show",value:!t.showNavBar,expression:"!showNavBar"}],staticClass:"search",attrs:{id:"formSearch",autocomplete:"off",onsubmit:"return false;"}},[s("label",{attrs:{for:"search"}},[t._v("Search results for: ")]),s("div",{staticClass:"relative"},[s("div",{staticClass:"search-input-wrapper"},[t._l(t.searchTags,(function(e,a){return s("span",{key:a,staticClass:"tag",on:{click:function(a){return t.removeTag(e)}}},[t._v("x "+t._s(e))])})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",attrs:{id:"search",type:"text"},domProps:{value:t.search},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchVector(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.handleDelete(e)},t.autocompleteSearch,function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.resetAutocompleteResults()}],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focusAutocompleteResults(-1,"down")},input:function(e){e.target.composing||(t.search=e.target.value)}}})],2),t.autocompleteResults.length?s("div",{ref:"results",staticClass:"autocomplete-results",attrs:{id:"results"}},t._l(t.autocompleteResults,(function(e,a){return s("span",{key:a,attrs:{tabindex:"1"},on:{click:function(a){return t.addTag(e.slug)},keyup:[function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addTag(e.slug)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.resetAutocompleteResults()}],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.focusAutocompleteResults(a,"up")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.focusAutocompleteResults(a,"down")}]}},[t._v(" "+t._s(e.slug)+" ")])})),0):t._e()])]),t.filteredVectors.length?s("span",{staticClass:"info-text"},[t._v("Showing "+t._s(t.totalResults)+" results")]):t._e(),t.filteredVectors.length?s("div",{staticClass:"vectors-actions",on:{click:t.closeAutocomplete}},[s("button",{staticClass:"btn-color",on:{click:function(e){return t.showModal(t.filteredVectors[0],!0,0)}}},[s("img",{attrs:{alt:"Palette icon",src:a("d168")}}),s("span",[t._v("Customize all")])]),s("a",{staticClass:"btn-primary btn-download",attrs:{href:t.downloadAllSvg,target:"_blank"}},[t._v("Download all SVG")])]):t._e()]),t.filteredVectors.length?s("div",{staticClass:"results-list",on:{click:t.closeAutocomplete}},t._l(t.filteredVectors,(function(e,a){return s("div",{key:a,staticClass:"vector-container"},[s("div",{staticClass:"img-container"},[s("div",{staticClass:"svg-container",style:{backgroundImage:"url("+e.svg+")"},attrs:{id:a,alt:e.name},on:{load:function(e){return t.loaded(a)}}})]),s("div",{staticClass:"download-btn"},[s("a",{staticClass:"btn svg",attrs:{href:t.downloadSvg(e),target:"_blank"},on:{click:function(a){return t.handleDownloadSvg(e)}}},[t._v("SVG")]),s("button",{staticClass:"btn png",on:{click:function(s){return t.showModal(e,!1,a)}}},[t._v("PNG")])])])})),0):t._e(),t.filteredVectors.length&&t.paginationArray.length>1&&6>=t.paginationArray.length?s("div",{staticClass:"pagination-container"},[s("button",{staticClass:"prev",attrs:{disabled:1==t.currentPage},on:{click:function(e){return t.handlePagination(t.currentPage-1)}}},[1==t.currentPage?s("img",{attrs:{src:a("62b7"),alt:"Previous page disabled"}}):s("img",{attrs:{src:a("9336"),alt:"Previous page"}})]),s("ul",{staticClass:"pages"},t._l(t.paginationArray,(function(e,a){return s("li",{key:a},[s("button",{class:"page "+(t.currentPage===e+1?"current":""),on:{click:function(a){return t.handlePagination(e+1)}}},[t._v(t._s(e+1))]),e+1!==t.paginationArray.length?s("span",{staticClass:"separator"},[t._v("|")]):t._e()])})),0),s("button",{staticClass:"next",attrs:{disabled:t.currentPage==t.paginationArray.length},on:{click:function(e){return t.handlePagination(t.currentPage+1)}}},[t.currentPage==t.paginationArray.length?s("img",{attrs:{src:a("2655"),alt:"Next page disabled"}}):s("img",{attrs:{src:a("b2f3"),alt:"Next page"}})])]):t._e(),t.paginationArray.length>6?s("div",{staticClass:"pagination-container"},[s("button",{staticClass:"prev",attrs:{disabled:1==t.currentPage},on:{click:function(e){return t.handlePagination(t.currentPage-1)}}},[1==t.currentPage?s("img",{attrs:{src:a("62b7"),alt:"Previous page disabled"}}):s("img",{attrs:{src:a("9336"),alt:"Previous page"}})]),s("ul",{staticClass:"pages"},[1!==t.currentPage?s("li",[s("button",{staticClass:"page",on:{click:function(e){return t.handlePagination(1)}}},[t._v("1")]),[1,2,3].includes(t.currentPage)?t._e():s("span",{staticClass:"separator"},[t._v("...")])]):t._e(),t.currentPage>2?s("li",[s("button",{staticClass:"page",on:{click:function(e){return t.handlePagination(t.currentPage-1)}}},[t._v(t._s(t.currentPage-1))])]):t._e(),s("li",[s("button",{staticClass:"page current"},[t._v(t._s(t.currentPage))])]),t.paginationArray.length>t.currentPage&&t.currentPage!==t.paginationArray.length-1?s("li",[s("button",{staticClass:"page",on:{click:function(e){return t.handlePagination(t.currentPage+1)}}},[t._v(t._s(t.currentPage+1))])]):t._e(),t.currentPage!==t.paginationArray.length?s("li",[[t.paginationArray.length-2,t.paginationArray.length-1,t.paginationArray.length].includes(t.currentPage)?t._e():s("span",{staticClass:"separator"},[t._v("...")]),s("button",{staticClass:"page",on:{click:function(e){return t.handlePagination(t.paginationArray.length)}}},[t._v(t._s(t.paginationArray.length))])]):t._e()]),s("button",{staticClass:"next",attrs:{disabled:t.currentPage==t.paginationArray.length},on:{click:function(e){return t.handlePagination(t.currentPage+1)}}},[t.currentPage==t.paginationArray.length?s("img",{attrs:{src:a("2655"),alt:"Next page disabled"}}):s("img",{attrs:{src:a("b2f3"),alt:"Next page"}})])]):t._e(),0===t.filteredVectors.length?s("div",{staticClass:"no-results",on:{click:t.closeAutocomplete}},[s("img",{attrs:{alt:"Coconut illustration",src:a("6c19")}}),s("h3",[t._v("Sorry, this coconut is empty")]),t.searchTags.length?s("div",[s("span",[t._v("We didn't find any result matching \"")]),s("span",{staticClass:"highlight"},t._l(t.searchTags,(function(e,a){return s("span",{key:a},[t._v(" "+t._s(e)+" ")])})),0),s("span",[t._v('".')])]):t._e(),t._m(0)]):t._e(),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showScrollToTop?s("button",{staticClass:"scroll-to-top",on:{click:function(e){return t.scrollToTop()}}},[s("img",{attrs:{src:a("fc7f"),alt:"Scroll to top"}})]):t._e()])],1),t.isModalVisible&&t.filteredVectors.length?s("modal",{attrs:{vector:t.svgCode,customizeBulk:t.customizeBulk,vectors:t.totalResults,vectorId:t.selectedVector.id,vectorTags:t.selectedVector.tags.split(","),tags:t.searchTags,isHorizontal:t.isHorizontal},on:{close:t.closeModal,search:function(e){return t.searchModalVector(e)}}}):t._e()],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Please try a different search term or look within our "),a("strong",[t._v("popular tags")])])}],n=(a("4de4"),a("caad"),a("a15b"),a("fb6a"),a("b0c0"),a("ac1f"),a("2532"),a("5319"),a("841c"),a("1276"),a("5530")),r=a("2f62"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal"},[a("header",{staticClass:"modal-header"},[t._t("header",[a("div",{staticClass:"title-container"},[a("span",{staticClass:"title"},[t._v(" "+t._s(t.customizeBulk?"Customize selection":"Customize illustration")+" ")]),t.customizeBulk?a("span",{staticClass:"subtitle"},[t._v(" ("),a("strong",[t._v(t._s(t.vectors)+" illustrations ")]),t._v("selected for bulk edit) ")]):t._e()]),a("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[t._v(" x ")])])],2),a("section",{staticClass:"modal-body"},[t._t("body",[a("div",{staticClass:"preview-container"},[t.customizeBulk?a("span",{staticClass:"preview-title"},[t._v("Example illustation for reference")]):t._e(),a("div",{ref:"preview",class:"preview "+(t.isHorizontal?"horizontal":"vertical"),attrs:{id:"preview"},domProps:{innerHTML:t._s(t.vector)}})]),a("div",{staticClass:"colors"},[t.hasJustStroke?t._e():a("div",{staticClass:"stroke"},[a("label",{staticClass:"title",attrs:{for:"strokeHex"}},[t._v(" Stroke ")]),a("div",{staticClass:"color-options"},[a("div",{staticClass:"rounds"},t._l(t.strokeColor,(function(e,s){return a("span",{key:s,class:"round "+(t.strokeHexValue===e?"selected":""),style:{backgroundColor:""+e},on:{click:function(a){return t.selectStroke(e)}}})})),0),a("div",{staticClass:"color-title-container"},[a("label",{staticClass:"title",attrs:{for:"strokeHex"}},[t._v(" Stroke ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeHexValue,expression:"strokeHexValue"}],staticClass:"hex",attrs:{name:"strokeHex",type:"text",placeholder:"HEX"},domProps:{value:t.strokeHexValue},on:{keyup:function(e){return t.selectStroke(t.strokeHexValue)},input:function(e){e.target.composing||(t.strokeHexValue=e.target.value)}}})])])]),a("div",{staticClass:"fill"},[a("label",{staticClass:"title",attrs:{for:"fillHex"}},[t._v(" "+t._s(t.hasJustStroke?"Stroke":"Background")+" ")]),a("div",{staticClass:"color-options"},[a("div",{staticClass:"rounds"},t._l(t.fillColor,(function(e,s){return a("span",{key:s,class:"round "+("none"===e?"transparent":"")+" "+(t.backgroundHexValue===e?"selected":""),style:{backgroundColor:""+e},on:{click:function(a){return t.selectFill(e)}}})})),0),a("div",{staticClass:"color-title-container"},[a("label",{staticClass:"title",attrs:{for:"fillHex"}},[t._v(" "+t._s(t.hasJustStroke?"Stroke":"Background")+" ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundHexValue,expression:"backgroundHexValue"}],staticClass:"hex",attrs:{name:"fillHex",type:"text",placeholder:"HEX"},domProps:{value:t.backgroundHexValue},on:{keyup:function(e){return t.selectFill(t.backgroundHexValue)},input:function(e){e.target.composing||(t.backgroundHexValue=e.target.value)}}})])])]),a("div",{staticClass:"download"},[a("div",{staticClass:"title-container"},[a("span",{staticClass:"title"},[t._v("Download PNG")]),t.customizeBulk?a("span",{staticClass:"subtitle"},[t._v("( "+t._s(t.vectors)+" illustrations)")]):t._e()]),a("div",{staticClass:"buttons"},[a("div",{staticClass:"btn-container"},[a("a",{staticClass:"btn-primary btn-download",attrs:{href:t.downloadPng("128")},on:{click:function(e){return t.handleDownloadPng("128")}}},[t._v("S")]),a("span",{staticClass:"size"},[t._v("128px")])]),a("div",{staticClass:"btn-container"},[a("a",{staticClass:"btn-primary btn-download",attrs:{href:t.downloadPng("256")},on:{click:function(e){return t.handleDownloadPng("256")}}},[t._v("M")]),a("span",{staticClass:"size"},[t._v("256px")])]),a("div",{staticClass:"btn-container"},[a("a",{staticClass:"btn-primary btn-download",attrs:{href:t.downloadPng("512")},on:{click:function(e){return t.handleDownloadPng("512")}}},[t._v("L")]),a("span",{staticClass:"size"},[t._v("512px")])])]),a("div",{staticClass:"buttons"},[a("div",{staticClass:"btn-container original"},[a("a",{staticClass:"btn-primary btn-download",attrs:{href:t.downloadPng("0")},on:{click:function(e){return t.handleDownloadPng("original")}}},[t._v("Original size")]),a("div",{staticClass:"size"},[t._v("Use this if you want to combine it with similar images")])])])])])])],2),a("footer",{staticClass:"tags"},[a("ul",{staticClass:"tags-list"},t._l(t.vectorTags,(function(e,s){return a("li",{key:s},[a("button",{staticClass:"popular-btn",on:{click:function(a){return t.searchVector(e)}}},[t._v(t._s(e))])])})),0)])])])])},l=[],c=(a("99af"),a("cb29"),{name:"modal",props:{vector:null,vectorId:null,customizeBulk:null,vectors:null,tags:null,isHorizontal:null,vectorTags:null},data:function(){return{fillColor:["#FFFFFF","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF","none"],strokeColor:["#1C2541","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF","#FFFFFF"],svgCode:null,strokeHexValue:"#1C2541",backgroundHexValue:"#FFFFFF",hasJustStroke:!1}},mounted:function(){document.body.style.width=document.body.clientWidth+"px",document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.position="fixed";var t=document.querySelectorAll("#preview path");1===t.length&&(this.hasJustStroke=!0)},methods:{close:function(){var t=document.body.style.top;this.$emit("close"),document.body.style.position=null,document.body.style.top=null,document.body.style.width=null,window.scrollTo(0,-1*parseInt(t||"0"))},selectStroke:function(t){7===t.length?(document.querySelectorAll("#preview path")[1].style.fill=t,this.strokeHexValue=t):document.querySelectorAll("#preview path")[1].style.fill="#1C2541"},selectFill:function(t){7===t.length||"none"===t?(document.querySelectorAll("#preview path")[0].style.fill=t,this.hasJustStroke&&"none"!==t?this.strokeHexValue=t:this.hasJustStroke&&"none"===t?document.querySelectorAll("#preview path")[0].style.fill="#1C2541":this.backgroundHexValue=t):document.querySelectorAll("#preview path")[0].style.fill="none"},downloadPng:function(t){var e="none"!==this.backgroundHexValue&&this.backgroundHexValue?this.backgroundHexValue.replace("#",""):"none";if(this.customizeBulk){var a=this.tags.length?this.tags.join():"all";return"https://cocomaterial.com/api/download/?tags=".concat(a,"&img_format=png&stroke=").concat(this.strokeHexValue?this.strokeHexValue.replace("#",""):"1C2541","&fill=").concat(e,"&size=").concat(t)}return"https://cocomaterial.com/api/download/?id=".concat(this.vectorId,"&img_format=png&stroke=").concat(this.strokeHexValue?this.strokeHexValue.replace("#",""):"1C2541","&fill=").concat(e,"&size=").concat(t)},handleDownloadPng:function(t){this.$matomo.trackEvent("downloads","png-".concat(t),this.vector.name)},searchVector:function(t){this.$emit("search",t)}}}),u=c,d=(a("6119"),a("2877")),g=Object(d["a"])(u,i,l,!1,null,"3eca082a",null),p=g.exports,h={name:"Results",components:{modal:p},data:function(){return{search:"",isModalVisible:!1,selectedVector:null,svgCode:null,autocompleteResults:[],customizeBulk:!1,isHorizontal:!0,showScrollToTop:!1,currentPage:1,pageSize:40,showNavBar:!1,mobileView:!1}},beforeMount:function(){!this.searchTags.length&&this.getTags(),this.$route.query.q?this.getVectorsByTag({tags:this.$route.query.q.split(","),currentPage:this.currentPage,pageSize:this.pageSize}):this.getVectors({currentPage:this.currentPage,pageSize:this.pageSize})},computed:Object(n["a"])(Object(n["a"])({},Object(r["d"])({filteredVectors:"filteredVectors",searchTags:"searchTags",tags:"tags",loading:"loading",totalResults:"totalResults",paginationArray:"paginationArray"})),{},{downloadAllSvg:function(){var t=this.searchTags.length?this.searchTags.join():"all";return"https://cocomaterial.com/api/download/?tags=".concat(t,"&img_format=svg")}}),mounted:function(){var t=this;window.addEventListener("scroll",(function(){window.innerHeight+window.scrollY>=1.5*window.innerHeight?t.showScrollToTop=!0:t.showScrollToTop=!1;var e=window.pageYOffset||document.documentElement.scrollTop;t.showNavBar=e>document.getElementById("formSearch").offsetTop+30,t.mobileView=window.innerWidth<768}))},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["b"])({getTags:"getTags",getVectorsByTag:"getVectorByTag",getVectors:"getVectors"})),Object(r["c"])({clearFilteredVectors:"clearFilteredVectors",updateSearchTags:"updateSearchTags",removeSearchTag:"removeSearchTag",clearSearchTags:"clearSearchTags"})),{},{showModal:function(t,e,a){this.selectedVector=t;var s=new XMLHttpRequest;s.open("GET",t.url,!1),s.send(null);var o=new Image;o.src=window.getComputedStyle(document.getElementById("".concat(a)),!1).backgroundImage.slice(4,-1).replace(/"/g,"");var n=o.height,r=o.width;this.isHorizontal=n<r,this.svgCode=JSON.parse(s.responseText).svg_content,this.customizeBulk=e,this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},resetAutocompleteResults:function(){this.autocompleteResults=[],document.getElementById("search").focus()},loaded:function(t){var e=new Image;e.src=window.getComputedStyle(document.getElementById("".concat(t)),!1).backgroundImage.slice(4,-1).replace(/"/g,"");var a=e.height,s=e.width;document.getElementById(t).className=a>s?"vertical":"horizontal"},autocompleteSearch:function(){var t=this;this.autocompleteResults=this.tags.filter((function(e){return e.slug.includes(t.search.toLocaleLowerCase())}))},focusAutocompleteResults:function(t,e){var a,s,o;event.stopPropagation(),event.preventDefault(),this.autocompleteResults.length&&("down"===e?(o=document.querySelectorAll("#results span")[t+1],a=o.offsetTop,s=o.clientHeight,document.querySelector("#results").scrollTop=a-s,o.focus({preventScroll:!0}),-1===t&&setTimeout((function(){document.querySelector("#results").scrollTop=0}),100)):"up"===e&&0===t?document.querySelector("#search").focus():(o=document.querySelectorAll("#results span")[t-1],a=o.offsetTop,s=o.clientHeight,document.querySelector("#results").scrollTop=a-s,o.focus({preventScroll:!0})))},closeAutocomplete:function(){this.autocompleteResults=[]},addTag:function(t){this.search="",this.$refs.search&&this.$refs.search.focus(),this.autocompleteResults=[],this.updateSearchTags(t.toLocaleLowerCase()),this.getVectorsByTag({tags:this.searchTags,currentPage:1,pageSize:this.pageSize}),this.$router.push({path:"/results",query:{q:this.searchTags.join(",")}})},removeTag:function(t){this.removeSearchTag(t),this.searchTags.length?(this.getVectorsByTag({tags:this.searchTags,currentPage:1,pageSize:this.pageSize}),this.$router.push({path:"/results",query:{q:this.searchTags.join(",")}})):(this.getVectors({currentPage:this.currentPage,pageSize:this.pageSize}),this.$router.push({path:"/results"}))},downloadSvg:function(t){var e=t.id;return"https://cocomaterial.com/api/download/?id=".concat(e,"&img_format=svg")},handleDownloadSvg:function(t){this.$matomo.trackEvent("downloads","svg",t.name)},searchVector:function(t){var e="string"===typeof t?t:this.search;""!==e&&this.addTag(e.toLocaleLowerCase())},handleSearchVector:function(t){this.clearSearchTags(),this.addTag(t.toLocaleLowerCase())},searchModalVector:function(t){this.clearSearchTags(),this.updateSearchTags(t.replace(/\s/g,"")),this.getVectorsByTag({tags:this.searchTags,currentPage:1,pageSize:this.pageSize}),this.$router.push({path:"/results",query:{q:this.searchTags.join(",")}}),this.isModalVisible=!1},showAll:function(){this.clearSearchTags(),this.getVectors({currentPage:1,pageSize:this.pageSize})},handleDelete:function(){""===this.search&&this.removeTag(this.searchTags.slice(-1).pop())},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},handlePagination:function(t){this.currentPage=t,this.searchTags.length?this.getVectorsByTag({tags:this.searchTags,currentPage:t,pageSize:this.pageSize}):this.getVectors({currentPage:t,pageSize:this.pageSize}),this.scrollToTop()}})},f=h,m=(a("fb05"),Object(d["a"])(f,s,o,!1,null,"31b319ab",null));e["default"]=m.exports},6119:function(t,e,a){"use strict";var s=a("f4d1"),o=a.n(s);o.a},"62b7":function(t,e,a){t.exports=a.p+"img/prev-disabled.73e5d9c2.svg"},"6c19":function(t,e,a){t.exports=a.p+"img/coco.6d579ec8.svg"},"81d5":function(t,e,a){"use strict";var s=a("7b0b"),o=a("23cb"),n=a("50c4");t.exports=function(t){var e=s(this),a=n(e.length),r=arguments.length,i=o(r>1?arguments[1]:void 0,a),l=r>2?arguments[2]:void 0,c=void 0===l?a:o(l,a);while(c>i)e[i++]=t;return e}},8316:function(t,e,a){t.exports=a.p+"img/team.8a749adf.svg"},9336:function(t,e,a){t.exports=a.p+"img/prev.c4859362.svg"},b0c0:function(t,e,a){var s=a("83ab"),o=a("9bf2").f,n=Function.prototype,r=n.toString,i=/^\s*function ([^ (]*)/,l="name";s&&!(l in n)&&o(n,l,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(t){return""}}})},b2f3:function(t,e,a){t.exports=a.p+"img/next.fa7fd740.svg"},b65b:function(t,e,a){"use strict";var s=a("14c4"),o=a.n(s);o.a},b79d:function(t,e,a){},b7a5:function(t,e,a){"use strict";var s=a("b79d"),o=a.n(s);o.a},b7f8:function(t,e,a){},cb29:function(t,e,a){var s=a("23e7"),o=a("81d5"),n=a("44d2");s({target:"Array",proto:!0},{fill:o}),n("fill")},d168:function(t,e,a){t.exports=a.p+"img/palette.301da43b.svg"},e59e:function(t,e,a){t.exports=a.p+"img/logo-mobile.582f4763.svg"},f4d1:function(t,e,a){},f970:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"team"},[s("h3",{staticClass:"title"},[t._v("The team")]),s("div",{staticClass:"bg"},[t._m(0),s("p",[t._v("The team members are:")]),s("div",{staticClass:"members"},[s("img",{attrs:{alt:"Team members illustration",src:a("8316")}}),s("div",{staticClass:"group"},t._l(t.members,(function(e,a){return s("a",{key:a,staticClass:"person",attrs:{href:e.link,target:"_blank"}},[s("p",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"position"},[t._v(t._s(e.position))])])})),0)])]),t._m(1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("CocoMaterial")]),t._v(" is an idea of Esther Moreno for "),a("a",{staticClass:"link",attrs:{href:"https://kaleidos.net/",target:"_blank"}},[t._v("Kaleidos’")]),t._v(" "),a("a",{staticClass:"link",attrs:{href:"https://piweek.com/",target:"_blank"}},[t._v("PIWEEK ")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"contact"},[t._v("Feel free to "),a("a",{staticClass:"highlight",attrs:{href:"mailto:soyesthermoreno@gmail.com"}},[t._v("contact us")])])}],n={name:"Team",data:function(){return{members:[{name:"Marina López",position:"Front-End Developer",link:"https://kaleidos.net/ff8a80/"},{name:"Natacha Menjibar",position:"UX/UI Designer",link:"https://kaleidos.net/492858/"},{name:"Esther Moreno",position:"Creator & Illustrator",link:"https://kaleidos.net/720b34/"},{name:"Yamila Moreno",position:"Back-End Developer",link:"https://kaleidos.net/D70A53/"},{name:"Ramiro Sánchez",position:"Front-End Developer",link:"https://kaleidos.net/E32841/"}]}}},r=n,i=(a("b7a5"),a("2877")),l=Object(i["a"])(r,s,o,!1,null,"5adee018",null);e["default"]=l.exports},fb05:function(t,e,a){"use strict";var s=a("b7f8"),o=a.n(s);o.a}}]);
//# sourceMappingURL=about.78f0a756.js.map