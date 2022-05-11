/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,t,o)=>{o.r(t),o.d(t,{Properties:()=>n,VariableDescriptor:()=>r,bootstrapExtra:()=>J,findLayerBoundaries:()=>c,findLayersBoundaries:()=>u,getAllVariables:()=>i,getLayersMap:()=>l,initDoors:()=>$,initPropertiesTemplates:()=>L,initVariableActionLayer:()=>F});class n{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const o=this.get(e);if(void 0!==o){if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const o=this.get(e);if(void 0===o)throw new Error('Property "'+e+'" is missing');if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class r{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new n(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function i(){const e=await WA.room.getTiledMap(),t=new Map;return s(e.layers,t),t}function s(e,t){for(const o of e)if("objectgroup"===o.type)for(const e of o.objects)"variable"===e.type&&t.set(e.name,new r(e));else"group"===o.type&&s(o.layers,t)}let a;async function l(){return void 0===a&&(a=async function(){return function(e){const t=new Map;return p(e.layers,"",t),t}(await WA.room.getTiledMap())}()),a}function p(e,t,o){for(const n of e)"group"===n.type?p(n.layers,t+n.name+"/",o):(n.name=t+n.name,o.set(n.name,n))}function c(e){let t=1/0,o=1/0,n=0,r=0;const i=e.data;if("string"==typeof i)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let a=0;a<e.width;a++)0!==i[a+s*e.width]&&(t=Math.min(t,a),r=Math.max(r,a),o=Math.min(o,s),n=Math.max(n,s));return{top:o,left:t,right:r+1,bottom:n+1}}function u(e){let t=1/0,o=1/0,n=0,r=0;for(const i of e){const e=c(i);e.left<t&&(t=e.left),e.top<o&&(o=e.top),e.right>r&&(r=e.right),e.bottom>n&&(n=e.bottom)}return{top:o,left:t,right:r,bottom:n}}var g=Object.prototype.toString,f=Array.isArray||function(e){return"[object Array]"===g.call(e)};function h(e){return"function"==typeof e}function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function y(e,t){return null!=e&&"object"==typeof e&&t in e}var m=RegExp.prototype.test,v=/\S/;var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},w=/\s*/,A=/\s+/,W=/\s*=/,S=/\s*\}/,C=/#|\^|\/|>|\{|&|=|!/;function E(e){this.string=e,this.tail=e,this.pos=0}function T(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function x(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}E.prototype.eos=function(){return""===this.tail},E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var o=t[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},E.prototype.scanUntil=function(e){var t,o=this.tail.search(e);switch(o){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,o),this.tail=this.tail.substring(o)}return this.pos+=t.length,t},T.prototype.push=function(e){return new T(e,this)},T.prototype.lookup=function(e){var t,o,n,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{for(var i,s,a,l=this,p=!1;l;){if(e.indexOf(".")>0)for(i=l.view,s=e.split("."),a=0;null!=i&&a<s.length;)a===s.length-1&&(p=y(i,s[a])||(o=i,n=s[a],null!=o&&"object"!=typeof o&&o.hasOwnProperty&&o.hasOwnProperty(n))),i=i[s[a++]];else i=l.view[e],p=y(l.view,e);if(p){t=i;break}l=l.parent}r[e]=t}return h(t)&&(t=t.call(this.view)),t},x.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(e,t){var o=this.templateCache,n=e+":"+(t||k.tags).join(":"),r=void 0!==o,i=r?o.get(n):void 0;return null==i&&(i=function(e,t){if(!e)return[];var o,n,r,i,s=!1,a=[],l=[],p=[],c=!1,u=!1,g="",h=0;function y(){if(c&&!u)for(;p.length;)delete l[p.pop()];else p=[];c=!1,u=!1}function b(e){if("string"==typeof e&&(e=e.split(A,2)),!f(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(d(e[0])+"\\s*"),n=new RegExp("\\s*"+d(e[1])),r=new RegExp("\\s*"+d("}"+e[1]))}b(t||k.tags);for(var T,x,P,V,M,L,G=new E(e);!G.eos();){if(T=G.pos,P=G.scanUntil(o))for(var U=0,B=P.length;U<B;++U)i=V=P.charAt(U),function(e,t){return m.call(e,t)}(v,i)?(u=!0,s=!0,g+=" "):(p.push(l.length),g+=V),l.push(["text",V,T,T+1]),T+=1,"\n"===V&&(y(),g="",h=0,s=!1);if(!G.scan(o))break;if(c=!0,x=G.scan(C)||"name",G.scan(w),"="===x?(P=G.scanUntil(W),G.scan(W),G.scanUntil(n)):"{"===x?(P=G.scanUntil(r),G.scan(S),G.scanUntil(n),x="&"):P=G.scanUntil(n),!G.scan(n))throw new Error("Unclosed tag at "+G.pos);if(M=">"==x?[x,P,T,G.pos,g,h,s]:[x,P,T,G.pos],h++,l.push(M),"#"===x||"^"===x)a.push(M);else if("/"===x){if(!(L=a.pop()))throw new Error('Unopened section "'+P+'" at '+T);if(L[1]!==P)throw new Error('Unclosed section "'+L[1]+'" at '+T)}else"name"===x||"{"===x||"&"===x?u=!0:"="===x&&b(P)}if(y(),L=a.pop())throw new Error('Unclosed section "'+L[1]+'" at '+G.pos);return function(e){for(var t,o=[],n=o,r=[],i=0,s=e.length;i<s;++i)switch((t=e[i])[0]){case"#":case"^":n.push(t),r.push(t),n=t[4]=[];break;case"/":r.pop()[5]=t[2],n=r.length>0?r[r.length-1][4]:o;break;default:n.push(t)}return o}(function(e){for(var t,o,n=[],r=0,i=e.length;r<i;++r)(t=e[r])&&("text"===t[0]&&o&&"text"===o[0]?(o[1]+=t[1],o[3]=t[3]):(n.push(t),o=t));return n}(l))}(e,t),r&&o.set(n,i)),i},x.prototype.render=function(e,t,o,n){var r=this.getConfigTags(n),i=this.parse(e,r),s=t instanceof T?t:new T(t,void 0);return this.renderTokens(i,s,o,e,n)},x.prototype.renderTokens=function(e,t,o,n,r){for(var i,s,a,l="",p=0,c=e.length;p<c;++p)a=void 0,"#"===(s=(i=e[p])[0])?a=this.renderSection(i,t,o,n,r):"^"===s?a=this.renderInverted(i,t,o,n,r):">"===s?a=this.renderPartial(i,t,o,r):"&"===s?a=this.unescapedValue(i,t):"name"===s?a=this.escapedValue(i,t,r):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(l+=a);return l},x.prototype.renderSection=function(e,t,o,n,r){var i=this,s="",a=t.lookup(e[1]);if(a){if(f(a))for(var l=0,p=a.length;l<p;++l)s+=this.renderTokens(e[4],t.push(a[l]),o,n,r);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)s+=this.renderTokens(e[4],t.push(a),o,n,r);else if(h(a)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(t.view,n.slice(e[3],e[5]),(function(e){return i.render(e,t,o,r)})))&&(s+=a)}else s+=this.renderTokens(e[4],t,o,n,r);return s}},x.prototype.renderInverted=function(e,t,o,n,r){var i=t.lookup(e[1]);if(!i||f(i)&&0===i.length)return this.renderTokens(e[4],t,o,n,r)},x.prototype.indentPartial=function(e,t,o){for(var n=t.replace(/[^ \t]/g,""),r=e.split("\n"),i=0;i<r.length;i++)r[i].length&&(i>0||!o)&&(r[i]=n+r[i]);return r.join("\n")},x.prototype.renderPartial=function(e,t,o,n){if(o){var r=this.getConfigTags(n),i=h(o)?o(e[1]):o[e[1]];if(null!=i){var s=e[6],a=e[5],l=e[4],p=i;0==a&&l&&(p=this.indentPartial(i,l,s));var c=this.parse(p,r);return this.renderTokens(c,t,o,p,n)}}},x.prototype.unescapedValue=function(e,t){var o=t.lookup(e[1]);if(null!=o)return o},x.prototype.escapedValue=function(e,t,o){var n=this.getConfigEscape(o)||k.escape,r=t.lookup(e[1]);if(null!=r)return"number"==typeof r&&n===k.escape?String(r):n(r)},x.prototype.rawValue=function(e){return e[1]},x.prototype.getConfigTags=function(e){return f(e)?e:e&&"object"==typeof e?e.tags:void 0},x.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!f(e)?e.escape:void 0};var k={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){P.templateCache=e},get templateCache(){return P.templateCache}},P=new x;k.clearCache=function(){return P.clearCache()},k.parse=function(e,t){return P.parse(e,t)},k.render=function(e,t,o,n){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(f(r=e)?"array":typeof r)+'" was given as the first argument for mustache#render(template, view, partials)');var r;return P.render(e,t,o,n)},k.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return b[e]}))},k.Scanner=E,k.Context=T,k.Writer=x;const V=k;class M{constructor(e,t){this.template=e,this.state=t,this.ast=V.parse(e)}getValue(){return void 0===this.value&&(this.value=V.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const o of this.getUsedVariables().values())t.push(this.state.onVariableChange(o).subscribe((()=>{const t=V.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const o of e){const e=o[0],n=o[1],r=o[4];["name","&","#","^"].includes(e)&&t.add(n),void 0!==r&&"string"!=typeof r&&this.recursiveGetUsedVariables(r,t)}}}async function L(){var e;const t=await l();for(const[o,n]of t.entries()){const t=null!==(e=n.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const t=new M(e.value,WA.state);if(t.isPureString())continue;const n=t.getValue();G(o,e.name,n),t.onChange((t=>{G(o,e.name,t)}))}}}function G(e,t,o){WA.room.setProperty(e,t,o),"visible"===t&&(o?WA.room.showLayer(e):WA.room.hideLayer(e))}const U="https://unpkg.com/@workadventure/scripting-api-extra@1.1.1/dist";let B,j,O=0,Z=0;function R(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function z(e){return e.map((e=>B.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function I(e){const t=u(z(e)),o=32*((t.right-t.left)/2+t.left),n=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(O-o,2)+Math.pow(Z-n,2))}function N(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=I(e.properties.mustGetString("openLayer").split("\n"));if(t>o)return;n=1-t/o}t&&WA.sound.loadSound(t).play({volume:n})}(e):function(e){const t=e.properties.getString("closeSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=I(e.properties.mustGetString("closeLayer").split("\n"));if(t>o)return;n=1-t/o}t&&WA.sound.loadSound(t).play({volume:n})}(e),R(e)})),R(e)}function _(e,t,o,n){const r=e.name;let i,s,a=!1;const l=o.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+r+'"');const p=o.getString("tag");let c=!0;p&&!WA.player.tags.includes(p)&&(c=!1);const g=!!p;function f(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=o.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,h()}})}function h(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=o.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,f()}})}function d(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterZone(l,(()=>{a=!0,o.getBoolean("autoOpen")&&c?WA.state[t.name]=!0:WA.state[t.name]||(!g||c)&&g||!o.getString("code")&&!o.getString("codeVariable")?c&&(WA.state[t.name]?f():h()):function(e){const o=u(z(t.properties.mustGetString("closeLayer").split("\n")));s=WA.room.website.create({name:"doorKeypad"+e,url:n+"/keypad.html#"+encodeURIComponent(e),position:{x:32*o.right,y:32*o.top,width:96,height:128},allowApi:!0})}(r)})),WA.room.onLeaveZone(l,(()=>{a=!1,o.getBoolean("autoClose")&&(WA.state[t.name]=!1),i&&i.remove(),d()})),WA.state.onVariableChange(t.name).subscribe((()=>{a&&(o.getBoolean("autoClose")||!0!==WA.state[t.name]||f(),s&&!0===WA.state[t.name]&&d(),o.getBoolean("autoOpen")||!1!==WA.state[t.name]||h())}))}function D(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=Math.sqrt(Math.pow(e.x-O,2)+Math.pow(e.y-Z,2));if(t>o)return;n=1-t/o}WA.sound.loadSound(t).play({volume:n})}(e)}))}function q(e,t){let o;const n=t.mustGetString("zone"),r=t.getString("bellPopup");WA.room.onEnterZone(n,(()=>{var n;r?o=WA.ui.openPopup(r,"",[{label:null!==(n=t.getString("bellButtonText"))&&void 0!==n?n:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(n,(()=>{o&&(o.close(),o=void 0)}))}async function $(e){e=null!=e?e:U;const t=await i();B=await l();for(const e of t.values())e.properties.get("door")&&N(e),e.properties.get("bell")&&D(e);for(const o of B.values()){const r=new n(o.properties),i=r.getString("doorVariable");if(i&&"tilelayer"===o.type){const n=t.get(i);if(void 0===n)throw new Error('Cannot find variable "'+i+'" referred in the "doorVariable" property of layer "'+o.name+'"');_(o,n,r,e)}const s=r.getString("bellVariable");s&&q(s,r)}WA.player.onPlayerMove((e=>{O=e.x,Z=e.y}))}function F(e){const t=e.getString("bindVariable");if(t){const o=e.getString("zone");if(!o)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,o,n,r,i){i&&!WA.player.tags.includes(i)||(void 0!==o&&WA.room.onEnterZone(t,(()=>{r||(WA.state[e]=o)})),void 0!==n&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=n})))}(t,o,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function K(e,t){let o;const n=t.getString("zone");if(!n)throw new Error('Missing "zone" property');const r=t.getString("openConfigAdminTag");let i=!0;function s(){WA.nav.closeCoWebSite()}r&&!WA.player.tags.includes(r)&&(i=!1),WA.room.onEnterZone(n,(()=>{const n=t.getString("openConfigTrigger");var r;i&&(n&&"onaction"===n?(o&&o.remove(),o=WA.ui.displayActionMessage({message:null!==(r=t.getString("openConfigTriggerMessage"))&&void 0!==r?r:"Press SPACE or touch here to configure",callback:()=>H(e)})):H(e))})),WA.room.onLeaveZone(n,(()=>{o?(o.remove(),s()):s()}))}function H(e){const t=e?"#"+e:"";WA.nav.openCoWebSite(U+"/configuration.html"+t,!0)}function J(){return WA.onInit().then((()=>{$().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())F(new n(t.properties))}().catch((e=>console.error(e))),async function(e){const t=await WA.room.getTiledMap();e=null!=e?e:U,j=await l();const o=t.layers.find((e=>"configuration"===e.name));if(o){const t=new n(o.properties).getString("tag");t&&!WA.player.tags.includes(t)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of j.values()){const t=new n(e.properties),o=t.getString("openConfig");o&&"tilelayer"===e.type&&K(o,t)}}}().catch((e=>console.error(e))),L().catch((e=>console.error(e)))}))}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;(0,o(733).bootstrapExtra)().catch((e=>console.error(e)));const t=(new Date).toLocaleTimeString("de-de",{timeStyle:"short"});WA.room.onEnterZone("clock",(()=>{e=WA.ui.openPopup("clockPopup",t,[])})),WA.room.onLeaveZone("clock",(function(){void 0!==e&&(e.close(),e=void 0)}));let n=0;const r=["Use the curser keys to move around.","Walk up to another player to start an A/V call.","Up to 4 players can talk that way.","Some areas start a video conference, where more than 4 players can talk.","Now find out which door opens for you!"];function i(e){e.close(),n++,n<r.length?WA.ui.openPopup("popupTutorial",r[n],[{label:"Got it!",callback:i}]):WA.controls.restorePlayerControls()}WA.room.onEnterZone("start",(()=>{WA.controls.disablePlayerControls(),WA.ui.openPopup("popupTutorial",r[n],[{label:"Got it",callback:i}])}))})()})();
//# sourceMappingURL=script.js.map