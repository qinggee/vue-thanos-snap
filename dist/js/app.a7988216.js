(function(e){function t(t){for(var a,o,i=t[0],c=t[1],d=t[2],p=0,l=[];p<i.length;p++)o=i[p],s[o]&&l.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-thanos-snap/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},1787:function(e,t,n){e.exports=n.p+"media/thanos_reverse_sound.e00730e1.mp3"},1965:function(e,t,n){e.exports=n.p+"img/5.39284a8c.jpg"},"1c86":function(e,t,n){e.exports=n.p+"img/Drax.0430b598.jpg"},"2bdc":function(e,t,n){e.exports=n.p+"media/thanos_dust_6.c1b80089.mp3"},"3d27":function(e,t,n){e.exports=n.p+"img/7.fc59f361.jpg"},"42c9":function(e,t,n){e.exports=n.p+"img/8.d2057db6.jpg"},"4e85":function(e,t,n){e.exports=n.p+"img/Nebula.26f979eb.jpg"},5061:function(e,t,n){e.exports=n.p+"media/thanos_dust_2.7bd6a609.mp3"},"52f0":function(e,t,n){e.exports=n.p+"img/1.e5038bc9.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main",attrs:{id:"app"}},[n("Main")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"gauntlet"},[a("div",{staticClass:"gauntlet-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showSnap,expression:"showSnap"}],staticClass:"gauntlet-item",class:e.snaping?"snaping":"",attrs:{id:"gauntlet-snap"},on:{click:e.snapHandle}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showReverse,expression:"showReverse"}],staticClass:"gauntlet-item",class:e.reversing?"reversing":"",attrs:{id:"gauntlet-reverse"},on:{click:e.reverseHandle}})])]),a("Content",{attrs:{heroes:e.heroes}}),a("audio",{ref:"snap",attrs:{src:n("97aa"),preload:""}}),a("audio",{ref:"reverse",attrs:{src:n("1787"),preload:""}}),e._l(6,function(e){return a("audio",{key:e,attrs:{src:n("e679")("./thanos_dust_"+e+".mp3"),preload:"",id:"dust_"+e}})})],2)},i=[],c=(n("3b2b"),n("a481"),n("75fc")),d=(n("ac6a"),n("55dd"),n("96cf"),n("3b8d")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},e._l(e.heroes,function(t,a){return n("div",{key:a,staticClass:"item",attrs:{id:t.id}},[n("div",{staticClass:"item-body"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.src,alt:""}})]),n("div",{staticClass:"info"},[e._v(e._s(t.name))])])])}),0)},p=[],l={name:"Content",props:{heroes:{type:Array,default:function(){return[]}}}},f=l,h=n("2877"),m=Object(h["a"])(f,u,p,!1,null,null,null),g=m.exports,v=n("5f03"),b=n.n(v),w=[{id:1,name:"Iron Man",src:n("52f0"),show:!0},{id:2,name:"Black Widow",src:n("96f2"),show:!0},{id:3,name:"Captain America",src:n("80f2"),show:!0},{id:4,name:"Spider Man",src:n("bfdd"),show:!0},{id:5,name:"Thor",src:n("1965"),show:!0},{id:6,name:"Hulk",src:n("b00a"),show:!0},{id:7,name:"Black Panther",src:n("3d27"),show:!0},{id:8,name:"Doctor Stranger",src:n("42c9"),show:!0},{id:9,name:"Clint",src:n("604e"),show:!0},{id:10,name:"Drax",src:n("1c86"),show:!0},{id:11,name:"Groot",src:n("d259"),show:!0},{id:12,name:"Loki",src:n("601d"),show:!0},{id:13,name:"Winter",src:n("b70c"),show:!0},{id:14,name:"Mantis",src:n("921d"),show:!0},{id:15,name:"Nebula",src:n("4e85"),show:!0},{id:16,name:"Vision",src:n("dda7"),show:!0}],x={name:"Gauntlet",data:function(){return{showSnap:!0,showReverse:!1,snaping:!1,reversing:!1,heroHidedIds:[],heroes:w}},methods:{scrollToAnchor:function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}},sleep:function(e){return new Promise(function(t){setTimeout(function(){t()},e||1e3)})},snapHandle:function(){var e=this;this.snaping||this.reversing||(this.snaping=!0,this.playAudio("snap"),setTimeout(Object(d["a"])(regeneratorRuntime.mark(function t(){var n,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.showReverse=!0,e.showSnap=!1,e.heroHidedIds=e.heroes.slice(0).sort(function(){return.5-Math.random()}).slice(0,Math.ceil(e.heroes.length/2)).map(function(e){return e.id}),n=0;case 4:if(!(n<e.heroHidedIds.length)){t.next=14;break}return a=e.heroHidedIds[n],s=document.getElementById(a),e.scrollToAnchor(a),t.next=9,e.snapToDust(s);case 9:return t.next=11,e.sleep();case 11:n++,t.next=4;break;case 14:e.snaping=!1;case 15:case"end":return t.stop()}},t)})),1500))},reverseHandle:function(){var e=this;this.snaping||this.reversing||(this.reversing=!0,this.playAudio("reverse"),setTimeout(function(){e.showSnap=!0,e.showReverse=!1,e.heroHidedIds.forEach(function(t){var n=document.getElementById(t);n.style.visibility="visible",e.addClass(n,"time")}),e.reversing=!1},1500))},playAudio:function(e){if(["snap","reverse"].indexOf(e)>-1){var t=this.$refs[e];t&&t.play()}else{var n=e||Math.floor(6*Math.random()+1),a=document.getElementById("dust_".concat(n));a&&a.play()}},generateFrames:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32,n=e.width,a=e.height,s=e.getContext("2d"),r=s.getImageData(0,0,n,a),o=Object(c["a"])(Array(t)).map(function(e,t){return s.createImageData(n,a)}),i=0;i<n;++i)for(var d=0;d<a;++d)for(var u=0;u<2;++u)for(var p=Math.floor(t*(Math.random()+2*i/n)/3),l=4*(d*n+i),f=0;f<4;++f)o[p].data[l+f]=r.data[l+f];return o.map(function(t){var n=e.cloneNode(!0);return n.getContext("2d").putImageData(t,0,0),n})},replaceElementVisually:function(e,t){this.playAudio();var n=e.offsetParent;t.style.top="".concat(e.offsetTop,"px"),t.style.left="".concat(e.offsetLeft,"px"),t.style.width="".concat(e.offsetWidth,"px"),t.style.height="".concat(e.offsetHeight,"px"),n.appendChild(t),e.style.visibility="hidden"},snapToDust:function(e){var t=this;return new Promise(function(n){b()(e,{allowTaint:!0}).then(function(a){var s=document.createElement("div");s.classList.add("dust-container");var r=t.generateFrames(a);r.forEach(function(e,t){e.style.transitionDelay="".concat(1.35*t/r.length,"s"),s.appendChild(e)}),t.replaceElementVisually(e,s),s.offsetLeft,r.forEach(function(e){var t=2*Math.PI*(Math.random()-.5);e.style.transform="rotate(".concat(15*(Math.random()-.5),"deg) translate(").concat(60*Math.cos(t),"px, ").concat(30*Math.sin(t),"px)\nrotate(").concat(15*(Math.random()-.5),"deg)"),e.style.opacity=0}),n()})})},addClass:function(e,t){this.hasClass(e,t)||(e.className=""==e.className?t:e.className+" "+t)},hasClass:function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")}},components:{Content:g}},_=x,y=Object(h["a"])(_,o,i,!1,null,null,null),j=y.exports,C={name:"app",components:{Main:j}},M=C,O=(n("034f"),Object(h["a"])(M,s,r,!1,null,null,null)),k=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(k)}}).$mount("#app")},"601d":function(e,t,n){e.exports=n.p+"img/Loki.961d2e35.jpeg"},"604e":function(e,t,n){e.exports=n.p+"img/Clint.29e5d648.jpeg"},"64a9":function(e,t,n){},"80f2":function(e,t,n){e.exports=n.p+"img/3.ca958f09.jpg"},"8d92":function(e,t,n){e.exports=n.p+"media/thanos_dust_5.eed1dd08.mp3"},"921d":function(e,t,n){e.exports=n.p+"img/Mantis.b6d329f5.jpg"},"96f2":function(e,t,n){e.exports=n.p+"img/2.79dcf1ab.jpg"},"97aa":function(e,t,n){e.exports=n.p+"media/thanos_snap_sound.b746c7d7.mp3"},b00a:function(e,t,n){e.exports=n.p+"img/6.8f106a4b.jpg"},b70c:function(e,t,n){e.exports=n.p+"img/Winter.98fcc085.jpg"},bfdd:function(e,t,n){e.exports=n.p+"img/4.4ea4c2e5.jpg"},cb36:function(e,t,n){e.exports=n.p+"media/thanos_dust_3.94ca0f5b.mp3"},cc40:function(e,t,n){e.exports=n.p+"media/thanos_dust_4.adf013fc.mp3"},d259:function(e,t,n){e.exports=n.p+"img/Groot.65f71a77.jpg"},d544:function(e,t,n){e.exports=n.p+"media/thanos_dust_1.ad4820bd.mp3"},dda7:function(e,t,n){e.exports=n.p+"img/Vision.0b7ac4bf.jpg"},e679:function(e,t,n){var a={"./thanos_dust_1.mp3":"d544","./thanos_dust_2.mp3":"5061","./thanos_dust_3.mp3":"cb36","./thanos_dust_4.mp3":"cc40","./thanos_dust_5.mp3":"8d92","./thanos_dust_6.mp3":"2bdc"};function s(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="e679"}});
//# sourceMappingURL=app.a7988216.js.map