(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fdb"],{"0a49":function(t,n,e){var i=e("9b43"),o=e("626a"),a=e("4bf8"),r=e("9def"),u=e("cd1c");t.exports=function(t,n){var e=1==t,s=2==t,c=3==t,l=4==t,f=6==t,h=5==t||f,d=n||u;return function(n,u,g){for(var p,v,b=a(n),m=o(b),y=i(u,g,3),k=r(m.length),w=0,x=e?d(n,k):s?d(n,0):void 0;k>w;w++)if((h||w in m)&&(p=m[w],v=y(p,w,b),t))if(e)x[w]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return w;case 2:x.push(p)}else if(l)return!1;return f?-1:c||l?l:x}}},"0bfb":function(t,n,e){"use strict";var i=e("cb7c");t.exports=function(){var t=i(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},1169:function(t,n,e){var i=e("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"20d6":function(t,n,e){"use strict";var i=e("5ca1"),o=e("0a49")(6),a="findIndex",r=!0;a in[]&&Array(1)[a](function(){r=!1}),i(i.P+i.F*r,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(a)},"214f":function(t,n,e){"use strict";var i=e("32e9"),o=e("2aba"),a=e("79e5"),r=e("be13"),u=e("2b4c");t.exports=function(t,n,e){var s=u(t),c=e(r,s,""[t]),l=c[0],f=c[1];a(function(){var n={};return n[s]=function(){return 7},7!=""[t](n)})&&(o(String.prototype,t,l),i(RegExp.prototype,s,2==n?function(t,n){return f.call(t,this,n)}:function(t){return f.call(t,this)}))}},2531:function(t,n,e){},2833:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tag-maker"},[e("ul",[t._l(t.tags,function(n,i){return e("li",{key:n,class:{delete:t.tagShake},attrs:{onselectstart:"return false;"},on:{touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:function(n){t.onTouchend(i)}}},[e("span",[t._v(t._s(n))])])}),t.readonly?t._e():e("li",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],attrs:{type:"text",maxlength:"10",placeholder:"添加标签"},domProps:{value:t.tag},on:{keydown:function(n){t.onEnter(n)},focus:t.onFocus,blur:t.onBlur,input:function(n){n.target.composing||(t.tag=n.target.value)}}})])],2)])},o=[],a=(e("20d6"),{model:{prop:"value",event:"modified"},props:{value:{type:Array,default:function(){return[]}},readonly:{type:Boolean,default:!1}},watch:{value:function(){this.tags=this.value||[]}},data:function(){return{tags:[],tag:"",hold:null,tagShake:!1,deleteTagEnable:!1,stop:null}},mounted:function(){this.tags=this.value||[]},methods:{onTouchstart:function(){var t=this;if(this.readonly)return!1;this.tagShake||(this.hold=window.setTimeout(function(){t.tagShake=!0,t.deleteTagEnable=!1,t.stopShaking()},700))},onTouchmove:function(){this.hold&&window.clearTimeout(this.hold),this.deleteTagEnable=!1,this.stopShaking()},onTouchend:function(t){this.hold&&window.clearTimeout(this.hold),this.tagShake&&this.deleteTagEnable&&(this.tags.splice(t,1),this.jet(),this.stopShaking()),this.deleteTagEnable=!0},onEnter:function(t){var n=this;switch(t.keyCode){case 8:break;case 13:this.tag=this.tag.trim(),this.tag&&-1===this.tags.findIndex(function(t){return t===n.tag})&&this.tags.push(this.tag),this.tag="",this.jet();break;default:break}},onFocus:function(){this.tagShake=!1},onBlur:function(){this.tag=""},stopShaking:function(){var t=this;this.stop&&window.clearTimeout(this.stop),this.stop=window.setTimeout(function(){t.tagShake=!1},5e3)},jet:function(){this.$emit("modified",this.tags)}}}),r=a,u=(e("e740"),e("2877")),s=Object(u["a"])(r,i,o,!1,null,null,null);s.options.__file="Tag.vue";n["a"]=s.exports},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"6b54":function(t,n,e){"use strict";e("3846");var i=e("cb7c"),o=e("0bfb"),a=e("9e1e"),r="toString",u=/./[r],s=function(t){e("2aba")(RegExp.prototype,r,t,!0)};e("79e5")(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?s(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?o.call(t):void 0)}):u.name!=r&&s(function(){return u.call(this)})},8096:function(t,n,e){},a481:function(t,n,e){e("214f")("replace",2,function(t,n,e){return[function(i,o){"use strict";var a=t(this),r=void 0==i?void 0:i[n];return void 0!==r?r.call(i,a,o):e.call(String(a),i,o)},e]})},a753:function(t,n,e){},cd1c:function(t,n,e){var i=e("e853");t.exports=function(t,n){return new(i(t))(n)}},e740:function(t,n,e){"use strict";var i=e("2531"),o=e.n(i);o.a},e853:function(t,n,e){var i=e("d3f4"),o=e("1169"),a=e("2b4c")("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),i(n)&&(n=n[a],null===n&&(n=void 0))),void 0===n?Array:n}}}]);
//# sourceMappingURL=chunk-5fdb.js.map