import{E as xi,d as x,G as De,H as b,J as N,K as Pi,L as bo,M as jt,N as sr,O as wc,P as Ic,Q as Ec,b as g,F as gt,g as Y,i as qe,e as ot,m as se,f as Tt,p as Co,u as re,R as ln,S as Yn,T as wo,U as Io,V as cn,W as ye,X as Di,Y as un,Z as Eo,$ as Sc,a0 as So,a1 as Ft,a2 as Tc,a3 as To,k as Le,a4 as kc,a5 as ee,a6 as ke,a7 as Rc,a8 as Nc,a9 as Ac,aa as xc,I as Fe,ab as Ie,ac as is,ad as Pc,ae as Dc,n as Kn,af as rr,ag as Oc,ah as Qn,ai as Mc,aj as or,ak as Gt,al as Lc,am as ar,j as ss,w as pt,l as rs,t as Fc,an as os,h as dn,ao as ko,r as Ro,ap as as,aq as Xn,c as ls,a as Bc,ar as et,as as Vc,at as No,au as lr,av as $c,aw as Wc,ax as Uc}from"./index-BV9E7uiT.js";const Hc=["top","bottom"],zc=["start","end","left","right"];function jc(t,e){let[n,i]=t.split(" ");return i||(i=xi(Hc,n)?"start":xi(zc,n)?"top":"center"),{side:cr(n,e),align:cr(i,e)}}function cr(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}class gi{constructor(e){let{x:n,y:i,width:s,height:r}=e;this.x=n,this.y=i,this.width=s,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Gc(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),i=n.transform;if(i){let s,r,o,a,l;if(i.startsWith("matrix3d("))s=i.slice(9,-1).split(/, /),r=Number(s[0]),o=Number(s[5]),a=Number(s[12]),l=Number(s[13]);else if(i.startsWith("matrix("))s=i.slice(7,-1).split(/, /),r=Number(s[0]),o=Number(s[3]),a=Number(s[4]),l=Number(s[5]);else return new gi(e);const c=n.transformOrigin,u=e.x-a-(1-r)*parseFloat(c),d=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),h=r?e.width/r:t.offsetWidth+1,f=o?e.height/o:t.offsetHeight+1;return new gi({x:u,y:d,width:h,height:f})}else return new gi(e)}function qc(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let i;try{i=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(s=>{i.onfinish=()=>{s(i)}})),i}const Yc="cubic-bezier(0.4, 0, 0.2, 1)",Kc=()=>{};var ur={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(t,e){if(!t)throw kt(e)},kt=function(t){return new Error("Firebase Database ("+Ao.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Qc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},cs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Xc;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Po=function(t){const e=xo(t);return cs.encodeByteArray(e,!0)},Rn=function(t){return Po(t).replace(/\./g,"")},Oi=function(t){try{return cs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){return Do(void 0,t)}function Do(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zc(n)||(t[n]=Do(t[n],e[n]));return t}function Zc(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=()=>eu().__FIREBASE_DEFAULTS__,nu=()=>{if(typeof process>"u"||typeof ur>"u")return;const t=ur.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oi(t[1]);return e&&JSON.parse(e)},Oo=()=>{try{return Kc()||tu()||nu()||iu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},su=t=>{var e,n;return(n=(e=Oo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ru=t=>{const e=su(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Mo=()=>{var t;return(t=Oo())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rn(JSON.stringify(n)),Rn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(au())}function lu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uu(){return Ao.NODE_ADMIN===!0}function Fo(){try{return typeof indexedDB=="object"}catch{return!1}}function Bo(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function du(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="FirebaseError";class at extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=hu,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?fu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,i)}}function fu(t,e){return t.replace(gu,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const gu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){return JSON.parse(t)}function K(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=qt(Oi(r[0])||""),n=qt(Oi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},_u=function(t){const e=Vo(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},mu=function(t){const e=Vo(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Yt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(dr(r)&&dr(o)){if(!Yt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function dr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function yt(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=1e3,Cu=2,wu=4*60*60*1e3,Iu=.5;function hr(t,e=bu,n=Cu){const i=e*Math.pow(n,t),s=Math.round(Iu*i*(Math.random()-.5)*2);return Math.min(wu,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class Ae{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new we;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tu(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Su(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Su(t){return t===Ke?void 0:t}function Tu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Eu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const Ru={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Nu=$.INFO,Au={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},xu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Au[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class us{constructor(e){this.name=e,this._logLevel=Nu,this._logHandler=xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ru[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Pu=(t,e)=>e.some(n=>t instanceof n);let fr,gr;function Du(){return fr||(fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ou(){return gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $o=new WeakMap,Li=new WeakMap,Wo=new WeakMap,_i=new WeakMap,ds=new WeakMap;function Mu(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Be(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$o.set(n,t)}).catch(()=>{}),ds.set(e,t),e}function Lu(t){if(Li.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Li.set(t,e)}let Fi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Li.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fu(t){Fi=t(Fi)}function Bu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(mi(this),e,...n);return Wo.set(i,e.sort?e.sort():[e]),Be(i)}:Ou().includes(t)?function(...e){return t.apply(mi(this),e),Be($o.get(this))}:function(...e){return Be(t.apply(mi(this),e))}}function Vu(t){return typeof t=="function"?Bu(t):(t instanceof IDBTransaction&&Lu(t),Pu(t,Du())?new Proxy(t,Fi):t)}function Be(t){if(t instanceof IDBRequest)return Mu(t);if(_i.has(t))return _i.get(t);const e=Vu(t);return e!==t&&(_i.set(t,e),ds.set(e,t)),e}const mi=t=>ds.get(t);function Uo(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Be(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Be(o.result),l.oldVersion,l.newVersion,Be(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $u=["get","getKey","getAll","getAllKeys","count"],Wu=["put","add","delete","clear"],pi=new Map;function _r(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pi.get(e))return pi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Wu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||$u.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return pi.set(e,r),r}Fu(t=>({...t,get:(e,n,i)=>_r(e,n)||t.get(e,n,i),has:(e,n)=>!!_r(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Hu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bi="@firebase/app",mr="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new us("@firebase/app"),zu="@firebase/app-compat",ju="@firebase/analytics-compat",Gu="@firebase/analytics",qu="@firebase/app-check-compat",Yu="@firebase/app-check",Ku="@firebase/auth",Qu="@firebase/auth-compat",Xu="@firebase/database",Ju="@firebase/data-connect",Zu="@firebase/database-compat",ed="@firebase/functions",td="@firebase/functions-compat",nd="@firebase/installations",id="@firebase/installations-compat",sd="@firebase/messaging",rd="@firebase/messaging-compat",od="@firebase/performance",ad="@firebase/performance-compat",ld="@firebase/remote-config",cd="@firebase/remote-config-compat",ud="@firebase/storage",dd="@firebase/storage-compat",hd="@firebase/firestore",fd="@firebase/vertexai",gd="@firebase/firestore-compat",_d="firebase",md="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="[DEFAULT]",pd={[Bi]:"fire-core",[zu]:"fire-core-compat",[Gu]:"fire-analytics",[ju]:"fire-analytics-compat",[Yu]:"fire-app-check",[qu]:"fire-app-check-compat",[Ku]:"fire-auth",[Qu]:"fire-auth-compat",[Xu]:"fire-rtdb",[Ju]:"fire-data-connect",[Zu]:"fire-rtdb-compat",[ed]:"fire-fn",[td]:"fire-fn-compat",[nd]:"fire-iid",[id]:"fire-iid-compat",[sd]:"fire-fcm",[rd]:"fire-fcm-compat",[od]:"fire-perf",[ad]:"fire-perf-compat",[ld]:"fire-rc",[cd]:"fire-rc-compat",[ud]:"fire-gcs",[dd]:"fire-gcs-compat",[hd]:"fire-fst",[gd]:"fire-fst-compat",[fd]:"fire-vertex","fire-js":"fire-js",[_d]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map,vd=new Map,$i=new Map;function pr(t,e){try{t.container.addComponent(e)}catch(n){xe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ue(t){const e=t.name;if($i.has(e))return xe.debug(`There were multiple attempts to register component ${e}.`),!1;$i.set(e,t);for(const n of An.values())pr(n,t);for(const n of vd.values())pr(n,t);return!0}function hn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yd(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ve=new Jn("app","Firebase",bd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=md;function Ho(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Vi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ve.create("bad-app-name",{appName:String(s)});if(n||(n=Mo()),!n)throw Ve.create("no-options");const r=An.get(s);if(r){if(Yt(n,r.options)&&Yt(i,r.config))return r;throw Ve.create("duplicate-app",{appName:s})}const o=new ku(s);for(const l of $i.values())o.addComponent(l);const a=new Cd(n,i,o);return An.set(s,a),a}function zo(t=Vi){const e=An.get(t);if(!e&&t===Vi&&Mo())return Ho();if(!e)throw Ve.create("no-app",{appName:t});return e}function Ee(t,e,n){var i;let s=(i=pd[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xe.warn(a.join(" "));return}Ue(new Ae(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firebase-heartbeat-database",Ed=1,Kt="firebase-heartbeat-store";let vi=null;function jo(){return vi||(vi=Uo(Id,Ed,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Kt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ve.create("idb-open",{originalErrorMessage:t.message})})),vi}async function Sd(t){try{const n=(await jo()).transaction(Kt),i=await n.objectStore(Kt).get(Go(t));return await n.done,i}catch(e){if(e instanceof at)xe.warn(e.message);else{const n=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xe.warn(n.message)}}}async function vr(t,e){try{const i=(await jo()).transaction(Kt,"readwrite");await i.objectStore(Kt).put(e,Go(t)),await i.done}catch(n){if(n instanceof at)xe.warn(n.message);else{const i=Ve.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xe.warn(i.message)}}}function Go(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=1024,kd=30;class Rd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ad(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>kd){const o=xd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){xe.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yr(),{heartbeatsToSend:i,unsentEntries:s}=Nd(this._heartbeatsCache.heartbeats),r=Rn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return xe.warn(n),""}}}function yr(){return new Date().toISOString().substring(0,10)}function Nd(t,e=Td){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),br(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),br(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ad{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fo()?Bo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function br(t){return Rn(JSON.stringify({version:2,heartbeats:t})).length}function xd(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){Ue(new Ae("platform-logger",e=>new Uu(e),"PRIVATE")),Ue(new Ae("heartbeat",e=>new Rd(e),"PRIVATE")),Ee(Bi,mr,t),Ee(Bi,mr,"esm2017"),Ee("fire-js","")}Pd("");var Dd="firebase",Od="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(Dd,Od,"app");const qo="@firebase/installations",hs="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=1e4,Ko=`w:${hs}`,Qo="FIS_v2",Md="https://firebaseinstallations.googleapis.com/v1",Ld=60*60*1e3,Fd="installations",Bd="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},tt=new Jn(Fd,Bd,Vd);function Xo(t){return t instanceof at&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo({projectId:t}){return`${Md}/projects/${t}/installations`}function Zo(t){return{token:t.token,requestStatus:2,expiresIn:Wd(t.expiresIn),creationTime:Date.now()}}async function ea(t,e){const i=(await e.json()).error;return tt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ta({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $d(t,{refreshToken:e}){const n=ta(t);return n.append("Authorization",Ud(e)),n}async function na(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Wd(t){return Number(t.replace("s","000"))}function Ud(t){return`${Qo} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Jo(t),s=ta(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Qo,appId:t.appId,sdkVersion:Ko},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await na(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Zo(c.authToken)}}else throw await ea("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=/^[cdef][\w-]{21}$/,Wi="";function Gd(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qd(t);return jd.test(n)?n:Wi}catch{return Wi}}function qd(t){return zd(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map;function ra(t,e){const n=ei(t);oa(n,e),Yd(n,e)}function oa(t,e){const n=sa.get(t);if(n)for(const i of n)i(e)}function Yd(t,e){const n=Kd();n&&n.postMessage({key:t,fid:e}),Qd()}let Xe=null;function Kd(){return!Xe&&"BroadcastChannel"in self&&(Xe=new BroadcastChannel("[Firebase] FID Change"),Xe.onmessage=t=>{oa(t.data.key,t.data.fid)}),Xe}function Qd(){sa.size===0&&Xe&&(Xe.close(),Xe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="firebase-installations-database",Jd=1,nt="firebase-installations-store";let yi=null;function fs(){return yi||(yi=Uo(Xd,Jd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nt)}}})),yi}async function xn(t,e){const n=ei(t),s=(await fs()).transaction(nt,"readwrite"),r=s.objectStore(nt),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ra(t,e.fid),e}async function aa(t){const e=ei(t),i=(await fs()).transaction(nt,"readwrite");await i.objectStore(nt).delete(e),await i.done}async function ti(t,e){const n=ei(t),s=(await fs()).transaction(nt,"readwrite"),r=s.objectStore(nt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ra(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t){let e;const n=await ti(t.appConfig,i=>{const s=Zd(i),r=eh(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Wi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Zd(t){const e=t||{fid:Gd(),registrationStatus:0};return la(e)}function eh(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(tt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=th(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nh(t)}:{installationEntry:e}}async function th(t,e){try{const n=await Hd(t,e);return xn(t.appConfig,n)}catch(n){throw Xo(n)&&n.customData.serverCode===409?await aa(t.appConfig):await xn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nh(t){let e=await Cr(t.appConfig);for(;e.registrationStatus===1;)await ia(100),e=await Cr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await gs(t);return i||n}return e}function Cr(t){return ti(t,e=>{if(!e)throw tt.create("installation-not-found");return la(e)})}function la(t){return ih(t)?{fid:t.fid,registrationStatus:0}:t}function ih(t){return t.registrationStatus===1&&t.registrationTime+Yo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh({appConfig:t,heartbeatServiceProvider:e},n){const i=rh(t,n),s=$d(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Ko,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await na(()=>fetch(i,a));if(l.ok){const c=await l.json();return Zo(c)}else throw await ea("Generate Auth Token",l)}function rh(t,{fid:e}){return`${Jo(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e=!1){let n;const i=await ti(t.appConfig,r=>{if(!ca(r))throw tt.create("not-registered");const o=r.authToken;if(!e&&lh(o))return r;if(o.requestStatus===1)return n=oh(t,e),r;{if(!navigator.onLine)throw tt.create("app-offline");const a=uh(r);return n=ah(t,a),a}});return n?await n:i.authToken}async function oh(t,e){let n=await wr(t.appConfig);for(;n.authToken.requestStatus===1;)await ia(100),n=await wr(t.appConfig);const i=n.authToken;return i.requestStatus===0?_s(t,e):i}function wr(t){return ti(t,e=>{if(!ca(e))throw tt.create("not-registered");const n=e.authToken;return dh(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ah(t,e){try{const n=await sh(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await xn(t.appConfig,i),n}catch(n){if(Xo(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await aa(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xn(t.appConfig,i)}throw n}}function ca(t){return t!==void 0&&t.registrationStatus===2}function lh(t){return t.requestStatus===2&&!ch(t)}function ch(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ld}function uh(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function dh(t){return t.requestStatus===1&&t.requestTime+Yo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t){const e=t,{installationEntry:n,registrationPromise:i}=await gs(e);return i?i.catch(console.error):_s(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(t,e=!1){const n=t;return await gh(n),(await _s(n,e)).token}async function gh(t){const{registrationPromise:e}=await gs(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){if(!t||!t.options)throw bi("App Configuration");if(!t.name)throw bi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bi(t){return tt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="installations",mh="installations-internal",ph=t=>{const e=t.getProvider("app").getImmediate(),n=_h(e),i=hn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},vh=t=>{const e=t.getProvider("app").getImmediate(),n=hn(e,ua).getImmediate();return{getId:()=>hh(n),getToken:s=>fh(n,s)}};function yh(){Ue(new Ae(ua,ph,"PUBLIC")),Ue(new Ae(mh,vh,"PRIVATE"))}yh();Ee(qo,hs);Ee(qo,hs,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="analytics",bh="firebase_id",Ch="origin",wh=60*1e3,Ih="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ms="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new us("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},de=new Jn("analytics","Analytics",Eh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t){if(!t.startsWith(ms)){const e=de.create("invalid-gtag-resource",{gtagURL:t});return ae.warn(e.message),""}return t}function da(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Th(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function kh(t,e){const n=Th("firebase-js-sdk-policy",{createScriptURL:Sh}),i=document.createElement("script"),s=`${ms}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Rh(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Nh(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await da(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){ae.error(a)}t("config",s,r)}async function Ah(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await da(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){ae.error(r)}}function xh(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await Ah(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await Nh(t,e,n,i,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){ae.error(a)}}return s}function Ph(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=xh(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Dh(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ms)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=30,Mh=1e3;class Lh{constructor(e={},n=Mh){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ha=new Lh;function Fh(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Bh(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Fh(i)},r=Ih.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw de.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Vh(t,e=ha,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw de.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw de.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Uh;return setTimeout(async()=>{a.abort()},wh),fa({appId:i,apiKey:s,measurementId:r},o,a,e)}async function fa(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=ha){var r;const{appId:o,measurementId:a}=t;try{await $h(i,e)}catch(l){if(a)return ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Bh(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Wh(c)){if(s.deleteThrottleMetadata(o),a)return ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?hr(n,s.intervalMillis,Oh):hr(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),ae.debug(`Calling attemptFetch again in ${u} millis`),fa(t,d,i,s)}}function $h(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(de.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Wh(t){if(!(t instanceof at)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Uh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Hh(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(){if(Fo())try{await Bo()}catch(t){return ae.warn(de.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ae.warn(de.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jh(t,e,n,i,s,r,o){var a;const l=Vh(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&ae.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ae.error(f)),e.push(l);const c=zh().then(f=>{if(f)return i.getId()}),[u,d]=await Promise.all([l,c]);Dh(r)||kh(r,u.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Ch]="firebase",h.update=!0,d!=null&&(h[bh]=d),s("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.app=e}_delete(){return delete Bt[this.app.options.appId],Promise.resolve()}}let Bt={},Ir=[];const Er={};let Ci="dataLayer",qh="gtag",Sr,ga,Tr=!1;function Yh(){const t=[];if(lu()&&t.push("This is a browser extension environment."),du()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=de.create("invalid-analytics-context",{errorInfo:e});ae.warn(n.message)}}function Kh(t,e,n){Yh();const i=t.options.appId;if(!i)throw de.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw de.create("no-api-key");if(Bt[i]!=null)throw de.create("already-exists",{id:i});if(!Tr){Rh(Ci);const{wrappedGtag:r,gtagCore:o}=Ph(Bt,Ir,Er,Ci,qh);ga=r,Sr=o,Tr=!0}return Bt[i]=jh(t,Ir,Er,e,Sr,Ci,n),new Gh(t)}function Qh(t=zo()){t=Te(t);const e=hn(t,Pn);return e.isInitialized()?e.getImmediate():Xh(t)}function Xh(t,e={}){const n=hn(t,Pn);if(n.isInitialized()){const s=n.getImmediate();if(Yt(e,n.getOptions()))return s;throw de.create("already-initialized")}return n.initialize({options:e})}function Jh(t,e,n,i){t=Te(t),Hh(ga,Bt[t.app.options.appId],e,n,i).catch(s=>ae.error(s))}const kr="@firebase/analytics",Rr="0.10.12";function Zh(){Ue(new Ae(Pn,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Kh(i,s,n)},"PUBLIC")),Ue(new Ae("analytics-internal",t,"PRIVATE")),Ee(kr,Rr),Ee(kr,Rr,"esm2017");function t(e){try{const n=e.getProvider(Pn).getImmediate();return{logEvent:(i,s,r)=>Jh(n,i,s,r)}}catch(n){throw de.create("interop-component-reg-failed",{reason:n})}}}Zh();var Nr={};const Ar="@firebase/database",xr="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a="";function ef(t){_a=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),K(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tf(e)}}catch{}return new nf},Je=ma("localStorage"),sf=ma("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new us("@firebase/database"),rf=function(){let t=1;return function(){return t++}}(),pa=function(t){const e=yu(t),n=new vu;n.update(e);const i=n.digest();return cs.encodeByteArray(i)},fn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=fn.apply(null,i):typeof i=="object"?e+=K(i):e+=i,e+=" "}return e};let Vt=null,Pr=!0;const of=function(t,e){p(!0,"Can't turn on custom loggers persistently."),_t.logLevel=$.VERBOSE,Vt=_t.log.bind(_t)},J=function(...t){if(Pr===!0&&(Pr=!1,Vt===null&&sf.get("logging_enabled")===!0&&of()),Vt){const e=fn.apply(null,t);Vt(e)}},gn=function(t){return function(...e){J(t,...e)}},Ui=function(...t){const e="FIREBASE INTERNAL ERROR: "+fn(...t);_t.error(e)},Pe=function(...t){const e=`FIREBASE FATAL ERROR: ${fn(...t)}`;throw _t.error(e),new Error(e)},ie=function(...t){const e="FIREBASE WARNING: "+fn(...t);_t.warn(e)},af=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ni=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},lf=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bt="[MIN_NAME]",it="[MAX_NAME]",lt=function(t,e){if(t===e)return 0;if(t===bt||e===it)return-1;if(e===bt||t===it)return 1;{const n=Dr(t),i=Dr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},cf=function(t,e){return t===e?0:t<e?-1:1},Dt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+K(e))},ps=function(t){if(typeof t!="object"||t===null)return K(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=K(e[i]),n+=":",n+=ps(t[e[i]]);return n+="}",n},va=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Z(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ya=function(t){p(!ni(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},uf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},df=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hf(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const ff=new RegExp("^-?(0*)\\d{1,10}$"),gf=-2147483648,_f=2147483647,Dr=function(t){if(ff.test(t)){const e=Number(t);if(e>=gf&&e<=_f)return e}return null},Rt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ie("Exception was thrown by user callback.",n),e},Math.floor(0))}},mf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$t=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,yd(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ie(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(J("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ie(e)}}class Sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="5",ba="v",Ca="s",wa="r",Ia="f",Ea=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sa="ls",Ta="p",Hi="ac",ka="websocket",Ra="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Je.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Je.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yf(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Aa(t,e,n){p(typeof e=="string","typeof type must == string"),p(typeof n=="object","typeof params must == object");let i;if(e===ka)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ra)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yf(t)&&(n.ns=t.namespace);const s=[];return Z(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.counters_={}}incrementCounter(e,n=1){Se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Jc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi={},Ii={};function ys(t){const e=t.toString();return wi[e]||(wi[e]=new bf),wi[e]}function Cf(t,e){const n=t.toString();return Ii[n]||(Ii[n]=e()),Ii[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Rt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="start",If="close",Ef="pLPCommand",Sf="pRTLPCB",xa="id",Pa="pw",Da="ser",Tf="cb",kf="seg",Rf="ts",Nf="d",Af="dframe",Oa=1870,Ma=30,xf=Oa-Ma,Pf=25e3,Df=3e4;class ht{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gn(e),this.stats_=ys(n),this.urlFn=l=>(this.appCheckToken&&(l[Hi]=this.appCheckToken),Aa(n,Ra,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Df)),lf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bs((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Or)this.id=a,this.password=l;else if(o===If)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Or]="t",i[Da]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Tf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ba]=vs,this.transportSessionId&&(i[Ca]=this.transportSessionId),this.lastSessionId&&(i[Sa]=this.lastSessionId),this.applicationId&&(i[Ta]=this.applicationId),this.appCheckToken&&(i[Hi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ea.test(location.hostname)&&(i[wa]=Ia);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ht.forceAllow_=!0}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){return ht.forceAllow_?!0:!ht.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uf()&&!df()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=K(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Po(n),s=va(i,xf);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Af]="t",i[xa]=e,i[Pa]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=K(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class bs{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rf(),window[Ef+this.uniqueCallbackIdentifier]=e,window[Sf+this.uniqueCallbackIdentifier]=n,this.myIFrame=bs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){J("frame writing exception"),a.stack&&J(a.stack),J(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||J("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xa]=this.myID,e[Pa]=this.myPW,e[Da]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ma+i.length<=Oa;){const o=this.pendingSegs.shift();i=i+"&"+kf+s+"="+o.seg+"&"+Rf+s+"="+o.ts+"&"+Nf+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Pf)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{J("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=16384,Mf=45e3;let Dn=null;typeof MozWebSocket<"u"?Dn=MozWebSocket:typeof WebSocket<"u"&&(Dn=WebSocket);class ve{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gn(this.connId),this.stats_=ys(n),this.connURL=ve.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[ba]=vs,typeof location<"u"&&location.hostname&&Ea.test(location.hostname)&&(o[wa]=Ia),n&&(o[Ca]=n),i&&(o[Sa]=i),s&&(o[Hi]=s),r&&(o[Ta]=r),Aa(e,ka,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Je.set("previous_websocket_failure",!0);try{let i;uu(),this.mySock=new Dn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ve.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Dn!==null&&!ve.forceDisallow_}static previouslyFailed(){return Je.isInMemoryStorage||Je.get("previous_websocket_failure")===!0}markConnectionHealthy(){Je.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=qt(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=K(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=va(n,Of);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Mf))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ve.responsesRequiredToBeHealthy=2;ve.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{static get ALL_TRANSPORTS(){return[ht,ve]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ve&&ve.isAvailable();let i=n&&!ve.previouslyFailed();if(e.webSocketOnly&&(n||ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ve];else{const s=this.transports_=[];for(const r of Qt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Qt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=6e4,Ff=5e3,Bf=10*1024,Vf=100*1024,Ei="t",Mr="d",$f="s",Lr="r",Wf="e",Fr="o",Br="a",Vr="n",$r="p",Uf="h";class Hf{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gn("c:"+this.id+":"),this.transportManager_=new Qt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=$t(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Vf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ei in e){const n=e[Ei];n===Br?this.upgradeIfSecondaryHealthy_():n===Lr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Dt("t",e),i=Dt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$r,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Br,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Dt("t",e),i=Dt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Dt(Ei,e);if(Mr in e){const i=e[Mr];if(n===Uf){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Vr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$f?this.onConnectionShutdown_(i):n===Lr?this.onReset_(i):n===Wf?Ui("Server Error: "+i):n===Fr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ui("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vs!==i&&ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),$t(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$t(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ff))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$r,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Je.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Fa{static getInstance(){return new On}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=32,Ur=768;class M{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function O(){return new M("")}function T(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function He(t){return t.pieces_.length-t.pieceNum_}function B(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new M(t.pieces_,e)}function Cs(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zf(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ba(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new M(e,0)}function H(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof M)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new M(n,0)}function k(t){return t.pieceNum_>=t.pieces_.length}function ne(t,e){const n=T(t),i=T(e);if(n===null)return e;if(n===i)return ne(B(t),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jf(t,e){const n=Xt(t,0),i=Xt(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=lt(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function ws(t,e){if(He(t)!==He(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function _e(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(He(t)>He(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Gf{constructor(e,n){this.errorPrefix_=n,this.parts_=Xt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Zn(this.parts_[i]);Va(this)}}function qf(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zn(e),Va(t)}function Yf(t){const e=t.parts_.pop();t.byteLength_-=Zn(e),t.parts_.length>0&&(t.byteLength_-=1)}function Va(t){if(t.byteLength_>Ur)throw new Error(t.errorPrefix_+"has a key path longer than "+Ur+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wr+") or object contains a cycle "+Qe(t))}function Qe(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Fa{static getInstance(){return new Is}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=1e3,Kf=60*5*1e3,Hr=30*1e3,Qf=1.3,Xf=3e4,Jf="server_kill",zr=3;class Ne extends La{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ne.nextPersistentConnectionId_++,this.log_=gn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ot,this.maxReconnectDelay_=Kf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Is.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&On.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(K(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new we,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ne.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Se(e,"w")){const i=vt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_u(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+K(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ui("Unrecognized action received from server: "+K(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xf&&(this.reconnectDelay_=Ot),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ne.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?J("getToken() completed but was canceled"):(J("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Hf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{ie(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jf)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ie(d),l())}}}interrupt(e){J("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){J("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mi(this.interruptReasons_)&&(this.reconnectDelay_=Ot,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ps(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new M(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){J("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zr&&(this.reconnectDelay_=Hr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){J("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_a.replace(/\./g,"-")]=1,Lo()?e["framework.cordova"]=1:cu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=On.getInstance().currentlyOnline();return Mi(this.interruptReasons_)&&e}}Ne.nextPersistentConnectionId_=0;Ne.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new R(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new R(bt,e),s=new R(bt,n);return this.compare(i,s)!==0}minPost(){return R.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn;class $a extends ii{static get __EMPTY_NODE(){return wn}static set __EMPTY_NODE(e){wn=e}compare(e,n){return lt(e.name,n.name)}isDefinedOn(e){throw kt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return R.MIN}maxPost(){return new R(it,wn)}makePost(e,n){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,wn)}toString(){return".key"}}const mt=new $a;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class X{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??X.RED,this.left=s??oe.EMPTY_NODE,this.right=r??oe.EMPTY_NODE}copy(e,n,i,s,r){return new X(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return oe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}X.RED=!0;X.BLACK=!1;class Zf{copy(e,n,i,s,r){return this}insert(e,n,i){return new X(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class oe{constructor(e,n=oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,X.BLACK,null,null))}remove(e){return new oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new In(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new In(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new In(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new In(this.root_,null,this.comparator_,!0,e)}}oe.EMPTY_NODE=new Zf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t,e){return lt(t.name,e.name)}function Es(t,e){return lt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi;function tg(t){zi=t}const Wa=function(t){return typeof t=="number"?"number:"+ya(t):"string:"+t},Ua=function(t){if(t.isLeafNode()){const e=t.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Se(e,".sv"),"Priority must be a string or number.")}else p(t===zi||t.isEmpty(),"priority of unexpected type.");p(t===zi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr;class Q{static set __childrenNodeConstructor(e){jr=e}static get __childrenNodeConstructor(){return jr}constructor(e,n=Q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ua(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:T(e)===".priority"?this.priorityNode_:Q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=T(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||He(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Q.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wa(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ya(this.value_):e+=this.value_,this.lazyHash_=pa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Q.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Q.VALUE_TYPE_ORDER.indexOf(n),r=Q.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+n),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha,za;function ng(t){Ha=t}function ig(t){za=t}class sg extends ii{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?lt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return R.MIN}maxPost(){return new R(it,new Q("[PRIORITY-POST]",za))}makePost(e,n){const i=Ha(e);return new R(n,new Q("[PRIORITY-POST]",i))}toString(){return".priority"}}const z=new sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=Math.log(2);class og{constructor(e){const n=r=>parseInt(Math.log(r)/rg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mn=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new X(h,d.node,X.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=s(l,f),m=s(f+1,c);return d=t[f],h=n?n(d):d,new X(h,d.node,X.BLACK,_,m)}},r=function(l){let c=null,u=null,d=t.length;const h=function(_,m){const v=d-_,I=d;d-=_;const S=s(v+1,I),y=t[v],E=n?n(y):y;f(new X(E,y.node,m,null,S))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const m=l.nextBitIsOne(),v=Math.pow(2,l.count-(_+1));m?h(v,X.BLACK):(h(v,X.BLACK),h(v,X.RED))}return u},o=new og(t.length),a=r(o);return new oe(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;const dt={};class Re{static get Default(){return p(dt&&z,"ChildrenNode.ts has not been loaded"),Si=Si||new Re({".priority":dt},{".priority":z}),Si}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=vt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof oe?n:null}hasIndex(e){return Se(this.indexSet_,e.toString())}addIndex(e,n){p(e!==mt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(R.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Mn(i,e.getCompare()):a=dt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Re(u,c)}addToIndexes(e,n){const i=Nn(this.indexes_,(s,r)=>{const o=vt(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===dt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(R.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mn(a,o.getCompare())}else return dt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new R(e.name,a))),l.insert(e,e.node)}});return new Re(i,this.indexSet_)}removeFromIndexes(e,n){const i=Nn(this.indexes_,s=>{if(s===dt)return s;{const r=n.get(e.name);return r?s.remove(new R(e.name,r)):s}});return new Re(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt;class w{static get EMPTY_NODE(){return Mt||(Mt=new w(new oe(Es),null,Re.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ua(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mt}updatePriority(e){return this.children_.isEmpty()?this:new w(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mt:n}}getChild(e){const n=T(e);return n===null?this:this.getImmediateChild(n).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(p(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new R(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Mt:this.priorityNode_;return new w(s,o,r)}}updateChild(e,n){const i=T(e);if(i===null)return n;{p(T(e)!==".priority"||He(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(B(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(z,(o,a)=>{n[o]=a.val(e),i++,r&&w.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wa(this.getPriority().val())+":"),this.forEachChild(z,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":pa(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new R(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new R(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new R(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===mt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new w(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(z),s=n.getIterator(z);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mt?null:this.indexMap_.get(e.toString())}}w.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ag extends w{constructor(){super(new oe(Es),w.EMPTY_NODE,Re.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return w.EMPTY_NODE}isEmpty(){return!1}}const _n=new ag;Object.defineProperties(R,{MIN:{value:new R(bt,w.EMPTY_NODE)},MAX:{value:new R(it,_n)}});$a.__EMPTY_NODE=w.EMPTY_NODE;Q.__childrenNodeConstructor=w;tg(_n);ig(_n);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=!0;function G(t,e=null){if(t===null)return w.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Q(n,G(e))}if(!(t instanceof Array)&&lg){const n=[];let i=!1;if(Z(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=G(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new R(o,l)))}}),n.length===0)return w.EMPTY_NODE;const r=Mn(n,eg,o=>o.name,Es);if(i){const o=Mn(n,z.getCompare());return new w(r,G(e),new Re({".priority":o},{".priority":z}))}else return new w(r,G(e),Re.Default)}else{let n=w.EMPTY_NODE;return Z(t,(i,s)=>{if(Se(t,i)&&i.substring(0,1)!=="."){const r=G(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(G(e))}}ng(G);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends ii{constructor(e){super(),this.indexPath_=e,p(!k(e)&&T(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?lt(e.name,n.name):r}makePost(e,n){const i=G(e),s=w.EMPTY_NODE.updateChild(this.indexPath_,i);return new R(n,s)}maxPost(){const e=w.EMPTY_NODE.updateChild(this.indexPath_,_n);return new R(it,e)}toString(){return Xt(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends ii{compare(e,n){const i=e.node.compareTo(n.node);return i===0?lt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,n){const i=G(e);return new R(n,i)}toString(){return".value"}}const dg=new ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){return{type:"value",snapshotNode:t}}function Ct(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Jt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Jt(n,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ct(n,i)):o.trackChildChange(Zt(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(z,(s,r)=>{n.hasChild(s)||i.trackChildChange(Jt(s,r))}),n.isLeafNode()||n.forEachChild(z,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Zt(s,r,o))}else i.trackChildChange(Ct(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?w.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.indexedFilter_=new Ss(e.getIndex()),this.index_=e.getIndex(),this.startPost_=en.getStartPost_(e),this.endPost_=en.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new R(n,i))||(i=w.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=w.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(w.EMPTY_NODE);const r=this;return n.forEachChild(z,(o,a)=>{r.matches(new R(o,a))||(s=s.updateImmediateChild(o,w.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new en(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new R(n,i))||(i=w.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=w.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=w.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(w.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,w.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new R(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Zt(n,i,d)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Jt(n,d));const m=a.updateImmediateChild(n,w.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ct(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Jt(c.name,c.node)),r.trackChildChange(Ct(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,w.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bt}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:it}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===z}copy(){const e=new Ts;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gg(t){return t.loadsAllData()?new Ss(t.getIndex()):t.hasLimit()?new fg(t):new en(t)}function Gr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===z?n="$priority":t.index_===dg?n="$value":t.index_===mt?n="$key":(p(t.index_ instanceof cg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=K(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=K(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+K(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=K(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+K(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends La{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=gn("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ln.getListenId_(e,i),a={};this.listens_[o]=a;const l=Gr(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),vt(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=Ln.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Gr(e._queryParams),i=e._path.toString(),s=new we;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pu(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qt(a.responseText)}catch{ie("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ie("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.rootNode_=w.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return{value:null,children:new Map}}function Nt(t,e,n){if(k(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=T(e);t.children.has(i)||t.children.set(i,Fn());const s=t.children.get(i);e=B(e),Nt(s,e,n)}}function ji(t,e){if(k(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(z,(i,s)=>{Nt(t,new M(i),s)}),ji(t,e)}}else if(t.children.size>0){const n=T(e);return e=B(e),t.children.has(n)&&ji(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Gi(t,e,n){t.value!==null?n(e,t.value):mg(t,(i,s)=>{const r=new M(e.toString()+"/"+i);Gi(s,r,n)})}function mg(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Z(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=10*1e3,vg=30*1e3,yg=5*60*1e3;class bg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pg(e);const i=Yr+(vg-Yr)*Math.random();$t(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Z(e,(s,r)=>{r>0&&Se(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),$t(this.reportStats_.bind(this),Math.floor(Math.random()*2*yg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(be||(be={}));function ks(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ns(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=be.ACK_USER_WRITE,this.source=ks()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new M(e));return new Bn(O(),n,this.revert)}}else return p(T(this.path)===e,"operationForChild called for unrelated child."),new Bn(B(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.source=e,this.path=n,this.type=be.LISTEN_COMPLETE}operationForChild(e){return k(this.path)?new tn(this.source,O()):new tn(this.source,B(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=be.OVERWRITE}operationForChild(e){return k(this.path)?new st(this.source,O(),this.snap.getImmediateChild(e)):new st(this.source,B(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=be.MERGE}operationForChild(e){if(k(this.path)){const n=this.children.subtree(new M(e));return n.isEmpty()?null:n.value?new st(this.source,O(),n.value):new wt(this.source,O(),n)}else return p(T(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wt(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const n=T(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wg(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hg(o.childName,o.snapshotNode))}),Lt(t,s,"child_removed",e,i,n),Lt(t,s,"child_added",e,i,n),Lt(t,s,"child_moved",r,i,n),Lt(t,s,"child_changed",e,i,n),Lt(t,s,"value",e,i,n),s}function Lt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Eg(t,a,l)),o.forEach(a=>{const l=Ig(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ig(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Eg(t,e,n){if(e.childName==null||n.childName==null)throw kt("Should only compare child_ events.");const i=new R(e.childName,e.snapshotNode),s=new R(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e){return{eventCache:t,serverCache:e}}function Wt(t,e,n,i){return si(new ze(e,n,i),t.serverCache)}function Ga(t,e,n,i){return si(t.eventCache,new ze(e,n,i))}function Vn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;const Sg=()=>(Ti||(Ti=new oe(cf)),Ti);class V{static fromObject(e){let n=new V(null);return Z(e,(i,s)=>{n=n.set(new M(i),s)}),n}constructor(e,n=Sg()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:O(),value:this.value};if(k(e))return null;{const i=T(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(B(e),n);return r!=null?{path:H(new M(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const n=T(e),i=this.children.get(n);return i!==null?i.subtree(B(e)):new V(null)}}set(e,n){if(k(e))return new V(n,this.children);{const i=T(e),r=(this.children.get(i)||new V(null)).set(B(e),n),o=this.children.insert(i,r);return new V(this.value,o)}}remove(e){if(k(e))return this.children.isEmpty()?new V(null):new V(null,this.children);{const n=T(e),i=this.children.get(n);if(i){const s=i.remove(B(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new V(null):new V(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const n=T(e),i=this.children.get(n);return i?i.get(B(e)):null}}setTree(e,n){if(k(e))return n;{const i=T(e),r=(this.children.get(i)||new V(null)).setTree(B(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new V(this.value,o)}}fold(e){return this.fold_(O(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(H(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,O(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(k(e))return null;{const r=T(e),o=this.children.get(r);return o?o.findOnPath_(B(e),H(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,O(),n)}foreachOnPath_(e,n,i){if(k(e))return this;{this.value&&i(n,this.value);const s=T(e),r=this.children.get(s);return r?r.foreachOnPath_(B(e),H(n,s),i):new V(null)}}foreach(e){this.foreach_(O(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(H(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.writeTree_=e}static empty(){return new Ce(new V(null))}}function Ut(t,e,n){if(k(e))return new Ce(new V(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ne(s,e);return r=r.updateChild(o,n),new Ce(t.writeTree_.set(s,r))}else{const s=new V(n),r=t.writeTree_.setTree(e,s);return new Ce(r)}}}function qi(t,e,n){let i=t;return Z(n,(s,r)=>{i=Ut(i,H(e,s),r)}),i}function Kr(t,e){if(k(e))return Ce.empty();{const n=t.writeTree_.setTree(e,new V(null));return new Ce(n)}}function Yi(t,e){return ct(t,e)!=null}function ct(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ne(n.path,e)):null}function Qr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(z,(i,s)=>{e.push(new R(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new R(i,s.value))}),e}function $e(t,e){if(k(e))return t;{const n=ct(t,e);return n!=null?new Ce(new V(n)):new Ce(t.writeTree_.subtree(e))}}function Ki(t){return t.writeTree_.isEmpty()}function It(t,e){return qa(O(),t.writeTree_,e)}function qa(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=qa(H(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(H(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){return Xa(e,t)}function Tg(t,e,n,i,s){p(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Ut(t.visibleWrites,e,n)),t.lastWriteId=i}function kg(t,e,n,i){p(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=qi(t.visibleWrites,e,n),t.lastWriteId=i}function Rg(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Ng(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);p(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Ag(a,i.path)?s=!1:_e(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return xg(t),!0;if(i.snap)t.visibleWrites=Kr(t.visibleWrites,i.path);else{const a=i.children;Z(a,l=>{t.visibleWrites=Kr(t.visibleWrites,H(i.path,l))})}return!0}else return!1}function Ag(t,e){if(t.snap)return _e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_e(H(t.path,n),e))return!0;return!1}function xg(t){t.visibleWrites=Ya(t.allWrites,Pg,O()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pg(t){return t.visible}function Ya(t,e,n){let i=Ce.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)_e(n,o)?(a=ne(n,o),i=Ut(i,a,r.snap)):_e(o,n)&&(a=ne(o,n),i=Ut(i,O(),r.snap.getChild(a)));else if(r.children){if(_e(n,o))a=ne(n,o),i=qi(i,a,r.children);else if(_e(o,n))if(a=ne(o,n),k(a))i=qi(i,O(),r.children);else{const l=vt(r.children,T(a));if(l){const c=l.getChild(B(a));i=Ut(i,O(),c)}}}else throw kt("WriteRecord should have .snap or .children")}}return i}function Ka(t,e,n,i,s){if(!i&&!s){const r=ct(t.visibleWrites,e);if(r!=null)return r;{const o=$e(t.visibleWrites,e);if(Ki(o))return n;if(n==null&&!Yi(o,O()))return null;{const a=n||w.EMPTY_NODE;return It(o,a)}}}else{const r=$e(t.visibleWrites,e);if(!s&&Ki(r))return n;if(!s&&n==null&&!Yi(r,O()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(_e(c.path,e)||_e(e,c.path))},a=Ya(t.allWrites,o,e),l=n||w.EMPTY_NODE;return It(a,l)}}}function Dg(t,e,n){let i=w.EMPTY_NODE;const s=ct(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(z,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=$e(t.visibleWrites,e);return n.forEachChild(z,(o,a)=>{const l=It($e(r,new M(o)),a);i=i.updateImmediateChild(o,l)}),Qr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=$e(t.visibleWrites,e);return Qr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Og(t,e,n,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=H(e,n);if(Yi(t.visibleWrites,r))return null;{const o=$e(t.visibleWrites,r);return Ki(o)?s.getChild(n):It(o,s.getChild(n))}}function Mg(t,e,n,i){const s=H(e,n),r=ct(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=$e(t.visibleWrites,s);return It(o,i.getNode().getImmediateChild(n))}else return null}function Lg(t,e){return ct(t.visibleWrites,e)}function Fg(t,e,n,i,s,r,o){let a;const l=$e(t.visibleWrites,e),c=ct(l,O());if(c!=null)a=c;else if(n!=null)a=It(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function Bg(){return{visibleWrites:Ce.empty(),allWrites:[],lastWriteId:-1}}function $n(t,e,n,i){return Ka(t.writeTree,t.treePath,e,n,i)}function As(t,e){return Dg(t.writeTree,t.treePath,e)}function Xr(t,e,n,i){return Og(t.writeTree,t.treePath,e,n,i)}function Wn(t,e){return Lg(t.writeTree,H(t.treePath,e))}function Vg(t,e,n,i,s,r){return Fg(t.writeTree,t.treePath,e,n,i,s,r)}function xs(t,e,n){return Mg(t.writeTree,t.treePath,e,n)}function Qa(t,e){return Xa(H(t.treePath,e),t.writeTree)}function Xa(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;p(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Zt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Jt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Ct(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Zt(i,e.snapshotNode,s.oldSnap));else throw kt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ja=new Wg;class Ps{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ze(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xs(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rt(this.viewCache_),r=Vg(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){return{filter:t}}function Hg(t,e){p(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zg(t,e,n,i,s){const r=new $g;let o,a;if(n.type===be.OVERWRITE){const c=n;c.source.fromUser?o=Qi(t,e,c.path,c.snap,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!k(c.path),o=Un(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===be.MERGE){const c=n;c.source.fromUser?o=Gg(t,e,c.path,c.children,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xi(t,e,c.path,c.children,i,s,a,r))}else if(n.type===be.ACK_USER_WRITE){const c=n;c.revert?o=Kg(t,e,c.path,i,s,r):o=qg(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===be.LISTEN_COMPLETE)o=Yg(t,e,n.path,i,r);else throw kt("Unknown operation type: "+n.type);const l=r.getChanges();return jg(e,o,l),{viewCache:o,changes:l}}function jg(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Vn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ja(Vn(e)))}}function Za(t,e,n,i,s,r){const o=e.eventCache;if(Wn(i,n)!=null)return e;{let a,l;if(k(n))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rt(e),u=c instanceof w?c:w.EMPTY_NODE,d=As(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=$n(i,rt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=T(n);if(c===".priority"){p(He(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Xr(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=B(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Xr(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=xs(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return Wt(e,a,o.isFullyInitialized()||k(n),t.filter.filtersNodes())}}function Un(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(k(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=T(n);if(!l.isCompleteForPath(n)&&He(n)>1)return e;const _=B(n),v=l.getNode().getImmediateChild(f).updateChild(_,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,_,Ja,null)}const d=Ga(e,c,l.isFullyInitialized()||k(n),u.filtersNodes()),h=new Ps(s,d,r);return Za(t,d,n,s,h,a)}function Qi(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Ps(s,e,r);if(k(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Wt(e,c,!0,t.filter.filtersNodes());else{const d=T(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Wt(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=B(n),f=a.getNode().getImmediateChild(d);let _;if(k(h))_=i;else{const m=u.getCompleteChild(d);m!=null?Cs(h)===".priority"&&m.getChild(Ba(h)).isEmpty()?_=m:_=m.updateChild(h,i):_=w.EMPTY_NODE}if(f.equals(_))l=e;else{const m=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=Wt(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Jr(t,e){return t.eventCache.isCompleteForChild(e)}function Gg(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=H(n,l);Jr(e,T(u))&&(a=Qi(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=H(n,l);Jr(e,T(u))||(a=Qi(t,a,u,c,s,r,o))}),a}function Zr(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Xi(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;k(n)?c=i:c=new V(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),_=Zr(t,f,h);l=Un(t,l,new M(d),_,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const _=e.serverCache.getNode().getImmediateChild(d),m=Zr(t,_,h);l=Un(t,l,new M(d),m,s,r,o,a)}}),l}function qg(t,e,n,i,s,r,o){if(Wn(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(k(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Un(t,e,n,l.getNode().getChild(n),s,r,a,o);if(k(n)){let c=new V(null);return l.getNode().forEachChild(mt,(u,d)=>{c=c.set(new M(u),d)}),Xi(t,e,n,c,s,r,a,o)}else return e}else{let c=new V(null);return i.foreach((u,d)=>{const h=H(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Xi(t,e,n,c,s,r,a,o)}}function Yg(t,e,n,i,s){const r=e.serverCache,o=Ga(e,r.getNode(),r.isFullyInitialized()||k(n),r.isFiltered());return Za(t,o,n,i,Ja,s)}function Kg(t,e,n,i,s,r){let o;if(Wn(i,n)!=null)return e;{const a=new Ps(i,e,s),l=e.eventCache.getNode();let c;if(k(n)||T(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$n(i,rt(e));else{const d=e.serverCache.getNode();p(d instanceof w,"serverChildren would be complete if leaf node"),u=As(i,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=T(n);let d=xs(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,B(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,w.EMPTY_NODE,B(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$n(i,rt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Wn(i,O())!=null,Wt(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ss(i.getIndex()),r=gg(i);this.processor_=Ug(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(w.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(w.EMPTY_NODE,a.getNode(),null),u=new ze(l,o.isFullyInitialized(),s.filtersNodes()),d=new ze(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=si(d,u),this.eventGenerator_=new Cg(this.query_)}get query(){return this.query_}}function Xg(t){return t.viewCache_.serverCache.getNode()}function Jg(t){return Vn(t.viewCache_)}function Zg(t,e){const n=rt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!k(e)&&!n.getImmediateChild(T(e)).isEmpty())?n.getChild(e):null}function eo(t){return t.eventRegistrations_.length===0}function e_(t,e){t.eventRegistrations_.push(e)}function to(t,e,n){const i=[];if(n){p(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function no(t,e,n,i){e.type===be.MERGE&&e.source.queryId!==null&&(p(rt(t.viewCache_),"We should always have a full cache before handling merges"),p(Vn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=zg(t.processor_,s,e,n,i);return Hg(t.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,el(t,r.changes,r.viewCache.eventCache.getNode(),null)}function t_(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(z,(r,o)=>{i.push(Ct(r,o))}),n.isFullyInitialized()&&i.push(ja(n.getNode())),el(t,i,n.getNode(),e)}function el(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return wg(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class tl{constructor(){this.views=new Map}}function n_(t){p(!Hn,"__referenceConstructor has already been defined"),Hn=t}function i_(){return p(Hn,"Reference.ts has not been loaded"),Hn}function s_(t){return t.views.size===0}function Ds(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),no(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(no(o,e,n,i));return r}}function nl(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=$n(n,s?i:null),l=!1;a?l=!0:i instanceof w?(a=As(n,i),l=!1):(a=w.EMPTY_NODE,l=!1);const c=si(new ze(a,l,!1),new ze(i,s,!1));return new Qg(e,c)}return o}function r_(t,e,n,i,s,r){const o=nl(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),e_(o,n),t_(o,n)}function o_(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=je(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(to(c,n,i)),eo(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(to(l,n,i)),eo(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!je(t)&&r.push(new(i_())(e._repo,e._path)),{removed:r,events:o}}function il(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function We(t,e){let n=null;for(const i of t.views.values())n=n||Zg(i,e);return n}function sl(t,e){if(e._queryParams.loadsAllData())return oi(t);{const i=e._queryIdentifier;return t.views.get(i)}}function rl(t,e){return sl(t,e)!=null}function je(t){return oi(t)!=null}function oi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;function a_(t){p(!zn,"__referenceConstructor has already been defined"),zn=t}function l_(){return p(zn,"Reference.ts has not been loaded"),zn}let c_=1;class io{constructor(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=Bg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ol(t,e,n,i,s){return Tg(t.pendingWriteTree_,e,n,i,s),s?At(t,new st(ks(),e,n)):[]}function u_(t,e,n,i){kg(t.pendingWriteTree_,e,n,i);const s=V.fromObject(n);return At(t,new wt(ks(),e,s))}function Me(t,e,n=!1){const i=Rg(t.pendingWriteTree_,e);if(Ng(t.pendingWriteTree_,e)){let r=new V(null);return i.snap!=null?r=r.set(O(),!0):Z(i.children,o=>{r=r.set(new M(o),!0)}),At(t,new Bn(i.path,r,n))}else return[]}function mn(t,e,n){return At(t,new st(Rs(),e,n))}function d_(t,e,n){const i=V.fromObject(n);return At(t,new wt(Rs(),e,i))}function h_(t,e){return At(t,new tn(Rs(),e))}function f_(t,e,n){const i=Ms(t,n);if(i){const s=Ls(i),r=s.path,o=s.queryId,a=ne(r,e),l=new tn(Ns(o),a);return Fs(t,r,l)}else return[]}function jn(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||rl(o,e))){const l=o_(o,e,n,i);s_(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,f)=>je(f));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=m_(h);for(let _=0;_<f.length;++_){const m=f[_],v=m.query,I=ul(t,m);t.listenProvider_.startListening(Ht(v),nn(t,v),I.hashFn,I.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Ht(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(ai(h));t.listenProvider_.stopListening(Ht(h),f)}))}p_(t,c)}return a}function al(t,e,n,i){const s=Ms(t,i);if(s!=null){const r=Ls(s),o=r.path,a=r.queryId,l=ne(o,e),c=new st(Ns(a),l,n);return Fs(t,o,c)}else return[]}function g_(t,e,n,i){const s=Ms(t,i);if(s){const r=Ls(s),o=r.path,a=r.queryId,l=ne(o,e),c=V.fromObject(n),u=new wt(Ns(a),l,c);return Fs(t,o,u)}else return[]}function Ji(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const _=ne(h,s);r=r||We(f,_),o=o||je(f)});let a=t.syncPointTree_.get(s);a?(o=o||je(a),r=r||We(a,O())):(a=new tl,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=w.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,_)=>{const m=We(_,O());m&&(r=r.updateImmediateChild(f,m))}));const c=rl(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ai(e);p(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=v_();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=ri(t.pendingWriteTree_,s);let d=r_(a,e,n,u,r,l);if(!c&&!o&&!i){const h=sl(a,e);d=d.concat(y_(t,e,h))}return d}function Os(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ne(o,e),c=We(a,l);if(c)return c});return Ka(s,e,r,n,!0)}function __(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ne(c,n);i=i||We(u,d)});let s=t.syncPointTree_.get(n);s?i=i||We(s,O()):(s=new tl,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new ze(i,!0,!1):null,a=ri(t.pendingWriteTree_,e._path),l=nl(s,e,a,r?o.getNode():w.EMPTY_NODE,r);return Jg(l)}function At(t,e){return ll(e,t.syncPointTree_,null,ri(t.pendingWriteTree_,O()))}function ll(t,e,n,i){if(k(t.path))return cl(t,e,n,i);{const s=e.get(O());n==null&&s!=null&&(n=We(s,O()));let r=[];const o=T(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Qa(i,o);r=r.concat(ll(a,l,c,u))}return s&&(r=r.concat(Ds(s,t,i,n))),r}}function cl(t,e,n,i){const s=e.get(O());n==null&&s!=null&&(n=We(s,O()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Qa(i,o),u=t.operationForChild(o);u&&(r=r.concat(cl(u,a,l,c)))}),s&&(r=r.concat(Ds(s,t,i,n))),r}function ul(t,e){const n=e.query,i=nn(t,n);return{hashFn:()=>(Xg(e)||w.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?f_(t,n._path,i):h_(t,n._path);{const r=hf(s,n);return jn(t,n,null,r)}}}}function nn(t,e){const n=ai(e);return t.queryToTagMap.get(n)}function ai(t){return t._path.toString()+"$"+t._queryIdentifier}function Ms(t,e){return t.tagToQueryMap.get(e)}function Ls(t){const e=t.indexOf("$");return p(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new M(t.substr(0,e))}}function Fs(t,e,n){const i=t.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=ri(t.pendingWriteTree_,e);return Ds(i,n,s,null)}function m_(t){return t.fold((e,n,i)=>{if(n&&je(n))return[oi(n)];{let s=[];return n&&(s=il(n)),Z(i,(r,o)=>{s=s.concat(o)}),s}})}function Ht(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(l_())(t._repo,t._path):t}function p_(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=ai(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function v_(){return c_++}function y_(t,e,n){const i=e._path,s=nn(t,e),r=ul(t,n),o=t.listenProvider_.startListening(Ht(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)p(!je(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!k(c)&&u&&je(u))return[oi(u).query];{let h=[];return u&&(h=h.concat(il(u).map(f=>f.query))),Z(d,(f,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ht(u),nn(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bs(n)}node(){return this.node_}}class Vs{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=H(this.path_,e);return new Vs(this.syncTree_,n)}node(){return Os(this.syncTree_,this.path_)}}const b_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},so=function(t,e,n){if(!t||typeof t!="object")return t;if(p(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return C_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return w_(t[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},C_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:p(!1,"Unexpected server value: "+t)}},w_=function(t,e,n){t.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},dl=function(t,e,n,i){return $s(e,new Vs(n,t),i)},hl=function(t,e,n){return $s(t,new Bs(e),n)};function $s(t,e,n){const i=t.getPriority().val(),s=so(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=so(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Q(a,G(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Q(s))),o.forEachChild(z,(a,l)=>{const c=$s(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Us(t,e){let n=e instanceof M?e:new M(e),i=t,s=T(n);for(;s!==null;){const r=vt(i.node.children,s)||{children:{},childCount:0};i=new Ws(s,i,r),n=B(n),s=T(n)}return i}function xt(t){return t.node.value}function fl(t,e){t.node.value=e,Zi(t)}function gl(t){return t.node.childCount>0}function I_(t){return xt(t)===void 0&&!gl(t)}function li(t,e){Z(t.node.children,(n,i)=>{e(new Ws(n,t,i))})}function _l(t,e,n,i){n&&e(t),li(t,s=>{_l(s,e,!0)})}function E_(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function pn(t){return new M(t.parent===null?t.name:pn(t.parent)+"/"+t.name)}function Zi(t){t.parent!==null&&S_(t.parent,t.name,t)}function S_(t,e,n){const i=I_(n),s=Se(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Zi(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Zi(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=/[\[\].#$\/\u0000-\u001F\u007F]/,k_=/[\[\].#$\u0000-\u001F\u007F]/,ki=10*1024*1024,Hs=function(t){return typeof t=="string"&&t.length!==0&&!T_.test(t)},ml=function(t){return typeof t=="string"&&t.length!==0&&!k_.test(t)},R_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ml(t)},pl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ni(t)||t&&typeof t=="object"&&Se(t,".sv")},Gn=function(t,e,n,i){i&&e===void 0||ci(yt(t,"value"),e,n)},ci=function(t,e,n){const i=n instanceof M?new Gf(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qe(i));if(typeof e=="function")throw new Error(t+"contains a function "+Qe(i)+" with contents = "+e.toString());if(ni(e))throw new Error(t+"contains "+e.toString()+" "+Qe(i));if(typeof e=="string"&&e.length>ki/3&&Zn(e)>ki)throw new Error(t+"contains a string greater than "+ki+" utf8 bytes "+Qe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Z(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Hs(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qf(i,o),ci(t,a,i),Yf(i)}),s&&r)throw new Error(t+' contains ".value" child '+Qe(i)+" in addition to actual children.")}},N_=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Xt(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Hs(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jf);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&_e(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},vl=function(t,e,n,i){const s=yt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Z(e,(o,a)=>{const l=new M(o);if(ci(s,a,H(n,l)),Cs(l)===".priority"&&!pl(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),N_(s,r)},A_=function(t,e,n){if(ni(e))throw new Error(yt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!pl(e))throw new Error(yt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},yl=function(t,e,n,i){if(!ml(n))throw new Error(yt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x_=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yl(t,e,n)},Ze=function(t,e){if(T(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},P_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!R_(n))throw new Error(yt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ui(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!ws(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function bl(t,e,n){ui(t,n),Cl(t,i=>ws(i,e))}function me(t,e,n){ui(t,n),Cl(t,i=>_e(i,e)||_e(e,i))}function Cl(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(O_(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function O_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Vt&&J("event: "+n.toString()),Rt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="repo_interrupt",L_=25;class F_{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new D_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new Ws,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function B_(t,e,n){if(t.stats_=ys(t.repoInfo_),t.forceRestClient_||mf())t.server_=new Ln(t.repoInfo_,(i,s,r,o)=>{ro(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>oo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{K(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ne(t.repoInfo_,e,(i,s,r,o)=>{ro(t,i,s,r,o)},i=>{oo(t,i)},i=>{V_(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Cf(t.repoInfo_,()=>new bg(t.stats_,t.server_)),t.infoData_=new _g,t.infoSyncTree_=new io({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=mn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),zs(t,"connected",!1),t.serverSyncTree_=new io({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);me(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function wl(t){const n=t.infoData_.getNode(new M(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function di(t){return b_({timestamp:wl(t)})}function ro(t,e,n,i,s){t.dataUpdateCount++;const r=new M(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Nn(n,c=>G(c));o=g_(t.serverSyncTree_,r,l,s)}else{const l=G(n);o=al(t.serverSyncTree_,r,l,s)}else if(i){const l=Nn(n,c=>G(c));o=d_(t.serverSyncTree_,r,l)}else{const l=G(n);o=mn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Et(t,r)),me(t.eventQueue_,a,o)}function oo(t,e){zs(t,"connected",e),e===!1&&H_(t)}function V_(t,e){Z(e,(n,i)=>{zs(t,n,i)})}function zs(t,e,n){const i=new M("/.info/"+e),s=G(n);t.infoData_.updateSnapshot(i,s);const r=mn(t.infoSyncTree_,i,s);me(t.eventQueue_,i,r)}function js(t){return t.nextWriteId_++}function $_(t,e,n){const i=__(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=G(s).withIndex(e._queryParams.getIndex());Ji(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=mn(t.serverSyncTree_,e._path,r);else{const a=nn(t.serverSyncTree_,e);o=al(t.serverSyncTree_,e._path,r,a)}return me(t.eventQueue_,e._path,o),jn(t.serverSyncTree_,e,n,null,!0),r},s=>(vn(t,"get for query "+K(e)+" failed: "+s),Promise.reject(new Error(s))))}function W_(t,e,n,i,s){vn(t,"set",{path:e.toString(),value:n,priority:i});const r=di(t),o=G(n,i),a=Os(t.serverSyncTree_,e),l=hl(o,a,r),c=js(t),u=ol(t.serverSyncTree_,e,l,c,!0);ui(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const _=h==="ok";_||ie("set at "+e+" failed: "+h);const m=Me(t.serverSyncTree_,c,!_);me(t.eventQueue_,e,m),Ge(t,s,h,f)});const d=qs(t,e);Et(t,d),me(t.eventQueue_,d,[])}function U_(t,e,n,i){vn(t,"update",{path:e.toString(),value:n});let s=!0;const r=di(t),o={};if(Z(n,(a,l)=>{s=!1,o[a]=dl(H(e,a),G(l),t.serverSyncTree_,r)}),s)J("update() called with empty data.  Don't do anything."),Ge(t,i,"ok",void 0);else{const a=js(t),l=u_(t.serverSyncTree_,e,o,a);ui(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||ie("update at "+e+" failed: "+c);const h=Me(t.serverSyncTree_,a,!d),f=h.length>0?Et(t,e):e;me(t.eventQueue_,f,h),Ge(t,i,c,u)}),Z(n,c=>{const u=qs(t,H(e,c));Et(t,u)}),me(t.eventQueue_,e,[])}}function H_(t){vn(t,"onDisconnectEvents");const e=di(t),n=Fn();Gi(t.onDisconnect_,O(),(s,r)=>{const o=dl(s,r,t.serverSyncTree_,e);Nt(n,s,o)});let i=[];Gi(n,O(),(s,r)=>{i=i.concat(mn(t.serverSyncTree_,s,r));const o=qs(t,s);Et(t,o)}),t.onDisconnect_=Fn(),me(t.eventQueue_,O(),i)}function z_(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&ji(t.onDisconnect_,e),Ge(t,n,i,s)})}function ao(t,e,n,i){const s=G(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&Nt(t.onDisconnect_,e,s),Ge(t,i,r,o)})}function j_(t,e,n,i,s){const r=G(n,i);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Nt(t.onDisconnect_,e,r),Ge(t,s,o,a)})}function G_(t,e,n,i){if(Mi(n)){J("onDisconnect().update() called with empty data.  Don't do anything."),Ge(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,r)=>{s==="ok"&&Z(n,(o,a)=>{const l=G(a);Nt(t.onDisconnect_,H(e,o),l)}),Ge(t,i,s,r)})}function q_(t,e,n){let i;T(e._path)===".info"?i=Ji(t.infoSyncTree_,e,n):i=Ji(t.serverSyncTree_,e,n),bl(t.eventQueue_,e._path,i)}function Y_(t,e,n){let i;T(e._path)===".info"?i=jn(t.infoSyncTree_,e,n):i=jn(t.serverSyncTree_,e,n),bl(t.eventQueue_,e._path,i)}function K_(t){t.persistentConnection_&&t.persistentConnection_.interrupt(M_)}function vn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),J(n,...e)}function Ge(t,e,n,i){e&&Rt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Il(t,e,n){return Os(t.serverSyncTree_,e,n)||w.EMPTY_NODE}function Gs(t,e=t.transactionQueueTree_){if(e||hi(t,e),xt(e)){const n=Sl(t,e);p(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Q_(t,pn(e),n)}else gl(e)&&li(e,n=>{Gs(t,n)})}function Q_(t,e,n){const i=n.map(c=>c.currentWriteId),s=Il(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ne(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{vn(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Me(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();hi(t,Us(t.transactionQueueTree_,e)),Gs(t,t.transactionQueueTree_),me(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Rt(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ie("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Et(t,e)}},o)}function Et(t,e){const n=El(t,e),i=pn(n),s=Sl(t,n);return X_(t,s,i),i}function X_(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ne(n,l.path);let u=!1,d;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=L_)u=!0,d="maxretry",s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Il(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){ci("transaction failed: Data returned ",f,l.path);let _=G(f);typeof f=="object"&&f!=null&&Se(f,".priority")||(_=_.updatePriority(h.getPriority()));const v=l.currentWriteId,I=di(t),S=hl(_,h,I);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=S,l.currentWriteId=js(t),o.splice(o.indexOf(v),1),s=s.concat(ol(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(Me(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0))}me(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}hi(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Rt(i[a]);Gs(t,t.transactionQueueTree_)}function El(t,e){let n,i=t.transactionQueueTree_;for(n=T(e);n!==null&&xt(i)===void 0;)i=Us(i,n),e=B(e),n=T(e);return i}function Sl(t,e){const n=[];return Tl(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Tl(t,e,n){const i=xt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);li(e,s=>{Tl(t,s,n)})}function hi(t,e){const n=xt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,fl(e,n.length>0?n:void 0)}li(e,i=>{hi(t,i)})}function qs(t,e){const n=pn(El(t,e)),i=Us(t.transactionQueueTree_,e);return E_(i,s=>{Ri(t,s)}),Ri(t,i),_l(i,s=>{Ri(t,s)}),n}function Ri(t,e){const n=xt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(p(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Me(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fl(e,void 0):n.length=r+1,me(t.eventQueue_,pn(e),s);for(let o=0;o<i.length;o++)Rt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Z_(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ie(`Invalid query segment '${n}' in query '${t}'`)}return e}const lo=function(t,e){const n=em(t),i=n.namespace;n.domain==="firebase.com"&&Pe(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Pe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||af();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Na(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new M(n.pathString)}},em=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=J_(t.substring(u,d)));const h=Z_(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",tm=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=co.charAt(n%64),n=Math.floor(n/64);p(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=co.charAt(e[s]);return p(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+K(this.snapshot.exportVal())}}class im{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new we;return z_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ze("OnDisconnect.remove",this._path);const e=new we;return ao(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ze("OnDisconnect.set",this._path),Gn("OnDisconnect.set",e,this._path,!1);const n=new we;return ao(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Ze("OnDisconnect.setWithPriority",this._path),Gn("OnDisconnect.setWithPriority",e,this._path,!1),A_("OnDisconnect.setWithPriority",n);const i=new we;return j_(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){Ze("OnDisconnect.update",this._path),vl("OnDisconnect.update",e,this._path);const n=new we;return G_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return k(this._path)?null:Cs(this._path)}get ref(){return new Oe(this._repo,this._path)}get _queryIdentifier(){const e=qr(this._queryParams),n=ps(e);return n==="{}"?"default":n}get _queryObject(){return qr(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof Ys))return!1;const n=this._repo===e._repo,i=ws(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+zf(this._path)}}class Oe extends Ys{constructor(e,n){super(e,n,new Ts,!1)}get parent(){const e=Ba(this._path);return e===null?null:new Oe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class sn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new M(e),i=rn(this.ref,e);return new sn(this._node.getChild(n),i,z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new sn(s,rn(this.ref,i),z)))}hasChild(e){const n=new M(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Tp(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?rn(t._root,e):t._root}function rn(t,e){return t=Te(t),T(t._path)===null?x_("child","path",e):yl("child","path",e),new Oe(t._repo,H(t._path,e))}function kp(t){return t=Te(t),new sm(t._repo,t._path)}function Rp(t,e){t=Te(t),Ze("push",t._path),Gn("push",e,t._path,!0);const n=wl(t._repo),i=tm(n),s=rn(t,i),r=rn(t,i);let o;return e!=null?o=Rl(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Np(t){return Ze("remove",t._path),Rl(t,null)}function Rl(t,e){t=Te(t),Ze("set",t._path),Gn("set",e,t._path,!1);const n=new we;return W_(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ap(t,e){vl("update",e,t._path);const n=new we;return U_(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function xp(t){t=Te(t);const e=new kl(()=>{}),n=new fi(e);return $_(t._repo,t,n).then(i=>new sn(i,new Oe(t._repo,t._path),t._queryParams.getIndex()))}class fi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new nm("value",this,new sn(e.snapshotNode,new Oe(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new im(this,e,n):null}matches(e){return e instanceof fi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rm(t,e,n,i,s){const r=new kl(n,void 0),o=new fi(r);return q_(t._repo,t,o),()=>Y_(t._repo,t,o)}function Pp(t,e,n,i){return rm(t,"value",e)}n_(Oe);a_(Oe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="FIREBASE_DATABASE_EMULATOR_HOST",es={};let am=!1;function lm(t,e,n,i){t.repoInfo_=new Na(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function cm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Pe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),J("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lo(r,s),a=o.repoInfo,l;typeof process<"u"&&Nr&&(l=Nr[om]),l?(r=`http://${l}?ns=${a.namespace}`,o=lo(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new vf(t.name,t.options,e);P_("Invalid Firebase Database URL",o),k(o.path)||Pe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=dm(a,t,c,new pf(t,n));return new hm(u,t)}function um(t,e){const n=es[e];(!n||n[t.key]!==t)&&Pe(`Database ${e}(${t.repoInfo_}) has already been deleted.`),K_(t),delete n[t.key]}function dm(t,e,n,i){let s=es[e.name];s||(s={},es[e.name]=s);let r=s[t.toURLString()];return r&&Pe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new F_(t,am,n,i),s[t.toURLString()]=r,r}class hm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(B_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oe(this._repo,O())),this._rootInternal}_delete(){return this._rootInternal!==null&&(um(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pe("Cannot call "+e+" on a deleted database.")}}function fm(t=zo(),e){const n=hn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=ru("database");i&&gm(n,...i)}return n}function gm(t,e,n,i={}){t=Te(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Yt(i,r.repoInfo_.emulatorOptions))return;Pe("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Pe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Sn(Sn.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:ou(i.mockUserToken,t.app.options.projectId);o=new Sn(a)}lm(r,s,i,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t){ef(wd),Ue(new Ae("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ee(Ar,xr,t),Ee(Ar,xr,"esm2017")}Ne.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ne.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_m();const mm={apiKey:"AIzaSyACpt_LrV8iNkYWfnI8VY_cnMr495yq7rc",authDomain:"card-chess-game.firebaseapp.com",projectId:"card-chess-game",storageBucket:"card-chess-game.firebasestorage.app",messagingSenderId:"433806880393",appId:"1:433806880393:web:b3ee4225d8cd9eb3aa2058",measurementId:"G-RZP6YG4TVP",databaseURL:"https://card-chess-game-default-rtdb.europe-west1.firebasedatabase.app/"},Nl=Ho(mm);Qh(Nl);const Dp=fm(Nl),Al=x({border:[Boolean,Number,String]},"border");function xl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De();return{borderClasses:b(()=>{const i=t.border;return i===!0||i===""?`${e}--border`:typeof i=="string"||i===0?String(i).split(" ").map(s=>`border-${s}`):[]})}}const pm=[null,"default","comfortable","compact"],Ks=x({density:{type:String,default:"default",validator:t=>pm.includes(t)}},"density");function Qs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De();return{densityClasses:N(()=>`${e}--density-${t.density}`)}}const Pl=x({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Dl(t){return{elevationClasses:N(()=>{const n=Pi(t)?t.value:t.elevation;return n==null?[]:[`elevation-${n}`]})}}const yn=x({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function bn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De();return{roundedClasses:b(()=>{const i=Pi(t)?t.value:t.rounded,s=Pi(t)?t.value:t.tile,r=[];if(i===!0||i==="")r.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const o of String(i).split(" "))r.push(`rounded-${o}`);else(s||i===!1)&&r.push("rounded-0");return r})}}function Xs(t){return bo(()=>{const e=jt(t),n=[],i={};if(e.background)if(sr(e.background)){if(i.backgroundColor=e.background,!e.text&&wc(e.background)){const s=Ic(e.background);if(s.a==null||s.a===1){const r=Ec(s);i.color=r,i.caretColor=r}}}else n.push(`bg-${e.background}`);return e.text&&(sr(e.text)?(i.color=e.text,i.caretColor=e.text):n.push(`text-${e.text}`)),{colorClasses:n,colorStyles:i}})}function St(t){const{colorClasses:e,colorStyles:n}=Xs(()=>({text:jt(t)}));return{textColorClasses:e,textColorStyles:n}}function zt(t){const{colorClasses:e,colorStyles:n}=Xs(()=>({background:jt(t)}));return{backgroundColorClasses:e,backgroundColorStyles:n}}const vm=["elevated","flat","tonal","outlined","text","plain"];function ym(t,e){return g(gt,null,[t&&g("span",{key:"overlay",class:`${e}__overlay`},null),g("span",{key:"underlay",class:`${e}__underlay`},null)])}const Ol=x({color:String,variant:{type:String,default:"elevated",validator:t=>vm.includes(t)}},"variant");function bm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De();const n=N(()=>{const{variant:r}=jt(t);return`${e}--variant-${r}`}),{colorClasses:i,colorStyles:s}=Xs(()=>{const{variant:r,color:o}=jt(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}});return{colorClasses:i,colorStyles:s,variantClasses:n}}const Ml=x({baseColor:String,divided:Boolean,...Al(),...se(),...Ks(),...Pl(),...yn(),...ot(),...qe(),...Ol()},"VBtnGroup"),uo=Y()({name:"VBtnGroup",props:Ml(),setup(t,e){let{slots:n}=e;const{themeClasses:i}=Tt(t),{densityClasses:s}=Qs(t),{borderClasses:r}=xl(t),{elevationClasses:o}=Dl(t),{roundedClasses:a}=bn(t);Co({VBtn:{height:"auto",baseColor:N(()=>t.baseColor),color:N(()=>t.color),density:N(()=>t.density),flat:!0,variant:N(()=>t.variant)}}),re(()=>g(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},i.value,r.value,s.value,o.value,a.value,t.class],style:t.style},n))}}),Cm=x({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),wm=x({value:null,disabled:Boolean,selectedClass:String},"group-item");function Im(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=ln("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Yn();wo(Symbol.for(`${e.description}:id`),s);const r=Io(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=N(()=>t.value),a=b(()=>!!(r.disabled.value||t.disabled));r.register({id:s,value:o,disabled:a},i),cn(()=>{r.unregister(s)});const l=b(()=>r.isSelected(s)),c=b(()=>r.items.value[0].id===s),u=b(()=>r.items.value[r.items.value.length-1].id===s),d=b(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return ye(l,h=>{i.emit("group:selected",{value:h})},{flush:"sync"}),{id:s,isSelected:l,isFirst:c,isLast:u,toggle:()=>r.select(s,!l.value),select:h=>r.select(s,h),selectedClass:d,value:o,disabled:a,group:r}}function Em(t,e){let n=!1;const i=Di([]),s=un(t,"modelValue",[],h=>h==null?[]:Ll(i,Ft(h)),h=>{const f=Tm(i,h);return t.multiple?f:f[0]}),r=ln("useGroup");function o(h,f){const _=h,m=Symbol.for(`${e.description}:id`),I=Tc(m,r==null?void 0:r.vnode).indexOf(f);To(_.value)==null&&(_.value=I,_.useIndexAsValue=!0),I>-1?i.splice(I,0,_):i.push(_)}function a(h){if(n)return;l();const f=i.findIndex(_=>_.id===h);i.splice(f,1)}function l(){const h=i.find(f=>!f.disabled);h&&t.mandatory==="force"&&!s.value.length&&(s.value=[h.id])}Eo(()=>{l()}),cn(()=>{n=!0}),Sc(()=>{for(let h=0;h<i.length;h++)i[h].useIndexAsValue&&(i[h].value=h)});function c(h,f){const _=i.find(m=>m.id===h);if(!(f&&(_!=null&&_.disabled)))if(t.multiple){const m=s.value.slice(),v=m.findIndex(S=>S===h),I=~v;if(f=f??!I,I&&t.mandatory&&m.length<=1||!I&&t.max!=null&&m.length+1>t.max)return;v<0&&f?m.push(h):v>=0&&!f&&m.splice(v,1),s.value=m}else{const m=s.value.includes(h);if(t.mandatory&&m)return;s.value=f??!m?[h]:[]}}function u(h){if(t.multiple,s.value.length){const f=s.value[0],_=i.findIndex(I=>I.id===f);let m=(_+h)%i.length,v=i[m];for(;v.disabled&&m!==_;)m=(m+h)%i.length,v=i[m];if(v.disabled)return;s.value=[i[m].id]}else{const f=i.find(_=>!_.disabled);f&&(s.value=[f.id])}}const d={register:o,unregister:a,selected:s,select:c,disabled:N(()=>t.disabled),prev:()=>u(i.length-1),next:()=>u(1),isSelected:h=>s.value.includes(h),selectedClass:N(()=>t.selectedClass),items:N(()=>i),getItemIndex:h=>Sm(i,h)};return wo(e,d),d}function Sm(t,e){const n=Ll(t,[e]);return n.length?t.findIndex(i=>i.id===n[0]):-1}function Ll(t,e){const n=[];return e.forEach(i=>{const s=t.find(o=>So(i,o.value)),r=t[i];(s==null?void 0:s.value)!=null?n.push(s.id):r!=null&&n.push(r.id)}),n}function Tm(t,e){const n=[];return e.forEach(i=>{const s=t.findIndex(r=>r.id===i);if(~s){const r=t[s];n.push(r.value!=null?r.value:s)}}),n}const Fl=Symbol.for("vuetify:v-btn-toggle"),km=x({...Ml(),...Cm()},"VBtnToggle");Y()({name:"VBtnToggle",props:km(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:i,next:s,prev:r,select:o,selected:a}=Em(t,Fl);return re(()=>{const l=uo.filterProps(t);return g(uo,Le({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:i,next:s,prev:r,select:o,selected:a})]}})}),{next:s,prev:r,select:o}}});const Rm=x({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Tn=Y(!1)({name:"VDefaultsProvider",props:Rm(),setup(t,e){let{slots:n}=e;const{defaults:i,disabled:s,reset:r,root:o,scoped:a}=kc(t);return Co(i,{reset:r,root:o,scoped:a,disabled:s}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),Nm=["x-small","small","default","large","x-large"],Js=x({size:{type:[String,Number],default:"default"}},"size");function Zs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De();return bo(()=>{const n=t.size;let i,s;return xi(Nm,n)?i=`${e}--size-${n}`:n&&(s={width:ee(n),height:ee(n)}),{sizeClasses:i,sizeStyles:s}})}const Am=x({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Fe,opacity:[String,Number],...se(),...Js(),...ot({tag:"i"}),...qe()},"VIcon"),kn=Y()({name:"VIcon",props:Am(),setup(t,e){let{attrs:n,slots:i}=e;const s=ke(),{themeClasses:r}=Rc(),{iconData:o}=Nc(()=>s.value||t.icon),{sizeClasses:a}=Zs(t),{textColorClasses:l,textColorStyles:c}=St(()=>t.color);return re(()=>{var h,f;const u=(h=i.default)==null?void 0:h.call(i);u&&(s.value=(f=Ac(u).filter(_=>_.type===xc&&_.children&&typeof _.children=="string")[0])==null?void 0:f.children);const d=!!(n.onClick||n.onClickOnce);return g(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":d,"v-icon--disabled":t.disabled,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[{"--v-icon-opacity":t.opacity},a.value?void 0:{fontSize:ee(t.size),height:ee(t.size),width:ee(t.size)},c.value,t.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?t.disabled?-1:0:void 0},{default:()=>[u]})}),{}}});function Bl(t,e){const n=Ie(),i=ke(!1);if(is){const s=new IntersectionObserver(r=>{i.value=!!r.find(o=>o.isIntersecting)},e);cn(()=>{s.disconnect()}),ye(n,(r,o)=>{o&&(s.unobserve(o),i.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:i}}const xm=x({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...se(),...Js(),...ot({tag:"div"}),...qe()},"VProgressCircular"),Pm=Y()({name:"VProgressCircular",props:xm(),setup(t,e){let{slots:n}=e;const i=20,s=2*Math.PI*i,r=Ie(),{themeClasses:o}=Tt(t),{sizeClasses:a,sizeStyles:l}=Zs(t),{textColorClasses:c,textColorStyles:u}=St(()=>t.color),{textColorClasses:d,textColorStyles:h}=St(()=>t.bgColor),{intersectionRef:f,isIntersecting:_}=Bl(),{resizeRef:m,contentRect:v}=Pc(),I=N(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),S=N(()=>Number(t.width)),y=N(()=>l.value?Number(t.size):v.value?v.value.width:Math.max(S.value,32)),E=N(()=>i/(1-S.value/y.value)*2),L=N(()=>S.value/y.value*E.value),A=N(()=>ee((100-I.value)/100*s));return Dc(()=>{f.value=r.value,m.value=r.value}),re(()=>g(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":_.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,u.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:I.value},{default:()=>[g("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${E.value} ${E.value}`},[g("circle",{class:["v-progress-circular__underlay",d.value],style:h.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":L.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),g("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":L.value,"stroke-dasharray":s,"stroke-dashoffset":A.value},null)]),n.default&&g("div",{class:"v-progress-circular__content"},[n.default({value:I.value})])]})),{}}}),ho={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Vl=x({location:String},"location");function $l(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=Kn();return{locationStyles:b(()=>{if(!t.location)return{};const{side:r,align:o}=jc(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[ho[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[ho[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const Dm=x({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...se(),...Vl({location:"top"}),...yn(),...ot(),...qe()},"VProgressLinear"),Om=Y()({name:"VProgressLinear",props:Dm(),emits:{"update:modelValue":t=>!0},setup(t,e){var W;let{slots:n}=e;const i=un(t,"modelValue"),{isRtl:s,rtlClasses:r}=Kn(),{themeClasses:o}=Tt(t),{locationStyles:a}=$l(t),{textColorClasses:l,textColorStyles:c}=St(()=>t.color),{backgroundColorClasses:u,backgroundColorStyles:d}=zt(()=>t.bgColor||t.color),{backgroundColorClasses:h,backgroundColorStyles:f}=zt(()=>t.bufferColor||t.bgColor||t.color),{backgroundColorClasses:_,backgroundColorStyles:m}=zt(()=>t.color),{roundedClasses:v}=bn(t),{intersectionRef:I,isIntersecting:S}=Bl(),y=b(()=>parseFloat(t.max)),E=b(()=>parseFloat(t.height)),L=b(()=>rr(parseFloat(t.bufferValue)/y.value*100,0,100)),A=b(()=>rr(parseFloat(i.value)/y.value*100,0,100)),D=b(()=>s.value!==t.reverse),U=b(()=>t.indeterminate?"fade-transition":"slide-x-transition"),j=Oc&&((W=window.matchMedia)==null?void 0:W.call(window,"(forced-colors: active)").matches);function pe(C){if(!I.value)return;const{left:P,right:F,width:te}=I.value.getBoundingClientRect(),q=D.value?te-C.clientX+(F-te):C.clientX-P;i.value=Math.round(q/te*y.value)}return re(()=>g(t.tag,{ref:I,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&S.value,"v-progress-linear--reverse":D.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},v.value,o.value,r.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?ee(E.value):0,"--v-progress-linear-height":ee(E.value),...t.absolute?a.value:{}},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:Math.min(parseFloat(i.value),y.value),onClick:t.clickable&&pe},{default:()=>[t.stream&&g("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[D.value?"left":"right"]:ee(-E.value),borderTop:`${ee(E.value/2)} dotted`,opacity:parseFloat(t.bufferOpacity),top:`calc(50% - ${ee(E.value/4)})`,width:ee(100-L.value,"%"),"--v-progress-linear-stream-to":ee(E.value*(D.value?1:-1))}},null),g("div",{class:["v-progress-linear__background",j?void 0:u.value],style:[d.value,{opacity:parseFloat(t.bgOpacity),width:t.stream?0:void 0}]},null),g("div",{class:["v-progress-linear__buffer",j?void 0:h.value],style:[f.value,{opacity:parseFloat(t.bufferOpacity),width:ee(L.value,"%")}]},null),g(Qn,{name:U.value},{default:()=>[t.indeterminate?g("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(C=>g("div",{key:C,class:["v-progress-linear__indeterminate",C,j?void 0:_.value],style:m.value},null))]):g("div",{class:["v-progress-linear__determinate",j?void 0:_.value],style:[m.value,{width:ee(A.value,"%")}]},null)]}),n.default&&g("div",{class:"v-progress-linear__content"},[n.default({value:A.value,buffer:L.value})])]})),{}}}),Wl=x({loading:[Boolean,String]},"loader");function Ul(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De();return{loaderClasses:N(()=>({[`${e}--loading`]:t.loading}))}}function Mm(t,e){var i;let{slots:n}=e;return g("div",{class:`${t.name}__loader`},[((i=n.default)==null?void 0:i.call(n,{color:t.color,isActive:t.active}))||g(Om,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const Lm=["static","relative","fixed","absolute","sticky"],Fm=x({position:{type:String,validator:t=>Lm.includes(t)}},"position");function Bm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De();return{positionClasses:N(()=>t.position?`${e}--${t.position}`:void 0)}}function Vm(){const t=ln("useRoute");return b(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function $m(t,e){var u,d;const n=Mc("RouterLink"),i=N(()=>!!(t.href||t.to)),s=b(()=>(i==null?void 0:i.value)||or(e,"click")||or(t,"click"));if(typeof n=="string"||!("useLink"in n)){const h=N(()=>t.href);return{isLink:i,isClickable:s,href:h,linkProps:Di({href:h})}}const r=n.useLink({to:N(()=>t.to||""),replace:N(()=>t.replace)}),o=b(()=>t.to?r:void 0),a=Vm(),l=b(()=>{var h,f,_;return o.value?t.exact?a.value?((_=o.value.isExactActive)==null?void 0:_.value)&&So(o.value.route.value.query,a.value.query):((f=o.value.isExactActive)==null?void 0:f.value)??!1:((h=o.value.isActive)==null?void 0:h.value)??!1:!1}),c=b(()=>{var h;return t.to?(h=o.value)==null?void 0:h.route.value.href:t.href});return{isLink:i,isClickable:s,isActive:l,route:(u=o.value)==null?void 0:u.route,navigate:(d=o.value)==null?void 0:d.navigate,href:c,linkProps:Di({href:c,"aria-current":N(()=>l.value?"page":void 0)})}}const Wm=x({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Um(t,e){ye(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&Gt(()=>{e(!0)})},{immediate:!0})}const ts=Symbol("rippleStop"),Hm=80;function fo(t,e){t.style.transform=e,t.style.webkitTransform=e}function ns(t){return t.constructor.name==="TouchEvent"}function Hl(t){return t.constructor.name==="KeyboardEvent"}const zm=function(t,e){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,s=0;if(!Hl(t)){const h=e.getBoundingClientRect(),f=ns(t)?t.touches[t.touches.length-1]:t;i=f.clientX-h.left,s=f.clientY-h.top}let r=0,o=.3;(d=e._ripple)!=null&&d.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((i-r)**2+(s-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,c=n.center?a:`${i-r}px`,u=n.center?l:`${s-r}px`;return{radius:r,scale:o,x:c,y:u,centerX:a,centerY:l}},qn={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:c,centerY:u}=zm(t,e,n),d=`${r*2}px`;s.className="v-ripple__animation",s.style.width=d,s.style.height=d,e.appendChild(i);const h=window.getComputedStyle(e);h&&h.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),fo(s,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),fo(s,`translate(${c}, ${u}) scale3d(1,1,1)`)})})},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),s=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},s)}};function zl(t){return typeof t>"u"||!!t}function on(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[ts])){if(t[ts]=!0,ns(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Hl(t),n._ripple.class&&(e.class=n._ripple.class),ns(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{qn.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Hm)}else qn.show(t,n,e)}}function go(t){t[ts]=!0}function ue(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{ue(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),qn.hide(e)}}function jl(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let an=!1;function Gl(t){!an&&(t.keyCode===ar.enter||t.keyCode===ar.space)&&(an=!0,on(t))}function ql(t){an=!1,ue(t)}function Yl(t){an&&(an=!1,ue(t))}function Kl(t,e,n){const{value:i,modifiers:s}=e,r=zl(i);if(r||qn.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=r,t._ripple.centered=s.center,t._ripple.circle=s.circle,Lc(i)&&i.class&&(t._ripple.class=i.class),r&&!n){if(s.stop){t.addEventListener("touchstart",go,{passive:!0}),t.addEventListener("mousedown",go);return}t.addEventListener("touchstart",on,{passive:!0}),t.addEventListener("touchend",ue,{passive:!0}),t.addEventListener("touchmove",jl,{passive:!0}),t.addEventListener("touchcancel",ue),t.addEventListener("mousedown",on),t.addEventListener("mouseup",ue),t.addEventListener("mouseleave",ue),t.addEventListener("keydown",Gl),t.addEventListener("keyup",ql),t.addEventListener("blur",Yl),t.addEventListener("dragstart",ue,{passive:!0})}else!r&&n&&Ql(t)}function Ql(t){t.removeEventListener("mousedown",on),t.removeEventListener("touchstart",on),t.removeEventListener("touchend",ue),t.removeEventListener("touchmove",jl),t.removeEventListener("touchcancel",ue),t.removeEventListener("mouseup",ue),t.removeEventListener("mouseleave",ue),t.removeEventListener("keydown",Gl),t.removeEventListener("keyup",ql),t.removeEventListener("dragstart",ue),t.removeEventListener("blur",Yl)}function jm(t,e){Kl(t,e,!1)}function Gm(t){delete t._ripple,Ql(t)}function qm(t,e){if(e.value===e.oldValue)return;const n=zl(e.oldValue);Kl(t,e,n)}const Ym={mounted:jm,unmounted:Gm,updated:qm},Km=x({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Fl},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Fe,appendIcon:Fe,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:{type:[String,Number,Boolean],default:void 0},...Al(),...se(),...Ks(),...rs(),...Pl(),...wm(),...Wl(),...Vl(),...Fm(),...yn(),...Wm(),...Js(),...ot({tag:"button"}),...qe(),...Ol({variant:"elevated"})},"VBtn"),Op=Y()({name:"VBtn",props:Km(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:i}=e;const{themeClasses:s}=Tt(t),{borderClasses:r}=xl(t),{densityClasses:o}=Qs(t),{dimensionStyles:a}=ss(t),{elevationClasses:l}=Dl(t),{loaderClasses:c}=Ul(t),{locationStyles:u}=$l(t),{positionClasses:d}=Bm(t),{roundedClasses:h}=bn(t),{sizeClasses:f,sizeStyles:_}=Zs(t),m=Im(t,t.symbol,!1),v=$m(t,n),I=b(()=>{var W;return t.active!==void 0?t.active:v.isLink.value?(W=v.isActive)==null?void 0:W.value:m==null?void 0:m.isSelected.value}),S=N(()=>I.value?t.activeColor??t.color:t.color),y=b(()=>{var C,P;return{color:(m==null?void 0:m.isSelected.value)&&(!v.isLink.value||((C=v.isActive)==null?void 0:C.value))||!m||((P=v.isActive)==null?void 0:P.value)?S.value??t.baseColor:t.baseColor,variant:t.variant}}),{colorClasses:E,colorStyles:L,variantClasses:A}=bm(y),D=b(()=>(m==null?void 0:m.disabled.value)||t.disabled),U=N(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),j=b(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function pe(W){var C;D.value||v.isLink.value&&(W.metaKey||W.ctrlKey||W.shiftKey||W.button!==0||n.target==="_blank")||((C=v.navigate)==null||C.call(v,W),m==null||m.toggle())}return Um(v,m==null?void 0:m.select),re(()=>{const W=v.isLink.value?"a":t.tag,C=!!(t.prependIcon||i.prepend),P=!!(t.appendIcon||i.append),F=!!(t.icon&&t.icon!==!0);return pt(g(W,Le({type:W==="a"?void 0:"button",class:["v-btn",m==null?void 0:m.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":t.block,"v-btn--disabled":D.value,"v-btn--elevated":U.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--readonly":t.readonly,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},s.value,r.value,E.value,o.value,l.value,c.value,d.value,h.value,f.value,A.value,t.class],style:[L.value,a.value,u.value,_.value,t.style],"aria-busy":t.loading?!0:void 0,disabled:D.value||void 0,tabindex:t.loading||t.readonly?-1:void 0,onClick:pe,value:j.value},v.linkProps),{default:()=>{var te;return[ym(!0,"v-btn"),!t.icon&&C&&g("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?g(Tn,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},i.prepend):g(kn,{key:"prepend-icon",icon:t.prependIcon},null)]),g("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&F?g(kn,{key:"content-icon",icon:t.icon},null):g(Tn,{key:"content-defaults",disabled:!F,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var q;return[((q=i.default)==null?void 0:q.call(i))??Fc(t.text)]}})]),!t.icon&&P&&g("span",{key:"append",class:"v-btn__append"},[i.append?g(Tn,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},i.append):g(kn,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&g("span",{key:"loader",class:"v-btn__loader"},[((te=i.loader)==null?void 0:te.call(i))??g(Pm,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,width:"2"},null)])]}}),[[Ym,!D.value&&t.ripple,"",{center:!!t.icon}]])}),{group:m}}});function Qm(t){return{aspectStyles:b(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const Xl=x({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...se(),...rs()},"VResponsive"),_o=Y()({name:"VResponsive",props:Xl(),setup(t,e){let{slots:n}=e;const{aspectStyles:i}=Qm(t),{dimensionStyles:s}=ss(t);return re(()=>{var r;return g("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[s.value,t.style]},[g("div",{class:"v-responsive__sizer",style:i.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&g("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),er=x({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),ft=(t,e)=>{let{slots:n}=e;const{transition:i,disabled:s,group:r,...o}=t,{component:a=r?os:Qn,...l}=typeof i=="object"?i:{};return dn(a,Le(typeof i=="string"?{name:s?"":i}:l,typeof i=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:r}).filter(c=>{let[u,d]=c;return d!==void 0})),o),n)};function Xm(t,e){if(!is)return;const n=e.modifiers||{},i=e.value,{handler:s,options:r}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var d;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(d=t._observe)==null?void 0:d[e.instance.$.uid];if(!c)return;const u=a.some(h=>h.isIntersecting);s&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&s(u,a,l),u&&n.once?Jl(t,e):c.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function Jl(t,e){var i;const n=(i=t._observe)==null?void 0:i[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const Zl={mounted:Xm,unmounted:Jl},Jm=x({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Xl(),...se(),...yn(),...er()},"VImg"),Mp=Y()({name:"VImg",directives:{intersect:Zl},props:Jm(),emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:i}=e;const{backgroundColorClasses:s,backgroundColorStyles:r}=zt(()=>t.color),{roundedClasses:o}=bn(t),a=ln("VImg"),l=ke(""),c=Ie(),u=ke(t.eager?"loading":"idle"),d=ke(),h=ke(),f=b(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),_=b(()=>f.value.aspect||d.value/h.value||0);ye(()=>t.src,()=>{m(u.value!=="idle")}),ye(_,(C,P)=>{!C&&P&&c.value&&E(c.value)}),ko(()=>m());function m(C){if(!(t.eager&&C)&&!(is&&!C&&!t.eager)){if(u.value="loading",f.value.lazySrc){const P=new Image;P.src=f.value.lazySrc,E(P,null)}f.value.src&&Gt(()=>{var P;n("loadstart",((P=c.value)==null?void 0:P.currentSrc)||f.value.src),setTimeout(()=>{var F;if(!a.isUnmounted)if((F=c.value)!=null&&F.complete){if(c.value.naturalWidth||I(),u.value==="error")return;_.value||E(c.value,null),u.value==="loading"&&v()}else _.value||E(c.value),S()})})}}function v(){var C;a.isUnmounted||(S(),E(c.value),u.value="loaded",n("load",((C=c.value)==null?void 0:C.currentSrc)||f.value.src))}function I(){var C;a.isUnmounted||(u.value="error",n("error",((C=c.value)==null?void 0:C.currentSrc)||f.value.src))}function S(){const C=c.value;C&&(l.value=C.currentSrc||C.src)}let y=-1;cn(()=>{clearTimeout(y)});function E(C){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const F=()=>{if(clearTimeout(y),a.isUnmounted)return;const{naturalHeight:te,naturalWidth:q}=C;te||q?(d.value=q,h.value=te):!C.complete&&u.value==="loading"&&P!=null?y=window.setTimeout(F,P):(C.currentSrc.endsWith(".svg")||C.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,h.value=1)};F()}const L=N(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),A=()=>{var F;if(!f.value.src||u.value==="idle")return null;const C=g("img",{class:["v-img__img",L.value],style:{objectPosition:t.position},crossorigin:t.crossorigin,src:f.value.src,srcset:f.value.srcset,alt:t.alt,referrerpolicy:t.referrerpolicy,draggable:t.draggable,sizes:t.sizes,ref:c,onLoad:v,onError:I},null),P=(F=i.sources)==null?void 0:F.call(i);return g(ft,{transition:t.transition,appear:!0},{default:()=>[pt(P?g("picture",{class:"v-img__picture"},[P,C]):C,[[as,u.value==="loaded"]])]})},D=()=>g(ft,{transition:t.transition},{default:()=>[f.value.lazySrc&&u.value!=="loaded"&&g("img",{class:["v-img__img","v-img__img--preload",L.value],style:{objectPosition:t.position},crossorigin:t.crossorigin,src:f.value.lazySrc,alt:t.alt,referrerpolicy:t.referrerpolicy,draggable:t.draggable},null)]}),U=()=>i.placeholder?g(ft,{transition:t.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!i.error)&&g("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,j=()=>i.error?g(ft,{transition:t.transition,appear:!0},{default:()=>[u.value==="error"&&g("div",{class:"v-img__error"},[i.error()])]}):null,pe=()=>t.gradient?g("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,W=ke(!1);{const C=ye(_,P=>{P&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),C())})}return re(()=>{const C=_o.filterProps(t);return pt(g(_o,Le({class:["v-img",{"v-img--absolute":t.absolute,"v-img--booting":!W.value},s.value,o.value,t.class],style:[{width:ee(t.width==="auto"?d.value:t.width)},r.value,t.style]},C,{aspectRatio:_.value,"aria-label":t.alt,role:t.alt?"img":void 0}),{additional:()=>g(gt,null,[g(A,null,null),g(D,null,null),g(pe,null,null),g(U,null,null),g(j,null,null)]),default:i.default}),[[Ro("intersect"),{handler:m,options:t.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:u,naturalWidth:d,naturalHeight:h}}}),ec=Xn.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),tc=Xn.reduce((t,e)=>{const n="offset"+ls(e);return t[n]={type:[String,Number],default:null},t},{}),nc=Xn.reduce((t,e)=>{const n="order"+ls(e);return t[n]={type:[String,Number],default:null},t},{}),mo={col:Object.keys(ec),offset:Object.keys(tc),order:Object.keys(nc)};function Zm(t,e,n){let i=t;if(!(n==null||n===!1)){if(e){const s=e.replace(t,"");i+=`-${s}`}return t==="col"&&(i="v-"+i),t==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const ep=["auto","start","end","center","baseline","stretch"],tp=x({cols:{type:[Boolean,String,Number],default:!1},...ec,offset:{type:[String,Number],default:null},...tc,order:{type:[String,Number],default:null},...nc,alignSelf:{type:String,default:null,validator:t=>ep.includes(t)},...se(),...ot()},"VCol"),Lp=Y()({name:"VCol",props:tp(),setup(t,e){let{slots:n}=e;const i=b(()=>{const s=[];let r;for(r in mo)mo[r].forEach(a=>{const l=t[a],c=Zm(r,a,l);c&&s.push(c)});const o=s.some(a=>a.startsWith("v-col-"));return s.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),s});return()=>{var s;return dn(t.tag,{class:[i.value,t.class],style:t.style},(s=n.default)==null?void 0:s.call(n))}}}),tr=["start","end","center"],ic=["space-between","space-around","space-evenly"];function nr(t,e){return Xn.reduce((n,i)=>{const s=t+ls(i);return n[s]=e(),n},{})}const np=[...tr,"baseline","stretch"],sc=t=>np.includes(t),rc=nr("align",()=>({type:String,default:null,validator:sc})),ip=[...tr,...ic],oc=t=>ip.includes(t),ac=nr("justify",()=>({type:String,default:null,validator:oc})),sp=[...tr,...ic,"stretch"],lc=t=>sp.includes(t),cc=nr("alignContent",()=>({type:String,default:null,validator:lc})),po={align:Object.keys(rc),justify:Object.keys(ac),alignContent:Object.keys(cc)},rp={align:"align",justify:"justify",alignContent:"align-content"};function op(t,e,n){let i=rp[t];if(n!=null){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${n}`,i.toLowerCase()}}const ap=x({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:sc},...rc,justify:{type:String,default:null,validator:oc},...ac,alignContent:{type:String,default:null,validator:lc},...cc,...se(),...ot()},"VRow"),Fp=Y()({name:"VRow",props:ap(),setup(t,e){let{slots:n}=e;const i=b(()=>{const s=[];let r;for(r in po)po[r].forEach(o=>{const a=t[o],l=op(r,o,a);l&&s.push(l)});return s.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),s});return()=>{var s;return dn(t.tag,{class:["v-row",i.value,t.class],style:t.style},(s=n.default)==null?void 0:s.call(n))}}}),lp=x({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function he(t,e,n){return Y()({name:t,props:lp({mode:n,origin:e}),setup(i,s){let{slots:r}=s;const o={onBeforeEnter(a){i.origin&&(a.style.transformOrigin=i.origin)},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:d}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${d}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:u,width:d,height:h}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=d||"",a.style.height=h||""}}};return()=>{const a=i.group?os:Qn;return dn(a,{name:i.disabled?"":t,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:o},r.default)}}})}function uc(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Y()({name:t,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(i,s){let{slots:r}=s;const o=i.group?os:Qn;return()=>dn(o,{name:i.disabled?"":t,css:!i.disabled,...i.disabled?{}:e},r.default)}})}function dc(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=Bc(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;if(!a)return;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){if(!o._initialStyle)return;const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}he("fab-transition","center center","out-in");he("dialog-bottom-transition");he("dialog-top-transition");he("fade-transition");he("scale-transition");he("scroll-x-transition");he("scroll-x-reverse-transition");he("scroll-y-transition");he("scroll-y-reverse-transition");he("slide-x-transition");he("slide-x-reverse-transition");const hc=he("slide-y-transition");he("slide-y-reverse-transition");uc("expand-transition",dc());const cp=uc("expand-x-transition",dc("",!0)),up=x({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...se(),...er({transition:{component:hc}})},"VCounter"),dp=Y()({name:"VCounter",functional:!0,props:up(),setup(t,e){let{slots:n}=e;const i=N(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return re(()=>g(ft,{transition:t.transition},{default:()=>[pt(g("div",{class:["v-counter",{"text-error":t.max&&!t.disabled&&parseFloat(t.value)>parseFloat(t.max)},t.class],style:t.style},[n.default?n.default({counter:i.value,max:t.max,value:t.value}):i.value]),[[as,t.active]])]})),{}}}),hp=x({text:String,onClick:et(),...se(),...qe()},"VLabel"),fp=Y()({name:"VLabel",props:hp(),setup(t,e){let{slots:n}=e;return re(()=>{var i;return g("label",{class:["v-label",{"v-label--clickable":!!t.onClick},t.class],style:t.style,onClick:t.onClick},[t.text,(i=n.default)==null?void 0:i.call(n)])}),{}}}),gp=x({floating:Boolean,...se()},"VFieldLabel"),En=Y()({name:"VFieldLabel",props:gp(),setup(t,e){let{slots:n}=e;return re(()=>g(fp,{class:["v-field-label",{"v-field-label--floating":t.floating},t.class],style:t.style,"aria-hidden":t.floating||void 0},n)),{}}});function fc(t){const{t:e}=Vc();function n(i){let{name:s,color:r}=i;const o={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],a=t[`onClick:${s}`];function l(u){u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),u.stopPropagation(),No(a,new PointerEvent("click",u)))}const c=a&&o?e(`$vuetify.input.${o}`,t.label??""):void 0;return g(kn,{icon:t[`${s}Icon`],"aria-label":c,onClick:a,onKeydown:l,color:r},null)}return{InputIcon:n}}const gc=x({focused:Boolean,"onUpdate:focused":et()},"focus");function _c(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De();const n=un(t,"focused"),i=N(()=>({[`${e}--focused`]:n.value}));function s(){n.value=!0}function r(){n.value=!1}return{focusClasses:i,isFocused:n,focus:s,blur:r}}const _p=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],mc=x({appendInnerIcon:Fe,bgColor:String,clearable:Boolean,clearIcon:{type:Fe,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},glow:Boolean,error:Boolean,flat:Boolean,iconColor:[Boolean,String],label:String,persistentClear:Boolean,prependInnerIcon:Fe,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>_p.includes(t)},"onClick:clear":et(),"onClick:appendInner":et(),"onClick:prependInner":et(),...se(),...Wl(),...yn(),...qe()},"VField"),vo=Y()({name:"VField",inheritAttrs:!1,props:{id:String,...gc(),...mc()},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:i,slots:s}=e;const{themeClasses:r}=Tt(t),{loaderClasses:o}=Ul(t),{focusClasses:a,isFocused:l,focus:c,blur:u}=_c(t),{InputIcon:d}=fc(t),{roundedClasses:h}=bn(t),{rtlClasses:f}=Kn(),_=N(()=>t.dirty||t.active),m=N(()=>!!(t.label||s.label)),v=N(()=>!t.singleLine&&m.value),I=Yn(),S=b(()=>t.id||`input-${I}`),y=N(()=>`${S.value}-messages`),E=Ie(),L=Ie(),A=Ie(),D=b(()=>["plain","underlined"].includes(t.variant)),U=b(()=>t.error||t.disabled?void 0:_.value&&l.value?t.color:t.baseColor),j=b(()=>{if(!(!t.iconColor||t.glow&&!l.value))return t.iconColor===!0?U.value:t.iconColor}),{backgroundColorClasses:pe,backgroundColorStyles:W}=zt(()=>t.bgColor),{textColorClasses:C,textColorStyles:P}=St(U);ye(_,q=>{if(v.value){const le=E.value.$el,fe=L.value.$el;requestAnimationFrame(()=>{const ge=Gc(le),ce=fe.getBoundingClientRect(),ut=ce.x-ge.x,Ye=ce.y-ge.y-(ge.height/2-ce.height/2),Pt=ce.width/.75,Cn=Math.abs(Pt-ge.width)>1?{maxWidth:ee(Pt)}:void 0,vc=getComputedStyle(le),ir=getComputedStyle(fe),yc=parseFloat(vc.transitionDuration)*1e3||150,bc=parseFloat(ir.getPropertyValue("--v-field-label-scale")),Cc=ir.getPropertyValue("color");le.style.visibility="visible",fe.style.visibility="hidden",qc(le,{transform:`translate(${ut}px, ${Ye}px) scale(${bc})`,color:Cc,...Cn},{duration:yc,easing:Yc,direction:q?"normal":"reverse"}).finished.then(()=>{le.style.removeProperty("visibility"),fe.style.removeProperty("visibility")})})}},{flush:"post"});const F=b(()=>({isActive:_,isFocused:l,controlRef:A,blur:u,focus:c}));function te(q){q.target!==document.activeElement&&q.preventDefault()}return re(()=>{var ut,Ye,Pt;const q=t.variant==="outlined",le=!!(s["prepend-inner"]||t.prependInnerIcon),fe=!!(t.clearable||s.clear)&&!t.disabled,ge=!!(s["append-inner"]||t.appendInnerIcon||fe),ce=()=>s.label?s.label({...F.value,label:t.label,props:{for:S.value}}):t.label;return g("div",Le({class:["v-field",{"v-field--active":_.value,"v-field--appended":ge,"v-field--center-affix":t.centerAffix??!D.value,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--glow":t.glow,"v-field--flat":t.flat,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":le,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!ce(),[`v-field--variant-${t.variant}`]:!0},r.value,pe.value,a.value,o.value,h.value,f.value,t.class],style:[W.value,t.style],onClick:te},n),[g("div",{class:"v-field__overlay"},null),g(Mm,{name:"v-field",active:!!t.loading,color:t.error?"error":typeof t.loading=="string"?t.loading:t.color},{default:s.loader}),le&&g("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&g(d,{key:"prepend-icon",name:"prependInner",color:j.value},null),(ut=s["prepend-inner"])==null?void 0:ut.call(s,F.value)]),g("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(t.variant)&&v.value&&g(En,{key:"floating-label",ref:L,class:[C.value],floating:!0,for:S.value,style:P.value},{default:()=>[ce()]}),m.value&&g(En,{key:"label",ref:E,for:S.value},{default:()=>[ce()]}),((Ye=s.default)==null?void 0:Ye.call(s,{...F.value,props:{id:S.value,class:"v-field__input","aria-describedby":y.value},focus:c,blur:u}))??g("div",{id:S.value,class:"v-field__input","aria-describedby":y.value},null)]),fe&&g(cp,{key:"clear"},{default:()=>[pt(g("div",{class:"v-field__clearable",onMousedown:Cn=>{Cn.preventDefault(),Cn.stopPropagation()}},[g(Tn,{defaults:{VIcon:{icon:t.clearIcon}}},{default:()=>[s.clear?s.clear({...F.value,props:{onFocus:c,onBlur:u,onClick:t["onClick:clear"]}}):g(d,{name:"clear",onFocus:c,onBlur:u},null)]})]),[[as,t.dirty]])]}),ge&&g("div",{key:"append",class:"v-field__append-inner"},[(Pt=s["append-inner"])==null?void 0:Pt.call(s,F.value),t.appendInnerIcon&&g(d,{key:"append-icon",name:"appendInner",color:j.value},null)]),g("div",{class:["v-field__outline",C.value],style:P.value},[q&&g(gt,null,[g("div",{class:"v-field__outline__start"},null),v.value&&g("div",{class:"v-field__outline__notch"},[g(En,{ref:L,floating:!0,for:S.value},{default:()=>[ce()]})]),g("div",{class:"v-field__outline__end"},null)]),D.value&&v.value&&g(En,{ref:L,floating:!0,for:S.value},{default:()=>[ce()]})])])}),{controlRef:A,fieldIconColor:j}}}),mp=x({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...se(),...er({transition:{component:hc,leaveAbsolute:!0,group:!0}})},"VMessages"),pp=Y()({name:"VMessages",props:mp(),setup(t,e){let{slots:n}=e;const i=b(()=>Ft(t.messages)),{textColorClasses:s,textColorStyles:r}=St(()=>t.color);return re(()=>g(ft,{transition:t.transition,tag:"div",class:["v-messages",s.value,t.class],style:[r.value,t.style]},{default:()=>[t.active&&i.value.map((o,a)=>g("div",{class:"v-messages__message",key:`${a}-${i.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),vp=Symbol.for("vuetify:form");function yp(t){const e=Io(vp,null);return{...e,isReadonly:b(()=>!!((t==null?void 0:t.readonly)??(e==null?void 0:e.isReadonly.value))),isDisabled:b(()=>!!((t==null?void 0:t.disabled)??(e==null?void 0:e.isDisabled.value)))}}const bp=x({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...gc()},"validation");function Cp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:De(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Yn();const i=un(t,"modelValue"),s=b(()=>t.validationValue===void 0?i.value:t.validationValue),r=yp(t),o=Ie([]),a=ke(!0),l=b(()=>!!(Ft(i.value===""?null:i.value).length||Ft(s.value===""?null:s.value).length)),c=b(()=>{var y;return(y=t.errorMessages)!=null&&y.length?Ft(t.errorMessages).concat(o.value).slice(0,Math.max(0,Number(t.maxErrors))):o.value}),u=b(()=>{var L;let y=(t.validateOn??((L=r.validateOn)==null?void 0:L.value))||"input";y==="lazy"&&(y="input lazy"),y==="eager"&&(y="input eager");const E=new Set((y==null?void 0:y.split(" "))??[]);return{input:E.has("input"),blur:E.has("blur")||E.has("input")||E.has("invalid-input"),invalidInput:E.has("invalid-input"),lazy:E.has("lazy"),eager:E.has("eager")}}),d=b(()=>{var y;return t.error||(y=t.errorMessages)!=null&&y.length?!1:t.rules.length?a.value?o.value.length||u.value.lazy?null:!0:!o.value.length:!0}),h=ke(!1),f=b(()=>({[`${e}--error`]:d.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:r.isDisabled.value,[`${e}--readonly`]:r.isReadonly.value})),_=ln("validation"),m=b(()=>t.name??To(n));ko(()=>{var y;(y=r.register)==null||y.call(r,{id:m.value,vm:_,validate:S,reset:v,resetValidation:I})}),cn(()=>{var y;(y=r.unregister)==null||y.call(r,m.value)}),Eo(async()=>{var y;u.value.lazy||await S(!u.value.eager),(y=r.update)==null||y.call(r,m.value,d.value,c.value)}),lr(()=>u.value.input||u.value.invalidInput&&d.value===!1,()=>{ye(s,()=>{if(s.value!=null)S();else if(t.focused){const y=ye(()=>t.focused,E=>{E||S(),y()})}})}),lr(()=>u.value.blur,()=>{ye(()=>t.focused,y=>{y||S()})}),ye([d,c],()=>{var y;(y=r.update)==null||y.call(r,m.value,d.value,c.value)});async function v(){i.value=null,await Gt(),await I()}async function I(){a.value=!0,u.value.lazy?o.value=[]:await S(!u.value.eager)}async function S(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const E=[];h.value=!0;for(const L of t.rules){if(E.length>=Number(t.maxErrors??1))break;const D=await(typeof L=="function"?L:()=>L)(s.value);if(D!==!0){if(D!==!1&&typeof D!="string"){console.warn(`${D} is not a valid value. Rule functions must return boolean true or a string.`);continue}E.push(D||"")}}return o.value=E,h.value=!1,a.value=y,o.value}return{errorMessages:c,isDirty:l,isDisabled:r.isDisabled,isReadonly:r.isReadonly,isPristine:a,isValid:d,isValidating:h,reset:v,resetValidation:I,validate:S,validationClasses:f}}const pc=x({id:String,appendIcon:Fe,baseColor:String,centerAffix:{type:Boolean,default:!0},color:String,glow:Boolean,iconColor:[Boolean,String],prependIcon:Fe,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":et(),"onClick:append":et(),...se(),...Ks(),...$c(rs(),["maxWidth","minWidth","width"]),...qe(),...bp()},"VInput"),yo=Y()({name:"VInput",props:{...pc()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:i,emit:s}=e;const{densityClasses:r}=Qs(t),{dimensionStyles:o}=ss(t),{themeClasses:a}=Tt(t),{rtlClasses:l}=Kn(),{InputIcon:c}=fc(t),u=Yn(),d=b(()=>t.id||`input-${u}`),h=b(()=>`${d.value}-messages`),{errorMessages:f,isDirty:_,isDisabled:m,isReadonly:v,isPristine:I,isValid:S,isValidating:y,reset:E,resetValidation:L,validate:A,validationClasses:D}=Cp(t,"v-input",d),U=b(()=>({id:d,messagesId:h,isDirty:_,isDisabled:m,isReadonly:v,isPristine:I,isValid:S,isValidating:y,reset:E,resetValidation:L,validate:A})),j=N(()=>t.error||t.disabled?void 0:t.focused?t.color:t.baseColor),pe=N(()=>{if(t.iconColor)return t.iconColor===!0?j.value:t.iconColor}),W=b(()=>{var C;return(C=t.errorMessages)!=null&&C.length||!I.value&&f.value.length?f.value:t.hint&&(t.persistentHint||t.focused)?t.hint:t.messages});return re(()=>{var q,le,fe,ge;const C=!!(i.prepend||t.prependIcon),P=!!(i.append||t.appendIcon),F=W.value.length>0,te=!t.hideDetails||t.hideDetails==="auto"&&(F||!!i.details);return g("div",{class:["v-input",`v-input--${t.direction}`,{"v-input--center-affix":t.centerAffix,"v-input--focused":t.focused,"v-input--glow":t.glow,"v-input--hide-spin-buttons":t.hideSpinButtons},r.value,a.value,l.value,D.value,t.class],style:[o.value,t.style]},[C&&g("div",{key:"prepend",class:"v-input__prepend"},[(q=i.prepend)==null?void 0:q.call(i,U.value),t.prependIcon&&g(c,{key:"prepend-icon",name:"prepend",color:pe.value},null)]),i.default&&g("div",{class:"v-input__control"},[(le=i.default)==null?void 0:le.call(i,U.value)]),P&&g("div",{key:"append",class:"v-input__append"},[t.appendIcon&&g(c,{key:"append-icon",name:"append",color:pe.value},null),(fe=i.append)==null?void 0:fe.call(i,U.value)]),te&&g("div",{id:h.value,class:"v-input__details",role:"alert","aria-live":"polite"},[g(pp,{active:F,messages:W.value},{message:i.message}),(ge=i.details)==null?void 0:ge.call(i,U.value)])])}),{reset:E,resetValidation:L,validate:A,isValid:S,errorMessages:f}}}),Ni=Symbol("Forwarded refs");function Ai(t,e){let n=t;for(;n;){const i=Reflect.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function wp(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t[Ni]=n,new Proxy(t,{get(s,r){if(Reflect.has(s,r))return Reflect.get(s,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,r)){const a=Reflect.get(o.value,r);return typeof a=="function"?a.bind(o.value):a}}},has(s,r){if(Reflect.has(s,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,r))return!0;return!1},set(s,r,o){if(Reflect.has(s,r))return Reflect.set(s,r,o);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,r))return Reflect.set(a.value,r,o);return!1},getOwnPropertyDescriptor(s,r){var a;const o=Reflect.getOwnPropertyDescriptor(s,r);if(o)return o;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const l of n){if(!l.value)continue;const c=Ai(l.value,r)??("_"in l.value?Ai((a=l.value._)==null?void 0:a.setupState,r):void 0);if(c)return c}for(const l of n){const c=l.value&&l.value[Ni];if(!c)continue;const u=c.slice();for(;u.length;){const d=u.shift(),h=Ai(d.value,r);if(h)return h;const f=d.value&&d.value[Ni];f&&u.push(...f)}}}}})}const Ip=["color","file","time","date","datetime-local","week","month"],Ep=x({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...pc(),...mc()},"VTextField"),Bp=Y()({name:"VTextField",directives:{Intersect:Zl},inheritAttrs:!1,props:Ep(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:i,slots:s}=e;const r=un(t,"modelValue"),{isFocused:o,focus:a,blur:l}=_c(t),c=b(()=>typeof t.counterValue=="function"?t.counterValue(r.value):typeof t.counterValue=="number"?t.counterValue:(r.value??"").toString().length),u=b(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter}),d=b(()=>["plain","underlined"].includes(t.variant));function h(A,D){var U,j;!t.autofocus||!A||(j=(U=D[0].target)==null?void 0:U.focus)==null||j.call(U)}const f=Ie(),_=Ie(),m=Ie(),v=b(()=>Ip.includes(t.type)||t.persistentPlaceholder||o.value||t.active);function I(){var A;m.value!==document.activeElement&&((A=m.value)==null||A.focus()),o.value||a()}function S(A){i("mousedown:control",A),A.target!==m.value&&(I(),A.preventDefault())}function y(A){I(),i("click:control",A)}function E(A){A.stopPropagation(),I(),Gt(()=>{r.value=null,No(t["onClick:clear"],A)})}function L(A){var U;const D=A.target;if(r.value=D.value,(U=t.modelModifiers)!=null&&U.trim&&["text","search","password","tel","url"].includes(t.type)){const j=[D.selectionStart,D.selectionEnd];Gt(()=>{D.selectionStart=j[0],D.selectionEnd=j[1]})}}return re(()=>{const A=!!(s.counter||t.counter!==!1&&t.counter!=null),D=!!(A||s.details),[U,j]=Wc(n),{modelValue:pe,...W}=yo.filterProps(t),C=vo.filterProps(t);return g(yo,Le({ref:f,modelValue:r.value,"onUpdate:modelValue":P=>r.value=P,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-input--plain-underlined":d.value},t.class],style:t.style},U,W,{centerAffix:!d.value,focused:o.value}),{...s,default:P=>{let{id:F,isDisabled:te,isDirty:q,isReadonly:le,isValid:fe}=P;return g(vo,Le({ref:_,onMousedown:S,onClick:y,"onClick:clear":E,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:t.role},C,{id:F.value,active:v.value||q.value,dirty:q.value||t.dirty,disabled:te.value,focused:o.value,error:fe.value===!1}),{...s,default:ge=>{let{props:{class:ce,...ut}}=ge;const Ye=pt(g("input",Le({ref:m,value:r.value,onInput:L,autofocus:t.autofocus,readonly:le.value,disabled:te.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:I,onBlur:l},ut,j),null),[[Ro("intersect"),{handler:h},null,{once:!0}]]);return g(gt,null,[t.prefix&&g("span",{class:"v-text-field__prefix"},[g("span",{class:"v-text-field__prefix__text"},[t.prefix])]),s.default?g("div",{class:ce,"data-no-activator":""},[s.default(),Ye]):Uc(Ye,{class:ce}),t.suffix&&g("span",{class:"v-text-field__suffix"},[g("span",{class:"v-text-field__suffix__text"},[t.suffix])])])}})},details:D?P=>{var F;return g(gt,null,[(F=s.details)==null?void 0:F.call(s,P),A&&g(gt,null,[g("span",null,null),g(dp,{active:t.persistentCounter||o.value,value:c.value,max:u.value,disabled:t.disabled},s.counter)])])}:void 0})}),wp({},f,_,m)}});export{Op as A,Tp as B,Dp as C,Pp as D,xp as E,Rl as F,Np as G,Rp as H,kp as I,rn as J,Ap as K,Mm as L,Ym as R,Mp as V,bm as a,Qs as b,bn as c,Zs as d,kn as e,Tn as f,ym as g,Js as h,yn as i,Ks as j,Al as k,Dl as l,Ol as m,Ul as n,$l as o,Bm as p,$m as q,Wm as r,Fm as s,Vl as t,xl as u,Wl as v,Pl as w,Fp as x,Lp as y,Bp as z};
